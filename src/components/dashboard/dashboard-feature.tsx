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
    "5LwECRJTS8c1WFM6hUpmjKRNme1g2hS1r9AsHuxmWYnNxK3p3Ka1foibTZc8zmYHHQsTcxvcsQSZbyaxgXPEVNFR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HwGnYp7xzRQm5CMmpfmgoATH4ALkHE2WVDxciXtmWR1brCDoPtifie8oH1rSqAjrqZYTaHxLpjmT7yMARcUmPu5",
  "key1": "EYRaV8AjZN2bEfY1isGdqezUYP6e4paUNDqDQknnx5vAhEZ8nMpvRQfoZS3SaiT9QWsDUSfiio1d2xMKx98LQfH",
  "key2": "6MQ9FdptgDNfvbq4vKCSqUje3fuozaGf8yDqn4A4cXPzon5p2QJY2vHfsdsSMrLiJ96TBvnnZ42DxZuKJw3oMYF",
  "key3": "4beMtU7TVkCkSQBD4kR6QPk6DsNFAjPEErB7Dij1W7txpJunv3rsrkLy4nHUiQ8PF4mhs3wKqYbaoN94t9U1A3qF",
  "key4": "4SRbUEzXqwV1AXGPmFTYqkSFUvHdWVTcUGMAQDtEQSWMaFrmdoL2orxyW3rnGPorLmuwh629uPsFa9Uw1BBajQLp",
  "key5": "64SsoVB9aDbC7RG7ie4WDCsmp5dmZ59ZaCgHFKxQME9KDgWDLHXmEH9YhFqHp5FvPAxEHxqnAQioyunG2r3e276C",
  "key6": "2Spxy4GhM4DF4jiFxKQ3GGzHkBTeLPELQYhKANSuFNyZ83ep8mA1nSvRR38AuMKHKA6numJBpWMvaXvuyQHGVcXF",
  "key7": "DTtnt5zga9WBsLezskhYaYwpHdQELqMc3Hus3XMaZj6Dxgeeo7nMw1ZvHeQoKYzTeo1U8uK5VqNhptBTdqV4J2u",
  "key8": "3aHMjaRcCioELhUo9LXKVfJguCjumFSuwCQzo6FBcXn1wUB17WVHTUHQ2m5nsBkTSvYna2LPdzZTC2wH1qCjBQWr",
  "key9": "5qrwfWxytH2xbGdXJR37psq7fu9deXVUGbvv44p9PPshqCMVieWSXMRiW6f2nQKkRwzuxtxMbddFus8Fh7PRiBSQ",
  "key10": "3VoR7RG8SGWNxycG9FWutezP9tPUWqWMRNBgQk8kvaedHFpmh2hsX4858deB93UUauaQqqp1P499QBncugtWN8hy",
  "key11": "32zpUjs6T5mrBjver13rDugawRoiDKktuRx27Ewd6jFfzii8GGMs9epmrz6qpmXt8SsmahSFYzBavkZQep9fWrjV",
  "key12": "4em5CPeqY1dwe73tchefpCdbVGZkNyCTfycnmcEzNhmmDtDSZBNnjcuNwfggCgRko1rfBP7ALGAGKxKgC4iGWK6f",
  "key13": "2dmoD1Sz7NdLkEf6Qq6GingFiRaQqjeE2bUVFpogQKjjsSDQepATwfRmZGXRURVJbDy5naica2Tzce1G98m7DzC2",
  "key14": "4tHfnXUhbrq8i16eMFEfEm5oBa3X7cNZXzE2RE7Hjsft5aXZqZL6tetbUREMSXkGgZsrReFvheqMQ6S8m5m6s2BL",
  "key15": "cLqBWJvGWvXJsP3rmRp2t3LHbJBXJsGGKRoMDXGe7EG2v4iQ8dCELcfHymPdQYmmmYqx2vKNkBMgN2B4sLxpusm",
  "key16": "2ZXNtwpsXdrqZasrSggL5zqt1ytRD7Gjs3dbKbp9WgTgGwGvphwWrJpik9UfkLPiXzjL1cSAagCPcdbk8q7e9N5V",
  "key17": "zwxhSn1v4D3srmg3PNq7usPommjPxaKKkBXRJdjq2LGy8puY8Q5C1p9cAR2cbzxvwsixNspVd5BNKBR1CGTa1hA",
  "key18": "2XTKu5gM3cK2gSK2TziAzz1QLxxwLgrSVjmFncuGLHtQTJmEi8SJXHwBp8Nz6Xx1vKLKKafGYaCBqAxyUVE243w7",
  "key19": "2ZD242SUiBFSD3KEq59ub4vz8zAXzN4W39qkAtvJ7FqfauBrtX3cQyFbVMjB1NhPGWzxHuHLyFQRvwzuj75hJjez",
  "key20": "4UkGkVrnrXZfjZnSQMw99N17y6FrH9dobQf9oUkyATqzwtqqpwKwXfJDqaCQU6vf5DMqGdJT8BisR6NTHgLFEEF5",
  "key21": "4GpkRuDMBgTVuanqSposgYcWdSvyoGFC4JEXToW4fFGerw6ZRFBDdAyYKyFC38Vs3FqrVSRCU5ojPW933eXBaCPu",
  "key22": "2r5CyMd4NxKsDSjSLbRdwomFA6vvHWGy7S7YbZSmUKwSGDwt6m3GTTpjrwzeCfzNdxNbfZcMSFrvxw6j9kRZdYDa",
  "key23": "22DNZv7dAfD1zs7oV9bYvnoChCuruhefvCxwSj3tasb8pEWom5At74kYwVfCk3cBbhxM5EtzL3SXPApYtmvf3nV1",
  "key24": "2mmCBJqHB5HKViE3HsxaBXaqDMiGqK4w3VsN3f2NF3z8pF1bTcveUj7Yt82eMCa2gztyGPijWmdfGsyxPAfSUsqW",
  "key25": "4hBRNesSF7A9WQ2fbFEe9CtSa3WHKbZ43kq3Nyw7iRL6S8ZM6xbz93qs9sWdAuytpgH5j3qUjiiXQhoLQh22Q2mh",
  "key26": "26eHcKhRnf1af55YVYjrj5X484yNcJs96QYALWpw9Ravvo9cYGRsixpYUTbeA2WzWi3zVd48WJci1J6mzkboCPUb",
  "key27": "31qtckKEpbAvspKVQ4dSNbP5wX2hMeXTrjrwJJ4v23bCy1gfPyWiwsjinA9b4YKS9SYmN7McWoDZTW1MYe7PFfke",
  "key28": "vM69d1fGGNE2CYpNsu4vaE6oFRnetkJnU7rv4SP5fsNHs4UcDaevRmK91DFoEvapcJhi5q5SK4W474ma4KE9hSA",
  "key29": "3LuCBVwNzXC3m6mkSZuq23sCZhqGXgLVuL8ehR5BCrLRmgefzAGrVHMz933h15ARvykCa2UBNa5Q8akZLP9Hs9fa",
  "key30": "4JxosuyvkvF1EQt1hXXwgMtbRTGCmUsZrqQBDz9NnniEYnJ4sQostxoyzRRU65Ld5JBK5ABzAMSrCHojsJiqYueH"
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
