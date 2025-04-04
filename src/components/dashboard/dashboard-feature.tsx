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
    "2tgs6wgd21TewXKhMcahpotgdkNwcwd56EfJNXUyw836w6LHJw4JTqk3wmZFH2m3T5L1dLzEwNfpafBHgNtt58dq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z2ab1sVvUzUpaaaNC38DrespuksbxRkim5e4x6bifQAEMkoXEfh4MfsLjcCv2FKRyNh1vHAKVpKtG7h8qgeezig",
  "key1": "5WLPt1WfVg3qxYdvamjrcp6D683WLXCCYGkG1hQeGnWnMtr2pM2T3i5xzpFv3Yc7RGaetwiA84fq8hfDrtPYi3Ne",
  "key2": "41WTuA8KavguhrrE9XF8KdDX3sZtVQrbpyfnWZksoV12yWhfvmRUxYAsuuvPxwmcLZezjNrs4U6gyT4UytmTVx8k",
  "key3": "5s8f8e1xbC1qJ8LyhwW8SEsbVhvxdZHBRyMu7UdmujEongbEuQtKFTCqJtnVRLZnyeBesGcUDKorFy7pGK8VuUuQ",
  "key4": "tzG5qCPgoABZktNhjEFimyb7kkJBbQEgBwat9LEHc3wPLK1J1PBnQo9VnVYwgyrE1Z2yjEkcNGE3Y8sqtVbY98C",
  "key5": "4aFfiDmuktibPM9PmtirJyxrtXxBBKREqSYsmidBfVzSQeTM5Kd3uHN7aafPUZKg2KobzgD3FMGqEy6irgGPDoMF",
  "key6": "48Ws6By2Rtr7gevgpzfU7op81hhzwmsqrknpopBPffNrz42G252aAikq2eoy3NgkYDbfxNRrcGcmesoi2pRvvy4M",
  "key7": "4m5YwUDjYmCmB5cckqK2vvSpjeuP8z5A4vv3f4zY8kyRnsBLH2T3wrsZjrFizWizbZKaZW8C9egoG7yXgGaWMH9x",
  "key8": "5ncMFL8NEQErFKWxU6e9DuwPNTHHcYZsWT1bXNDnBYfRqBViQVxN6WM41iC49BQ6dXotjAfrSDemoXxVhiU9C68f",
  "key9": "4VBWkkLn7NLEEoJgNwYBvL7eoZJoggSs69sifAQEHEt5sbopEnpVX3EFxfUmMSWXoUuxYg3Ssu6yRaCb8iJH4rG8",
  "key10": "5MXR847UUkBcSWrsUzw2ZMvXuLSExjq3Q6Po35obQUuSPUGucmvGBJKXQFaTJYF8rSFy1njgGXNKT6gC2kLHjCZv",
  "key11": "2XKeFexeDrpGxchgJjzyCXqDdjAdwgAg59BzRzeFtuwWTgdtj9TtFAj2uJQYEnGnEPFqdetJLtcLfvDcnhdfgS4P",
  "key12": "42KKdbukLKy2vKLdSYdD11YGz1udYxShuyGWbNi5BP3EtTRbayH5K8jJYzcQSwFASrxKVYPKaqV6o2uizw4dh4RU",
  "key13": "25B3HsyWeypFzXsA7LD1seMTUuohMuX8zHGdnizRmRqZTC2Q7Treng9vskJXPUskogfCofY8gbwvQwKpqfdGHRqK",
  "key14": "5ryg8bns5NnkUBhN1mwU2DAVcZuHzrE6LPQS1obnDA472sDh6ANFMiMvxAzU3HwJboEzWrJbxbGQwWVU6djbknHy",
  "key15": "wg6hAtFyZ3azZgJMVjMDJmWmwMQ5NbzxPk5nnNc9BD5NURHZYrwQiaz1fPMpYQUoGc8KDWf9ogxkdNQaAmWcDpQ",
  "key16": "sCNBSVwMtmMJq8cXdwwTcH7ufAqpU8VgyvaAHURreRNyk9ZBn7sNLPiij7HoQQoreJPg9FUfCvqyGQhd4xf4jYn",
  "key17": "4hBYjmVmQEktL2XA7q6Q2a6WJrbQyAc8V8ZfoLjPkhu5FGcTHbx2AJo391iYj6bq7LJrsTiB4NQCJNxDD3X6Sp4v",
  "key18": "2jucsYNfhFACspuKCf7afUgoutjbzK5YS7pBj4m9s6tM2wuYSRii42yw2at9kCSe65a28axbV7qyzVovTgn75Jz7",
  "key19": "4prbHwcCZ1pChbM83tFpnrdPfRrzodhdF7Ah9PRLJfvABc6LMKhKLfgY41MFQ7i7chjezyqw6sKuKa7Kn2jGAz4V",
  "key20": "2Th2pCgFSVUK1pgPcndryA188mDnKHSELYkxUiUWFcukMuukErhJ8MYbNfTKRr28iierjvYyCvzPo8UpxeEsAE35",
  "key21": "4AX4cvgSkZsdh55zh5DGjnbJvzQPAdKQKeFrxKsksf2g7KfAfMgyDiTNt5ZBhL6ckbeEV229p5BARDFDT9LDUBuT",
  "key22": "KgNUM5H5tJBpUrXD9dJjq8hgKiHjJMQ1ULGqGLphpziiBNAvcL45x3BWroDAEBFY3Lzv3mXEyy6kJoWLDxjP7sZ",
  "key23": "3kBtE3r1hXnPG8JBidr7QBNy3FDAmw6LEFwdvnrU3FXoPordoMwQcQXH4bZ8ZARfMYkXaEtWxdtz8PQ4pMa6W7Wy",
  "key24": "9zPUNQapnoDVzd2Ge4X6DiEzn5WRHM9QNp9vM4nLFnCfv2Wsm91prUCLFhas6rjC5toz7tPZDrky8gtFPV5m1V8",
  "key25": "2GZiiSQj81VvPPR1uMTuAYwEkqzwN4daZx6FWofxaYZmanfjwxVw8DVy78MYQiYdgWE7gNZksBV3Ws98eWJEE8Wq",
  "key26": "AcwuVyM1ZqeSAVsd6YhseBbd2Vp7X1m8a4CXChJHojEZKNLrqh5eLXrXrWxTUNzSnFXZVt7s3qMFzkWjPj1YM3J",
  "key27": "rvAsQE7ggiJtPQmFxe7NPhYHLNnofjj6ETr2vQBtD2oEwukMiAaKkGgVfEsxePR8eHbbSrUhwgZ5nh5CKifkfmw",
  "key28": "5GKsc5ym3a5dfhxJgEKBHsKn43b48tXBBGmMUYVXCzTWN6WHBWXE7R9BQte6tg5qkJdjYXSBXRvdurvgTBRzBr6t",
  "key29": "vHBoXxXRTkwRBQktKGbqZJitPdtUjRF6s9TGWBfPCCAf78ACuUkeG8os5P2RR8tkRt6txhiTQpZqKgfsY6kNcBo",
  "key30": "EdvAxmxEpW47SmFDW9SdLpVR4azFJXv4ss4t1jyvmaCcxeZs3tpLbYjHhFs3wZnv7dtyetdgoKugKpzfifFjrow",
  "key31": "2Fg2JyEQoE9xupbFe567koJZGsMvQqnopwNZePXgXk5MV6ekpoNQoN7E9y8X5TG4Ysf6kr9fBXWuCRnZECds8qcw",
  "key32": "5TzVUVkaMY7MuKdVmRGppTPFKzACEKXbYr23F72bkSuS8t32aksW4KWVBFwePtrKKkso9Ebjp42dEinsWLVBc7ir",
  "key33": "22iWiBXvwPikLKVvM4SoxcKFW8x6KTj1uS2kV5FwDsCC2TXg8WQSXpBwaAzakWJUz6xvBHbEi1TbzxYGXveU2xso",
  "key34": "nFP64wcdoYEDv1Zy6A67pQbmGHKyskqshB5qfmHxyZWVveiC76XLdbfSdrZN1Vj3smrSVECYhjoaw8zP7PUcSty",
  "key35": "5f4mhy3YvhbfaD1ituorSfks7UT5wUc25WFoULgT6jTsrE961K69a2pVA5jZ6rr6rKayDTDwZ6y3KQcwC2HVvkLw",
  "key36": "4YMH1z6ZzKA56kLX3z8NcW4jCGWQswAEgBw7cyKYWdza3ozKdRngSU8N1rz4R9MNzDoiGw4v5fh8hVvXQMbqqxZ9",
  "key37": "LSLWoS2g7Ff6qeY3PnjJyLSBLGQDvb8d5UPuNGb5yaif1fEix5nZHJALLPazp13baEwcWrktg1eEd3Q88vgiyt2",
  "key38": "2t8VhoVufK2vroWt6VGaikyaB9DhtgVny275sV1rfChZsCXhCwxKuHLJXiuYTwGENpDXcs5VgSwoqnNPAfnnsQwu"
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
