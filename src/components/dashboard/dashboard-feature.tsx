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
    "2HzUF7GVdx3LoWCs6mJXY6L4aC3y7KJhNsabsEZ4qzKkS9vUL1BML59Yp6gMbSC7qH8qzWMMxvjXngfqGnnjVGCP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3brLZaJn4nrZ9wjPEvKc7AAgBX3XPwbWjmCjZUznJptfcZB98bz1RavNXyNGSqbRjp5fDfB2b84bhCFFMYeaW2sA",
  "key1": "3PnCuhkHbbwp3exQqBZDJNiK3fYxccrKMhokEjnoSz6nxHyDv8sN67sgZvJzJpa38a4wDCKBJjBUpXobDx2LM1mA",
  "key2": "5whF2LJ5YFjyANgCJhv5PfkXL2Gm1wRiJLYYq2fFvCUDJY429MXZxFJBjzZdt7J6BNHkagbFxHt5JYwVYCKiugVC",
  "key3": "2NQnSSvhqF4KkmnWcKuw67znXoWo9Yb6RhCargXncZ4qUJwbShukQRchQuzkmE3FpqG9BWVedqBdzg3jN18kYAgp",
  "key4": "4RoaPFQhKh6YBxhzUkdZ5kzEUdFGanPEc9VcmrXpfQttYcs68JeYnAXfEW65T6xy23qzYcuCiZY6UqkrCh9EwCer",
  "key5": "4vc7x87abHoz1TZHWMeqo5zVoddo7GnBmUXGNujs6Srsomz8fxPnRGbNZ7GpwxAsv6tCKzCiQcQgfvC7FwLWJKaW",
  "key6": "2Bc3oRogBwgrnnXBQSr5JXFF84nkfbbTHj8XEvHd99xkEsa6PV3dWANzkCUboyCCuZUQxPTnXepRK9yJA6hcV2xZ",
  "key7": "2UGV7c9kWms3Mf2P6zP8LS4XUAAaYocRDJ3H22rvLY3p6soTHTDku6stL96HgXUZgXuoHKmDfbFZAB3zv1ewqeW6",
  "key8": "3RooutgCLjahgG254geJ5TFkxD9AXV9HUMbTdXoFrtEtWEdmSTEByAeP6pCCSKDxChXgSnc8pbySZYnSVefHQKma",
  "key9": "3Zb7nBcf47UzvxfjpYcC3pjERnTrv1254UYZhPJFtx3XhSJGvJbM6nDBvCxqbxRmUUFV9iKWwipMCpYLrwf4B9h1",
  "key10": "4NWFU6i9x1EAizqQeZq6VRAVZ2Bg2x5niAnhuBoS8pLN4HYH3crj2FnNoqfmCJ95nHKHFFuRdKBVDzz28h9g1xcw",
  "key11": "ghQFfLpA63CwDm1AykPuBcDGU8Fiiz5bRNQ4mbF7mwrJdwy93nupb1QVqENL4Wp9Noa71tpPb54okb7UkXeXEhj",
  "key12": "5mmeDyvNvscpo8zjDHNYWRuHGw41jXWR1HENFG5CjNwYvGNZKys6ma5Y1LTiwms5QTdzTHbaUHWaKWexRy8M8SkE",
  "key13": "j7gf9m7PPraa3zzgtKbGXhv2sS1KvGa5ZpEE1JU6XpHARWD5bQt4u7F8THRHiXq3adxK91YfbqVvBqppKCt9mrB",
  "key14": "3QshQetSpajkHgUXEJ2bw3gFPKpgQZPkTFjuKTAqipSm2ppeQHVdoQzTnJzgE4aGu66XVsHUY15rXTefHguby5K6",
  "key15": "3USVr6utbZAXJ8MhwVhYFtKXi9QQMEEq3K7hyhaEzNT5tCRUisVkFSBhK5LWEm6N9ycGiNJYsa5FMKp99nAHEo3D",
  "key16": "3LrLams6nNQBxFsCaqYY3q1kLdVqNKVPj2EodupUrM7YKaZGkHwY5BztsqtxtJHRWJ7TC6LbRx2MMJE1jSVFd25S",
  "key17": "41PHrghJ6aCvhRmD6NeArGKmMNmwDW6v2itJFuQZd4sSgfzYnGoL2DpX7VT8ZDEkY4KzMEPTnRCP3HABFvSjRJ9V",
  "key18": "2ZomQ5pkfqYCU3eHDCkytqbQfQ6WomTnJ8T3bmo67o6UxFjJj79Qqh6mhq6F6CtEkfCtTpWqrheRBorxMbRKDpWK",
  "key19": "525b5WwieFhzk7giGpdcyhACziXWFVEHjgXYVRbp2QwJVbFMeX9teATkuSx75K4vEZugoSJQKYy2ewfvYS3dMz8b",
  "key20": "2yTMMNPgErkpjyNwDLV6gHvoXUa53uqCGFeQsYGE2KDHUh5iTYCtc5YtwuHDiRrbCW21LMgTREmwzuSRzrVA286L",
  "key21": "62cqrX5yVXnRi6zCHwXjbagaH28ANpLkReuHTXMRUc33titquNGeU4KgDaXz6cEeoabD6NZPLHCA9joSegtZUtfB",
  "key22": "63MGKfzDuZLiSP3Gr2fMKJDaTtxDrF1E1jG7UwWs7DjHRJBB8PS59UjWgfJKxJx9pBNUcrWKzQ786oSzpw5v6Whw",
  "key23": "2Hji5Cbn1VAC6Rmo7DMmpHAgEP1z7tuYMU974zKqYHj9e1Jh1HLeD59fyjaXEPJg22xxpWgyWnvV7mAvLPB5CWsE",
  "key24": "4p9sgTGhrL7hwvoo4ACDdbv5zqLBhNeCNYnNauN7LVKvxSUDdNpKdhhJMP1hDSrQuBiTJMqtq6m2eRLv5KRN9wvS",
  "key25": "2eBjkeDU5g5K6LJMr5U98o9G7jtbXWiCu4gJekWm4FbNmVdXztr8mPqVMuUDLP3xVE46uLEm2fc6cHEDKHtVFjgb",
  "key26": "64V1KdCsjeky1N4VCFLtZBd3Zp1uaGiSLFccvHdBQi1EskKNy6zpetCTZW3AXHaTWdaMHP14jsxE89h5nEtwbssq",
  "key27": "2KPxiT3qLGeMd4HGt8kHQxXRumkiDsvq2Jj1XvFJqS7X2TvHozHQSSzK4BhQGgMN3uT3kL8Mec2EJ7B6kxD4hHG2",
  "key28": "4Gmhdxbi3Z8YGBFN9Xqkm2b9GmVL7z6uTfRRFMNSBBkRFnidtpP3LUzwu5KvpM2RWyRmAu4mES2BGT1RYakaXE1f",
  "key29": "2vbhUmjCNfJBqrZozGWKyh56zVpJ1AJWYFbjemqU3EvywuCGc3dsDDdrB1dfA4rAztuZU7SFtKBKZLCDsBhEdgDt",
  "key30": "3ZuP3ZHKATSTYyZSzfn2Lj2VNTzPjy4nPb86wzUTqEPD839a1aVnt1jvyjdQKeYkZjgAtNx7hJt87iFmdV34ZL4N",
  "key31": "2yKQJW9Tkfa2Z61HMPzXnwALb5efUqBa5enUQ7jaqj5LG9KVnqx7wMU5ArW7ppbGz6jqd8SZ7jsCB3FkJMWyrkmg",
  "key32": "314WayRqyPssDjGqNCVEsQ3msH8EpeMAXafnt2ZQxQ2MJQrsknb5nV8uKL1aWuMrZw4JYuCP1RUtXzhpoaq7HSvr",
  "key33": "3fX2VjdY9Gf1X82727J3VVmfxvYgzfSQ7FRH4e9ixasxhQtM8rDhVgWKC6PKDArs7nbt2hJZdUxcXNRcRNY2fRzR",
  "key34": "22FiV1ma53Anf4bgbsRbRnj5uSLGsicryvvqd8y6jj3yHoRwHUaivMJyPv1SKp5zsr6Q1uwW7477j3EfYAYsy85j",
  "key35": "3DMCbtWkE4PeQ7myCWxfERc8zyd8TePCvM6fDiqrFodJLMoLZAgiAyuAXccjHDFJF1RKAA46V7GvKzhcHMeo6AvQ",
  "key36": "3iH9tPA7tj3qX9xmcDKn43CdG4e7GAqiN9QJdWatB7pkpkayyYUMZ7rLcPjYQTJrQV9Me9qSYaLqXKSg9paAsFZR",
  "key37": "473WuUHnm4uXNS8nxG7aRj9CrUkuV4XnsRCptN11bDBrtEhQBVxGsPdnhayGwzFZgwfsqaRaeqiqFNZzQXZC51Ku",
  "key38": "JpfwbLwzEKCf1Xd36NNormZmfgxtnzM74gbMUgH1K6eVTBTNH6sGsn1ut5nUV1NyXwX3CJyKuFJ2hb2svhhwjtx"
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
