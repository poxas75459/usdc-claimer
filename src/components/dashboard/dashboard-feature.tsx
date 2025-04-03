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
    "4RiDkZ8f7KLC3VvYfJQrUTWEAwfQefNfU94QKFmdDsGLrnpmA2YPr7fkHTVsUNAoLSfNWnUYKrkm6YbJKJxvDvA8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fK91Di2AWP6xTo9PhNCNGk3NvfoZYFBrQhpQxUe4aAb3hbygVmRAkLGFmPwYG2FJwQm8rX3coH9uQHHoQ23unWe",
  "key1": "41jWwwbF85qjcasHPi69B9pAEUKALPi6r2MNVKgHeCcDiuNMNeaKQNB7JWnEny3tLKCenxkH3iu5W1Qt5rSDHVph",
  "key2": "2GHSbvCt84z5VukNpN9ck3dhDbPTLvWawNu5tmYUaSJFCQf5xjLgYNcQwu2N6Ts7LAfGcXwsnK33wNprrKdNLfBg",
  "key3": "5snyujA45rm8EZ96QBPiGxwGGnvP2YUDBXGYfDDBeCuEBMrNJAsPBmzeStE5T9KHTSVGWWDrj8RMV1FASKD2FPxi",
  "key4": "4cXrnCmhhzkbdinXrAmLFecsv7aBnd93baTq3ZQWaS9LS9FmHAHekjnEoBmByTtiJMZJ7XzsJBQ2QKd6759VZ3n2",
  "key5": "3fKuBDBEpKe3Un7NA4vxusN8bhrMj1Re4BUvNMk2v68TbXJwanLvUrZAVpNce8Uc8Fh8poa2FSnswf8M5pspr2e7",
  "key6": "4GngRRkk2t5BHPkXbUpQEJArjGqDoSCmrcN94Z3CahPAyFwo9rZW7C3rK8AiPBaEFWijBbnaNKPbNoughYVVgWYF",
  "key7": "4wzTCRJdnc2vsX7MtVKdssPvBFvMhev2YZZ9D5yfdLop4cggwFXpgCDPejUfqENfXDV3BVQXLP3pX55hC4jThNh1",
  "key8": "4Wx8c17skYCarETxd7tcD7Xi7cgZ2iMHDpa8qmR6oDVV3NZJ9nDhWf9TrHwXykhxGgudhQTjUGq6iu1EdqHJWpXA",
  "key9": "3xHJen36M4MEpD1uQU7sfwF8xUH9GGcPzeduyGL2i5VXGXtmQvojnfPNZuSFaMcGuq1HMXvDe7C7yvG4r6NTgCu",
  "key10": "3vW9rCpQRay5kk2gNbcW3Yxauf2jbvEiMYR8gEmGthWgt1SCnNCajCjTQDdNWMati7gpwu49TrJxZBYGrw7qZDbg",
  "key11": "5YE7QM4HJtFn6RmrpudVwn8dDASgnFSUgGqDHk8tj2tmUjBwtXJgjgzixak1L29guGP3Gxp5esAKYifF382Gd1cc",
  "key12": "4ghyVMvsmvYiw9i2fVdCo1TeyKVXsk7fa1RcYpuqFCVoxgXLQV4SypUqrLSUQJYyqdyiJkFyqni3vmV6wwKCJbJW",
  "key13": "38PH4Jb2xVfxUGxH3S8Fz8p4Rv7AQXo7cox9VqBQ3A9MW7kTj1nnkhffLHaGPwfqimkoJ529QVJuLizFhofDyM4z",
  "key14": "5PXwnhWd5aXwrAw7biSEFdWaNq9Mfh5M3qm2ay9qVEpHaWATeEstqT1X925dpvzKsZ6prjyALMhq1AEZmkpgUE4Y",
  "key15": "7AYzR3VFiqy6AZGQ9a5mMsD9deGLDoovPn8SoAvwEQSPwomXxJuifwYMLJrrhUHnWMw5k9HwodRp5cadv3iDcEU",
  "key16": "2wG8QYegdf9maLxkKpeLuLcVVZQiSfV4bd6CpBKCPP9uc68Xhzz3RSzdPQSXkbvL8qUsS6voNDZzUZGGj3dRTChD",
  "key17": "4GCiB66ktxbzLuwbebPT4ByvGtsDLby5USiKhknWH6boALaaDKgEKMQMwX83q3N7Uqsy3otE2sJ5K7G677A42b8P",
  "key18": "2EmeLsKCYuwGi5tdXtxdMyPgV5LW31SfE31gvmmrtQ7B5MNVob2xreHsFS8HpEbGVA1owyPhyYu29BjPBFmuBpCB",
  "key19": "374qAUGwD7kJ1bJCeLfSdrFAJHRsktNoRcXXgrspG4mYEymTv93BGZGdhTYQ4KUDrW7acaNrWWBn4mKQUgmrh5io",
  "key20": "4qVZUf3VxLddtrrmgzD2upxCvrt7DNkRWGbpK3ZEpLJpCNrsMzs4HQyPVAhw2h1BMzXjDc8NK2aS6S6U3GtAApsy",
  "key21": "355mc3C6ZE9BPEHeyLUbVZf5oEeuQUwUvFFDZ2smAAiDWm1q7HsgCY626TU77TzZv1ibo5JGJCZpGD7uxX6KvS7A",
  "key22": "5eaZU9m7rntipVHWbordrGodr3S4tUuF1hMcY9vxSat8EHeWNYhDeUeG5RMeEojg9Rke1GGHEdj3R1NGnPQ7Phbj",
  "key23": "3Rocu1yBccLaEhmHKfwhoxvZbozxNvRf1oCRQkca5ZYSFDeqKpdWTUhcWRE5ayFDsBbVTFsaMVH7tLa7tZaEETgL",
  "key24": "3bBeoGPHUf3hP9A6KAWEKn4ZsK8QvYEbJuXZ4xAVZqEgpRnyAH2fgvtddbbJQc5pSf5rCiVUnyqPerwASYyCRBYr",
  "key25": "4fzfDZqkJQWoMPKAEour4ySBPbJ5aN7qEUSAQ1UVoUK4Wfx8zYUffWhqLzGymriHpEwdym6NdwwKFyrfnzW2Z6Eb",
  "key26": "CRS8gWfWeM2skAuTB8dZECKcv4qWqfkwiTF18ZM5tGNc1kbRq7uWU91neE5w5rV9qtAKHpxsqZg7Adr33F3E8NM",
  "key27": "juGR5ioDSKk3KG8XGcBNhC8Z8HrLtVcwSDfJ1VWNvYVc2NYKuKEJEkZmqwjMk3LYVFoKgkUTqNQf3dEAPKCXCKA",
  "key28": "2G8j9YRcVwVfkcAyLaXE5yLFtxiAG2vnqjGMdzdQL36jByQ2uLkeFYi7KjeZucWdx1XQDj3FdMEfVXGywjLxGdwv",
  "key29": "V9Le7UNoAKePAwp1NwCSeh73VVjc3tSmtSZi7cUaGaXcR6EdRn18UraXafeS9LYkGscqGtVfQULT9rgok47jkRm",
  "key30": "R4PcsqnBn8rMWyW9427p5fuyeH5te9TLuH6on6AXbHVN3fUqdm19hxe1TvpuiP8gVNw2hy37pArmmRnYCF6CxEs",
  "key31": "43grYeUUezvjhsZXegJ6c3e9UjdcS1mwjB37Jy288ZAt8NbuCM7Rc4qNqfwDGX3yKNci5QAStsYTu1nFtpffxeg4",
  "key32": "1eMDUJ8db5rqGd86BPscYNh7shuW2dCBrA52itDpLj7LbRDQd64cjTPWVB9J7ZC5bzdRLNTS2tFtt1KUP1uZ5tK",
  "key33": "4pHvkmMRhetmUnqDiAi6VXYV2AEgtfwGYaHro8x1AMstfJrmrJCiGWixgbZiWMeaW98774rnAS2ZUTaW5D11PGT7",
  "key34": "4g4pmoE3ajaAJJzd441NWCE8rcKyFbSBeQramYpzrFqDS6oyEbHx3EgFa13pcqj9pq2ZUirLCTcbR28XbXnshNeA",
  "key35": "4qVWjjpZ2WUX2iY3muQ4H2NcakF7MjxuSjYddfHYDuyRjbLQNK5NnqpDX2s1rp9ZX3oL6Zgqq8jYMMBGhYRfynZ4",
  "key36": "44WmzzuUNEnxDZihd8s2pb8ACH7hWd7kKG3XXkjt9zDUmoabvEem8rvJs7Tcpgijkq7qsHXtemV6QTvRtH6Uq5iX",
  "key37": "2ebqyhCDP69q4LrbzzDDyrUjoAcE3JfMXfXVYkKe8jpsC3PBx9A5fLbxt6RGfBc2zW1FFDmzx3UWn9oHHKVig7V8",
  "key38": "Le2MQQtwQ8y4GnZNLnBZquW1v5D7MSBQLYAYeMqDx9qASpgjEyBS3QCrrYtPcuHQnpjgHarBZPb797z49VKdpjg",
  "key39": "2ZSqrhaNj1Chz3jVU522itfj1SRYhRFjgA7Fk8cxVb3UVMXMJNS9XYVFTrFpTi3ATymgVffHNFE76Jd9AgQuPGUw",
  "key40": "5EWFtTrwBdACpf4anJHm728mwG7sQDsinWNrp7zRoWYQCBu8TUM3bWrrP2oScfTdDYxbYLQeJ23Fh1yhESpniaUp",
  "key41": "4WMq2P6Tect1NuV7PhZ77Zk5gECDGiB64s8uxPPg8RN8E4KJNjCkLJK954wS9ALZMDixsepSC6km5JFv9M9KYuCF"
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
