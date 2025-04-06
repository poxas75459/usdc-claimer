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
    "3qHANiRjPLUaV6J7Pww1vNZmVTZfCfpQwF8jCgkBgjL6SK13WJ8oGZebTCsPG1zT2FjPSWbvsGR61SLFcxyin5zH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44j9tPVSCx9fsaMyUxa9xypGPSozyZ1tMxHSpzgKpazs4Q3fEWMFei7kuW6V4yn7p96hKSwhcWVK81PTajYjdA4a",
  "key1": "3BZBggphLMqQhrrqALpP3jeW7Vm1KHUBqJDwzFzAkBputhGyk4eQsTEUX6YE4r8RztRkcn1ShmrPyhj8sYtnQw43",
  "key2": "5Uixc5BSkMpzak1RvgFjCr7BLR6dVAn5nDDLH471nDjD4FLaWJaNwAR6rv1PCsWhETZJQNjFfrQ3SiMJqZWkTnB7",
  "key3": "4QvuLJB5N45U8gjYjLiPFLrvBzaveUjtUNVGrXr4v3KtzMnjTNJwpTatZ8JiWvcfNrMq9j4oFhGuAeCiyTzcXawr",
  "key4": "64jgvf4pgZaFKmi4gKbGbz7MN5c1iL9v2zbK1giZmYmdo3Ft6o3uEqLvLWmKgQkgNfCwGgrh24hGNjG2UTibtZHn",
  "key5": "3hhpq8j9z2xrsXS8qCiwcxoTsytj2dVVpZFzhx2aagvwueBbebk9tZnnogNeExC8rnr1w3hY1CMpyBPtw75aCb4d",
  "key6": "5qAszL5iG25ijSr6d2EgZZsiMquRMC7rkxCE3xMXLZiTdhBbGni3AyFqgmTCxxm2kHNLS9KYuC3r311bca7T6UxU",
  "key7": "2Fjrso3V4fMFhci8shaMuppPbgmyet33GNssruP1ZaByitiW8srR9nzm9yhhdzeNEDXT3RPmDqSJcnAoAta1LVJ6",
  "key8": "4fvc1wZ3svA7yQhHGaoJmGButhWwN39QpG5vM9r3BzXteTCPwqJtdArLTfsn8kxrfoh7k4pHkuVFkMSrNBWHkY5z",
  "key9": "VgvDfyeib8fLAkBrv2WHkxXXDkWzQp2Wzh4iYefcuv5JVEwDx2QwFnFK4BCh7mu9ti6roGymrDW5dcz61AyWdVa",
  "key10": "23Ho8GXUN1GmKzH14z6xvaFq5weiLwmxoLhRY8Uftfe5oEPtHuqXFTTmjpHusKRH9CpUuJyc7otvL5cBrW82RNqz",
  "key11": "3ZrxNvQeKpFk2k4qnfMg6MaXf9GDU6ZgcgTSVq3rL2PqGHJCBcfG82XVUCjQZsaPWPLZQ5MZjmSq3KU73YxUsiCo",
  "key12": "5dLfw2NkKG3sfBUjYWyu8uFMCaM357r4hsTwNWBoKhXafD8bgsSm1oPZDu4xDLhEqSAxDZdHkoQqo34o71TjP7TJ",
  "key13": "5y56wQBHxBiDjinyqbmakT9pnnXYSgix2Uk2R6cMA8TgSjkQLqjeb7obhVmB1bu3MUtiVtEunjiUs3vU2354YkKJ",
  "key14": "3z2ZbMXjLYE4X5coyfj2RGsUD1XCKfCsQCGgGDSUStAgKwKc1oKQZx2tjgNMQnqdZhjsY7QVYgEtM1pVBhTnroZz",
  "key15": "37Vc7d6QyV95M1mKkWtTScEPnXtojsc2xbQk6nNrzwcQsPcaTe9aFGFa3bSnWMerrjPvj8g5fxnUxZTpaAkhTn4W",
  "key16": "4FdbABs73ALL9dZU3fvhjpsBwhXMHGSJg1tvRMepRsu1yWUBmSU8AGnFnjcGGJUaBDW1zXMqt3V1CUw2vaMRhXsP",
  "key17": "3faTKqicZays4VqWnTv6dszDt39n4T1R5wWaeWdSn1dg6DGb5zEkcxTaJhmr7XyhcRsbLPTiLMvRBi7jmjDh1q7Y",
  "key18": "3ueR9b6RoS4pzM9iWRZSUXqipxmwo51GPr8rSJ9dqZPFkyxmLKCAxMtBAZCkCbazzjUcfsfK7ScnZMcUFSczSYKx",
  "key19": "3xB1ZQmijo5twC5rR9vkGgjgZFoAKiTY2CCaC5hbmjkWG4AtUZtqcx4GooWsRbP9GAcumeNka4sZabXj4wKoqq6g",
  "key20": "3b9zhEzBJTXZDojtuKvvQVdws8QKLwTBaCKZTvuH97GBbfHRqZHuGDueyYUwWPTjERgUqo24bsNdARPqQ24dYPW1",
  "key21": "3WDSE3jqwN7KPwGjbQx5v4Z3oA3bdjtUkrwp2yvi5tyUXDgBpQvYARkWFL4Fi6934qhebonZd3JDwYAxLZK21ajg",
  "key22": "4LW7jeihCRbTK8cTuLaVtLT6LRvFPBuuNdtzenq9eB75ytbLLinQncADwft41n5J9M17cto4TSmCzLGKR7Yy4DZ2",
  "key23": "KzXpYdiSg7yQFuwxRTM3XfCKfFD4BY6sZN1qJcqcvscTiJrkdaeGcbav1eAPiekQNrLPk9Kc7npppKvGnwiJZnH",
  "key24": "2tRSzBr6NDLnAQb1Zrrpic6z4WTGh6jW3WTLct6wukUsFePFACCH9xtk8nR16eL79CkYh3VQVSUtK2ajfnrxmcpm",
  "key25": "5Ei1QvzxkZdYvza7mZWPkLphLoLwgfg143ss1FpHEfr8FYqzXpZeua5jxNdwrbMg6GJVERqseRXHJ1VNC4DfQggs",
  "key26": "2UP5qaKptRMR8ea21bkhaJKhMcaqfdtEGxGtLhee2X4zwBZEaLEfZmkzpVT4VDno3gxp7CSwJrV9JeyBEg76RSbK",
  "key27": "2L25NGgp4gQafMLn8KTyDd54ZQbCmd4YAy7ba4nFYTfvgKuVEParLBn16UREFpdx8xpSurHx2PbpWQQR7DJjvrPT",
  "key28": "5bnLeAM3o7TWNff1hkiMS4YRrz3BhHu9xa6LQ7CaNAbNrwgVaw5f4FVZSkwki9cjifkmUt7BTQCQoSC95VzffYuL",
  "key29": "4E5hJTrc6cS69F92gUPavSMxU8erjPiBsxoGTX4RK54LoyhTeQrL1NxXYpmiWwApEMs4BmLrtV8Ap9a7ywg1NxPv",
  "key30": "454RThrDx3U9hqcyRa77tvTirh6TttLzz9PcZYcQBSJYUxUPaegovV5a8mHxWET9AZLu8Wiy9uDvLKsD8ZitN1iA",
  "key31": "imJ5NFZogZQdjgSQ2Geu2WQwgHjBQg2CYMEFoHhGzSzu7wfGLMNRH1LjyNQxYowtuAUx6b4yDgF9kiH84Mke8KL",
  "key32": "oqhYJ8GQYKVhxh2edk2hyXFf14j5SpHY1C6fMv2F9jjJsWXFeeAEp8PXcFtUduGgYVQKwNfx4nJssHu3DCpHiyu",
  "key33": "T5X4M9gK8Hfg3BuJ39K1LCVDGX5W8vuKAzSqmZog9pJQpHQFqRZKAG7cqoU7BySHRPV6qEpG5kUhWxdKaNbD4Pf",
  "key34": "5Jzzzw5SxM4npnatE8yjcjSLjNvf8w9JGZBfZJWBDH2Hac2UGxj8PU4uhSN1oMUEaeyxjvbchGj4CwDLXJe1evGo"
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
