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
    "59GdfcRDPgJxWvy84XsTwkdSU7BS3Cbpucvna7unJuGWgyxq98e1A2GSMJbYHjXz23HFovnX1Hrf1aELHrUYFrr3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jQsTnDgRSos8ReaqNvz5jVCGQ4g2ttTqkzdqoPe6GQx6oAfrQjhbPnTfyEwSgEA7HeGf3xZp6o6Wj976F1x9PfM",
  "key1": "4jsDbGNhKHhGdk7FCXQuhiV4V2FdgBv36XYEtFgn9QPnrSfiGnaBQZrgfBwDBtyMcCbjDsxPxa16Q5H27s8h7XDq",
  "key2": "3RDgLUyL4U7Sp7kr7atNbTTvU2YaPUUbWy5DfmHJpoaKqSpegEnReZQGEM14iMwFXmPYGF3zmtDYZyKhJbdstfFg",
  "key3": "3pMKwW2UMTRMDA5WmCz8wnw6TtPXYp5RQ8TN4BH3THrNdfzmBoJfbg8GKFTQ6e6qe1JMTyzhKB6bYyLhCsnKZWsr",
  "key4": "2jX1fv6btUa85xYx4W1krpkuANBQrzq8N9KYaR6n2tZvQPqutHQzi2o54isHzq3KvqDPB52b1Fj2ZCdRX5vhEaoH",
  "key5": "2PmnLehhNrLu7MGSskv7QUZJV5d6Uzz7jy4zEjxtk7SMJTi2vaNCrLAP3LLpedFWEm4LvjwKt7ZepNUXy3jrdeFp",
  "key6": "5rwr5JrHz7Sv5tpQyR3g3hzj1j6VhNHR545jagLNa3FUjDTGBHEBbu45PqJVdwZNgR4ukKkfFKDcepAUN9BpNYRc",
  "key7": "3STpsm9UJ8XHddWqqZFWUbJhVCo8yfAzfNuHRWgCRq5jCCMVVWjnxHqc8WbfUEKQpPHduRMwTuRdQVBf7PhzB5Ld",
  "key8": "2gs1LJVH5HzmCuyb26wYaQzcJFjtU43msFx9wne18tM55gLzq9Sa5idgynqWzZG7azqq8tCKBiMLqawTEjfV4n85",
  "key9": "4GCk1C4Y2ymhb6L2eSFFrsgFbJziUdDZf3LH2Hdv9Tk4LRNdM6DosoCQFAQuLTJ4dNf7UztJXaqTcK51YCnr7bhW",
  "key10": "34VACmgvANfgxSg7MhbBH4fvrsmuWWmLzbpdbgx9StxnzKFGQFbqaFWJC8VCAEwUmj7f1ka4s4sRxZcuXCUu37Bo",
  "key11": "26Fh4xkgpk6kTiHhGnt87rBGvtUHM81RPhZBV6wJMcNiAtkP4wv4AutWJeWrUxyh1Dw73FGVtdm3PDMZbwvA9peN",
  "key12": "2BwfCpWP2wigiQs8hXnkHcAFZxQoXxy3iJuQWsBZqKFTiGm5HjEUppkEr8YXeQwrGdnStnrVsenx2sSonJBgxUgA",
  "key13": "4JMhRaer8QunFWeT8fu23eh5VPAtuBovnCDrtaTrWU2Si36DGUhEiJbomJaJsdMDCAyjLG5p1YskNBYRJJj3Trej",
  "key14": "2WwKtxRFTqigzHnNVwN93y4VCrdtntZnK1cYVkZCeWXd9CpHkJkwG9ve18DNtCt2ByVBVksqMe3Vp4EaBB976YEE",
  "key15": "2Ba1ecRWshcpSX7FVxxYFQcgZnmqQfHwyHYAAJejHpfNzf3RvcpjsoPVV7YRxY3bA5k1UqA3LQsZDQpreCyhATUh",
  "key16": "wgcbZwd2PHGRRc9eJMzCGGAX1zD1ctRAettzCL3wmDVs7sSFEVVcpjjT7kzHs5wriywwNWkWEns2HN94pq2Rn25",
  "key17": "5VMxuJt63bniBk9LcbGST11LfCPdUVhLMtf8u6H6MVn9VBE75GcnKswqAKJiF3eXrS3ZUiRyzmXbBZidpwzV9p94",
  "key18": "5PR64AfRAHdEk1osfzTp3JcwU8GSFrD5KvRn4WBPk3fSNQA2AjcQsdfpCEfFdLrNFvvD6GJ8UufZigj5mKK5yij3",
  "key19": "4sTtXZRycpg6kyF91s2rimNvZMZNJUa9sVQLEErPPR6nSu1v9siYCrM2jZWnAC4SziFGCFpJGmZ9Yhsad3dZt2oD",
  "key20": "dYvYhqrDuKhRz24SGd89skaZ7nReHv8iBxo35ZzqeveNSuzfUFvCFAkkEHoVVKXmyBcyZyfPpmRzyj1iJUFLohu",
  "key21": "3NJ1faNJuji3BzpPHagL4qRS95Vo4htCdbkGqo5DSH5ejecmVwYFRA4qiMhAWxzAnRnHoRh1VxHbhgV5Bcoho7Uc",
  "key22": "2wJLtnTf1ScRSjCTo3ovdvczpqXqaSdmGWUbvjMJeg4dpsXTutqBYusHzuSKJ9FaauHRAurQcNoWGJR5aHrQFWMc",
  "key23": "2b2GJkiLYcjv43JtoHn8EBXGW9F8RWLzFYegwJCdqF7fvNUxTrea7rZPYCGCUXW6VURXXxfPahPpsimoMaqYrPnQ",
  "key24": "3CK1tzayrXfcyosPTA3tbBrsihLhN8tAp7XaTZcpTCD3Ho194vdfAg5DpLM58vJZSEYY1AmJumtMGdNsZfKb8vkS",
  "key25": "3Qx6LDYy8H4dd6CrA3xgBHgfoS3sECGrykH9XZaZkwfeBA8bBgQ2xuPfiNpBC5VmbZXqXWuDsbkUdVW5ZKaPVebY",
  "key26": "4N8YBvRVr1pebA8HTFeea66KFHc3gwTjEZ7xc7mCeeXFb1rQzL89sGh7butmm7cugEM4Kk1hQNSvXECqy6GXGAAg",
  "key27": "TTGoVtx859yMsezC4jrSd8UAJVBzjaMXKq754T9XtnEKEmScrqZqibRmQjbuaa8EzoH81hUMMbJLm9LHcZNqPvE",
  "key28": "RJq5cm5fi9Vk2stHYvT55exNLtiBi7pUonyFJPrd2CceWLfUcVq9LdYJriZxXTu3xBQM8kuuZNp87afu7ZaCGEz"
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
