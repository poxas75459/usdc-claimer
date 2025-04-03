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
    "2k3gjuJpyqLiFAeiU8roVLQXhtsYJEqG2Gd6Z1oE2uojBEmctkVa2pZTuj5AyRXSHp4LFRKbwpaU1KFVT5YiKuMo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "79D2qJq9KwT9BmwniF76nreyBMCaMgri7CbKSCi1qwV4AUN6MXGbT5si5R4gXbhiSg9hGjP3WhTkqjLDzWAAkgf",
  "key1": "4XRgNvtBzGi1mfc9v8Trjt9iTE77XesiUfXEECNUDNJ5yxAeS2hYm1nDXCK9gDo1XVPnTNhjQTGY1iAmvpyHZFsn",
  "key2": "4pRxyBmu9EnESwhdHvrTCrdXBYF6aU6zYwV7CsVwkTtHC5Es5yGFhf15oMYQHiXRzy41Jh2hYfhMva3i1CcEziGq",
  "key3": "3xsDPc82DyKbnWEXSXNye9DDKUuYDz2hgiPnMQ3DV4BAET4k56njWxNb8d6PHyDW8TWmWX3df3xC8wDmhyT2UeGX",
  "key4": "4a4VkhGErxA18Lxh6gmeMzJFQqNhUAgBbd3dp7ugCp1egS792aZTnY5zCb2kVrXpsbvSKrvrExhhoVEEyxRZtYbD",
  "key5": "4tQUiEArprys8GA2yAfb8SMMGAUc527rXEAGahWvvHBLJMzasndTcBR2zCJ89saKLBx9RSa1djELKNXvAWd79F8S",
  "key6": "4f7N8C9B9U4Cx5yqauXxLtmDdDhHwty2ETTa4spvdLAGLUkHRFm6AC7iSh8sy1swdbApt9ZbcCvsWDXWGPbCLMEz",
  "key7": "52K5dDGbDFF6G19PTJqP5tyaiExheWfHyT6Vgp33DwxZ1zgXGE3smWvdg5xBVjkUhPEivcd3DFs7KsGHaaUgKqiX",
  "key8": "2Ja1Darcy5HCqZHdW91Hh9ZM65hdmbmvozct2xgMemB2k46j2gcSgibs1xj8PdvqW4NweA17vWCwBZ3r5QtXvnEM",
  "key9": "5SJqmwRk7RioHzL7R9W3DdjshvSfNFhKDkHMDua1QdJ17FgPiC3x3k5VMNyHHeVxFtcaiZFeKL6YxPXKhyvRNgyv",
  "key10": "5fBvY5DtWNBjtLHD53x9QR332aiGaifHmnGGRGqoFdxqZkb3NcszGi9Gyv2gqw7FdRhQq6xtXTEEZuw7cvizz4qU",
  "key11": "572WxeqLNCB2pd3seh9gpFtT4aekqDcoqSs4SjtLqAxsWhAJ2jVqXZzsaz5TNxYUWBqYcwpgMTBonVR2PHHpxYuo",
  "key12": "4aVxJnGnnQkDt4yxd4Spu6iaXCPYoLRSAe65mefPKRiy1KhKUp2Bd4pkauvGQvK4wbTKWUzsiStXAMgPce9axuRY",
  "key13": "kWdDhG8cRFxuRHkV83yxPDo3CXd6viui1YfYA8XELp7sWpdejKtXyHkWr8ZB9sFBp6MfYmjqVwCWmCtULuXL9Nn",
  "key14": "2gF1V9FxVBu3od8FWWNh51P5MizaLr37jjWcDKS5b6q859sQwxENuxPiEJ5iEMFD1pjxhwhVvRsGMezDLYwQBTXa",
  "key15": "3mUzYbh66SGe6Sky28K4zE62WDZhjXv4hWkHa1ranXr8dWP3Es7Je9NFbgRwPHZVccLSay7pmatuKYxQJ6BDCb8i",
  "key16": "2KvLazTo21GefRbvQ1DiwgMju8PdQcsGK21S5Napnimm4cruQ5Fe2jxa8peU3waQ24ttVrC2oYZgmGiV5Dnj4yKn",
  "key17": "2umQYUcsjDphUuMMxvbDHj7ec6cx3gEcGBQqvLxaDbjTVZCDVFTqVvgcuHE8C1mm92nq82hJxdZYqN2yLjKQxH7r",
  "key18": "5HAdhNEnirNJX39wMpKonnTBFSprVWw2iztSpKGp3pixd7MR2RKg59LwKBuuk5A6nZJGz1PhV57RocWs8XJrtFjN",
  "key19": "65iJ5zqCG7KZaVrTRdahGjHKipGEViBRkAdTVgDQvWU816Gud94QYdu7BETkqEoioK9R8vsTF3Gc18FUb16yxfej",
  "key20": "3FkbfRYKBgFUN2meVx1cTwcHyPzqQgBfU3LArnC3tLgXQgFBc8NwZ9waDssv3xejYQKf6fEWRcyu7vYwea5vConK",
  "key21": "958EC33SQm2SNZ3jK6A7W9b8WBEAHpzBSEGmiSNa3yL6N8nXzBbbUCdwiFFwrPZ2EdHhzZHX3xdqbZoi8914r1Z",
  "key22": "4M3UV783vY2Z7XYpvSoVd3NGS47ZgaQgquSjBV2FreiF6WAXfeTk1BgGVSAvtNvJ3sM9G6hqNY444Anf3KKdXZYd",
  "key23": "4vqmsMaWaerm8DhRLwBQHtmifvZ4fb5cqbdcrDUJtYm599BnZ6kGwom6MZuoPLn9hjbiApWJr44nhDKRcivDoaxq",
  "key24": "5vdpP2Z7SDVXmkzsNDasHUztWo8rsVmsgsjaCUSq5ZjDhe1F6d7yLEzmCY9C4i2kKEEvXwhJUSfxrbmVP7gimYY6",
  "key25": "5dxWnr5Ku7AFiUKioLQkggjNfYDbny5RB814bDJYzXez4A6h7H5GSQ6cpCZ8pS2QGvWZn6qj8xTWB8Wa72vihoQg",
  "key26": "4PxqoYWQtjDeMXmeHsEipG1hvVvzYmCCPhee1cs8vw4VgiGpxMVkAdNEh425xeVvNKZBMRw9k2Zz7PGGsy17k3Yz",
  "key27": "3HEFFZfaN7yw7iPKLxyoJc3yQWGiVQSADayMPjWRN7FRFtX7SpuJ5zQzcLSLuq4GhaUGKg4NEZUyc6BLAj7GWBRx",
  "key28": "3EHbfWCkBAoDhPUZ74wJfYkMoVj1KWiPGP5vU8NMUHFvQCXDV99gCCoHjFaTwZGzLNeJussDx4ZfHygR855dSAP3",
  "key29": "wUv4viBy9KUb4ZuPRGifsrpV3DvxbocwQrpS5ppgYUkGuzfFa7DyDxm67fr33qLa7muChUrHyQh5vdEjBCm5RCV",
  "key30": "22VbaydHaaZ9jLRs1ATSM4fP1LaSt8tW7ijkeqYzDyQamLdfrkGXEKbygv8zYUoJeEG3b1kci7mVrRn9qiHXUrVV",
  "key31": "3roBVS1tFmP2srHFvUFhhUTMyLcZzHXiCTMcPkiUq3tbJ3pgZjA9SSZ9gGg7G33jm2KMqoNagoHrxZF8z9UQiLPn",
  "key32": "4AozE7gK6yrcNqJVvQvkXxbAMehX9X4ccMyJ2PUiQSgWswL7tJSjsBVp6DmQgHkC8wUm7PEpEtp5SygzKs9m3osm",
  "key33": "4PW5CAjtSmrfPkk7gUqV5YMPAn8Zi714M6BnsHyPb1rdAyXVacWog8hNpN6ECoYNCUSfhWfvR5mTfDkXCzXmvsor",
  "key34": "3ywKsNRfr3n8j4SmZQDPR2Ahf1GYj8vbxn9dexcmJoZg7vUcUr1fLr8gqv4H51mj1dkXvqXseiXhz4hrFsw864SL",
  "key35": "5wW3Kt4YYUt8qsh9Po1WZj3kXVner9BgdxX6D8gEXi7q75Pu5UhX3f2iW8iBhx1XT6RGGFE91QC3jL8jkUbFk1nx",
  "key36": "5P5LYj4jy8BtgoNHyWSi56muE23QbitaVr3iMgvKGuw3Lb9Mbgkrm738nHTkPKYKwNpPLRQWhFCnbsUDwqQ8zw9F",
  "key37": "21iLozxs4vKYMomnXiZrUqSEJmTzgpoXLUiVZGoABh4Jiw4Vp2eaJzyKxsXxJzC2vEcQw7aKxBhPQZzuD2Gi3mZf",
  "key38": "39v1oyHKiryKuqnVG9BwGjwJYPEgcQkhgSobM4pZT3yP2jCk2qsuvgYP8LCxoFvASYQQpMvZheWjQsGdikmy6U3W",
  "key39": "5aJywdbHTw3PLKqasofN8m5vMydCS5AdJMubPeuZjpMNEhTp4vTsKeiyZDgGEmLVLGaBzt8o3vKdonQcSJj7Ppkg",
  "key40": "3Qx7HJAc9CosSZKZQeuKrW8utUnfQs7yjh489ZfmDcZ5qMAgrLG48R2VD1CGzh1kY6vKkbdUuLwdsmYV5CEVW1c3"
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
