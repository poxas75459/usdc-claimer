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
    "5bx4RPbG1GyvLaLKbnCzLbHs44PrgK5cC94M3UU41w47ZiAy5SXZzNB91kNd32KgZFUDjzP75UhfnYPfmR8hj1gk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2okEoerCSjaHjXJYvQVg4j5ySVpDf786w2Kk293miY1Zu5HmysT3x3CNdKuE5kYp9TpFTShYEwCd389ECebi4UD1",
  "key1": "2VRjF1RyKr3zDefg3vvf4oseX4abmuTzgrrHArubSisQEwKoggvkUSoGwqdHGEaCeodbnfME7btHQwY9u2vn2EJq",
  "key2": "2WfWPHtSKWmCrisoUMANEnzLmXhuaS9JTqoHCWm4Y79rbTd1JEVDQRigBwni4uTxAeBnT81Gg5tLsqvjCLvZHSZq",
  "key3": "3izZG49notDoiLkkBc3cYH5aCymauZ68AFpQ2SmXmzEdDCsfxhCuJiWGDfMsRtiS6YNnwYdT3PK9mZNtaTgyhJG1",
  "key4": "32kYA49jAUppuZ7N8fGJh8TkVqvNWUT2534nxSLKjJVfWzBRRvSz93PnPg71VzFFJistRchbXvRtmLuEDGCyL3dz",
  "key5": "59zHTX97aJQQCKNv7AS27MJd1CDPtoUcYB6ivkqHoZh8Juv8AY5ckWwz6k94H1Rkh6MnXSugSF7LK4AhYBLe32zD",
  "key6": "dHdC72TtcXLGkeurs33A6XGYBTNDCVT7SbaxDatgFa6pZmpRpfQx9zyXMXVWVbjMpoDwJgQwYe3r7hXfscrJsgD",
  "key7": "5zbR5428mTbqhfXXurQbUraGWr2xi9dTB6eLoG3XrSUd9LXiWUVFbPGWZZmwTq29gjUNRumhqFGommsNacqLK1C1",
  "key8": "2eFkstsVW6qY8M9kA8P8qHhstDCsUPbozJx5GFQwataJ67j2RQc1ZAhWSD3tV7Gh3fDy68CMrYyV7aWjL1mGS8Nj",
  "key9": "2Ae7ZobTczFyfSmfkAaE6uqHCkXmmvVe4T59ZHMvprQLzE6oJaCFj8N3raTN24fRnoSVDAwHP5GxZVc5rH9cqBD4",
  "key10": "5FhGDize2k74a4jyStpo8rE4dVTVM2NC4DzdcUA27UxW3deXu3Uya8N1YMEbEnApoN1mG8qreiPEwYD2m8C3BaNq",
  "key11": "549uGkmiyNB94trvwJsNTyt2wWn8c2xAxcSUEFQnRdCZ6hHxNmepT9Y9a3tQDVYDqztQLnvSGcME4ZAAMCVt6Bsx",
  "key12": "PoqqucTKofUmCXJ38yZ3d8Ed5gT6b7HukNy2anfExqaCUrKYTFiY88QyQhwbt5ZwMP5aUH9xyvgfMtwXmL9Jakr",
  "key13": "5cXrxPQ3dL8nY34aEq2daaHKhqWs5V9KgTQze8bzpZPjArShKk5ggbGx4M5bv5mz9qJUEQwdtNZPfHRgbN7qZpfg",
  "key14": "36GxLNdWDvtSdU8kyRbk4dCdYxAgLGoWntBXjFjT9TutZCfsHdmzEDdQ3Vxnt6z3Mbf87RZvw88zpNRSgXP9rBrr",
  "key15": "3uHZVsJ6R7B7yJtnq7NK3dBomSZKquSaK6rf2BUhszLLvEV29VcY1xZtFUcmwJuh5EHgfDc3358mJa5n2qXL6xip",
  "key16": "4aEX3d311CAvqUVqt8yLh7RiY9fgjHeFmkFCNZdmTvyb95y3mGsSBPQ5tP7V6dKRKGoEoAcZoqmpDStbAW7LLc6v",
  "key17": "57oiSaef4NR3B4F1S1jUfFFNYgfHS4zKishRwVmi6aSbrB8kL7UJjyU82bMv3Ww77mGLqamZ7QrMYZqZtWCzCU6q",
  "key18": "4j1hh1ejPEkDrB1ounnQwu26DRaYippdxAkWSc4TB8Q6f7d4J4KA4fU2h5c57NdJEhveKkKyEHp2fWJKyCcoX2Uj",
  "key19": "4RZc6cFLs7tzDmiTnyhsCVxiK21f2SZeDjXvufscJrBYEaGxWCT1CxondpW8oHsvboNEJvGmr63U7DMGJEhYuumu",
  "key20": "3AYQDB7vdD5b51wuU9iyjWbDbmdzdd8oEV9g3BL1k7ahGCLLSd3wpEskmdRXgQGUkaej8cAQFnrngeJLq621E3UF",
  "key21": "2GSiQwGQNB7M4cDkj38G4QrrMRWNbBDQu5abChETrJVd6CiRi2zD5nzNDs3v4yfdz9RcK4HeSZgyMNjbdjmbXAt8",
  "key22": "T19NpXj1gjV5cmw1XSX1Z355c2gFH9avznRdqaz3vhVbKXxn3nuWUKyi4AonRujXQNFT2J3GrCCVEngPCuhMdMb",
  "key23": "67M1mVKADXLqUGgHzQe2H4xd35zVrHcT8BE4QqZm9i65ZNbzAwdWM3gDDUaUofQ6pMojJj1fVYKG1iHvh8TnAsy4",
  "key24": "38EUTT72nfL3qyDCSU86p1wkzYEjBMt7wuRMK3JFFzgDiVTVzM3LGQA3Ly98e2cBYmFkBiCMaEF8Dpb8x7yNATrH",
  "key25": "5AG41mUjSYXwHYCXZ6nWrNCtTrhWDL7FZL8HGMen3K5fwuVTMr9zRQEjr4dSwjy4epPuGPWL6MLgf6nK6bQN3GGV",
  "key26": "2kR1VWhSKM78eJtKtH2FUdsDVbiQZewyibsj4pzwSkSH2kWiATtu3SViSWJR8fQNgMrPSsxhaiAqnQ396RqzqxJb",
  "key27": "3nKjMj6kLZdggYGgtLfqtUDT3ZAqJP6rbydgSfu6Vfs2zwVnijVTKvJCR8pJJTbDEN3DKYC2yhPgofiqe7uoEMot",
  "key28": "2k8tB18mYnTphgdc6J3qTsM7vUkpsuJQQuge14vfJUCEeDHARe8QTnRj1ukSGDWKcyx7vmPWoZ4NxHGEZNUbP1Yj",
  "key29": "4mgy6vvCZyRsnNw4UMA1BtWdtMCq2YUFCmSNY3iqkrc2kQ8aeMLaZA6ZY7qWtaSEUg3ZWSQZVbJhiBb4qNU5pN8i",
  "key30": "xAWd6Mc88jC4AM6hH29cwWP51TLDQeUAqoo5RuEvEHM5pisae2DShLkq865jpaESg2eDJHJoDfqDUz1Ja5QW2B6",
  "key31": "3C1i8eByjf959j2jSBrN8hUmAzT72TFDXgnXgrNMGoawFb8sA181fh8s3RfjDmrj37bHcpMR1qP44uxDPAk1GBw9",
  "key32": "4318dNX5JJdmMPDY7nMCFnEtNtw7b2LikUAWfHsTiVSErShtDmqGw7fzCzF7cpsbtHPropr9TtWXK5C3knwKGncy",
  "key33": "5FizB84GQaNSS14FkMMapp7oAoaUUjq9MPenXoSK9VSutjsXcKvtZreXnK3KAokpBGTqTUhdXNsYtepzzvU8FJzQ",
  "key34": "2T8ri3xi8GWyfuajnPQkRuFsDWiGs97xf64gXYnXXcixPaab3Evai6xkLU7tYvcRtHCyH6mKqSmdb3bvb1YujP36",
  "key35": "bZb1LJdJNBKd3o2ix71StYcjKxQiKddvwdvwq5kfkdoyguhQCXiH3ZArnTNhvJDRmA8CodAmHhnRMbh91e8SSbX",
  "key36": "5y3jgpE3H2QCBvSv9265gwgxTY3fn1rTsubmcTfYhAToZJ8oeV7yAY2iAtmde8gA4R5vXAtSnKi6ZgrbepVp1FV5",
  "key37": "4cGRnv3j2zmf38JQBKvTePvKcVewMHjiPtL7iVVQ5GMtQkhjes4icpXD7f8WdHbaauRV94y2jtmgKkysYiZ5f1Wo",
  "key38": "3hV5Ku7ACkRM14MbCajc4dZj4n8VaGJ9oBjZL2hQLNtKX3a5K4h7vwWhZ4Mf7yAtL12Tytqz1MHEV8C5Bb6w5H75",
  "key39": "3XC6izdZcwY8E3qhgbzFikSyiL2djw1ZSFfdYCt6zsYpQMD5wL5fpmk6Wy4KbeehvZ6qh91jcPmzoNrmsP6tLYKE",
  "key40": "4y8d8kg7BJudZh3GkHQG8Uyq12btbY8Ki7xxRKqs6LJUqPDDwnQgThCY196JHrhHB2TCqUbfVuqT7scCScy9SvLZ",
  "key41": "3UXvrNLKn6N5r2E2nsboMNnfSFhPV7MBRDat5AD1DY1FdY3uxBzir1HdrdgghumeJ3us6atCce4eGojyQJULKbM3"
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
