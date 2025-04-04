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
    "4ZnysM683wnZKDKSQqeQhQLWPxBogYLFMX7HiCtW8rqXMx9XdmbMH2fHKo7pCBwj9kXNTZMsTnkyp8ECcqLjLFNi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59TAXJTzVrSphLqWdatrzfQ2SQgr6pERTP4VpDacAiLHFAcGasKD2H5qdQixEdbYpHepK7F65GMA3oZWtrPGDsPW",
  "key1": "2wQsgP4pkQcPKCGnXiSW4n6NHxiuiB29zPwRUyeoRwVWDzuXHgrxStNnwzbQLzgqnHHm4p5xpMBJ8fxAAFvGp7Mo",
  "key2": "5TL2yRHfuGWqiPfD67DdPeRvFnaPLVjR9VdctVWG7ge8BYyVyJcxLJtJa1oJ8fRTq4nGE9ZPZMNhtA9ncRPzxyC4",
  "key3": "yW5XFTxpzGmfH3VA1a8y19ChXvzECsJjqBbZLPpyM6GiPMvmC9sstcTV8xX3VbqUbwojNJHTiH3NUpFUtcEgByo",
  "key4": "XBMmhFkXchgULFMsxoSQstQ59rjJzpLEt47D1U5rg9o8PScU1UHLZwZSio25J74C7MyFV3UCmp46ovBYUsnqoPd",
  "key5": "3o6vUinWFFKVCcaKpWkJsJe4EyHCRtZBExPybQLJn1xCVGdft23Us6N1cMAbeBZvY7hbJYDLtFn9HxafP7GDY47a",
  "key6": "ZHJ6bUbFg239zkq8CPYrksZYAjhqYAT2HHg6VqZj3joKDtmc1Qbu1KUU2rhnC8TS1P23cYpMTpxquw1yptBQvKA",
  "key7": "2Q3UJB6UDACAADxP7V5DMKA9neeZvT7Lsh7tdYXQDKFMZx7CT51hVhB9kV1uvV1mZsbeZD5gpGvVygBZo54EajNB",
  "key8": "2HCGbr5x5xMmY7P63GdtPZUoAzHTyqAh5K9ZhMD4wk1g3EPsvnJnPNi8Bu2SogY8RjmQGDY2JUxZMR8Vjhb8gLpW",
  "key9": "5yts7AFYyxKvCySqnd8yyZN8Urjq1cnky1aT26zcmv2g2K8fw1wa7kvg429UmEZPFQa7v7BZR8QoU6DkisJYY9y3",
  "key10": "2EynM6joecnGwyzKNEvT81yfnrJGkn3e868y9TSzhNBdVb1LvQM4ettadSkx2JUUXKLJNrsxYLs8oyvCcTqqH4GZ",
  "key11": "5wnxxNP4ksCdnw29eRD9XgSbYiB4AzStUAzRZAHF3fYj3LEVyvLcX1ZfrSp2q8a7TbY8gxHf2VmKfAR18ypjjj1d",
  "key12": "4J4Zij4qybq6NQopi6usaSeKTindd4agGGkqB1RSfWZKwW6qSfZbDUXVk4mW2mudFxZRJZmh2kyqCXjUoXo84Vpi",
  "key13": "2Ln9Qt72pAEkJTRF5fuR6fLoFvRB7kbiUzRAm7vdRrH75TmYAtB3GQ4rXhuR2YYe6eUgf573oMinDUNpBjT6iVgm",
  "key14": "5mp1M4ejCbfNNgf1X9HEeZoigDBUybjfwwsSRwZqYgHX31KJaFfTN5NNSswGWa1xvZhUUosXk7QaAQonZmCRQJFs",
  "key15": "5DYPmEsqhNdSfHYZNJxxhRkccWAtWeYAmrET1FbwwBWyJXXJLmRRJrJ8fNrzrjhsGZweJViuLcSug7Y31TYehk2f",
  "key16": "5WxsaTeCAKS6JGA6HFaBajpQju5GVfRNNqiFMMwND9RDvcR5KokrVBPy7hcVDA2gGncrMiYsUTupDbpLNrenYGNk",
  "key17": "4767aLhrQFv7BGa3p1yAg4ibHnKy3iLFbuCSTZ7Vymbt3yFXR3X9DvExjQnYNUBEf4QpKB2unUL3QUAi2uAZTE54",
  "key18": "4YcA9pvZXLZqEkoE6mFmBaAYycBCgfDFAzFyLVyj9WhABaUh382tyqN84oiqBiSATL6XdGNCX3HjuxXCFHrHujgo",
  "key19": "5BbFfSmsa2H5KLXAZcVgpApypjKVBaHxbq56XFDPaibU6Z98Ag4QG1FM96uG2hUVJje7JBKH9iAmPSSG8iohnZva",
  "key20": "4NXNydg1YopLZAFhKm96HAZPFWvJTc9Kp8kM3KAe6pN3vHEuvRkVnnh6KiRK1TGTXdTwvpUy1DSGcFambPBYym1r",
  "key21": "KETsFKCat1GZsUAVXQiQWzAoNCKLqXh7aEH5rd6H2PqJoNXFAJcc2pi8QNkQzZuDxMS5ju9GzDWqqMrtNPdc2ie",
  "key22": "26fCJStwc2ZPSzxVNNbrshmUUdGbPaDNe83iv8XRBdBksF6fzz4ZaJrpHCHK81XQLJziXvxmWGCEZcRi3PfvtgbQ",
  "key23": "4cZSqm4cQBrScP5uSbxafBB73kxPRv3FA52jGnGKccGT7UqSYwmkhnHGg7ibbSCrEmqN5E5X9uHjqqejrJ4JxbFZ",
  "key24": "hhz24VJMUoxFgvoCw12pDDsMhfBC1WyeiBmCX8XxHrmhGAN3eT5K5FjcMLkTp7BMfE6pQyE577roVX97T5th2B4",
  "key25": "5ESoFecfrLL4xpXR6GZksE3Bu9tdD7snMP45QQ7rFxqibHMH2reot4FEp7t6nUKyaByWBUBSUoGaPyChRgvFCvFm",
  "key26": "WfW86iMpF2rDNorWWyBDa245XF3NDUZGtnjgXe6WKBnTiiLEQDebwEbYAVGvhdRFqHeCNoP9Ec42EVGMtZ1vLv1",
  "key27": "41ypy4cT2zFQxnJsEYzfWs7ennU26DGJz5m9iuXF6cAcXrDAjPWZkWvxGSufTbFe7AFDw9WTS4PympHJCvfpFyXv",
  "key28": "4413L5RrwnudrZYtvRGmFrnXJYof4mFTHB2jmdfmxRsRjwcfxNPXLuUyU6MAEmer7zBYLCRPoyaBVGLGSE534Tjx",
  "key29": "37ZBCyA6EipxHjkfWwaBjK6N1o4vibHkWQEAApzcEYTEDbUXnQwGSWL1FZ25zovBnR81owi6o9rUqZJmaPFYcFzM",
  "key30": "27C1TFg6k3PMj9Z5CCU4GqQfJcToWUgszqxtgYXgGxF62ECmwWwANC6nvPzEUE1xtb4R9fMmLKW8L8iZNqVZ7zd3",
  "key31": "SkmuEsHfpxwQA4jR1kaQhmYg2iByHDrRTpqxKxp8XSRsJkvT2kmTC5gavMwJB3jUUNwGKYzBcmTPjRtnep1z6y7",
  "key32": "yb47jhCiF8Fp1ZPgXV3i9PqFXfqG4tH9VSGwdcTUZfg6NTXj2CQa56vkZLHf6VQ2jAaftuSgPKVy6sJuKNu3PBT",
  "key33": "5gZLrWDk3WBFT1JdK1ZMm2FYc4Zs6FR89cpTKNWp4JaMeukiDUeNkCAefNwssDYrXb1b4GpVLzxG2RRJW7YHwG1R",
  "key34": "279nULxfN6AMudNsGbqKHDzEXqNBCeKgMov3Kd11C1RGn2o9RFKDFbGQu3tQpVkW7VWRwxYwn5HqvtFeEzULwwX7",
  "key35": "SCjQGN4qheTjPuDiKYccRuH3SprrKw1B4Hok7U22synZ3k3bDHjxskTRdAeKVDyFpvxUJ7W4RDvZVFhGxzoPrtw",
  "key36": "c81CwdA1q56jpQQ9f4euhkwh8L4qieNNNs14PmMySf3e48aRgJMrYjeSM8G1e3MXqo2ePwzhwBCSXELgn55shgp",
  "key37": "AAHCWSe7y4ZqPpUg9jfTDSyKcMqVddxK3aMthxGxNX23fU5bqhXJL9HeT6x2rSRrPHSjcei5oHWLT8deG1bpbxR",
  "key38": "2BXHjdfe3gKgfvAdqbNqJqAmUMzdxSRuU93rKvT9KeZ5zAv8NVAjbBfgY2jGZko65vvDD1HmLiSCi79Jz1Ce7wwC",
  "key39": "45Q5MdkgQ6Fvus8N3ei9vish8gGjHe5Kvo75GYAy6Mty3NwEZhMGJ1osPg2YkcNrzQ5STVe2fhghufqE1uUcr1ts",
  "key40": "4B349fDy2NUFqjNZjYna7RJx9QNdHNSmdkGbJJhLgb3uYhyYncUMdq5qAggyo4Doj9Qex4ituH3VZvt6UdwBX7H1",
  "key41": "5gZDtuELoXhJA86LJZyYF6AJ1YX5skNpCEk2n8JQChTnoY3RpKKWpSLZtJP5bQzh26hGomJacKNMhpiRWGGSXrja",
  "key42": "2bV86NR1WZ6TSTkRkdztjBZUdLdJDeZ6SAkQP7pNwWvRtMpsbdutwHiEba15mLVTRUprZTDhxb8Vnp7JwRqH5MRH"
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
