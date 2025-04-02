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
    "5Ejw6DmRvMsU8ZUYTgjaekGpAd9uknuM7syBwpH1tjG3J2ggLgi1V1asUfvJWXcDV5u6L9Dr75cbTZER7kkENpxG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qmV6fMQ4yVLNhrtDsWWzQnDNXKn9aZjnv7gXWuunZyZnzpVcwaoLWMSbWybunDmBPzPfGxCFhET1hqUvEt9Qesj",
  "key1": "3kMuJvAsBEr5k6jqZaECujB4XXSRDxPoA27XsgseYxtnWh4HJ9c9vwQuDyBNZsE6KBcwoNcTuyxAfqRe34sRwJsJ",
  "key2": "rVXjQvxa3zNEw586YkacVLnSWSoQsH9MgdLHXBVghGzR8qn678QzHFWbWRU1esNZaLT7J8az8MHg6uVg6iDkyv9",
  "key3": "3JQMK4zEMH81rhAPMXhMLB36wJ2u4ta4reCbiyaeBtF9hdiHSDB1Won6QzsJn7qTVVzDdqLAAPHWBHpFpKG6AF1z",
  "key4": "1HMokFxBbvkMUkABUtZBPDU51NpTXoFuyZyYnibGgXzXXsWRMPFK4SojPE95Jw6znSZgUVJ5A6zbPndXKymsgsh",
  "key5": "2iprLeE1FxAzMh6Fsu7LshuvVHwJHTucJdY7pqYwxjjCNx6p2GfdFa1KvPBE8aHHUjJjDgjVoQG2KrP4L5ER3gqU",
  "key6": "4sdMQGvRC3z2zUbP599Lgpkhf5uRDMgsu5X1HvdvCsiUQzA942G7kg7qAKnx43HwbS3nmcBGuSACHdaBHutaJEyk",
  "key7": "58FRvge9NML8qWAnzAsz4RcFo1jeFh5y6EbsaccuH3ixbZyhGrLquT44HDKuWT2H1PtYMwjSc1jmdnHxmGzJRMkP",
  "key8": "2cR6oD4vVnJdkd97HHbDTUrEbfULJ9bHohVkzByyhCSN7YeF5ZgZ6SNt18azHEijsQNBgjUXaa7K3ahgyRY2ZNGG",
  "key9": "LdHqPqBKDiwQvhvCLGuvr8Dxm1skR328vPixG2d586CgpbW8S69vywkT6uoPVXshAS5EcYHCChiqXimwxpg2Jjd",
  "key10": "5RR7tVr8VfZjMMhWrKL4RPktXk34yV6odFkWCkmSJZSgdZTsqS4PDbAdsnMwb5zUPxAkgdCvUNrwh9kTqCPwGPJK",
  "key11": "auaKTP88fJs6bC22XfE5o6iP1HsTdgQGonyq3ofVQYS1crVvqixtuiFwEny3XZZrzaCyjYAw9QiDzx7KcnDfGK2",
  "key12": "3inMC3Re7YMzYuAzeBVpA4kfcBpAELQq2WM7wJRncMKjNg9L8h1A2zCkzv3UGZgNTAUEpirDh7zNC5eE4uvjZLUp",
  "key13": "4AaHbEszHCZP6iosNRAngPPn1BAL9tBxtGVrqqzBCsmeKx4JyPWsr4MLNKjPgih7cJkhWgzwi9Q2aYkPuZDXQXgD",
  "key14": "4qs34zekMWoEZYTdvMf6Y1ABKRNpZ6gK1fWaHASSnjzPocG6qQRFDZbJXD2hTAB7Fo2oJ1nU8KjrZJJgZZ13TQua",
  "key15": "3CiaRXQfGoJDy1TUk5sj1LLhYGDA2bZo2jEPuy4poZjjzagxVrEmC52sanUX61RC5p31qvdhxoEndxzfu65FXQfG",
  "key16": "4EuuFQKyUWrtXhw2L8cPm4jYC7rX4JAiY6i19FC77fE6zcoHLvA4JP46Zw81wAQCuWi9zwCUSvCESAkyQwycS91q",
  "key17": "msM2DsNNYUWC2Pjb6Lx9qdg3q55UF2svttSPQWe9pfr1P2vGHbNGiKAennkAH9i6rLYBVvxchjTzCTn4Qy7JYLC",
  "key18": "67JxysLBogNqtErDsryHqixeLfTMU5s19oVLpnAbH8Lo9qPU8Ti5Pug6GxbSF7gcJyfFTXmMwJ75zW93LZym5Xyi",
  "key19": "MCzSKddeVb74BCRKbxNavFJqVjig8ax9xyfTMv6vxr3CRdBpbvnbedP3zxYAjScSPGnqDY8JWrJWdYYREBz3vf8",
  "key20": "4tfzTPY6L4P23Hn8fWoWBR7xKUJ9PSh7JuwbjfNEQjLSaBQxzENAYGzg43i7kpfkBMxgWKUv57UAcsS5wPucMzRp",
  "key21": "dioi1HPDDehszypQnpfyfAHZC1b2vkCaTvbuEFQCqfhe7SBbK9MRt3kkXuxxGobH1fpvm4cfWKiHfCjpdhwFmZe",
  "key22": "4BC8yQRYUaRDPK47LTdH8rx5CQ2r7s78MsPLC698QXBz991FxAB6ZGPFJguziBUfdjE9pihJ8Eo4NE2EV9WAmqw4",
  "key23": "2qVC2uqSPTjGyNFGQxVPGtn7CaLE9L6Pwk7A27vpGPsQgxAqSqt5bRWkUD6w5YrpqpL8xTbhUXAm3naJcSstqBYj",
  "key24": "2yekbT4c7TskTXngznJ5N9jXW8wxTJJfqQECpWjQTrtpffX8WAotohpG9Y2X3unnPzfp8kMJvNHoGp2LvCtrGsjN",
  "key25": "5cGSBbec1x65n2N3wgYn2HAJBMtSvK7uGzvyhLU6BEfEAEAMswpxaUVrMMzisbMfJ95VQwW2vAWfEChTszjatwCW",
  "key26": "668fR4BDwYJ9ftxBYV3irRvy9wA2pNhgUFxWfQ4SF8biv1SbHDjQ7eacBG5zGniaEvd7PyjG5ULrNVMP6A7e1TZo",
  "key27": "3QvBK1jjbnRrv3Nkf7Acn9qWcvgug2AL2LPck54PaUT6JdcjLdG2iB2i63eu9rjpvP27xkhsz7bqwaL8veFiZX7i",
  "key28": "2aEXGqMKEbvzwevAnY4NEmr9JxqLy8Gq8hG2hRb7MDVdZRZYXCyPmuY9R2f5VSWva46FAgw2h3gogpTPWDBRWA7N",
  "key29": "J8vx3ayHsXbNaVneSa885qc1nY6LKgvYNC1gzfjjiosXg3SFemvRgAKC5f2N9H4ene82gbECa6kQhxQmK5NuEeZ",
  "key30": "4LeLd3hqtnJVuUBxJ8fg5saQSTtQaHxUShpQVQXkrX28VLizgFBUArrMJHfMsPj93n1SjP8ooWS4MbknmEzUiTeg",
  "key31": "34aK9f3UeU7FEt3LBP2q1WFaziTwKcUBdi7mR2HkPVfebrYubRkbdmXY7vy92ZMRicLpQc3xP7a7QHhZKiWt2LEz",
  "key32": "Fw17zWKexaf2fxvjAQ5tqzHMQ7BSwBHL1dghEx7GJnn5ZSJ9T4iN4GWw9piqBwyGVJAE5C3zk8mZRkL9nCoyUKs",
  "key33": "i7zXE1QkmoKQsZJqmGkVMDXVGkDA7hHUbZHGsXvaqgZzxk5aXMtuGNPkQf6uh8v6NgF75MkMtxGwaMVifTvanPK",
  "key34": "2suWW5dJXZ98NNf8nS96uBAfDa6rUMQeQjXLxGEruSXGuSF1FenKYzTAATHsLWrLHist9xQq32C18hjFm1mfuVVW",
  "key35": "2Zk8uQcNLJG1VPjMZaRzVcBDquHBvHUdf9HGPaBfxd7rshGhaZHaa8aPmqMeFi6idamTm8JeH7FJb3aaZe7vUwqF",
  "key36": "25x7UVVfUv11RSLfAC8ummuedYkNGZpYzfFoGt8E5yKNf8VQva8ydytZ3uTPFn2rWeJ9hKVDZSJEwzF87QPEskE3",
  "key37": "5bMKHNRXQZXZstLwG2e9EDJY7BfCxCZLReb78dmsE6Ez4mJzmuCWuRCoPWvaNtBPk8a621bP2X8mS8nmES1TVezA",
  "key38": "4d9tax1YGEdsucRxa5b9rJNvUsCB6dAF556EKQgABh79PFKRHA2bM3KRxPskegFuDF4XBBzSoum4sUqZKNGZRWfk",
  "key39": "56SWbPLre7Krc55wJCttsbEnp7Aizvmes85nFvZf1MshLiaPyiUdFUSKkMTdFhLQoXwBEFSuvpFf3zgnoep3K4Uw",
  "key40": "3pCsUe19eCgTvj5U526CHKyvFUojQDNHKmSh62WkxUfbK1nN3prvMZGvLkcjJ7Nf6YJQXUYrb6YzveMfx2J4uJEA",
  "key41": "3Uhpaev2vbAdwL7qbWkFN9XbxidNUgsCde1ZQnQJeNaum54cyaPLgMoo3ojTUB7BRSuy7pF69huisJB2QRyfgbKb",
  "key42": "3p8RLQmuM6QjyrxwSPLffQXuHJiW8VrJMp96NBXmbWcoRx2EW2rz5CTLwTVPvQxm8KjnxrMHEiKNMevGqmVbxukW",
  "key43": "5PbpAX9tTvY6AbP6Kcd8B4xr1kh7CtoHuUa8CP5CqSE9CQiXVL76A1CJKnN5q8tcUznDv3wRAXUPrdZNGtMxBqHx",
  "key44": "3obkZFqaM6aon72ZiPH334vkKNqNJ8zEqgRdrvzu6ccjwchjDFuNNRCYToRdqsRQCCReL2u6Hw76NaRDAEBjE7vZ",
  "key45": "oEkmmJWGaKyDbHcohC4aWdwKPazsZc6gic3XrZrZCWD7SseqF6fLJJC63ViNd6N3JrMsCEwyVCi6mzGTCKfNHvA",
  "key46": "3ta7FYU3qMwLy6Vv3eLpe1zFyTFm3WSUKMP3uvpVpBrC9oBxpP4nBMC1qubtuKaNxgv8yDkPBar7GVGvDnBrSmod"
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
