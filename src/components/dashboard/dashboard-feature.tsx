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
    "5tu5ZXVpAFk6wihQ68zzggtPpZtgNzTgbouoaE9PM5BMcPj2itG8M33xJKPonnQVVeLTSB5AUX9rMW5Usigp8c2j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g6sfnwanR7GtQAYWbX4YGk2t4eKzP6LMTqMoZ3pEUkTJcQgo81shefr3XuhJtEaq1TyNx4yscqT34chw1UTz8jk",
  "key1": "5biNy3eusWmV9MvqvrZ41WvcAJbbqDN6qwTjcdE1u7tnFovoQG7wV44jyT3dgrVeDL9fcLPDU3TcKUJzS25Tccpo",
  "key2": "2nV5fH7KdDaMZtYTSnwVUbgSbdKcVodidPt6yV864v9GmtLyn3DB1mLfAszAf9vi5CKBrHCNJwmnEQx5jLjCcpVA",
  "key3": "2WZ4y2sYyAXcCDWt7gpqBFTyiwC8kUHtasnPmdVpAZLJTdmDcYRgMVJcgGx72F3VbnM6YbqSBspwt1UCas6YJrqc",
  "key4": "3cRuHHdVW8u9YkJThGF1LP9CxtrDR7j8731Ar81DSYJju9xGSRZNYCTXpMrb7yRYa2rzyEA4ogncoVNQH26StraN",
  "key5": "3E7jKSrT8C9mfvSJ6NG6os1NceAWj9PayxACpYPuKmJFjU7oXapBQSMqxWcVPuM91bxYdFjmZdCqFYZqwA91SG5A",
  "key6": "4HNTiWEbJCXRdeUcxTyeBe9Hpi6WCcJ74w1rNDuTAuBigVwT7iQNEhsU6hJqhaUySBco1881a8qF782BiC47YPYW",
  "key7": "2S4dQVddxCCdx1uaNNYX5WfR58og3ENAvDA3MwroJcG3NhaoQvXwXrx2KXu3rCJsqby8sfmT15uke4aAtfzN5yC2",
  "key8": "2EftLF5HHKL4jDxQsyz1CtHyWhmYWQUNQpDzDSKDwuqyHChXtQvu3FAwJ4JSnW7RgpGHBtT6ej6fU7RdpuYVr6TL",
  "key9": "w6wFtHoZutpEBVZCNvyFma7d7rCGMA7RD7u2pc94Hs8TA4DHpYgSNr6F13DmfbbH694XmgreVjqUmrgX4kUCj7a",
  "key10": "2Mj9mJPYPcUk9crbev7bfKWRcQh3d4eEJ5wbhpQc5GoJ58mtAK6c15Tm2N2U3QEtJkWAVDzddyWDeHtu9tKjJKXX",
  "key11": "4W5DgxAC878c42esCPbg8sQqjSWdtWLKedB7XCThoUrC72wseJnbtNcfoNoZodcxarRq5cjm31w1chocnPjbmJqF",
  "key12": "FFJL5EwW4VMuff8n42sDcbMncghXHi6gojJDxkeFec1PXHog2V9SAbqPEuFi3MWtbyCS5STVqvDvN6rvv6BGMq4",
  "key13": "4mZpbCoBgXW28E1No5DqEgQVMAzspTqd6upKZpHF8eJEhaGq99C3f1HffTYaxrMEAnbnwhwLkdQiCSFHsbBk8KeE",
  "key14": "5hoL9NTr4Nq5grYZCBxj9eDSG2EZ5yBh8UuBLWsxsZK69s2AqMcx31qgU9p1LoW855BT8j7aVEz5zx7jTz2pfaKt",
  "key15": "cdybxmKgyzzoE6PG3MG6ewxXqZvjZ2gaSrfjWVs8GDnGLgovkPJqABdmwQCFW3grALwbJBQbX4u5aSSoPM59ps2",
  "key16": "3HmZyqQeZNMrmsaxttUsL41AyKVc5gYKuA6ejfKEAYjyPmgZUJFKhv5pHUYkp3nBcCc94euwojgbxnWzFzG3qvsg",
  "key17": "2iJmVXBh4v3ekMvkBNp79DG5aQAupBNTa8r3kxewXrgsdxXuX3GZF9iaHxkDP2az5ffFTX68eMr9T3CcXUhFrMb5",
  "key18": "2qiqZ5WWuhYasVBMWYuUqi13tzd9nGoeaFuo4dvAwSyzZvSsmw8fJsK2pk31hWX3wco4ryogSsyLysiC7ueWb6qr",
  "key19": "5cKzHw2xsDihkAuy7tawWVGbomLFKKjXopx6ZKXZaxCjDPnXa4eX6qagYNf4VyPP4kiqqmnU8KJSAsUivTdCuLZf",
  "key20": "4RPFj5SaC4sX9CD9FWyV839k7m3zbsACcWCB982M2b6pYqzWyd8SmK5YGpWAckeknEgVkWFnWnJxtz5suKArkdTb",
  "key21": "5orRCsvcyAW8KAPCyFaFoDRGUcXfs3NFkUAQQNyi4hRHeimaCmDeypMXqEQEMtF4ZhSqevDQpQU7uTMdEFu81YJK",
  "key22": "28n5spVVapVFdmdjWrUvAV2cgGvmotuDrsbbWYovaMCG4m5CLRDWX23mJ8CVKmzTwEndmJyzeE6x9BYxMy6U5tgT",
  "key23": "3DFP1gSvkkoztWFxKrJXrNsG57EPx1qn1VyE1tKMoVBV2zmpWoCJMmb5uMhfrULEjHfmqKfm6XszsxgZ14Bpfp4S",
  "key24": "4eEz1fpcod1SWYnhLHz841RK5uFd8tPH6LWoUcLpXazxBFVLjvbNNiDNP8c6QQNcasvfeuHXVYEmBhj4A8mXZvbV",
  "key25": "5b4B1hFbpiyge7ph8TbPD6XZqBX3cEAbnaapQBVaM7RVBrbVD5cAJgtKJxXvba6a7p7zbbPTYSbmKyLZuJRhnKXk",
  "key26": "5qKacQ7bSL5H7ZsaF83ng5jP6ovPHV6PC1SUsBn4neFQc8ngkMZwPnwTuyzqGXubsSbppmzxae4QSCGWoJ4oyfAC",
  "key27": "2uUJY1ewh21uQv9Hym7X5UyW4kgxXjFAABia82GEhzniLfpCzmy6hWDvG4Rmk5Fn28fDWjsqSa38ajwJU37KVZjY",
  "key28": "5rocow2s3XGUZ7eFR4GeWoemvG4q5WPt1RC59VKXrKEe2V8pYBmdMRv8VjfQAHtVUHFtgS66YjFC2kcEb6hATyvU",
  "key29": "37xCGsps5mYecM18gWtM5ouFwRMjkwiHhNydzxH3JcbF1xkq4jeEXarG7a8E3xnQW86Du21dZMJdy4TCWpSWzc1r",
  "key30": "2DkzxkLZutsXLdopGNUtDeAyoPnzdbRAKQ9AcLTjT7JTyAmS7fXLRZGpDicJASTwQqMAEjQhjyZr6FKjb5WUKVfQ",
  "key31": "4ZK9oKzcdiEVYJYwxGGnaCHMyL91B9HKDp7hGGSJFLhmmXGDx7brCN9uks7NLngtX5GCxVfpgNHzWPTd7tuiGj89",
  "key32": "4rCo18pb8ARpaMLijXnpgwEiL1nre6z3cQEh68xVAWDY8kgvwZgFErdTevzfpotG8uekCznTnTvy517sPURZq9Yp",
  "key33": "3tt4o7u1m1khVHXCGhCaLYoeyuxiB9TFRon56XceHCa4X21jvW72jGBXRdbKfQ5qXjFrJi5k5cGG8XCjEbnjdxBU",
  "key34": "UDUzwo71Feo4TBmt9scuY7qZP6fMG217tbjJbPcuhyz4VVDrxLsJ87k7pEwwALGCQZUsLpNRkVgmBWX5afRsyzD",
  "key35": "JwifZBXGhAiE6GsdVzCdnovf5Dx8kLTYqXD5oC6CZ494RWnhPjAB1tD79gDxRSDSjiwFst6Bz6Zi1S45BUYVrkD",
  "key36": "5kGB6iYwoBo9NAvvNckVfLDEkfK2NWV9TaoBqa1UtmheT3LP91ZGnJ3yrj6AvqMBQdkYGKaNVFUzTjJxvvdTgTrY",
  "key37": "3j1tYpwtbaQLrWNqHsDnrctwL3yWwNfwYSEWySyZafb9Gvf7FcWT6hXyWGkWPNW1KXF13kJ9bTdgGQQWzkF4x2Np",
  "key38": "5ArA7zXiMxXWBRNmCueSDETnaxekTJW7hfpRBgsitSB5rAHw9keZhsbeR8wczRcTo8NYsDz85Td8qNB3kwUuDw8P",
  "key39": "ay6QEnxa4gaCyXcRccMMutMffLZSUuiYb2xHA76KT2FcEfws3hpJBwygEv55QUTLffbXvwjKk452p263ygqvqV8",
  "key40": "4kKB4X3pjnvsQJD2VwFaNHpqXkpYRhBf6z3LGKwfdtqnwtsNcUDCt9tJncFQjrt3YzYkYgKJS1PM59v1tY3buDTM",
  "key41": "4AMxCQ67TTwLfqZEFMH1G6KSDF8Vsi8peAM8TKEpAXwmAFxYPnMyw12JszwwqsHeNmimAyUGVPR4rZcppuZCT9J3",
  "key42": "3EybnvbmyuVxNMiYBeab2ZHpZNHyrki6DdjRJBt7Q7tw1MSKMKNYT6nGpi66PxuufnzraocLuQFNMtugSF9ajRA6",
  "key43": "2nug2sXUrucaZnaQyNXvS5RBkVR2TgFYrHYCj1e6bWmRjzSRQhV2ZQsoxh2JzFDYxx19WuSFMmbBAvUz9Hv8f6Jm",
  "key44": "5LBMW3RkLSSSGAyGuSu3GRMrhymKhLervhZVstG3eQVfAM7KiV8txVykDHS9iqCxxeqeeMRhpSewTWA82qWy8uME"
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
