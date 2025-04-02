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
    "44YUUuTVdWZ4hRGEPS3jh2BQcQKqKapKWEXKqvYEhkFBsvDL3c3xMa9yLM5p47p8NvHujXiZAxxivS5oacr8r4qt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fWjgTYWx1L1DXZ8ja1yxFjg9NjLdeLoBad46nygAGb3QB39LAuwpw5UsbczpdxEXTxHx78wVuRykWUsiQa3UnDf",
  "key1": "4XqPfrwrdv9SP5cZiKjk6hCW7F3MJLGy3R8ETHkA3HEa187BT4owP2UNsPvZ526ZMxq36AdjLRDnvU2j1LztPNzs",
  "key2": "36ASgTJq65r3UpY7yT1XZmXgzDPmNzDFoEZevcU3oKo93ZyfS6mqHppFbWvbKj5z6fp18STGNBVGRs9WnkFr3Pnb",
  "key3": "2W9GkcYe5CHe3bknHCeTgjEZF8vtaBNPMmcXUkzXwcu7jeqgivuK2Mgx5Zojh111tvFjkhTtWWmXoJQ4eXeyYfee",
  "key4": "4hf8zgZu4dBquvMWR9yh2HkctM8VFuV9EMg75HZiWPL7LCc3GiM4WtY3ske1CUMRXNQ2roWioWAG9VqGrckEWrz3",
  "key5": "3SxREYhvUc29BDbfmvvJ5PKXBMLXuvKNq4BS7o5LiuVFr7YG8917NYZyhx564C5BpCXHQyahL6Q7nNwJ4qFqjtD5",
  "key6": "F6B9pYYeccD5wFuFGbC37jzLwMgXiZGPanaaw6B5TTnXY9RRNk7ttK4P4EmEdWDev9wTWkW9yNg9P7ReLWCnNFJ",
  "key7": "5zqR113iVqwd7zsAKruL8GZiyn51GWM28gSAqsMcZREUipw2YJgG7rMUshEfXkyyApnJ81ScH923Wm86gpiEb9Ja",
  "key8": "7pLhht1fmukw89m46CRYEDGpxVa8rHnA71JshMxhP2sgKyscqYF1hBacqAd9yPVHifiSvnf82aFL7NtcN6KW3xd",
  "key9": "ktEpcRber7aEaudPe3X2A8JN84afjCirMigD6fxb9EGP5ixqbaQnA4kHGgX1dQNRDxdrbJq2U5EqCq1twkEyPcZ",
  "key10": "587B9HYb3LHUWBh14Dsf6P5PWhD9b35D9NYv9qXHqhEwrADAMmX1QewAfo9Byj46spQuY1jmx6J2AYDgdaHuBQEZ",
  "key11": "4nuVQ93a9rZX4y8SdRPPe9xLqyLK6z3JS2RnLa8AZq7uoo5ngDvpo2LiuPja2PFDNZfCtQXnNsRyxhVPDZkxQqeL",
  "key12": "2FgX43iWufesVZf1db5LeAPdCf4WsRHWZbkoaH7zV8PNNjqpAMAqkpLbatXxdScrWgDmYuHVUs6CebqgWVmagav8",
  "key13": "3xwcKVqf2ojJk3RwsHzWDySLsLPKueAAx3m8i9mGKco8MM4NH5sbDWRJmazN3Ak7uiyFkTTHgKzXU8134YKfAoc7",
  "key14": "4DQq2LEuWiPyfYKpamZKpF1scX4GQ3XBSSTYEkdVEH2C7BXVxBvedakGhrrkTK4DddGafHxR35v8meWHjV4RMRWi",
  "key15": "3Jpp38ZjVndAbpqZ3G1x7LhHbYkSFcMcGhFpVq9Gp4dUnZQ2QjQKx9zSmH8UaHzYBYm1jvsaKjnadAfVrxJrikTZ",
  "key16": "ZgXfyVJeBs8uqMZNi7q8svF4xUYLyJ7AZH25tQq4mmAYa4N4KYcBatgQWV1CKP4XSQy6PX6c7gxmxf5hnPrdvWo",
  "key17": "52FScMYCoErtB1CWpFdW2eqfnLVYxgB6KpEu38nrNNcsJUHedNHB2bmGZWwo4NoU38b4oGfQLC6NHVva49dTBLc1",
  "key18": "5Bu2LsidszPEwMXehYA4Daazi8wLjSVWkSfXLBEG8AFLnVbbJC7jAp3vfSJXvLreLJBV71EG1S81h2YQK22rmP6t",
  "key19": "38ZSoYucWZq8RmqqapJcky1XE7qMG4QEZNR6UKoEPJppMDFtMfcWzd4hw7VKeCMi6v2QzTesJP69k3UghNP4ySPw",
  "key20": "42vnYeEGta2smw6mZWV5teXRRGNEqhH868DBsNBVGQUjjQiGMYsSxqJZipL5uxEXpJwS9oRkaBDkQBs5Lr2xT4oM",
  "key21": "5Hai6GARTVaKTiZnyzVnPP4hRdupBBXDVefRoKXvA8WENyso98AQ4mkFsQeWgZtiFFSFZjx9kV38kGG2Ncgrf52X",
  "key22": "2A9L26DE1Tj2qdmEJh3Y8NqEURdHy4wMMff73Ae4chzY2yvpUJgsK56kkhRcvEHcP4FNEYZvqZJQk3MtW3mMwTw5",
  "key23": "3pcsevfcHQGPocJ5wmUW3yAm7F1bKQNcaj2Euhtd4RVUfAJyxpHnzg4gXi4eNqXr6CKBB6vEubomyKZFuRMBW858",
  "key24": "cjBDEC9G5PetLtgYTz1dNJh4cCLdAqHjZqzRrp2oSdEYRqxpaw9HgnDQ3iP7twm834dVMoETAhM1vomXK9Zfb3F",
  "key25": "55wnoSmdkzmmMY3wgSGvYYv2gG8YyPfQ9xwqLSwmEfaC2Wc3VbJDd8wcXxA4hR2fVdrFj7RPYU4JKiabR9i6aBWG",
  "key26": "3hYN4Rhms95fBQugKagZZY7rw2yyiSf5DBqzPZdttL4kYmuzsZb5aAr1uxvPPfVgsiH4ZvkAjxczLfnuWeZibiNt",
  "key27": "5ZX1pkh9EnMmTHk5JJpxMzCosjLdr28J6vsADMBhiHbqCGu3v5db3YRpdCjQkeHroRunQta6pgMR9GPbVdVL6j9h",
  "key28": "3Qm8N9AKDpYUbZnG6TbKo7UDRqMbv8oxqCVCYNqoaTcFMCiNXNYM4z63dFqSk5jqUprDtb9i6rkZP5LTiagcvZ3C",
  "key29": "rapJuy3bN3QrWBpmcqzVm6dqefnZZKGff26E8W3Ko6iMQTkRZebdFxvsvkJgSPH8UvjEq7HbWU9nA6fS7HdyBjs",
  "key30": "4kzsuWKFyPJ7BcZUGTm1vBVyXRLUCbySbRpDREsBpGCcK1JMZ71CHPKLMhJxHrSkWNP6U9SRqnRqjcB2i9AeWqGo",
  "key31": "2xprXqg8yuf8iHoe2EURS11V8ChzUXK9tbv3uNVmco3pZqB4Trp6KctaeTWbeHKqN9JYaHFDQABGMzYs9JRZHKoF",
  "key32": "1tt9ZFwPK7CXh3UB6Ps6aEYWoyCbE4791jnwmN8ra1uS2v3vrgbEHTJT7FQXAmLjVcfiZPBGoSjaStZdertacZ3",
  "key33": "2cLXsmggJMp2TNw8K3Rg3HkJGBfXwW5YjHkP7NSzZgZds8jJ73aK6GCicYcmVAbjdURWoHtYeoapsBM4ix3v2qyP",
  "key34": "cYiUMnLF8ZKXEoZTBMyhQUpMQ3aPzd91QyZRCNqAYjFcMQqoyHX8pGtLqaAk9RXWqD5ANs9QiyTXgbGmH5bVZHY",
  "key35": "5ooVZpU3YzGdA7rs37MVhGfdjXubGZ5bGeH7qHE2cvkBoEYeD2YLppoYRBVREVCHDqfq2bFr8SeXYLsJYbb2Qp8j",
  "key36": "4MhK3AGKsLzh5GkrFikygwYn1ASbStfqPhq1yAexX8iVmU98GUTzNwEaifbFAkh2L4tSapVqQ5ztL58ogbnB7ove"
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
