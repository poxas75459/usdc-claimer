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
    "2bbLqRRGWBagxPust6yA63aEbWbX2RudDJvHh1hG7gUzpTLcJ5TTzWvUqknmyUXiC7jRwy8rxYDW4z7yBjigouMZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FNZjDfieUFk6YNMvf4iSynrsKhTkL2ra43PJnv1LvuFV6x3NWXG8he3Lsrw6ouugZSSLex6jBnb85MbXFfLFTvS",
  "key1": "3GArEjVznqkKzBbpzaY1SDoLxXXjNnTH3qViSuoErXcDRVHWVc2m7gz4CE79JVnseSxLUEcvDUHWw36ipkQNjX6b",
  "key2": "3CtA7Wx1nedebgNS6mGNyzNJobmdCq1Vr7E5oJKxHbpJCbU3V4WQGssUtFBKUyKqySkJ51HqdweYk29uivjkp6Kj",
  "key3": "45NV2tUyqbhuKxeJrASBxateEwKL7bNvuG5sXaNESDjV2BzrBiqinPEjesvXeD6mAyYAYgMfiofywJ8KnSGvdPou",
  "key4": "3pRg39B6yVtMn6g1mcUqGtweNZbpAwq5MeEqmSGXKgoGEyteSNeFaSmrnig7myLEpnrv4UqBcHJx452UuRz93CYR",
  "key5": "3gV1qoHnACU2Wr7QmZo6NrAtqk8gUph7rPGPsrmDVnQ239n8b58mmex8AsABRrGKYMyr5rNLSbXiNShmSEPhZnxD",
  "key6": "3mSF54SMd1jxbET5Q21cL5SsFmASSceKn9EyZ7dUqYz9MudiwUgwfxbPsSHhgGEVCAypqKPpzPFVbG2Mj5vLf3aW",
  "key7": "5Xd372GSmSAfGsMZuyWhxmk9ThhoRfhYCV3Fnf7sUUtrGsM77kTpAfMHTxVdu8WUtBNtqxyWfBrzXpE5F24pEKwZ",
  "key8": "2SxwxbnuWf9zDScqMVKsfePd6j95BMqyxURKjgtRLcKnAn6jT43PKTDYh4G1fvLDUc7FZ5i4tZS2eZuEcjLC35eV",
  "key9": "4NK4ECyBqNhM4e7QWtYgtAg16cFSPpaXH7B4SHr6XDRSJj4xWPuPcUDZs3HRZHdWkNUCKwsWEriBtXDNuEeGojwm",
  "key10": "5gh5CiRnritRuG9zw6Dw242jJSd192552Weje4TY2W2N4PVy85msDxk1JaJvJ2fG198JqnndCLJfQUnhUSn93FjJ",
  "key11": "4kF4G71145vevdjqxGGhrwcmG6SckJ3mb2ryRoiiHnk4pmwteZ4XqKHJkHpV3rVaney19WyGbUvZ9xCPTH8b7w5G",
  "key12": "HyuwswrymA3G7bnfZvbWWvjY7EPmZmzyAAKyR7jCRt9EGLefe85Kvn3CyC7Kn1dDAAjxsVc5aUMGHGwz9uLccwh",
  "key13": "3y4HRjV3jgUVMWM3h17KZpgEkKLUfS6GCGBFKddNmUdKzjNG9RtbisdK4WbFoYo7pwNtQAH1RaLjWPYnyqsT84Y7",
  "key14": "2MejqrvvJUB4ps5cbyJsNmZLDM2SZMnZiksgMhHoe92nuUKJ2ycLesvBe1D59scBmvQ6r6h2XtVHHZZ351fMUT25",
  "key15": "2utmzFkobf3kRvw9chQGbX36x378b5NFBZzLt1bTehYJpVFyVyQzWG3MubMn7u5eDKZL67S38yoWVYQuwTKvrQsm",
  "key16": "dZu4AjkDZGDrAUuFFjRryaTiRYNQ8bParBX2jPYWUb2yqiNmU1HwuNQk6XZdGRAikZ3c67UrH7EgPBecctEpvWb",
  "key17": "3N6GCrKA7Ueaf9tiPGpV6AfZwwpfibTZQWdA3TWPGpd53HYGe4FnmoeGb4v4FHRRgcjyfR9NKr69ZCTnnQZ3cfVZ",
  "key18": "3v9DvC6FXMARiYDCuDsiyV4N7GN9MRrAATGPipCW9GENZb3gJYapsr6v1XCeJp96tQqB5bnVNBog2GpJae9qTiHK",
  "key19": "5cir3hHNPwfnR77SgcbFHt1wYj5Q1RnhAGum4mtQL9xk8Xo4xdCDzwTp2ZXagMfAWAThFZ4s35WJWnNehWrcdoUC",
  "key20": "5yQwLoEDTWrHX2sDk9LrMU1FnHGp6d4VtDt5W7ZhZwcnMirt9r7yTrgfskuM2S9zeq3c1w3pVeLar7BUAajcXVYd",
  "key21": "47M84ABo2Ktfx1yKETaxD4YLKuTzeDjTmzgLWGpj1AixoSELpQyCrndrEHoLfMAFyntqaJm8K4HMs9gFRUoVwqnK",
  "key22": "5BnUoXVts1jPAFZrZ2zDiKsYyNocjF7vrr99g4g5YfqSTdGaggzLU8jE4qJfaGW7GSRLJXqGtn6NXrsjXMPFYhnG",
  "key23": "oz6trZYanzgLMmY1sgKpUKdRsTUNU2J7vPwv3vyPxctU89BB7Az1CAmthY2VXTrAvoFHadB1vXVsz1pMfLehPSH",
  "key24": "2pMGUWHkBoPS4ZafCQCoj6YJgez3pybUyvbmMeHapT46J82xj4esxBQnSEenW3ybgaDjFdQw32KfrBjMZZaK1yaX",
  "key25": "52UgKcCUujJ3xSzyQChP6p2noARV3gV2PkX8FKL2WcQaZhr9Xx1Sj5xhAePpsVEoC7SMYGZ33JzabeTcnFfztWuM",
  "key26": "2nEys4cPVsyz1qeJu7tbC1fAae6yN7uin3dJ244tJv4vmr3wUigSV4Qw6rLjxB8xFfW5Tnfxc2t7JQX8NvY6ko7g",
  "key27": "2XqxiGEgY4kVNdG6xSGsiwnktLMJpVaEDJSyE7Q3SBDP74FbLFvjew2BMFctRQHjNMZehVza6UppnvX1YcfFAErH",
  "key28": "5q43ew92KJk1qPDQCXTBQKPeiqy6Asb89RTGZnGPJ7d9BDon8PnZ8CyJ1xRsZsFBEiNpTwyyEuE33vPgprC29a7x",
  "key29": "2gu9rb7x1dVuEaqeAywuHUF25EHd7RDemKUQigdeiZQYRBpGWJrnZpE648EQvHbCC6HdDy2perzLehD5gFcKhYeg",
  "key30": "5wJK8JFLd77hiGZV1QYfJPpmqADu7BuXaHt9T4AgCYSknicZQp3d89GATs4QUhbeC6AhQJMR3c13nqC17H2bnmpE",
  "key31": "4WRweGnGKNpwqAtnHThxidxv1hSuRfuudyHbEoEHrMGZQAtjWzVsZ2oAQUgMGvjMzCY6AYzzUfS11tW54Taeuu9e",
  "key32": "3QcK6hGiUPhS3wWf9DRpGGWumicEsqsemeDV1sW1nojRvFBVDWsBZChKt55fhqK3EJbpdQxvpE5SYCqmGGSuZE9L",
  "key33": "3DtuS56EGTFJynVvSo51yhvymEh4DAKuorVmGFh1LMPNkkeeNF6xCKLMBztV7hexhDph2unRpU1yrqFDHBi7UueS",
  "key34": "P4JxVbyKTyY9WRJgKaiStaYXfUoHpYkhuBJbH9unfA3sDELr6unmPd6j3nRCKyexBFKzqy175tytwm2hqNUwdmJ",
  "key35": "3cR9ochwCPGwr3CJ96Ysh871ayxqT6j4dvUoaAUbVnstxg4kJFyEv2y9BE8he33rJvDnDS6z9RMiuCeptoK8kEDe",
  "key36": "2eWw7XECJdQceihVPtDCuuSj43GaD13Cvtyri1GjA5eFgwUuJsWvJrA4DJVfyVhLsi5UHom7xLn7E8PQFnjKpJ68",
  "key37": "2b5iQAZ7CmJY7eEMhokpoeqLEF6LHaivvsCCqHoLZiMDecEG6jz5473BZ6U5kR7bbpzHo1a6F5FSYqi2iPgPoiT1",
  "key38": "57P1chsYcCL8UKH3BWbP1rAT6MdmT7R6MHQSSszX8JxpcduKNCigQtE6WJVtZBHdo6gEnyKZ4LVDVXKPaNnRLjYt",
  "key39": "bubvp5JtoiEBicv4MLAcrmGxYsBnqNKDQfTnu7yuvvcKVYgADXML36G8T8xAogYvrkU2XQQTJV9jrs9WuDKExR2"
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
