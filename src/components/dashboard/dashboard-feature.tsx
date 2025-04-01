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
    "5dHzN5kNPuRKU1aYFHLLEMiDPBtoEgfHKFw6TGYwMvzBhxLdESVW6Uqc4kRd7rnapJCLbx6FiJuJApYhFGczxmKx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BdxvxUH9YdAQqYhiNnYVSSLk1GDvVVcqq1aqFVkBNTw9MZVLsxLdKbd7cWEo91myqgbH8KNEVQ8pPZc3LEJWD6y",
  "key1": "2s2FJkGzgYnUTaqCCwzi1kbFEm2coScGmdd87MbXNoYfcxFBQ4JfmvaN8yLJLGEHHBw3YynGnWRFscbtnLgGuoZy",
  "key2": "5p7KJgfPvVoZ24knR4DY9636dc6segdfy1zwXk1nVebUhaKAVqogTkSATkWZFoxxDPtz59FuDsmAGqMpF7WynCKa",
  "key3": "2UJuUyGU4SWZWKzfp3tPLXuefhMh3Q33AXHXn8VqoqmeozYubAWZDJPLdwxwdsJQNPXW2immSaeZEmekwh7WverY",
  "key4": "46zy5DzMF4BP76HNmCRuRCitTEjDVrtTrPTzPKHfcc7Ho4XxjDhDRLXVVwv7W1i3fs43bnRDSkvNfGxghutErqMT",
  "key5": "T6A7fn1zvKSCTdsknGafBCeCw5AuXrqRL68rDEe12Ce3Lu2McKNBz1wfztNwx5rZ5Eaicg4aEaRQkfdKEBjaNfE",
  "key6": "2mfPCtNvhQnG7sJAZW1qFgkRjfHAd4489BfDkJHdprDxvVest3AckL8z95u7ztbFw8Gb6eFZzwFq9dsoYuSXqbGH",
  "key7": "5KYUbCo649hk19NGtzK2M76fTHKHmc7nBcVKr6ciRtbD3aBMTb6Z4ePR1BfQDpGjJNcvTRzaToKFiRg4renk52os",
  "key8": "2rzTDJTeujnHEk5F1ADX9zx9ZoBf3gaGMnzZKKNydzWHb5vjY5SKJLcuzsF1ZZuy1Npd3DbJMt7sawTgtbdN8H7Q",
  "key9": "2UpFkgsHpo2ACs53WrCqUQbAD72oT9aVnDRx4GyLydJWiw7vJesQVMotwMCKU6hV9jEVW5dXVBeED9ujSL1jfTUi",
  "key10": "25ygZay985Zk6ZXWnUt1xD76wRSiay1Pij8QiyCsG1rRm22o1r9aY8Ksq1i1NK31ifiYYLz7XFpVoeoaLtcB9KaM",
  "key11": "5gW2WKGHBb8eQMFLCqjvH2BEULoEgpjY8RsSvzMeeEM4En8jetwGDiRoMnMeEAsvjvs5Che6w2gABSJEC48vGSuQ",
  "key12": "47LqfJj1kgJehRHxE5fNSLaed1WyoEiscRDaZX7SAUYsaNYcASTQZnMUq9mL4bSVZKW6BpJ6g1oVgMcczLwokYbs",
  "key13": "36jEAhwMtYr6bFdSxLKRTd3N9RSNDm8idarTPqvybKG6Ht2pTFv42sdHASt5N63oAQGyvCFRimHYquoF25DxF1J5",
  "key14": "2QDxjXAcrxPbpZATyJA86c3616UCA1CWEYeF7WLdQbPEiwPHomi5NsaYtt2vmd8tjcm6CcxE8un44X6XwUiA3LBL",
  "key15": "YZ8TQn2G8ikiJRLZHL2W4BVqvq1KTSy7R4BAp45fyRsuafm42Yug1VY3Hm3wVxhocUQatMMjKcUh3rAS6av4spF",
  "key16": "oJJSMEGKD75YYSh7BEViudqNRBFcrU4Tx3vvFfS6R5XnkahDu9sS5ZFYu1k4LwphiTt5sQ3hFP7rwoo1NjjU2wJ",
  "key17": "8HB8A6G55CT7Wpgwdmc7finAW9b7FtdrKZerpS37x2AYBcxExt55SDdAVdTpTuY9QbBt7j4XsDAfFMCGponbNk8",
  "key18": "2bGheuH1V8hmMFmGtyvaNS4dXiBhSULDYNdcCzCzemgqdCBZkoi926kB5V5twCT3idNNqsarvbF5aCiyjmFQZs4o",
  "key19": "2pwdwyQhqGhDnYrNUbjo14reoWoYLCp3PB3d1zz5LktXeJNmBqXsSVcBvScfebYoxviNhLTyUsK2n3MfPPuakuHL",
  "key20": "2xNLeCNaUKvUSHrvBHTPTi96nuBPmv47DUwsLyJParp2D4DG5Txvm8qF7brk99MCn2gJQYcL4vbXFDYUUWbp7zRm",
  "key21": "2CctaLogUeXtzCzi81uhwXAcjkdEe7aGKHj1jabRb83ixdhtdWRfy2Desjy19H6cLzaDPS4tUvLqrrx7mfvTaMMx",
  "key22": "4pJKhdwL3Tghxvg8P7X61akYMXjVegiKycsDxrhZ1hyz8f8Y8p182pWf1CfSi2BmiPKnfYqxeaGJDwsDc8GYRJLG",
  "key23": "YwsQ8aqEXMB7KF7x5bWoyW8mqJbatPDVRMvEdyZzPaZesveL5KbbbyXuXkpSW1YNrfi53L9sLZ3WkAU5KeoaGHs",
  "key24": "3JeYgrzckih5df2rxU4EAuc7UMruwr6dwCTnf8GhDGmWQhkmAjwFZRoMnZUDA2x55qg5KmcAAohwXWMYwfcZFRrR",
  "key25": "4a8zKYpyRmqBgwxW7FyycDchVSYUPuRHpZcGFn7iNeaYZQMnDiRSMqHkNnAMyi7q6kCTKUmfS7N1TBNDccDhMDhG",
  "key26": "4GhUfVKXjmxzHU5GaZdxBaWHnzEtFY3b2xgG5ddDsKgujXhEpUnEHQNV62TVvDiYEEvGcoXRNb27TAUfoTornz4F",
  "key27": "WGiF8Ym3APQAXvJNUwE3KtTP821NntnsoMRew7Q1d7HJgZ6muUq6RyZWtFcAiwz5zDa75Cbj722EQPm6P2iPPxi",
  "key28": "5GJrZQGZCd4bxhcTFejVQiLJfytU2KTvsAiGoWYH6AZqakxeJM2qCRHsf1AQrEG2eZzwzbZ6EeJk6ucoX75jUybg",
  "key29": "5CtfrpEUrAZxyMCXojZ9UikjymearHZ5fLkgtFgVABD9vm94ZjUM7aSahRSfardKJ63Fp4WPoy4avo18N2YdkREr",
  "key30": "2NmrSEhvbXj9sk3vHXtw5ioifdfLG5WbN3qqTMMeZYtUVjie47oaXmkrVJYLguaj4bbqweyZ9mdhFm5YD4TiAUqN",
  "key31": "2Mbkz8YGpVsUyyQGPBQcgfpYfdxdb6eMP8TnBAd5U5m4L3hqpoEi1eDbRfwA5rtheJrW9bxc7fArhki2cnGSoFye",
  "key32": "T2544kTsx9eWECj74BvhA4Vy8PGMd61opQnjBsx6VPu1iqZVye8Vb29yXQxtpAo8QepbUfkTANP34YA5F1up5Vt",
  "key33": "5k6Jkw7mLBU7fzMR6k8Tf67keaLZH1NbFxx9SRALSbQWAcSk4i1p3GPMQuamg31Aq8T8iCV1s1nt6bKkY8CipPaX",
  "key34": "4u7asXj5iYzQHgwXEw5f1xLeztLJ2xSi2qDyQbzYemv3C1i3an69CZcHgqT2mnyycLjaNbNdmUEuByPKJCtgie7g",
  "key35": "5osRr1pvfwan1nZgGzcAG34hTBvu9BKrYVDgNcpP4cPkbYNxNXqiWiS8tEhZ4h4cw1hXbzjEcsCKfZmiRswMjsti",
  "key36": "2kpLhAyuMPmjw6kxw3Pp1piiREpXYZSfH8QivBF1uG33BHHRyo2YRM1qmFTfopVTgCi7JhS818b5wnoBRiwvy7nJ",
  "key37": "5nY21mZrRtf64kGyzttLpF8SV2hohxMgsDQWo7Nf1NkJ9Y8yxctSoDNq6r9KstqYWRTQUDkC5uRhbMW4wWwnaWtG",
  "key38": "rsyxoWryKbbq9hDxTvGbjwvCCTU5Rdwdh3KAeqgGo1WdXwPNnns7QYRyQ4dCaqk8HedEts14EYcLj1LxM7tuUUC",
  "key39": "3mPVgW6QhLE8zDA1QUtu1ZwhN8a3KGLbyniXibUHCnvMGHwTus8Dn9WKauHiebz7fi43spyb7b6Dx2ihts9pEeeF",
  "key40": "2waPtfWCeBTV5Gq6by8h5sjGEzAYVU2J9VxnSdGKG9TCnpPqshy29RWXoZtuwrKQByfRmWUwhCDMDK9b3W3qTMqu",
  "key41": "4pCJUcv4UevJWVzWbEJGiDcRXxNoLZM4VLRXzNj7w8h8zwSCLEPS4weSMnaHyF8SmfUxWBWQ7JcYrSpZPhYZ44SZ",
  "key42": "5yH3aA4nvqMogNoDuSGjatAUyJgv9wtLsngdNezaFE6DC1UmevhXzayWjgqnS2nhEcaJSTbruFntjCi4Dmg5bheS",
  "key43": "Z1A2SbbM2LEiBvXZER2oMvMFZwN2MryLAvEvar2xQAz1YthEiBTQKG87JHn4NGu7V2UoipGgHEACT5gJenoT8XE",
  "key44": "5tQCJsaKBJkeaoAoT1ctPfyJCNgFdNb7qEypVtqbDvVqhpn3okNbHNqPxLph1H5ZtsKqYmdSfyBPgkaaXDQJXB8P",
  "key45": "3w5RbrGGJgUygbSuakSaSXtnsAAM3TrPFt1DDBQJGssDtohJijonWBX6Fa1tzeA8MYmG76TDgYznkvGscx5ayF9N"
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
