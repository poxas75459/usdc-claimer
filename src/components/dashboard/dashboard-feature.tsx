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
    "zZX1vjs7iXCaLa7NN65jkbGWkogYyvEcVdgtHHUSUCj3tfPJEBSmeVznXrpwp9GoLaRxj8oGQkAUCJwBJVcs5DN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bKt3HoLW3tYnH9mfwJH5zthDyTQ6BMJepY9D6eYt836ZBDyQj7sxJ9FHEtuWnb94thWu6tbvWgxycHGazpuuj9T",
  "key1": "iVVsZmV5Wz1FEMVjxSArZtjZvcFb68QiYCwEmJspwfXAF6AmhYs7hSRLX9eZ6N5GJTxcRfQw6C9ENwzrLtraFgq",
  "key2": "3HFL8kbSvVpkTUTRQwNJma7gBQqcMcub4a9JygNiLuXGBU7irF8A71wKqF8pgYU7ZCYdigWCCmPDKMgcMngwCqtQ",
  "key3": "3macrnoB7QGAWctpP9kheyvhPvy9xw4JZUC3nkbiYkKfed8HL4ZawESe3ReteabG3GZ5GxHxWsBRccvKa4dAzzQG",
  "key4": "4awefFDstpr4KKdqf3WVToyHMtV6RdtPtHM87diVtbCW3HQZ49URuXuACZaDszfdcsV4n2Hrg5j1FwUPDC2VdB6Q",
  "key5": "5iR3eg4Dxx3xEkUXdfygSfmW565FNm8d3fGN1pyyo2WCAAnPqWXYDNgNF5LsmwvsZf2Jy1wEA1CQoWRv77sFzpjJ",
  "key6": "36FnKXKPKHvyLwkrsy1qYYgnm4BBnxqyW4eCyQT77ZFzF9zfkxuKh9GnxJrCpmBAvdcDS2YrRvvLxVd5BjoHkzWF",
  "key7": "5Csm48G56LC9MTpG74EWi9aKWj3uaxMFhGLE2fxwNqRQnFZ84Tc3xY6zhoZ622WRzR1kmABTyJivEFhFZkKXMgfH",
  "key8": "3wwoBZpkVDqYrk7PVpptddcYRGZ5j1dCAHPjzRZLH9UN69X4yZdhCrFuAhG7i63SHfrSVhsf6w33Nzj3cy1h5sUd",
  "key9": "33F9GW9SN5Ux5qW92guPMWQ4qV76UMWwJnrrNEdCbZmCQgEHYkxehK6Uc4tfzddfc24isrvFP6AjbzuhKgp9EoKf",
  "key10": "HginV7bdZ8fUtKDNmBPChVJ2oLgFchzsRq5s6Y3WWsD2Y4VCyQ2t99HYyWnQTjpwKzTBWDUfrMTo4YCxA7AQRHG",
  "key11": "66B4AMUCuCwxx2sHJkRf4pVEsi6RTbPDqd9paXrE4uaGc78RDbS8kguMNnPEB3FUzga2jxd2dSGVwTgL3muYDk4A",
  "key12": "rYLjvGbu2dTJpTJ5xDGegASyAAgzLBLDGPGY8V3sq1bq6eBs3EztJFAx3DgigEXyoHpRDyUQd8YQCDGPUKqgs4j",
  "key13": "KYdFNWx5E6yQqZ2TqUfcAj8dyq9Ah5bKexpeao73k4C45hp8gAsK6sL2Us3Hde4PWGsVLbfHNgC37LNcWK551LH",
  "key14": "2jsuzwTcBh8VD61Gz7iH8HuXht2ukqLX7FwFiXqZs7VhnEJ2Zbk9DzeywEyRpkjeayPNRtESfKhcfSzT9iHkrr8T",
  "key15": "AGTLAS3r9iP3AFqscpgm3oqQ87ra6d2D1ZAbR25wJKm5gjhbAKaqTFumZyim8VujpXQpPhebN8JcshwXwLczis6",
  "key16": "3V6rt5B3QGsFkd8XV3RXENfS7NDabxgAGty97AaFKvUnvAq4v58K21sgFzvq4GCdvCPjHTPTfap7Hn2mPLyuabAB",
  "key17": "3YSET73aNkFGyrGNKFM7nXMEdm33TWn7RkdEWpDnoXwfEwE7BTE9A1pixLGLaLi72s3NSA8j5TtRTKHEZ1z5r9yt",
  "key18": "uU1b3M3CUnHwKzmnNDjsr9BqMhf4nMYUJWLkmZMRuQ9M4yrn3g8WVxGuCsgJuMsvAreMH7M1FCbM1mtqE1gipoD",
  "key19": "3kP1SGsyE1GCQ98qEyFB84cCxXQZ1hqtQEdGpVYcmzzG1ZN5hH4j7UbLAvzmfAjqp7HeWCboo15cnQdUGzJQhNyP",
  "key20": "4TztTrB93rqzA1yG9KhTyernRKGYfivrnvhJw5sJ3hYCVXAA4NPXAQUHNt72Vw5wPJPcKfGhXED7wJvD3SpdK6HH",
  "key21": "4tFcQBmczMoDmzrzL8BEsJ6EuF1jd2YNziG1egieMqg4PQKYZXWFWwznHvCTdrYQdzcGoC2pJMw7vtT2x9c83NQX",
  "key22": "5CkwBkTTBW1aMWzbXjw9tvKBtzpQWhN5hQ38ZDvMtyyFXY9h8Dshth5CRRQcFnSKvT9DAzDkGis8aJdcLyaQZgLL",
  "key23": "3YUxuVqtChgPQF6c3NmzD83pU1Di5R87FQb3FjEtCKUe9h9jEwRT5Tq38FEguFShTLx8Z22sVc8ozg2WwN94rQjS",
  "key24": "24WJwnj7GWoAWAbAVNG6gW98QwRLXEk7MAwgLMN5e3pg43dmCQeVpwJQC1MMv3vS76Jg3WKcRtGAP32qFro3djNr",
  "key25": "RkjiqbGCv9m6hBoL6zeCFNU9BddttabiGuQJgEt93bPEh2VbqrxgkQXgcuvKvaps3CcLXE92evRXp3XSYv1nDmB",
  "key26": "42AijR5Y641ripCPhYb3BUrRLzWWUMjFY2XShawFar7hfoMMSN4P9331VtTudJDAgRV8ch9ApMyHCu73Qz6uHAyr",
  "key27": "2Bn3xkfjE6TzV84VpBYYtYRUpF8c9RWgMWdPwZCDAi9nfTZjUDHFxCRKQxBavNqL6XYyDWHF94hZNHruuJCcAFZZ",
  "key28": "4689qgorQE1P77k8DqnQZVxZKeN8X1DKkKCxnBnbZF89HxhKgiKJaRfgapbJejCv3RnwtyjGojtFoGkyqPoG2bvd",
  "key29": "DLxs2HqLgNwufHS4AQDBHpHx6JRJp5Dje1M4ksrbcWCHAs4HmQQV3wiXmLWcRwsYuhrS2PqM91kt8x8BMR3fueh",
  "key30": "2eWg9tEnY6gqwmpEpez2jTT27vRubCEUg2TixzFJXkkqgkMpp31VXzfLfk4d42u5T6gurUQRq49K1SLV4X754B2v",
  "key31": "2nbqKpxJtGCCbMCNQahVTo5r7A7Wkj8QXj15uvhM1ENAk5ymNHRjwWqvbupfuCMMSJQkKirdWaDZunB4bQU9k2u4",
  "key32": "2m4aVGw6MKJsDwkG7pAU64bdDg1P67TXhKHpDbrC5UHod74znNg7XmcNXLfnMtVgbkWUmTwXa7Y3mQHwx15aUTAj",
  "key33": "3Tjb3NxFkVHqUicz81mV7snDBSkZfAtrqkPKJKUD37yU2bsYXWhQgbN9iS9emMsRf1ZgzmRdeeSonCLVCgsLgZPv",
  "key34": "2BBix2p9BKQcosXevdsAWgrph7ycV3bLBEeMydeHYyV7pyXtJ1HVjxwgUjsKA1oGikhYfcAEaSGgvYL7ikPtX9gT",
  "key35": "2N1QAQweHe3MSJWHH6Edf5DDRxbEKa7MK6N1KcifaVjeusiv7xMvdYoF4fX4fJLnewbZZ83BT8RevxoRdt3EqnZB",
  "key36": "495kDpnPPeAERjFf56XF7KA7viGhdFpR7EPJLn1NYbKrHGP8sPady74rRCroNtSjCDzRfaRwZHNiow2pjqMuiznJ",
  "key37": "4QbLifykavdk8mjvHy6BTuHQmyGY1KMRHGqFQtFHYpBnBwm9LEfCZ1hLHsXQiets8c32trEPZKgEaYiW7YUtE3qa",
  "key38": "3WddFo7nuHs51UpUDgfF6PRWnA3Ssijze1qr8skmiepuDEH9aZUmbPXGGn7X6Jup84ESHcpE6HJbaL9BzHSVkjEP",
  "key39": "3eLJeqYW4oJZZxWFY8XDwocVCeXHjr8B5STzN7CXanebPdETmRsWEGJo6HXYXP63uPKYYx7KsEtozXJ4GKS5Rte7",
  "key40": "qxRW3ngJ1qLEs5uKQwQhG92LoJqsDnMdEu3aKq3ioDKNQJXY7BQy2aGZj4xbBB5soySAQfzPYD4yX5Y9eRQj3Db",
  "key41": "3L2FQ3oF1pMQZ3Lsdt9tgY5jsdb7MKeRaWayGwiXRWChHUn96K44gwiRrdQKaf467XeUQqCh2JA8o7wozbhSjJU8",
  "key42": "2htSk6Bwav3DrYzgYT2bf2pRteRmLudtoGoaXUSXvJvoK7Vq3mG6RNZbp8K6qMDBHJ9DxM2CUuyNF7gJWjv6ppSD",
  "key43": "57YvpbZ6SF6E94ZUo3etygep6sJGB99mjuASUek2aLqfRD2vFyR86KjsqJ4J3KwZoxGjudsNfi2TSZGN4GYv7o5R",
  "key44": "2akBbqA4Np621hb56FwRKDCFARgugpoj1XVivscjwFkd1BXTcpZaWXHkFYitrvnHbKyebFPJi4j3rv3RAr6n4aW8",
  "key45": "65KVk7yfh1GVkqF37CTwp8b6zdSFdXzS6xgeGnksEbVPiWs2KaYmMrFswenHjWsnepCswhGHeCshR8jr362XsTBq"
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
