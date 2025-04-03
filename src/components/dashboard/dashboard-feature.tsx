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
    "4yWrzAEm8mKXhMbGqQobEpcW2nxpCRDXpwbWfSJLSre5fs2AotJngCfrgjVtKLJHyfPs46346Lm8neefUsXcC4Wd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yFsdSvCSmZZkzHki6RBbRg9koMfwGc2ZzK7SiYDPUdhRvNGHmLU5orTfLoN2JToCvgrMAYLNhVtwKATwZqpgVAs",
  "key1": "155TVk31pMmMduTe85g5CFott82ig5M7PAHLsKJT7wMtyQmwRGKeVV7zKKQyMSSgdQrViM525P7TuFrsLw3HkTJ",
  "key2": "4q3EnfCviC5LDboNpGWxSXPWQZfAPczpd2SwpamBSZFWRdsJ54hBqiAhvQXKyCc2e1bhLkbM5VtDSzmyHb5axp8h",
  "key3": "4b8iE5EfCzSf71pyxQH6WUPxhWhuVZcFSi5FtYpeRSRi5C4jeXyiG64pWsx7W3ihWqz2zb7pkMnjGz1F35HqmdWp",
  "key4": "kicPL288GSRH3PAJTCBWEnZpj3gwxMF7ZGhaCGkcTdMG5MkyHLA8qvKN9NZqXaP4UQfeBgwXffhkQWuhai8t7GD",
  "key5": "2VNjFSui88QHQ28oAm4KWUe6AqF3P6Jv2cf1rrXNcHNkSc57HxE1rNj1EjZtr5nVurfFygr6R355GozAujCQkP5d",
  "key6": "eEsWkP3bnHj4TawRtrodiTU3MdLRANSeKMkWvu9fHVRvUS1moCgvv7NfXdGHKUpjjP37vcvB2aUawLj5gjp2CE3",
  "key7": "3q7P6EiqzPzwvgiUCy2YtyY3QB8ZkyjUnUxKMd3nE78Q3AJBjBZrw9u3YdVCqvy3z5kFYFUAkjn7NzMC9W7U5vYw",
  "key8": "51RFXHm6y8nuAQ5nyykS3d3poptWYsLgyGWg7z5sj5R9nsGjRFQuXcSwjw61wXsgUCjgRuKG9mHr3v1mV54gDsky",
  "key9": "3nBUyzyYmgXrGA7GRwazsPXNMLtQDkUmq7ECHqbbWYEkdZPRPPHLBdLJ8o77RLkPoUQtW3dSHdQbgqJbgpfAQsmB",
  "key10": "2UvR7mh9Dh6rReKQ6ajYWzEznixqiagWF7Dwt5heb67epnmtqmX6pWCgr2ySHcE4ym4CbnDaBeKuYDxELKaeCszn",
  "key11": "HHKyT9j5CP5ZWgpH7J3197uNHvLHtQnj64XeHTzXBNgXXRYuPavq5U3Em5kV2CTST5pxVkHkT6iKVTcbtM9inYR",
  "key12": "2bxLuusRaBCeDMckvwF4UNgvq1zEcNaCiEhDV9sYZg5VfL1GEzXn5C4LkRXhjBtAc4Pr5RbSHfYWzMrE12pqXnfc",
  "key13": "3xaQvwGn1kmgM2ThtaQPCDs1iW8SXoeLktDqAfuwkCWV5yw3vPqArk2mTd9p4hkxtycnYKY4xzyZptVtostit39Z",
  "key14": "BU1c8fCDnqD2B8cGxYJ7xrByHQms35a26NDN74wbUsttRQkoJi7mCGBW3iFqsjkP4nWBgkqa37e9VybuLBB7RGo",
  "key15": "3RLeGuH1U5a3ByfRzxdpsCc44ow1vZ1eKiBcZnNXnNhF6HY4TT5BP2ZwzvzjB2ctM39REhhWPpJ49TXFsBw2D27e",
  "key16": "WUVuGEGMrDF59KUwnrzmP5KfqvUDFYJWjXpdS7fazfTV1XswTMNz3uzxhKwzasTjq3PoRwcTWnibzirs4oQLxVj",
  "key17": "2iASwDaACYyMLUjotRAJVeXNAkjgAmYLyoMaCSfAdj3dPxBnbtxvnJrwazqj9U4aC9y7t4co3WRRzwZ2A89YFJUQ",
  "key18": "3oW4UbL96FBecKHVrGkRv8nLuNsWo4wN35dcFEZEsCGrLtxRwFixFS2Z4MGwJxfbtPHt2eFfRFhwiSNyMphELqEM",
  "key19": "5vN5sNJf1zZ9XQRLbxDVNULREnF4cKQHXi6ZfBdn97tymZb6XyA1vwam2MdhdZPq7gG18NcU3vc3wiDFE9JDgsjd",
  "key20": "5PtvTEhS6cjTSUx2PcJgy91inCnPcXRKXHk6WT5DkVLhKu54WH3CxuGr1JgrcEoymnj5xD1gGEydrKzVaAiAdDZd",
  "key21": "5fhyTmGKixg4EA5MH83JcqV2ukZBpHk5CkNtnScnTjhy7GmkmCxFucaoJJYTrd4YRwKQ8XPkRbRimK3DQuszzjs7",
  "key22": "cSA4JDA9Xy2CxpPw9nuqWvV9ivxX7QVa7H8eZCoRp56r62J5sRNA6J5WpW3pnJKNsTBAwwube5ToQZqEUm3hwi3",
  "key23": "31dM151562PCRc1VJ5Ro5j2iKtaaanWPBVizkVAAMVvRhywbsan35GTCdouK18DEGfMY7sYJSg4aFdWtXKtUJdwY",
  "key24": "JJ2Cq6UahVWVRTYtbzNigDz8o7DuWw5ociapTZjNuWJ4vxBRV3fyuPEpKNaxiZG8YAmsVuQNMtdRLEp9DsYAu55",
  "key25": "461puFhAnT9WArjR3x5PtdKLexpS8RmgkwT6HAQHdRXftsLD4qL2RGvC84bzWaXPoFaf3erifWH37ybXLRFyJYuJ",
  "key26": "5yEyWhUhjCscKdqphp1tDni2gja31zFeTEwECa3bBkBMYe6m91EQTMVYipcKgYQ7bzSEkB9nsQjCitGZErgesQmu",
  "key27": "33Q9ufHkKrP28pAqnh8CFfFLUGyPQDnnuzfzhdbJUrqH39MDM1wYZ58nVbPRetjXqDqvUS9X6kx7NqgsFFzpJFW4",
  "key28": "FGdvYSQw2NhHWqUgQS3Rpd8mBFBWvPU4yDoEk5CbmDvk7WcDM3LjYvPBKdFjTHkCVvrjbtiMnf9W7d4Y8zU3keG",
  "key29": "5FQnDTByQNLAoj3BV5RF4dSumypToF4Emq8vmmfr4Q6BUbnLYZJgXaH157CuyrAMcPZRbhcnrYaiP95X7Qh5rCCD"
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
