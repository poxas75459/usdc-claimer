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
    "3Qri46FJCtwb5ZksSQKsx4mKKWx1vaVSeMbuxJfqa4eeLQC8v29xovqfS2mExfqdcDZ3ADivs5SigWjsBtYdHXHN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pWnSCxQJugWFmoCZCHK7g9bqGdXYXiJae7Hxo1ceR9S7PSRDrNKxaUZFWvh99oxUukiB4Bcm2t8zg5j7CK2ojTw",
  "key1": "3Bak8nAtgBoMReunH3nBhvPkXewDYJax1bRb5AJXSWkeCXvmt2ciQV4ZeE8wKP9oN5Xwy6ohdKAdoq2JGt584GEC",
  "key2": "5RuLwzbR8N53nmwm72Vh2NrUrfygJEuVFns1XHSQz9Wht8khXb5SqV1U1v6QchJHdb35WcoRQknGqpYT9XUnzNfZ",
  "key3": "5K33E45hZeUFogheViMi8gEBKSYqDbWs6uWeuwt6e1YgGHds2uSJZA7R9T3yZ91zkcmLrqDuQ8PREudnZVUE9J1h",
  "key4": "3DpvCjTt7TDiN96gA7BFa26ZCoqMzn35mdmsJNcaAJCnKimpMgxnE51coQa8gtoishG3bnqoqv9JJSLwo1wjm2pU",
  "key5": "5PjV8usCaS99X4RXY7N81EqtVRsynBuPDLiBZdn1FgWoa3gFGY4vDunM66cZzFsGcaLfmgBoPgDspXSsfNQ9eL2d",
  "key6": "2NHByUkStrzQr6BzgF9FtueuJSfsuPmeMaJBXSp7ScKTwfCS3DTceHH9YgGmo7ZMdgrq7ezupKiGQGCfX2rS4i2y",
  "key7": "4aSYpb85GMaZexizskBVAUcQmLFBFzQT5sLvD8VbaRrop2Q6GD77So6gv1fZLw9dqwoeDezdCq7MLUUHgQNffJZz",
  "key8": "2nWFgDamyx5f3oRx8b6jZFLTTW6UdNzjRVhpkqQkV62CHbZAMTPxsgw5P2945fzF8koDzAZ9KdZhYw7kvX7vLieW",
  "key9": "kArGtGe6fEFMSjoMEWS4CG2mioiZM8RsgNsRYroyL7T1ECrwWMpoEhCnBeto6BTqdfiAUqtCUF42KmFkMECLtcY",
  "key10": "R9CNv9qZz4XKjcU5qAJgDsG1EeptkKq4vtzNtiGPYDJ5TTxq7iAshoGtS9WJgeqCxyEQty3ZhWs5WxtVJUsyjWv",
  "key11": "2NVCXUMBs8fsmbRmRbwsNK3Vxue9gf5cSNL5E2md2fXji3uJr45SrmLNW6KUo393ZhAwK95HdtBhFSeG61Y32HmZ",
  "key12": "3Bs9GogwERXR5gLYQpsquYF3bDNHTUZyPP6ACZGWGUDeFTRhbEXh9N9tJTXAVzXvt4UfB1HcYMDz8d7xgAa7xZen",
  "key13": "3WVW4tA7t6pTiQJ7K8QKiybxbj1sjSK5qtS7qPH1ZSZqNt9aKLEup6yAKiP4jTYAka3KUQzWmw2XHR6yzX98j7SY",
  "key14": "2iEzCSLCoYw8EfiVkDoaWx1WnJiP3JdpLtTUdxDTzZtwDU6n1H3gAUsLDRD42GydCs1D2KtWHsh8iAraVQV7kGKM",
  "key15": "4BnbuExq1huMSUeQpvKMuAMSkokXxWamxGQun8sYaoGJNuw5WUuwxP1svcQTxgvvQ7z55HoqgvbEQZmN816qGuTm",
  "key16": "38GWkrkApJ5YqKHfuMW3azab5ZLozj9yCnTyP2vMfEbQpZzDL5R3q4Dp1Uz7KqDsxX8ZBsP2wGvqjPVaaYVMbXjG",
  "key17": "4AyyTYAqQTJnEB8mQ2svkYEDmuK9fTDg3xvo2k5tw95pSqGofgfuM5e2yBo3Qd3K2xDBKhwjjxp58FqA6Qj5oFio",
  "key18": "5c2iDGSqS4Sa1qEac5uaZcDN1bs3R2Zz2bDvE4RPvezsD6sFK2BB1ZRSQAAXdZMc7KTRjZebUXLu5CzmiVLtX7hP",
  "key19": "4mKcygg4XmJ4Sm6yh7hdW33FoGL3wAiVbZMQznG6nwFVAtf9cUjgcxJR4hXcWFgWzeuTL14hbSiAkRJVS5HSstqs",
  "key20": "4rce3h8EpwPUncbmyFwwQ62ByDEFZ3jL7sGQGWUDs9MexvZVPGMqLW1cHpe2dDAF1jmziXtBDuh2RFwwngz9PdPg",
  "key21": "4sAgrm6HvgeoK6WA3df4hbJw4M5iFRw4uZGGsz3JXwzDEnf3Mehme4SKf915uhuf7UUvio7MXSCiop7zhzjanPZG",
  "key22": "5LPmXiiDwKCFjacN1y3xToZrgmcyNYLbfyf9iCtZCA7mBPCeMX5JfajqtjBaNwKoueYyFhgLYYDAaabp5RvWxiwC",
  "key23": "2ZeW94WSysjANry54SHoT3sTRqtyh3cV3ucmtcUWtBY5aZLwxkY8X8iiGp8sctH8DSbYL9aks1tqpZSmAmAL86oW",
  "key24": "5mR1Jvc6eK4YmRENhCiD3aEZMr7PTszQ6Ni3ZYn3K8s1XeyGdwaSw83XbScwafGKnYmcqC8Qx8DKvz9XZa293Ne2",
  "key25": "3m8tjvNAPeoFKcsKRAUzEWCveEcLMecjVjHmxkau64g9cz2XD1nM4hkNrrxbYuSP8HtkVJoSc4H4jDiXBRoLRXfF",
  "key26": "3nGLSaQ5tDNJiwzwtmNc9JV7Z8GkJwPKAe9WVtHnXuXPUHwcJ9mcY2U75TUMPXf2A7ZD5MRSsyaHHG4mj1uq7Gf5",
  "key27": "4hMA3pSaBVtquhTgDvbq4YxWtqZ55kyN1qDhPV1yejRLouMwtkw9XiZiUB9ViAt63BVVTQ5AzjzRPnQ7Xzp7mj4Z",
  "key28": "5GzdDoczu9JP5xMqiRxYhvC4t5hgr1ee6WkpByfJ9wdQhjVerDLpNneQno9QjoHL11Php3faFowqXxw7nafLG6tW",
  "key29": "5djsemx9xMFXa4qP3E4b7cHRJZ7eehdVVS3pJPeUnfPoRBmP8BEWpc9V3NRF7Jx88VAwwe8J1cgKz5DvDd13oGE3",
  "key30": "94XRrG6rt8mAZo5LUzxZjxQQjwYm86cLPNFCd4kwuL2ojX9udkk5KLkaaW5gtF4wtouH65mtT9LtLhfJJNbqyma",
  "key31": "3Zwerf2SH8VGe1eUKgtufiwfAUAojdznyqCxxeHzvVthpmvNbxZAuf1EM9Pjo6JJEmy1HY1EPJ8xKXYFemWHE3HB",
  "key32": "4X8sWjEfTKP8Fa5gid2rDYSyz3rAxRtLs96U3KmiPdX7BeJ8DS1STgkGyfi6jJME8GyWeGjG8rvAajqMm975JccJ",
  "key33": "KRSMsnCjFS6ZoeyqGPCcjJiCuTWXzg9aUone8eUWWWfkwgYF5x2cdZ2H7X3Np14LNFBmo4F3RoEwB4m3cKhLmkQ",
  "key34": "KqkPrMP4c6H1v1XpSPn9Gd1aZFu2EevZTePxyLr3TWNrDBew4eaE9etrgKFwUE6K8qe2ZdbVD3mUeQHcYoFGkpz",
  "key35": "2bv2aAp4N38NzvzeHeArYrQobkSuCo625CZ2f1PQZw94Q4M7F1XPzd5dTN96LiqHUKa9xZXnTuUSF63Dym46UE7n",
  "key36": "4EHaEVQxRT6TgUqKK5djf6yMrjnmbq4n2uRCEdf5Jh6NMZKXGnuq8NhVGLWbyfzUyq2Rm1kC5nN7DwxfmCyQLDuN",
  "key37": "4VThnTkdstVBqp4ASDeEpLv8Nj5r4nntFybufwAi81iB6E9kVo4jLh211YqjiYgsNwzzKepoVXYK8fd8VzDHfSnt",
  "key38": "53LU6byXZAsJvWqdPaGgv4aLVoPzmKgrpwJbf332YGMNp1gvQ4nqe1CwW4FXjJcbZqNvJwbjESwek5Bnh2LLcVkz",
  "key39": "4Ro8LdREjtTC8beC9zmVfiAFxLphJFKFtmJx2tnZQHriigp6ar4mRnjahYfYf11iGuR1vj67ZLoc6QW7hicL6qP",
  "key40": "2zyLMJANKtd8rCgrzMXXxK4QUq5PAEPty9jv8m1r6aq3FwKVXEYiw9YBphJ1tHoTF5P5BJsUZU3BmUjKvWz2Gj94",
  "key41": "2KthhzYdbex1effVuxoRU3PkV6ia1ZJ5aFU4B6k6GBwpcZ9mcGitmyRZC2Jm4PrXJDmB5k3S9KgBWJLSSErcgnzW",
  "key42": "4ykteAm33uoBJNRU8VR7eBhVV8tfsD83ayphq2MdZx3pfRhDGem8wWrwFapEDExrQyKxLEe4DNXBHrFkMWneij9x",
  "key43": "3rtahZbExMqq97hpJ8GtNfrEGAtZL8fcUo6H1R6sdh1sYoTabtKK7dCjDhy4e175njxcT2DkHy6WQPWi1P6z6jYG",
  "key44": "3WQoQ7Rb9o22G7RjGBcLFj2Po4AQKPi6VZyFXPoxmSi2Rc17LMJ4Ci27i71B41wkEdkFRgk4JFGwV7C9ut1xzvmV",
  "key45": "5RtrrDfUB3vLGuSiUyinJhq4sG3kC4G6epoe9vuqJrCi4eYuypPbHmrbks2dvRyRPXgTV2ueQXmQmcrV26Cnz3Uc"
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
