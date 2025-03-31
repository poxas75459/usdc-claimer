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
    "66F8APXqymbqsdVhMtvP2HfkARD4VSv2ov1dZASMXBZSsSW7rHpchUaJkeeEjk7n9yxx9s26JCrsTk1ENMsfpYzm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eyDLjjhQxk8U42nTWbtxPaVXvBmM7rRHuuNLCFtQkyJoqd81AM4bovCLfMhnjz3xC1q91GmxHn2Vd2Ap8AoUgxk",
  "key1": "2vEgdk15s3jJv44GemL8DsZb9oyNMXFYJxoVaxjkHLCPy5CDc59pxHueco39wZaC1i4k5f72zBnrQG6VGugZpwLL",
  "key2": "5JUiQESG3DUKwjKkHR3ccBoQbD58ca7gVMbxUG31bMthrPGCEB6Bx5h8xUpcFqnSh9PUUH9WxBXqj9cs6GE3vvFZ",
  "key3": "DVnjPdNKfFuNmGdgV25YnJnRNEVT98Sj3AFSwtysugMCP95AoEoL9SM8hhHGsGjgT7MirjHxVHcSi8w582eDywj",
  "key4": "2VDWEEBHWRJFCR62zKQattAiR12MEto2567wadrdSfuoRSDCnza7mtL1EGAZgfY234zhqAij3rAWVWj4UAH8694t",
  "key5": "5gfT5ZnHyjYGjE6R8RvDSkGq4w2Fx4Xzupp9Ao6YvESrbmRH4BuXfSvn5NxA27WfTUpWJpP3Be8u7scjrZkEqknA",
  "key6": "5MweYXqXRf5Xt4mpiffN5Qi8JMxz4Z5YSAdajczKFfmXHE7BPbix1HckRKjXXd2oaE9rg1idi5mFUWWHw9xiT5pT",
  "key7": "4v9pRg26MNPPLfTqeKNBnFfKS1ic9ZL8hy6vSeTyHkyLJoBWAJYwQKPRHkWdqzbPvbqfGMf4kpv3NxyadzFMYGiC",
  "key8": "29MQswSYAkkwNqYU3apibd4X2v5iMCVHukprtgeVFS9BEZ8dVZM4X5rwkRacTZNsB1tbXqzphomNyzr31QYqvrFr",
  "key9": "4sf8fXtE7c2RBzm1X3vk5TBtbbxJZT6GdZA7KJYYXaupTD9XUf2uk9Dcqfy3ARbQHS8EP8FBEqtoySrRJPDjbeKR",
  "key10": "5wpQktctSufn4LVK3CCnKm5YyQ5rTLaiiwyqeEGtFzMq4Yc89v1PAygyc4zBi4AnDDDukaUksZgVKrdDDggB3u1Y",
  "key11": "2C8nqSmfwHye2LSjqUTfryNsekhTL9hw3CEwKUFrFH9ZweVjnXEpcb5uJcAMFxZqgkG69HNH3RCGU2vGew9vXMgJ",
  "key12": "5WA2jZj5x8UkUWaSHbLhQB2QYzZyuSfCQ3BwFsRLsxLvgwmaAMPiaHcZ12UPiEsicx8dk9KkWZ1V7ehqYUmtM9rB",
  "key13": "615QWKPKixQxrbkyNhQ5cEFCg5hzd1CRDJ79vPRpWsC342tj8bP6DdK5aFRkkHGQ5xgEkWZEKJua11uGK73gYXwu",
  "key14": "3wTaPAm7j4BfLNNiDf8CeA1eQepj86SnNDTMJqvQfqZg7oHL6UwHi6mKSMod4XzzrkhNbxXeXzFZMpmBZ4ddzYoj",
  "key15": "4rAxwzTLFX3K37NBpG4UPdUZ5BceJGtjhYag5v2JrXHkPh3T73tj9Z9cSBHvaZyY4FpcRtKEbmfUDP98CEqgyXjV",
  "key16": "2b3HpecxnymRpECXJQ2ZcxHFzTrFU6TqAC3of5Bk8wYvk5BMEDy1tG32YGUCEdpqVPf8okrqsSQ1kLrU9UcJKHmW",
  "key17": "2a9arsih2bRWttSkCw1tFJdCrCkYgw6fnBdBVZr9h9TCpcEqivmHJoakosqvy2eJXt5aDo8PXJLsPFX3Z3wz3xJb",
  "key18": "4QfNRjvDfbUEztDrZHc8EdsjAkRhq2KyqsmUopcjPEjVz5movLZ9H2zpY8H4Hgc2iCaXi1jbGg96eRPARqNYS5tT",
  "key19": "59p3chBVRaWM3MC7q7rRKWfN7v7Z3yDx15B4vGJcUKpkPc7b1fE3Z28iw5LiCneGnTmoFk7qLQedbQ3VLSPa8hzn",
  "key20": "PV6Y1Ekum34HepcoUHpaFsksPq7iLN9eDVHtQzERJcg28mrPUUoHVBibACHvppjRaitWKyLB4wsiz8yZ9V9c1Cb",
  "key21": "yEifDDhkiUvDKBhJCSjLzwPbkhgLYPnK1hHjjrJrfhdy53S9GW4hMJ8jvuZUWXrowirFTFv7EVAgMf9zFXn14nr",
  "key22": "55XemVby1dqsa6EgWp1RzduQQnjuJeAB6pvPctzGgBqEa5UKvjfkZ3pEDMLfBJr15qKXbC95EAVpuT2E15pASXR3",
  "key23": "2xbZds1xEbsSyvD3QjNNWPntuF8QeDPnuk3xFT9XoVs4pWzm4dLdMgfc6fjUszhubBYLopXvwGvZHQ8nCcKGjAB3",
  "key24": "4RaLS2JBi3CRtq2x2VHCgfA7GiGjiNXdVDjaFnWMJzmisgdezW9BBTt6aEBXDYgtQbfocKovy7rRUnpWXcrFmRkN",
  "key25": "3GJUMtEvpE1CmSXuFZCG8oojRCi5k3mva1vUuQSwyfizRnN7QsRSEpJUBocWWdy7nu14WnJiD8JaFLPHtUYjiVze",
  "key26": "YNkz1PeMnsBED9tyRz9cT9WGfrLQh79aZqTjrfnUAmD1EVTHjJHCDUH4k62oNfaXfJeDWAFS8ZuahJuQfGrxEce",
  "key27": "61UjPqDx2R8tw1jX8js8aSPRS1EMrCahQLed9mEFtY5E8wAZDz28Kt7d6sUfy1Uhau2RxZysRGwZGHJFvh9n9Uv3",
  "key28": "r4gs7cAD4MGHuz5YPanYEviQGDytCDHBvEQsiv5dzfGDNbrsvyv792LW2B3T1GKQYy7oMXHzHfZKWyeo1xcvku6",
  "key29": "3JgeJpvzcPQpuJyJGebYgnjXk1AicKxgE9kXEzay3jfXnaDqs2WGCxn81KJAWMwvDkq3ygswTBkGKdFAdVQDWn3d",
  "key30": "2oNCM11NrMGDW2zek3YpSyxit8rD1xKUukJ9sr8eXwQMpiRMB9Xvv6nNDGzXEWMZw3AeKA1hw4dYDrfe5HKpoPyz"
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
