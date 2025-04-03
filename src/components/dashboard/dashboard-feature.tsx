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
    "4o73yBqpZiLXrLHiaDYcTSgpbQtiVphb7NWNEdfZFmJbDuyozqT7VwvDzwqBdqWiJ1d4heo8QRn8VE1HrPahVJkM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2enPGG2ctytqM1vgPPfin3DKkDnHyHNR449hbFcvHJDGTqheqt5261ccaZhEpkdF97Q7jgYyGYn4rLaKk4eKPcGt",
  "key1": "2WwRG5SHYjHgPothKKpfyidn11jVQ7iQtviia7KeFkiDpjjS4TS2RmgxdE9ubdqmRFM77AYj9TwiQPj7knms5jPo",
  "key2": "5pfjdbLhXEPxWyBVKCzuUo6CpF28nDYgb78B3CA8HzDynxm3dHTDn4RvyC5PAA6Jfe2nvLtW1bJG84qGMnFeHheM",
  "key3": "4QLeRyQT3xxNBgNHdLq5z8TTHDm39fPkfJHfvcGuagiqmjzhsrt4dVRjQzkueU9hrftK9RgDo3vSz3UwWMeenUvX",
  "key4": "5XoUYSQCc6psnPS2Dv54VmZUdmT2QA9T4cGFVpcqcLdShsd3k3RZXSELy95ubrACjxQN8aY5VNgshgunJop6mcrX",
  "key5": "2JHJQKxrGwwVcyVba2dBA9yiqRDbNzb58qyjrvBtk2eGmpPLvPqZtCZaQuEwSPTTxvuCWfNUin5KyDJufgk6jy1W",
  "key6": "3Rz4vjTsuijdsHtEZCH6mXyKPamUYvxMYYgsJHjU3MNx9S8kXJWdPZRBbkPC7YXunW7ku5yjodeEFodwMKzpzTrV",
  "key7": "ev8iR3WhXuKwYXNf2WJGDzDwBpRqJpLn8M1s2BCDAJKFunW4tGHSjtzjvtU34YvFGkqFogLgNDuwuujE59keWys",
  "key8": "ogRKMgtuagUtp8c8j6XxKu1Yboq8RTJqXnJgLhiXix8q49GEuuzmK9R2xJVcYv2iiswxFxK5rqoXLLn9UgAgHco",
  "key9": "5Z89m6JZ8aCGztswZVFPqsBHCRWtZE5NcV8qkW4xy6QCEH8VWNnR9LX6iVxBHXkQhStbA1EddrXNaxWuNpQbpwMC",
  "key10": "276M2uGYUv5QNNcvFTKxk5vj3imPrkhfXCiAGmiYjBiiuXCizFAra8DgRkcHRQTMAAiXS6QiUY1fm9nryMCfKDd4",
  "key11": "3wuGitQTTTdj5DusKNR7ZWZwACVi39cXEnYZzqVu7YjxqPMSmZ3km6iFy2jLBaa3bjcphBivuRFVzf6RYzTAWJa6",
  "key12": "2PxkxKuEF9PRQGvSXwPgwwYAboakmzCiYuiVqAxyJQvC6jGpStmmuTRWoicwi9ZhT6mZKctC7BuMbtaSPesSXteM",
  "key13": "33hbRTw6c247fdczrNZDcpmyA3sAHPmKmQkady4TagkNapzrC4V3LjPArwB45qmcnQbanuyu866JJvxugSR3DDB8",
  "key14": "SouNMPimFpiCeAwiHuF43cyUWQSmS5GFRR2JqoCp7T6QQhQbbEDbrvVyTvPaY4Hi2tQM1qvvVSb1ErSiVqbK1wy",
  "key15": "3fKYfRDqRWUjiwsKXtMSCsvBckh63ksEX6bPvxCnkApwzNRT1T5NeRWCNjELPexehSoJuutgKzxzArx4sEiSCtNH",
  "key16": "5fWhJUPtpqu1nF5fULurbuav3hi9eJF2zGHCpnqDDNJPsR31Wfbzxo1JL4ionDgwe2m4PEJVo76wEwe2Foidm6jt",
  "key17": "UGSUg2SJDRSyQfCDZ889GFnPwM4Mu2p8SDJJFQ9BSQMSeKavDv9LMHGAAVLT8ymqS4PkmAMDCibNozY56AK8z5J",
  "key18": "3kwtdBaQwhFTAqgoZM7L9Rbjrkip8LuzmaZevB17kFtewo6qkz7VXzeqXbcFRiMdSxDHNMBk328Yu6z1fh5dgWix",
  "key19": "33ttjAiFGZiJMKhmA18Dq7WMUdj2925AbJ2K8QSCr4LcYj9k3mBUB6ByUHY7KvF3tzjp8YvDTqq8uXKQbadjxMcY",
  "key20": "4HEgczk66aaveyoPqPikYSet7VrmatXtwuAN1tRsAb95EJVM9Aru9G9VZyG6YgFcEP5G7eCsM8Fd4aqenkdhhdFA",
  "key21": "CrKbnEv87YxiBRWk4WpMcpeegiGwuLPC6XHrjah4CtkHV5sH6nPWpKP2axrwnUSWWH5HaBBKpiPoLdzUu5S6Vjx",
  "key22": "fvC1wHfDnJho12nfV3swUHVYdXXiJ88sBoZ2hWnURT7CuFPBckqUEMXfrVJvC1RrAQhvkvV7gV4iU7Hca2hHDwj",
  "key23": "3JQJJntjADPVzXgj5swBvmKNXPBaAVDpfqh54oexAjAfYSjxEmik6RYbThbArB6peed5PrUEQjezZSkNbPVtPQnr",
  "key24": "5s31BSLhH78mkD8J76Xedh3jcgs7iCJT8db9AZjGzqybDFQp4GH6dGMFDq2BRTyzMJHVVQcp19B5yKJqgFsmvbBZ",
  "key25": "YQBBJmdD96mivuAeVRFKAx6LzMhZmvYeeZE79PvBYPxigK8snKYNagzrkoG7NTFf9h62RaHmMM4yRNfGAirtvp6",
  "key26": "udYhskzqAZsUzvX17QSyv3jwq33VKL2y7s7rzAcPjmMFSkvH1tPFvEFJjXGYSRLoaxXF4SaRAXGCAV46pt2Hd8t",
  "key27": "477HCQS1CaHE8nYaXxXbpNmuK8UTEeuMDR5TZRQEVCj184VafrnowTivUBqJTshhRwzfC3sTSNC4RjTuypVxeBwk",
  "key28": "36eHhEvxb6A3UiW6xoZZQJHimjWxJFnoKX38VXTrukFzrek9WhFhASxzWKTLfzkrAPVhkyU8jSmefQpyHgWqmb9K",
  "key29": "5WhwYTBBEZwPN4LLaRB6XFyraP8PKCda2xikbLDvGkT23vAoJPWX61hrBb3ReawzuVCxm9MNfhpRUVGDjiDBbNVg",
  "key30": "5N1EbHshSx9M3NZkQRjnhkcUFEYJG6jXzsjwHM39nopkJNbQ1dGXCJrK5LMzb7c9AqrycAW3Xuxh851RxyFfdnUR"
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
