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
    "aDC5KFH9M1BPqrY6oxx2gsjzmPVB1Vgh1qn3EboFFVtsDiR26EcDCT5VYUxNGfap2qkEPy5HkuVzYqrgLaxi3z6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bzkTs7vs9bMSLpdQvF2tbqm5WMToWDyhLo6K2DCpAeGz5xFSacbJqUUpKxh4Up4eDiXxFzk5pH7ZAzms9TNTSYV",
  "key1": "akoyxhofsQa9HLkrNZXcbBYxaMfq6gA5wkHYuZQDSFdkmgkSgKfYvHjDSxg9K6BPCSkf2y8JYEBHth9U4MoLGcR",
  "key2": "3u69D1gNqB4pJy16FyoVZVUCxYRbm4LVpgDtDDtVjuH8VFef2TXykypcRZ4SukN6KoVnU7ouZAQuAhAcpvvqrwZn",
  "key3": "457Uy1PZGURrrBTd9TzUTsWPL2NKuEh4aK5Lgd3cpFt4yANZAoNvjgAEjPt9qYPzsVtScKPXbXh4M5yYSB2BmXFf",
  "key4": "5LvthnM1tRgcE7DdXeXn8Q5Ab6Ro3Dy3H5HmnMAw9gyz9Gk5dcMdvu68Qu7tbGsBkUbyTMyCDbTYw2G42qsMhccY",
  "key5": "2YKYJZoKzN2KwzXbyeyvdmKjnNzmx3Vo8oEkJLCie2sq3h3d4cNABgnJdxutQWYX5mZYBhN5EpojzE99MxXRxt8V",
  "key6": "2A5KstzAQSS7wUNEnSVn1PHCZdwY12aBc6QMJbwHk1VKwysEjiAKchAKASQjDDCnQeaKWLu96VVbFscFmgZpMqhV",
  "key7": "3FFffivJyBR43p8sn1iCL9K7KZPX8WjvH8N2wv1mVkPzjpPfMzc1nZqF9GLXLMYFZzbBxjmZCXUZZ4hMRyTJF1cC",
  "key8": "3twESfQpnT5eqVF73if6k4eUmgd5ivaVQbrmhNx4PkpFFh8NfwjPY3oC9bEmt7cxiVkJ3Y6KgyVthyNXsretBqYZ",
  "key9": "FUBAh5w5VN5i96Uv7A7EzHAYp9maRCCXLVKuF5QxuFbNHML8amCtXZpPrHjRmpG2xzoNUGdsDe6kthwSQNer6xy",
  "key10": "5CMB99XQPaMxc2a9DYLW8btDuC4rv9H24Gcwt4v3J73r57B7HPjhPyZf3X1PQNG8LN9kxXUEPani96mN392c6a6q",
  "key11": "QDUvVPV6yPMsnzPf5B8q6dPeN3kM3ePRgGY7gpCcoDNi3V18Eujc1RW5RwfgJdZmfxD7S5BTnoq2DrrnurSueU3",
  "key12": "5RRaN3DaDLEbujA2DpoKq1CyQL3cbLnh54TgZQ6wJ5eXwh2QhfKtXZShn5vy6fAkhwS7ZJK4iNVe9iTEC9e5bzAz",
  "key13": "2cE2cs1Wcy92j9NP4yTJex7xkmADhSPQ2WHHDE51jFvp76pHAC9xMZ1pjPjYY1NGraq6LnDkmCfFYfXHyF5gaqTS",
  "key14": "3DUAZHgA2wCJsaweJJLB5AgBM3b1dMwZ45jrjRjbPEDvFCEY7wbFTqJ32V8r5HfWGjsFosu8xZbiEegUtCg8TkT6",
  "key15": "5cR22eaVQJSYtP6HFxqBY6WM2dGRhUWRTFzqyC2JLHXRoMV3MpR3G3r1paW8Y9kM53CRjQAvZV9AeF9gf9d4xdgK",
  "key16": "oZCN8R7xkN4NYdXnjFLEeDLPhJa9EARQGZpwQydrr8TGgwP2xuFFCrTGvf4vH6XrqRVNJFuprZQvvLFbMbywebV",
  "key17": "5zFBLxitKGV2SynftGjgfYpi9FVUVCDHpWcpSDeEYETtsKt3Z9iGi45fdRqhRoezYbgGHxkUCLdp9cGWfV5UPy5A",
  "key18": "4PZbpXoT76mYAjXg4qhURFkkWS68AKipj11i9cdqVBfahkKPqsve1NJ1YA1mF8v9dU81tWX9RmSHh5dptdiEbLTY",
  "key19": "4Tkk48QwTRx6JWy8wQiLj38cfyaiJfTw9qM3KgzQVDRyg4HSi9SvgGXrhQh85Amnid6qva8rWqpvxSVwpkgK3rpa",
  "key20": "qrd6pkiRYt1DKKRCSKoPX6CP4Ysb8bNaMuWdJe3xNNnUT4cQEux1DvEFXfPkFmBo1tJ5xdy1PMiKZrpR4gz9FYJ",
  "key21": "3uMPS87cnzrJjPNkeNXW27m8LroskwRLuS4XMAXgJetRvuXByBjzm42Fv3dqJ6bJarYEdGaPsFi7xHt6o8c7Ha1W",
  "key22": "5eSkj5SE5iHXJdi8cE8ifV6jfPNtn1YYe3PfzSfcFcxC1AwU4j57B9Hm989Yg1q47MqvdgrpuUwGynRURjZL5uWJ",
  "key23": "2XN2RGxPMR7vEB2RJmMvXuAw4BtXhfLEaqx7GbpRcVFRckc9HtN4XiNcwM4KsShqGsbudYG2bpMBdvUwLTAEU3FZ",
  "key24": "2NShzjv2yv6PtFPgz4CzX6qyq6Zb1doeeKHS5eya2P7Ztfzqu7YB2byWeUr5vFF58sgtzEAYQq8vVUkt459ZaueR",
  "key25": "56abkYcsfgmLfVmK4Z2CzsWgWyoCp6dj5fueSHFkkujR3uF3Z5ygDCqVvdSP3cHdcHb24GtZAyHwimAZCR7MEiQ3",
  "key26": "4HAqeP8nFfJNra475okPYBX5n2nyAm7u9P18EfFma2s1C8c8XqMY5CnzKpgWFSAnb7516csUGvBjphZCpkPvYtTR",
  "key27": "FiX5DMCHJXnXrbP6o9yr3s2ZYhLwSuRBf6JFhTswbitpmZtUGa2QhNd2MHxNA7uWaq5BGrj4uz3MfujEFk9Yno8",
  "key28": "5TahaYep93zVWJdj84hxCNV57y2FkAQJDroeG3RadcYdSiyFY7GPvaABNKL5zGxvAqZWkanr3rLhhxhwDRX55KNM",
  "key29": "M9uygjnNms8yMCV19CtLikR8FzywoXFWaLBKir3RZHA3utYf4YxARQEWfRrkF9LEccWA5sexWUY3gkUjzU7EL4z",
  "key30": "2oTGFrB6GKKTt4WekWunz5WwX3csrBZD6xc5Dnuonc9CXcS4YrZo68ovRBuqgCSt7SSkKPnkt8EtnLWsgEjPAuXZ",
  "key31": "6qCvmXYZ461YpduBQMas5ttKEBxRdb8zCTnR818cK8DJcAvc1V37p2fTuB6keDMbxdmik9zcJhZGxVohA16xGvq",
  "key32": "5hHtsieD4ieEEsLwetDqdcZmPyHkCcsReeonhNqx2FxTTss2JUH5JRR7Cr33fU3aREFWC4RQPuYGiEE8E8cd9LrG",
  "key33": "4gVJooErMx1bysS9exHQE4nkock2RpqhfvKbrAPAK1UACceejWXoARKCGL7k5tYtuynRqGs6DaGP4vXQgqTQY4fk",
  "key34": "2639rgPFbJzQuzZLfJHSSM8cW2wtGk1qqgFBtZhcY2hvSDqqDonBJPjzYc3sBKK3D9xm9tUGjC2QB4oAcgnWTAcZ",
  "key35": "2qZSHmR5HPHTtouHkNddLBPpfwgXGwTYvXqcx6jG55So6ZukTDAEHi86EKS7TrADRXDJBFxNGJEqKN3aTHsT8nCB",
  "key36": "5TRkdGi53ZauurevG2EfKZZY2MzbqWT9ycDdQQDzNLkeFXq97nJ7s3nkaHR6eVyqj7zTPAzCmuWFmNKZWRUeueGq"
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
