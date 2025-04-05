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
    "5S1Bn8pFDsDKXdPmQu81FJSjrPgde6aFxC7cjYxGuz4r1gci8PwiM52K8ZARJgKCGhkBsFkPHAmNappCQb6yk6cu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L9HQhRbKN715wRRFkta1UqwtyFWkvtdEHW2ZyoK6EtE4SB6pTWd5sCZZhmdLiji6Yfo7PtXVknRJauLXH51DU39",
  "key1": "41JjExk4uTDwiJLfDFDt9LWT64TqPYrfYychYCx1THReSvmyaNfD5sgb2ZkM9pNpY54UHaadocpauKwBR1RYByim",
  "key2": "38YcXfuqedCaKmLmosMnsSkKV3wH5zWxTu9CbrjCvsVVCwTSA5srqerLXhx2ZB6QmLyo2gnD8fZHDxrVAM4TAwgY",
  "key3": "2iuCQJn23LUgYzQ3P4CSNEJmSnXRuLHXSQnM7Tnkcv8rFSBmm7EAfoBbArHzs2XfHsjbzbyxDmkH8E6DSQ6oVKmZ",
  "key4": "3kXnUNFvpDUH8JUfhFbGwxyNrJwVt19dAcmetzCMJHPpPR4AwMxAEprkZmXWtC16eqPiLXJLSWTeTVUvG6YpYkpX",
  "key5": "2dPoyaZm5Vtc6um7LC1a5WyRfj4GB37odgegWKotLYaRvVfNfSDE642uLpHQDLwXNeEr2cjxcGJYZ2yv5n1PfGJs",
  "key6": "3td1ZojzoEi8rPgCRPa44KxBKuZUpHbeFk5fDENdUa2eMtJ3VFGriP1e3cKNnhKzT6k6dfddPodiBJU4yw7D4CpK",
  "key7": "2QzGeGtm517HQABBuXyrQpmRhge1sFfi7EkFd9JBkj4HSH7xhxMYqnGkWUNymuj9cMCvzXPcj7CmxDikaKKo5r4Z",
  "key8": "41ZvXm1MQkBD9iq8Me6f6Kw3Ms1ZKsoRBrGRuRoKxi8h1oeVeV5Ddv5KzRJ35TosTgZ27L8Z57rErBR2zrgjo72e",
  "key9": "4pbM27mVfvWgiFn1cSdfDM6ZmBYKHrzhVDfawWqCNeWtRVNJmBFa23L3koNnUrBh9RWmQvPzMT9MdRJia5BueFW2",
  "key10": "2MLwLzvz2SqACNt7Y6TfKo9Z8kmoqbmCeSZ5vWrLfJpccjGsvZQkzTEcx5CLUaYyJvqhh8EE3FZtBEUKDTtwwkzj",
  "key11": "4EbPDrPQVmo2fgvPiRbSWAKzSW3NM7jJeBVZNR5d8vaVgHveN98axsTaDzehmdVcpf8jMng9pyEgo3tUPT9Qh4tf",
  "key12": "4P5cwqACmGNMANwvLi4hxdM3Cu9R4gpkv8NKxwZtgjN8WoLDAeV75AGLREgNL78ZHjqUM5zc9ufRqarLThimrU1j",
  "key13": "2DUHY2wMypaKZk2MrzTyRY4NZmW41h2YExFnxMtCwryMifY6zhMPctXu3a49vyNoBxvSX2eirb3R3yLJAxkhpzqQ",
  "key14": "2BT2Vzqoian1fpeez3qoKznqRm8gTeffCpXFG6VDikyVin3NF7b8RrsYMZLfgwh8UnmUEDK8SSq2XEHi4QnSqEQE",
  "key15": "5ccU1EAzHzDESqxWdyAeiRktF6wJu6BqcvQyMP2vU8AZNmwVKFQsGZGv5xoTzkif1vGvZxhxCfn6Mwkp1n9eqkoL",
  "key16": "WtZwwR19bv57Wee1F6ZJjVLTkYvJpUhCn78LvvwY5QR8TzC9cT24c8eUMCHeVTmqXWYjGKp6u6bC9SCT7JkLoRU",
  "key17": "2b7f9VBLjLdHqGZMUKvU9XKr2am1ZYqYfyWBmS7HGeurzUwz6oRkufL8mZWMKV51a44Jg3YttiP3JrmWwFVoU5om",
  "key18": "jfQNAFJDZLLx4fJihXE76q2hX1NPXmibkWqXjHPB2EJBWxPkQMnxuMdHv7CBmWY19JQgWt6JNbZUuzKhdDy6RMV",
  "key19": "3YXpNJEz5spoTqsxuJbQi11yYQFdudx34nvVjvVFsx64px8shPcC9JGGTQQRKEur5ZsrbYeWBTxioLfq7iBT6h96",
  "key20": "5JJ36sAEZGsjagBLamUXkwavbwmw2JRAc7GkMA8XbY2aPqyZNfYUoeTn3QfPXPeS6uV7c2K11fGddZ23dMHP8EB2",
  "key21": "2rg8gDN8SPXHWyoJEjrQa1ngeUc9RVRgobc66BSSxMcBvLj5iyjCwUHiWfGgqjpdsX1uTEczKYRVe9vDeEnvsFoL",
  "key22": "3H5Wsm7DU68v4kNZVf85LvJomN3LnpAwJHo5MVRR9JZRiUfNUHGWg9F9edgYBxsJN5GMgNcyKCxAohHQTMFRvt2e",
  "key23": "DTmeVcXieMwj88qawizrvFT3vuZmoadb9KGiALPfwMEgS9D2yP5mZTWBHHCVwP3wHmDXv2a3eVwWpWHusTkJjGr",
  "key24": "LR4sid9jdw7apSepggEv4obpfXBc5RVdtYLb28b5NsApdcEkNQ7msShNSLVQdzVLorSURA5dvoZrPdQRyustFX3",
  "key25": "4P35q3vSqxWGB3uX5vQbWwQjhYfhbBbEspjBHACM2GZDLK3me8KwxussLTES7AJpU6R25LdLq2NBboihP6FNqY4u",
  "key26": "2xKfo71JvHD4B1vTPYfgAqVJbaMxX5hnBgzGqFsUb7QTdMpRK5epVqV5dfLSPrj2cXx1qJaH4LLyn5Vrj8sHpiUB",
  "key27": "3WtY4boTJU2V4cv3NTo4x8Sc3s7ZjshdWR78rcN2DgNKDYMFTdNoAijQi3jS7HcwhsBSv6M4RHpoMkczJJEFZNCg",
  "key28": "3tyfHo5JTjRhju9iwEkpXyUPvWg2zkAGJ1eK4zFHUDuuZ86aBedCU2ca6FmLBiosabJEwUjYmLv9vDdbjync2fvf",
  "key29": "2zVHt4D6xD5YAnoZ7ss1Hog1asxYUiV3wiwzyFqjEfiMTktQDEejqCkmUE397m4Wizz2Bg4hjRNj6gJ1kdJpaEYg",
  "key30": "4ecb5VqndyuLFBocmkcNVq2QXvHGCK7Z9cdHUJGC6ZDdGYbJX2yYHeHCommpv5uP56A6fvoyuEj1pXGB5potsV56",
  "key31": "4xWoMdz6xwWUkmJqdqdw1fNESmVBHawfsbiuQwsYh6EdCN6ABQewLwCDR1HJTmtpXBcaqiEpvNyYvqy7NNbTepkD",
  "key32": "54Y8PRbE4cn4TTRBT4AWQy9xkgtv3V7hwem5BdwNvowX72mzNKZx39drBZD3UKihDsVY9r2mwbJxpnjLc6SbTkXn",
  "key33": "255E92GiV5Z1VU4TQuUMeLYyUuN7xjfufdgU8NpZSaw8RwmJq5q8b64BywNSU9RtwK7XFFSWPK1QBatH1Ezg8EMf",
  "key34": "3qa9H4tZVoVeZsCBrT3qViixy3YDu9RSnEZq2CVhNCvRRaHJTcDGG5bW3erUUy8nkUN2D5xqHT1xxNaewtr7Ped7",
  "key35": "Fw6mPmjtRBWqrZwRUGY1e7sXLB7TeaD33cTRoJW7PMmPDQmJ6U5tGmi9BonR6whuUCafp4RAZenx4LJ57MMhi56",
  "key36": "4U6E4KwMExLFCdWgFtUXTRngKcaEXXJb8UTdX3tzJTaRfvi1PnTgwBv89pjftEQgSy89NziLjQNhZjgVd1HzTBjZ",
  "key37": "e8puxjUy3JrT5YirmqSA8RjdmHiMjg26yoptmND5PjfUsgrmf2LtJ6X4owfumHfZdyqi581sbrLSuBeg6MNJxjs",
  "key38": "CAicy4Z2J5zXRRKPWpa4jPQ1NyFXBuj7rCppfM1DPCXQdYSC6TPCsMhj6Y9RqgFNw46rDqNoFcG765bNaJMJGeq",
  "key39": "5Eb9H7zFQMpD59d17hw6uruNsVNKMdS7VDRPS2CXifkrbv4omh5xZE82SXqtZ6mNHetAmVW9Ev4msxdiV3CSj1s4",
  "key40": "5Bpg8g5dJqyPbUioRdeNVU4SvtG1VkA4sRcn5e328SDxdcxsTXb5yDjdi3Ua18pJug47G2wvSkwzJr8CcpLZdeQG",
  "key41": "3mYkupcRdVcKCTZ4W2QChGQjyPmmJjBeC7fwL56ApszoQRfHptJfsWR2Gn4yNycfvGDvVvmoEYDpzgEzFyd2nG47",
  "key42": "2HoEoBomm3B44J3WyKNaDT8pDAc6RFVSmZXTo6zmPv9CQxQ5L5vQv28L2H6UPCt4N7e96Jh9rZZ1yKbv9qiAbUTb",
  "key43": "38CTVGrEBmX9ha6hjJoypoYcoTXdSSFFdriFNHmWLz6ma683gVgwNuW9rijDBaQC4qaALSQYpeGQctDvwtvDBRdi",
  "key44": "4RzSm9MDHiUsFEwZXJ5gx4pnMmmNdHsj2heCcH9K2S65gAfpuVvLLXZJnvvXAmhQmX1hJjMQzSk1idzNDwLE5phY",
  "key45": "kBKo3QSQ5pAfDreuDuDgGiQ2wWSJPy7XLCP2jL4FsVJFEJyG3R3dqkueVo8VDQcbPd6zschevSoALUnhjyNY76v",
  "key46": "4LMfWvavQf4eTPvJGqRtofYdhRzTwF6e9Vmt7Lwt8u4a92gL1Pp5GVj7AUVxHUv2iZgqp67iUfU3ZjECXu1LnVZ5",
  "key47": "3xLa1qmDuBuxbMYdSPiRSdmu5Hg3r3UBS3XiLzcU3w1SSPAcPpVR1hDMwBF7fnB1bwjgGEFGKAKSgRQWt4kcncbz"
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
