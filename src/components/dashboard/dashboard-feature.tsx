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
    "gGvhNjQm4VZvxDpPjz13qyfEyfM1V3UVYyzjnMejmXeuNCJBojJ7HprR8U2CeegBWNRNwgckou85DrFnTGgZwbD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X6bdGrszHYkZvuaX4BXFAezNyAfhKHAUgqn9aY1jZE2aWbW4oKVJ1gHpDYNvnpDiN79bGLP5Loxao7yuoJcHPU4",
  "key1": "5qmNK9QYtpEj9dQpYsXqdAmaN7LCpjGypPWNwEVHsWk96nJBgDa18dnrCo7EybmJG1TUEtyXFq8NyfCCH2zxA9wZ",
  "key2": "3fk8pza9yzYNJPMeFfEbu5nVT6odPDJtRbJL6okqjoEkWXyV8czFkWufg3rWnuLT5tfvBNTJw4o9dqoNiLnpozdX",
  "key3": "KUrSuGioArbb3nS4yg2t2Q9bf5zH7kQ6RFBGNWstqVaHtTucgyuFhiKgd7k2ednoW6TBURbEXjPkadGqmskPUJi",
  "key4": "3BMrVUQm4vaqPmvZyjoVPUtN1ET6vFoQndLwVhx2L8jdBNP9QaonwCUnNZrmKfTERhicZPKjWrngPEtng2Pn4bLX",
  "key5": "29SSSZjLCe5BsEaebKzyV1hkUEVrJ8qYVF2Qjwc7wuFXUssFsRxA7w37FHWLMJTKLJiwut4osTakFyZA9ck8NrnZ",
  "key6": "5uMpzzHsxhsU4wHpP4MpmhJfK6BwqSxjGs8WLJA3e2QBQW342w1kqv85DDKWwGYbVyQeJm1RqkzwQHbedpHPEkVa",
  "key7": "442nxRdjp2X7GpCZUzB7SAnxvATSv6tUhbYDeHY7PaYctTAki4W4ckV1c6Hk37NmVWSeeBinUCx4xxyaH6WCZPL",
  "key8": "21BbuxiUsSN6vb6d9KatC9KWbCFXGbtQqY7YWF2kzx3c6siBNLLMpW3iU1bJVVXAnjr1JhpPPEdLeL4SmqjrRKB5",
  "key9": "4H8qAkWpyqLnRKam87TQDX6p6B9oojMkBhitzUqGDpbCmDT9Pvs6iUyRMY3tmET8qDua5nFnv2D6EDBfyctRrFH3",
  "key10": "XSC7WQjP11qo4jJvVQaG44zB73DMvTTVqMaLwmzxarTCBDCymL5biREziHgqcRKjA3TsMyx9hNmy5KUx2EeLa8p",
  "key11": "2Q6HqwbDb3XioWDH9AY3druAcn74DFePbQLtiXPYKyF3ACtDkZCpAYLLWsNg8WiT9dyEBmbBiUyoLC5EEbcAccZd",
  "key12": "2fac615cyYKscksyv2PyB825vSUKRcNcLpgwxkkP8GmmAW4zThARDAMMMWAG5jm2yfCML3xhLtUCszfEVoA8vEyv",
  "key13": "5tQDbSqqoznMP4Pk8Nf8ZysbS77qZTEwq4JRCea9ke11QhYm22c9WytkvUosX15nPTpRUXFjsnqYB5PkmaZGbLC6",
  "key14": "4pJeKbRPYwaWPmxsePSNExZqm7TAqS6Df6jrgaZJLsqAz13FGBscwoWDg5sxxjZdF3mZbKhwVRN2XqnopdTwCZR3",
  "key15": "3gZJjNsMUjbYGzXcK9WGQ9MTXN7pXHPLHjFHNsKvzVpG9jSaYZMCUdpSahC6GKGVDB8QTxdeEqLG1TGD73WaPmbh",
  "key16": "3xVriy25Yg3TnRQ8ECkeb1JfiLzg7zZN3Qbfyae7tXpk3SAfuKQmvBh9cY8ZJPM7sErT3c4VWGoTksLXrs4m2hw9",
  "key17": "AnttfxFzRcA3hhTZpi3MU3cT7bQtDFzTR14roAmtJx9QgdqpFyvdEgFskoiYWmnz3Pna6hmHQPmNocD1V5dH4fN",
  "key18": "53zjqHigYUazfjCwSvbxGLfRYvyGib4NvT2N6m3teSkAbpxx5mya4R8qDR2eMVoM7KEuoxsC4whm5z5kRzpQftep",
  "key19": "NncMVcrSXv8o4z4SuKuheMYpJsLVVtA8sM47um35KdvKkRpNFVcQL3DEMXzk5bWq8wdee2xKY9ViQokr6RzjZnt",
  "key20": "41LmnJ1c6hUYD4txQQWpGefRpCLNXgtJUZkzCRBdQNm5tJRgE7txksenHGHMfqnnhdoXFBt5oeLgM32BDPGDV4Lr",
  "key21": "5taEHxN9XUUEF7Mje1hibKyvDUeexCErHxjPiXjuWoMN2SJyQyBoF75gtTAo4SFravasdsazHZibijtNRKnw5afb",
  "key22": "2hiWXbWCFxWiLzpTWiPx4tRzHXTEDUgdibAiErozMbJZA9fXRkjs2uEhgoExpreJAfXKZVbNVria6i8BwMRd4AT5",
  "key23": "4ix9o1CTniJqG7DzFSo75JvbMo6Su46czzyeYNDtt65iorgyXttimCEEVGnn6cKoMpddrUXT7az1hPXN2uDsdtsa",
  "key24": "3qcC8ERh7yZvPJe7kMAu2pWr7xWNMWXzy3JV32PWRD5ZVh78GMscvnfJiQ48eFG8NYbY9RZXC2SrtmJLm34JrMDt",
  "key25": "2nSwZG7NbBnEiv33L3GKSE3hLVRVPaT6fyENcbnHig1zLcwEW23FHxYAT4ZK1TcDWKTs1JA9X1rDUn2mzYJ6iHpN",
  "key26": "3eWKxiUyUZ6ov7imxTuAuK3b7okvS7iZnFsmxmMVR3ka4rFVGvCYkTVzjMmPENbSdWpmefhX2L1iv2JsgCDSVuQj",
  "key27": "2ZfaGwtgCCodDJLaKuFSGKwjq6ohZmq4t8CfUZjpnUcF2Cqx2zPEBqy3MvK282MZCN4QVeRqzgXEw99MCCSeVXZz",
  "key28": "bkMZrVN8HmhPkR8nm1kvymhJUW1EuTTxzH6FkHJ8LL95NYc2JjDktzZ3pzFnsQ5xVQhMmsjCK4MjGUAYKzkNNs9",
  "key29": "45xjHBJPzALnTSXwf3h82kputot6X3MUQ4yRnXeP3t1WnkaCkEpFEvU1Jw3no6Lyp15nzBNN4hANQVzqturQwcdZ",
  "key30": "5v8YnHoz4JRxpz2P8LBsXhQgfdkFrJe995VLcBx1tMjWZ6zRTH9Cz3KVPruekVpJqtxQpSqaskkq4dTu42ZveEpx",
  "key31": "3Te1zDCbkMicqWK2vcFxgKhCM3F7hUbbJMekAXYtdqRswPKF1kx7jL1c5ACZJY1gEfqteu4HSwcYYuN7gs3TQMPV",
  "key32": "3r9pd8yBnnnG7Td551YT6J3w8vcMHCFAjkAsSL8niVh9kyVJ2RAFEfQszSt17Q1EurGY9esHxHZmX8Pm4t2mq3SK"
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
