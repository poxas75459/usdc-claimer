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
    "eoCWknTKJYkBe8XRkYyjLuVe8shua97hLAUfHftdNNxSTBpWhgn9cqkcLZv5vRCGMVgRjSLGjUVhBQhJxZhb4bs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BFMekh71ijDgEpkPzyLyvcUcoA8VAHmyUMRDjunB4eyjEaKfig5iQn5tyjGWXPruCnry5BTJeBP7eHCbToCKcKs",
  "key1": "3tcyQu2JKhG47G9S6eZ7u3YKV4Tb9iMqUS8WuzDzZ5kXzZm4SvtR87Bw9uEFSuHjV7Cyj31yV6HuHjFEagi3Q97N",
  "key2": "pZn1T8kydZsXSoQq3GLEXGLGHPJBPzwaz4zM2cfFvCCxFZBnJUCt4jjoszWaTd8NPQ4AdznAKwdRonRQyRdscXi",
  "key3": "2Le7uwmzMyNX2phZh3cWvrz5o6nP9ATDubxAURSkrAAE1qnQ7K7uRNs5vt6zh9HQmZgpVsMrBGpocfY4KEhpVwhT",
  "key4": "2qnneNQYzHFMFWLXzY1ci8Vk9LiLA9n1NUHQx5V1iCZkg2QUi9gnsvJVbPsm8u2u9xNEAUvHLFx6hwKzVewDXXHS",
  "key5": "2vGMekMKoKeLjnrVbNe71YgsmNU7oDrsyro7oSLjp3VUQZd3DPkgHLwRr6gYXU5fZKM4eAwBBPfGj1s4uAtDJHBT",
  "key6": "4i6XDs96Mexv1dAzypDvzrDG7qyhfwwHHNgwVqXRwCdhY3ZSrTAToTHA2vBHfF4dicpykbqUpwjNB7RWF7HkoHzK",
  "key7": "3fjRbqhpVwc8gbNwfmTa89F63VrdpR5DEEGR4wGMnHXWGXKC6rSvAkygisxRtgDZbp1AUgzSQXjxx5xnxQp5RWXE",
  "key8": "2SNcDjB6FH3YoQEANsw6afM1uMoA4CzvueBru5YgG3SP61pCae4mXqUi7RPMF1cGL3NvwiYX7MsuuxfVZZr5qh2w",
  "key9": "5oik3CBQnH1TMcoNbCoPPiKge2XdiFUUu4z84DnTb91w5v383KAf42L6cbckoCDRN6VEVVm91A2Toh6jhR7SgY7s",
  "key10": "4rrufaf36ZMRcd8wAZbg147Njswy3DdegWS7gFkVESDT33aU4DLRCf3WNyLUstPXbQpHFxLr97BWyzwTz79GLr6V",
  "key11": "4SV9V81x5BYGD9wA9A7XBQA4DGbrmmXcxXQXdfmGRVXZ85FgDxYtwqnvRpm5VSafaPWZ3WVedPeGFQExd37X3g5N",
  "key12": "4pXsyAd8W1MFqVHKyQ4AWNjkzEfHV8FszQe1uZBc2t2NfFySDvc3uxNXYxbtduqHd3MkmpbbDEg3eENE4uPUpE7v",
  "key13": "4KnPhaNSX28hegwZx8NryKBd8ndgJaNoo5w4LQKXocUVtByhrNAnuEa4ADuxaoK8QbifUuXwtoiYWP7eNwcgGtNn",
  "key14": "N3MmjMpmGsQE85PbQMmNBY1bmjzUBzXq7MruCUn1gyj62hUt9dYaubibFxkuQh472rXzyRoq99W1DU7Vp6hzmF7",
  "key15": "42RPb8bWrPaYYSBXbA73toA7De57EL6Mfx9Ufdz53pmcYyPidQHwLPDwrDHrzKyarvgZjCvMAXphCPEQSkGVC8gA",
  "key16": "4HTtbQKqf4K8C3fSNRbeR3QMAzrsS6sPjad4heFjFeL27cXexx8UBRqW2gGJHdXorncJ6ZPQstvynrisExrgjWrp",
  "key17": "2yhMYYMtAFvK7NwFfdn4pmBke6ZSydNdw52S37Zqna2tqCDeTMjnv7nqqGU4bC2VyPBDDq6zQNgWbGJcRCxqyLsz",
  "key18": "2HfWhdYK4uGB1k9Y9s9MgYVs7qFjaGXtSVno4FAJap6i5CLNy5o9Suapz6wS3SEL1qK6kKL7Rouan9LaFWM5FyTq",
  "key19": "3a5odA23LcQkkrQk4r71LRivD3RYGeqa5zez8HKUFCRQwUrytibPAfJRmodz9VREPKnidftuxd8uEC3f1dAfjCyX",
  "key20": "2uVFAsKTraWqX4RRY2w9jy6KVbnwxJjqVtdZywXLBu8JkPEihpubvydKopSzJB4YXg8qR5zgT4yPA8NTnzByYLxC",
  "key21": "3S6vMTk38mcBia2PA3b7w8A8nDEYq8RxnUwrAsW4SL3r5nfUXHufSe4B968xKsYSDA4qfg1ZGLF3nPjcTFVgxmyB",
  "key22": "5YWBgFViC91ESKaALAccmik6sksi7aUeFrPJkrWdqQUmK8ELEpP5mene4sgugug6BcT9GQz4FJ5CJJrhGPgnmomQ",
  "key23": "2aTFexQH7DxX2yc2fj4qT7NworKL9mDvvmK9qXgd1XboUP47w8NfK4pZneBjsfqwWpfN3q2uKFo7bxjoeU6mgSJB",
  "key24": "ca7ri6X24NN33Qy4enGpg4fFadpUct3AT9KVM9AkC1aY26u1zZCDhcFQP25XF9WemYDW9JiMcoJYWR5Khx3CFY8",
  "key25": "kasoTQ3BLSrnnZi97f3yBdB9n3y5iZp4JRuWZrSbDvWe2Q6trkTYUzC9cjuxPTDsmJZghnFAeWpWEoonC7GoBq1",
  "key26": "3YbVf27th46urDMdyLGYqiTLJiEwUHvPfAhLw9sTMgageLFrYoea3NYx95cdbqvaGJSEqQnQYuJhp7to9c7RcexV",
  "key27": "3A7EFfPeSXLhn4pdrnBzBKCEkP9a6eE9nxh6DXrViZekQHkQ31THWTrvLk5N4znC9CitVTvr8F1CRGNmexLyiTgQ",
  "key28": "3sheQMBmoimnrkptCdUgyBgbk6g8VsDqRrqMuW9v4pbv7gboV9wzjuzgz1KnLBMneuqx9PSva3pZTjUaRDB1GSBc",
  "key29": "3YJnk9w7HsQEPd6yABFRVChCG7voWATJeXqae7jdkgr3cwo7gsSZY3aAJECFUZGjeLQs7N8aZ2YSdbvJ8MJ2bFA",
  "key30": "5wk7UB1GKvL7VXZ1qDiW43zYJ9zTKf9bSbkVQJ6nbquAeysgcfoqdnMwPSQSjSeUueAFoPPDaZXKeN6Q6rB4FZr5",
  "key31": "2fb76UMgMR6uMVuLJWzXG2iRqr1fbNGEdtrJTSGMbKjGYAmSj173dfdP99RnjRjVhGEGBHQcNKYdeqcDfoNAU2nV",
  "key32": "4n68GM1rKMyNGpXSrNicavegkXzqF9ofQCs9STRCawGYRZeK5xB1SN1MwcfoEXTjc4xEiH6Dqc7vWM4mcjTpSqsK",
  "key33": "4APMXwRAJUhdxN1Vjr5Z2juCGjJUCmWtuP2Cr8v6sQxceZ7Sx4wNAsEjrfnUTN2BSoWPA2qXLfD1Z95nXUdFfYvY",
  "key34": "3A7sZmUPALQveRCQ2s2niVLfFSV7xfoD4AdPUrb798PWME65QfWjbS4PnvrRe8HuDkj5TqXTw6SPRcPNVAEKscnj",
  "key35": "61ScjrPm83EFnus95GuEajt6reYUfmh19KoJ3F6WNBWWxoo7ZELNrKvHFdwjTygW1imihSYq4uF56Az2vBrrfQcg",
  "key36": "5X7EjDYjrdzHeQ8CAMncjDUh41uR4KBihbWkfhuWDGBPzQcfUmfNdjEVhjePQDtyXDN5kXTiSWbDKr1dawSMnnz8",
  "key37": "5jfugKi4mv9RZN8JtRLcJoUuuuNapBYsxqdaZpactBUtijK7XGsVEYAuZdHmJAtYThC4QxMnYkcXbMPMsYFngKP",
  "key38": "33yHucjPoBwzyiLQ5ByFJz3F1vkgSuRZtmgPXa1rZv4sLQVDYMY3oVYDWZsWPpL2sQPGd9FY5JKjRyooW47cq3S4",
  "key39": "5GbbZPAP41JVVEQ4E7rQniecBJEVbGbERTMprJnQV4z3aQcTM2654nXEMku6fpdmub4tqPhfxiLkVCdKjXr1VCbB",
  "key40": "3qnHRedwmiabKe6E8x2EuJas3WhZuyA9WQGkJZDgoAyDGYRX2vMz3MYP8W8QuTVW24mgELapLVirRrR3hdEgW2zz",
  "key41": "4cqZ3PP8w8uqdhm7VougQSYC7KCYGQjjMSFFMikBvF489VZ9ngZhfSbaWy8zgWs86BrqLJ2Fcfuzw2oBovCb5de7",
  "key42": "5nCh1YaxhMfrAZru6MYwZgWhnkUezR8E3PmcSL9EamKBAdcjrukGK8Y2DiHhBvfheKBJ15PmCHPTmxJc5azQM1ag"
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
