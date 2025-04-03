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
    "Epzq9S11xfG3ZDXcNTMphEvNBHjF4JmtpaBoVh4aCXwfeRw75zdLmpJSNCqEUjy1kR73RrbzrYmyGmzF4pyGxxe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5euLCS416WSHMrxq5B5abT9E5bx9DCMPTXf6e8eN2NRB72G9pTryY23UuBB1gwjdHo8VwH9ftFX64sJGwqmRs8tV",
  "key1": "5oHvZUnHxhFhxPFtv3n45B6DbfYcQNX1HUXHxZY7oZP9SWqhjYCFpW6snPsVtdWVfJTJc4N8hFRVaXYwc941TQt9",
  "key2": "5HvCRaxmdA5vXpvpKnHecwXY1R57Dnm8d2EKoLM61Nmap1xWv7NS2djC8sx3muNargGrDB11hbYnsbt3d3rVH9Ef",
  "key3": "3TZXcvSC9kKRnybxvCo6ZKGuZ8KjayQeLh6RtKkFJvGxwhPNrnsU5SNXYWzWnMWzTh2m4MLBz8nQfHHoYhBNmaWb",
  "key4": "4wtW5QuoR1wErHsgBsbjzxVRPpJkEkb4AVU1v7N7fPjzVM3oVL4VdqLQgBcbMQhXuTBhN3pbyT7rxnbBm1U15fnw",
  "key5": "3v45Av3fMGe8eBRpoq8WvVmdsaFfPuYqC9QYYF9TSFyrWHshTte5kkzKqmMzU4SnjuVipLeLuPmDyPTEEWd9K3S2",
  "key6": "2MTHiijmPmz5jdR4s8Y1DdUb3rZ8sfCthRRA4SMAHWKxWFrwLeqmc5T9j2PyzUaqVQ2HEhpTunMC2PF1os6jn689",
  "key7": "4uuqATChgHCqkPdBPVim3YWEkhmqYMy6VQ1PV9AXwijad7bhqkNPZ98sgG1FbZ2KEJ9inBCg9msFbo5NoCXKL9QW",
  "key8": "5usPgGVQ5y9GoaiG5FWro4h7x5r48CM56VC8hBCtc41MTp781eahu7CQguW7e64NhPifNia98jXFjTUx8MCBxv1n",
  "key9": "2oncX2KB2NsDGtK1KVXuPHbMeNsTPbfWUq31XTb4a55cvnc2hok1kRpavuE3hMK51N4FeNupGytPSjqRGbdpYZSJ",
  "key10": "3D9RUahKzRNLze8GMU5hpVd8YGx9CezxtBH1TWDY9CUWsJZYHB4tCRpDpYypLnXp9efgZTCFsDYNyREceRpJeJSa",
  "key11": "4A6cLRN6REE4J67Ds8gzMh59WywVCZVZm3ak3f4t3huCEV951N7y7Ln7qUjHNZYj6S3ETmBi5pGpWW3MV6ZaS4KD",
  "key12": "3u3MW628rp37k4hrbsMJ7Q3PKYPkAJSbMmv173ehXdHjPfvu6KxveUtqupvtXZpAruwFNL2MNnSvJWSZHrgzcqji",
  "key13": "7uq6c8CxJGMV3oQLrfwg2QrhAjsEmcn2gSxxAkiNg63y5iAkWfP4ozfqvNDXpT5UfhcwsvCvpbSy72AsvXzRVQw",
  "key14": "B7xSmzVCK56jUG4vAg9VYCs2zVm2V4CDCV8qmU4w1N5LoVQUpXfwdwNcQNHRWEsm1ns3DyhvrvM7JoVf2hcDNjZ",
  "key15": "335VGxdLBDxUsWxcejEJGZbCf37QzSUUJKzb5qpgtAtLKieKy8NViMEo818gyLvWdF8wHvjsqBjHabum6Gdf6gta",
  "key16": "2pxHt6fYZUaePSFpWArUVydCRAnkYFcBTs68CUeNMPdVQv7JJdTPXMcL5gx35RBFsbh8AvoLktQgZ9ZZWnZdw88n",
  "key17": "3cjLjKEbPboh1MAdi7NrxCgPu6AxpX995rKzHJ9vZFCByr7iC4X3JmRk2Lnrhxcn5wTdBPYspSGqHL3hMSHdThby",
  "key18": "5CTLoXzKpnvvYDTqSBcXhQq8uZNFBdxh9vvP9ru39ZKmJqmHRaKwyAtPSMx21TjzJtfFyVnzi5q2hKWiq1yEh6CF",
  "key19": "3qhUBdN6PCrUZ7N3y6HQZ2zNz9mRn8qS123z3WUX7Kjc8twAKH2eLRMiUpzdfPiVeufCJWV2AqR5SXhNjG97gdbk",
  "key20": "q55gosmCNBjSmNp5fQbKhuYaGrsWmiTSzyKkMKpvASVd8LqyVMgHEFZE4ne9ZwNhoyHkxe4AacVuEHvAkcj83zA",
  "key21": "5PnRctHFvDs85MoiM1utTzv9xbAtVemq9yVHhCCDFrkYk9j8QLkK7nFFJfsbXNWUwm1QzKsrD6vJHYefGz6Yz5of",
  "key22": "5ePXikZDKrVvRjpkwSdjVbZAtRfJs8cwnGXN2BeeXUNfwopFRJYns8KBrCVrmkBZXcn56qtKsXXHE2LKuz1btFD1",
  "key23": "3KDXKyaDd6KKvdAj5Ui7yQsPnQkY6DZLmxAyNaZVwudTy63WqNXmZKyxcJ51W4tLiUbYY5CdueeGJCPeG7agdfMf",
  "key24": "5fLR3VDrQpkHUBysofSdUi2cn3Ep7uU1FY8SVZ6SwN9zVVuy1AJjpg27DQRTKnoNnDKe7oQZRzMF9jNDGf7NUhfD",
  "key25": "4cueV35CU1z7HRw2WWfBEzx5UGMrsYiC95q5UsqAEBW89kMP243VfBCCH5rp9L1WX2RKQSXNaf5JPq1CneSucQKx",
  "key26": "6167SNy8EX6XHKDwKTLMrLtyXMmhJmBhkQErWPXLqEkXtwSdS7JYuz6hx4DxScuXfLQPdM4auMsnC4c9Q8EpNAuV",
  "key27": "2oiTtGvM6d5bTyMmGFoi6cWuQQz2HpuJSjxsBfpCZwgLR1KvMyEGqswrmXhav6zFktsAut8KeAWZSiQdhdVUGdvo",
  "key28": "5XanUHeHVKXzj3VbsJshuY79YGZF5HhvbKKTnpjYNMDqDQR3CroTDAz5ANX5PB6ULfPJbczcGv8baqygmA6TS4oC",
  "key29": "4AZ6BPPRLwwY9KTN1NrPr3uSMCnzDr46zNVa5PYbGNY5TWT3skGSRDYLSGA2fDEBitxy1iinaNP95djy6vtkqbx3",
  "key30": "2yCsHTDyHc9Qpog5JMRoZ68ps4KSTJzuVm4oVdBarvrubZzqRxgrA4eaVYuGbMDGLCH6rJzFwhZCDdQijTFRLQe4",
  "key31": "45ehsaJe8YtpHtz1fhbe17mTLAmXJ2RKWznUoyeNH1AcNKx6ntiiHweHB3ko6iozfBe2MaGZxXypeXThGZoi9YhL",
  "key32": "3R6s54FnqPQLDhDJyNgdhkJa3JxtVUJrqv3zT2ZnwXLPBRkATYfWMniW7j5JMxfbfmZLMwdmseRy9aDRqnTowSBZ",
  "key33": "48TzZbSGWnaPBaQyZCqtUjuKpnM7wZWKNUEazuPymP6G4zUb3dGSfbBdQrZF7BY1iLPBtK7CphgtZ91hnMKVMihX"
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
