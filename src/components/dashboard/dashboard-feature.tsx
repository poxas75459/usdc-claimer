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
    "mWsDbMx3wfvv8AKhJqeGsUep15QZ5hCDEkcfNkxJyeuecD21Tu4h9VTQMN1acjEik6aMLMZhUVsiw3RZRhsG2Gr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FnH7Eot9KheBPieGcmLtzvWWVPx2PjSKRzea3eoTfdTEvrisH9Kgxj3aE4YubrnqTnnFnDAJCtQoJdy1K6sJMvg",
  "key1": "3J85P81yBdwn3QvnNzQ9uWpiKcJjfp322qvxWmT1nDrq5ZY1tXxoKBNjZJLkyYpTfezrU5pxQxobH7PGJTyHGaLr",
  "key2": "5meAXaswh6ZtLwWcjsSTr2RMeFSBHyGhBFdFDoEYHwUFuq6ngbw5Bs9jsRNZTZM1qxGB647uk82G3fwHVH2hEQq6",
  "key3": "5nRznSqydpZQbzRGWuC4ocY4qeDfTG9Em9sf56s2x88ejrpydRDefC7c8PmQXseRQ8Fv9N6FKG8i69gVrPuYfWE9",
  "key4": "54ESwsYzA9aJ4doR2y9ctUJukfdvBDzJGMi6a5EK8n6yRTQSrGj8jVTPjJbSR3dMtzCYX7jVKgJPP5oc8ADd7rSn",
  "key5": "4CcgPa2SjfvAb1mNbNdRVxCpkpr7a37gYVrLAVa6vN2mMXufyUQ2PDidnWAK7yFEHsQGdqwnmWxSV1qeGaBJJz2i",
  "key6": "4LrS5T5QijMqEA43XbW3s4Y1AeM5LknHQB728BjSS18UziEmxx6qtZQ8qVUzMvjKkbYnVvynPZou4BKgJVT3GSTg",
  "key7": "63uoHAnYpPgmcovB8rWx7bKQBtnTUPyTG9N5v17Vx6YuxBaw1W7JY8GcpHGLp38S5oBt7oemL67ouX3xCSwMohS6",
  "key8": "5oM6fXKqc1LspowdFdGsvFrraLkLdunDbMNE2MyPhZ2GxRauUMezoLcaVQ63bbFSfPsVsS5xk2L493s4XHzvFYQt",
  "key9": "2UfxCnmiuNbcUoojpAWNJKfHMJMKc2AahtY5AUyMMRJrmNmLEsPiehebctbtM5MsfVWTsTRwHAkf4Ugt7zgLPdTR",
  "key10": "4cshijbJNkSckBAcGKBZEWpnB2n5FSmMemYZ66Qt2jF6r9d8mr2vC1jfogRrSpz3fR5jK3JsFmAaNMa4Vk5u5Xy1",
  "key11": "4P4FhUJ3D3z3JLwgbuoq25sZsu9ajaP8pR3egN6g7db3JEkja8nTDrWngNQZKtSCjyK4SV1nSgpXNZUapypCwqQx",
  "key12": "45LSrgibvBjCgFZVwEZ7nCbKYa43HRy85iSueJuF1BxS4TjvLru2F2zi14Q117dLNfTJmUhw1RapaYh2VWchMKwm",
  "key13": "2Y8CrDsfjqN3j7Uk79UStQcENpbnBMaKR1iVeiZHJuFPsVzHet7NV9zQKKRcRTmoMwJ51Q8ayXicH1qU9kxt5GdT",
  "key14": "Noh7p4WzK1U8eKZsES38NA7BSwWNFPGvZEshjitpRqsgHxp2K2qkCQs1sjDYkYAVHDaN2GViPsPMyq1B7AD85RY",
  "key15": "2LgR5QbmMZDg9PVpE56dLQy32Bsn5g2PQ4kyT13Mw4cgXUNJoN2zYiNZW5RPtocWBnbUQZQXJwyTuKFTDfkbqjKo",
  "key16": "5NY4xJFZJGRRjVk6qRN9U87SMmWrDPu1UHZT2uvPJfPW1n7baP4xZT47rKoNYidBdkhpGmpvXBgJAEJ42hEfMKiq",
  "key17": "5JMbDS4mh3TESTsGu7ujxMm9Qz97nLdAJBbdQFXn8VbnN99ZfiVYAbkc3BWHqaDijt9V6eFSYw8k6wWyLx6HF2a",
  "key18": "56rTYcZTixToZyDxNDBpGbkRR7gECEmAZ311pgwjuAbqdK98mZS2ybArcQ9pMGS2d7aaXWS2ys52u8JVxt2EidF9",
  "key19": "5hfBkScBVqmd926xemshpUFN4Rzksx3e7AgbeTYibZX3Y6LdcRP9KkhSqh8yu94Gys87Go9pLGK2aagmfDW53RSc",
  "key20": "2WR8c7t2QjispUTDv6ybTSvmbCpKxcFnZvsZZkvWPkzBrMvGXpAZSXnRPV7UaNmrvsFcd2wgS7oSiWa5RWaKr3QN",
  "key21": "3e68MbXMubK5u9YdLKHQ4VqE12jdLw7wSkJp1yFkUv7LjSS24xo4uTCw4JcFbMRjLhKft9PzavFv21aMetxqKmxu",
  "key22": "5dgJp22nmvjETmjAD5msDkiHmUwdguy19haqtoy9ryXto9kWSsSNgyk14Za1AB7mtoJmEFJc1LF3SkgJnVuZG39L",
  "key23": "2h6hx2pggsRqpLnDfY4uUgZ9sqTR99j75tv2Ns6o4veExthTRqJ4xmjmL5dEPicNorCdBJrssVn4XfMacZPAXe6p",
  "key24": "4W5mLox1kce8ghoe1qagqPxYpBwaXP9ob53snJCy6sK17GoNYngNBs5veCNMCRxwjG7MYPdHixTTe4T3QYvoNdP9",
  "key25": "4aNKfdKTwQjrTsMj64Kfr4fY8fW72Z39K5MdeWSaoQu5e95GX5fWCYhFyqRZZtAtLWQt9n8wVogcuB1kEqPP725d",
  "key26": "2WTDGX1VDnKpW8wCwcTSAkeX9w5ZSowonN9Gre8uddEgR642pUEsBzxmvpjwzwDkyUMxeiFhoBDuu2A4HgnS9uv1",
  "key27": "5hmZTeqeVsUiRxiLN9LaJGiVCX7rPcgYPURRre9tyZNSQVJNzAeEobErESaFUxaZqC7wKFf1Guyb53aJgavX4PJw",
  "key28": "BHRNudppnW1tfQCA7Mno2hTziiFr6rkjr83cYVHwfBBMiWDDXMqASQVamT4AAyaFjXjYM3qdnK5VdCYSN3kq8sv",
  "key29": "4uA36GXEdydfVPmLuRp1jEixsvp1SpfbnHeUir63Q5TphEhWB9vNJrRt3r2y9eh23Z6xm1jg9fUTj1dZEzfd6bKy",
  "key30": "4fduAPtSvsPYt1SRqvbz3FCTqbNSJvZCsKtifefFstvKxjB6ia6xAzRGR821pCNJqCnmEuwqWa4fpAd9rNuXNZzW",
  "key31": "2JscMQooCxWDzRK7LTXgKzmFE1NCDCtYZGZUmUe3GM4kneF8Rq8Queu59F44WfVg5GiPPiQvy8HXhPWwj3RbFuvH",
  "key32": "2VsTnn41qEmmvr5EC2MHgGLdBysoDmDFme7AsJgC5ogoQ36gDoAZ1uUhaPk9WhDd2evdiJRGBJtmopZYPktB85M2",
  "key33": "4jMnEURzNczaGeJtArnRQCyTb5M5n3M1XU76LuVGvT8p8AaXAZNwWj43UUXcn1w5BTVpyPDf5UhJ94kGC3o9ru6q",
  "key34": "7a8NXPm9xJVtsddZPfMSfrzjwjojwNVmo9M79iA2KC5sbKWi1wrDMFFZqRWA1kjUfGJZTgAn2nHbmyq632syQ7H",
  "key35": "5oAy3vRFqPbgXM6epi75yy2a4QJeqw4TdjuRxuugVVW6zsKcdnpF8gbK4UqguRrW67vqbzT4DUnAs6FirkmjALJp",
  "key36": "3w6mepuu9GpAvJKVFvyZjjgYXT8D9Npg3PDS1BKzg45G2Gx96E4WrrZ7i8TBAXx1xrRM6j8KeRd6RqzKED5y57w9",
  "key37": "4GT7Qy91dEvmPPXnLRY1gAG4zy87mcXh7TAGLn7Xno6meP7NpYfBqJhKCJwPwicAtVv39Uu3nmDjWPhHVzbR3qt3",
  "key38": "4rfUc8jseB7JqX4UAMUW27XunroeBZirviNLZSQHjqhzk5qx3uW7GvaczSgJoLsaZgggnjrTJ9nBihT8jsFiiLUf",
  "key39": "5Ua6GrmMCs94dZmyxxnP6SxTjEqqFEBSrYLE2MVs2xjkQmrwZ6rxCapSBchYVBYgLSb5aVPfKuXfGkiqVUvZCyuf",
  "key40": "47xh871d5ZrBdeFeb5HfWfRDiNSXkwyVbaAi7j6LtCJpChG83kC9fmBZAniyWTQtYbDqXF2poWuxrnxhFQ7uYih",
  "key41": "26jeoAiapAAoNuTTxgW5ceHcjNMfjCpajSPuj1PofgdvjpwAnYft7nLgpDtGDhdLNCgMaDtXJmZWMQ7ZcV5kgQUA",
  "key42": "3kSKK9hBjchqcs3hyi1JtrmBE2ZFk5w8FLqCwWJMUMqn1epLpLAgNcKNfJnqciv32ZW9192Ly87mze4rRE9AJfA3",
  "key43": "4TqrD14je5TRBg3zzA9CJMuXo37AYFfZsGrzoHnU6S9oTeH4TzgdjujrTZvqABBY2yitqNrZuY1LYiQurcDy4QAt",
  "key44": "tEQUS6H6C9iGYv7toVKLDxQj6ott273e3sMJpE1nufwGEf8x1oWNe4stDw4FG5nHeA9EPtg4LHXDyBudZivqz6z"
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
