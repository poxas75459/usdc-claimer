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
    "66FTnYCs6fvP5XJ9k1ZaPcjFBPAYYZDEoBcyCQXnZdWWvKTaU7MYewpGpRwuUQPagcnUh7z9HvhTs5eXegoXusL4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JKLA12QcT2i4pkqJhUnJ1oKmqycp7WewGq9STq3E7xjLb1DicfLDTXLQ6SwLhT8B3Hwh3bazCJdk1VKqq5BnVB6",
  "key1": "3b3bFpBdgVK41xrkTGgrcGK3cSSKZ7HS8hzRAV4XQ6wqFQjVRxGb3BY3Pd6HUjRiGQmKd4AE3hfjxD4vreioG3zx",
  "key2": "42msbSrMvbt6LEyBsPHMafKhAUzbdgHJvNC4nSZgEuCQSAZmvjvi73nJHs6TwJRox1G89qvwPV7RnwCaShDbBS3f",
  "key3": "2buX16cmisse9hnWXbPuYZpGuF7FjTpzaMKkoq3aLkT2aBkAfJig9FebWAzxmWjssSYDS4JztcEXe4MFk6efB7aS",
  "key4": "66Pm94YzWfe2xzbBPwqn9rQ23utyHkN98dr3ptFS4W1s4A6kmJgkjeLpoFFEPntMEH3YJjUBsoHEoHebjmtMM78W",
  "key5": "4sfockXUfhuuWFJf8WASphuhuzijQhhweHA4caUJfGugPnF8qVgqnZWB2UatXqA7n5diiFZZqQ6e9kwKQBY9JZZ4",
  "key6": "2xQhDBg1i9HsfBD2LymbL2qBDgeXj2vWbr2bk7mqb67U7YwXoLb7scdJSxPnqEmrEfTNYEjkHTr976nBKatu622e",
  "key7": "DPbaKFevxBMXj1ZE8XSNPR9j6UKmBMqNFdD3hpenUr2y9cpQcHCMd9u5FUJUCsmJZ9JkNqiPJM1WK331DRzhDnZ",
  "key8": "4urUCFsa6gyF5aRoqV44116ZAogEKAQkUdBVRDJkjYyuYEN57T6UcGbbfio7VY8YwUvqdQZowUHuzx6W3nuXxv6W",
  "key9": "3ShnMLA7chaE34QoJBjN4Fz6hxsEYpkp458TN4fZoyyBEMy5QSLHhSQ6DseEte37LR88eUXvkiy5eDBikGiD6vUo",
  "key10": "5a7eVgiucybUJX4H8vP6r2cTiDkjn3KapxiRHPyvq32kov2EPRBAy9F87iVWWTg9ujfe8nPT2gAPameNwVboYtFx",
  "key11": "66hS9iMYvdRTAkoEmR7juFiya22DspfCmAkT3tCCWnuTBSPDxYBHgMviUEGD7fYcCDsQQ44iB8WBrkn2Gd3V7Yoq",
  "key12": "BcFJhnEbJ1BhpKSaCQqsY8XZx7apAS5R66EoUcabRfz2u4fkdn3oaN5xAbcWx4wCixwHwobPj5Snb1mP9jy4RC8",
  "key13": "4TX3q6GAyXtvHw6eC7Wxaphqp9BYQQhB9XFfE5w2NoZ7wZspWDJrDNppPdiWxN6ZFm9YfesHdiY746dPZhc7fCbv",
  "key14": "3EPLcrVp1uWU2yvBNJ583UQ49htH9mp3U73QEYxY5iiG8xwk21SjYHtsG37gjFbd5paWbaa8XyZtao8soZk4T46N",
  "key15": "3AhJdZBm8A7FMkcMBG6abs92aQAYjVETTJShE8zvZ8Pd2xJCzQkK6uU3hWJgrRhPb3xjfekRGwtMV9QKbdXL8bDp",
  "key16": "3KuEBiwpZUYFyJBKLRsPZ8z3gksdVq9Rf2NQMPYTSqv29cCVGj75mcjwtrWsy7SvtWf5t9krF381JG2hEb2s9RNc",
  "key17": "igJvVgyLKyhGw9KRT4GaW5UkX7MShny7zRamooFuQpSwBFhKkVzEyAzMvVDKrpZWP8G8nhn8qp1G2fd2vgvqsay",
  "key18": "HeubMZZiekDxSTg5ntgb6AqREG7k5SuZZR9aP99UFPHYsosNaa6BaiztwAs7a6RbvyWJacX84qLEQbTvy8kkQNG",
  "key19": "4zuu2itVz82pLYvPqdun3TBuzfWdtffYTxP9Jygh4bt4yfyn3HeqWaH8w71e3JV3sKDigSTUPzPsFETw9VxY7LGu",
  "key20": "3ciT21sGAEHrQkqHKyUti5ox3Etb4XdArAeZLsCnfFxzfZ7PVV59veMfx1LoWjrHybdPqdTHH2xfmi6KHQsEseX7",
  "key21": "49ba6XYBJVcdagXdimSo2KXobrwr9fLmqPcJk79VCMLbw8cz2w5itNoBH2EBan5zLTCcHzmpEoocb8NhXtZS2pFi",
  "key22": "5dK5LPVZpjspLk9VgCGxPQ1UGVd4eSbhx3XkBfdD4xp6Lzw7k2JZ7yUVdmHQrQoNzwLRMDDf1H3X2BT2C4aEJUPE",
  "key23": "3AmUKjQK2RvME1BCGFpJn1uSzfC8wRYAtZJ38zAdvZtQEdbJx93BqHEkQyuUpLnjwQiqrHabUhC9EXtmT9Ln66EG",
  "key24": "4s96dkGnGC8WwSi97a4VCh5BMd5BJio5yheGmYQhMnW9NZrdwcE4Tgm1NLR2gR5Lyw1yZKABz9rw9Vimu3HfbqHm",
  "key25": "Kcnk88tSHAxFmX7NjF8VGGqYnHgVs1LpzX8foadCNuNa8CJ7vVPWkzX4JVoAZnkWt46TQ7QsV4aaR3SdYuhv388",
  "key26": "59vnoGc6Avk3icpv6pMEhYeQLtK6kbBHeZveAJcmYVKVkh5ERu7gcq1pC51JN129vBY1zVJjAui6udzt1h4xs55s",
  "key27": "55kEHSDuA8TtHUmbW8kNpujTGQaJRzuzWLXZKvqpryGcUkNsUKaSPANaaZ8N4G62TkH8gq1UzcfvyyzbqDSZCQCo",
  "key28": "VhVKjpwwq4gumRukEK2MbhzXagoaeUDvdmTTiWtoVMfgXAAWoGwGvXLQDsZjqFkKYCJActmMEHP4XBpTBxaxstd",
  "key29": "Q5Yyp1YvgHBaTjPF2z5U7Pwp9D4DcymWtMPdszz9NQT1Y27QAwrFPN7EkXFNKtj26Gis1VpGgcV6pP9uEaT4mqM",
  "key30": "5TfacTP4PsZjiirmPsEtAxjtvbpKLTrK9qWhQQ8TD2eCnQJHRUjwLc18bT4547CunmDrNDUd61SjcTnZXfSJNDSZ",
  "key31": "2RBgJy1xmgZnEdVR4Q8iK3BZFq43Hbw8GoSFay2gHxZB4GKsFDBrjXBVSkQ6mgcFu9cZxigZym7cXoSv3WJrQRXe",
  "key32": "6j6DFqHXGyZN26JGtN95EXtUcup7w1dN255QoTSqqVLCEnLNKETCrsM5vv9ZUz9wxGitRQwojifgj5YLYhFvBuE",
  "key33": "QQ79YVQ65TQwvw2Hbt1GPHhEudZCLdM3jwFc9WifiBGHiwdC8eQTxupZgQafPfEmYs1npKY2RpG3yDNzpjQz8af",
  "key34": "3VPA1vcWSMyNhjFpnAzKvCnqDNSRQRFfftkxRTqXgLgWb31WzskCAd8DdALvdJCcaV9kup5LJo25FaFeCgLx6YQU",
  "key35": "4PjVa5nrqKvTxPgRR88szvDCCGBoHUPB9BNknwCF3jHe4UrV6ErSfukAwfwWvourt1X1UdWNzA9swY7pwyckGe7M",
  "key36": "5cRnaTtT8DN3sGqthQB9711SzMAw5L59iC9XPCwSKnhh5VkKCobSLcn8XnfMM6jxVS2N4qFBqvX6L1S8TsBFvTct",
  "key37": "3BHMRoXdHc7bJanNEYdzKe1q4W6bN14UsN9QCVMpXg75SzfyZqAtMmJT8xxnjBdxHG8YXiKEJQpgVZRCh1DGnzcu",
  "key38": "3MVz9fMrWnAEB5JDgCU16Gksno2T5PnFE2Hh2jAxyfRJQhrZX23umzp7KjfgEYbSoXkcz1WVHhQdd9VfyBoYytrR",
  "key39": "RgDFPxpYec6Pbt5gb2Es8p5UaHFWmA42mBpkMzFY8DgLLVP89wF1ZjTMyrCVq7rpDgUpYEZMGmHBeQYpfstdhet",
  "key40": "YoDWp6dz5918RpNxk6TFy4xJuQuTDi8yXvRPMjjUxL9dx1jgkHWCSryuZ4HUgV6Qiffd7GseKszfFC3bc1iUgxX",
  "key41": "vZ3xBcHdLt8M8dftgGA4tp2tZYxNpVnYqjoHxrzw3BDcC2tanXpXNRS8cgDXA5gCQgx1ABq2C8SbpwWs6pjfypn",
  "key42": "2c7XcjjwyGtcT5y6xN8NemRQbEUeiEU1YvjqiGAu1QMA3Anwob1mU3nAgPf3oDFKGbMdG2Kdkbd25VFqK1bh2dHs",
  "key43": "4AmULEXUzqeJ8JqWxE5Gs8vy5NxTveNfX34fGb4jzN948ZxxPqfEwPUeYtu8M7J8uzp1SrEpsKbLxmcFDM8v6dJN",
  "key44": "3GMGBxpPxm9gKovxNYVidV5FpVJ7tQHG4KNzVKid9kT3CQUzvZjVBQKL5g9WCtx1ApUb2qB7XTM6pQUiDbDqboLb",
  "key45": "4kbW5NL4wUjVGhSgJpHyDEsC9BjxCVMsgACH1HEFcJiwLtYRHXwQsJSQh19uuknk33uDCzQveEpE9UFnA7qZyFDG"
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
