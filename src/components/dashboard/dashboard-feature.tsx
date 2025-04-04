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
    "2enTFn4EKQ5473GXUZ8qx9YmL2rqiMUdaLvUugcavxwiADMTKKgvVU1Q6XD5nz7rkMaDfHLPnhhY9PDXNVWuJ17T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FrYYuQrB81rMY3DueEEMAJhKWKeCnBgrFgTPee8FKgB5zgktkS3ykpu7BYoMQvPhe9MVTzdvpMes1KonVJBD1wN",
  "key1": "2G2qv4KYVKxoaqB61G9vBKVoU7cHnRbXU2bKknCiDxLMjXjEFUS9QwtLGYjVWeeoY8dEehzUWz4z1pbs6XMVwSBG",
  "key2": "5kk3xAoQsGaXRyKZ4ZajAKjN2AwNJQ2paaHH4QxECYT6ouACEZWJS6D6vTwhYPXH4RUL3U2fEGEfc1X7EQD81hHv",
  "key3": "64WWmaabbkmYbrwRVZq7w4Ah6R1QmJU1y3UyQt3xF89wLjFHqT9A173QfpAC1Z6FmsW2DQAzWRkq726hPDtg7398",
  "key4": "4P8tGr1D8kJKgNKy62S3RiqdkA4goxq64FZcyvkjNHcHih1LkaGmzPgperKmyzHRm3us2z9eV4CqoG1mxJdmrL7o",
  "key5": "h6DRG1MhmJyrLM6gwZYnpMiD8PkiLsfC5Yhk7CXU3KEJTiM6JssuRnr2qyfJah5hV7fSfgMJBJMMjst5FFujKuu",
  "key6": "4ZRtZgmRiA3ZComrCAk8ztUR2Tw2LcjnyvwegY6ASYPTnwRKBpCQRa9R5N2hHcm45x4Y2hLPh5279XGMfYN3xEeS",
  "key7": "3wvZ9tA4x4AghTE2zvZb4e343Ks6LcZ8kgY6afhA9kDjnTQrQa4Bqz6ykp9whoQdjWovpjwpM7pzkZTBLUf3uC34",
  "key8": "g6qwYRvLkaiFhMpcvJpy3yBq4G8ZVNyYoC9PaosxRVr3ckmuHg2QimePNpn1exZdcCthDvzriP3Ehvg326xiZPz",
  "key9": "5ta91QkiYrZZEB84EF39GMTrqQudG57VdsRR2VZ1jWoKtasX8FbHnodWKVhE2mNKJ5xosjrB2RbVSrkGRUMF1p2e",
  "key10": "2PABFtTu2zL3mxvcSCR3SYpQxu3WjoGK1VH6DQXXZcST8uLS2h8XUfbJL8CdUFQQcQ8B4ZD5T6umqytxBr3E4keW",
  "key11": "8ir3u5j7FbDVZfrruDyDyUvj5LWH6q1euTKby2MzcoMVkC5QDRfCQHCNRbn8GPriiZBquViZZEDQ5uF8JJA7yTU",
  "key12": "52xDiFLQ5zz6bcFXz9CUW7f66BAFeW8XQD1Ab4E5rybb9rWzuBxKMqgxrJjHxkLsoNThHzikFRy5cKQ5tVmLqVwK",
  "key13": "5aDhHWswnzbbMYocaHCb6jSbJroJEcis9nEeZmYeJHq2Fv7CtrW8RxopF1DC4z4U5wXB9666xNj4nxRHui8rTNgi",
  "key14": "61xVP3uURLboL4WeHWMjjtoHxDeV9oUTaAFn3GwmeyV5Js9NSedtq8BPmjomw91qpkhBFFP98NyFtvDE6D4QE9Sp",
  "key15": "62gzmSGXWArumYksz8KveXGkwLLkhgQ3u9J2z5kUr1MhPKEb1qPFZwgnHqEGzrZeXqiWmtWHybbvkkRME5U82KFS",
  "key16": "24x28LXHc96jcCw4Qb4VVgtrou6pCv1BZMQLikPyTjWoJqnyTuFS3qa87qutqoKjakrJLXUmb1YrUs7PbEyxmBSs",
  "key17": "3VujMyABbusj5bP8DPY1SmVV1EmPGw1LCeNuVRcXJi1ugJeTBc2sxdPhhPydS5pvYLJPaAW17utv45c7WeazeGx9",
  "key18": "Svp5gz1p3gRyJtB4GkHTzMrvHNJRpYvCp8ULgWQSeAxvYkLAkMG7T551BwxRqRY2tyCg5dbRPYmfucjQiGcgYpY",
  "key19": "2WahwW5a2zbFqdYymQcJcbBxUzVhbEUXHNLY9cHiTCLkK36P7MYhqrvAyHHYBF4eKaMVNh4Kc4ZpiUgfs3obyCWR",
  "key20": "3XEKii6FyvkJmREgGrqBo2uguGeyELfG2pcNdRXZp4aqhBUUTmdWavtojFwWqXyU6pwrFY8KPFxLpuZ6UkWTGY76",
  "key21": "4RgMniK4wXhc6FC2J3pqcD9aJ1AGMrQs6294q4Xcti59Pfe5RRfeRijAGE7nsidoveYgncuFxD9um4ZYw2Pxu2gV",
  "key22": "LUoVb4UtRVuqXe3pTMNrStMGxXfCEeZXjV2c7Q8c3ZeqFXbfuQf5kKRgGh6fjzoJxDF2MuPVjDdG44cHYMBxuqG",
  "key23": "4NAEn6c1NG5tj2yvkE53KMQUbLuZUX2dygtU8MUsb8nidhNM9iYscdYmnLvsrqa14w97TtmJ1m8nRVhd9VGTPKjB",
  "key24": "3sSBVUuozYVUmmkGAMYw9DciCVDjPhHQkqUeuG6WogaHozVqmvn5rKgWMjspkgNABFbWmHFs5cG3GhM1DSwcdnSC",
  "key25": "5g9bV5VBAPFZnDFWH2zj2MNwq19pihdZhAmkP3VKcno7utzoyXY3s1RkRKZQQuD6mA3QuabBbe6RN4HNWn5NVraA",
  "key26": "2WVsMHp98egzJLVxKuVU2R3FZ3n4o9xNgFf6EC2VN9gnYRZHe5466TcXevBEUm85AgBR4AJqF2eoy9cFgaso1Jiv",
  "key27": "3wEF46zinVfsxLADM3w44NFL77TWszfihzCuy8QBZnYqeMsrBERLVrXKca7QgbLozrJqZ5GbvLSmbpDmKHAf9Ajf",
  "key28": "3muXDKpeBi5nCAwLJKf8GiCyAraVs3SBvxdPDGCStFsxrhHwgSi5qHArR97ELs85t3RbF9aTQE6QLbjpwEMGBfW2",
  "key29": "QFAGcNJ89DA4tGkr3ru8HZyaA8i5ZWvMb73L6gLh1ioA8wSVHYjgVYGqYocn39MJyVHJ4VVUdUVeGZS5gAz3ypy",
  "key30": "3WpvTGWhxKX3fwCeTXjANQ8LJoN8roiVzmgsV7L49EGGg1KFmiCKfdq6akjeE3mbM9KCHxZYLsnH7m8z4GBTTEsG",
  "key31": "2pCN66cn8Xn4KALJCKHZ2yHhcMUsXveAPDTHZRLbepDFUs2HqXkuvFmpuwVaRP2uxJ7CRpiFkAznhSVqq5ktWfCL",
  "key32": "3E7vPAU6iCaPSqTkQNuQ3jVxWYhf2mjXhky6jUYgvHpXL3y4hijHiHR7pvZgAbVvmox6Mj2M9Lj4gCARprgP61Mh",
  "key33": "63Y5xTubHJWf8mPBBGRAa5qBa6BuEc8rxjqreZcF3rVupcrRoRaNMLDbdtR6uRQ194yjMhUJh1cXD1aKDQtkiq27",
  "key34": "2Fck3coRYcNb8vBreuBWi5zyJpdnG9CMYdwmun8Xi5QQPb8UFvRUDUD7MLCpeD5nf4DFL5SmHei8zQS3umYwbEV4",
  "key35": "4LM7KttW6FHXLBCepPbTMdPw4uoGzNGuH5sr6WbkFHuvwqLwsM5SaFgpEktnerShYnZZrCy2bVU57oCjHTGu5Ege",
  "key36": "3bmjWydufmLgwCjBStGY3b4iNGjWFqAEqPzvF4eXYV3FAyUtnR3mxLxuo2YtKFP4eMBnwAEwCbTevubPfx2Ko8iz",
  "key37": "5pAXaCrixz5cxLeYQKD3iYcK5nZbXkqHR5YTKuFzQofgvwztpoFEprttk7PnWnhbPaZWMV9cpFiGKp5GQia7QDy1",
  "key38": "2F95NYGFwgAjufKGW4zBezbt9vRMK8v73zhzYQLAkfgA4Vy2n7FJB4VNFyagCCaMrFuvpo1e5PRMtpp6aXrKaUPj",
  "key39": "ZxcUnup7d4hNfhL1MtkQKGpXqTm2YXrZabA26cDcMKQMmmj5ZghVFDHCY7DPAuYGpBsaU5o5X914bFrmnQCHcju",
  "key40": "2cihxCc4zhHdAMitwXsFNRb23JH47MZSsFnznTf2Bb552cX28x1LTgGoadjXH9ByHruaFJXzhhNja6gqciGKLC6t"
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
