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
    "3k3p7X8nRnLNZxQgnDAxnWaukoGkYvRUFQZjNZSiq2huc9R87EX5qBaCS2yJahdESSSCCr322MjXuBrMQX61sDys"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xUCeWHas4oiwBWVCjDUsryF2HZbdasevGTRY32vSzLY9JquZv2MDzWUhK1dvx56Dfv3iQ5SZyC2jSrGPdSH6bbN",
  "key1": "xj4T22LzBFu8y4w6SPvWiZeYe1AT8kJ4wGXfGr3tqUhPymFsK2ZRRr6tHXwbTibnHjoQKLLqyoLTFjyBwpf6uje",
  "key2": "3VxjB2tkARdqdoqbvHm8NwMWqvVyCJ29yQusC9uDwP7pg5YUtmHddg3Nbp8mVLT3eXCbGin6X9u6kBCZtDeUUhsR",
  "key3": "4i6wDnFidSKPwpVeFKSDoNULV1cux5Gohcp5sUaLfjLUHG8yjDW5B86vfxpmVchQ6dpxYYU3UDnXPnn4Tby5A9sG",
  "key4": "56B2ngX4JwJrKiYQafMsRsEi3eBkpncJmf2S8eFyQBuDcNBxa5gD3YpLetNCdE332eUquV6euP1oczXr8dcRKrkF",
  "key5": "485Fxi3fisscL8KPra4prQW1KQTG77cUVnXq6zQFBha9KBZpwcFrDH9xHqfBVQ4gCoQASRkAiKuwgdEDBMhBKBBG",
  "key6": "hbgtEZYPLgHECnQZhBywnjxFroKuoCUnBt71Jr6kqoQMQaMHCSZN6V94AtSZiVfwnmknYvhSmXbvB83oKZ5vZXQ",
  "key7": "4nGJwDwsVTzAzMBJdeBjQK1VMD4ryDSx8K9T1aBTaALwkpJbhNK7xtPDMkUZiY26ihfyRqUjnFS31f3FbHYN1xcA",
  "key8": "2bAdJfdk9MAV7WaFTKV4WGKYQoNyf8Mja4BdQmF5BxfJXjzr5niq6znxy6yNCVC2tKEEUvkUwSaDkuLtJpM57pMG",
  "key9": "2Y9DQqKbWhmAGhgfLFH4z9YgXNgvYvFEfDFt74W2iRCEEkPDPdEnPJAKetGbMJ5NWGWTnKTxhLEYgFd1wRQQbjQD",
  "key10": "hfEb2dRPSMZEinsgvxTvPMHujprxSzVBWTEhC5848cVsMmmkBHZa9hEPJGX6N6zWpmdtdbqix1NdvYhMxJ1iMaj",
  "key11": "3YdQwMJSGpTke5BaSGBipfN4RxzdZ8SG2d6oGRFmT25Lot1b9z1oxf6dqBPjzGPESrcxvYmwTUskcXqGdRbMAeiZ",
  "key12": "5cVRFXWEYpefkjB1znnDF18H29j9SRVFybSo1WZpknqUEjDjLFd7doAkA1g5qu6mDct7WHqS5wbytkfvRXSHCHnq",
  "key13": "3f9VbSSuLXYVULbMdZFDweLV3B8kTvmHn5FD851XwS7zNDE2NdJLrdrYVfD5aU6mWaHLKVEzJ5HzrzBoBtGQ1W1Q",
  "key14": "QSA7LtHtgpXN5h3C7occBPRD55SHKwwjhHppBCTqXHmmmNzVaAiW2YiR3J28TQHCA6ZMn87P6VhyAGadgaLmS1j",
  "key15": "4FcurMrSDpmTfUiaeYL2GEqj1K28Gs5S9HrSKyGWDpDvdoFR7Me2TbN7bqZh8hXqUP92dP3znnX4Gv3UPv8565jQ",
  "key16": "5xmWekmuNcmbFMdWFr42G7t6gcegbYsmhW32ZADWdFM5KxQGeEAiK3vpDDCAk2gt986T5LEfZwBrqYjFfWX7dN9c",
  "key17": "2iHAfFNX1g2diZcAZkoSWitQyqL6CqDcRG3uWCwWhCbhpMkk3HEMqtH96dvLGWD6EMJEsARntE2r5FQys2HhyFhw",
  "key18": "2QRNuA1719azfnUwbXzaV9fLUF14q52ha1ZM5AAydbowbnWrtaQjbh7H7JxHXy17B7zJj7FDV2gGw1htxaFRa4ta",
  "key19": "2RzhEXURPkkapBK2tKyn8Fa41KsSeZ6mDLya1umRC34RXkL6xT8SZ4uC3d4sJxsFNbHiPcQfykPBoFjJvuQAhDHP",
  "key20": "yrZ12WZ2V46MUtFPDJzFMp4o63Qwa5CCBr8z1MtPsWqbUBAkQNvacHSTYYJ6EM5y2yTX86c2Q2DCr6dSMF8CvMH",
  "key21": "4TBNAGtJ9UdyVNkztJGtGCQCmFn1NPvXkNdfPx6Cm6mgsLrx8hXjAErNz2baaVf6WB64e4DxavSN9vP4WWRk6As4",
  "key22": "4b5GgCbaF3ptj6E7J8Eo97aqZWtuDBPGwGVtsu7xKrvxBQnhJa6iXUxZFwvaKDFUtkjCHpwWSnfm9k1pdP4YFV9K",
  "key23": "sBFdTe96gm3gGfXw9eZ4K71EoQBqcktgmErhyVcfbPzaD5vF3qGTbyR7uE2cTa4mkm1QHryznFKyxDR3upDEVNy",
  "key24": "5JBHDkVf2FtR1fCkibri9XgigDe7stf5StX3Yv6nZPEwAMMzkzjBjnn2Amp8AfuxMH1UB7AYHRgLVKkKHqk9n1fX",
  "key25": "3ssnpJvKyGjiX56HPfgJ4CRvBrXFs6GEhAmssuRAtmRjsim4cEKGfSaTypTPrrVjEPcu8ZYdPLQPDCEKwFCcwLuh",
  "key26": "5Dxc1iSDh41WeXPSuckCPS6v8tBLFQ56NXzKotXjqPjfCRUxThSSivfd35gZzjis2aQzTm1Dp2oZLpgoFrm3pFaY",
  "key27": "53QvHm2XnZzZHXYbnckWw5493etXkDJaEbUxossKHZCnELMrT6zHPLEyjSKjTfQNpxyoSpc641AMY9ZghUFV7idK",
  "key28": "2ShrttS3ZCeJxU7XfrTE4VQJoUJTNt4ffvxSvb8fnFgNGAaLpd99SNk3G2C2DdeY2Zp5TQebyugzNwomsdEaBLNb",
  "key29": "5cw4xmL2jUmtz21WoTknjz73xFwPu3SQvYfDaFzArtrNpi4k2D6hwv29Zd7qaE1kGSJdmQZBEdvVqbvRkCJqb3ot",
  "key30": "64MiGjvJZHMrTijRXQaWWaw2cqXrMYVF8Gopn2m3PMoqh8MjoMNmThkFTZdD3z7UGTPanRrVkJm7Ay4F92mD9WSe",
  "key31": "3RQc6StgPp1B5he6uh9acgSYU56sJxhc4HybwUaDGvvGZadirF6x5wkaUuNAyMrQUGdtatN2SRTFUxGSKEvpeiWQ",
  "key32": "3qivudKTBk5jrQznVxuPojeq5pYQ8yedxh52dJJmjgqEBo2Y8sUCyUXepNTiJnPocHAJHUTHePb9rGdf75QFAabh",
  "key33": "4qddWMcmzKfAKfpUu4mckTLxMeXLpdNtZYiP9end5XZ1tLNQ6dmUVbweht79eVp5J7kG9tNEkaofFbggcxFKpGP7",
  "key34": "2ViiTNuNeHnsy7GxF7jB7FtEjDzeX2mjP7Jqg4kQXz1bDtHEW4YFhX2z7EpqnFg5FV1oetTm4XKD3gJ5MdFbaQv3",
  "key35": "2VZ4B4hVz7Z1Q9UA3Ro6YvHTpcpbjsfFRYvF1yucroXASvq9qmcaiWh3wYkrnX1gQrJVDgym3XFPUrnyshKjNbrA",
  "key36": "3kKVEpXp8aBJCKLbfXyEDrsrwtoBBR3JwVx7hpMemcf314mDKpy9Lo9w9NEAgkQKRZbyjhYa73kai5cf1Xua6F2n",
  "key37": "4cxc7c8f2f3cwG6RnhcdNwWFpeMEZz9Ny6XNQay6aKrUfaKqta49NS4psqN32xdevXVBeDfp83k3es8WT298SV7T"
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
