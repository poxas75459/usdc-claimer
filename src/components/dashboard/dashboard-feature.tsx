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
    "48Rbhjf47RzzrSQkuQNT1TKXWGWs9ySfTTBTh97nrFFdZKMsDK47X8M7R56XNekc2gHdEg2NAkQ1PxtXdytF5wyg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kRpjR4pXSu4mfA9rveEy9hEZ1VdpUJehqX63kPHcJXjxzxTaixUV5wdFDmwBfVEdAFw6WpKb9nXWchWiDFeiw46",
  "key1": "4pomUeoNa14Tv2rwzFkr4cuJz68SpvDsP1gmXAWgK7kZ61fUxDhuCJuLkJRcH5vwJU3Y6uoW36GE5wYQbvCCXgCJ",
  "key2": "2d5udH2MKXBFzntY9fPfe8wt4c7LKtRqt62nssLmcqwhcwVWkJSHNdwLK8obcWLtex9rus2HgBZ7craVdfv8FULd",
  "key3": "AVZnvNCtYFPnbc8yJPCno9GPJRcFMcrQiFvu78vrhRkL3bJUyN4poJ3xXVkHAhLYU1EquWLeuc8o2ongiWfeRyA",
  "key4": "4t25u623Vtaxjh9uR33q9G2pq7CSZUUJnHWDFEKsrydEj5RyS6UFAXxv2NSr1RfMyamFRKZmKkVtKQ9hGdtHYxfn",
  "key5": "3z9tQAhm5MkdkDF7oZDAmJr5BL8uuMZAxkHjRG8rfMG3iCbhJYsaRrWrFGrCbxt5PD4krFb7auddDkERDD1UL8V4",
  "key6": "5pJ4ifPmnyowjLxMaWvZHzPR19m4Cyvn9i4FR4WTx5E3HV6W15d7UNBc6z7XGz2w24n5PQ7LvDiu1A4JPcFKorXV",
  "key7": "2xeaYahDf8NkJEckKKfwH313jjAM8xHZcvtDrE9MQpr2QzndPrEtcy2AhJPMt18uKPQjasmVbf4Q67hjhVPxKCAE",
  "key8": "5pdwrZw8DHGJbpCegEWWm28Ch1jjWn4nEVRMbWwCPM74KxZQmCFvCDLXJViHWzWhEyUQYXGPf8dt3jtC4S8PMqZD",
  "key9": "2NyVCYZTWPRj8CBokPFFVzxWRGiHJe2oXbWebYNvrAPLDD5TMCFWn6krwGJKWtxDVKq7ZwnEo17i18UfmoD8NWLN",
  "key10": "4bHVMvft2TFQAf634qhd5GpgsaXDMKzmEWQWDgVM7cQkLFsL9YaVc11LGkufGoi3tLcdzMyVcUziTUmEqctHwEGv",
  "key11": "43rqLiuFb5sx3M1se6F54fenZ6FXdPPpfkgcktkAv63F9e87hMStnVFXbbaoxnU9dkMVWZprYFMdS271PKdovVLa",
  "key12": "5RJ6xywrbwFZL7hnCAz6hbWosUvoztuXS7cdj9GF5SVkkf1svs5GJXnywTkrwLTpoqFDqdihMyLYrrQDQw7bDZLZ",
  "key13": "4H9aFQxQzDXSYzroAzwLEoMiEgoHY6VGLgAPCQGssX4pKZktWaCEiee4xeEwGxaosHZzdejxvaoK5WpLCofixCic",
  "key14": "5axxBX7GWQ4iCrANAgsyaEULeQbb4bXKGDP7x2As3Q6NPdYpQPGRjxS1CbZ5TCEWEfL1CXxU3j7wJYN5db8K685x",
  "key15": "2GPPy8XopJGg8pY9ar3n6xVoJeYMxaiKpUE7TnHeLuAjmZ4frDPB7gfpLcjcTUkAx7iiJUufxxSjR3fWkt5NnLBi",
  "key16": "5fYYNkdcGjJ88tmWD6CsaFv9A6QiqHcdboVTGVz6FZjT4TRZMWrxcthL6ofeiaFNcgsA1AHDg3V82iqgXhigLqJR",
  "key17": "EA3jA6A8jvwPNe4cLMT1sTPbyNgPL95KWaVNzxZWCpM7Xc5x681mQQ8Kvx5XLvdGKJBwC7p6X9rgmhXBnJzSULS",
  "key18": "4cLkihmU3r7U6bBnYG9mjxEXSWc5HTJfVbowPnXDNP5zAysmjQX3FZGHbdFpS8hoxLV11SacRsNeon51BTM6Nbm",
  "key19": "47CCiQJbBNWFZDMaxNA9tdHEdt9aspg4uUqopwXwy8xeXGCzSjWQZpTbFy7iMa6TTJhXJDU84GegV5TpprGC1bHm",
  "key20": "hDvTxUoSiYVyxW3BwvkogTHQpDF76iAGYFMMNVGo15bz5ZfpNu9biF5HwNAF7njvAC1z3MikknQBCceax5X7m2c",
  "key21": "5LhvLpyvVYzfrN8SK7fKZP8S177W3ViWn3gtKzJTQpQX5LuJg3SLG1dtRM7YLrnnF1efhfjBuxaQYADkqkYoNby5",
  "key22": "2qZivr9Zgh75Z3RADTg8it6Yk5jaeL1peFbfvRJwH5iBoQNHM3C1jtekjDiGmrVhc2SjjQ4yAYNQ4eja22Pz7jM8",
  "key23": "tLUnQhnveWfCKuRySt3ppzZ71Z59GgK3FrcCfkSjPfLhVkhwqkj4rfXFTQTCHEtC5en6mMseD9KvhLDDCAG9LdD",
  "key24": "PqtKaiXGdaCdT8rfZDLSsyw18aeWCknbfN7FvUPa9AYNiirzRdRFLPVWcS9WnB64g3FZ2Nur4FYMQLKZpmPwGQ3",
  "key25": "5b7sqMWsQPNXHqjGgSjRxnLd6wLwBCckddEErd7WLvBUtbmSWUeM1wFia1TxbaposU1kv7gxzsTGfiiWY4T64a2F",
  "key26": "4noWwvTATP1daUnT1kRogJGrv1NukvHYCPAWZodhQQhPzkNbprNzeiZt7GKbKs36HDUiTa9recLH3MhbmLbMLSXY",
  "key27": "5JkKbCTF6fn1oaMfZCu1fiQ4HBUjsBkAGnbi6Cs7cTLffUT1kPZMz5nQX74nqfwK5JZXqT521uuzc8DKyi64s5g5",
  "key28": "5Kwc41ScxoGuSukpU1qgrbHMDsiFzmbHCm4dZPasPeNNvNxz38rHmjGDDTRrmdjsG8b8vNFW1UTXjw3vPC7oMgf1",
  "key29": "3kAoxr28VqXpgay8tcpUcd9KJRtfdwF5DT2CKfmv4AJaaVufjVnikmozMUs6Hs3PAMMsUWYDmPgxbnccdFLVXd9F",
  "key30": "2J9QUMwcBwpSF7R74tzYJU3pu5PBAua2DzMNq9MeCZqCjCAmYj9aNodGsHqBXz4DyZQQQtzqKFH4vBq7H7Stac4h",
  "key31": "4UWA5W7uUG5V143t5pdHXMmhAViGhsVxHSenqQG8p54xob9qWKCrZupzwLcZM4AZ5gqXxn63VAxjCvKN6bEFyGGP",
  "key32": "4tUeGxaSqkTfV5gfFknDMpt1uyFgLxyUVCfjpwHtVT1VEYv9PxthXvKjpJ8VgjJNZrUyH5fa3VX8qFCG5wa5puBE",
  "key33": "3b81ckCxVmZ6AVUBPoMzsisXhx5yX8nxfoz4zoePsHzTq1PxCCRCaiR5qSM9Q8GV1kqB8yXDzQYQioy1Bxv4fUKZ"
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
