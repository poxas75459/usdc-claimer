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
    "2VQZrhYasDHHqKEyvmF2hwtT11iFZy5gAm4DkQpXEYhryHdm7f3EvyhPYFfP3NYycSz8sqUwUtQNE5yZjugVHTa4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55oka8bhoZXzJhn8zzE3pfvewLES47c8SvGaWGiEwHVxAAUtkzZtbmSaPA5PqSHD4tZUkMp5Nv4uao7HuZA2Ki8a",
  "key1": "5M4maAphCMYoMTcBsE2qcQoQREkR1YdXnAd7SggZJE7h1YvPXvRP6dv7VAsEk2brPpX5QhoQoT7U6sSRwigWKDBc",
  "key2": "4DDNniRNM4zCnHEh4GELFR3UPa9J9D549oUD9UZ9AhiXhSkb6GU619ZJaDuP6DWX5FS13rVaryy5aY26uXp1fKHV",
  "key3": "4AWf9W2htipWKT9SGXve42jEa2MqNTJZxZ5so686U2atyhYuKQyrqeHCdB8S2oBATgmdTvqQcNfmbyH3ejT7GM9G",
  "key4": "5WRszErQNn39vqjdEHyeZ5VSRCtx1SipLQ9Yec6xt4LEbNZkyqCbwsuZe8ru85Eeuc2yVrAQzhiSGAzQtsEHKYPd",
  "key5": "5dw7kXzRfrrMNEM6dna4YyM5qqo4R5b4X4sHVQejcQcRnX8iuQhLZrnF4SdfKeLqoVY4cMuzwYHmMisqFuxATQ69",
  "key6": "5NqZTznSwCpbhnz9SUoJ9u1QdbJpVspSffsgrswKr8wbMmikraJZwiS7YLUQsiTqSsEXpfpjznBxah3nt12rAEuT",
  "key7": "3LsLLtxGGWraAtactbyKXMrWJzTGa4nvvrYonXXVxzLxuVgE3nu2V5EPpFrKz4DRa7jbpomz3Ts4Qp9dkJunAmzy",
  "key8": "3VtymhUZnSM5psgGt2MPNcdnFdbmewYdnfQW3UQQm5imNWpysq9CvzWMQpCRxkFQGhuVNqZMuixmS6Mn4yVzihyn",
  "key9": "5Y7WYe7597zS9SoCpArLCqSDBfn5satWvZFCBP8pGTztk2QeEcMaW8fiCNEKCFJqr1rqeVGBZmcxoA6aBSw3nC5",
  "key10": "4MZP6kgeCrtgKkMftGWLkftQGaBgmYTPjYEkS2cFWKg52koRz1QewMAsnLNXBzb5uGMMuy7KmuEpvm777cHGzCWV",
  "key11": "mfN8C9VqdQuwzyCyWcbZsAVNpnb9vVYu99yVhq6k8QKxt9ERXxbc4Qj3LbcogeXVvyTCHYETKFgzBJdxxpfwQSr",
  "key12": "3RsqbXmCTGFhm4y9dHC1ChgyBsZnPMhpyTiM89N8TBy12fM6o22hxA4975fxNjKE5S37jUUbzT23FmJXushdfaBB",
  "key13": "2dT6DhrSQidCPVFAYH3deg6FS34QNtSJj2KzcK38PjHhnbUsDGwy16JHStpoQaXVSMHKBvvYtdUhdxUhYZw94afj",
  "key14": "53LoJXN8FJBydYuoMFWUm6ZZ7HD1L7XHNrFfF9wZGS8CbsAD3Ua43VhVq2wJKzdVCNXEY6zrPkrEpzEaJtzvtECU",
  "key15": "4nCwjDo4yJqL9ZGh6aiGAe88g7Br4rgda7tDdsmvuMN8DXXn4H41oGVqoUhEEWGL1zjKGa8peaY59y7pUzu7kkRW",
  "key16": "356PsKAMq7DLRX9QhJyK5TuhLy3WnV6t74CXiwW9LQphbQUaLrdd9d3bCUnyCX4iJHACpqdPJRK8o9QFnnxu5QDX",
  "key17": "2EhcYqtE7FBCaTSEPETFtx9kqAihZyb7f5UfThprok5DWriZqKgPkRYAcY2iKhQhPLWeFqT2uAVFnad7aWAJufU7",
  "key18": "34Me7uuy7nvgR71Ws4abR1EJuR651AaWYafrR3XYKkCRQAvBomrpdZG8sD45qz9MTYcmvycrT5Kx9LwvximnNfu9",
  "key19": "4moZKB3x18bCiL9BYZ4aGDffYo9EAjY5C3RKc431wH4FfX9DsHRwJVZ5eSJbf8cMdr48zBcYviZCXUUc4QaRBwqe",
  "key20": "aLzwBustq2BcoUnMZXARyePGXHwAUP9sAu8SdkKgc9gjYX2g2AZbnVPcMyev622Nhyv6WsaHkKtF6XMXSd5pKWD",
  "key21": "46BiTdDSujkJeq9GwyKh3dfema1ZEgxFvDnr6mZe4y7otnJdeipzZGoVSVAtV3LmRHoZq4CMPg8UkrNtG1sNuA46",
  "key22": "3FpDswv5npCG8mgRMgPPaM8SU8uuBgDhy6k9kxbCEmcu9nbakhNgg2P4X89TMWU6rz5E2V3zvn6KCQhnTrs9FwkF",
  "key23": "3waWx4crzP1JDx9ZwAcS87Dq3wpwMAcc6dCX2BbjJfP33ccXh5kwwQifaZbkU7Qvys8EGHzMwPRoNaY4s7m9FyWd",
  "key24": "5vXPqjqwDXoE44iTUxcX6fhctUxuKefDwPu98FyNw25YfPeRkPZ5nXjxCDKdEXXMvE7rNULJ4F7DJMrETUwmBgqk",
  "key25": "2WuDQCFkmCBaP9sUsqUdTk3bPyHmLLETRDyUjifrBjcjRoqq5RaVFzzXmM3Xxs4TqVQx8dR6YSF8ZYFnz2wV7yK7",
  "key26": "4iomiT3UwVJYgq5tveSuTTvuHk1UziHGQhi8qNSmReM68RrVBpmzzmDpgnqV8raxbBnQSyXp9EhAqu67JdCf81YH",
  "key27": "26L96XYiqCYrA6PikkzgEctjL1uVbvYxUNk8Z7cy8S47prCEhGvLxM9moHkd7ty5UjozGsyUUnyPrwb7LWVAYasc",
  "key28": "RKmvu187ep2voKfMvNgWyECjrY5vvGCdvLpWAQoMnE5MjDrfV2fYAcMXYPuY82ouFpQPqZF4M3rTeJ5nr76NBQh",
  "key29": "LLQ3MLyWxoNQWYgQkhrFcUwvmUbH8jQd8qoCPzYmcYLfkYZbxcmzy4X2yw9cWx2u6GWE3vPN5sDgN1LufWYHXPD",
  "key30": "4YBgM1mBMyXGcccf2Xd4asVyu9Ke8f5htz7Q1XfNjhukReDHk6qLi6QULghnVVTAhfkK9MzhZ6CRyYkGHJbpU8NR",
  "key31": "2k2KryhAzmdPqLkid4qwsCgrmLVofaU36hsTdDrPhmAFP9DFGeGuivFoy1uTTmsQLXd1ULriqpuysiFEnCzGLUVP",
  "key32": "57pG4qzjh1S8JprdRKLojaHHS94ctyRzv4Mg8CSzpHXuYsyA2QjVM4NHCAgJuhW8TxhCX8kWLj8n42KD8UxLq1mU",
  "key33": "4naGN3PRx7PDdmWmmuwbUAbKUn4jpguURnzTmG5o4FPyqeJjEgs2KTLJiR1beSNHnZXL3tpmLJof7y8C3UjMH17d",
  "key34": "64RRX81rJYJ9UWSHyY7v1qrFsECKA4vQyEr74dsZbRZzixTRgyPWSagk35FVUjBhwCy4rci7WZvbKf9HMKJ5h7UP",
  "key35": "3VhLqTBPXtf3ps3V194nWGTLAGH7L4GKPHApo8oEoey4BDGPDWEtM7f3jMbWZhjoosoxv1sY7mAypXpFSfPd96vs",
  "key36": "2MkgiWJuMvUexavpru5AakPr4Uqv5mAzifNXskC3uUogY3hypTBptd5q6FbstoX9QT9LhfjLEvNPmeFTJqVmDjCG",
  "key37": "6swbHR67cHtf7t19xGUUHvMKciieHDr5b1jMC73iAtM2HeRbES46J4SCmA9zJHoS4RWdRbXgXrV268vzgnFbA2D",
  "key38": "5ecEd9Si8sBZktGre7C3H8oqyHJf9GCTsKgr3TL2o1PGsA4ghkRyHa15DBL8emqVgmpr3u62TrtMvkaB8UiHxQaK"
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
