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
    "3fvyGGdGSRis5htZBRQ7gdL7KibqoheGzYeFfCPHhZAsexBhUjs5VcCBu992D5uJWFRKU1tQoQhvHMk8m1B4a3A4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53JzSDHkFgfyKCRRfyHfjAwHDGgeUsXWyqrA6VcgcmLL6DTNFTwoSZvGqtGFsSUqGcNQBFeBMuFHtZFY1fJveEzK",
  "key1": "2bSSwFSowvhmd1NYZs5DYuEmKhLrbyiDradNSGUm3mmcv42CSCoJukP9vkUyecXZZF9Q5F5NYFR5P3hyQGugm9qy",
  "key2": "4kwZF6zcgoXAm57cunY5dU7Kct9qkEMPsW5K4WExK3QQvhafcmjKKKqpRrYq4kfW4fiFFYxGUoWavv7GaEDT5cQX",
  "key3": "uL523nHYM1jh6WHRteQJX6LHtYVvpozPfsTGpXWDJqFpTnDih9vcjUQw9Jm7XGr8QqFFWVGpAJ3dgrSUcyVGB5z",
  "key4": "5K2D9JBsCePvtiPBXaAokExh4aAHDLoK42du4qpiKvf6iPTCB5WzpMkbzEqNvvTBJ7QUqNagJL6avuHmkGiJLiWt",
  "key5": "4mzv5cGoUr3wf6xY6Ssa8MoiGwveFcypuKeuVm8kb1GQ38nJi7PT83iRgseHQDKy7KkURyrLZX11XDHMGQbSt2L1",
  "key6": "67ZVUceQSuWv9BjFWFt938LJ36XkZk6jP1LhqrfFZvAKHExPtUWqkpVv1XqrEC1uuvMTcAoQUCvteFcdk6Uvxpwo",
  "key7": "V3iy2uGtGc6KEWiczf7vS8hGU4Ej4NVf4aRPxT1bYDJrR1Rf5ito8f23RCPDdByRA9v2huF3PGEyN64RsEVYDqb",
  "key8": "5HYx38TgUoi7rCuZKHBKYHPJ9RPxES5pXWaYMKJL96XrSx7LtYSe7j9XA6JNgGafWbWS7YC7AnEoQwvk9D8gLvKP",
  "key9": "Y8ARGJhqimhJRGDoTXhSEozkgTQVqteUpsuD42Hf7ZgbzeTnxc9PPepxsUz3bzPacWePXu9XoZQPoCfLWfHcpy4",
  "key10": "4w4dpnmMWvXogkwP7JQnrfLxgfcTTUX3Fwhh2AM8hFN65Pj9HREqNnGfC2rd726dw3ntGw8CuAEqTYznJwhdF5F4",
  "key11": "3tq5C2nUSxZARwdv2ZvzofnB6QWm82eVwiM2vSo3Kn24oY7Rz5b823CYp1f9zAP8Yc13R25htUAdXJFY1dsCnLPA",
  "key12": "3HfeVLBwTRjtDEtyqMWDm4ATrQwHgVYuoU6ey4CHe6uMb8PZpBNFRcXTgfXtgZiiaztRLVzMpyCMSCJmy7V6K8R3",
  "key13": "5R75vAUiAWu4y8L8a7LYbZsmfU96VNSF9iwZXiXUHrHCSMQUoPXcCUMLcT88cy7h4dgU2oLGru16t6Km4iHnP6qk",
  "key14": "JJn39s2aoCtRca7ubdYqCM9NqLZrgic5hEJefxyitsLyM9dzXYGXo9kpU4Ao4P8C2uk1WtAvQMHSBBNo5FKcWKH",
  "key15": "5NxHqMWnYdvcnQ2QP2urpTYT4q6Z2Yzgw642BetAVMNSSxZquAVURWKEe2qet6p7o2mRfxG4Lw37SLapm7j5sdFG",
  "key16": "5CDS6emHNeUrVDXkkkQuPMYoqpguyfBVZDjZYot9RW2yArGsX1RoAEyzT5jqrBnwtePjt4fXXk6tChyeBhQdKKyx",
  "key17": "2sZgAkhHA2kyRMTuu7SJiJ4PzRFzbTtu2deDkvQ4WPX21pKEvvbzf2eJUPhLn7ATnMMEgqnJzGCZPonBFaL3YBXB",
  "key18": "5TfjtaXhP9QCfdbd1Gmi7UAUusCeLJBvZCuFLPusorKKU7cmcBgUoNS7ivrybJXFJNQK6Hi987Bu6T6aWg9zeoAd",
  "key19": "52TZDvmrponD8uHjfbdURvzT8WDR4n1UBQaNakQZmS4HwdCrQwLsEyyurZnjo1TfyEknn9nT99YCWK8Wyi1Vc1mH",
  "key20": "5W3ihcwgMY35wzxBuXxx3iU6RyTMkUQNckrML1mh5AuHXzZ7ie5epBYJjyneKEQnKf9CAqhMmPAHUFDbzFitFDhi",
  "key21": "2kT4gkuVEW3KEXogDZMeVKNSQ85maCwyae7i2wAoNGmSVSoPacpCUMaq2kbb2riY1V8rgLbNjB5qddMg6MVS65UG",
  "key22": "45vXFi15sJpK86DSKM8S5pFWM8QA6bQPeHrRZrUpUUZL1uFTY6bZEGHBdBKX1AQvDbhxQ6xhKxpgdGokiVwUeKJv",
  "key23": "3kxNi4SzzwJSJhKhY1jggtanPbtLzmMTDFypsEaGjzDCcw3kCd2xCpHcA1p46p2xJ9ab5j3qFvMa5K5hjjf6DEYy",
  "key24": "2Exyj94PAoaM62U4fHCDxEptFDpQF5CUESahP4mBMBxH24z2iQ5sHpxrgbuNfNusFxo3vLdk2B99ZuibRhN9SpAS",
  "key25": "5jGJa7Riv5E6jVKC6wkpp6e1k81GUcstQjhgTHtSSJFJYTPiXrgP3ut1jz7tDE9NpboBy892nJoz922btYB74ov7",
  "key26": "R8HKyGSWDfPKoAqueFTkSHPEcrd6JpKqHEtRrqQdM3rjFA8ACoRXr3ndno6grP6WuV23P5aqdBhsmH5Mjo2qMZa",
  "key27": "2prKY3kETE5qHFjZgDVaZud3SiMbVmbwa7t8W8JTRBuqLgWFhj5th5dcFMJ86JmfA82VVhZQGyhT2hhH4gyrk15n",
  "key28": "Xqbsa2PsDgy9n9mE7uo6yPrgv83aYcK8EpzxL6y8juFZosh6ddoocs5W6mFZiny8wLGa8kwG21MdcS6JsvCzhrr",
  "key29": "2ncnSrcDD5oosmVn1K979MxQALLHF6gjBuRtD8Sw5fDZpqjQhVjobUAvrcPUqzpkcuV3zCyShrLRckKaRFtGZYgE",
  "key30": "3uG7ugppCb3qwJ28bT9AmNshwnCayfQJknkBgBgHdyA27BhJaRFk54pnYyHrXbjb2rDfd5UKgja9HbZQe2JUFyrn",
  "key31": "2iwDB4BB8dCCQ1ScnmtAo7MH21m4QZT9onHep8vQPZRu4DLzrt6vhQUiRUs94NUkyiFeo1MaugvCAvtmuE4fuJqR",
  "key32": "27iYJs83ZzrEeV9e6MJApEnY4LSuV6HALSFt6pSRycdkcdwzzk1Ug1TYF4BKT6cAYhU8ySrZQ9QUT81uRgDU7VNe",
  "key33": "5k6zBaGkW4crBpcPKJjTVahTw1jY6ThSytf8HsSDStM9nFZn3wPgAzq8hjPNwExoSxYesBnTPXWpcWRHrVN9FVb6",
  "key34": "GdgxtCJJFm3Yr4fBekVdRDuGRHFiBYKqqN4BJCx1qyM1dGF3YxiLQfQYwCnB2RN2JQpKeWVKSRaGfZ8T1C3qtFz",
  "key35": "KdXx2yW323MGhDaBiPH2iibZJCVfZAA6RzjcoXKCfK9RtGgjSdbbagrip7yqpdY7TJuCZ4tjZWavvxsQYEsxbPp",
  "key36": "37dqM87fC3zkH1R5hJLw7Wj5XtPfmh16nk1PY8L6de2NWQrTnJUBf94Pp3bPQGff7Bos55oUittxqsuzmG91aYaG",
  "key37": "XhEoiKwzY4DxD9QXvxTF9c4Y4Rtj7edY1HEzdJWVneRBMzzgY331eLo1Ye3kAsC8XRmhn9MefdTL5FqJGfrMJza",
  "key38": "4Hk5TmU22q287e7ZGTbsqXopKZpoPrZeXwazHTheZ2dKHBa7sExDgaPaUDT7Dvj1RoDVAYwAHKJdzpR8tyeURFzy",
  "key39": "2yC9Hc5UPdhJxcs5nSpW7qCw284V4ZwBtEiNuXw9nGUmdNR1Ts8PzjpXg9R7guVcWXJbNVuAVLmjD3wc2XqwoDH2"
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
