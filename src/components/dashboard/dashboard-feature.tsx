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
    "57DzTVn4QC3vbrh1RjsieUQLw54yhtT6FYf2chRG3uCMtSALS32ofcAtzp3981gNGMASctPnbgR1DUV4Scif9uUY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yZ4nwvQfaCAKcRiyd74jVh4w1tM4jjr5G7n2KjduYTs7kwKyLWr3kCT8ZF8SXRtGNFcYJ9iAxyPhTCF1k9bGGqK",
  "key1": "3yyhLE5zj2mtyjyLDPoGJyfhKZeboVrSz5GxKwd5qcaYzbudptdrfKUuv9QFurznnmb7qNu5T9RsrF5nK8jpHfG8",
  "key2": "2T63c9UX8nyG95hiT43kLQtJGH5rbkV8W452Z41ZrzBPHQNukFLpmes8uFyGd1b2YYdfx3v72GGkTQnJNvqqNhdB",
  "key3": "5s9Wp3KzW1HPx6mCzq9xRUgXuksMEMp7WYWGHkXKBkym9Kod1Mwawymt8mZNtFn3WqQk1Nfp1BVzdXSfQqGrRBrY",
  "key4": "ccDgrfv9kwXuJW94dFVdFVuBsJHLGqUsGpXCf4ieKozsRFPpX233jLF9Yq8fitCYo9kqG1D7CXu6AZu37hsXA3p",
  "key5": "4PXeBpvruTRT3Ye9UdWLsYyvqBmvGCNT7CsohDA1VpBVaYXNS85ss8gB6EY6j5d2PVDzUJebqoxdXxK67CY9qxT9",
  "key6": "MJe8mEDvLVHAu6UZuvfBLr7wtQ8XUgVSvMEQbybwWNxyBK7pScYp4VQd1VYDhm2e4AMN5odLag8dewVqSJ4xMaB",
  "key7": "2Exu9XyacS7RBr34AfNLuZJFgvTSB4HXWgqPufM78pTx1hZ1M1L8uLbTm8ohy6LSNymmEqRJykznxVfqxT6bTway",
  "key8": "4PFvX6SXWgDzyTqpeGsnUpqrjzJYJXNapXR6s6bbY4PPh6zWqDaPiFKiK2RKoi3KAxDC2LY9JhUx4JCsryRswuFF",
  "key9": "yiE1fxXPKGoTFWZutDnazDT5V5Hng3dUooP7ZG9eUvXELDVFsvDEfQhZeUn4eRXvmT8TyytUkSsXPmYS7syw8gF",
  "key10": "3KtUtQeKxt5SiprdNHHCJcJbhMZ4mDbCFY4wwnPp3s1NFoED5xZ2N4Yrf27vERV3QrkFaoaDLVXhEKNxCXquchYf",
  "key11": "Vz4q8fCPb6k5kXyidYMHCjwn3zh3F8zCaA8apCJpVrNd4N12QkNMYqZ7ZC8o96oLfaBZWQBzbBYsz7BrJRUEYsD",
  "key12": "2RmkySiGEKdNRD55SrbqCMjmnrq11MUfWMdJir7YzDMocryFcqPUW4ZckBjE8Nbw8RRKYtGziCgj5RMYvHVoaq7Q",
  "key13": "4RLL9QMrK3YqenkNj8AKER8f7teS2QLp8vKw8dJqmbiBgKc3zS6xS5x1syCfJChhxBZfh7qR2xdwoEtYAz1QAaUR",
  "key14": "2be8SJRwZWGF8MR7i2JuKqYBBdjy5fFc11V8g8EaekpcGVzJsCiKkpW1Ap9saJm6wGdZdwUqGshtjZv5y11ENSWM",
  "key15": "5KNRrqqL57a8a8ArVjaSgiLT83tUBex9bWhpX5op3gDB7UApgjuyxpXBSVJyUqiWwma1JSddKGweQrTQC5HxFKsz",
  "key16": "4fLpygBCtwDwvZaVa4VudQ9HMbPikrzRyG1RUVsAEEQuKB2Cbb8NHyb1pJsXAmixXpXenELVRiFBRNdg1ZEkN44T",
  "key17": "4pb782Ca71qitzvAQbkMp16utoCh1UfQuM9K7Fp93ddvNX14MsHyW8KfRHRNbZetf7QU8q6s4eXY2GrryC8Y83PZ",
  "key18": "2R1MLdpw48MDPBfoytx7AcjZKwXeY2dgBGP946qq7RetEUq6ivfZwuoiTnh9fnuCQwiY2KgfUfdeTGL7fi8sLC1v",
  "key19": "64avbLx7ppQxxvdXvLeghZjAL2jKXPM4ZStD6zm2FCyXomfDQ28vSS6h6KrwZx5GV29HoMPac7NdzK1amLXDQ41q",
  "key20": "5ZfzkMBKyiG27Qkszg15pTm8wc9eyDw1imedMybE5zBoH7LqVRQrVyhgMi2WySRjMuJ1aFNCNDKTKBpJ6ALw2tp4",
  "key21": "2wTrSmZBu3WV8t3EBXyvUqcQBJ4DgMbL2J7UKhkigsDLEHvwqojFHBdH7YqnjYseQtTrwp2mqT8gQp68Y5vwop8d",
  "key22": "5mE8gbRkVL4tpSaGfd4HnNfTtYruqQwJNrH7bnPAVv2HzvsXNTYkPV63JAoDoyLWMLq8d2cTAeroCBvmZoGRZmT6",
  "key23": "4LdDc7hm2YqGufnadJpwND9sFK6Rwnuq1bXR1KHMCeJZ6UyEQ5zWXveDRuNLo9HAJgmzc2r6ZmPCE1eok7L1P5du",
  "key24": "3vW6iqUcduBbXEG3QqfQcboAfKpzisUMgieDbceX3mSDMBHmcQXgFvMC9uE65hBZmUwuHxvxpn2x45dMdkYG4uVi",
  "key25": "3MBBWxgsTbxPSXXWiHKRaRmGumVTzXeZqrkpt2VUFEHNjxUjBJx19ZfFYCtHu3KcTnkNRhfHhvKnX91jEBcfG4Y9",
  "key26": "dyTj5hYezUQ5jDQW7EGrvoVxpkZvSDuMhkQPKZFfr7AANiK8ZabZi3nXdJ62pvdHSE97ydrVsjceNWx4B8zM1Zs",
  "key27": "5GkcigdiJaLs2KECjkrnAQJzEMhCjPqBJZREpbMpusNDqdTtuUiGW4s699S55BqGrofuD6txQE79DrxFW8dEt14v",
  "key28": "4UBneSY2qdCjVWvqKbCMQ7pxYhgY8JxJ5tRGBdopgaUs9edBv1iBL6UnFdhicA9timSth31Dxqonnh1RfMKsHJ6W",
  "key29": "L6X7zHWdt3RjGrzFtqYF6FLyK9AwtFFr8rhEvitc4fmQfcVMZGu3VRzsGNWQzVFRvEWkTqeHb1RSpmu6YBcduhs",
  "key30": "67SeYSo3g3uPNBKTATyZKFR9cEy4UXbD1vkQUff8vHCuxHA6cKGzBrVgrgYV3JjrsBinExpc7xn93Dfd6ezi2wy",
  "key31": "9HAUbDn7FeoENLw4jDH28djCfYXqF6kj9mvBTeNx4shEKVTdyBq6yQaKBgfN84ppquBX8wfCvcd7W3ozw4iStGF",
  "key32": "4c1hTsRmd6FFFXbWHDVEWXcNgmWPfLbdXCf1vKRmJFoaogsEmXAKZqxAxquGUboAp9AWtcba35mvFKaQw3xmkyLR",
  "key33": "5nKCHg4kMGqZ91CRHbE589fFMfnpmiUSxp7Xek91Hh23nXScCLhFoySeVi9PUGDCFWbcPb7XVnBFRnEox2a2fKKP",
  "key34": "3kdSVDMaq1mLboTZGkzqNbUvW6vJgvCDf9S6yuSHkyZo6FiNEG9yEs5BFEbrz4yMKw9V8Bmvq41MavXRS6iBaSLv",
  "key35": "3gSniugU9HCyjzXgeV7RMgWFjSShRdqhcPqzD8KFww8wM8UqmRRnUGAHWzntvEGwqDXDM3jUPrTZ5PWhpVeZsYow",
  "key36": "4E5Hwz5v8V5AbESUDRd9uMuJthWEXA1s51767jUoCsjxJcSN48Ki8yS6wfKuB251vKRzG6h2aRYP9oZViC2MGpkW"
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
