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
    "2rY2XC8tRmCL5F5diME2TBTMwBGeD8zGzjyf7ZJPUDTULu7mrsuut9uRsbmBSVKhSQ5qgHhP6d2h5r99fwjF8uZF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i6WowpuUAKx7z1J7RsPpHRmUFCABBBXeDB8FWXqEoQ8UQhhgk8RjDEVYF4wpfLpxi2eKGT9Cw9Rx5Yhc6NHU8e9",
  "key1": "3FCFEFBQ4vtbZzP1cp1D6DL6snZe6XT76ptVxxqJ6ut25D7M4Uy5Abcx7WYaZ3nbDfUEVJTVQGN4qLyfJQCYHQpc",
  "key2": "38gPe8ofZczV9yxqUV1okGoixY6tj4T7V5g852CnzmR7VtCcniD2Cng4a96ja33oRV6QKbpeWCM2jvUoDrfEU2rn",
  "key3": "4yuehdBN7nuzGziRBj7j6zrU6LUkLiHUYdBbx4gUE8e4B2i7ip8sffNsxq1Aoh4KgnaHpM9eEchTnXjzbpdUrchd",
  "key4": "2iTra3Z8ibjKJEXMmRm1ZoZuTEk5FJueDxtbM3nheFdpRgzfUR7CHyuPz8fpQrm5ee83ET25L39z8gNe6kZuzTeR",
  "key5": "28t8GwFuoPJCxfPsFWepM8Q5Pc9NUuptpG1N2uvgYoSWMbJKmVrYwPh9BeU7bpCheiH3F3VM927uMw396mKeijni",
  "key6": "2eN3MSYUqKVFriVsqJu6ggw4rU4WbXRDd3GeYAjVGEGGkvYQo9oEQgtJuEdE79EtvTZcyiHzjMD1TCPftz2r5Ntp",
  "key7": "39618oyMtTvJVGWTET1LiywzQffBMpnuuzndoRGMycfdZyAR8sDLRzFSYtr2b4ZzGEb8bbQY4kKCEhy3AZHDupPa",
  "key8": "5ev4Cx5K2s4YgEbczDokE4eo5yQXnkuHy2zcCSfzGnfWxcqdXPkVR4beF1oFDR9wmdXeK71i8rAfsF7X6he1bCa8",
  "key9": "2CUEMEPkPy7RcZq8hCbU6t4NWvKeLxqH7yeaKXSpm9dp1WroibVXtaM6EqAAvgHXuKaKiCQRwSe1v8JuDeAcCmTH",
  "key10": "2TE4YaNNfrnHTcSXir1SaoQm3RrMFiZAVZ6qL6cfBAjRVFWH57y5hgaDThSEstoEUE9NyAeoCJ1Dqw9DdsbBoFzC",
  "key11": "4Yh5uMyML5ny1v54aLT5zpaVbjNn7pJnG5Wx6yj4f8FP2iJnQr5KMwLQKMmMNj7hX3VcCwM9EvwpKb5sdpfokaX9",
  "key12": "5XFgZ1xgw1Jpsr2D7h8M5x9uRpgpagru6vaEj1MDejhVRvDYwRdqXx4WUK8P6Zp6J1qS9RN7V8XDjrVESQyTaps2",
  "key13": "2hGvUtPo6WFuL6zKP1zswVKLb35LAyHahnRfDfN8kPNkKNjj2hvBJM8cJJcQUTX8hJmcs5oedf5mh255FCgUKTy8",
  "key14": "2xxGYRWGUXkLgbJcUHHJ1z5uv1GQCt8GMMK4GJ7cLEoLxt1g6VejZqvoiGUswo1km1SvwpkFQ84MVaQ49TpxSGyT",
  "key15": "2WW37vfZoaKDrHKqgrMPHYJjk51JBttcuVNidUCygr5bHHVo7zZM4ZDJQ5kL2ke3TWaC5cdQgbpynFD53htgEgME",
  "key16": "37AW9R8RDKGZgufHE2J4cZPdeABUDtQEnoSxTyZbVN7H7dwYj2FY23uybPn94GxwZM7GxRzY42o15f3mw16azNVX",
  "key17": "3NQ2iPcwG8sq43FvgtQXAeG35dmmnk44HMPUhSc7fsmvTFRwx4D3hVEahWWqq5gLxgAEGGgQkzzJKAHHfm9EHaTw",
  "key18": "2TprFzFCRczFrm2kuUvNqGWcZ1nCNa8muqZGSZefYWquwobGRCdCrj6DWrDrozmZJQG5CJavV9oDTuQyWLECv5Tb",
  "key19": "6vELqcRxng4pr9t8EFV26DqUMros1GF6wKWvjZydgig31ywSx8kebDqnUaJpLzMsyYL1P8WfSqk2eQRe3vbbNpr",
  "key20": "3HhPE31XvFhTUfy7hnArt6NR82NPmMzn36vaYeRTub2onyYU4cAiGx3wWErLmcJF39Qn1Nwgtn727TLMMEAZAS9S",
  "key21": "xMk1utmiMsTiLdvpEtdeyU2sprjVFH9Kx9KEomxKYNCjEB28Mw6hmNyF1pzzkV7uwrweBqNiS7biWiSoswAAYZ6",
  "key22": "37sQYWqFTNa3v7CiLihNQepLAtN13oP76XR9ncSBpY3ZzWvqM1rPZpK8wENmmWu3RLFsXvF3G6F6TFcpp74owmLv",
  "key23": "VuMkefx7UWy23J6D3RY4ZkVJLWUxS3oXhw32wyZF8McDJ2yFATHFpx923ZTB1oqfFqBKRvNKWLxM8z7F1oSrZmZ",
  "key24": "2f4Q3fjQ1CGDQx34DdhEL43kNvxLY7Awq8d2CNYpoTn73xg1Rh6TzbbhCf1gYNZW3njWLDGhPcpGGiow9aPqQNDW",
  "key25": "U4Y8CLXDR17y43PafaVPhAW4pnePVWbCLL87CdhJA6ZgfRAjTopweXV7rU9oaKkEWfBBvpAbF7ntQnLf9rQsy4G",
  "key26": "5cm59PxiStN3yZuJtJmmeUyzHkHxfnCetoMxaqBtHuqVTpzFv57JbkJeXfdiQ5oPu89pKAMtPruLcxE96JnjLR2N",
  "key27": "4DsXqFhbKsvNybkYcAS8zrgiuPGPYNeeZWBySPoqEWWoQ4tbwG8jcJ2Cs5ySsxZTCy71m7ZL35uVV1vQ4vDqdTuB",
  "key28": "53E9Sk27HoEJG16N14rLZFp4ybprgbnoanEabp9MAArFPko96HETkpbEU9K4ECxqBYVgdvzeYLcqrqRVEdtF5yEr"
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
