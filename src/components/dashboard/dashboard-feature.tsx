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
    "4NNVerWmv3CKRS9EsbAJ61ZpJSMDoky3CbJCwSzhCzvrVa1MPntcrwZ24zug11HpDLiSwYaKuiR9rNKDoUVUGaWv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MXvyUwaieacEyDYCVv4DHZUTyFM97SvTuXL2dsooyCwrGFKrQfGUgcanqM2dLeECCB6C7SCujzXYFDUhK4BAA2v",
  "key1": "2BRSEXbWjyxY83K2KQzqnaJ9HqPsRA9Lx591m7VVbcM6N8SXPQ8nnWHV7py6qzfDqSNdPTKAKEVcvPHM4ycCHsmA",
  "key2": "FEQtUcFsUkDb4s7ThWpAHEFs5AH1VyBDxBqYzTr5uWJMQ5dJFckpP5kD2rkcCdSre6RTw5ZDuL89bRoMtbpoTPx",
  "key3": "2NJ5yVnzXuPyHb8YfpkuQpijUdPfUxehDkp5mpwyTXXGkS3VFNZLVAJTVV4tcxmCogkyBXcWKPBfDFo1ZikpGVsc",
  "key4": "DCqicgN1RqS1JeaGyjWWxcjVZfgpLtsp2djQTZ6eN5PhjCkjn9kQyQM1edvn1MuMzPXcZTNr4cgfke5Xoh5wK8F",
  "key5": "39ys8CN225aMRSVpANrxMX9seSemy8SLsvqKK2D4P1xppxXQ8vWnGrZL3V5WXxAoRTdfhySSiKRcbFakRqZJihn2",
  "key6": "35oiEGhqn9oyGXMBQvTimJUFGkL4eMoR5KVyHvYbRXk1ZUt4zRmayDERinrN8AVje7p3xcaF6hUVdi9eu6Gd1U5J",
  "key7": "PBkmgXg9bCuEFUvR9mR7bmq1GEoNNi9ERaqNN73EFz1q1eaqoAwgbmQ9TVpoaLZYfHvczRB2rAyyp7r4TZEUbQZ",
  "key8": "3qBiBngBoindTdauNnt4McFXnpNk9z5CftTFn7amz43kFeZZKSmrELP2MuH6U1dDuD6XR1rxm6Tox35LZG9wCTT5",
  "key9": "3HDHbT6GVdPt3KXvgTjXZn99Zb5hPFH9CrPwZf3H7JPsz1Aag69RZXgL49MdCcWkt5YE5aEb8VeU6Va9uwSB3guD",
  "key10": "5aL8iCGvyPJQPcA2vKHTLqDt8BxW4pFakzoAJBoSaTY2XyY8tZWwd2hmc7opA22zunXTBLq6CLLxqeUwKmR2cwqp",
  "key11": "4rgCFuAcwuhZWEEmNT6e9nJdMWcjiMpAbwBo9arYo1aEgrcbXsjWrpdQGY8XDu6TvWjgP5nHbGFPWdSHKBbcJhAE",
  "key12": "rxJUPSG4RCi23mHbGgC7bmmmB6zqgj26ydDy3xJ2p63ixs28Boppd5DKXZ8fZNKFrvbiu5rhks3Xp3sMfYvJcTB",
  "key13": "4CNSqo3Y7zHqFe1gT6NkkPsMV7FCszVVm6HY2pH1VEjDAKdHdJqGkanymYgcYA4jLVSyApW6mfY6SGvknrk6gJ8M",
  "key14": "2bjhCPsesY2YF1AMvpZw1w2snXKgFRWEboJ2eNguazxEbGxqUWtCqqQ66MuJwKdDUPJunobyd4SnHH5bWDwjkRB4",
  "key15": "76oPLGbULkKdWMh6HLsMo1a4nTsShJB1bdzrjrBn15ofn42aygoxMTyTa6KE3VPnf1yVp2WH7NGxpjQeuxcM8dE",
  "key16": "Kw1SvePvyShhcDDNgsHbWHm3jTPNtRyCtM6g5AUs3ZKsYmmEQ4NwEqNEJKkzGuH5fAqcptanP5f5imPiWCAqFu8",
  "key17": "4rCnFWhzyRvR1dJKyTuS5GCDAGp1uSsVN9t52rkq6NZKmGkzuN47JzNNzLbBScJUduLbcmbi2zuMRRJFUGqvQpMc",
  "key18": "3i8eFDq8zabAxHZLR9sR8NsgCyx2JKhEDJEEsR6oq3KqFkixRqSkMsqNcbM3FN1bE9PNjgRdnMDCUvzFQEbMjCF9",
  "key19": "49H71faQ3MMrAB7xGfCcN32bqJdSbqwvoE6qixA274ozrLpQCUGuPKmEWmGT8QKCuAcdDXejmX8gZy8oVi6JkPbP",
  "key20": "3ZtkApF5KacoKTaCaDGKzbXCieVs7iybB1PD2w8xsJ9MN4DvhBW6z5TGWDQ6GaoxPgbj9cJEah9axiYcTLzKnciT",
  "key21": "5zdueBaR87jwyLqmuMVrwqqfvvcyDMjkV9NAfeMCSMqJgtLmDvGK4CF26acPySCM4VHi36DB8ddgxDZZtqiwF5LZ",
  "key22": "mMFpCCik5tEwoxJxxQ6vQwYKaD5RcNz9EkyXL5wmTuoSszgcuh8ymy7WEY4PjHYYASEoUSsx1wJ94RDj1gs8wmc",
  "key23": "2629t87paRHBWtyUhArJA9Q8z4sxN5mNJzJp5qWE3VJC3bzjFm6asg2FSFffm2fFS1Gw8bWM3dbyEtyYHgCxUsWL",
  "key24": "2c7fj1pwKoAKmxxsEFkiGUs4E1pkwGUfo4udtzfVvL4keaNscZGvTLqh4nsBeg7RzJNHBTS23Qb9ZzpNiHMqSkTp",
  "key25": "2n8PK11VMf2Rqgt1nJJnDJZoHzYHEx6DQnQxhFNrrnen8sMAihMJiykioq5injntfo1rb4iYJnUfRhHGvsCirUi4",
  "key26": "2PZYKwahCyoigp1aSj6u2PG1ps6AjHLHy9RjS7BokhrYYVrM1UbXuBC8gSo9moXypLYqN3MtKbdqrPx56iaohZdw",
  "key27": "ZZVTaswYRSiKUHzvVMWegXupsSG7MLF5AMqQmnFjDfwAV9hCXE95npkgZnUsXCzoL3p2DnuPhZXzgFAPTANPrpK",
  "key28": "2XPustv4StgCAxh3JN8ire9BRmsSftDBm2TbioekAEuicXVAkpKZGf5MAZBxkXMTZ9pQRLaz2cvXK3WqHNMXSAnz",
  "key29": "64VvSpAQ69pczzAZ3p5T2YxjCN48s1DkVTHeTZ3sLV4mA9fsUXxV4718HLPinScV7uFV3R1a6jzUjVXhSoNYuByP",
  "key30": "5rmRV3Cc87LBEJ4AQC9WHs4MtPbDbU4pyYvMJD3jtwq4b6HHuV3WC22tGmdYVeKKjNiNqGR9PmkAXjyCKu2vzJAo",
  "key31": "4RYcYUBYJy96dKzWzoy2wDCA8MxeXFhwpz5S5bHqVbjSL7QfJ8iGUGrW4RuiMQCAcfv9dZpQNQZFXJuhtRxACvyD",
  "key32": "4yxZXfcZFU45xSYj8ohBKFoMVirJufaeDuQgzCj11TVZYejfoumVbmBN74pqN7vE82VzJ9h9B5Ncbq4NpX6hyK1D",
  "key33": "4yDE2KHpEiuuVuGPW9PZCbPeTLmD5voZg1uqXQRuoYHDvxbUEThfvgocEYf8giRcwY8dSyJd5iNyFrB2vhCioi3L",
  "key34": "5iGce2LHjk7qZfMvwUqYBSonebJg2aR8CYNxxEgBFQBCYqyiCfaiAGAz7TGqZP3yarzyfXiTsm4RFRgiUAUzY7Gp",
  "key35": "CvkVFMddmqbPKdnxR1noYRWsNTdPZkbskmJHJmkiCbb9aYV5yoq4Kf1CcQN8Km8AJ6KsFkyDQ1yDwGSpLiuerWe",
  "key36": "27vxdKDNJM52Ce5ExHfCh4Y9vAdhLC7ADBwraG4fn7JcAstko3VcVB1tPkSSJq8FgWUPKdKKRJYxnnLNatynewzf",
  "key37": "2mxEQemcKciQyHDWR3nhkPUdp4c94QbH56eBby6XXseT65RVn3QqZJ3m7PybyHHuuymsDB83aZwyahz1AFxv485L",
  "key38": "4sy4RNDhcBDpAZepTK5CFCYEbyj4izSGMzH4vDUYonNjvDEhunLXgvhY8jjodCprw8hSLxSytU3LnoT8sowDTPKe",
  "key39": "5sKAjG2HVtuGmeeVVhdwxfnA9XzLEVn8rQzMkBaJosmjNBTDa4WzooQSCAuvmELHEzxEMi5tezp2YJJ5FBKgHxJx",
  "key40": "5MEfL5oBctQcKjrjZPH2do5GA5VKKrPvsnun5mzUSEMxSFMnBPoDBYbvttf25Z5P5aAoP5X8dGXnfkCLxrGXBgH9",
  "key41": "5SJGi5mJUys86pky97n6q4g2Wokn7X91o5UTuPZABA4j28YepWf2tut9HaSjKcz3gej314deTNwFSiYTpp56MLzx",
  "key42": "5LGDGx8kkKoczBuJKZaQgpZnSk6Rs1fgJ5aNGeuT7TeQEdbbskSDbTNtsGD6VyFZ627TK9QjuS6gzF7so2PaKkRD",
  "key43": "2W5Y4bTLDQLNsPrK8Chshv1gwzx9MEbpUF8nV8VqWmQDWtNBL12H9i1Q9rQVLF5KsBWMb8dLFBdQBYFfNtg12bHL",
  "key44": "67V2PEkJAmWLtyDFGRoLXeNfEo9Zcy4GGApdR6QTA57Jas7piiHXhz2WsPNL73n3G1P3QwHfZSnvB2ayjQMFiRAJ",
  "key45": "3UhGqQEQwbbxFJBMM3eaWeFPMJpzap9vAWpFsNFcyrTJfYQyBNtxJ5RUE9JMABye17ziAJFthCF9bAgQFWG3tdoP",
  "key46": "582NDJo3r5v3AVLm3TrWH6RoFHP5WfA7CPiQf9ACVrHhDK8vcfXgHCVCaizS2kuG69NpQJu93swGmguRYF6dLS6L",
  "key47": "MAnMBGUcFXsfMsqRJrs7wNu7wXnAnGaFbTJmbzXwxVxHoNvHr9dmas5f7ZcCQA2EXNq3b8psQQ41Uo3ftqfCDky"
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
