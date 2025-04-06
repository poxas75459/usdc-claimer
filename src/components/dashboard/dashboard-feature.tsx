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
    "MsMUPTuyLbmJGnhchAfBSDy7GqdULqfKMEmgt9FDCXeLoqiTNUBzye66fePSQPAjasbfi2ANVzRDVtYyazvcCFe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26HxJMqwppjWaMAwApX7efbZqCFAxnW5HR4c9eiJ8AFixRDrSpabXMQHgpEsGMQGRsXAFa4KkdvxFshYtPPHoTvJ",
  "key1": "5RtxFi8uctHHrWmE1Dr4Hgm1acq6GAskyRYXvKf12Kpjj81H7sq4opKqawnpBzA6j6M11zFgE1pPcj4db3mGF64H",
  "key2": "3BEPrkRsTsmVxLFQ8VKJ7YDHefT4upkYv5NGueWShve6ntgmK77t88et3yRiBcNzLUXjMUhdBajA5FCdE8mZkVH5",
  "key3": "5seKgX9gy9omMn1qXkaJb9MNW9NzoMxia9bFBtHuXZy5S9kTrEvkRMajbXmxn6bBhTzPEHWaKCPLAxv2RHpD9Sjc",
  "key4": "694Nw4GuxPQzpJP3oT6afoo7hx5LDd8Xn37UMZ6rNbxmKo2sCJhrCLknTo68xGW2DU5Wqq9f28SWwVTm2gdkobF",
  "key5": "5X1e7TnMPbmMfLBRGbEohCkkJY8PZxPppEfFxeSFn5Y7h6Uxgt2LDtf794PqD9bJVBZzCa29T8D8CbwrYuuWKwek",
  "key6": "3k4wMGxJEbHJkykpYsbwv3wmF5r3VR8XrChp5mSfhtTZMWcmitvz1X99jpkhGe7Js1vSw42Dgc65tzk7q2Jn5XCG",
  "key7": "5xTjsDrDzMTMi5G4Dsjt5BfYJwzSEp9m8Tt1QMPm9A7GG9NA7ZuAKqsr9FB7JsmyfytQmjiGct4JdwiPaRRxQxSs",
  "key8": "bgXR7phSGEodbwrgt9BmTw7eFRMzCZDt5W5TwRYRHRRQw5bxM3Ue5GYPAJDR1o2NhnXPjR1cZoymFmYxyMzxUon",
  "key9": "3Ctjd1NpEtTtXj2vys9rZn9uhWTjrtiEHvMFk3yqayGmtgsnc8RzfMfkkTEBGQRn1ki88vcBuEiDu5WUgNJw3LJM",
  "key10": "4gdtnvpSvWL2942vdzcBn8hVapmz3YR3BK8Ap6sbTdfAH1V4ni1RMDgVy9GsDR95KpxEAwqrrhgwSbFgZNUc9yr9",
  "key11": "3nZMp6KjxV59o53pMdc23wSWAKdRM8Td1rz7FAxYFKEUnjLGzCVFmBT26XUFZ6NsPcNmEEb7tJbNta1j6vVeq8qZ",
  "key12": "5azwA15kHEDwqMQSAxFFwzK53F4mfC2GTcHCFamEGvokFhhnto2qffNn8jtjerMUvYZLVayBBWVhRWr9x5JydCeW",
  "key13": "4XcJ2Hqp9CGCFVLRzMbGzdZjrUPUfih6JyY6jbg8uri88bPZWQCDJL1JqRMXgYKk2zyARtEA5xRRvrFAZfdvaWqW",
  "key14": "1Cw7UFUwML942xC4wwfsAsZH1cqgZ3X1s9k6XCg8mUJZRp1K6DexsZSQT6jQBaRqd4sW9U5SQHgu11DpsPsFhm7",
  "key15": "5WiPaEzEVDUpQmkUd5Yxa9AnkanioPYegwkeHHU3hbiVENYxP3x526CVVa6rqtWnCu5nhQ9bTK15YyFHd7sxhdj7",
  "key16": "RCoMu86vdq9spJweM1Lcvbwi5RkHa32crfesd5aQ8Kf6hgS7T4mBw6vJs4KBoX9akNpozQoTthvpTCb6JmiyAra",
  "key17": "3To2kCgNGEurr4w6qMzoLLPZn3GpkfdV2yyCHxHbWyz81ZW64wUHcYDDsjpUaWvZwWBUmLtPTxndDaJ7aAH8EMVr",
  "key18": "4i9LEeLuqVN4syViL1smC8u2Hj2fapKq1qQSM7r4ah5o45tiN7zvMUrhL4t5BA9tmaXca8nR9DMVxLXjAMGp8LtT",
  "key19": "5nVTU8oTuLyjroyi3jBqYt9GMSvJrsbXUGD3dnUEh3dBhgQJrpZMDHpYbt1g32bhKAaAvraZ4bwMx6nRSBmvHgfC",
  "key20": "4jfuJQTkbTqFVeqGB572aLbxowawUMb5PKnMMF8iKYwr54PSbauysbFrAquGQ9rUv6bUJ1KU2zRhKHEAUSdfiaev",
  "key21": "3NUhq6tumXLJfDQXHaVGLSH4FLv4qtEicPnq8nAtpemupV7pBANL9adSXwtTcdU3nrosxbuW1F5HyfpAJmQkmosK",
  "key22": "5artvsJWj4rso2ZwuPE4sCBh1bZ4gnDkeudTAx2xMeYoyik9uNEcBhumBywZZMsj2cD8ZuP9Fsqu2zX1hYD9bWFH",
  "key23": "47QNaj7dAJZAWZa4135KHXkfe5z8QbgCPEHCoNmNdtK4YLFQxW3KgvR8x2aCV7AjmeJZj75gdWVKGg9FqiKFFC4H",
  "key24": "56vJinGkyCg1uQkqXAU5vCbFCTSasdQW8HihRn2a3DMidm9f3MjSG91rFkkvgfFjZUTzfGzey5FncFGrSwWEaiqh",
  "key25": "K4LhdCXzTC7fyZaTtDc4jsyqnQv4EqKqiD7r6LqD4nMLVtjVCvXivudtp6CxuqT5BKiE14ZLwXt2E7VcWPfB7HS"
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
