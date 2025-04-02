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
    "gnorAcuhvyTTzvKJRLhnDYVBWnJzbmYMX345PoZboeraK8kYiDHQ7B9HQPNrjUuKXqu3ozN55yFzWVzy6fmTHFQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SjEwhUPT2S6ZV8fK18p49CFaH4ojFVGP93Fq9D7ZcVjey68hSCvhAhqBuqZXEz73tmLnyFYFpv1CwfvQXMmpsnF",
  "key1": "5cWXU4pNh18gjeEedNbCa2rRNeoqmsBJtNUqD4mAXgZDZmgaahaH8bCZeWoSTijb1YgdLkQr9QWUjqURGWfdJpeY",
  "key2": "5HgpjrcPnX8h4Tfo1gana8odHbzYNYh24LxM1U98DLwLw2VGxrMu3ggpJpXVuxMKukQ2vT4Ys1bbwknfvCvVpEMg",
  "key3": "csU44mR4QdKRUvbvWkVKr2YcFgZf4A8Fa9vET5tYKamLSjwuXDMScwriPkTxZh257SZKEbVozbwGjFFw6PnfLCc",
  "key4": "X6YmNdiuSpD1NbeTe1Vew82UqafZLSYb2RnkRrEFqZedBPp3rdJSSGxQoq9pdSMSPXJ82EBC6ATqkkNyJgP1aUe",
  "key5": "332YUdkMiYzem21o8Qy2kSSZxM7mwh55NoohgkqowdWQVTaeDJF9DbXqBUEga2uVEsraZXg7gprYAZZXg2zteMGk",
  "key6": "3DP4z2SeyxQjCE4mjvK7MirK6cC56BKcvn6weo53WjzEyyx2Mfkvm6m5KVAD8aU9d3raa1FCqCyKASV2cXWCigDx",
  "key7": "YuAhNwRKQP66ihVeTkd7NHX5v93834iSJHhqmk7Tn5SSPhA2ttXd5D93K4v3Xik87Y6jtuxJK7kacgo9Qqeu5KP",
  "key8": "5HboSKJ3obUsGXR4TWESYGogcdAahtYJdymVtvVNeXmvqLesBXUbdLXT5VqPPgJFNuLHbMAz63hwCK7gu9aYde6k",
  "key9": "LRXLdzPcQgbKLoa32SJeU8pyEniBRwqPSK5MFjx3Vo2wsGS4XXd6E1jdzmVLjEuBsaMy2qcLjaR2Y5LRRybkez9",
  "key10": "2ooxiBD2geAVN1gY367neqw2dWJytBYadvxEkj7fPesSETbEjpBYDgYKWNagRp1Gb71VQM29T2gKRtF3z9TTkXtK",
  "key11": "56LGNfVaFakG1r6LttmcCXmBtCWctPcoGPstr13FU1PzgDZQZw5etxoDXREYtoVRqyQG8j65TQ7M7s5cTM6M22vw",
  "key12": "66iki8vVu3K4EZPHtRkdiep5saSR5b3BE8UEtfBTqRWW11GSfA1Bpb7hQTTdTuXZ3PNY8bjkgrT9r2HqqMbhW1a7",
  "key13": "5WGQwqsBPbQ8wUnQicWh4HEVHEuk7CqFsgNqQTm3BiRf3VGXYGDLeccWEJYpEAE9PiSFughywzBJoTJizL2e1AUi",
  "key14": "2QQhBP6Km8EYVSV6vYxwfygrDjrYVGVUeXHcnZZxJn4zQnB7nPaKi2Qbf5uZTUs9wkh3FiAguQ2nWnVwkWYay3fR",
  "key15": "vFVGbL8bCoDXGGabbMv1bEUVbzKxemCKd7AdJbAdbyRZxi8sqxFNDssXMuRCtUWPDDE6xiTi6Tk1zP9c8orSsLA",
  "key16": "3ssxV9aXrthwdBUv8rSrFXbg2FTQo1cZQRenJa6ErKdnmNrCHgpPfg7iC7LpTqfiNSMw1fB2imiqyuLu8SJK8kFr",
  "key17": "354wGvGQ7kWiTyxsbnpXpLmrMsB6VCNkL1oeZ1NcaXrWXXNyjDFkJ3BkRq3ToaVLytwkxwBQdkGfZ1X8uvP4cmzX",
  "key18": "3shMTcWgaFbE8KXoWexngXxti7osWVRUfwY2KKMVwVE5MNjCURUyNmjwKCa835oFgHAiqG4FkiKcuWXjFx82URqG",
  "key19": "4rNBVAAnmo6uGtVSwTut7B8svTxEW4NQSnytGeFSSQPQp1auir7EXPfG4whLFF3nj2F51tWZfzPTxDzjwk1bBFEG",
  "key20": "5kvig3MoMQvLNbneB6PE8y828AXWCvcn7u37MUi2Eh8abQQDU1WMVQtPRGVL5Vuf7GXvC5C97iTWbopwhycaVDga",
  "key21": "4CYLUSe1o3ENmaSKBGHQLHLsY7w1HrVRYMuLfrKzNpSHfaNAmkq9ByLhy5CwajufBKMtTYWch9pxYLtdLGM8zfu3",
  "key22": "5N2sZ7Rjy5LLL1fh6kFLtRrwsAnPrqQpyzb88SrsPamTjHDK1XpRkKNuYcf491vj7rNZmG24m8opnV7DSLPk6Ynh",
  "key23": "3sVDzmqZhmUdUriBWfZkYjeGWrak4hxaegV1n9eNFaNWpVB7sYfZDieHPueUXutRZURtyvQWzkvntF78XuDeuAQo",
  "key24": "3pSxVu17SDpXwMQsdBEEi1ed4cSf2JDKFiLFofbbWXUp1kztkFfNZWYzhL3osYZZcroG3saYvmLxj5Zhe6GgaGHC",
  "key25": "4uByWgaPtZ91EFtm9ByoZ9HJrHsW5QbwfsudQhWQutctXLHaenK4Cskfks1KeJP4DtaMJuzdKrFupqgMj6mLPdbf",
  "key26": "2B1P6JjNS2EBN3UA4cqZYGrokzKwy5xRPTzXZvZHYWttk6owUXveQgbWG4H2FjbKrgAEEwHDkHtknkTsX4MMR922",
  "key27": "3zgbXSxsXnenMRvMKwMsvRSuC4jYSuwg2RugzsHvqfRFGsQyqSYivkJ7PD65AzVTcYYdAH5AiKAFp8DLa8ofEZf9",
  "key28": "4LqWhYcSBPkWpENrxuVjR8cvmdhQmfY5NkoRZX2yq4WaybXfqqZxvNaUWZP5MijW5nKLaeKfhmE5aV1wjhRfELoW",
  "key29": "2JVaAyEpUBsTzo75UBgqUKnFCcArXc6HrzVvGoJA16WFnuebCXXMAjUqXk4b9ptXbcLZSuQxmy3FcVYa5PM5Ji9H",
  "key30": "Bg88XwCXtsDUAAnCbkTsTkP5RxRszg8KFCvKDz1VkJQPLZJAAhSwSzyS8zCwwnppSfk6fD5g1SVSNR7HqmZT9SZ",
  "key31": "t9mq361kZkMx7TdWSjvowhszzPoKyHcuT97dKLLtSzYq3Q6GSXRkNicSxJdrVqtGscz67PA5SnkPoDE6KTYFhmH",
  "key32": "3WqSV1YRntv9QjttF6sSAreT96TYUWH6ScC2Xdd1h7JU3tQzQf3x5zzdYdPqS7W3nwY6ZTK6kDG7WgPVMrxj5a65",
  "key33": "4J8Dhj3JddpJ2i1rZjM4aXTk4ybySGCizEiy1Wd1Fe21VJ8Qop9bYsMDeMR4DucbBtby4TNnrEimA4vz9FR1hYyp",
  "key34": "46Cm3uX7H3vjtyuBPZbxdBUzbr6UfW9L7BEYVeJ1JUTwA8EjVTznuxNL3u8RjUjud7cG2epf9uJrnJEffiFNoxf8",
  "key35": "2tHBiMV1z1CXKp6FJ422i9uLrwVwctoF1yQUxHxE4ho2TvkWr3DvzVVii1G9tcYy586dgP1ECdZipbnAotgwTuP5",
  "key36": "3LFYPZoyCddcGpNuCzmnvbcN9TL9Y5r4Udbme2mmZPrLovzedrukMgSM7VwSj75ezpj883hZpVhtjCcv4WzNF7EE",
  "key37": "3xccUgFL17S2bnDqkCYPx41x2CL6wMZZGMpf519CdNHNWiq4xvK38bP7pw6asYchXTBxnrQxFk8YsQMRCMHs8Gq2",
  "key38": "qSTH6RmQJUJaMGSzkGNmXcdDQEXDmNokFH3nRtjniJ5FY7UtL6jp7WUj3r3qhy7ru6SQ8upkRHjTnpHS6UEjNAM"
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
