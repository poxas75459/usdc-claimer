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
    "5fBJAE4vFm1DCUgZhVH5piShx8RYLvpokgLeKAuchiHTSnT3gf9K9KQ1UbHTfYXQ14bgmPTrU73Jwnoi9GLAaSQP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TiZfPjRk92cBJ5bY6DdxtQoUJHoezULhorfWLncqEJbbEgYu4mYiBPKq4DMQGgZg2tyjqAfhS5FVnUqjjUgGE42",
  "key1": "4gxKm3ZiqN8reAe3gXJ58HUGGm5jzeASVsUG2KPYEmnA1KfEF5SZKbfNA9V6316x2TLcWhApheRrPQ7TbKzFxLRc",
  "key2": "5DKwcH4rJihJedhPUuTUsTst8XEerSBCsFDyh5YphZi8AMNpybYyeDgo2sfczUMZkTZ1YGaXsZLEp4GE3p4V7E6e",
  "key3": "3onDMaNTw7AHiui1fJnj44NikmNpepSWbrYCVbSiJs6Fw5RuAYteqVomrPwbTK2vGFGmcNmJNtUJ6VgS4TgXBjPy",
  "key4": "5vLZLnGmb9S3yF8eNo4MDHc3qjegACH1XJZCMtq9bE7k7ELQpGUVQLoA8UewYATSaHeuvGRAmySfEFfBhfqYBX5E",
  "key5": "5SL1dTpS62RaDN46MvBuvMuW55p6dX3HKDWVyvuuzwKE8ZeuxzzgiRrSWiAqPp3Msqv6Z3AUofVPzdJoeuZZDEL9",
  "key6": "3fk2bVrKg25eExVpyReaakopY7hD1suEeKQam3xAPxSa8fzcm771pfAMkZomPa9aAGK8cd3WkqfWQn58bC6NH6L9",
  "key7": "5fscMqnGQZ9FGg8FKuxynk2bivzz4ZTrtcf13N3kuYEJ19HuQ2cmAncEvYmm2VdnkBCzyB4WTJehgZMaBtiYFW3i",
  "key8": "4VMMTQSBHj9F9tu2yLfDT8ntBh84vs9B52QX5or1S9Q2SJAsHLizUkpUmugpZRF2dwciem4DFFeodAU6ToD9v2N6",
  "key9": "poGxZ4Bugp12Jv4SKJqqA4dMwxqHVcQJ44pKUEWAHpd8HRJuoLDm85TQMig3R8nNevMfjeo4HZa1R6iNi4wK58U",
  "key10": "338WqK23XmX5XeonPF7NUKZAuQYYWrZkcbingGfqHpgCt4sKgWkATFAU4qNgjaGaHGfes62prWLQyC3GvoHbfxP1",
  "key11": "3LBhthpe7MT1SWVdUuv2zhoQn2BgzQyitd7Qc3zFCZ6A8YQqaPWVyHLsDRqG15EWJjj8Fw4pCxK35be5i8M3gh72",
  "key12": "5k8Fx5Wih83rtwf9LZqtBNWw8kcwKfWA7inqStZo7YNc2mTN1G7prGkeaDcMUy9Q79S8toKppFwpMkkCAiSHPSJp",
  "key13": "3cVrwcQ5dzeKXUCPq28Wk7t86x9SQSHMBB64d7vtx5b673s9r6aJfigYXPwzLZCAYcJBBiy8VggkPudf47wtK1KA",
  "key14": "2C8kZsU2Y2BgPDsFyMW4cyFzor3o45CHoWdMhX84YyC4x1vrUTL2J3sd1hcGG9uD1jz4oPNhcNNusRSgXgjPfiqc",
  "key15": "4xxymy5vTrw7pY1auGMweeLaheTTsXofqJ54RWCPAq81u7X2hWWpKM8zqYHjwGxjZjVfPvybspfLEpsdTmcF1kru",
  "key16": "3cGHCbBoS1Rs6RRe9eKTz2hHhKgmoABXvoEwDjNZMEja8rJFrmxYdC3g53VKaxFEufFNn1VGTXor1b45aBUC2jn9",
  "key17": "3p5VXJZGZycP2DvPuRMKu59z7DrFx8HQdBT5pT46Ake3RsuJAje36XtKvzSZn6oibtpnNP99CpaFe4VSWcHtx8F2",
  "key18": "39L5HKyD9Uf77iFff4uKUMJp8epRtzeKAciYjyLapWJ4anKnXzbPtC2jmpdRKz7tiN5PRCu2DPschrHTgAtvwfX8",
  "key19": "2rjvG9X3smHGpSetyGDBRJqzw1HoWDpSGgun7XeCzthyuMsQexQLLJojQGMioDs2Nsrt1BwgLuMbuxiSev1swpMP",
  "key20": "5qVCs82gYo2oe5m8kbKg3GNq4FNj6rMBWiPAwA7VGNRm1ySJTxMEUaXpaHqTkZMQfDfDqkdSfo7HU3UKzXNtxoY3",
  "key21": "2Rfw6h5swMpPeeRw2X21hvCP6U2b3LpxfbachfuBg4CdLebz6YxBBQg8D1u5xdnSPXNiygPFudVeUfC6TpAkh7vZ",
  "key22": "54LUbQ2ReFLnJ9pbKxcFZmn5MdypxPCR465PCyM5VjruXikxpU4u9VpcXm2BAW4MaZSfND5oFenDMivE9gULDZUj",
  "key23": "1N2En9h3jTDNbu17Bj7TzjgNnMPbW6n23LYWb5efrdWoEyzSRNku4XNfhcShYMZ998JgS8JxJopc8Hsgm3dVQAB",
  "key24": "4FGHBj2JtsMy1BeXaH6461Jo2skQvEWbMhi1gNTbmkDXNKpok4oyufGtBKzmEtKCE3JTAReoStZBphUf5Gkeurf3",
  "key25": "mmhzGRTC1SAGSphR8ehr9d3AzcdnfSUaZGLT9bkjaH967kA6gqmYzLhDKaA3QZ4y4eu4RSmDDSipzX9TKszSLav",
  "key26": "Z4fYjksuXGi6j5gU9CuaXfLA5nVyN4sgw9mwCrZZrDC4Uj21ce57yTd64SB9xNK5kMNVmRqpj2DHATNZeAt9Mwa",
  "key27": "uTLMpK5UyKxr9mJHAZ7tTZk9CJWp3rV2wfxZnXEejjuJb1Sa8ZW4wjMkYfM8o1vhaDd8ATdiZZ9L7j1QRrLHmMo",
  "key28": "5f7J2o7G2AabJ7CimjCs3F816yZtHrbpEYRSVHin1UQfofFuPt6cTd5j3dR9zTYAFeTQsMM1kk2oVV8HGt25S6Vx",
  "key29": "3scF3wr1DHphS5Qi274eLAbSjzbg6ST5cYrS84GUtb6ABn2sXULj8uPbEGETwsEhkdGZdya3u1UswPiMGm8PqnoH",
  "key30": "2jsgKFnHjCkRziijuLqoisdUGAn64yeLVZMXtBYcmivNg7L92RFShut6DbAjpJsJcYZtGqU1qedJVk4GrPnFxPzw",
  "key31": "5bhhbGGPzN6tp5P41D2NHgyYXkMMXBYjVwQ2G5wZ7t2xVUzTYMvSntWh5LFhdLwrBQdZuqLe6FUb16aSdu4T5G6E",
  "key32": "595meyBVRUMJN9MzGMZndkqcBjfABMtZDHbKcdmJT7ZTbeUc5Rub2ojC5E1e1Ey9phu24xhwPSnU7Vi59oDtJkHg",
  "key33": "E2xLwz2E73GW6N4VCeF8L3Gpw8EvuRMhw9vxsPjsNwSg6JztBC46ARrnZYEfCH2sTDQmyrxEcFvcKm8diAHyq8L",
  "key34": "2btRNbVpdQarJiCkeYYj7eJw4xR1V65iSCVdxoxCNGz3Ch7v1r5T3KdSegoGrXUrvgr5ho9RCa8sZ6X1ViFaD7d2",
  "key35": "3GDRsxNDqzhNyKTeZ3M8Zi45Zm7h5PYUQEjQQDPDMXug44ygcFNufanqtgVgi54s55itCyQYPriF4vrPpzmATyEH",
  "key36": "4AuC9eWZ3UMiWWFDAMzB4qh4Z9c9z2b6L66pcSAFt3UBazQA3rdfBvw3h6x1NuDtXzfazj3Mjkzjooh7qCv3cKsN",
  "key37": "2RQGJ4UWJembevLvAiBf6jEiAF4TWQmkMHuQKq1WMmM91R6DeZywESNgKjbR7n3wBn65XtXBeJr3UoYkRpPobeZa"
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
