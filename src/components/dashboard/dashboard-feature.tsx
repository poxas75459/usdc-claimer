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
    "2SKkLQUFdaBVMnj5FBwjAdZSHrBTi1Y65PEZC3fYBGiFW7NrciEvMVMq1LJmPjxoVFyvigv7pd17qgYZhRwRi3YW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sRDV4zYXVbLMYfoojZ3q2Ybir1k3nxJ8WqXSiCmcBJL5Q2Vjsrd5iJWBp9sAwhmSFm4w4ixycvPoY57oFr4KdaH",
  "key1": "2uwbMia8NYHUdZrDz5ucWneR7jg2LGHTpAozeMPhK7iRh1yGkdKhr2BdJePFyqt5XDzjmBGZF4KhyzLguYH6xbYs",
  "key2": "poH2cpFQKVFaWR46riAWdJhvSybWQuPuaM6FKMt6bwvwJRkjf5khsfqmvUiyidSBhN4nEQWA4N2F9LcoptoHTZs",
  "key3": "3b1QsSLVkNZSTz3wTkgsZGiNHkUM1euwLuERmeVHwFAzHKd6m4bGoBwABcRmXy3HpmgU7dyUkxN75ZwMsDs1hHep",
  "key4": "4aL2oCTzsCtNoqb6XhAWEqtNjQK4qgmeMCVThXJgfQtApqaRTciij5qXmHh2sTwN5qvdaPsgpkKJdUyCLWG7pUBe",
  "key5": "3ULibV9JcLDFLaafgNGfLBXVJvSgyAeo9yr4wkEPg69Qa7Ks7BSR6AsuChftuLHWBoNkTUJURfvcnWGuEmCcJPgA",
  "key6": "4prfYp2DPX1u47oGH4H3B72B8wGtzEnNDmGjjhda3JMrazGLUsJ4V5BFqEqH3QZcvTHqWZQoYedTn6veXNEtkWZE",
  "key7": "3yAYPy2ro1kR2LUh3aDUczxJQLSWPWamdttzfM8wE4pKiLb4WvmkGEL1xLwX2sZ1CALBLuC4yznQHwG5KVcwQo9Z",
  "key8": "524nb12EfJy6hQKUEmc7tJgac7ab8USzVTJfxtZqcbg6L76km4jsEGarQXJopWQQSYEfemmBd2T3ysMk92SNPK6n",
  "key9": "5GoT2irsstTuPRo8R2ANPMMJKH12RUJBnyAU6JSfkLm86w7g3p5J9XMdiymGGLeGHy37BHWRoABkJaUunQLXSpP5",
  "key10": "2cniVdMnQ6cWoQDwsJ7F74tCuruzoQL4PiDNcZpm88D2yhEAqeBJxoD4hSFFHn46a2bBm4iHtLrzfzYxP6K8tEpU",
  "key11": "qY513hm8vK6qtNZEo7GzqPGF5gvQy4CqGGbc4WdfBPKEKzGn8fDeHgCDSQ1AQ8imcjxEX7feB6ts9kGox3sHr8V",
  "key12": "3ZSH9mtw3FLiUQNy5MnSmF2j823vkn3szD1BcgrMGN59kctJdgYSf4Z4HFqS16GpWuhxSCH1DApneHe9RPao61xj",
  "key13": "2tU2tFcSUnpxg5vLe6i8PxFDeqEmU1Cqdh5BBEKPupBzsYp4cWGNo3jME5YYAs6AHrMCXfgoPcqmAvVmxdsYM1mp",
  "key14": "zZSowC31kfrvJKtQTmtN5wz1E6rDPogiiBxP5M55yqmbhCwCiqR8WpiUpH5ziNgGqaHxhKZb1e8fLtQckGtWDgp",
  "key15": "4vF9byXjm41rpfYVk2P2na3RtEhcVwy1qjgQEbKi2rivzzM1JvLKEnbSTo63hS3QNVXAPC31feVy3eEsxG4ndRPH",
  "key16": "67oReuN6X6X7sEqhXSd49FAtDa5DJNFRfoDJLXo4vuPYhi6SfNKMh1ta3DondnALnp7GhmpZdjuTij4tRnTmT8wT",
  "key17": "NYiw8xJG8bjoYcWFPbR4CXzaUi6suNW1Yp6HPFWHGKmETc2XeazVNqvh4FSatGfpWzmFtXP8UjSchdF6xCHd1AM",
  "key18": "5eLNXCnPZg8dKzcoL1AqfiRLbZHKx6VHNKFiXgn5RCXK7trzuUb6bChTDVbf7gTg6Zx9DakV8SwAwWJ3g1wLu624",
  "key19": "37nLCp6Kw2Hmae4J93p8PmLctrxi7R15cfxzAexJ9JY2thTsPBSSeTJrFJTSyfDJmcKJSQMe4jxkWmyQWTEAo6pY",
  "key20": "3sAxieFvpj8xVD4kTTWxYcWd7N9N6fXZZnqXRqne7yE8owAPjsq1BhKmDnH3yBPcPVEjByFErTVkWAHW1gmXdyx4",
  "key21": "U8XMWyBPZfz24nNqt3YpuzYGMYVqD2o4b9NgYkDXe9oPuu9YKhMCb2BMCCnJ1DW7KpDfE9BQPHhuV1nkc7otmVX",
  "key22": "ikahU5L1CNt1dt5zUSRbqan2FdaWg4QF2aEJ7kzF8DaKxBEDMQJUmVPmsJvy9dssrDKYdu3xGSsk2Qmx2M5FeQz",
  "key23": "3sKWBeycTDutAb7ovfEwnV4GbsWzreEucA7NVzYH9EaxyLP92JEgRXYb7zpAGVyPVAcAJgtTxmmvQ2FJXPhAPL1F",
  "key24": "2jvf9wBqWhBLLcF2zXrmyXHWDQuZYvuqvm6kAk3Ba6NNKNwaK3uNE9YREJqZekA6LfB9HiH2tbrFih5wqALZ1cCh",
  "key25": "2ErNZwK6EsGaSDE3G97WzoqSo3Lta9UErknTAqrkhce297h4CamZQ5wfHAFefBE18RzFk57bwDduzPEHsRXRAp6D",
  "key26": "4CV1QjKUBJyDejMfPKHo2GpbisqQo6z54hCgGGmYQaZebMBAbZSgtfMKZWbkBjDi3UmcmZEQXi6pZsfFca9g4UXF",
  "key27": "5iZWpA27cCZ5HzzPXeFRZCJsvSSUCobn9XhartqXv43o45szCqbTLT18JSSC6D9RNp8rq8SDrjMo3MRCB2c7kb6m",
  "key28": "5UaeHvuSFHfvMtwt9V3J5K4ttWfVuiikaeBf732C1uXQrruchEZ2q8ja5fEXr2e8ABxw99vSN9wUDY4hEDBqxJKQ",
  "key29": "4fzfsvPFSX6jMDeh9ZBqum5xwGGCcwyfgCAkcLJE119ePh16i1nMVLVuyaDSjigyXHuYThZ5N5FjurE6BKehWyix",
  "key30": "2b37zNFiy3vqtYbYCpbfvf33Qod6T6xQTaQfhpEZ2Bznj82HrsXFoVQrkA7TBa8sDZnh75wJZ5S3ETY5TqbnDR34",
  "key31": "2qUEBAxJVzwE9vepP71JSTbUjbMdSkQA2xHTZVyqd8HBBYCGH3TyoX8NQr2BZYdL7eW8cTzD3vqU2Mhk9S5txDTA",
  "key32": "2CAkNH68EWjzgfzRnx1RgHHvkLhmNJuXTGUDFCZPgFX1PPJH8Me4c3oBQm2N6gJNqfvJkAQ8JQWvDr3LCT4P3TeH",
  "key33": "3ei4u7tRPV5ktZjCoEkHfobGucyG1WG6HnGGVvPJ1dVBTMcBdriu5xgWwhZ8AxHZSU5BQF2gTpsnPaDB8KHQaAcT",
  "key34": "2Ti2XEGD9trPSytyfNGRwT4DuVfS4Dhpq6abia64BtmxJwKcL53NjFCyH51An9PaK9XTNdb2dRskzNqtsPhXQz69",
  "key35": "5kJbUTWSDgNEQ9JfDJsu55fk6RLw13KgTADHWTCtdbazcnNz6ewjfbFABrmm9hb6K3YWEBRpjMBr1BEH4P6B5vPJ",
  "key36": "4zS3axGNPNEVwyuXQB3CQKcJ86ggX4FcvjfV3UcvrHhX2ottuhZoQkBd29UiErjtZjgKesRRkSMHzgHF9WsDdFsC",
  "key37": "5dD5CtUuwaBog4f27r8BBvZGPwZXxgqozDyDwN3jDknFjESePnB4ev4KL2e258nGqVzzaZxmbgaRtgr9fkH95U8r",
  "key38": "2LhienCFTYfkLezwZ4NeWPkVNnGH1FkghjeWMJwFcc2EdKagKTSMyMQyN4BG3G1J3JLffqAUsgHUBionpNQ8gmu5",
  "key39": "PYti4HbGqgY4PoweGbxGyS9cwoY5okWzV3VvWFBVridZnA6dV81iq67Y6aumUaRmjP7dvr46zrUPuKp3XVKUsGU",
  "key40": "3dNLs3xe9Fh6Xh9Eet2sbaCRLbfWLWzxXsariHNzG4P6GJPofWzkhrnZGY1TV8K6eqFKRRxnh9RHV3TbkyXztLgN"
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
