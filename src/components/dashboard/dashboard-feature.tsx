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
    "5ZvLmx9nWVZcgGJjaKwhKAehtnyJ1brrP3hsLoYnJxVRAjHdCrT7CmKz9WNRu2zEb79TWPQkAtKYqN7e54EtpoFW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZVYG94w1uZBvXYALMGFjdQQhQDoNz2ZGdRLCgvjLSKnkc1hrxctUBkXEgbJLT4eMhHEV8veozrdVqLcChdxX6Av",
  "key1": "3ZcRAcSsuZPVSBszqNUUcrMHR3EVzi8ikn73Ziq3Vr1Wd3Px8jHHQ28mzHx23NNhAAZCi2VcdXphT3Z7zW6E2RVx",
  "key2": "3wY8uhYTG7afR75vaZ6roVa8xtzsiiMC5DFXc8WHhDffKxBrJy5G72QQGq7DqB2tsKDTvdtugtFihD4Ne5iBgqpD",
  "key3": "3DuF9fm8LCAfBpZPGgznv8wZN6Ej4JFYDLCW1j84QSgx8mDhU1bC8XStkcvGRLcxv19iLRXpKVGPy7WwCAwdNE32",
  "key4": "4N15d7TbPEkHv3FzyCnzwH44cdVAaQ48En7CyDswvfLy29AuSaAe3pSuzJtyLpKpvtZqvrvPrVdsSLtt4fEceZ1Y",
  "key5": "3K56FtkCtYqemoRefb6UXzi58Zm27ScFLZJ4bmwSRzQcLc1QLN3ZgAc8DF7tDAJ5YC7kxKsu5pbVdn75FLMgt9Mu",
  "key6": "53PiaBHDqKRgK319YgkKzCEXFeZiKwVvdgZuxq6W3VPPtTggjRPeZLNf7zjoAJxaMFSTecLnuJHEdmX9SgGhpkFw",
  "key7": "SVpYzUcLN8cbVWAEeKeXJBrnopWTGcNhaweeU5AhxS9SadF5dCrZ3fAammicBERaw11mJ9mBoGtWzC1iudZ51C5",
  "key8": "2HCiCskd6Lg8iwJM8KCxsckCMNT5MWS6go1f4W4o1MRrAofWsWdEHmZygAZGtFxVr1219wmAKeWfktEvo77ovKQT",
  "key9": "32J1yw2nkvveWLAa9R672mNDx6WgjtWJq4YuZripMfn9whX6SAazAC13ru2dVZtsUiaiSQtRaTgC5AFkjUkn7m1U",
  "key10": "4FpUszizTEiYY4M8xFJiXAwwsCQhww4j8jnRgTwXsF7j6q9Wcdhg7FPSQF5osvkoJXi8rtLm9WxWaVbDQodeCwYQ",
  "key11": "37xG2fHT1asePudzxVQoWq57Huk6TM2R9PYgQZWTGwck76YmMKak1eRomzTkBvSY15JnRahj4aQ3o6hfc5HFa144",
  "key12": "5TAJwACRub4EQCB9MNCvMW5C33hH4LbQHTLUxcTtoXnWoVwwVb3BTsHvrcUDXKwpcbFmErQh2AELsVe2kY4rmpEB",
  "key13": "4eLswDzqjUEH98qqD8C2CUnH1QALKURg41iBVaBaiU5SjU7Gzz2PuSBrMTB5DWVLmewd3JGswvNAAH2qFYP4GD6z",
  "key14": "4ntqJvW6H4rG6AF8WWzcNYVDsVoSkhS6MTubSNUnSD6MqaczzoYVFTTzqNnfvMTRYRmbiaZoNFsN9GeHGDndTFta",
  "key15": "2qsRbzXbpWPM9Djx79iVnJPzZj67FK48zLYR5tHCTSLcaJ15YxTmzd8tVABGxyi2nCpC8iDbWEbSygJRqeZwQuDu",
  "key16": "5x4XHAnXsWiAMEdH6x15BaDnJepdoyX3cgdYecGwdpng6U6SPbx6eh6TqLaAMwrEgutBpFqQigqqKF9t6kYLPhSv",
  "key17": "tKcNhAKBgwq2b96EJi8A5CwfxVm4bopKDtpVqYJzxeNwrA6qRNpcKAAibw4tzwhYBQ8NV9eVxMMbskp2WMgHqRt",
  "key18": "3SFxePgccffH16Hfi972H8oRfFPoiAwNBJUZ8bnyaxwm9BLJzb5fkzGd1sHyu493ZDRqpvwWJSvgLtEguSBSSwjV",
  "key19": "3yUZfHeNVSf6gjZDDQCuJReez37qus1pat2voQ4P1jN78Eu2o24po3Rmrbad7zaJfozegz7a7CJG3P5G7qAuGqHQ",
  "key20": "5q7FnEaZaVs6QahReXXwYk24SFK7RbbB6nKgMKQYLb1K9twd4XLU3YG8WHX45GZJUsi2oc3Y3aRQJc9Q9QbfT9zS",
  "key21": "53uHi4c5c4EAKKQGmW4bmDm8Vk6wXujiTRMNK2tCCPS9cSzE9W4j4LFn2mUvfzD1zv6NR1EKvPNgpqM7TmmHwSAP",
  "key22": "4k74rsyzrxq6TjQDErUFDFSnv6oHN7fkHgWeC1zZrN9okMLJUDQM9q9SKSn7eUh84rgq2oiBiDWaNiE7Y3fTbfTZ",
  "key23": "5HH9BnEigcPoMKXMmSEdMWBPomyWunj5SCfYB5p77QjuPftbsU3DxKpvNxuwHjRtW1epj8dCtSoABFFKG3tkSzdc",
  "key24": "386L4WwVyS3GAeHFwonuPBq6AT8ZRMpER9LNdd76FujvcDcnp6GE7vGDqS6Z8WzE9NerD1kcu7ThXzVd3CtCBAPf",
  "key25": "3CnyLL4A1PyYbpbuusPmk12ZvQP5HuTmG9ueYfd6xbRScyadtGivan5BWxbexKAfSeURoFwbyw13WypwogWWvyXv",
  "key26": "4A3TwGHi4fm6DuGdzMPyKbNzum6BQJ4JUcQdxpqqph29nVezQ7A9BYpnwBEwe4Mp5to18GRDj38fN9Yu6S87ZsKb",
  "key27": "2PdNxUvmSdwaBUnnJc6F2whnF2axpQntYwHY1uu2TUga5SHNp3nMiFoanUdD4Nc5m1GLqCgUt9V3jKdYcHtqiqgd",
  "key28": "4S9xTZqDNmorUUfyEZjJ1Po8sPquShf6eoPQu9rD4e1RZDCYCH7Z6P7aneg1XNRYA8aogJy3kBjSgNQ975gEVx9e",
  "key29": "Gx8Y7fNq8v1SVPoUuQE9jerYcHL8LAYmHHNZoB2djdCMtuX974mdNN4mFmZSrnBGxfxohnCWTmhsHTYG2bw6RrG",
  "key30": "Uv5MBqCnv2XcNJFKSg32JA1G6E7LBSuA3CEy66n7JmhRYtdkYUfRgEo8GZeSpEascSJH16guiy5ekrZkmCRrs6e",
  "key31": "4zKdToz2mXUhTSzPde3XpWsn5biqcD8NyWWS1RTnSo32JyKUDoDBCx5Z8jPn2dTkY72sMuZk33PJQvXUjhNmhoyC",
  "key32": "2aX3vtt1bxwPRzXLKKvZkYazF5JRqMa8uPs95R2a7hUBtKLBkkq2xAVj5tftPxCRg9auTGT5cscM6ZtFkqWT52yR",
  "key33": "47e3cEUptshTdgb7dkg6iTqPk3ePktLtVrAA2mdNbS3N5gp9uiM8ebbkGzxe5YyW6FzRYTZBc7VL5bRsAZn1WuGb",
  "key34": "2hyamWCqntrJ4qa5K4TKY2VeygHUt2sbT3G7Qq9is52KxgL1prnNpExJZ4aZRW8sYYgeT9qTAafvQ5EGtrhw3dE3",
  "key35": "3jL4qDLHy3pF8tVtwHFg7LgfzAhwG3LVRw584xMfSHXWqVRvcjJG8aLJ9nUpm71Xf5NYe1kKJsdgR66FZup2S14u",
  "key36": "Upxd25rBDthoj6HFf7UEjuRanu1uz7wpYLhWjxrpYAiEWzsegcCuDz3jEEFqA8Jk1itc9kxxs9p7FDHSiwRrqvZ",
  "key37": "5wRMU23LBD5PhCH81X8KQ35S9iF339nPrjQWVgruVdbuC78YhKPUW2pW24Ev1NnSArJzAzHVUJAJeDiK3iKXvKyH",
  "key38": "C1xVx9SLk16ri8vYHp86FA7NXUZxrnQZh2P3FykLX7Qp7Fdu9U4spyfwXSTTTeYgjL7yELKZk7Ew9qVYDqnA155",
  "key39": "3DTFW9MAkfaZ8bmF2RNdEk2WfYHosNh2weW2xF2nXoBknMH7P51PBwfkg5LpeVJuxcVPhUkQBXvCqcWaoQupWFeG",
  "key40": "sethkZGbrt6UCmzi1xR1sFPbVFwQ37peoBUqN9z5xt3RkD4Cms2e2iKGw5UprdiDyi3uZftR3fD9QTApEUBuQLK",
  "key41": "3GFJgHQCvZdeLg6XxSfDLFZW3QG2shL6ZahJaup8F4bd1ntKvW3wvsPPpVBpKHoPs9Q2H6peXkeaNkCdza7qYy8U",
  "key42": "vcjiJr6HdYwEZE8N9NGVBYgXWsrQiLqxQAF7vCBmzMxT8tuCvRNQ3cxrtGC3oe5aJ9MdUyrQ9LxbViA1GSo8GPA",
  "key43": "3EE2PdU5SSdWHW1T5wyuKJm8jexxLenGktchK1AJuScv7nFhYFUZCFS7PLMn4RaEQUFt5Gmdjsf68mkHuH1PqDXy",
  "key44": "4aXyj3mnoUFGrdpekFPBp55AzEHJU6DdJvp2UEweWLnZp7bJ4n83cFzvohRMQTWNnoxPLdVmjTJNSunungyiJn1J"
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
