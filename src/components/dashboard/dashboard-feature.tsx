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
    "2f5iikgWsYZ3dNfM9iaGrVezMgNzmJ9hAxnjAL9yTQngca7RxSyDU8rhcSBTWneYLx7wRwVWwyVJKT69ESYu7ajH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hLjTBUfUGYPxhsCKPn3knj9XuL4hd637tzmgCo1Ty2Rcjbi3AjrbLtMWPcob5B5DTCajDjti6QEzLaesJKVV2LR",
  "key1": "2GpJhaP2TGV44nBKXhvkngfB8UXcgHsq158gXQPFnYBxV4Mp474k8BDxgCADQ3fBgudNB83hDwCbwzyT76LZoVKF",
  "key2": "4GzQSJpkehgQxNWzY7DN3KiE2faqwtHwDoJYU2FZtmfC5VpyWT4tJUqmFdYQACZ6bc4BfcUms55TY6qYjSJj9vMv",
  "key3": "gtJyspjnkaedXm7rGXK9qkTaWC8ANkELdMqRzsDm3BuS6bE9jgGSPzGKY8VwS3J3jVRc22BahGaL1fcTT8HCudQ",
  "key4": "4EQumL32dZoPk6Sg9ARKRCsbfhSnRtQb5P8huZcCXSQZQ7E8kyDYM2pDD4rMm1pN1nce4YBAGCVqnRzqpPDt9exM",
  "key5": "5DvNzmTNagzKqXRYX6CvwnKELQ9pQ46Uag5yZP2wUTJeWwUnSevkUyTQU2zw4XmN7Dfot6ZYdkpoD39DNzDjoXjf",
  "key6": "3TJUNeWuBSqLt5Jpci3KG7LcVX3Rn7fx3YxtXZkMvGpLiNCNTPSea3XFK8obTyAqenRg9S7zKNWHgYCNuh4ixhXK",
  "key7": "4AAAsDP2ou4RHdVBhZg4GDcPmGvNbYM2AWA1PF4yAkSFTpxZ21mvVQzZzPiPcSQvFi9ySnee9j5rYtyDKmtjrN3k",
  "key8": "5VaK6wd5mn4jc1H2k45qogrS9FJ7ir7fSa4or4ZVcjJxsBKN3WdFNeDmBALRdBUoD2kLFguEWUyyzBJYGgXbNomm",
  "key9": "263FB87GLJkdjfRjiYiFiBkPGwnxhNiWFuKAQbREaumWgMv76wuBvJvYcm1wVKrcxy87xZMFhsHmcb2m21tGAjmt",
  "key10": "2v4azyp2JgMmpRjzARsyC1UNNubdpvit3k6uC8KeFNUZ4a9snNgZfMCqer6SKj3s36DSnwPLbYR92ZgeYh9tjsFf",
  "key11": "2dUhjxm24niNpp729kkTbmxmEdrThastXTrCDPNJkY5aYGtdrDJhvbCKAgSZAyNgXLnin1aMK8fHypayg2gUCN94",
  "key12": "54fwhro7c2UJWRGMVUYvG1ayRa1oXoZibWuUmKKVh6TTpk8bLc1mvyDo8vMeFor2WnrZNxEkgwKiyweSXkasNRES",
  "key13": "jB2FQDkbrHmcFGuGJnWYz89thuokNXC2gbEGU2qXYPgZf8teLuELqkLz5zEe1V3BXSDrBNLypqXZHPknLdkyzDY",
  "key14": "9w4TcR3hqGoXxuwbKj9yV9qeEfFbHVYgHefZcZSCFjLJ5FVXH7DWw496X4HfLLN74YrYQiQyG42rUvsQpeJHDFS",
  "key15": "4GHjriskJQpaxLKPddCSCswWFQRLSLECLzjNoW49UwMm1VBoB3ag33QnLd3sATy6Qc9BFeX7uqQDrJ394Tiftzoq",
  "key16": "2fW4zmc5fe6jpV2uqjcanciet2LkLUYXKvY1UwoXT2gPLRQMFXDsHCftC3tBUq6tp1CZdYVHd1PDZjkWnffKVJtW",
  "key17": "4JhSyoUSDSEkuYPHkzb3DRTXJvXmTYurnRGF88uuD2w3mZLPe6CsBXe2TLFAyA4nFKaP9qdCv1iSjiNumTZ2uuxE",
  "key18": "4o9xrX9Fdc9EX3JxwBKwVfNWrw6NWGmdMzJM8rpXw5AucCV1u6zQUziNNctr4T5FpZVNyoXUrQHVMuEMmJoPrZ5S",
  "key19": "ur4wbNRusZhtzzPYGsvjaoa5AkgXswisDsZUYXSePSaa1X9vbsTiaBVk8Ljwr7v7MLEJuqvip5nMMsFNtAFbVox",
  "key20": "2UqAXvboHZoSPxrQuUVeCy1TcXGXQdC16hfNmn2vxfruPMFNyJrUj4Yzs82LU477G6GCf8qPyQ5Y67C7ob1tg6DY",
  "key21": "2pCXMiTKKn8jjyTLCFwtDPAcySdWZSwhMQWhai54hk4fcw5kveaStLsNvCM4o8itRs1M16DSVshDqSnTtnapAJYw",
  "key22": "n6J4jsYZ7sHsGk7sW6JANkzu5HudGZHB5tWC9jwySp8eaeCCpiWP9wU2j58WdauupPPCEY5LATFYKuUd2by3MEd",
  "key23": "5qgVXqJdsKrfPM79mHBXCiodFQP2sscdGzcBiiFf9TfyMwa1HS9VCaLLor782muzHLKVRv6dUvHsqwmbWZk42nYC",
  "key24": "239HUhpDg3UNhHLCHWx8k2GQuwjJ15PUYdXzeyFxXskGCY12wqQjj31dKSCckvw9PzMdN9mhNbWcg5U6u6MvufUD",
  "key25": "23pGwZQwkkjeXoB9dhGuFMwGErQ4RnTUvDERrg7x1WJzyVEBcEYCnW5kUwWuaHR8c25jRYZ8p2nnUJ2BEdEcSSdj",
  "key26": "1MJE4vGutCVdyyji3VVTBbSTixLVjYWhDprFqsjdDn6MHdo2w7AcWR7EwEfa47snpDwTztX5568hQ4SwuDoXBbD",
  "key27": "36q9iCHPkUJDsbyim19Qm2weYXNUiujgTV6fcCXVejU2ZqAfazfbwHmtmq4nankggP3vJNxZTLRh76TtDSE4H4kY"
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
