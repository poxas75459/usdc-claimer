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
    "2jVfsk3JvRbq1BiUQ9q4DQMhnik3y56ziteHDpwtfj2RPitjVfckjM5ksMFsj6KQ3PZx5K3a2NYZNe7py1AYPPDo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nC42dX9pnHVPS9FWqqhedfTYbRX3Tc7yBRLnxUFBrHDhSFwgVFDXcKJTN7MMbsiSZJMJdunUtd6YYiHAAsge7gn",
  "key1": "5YYKGuHWzfdEeYSRDoV7errPcFise2LoMEbnueTeoGXjAyX7s1WapaUZujtmLYrUZ4szFgf5nSTMgK4N4jPWcHuv",
  "key2": "3VxJZRB3vs7UtdKba4e9ncF1ce3LBCSR3rmLpYGX1f8C9QAwayAUb4pdXP5oN2XjSS8yLvqg7M5PvGywCCGJmaob",
  "key3": "4CkCBLkhDTsNmz9v4y8RVUrEuQkLe1zMtVXgUHiH3bT7rU71kwmNdsy7RhQ7HJK7ghm7At9pgZyxEiou1qYc4G1J",
  "key4": "45MfdoG4Fzri5zPtyd2yk7TyzQoQWd7L6zqLVurApTmFGzQ5VNZGyeVJc1t1S9JaMLqj41XoTA7LxcfWYxKXGzye",
  "key5": "419f6D6NxEH21LwenyWFoSRoJgD8KDZdtgSZsg4f3mbgjCkPJ7uMLVkvRnyUUBQKWLeG1WwMQVxo3k1ZT45KFdgp",
  "key6": "5rHFGBGnjJKyWqVUxNwdRMDXpa1eVCv6z1roK4VtdjiHTu7LKgpXP83DmwUuwX82JB53GvcmGD9Q5RhR8LV6NFj1",
  "key7": "2PDvyiL1TuUypeT6TPfELpTEcaVYXxjPkhjp4btb94frF2JU9nijZrruscu6jeES3FdxgnYbTZi9jBmnawAvNF3q",
  "key8": "3iGcb1Psmf9sn3zjbUCEKFdN97eXJvkDYqVPYp6XpWtJrEdq9gYtayk5VBtsXACHQTbpARvNJ4S2NmaLDcRzazTB",
  "key9": "5XXiiQKPkJA5gXkNhJgrEb4mFje4DHuMR1iANDQQEEhbiJbZHJLHe3UDX5NJv52qvtqfks8Kw63UgzMpsBKviFRk",
  "key10": "5zLyEzwiU8aVTiweSMUMANrpU5fEmhqrFJ18aKYiEopo186Wte2uVVyKvtk5rh4bKBKVAcrKQ3qrdac45bHj1LWa",
  "key11": "5xTCTj3RqxYtnmgc71iTRLAriGT2YLHWnvB2TmGfQ9ige9Hwxt3kNENzHg3L2Um3Fkzw56E9gp7Fv7U8uc5m9mJL",
  "key12": "5257FCLoSaac8zQTXoAgFZ88jMBFk2L6EtVYQ6iaHDo7F5WjF7btu1E7QczpYvRpRKLnUazZBaCxLoUXp2n7RrUN",
  "key13": "43gVj6oLPoRDWvQbdfy6SGcLeq2w6C1fL9PAsSMAymYQXhAXvGZ82GQ9twky3nBVL5ku22xpwz3vp1iK9Abg2wJW",
  "key14": "iiPLAt7qEbZv3Gzd3XYroVsHkk6TbHF5LXJZ3zDEj1om2G8iAW5q6ZU2zcfzsktoKqKAmbfbsGZXnbZojQk2fHm",
  "key15": "1rKvM5kBdJoqSt7wKaS7dWFEJoD5tHLtuFNJb8FgRTdNZSmzUDLUDCZN4Hs9DHQnDtZTUyk4kPhvxWWnUZVmyP7",
  "key16": "LC5yHuLCeaeVSNrthNHZSp8SK2PYdyb6ZvJbijKgLTCPLVxNyYRSw3waappr1UTNNNYpTQt55SPsdAoQT3rqoNY",
  "key17": "2WhZdh7nJnf3LrNp72fHGuQ5ifgoP27fZ1L6Gv26kjM16rgym3VLYq7aTmyaGbbKD4jErEM5NaRCXXbdBmhUz9dY",
  "key18": "5oMo1tV8UNN1kXsxSSZN31cmHu52oPqGi5x7CPscPtBitAQBieUDw6nziXriYp81VoqR4KuGBywYopi4J2JzMCKV",
  "key19": "53NWn9PzdB9LtK4Xbn73f8Jz2NmMvgVbHmpBCMDzFRSX8MEz8ybuZHcs2n1WHBJ2XNpvv63rtcbikuAGzbEYHh85",
  "key20": "5QjLTL3MPAsjSeghFvyaRvvPtAtkmzKjTwD44tB8ApimM1MeFwQN5J5QeKjj3e2W5UFqAnZeQVTcvmawy9FCuZia",
  "key21": "5y9PSyke8vKe1VUqsUweWUCNNETNA8hp4F8dtLhivj9iA4T2pYEACNce4Y7ZoKvVhYZJSaF3fJxy4xqRmJje4cyH",
  "key22": "26tc27iLcKr5K6rtST9NuohWCAL7cpJqr2zSc6bfWXynf5jJ4d9C5KTnivrHzRVL6432aqQB3bP5CLfQJidLUfiC",
  "key23": "5kTNwEYUmBxDZ2N9qeV6cDYzfcKpCvEDQUmLqWgb5XW7Ts3aNNFGnA5NuVbYK96Mzw33RHqfRwwkXpmmQ5onHUps",
  "key24": "3R8TNwqMekrV9ScPPBA23CYDV9PLK3k3AGo6aRdqTKaz4DefyPbs1zNkV1UPMTGPBnMfnee1n1UgRHcBSM9qz1JU",
  "key25": "5S3dddtuvJBy8zQf3veBaeTcZ2SQXL2j1Jpo2HcEpp1UtHnebNf8MGtMRiD1d5uKVcUUktZML5eA7UAeR9ffDRyy",
  "key26": "2xH6SFD1PTb8nZuhHoSBzBbGwy7w9CGBSLTu4gdjt8a1Ao7psHH3sd891HY2ZwvuSAXcNV29LB15nwMTxzEZC46U",
  "key27": "5cSJNT9Qb2yPTjfpW1zLoR2gUXbsj5XMmWAeoByBF79mWvtWJfTPS1QYjyzZ2yQtVL2GuwUkduVbaWPiPRcJJQXJ",
  "key28": "2U9xors31KmL3zjre8sjamyMGxb1LMToGvAAvSAh2K9iL3kQQrNm5JDct72XuZ2vR2uwmYugp4nUAJBX9jEyL62x",
  "key29": "ncSNXjf3F1fEVmW9pTiBbmegTmnF9TcRdm2qbadLTbsv9WjdiAEDrLFpuji5y1SFCcx8s4GEcfBH2RUZaNM5BZm",
  "key30": "3nTPEKtoAW7SJ5Nc5WaU6oAZSM76qWKadkCqwKidv5P9PzBKA18PiM5KDkVBcePAFkKkXq3rDpw3RhqUUgHJcKY3",
  "key31": "3PeyMntLJBNvHKfSZWBgQdVHjZXjJxYAsFfhQdpk2iriTYujJWrU5ghDNfPSzPn951bDJ79Rvm1hhwgN7q7H7tRk",
  "key32": "2TxjZcD43zCBzR6sa28UXUdCqhgrqS4utPbX4xdARtYdkYXFE26nqSV1f9tsMuYiQtx8pParwY2uHwzpLD73qkMY",
  "key33": "5umd3oZWNAdZqaAzKX98YxLiafoFFEunLj99sC2QXhvHsrfYGgvdT7869vhqkFxKiCg7gyHTwmEUo28sXJr5UqAf",
  "key34": "3w7dzpG8mMThWKkKyTg2DRu8dxKCUWbyX7qhetvDVYvKj2dLyvci9fpam6xX8YX4Baa9TzBTpizG4HfDoBzb8kc6",
  "key35": "5qfE4ReimRpMMgQvXtE5sCSJXJu73Ww3tuqwp4CVYYWw5DBYkwfsJLAtDFehBip6YDMoNUKMGiK1FBoY53gsMV7x"
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
