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
    "yDfWmvXzS7jMBmSWvN14L79ffiguThf4dVavFfdkjF8sEsbwedkhTxnP8W8Cw2dJWVmr6vYRPZi5R3aAGLhkNCi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VgfTzEhgEDHWHqfBzwPxQuH4r1kcyZpgmMtMXYmv6Mfim2cuk7Q6xQvW4dxzAoRbQr1wdNXY2LZHgx3GnfhT3Z1",
  "key1": "2npwaVMhskrfz4L6zRSMjHibHLHXXktc8ZCppuQUdQUfepy6Eo6hLWLsfiCnm3fL3cTZSSaugKXSGbNLJV5wZ17K",
  "key2": "32TsKUWg3gJenchPUeE4y92E98DtBf6nH7D1DX1orngBLBZgPup6oGoZWR8zo66UAmf9B2s4JJGU9Dbwhy5QEpWo",
  "key3": "zV65qEe4CT8yB1xpvFFicRnUx4R4myYm9rexK53wQix2Pv2EEXoz46KB5tV2ko5DK4XzKjwpoxpFjoac356xYwp",
  "key4": "2HXzjYFYZ2KGhZrFCWYFkZc74Fk3ufs6jcYCKFrtWdLA9rK5Uodhg3jja981XZeVSWx6sN4cJBU3MyHxgy4UXVBQ",
  "key5": "pmo8DoXPrLDK6jzTNpgB6sArV8NqF3NdECSQKw1MF69pdL5eCBftqDcBZojgdVvBtJCE41x8WnuWK6a12CyxMf3",
  "key6": "2L3EhVjBZULrcM9LibbuHmKmCY6ojQviwBA5bvJBEC5yz4RhrydsdTZgz9kxvkuLmzXSf4c4xKqi2P3ZXUcYrpNU",
  "key7": "oWkXt64xcU9ofeEqFh9JBcHtpFty82YLmDiRGmGY96BAyrdmSwngcgZRNfQ8ziG2ihhm4bDHgKaKum5GyWMtNaf",
  "key8": "5pcEcAWFTsM4XjcLtjptnMcgThZUWvqPuBd8nWzdJgkW3qEWqWZB6gUZDpwEPjRUTDdxjoQTsN5frDdHNBiBVtJB",
  "key9": "268VJiJpvCy6dD3czPanSkxGNkFnnm8yu1xFA9AAA4pgYgT9VDNDK3RRC72FWY2V5CCaoQRBBnv95hhoWdurwksJ",
  "key10": "4EqgKHTDQmufrhCjPZLh7oEq42wXmRiEPCZyEuwkeDcFE99Fy4svshA22Y3oSHobRgrsqgP7TkHUmA22nFys7yUQ",
  "key11": "2PuMt5vUn7pqFtrhrZjGgRF9vF2D7D7BpJ7vj5pBE7Q3fkbT1aLBizXVoTKUMnu71XCQP3Lppc7owUCoNBkKne3w",
  "key12": "2RZPhYXLXRh3rwrq9EzeXafiFNfiPYXEb2HWM6LH83Mt5hJjVVtmzhweRNcE15cuAwd8VsAf2kV4NTvqFJibx1CA",
  "key13": "3xYSHTzoQ7JA5rWMC71ReAXrv27WMM5yoakh6SQHD2ZFkmL3KxjNM6h39NstZkE1yeAXqEnWywa84Y66KzSoR8jX",
  "key14": "5mYX1CeQ9bq1AECHnBZBDeQvv12FqBYYcqiMdziKQB2f6yXKp986PwfZofG7GwMdg2CjM5M9Bs96a6sqRxaQe8A6",
  "key15": "3Z3focRPMmMcCfnyasgXYkT8qWJ76UhRy3n1nrRYaHLTK9surBE5yK642muTQyduER3CPdUsypNPB2DYfkhZMnXo",
  "key16": "41iexEU8QMFjteM48RkLQRnENTex4xt9ze4wAVVaV2HMBFdJCqoFGfMhtL8FyPPBCcBNcNZbZ87wdrrnJBVYPfaj",
  "key17": "3EGeWvQASDavqLvbJh79jP7TSwqScmamfT2rTk5mUCF2TMCqXvFj6JKKmKzQfykgyVpRnL58nh4fHh7VAsR1Z6MB",
  "key18": "ntn3oEX5yaootrVCJPBp8Tu45QeFFCu8HaMtHaFGeugKjyiTFPKJTyuWMoC9AYrHQsCsxGFoxsBkWToZs9cXqFx",
  "key19": "5JboSPYB93utTB9xbUYjd6xUcffaqhu1kARfxs7jju7iUATdXC56yzurHGfZsh5nyWobk3PYqa9LaGDpVnLRjqfq",
  "key20": "3BTfTCwo8bb61LfvLnzAiEG42FteWwct2xjEjMRikUa3roWg5N4aCiNzqAZMvTrtWYj1vgcNApkrK6h41UBBEUou",
  "key21": "29rBNoELHQTVvb4iNHp6pPxTeuJPuyEsTR1ktxp2mYcMkhaggmq7fyLeXSbpFUh9kX8guHsRXh5nJfqaM39YEejd",
  "key22": "3HQof5CuN7NAYpUg74jtFkuYRKrEtzkSDzz63KDP6xi8UsXxbuEa28CcdQSdDYuDvwuBhfEGbNhm2gQcKosce7ib",
  "key23": "3u4SzWsojaRTLu9H7HCL5jXno5miVNrXzFhjDPf3fSRohTAX4cYEspzsQyTZ42DkBN2kqMXZ5ydcYjs892GrvaFH",
  "key24": "2dnbxZzeSNsDuHnzFTwuE8M39P9Np44so6wgwP4YCMoeTzx8DArBocrcwYJJaD6dWhRXvWUVurh3i6PuiLUuUGsm",
  "key25": "2gXPDkvwWY5mHc5ky4qQtofBkhMtNTSHiCxw2oyXCXLn7f3QGJdrPMLLRBkBkpH3a4yfpuCJLhxzrbV1bA4uLD3t",
  "key26": "2XwrsKCtLHHKxR3ssJ5haNyki7FPSVGEzjA8FDSPRftN8ECetHszwqjLU779euAW6bBXHhPJMoYERbqqcP6KPpBx",
  "key27": "4oqCAuUwFDGvFBqgsXmfift4w2kxjmJ26rpER6F55MvQhd3TdL7q3aZ1YrYYLzVZ6uGJdDVyaiS4R3GarLdu3PGr",
  "key28": "5dPC9k1VRdUi2ibKcydj6RrDZRKGYeP46CjHC5DY1gS7FisKvbwxanbygde4tA8yqktiuws4yY2W62H71SoB2fA4",
  "key29": "2fdNYivTWzWfdARYZpqfUn1Be9qcyXansPbwA614opuFjthCaoKGfoT6yyRcorbL4kKsgaVHNtBnSQU8wZB8C2r8",
  "key30": "5adKFWaPETfbui3kCq1j11ySEyiqiVRLDKpt59zCfRvEAquV8QTGgcCu1aDmEkiLFB2UJrkwtrz48FkAYrWXipXm",
  "key31": "iDYk1gFuthqxj5GKurkFUphHsSx5s9XPgeJZeZpTNBagBbbKkCyoTktDc3akTZm6duB6AsZULzf4Y6FhBeaKwT3",
  "key32": "3gEdUTXYvHNuax7tjd2XsJVMbBLTCpgTV5RSGNrvqh4haArFxUCZF53MYSujyWhEXALS9nChqPHLHthYmqNzKEFk",
  "key33": "2QEnBD715a73D5jZpaQn4NkEVmDGajPRtKNKPtaFUDc6Ffb5G3NLpVfa6Uq4tHS3ks1ZwUCHacx4awXusoCU76Gj",
  "key34": "UZMz9QZdAt62YQL5qf7yijpNcoBoskJ7xH557EwhY8i8JyPjLUGRHmjeZG2WHbNuCxSas7tLnBA2HojL15tp5mo",
  "key35": "2HyJiUz2LXXY6o6KqzZjKzpBnt4gmeuTQT8rFY5f6VcNPgx2jLbPHQLTNWsk4zagh36ppkWdTagxY9k4Nc7NxGeT",
  "key36": "4RdGRgHBkttsEvVSqkqPvwTLbXRj19BFCiMtGAk5Pj78ECtmXZcUbrabGyc9kBBcqoHEYaYji2mCeBRVmuH3hrvY",
  "key37": "M1o2nb9Arstti1HpVkDJ7Mu4nPpSzfRNvWvFDaBqxgNMyqVubjL74ge2DP7izmASMWRzF1uwDp9KGWeqqNKq8Sn",
  "key38": "3UbaCUA67HLLRaGbFcaXMdPK5As5WwZkGaqcJgLuH3GnNZutzqJWdCW4JwJJhU9yNcUN8sR5zRJdiUGFUY4tyYN6",
  "key39": "5cy7ZN2GcBvcS67x6jYokLJhzJemUA4HowWgAZAuPtBzY7pA6qaUxDx91D9fucrhwjpSNxeZEG5Jm9xyPpVzJKn5",
  "key40": "3QnMoC2YKYWFR2c1uniVAWqBgjsiNaF6pPZFmzYsQSbGTAyYqvZ371kQx97duBRBZANtdS39AsLFGAyyfUZkpR8",
  "key41": "2z5ojNDqtSnjTUpBNkHHwEL3m4uFxt9vysgjh21Vh8Aa8gLXbP4MPxsUipGj5hWZpbMmedML7PwTGyuSSLXcgJ2T",
  "key42": "2JDkaonJHjkdT4qqgbK3xuxvfxG9oKYS28WQWJ6LA5gNsgogqma719Ju3uV3BsMEbJ5nVFBQBZxzU3WfXuX6w6o1"
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
