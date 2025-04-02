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
    "4AFApd8dopZrF6AeuxpqbBBpJbkzeqbVg411zNZyL66n4baApyK9RHkwMCFB8Fdjd3rtLeUELSkaLUh5NcpwNfDp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4guZf1rD3Z9k9PrcbU8nCYWAQbwtJPoLcWuPYZ3w33Aacr5o3pNj3Tq3kzc7E4E7i9kdeT7MaDZqweGvwdvYetMs",
  "key1": "3TapYjKb7tdDdd4PAa5SugcSnfxoeGRFZaMPBQNWSxgQ7KTzehQAtAg1vHpGZyTrM9Kkj4qYpsyvQiirSfqivmuM",
  "key2": "2zokHBQSfQbjjt7czKHq5ztC7bu8fV7paN5vcJJLxgddnURj9zCD8jkc7EaHNhhC6hBjWBH3YcjhHLGNzWECVVKr",
  "key3": "2H2XCb73wwMJVcigVM6rHt5RseutfJuDVPxf8gEqmL2Br9kDB48gYJckKpwwJNn5pMZoF7q5evwQbWrXAr2tw7Yg",
  "key4": "3PNtBbtdL1ULrqYw5dRbEmkVzGfrYmud1ue8nfMXpiW7ZaeqvRtoaCXcKwhUAKbKFW8mgALG96NH4T2XsXFNNLR3",
  "key5": "2wvUATcef8rTzpZDjYRikfFudFABwhUh2qUMug2f5sbFzpMh48LVoiG1M6Xvw8v4V5Ps7g5LjuVyXy2ySJzxpgph",
  "key6": "6484uJA2xLGsNJqtv1XfqfDDAaPW5z54qYTBsu68DjfyEGuJDABwvgoBTcrZN8TGy5xZc1jgTvqeCYUiov71pbrx",
  "key7": "2hSAeeBs63yzp5K5zt6jJpuELi9W6qANS2W5KmiYNpzYGYk2LDum9XiBdYTBAcAC6tmefjTGQzPc2FRofJecFvv5",
  "key8": "32Dw5qTaWE4zi3kCU1Dm6vP5TtiUjoT16jH6c86WB6PLdmSPmkQ1JtsKrgu1hdXNuUBSbYG3dsYgcyyqWLYoamFn",
  "key9": "5v7CiS9kggk6pr21Ej2Jz4nPaxF4zEfB2fTRyL5eyWiopB2QBSAJyaSasSMdddmPA1ynGHM3FqFdPDWVJoqPMKRH",
  "key10": "5Yq6xgRhC517GsrVKUBA3a7MqvnvFsuexM267dMkyGxAhTA269h7EfgXaNNgwR5YMUxpWCu98K9JtBxPfwUhXVG5",
  "key11": "3kdfmxYfxoreCmEvAn5DLpKEhRNp99MyS4mpymcghhawnamYKAcZoeM7EcitUgDsDncVHTKn3FEuWeTxepvg1L3N",
  "key12": "3NkNhRQ37UM4eBtwj5YGNEqYq2vGqHGiiqYF2vDsVn1UPrsNbJ9JKzh45tMy5KnE9Q4AX9myw2vyVCQYB5n2aYTo",
  "key13": "4mjZtYPVhZx4jq9FVzmQre9gXZkX1qdZwkJfofRrmK5UHDURSVyMYoSL3FS7BobucYJtNc6wqeQTLddD9jUNCk3i",
  "key14": "43kyeN1ay8oL2j1CbE4G13GUgqPNMkgnVUsp8HYxh5TJ6Ts9wEmDX5bBdNekkbLNV6xTWRNH41oho3rmspp3tj1s",
  "key15": "LmkBv5DsBFa9vGsrSG3xWzKSigGJy89EodnvLurFiw2WLmfkKrJvLnEXmXLAiCx4mDbsByua89CnVP8dvBRG7aW",
  "key16": "5de34dimE9rFE7UU4wi2M51tAT2NJkVFdiuz5LcmxRJdbp6wZ3YWH9wqhzyNbZvmwFjEyyxp7yhaYngEky1USpBJ",
  "key17": "cYxPZ4qmA5VSCJatVsheFwsCJHCQGeqQAmzkATVdU9CsdBiKDPto7VemsnQ9m8nwb9cKmEQSzntRjPqhAfB455G",
  "key18": "1WfB1YPWj2wym5czzqsBfWpbKaba71jM2govxCwf86PExjUS9Rq3Vnc2HMYJzsQj9ugmhmoVKdcYBmvN3bEco9Z",
  "key19": "5hYy6p5zrU5kZdmvWorqvF451CBWBzvY9pKA3dJ2kV8aG9Jen1nBX6YN2xzb3MrUVyJ9F18WVpC7rpnCvgEGGXhN",
  "key20": "35HWqPDo9brhMUgiEjUVx9Q9r75zgUDYWdX9QZnVbRGuHj7CXUZxJvmcJ9hPYfbYm89tMBbS6xJd8erL6PbVro5x",
  "key21": "3stJTnTdEc666fh9nBteozbkS4D8BAdLkAzxHd5gjYhHNgxGB58ABCbcVua7RYWt3wQdNsuXvDUjrprW8CzKfRDJ",
  "key22": "4zzmM8AT75w7yhMthKPtYuumndw5gPvydx6mDenkjxUp29rBdci6eCM4k3Fbvx3bLhKQk5nKR4k9vop7Ja65rom8",
  "key23": "5bvq5y9huWh88k22Xp2LSnHkFTZUhQfgjdbH6uEi5E3qJG6zLEfoWKq234gsoXk7hyQi5gCNhRTYZNMcLCSv7Pac",
  "key24": "3abV1kH6LU7oMjivQkKB1s9tppFs4wtZz5rV917RmRJDLF63dWZixRo2xm1CVEevzrQbqP6JzWF6GnKCDui3XkoR",
  "key25": "4cSGQqUB52Ex2ZBpLhTyV2TJJ2ESbwX2kM1S4Vh5AX8tLfdX8cTcE5c18HWXn33mfAjvvqJpV62fNZBJeSzFHSJQ",
  "key26": "5yX5yfJ9PjxUkjamceGmQQSpqakgfV8majb1RaMQSDQtTKGLr3Cv4gXVhQX2V2ULit3gsGqSMg9VCdB3rg4zcUxa",
  "key27": "3EGaqB2qCGCQZq1iHxUvQ3vceQ9fpfa9bPnXhANr7Gshz5tpF8a5rsy3KFdPQQ6Krg6YpA9CKXzYBHH7pv6NXjKG",
  "key28": "4KhukcKQyk5VggXYYmsAtqkGT6fhb9NZEJVcuEHKXNLomk4qNw4zeAxetmfBPvsYXeWeDaq8JNSt87aba7fQB7os",
  "key29": "2imUjzbJfNauWhgzpKZqTXzqdZKHSCKWsR2PfAG9urERmaxhJ15hTYucAxXoZjnSYWHEDhj44UEZuZ4XuQ461kD2",
  "key30": "5tkVCcixCEDbpikftnLH1xbZS5tjndbyJCPF9ZtN5KcTLNpuJSBuYXMAVnYTJUxRfMM1UE4L6ZBrDbZk4cP2EKg2",
  "key31": "5QdB52YnCYCWNJKYwLp1GHSQ1UrxiDxT5w1b7zwuWq1rDh7sLVztP2qzwYnbrVqNiUvUnwHWRKVBW3naw1tTa6zr"
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
