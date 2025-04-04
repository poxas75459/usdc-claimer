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
    "2LjJZ26LMKR6bSoCjv3Esiisub3igcND1zQzCyTdXFueSVzEiL5BYNuao9cDPKqUhCHiPZ1HND1SVPiXLuUUH2Au"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fpiFHzLeZtXK3ApcUhAe6iYSxnfriB5sPV6s6Ltyp8zMQAE9kwUrgfvHf793EnLDH8VpstmH2n9QaYSH2oiCbyH",
  "key1": "2QE29ELqHengypdy9rfSGYQZ3WGfAmczpKBUMYTD7a6bvYQtPdQyJaACoav5c9JVPXxFAHt8ZrREWvHThX6QLUUQ",
  "key2": "3ANGQ2bX8m3hYfmtr4Sc5xu6WdjnYF1pz3PSBw6vTSwaAo5EfQLNED4rseDQL5ZTHuodF41xtWxNspuAo4rJpqL1",
  "key3": "CFWK2FpAygrNzajbUVBczwsck5Ww5d6ytLKyjavSf3bnDQyDhekJ6M7SMPZjogChGJunDfsbPJuAUCSto1vPqQz",
  "key4": "3twPNdfbqQFWxm7onnuw39Wimy4xNVSpwMxTJyhjvXw8ypAmokGr3hkiR5GMeYxHVz1FFVXs5cuYLKtHkGvukYQT",
  "key5": "5HqKEDWmiECDxByzLmfffpiBw5gpTcSNqE84kxD4VzdngvQhxp1WhWkL2qSJgc3EkyrMZmbjiGC6tSYoLBmtWAB8",
  "key6": "1m4DWt5oLhAYpWxCjSgmmJdMfoqpoSJaJHibWoJoanbqPMh612nSizU6B1jcEZMBaeBqRsAHGPQygTimncVfpLe",
  "key7": "5Uj4yePJZiLwcdegtfxGxR9PhHGwodYyGSMuN2d2Jm9sDkqiYExUAtWAaEfDVCbxmzWkEvWuTGrvqAsLEVDaaskv",
  "key8": "3gJ9UwyWKubYyHS3ciUFpVsjsB5HoVekW7ezm6SsDuyfhuhy1vQpiyub5rWm5AUAriQynkpqNP9ChZjZsDnLy6Kt",
  "key9": "g8WseKaKn11Fsco4M4f4qa8C61XLD6wMdMYqsR1BjWEeEsj7C3c97aVF4r3QfqEKJ4nNd4hmeGGRKxY1QHMP1K5",
  "key10": "3Zwbc43BaY66yevonZd4skTRRbi4fuWggMKVVrGuNDFUmpE2iRdFRZQnCpHvQnd9sBNBJZAenE3tiQGRh1AsoMqm",
  "key11": "4GtNAx7xaH2QMvFqMomo1taM9o8KcA3dYmrgQjW1mGXtXVBLFxWaA4ptczA5AG11b1iz3MEX6A9E94jKQMuPtiPo",
  "key12": "56QJUxVaqpEzVpHkchTSRCqNe6h8Q2yojcbrASHd1iCUT8Y5UEc7GqgcQheqZNDAP5ei2LzKzWXxYRhrohMgNeLg",
  "key13": "5ATfQRK6oHkRpaercs7nLgsXb6TapPgNdJ8PDFThFPszBkgLbJ2fC2rd3wU7A4syQ3TsYzoxG9gQFoXQvCXjgKUR",
  "key14": "3tcttT3H32hMB74duAb8KCGXZ6AGLQQh6xzYq9tQ1RC44xfUKNiB8rdWjGqeU3qxp7cXBp7XScr93CrJLNxcY1Uj",
  "key15": "nK8EUDK9e7kfVnTFgCiRZjM2ZxaVJb8G8FFUodS7mRACryi718AmNAR49YxbAgbJ3fzHMeUmTWh96XajDkJuqNF",
  "key16": "38SRnTS7zke1TgeC7RRDVh5NbWTZqxAir1XeaiFR6p6ftSe1NXkAsxgYC3SAYgpvYBTSkDitW9QMY8m77YbV2VAY",
  "key17": "2zeahgt7R6kJGVQAGayUD6C3sUYtyLDYveC4dj6rRTVTfGnWAgbV5G9UWVnDo6H9NDSRqMs8Y6BdJ1DMZeU65KtW",
  "key18": "3sizduvkLUdUFo3SeEzP3xiubzfqKyC1jZgvmM9nFMCa1uC3qQFvEV6oFLW4nFpPYXSEMRqEAM5ypwKss3RmSwNx",
  "key19": "4uoax58sxDC4tz2z4zCKi8UMNSKPToaJ3qieJeBHXFCXmbCESkqaadG9ozaHtvej5QeYHMgx2c8jQMyztGY2uqJR",
  "key20": "5oqBjvQSiWYjdJYtBCzcjm5emqXBwj1NupXLpe9zzxeXH3uaUAiC8Dvn3by7JnSg84otG8frMCG4uQo1kPV783Cr",
  "key21": "42QsKYHNtfmTUu8CCk8SMuK5YjvQSuHAgvQ3ZTUyhw9gHUT4hwbDAJGUPDkg4Nct9ZtRupvNCunbTQj1GRJrjbXN",
  "key22": "49Yx7bYZqWeYq8gcNRTyeQrA8nRcGRgi77R7r9EidfDD53XFTzyvPohpvrkcnaV9cfVQmpXMqTT62ddAgWsygbxs",
  "key23": "2s4f3XjQqsav4rkGJZnawWmYciGy9oNhAxTkNVMBNuvdrCMdu3mfZpK67f7rKd3gkCgSFBPjBGvesDL4xBVdr3JX",
  "key24": "3tdTZ8LyDWCSNGUsEbdKzxLM7x6Uu4HRiYXDb4iMrG3JrHYA5dwL79mPyGYgtfdbU2tebTv1Phqv2kGNUSGmK7FZ",
  "key25": "5L5SkhFZj5CeMF21ajnY2bxU93JQnGb6x3zLFZQgbr1LDW5maZjRkJTzj4h4YTjWCJXhy8xwVU8d21TjtqK7pCVu",
  "key26": "4yARsAqTqY7yqtWduXMJKwZfEzZ1Qo1vqjaAJPJ1Zq2HfBoXEx9Jd2Kgedqm5j4EVtyS53PvLXvcTwREU271mMAp",
  "key27": "4Uz3sSRNuNB9hGgTNFM4vhqMHqn5ZvTrkn8S8r1bFZJSWpamajMg1cBhpRdi7uAtsdBm8oqjuRFZdub85HztcTA5",
  "key28": "5WpkYGgMZe3ijtMhdD32BsCkuZbeG5M1H1oE3JLF6yJvwURB6fYxY4Fj9MkDKZ7HsnYjnXE5NLzokma7ZR9BcZmN",
  "key29": "4yzqVeWMCw41bnnkKLiYLoKPp9KL9uzwZJdyubJhEbh8E2qycs5u9KzcU5zmQMp8mt8qayFgdvEZn945jjBUHbeL",
  "key30": "2pCGYRud6JUJwbJhBhxaVdvVR5YaaWx2TmU5TND6Gmcm6ybFmTAMdkeCzMUSAkrWDxSo72muGPoToVZnhj25vALT",
  "key31": "4kaczZKv5F9dUvRULLvAxeR5zP2qrS6JPxNjKgcB5kiExF4EWiMC4iZ6CgXFymNztrVBs5mUbAGjqHqqMKcycxqn",
  "key32": "3NQCgkkNMYDU7796WwKHFfGG69DjRGgQvtYtqMqKbdmY2oFJmBZsEhQuYcqMri4euiFqd5sSryNM3BtxPVeeiqTs"
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
