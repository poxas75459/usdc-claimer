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
    "jtDpdBbR2kVimeZKpcLvHxtLB1NV7kQAxnsd1mLAYA1mX6rjTD2YCLGhJ4uixkirY68tJhS78zLrawosRYcA1SC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Cbo4jrpN8jhNH2Rsaf515Jdb54NzhicUMEsx99MhV6mggYEfAcn5GdnoP9HrY6L3KsbpSLQbV6w6QQCNpE5XEAM",
  "key1": "rzx4bcTxSAqRNXdWRwb2FGp89zRtLxLY33azP77dsUcVHsjLJPytPwD5RJSbQDC3SM8CGqjEj9e6iDdEp5jmJJs",
  "key2": "4bUSTHfBr5ssGL3PZCMmiheGYPHonwZNPeNH9UMQasPMvWP635DmZMgoPUTab5gQoQp4nVdPueP5GWFMkcftQCh4",
  "key3": "g8yXq5Kksrq3xrifNgXM7J5uFsBrzjRW3qT8KEpq8862T3GK7iWrKKsxdeKG42oKxtLqiVAMhZoNyVhxSH4oxGq",
  "key4": "5W43dy4K7vGRzWwbeVUjUc1qBPiphPP4QesrDvTL8p5GuHtcaWqa5nbE8QrbgigF5P9YmwnSTwjfj1Px4ctQJobE",
  "key5": "3izihjosJkr8G7skJQiAwW7mDs5wjWGDcy3VAZsmscy3fVwfiYKaM2zDnNphrLMBhfeyvUMyPb6gkon5mA2BrjbH",
  "key6": "RdD3vDJvBcy5t5BLAWhsPzMFEmnrcNnWd2L21ppDySWHGZKK8CbLeKCyhbVr8JXeLYoQexCGFcm78DStfHJ3Xsq",
  "key7": "4WDtsUsiNX5H4CWNj6FeXhxVLEQRLcxk2MtSEppfQvgWB9p2dTrrDQiwVKpQA39291d1t8DukTQmAcepyTHr17DS",
  "key8": "2WDjHxMAcgtWcv7m8WpNDr6eN3bUvYWgb6kEtH48CwVJQ3MEjfT2NUgZep6NzY32hkzG41wUucBRmNWi9NnFuPqW",
  "key9": "2e3E9vmNEYg2SEmpSSppEqi9kRd2VibsUAe2ZzLHctoGJodwWLJfJH47SuHZ1UzawVtXPCa4i6g9XvNqSxQ8Dqud",
  "key10": "5RzS3ecvk29cWAvuUNZvZXPTeLcUKnTUyjNfmJNjjN48BQ6d8Sgn4sHPxkRCGkysnp5WYpU6DugUJ8XNWnxAZ7ow",
  "key11": "63FryA93sSrXmRPdXHQxjY3b2PHb5DpxiDcw81H456yiYSkPbwJU4iUT5Fu2k7rysoZZTjwup2tw4GukBcNn6fP3",
  "key12": "3JfjPzrDkunJMrVRvThJGWR3F3NzqthqJcxYwEXN8hNSxESJSCNkZqine1FAqd5b98sJ2trjcNMF4Dsjfr8EUpzB",
  "key13": "ys3WbkumYBmx2MNTjz8DBMMxgkz1xAtH2GecUp6P2scaFgYsb8h6GMGZALJ6aaN6S6cbhjM1Zg1Novsth3KYT5X",
  "key14": "3KhA4Xv1g9jfFgCVx8shyVoMXHyMgxy9CHcXbcKBz8nv4MD6rNif5nJeWLQUXm3XtSBgiZ2pT99957WEMSKaQN1q",
  "key15": "DykGcPxxago2W22rjunfssSyft2gXqVyhRka4ix2nXHiBQj7zmM8FZTPxrehg5dtAwkhfB2NU1UAVjUVnd6SVpu",
  "key16": "4FrFC76eWgjjTVHYwdJsW4J24URBeHRwsb4SSbY4eUhd7Q1Lm6KCRiaLRTYGMdDuiH1pREgZ4B1vn7k1i5Maafft",
  "key17": "5HEx2PEycwrATyte1n5B1mwu3XR6y9sKTFrsujzwy7uisXuKDXuVcs4GuivSxH9jbfBM8PsLCrbQekwBEnj3Xxhj",
  "key18": "2Xmc9g3h6qNMT3AxPsXFWMkshss8b6dTpPFy5MNX84a1wtVXKCBdmRErbCQY3GJaHWN7sRAMS4ezkFgXqhiGr2or",
  "key19": "2sGo1FS84QTTZSEZyF6RVwEP1eB4AevhNmiT7TGgJQ8BWjckqVSH9r4FohEUexLwTEuxjrSEpgj1TCEGpybyTDeD",
  "key20": "4pTwqQ5r4DQvR3wx1MQuEp55dGW1URTXRHrugR86HkjfZq8ew1iMfeERXTMqdrSP4MbwUJ3oMxaLt4jmMg65d7ZZ",
  "key21": "EtEJtJSWRE3BdK3qTHXukmvNyQGbn1dS1mn9jugAC2D1Ukv7qwYbycGV7gKEhUiaMkKAXtygEh1cARaW5Gh2NKk",
  "key22": "3EU6iTdFWtAMNExzvH91LRGiweXgrmnQ3SEjXAaLMdpNrUfuYNvJekS9FJfobmQnf9NBWTHFaRcXitssDDRGTmLH",
  "key23": "5GT6f9Zwih2atAioh8kM3Yy8CHF7t6DHVpZqZbXGnm5Y9ZvP5wGsF7LhR56JWuNvCYH1xChghxiXp6HKcL1wAdpH",
  "key24": "mtUWj5M1NSD8b5ocEVbeqvMM2iAo3kdRKMarmU5g663f4kTrKYYXkRKjWoqGpkjxyvBZwDPzVAYFg7B1VNtRxCB"
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
