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
    "22Cu9aSdrEufjjb3CdJZKdtjT2Po2rjaYGVHMsw1kaSa1ToPbrd8pgQGzsHnt1JW8HkE37MjeWzQvo1T4p4tvYTA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AMY7Fo5oTb8uFPTXp2JvEooj8RAVcUCpof7M67YtTA55cQkxvt13UbSu2zRZL22kQbwFxjJCAedCT98x982SKza",
  "key1": "pNBBjmpr4y4ETwUAvRiCg6vJrL2o6btYgake5pS6SbH1gDNF5kdr5xwS5ppWtfyX5dicrw7TskYeAada4EV7eQu",
  "key2": "bafXG43xtvjCQC27KAt8N7dtUcXse7SDvHF8TDnDnJLbNBLCqDMFQ8Dxc8izfDQT7k4sfW36kuFvvnt4sREHfFe",
  "key3": "P2BKKeDk8QPVCWX3qNhiE9itubMtx6UtNUcd4XpqMjHLRjnNLbf73iDaYz2vunkncAb24x26PSNYqbzFFVfdAYT",
  "key4": "4JETgjRTnp2gbSHzzQHKbgeEBjWNtN3cAk9hKQmewqYbkj5m3vm4AUixMSQtL3ankaR6tmAkH88RZ9HQRcJC5dNw",
  "key5": "4tHzwVXNtnMhefVmPjiArzax4KTxAJ3sG53cPeoh7hWmQv6dv2qEYhEB5MpPZcApz4T3CvPA7Vvw8tavub1sFY5V",
  "key6": "CktJoDZmdVcgMmDZnjJzcUNi3EAz5Ga5GEw11H1wz17ST4XQmDvpPVjeNdR5noknCkskFReDQhnTktQsAwFAwEf",
  "key7": "2ixo5Pzc6kxhcL52MWEQe51k8qWHzKLZq2TtfE1cTiqnrZUyK5xd1asd1bP3FHKJZAaTZTcq6XofVmqSTSZFB6Ya",
  "key8": "5kEFy76T8VdXNcUFiDUymQUHcjXfddTDHThgCFoGzfXwcvmwSPrY6nmkL8xmFfhCBTFcntiBjULDJxMi71VxqZ8P",
  "key9": "5WXqGb38HSQeCH9V8q1VKHtG6rdTTzActpcaoPBYCWytGQfASCMPb86EkZqsPxz1S8EWCXZtZCLzna7ZE1qKwbUJ",
  "key10": "2FAtvd6tAqYL697Q8mySg7KAP2FjxEBSc3FcMwHyCQ22zmZVNvNK3yrPNg5AUHBPFGQhBUec8549nsCzMbZ2D6sd",
  "key11": "3UgVXvQdD8dbAyi1pSNLyjpv7Y5yccPwwJtgzYMkiUrivfhLNNWA15V9wMJhpn6J9y9kk3qsc4cNEei3RmXTUm5L",
  "key12": "2wB17WCbpy6JLNvpjfheXKuTUp8C8DFup6FYZntgrkPLy133xyvQXtyCLVu4dXPNacuDZq99EtpCX1wxXGTUmGk4",
  "key13": "3rsCayiLN69LvF5cyku1dUxoNATJmCTtso4zaARibBtqePTXLAvDncAnMRpTV1aufvx4FEsKJw2txevNyTnrv64d",
  "key14": "4k829ZVtfp2VNGdzSghLEncYJKiB5tzZZrTmAuzMcSZLXV9N3q2oJGjrB5KHp3B3VsiqV4tn6JKGhVcKe9UQpbNG",
  "key15": "5HbUhkmRUXXPVjPcFNAZ8wTaFUDhGvQHeu2C3zFEA7fCydY8RJjmTzhGLrqjBzwuhJVqaKhueH2JA9Fk7aaXQANy",
  "key16": "4aP1bnVvg46BF6kZ7fdEd77xsN4z2BrNeYthXg4KzMQFGeqzJ5CsrexxCTzMWDTbH6KTgXDYyvuqV9j8ZPXHNw8n",
  "key17": "5bDcVeXHRtJubZghDQRkFwyTtPhjTiKc8NKUsrpuPxaBXNn88SMmgxcjfhpWUXNDgws1io44m8zLogHin5zXwuCk",
  "key18": "4gFtt5oAKTtyHDQFFTfMuR1ourwckuanduqsEvzxUeHVTf4HujndMVAzqyG7FndhEwPjm9rdKRSh13NVhi17v4P4",
  "key19": "5vSPCJtB5PwjG9rURrDiNCKamkihzGkbkWpEoCYns4NVX1o6FLtcv3WPDpFAVspkjLwbBFEiDzqKvwA4Hge6kziD",
  "key20": "3jkkhbqrf5VWdd4FrxCitS5eS5W7Wv9Kkht7papT8rDaRdLsUdnsgdNip97iWayKxYKhr8dgkp8VABymT7DbBGcd",
  "key21": "5FNe3mSzgFDJztZaJq4VCjDRJHS68FnuRDyqdFL1DREpsvm4Cmd2ZeZPECjUdQw9bQbedXCCHivyd2CSsY6U5H8z",
  "key22": "5wXVPcpeKSK8BqPY9pgkXaFDEP4B63gsCqv2D4CpQmEZgfZ4JaXqRU44fwf2juUWB1Y3JR2JSSjNwN6yBWdi3dNQ",
  "key23": "66HvacUWkewigrVjGYZPCHqKWczPwM7e356aL4qgNEbQ3NLipemwjCatidLEQeQ54fqFzVnnJehbVnbeAEEZTcnW",
  "key24": "2BTxSw7J4rBcv5LZmw7Wu4R8U5L1xCLGErBshttmTgqdZQJdMVCVwC84AEdcUofFoXPmChhD6VRJXmGdaHMRr7TT",
  "key25": "3QjRz3bdCpSbzkrFUWcpaqcRnT4Pq8Sv7iRFSLHgAsPnhjEBCXByq9ACKebAJ7Ncp7z9H8xjCAK2uM8Lufm9PCyi",
  "key26": "aGLZQwSReVFKVL9YVUsE3a3h9s9LY7hbn86fp2VzQaKoddME47eaYVg1UJAYn7ZKLo8HfGFdptYCn8f41DHPcys",
  "key27": "RgH3KNJW3A9z6Cryf1rCTFRNVANoeRVbPG8dU5SsiKA78yyeg5P9cEX7TkcTm6kuuSsU7zQSEYNkJj5Z9yarXZJ",
  "key28": "2mdLgJVdoxYMrhwuc9cvAi6MGMzbcJzwLkLomkdFctViZocomMFpcQRuAfTXspoWjt1dietVMqRuphQVJGaPzazp",
  "key29": "4u6o5ELRHSFip39LMf9aRyeJERNsR9ptn5mcGfyYkk7Q9yDC3XSxK2HhfnBL3cP82KnrG1gtYesEMbbTSND1Buqn",
  "key30": "5dzJRh5Xqj6T9LaxdPQd53R8sC6an9pHbQgtU9PQU8FzQr3eAVY5YUpVD9vQRTHZii5BYGzVArwXJkT94evz4esG",
  "key31": "4X8o5vYucvVCzDA5a2orchnBCrQmwmQjPHAUt3EgRdYjmnXm8rZNL4pwPr55DtjtPNyp5bYQUwF9skkPhX4c8sju",
  "key32": "4c65GeBxHdLYSjfqDNMy9tNtVzyXFbuN3qsyA5ectDDzQpu5YdF6DKNzYG87vnvLbs6FMupwuWSgAzpK6F9uhpwJ",
  "key33": "3cv2gTUiSUooKoav9nuon3qro4tUxMT1QKkBdFzrmtEAb1tSFKo3tEfdajQutsGp8JDnSFnu7GvfNWr4UPZz1FDH",
  "key34": "2ApbttfoPhMxw1eYjePdzJ5ESEFk4ehfATe7HUtyKrfg5rsUvnTKMeTZXLtYELigB8uiairRFrY4B33VppwgyzbQ",
  "key35": "2vP44r4XXadBFcjHCmQCHZE2gXEnnz7X6FKEsMyVrMXDtXuHEfarEvw3dE3VkC2RzqnNgfwM7q78HKuPnGnWzfnS",
  "key36": "2uaoLJEbzdhfCLgPhWJPBhh7kTLKSj9bK7e6uw7mv6TZMsmqu5qRdJsYcuob682GXFHwzSiutepmhisipyqsZX7J",
  "key37": "3C64VsJ7czYeZ4ETDHtXpiPVn8zhddAyJxYeaH9Nr2nLEJmdFez329H7hkY7YteSraf8ErdwrTZWGmj71f5xuVYs",
  "key38": "2UDTpGn9E8hN28ATYVLRuoGzikn8Ube8iyBy624fEafVWhw1iXWBZYWHerFGbLwJXAShvPs53aokxd1aJRm5feuU",
  "key39": "2ixnvdBYY7vedmc3U6yxHcmt77SzYFxy5AhCk424vTAmDjbXCWCuwqP4Dy1Q3AH1ao6RSvzZJGZGp6zspbdq2fMC",
  "key40": "2Pd5WzuegtSUoUt2mtVfhwD1bjPNcLdPw7iTsvBmsCapaje8MqmTRny1861FvopkAGkY5Tjep7Muz5RcNFsGaXwJ",
  "key41": "5EKa5hduiDpbzKWVcPuBogRAm9thgknNrTrXwWTVuD7vA27ECXBcFMRpxDqTDRUnYFkY9PM3E2aC58CYHLpBfzUW",
  "key42": "3WMufZVbDHHpu8Yqt5dCe8a1DB6gLwKF7ykjjdTatwX2kAQYM22szk4iRdQkFUM9XwSYpA9Uvde4EjenXuXYrDqd",
  "key43": "3vSxgPRDgbATBgQwwj2E2EcwvqZcwm65KUbLA8dxeCssSjg2cS8hif9HUKSiQxdKqkzFnEDEjiPmzFndimBD48mT"
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
