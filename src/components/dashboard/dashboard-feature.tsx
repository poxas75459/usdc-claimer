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
    "2UA3vAAbA9fhPNNdWqufFNLvX2j7TnQrkpjW3Xp5ErS42ThKLqfQyR4zAV9UqmobEGpND5Mrm2i3pMGfnSucDe6U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dNCnEH5EwmtsZJkuc5n7h8p9GVVXkxk3aUCvf3hwoCa1EFoRM4KXHdA143dwgVYvb2VnStQRmFgrtGMRNFkzbje",
  "key1": "45pbVEy96H8cHDCD9TPzD4fy4iaEg5vKs5zXf14UhV7TLdLBo3QrCStEZZZVYQSAV2ZsavCkYW78muheY98MxqJv",
  "key2": "5qUAG3Nxm46NDTrnGavRaudvpAvj4PDopGYv82mBq9F4sXc7WppMrNkj1yzt5iDASk3izb7X6PWXpzs3bfVz2Yva",
  "key3": "5C8kFJaceT1D4QEnJCNaXGiU85JQuqoBudydjHvVf3bgddazLNVdpR23yGMnJUbAvDuF2WmhPPcUxEoUnaPFF3o9",
  "key4": "3uZ8RhXMbGdEM2mprEtyVNPsJxxWTDZwNEsoFmQXjMdvWoVKzc6G1rVEB4FkTRx2rYwu9qg6xMvzG1rUvAyH2DGZ",
  "key5": "25QqCcAUB3dTZNnobEGsqnDT4xv6jVXdQGvHM3wHyD7f9F56hQaGv1GW9QwCQ3CoxxW3sk82UhPw9M4mfMRxftkk",
  "key6": "59KUf8HuqkZNNXNgE6g7aeXFG4JooAk1trtY3jXPDEkGBi3e84J1HRauv4JH2nHLziDUcxErECZGTufJZBGEE3mU",
  "key7": "2uvd8vkxXUtubq5JKoQWMErPCuRVsXt3XwYZtfhQv1PLDTXRYTvNT8crvKBUwNiZGsyyxhmxJ8S1Kz6aNEt1hFXp",
  "key8": "aGXtRapHkoYz1Ke3bzqgUFEmbubsnQ5WiZrRobW7BKiGEU3WjJbURQpk1PYoSxEv5M9CYBqFszH5WiSfcm34EAL",
  "key9": "5qWVf2GG5akokMwG5c7Xkdfiyh9xvHnkrVtSS8ASWHusmiARyFwZtVmoL1RWkh6a4SxoVqeA8WWCWZDVbJHLTaLN",
  "key10": "u86wQUD7AEbUmY2YpR9KDT9aH6ZP35NogDXB6xWsax8qQ9ezbnjovjrXsUmu3KLT8SEwfmgZQARyNfuBX6a7a3e",
  "key11": "Rjy5gizku5sbP1MduEanMmD8Yu3Y6Q1MuPRpcbCrAho3RUZe3SLwgzCiCj5YqvhGEYqLVYcWpeMgt9g7LeKLYLu",
  "key12": "5tMWJaX9cPaT4aM9M17BqTVnDbtFzs4hzLHfVbGSmdUTChQgXN5N1z4W8TNh9c9mS7o3iwSgFmEivkbQupQNse5h",
  "key13": "zXYmyQK9Pk4TJWDoRQpb75ZbG8jSCxtohtBKupGE1iNKt5Df5Xnc62isqmDfsxvctnd3Eh3iiL7v3HtjDUHLHMH",
  "key14": "5usuJGtECP8WBreniSiStHbBRdBaN9QYYnijexvwNVXMCAtYVhqDMwDhTq26XWZnZWDFGg54mjH2rWizuJxmPA8x",
  "key15": "54gw9hcHka247da8miVSBeyJDALsHJAtPnNVqDxhe1YxaaGa27DMfgDsFQddEy6QyYUbRnovnv5JZm15bWjNvcJ8",
  "key16": "23D5KcVYnLKRVNfGgMNsNfzUV9Bg5rfLGTvHExL5JUqNCZqywNu4b1XmwaXFEEBj6SrSNFkABDUFts5YKyzMiZDt",
  "key17": "2NmWhRekJXaCEEPmaUSp2AxNPzLrcdeWTjC1s4McD28eNdCZf7tQyrQAnvXtGEHeaWsTjf7P6cEFpM6B9pZYrKUs",
  "key18": "4Ru25LYY1XVMmf7jC5tsHYj73UrvJVxzthvQquUZGJ3v7WE6ge9T6WmqS1k9EXhdykzYed9uadvdWQcip77zH4y9",
  "key19": "3MofnMTzkEkPeoD4a3eSFhgX7DGP7qmNfo5afffDjcoS3Yr9Ujad5iFxvAgun4ijaBo5GQcoJjrVMwFX19AWJrFw",
  "key20": "38irXR7JrffFUYcpquLrKtiQcFeyovwEeX7HLj2M5V6FXiHBVSzXYc84XRwaje4op2xfAePLaLZFJ7RvLeRZ6Gs8",
  "key21": "5DqAcrGcPyC3hCqeysLzFJa6sfp7zksm2hECQkQuNLu3V5hw1c4VAzeeyJZhzz3sudxAwkPrvvQ9Xx2zvRWgdYQC",
  "key22": "2E1ozrZh1eedimfd7STzsrCQucM4McNjx5rCziXusQrK6aPE8PyuyShtjT8t4BrxKPnPK7PvYoNx3BTUpCpgkMTi",
  "key23": "3Zsm3fFnbJ8myERvFe7esJQ3dvjZ4ENCuHXdbUxwA75C3oMxubmcrYeT488mTBETc5Jkp5urTWh34y2U5QXJHUDy",
  "key24": "3FXmKjPAewYd9S3d8Ld8eWMJWF272xQ1Ct7ZgEUut2YrQ6a1CRxdKD9mZ1fashGnn15RPZiXmS3GVqGNnUEuJits",
  "key25": "3w2b2LZNFWcLgZbBTgaWMpxAuQxQJWG86pKThsvzAXuqMF4dcXMiQ33LLYMgesvLJxnj8NnzmdfVSyDvQrEQ2fno",
  "key26": "5uYh6mCxYnxsfVjWknagBj658t9idKxvWQ5zU2qXYcrMRDL9nL35eqmjVUVNwDxDjuwWzGgtoCEt2h2rt6q8Axno",
  "key27": "4Na9TWMQSQx8b79GMbg23E4bvftco8ndHD8HDoNso8EnMCRiYPj5sW8R3YcFVgAV3SFv6H5d9p7yv8xtQSgiq5fZ",
  "key28": "3xBozcYZCwDLuE7V35gYC2uQfRdsCe6zbHzQqM3JY5vqKyBH58kt2txQw4n13D8imhmcnsiRCzGDAep9wboVTfLT",
  "key29": "2EpyLKAUwvoNHQApF2UNkNaEGwBFphqFzWd4J61a1arMwJEPEngSSGxEiVMXYE87EkvWD7Jen4wojb4SAFFS3Pgo",
  "key30": "2kvFfycuDoxwwvG6pQ6QNit3CaN8yj8r8R2VCZ1YUYwZtS3HFapY2QytwS4XkwtpjMTCr9CKnfXew7zU4yBoALc4",
  "key31": "2Apep68AqBhqRcNRGznTfnSdxbUqQTda2NwGzmrWDEEh9P5Jx9YFgMnD8CsUELbF5ioytCJDcQG5Ui2bdD54oXrh",
  "key32": "fXbA5KLmNjhqLDHTg4L1MAsuVQ1deeS6yiraP7iVpKHoU3TkViLHWsAwewvG5uPNdpm739mWL9zUuwM6i5ftT8K",
  "key33": "4oE9yFriSXvM4vjTkkzYELC4Z6SgqbQgFLXXAQDCpkYStsvXckeV7UrYSs942KSCqw8FhGaDDQAQFFYbxr3WVaRN",
  "key34": "bES6sqbgvzS9ViY2pqmJNZ3PEZoxGzhnze3izaZBtRaQDGZuJKtwXHdYfU4BaJq9UPV3aNSesnprXtrCio8Hb2F",
  "key35": "3nQzCrGEBBnfN9SyvfbyQzQobzH6cx3APwsAdK8GhcXmYQR1FESkYKHZfjNhfs9iCFE4A6z76M9TzvGJDdbTdPLF",
  "key36": "367XQsmWRGiXSfECGJj3fZQMcom9gZb6ZEGhVeVLmCoyqW9h413eYm6UM9cpmzWCYKy8Zn4sBCmmGtT5g1mPGhQ2",
  "key37": "espCNwkXJ1nzSpfYnKBf4xXCacRqAaoJqGRxH5LzDzfGXBWmXaYQrEbnz6LVa8s96XnsqK5Mb3qvKA7yza5L3Z8",
  "key38": "5GiavrxQqukg3gVsZAzAvrWWEVeKsrMfxyDtKAt7TbGnruTuWk54FQ2UjR9jMSQPdgL7n2VYAUMtt9cHNDZYxJRt",
  "key39": "N98EFk4vqE75R2PNUSmDRzLK1nxiXTqQjnpSRdwuWzyvv3uv7fSZmAee6myiCBQHTX2R5QXUki52v2RzdWNf9aK",
  "key40": "4H65SLZk4TjDrZsNMuciyV3sYS2fkC67TEYBFFjkHk5tvu2K2grao6AyTrjUgToVXdGmrZwd5gn4rrVfuWt2utTw",
  "key41": "2oc7ZWY7EfxLtxcjKMQ5Ns7CtYaYd4Cybbkf9TiXtSNU6TYjCHJEXXxmegsJUxRZjwQPH5daB73eBewHyADTJwB2",
  "key42": "4BGXmgvW2scv2rNT7Y2Sy299F9kDU33ucRjS3jbW9En5DGJNiQdjffTKMspXksGKBVN2DzmPVAE2gCyUqVZVJCMV",
  "key43": "5HD9Pgqj4bNJZMd5H1i93zHbY3eAwUGEkCDbprLvxraGWLad8NCC9Dnv79vhoTewFG3UE8XuPzN3jnoa4hNY2eNk",
  "key44": "5XoZpifGCBVpG8jwSSjch7e1524iBJooY7fHWD66c7A7mzrfkefZEFkGkDA4MFq7V5q7bEwpjSQnrJCH2We9bKjJ",
  "key45": "5RtqGy8nx69nYoFqz8bxg3fjV52kGTiCNPSxidvbmzfZdS7HcSrGa1qUHdnT4KogMBs2c35UfVtUorEnKNrtsiTs",
  "key46": "2cfpkCbPXYzB3iMCjS8T17vPdMQdFQczmbAP7FBy5wPdfMcx5AfCB8nHfKFVoZNrh3HCfkY6SAJ3LySuBG6LqrCf",
  "key47": "261pUbYPUWw1EaLwWn7WFjQ5JW7kTAgGp31fRRCzYsHn9SmA3pH7SXWUzVQFeBoPjmMixBrFEsFqXgxEj1nHTHzH"
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
