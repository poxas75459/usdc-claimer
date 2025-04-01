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
    "318yLHeDbwwRQep4UfA2xM5px6xvw7sVW9euP7gZhnJWvD8nqcNFcnxb21R4CUAgEvqg6CJGGCvm69qdRyThfrFF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C6Tspa92bDdhMQkQhcqLCG4coyQaEeRM1uxKr8hTe1BKVuHHmyXV5NravzwhiheWv5uZFyzS3ufquFyb3vWisfw",
  "key1": "595drxnkxGH45x2TyxSLYLfK8GtH3gbguZs9Zz1dn2pKPnTHjKQ8EQjcMZB26u4ayUEtfExmi1EvHjnBNeutJF4",
  "key2": "67JLXboSUCanx1t8HFr3RtLLUDN5ZMnXZTnjxenwFri6Pj6EaFBFe1Yg9X7EeeZLmD55J5ZBieBFQpQK47zyJjyJ",
  "key3": "gzeGvjtjYvWGcjt24m22PJUCx2gkriKn1b8WramJzTKgSK18ccScMNGMzXMiHDTQJATubvv1o2FKwnLtk51okDh",
  "key4": "QsEtkwvdYjsGLh6fkMwoj5eMKKnBEKah229nxuxu6D9xX6C3TUD6CgEDkApR2ep7SqFkUCBYwoUhJevECwkn9wi",
  "key5": "2BJMCRVRr23X8tposaZ5pVLoARt7CDdfrcJo8FeaPiyep6Wzj14s6XJp43dqLG31SiU9yQhacSGmiyX91Xbp8zv6",
  "key6": "4BKF2qBfShahqBykESURXHAzDTu5it4igTm9gZj9epNSjpGsKysKq7YuzSd9ZpZTsdTQQLNFWVgZrWF8o6jRJLuw",
  "key7": "3poZdstSuzey1V8KKdPaWRGSRgwaUhr8jsvRTmZxgpAArkJY37JiyiXQ2GyDT7bKswRNwrmqRiD5eQVs4UDee43Z",
  "key8": "65yEbM9eZCjDhs6SppxNfvpntJEoDuedeY5r5vGMQnQV2szjTncrGQMW9sttsNMtxTRCDggshJct7UkELxBUYfdu",
  "key9": "3bhueAimkAAMenYR1e1fN2bTizNotoLUmeeyhELL47R9N91ejSUSXJrRZARXGLUYQvqYsWdbAyq5WjhWT9LiTduT",
  "key10": "3XTU5BwBzGx7g1DhgifLSTEzHJsGhiey2pNu1aEgpWHXtXYggs5oqSkFt6DFx2Ak25cVUqkUFFTfwWyMTmi2woev",
  "key11": "44a878pLCfT3XiHKsnmiBP875k1GQ7ybXurg246yhdsT7ADvU8Zz3P3132kadi4Tu8Dhq1LyCu9mZxJvKsaftqXw",
  "key12": "2c7cip2kffWBho4VTaUDCkjrN1uw3iEhn1mVm17QckXRC7NGCGiqXWJVeVNhDRTbbdjr9wjYYjbTe7ydoRHn9Mst",
  "key13": "2pwa61UdYiSVEhVyQ2PjJ68oQJY1bhfuAudp6G5AVDTARZoPSdfxUW9v3KwELbbXy5AEXwsbLHthbwY3EuCsNnuz",
  "key14": "3yJwLeYUQzGdh4a8EngpPuw7j15PaCuVXbJSe7B3D1TkwKhqqnNKEuHZ2pa8Fkbe1x4SMW41E5c1arDJ7iVr4kML",
  "key15": "ccd5J9UEyNdUuvhjEbHa9UAD7Qemv3Yf5aQyQMtxff98NPWpBWmX1mHRHcd4qAhGANmY83tfepYYvDfMRVoQ1MZ",
  "key16": "2kFRU1t71P6iXm72dUf3A1vEwpohJKwCZ6gCNLJ1txWHfXnoPkzGLDTNR9EKsnL3zM7i3x4wEvGBY2q5pRMqSxzu",
  "key17": "2CXo4tu83wJud42fJwc4W4YvhSWUrnELxcHr8Uan4LxTPKbGvGnNRzNKwNqo8FSfb4Dz47RVc9KDLphBYUSJ6WQ9",
  "key18": "5V7as4LoqFq8H4km2XqMkbu5CMnb1HZJ49sVQJ6YkL8S9RZYaBDxYQueKqPT7CXuJsaD7CM5N9ScMVWfXWYrTePB",
  "key19": "4C8RVEZ5kxKxV1vJz8ijzJiUs2kwhhfkrqSLhAynqj7asMgaMVvHPHCPeQZnfEgkNVXdZqjzqc8E6C5Z9SVxJpLv",
  "key20": "5MNmmWguT1MPZgts3pL3aouRBFnmH3XdewcjGeUftDkzrxiwyaDr4YRsqyJHtPX61dTB3pSnpXZDgu6eRwgrx6BS",
  "key21": "5o3Q8YAExuWhBEUArnTkA1mVGFcqztUc3GrdNq17gpgHdPsizsDuggdkugyXZMaNtbX5cfcSXV38sTboZRcsKxwW",
  "key22": "5yyQH6pHpFeUDQ7fVg1U9rYUQFwwiHSTW2GQY2bFQaoEKDhDsVhTMhbYT8R1RdPiFVNVBkxM1MBM98b5Ekkmj4EG",
  "key23": "3BvxBcShgg1ZdoQkqDczzh1xiG4f5mtGUW28q46YDEGvoMtAY7MWST7av72BZLBFMnxcXUcaeJ5kC5ZWp83ZiuVd",
  "key24": "2G9fDw96h1JUGA674j8q6EDnxUAx2U2RHiGpgmLRDa7kktUkpxpaeuRqWd7SNXSEQF6SeZSgvXs1yPkfWibWPBZy",
  "key25": "3DEzhMcHkgS2Tc2TWy5NcFE1VhDwiFLQRuxGxVUXhoX2PG7SXzwHbRh6hVwL8wh91vD7rjxJQqSFCCYthAHDtbG7",
  "key26": "FCg6mKm77qUX445oZGK3qwXgdtJR8eqJcPKeisKjnKW9tNZBVDxrQufoAEYY8raNMzPzgJ6aKwoDCa2RY5kDo7o",
  "key27": "egQh4cwy7rP8ymguTZCAdCxy7HDNit3Nsxyo2h2e7dKBvYho2dQsm3c4nT8u4gELiDKrgapokBJ3JcbGBd4vkEA",
  "key28": "ToLJ58FoA3PEN3Y4hJDA9DxdLyFjV1dnEDtxsWDj6wEZ61bZXhmrXc1cETbgC7ujc91Wdjq2eCrEX9ZD8sRBUNL",
  "key29": "33avr2Fz2ZQP8p9KEdAAgiB8MwuBXXCyMvZSt4rfPseYrkw64FZALBbzbUG9Vq8B53yNkzU8ctqygbqkHzhMdPs1",
  "key30": "cfidgVJrQve6TgVcNjcsL3YWWvtU66sWjpms25Mr5dBaEyReTXXrCyN5FvsLDNtvcpg82tkvhDfxb6ou9asX773",
  "key31": "HGAnD6WQrCqmcEVMA5cgnFoxz7vNpirUaipfYn9Roo7EwgUutuHhpzdkjErzCSZzXrvCRx7Pji7eSA1jnqquTMz"
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
