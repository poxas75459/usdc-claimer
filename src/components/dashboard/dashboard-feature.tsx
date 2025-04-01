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
    "EutXCUNhRYQGFnKojPxbTcZjxwuCEZ5uas5WJeMUcpT35fHZ6uhaoKsJ81WQ9fNBdbFWbWewGPxxH31CnwUPnyZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YwHrRrp7PbByPrsdohS3HXvfN5pfqUoLe28v8VB3HSqQQe21d34wPMkzLFNdxi78yC9QrVP2zHkxjKRxWQccPEp",
  "key1": "48pbTchT7iBBBFchicVuBquiP3hhLK2C9KE4EztZXbfVPsTcvA6LHAGkwZNvXMkNSRjMnTZCAubf576omSPEupQ7",
  "key2": "5hrQDyRqk7e7ri7BBUf6pyeaW3oU9DFU94DApULrK9DHyocD9mWgfTMkTcakgNtT1MWbnQEL2vm2NTaQJJvUF5rm",
  "key3": "32cGXPvBtp3Lv1x4t5LGWTfTVYWYzPwNXn6Cbefhyhnw4Xq4jeB77JC1Wm7pNpLDzTXWFLdTmh8QxvnwXnPvdxKN",
  "key4": "hyYoDpcN9y489Sm3YdUKJgMjJUredyYxvxFHQLdPyRtAzWEoQivZYb5dQQJje7DivTJ61jGi1EKqpge9LSULN9D",
  "key5": "4gxgXjnJLTNzFaL5gqFTrHqvmN7GSGGqsEsALSKou6XqMcFUSKrCWyrnq51ehyX5FgqUxNt6u1mu2fUEQNhVokDB",
  "key6": "2UDNTJCYkSFbHDerurRRGiwRQDTU5ia4DWvw1kvrCiWnbxJ5KmiaHXxF8MwUDSyVSjaEoEg8fmbUvxuMSJqB8Egh",
  "key7": "2cQmq4Zf7Fia2377zyXyM3zVegeKemynYdhs2caJ7aSowtmsBrYRUADvyPd9Duo1bKC2D2fzkLSn7DParhdwBgY9",
  "key8": "Y8v5cy4ZjfqsbaKpszzFr6ynucQWp3i2USzogXtACVdzsVSqLqCUijrd4vrSWDfrWUFKH1AjBSYcPysiRPczH1t",
  "key9": "3JwGAtecW5GyVRTGSqzGEnFywgUt3adcNTufsbGMMxxn4ckwaJtdqgWeMic8ap476Z4Y7upndpGhDMoEvgivtwgD",
  "key10": "4RufKPvgrfCAuqrTXJyPxgkSEtZ8pyerQhgrxFRs5BaGBoS1BjDhsXwwMAz4p6A15CMitpEBBG25Fnjbcyh4bMJj",
  "key11": "5SrMDVEPd2t3bW2uBiyoijFtJk7o6tMLHF6GLL97E4DMJJmDgocwbxXfErTqLJLbZmhhxBD3UfCaZDjWCubATzvx",
  "key12": "3Ab9y8iNE5GTZKqDoYKzTW1yPuwfkSuB3pvvWc5H53c5eN7fvoDwKKhgVg7YKkrS6ybpgiecKaWxVPzLB9T2Ehsc",
  "key13": "2dkYQejWq3bPeF3NdhPkvByBgKjkSJ93epPJo58qG94BxrTtzWvCb6CKjm4PqCxwf4gWv4cLDeppeACpdTdpWUyU",
  "key14": "528Tu3TBUDmLYFVTEp4s7GjTPcQHW4MavqLL6nsTjm5cYmuF4sPESJmok7b2pE6JCxFhzgDfRHLA6qqqHEwXLWrw",
  "key15": "MM5sHxecWgVbJbSmkU3Gi3HgWxJhJPnGhpyb3WwrLMWtYoKHF5tst1Th2EYyktnDG1NKs2Jhdf1LxXgcCbuZVkN",
  "key16": "4MnCrsZpZx8vXofzd2J4eHk2LzGoDvahVSeQcMBrJ2CtzSCiAQyf6WugSeEttfCcuGmzviBrQTG7DihtWwNg3e7j",
  "key17": "QU93XvhnEuHwS3kzdxvPjWAKN2AqXJEqndKTHGuvmyUY7Vyw7mGg1Z8Nj3bvJtK2FpYxDXmLxt7rbVeVbpSSDm1",
  "key18": "qmArnhqYzp9hG1BHCPE7LWrdSqBtHAmzGrbxha3xcTw2dsVj1pRg323a1L8Kgn22AL1m9ndvpoC1zbUU5suXnjg",
  "key19": "9s6cyhgQ3CsVxrPdLqNKx4gK4cgqthNvMaTkR9E5tMfP9MZPzmEnkL9MPCeKpHsraZU5nwYDQnNftffPuc3FHPa",
  "key20": "4GcakzRtXfpM3RxULMQ7NCVrVe3FygaBZUYMdkBE3WYnx9Qu5Rq3aBjp1KVboCo1UFGYuhgv4h1JpCdQrWsd7hCg",
  "key21": "5k4menmPaA1sYnAz54qZWYJaA84JQuGVJ1mWc7HFR9HGhwn1113cbh5vFPBFHtSVFrxVNc933WPN5g4pmM9pBEHZ",
  "key22": "rRC5fffVNcvHTFQAUUA8DReBGHNcN4wgYh6zPpZDoCzi7qkKnuMd4fhMdjkgWqQXccbiLqK4KqAg9xstkUi2ksm",
  "key23": "4bpr45jSmMzZv5BFsfztxxd7ZzobTSoswN2wejrwwSkpfRonRrzLrra2gxNSaCiiaXqce3VHaKUk4jhLmSAE3WaZ",
  "key24": "GaPA1Lk1aZjAMrbwehh69SHmr4atZAvR7o3KprLVHrR5kyUh2vduN561vymjARxtywCo1tBERddUZC9KVHYNvFK",
  "key25": "5ZcVggy6Tnxsvrh2kTozBighqHU16aucYPimkWKcbFEhC6p6DY3j2EPFFxPFnfWAt2ffcPZy1XCCLX5yyGsVw93W",
  "key26": "4GTERyuTnkHYbdMDLKGLvzFfneDmaja9XxkB76Y85xR6ucaunCjL6WQmHHA9dZtKeYnHDrDzJfxgbTj6P2GPwzjY",
  "key27": "32poBBzqzyGY77ZQkoT99r7dEcBJiQ4m8eB4WeTtAEaGnbJDBusbFCVdSEUwCahY5u3iRiqrKuddemFndBDJe4XX",
  "key28": "28Meg95CdnEPj7C6LiBgvXcng4dW4T3sXacwr9PBCE8MASGvtPpAN1uu3RaMTgFFdspTMRoRjBhi78AdX3gwjxyR",
  "key29": "tQMXTjNVqn6RTkwyKu82HP4rAB73jnUNctatk5f1iRzn8EKUqpL4Ear7k9oBnJp7ENVor8i74ySN3ZJpRut16e2",
  "key30": "67pD7BQCenVLBEVCk9DwiEo1gEHHX1UpokePwAtxdt5umM29mo3JgfFhG1s2E5LR7tRSMci1PeMPRYtFZnmxt8Vu",
  "key31": "23RTnLmBMJd2Ca4vrHHTi7PcfU9eAGJ7gVaogvfNrX2LKRPupVxEptrPTBo4CYe9PVZFsfEFxtA83bnV9srNtriD",
  "key32": "4PCwjmJoP9VzkgNiXRzaZoJ6qJJ6Wh9aYuQt1ujVF7a1VWyLeZycyRt8VXSn6p5vQzMyGPkiRamgvp4NXgtNC8d3",
  "key33": "4x2qAgk3FDbBU4fPWHyurnBZsrz6oZGebcrVrV3A7QBMszkSSCwWzaqKyr45V2nZoP5Fk6ifzoUtSZyMWLiRpFrt",
  "key34": "4BmrkCPiDsQHB3vetmhQd9pKeCzn9KMyhtCV6kmjjdpL4xvQ7ELnu68JzpHrvq8f4dNmSu5AvBiWYTKj2vy8Bzpk",
  "key35": "3vmJtkuMFb6xyCLrb519UNztgY9obmuwzE237DGSX8KXjYeidoshU7vPXQmwF63RHUPcEsvbsWkkAN28NEoJJ9Uj",
  "key36": "d5mCEYx6ZTGTekGaiAnURk4cnjXpopbPZJCLbwzreBNYeY96STWn58wpJnTFPuZsNTeLC1zw6LYxTwqo4R4tZ8m",
  "key37": "3ZZCsq6BqiMPBWrdWhCtcPuaPp1G7zTr6Lb3spJUmmN5twpV1WDTCG1dh3M4GUMS4HfskDUPuqs4C9wDgQwYgNb1",
  "key38": "38qFDjUUid1PNeSeZ3hjm9AgZH5zjxnppQN421nnLU7tEuqkfZDeeidNa26MVnGFuHnwwmQ8RvqvYq87bjz5VuJc",
  "key39": "4ddiRBifksAUvNUnYKKwo3DRwsfBjhTDH3RHnpkis2uECe2JcU7txqTzWmSHoY7tEozpeuW37cHFXZpRS65oQwYf",
  "key40": "2yHX4jZqVxoWvdCbtyeMvbvUYYGLTdFk5yUaxB7VjqTSZ4SWBaxUWLLtvZETGfdGhNsM1gL7jM9rVMbGTFrGo2qH",
  "key41": "3oF746XRCpDCATBbmSKrSytbtD2mcgmXGMWPsdM7CkJaLNaqqwSAn92N2g3RJ8RJw6Wh3ZjpPAqBgHwy5FErKxSN",
  "key42": "67AMcmN8wS7cN4VVCVA3jFbc75iFmwe76FGh8obMz9extwmxgSLoJPAe87KuKqpgHiUyg7j1BS4fofKBNFSU6az9",
  "key43": "52WaGYtpwt7gLz5SLDfzisNtDC7ENzPrurzf7Btcrhz9bDZbKA2K1uBkDMDv1tfoorFVmy8QNAdbE5tNxiWo1LUL",
  "key44": "3Gkg86ps34wPMgUZPXxzYpm6jvAvdmLsnDoqVPux4EdDvstyCSBzShqUn2Trvh5AVrAnuhHGp79893TeRSy1XzAA",
  "key45": "3ksDEHRSoP9jKbZZJP6xzEDeQiGMa6V9st4GuQHaXdoF6naKVnVXGeDBFEw3rrH1D7bj8weRQBaVjZa1274K7oMo",
  "key46": "HHMX5VpDChfA9Enc9YG9MDs5fgnMfUd7Xt4JR2T4HyvYM8ktygvWz266Z4uTGvhe7DcBymK5pPM1MHBn39dMTBc"
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
