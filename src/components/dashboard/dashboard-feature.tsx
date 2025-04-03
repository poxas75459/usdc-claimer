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
    "2LBr8krzYayfvjxCmer4WE4g4iziraz7wjPPQKxxMdffSRX3dxFcKXcyQffZxauCDuwuQt4ZYXqyxRCK9PZhkrAW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kHTiipEh4AQES767JrGEAmf5rNZyB2FPfEuJ7qLfEEX8je53j8XV3h2H5CWS2McTUesaHp6rEiiMeFZzxcprXFp",
  "key1": "5ZRmsCGJyLnYH55JGyaxVDWk8u992L89J5RM2xDai2uVaSnELqpsm6d6tTJBGaNYHKrBLU5y1vcM9gjKWaEqvTd8",
  "key2": "rJkeoKxwgGHPByYXL1iT9mdkh9uPq9qLeXTcuLjpfkmz6gZ2k5jAYc1jgsPvMhSif8GmnLKc64JDQ8RzQqHAWyF",
  "key3": "2cQvw77MK4GMw7iub5wa1b1GnsGTrNTaf6ABj9m4TFsUiC7TpmxNDMpAzowRoKsv9fEhrpRdT46DqasM9ZhggQzg",
  "key4": "5wmaJ2PpVmhZTHbZAKGfq4T1mnnG7gdRnmjDCBkfaWpV6RZnR9mNu2nv3aQ4xLs48i9w6vpmcttk2qh4g6JKQL9U",
  "key5": "5R4U4VmAcQPvXdHuhVA7qf5jaWE4HiB4SHoxy7Ar7E5pceeMnKJqxLfoogNGo4Evkhb3r7dobFH6FoMBYi45pxj2",
  "key6": "3PWvTR7xPjZXLWHjGo3azefTwXXnjSFU6t3616thyYDtSw9taAzLBB8UprZmjYe6SuRg4PnrwDWtJ4sfUvEQvHGE",
  "key7": "2ucr3t4QZ6FX94LCSNo17fpGHSuQp1eeXjtaTSn6eYWsnxLX9yz9w4A5JrFS7zzGqjkdnAEwhaMd6z11jGzqzuFx",
  "key8": "5G9c4soLvrZuXZ9dDWWj4Byt33yNrBZy4TcJQnU65YyKTkgYYAicUGPU39t6g5j6KTo532FmUjjDbo5cGz44xtca",
  "key9": "J4b37JkB7SXjqWTfaNuZE1QDtmkFoNJySw3dHUEs5sMxjor5gfB5BHrspo9YmpMrmVFqHQvkdv3tirJS7RoxFHm",
  "key10": "74jYve2YHLSbpHoVeHyz71hrr1RzKZdbLZhx1jLcdsjnm52wh2QbiSQXthM1vgSYEAx19JbRHLetNaMTyFi1H6i",
  "key11": "2Q43VRs4qEaJm3LAwSmAraGqK2eBXHE9LCbcjoatbP3ik9RVaefKwGMDxuwy9c6dh1m1ZaB42zwmPKE5kBy5LKT3",
  "key12": "45wFtobfYMneQauWR5r2RAz6R9VVhPdPiC9PULBkLh8jbZSTsPssRiyR56qRdrYqq9t256xUUskw3ecQbRT9LqgF",
  "key13": "63fpt41KCB2tHx3PChHYPw6EQffec22RcYw5uZuHXj9YwNQHs4DXbVkmBYGSg8AgWvLWQFJWwxEXH9DJ9xC8U1PA",
  "key14": "2sBEtegLbdBSb8gyXSJhR86oNuuDriP1hQt9Jm57HveAkHrUQwpsYF2DpF27LJdD2B1gYejDPmM1wreJXshRdz8y",
  "key15": "iDQS7MQJ6f95S8tyjMe1mMVhW58wSJkjAQcbJZWRZgTrxxgdWRohzN7tTPpNs9EtGGm1LxedyReVUPYph5ryXCj",
  "key16": "4BUd9PJrQNYHLYXk6kkpm6bdedZvVjrhfi86aSfTcqL2MjWDpR7wbTpJSANsxeGWJmdX7KUj4mZKawppxsgTBLAB",
  "key17": "WrBDjpHQw87J6nLzNFfjHr16Grujkgpss726cfc5fajbVhtq83xsDYvBRGnUbmLP4JDt3WVmPG1bAm2qjyGWij1",
  "key18": "4VvrYSpRwe238YjQwmWdFzB4Joowckgd7gZ7yDz4i98r4ogJBo6aZP9tiMSaRKYy9op8Zb2Lgbpgj8BY3AVdfB7B",
  "key19": "2gHfrFdrTxvuhtHVZKwjrGK8BFqvHvXyYeUvp4PySVXQDgQLCGEDmp8bHRj4ihaKCEXmSyBQ62a6ioKTPEfN6Gnp",
  "key20": "2SeiHdSpvs94JBHdbu5uyqTZu7U9CEUVznfkiYo4Trq9tdmLk669Ky5c6HFDJwstRmVtmsZWe6wiDck2HtfmoF97",
  "key21": "37aempvnCitQgxvZGCgvKfuqgUdoPdkjNB1jMWQUM2erVg1wXJeG4559hJjgJtqNB4wfniZs2yoZA3rL7hTjTrQg",
  "key22": "fBM5wdC2QafyzkqhQ4Y73mfzBi9fGHnQFKuHK3YxKgjZypuZh6QHm4n13BeiEdTWWbZgnLczbM2Qt23aJfRx9v7",
  "key23": "CENbt5Lt6cqqDpjDmPBuiUcH79uxMAzbS8EJsPZqcfy5eQND7pqERcPDuwypRJeB9WGhFVr5RtHy7XBFMmuB6pD",
  "key24": "5u1Wihjbw5LuT9oDwBh5NxGpqsPwRz9iCFgzQGvBstHxaW3PiATMSJnCtZJCjmpNeSm8BBZ7xuZXoJBEWMfJYS82",
  "key25": "2CcYRHCmnnnonpZFtZceBsEqwHDuqL3KCRDsAo6RaWfDCkQSsQ9wZF51UScAwiZGPzTiNGvQvMg2KUXxPeS69Dmw",
  "key26": "duvwrWLWtfmRYCaUdcbw32nc7PJAtVLzX7Ji3GnSwvruhCNmMaZbRMfN2hcCBmbivXQeKvoNw6Pn2QUJAzhi1rc",
  "key27": "4cXSLJg4be3ymKLDgWLFnKntELCYyRK2mWUo6RkJXHZrobUsYuToPo91Vem8BXntgyUwVEGjhUqd1VBes4TGuRMR",
  "key28": "5EjUKdjQgFpVydwfgYGFGqmuLKSJLUQmbnyiDaBuRpe5ftBJyn12z85e34EkDTPguGnt44QerUF2dMc8SfAuSWoP",
  "key29": "VZTRg3h3GxsZE76CPhCK7eF347d7ipKq5EuZDoDjogXa4EUEmAf2BqEJdd5UNuRGJHCKaUZz6nnyjpZ2YKonyJ4",
  "key30": "2JcCxN4AQ4aUbJJ5e9JYtwWF93Sev5Rim1AKYoLCVonTkeNKaoEdpym4n9zG1ei8VeMFZep3LAoBhfzzqNTnM2ae",
  "key31": "3GHNJTbC2TtnC2VAdr6k8qp9Mn9UqoHJgJsHGs1FgJishHEJTmkza9myjM6nJ1ozXmoXmVT8v1S5nAJS3NTphZHd",
  "key32": "3U9C8gHr9fMGka7cUMG69jeMT2GGR3C1nQSsaDRb5w2c7Pkr49CtzKPji2i7vqJnuXziep3iJoS66QnwrePfU8gH",
  "key33": "2AUQVedDLebB25NyZKPNrBdW2iCmsnvvijQNcLYMPF5KwZYaJuGQBFmM1QHVwpbHiuQCGMCiNdZrZnYYkP55Gb4R",
  "key34": "3rLSEimgwsSCaAaf4btYKS7VwL8dn8nRZRCUPC5geF6z3gb2ZB1zgonqFWx7afS8cTXxRFqS9yKBQ2sr2x51HCDN",
  "key35": "PNdUsiYWnFRNkvWrmLQCTPRScMygXZ7st51yEfP7Ewyn1MsFZ7ywuTBnjPV49eZ1uJjj7uJ2AtgMBg5aE8Y8eUp",
  "key36": "tn8hvcbMzxvMbYftv4QgkR3WkBJDRE8m92JRQPrCrq1cWpqCNH42cvZ229BrupaKniwXYZaZGzmcqsKmUvHZW5x",
  "key37": "4EY6FjdigLByz2QfUUTomPvcV3VudRNEqGDcDVqXw5FZkn1kuxUEB4viyjMyKZsLX6esx7A8oP9ceydN3oAhVi8W",
  "key38": "4YNzKWxni3n4UngAT2xGZ6sxMAqxYv93PkkubnZWgSWzSLkmzMVyVWH9RtDWaUhEYNZy4gqkUZT2a1q46ZheqyQW",
  "key39": "iKz1WBD41HbChGJk4NXcNxd1wttjsn4FRWmDhm5umHXhkeuJmjqUAAjc3RkDDEhp17TzcRhrcUo8ow2u5uzn1ub",
  "key40": "2NsYUtpYgBEcdywPin4LKL9Y7zsY4Foftf17WnLSEhSF6oaBG3NTVjynYD8S61ujwMAdTLCrrHYdgC6Rgw69ATK9",
  "key41": "38aW3fkMXdvJAddzA8mGeaLWzs2FF2XihhuHvKxnEyJTuAxuAMTzESSwtkfDdTpJo2szk1DAJLZrrTfVW3MKRY7E",
  "key42": "22FBiZ2Jo1jEJSgxX7VGaVkaTWGyLy3HhrEBjhZHvn4fjA2Ptkn5jxj1krCGZTaepprRmM6YWAxeDT7tuSj8q6fp",
  "key43": "4ZWvNrDL6F9uCc8medChHoam3S9144qZ4ThLBtaaeRoFYS23sAbaxoBJmWR6QQtvvFNZcnr7jiEhVL489uq8GTQB",
  "key44": "ohbFgX12gWPDZ7rxxLswGr2bvhGL8ZaejsUdyztewSZm7gkvpxaGU1PFGzwQ3tRXBvA8pZLPNEfv4h5eMPtrP1L"
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
