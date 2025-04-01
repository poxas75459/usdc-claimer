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
    "48fibQMA2fzTQbF1jG8N7dycMiGzmEkA3YojfsMDTtTaLHYfGKCScrgXNfr4hGprfJLSiCEQW4RyJS7nPYNpUWuu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gaAxKaT3rYLSZnTfTdG2eqiuvGBEs5hqpDFCzGYrREaDMWB5U2mVPjdCWrPRJQMbraR5fzBtC5MZGJcXnDbQWTF",
  "key1": "64cvU5SDwttLHGRsppo1Wk3VbqJdSYaudqpMeU5gNhGWS9owESbY3Cfb9dnF9XAct3TZMs2UR1SfgKAhbhrSG59K",
  "key2": "wxgsWb23VfZSdtqcsDhVgL5ApktQp6oUAtuMHXxoxB2hbAueELooFniWSih9B56P8dfuovUjDPRYbquqkQzEcEp",
  "key3": "3GCTY9KbQWgHrmh2XfNL3txXshDrRZWmef2QA97E2RXZEnkP6GGpBPUMn5wYxUuhVPuroCwFzeymqZgo2zfTjwNt",
  "key4": "2po8ecb5mgKirsmygPL1TCMuT862jVJovTmWAbtvV1D8XLsD5MJzHCdN7d4CXCXSDz3ctVLcriRF9dNSes9sWDNg",
  "key5": "5K4EF5nLs5xd7B5jRdaXDiii2wshdRNoJ4e21U4tNbbkDepUozUt8f5e36vW2nry11VRXAkBSkPNcvbwse18TXoi",
  "key6": "WVKzuSLbcuHoELpmHwbSE7EMHmHoimqXxJHNZ1ddMcNt1HZG3tSTbohL2e7rBmc5fyjaAxUDYrmAAjjSbmphzdG",
  "key7": "4VWWuKkJbFeesMqSWQGMiTUJiUmfQxrwPDQvURvvehskBZaAUo65vb1UCvZXPKisF6tZdiAzvhC4me75XGJZn9Gb",
  "key8": "52a8sKQETQXRaYfk32M9pBs4khuu7bUmfjbNgTWUJcm53gTCuteGnqjXDWhRtqrwoBJJS3N1KQGz944NNDKvhGxf",
  "key9": "3Fm1LYWz3hTcEVjgbpBX5XQVD9D1utfQ7JCznZ9fANZSABZ5ZDHiKjR4pviyeGz3kj7BHQSAVMMzP3ptoKDPEBtN",
  "key10": "5pxEsWzmDNtzMkpQSFGuvo6D4nQgjFdH7unXxDXJkwRGuJvrZWRER4VSLpEZzC9fD3ZuhmRj93437LM1fwJngtXf",
  "key11": "3tGWQri3L6BShbCByrjYuZekTNYKERCWkcvED1AwtPcEkAAiXzXbbq7FZt3LiCAbSAQFwtWvV9XASMHqHtdJ7TPu",
  "key12": "3MsQGTEyYSjLc1XpvhpMppSb9dDXrLWpmzgEjoje4xwcVMyg6pN4HCJry2GQ468iw1g2Ph3sw8reKcBzhGYsko1P",
  "key13": "qkZ1vUBNLzNyHu79D7xDFbfbvJWGRPeQ68XaMDpZr72uq5pbM2XNBc84J2iLjx4sZGtkcYQ1ziYktUaV1nTxEob",
  "key14": "2jdZR16gWDvX2JKMWt9aaULbYWbPyg44fsszvYunsM9rTmRKs3Nby994qNzCrgZiwkiCEiNNNFteckjY2n3LKfU1",
  "key15": "4YcrNNQakVoMeiMPZ5NBZ1au2iMKMZwtr6pkQGvLvCAkn29jg3ucp3GqJozGatcZiDPqP51mCfJDZvCqapVbJsDt",
  "key16": "3Eego8NrUzfqnnnVqg6iwzDCtuCkDrxrE6RVMkcQNBo9YhJk3Lsd4dETxpTkAUTBZMRp45wpShmVZqaqbkoRzs1m",
  "key17": "4XCwkT8VHf2jZ5zBkbZLpSiWajnDyadLT4kkEaFWhVhHpPn63vKXabr5C7KnEuKWMVduqq8adQtwRmkqLFS46Vhw",
  "key18": "4uTYZjguBGPnC6yvwqUPuY3EJuif6NYDABkVWKQo8zS7Lq6pfPfGD669wupTn9JD2PxpPuYwRppkjrXhXionCyyB",
  "key19": "2JTk8dy2cNMiDJLjDXpaxrjCK9N82vH9XP9dkr8yByHVUQ8nYYnRQJZz14oLWfpm2pwAYMgXZw4HkN4dAe8Lom3T",
  "key20": "CX2FxTwGDi2mHUmdjorPyeTjyfB33o3dP64cXp1p5YcK6x2xGRKczhBBxEHBXBeEdQtjM8DeS9wMw5zBggJUzvf",
  "key21": "54jRE7xe6Zi1n4TzgZ5Qw69peZVCJ7qo9cto6yy5qFfzhspGbRMWBtv42KvpvgxaSTW4U5LzGHSKaVYR6AEETPVx",
  "key22": "MhBpwaSW7i77f1NHG4vjKRcV2mTXBCPV6FwMTvZ4tkNve6Fx4fGtPrAXAwusqun42jzcyx8oaeGCo3ug1sjfS4x",
  "key23": "2YUwyyrhgXBtWrcZ1bACjbBgybJka3bimk5VaUowEdmcz9NKo75p1x1sTxE3v7ta25F87K3vJYcBWyh2xcfEoseU",
  "key24": "5tz9ycWWM3fC8a6A7A4Jp4MuVJCaJJcDeteXj8twq52CHW1zwTA8RQLtAMXTnR3JZopedakmn3JekTSQ7xVoWYFi",
  "key25": "4qNw6VWEFkGfDzJR5TdfAU9Co62ejRZuvaoqFmRrUbT71zkpnK6uZ7sGWQuJZqc2hZwrhm2apHLFNTtjsyTskjcv",
  "key26": "pTmv3mDXw96JMHMdYGnDBPBQtGHLmJNYgrD4szRBHnNfLnF5uDYZPcsrqQq7AVoFFd3Y3PiBTHMaTnAcvd4LSjp",
  "key27": "56DuPWMPxgTpvqwaEzKye6tRzguyfALuKaQvzt4itBotWukMbMwiqSGvWbkai7G2KExPsU4tdXdSp5n2zjWxEQP5",
  "key28": "2ZJQCudzzMyZqbKGVug9nDojiE2YzbyoRpKpjATjHJYgMfwJ1ssJnFhp8yCNEHGgJ1FyEzAF4iQ3ay1bJs8B8K6U",
  "key29": "2SDxcE5E4pXuuTGrYGAJFmfXkDRXBcwdnHFwBf6eZK6dKpmBszSrbQtBi6DGkoiwRtY7LEvZcxsyyi2zaPDN2dXa",
  "key30": "5KkdYQWHAxkSNesHgR6HCySdQs1MjVmpY18AcS4HW4CyWuLPVwnq3uzA6SXUFCYzWodKuqvt4q4zV2QJAxDZJYgV",
  "key31": "3QAhf7bfHYwepBomcdaCT42hG87fBREfDsmQoE9yo8TmfZtP4sipZFFzpPrZasdpqAnQh3Fhi8rCAfqoFycYNqAi",
  "key32": "3YLd5Wa7ftuPETG5GCPYroTm7TmmMpjmUtPY72B7B88tqP3SqRZVWzepC1TWBJUxGt8w48YxyEJQA8SU3bnJ6fMi"
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
