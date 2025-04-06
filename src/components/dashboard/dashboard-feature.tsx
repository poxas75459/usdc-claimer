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
    "4mJ3252YX4oiysSpB3YqoB3NYtUKJTxWqXWZQXUmAX58UYuzWJcHUwaB24uCDKHc5Hf1mPPYjuD9wqA3KWYwo1te"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c7vBy2cXwPNXERAFxzCJd9xBMUa8xNNry9bwPRkEqd1SNgeQ1BqFGKVJZVXQNgH424ZreuoFjxiYqLopLqC1WAK",
  "key1": "5gMywycJey1om2FeC3eaZzaxbCD79AMfbmSbBzcUrmfv1zWKWCfTS8AYYyq6bHLevXQaPKa67W8CqE3cyniBa4C6",
  "key2": "3AZ3VwKJbg1jdm6zgAuiqKbrgtm56FbpvS7whhNUcdT6kmcNRRmuHCasz3MpxgzPYyYbu4SSkaPMDNYnT1PotWhN",
  "key3": "5bgEvkJ7QBqV6P2p2ggnHY7XVZqqVfdUjQ9AYxZaEf8iJ8qxEpwtUo8rceAhJrf5jFHb5TNLnc4x96QUvrnNw92S",
  "key4": "4ervnqekf9Gyka4j2Cb6zSe946wmGwXwbtH48aWxpAkza9txjLDUorLugLLwJZR9uddUxSTer7iVDXQSQW8A5FHh",
  "key5": "59sxBC3RcoLsgZUP46UJiqoWLMMs9iVDRvG7AmUhyGWqvmnmGF1VUCPVTJmswUffXsfqAdSj2Gf6cu87QSBetMhP",
  "key6": "3vmP88FUgJkSzEJRZJkW22DyxT6AjHhjDDjhZCHQkiTSDBP3YaBwAavPgeS66wFygVgwKySthrJwxE6MobteAQSL",
  "key7": "2VDFEMRyF2SVpHgwiYKZS1bbP18CETD8bbimqBE67j82oTrRZ4ywXwwcUx9SfDtt1cwZLzo52Z8thTA5hJdNk7Nr",
  "key8": "4FqBLLrdVmF9zTxkTvNwquMbbRQxf7v7Yk2hcUg6QM6huREA5Qreh4D1hca5UWGdNmQYEvhdVsiJJGsQBF7ufYeT",
  "key9": "5rKfAnhvDRLGNqc6c5gDkWQbYux6qfTfPsJE65CDAse34grXEqvvRfpkya8M3UHucczanXC9hAEbDbWgz673TTqo",
  "key10": "4Em65M8wQ96hvLW84anMM8CMseDohw26knxiJ3gpYr4nzfdiEWoQyjrwPbmSu35vCWKSyi1MF9d5KVutKtGDvP1k",
  "key11": "55d7emzUQxBMqmdPK8Wym3rkQA7gCXcSzPewekc7yyXnGAjty4pLLMfTjgQ3YWd7sZ4HyMH7QNPQckQ3DgmDs4o5",
  "key12": "4PucpZVXjZyPLCcUcPeX7fwcdmzPYfPDfdeTSNo2qbhVJm7qoBDscwxkVutUanmXX9bU4KnsfbxqH5mat9iEDHar",
  "key13": "qcBg42zYVsWUws6EKGWZBpWC9MGNuyssyTFUK2rAjwTehtV9xj5pDW9BepvSjmyrYYkb2RiyYhJCUq5hohAqXiK",
  "key14": "5ZCCttv7tdKWYfSB3P8fDnUnkiVFZ6kAXpDy2nrhiaoFu38DpnNi9wZdvA8YQ5q7PPBYkR7JwdWXpH9NkC28HtR4",
  "key15": "5CQHfVyDgabWxuG1yfWJvL8Jh8zD6SqRVY7rdZs1dikqSJR5nQYZqYD6BjDBQP3fPJ6mxVpuXg5zHrXJAq9qbVji",
  "key16": "5mJpRTvPXWXkU2R9PmBRTHPgotPjatFBvrZvdKi9kEHqpugqV6as4fYJi4eBa8h5KUN2LqfWzG3fYdKmnQZQvJfH",
  "key17": "2wZWJtXxVHpxaR4W4Bd5yLFjpakRnw1GB8hek9tTQ7QdGs8cVYEL6r2v4QEpMMq9P5QgvnzEraSD79QPW9Uh9uem",
  "key18": "4xQHeD9XN24Vo2J8u268R4DUvipWGm5uZkWK3SzYnUfsvwZfh6q8xDDGb9h7kJkEDp37bRtJPkoUb8Hu1DunxviQ",
  "key19": "4Anj6pLNuAYTi24VWwdUg8GGx4ivA9oP8h9P9bFDSUPpXGPFDaCKYgmK4dU4bMe97k8iL1rNKgVNoFv9HsyHBSXM",
  "key20": "8TkpVwWEY7gVoXVDnJyXj3tsTxCMbZ3twspUAvu8GV95URkgttVup4GSZZzME9nBaG4da2Qm44AMSCWSPF4LgGA",
  "key21": "4iRwMzzUSGUjvejJgzzMBFVpAaP5MqLBvwYxxHUpXfFuNTdDZuGxVKnG3hHkPzVfNEvtVi1ry4ChBzWsms5ra6EF",
  "key22": "26MhpKcVoWaM8P5kMgjZauUwgTZLWnp2isTxLy5cmqR1U9JYhyd7d9ygjsZ4ACqUSLwuzo6K2oPNf9po6oym3VCW",
  "key23": "rCNyf8QUF1pt3SGCsmyKQdKBfXLbfq5yEX3S6qd3JEF6bVZA95NERwFbNHxgT3bQr2VHPq5bhf5tkTzRvTMXnjm",
  "key24": "UCSc6C7zsHxLewtf1aStPA5iTf91BHpFvWNhD8Yh5v4bDHMEi5iTuxV78LyPiREZ1uVnkPDJs8gSGDXYJSpGLxi",
  "key25": "4sbYHWxRAwHV6AjwEM7oi89bKX2AGZWYBYjzuSouvFFQqgxExZXGHT3KLzCqQ86mQTsBGZvSzVzJjq9q5NEyucYw",
  "key26": "4ByNsnG27pppAZP8BDhAKdSJRb7nBta5C399GzgR4sThvBxf7GYY13m9xRzrFxJv9zGuBF5kUN6BoZhhpCv2cGeV",
  "key27": "xUpzTqYLScipPXKtv1r1qzM5Ns1vXjUsKpUGAMmnJG6fmpFtz2EZjBuiFzvtmM6xEHTthpm51bSPpJXFCFfNdct",
  "key28": "3az6faeRMT9fLHwyFpH2SfQXbvEM8Q8gXeUSDm6ifyicoq6ifmfb96NVXZnBdMg9neH2BpwK8jt8BS3ocN2BWHBE"
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
