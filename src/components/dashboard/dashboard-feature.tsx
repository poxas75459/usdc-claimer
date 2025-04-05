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
    "N46heBw7hfKmJpSv14eosoZ9n8pEtpTcV7gisfUkWcQ5wXfnRLpyuqJSZ2rMVvUZDcr8f6zV61E2aBKVtEdgNK3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ca4pNaR86LD1YoDQ3mjkzvXKaEFLimAFWM2A42FJigRK91cd4EdsmRWiv2QvBF3ohjD4NGHXmwsYWSyo9eH3i87",
  "key1": "3GaAvJXZXnNyq5A3fHYPSX6DZJgijXjQzTeGbt5rmx1KdEcqiNcUgDrr71Sw2ZYs5zKHZUSNBVsUMxkwLhVrj1xc",
  "key2": "3LHXZAPcSGm2F41knmUxyR9RngXVceZRJGBU75FZD8g9mVpdoH3mQphzZytUxAws9886dBFoDiDhFJHLaUZ1jsSH",
  "key3": "26gNmz73NZbH8HxCW7ZTSgJD2ziU83uLHAQhzMVk3jNqtHUviYnzqNK27VdznMt3K6cnDkB4vjZu9QvG89EWhrZh",
  "key4": "XDJbmt99shKqhkibKwyBwerBqiCcw5Xe5frFoqqbms4XpdwbctdCgxyHhkjkR1VmuivsrtxcrKdESjCMLXH3eLH",
  "key5": "5nR4dUVyQZCuP2Q1Jne6GHcZX8TmHqTVqeDH1Ls7vaahJA9A4WFciawDDCKVbzRio1N89dJQ88EyGB17np1YPhH4",
  "key6": "4Dp1dgQSbZby9JtufWKrceAEHFJot8WUt4HLpixvz9D8cBCvMtGLPNfNFLYiVRQFUpP8dGtB3wXzroSTRvKMMf7k",
  "key7": "2tEDeYzXT3iBvYx6hC2W8Sky84f1A4RdQzJdquRzKPPywHLT5qxQTVNZJ4ai5fFWFKzcPtFFkxGCCTbs8eUuqQis",
  "key8": "4Txf34WDhSFj4ec4Yujuu9RWMyzgjdWi9VgRLjp3eRYFuoLgnbq4rbKXkq8vZx7j2TjEtXgPiq7rbbrhn23h5Zvu",
  "key9": "4BED6vRS18zft9tBXgWvAYZcKM4vj8G1ecWfkdjtNq16PSmDGdTcfYcfAypHfKAaQZ6zZWekcrp79uF7t981Chjz",
  "key10": "55gPspjFPSHLA2R8yVUahuUcb6dGdDeroTzC218P4qiP7NG8tXdLZfhdBGPoUHtCPqsPSNLa2YfAHo1XAHJtzfk9",
  "key11": "zu9w1wWwt1rwjTUxeKLERUYqraDdmP1wHxML5dkmtvJ2hJgGijNzrq3esS14ataN8wd6YnmzytXgKEKErtjL8QH",
  "key12": "588jDQMifUox6srtyxJwHvgUfxreMAkCMJRfsLE8vRB6Nqpfv9dkne5Xj11KvFkU2FPFQqu5BukugYJrpku8rVAq",
  "key13": "WXX3fNJCETxtV5L8ANJ3K7FUqnS3gAzn8Lcrkh2HeEZDFTm7DaQDu9TeJHsNdGcEp7BUguXREgwkhXsYYfpYPGt",
  "key14": "2MddqmimqQk3TPez6eeT2AgHVzUJhh3gkVDMvFEoh95AD39u7KeMi3vxu3c2pLX36bv92T9vLuEaPSYnhchMJDDq",
  "key15": "5qgZc7Vm7sm7asKDrSJ2vEmiC8WRZzSiq27BGdb62xTXshkFXMRHXdiKCY42YuWWikJU2qFgwy1wQ1cCihNcKrNH",
  "key16": "5n9SHscDmDBibbAt1uvuzyyTcF5gqT5kvyfworYNT946dbCFJ8SAYqjhDqj9kCchqqBVkwVxA6HWe5YDmUfH4vJr",
  "key17": "2kny9bjPnUuXbsDFwy3QWBNyeRMmNXP6QusyrvbzQC2EChE9Ros9GEPo3VuUFkAHXHkvBU554e88uyHuWrXmdvCK",
  "key18": "5EzrnRKqbQSPGZou1Vn28ncJidsjBcBkxwgJveB3bp55KECRGqjpG2yGkuJ5zgmZ2SYgTCD1i9DHScFXiwvWkAuf",
  "key19": "5ghBe8dMv419EirbFM3YhthTK6zjdVFQHnSRzVTEYdk8J9qu5cjnYU3p8tVSAtd8tELE4pL1kY1szG7PheKx7nkr",
  "key20": "2NBSqXUabgqWwJVR1GETHTF9WL9TzNxqYMRyxTCmLAYiis2xSC7QEYk1wiqrc16kK6Lu6rLC8JdK5ZyzXsyDicnA",
  "key21": "5NP65s35uazRJzjKmK9tTngyWTTvVY8PT4Ai9yMdTaaBxL5SrLbPyRYcjxeNX2jNbzCMVmjdEbjkRrBfC1xbWeTD",
  "key22": "3rdctV6rae36M9rt2Mqkeztiey8pLBxyyEfrxNebKtpFYx2x7W9PaEChXGHY7G9MdAuM6yaH9jLFSJrkC73CfYX5",
  "key23": "2ASWMxUfD7qRuuCCNEbVPrriwHYjj2kRz8ummmyyp522VACyjRyEyVuwkyivadcgCkVB9tGkTaUVCYQ4f6TPb7uz",
  "key24": "5J5RYTEvE6hadjfgJJHVa3YYd7qADc4ZkN4CGuEbjLS8xoBi4qd78mf3DDMTs4pDCcjgm3Sbf1zfvn3frrpHYMXV",
  "key25": "5kRvJwDAz5wp7rdTBkqSoqoePAwUrDHEiEHSrLsrMYVrq2CtzgSW1SbGGRW9aDNDE3VaNDeQz4Jn9LQDCwhWsXB7",
  "key26": "W74BMrfmn1HWLfTRLKusteeLbuczVYJxdkAot3yc6ancrieFqh6U3A5eRwLyaMeXAaMUt7BfpJ85nVrG8NyEJ84",
  "key27": "3H9WJC4pfCVvhxZ7A7PuxT3e8ArqBg9KAKkKpT5uUEun1QhgQmcWFzSPHsBFs5nAqhsp7dqYME81HMb5g3n4fJt4",
  "key28": "5KkctGEezzdHqqSyuKxszBRtAMURYPh14oFrKvekPqfPc4dL5fdJDJEPAVxA5LNC5xgZLKN5XCRgnWUoRebin8dm",
  "key29": "2KUjBDpepXYP57t9kMdWGCeYwdNBBJ3JuXfFbwzJpAf6j6omf5WsjshegURDVgSW6a1o8QzAyEEUHgx1cBzGJy2m",
  "key30": "3YL5eNH1WwoNadRgY9GpJtBQi9n9EasUT5BRLzN9gEnXdct9ZuQZuXeSEhubV2yEXC7QQLsL9qKuSwa2hiyY5Nbb",
  "key31": "eJQfSMauhJCNiNJGEzsajzgz86UHwR6v87X59UA4YBbDa3ajrSrAQc7ehXW31T4NrvthCSsGEHSZdZcQLg3jJrz",
  "key32": "YUXo8EX33Z1QPd9wr25u2mnpft9jGVDrRvruBvQ8KmTWvtXS28J77Wxhbh5Siaws2nWBY99WnAgYp4eeWu8eKoe",
  "key33": "232mZm1yyhFbxedzTWxLFp6ScXjBXajT6GuGrD3pQg1AcFfba5ZM6yXX5Dw6fJ4Z2EN1XJcRkFo8vjhvFBXbyV5a",
  "key34": "5SRZXeuNgjLmqsdDmfC4pnrbySNGePfjEZg2egaou4XD27j1qezfMheTtf8VB41dCQSyda1KSGFrabngdYU7Tj29",
  "key35": "3U7pMJeZwgoWZ7fHajimJCFE4vM8wVzrYEPLKXYDLdY4aCMsw3tvaRgswsCcZueQRUBzAu3RspvR4foupEYyuXq5",
  "key36": "4Vpp4Ur7KnDjqBHgR9oME1rVdSqk6gBE54xpQJjs4XwGDVZSpZD6duQZpBkDixvgPMRkMtMJzQBaHQUqz9dJwyR6"
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
