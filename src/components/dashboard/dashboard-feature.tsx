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
    "QNnJFm8UGKRWxfbkU7fxWu7C3xKgmYCiTyKfphhbfLrya99Lw1fu16623XBSjBnn45MLPCftZd7tfkDkPwoTrm7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EqzML2Jag32GdvMrHjHMj5xeD3xEmvxJ9SPrqvNF2G2sjqhaAqqDMiYg1cbLcbKmznRSnmtViU5bNRonQ9GTk9f",
  "key1": "5vvyXxvJ5N6KAFi3yWY6LPfJw7RMLeYF9dqPFSr4mqLD8ViqjHaqFQNFqnsUCJ5yr3RyJFwQZKzJ3h5vHhxAwzJs",
  "key2": "4qrrXKpnt1uRwChVwXiGmcDocBHbMvnjTKuEcSaweqMgCzJe4E6XD9qejHESspTTt5utgKsVucQ3xLFhqvZSUQdQ",
  "key3": "YA1wX13KfKEdDwCPsRQaGYxbbJ9dR7nJvEg6yCzZVJCfREYNMnWEmEcb7HyxE7uq4qxmYK9FrrjWqASTYqe91hY",
  "key4": "2y9sJwrFrdTLevdtnvkZVrFoFCSDDzRDPxiX4TAGMD2sBDA7dBeWK63BXtjtTBB8UomELrzAs9QgBsBgg4abDqXH",
  "key5": "5tgtqooWPMJWCCEAiYVDSLc5bRnkvTbUqHCsQMd8NM79Jh1YQXBzgMYrKRLa7D5uFKmrjy8zLdPUNESvsWq6Ajou",
  "key6": "25SisUzhCHRKspE1AeYpVXQ1o968vED7ir1y13nZhR5mMtDA5trAfFD4MyqbRnfoMUeb5njGdVdAiqBya4954jSe",
  "key7": "4tTGnHkF6XS9jkPqSs1gLvcyk1kfncCZxxYQGfACvzYHsrW6iwBrvHmyBwBjTg7QdCF7pmQMrPEw2oyTHMrtYFU1",
  "key8": "2CsSJrd5cffUs9VWEJv4KcbhfWMp2LivG3YeFSo6eu6FSNSeG2xHNXL7ms58TcGaR9bYrHdNvTxEat3q8Nr88Ait",
  "key9": "4awGe7pEDNtMbfeCER7RRNL4LB9UB62PrzAJGkYQL9Rjaw4beXQhQPwVuHq5q5qaYELsQTioAuq5de9W5hWgQBwA",
  "key10": "2PcuvDqSF7TroyaZRmxxx7DCGggXbR15rNEtGc69o19WcKyutA6BHBUTqmp8LnyZsTRKCXGaeuny6ehYqvDhhh2b",
  "key11": "5MZR4tXRSA1F13VbL6qGeKvYTWrAs1Wuviz3Cfew5wkfUjgfVM5PyBhGRM45yjCuBY2p9Ws7rCcXKDiEDcPxAKJz",
  "key12": "4Ff7pVQMWMB6S4nBapnqRULqrT49pCtfkQ4EoYznY81Kgri5LiKTD6Na1KQrAgTyHc2WQXquUmLFDePRN3E3aV34",
  "key13": "49syEjGtarES5aHthaTkFkbaTBiCr2mgrtAJtWp8p9We5jv7WjwLuJTgzjrxLjA5a4WasBBeF2kMQFS8882ZPmmV",
  "key14": "5uaqiQy2kp99ArNLC1xaFcaCDdi7Gkgpu3J9UoBiNpANjfrHyMTuvYrZhPNXDcVHZd1sGRbhdhvszHDY5HuL9oAi",
  "key15": "4Q2Jd47fkxy5PrH768zDi71yvMZfdpFBCQ59s2MRiv5dTWQCZxDR8YVzcPXypUgtvpschRgj3CZSBFqgrgNzxnhs",
  "key16": "38uotKvXP9CDh4o6pXjxZ2HDTeVphtCySYKTGnRinnEnzQNYsoRBgkoeSfjNibSMinhK7eRswnzURsH9nXYsxyhH",
  "key17": "499Q7dFMWcysgTCs25DPaBkewraXGEjRvqVA5FxmVAEWKmcRX52AfDXZuN7Rg9YcSC4FydFKkGrbz8ub25ATHWsH",
  "key18": "5e3kzrTS4yJcpi2VP6tpRP8wGK1pR7uDfLCAE5qR4qbZ2oi1cw2Zu5TQgiPwmyNvuQVCMsdUMQ1h6CEq2VNJCV4B",
  "key19": "GbCVtCbrkFHdyNk7ottfyv4D3GVVdQvWYVuEuRra68z6PjqxksvnwXfHu9SiQPSJe9XcN2npdvCSnYB3St8LxQe",
  "key20": "4PAE7NDNRyqcZgRPLdBUAFuzeFbMdpzfkK9ki4guyjvZbpKTkn7yND9TSZv5MRcDJKmpucJY7P7u8KDJq863v6D3",
  "key21": "5UE2scuAvhR7NVJoMkw9v39xjoAGjWGC7ppcKAYjX1AMVeoKuogdL8w5V7xmkUWRPpRMCraGFftF97dbTmikX8Wy",
  "key22": "2Y5fqrMkAEoNpDYg7rvfPL6PPah6FqBeW7ba1qfR9eqE45mkaMBKQqnMbwgGxR5zeihqLkTkM44F1HPXEmj28HBX",
  "key23": "3ovrFtEo8ygS9v4ZJLKm1CKc8vBVfbbMCkzmDzRBcBdGyAyQSYhVv6XN5fY9QtvMFZfKN2aAYt5RmDRRoXah6ZM4",
  "key24": "4HSLK8eKajXF1219xMZSHY3YRB7NgxTjxtmBHNwh3rEr9xLvbAuaMkk5EjXyt9xYCLJWhBPdgQJk8Cit1ugTY1pw",
  "key25": "PZBRRC1PzYbcaGmeNBwbcvULA1QUWeNoC4sFxLHCnXkU37cEkK6VBB997yNjRRKdtbLNni8H1UqMV8hFkARJRqQ",
  "key26": "2AQTV1ugpeXphguZFukKMfScQSCG6i8vhWwrP3yDvQH1m1KU1o5fZUSJm7U6EVrhSarETNZjgQLXpx5KtMKvwRt6",
  "key27": "35kKsMLKKeqVvJxibC4saL1UZjRykYDmDzEVTwFhMaxXqJvEHbb1EtG47ZgPf3u854cYHCwpHWmuafn62T9RAuvp",
  "key28": "2jxB34nw5PAZgqAD9fDsV3C33rTTNsR3qNuaHZLARzi7YT4pG8Tna32AU3GCDbFRM9LXAxNnCoRkYjBmJHPKguNV",
  "key29": "4E1C48ZQkA8RCa8e9X8m2tG9AmgRx1Xgx1EycFuWLQKCSoQQjqMVowsb4w7rNb7ueNerFbR7DFzRJEXpoD613CbW",
  "key30": "5gtmkCGUBtd21HCoidecAx7youeUETJZ2qHFbeuhL23Ub4Z9zR69ocbJRVrfDog3AW3FEkCJEit9pSknraYR19gY",
  "key31": "22JgPX8Scpo9LpT9yV4ALG1MKNpzJuxhaCbHvDZjsvmvwRZoT9VznNsH3frhvMHi91HouqgPwduqK5uxH36ZD1J2",
  "key32": "5XQVNoNnXn4rh3u4dSupkfwiMVTcs1dRiy29XXSAbApRyETGG6pk9ai3pnq5bReLn3uGrM9RDmNyu71itWz7oZXh",
  "key33": "4369QkVBQtfr2prquNzQ11KbnyLg1Td8SeeVqVxzs3jnQJpJXDQEg2RBsfDxQv2kYBcMe2JvXjQHiD42pL3usUSf",
  "key34": "5x22GpQWAQeNdrFmKtoVwad8hvFvwR5PFt4roEJqSBwzWyFWLMEhMbJomckJV7dyTRr9WvUzbgis6mG1kwAfxqd6",
  "key35": "5gKPAZnRGzbQiYgPDE67sQyD29QVy55rQjz46RFkv664SCEmBCHJfEe8ErwXrD3kFtCMKirfmpaTvLMs4hzdKMDn",
  "key36": "51vtcMvZGrVdzonwm9M8jnfWqzV24K9AREgzFUBbFSSetTsP8MhGMHcPPgtwwkjhRgXoV7biGouToGdF23HHotRh",
  "key37": "JuqdRhwZ6Q4NHZcEYpRzxjdAYJgsiDZG8Z4r94rQ9wZ684qnaPnajmCVz5ktoE9SQWxHZxNQ3EDEMK6TDvh8gZv",
  "key38": "237PkYCNmFh4HpjJrxc7rX3HhgtV57EQrpDUbHGvCxNi4pNEnQLB37Jcd5vyBDjBgkgjhBwHeKnsvTgE4oejHomR",
  "key39": "Akvnk4ardnio5LPjs9M6f7SrcNZJSNdbyR1fJPTbtc1bcHsHFZsfpAxAJS2Pzbx85CMsZkwtndMmZKZWnrCKJDx",
  "key40": "vp5CyJsXMZU7NRDuHm1uKaGMswRqUNLnnTQM91xtn3BmcEo6UbfgQrPT4FLTLH2Q1ZQHTyGGrTSbuvMcCWxUpTy",
  "key41": "4J3UXCKbaLcMuhVEyYdfKLx8dASjG3T7tbuEMrieXGTqXuUpWLg6MqAdizd19x9Gramz7UyTyWUgMiC1VH82kgjn",
  "key42": "4Vve5xX4gmE8k3TaZafKKyABqC3UqGmgYiUCt1CWw6GsWo8FENxoLUdCHGYGxwTqdXM4M9JwXbFRaAi57sNoK3Ye",
  "key43": "31f44fWw3fb9cVVZ51EWGrA1P9EJXPawqztRtUA4bqhKiMG5PyN9UBoP2iUBk9DsjoTMt4HgA6fdyFL2KiEgUBmA"
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
