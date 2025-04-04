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
    "nrEDMPXNdDCSax6guwJtU6CBWbPyqweTNgLpQNwEWZMJJaVaqmVF4BFZZkpdN38eHuvYiZAWjtq9KBypfekZi13"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34ngWk3jYcjxDsTz3wSSgyiQXk8XdQ7Nw9rzmNd5ic3o5agcqycaRvTZsj67Yr2JhZp1ncYyrSbayRuJ7r8VXQmp",
  "key1": "27vsCWGNscdTxcG3S3xESfCv2WqFFCyjMfgegQxwDSB92SHvK1QrUhx5jfM5s4TmkYNQHC1CqWhQ7GM5zTFupcma",
  "key2": "5tK2p4ZypXZ4qbMbe6Xvb1VRXtNLeVgJj4GEnoXd73z6mu1HiNC6gRvfHasd5xaVL1i5eZNxbh4Sd6rMVJuA4Lie",
  "key3": "5iAH7DSpeY8RUzv4LS8TPCEqqpSCEd3B2RowAENcHguNYZKGthC8xwEZpr6rsmxK4F9YMpydGM5FQ4xrj2AEXSKj",
  "key4": "5WiJ1efqMpAQ7U2GNaYrqoDoFhtx5FaG4FncmY8fACsVHc7G6xPK78D3QhT9eDurxVtR4Boj9iawAjpv5xVSKHpg",
  "key5": "5KfXyJyQw4dYNeztxKTHbszztEtmZfXLqMJ6N1Lmo1dAqiKLhMY7QKZuE2o6VcJNtHRUVJHxw8K5iQR5bkhZNpE3",
  "key6": "2Zr4N44WQLZYTCnwbHk9nuDZue9snBkt3u8aH8EaoKiJ85uZKyKXnqzpcVZLkLZpKNDN3AhzqL1pqz2HK8Wfb4rX",
  "key7": "2Zg3NuLApTf7LJTG2WbwZPeWjr5L3xsLVWCHKpjAbPPvfH8JvPq3RqUNRjgXic8HvmRthDUa2KSycEhQcBhMNHxZ",
  "key8": "2aobTVYPqjgEw3ycHZDdCCV4EF9i5XcoKedHQ3d6DB6mdpa3Jhy7SEg2ADVFarFo8SKTuYsSWEBUk4i1KNsRD89S",
  "key9": "4LJxVKWisygiSCrf168D5JJAaJGGsQZZheqEHdgTFeKJnFAmxNHEXJvaERPSe6W3A2CzVqX7M8qWd27PqZU7jVt4",
  "key10": "LkW7dtFULgSbpXZJTUg2HHYm1zuBABNGcpbA7Xz4fUmyTqmuiuhR27FKPDfAGkvjFPKoFcXu4D6gn2xudJ2q4DH",
  "key11": "329GHfyXZK8K7NHs7P8d3yS38rQVsGTsPernJm6Ywg7WRFviRSwBPe8xZ6KqnBs32EJwFUzacvBb88AHiqJhsGDG",
  "key12": "4SbkwtaYaabu5nQ36HpoPZo9qghnw432zi8BByQAwrsjMJ6y58nUyzoBQv2tF1ByiN7gRiWX634oagTP9z99A8Ky",
  "key13": "5fzjHmN3yvU2yr11jsyyfYFVUyLQBVKPo3Lvwhpogj9YTqZek3547fPxsyvRdV6P4gFyJ4ESUkjCTe6NbrHmdyUY",
  "key14": "4EXjo4xaHiNqAerJsZEgJxpAM3sKGT4VmQXbM2HYzGh2cq9HWYy7TCMaKfAJzxJPXQamZyGCuRjps2kioZbbsLQ4",
  "key15": "S3HQDVDjyQASRGkKx2xg6jVL3yaJhqhPLQtz1wwdj9qRPdp5JomAzaVSAXXPVqjASJmbMYs8XEoYiHV4SdaRdqz",
  "key16": "2wY9N1TasUaf2XsJpedNKtCwTBKVrK872cj7Zxf7eou2NKXgptk9tiUQSVaDgQB7uuNez1HKbJ4rpZuSVhYnbZmE",
  "key17": "475sydXPgmSRXnbTd9ti2YrQmMNW5WDYX6vfnaaNWhtzSrdmvMUbxQVKPAcFtsn5D9wNS8j6ZDw1apPfqQTKiUpY",
  "key18": "4ZMDD8VrHVv6rTeyZ2BPBFGJyiHcpx1LFjHHHkVxcw1DZwSbPXpmouhazLdFMyZWxv1GTCzJhbtwo5wM6swsw1ss",
  "key19": "5RmXfWHZ8ZNPx9iXnWzutz23WV3PmxaTcaMXLRfmcfooxtEwf6GJwcJ3Wjn7oU6JEVv6YL8KD2uzqshYMh3f3akn",
  "key20": "n3vgqgEDZi4gCiqaz6eeYVVStgDc78XR8QpQREZ6K12eSRU4CfWJLC7TgAe8MeRwxx3jhpuZ6cgR9gveShVzDEP",
  "key21": "4qkoPf8Ao69ZMeSRGkbtMa4bQuoJ6tQM4gJ9xKJoNsimmSFaE1paRfyfybmYuX4CWgZUzACJTreg6VQTUNkFku61",
  "key22": "qcDX7x5YTuymQWX8jvP1fH4gsyG6Q8qCNAedb2u8gPQmdRmK6Kg6Q8L95RdfCPh6VBex2e8BQbmucmpSidQKPYc",
  "key23": "2EnLLkP8J2CggCfmTyWPDwQmJviwSF3SjVP29MGWAm781wUr5qzfzvkGYQ5xTornFJFThiuKzUoP7iKeuQTmsgCE",
  "key24": "5eADmEeQhugSsyFQaCCkyE5CD7MDAxAjmwudpxyGTjL9TKJzrYiJfSudeUWuAfNuJUgDBqAiuf65Cxf9HaDizsci",
  "key25": "QaviL5MNRgCW9BbqokKBTNVFxHWSwkyTFFUuqCoqRT6gdhJV3RbCqeXh73J8KafHGpnHaRj6sEP7rYvyr5tT2EX",
  "key26": "4ChmtCJcoWhymXXqAQPyVEkxoUA2Wx4rmSGEptjVhNPrGhLdsvxundhqZDP7SzTuxkkezk4N4HbbuUCCyzxrjXFr",
  "key27": "38Phq5sso865WViWiQQ9D9cayTf1b4bwKWLZ768F6vMtt6BdYLsuaw8UuTckWDn14iAiHmWyReDcbPZocQ83eV8P",
  "key28": "2yJH81o4HpaFCzcRuEA61MGT4qHuyZNm5EFP2pU2XKJKf7YkrbS8rbF7CDB82FyKkhj3pNzybJsC1YQXHKuyThSi",
  "key29": "2ZTjp3yLUcL8XkPJUg7yoKNo4mPkGhf7VrryPuyMtragxcdnMw3gCVztbNpdaeTbboGmSv374cHyGKuUzAqJ1GXY",
  "key30": "E1Yp9isAojygQG7UXDLP6ugjTTzhprGiDCN29KKvYV2i8gMZxyk3qDMNQU8ucYhMWCZUAawN9rRtkkvjbk7Ld1N",
  "key31": "tgAZCbPZmZ2gp6Jas11REzs5hj5B1rji3KEZ2Bmkauwiwk5o12j8gssrijrLGYRybu64ugVUCCTTN5KJWXfTY1E",
  "key32": "2HuFJ7AatNP5v2CUTQCysi78i2jwKgnvKqNV1vuuc8T6PPzVqfaZgvbGvut9JBhjZjSPFVH6tK6N4Xq5ipcYfW7e"
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
