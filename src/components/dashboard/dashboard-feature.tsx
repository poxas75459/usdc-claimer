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
    "4HNZUpALkQEZMtpT7tBs2x7qqxwH6JFDzw3eVhEDNsAQ8TZMv1Evb6sB8bZo97bBdKA8Vdnyy4ndbDj82VZr4Lmn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BUSpzLaXeDtmZRTC59y7JZ4NmJDVXfw1viFZBJ2JMxAVsZR8wYHBs59sb9MLdkMVF79duQ5yCwkRRx9hZbhaSBN",
  "key1": "4UfV6GX9L3KqGixMu1hjaJUQs7VpwApkTybvHaDFJTyF8pGaDUX17LNTky8fpFPajHKKhgtWejsiv4hyXrBXZaCN",
  "key2": "5Uuev7mKVBcCf63K4RkuMSqvd2icZwnTL1bFHwioaaD7YCgz5e8HznnSNYvtSj7pDp52Z8sa2BPuBLRw5spGLPHi",
  "key3": "2ynFBKF1emHPzbMn1hkQnDazpoRBYtn4uVAMaZNbZ8p5PM1qfVv57JZVBUUb9No3ZLuJ8ANRCLtosaRJp3pUbiRr",
  "key4": "Muvbxdusn8kZcma6S58UC64zPDY7FaYPo2hQ4LsMREkDiyat39UePcWLARo2wy24J4rZx8Pm2HTAmt6VDNhN8h1",
  "key5": "5rZdLDWyXQgd7xzBqiPEgiFPa2binQqneDHP3KtSg5cRVzkhkzideHA2evN6mkA6eTbDXEyKiPhK9FUVmodwDhUB",
  "key6": "23LzosPakhaBPX8cYDJXebbMbKXrW8JBJ6DfR8CZwzg7aRj6pCjVwxTrjRmeArgHsYS5HhkehGLeLdcKAQA7QjyT",
  "key7": "2A4RdYwxSxxn92kt7f5wDBLS5xojQcDdQk8wDzb56fxLiZwNkUnusH2gwpnmYvxjjbuht7ZqqrtW7imkLVbU3b6f",
  "key8": "3jV2okbtVziZuQts5MMoYQEgXpV9Xhqbk78Ab6N1DWtUCxvramu5Urfii9374p5oxVkZw2ZkbonkNThfd6C2erV5",
  "key9": "2iCmKWL5WQpkMhK1cHQwv8vNK2mWHeD5MxaHJWb36Sw4Sti3VSpofFpv3qdN22kNyr8mSUANBtfETeGZAwmJ4KbY",
  "key10": "5DBB2LuwZEyvszSrqzQ7fHpJg7k31riTxmNi9ietJZLJLou5gkExqfahDsG7TXUDMTNjqWuLGuzf7DQ4sxQb13et",
  "key11": "4Sqj6CupbGxTwYkP9wZ6BGAnczRHBLQ2oKT8e9MDzY8qsadZpxRMcW4yDnz2EvgPnwMhgqqi9aFBfqLE25QDzr8j",
  "key12": "uS1ZMfnJjdF6U41tYhmkLhXrKEFpHYaDX7u5bansheAk1eRicWv3uK4fZFuyqEfnKQy2YHjj4F2S5SgkZ77DGzd",
  "key13": "4Vvm8fMXaVEPpe4RkwXCHTJ12mHaUmwWRhDe6bLdgsG95bwE2JXh6WxrMD8yCRhG7KAAPSuYrCheHAKzkygjQKpf",
  "key14": "5BpChkwRGtWf2X2KrngwYKavqGg8XkhNDJgX6o74ByqjVSPBmixXLP32K4Vh5MheSdnvFUeBusoWptZ1ThGWjzZx",
  "key15": "4MwzZ411Z1PdP4qVszqKibHQDWFLpAuXHTHoqVHKuws1jUHjvWGi8GDxkRWcKNknPN6dWEMi986XaPmLdV3j7feM",
  "key16": "4rofTrdbjtURTmxaRdSCPu8h7yz8w6ud1TeSAHf3af9ewm7VdEKxcafU7ghpmN3jiqmm6ELhudQaJaKYqWq2d5cZ",
  "key17": "638xiwHb9d9B17Q2SdDhVjQHzYnQTVxyJaRPqh3cAbdx4FvPtjfSq3aJdJLMAnUUj2wJumjHtmgXdzQDwV1TTqbo",
  "key18": "3mCi1jYHGjSUzNJ9z2P6g1yw11k6PkA6uayZP7foQk3v84HytSoGH2wPNyE1xXBoa9ua5BBFbS34vVpRcPrFzm9w",
  "key19": "29md89ijJ8M6kSZqGxaApeMpf4sBC1uYbmhj3yvt4cpgB8NzAmTLbNqfsaMYq7XPhMitMJk2NppW8crpcCgxXQFB",
  "key20": "3Q61XKfcmQQa3Ci47Wy9JbHhsbVZYyT8xamGP26eVtG1iFY4AJVrXNPCMnG2pktqumPDLh7pibc7icLyjdBnM5fb",
  "key21": "4APo6JKLobrGKNGgvLbjob4C4vHiqAjS2i8F4iWMGZsxHP6rGHbpcftqMEpVrRoh1JtnbDthXUuiMHuz9b1EB5ek",
  "key22": "46HdBAN1LmnoC6XXDvFeAMzfpRoHMPyknPbGNXENJkxXPfV79xCXbZVd51Jmjcumj7KwN7n6YmjFuazfumffMTfu",
  "key23": "PbHAG39teUBkiimoMZYRC1UPmr9u9dvdeYJ5mAeZa2r8FWijjw3qKhYDuTeBRoTxhYqcWLdJnZKQb4ZpL5HBm3K",
  "key24": "QGKwGsw8rGEE8ihfryYp4oninqMfBV7CpNL4A5xkxHToYgoznQLtU85ALo7AWHc4LMpZHAMx8oj8foLfyuZaywe",
  "key25": "4cNK1xPemAK1fB2f762byB4NZREQbU1VFuPsTG26xVM2FEGnohtSpyYic2qSWBuU5PjUF7fQYfAEYDyFbRXssQQP",
  "key26": "2cQDFqLEMNQD21exnB6K7kwfkJc88e3xtaMcGZPsd9o5b6rLdqDALpZfMZ5tnGEhH85yvgVQS1uyN8GCAcJtmc1r",
  "key27": "5b1H74TkcbM5oAhjfC5Cxb8P6oCRc4HJa6HKdn7FqB2nGj5ZKvQR8TtaoJcBDD3VYmZcsxPpZhSWwG1LirxremEc",
  "key28": "5Vfe8QqUk6QyvQ6t1w2nRFY9GJ2L3Vo73TrANon6tRuoB6mdva8hHMnoia3e5QVsqEUBRibz5KKcSfbvY2K8JcFW",
  "key29": "2yc5U6wDiMZb7wwLMk4mzPd4Y6fWHpGCck7rBxBKk4nN6KqgWpQ7b3hAWu5pLPqqSiBLvVgUAFweDt31pajz3Pfg"
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
