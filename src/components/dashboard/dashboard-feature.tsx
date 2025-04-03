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
    "2EE9JyVtCdsf9gtvoWkskMeQ1G7f654XJ5qzmwcPE1fuTdgTJFuHZYymzpACPsMTWseFXSNMumLj8Qd9b6Y796SZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pSb3kwUb8Ye6vsaDTytGyTBuRL5PL5Utrxg9VDq2f7D5adfq2QLidUnoLa86S4kdaTf37EKBKyhigPF7QWE99ZV",
  "key1": "3M5c5TjBUnDzG5sPNX522HeFsucjSsF8eMs1nJ8UFSGxPrnkdV5goMGSuLcvNUvZwJaaWkb3Zfwc6aktDvXTnRKn",
  "key2": "5iYPwQhhmeWDzGbVmKc56D6dV7Hpc2QRZoignRk7aho5qWvmEcp9EoW6b6SqXftSAPfJW8ByFoEsvQuoGwG1HDUb",
  "key3": "5kGDDH9CTGSA9N3t5uu3GjSP2wxdEXzr6KUbqVfGGgoFtAa9hTGaL44saX37SqGxjarfgbvV5PL9jxvXTKqX1XiN",
  "key4": "4QtnzTSV6xCnPzXKWMomhB1C2j85yuLEu8gBAFyPYSEmnQBitWgugNUQvuTSGF5Jf6nYef4GkPwCnbMqVQh1NsBQ",
  "key5": "1rn4tB89a6gFKrEjd3ZEoWHw1aXkafMi4nBmwgxVo8Z2wECqNrQPoLWNwXq5uGd4o8xZYHU2RjfDGdYb5k4R73u",
  "key6": "4dMV6ZwdfkNcUPj5hytaAdSf77fTEToXLVhoPLk8KEaV9uRZaPLhaYYF4EurvtRPAnRugdFw8Zt7SkDbtX7U4Q8K",
  "key7": "3HKehNv861bduvAfWkEyptG5Z6LJffGeE7ABUFHWV7junaLPKGY5YVatEfuEzNJyKYMqzFz8WpMg4DNp1nuAFawn",
  "key8": "hNiLdEA2sefQsq6jTskXiNCGVZsjoWfgZv19iewupwynf142r1VN2sAAqmXmsdJwmmTh3YjunrSsEiKU3dwypKo",
  "key9": "2qCtpEYXUbt7t4NCM914hBh8xsizLRqvx94Vw5uRdhNLRRJeGd9peFiDoW1Xy9RVprzDgwsEYbXw2G3zdSxH9zJ5",
  "key10": "3DH8yHb9w2nwQ3YYJPVsAFPVH8UcTHfc973ZhjGWg6wVQquwBZNe56BZCfuks9iCNfkU8FjhzieeMHjavm77bKts",
  "key11": "2fhxFjrFiq7pkoKM9D6tXWEsDGD8ZkVdNb92p9vsnDZQ57j1Tzj6VvnX53spnN5f4EsgZutux5kdhsFai8Gju4SV",
  "key12": "6pGhEoTjP3EFVFPiofVdsicAeKsazBwVPBqcd9iZn11WqwShB8thSnQmrnvCJRHaLSpi4mUkN974hHVf2YV4sTu",
  "key13": "BusRi4RmyX2pcrtwsmgeVashC6mroiVb7nEis3yWpzGEiaWaJp5uR67nhdr1NwpnPSRddpZqtGbA2cMBZuZqtLh",
  "key14": "r32xzU3iWb4GYmUJoGnD747kW81CiSPAcUibPuV9MfjoYoj8VZyw6y7beZrxsZYJ94oB6kqTHTXzhfPbn3jPb1t",
  "key15": "28hLcoiK1krJAWypmwFYZwFbxtGwVuLHGkyqqbNvqpBLhC8oxdjcQoRbowCZZ8RgoLKzDcwUnjrRwXEJCikW68Dm",
  "key16": "2LZL552tA8Vf7HXvTvwX3cHSR7yEBW4xhFF2wAMbDbucufFTnqMPZug8efPHdayo2wbe2nQV1TG2wAXCWny7Bvuf",
  "key17": "5L76y9W6jKagf3BAbCrpbq5fLRMdKxS7f4dNKeu9tbhLSfHgDipBJz9HX6gZmDWdPh5ro9XSMT7uswGtGKGpAqNz",
  "key18": "2Eh635pMQN31xQhPa7nxrSWu3eB8wbDzTKFmta7j2NByJXDcphvkwhZag9SB3v5kyQCSNXACt4YVRDuV2Xbwp2si",
  "key19": "2az7YqkAMiLrW9g1e11PKps2HKut6DgC5PHnGQaEhdFe1C6ccDKiNQKWg4TDBqme5Z18MFjv4Zve62CpBcW2wFrR",
  "key20": "HJiJQfLkYJeotxppEeVrWg1EHvYhJSi7Cj3R7mz42kQF179hxYge3iZ5usAG3GsC7pW8atNb8jgBD3oYfDgsPVC",
  "key21": "4ap5j4oGQ7d76UumdtoXEzPxCWZWnHw8LmxSNEx4xGANma83HoRbJuk2ahPqePn3uK4sBZiKGtiRTkHWUZumGda3",
  "key22": "2Gxbh7Wo2AVPhnip8oPGpHtynYqpBX4Tmt23pNX2vpLZ7SvGwCkdBjVt61FdB4VB945ePzPZMUjAk6WKyyCoY5ax",
  "key23": "Nd6BNJKaxTnXGQyGtKzYomfP9B6D4btBTgsNMFfGtMSPhPMkWAkPhVw2UoZaMk3K2A4s6Bc8tWQ2BYyjjdU2HWf",
  "key24": "3jSEuNeQznim4jmMCmnPRf81M8aXmm1xxhL3cMo3gqJBtXYJuKDuf6TdwFq8uqrhgCeXANaZRCVgAzwho2iLqSA",
  "key25": "ZKVEJULP5NyVDUFDHaFqStdyDCdkVmkBxGxUfbbKP4WmUAHghknCJNr5Me9W2SFAMPq8D8oepTWGb8F6Eipw1BZ",
  "key26": "kdMe7DKjgC7bxB8mNr8qrHC18sYH3xvpXv5EY6HJy2yCoAcdB1T6mJpQt5hPzM5YuRH4usJt14KXKuZ4YCP8AC5",
  "key27": "4r6qdgyTZUrG8RhYyDXL8j2GBWhh4C3Y7oFxtFQcWwcweg4wH9cxe7qQKehkvf2PLsdh5qQXNsXDZ8pSVqK6cBmw",
  "key28": "3DMdRFdG31GVf7bokmRo5mPoKowcFsWJ7xJABigJ1BDwQrQ93bBi1PbzRyTCqBkHdLyn46Mq2jk9u4FWGEFhyVDH",
  "key29": "3ZhzM8VoJEWFB5tMv3JZyRECjno4W23XwWoFCNcM5ETgtxchEoABUEHmjBXmzFrRCew9ELkYM7vLCj6r12gdMakq",
  "key30": "5vyaEVeH8ANopGBcLqiEn4vH15SB2XavSPKsKdJwEx4YUCp5ob2jwnDTmh1CFGimE5bLtRmaEYeqMp2EGAa71LHX",
  "key31": "mmN3RgNB66Tn7raUoLmri92Mtz1AcegtgBMo9tyhcz3AeswWZJgD1F6h2yX6UPACTLuU5Tzy1HkmAU81BKgfEEm",
  "key32": "264nZnuBSMmfJnBokGto9WGWtVnhAzNb5acXKnLkEBSaEMQk1a4Qbc6dM634yHVccmFYAxfaQNxDkvLyQE6L3AdR",
  "key33": "5kFhzwFHSQ6zDehM4XYHFxUnKjXFHiUN5LKbcRzHgMJQj59EgF77nS5JcF1UF9aMACg5aFoi3DecJgWBsZL4ctPH",
  "key34": "3PCxTpp2NLmVXDLLDhJgkijfQktwV4cxa89RAGMHwHKXSbhYQF1j4raUvUZrhTRXtTY3ZdpxkU2f3QfL7VTkxwUZ",
  "key35": "Xgtkx4ykCznc1qg8nDiUN4zTJ4KLiXxbYBzSravj9o1mPjT8xjJ9ULUvhpc2r5CbRK32oZD13pABB9NUk3Xiaci",
  "key36": "43YbXwBpZtzbhBn7yvrjwhMzUxyVNo2zm6Kj8J36p4eMGkJ6uoZfnA99xQ6F61rBThz4VghTvKvj5ui2dSRLmarr",
  "key37": "56Qz5FF4zZuxrbLMQ8eTQ3apc4BMvFPifccWjrFD8x7pz9k8WvZi1yDvn6aSJ8iM2bjaFM28U4ocYuGxTA4NXw2W",
  "key38": "3tQ9KiGKukmFHXVcNZnndyuAmyVrLQ1QG5xqjBV4fJCmRWG6cXDnuUBNaHzmoDjH33RB4wdpM6VLp8WuVi25PXCt",
  "key39": "3QCoAkRcDu66Jie2N2D7JGKEByku6RyeU9FRYGxvokfDW2xv7vcvJgjYycPWatPD1udMfpPkUYTTBAmwiGNEYnRW",
  "key40": "5ZScMraBEYZWpttY1bRfKb4ysjcBmYYEX7jMjWLqTCdYBhEC57wn8pfUG5Ms9AiZponhnzevzZDnhg1HVe8NjQrT",
  "key41": "3rfi2th6gp9Tx2h8VPgD8TKwXQdesFV3EA7Vr3Kzf1kLfyTtdQZ1oi71nbJPUh4LGcqL6YBHifhmRUqmaZQUttF5",
  "key42": "64ted51E6p7hgUBzkjGFXwnMjQdFvW44YkrTsvNiJaLofcZCbm4seLnHMTcBM5PUExWfTfg8P5GoVmGwpJksJjnE",
  "key43": "vCzaBuwAwUjxWCaBxqY4dTLsPwkHJ7vnFEbBmq1fcfdAya566YF6bTvB7TaAd76c4ZMyv1NCmPvTyjnnW96sWxh",
  "key44": "3iJZHes5ZvXHNcGstQs8bjRJ5rVZvfSHniLVMzmshsisdUFPVpnuju8Q91RmYCNyAjCZH5UdWJeJmtL9eyyBUMp4",
  "key45": "24uGeYvjZ6ZrTCEDi7Fu49CwiTbgxf9rJNnEe2b7DuH3bndyBMwdRjtRCwTifyUhGXQT9RXhJBcbd4Nn9FGKNhFh",
  "key46": "3zxSP5tBePiVtR5i4ATZdieYtqDSNcWb3CMHDkrAcxKdjMiZxZNLGNFGajejQChqAxLb1BJbaPtn8HbKwemzmp1M"
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
