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
    "3jHKVJqU5iVRWNAyidBH4Tp8wkh72VbJAHXe2Tjdrt1ET8HncTCFrtSLPEDz9NfgV9fZaZxc3bxMAvM8Xtgarpra"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cJbQrSrz6atC36ZviWzFjueejZyRFEfqE8F73ndqYJKzPZfZ2WsW4R1dsq1PH9xqp3DZqmTk5GEozGPHWqV8ZFE",
  "key1": "QS4hrSnAdXkhFT15HQHcymptesE5SRKH9PHxneFF9tkcGwfNemokRvJa7hVFzJAxuCHWBKiBAN7DbJKKaRX5iu1",
  "key2": "43zBbUK5QHGDPSrpoTMrkgF6rp7u6ouXpHMWdqESNZqE4LLipHmjZ7mAf8eCu79NkAW5Y8MJwHfHBwu9CrVrgt8n",
  "key3": "4X4P6HX3ZAJDMAv6jRuv62MgcBP42o8r6JAE6DjZbX6cx6retV2YiMmMxDGroUvz3deMHHHgpehbUmTZE2by5EyA",
  "key4": "379nRMmGZtmKfiZvgxuXYW6mYURhVBafPWYD3HBSKVwcwAw61tKZ2ay9KTL6pvfMUUMy1re8ThKNhrxEvruYAVBv",
  "key5": "4fZM1Tfp1ZyGVFesFZmhKbmvXMdETeRKbpcSrARAmSwvSYyrQbpri4SxYvoyXxPekZi3gsN8Ba7bfhxqSFhyWurF",
  "key6": "2vaGz6JLhQcs3DxUzmxP1sZS4CXio6FL74Um81HUpGiVtxLVFA549KPA5sEtEmZ8kpAUF4VF7DXJwFLpdvbKjyvX",
  "key7": "2KYcgyMDk2Z48ENygj7ycF7FqxNQXBNAhevqHuoPMtyuanKxsnTDhV5aXM4d74p4cDchbwZ2XyevbDHuCJ9wCSCs",
  "key8": "2WGEZTrn6DEXGpp2Ui5pbfHscHrpTqib3VPfm5zaBqKJe6A6Dsios2Y5pdSg8oUd6pC8XykhPDdneeFDthhErhpB",
  "key9": "LY6HqW2dESpqEsJNMCGn15NSVYpNkXoLiKFEmVaFzqSqWcaDKCbdCpbR6fqWT5j4Hg1oQWUYbjk8tfxeH39rHPK",
  "key10": "5pw7ABdV9xAEe1qiia21zY5DiyzJJH9VNBwS1jQ4QsKH32cawoD635Cg84CCp7TeXSyKs7VzugsQfvLBCEDgJzta",
  "key11": "4vYEJ1L8CAq1Uw9EAueJDoe4up57HSkvtKwZm93c6YWKzzrBxR5do1VFeJx9RCfsDyQGL7giVwY2vGJ46vrizDM5",
  "key12": "4hdddrc67peXmz6c2HkFxRBcfdZUYgPsrfievroQhLr9icvPn6on2RYeiKpJHAgFiAUg1e9oPpxp7kjzcxmvaeRi",
  "key13": "3FrRWCP7uVmeGegqi79kiQEpoVRhT25kVMYQdHUcmGBacNgcA5z2x2bcf45X1Gt55JtsxWmLnRKxyoH82agrEvH1",
  "key14": "3ecWy7rUx8v34Vw86i9WHovxCCu3d3jXkhm2hxmn7ZXGZ1Tpxahu5YoGigco4M38rRLasfLRq9DJnxFWFRxtHZyq",
  "key15": "4NwhvJ68Js5eY3XSttZTxJ8QwKtXtV4inHUfRSF1tpzsC669Es2TrEFHUTaizkiKZwrRn7FYyVkEptU6NNgpHBqB",
  "key16": "5wcCPe1zn9LncF9bbWQKsmxv81QrhRinamjPuTcq6NuXhkc8yMPh9AzGsdoLch7VtLvjUT4mN4Jezba6TtuTcDzS",
  "key17": "5S4SMcovKrkHaYLHP7uXyezkVmqfHnh4aZDaugzcCquiBpdvpd9GDA9HUBW3tRA1h2Zd3eJf6hhmuPFfMPWD1c3z",
  "key18": "3f13EHFEMwn8N9xpGZMPuBhwEtWq89zzyU2YHfyCzuycVZciqHeTdkGM6C9TL68XmgBpTtiXg4hwJDe5Nbe7VKah",
  "key19": "2c8e3r7oTacRbLEXf6TnYP5GqUxp4u7u8zgsb3pGDHLc7EWhW8GgsJmFitHfLinHBAgHP9KZjQmrZWtVfE9fsoaG",
  "key20": "4BhM4qvBNKJ8mi9NeCmVX5F4v5TbVRr3b9RmCs3eHar9f2pL1WAgksxDEBryvhEcngq1DZhACsDrdStBnXAVjPPy",
  "key21": "2pC2HnYwvLMYDzUey61mDVnBG5X6qHQZjFcqUtvqoH8nUQda8cxSS8n6AnhCi2ZZ3n3BCxspGstwq75a4hX6oAsU",
  "key22": "23MGk92Drqt3bg6EZ15x8zod7aAUdF7QnDbGC3YrmJXHygMesNphtQ2DyVEcdQ1bH8Wt1hsxoUCJiS8U3sJLyqV7",
  "key23": "3q4mQ88an4fFwsk21pVXMhLuX6aJjQHd7sQzaJFcDJjhFK2RRRK4r5jywRmF5dPC4UEyAbLtPk9YoLPpzGqyP7ba",
  "key24": "5njnM68LygYE22VyYxMUEDsKesz5x8BQpDhVPpAch4ebSKrDM1CmApNMctVgnbdhrK8rwGYRaoM3UMQmhBTTNyNw",
  "key25": "4bhivzRB7pGM1gGDyXzRqSRDvPMYPEezxV5m9oBPGnzBzhB59gSNLSyxMwEWAeadBJ5z6XcydD8xhJWn1EVSxhZY",
  "key26": "snLE7AW7NSaWFUZLbyQkQvJ5Wcoz9126DYFoU82pwkZKHnzZNW9j9LivJSLx9fHfBLi8CMSEhuLbx7jmrEFxuz5",
  "key27": "5ZQbi7kMaJ1SvoT8sndcL3sxyt8FCC3zmpdCib4myiRmcgPNoc6yLpQnfLTtwxCsga3kfzwM23Uoc6LFnN1njaV5",
  "key28": "5g8YSWPyUtkJqyjaR3ndPNymUvji9e3TaBXAD9DDbrVApbtGV7c5RRskcWhAvDqVMHfCuJv7xt52j6ADAWSfmZzx",
  "key29": "SQ684uysPMMGCCWzgjXtSKiceLtnVpm5E9VzzyMNv1HWXHHZDfraT1AnXd6fsL1TKAP7dotMyiwmd6dDiwGMZhu",
  "key30": "4XpwWncqpFTugxMwbLMmxE1D7eJxjxv65k2aNaHTxWZ9kfx6irz33TRpGMmzR4PkmvS5G6auSqYCLaZwCNpBhUsw",
  "key31": "4MgFrsNsqkgbbNHfDQLKNDd8mLhyD1xUpWC5prEftoGQMQHTXX8dEU1gWU1RbjMx7Pnh4EPbJ6oGqiQMbr36p3kE",
  "key32": "dNqR97srKyqJdnWHiAzxGCNN7uo3Y3DPGbtms593Wt3NwvBJSX2rukyxU4PYKn7HZQLGm8rER3WnHat4wEdLnGD",
  "key33": "TYcBCVZKLQX1xPdGaYLrESy4LtGWvvtkkAytJoH6rvX7hd9VND9dN1vLTt9A9daWY8EEGFSrvtrRGfNAJybJYFt",
  "key34": "2hSdACopVgJN9234Jp4PfXM1MQ7pqBi5EmVL1p3J1MPGtGESAY6BC94ngmhQWBopUTi9FW4PpWah9nG1oxouXhkV",
  "key35": "2SkTWpmSdxHgMGPCGKSoyKLhotEC8XSsJxf8RZp3jNgDauN9wUxqvQiC6wA9bV7b2zh5pnqaGfRMYe9NWGgZnL3P",
  "key36": "2mQdsZ72zUD5mx23BUSTzhPMvUTYL444QR6gEtVDLf4zt3DztWb2DpDDWAcx8jzJDG4Ra2hnPkvsMEEHrjmhMYQc",
  "key37": "4bDQiyVTh5Uug7k6QCidDKHCD5yBKtSm6couQJio9amM7afc6tSJyLkJSy57qQnyHJj9kvBHULfsSXE5kNMgTTkk"
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
