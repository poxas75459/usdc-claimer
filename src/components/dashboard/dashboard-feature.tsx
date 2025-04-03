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
    "67eLWR5MuwTB1W34AK5kXTkf7bL6jV6MvaLh5rERzMtNeMdhDxontJUANTzT9YtJjFk6HJQf31BkY8iNQifVbTFL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UhmpEFs23HLyT5814bxk1hPX9b9CqhEK94sxXvQaJ5ivafddcBPuy6AeBE5hoLsXrhd7eVPXe1imW7HR4GNYff3",
  "key1": "5UEFNJmfi3qavhH7Jn1q4ndArF3AZ8RQJ6AAy9pn4SVMksWmjN1KpU32ZtBopb4pXj4QYrm4cjDMc8AsNEh7PiLg",
  "key2": "cFN8Eb1oHZVwnyghxgVpjSenNEJJZRvVeCaJPXSwTcqrzwywyksgUVz6MMFTWC2Go6uXXRNJVRc8jt9PTn3HQhY",
  "key3": "4ThUULoKDhgFCtcLXiwkvsH1BgSnHm6T7v2traRiHukGoVYwgYVB2ZAu5jD1qHSWKs8LfAHf5cG2PeuArFLXt4Le",
  "key4": "3www9LggXrqwp11omnWpccZPUXJMcHMVeqP1AnSavjGCWQNFVoAXvgPDNes6E3xBwGi1F6DKGdNGqe44SYffzC6u",
  "key5": "zdBCuhinxNzhpbM4PskucQAVHVLKoS6ydi9ZtuTnEpuHvFopCC5mdvVKJAc7edgdJ3Xzq9ECYWfQSJPnkugfmxm",
  "key6": "2JsPB7DUJEYMQaYZcFgBNavnP6etvS9g8kAYrizwNXzXhpuvXhbMEyWfTQrh6YqjW9N88CKMXsW1EjU1V3FSjT9b",
  "key7": "2KJom1UoqbxedPTBZKVc8PRhDpdr1syyhCnthJBHtVHhNghNqNkaYicQjrtQ5QFXHJt3oKjSr3uNjJHC114h2FnD",
  "key8": "4obF4FH4ch4VoaTmoqWdEm8xFyibKSBSb4EJkweDcyycbeR6mCbM5Ea3Gu8SAeQE31Xuz9mZi6Mc8X8iG4DavVDs",
  "key9": "5QTSewSCGZz5kxFWyMPBy4jGMTppa3h9ASDCxAHCPnHYbdpA4Gd17ZYG4WbmiFVTzWUXAQrWZqgW5EAj2Rhusj5v",
  "key10": "5gkiYhde8TqxprKZLChWote5UqTFRwZV51r1fuRrkrfJRqncbkchYCqUPo1g2Xsaqk3Bah4NHpfX8RpCxbGwz2Qb",
  "key11": "2iqVVJAgFPEALDWnjWKJxJhsaRAxc5paZdBSGUQXtVcNiQ3Nqr7kLSy4mhCyRCLNguXCFpYjAoNk2gSFtpHS1pPh",
  "key12": "2cDUwwcwZh2fKkgQrkci8q3QDZt2CZZcQmEw3L51C6YWgUbiJR89NVYSFesQXznYy5KJzdhcb3Lfb5ntJ4gWpymf",
  "key13": "21Awwygsk7BA4SY96fCbegoE758pziwa4f199rifRFVNo84tN95K9y5WkYctLJQu3MhKRmvk8FpSgrpGqpV7tE4e",
  "key14": "3KhToTvmVYbxDt2wBy1ov5FxPTRG7SGXwvDwgw4Y2BHFFZmLWRmKRDXh8eG9zrMXRT8UforEa6G58a4h9KEE3HC4",
  "key15": "3HbFb3xZDSXqVZfgYntDACroQU8EnScnr5qyfmXubQ5E6nMRQ9DjGLfU1wkrJSea3rZ3XG6SCgRmNTkXaCFUaqWb",
  "key16": "2aN9f43kQ8MQxA4drGfoGfkua1ddYkZyhqJ9Ej4ceTNp3F1KvbQXQxx8eVLt17YKZ3bnYMxXHwQ4sMQVJmpuoJvf",
  "key17": "3dFKPo99VpYyjNGaLLHTJbtMmPYCCfWRoxUMwUSSY1cJVgZt8BeLEnTBkmB6BA7PgZEhzjLdoNV3y5D1AQgkXit2",
  "key18": "58rXFv2cChWM8qJnPoDNPaqvGhJUL2tyczXbL3S2XLxBuUq8rzzZc3VsLMrVG6EJp7VY6atNFfqV6iE3oxLNGnkg",
  "key19": "3wgToUxbcKkXU2iVvReDHMNxLKUyyjzuF9chq7uNaenNEXooJX1rV1y8Az3EuXQiUxtUub7yo2pVd8336xydK3vA",
  "key20": "54qsbArwk4hGihp3V7aanAsSM8dJdTb1Z1qtjoGokNrfAF6aegyLr7nVz6UWTMJHyzAGatAYLeLM6JjssCGJrdAE",
  "key21": "2VcpHCmTsspT6vLbcxhGkeRZiWTmPrg2sj7GaFPafpGLK5CUDhbGE5nsBk1TCWdnaKmMwwGCb4J5dgo8rN8qAxM2",
  "key22": "4Qarh7J43ZDQ6a6vMDumQCXdpripEYfnxGSrsJfd1cJHKgu5F1V2ypHbHApULj57qsYhABd8aZa9SgJXR9Z7wpnN",
  "key23": "4CUBAEvbdYU9YRU8jJubLCm9XjQjk4ck5NWLzgGKHL5cVrsaBTqcngSEDAK1jgTfEyKAsR4KUcFzLuyHpWdtUECq",
  "key24": "328mCJqRpihQerjHPkhqyYiSpshVmXHn5pNBsf8QBVoFSjXwfgxnzbyiPnhhVBwdnofzTmyQ43VdBa6zSTN3EsA5",
  "key25": "qWWPHSZiNNyPsY9x6Y2gX7GoP8FEtfBsnDUwxqarRVG45tdJb8pS8gsfqp64r2c86YJK3p7dWPsQA3DYUPo8QEp",
  "key26": "3z3mqpkNaMNP3A3eirEr8kkceJfBmVGFriw9JLM21NFAjYKjWd9iLa3nGuiFieqx1Po7vw7fHKKvypiuXejFiGrT"
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
