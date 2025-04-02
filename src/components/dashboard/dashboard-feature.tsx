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
    "cxCySDxwkGBDFYmGBa2WfnuACfgqVNA872S8D7HUaReEAnCvnWgCJJ74wkj2GqmeFbFH5WhNu7ztT2fK3UN1boL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cwxoCynwcyYW84uHor73eVXvhWvtmoAaMCrNtR9hCQQiAgv7Z63ak7DrKVZEFHGqtGLCyAMVzpcBHjnK2VEEth6",
  "key1": "5cATxs3mGycZM2XgGHezWtP8wm3iMcBFXfJTENdcqEK832sektUnHWNjeTtLYP6hZfzrWGKWdnpgiNLNoUd6fRET",
  "key2": "5ZYnak4E8QAwF7SrfmmhJC2AYUwNEMcTuv22VjLxEfTQ2KUuH52AorxSvCWK5zHWDksjiybJ9wnNfReL2PVWAzjz",
  "key3": "3xbo7HroJLvY6hfg5m2AXgVV2Y5CMfYUUc78M6tvhnoAiJhmMGfDgE5zeB18ZpHAwWhY2ZMKW85ef4y9ycELseui",
  "key4": "RhmsW2rhS4jTFe4NjPDduhm2iYbKUqAHWQoEvwFE6R36NnDTUA1RmURLhy4Mu6RWzvUpSGJfoWyNhYpzNBkMgiy",
  "key5": "5Zvz5EfcBGkZAJYYJZKycTY2nAb6h4VzYCUz3j2Dykcvi1Va4CHUc6dfgStvtW5k1J94ohFjZah1PxHpsBrRmBvH",
  "key6": "2rjftQaHx9XCyMFzQvLhNfAmm2E69X3ZrL3uAvJy3m2v9Qn4nT8jAAnJMg7MiXzkNvno31Rmz8kXJ9wwzQ8K4x6k",
  "key7": "2jzay59KMKsvtc9L5mzfFsy1zvqvfweuRppbmqzZouY1PP2R7X3Xzvg9o92nAvmep3XNzcxxLPaH2ketiiJ5kYR8",
  "key8": "5XxyjapEKuZiigJBexc44yhv5nP3LJBT5BixtAcPvBm5JXzmU1NbW86Db18v9TsDW8XaZJkch52RtjWF5NxgdEUa",
  "key9": "3dV9PAoTxwqCV9mFZHqVJnqJ4UC4NehyRHFtwd8zzwYkUtWP1TRBz6mMjxegpYv5LzUGdL8mn5HiZ78uvRv5mjCE",
  "key10": "2kJkTFtMeAuwzjzRwCEfb1ZgCwaZ3g2mCy2GQ5eWVXw3fSJDqVPjbxWaFKEJQejtAt3sfSw4ZWgGAUiBPwxoPQFF",
  "key11": "4gvCtaFWzawBMkzmC1Mw58eRezbmahfrJSctiETJKE9QDBoDqeNYhc7fqCfj1mF2mSBkTozbbcBh8tS3e56Bbm7n",
  "key12": "5nLXayN9mcbG26qierFYtDkT1E9i3LJQGyzhT75k4frwwcWrsmAqviWK4tc5cZqU5KfZcwEkUQBca3DSJffG561t",
  "key13": "4XZoxi5rXJHJUoDKguj5iPPhdFniHKDsJcp9BDSGbb1X3C8Vbms3cgNnVgEwKFtUMGv4NiXztpucyXJX2Q6XNRSj",
  "key14": "3p1sNot8LKMkWEJpGiMZsfdGnAMvbgrfGitEMYwXd43vdpn1ho11SEj9wPuHW62v137Mk99UnJi5Q2og7hV2VCLE",
  "key15": "5EFiH5MxAftRdBzt5aRv3fTor4NSm249dMbnoHzuM9tSk93Brz7ibcCy3njPfnWuMfGKmj5thCv5RTM6FQoj5MP4",
  "key16": "TsuiKuQ5F28vqppB8FNbbxGikrPAwUXnBXznTFxxGP6CsHmMwUqeSdjUzSG1eNRjeyzZmmQV5vTwsPKJ7YcfaEf",
  "key17": "2gtS4vTi851CAscGq8qgc4BcHca5EyooBeyDPXw9rFChgkxm3ADPjB4enssCNamDyDyf8T5JE1C61Pb9q7fyYDyN",
  "key18": "61RCS6JyUiJYQfH2ucoVnxRWoTpjkyxvrjTriqq38UqBLkrAgN8njfKcJdSjppCZfc7UKc4aCYAVx4dySsrdpmwP",
  "key19": "23yDzaaVyq2kiL6xDbVAYWR1bLsyy98d69MHDRofp21ajGDeivjsXuYutMBkcPGwKzzgTZWgaP6CYz9MHb269F2T",
  "key20": "3jK87RSq8T3qmzn1mRSYEknYR98BZjZB8rHfraJ7TfBCxEjaY4gjQxRgpf3fS9LZhDVFTnyoTGfcTkDBvoxc954N",
  "key21": "2U5GZht1jRP5NpuVuZkzRcZUP6CetMpV2BEnRmyckLz1hERcUXjCfSSDeo7gKU1FthsWdfVHtpgfe3gmZro1HKGs",
  "key22": "5LBHuDGGThBmrvMNRZkNvRPQkd2r8rqKU4u3ARKvtFrG4dqpktyyJYi2r2wtaoARXJ6gt4byZ9dzaTLxUn1rc7jU",
  "key23": "5ACn5UxdzuXnjhsBMBpoXychY2rA963jGYy2jVUheJuTfFrbSAhSSKTScffgAkSLVane8U3bjct9BZQu5ca9ybjm",
  "key24": "47vExe8TMbsuHvRJmDSvGQ9VLQVTP4D95arRgABBweZQ4dui4Ho5iHt1egKNuUVEXCEM3UWs4AyUETJWHEfRwCmh",
  "key25": "1vJ8Bq6CTuKnNYfnSn2Bs9UdwdSiBx993cEZZac8Vdgq8KhMPWKrfjSK4y2USJFiwiYX87yF92As6jTNhu11FGy",
  "key26": "67WJwqrGZQNhkQSJx347AaTaeSuHETQcYLuKPz6jQ3WqFyGkYM9zxjrnPTAVfQHVPNAsDsLY8FTiUYz1zc6pSZze",
  "key27": "2nosKoZfornCjKKs5jU6aFWf7pZZT1dvemWP54xhAfGXAhrGK2pL8vJ4fm3En5RBvJCaYhS52YqRjFYwiauqDZHE",
  "key28": "5yos26avX9p2yZqewkW3dc3co9Rs1WPahEdjEQF3qPvHFkznfFjpNXWQeisRNniE856bAeJ9XD6QX1UWcD5p99T2",
  "key29": "3HVgvJVBy44KgbFxupGW5A6693hwPDuZJwGNX9FBQg6YGGMqefHc99xuUSFsscLTWsUALcJE9Q8Hf5wyKimqedxk"
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
