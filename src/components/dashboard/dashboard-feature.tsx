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
    "2mnVqAAknZbadMQcSzF5C4iXyy44UcpCPressCR5LfbNAcpxC59rioTgJHxCmz14Fix6kAszNF5GbgT2XFE9f5ux"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27jHGuZVwy2Q15MZmCNgTHfZhv5pvvNRn4peeR9MunEJs2JrogKNYpfZ924ZdrkZZoyD67TWxZxZgDYhHzns3E9P",
  "key1": "wzmdW2NXgbdYR5g7MD21JfHbTQgivKWGpHWBGfNzU9VzpkDZeaECYg7KbokD2CGLSYcasMU1NcmsvHP7ikvfira",
  "key2": "3jnBn61r9RkK8xVD2JKcWFxXyZA5eVoy5RbKgiqpGACK6YRhivKJpiBhRfHYi9qcTJmRorQvx98bBmZqWyNjGAr",
  "key3": "24AWBnD9VCAwLau8uqeEpwCDvssgbtorFaY8Bpntgm6bNq14doLQJAZRnnxTPJ4N4ZsKgoiWSKRPMMWj884AHwKr",
  "key4": "3JmieTc7GWwVBuYw7gVLLYLb86kSC5eCeAXy66M9ph8fHv7x5q8WucNm6sjruPipjF1srgpTM2QbnzshFAonEzS",
  "key5": "L4kAoX4gTC7DPN5icPdj6x4cdAjMXZsdhUG6ew7Cr2SvSa48wzUVDXcrVFRXSwwP2io1EewTRa22yEMdRrCExcF",
  "key6": "3wW9bz24C55qGQHiUP6bwKAH4XQ78rezNAsWosRc86Y9KvmcZ9BeDRTZuKgrHQNAmtzePEgQnxgmXUzQzgizZowu",
  "key7": "3TfsAryQ9etBYvrhyr2d15UeBfQ9J2JpT3kGXq7yD1rQVuo6LFad2ytRvXf7KYmEbj7x8um8CXGMxmJtfkVL9XZ5",
  "key8": "duRPug7WSPmdx4oZCYSjFQXD4w4bHA7UHneWtD9zndSyLktP3hTH9XaUfabmQ9dNL379beRcxxCSpJSeGSVhfov",
  "key9": "3L7xjkdeGjTRJqXiZCsiCKTogaBzSj4HvC94ea4ndu1t5HfhoCwoYxDgcXbadPtiZjH6Qaz3wh99GMW8tFD7AQLu",
  "key10": "4u6714TrJC3jWTj7Ndmt3i4TteQHtYjSYgRpwyQ4EJ74MMz7i1MTszqZgHix1u8gES7Gh5NVeVLiFiT3hdAT7kCz",
  "key11": "4xCwN69j7nUX4gz21u66PVtRQL4S5mV4MxiH2u5E9G2CqEAka3oxEQoqPtcFrhTTzTpoDn4gikWYSHGJ346bK5Du",
  "key12": "4x5WHFH26yGpTrJyQZapnrYmyaW8sTSvqZMYUugQpBjyshHFmW2hqeDy8iztxTfMRCUfuEnMC9e2eDcJs91FuUkY",
  "key13": "4zqsiDxbAsjvztA57X6kznsJBN9HddH9RddpGiy8dNPeUb4kG685qWg26dFZYdjNFovBXsXDnQEwURaujErwZ42G",
  "key14": "54BYwEWJbHsajQDN1cneP7fUphrdh2gtHCWDQAwbhATNbBsp8mXQr2eg9WbApW9u4ECJQo8Us2aJ7yhbyu9afSLK",
  "key15": "4dKDVqtYsQTdn6DdcA7GsUFnA5MJ2YrqaBUkgWmA6BQBViDDp2JFNPGnaz8rbok72uPZTee92cbUsptY3HNkzsra",
  "key16": "4EQx6zUnh5VH6WcZhn8YoQhjYEN7keRdm3bQPZz4LVL1yHjr9SL4ZuDLxzS6oEE7Q1j99CK1rUpqDxE3tpFEQmJk",
  "key17": "5irVY31aKoFsmpXHUfX2JwnkzcyiH7gPdFgifBqU73znqVtaRQPYpQ6KmSPUqCUqcvdA6qRUVhne9geUVe3Dve9z",
  "key18": "58iDbH8btFEyV3yALd7ftgeisqrKgBSHiZVYU1GfPGkSYBgd3Fi2zK5MdYA7mTUxSZkGFkquqqcbwpR433kQafgW",
  "key19": "2vkWMFvQhJPEpaJURRXhk55UvQvHpsYBjGYt4TKYa36ApTrVCcvgc8NuBcXd6HhkYSKn85F4xAoQNd6WbdQr1WZg",
  "key20": "3b87eN22unMXCnM8URdLkiNfgSchEmGtQWxPvMroT3sLDcp3Je4LHbTCTDpHEMBayb7Zibj6dFvHUdbjQHNy7rxJ",
  "key21": "5pjRjtTggV6XoLoKx1hD6xwi24nf4MeAnhxoimJbFgj3wHZZ8yb4xnvWc2VkAfDhXyqdVFW5om7FrmAySuXSwcdq",
  "key22": "57ShUrbhCLYYuFWhQYSnxoMfvNzGUbGm8FYiwvDqhppBkH5xioMmzpcsyDgTysXEbqVNoneDhUQX1gaZsxUP5Ffv",
  "key23": "5M7SnzsWdvX7t16HCPvNiytzwxp218zkMBPWUHEHfxwYqxbofQLqJTePcZbaT4QRA2A9dp9iRiZDUVurCZVcw8oB",
  "key24": "4sBHX2gPpRMXnkBHPmuXgkYYUv9Bg9qMsGvsFNouR2Dgvm3hWVZpwtKb38BuqS9hp2m7FZshAwGAWZoTU3K8FB7R",
  "key25": "39J8P7m3PSLT6eqXgdopFVsiruX8vaCo9ykHXzeChjy1pmseeaXNCFCw3CTMvNfcJwr7xB13TKYiNz17hQjt1FJj",
  "key26": "2FwiSNNpcbVd7vAi3tBvDDhKVVCAcVKQqYZZcEuswex9P8n7imwk1vQy9FyYnXFYW3B6BsCVjRFvsagM6nB8VcFw",
  "key27": "2y49TJe9qrD2UAbKWbJhvKFxUdrYheTXZEVNmmnavKxvpwUcVmtLop2BT5NZ5yBnV5RdqDe3Pq6eU873sMBp2VA2",
  "key28": "5c3ho4LfHcP2mMWd4mnV6Ge7p2SzngPDm58TtRKpcTeLeHhCAGUuZ3oqHqrJfW4V4KPxtNegMvwiyrmWrgnz5fV9",
  "key29": "3VhiTq6DTueVtudK1b9taGXA9EFiW3S7QG3w4CoTv2oJve7pmuHWRLC5fDNFZ8mYxiqVEpinpE2rQL4eer8V7GLK",
  "key30": "QhmMtho58FTVAeyA5xTnfqNnepE9yLcXf9vzDetdaURdEuUs8MrDUiEpKvHP5No1PUKqcyfpadrH4iVjszMjsUv",
  "key31": "63Rt5NjG7y9Twz1qLH4CHUWSf9QUwo32r8nm2rHyXquCL5WhiGtQhmFixtM2xB1wT8yrr8soprzXjVWL5zSeSrP1",
  "key32": "4mvjxbkQgnM6onwaJaP1X5p41TDnNFgABAqk7ct1gzFypmSNnxgLoe2FLxnmU2nmFrqt4DMw6iPa996JMBAx21uW",
  "key33": "3JjGvxt7JhTULJ1F12DaFEpHxQ8yZyHGsFgywVBUnfapK8jDBLvgk24BkmASK9q3ngz3HCVURgBKBF1qvBoEL6Uq",
  "key34": "3dgY6sPxm7uFfDopzXVWkiKKuGhzoN5zkCh8mRkTzKokDnUc9Mu5nGS5DNR91zdyoWyGEukZ9BVoVWW6a1hZQBp7",
  "key35": "3tMjtZGn4Y6qGusYENCrpTZ97m4ea47Hj7dEjVXNgeTSWLshepX5rbgingsRYBit4NWaWVaSCsCdnfxFWSwR8t3r",
  "key36": "3UJCnnWQxGAzQV6QDAQ1GV3KRu21at9uuaG7vRgjh6jeXGrvuXPhFfAyZqnvp3dLZoaXvVB6TiXG5vC1gkbuYjB9",
  "key37": "2JD6Dm1foSgV4EhB7RmoBoDxdxYyAcxZg6ZVZYQyAEBowdiwJ2c1CYWdL2bLj3oKZDZGEc9G212Db2fLEEGaN5jj",
  "key38": "2DgKvqGfVvMCHiRmKJRQW5GbeEUpvarTdVjsuqzUFc3Km7EAvcPD8FCt29ajti1WhHybDRNkiJ324y982KZjPAWw",
  "key39": "5ooa1vaCUcHWCSoGZgG6QyYrXFoidhvuEaUm2XWp1GqrS1f3tGmf8xTRSkQcANRvBBDco75QQPzkihe5ntGNgCLd",
  "key40": "3aYiiTB1prsmrzpB7zuJfF7hTJ7YPQyFPPk2b1PHXmpEvSiUCWFyUEhk6CSMt9tmLsd3MLTQLR72RSnpdbnXpzA1",
  "key41": "QmLLmUqnswH6rQC21f7oZ3eT8SjYMGEYRweWVe1xNYLgxn6nDPfKtqgEi46WxULrmGSVckrWagfeEPWNujLuykc",
  "key42": "5Gjmh7b2HrPHZp78YSWsGUsS2yHujmahfUhih7AEeSNq9ckyohc9zsxfZY9ZPYG4tyCh8gEXEHeyh1VPKqwxJn6P",
  "key43": "EGfK5yxtyuj5sVkpy5pfbmRCn9d63HGxmtgYmEzAoEphXuuiJgjT3XVumTePExUVh4fChwxGRCPmL3UGr9VskQ9",
  "key44": "5vv8b4btwiAxFAMeonPgCCJFHBU6mUzgLJkLDdYidiw37HPQkHhGZGMCzfHpJ2o8GGtxZdhQwNJe7dGrQdcXuXKR"
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
