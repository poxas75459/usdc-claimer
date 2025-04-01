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
    "47VGUyBTFG5RAhSXRsCW1wiuw6TjBtvyToFh4RVYTA6AacSkRquaTXBN7ceGHqujkJBxCBoYGu4v9kJw39C7anS2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RQAvsoJLTqWndjPqkQ8zNbS41a21ctonpT4RrvaThJ1ptEt2TqqSB7L68PbkEW6G2dGwStH9u5dL1Y3nAQyVvY9",
  "key1": "4k4cuDXX4MRCPgqg26jqaVXTAsih1ZfU5vQJ9tM1rov3zf1bgNSqeUXn8B3RkvbfS3NnvYDmzswPXRinS5p6vjuF",
  "key2": "3AMQCUtWc8G1QjJPurU7zYYdxBdGunsRoiH2RMu5gskcFBzFUvGemWYPWYHFM3w8aMSP2L5wsBja5cTQP8Wsex59",
  "key3": "WEas8ZoK9ixp6uYksit8CnfkYX9CGdCESjoAADshErbyXKvXmQnsCJ2nZpkAB8pErr1jxSHpnrKaUnohieYvSvS",
  "key4": "2th3XBsvZRQVVFKya1HEawRgY6tkFEXcaoxNFQrt1nDyMFnTKzT3DwmXQyQbvw7xGfZTqnmK3N71sdXEdfYou2Az",
  "key5": "2b3NvYi3Qy3vqJPXMS1SLMD7ecowDxd26CHEd8riwGeQzKWPkgA1mUKQqZRob6ngggAoy5TZ8gTCsiqYwamHCuyf",
  "key6": "5uK2UKRJE2Z1MbMyxRBLP27D3pyGD5D8anVgPqrEfAPLvZv4haWnU998kdJpLdDjLabARJkr9RkcGVfvMDAhvd2X",
  "key7": "4jfVfU8zizifVWWvwBhvSYkCS9Jjp8jdNrMnHSeGY5KaXfS4vPSQEDwiPJ2BpjCtCDdbkibTqZURJ92b6Noy6GG8",
  "key8": "3ghyrEmRWsDqkPauKaNuHahN2jcVnKA6jgYj37KE6mqatAksNRihmxxjidiZMtQvMUpBpXCGTe6VHYGwugvLzx5r",
  "key9": "2w61kHdHD8TbBkykFcgg677KGsqkBaguRmgcftBrk9hGQHKZN6gpWSm3enfvCm8rwEXYLQV4SHrfV6wyFRsHMggt",
  "key10": "4ynMURyRhmCBgNc2tkaM5v6sLompE1PstXvbcQArRavVUBm87knGRS8eCPrvZ454pudg3X33VM9tNNgkx6rmUSvP",
  "key11": "KtJRCMEKw8EtUoVPfL6zNS6fxFKhM439PREYAyCBpMF4TCgrPS9Rg5GNFEk2Lovpg9DpdBvV8CJrDVyGMbMSc34",
  "key12": "59HtkhqNNJ9DpBU19e69XYgrdWx77wK9NjGHy3Do3q417QrLTqHeMyFzYmYy5XK43tJxptsHqPgeHDQpZHiN6XGa",
  "key13": "2TbVDUrdbqaeM1hoXpV2WzHRfVEyW5cKPwBevy5FNQzuYSvdLn4HKCAd24crVeQinmZsXWiRD48DNKToVZbFMFvZ",
  "key14": "34QsPNRpXUbZ69SGM2prVByysa7qmrtFKrzVYZwSXRc4PTqrGEsriPQtTTsNEgcdf7EoPSSZwMJAao3wEJmh33kx",
  "key15": "2miXtKWoiCQHkWYQoMKbiDxViQwH9EpJGTwjUjFvKUausCRU69zM8MJTt9jiadiayasw2Ah1hTjMePR7GkErrt95",
  "key16": "JhCbjRyWb4Z3PDVEREgJHFYyXFNfTsH4YfEy9TLQwNpw7BZkDvyEyaSKxKhCCL4zLE2MRyDPkmi9R2jj7qcGFuB",
  "key17": "DXAVJuQEPzvnwyYWF1RKqw8H57QriPr3AJe2rMi2qSscVhdN19jo2AxYNFNHtkLka9p3eimVtzCK5LDyDyhy75H",
  "key18": "2jdWZo9bgQMBLJYTTUSNJaccJwbB7fU2S6mhqj7aYW69KUH7WQDzkUL7heZEa9zVJ2JdJHf6VcsGvv8oBk4GJ6sp",
  "key19": "4AxsnuqBk1feRdwwJgAHj638RGmZwybiwcsKUirw3Jo75SMGhm9WPWKxkyxqCEkv3D7k7K2VJokBs7Xovh4bjFtP",
  "key20": "5thnL5tSZbNdzFttzzSyHGByif2WVcupAptkHNN5AjWdaBcw5YZsJxJuUdLmxafu87vrUedXZcH6ddvSjEkaSD9g",
  "key21": "2i1277oTyfeAKSoeaFPQWiVAawVnCwBYGMTL48W8aeoa8znDkR8Q1RahZP1TLYbE2ko8M8peA2rCEUashYTkAf2n",
  "key22": "UY2DssyZMTkQBab1mCxLspqEVXQKqPeRXpqJNrm567Vctt7aD2qNgQGjY7ysGAopTmtFXUDk5PPvKRz269uaAWH",
  "key23": "4XdD1Q1exPfz2JRziDJ2YikLgPCPePyvHknvM8zRPv5BzK7zcijYaj5dvyt6v1w61icoQNjupvpyc61WK3agWG9b",
  "key24": "2fCSuFu7b8HcZ9z8jN41apRgcf7fogAiRNnsrF1nKa8rsxKDLX6WHpdzB3bBpxPWNs6S6ihv4jvpsqHZGnfHPR1u",
  "key25": "2UsKTcu3sUAK1wKzj8XCFCF3gN16AinAgYCiF3kALGA3BHsU2xLjcgXEpGTCNpSJxYUFcDpAMYXoM2BP3dudNRn",
  "key26": "5nySYMhV4L5XhjkN65195u1PufkF1UqSkdj9ELb5kkHEMgo2VqpNT3CLEJUC7LQhyRt4mYXbkgiVtRYSA3j9JAmN"
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
