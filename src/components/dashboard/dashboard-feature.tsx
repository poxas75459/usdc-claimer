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
    "5AZRjNywPspQZZ3hd7NdxKj7jcqqjKQUvdfV5ouBNnN241F9KSEfnvPYacNEykrjNKXLb6r146q3mkRXqVzvt2Vi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "634LddqoxTpAsMKLp6hP9J8bWqF8foLgo3jyDHbkLTVSqLeJZKRvuyBHgPDeCr84ZAMgxkoHYMfs6fMbDPisGDHX",
  "key1": "3PG9p2N8o8hk7woUN6Uiszrh35fdhGdxzweruGjFuXYvysfS5rgXBeviKYsJxjFkpNKaYs9W23LDH3zU1B9eWpkX",
  "key2": "2WmZDj15XwEpmAfdgGsc8AUMvQtNc2qPZAgk4e6SiQu1GFxkGNyvnWjt5EWaWSM5NjtLiNnPiYSWhi3RFDrXu63G",
  "key3": "5TBTQrzjWT1Ab2YkbyxvrLW5F9L66VqJDs4oQKREud9Zt7EXHyjCYLcyA6bVpXKshRxH4WttwrmtsG9FcqbNpuo5",
  "key4": "5BjeFLr3ZornKYDWCnqvdpiUXAzx9vbihK7kdwwDj9FeFiRhDnWK2y9ZdRKzo8wpeJRFiVby3GEbRMW88GLMNebf",
  "key5": "hvyZTkSU6VmoRQE4fyMzVKGVv4qstqfYEajJWs9YYuT8nBocrcTyT5wGWT6NF43v4Xcq4jvHvSSrU9o3QXbNJXK",
  "key6": "4nxHxcyKeY2LEHQs7wLQPWQyHd1bXKvDa69GPjvB6mfu75eJyP5j6rMttjjZKMaWPLnMdNtxUXYJTANVoxLdYNy5",
  "key7": "q4NXdeLKS8YzV853BjLaGJ15zM2bZd2bkCVP9Sy84eJ3gCqW7mcR79JgaYdGPt43k5tRoLsdrGiMUegt2tc5iwj",
  "key8": "5habw9veUZQ4Bu21sBvFnKnd3tMr67aK7mjn5S7yfVbBhC3jyLpAfCRw2MqTg4wE1VpNQmWDtnNx8zTw9uqgM2vH",
  "key9": "5mt2rZk2QsfJgpLuokmucxBJCuaQBNLUYApqhMyhuJs52bK4zdHS6uWD4LAwA8hGcz2L8Mwfwuvtpi7BJQkQcogE",
  "key10": "48FzdLeDZVqQ3sqh3wj8wARfRzSKJdp1TV6Vr5dhVEEs61y76XQ1gt3UmYbR1h8jvdNEqfnwJ49UacbXAEESNbtq",
  "key11": "44zronPaeYcTn2Y6Geg2esyqRmQWEp6EVeQai2xUQeUhnG7YFbTSjcE5CRYwsTa4kgVByJX6kgGtfFnSHYjGi27E",
  "key12": "5WmUFecLuKpfG4sJ8y9GfWu1Fpt4tA86aWVhmLZwhgm9URVVzpkG9yhbjx2CS959K9Bo7ZLyyhSBQt7J8aTh4Zhx",
  "key13": "3oSWP8Z2JbMKdB9ovWoymYrZuJZGvkmTLXBmPCADfTF1kDaHy7VdGpdzJC93CeBmKnWBk22XmkHrTyWa92SLAssk",
  "key14": "3TBkF78ampFRR5H21uSzP44E2fcpPuqPNLVDFNgsxHE714KRvireDhFEMHRjrqn7RLdXEUo45nADhCr5jFhoqdsz",
  "key15": "4yup51SCEr13x7ysDez387rhgApD3gC4k4Tguk66xhsQoSJFwRN6ZABUthXc4WHb3qNjVhn6mN8c3swAW9pk4Fir",
  "key16": "44DBBmAFYnWE15ARowgGM5JnXxaCZU1vVpnfGuWCF8gUTcZRPkJFqoYYVWTewGP8V41PC1hdMtoYA8m7NvfeYSfA",
  "key17": "284yhhmmGsRTNFPMyBdDPMxDc5448Hn1ZBkxtGfxPmE1D9yNeAuJBDf1j9VswNsECqFhWSMgseQTk3QaTJmi7gF5",
  "key18": "3kJnivqc1UnxYRnm2BLjEqPbVtPzyYGNzKZZ6Zq87PxmkPFjoNAZoDbz5vzArWcgJqiGJJcBijxrWweq5ap18NcD",
  "key19": "Qz35Ec1pNYqY343DYtvG1SR3JYBc2F1cgLz4wY6qb35U4J1jbj8UZhQkoUtbunaNpPjDDMyUM3M8VWojoibjcNW",
  "key20": "2kXAmnpaQdueaWdkUi3LL8PJrU8LewnpSFyoHsXy4mbr32ohVwcbj4QB585URP7MQRZYEru4ZXd1dTjPmBk3hfGj",
  "key21": "4tHSArk9q23naz9oDvWpcpzvv1sQYdp2trFCVj85Kmo9pBe4r3Z4tVtv9YcuEecQkqnvnXq8fonY8QbxHC47WVwY",
  "key22": "xWhTwqHSBuXLxUUea2TgURw8T8ZXS6zy1L1yyU4oyGNHwh8fanP4et4vQB3z5JgJ6hbFYJ2JFoHaiFbiqZjs5b2",
  "key23": "sCNjd9A1iBh5vBVxGF8WKBntYqqwghHGxfqLCPyXUQAoFZpiCVropsf7N8FTjrA6D7aT9UuKaH1RMfD52S3gKLX",
  "key24": "3LrJP31Kk8JQX8JpHR696VecjB1topGMS1PUL3RtmHiMZa8dGYf4Ejqu72zXevceoQUv2Nw18bgcNSCMxBW9VAYk",
  "key25": "5pB2jqCsEkQxYJk68S1KMEdAJ68MCnw5SPJAjjRsvDEnhT7u6hZR3zdUyv4k6QiYktuk8ME37gsWf1RWzvYbiMm2",
  "key26": "3RjgBcgsyV1HeBWQt3eLJWFnf2jDUz3j75yrwhqiwp5aNBZSEBcLsZ7hdVzKD6vhvQTWoYGMSBbKAyLQ64TJRbEC",
  "key27": "3A9DivvAS3QE6MUSVySk6uaxT4YUxUreVbgPngrt52BMSAA8ja6DKgD9h1xyaiGj2xZDucANMzuBapTzo3rM5KPB",
  "key28": "3qZvTVbe83Tj8HNzkBbHsAFe5Jgr3vfHcinYcPQHuhZwHYPDS2i26v7vpZFAZy3QXrektmZ2aTe6Yu1qws5bQMCx",
  "key29": "5tHQvKEkQFmyCANx16D5Wr1tcmD8yjDc7DS4xsNfxhjjdvhnH77hzLVEfgJztHTsGbXsmaZ3uNvKRDoukooum3dx",
  "key30": "f2oHMR3MZhfMU2yCedQXTFTWH9MHpCcyS7qJi4LeiM475DS5ZL4ZdcTkiMRGmjV2gFJHPYoeAG9iDHUDSPh4QzN",
  "key31": "3wtdrjxT7FPmrasG4i8WFaSGXd3iUvXCCHw49bj7yHj2DX1FR2oEGfPj2cMc3tXAYM93dXUdsVAJPZWAwpV7awoY",
  "key32": "2BB2KrWM2NdRQF8xHRrqBoQ16XXMC1d3giJraSum1Xg1FBw9CTioPu8HEeR34zf2gF9etKLdnKe41xgnL7ufX8iC",
  "key33": "4qrdvXj5p2XiifwRYFbFhzKoW8ZGAKD7wUEprkZMyU2TW7srdzpKv5M8CQ4HqNGeRthhnCfdH6Pi9iiu4W9dkZdS"
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
