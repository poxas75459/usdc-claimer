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
    "2jFpsW4F182tUUnz58MevYW65p4kwgj9u9tpt6k6GLjr2hsxKVxNPpcSgLqR3wkzKfDt3eGRpnFAhtiBbQeJNBbU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PvpPCt1mRYPvM1Yym3gNRZRN8avRzFGvW1fFzJeJoMatMWa9p4Qcy7maSKkLP1Tp1TBdekrtDuwMZHfAXJF2fyt",
  "key1": "3LaheE6uwNFdaEaDzFvtejfKPh3goP7jn86wG1jQGayKtGKaZ8dKRYNnrXkXn6Wa1HX5NBTMe75FmkydyUgh9vff",
  "key2": "44qtdE1zatgKFQz5cMd9fYQ2oVtQgbSG9JgHtRfu1tfBPhF3s815DdXC7T1vc9qNT1cK3iTNaPSQTpEPbmz82TMx",
  "key3": "5YbpGSPJ5viGBD3HNKPduYFZcJuNGQCVQUiKPUNN3mpQSPKY9Ng3NQ66qTgJ9Kd26NGDVm7FDUonSwqdr8MnogYD",
  "key4": "2JHKC3dbjEKYoLqUQK3YVXDbQoY2keH29w9domFJ2FMwPC88Fw4zhL5qTXXqCgkZj4HhV1ycE6wwmkwwP63f29G4",
  "key5": "3GNNJPebK7DWR9eYuhRQoAvDRGxuiGrcw7NdaNyZWqfq5JdPjM7ZdJn5Z5bbwMJ19ew5gPTLqgq2PNefSJscbB2j",
  "key6": "2X2XCxQxbZzKdQaKHEK44uRcajDuc889CiWYkMzvhSGCWfE8PnMxDZdhJpV5psu1hABLBPComwiD5DtNS4fEspit",
  "key7": "UdnMBb7dKZskspqc3hoZatAwWRNt9P62AcPWuuZhVf2xphnu6KhUkmdqzKhsBaHeDxsLdYcv4PBbPRC1x27cnQm",
  "key8": "5VkMHzAyj5QYvEjS3dNT5TfgveEBcDSLYfsekyRX4u9QWezoAQasRhDsjuUvnLECqMA7ySrAXE6sZDbequqBD9Mf",
  "key9": "3vBHK7bha2nLGgxLFcjhLFxsoyGrorYgrctR8zioYGKMSJMHJDyonissMTMrvrV6pasZweUsrWqCkoyZdQUcENRY",
  "key10": "5VKHTgZnCxQDBwNQz6GjzKjvFJvW3Yf4j8C5CfbuEu4xtF3EeCqM1G7SmesuWy3nTjxrFWHmyiThpEz4jW3LXqcL",
  "key11": "2wwEY9E1yZ3UyKVpVTeMZBRTFoJfSr8XVr1FNRGzpV9UjhWFfyDDmLnE8tXsWMJwEnmpBdty5j1yUiWNeWNBdy7Q",
  "key12": "3RYkpkYZUBxUkLTonww5awSNw6o3CNPGvbabKqNtqRrxM2uNWrBRnL6ojbxSbn3zSsL3TyasBSirLQ2iyRbvwxyE",
  "key13": "5WVx8ztg7HHvNQLHZyPzMxkZgj3Ww4dzJv1mkQAmGWWW4cPCypdKoFiiVjWoZCJu2Ld76Dxo3PECWYKdh9JtGZPN",
  "key14": "55tUpB9dSUvn9SppxGJMA8oTnw6TfzxCDu3aGTiz4swhiMz4eE17g8vodEsBgzPWx24wqhgPYxBqqYDPgQYaVkiJ",
  "key15": "5bSGw2S1yJC53aKQzxuWwa3ffy3VwwhwBYy5nPM6yoSu4LAN3MZD9GSzFWuwKvjRey5YFCTBptToqAdiRxVNnLLs",
  "key16": "3fF72LXTEouqAGXM4JunCu7VcUeVFE2pMgzk6UVThcm5Q618RajwDqgAPNBTwxNA9vBmtq8fjuYXZURakBgbhuV8",
  "key17": "4Z3coBMXHmSJocGn28DCJ2QtnYz4ySwLrsKt5d1xP3K9UrhMAgj4GWKmXACtHApQaBRDwgYbzs62emoTVDmUN5gZ",
  "key18": "3ZNYJbwfFzk12WKMZ4yJe3ddBaWiJJsNMAMoJHUA82xeJkQtwA7QPjS2eX1naaHjHxWyidyEGhmXTEzL52v2ruw8",
  "key19": "5cuuNJbBMccfbuqcjKgoYsFinxSEoYjfQDwADE9EzhGJwZcKkqCnysAGbGF92dwHyDm8pPwH5GHARGgcQrkve6Py",
  "key20": "4AagRpmj7RAkxBoDCJuT8fFWLoprhzYqnkrvTvusK5xVDB48Gd3jokMkLR581UBJBqb1GAWdnKiNfFie8YaG54D",
  "key21": "5ZUuqRHK8ooCqxUsBfLAqV1ddQoNod9iH5aaQyLEdMRic6j6LeNLGXMh2LEozuoQC11ePJzNX4cKan93ZT6T2tpD",
  "key22": "268iTNYDawBZ9c7ibDkcLZuKxgsU1Hp1DbT1JvULxmn2XUquVFNVmpNdJBniJqdHuyqCwgDVSHoWDbeuzUdgQyhS",
  "key23": "4iib6zWt9rQ1MzmmubQL4B7pT4ABkx1iiwczbTWFk5uVwNYYFBNTF3WPqPfP9NAwHN3ehPJ66ADciqEcvHKPyw3N",
  "key24": "3dMEnN9zzwUyp1Thcw1Cy6ueo8hnbML3HT7knk5xkDtXQ1onqG9Lo4Ysnt3dEcnXsA2nXts6DzxVbTibncqm8B9i",
  "key25": "2LjcPW1PFAk1V6JX8UsX2gUbtwrgo4bYRk7GNqDxjN9pDUg7w8re3K2evSx6wKfNvgJnTjV8DwS82VSXJ9wSmX27",
  "key26": "2tb5U2KMhSXdGQVDsdvSPFUqBi6D5yG6JQSKBWChGfCzCqMc9PWkqFwQBVGy1pordbD4octVxE8sFqPHiuNxGt5Q",
  "key27": "45mYaAcwTi9ZGJKuDAFrr5L3cSU1tQ53E8JC4d5iGR7vXnJkzQfNn4WbGDQo9yzEstHPP8VUd3tYvrDooq5DDTSY"
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
