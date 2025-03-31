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
    "5gSQnWX6Aan7YaPSDLeJUAMGtLCLTa1UUYayW63JCGhG4NuzCND7BCYLWPomqV56PDqb5HxnSa8hkKH5S7EDa9TK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BxFegqHf2iP5jh5fPUaDg9cjvRowBVCeqkhFRsX6RSiBqq4egRXWEModkUAqGoUMqAeNy5ZLWqBAQPwhvYBXz9",
  "key1": "67Tb3qUeddEoZkGGWK3WVopaiCiaXaDzH76gdAN5A2GkHvtZw9DMvC3hzAoXArxcb6hDSB3J2bJHMUbs1MJeFLBk",
  "key2": "2UuNkrkLRnNtjNoacCrBa2DAvmSbUWfBhKNEapjbQWvBtwCC11H26yaQeoDC1c8M4M1vvJ5hLgCF5aYx9XNjbCxq",
  "key3": "3XhpuEfV7SBdFFjz27p22gFfhJPAWdDjbptNgXe8FPAtQZrmAebAff2PuJhjvavpZs2DC97tL18vnjQcERbW5Ef8",
  "key4": "3A9HYo6AWCZtyHf9pXRbpWtfNWvxNhhSVewoXpEZ8mUwt6auvDJAD18j3vCXkKPUYhyPS86RYL9AJXWP2Zk8wxBN",
  "key5": "4RHWFDmxicpHB61Zy3XFginvfb3xBC1fgjLWPHLdx6AngnQ9TkpDteFzhaR6AKG5xcVm9GW71yCqZ3wntmnSUVV",
  "key6": "hvhe8wzVQRe5xGwoiga9BW5LVgwtNCpJLee7dchYsMuTALBnPFtdcsg6QLcFcU3AVbjvTXBDsgMnxJqcayYgitz",
  "key7": "5QHGc78ykopmoysjm6P8qxFgG2ymASxXK9M7F4wBfDUZMk935xpn9b7Vf6coQ9caN5m4ry9woA8wdWJFZViBdGnb",
  "key8": "2zQsV5UCRwraH8Mz7ZqwAvTkkEujpBvwsi1KAJ7rRJJLGmBBTMBTrsk963oFgEjySme7DVmenBHPKSmREC6NXbYT",
  "key9": "pwbJEzMJwh9VRpsktxPydvSCkMCSfRQnKQSbgJfb4x1UWBLFtSH1PZjTcSR2qc67MuLczPCNNV3bdDagdwJ7P2K",
  "key10": "3XEKyR4BpqhMTqeHkig3MRh3NCnqtiWaCwkX6wMXfqVJETdGzGFHgLNLBncVCr1iZ4ZY2kYeZmb9XDL7wiQQbein",
  "key11": "3x4LudLdmiQN7ce15dkTJShvRwHMPdhe8bwFj652SRioL8oJhGm9bBQQLbbk3uVTJDjLFrvgJ6BjXk44ywQFipw6",
  "key12": "2Lt2DoxGgkm24rw7SVs68yeQ2J2wpXhRkfrDR7eb9iQgtAwE3BQu5Jy51fzujvm6P5YVWMbmvybprTQzvUrN6M6g",
  "key13": "suL46RHUNjh5MQFtib4kzRE6iQRVxkDSR8pxyNPxmz6XiJHptALQ1MSpwSQSnw6drTYK16D5JND6VzRAdBL618v",
  "key14": "3rsA1MKcrnQHk3zL6gnB8vkzP4p99aBqzjuAMJj6bq8C912kCNpTCU3AVyS8Tb4nHLPBEE4xNiro4wWRDaADSFMK",
  "key15": "5hnkmnXszAPuKbkigri8BB4huQouDYSWJXGkjSbqLr4tJKHgiTUay5LNPCQCtjyFs2yw9eKaZ5ntArpwE3KVTpGz",
  "key16": "3VFkMkxEMnf2qTi26U7aeiSXzMtjE58mPgkJ9AgTNfMYmL8a3XCSd6W11cRQnbvweZVUaY6BgkusyCXWSjXzqwjZ",
  "key17": "4peNraJkFp1UbMyn6gxW6TGMJNEjjTjjJCdep3xgJ8WLdijm2qVKrFsE4oxGeqPxzHKS14K97DfQG25tZsL6qM7u",
  "key18": "FjooJ2XdKMuPSwez5gQKHH7BDmjfSh6pxmeajaRsCYCtPPDU6HhQgWqNkbJ2QYrJBdDPjoQfPe28ujYkGYbzv7u",
  "key19": "4FV37kcBm2qA4imaCAZxAokWvrri7dZnz9hUN4HvDeNnTZzN8AaqLWM3rjo1uoZCoBXFyzxVKPP5gMGVAyuJBGA6",
  "key20": "5hNWHA7694rWyiYh5QC4T6FghZhrsYLoPD6iWvgkbCzJ2qtfg7jLxTvaYMdjCapav8F7opLGSnWArpLTEo7EPDJ4",
  "key21": "3HSP8sXU3JfpsTSivcRS8ehewh4jjbbd22pat2R1kTaURNk1v3SXq9iXsm4rabpwjaNB6kFeMX6xUVYsoZoHe5LR",
  "key22": "62gxipJ6vHcnoiMfeTiJoiXr6LVYX5dRSJkrkiVSbGJuBMfRMTw1N5vEXhheRoDanCTinEBBakpM2x9UUkS5aWci",
  "key23": "4Wpc4LrrCAZ32fCn12cC1RbjMW65fi3xTY7hH8gFxCWJm5VfzKmR6WFcikw8EB7vunGW3jUfvWyvGDRw3TAEVFfX",
  "key24": "4Q7fmDagxNHQwvovtbfPa18v99umCYomapKmn9FLj2uMeGqXYqbfH5Z92Qa1jrWrv2kSTfhZQJBygD5GDWeR8Fds",
  "key25": "4GKjnpicTGh5rFkaRgFouMrTYpCzEgLKHi8LxJnUAJeDAsDq4Rg1qURQyP7aJvNngo7k5KiwiXcp7mVQdjdekQKc",
  "key26": "5q5pCxiAXUQ73L5oqZTh7MvSiWtvZNkk4Vo2L5YyJvwfb8BJGYFP7J4uwxjg7T8GinafJhR6VTKKjs4bV14J68LD",
  "key27": "BXJxVGz7FeMuqFVo9xXBFZ6uRXNDNviTTMMpcGoJr1uxYhxPT59eKrJAknmDpcXbUYab2d3TqzgyyEijKzkGBht",
  "key28": "4mhDxuC9Qz9gTgw7hm7ihG28EV14b9JwLJj45xnp1DWFPSw5LJEdkLzUj33XRN3jzrk88NszTtVSacALLjxa76HS",
  "key29": "5LpSoJ4EKFVyuSqsz2Hi4BEDkCggQeJ9MJFwc6oQGwnVPPPyRit9seRfPT5QzBbw8sDGCc5uDi6Xuu3HaQiUtuwy",
  "key30": "5JCM1dPJPAeeYrJn7GapJxsw5EyjpwonFV1C5KjZMQL5r4iHzd3Sksf2qJsBiTnZRGKs5LmUjXXuwbxwjKAbZhf",
  "key31": "2wWGb2Wmz6uvt4jxhcMAsGR8LhHRNwHmJV1kabEUcdyeVE4rHcLuM8mN4KEv1ri7EWsiS8ebvpo4vp2Dfe85AUr9",
  "key32": "4GUF24NSR4Qvpz5vTpBXWa8mE8JH9tFTCBG51yiLwBrsKehNKDVjLpZoPuwrBT5Vf8FKDpNjYpV6ppieZ1yE8gFi",
  "key33": "4hsrfya5vyfTtkKrGHQsNxUnKNGYNjhMsQeeMtVQaHPLvT6NNmddDgcRens9nZbGLiZ3s7r8Mr18WveFrhysbmSS"
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
