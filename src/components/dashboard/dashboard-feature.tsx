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
    "5W18NuKFVCyk9Fd5ZMtoxKB7vc29oB2DF1coz9NjuocZ664ejMpegAP7K6AAiLFb36ExhkKxCLgnKnpRDXEVKXet"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oWXquZhEMLWw7S3seCH5a12aSziCTRjGc1uVsWJvN5gwJsuQy4AKqE5e3Ar4trTZiwYwakzW2mY5rtxDzmwtPH1",
  "key1": "4YL4KeYxH8Jq8gnSd6KqQtoFUmgvzkEqj8Ffi2He8b34cMjE3dJpi1AoKnZpAAvRdzMPhXjhVxzDEkt1yDuaUsL4",
  "key2": "4Pit2Vg1zM81KwhXjRZuCTngsNoeDhuSPZBzzYFKQq7p6bwv4ckCR6gVBW9uzvLDg1c2tRiJ3qvNaUczkSum4aof",
  "key3": "3QFG9njTMUAH1W9q8ZBXEoRVgA2N83PsdFXrFYiMXdPK5wS3q9Ku5PFAzZgEGjaCLAZdYJ6DYYHD8F6XuHgRZkbR",
  "key4": "gKgpnpAhqJ4fa3aN8nxMfQW1XN756bJzHvRM9fPBAWKFovQUWEHE9pT12ezzPw5xw1vRCjAMH9vXcaoausUEeKv",
  "key5": "5y7y5GzucPXeyabYZ2FGEVVjUck9UKiHoksRscXharnCChHnd8yjY5BEXP6ssHKeMuQSiv4mgREAj7ED63sHLDm9",
  "key6": "2QAjVhjoqAeMYebktp4Re5D3ZAkBuU3rRPF8mvhJF6AuXF3mc3ih7axKMgb13XRptD1kcVt2UdVtUTFm3ZaRyTq3",
  "key7": "Sgo7AdD1DAYxo1gxZXnn75Eo3s7dzFBMSMNpRxv21QJ34QLFBL9ATZTtC4jR1Be9nRoCcm1BXexMEn1AUzUSRBQ",
  "key8": "2vMQxbjBRtiNdYrTZuep9Am3aWCS3wMhVEa88FCRZznLVukDVP1beDckbf1jX9Wnvv8dpRsuNoiSugm5K84xnNLY",
  "key9": "3nkEjMWnAdSYDNcBH987xXkGBuHR3cva4JMUTRg2mjdrU4hQE5oTrbSMRfBJoPiwwwJb36K4CfPwJ6nKNU9Xwj7D",
  "key10": "4x6FCcBAiMiUzxtU2ZTdDryKPucaQYWq28rGNCHYRM48gQcnf2pwdemGQ36DvMvhHvyEYA21T9sNFrKJAAHfjyjE",
  "key11": "5mAxBHkvK1FVF1uauV7ziWmZTkBovxoVR7XYNHMyzBwBGrLGkwsDLVopyr7taTrMFPuQU8MqUZRy6dThKWZXDsVu",
  "key12": "CEWXdYwZh6sdHh1L6xCDvufktddR6JGzVW5m68FvUzN5GcDrp9NKETwbdR7aKhD7kBobpuEWHAMLNMnDY4NizpN",
  "key13": "2wLCPF1vRHtz9iSJSBEPSNhvdsYgpcTujc3vRNcsUeNbQB323sk1qmSSjGbXpG4FNmPah8W8ZWBMpyoikdEWQk9C",
  "key14": "32MCKhybgjMaeYCNQbKZphDgEuofDBf9SBjh7Rqqshp3w6tEn3XrRBjPrBaJ4MBCDn8SifujJebUsNSFKTpW37ED",
  "key15": "5791jyaH1rRH98abHWfq3RKZ4Zwv4advLpmdemMPdUHJDuLxqr3fGzmMAu5dYi2MAbjwZ8JuRmJrrdghUykzeJs",
  "key16": "64DdNHDUySgGSLwnrukPf3VZu1fHiSya9Qd582UHEVu8Z6Wsd2GGXEj7Lx3bn9axFoBS2vDbWKMfJy2FfFtXpSQ",
  "key17": "41zs3EturYZ7VtKQEkDjGzDLTp1vLuZNnR6bKW27Mqsy3e6iV4CoqakrGJ5Zxwv3tuTtzT7BFTuTHCM49XhhWjVq",
  "key18": "3cY8Mq6m3tkZUbT6nWJ9AHmhQfX4ZUWvekKJF6Nzt1WtV411bfTrNbMgiqi9Z2tLENdWYc5BizTTqkzNU54mfE3T",
  "key19": "216AUAbY9PPj6efDnDu3kfkuMyj1WFpmTjb4iZsi4DLyQfHEjjN9zd2PibL8v53BdELAeq5GrDKkGHSqzcGuZUAP",
  "key20": "4TRTaBpLDoQTRk9GqGVgKreCbt8jC2uxmijMZog6LdyRvHDasHtiPThkrWBCAswkDzbzHjgQv58VuXHvboFATDqW",
  "key21": "3fUArFWFwER5dPmsrv1ptuZ1LFX1oSc8M5bNfJgE64TW2HYk3HCnC9mHcZZtCcbw5BMnmVZhpeMeuBWK4SgDe7rz",
  "key22": "2MQiYwacErnGM95DtSGToNyKNvaqmV2KusUmZe6WzL3rDf2ucMw9kTciNwoSbApgG7X5yVijVhHJoF9mMYpBQch",
  "key23": "2rZXUf6uoJERb9bY9D4LipJqdUDyMH9LtnvyNvkMTaxFGLYNqQPkqD2uXenjvd7xir67H7qwnmysLgkSWaST5hF5",
  "key24": "4GSVQXfNMvrfK5kzAWSHXdGtSRkAGkE14U1rH8t6MUXZVA96CKssjkt5DK8kxC9Q2UeWfVtL4Y1dgEAGAM7vj3As",
  "key25": "ggi1ktpcuW6RoE7ye3PsD4ULzgRkAZy9EnqvjkjHrXhc8VV26Lp8o4DDUr9Lv5qs5a837hWJMqaFb8GPqDZSaaK",
  "key26": "5oHGajwv6JS4Mu5A7PPSkj7RonZzWTh8JR8TMoKDQfmP3ayngB9QNtVZXyUx6WPQ3hqc5Z4B3nxTZRvhz8s8HEcs",
  "key27": "4bTy8rmQetxraehimndeqhNqfYuJSdYL6ezGbMuun12kmkQRcTyVwzWJEt9rDGfPwJonbRa2dUiqHb6obYLN77Aa",
  "key28": "2h84Gpcxgjfi2fsErSh5riMRZVLn8JZq7SzU8cCDNj8dnQDcy5wmohFX3JkdNd9FUyQGzxjdiWKPfHXKDEGoDPoq",
  "key29": "21usgWFAn1bKbBVfN3cWZxC3Q8GdHyB7aKVQxcU2LVdweVHQwcGywXpDMA47tr2pfac62sWhjUi7ceoMSkfPssEt",
  "key30": "38dkQBHdETdi67K9tQyEEKsri88fnx12gvZWoeConoMFARHkf5VtnPB1QK2B7StQgyMnqr3JVRrYcRGP1Z9Ndy2m",
  "key31": "61cE2CrctBRgZEYLdHrrBfQ9GqqiqNpjcXHYfyTL3g1F2xsKAZzAbctppswVSFURDF97G6qEGrig3zQr4EQGvTaV"
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
