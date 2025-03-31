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
    "54MUD9YWrFvL7ox7bAoEUxiuhRtRP7mCPuuneLRVbF1JR8Vx64t1tPnFJzfYGY2hbKESFXbXq2QyNXnWpFZECVi8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "379vm2AGsf9gwXx3oGPmig6Bi8k8iKcx9ipiGa7n5jEgRmguBCKT7VwitvHkY84hKWtYzKHdvMi7zkEQyx6zCaTB",
  "key1": "5zHcbmSMrEQAAwuq2JmVvxTJY65XfsPQL9QWePFyFfAsomMdWT8B3hiZaScyQvKHCMxeV8wPTgLTT6c5LNkGvcyg",
  "key2": "4Xox9B56Xvo5AbcCaWMp7yPZmmNK8xpbJLesxvxZ5fc9GujaYnWFNCbgGKmhwZPiMYaBHP2ud8qS6wJTYBoV4WXF",
  "key3": "2wtjHDqjcXcYdsPiuMr4qx5zP2gu3QwTmpnKgHbC1xU5wqdmLUXTbuaGhuozEdEJ26TMs66py2TBEadqb7EbpmMe",
  "key4": "BiUWtAARWmnuVJWCrNgmzm5WyEYrZJsc9Zp6oBDMAFToaxaXnQASpFv7EQfijCRPL9N8F4Jh2YEhHBEuVtzRjP4",
  "key5": "4MTmPa7E8RoEqiJDsd51PQazKioRtQmAhzuG2xjkm3FByNsTB8aL7PqQaV9KuV5cfau5pcB1YNqxDktmwGRZ8NtE",
  "key6": "3oDicsxMsktrE8iN1NKwRaZw9Wb8HQ4D9ddtAheuaNr3NQ55Tw1enGazFf23jCursfNBxCByCQWU6v2GiuJAKWyt",
  "key7": "4TCh7oE6pVJ2TbH8co3aVSrBJ3Lx2w48DJXiK7hCMSzCfvprVz6691zYfZGAFgLeHKHdZiQTQQg6XYNjiHPCKXLL",
  "key8": "5jd8pKoZyzwxPEf3BP5UGf5QCdj2SM9VDiLKbRbr3sx1pnoTuEDqRcviCXQdYhzXxs6kWmHAi3qH7LcYvg4rChMu",
  "key9": "384mwEhodC9cXxBueTtcAznyADWjzkJE3WvBbEHsrfUeZPAu6co4m8jhd83jmJX4Gi8HkcKfGgDw69HUz1LPaFV1",
  "key10": "348sSKw2LHLcmpYojUu5uXoYHitFwk95A5rYSRhMdU8geLmscDgK1LtR53LCn2qsK1goUN4kPdUv5q69fpt7KFGM",
  "key11": "29BXGtqKkJJUrVaKnNAcGjkLi1VTVG36671vjNiN4gnUfqNXzRGHuBEhj4fQDE6DSTjV4dpyGcvXZzJw8GbCbiop",
  "key12": "4ErLYGFfNREhS9Epy7LmHeoRMSNKZwspLCvY3qLLiFa5QZMExYqPT6Nev9FyhXS8DFS3dVmbLi1N5sE8BfDtK4Vc",
  "key13": "6tvU85otqUMQN5We8h7vnXSH4e28oiTzNae2pZTJnw34Y62shb8BooBkn9D6TkZ1mdEGwWYgVzWQ64PcwJT6FRB",
  "key14": "3xyqxBaDnPR8C9LvC99Qu7qB4qyBGt4zXG3yUNBiY7X3YVKCVzrcmjET6yh2csMsxMuyZie2ntyBgruJNZfLqhi8",
  "key15": "41RpVobwL5BBZRo7nezybEtJzUGC8of7UugGWJLvLuzt7ouzZjMbx5X2iXbSL9gLwiFhm8dNp8SWCiArUMqs68a9",
  "key16": "27PW1qGrHe1TrpyDxy8QD6r1hTnQUkBSyufLdnbwxKMDiF3SooRACJnDqkCyRggoT4rK1uLVZn13WebRb4LcJXXs",
  "key17": "4bJEN8YpAW7rf95c21wnm1VvHnHeS4xesu7BiXo2sUdrK5Wa9fPZEuYJWJQGcAi6x8gUy1Km4pLsfTWvo47fzwv7",
  "key18": "33UbzFdSrnxzCxrStpwTeP48bqDqCLy55bQY16wjiAVKErRyUtQPq8AWYxYgYrXv9gPL11XV7oZDzTDJ3akDh5Ha",
  "key19": "HauLosGgMk1YjZa6bVmWh8KfQyBWAzXtxxBycbH9JBM7XxnqJsD8BxzXJU8G92UzTBKzeQN8HZz5Gexv9HsaknC",
  "key20": "3KeUYPj1tEEcTuZNCxJ2U3Qfrd53PgERRNQSJwHYswmEKesrf4d5RBHmomWzgi2KHKW4vKQSUbb8qUyWgRX1SStR",
  "key21": "2xAU6PKbEs7pzM4Veia3ZDrrDndVsexF4UaTwCYVEkZkMvS51XtQtaiCfpKRmAGiRXz7UQGPzvF2uBVny9QJ58Uu",
  "key22": "3rm9Cct8G1KvFQd8HzgFtV5WT3nm4nZRfFPSGUfcwx7tWT7xPrYtFkijZDQPYzxhK2UXyDsYrGiscMPj2a9H8pwr",
  "key23": "5ibLcMccWHxTwqdhFAav8ZcVw5VnXSCzMdDPK19wKC6Ak4PS36S4ck1NeqFacdW8gWmBEBgzFAyUjiVTS7Y3nhdj",
  "key24": "yGyTNtFRwsC4zGw8bSF3M4c7oXS93nQUtBMyt4Bx4GyMKW7g9AvaMWgpS6kM4i3unNF3Q85kQJnuyfVC5V8YcBL",
  "key25": "3AfGMbD755bcVSRq2jrZy9z9q3XnCivRXyg2JDnqi71ihkhj92GVwMrz4Vya7y55N6EYnp6nDBgxpywgaiExwHiT",
  "key26": "4WCtwgNvZnCeKhthNzk3T2wXxcJFzcDTJa9B3DoxtRPPKSPqiysCFfEc76cZKpTiHVN9zE5ufHR24YTDqvVvMLdr",
  "key27": "58gZGEu9TrXgjsUgHep9b9bgTtEKiu9ekJ397PBHN3UWmZzFgnpyst7252qjeRzsgLLDXzHa8eVR685a2VZbMAac",
  "key28": "cvTgcrBqpMZSx7aiig4McAAgBJymjDAuoSywAAtxqFE5bYCtCmHAYK17EKCFkL3hPtd46tiUbR2LFZoznGVZXbN",
  "key29": "4pvM4S8LWdz1Tv156KbwZvhJ4nmoYsAxYYFRfRr1PgmCLfjGkdPyX1dsgGJfAaTuDCamDrE7EN2SuDANWLxYuBXm",
  "key30": "1BQtjomRyQswTiPccoWWKAzZ4q8dASN1fwqjBYAvYENmA5WsN6aVsxK9bQ1ENDKLURESMmHYQTknMyjxDj8XWW6",
  "key31": "2Ga7Np5tw2k871PqWNr8Zz5wE1m2K4hQqV23uxncGqSeHoqnrU9XyTKVXoPiWojVrjQqCnn2rm2GaJhDdepgFPta",
  "key32": "64zHmm9gHknkz4obT5GtUBButzqDNLzTudjf8sHzbc1tauonmavZRnEXzbRJwM5y8VPMyHaRshsKbGCMFUPHGe6Q",
  "key33": "5ASwxjPDUbTuZ54DMGRXgUyuUq3PHv93F4gP83ZbH2pckEeM3sEVWUpYeEuppZJJVXunqXWHQoPXm7EVb1XbarE6",
  "key34": "3KG6xWQynHMP7Jkh2HgmaEVgZ26GuVdAtdsNH2ZkW1SjUuBXYtEeHSNqPiJ4oknqKFseMjeLjLZGkpPZAaqp1gQT"
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
