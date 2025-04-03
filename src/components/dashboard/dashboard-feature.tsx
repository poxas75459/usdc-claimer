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
    "5q11FkT4ajHSua43rz8MqwmkwiM95JRscBMp7pFBn996PsFKqVDYY6G26CT28c56PTQLteHmoaFE8bK6zUR7wBxm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qRVDK8CN82gNEE5tCthQKfoadwTw59aaHLJyj2N9V72vfSGY83yR8Z4euuPfNiiFf2x8jZfwNy8Bup4LD6mz9s8",
  "key1": "5RePvpsDqQzczGS8dohqgMd1L7XVkNeDWW8vGCnsDQA25s7bjHG9HaTXo5ohagcmzghxzmbK6sVsxUxfLtsnkN2r",
  "key2": "2JWgRieJtbwbY2pmdDqAec8dePij9WBbFpn1vwTGfDZmCxEhaXJ9T1maBBCNDXuiKQq6aMQh2Zo4g5DFUcGU1AoC",
  "key3": "3ehS2q1LdiZf13zPNzToS75DVdZUx4mqvRM7Gf6DbBKDNGEDPPYNJNRjVT5Ch1GJ8bFdVkFdecxQZ5cSFepgf6uG",
  "key4": "49A9zefWauS3xeW3xrMhgcA62VsG9KXofpZxxRiCSYoto1Uja3eyFhfV97AbtDivemLNpM2sfuewMDE5gikSKbev",
  "key5": "45tajpungUTyicAizRSQHYwC4NJW3hiyDp3tCSZ1kSegvGCxkhcDQ1XEZZYjFW8RAPnSPrRTaNoHrC9ViA6XAaUa",
  "key6": "59DpPjNwPuAopLuB3pZ669jHkJg2y27NoupzDXPfFbi2LAdAD1E7gt45nS9ih8ykhsjnn5agjizHWRrDsNeiHEV9",
  "key7": "CdSQ54npecigZVMjWdzLidtKfkmkyVMdq4uLHrkc4RhFMeg4gqkGfAhPzZi5iF5vdceETrKLTzx8fyTKZUdiwyv",
  "key8": "4tTa46uKBexRsXrJQ4ortHQfsHSzNuVnBvzEmDNzzQn4de698YBqK7hwU44BdtSQnKS6kmdFEmFBLyYT55nTW8eU",
  "key9": "3MnvkzBqmFVe4MmZLnsY9P2Ky2jhEV9zs4ofoGv24Nt7MCbz4KSTmifTt52LQvAEVQPQCoDFNoFbUstA8ueuewcx",
  "key10": "4Q4gVKw7FU2VgNviZnJWGpBVzzrczFP1z53cqzdNdkC2SuoGsBi3eW2XVYhuY6vW8yBqW9P1KQHuLH33ekhmudCe",
  "key11": "BZs46jYn7DCaeqyweXfzAXd8DyhPg8x9ZMXCTQ2o8NGtKavoXZPKTBJpcRAzhAi6b7vBTeV2SXJNCtp2kdDRjEW",
  "key12": "23uMzsWKo2KbPpEWHwEnwT2jBJxfCnp3BChiZU7Cs5NwHAvRx4LJhrNVnfzyjNcWDR2j1XLeckyt3S64EE2HACoc",
  "key13": "48bmHpNPddfRBt6Da3mDvQNo6VB99CrLXiKojziT68f3Eq5VTwUXHAC8BE7PwxxeB4y7ZZ9jnAwTs4Fqq4yxPgkL",
  "key14": "VMjpbx6KMQjEK5WZ1PknBjBVj1BqmrvgTCp86jrgoE9wfNHmKWosG7QMXoUHL3Gm4fx7jrEn4SBtnNhwTVi6QyP",
  "key15": "Eddxzq5kQDe4sFowjpPqG8jQba4iLPehiBVqLoLyKNXa89QmhPUPmCyujsBQmDzbFQVyP3izPgCysMDj4im1nAB",
  "key16": "pN9v3P5vyMWXFDCzXu8bkthQhzTRU3WatmWAF1PSfVJghrXZSdbUSNrvyaoewN8QqHznFHLtJS99JGknXWgrifq",
  "key17": "GNpuHNo31UjY4AWXt1U1aQ1W5xENoDdXVt7LeaTAmS1fT5gdyPAzv2VdNpYxuHws3hfuKeW2bNbxec3gcqDMw59",
  "key18": "mFWntKNajnkTYvh6bZng8gdmn9Z6FPsNscHrbXY42s9JucjeG9UsZPTHjN9s28amYWdXpXJ2asDqsZ11fAEK7YH",
  "key19": "5d83Xjv3MUaSmZnqSY8AxaLh6cPSJxfGgiBGYdKsHzqMGvBfj2yAGDpAdxRazpaRH3oev8YjswiFeZ5sYNfV5ng1",
  "key20": "3un88x1b3Y5daYASseP4QQGJgUzheqYyS4V6qFwbiW1sYieBohQCa9TszVD9ojfyy2WbX7rGENKziytsbuX2Xqnk",
  "key21": "4jqr62z7Gk1JgAPfLKvc9gZTqWCxTWvXAjGayVbgghW7NA4WcBrdCwnG9xNNzD87sXBPuNVwvNYE4fa1y6yEtvHN",
  "key22": "3iQRMKGsp8xYHweNxVNLc1Yzq1uRhRvW4u7xrH1My2VvEkioVdzkYq2wo7TRN1n4UgoXUae2mQVnFinVF1zNMtdG",
  "key23": "3iiVoE4R5nQQDj15jNErgMr1T57Sf43gJbZwugzuEH7Fr5jmJbRoDiMwmsZ2BxPZcd3xqugcrUUu1bz3vJ4XttuQ",
  "key24": "2qwqQd4ZtUPTZwDCaBhjqsAjmAzDGv8U5xxv2RJUsDy7RCBNdPMCc6ckbZxY6s2BfZFEBi9Bogzn2NiUxYaxBfKv",
  "key25": "4u9Ssr3bDNbepf6gNpn22grovwpKEtmiA1SmxsWHMjavz1TVo9NiZV3JiCUQSkkQELWBqNcbzv8oxqLjE5VzKEvB",
  "key26": "4wZHtq6PEJggzkjTFfFMdJ98X15FmjiuGjVKpLMRbH94M2s9yBe4rXetr5qgCnqtmQtLUe85K5dg4FfBPtqPYsjS",
  "key27": "AUmbDbrM8HGWz4z9gZb1HYdzV3X24sVEn1zjm2cetMZwWpwE6vVd5SVYAcknUhCPCcmPrkpdjKZyHdSqtmhJUC4",
  "key28": "3KYGdEENedk653qPgdHeYoKmFtM5u6kC9EWqbsGG1wmcaazAXVqDLJ3CSY9N2Lkgmg1MbgzeaLqEZSBmS5fAQUsU",
  "key29": "4gPshdNE5sU6FSHELryCGbLGeRFevW1fYke5KTsnD2nAz36Ssi9Z6C42qFYxKydSZvhkYFXmj7gja5hjAtHaxo6K",
  "key30": "2JhARRtgKyjWgTSXp5q155YTFpvJf6skcNHCgbqrxfsV6cx6NRobpTG4KENUuKWmw4WbM2h2qnPh6NtQhax5XDzi",
  "key31": "kDs9814AXiT7xPeLqf2WM1wdY26nYECjy3XwmirdBozXVyqKTRk1Qntrvy7J1wYrGAjLbTBa4HcUQ8txWaKtgEa",
  "key32": "REyVE5j7dWj6znhwTD5SW4zaWorrCGihYYhLdqwX6rNdAg8mjfEHorXQKqwG5LEQTFs7UcwbKiou5hGJBv75ZWh",
  "key33": "33T1tjJaMb4B6Yiiu3t6RmnSzRie9ssr939waKbD1ikZVU7Y1w7QxSfxZDhEAb8XReLPDXJVrjamhPqP86hPzdn",
  "key34": "vz3YpbMegJoeCKK6ZgGbv2KRiENaMD4xxxVkAsuYdfaWsDifC4TP9WM5pmV6Yu6PbFFLF9PpN5LZx4fQTSeCsJe"
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
