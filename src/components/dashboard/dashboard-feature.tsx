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
    "3LfFSUjjYZSqwMYhe46fDZFiHvPZSG75ZQnYaZgmdU9AjXqptfpRj6LjjFZGEezNKStwSnNYYq8NPXJyjtmJAcB9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f7myYzjPEmpzrqEm4FgLsf8tL3KgBms8YsPJK6wzxuCQ1j6DpjPKWVrx7yy3imu9JgdKjrjNYMEEvKLue22B8L7",
  "key1": "5fZeTbuZqWWn2DaRnd8mXoetE8xNov1Dx2bhy8a6ZdP1QPUKqgFr1a9zFEMaUkq5TPA3zfisjXNfXYTCsYr7nv9x",
  "key2": "2UqqVrBt9QWYt9qL5AryFiteJuYQ8cQUzxsrByuh89mi8qGxwNhHURBeBZzN3SLkzx86xrcR9vQCTtQ2Y5ZSwHGz",
  "key3": "4tsdSCGrgCreU6NT1JLdoBcjnUn3V5he2w5phPFtyx3oFowVUMshssP6n3tbVkU7jTHVGeBbvHwWskpTD1mDJUaN",
  "key4": "47hjkMDCqvRWEYS3biAbY4ou5VULgokQ1hpFkAkk3a6SNAkqeNB8rH1AfamG6t1bMmTQwyZ5YEuSRupS2fVmoY7G",
  "key5": "4PHrLsUDEUY82YeTd4qx4aEyvKaWHit73uaVET5cUQhb915obbpYJgVZg3eb3A3MtSYvVf11zCRVK3z2SakmWLV",
  "key6": "2arzQnnj2oEULv5m1qgVZnCgX3HGSpfKVPQS2ogN7jrs2HEvrKV9ecYdEBtHoGgtq8EV4GHpAvDyZef268xaDsks",
  "key7": "4eZxv8R9ocPHcZ5wGMirCnLYjzhgf97xJ77pWvV5hKzdvJFLvPzwngZLtEwiH6JAb6KNZpxi9vT4saWzzSYt4eZs",
  "key8": "Lt9Xj3fG4kGUtnKZnDozyoFZbcHU1dyQ86ZcyPj73ds5qjJdg3jHmLrVnapz6uRkXeSHMH77xhMM2YfYbRMj2Qh",
  "key9": "5zLx6qH94qMz3tR3NFaJTuQ1dTwj8Si3Fpb5j9sLGcFQNejk4BcvD3qMeGFEykhCUdVKqbpxMC9BxYEsKTXH24EW",
  "key10": "4RHvywgstnD8HzrqtzUuctijZ1f2roBacrYPf8wiLhm3GE2N9UrNqrq6K47dq3m9eoySbvMJkw1CmWa8o29f9xGn",
  "key11": "3JCUAKV67SBs3KD5HpnDaEujwK9QX2ZqcU3Gp559ZtFQn9itT2NxR6bsx9pNLe27Xoaj9mVc1bMKzQVwCtqF4PEn",
  "key12": "2vtCFgGoLoLEPiUyRqkMSiPASRSSpFf45aB63YoMXnhioc2WMjhsJT82mgeg437STQhSqPGXsfy9t8LyrPg7SAV",
  "key13": "54Jzdgbtg9fVirtSevmnb2AhmzyJo2a31HJwrdYBQQuCY1fDWV3x1FmxTUVCEcWRrBAnWeFMk9uVBRTTYToUADkg",
  "key14": "5SbvCzPM6B2e5ytrRhyYXqxA1nEJNh2WribCnP9FZgbBPZPTYVRxe2KEUtSMbhWLedBt2Zc77yk6dFNj5pUNnXBY",
  "key15": "27cWZ5z2jiQ9JUQUcr5PkpXBrHGYxr7gkMyXRpbRLca7ESyfQsb3UJGZ2SHU58FeZTexdkD3H4Wcx5zbBmHfQWDA",
  "key16": "5wVwbfW9fx6QaJEX1a94xBv1zic58gyPLw8KQxvuEWhak8Sa9CiNcmJq7fddqotuAC9Uj45cjGP7S2a6zXeaL1fy",
  "key17": "2qCK1JFLfvsmLmgHBXTHG7SiJvYfCLnjKTiu5YCk3zxRKWPWryDmbEH6n9JEgdTkbcPPPpY8giVvJnJayt54wpNh",
  "key18": "3nFrHu1VzCi5oG6VdnuoWpWnDv8HZbPc3cczyP6v47yD9mm8eejWUATaJrQ7iqz179SNFWGcvMV3YJBnhi8gNSvv",
  "key19": "2fXNwCCq5QgPPrt1c4yANvn5CbQH2F7vrHXGkYwdoMbksARhcLf3uYScu6HWBRopdAKm2JzzPiBvGbTmMttWjypy",
  "key20": "4xeKA9H1zwXAHxXuRp4JTwbuykFnJJqB69GXx1Bs79mpSx5VVoAx6frA4unJQ6tbJP2dK3VZpUd6GjqjFq3tedWw",
  "key21": "2J2Qa2tETN6JkvYx5agf1r6nzzzvBxT2fjM5nBQe4nLFvAeb89UwzKdEyqfZgTC9SfkGLHyp4kmtLN3f2rV6MGxk",
  "key22": "3R9cStoP5UWLVNTdtLJaCVkXHh38nFrhGEkW6gvvEvjfHqiv8E9SMS5dSxkQ673iEmVs7qD9x8EPHvSLQCzyw4BN",
  "key23": "46upkRAhwiuCkusTrEJbNT7wVuf7umd8yzMgvypQCgS29TKWsd6TMgzfkXwzHYgJd7KHwGJfQX64dTkv25tvXHiD",
  "key24": "ZSqPPeLHb34HMG5KgtmFwK22wHX2E5HcEzZdoR58FjKx9JfHstPoCCmZxzUyL9E78mPPPmqEPwPMq5UWBRTB23W",
  "key25": "3KCfm3KcdGrQWLchZBgNKVyjjCAAVHGMuan2NfNarujMSMQh8u2bvWsUtwLZaYoU3GvAE1k1b6VPnr9MjeQdJSCE",
  "key26": "2S6iokJzekeD6Df6mJ2KDW2Jnu5cG16T9eyqoagdr7cBCPyTWJtmzxpAnKAPSgpkJaQ74tcgeX6xk988ar61WNEq",
  "key27": "5uvdc28S43dHZHTJDveZjZad3fr6cg9AvQyKpVKCZZN5NARVU9L6hCMuEKyxBvY9h54oNCfyznhDxNZpkwPWQfx5",
  "key28": "2jgdome9oehhdWFLBKtgVsnUPEbDgspep6C4kLSbVtGQfV3FjEhLbrpMZ8NbRaTs1tvYhs3sdguqSwaMczWVJLJ5"
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
