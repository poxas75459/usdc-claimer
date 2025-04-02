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
    "3eqynUWHEtEYfRR6uNMmhF8MXZSDSKM7UXHsomWum2yuGEN2ubXwje6oGiytxe5nKBtByBNdguadAWNXjQPPdkhh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aQsgTDP8DskqRXFVzi4LCb3aw9nqD5qkb1ByqXqYomnejMKqW44Ha96NFgitKWu2AJpAvE54ntsAcNyKTfueBHa",
  "key1": "4LkLCFDHirwtMLcPGyEypn1iKnPcb9MxccPJrtgzJXHq3SCaKJixR2SJNn6oXCUSR155sEj1tiyNCsHaH8Krbhzv",
  "key2": "5mVhbzgvttdSoc4AmUy9655FBU5YXy2gMYvj2TmoXkxpKy1gVxyuz8WMvyvkuiDQEvPqxmUE5dANCz3K2dgEdiD9",
  "key3": "5P1WJm7hvLhbSUjL5MmBcuB5N21A1RVPCjQLa2uCgxWqoek1iJkne4xPUubWsTn6eGNtSQkjyLUagB1Ck8hsjcpr",
  "key4": "565noVtfaS3iTJYnuhxEpyCTcqhauvPKNtoLsvWvSEDpyYE6f3VGrcVSbAXXkWpDL5aFBsF3N5Z5uzA3B5mK5F3T",
  "key5": "5mgU4jJzA1d35BjAmn8SYmai6pxG7A6j3stJVfFMHMZgoLDvGouNWsCXD2YVMPXnPDJ8N9mrH7aGhWk4QYuTMTRg",
  "key6": "JSm6fNd87YQ7oV2JTYfDiVP7bzdHpMqqZBGKAM113o8K3oDc9nWtrYHpvjuJAohVJmm3kg5i4rSyMrkFqQbT7Y4",
  "key7": "QUY2SKWKrZhH2odTWFrYiJx81c6mWYhSUoqbvj6pMVWjXQkjW1xcCm5MTpRD9k4kcjGxPcz7J2FstGe2MxyLUUw",
  "key8": "61ReyeCADKqAAgR4VtqsS2fyWQX5RW3tc6r5CaVkvmW9CwBszgE8BZHjvrVcKRkVE9Jk9AhaSunkY4T8pmAWD4AU",
  "key9": "4mDfZLjt1WuPT33yeYeqc4Mwz8efGYuwD8vMncQYSTpL7JMCLkucQgx9EHMNN469xUh5ruFk4BkuyBuqaYcNjPGX",
  "key10": "38faWP8EYR6CmBMdZ2QnR98DvsZeRb2gTfZTGfTc9q6mRg3ftVSH33DgNVAjwqG8KS2G3DjohTYHYN9te5EGXjBr",
  "key11": "ekZj9vRwBrQEt8uarUrCpKXuzFyCiTD14ox3tPcKuJG6yZJnBKEom2HMt9k75QCkTscyXvxEnuJ6YDUvAyrbDY6",
  "key12": "6xjVa2awanhW7SMmWqRJTRzAcbpEPKeQsapimKBuctfoZJ4NTja9wquBG7o3NWo2dwUyeLb4JyvtngjyRMvBU5o",
  "key13": "5pfK6kAZAZueHuJeJSL5xoEH4XVuogGStBBoLKe7QHe9zBniTqUMGpAgJwUAsoXmq7MgyLPj9VvQNRz4RBK2qgip",
  "key14": "55MkKMqkmP6RK5HrTP8rqjAdM63rUXR8QZiE6YurkZ9MyTv3QadEuRm8YaEkGU8bx3ek4k6mR6FZpv4EsNJXEkFa",
  "key15": "5mA6LuCcvLxD8ncQvAVVpUNGB3cuMz3sR15sA2gUFcrGwEqynUA4cGrWCUHVSEH56oanf5eSM9Aiqd6qLE7oW98R",
  "key16": "2vxc4gnFHPQiHpQG4zXcLYjTWE3GAHEUppyG2H6J21GYJ2H3zxSe6fxDP3Wq6X3g2CQWZE6Fh6aZTNZ8LrZccQAJ",
  "key17": "4yWftWn3kwXBMQsVpEcTrKo6adJsHBbq44gmesDn1WuJt4BByURNXZpodtAhVj7Bgw8Bv5B1XshabqFxZR95Gyc9",
  "key18": "2rUztbbFiA3XxaAJEd5nxChiUwMcnUZaMd3oPwzyCPAk2B3HyTZM7q7QG8BB8A8wNkvL8NiF79vKkc9ux2wZLUeg",
  "key19": "4Xtk8DUcwUWqtttUgKo9onKD18uzeySfAvhDm9dyt1UFLVVqu7JCvRy5H4FbPFy15zeqH8uS9cFCoxgkmn291nJK",
  "key20": "1gD5jCtvBiQWMVoAqTYhi8uavrgFdzDRdnczsvkafGPZ2kMKupp8uK1ivFN8f5X8X7YUXUSt83z3yeZMX6JxDcN",
  "key21": "2KMWSeEqAd7yKjzQ5Tdk6tVCfGoTNhLCaqkRcHottJxVKYmzjqhWmAzRtWFinvpqULca29Poga6ba6fspNkPZxB2",
  "key22": "2JBfsc7ju89a53tDbBmV9r14zXCmemosLebBUjXtwn4b6f6BPS7JNs8SBscJJfZnGR9Ar9NgdnrhTsM1e71i1Qgp",
  "key23": "5JZuWWQm8dSCNzfX2DUofdUb5tcVshUoErzuidmQpT9whk5gAm54w25TcYth68rHY3Dkub9vmRX8DHpxd2FrKahH",
  "key24": "3czw1np8GW96nGwwERrrWDNr8mnoN6DvmuTpf5JYTkMvyTKbZAhixEQdjnkDUUExk228SfTvCYxfsYQhEPhrvxvb",
  "key25": "d8FBSbEMMcxmmGR7eitWCTaECjTANc3LB7opjoGwsY3DT7MiZcvPDj2shq4RCu6E3wbXBX5Cfb6DtrgRaaKmhPL",
  "key26": "6vTYuy4sUfdycqCBQjHeqMmykThYcyqvYcNcGSsMR3q1vjbwDciEJnEk2ajNtmpXfQYVq4Hg6br4k6BCFx4wXCw",
  "key27": "2KvqgV8X1AoiiGsVR1e8ZUSscsQ7svkpqsg8xHjsNBBGcfeywaE4QKX8WuDUXbsbWjwLyZrexNfea35uiNzFgxbg",
  "key28": "4TodJ1rHFmtdpVZw5YMLrJa6tVidLTv3H6qyf3f5QmJg6x4KJJb7E5cg58RJZQF2HZBZCq5jaNtxRbs1TJVsdEuL",
  "key29": "2zbCFH8xicDPNuyCmzuGVT9yktuPUgsynjsp6Y861Rx1n22gQGabmLTfEfidgRatYWi2C8t689dBqs6p8Ca2YVQF",
  "key30": "2zLAkx1SQ5Zvvs2EAwuQ9mRAWqvcUAuapPfW6tR6Zh64HrMKP7q7pgi8PMtuPS9qjzXUDUiiBxBeY5uyPeU3ZtF",
  "key31": "35DFbvQ2pCYtzM5hZDj8a8CpNjhJyX2ZJXGS5ewNqZLqky33mJSpqdZfiAkwj7jfL4a7cpzgAo1dCfYcUNpmmA55",
  "key32": "3ZcCDHiBWApwqzJVaW6eFXC5FTprWiVeAm9BySgmPV8W9e7odprHeZEYwSC6oQMKFo3x61nJcUx9qbbAGXXN4NTy",
  "key33": "XzQbNJ5aGobf36UssmT2SLhfYMhX5EpfSd1AcWfU33i5VeJPDNhEGMTzaveQw2uKniMLUKsAyum8Y1ntpFRW7ba"
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
