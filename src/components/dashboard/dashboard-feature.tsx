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
    "3VJbDF7zFmZejgZGTqbMcNq1G3V7sqEuu5q3KPfK1TTFd962pbdWn8jnurrh8XzqBbbMK3ejTjJ3pdYUtf8sGMKJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Yj9nGKhYCaFsLEhNFAYAX4uVkcJMAjFBSmTSPh4zqXHRsoA9BsVwhdp7cAjt7DMHs8wacUyMWjdfrAjQDwoVKAd",
  "key1": "5C7wcAzs5QmAZfcnxhjDmCdm1uvDhifkwL3Di8HqYid4z1AMHFQCw7mrdFiWG7cXYFW64Q6FZFE3cHJjRDVacZNR",
  "key2": "3BXQ5wdCtbRy2Hjv5HJmZW8UVvh1VCUcXowY85BuqkxXxbCfKx6oydT5LcUFM3MsypUU6LMhyC1nPmoarmRVx5Sd",
  "key3": "4ctZjHkj9wCooA1xNBRsCUaoBnwezsdbV2vvhniP4f5jDvg9F92QtCfssp1J7buWFky8hLap7YtrEeFy7zqNQj4A",
  "key4": "2VeBpD7NbjfPpP5ss1HRdQ9Nu7hjZp2kqaJPEW6a9x2rijuWiaTynU5deVkE3s6dkZzLWiq5UKFrjb7FmYzBStzM",
  "key5": "2YCHKcWsWfctLpELr3gnf1ypHveVQubb5WL5ifkWgst9xc74sE5reNKmF6HsxEjnkdHfBhPsDGPMrn9E3kNesVa4",
  "key6": "2VqiXBZaqSn6uZbZQofRNTk5cbF1NgVkHJf71fKJW76QmaYStbfuFLZNHrGDVizs8hkYHRZUS1RN24Cfkbey9F7q",
  "key7": "4fw6sSwhWQ4BH7SfkPuAHVzH7H9ChX95Kdz8Z3umNfeHZnSvHZutG5V2zSwirsWnAD5dqXUGX1gYPbohs8ubnEHT",
  "key8": "2kyyCpNQYyJ9UphFJULAApL7fqi8pA3GfPGVMiGsGHDUScCSdSorPWX2YavXC5soKWk5dNX1eJf5kQf1PweVdWnr",
  "key9": "3qqpUhGZWPvcav8oRE1mio9nq6LE3J67U3uLKQzqk6nvJeHtj1PdHbLHdzCFPU3HgGbvKEMbcnnD7ymDsw7JE1To",
  "key10": "Wv7aiQTc2YJavjxBvav9KA3pLGLD2PYXCfeoEoCJs2BPiHAVjecBkNkxnR9yU9EB8qsAtyNdXkM55axKyQTK1aE",
  "key11": "4hQxoar9Lg5siPHNUP74rBq94AMarzfMJLoJhvpKuDQ4FK6x8esEwcBF7ipvBrnSjGxxhzAkkzzbAxHrTwVpg4Em",
  "key12": "3TLKacV8BakpJ5Yt4U8aXThkBpaeoYPSH81jUs1AXjKKY3be4zCSBs9GKyDgxGCiZ5XN81SVa15RbapMrZ4S9Fxh",
  "key13": "2JHqP69K7hmiyh9wnKr1Sxfnbndi323nb4vndvQCq8U9Cb2q9LKMVjCh54UDTtsNsEBQAFrmBwTciFmz2B8pCnRU",
  "key14": "35RCgyD7KoBp9dFG1WBSsX3q5UbSidRpjrwgTxgSo7NsQqU5qhMhDRwkWaPpH8XqmBey51qAmDWBbqw4yGG6dVpS",
  "key15": "3VcQBZfAyt67z7yhf8xaGQCgAk6PBBnBZugVJVUHTFqPQXD4DPyhofjd1qw4QMmQaYbBqmjUbeRBTdYM8emmaBER",
  "key16": "4hh9oGenXNkm8KC2QRg4xDb1vRB2PQweKZ7NpAUXupwsxGWK2NHRsaTxhyCmUR9vbBskAceycEQfjRJeYoKYHjZ5",
  "key17": "5MK2psGdZrUFgX6q9117cs69Mf3zAEt8KVah36hiRWfLjxkcyeRvVyW8hr3nh2wPk3yYKKQDBKqY8MbPW2dpeBtG",
  "key18": "vpL3eGbmQ77Ff7eRVwbDtL59RykmS2XQe2qm7ejdn3YeenkdESbNZqs2ucpzKd3BCdNaMFuELQuhxQAM2FdUX1J",
  "key19": "4jiZYZWptXqp6AkYAZ1f2Ee5LtDJZFbuJawbphq7e74awwfXRfPhmzQEEFwv1mJD1K3mT5VBqBgycrpBG5sr4j91",
  "key20": "65pGitidiB6GwXPzbTwp7acFG9BzJHaLphZim4L3Qf9QkqEMHFHKfCgEPEy11uLHg6FC1LB569GGjF9HVyxcqBHK",
  "key21": "weqZ8MTdJ5t9FWaXs36BkoYXcP4PiJgcNFJqvUjiH3QgnFdF9nbs1UT42kiHEiwXx1vwMhnou5SUiV1HVEjDj4A",
  "key22": "4nVmQYu9hc8TH3rX8ynhDBEaWMBF93Vn2TzZcuSwR7m9DRWERQCKQcEecTmQVwX2ZAeJ5maZodx7p86v2Uc8x7R9",
  "key23": "3e4jzqVhg8SSBTtsHQ4YU5aVHoCLPsKzrDdnSTU2JqHhJwNqaVZZDEwsBNmNcSGmA7NCNVxz4ABkbTx6o6z7qeSa",
  "key24": "3cNERioh78rioKCHaqSFW933QMC5EXUtSPt3xrH3JgP9WmqhCuej57F11b5S4kjk71M8yvmtkRhQaXD5Gai8pcrK",
  "key25": "5r3v2GdpfpDTraU7de3Xtro36ND9d5jtLGzhWc7caZ5WQfuPwHBYG4kmGnAur58Y3qHHA7pB5toSgGhenpLQUFTM",
  "key26": "4hg1AbwCb5CAcC2eFfJBQQwbVRUnFM9MWAzwCXycbmWdTN3jNE5yXQnvsPj1Ltjm85zUN764Vx8SKDh9PdLHEL1k",
  "key27": "3LUPnE7HiMumeRYz3L7mRD2tc3inhXcXghyuQk9oo9nTmB4naXWuXWieuZmqiuF7uipBuSbWWrDS3XS79phCaPpi",
  "key28": "67Rw7jhnM6VJPRGcvJ5qGbjXpCXTEzpt6uGzrWY4C12MS84M7XvQ8FvzDPNqHVMnZJ61ugS3s7BUj4miyJZiMQ7w",
  "key29": "3ZCvyX7ZPKXb1NXte2wUvyqNJJKd6ZyJtFH2EMYyt6Xni9TP5hcBYMZs7mnmN27Z7qEYNESneRsDd5555XggHuME",
  "key30": "W3rRCrhxt5Q1qkZpNxpCJPDJK75pX1LgzQLtys1P5Cci17knUK15PrUTHZ234FPfM3r6uEvxcHCMpoB3qNM1EGE",
  "key31": "59Nrw6YkbSbc7GKUs9zmKc8BpHp5XRBxzd6upZuiSsZsMiBCNAZGghGiHk5kg9W9RKGVx5ddMbdCtKC7DSWrkyCj",
  "key32": "4SbdnVyfBNDKMPJWAdcGF4FnamXw5eZFNGoytk32zKQAPnsA9eDafojRoWDSoCMp5mWcJVNdDD7trP9gK79VBcWc",
  "key33": "dekECLDkAaxGKJhc86rwLWPJYErqJY2GQwTaZUPSRQRwfdSazUEYSA882k6ByPTb7RWt37fBjPRa8vLRhaHVGNQ",
  "key34": "4XDy7VxJ1ZhNr4KVtb1Vff1A7FFxJvae64WbLXmHzE8Mx6taRNFrqkn5zLJTU2bb2tvnWk12iFR9Daz3RACgKKfb",
  "key35": "u5ZxAtm6hhogAxiNM3DYjqKaopkcf9k5ymw3cQxfTWHuRopgYofXQbjPscJ7gLX7e8uuKDThixpD4k2f1EtU7zu",
  "key36": "3Bwodsc2ifKQEbJt6GFXmt1x8ZFLme5j1BFY4En21s1nC7p8wDUr3U7dpXkJiiKU42xLq25ZDVrZGhB4PaCVYCgz"
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
