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
    "3pbXwcFFTDo1BcuhZraoymBWmd1qQkvbTnFka29fviHRRDBs8DxubL9fEASsEv3aGoGKBDnhKYscAXzAYaDHAPft"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65LVxAghuBDuhDAEzD1Li8vXskRvRP8HhrGzxcwW4RLgEQRp64xoepXT8Vr6SCGFSgs6T7L9EDvESwVateM3fE9",
  "key1": "4EC438Pe2a7DXHjMFX8KyVeywG6ob2VWASzyaApHGx2k9mc3DTdhPThfK3b2MoJxHMkFZGh9bfBCS1vFJVdY28xe",
  "key2": "2BBAuC5qVNGMY49zcqcGuT8zrKBrcUNPMquStNTbqYPeAUC5dspWzVWHnk121peXdrdve7hFneqXWSPKBJZXhaBs",
  "key3": "2yNBHsgYgVwwEzmjnV7CXWMfpU7UeCGcti9Jgd2fA3PzZxLiCJghWYgqCBojF8PSMSVYRqzZtqkrx1LtnrEHe843",
  "key4": "5tQogvdDxKdPDNaW97Ba5NrfpjCSBetY86j7gJfP5DeKaTnAFs1YxHMEoHxtZ4xkKCkJN4YN5f4VmEbUnfmmeqd6",
  "key5": "54FPRE6Q3Rm3jyDixes2ERLkaXeeiggCenS2qmj6H8n1w2ybZved3iXKna2y8dA7BVo48ejy1gEwp7dFXz52KYoR",
  "key6": "1cwEgyvdrRNFtMieiT7edHQsUU1qUeHG9yJHpziLYhb4DPtMzDjpPXxRfS2CYMKKSNoTW8kqNeFFmHSZS7qemAX",
  "key7": "QJfzyYjjrk3j7rEfC6rHeYhSZ6uxjek7vQGjskGCFw4YWPRDvbc5QJUmFafd9J7RckKvFnuZ8uzs6GFKsU2QYwm",
  "key8": "5oDJ2vs7jnZZLM72y1pM34SFwxa18BnrbaQKp3FuUtUtZEYT4yjcatF61Q9bQRVZZffLuoCzbb3sAfoHb7zzKUKn",
  "key9": "4y6qSEQyDtYLrKSHKNNP7z6iExq55VFeVjKA7ZqsQGbve2paaKh3bs2wX9w2qDVx5yMUTXRkbeGRNfRnQ4wCPnrr",
  "key10": "4Xvvv9a6Ea2nowb5k6nCxxSjvGi3Qjth7zzQmMu8EbuHyppFQdMoyeB9gATEdA7e7fcpFSXVVex3XJU61mTd1J2C",
  "key11": "663TbowpCK5UdgiY49j2nmo925BpqdHUx4qWCf63cvhNxMyTu1CzdvrU7xMmW9fVbap2dLfvw4w6JvXe7ci7xjYx",
  "key12": "4x533uhTNZVEXNgQqwFgJzpfwpnu6yYEPV9oeT56SX7orRqj5gXgRCmg8pcgEk2AXijNB4sNx6ddENucNurXmH2J",
  "key13": "5S3mnZn4h794Mj3civWzcW9GdMKm8BkNZigWntPgMPFXjKHZJKyKm8ivWBVE4eHUrt6WnH961pnvodZXZ8hsWuK1",
  "key14": "Vp4DAPCP1GPQf5uAL3PA8y7VMEL3x2PFM1QhWhd347nrRRnFxreSpfDK8gtuVSw9C26g7sGRLSFiF72gwgYGZdh",
  "key15": "2u5cuvkZoPKfML3iXsQmD3YxMrCfy11rD4s8H9E7qs63BBjJxssmLsZXzibWBFCqY21R3s6eG7dhkia7ztBVarhf",
  "key16": "4kPkr5cPaeaM7346tAUJqGYaGbyyMPfqpkNqfVinq4bYnBWpUEFD9ehKw6QkQgKsDbCjBD8MPjYKBS2A2dM2RMHa",
  "key17": "54xGxwbNsAsPz1bqeRVeS9Ehw4Hij6Wwq8agZzC23bqjVu1YYZnBLyyRACWVNbmSYwJVrLch9eAMcqJt3P86bmyZ",
  "key18": "65By99SFbvP1SUvtU4BBUH9dRPE6z1KZUV5cpzApcSVW21h1XRxyumdPPDMb6SqgLTBoYxjgv6QKeuiC5hvgbanL",
  "key19": "p7NnuWeHKJ5LY1mvgbHAxUGFNS3qDdzvR7TBy4sDb1srPcTE1bt5iAmAJNgCaAemaiPx6eu8JZ7fTYmFz86jL3K",
  "key20": "5XBZKvUgzTc5YLhdyGu2LV7ofFqkGZ28bzWMdYSrX6Esgv7CqNmmvzFjp7anYRQQQbCRdg6C5wfemNjiifc1Q31T",
  "key21": "5npXC8J8uSphf7KWHBn26GSEecu99KDFpN14u4jv9gk7iqXz3ZUXG1VCiCjpsncGV8aBhL3R9FaUPQNJgD8tExVV",
  "key22": "3PRQmwCLHP1yJaHhKVP1X75oAYGw66bV7NcGZ2RcC7vQPKweWm5gK39cf5KnHcEg4mhUMJxtHx9akqHMC2CGv4Ze",
  "key23": "5Ypv43F5RG7cJVaUshuzVzD1gd1ZyCJKrGK5oMS4kX9pXNbWRGa4CoKbjTC5m97GKqQB6skDrcfqpAcHquDmPv3n",
  "key24": "1tJZwcFKdE9NcQsFWbZn9m2SXxCDbviFGwk3XduRZmRQmMM7NJXgVWdQmrMDMUphDDRV3P1rpx35tnC22ktTQeY",
  "key25": "4769fg584X4VoPrDnbmbMd52fUqsZeqZw7m9QNeqmbA6X8An8n9xzp1cLYGNh2Z9GegR1HkyQnitmi55TvxTUr1Y",
  "key26": "2738KFhatTAjj3T8rM2gAzYroXYSLsKjT9sEyQDLANGs114jgn4Hc6QxScEaepZ4af57cD35x3WGYX6WXq1xVAVq",
  "key27": "S2tbbpAPYg4Dsxy46oscr8WvrhCQWKTzjKqXeynqDUeyCwk3WtDfepSSTokEo66Ub1jCe2cKnn38jNafqhKeNJS",
  "key28": "4j6y8563GVCpH5hQV6kMB5aHC2jiPJTFSrCB9BiDfGUkjUeQMqFxVr2c4JidujY7dHS41De8K1tkbfEuUGrXfvDs",
  "key29": "4yHZiNWdZH1ebNqCQKPjGhY8y8kNs8aLLoPRZonk1KZ3ytUZogWeAmffDni26w2CAsn4qgFz2tuyRTsch77qUX5T",
  "key30": "4nQpFi8nxk9LiELLQJhCuFUV2r8TvrG7ixmieWug9tK6QtY1R8thc6EvrzgJcyLUitMbsUU4B7PihRJf5uzdt91X",
  "key31": "2YY6XAsjdum3sdSK1xEsLkuD7qWHCSbYGWaswTuZA1gcYWVZVh1a3SG6qgfzhLwA2LdwPMRtS1LuX52bmZeM995r",
  "key32": "2mF3U6ENCdjyZUoYXrZUriXihFi2TgdHvVXSHJoRRKkXRKeYgDysHDFAcK2v6FqRVD2EH8owXtJX17kWgsxw95gU",
  "key33": "3ZjHkgSK6AJcwYjVeJjKsUgXUTz8NkWsj5xe84KB3biBYDgwRDjja38Gri7jTgojo9uZQDv5fQZNxPBUXMThonax",
  "key34": "5XroBmHxYwCjJ1WTF42skuyrREhGU1hP3UF2jZbjdVnh4no6eUzc5B4geiwJ4BmPCCXQmY2oudgdfVdncNZGvto7",
  "key35": "3GCAnMcohmRz8EgdteDP4ZqtXsLe6E4s1uCySFQjSVJHQP59NQL9wpfxgd9kzYBK3q2hhvdDLTf61p4xJ8fZYk3b",
  "key36": "2ZMqvKFysK198FE8pBoZBXAZUq5dkJFjJpoboYQRsk9WPVen5mjLE8WEJiJnwFg7iNwKcM8k1kG4VuUe8kvU3N75",
  "key37": "2AEb9LrCoDqoqxjunynRzdmraEyrEWpXr8HCzeehD39kKSLDwMzcUsM5y5NVC4snA3qv2HDZHpjJmTMo4ARqk8ML",
  "key38": "VYomeicryQveL66koaadCdLDrcm81Aass1ZAxjzWpzXrQeBV3o1RXMM7AWtYSMscGhrZAXT2Lz1K3Bs5diCvU6U",
  "key39": "2zh3hit9g1N7u44m1pLgqgb1Fjxu9ypBMHFVaPfb6fbZ1w1pyenAeyX285YdxfkYDEWRdWqy9Uq7c9tEaj3Gx5sS",
  "key40": "5cH1jKdMjzFsNQ3dEVDknKGgbVmMVuUhxQLqCBv7ReH7W7d7GBMJhuFz6H3wzNoUCmYqS6EtvEYkERWZdjaJge1Z",
  "key41": "42BThyyCzXdNY6EHsvp4wobfXZFJRks4An7wkfKBD8xTEns1BYpobGP1C8enCxTE5wLKoh3VT1rFNTw6RF5mEdZQ",
  "key42": "5rggTZfLib4G2gHL55wCnc9B4enXnLC9LT31HE3rdsySs2TBNdQTVM1ALqPVNFW3KVYQ9ZNvrrzrnM2D541hxK4u"
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
