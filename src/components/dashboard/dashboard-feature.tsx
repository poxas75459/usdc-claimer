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
    "5jTa5fS9K7Twtwt9hMZaujMLLAVKjynDjhjCGxGexR1yJCzW51ErH8YaBi6jeEz4CR1wLtRtQo7YjZwi9m4VkdMZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BWjGbNFEcuQyMQh2eSPbuTEiXP8bWS4UrkMHKxFMvVAbqFAAGG2DBAKNZ7ubVyMCgUDHbUNkZsuzW6YevrXN2RS",
  "key1": "57JkeJUABzwgDr4RZ9yRjq4LZDALpc5v8ieSPH4HhJU5S3rNtPhxkhkxeGryaMHVLGkC3SdDWNKyFKHpd4Ciw63F",
  "key2": "5vr5WmnuTNSRzUMmJT5NTAAoAYu8CTFZ64SmpBxRnMeUEUDm1aeWUcVAt92pqcBrVdXZ1kqMebtoAgwD12vp9aNj",
  "key3": "34rrV7bwthipwbDHzNJywWwWr7BgoPca9mYutA2k8AU3hvmEzzBeMCWoRySs36AhBqzXCH6F6i4Tmv8Qzb6KECiU",
  "key4": "33CoN34uzpwfoebkWXFGPxHrAHB9haWVox7Hs2tUiah6ZWbvkU2ChV2w8JFBDpsSqp3BofWvH4VoqvyBK3EgN3fV",
  "key5": "g88cJWau6uLkoTn759k3BphVvo3pfZ38xuqS79ALBVKvSTbDuzYL8QYrisry6ymGfNeZ2cYJRXm6r7RMoXYys5c",
  "key6": "3WBmr3etBTy8tzHjF2j44hF6TUj6fzWaAFxuvg16UwmDPQ1t63Tzs62Q4WFxsxxMVi5Bo4HWayM3tY3rpfJTa1tn",
  "key7": "1DhAXbEViynoAeyGAQLYntSwaU2batChu5z8h9jWfm9QUAGZ93NwMSRwhVNY6j4RgLDgRit9ssaT6VbEdFLZwg9",
  "key8": "5BH4gB4kzCz2mnRy7GgwzkTNWexdvwy7CzJF9rnAQx4x9bsUpBJZMvufcnrtfqHmj6iS8k4A2o77w8w8MbdXAmYN",
  "key9": "CdLyVHSwqH9Gxv7cUR4Qjs3EfvJzoxEvr2KxEB5ppBREbpC3B7xaWGJgnaGVivwrji39WJpU8vLiMAUnchawVam",
  "key10": "5wyvHCgCGAetB3BYyEH98G5LouhcxMYA7nSFemd1rWKZepkTmzdGdNQdzrbcaj1q5bdMyvVXuw4qKdHasHkC9seg",
  "key11": "29Pob5KLy6dby8uj35Uins6HsqiCJN4vwzQH4HmpJnGsHP3xvGzz7B22q7curZFTbViSL2giM8ysgJK9hWSfP38Q",
  "key12": "mGAovJJHC25gPTZNFWQoiKe7eNsGA7vM1tprAViYL1KoozxVWrBaff22o4ygBdaEnGkLPMiK3ADCaKofBY5MSCH",
  "key13": "41igSMcaWMMXaRgVnR6sFHzCvsPp8vm3mcjDtfVHNKAGinMnHRueDkTX8yZSk11BnmfueDf9y4EG7MHokNt5WoNw",
  "key14": "4teSMCcJgV2iVYqTuXfaMd7XRRuv8Q3Kxs4gwrsvcjS58mdAZ5vZSaHmRZjkcbi8QDCdwPzChngd5ZLqVgLygq9J",
  "key15": "3S2Eq8uM1AC8W9XY3rRXSu6LoXiqPcuLeECFwL7LDjFGAPTnXMjQ9yyMQZMWSFhC9fnbubKYkm6qgcjq6jWUt5xT",
  "key16": "eZhana8bgZtPHhcJK1ArN2sErXmTdSvTY8ePBgx6kMbeHDCPogmzBNTtGiDRcZszNq6yT8sWMsh3n5gc5wmKPUy",
  "key17": "FNkBJmi1tJJNfw7cLBp6K8fvA1giGQVreR69RiiNfX1s5PAfZMJ6uDX7GhA6vdiAVSYWY4oFy7z2CDJQJnHNSTX",
  "key18": "5Vu27RZy3XojCENGDFArB3JVHK348o9CSfNXaL6PBvoYyST5tq9aAvJ2QNBN96gMJuYKMSbQcZb57TCCav2wdbSQ",
  "key19": "3E6hewNuwfZh88SbFEFb7W7hkB2zL9ygxJztqDgSM7XFNPBHs6eSRgkAKGbHS74qTZRnNtikwtHuBBkuuNBHNHmU",
  "key20": "5bcXddpjYjpnDV9pDQHiZznU11nQLvCmrXPNmEZJ6zD6oNw9fLpu9NAQv72PLCvraDxgANdoxirztkKC55HpLuZA",
  "key21": "4y4cJScUfTpXginAghqUr7ZWjJPcr34Z6woxVjN68t9oTXvUYJgpNXEqm1LZU8ehGpqkbLphGq9JveaJXz2jmTX6",
  "key22": "32YAFtXz7Kdb9TxPP1YeYkPFvp4248dCGB1uhUNFC7FyqSj5vLDXNtggmEfBucrju68hr27dhTmK7hnM37RcDkMf",
  "key23": "3Vw8N59Ti6gbiqrh8XuPrzdsWDTxyYW3ReTzdpKAV1rcTubi7mdYFvPniMjRaNJGyxgbJt7xS2zrn2gyNnmMNccK",
  "key24": "5s2YJfxC5b1mRRQrDV9VKQRFym1ApeLygMUWkRSz9sGtdbgnpGwRngQWtu5ecuhDvdqarcbFMqa4adpdiKtzS7UF",
  "key25": "5UFvcuVGCTo2kmsMTRtheRB8uq5pGGo5SGdzXyPg8NJAeHBQNUysSxifrNTtYpEXQusPVFVvyFk8jthREPpP5E7f",
  "key26": "5RmSagPWWvjUE8u5HCJbCYGVYJojvhmko6RUvUAYXXgy8ToRANPoGUgnuVnQgWHBqaSvrYzbqtAo6fuoZvy2y44C",
  "key27": "9YsK7oprVSRz3Uzeny3PBZJn5dtZrofoQ8jmQVEQpVQ6ckayhKo3Hr6GDCfPbsekVLRrzZm3JJki2mZteb3RgWB",
  "key28": "ttKN5FCH74x8CotjPXURVndaT1f5bg4tHnLoScNi47Zc6qNZgw2CPKKMrfUzHywZGrsguVbZa6DmkdSxGfeM1SS",
  "key29": "5dDtnrMaMLjjM41yHiYKgATc7cpnN1suyg3USgUMqEG1GAZwb1r1H7K5LaJgyFVvD5FaiE8dZ83D4DL6pH6JWoxC",
  "key30": "3mVPhvyW6YGE8rfwVx7BqNfKwmQNvHpadFja77atgKcJt1fuU2V75vhMQzTkvw17nkwD2ZUZgovCWEXY81wQmizk",
  "key31": "HmEAwNViH1ZgsJDJA7dMPoJmcEYX2wVyoB5tqCjckVG5futrHUAtvv4Fa7c5tguwDo63zVQf17tCtFqLL3vuH8R",
  "key32": "NgwBQ3z24WCC1Cyppckcs61dXdmn9Sm51Zmrim2zoVPeuS8Zt4KRBSj97w5eQzugBFDE1pGJNvqzUZbrf4cACRU",
  "key33": "Rc18wWusr6vZujo3iWCbPuThMPS3Gihi7SptTUBCxGRCsSV6QPwuWB5KjahzLKHLaZYLyiWuAmbeYYxFV6t3ZhC",
  "key34": "5k8HNx8rYsi9U6Gy6PMn8Dx2myfVLtvoRTaCh3wktoGz8EuWK4xvM9BSzC9xBbGjffmahFvvepcbuqpDFtsJCf7z",
  "key35": "5SMipgfL6mfEmkKR5ppgzcD9t4gZAVWJccfHT8bHG7XAXGCVvKPJEjs9JMdSvSD8AVcXeTDJoknQihhbFp5McLTA",
  "key36": "4rvazJoUfXFv7JcVjwuzFkpwm6X8PY6P417pF7nsmbHz8Tcsk1Js7GibcuEPM92iaXxQQbJoARsSkb91dkqrSiXQ"
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
