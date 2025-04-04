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
    "DDgJSExP69cw7jvZBU6edhey8Byg1yb2PA4refk4ATdnuj32oTw5QeXtba8qa1WnGScjN52S91A1pQfHeUBb2bN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cfXWx6UCsMEdKbCLsAiPRX5ksuNEJVWvwP31xgiNxaZDHGpUyXGr7j1TN4cf5J5yNYfixjthA972RRUd4WLQYAv",
  "key1": "4RWsFngqg8Wt8A1poyNiEoUgjqGKKpM7k9HmA7NGSJDGibnKMVHpBVSZfEVdqnqqGJ4hpfGCFHJf5SYfj34tcooK",
  "key2": "4nUyNQ8ubkPTRtrh5HSWKj1nkCpjVeTwz1YtYwSZsPe7sSfuedGAEaUfxh8QC4ijhutjQMNFGjWs8j8SuRwo5tP6",
  "key3": "aVQwX5h286aFjPVYmQUE8RgKdkS8KaCiSvw5Vmko55Ws4sg1TXYqo7RXRbRb72hTJBwzCN4G4qMRAUUhzzpTqcy",
  "key4": "55voCznGe1wzBra5yPogvGLrTDnFMtvc3XrZL8Wp6dR8xQjnWg4RGupeVMhMMMm2Dc9WWqFzeCcSLhoneXC7RgcF",
  "key5": "DuQ8C2xC22nsadeZhrT7edmNf7jWuBV12xD1gnfvQ5T7PSFP2CKM5r3dP82adwLnRYFX1xn1rnRRKmZM7GYKWFJ",
  "key6": "2aXBqJz6cS3FFY6LBm2ByjbKmsHz6HGMWP6eqdRFHTwHeGrg43GAFrysigGJp1TDcSjFpG4EajmqGQ8tJ6Vy8ddT",
  "key7": "ZyJzLLSukWrSKZXjNNqepGnwGpMXMs7qTFtC2wdM6XWvvor9dpMJF2Jp9XVYjuXxwMq9zwjkB5EYWxKV6HAUiXp",
  "key8": "3Ej6Kv3Cv16XeCYtVj8TGZGQuoJguG1kDtkQagoNFEQ4jLCCC5svGE1mt86YE6pZGDf8A81epfe3FZMvBeCkuiEG",
  "key9": "7s4UwpUcJmLkyuzWtDLdiwGkACdLAWNKPraBJK8HkK6xEdW3YyZiwuRqL1fDwe1fKTDwHMwZKCRNfjbGjMpJemU",
  "key10": "5ZL3MZouTu3TSShA4EWcpCzt5qBdhBsA45N4m86s6d8z2dE9PbLsCYQybX4zFBYkgfqebwFGjGBrNdg5NhKX7PfC",
  "key11": "MAhYcgXKd3P6dz3Ttneh3p37kG46NfduezNUrsFR6mfGMpvZ6aZ2RtCBtejeqYM4QfuePrrMLAXoUPT5Dri2ZWD",
  "key12": "3pQWpB4oQM8S1ZrTRfBmbwFatuvUq4rm3viscJicPgAw55GUgNiV2ok7TEsiTeQTtgeMrFbAt5zK1eZYkzDcNeMT",
  "key13": "4tBK3xQTynVCiwQcQFsyEsFWX3QJ7LikDqXHuxGiag3rUg5M5mdnaRXGKyNBVHJRa2A9qQqdAMJVKu21vJaMoXBc",
  "key14": "t8uPvLsBXWpcqFvvwfxJmm6jSBFfPWVMTNSnhmLt9n3HxbMePrvTcq9T6HJroWkpnJHaxWjdFTQH5p135Qz2p5P",
  "key15": "3BDMfBjGL3NJqDGhwKhzHMv6fCT1p1Hw9yLTfWSN7gDRQbkSGYKz5K4198WwREPhV2UmqWBponXfEu1Yxx3vsqz7",
  "key16": "2ZvbD34apGtcDt9DN3pa47pQjc8mDkGYD3D3bAhL6BaKqEHpLLRKGPmH5HTqks4uThd4S6iWCpfirSFy2Xcfmqcw",
  "key17": "45Uqazg56wkHgtNLCTn1C4Np6VMDPMuuCbGU82FFMjP9zwxy3KCePMtFGvifCtz68EaRhFdx5MGUHggnVE6VimvZ",
  "key18": "5dbeBh5FYCNhnYT68gAFZ4SXByQuEdvyVLqdiqhfR74TB1nBEc8v3s1Tw2dLtwMSJ8p3VsG43vMGFLJCGkHLbxuc",
  "key19": "2oC5thWWAWmXLCznpgoWMowFGLnURT6dPf5wCchuiqDY1auTjvGvDHn31wrcNHchXLXQauA7fvnxbPUfXQQmNeVj",
  "key20": "2RYcX1JGa9vsJK5NHvqMyvMJUPcNPqbuZMd83ipr3PGRv4r8As4LRtpFQoj1JSYQ8eU25K9MqeS4MN5g5toUPZdH",
  "key21": "YBQJBPmoprAkkGmGm7VejYeHR3UPCygAkmxa5UqV9mY2pte8SMTnXNaophcRYqJbBENuQD1CssU61ZA7hCKuCG7",
  "key22": "kgzKCwwyN7QeGqFabHb1nQDQVuZgWYkharZ6D3a6zvP9nWbNzhQhvioQrLg7ffvvGXuojWymP7kAMmJUt4F1qNW",
  "key23": "62pJbFDYBRKyDKSwa9EdsWnGXQPVW4C2AW8vE969n2Th1ySuqfQVngnoE2ZjooqrdNa1RrVG1SuUh7SkNMiAteH8",
  "key24": "2tCSTgBfoXwB3DLvb1df3rRqPnzrwf8vYfdDs6RudXZgUac3YXVeUHpKLcgiCBMAKuXn9PxTZdpv1JLLBbt2pbJG",
  "key25": "49BCYNxikVq3MjwXWeVchyhn9XB3wcPbnukkmttzvWo28gv188sRuqns96BtNQZwETP2sziDV3n4CUU6J1mYLAhN",
  "key26": "4cFShGvTwtEvaXQx8imYxMoSYSg1Njvt9z6iN87wC1uYiz84eRq3SsESMamcvwrrLwia5joLzbbSvN58dzQ5F51Y",
  "key27": "5HNKytPLs3NmXhHfu37AuoPqKqC6oHeECiPjzhBwnsSWh5Q8txGTtJ22nAc6SdVkd1obPwtRK8iPScRA9KZsNi4S",
  "key28": "3McA8DiXsPNXRh184tpn5gmZkJepGCP14ZwoeHDReGq8D6EbPLHNmi6DmmZWwSWdngXvJobKXNMW4dDLSn1eBxkT",
  "key29": "3m8EzhCQWdvR6ET8j1iM3zK4sV8GhvR3RbT43s55aecU3TkSZ5UUgqZ8u84UMxYdi2NnnVQvFXZpJRxHc3W8GrXB",
  "key30": "4DrL3F5uJkLRgDPe3BE5qgumafhJ5swcjnLuGtfH4z1bMwqfuT6VqjcyxykzF36toxxyVcFLF8MCWCGrTTJTiCTH",
  "key31": "4Hqx8JeeaRR7g6P7SCdWdPDawoyjzcvdSYnFp3fD9TPESpEjrwjP6bepp3R7Jwi5kvaWtypLzMY8tSkMd86hbf9P",
  "key32": "3f9asrkwdtVUMvxMuE6cUrG2SRdSRkhCPGkJtahCuUTv7uGTxxN6Qt2bwB4S1BkBLKKrYXe1J3FmkkczHH7JWwdb",
  "key33": "yQJUe14WhCqfHqgqGiraTdbqUeyUuKBURsuDgoy3SRLFCARVD7287obVWrWswDBD29KbqYZhiUyt69wPDrMem9m",
  "key34": "5VQ73xf5hFWA6JzBQkA95K3jqmzqLivBvC1o5QMxjKdS6uojaK3mgxmLujKxDHEpvBWDGGRdk9uL6ZoJB252JJHm",
  "key35": "2T2ctz8uVvcb7JRq6UL6X2mRQJWxemrLBW5CS972m1fvK8gdrE4GdLAYAL58TFNkqP1GxF5ghDh58WmyQjQDkE5r",
  "key36": "5rRtryK98zhx7F8DtyCZxCSL4LaB5UWDTZjRYJvrJsCvcnKAYyrsmamLqrDQZzqaSFsvQ9bJcPyLiZ2fHFjMnxit",
  "key37": "2JLaU1N1RmTZvv3AScqkB4AZCGBxNPhrdpjZtzuPAbVPYLNjdsYLDJtgrPW96UpSu9MNzYg7GYYHf29PpR21AdHq",
  "key38": "2EJ7ddzvwNviMMiYAsXpMzQzcwcbqNcSWkc3F9XcP9NvmV3zbV6oEsAgBbbEoPmStU6wKaQviEFf4x7s5tY96hep",
  "key39": "2LTmLsQvCadyoNwogSgQYZvtZMrHcLWrknzRvpskDsB2AiqcuD8bLxf15T1jpXPnvGu483CMfV1GsTLg2rWo38fE",
  "key40": "2U5RFp4YB1KLYTT3f6Y9N4xzS7dBdTMCSmq4CAWkQSt553E4zgKk69SPJPvVdMPpw15jQYmwQVzo7R8LJajTn3w",
  "key41": "2YoBhAnJn8oMSE8bXhhT5pMoaTnYPW3hG3beELszkibEvzdmpVKFvUtDVspa22MpyZHUPpXLWeG8RHx5WynSEeuN",
  "key42": "3Yn4YfKy22hnLYbWz3YJGLZRp7UvXkha3FpFH8LK8xcg3sLCdRY2x2r1Ah8EMfpEwxs3x8hqQtGFrJiy5MCJYEPp",
  "key43": "3SAKjcmtiUob7UwbSAVhyNrBMnGR8zU74Uy5ry3A7GQAN5QVZHzZCgZeqyDTGfXsMThUysiQm7YeaZmajq5BBUjE"
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
