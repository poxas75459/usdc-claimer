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
    "9SGtAr9f85oJM1is2Mnz45CyUcpn4oLDN8nGm6W4cbvddG7kLJhWvKRpy1Qtrc3poyPmdJ3duCMU1mz1GpG264e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YLLZYXcer5gyLRoU6PK1ByF5b2sKriepaGD3hUK6UchJcvdHzf5a49gnwsyfzJwqvZ3W68hToeD6xPVbGai3miv",
  "key1": "cF83Bnoa1bVYHtYCy1rBuR2yDwMdpT2AD9QEP9xBmXoxTw6MefscyDp9LrbHymQiYi64cMyZQ4h8YyXaENyDtgT",
  "key2": "49s6wJLmYd5C7QNApeoduLKr87DjBY4XtNYxYBKk8r1E31faAqMpSESLfWdkF3fCeGPy8WkegokkySc7HXMUjYMF",
  "key3": "PH2TXxKYUxaSQLtwbTKZ13eaCP4MxCtSADP4AxSaehXTjijQgFjkUC9j4hpyMmpH15yXJWB9gBS4qYRuMXEH7YP",
  "key4": "4oPPuhoVZDfG2tkrLEdLsbPFJSjXEMAmtDVPyotPiTdrmrTd8tTpgy3WYq2kScPAR37eE9D4CBuh7w6177ejUAdr",
  "key5": "5KvevikzBCsxCBaoCvwGHjuGkfguoRLBrnvA7qM2rrYAFweX6HosuRDn9AZFY9Hb2eNHWhn1C53JYSE5f9YAbMTU",
  "key6": "24AHDS7MJ5vMLcpFS8yAKcFLiYVyxp9m2TvKLSaLHcLjRUWLcqSq2nyX5BT8fD5mrUWe1aFAeCmAv48upMWuWkZH",
  "key7": "39CeqDPz9SJPzB4jKCnyykiWjxM14kYDXFiiXtavZ7Do5CRbxrEe2V55hBYUa8vsThntrZ1nRwNamTcWBJo1Crmf",
  "key8": "3EqUgby4rDs36Zo3wUHezUwsVRcw8HSF7pYYc6mhx5NYEyFsCGA2kB4tAbq7aNPeJyvkyJHiB6MnQcFoT6akK53W",
  "key9": "KRc3zXgicuBp3hRugwTofw72TDwLhwudrbQhdmf4hxaA9M4mxtQo27yWsGXgA8Ca6WAYT1novijdsW1EqjkL4sT",
  "key10": "58a9j9yGUayVg4AaSAiDupMdiWmMUyT1Cow7rgdikdhMDD7aTJ3osofMNa32TsHnPFRsHpMr591z6JpizC9sghWh",
  "key11": "UDs9UPW8uiqRk1cNZiUY4AGudwt5FDcgTYyMH1MUMfwT1KiJLvQESLyGJDXywrEsUK4Mem8p7cr9sNSS75bw5aV",
  "key12": "27iSzACBWfJJ7kJSb1H2MKUeknvEzZKQ7QKqYpCVq4RTm2SoioqRS9qZHaSt2EcfvyUVT2duU9sxS8ruAUp6VW78",
  "key13": "3x6BeY2nmt1MRWxYmkQ5aLyQSF7Mu4Ar8mPb7LV8Z79dLzfCKUhwWx7i35N8unAk6PvqqpNnWQTqVnJxKvLBPkHw",
  "key14": "2xr17qgrrZNxLbqQ2hCBFaSfS1QF2NebqBgKKhrNQRr5qQSCs3ESGQYqeurDPjAvUM8j9LpJYJYz19PiLRdHsdvt",
  "key15": "57ixK4jh3o7T6hckLHgenrt8CK3oV4jv35Vez8qekT7eJHL3wvgwesBXrG6jpo9RyJu3DDAvQg2WGrVkmBubPhhH",
  "key16": "4ooceywP7VUSCnx3qp9rXXFywKBAJHz2YBTWmJLE4bfBCqb4FwEgRgMQmPvZZPCZ4AeMfQxovsBDgSVY83jukAHL",
  "key17": "4s9GaWw9GZ4GRREj5VtNo8ypSW9LuNPvk5atHzpuNuzEpqFSYvyYEJ5WkNGrQgxSwXdAyHXUa9S6XRBvXVmJDUCp",
  "key18": "574MnHLTEKXGTpd8YtbD1sZLBQ3FJJQFnAUZfWSaMBvq2ZXjfDxkvgbmBQcFYSRrVwpZbgEXZ3H3JpgAeMEmuvJP",
  "key19": "uvNcAJRHa25zz24d7wnhArENRgFKHD323tFX6nPpDrS1sjdoTkXu4tiuPVos42Em8vFXaFSMz9cSdQgqLicG3Uu",
  "key20": "5ZfcxtZi5yHrjb8mkbsGNTGiLVmfgQaQAWYFWvPBsMaZyMhKGtGBRpErTPEn612mRt8iHhfxNBLtrRcUtLwpfpxN",
  "key21": "2fwkeNzhYfkX1MfihWMBMfLkqsnq6yBLYbjEUcdm9Jyova22qUt8TzUXYL3pDVJ7MefvQkGXFzpHrQ2eKfVvPNdH",
  "key22": "5yF64ACeuL92RS5h6PpJ7F1pkSoGpzYvqoHzo9WhhmUR2wXDXoX9q9sv34mdNSfCBhp22uF1MuhPA3wwmsH61Mrj",
  "key23": "gknXsWDQPZh7dSYwZ3MNuoS1nZsUJogRWAmaHcrQanqy2HEApCRBkBs4U4eMwRYMNwdx9EVzFaHkcSN2GBfkPAa",
  "key24": "3N7mr1hF8QH1qwrQcMiZgEoMjEkqrygdanBinzxv8o4ZBBWy6QGNM7oDbg3KYfADrTCPoK53nztVhsKytukDi4Gt",
  "key25": "HsUDN4vFeXTJLpZ5pSRzg39XyufQsxmWbpXrxMuhJ3ouTtfLqbGaWs4ZByRHcJtLqCtAJALskJyLLXarwkMxTBX",
  "key26": "ssU61Q7cZAZ1YpkD6erUyL8yjZGHSnx5ytVux1yvQC5gVDpkVxtTKYzWPDpBQXYe54au2dmjRhSS6VW4Xfjj7zv",
  "key27": "EREuWQaNRq17u9ToinANmFpUtncLjTa73dYzgPwKcBDWPAXsUzuLVX95U24tKQq2wDzGXN4wLyef6Z2EVqgmqYM",
  "key28": "6174EEmkfLPSyiAgqfdfN4kSfNQTAea9Za35ES92W8jgwntSXHd5UoxYVWHP9hKnjXrAtduVggcqVVojcotHcRTq",
  "key29": "3m8Ch6X2KEkFzPfR6rWygcAzVfb8Zf6Tsv56Yoy7oJDHknjiGE6UiaJ8YFzfeqZNK5rHbJah6Ldn876nrE5zajAv",
  "key30": "4mH2hXzsuDbnLhugu8ExVDKJDpsmmCyZFWMvVKCU7jU9Ky2Rs7dprcVNKA5pZMxH1nDfu9K6Lu4Tq3TyyJvNhutj",
  "key31": "2HVU897R6MV3wUiYCe83TS9ooPs2Vc2DdHo2T6uqCerZRPPdHd1a7XbYP4rj6Jcu5RVBGoXcrg4u9t4TCwRmteiL",
  "key32": "52X6EPZGabRL4ojuS3wBk6rpeELsxuu961QUi4q5XMhqHu6DVbfBURoidSrSToawDH3dhn9eam2ubUkh4TLS6F9H",
  "key33": "5zsnp91h6fbcBHUkhuJ32wHgPCmnN171pQD11BH4qduqmQarUMrDX3KRuBEtpyyXPWSxvGE4KS7eL4XPs7xwNzre",
  "key34": "2n7jK2fQVV9CKWczhDBD4ct4caL87uM5g7NXmS5kQ8xLykvMMq3UiM57EjdXhawJBAvbkngmFagVMMNCuN8fAnoW",
  "key35": "2oivPo8UbKuGMKu9ZF3GYPEwP7ChMHZmToiTLJDFWdqCv8LCCcmjZi5BmeAFPKVKexk1LrDUJZLgjc2w9Wkvj9L",
  "key36": "5qC4u75S4koKqSZkoCCrAnAoe2q3YedeQgpxwe1U1oa6YdiohLJrqJY15JGwKdX1xiUQr628dsjYJTPPLCuCze1h",
  "key37": "4Y3W6VhZnz3t5BJPANUKyWDYJmFcEHebLdZuRaK44ursQns2NVoX2P5uXaX4cFrwp9PvafMimvYazvCkg2W68Rih",
  "key38": "5FwwgkBMrngMKDuUvgGWSHe5dNX9DCZBbWHCxzxo1VYstMbA3UaQhhZoBHJ5nRadz9jLd63mTFtLYFLbEENBJXwC",
  "key39": "MMTVCAPcrqwiJ2KD8HgeY39yjANgdrpTnvxSzerPaVYFzxyamBEsn9AFUNL66gab7FymDLnr2imy1kHFzFPiWex",
  "key40": "4XNSrzcVNWarhogsM4MkSUSkAjww3uBjMck65H9d8LRaV4WjkPA3xbkQ3WKfmWtMf2QMnD7hXE1XaNAz9Ebd6XMS",
  "key41": "5FpA4ScfkupPmLm9xEWpNLuf3ieq4Avw557LE678TyeknyAksMKWaSucZxdRMsqWZmqk4wpyCA65XCjj8DoxXFks",
  "key42": "4B68hQdhjhUxX2ipRAcCdMR3wJ3MW4rvgnjLiTGvW7h753BBhthPHVAuSTpf7f1Wo7t8K4NnphnjbBWcMQSKJmLc"
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
