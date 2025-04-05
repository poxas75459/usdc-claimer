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
    "5NZLoZYi4M9pDY7x7qAYj9WCwwx1HacFkgTLeU8CybrQNViaaUEtceHB4dZxDvx4y3J1jucuH6uxGFLZyQFY4eHM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "484yWtwjNE7ikXbE8Dt9Tz78JGRujKhQZrMJU9tSKsZacMSjLURV9U2NiyGTeakrbQDGHcUvqYff5bVMDvmMpjHW",
  "key1": "5UguZi319UH9syJmz4Cq6jfaLzCo2BYyfQEfeFDKcK282HD4UphLA9UtLpt5LoyFLC64yEc2fUtLzqcVUFqbdhdZ",
  "key2": "4LBksbUDVNjmf6Ct92xQNC7eBM86ws7rt64PHXJKEz9dCpiCY2uEgEH8nuZowwL2oScPS54cTxi8AMJAj83hi64m",
  "key3": "4QqcNS7dRaMEVpm4ZT2hYxcMoTwjfTu9ixxfap2gB3FmqdxsxCnxDuGLtV9VRDg7y7GM7VtpLEr96W2nEPvQVP3v",
  "key4": "2Cr1EnfAG6BNpPw3S5KsR65RXp2y477zN8h9xeT2pZjxKhSZCBrRNhyaRpZ9keKhSdgtvAnEPfDYqgPCKpA5KJh7",
  "key5": "4vnz8agJMHXA985Q2Xp2cH4DRyfUkBVzCXwzc6vTVvQPoqwwAXRnHtgmoNxExDmGjKhrH6f9bnizuoYbkpqNPWhz",
  "key6": "3doFwLn3gg9untGwSy6TbrwSAa2BDwJSvJrPoyytcDt4i5uBxXgBhwFTXbCXdFs5ncvuzkMxkBa8qQcz6JkbTFuw",
  "key7": "2hWG8GD9kUhWuc94MisUpskPjqnwy1YW7MkyRrZN3KmonJ1AGKrV2pokGehLmKafHh99WWGnK7eMzSNabQuMtBKT",
  "key8": "3ihHQiRS6zNATsnaGRyaqMhC8JPY4eEY2jWc4YKU6gXuyfibYxiPovjk1L7t59HCrYCCXF3Trb6BhjfZk4hpThxh",
  "key9": "4FmbBAQtrGLkji48hYxP82b4Y1JcZfceEnr6hjxMV3j6T3UM7fXAKj3nUu1L5Yzt2sh7tHKHpr8Gco6GNVTVCRmP",
  "key10": "3JUfx3xiNAzMDY3smuATCMcWKrEHCMEyH1ntTY8rnCpqri8ApNJfn7q8k5f9PapndkVayqfDioKbVgTLVKsYzqpP",
  "key11": "3hJGz4kcv48cfPHzHeB2BKxJdLZ4VwQCGEEWw61Pma6VQo6dA9diNA9f5HkCNYLm4JoQyXJ9EtqgEHYQvrSGfhw1",
  "key12": "HFAX8ZqiCB1R4nvNW1CvkSYiKBtiChtp81x5f9BUNxpMk9hTE1j1EP7eHQ46cn7pkuDuEiKMiBHqbWB59yyi81B",
  "key13": "67qdtW3pwRLApoM6HAkm6fmzbLemU25cD4KjnixEqjA2aUfciuTkpqfYi26AwQ6xwtPjUbUpHLKfX2jP2H3twexs",
  "key14": "3K6P2wzte66ZtGpXJH877NaNBzLmiudRio4PJrEWf6eK5wyB5ipvRcnGfSrcw9dnfvgQjGAFmU7gKoGmJuCuvJxm",
  "key15": "37uCcMX4kqrQUtBsFvtBuYbcgNJSeQywZFiXPyBBwwksL1YCUcwnUzrWCr1c8k87Y1xLhhkTYdAish9stmeDutqq",
  "key16": "2SiayxMLaCh3H1TpjLafYJdWuR5HoH7MVCPju5zRq8DaZZjkBETwJhYGXoQ9t6cEHQsM4uyRx18jnMFgWyFStZtr",
  "key17": "55eGiwYGi1tdbwjfuhJaRmvi285cvYkeZxWUzoWnrjBWbrqsEqvfigoxcwG73nF5hrUT3cidAARgSKFvs4qBfeRb",
  "key18": "5YExEpp9sYbdowfzfJKjVpXFpTzTnXXCD1GCkP6aXr3D7HEMsyBuvF64Ujpt6oJTKZBDFt3oLGsgFTmgQbev6Vhh",
  "key19": "4YP8T6hLh7Cfw95W3byihKwn8Vi9SVTaqanWMqzrcX3k6voNsYefQi88hEtKj7PjrXsHrUKpSaxN7KnpSPb5Ae22",
  "key20": "4USonEJQa8g5sShrK3WyP2W9DU6hL2Rb3yHoZbRNhXcqQXBmXQ9nv4ojCiapNbVtFhjYS29nYK9avYSzFyAtzg8a",
  "key21": "2vjW55mCFHt2FMrPtRaEpE4mzfPc2rxr3bnS6UceD7ToJ9fmTKiLTiKd4pLTWkcGWKYfsg9Gd88fYK5dFSwvbUwR",
  "key22": "59k1Dqg11TgGNkBDTUTmXMh445f1yUmmH5b1ReJV9PzW6GupfyNa2xVfKaT5iLsZ8BAhFCNrLq2NKzQYTVRQbiZL",
  "key23": "W1Ag3dWCkTMyHkpjsELbfcWsJpZ8h3Xw2oVFd1xGXQNP3iRNauu3Rzc718PF2tvtUPjbfZzYp6dXDk1DaZJjP3o",
  "key24": "egyHk82gKsjNAiyc9744Zn4WRX7tDsmbstH4RNMEeEpD5sB5dK24aLPxdFsxWeayDavsoGMkYW88co7Pt8o7atK",
  "key25": "2B7yU2bAqfPewGtCNN8gGciojxGTB2qT2VXR8kb96ptetjo9tdsa33brw2vE2dbYCuJGAXaEC7pDiiSKyfH4xXKZ",
  "key26": "2XZjS9zdPDBpUAZNE3eubaWt5HtFEpgbsE5Wg8PHgdrP7GvywMbD5uhedFTFcRDAwmdRvLraa3CwpAkhQzH99hng",
  "key27": "LTNqRrszFz5WCkjzqxASCCdjMN4mU9nNm7YfRjkgCZqqZrbhZZmS15UChBKpQ2QXiCeKZKFEhxGu49qMtCXFS4q",
  "key28": "r8C9hWBWjKQVcUKKqFZK5WcT9xrbZg6sgpwhKnDxFK1zzQiznB4w9zNjY4ZWJfSQ2fE8w2VvRQfWQ7TxcqL57fY",
  "key29": "2Ecr4HYsJndotjt7fecwEMWUyfrUV7UaRD2MyP1nCz8uwUz5sFsitGLLpEJbSn37DwbYH5twgi8JjrDDLpCaURQP",
  "key30": "MyqAVEYpUuDHtJPzofJv68FWXwWCvd2NFBitgFJAqx5VLPJJZfoyEVeVjvNriKCD1NTDmeJhaTUKR5t456HnpaQ",
  "key31": "UhGj95wNXXgqStYoXxhVG7VoVm2nMoCohbnWHvAzm6xK9MGC4gZTe2z2krZWy1DbC1VRqdDjK2d7nHfTuKphUAn",
  "key32": "4iQUDqf75gixsLYNq2pZA2HF9wjyouVa7v6DK6sZ9vAci1992suXmvDCouZ5kxT7Q1wKHdx1nTm9pBUoK3XMCfJi",
  "key33": "24TEiBfjRmW7R3FZf2poqmryaodciaHL4wqa1Dp3T85wwUWvq5yMhW7mBeFWMwgCTe36gB7k6s7Nigbima2QNk3X",
  "key34": "QrbtRMBSpiWVYijdRkH6mkWE2Eg72Vty6HHaXkUsotwgiA7R1ogXjkjHAiQcVn9Gyu3gXsynokbVnrmsZt4Hrtu"
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
