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
    "52a4TZ5H51Z9Jd8yW48YRZuKG4ww2FK9ijQDMzmZjNuvHawyBjMu9MXRrFVcxCVbSzpaRceaNJNmo5BAWXeotvM2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PRKVb5iW4HiKzAx6yCVzYfDeiGPazkuh7uzMhY4wqMi3L5sh2HjwfQqHaeQPGiVEuvbikapcdKGGpjywfupRmGT",
  "key1": "364Wsi78YFCcqhk7UPNB1Np5XZUnyYyKnHgYCSz6Pk1vwcmFczz4nN9tJ1JYJ9d3zmsZaA1ySuTtkzGUuVnxMDiV",
  "key2": "3bXQZtdpKiMUPGPAo49Mz8rTo8DLTGcppcJ1A2favh7AJT4X4Lb3mdcNeUHpYF3omAmXCJUDKjUxfAzTRqJDnPt1",
  "key3": "MiiVAgG3gbhsX71rQdsU12UPxCbxh1JZdKj8ADec2PZdMXV1cJ3Bv64AsB1KHMEfdt1wQw2HVjKMACRtTsw9V7N",
  "key4": "3YGdQcMVkeESB3w3z67NNju18BaYqwTnbmmCQsxARWyWfDhW46ZSNnac1dkyDvJxvyHfNRmBr4MpRYujM9TonX7a",
  "key5": "2JwfsMKj9R1GoS4YmnZBxBn8JpbHAXFds55NoQA4nXm3u5SPHQiVPeuxGDH5brNkVhnd5VaAAHqU6rLXMqgEdVKU",
  "key6": "3bTyVZ62K63pWVFTDtYrM5rVqzuwPbdTjUzJUriWQ8qH7QGjjFy7EPti59jNG6GDdeAsKzqm6ohWJMGTEUYwJZ4B",
  "key7": "j5wMVCiCPeQHogNDQ6vdkdnzNe5yjdCVoEm7xNRQc4HE5KUJn4NqfCCL7vjeP1sshKopCFkqUY63Gw93kW8nRW8",
  "key8": "46jnuEyR7VuZr81Rw2RQePyWD72Sx7rMRSbvNpiVkartXFsnctNyse1izS2RJxCi7wWEvq8kXYwGjbVmnKS24mLC",
  "key9": "5N3Vz4HfYFj3qwq7TwSp1vSbJJhn92uzEs2SqfTEDbm4davFcTK1DbhHFces8oqwtVQowuGhzB4cUFQKuKFjXCmR",
  "key10": "5We6nkiWc5a4CVvEcETtNjU5HL8cJASXHYp9rePCGZAx6cPXAin8AFwGMhNx8tRfzMT2ZUTyYPiJEcRAp4aL6d4D",
  "key11": "3q2cY65MjnHr8HoRy43zLWK4unJPi2Z4kagHkXCA9ieeWxQaPda9t2YFvwFn6oPtYiUFNfMcqrv7SEHkCbX5yNKN",
  "key12": "3YvViCiexVC3HCnTZHMD5Sg6WaLKo6PkqWre27PKVaFVYVm2ExBDEGHHJfZ4BrGSHCrVDLmCY7kPEJ7rEAakHjzv",
  "key13": "3Ypci2VFJFT6qAhSs8ij8gUezzjrKdJ3xb8LrMG1FbSeTa4LodEsNTMSzUkqgV6ma2ab3wPEtjdRDSofXdHQEsnW",
  "key14": "2R6LmLhrHTz9JdB1qzDYT5c9TwLpqXs9xtZkmNQiSKqff63N8ZwtXk9sVeLM3b7UYq2AhLuTc1iwvgRYRSQmiVvF",
  "key15": "42aMvoJqedazTjbqfLjK3zwFtdCKRjLH7rYZkLPZ6VEnKdi4ZjEjcyUfaayp95bAhYG16xnKBPL1dWs6RaZnPQC6",
  "key16": "2tte9opUSoeKKUgUeHcW9nHGxCu8mJTvswwt8EdwKBK3TA8RhCGf68yH9iSdAEMxU4iqveGjZjj7DLwJRGg7agQu",
  "key17": "3toyaQm3tzrEfC5a85r8b3Gs11E1fVFNRdw2jfUd5WjUwewPSGJs1nWeWwaZYCCWsm7nhKoA3rRUdXtWzyXFfGeU",
  "key18": "99xqHQhx8z3kND8FUNDvcE5a1LM4kF7eePsGV2oZ5PREemcUTFg2q3zyttFon57eRLHPqg56nEphy4z1ryhV4pD",
  "key19": "cpts2jfQ3YjoUMPAjg2HSeqMbExC3cd9hEq4kNiKQbUsvdHMrAopy7FEeQ3cSzKuoyxKcCJhTm36rjm9sNiEvst",
  "key20": "3tsv9VQrAFJjG7RntDPrhtGUvjeqMJjARmHmWFNacgh7fdpZ9qdeXSiv1ZuMRK6Ktavq8VpWe5Tzff4aRPMGxWFT",
  "key21": "41JV845QUkRdAyexmBthTwcnDo7UJF1bB8SNLNwnfbRrrEckfkSC9LWALAuiFfG4VHDqxuiBs7ra1bYrmVhKt24k",
  "key22": "5PPkYTpSyDugkCmcsDAe9YpdDUH6je8hz7DqBk7byZmCsGR9YoN47DFiysxqorp1PUvcsAMfEakc9gHTH3DmShL6",
  "key23": "Haj6uYWyCCeRiSR4Vmtxw7e6jqFykHp1X6ovcWnKsvjQDVKAUYo6tqNsGJH7A9quRWk4RgHrAMW531t8Jmivo5F",
  "key24": "5a7wH4LwSfoV9RNTg1hzmRpJ2K4CeXEA3ex3egxe6BJ8Ur1pRKFt7JdczPveh6nvmK6Y8LECvvVUz1FT5MgeuhaP",
  "key25": "2EzBSzYP4PL7rjcPM6ciFGjuLhdYNh6EWPDgSBeePUgt2CwcuBAqw51TfCgmZUbTBg8XxMopH5LCJttvaXLRpcVq",
  "key26": "3EtWQXcim1pCnykdoSKnX5Y2sDAPYh2REWDi52e8e4PVRVbRn5oHwTWh7kP9Pcs16mtDcwy8kXvYMU8fuzPNv8yv",
  "key27": "3A8zyLueEbsezXMVMJF5BUs4fgadGHs3o1kz8nK89JgygEqeYo3kwb1nYNfLPMLtqEyEPpM6cMvvL7sbupLkonBF",
  "key28": "3S3bgYLHx2oGWV6akfa6WiwvkYVM3AmNDsDoYbvcWdkyrwsjaZEx4iyCNBjf2jVbBmfsdFKhBdjJ6TX28cDGwKt1",
  "key29": "3XWUAunatGpUCqK9dozv3xDgJLSRxBSa8eBWBmdMdWLwav3nU77oK6YAaVjgtdCvfd4cwgSwi6CGdVXHF6JS8cay",
  "key30": "2VVVr3VLpFcsnQaSu1JDWxbCAYDG1AWHhgxaK81uCi5y5rCJQtjzP468vK2tFo8c9LVZFnX6JPh5CnMXQZymTDCq",
  "key31": "5RgErJr9JZrhnr5weN4p5KLvs2NX68zU9T1nm2y8wHAgvJCBSVDaSJXmosCZ2BE65JqGwdUGZqUnxYnBkWCDiXAX",
  "key32": "c88YBv9bgWb4JKPqexnv5ihtszMgoEyC571KhmFp1QiQbeEjf3tGwDWtJwoseig1RvBjfWXrWUGyF6KufEVafzy",
  "key33": "5sR5jSHa2NcP4g8rN4UrsYNvcxHZFgHSPcqW3zM9RZiherz6CBtUikX9xmYeeu1aE8U3S5cTjVikhkqgqqzUyLNp",
  "key34": "4XusFNoTeymD1Ns2P5GU7RaLHY7RaZ8pTqbpWiMu1TE9X8gzGJrE4Umj8nGhN1sDjMCUgGT7MU1VHP1MATWmAypm",
  "key35": "4Xd8snaAyBxYU2nyqU7fjwqyP8Mq12CaGafddZ1aQLVcAUUpm5xXZAvCaTLWfQSjM6LEco96CxGLWxxi5z1kQUmk",
  "key36": "3XUdD8koHZg8b2heQzdJn4uKNEpToVy1o6XkicvpmiinjtwFVu9xa9NvmRz9acsmPD5iMAG2nkXV3ePbLjanjKLk",
  "key37": "4nggwKvowhLkRRmhFtWZDewctDDsYQDEzzNTYgbrLfyfXewWWhTdHDrokfscHP4ct1qKWZqzYbXqb13tT9sKr8PR",
  "key38": "4QLUTBGCHf2b1JGHE5PVNR8RMhCdECemAjvsbAKpSEDdCB2KL7KzPf87VCEfinA4215gu2NTjgfGJbtzAo1yCzx9",
  "key39": "xjTKDTAZDpRrFZ33P61pUVhv5sx5m3xv9cdKH4i258jjm17Vc9s1xpRmMyrvkCjrQzmydnmPBb1oo2fiRTePg5o",
  "key40": "5J1ZisAC6C9eL3tzwKhNbnSpRfXW1Qn1XCHNk6MmRUKhmzRN68dMV7tRqoj7GeHmFFDTs4MDosV2YTQx5jHNnzsE",
  "key41": "5gt1qbevXP2ds4AvGX8xcNPbhtTwPa6Qxknse1kg2a1Gn7Ps96zSpDBR9NUgNu3tmDmqkUrYkQGiSrRqV5uw7n1n",
  "key42": "4cSUZ6xCcVs33HcJcWybX2kckDpmHUSVzMGFibnx5D9Vn4CcMGEGZDZLHZXJDyb89B2x3nNqwqVQ1YwHazqQNxys",
  "key43": "2Ep3b6GcUtrp32ZVZFRxFEedbt2XJs9TsUB7shWVES7vVZN4SAKHecXqXgqwSTSwgcHv5gNtrTK5NAccMPUqUBDr"
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
