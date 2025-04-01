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
    "21gkYGU7rPSUpYMaLH6nKzCBvyVkyqeihsB8HZTxNBkGSsR8W9YnPubwjHCrAYBxknDM58LYxgpko9xa7aVuyAPy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Kubxo7Bds5vk5SoqVPJPHxoU766ug7eLZXhnWHSB5uN23BCASKNGRVnTd1gJdEiGmPNTEMiXYKajMpKKYGWq4Br",
  "key1": "5YK5zgkZPjKgFmxQyJQVoMcC6Jpcy1pdzF95upUEBmPpKrpxoRc4ZEHQxDWiCTkvsEqg6LoYeKDy7Dv8VmGWuA3A",
  "key2": "3Bvx6TB4BoNgmRYmuoqhegpAheidSqRMZkDgAhaq94n5d3utMbejgx57avDDGrp3YHcWpaJRMobBfUBPAFRXcdzR",
  "key3": "3C89rfTZzAwBjPGQ1FZxjgWgcVRKn4CYszmeAvHyQWhjnsMi8pXhMLsUj7uwsM9c7ULPdk3UZUo6GxqgaNAZXJ9C",
  "key4": "JTUYqvRN8ybzcZsypDdsmECEUzMwWPWcwe5xyASzeF2He5iN1Kw8MPAPwRF7eGwqZef6ef55s2WcUqjCZ24tpgr",
  "key5": "3jbPeALG7c6F3CUPrfzCi1gipSnhbUNnaL3jycvmz3Peo7DRQq1JgftcimevQeEpSiFbyvsjYavYFuBPr1fcJW1T",
  "key6": "4Y4MtSZ4DSYo1cgqJvQArUQfFyoBNXwxCJmKVabkfsDxTfewWKsfBL2T1QcbaDCcUsTN2NDDv31DVZYiYKCxqR7z",
  "key7": "4GJnj5sLFXmXcnCmhtPYH1ZNHzvVMUqBvbBMyhpxGuT8Qrzwz2Xxjzeo3qKQvHgE6kZoLd4J1FvcEwnfHjCRoLCM",
  "key8": "kSyQu3CcnfJRibv4HXEM9qSzxn5TKC8dhZweMmrUBREDNzMc2dagqG1FZyBv33RN9UxoHxv7jZxNP8NLDiLwWdx",
  "key9": "5sBvt7Tw53B1M8c8JxDuEcz6V6Y6Tc2vCDuCCsDg5SJNL1yhS4Sb28wwdnjoZFw6N15VfGUNdz2jDb1ytM7y2XWu",
  "key10": "W2ULw5jmHX5FgAMGEMfLofjQTW5ZTGu2be9ACKpRbGZVYYmk9gpQF8zjh3fxXTK8GuMjGprB9PqThzyuvasvuG5",
  "key11": "3royjKz5azzCaRYH2ZiyHmtiJhKpNX5qb5F8SvntEGDjpL2SVJZasQdABR4zhSsvQc5pBUxPXibP4C5xijFp41ms",
  "key12": "t9tPgirsonACpouxJgcRwKRm1X2uchHfnf8gpJA7nZcv3c8BgiEev6mAEzRgi6m4MmYEdfB5w7PkMttut4ovsAN",
  "key13": "5n9To7KkraJ2WnJf5QbLSH82Qn3qAcytqqqVg91Ksh6ksz9nnch8KjNFa8Lop6k1PHHg1b6d6vgB1oKc82wTEgRQ",
  "key14": "5T2EYRoNwZ2NKkWCA2F8TVnnqVt8Lj2q7E3vZytGeZ4CgLmGm9YVXuhD2E8NMx52m3qVcERTx1WvfrbsFBtmtPbx",
  "key15": "pYP4YNxvFeurtEtR24jrU9ZeNxcAAxwtmXDLsMvxKcCd6HygSSFWjepe7WPm1CYtnzq6tvUFkQzXxLb74RkCvm2",
  "key16": "BcDVGkwKdCJbpQHHxDzRvQbU3yBkLAPkwN1kyk19zinYbKcfv1Jbdx6VxuHjuDy45r117vkYEWKPq4Q8qqvNMoo",
  "key17": "3eLtApzQaXhPu4ZfsXMn5y5o4yCXccW9P94HPTm3iqaGZjnpqsg42HUMJurrgLoLhjB6QVq3UWEoHHA46VtKBpGP",
  "key18": "3VMyQdoDhAWx4371FThqaQWuRkqwne7QXeD4JT5kR7Jigcbj3tPEz5hWNdnuFRffrKLoKUucjFdTYWN4Uq3fh5N",
  "key19": "4dGLUsvgKqfNCZHdmpokFY7HX94SMCyGFykVBDE5bha11o1GDFyM8dtvnmdeCByPTp2nEuk69UFuujgmxHbnMz9G",
  "key20": "4V7NMzLJTJMd31LvtwbQNVjNiDRPupH6v4vAX8WCszKSofB8ReQnW7adnB78hZtY2yNmFne9CBee5sdXpd47eqqN",
  "key21": "2HZgAFK6FBAt5ZFNrhqEUmcLiuPoDaKXzefkgkq5VVF7t9zmsPEz3siWkLnZnnWuySyD8yrMDg3tpqr7FLHMJXM1",
  "key22": "5CPF6Wd24k9Lkwj5DCye3Xwj5B2HQBP8nhbsnYD6nGPy2vQNFhrvct5e1gqDwPTwyHuGGyWJXDubdP7zH2PPbZX3",
  "key23": "4DBojjiYjGNyAr4eaEa4vagRnU1UWUFrg5SfavL49sxdMzSXWSrCwpY425ft6Ls6CR8VYBHyRLiwQgsS5SSVNgkZ",
  "key24": "4HfU1U3dW3kb3XVS9usqZc1cnGsrzjfpNVJUPABs69MsQGfyKc7DHdoPubGKrYZojELSBkJTZ2XcPRujZNqDt8Ds",
  "key25": "5PkBp6dGpCi5Eck1VLLBwmJ7CbiYZoHcvRcLePtGJNj19AwJvapKjkpLtxaqXyYqgXYXZG7j5fwRwEZBUEArwP3F",
  "key26": "2BD5rcoBNNrggxzMRojBVWkkKsTEXHrqGhpKfXffGya1d1q6nd5US6htdR62N6McNxJP9CG7o8Pi6udsmV37xGNJ",
  "key27": "4brTCEVmcX1xzNpNWsFzbf4RLYaQumACuZvGGBo84dJ3eBLDCsWQaw84R4eNFyR43iCxMT6E6dpYkz3qw9empdMk",
  "key28": "5LHQnxAP84N4mYQW9yhQ5w3CGx8MABCeQ7eLrqJpoC2t2PByYRrMzu11ftB2cKCT2qjcvAuryDDDbcDhzoMXCac",
  "key29": "27D9Ao3tC1w54evmbMaNqn9GddkPAFKPfF4JyprvpzdLKKYifSpB9nvBQxt5XwxZ3TVWdyTGdaH9yXcMRmS89kUb",
  "key30": "5kJ3becwWQSVJzVcR1xymwBeJo4isVHSC3YnCMZjxJanhTkM7dwwPXf2BaNnx7rDRmAjFpR4tKw69tz2bxz2Mfku",
  "key31": "3rGiTnr6j71V4cdmbGAjkDQJqcrHXgrTEy5F1NA4ryU881uReLAGpvrAzSJjCgrmzhjRdzW3aMzqScpsCuYMVcDF",
  "key32": "LuYRYjgMvHS7wGhMhLXrQk6TFbfTfTecbKx2JSqMDk6QPFtpVbgXZtbQXMHrZvFKMBTcGb6uxTzi6tHwZH2txoj",
  "key33": "3n54rmVxz9o4kedtMqzoMYPSs7dzs1xcop28xLW1afrKiWBWMU5yDnvbbnToMpWCUGq6BJdzdHVHtDBKFSeGLe45",
  "key34": "2WyYkFW34P37dUonVQAHDHUAu6fGqVjWacNK1Y1RCZu1BdTHrKD4HGsYY69cyLiDYwcS11wLk6qsSrs42WMZ2b3N",
  "key35": "3GeFkEBiyvqAarTH6azEreGodXPDAEHJ6pUj2SdXZ3B7n2LFiPFoLp6CmznMeZeSjej1SjXGKALHmE2FGpkVQkAy"
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
