/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "WLgTRUa1F9c6f4VFmGibkk4hHGyEiSSoRNEu8vSVWcHWnif4HeMkVEn1x1QEUe2kLN66jTQ67HF79MfF7fFXrA9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xnsUy8sNGcpzDDHhwzcWdGMZigSoESDkr7MiYpKsTdmJgAaWL2oCZbsHV4HT7AjJnFuuu57uZWUvtyU4bdcqxig",
  "key1": "5umFiDsBBoyGsq4N8TUVkYzzjap7buhmSXHz6SeR5YSBhMhRdskXbLUXz1apzYHZzAGkTajZDXjnHg5tuRciBDhR",
  "key2": "25z7VSwmkah6W2V451sJqfWmsMzNzYJwiaEzC4oKeJPUB3a5zXvZracK3vA4e4aEjWf3orqem67Gfau9a1ew1Z3M",
  "key3": "4SLKvY9YKe4ep6YBCyWYgaz4PiGiz2FQgjD8DePKHMttN6bbwKie9HUAFU2DwMSzKRmhJCbHtYpN3kryGEaKEEdV",
  "key4": "5Q9DbRcKaNqstRvk473CPFznXqjZ2tGDrn3ayxJX3WQu8ay4qnpcCBzvs6yjU73QW42JxCWNs95iiT8FgnTWhp3i",
  "key5": "mHP6CvwVbJJDWSx4mQfCPwVZXa5SUjoRB3j6suG1WzYXoHrVJjWup2txoc6soNgFTWisGDa99DMk18eaAbG8uhn",
  "key6": "3kwZFdrAJUBbWmfrsXRoNCxhY4tcs6ZDXAsXN1Cudm82pX7ieXbyEaa5in2Xk3wa9XM5Edjg9zZUsBgD3Sxf5Ndp",
  "key7": "xBosenaPPWrWxpTFBgHjFyxJ2fFLZvBuaGFrmxPpLuxBbd2xYktix1nf5M7KC86PUFkZcHj7hAyXdSDDituojw8",
  "key8": "4Yqfps9DLdzusUypX96QhDPnqfSKJpsEwf6dDqiw4oQbdeNVNbLtqZkkVauWwfWcs3NrGNrZJoJqKXjkWjkPrvMb",
  "key9": "2fpVGRXrqUkywcS4MbDznAL77S4tNpWCEMGDimCzkvgxYaP4oEu43pRqRqnpsbk1Zc2GuuBT4SfVcAXisY3zZHWa",
  "key10": "31cRJWJn6vHw9kwdzesiDMf5Sid34rfawUH4ThMTPmNqQj1oyVJ8H1Qqy74ftpZCV1GLgugZN5XdtGx5tqtUPqf1",
  "key11": "4NbXLTffUskSDyK3F1wneZPEVRHPrLgVtDiNxeEW6g6VvGdXmSF3ZXVWHG1G653uR2yGD1uTDYPZJ6rCG1j4UyFo",
  "key12": "5JjfgW748GXcKX6kwWiWSgCyPtnLtNKKcJ1zs6xNkResta968AbtE3RdcpaQfmBmZfgXmuH2zwoWCDffboUYqsbp",
  "key13": "47NGKMMnyduqSqTaecA7egzeoQtantDoNWQudAHM1Z39hYkwfYqShNjZnn8owWAHXkGgBMhDdqvnodtgQqYSm4Zh",
  "key14": "4sDwXTN125vCMXmiUyrfQBbLzf9FohdEzyhZFjBYe51pXN5J1hv3MUfVADMsFB6g2ANj2WN7SD7dmZWi4q6BTxvd",
  "key15": "2Jdf7omVvdsJALme8VDHZtMG5G9KZSgGvwz37TYEPFuUo3X6m2FjwC45uY3S6DPGLhJiD2StStD3J3ERsYLy7ui2",
  "key16": "qv57V8uXVmvkmb9onjTDVDzM5XmJo5afq5Mbe22sGzFLUx5xh3BcrV5jC6U1rzzSmoYRsmrjufxT2tS6jXCdNKh",
  "key17": "5aq3rit6J4KSRk5UjcEgUsgjo8Jn5mXafXNJzw5UdBng1xkkfPJmYT5iFFRyu6HGdqo6ZLebbqbJGPYN3B2CqeBD",
  "key18": "3KMs7mtJmNJGAeWqLP8jt3GJvw77rqyVKTQNhrjXedbNfK8KFBn8vqXLvaxzHHgN9EaF5J5HnNBkQ4nuB1DMUwoA",
  "key19": "5P7hvWUvzdtWZq8XVqHY34HCfyVCa4BQ5EyTeaJ9Tk7gcZp9EMduQCqmyrobo8jKSr6JKT5fjssYmQvDEFdm1nEd",
  "key20": "cRb7VPpyLA1tLPAaeMEqTXhGZXvZXhuJzN9ABSWhS5tJWGJoNmagF4e73bXMK6D162Gv8ZjhatrkuukU2yJj3gw",
  "key21": "2fbJi6B9Mz4gRSxScWyoNMwHMeuhHRDpm6GhTNyxoeBNxXnMU6tU2WyWxU74D2WrhsCRt6cvJkMGAvtQujqXRciV",
  "key22": "5z1eRMHkvpyJrYFt4K3Cx2dnv4tBj8kTyKDSgUxDi7nyvXU9QTEKfyhKj4rrCX4R42jsxf2wDMmUgMhfRzEvo92s",
  "key23": "4RiYyjYpp8KssVoCpfqArc9KkXSxBDtqtaAUNqAj5ZeQyyc62LSh5XD6tmc6E6HKGPhrFVcreX3u6Q2LYtWBZ81J",
  "key24": "2PmrLChMJcPfGuVGo79BCkTVRDHDd9vTS9V1ns5KXP2KKAYX2zMdkPUB5rb7vhJ2S6JmdtpasDvPpMZPs31GYmeP",
  "key25": "59q15NiG9BtcnmpiTY5gNoABE6QTa42xtLxporFL2m5tYizzRqiWM4amHvuefnHQUmbFD35Z8JJ8R9w2TGmrwEJU",
  "key26": "FR4BJqEkwJpynpCVF42BzrvtYCYbbCqA5iLntSe1sUmiEmL9YNUKw6dqVXpjmQLtUrLrDM82sNtJFhjLzHM5HtQ",
  "key27": "4wBMN8L36mLBnH6mGGrohmbR227udv2t1D1GgavcbmnJbEmW6A6TtKWGcdeiVLrrXS6fu7N22bA48DebvcXfW9vU",
  "key28": "3Dj7A3REczh5yQpHxnFC7GdLiPPNeC1yiYWLGDPLVVjiwQaE98CnGjwEUoaJRwv96ffxSGe634BJPmyBv4wajeP4",
  "key29": "4FmAMWTViVG7vDfy3WdsNti4KGYBtTY6iVPdonXmZzz8Mp6QGPdNzSxnhQBUQz5L1kMiPqNveXgtB3KMg4m5gqsg",
  "key30": "2KfaYx7jhUyfXBLgpbJYHWgaUVb1s4NNQ36ABwc2DTvG9H3dNSvN8HbKT2j7Bx1Vg5mDdVk5hkqyHJctsLtXhiTf",
  "key31": "tMBcAqeuYxsZK2sfaAWwSMRdrqESn3wBbv4pRQYUcVVsZwunYHC1RdG5rvskzqqUGmVvpAYXNLzDcNxGN6ERdCo",
  "key32": "5FS5eWR14EC625r9sGgtwRtcnaCt3JNi1ckta33CpRwQ4NNaaC6JifUM77jCmdVe8eJRKf3QnC5ngty9AzSGUnbJ",
  "key33": "573xeSBvyVafSP7gjhX4yrKKwhLAqJtTrxZgfr3bhc2vLf9f6dQnqYeUFUoQSM5yA2j9NKAp8ehftWHdTdgKmvyc",
  "key34": "4kYavEEGh45VHWSjZkPqLNhDP8FknBqPevwqQgyEuze56gbHS6u3UF7TYFxm98Tnmf24Fw6donuXN7Rv4SVxn7Ej",
  "key35": "2sjL1RZ3vvcZy2qkWDLxVGwqbNHsfwSXysatF5a4xbFPbvUVd4zHZRESb6WK369i8o7MQi3yUpq1cdsUQsAJJUvc",
  "key36": "4EeLHJfMepGcPwh9waFAqqG2j28PJKQki5sJK6x4Yq1ADxpU5r3hpAhSjLbPt4wXCuS17Dgk3rGU1xQkb7YaSvsv",
  "key37": "5XVmNM3tWkHuK6a3x5aJw7E4FnaSZCo13aW4pPaZYbCer5Eme6HUxH1j5n27hzX5oeURbwCZ7vvjy9kKnt5GmMvz",
  "key38": "2o5bwDqFAsexSM6eszuAQAQ5Uc9EGKzmkBihciQYDCrmvUq1SJ6qnsA76Pa4sqTUCzpoUhCRWAjcViqNt7yjSrcc",
  "key39": "52BQfQpE4eLRRj8uvzUThneyyRo6r6h7PRtwwmPeZgemvENyfuM7ntreS3pjbjHsyuYzE4kbxr38Bw2SyNQz7si4",
  "key40": "3JiMSGHDUD7wtDYr8DPXx8zEcY1k6xw7jkrCLUeA69ASWw1bVdaxA9vMoNzNqe4r1j1GNWbEgq1gjmfpHMm3of7G",
  "key41": "5mvpS91KCoVZwW9esut5vGH2nTHZLroBLkuo64yv5BwDht6cArjcPvofundUH3iHQ15qWqxNDc7AoPbCzm4wUrW1",
  "key42": "3KZLHTomQFsxWUDLpvPkYr6N7XWDnHSJjeUeoKSoF2Fiwbt4q57CCXkjraFq4wUFVh7QXYg9BzfyUoooK43zzQ7x",
  "key43": "53Eh9fqzd3T52YJqo2JUyGjoZu3M6SnnyAHBSFcC1dJ362e876hR93hB3eeVrSAqfmW1GhKZqdRm1mRjFefrYByW",
  "key44": "3mSQCykT3buwvrYtHa1NedLtdbTgowvnnTSzZNb1gz3zDLudsbF9Sj2FS9yqsNqJdF2LxnaUHxChZ5JwJ2wqzXqp",
  "key45": "2f7t2WakYMJSNRV4cm75sr8ZuiSWXTpw2FaHZ947zwjfz6QW5GFq5bicpGZp1U9ukVF2p2y8EmvBvvnRV8NCgzfU"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
