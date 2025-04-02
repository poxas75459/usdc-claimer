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
    "qbwjvQaXTgoDqCufTh1H6D8imke2DqTAryfRj3qZFAFjYcu9Fz2ZXxet44CBT4TksHvHgnR1pa48H8Bf7uFzK1q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GDvrhkb2KaFeAjA4RPXndf1FCk1EZvWuuSJxhaotiAp2HDwE4P47zVf94xMouGN7D42Dv7TrqZGpkBARNhT8a39",
  "key1": "DBu17hTqqrxE3gR6waFDzRoBHudwCQbaas8TRX5HLuE1CW9Fyz9UxRcMdFnz2HRvG7Z8Un9B5r5hSXVgspJaCad",
  "key2": "37ECz8Bq2X1foAwLaBMN2zQDAUXjFroKtao25Hhn386476qtmpjepu6B8CG2UzY9pbAZtBhgJm7ira2dKnJ1rRMs",
  "key3": "4vunFdtPt8U4wTK5sfcAQsJKyXgAP4qx5NnAvnyr24iTPuTiMUFikAv28sNgQgCm3Qx3RJbKjszohjEpMUhu2UbX",
  "key4": "9MKYsaAydnbiPDDLwuLPfqdL3bfLGHmkMN9AGrMoxH3cdP2f7MXZ4CgRL97QnWMNZhAX4QA8B3B8tAVCs4zksvx",
  "key5": "Ljiu6wBtVoMrdD7kJkxtivxZDNYhGt3Wonk8r5H6rMDLexE9n5zAZ2vkR8jctnHamjgqGwKqCVFKYKeFC39GwjG",
  "key6": "5UZnidxovMvDU8YBXAvcRxcK7moEkc9ahPEXi3M1e1AEZ6gbzMEEJ5sgk8jnWhPJ8EoaykpkWQKadEYxDpHBsbG2",
  "key7": "4fwZ3yvXPzepNXiE2qdCyWfWP2tsv4cxvKCV142EuYryq1mPv9c37ZTDfPdtMteVgbpK9F9sF2Z3TABHaAvZaJrz",
  "key8": "5TsW6tDBhHaakMFyUmxUc7wfXZjtp3TaHCoWSEtFFU55t5TPbPVwnTj2EGEx41ctEwGyYEPLZuiiMFPr6GuHSv1y",
  "key9": "BT1m2CapyLaa9m6JVbDVwwZGvafReN2RUND2zQMwrAayJQcT3gkvmsosPKSUHdW4BPbaN1H7ArQHV3kjvWptpBK",
  "key10": "dSovXgZeA9kvw9g5UXcQoE34Uy8YbrGrz7AmTZXURauWYHsL3htcdxEsCwvuqeBMwUf1dycKh8Q2NdWgdZbR9Nc",
  "key11": "656xvcctR9phPdkHsdyRF61YooSK7Sb5hVL3aLoWBbcnfdaE8PKFBmDobvY9v8z6GadRjHaryRjutCyBRDD7V5xK",
  "key12": "2YMP1jPZ2HrfVsJmiq1LjyJZwDG17J5XaxFv2mmDEg2c6TSyM8itTtSmcmxixYEymt1PRSPzw2T8L82v9kqrh4zE",
  "key13": "5qjWSrA5BfpcvozZHDV1oZnAdPxq45fAizxxgSCrv79bQhGzZjjrZrqRFJciv3sfQfzX4WR5JZCdAxPc2HiQBhYa",
  "key14": "52dmJsXdEjNTQvo2oFBvUtSaU9ByAAexi8yKJiiZY1o878swiYJwqVM88gfADiguL5j4oyT5K42mSeUSdmfjELn3",
  "key15": "5dCSRT1LP4V5N1fDKoBi46xXQPiPGpNWpsFxJuwZziYTgptqxqdiXxqQ7oiwL6v5E9eGR4S7b9XeS6jUjX6cUXk4",
  "key16": "3PYKDu4HdZrkUqowDCVtPKqUTSh8H5ihHuN7eewndXTc8sBCNqu9NXQ1hTN769vktUeFNYWWPsVto8jCJkRweQkB",
  "key17": "2PccNFQS8UFRa5WDtbgTvjiTU4SfGFbisaQQAQ4Xq1t6Dbr3HqDBuNDRGTHc6Ghgh1d4RWELKTpxgDPHt3WMLEun",
  "key18": "47WeUQsjmy8tLTDMSQa1J8UvvM6FqGGEZMQwBPyyqtxRnmvcJbZGSgYyVb8bnzJj33mbaUjF8RmeKumJcJ7eNHN8",
  "key19": "2QSxz1jcs9KqBSfFjNkSWMHpv4n8rzc5CXShZvArUR6iF7WQpwamNZeD5msHphdVu1BkssLY6kCB5YA12xKmpj2T",
  "key20": "BEjeE5B6qbRrXCoKd1f4EwZm3pea3FNxHdW2kG5qdtDAwhexUUZByaWPnAEYNk45tCJVbefRMSitnxNRG9z1Tcr",
  "key21": "3wHRijk6VMEgBoEHpsocZt3hUYVt3tvw3GZ8iMR7PMcRZUjozjKPSSK4TNrPqThdQwjnxnWkyaKMC4yEnJUUT8Sk",
  "key22": "Gvh3xNpkawtYEL6wbFp6eSsaTqq7L3552sWypkaA8yoJDV7nCF5kzwUVh9Z12fqUy8ca5b9m96G9oyfGfRDMZju",
  "key23": "3iHKwPKXiktfW5sae5Avi5jsnfhjcDugsTRQV6Ly6yx1QHFBd8cMFzJ8MvZii1UV7he1S2jDPPRGwuRcfgTZ793V",
  "key24": "5DHu1ZcJrrSRRbgdaMfAVJmeDc6bxsXCYiUgtYP5Qphq8Dea1DXJe4VWav1tELHhafZYVcuSHVJiPCZBWFDAs7uj",
  "key25": "z22vZfcYZQePgf7feXnNiuc6S54MCCGUHYkihmVHDHc6bsEoUjzKQ1DXsvJsABRR9A5uybFV4SbhD1LVQrH5o3M",
  "key26": "43TgnoukNgwKU6VQhTvGjDAzZpRHQJqFA262ZQdR85fqjEvruZox66y27SeuTAwKLWyWTZwMDScF7fJuSbij78XD",
  "key27": "XtnrhWCYBHJY5W4VjqRPqMvUJ9D1uF6KC46mUu6LMYQYw4CpAVryfSvZQ2pjoeabugUqB1sDSSNLrzqbtDA4pCW",
  "key28": "raphzmW5ZaFhRJPGjvUpH8iyc7mSRVyy9pZFzmLaB4pzUDzxHWxSzLesSNeD2Fu6C5dTsZrYkc6qvaoP5hwNzzy",
  "key29": "4epYVVpVWWWH3tyrMGmmtCt9riK4aCK4Xfdzxzmz6jguirRD46kENcqAys1t1Hb4EHhXhnz7o2fGADzpXBfnD1gt",
  "key30": "2YY3dfy3YNooJmhpU2xJZ7iYvoE3112ZNgQS2mFiGCUKLYc624F3VZ8dPacTvDXoWVmPxA3kUsaUqQgoSm5pa4Gi",
  "key31": "5Py4JsMGLgxV19EyhYsCZKZPtDcidGCtJKQpterviQpsF8DnQZWmwHe2af6BHz6EqEwFN3GwPNgpNQKsu4mYsmBV",
  "key32": "34Ed3fcCQzwACW66W729QJ4AihHm92RMjrZepNVAAWTHfbTLHWjixKyueYVG8MUcNgKaSVeNAiuvpsj5AQ21d7Xc",
  "key33": "2fcaJRFQSipvEBXwn2KVAYp5JjRc8dETz37Sx5birHzk7EJGhsTHM4WtSGK5XGgch94pTxerjcc9fU9XYMMxwWAJ",
  "key34": "4XS1dasECiuzLgagiB5xBELk2rYUE8UYhcwbws36HFzf2dEmAv7nfhZqGAsEybm2zDvW1865R6NUgn7dbYbHboCj",
  "key35": "5hb8iVtL5J2b9h5j5hnUdv1PP9dcSuQ1ivMWXuCVSChazFdVHTjthWnBjMJwxD5dpt5AZiHhRR7L35WswpmNLD2S",
  "key36": "38k7tKf8HRtCnh6jM4bRJvGVKQtYbfpiMusbkxBtf8TTJ6CskTxhsuob3dsUKp9JjJG5LaNN5nGCvmEJ4esi5TK2",
  "key37": "3SnQXALJpffiE6N2N9j9XsCQ7nJAsYhfAr2iToJgvy38od2yoWHPJrmRPGMs6JVJgvCX3fdVGuHb8C8xPwNoBjfh",
  "key38": "3AyH5nyu6ckVv2vrDQ71sV6oX69ZpYuKKmSnwCvH3ALo8pr6xAA54WWjSGGQsQ1LxvQjGhkTsCwUfoW2vGx3Q1C",
  "key39": "4sXY51Y7bfPoruADpryk9Jk7dvD8qse8E9XUhLy8yWu96fS2WHf7vUd7WANNUwK3ah6KxSakdkwMoMBrEeFCk1Ze",
  "key40": "KyirgzgCPMXnscCNZBp7UQxU2reV3omf1p3FHe27ooSVnDqoGrQPoiQC9sSpGZfGtjjonZ22WWUpqDS1ChQ1hLg",
  "key41": "2e8wWAiRBLPmY4KAMCTopYecBi6PSyKz5dc9gErThZFx12wbbPLeXUJJR7ZRCSMbWXzNDauHbk5ebv9kt7F1Bj3d",
  "key42": "2s2MMLNpTpaF5Kh7UhkuPGPVrpJ4VRew5PipvMTpB9GgxUqjzVi1GaTyJaiQiPd2862xgGat5xPzAALTEV8Z5gGa",
  "key43": "fQyyxu7oqujeorXpaqwWCVW9GAFTTVZS2aGEmBFrRJBQHd5gjAM1a2Q1ViWAGfLvhgRT97zvFYdW5ibB8MprG4r",
  "key44": "49RnXDFkEqTM8Ch5ww8jwWpwjuSexm9jPCF9hAi2vNu4z36goz8uPYDmYU1hsY2V5aczt2yusvyp6twGMw87vFfj",
  "key45": "5gyxVRsmL3EjUxivcfzYNFc7csaESS9f5cfthfCWjNBLJWST7L3adB5c1SWqTudbD8PrvA5Sp7KgncLNbxoWXynF"
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
