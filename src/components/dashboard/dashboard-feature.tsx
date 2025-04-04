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
    "2eA9TJCWuZsQPqSox5xuapxKdQN8com4aqRv8x7FijTWcbbmnsjVWavGjSvge6YBogBLwKA3nQQ18N3WMTTfbe6p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vUVkCiC6aga5tSzNWSYecKt14BJzCsxvwtNEDiCDHLUMF1GZEcM53oU7ByyNxDGLUDdsoav9AGXdkH5L3MyEP1w",
  "key1": "3Deguic6cai8Wkh85aA5LFXYZjLUecGJo2oUvnMAquxaxZKpX7GmTaotTqkUGuxTzwYeurqCkQ4vbbgoQvScD4Gj",
  "key2": "2EP8WoDgLYXjRzDoHqkvCLN5LjbQGsUZDj8k5qRsxXDqBwTU26AEGjg2d7EL5TYyK59WeRPy9jDkRPkP4y3pGVUc",
  "key3": "2gdFnYdzPDBoMndSkboXpdN7DXeLNQeYa8y6xtfxvabJppbdSGBrzeSij3gw4eELFFefkhWd4PMtnPFcF2EPCD2a",
  "key4": "2vLnZUpbeYgz8cfB22PN1BeJQej2By28HL2HZpxgBGAhxtvBfGQysSqb7APW9dgJKXi2C1N9Hcti2suLoUT1iTT8",
  "key5": "4QB7XjfjgpRRtKK2GEDDUR2h1dStuTyNuXTSGkXzXzuREezQSzaqtP4RU6wyzUcD5H4navi15wc8PwrjZ7JsyrMn",
  "key6": "23uuYAHPVcYnVwatSEheq73vdUWdVve343ds3DddKV7s4uSGRjmtgupo8EHo8MEzqscZCCvYs9EyBUJCw6UC7EFc",
  "key7": "dJqBdR2NNnGGMhXqga4kWXCmtEYwRrkLTgD8szFwA6t6CUvPX7qnauH87fHAFZB28Ge9MX2uFdt4XAW72YVEVKX",
  "key8": "4Gaa2EdMqY4bwpMDYjC4nMqFBcCC1s9LKHQpfNHHmNzQxcruoXsNqgWTGhzUjZxoroR7vxoN4TajCaujbvMV7Ctw",
  "key9": "425GTZf2b2Hto6RD6BKCCkpQHQoLksLLKUxTmFAXxawJ4c5AeeCQ9S3bJ67PhnD8sByHqSoxzXhdrDYyM49Um9gT",
  "key10": "44KH15zd62NNhXRghs5SKigCXdGZSk4Jtw7LBZWTT4cnX5rLF1xPqr1S58b8uqjpzgiy8tXWdH5aLKwiMMLHABxg",
  "key11": "RAQVBvuiqdBykBeCeEuAmgKVsfS7NRCrYeVii73cUKesBAE3zJN6KoEqhqtJ2muFwYySjNdMHMfoYoSDa1F8mqm",
  "key12": "5kMztTiDZUQFnu9UptGMYF2hrbjt54ZdQLC8sCs7AGGaV6hxHotfc46fPyE736SjN97WLrWpjHzC7udHfs6kWLbv",
  "key13": "2Xj5zxEy4reCeHfHjDbzc6TPr41mH7rqfj9GQhsLLxa7taRUVFoixFgJtzMSJY2LC24LYVsBJdFM7xy5Sexp7J5j",
  "key14": "Uydznt5e2bVWJyMwrWoW4SMGisAtUhiBfZfdcV5FHH7grpK6zfBzrNMMaHcKwbYUnNmGiJ9YHYQ4jSL8Lys7DsH",
  "key15": "5Gfr9Khca9HrAGU9vAc5Qbw2CsdWvp8A44SowiAbbVPcPmWMWaNAVLdp16qKsYLWBZAmnuQQ8sNaZoJ1Q48AtRhR",
  "key16": "hUHNNDcnbJCQBoHCsd4k87L3BapP1FHVcmQ9vW7tDD3FoYhsaqLJAAsMfVHxbWpr6ATftLg45vxxZ78H7buqfRY",
  "key17": "5mA6SjXTjy5c6CnTQRBWy8dG5QaeX7qy4ffsxurDHkoC9JNtQp2dG2tqHV9x5cc9tH3DHKBFRfy1tE7xJduLPudV",
  "key18": "sHLGKyV9r4MVMRjxWroeQJfHkRugkTkCE6f2qCuBTdr1h8tzjb93CJnokYWjQforSwiRWvUpoGwaZJBYLTs3AHk",
  "key19": "3p1iqt9CMWQ28zvG2gPY2tnRwnMNaG5vn5eyDdgg7oED5BMwXD7629w74VvMjPowzTgzfdw6JTskhMydn6yuq7Rs",
  "key20": "5B2aqC81eer9qWF1rYdbdtEntQ7gFRnFAP2xn3ZZZgURcBwSJbEWrGrBm24D5vvJTCXQaQFhcRw6qWLJy8kJeRxr",
  "key21": "5XX9kHVXUkXsWwMWyBe3s68L1YQTFSp8957GP2khyi5m5VjLWN6JHC4QKuM8AJib2ocjyPfPsnEt6vCPYNifVXS6",
  "key22": "3Uxk2jkuLBHoMYbdwLABXShy1p3kCKUuNTk2vq5P6EeaHhy2VombN51Vv7MT95L5hYhXjFzTD7iKL48evWZeiP7s",
  "key23": "47NzRL3dXn2CYRnkgkoAcchkrKHFVU6oA7GPskvvdpj8zP3mvXkuP9PR9SPxnbsntdgw1EQsqjN6tx8RKysHuQYA",
  "key24": "5UNSFqXUTk5XnjiCFxPs8u8BkZAuKjzHBNnhcFZESBaSK9MnJwPXvncvvqeohiCnPmifDGEt4xfx3oGB5zn1vFDm",
  "key25": "3sSC93hcue4zrFevHLejTJxqw3uBN7n6TtmQmT5Gg7PRrHYrVonmpwY3yZooVEMRHq1PXVVJEY4svX4edg9iog8X",
  "key26": "2QRLjdf52FhL1xQbiAZkY7QQY5fL1JGiFqD5CzkRPoanAgjJzAuzxuVJn3RSTn4JRKZqkqcs3ZF66NGfSq4wybGL"
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
