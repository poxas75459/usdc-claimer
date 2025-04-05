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
    "r1FkgVxhFb425Lxi1k5vvXfHpEkXiJATVV8cZXrqRKGiv6Wb1U8pytfmjvmA59Gt1sHFwED9biEdVahgHGVHiBm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PuY19gzWcLf3m3MyeWx3UppcTBo61XfQyFSdLqcenmzydfpuqnpSeGFyYPMPHw8y4wdRxKmbZ3JWireFmzDUbUv",
  "key1": "W2aBSx1rKCEj5kU8e47b7GxSAteiDakCpxm82zW4gAfQoGxvSWmRu3EW7j1SDzTDaUkt79E8PZXCVyzCbPBv54K",
  "key2": "5nhpfXR9XjG5HkDxabMBFhgZSBfjdeSyMdShsXSreearV53AW3scL1k8US9cVawd486jhNc4g4DEfLt5cgYQwe2Z",
  "key3": "3dA1PEqQoJ5kysCsM6TKtCv4VNRqMEaL1z89tVtFJxfqxRx41mAG33NNLWY4vGbqZSsLLXXo52qKtYYRHeng41JP",
  "key4": "4uJxWo5PBiTyXYyCHx2H1xk9H41F7vk6EsPTSstCCimz11EAHXuWkkBsaWHrhq6CH88aipt1Nq8RGXzqq2orK4Rh",
  "key5": "3HQxjncspHuwd2o93a8GjYGETSvUNBpQpAgUd25JYnwrAowUBHjvPvaRygUKKvujpkiDh4YzgbBKXc3vqi91MFUu",
  "key6": "4WLkGJmEdjKnGrCF7ND3tVtKLxPabvp1M19BwgJFgbwmokKrmy6tgz2ZGisgdwxWFCiDchkwYggS6uoHEJmHthFD",
  "key7": "4T2xCsT3GbNMVEYT2DVBphNJNHGtxB1Z8bfoVbMWZXEaKujsetKeD5WmYrTvaE66yYuJ8FhyAJHivp1zBSegzi8b",
  "key8": "uxVos65kHNv8dZq1jZ8iqUj8iMfH7r7bGFYFXgce4Yxj6Z8xHCFKAuRY4sxV3ov8TuGnZby8eunyj73TwSbq8sG",
  "key9": "42MojVhBfXCkSxtYXHs6FjWkEvL7csaJY8GUFQcikVzDf5dG44ZZ4TjPfC8vhegfY9SaErHseoHZq8eQgednXLzU",
  "key10": "5MSLkF2VWHZxi1Y954ZL1BHnEGsZuqx41rFygbXcSsi5wT4FAVu8HtaNpnmj3pxUwv7NvimM49p8cr2FjDikui3f",
  "key11": "zDbM4HhPadiVqXgCC5rixCcH3EN2VBp3pZpSQGkgB6yBovaQpuETWk9EPPtBh6zLoVmCLcVSiqad7ayaxhvA3XS",
  "key12": "2bNxCQYCTBSvA8UdxKgL2fYLZ3vgaHsequfqkEPSSFBMgMAjegVzEttShSPeQGqcoUoy71vk1MkaZ59GCmGFNY7u",
  "key13": "3X3Bk69BnshTm9rVhhG5WLMpc4YjL3cLQkaL55tm55XmrAKHbkSchbWqGD4Gd4Yv2q3fQ72QFCyZp8U8GHXKkhFh",
  "key14": "2d3MKfAsZZJTj77rKstAWpH4CSwCXHxKVCTosx4dW5D1asFyG4sQhNCgaybyrPXvALQqDe7k6ZeQx4uVrFeAdzaM",
  "key15": "2KAtus68yJe5qpi2Waoj3rrfyU1bogkkRsNk5e4jrwxk5Y77yJWMoUt2e7494AcXcVtrdTFFQdrgPEP3BxaqHAi5",
  "key16": "32t3KzMYrhP84TPjLyK3xUXuDFN8pk5CCuuaG6M6Y6LMDTfhzG8H2ftNRuhAFs3EHHjTzqezVKXqeAXHzxUA4fbW",
  "key17": "5n7XykEjURHejnHiraQfrhUUcv36hRemzYYs2YzZRqbSXY3qdVHaeFv3GFbkiixJ1L7QiFvWFRqxERkZYBNaqxbM",
  "key18": "45p3HT51cgVX2YYoQoPEHcnbzXqQKm8fR6WoXaeANGhuQJ2qwHioL2megxdfEn2RwNXXG2M6pES5Nz3MkgpaHyoJ",
  "key19": "9XwHBuz3odeGRYcnbXaoxdQEwhpq65iF1tSZaZ7F2BEgVbShApbY3qnLodVcA9M4v8pY9ovEpnEUufcvopPtbQq",
  "key20": "2YuLFB8NG67zbmRpb6zc7pMUFfG1Vj6EJrMenmRqYTHHvnMW8D5M7RPqhFSfVaAKtiWxkEFZR3RmKeMVZuTjyNkc",
  "key21": "2ihau5WcPgt3f1dbfSBj9SnrMv98WbeAUTHREY6jmXzwh5A7gFfA6vVATfwvBV1xfMrBZrkw8n3kX2Qx6Kv9xgnC",
  "key22": "4cP77AS7Ng9CgWhzmoGcfNjFvRgX7emDgbsxtHQoVPGfSKU1uNpHj2u5pxt98j2nzvqr9FJ5Z362FMYwwPChNX7Q",
  "key23": "4tAEHWNJoQC9M4Ae2KrrjB6AZnzN2Xh6ftmvqjphf6DYEaM9WKeehoBccUwpd1q5dGR8BTbaF7jgX6kB1LYw5ykt",
  "key24": "4gm5hXAjHrbawKJVEHEewGcBnbeJXJeYUQvhcQoge4UcQ5JXVkiwfKS2PDNhDbbj5dx6ySkEAHxuTZhBEeyNZjtq",
  "key25": "5PHZw4yRBae2Rkakovm9Xe3FEgBBbtYafuzHM1xQGXH4aiyswNKwU7TAobbwBzCDad6VtQsvZjhZ7rPU2YXuvSNj"
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
