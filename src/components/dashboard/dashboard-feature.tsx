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
    "RkyRxSyRVYSUFRCB5vCsj5FzpxMmoGPBmjfQYHx4mWcyDCpwbhtgUeHdtGbd1ADptLvSFWLo2P26GGh3ohcgHUn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xd6us6pDb3rNuDauvBuRmkSPnKFsenErXdev2koAxxivsThU8ary8NXxwLBhLhvJsGWNy5cCRcpcBifVS9huyHZ",
  "key1": "5pDT95fiyo6hiAvVgdnDpeAfk7rWfvhg5bsV1NQBQfMAoxMq4eKXdTyx2eW6cpYDiywaCQSWxNWc11kn2xahM7wA",
  "key2": "4AnW9mV4ayPMGGrZTQtCWMXf2XRrr4WtfgruGg35Xe3iECDpo7WWKmt9t13kEUKPtsDsbMZyMDWsELshH7qqJbti",
  "key3": "4csaTRjz2C5pAi3fURz3ZC5SqqBTuDZGbuD1N1suLay2AJ7Ug1vgG3BUYMyAuimM9iVhK2Hq7TLeQ2sQK7LpSrUC",
  "key4": "2yxqSTQib1xaw5q2vF6ALmts6EW4rau13UzV9C4eXopgjCbXsDeXE9A3p9nnDKbHCxer9cjH8K5jvi9cZV34Kmsd",
  "key5": "4tUgzXgMC6AFdrRndLYUd26thwPojJLEFG5j54GyidXK73t5F41EjvagCAZnh1GtJgDjM1wyZHgjimEcX9N54Azm",
  "key6": "4ZjebxA1WNh7G9hPRAWs9EFSjvCX3i6bQhkqoA8iYJpQBYFHYhnsWE1VxL23Qeiy4ioo2UwQxZU1GRLZcpMnAG4F",
  "key7": "4MQXCu8quG43DDSPH3NL1rDCzvXusYzmk3BZTwaDiVu2kjznJXEeEFTvH62MLdQyuR1TPa5MeTg9KcphPYPKFaWt",
  "key8": "4wPMDRzBs3AsVbZ6GtBW3FQiDTjZKjforpWKQeXEXz5HYP1EKqNr1JgJjaP9gNMdhAX7Yy8YX6tdFH8VyEXEBAT6",
  "key9": "29qK4yxcf4JeQ7QT35h2bQuFxEq7aZWBGXCgnCpjh788W2TBCLXrCUdmC4Yre4YtW26HdvCsMZATyG4p1XbU1aNr",
  "key10": "3zuXniQnMEA73vCsLD88ZDbRZcBn7nh8vt9aTASCYAkEEkns2jCpuPbPUSxE89q6357D5xaBWHuoe1Hx5mwtghit",
  "key11": "2ktUbQLHG4VA85UnGaZCLzbSj7pFToGFbYxArkQBgSXJXDb3GVfWyfwz6UVXvNaGDQPKnbKn6Ytnc6uh9fRP4o7f",
  "key12": "2eTbyhpagGgZv6vipqCtLR6Vu8dLKw4XHLUrzQEePyzYBqQ2P5gDj4J6KCLsZxPEQrzgA5cZuL9vz8vdYs411HkG",
  "key13": "5QHhJx4KKNVsovbWhsPZQRBG2MNm6DRKfHu1uJzCWnvpt4Wv9e3ToyFf9eFVw9fekBVg95vM3pWQ4sn4qtAJnsY1",
  "key14": "3tDoexDESjdKqH1dZHA3vbmcmKVTWqrrLudi7cSgDEbGTeJgGf8p51r7uHzgvcML6J4AQ7Yk8rGTNbTjk8zyn2go",
  "key15": "5nEUAmDnt4NbqY1MBeVAt3TsEzrynZNjSDGCAoEK1SELG92yao5b31gxTLptkuRNeJhPDXWa1F1gnik6TV4zNWUm",
  "key16": "jVmDgqKzE5QWzbDtkr5Vp9ZtSbqXkP5MwPgUysTv9SFtdWPNZM9W1kgPMykUoNfx8pLV8e4a6LMgpFkTi5h8tM4",
  "key17": "4LBJM1F5BJdwCH2ARskei1TiwjFmWgCs6d68xrXvMiAJ3EMZDKmcnPdYjwnqhpofXrCSXuujN4UygCPjk4GeBtFd",
  "key18": "3Uiyf8X5bJZhoZqJYyJnhGEiipK8P78W7wKqDnqZ8tgHGKhvHx7vbmKnn75ehDGqf8y4C53BZuJefyv68HnqpFzM",
  "key19": "4WdZUSe3TQBuJBfD3qAwd56vQUxUdB7fENYFvdxQArCQPPoUoQJXDJnyY9epYGzCWiddxhfADs3ULqVEBjhyoaYS",
  "key20": "2ZXXJzQEECKqbCvrPjdtN6soeKt9UMmLuT5ExmTeHut8akeMvZkpmcuFqogrEBMcHC7Jmz9j5V2ZVBoMnXetgQrM",
  "key21": "4gSi2naAWdGxiyjqVihuHatLpMUfCdLDSUAdpug2jS64YBH9evfKSdNGcy2av1zwfh9B1HLyshRQuUZiGtSwroud",
  "key22": "4KXYLTifXyC98HwzAejcA9EreQDrycgd1xuRRpakHojJFhzzYFdr7BXnW7pR2pQT2XSdFPihPXrQejpYHTEcsE1C",
  "key23": "2EtbNwz6rjiGzsJyoKNBxe19FLD6d9NPVuWdQPpBwdvxxpdptPv5GcbXS33c695BbQ2zHAuGgi49dEouUAdk7DKR",
  "key24": "3vzeZyAxXTuqgDrTfhzLxTFAUK1wqWvtWnqibkZ4VvA3jf2LFFMABEjZgnmrTFxoVZzqfHogbLjwX9drx43T5coa",
  "key25": "RPpuAMfk4wYnxfKxCvWQch6N5q2GMmc9ueakrM5oiY7PzAoFbP9aK8HnHTEGZNCwmHfYSAiMc97RZYPALQbPBkk",
  "key26": "5SRWkd3WM4kg1QY2eQrjMbKRXHzSeQVHn1FEz6RxHxXsF4mV7Ai31sDfmANaMh6V9wk46zYfDcfX67qmifrNjUUb",
  "key27": "2J8ovhsu9GSs9Q2SoMiywzD6AcFKrbEtPDFUy8UXbinVdZczN9LJR4y5Hj6sy9tguQfACzWb8a5vcqpcAb7q9LU6"
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
