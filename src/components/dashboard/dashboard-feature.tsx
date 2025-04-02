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
    "2XCyEwJ2F8QNcEQhKfRoiZNnMUfBSm9z7jH3CQAZpK7Wpug99jCCnyd3gPTK4bAnVgn4Rjnq8A6ueaCL8jBQPYtB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BVYEafi1WMrXNuzhZoC6qkeFeRZ9r7ZXxaQunThAbQWjuNmjgJANw29vL7iGzzn4HLmyfKGNtoaLQFGw5rgmnmG",
  "key1": "5gtPt8s1rCd5C8qzaGvvYmfzTMyA2FgPMWJA4t9vzAMEjvLf2UiqcViFnvfKvqH4ECaVHTR6b22ZVYaRmgzCSkp9",
  "key2": "UTXvaohVf4GskBSb5kDVwVjMUCdYb2pkhfQG2f8CrS1QBUf1FZLZ73vZ3G4gzbrBvoPuGurFJsiGHs6WCV1Gxcy",
  "key3": "23t77JFVrNYYWgiYYc8oZqGSs6VqiqDZYTvyFJtjNB8dZMAP61iDfUWw3EVTqveN3dsSYYYpEDZhmJW2ad8Yv321",
  "key4": "38rhmVM49qkyw1wabtYtdSU1Hc6rWK4Jiokf6nd7k5Wq1awpkqyTRkeZYaAh128T3hHXg3KDZYXx1Ztwj2MJAg8T",
  "key5": "4YMrmAggWyof5AYPitWC512RhS4BEwecCvNcMCgJvJb1sykhmkvYnyMaefhTVQnpv1f6XmueRCmGoBeEu7HoWPdz",
  "key6": "53DxTUxoJoy9SNsmH4b8G4rGbWbZE8KnzW1GNjTS3iztxEpjWirMxGdohLzs81GoKGefcmKwXEnUPGYFFKL2VEQg",
  "key7": "gjs79W3kW3v7EveTZVhv7ahJqhiLmh73der2draoAs39bvNYC7EVCftUrSLrwc34domY4V4nmSra8nLzAXCGPoT",
  "key8": "ts3kcShZ8biZC3Aihm16SH2xMLmwEYH3Q1utdzwma1X8FpVSHRTnQEGFFxdizFF4YjzgS8nKdT7e7vQexh2zu4k",
  "key9": "3T5LE9Zy621w4rV1zaZCEkyfkeQyCiQmzEDwGPx3wu3jBpsiDffQe4W8guSztQHzWJo6zc4iLSHzMzfjpaYfHsT5",
  "key10": "24f7EBnzSYNqgy864keuEh7Kr2d4expvn2VkrWPe49LSFkS4XDs2LSzn4VSeQvRduV8bDCmx9mStkBqdNwF34LBH",
  "key11": "5dAWMRYsFCab4nvzXJycPTb8DMpqN1V4xxE7AYECPngMegSVkKb4bSEXZxrx8Cnam8EFEiikwvVkjvsReXTLhetC",
  "key12": "3sBLQWfuijytbW9wssSjJ1py1Z8kqb33FWyKBY6KfT6V5noNCcz5MSTv93N8GAHYdqjGuYausBehkffRydrp9Jvo",
  "key13": "66BLNNeksueTABQed2UBv9MaCXqntBMi2naLqch8SMzgcGxTmb1xw9TSZxAD1eTPwT9SFZ12g5R2iuJ1AYLBaYei",
  "key14": "5RKo8oHAgGLiaEc4Wf6fHW2qK56vq5MstqMCMVCUnFNooFYSQsUYS4EA6dSfikkdEWTgsBeuqURkMQeBhBusd4ka",
  "key15": "2ASmfy2euzYX9KtCyW98akt6BjdS1ADk8Zah73NxCGcT45Gnv7WkhQanW51U4h5THq3jzk3xixCAoZsUjiTXxTao",
  "key16": "4aPPgUqgfsosFoASpRU44tsMRzG44mWAHGK6nzAAnnaZUBmz9UsvAYo545eYZBRX4NMrgSvZ2pmSzFYkPtPvCF1w",
  "key17": "x5e3UvxEHn6RoaY6KWLakDTVgT5d5dchD134r3Axq4hemwUY8n8CzDoT4bn334CgggkpSfei2hKqkRMfPctQDmm",
  "key18": "Nz9tChxaxw6kcChXuRT2U2rT4HDLzEBJWnp5S9gPu5C62qfg5gnaArvSL54MfhGyojr8YLwEUohxcbPSMFcRd72",
  "key19": "EwpQkyW8nc98QvrP6oakXSKhYUht3JKxJ7yjtJNeWBa5vFQxBALPgxKWLmAvbSydayyUofD95WKWTjSCJEHS2KG",
  "key20": "5d9xELJoiu5mk1Y7SA6qogU4Ckq4oP2aPvpCYkLQsXDv2Fz6D4D56X48oPfPSfVMtEuKU1CsdGHac3RsJw1niugU",
  "key21": "ocWjrgLRgfjYMye7nAAG9Lp9YAVrXKYga9C1UJGZRw36RmSn6fWeZAgAQ2QeSpeFH4Liw7rCFKzAzysjRoCuMXo",
  "key22": "rnrZiAA3kC9ZYcKzDRjCpzV5UzmU351ZfzFqapYYodmG9UQRcKSdmxcNtFPnRhSvQJieKnsTWqPCX5YNwrz42jQ",
  "key23": "pixQQZSrJuC5E8ZXzTd4eXLSJ8qyHrvsGJ3cy9ss6Yj7Mfx6PGD31sbSC4gUYXSD1KEwvWvRdoLchidqFydZzTG",
  "key24": "FX7SZaQMUKQu3P3bvsSESyQdvcZFua4aqn2Tu731y7EbKX5euwzkLqZtQaMgv1wVWwRhZSvj1qyJ3WFMocMs1Cm",
  "key25": "4dTeTBzRvgxYX6GLTC6MwGLS6STUcCqoNNqgby1d2JDCq4tN9PXF2aTAkmQdPvxf78Gff2sp2WKeCt5tg4pZ2H1P",
  "key26": "25cLLorMTCknQqExB3ggoyYBNi7gpnwc4JU4Ptiazj9gU4T97NtEyCjN5bG8MM4JATqkXeDZhxaoaHovfP4M1itb",
  "key27": "5NQ8WwWWJLreYc4oef4sUA49NmxeURnaTA6GQHQXhuzpUn7DFnTfpiBareSqXw7vfwAQv883vE2nTMms695SMaU2",
  "key28": "23estZniR9nue4VJwUx62svY3tkmZmW45AoCt9MepBgJzLGwx1T6GPyruUVZUSyYamWzwCR12Rj7bLQzsiXvcnve",
  "key29": "kzuPUFZFmUX9eKckKMGdrinUvCNg2gjwwX4HeyhggZjAEuhhkvBrpwnpo4eAkVak3pxvRgtZnrj2wk58SiQo2YX",
  "key30": "4zFagLUaFfdVscPcH7aCWyCt3YZqFhm54cLodkthX4vASzvffpuzDU1caDeEumGm1nXpqEHkg1BBcbCi7wBvNsiQ",
  "key31": "3vUniKuMsbJMn7oHhtkBPkyZU1cnGoU8h1mMf2rrhyX8mNBVVj2E27DXQMnZeL4KTKzZ76yrw1sGGCE3Ys5xrTLr",
  "key32": "2c9XtBbT8f5gWThhBuNoQpUUb3SEGsQSNXTprN2FfswqzB4zaXuod74k1iBqv9gUVLyC9Wmo9ox9euKU9qjhnV3k",
  "key33": "3us5P7YuWcBTPLReE2ydZpdRaTzn2VEf28pARqiq4T7RqV6RAVQVWLHmR4dT2vYGm9T3QJGKPU8gKZHURm9Ypszn",
  "key34": "3AtEm5fmC1nUXEmTKZnViT5AB7GfgT1y9QKeGcnqGhxB6AmAhMmvZANocuywSWwuaku7ZJM4msTzPMahbPdy6T7V",
  "key35": "4tNMiESvKFrMg1QS879mH2uJgG74eV2SXZfPQNudZAuHpJuPGahtUwhgZJs5JNwR4ZyfQnLnMChfaEkayTPWovCm",
  "key36": "5KpvkkSqSTACReEeDZtyjRjvtY36K4Tfp5ovZuQZsuUVY23TYiAif5WHrvjt8byJqs2kwXPknTcp914bkD9iyAr6",
  "key37": "2uAf6qrf9e5hA4eawE5vSzDtuZnu1NvXNLh5doJHkcBohaasorRSTLbrDDtDigc5x54qLoYJ1XmTdALX31MAzvg9",
  "key38": "4edZYJzY67X2M1RrZx2XjBkCMcgKuT1T3XrLoT9w8ZPp9PBkbTghcKSTzaADJr2Yo4GQhuALphASTKxZqM5uQbzn",
  "key39": "4BXPcn8Rs62SHXyvBmLXwBQqf8speG1su4dGDKsZMvST5YRDHBbvnGfV3xDim3qhNKkvkRnCuTRiPATb37T3jg3r",
  "key40": "2ttr4fhjCCpA25cphQM3uj3YMbnZB5FD9SXxxqCthgLMBADEeJojSFnHw1ScuBwyuGvukQzjgVBB6M6mHZ4p1tXf",
  "key41": "3T3Ysi9g35UcVjZCKzAQwjn99WETF8t6V6rVpf4QastWkDphG6UrDAaFPh18TjMQ5PhNgw59ccZ3dsTjJd4CWMZa",
  "key42": "2GtL1zRojDki9cyhh6zMsseAPRhYKd3ektQXYrwCUVNuFNUHNPPqa9MVKawuxdYsJykCui68pkW31qe3c3ZUJ6Wm"
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
