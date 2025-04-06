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
    "2fqpUTpjkiygoZ6bchRmYLNinPAoStc8sSQjoDLgDAJNaZbbjzCPmFudb8YAiRHqmWh3VRT7jdexpnFfEuMWt2AC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22vMiNsRty2gSVwynGDAwt2BBY7G6sEfRoD8C9eJ9jkndxgNb9NtFPtdNiUP1E3X7L1KwheSer6rmZ3JPqFmzLD8",
  "key1": "3iQ5T4Ey38ZySgJtu7xPrwXAQzf7JEB5w67mAHj1J7AWPbXXRrzPJBV4PZru8riqY5yRKff1Lp6kSej7UPRsKdMi",
  "key2": "5Q6vKAP6giUQ4wQ2kcN618gvNFxhdgyFixidrXkrYBDDTvpWKsDcbd91Ka8bYYnw4hGdHe7mh2CN1kkXku4mmLmJ",
  "key3": "48U8KoFBJFJa5x5LzSyAroMnfHkkcPaATEQp3joiNSkw3o7FWud3DkKUKV5nLtZDu2amGg9J9142UUYth6Gub3BQ",
  "key4": "4fj5q7rTeBdxeZz63MCydUPHmNNDJXzE4dotPzYt1URUM2PvPr8gtwmkEbZUk6jB2GjY8b68mQwc1ZrxVKc4RKsU",
  "key5": "SQL16GtU6rSXVnT4nQsbN3fkjvcihE4KaaZycjxxQYJTmp4UKwBos1gutQjHUhinrDQ41zvmBPfAp29oz8wZnAY",
  "key6": "2dj25GXFDdTqwVNoBGFGzZgpUy3SeSwjeJnPwx1fxB6eJc9cid6aBj22Rb5sjCc2gSjZ23NqRkJHprhavBeLdrHE",
  "key7": "5hXQpUMVTM8HgWEDx7rYHmKJrDd36Su3GuNKg9YeFh8iGVrQLBUrkoJibEnrTYN8kR8Jj1Hp75pzLAXHhKXUFJN5",
  "key8": "2x6CmhSb4tW9AqGcLzMKVCoG9H9Dbv8r9NfKzX1QZsPdv9SLXD47qTkxnxhVpVW1Rq9pQ9BbVkCU4mwCr9mvEDff",
  "key9": "3P3vuY7qNTqBGsxBdxP21ZEHpWpiyNaxgwVbotx6GcHxxeorLfv1JCuBYVA7caBn4GSxmCRwueCgih33R7ubkXZZ",
  "key10": "2e3mLuAneZoXfrZjwJMW5Eew8Q6LFhZaME56GGndPka2M9GL118T3YEunK27HWakqgRSnNfX1iD6Vqayg5wA42xi",
  "key11": "QMr8q7Dj5WkPPhewiCW2j4mbTsrZrV66PTworEtrHFH6KQjTkW3W2oEzDoMyMXZasMh9FM4KzAFw8DACBwoK8zM",
  "key12": "3m4WDr8AcdPBnybn9Vfr3P8Raj1XnNo1pRUp7p931twi9TNHw5YHUT3czyC1hjoB11QkdJ9YGYNNYA9LureZGy4o",
  "key13": "5NcNBBMgXyFJa7pFpZQAUzw4EECy9zwEmnZor31QitqcDyaxbatRKdEWv3F6o1R95qbCUtBXLijuHrPcVEtuK2ES",
  "key14": "3CYzAvRCYVnuKhf8etg38wwa5G4DtfNSHvDkWEobmGVX9sMVje2TMEHLTLcSUwfEQhJg5emZ5eJZNXAGCvojFzRP",
  "key15": "519Lr9Bip1G5YEFsUxosZimdf15AhyapSbtajj2cYaq662Jwibe15KBd1APe9LfSvgMAbKZ49aecHWAbrJ1oF8WX",
  "key16": "52p4bfA9hsZw9tstc91hUubBBn2wcWkJwKPSfDp2qpXAV1EmAYpxVEPjDvbKDcDvKUm5mpw2Jud8CiwTfqa8hRAv",
  "key17": "36SsrK6XM89Zxojq4JfmrQ948ijNnRd2RbQFDy2T5X3NjP7RQ4RyEzCkpT4KV2MjGBEPZSaXnHaLQtZeKjA4LsDi",
  "key18": "59jXsyRbyPZR73VJWsn85Sf5PcZ7qTTeAVFpu1QNd4iW9D2pKHVYsYEZBsQ1crErS4nyM1YUmNYFFNuE6MAhUTFw",
  "key19": "2Hebu9N3S2BZsWrfewNK2KxDBUJXSYM9GWqBEZFzHUVS4Y5nx7SbVG3ydN579szNrKm8VNJyqBBBGrd63rxbKuuX",
  "key20": "3y1wY9sqFYMjm1dk853rZW837nVnophXQn3bSDzKtE1RvbjZjjqUaZHCH1ZcoTVSt3FHrJ8cTTw49f1Rb5sxQ9bg",
  "key21": "1RrBzWkg9CFqHJEnWn9BXQ9tPewixfVghkvW39ypP5nH9KE5GMWj9veXg2qr1uYaejFC7DUVVPCorBPYtRFxQ21",
  "key22": "42tHSEtPbouHNyu3bF4oYogT5CyCVs1wZ4QhhVBY3UZTotJ4BE8X7fhogEphcj8KBrnr8pnJ8VacMixuZKscRKg2",
  "key23": "64YmZ2ywgAuxhYeRdsaUTy1MASHANw1DrKop3kmkTXcVM8YxdCb3TCt6jYgwQQvLmJrrKikuBsqrRuEUMtq1Uddp",
  "key24": "2CqWAnVut2MbsWL6g9ZhKoSivo2Tp5HRBsWY4Fzxgfag9mcBgAYitn3pei9KfabKCG8qUs2MGveBpEExxQwdJCiW",
  "key25": "2h7fn5RwoBawbxSggYNFecptmyu9JVACUmf3eM1aP6gsQMZWVzR1qxb5kwg32PZNA2JvJYrixwEd6bD5VG5z98GC",
  "key26": "5QYEmMSbE1m7UnkijShnAXg73YGSicGGAoXXLjW5HpddCamB9yf9dkRfqTBiQpS7bP8sAjBQnUcwzbERENNenUAD",
  "key27": "5otVhsDS4hb6HX2CSAoVLBtnASSmfQWZHLoyyrrt8Ffv5V2AaK4FN1WTFkbt2eJBYnSCyCyZ9CjwUxwzRrMKJA95",
  "key28": "49MsBByBguYuEADPZKFkFrGdFEL9CE54FogYqf6KVEZWNxQdHd2cwDR225NmXgHnPqsSgKFAdVXii5SZ2vHcTBNR",
  "key29": "2VJYBaRh9ZUye73RwjCqNkaZxBzxUAmRJw8JbyHudECzStAHnW3fLNzzM53Rtghpu9mZshuytUL9Ue4sd6hc2Fmo",
  "key30": "yyvkJJYGdfbGZ3xo3HnMkFskcNTNdMmt89ixVBKtdRKzVdeWtgV9YVGYka94WHuLuwGVyunrskq6royfmB4b24u",
  "key31": "4DUqpsNyibQ1iv4TMTcri3u279yF2VP6eFdzkRXV2AJpodqDKfVoLkaULByoLjM9CQ8VoCt7XkmtKAn79gddDk5D",
  "key32": "4xvKYz56LayeFBgvPYfRkQFCJHXTgHDPNWHjQ3jmv3RB4LatPqJ49DugAZ5kbLC9iHEyQ7r1kX8Sy2LBpjxrQ6zq",
  "key33": "421iJaSqfmFWQnFBNuYUBp1S2vje5Ayp14J3NmmtpiLz4kPE9dHAQtfae6jiehxQXJbF9aYHd3zZB6xRz2kpPZeH",
  "key34": "5yfioSHXtythd4kQCuA9a6KbJqPo6bMQAA411xHh8AQkbifMfoxnzeYcifdRGsgC3Xan986qwuURFYa6vtBSdEdq",
  "key35": "4tZwufMyN9DkE4KxVDFxU4itnHhFJigvdZ8915Scghxr4Ldxm7jd35v6LR6PdNMmkdUuueFywSb9JVEP2nbqHfj7",
  "key36": "3XFb4Sqn3BwjpFkP7oUMtSVhdBHpUBCgp37QWpdiyETsQsrYL7ACuT78eCinyJKzhMoAjsj2Jy6ZR9wVgXNQPjv9",
  "key37": "2BtXNMXtQ9hkLLQm8pS9YpR44GfwLzSP8Pd9FGPXHGZV2xrrGS25Ky2u8D63gGRZ7Qg8cBa5EMi2ayntx36MqG6U",
  "key38": "36H4wiyRD4A4oMx2DZBKJYPavG644SYzGSqqTkHw2gHxfjHVeTjVEwqPoTU5NL5An27Z2kG8jLkQP4fVJZ58MSwP",
  "key39": "3raeAMDf17FvSZJHTTKcn2jJjdsaphZjvnhDGzvQLDeEtQx9bPtGiiryEG44Cjujz8PxFvkx4ysU87MFJq6kBnpx",
  "key40": "2FG3fR7vuC2ZtVbNUAz6XgKaWSJsZweMX1mH3dNoM2smHCuL85aU65LNGq3T3v5CvJyFsr4uxDDiFFDcWWYdozHv",
  "key41": "5PHNmB2Ftw8vbr2msXwE8KZHNgogkWUcF3mXQS2EGAfXoj3BDSAn9cW7A6uhAAknnafFdDJDHUPojN3kzc5coM9z",
  "key42": "3TnXUswGd4BrmNR2QH3ZUVMEAKk3973xhGjhj8PzgFxNtDmn9H7ZjnDXV6KiZqb2FdPjuPTqcqvmVxtigivKYn6i",
  "key43": "2dvahDRaNAdcRCLKRSiQbrYooy8Q1iJGycQxfAenZZJLKJaMYFuw3CkW754mWJLcP16Z1inNJaFJtiudWrTN8oY4",
  "key44": "4f364cJgEiR8vx67t572MtBVgBMLFntX8doraiRfX5FbDMETdhGvybqJu2pbV5Vtt6TQd4au7xqZCdNvYPUteJdc",
  "key45": "3AAgc64DqfTBoFKqKREuyGN6LWS3bwA5229E17RDhPybAH7Wm53zRSEeUyNx2FG1hD7UVPw6YE9BahkKqBbxLMvo"
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
