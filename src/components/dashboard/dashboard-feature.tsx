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
    "2qTL8Nh2DGnJaap4oT7deVVyt36zoqaCFj1HENjXZEx1v7AYvUzANb2uY1uTt67pSd7NUC1PS7fHVqVUNqAf6M7W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UCwtZ4Ata8j4tME8e9AycwYdtmmH2q3XrMYTGHhVaaWSsToAmUmDrBiSTdSLBnPW8HbQtxiMYRMqAvUBS8myP5i",
  "key1": "bK87caV5R1M5wJgqavzwW6zqn9npuYBaP2gsT7KHxQwc61ddeu4HNSe1K5iZxvFtTspds9yyoQHFxw4FdudnX9d",
  "key2": "5s4VUoC3uxmSavVgktGGk9KYmSkVr9jp559gvkL41UyUw4Ya5jPv5r1UqVrV2QbUCeHw5pQRSn9De9kpp3mXPkAZ",
  "key3": "3vX99WqYuq65tzBJk7JFaWJk6N139rfuYobNsbo7DZFPZLNbFDAKafYQXXqS43vw7yjTZQvCwF1LqY6gwTs4whe3",
  "key4": "3jt9y57ALED5wbNzLJcALQBSwhrFDrb6GVEWBgFJ7RMVef18bSbFsa6mBJj5sm6pFTs88AWfsDcr5AgFyr3H3b5P",
  "key5": "4LYDpJFQdY4gYTawELCD6DcNtjWsJbXzMiB7GM2rWjL46npH53e8R6QnrAnbxhUNwcoyd7jEsxCKPBV889iEyQ1s",
  "key6": "31oT54kb1McEQX1dHJm3sk98tk7591qmN4eNEPmnsZXtJZA7UfraVWqTtnVG9TJdrgdBwuDvbyjD9i6yQXrgFWq2",
  "key7": "4BMygbrUcanoat91nMXD25ru9Rm8A5BdKJVj4kgVPNoMbTh88VUnMLrQHQfHUyqBj1H7hqrWKQcjBoHJVXJwxLMm",
  "key8": "5L5F5X7JfMu3TeZiBrG3vawsSqADCP61C2PsjaQBZ4eyP5oyg9DmAhTQoNa5UV4iGadmyJ6DW13XHfPriWt3Sz7Y",
  "key9": "63quPhzYVYNapf93DuQV8DFhMyt4Fmc9RPo7jpZv7gCYjGBcxizX6zoBgjXTxHPGhnpPc6AyeWD3ekSNKYD2b1kq",
  "key10": "61r7bQkzfg5ELFJrTBQHzW4KK9scaYbcNqxCm5JCqVEAmZSUHcR7gTp9KN3A3EkJuwbuUJwRwHL1ZxWRF7SFYmML",
  "key11": "3vRoAizdtWV6tDBuwnmqMNpbpXwfcCoxUB8ZLoVQ45XDkQ26Cz2GGJyWbu5Dpy4ydf9LSPZExoAd1JTiL1jxPMRg",
  "key12": "3n54RV5gmt91n56uWf4chQ93NpUhtrCZRkXYUgHKkUEbSaXJdnmJ3yU9eRm7thGgYncGRxH4AwHSxcxwtg4v8m2M",
  "key13": "4dNgAUQdHk5M2kCSNucsMpWC7j71jf6GCmM84JphJUf1MPxcTaqyBsFwhkqS6P3U97vWsRXLn2iYCHUnqzN7oRma",
  "key14": "3nZuodGuiKW3GNk1j1iN7tebHEnXyuZheSGtH78PupKX4iKCqMaB7PVQEUw344PVeqCqREnCqy8V1GXznd8ig5jY",
  "key15": "4KQxhuLVRqDWBhADgkVBzPFdcQtXcpBXXLhEvWTEHaWiPz2c3Jp7o5XnxyMc3LL98L2r5AXigsJ9Eyo74dSSCKCh",
  "key16": "5d542zujnDfaBZ6VXphm7mjgNroSw3ogjLfwDcz9DFbCdx29zPRT2sdYEhVimPcB4QVWeDwuMBCbam6uTnG7SXSs",
  "key17": "3zHazhKE9R5o1TPeB56VXBgm3NwaArAX783qSEUhSZR4WnkYHdhBAM29mGMKbmdtZ7cZmvSexhQqa4rWs2MasDzH",
  "key18": "4DwQPptHibK8pJMPenTjyDJcfQLVs9QvZcVuuPFNZzvrh6AhhDLpiZswHfLRSY4HR4BSx8PCTSV3WYHyNoLJrmjb",
  "key19": "2hLce6WaTcug1U7duWZcau3SprGRSGEBNx3RqWWQUVhz7tzDQVTr1kd8v22W2ma1yBr1SiR6HeEfctWF2hGg2Lvz",
  "key20": "3mLpHkckU8pXuVrUSsUKUbpHJ5ocjqDjmXfz9JbqPgMoAiMv8ZxCHfZfMroh6kXk5Q8XCCDJG98DxB8K62xJxvDK",
  "key21": "5tMD1LXNxthKhY31f22nBPzfqoCJezRMuP33dDudN3sMZMPEG5BWjM5QkFEdkXghZ96Qjrc3cY1uejutTwbzdmtc",
  "key22": "4NCvQ7s8oQgnTd7DG7KvbrY6wapnLjiLu8kq6RWhd51e2UUAuM4zXYAg6NkW9bFP51i8eWtoaG2eTFpuhTm5gcGV",
  "key23": "WbtkkCMuX2BzgZY1T9VQmmYDabMHQEstWsz2TcGSEWcuk5zE9vT2uTLkfct1hSnsfyxDz4xPNyUivFZjcru4frr",
  "key24": "47Dw6UdMWAVZSCEonGs5zqHGDeoHyhYgwAEJqLgYQ6B8BgDMt267nQAiBdT8SHgPQHcupmeasrXAP1pDxZ6SSeS8",
  "key25": "3yoKYM8vCrT3hwtSnaHLCWMY8bPz7ZnTRGi1K35cX4xcQS9tnNn2ZaF1xYUeVEGBvvncJtvXBLxWrLKghFEnW8F9",
  "key26": "4NChgD69pTMh26j2SxhT57su7b5D27Pynr112XNAkSwU6N5UWsU2tjcyEed9ND9irXN2AqGq3CqpkfUTmNMLMxDF",
  "key27": "51QZjqPPqty8s5iAU6T686V9E1GFEZquMZWarCqABmw3XFEDK1kTTJkCETE14oQ7JCbu2WJsxL1ZMbiaTvJyN3rF",
  "key28": "5QHuu9jNs2p4LcdyYz7m8znuMG2MqcsLpp26TBbxGqxe32WsygDLrRnB7sDuZsbCD8jkrFm81Xt3AkqZyGYA3fSc",
  "key29": "8TD7wZjtSadymLzbNEBEioXJo1KUDvzUo7NxVhuEEBTMfN5m7uAKEKRH3Rf4vzgiTWiQ7ZnX33Vr9o3CUBkwvNM",
  "key30": "27365XNvT6kHUcCj8CCH1ADH53mLZUkj9Pev5SWooYaKpPwKZQaU85zyVbs5cU11VycCC2RxAM3vna64CJYEz2cU",
  "key31": "5Rui9bCchcGdcdR3pBHGC8uujVQgXwQ2fN41F2vH8xdrBeoZiSQGgtozhkqU8eDRSHzAPfqToBsEnULv2rQM2NZQ",
  "key32": "56TauJ9zdGN2EGv8GNrKobMT1qSceBrPo7NeZiqEVPpF8KB2TYeXsT3GiJbrVmDAxJJPmxTbtWmdsQCb9mqRxMhJ",
  "key33": "5c4P5GoacLtg8uZ8o7WG2naTZ8EjAPPzTXzhP6NgVfx1KMRMZJ8Vtmi2b17tzmcutHWUs5gU5VrYYP4jRPEyuaEL",
  "key34": "3L9ss31mnMGZZw3L3xGdvw7qCvp7G27sRb5JYTHJbJ6rfEYoFrYAV5XULbxu9QdQuEBcRqAr3ghWJqFip4vqkQMw",
  "key35": "3kJdjHawZ2yihf91ep4jawjx9YuYd4KpTNavsNzsFLCinNF51xYhY3i5699H2FkP13LwWSkU6hVPz2yUaAnp6G27",
  "key36": "3fjqzC3yixsGEX1bgNfPNJvMZga2Zmww6Vbn2DqrPwDv4E2bWsFvuaPs1xEQUSEACm4KPrFi9t2FCNYTAxFdj7Rz"
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
