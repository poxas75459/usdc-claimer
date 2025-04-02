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
    "xgNHSPUPCay2d7VT2kbsZNZAYpTstR7Kv3D6bR4NLh4vPQNTnfPQKQrrHBDH9khCWCxcATJGv763XogKvmfLddc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "586EGjPYKHDmxtyTx33rDL6jpTCjgWXXVcBLP5tjrEPZ5fbRZCio68tFgjFkywQHxEhs412a8bibZ7cPQcSAzXDH",
  "key1": "5b5bh7xxbUGmBsJjieuzVt53nX8vNAKC2UZMPhXJuWdChco3ufk1jxHsTgSUgQzpxo8Sod4PbRdSquJ7i3WGXLKW",
  "key2": "4oVTUYojUwsnWG41UZgv8KHeSHUVsq2xBrnfkRcXvA5Hvk75LxEy9vUn233ew8C8uDUQFXU4hrg2x2PyAz5JAbyS",
  "key3": "5Q42cHxMvgBYCD2FR4EgcWNA634ZMvAoZLkdMHSjQLBPUbQLcW9YCySX4qPHcXvGJdcdkxvryK7f1EzasPHnKAom",
  "key4": "Rstvpxgz1wHn9sTzzyh1r7d2o58d5ZgPum9kfssKo7kZ1c1MD9kFQBMEB5i1uVCkfkknt8su1TQLAFWTJxmZatM",
  "key5": "4DyWYoYtc7XqLEQ2xQJRMxLnEhsNa8cPQiTp87iKmjJoCqN84gud9V2AYJyU7sH7E6sEuygoBdKMqMEDqe9kPca2",
  "key6": "2HE2Z6f4UMWP2pxGCQL6SBx8muQomeSef6DuWB2KCFgrKvYdyRQPWuAE9o5rKaajL8q6fZd8xdJAbMqj4YUgcmXb",
  "key7": "4RizRn63jxV3m4qaFWsyuUVWLgHkDdZ29VjUPVuJwKe42UPeddhuGjuCaqhnjKb9XVNe74QN8WAxqb9s8szAwdRu",
  "key8": "2523qsn6PVA9snvrzNhFYnj8tvCKHExstqvn7HjVch9oEn7jPhhhioEAr8h5USaXcEEb4RRsQNc8ycTqVQDq71y9",
  "key9": "35srxHFY4m7nyyMpgN54Ug9YtDhBEKNCXHnMrM9YXNYPCSvqXWaa9M8FuexLqTPPyMGbuCPZ1haoxkLJCxDZ1Uhw",
  "key10": "2w6oLSB3A7qo9H4WHe2pWoWcmdJf9HF72Ya5dNZk43rbkfPXxprTSWnEBqf8pcwtyKeFhgJRj37UrsZ8ypKAY1KJ",
  "key11": "1E5DbXQPdjSv2shaGgwWXV6e8UJTkKH62X9rj4N261TfL5EQjcEVEBo6hivLpy5jLn4PLdbk84X8VJU919ZybFY",
  "key12": "5dbn9x19hJW5aQRyDkNeKeaZGMtjySQxfsyyJbq4ohStKGvEwj3TtFcWNxzkCjiUHMKXm6paCr4EV1qw4gbWLJ6u",
  "key13": "28dtoJpcQ9gB4WvrsS5S89fyfJRqGiTJbJQ8oo7LSRcMjNbaEJ1Rb3ubnSMBYviUqfW16H4ox63L5bteCUMYe5Ab",
  "key14": "2WBv4TNoKysXDFR8sygiRnEYVc43B94hxzdnxEHAaBr5o9e11JqqWFwaNKEJ27Y3QTJMcmSdSkgrXqqj3Qc1ugnD",
  "key15": "3CDzPBjC5jvCJgAS4W7Evb5Z5VYR6985T1ohDTTJA5qwjJJCQX1dDxoWLLbYvc7jBr2rBxjbqyMHxUeWvSmjkaHf",
  "key16": "4MYmF9zjwMKe9ABPYY1dAUSzRHeKYNymnF2XCvMt1bimTvaWVeYvcsrs83S8nGQBT9nY5HoMJhpT8SkdhctBAXFv",
  "key17": "2Y5KtMGkpqV8nQATNUHQbAddEE8zC69cpWyNFT43sREegeXTXnUexFbdFqPjyr9w9tjSWf7smD9MjdraaqL1F2G4",
  "key18": "5JqimPc92m1UXWKWuhVodoFNvhwXCdkdKCB9tdR1t88zWagzupXzjaHrAGTHe5noWYCqtvowTtkGRwhZ8xB5nXam",
  "key19": "54yVCE11eXUAWJRwadnC44AkKrC8mC5ZKgVzUZG8XkUT1akRxo4cjrBPkLiV8syiLcjxDQ5Ge5WEe86Mk6jkTpHa",
  "key20": "3L69ksZfzHsAJva6BAMkeGVwehUiY4ja5jeWH3MPfrCyGNm6zrQaMHnbzNmZugSwZ8CLmg8Wv5kMxFAqqtyfuKj8",
  "key21": "62QXgDK97EsxtmNoG8ZCBcoMLEJ2WJ7AL8jUxkok4c3ag7C6fnE9wyuLemQ34hpxdCZzG6Qg5wA1GGuDoMSBYW9x",
  "key22": "4MhuHqEtNn7Wq7XaBgSe5vDtiUqjSVjk2FfwxioZeKqHQ5cFdQ4dzfsJP2Vhv1GofgMaWdT5nPcr4TevEjYt1TtT",
  "key23": "3hQMiSwRJJq4ZqGNZmVA14Kov7wyuvzYqAr3m5yUmtm1aA5N3U13RWt4Nc5hmEwDehomse7oPvx36Szj4qkQEB9B",
  "key24": "3fCoyxEtL9XkLgh8Lv4CoC3hApiqXU66TggfjSDcBFiMvRU8yDNTadYoCzajWhyoDHxsmDVjUkaAouEDuqreAGmd",
  "key25": "3XrmX1YJ6GDoQHAtHXtFKsCnYpKHBUB6CfvhpNAAoyGt3dEZxfPBEFeStdCgqqUe9dbnuH7NLJcVJXcRsurbydT6",
  "key26": "52eNTSfbDGjX9egLydq5Cdx1Kh2YNYPWWpc99mAqsmvZa5m4L3uQ3zD5KssynwNM7WJJ1Zzj67Yr3L7ghmQ7xbN3",
  "key27": "5N8DrFTshyQKxMmaxHvB5kuhFVbiFJ7xNayVP17zx4cezyZxKLKU7xCZDAEoPE4HAgd1rasK7AvdS29RvSKUHEgB",
  "key28": "5aL9jQH4kcvLVu1eeMZ4WiQeqWbXoQzco8UVBkyCMBVbfDUpqMpbeHMAuSUmewghiMegXx1sbPtPyYaVDjTPWv28",
  "key29": "4jwr93QbsnPz3WuXpaFdFxDGz1CrhuP6oSt2T9bGWQemAP8bTCQjcDiCZ1VbTQWsGMbKH6y12WLzTiFHmc57WV79",
  "key30": "7TeH9xyQUVcsWQRWRb1sa4NXb9dbf5KLyAqHBG9B1uJeLw28eAyxQjMU5XvETAXeCeXut4Kje9hjMduGuhWdi1X",
  "key31": "3cdfBsj4mepjbynWQiqGw9Rqp8JtZEtVeG7U3EHHiqDNpmBRXY24jCSuCNuRoxLhRLYAQqTfBwakNYUXC2PqgkrA",
  "key32": "Gxx1kEPNdfs5J2sB66R4J6DyWMC6W35RRM1d7CsciS3RWrsT8FxyhdN8kEXgUhg7F7iQ9jSLNBxqP1FRgniEQ7q",
  "key33": "Fe1aur7NatRo51P8EPofQC4Mva4vGRafprrKjELHXQNTNyqdajgcJY46WHbqfG32K8ye83U1Mjhp9z7MaXLhAgB",
  "key34": "4GCdfvZMMntMgH7Lb3zNWiYqnnUeWhN9Jp5gonM4Us5U96eMu2XHrc9rQ43jgtTCymkZd2Y46gwfBDzDNfaLwqos",
  "key35": "3KrqyfSJsCnANKyfkgBgeyhCnoAHA8VpEjiuMwBFhNuspnC94dcT3kLuYczDHRt2AbndVZTazPzYdwaC6n2hfRD7",
  "key36": "5webxmRV8Hi14Fk49dwdro2c19Fk98aJXR2CbMaz4d1qvSKMHL1UtMpxUi5Zgk8vMknMjuQLc3MvPGYNnutiNy1f",
  "key37": "2UobooND1iqhFc6cH6gJm5WJ77VzYwJFHAeZTcdkn8Zvux38cSPa3zhCJkB9pp4YQrKWoo7sAL3siD6EPrwG2WfJ",
  "key38": "4VviamNZdWabvpmeE6ZUKQTpcHxMTCdAzY6rfrdYk2Z7zkRnZmr8nSSzDYtn3gxNhRpgDaFc4NsHBSiL9wTy2DN9",
  "key39": "47ui3YykRkfn8KUQHVUAkZaTsWKp5AaMFbrtLyjVUZYdtTH5jddApAK6g4DTitTmtkDpeRqGyJjcTtnoknCEHNsp",
  "key40": "56vM2CmKzjEE2APyY5VezbgSUGTN7s3nqiHgEf8jbiL37EHP2KQPdaU7HixgvgBxpVkLHF2t5EpjWYETX8DN8HAi",
  "key41": "GUMecN65qT3apVNi54k81by8M5WKgMtQdtyR1s5GiKFFzPHZy9dG37qt8PqvwGVbEvwjVWNcaaFrEsVD1x21GZd",
  "key42": "jAxqGx95LMn6mAptJViyRQxNSh1boGbSVzLwbnB2bf4MbsVCrACZzEBicr6HP7rf6auYPQnoT92ENtF4vkS2gbk",
  "key43": "2UDJ4AcmtpK2BH1DZGEdpxFVdF8FPpyeq6PRQpYwAbsR5nxC2bGNFbuw3sSHu5tKw4BUtWBcpPn6WVxptMo9iPxE",
  "key44": "3x4Mq7Eu6hK66KvTLPSoTDM9cTvgAcFij9mQLHXve2RYYQv1mtTEQqBpcak34pWuxAYgdVqvrSLN9fXVRLrVM85c",
  "key45": "4XUFHYpdAnaJ53gpwR9V14UuuKxkqTiNT4pULtbhVk18hy2u6RMs6sEeQj8vcCY9pbztdHQcLBN9LpYbdZD6ChF9",
  "key46": "d5Eo7C2zCGhFUQHpCUs6QsNZK6ZJt8X9hkTBGi6yD8Jr6w6iDVRox6T7e8nxHncJWuzwwM3JYvsqQrmBGUDGe3q",
  "key47": "5xPn3eiR5hFVucHymGb7BaAA6g8cZuRZX2iG1QFU4gGsP9L9Fu9nmB9YNCKk7UdzPnPq2oxgqwoa5ZbqP4hNRzAt",
  "key48": "3dHZavqarnZHEXvFnfowfp5JM7oVBmUUUZVUDgASbRbBK7sx7dZ9gVyjBWm4DtUhivGvXa7pGZWRikrhTzgSQsz9",
  "key49": "3tVnbz1MBZfbWjeM3ALRiFsTFtJ31s49fzr1RBbfydR7mQm41YWR1nJTuPpadW2uyPaXB3LzatFKAcogtsL5KfAJ"
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
