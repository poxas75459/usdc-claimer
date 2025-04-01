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
    "3TH5zmbg481C6GbehBR3Q1LKPPGMyzRGcmAYcyWNv6qB2Z28EvegBqgmVJNM5fNPyFwzTnk4QgeH4RvNNq8HUj7P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "219nY48TpKfsEYt1m6deL11HPWZySimBVZgXdQhUTbQWorSnjcf9jVBiKc5HgUy3F3pCRJagg63Sd6rG5T4PUow6",
  "key1": "MHdZu8eQFYixxgRnDqZNuyTDUqE9fF7uHYxwZo99STjVHhBMb8B89P5vr9ojmkjNTUW9uweqT6VVnbWvrw3ZDDk",
  "key2": "Dy2Rzyadbcm7GR8mDD5gf3wMaAsSgsn1oyrfo8WXzLy3oPpR6EEFKmH1ge7UU51UXqYCbF3ih44hYafZpnGzX3x",
  "key3": "2GSZbNDZEz88Doo5rUyS5KYCeuAW9HuinzE2vUMjyv3w7sPykkEsb9Ty9YoBkDiAFERPJmZzWKe4t5mLdJh6LSbT",
  "key4": "5uazF8XPrvS3koN3W6WEQ5b32YvG7BXceCEAC28DPquTGZuym3RdVbLJBapVDEszsiE2ynNWXjNiLjbWDQahJYs9",
  "key5": "24jjHvCPsqHHoQgJ4mHhFnF3JD8H35LHQiGwBLw2anwHcsZBjjXcveGN7W6dztRSRFYydMr8s9N1pWgbHLHp7Aun",
  "key6": "2MsQ49L7YBbjmQeZ6DfoCA3GEnrwfSFNHVMiEQ7w9eyKhtSK41mSzNcxadt7TX5zLYcWW1wGUcwx1Rh9Mf4ho7KA",
  "key7": "4zJZWfsyKPcwfe6mMHbvijgjvpTYCxo8T8tCd9X65x1EXvrqN6iFzmXKRxzJgj4fcvNwaDMMRB6QZptVJ7JvjRxy",
  "key8": "VUkm5iVDodtQgMt2ag96y19V9PAA42QGFs2BP8MxN6ogCxZhpGxG38i24HzLJ6uNVTt7D4tgTbq6fjxm2tTU8Dx",
  "key9": "51LSDCa8kzP3fu3gQu3foJrgeiFnXvJ8YrZKeDjUmRP4RWvc4b7ELHd5bNjP9pCBEZdzSkxLrwYgALy1iJSgjxQX",
  "key10": "31unrwuvScaLzQPrVqtegY2dx9QXVjzhFjPY9bJXP1ZmzzWkCyggGEmQyUGZFKFbZesBYrjpug2eLChXcTaR8G6N",
  "key11": "2r21cfK2KrBZ5mjRdmAGq6Lfh3gfri1F5WdUUE1BAwzJKqSnoK4JgmhGDyLAkyb5APGUpsT1hQyZ7D9mjLaVBzx1",
  "key12": "3MGKQnaHU6duvh9XtXxAiAEbkrzdwxrWZabvtRFAuLZcQJUXdv8fZkeqN4fAhZ2ktJ53rUpE3yeiQiHFr3dXqLih",
  "key13": "5Fei7vNRuB5AUdvR1f1iWUFR6TTynUAuW6k3xfpuRn5M4kr7zPwwp8XZRxsV54oatULnFW1dgKdSgzuG3jCMghd5",
  "key14": "5WaaiGczoQSzHsfJYmbr1Yz7GEmknxvFHW2YpHJ9JweHs87BYD9r7aomb6gvMjNNDBnM3wttcEpVgihqJgoskwrm",
  "key15": "4btxBvBBPYNt9w9maDFC235hpCaaPGhAoQXJFjQtGFtR9rSbpSMsiqLhDzghoEtDdWdT2Jjdyr9e3EjK4KUoqnMb",
  "key16": "64ZQCU98HmDKS6vgoDXbyykFVZLGXZJgeayUtftDrxiFcfTghaGWPL6kSZE1s1RNdwgvDyX57pzaXR9cgvqSCGtG",
  "key17": "rt6XAHEXBmbFyx8m5tsBajivxpkmbMwp2Kiu65Khvicxjh54ytBWf2U1z1Xc8cr5UKGuehicqVLsXZGb5qV4QiM",
  "key18": "3P85JUSi8smaNndEWrbzgBYo33tVHWMdp7eaqd4TwL6j7Fk3hfanz1dbLiMXfcoXkDh3uPrZpTWi3iB8qzQJ3e5C",
  "key19": "5jMVUMJRG3apsLekii9Y9aAUQ4FGD6zJPXtSZYBvE4MYi8XSfbLhjmKG3uBZFYNUPCs49brThepU6AF98cf9jnRm",
  "key20": "5zWTenvnfwZPHnornNDVbGC6n7xCpA9MaXD8B3n7ekLUEMwfsUeWz7WHy8jFjJvCrAx9ELaKCqghXzNxEEYZbPCh",
  "key21": "2FHtf5fThUFntHFMgX1CB9weM2QDN3vRX3rY1kDUckoATxHRdVrsW2S7pGacp3tuRTJHF22J7nB7ztKKQcYVtC1x",
  "key22": "27gTdcjcrtYVHMwrEuM6k1vPov5sNACpJtTdskMf3qyq9uQDbbYAtkhqsNj95aQynA9SKmXzQFaVFohpzLhm5UMi",
  "key23": "2WkWgetkuoN7Quxb3erkgd1wMYJWmnTzSj1KUFQymH1jbX1kM1i3vBCbL8btshFDN4Jak8tLMf4CKevhxTyHXRzK",
  "key24": "5Jz2E7J7U8ZqzGeDY7JCaVs8NvZApndCZGrHkg33VHzk21Vsy14TCbtvBG5PTQXZtDnX8pDDpcUXX8amfJxPgUoC",
  "key25": "2vGTGyvynYEPHnPJKUwWV1UwSXogHhcJdZVb5ZwppY2PmFSAfYSfkeSA2qT99A86K4kaHP8euN3B5Sfw9gNhLSBA",
  "key26": "5yd7kQPXxRAmXWnMkqYajrKBR1tXJFMBeCAyfW81SQZfowxqMBRuPQ9A993f6Mimc5XkneeCDPTC8BMVGcKurL9N",
  "key27": "4Fvzh1SQDwMKZEdNzRX727uZEoKqpc87fpoVXcd7Gx8VUy56exPF8udG4SSNfRcJhd7TV5fE1FxPXqDwM8t2BZKJ",
  "key28": "2tLssGFf67vEedu8sdkywjahhPVtkhvVurMLRFiYMedSNboVXdfdxYuyLXJ4Nwb6rCt2Y817Kj2o4MkaLxLuVe2h",
  "key29": "4QEv2e7SKV6CQXWoV1DdSJA3PnJTcLduxifJVRPFuSNFFYrFBJtcfxuTSFGRuezoTDi4KkFE52PnEQxjCRD3dS5j",
  "key30": "5t88jwCPQ7scds6afUDkjUGstpAKH59e57AgQ1cN1vVrMvMPYeMSetFAdYiLKUZMw1KKZ122W8heADwmnLL7RFFt",
  "key31": "3CP8PbeAFEGEaVrsRRU9GkK46qME9yWpStZ6kuZdZTSk8BKF579Wbu7kiaJj3ozhNkqp3eWxis82d2kKaBdnYRJt",
  "key32": "PdQpkyH6NMExDdYZiW88PhSMYV5YtBeqd7RZ1JByPW6TFyc1YCoMb8Etnx2BAxW5XmYaPFAWBJ1QBffNbC2LDpz",
  "key33": "5hgww1V2vBxnUia7zYTDbPpSr7zDCVGUx22ogXiUVsxEjNx89F9Jsx3i23naymwf9hvYKEb1KFrGuviC7XEYEats",
  "key34": "42rNJ24hXSnRBF32BLdMKadL7jgFYBWBwjz2w5kkWJKVdt2h7xp7Yu5PQDT51fJpcMwfoiog243cwEaxmoAqu82b",
  "key35": "5QJuEHwdKtqWv9bgwutDPdhBB9Sq3M6VLSuijvwS8s9AYpUiNYjy2ebG4RRZNUSr2QGSJFGwHSawEjws3nJhi5Tv",
  "key36": "2etFEfsALfWf3wVStoNk5HKrYyvpTP7yWSCLMv71TmxBbmAUdmwBet7HsjrWDg6miDfgkhuLstDqZzvuui8bvRg1",
  "key37": "39EvLnM7wm1UHGG9C7h3EqREog2CvV98VJdthoTNtq32xtPZtbRbPBYBdFT4GhWC2izVJk6zkthfDmsMSxavgiaA",
  "key38": "2SYRPucpNKFkEPkVqLe91ZxhPd2sHCvNFBR5VyVqDiWAWjycQquni5fMFF6ds4aCQrwUEuL32F9LWwnE7eAsUm4b",
  "key39": "3M1iGaJFQZmmF5S2zH3SQs4BCiigoXJqqnq7VyKru9aWPurkWjbujW17nLBxWAq5Vb8bNfkFKyec1nhY4RAoxfrD",
  "key40": "2rL2noWuVCzVAbqkMLCkqKFYhhMiuq4Hbj1PaWMYN3TFfpLEqq7hUH8EYUGBJWykJiTvzd4FeijbzfbpqiU69o2i",
  "key41": "MZEpVjbpT6KwTXzi8NXxmtABGPLntj4TuwqjRyzuo1c52UQjvr1qkKZbZVM6bJRbJb9tMeTuwTfXSuW4KyV2S2V",
  "key42": "4CGWf6xvceireg61LYNEPXLPU8D2BqDS6P9gdhdsNk3y6bhofMkFMRYTqvgdM9BFvsqBh2CS5SYHNSDA4QVzZnE2",
  "key43": "5iCpjJL9UWyUnNkMWM9shKRCXsG5uWTGfy6Jb5f9cvfwS4wtKDWDzsNRnj5etRdVAPtpszD4bcw3w1mYyZ9sumo9",
  "key44": "Bf7NZAHZm8oZYJFGcD2x6x7ymjBjRNbqf37chqDkA3bDEhapYYXwA3a7kbiCpRBYUp3gqoxX9braAsRQQM6Mysr",
  "key45": "4z1m2jNpEnnEo2NxCRa1yMqRTkpRBnHeDpmsg3y5FHsKGGwraWfRgMJHqHe1uQWF327kCCWNNqry5QQFoXYAPXe8"
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
