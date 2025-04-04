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
    "rHeuqAmnMqyfgpBms3LqonFuZDQ4epHEgBtJcYTjtpPn3uvfWcci9xLLa9TVtEKXrNwfXEJ2tgRpFenqW2YxTa4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ExtbWX6N2DYwEG4hdAvTDNDtJUaJeHEire9w84bYR5KrzEVJadRYGpnLwCm4nLugNzzS7V7ZFyfrnHNGEisSvtf",
  "key1": "4b5Kv3ne9mzjERHdmBjZqQjF81PBzbh1oh3UZaHYsc6FsgUkEZvvfcCBvjNM67hcn8uqQSm1saisURkGAtSEjuE7",
  "key2": "bATDdZAakhv3UtBqzDA2BNfgNKhySStx66S8GmxhWHiGkWxWMp2e2T6aoof1ggRqj3MPv4d5faVrY2QrD5PDAJh",
  "key3": "zcNMfgRPJQXD2d1TAruz9wC6Ffe5iKVU9WfXC5jpoGis1unGwYDtfVLMKG2qBR1wjVbWGkjWPFMgnZmJLv1diY8",
  "key4": "RjW6XtVCpmXpsWFKjmbjdERKv4MLgdxTcp9abqmeRXUCn4L49oqeWhNkmqNN9grZReCft7TH3zyTMv5bGdKbrrJ",
  "key5": "53mDmxvikQFuWU2aWpKiCud2Au4vQmS8hodmSgkPXh4pNEmu8UNHAbjNJVCEw586Sfv3DncY9wvvLvrW1pesbbzQ",
  "key6": "3gGi5MrLpMQd7Nb4qmRszxJx4SQK4dMvfjhhxhk5mRMKMYUqxzRoWo2ZyMoJ2yCAYo7EuJ2Gorb45yx7NMm5TNyN",
  "key7": "5AwPtxS1RfCVqj75ifiQWBY7dGZf3nMAa1xsQ4Gkdtif59W1FBqCYrkV6i1VmTeENj5v26WFsQgjt7CKhGX8Qzi",
  "key8": "j4kGtFDgLfkVYX979M1TrsGSpJJKHV8RadrqZD8bUdxGcHPFzgKUcCMdEABB2XxndPTFBVRz7arWSqgoN4iAhbF",
  "key9": "5M1amkBKxh8koD1e1HB58ZzAph75tY71DiHpfTi4X7iHKMHqt6maLfb1xW6w5j4Uuo5hySjyTPvrQyUNLzt87jhZ",
  "key10": "btJ6z2H64fmg9BStv3VSG6F69dss1MnWg1RnbFHmfjgZ34AzexFGjwiSVb11SzHmEQXti7EJ2JJqkb9VKbTGXBp",
  "key11": "2DoPkEwPy2NwfVLwddfwYS4cp2v2w6AcDAUpLUGdSPQ3h7tusU159Z7q2jYN3KHyWt4x74AJk6g8FdNJWbSuPY6z",
  "key12": "5B2hbBj9G8n8uoAdYE48gxjHQskT2LRe3Uzjs4Zppx1yD9JgJJj3RxCMHrr81g5S93McmCC3jz9DnccxzNAgf7ru",
  "key13": "2i1WncM7Tk88JAyxDfpRxsJXrucg8164ForbFDvodnPb2xrJt7wufKpMBiPLkRDEPM7xgJ7eWGgd7QfzFXPwEZea",
  "key14": "21zG1M2s7r7uLoGGfr972YsJw4iwTWVUNcMTtgwQRTxcQ8HSD8zmt4p3aY9R9iCDxizrL2TwiYyAtnbRe17miYRD",
  "key15": "2RscjyeTk7XTsMKh9ecSJwsryMupVDdTR2Zjkyuf4NxBtZqaw2Zh5LmtAbi3CspUiEuSei2bbWD7pqxbKCcA4ZVv",
  "key16": "4yhu9xAFhPzCUiPjM57b7D5xZsJgyLe4rs4WHVW8VdjMRmNkdNp6cnEeahKVMpoUfSEugjN3hz2w8sHCxT6otPau",
  "key17": "5qHG3YXLbLsuUu1dr4encyFnR1u52BqhZv8FLdvU8erKbwxmzZ6maVNXQ3AzTHpW3gMJqB2MgZQ8bEU4i5uctt6m",
  "key18": "5nEP6ZP8Kk5XmpmjhSuVK27C8opZq8tnV7ht8Lnr1BKG3svCQa5DaxqrHqAMtHSo96qvrY21EEPTd3xBDaYjS3ie",
  "key19": "DoW8cj6xEAAUet489XC1tZSDRj4VbDpVg6TynvbPPbP4wiSDdLGtr3Tv9cuKKjFTWTiyGnyFMvJguHkqEsf9HvS",
  "key20": "4pXFogvdiP6ma6wquUBbGKSrwkCTmoiKdrubaq8GVReVYH7Me9TFUCKRgF35ACYPcAQu4eFhgLbkrfXZs1K33P4t",
  "key21": "3TY212awsDf8yifvo5pqPqnpZqENKTkzahnA1SpwhDc6U8RSYCWBBafMT56HLsK2Uj3NRPGo1Wfoq6boFhtuWeaB",
  "key22": "4rUhz2YM594FcbBmj7nhkJhs9LC9u2mpo58xFeppLfiHdJFXV8V1dBCS5miErJczL9jTw7xahUieCZGkvYmKWT19",
  "key23": "iLazxq8AZTMVdtzkDTLTixUZLnoy7zdvNgXv66sdcu14kZD6Ri8FTwB4gyLhDNCMKFMDvVW2Xb95CD9Xj8XmcJN",
  "key24": "4cE33hM81gZE7aAWVSGgkKFbWLFPAwU2TEFd6Zq8kwhSzduSFegcAUwJK1FL8xfdiAQ1SoPnq2ToZnkYHuSEumac",
  "key25": "3Va2PgA318EjgTHeR9ogBREW8x9fe1mA5RQG9v8YbiZyAr46Y7KHykYWL9TML4X5YNNW9TsuGwxKB4Qg2Ffe4RFM",
  "key26": "2GtjxXzcmAZe8L8C3NCk7GZwJ4oJEbwUPVHHgG6e1CZX9nS7khSiQxqsukTvLHbWxcj6JS79JaaMEaR4bnBkKshA",
  "key27": "2zx3WoohHLPRG9ZGHmZfua8UNFE6WBzqKy3DUCFyFvWsBpmZDSVovh4WZTMDdLMC53QbRyDmUjpQLXBmihEbPtb8",
  "key28": "4kPSzc48GYKZCZg1FpcSP4PgYiGZSL573eLeHcEp8XC3FxYaswBtKGWStgC2qmVhg5qQEk3f5UeLHZHXyaSxuGax",
  "key29": "4DaRxpYnyGMvcnJNfZj5zsEmn2KnTfePYpyV9wfQbBjBsT7KhkcS6trwbcNzEm1ZhZCjxMJ7nbyFTzsWwr4cCBKN",
  "key30": "4rKvXDahtHgpp1v17AWZG5AhW8aaxyAzwkE631oaYBzLH9D4nwB7SjR3bcattTJz37z3Cj3PWPq8es1hjgNFnTR9",
  "key31": "5dVsc49K9aRoGAdrt7STGQuPPwacYV5DwexqiqD4VRHKMyy9N5t9GQgJ4UJ5p4yhb2GEHNeJZkVLTbcrYeH3tbeP",
  "key32": "31eBRcUDsEtDc8Pc7SSGLUuk7s7sSdUX96zH1vCRZQ6XwSmq93nGwErUzAsk8QDZPD1nLpbWxcnzujGvXk3dLEpw",
  "key33": "2Nx9febWmZt6UKTCjpAZdkDcVm2iD5RkwTLVvUgoPtpKaVtqVpi25AiC6i7d4uecPuT5QNSNyXwg5zi979XxpKFp",
  "key34": "41zR5qgCW7Y6PVR7PcxtiQVKGZsw6MwtkCF4aVc9adw6Kq9kyStw3hrXvmzoDJDxTYGYLvT3Ao8LSXakSuamNELc",
  "key35": "4G4qpNADbdvATDY5MZFUbgr6Cpp1n8JFfhKGup3hwqm88WxAR38ZJQ4pZKfwjEX3n3DLJ79GremEex4H3xTd9Nkg",
  "key36": "3g5kNyzkztmUH1EJN8PZfVoniYRi98WJvJd7q9avWjZtkCmb95QxgF2rAJySfFZZuX3uQT5zDaiorzocewdms5zj",
  "key37": "63kBrvHyKhNr3uNdz2Te49eruZgjyFYb9rj2wxVeVR9PUdAKnyFMR5WqXLTkMXKiKkb1Wx8FaRgGEgRx4DBMVbgC",
  "key38": "5XjamjUmQcHdCCrWPy1GXwfGZj38hk7PhMRXzmvFUEN6xpNvxa2aYtLnB7bE7CF33z3cCb2SBgexXpdeUBcxtH1V",
  "key39": "2WKK53v1otUWBZNLDXTpUtKFdpCUXvoCLkmLc7xkeqmNhM9XXUcncbSMMZB6RUXf1KrCS13yw83pp9Jyn6CJ3t4R",
  "key40": "zKXEGGaneaZqdj7QTmx4hjnKj2CbWeiRhUdKChZVnzmdPnsuAoxiUaLdcDoGV7bVsfM1yeW7BfMhxEepvFVY8Gp",
  "key41": "3uQZvRWj2PrQUArJzjCCVr72pZ5yJGfpzT9BaXNsDd9BMTo2P7aWPLsVUHnu4p66DqWoHfMDHCSLhGsvh1Ryr6Fu",
  "key42": "3EpSWEXFN9hAL9trU67RX6xmb5JM23K7YJqT7nKfyLu4gY1t95Mjk1aeWyUURqvo3v2dJKnipeZU5fyv22pvX2FR",
  "key43": "2ZaEQfd2CRVW4sHFS5qGVu88eMuoVAuPKG47QaQdLL7TGa7WEYxM716mRs4s1dYKjqnN8UG2vgTnmyJSfrsf9aEk",
  "key44": "3eBYdrmEnh3JjeP19uyHZVmdDrh3wL4AvvEC6g9VhZ5UBSykFuMDZgMs46DEhQuN6HJ4gJbYf1KTjakKVB5tuNdN",
  "key45": "5MKADQNA2YMo8NWjkwRDbXPyB3bTCzMWJpGAeE7dxPAKwcM1t8NCXgiFkLHXP51AMAUgwTYf8YxgLu5or34TGyUH",
  "key46": "GpHLjuTxFF9wzG8E4LrKp2XkL2UiYX9tWNzAnNuNdUM58s4jFuHW2CxEMt5jBofT1VUtSNFMppSfdCRrAWLAspG",
  "key47": "4CSJ2MkmXdFqnnbKYvyNKY96DrjfPHJRZoeTxmXwkgLFeWX2Awf5CZtWtwMsXqCiYn5kxaeES8ziYLFot77eyVxg",
  "key48": "yNMc5Ym8TyfJ6UEN74WWodF1jNvv3wftUafbUnR6XZuVEY5tyedUH9iVQDyP38vr4vLJMUJmDLGFnfnYNYYMQRB",
  "key49": "7kajkoJ1yrc4xPRVCzkBh8GjitCdtS1oBy2uo6uq3VrzyeLkUsc8BE4Km3VnTqGjTUdFjivP93dCK4HJaQYWjHH"
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
