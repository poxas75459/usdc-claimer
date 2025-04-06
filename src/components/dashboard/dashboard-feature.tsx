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
    "3NQvtkPfEvMMgeiGV8jv8nETdfB4rD4e7AG48jysPUAttobFzBZmnXSfTUc4FwGayUJmg869Ns3yARFWj75a866h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aYo3H76DAL7wxdPEPKEW7h7wAyKxUd7iHNtkCXkHSdLSNGR42vQMivaQtUAbr2TKXimN7JkGbcsUKH6VMx8FmUw",
  "key1": "341cgnfjJQ7uW3yxBAJJGSHiB3CoiiSovgtiMB8DJZJtq6eWjZB7n1af5Qf96brrnVRZ5F3s9uCsVCQH1TFGM2fZ",
  "key2": "p73yJwm3PzYVzVtg4rEMmjjAyuf5NGRnzEEnDk1s5rvfxQARnUR4NHoXPuGsKqKF4P4Luy6LdQRqFUQx5EdQf9K",
  "key3": "5vckJvUFurhszjSzdEJXHefMsastQvapNVxFXBZW5a5pbxBYujkwt1PaV8CgAHpGZUmRVXjw2zZz7j9YPWeZxrhK",
  "key4": "5SfuEGkpw4MJtbTFddxRJqSkcbpGvEML9UtzL59cZVG4YPQkcbUhJgLdvmUJdiauPeTztrc3gCDv7HLHh83NbMV7",
  "key5": "5VosQ9SzWrBJV688rDVhdj1ZRrkBTAGTdeRYgCHZnBt8yB8rsWh54w9n8sR2p2nKa91csBuNkzYj7P81G7YdjrZA",
  "key6": "5BYT9wjbCDMaTKZARBU1HdJc3FDfnaQL1Y4PZeBPtxfFgnYbEL8VF6Hv7RcaV1AzB8Fukrd4MoYJbKTcawmAy2XD",
  "key7": "4VYM8NzghCRCERc6jwRdCFgutRBQVssUwEUNkfnUdfh1S5YfLG4AyCiBUSLFrJtEH68ZWpEPpDkQViAvNQeikp9c",
  "key8": "433jF5seALeGqRQeiiWZ6D8zXiYYPsJ7YhpaDC2eQy28xY5Qucjcp2xgXaEHR36rdJrvYYbwumJQx9awKWeVJmpw",
  "key9": "bqShGY72KcwxjAeeyaNH8pVKaA5HquimyHD2kVnyC9gnUVEAvQ9BVLQCBxz5hPM6KcN7VPkp5CZgCTtz1sxMvJN",
  "key10": "djfVaNRxXzS774FTz2FuSwHzGKHSuP7vThn2vkpEpKAxLRrdGVDSqCXH9JeVJ5PBg9Uh5ZNEj7493beuPcg8sG2",
  "key11": "4yU6y98rQqZToU7pgr6YXvMkFnxVZRwESRHvdUuNCR2PCZjT5c9tYNZAtn2Jw1c95vVXYmafUgfkyRri9e81orrV",
  "key12": "51fJridwiVqJhWpbVoM9oF4gSeFuJHY7q3smLAfSRgGyV3Y2V1vo335p5uo4VzkW9XtAziJwxKc5sLpmVbXbkZ77",
  "key13": "2BpTM6ZKy8rsd79FwLcUpEQFwwt1dkLayVLgnJRQMno77TK2xgr9pw8owckzSh8eKYg6eLq3vD9trokzvejcLAhZ",
  "key14": "3RCq5LFp1ewjxBWDQhd93hJExhnbo6z3B9y22yr7ZB3cXHhhCNK8F7MQgkLJGAfnB9ST1k6cZS5t6R5WkMedP2LV",
  "key15": "4pZ6bUxdSjZvJA7hpPugjadXVXAx1Z1Ww96onDpfvu77t6aMwmG5krKTBEjsRgyiULFQHxzzmt3bstLiNEtBoeJx",
  "key16": "2cGGkukDyzTPsasaoossUvH3Adn9L9fHtrQZ1m2ewPXWuAbwgRL7Duvo6Sz8ZnoN2RJRtMDTDYjacMNVD2TR1v2k",
  "key17": "5UyjKMZtha5Vtb8Sh7KuHZ1bsH7LGcRxEp8ftT6oXQjGce8aXKRYZdjccfyVTQXFW2GSBkNrjSiga5q1qTbz8dG2",
  "key18": "3oLuCemaGTPsD8MathqU3rR1KnA4z4DNu8Yjai4sgRsGbRyy4acQj5xS3ywRZbFGFghKhMFrkzrd1jbrPXsmaAV9",
  "key19": "N7jffJpbsuzcdRcZV4T5rgARmUJkwLTsfJ2duUNz26NedDwoPfnJ5aLMGqfiwnpSDZ4jDDX9s55R79GaVuMP4fn",
  "key20": "3ed2VgTbumh8zu6tYcgD6P2rrLdFYE2nVGbbNjMvLQBq9wsLjtM64kgNqD3ZjHQ39bVkGpe7ZqHubfmvcPam8ZFJ",
  "key21": "nXiERhr24pxQSikBxLwG27Dyc9AYZnXaPABeWajc8P73XWnSVNzr2unWNMW6sJsNdP9RCre713HRbwo7iKYCZRc",
  "key22": "49qQXRg8JytfV2r67yB1EVzmjB9nfAvcCxShocWdrsDUznJ3uJ3txkMKwspAs5gcD4VrPWW2HfkWH2UwRvA78xNL",
  "key23": "2A4ComxrqePcJuj8E7nwvg2atR3Aw8tptMn7X6CbhcVup54aNUxs6YftTH2pSgY72wDdonwVjksgkExg9XS6rWUN",
  "key24": "2Zj2o8XjXPo4wTJ5J4GtLDpSG8s6azJi2w7XnjyqBrxhrhvWc6osf13VDPPo7z2weSEw8UMJYd7zynp2kCyQrLo9",
  "key25": "5wErjSNACqs4bRiCxxMcTxgo7ooJQnMFtYi9N6Kdhjs9fUqMxNdvU6J26GZGGPD5pjcgYK4LwVpb1zoN3U6sHJtK",
  "key26": "2jGssJHFVHUKySJptds4hkh8FXibmaB2oKQXSzU1zeneZjLy8gPXiMHjTKdjq7SrWqWTBgp3fwXLXTYHL1CkTZ92",
  "key27": "iy66MUJ5xxYvSjqXKswm5PUf2TeB4oQFS5GUBtAairokFAK78RdkS969JMNypAYTkBhvhFGtGXMQxC1XUecfZmR",
  "key28": "fkrPnLRFj4BZcYiTbWafm3ojjdHT12xGdq6Evug5WQq1HvMQ8NaYEcbRzYDj4K4khZw8ts3PymFHKonFpHEr5ME",
  "key29": "5Z91i6ygV9oN9kTtbfWLcLY5vxVemHf7jhzLJ8V2DcKDo1ZKW6iwUXFgoM12dP4qEeZ3fELHYHX573soYo6sGyLZ",
  "key30": "25BGAfa9px2jktmbRwB8iVpxmrc8cFVxQNB3eWr2HNTtTfgsmWr9rKJJgLDrYQAQaAHGnXhPvSS5LhozBjxooedD",
  "key31": "5bJJ9P2iZb2mrrGDivyoBBtiqsZ2RfEVcDcmASHviV9LXNyN91Ltv6nbkbvbA7s3ApCrfiVE4EXeShS6VMXjupv",
  "key32": "3FCVuexd5j4B3Nxrp4qxYZo8MLJeFGrvKcKd4KiyuD7WUhGjCeGyYq8SUghEWnX797bkVZMCEY7NzceQCRUwQZLB",
  "key33": "iB4Zw7Fy92hWKiS4s4BCHdTva111rCfPSFp7mtCdfSaaNXS5ujCiJeANHEyPcesEXP4L3JZvxPiiDBsJP3Whkgp",
  "key34": "2Jx3twGWpntXU3nKowkzNBRHQ3Tp3tBYtrawDVZd9XQ2RfVVDqLfXeJKvST2gPVe9BG6UL2SJHkY8PC8sieugZK4",
  "key35": "rSPqkk1ChF8MRz2FeAAX5Aym3neHiPmiVufcmUir3bimytji5HSsW59Z13hK5QEyGGBWjiKqjzpSjcUF1WHZNfF",
  "key36": "5XF6pwfTK3Lne8kpbpuYbpNM1qnjYK4qFnyU8nBSDoz6kFLWLfT8FpRmXs4XYXwz3vtNfRopuA8AsNmReBQoq8j7"
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
