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
    "3mxFoVSzTMSM8Z9YQrPwLbqtnwLkawbabMi2WGRJm1Rt8cDhCXk2y8sqeLB2xJWJp2utTFjCfm6keCaz3CFJuX52"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VRSjuEx2wUjW6gWFm2YqLBSSJeP5xfhmQL2YB2bS5pYYrLJVdntHiV2mrzAtA1kPma9oR78eCvM5NbyMCuMTQ1D",
  "key1": "2qhsvCNnPQEAD8HoLPzKqXm7UNo58vWNamE44RuXXsw4SNvskrxSLHBwPJ7GZETZeRdix3LXsJuTRxewDEAsFCNY",
  "key2": "59VxMsVxsKbFBkxR8f8SnZ3YN95iXC9W8i5AHiYPok4JDTVmAmtannLst1X6pgAjqNWTvUqDp5iVNhwSeHf8Y1Hm",
  "key3": "4ZJuvYAQD3cao98Rf9o9kMFMJpNe1g9jB7QufYtpHQvo1Trr1L6QLwAG8wM5zx3yACNNKKYjMbttQkEjPqaKJrZQ",
  "key4": "jHVpMaGSMD7cY5jUvRkunmA67LjDfHSSdk5WxNCHA3LVEPVTQ5aW9QurSbudGF3AS4dCXSmz3WQxRobfiwCQshN",
  "key5": "NxtfntMm9b7beS5PkN9H1ri2rfCgG3gTBoGXHM7NYKscqvWbmmavAyTPiFgH3SeM1yWA793TkVh2H4E3UrQszBT",
  "key6": "5fNsA83E8eKNQUzsg7bn6fxtGMBKTQUsT5d6oAXWz7kQCP64jnLg3amjP6QsrTBt81KyJuShi4HgMjrqpeUn8unP",
  "key7": "2GiiAsp6Mqou5YYqGiawAd1bGQmDbgE54fTeJ2uMxVqP7jLiDnm9CW99ZRDE7XFeHRQZ3PfwtM1Km9usbs8wFs9m",
  "key8": "5dXffnaSTPjS1dZM3pEHpPXUq5AkwjVX9cV6ngZykTXAs2rf5Dw7p2tLg3RHhir2vsiMiGEKsbF368aLAvG7ypfk",
  "key9": "52VkzH7nma3zbDAdfvRV7fuWtRduzzo3JV8KEAbet3qNsj74U9UFVojbs1Wd4ni3GXfXasJ8MacTfuVjEGyvoH3x",
  "key10": "3PDZ46XZ68v9eAXEyASuXLrm8XzgErM128pfUGWebfvQtSV3FdmdAGGZCjjGZAbEKXUPurusHCg6mbPXiyN9U3v2",
  "key11": "LMYBixsFEDGfUnzvyUB3GBTkNnxSrEMiAFqeNpdwpf4yzyZTKkyh7mwnzoepDWmWKvsjpd82Mf7PpGKJFmrLqYy",
  "key12": "aKcRPtsDstaJ6ksN5E4AoLebP71BoLFo712aV8frGnM6goh45no2dsc8yU39Pqe64kJtxyCF7fXfxZnAUY5QPRC",
  "key13": "UTF3AAgTy3sdZuYEzGP7DFqjJDCRS8kvVLyS5F8ya4Vj2qUeiMrF9HbEYxvDrVXvL7Zz8DAgvW5eUGiatG9NCTz",
  "key14": "5qECpgaVAGaEJuqQWEgt3BM2xfBFh3JpLkojYEzFs7WCxv2RQmiEqdjhrTtLE71KWuTHxZiRHkpwuxyzBbfhQ6eK",
  "key15": "5xpusXGUxHJijxcfk3ULD9XfDFP3BexiaBKppkBa5hQvWRN1NKPXLuPkh1s7npFvwZ9GGvoHP1ky7tVo7CG7j8Ux",
  "key16": "3dp7LsiFXLJPrJ8u5qyeYT7oW2Cv5aqvKAU89dzoe5oWFzcqbnn4qEkqE4s4CcJxVEJgyLkFffw9638nMr6hMWVW",
  "key17": "5j8ANurPXARvm2dqGY6hfrmL3h34s3F5JZMabJBnPFq3TTbcpYdvwEFyxgKohBFQyFPSbTSWPr2wotZg9XPwQQx2",
  "key18": "Uejj7qDQ1xvsVrMKFwZaLFFwjAg6BgrEG1qpAmjSn973AYjhquKoLRWCzh4sW5YfMzMC8612o128HGT1SVUVNUo",
  "key19": "L5S9k9LeWy5i9rpEw8v5ZgtZB4DDXhFiGzZz7HiUeB34kjek3cgXf1n5TVvzV9QtJEazvx2Hxs1PQtbrAseS6Cp",
  "key20": "4Rp7og1SiajM36fZh8Jofz737K8KVhUyDy2WaVEFYVBRamBAX92TMYKeLXHv7HrpaYZJjdYxDtQRTxX9ejaryANk",
  "key21": "4LFMP1kiYCsYdSorG5jC3uJ8FCW1tv99vnyfSEcQHTPQEbxu7pY7hvMwZoFEivWc3x3xQ43LfBSJig6jfXx9ZAye",
  "key22": "5AW193Li2v6uUF1JcVy7T8DqxF8BVgSvQHtPPozR8kvZESy1tRY6cRM2b76oytKRNVKWhQw2HKfPJvTGa4EUrZy7",
  "key23": "2veYQEpacQGyjh9aYeiyFQB3cPkgiBuoSqJAcZDoCZBoGzuEnpCfUTShfGLf9k4sSCLfiCNFsZiktW64HNdJVejy",
  "key24": "3NCFCaUYXdE7cr6SCV6Z2k783T9rFVyR7vajsgRtuSWymsH4CHfZv55w8AYa3g4koTQQLaYWr4hhpz6znxCK9i3y",
  "key25": "2EKzsqf817GDP8fLVmnnDQuSqkKGZu19XDCgx7AcWyazMmgBoUcVbGTQgKVc2EgdwyPRs15TaJdy3gGPKbPqN2hD",
  "key26": "2B5Qrdk2hMRViMxYfHhqJaaK1bWXRiVEuEGxVmWWkPasZ687WYLoRgGKVSHzidgiVVp1BDZX2TTxDfFUWScQKZek",
  "key27": "G3HpTyRdENfms97xBVKWTF1DJRWUG2pb7LcWus1uktohVJQ33t9D93rjDJd31QGZNKvD4yMjgqB1ACHKBzjmk6L"
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
