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
    "4YLbzP9V6QDhamNXRb85kU4bkVRECrES2PUUhuxzPWizo977vtD9ghwcfy1KByY8nb7opYvxDxM2fxHfFjCEMj8N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rQkCDFApg86ioUrTe4fCtBSmKeyEripebELoQS2bMmimKa1NHStusnUMZZdEGQ7HHLLQWQmJeuwYWH3c7Q2zRFe",
  "key1": "4GNF8zUHBEZ8g2Se3KCz3DvMZ5UKU5VteEWY5SyB6CbuafZL4gkhBSsNNUbrZrVETwdVHs6HzUdiLYho6pntmALa",
  "key2": "29i4eyWpRiWnnLUuNBFWtxRqNHFQjfHrq5XtudUjKGNsu9yeTCPBgtPVQaQNbnMTF8gWRnaQd8Gys3xNjpMWsTiW",
  "key3": "5zcGhUpUue1LwQDojKXPbPeMUGu78Q8YKyabdS1QwYwVU7goV4Q5xr6VJ6sUU5QFcD4uR4Cp3wY8mdsCN7afHCfn",
  "key4": "383Hy6crpoZYGMtMcPFMbTkgCAjyhfMpVVTspnHXstGanS5K2Hh7Vvhpw37FoUCahfiZkmosmnzfuNKohThqCn75",
  "key5": "2ZjGy29UKqj8e77FqGbShJc6KoCwyq3U6wXyhCdES9Lisy3m2xqURfmSH2EvuJ48vQD3SttDh1WEgz8eJ2FriwkQ",
  "key6": "U1p9zMFss5BRhNPfX4mkBvX92r8sfVDevDYwZf61CLqsyCpP2tvTemjGQ7yxDWdbNKqeqDhtEhArWFBLpTjsN75",
  "key7": "59ywSEZ13Z5pvZ9UYiNoNY1HFW7ESCSgtowYfdbL7KVQvYiR3n96b6RcVMZbADxQC7BkMv2FLtDv6i5PsdBt1Q25",
  "key8": "4ptWhB3PXWWj2vmZeB1gNj4WtFAH1xLs6zt6DXHv6SBUkMLk3wKdaDwp9g8eMvLWgTYSgx7yjZhu9xgWESxQ7t99",
  "key9": "4JDLohzBWaoT4o4DyVCxg93ULJLsAVxyNVUL25FivpE6X76KNte3b6DbQJkrXvNH54kAt6ewdQdcDaX8F1BvgKGi",
  "key10": "vdhPz9jJRjqeA4wKwV8EVkKHBLZwDRDPd9iWReF9prCp2zcTQzKJLM9eFUfBNbz7cWjp5RNcGy5SmRXMgrAVjm9",
  "key11": "2XS5YpgbsSauSih8crBkMvqxS7knWNNFyCzJnChWrB55ZAFPCAerZifQfwcvwfmb7X1NcWfvFJCf25ZBDtpoYALV",
  "key12": "5JUWM9DGrCJnxZSiaNzaPJUTdNPkTLTA6zwv9Nq3inWgS1SJ7zqadixH4cSXboWREx29yAFBBAVwSSzgfxwq93b5",
  "key13": "5pBmsvfEHgpr7qqUfhPvycRe9h3bN4Bw1ahiKFg27c7EQyN3X8j8t65dsvueSbQzfzw1hESn2opSrE6f6rjYFGrQ",
  "key14": "2fsVNBf97a4AELCeWeMYX2dawyc9QmQ1WhJomaBd8mgrAtxmHNzZh8TN9uKmGYqrocP5gGTEKUYY9P7vy4eTW3sC",
  "key15": "47nn3fEwE3poaNa9DaBHveZfNc7qsbX5crM3HvqMwo7f5hecmgfJ2RXwpRHULfMZJ7xwUe9gnfGV3vFXQLAB3Ezh",
  "key16": "fS1DaqCWJ1KaTrvyeWa11wBYXXutf8dEV4hF4uHxH288ajR8F5Ps7riw8idNhbQG7PaSMi1ymzUxwe5v7Yk2yRZ",
  "key17": "4tQKjQ26ZbxHEdiPKPsbjs2k9hKSPCC5PQKZ2TYKfaWe6ujnEdLU9ZmRMCbXueA2SJJqSYGfqcPmWHyKCBw9Chme",
  "key18": "5hgHFWQdRdwE8gnPomoVLPAV5FDe4C1p1g6JDnacVubGtajNzNnR2WrkZkKWMNVT2oGWDxQcVy4wQXFoK7zCs4Ex",
  "key19": "gtwjJF4fvpFDwHxMV8C4U6LcRk8LDnc7tytVmu7gvE9AVUrZvF99iGVWosnUExMhA9tiKpEC9XxxmYpjoQhhk75",
  "key20": "4vjZpYDSX6SFkfXj5SNhPGJQrRbbvRNa37qbrEA1sMsdW1YBx4bcTA9SVRfkAuqEovUH6Hxh389G7kQgqPxNsAK8",
  "key21": "4zt98WZqP9d3MsiRXxs6CcsrYASg26XScbyTJziMqaGxMAmfuDs2Z8ykjtL4PLtGBo9ZENDQvZxvfiP5ctt4uqN2",
  "key22": "5Peui2iVz2mA7J5nd7ttdV5Zg8CwEt1VU3aS3wTzJxCePiEMubDWHJQSdookSB4cazwBQoyMSeuQtMjR7rzu1x9F",
  "key23": "262JUXmFknvch9v9qdeJ27XPHt6YTxRc12j2Y7cpaxU9GE3xFLD3vfswKtQSiDs83MJzJthYFuYADpQgxnpDcSrj",
  "key24": "3FgC7NgvvaoPurCQBq8aYZaCeykLZHKAr1NuviKFd7ghmMVNZByNUsrqt5TE5FcGij8oC7Jd5YzEdj9QYCwgaNK8",
  "key25": "2ZXXrMYaypTP4TUfnikniXeZybGBT8ycouy9Jcicy5qa9EL34WPkn39jJv8Uwf2AU2dU81gDhZFGTuAf5GPUmSav",
  "key26": "AN68mJGNiErGH6emUiGZFgQ383vUbT2oDsv3A1CkK47cxiaPDfY1EpG8oTgPH9X59MAC3G2HeX2jgUeCHfAofra",
  "key27": "4oARtDNuP4yEoZW4Xz44YFCcTP2dmZKd5vLxR9qRSr5q3u5i4zLAyxVxoTEREZUpxpWXgLyvAZeTstF6sqHL2tp",
  "key28": "5WeGWQbNM9P8KahcqdRFM1R4wUsnebtRC9nGARazAFpkaBwUKwWjvJdaipMKD7eU3KjdwccuPSqNPa7b5SLe18Py",
  "key29": "5tAtbw42r1pFk7exm9vxv5vK9gmG3z79Kti6QFXhEeDwRnCVQnsGDF5bX59fsAPLSJVoNCD8gKmb9r34tNY2pPS9",
  "key30": "2ekAqakzYCNj6BRrvQBEccvyxfzGrKbnSbHCdCCju9HXy7Dncf7S9AqdLYg8R2xvCkY18GPHDPfjPsFaVqi9LHh7",
  "key31": "3o5Gd3U82ErpHJJ4LRsUwkHRH2Tqnqnh8SWXG3axnSbjAtny2h2TrSHM9BnTniUsFm67tQmPxRGm8rwBKKTqQ5QN",
  "key32": "4YSknmWwJGBVBPs2MRHzKNbPBjDT68y7vWuy47369kJk59LFUPz8DuPnaqQ53nGjGkp7ntGUaQ6cbpK2ku5CjmPR",
  "key33": "5SDAjrPVe68vCRk4SfB9EQ1H6ePwEwn3v92uggfgGNdPDbMs8emPqQKCPiYJ44j76V8sVSQ2cqrk8EGUbwy3gy7n",
  "key34": "4P6N1z4ktvJq5JcsujdbYJz4FhSqiKnGVTFX2kau2jrPNL9dXivsjNebs93VT8tTNhCstj7DNMDRne1nUypXQs1K",
  "key35": "64wnsHHhnLDYV5s5BWksS8UUWiLdFvEXExWgew1hFdoehaEdiCSHGGPNwy6x49MKepdroBb87ZrHmeFy3A2Gk6Uz",
  "key36": "3VEbrhDsdhU8ysH511rFYbG7RA1NhhJniDhG4HRaZ7oeMdWR4JuttDMWG4RGAz3dCC9WH4U4VH9xfW4Xh4cnD3W5",
  "key37": "573uWSkvbpwXS8eM6pwxjFSXtENszZVnBNWfw7BfS7Bh6nZtkiD4rmbqrLu65LeiPUy7ZpNNYTdZmZdwbGUGiVBi",
  "key38": "p8CiwpSevphgJ1x8AraNH47vmvJ4SqGSCE8PK9qYoA7TKdyJJdvAiEF65CxdGKLPehz7xqzb7FkVYLspxYjiP49",
  "key39": "pBtZ42eR3JqaCSUpWLXtQMteCf1xSetmUAmNiuWyXv9uoYc5dEg9ZCEunCgoVZReQfDQRP4WqM8QrzFSbAT37VS",
  "key40": "3dTn2NV4tYHdVovigrKcyBnXgq5u4VYsZXSA76h49CAhRir7z7gXW9it94QoEPmjAeQYkuB3XEKD6wWzCGnv84dA",
  "key41": "3hzi9Lft7TZ2pxfgNwA4UHneMT8tJEKLzTdQxzJVfrcpmR63nWCjNSHwFvqw6nzAdcQcGcxvpo2aUTcjHc6F16zx",
  "key42": "4hBakmZt6BCFEonaLkAqmZ68YnbvPPNQz72qe7i8JhUb5vksk6WAxsNsC4y2HfA5jkdKJQqcwn8rZDasNjqxZhQT",
  "key43": "3Q5VZXrWPfS7BMe8ceQ6zCfJAQGxJSakDDoJV745hce89ShikQVGrzgg9edA9wtJJmyRnoCaPVD92DLT4FwshGCT",
  "key44": "smiwZXpXLhmy7EHqY8Fc7cx2cJnKV24HcZk3F2jt8NeoNV9bXukZvhp2wnDgm8UYaySn5dZz1jXBJw49TwLz9kN",
  "key45": "5NhffojNyGtgXVXrAT71VPKonG8A4T3doTBRC7dCbQm3zCjy93h9fWSH3Q5WaPvWwyJZi58Qi8NjrTho2Kuyfz1K",
  "key46": "4gxWxqz7rGgswoqiYhmtDkTfmrpBhq3ipuWuNyHmgtjGj4gaEnGjUFkpTWN9GEwaNfBCAQi86MrKj4EHaJnBqY3w",
  "key47": "kawf1QTUfg3LzozBTTGaKegcdNSztsA4AfdDM744yNH6R3ni23RiaakVwVgPk2xiDevm8huuo23EaSAhdT8cn3D",
  "key48": "336rNjW25iWMPpfYbthYFp1WuFtwhaGG8DpDWWYqgCYq8opDky3MVHzuuAPoVdKxyBmK9sjjKzMbLkSmpfmQTtLP"
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
