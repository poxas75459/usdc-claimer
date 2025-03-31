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
    "2p54JEeKn7RurSf6bvdffsA1GxFRWCdnyUqRDH899FJemZQDAoBqzzq9bfCz38PPc3DtcPxL9A8ZFNnaw2iU9UQY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UpMJ36CTTiRMRyXjv2QuXVDFDZ2p43JK4M2fNqWJiPs66NzCMn2RzENzjS5yvCyQQ8vWHeEHkxmTWYXWZxCnk4s",
  "key1": "2zuNfcXqMCfBA5U2Ct5MhaL5vpi85ucLFm7FwdcndFi4jLtT6h6xPjuC5q2tYoE4RFXWnyaBNDCdwhFZzACtpRCW",
  "key2": "3EaKuzRTvyAo3NbX9pwDW7FXrdAYwzGFyc2nPdqkRsTGVKN9LwC9wtAHxqovz4nzBR35y5V9t4CK5xJQ1pcgvebh",
  "key3": "46siB5bKppc2G5gA6rpX4ZaD3kYBF6ikTR5N63aAmEyaonpdTK7xdREEdh7FyuSVbEH9huWLabDrJtC5nNGRJSP8",
  "key4": "3vAK1cT2rMaMwkhUT4BgG1SLp4Lx5Htz88dLrGg6GahFVUoE3Zet3SHcU1Yvt2aJvKstU9eZhiEXCmV442BXm2En",
  "key5": "4BdXx8R7vhVrFe8cMvsxTeAWas8Rjzbt1Y8BRSnfPxECGGjyCKKi5J9KuyCgJsSSYBaDxzn33RxmNbTbZFbtctEn",
  "key6": "3aTUajy3aQ4ciiR12LwTmAasj1u8HZxkidKWstfMsJ3T2GuF84TxDEvy8hE3UDRKZMdB6SLNLT2EQdLFUpapq4JB",
  "key7": "52VhRkgBH9p5KfBNWomSGrdQL8weLpURmQavXqw7Ff7WX6EAqwyFKgT95RhhBPwwFpyYSGMsj6inevkZ7xv1bNca",
  "key8": "2L4nCppVjAYAJeC9Kf3UQD13sccWe2puMLd5HbDZxVs9S2V9dfbcAzHp4dLdvN9j5yYxZ2FiGh3zLgSepPGnLhHc",
  "key9": "5HTYLBvUj8LCKfy95C1dPxSxTkqWDT3xEnyt6dVUh9tz6Rou577oi1DSwfWtikVxJKbZAN98UYdTSkswvvJDRDqU",
  "key10": "5bD146tjT6hvoSy6pT2t1S1KzEA6YryzwjsEMEoM5G5YfXmP3QVrvo2GuUdANibsufaG7jAuvgdD7aRBKvae8agi",
  "key11": "5ZU7sK12HXB5xQnLEzExwkHh9oLmVe7Ez69tuDNyuSukbFQCan6SfAMEFwoiDziTK8YmJZTSwd5ngJL9LmVnPK3W",
  "key12": "2V7SHxGejhAeLEWWcRcgbm1jHRyaJJEWZwsK8oBkDtKob33yYJz15eSA1AVDfpDc4qjm6UG4mTMRbD6Lw9fxQnhN",
  "key13": "rf53GEoWWL5CUW7zNeaM1q6a4RTByjCRh9a4YjHWhqFPsUAiYn1v6eKVtDBQcaERvuCfVupCxrUBa5q3hUptYDP",
  "key14": "5oBWfvGD62LTRvw2G2ti4FRpfqwvepVEq2ZeXiYZMeYMH6qS1MrBvu4C25Vfn6tdRvHJfWiubkzNX2jr6ujykn8Q",
  "key15": "2bHkyrvZwj7DJmDiuLEyCqWvzJFgDf2ShATCpyNJq4xtaGNEBpfqZCGiBQoBQPP5PNVBSGrLsAhrpMz4b5oLsqXW",
  "key16": "5QRoCPCebMowuQTtpBa3xBxzK1fDohDDKRgY8ULLK89Yf16neWsJcLNzSxTrV3y7wmEQKBPyqVeYqKYiAXgrzMF3",
  "key17": "5K1bBJ1zwjQNeJ5wthp53q4Nv3oiVKQTmgkzsj3UGudY8juWpCt8yf3q8m6qNTnSJTzPMK7rMxdbeL3rRMcut5wz",
  "key18": "43EQUh2RSQcJkk4H1R9CJJxcKTpWe8yDerMEAscPucShLYZfUFyYcTxJtkQk9Ys77nHGjmsRfUcpKjDeGh9mfbXz",
  "key19": "hc31fseW2DsyusywnYct1cLj6jkSYXttCQTLrdfBu7szFy8Lwkep1sjyBaWTrKsGgDsxn7mshZcY4JpfiWJrM9f",
  "key20": "2nbhUN9PDTRXc1EgLTXs8AmrieN4PiaW1AmNoFJttbhtfDDB7pmmHCSQHXN7WjaqPNbkAftVwer5RfDDgbvymtm",
  "key21": "55iR6zWfc9UV4LmT6wYcXKRaKhDyLv69F2ZfsYynZoDUHhpGFYmLLNzdSv4cEgg8Uhk69RD3LW8V2XMTSpEdiJgd",
  "key22": "46dxLtv8cAKS8TAGLSCFdgYSpHM8eCU1HJ4D2KANiHcH65mmp9JqGeCg82j8xn1oqqYKaXSTziKvzxDAW4hv6Grw",
  "key23": "oYBnLQvd1oB4vDVV7J8TLZ4JzvVoAdeQ3ZXnwoaprpaxUQxvaWTD8qrV2aKTQpZZwoDTMwCZryqk6REyu2Ms8eR",
  "key24": "2NXVj5xXHXg2obe72tmZ8KpZaQBcMRy3HFpUdT3sAsyaEq5T98JhZRyKTEN5Ps4fMPkri4wCpEvhtZJeTsoB64zH",
  "key25": "2ozAjS7ytBLbzVLHXhuKqnzDgjAaxxdpiD2ND1yG3kRyYPBNmVUWFdBG5vQy18cNA6oitMNtZAjFwGPivFKBZXEC",
  "key26": "C6uNuDSFcVDx7HxeVh8yifwpTXJVEsDFdLo8HHt5MD6yiAYKcxew31fjKPf5WS65Sr3kf9RUktmNX4AyrJog2Re",
  "key27": "4wTkDi39bfnPZdc53Bki6prEAQNGBokkEAGNXRny2yzLjjqrFaY2t4V7WaFKJzK1UAXJ2yKmfZY9Sfy96CXLB9Gr",
  "key28": "5eDTZ42QsaeHbbKzSKiP9fWmb7ZhuYiQhRv8cRMbLZgdxiFY76uEm3QTw9Wy1iRLAjhXkqRhxQcbituogEhGuLHP",
  "key29": "V7edTpT3aSXUfcxaEXh7MMJErTW7p3xpGE92ubAC5qF9XhmFnKcHUYD8YDL7E97E3ihWnJa58g2SZAf5enU7xNo",
  "key30": "4jdGChpL9SJMAq6sTeG2dt543Vq993UuBDaozqTSs8dFtJ5Wsc9bAEHKV8T3XqpGf9t31hfHUWuEjnZ237typ4gR",
  "key31": "5o7bZEgQxoHHZCojbzn58fJrcyj8ii1mEidoRiJEFjnyZ6U9V8MxWXumqgNV6KMDpuFJFSSz1HDkrFi1kibF9wxH",
  "key32": "21SL6SYYCh6kwtg9CPC4mPspcwgcXgRC1XRop6ZDKtdKiYeToYaeVGoG4CLDNVLBP7qLViTzAeDMaDaY2tqpteoR",
  "key33": "3jiDaSNmxLzyCELJSsLHPC3Js6PwE9DZYGPArgqUFdzCiijJG2njeHxPqtqWZpZQSjmnoKNE997axMbVvepabDzS",
  "key34": "5vfc9sCqfVLuJ8HJqRbim663LwaPqRBfW7ht9VR5TFVoM5KHkawakqZoVFhdmYy9XyjEZJLKzweAhMLHduXmS7yV",
  "key35": "4yuHhimafsiWStEdXCmZuNCnpJKQLvkL6WiYy7AdfcuWVu9pLD2AZHtT2rgDztr1LcZDLabfdeMqnK8Lu7RMTiqF",
  "key36": "3kLcoaEdVxFHESvKBBp4vHg4iKYzTJmRB6KPkqS2GjvGKgwBzmqs1XoacnFKctLp7baWpj8XRRjgL2Fiwa2rVuJp",
  "key37": "4m6tTRWgDHtozpY5P596aTEjHbKPwZXa1gowaPYq5qynJieFwxX8FfBpKartVfNDBsYCrwip56LDQPiNNyvoCBM7",
  "key38": "dVsgHmZgSFyrxkjAsdZCLesXDYNQ6CXG4ytqQxjkncvLXPU7SNsv12bhERc2iqsJujQVwUzqtTkUKgRi2C3xzsc",
  "key39": "2bWMzx2gjBvdtf9R4cQbDXZeSv9YJ6eGPnyQ1mEbT9yeWyBTReqzrHBG5EcMpVJaiEZVDkLgaC4dr4hGSFf9WBVq",
  "key40": "5w8ahaBTgpVEKdcnvsCUGvMcagqGDF4sxHpPqCGUg3wYYGyhGoH3RxYgWq7TkEgNxZAij7Qcd2o7DZKD2uQNkjb",
  "key41": "2sYLfMBD1pgDin6UbUoprnRPkRvmfzpd7MTrwwauYRVyjoWyCo8bpSk7538KhZ78LvQgLBEsCLD5BWsji2J9V8wY",
  "key42": "4FGvYjfMPxLYR46s7Lgnsd8LbNdbKG9rYPWc6YXNcW7vKqACrFr5Q29tBpmTRTa1f8nhGZiohboJL9Gts3Q8PaPr"
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
