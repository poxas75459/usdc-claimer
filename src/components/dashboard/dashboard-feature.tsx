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
    "5Lx3EoB7h3gTiEz88XjcCziGvGTxydu2XJ8VqQkdjDiX4XsEBVQoNVaGJJZ4TwKFpVyRihUZv7pB7igtEQKbDZ9G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26vjsGz2QgFYdtvugqYWNSnXAo6vuWEqWZXyL1EgudYBZYXM1QujHs2ANzSFfC2RjL9Cbaf1xJuZqo5gJPVvf9MA",
  "key1": "5Fcwa5uqiqq4X1JvP5gjCJ1KG4S3DhzeEHaEUTH7gp4Bsm7LewZCXgiT6p6QCA523dcmZCWpTJPD6NfG9a3WBsuZ",
  "key2": "NbU4R9STFv6NGAEbXPkWLevutmfD7u2u8a4aJmVk3JvrYhdPxXGjk21GpULVpVnmfGZM3xxoo2JojorNrJWxnBu",
  "key3": "43GaK6Dv3rhUp32kDDAJdPxvYhFAcNzkWqSwv5qk9xP4sXTc77btJk2U8qmxHoBvqewYktm6aCn5W1MmNbXtGiZM",
  "key4": "2bDE4Rp5JNeMvjTGfyPCZmif9L8RL741MCBHL1oRnBSZjdvcT3uPQKTFRe8KzfDMvLobbXqEp52LffNsZCkDsTeN",
  "key5": "cE1Yu7dCUoSSEo8oC2YGLZBXLQzaKsk1ShbBdsUqw8Df23NpuJKtPmFUCSe51verXcSTbz1bkD2zd7ft12vtPkU",
  "key6": "4GihEvkyTxxPNJZ6fpngtguBokFz6JGTLzDSUbeZUy4LNRjsrWVRfYWeF7EY8xXVo2qarx4H8XaLSrThCbziTwiU",
  "key7": "5MPLTBPXLyW2XAXrhvjABSMuDSkpvhccZNL2jingHMx1rvvGAUsyiThz13z5DF9FFwwM4pxHA24Ew5pnVuKQKk1N",
  "key8": "5zLFNGuDPuUHeeqHB2EtBkdtHuc5BQxaiVP2wK4PjamV2uMsccAYQW79fh6YGX6xNS4G7wzeJv12JbUGbh2SH81y",
  "key9": "2jd6TUNJNMBvVUtehY8ky48xG7rniBL4QGr88adwAnS1RtyZm3EWyxbC6mMkhe68MnpDnPYJYCruKj3GzsHYheri",
  "key10": "2rxVBMXQNMig3DLSzaRRpK32tW8Xyr7PKHJza97FbXrKZrXVYu7pvkRbdKfhgynm8Ch4boNvr4ciL42FRPgzsryB",
  "key11": "3NxjBzw4Y7k5XFEZJL44VPhCdSGfJeVi1nBWgrVNATfn1hmGjnLXAZPuifBtGeghMfVwKtTZaLS6H7Wpo4vpJe18",
  "key12": "5uoK3wgGppUbz5SbdbGBtbrpqgNo58YSoAVqZNTbynXMGCUEp9495aytwo8KnFtrchb1SMLZuDc3KF8GDvxgNqef",
  "key13": "44iNMUMmqubZcJd1C1rEBA515UmHtQxVqTtwwSFrmy1uzW7ByRoofmjziyEumNf33DW9jTcTytCqmJS1kHv77j62",
  "key14": "5Bs5ykPJuPuKrvg9YqHt3RZLQUXbseVAjatdyPqV7q8oDvZjtPhxvGXnkvPqFRrYR7wNGQukJqStiSE5gJz8Ynrq",
  "key15": "2xDrWExGb9zbShsrzTuHXoVEu67fsHSnch5pUGmNAjom93exW419syvuTXZqqLtXZ7Ni61oK1gmXZxwQDzihtbTQ",
  "key16": "4cK3asEpbG4ZcXrXC3Zz4qDYAD2sVwuKaEG4Mcg3S2MArS2fv2ceLwLHNYUKBhfEhVULREqt2boSLXF8TFVwsq9R",
  "key17": "52C7f6wTtxMy65kgWErZDUSFVjLLyoq23C63iJ1hb2xcRohTkkreq8rDHkGo7auugjYtDrL74NmvXpsGF36UPDu7",
  "key18": "4Qsqt13K5BHJUPQ4VZCMyFMkkkWdH3WZpmwy19t7txGKFMZDXss27HnVxwMd6pZ6hvTQfPo6Bsx2GJcqhWGZAHRa",
  "key19": "3eQL5VG1Mv5gyTYEE6xZ165M3nEng4VCmWejEqEFkgiRmbsjUyu99B61NkdZ499o1Fxdt9LCFWhJvnwGs7BKieNY",
  "key20": "5EmBqJQRW1Gkm9kqvLZDcQy72TuCFf1d4q931CJGJpimufvPvjqaQQ5hGeuCpcH6sB1QnG2K3LaESTo9yMqkmCJK",
  "key21": "4Jfdb8XRPsDDHFnDo336CBdpgaC5TUDtkYPX5M8V3x2ftYXkm6dGvauNZMDKuzBM7gW3gidJ6jeDvDwFxUupHj13",
  "key22": "154aV5MfZ79PJsRQzra2ogoHxZGHzb29P89RveghqhPjSTJiPjx7UPcj2nVExBrGxMDPgfxkiQ4ZnFSfGgdrhj5",
  "key23": "mYFsE6uqZfmaYkoYymk8ZCRqmjaPFERycjQi1ka5FahGqX3nyXj2GyJiimF4K8c2ZXSmrMusSbUNC5RTLwB5kLT",
  "key24": "3QU53LxLH2ohzYA8bTwwcsKBnpgpVrGLJciiw1Et6Mcewj6TspyX6jw3S9PhkKVDMpsxPC2EpVGMcB8B5sygvxNy",
  "key25": "iUqaLzwWGB8FuaBxsum1rHWdbVnPVD1SjNGLnW5Y77kggwmZLhHoP5gjee3AnHQLzHYxnt3LHURHqP5EpxqY5Hk",
  "key26": "3nTy5WZUyq9m7etBJADnhacLnDYyZwjLcLKYtgKJPt55xR6TP94iU3autGtqk8xAvHxJS3TxoVfeNZg9Sbtp8Xvy",
  "key27": "4SPsDby1AAkhxYkMfqPfJYpGm3qJbFmJCKBwFe1sXHKKMbFaga7UJ2tfQgcXQSLb1rYW3KHiWf1VFeN8CZ9FjT11",
  "key28": "278j7Zr7r2JwgDpzFNcv4VRhwtFHVKzyeyrthCb1aZSSD2YcWZqnZL5UtA16kJSmfSaX1Y8ytpZEyhs46KU6ETnA",
  "key29": "5Q7FaQxR8g4S6XFpMc78LrpyvMm1ZmwtmWk3Awf1zA3TYErYk1Bk72nAYmcyyvgGhzQgTBWf4jWV4wHUBFvPFLi4",
  "key30": "2YqCnyL92HT73sMYJL2xUCzpxzta642KTR1gm2De8QVvkttHbXNGZ7N3vq1GwJh4o8GReg37Q5GCfaZ6Q6f3BvQ1",
  "key31": "4M7iUSEbcpW2wxHf1dswpmXz37ckoBFeNWhzv4Dcch2HxdMYznuua3NK4A31AipZ92aat4wzk2NdDnm9Y4avtVQf",
  "key32": "5GjQkB66eyevKyJBF9sJBjvq8xsQhYHMj3ujmj8FZ7VFkHDsaRe3RxpeNpNL68SavEBh39WDcMEVYKP8sJtsp9wK",
  "key33": "3uq9Muq9ZiLd7k376NfusUUQb41Zo1YJniW2WJY351emr4Antk5iwJ8rRhNbPt64FVu1QFqramtdRvgjWNeGLVFu",
  "key34": "41XD7QHboDyF5LAKwS4qDQD3yr3q5yxLrtE1ZezT22tS2hUUZJsPRqM5xa7u11yu4L6qNcJri2d31PY8wD21mNWE",
  "key35": "58a6Jjt4PNbYoCCmr29isCn1Djof5dq7VxWfGWdWYL3rUnoPHueqJTa2NNJeiXwXhBAGSEyjRLaEM4bpfaHuhb6X",
  "key36": "zdxaso2BTk4DWguSmkoune8emPcr2GRsBscH1oHFJGxuHqV796egUxELCHBuWLEXvcxwtEtKEPrJ3UdzDSH9SXQ",
  "key37": "35vZPtnF7rDKWeTK2Aa8ErvZVr9Duqb4D1fJecvsbNuAD9xUebSh1iPVw5pBCMG2DVsmPe2NW2FCiFRA4L8YfjhF"
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
