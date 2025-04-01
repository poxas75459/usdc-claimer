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
    "5yt7g6PBmE6J9CWZ8xHAVyb389V7DxEdQ9t24djftFy3jNGPxQokYE2gc5P61hUGYUqUWSv7ydpBNz2SGk9eoa9f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cP3tBtoqjV8r8jvnVeYU9dS4i8R6z9KxcDHnwQQKiirL2wE4Fe6Z5ojxEXsLzko4jMrWeNeHc3UtSsxDqKwixAv",
  "key1": "5pkmGDuWxBarGvJoScDLP9yYN6jkhLJ6e9dFLLpBztcAQoUkZsAixvVaqWDRqCjbBwb67QFpdYxBNnZjCXuvvNot",
  "key2": "5cb8ry4MuaW8Zft2s1jheYDEiToENoR8vi5SowW3MMpKA1ns8Rnq9GHZgnmD6VwDMM7BSTNA9811uYFS3QQ6eR68",
  "key3": "53Gvd5Hj3LpT5UQ94K91ZchgnR3E5ADTarNEAG6t5RMHpWPSGPzRfkQ3gxAsVFNZ25D9my6RpiCBHJnRUd998Xpi",
  "key4": "3j6NjKLApWTTwDqXZtgUvZxE94qf2DfbqSMSosbddpdD3QQfch6EeNkAUoV4RB67ZiEPebgHnu3TbMcvP8oGvPv8",
  "key5": "4Kte1jXvW7wz3NoJDCGAR9m7fqwE6DHGhrdx6fpqHqdmYyjMB9CueMSsmFu5qpKY1eXfLqA5cqaMzEnRxmJUdijE",
  "key6": "5RWBz8iSu9xMvqM7jEGGJRaG4dy94iRrTRZn4mpJMuxSXx2Tzs1LmmEcFthoYhFdroTt9us5g8iZt99m2MYgAg5R",
  "key7": "2SXJarPz3aMJ79KsYpaeUD8VyywqBgzNuPma49BEaJdDf3PFMqihgaSw9KLAS54jXz3yfzbyspKvpHJ6gf7NUh1G",
  "key8": "43FK4J1SWQmgRCgkMUCs9eQoruG4E8WBPoM7dFvwRjKbckGr9STqAm3mKUN9NMjNGyiqHhKoaNTiAkQKkxGapZYs",
  "key9": "5eEF6cAkz3PQewuMY3SuVKZ9W5VY6gpCJNPTuGajWk5Mh4cM9csA1tMD1kLecwiNTzogwB8yEyxq61TjktH4uxQq",
  "key10": "ft9LykD4fSdkQJBCnunzRctNZygnrcz5R2gN4QRoyg6kks2b5F82UiShVenMRU1tyXFEo2XFRAMsRAoKMwPszLT",
  "key11": "3KaFMCfCCDmfGxd4makkcDVwjbP1RqfNQcaG4u8f8LFCWCfVTHUpuaRrBDCdjoZ5RoKD59uLdRZwHj7Z2Zho1UAQ",
  "key12": "5NEzp4H7YQ2b5XSoJbLBGEMTtVjVQX62zYsMxN67vNM4iiTRbTfqfZw2fob5uAx8jowmj3DNARGm54Co7wJxjWWi",
  "key13": "5H8zxybJbMEEc7H3gSvEF2b6oWB35krq8gb4avu1mW8z8mAPWUEtGrG4ozgKmuQVdJgstTAC4V5p1USWTCMjQ2Kt",
  "key14": "39GNV4n7kyCDFPEATA7PJtK6Zpva5T83Ew5Da6y4yEiKYv91HzbCBjN5P3QdcWLtuKsckeko8usA8aDubVeRyaU9",
  "key15": "bTzaVa8esZ1h2hxzsLvkhKq1HfLoACFkpHoXcg5etm1HCUWcwFTXcQnGuuxrGrJ62KwZUBWsM2ZcQW5JYZ9da5Q",
  "key16": "47PF9iAbTayBHU1g4bfCGUQX9xK5ZUon4u7xqbMDVbD42yGAw76h2zpxhgRbxVJKXUHmxT6DVKa2hdRi2GvCmGeL",
  "key17": "dnrqiRK5L3f53gQSM5eawv6DCafU4pH5hUcfqHDeRoLinfZLFxzytTDs1vGRfVEKpVntd7tBzkcaFXM3UTwp7TB",
  "key18": "62D2PmrLE1Ygt8DiKQBxK9jBE1iGKDs9Q8CskzXESzBHFhdKYyU3Qj773wLArWvVGhkVBhXexcrwrmdu4ThspgEm",
  "key19": "WttwfLCvFLGfefm6gxeuxnYd2d9Guwjs1bjB8uKoseTnBMzsvmUfcY1cwrRYBwWhiKJpEb6TM5WCe1wTPuD6eBf",
  "key20": "4uDDnSE7rCifFwa7dwG6RUzZhfxm3pcuZGzorQHTEdrbfive1g7HjCFHR7zGPS3iR1du9C2NQsQ73uuaSEe9HtQs",
  "key21": "3RbHaychZoTFw6mBwzgFKY5PDAPjzCekT33M9P4j13S6kPkoENr41qbE4YFFMP9bJtPaTSkY7YpNM2uvprUwxBGi",
  "key22": "38NUiWxR3zjCRf3DkXkGbLJAZsiQafTHbRWAo8vZZQqhx7qe6LsoMJTqiRRZY7GpLL43N6eGBNq35BvJctAVs3eo",
  "key23": "msinMN5ud6cYryfZt4cgWb6BwG9RGBgtpVcwweoe8MUkUMtLLBqDwvcnXM67UDrc3a5UKrsXF58RVtZ5Gr2ECmY",
  "key24": "RKRG6prr9568pU6P9wnog2YApQetucFCN4VJzwsZP3QjGM9ZZSLJWBkKzAwC3vCqs6UCToPU33yBa8WVPnxdLiy",
  "key25": "4HAaUh2prgUdF3p7Kh8WhhA72MEXEMrkd3E2hdVYYR9kbCvJHzo2vXcVd1tB9Jpa7NgbL3MJ5gR3s9pHGgabcFxF",
  "key26": "4wD8PRvgkhFi864438JuUaK8f8h8RQb84HzYyyvjW5YchUziKLj4koPhhh8wY7fPbs2GTUiYD7a2412AA1nUqpAV",
  "key27": "5SgF97sgkGBd5kFd8TwP9uqmtqa5K6JMFCAPNCXQF4G6C2mo7GdwSkMnVXujS4ZM2CKytCe7Xj9RXbTCpTRfcBbJ",
  "key28": "rPRNEr4M6LNxnBqD4GNwvfrCWdnpPcANU4NjKwoZBNL44J2zhK4ZKUwKgATDkuAt9auaPvxhMLV4fT3TzrFGCdB",
  "key29": "2GwGpKj9tRcSzmH3JH4nrWRTpp8NvZJa7sZ2KhWFsgfgzjfwPQEAeVHbnBBJgSoVenLCTbCZFT4KhvxkE1mdDdSk",
  "key30": "4asAykTnkkzcRjnmt69fT4y2R5nzZZ45HXZoee9gEXfkxSQ2XgYokNVZF9Gs4HAvAqqQo22yThSokJGPfp9trgS8",
  "key31": "4JatHMJMp7dDhufkkLD3noWSY7zL6YeQiK3VmWWCVujGxvzPnnTEBd7tiBbEGka98iDgmYLbcx2yuaWBhFwfLPA6",
  "key32": "3M1Rv2sQ1U2FZkfYp59fVJ6NCMe7pezRqEJftT7zgxSBF6JHZwmMKgFJYC3a9BRo2D5Dg4UV47nAXs7jiUCuadw2"
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
