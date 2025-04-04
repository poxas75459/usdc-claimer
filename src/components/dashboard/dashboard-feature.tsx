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
    "5SzMvgeGj8DvtS2zjEWZdNDRMrsSBEEsh83tmcfN5abEWMKbCts6bdqYaN8qPSticBnw4CpV3DZWe49d58XpB2Pt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TEmJjDQ2txPyA2vP1SptypufHKzS7QkTM4B7whCodSkqm3PXSRhNDhDZ4fdg5kL42ed9RpQLE4SUbtfKG4eKayP",
  "key1": "2Q9eoBRaqBoiX9gZt9c1GsgbyaLMJLjVzJjbGD1rAXzbUw4FhWbde5YSBJ9JCf7h89xkDBjT2aUA9LFf4Hteyqvi",
  "key2": "2MBY6EC4SN2KCdCSuTF2uyicwhVJ3xVgfaoMWNpNM3kryXAPVysBjFL27qnsV3oUHyFQYD4QPgkhf1yEcGKvTJX6",
  "key3": "31BDKd4EECbntizhr8opG3QeGVaaSrC5Kgv6RpS2NpaxNhRFfxFRZmdfb1CrPzEDJqyn3TWxE6YTo3Z4pzwrBbhm",
  "key4": "29pdfkAStJSsh8thWfmr4YfZMbMeU3W6QGeExHnTSC1hx2DNqKvXnLCTL1qd4agG6dK9JtbswuBophnNegymBPaT",
  "key5": "3Xunyfk4SVefLpJYYVjFr4KfaydJPFru8htUGkYQbznuHij87zDm8FQxtSbzwVNHJnv1Ab629i1mgRehPS6Agm4b",
  "key6": "2awLNZvzxJDupCmhqEe4kLDhsAtBwmuJugpR92TGZv9KQPY5npD3zqWZkjxPbQLzrffSrc66Z3NXtYobtuWTxXoC",
  "key7": "5atjhrCvypizaGoQjsPkFYiHgfu5gjqfgGEjsuxjq5tZdAejKyZsa5T1xMmeY6W5nCUhEzrLY7XFTHP7nfrhxPoD",
  "key8": "4zX6ABaHKr2ztpk3FfLSmwvmjcmi7GKD4E4ZqUG5vap65tmF7piouZnBCNfh1no4UFd25BkPkq8jxyqRUt9Z3oDC",
  "key9": "3p3ZWh6e472KKRVj77EwtHFESz5ES1C7GvDVByoamc7Zc9fcbmW3E713aptrfdmqaKUTvoeVUF7ZDH2baAjGWMy5",
  "key10": "5HxTJAWRPBoaNZBrB1FaVFBmLTn3aFqQQr5iSLRZFP6tXoB8bqhT5KVqG3aHB566EHRqj5352b6W9ndMczJ2rJtm",
  "key11": "4MsC996S2fqjbRGFTfmtdyjAWied2dbDBqjYexF6GgukTtkJTe8T5i1DGAz5g3j3dq8RpScA8kEFpMyfR7XbqCWB",
  "key12": "4nh9b8LvhkBqatMD6TPMsutwn18xvTkebKT1X2WnQ8sjADHJqBKR1hGM9w8RneoyPcQ8c8iwgZRQsajHesbBY89t",
  "key13": "3CrGnDecfhPAcr6GZtGwys6FwoLGBw14wrVhrtw11ctMPJRrKV5x2NTajN97GdmnaZ9AqFy1TCrH7EgYCm9vfeeg",
  "key14": "2D76WyVmM97yaaejeWfox9tZoWg6EZoruqreLdSnbp3u6zT1Cf52CCZCCP7g2sau5EP5WzQAYWGGFswDgeZNvJ8N",
  "key15": "4CCoQWun66EdifRgigxMBwm1SpQ6Jg2Fykb7oY8GBXETDKhcQERFu1dwpwNba94EdnLMycyUro8aGtNqQtu4g21k",
  "key16": "3iUSkK9dQvbHupoHyTbLKZJC7mgsUf624b8R2euWjK16Xk6dQr6Xgw5a11YAfviUazxVBD8fBoKsMbA2mYbw8iqe",
  "key17": "4Xkh3bFQFMkj5XKSvoUxqKUycQgrTLjkzjNgzM2Y9v3hR6tzMkQ3frUqNeqwn2NA1TpuAyVWHqbAXurmuPEkfCYM",
  "key18": "3gR5jUTmqGuCniPkDHV9c6LeWeCqrsA2CCjBGwsN8tgb7iWcCWycTN76b663KcdrmXbgJ2tknmkJmECGPHZRiKoG",
  "key19": "2Ar94hx7W65nGbWJtGdc4bgeGxKgiMudYgN3KAgKabsvRiG79uZuuG9nph8ZV1qWYhgLtpe1KhJ3Hkzqrr7PRLVm",
  "key20": "4edXRmxqahdrY3KJR8iJ4iLx5SyLSdVcpgen73Ks8sSuayUbL9P6Ti7S2gq6MBBxZJ2Qf2tDcdDWU4BZUpdtBfnY",
  "key21": "3FkEdJoimsrUQ26hoDodDwGjzQcEv1EAq99CwBz39oLRkprFFCRtt569N3Fa6JVdR7AKscSKfsuaTVfxb9PW1Req",
  "key22": "9AQ8kJrsF5jwz7KPuXLis8qjnMYh5FW9DzCLHpCNCREx6v98uVWNiwJe8dUvuEcP8qDLioJqbuMz7ysU9hntnGy",
  "key23": "dixYtgeG4f3kjzWvTNZHrFKRT16zHfVfV9Nb72SQxio9xFHVMkRhJKzKNoNV893aDETDN4j4x6bjTJJqjeFrSEu",
  "key24": "2xDjarRFeosjtXnCu7UYa7S4oPeeRBXUi827eJoFS8ofgPHPdjNHFvLbmvhPLFPTaDSUV6xjwJH7bAhaVGVxBJ4f",
  "key25": "4eGePFwpDUD4USTFCwqtJWUqzg1dRZgYqTAXWyshHz67WYM1AeXZg7cceT1ZKcAPeys8VFjxKBxkEtfWtuDFU1UE",
  "key26": "3EzdSQ4vZBpwWcEZ3FjexoAVctQqY84jWVxLJCCJnHhAVJLYooUFzCsDWSbyus6snNDxt2R2JCk3i4x3LZU5addz",
  "key27": "5TfYUMZHNVUJxWFd2MaSMwtdKYJFq19ZKvjjtvSNibuPW6hKy4MghEiKBPYhb16DJHkhnGBotMsQP4R2maf3eKax",
  "key28": "3oTUBKNcDRagLNtAKWtu31mY4wmHgzGkTL3cuB7djjM2djhZYjorHsRUib2EVc2KneWk53jemenU3sfryiq9mFAt",
  "key29": "2J3peG9PM26p19ST4JjYZNzF5nfdjBbbAXJrB5xoEKKbnjBbH5NoPdNFEpmnMur6XrXjJzDES6fno1ja2GqVJfGt",
  "key30": "Q7WymsNm1nswkByShVJjxugwQ9zd89MbTYAuxFqEn9iw4RfxQZvTpsTwsDYgZ6HuP3xP6XdP2QrJcodCHHgsYy6",
  "key31": "2hwZ2tQK1WuRUevkJW3uEABk6kWxhNpHDqF849ViW7dQ5UqxpMS2v2QX9ecrrsQ9cKDRhjdDFEwUPc2NVEj2LtE1",
  "key32": "3gtW8TrUAd8TUCaLjotmaV8ZoioeGLjXbggHEs8d4P4K8PmM9RiGmGNsTNn8W1SqfkbvcAXysPbayeCwfy73gHsc",
  "key33": "5tnMUQEuBwuSRjmYA49AM5m2kpvUc5akWtkpS1rbPsNhWjLBYoAKTVy9J4AxFHNgFmcTpxLjc5hrWoumhBKyQd3U"
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
