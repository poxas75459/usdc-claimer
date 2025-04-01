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
    "4pQAJnVZMDw4rbv8gwVsrcuiFcJYBAVA9ubt6a55eic9WGHWhZQjdKi3pxAgo3GbxgzELafdcfQRoosQxRuF9vEs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44X8afcpPDK25f3McdxBp5uBjjJeZrDSZ5hVcyg3TRrykNUc7Kjdi6pjEnbkS9UxKihuKKWATAZ21atqywQRA8Zg",
  "key1": "3GLX4BJ8ocdHqA8mwEfe5s5hgQ9GSLGi55gvEaLi7ruJibPYEByVcikoLFMuMmsCQztCdKGFuaVizTexJ9ZAJ5J9",
  "key2": "21Ye7BpjfdhswzFv97Vtig59MsY58AbaWKonhiu9Wtz7L28Tnt8RBbMvaZv35r5jfqG6ggW2akH14EvWcnwoKD9P",
  "key3": "3EPY3rASxza8rUEa4H88URR1cZryW56dyb3dTH28NHtRSRVfJ5qjY5nTSLdZG6USkRYom8A384QWuhB1PLE2bvoZ",
  "key4": "3uVVXRpjRrVU8aPF5pthnwk6QNMYGtpH7gXjSr4VDFhqK852FepPe75XddSiq9cPv3nvqd3eKNwMdpehreAqA2m6",
  "key5": "2ANvu5TFqrNCZecb68XH12B3R8z4z71zsbuuL8oqxgoVJGgn9nkKXhat3CgwdnASUs9sBY5D79UnBN4kHRkKS67M",
  "key6": "3DHmVLDdFaWAGumVhVCPNRzCWfyqzxWfQnyPmBxMPGH9HZ2SYNy66u5w39rfLgMunn38LXMVskTJyW4y4HxXbPZ6",
  "key7": "5v6ZthsLEXzjHw8FTaoBDbX7jdMXiN1YisMF3rgjQ8KXn9QuRvFNhvrGPZJWamwugDGm5TyCY6J4fW4FzK9NSRr5",
  "key8": "45qicadRDqYN9RRF11gF596ULX8LAKrJ6EauoR8MjKgHegxQ9NDih1mxGsUnsMLLuGmbWL7jNVmmRCY6onUuTbJz",
  "key9": "5dKLxDmCqxdgh1tyQN2dx75YqepK9WYkeTd71vrN8Z4EPsTUrM5Ge8gwkDD91pWKCxrffYVgjYBhFgziCzCaPLnC",
  "key10": "5r6io3d8rMpYrEf3g8kSHHncU1SqRrcVkZNyYHb8yYvFiXsC2RTMqitxoiqRkqm1bF7tJQbcuHtVqwg9gWrWjdDA",
  "key11": "5ifPbmhPfeHzhEk1hEH7w2aEasgEVia9DcNh7sxFWbxKGku91aV4TsaEvXbnoAe9GPuqLmtKDPArEEkJ3yL9YvSy",
  "key12": "3qhb5wJbRTQQtVqAWVjVx7MiP8K5eAaq9qqC3SvMPbL2n6j4uSqUsSDmbes6BZmLAiquUqmPb1mEhsBfJgSMLupx",
  "key13": "24pSPPtiw2tzL8UuynZfa6aeG4QGKsGQ3NcHdBrHNTd52zjFctJfgo4RX6tG9vuqaangjo7TDmQ6JPxxMhr6ptac",
  "key14": "62GxHu4X26UjqCkaQYH2WUTB7fmK92JFvgNfV34bZoK7dmtG845fAGuLSTiQZmYaREQw4z1khFj4Kp48HoKka42F",
  "key15": "4GkEhSFZUQ4y3LEKzyTz6mzGet2hCyJQybaJXRS7iQ8y7qD7XJfAtnBsJZH7EVbyiytesk9mfvqoAod47Yk9TfFX",
  "key16": "5fm3yH5BiGHJCy5XGtw3xhehsGosbfqBA2wHB6oMZCerByyzcc7SoKx7Zsz9mMAjmhQyr67stMr4Me2MvRqgriVg",
  "key17": "4QP3CBrUF6VH3wEhrP9dHqmfS5o7TNEYMXE5XzFKAPawQ5VWcbXsZASFEgHRUVaLP996xb1kPUwFXD5cU8ntjbdt",
  "key18": "45nvVgmBqbBYx6zKq66GUe2urBYGx4nr5JE1qJKh3hvttHdo2knsb7uXiexMRhySjkrGtPVLnXykUN2gxsnkrB2E",
  "key19": "3gATdacJWUC4KdLNd6kw6yF7vi4ZtcdS9Xpim5uU3zLjCeBbXB4EaLGwuQJdSNHB8pLsRUQyhC4neDfLXLM3KaWc",
  "key20": "2JizK8ywMQ2kNMeNU5tRHYLEgsVAa4RzhFsF2W5EsdjW49GzuSj9LtneyUgT3Nnz9WETXmaJc7rDb3Pt7GjNDim9",
  "key21": "3i8d49LRNkYnc11M4rDberBNpuSvcosQMAP7PRxK7neuNLPnByyGedVww8ZY1pofRQAojkEkrk6H9gfL8uSRgSpF",
  "key22": "3ax8oAy7jiPg92MQLLzwQCXp119Cjhzc35Tn5ycyoqbYzEyznwZKTTyLJxdkkHPeUpiFZtAmxgsopLLwysS9og8k",
  "key23": "54AnvvDDNKUGrAgFUdQ13C4vq81nkSPFaCmJ6WgcyoadneocnTucHQ2pLtMXgedjUM3ufMTexqrPvUm8U33m88LP",
  "key24": "47QuxTZrUTcHhxvVLyKeS4CnwFvNU6whxmsz7LdHzCD4HaDHEBftAqsWVCeQEfHnECHUwSgjGakpdYacao8HbRNu",
  "key25": "67XtwDr3bJ2tzd1kpWJBdTMdxGBsi6YNmHY6wRqJCq5tXLWcg4VFdckYshcJNBaHbzymF3mDj2whe3RXHKv3Zbty",
  "key26": "3VcpXiRJeodG6tNuiqeEPD8BiHVqZr4PjDD8CHtbDBN3q5hBt515Ue9D9SoNH2Qvsw6W4qaXYVpwDVZpMzBX8YPW",
  "key27": "2WHocNn5zgAEjnqK6H15SvAGVjqYtXScTwWPJ4UZhrAK9pUCSV4JjyXHCwABpDuYMTrXKGbqiPvCBSJHuWBqAh7R",
  "key28": "4FrpEtXnzjrL5iURfDxmsbh3yJHcQnq2p8bFdXxeJfgbQeKaxjg2zomhwifM3G5xxKLPDZx57WewYiTiuHgbjvFQ",
  "key29": "4Efd5qg6butTTZ8suxaLJ5rSqAQcJHHqrezXvg69iyjA3ypTZTwyLNJaHWdtpz1pYVyg9nojBmMqEvosejqwsUxe",
  "key30": "47VdRgR5xsgHFfvS9NXvCUTn2Y1vcBEEWbvNCrbp36FZ3XR6MC61nTSHn8zHJur3DWrVurQUXvBVqZfYFT1EG7Yh",
  "key31": "4c8mGdqsDqbRHqchAEVxBLuwh7j4qvZsbn6UHV2fRWtRuymnDSx4aESHkJyv3UeyYW3ivfo4F4r3mJAc7R2ZtwuW",
  "key32": "2Gt8Z9F2rinLAdj9UU2sF6DzEDrfYbUouzimCmCbshB2iTFS3mKXg47QoxvRgWhQE4mBJpH1W6GcC6TuUEUSArmu"
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
