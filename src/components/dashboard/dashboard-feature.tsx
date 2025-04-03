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
    "2BF16BHo78jQQWdv2CY3WTbC9HM4jGL8BX1gWcZio8mbTHDB8ETSLCjrcrvG89wu1z2KtUjtE3txYWCaC6ESopHT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TtmmXApYfiy5cH7KPPRkeyRtPekRkqyCckuzwE9nx6h783bja1KpxUJueResPBAQk7CDuH8hvbTPtE35PAFuRBm",
  "key1": "m3H7psBNWv8tgFsW4o8FWvQ5shJRZbHEXYV1BvpCTYfv8rFQokFbb2tGAVcfszQYBwXVCLT6TyzY977mP1FwEoq",
  "key2": "3XVxhj2T27adGESmdK36PzRfcns47A5cSPP8A6X9LEh9iJvoJ568eFyZG9AEmzdhZsQV8rmnqCmLFnx9P4R6er3M",
  "key3": "3AxRoBev5xsbQpbMAZh1aAVm6KnmaZXJRN2QrnDTeKZRZAt1t2uBeidVtuZJPvRS8ufk54iyMMNNXyGtyXNmcGGt",
  "key4": "4xJKN2kxCsxnHA1UkBWNPNsHhctCRMRyeCp8k3znSj9vpFkYz9Rpnhhv2fLv1GaKXZ7escALLwg5f4j33eNrnKo2",
  "key5": "5hBdNxUpFjufssPm9mekjcVq7gruQhHKZHS7qLeu8tpZ7Z2wah66fWoH42HA7YopHqK42ZESW1FGhwrJdfDMH1NV",
  "key6": "5btVMV7QRyh7ZhwPpcsUqckwR3vNYC8Cv4bU5uizMg5JChrx2ewngj4VfNoEF6TeMWkPff1QGLj3pXggzZMq4ViR",
  "key7": "4pNup16ewxCZnoVfCAPE3j4D8rSPj4TTk4hHvRW6xaJRKjy14BNn4jn9Mt9fVK785vHjJnaVLxFGHVPkLcb9XuK6",
  "key8": "55u3T7rnbst2jN7PwV2kt6sGDTWWfCkmTkSoUGacmumkLg9BqKFtysDHhz9camdzWuNodJoSpNtBJ2PXSyv4HaSd",
  "key9": "5pv9zHzakTsvv9rJfT1bTqVAMjgbEmKChAFVedayVoB2U6eV26sia2vgfqUzujSpGWim6TrtsXxWNA9DyJzAbfSg",
  "key10": "44za5XzDYPBmrFGeo7NDHm6sEH5ZutdwDQ7roNkKNNqBbUhwRoS5AqGmuERQH3dbomDXBQavKubKFiYNaQ9wuhD8",
  "key11": "3AkGiQTVnnU33xd54ukQJVi8Huzib8k3M9MjTmpUWWojuDzR6BcwnMYCNK9fecNBJnrHFzy7BCprdLbf6KBKECa4",
  "key12": "3XTunNTwGLdcJ2N6XfY8GGGXFnJ11nj4wm6zjX1Kd4srLo2kTLQ8dkbGGdpvz23Duy7hgb2ZD3zMziU9NhnXSnsE",
  "key13": "67QVNqm6AcfTCcaKvZgvvHmeEDgu5PfJkpczZ4h6pzJkhqMPgXhgYjw9tYNG1bLHLspx9udB3bZpUwAPbLQyZDYe",
  "key14": "4hTmYZCuiyURUZ6kjfcPxNUmnqDdCx6KX5oz2YJcnkkPnFwbzs5b6Jxa6mqd7gnR9YhGEsk94becMdKd36Z2mVy5",
  "key15": "FpWX6EfVRfx5sW2DN3kRzMskNVfAJ5pAgifJSaevzEUeG1eS4nj5piSAQThQtFsT56ompGu7viYFd8sQ8EogNp8",
  "key16": "4rG7GiLry6uWu2ameR2tcY5BBVYoNWyMGbnBbdhYF6hsSWsDGbo259HtyB11NJWUp7F6oNtEAcdoRvz7BxoCWRTs",
  "key17": "kDuH8SV8CgDtBbjpJPtD3MzM1pqkFBt5HnvmpZhxTnzNJUkT43ME8kE2mxyG4t7ciDYB9TdQmbEoqLTpP3RWC5K",
  "key18": "5pzUMiBnkdctzwnFdnw3fhxM75HF9qpcawkhpkaoGQERyioW2M72uo3srMYXevQpRmmgLEPMxRp9vR1gx61oFX1E",
  "key19": "5Qb1rwVauAsnvQ7Le5yHPmv5NAD8mb3LrqWfvweb111bzWQY5jF8YuRJt8d9o4XMjPZhwHfYxzx3K5DfvScKG1mw",
  "key20": "LBqx8yDJCiV6tWwK6M9UnCGk7sgcyQQZ7jHTTdBAAKcuv73z7X41e9rhfyMHVnVMf79RrNbqtM1osSic6ZtwqzW",
  "key21": "2hc5pd1a6kWvXwVWm1EsUbcmroE57JQwNnPoQ4k2qMT7E1gaeaTLrNErgfFx8BCqxswPJDdUJbVMd7rJ12bz4ddW",
  "key22": "4Zuz1gcMZCMpW5wrL147xJdZ2Ba9zDHoErF66cNMbPfSdM5FzdG9Lqgodazwmv5H8Df53TmnULJEMcHJAwXWzUk5",
  "key23": "2pdYHGYaUTHH1GvVZ8QEPRC6vJ4rhz9qbtT4PpDZMLErgeKj4HupcKzrifRwXEgoMmju1swUmnQLXjhuZbgdVFGr",
  "key24": "4YSwPdw2TvxvULQVJgef9oZCW4DtCFZ9Bc1bUiRiQCQpVzEBKgc15PkxYa23oTCYkpMr76yFUgAmGcV1ytbpudcY",
  "key25": "wCBytY3GVinmAdFUbTp7p7grrBSSwAyTevaNAXF8ywWZQQK8JnxNUodukcqLY1pFHbNdYgmJBMjS6F2gmYzQMT5",
  "key26": "ZJTnokwuAPwDLTrQbERsY2n1kqNvAFAqK6gQKZnVyazscAfxnYX7WAGJzFdofyh9qStJDPYTMf2sRBKu49uLAK5",
  "key27": "4n3iAxQA5x4JApq6uzAULef5aauWx4KscR83up1xmbxEfa5pYvLbfZhEaEavm1AztG1z5hrw96jcnF9t73G3GHP2",
  "key28": "2d4j8TFmUS7xJxJXNuXBQ72BZTJgqtBeAo5zFF9hbkZMDu3w1SA3d6GsSXJ8CBgEqD71Sw8ANdNfqJsLMCi12ARf",
  "key29": "26GkMX5VMscvvMq9FXwzP96hJJnb68ci57hMN9FfRMRSK7ZYno1T9uayhA4fEZY9ZFWqhgmDXmcxTffm5FDt7VnA",
  "key30": "5vW1Lg2fthJU5y6a8hQpbAcGhmaiuL5FsqyxhT2yfyjNbYT593JHTVZk52kQZDLJ2JNxLQiV3pWnZ5cGP9JLTVNn",
  "key31": "4vT2wVwwhLNbeKiyjKKpPZzhT3cPC8U9VihMZytspAJs4MLs1kNZo3gGfBP1T9HnfB2VE5cd7amEtQky16Wkw5UL"
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
