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
    "yznzFnGc6kGc948szCL9mVHXsW3fm642g8vES4axR9pakSCp7WJYZ5DHEuKXy5C9uhB2KRrYJw5sTtxQMTbgar4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EW9HDd7RYqEEHbUcFyg3kqMTXFZN3HcQ3QfFfAB8T1zYpcnt538EoYhKXMRcZd2EcWZHJPCU5d4QHi7QgSiDaea",
  "key1": "2nHGUbBLP22GcoHzXyUDu7evn8TAw26PNMoA69MeZbyzcaUxo4S3wb2S38WUFMKXJzBN2pA4Ac5yepbhqJAAM7xR",
  "key2": "4ZzH8RoVjGeP2av9D8ktU6JNZejAFxwdW2nwPck1ChHcGLNh7UMWPLZoDXx9vM9d7U5RvKqTFV5iUxUGMSrsyAvr",
  "key3": "Ps4hoCNm91ZVsyEWBYktV92j5T8qZCnv1oPMM4fYYujqQi37NFLBW733cLvS3MGHVeZBeWGh5nV6qskSKfcrzz7",
  "key4": "3AvX1V3nnQWhM3E9uBseB9KJnWodg3GY6aVE5g8SADtLKrGeaX6AJZMZqg65s4GTdZYPp39Yv2vfBKzvB2Dcd1f4",
  "key5": "2Q7o2ajZcekgLS2hzLrb8GcmLTEeqQJDcYpX1qKpDAJ6wesKeLXySSxHkg9p8hXfwt3HUYMqGBA1FcXm7izyuEhy",
  "key6": "2EunAiQaCVHC8RHoznakc1cy67siqK8Gpvb4eGfQWxt5dasBg7Fc1cJ22drGQHrFq1PdH2p6mUqAjjDXtdo5cgYM",
  "key7": "STGz2atZQxK4n7NqFHoB76apdqMH4ve2egZuWoW6Xk1vLxDuwb2dhN4mMP2URJQhjgA7RCH38dMo4BSwVV6USJM",
  "key8": "9ghZguNpEx3rioysHRuWVYzZ2XrWiTsZhioBo96Kro5AnYxmXcxsiuZ4sH1NXB2VLk42UZAseVUzXJgDuyNM1DX",
  "key9": "3viSqMgwznirVGtTp6t3x9BRiqRSGPJevdYy84eAQ6vgvi3RTJ67oQc6ubA7Ck32Be8o9oJTNfHkKGUN8qRnV3i9",
  "key10": "omiNfA8GiGhd5sdGpeqDVeQHnQjeCT7tCHeYTnPgZfN8J22YGhsz4FN3rsNTuckiXpGJAsutya6jsaEFUU7XZiU",
  "key11": "4pVbkoELn3iM3hBgmUuA2uBQ2jYS7PXJxHQ1f8gBKLdHLqFSY3mxbJKbZd5uy9cXpeEFN2yBTFMaTTZqas8xpk7w",
  "key12": "4FZtHSfYRDkADurnGiuFNgW6PrsTrZLjFGkRd8TDu8JQEa4a1Zt3RVLZdpygmJUN3XvFyfbm9Q3eBDhLm4hYfRL6",
  "key13": "51wSFRdURquLJqRAcTkkEuj8U7JgEc416Ehuziwo87BQZTYER2ZdpjZUEdXihoSwmb9C2Kq3qsbCWaxKbSRuZ4W6",
  "key14": "4mBVoe7sLryBQPYuNsHvLxezt4JTg1VvYF6U2QPT57CX2rPKrP3a3TmyiekTSRgN5DrzXoiBRTrs4v74KDDdwuUx",
  "key15": "3EoHj7afwK68D5ZREGbkmSJGLhmD1KVj5LnoyC2X8eQ482UDdso3L37W2whkW4CinCc8TNDeufanUBgFokiRWkAr",
  "key16": "4GZ2UoiVo1UVijJhD2WdFzufZbjwwQoc7KUr867v58YjJuGMo36TeizF9KrJa6qvPsPFE3Kx9QJViv9U4wKo6CN7",
  "key17": "2JTabDvwcPRn8StQKKg6wa4zv8vdqfJ4UMdDUGXhTyfuwyTrGArsXd27ijmsj4zDSWrBdasZsR6gwdqCYfv8zwhf",
  "key18": "3ruYCFhQidWyk2XXKnrMFfqSm4PhjvnfkybvABVujZRCbttapxXATtPrimC5i8r4vN9wSVdraqNTq1v6zr6pBnp7",
  "key19": "ysRyy8j8uNV8qqM8Z4pTA3MYBFS1EZ5XbqVTTqsehV3KwxZ3jpUucFEXEmXUmcUCh99WzAh3v8dzpfjHWd2hHtu",
  "key20": "4M8aqPGchZuMBrKe3ENh52LMkTdUDHAn5azwaJWFfz7Mr8Pmm8E6vk1suUSPchFK8JUUz1KaZask3WPJnZLKB5XE",
  "key21": "REsqaLU3dvcXTWjEXMyrNLPU8Ngf93hKP8Xm92puLLAuPGxaBuxLXfUs5Y887mE6yQvVWiFFi8SVzmixPEKqWEQ",
  "key22": "5edYD2kd9mk8mQjZEs4ktkG3F4ysdFiLkk5DehG4eUGZbURHS93RMwvaHwDa9Hf964novTnEPj3wUqbzfJMeLRan",
  "key23": "4z7DTNXe4LZpGMArLsuCUiFwcPwdqMEz8UXttrZEx1bnfQMtBUvcfvVppgWikShrbEREAB267VdjPW45Zt6jhsYW",
  "key24": "5LL3HZbDwbNstKMMQNAnjsb5z9rSyFC2QFQdPc5wEA44LvZxnr1HfiPr2okBUsoFLjMKwznbSojGcUXELN4dPudt",
  "key25": "4aBKjjFHEVbX2Wta8iAiF1m9pHv8s2SyVS7pvMnRd5RrAZGtyGTW4bPmcHfQVMpMjoQ9nfzQNLmwr7KWvzP4BB3e",
  "key26": "3TPWqS1BLNHmDPb2JRkCafL2dhZgxBsbBVmdEzRMHTugyjgohvrVRT8hyJEEgtcyWyMrqw3Ex8VESWhvYNULB32a",
  "key27": "5btraeRZCjbD5Ugz4W8hNiWedNqE3XCwSbPko1xp3xsF5xooqt6DQhBqtwjuXNnmSSGLZs4Vpkk9vR9BuivAgkdQ",
  "key28": "4NsPh1J7qCmrbF5aBG9pA1PhsBdrcgNNiR4u5hJC8q1oQdW2CdhFMx7cVnMc3cUKmAqCfyBDbRQxjjZTkdH8BG3w",
  "key29": "3jtoU9uKgpYJcHAnK9CVyVJwHMaJ9H2bmnwMvpUf7XGdH74gMMJrQBrMzPatexxmCihPk9ykBtR8jNDijYZJrE13",
  "key30": "4sCSw3MhWbz6uXppA8edX59fDCGMoUe5gCQcomJfEXxrGhNCqMvzQ9ZnFbLjpbNnqYKytQdrdPWbq5Tb5EFa5FH2",
  "key31": "4W5bbhifg7F5H53N6W7x3fY5FoKxHKETPFLje2gtdgFL9fXzQKwdfBtHTE4heFwdZVPK7NPX2UpWUCwate5WNoZL",
  "key32": "2SbWydjf9rf31PCKyh1dtTpAJUqZ6sZ7tygGeqDuBxGpfurr6YTAjocpdn5fzjTipUtbt83M4EA4aq2rsjvZSRLd",
  "key33": "2E1XsSe6sNFBHhvJ2W2GevsSNBUtunXEJdbPGfis3ZM3w6F3n7DecaW5si8twApdgBDkBkmk7dd9Pwh7RgRemndw"
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
