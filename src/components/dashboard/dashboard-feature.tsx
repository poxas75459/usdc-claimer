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
    "Ko2pZXLSAfLdaRUq9KbEBkTZ94v48ciAi7Jb9L26bszV92zFqLdGDNgisMHyf2rbCDmVAF67HAHJKx6FbiLMTjJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ksh7L261pGyYwmEMpuhGmQRyhye1xgCCWNR7VwrgbHdc4dz9q7nYJutC6JyttHvbPSQ5M9V41N75TcwqGVvZLPe",
  "key1": "h4esU8uPG3RHPkD63HPY8dLXiLbxJKH1hXtcHPou6ajaZVDbtyDi7rKUJbaaKajFNrCCPCfnH2diNFdSWDGvUex",
  "key2": "5nd2iKui2bh6gJ2EAeLhYqvqkvesaDRuv29uWfBCJ2ndBVbkpgFTHcktpkAkWGaKb1EaXNHXSSHvjRnkTMjnbMT",
  "key3": "2Nw7cabs3UJcWVnGdeCsv8zEdyBEFwcgVroag6VZUkRzLUFBoBVxRdr2Xw9fNVgQzcRLXZsbmWaa4hj5YYFH5dpG",
  "key4": "4JrH5BDbCYDCaho12vneoiP3nWaKNSpzUK57dfvbi2Xs9JJmvXyxTvv8J9DjAGW5ZAinX18APzJjtozdyaUYVM1V",
  "key5": "4sy5QhBrpYcxEQLZ5JnGL1WVW73STDJs6MPupfUgNoaGKMFGYd6TKyGKSCN3m1QFbaxGtxHiKtnQav5yLyXexxy1",
  "key6": "26mPYBV9kwtkJwvBUrX84rJZv5QWTVFVXzQLDyidYaCi3tXRHQBU74NeNfEdNvYhNPvf5eQHSTer6uTUXX9iVuqx",
  "key7": "5y5hLTRbtT6poBy3SbVS42JDKWMhR38rSpT1KEJQzhHcph73c3cbXgEjXfHhXa5RK2ub1Grr6DaUWYUhekRBwUeH",
  "key8": "5h7RwVmbD8z6WAN9V2HJZy8AGaZuBzyjG45Voxst9P7ttBKzU258a9ESdx3gMMtf74VVAiAbZ28CC2zDQ8355ytJ",
  "key9": "3j7Z9Dozdc2dvU6LdXE6fU1gNZGszLtiaJ45Lv5A4ftLsWV1fdV3rCpDtDgVJ9MpRKPjjGp7Gt6xEX4yk1DmZZh",
  "key10": "SdCavowpBwssVRaUbkcriGHkzfTfqxzM5PPfSqhU9me8gJpUBywqhhHF67h541Tk9zZVvo6wvKj8j9uZ4JAwGg9",
  "key11": "5Fy4eeCquZ153JSjbp6pZ7e9aqndL19fsYdjQJiTnAMkf7dEEMPgqs9K3mwr7aS6G2xMj49WArtZcAoePujjPfRF",
  "key12": "2coZgJvdAptQQFiBHNEVLynwqHRaWcAvE2urqtE4Gpmme1X7gfAdnVbUJeuAZJKoqPSen7smvUwqaHiuEVJ3nXsM",
  "key13": "4wTELw9U2faCwu1t3xmagC3VkVkwG1FdAMyXU2FBGqoABYsVfhU6WWXM3dp9dmfv7oN4kNudG5RGzuPqs6R3PKTd",
  "key14": "59AZbspCCXoKqHmsK1f3daRaV6D82Ts8Yt7YMLtyZ7MkQsKR3ef8daWYy7gnF9KR5qrTPi6iXv2QB4KpJ87PfKuw",
  "key15": "XQdRteDmAE2LfSVGrctSJ64fxwpCiepkk3uBVqebAL8DmX2hsHWvD1vCnxTV9vp6a4gRpK2ocNrkjCYsP36y9sf",
  "key16": "24BvHFwWgNvfSX7cgrARKRgxBqQDMgMa8a8MN4qtBACPzBDFygouNQuSMsiP6gd7mxDBy6T7psmP5vDKwrWecRAH",
  "key17": "fSCMTmJtTqGM7YQX1HCv9cZyiPsW8ie4CSVqfA2yQ9ou3J9fHiBvAoTWiriGpugwKf68rewXAFhmjabNs7AEJqU",
  "key18": "5qCjScm8koWdVPyfcJSUad7i7g42XFky2QaMnofGWkHDMSKe1dnxf7dGJnjTRfVU2F3bX4MttCUsLeT9e4zJvVys",
  "key19": "5JiRgqTSF1xoGX8JYXaYFCaPtGHn3eKHReARmw5RM1s5DVXYtYCmaARdKQBWduXxVs83DmYdyJD6fQPxecDAypre",
  "key20": "4VMzTGMaJX1XippQ8WDWCfP382X8nEYjFanBzAY7RqDDy9zjxzpsbhcpR3nYCuENLE77tfBHbzfeFd3oPDus7UuC",
  "key21": "KcjcEjCKiEx1L352D55B2XaAsqkngorgTr7Dfbm3i1YuHaDQeitidcwt8uAEKGPtCbhhTd9kFjCQKrNo699j6qc",
  "key22": "4nRfHJLaMLaFnVDeaVNbNYdKpVZ1FHhUZFVq1ApFFFed6hKwmxM48HeRkkyt2qQsicgyi5S5cBMJQVddX1eGYiQq",
  "key23": "5kniAx7cpgxw4VULSQgDxN8UbBHEHuTUcZWtAwC5LGLHWVBAU619FTKJRRJ1uQvA5rZXzgYB2NhYJpAVEM661MSo",
  "key24": "3YUhu5AP94Zzv7zMiR8RFeDauaomZ8pZLvWv7vw6rvwDEoJ1hqd4jr8pUe7wi9eVdFmRB1HTiicrQGyhN8R5MczS",
  "key25": "37HmpTnNu9izUxcJDiSu2ffoi26Y4c4V4ZvzitPkZSoePynkdLiyuMgzWs2KrSZTMuR8oxSPnHKgoWd46tfyeXWK",
  "key26": "LurTotcE2WazEhv8BRaqcx8ja8NodLCcgYTuyFd921EAbcmyJNiE6mSVZLXN4mYBp898PT6Vx2gDHcwXSFLbYn4",
  "key27": "3QYpy766PJXPpcdMr99tepgMHeCT7XbMwEkt7JMa5nB4Fmk1GvTuEzCRH64DzPiXGCET6hxnjyrLdJNp1SS71vhG",
  "key28": "5Jc7dW6CYTRyoNfEewCttpDtyy1ZXPb1LVnDdKcQdWBB9v5foyQGFfoLckvmK2BL2q4HZzrqHVY39Kr8Lh3v8vkW",
  "key29": "LubuyyS5u5SctuiAH9XmrbZ4CupbGxGbnwCyXRqVDRvP81HDFSFwcFRTYH2tTTS6vMG4NkMvsHCDZicdHUUKwbj",
  "key30": "3hgASdQ4YSjcqg9cNpWTaWcmP3NYb68kRW82ZLCtr5tNDN4KXLXHnCdGxepY6BTgNDubp36rvPLUadpwnWDTAtCb",
  "key31": "2YGekHDfFWirWymdYWog9mULwHGtVo2yWtQtN5dgu8DTTeMB1b1BLh7ZDpNf7mujkdUewm3sqVMACTgCWigtqxG2",
  "key32": "4P77sG92vWi3XVxjsDu7rBeUoLHcWGhqvgwy21CDjq7kHLy77bW1gxHC4nW3QPdKiMef3dAGFED3mZrJckYGVL4b",
  "key33": "HJ6Ku7ptBnadfoZBQ4J1KWhiiNNHuNdJRN9hv7usEtJj2XpGQSyoVdJPbNuDb7obYF4JaZvwNomN8NMZRavZt1y",
  "key34": "5o4qckjFdax98WFtfZUAqDiTKFrVEwBx8fbWjdxEeQpwo6eQuEmfX5HymeR3JXqDUwSnmjp9i27h1sNWLyi2bN3c",
  "key35": "64atCjfBKTQZLHwip62MJ5DayCszUbdqcP26FMBZCVJ8wFo3sfarSEciMkneYSueBzSXBzMPbGmocbwm7WNMpFiW",
  "key36": "44cCJfoEH4ge8sHtY7gaN174REsLieg68ddhPxpKn8KM8tw79yCNjnrrcsvCSPdWYkeNKK8nxGfeVYJ15L84pwaW",
  "key37": "5UsZhdDnpuFSHVkbAyvx77BShUAqfwcF2ti4oZT1Ck3oXxrK9FZ4jdAYf1Lk1vxkU4HbMYSLefkC6aRheCKkyysm",
  "key38": "3ZeHEsPkcffT45paeuPkA16gd7gSNUbyDPn1ZDxefQLF8We4NQozbuhcJMHQvv9TRvC21DN7pi91jEAhcXywD2es",
  "key39": "3PK5sDaTCPbVAY647m5hAZDEuxCdCAJeyJ7hQ8Vi552DGx4PApR18jHAwoziQWCemGjsBpPYg29s2DzBwMXKLXi2",
  "key40": "4FXJK1CXMUDk9wTctRE2N4gH7Tsh9eEkUNrKiPjBScWdiuEvaexveET18CQMYZsDpHxfqVWqi4vRpTTbDNuU2MYw",
  "key41": "4Ty423bQax57jt1DT2NXHKGjCSSMgbQaDUfj9cvhYdMX6r3jQRKnGCQuypCuVRikeNt1PbZhHT1QFWowB4gBwezK",
  "key42": "4SX731UEWj7Fi2YNYr3b9MherGWFK1DE2MmfnK54KYD1Wc1pnDmg7ij58HBtQftnbTTPWLqZJ71ut5P3CYF6cNQG",
  "key43": "2HcSuu4S5Z3wAZ62Ur4nktnRF4zDeiuDHd4vjQjsM43xAhSrxuuVphaACi4hZy1PsAtKyEWoKT6KJdXPHjqViNuC",
  "key44": "4hzJcL5CbANnGzBeptvPu7gaH6nFT2WWYrP2rKsyG6agKMbjZdxCfdvEQoWgVHQAs61phMESZFbZjx2hhYQbZnWh",
  "key45": "484LLPLqjvyr43SXaFpmtQcb3J5UxfCypG4E4eeYVUH377mEW5gr8fYsR8UvXtoPUsfDnbiJxadZfEqgyNDdXUre",
  "key46": "2TL2j9U4KrzahHAS2Kduarr9GPdaDgLLnQrcsnsMa246fh1Xowu5NqMRYhG1EkmK4bCKzqRyxe6xcLhEys6o7chS"
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
