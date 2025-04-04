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
    "2sDiZWojRpvKb1KoA9KGzG5gQ8UBoXqHWWMohXx2FNtXjtAUM7Qtf8YSrgHsMuxKYn6m276CmcQeddayMWaN7882"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rhrXgaCr6rFrMMUemxHgQCnjSxRYVMALGw6CgBqzgQZfQNWZT4SN4WcbsBsWrbhNVbDZNj7eFHLNfcZ4d9h3mny",
  "key1": "4pnq24AHQzHteZLNy5YPdS2SdgxcB8adDnoWPDNQ6rms2B33z1PZjZ1rw4DGUCSr7MHqK3eoxhgdBShLp17Yo6TJ",
  "key2": "5XvZGgg69CCkPtbAFkYTmYJzCzutKQg58APMXtLutjBk7k76WE66f6xFN5xNr5U19zzV1KNH9gFeee3tkxv9yyaN",
  "key3": "5pPfucpDSPXzkwE3w6zei6WhpMawrs1LCfCw94zUYDAJDQAhjL4kQMKwj2BmpbQhN7SkpwGfGrmHrjY6Gt6CpJW7",
  "key4": "5feuZXxMxTPpHGDfWcGUi8GGay5MhbgQL511ubwheFxrvTmDfVTrTVgz8cLponDkr66YXPewad7VoU5pm8sdJE3r",
  "key5": "3yXxCwCcUGQ7WNRmCiYt1fJb8QxGACLhRGMzch9h3SKp65YUfqGQRpoQkXTr7PUiYevb89UF4befsEnegswwNKRr",
  "key6": "3GJ9bveztfe8S3eZtmkFPn6anycqSiPH6YAtSUmh8uaFsyEWiQLFsdE6h5D272e8mbC5kYugnU88iV1h31hfxniE",
  "key7": "5RFTVD8PsXBm84zdaXRwF8HC3rrpYjB63hkWcaDmCGuBQjvTvWxsf8Tjt9zajhZUMtJkQp9KKQbAj4fRhBSKrkEG",
  "key8": "cv29ba5TrgZRqkrraJCf8st4vfgaW9Rfg6eoz6hSerQAZAifhX1KD2NDNDHTj1PKRHe1JutxWUiAkQ3G78kbayY",
  "key9": "4r6rsiKZTKoJJVq2Nh4cVc7iNE3pznwamFZpe8zhAxD4kT6vxN8o3cv3xVFKieJZrTasvuc5rPpa93gNaYCMeYR8",
  "key10": "4LqdeKvy2PqfqnriQU1ShdmsHXCBv3aPe4vzVDB7JwQtwrZCGrZBbR9ow9cH2VTWgXFP2dYv896xdeLyPfaumvTY",
  "key11": "37Cvsq2nDR8n2Hx7dA3mqyV3yVuppqgGhsKfvToNrAxnXX1SBBk7hBh4cHcqrXwB7sJ35ttqBW2sUdyQ65Wo6Z3y",
  "key12": "2tXEVpd6ajijvwxHABs6Pv2ASphqMDf8sRjMwnaguo5e9iDNVPUxkhcmmQfQuHafj7epjjwunBftZUUPxQduPXyN",
  "key13": "5s7bBjCEzYHSPm5n8a9XVtyiryJ3PxC32qrgnotwTNWBK7kdwbgHCvdTC8qgjHVBffUo7Qr9Y6G23u16mtjM18Sc",
  "key14": "itk3L4T2hM7hhpd6ei23r91i6hbab6sDXGZaUWQwBMfhrS2W7gQKWvEiQQqw2QXLmRa5Eb9tyWSKxpMVRFAW9cv",
  "key15": "mhRiomM74MkPaAZsVu9V16waWrE9yQFdiFSuHUd56aT1QoGYyATpiCoyKBTKKprfxXdWvUoa9hYgG4c2SLTrL57",
  "key16": "VvndnFn2MaZtHA6AcoBMMK7KRxeea7S29iCktjdvptjjVg4bczYkJdV4CTY4MERY5fmgwoj4vdPbNH8YVy7exSs",
  "key17": "3VCn3eYpoWE4x15ZkoE795EUZLNBUmSNjdtZ4jENmR7pRThjKuzc5ytWsP13Fp25XUpnj1tNye5UWXhctobEe3To",
  "key18": "2L9hJJdkg9x6SAN1GMGRCzS4YJfk8MBnV4qb4jocM58tKsqdwmhEgagsTssgNhugDczEDcfi9MCxVM68kVYq2EBS",
  "key19": "4Xb5gAopF3cwywSb7rWmU9czgStMqAYRkZ9xLH4nPKtgq5ynHE7YEJK42Uc5QjJzqqit4x33N9K8qCGYQoDeaKjf",
  "key20": "4Tfykzn6nT3omuKdjjaXb375kE4AY6UrvwVmDoiVD193mFAVFajzwofCEeVS24Lrhu5xiaQCimv3DLT16322ckWA",
  "key21": "2HSGdv6EW5BfRGPJqyScczuqwqyUVRWBoAyhiKQi96Fk1SAqDW94wF6h1ExHFya66APmpBiFXEkcDmqEXyEjPnKs",
  "key22": "5NFhTcPLUuZohKaMXjDyM2x3NjWFFjQcAZMHTKL14urdHdN4pDgw7hhYqE92dpRp38PpkRxnZucMq5Eh7eePY5jq",
  "key23": "4zP6FiWsF18HyfP9r7pDy7tfcTgk2PMFYX8zHufvcYZ33ZPGabZiJ3VBXSYNWDUz8MXaud6B2jn7T7zaaPexPGdh",
  "key24": "4vtV7D4jVp5LMpwZAKVk25zb4JEgqxMcK2uUp75EhKGnH2cdAkA4oYDMxQA62edpg88LYC1GEUbZxSTd7LsHSjmk",
  "key25": "382yAuBdHfk3jUmAzLCTDHxpypU5sRg87mifaZq5V5sLcaU6f7PQtvgbR92EGLvPhLVUUzpj384UZoDncMWUU73s",
  "key26": "3DqmC9h1QWMvW3qZHKRzAsEZ75K31TrQVA9H3J78yKg19MyjkGvNW8pvw1sUDv6vTNAT3pfzsDBHgdogUfbrAsWF",
  "key27": "fmEYA8wnNfXSxPXko7wmpjveFFDqvJdG6wPqTvRhvbsWf7pU9GHHh3CV6q1E7vHruFGAcbCsFsR4y6rBL4Cc834",
  "key28": "4CCeX6XrnfkW33wb5dPBRpwBTbpxeTNS7H44zR9Fvb9aKCnPe27pZfKMwg66JPsxBvjFDbySHY2cTAppdxT3T1G1",
  "key29": "6742q2WCjDQgN7ArVutK47bDmE8NJQ7bcEF7bU1VTXWiumHW5ydXEC3dXzX9MYSdHzwchacyXep2q8td4A3haAMk",
  "key30": "2sKTnLp7qb5jmi3HMj3exwrJVVcgzVroVwFrzegQ1C4CB39y6rpFrcP9btsvzb2RYqNVs4c4keVUrPmpRqw1DhHa",
  "key31": "3RLn4FsLs3cUjeG7XHGHYDkY9XG1DWyqDdS1PZM2dJTomPuKSEnUEU49qd9hFTL3QSZ6KnqUmnYY6cv7vaFqsPU6",
  "key32": "uw7ViAEYKHvNviCB3KPExpNZxA61vXPze6qGHj6C2MA53R2kiyCkgtfhz63LC5g35zvQQRd24vrf2TdysBd6CYb",
  "key33": "4sti68BTRfHVUfJp15D2iYnCHRtf2SGHCQW3B5BZSLdLxNmGftRr7GsYJiNrZmMKauHUw5QwsLiWKagit9MCVzfC",
  "key34": "4Ebyz5fciSQUJAXoJoEDk7R8gxu368foqHZiGQ5X221KZANekrH6JDmp6qTuBWKcaiRZuMZrHNBzZaaWD7zeGk2K",
  "key35": "3GWD3jEh68ZoN4FreiPErSoP72riGWib1TiKGLwQiqav1dDKeNVV5frVGrDVGWuKk5tAjzzqEA67ZSXPM5wkA9cs",
  "key36": "65KfhFrNks2c2Mqjrb3YJ6AK3UXTojuRcgo5nZmDwSzhded5RHxhS4DtTGMRNZ3yHcLHco6wJ9gKPuKtaHnrcTpq",
  "key37": "5Hy6uQKnp66RZUtn5oCCWDy4wtzc2yAgcZWLukzCuAUfGFth1mKmtZCLfwZYr6Es21dqaNWArkDxtc6wsomXdtWf",
  "key38": "3jCcuk9SSg9QabVcQVDq19jgPiisyuTr5hVXZdSh9UNYDi1LeAXHzjoCxkcPpxzaA2zxrJu8pmdtmYGQZPnjKmw5",
  "key39": "4hD797U3kMKtkBSJRXfWpHBqzgRbdgNof3aezjrvW2nCmY3bhHtf3wiwXuChfo5AjrQrfZf1Yuu2M3Ad9Lm9GfHv",
  "key40": "65YN1VQZP1YERsfy1yiZ2YyJKcELZKzg2tcT7xCKHncAMCSVJr5ZkjkrJmpywpzyjX9NdNazYMvZn1gLYFMihu29",
  "key41": "S5pGr1PkcUjR7AinRHE97MaCY9U6fA3Ge7aR3L5BLsZCcu4FLv2e7ypa58YAGFMrXYK4UUZyCdKPwJjurMKiyon",
  "key42": "5XdAru8M9D9Eudu8vP8u6tXauqq4rhn5dPX99DQpMGkrT1YHKWYthYSeRhTMvxcF8bcUL1J5xraHD69zKFDx4V1S",
  "key43": "3y2EYovZoqTpnG1UyaoPX9pcAhUnnKGDnqpK79AJaNv84kEKHNq2MQ1yFYn82sKnXohv8FfjJdJSRT3bwsvH1QBp",
  "key44": "5jkuRtnTN6MwLtUPeRrVEd8DrBq8DG1DjUjMr5SwGpsxsZ6fmzkeG9oNpEcS18LnaFuieaoEsvLR9FqoWUARfdYH",
  "key45": "2bx5zUNSU8GZpwcQhAchnjE6mSVr43iPmfaRimD3c1ShmCH387whZQUUGcweRaszM5BuTj78ez2xHMuu1ipFJDcw",
  "key46": "x6P1CkzKNq6qXLfQbXkSaFu4F42RMZ3C3GrfF26pr3H3XFMEDump93xa7ATSrqBrCTHRuLT85p8sVfW5ScJKycL",
  "key47": "D27SAveAAJVheFkKeyAt1rARnSLkZ5J3ezLwkFtY9AiLDy9yzggAu3jwgDWFAkWPh6Uav3MLRMwe9XGqCRbw8fk",
  "key48": "4WnTAdqmh8vwPZwz8VQYd646Vc7Re6o1jYL4ZVz9q4SpT6rvmqKXRm193wmCkgxSSAMjbZ1AxgwJTeY8NK1VqChN",
  "key49": "2v4xYY2DpRyRh8euJMdrjcpkZus2tLTWneYs7u3XFf1ew1CapwTHSVfCR2jBwaurzYHtYcEdFCQTYZ22W9CdB3Ci"
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
