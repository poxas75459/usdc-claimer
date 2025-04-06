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
    "4b6ZDGTHzaUgv6C2bQR1P4r9S8oSxdy5iitUsZhY5ZoS6FtJu4EZRuoyy9bYxrhFseG33syH2PTgfThHA8RpYH4P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f63NgXZmUpJQenLDhMUcAEFffLhFkLBkfwyS5curMYdTL5wVQSoXh3EbNgKqeyPvn5VYzVQsJsKrtfHg53o1faZ",
  "key1": "3w8peLbB6enfsTqND335qDLWz1eKrGfjxEb3zbZWnqfoH7ucnZD2qQJJWEDBCtfupP3r3cPaDYZnz6d67411dDjS",
  "key2": "4pWHj4CV7h6bqm3osvBPbLTZusQpJCPwBpeHYZiZee2dp1cqLjxUGURXx6hjGRmngVnH7Zu7P8M6RdRmXLcQJps1",
  "key3": "5Pfv1MBprvatZ8vPQt7sAHnHN2YzYP8HKmk4d6rrwEyzB9WZ28xNj3ZHpoAywjbLHYcaYvPgrQd3RUkChsY5hUjf",
  "key4": "5LKq7vmBo1z88D1Sq4qfJAe7yNDEo39oN5icXdCuef54kYcbcPWUmoF4Y17aD8XXuquAKbDoUcXR1tjbQQePGt8w",
  "key5": "2V9xUFpeMBiiyNZdibhFapK1E3APr31S6UshkMDdLjQNhcH4SEMnVa2K1xjJ4P6hP7n3tcn8nf1x6AYXQNTCSQ2o",
  "key6": "56457UEQn8vPrsvtaGRwMoXdqzqrZFhE87t1tM674b8JdVtmseuHFcSeGoT5XhUup6KpEkJEtdxwX9caqivWkDXG",
  "key7": "5xHJDBXY1mQJdWXjNzZVhtFAMUX5aqiqK8bg3KCQHQAZyGPJcgey1yrNPgUPy1aziPCAMM9nN1tR3VnYrWW6zMDL",
  "key8": "4HeeMEcg6tmThe9vZ2rvu5nXXq6ic66uoAWCUZFuiGNFyW2PY3mRk75BwfMGgNsozT9TwxaBLrnaytQejdx8pB5h",
  "key9": "5wQ78jhGYDBAPDS5QxHsDdyfnwyqarqZjt7TUyJkw93BodcwmYYuczsj1LkToNdmT4RGiWBycEmdnZ7hS8uwACQn",
  "key10": "2GD2KgN2L4bLYLWXv7i5N53vieNYaGARrT91RHsXj5dNVN9ttMTECHXL4baFUMNsqrbYR6iJj9BSfTXb1GP5N8BV",
  "key11": "3Gw1d4eEZDVPkPZZq4KwGXdg2b6FphyAgW9BVMFCKwBYmyCRGsn3Pc2dN6kk8h53LsJEfSJhiDWP3FoHhNuT4qqF",
  "key12": "656mwSooeaaxSg4ajnpagZLVTNtut6zXPUfAbZ8rVyN5oe7j25uJGP8DMZxGBSSQ6NLcFjVo7KNxkqRu7R1SwrZg",
  "key13": "3Xus99a7roGBVFHoHYxLcqjkPXiDHW17Sfsi7bzEGQsncgxyVjop1SG5pkdF74fTesUAt3Du6eXrnFjUga1b3oog",
  "key14": "64JKhjo29LEzGMN5mXhtWKbbq4ZNDSv6EHu6uni73wm7NpZdgfWXosfawENR4whEKkzp8DqSZp8qUSBKR7Zn1nb",
  "key15": "4oTec5iqcKMzEvU3EVrCzBHFXGoFk3gLj6aUKpFfzEQmuf8x8WFSECq43d7sF6AisgNvb54CBEPr9Z49FEEXfHvE",
  "key16": "2PqW89H2LFapHDszH14Eaynf8sKxNr1NPfEiXQwW4ypaoEwuNcGzXJW4BcScisWC3hzrQWuhM3Hgz7JWK3R2kpT4",
  "key17": "4FAzsgQgKd6p6SAzbaxgnKT9f2fWGY1wBVwWHDaTN2MX2RDn8mUC8ySSLvC2Jz6Yc2EkBBvu23WTjkuhxPJN7MHN",
  "key18": "4SFS5ewRgJM9arzUqQNox7PZrnArWupNYYZQrFu4D3MFiQXfrD5xiEgfauBtf53B1g5G8mSfG7eXZELvpoZs7dsj",
  "key19": "2oaubYpzB68mWaWtojfPGLyZfh7WdyLUyjhuVkJKshKJEfr6g7qs4XVy1CL5eshF5rsnJrWzPhFABkdQAsGmC2na",
  "key20": "NC2if9jwE1i3WvsPBZo6Q2R87eUxGk1XPvZau9G2oYHyNRtKckbq5Wfqearziqdd1wYicErUpFGzdxsd9RcmV2S",
  "key21": "5uj35d6qgYPZyiPJpqYmo8fqgXsnQU7HbqGKNaGx5is15daMcqSEYkQDdMSzB8SeTGmA9NubgzMzTnjNB9yu4ni7",
  "key22": "3kYi6Syqie3TkeYreftePmCrBQ6jpTJbmj3DnPxEHg1X5sQxE2k7n1DS9wrn9YKGYosTQq54ono4CcCCJJSDpGog",
  "key23": "BVg1XDhcYxv9FsEDp6eTrW7VDtYVwGediChizvuoTAjEd38osHVfSn6hCUNnDqA6iBC7Nv1CUgT6sH3zXAQ4nFv",
  "key24": "5ZkzWRuneeLU8fq9rWbq8wNFHkLfBSNAYXztPjFsD2W7rWR5zxji7dB3kHT3PAUWSrqgZpHsxEed1zN1jJu2XFmW",
  "key25": "2MCYXc5PhXNwrFeQqRgycf4FaHK8S3f6bYw57FoPLooA1Ha6rMC2PWbSUKqmPdPRGrKVeyAFWeJo2aHc8JVyn3Yj",
  "key26": "54vdfaBnoXzVaMkpcHNnFrBkQKMmVpbZF7EZWreFtkVVePPWZm8dN8bFMx1ACYnFwc2dzgTNAebAQveEo2TxVjNU"
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
