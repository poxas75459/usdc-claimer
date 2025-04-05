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
    "S92tToHv3juRUD88g1xQAycAGQW8tigPzohPFpqpaq4ihkzWVvLpLKjsa1NE91mCQhkMDrHTQpw1xuWLzGCVcg8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62Qn44LgM8FzkzyW5PRWEmcRwNqcZ4DEcnoXPx8QkZyvEGEGa2b1FrrgVQh22DJuMNs7aRLxTt8XVnNzHemzuktC",
  "key1": "59fZrSczvCvNiH9sd9W4heQwRpubF9ik1shWfKPpivUAX2JfVCbZLYwSrAPrBetdX9MatccWupmZRSp328ZV3J9q",
  "key2": "3GzjeinjEzP8rY7aj1WdN5XVgZmGAFRzBUhV8BUwgst6zgu1bZWvCxJKF4YpgQ84t9G9HTyimB4Wvf3bs2kC5XdQ",
  "key3": "2NcMUHy5wP33WZJPrksAp1qEqLFwP4s98KzYFCQSuhE2tguSfztgbU9GkTew1wLGYXcHZ63m6YMVVpuBSHFGRj81",
  "key4": "5883wfNxKFBqR5hKj1JB1vw5XPivnmqUDNEH5jycTeMwvmtQF5RvjWyeNk47DCxsBxUiy4CqzPAoT2sEutCGVUma",
  "key5": "2CPoV531nTgpwcLa3fAhgqGS46UhQQjtg1oHyCqxHrWGFZnKKcgCWQWQgss7qYURwGiFxrsqBEiu4LwftXxExrnE",
  "key6": "5eXpCToAVADKoSMy6BMpvtLTF6ZZaeuwdWqFiUw188VouNyMzsoeUC7CWqk4phkjoUauWhgxtUdGmg5BKHs84cRr",
  "key7": "a6znGps7RhjH383vx82VpnoSstdcHBxKvhSDBQfYgn1sLz7WyjBBvkqaKv7z5QPpCPxYgPtKaw2koa6ByqmaqeQ",
  "key8": "2YkvXGDPj8RmKJnMq4B2k5U7G2Qb5oCDkK4fcHMeod5u8sJ53wFTTP3Ji1dNcQVudrizRYo89kXW98Zw5KouYWce",
  "key9": "376NV6A8nYcrwhjCh4dL9xspiB33BBfwBqoXmUbpxGZrR3g2eW8WEg8BR8zXHT6UfT7cm4cW66WbYyTUG1fC7EJN",
  "key10": "hPrftupiogsBcLxGUKhqEXAKSzVo94Vb4F3jWUFCBpLcseqQWREzLJUNFXAtsNyuq5c5Qb2JLu1GoTc5ejaSv3p",
  "key11": "5doZMdjwTEydYAKDxamaLYL3tbu8YsyjbtPrz4rHhxPSyjryWsAFXeW8ouZecPZVxEfBTb6iTBAZy93sKhjb7TAx",
  "key12": "5DVfHcQLkd3bDiYTmRfxVaacpQ1fwW4WwrQxthZZMQWuqhV9TDmqoRWQpx3tNuLnrxhD3UMZDjaA8r4kk2NcXJ9q",
  "key13": "RX9CjnorjDkAkxafDQT4cxcHf76SDSCnWVGka3DkaRg4f1ojXSt6APNWabDhhZ9bhFdTfvEXmtfKBpr9KakFevX",
  "key14": "3MX3RVMMMkSgAzuhppGZ2MgoeCHvkQuaRxSJgFhfJyvQ5ARizazPUDk7q7YZVt8A3teS8z7VEvb9tfKbKV5FW7Ek",
  "key15": "4fYQnALacz4j475Cy6bMtEUDXPmtizRxNU4h3JzwXmJSVMks8Ay9nSJqDYxSwKBVY4D2dd4Fz7EfDxRM2fQb6B28",
  "key16": "f8Jt1GTyyKPuz4zFBhwbGag5bE5hEb7gdLheM3iShBdpjrkhkjbeSLdUHamqRFqiQtkiJgdug7PqxEF1xFHZgMs",
  "key17": "2sUUGN5BHszmjBiQWLsahqWJUscwn8EBL8YadAwi4bRxATBSy7upvZrtDByAmaWFLcBxe2mV3vyA7nkU1k9y9Azg",
  "key18": "5T98BxtiZmxKGsfHzZtSUSk5DZwhfCE5kQGzoz19Y45YbkLV3DNCd5txfkrfjArTmfTPJT5U7SrG9xRz8DZtYpt2",
  "key19": "5QjBwV9WMJ6GNM8eB1PmF6bCPr4iFfJG37ex2YJciPkQuyRpK5Dt6ERc9T4ndZXQ216Sew7d1EggmVeRqtvsJJFD",
  "key20": "2eb5SjXoHj9Pg8Df2oNgv5k3eZhd3iHiXELoepD6NePu7BMkYTpoYaob9HFGiUZ6zHFVPTB4YnHYpvtCoQdiKh8S",
  "key21": "5j1zHxTeevGqYSd5m5zTiVZqsoGD85nfpxHESneGtA3TQjp6RbcFG2R7SWsRo8aMgbtLKfAhwZd7buKn8zgDtMcn",
  "key22": "2UaFM83t8c5CmFBXukieDdzKweYG8kTLEYnCVoRE1A9TDq3PVptrzVF7aoWupnH9oDDTdzxZibf4Qyb5E9PGASJk",
  "key23": "XDUSqKmdkcsnnqs7ndTENdCjpcxnsKDCMKKQZkgBEaXNDhUwNAgNDMEW2F4Ex97M15yWNU5aGRyLN3cjmgw2ZfF",
  "key24": "2PXphuXrQ6cW6Q2FZhbVS71hPMAxVLoVNpc2PsEy8MJFzbrbBAFUJqq5fTf6uiNmHkv1ofSxhhycU5PPAsJJDvPy",
  "key25": "4QgTwuEfJRDsBhzeJXcHXkaqqPAX5hXPY9f4DnnYdUPpS28utNnYJR4tfo2WdxrgbQAk8bLcfEvCnpKmWtUF7fYU",
  "key26": "5S64WTsuJkdd27SfrDxBwKS6puPAw7bh68eF8PcbiphMtRDCBEea7Dp8BNYkTkSFxbsRB1nxSZQJN7XpPQtsGMCd",
  "key27": "5KKQHfLQKzHRriSKzXtbLAeTwiUR7RGGmjxVpfcZ9kNg3Twa887LwKawgzpdhhytAn6StqEstszTHBf84RLqLWMY",
  "key28": "5M894bzXd2jVowHVph1qjKqJXVHA2nwyymwLrSm7GUDNYTaqdgBtZHF47Bbi67sbLxfsfdKRWtXfTcossdF6KmjK",
  "key29": "2iKuiFgzWC8cDPj3GKeFtbNUPPNY96c6SJHen3tTykMVqxH5a9P86gyeN8J6HnRGwAbVGnawNxhRcW8MpVxTysu8",
  "key30": "2bAm8Mc2tZRozBYzKaRH5uyk8oMuPuHLRLvET5eow8E6qduYcDuYis6p78pCT3QApLnD3B6Q1sXzmaYSufrAHQv2",
  "key31": "xdec3gLKeZZFwnWrMLUqHkTPnuapWCsgBQcR3LyoLbbUYGQuACX5YvF8r7bt2PNhL9TZx8tQA3PUDpLa4mh4GdN"
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
