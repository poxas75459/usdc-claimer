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
    "2SRgwcXjnoN9fp8KfdK8bVHvAzRKxW2Y6eULn4htT5gjZ5QxQsAb2jFUMLiUQn6z2Es9CpDkQhYrL1SuUKA6JPm1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p7vyE1wQiPUvHHp8hLBtr1aDCQKjSiCZ9geiWWFjcM41yPQUaTnnsVf36GzUGe73LuAmPjEjvjiUzYa9r5soFtx",
  "key1": "4P7ggmrTfoAiCcbDBy5YWqWf4jUxmAxpGFwPmtdHvCvUhbniRXHcDRYtjtBZhRQgkd2fmujyx6zzBNegxHVdMwnM",
  "key2": "3LgVYVVTE71Xd3mZTpc1Ntd2BorbiJitPk5kNDJJy7rGN2fUqzFiqAiZKDod81rAmhR7H88F1dtJjD2bG1qqjhJq",
  "key3": "4N3yD8DFC1TQpJEGWb4T4R1Wz6DFs9vwCKAs3v2CUJmwiXjVFqjXiFTYA2qGGbGUoF27axydDxBuiZdnLjeKJkdA",
  "key4": "2GhifyrMW2WL58yR5Lq4CR1n3idNRsaUEoN4UEsvEr7qhzzaYugEddrZnbgtkFkEDiEit31hr9B6KwhrJnH48UVt",
  "key5": "4du8rQ7Wg8GawrJtAuPZsxkHAATo2J2EMrLAjZ6nmQhq6bYEcDTfrSwE56rCgzegQdwBGDsC7rjQwcGhpJWfTFW9",
  "key6": "3kCtEfx32qpR7i475cevw43iSizFdRGKaXAisQx3ebRfzBqC5ZogAvradN8Dqmy4sAJXMT31pTDbYE3jVfh8FNsC",
  "key7": "4di5b8WvUdguLG8a8drz9Q8ACihjEWZncFe9EyYrev5Kf1JSXjQ8w8tWUQTHThbB9UHMAB28iAopFkc27EFtZCrc",
  "key8": "4fRsYQkR9KLQWQbNK8T9SdnVT8fcw4HZDiNzX8iDCkURPXMzUwoAkwBRGdvj8uRozu33ZAmxB84GZKUufgpUPDBS",
  "key9": "2V7chnPoa7XCL1ofwS3diCwMw2e8AxkoEgeteRb6SQKbgXHoQMkjMZjxnL7JcFskVmfckFwmsRE4LZ7s8QK5ahqa",
  "key10": "5i7q7HNfJvkZ2LRToPY4THSX3B4eaFTGXkhU9EDeVaMVq3Yhksz8emzu2Bt6ZfNA9YGzFqcFW1pUCSrLU46NGsZn",
  "key11": "5SyYhkc9BMEGBqQSJjDcVP95ibtKR9WMXkWxSnCF7g7sGYcz9vL2fhCHRT7ceEvQh69PFe9x7RyucyitPcsAZ6B8",
  "key12": "61wHFYSEgRUJo1FQLYTigbrhfJR3XLzCs5nuc2VQbX4zwe93nfHRA8GtEC4mMMuwgf5uwYKebQ7vW3azFQEc4vDw",
  "key13": "2ea7Pz1A7C4wLFHnwP1sLGYv1LKWeDwKuV4GrTZEnP1KE772QAX6QmTstQkGgGsrgVeifZPAuafHPw3GNDbSxwNy",
  "key14": "63CX5v95YMHErscqnazLcy7aYpAmxf9nCjCqpdfgAP8NCtMNxFYwHt2M2kLsUbUGFDHYXNPRw44s6H44vxwx5FHW",
  "key15": "394QtyWy4j2SGAS4CkEH3WzEJa7WonhJZYNeeXuxJixLVdt2Jv4kj52PsMS6VmPAxm1TxR9BN6mGwdPLNVJ2PKid",
  "key16": "4MQmZVmHmpQEzuwmjtpPEduinzBFgdbLFtb8EKaoEvY4iRqir1baniQxQiYg5HfLGCYFfV69msbDR8h2BXN4bE5P",
  "key17": "4HKDve6f6TJKDee6QEiPscDxz29gy3ukrXkMfmBYkUTV5wJpcsREc6UoRdVGLJ4YbuxEQfzi98T8G6epq11YguHa",
  "key18": "5qKGzbsaxJ5ohcZFuym2JXon3AhsF1AAhJYnf6zmM2Kax5YsvS6Ep49oJDhrC2sTTozRt1b5CUXrdmg65ri5PoT8",
  "key19": "5GnQZfLfWY1J9WfguLLD8WiNmku5HtDBcBHecJXzWjtNCgKDQRRUw6sd1JtXBxkFsFirb3ie2V3fKxYvzJJG2n1U",
  "key20": "gQ3TKLJAsaz3mvPvde24H6AFhFUkoyx7cZaR67yYzYZaHjcKHgq7hAZH1Bnnpg8v2XARCZbyKwnUp6jtRbJdpng",
  "key21": "CAqSKRzEfewxfzK8vzbp4dchZ1a3rdcuDxAqvPakfNYyiHoAEzPCGBY3FQiAp93BeyQT4Vy2EekmcidbivPtwtB",
  "key22": "26ccbSa79LRZf34oKN9GkTmYH2FU1UYoGtkZC5o8fEPgz8vJyhPuGdmRBB5XnExec7CZsuPYUZAaixgKniBu8x9S",
  "key23": "Vhg6DXrFteg2X4NMMqXX1f6CuHoKwezLECpNhUZ8gnzJk7KfuyB4aB2TXWhpyf1LYBGV4L8jJDDsFg89ym3tCUL",
  "key24": "29PKgQT9wE2Vy9sksYvtmyGaUyWigQhkXKUBndP2NwKEmvh9Bk1zYHCNzfxT4bZCetLgMJo3XkHweq6fKUzitjUD",
  "key25": "5Pk15Mi9bhSqwZpt11ssbWv8nfQp3YoU17JTvzTCXdN45vUAiHJ8KcQWZaAcjDte2MZuuRt5Lc38RRqzNRghvcHF",
  "key26": "3pNpqnsuzzMhScYmJzD5uoJWVMZcDnimEbDiTzauXNw79skZqESupPAThQdHQToWdMLJZNKtSTammk1XyRpucQPQ",
  "key27": "3wW7kngUQj546VkHd4fot3ZRFMxp6afA2yr3Dyg3u6VDcmGbsD1xvcurFjTtQkKzX3WsvhosasUBZvSdarJRszsY",
  "key28": "2aXMERT4YNUNrNadR8m4HrdTx8NQrNvb1mC3XHUnkUxLBDvDF7A9k7ehq4SdDNNX9V3UeS2Zv62RLxyT8QuqtAzx",
  "key29": "5pJCTHykmve3mGALQKUt1MNPQC9wUvQyyhhs3Hakjdjro2hm7zdntey4zLkK2kzfWtkiQHzkdxAVMaz1ZBCLLum",
  "key30": "6bE2xjYLTbErPBVTMSBrBagvHEH5UwQ8camVcZEqVdhRAtHvzTezKxKgYA1Y6TEyvxYrW5eABRwomMhzPptThnk",
  "key31": "2kDQj5GxjwJGAAQ1crpfW4fNr65NxozKasunjrUVgGWgsperdUzgQVbfujP9Ks8A9FMhZc6wByVY7mY95ysAdzWB",
  "key32": "2KgNiWjWcP3imdb6yeruQjRv2RqhnvaqrfGcVaGJpamsVQhmMETpDfPMwSxZvcjme2jYX5m4J9uqG1LhMxaD3ScM",
  "key33": "62uy669yCpZx77pxCgDz59kkduBDCgvPJ8hf8RoiLxeyZxLwR6WgxzidA8rnErQ4JBQcouc8HdcQ2bQ2U7uZHcmM",
  "key34": "3wRQocMnCiX5VLTkD7QPZYAv59pz7K1bbGc7iAnrrkCWLGjTTZFTpAj9SAeSBvAB2iPr4f3Mp2tY2DmPPNrm56UZ",
  "key35": "2r5gXMCjZmNdMoMZxpj6TLHK7TALu3nN2KocGBWfkma3mCCYhatA7hitEtgeRQHUzpAyo3mKCftrJRVszpckG7YJ",
  "key36": "8NS29KN2snri3ofNtuzEpBtmf7RYReJXJobZoX1LHzipfoxzhaMmY9z8TdzCy1fZpEVikWPvxKWRs1iN4taAncf",
  "key37": "BCvc1F3PinW97Fpu8vis2yv6A51wjJBehkZ5jp8BaN2F7yxTsobb9ZU3R25YdyREStdmN89Ar9yJrvysiKirtFM",
  "key38": "ruSarJmhcjYpYTPBLbviPYthMjtHgjQj68FT1Z9AwF5YCa5dzd8ZSL44FGHSEcB1cy7xtAa35v6DHVEfu7QkBxu",
  "key39": "4thGsoEfsUXrMT5opGuoXc57bp64QmvDNrJCTb6X8MFfnU57sWU1CzztcPcmsaHe6C3HgyiNTbwQygT5dwCseoGn",
  "key40": "4wUxds31hq9s2ToXgCWz97YNjm4qG4kMX7ERuiFzpzgQCG2EMZzHwrjrgbrtMsYkFpnHkcNyZpNzzLqBRFqkKNdf",
  "key41": "3Wmk17fD5EKwawYGzYiRTjAbCaZLAj7HSFjFzR4ehcSY2ExwDhKMMZkYDNFuVufTVwi9yMFDxS56bxgyrF75BVrY",
  "key42": "2DTKVJiS12Q8MmXYaDfHg7nqxxXUaeUrmMxA6zLqC3ECH7AUm5q84jpYC8F6QLNyA8XJdetwFPVbo9VQr3ByMkTM"
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
