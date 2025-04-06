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
    "V6TtoyVxU4BjJvGtkyWPy6UXLDXJXQhQsV1MC4ox2jJkJ4rDVwFBJU2sEwCjNMk9f4Ykdgaw3g7Ra4p5G5qXP5i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bH8X34xfPaeS4fgFztEiH3HEqHaBBVTYBhH3A518bf29dGU4bSHaAAvXpVRkHN2tb33NCE2hAL7FaiBELyfVnde",
  "key1": "2nCu697jtCbqfufbbATrxErjrjaRPjWn1Y4CaAXtwCkaGYtvXyJUEqUA68APE8krMGoj5EnsLRUVmuFb87WuosLv",
  "key2": "54wAKbSroaqDixJkodCTd3T5eT3BEZj133KgNa8FCdo8iZEo2cn81ncGxN296rCugpcJF9Bo2LRmyH3aS4FM8Yb4",
  "key3": "5dJnDcdJRMwgRtn8iJDZQ49VCNFaW6C5mocgeCz4sGejUhSjKEYhxTodNomMHi73oSJUE4hVMKiq8tQWCM5ECJW3",
  "key4": "4cCiE4yh9AaLVtna5zd9TiAZnmJZ7Lgfxbq7n3KFRGVSURn4gU1rXuDC6y3EVfnFWU7t3JJ5cnysnPrUS52F5cTm",
  "key5": "sDSGhBLVCRMXge4E35izYoGpnRGr4chkabkaPXBgw9rjKU7eAW1JBgM1eSagjA25GTwWVynco9iv11UcBqxyVsW",
  "key6": "2ypAXrXbhTqtLnee85VdnFUByfbgLrd2v8Xa3F2LXze5QkLpYNPGzFs5reYvN5mwZarX85mavgd9ZVt5sTzZPwvu",
  "key7": "GAygHGCFMf4Z1ANyLSBRtQH84mXhuADnEffn2gK8GqjEjjDGE5TZ1JmTS18PTasxS8AqEYiyTiK2SCVmAAATzqF",
  "key8": "5LCwwmEYL5gyykXMmx7wUBqd9nha2Vivtm2B4W5Aqi3eRVmFVd9JK8nnqpBAouTBkPJXSy4t67kijK9SAKcd13Wu",
  "key9": "4nwuEvH3xda2AmVhdrzdbbqzQxRNJFedFZ4MbVtPgEWYEfJkFDt6nybh9Pdo494fbMMmtFQZ64A4WJg76Aow6Lp5",
  "key10": "2g6fwsJQX8sXWnQzPvBfj86zyE6gY1Yni64XUnpXhG1hGqMr47qNQsrdWhYTum1uNmUDBw536Pbh8UAeLSmyWvpL",
  "key11": "5n7tAeVXxjdhtZfEu75FJmQsvTuNZyLnBuYhUX3uiqqknMwtLguyPAawBBeaQgvHnk49bmFKjNYTDmCcns84KAbQ",
  "key12": "2Tg2XPxkwy5sftmJ6y8mRThtjyf2K85P2K4Hru91a3obV8KHy9CaJGTnKGsHhEHriXzk7wkgJf9LhuXHv7cgNBY",
  "key13": "3D7mCgzam6sMqy5Yrs9E6xURSdmYQjnWF4JqJbAxSD4kK1bBFZRucjV5kswg822NBHAvxzs7xc7D7Bo384sPYrg3",
  "key14": "LCwx3qk2xbjkYRihvzkfBecmBBTtgCfUVZEYXNhuhKVF6r4hEc1cptBVwUCwa7QNGkybyBFjjongCwv3CbBtikS",
  "key15": "zH8TSZuHQwDGpEPuu8iwdxfFtqeKhpKvS58EHwSRstd3MKQABa7iUWjfHbXX6LFNKEA1mhSwaggE5MzWojCphCw",
  "key16": "4E1Xcqt66ARWgfEdoL67JM5L8Hrqvy6Ft5SYDEwUEvqqD3Hc7Gzrr4rvYSHSozxrU1BYAJgVg4eSqVu4radFSm6n",
  "key17": "J8c5xRB8Njrnd1cLG2qgWXW19dAEBFtt452k519aDgiDdN9cQ4iUP3Chiu1apnVJgZmtQ63fkkhUAJPztw5TjU9",
  "key18": "4Fo325uSyD3o2sfmVzv6asBs4R7vnh8y4LxC6GVMTTgV3MnKHV1YJZWw8EPykQJd2YzCPevi3sP3NN8vkRei2xAs",
  "key19": "638La7cogozroSxg6YfyQph6MPxdXZ5vwccajHLueyvZEsnxn4TVtWVzis3quRuFY5HPNCmLTnrLDrqwtrYn2H2h",
  "key20": "4U3n1P61JntCfR7suYaZsB7jD7oPWQkitRSFtu74VizvLei9A1M5AA5K9r36RZt3Ryhsub8SXbN5XToifeGtSFF6",
  "key21": "38ySz9Jk7ht8j41SmYMmBFXuq43zT4LQZsfP8nkmrogo6cYwzpU5qPcvvtsX7jMFzxBSEb4RgwMSuMb9CjqyJmAk",
  "key22": "PoGXxnykd5YrweEmPNJdR3NjRofyRwZQXRCmqaebYPf5R44K6KFuZfXHBzTGg1aFfy41fTuj7fA8MctomKW33tN",
  "key23": "jaJonMsp4HSHs1aPiizXZx8wYVHPp2X5DXJHdZWGmggHqyqEB3MD6PFTASm2zUCEYqUC6o2z2Mf1iqTQunSUES4",
  "key24": "4gx9VFBmQfcvqRmFiKUymJriZRnwW96C7JZiQGkP7xT8UqWi8GeEojYD8oEtg2PUFhQT8eL6waq6u8KdcKSxaZMS",
  "key25": "5vNYeFg2XDGQDUyVfJzz44onQQVBDQRxEjUHeKAQQmd9uzUzHwBJ1rhGrf4uqbzZRMxp4PoimaH8BEzK6o7mmb5r",
  "key26": "58BELhVxacZCkJbgBEYTXwqKCrTTihwNeDhgcWre2CF6SHDp232Mgthzshc8SCgPEPTJPUZabdJBgM281P1eTeUe",
  "key27": "xNToK2E5zvfn8gyNwso1u4jxZXsV1fJHL9LdRn9mfG3h9PSVihi49JgvGYh1Nd89poPu1tHtNjxkLfhZAhQsnDA",
  "key28": "61dbpEcoKsnQkutdNYmbW4y8YevXfwUExdEWGAnrP77u3bhJocZYTsk1QpZqWP8DivUkdLAVGhESRHMbYMMs3neG",
  "key29": "2BxPJ5Je7USEjY5257kATY7JWQmWStUhos24F7tfxxcfXykyiPXPhDQbF3V4uiro8kezmJMeg1bKGd4wYXBYdzY1",
  "key30": "4gXuEY3YWnex2otjgfN9NEFPvVzkW9CTqxEUdxsZ95vYVE36JLifdzZFSXjsMsAYPj8Nnc6sDQwwjUKQZXaZy9nA"
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
