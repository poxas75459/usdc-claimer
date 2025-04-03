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
    "4KgqrZEz2ymyErvNwYBUU7xRitxk2hrzYuJYhiChfHq7MxHHNZfUDdn6rmPqVrQ83h3g96nJaZJw1Ry3hmoj6mA5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HyWnusDB2x2G9hVLVQVhAmCF8FV5Z9Dpnuc5YrSn2b9CuBoCKThgmhZ93SesjznHgJXgusQ6N9Be41CiArsjt31",
  "key1": "2dCTxmvUrdS9WAykYvoVpKeo1fgRSX7wZu25af1226vuRkz1fubFzDhPMxXJdoKwpWdPnizNNRbkNZPS5zXHgfEH",
  "key2": "27oiDh1zQHjKn4LVrUnRnQsho5GQuy9b91aDMjvUFU4rQK7Bg4ZqXQfmHKqymNZuBq55WEr5tEd15nHiMWvAgZCy",
  "key3": "fBU199WTKet9xdY7rmt7jKmmw15TabJ5kQBonTCrGcJFere8ZysRvzfrEmuQDnVg1Lr2XpEUsPAxeZ6nPSVYg4x",
  "key4": "46oCmg1JHyKhGRqZvTUSkfY9AcL6eZmjSbff3uoHs81dXvmaBfeRqzpbZkT9rhcHUzgYdJpewj1NoTUdCvbLU7ee",
  "key5": "2v3wXdXYwvGnRXJC7EEuZeQ3tKSmHqBMJ5E9d9ErfDHivpxdDNTgLAdGge77q7dnkznL6soFf7arYVnsNc524x6S",
  "key6": "64WF7kNCjEuGDVpPT8Z9LmLuBFcwsQnS83FpYUVxPCHFtQ8gwpCSzYquLsLT8YSmSUuR4C6ZoBVkV9a4iN43p9WC",
  "key7": "ZaWLPmqd4mG9hzWqs4J2fuHo8r8Hwb27hawCwttRrEfkr9ofg78mgaXfBGpYGCbBcxUNQ6SY6YhU59ntNHHc5Hn",
  "key8": "61ZreJo8XJc5NkckX1o6a1vYkd2xcC2MZgf5RYYT5jJY4p6jBwnzQ7d9XitUCdduQKh7JCWYY5S7xSA9YtVZZrck",
  "key9": "2DV3xfMBZNFRswoQ1Nqz3dACevoFjrPbgz6jFXtQbWi8izW2iYYmdbBjgh9TpkgR7H3PdVuZffDkuGV5KksBQg2Q",
  "key10": "588V2L6YXrEvZ2rVUNvxMEgh63wSvu3mGULinDV2kCc9zS9zDmrTyvJpnuHC6CPC3wDPjoUg4JHavSMsw5f6ow1B",
  "key11": "j9QPD4AfuLFHYXk6bJ3McKfUbYoRPo2MfPQTSkspHvTbipqC3GUyBVU1u9CArr3918PsPmKrrmgfAPkqdRx6Vch",
  "key12": "2hKAoN959hVwQJBLBGADhaacGxECijX3KRN6pxG58HL9STKQAwRsZA4DSY1onpZbn1Q5guuhxMfRc72cYkgSS5z1",
  "key13": "5poYiAwcDJyhcJdjn1Jt6qrk6fQjEG93mACgbam2nUosuW3aGvRWBSVNVBmJHKwuifuqzRv8We3siU2zcVxRCDA9",
  "key14": "A7bhUheMnDfFQLvLZvQ3R5GoPTcZPVDX9fr4Lr6sKvxrsj174qtbc8evT1XAcW7i53r5Ue3jXitjd6TCSejeHPa",
  "key15": "5Vxe1PZatGmUHbXugKQBUxb24RMynawEyeqK3Gd961gDUJrH32CyEE57ks1kPsuoSc2QKLMuVoTJJJaCCPgTHySD",
  "key16": "32U8229jagYxepjAaqu4eH1c15kcNFH8Ef8njExP87CE18TtRcrweFkEETtVUciVATVxMvUunjqhnzYgbs6oPBDs",
  "key17": "49WxUXmxHR66D9Z1HTdSjEzGYnCMU117dq8gVrXNt84EMd1Jwr7P3ftoTjnR8Ci3eR18fPRL4oaJr8Pisz5vzQoa",
  "key18": "35g99cRjuCh37D2XzQWcQY28CRXbDi1yDB4xm3GVz16rYcNoGj7n3GZD1mNtTTwrpBuy1ns95LJ3WrJYVgqU7BFg",
  "key19": "46Z5nkr1WDPZ2Ls5o9ogfFUjcRk7gguAQZzrXyNdy5gsZ5tDZEhacPny4utSWx47wRhRGJuQtKWzFKmBtAxWv7BP",
  "key20": "5zxZMWaq8K7VJD1zpoyqS9v7XcSe1NxLY3BxjaHQLYEHPJKTpuLFpoC8fyywXxcF8Uj2pzaUGWpZC2tJTmo7Dg2j",
  "key21": "dkaeCXErUn1kJsdmhxZYrGhpE4iJ9EufSkaCnnNzFp7Wbf6vChikCAPsNqRTnnUZpugQKHDLkZSa3V7Mbxn8zzP",
  "key22": "4XNTHfFd3N3RVShM953KzfyeUeju38vr856Ciimhf2yFhMchBhRiMQbyDVZUgt18XqEM7VwFvkshe71Cy6kxxkQW",
  "key23": "4d56LTKVcoUsp6yjQFkZfgNokUqejSZad41BXepw3P8eCcCvu7ApQSaU8xmmPd5t3uDuX8W3xQMXSw3R8KtEfgxb",
  "key24": "3CV9JEY4D3smpgsYLNnhk9oJ1xbkGuNJHSaKKGp3J1C8evQuRt6NxEXuerJpK2pfiJFPZDSpndEzJrCjRnVey5Yx",
  "key25": "BQksgACanpJP2Aq3jbVWvNfC9cWXbg38SVxqo4PtmUyKJKxtJLYV5FYYqchbKN5wW7pHBvKwsRFqRhUqhfomrJs",
  "key26": "3uthdFewC2kbAFxwXsYCajpFwRRbFoaai7sp3SQBjLnobPTdAZahQU6zFrn8A3oQk5qSbTgdYL77x6WuAfMRsUNF",
  "key27": "3hbPpPZj7fa7fHcWnfTm69oHe1ysk1vwTp29rCufT14ohH9ijkz9JPuMaKkErpiHvjcKsVa1w3vMY43s2D3HvhFC",
  "key28": "4fM85vqkqqzSgHTpzDM8grKmi4VBsaw4XuM9HdgWL27GzukjKEuSVdqvEX7sa35e3s11c11EEJtoSJLwdY5U6UKL",
  "key29": "taioDTFjpuYmavjUPqygXveY5ihcR8Gzms1PV9zPnABG4ZNUdpPebx2dc54gqY5dJDXxXZougWT4QzZdrsPpRmA",
  "key30": "5hbe6AJtoWHwGAYbb1nhAYAJreo7jWh4ewVG74VUsJU3tG5BWLXhshQUy6s2EVZoK44LHPhd8GJwhSCJySbbKyLd",
  "key31": "wYTXkFWF193iNoH76KBDpV951JcRWCBwBV6vkwMGzWA1uXSv8piE6UdnjpyLjzgNZyb1tUM3yaw1nKcHjM2dQwk",
  "key32": "h8qNDWppuv1f95esHnveQjPAsxKTxaCN9MACU59Qmo4FJho9e3XkcFUDraEjFZnyQcV6e1GxiyWV7noDGevVAQ5",
  "key33": "5GrPxt9n8t6k1RJSwhVqAbzXSDRdH5qiikZBo5Nmg3HLGVMPLza39myHpohcWeFwSzQnrjyhiRfdYAkhpWPCPqa7",
  "key34": "2rAVGmk7tUa96KhgHwpvtBQjRSpUvFWdz1xGwcqkb6ZSiaWYqQGBYH9S4QMZSH68VhQ1bxkNBfrCp39TqVRCZUhH",
  "key35": "KuGbfuxLyX9qJoayoqQtweLfzZrwYdAQCJSsQm2VagduoGoG1GuWK2Siw9AfyCUUPCjtyHwJYy8BLcNcXrhQkp4",
  "key36": "5X6TZeepFyppybks69nJz7WhbyamJmAm4dYPywMPpGzJXHhFMFRAsPmvEXquPCxv6r9TnB8qDN3UKgxUNjd9mNs7",
  "key37": "4ttGo2r53fjKSCUdsoBst3sG4cF4c63o7EZVoN2epJZoFbtKeVzdo34GnEniHrSevSWY1NxxjNbgFNbK9aJ39VTh",
  "key38": "3V2QePkHMvcnAKQjJfHKbfQQoLFFfR3h9j3ezgC8PChQbfsYYEmw4iJjZvBgAgmJY7TsReBbRbXpXeWtiBEZMK4T",
  "key39": "4u6QqAeKd6qe9vSH9fMRhec6f2GM9SCuWF42JfavGS7cvgWvxEBjkEwmLoptt6at8wngPrW2JU6LfHWyHxQRZSy8"
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
