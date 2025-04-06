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
    "knXxS1JqNcu5achf3WY4MZRzwsGPp3wc5zWZso3BVpbzjUXdDhZWidEgcBZxmLiEpLgberbx4L588vGhhkhTHkD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HA12N16CLCzwK6wVe2DuN8XXPqBNpdCDdt9CnCLE7rdFhoB8dHP8W4deuqjN2ja1uhZD5eTEggfrSi5M9utWLUK",
  "key1": "4t9zeiBp7RZLZuJvEN6cizsP5zf8rMkMRG7gVLxcoBvQU7S9UGjejn77CAnp1pnGVJVLJ3b2BAg19B59KXR6vzSb",
  "key2": "5F6L4ddRzEVRkdGQWfvt2hcfXJGvdTSyaTNgrhBK8VmkXkriGZkcWmGZtmsxzMQ4YkcMnLSGeZw3g8HMRYcV4eNH",
  "key3": "2sXY9vwShpuFVE8TLf9vWxCzUotLCK6LtaT1vivbFocXtib9Sv1Zsm2WbmSveCqfYfBjqWHCZPNPtDCN2U3CP2rp",
  "key4": "66HA45SgGmbZR53VFgngR8waSiEe71ZGcKd2oGzcHo7DwvDfRUHSS42tydu3FWckzzwxAXTCCbwHGDv32JujhKf6",
  "key5": "4QBBrHU2wds8bXgGKNnBHroJdgMfcx5YmbswECX6uYrAuhPK38L8MiWZN86Gt9Hk9kSxFfSMLaNhtVU8yP49RAq7",
  "key6": "4bhGoJ32vx6QNCxyqG2ALyZJqyJyk5HV9DbMurPs3vznF5oLQpJ5R4QBfhLdCWAo5SraWfzL9pevFKBUijEg55os",
  "key7": "37rQxEiNUvWDJkmLrhCx9RQH71TxXKGnyrt7q97NareHoQFV4B5TJUcpqs7gmMJNUXEn3kJ3dvY5CJsFUHZCchKv",
  "key8": "4BT5xW9W49xiQqNfXrFRF3CDdidCF9woeVEdzp4M7pMFLTJYTmJS1wHuAUEV3nWKc6SaaeY7XfrR9WFa6U7BiSGn",
  "key9": "oUNBpoWZFbNUGmeTAKfrKDeJQxi9awiWm2MaYxnDfhLMzB3HTJ8bYCBq2H7aincqomumDJanWH2BPsADHHTphxd",
  "key10": "4C9Ubk9b84TbZq1RnuXtzVxcEef13AVFsrfvmvk7sRFgYd3tmJ87z6hfAydMTFmB9FvPv6KvAFoh5gH2aLtCPMsV",
  "key11": "4uqBabKHFdYtJDFQNSss8bji3FYqA1kwMXeGMGMBhvDtDwKFPngQH8Dh3rb15Eouv6gCRfvSL7yGEwzFbSKXQY2G",
  "key12": "3SRtFVnn9pssXdNoQhXdEVXW4iXfLG3RjrkYzWnoeXHMhimYvXGXmBuoozYqpyN5N8drJhyLqhjZxzaJm2DPEmvC",
  "key13": "2onw4ZBwtLh6jYC3Qr5uQTdpkom9nW1AfSGCd8iba2wotwJ7b78QRWE3QA98hf1LXLDYGRtrg1H5BpTZtnaqZrDJ",
  "key14": "5GYDfqXv7ARyEd3zSLYYXCXFhndnL6vnSWUuJZsWoDnaukMjz8ogp97y5QeQ8BsHC6bsrQTuagHoLo3AH157nvdD",
  "key15": "3G9incxKfoJdZKfNPWMjicaCkQifea9SyJvFvvc2hV2ci4qpmxaREVxfPas8FEL5nP4qsCjV5TBfinn5rPcbVr6f",
  "key16": "5RPhVuXGGTqdREc7bEewGsph84QbppiA2AE1PDNaKzkXKMgrf6ZuWZRGWNNnjMSnfgTgYgqVAZ7i2kBr5MQrtZDd",
  "key17": "zzVELdczdvECQysuJifuYAgpH9WcgQdxvANA8gGxEEXptkMFCtTcMSDovtsYvrp7CPzuYcBJFKszbyyJdDr8HFw",
  "key18": "5HSPYQVFkt8nozcFsM541fPXK2aJoj9iNScmvKDPGzqdaCPYtAuFKUFZXriE2pFaZifKDnxPmBiPMZ6H8jHduqJG",
  "key19": "3fTLraJSGzQtDF9T1NNqgJfUcK16j1FJMNuD25UjjbFxU4bvdyRZEydrTNbNycYDmPvpfUvYe3aiQEhy3aS77LQJ",
  "key20": "Js72LkW2XAXsyhBqVss1mn1r4EkP5dc6kjtNVrtbxb2XRwbCyT8wV4CXBeRTfgp1hgiLmVGap4NGKYCqaSEuwxj",
  "key21": "36WEcGWksZouhJc3efd3iDpUu8R2skqfaTaXB6UxwPNb5sWLkVD3MCeQsa9Rn9YGykGjnwF2Zoypqafypr4Lsm2M",
  "key22": "2Wwtzv26cUpXy2CquMC2LjN5a5qMpr23ywJeVKByDxzT549a9wAczeBaR2EQ3dXXtp5EpqaXT7fwoeufGePxrFN3",
  "key23": "2uvs4zffwQpVUQo7AkRaoAvCzWnbkkGBUuwrVAU7RAUMjZGuATxK1vRHb8bKYQgvJo8xWYSBeULqnKtqv9vEtvHq",
  "key24": "5MGeEc77mtBVQZAXnztxvhNbsGGGbiVzh3o6eh75F7HoHkCn6qSz7TeKxnVapHePCKoR6RUFoZexvUo3AocdDKdt",
  "key25": "2SEVGacLd1rCL1foksHhp69DMhzMb6nNHjm8d5bL4LEL3cB7k6MBKGhp2FQJsFkRQbb8HMWGXR45Vr7KDiG5uZiM",
  "key26": "bTrDKvyXwvXEFHkz2fSx2A1s2Sv8fEKv5aEB19g9nNRfyawhGsqkA4fZuU98ryCEvjchu8tJjr3E4YTCRW9gxvZ",
  "key27": "3wMokZDyj6UCgMXmDiaRBDp2uZjqXTZgrfwnh5zZXa5j1mzkgMwb8WxVmaB9yC7ZqFt4Mf3k3och6CDjNQietJtR"
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
