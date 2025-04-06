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
    "4Y6HfWeD1BBPmhq12m4RroVEYSvfudt3v3r2VjJMr2KfqgbeYw4EeNBxVPc3GJGhRChZHFPXeGKmFFaxcZiwFUYA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pwcHuvwXJtzoRgxsXXBiao5WuNdoo2EQrgDx9FPNUjDgfQsSHqMiLBXn6k2vgq8WN7ieL1tJGJpYWEmcCNcPRn",
  "key1": "2nYYWqAucUfHMxqX3NT9nakrUwrZkxHh18NxniMStdHKSsg2fjM42cZbkaWP36ZtzjruUd38srDo7AD6g2gsGqGK",
  "key2": "5UN8n7LbBBQrm5h5P58bSqBJWYa3irh718CoKYkbDfN3chH8tc9ywM7Fzt2fS2mcyRricQZ91csa4auQXh6XUb1r",
  "key3": "5MznDEEsdDmsQeJeFWjbDiV7wCdcL2jaFCSasB4SYZ25pHGopq7REiGg5zSawW1F9UxhjGrNbZFNkVWvn7czDRCc",
  "key4": "CUBMsvY8Jg7Jsfkv6y9dB5NxHandsqxPfmYBXcgTY1Y3Wuaoc7epA3t5DnADZYM3UTDoVNU1QcC6N56LJ3fAur4",
  "key5": "NYtVToqeVc6GVNR85oVF1f7e1AVXwyYZDFycVA96PossMzjnfXSq4hKKJGwWozQ6veXaWMBUPdYxUcsGdUTCGd1",
  "key6": "4HbS7E85bCytUr3EbTTz3TdfiwhaHwKxt5daB37hBSat5kUxeDpxpLba3mPYKFMViErmTbNRjvweBHYighvau8Hv",
  "key7": "2HNF8ZeVKUGvFcujeYWZsDQnu47bTBj6iuRoXy5XWqZZE8VRYPpocFcYFe2EB5EHFX5zDt8Thkh8jwHJNd4Rn1Rv",
  "key8": "5nPhbLek5aECGFvnT3tvedwNt2nXFq897QcSncsHTRMt7o4EdJahQoz4UbHbE7NKKhsxk3hc6U1kiEmySgkpaX5m",
  "key9": "39DKEwuR6LYXBfJSdiXkhye13AMNwBZj7jRbwXDqf3S423GpPfQYM6fqksJabTEFzvVbrX3sXYQ83kL2or6mGrJQ",
  "key10": "4awXYH2ytXFCaz64cxWu6pSfyrRZaocaDS3ujqgbQaYHiztM3AZwvsPMHS1NYkyLA1PLaZEWvBH6WkpcHXGNTAp4",
  "key11": "3uCdiFyjjnCFmM3qB9dyP2EiBSA64KWqDVRTn8s4AYNg8WFgCRLyvhGS8oZ64HVcxEq48UWTeHQXThxMdCGPJADE",
  "key12": "5i5WQNa2iffiTShfq8NeWXsvMFZzWFDZuaAkta2ffNfXQSNbrackcTitzeGXheQXi3C5cY9sH6WsKxYGo3YarPTR",
  "key13": "3PqQtCHw23Rx62AGv4ykNWvnxJ1RLrFrhWwjpsXWNiQf1RhZkZUowNBt9Rd6pwww5Ja7dZ4HQw37S6g9wkjpeC8x",
  "key14": "owFh92P3QYRaKcqBe2cgTajbRsckxKXNNKY9YiP1aeLT725kKB62MfjtksaKdcSZHPDDiVzVvekHwnRcq2CckdZ",
  "key15": "Cer1Kqb52SB3FAz8EsgcSLMMSaRz7uUGjPNMsAZWPWgwaSGfTp25LnaAzTChfkaUjpYeXdoyC8yGig4JHWL6bya",
  "key16": "3B3csUn6x3aBQ5qnTorrkPrUoS9BfhdCtrtLCaRUWefeFPZAQVF6PXvDCTNWrjGs5D3YrwMLX5nXF5wmZnhwAx85",
  "key17": "M6971Sb8n5n14zKu9mBYykkhoEMx36YNGzBwqSFKUYkdemu2JdF5gECawwE1Tm5XSMmJHbEZtHu2GyDg8E1BWJq",
  "key18": "26H29fRBH1bCLj9Au6CrQD1n7jA9vqs8cBAja5iEJZrhLqonqbzTtLvqvZfqhbioZxj2oAz1Bnp5tXa1KprU49L9",
  "key19": "4nfNRXej1DxQ77rM8bdH3uZsQhd6PQv5UJ1vtqsfxy5hYoxApvJx7GretWHkj7RKUtq3Pgr2LSybPjpLQ89mj7vD",
  "key20": "4ZUMmR7sjbyUie5ydPWRDvgS23TCRApqHzXwtsRm8ZgYwFrHAau2KHjXpyLAvpQ3HaMkGCF5xX7UdxyENH45jhfm",
  "key21": "2hX8aWkRZYbh8bAME2qf7TrdmPgbbi5YGZA4eC5MyR2DqY9AEu4BQsKVH7hnxfsn3uQLx4wo2Bk6Gqj4BdvdRdZC",
  "key22": "51ZoYGiJYmz9dQ2YG4Nix9dmbpbyDY46eS4aPcSrWE5MdSbgW1BeZxRRinMeen3MThqtE4wYnp9QUFHffnjP9zX1",
  "key23": "4JGsA1ek8eVn8vHVK2W3hk6vjNp8vUk1oST7tsZuL85HCgwBbBCgj8PXajfBLRsucDgtwKuF7HXCWYZ76boGJR7n",
  "key24": "55z6N45FNA2LvJs7TiX3ukTrbVCX9kHHVdoqtVsaBuJQRvWLqG8xdpLAeRL7eByyb8obwbJ8PLF2ptrZG74sjdWG",
  "key25": "5nBNiiNMpsEi1c6LEyiPJbmcgFNXpzgiGUapCZ9DvZqR9Ftc1taRDpXV4zWKkpQ9wNGRMd1kyCHqP36t5bXPkZVM"
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
