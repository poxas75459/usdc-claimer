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
    "eCJytcKeVhtVpzrRyTGKbiw9HitC5t43m1SZrc5smzpE7NnK2GiU3VLnuAHhV95bJupdUsxcrup5heXBDB3uy8s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RZqRSbhK7h67LwNG2z21CRjPE2LghCsN1NYjBvpcdZGV84wEEQEVkgPjNkb9UVnJRDyJj23QdsaxcNG4AF1n1XY",
  "key1": "36pcHwRuboycDie9D7funvwUT8rNU4Zxz3qLMFE9EcPK6R8fqMXtFYErGXtB7EG4w2qjzm9EZmWKqV6wAFBXx5cc",
  "key2": "4yjmoLJbTF1vWDA234yq4MrVGHj3iyqhySfWK3iNajapjzTcepMbxSk5f1k2hAytgtqLYng6jAE22AbKHymCQEBF",
  "key3": "62AJTyc9aR2cmZSZWi9C3vnkYCFmWxVhh34ZiN2nzo9mwVtHj2CtQiUYLMgXfCvGttkwWZT5d99aSwvkrG5WJCY5",
  "key4": "rr55PZP6u6tfZSbZ5XYgtcPNTaCdKU1WvmgrAtpANtGho2k8Qe2k1wUwfYtdCY8GQy68puhbvfCvuevpXaePxkz",
  "key5": "5N5ACheuo3mvYo9rw7m9YkbMyExiCEfQssFZqFDWUPZgfRMG7oL9j7tKNjQYmgrEidBm769KZ88Ld3GvQnKtAkRU",
  "key6": "5hosLUvgKFLbTJrHKhbiq7xjhuARGBjdUBA5PPUkpTjbjRr1tjZypKM9qvCPNEzJSJdnL22brRT2VDVWcfXDAAFP",
  "key7": "5tyxTutnwWTy9w4Cpv97UiszfVK7bRGUiBCtah7H5cw1WskvkK7E4SzLLm9Q3hcTEvmFYRzdRBJYL9geEUNqXoyr",
  "key8": "3PTojBnSMT486PaFwvKW3VYwhpahi1C8W3CV1qGMMPccxSZx3vYePuQfk6KvuhdNTkynUETVGfzRyZ1kDP7JBEsU",
  "key9": "2EfLNoSbZhXsqtsEXsaYAxsMNxhPvHitk1Sk5JgFdPJYLXtWDsd75p1EYfcu7rPj43podbpwqVAMYYY8MgdQu7Za",
  "key10": "4VkexVvkdVPn15feW51yPNA8JeWkkqcMh9iPQmnnhjJydsbDANPynAYUnirNKxZhB7UhwJbajWoqE4ZF3VJs1Lnq",
  "key11": "4NGnsdCMzhUsQxYbyHJ5ZLaFM47kvVWWobSBEzQQuVXUsBLgXdgX7GRiLw24uYjfzwbBou1P35PuSCQwnZw1zpYm",
  "key12": "ejTip5rMjoKLgnuc7T6sNzKW9JSzRtiGJDsoEZk9HdbssDyXuTJ8uQmWPrL5FudDZcN8k6iSL7u4fkwDEbZZ8Hx",
  "key13": "5nbUBmkRA4gN2n22Vb6aMHhUCm9HADxe91VzKnkZicQtoQ86McKRFFmYX9tgf6errfvPPk258Ayu6gb6gbqiBhG",
  "key14": "4fp1BKp55JUtdBgWic3CkJjKnMh2xA94nkJpridpuBM2tEFPMvjrcUcDxY6SpiBzfrJAvA4wKNkVd6ghHhfheH4g",
  "key15": "pCNhFLujV7tG8rAxSEAfKEU6yxYe8xDf7HvC9EWMKtiKYaXfRAjPbQVNmqNduWno5Qx8rLUURBD5whVC3WATEBg",
  "key16": "i8QfU97VXGLB9Yg1in5HXvKDA4uKCEwR3AKDC6V3vb1JmCE5MEiu5jv5sMdhb7Qm8A3pjEnFGdJzr4RBqSXFjxo",
  "key17": "4CGuBeJ1nXN9BK3nXKvUBRkuxR8r2HHbnVUHtNqxcZjEh5QgUpnZakWZDNbRRPz1Dbib2eoZER2wPqpGEUpqhZGT",
  "key18": "5ji2S4g6jRaofRMwkbqQxYz2JnyDzjNuhggdisw95cJqyH2qDecA2xSYmSRV6oV7DWtd4qjkzwUWZEFXdogjmey2",
  "key19": "5L8WDuMcm9cqgeXMc6byk9gUJKkGKwcHCD3sGUcdq2nM4ik2jtuZ8TRqpB52hoXHuf4PoXDVEk82K9Gf5GQC9F7K",
  "key20": "3xhh2u1QTHeNhgZfcDMNenJSRWQCXQQbSdedMC9qaQWz2mwN3BPLXnBWEL3Ws1PSJHfHtFLcTDAJmDoERtbE2fsv",
  "key21": "4ZgpxAqwd3TYKxCpdmwRJ9jdMqZaP4V7f9EHaMucg7SCiWE121sS3CCoi4bFkSrywiGxeL3NHwL635L9U5QEc1ri",
  "key22": "QWN9UbaZJnxMLyZMmBmeQSYkzQdesnBmuo7R665oomEVGRj6NSwiriDifmFXw7rhfmKD4653DNJ8XdGV6wDfGPv",
  "key23": "tXnnCbutEN5dSrVg5Y6vLSXpfutnuGBgQHcdEzfd13Ece7wMGz5Jo4q5poUjy9BTeqipMTfREwPHVMuKz8zPjEV",
  "key24": "xALVGoR5Wkeff93ZBq1ZtUgpXSgfsiMyAVX8amVVcXjK9jMjA4yh5Q4PuEsnUZtz2f93to6YApbQr8yA23YLMAr",
  "key25": "4SL57vASf7kLNtbVALfafeXF7cU6Xh2pa6yZQSuvLhyT5zZM2XXGwPThHG2HyWs7yn6LHRLXwWzWPbE864njT2JU",
  "key26": "Zg6gvuAg7b2nH36zGuTboaW9Sb2o9ZvGdxDSVXQcXbK4rmTnH6PVgdvSxfCtPVg8y1LbT7BTUv4vYwHbCP5HPz4",
  "key27": "4QbCg82REyfHGpXYa5b3FB744RkkAEGH3NEfHZMsLQKukN4RcBNhnPs6Q8RAZpvBqUhkkSzDXYc2XN1oi9L9JJrP",
  "key28": "SBhNZPgTMPWU2a1TsVwnbRnqQqC8NJJBrUJa6We5Q6s2h8Q8KCNN9vub2CJtbHKy91QHsRgs7QXTqd3nSPZTfur",
  "key29": "3Yw4yrmd8KW1XLYrHkuJaRKXWdbyTgzF7Mm9MzDJ8rGZGP9mVj6LFMg3gi9fH9di5XHhZ8Rdgo9wS5y4Upie71YJ",
  "key30": "3nK9PnkB34D6K7P39NXvu7RdyTPegWuH819EPUCfSFfZh6nSWduvp1NgsZZpZiDWNvMa7CKPWzHAPG9suwYimM9X",
  "key31": "D6SxgAXUT5qzuwdRyUULtUMm2kv65e8QVvbkkU754y1Nhrtwg3fUaMzvGoYqEbRPu4enWUNEPnDW1zm8KQytQKX",
  "key32": "3iiKmBi71Z44gd67LrN5txFqPw4tfGH8Gq4LdUpEMDafaF3B4Jcny9MD91drP4oFWzhzWTjYbShiQqEkb5nom7Xp",
  "key33": "5h35sGhpSLQyVEPLdN4kL6HvVRKPBuw6zBmzZzD5PEgUwscEumB3hYeaxsGVe1TTLvCnwUw8VxqougnypqMAwR8s",
  "key34": "3NpumQzWbofq9BWVaUqBBDANUEDiUewoJeMFE9TnRQCQVD1qwz3CMGyqU63JFjFMHgETGQnn6WpKGU9K49qrftnW",
  "key35": "4eA9ZMYJLptKHGgqJ5hnuW6UAh6gtktxzXX5Ub5oNfxuFp23anKdVmXERiq1vikV5rYntkH7CKRJ8NfoqDcgEgPv",
  "key36": "3fqswMBuFL6nkB1uM9nmtJLwJJikVctErfeigr5bhpdn6duahT3V1dvrYgT3eEkPHqKoa9E2LmJyVUeushGLyfcp",
  "key37": "3bAVh4oh7EWW4h3SQa3SaQBpfRprnuZE56GwML6Yh26Frm9PkoxGbEbBybL9Q2mcx5hA5oXJYx8idgQeFyFm59Xo",
  "key38": "aZ7wL5TXYE9xHUSTKc9P4JYJ44qDywG4cJ7zsrK2wbGrvSDkueG6F8Ke5QaCvat6Eu6YCTkAKMrFKfYDTwdt7nc",
  "key39": "qUELpTeVw1QdUbScev4aRD1fzt8bFnmyndEqhZBjEZt5rCo8HjKiktVeho4SKboQxuRDYhrhkuDetX5uUtM8ET7",
  "key40": "2CfGuT2NXyP3GXB2HCJV6F43VTb6GnABert2dqybQUs5gupruTnxFXx5BaQesaPj3NTw2fCwAYr1uH57UqYVAJmF",
  "key41": "4qDk2VqY48YHXw2ewTRZ9syCbJHqg7LvXMFAyGQ7HLj1vbhrnqmZk4L26Q1XnRSd8VXX7howSYgr8s7y5nau8Sk5",
  "key42": "3rJFf9xpCfVZvRwGszH7a5WDzR7zBbQi3aQZjfddWaiB17eTWFVecYjRuyRdzEfZigVtq3L9SDDtBbsNWWXUG4mE"
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
