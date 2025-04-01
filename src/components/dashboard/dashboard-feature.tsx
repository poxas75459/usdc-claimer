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
    "3u2CmEnCbU1BYpce1gKciMvhhRQSSL7gxmDQPwixMU7ASrKC7QmBrGZLAZp7NYtk4FRUCDqfkTXMXFbUgAQAvuVG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23f1LoTdkpWZd6SpdjgC4DugujHS5gMxiGtSdTtza4JZPNB6bsxVnFwkq4HzNc9gJLvPwr69ENWzXf7xB8kmteLJ",
  "key1": "4HgcwYb58E5FbwQTXBCpsQrj4xMczNasygwBhZr4LGC2qc62WdBrYGe6KL6xU6XBnB3bJKnQ1PbdugmzLVmzkJck",
  "key2": "4FndB47fK69nA5FbgcjG5CR11eCpwrLKwHmEL5TKsJvDZNGyhPuMCQhoX9HCxUSnHh2UTVrGt9iy1XFLwxo4ynTY",
  "key3": "5AHWoEcBxQiEUHSaDK7RpV1vSbq9UdbpwSQDfDhwXeshj53qFKVz2GRmkFYcxKohjrDBvtVNUy86UZTSFfZtPVCh",
  "key4": "2FLxsLCS91bsNAQPCdqWdZ4E2vkKFuwZaK5mFgsEbNzX6xugexgqaFtEwbSU87ua3ZDc9a9Ac4nxeDoSejUTvx7y",
  "key5": "5uwzx3vvAg343gFyNEyKJVNQZ4w37C5RuPfSDBbCcKVL9S5Y5tLJMo3ncA6MSFTZrFakDnwHZp6sVUzDPN5joabW",
  "key6": "2F84wuWxESNcoFpWjTHRu3mAayyceANxozsRoPvqLabHS2iuY7zvSYnkbG2BVFsbJy2wLRM3j1d7QGaMStj1UKyN",
  "key7": "64YTEeHwQycgZz9NzBTjLGLpuh5wTeXjfBCTpUpsfMfHRsrxro8hCkdqU1YqDtR44KDbxhbjxoAwD54z9UzJNHSp",
  "key8": "2khpbrpfgvNv9UduYDhPpxDkyp1hmLLJZoNMWMNQCY6dvANgMTn4GSt9QuAnLhdaRZ4wXePPpUxj1BPM5VLHaDnH",
  "key9": "5jTCNwbX15Gu7nZmaUjAWWmjBpMkUbpZkBAMcC1EeXby87eZ4xCLCa4qQdKSRxrtVTf2JbS4sPbMBbcgkfVkPJ18",
  "key10": "3162AeKV8eqP39YxsdSShs7qhTaBh7EGQvF6CUmEjwCMgqhbbMjoRHSp2yrn9CPkZcYJa1uKFen456SdvzLrctDx",
  "key11": "4NVEFnTzmsx4YhkHFp5vd7fSioZtWyGLoAsFs2FEV83FMmH6bnJh7KDc5trxiKpVZv3t61br17gtQyaYxoaM6zGY",
  "key12": "4TACjwnXxirgi8WkHYusBQ64bAi4aYgoVwVd1RwosdwXdCKVGbnsXV8UztHy1hbTsb7vMac67WbFrwpsD7B29EGA",
  "key13": "5chhjsZMTgyTPgCJRJMizE5L9gMxabuRKexsYtb2d99tCZrHMNtXkNhCAB21iZZWmjiHjZKbQhHhiQuZDWuYKZa2",
  "key14": "3q14dxF6tTfst2KUjQcJaZ4BNzVxdWaJaSrkSHG5wAE3bp3DHX7VyjMSgNrCjd2nPeFCfibHwSou6QYpUbNNNfu1",
  "key15": "56GLq1t9Ww8nwT6ZmRM5ZMxJzFdSEsqADArWBh6tuWq4NLCbaFtsam7STeSM9azWBrbwqvn43VGp1j79GJX8iCMW",
  "key16": "23RYVXp4WSwpWCTSPKYPZUa5hRZvEP8hKWkZ9Bhkbmi8vpCEucPA9WewdjFci7MZ2dqFgp7PeWq9rJJzBjDPtbmz",
  "key17": "3QY1Y1MiNx5yYaLWiLAc9VWDTrxBGAsGKjbDRQPHzvWKE7VH86LBFYTjVyifXogMjBGS9hMnAL8TaMYfoywcwD9J",
  "key18": "2Bi4hxVe13DPd2rNXc7QCc28RzrL3cZV3YTKjCYNXCv2waq2YMEBbSaDHjGiu6L3ydhZi6AZsxN1rqvJNa2pisL2",
  "key19": "3WZ9XoLVjWtGp6tUxFB7ZYGcjiaUTZWPmk3wcNvzbEgTh35SGqf1DCdv1f8v7rSXhQDVUzMheLmfzyp7L2BV8amf",
  "key20": "yBmKWDv8CeGWAWCn8t2mHhpiBFfwxtfoUQ537m8T4xXicEZXrFSi5dY9YyfpFLrdBKTs5KBGs56SW48sx8bSaHQ",
  "key21": "2aZMGxxKCFQNcBoyzAaLHvTWDhHsnrbvBdAnxGXxYHhpEBDUzAft6sc37GWrzK5ygJ7CWN54SGVFv5zFAo6QRqND",
  "key22": "2oLwSkmuR5QKSdnnRoeaAPw9yDAYUeB2hvgEhBPffs68vuso8LMhrRUADX8wkiUDMqWMfVSwP5CtNkdKkBGyyVtu",
  "key23": "4M2HMZQRNdoSXrPHeoDkLvNtXm7Pm4TuHkerNwyvwhZFVQX2PEC6R7Xg24xTU2oRmgxig2jjFHKyFErBAn6W17bE",
  "key24": "3UwXs6zP5wYKZtTKYjSk1DPR8quc1L8RXRBwwCXCqt4WNSDDXE6D9DuivHKzFQQJNFRFY3nBut98aiP6n2oJMRCr",
  "key25": "2wvTHntBKC14qLoUneUDvX7QzVvU5gRNnLv13RWcdKi98VSYSD3KYypbSfaeWZhbdh79aNGxLo21Nr8SbnLwbqZe",
  "key26": "sAQ3gVZEvvYdWohtV4VXNqE3De3SGfyRd1pvLHgBe1jz1FMKvvNC2jfu4JcqdyLUoFeLLDTaErcXbemxbDfbXGe",
  "key27": "2SBgE8Ku7iA8phidTb7preHJLP6gx2q8uym66GGrHjzQw5eETekaAQ5Lg2z7uPc5286Tumwysqoxc4VVvHLjvkpc",
  "key28": "37fHzgj47fQ4Nba9rwRLvr4cCu8Et4fkVRiLodcA3FpnPgHDRVLk588fAX4VLyc1AtFKXdta2a1hzaBtHAfDxcyj",
  "key29": "3cQo95bGdBGKg6LvAFYCZ9h4dZJMgud3hHWHw1UZwjcMo8hkrqBUryPZYwLv4Ea9hRq9FxVDGoqNBpsXRGZikemf",
  "key30": "2tuZi9jh3zHb1yjQy5fAGY9zCNmL8w8wBqbHxh3QxrUsQ4VXQT5bpK9EXhQBZoQVtqayt98JFN1PBAnzbsaBbbAr",
  "key31": "4ixyX5Ls5zFhZ7TLC3Mb5eSFXhF2VMwoi6NrcRuD65AB1qxvGbnVrNp5p6j6zeGxCZPsYPUYG1EWaRs94ESw6CAf",
  "key32": "qhSWBAfsomsdpzAP5Gk45U1VhqcjH4QpfFyCjzPURsryVP4ytJTkDtjQS6jHb8hBKZMqhd3VWwH9d8TWM3hBdpp",
  "key33": "5KBzGgSTwjSzW3yxMqUFwRgdRJ8WBB3zY7YsUfQRmNbhoB48LxpnYKWq9VxMKx2At8TYQcMZ8Ga7QT3ZcjNdGRWn",
  "key34": "g4gdtB7GQMiS5Y5obPgs11AokBDUTx4ZTchHaoF9AdHHMfqbD7nNE3uFkZc4WjSB8fA624kg541yAkFmf3bzRLG",
  "key35": "21tGwbXRSWrsgijSYyC29fHm4JSw6WUwbCDjXRgM8CDxHCSRn34JjxATEJLnv9grLyJRUj5nLsn38PNzzc9uExyB"
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
