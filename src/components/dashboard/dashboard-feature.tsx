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
    "2RtxqqwAmR3Q9adq57fWTgPuHNUSpRD5Hm8YQ7YfnJKiQ2Yy2YC8XpJTyhQzvAE4gtZZTjQd1j5zHgnBHyUqP3GT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MMcbja6hCNxQPexDGR86Knf31vxzoSBtLgwmhmxzG8bZSngYgct2JQ3HNzfhmEguVBjjreqJHiFWizkzTqsCUFP",
  "key1": "61FAf5xy2kiuwRSZZRx9a7Vr6Pao9w4gwtPDKxPSAYQPgvodSCb2FHgM6boEUodJPg5zNR91EcZm8BiVmrXu5vqm",
  "key2": "5ayevP2vrnAxPKjshEE3u24eH7U8yHpwG1YqBscH41j4ocs9imyoubmDqomTSjJ1Y3EakoKXw8WNJwacu43J1HGe",
  "key3": "5yZdWJwD5EWqbMkBo3AHU56bg5FLz1h9Dt1Z3n8GfLVcWfCZZovvCqVM5TyQsF6Y98FNxvNPYvzmUY6rSBsYn1ao",
  "key4": "3JpoaBAzMEQZVgYLej3RLME48qgdvPejtEtsPRtqxtera6amucKk2VGNzLhJ6pjSrNAyWKiHfHsU2GVxodLBDBKK",
  "key5": "2BZ7bsu3PUe6sHUehbPgcEBbivCMQQ63dkpb8wPpEzDNm92WCyBR2RKvM3neAnt9bQ57hPwFmn2kMfD4hBSg6Qm1",
  "key6": "4G3fniybSe5eDtMBwcjeZLmusxgfkfbFrKKG2htzaA82Jx3L56T52vQH2ZC62fETe8Rzr9QbpRSoanshDGqpAhwF",
  "key7": "5GoMHKFuWP13sFMwxX8yGxiHDFcpzX9F4rvNa1hAneUZXxKsg57cyLKMaQUbx3JMmxPXApRUecC5k6xSoj52HYUc",
  "key8": "5jw6VWb8RrT5xJrbfSXyN2b1Pqp8GRjemnfWpX9RsfAYNJA2F7HPcn77or3tAJtPywMBstEZbijWxpGmBVHUiJNq",
  "key9": "yf2wetsSDv5dFy5nYRncT3SGP3YJvUZmZK5ZDF3SMmhH2y82VVjGCecYJeP8MWpkonXjY6ofqMrvzMwzxKFYKtH",
  "key10": "2qgnJtEGWWE3KXSxScVDEgmNCnzC1fCj3k8R8ZTzQ7PASpGKHKv1Qg23Z8duapMcohzFsWsADha2qiiGRCV7JiEY",
  "key11": "5DCdwfTDpNSh6bCReBQWyBZUedzQQuyuY6hLAW84VJE1BQp7DzRb3XNwF99Zhsu3KSLBYh7DcGQB9SmoQa8T61kq",
  "key12": "479sEv3JN4CTeThRZojsjETgh8NMJrCtajs8F53PuNYY46yM8G58tM1WaXse7ejjvwDGp23JLTMouQsNg3rp5zLE",
  "key13": "5vpu7qhU9yz89yBnCg6HMcHYt84F159MW6xcQTd2SqCAY3dFAWdg2eCkBGnRUtkKc6ETgA7mNBPWZ6MXp852sEMX",
  "key14": "5R2LzAN2HAUz9CQkjqe1QMsyihE1k7esrNkKxBZ86Ni2NuV9a2hrCb7ow4vZphTBLgXQzDrjA9DaTHxRDgYniwPC",
  "key15": "4gY7LBHCJ63gJTa2c8RrGw2CNNuGQVv3X4pbP3MbbFqDu9d5phUjsn8Rjmgey9YtBqpA5PK3ew3toqCvcK1mM12U",
  "key16": "2jM7TdR1CKjwWyTZCnGKaPXhEdWwTwWi9Us34qEZtvM1pJAjVqLKrAmpyy9gjweeZ1MwDWSynZoqZnDoamQ9Vkxi",
  "key17": "4x2FjHJUvhEYhkPqHPSLSjAbcxGVevw2bQioH9maat3UM46pNof8MaH5XPyKBafoRzezqkW7myzZRCS9yxckfj5W",
  "key18": "4Wr5GTEtN7EBQFjDxdYxnqN7MXkPNpGwRbD6mEc9eGqyjErXP3NSK43Ujpt9kLDmj4GdWy3tdCWJZ2k5aMoCCSqe",
  "key19": "2nDBmAN9EM9gLophuY2LeNtrQUbQshywu2xKjjQWLWN9mey1pdcTBHAuoHdL4ewHaz2CMTA8sNs18Lp8nbXozjRv",
  "key20": "5o9rLSzRm6WZVU5GoThsB38h67YL1MANnNnpQ9QANob5x88MbH3LxqNgpY6jb9rZiDGh7WW2BGAvHw2MfubJvA9g",
  "key21": "5Loxn9gYbPHMqfZghEi1rfVFX2pjSu4Wgp9SqJCNuPjsuwS7dFfH8MyWfYGzUt1yqh9e8rtrcUEGjXHuRbtGRFEX",
  "key22": "W3Nss3PhS73wxqHiV7histzmoZ2pHVfCkP5dAJczaU51KA6aX5sAQVc2mXS2uPw3uVBK4EmyLJQTnGMfX7vwMtg",
  "key23": "2YmZUavymrQYxnuWMYR6Eg6d8AqLZTu8n9w7iiC3otkoCVPMnwpvtJ75iGiWyHyBYPToxCBV7Zx64eBbFK8dJket",
  "key24": "2q8FZ4tW6siCwFqAckiYPWm23iYHMueLViB3AXJKh3NWn1Yu1G5RdpUxN2aJo5L3VH3GD3zarhYJ3vMtshhx1MoR",
  "key25": "5dGBjdckPMUc8C6Wkj4D9nc16abPxEx2xMTEbj1ZB2jbexJsGZGysXFFx4FZNBy5CoNwVctBJGWgmRyj7sQQYwsy"
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
