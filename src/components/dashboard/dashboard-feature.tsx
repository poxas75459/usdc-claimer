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
    "3TnaDdBwdUzG1zgc3UPaznaAjAK2osBeDrPFHXnVkF8aSRdHqGANnz5gg18SFmDNV3aroAnRHdyF8yt1VPzTw8SR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nsxkePZRYVcX6azMFyCTpTkYBA7oTc99Y5MACjv2aJgCbo4zHzsMxut8vmVKfRavgu8qbYvuKALnB4eHux2SnES",
  "key1": "46h1Zccet4Pn13T8xSxyKctq6NnUE8pbfjpPX7cux27BivW4dLmgu5xgUFDSn3rTGc7XuqfviZpgeYubi2dE7j2n",
  "key2": "3HfRGjeN4UteXth8pNV8R8E7eQxCHWB6XbUZ8YfayQf5nGvPpUTP3MUp6Zzusfu5fCYL37PC7GLijvjq2PxKbiHF",
  "key3": "3PC8GZ6PkVCAy4cFCUkFwxGP7GemmvotCYbzQg4BPZy38UMkCgGjLuSucozKQzb5CkfBT4eP6LnYCjDWE1WE4dsb",
  "key4": "dB96CaTJrUK6bhwzostsH3WU41wh456XjduuzVWpcdU6biCYmHAo1e1M3zneSwVnxSxbU7W4srYFpvRC6HAX8vQ",
  "key5": "4j98YvaBBNcmiG5fUMiyEvWXccZ8T9R7STXtKQEtV6Ypi4eFxjmcRvaTmBHJMqejLsbTDtxLaUcg6mTd5MKcBhwE",
  "key6": "3grs5LnRYXTqHruXb3mwvvTkSiusKcka9w9LSDZitKDMawjJXMX1cRBnR9S89h9LrrrZgJpqSmZpCNmXYte5iteh",
  "key7": "skTkqe1Kh5htRAphMP71CQSbtLgRydX2usSv3BCDkc8pty3MciU6mTVWycyMhfoBAdQgpjVW9KNsypLWPMmBnRB",
  "key8": "xUGhYEPgt9hf1Sn2gdednDmRbqDEL8XTTYDj3YSLZhUBKVAktKBo3dzR5rLaDodojcWkjs4R784BLhKW24ikxdU",
  "key9": "mbARv1A1anJcxBZu3D2KRSBAD4TSvQzYya4EDe9SiqJwTbBFxfKJybHXyR4ErxV1JjTcsMWJ3pagxSyyCCEeTMX",
  "key10": "6e4sWVBradpWYtjYRL7LYCBs4S2d8ddYtgXj9ThXn5RFaECYbrC3iNvb7xg5pkprJYg3ArNcunG6nf4zrF7o8My",
  "key11": "7fG6ZXTGZEozoNSQZWKb2FDQziBMr6DnUYUfEVeiD1ewHcnxBXT8Ar9KTTG7S6i7pcxvZj2Yjbqf8N4iHKtuZL1",
  "key12": "6299eEn1SFt366Y1DXanWCqKH9GNsz5PmcJ6QaNhGZzELL39TnUcty7ZUxdv5rJPz9jwnQhEdAi6z6XRh3TBsiAY",
  "key13": "2qp2UieZWtLWynUyYj3Npn3RsssT3L5mY4qfwqhS9xAQMvq2pp6KbKSfDLWM3TcscutCdBuNcWgrpTxEiu9xT8LT",
  "key14": "H7a1MVm9STL4uo3QqAWd9TAWXkZ561wwAsjuu6xF2hcCME2BHMN5oExkGBKy5WEcYoP7E9j1SNuc8rgR92pC1Ej",
  "key15": "2yWxcbpSqnjgVffVzUkkCLk6BNf7rM7PU4AwKaUKzKe7arZAkJnNu57AHPqqr7TzT76drVyGNeyrwx3cXKQm9yiz",
  "key16": "5RF2YG9tsvQypaBqmR7gLNghydjPcdBD1cD9aizZ9X4Af6kEzDo5riguhhdJvSF4aLLCwA2as2FBVz57ifMkg6rV",
  "key17": "vwQ31WEJ7wG4cWuMk4U5wKAwnR6Dftaj8Yq8RDpgf6RutGGdk5TGS9eWqzAcZctg2Y4Haft7iaRAqpvhU9eVbr8",
  "key18": "2vWMoHXumZDMFXXMw6UXX2NHnCVF2szx9yoJZaMe84UuR5GsdjZzN2VprqNHquRVHo9Y7F2GDFPnSf5GS5X9Tpo",
  "key19": "5HTMbL9Qkp2iYqA5sd1jMAhKQy5si9rELfdbjHjG3YASN1oxB5P6DtWEJSvBx21jpPgPH9VrowUXzp8cuTz1nWoi",
  "key20": "3szeHEXknm7rfF3JfSTAZrqWSyVc7PjB2ngnFzqowMhufZTJjPBWBXB1akeXzNXyDg5M28urg9ry2Z6yrZzNvN3T",
  "key21": "4MVxF6a86Y3CbsJEiVXbLhH6NL7fqLno93nTmS3CqfRN6XqBjkYo4Rau16kyxTytrbWXtf24Py1Fg8Gdndgu7gja",
  "key22": "5ZNQWCco1bL9Ca1fKiMy7tDbvngTAx9324Dc2kP5W9KyMq3k1LTEzxBiFbxndVKhhQefNu4urfpzfiM3bwj76Ee1",
  "key23": "46byMa2D9mMbuKMTRyA9kEnH4t3bDT1ukHq5p8AcPa3qbTQLXJMMkaEoTsDzUhBDGJcFYwVJL5AsNotLgY2TTvm5",
  "key24": "5mJbxEv4TiKXTBXcjSzKGa4Q1s9xd6t2SgQwcNg6PfVBFrPh2PqWU1ZbTQHRxKmHb3adFjCXikMaaMxQw1wJBWK3",
  "key25": "3WGAMmVhXPsZh9HoWc3HZvHLppREP233gubQ5SzdpYWq1qzAdopPyPUMsM1A3BHr6bytPx7eY3g51Qy3vkiZzrVh"
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
