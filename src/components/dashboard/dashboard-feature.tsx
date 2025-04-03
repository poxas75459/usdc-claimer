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
    "GM3yuU7obKopycKd8hyt1wJBrPTtBEzcRPF7Y7CBw2xYxfjmK6v1pMXR4m3E2y5Hip835p359KS8hBadqJf8zW4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42VvsexjXiSd7WGRvc37sFbvZn13iUQFfyT8ZovCBWuARCChLPr1H8uTrfNCzLNbrwXfaWZVzUMZarouXMM5xxEE",
  "key1": "3mn4SYnUHA83BMDUWrpZruHY4gjrT6twsjqRHpbeEFCuKERmSN81DYKKQin9KinpcFWQm7Jq7YSXY8GHmmu5YfMQ",
  "key2": "2fWW7VKwx7DMEcj4dov6NxkJd27ZqVGN9vsTFaAAh56nWaH94gYZMtmGWCyGjbg3NA1PSwLFhjFbxfb2hSGJyam8",
  "key3": "2HQMSuQ2LHskZYm64NzMsS5x11kH1hCTHzFVirjdPhXqYJ2EpB6nUJHv64nd9Fu9mPZCfSgsU2WozpTKk24FiLVg",
  "key4": "3C91L8sZZdPc7D96KNmdkrvoJHSNwHxB2V2KFjiCngX6eTtJdL8rnFNHXVQgqvRjeb44aKzyaQCvsXXAk63p1y95",
  "key5": "2GCq9BSXDAbpwt9vpdjge2Y7j9QKZna2iCBoS6ibCdgZc9bV3sEtobLp8CXVTF5ssjskz9cNxesz7siUUGfSThHK",
  "key6": "4pkXCCxaQLwVsV2nK1hbvManSBiCogsg8yhAx7p7zn6PaoKvxRoBSG7EFUP9CGtKRqZXfdBmBnREgDxzWMfeGCUP",
  "key7": "nphnvHXHUCq5K99sv4Xji3d7EGAbVwD9AGBYXw4KXRdXtijhbiP9henijE6UbK7ZEX1gavWkjWF7qgjjBkwXBNW",
  "key8": "wveTxnTEfXPTsyjqhP1JZyQVLgjCXWwDZjzrPqUhGuFPQCPEnbZMh8LNQMrs9VpGFG926JviWXgWcgM2JSw6SzB",
  "key9": "3h28tBgAw5Z4PL67sJsytYLpEHvFXD96k8Q2ystP8fV1RsznsZgqeJVJPdWPAA9EP3kvaqLk2F2f8PK36LG2Frac",
  "key10": "618w7xHduJEguzDLbRYdwe9n9tkiiHcdoaJamxXtrLyc8KYDHZbmPCKXcAB7bLwa2EGvW1pQMiHYMnCYZSaXCu6s",
  "key11": "5dou8vxnwu9NFrgYsfBMDkKfLR41pPUXcvkMQxtv4gA8VhSwoDXdLZyp5vcQNZZrGdxZ5z5JodUcv4vK9NWBKvWa",
  "key12": "2EidFkzR37qwsdMC5Z8N1HyBPRXQ8sCvG8s1HeYFNAj748hUThi4PrT1m5NEKjLxsoZZSehYgLU9eWe7RJNBMicK",
  "key13": "4LBjuZosMX9w2rW7wRPX67F4DFQTyDHpPFXsNsoDhpLPcFStgBGLnvyAiwMP8BnTXRvv5F8DAizEQmRHACKc9qt1",
  "key14": "1yCuuZ2P1qbCXjdsFGk8ZjmrcXZvJ7k9Hzc1kLtPbovuGjThURPN8xrc34GzkrTVA6Z5V2dvz312f6qLKCA6SC2",
  "key15": "2U6BZXCzsqctKnM5YTjYvkKSpNb1HJTbGUV2MdvLttqLZTn8mUUhngWziRQbkk9uQTgaqpPhEDKQtAu2KEpYJJt",
  "key16": "vAFFPJzmuEH6ypsjb6GXCN3fAPi6W7vvretBB5xDfhHf8nbLjE3xgsz5q3ZipUE5zryZYj2x1PVN79v5DzBZNq9",
  "key17": "4qFsascqkxaYG8pXhMjw6Uosz7EZgpPyc1nqiTbEMZyTEq9GRM2qQm5LTgXhb5rgqreVRNFNjt5cw4wziD9f92To",
  "key18": "2v787YTnBYgVJsEX2NfX9JTzr3hnxt8cQVdLrXxaKrWemumUoXvZz8v5FLuGckLzSeumjjRtPWf3wxLmcdvfjxe2",
  "key19": "5r7b7M7ks7Zi6WfhhqtpAcC53kZVwAZ2ibXXz1xK1XtbVBWPw7hgntmEZEo9YTjgr5SWaG7p3vR6DzaZ5DwmWPz6",
  "key20": "4x4xkaYGsaBEXveChgb66TLoLrhkSLXkfvBZhP6W9tdWLDY1wLazf22HMRQB47NW4DYjj3FTBPMjAg8KJuC6Qwoe",
  "key21": "43KiEgVNtJ59sBkmikdvE5Zm3xAkGgShmif4b8dSwKa2HXQsiqRWYnCqhxXU3aBML8ABNVPEQQr1349xhCk7HKCm",
  "key22": "oFFbNbD2dK77bAN8LjnWccuJm6LYGf4Jr6SvfTMnh11KM2gjoJSXMRKouuT3kHCxjos7jFKbTJpVSw6bqchDnb3",
  "key23": "2CnuJxyKvX5E46DZCAirENBnxWhFJJQN2Pty2b2WnUdaqk82Rf1U6cyB3zK2FnqD3aP8YgD8KsSJjrsYKt5tzT1T",
  "key24": "3iRRBZxhnF51UT6AaKRAA3ELaVyE5WPdPHoQBwgdyNLr6LeEc8G5y4vrLSk6P3yYArEh9sHoe7ELZQiqMsRWu88g",
  "key25": "zK9KpLCoSzsGirsuazs9qfugJ1zW1fKj8FXw21rw1hjvFyS5pyt4mkMSBPN6zfznt4QnGX2WCQRwCwfQVZaPrnV",
  "key26": "32bsetfZqD3jLF5X81SMy7XE2UBx9NQJCw5hfyCFzSay6nWvcevdxUXdNJ58jsWrSoShs3Nyj9RbrhpEgZPoGdN1",
  "key27": "2ZwsbozQuAebMky6um3pVZkRbeaza57j9n23GEqtBe9ziRcPguVsmaup4nagy91KQQ9xSjRAYh3DpvbcAieR4mKb",
  "key28": "4ktC1qYZMZsFWQ14ZJz4KwnRELYqJW1vHpnFemM26zLnEB1rHW1rNgtXKKowCv5S5hHDib3p3H8Qd2P7FutM2hFT",
  "key29": "5aFcj2MZ7MQcobp2AzBzn17Ugeh5RPDf8BvMeCkdd1pCSSdHMTigb3d7yP7feYRv4V8iaHkVU9HeVYDGN8YQsTE9",
  "key30": "3GW7dGhGxN2nCUXC82Aw5J1LKMtuKyrkPyCdULFgNPypXMbkTPpn3ZZykD9mkNmUruW4H8yxaC8BXsmKPzK5TVp4",
  "key31": "47QQ3Tm5mSdGvmt3p7CW3DqXr1NTN6Cpnow5q8NDDi4eWou6PNgGGgtyWG2mfpH6V335hDrkSRRPZmsdahLUAoEA",
  "key32": "4BCc5P2TjjS3DS6gdoYUvNFG2YgkNATn1nSptgQGW5WAh8bxEpxYeW1YcfCeJ7wqryfSdVBzmZcocjcMJhG8QnAf"
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
