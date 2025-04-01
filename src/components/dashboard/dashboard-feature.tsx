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
    "3HWsvjAvjprKpXxeKNx4UvDTEfLhx1oZJnKkk9bL8bxVz5XbXkuAaY2nVFPQDAy4rCMUgEMNhhtLjkBFxEKjVkUc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ifj86xK9wwetYr88thdJB9s687o4xDBx9ZozjwBfcnpnMBMdCHDUGSx7qgCxQLWnhcNHnwqNKgXMWwXWkkRqRA",
  "key1": "2VtEYs3RTV7dVp7pkthnJYgCw8t61bgnJHy4khsuSxV3nVrsQm8fyrq5WRLmbiEvC7Z8d8MXB5DA8whbPB7t3yXs",
  "key2": "54jfumgzHHy8wUF7pRRsgEsACVbSUEkuwSsoaeDLCnQi6ziPUrQDixgbc5vzah3xHYLfWroRd6AEsurnoiq1grzL",
  "key3": "2n3zJLMNQ9UmCWzP2bQYgtCpTBCts8PCUfeGp44cZsyHfK4v4exx4ujagozE2vRFcNJQUDCVt8uvnbBNF5WTrzAs",
  "key4": "58HdR2dsJcHpuBYyAVSe5aPHUx6f2cGi5KmEpHCQqUYNYG1AzCvadfdRTKw6gRcVt6XcUU44ev8BTdTETnifv6W3",
  "key5": "jd74iaoiTqWZ328LHuPYkbcuxNH3kx4Cxu3M46MWzxp1aG3X11w1CbE9PaqmNRqGZKeYXee9C4JT4qWNPUs1Eam",
  "key6": "Rhf5hqD8cPM3AbUCdacnH2eCwUBcBkiuEmoVpEKEBVcQPK1YBM22YcmoRnv2dcnTKUiUJeMS7upPS2dqqm4vpoW",
  "key7": "5WtjhR1hqXbcK3FkFDetQs4gpW3xN7PT4L6S958jDVkUBzLMP8Kk9kkAc3LH5Q4nShJ3ievH8gMiiu7uTAVaTKhr",
  "key8": "h7JDg2kmBj87REDu4pHJV2FyGeHmU2DDrc5BKjWqze1Y31aco95d3kQ1AXJijLhgnju1ajTQWiWTPvc7oks6Y92",
  "key9": "5t8GV5dJcfgmK2qUntUD99j5KbkNAv3qtnS2mrkKzujejZD6HwozBuz8JenvkFP3q87mR7ZwHKEgZZSbzwr2Xv6P",
  "key10": "4ux1XBjoFPpV5j4UeHM5Xa5JcJZU92mkFSL97TwUdNotFF3cqN2nczyp6zuj4hN9jtWGXnn7qfX6U4bxYQvZjd1R",
  "key11": "2nxeoxWUTBQ3AV7zVcedvNevz1VVqJiY2h9g7JqXYhqCJMBwKE7PEF7Z1U7N4DEfiaa2LuzftnNFmm9MmrWKBkZm",
  "key12": "3NXfVJN7Ji7V85NPhE3FhdYcCGNQomzbtmvQBmsZCZ5JX3SEdg8peSfiSeioeZ9rv2nGJuy43azhKDkgCBxFtNSK",
  "key13": "3BHKp2kB3pZXnumyUcFEohbCPe2knrH7fL8RVnThnA1Zh4VBEa5j6CFqhTT6M3BXtZn3tT53ZyySy2hq6iBF6K7Q",
  "key14": "5GaMpj7vR5E6ouQsnN98carry4vA71FRpveke9LJAzi8Wwz8fBfjHFZULQzBcyjva1W9brtu8Y2RpYVa7UXcMhVt",
  "key15": "5VvDUCUSudUFEFEQzjuENerzqwaqvaDZAeFTKVnuzZuxCD1p1dWVNMn243EPbrWqsDYsBJDjXfv5pVCui5E63d6W",
  "key16": "55BCo6BsDnTSHWSmxu7CPBJ3QyHeYXPhGDx4WzMPbezePTGuC6rcHv7bke94CquZJo99jLZiEeX1pfnebqTVAEyA",
  "key17": "3KN4CdRKmnEMAA9bDx2wBnv45FRsy5qmvFGRDyWDV6S38Qw7JhsWAbP2ARXGM5undcstEJgjgX73owxsoMS6uM8J",
  "key18": "5QFUXu4aC3zCW5yckouYrWMcCB6Cf5FLYsD6s7ZX37ajPSNX2qg3evd9fCzKf8d3ef8EHnLRHsiqfy47qcPgxamm",
  "key19": "41prgNBQ4JLV9LeKNLG9uq8njYA25zf3fdG69DnLihRWbNGhTHTq9APGWiHS9ammH9GxXUJSpA5n5cazwSjFcFJs",
  "key20": "4yzPo4p9BqJ7innDo6BNqDkApQzvAwU1z8vgS4eUNkRjabacfu5SY4p4i3rpX2oHXDyaeBmchR2CW8GKeFAxmmis",
  "key21": "XTvAfwzqreQvtu3hH7Xe7EaTEJuc7Qrnn4LDGJ1P11CUuJvPeZYkk5Li4i6faPy8xZLaNF1j4iUoxBjLPpn1JET",
  "key22": "sMmGuCVVjpJSdzTZsYNzE6H8UoVDxg4Aowxo2wwbJojKRJjCoF13pxudU39G4jFgbmvjjRb2rrMzawxQgrw6VGa",
  "key23": "2r79Mcv7nKf75CnJyBdpFojvLG4GBpbLyG7sAHYWXdPoWZYiBXTBb5JNcko5hArS1LSYiLAL3akS9fXpRSeRHgqD",
  "key24": "5Wk4UNkvX7rfE2mFiqxVex2R9wM2ABTEJrTBFW4e6iQGBN5vqehW4vZuousKyZ1ndfWxkUAmnQkdHp98Bc8pgvVm",
  "key25": "24sMJqbnYMHMNjpB92ztkfV7RGfbY4qFPvFNqLoZo8U6dvkmaKjLWwZEKAjEPApAm488RSRDKq4XMMnbN7NZ21KX",
  "key26": "3R3j9emi9Xbs2cRFMTT2Rzk3sa455coi6mtUNi4EebzNLabZzLwRvGjrhvWKPVb1gsSCbk7AjdiMCK1TZKE17RTV",
  "key27": "C3wwAQnPwoZXeNd1MqQKNSUxQ55PSSSGSucfyPkmUcrQnb5ZWqe5ZB5PnqEdJYryWVD3zCHNqsdt4tpD29RBFiQ",
  "key28": "46Df14GM1CEYYvhbQXmGZuiFg6QMW75UMxmrn5CHMNfbk7HNZoUX9iox7J3J3vm7rvbNxc1g9TwFdcWHJqwzCxk7",
  "key29": "2Y4yqk3P3xBxTj3kNgvp9hSSUtpLFbCAP7YWBsjFXyheyFt7KGnv3hCQCu6u243xQjbRZ8Q5ViWkSK9YvtLf9nEN",
  "key30": "5KryhMmF54t1GczjdszjJ1LzfHmqMWfCJbUuSPPPHZyCrGFHepUq6rfQ2RQxDDFbaLF1C7g5F6wvcj1nRwytgpbL",
  "key31": "47BwZVAdPeh5oRba7ifGfZuVSDyVv1BkPm591wUSmEDYbkGkg6FaKyRbTAEZSUL1iC93YGNmW4aSCtY99z8Pj23o",
  "key32": "ruH7k9CT9PVWAGje11GJcutekGyaXDRFivZTkVX5aDReAGi6H1sKqF3q2VZhrfY4X97WjsJdjiaFoUzqcM4ckYz",
  "key33": "iay9jDEK4uiiKdPwR35Gb1YZCF1QKGknLFvdDgQhdiFJqHwb9z6CY6hoQvrmaDFf6iSVwRQEdjiCwm8ahqPazSq",
  "key34": "4LfXo9u67Hdy3rMTw5a7aKFRD2Ws7iqCktixz7aAs2cRLxNPvjR8YtBgwjRhRLHXoqkqXpHutetm6asf9J9AubHV"
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
