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
    "4qNQdyCaT9CTVv1Z8KRrNTRf3CRpgHH9LsEeLKhpR58ztwBJqkmNq21DDQuuxLTdhTzTt8uJKSu8TWGohhd2iAhD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56ykSYamP5pK3BRj3T2i4BxnShxNMBGYk3wwi6LC5EbXdHPZXwLfwkJN7fhX1wQbpDX1gReuVmAGsqcutg7tuTMQ",
  "key1": "5QFLEVe6wxLR72rU1CsCMDnhHSeXMMUYdVdUU8ijb2nTpXpfTn3B8mXidMPGyNpzd98ZuaUg46H312iRCvmorSuJ",
  "key2": "2zX4vRKAWe1yDaXq8yLsGAhQRgpf2a7hshX83jDhCnLuDnLYbWQFuBQmNcsL9W3UtCVdVpFu5dR2GfK7CFVEKGsV",
  "key3": "4vsMAXvWq7hJfB6xqx9juLXvhnTFLmKafpCTBaaf9vhmAVUMKtXpksRp8mZszwgGZYTH75HM2KsBGfuPogwJvUpG",
  "key4": "5SxKo75hibMtcQna5xQGHdPh34nrnVXXPNqExaWTw7iiQDyoqyyQUahDdBZ7BdF2J4YEpYwfkRaEFkFGKpAmZCdy",
  "key5": "VVPqZxo3bKPWj4SAYiQCa9cNwBDwAfo6NtA2K7mBAJVSTuawtxcbaUyY64W6omPc64wPzH5CY2wqp3RvgciBkB7",
  "key6": "2b8TCcLqLhjZnpdfRGj4u87DXJg1pvvJLtdCnWMbJKXXiANiVemnToMBWYRLTCVgAEodmujnvsiUhM2d1qzzVhMK",
  "key7": "34J1kYh1tSyqAvWKbXKZrrwXH4hzwWvHZ9XsGqbGhYHEQw4vZ1WoEnDN3HBesM4Bigq3P3MJzaGLrdYoXrvvUymo",
  "key8": "5MVQeppjqk4MnVqgr5HSfiv1zR6SFv2p84vaDLCXmKcNXwRSwTo2tNKh8aAW9VK1YHdPiR39pK3YWpx1ixdD8swp",
  "key9": "2kV8W2Pj8bQ1e2D6Znw1C5xny2VcoG6yM7njwxHRE3wfd4R9xK3MiSASeqiBoSeugzkVy3mQLtFEqbygf1TE776a",
  "key10": "HaYskECFmuCiVdzX8ZD5xwcV3K3LTH67cWh2z36hffJjst18qDsCkMBLDwnWR4hZ5pBGeQALsetmFacbrw56XpZ",
  "key11": "24ejjAXDTRvUF4wDdYdRtXMAePmjs2gmpiFWXQpmhX9H6WuqXh7AsAaD7CV9ZJAB1ozuuQB7hPZXGgqBufoWjjzT",
  "key12": "2mzfdNPjpaxXoTNuzb7wixkYtDY5mpTJHXhqmPpgtaByXwoyRReBK8G3pGV5mxWUa4LULszcsqW1727LFhU8rceh",
  "key13": "CPkFYKMhynbGrqkaYXXRJfQkqgzNTZ48FSzm646sm3YiyCUDMycEHrhJzYxEtUfR4Q3M6SfxMcug2tADZ5FWeWC",
  "key14": "125VeaCDJrgUw2Sjz1jej9KhL7U2otLDNCquWFxitJWfesnxuYqunkTWmz2SWjYngnWJjPtGXxfQhXjSV2bZcnFf",
  "key15": "339QaNcqGHmSACWSh3qDuHadSJWhcj7CRmmjLBEazoZ946XoDbwnwBEWAcvKSgZRuA5uXa3tV61eueodLHYHaqV5",
  "key16": "5DMHD69pkcaK7bJfoQ2kHcKE6u47SsqXMCFEtDNx5rsGymPFrrLwNzRZaektKVxe6v38g8TdaTQzqoh5njdGpyxL",
  "key17": "62SW7dn2zdbTcJwyPpfwMyPhAPL6RPhtZFVUAchfYRk6aPBxGEmjvu4Sj7ugzxm171pzGofAnCca5NzEFjehyeUi",
  "key18": "23T24YDJy6dQ6S9fBiRB3EeBDRVVLRtBL9ji1LNKmwfJYoyiATCBKjcivQMjhJsgvCACPkTfhHYU3E3FerpKg4zz",
  "key19": "5esnDBxmKsyZNvuyZyMQNSoqjvPcTDRozxX1nNDDLafU8QyeJqCZqYjjLw7sRgV2N1SPc1Rt2BMJRkNcmPW9nLx7",
  "key20": "2HscinSGgBeUb4PRz2xCssatvnqZm9YF6oNNfYGntgAsXFAano1kCUib3bt74jMa4KvgiMRWtFHnkvXZZpYSKUu1",
  "key21": "xhX5CDNDPquCxHgwmg6ueuNbq4ZT5DNZ8LjM8t8GYvcmrrg2vSwMeVCuihYsY23KeswtYTTguY3P6XXGQU3dtDH",
  "key22": "5ErDnhX2tyEDNRZnxZUFHZKrSnd3zPDeuyw4wYZJDv1W5iP8eWAoZrKKXViUNPPiAWYhh573AbwSkMmuxeYzqDpJ",
  "key23": "EtLUTDLFFa5FoXo3MUuqLDNs91CFDiCbhmTxuBPbFNVQGRm3wF2v36bfqvrugVh9vey2HvnpAnKSVQ3AbSivce7",
  "key24": "4vamKj8w6ZW5F7iB3oNbiWFSWqB1JGfJQ9XxaiVw4iizm2Vdx5eiuY7gZZfrCu6sy4x3K1hR3y26FoiWdkGDAkwf",
  "key25": "6TQX3g49bCNqc8zBWxEkm5BV6qmmjB9UzsHh8z1GGgN1TTBhNXDsmZCjq2SCx14DVswSVsNbUnUALMsgWvuzWTH",
  "key26": "WpjWtE6hysy6TGdX1qCzU9QQaPdgzirUVWGBRFqPfVRQVmf2p1cB1EkbvVCTUqPShzZVYemDrvhkbvmNAA5dWjC",
  "key27": "cXoaXZNkjhUmRiafbFzESWBa4KXvKCxQgDVvifjQecHM3PriDegAvV1jEL6om14Hs6Xtf1dJATQS7W8cXezPuEM"
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
