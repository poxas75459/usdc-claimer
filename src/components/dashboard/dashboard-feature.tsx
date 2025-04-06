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
    "3H7pB3aSCSHHxN4YuWA9UieLxMVvfSBCXJRaVCBwUtpDGmNkLSf7XwmWuSPCMKd8qSZTp1Vb2hT3Xn4pBppJBSfu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21g8snygaP7yht86zSMcK4bovK3vcchmd9hvQbmysyzrWwSSvPTHKC67EzzAT2KKXDwafMsjhAsSBkcN8dDkqqHT",
  "key1": "39Moe9KgNicmvntrWmWqLVdiz73RsSkRqfyJRcZEngyN4H6nwKXURSiB3wSFSicmGBTFsvwEXakJWRA9zcin774g",
  "key2": "4DPPN77BFCDRK5bgVJJj3KE1R3piAE7viC9Mc4sEKgcCHHwf94FRhFr3cb5UGdg9xZQ2NgtfVi8uMSkAoDDCwVQK",
  "key3": "2xaM6jw7252PqZ6K8TqoKuyZzPcPRRzNk72sSLbm88P44YVs7TwKnE1o5xxtJaUty6RQ6jc4LHoZjKH9GJ3XG5EG",
  "key4": "5z1uPy4VazaZNtJU1z7rLWheXJbSz2p8itLM2mcFgdS3WhB4oyhRUjdgChp8ss73JK9cS7pKA4rhBcs8zPe4xteA",
  "key5": "21jHT9UbgVwbVHpQsX2SbxFPi8H7XRTwgTe9CFcvN7wHTaTDysfRTM1H7TxLMNNzjXwev637nsUwTK5YsydgXJmR",
  "key6": "2QuuY83oPEBxYegvPofuEzehk2F98A2nKuYMUrJNHgWesAfyr7vbiUhEEkYPUKxHvW1Tcwu7Fsb2Y8ZHbg4YbeLP",
  "key7": "1pfjwTEaQVPSDH2XSV96yDGKUYcG3rcUMD8aB8qrDsYYGNHjsJPLBZ1w9J5nPMEF3FNNHLjobJM6iw1iktcxvsn",
  "key8": "47pLad5R9P2vYew2VtetvtqnEdzDU7hBH5R5NiG3eFEmqum8139Ahoh4eoHu5XvuNvCd95PSKqHNyJk2ETdZmosn",
  "key9": "tLmT8WYSbruXjQ4NPwKm1XFPbovFNZHFf4fVj9LfWXnACaV9ycBTuB1wY1ZKwKW6DpwXEwpy6Z7JBkeHrKXYaWd",
  "key10": "5VmUSYWkNnSs7ebWcZws2xd3oApynYcxJ6dCok3JWkAwCqR3vUU9sxijPFYEVFzBLhD3Lzq1ifztC6VXCrkejVRp",
  "key11": "2rQ3WK4Q2Cy4FFLwVz7gyN9bHng7kvAWDKeEBW9iWxy55BAZK1sfetNdd3Rj5CmydYuj37dg7QNWek3dLvNCZ4T2",
  "key12": "QPrYUcZHVaF3HDkzdXc1DxySQQP69RLe92UvsTW1PPcg2Y3wCzXyD3JcotD6VDtHrcU81KbN2qWyZcJU1hQdF2P",
  "key13": "5QAaBSiCKbChoCbUsd1wXLvYsYwxKNPzCx5VYwG3Wq9zrAvspx8M13dVZ8Hcf3CTnMMjsuXRPtAubYcehR2XtKKe",
  "key14": "5pshui29srXZ8v4jA6WhwMqyCusgoFkCnMvu5ppqtGTC6YEAcyqFQoWJfCh4M3FaKE36ZgxFJdwxRtU43H1iSpHY",
  "key15": "5qBth4dPmjW4s2RYYE93syX2amrnpzVn3kwmoRHSPkJiHjexsH239F1bhtzXjTqfbgozUzF3fc9dNED2qq3GTgDZ",
  "key16": "2MDUczzeLxWyEZpLZrSNsL6QrQETg5DVRqURXANA3Q46K2uvTzEHvkodiwV9mM9Eb8dB4pFqEJPcdgcsKt4aaojn",
  "key17": "5mR3juapNCLbkqam1cBPPKarGiqxEQvDAUeL81qEnZhLNuAfYbKhA4ooWzx6sSCk8LHCFcJrTKN7jJWFHCtEVBcV",
  "key18": "hCG2fJGuszc6x6YZTdfZJXx2Sd6rGpRarJkuhGhjMAhK2n1nhiMhVkX62EPb94PNwEG71e6m1sShL3xBqkZU8Ho",
  "key19": "5Mok2Ni8SoGADVRGaUYsecUFEL7oE2u7DBq4UPgiEEfHcWErLDTWFCbRRsxE7hXLBXPiug7VZtpcvCAw5ivU4H5T",
  "key20": "36R1UgXHTvTi1mdRPKsKoXCTMRuk38xm6TxwhSZUhTRTaf1jaGxafe32irRhN9w7ugZ4pARTmX4nCJf1aNSCXjT8",
  "key21": "2GF4Uk7oVTLTkpSFiDpSj4xDiHMwZqY1ByjvWDTvRfCMehWE4Mz8Ao9yECXNpU2PrxaWozSAWr56pbHaHmvSQiM",
  "key22": "3PzForSKy72evPH9RMwvPqJmCqhb1jP9wJKvKFFdfubGyNFiWvbNX92cDVC43jrfdwAVuot3CBByAhhjz3Z4nsNo",
  "key23": "ifvkNXTJJA5SgzkYRPeyKLMx9P7YwcHvzwDez1ehQJ13qYVCJ8wMVKZzAtA6vQY3tEQ72gmj6Auh69bQVpDD8Rv",
  "key24": "5HRWR2xiazj8ec8vx8ite84VNcaJTnkrFkTs4ubGm6jSJfAX8qiT38jAwjeLJ5HxzLoGML73nAx2ZqqXTsdfvC4E",
  "key25": "2MR98zcwvBHibKqZ4aRTuMZvuEe53u2WytiBkR7q6ehrDC6gPfxnenyLqKwvKiSmh12aymRqa57xX7bghMQxpdnd",
  "key26": "2M5GeyMjoQu2FRDpGRZrnDXjGbBxQSDJZgLnXsy5esB2eYtHmoycHsjAHd5F8vqCGtmLieEVRxVXE4RY8APr26Xb",
  "key27": "5ohASLHt1PzgLK7AWNdfxf5UgfFea5PMpcJxe8ycAtE9dCgyakptT4A9WRs7ZkJDiD46pr3C2aVL3ZTyVLEK3EBE",
  "key28": "5QhmgYEWm4K3bH4HJTPmGzo7nSMN2nYDWJmiY7K2qT9AhVkiqQ6CKB4eBq5RGNAL66y5JysgMuJrjfzG5FL5FF2Q",
  "key29": "5df5VWe8ruYuVTDdibyiAsRssR4To2AQWk5NeY91jPwisEiv8K1afQceB1UVcR5Br4gDk9FQhwPcCUP6dj1Dxnu9",
  "key30": "3qK3hmB4cQh8t37CnGphpVPkafui82MrkDaPSUpvizk1WSHMQpsZsRKieatqqpC8LT3k92snFrH5WBLbbjJsPHMJ",
  "key31": "jAhVVFR6hkih5fMiuKidyhSrvjTchAzNPiNoaCBFsWiFV98D2Zxbg6dse2rVfjmDWeh4cdgCKvaordLfGWsQz2A",
  "key32": "59vSQJZMTEdH2UCfuXMSKt8qDNHM5U4LqfMZq54LfvvRqC4pXWeEHhcQ7qJQgKUY33Dx8XzKREWZzgQ4mGExNSJv"
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
