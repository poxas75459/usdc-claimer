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
    "3PkGNaR6NWUbFv7emuYgcGu5eUcBqE5g8kkhkmRzZnU3x7RZdAu9d6aaFLho4WJVzNnRCRkPhhgotpKK1Wso37YK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35B56Jmr7WpCX46pSKppKvWZyjgZ4oDvQZkxsaF2tQuSLrxzjEQsLM5qhZ92QHftdGgQBSrxn8mLTt8aQmTyf3dG",
  "key1": "37NqxcRfyTaTLnThSz1Bfv8CikMUsewo15gYtxx952kFknggggCjoGef8sNqF2yuEV3Qippv8kdfQ5GL9PhrPgZ6",
  "key2": "4yxvQNYzDjrsb5eBBzNbzXoMRP6eVBer2a3RJBkQKsbrLtwhvj3YiwVttNVUqFgMSwgaWHTbKaWC7oEuCRN714DE",
  "key3": "5w2qNjyjcAD7WMnczagRviZHJQF39eBgVxR9hapkBYr3Gwc3Dd77cWHbanoH1ccbRQPzkFqvBUJ7dbq4rSwcWBzV",
  "key4": "5wQNJHNQjuh6phDjNQ3gSG3ZaBRf2skCrD4HWAZjFeYSeNYkAvWjRHNHVo2CKoNoBzzC71nZyWcJqLNSYmgRLZBU",
  "key5": "mG35oLTtCTBMt7RN5NyM2qfqqVvxAU9x5XNe4EEgVdw4iSuDYinbTchyRZNrdDzekw4u9c4SrwHuHphwSVw9nog",
  "key6": "2JFJ3v1x61V4gVtUy6zJpPtEZyGs9eHJ1mxNNfT8bnJtRuZV2b9UtVnqDyw9ienyFM5G7tfPMjGNfcQNsjsqjsft",
  "key7": "5UraVqiwRr7JHmZcaJBovS9B8fvmEpCuMth3rkHaJdr279BLewBb9C6jo7vaLXa7t3Cd9Dxv37oz4qMetSzQeujS",
  "key8": "2UVMYnkDqHKaUW5PZYUL5quUEvFQzgk6PcFHgGEUoEx4bxi5cJXH97Ad1xx7PpYb4CaVg58PJbJBKfs7W4aAqvVm",
  "key9": "5kAHJP6WNopj8c5e568GTm6wXS8MhsrfhjheUAskCfnJwSjFbwCbBfj9WmVLT9J1ba2HQaM2B6TDDtkqCFSDX8V",
  "key10": "563CBJLsbWSCuLtmEnoXpczuJVAH6M1wJfXS3hD7N93pVbZVS98dfYA9bTQdg3bF1ii3NbGDk5BE6U5ZVR9PC4g7",
  "key11": "BEc93DevKNebcyrsgbCenPDySGr6zP7SkjWFVVNR43SSUwcq78zsCt5BfDPy4Bbvt3hnD9kVCtGsWdmh8WVpKcj",
  "key12": "enTqkFuXKFnRZV7cyYpZKH1ujtg6WKprRZ6biqpsGoovZ4mQH295RAiyc2T6VABphqBPVDuEmYhKYNSyTULeyo3",
  "key13": "17XX6MQ1NR5Pf4k7LcfonPGaMUWisVxtPHCutJo1HL1r6U6nejVGGmc7oyJxnQfGBePkptGDC3tjQBYBXFD9jza",
  "key14": "4gnmmg9QZ4KVCtp3GCkg4nooAnpTryYWYbFbUrModi1LAKSLh55avSKBZBRpgRgyYXhE2HW518XTBJTi3YX8RG6E",
  "key15": "GjcvNr6fHUFZ4uwd9xGZHmJPy9iEqC3vrCMCrw9iybrAMpv6PupUHAnA8zXZq18SA7k2JTmBMhCp96DKg8zhUkh",
  "key16": "5J3qYUSKtMuQPXZPSRgzfGyRoDJ2JXtUG4FUBi4GFxy47jzC1u33HCrCHb1VkMCs5Ch3csu4MRZqudo7yzGh6Twh",
  "key17": "4veF3dtpbG8qGtQKmYDQXXtJsNYikunbM9cbmXAVFXzSeFPYz23t7ZjXez8NE5cVbRo66NZfZgAXgUAgnkdoPaVH",
  "key18": "2c3QKm78C22SmR3CA7h3BDGz6u5igv9stkGo2JoyUmgV5NfysZejkdSGFm5dZBtFxcMoNFtt9Ckp4CwrTf7UukZV",
  "key19": "5FeUr7DLbRoyyWrNJ7JZ3RKadHarn93pSKYaFLLcJYT9KL6YU65dSePQWTyyxcQkvFds4Ceevt2LSwwkyQZxXSdV",
  "key20": "46SA3Fqv5apKZynDvC5TiwvSC3xma9HYLVy3Ddfd29ykK4GfC667AVqfib7JchEr41ToS7WjLc7jeq7nhHUUZHQ",
  "key21": "4FqyRAS9s2ZhdgYvWLNPeN6fvxQcry1rBhEWZrcwpmo5eDzehMELg4pHT8aEodKCLVw4TeWRG7ekBk1LRh1QwGrc",
  "key22": "2exzjC5YKABzAWNZZj5NpnoG16vsZHTyx54cydd6oHFWqx2XviWfmthJ5T5aA9vKDt78oaz68takPVsTd8NdFN6Z",
  "key23": "4KW1mu5GuaU2aqx99ahDNtqD4Bz2kPhUkJe6WSLPqVgFJnFgGcEmcGRozHihDkszYd297QsuVUYG5W7Qj1tyEtDr",
  "key24": "3D2cfGAg985Hwu5FykcVm2y5M2edtAMURzfAtRb1DoDYAFAbohqQYhDzhvebTjYXpoapfXNcMypNJPku8j9SDcQo",
  "key25": "4BwFfj3aWrobJ4LcPR4rjjDELhNYREdrcLQBGVNthtSrhb64j3cvq2H9AMi9zJWCbTiH8GEEEDp8CvHpGkZaPfUZ",
  "key26": "JVtQQtbw5BvzYbuZpdSoV3KyGiiVLmkqAjHCZUzAEChYA9XYuBBWdSMe1Hsp6a5JUnMur2eCBfajiM7oDXhNcqD",
  "key27": "5Yg5HZZx22Y7tG1yULV58jtJNPq23qp5dnFYnCFHJwqLGUnresrrpBNjBssLX7TGS3ks6Wkssumq8k5NJvvtsEPQ",
  "key28": "3oosZ4deuMk7jqNq5Pom4f99f3UsBCwcnvgN7K7VrZeYiZo8v2xpSuDjsvXwu15MbMDkNuBp4pD12fV5REWZscAW",
  "key29": "41ikQCpfnreYVymoJsJMmQdNQuQxVd4VaKTBXFHw45ss59mDN13B1rAGDzw61UzWNWgW9x6RBpBDDBsWkh2Ys5Dx",
  "key30": "5aAHtynXFJHMozsbuK5HWGMGW45ZUajxGxvFsZRuvBFzfBoknuKoAm9BtDAzunBkFkL1HgRH8eeXRBNFFhESAtoW",
  "key31": "j6FZ7YWkd4Kqr8Bt6d8YzaFaHsgxQbERVpuN5KAXgNQoYN31Q53wESKijgzH1UNULk3ZnmaLxXgR1H9mrJtWdJb",
  "key32": "4Mykj5TrV2m4j8g5JVxXoifE8WniKnXJxX1XzauH3b69xTHXzYXNKiCvBsNzHWVBMw9Hgvkagq4fDjeefvKeHKQZ",
  "key33": "53gKpd7YoZMZo5hCn2rAUTJEnFCcu1Ywx2kd5s9EXtTM9DuQSUsgMrc9TNiJQud6p5npbE4ERd3MsD3em8DiMrnz",
  "key34": "3EegEyKCu27BiT4a3kMZ3TsgpFTAeZewXvwdu8UpLiJr2mFuVvJoQpdipaGC7HLd6nMtQXgUHigDAHbdmR4JZZvC"
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
