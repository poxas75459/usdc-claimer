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
    "2YvfuAMjBWe9ncoKHjw6qT2Bvc5SHAd61Ea5oSz1b2L3i68UHq3ZAAGC96yDbRtbHL3DKqboZ1pxsvsrstao5TGr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34itiJz8DMxLYVHriw5neQYHKDD99HZCnf3CTVjGDmC9Jj9TqafLXEVptqZQasCKZpHjXSZQaeA1owz8NwLme9jt",
  "key1": "28LYpMwYVsprbjAQTPyCxJDxSnaBs1hoMp8Qi4Aai5Mm6Bio43acQSVWUU48UXz8TGN4D1Rg2SBYLhUQAu8DTho2",
  "key2": "2xaSvkBPWTmvQi2WAJ3Y34MW7zXGGxnzanvnKwFTFpiZ7xsvEzqFbfmT2ymSPH7VFTE5s6WUSgGDq5CEH41gFrZU",
  "key3": "Nk8NfLT4qBhp2gtjpaikRWdRFpPSBCcL7A3gQXWkprSZVgEWKePh8uGXv5o7XmCngDK9mebuYu5J6sidfT5QRkn",
  "key4": "3jLms7zQF1VRAxHT2gbspjiHjj9uoGuwNoBbH3MEygqaPN6x5ZPRDej4Up9y1czpyRdVeb57znJo7yfRBtxiPjPz",
  "key5": "44H2Ud44imZEVkdRGpSaUH3RhKjNuP1MrWGFgAKGJYfU4i7VWUjCBmGmgtKwgSQWSiZtaQCLouHayYewGdyzxeS",
  "key6": "3GrqUaS9wsbDtGRdPVnt2UjVdA52iTbzCsDWsAPNZGEKeP6f5YTJ2pfWiJotCJwGbGmmGXHSYrNLV8Npr3b9PYsH",
  "key7": "3sYAYYZsyZxh3njMY5Bi1fnSQ9s86p88Nqmg9Ntsj3WfTYtvKZN6pFaQqAk79e3EgnMgxQZcfiLYuoUT45yjPy8g",
  "key8": "5oLjg32AU8h2NBowYcbzL9FBKFNmt22g3zsEkVY6jaXc7TXXd79TYzfvR2meAYQQo7yYtgY5mVb4NztkCM7PTZAf",
  "key9": "3r3cgjLg61MMAUWoBs93K8RxwC1fU5hVzemivjkFu83MmLUJHY5zffFeu2jBWS9HET6Z6Q9MisTF4LdTtyEEVxV8",
  "key10": "3eC4UPHVD3C9PTDb5siS9icrmBD4AtzSsTNx69gkWjHrF2ZDYQRF35SNjeRRPwkQqyy75TUZsc8nz5icvwkpL3xo",
  "key11": "3WmyZ9WUwcAS3GpzA4Q9pTe7VqFLSNASni1BzhjPCMZrzj6jSXMz9zTWM7huifjTfNhruvZMdiXoMRxzeQEnmHd2",
  "key12": "2Uusp3xDNeSp5vwyeEp2AAx21CQBiML1L4ACifZjABBWWTjWVBeJG9GubTNjpN28pR9jLh9VqmySG9Qm3PkifWx9",
  "key13": "3HFRNRYLfCCerafbSBY8qr12Vd33goWwrTb2agBZrKqDna5pnfMWXhqMTYG424G7duxP53abennaf8KZA5dYGf4T",
  "key14": "5R3fTU1dYWRZSMEH8HTkDShydCkGmv2gXDhPq9ooPWBAxPPMhS71GM27u4znKwEE3zTuU38D21AL1o5FgMJkMiX6",
  "key15": "8kQpPrm9pvZsj9jrwdmemjFJWmBB2DHjPd8gi2rcHfydYGPX5Uy5VSjrZMSNeLGUc5DNQxWkmVPHpMQyci9Aodg",
  "key16": "1p5aEg5fRQncqxbrbnXLy3wgWc5gEMFWT9ehPoQ9tvwqs6ftNHLvtJMJvYtYE4BEBuCpKmUhamEGU9ejXEc9fNA",
  "key17": "4GH2z2MRabCLuu7SNTRKfNVzKsHEboPkZAotPFauqcsRtxibhNKtojevwEb8Va2GPX3wGrSDPBsgty1Xw2fCxkFX",
  "key18": "5u7y84zbiEQin9oTjzgPTQ8HiLmuMosyDBDS2WTtyd6jgZEqGCA4fiL3k5UddAj34aepEbY6Y4fSR9Wheqfc35pE",
  "key19": "4CVMbmp62xXr4BzrHtpycvYN3gATynfu2u9QC68UYB99qZ71yLJtmm6cGv7Hmh8sKB3EBweUu4k7dCthxGhNPmda",
  "key20": "2DbrBtPPFSkLwm2SfDAfKSbLQcGFReRdDHi7k6dne1XZQQLAmX7zfb9vJTLXW1Xd7JF8tJqy2rLJDjBDubqCW5UG",
  "key21": "naJzrzXTVBQCwNGtuToUXP6goLtFumBmmUm41RR8pwG7MSjKcDyRGpRFVPxDccUG5DtHtZjAemnnG8zumnw9DNi",
  "key22": "3eGCz4pEKQrh3NgGsMb5rW4owT8PVYe5iKDmxudNdp845uCJiJ9xJqzGTgNnVPqQQJpcBpJhK5wLNcJGNbbmG99B",
  "key23": "sSkZmUrorjgeqqrwniAoW8GVFm4dnHnqrArioxFxEooCbBcBUS3KZ7bqypcdxqLtZGAj4jPGjCuaxdKPCEuNDET",
  "key24": "2hWjJD6uf5HkoYYz1R4FYgfhXbryN7zmAwtGzeNiZEujsMNoUCuRk2AmosDKqpJt54jsHy5WPEYJLUQQZxNvxMGX",
  "key25": "6nAgEvV6TZC8vbGtmSBgpXbg5CW7TjXA7n7Eh5QZwQyz21qQyMJshbTASUBpGLAA4bkFMZ3xmdCJ96JEK1rGsgd",
  "key26": "4NC8zFAf1tXnKC14nPAwEGKtzZ7xvpQYJ9Xgjt7czcRPuyBG7XCPdud3vZ459SerWNDzoCsS75DSPeoiY8W8mW21",
  "key27": "2w2ixZYhiTWTVQ7h2x6W47hLyUQ5zvaJ5PpUm4n1iSqLCL36EMyddezfkP67RcXRBmk2TLs5uRY6nfJ35W8tfwxQ",
  "key28": "5N7QErBqVFdcHfWHjMg2z6K6zmzYeewPEWqC3UoqMqjEc9QeN7jBp8Z2P7po97LtWvUKunuLKsJsP1T8pzQxStaJ",
  "key29": "3TY4K4bydFDUy9HVbGQ7wcHwRTbB4G1LUPNbEZV6LTbWGVuvRbN3UYRhirCZxnBogRde2C17wMnvtJWE6UXGkkDm",
  "key30": "2rjt6NNYSxjxw9wnT7WQbsLtinwXSJq7nXAnQx6rdTBaVrH6MW96jQvAU35F98Jp3ZL9nf3z6BLifScsD6nZf3qr",
  "key31": "21Q5pKkaJLC5ueEropTtk9BcJYBvYFfwtFsqKtRE5ncJZaxhW9GCCxZxvMQEpoU19pVkit4gicGXkCEJyEwumya4",
  "key32": "4uY6dbyQqPv7D5PvvfkaHNaMLBSqvkSepPHe5yemMhZ8taFibpJzG5R6gRdYsMxobyVZMgiXPCbvhCj1QBMRncqU",
  "key33": "2trKH3GgJC6L2jgZcChdsHbqupV55CZXKoJPueCNnpBhxVPEtTJzoL7hSSxMVSyzkxdxFQqbJZqTfwrzCLvyCXkb",
  "key34": "31C8314Rbg4eFZXRQdMcJQWc1qPDTP6sK5ebCUvtV3b5Y6jf3faGBr2RasFD6Zk5oi4YcNM3fy9UvL8W7K4dLcnV",
  "key35": "3TSsRubiwfZVkoVRasRJAoiuYkLW8jaJVeRUeNas5t3E7s6AexLET2NwwRxhvL8GwQChqnGwkzJitHzvugvSsUd8",
  "key36": "BqbN8EDTH32BbmkY5Tk797DUP4DvYf4iFsFYyZTJozYUwp2FbAmowofPBz6GwTKgHM4QMprsii3yg6pXAapQqbN",
  "key37": "4MtnNUPEBqpPadwJb2WuWWoFi9C8ySeHuupQPi9DS3m19AazxQ4bXxfr1Gbr43gNvogvHayEoxAWRX1EdTGwGsQn",
  "key38": "FLEwoNiNnaDLaqQxqrV7LLEc12PcfBQQzsBt4gLufTJvxHrBSqEEfE2cPu1As8wmCLh5zeieNCiFkjhTDwRAmza",
  "key39": "2smbCMF3kUYNCsSD5ELVu5wwFMRpUgqtQvg2NzFB8dbPNexmYyXHnqiKKesDQdnSUEmdj35gp37pooYvZ6gYLH2g",
  "key40": "3je55JjS2LEWaDU6onmU8DZ2G3B4piwodaXS4PXic7SohESHW7zd42N96Ns8xaekp7d9fKTdwsCmbQh58ghZPiVs",
  "key41": "3DFr1aSsdqHhsfbc4CWVrCfgnkXCj6mfMT9DY8f7LC9Yhyi655dbykmM24FrChwaPxjy1w89cBw6k8jnAZBU68P2",
  "key42": "AeQyPj2Vn3QRpwcLjcVMChDjxoQvkrNTFn8BvrtBM16fMQer2xaPfRubnra8vt2THaLLYVPrFF1jKar2pFCBAwM"
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
