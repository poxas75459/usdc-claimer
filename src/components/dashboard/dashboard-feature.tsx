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
    "Pia7fSn9P1Ahh6QFM2nGjm56iKKSPBX9drDo7UFzWL94cxRLDQME8Uatk7bRQpUcbHFpHygZ83Wx4DzdYYvdAMb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "erhBJ6MkVVsM9VN1wXB1ojE2pLyphDnLFuUtCqt4uk9AuH51tS3heLzq7BHx2pyt5tvmpvVixvaHA6Jq1ZAr1qt",
  "key1": "3vbxCqH9raZNZFxFn1GvpH8DdHrgYFExJKD1w4irVoseh62YABG9C4icyiLCQC2gnuTd5f9zMtKxB6rY8yegUpHG",
  "key2": "4ED2LPbsSvUAiUMgMsnwf5jr36mZ71ZbcusLGdq5QHtcwyS9J7uAju6b44U2AU8CGiSQgqpiTRQbwmvZtgRn5rDe",
  "key3": "2zB8Tg8kquz5eXyK3v3Q4FqtvhGwWfPgGDwjzoX7qFQ1nGp6TVSUj1mQv5Z9yk4Pr7dU9zU71rcas6aET1oEDS8Z",
  "key4": "5KnaQKv5du7o9wj5U318RZ6Sozi85bZ6WkddKpc73y5KWf8y9xknN73ggBPkDtjy3qRZrZkiAcDvSzWgrrWZxWh3",
  "key5": "63SQzRLxdTJb2NCkv6V6ziJST1pBiNa1bNaJuTsS9KiAE36sEQZAdeRrJzoEoP9o6iLKpUcdf8rQmHdfQUvo1Jmh",
  "key6": "4aSxUCs4J5smrtS5dVsGmhDuozR2ML5ced2wjm5mVGU3aV5nu1NpQrRfJ2tEvxyuLuuxSs2Eqycow4M1CPRcP5Ue",
  "key7": "3hEQD7SyjJuijVmYyU6yLFoxWfr8KbzzVHX7T1r98XDraXK6Z812yanJCmo3B9uzBhZFLvYtxY1XrigXTgY8Nkbb",
  "key8": "28EA14F3aXbV1wUPVCVrB3HX1TZKDgi9XD6ypjKjYbQw3d4YcnkXvWatNFSJZaFJc8bwkE4Q8MdT2WXLfRzrsBRH",
  "key9": "5ytPoVoLCsU2GCBHEC4cZijUAHVx65rr71K5xTkNHu8a4ZaHDJ5FiARKRavRL9CGdEG9hhazTY286ygwhEYmup83",
  "key10": "4QUPrrrQREa5w1Wv9jzEFCmeVSJGDJ2w23iedCdFzBdVp29u6nSnQxoxGBJ5rxYHoGx9yL1SY1e53AK7g1j1JVDJ",
  "key11": "5Gx6v4HDYGRGfVuEEXRHyLshLgYfpEF7cvHPSsRxghBW7T4ox8n6u6K67ZCU2ZJaHoLmk3hpwseMitbRY2v8b6dz",
  "key12": "Rp4D9yvSLPTpJJ9KLSGRu4b8uAp1eYHdeVgFreG5HdKDgFxk6GTS28oBA3RNUTbcNBvatehkVbFRGDYkcJ44CKv",
  "key13": "3RRLiMXgBEc9NQuoaHPzcEx7cJ1CS5rDrDW7t7Kqq3xdq4e6jMSfuUmjjo2aykhD5YzmsKNK86HWBAJoNQ5c5KAE",
  "key14": "qDMoDyjCNFrshKyLYMKA77CnvQrv6uTD1yX9gEqj2wf8T82ajRnAJrBLBfYLN6ry7yVXVGuuWzvZEPAHVS6dxqm",
  "key15": "5yhmq24fce2B9aAqxpnSW1n7dWTEaY5Aeno4x8YRBNUxWjVAvQRBEJEnu3WPmnxuvv7x9ZnZdrPtqEDdkwnFBh9o",
  "key16": "4pVtLM9TskBBtT39GmsHcJmze31mFDu3veTXUUvvxXJWiehBF12sDAbaCZgLRYt9JEiF1Uf8s5XAcSxJQPvWCGAN",
  "key17": "5HVFkDJNCpdBeMyKcmsiEoS3X9UMf9Zq1qbW9xgPyGkq72eWf3KuVts2NDsaEZojPLX8RpMtU9JWNsLizvyNP67S",
  "key18": "5Rqk6ci62VqW5dSLC3odtQBA1LTFZm388oN7xYwB7HgGvirviYA2Q7t4yAGJx3xapBbsscdit6VLHWNqoTB1uBsq",
  "key19": "5u9owSFd7nkYMYTnEsnzN4GGxAmv9nr8D1xdo7wnXD1e7qtFCLanQGCaL37E59BBUZ657QNd2pJy3AqGWidsgtJb",
  "key20": "2xqbB8t4DW1SVkC77urFTKLy6ZAsVXQKo3knLeGsaEGrHftpnhUuigqsexS7nkLyZ3akYxggvgas8tniutt5PbuM",
  "key21": "fJyTiAx3pJCD4Qj6VvBzoGZbB1BTZ82S8tiD61fbmYdvFmwEeSEQ9HeP8Xhd1t8cPPZkiwY6K8Ex6G1KVCVQy2P",
  "key22": "62vsthDSNw4Dc1ob9KomahxFXRQv5EFx8VV6CNuMh1n9VGoKRANMZJ1fGnQptoo9qrAhf8y9XeKoxLYmZWeMPpTx",
  "key23": "4Y8yVnBAYhPQQkrunB2WE4USzBoAwfdCGegAgHETpExxRw5pjAVXa1UJQMufsi9EQueXGZBrQ5YYhoNnSQmxt9DV",
  "key24": "3VGACVDS6FB2DPZvyMjLPcMdA6v1wTY2VjWzqPoPjpnNt2jEwqDy4ZSRUWURog7hpGgtWrLYLGiJ7tz7qgBGTxX7",
  "key25": "sq2xDx19Ewm9Vo1njHe79E59coPH3FrhzBjM2BqhMqEzqYMbU9S2ZWx6sddVfUZzz3ZaJqb3uC6BEo3Kzb1dgtX",
  "key26": "PsKZYuVecDomkV9nRBLkRCjwBuGX5Q7YtC6k7DdV1nsNS2DvNDwJw43fW2wWqG6J1gntRyx7F98YP9cWWGFG569",
  "key27": "2VeCJ74aHPSP4wgnewchQTj1ezsEkFY9u6NVCseEfdiYoNSNyBGH62aZhLnV4GZE3MYwp6uUjXWdAcuUmD7tpwuX",
  "key28": "5p4rRYZe6WxKjkDsanWjako7cteSAQu4L6DTCfkxDKdyH455vCGtZFV5WUEqgWsppjx3Zer7TSyiFV1HUSvYXWwf",
  "key29": "5qYXnauy3vCRPAsaAQUGDruyeiPcf3cBD6CfgSfQgN2Z4RBRrD3Dk4DHDBLLFBn4kHsPuaXgF5xM7aVCnBFxT82w",
  "key30": "sGvDZYKeaymQVYDd66GmcteqMfxwkyXLYGVtLpjame57uBVGVZjWkWXkSKUuvCzoBztXoJGvrx9SDAKo8wfw6wU",
  "key31": "6zS1oSREPMbpt9BtyCFFSfy2tirdHGDmisKsDDL1PKN7c8CFDfHMjak6xNvk9FNTd4DbohY6tB8zQ4RrxVK4Z9U",
  "key32": "Q9Du9LFG92mqCc4mrtw8G7yVHMbqPghmYuZvMNpsiSCr6uW4D8hLKU59jJt8cV6xxDG9MCHhomB52WhicQVauQq",
  "key33": "5P5sRynrRJx7LKakcNiCDaXm9TuMAkC7GUmXgS6DAuzWHhHwFnAqaPcaVJcq7vePgmyWdrNxr5LN7qy7KYvUzQ1J",
  "key34": "5XKYfTcxgfK8XkZxDKDXpRUeCjqyvW9KkHWub6MGfcjKwvSSv5ec5ynLnkzRK2tDd7LHDYFA2Xu9L2bTvWqrVXXP",
  "key35": "dfthvuQt9baj5WxxyRYwQ3Nv9wkZRiD4PTZ3p7s9XKom8Uib4vurqA5cmQ8ETBaLuD54LAsP9YuJgAiA9Be6oGo",
  "key36": "5ydk5YBrHnJ2gc3eJ4P7rwdfwHpCQKQYV5sYpbzyWpznDCb6acfcaKz6AxzR9zuP65vNusW5ygYTBEKf5fxrgg82"
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
