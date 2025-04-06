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
    "2KUDVKW4sbynm3QxyMvx2p4vnVussp7xhcjAqgKTbdKtkZQHyFqRHLZLeECrpate5ZSkeRwJ41iwHfkj19Fhw58"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HDdFpkx5rswjbtN39zgf67TrPE5UiefQQXvjTWKWHSbKmCohvicTNiTSbMeqYchWdyQE1usNo7aGCU8acuKFoXJ",
  "key1": "jTzUZowwBAQ2ShoDdZZHMswEKGTmVdSLXegcJpxjFCX47wLtk1v8Fh28qAiN6FegdBoXvWLKbeEfy6BXcnoZbra",
  "key2": "3BoheCnMmJiW8J5FZpDuTB9Unx5cdR8BqcjkLCM1ZafJTgWhZD7gz4hive1R6U14DHDHbYM9YXXMb3Ng5YLp5xbr",
  "key3": "3m8UgCzhWpTkdSE4WZ9hUU87nMmwmWjQyVUVttpcDur5VU4wYMqt5xMdVi4UyA7SGGz9mbKiLK82npcTSdM8Vtgi",
  "key4": "4ShYBejuE1CvS5iFrTkd7MiLTXqfTYLLrP6tpWGtYW2fTef8pGQyUsS14ha1bUCYbkmfKEn9HvPkS8T87bBJ5qUS",
  "key5": "5C1avd4eHjUkPAt2w4tpgBvFPLQJ2Pxue4vtKMWa5BdwmFm9iTZbKVX2kw5TPA3Mk6VLzC9UAfPd1Jf86aPMcSsu",
  "key6": "5C6H9LTtmY1rETooJsMeTDJ2UHXEXj5TUG6jia5sAqTMpGPFMFmtXqWKEZVGcGGxBA3NxjuQkbUf2xUWEytHkwKC",
  "key7": "4U6QPhpQMUmZN8Y6fdMDygeBVJDzJdQwojy2u4hHHv7Bj7SC4cmh5JxQbKwzb2MuUrU1b397GvtnudnW9WLhGSxr",
  "key8": "54j23s9mRCAQuCRFMwGBPi5goPAMDxREyxPWvGVHPZpnmeW6Tc3VoTGz1WTDp63RPZaDC8oXeEuKsW5x8UjSL9wj",
  "key9": "2P669pxsR5sVjSJ3jhvqJc81ZVHebbLX3wxX6VdynTC97hTYhCdNFGftkbkqskLqybQAV4xdBkcrcVGupA6ceD1U",
  "key10": "RU366puHEG8tu35JRq7Qt55SxURRb6hVfxisXj9wKo85RX2P4ugTVxvJxWxSgiNdptLYaKjYiXdt7xn45DkApqm",
  "key11": "AySnVceCsXghgRs43Qq7EpY8hBV7jkreg1g9na3w5BJto4YVZa3NbQYNi9T8kyLDwwqVhmAEE4bVDZyCSC4XJ5u",
  "key12": "3efS1nEpnhLv2NbLaz6mivmsDs7Az8nUbf8D6FfAPLnnLFCwSwFrfwb7z4CimB384oxMCW72R1bnKBUw8F7ZEhDX",
  "key13": "mCK6oLX4D8BazGBuNt9mUpUMDeqC6sZMPGD3UDA3fFDh5pqMHsrXDYbigmqDzictJEXHtK2zZiVX2LAPw3nQ2c5",
  "key14": "2pqWBN3XEnQjYyMKU6DfY94oW3t5hKbM6z7vnTQjDNEdwRAhfcS4wtSZqjj5QteipZGg84UW8ModWfEKaxCPKtK4",
  "key15": "1JBmzHqrLhLXVg6maH8CdQpGgyUVzBPN2gszdKkNtV7dzEC1LFovRxsiuryqLDMf4wBeSVJyx4zBqnQQPm1vs1H",
  "key16": "5ZrxHQ1EKdPFdB6ov5M9rZxyqpb3CKMNkFxk3DVxutzYUVfZKFRdRLNLbbdyjBkNT32AJyvVxVTmSFRRDoDecTjP",
  "key17": "51Fiq2taa6nCj4ao58pr3AvgXs1ZMXmTFyybUdA4R2UyvDTyWkikN298NW8RCVz8iahXpWLpjGZNUWKYWGGmZ2Y3",
  "key18": "3h9HFHmiKhnaiDFYoWCfDRu2ncwpXfTpuqRp3BEFSGZVrsNTqdGbxKTwH3PMtoN7cN5G8tazFnCyrHeU81uG15G2",
  "key19": "a4yGWvqA9CvEM9mEcFP3VmMnxkDo5Lhr89HoqQgVcBk634LrKHwxEz1hvnjFu6GE3uZCbTG2vbA6yjesy2qMRqE",
  "key20": "4rs7wLDJbH8f74seZhnvkLoTUiaFF2kT8pJnGf9YhRaVuyRdM3n4FHqbhFg4xtJXgY51LKsMp6WaQ1Eytyr6yfTF",
  "key21": "5QUxwe4pH1FMSwLJqvtpMcGn7BmDnWRcUHy2zxNTXTc2U48RKMGgFn57ZbEuknB1MrNMdYrt34yCMAant5rt9Nyh",
  "key22": "5vGua84r2XeEQPEEgc9NhajZwn1o2HtSLUws8uFHeNqyo9aQee8CgFaLZo6goWPMxwxkBiE1ZZAaKf1jvBuxSZUq",
  "key23": "3YThS31VBmoV9ZQ7gGSdjZF7PKKRaWYL7Vk71ajcBCNqijoLtXhv46T7Zyqee8VNvW65Jc751Ke48Z3BWd5m673c",
  "key24": "3YGFxF6Cm3Ap9h524XZzCRrV4jBMnFagH5mx9CKD7fUFuVmrSgMjzMu1JzbphdoEumgimkqZk2bR6QEAeXuaR86q",
  "key25": "zJ22KVb19grZLUDA7nkErEiB2iABj2x5odieV6AzfgJtHddSv9Puyxo6E6uCucNWG8szsWqQPHdsKXyvRskQRQ8",
  "key26": "4LpDSAfNbfnGiwak9em3mXg7ue7kuG45ZupGBxXtvsRJKoUSfoLjMgqaihiYgXgHnhVz2XM78ETyAE9qKFsvQx5Z",
  "key27": "24ZdYrFmcrivyueNWbkbnVLpY1VoFta4y6XxsF9UqkCUM574FRTX7B4zmLnh2dD48DhNByabnnuNvR9aAm5Sf6HJ",
  "key28": "xVHD5TL83MLxeH8WRi7AMw5rU5JMkZKbV1K1cm91Az2BYvBKGUgda2cZm3ZFN82Ua4k9Q3yyCWmbUGxum3G68Mu",
  "key29": "26F4cExstXk5jf6XKLHzyCLDfD4pTkcf6frCkhiijNqA4tJDq5gALxhaA6dSFBbJnzFun2yowvQSEjvBEgncWg2U",
  "key30": "4Znh9MLwAZUsMxGSnaMpPoPT2PkN4qLwiYMnpGwhceFFaN1dBKhMFCJUCZVvc3ELz9GBFh14VMtYEvaz2NM6qR4W",
  "key31": "2VhP61shKQgLsRZR3svLGSELsrqdXcM4WctfZNDwfFoUv6BKE5qKTwdQmFo5Dq1TDytocYvwjRQCtYykJ8xWarS3",
  "key32": "547iwvgBB5eAFszGTB4NCLXdNnnc2pYZGJTjZeU2D52Rf5uCz648YaELqD6LB838TBa7E1qEQrP8NUXSYnhf2aec",
  "key33": "5UqoRKPstiWcjiLAvWHA5ynhLZKTjyWyWXcAcuxFMAEKXdt25xjWME2Rpoq9CsD9T27uxj1J2sJiZgrUPZ3uMSyE",
  "key34": "3mXjQfggUzqwFhFgersmxBBbpRiBXt9Guzmw796TB6Eq6k2ZhjViU3zTpAAi4x12tMg1kR7M8S8ezG2m1yFUDCmi",
  "key35": "2WfqCJ5X3qi5R7EavBPwro2Qzc7EZchhFt3uZN5NcPncBhfmpLns4LsWM1qcsSzx6pWwBqarpwrttVpF6wja4qPi",
  "key36": "2fXXiY8eZbqpGbnYbQ6Cc2WSwgi463EA1UQmN6L7GkZPg81raxXaTdr6SoeL4jACpN4bBF7ZZ6S9AuqsgXWvWNdC",
  "key37": "4HEBSqJEqkms1zgB7F3AQGFnHpCzk2ekzKqWaFJYngrqhrz36jJoKpTLF7ZhhiYAzGUvRCZUzAG7YqHQLp7BjV7b",
  "key38": "3qL3HD4LhA5n45BoFdpHSmFPQNPeJrLhf5SyVZD4qm9pEV6uLKFTzWNEw3msoDTdJCcdmnoXGP3W33kG35GzYJBC",
  "key39": "4hvVE8smgFrA72dGXTx6TXA3TwcbsKDkWZShhYREGJasizXHRCnJ9YgzqPLNwtygQZbg7EHfXPh3GDHe3YoB4fyM",
  "key40": "4JgNqsyDC9z3JW9um7L6Rr2hVJdSx5sqqRmRSEUNRTWuWXP9UcpqQnvvz8Ykb9dCPAVzTuDwjDwYYgoiizzghnzc",
  "key41": "3wbr5kmLf6twWWJCx8VCvkFpmTjB6oU3g8Jd4fFv3HZFBXQ6GmWWnfqEaKwxjsiKhu9a5gxUibZZhv2AZVSNVrVn"
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
