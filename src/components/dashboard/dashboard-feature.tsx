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
    "3hSjz4f15rym5KGr7zp3yyVMBCmxEXjERf91uH68Z4YA9iM5g9rS3nSQjfRYYii1fUrdDC14VPM8UCD3G3a4XmR2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DRj8Xvw65ahbPRttV1NqzrPNwMBR3Mr3ZxDt39YwoeN1qbHJ1zE7eVGazXJFiEfbaqFxNRdTipu2UVMhRxKk8WD",
  "key1": "5v6hU2ibVBj8YjxZSj2gNvfeyNBSRFDPG79zDiEsvkxcxPa5KktCUuVipFK4C4WsjWc679y8xX1RtPSuiQmFByeY",
  "key2": "65a9nfoZTDQ3hVWoXKj5TA942nh9QFhAUd6it3FojP9nLyqynPYf2uvvApEsihRCiAEt76rmW4KS9PdFE6wiNFvN",
  "key3": "3zvEQfEkDz2fykqbL9a8w8NMfeimTGrcemJ841XdTSRfBkxBFhn87vCwK6m4kBHRpnqUJ7VCTma1WZBQircPFLBW",
  "key4": "2JpjAzL1a7RLtHTLu1ka8J88BiyegdpJhXBZo7DmA6KEzwQX8T65fm4krCkMDSEMT65NmVmSjrnPmvc4hH4aGypV",
  "key5": "3qDuZmRh6qzcZnMXKD5KjzB3VKQ3jVYwN4MsnSJZn6oLrPjpyqzpxHXC451KNuUMTPgzBHgSUTJ7NkKFGDsTgoCt",
  "key6": "3PapCEQue7hxcbnGoWEwHnbrKGtiurP5wCjhygwxejWAE7HBSGamnt5gAxFodRoQrMSB4oQ5itKaYdCJ6jxfptVb",
  "key7": "5FGHB7PkAfAvTcd9dD2vsnjwX6ZZSXyUNuPn9Ktm3i1RGonk6R6sEcmcNVoFMxVfjGZEgy7bfkLfFjyUGnDhTCRz",
  "key8": "5soAC1CHsuLYbrHyVjhAnXbfq274UvkR6XTc772pQ9ZX1HJuQv7tq5UocdnR3xaKvhq5cs66TfAA5MZDYodGAU18",
  "key9": "5bsdN2SWHGJcmtLetYpVYomeQLkZQ6vrkHj4qr29wqWpkwkADF1EAPGj1j5pdHJeEKhqU65HxLwXFLe4N4139Puz",
  "key10": "kWmLP8dq2tchsKVhNee4VbY5fNXnModhfYaVYXWX5jULQabR1DS7pfjru5Y1jRJCGWwFDBfVZpbm1u6n6ofNPB7",
  "key11": "5tSnePnuhHh5wWq95Cp72ygdD9V774DtMjgiFqpa55xGoDH9qbeJoZYvzfJrAuDZQbe9eViTSZ3bPQEmYrnnigM",
  "key12": "FyZzGGMVjiDVESSEXdHH7kUVub3RNuha1CctGw1AWb3PBYdwoGaTP8Rpuzv6eDKm5pNo3hAjVuijJnM6riF1mXj",
  "key13": "2mwzD6CUeUjvNyfxHQ7AUfr9cgBK6BFuEn9nvpo1UYBx57p6bZdiijrwNSSyXaDTUC16pr8dpjPSNMBj88jC4TDh",
  "key14": "4fL9Svs89RRRh4s5EGpff8jAeAppwDp8RTrbuMRhCiPt79b4swx5MpsbBsBUBzTFufyudARs4cu7tmCbnWWddnpe",
  "key15": "5gSiiRZCc7p5t53LacG6dEkx5SgwUn5cF4SG5wh7g1vf5HuKawTzc8auqrVzxtPpk224LZJDnxeBKL2taBBawkhL",
  "key16": "4Zp5poMMKM7u62cGxJRUDCoEm9nnig1rc8DLEubrw775BMymgZdw8TN49G8V8ugk8JaEjixYfXBPViwT9SwY23Ci",
  "key17": "5YVWp4V68SHMtSNUqqQnUraPFhGV63ELZt7mpVSktnR2Pw7Dbghk7kxQXziii5Ua3d4yPtkBGiAfW4Y4ZehBHS8C",
  "key18": "65BhxC9xV8R3wXUTwKtVcRf67qyNKhyihVeNWsYpiibA3nZyKgvVPRTNdHvh8vKWc8H99bCbV2ibmuZJydmXN8Xp",
  "key19": "2CaVRtZ9RcsVYraKNg1fwm2Gxb9V2rygik4JrpxwFsKXxAvNX2XXYGDPackMmxLxJuhksgKZ6PdsDTCPGqTzdZYf",
  "key20": "5x146mC4YntKu6PvSZWGmQVEA7yh9XwhoMkHqFEfeHyEm3NecPsyChQFHfmvN6yRjaRZRdqbgWG662WYCBhTCy1e",
  "key21": "2reCwXhKNsqxZDtbWPqYVGv2bJ2DPrsgy4GVrM7Qp8uexm29x37F2ha3M6cPu5V7chwNfY4pVnaCvgfmf7HBZv7k",
  "key22": "39xvC9Sx1DRAZaMSiRZWcqySWLj32H6Sj5U93pZyKncW56tqsok55ejv8ok2Ufui7VnF8iDCTvxGuFQjap7ExFt7",
  "key23": "3dk99urjzWZ9usMoPRx181kYx6KPBZ2VCJw4TH3biTXFPq2TC3tC1vnfVFmGHmE1cJwdKtMAV43iBhL1LbU5QxPz",
  "key24": "26r3tkrivayLd6Pjy7SDjTpJAd3MT2oAiJFU3w7ufmNJvBvVrm7DtjYuTpXDJVAXGnPTAhrtYANaKcEcuwMJBKYa",
  "key25": "3YXj8avNjCJcXg1qvayYWUaKp5v4iwfjZhuTApAgodF1bvWCoDstTba1Qaik9DhwpzqxHCvqjhopsuqcKRo5Aaoc",
  "key26": "44WMbw3QnmfFfMUrJvtLmC76dawHzeBVXTZT8WtoA9Mp2H2ERreTsnbmbZmQ6aefmwXFP57jiZMJGfYL4hKtTwf8",
  "key27": "5LxXL3uixtucNZ35DPxv8UJdDisRfYfd8TfCYEwGRqc9hgpe99vvkj5NWpqUJyfYQGTMHVNvAYPAFq5xxH8pP2it",
  "key28": "4p7zCNDY54Ln31z2sqLRxf12iQvTeizztgDGnMWUJgDEfTkQeRwYsAUi77USH7qbMriSiWEsHrcu2qzokxwVBvPp",
  "key29": "5Ce8KpZ2Gg6RSMypCLWkX1sCniLFNAnuqcfgLA3k2HvMAJK7gxoveTMLMRfoKqZ9cmUcdKZVPLHXpWM6dUMNDFaH",
  "key30": "JoXmFviWDGdskSoqStfBaPSG7oDVMQCcvvYbNDkECixgYHLFdRDRpXEksidPgN5NcUh14LoXDMLK4Lo4FEjJ6an",
  "key31": "4xssTiSfbAox9MM9Z9VEZUs8tvTo3Wq7QdwVBrQ1xVwQwb81oadfyMozGx4AX25QDETcyzbLZnsYmx37ajXyV7nm",
  "key32": "4ri4NKTfiocN77DJCL7THmwL4eaEVTw468LxRQh9pMAqt6NgJU2R7o5VULab9PiY6XvDVKTLxvMGSghnShwdpnec",
  "key33": "4KZAtyo4ESKTpU2yF6eiRZ4vZatvLx8HoetwUsjLcJZGeh1zjoknvDoenEHsu4rkUUgCRii93JjK2stedRxDjX6z",
  "key34": "a9CKUMVc59tJsHZZNqvKTQhJVEn81n7PzjNpgY6KbBtnAuyYW9yqWv8jwdUKcSJBk4PDxpxA6y2uFxRb9Ab2PhF",
  "key35": "4KahbCHHVkUouFoUrTfTiJUBPtQzWH62h8vk3bB27zMEwq2vNpRVqHQSyLg51qg8UWDGZCPo2EdQhMEbqXDk7W3N",
  "key36": "465vq8cR1r1vZa5HyLUvBa7nx3cqwgBa9b164W6m9EQQJnzgSwGKthHRw7Cv9DUbLAMbhLkY42Anc3KepJTrs7Z1",
  "key37": "HKyhTJLkCx5NqA2KAPcLvffv47DbJ9dQVLYjABupjWYPpeAcq4fEmGvQo3r4uM9WsraHUisGNryQMD5AkBc5Lof"
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
