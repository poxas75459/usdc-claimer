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
    "4hdUbLWPciYgHEMSjRH42Gm5DPBJsnLMXDWVBeGjX7M44R3sfn4RiYdsx4aiB4EHrAfuCyXg9ZBHz2qiJ1YRnFdA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HerKep7A7fYcUyZtwdv6jcD2Z42Eb2pUncjcA3qdV1JdvNeADA4xCxtiiVmmjxeEAxqGuW6wy1JjqUGbtS5CW9D",
  "key1": "4r8Zt7VsouSJJNz9Ge33ztDWu49MvhbbaxBgkn8hNZnBjFNKZu8HRLHZLspnW234HaZ8CnLRgHjarLQPRuhaYzQk",
  "key2": "5GSmaAhhWU1tue1ABWP7uB71ZFJnMPP5GaiVCa5duN3zhDoXHkpDQxtBDj5o37ucDktJD8e62ZxWR4MuKikyXZCt",
  "key3": "PDKH9NdbNmc73jyDBZTUKvHJZSUerjK6DWNSxMhcj2q76nyj68Wz8SsFNymrF3HYeDujGEmn6uverLTss4TENUr",
  "key4": "4JLWjHm33YFvRzyUdrfMH8z2P8CuUQqWDA9pifwuuS84vnAHGspRXwcwHwFyScEkvjpG3RYQgp4htrBybQ7yvur8",
  "key5": "JF9pa6YnmnUQj2heh1mGuS1wi35nwioy9FUrB1db3tohnKqR3YLZqU5rfegfkpQV7eWUCz5ULYC64SoWCheTQrL",
  "key6": "4r32ivZ8azuB58NpP26wmgGsAmSKm5YqbX4P1dPweRW22VWqzN1LzJrk5NoeWcJhp2Tfaw9jHWsbFaiz46YJNjuk",
  "key7": "66hJtE4CgaVyxVcCNBX5rit1wrxyTzUWMsufyyvtpFUbgZbHFkHWDjZkTKJGvgqGKkJ2zR8ybHVxTmLNLPZvfbau",
  "key8": "5VpRFF61TpJETZsXLLe2sQPdRixZm2dWnABYP4C3xM5cWsgqVtPHkaovC2ZrE8pMaS8owmQCFNUaRXgeQmnGd392",
  "key9": "rHuEtwd8J5A6PtehcvqVzUXBEWYZCGF5Ek8hxEhyCYZZCwEJndcFdk9nGfF6DinZY8Zaocogwp7ggH2Skevm1BM",
  "key10": "4Fw3WvUzfiCe3pzZDTPGx3VgkJYV41V1co2WGjx7gwkP7JcnhB4tE5oAgV8ZSUudLKCJYbtyeuGdU2xiLXQirefi",
  "key11": "2V1nDxHJPESpqWCESHbhn6y4MTHUycFjbp5xouqABYKK6bYSGokx2zGJk7kpZqaaSDRyUjx1LpFbVPu2kuefvD9d",
  "key12": "51KhV6gCZ4RRWgifN3wEBuvTsb1PQANow2w5Jr6ZiLCDMWMSTW2wAdCjyXBjy42NrbGWKqE6FUbbc1csnUvkQR7t",
  "key13": "3xC2yBa4ht4XMvPsRSibzduZpusd8wDKZW2CPjJUVMQuDJ9Xsk9xgNGqBxMd4oLUHLWUmP3uchbznT3ZEs9wAmMe",
  "key14": "2NuB9nQCfjTpMYQmeYwUMQXdvY5ghJNxCAQS6PbErdT4U39JAxErtLrz1XZmeNBjs1SBw71CNqQ2YKYTHVDuhCk5",
  "key15": "4L3xQcbewN3j7KxPbss2ayXe7EgBsQqZuNL5eKzGWfFUnG5mSLDNqt9o6mJzSQ4nEmy2fmyTR7xM9goSpXBS2q1v",
  "key16": "7x1f6cfNmgw7YxUCdMHNN2R8MERUb8LaaSDrg4JghM9qvVfFBxtrBWJj3kXmHG3vuGadoEbpzFscQNyVr19qWMY",
  "key17": "5Hita6gwwz5uVZvSecgaKyAr6nP7svBMfUE8FdgeNNUiVWqVPhvzHs1g9spt1zWajrSeEj2bhUeC2mYFJ5TLutjw",
  "key18": "2UCfmkQ6EgEoYVqmBAJgKgmT4XiRbU4w1SKt1i1FBfoDobVJm5wPTe8Xd2BaEHcJiMUgrWd6ygdTaQPJR626EZy",
  "key19": "32rCwQe5EKPkX5xLgF3WDyWB1nEUAfnimwVpJVwU2cnAVx1pkvyN3fX6UnVcKrdW48oQeQs3zWW1u41UPP18z2Lu",
  "key20": "3KEVU7LxzsXsrLRRUZ76Yhc7Ce3GB17j5o38B99uwLWcH4NV39V2XScLW3fFTr9iX716jH6AZLhGwpzZmMCdWsPD",
  "key21": "5RTkksV6TsV2fb8jcntek7PvsVf86yFyWGgWcjszbV6YLgoSTmA9EqBbaxeSCm5Q5HYHukb2Dp1Ydd36qqb4QDKA",
  "key22": "M6gtco4wcwhgihbY1gtec9t9tbUwHqphwADpFvGeW3jqm8tAVCcVqNJgEgVgB6XzVAeYoSik9CzkU95QZTVUHxH",
  "key23": "258Jv11DwZozs2CXtw8VrPmXjhYdYR9H3rKL6YMAPsj3zYqiDYHVQ9DV5ZgGps1RqpGAdye3Q8U4QQhgL98tBzEh",
  "key24": "3yyDC1xriQ7jc1UGLeaJpUPCJdPf29RGXQYcrDmqewPi3RcgsXTJzf78QCRUnGYWn5mtyjozifyzWogpajqY9FR3",
  "key25": "5najydtAdn2FqTcj66u4Jyp38ea3TpxZUQRs5URi3kkZbaAc15BmGFKGFMm74hWhUSForQNgqyzmgoEzGYu6x5YD",
  "key26": "3C33z56n6Ud6gG9icRRHVykg7J2MQdLpReBrVXd6cYQHmF8dmyDWhAJM5PfpjNHpuu4PzEGywkNcZp97FFST2PxN",
  "key27": "2jmjh9MMcRRTFFaTngbKG4EtAgJ5fuHjt9kRg69gLMvs3nppG7YUJJ9TKNfT62TZSMjhcRPRL1x3CztwbcWG4yXv",
  "key28": "21dFhYbdcpWsLiMJLeXhhF4MhVtPmozjNVbVm8TxdJbuTKnw7BYA9AUUQdwszsWuM1qFhSsEtx3LfjZriNsruCL3",
  "key29": "cSmYrXFEKbxo54Mmgs45HUiLgaCvfsXZa3EzAFFkSp4VaeRuveSu5CeTybnwXbZxsvdK8znPsV97ptzFY1k329m",
  "key30": "3K5nVs9BTmxppACFg7zUkj5jym6aVRJRY81EUsEgiMzEamBSyR5DXpkMB77WfKXV1yNx5djsu5cvSaV6PV2tgg2q",
  "key31": "5n2zP9FUsX63DP6ZPJQxPvXN7TtKGsRP9iztGvhw6tgrrUAeDySdYdzT3HoVzSAjeyQX58jLgJUpW6HeGiH95nRD",
  "key32": "2e3XGpU2C3E42cJhMBMsJoDiRa1oWdqH3qdVCZvcaWXuPLjuUbhqRzF3iPCmDDGi6KDRmFGbgvYbssyyDr3Dzh11",
  "key33": "53mhK4RWTqq58ayBfoTU1ehmYbbKqFkn1buULVvSF56JZdQCRUqgnW4vW5aPerNTt9seRMreCBpBf37BuswvtaPd",
  "key34": "4jpY8vz3LeDMsphbbKkNg27HgqpKXxr1Lu7aTBjedcE695KHKje9p1TsEQt781bQf8btdEksNnuffJJwwobt2Zyt",
  "key35": "2RnFer73KuXQjHrouj6hJGoGX4CoYT7FWzVdct4msB5M75dALYP66k259kddfuzFJo9g47G3RSUx5dzC3wxvgzvy",
  "key36": "8iVJBYXVmkioPEr4Ckm6TmftV5y2vC8MpxGF88Qwr3ejhymuFAxxw2LB4iAom5FyKhygH7mRXiw2FJu9TQHADdm"
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
