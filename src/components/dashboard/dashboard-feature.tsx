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
    "56V1bKu9ihX5ugQFFtCLfx7iRWsN8LyFZews2E3mqbuLAAXoWC4nbrbUEoLxC2f1Pjn1qMFEXGZ3JjZ4GtRkxCaU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26iNhKN9K5fHKm8p5KPsux5RTmyni3rzUfWJvk8eYh3M4suZsPrvi9tsZQnThumj4vy8upidnuvGQTsGDPcKmPeL",
  "key1": "4a9XB4xYbvakWR7nNV7KNxtCueWXJCYDSFgX1iGCC5BzamFog1hazexHd8B1uffxUFPa1oQm6R9ss5vrDTnSn5AB",
  "key2": "wdSpYWt7U5ixdDhUB68BuubioRCNjCcFesxT4XNccNcJWRukK8mgQPcD4XGeTq4bfTNyzUF45UDqa9gGBD2wUNb",
  "key3": "4J7HpxQLpuvit7c3k3s7vJYV8mkVSf3huXLaRZwwaMtGUpoDzS4zd2Vvustd33vZJsAVpg4oPtagey9KAjoMCK56",
  "key4": "3g6s6LqxP3wqHPSb7CqF3wBScgQiGsSR6jH6BJL8XMb7vQfjYZ41ayxoacNJiNbqTLTXCv4knYvhoQRv1Gprt6oZ",
  "key5": "4CqFjajyyC5pa3NS1TiTY8VvZ1g57DtZSSr1QhLWWRoS4L3iunFEw5hThxPK2mohBwXdjMgyfvwL5NA9J3NpMbub",
  "key6": "3a2iBrSybXh9rrZdurjPU8YtCxoQYwq7ddBfGFBBL1ti5KVyCM3xoJSoYgic1sLESL6WVTk1aVomBMWuz312USxm",
  "key7": "3ZZCajQ4rXNFtiXLPF5F9fvvvf38oRZmkATk5JVqmiRM7NX6oiKiVyTUbV2BGjUeLW6TsVqZarQxxnA384ryKmZy",
  "key8": "KWnJnkRRsQy4P6Cw6HRSeBF4UmSbKF3JtouMHes9jWDh79WuQvYUtsDjXipyHvz11fxEszwjCAdC15fyH6tDgCL",
  "key9": "2bkoqXeY4VoeF5otoVp2vNR2bxnn4Y2nwW6Dsz3iywGb7p62eSdL8rEVt4cq2Kez8dvBnLk9S3UATFYpDctMt7Ap",
  "key10": "4ceP4HMey6EiLh9sKXwwPg6LoQCB3sG5tRTKUpkxzJfgbYY7iCMkgdNs5grheLH7EhLTKV6ExBBiNqUpF4gwxqbn",
  "key11": "391Ufrf2ScCn6CCdFWg2ifVMztvotBS9uJBvJfKkhp5T9XrYLCKMNrgzb6iHp9v4dMSLM2wqh5RmWKg4x1rUeJPD",
  "key12": "3hCVajPmdDcMyLP9R4cYJnuiFQkHUThJKxNfweM46sysY6Xr55HsDrhJMHmLvsPQnfPLiyc16WSMZ7d8UVu1wCkd",
  "key13": "43bNhEh8YLvi5MD13A5AqDNJLegUxsR3cUV55eseqrxB1ZjwAWVQBfyUzj5wEjKNitKGs2pxwPPbzgk2ycmJM8Jo",
  "key14": "2ENcvrMuJ4DSodCbQrVvh48ykRMzXjRrcWZ2Ro3FCEmmmCd4xr8Tgudnx8WerxrfPKpXcoar124eEhVnosnECNom",
  "key15": "5yr7bsNKuehhnCgdhoDcEXncsJJM3MrJ6dqXzfcCbVB2vK5eHownTmCGGzqTkQe9mmC7u8R3eqR8B4NqJPvfnBKd",
  "key16": "25D2pC22i3VbKK8mgM8E8hnEWyTKTWVC72hzMjVRcnP9oSXxaZDZ4gCBgnRhzenaZktLgFoHXwVbgYYmHQABqWSK",
  "key17": "4k2QHmCU87pebu4LXkZ2ED4VY1pHXyHW6q1PsFAy5nyNGRSwwuNxBHD1XLS1yjtzSixfazKRYGCQFh2f5iqD6Pu3",
  "key18": "42vqBeQsYNhM1gRScUuzVuqRPiR59Q4fq5jsPpPRfZnwj1Yg2T7aH1sKXJ16mQaq9XXMEoAUs8X5fYKb2tNF4EDY",
  "key19": "3sAgo8da12y2e7FQvC4bZbgxqewjHazwDuxgcuufFhvbVb2chyhR6ETzhJSZ6DNxWRFcisyqvEGX5A5WDwxNybBh",
  "key20": "2HJojaM4VMvZUAfidbFyLJzvjmGvwEih9TBiRvoHAmT7Un6mx9UD5VTPZPEZHeTAHZTBtaFAna629nXT7KHBHm3Y",
  "key21": "5t8YL5rd9wwybHc5cQZw5x7afpRjeDPRRj2zP7ep87PPRo8rGg7Ud4f1BqNFa7kLX76Y1r4pecYrqbwfr1iJKXvz",
  "key22": "3oE1obAU3imgxwvBTCj9eXeSgmnKX8mHzwnvkzvY56h2ztxTCraBZAZCWC1rQSayKVEoYqhqBZTrnCwz89GP1w62",
  "key23": "4LDKVLQDkGpRGudLuaYEdoQn6iq2yZoKXvoRFoMnn8KeA2AV9WQumdTAWqzDwaTi1CHGdK4PC1NBFRzR7x6We3B2",
  "key24": "21PSThmTihUdTd1NAUXsuDT7S6hfrkhXbefjQ3Njqy5EA4nCHZZNa7p5Dq9ejXUtoQ63j5XceBYBJdNxjpgnBdkL",
  "key25": "3rGzPMFvXKreRfa1wM3AzNTzeWKfmo1McjBYLriErWsoBvJC25bvFJCwiLiXYvzzNYKtBLdAxyXifaTRnA6kJGd4",
  "key26": "2akeD4QwD3axRu4pSar2iCnArZ6jwwXT76YzxTjgQXbDjeYjC1PEFj3UEfkeCQ16MA71vYJpmj2qJnGBbKhsixzk"
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
