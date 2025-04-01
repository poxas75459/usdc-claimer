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
    "5PnrSEHxL4UDDJm8S8ZLznKwwpAbN2UqJ6sKdfZH4ppFPBWfg3ZPqzSeygXxKm4TeBmRVGZnndLo8HZC5m2fDM1c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N7ULJXM2FJtbVFHVR7dH4sGHCwDa47L5y3BmJaNKYo9JpFJMYjYfNh6B48LjVqG12MKE8uwchkvPPNY5q4fMP5n",
  "key1": "3Kwgvb4k9BZKajxDs1oHYfxyLQpmEeytvhNXPJ8pegEHS4tB4wvU75xhQqgAW6YiAWJUMJdTHZp2uzKrQX396Wwz",
  "key2": "3CN2qTWkrM7bHEZdHGEEJH6Pf36Roy47Jj1PoGM5rYQVNcBMG95FJYbc13n4C2hG783PYZMRxF7BV6WMGwNQdurm",
  "key3": "2CB4YNpyTVz7skvehr45ho9pmFqrVenuiJGGNbctXtYRnnN68FfaVvonrMFHaDuYH35QWbrNSokQknfqqUpTTBMi",
  "key4": "PyqkvbYWGLhGgXobtwXH3HX6Bjfj1UbVhtv5hGpiYqZDaP1W64KzrK6X1Cm2zZ85jBBgy2iohD2r72dYQVP8Gox",
  "key5": "57Di2MEzW39zU1wCy9Xruu9kU5v4EhdLvQYF2kgEo7tvKQMyAtzZxvr58W9yct291oGBHiDurV7pVNFh6MXrntEe",
  "key6": "2u61eHHs85L2LHZYRjPgZN7E1K5mfqttAGEGxLMEy2Ag1toRaAQ9XNK2wuehwMXL9GDsL4osFoCj7BYLqszijND8",
  "key7": "3pJ1FWkhjReHhodb1hqAVXe3EvLAbPMBVVYBHBY8doSAjHancSzsKaJhcBxXq44GzythT1pnWb6Qm7fyn9Lefhzn",
  "key8": "2TUNxr6mN49n3vngj9YrEHbDsAFTW2jJc1vCK5ch8ZHyM4v7zGAsGgaW8tzYcrYzfmkFFTHHfWxJNJrtL1UMHTxf",
  "key9": "mtp5vMBTeMCUWZMapcNRyCShesggea5kyrpYBFwptnXSx4Nuh38fGbKMM6W3NXJy8gPJvDZKEiCXqko2ALfcPZE",
  "key10": "4BQooTRZHVp44BDU4ThvW1zPzh5icn1kUa84jwMyKQMMKj4LyNq7ZctpjNrYnyfAkxScmuQg6rVfpZZhqJdBivgh",
  "key11": "4foA82hiYgNqLYFm3Ug5ZwWUKvtcAVAoHodRxPeXwHP9tgvfr5NMj9eeFyHguHwb13T5YAqV7PSMVYYuNovyYfsJ",
  "key12": "5vQReoFBHiRwQHuwgP8YowHS8VVJa15yVz76Lu6CcEQqnhf6gegENLPTQN3Y648AvB6hAB5RU7gfGW5WL6Wb8qUG",
  "key13": "5P1jShQWBHgLPuJq19FgVguwiiGpvQ74JfBVzVc52wySK1uhHCUNRTQbeFaPBaoAtY5QUECuo4JYfBQCAdXnsFwm",
  "key14": "h7tCT4Wi2jHceoFPv7v9wH95ggH4ZJ61uaua9APqiwUtkBq61XZpLN39vyKLCjiShrpvXD4KgAydVmeGP83G2Gg",
  "key15": "288DE3k2pfcD6T3murR2qLau2BxxvPUfCvq26WG9erih6iQ3TaUUPJErxxn88w1WWjDDFQfGPn5ytGMVku7J76JX",
  "key16": "48PobyCwigGd2JiLnA25GaekqYEUS1GVPQsLQHh1FFzLmdK5ktWLWNz2vAXyrfW7uhrZwz36RRtqyuSduYeVsQHH",
  "key17": "DefnwW7tMXgUxFXbW2w3kWdCqULkJJanJuwVTuKNa4M6xubtmApf9y6VeP4ZpD6UUCSm7oa8Jeh287GEJpHYXsE",
  "key18": "3UabNffAxrJ34tovRuGVSmPJR2kaGmsE6nsqzL29HfdL2waRJyiqYQLAuSBrCfymhKpE3HuWSBp5vL6YcEbQbo6d",
  "key19": "4kS7vJuLzRnV9eozmcbKP5hYjEp6anhUtTKbgBpsDViHhhxhzgYNbWJ9FDadjUspyCSw93kdPkmGXhbrFqkW23M6",
  "key20": "KJYR8J2K4DTh7NVbTaZrKLeKkcLG9sCGjRqUQEioiLdfZhihrSUYsbWhfuD3Pp2XXux9561tP9m8qDkzW8gAjUL",
  "key21": "3HnPLwswwUQptjjhHTQHFUY33DhLqZ4C7Qcs31BcB8h6k2PRZHaffUT7pQMLugrwRdQk6D2iEGSDZFZnDMAm4ZeS",
  "key22": "5w3Jx6amG78NWeQxyQH4e6vgVBXMrn6qcfbYdFM3n5cUKWQrZTappqRzUG6vRQNZE9osefAB9fGadPbZP5mUZNVu",
  "key23": "5hTkyYNdwPWdH36X5X6eS4PdWZq7hJFcWfanm3gWWQhUUCQxD7693qjnxZbhCytKP7rxE159UVP5uST6NYhsfboP",
  "key24": "bbKLWxE5XFHz1PuKuUsbhWfDRQc5vMhL3S82R7FfcLFBZRZGezpX2Lftf14RqakK8ZBH6MTiNBWXrUhUbGyGYAf",
  "key25": "45aqNf1RigDtCJNvznFZpRuEYbBCZZvFrBFvk2oFi4isxJ873Q5FMutUr8r4figFnDjDUqo4WfBAskvXkp1Kx1GN",
  "key26": "35uyfowtxkrKGorqg2FYtdMVcco6Sy2BC3TTYg2dCqWfCNVBkSmmTykvrtMdfeWZFaP9Z543SSKHL2PcrwYuVsDV",
  "key27": "24Xb8owRs88KtCB1TqymmFiw1rTp77RhZW2UezW91hnmwygbYD3gD49W7qNLotS4xaGLfyJKR4P3S9DGn1EJbHdW",
  "key28": "2Hw3idhw7c2PkUSLRetEVBvokQKAr4upYPeucAdZPgKtRPW83cqEuCuxzWzMHfXtbUwwn1zoeBE8NsGquNTYhd4v",
  "key29": "31co8zSj78aDT4tDGu5GDXFDvFdcH9Ucnyy5MCKNTJavp5WSXs7C6dTyQHQ1xuNLSAxwG27Zx6jg5wLN44Q6b9Bu",
  "key30": "33yMxXAxFmjPRfydJfz2Vfc3zi8qKJARv2KBekhASB9kxDf5S7RM82wmFDiZddrdN1t8gKXg2JR2291i5c9CXKSz",
  "key31": "nmaarJa43dAwJ4U3pJ4TtHyuq85U4Nc7FwtSuRuM4coeMzyZsHf4ubx6gnSvV6wq9ucaiyikypxKWKKCyNXkQz5",
  "key32": "21yfAiSPEJjJKRrRQbDGsiz9QFchVE239RLAzeQ6gxj4fHSUhDv79YupnHLVL3ej6R6ApmhxHAqvdqvfr5tUGqTe",
  "key33": "4C6ykz3k3GRBLVg6fPpD7qsKsoq2EryfxNX3k5cHiPbDM6iifH8GcQTqD4o1kLrACjd6jcT4xqJKmJ8hMxfJynSq",
  "key34": "4T1Y4H4bq9BirHmE3EQbrVq4cKhemWrw2AwrCbZk623rF43FjMkLYsVgVHhUjPToYeYiRraH8AG8xabDE9QZ6uDV",
  "key35": "4gagxyRt1TQpWgbaBFHnwNZtSv5c752zqwfADqrDdsefE72QSZUSf3GZdmeknjzKCZv7xhyB9uhsEdTRLKaaeTuE",
  "key36": "31ueeFXUcY4MK35iE4ByvjttHJEF2EyjyRxU92PD6nd6vCStNtXi3vqPGvyhs5RUqtgud4ddPuq8dyzby7YcMfgP",
  "key37": "37eWKYW6hWCDrYQs5fMWvxFNRibWKXzj83xpvPofj8TLSEGEkg9N7dnj6SVEeDEeShKPR2wThmVjnaGGuncTmV4r",
  "key38": "3KJh6qonB9mxmfH1cGPo2jDQx4fptjbiF5qsixqA4p2T4cyGnKkk65mKbsCSca5AwAaq9o2MjRuqxAKLAiNvxYFh",
  "key39": "3MA9hvE43ExamKrP9d3xXwV5EYE78yyaikwEod5nZP7r9aXWP2jsVLtQy7bm9BmPqZjwJUdEpf2bdLNrnHUxusnQ",
  "key40": "661KtUZcRXGCmuQ9exqTaf5RtsMUPUvPK2RV8YUnmwsRWcM23sYK8wuyQFY2N4J3GkdvxCBxsBoN7A3HL1wS5b7G",
  "key41": "5bF7Fe49K9AEuNip3KPyrSh8dx23o26okDqW68UnWtQRqJXFSigvhER6XSwxMycRAGybJWuMGrxokUrMc3QNmX66",
  "key42": "47HtvG5uNk92drQ3aHAD81tzZ5GLmsoXFwphThVJNMJy4aHPLykBfHeTQZDzqAM9rqpGhUMbaYsHEFr9YjGMXtgg",
  "key43": "34whFgyMG8gojKA3CYZyxRFUkAHH3XJKEGk8PJ5kWKN2J8wRmAqaNatkVSnGnr4ZsZtD4R3kUsHzEiPPYWgJvYHs"
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
