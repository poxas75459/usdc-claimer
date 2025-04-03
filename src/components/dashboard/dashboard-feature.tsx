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
    "4DCZRPWqwDpW2t942AJFdVZ1V84F38NXcuJ1GnnqxGtJPbA52D8EnP7KzxHrnCq65gCNtn4X5W2qRcmt6umt1sbD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bwRY5enLeXyN1v5pdJ9Am1poxmj3ApK5BvdiGwSAVdqGmVx5bVCU9FdnHMyjuQqUQuc6MXZPd7NVGqFZn5VN5vV",
  "key1": "3KfFFbQ16EA5A6emKYuty9MGn1VBNbWCsGj8hrL2Jvwne2k3G1xTokBnEW3HzPjAYUGWBmfZnY96yLpwG6G6KNQ1",
  "key2": "5VwaDoWwWYC45NWGDrFeZ64kBNVpUSNb1zSrRXUakY6aHDK81gMBaLiTjw7AteYYtcGafKVNv3pgGug7pp6Z72gB",
  "key3": "4kNTEbmtQ1D28jA47s7sSggLfk9RhG7GQsoVDdoTUTzzhsEvp1UGUrvZCrcC1RtJD6fFh2bEQNDKkRGhaxMet1rp",
  "key4": "ZZCbYowXxHVFzfsSZq744fHYqHpNGZGfjDnvV5yxTZGZVyeerHr2yCrKVwecUMju3fd5KWKrPerhN5jpkeh4hm1",
  "key5": "5fsqNxmn9zGLYYbELX1yxKBPY9o4DwDCJnZyNmaucMx2Q4QeyJMRt26XHF6MtMffTVZJntK6CqvwWAvCKt6kyCtM",
  "key6": "EVRTP1zKu7KoXRXMrvJSDSMDGmU1qk5ZR8YXGdm9cUYXYDm1nGBLnWRu1C6qo4PN9qk7XgVUK67fD3HvpF8XzTD",
  "key7": "4FbezJpL1JwQsp3sHPCeFrbd9zgLV2nrPYPQALtq7EqnHb6hK1gM1GHsW51o3Df2fNdH4a9bFFnKCPUoy5VTqmuF",
  "key8": "59XngGBa7VbZ2MdjeaGD4SQkrXbmismcVui6rfyBTCwaXV16MPrBEsB8KhKA7kw27KA1f7wGeiegpLzqzdzonEW4",
  "key9": "3KahhgUkvrBqq42eZdmkkiCokLLGYWrTbno1mFwkbknxpN1aewFn11RtuYJQ9w1wTZ6k91Lu48kEdbD8tY7xpuTL",
  "key10": "67FJ5shupnYhtxKdkZJayy4zxNNzunRtaxNqreHuqzV4y638vYQ9gtFzC3dn8Mk53zMYZX2tnbtYgTW1eqxTDbqt",
  "key11": "3qmEjNugD5drPDQ19Y57iwVgw2Aq12P8cg33jUYJhCAMboaDxrW4p3YZC3Wo3GayfsRtX3mkqrx7PnCX1RHQm84F",
  "key12": "4cnfTCnUWJF6kGyKa18uDH7zAY13eYzexFx4BznMwUvsSYoBHmXHxvs2X9ZRuJtFPwUMH91n8dLAU2SHzxCV1GHe",
  "key13": "2iDSVamTUfXWHoithtUV8NbnWBoRzrVckQaMpM7KL3ysQtKSuDqnb4P54n4gTHRXoKHCF1UjhMw8g6qewAFRX1FN",
  "key14": "5JsS73j9AGRtCZQuzdWgz6Gecf4N6Rm24T4PMxXfbXTcobeJuyvQ2TAEq7q8GijfQHVzGttfrYdGV3bV7iGscZgv",
  "key15": "2Y6aEqawRc5x3EuZcNfSJXLzWbZedgqL4EryxUs3qGBwTofVUYimFj8BFWyVk9AhFU1oEhhtBxEfTZoRbXgMXz17",
  "key16": "5QzcNTiN9vfTKDTGfg5kz68LpmJGXiQo5K6TzsTZyvgX28EMoehQZndbgoCC1GXuVrYE7cXV6Kq4G7hUeAqCY1ny",
  "key17": "2gd3Qpp1tVnYjhCiARLv9gUC89X5QiBicWDJhpNcGLEaE3ZvbpfDmiX6HAgGNZtbZbGWELzz5TFKKtkU1UW1659X",
  "key18": "8TSSXnEGCwd8ngT74drgLSbbzqud5TsEpJbFF2TTuaiCeWzHi4c8BFhYX5wpjZzQ1vHmB6dqiq4BCGhirkTKsCE",
  "key19": "2WSaPTgxQmnjLtn2ruw7RqKX1HwPK9DdzAUnAMcZ3U7ZmfJ8fA4utfbSL8usa7of7tzA8mZZKb5nzZDsqj3neDbx",
  "key20": "3zGARYdZvi22Swc76nQfZQa73TqVaGDeybhb8gWNkfLDMeQxZS9JTF8MLXtSHhQwicZ2muasiHX5X3rDScd7vQdR",
  "key21": "5oPZvGgshXeLXLqtBoapqFNso1GaXLngwGhFgGREfNiTKFwoz2UJxRXXQAhcvxTQyyi9sRjMRJYBwoLnuEkVhFSB",
  "key22": "2dkMff9qjtme1GxfehgP7SANjgh7n5Y61KQfYB86SwGYRXVcNAh5qmd1HMUPpeADTxN7YifnEzKKh6mUadymYhYo",
  "key23": "hU2Wg1V2N3sFrzs4qdRQYkjF1ioVetyetDnew6WhXVaVFtNjac59dNPWVR2BCtF2DGzM4XzQNejxz1ku9rhBCDJ",
  "key24": "u8xyp3XzYSNVvSSvfAsxHTaAqvY3e6yr3F3LGd6vf3fNbWVTQxfTCRcoVoGBsFjkPjej25t4B4RXJxo3Kfi7uAy",
  "key25": "2CzpswvnjwNMsHdAX98SQJjxPnBspEq8rk75icyTiRYvbuzsijqmrndfMR6ZGxA599HC7tFNQSjD5uqH7UrVdR2A",
  "key26": "qTUG8K3Y6TSBGQevNR9nfSVM4U1XVoJTJ3A4tbKCqQq3hp9ag5gPFCPq2fWuB9fZGxUFr2MFqjUmLWGQXjX7rXB",
  "key27": "31Nt5DXzowDxNhvRZ39xrGriokmVN7esFR2mopeozzVBSRNJTxvGUS4myJUjPPtCSj5pouicKw9kQE7gZbjx2iSw",
  "key28": "49iKozkj2vfMAHmjSznUxaiTSTNBWaM7XLaj8SDxVFCd1PUh8v5EjAdqU6HwC6qXypvfvGfZaw4dYdGHg9ff6mX1",
  "key29": "49W9s4mjYquujHVUg2tL4Xr1CafKRq8whsAsX8vGYC9j8vcjwwCH6XY2fMaAii4BR3c24NcEmYX1Arvnn5fCMomQ",
  "key30": "4vgQksyoMBX2AmXjbBdCvT96RcYfCqVWHR6j8JXceBA4R1k9Ky9kNYfAaYfRRN3NPsrVds4oR2aGmVqrAXpag2e2",
  "key31": "4YrcEMbpPrXsopdm7uQiTbjH6EUbkCzvaYy6wRzXgX6i16n9h6Yy81HQMeSzizrrRA8hashhpjHkC6WaqZr3Ffet",
  "key32": "3UAUfP1T4Y3SqUxg3KqCyHSPHNeztQZLCjNAS9ZaxAwpPCoxMeHbJxSAAT1NDkr3MjZRFS23a67MoPngj42xoAfv",
  "key33": "5UmK4UBueqb2ExcVZAVoDHK53CDFiZfXBpCBaqRARTmgK44QeFnwiEAN7XYB11m5QJ3m2LkGs5Y1u2wMc3JdtDJB",
  "key34": "2xMMZPMvqUEryXMA3FmMrDruYv6pXTKDCjwGbJ2GFfQvqonCSk4MwBnQ4Fp6pE12stP5cwsci1mZtkVvRuuvz4un",
  "key35": "37DVri9p5m8hPr8wLQDqnhYZGsj4RXaYGvfFmJdQ6Gbe838KmzBvKSBBis5XazLJj3RLtQjdVJxFe9eUM8WTkuZj",
  "key36": "3DnwdNhrLcqi4MQxLonjBgvWCyG4GCo5nRQaP87ab2G2faus8EQqZb37ot5YQCs7eCYqJJvAPNyNtCpxAh775LfD",
  "key37": "5LmQuw6C2jJ8YnoXiXRHBKP9xuWXCYBs7bZ1kSGYeLRxpvzjUq2na4gJ6kGt2J7Xo6J9A6dwA1UVEcSJS8WaeBTo",
  "key38": "2YBPGuFTMN2v2th7omukiq8yZZoBSJoNNoy8xEvDzVJ1kzKbdpYDY8RP8suh6tZ7ohhyzcco3wMzD74w3bkRVymH",
  "key39": "3kLxYqmxRg2v3PBRJ5Rt92gx9md4TBKxkvmMgifaL6jh22Su2TPKGLkVS6F9AoAtswLsbMj6zbYCiZkRcjGK55dq",
  "key40": "5e73vyFduaZu3aapxry9K4HZKRJXXzUpxkTu1tk5RjtjKmjS2xJ4qehHP7gdbD8fr3soLz6V4DThk8EMSjgZn9LQ",
  "key41": "3qaLNLdp6ugPaLfHYth3JVTgW2XxmbJXmFxZQzGkERjPWtd4JtwP2YrYAavirPx73FXcY3qVfLLY6eyCCZnw2Vmo",
  "key42": "65D1Sayz1JTjFAus7UuxHMykVmT5mFrkAUwhNYwFoGSci8nTwQdVrL3gtgJvqcJkHEkTonuUAZFjY8XkmDZ2SD7e",
  "key43": "5f1ZFkAji7YbE4dCBbiPFr5QpXrxzkxG3jbniLTNbWiWeq63o5rKYTm2XNBBvqNiVbkwGGwAeVvnYSA56afz6UCh",
  "key44": "3pxu9pfisseBUsEk3BwfBPexDmbvB6wfNvivHb8msc43zPwQQ7hmBwfUDYCMpVJbwRVJZVJEksV2iX2eCUWtYA3H",
  "key45": "3CSavnQTYVyqB4TJz6oL3Pw4D3QtMFvj57Fv9kU3awUWnaBvtoAzJdMKsM6pMFX3KCb6WCR9NkzckRBxEAEPzHzZ",
  "key46": "3eZRC3vWwB8gdHSJhgnsc4itFg17LBuB6Ks41RRamUgMoVFyuStPqPiUXPAhqd5zKHpDJj1yGAApZm3FMroWqH6J"
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
