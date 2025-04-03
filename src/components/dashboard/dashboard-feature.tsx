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
    "4nxycSDwKiDBFLt5nYknu5K3nTgH7PfhD94mgiKaNuwoJ9FJXP1jHSxqkXUtDLBVsb48unmobqXkrEcho6myEiG1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dupDNx2hm1vHNfsk5qfJbBXrMifDenqRSnU6KBpZi9tsp2pAo94h5wWtS9kGzLz7mNmoVkp5tmK7yPidQBwdJPz",
  "key1": "3V2UZ1bDLkSkdKdvcYHrQKsCWPXcWBzkSN2L1jvFniAZjN8YaeZgg48zhKU4fBu5ZMfno2pGGT8EkkDknHPHCHbA",
  "key2": "2hTzwVsVnNtCfKNf4J1PBUqqTj2ueon3PaFe2vKVSf2HgqRdLfQpW5Z5y4FxBKGgXeof6PGyBtfeR3V6Y3SE9G8j",
  "key3": "59JHR7AwxbJB3cxKuLpAq4X7KXu77eQkGz5iGCk6JuEXeCALqFBRQAL9oanQDgdLLd3Mqc8Pz8hvbDC8iiMFX1ty",
  "key4": "4ERtkbJd28PG3NC3MohUbbFeKqcQ5dhwESqzN8EWbW4bWG9tgiYTQe3uSJbWmwGtVYPzdzMwg2xyUwZcmc7tqkqL",
  "key5": "Jgi9QysQtfguZYFg1RZoygdtJEM1zJRRxDuGWzscQ1aprQS7mCJayZGiFQJA1VWpxaZ5J5gWtu8ewPMvr6hjwxH",
  "key6": "59PBYyEguZMdnUjThUDzHbFqjii32hkS3VCGzZZPjQcLhGWMQgCTyXYWi2Tzx7wmVC53qTCa8foYhK2KejazMpmP",
  "key7": "3wGzYVwG5c2GwBRVUa9pPkQ5cvHy285RdNR8cLkwSqAgY7qw1SNygZzUu8jAmnpkyKWRPL9CPmETv2pKPfZqCUgs",
  "key8": "2pbsgJ9JgTg7RLgGjJuvcCWHW9e4zdGV7J3tFNJ2futX5nq84rU6eB8MbXVcLHq3Q8mt3QLcPKsG2xJVidhf9Fbp",
  "key9": "3yse172hHwo3hLYJGGAdTyk3PY1YmCePEsr6MVryNhF2JQAMfwajkyJ2VmCjKABicLdNzqgvUPLgiokFiak7Jv81",
  "key10": "5sXwGUqbesRwaFMwJwTwNQGyqNKakEngX5gJD3ZMmm3zt42vbo1RftmaCE6wDH6mXZbWWB5vY2H5Ay72BD9vbJSF",
  "key11": "4iMTBGzSRoB4YRt4poafJtnDC3rboFFGv2UmZ3z2kj73fJxisRDvKd3WpP5jM5TCsYjDcGLNptBFwJpNTB8JvoZA",
  "key12": "51MahFR1WAD2UiGUPAcmU7idZEqgH1KaL3386nmqzns91LNaYJQ6AAFPU76FbPguqoiXSqxT3VdZArdiQM5kR1Ck",
  "key13": "2QqQUarLfTGCgjzC9vFZQib37NoB7WSmAoUdG5ZvXoHa3aRQTxcrJn4VwbrfViSc9FjDcMpakX9xPvyqJxiGfaBx",
  "key14": "ibcLSr2nHfp17Em1v5L8KdavbtVKerwe3bvw37C54pkRS1kCBR5aNEcTya47XEXACcMAw4j8eqcLJ1yj4wubwYt",
  "key15": "2Pu1vgoWYxuCSo5sNH22P2VsVCopbUk2wCkJnRbQjJwgKNEZWjp6CAEG7QPBsAi44W9cykXvt8zKZCrfE7H5N3Gy",
  "key16": "bbQRgox8VcH4NyQUQB1owaYfJUPgaF49iStQffWqSUbzfn4463QSdzJopwga1TcdmSVzNVjUZRtuUCkMdQZkS8V",
  "key17": "3wfcPm1u2eiKVqqrqBPo9H1uzWJ5M8Ag8pWAZkc6pMgqVu9518WXs5cY9PCUCjyR3bEPxMF2VsPx5SnaPuaYXYRH",
  "key18": "2dBDHSMh5ExrY3Y6iVnmTZfwNReJARe7aMV466qT9p71wCHZwJimzLdCcE1bHmM5KWTtN9amex3yZLPE49QG7Xdo",
  "key19": "5gV8nTc5xsrbjaMyqqqg251euJEdESZGKND8NcvJMjK9m7cuZK6Pw4HQoANhw99BNL5bZAku6QnFcFFry7r2cfgZ",
  "key20": "Z3yc4TSw86VSzadop751xCKP7hU6V6gwnuSayZUJ8PTSNQZpVP45cy5sjAWjyvvXg4tqHya21ZZE75mAjyv5y8g",
  "key21": "2eoUAacYEpDoYQLHA3umWtgd4SNnGtbSEXP89f7yQ2pZYwdJ8tRLAJKZAN4uqqxrgcHED9eZRJRmvDLGv94GUWX1",
  "key22": "79Mf9PiwP1j6rFVCszftdWpymEoPh9fL8cbE7AknEPJbyHxL2JN2YpyRk1CH8z5eFd3yqVXb2pfPTzRf9s73cWZ",
  "key23": "5nGfuLQMK58WPu2qVoKjdKZUQRXKKLBvWZ3JApKP9iNXUDTNgZ1d6wX68jEmAR6qSd8FcLbXRw2eW6DfBTTnkfEN",
  "key24": "4grFsYuMMN4GtHjhj26auzk5gbYCT944ogVox9oNaqbxivSqxRinKyVL9Kfc7P1aqyfVBQhbheAUBXscUAMLQfJS",
  "key25": "5ZgSLBUEe79nkcesxPB3uzLLUrsWHk9Au3cL8xPaqHPcqhaEEUpEw6CehpymHnxez4twdiQ65xW4iME83y1zMGR5",
  "key26": "3LSEgBMnqu2yA94z8xFvbCELJKYDhjbAcaG1Kvj4wpsg4rSG7bQYAXzrGCXt6e89LbxGc3xcRyUUktCRHfc9R3JY",
  "key27": "iCwiXMVQ7y3y1whBLvdvqGfuaSxTsKTMFcrjQxvNvcyg3p9zExbm1LLVCo1WXWpgnrmSpbTeYLJFW5ZXpcRMs2D",
  "key28": "9oURkBzhyrriHV1bQf8WmdwBwpmEkzHANiZEUSHfFmJmEfrpa1cBhfucF9ScVLJH6MnVBQceKLQNDmHwocRAxTr",
  "key29": "2YEEVQWMc6pna82b7NFkSL6AfYoYmEchUhRYA944nitEZTic5s4tKyCK2ePZD67VANRPwb62WUMnJE8YiXcbi9Yj",
  "key30": "3MWzASiYWzvxCqR7w1ZrBTrS9XrkKZa46w3umo1Q7HEmv1Q7TwXHgFULfLhVBG7ECEzcGiLtgLcgU2FsbbzG42ga",
  "key31": "9djntDu2oBjK9AZpFEfLV48xhv7q7Px5ARFGjyx7WiezwbEyL9MT2ZdKZDepZHzwiiCsaxjGbm3csE79UmuC83b",
  "key32": "9iqsn7a62i4qm3YHndiPzXw6WmsEvSLq37URUntGJhg9NnomkEGYyvn2eGQi8SddThwaWitzGyj9pPsULU3EjTe",
  "key33": "kSfMVBdxWXY4rJRat3MkyiaxtdNbMh4ngHjCCfMUeUd8HUmJFtCk5umhqGqnUq8CA7LVBiUKsakBiyV1zYztUwJ",
  "key34": "YPfwRhXnRrUh2SJeKeiCrtL5VCV24qKAZUDRR3tW3bf6t1KboEdR9AKejPwBRNP1Vdwj3ZoDm53XwBfGhrGYUum",
  "key35": "Rw6RUL2gzFUrd7tNUtP8TpjJ9NfZZVJWp4s5tiD2GEwJuFA982Eqe2ugxibq6HevAetj81kEGWb7BraY7cemoXq",
  "key36": "5VjBDU7HZgcPk4CMGU2sh9SWGoMqeTJBENidoMuKJD3KjHYUnw2Dmhg7JZZkP3XxtT9yZZ3TbzUQEYmVuBCLHuKy",
  "key37": "4cFSSBtiuyP5ad3tQJwwLsAhq6eYfNW8GHGmWHse9KZtqqqViySB47CmSKuzUDk6ec16hn2mT6nPRi1JRfY9qDwr",
  "key38": "phc27xqbnoJNNAeuRMs8ZXfvFoKuj6bCTT4s6AVmGwLwPfsvUjtP7Pm5aSBW8kEzCSaczDVbbnTPs3PV1zzd4kW",
  "key39": "3bNJXMRJd6enJpFwcGMYvmLqLAiZ7F5rG4sfD1ihftWmz9k1foy2ZhenRRJqNpS73yCH8LbWcN7GJ9SxJ8uyoGR4",
  "key40": "5f37NGcG983nWbATaQZbtqpQecaG13hNzQW6d3TnFM6fUGWKmDgfum2sByPtY4vWH6du3rt9TawaKRpv2BK1BfzZ",
  "key41": "wqiNSWUqkLDix5huQ714FFZUMQWPKMFco2yCBnLB5aGPQXyTiPHoQ8E9hPVfHbhGWBjy7t1hVUzeDKyHPjwNKLo",
  "key42": "4zCixTiuztEz2n7PPAocd37kWrLBeEpkwzbkyCPie9widWFfn83E4NjnS8No1G6zii1t3qT3jD1NFvM6VnEoXWk8",
  "key43": "4U22CM7bedaeupr2MDqS6YLcUaYQJjoc63D8KpCNHeowEWoFgJjeg4nHboTSkiZ9aCutUT5TnK3eUeCJwteyAQmR",
  "key44": "2qoxRkSmaQy8GhLMX3TQbBQs8vrTJRsQDNkPKvmvu6R2pyGTZmTCtuL2uszajdBBnr6m5NSkgbYkeNp5yKPM5fR3"
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
