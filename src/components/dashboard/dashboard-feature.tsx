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
    "5LLPyTR2Y6frtjZ9CzVhypyWseSNq8uUrBj52xMj6pHySCM8BPPAPh9EMaudneYw51jpCZNnEw26kRsiZ2m7BpGs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51HRA9X1wMF4mtTE2AiwbsWcyF88bar2qWZfu8qohQjyTHvyz3zd4WasAUpzvEepqp5q86DNHS5Yk17GST3Vwa7C",
  "key1": "XA5j87CkL9JRSca7yqkRqbnCDuinAGs9eCVU5cgrUay6A1BY71nPs1Td2DC5549aB8gnB8JXzEVRGHWtjyehALY",
  "key2": "3gcXMUHVgj7PnS5kRwaRX3mcX2wSpfhN8C1bMeevpYDgQZx2SU6kDYdbSjKiQq9krQZu3fManiQzm24i3VNsxgUr",
  "key3": "2R4PixUSMZba3zLA8iakKDknYHzgaPo9djE4VmXuXhSpQ9iM1vY4qh3o1S362L76HPJ4AjEYkYgbfSkN4W2VsuVA",
  "key4": "41cWiFZ7b5nQ8HqFDeng3rbN5Qpuza5fUL2vwdprJ6zPu8KpTrypGECN2ipoNc1YzZ5AQaV91GdRRrmdP8u7w4bh",
  "key5": "2WGQ2xbNJezeLfCg65ye8gpiobyk7CihNBzyUVrhvdGgzru4ssvE7bLU2XAcSXvJvB1PmiQUDGaC2q928Q1cKaY6",
  "key6": "2QZnwQY2sgaZTuihyK6gH9Q63Nf5Be5DxPdTHnyJCDARPLTUUsSokw6chWkHqWs7Un49YgjxKLRhShVMR1eqqAHL",
  "key7": "ZtKWRTBjuWeQ3m3KZLpeMqZELwTW2ZJMb4Leq4Ey6xbN24bHkFh4wq3kDLiA1BrHYL8mEvuLFwJ9vXgk9pjt3MW",
  "key8": "65ycdC1fbk69VcAx1YgNqmVRpnGAAKrQ6nX1T56S2hMNVWmDgG3udoUCSRMCXQR9DEMBD1cdJKmnk7pKu4n54xM7",
  "key9": "4fBS7bjshJmu7wn4VtxjgQvRWZsXoR4H2zzhpo8Cd41puXSq1ZZHxee6smkqELnnsiWdHS46cSHzfML7EsDgoZ1M",
  "key10": "2b9ZBB4SJP2aJUekQNdrCsfaHvXeKDXNxJQn7bNerdXRffhZyRx5h2fAnKcwuNkTBP6Na1mG1iMkBkoLCYhCrD2d",
  "key11": "3MDQeAHo9ab6Qx4UT1s3gahtCZ1ANFbufnoAnbK4mZaPNxWezZkhexNBQsH3KuPo6kqJEQnotGGqRiL3KaQViUdC",
  "key12": "3JoTTVtPogockgtR6DhN2ze8qZnCWPerSneeaKmnrNa2LtmCZGzTmzFsStEWPsk8jd8vgQE9UEk9AguNArGMHKtL",
  "key13": "3bxaf8PMwyPCK4v42oCqyM1exXv9V9iaVTcmjxV1HaEp44YD2WnVTG6ZRR5Fedt52vcB4Bsx4xx7FBB2j6iDiBHo",
  "key14": "5wPJ2Lz7ZUy1pmGTWET4oqDoeY8cTMQr8yWMz8L9YjPfGeEBWDca54yoWKxjScgrp5DnbcooRp9XnPgCKud8j3xF",
  "key15": "4DUn8YCvq3S4YpSnxxDfDY3uUKy4njxGfVArxomD9Bcuwuescto3vn2EBGc28Vg3P7WMJYMNWBtqrsKqgd23SzAL",
  "key16": "3xMmEa9YSDeL4r8kAWnUMBACJfQDQhJMaSeB2Xde5425akoQUnbf8hP2ScV8LfDPp3ggfpqwSKynpwRtBiuMV78N",
  "key17": "FhE8PkUa9vwzKkEWosK2uop1CSh37rVuzwxi64XpVpePjhWV6y2UaqZ4PuMjPwr5fPccet8woE4x9Qgpovw2nFi",
  "key18": "7wEiXKSDg8pebbT4JBYEEsqXbq8C4cDLUS21RcK7vSoQZ5ziFTkzZLvPx3X8xfkH9vXSsw1TTQn9noiR5Me5nfB",
  "key19": "qTF1E1LuHiPMJfJaNHfwHUkokLQmidRNgwCC6KtBBXKGEurjMaVF86ehJxrZwtZeXexGMgxheVKpyE9M7iPyA62",
  "key20": "zwJ4y1GqmCe4CXrRRojbaqJqh2wZrABZu2YaCZJkXMkVsLZewbXHmb7EYNLKXnzLMo31iz25q2sjcuZnUoJF7xj",
  "key21": "4dxGDXAa7uLrGht22FxamSs8iUzWEQkBHRDSXJdzGVvhuUfQ5TRu1zMaJcyAy36iob4yq12oHriLbsEa89BUDXb5",
  "key22": "4JHBAft3tPgBh3SD8sooLgRwf3QBeDSyvjKNgbzvjP2XeZH9WVHMHRYPKEAbzAs5nXnuxvekNeQw1L54mDugLQeB",
  "key23": "3ZGDBZY6384ZMcovkUWVWTc3UnAJ8zcigLs1SvScgrYCrFn1q95aPtips9cJp9cEpyNhG41GAwKQFgfA1WHcjMkL",
  "key24": "33MoTLHi3Piw1e9Ycs4z2Eeenh26CX4Cy8yvt6i6pHDwcfuVSZ4yGMPqZDqRbiiStQusTLs7kaxTqR1oJLVDomG5"
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
