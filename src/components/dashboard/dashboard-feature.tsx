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
    "42bgwAkUkKxdFwYrxmnJqsQTyc3iuwi91nsCirCCxh2uaiiWGgLrjrq2REvnBnxEd8w6FzsVvg49bhqL5W17uiky"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "271Yb5gfbqJvbawuQt6HijCvc6PPGWbtd69YvvkaZiaktNN6TemsepFhRLNJVrZtUH76uSW38o7wsdSXjKBsudw9",
  "key1": "3VsfR8gUPGVP2PwkCArARjXkbb4i9MLneNJz7kNV8PYvsoMmFhphVpDB8U423Fd5gX7y1iCm8zBGzyb6zaYCHCmX",
  "key2": "2VPxpHqDjePQV9ivAjNmzbAhHpdPSoPgNdyWDb6mv9BcfA4LKMuaJm42TdfdJmQifV1NpXmbvxkXNE4nzBqz28ht",
  "key3": "3URr3GuSRSXEd6VkZmLyhQBCHJovigAesDVGQyoQVxke514yrWrhLiCqHQ9hiLn48aHuqa1bYJ8u4x4Ju3bHUdUb",
  "key4": "2frjyrifKzq4a3EDVC258GcZbmamVkDVCnynVNKaJ9TATLz7MPdxFMjoMor6r8Sg8t9WnHySvVfTQLxzBz8GyEQW",
  "key5": "4DBfhJjuhMHthdqhm2MFvRLG2kLtjCeq8dj34R2eqcq5mXm64ZkGbvbPvt2EKNjbZR4WPzq4J4gUavbhgHhxQLDx",
  "key6": "ZULB71hZ8wbYmjcwJLY7v4khHUE5pjbNPWNnw1ztd8HzDgWxXCfQkDxk5sjjQ1z8n6HApqKdVNRYo84VAuQCyey",
  "key7": "52mVETrgXuceT1YYth5ym9CgMzqYgLrwvFSdizrZTTYGPxFJt9kAmHBPXY6c8eusL6xMv8CTS5xY1yqdYgBqEec9",
  "key8": "4vnqNnYJK4qBzcjJVoixFYNWpPcFwsinYbnDhywz4b8snVaoE3qxq8GX4hNwFh8hyXHUcEWSNaW4AoMs2aZ5TFtD",
  "key9": "49VPDeDNgdQVjqNgJZqMHCqkzj3ATToA5YWU7qqbiUXyvWKnKMdEHg3zB9YbW5PEPt5yU61FbtHpMbARG8ToMsC1",
  "key10": "3Bsk8LpwKPLTR1vAj5D7jiheCoDaETAr2gkd8JXWAYvzSCWaXozZ5QUguSASYLdnceRjqZUWGFaPZsbMFVHfE4dh",
  "key11": "vdHYF2rgxAQB8Zoc7EwkFGVBRDe3Q3B1AXuiobYkQfnyKousTgoGjmvEzYwNefRexMkeycsTQLE9qqLMvXLSMDd",
  "key12": "31Jvm1agpwmUFX9iJgHjrfS4LLCa4u6hYsMCQG6AX9gykJbdmVdAj8ij6oyCbr77sjxoeUivbYfkekubVQdvW22M",
  "key13": "2F1wfXZ1FcDKrHKh2zr83iboct9T85XDswDapeccXsYmASrHwxnJ2wYkaSREsRYE7VkNjqPqLuGWbv46TrLzZut2",
  "key14": "fYA2FEkMvL5H7yK9HLwLek5X8VFmw2NQ5RypWzgj4PZZVbeKu43hSN8nAb7bCm9m1TKDgBVp9qucs4mFVJ1XrBv",
  "key15": "psVBrQjSGkSXeP2ZuoaN5R3DYBXDoWbJDZCXnRfFgvL7P7pPrmqbxEuzbGh1W9ukx4cwZhMHsuY8xKHfWoWu6Bh",
  "key16": "2iTfggwpHTdfaw1KU3E6BSjcu2UjgMJmC3RqgoGCqV1wneuTW1muLU1VzYx5gMQhqwykCtxV2mdzhBAVaFW1DEF9",
  "key17": "yMeRDUjBW8gU65yE3rENEw8a1pd4tsi2xaiP7MSM1vhdkcA2DRPTUGbcC2iZFrSTV1NYDqaewccXRpjvJPCmn4G",
  "key18": "qRpUHBYBn8tkjuM3BBoxCouTHsyNwfEWNKQ2eXMjfqT7Hn6tWAZ561HVcT6V5MfzFmerARyAgjbjTpcur3Vcc7J",
  "key19": "n4A9vsM1S6QtMoW9yuwkxwScPQACU6jy2PWmBbNPaqjxZjjeRpwz31u9MwB5VLmgCiau5rYtdoVh4sJnnFFUM9v",
  "key20": "4AGzcA547itgXzyXt4uyTcZoq4dfMfg9cYRsBp3oECweMAT1Xbnx7jJLKEyDwEbwcwLEHJTQs1AFyP2Rni5PAvLV",
  "key21": "3kANW5MJee7YrEx2muWgA4muJJwRBwkW4yFbiXHCte7NzEifHcy4ZXPHVV9tPyQkg1nycCRCobcaensKJYYre3fj",
  "key22": "24EbAenWKXbrGv5Xfj5unKHGKPNuUotyUQtKsHqMucEGzdBQhUrgQP573NbBk8bfomT3Q6eLpJ2bpxeVUUdAs9ud",
  "key23": "Kk5SRvFgmJMTLkbjZ57XL8ckvmsySkvyCAABAo7XZX5kKfBVW4KkocwF4eg2AVw7ioUJwXBX6n7vYVZbKSv8pMz",
  "key24": "2vFH8X28KAq7ko5my2pR5HyhzS6QHvuixW8Xs8xdiKLh87CyuGRMHxvXcmRnqRNzgPDfH9W7znqmTRyJHMZb28Lp",
  "key25": "39toa2sd8kxfQL2r7NbFJ3Asp2pDXHYadL5VVeCwBHQQKpkFMLr7NJo3RyWgEzsb3YxDiB7yemmKwqJdjkGiswgg",
  "key26": "3ZazG9CGTx4idFMuooSoRtdnBqb4QGCxaV2aw8YAhs93Kh6zDs5hDkhBhSaykNJzxJnEPbZBYyttSjynJroRBDza",
  "key27": "5SL3iEweq7tR9fUV4hC7s6mo2G2KADJvhAaxXM1h3c6yPQonJjbmjWaZTwh2NuC1p5k3xa37DWPSPniSSuHxxLej",
  "key28": "3q7GkwJ7LieACMBQJf1Lsj2hFXLZGSvaxtyAbRRTD88TN7Yb8xgHgR7JMdZoFp6GKD5CWBv7DWGApn7KGVwVgS7s",
  "key29": "3zhsvG4P3RrwwD1pdQXVGw7QShJCVAouEgn5QVHKEr89C1KgUpzw8bkDdGEcwV2x1K6enBe9pQGpnpkn7WtW72Ux",
  "key30": "45jfyKLiGbX19JxH6oY6R18FrACQMexEH7Q9LFULqTZFbUTFJYxLHbrbwQc1Teo8VJonjHmtSwiRFjVFRkYn7WwQ",
  "key31": "5NXreoR15cbj23epB9Z7545cFp1Qsm7yxJfH7s2qqcLDh4ccEgkbYHUzY5imF9p4S8m3EVRDuTnB9FAjjzVDEaev",
  "key32": "GxiCqdFg1QFmR3Swoey8AcgrDzMuRvaqtduHiqxTVjPmcuCpfezZby382LWcHRXpWTBdBNGe7sLi5n5CkoXpM8m",
  "key33": "66uo7rnz8w7mLCWXuduotfC8JQ3f8nPz2JZopzH2icWtuwowgVgVKKQ7egW7jb2He65DLSb4LH6nBjYK5DvNPY3y",
  "key34": "2BwWSJtpA5JvHMYoMfyb7xij7F4BKdvStWcq5c92v9JAd84UD2HfGREARfGB2svxdVdA4SswNR7oWbEd8b7tPUcc",
  "key35": "FXDgAhntjnmjzQ1DT8Dk2LYKE3jQgtwPYNQAQn9TQRT5PKQ3CTJ6a1bNv5KwEY5cAvmGThnJFABNWJ7jbFR9yku"
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
