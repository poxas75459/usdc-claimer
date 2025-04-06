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
    "3KstQ3XnFAnot7c5Ss6Z39EkpHKMWnaM63Y7KsaHGyjsJ6cQ5gT5Qasvz3Mgyj4VcU6qNVkt66SKQg7gpmyB9aGP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KUcaHxZpGUXxvJjddkuU6kn5oUUD2yQ96QuisJkBEQHUHbbDnfRPAwDfaFgsV1YupRuiqb81UZpBZWL5KeHKcx2",
  "key1": "4jM1iHWca4W7YRj2rARHqaHpmskBdUp96fcH7hR4DN8wb1Y8GFKb6BF94RKLpehsdaS9tEXUfJ42mmWdJUqKXfUt",
  "key2": "3QXdNZWTSfg1KUq9XGGa9YxNmkfPsURu2jvxtAxm5cnwQq4u9g9EaQK6ruj2WtawQmBUAzQaZo831SwFrJdqPsrs",
  "key3": "4dBvEZ57sVS6EdjEJuTD7SSLUERTtcF1gcEBrEKt8XkaLgoWuiPhQVvF48zXrjYYKZo6m1dqCAdRVzB9ten1SUpg",
  "key4": "iy1DA9Bvwm2TvaGyyduWh6YHCetpSeSCSevnrckRboyQF8in2ZoANdGAPqkcUStAYTP5wZCPuvp6cpNZ7otq6oj",
  "key5": "rvGxzaXprnL7QGjsNVnN6p9o69hbSSWSfpSr3GzsDgtn5oXNEvo4yYHkjBGWmvjmaxsAGhjiNyEECD13so6ddXJ",
  "key6": "4XUpFgSiTGVCBtHuAucKxEUNcpDiiTF1YrFr97wxVYWg3HQg118Q51XgzbVYJAAGkyFoFzkjhVc1gCsHW7ft3CVK",
  "key7": "4942kce4NFk4TxcQRDGYutAPYv7HGFZfDNnmu3SwbunauQUYq7STMdVUpYjQGXFrm9JXaGqwjDcaDjbzmavaP3ou",
  "key8": "2ZwBJPA2EnstpporhLWwgyJ3hUEX7uLpfhjrT9J2qXdVoHypPdArUf62TNPLBkCfcShoQXY3PMdnbrnDh4h1b2gw",
  "key9": "D3tdzYTF5CpGuLLAcvb533iabbm6UhvvofMEcPBRfcB2iPowDA7vrfqj9FGDE8MD76v31RUWa8AuhBHMZyn36Fk",
  "key10": "4EfscQuvE1qEWquSjrYmqUaB43qkjDxeQibMbsieUz91XGgR7odESzzkyvU6cmNEzTKJxp3PL6kw3yohAWL8Stxe",
  "key11": "2aRgGx6YfFpRNdJEwvY9DmmEBocqPXvQFCkRDwuy3qX4C9XCso9w7JM2gBfYK8Qns95nXpMHyKFk8HLBmKSAm5E7",
  "key12": "55F4CHWhgQmEno99F5NTpjDpKkHG9rU5y6MePZLMFPjjTgLMM6kAtQ59NShKjmWVpGbhYuc7xRFRq14k5otbFVcG",
  "key13": "pZdgNn6qhqDkoWK9zVBNYE7T1PYU6J7LsCBPCWrKLTpW7LtKbhMwLTgQSvWfVMJZuWJr6EpgVXhZ1CvJir3tp8v",
  "key14": "28aDTtUsijpFuEQ8Jue1Z9vVGEAhYELS2sQ8SjZd61UcDnkDPanQ9ijW6FtufumzJWguzdQUBDVu18yh7LMNp9Qd",
  "key15": "2XszanCp913MgB51t5YQLhnvPDD1HjUkZTRdPXRQG7GTiYacrGVTR5kg3mkb8Qwyz2E9o9hpnMkTt9E8ARYcqJDo",
  "key16": "5pBbKTs71nScHrifZPJbrAJGUxkrSShdQ3ArVtxbuFX79s4t3sUmUBtKqMqcfYT4KhmrygaiCZpdYACbvk1oy2Yi",
  "key17": "4HYyomxPbnaf2qs2HQtGHwGXyYzha9Bawh1hNm2YzzWXy6SKnmD7KzcWaLiJiWSVgNpEZLYURCneKNcEaUpjAZUE",
  "key18": "4bsFc8mKydYCAyqbEFmvQtAedXBq8U4CwKULune4juEMMmgNv7brmFDyauvZfJDKdZTcperJH8Vd5AKZhHoZyrJy",
  "key19": "aEporyWJqo1aKNgraF9MfD15kZ6GdjiaRpEH5pgp2PiPzbWdRMg5kSZDzW76acPYqdYgwbsKMAbiVMgsPuJT3JP",
  "key20": "4MrH1xSoDsW8srcFQojdCxzMrMz6Py5fJwzkenuSQANTESAoBAKefpjyJvR1eK5wqDhho15qbExugcN9D8GDXSH8",
  "key21": "ssonWYNWRWjKmPJezpwY6geGNXXVu2GGQiHqyap5dB98Cv1SsrYviRgfn2ykYnAZv5tdsYWyVEnLEDyKV8tBDfD",
  "key22": "2DB3Px76rBDQvmjM7NbnTucoNi5JbTudNVtZBa1hNFtUA6SDQ1mTPGZn7g2FnVQGDKnYkbSXqzjtJYQWTjAtCt3N",
  "key23": "2wiTnaWL2vAfp3a75t4s34aQH5oafL7ykyq2hronNpSuYsmDG795a2r8DScgfUaVCo8UQaEyGGMV8nZQw7Q5VaTK",
  "key24": "2e6XDdrMYuxhhrZ9dDb6ssXCVcfPN84QoKwjZJa1rHwaC5TTZXzCHv6JW9hu73Ss2SYooqQXHzwZ897WxuuCyaQq",
  "key25": "2vhb4CAzQzVNXXeJhDqD4Fpj8X66aECJYdzkPZL6auH2ZQaT8KW42uoqu6aajnqhDV5wt9j6TiuNghQFe8chdbZd",
  "key26": "U2y4yr4ZthhJ4GWsYF7eF27UK8tngEU48jhocoA9RHWJ86PypMy6ogqxmGWphhCAMsYZCoXTzPYYiS44H3Wgb47",
  "key27": "XVNDcEevaqKqhkNfC2sVKZWTZ9QVBpha452M1VFJtYGuG4E1PotsH5e8nEQkicmJ6tcNSfGhdXq4TDDstgSfiTn",
  "key28": "2kAtjXbTGtTYBSPjWFE9DUychSptmWAspknAxPBzKUdewdnED3iqVU5XA4KTUaKPcXUnrrZGAKahV1evr5d698cv",
  "key29": "3dJfJzJPycQscim7p3LNZk86LWMRvpJPLkyFntqcKbqeEbfQyHjxgzqfEcQqVCed8PbNBNCWhkB7yJ9PgEWroyY9",
  "key30": "AqZLBMq1HTgfoqiRKgurkhhMPrbNBM9bNRKKmkoHSvTbsR8evuXfThdbQaML5Pw9ovE9hoegCjGUvnqWyy57N3x",
  "key31": "4hB5xAchZq9qiidER84YjXLEu6gnmJYfHuZidTcf7s9rEQLM6FnCD8VYnMDE9phBwWRTuFVh9EWVHx8v87hTUVco",
  "key32": "66pU54JRaqSGeYtkY9vrxGtCgt2kEJb6WSKtj62b4LPmvACGjST7umAC2yiNvtRPhziMcwssnpizT5U5FpvT4BnY",
  "key33": "33XNZVEwNLB9qNVskFGhXUUspgMja9X4EF8aRLsQKUKm4tmtsWW1UkJde9doLVGvnxadwoCj5GWxsRLUaPuWMWNC",
  "key34": "32GmnrdTdMczVKqpp1LL57BsQf6Y5LShHotaKK3M5BtH1MLTXvYhQ9vYUSQ4MDK3tN8LD5TdKfkbS7cPVRCQNHY4",
  "key35": "5bBiHXqx1sQh13X4Fbk4iHMQK6sGvgRN8dAi9z2Qr1iGsYjL143pQJufYq61GiZL27XFLq4Gm6TW2tgqWagr1eRo",
  "key36": "2TdckyBUQopvvgEdoPTg6JCyayDkVGdEq3bPk2LcwoJiB5FLLm3ofp2fX5EUcf2i4QBWSfdMXUWCkYE2tVNVwPFv",
  "key37": "5xxwv9syBRJGQyoxRKC1U6symGQh586GR8W18k1GY7qz4ptCXxijk9imVq7ftPQHHNVoeer2fZthwzdDEnoFgaSC",
  "key38": "hkpvMdp2tNKWbk4SE1Aaj4yrQfTGsAvC6ps6sDdw7tyT15kbeTQSdUmP35sw1J3wnxwCMwBj9LrsN8EfwYSe5Ti",
  "key39": "3d6WwAPbtk34XPFp9TxWYGodNAUDs6P15sr9fGuM9uhkTGEGKPy9Jp7BEDYC3kxcrvDVE2nPBh9EasQy67wyMzhK",
  "key40": "39wmyY6dGgVfY2SP4jeTJUfWfqcUd9EFsREjTaERZr6uZxM3rTf8GWfANvhyQabQNDeYkjTryVgAwvRsdRM3FT7d",
  "key41": "2hUhT1LDCUDBXqz7aHGFnSxp3wMEGtd2KFun3H6CVVw4HLAhSYM7yKCQojeXtAeWFy4bKNBArXKRRPY5K2v9iojD",
  "key42": "4BEEY4gsCj7D7guRptcTEnJKu3YCz913oe1DXVcn8H3J9pC3tLqMX4tYQ1RiEeVwR8TwTVFTiafoUD5DbPhDLDup",
  "key43": "3TTgqa5QVTAKiB6DsbNa2oR7CjkHcR6JMath8AhaY1a9eSBfHNiaayk7QBczaovNtTDUn3pMcWbBHLpHr35jRc66",
  "key44": "2La6aAP13TmPSAaj5UaA9PKS6fwNi9H1S5Z3XouGxUiztacs4mYLDPzog6XRqJmaMrdd4nGoQsPRuN2C7prZrPN5"
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
