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
    "4T1iWZzecFd4zFbRaw8tUyLpvrnk9JZh6Ro4wV4JCR1CwzMcRxn9Xr8aHzg2ZdJPZBho9L3TjrjGnF1w7zKcZ6ED"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VpCBwc9kRhtJZo2h8sVNygH7MQ49jNm3sgj8CevdzcJCr2U4k5kRNnnwp3jj5JrRWwmACWdybwe8h9LY6LubQCf",
  "key1": "agRVZaToMbKst2W2H9WFggRBznrdNk8V7rtg21XdHYx6LvFSrQg1ZkPZqRfLCnbFqUTnskbLMqW5YxbW6gf8G9B",
  "key2": "2tkQAat3hBJSFtn4Rb6C4g7GJ6Vp7oxA3Wt8iWnZZYjGpyN5Yfq7eBAujDvB3vS4pW8bybdj8vvG7s5nG4TqaWY",
  "key3": "61U9C959j67Y1N6pvhsqrY2bBLHsNQvmEmFpiZi4f5jyAWHdUsLB3Lzed8bh325SYYgjKxRY1vFdqQ8fwS4AW1Sw",
  "key4": "5eWZsgCb8eqdx5XGYBLiX6FY7GZyyPcE2mnKndHac197sXZw79bFkjPr3cuqrwZrt7zWbaqn9D1traPoDyK1AtJi",
  "key5": "5GWPg8WBQFaUGwie5kAjxdfBYQvJFkV4SFjuC8KKxxWfyTUmRZPBxzT1cFKoodA3uLA72w5ryfaUvbNLUvETrcUn",
  "key6": "4dxunnLgyZy3tTvskJs49LX8zC7iK1xvAbAFsriweAmpDn3oUrfS5ckiBtNAeAB9491FAeVqdsmY2jSyXippdxp7",
  "key7": "3cJynXtgTfXLHoMj61HFK11fDYxEmN6KpRoQCaKMPPCDGY8BpfNqFRfVGCBVbydYS8e5FdN4rVYdWRDVT7huRjuG",
  "key8": "qSHTd6RxCD9eqVqxoRTD88N2jNmCWqQQPKDUALJ8VagKqY54C7uiysayof8uQDHD7zUA1RHMQQzpyXQRyMvaHFf",
  "key9": "XEXropNLkpZiZNqMEmgWSkwac2TUEgKPvJQWnhbjBz2J3ZYv46d492qmE6rL5BPENEdAPxtumFd4PK45AitAKBC",
  "key10": "3Je4m8rZctbLU1HbaFZyoF2jDUsvhKRqGMQxW1qFkpxYv61i54kyTSs7kpc1Eufm88kteYnsgLSSokHXdGYAPqB5",
  "key11": "5qJUM1vqBYGpiF4Shxmf8mogPvfHZLKCzLQkMiUBin6cEH4HEsE1cF62f4fJBpFRSs3kWGhGMmLNxZHzarwhueZC",
  "key12": "5FMNCyydPwsCdYEqGd8cuZJaQi26ehd2dD2KKpsuBW4vseWhcdZ4fSRBPkroTbj1EAo6xfW1ftM3GjMq6WCMpent",
  "key13": "4PHjsi5MwVSHsoDFLX9mrVydoQr5UpHzufjvs36eAia1ReHXKB3NXQFnszs7ZXH6gNYxxhVFKk9AfaDJEcfFfoxs",
  "key14": "5nYMZ7MemAvGBChH4xircowz5AgBrgbaQHhq8PtiCDTkhD9BZSNc2d98nY5jVarAar3HoEi3oLkzG6wYSfyswguX",
  "key15": "26nDoQZb7z6yLtXVCrZW1D4hzKAzxgAondJhEgkswHQ3dExgmn8aC4ewKFoBBPg7TphTKJQHqwyPv7tD2kXYimnS",
  "key16": "5we3KSqaUQaSdPYZVKm7hUrk2gg4TQqmr16tjF8qDULUYAREoYRmpDBqWjcfp7ZedMFjQcFfzkJJZBHmRFpfoK96",
  "key17": "5VKrUzZdpcqCpGFQse91LX3Cq7wuFaB5a71mZyRpQFds3A6wQ7fGcdtEsYqtdn8PhVH1eTAvo89yw24L5naQUeeG",
  "key18": "4eBjwVEgijRJrBn2HvNbU8dqthwWxzQBWL8vnqMWCzJRbZKGhp2qxkkW2MCb4XZR9vhTDpL7WwK5uyEtmX5i13f2",
  "key19": "n8cAH4GDpSwns3utKGxCuTJuXyhw9DGJexgcDAvqKAKv5BnvXakgJqLNYvAfgCNuxdbRC2aVJJazwhFPmrf7gHg",
  "key20": "5TGRb666ngGmWNkmqwLtrgFMAJgaD2yLkT9Xo9YPt497zy87fxj4b2cuPV757ZdGv2rKp2oXgAE8YaqytpfHytas",
  "key21": "3AVWaQ9FuCZTjDwZavkpV8HfFKmLPR58Kgx9dXeZ7mB11RyX1gwoti7hPEgAMKvVv45NnknCe5QdBHwAewnUSDMV",
  "key22": "3uveXJQFu2uPULNFXFQ3mzeyM6KHLFhD37HmvQ93zHFEo83TxCnk9WBoPWz2Rd6hcW3wJtH6EUQJUb5zPAZSBZQZ",
  "key23": "2axWxgpDtAdZX58dZZvRuBrVFcgLf4JrWjFdB65JPXncc34tNyfQAM9ifSrTLW565FcTbAyzHn1WBA3T8LNckEbu",
  "key24": "416nQZPwfkuHfQVk5aewGRCX33neHZFR5Qosj8DJy9hDp2oT8N26PoWFaQ56f4fhrLZ2N4p8MU7DfNh6G5QF2Dof",
  "key25": "2b37BTeJR6zW82fTG7KJGyA4ZqkN3TWwzFmVR8PRJcD7EXmdg6b3QDaUsseMVrX2R7AmSR8wzvkL8ah9VxaUBtdn",
  "key26": "4zL3Dr4F8AVbw8YRnDPiqX3PvR7CbhY5z9RHMrdi7m4beaWsEkjdThhge3os65Ei341PCjuFQtZRtRjAQCYkxAKg",
  "key27": "r6a19s3pDY3HsW17chVJ2HqJJXyoE72sng1LAn56pMTLUPxfNbnuyfdumH2EDcdRfVsLiLfgrtYF5oqRxY6VjnM",
  "key28": "3k5znSyfvw7nfJgpEdtAm1RHTova2GNPRVkKCHUasfomh1ASnwpMpA1td5PdJDpi5v1ghPaTNQWnY3XdU8s3ouKx"
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
