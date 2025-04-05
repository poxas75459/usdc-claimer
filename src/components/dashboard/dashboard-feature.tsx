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
    "2dEcJxWekv2M5dzBWjtG3NQj1LxfuRCAXQSgpdwDfEb1keGHygJ6HH8etJrBUD8erkTXzKMmHK8VuHypYardPum2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oaAR4ahXxXoFWhGRqX2Cnhw131QJz82y27vc7mkUQF4mARM8Gk2xNj2NowxxGmLqJJgsuPnYzk4EPLTAUGodd5y",
  "key1": "3hhKbAtF5Jaf8KxkopBR9nh75EdhFbt4MMAxnLPU9AiBt3bztVcEhpkVtihpodA87xY4fWj3HzzjkBfHAABYJGTV",
  "key2": "5sjq7HhcT5MDfVZ3uBfJbTdjbMPKasXy5xMeJqwjm3zBVpQrt9SBa7S2JuvhvAbyfG7HNuSf49reVVoLHbfeAScb",
  "key3": "2N7BYHNAXSKsyFdscLFxnmgfQwmFYfiCHChC6ZA9Qts5qyAGrJC3oRbL2yRZZsukcfiarehsC4qyFSpGjYxaPTEC",
  "key4": "3xY5mCmj8bKjegSEjyodievu7qMwgDuZDJCcUcK9ktvbSePLAMs3sjiYafwxNZ1GPhPwrxgKz4DF4aqCcE7eYBUf",
  "key5": "5yWwwKWWqeR2MpjpMUe424X8KPwWnp6ycenE1dg46zfPZrjQYL7BTSr9Pbo3oFzrWeyAwyJPXwhHwH6Ev7XxtPPD",
  "key6": "4nkAbekTbeogabVBjKmN3zkrLMyJbaAqosEpAsMMXh6r6Yd1AKQKxoAa5KAq5umecTFKVXnnQgz4L4FTaMFrUqpb",
  "key7": "2W5wrG9BCxHBMnvAdxfEs6oeaKRmppmoYf7iTCxRJ1iEVL2mrgs1coghFkGqJD5xqhtDk5v7KNmdvU7jUrMquiqG",
  "key8": "4snmkxnfLid7JKNAc8EBvid7Qvcj9jeJAk8T2XXdgLpqkH6X1dFbDuz34FdFjUrVcb7o8AKVThvmz8mbumpYCv8U",
  "key9": "3xmhtF1gz2eGUJ6TS3tjcfmeoVWr9TMitqwvaeDmXLCr6iKnTKbaNYKbN49DSYYn5aKMpZhByiu4psD9DHoR77WG",
  "key10": "4D1NSoxRwK6mzKTHNCVgUJuJUxkTcUZpNc67e4iTLMq1WChUWyiNVgkFuEnsQQFsdc8ho2URm9XJWLdX81ukez4C",
  "key11": "3hX9EB1eFxpEsJELFGmtgq3jcCYrPN6Q8Uhae2LyuMQ4bEMjiDpmRDMQaF7tsharfwoHku7FmCtRDrZDkh59hjch",
  "key12": "37NAwR7n1sxRv7wGcDefmJW13Mb4EPpBh39HFdajzfqdrhjuk5pBZDHFZKhXcmx8WGpQcQCeghHyjPEKFfSyRKhH",
  "key13": "2A67tUBvyZtoYFgje4TMquL6gqphGopUBW33UuN43vQeDY3CxGs7Hk8596cpdBAhy4zJRhSb9PvAWUxtbFCYLWro",
  "key14": "foGvYK4mNUFnERZpi1C1JTK5cJ7MV7gT4j9dwqda1A9YcEnXPACBP6Gf6xM93FuZarNL1UqeqXT8JL6fxqVKcyp",
  "key15": "3nGcVD1dtADVTcLqa8Lhz95NQ7D7aS9dHJsbAMDEEhmVQV4BZr5PGZVuUwnqiphULk13Kb4uiKWeV7VPVzReeeMd",
  "key16": "55pAiUh2UYRsuMrPjCktzqzzyEheNoLcWWSc9SNPVtfqH994f5vykNEMwNhs3H6RNWsMABrtdZJ1cLXLJUhjLhTG",
  "key17": "5bokRiwkVRxR6VLZpQvZL5zs7hSdtiRmpZX9zSUq2tqZWLyj12HA1KmqsuWB82KDTc4pXTTaGjgGPE4hCTGqfLXe",
  "key18": "3vxLpMnkcm7inmp2Sh3sm352cMA4tDBpun6TmVUCLZptqtEscqH88UudFMEvHAvymSQnNJ1f1uzuzX9QxhQpEbDA",
  "key19": "5rFiE4p3w7uT7bPzMP9aGcbNUzSCtnE7HMsKLhkkkzqRvTanSTTQc5s54JYXNCvtAqnUrCXmaHThXxkst5tVB3kb",
  "key20": "3HdWNKjwvEdZPefV5X2ZHasbPeizrKzmZnwryPSxHebzhDSpEFyJr2NjotMygro3yPzuVrDs887iqR7PYg8BixMy",
  "key21": "dX1PeGcTtN4mBcxf1i2S3K4SX1m22h8ytmAj3iyQMP4piQqmFzjZGuMHuYJdsa5JsMprp9mBSMfPmnay9Ue5Gop",
  "key22": "4fyLunRRcoLhHvEUxnJQ6i7z4F7VTajuMpHtzV1qKDBGGkgAjEmMpJB347zKrv6yzdoaiZvR8fSo5DMsFx5VkdAF",
  "key23": "3N5521sT6oi13tjEQ5yb4fswLenC59Qe3KpYoYqTngSzTmjVWc4ZavXVb1nMSVd9CLAYKcShZUsXSx65iBayDsUg",
  "key24": "5PqGF1Hoe75g45AkSuNvJ2K3LUTRtxkzQfum8bQ8QbD7zTTV16SdBu4LAWxjsN9o2eHbjBEtKJzSqsHNgfWsqbjV",
  "key25": "657rBJdpZ9xHB8DhkBLmXtBJXP1CLrt1az2iyUfqdgazAihqPZ6R3PU8eJcxqKeg4aBYsWLX1QXoUHmsLSLn634T",
  "key26": "3iVgyMy7XYV8rQMqvZXdDbc3x3Hz7K7HPXjKd8WRRwWkUsfN5VsT9snBPhGaDU5zYzQGTS93LUtCCgwaQdiMdrZh",
  "key27": "HsohK1dRmWbSrepnXq1PNFTk4aspM8384oH3E7tAyfP64WX99FhA4cGrjdSiQd9w1oKEGKXq8RZkEbE4owDjMmE",
  "key28": "572UuzEuH4N8RJW525GeSsVSfhrhbnRFo9KjmYkH5vVmgA2z5Q47asVYYgTLVCc7cB7sMNax9NxXAvCXN6Fdu9sp",
  "key29": "2hXyg5fcEVwTXUub8Z9h65CnpfYMS8LHHRVhrLsF91bHfdpAUWVmf14PT3g9D8vwW9BMD329xKuqWnyTpUz2JVQT",
  "key30": "XfWd8kzh1JHxcshGHnGn63pYZ2TzXmw4K8qZ5xhYKPjAmSmoyTHwmfTSGGJnXVs2R8EFg37VRNssgQANQDcCXBR",
  "key31": "3pKyXL3Ja8hXhKjvx5hoHyKSS7rKQ8V5vc7BTodXPYbktwFRk1YWFVNYNrfrF3Yqa82x7aPjnCn4jtJDUhbqVwGL",
  "key32": "2FGHxepxbtztejSjXV8PPc2T8yMPZ5P6BjGwhaPN6dfXFnSyEYZfkiYAdoegfpWQWaiqbKaAnLn1vHNc2m9xBJ1x",
  "key33": "2yNgFfpBdkUjxQb9wiksT6BNzJsJZ6acCmmtoenrrgJkRewX41aTrNSpKF9GP7XjkCjWhe8651rS9ekRzCEa8DiH",
  "key34": "3mG4dZqcbJ5agXL4gMJ1f65ThC2BG2qgTw53pk3yb7Kw5E8NEMgTBPWa7uCD3V5C3KfUFRAW6y1qLHBPMrXGT4K8",
  "key35": "r9XXSzBLbSeQXUjZh8zsoxSchu4wpChASUByrUr4RX74y65Yq73evqLaM1zmV6igmkt9DpNjVQuCiaVtZ6mG4MB",
  "key36": "4sXkt6nfsWKGA9YaGYsuCRf1PcsNiZXyJo7NAceroG2on44hrYaBQT7Q86PVK6ekELkL3TkujM3Y5ibhnsiFiYEA",
  "key37": "3HSTVCSjDMSEDBYY6F3FjZjxKQXpdrdBeBL3aFgPD3xpQ3K57VDmW73X2Kk6xt5bP1yME5xKTEAKmsXbBZvCb2XN",
  "key38": "4vKTyVe6Bfnq1gq8aa16Jx1HNBtniyjFtVkui86HXbN6GkExgZ3JntVDiksnokPkgGDmyDkzbwB2Z9VKfXwjCZq9",
  "key39": "5Nr9Cd5xoXhen6WwVhKAiEcxPK3AvCjKJNqWcfzrRkU7jhuJaGFdH35cQLsQkdjDRk8u6Kw6ux8fHK1876cbEDAM",
  "key40": "5N95DyNm6Zzhvnta3vfuPXuEMW2p9CxZL4JKQiHNYRZqFNaerqPWf5FhgdenAsVfVnQXoH2iRCwWpWmgCU6XW7NC",
  "key41": "3DrxDYKnf4c7u2L2P2N6ZUwzTDVs6mX4tvwkzxKe8G6GSW5nprtWmzX4agddiZ5cTfxE84bTDbDF5CcwrAtZe7Za",
  "key42": "3nAHcPVmqdZcsZ8x7Wh7noa3fihZpnHCcPefHvxya81WSuPxhHpAPMADE8jnPYhe5m7uzrhzhfDk7fyBxuwYf2Cy"
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
