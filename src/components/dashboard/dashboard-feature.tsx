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
    "5mjetZgUhfMV3Xw4HAdmsBXjBjJMMsGZ11PkvsuB6RweWAPfaguP65NNDNwERic2AJTNuXsrw4tw5K3EXk8e8m6V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9ZmkBdMHudEg3sdcueykra6Ht8ucEXAysxFvTSEeM6GgiKYDDoVe5tNPbP5BytusLaNHMQo3LGUQhRqEeBGfyzk",
  "key1": "2hRPUFkHg6pi3bBZxrHnfUCVaA2LHUEHZoTtYghpDAHnyePcevfwCwVQ4D1NrHdk7XUFVneNmcxwDZe5gJkw6i6Y",
  "key2": "34G59ozF4KYr6N7ZjQJ7pQvCB249TZYeiixB3qxzeUuuTCW6hBB4aoDKYLrYGG8S6Wh4hHX2NYgQNyyfBa9QnhbY",
  "key3": "59crZeRUSUdcVTsxEqoaZPyvfJEfvkE46MmMPwuv9Pi82TZCBF3x5UHBnqfX3RWi8nbQ1Zz5QsTWhwBJiDudGoLe",
  "key4": "C9VkqgUxe6vPeVWAu9wW4kcgcB14KFFZVikgbfLjMMfmN8aQnnbGKEyWayrcads9RLoTrapmzqv5tTWsAy4mvGN",
  "key5": "2nQprEGUuscp2fVaAPvJrUkuboHCeMVLYsRYn2iFk1NWYmkcGcAEGfczec23iS1sadcYPv3k5Um1dCjaxuVt2TzB",
  "key6": "56xtWRzf34wAbbEMox22w7whYHSCTFkumfT73i1vcYhxP1TVyFFVTiNJMRcAVo8yGvXoLxZa2m8QLZ6ZiEdw2zGT",
  "key7": "5zWJs5Ry1qxip6MrppjScCfDf6ShesWNrxmrwRYdKfm4ycinXto1ZYako7nApbzfm7J11WwKRv5qnrU4VdXsdqvN",
  "key8": "5qaETqSqc18xkPitX85NzjQQMwZoM1G8XkmgXuwPMeddcE4iGnpf7chmTGq98rxPHkkdJLCqR2Uz8rtqytSwCwdP",
  "key9": "32fnUGADqCrDYAayHZwRqdwbZHJkFrAkoSe377okgh3mRifgdBkgNvBs3XRZwSq24XgEsmJ8wTh7oTaErJUNtTiX",
  "key10": "561s3iGTYgvB8K6EvvtV2PRZygw6d1qv6pdExP3Za7cgAXLUpbWGgPyBNqBMowz8JDW6gZsxuwMyZZyUMUZ4D2Se",
  "key11": "5qej9g8wySPNcCibvK4oJgHMtR8fwkinEYdRBTR9rFushv62E2D1FtppbrHCK36pLYRb7B6chVvSWDL4qthHkGeg",
  "key12": "3zzQDdPjEbsV7c8hRsmqArrhz8VXUt3CBn9uJKWvtjkWXbkUD5o2JWCmSkuzRU7CbExMCwxNH6upx3yaiwwC3tus",
  "key13": "37wVLqH9kN45BEjDvruCdJoDHifpSRmFif7vt7h3rv5mrLcXaJGg4jyQ7hRbbSPc4DiScZWd6YcXFhCPthWynPPS",
  "key14": "3tbW66x5WZn56XuXX7HCF3sv4AaUXWy5928NUutRnqXGdHiWN7jLe3d4PWt111iPx8yZNnfmhPMZR4pixnwN7Zuw",
  "key15": "439HNddRasWDVrYfRtovnYpxydPSyiHsSPBgGwBLqhqZ9waHn2TdPDitrkBeEp9f2ejnYaKamymenPjejKUvBg4j",
  "key16": "xCaGhVwkYFsBTcnPX2ZbRfnLSfT3suvRiu1iq6dCmtZB6CUCn5FEngRzDbHLxmjsNpkxqky7yR6NMPtBMh4NTo1",
  "key17": "hvaRjNLCuhxTSGqEyPSENUWZo3ksQNAwqneDYoG3UEifArVdK98PWUBsMTANY7pa89eoa3M9CDZQ6YoLsggygMp",
  "key18": "2JgqqELprjH8WUcpUChZVgTNdcnuRiCQWab8WmKJzCrf2y8WcL8ghuFMa9txTmdUgGgvNagDU8fzt6GCrABXctW2",
  "key19": "5erXjz4CfBsPHB3yukAiFwbQaE2tgQfdpLPWxHcfE2YoVeah7rfgCDLnG6BGGzfBZM5YT98EEQwggZXRGRoJkPik",
  "key20": "5vfcp73wT9LPmH9nCouSGocT5Uw3nEerdSD4oDuyhEkpvtYJGX5XMcFFGGQYy7WicoGyPZXfQsxktaHr9MowvVo7",
  "key21": "5wuteydfPFVws6rfovnc2nmBw2AAwEoiRADMGPX4RiH4iqYQpPfggH2jqKRWYco9ZVnL79ayFiF8UbT8SL4bNNuT",
  "key22": "2xdMhygAsjXzVok8jqUqJ18ubVXQuW8JyHjq6Z4Ud4NqAeBjFindAmKdaRcUcPomG7ZWiVyD9bXUWopsRZ3hmsgR",
  "key23": "427C15ToVJK5xhwswuQhyGD61mqgRyzf7nGXj53A4CMkCqPg6yUzg4ZTUvnAdoYb3WxZmRnJ5AS26uvRjdfmisQ7",
  "key24": "2SehrgBEK3Kv6MucwFDHut4wyJXuHvV9T5eSpdQ73biui4srRKJbkBMw3QSNGubsBh8Jo1CbXuDy5cEXsQcKFpvZ",
  "key25": "65DnUVRvJ997ZbD5JicZw5NkDCWYEL57KmyiQEeUJhsGDGbcY4VKb7MZPFDBTfQdXxXxrTc7ZV4bR46FnTZekvao",
  "key26": "5MoSHcN9HM1YYAdJihV3cxcwJ6t7i5p7GvEoRtxRWrqhgMqWZgd5dwgb6JPwHF2c7UdETXeYwAwYZstW4chWTecn",
  "key27": "3oLFQmfPYerLkQoBUQLcXHcesRK9gffQbAQ9Z5AEZPkvmSoXKe5Aw7yZxzE95Beemm86EzEJyy8yHopx21cA7yCF",
  "key28": "4o9T2BWX5R4f3L7T7MnuZfZ6oTu9UUCCjogJGWmHXEyhZG9RUh4rkd1b4nrDG84VFMZGv9eUfvKRtosVTXfEqoYA",
  "key29": "5VS4N71a2zEXHVgffChfF3D7ZDdXYuc5p3StKLAHaqMWC7BHYkxKYtayR2rN95W1vJWW1ytnJVz71HRrTYEsLNAo"
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
