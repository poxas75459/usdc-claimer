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
    "2PzQjSX4oeSd8CUg7dd7ymV6KFauq6TkPhfugmjKEPM5r4TrFyZ4H3aJJCHYMXPXyEZUNSkLctfbCVXSHdFZfJpg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QjwKWZwivSXmm3k5AhBNvrzEfMT8nimjJrrtazRAhz2qmB4XWC9TZZyNg3UuY49SL9gsUSTT3P4coF3R5eWQEkW",
  "key1": "GWFWsStGN6fPzR4DYTy4tgdrr1DrWdiPKwfYGsQvk62Pe1tu8XoJWAw36xVEr12UF6rxyqtESL3HSu2HHoKZ2rc",
  "key2": "onrg6uu6RsaLFsEMHJSpfs7NKUD1wyEkE7FkCPd1kDQRzmDa5pkXMCEqaY2rrwpXEWuv9cWsh7PwcpAjCR7smoS",
  "key3": "5jLMDnuEVKKXSWbqTTxh1PkKBgt4Nmw7kRBJKogHbnbLvgpKKcijNQE6a3mq4moGPSkXfbBJChXaNmVKn33bUmkt",
  "key4": "596t6e2QNrxmCwaprZhp6m8hYNq7twkiXvnD9BW1asXgjhBVK6JU4zrdviHhJCcBtSD3KDkTYCQejSLxZuaCRtnz",
  "key5": "5koUVPUQVogGg3g1HUU3JEa6LbsYEHCVGv3gs6S2M6d3ZHcnnyCLE1Fg65WgFrwU6NvpAFrTv2xCQUCtQ7PYC2a6",
  "key6": "5xvMyUEkHH1GzCY1WoGUcfjqpSGdTYVRGdfd88c3DbSqaHuTpLM7dy1fa7WVWUvDqPgcenueT1DEmB7ne8jPNNvw",
  "key7": "BLTZxHCorhQyRjKySMYzvT7uFYYRYt1ErdLvP1SnURt9qYVcQwXPgzLAv2aAVW3iP3Y3pTbJiAnGKatZvV7zbwx",
  "key8": "2T847qurtM2GXPjBjxoTR9r4HxkTidYbTNgacREJUpFU9ZdSs7UyqY48BVAvLFB9kmxxoDPS6ZqhmLCk6M8Hwi2h",
  "key9": "2YTPhFxsTZRcUoyH9qxzSHCsKhKFUN6gF5hYbcjrZmUWsBfB5SChPbUTYEXnAW1Q157ppQ6Czm4U9jsisenuw35i",
  "key10": "2remR7Yy1d1NLSdVRZYSNKMmpGDPXTNNy2kWjYTd5cjeq9bcCKQyecTAEQKWdqhAPsvkCF3chqJ6N5sQzr4zYWd8",
  "key11": "5gLcoWdK4K55cz1sR7dTK2gbzQKp3ZESyHESPt6cC5YqMTd1q8RQ9tBDkNKhoYwchhYmSEHcq6DSo9uSUfgJVv3h",
  "key12": "2KqhFDSHJWCHVncStZLyRCxv4mhnbP9NTsWv3Bxx53pEBBcvCeibyst9wUfHx2XhZJtNESXDguFa6TUcGmikCaLW",
  "key13": "2UWFKFrAxgxLCG3uv8AtkRMWQ5e3DvWx6NvUddXCtjCnyqYuVyjyt9Ltnyh1KWZUas5EQh9iRzsCQQBK4JVhGg9G",
  "key14": "SahpUXsAsYyvSj4wDcCTpywSyMGWuSNugFdSaxyzihK5MCSt5zgRq9aW2cSdtiDBgftfyehxECHJmGAhsrq6EFE",
  "key15": "tR11kx3bmv6Lo9zFaahtKYu3Fu5maty5RChFbSrUfuzo3gyvTbLYm6ssAJZbsFQCYDaw9d78zBq797Lh4ESrxKj",
  "key16": "4iMXmP14ao3twbxevHSvP47sPmEpCciGmwRakheWJzAvpcg39y98YEvzLRWEdZNqDZZpUVG3PHsP65CLddpUWsFA",
  "key17": "4RpgwTke7RECytC4YTf3ajQi5cYZ3ZAQe8XLTKNANpAoGv7nvEvCsGQCRATU7pR6YZq9zpapraJUPEyGxZC2FNU4",
  "key18": "PcfTRrJmKy8t2vx8SEAgjKv2hqHLGqrkYCJFBdgqBVLQ5sZS8ed9yFMbmVhCQ5EMjJsnDLVab5GLwQ1CETdRHLZ",
  "key19": "4UkGouJmQEEHqFajmwHgDjNQEb7iGe4n9pRY7b8RbeTeC7vtxBfDhgboS9G1vYGRBP5GCbBrdJ9wj4FcQPgiPQKk",
  "key20": "3B6f2cZ8i4X8n8nVp4JjbCgGTcH4ta6YsZqr8nXnf2Z7X8GXzt482mzjXEYvLoVrxP3znm7mqJXHvs2kQLY4K1Zw",
  "key21": "4oi1zbYTnx1UFwmhB5Zg3zYfTmhug2wuozjKHp6SuKHqbxyWdKhAT67FNYu1sNta3W5LCwP1YbMfob55AkxVvbzH",
  "key22": "2uATkaz1EtKgNKgk7EgoenU2k9eoviHjEVskKYR9xPk9GDtJkHHR7ZZKiUGf2hgxVm72kjUHJ8CpsPbpVeKFkZ99",
  "key23": "3z4Apc4dpTGtoNgysKfWefakB5s9fYswae5ro4TVdJesenmtiwxF1nh8kGc5nSsefVbkoKYCvX8YjkPeSAFhhqYE",
  "key24": "8Y2wRoJQCCe9AePWdbwqzUMfftr11u7HiY4qLRs6xjw2QKaCJw63A7TNX19aWgsjRtvAapsiwYJAf34yBWCrJ5t",
  "key25": "smsByPCFDtZFQmPgJVYFF6S3ZUKFU6vWeAfxM1BeUGFKP73r4x5RagUjbysm81PEtbDxmS7xcw8xvFPP2nFc4Fj",
  "key26": "58NZGoubcwrvmvDM5Vi1grJTcxie1sc9RTc2RucQU5S5N8gTtJBeXHXKTHFQkcXqP5mYBtfQ8SzEjP7KzDH6umTf",
  "key27": "2uMZg2etw5w14UjP18r8kby9sV6RqzVaforYCvhEnB4BfnMBkvKFTWn1PmntkzSjKRBXfYJaLqfDdxhihz65Pvs",
  "key28": "Bt4tzo7pRffhfwyycE2MbrXMkzQUgAgPwrN5HeWzVdM9tB3fR8DxnfK9FdEGWgoSKs7S1U2Frjg8SCxGbyTXXqw",
  "key29": "GwNihApb7FfZfVWwJqQvQbPYSXb9wcadrPvwL2USxwPxMw7rQMgkSErYoX4hiwHojaNkmavk9ZFGz7pYZZtAEnv",
  "key30": "U1jPkvY8A6YNA4qxZ6bZcztM4FJ8MzSWpNZU5kLo2Lv9vqsdExH4Ljxa8n99aq4BpyyvuRCX7BmokZVg11wV9z6",
  "key31": "4MsmmeJErJ1QPWiNGoqC8JMzHpjiJCu16oEJcjALdTe7ktche7SJMaCDVxh6n5gfXkpVcsAuaHXDvDqUFwYHTT9C",
  "key32": "5NMK75qGjbiDJTWGTWFmc3eQsbjYksEB8oqWgDeApEWo1457W9VTXNr7eLtEy2CVA69auRh756uNK6UpfxpQ34b4",
  "key33": "5yjSnQaXDp4Z7r51xR2neoJPAcyoS5ZXXzQJq1qBbCE2UpWhxhay9gpnnnft8DBfbABqV4zvC7Ap3XQEK8SKELmd",
  "key34": "5nAc9kyrM74gkdyLdq7qDZWycaT64nCVapr663f3zahMpLE3kPLXm6Py4mK1JSETHL6T2ciG98HHtV5kuGrVqw2b"
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
