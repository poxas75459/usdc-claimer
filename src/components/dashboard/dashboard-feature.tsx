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
    "472KRj5B19NYCxeK5BCzzHCLi3RjdxLEssT5UMB5YXGZ5wtbadE541bPHuoPJ4Ton6rgfebPfC8x4joVWJ16VbLm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZyDm1zDkMmpCu3QNRNompaVaod3gWofYuTzzLtxRCVFvHm8c4LFUVWy8uUo2utWPX3Uvitc9qGLKngZW5SBjUuQ",
  "key1": "3kSjJxTfaKfmddLreY8SvLvHxF1wZaEdHNY3gBKvHxNqRECNDtZYv3K9WgbBHvGh3tH2LXhWFiomYKs3YwnCwckB",
  "key2": "TXBfwkB3vpcfhdfnucT8qkzJ64jpxLYXdmrjPaQugpXXTVV747hwRcPojLoZaWURtcwvNX9U92ZVJrfRuvk1kZM",
  "key3": "PRBXFSGEYFWMuufWjeH29uTm9enCchLsBeFjS3EWzJa8hTa6SifPLEJebAiBCrrZHxpWve4hP8SyzXmeht6hhqT",
  "key4": "24Ls4kCZj2aKQqy9j4RfFQ1JGx13VFhXoxJ5SuaP8j1GNG5tEJNLAHgbhdXjxvt7q1YdEu1wscMCwRkyYHUwAk7c",
  "key5": "3Wq2WSnRMdn9iYQCmCpcp9ednoHo6jiCWr2ijqYPGycY6uH9vc6WsXnSD1VDqWYeCYeHZkD5yWUyNc3DJ9H1stax",
  "key6": "5iECvA7AUTbsY9wuhYrvToVFynbj4L78ZWmSKhYRJjJfLv3RPp4czaZRcymfe86GLiriQWMQQbNjciuXm2JTx2au",
  "key7": "3NqskxTVBxmjK6epDoZ2LC8QY45KPU2eEnHEsRakM8VYg66qhdhVHv9viHuakCEacMTg6MsbgY7NY4FSx7NFJuGg",
  "key8": "4eqEEBvyGjpwuocrrLwHZG4mkHL2hseZb4jJ6DJDdf1mS51SQ8SQqTZqRcWkZ2xfP7vLUAWT9Dx3wuhXbtHHA66a",
  "key9": "5rsZfRAKF8rmmZEGomZWATWfcUbXeUk5cSAoCuzMnxQjr3zQkyYVSwiug3jU7nio9yRWQeg772SVmE6oavCCtkCW",
  "key10": "58bwZ5hHmfyacAVEytMFeSWi1aMyQ8uviuSNMpewdkWKbvXavgcqmnNXx7gyWYfTVjtJJLuU4jvZXm88MwwemBn4",
  "key11": "5i57hB8shzXcDfVz9mC4opB48WbqFzUReQhmQUAA98KXCHo9FvM8E4AFczRnt6pnMnG8DuDxy7L88P8gpw4MKRPG",
  "key12": "acN3NCihAWB1LDX3Q87LKgYR7L2dE7WrdiahHdLT6wuCaoHLL1Q68CFVhQqfXhCtLXZksfw7kpEuEKPrPLUQpzg",
  "key13": "2vkQ4VtEUjsMdFsXfVrnuyoF2tmpfQ1zmVeygF9H7PrwaGVPemeZ2ZLcSbZMAT2mFuKmShkrduAiTsY5YK8dZjp",
  "key14": "2PUjVL5jo4NgTDe8znao5SZE3sAGeAp7CrminhiACSuybPazp2Cv28AdNbnQNqw21gBqixXpxsZkUYGK2YXA4ifo",
  "key15": "5TCN6heexo8sMfv6zdx34nif5vrWNzdnLaxDUJv2UjJcHWWsbCRBPhCqe4nqvDFtwVV7dj2bKv1QjeJ4Jxza5fHq",
  "key16": "4pqk35Mt6ZyePN6CA2WsN6CZYuNMfeYT8gG6uGjXtHQeNmMXrPJQMREDLiRomEV8FqbBForShuqdrmwhRFa7CSdG",
  "key17": "oFUw7WyqHMrQXAW6UsnxMVn5jZxCNJeK5y8TS8ZhMoVi9fLp8oCB2vKMrdVqSDBCujvCgbiRrLymykWf3g8jgHE",
  "key18": "5K5aa1zV6Uc9orFBF2ekhNQh1hyVH55UJK4Ax9oTcpstoGJ8P3bCdcFgSMmUsJzVefR2ZGtHWQmeiRLxrtCnqEuc",
  "key19": "2CpDSXSka4hw7SpWcHdTNd27pnYRuzRPh675Hi8rzcSfStvjSBgkb3d32HKZuG3yrqfrsSUZFZRHoTFH8hT5YWzm",
  "key20": "eDqmZPCCX3To3RgF6qn2kJKqYSk6ErNoqfAz6XgKrEmhycZYzaf68YTKjQv62kXvUAjh8syrzATbqE2YJeQKVhx",
  "key21": "5VeGiJ8kCoVYrC7iVBas9RtU9p8xgExAaP117p6Vn3zzSV88ofepaGbvFtaLif8vXasrYPMjihRa31upuB42sa32",
  "key22": "65QfC5kfD1qNWaFB4kWG1tTZ9g7GeEFo35Lfx5oNP1gYrBAxxYtrR9HDnfetDSxPvW2CjbdxSc796d5kjfL8nTVQ",
  "key23": "c5DsinhTusavaPuj23x8MLnHPQRMCCTryc8T7zD22c8M5hCcvuKMXn7vrJUTSeJw5YdjyG6VDcVCFLGMgqEwEvu",
  "key24": "2z9mbnFb1n8coaDuvFuFoMF5Gfs9xX1u76aNhZuwr7JXmEJ5xSp7eoj3gYE6vZNmhxJxi3w4c5Mx7iE4B1zBrx1Z",
  "key25": "4n6b8sXFYdBz2eJPEzrETJqdAy5jxpyCsRDaXFZVXKVgR7wXhACD5X9VfB8RnTsq9MJBSgQfZv7fk9Sy3sT2pyCh",
  "key26": "3nvfQLMCVZKKsYfv4WWRZrdm5GhjHNHCufeLYyHVPTQx2csBjSJKhVsvMoFdFvH8KmxAGw7dKZ7yocZMGWangUwy",
  "key27": "4h6uH8o6Pw7NWU2f1dupP4hWUGMYyKu2psHMmynLsJ161hpTv7V8JVNff7XYBUREACeFcytj3mFojD85k5bbYdY",
  "key28": "369oh3M5NNAkhMEzRc71LrpMVUdqt5iXgJwsoGQuPVKNsAq3kSp2YEURh5sBeKM2r3qAtu8oAqfuZEdMjvuJcYt2",
  "key29": "2jxyFVj3nXzVb3FADWpaAYwMyKSgtbhev7shgvMTBgWqBe5bNzQQLXBEGPK9qSiH9SrYCZrNcqjJM2MZZ1dLiPQE",
  "key30": "5Gvvk5DFbjyMrCQ8UX1EsVAqe1YnES46Q5vuft6Kx1Afgan78mUEQ5uL8Wr8XB4HHdgtS6wGAsFRP1RgaoWQxdj8",
  "key31": "5emRhz2EiwMEWB5ymbrtwkiWwZfsdUPt4xV2mJfTV6D39qH9Sanaqducco6ZWzsxUyWfLzgQYXYFhVHRCSPpMgio",
  "key32": "52kbqTDgFqrgWryHvSF8SKBR78wY3LHXHg5xC7wVMiZu9F8Ca5t6dfpCY2THKaCi3opwhWwsUKhQs7HzHKeTnyaY",
  "key33": "r5eAYEaUa9VmwVfpZsHMwi5swXfJKT8A1RtwsKbYyBZqB7kWbJoZckjNL1sHEa4dwjzyXE7Uffcdd7jwqsJmguX",
  "key34": "5U68egCXCAxCd2VDNDSx2oZCCezeQBJUR6h4R24bTgYmu7K982mbmsKQfYdRwTocnW2HhTvus5uGkEsUhuGgBceG"
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
