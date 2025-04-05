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
    "5dX2SkRvsZKcYFPahJh2x9nUJ42rt3Fsu5JRaFT7KN1K7oodWy7pDpr7V9wU82cmXYc58siDA2d71V9b9AK2e5QD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N31MmxQyK3dCunKixva6j7KkCZ1Aa4kmHRHHCrC7oCk7rNqneFsPZznZ6kei12sXiDgZ48KZTYNDBh6WMd7bWTs",
  "key1": "2rhoBtLWdY9fas6rYbboXLctKPPSiVPezmVeofCahPUJKJysEkJWMiUykLENr2ChH4q6n4WJjrtS4EbJq7KdFpHb",
  "key2": "3vHHcBuNwT4xrwMWssT9FeTWpJ61FrqFXBU5KiW592Z9J6xrNbJn6yCo2vq7o65JYzmc82shb1FkYxsCEXrUAeSs",
  "key3": "24CjmTceLNDZMYXoojfcnKcyyToLCYHDbRKv6x9bGsMCRNquAPDi5f4QXs69rZwKFMUckyvFehxSBbiubSXqbtyM",
  "key4": "23rU71XCwgdNtBwF7318Qqze3oFaLjd9MpBKjcmxYzc2azvUUnfeQmY3MRBRP9F5z2KChiwFBmD1uKxsAJ42EoZc",
  "key5": "4cMAShGzazNSRdTCEWv88JVc5vY6TFHK9ciTmurdQLsFM6NTVqZQ2bcAGsvsnq9m5r7yA2eCaUA14n1c2AgimZKx",
  "key6": "4aLc7dTjBkKbQLpFwmjoP1qbQUouDugvdu74BQjYyWodAEHSRegvyEgw5HWXHEvSefVETknifsMXerphCzhrzPEj",
  "key7": "DTfS1jp5PMUayZzyfzRpZrCSw9zooQHhzQbdFyQfgwG1stH4pSXZofoCwxUY7LYBnumJb6WQ5dzk1ynnBPZyZ3b",
  "key8": "4FD5xhCcJAwiZf3RL6uMAWQKAkLFcPnoafc5yFWoHuWftdTU5Tthtx8yCnZ877gN3bMpDguevaZaDXCWgM9kCGtM",
  "key9": "4sZZDZfpNR61GqRoFtqvFL5qMCaXDa7y4SuwMBzg2WeTiTF5Uq17A9fWgE5KzrT7L7YSPFpmHAKmXPFvkqRoB9ji",
  "key10": "jGL24RtrVCFpyXr2s2jEhTkRooZMS6otka5zeUngzwAKCeoPM6iw7aJbowHGkLPMPmSLT8qmzou6qbWQrRHDips",
  "key11": "5wT6RCiZbxweBUh3y22nAJvYFV4Xi4ydtUnrRH8z1NkDh16cRoMg3G6xuU44DkFWwimfjDwHezkW5FraAVXmFYRp",
  "key12": "22bJALcmLjvMP2yZePFcJDHVPYVWhmXhcCijTuwDry4FRv16DDuPiSQ3v3JL1HQe6f6XXbTTRtpQQ1ZHXfxyUJce",
  "key13": "4jA6iAkXrci6qJXHUEygb9xs1Vmfi5cvBKPbQSgHksWTHb3kXjo6QjbZkzbRxiNzkdHWqFzm7nrXFeHVkibtd9pP",
  "key14": "5oufnWuy87T4wS3JWBbRtBQAusynG3VQWpreHMd7gA8hGe3EuXza5YHp2SeQ79HdLGPfHH8327ZZxtwWXUgu3Kbd",
  "key15": "5wJWGu4t47TWznDH2KzbwZiRHScbaSXcY75GdpqnLzqeEP5EBn44UFT4MTp1n7GpF241SaKyP6wVGv9vfY4ri9R5",
  "key16": "634VJGyqUt9Jgbq13aY8xQy3ZDr5GZisi1FPcxNJ2JuLJ6gu9ZsCwEJuXDEYd5cYnirsAzVnosqqawCFdFXEabff",
  "key17": "2GnLemH7tm2CMJDmhoR6TtAAtfamWiCufvqaDQeAVQA8bb9uRpDyaYxR9utyUaoerVKUnx2DR6Wdg6D5MGmwHQY5",
  "key18": "2LpB8ooQZRQrvqGwKLMdhBwh9ZEbEtFW1WtNzafFA94uZQBdicx17U1J1uvvQjfS1pJzuDS85vxZrX1hbFaFQFb5",
  "key19": "r7ZWxYnZ7DQPgG3nJttKwvWPCWD4oNmyaCpe8XGS1ww4bTTTXaDJVsRApFtLAa4jFuFzPyQsns3yRcHzomqkKvG",
  "key20": "27rGrXK59ehja5psw2ZVy2nNAtbLhwUPw1LMAVc9ZuaWdrnCXLEWQe8WajHgSWReCBJBbyhDifii2yjfpZw2NESn",
  "key21": "2iZYDyHXJn7iaEAbF1pPhMgo4j1Ap5LicxJsRZDrSncuLZbxzvcDogtj42MR6VxxrtvV97tTHo28V4Q9JzLtHsTm",
  "key22": "22p7Avjf9EpLNK18d67cuUUQAkLkUzGgxzJf4A6tvYnpWVjE2koJaHMVBJwP6KxcoMmFWNy8jbb22J7UiwfUycrZ",
  "key23": "3XoGc7BwnEsR14NXUMS6Lo7B3dwXWPpDCQU9hbvJk9QKhwyMmPyaiZumkfYy6zWDnrqFFGU2DpsLTZEJJ5dMpuZ8",
  "key24": "3wh8u8n6vJ571J74CHEzaxA43Q5Bo9CrFrsiv4E9tHLjbnDTZp8fNsrv2KvXKC7kPNu2BTDH8tsbF7zXNmQzvVYP",
  "key25": "4wedErPNAWLs6nthv9ya8dbLvCYbH2jq8GpsgNU2ZNfXAQ1qmpHhGKomLNAdsyzmpSrMUQZcarvAFRiaRRx9oJNM",
  "key26": "5En4FzrdbKgqHQc1CheeHgfFWxfgkNkY3Rv2vbiKCzmPi2Jho7WQc835xS7ZnBQ2hscgqLudf1eUrzQ6oFUxTtEc",
  "key27": "2oyWEuAaH8WdW2Dxw98b43zoyGB3NDqntK84kbQnn5LHfex2wgW8CBvf3ZVCCm3stJGy8HRpUm1gmWSJEhMSJf2z",
  "key28": "67XaeNibnw5YMhjprUmfnziwJgrbaD3sz6whgy6PZtiawj6BPtKjtsy3uVk4mHeBy6EXgC9d6CQPHAfbce3YqJBf",
  "key29": "5NpRPFUYC8JSg2ZSVpJRneKmTyqSPpDGDL8SxUdqM1HkUi7V4By22dpq8tQE2FKESiZixq3SsQhvboY5cc7Kqnbq",
  "key30": "4nAAbDRYGsorChCHND9o1Po2hgBisvV69g5Z8sQXAUCU2F7rzLQBK5nC13gDJ7nBXgtiUwvjbwgm3jKSFh4NKmw7",
  "key31": "3DVSzK6qZPrVmKcJSwghPdyC2t7m7qf9ADqX71C24iH9nAMp8zj8QxJ1zhYRj9BJVBqx8iP5xyj5Jo49GuPSVhKt",
  "key32": "2pb2sPqurRCuCLsjt4waXP9NLw1kTcGSd4969hT6S2BeHTANvw6rNtksb6ntsorbj3DKkLh3vKWbVtY55X4DS53",
  "key33": "2QUN7wufJu1TJs3owWyvy66M2kcio6dsRdkik8cMVd73yX3jC6P4QggVKriwwxWmDzwdFS2pfQGN5WYvTTtRQyYZ",
  "key34": "4yVhSZycUPZP2tSrMatFqPEY6b5KGMDj2vXbAmennHkXPDacaSxHXfhNJCW7ZUHek399rc3u1AUyB2446B58moQm",
  "key35": "zXesoRiC6c1TuLJoJU3Pf3YTovi5RzffAGSnemJz9y9Cho51zVFCYeGExaCNLNYbUjxCbriGazZw8yJ5TYKQwgR",
  "key36": "3sG4SHA3DGGbT24gbmdmdMtuuNe85JMLEx5Xz6QgQH6Dp4BRKE99ER11yjKAokcGbT4scKGxnqWU6LrZAZcdNc8L",
  "key37": "2aFYZHHzytbynN9poxQESWTuM18XoyaV7jxjyn667kSFBS8p8CSbivJvVuTHCmy1PJ1yydNb9t2i5E9ZCchTcMcy",
  "key38": "4XmbYwSnw996QTDFw8rCPYaRAVh388Ho1KjqZHsh5hnSWyGeWpFpymyJLfS9rr4fuF1R2FeEyVCexvGYYv2cbaQt",
  "key39": "58aMDbV6FF3mRPhV3HHa8NP9ptXWVNKFWF3arwpzQHF9fNxKnqMVDqGttpQoRN58dbj33kV17VnM7T9uaU7L4AoZ",
  "key40": "sA4d72cs48wmCKxt6ZpPqf5TpA6Znp5LXbYHjKJNjax5YiLejvAFjQnnwBcjTJkkyf6GTDgAcMk1hefNUsLBbez",
  "key41": "xKkNjy2oCC81qAbYLgbbkFcDd1qRqcBwpHYC6PQhBiJPdjXDpbdk6BFG54RQHRoAmS8PcJgNs1cSSoLALKXa5dx",
  "key42": "53xRr3vThNrcvNurPCgSyYE95jhZqUDt85swh8v9wUUZwx8h1uRosjoBsVMfLsWFwtqy9d29UskbhUufJdnKJqNw",
  "key43": "5peZX61VhHSsTzRkiWVmh4C1LZRz8b4RUMedqQ31KkHjkwzb7epy1L4n4Ab5NUkjMzzPzii58sLNJvfFd6tm9XLe",
  "key44": "4kPusVA8SsiP6VpjYwV7Br8GVBj1PGcJUc9HTNZ7qU2zznLfraP7bQBg4DKLfPUaUqDQFkTWP5oRtCShFad7Raai",
  "key45": "3tQ1hXPvP8TDiXE2sr1WxUv8RPeBwVQwW6DM3KqeEaABFwRjiiRJCkctiVn7J1Mx8W5LR9gg1SuxPN5mkfJ43brJ",
  "key46": "vaDF9UNKtYq5XVhCAFNpDGwN3xodfBwN6HQr6fDV6BLJaTZSNW9EvY2yQiUcnGSt3QPt1vUqhMd4gQnZqkPa2bz"
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
