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
    "3DKpMGBCSDrNZt4RBo436xU1ddrdfBJWmuecCt24HBX5x5Etgx7KMzxMiz4HNSyzhnsQCv4zoQDVx7nQwefh5fRv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MLB3ZwVdkAsUKAUfj3WUi9Z1t9v2ptHCZyjSM5QP9bCD1B6CwW7jqAJxz5hGBznsBpUSckTq19VQz7SzzKSVbEN",
  "key1": "64hwHLmNqBAEytpjXbUESMujEwGRSYWbLXTi1wS25t4JBzt77eiUzE5Z4GE5eJHoK6jn5dCyRZ6oQsrkQLpmDuCd",
  "key2": "5fHraK672wdQHahtyoCic82LnbNBe2ionjkwEQhMoTrh88W7PXuioLYJ92tyFnvsWHxaPVvjbn4wbs2xaQ6fWAG5",
  "key3": "3zycmCrShMzjWt8PyERt7emTz7tv9ceG81G8E5kkchjF2ruPHQS6JWpHCekMYi4nXY5k9nNBK9CKcHzs49SRNd6e",
  "key4": "4ZAi7iPdZexLY5CYJAZqpJJu8N5ZSmhLRWGbyopp3CDa1XeR8CMe7f1JuiZtg8T3o7mzob1r3pzQhrp2cEPracrK",
  "key5": "4saJaMeHSdDRBiuFJfiPkRRF6Fpza2v9HK78KBwbR6YYuzAbz9LoF8adRE9nTLbbHxhUmngNS1VR34aV4qSxMmMc",
  "key6": "4MPmV9YLDgo4RRzCJgiVMErq9S8BfutEZxnRMPhX6HivKXew7oPu36rXXGxNuU4JpUM6CUhSCk5Va95wYKMdaeqE",
  "key7": "25QT2vVdURuXLBGCzEMgtS41aRM9VSmHjDrEuomiJjYu1GzpDoJnPbCSHuigowodtf78EdmvHqDaJ5eqchnyBuLN",
  "key8": "3DSfq2nPq6UKwA86wRibrMGzcbHoua19gGYS9EFazjdAM83Ze683b7dxQ6ZiUQs67Avbm82SjrqoQm1ciDxJG9P3",
  "key9": "4AYESWiqzEiES2TLAQKTJzV5eWHhQo795VHPE8cmFre586zzk8uNaP5R1Kh43Ld4wWv89QQiLbkrBZKhW9v1MwUK",
  "key10": "3pTcwxdKk4tTPd4jHZmgjtUFsp7D3L9seuuqGz3SYqHKW46ihLjMpJvUtiE8gadqbhasvkMuHrmfw1XTZs1a4ttg",
  "key11": "36w2KeQqAhbqEG9jZr4iV1UwV9j388Cvv7RR6Powc8NCbTTnMppbtx6ifYuPtzFcxfYV57mgKiKu683JwTnSUGaq",
  "key12": "4HD1VfFXM8AmA5NUH1E9Cp6112GGpHA4rwyaWfAPo51fxHd5EfffPbYTajjoJ15LWLyUqyUMs9vA4GP45SjuM1c5",
  "key13": "3wwbDGUwwwvfuNCyxFtgKq8fESSv4iadRR8mkawrutanoVvJHs6uvEkRSpqhXrZL7aBUgUPYZkJxLSEPyNfBjG1u",
  "key14": "4ZDYRtNjFHXgUvyC4zPvM3PvvfNFG17ed2M35ZytGqcc1B6wR2CefouHnVtgXkwZkvJrLGR1SKNQW1kD4Qr5Qvve",
  "key15": "3sPdqM5rVgAZCJRATU1niaA56qNhm1Ak3j9qXfqJKt3hDDtTDuwQbPCxHP92qFeJ7jfwWF4HNPBZJBtjwm5HkxGF",
  "key16": "wEjG8mXQMkicaKCSXW97KkZZQ4nArixN7VQ7fVspP8YkwJ3ZXigwD9WG8BDoZvTyzYi1tMX3bTDhtRxvQ4M59vG",
  "key17": "2vH3BkKwmM9GteEecNa1TfZAdB5nNfau8Fa6rbdawHC5RpFAaUwoFc3v1XVw4rzLrL6JbFDZxVaEwS2cPxz6HdMB",
  "key18": "3TdCZoMLcSF691NzpkZ7PGhsmEe1RoBm4ARvWCgdBdkr3PadpWzNqsVR7va96hyk7P5kmT3UTTXtDtzCR4Ce9Unk",
  "key19": "21fZpKrUTG1VeTq1AXCGLHaUuk6XzCkLnGNy4bibmMkfNM2wwztzKdNCQigNpugVgh3rBU6rPJY2YivH2iPir92y",
  "key20": "3fMLCspKf9Jqn8h4brEyWifHy3U1Usu3wb6TLmCFtCz9GQwt88MXBh8VPJci8LJoptBvAYZLVMveVbEZpUKCAbp",
  "key21": "2JE6W9knpsxexuqrTMzc7inthNggRgRb5XUkFybqsamzTuWFBGnmPyyjWYZxHRqJNQGAYGzg2K9irJACj26xsbBn",
  "key22": "4fWHX7owKjoRtnE5Sow4p7D5UpuWe3i6BzcvUYwQwy3eCSU8tgZZHNP2sUDXYjDLg5mMprYxRb1Jys7nzHjNgoGt",
  "key23": "2NLv6q14MvfDTnA9c7HNZE6FG4SiHDbZKQZpk6uUKMafteK611NSx3xMHEtiFmQYEEWupVcZ2aF4CBu4RTBxPNEW",
  "key24": "5jmNKjUye3CnfMVaRzkx3QMwWp3H6g4CnqkRuLaL3Wg2r6TH8Jazsrgac2EiwVNGycyqkpCwcukyYnKkLUrDfyU1",
  "key25": "2BHoXTJxV2M9PdgESHH1iqpc2dSHi6SzgssXr7dWCJTWHnvNUtxzY784igFhXLZ7ZuB8Xnj8vJyDgBRVXVByBs8d",
  "key26": "5b5m83XKnd97JUYNxQwB4LuNK1PhkkfYTCJLPr1aBJJ3PUbhAyE4UVvRTKanMynieFSeKyYtxcPzwxD9ypbaSd3m",
  "key27": "22wkw8jK9J7u2AdwjpDJQ8RXGy3w1AdNrNVbZhdjVKtMnaAm8Wv5khjsYa8Gueh1k5yTa23SHS4cZWHaPxHakKQn",
  "key28": "4KwxFSg74dzQLdVF7xQ6QAGDdZbULG83RBrfVXAjd8YBYg9HP8KEcV5e5rSxKLVcXTdZmVoyueR1mT1WHBiqZ6LS",
  "key29": "4Cy5TsuZuQixhCna9YdAN4NXhMCjyVGP7znPSBhRBMWTCuGQpja3WaT5iKPiGoVpFbgH1MzbzYiEwVZRsiCNS8qb",
  "key30": "3hLKntyBadhXRuphDRJN3roLsVkK2RTUV2LUjcnHs8HeRXN9gXmP5xpTbBwPufQjDDr9MDeNpAeV9z856Fkj9pgj",
  "key31": "3QGCD7xTnuxf8UrH5eUbQoVJuQCh8aWqVbXAmqtTFqLAb3aRQj2SqtQZntifwBFMP3774BPBckSmyqBoeYL1jHBh",
  "key32": "YDmTJheWfjyiBB9WcXvCa1JHEy18kHVdLUBAD2WPWKZLyEFFXAuPMjGfCY5jsuQ8wsdMoU7RTsqCM4kgNQtRLAr",
  "key33": "GYapsyx3QN5NsqmPWrWkhwkiz4XJBMMRJ44QGWzBfn4bhtbfjM4nrRHenCdCkgDuneowvymWfkd4FwcdqBkJcUP",
  "key34": "3KyhamEGC5zVXYJwH6yV7WRDb47us7L1q3eQv1CwUia8CXeFjEjCKBUZRabvAZBHKz6VxbzBQgEaTovNvEKT1uoA",
  "key35": "1x1W2sQeS4i8iaFqNu6b44qqdz8XNV2c9yo92FupMtGD8vbQypiH1VefR7HM9tKPqP8vioFgy87QH3ypvq4FWhi",
  "key36": "6HY2e4qYFZuh6NxdupRjj7AawvG6MZ1DZB5KY3Za3JZBEQpafjWf1Q2Zri2uDHPXSZJJ94mFqUzty6h8WoVknHy",
  "key37": "3S26KpF9EmeN5WYKQ4NsVWgHSmiVHMHUNZxy2gScU9jpUhnLT9DvQ2kkvy78gS3ghHqREmRMxF1m49gxA1T4qhnk",
  "key38": "4b16eF8VNvmKDE6SvT9NBAeUQcTUTekDos8F4EXzzxs1T6Y16j5hggur8BktexdFKKzEDutY1qVNsxF5NqusQHyX"
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
