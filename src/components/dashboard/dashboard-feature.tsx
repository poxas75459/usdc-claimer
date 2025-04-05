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
    "48eb8AK2tYqFucXfWGuFLcCDAwxsrp5tDheeRRRkavpxnrRinhJ6xECRRVsp55Egu2MGsi9hSek3WbrLA4YNtf2N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G8uPbwyhopnuNLDaqrZrhwJCoKTZvLQN6Ui7M6DFa3JiVy2XNGuhahKFZ5ni2f6G1EMv8tgN364dEPGmEKnEs8f",
  "key1": "4Bd4m737Efp3M46MCHZHHitWGm52gZpsTgbKiVmrQPBnwjisrFKn5die9kLJPuF6q49DwFKhDu6x83BU2SaUzeiY",
  "key2": "3b4tQ8mXn3RbMUfGYtAWbNbupd4XmLziHhhZtGPgpMnX1MvPWXLt9WKNGofW6KtSXY2AVCPoWtNmnd1N3V73zQgM",
  "key3": "3ESUkL2wftTNPyrwdPBeZUxUY6ke2cdrRfKZqorHF2X8SNAn3PqFHDbmZaMJnLgxcDJYvvrRMq2AejxSciBuwvHT",
  "key4": "3iR3RAVH7GKfzjVCgewkRnyfiG4qr6XdL9TQNqsG5yQ4HAjESpbmoHwrSczLib2Sjspzx8EG97hJ4QWjGveTo2cM",
  "key5": "55Ntei5MSXPqpxeVGszApLkmmhq82wyUto4Q2TFoLrar5QpCfAznjYWMYRJQGSo9BuGtGMzoJRsLEWwenCDteWFg",
  "key6": "ykNmZtrdzCgRBfWQfyTuA4sEKtdSpu6wzUBh1dBko9a1byNjo7DpjVm3xaz2Ujw9kq9NxEAnqJ7hn8bg1ZT3opL",
  "key7": "2BSJaV727oDNFN34JZJ4Adjz7dcDPtNgkJ7mfNS6iQcp1MFk6NHvBUnNAL2T778FPnvcwfM4mFSJYn63bH6DRPhs",
  "key8": "2myTyU67fSjYKVoRueSwUNYL8Y82UzuTbVwmRHizCr4ZLUq6tkgEdJJYmL32oBzqXrBMas6MJgoNyQTFYXbkztnM",
  "key9": "5uXtrsSzPpt37pqiAagzmxQXTAT5FtZfRdBSYzHVwzMUrExto2MeL1M87hP6S4aS1VRauVv4dF74nukV6fGWSgtt",
  "key10": "rwvVsvYKM3r9aTdznruHZpZDeo35q85kUHZjg77qBbevA4pRQZ7nrnYKtN2RJb7F6ifxzgTn6WsFqk3zaAdxz41",
  "key11": "2rZDzBLoHCDSAXKgWCFswySf7WKYH37ywMsrjLsVLmAs1UWrhRGUL51d2rD21szgX6oRUgshbKDk93d5z1cFbXKq",
  "key12": "3kdf5Vs7GrMfwDyeqfnVtCQMmJjQdFeCsGGLLveUPTuPTsnjkeS2udXiBRjdB9o5MuZzdLkHYv6nx1ZXNXvQyBjC",
  "key13": "3P7KGwrHYqSUevX8zgdRednhB5BzwSXuXyTkHH7DUx3VzLsLKxD85h3crssBW3BcJsP8cs9U6EWpSkqAE6aqKbxP",
  "key14": "2LfuP4mBfynvhVKxCbBAwvCiuUXk45mZovnz7rFzqcgVACzufDb2hhY6F8mCM3QHZ5EYExT4NqKFM9RJecPenCec",
  "key15": "4NygTDc9S8eyS44ec791UGozxH1HNr9unU74RjX9fE4Ejd19sCKwzVHii6qkhe3yja5HvWMFdNajP6EJPbQraw6i",
  "key16": "3T2NzveSLwh7w8wYo7ksRQ4zfvLhuwiUo1Tqpr9VEK3EovuDg4eq4fminuhjaQcm7Njbw5WhDeEnSLQAcLq1BKrt",
  "key17": "2QCKhGAxK9XvriHypyzqnTzAoyyvjPAFt2e15J1SwQD4Tg6C7bU8AEyoHp3NC3GxX6m8oFxTPc5P9ePiitcLpUKP",
  "key18": "26UdyigajEPnLWmgFdFweTGyAQrJnAeULCSZ5AZTRUDGAs5nVvjrGM4cyUFuyYxWEwAdTuRKu5vZVAmJX4h1k7x6",
  "key19": "3FZSYZZ8rEue8YhjpbaEiL6n7GaaL9PUxFRfQN8cwb9NBd6iZacFQGaoptjr1neeAEp1SDPuqnnSZa6Ew1VfqAEC",
  "key20": "3gbBmtuD5yjCW13agtsGqUGTjKRto8MaUQSYdSjjPmS2iQGw2Rb9gMvsniagqtaeYCVLBkoKRfxg5BVW7QuSbQkc",
  "key21": "6WoYkauMYV9tPFwPsMuwfuQ2KdhnczrFmuBDEcvkqQQTF23AAWa3cvLN9y5RTyqnETbh4afmPLqEhx4eYPV8ns8",
  "key22": "2nb7C2VF4r8trEGzHuCf1qUHLtyQvNfP79MFtjAvANCrMDDoJ3PnVgWWcDMVGyfh4TuPPUeAUzV5q9Rb2QQH6fSp",
  "key23": "4d4y6T1hxyi69bxc8BBfFEp1mXe1ye2vTdWRaqeG9VRKSbjhNphPrcYwCn5h7B2MuSiSpyNSdZE1it1UKt8K9PAu",
  "key24": "2dtPHHSmHakH2EdAgKVKeum7ArxtCpH1HmD743YxWiGyoaRFmw3ibPzWyATkmxFUFXjzgqB8ZnwnKPfxDH5RU7d2",
  "key25": "4c82WAw39865wCSuDvjYC3c9ZB8UPb9W61hzyvxHLx7zd1QKqdB19Nr4HjpJm2gBRoHMoUWUaPD4Gnwa8upgjAPN",
  "key26": "5g9hZ34cHaAzBxMogDnkb7NFtxuKy9XFjqZPo6gGBjL9UsXNywXeegV9fi7mX2fGqzqbouTdKkjmDQhN8ruvWgyN",
  "key27": "3H5WNVLPe8pva6pSDA779ehp39Z8qSnqrvHcAaHBWcJZcY9aq8mew4CqWM5PokdA7kvTJvXNTcZ3znPYgot9TouJ",
  "key28": "3gdrj6c9MY7AQqZM7cuL6Paiu9trK9b3u8ghCwqQVyzNJydsNzLcu6GuoUnxdevj97a4V3x4vQ4Kq97JgRQbAhiT",
  "key29": "4JcmAqWwiZMJ8DybsLtS7JiL8TpwvdosQVHrwf5YfMrfUqe6sGvTWnqppTj7rjX1tTjMoQdf9eNVcD4ezqGMivxE",
  "key30": "5hPHpKPNab35KFsxjj1JrSkxH4nSumvEBgyuTbp8tg3TtBSHb3Mg1YtMXnP52LrzZ7GB5vtrLEkpsFrxM7VPsUZL",
  "key31": "2gXwF69NoXFAsdZX8P1iECMPnimFjo1kjVwbvEcygfyMhrZN66qiGxddj1tHZjjezJrDTazEBNRo22MxZQ7cCYgW",
  "key32": "2pwBL9nzCemUUnMLL8H5XpPDRgQ6cNZm1kDeroX6w8D6i7F591LczMqfa3DbEdvzcnAuRPzUrzkA5cLfCiVMGX6C",
  "key33": "DEmDht7PUD3xmc28fVMp2cT23uus3Aq4QvECx3wgpKmXveTSgjzpEjBMTvPPDPxgW1D2cZLeDf4iJ24hUJf2Kab",
  "key34": "2cn2FS1AZJ98TfzA2dAjdy2ysGozjWVAHybUAiarx5c7pey28sVLdTMnjPzXSvwMpGF744DfZ7s5wN2y5Lu8he14",
  "key35": "4zoweyLyHDP2F7tvDDGKfiV8pNKHEU3p58JCYUvFxgKjPYKkQaBLtaKm6uwYCcCs9w1oQjJVub3h8z6jpbFah57d",
  "key36": "5sXypmhasS5QhRvLoSVfx5bkLLER7Uin3CPkM2Fz9KTjApyaSNYKVHqxr934G5czvKggNFqyGLF8y2NTZD54qM77",
  "key37": "5KUj226fXdzHoM9KG5fYQ7CViUAcVBVB9M6ef4JRbE6th4zgHHBYEYoY3yHWDW18vtwRz33hdQiHEocYkwN6vQMD",
  "key38": "33xukNMEqXfsycYJ7ujDRYU2B4LaUze8cUmb4nbrpoDZtm6BxExYxcVtUzRwwbUsMmY9iwxS47MzbXTWFS3PZnKU",
  "key39": "5Su7bxqCMbpsGgmMnJ46SJ1jRju2kwiYjHRX1ySCoQqgGYdGnjtgmgTWj1h3nocDkGdvJPLeYDtMxLpN2XMchBcz",
  "key40": "4GictpqHYrQt5xqLFc49qzHB7L6FksJuby4s2Zc9pAvnRxveNRx8YD9AWCB7gLQ61n6S5zK8WZeZk6ha66qxsA7F",
  "key41": "3Vso3YvTFmXEhL4x8K8X4vvQLbk1wzVT7pKhohbTy8sGkj5zpNwxbrLnUw2HnskJFTjhFZ1uwjkN3K3hFMfDsXf7",
  "key42": "giqfSUw98HNW8wpYE9SLy4Uq9qsYK4EcrdpD8GBJqpBtNCy3Cr3PUvEWLodvif34tb1NTiQCtW1ggQXgSUYvG61",
  "key43": "5BPu3ottsyLgWWmLwiWpWJcxQUfaRHybEgEkP4bQpxDkcztJ8nHwABzdwyHSvWfetgLcvTa9AHu6779jSh6w8AM8",
  "key44": "2KYE5VMgyrQcbpCfQQSuVSGZDUW6ssowW4vnebNrjLJnjgpDdEFpAtDuV9hrFJduxvj66qNgbj6vr19mobw2aPX5",
  "key45": "3L5joXgknoEyTwQGp6mMvET3zqt7uNnY8hrPwDbPpeHB9YgvRgKfaZL2xpRoGM7datG5ipc2yG3nN9qazQRPfjeP",
  "key46": "3wBFSJnryHWVH2HRMMFG2aHvReUcTrnGN7nyvyZeVXQrYTYbuCrpfVvRgjADFx3LZ6PHUytooXT7u4LpL5mkPvzc",
  "key47": "v8iCjAaAjDM1Lf9uyEoKASd1FoLDcuDsEmFepQeJuTdNzKzkdvD1nj9T7MqmpsTRQU5M5vxzYRUWE1oniCBgSAv",
  "key48": "tqrBmmUzq5sd3XcwKez9zKCZqsKP1KZmQzpybY2pS1Ani58bAyn83WKDeB2Evi8xCe5LwaxLA6yJmzT8BVoVbgt",
  "key49": "5WFDMG3TeuhWvPn9PVaY8SKBwsWxKnDtwU6aVxmkXd7RcoFnPhndyWRnNneSwqjKj3Zuun5HnnFo1sSY5AGgZi8r"
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
