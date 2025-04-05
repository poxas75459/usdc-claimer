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
    "rf87ztBzzH3VHmW61xw4AkMyUwB5tvTnXyU3jxVXPzRWxy9c3agUy2vDZSR87StDPbAVTGKXG1S8SrV2m4BJ2hC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hFu4Z2XcaoNYxEY1epuGe4rfmwyWYFeFGQfQcs9hDJvvUwTMC6rtLeEiKUst84oetz7vyvLzJvzZ7AjYbSBJLNB",
  "key1": "2UH1xyQ9TmzSJgasCPMqRz2BUbKJLtqf1KKSVnecxNUhACwYzxpkP7CCVHqttCiAB1UuFHoMRBcdHan6bREcxLe9",
  "key2": "xyybfxNGPaoMMYsnxeR1dQxaCvsGEDvKDjCa1NNbz6W1QERV3etxgaAg48YFdAKZZA4m5b1pmwjPvUxJA8CPSWb",
  "key3": "5VNYL3dy767RAjX5tp2DrtRNhCDEmzZf6wwKRB8r9y7GSkUzCqBzdRgF9XuStJh8GnyT8iMmi5zKjCuKpdub4wba",
  "key4": "4sycRuzs8iKDgrm6TeJo1TzRRs8gprWbK21N9A6q7yrihuq867ZknoNQsztAD8iPAv95T4QTGmH16TkcyxauAnvN",
  "key5": "5PL9Wp7TVU3fwzQt2nGX8cH7UGUb8PdAhwWRwRSab5h5qAR5dBT3kR12peEwhp8ywRgtZaQsaX4GAdgTegXgsQAL",
  "key6": "3S4V5E3UtjQqy3qNZ8KopZVq7ER2oFH5MsxDpMnYDdCpMC7UjUopsasbj6i161DFm2jTTf7vXkjidyeUE7BoGKm5",
  "key7": "3Yo2iV6V4FQ6sP7nMwNKqWDh7oL1PUTGnnu7AoEFVr36oQCVdcPuaaqCaKxarr94GP1D77qMuqdseFR2CTUX6v59",
  "key8": "3vdDs27CKUtWZ2vQApoq64Q9nE7dweHQZM4VBB2Bn9BMDzp9ghVTs4YeTepPYHchhjES4SfmP7Vtg1NGW5bRM4Mv",
  "key9": "3S7Amg28PHeZ8cngWLso5Xuor5vpdScV9MUPJsZ6tLcbtMobc4GNZWBhQatzLmRJxc7uRmBpaQPbRPmQhWWkvqgK",
  "key10": "5TVq3qqbJfSPdtEWaHEGF2DdX7VEUGq5EFDaNEdbkpuxxvzzLChDLw8xdfgpbMzizNn4J8pRWgqkmkgieo5EppP5",
  "key11": "2rVQ215ZxeFt661fPkkzW1ytZvdTAXv1yV9BapvqhgmvZbaLu7bjDp96Zceq4HQts2pngfm3iDgk9JQaG6FJTMNh",
  "key12": "4RHCG4H6NDrKRowVky1xxKyrpHgrUCsatYQdX5FkE4H7NwMvHhQJ6yC8qow2UVvJnqEha9qTKZgWRX3oPS31G8HM",
  "key13": "4T3ZjsDipxVQTfR2b7VF7ioyZEoie32xrmKfVP9FmS9wPnbpqEdaxRDNJjfk5nxFp3TQawzdsgd58yctTYWZRMXs",
  "key14": "3og1EtwdjerZKXyUre7w7EhF6Hrjg5Ur7hsa28F8B599PoVTgAaQuFJ9gzVPs34AvvMKBUibrzPUk9E5B731ZL52",
  "key15": "5uNcoxYJb2ghaocQnY5QZHS4JwCYPoPry16MhSka1ksetxNcmwrG5shQtLW1tHKhtziTWKLwK73H8DLQgXBD8Lng",
  "key16": "3AExJw6sS7BuZx5Xrbi3pnB3djb214qxfdVJ8Ywtr24SvNdgv1N19R9wh9aUnCTtHSNAwiMpyM6SmoYCyUBvVy2G",
  "key17": "4kG4qgmpd9dqDn7mjjeYfxseNdMnJv5kKK5RZEHRde5jE7ByC7xnCXW872VSj65hNP9vmLrBGVhNe3QPui1M9CyA",
  "key18": "5dkAgMiQrXSbAo4ss8VZbDUkk2qzn8dFHJpg4jv81NBmpBfUn3qpq4UfC3JTozWHWFMMwNLhSYEJ38CwwupNVNvw",
  "key19": "4d8oLghaLHd2U1VSBd2PT2gRJWbBJvToanhg4AuVGhSbvGg4DPXeCeu4eoYCu1t28rf4zGq3XnHNHMAv6EnbMpTn",
  "key20": "59sKrxjGBLZ6a6vaqv4s9njz57j7drFTPnfA1Hxgtk4AQ7GkJi999Rz3LKSe5yCdCQ84SvPTHF46esCs6eH284RB",
  "key21": "wPhb3UXJ3Cv31HVusFGvVnC58QKPZqJH8q65zFBT2FXitVZYybc96TtRfEBZ9TmQUjjfz3FsWFfPnJry7HLHH9Y",
  "key22": "2Giws8GdUyahewgtRyoFVvxLcTtRJyqQqcFBqbDFKBCQ94VoLozs9pyXV5xSUqaxj6dX9j6YrWkB6g2WQHDMoJs8",
  "key23": "125i8Xbsdj42G2SsfiF2Dkqc6ZjjecQVQdg8wsMMpB7xQFySDGV62JCHTBUkun3WASC4NXgy9Exs4xonaaPbJqmG",
  "key24": "5JDcm1rWNdk84NmP7ki5tB6dneWL7qcQWSBJknRW4VRMdxEDTueHaqmfgd6CGfrN6bTCEkFHt61BAgWZMzhZ7cyz",
  "key25": "3c7emrmikuWCagEtiArCHD47QXbzWEatakLecN3LSTMNzM6nGgjV4fv1Q5dz3X4BcEZQryjj6JDc6xDCSAB6ns5k",
  "key26": "4sPRTn4rqbY3oDSJSwWLVB97e8cska6NsAvfaLUjipuJSycpRqprUPDGzpPaHZcEWjUa5uj24revuNi5wKPGtfkx",
  "key27": "4ZuEx6CMyr7XvVNzpN9BpS5Ra3nnCgbGg9p8D34x4qdshZ5RcFja7FUBSqsNBXvDVfyeymg6CRc8AdVJWZf65CS3",
  "key28": "ePE7MzrTkFNvQJiXQpmA3Hy4fJQ9Z79YaqK5EeDxKPZ3ahuNNFgrZUKeRhrebnEDg1fz72kowXN74AyFQoBe6bb",
  "key29": "43kBukFVdf3W7o9G2D4d9JJAwf97kshkBZ5ZcA5NCmUwAigvNjMoWXDVprx9np6HtrJWN2WKRR878tbAcTy9evY2",
  "key30": "KvqnQhZ1S2X3U2AuyLE3tSKvvc2BghR8uLpnFHR8kuDrTHtg8uJRp95dSmNRfGPdc3urfZr4Mfr72qZcifctNji",
  "key31": "4g5fDLP712xBrdrMfYtnWKuEE7z5GdSp9sgkdwYoW4XHvkauRM1go1VYHUCyna9dtVHaakPWEkVcCEtVPEpubMWo",
  "key32": "2UPVkFBztsH3rkZeSHMDxzFWMAGhGt4B9dxcbpdYhsDntw2gY5qY4NujdU7gzzjwPkJuV1pAX7hwUDURrM3bDhtv"
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
