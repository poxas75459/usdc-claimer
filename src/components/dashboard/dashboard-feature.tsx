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
    "2AgUTbXBaV9zsapDjykVvF2Xt6vwS2ZKmsTvrnEY8dbQwKuW5Z8UptzvfVTDJ5kAvfHcvV4NTkzKMLE5nXNixj8E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R9CtcLE268qTa5udeN42We5SHyozx4RHowQ1DLgBA5HQPUx3yBDPgdm2XbayE23eZtzL7qiui5fWqeF7WP9o5sJ",
  "key1": "3S5MonuA3YmAVNdmNjfn1CYazvAtLh9TyKPmQMQnR9E1wKiYWfTRdSPgYGDGPUWnQTpEZdoxsbTwR81iwJqXWEE3",
  "key2": "5JjkhBKUY77nq7yNvLSRyQk5ve2qfaN2iNzoK9Uk7RHdRto5cAoEYPBPGMqSSWVuWcuGWrDJsz9sw22kLycpkiBL",
  "key3": "3Uu8NPqV29fv9i2Px7AFMMywL9WbUiHWFaD5Xh4yHjXtEd2fRhNXz7ZSqWnccayqbJPDdozxuXnADkK2RJWAetm3",
  "key4": "3UJ2uuTbToqPSNKFzrX2sT6HRv6YUBQge6Yj8o9s4RgDTNT7LhxoqSCN8AjPdhqrKzmBMvjbHmFaRgye3zP8XX9",
  "key5": "3bQDXeWiJbiYBYhk4kjWahB8rFB7zFhks7ByYBn8REsgqBtP7M5YuBhizJ17bdNPUH9xP3HEAbup3dKyEgCFp2AH",
  "key6": "4zMLEcrQmTudXe8MNKgMsJvJjehfiwGdovoYGxziQdrgDRhix3QfXQrN1cyAqyagWAEC4quxXndap1ntZPcWwdJP",
  "key7": "2j7nvoBjjBQDLKreNVZK25b2kMfqTTz8ueckg4oiPUZeZWxhLxSXyrvFNAKhYCxT7h6E4XP2rPystzMEmTP3Z7eT",
  "key8": "2My5acyeRzb1JXFib7MaFuY85URzSH8t1AGhbz2n3Y7JMJRVWsMSS8N8YvdhiHBdGtZwrs2FJv11NEkmrQjUNfob",
  "key9": "w4rUcMnsC6FybktSCLsWe8R8n82eYNV5ieDtehmo1pGUdDrHuXzn6Kb7g7bZ9v4Nru1HB4P3DXTcs5d1oEgQkQc",
  "key10": "64CBnvxw792MtLn1AKkFeiVNuGsJbyKJWJ7WnK8qa5i9yMeysCsmJ35cUScKp7LmcEXqqToiVsSRRknby7vETHB1",
  "key11": "5dsgr1wvfBwVL9vKiMTbvhhXFrWnPZxrBUK9ZRQyXVAf9fRwsM4phCmyKXs75z3A1pKtA6L3WqcV9UsHXfdnSgPp",
  "key12": "5Ly7YyHPCYJso5fJZiaoT7GjBw8Z4Fda8eJdZyKeRH82BtDuuEpiv48JMEhzsp6YvSXcfQLvffSA1TZuxnJShFAE",
  "key13": "4SVGA8dcvSzNHEnwPRzKbxwAs1Bsoydgj1ZnassykWATxFZkpeg2HLbksn8tJ8QYkqYNxUcFiTbRPmJDsykhKjoM",
  "key14": "3uynihsZxtAKAFbKDNAGRKz1L48qfnuZGQudmkGmWg2qwo9con5uq6B7cGeJmrELvdrvnRX5o7k87vbhVCMwveGw",
  "key15": "4BZLU8jELg5wC7egtapVCTmXdw1bAXGxwSA1hnMGdTr1UKotcWGJCxX24Dk1z4mbCdi5Fum85esCD9xz1Dr77RjH",
  "key16": "5Wys5359zYoSRwBB6mmJhtdoSL4TPGiyqTM9PbUTZ7hge2Wziut3RMisfkWbginov9Z4JLbZCWUkxMTVb33B1tbc",
  "key17": "8CW2pveriqp8Bs52duKzdXhzou9vUp2CVVCoUsY479b2wLMBPhkpJtncuLkAazDnJPLM7QQu7S8yfSmMaR91R4a",
  "key18": "2ay2DUVzJBjAuddnVzLP3ytd9eVCRbB5UKRjPZffLZkVtfMzvbp3TGEwjxPZGzRebLfeMyvGE5DC8GVXQNKtcQAp",
  "key19": "4VgnRcr5ZWWvUKqtF4eDg6b7EcwvNrXmpinutfeENs8eUjLJPaLTXdbKcN5UBQSviV389s8k7mV4R3k8MmaRaogh",
  "key20": "65rFBD8dSF81v6BCHbTUjUcQg5qMoVgyXf4h3TpBQhGgkVMQn41FczMW8DSjptY1zEi4bqBhrUVTzK7nFoWhjjY6",
  "key21": "2rcLAfr4mPUfhQu2tUpxTULeHz3NMSGE34Q5soWv56FEBocjSMjyVTWgSvpwFqBoEo2tj1JNC6Z3kc5Cap6sD5dK",
  "key22": "q4L96j3sx5WoCkpZzturSwKviiLHXVCFwpWdQKZKgEoryTEzkvqetT3zQdLDNh1ToQ1ppmYgGqdKrDW9nRRW942",
  "key23": "417jSeMiw15rRGPjiTRAzQnuyC5cVWWLq5CZEXGD3YAfZamzFw7c6Pono8JHVJ3JoTUVajXtEbVQ1vEnKQXMP8Ja",
  "key24": "439S6R18D4x3a27UmyZp3x5whrLaRt7LHnGEzRDJ6UwBivvgtN3y8ggZmtkgrdbM3HTPUxWQzZvHfN4BzzwggnLS",
  "key25": "31qAuKgD3BFrhnXL4DUe7MVNBZVeX5eMjfAsBq1UMtKVorXKkeNPYEZW5fToxDvg1QkW1Pp5v8Pdsw5aarCEWspq",
  "key26": "3rp3VBLCdkbAzs5xHSeU9D9zeMeSRThG5TjYuDUMVqo2JMfpH6nNPvmpNtXBEjEDLmuMQkuk4PXSh9GEo6Ed8BFa",
  "key27": "511ZGP4hM22dG6vYMZPY6TAESRzMjjxKfkVoeyQnZAPZ1U5N7JVfLVjoNVmT38fkR9xfr4FAMvHLAr5b9GDoMDuy",
  "key28": "mi8WaAQ2YSXHxaKm5pzWrcQ2jAqa9zhHy4pgiYQZ8cb1twj5CaZMy2jhiWhzoZrGBtath4Ve7qoX3mwCUUX5gJe",
  "key29": "GM2ECoxgHJ6AQ7NLvaCx5TJuaf95mu1kmFRvFcf5SF9h3qsJeJDD1LxEb6cRPnJoCWTYTHauEgrdLTJBi5zLDe2",
  "key30": "4ZarfxkZhY5mo37Rsjw6cGzVbFdV5QTigdZvcbk1szcQZWsd8rWjkiHXMZU1cqm4ZS95b6C53i6xC6dpKMA6FsnU",
  "key31": "5vahhZ7W2mn8rxTL1PC2z5diDCbh2sFqwwfgLdQLRByvdjnnosV15P8GPVrqrtwPjuGE4ALzotn2s44VfCkKw3rT",
  "key32": "4hTCuNpBtVyqpNw88511Gh5gPH3gpSSrtUtHaYFQHC13fFBNTedZ2XripM1FFbgZeqWfptPtDYKoDJJ1UiA2vr34",
  "key33": "4dGRZ7JF8mCDkWeL275zgx5MHtFNmzrGa7JZjKoLVsdRc6PdKcKaUnhuHDso5L1CdFuetx4Jwn5HMMvND62W3wvy",
  "key34": "3rCveU2MKVjnp2aJbqnxCbvaHTDahAFgyeT5YYBXL9QbYLBw3WY6KH5h8oF4twPun1mDuQVazAq6iHZRoLSbm1Fq",
  "key35": "2hy5tatSgPSyAESN2xEjun35KhReLqipDdbBNNG7r93h6UEH7v9wsxYijoGRdoGcc3VTRmV3ELbLa2VAhHESPL3L",
  "key36": "3ZwSKPVQiU1XfwmdqjVrnSffc6DSf2ZRJkzt71X1GGCkqsauocMpUMJ4yLBgJM9V2wovBQJncdexEjdi6Pnr212B",
  "key37": "pRbWK9QuCJZJez8tPyFNXv4FscHdmivD8n2tSjewKx64apSwMcVDMD21DCBXL5awYf2ViYdQfFooTwyLCuHxFAy",
  "key38": "5p1ABSVc5DM3yNSCXp6xFKY6ZZXJ1GqGD8FfA8ArRxBLvpjDKf99HoYsp5dSC2nTjeSBRaxjd8aV9HhPVb8QkdWi",
  "key39": "BZWicsMeCGLzSURcfbCLgZmXFJhA3RUXsNdjbxA55MaQ55YRQ6omD89Win1FaihsssRdGmgnoxscrGvePc8w72H",
  "key40": "4VvAQNExmsS6GLQzGwTNFJN8Zy6si3uCzpnNS751gdD8N9eNEn1hUMuCBW1UcCnoR6tM2T9hWpwRWpYBehkzebMu",
  "key41": "2UCxgutD1TQrqWbdzhys1hXNNkK4vvDvMDUKK2hm4grf4q1jedorEzcmTVn9iXpWci9ZZi9BPEz84VAxDGeHPCDf",
  "key42": "3qxdCoTRvckmEQvXZ7zke9awUWibsKS78FFrzfX2ppnW9cgPRhFrZ6kciDbYbnmYcoKg6mMzWTCbd4inRo1VLp5T",
  "key43": "4xTesGmASbDRw2MqGkD7ckjDpN2E8B7TiBHnax21sQZdorNvQzWan1qPqubmhuMsiGZMJfXY7H8uicS8cAWiccEh",
  "key44": "66U5aM9dXGZUu2UYFexYSFVoNg3QgK7v199nDG6NfVPkpk9HiFLqniGEN9zvY1JFCVgUYftKVHx6vRQgFghE7yyL"
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
