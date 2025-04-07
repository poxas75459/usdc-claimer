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
    "3Fy1dEzrS4drJWZAHAqfmthZ5Ag33uyaGExzTy3PHh61gFU1afRvWt6ksCYim1GwFGKDijsVPhBP6pkzRKjx8RsA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63widck2ejCHQDvahJdkGyZJQmjRXiggKez2ZSA8pqn2exajKPKojVAAEyj42J1T9JkfBv8QFkAVnRaBPmgGUg1w",
  "key1": "3LeGTExU7B3KYCQLaxpVWEgRmyQdRTw6Ja5pRnPCXDdwPtQdxFiHPZLYVdinogJZMvwAbhedy7D1LTDrpGYF7dJ2",
  "key2": "2VoFA4xQkKuuh4m2HbQ5XwEzJ9gxmWAqHM3eSfsybxYEEuRSUfmpnqsvaiY6UHBFT1CqqC49qkhjFMRxH191Fonc",
  "key3": "4LJuufMUq7B8Vw9oZUGMoL1FifDjWBCZRMKuFLDcrKvRtSHUi5BrNp3Y2HNsgjZWAG3n5xco2LXfMmfsEnYobCGg",
  "key4": "5PxnR3tUw6y6pVDsYHCHRCs3uxE3p9fBD3ED1B9uGX6i9tEzFgFrtdcMQKHjpQVgZbHa7pLdm42tMN5xNNrQn4RW",
  "key5": "4HPB9PPKcLG8EUaM8KfweYxCeWPg33ZoHj8tQbfGPhfALM6PT6HL1V3FbmboAVv9smGPSuWQMAL41GvUsT3aspQj",
  "key6": "3wXbgbf7c2dqcQxBDxvYXFs465jcMZpyLZYvjf9wQ6WZdxZk6TA3pTSUbn4meg7A1WWZinyjbKJ7rmpamQyzt4yj",
  "key7": "GgeKT9R2BsRCStYKqJCEE46RGjrAvQE1fQMpX1c56k2vZgSXgpyiLRJ4m6ai3Ah9qXQE7xikavxdnWSh5TALwjp",
  "key8": "3rvguR17qRGeXU67XJRpvBXXDjWG8MVUEWLCt9UqkjH92rUTnEaa2WbT9DvzZ1rg9wub28X2JLmEoNmY3rk4wp9U",
  "key9": "51uzmUoxcipNozX1D3pVUhoiQ5DRfAYzUedep8FSgH5od98VPyJxZbZxirZ7onXrRxLuZxDYzChCQWk9YjFqwr76",
  "key10": "3g1LosfW4o6vUavLXLqeFCbHYK37GYcyAi8JNwfGhtvcRYLQBsZxKtkq9tQRXUvBPKE5tFXo8T4N1joScb2ovRLS",
  "key11": "9T1PQibB3aP3wc2KAX8sgbSBx1JyHBhaVs61tF42E2eCAMduXrqQsWSaTA4QhLQUr2WsxCX8rvRaa4QrewxVdTi",
  "key12": "tAvpgcWonkjhe3YtkRifo4E3GJzgXhXoaqvQ7wWZcFHCozmPYHEoopLM4FonF9VDdowh3hhC3RhHMdXJ78z6jD8",
  "key13": "4ut91BaksWtt39T8gbEN8CL3LqFeGNfgWYoxkUN9f1aVRteSUjTBo4r1BL6FguXE83Sv86N2uzmdCszwcjJY9wER",
  "key14": "2GiZp22taEYjNgwQMY5L9fUGz4ETG1q1LcMC4Wmf89fVFqsPgGuwGeyLSBa6sojgXCjifCdnRvtq42R1QvbuZ4Pn",
  "key15": "5scZzybFWDrKrLLwnfggW49nygJuWtmy2e2BgmqzCjR3pLPNDyHo5rri2ihKN1uhjnHM7FkzhbEDSdpgbYi6UxjR",
  "key16": "VVuAGb3W9zxnWPMkbfYU2aco2TD8dU8TWD5x7CPzrnFg16nDj4tJd5M2fJour3UnBW8d9fyvC9ZSfN4fCEinfuZ",
  "key17": "3Uhx6C1v56HVdmWP8LjuuqHjwEgqEkv4RiCRfNrbFvm3pYPWAZ3EGxPtEaZCqhoujvkGK2G2Laz4SE8ZDQoDXvRq",
  "key18": "XHwJstZzj2RgAHpkqmuD6Je9utfzuyCbEShjCbXkCNKEE6n36t35n53JSfLaZm2ZRFpauuqz8tc8HCKM5Eti8Yi",
  "key19": "socXkciFrw8ykpGrf8FfHJCG94GHC7H1Fs1kHm3rgzonb5ejc4CDFqqQEHUZWWUGrrPyYWsd62omPYZ4Ke3o29h",
  "key20": "2GfG47mn43knXMHNqFMfbDXSmGXHx8GNHC2ZRj2gzq7FqDnfUjsFQSaWif2dw5tJsKuuKFEn6yaLwfQa9CAiYD9p",
  "key21": "3QLomEFZZbynk4nEsQoDkKuM3GAoxVZsZVtThW8vgHdq4qq2H92N14iuVz7bnCKi27FPFNQ8tcTzQForyhvcrnrc",
  "key22": "3SCPqSoLVgTfCg1WgZCZTJXLkxhjyyFCPes7P1pdHSumAbAq8gTdWjhcwYyxERq57A39xvKPJsrFArQB7eKbzFj4",
  "key23": "3r4zjBSVaMtXBBT3aDaTEdFhQRLRaaFVeD4438rpQNGyxThCT3ZxmbciTCnKKZYPYKxvahom8gvippdFHUbBefWu",
  "key24": "2WJWKENAjFFdaHd8DjUkisYvsrpPmF8DqLZdTRihvEgq8vzrJ9CxqMNBQQ57zXaGa5HfnNFnBJJ5Qe9VyBthAjJh",
  "key25": "3naB3x9YRxSGWDjHRRPJWR5PFiN3WaVUmEAHzFjWPTZ4heZ4TJGVuahKMF3phbZV4uYNqHbfEouzEkA1XYnBfSh",
  "key26": "64ZB8i7g9xYx8nztEBkVEhMk5ypBU2rBStUYgfq9PYXrMTmkTGiTtXBGhd8P34tE7MNw8ZDUpKHBL3YZYuqJ7pFf",
  "key27": "37WHZK5rxajfwzgBEvb3iELS4cdpCLam1HQUQDvC7joxmt1r3KXeqhtdntTQ92hQfAAYohNCTbjbddYvyMpo54iY",
  "key28": "355QPvkMjHZNEQPQHvMe6zkYiooEkya1FxKAfqDQ6Tv6RSApDqGR6cEMaYKH64zKD4ZSZ1xGioNdWxZPRtUJjc7o",
  "key29": "3fZUQLBEuWGgPEnCbid8gjwhL4uGaq6Jskizc3xdikFxcpn9oMQsrpfbt5Pjainm8dESfVJ8HESgdai9XHgPVMC4",
  "key30": "4i3BUzR2UwpL2oRt99mf3dfu5pwA5vtVRPhfrRgUkbMvFshcFuowWKvVEsmLG74CB8VUvKx3Lg7W17eEMPwxsfNj",
  "key31": "5wxwQ2VyAYhuYzBomitu7P3RTzHwuS3V65ECfqDAnrhCKRbo44iHjjzykKFjGx55G1M2MnQMQjriP9BYhtTHDW1K"
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
