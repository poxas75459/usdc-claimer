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
    "qbmmLr8LZmqYGtvkoDtH4WUcPZKjx3Y3bTSXAuQvsjmKkQJ8yUtyxWoUaT6uD9xMm4X8YYGD2WwoQ3nXv5BsfpD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CWxFJhnCk3G7tkKrKH4dnRHVeTY52fnZwztr47QVZyEP92QmXrodgrYxes1mGRh8XXBc3zmmuC1EbLrdVeofYC2",
  "key1": "4i9Q5oz7UDn2adv1PraBATrnhKptTWw3oMkD9dJoQyTwgNn5UrTdRJoN9MBHqUREmccpjHwJSNk8Ux8xuCeXksyk",
  "key2": "4J2oykiVd4DHodsEZBNAsWk7haDsuK4YaxVfwaSC9Hry6Mi93U9XLSrkPrPJoiKVNWrTpEs3mxJyBBKbuGKwdNzK",
  "key3": "5mrjEmrEkmYcxwokVbC9bM2dGwM6sY2maNMxQeCGxHASazUALpw16ek6mNj5Xx3nexLLuEytajuQPE4meWG6Zsgi",
  "key4": "df4z5QNfx6GQFQLexyCj6NNqWaHp2KKerBF5cAopfHDj2LdLD2jVjAHQ1FxFKEF8UFyTLKGgUc6xuVEm925oNbQ",
  "key5": "4a2nn7Prn84CDTKjeTSjL2pn6sq42cxAWgGiH6JhFL7MveEs3si9HkyNHCGtxr2uB3xhLso9YjVwwovHK8EzjhxH",
  "key6": "3R6JoVJarpjwjvfEYGFmu7QgBSk3FkAnh4FbbeEidvS1zqZ4t4YuqStjKyNx3k8C5H2hQMtcq5xSAAXrrrgx224Y",
  "key7": "4qQ6HmerKX89i72M3VXf4ofy1xwfFparWWx5xw4Wu876K1qX8ByTBncGCKWPxycEjR3p5fMQ5nTiZXADSBLjtw5T",
  "key8": "stD5gPoakkY9Xuzj8Rz1io7AbF1WBXpzfgicFUY4VycTTDHVeGck6CxQSGgZYWzLv5Rui97toD3vFkfPLrZhvCs",
  "key9": "3JJLuXZug7avqtfFPPAFdpmqkeNuYs5VLQYn6vjX3Kkr5L8DUENUKxZxhabXh9qg1cfjAMAsnR8ENkY6bzUYwQ7i",
  "key10": "24p7sPbQwnmJ1iER8WesVtBu1iMQsVpkoTkGLDC3D3zLMVV9bskhApbdgqVKau7LsnUoyoKcpk1PsiTsGgxc6VYd",
  "key11": "UdSGQ5LNV2zKcNJtvBYti92HFdYjt3LkNSA56mPRJBdF61tSn6jXzJsvNFQPVyjaY1ZZcmKSqQw1kobpjm2GeH9",
  "key12": "59FwZopTRzPtj4ceCNXUQeLTmr4YT5B5xLdMxbpxJqEuKjfFTvEqtmejG3e8zkQH3PpZuswHLR9x7oGDV7FoTeJ5",
  "key13": "4C66UuQokz8dHQSgxfxgxCejkAAPWLTChUFSkL5oqTURc6bHLDNri6HG3TPx7wgzKNDvhZNaNUZkZu64URB6j1Hs",
  "key14": "3RbixdaXuDCPitwC7sdC9aZhQaPqNAnJMpkJqVUmS6gEn915ZDMBb8r1og49Bq5JTZoeiNUejEvJ6ytiBymSUxjb",
  "key15": "ZcoAwWZBKtb8q83JiHtkm44MUc1LSBy94PNH9MYpjENzyjy8ChCtkdnsqn4mgAXaRJbqt4JRywtGcULCBjWus6k",
  "key16": "2TSiaYp8Vocha2Jr2FARGvucyV7rJCnHXistx7RA3cK5XErdcCben4z5aUfpc2kauvYZx8P3hTZ6AALKAFktJF8y",
  "key17": "7iUkZzzhsPaX1vXBQpVCiSXQMUymWjXxNeGiih6nzroaY2V7QbNysbz4DXc5VF7fiGTjStWpLmm6K916n8rR1dx",
  "key18": "2thjRzvLcb4SGUvFEtKwq3KdubZJr5h496J3dpyx4xDBWyRnfR7uLeez84z24VdTAGPv6JCY2RCWyGLVtEVwWvGz",
  "key19": "5oqCeQ9qwDufN7tP4Y6a5c3qNJXQBEEfaqmn5W4bdcHXY75KwDWjdxVqSg8DXyjSG9S1HgpQTMWaghHNFTFfa7v7",
  "key20": "415bPTyU6L96UbYdkp3oWdiMQgd5CtY8jBHWD5rrQ9XZPqUJykJFNNfb8Qb81XCQ6A4Ncnzc5j1Try8Kkeg6yjHp",
  "key21": "32nYoiV691U8ZNugJVpBZ4AEfjUPZd6YrbsDc26BM7ojZW8e8bpNES6j719EpiX8q9nNZVcEe7tRbC7o8TpaE8Gt",
  "key22": "3UgiNyTHhDXVcPvrEr7a51UtYUUnLU2TZpTVWd2KAWBu8Epgu2aJxULZdMUGjigMKfYeh9L1zU8pAXCJyXN4nVoT",
  "key23": "yoZmbi8bA1noWyXj3dVzKcKvNFL7CNNnPxnJsNckf29LikZQZjyqCfQvuL7yXQfLnQq1HmR25vpRGPrPLEzEmvY",
  "key24": "5SnBcoCRdjQ4jrsJypVXX5GtR6BfGxN7XdTebTNn3Svq9hkhBVnYy1dLUgwC7XXhYKLP8QV2pex4TSSJ3j6mFJux",
  "key25": "R6uwKd4TieboG1nyNhXCqvGccP4GSNrXwiFaFxjTSBwuceyBVCzqrqyyPjqU4jPzjHEkfkaEqE8oLPkZcafLRJj",
  "key26": "4x87Kd6TFm44AYwdWwCpMPhE6bXTAkVsp21MWB9nPhkGwzknYXNtxKpcYXXD3dSLWYwZYxkrDEc5AmnUSHALkNu7",
  "key27": "3ZAW3rWYFhQhzndrJrZDpDxprE7EqRHyDntiz57GPfkXTJ1mZNcqVqUCyPtggwPA6KLwiCSKhV7PAp9AMV4ZFfQM",
  "key28": "2PgMjZfcVuNMdTPDdsSebVyYYSyFosVSQwYMPBEDGqS3wAyeSzbnroQY4eBCaBQ36eJ3mdGGEczyDPRkYZks5ff4"
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
