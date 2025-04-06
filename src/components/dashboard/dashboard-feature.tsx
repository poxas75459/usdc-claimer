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
    "BXfoVKceTsTbhJveNGXdy5fGv28sCPrTFqHspxYeC9ahEHvMFRFaLrd47fYaLKXKKdnAVr6nYBC6nsfb287suM9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56nPvHL5ebo1aUB4nZVNGUrkycbpZRgaMCDMxFQ2kxGEsJTUYW46132kNN6fvj9WApCcUYodRT29vPhTBoA9uWoN",
  "key1": "3Yh9BcKCVsgqaTkY16DTT7bK8LzRcDsJVkwGwndJCLNKBBATkzty6LdQfY8irPraAW9R9ebNh38YkoimhhmP9PL5",
  "key2": "2DVxgzSvHF7tdNjjq8TLD7AMfmEHHt1sWNDTvULBcq9TRXYMvinSV7rpKLRFtJAznJgu6YnMkwfNZqUH66c4j2Py",
  "key3": "2Wnp9VFG8GjHzASeh8XfdjbGzUho214cnyQwNT5K9L8RAfexZBLi4FBoX6uH6rscycvazVEj37vadA79YdoBosZt",
  "key4": "nV5yCaNWu7tTdbwKs8mbsLbQ7xKyKVHuAiN2XFLvBYbYoHNS2stD5vLQYeRtrwP92xcfyHDxqajSd49yyb1ec1u",
  "key5": "2gD5a97VyvPZtaT7TfU4JBTX94UaoNKPN1xtYHgAPmXagCWPfaBGfBU47ZKVnHgkXzgK69TvzhiHs6i7ibNYvFbA",
  "key6": "37npXvXjDVefeUovchevkTY1ia9AJWhsRfi6zF3nzyHzo24FDL1qBBVbMDXmJF1BaDdKeRWCADeWh5kuuEoWRUh1",
  "key7": "3Mr4q4iFr3vHTi7Wn2s4fb3CudeZckdG9rim84AqtprbF1fGNUaQJoxtaG9gm3LVRtg68cdFTjXKdX7yT3W5ftFU",
  "key8": "28ochn7k8G8dg6G2QEhuwAFQnUFrb5dFUTnkU3vA1Qnc8NmSVMNJfrywUPwtuAhSvwyXArW9jEMhapSL964Ptdup",
  "key9": "4SeSWUSyQRHG9hQ888XrTHHrw4XqBsdu4ajhzKBixR1e1g8vPk35nSXHnTh6GezRW2Yhcb9hcJ4DU1kZsPySybbA",
  "key10": "5XhUT2Mvh8hbsvnbTDYrJ92fZvMjhUHgrzizoy5iWtquGrumz9PLWPM8tzP6Yfr4tmAojK2GKh5H9oRAozvj8Pqv",
  "key11": "4nqr14RpzbehS8f3LfRjrFb4yz3AZgp7z46Vasx8UsR7oxnoFvZHF8PXGmmzGRBXFzkWBCCFQmYunNW8vQMC4wgG",
  "key12": "4Sxp6PB2ZrLvg6rJi3BQaFM1uRqPYZt3dMqcECg1JhZqchHYZfoTnB5rx1Q1wR3fNyynp1wjxvwSD8MKyxBHdUgE",
  "key13": "iRPiRHGviwJALsubyPDpxYNeC8okoQRkn3eiB8E6iGpvqJkAxPizkqCVn4JuqhWteQBz953Qc81qAcogXjaxjF5",
  "key14": "4FwiZYChXKho1brYuNcQcPpAf6QKX5M1Ytw8CWs8KQXgbjkYHSm9mydkBrPRF2YQ8UxBneNi5hHMUoAojmnnhPfC",
  "key15": "66hSXaUB4NwaRWgaJzkwFBWb53qKABEuvuy2ARimyT3Lqare8zCMWmSFRVC2U7o647WYdT53u5cZWVypFAEr1t7A",
  "key16": "3TGDC3CfLbz8NSFbm4Ms3Z5oTELj2VDYTdAJ7Cu2VePMn75Z6pRFvSDDAdtK7K8c9nE5o7QCPwVtT5DtUBTrqn77",
  "key17": "SQtEa87J2FLeYgNgaPZwNiCz4vQ4wxXhb5GgyemsQYzseyxk162exptx5VVv9EjMcSFV2bWAysA6cTXPmAFr7zy",
  "key18": "45YJtHA1RrXwQPdZAVTNAKqdf7D5Zt7zZAU56ueAcrnPzUFKUXFqu3SaAPYWL1v4b2FphB7hb8xknqB15uEpTVH3",
  "key19": "5uj4Lhvk5TZHrpM7DS7Z68pmtNZqvDSU3WNU6HiYDh5kiJ6Apo8YK1WZvJXzvVrw4iaZLDydTA6NGnPrGr34unCJ",
  "key20": "5trV8niukGN1Tucuy8dxLdZD2Ki9hrix5j9N3iE78Uh5FeG9X6fAY5x8Ji7DVkhY78pSujVbmrwgko9ts917LNsi",
  "key21": "5ukrnjyFQD54NpJieFHMk2z2FKGuNhYLkAzQnG2BrW86kZfsFs8BBxK1t7BFGVzsWnZFKkLt7QPw7TaQZwJefMD",
  "key22": "3AohAcgibNAEeVnN4TFCGLuCbcgX3fzHEVbwEkUxEtBkDKMRVT7fdAm26XrKvNviBsmJKA6t6KoQWvntCUAycVWR",
  "key23": "4v3E5k4K4Mu1NGBCirL75DfoAEnzjRdvhvRfR44pjQMqj9ZmznBjxSVCZtn8vSS8B8ga71hDHt4EuaTGCxkSqefR",
  "key24": "zYDv2ZaUEtxjcuba5iDbZyUUSoQyN1CPxR3QiihCFhGJuPRVATbwKvKHa9pw4Czm79XNyrXQmDmQ1eRH2BaaFWU",
  "key25": "45XSsLRSZSer8rQarwtXGkto42JepJZ2Ksez28NEnkvUHCjBvtTysHSKTDFHxQi4PeYmyyTqFG2nzVgxnokVQbAM",
  "key26": "CEJfbsLZijfoppmEFuLvVchhWZXwEh6dgnLAJRTJ8aQzG2HFtNS7AuSc1d9jVdZrddDL62dRWpbeAgjs3fVuUCJ",
  "key27": "43y4EzagQyAX2J8T4eFDSrwuByqC2q1us6h24JT4MTVMSiYG5ngzzP7WFMPFWTkAfX9i3DqVgFQHk8xtjLqh7s4V",
  "key28": "5fwMquKkBJv7FECPRYoySwriQZypEikzNf2toFzb9iqkCnLC3qcyajskSDAVQNAF8VYHQZgZMwrfQ5ShTmZBN6PU",
  "key29": "64qzuJpAU3NEyn8LzWxnsBoXeXn4x8c4gGzrrZZjCty1HKnfi7oih9iBxhEy93UPCP71gGL64dFNgFus5uVRgkky",
  "key30": "3JvZLqL1wD3ZVz6vCu9ZmkJaHd4XAFnUTiJTVehH3ztB8esSiN1H1XgkNJhYnrmPLDHxQrGia6JrroUpnnTD54A7",
  "key31": "5CUwDxRY2uUyh41agaWA728K3c8WgCwbkNhyw89KCjHzDpjJzzVbte31zNNPJx9pJmVMxTBZqHgmGvAMhv8FiVPo",
  "key32": "5RQCR13KmHCypboUJ2xagRoKxpjGobZAPjqsLwC5tFjGWhHuMA7dnbzKq2UEQ7D82nBz5Twe1YdCMyhTNBHNWiR4",
  "key33": "3aAg4VthHFfYRmqkCnhSeaqpFjtQHSYwW1Ne8petwn4YxmYogyGKP9FVaZiVFiCg2sFoY9cGp2t2vd1eLMZixmKy"
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
