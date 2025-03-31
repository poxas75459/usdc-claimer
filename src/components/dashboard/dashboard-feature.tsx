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
    "4RThKxZMSVh2p6RJVtHX5B5wnLkviWwygQZ7CuWxRiryKvjczNDyasVD2NcVb8SC2ox2v6N2uvbqBG19S6LVKxYR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qWMPYBhw13HfJFfbb2xS8CUmkTyEgh1F7TkookdnWbeu4ZddmfFGGMnEzfDi64rQB2BL4SiYacc3nDovRJDJhjX",
  "key1": "5MwzEBwSttGUbgrTFg21TZdZbVDtRbPAbQTUAH1jRPiu8ixBsbydF29jioeVghyjdoLfQQHa4VC88Bza3dQB4ugx",
  "key2": "5johtr1Gj18Qeifpg6fsLVFNG57P7xkfh7zchuRGsh7nasUTMUs9K38uJX1FzTwGj7zqi8iQMmXsN7fmZDyykQAD",
  "key3": "hR5txcDFaXZL4Q5ygWTMC9v4qb56fte2BriTv9vVb9cy9Vr5WhdhB6WoBViP1iY4fiVdrtFntELSawYgsx6vmFK",
  "key4": "2gCmuozjHp5BfmbhpSECudWJd2HAToLH4DrGiCoro5Y2yxC1e4Cs9jjVo5Ee6jzr157cRnq2Lb5ZGTgfyLFxbXxX",
  "key5": "5wMgAei86hxJTkFNxp3jzUKkrLBsnmsDBwAm8nxQDAVajf6BTY2KrowBW7c1c6PFYLkqNPXkmKrEVZY2HSz59SUr",
  "key6": "3YtsyY2MWrbPBAN96NVMnT5B3QsA4HGMaqDLdgjDENKfpQkz2Tnq57ZY2T27oGGLiJ5GZ77ujVdeVep7DJsx4642",
  "key7": "3tbvj3NZCqTZJyAzZAwgnUXSWrwBP8onEeZdhEEc1s1u2AWVa5G7ZoGmQN5JP2KZJ2oTiHMHpMLcPwtrSyumtX1G",
  "key8": "MhFfHd1xhrPr6vTGNYZjNeS7BKr7nHbeyNyS6oBRX3BzmhhHtNvWm38WX6KgpvpvpDUDbwCNruaLBb2XDvHLmtg",
  "key9": "FcjErAQAa559KUmBqBTAZGRdrpQT6GCp5DdqVaU2qiNQw41XGesJZSxrfpSeW7eXmEeqh1Q8w19MyMTUNdLECui",
  "key10": "2y41ejpBpU7yTWYnfkgqoLVc71m5GEMQPgmQ4LQgJAbk9V77xTVdd5XxWhQLQgKAuDRsD9qwjS7xRDLsokMTd8cG",
  "key11": "3GNwJPEdN2yWdTWk7euoymAgbw4URcuYR9cqmy4kN6KR4V3f64koTNo7B9ibXSFR2bZtkgztHc8JnBKCzqbGZyi1",
  "key12": "4tECSB7pAX4Cd3PpnJ4dfJ4cxtDRiojnckYaAsewM6uJnGwLNV2jxPLPmqYVFRdFqdS1a5ZVBhNgZHi9J3Pr9Sje",
  "key13": "3LF54KMVL5ajwqkFyDmFqSwWjmispVbsHRJEix8VFXuyfMNvXjAUcAN5cxv815KdbVfsSm78778khCdc4CWd3Lxi",
  "key14": "4rQSzKDiWWxdRQCZVZmv8PUqoiaSx1gCacaNnoe1cqoVS8PE4pTFVkRcKpKc7ZK7xR26mpRGVhh8Ywx3PcK49jfz",
  "key15": "2GsTgymkhghmst13rBHMiUHZEnbkb5kyMeVy4R9tbTk5bzYQwgEeqUairuphFUqDGw3cFJDyqptmaNXR3tHogCRW",
  "key16": "5LQSi76vUkyghehigcCviN6rMws57bmnDZMiDPbwmu2bPiXczLqVArBcFiafArmqtBn8TNstd9uQRokBTayV7Z2g",
  "key17": "2u5LY3oE1jTzAbyNatKZt9wzMuutsw8TKCfJBHSbzTwghBaC1iRCAZbf6wh7tEmsxvzdxnVTPGQGuTmWeFVWmGQ6",
  "key18": "3eamV9VUrKY97P7skdGvRaDrxhZHeMtxFzYqQFTUwuWM6PP2zmRRjKrRjMK3APKSV6dmSUfMwLz2hryyejfqh716",
  "key19": "4gmyqEjVMBYhw4ZJZYioMRxZQ9BmEe6RYZiaAAmxu2yoPz5ZsaqUSZb6LMFUfNZo9jX8FazazURCEjC96KriiQR7",
  "key20": "5ivK98yh7Gau447EBGeC73sJ4LXhwZ9tAbSjXYTMP5rusqFXUmjjK3PdZYBennUqezNkPfRWScpvbCDFLoywpPV3",
  "key21": "5C8yhSdt8pDQpyu62UMarCrzkSJyvWV4hQoLGzuy55nQMb1AQhokdoiGDFv7BeTjFgXyUJPtBBAFsY279FeHEZAq",
  "key22": "2JuKhQR8erFrnvZzKxUMSJYZABZJ4GT18zwJtEV6rWDp4zADZLoWHCDY1xc6zMSRai35pfjDXxBmC1j7CPSeitx2",
  "key23": "3j5sAhGrEX1e8i5pDshH8zV288Kgso4jUXyJeAgncLgaGf2NrJjXhRLqVdVLjb3qraR7Ky6Bf8vBWSpZ17hqygJ8",
  "key24": "MvNdhCJuXxJ9Stob7iCRDu5niqoxYBWfCgyojMf85fiwuwkbGQWwa4fmbyArJoPda38eiUAHKSfj2x2GkMVrfJf",
  "key25": "4ruZEW6XCcBisTj35G5Ur4JBnYsAv92QQFaGN33g4DUm75VsexS7AirrmygCLLdGQMykAqzfDCQUcpJN4WAF39Z",
  "key26": "5GdpEeY3LPqNLscrWq2VKPeGyGWZxV8TqSMUDbQzcq1tt6BNtDDwK5NkiuqaP2Xsji86spcgfQ8i5Z6pBFDeU7VN",
  "key27": "3S29CrQvyYurXBWwZ2nvJ43aNMPWbGxCXmFXnHcnfxobXXZTn6E5rNfBcdRcr5udJ35j2yrrKDPYgQ8bTz2Zkd9L",
  "key28": "R5vo5FjuDsPuqqimD7nx5NvZqiydTJbnFnn5Q6htdVUwF9wkBPYfiMiWm2AjrVEf4kYYbewBNnXCmb2Ap6ohVxc",
  "key29": "3fxuCVyGuy7KuDNwTxcP3nEavxiFm3MznnHxhxP2P1Pet6UsQGGzRzsLGnLLLkNSPiFzqvrTwBGndUPWHSxJJGCn"
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
