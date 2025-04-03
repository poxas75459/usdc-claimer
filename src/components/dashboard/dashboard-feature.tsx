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
    "25HDzMgHKSusw12hptzAP1Rvf8q62ubzSVRjx53MeeSzhS7MSD68uF8YLb1RoZQ1wzfirnjcy218epQ3JsCkZFDm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F1YkDvyDKLpuJ9Krpq5jEekVzeSV6rooQPiD2gpAGWNKgC26JaoxH5hMmhRRCQnsZkkqath9v33yB2kfWfMDz9q",
  "key1": "3hND6J2LkuRrUtocRkB6R3iT4aZHnqd9DUe66WB8FXEZRAB7UURuS7WSrJc2p7fuK8GDD88wtVPsYJwQidxXfFbK",
  "key2": "67onbPLD8kuXuWCJa4v1Wp5tM6Xc92MpuWz7mHu7oGXj44Vq7EorFFqsEaiVGurKVy7ndi4VXUVb23dNMrk1iW9R",
  "key3": "4XXGNTHaaL1FSz3bExPuoiJuFjUbUP1Dv7BqoXbD7JGpxnj64vWdcAQkh6tHrYEFhgq4WzCd63EMB231k1aA6MeX",
  "key4": "75bQPw3iQTrkZz2hd15Sr7PCvjdkhE31WfnvWbhicxpTZdxyCCBrd3QSwB6RrjteYSVYz27Kwf1494QGJf8VkiN",
  "key5": "5NhN8NxjteHGiZpa2Zs8BNqNAaoiq1wWDfzs13ZibCECCpMh3ciq3JnVz8YuktFDHjDqsu1vVTZMzBowriQhsZQx",
  "key6": "2YEnzvZVwu9vsv7gvBYWzQEohLuA7ZwocCkfoJU5N5GNrJDJXczKH9yKpaM1wfASd8uPfHncS56H5BepojxUY7Kw",
  "key7": "2MvPcBe9y6Frc5ArZZpKEgzjum1RWqzN92NeW1WrXwN7eWuqfg5ALbgdQ3YQG8FbmoPgBJcVQPsNSCF95SQvyE97",
  "key8": "5v7ckgY4tsi1ALvWaGBJMrjbnDwFsRfzT8P8kjpqx2xXS6KreLDZCVY2DcAAzybiNu4xxw1qXbg234wFT8CJBPPz",
  "key9": "3f8v9GRyQWBfHZiHhyooTQqNfxE9SZGkmHiBGxWz6cxsNC99ho1x95Ed3MStuEm5CgseNCYrwf5Cad5e56NXGtCq",
  "key10": "2RAEZfbpyAd5MNJk4EYTv4aauN6f7PKn2V8JevxvuGqWD4WZC6raWWmkBN8PYUkJMspMUWqob7JhPHywQzq9i7C",
  "key11": "4awcHZhMC9sLHVN5J14QbqdMQG4ibsMsyRJVeSiBUnf9nqnZZqQLFuqahbtDECciHmunYdmDKUg7LHQKpdJ3JnQp",
  "key12": "5bhXopvaS5NzHEUPwZs6hj7422K9SxKJsFXEfwGhYeUZhHwMzwGSZs5p9jwtGXQsYhHp4P2iqpJREE35DZgM75Ea",
  "key13": "4TuhbnkcUvyEspN7gBvYDDERvo5sR1JxmTo6d7ZLk9gqYoHYHaGPpCjyEeTokFCmQB2VVgc1xpAmF9WqUThjvN9f",
  "key14": "4Rju2SvfsSdRQHcq1J49gyYYe1soUcy7DGf2PNagCWQdGSWkDPM9LrEWqRkfy5RSvgSd4Pkqws6N17GbDs49YyFA",
  "key15": "5U926im7ccbNquc1kKfTYBFSUJ2XfyGK6LmraAKd4CWDymDkWCtGRKRQgncrk6ervswndh2ynFTee86j8d3PXjkx",
  "key16": "4XKWpPAMgERTeWwFEahV6FopRo3xB2LdRhLYk77EdExuiDMtLeufpY2kUatCxyMM7n4AcTsZZgwji6SF64sfsdoQ",
  "key17": "5XApib2up8sthtFhFCTFQNv79pm5F621xfni3RxRWPawzy27NrVQ4MDLrXhJRZZ5dBC562yR3xda9CGd4nZmDFN1",
  "key18": "2hwkvbbDM2Qs11y2yaF4xdx7sqFkMK61wFvMWUZFtCPrFoEwvbWmvE5oxYqu4rSHQXSBJCDPH2xLZ9UrVEpQdhKo",
  "key19": "2cLGYxLtccD8veRKFrwKu6kYMhPTwQ8hpDKGNQzq9WccXqhW5rhAiMyTkj2LT3BVgFTo5NBSCnJHWDE4zUAe2VCB",
  "key20": "5BuuoALMQEzt1tNGatxhEHkscgUMsSJ5sAsCbu7M7tgzgAB5h3HG9NfF3PTqqi6TfA82xhKY1X37ozZgYdngG4qa",
  "key21": "4oxdWywtKX5pCmpxkJXNoqx1nT5C5vLDjYuK747UvDzbrMUimSGttGszLCcxmK7MJf2r4zcXFgaCjDERjSYLDnnD",
  "key22": "3hHbzLo6ZaEjbHWjgcoGpNSe3agTQonC3RgwCGrXGRiysp5JL4zJvEaoM4pCbkgLX5KBZyw9ocmXpNyFmfbrZrjR",
  "key23": "5hsY9oJjhngKHfTyvkYagYrPSpTKj7Xi9PXw16J6TwWFvNNjgeUb86DjHbcRVN3uEUpS8tvgaZzPFK8AqMHu4N2R",
  "key24": "4KnstcGevj58EHtWi3NKxx2Y6bwNiGXiRRPk4BeSu1XPWZVCxHrMV4ALZUPe3U2Joi23wo8Z1oqTgESqrqa39Hb8",
  "key25": "51S5ygVaFrgvxffch3Qa2dDfgoPQZgTq5eHgQHeZ4CzpoNi5KSo5uxKXEobSuZPwi3F8Nr92wAt8cV3eQasJWsRk",
  "key26": "4tvFvZdU2rqyHxAyt7cRuc9tbMtn7TwcqjRGFjaQb6wLeAKS1iB2yR15GLUUcAmxMsUbfSQthxXDBVfwughXZ6fz",
  "key27": "3ARu227cvKWSXL4UH3wsJXZsia9Fkh1aZvBhNZdB6VNufV9xGWgeZ9sbrVZoYEXD8YVTxFALJFkNEiLJxDsxZHdD",
  "key28": "3hpm1N8YzDSad23MgA6vW9FafcpcxeNQy6sCzSgFrz17puCJ9DLJNnqKs5gFia4Afxtt4eha2L5YQrvYtabRGZB3",
  "key29": "5YewpQm1N4S16bZu5jDCzHeaCnHHqw4aLNKiq3da4Fe7TuA98B9WKLxJZN5xoS2NzKqmZgfkEaJXCMR3Mt9BHAJq"
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
