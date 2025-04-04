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
    "4G4c7121NC89NGndsKkzPsrKemTuvY1PzAuiY7MqWgxnw2Dg6NxcKFe5R8sSaqzkRX2DS18Zsen6sAFbXC8Pzzqa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42h53NcdEbrs2KZkVGqXKZPxhX61aMRstkg6hR2U6ikYBkj7FHpDhtkKLb2jYmkRYipyK6HCNWdMLzGj3jBLQSpB",
  "key1": "65n2FiFqHpEFFizcijKZW1EMuxVtsCsd51FRfXMwKj2QMKq9UmbWpSQLuUfgYvxPpZWP7CAsRbtggYETxJcMAPfM",
  "key2": "hnbqYSnrTG86gfE45wzYEoQZ74ouZezSgQB4NPcWQrMmnMgJEGtdFadeWK8ra8ZnZoyEmDPGeGxLQ9srbEwZRgh",
  "key3": "46VpadpLQyWjrzNACySPivX8D2dDjTYgRbJYCEQg3ZZykzjDaJK2hWSF22TQH8WauADPqm82rtMDKFa7mnCtfQwy",
  "key4": "2ouDXvEJuDzVwT9tx3i1t28zkG4MzCKEXFeUuqHkMULoP1MrKLZLUu4miz5adufXZsh6vw6HgnNH5VFqQWXbjYkK",
  "key5": "5uJ1LsbWLBNqxvzGjRYCK7jpZLd9Jwde7KmKvEZc8YRpiR5H2SqFBZW6V3XPF976WxK2iHP15uQGmaPZY3ngtGb1",
  "key6": "4aZPW9nC5oaSuZDVH56v6TNyWwSWuyqyKkZ6Q22HqKwWbRD4vXzTZJahocTCdyZVmk7iuPVRpZDGbNQ7jsnZEvHK",
  "key7": "3iTpEqKgijLYahAbsSJyyDo1C8Tczo8isXo6KYtvButwAEAPTQ4MuroJwVwQPrY5tN25oUqD6wGZmr69wRFdoBob",
  "key8": "2wcJLqZe2eYDDAEFGSgfmy9og7R1wGJNFueEzAH5cdiBHyoo9Bzg4oHPSSebpvf9p1KKYJiipYH3TuACM5eT9dPe",
  "key9": "hLjkjqbUbSFNH2fe8BWRSiP8j69AULVVXRc4enVUCLfjyz8ucCZPvMvLkxjZAKYMJRi8PV1VreUANrzJjEF765r",
  "key10": "4EdCUhgR4c5J4W2sugEvKupWQvYPZKSbnFFUMW2ancJtbN7Di1nfeB6YJWxGA55detszUBRdGsEkmhxchR5vP6wB",
  "key11": "2G7tE7ih3N4m8wwCgYohRysfQv1LLwGspMBJwmAF3eW3M4f6PXFy9AzNCqE1t1abY37FEEV6TqwBmxAceKVi1u3s",
  "key12": "2sqkGDJGTZGVQzY1kNeo9oRgzH2a4XLZQnPLUMdj54HXB3S5tSJAEH1onMgPtqpEe8p36Ga5T5wBPk3DrnikgCHP",
  "key13": "3eW6NmnGKEArjeLGESZTmLXRiEksm4aTHavesXCzMFiALFj1bCcSrF2RfoarEqmd2PdYrSmZo74kF8m5SRakQ6kh",
  "key14": "21unax8MmBRoSVgvmFS53YFQQ45vrYg6Y7QWfm6q4in8xpm7oMbWCxQkX2WLERzsqFsKYUowJqy4qV9gxeuivazk",
  "key15": "xovwTrzuCgRGz7gJtQJ9X6C47zM5LAz6VNZRJNQw8FZxh7xAWTq2zRp2Bz6QGsLrGYM1i2BFhcqBypBKEDtnUkK",
  "key16": "5XT947NK9V56m3PpcT74fTayCbPm9z8GsjBmNcfDUdxPBM2ur3vnD6tht19kKdtaLGS264a3ts8G9NiTCXgwbnN6",
  "key17": "3VKpTZxfLEqMDitUbraRAAD3vrWvzsWqh2A6qFa55xVo7S4e4bh8a78AVxBtvzZPPDCFmiHyRddVVDaLt2BGY7VT",
  "key18": "2DoHgXYwHkiLXaopiH4SXdQuBw1qhCCzr3S3Y4MKjHLYvkAPqXTR4KRHCkVWmDro7RgxUcFnfJVpo8xrnD4wVb7K",
  "key19": "FDqo9igNYpkYM97bUPuj3nZrfJQQBRSSATvJT8khe66UmPF3ThUiUtftudeYmHyZsPtd35D73kg5Bs9pEhj3Nm5",
  "key20": "HXUg9hTKUyCqfFAktGRZscgU62kWhoFPZwT8LizMw7NVr9HvQVMunq6asuFfpKvs9HQ9jCDXgMrAEAN7zVuNUaT",
  "key21": "sc6xBPfrK4AQ9g6rqgf9TfG2kGDH7zuvHXSiatNxBYFogJWYdbdA1EPSTroNzTAWrg2WvDFYHWSumvukiXctmSe",
  "key22": "45dqprZymZR88uiJ1pQx1UfWyytENDAmRhz759dnNPnrw9Y4zSvzkQweh1q4PiUuqRZqHAGL8XNe5ajHsebSHoTB",
  "key23": "3q2Xcfwdi8aDjy6wXpnDC33dRxVo3Rse39zR4GsUou8ExxpHmReBQKNXzuMefmZa2jbzDwQXdad2WUemEyxy3MN5",
  "key24": "5qJLaQ4zQP2nCuMMjiEWZRAZaHTz9jKHp1c9AZdR6Ua5edqyyANttSQ5TjGMwXsaKYrJF2vLJCAMeasp5KLtLdgg",
  "key25": "2uSYN3AcMHeYFdCZUCMrBfUocrHKV9qNcPgA24Ewdv2zcav7eAXHCPx4GjXPPqZEMbMb57ogaz9sCgzEKCP6iWDK",
  "key26": "2eSSvdr6VQE8Sv5NR1PBDG7qpgXr3GuhtPMKvbQ2GqWznf145jogAeehoapQYU1MGGjUdWLmwAtyoRFnALsSunAF",
  "key27": "36qp5PPYvm8XpgCzEuYkHm4ba6pBeProxarTqHAYU5Tofs8WEEt8xMgEjVD688dMSvhGfxRAnhgYA3cdjPd9dBVM",
  "key28": "3uartYWxDxEAqVFFTU3Ar7zq8fqsFNz8zyaQxzZ2jBDiULC83KUz744hi6fkcAiuoxbhgLYwjmRNJ7vWVsheUrTb",
  "key29": "5FbazgFLExnU2MJMdj6LM4bjGdbQnoaujFnPfCJwF2iqyTJLPksfNjNrWTo4Tdt5UcPyCYi8MqQdxBbgjHtd3TJH",
  "key30": "x93xA8kYvS4eGRQrmLSRrWfmTf4naRCeejQiAsta7eXirCMhefT3ygCRrhbfNnKdNUuv22eNoNA3rGdmo9uCS5F",
  "key31": "3wLRri85HZoBAaM6dLWYUtc79GNLguQEnhQqaD7HgFJUEqvFwa7d6SNGknmduM5jeX2NN5HS97QUqoaFHMrFdPMG",
  "key32": "yujZnG2MeEhPUZ2u1dVj1RAYNEEK9FZWhuQMuDqFXR3tXkZTzca7BKHsds48Dqo31PgrgHCzgQLmbPjPqvwF8TL",
  "key33": "4mbfgd4eUnhMNpXn5wybEoUYmPXNECRb8H7W9K2W85U5rTgd7WLA5tygcW7AYBjtrPdaFyMKzmEHZ7gCJHXSnXS6",
  "key34": "4S1dgB4QmizdwBizrwx2WUyASqyR2vA785j8NYHSmx5k62zQXXR1qfMeArA9rfea4QVn8RnDjQAf2h6ARRZigi2Z"
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
