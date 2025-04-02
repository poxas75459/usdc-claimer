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
    "N1yVbu21Y3eh62dNnAgnGTQnBRtQDBENWYEaxCxz4TzTKrAAsN4k5aoAsnMG2D5b8i7doJwFLVxFEoXjeVns1uH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "esdFzT1jHHnq6oQ6W2XxU3zuSRuhRN6JGw5u1QtQkTWgNCUHhpSfinyd7Fm8Hpo4wAP5CvWdDvxDP65frP5iTb9",
  "key1": "sk43qxE1GQCcUoeoZxWwbhiB1UFSzMw9u5oFd1g5qwEdfHgP43B4ZS34CVeSiJzS3AGyFZKDdJUaGZWHMrxiDBn",
  "key2": "5Zyn8WiY7iADAXDZc3xwhkUz9JzpsmWUgyXAuMKVGW4mhvwZHSYkxVpLZaA22EANZWkNeumS1cH8JcoiddjbiJm5",
  "key3": "JRjEuX5bM1EkY5oAi9w9KQsv6dffJ2Am9VasRnetderqqD17Rrr8QppxMxqqExX3BpJdeWoAseFpFd18bEfPC4W",
  "key4": "2LLGsSBwptMGsaknXNrbkruQb6XHWQJe8nzhQNBCM5RqjoHiSXq6XFyFoB5CWqtE36Z9xLSKE1ThfuHWMTnVXZsw",
  "key5": "bdF6YAL29S98tCN2PdcLGXnbzkMez3N5Eri5frWyTCKMtdcS6uYfgm9yBcKUZfvzhMZsivncJXsGk7LMxBwkzUx",
  "key6": "2BMy6mLGVKxzAJZYnCjLKUSBZgfYtxh7b47ZrB49uNKHW2zSdn6sc9eYwtTtQoek9UKSvtMv8Krfsy1obwNZembx",
  "key7": "47wsmwG57EhWSn9ToL3rYwSaewfTu7GD4DwWPdReWJsUehKESNSdtb7pNe6ofD51EvJCrweGvbbxn3zjXxfTnAjV",
  "key8": "33xXvUS9b3V12BmqpsPbk2CjvAp188HhVmceeYkidHh86xCZ3GRBKuhL5j2Rdp4sjnyZwTPWF98s2NaKXD1nGn2z",
  "key9": "2aoMhLgCVspQT9KZqah5jUfoAWxpxckHcFqjCvcCCnuYMFLQv8yLRiQNoFx1jYY9mBCBzZqgHHQ8afK6X4vuZdAW",
  "key10": "CsthPEyLSxDVAu9MVHmeugzh1ZTA5HjWuvZrEpMNUfv19egQ5RDPjuzgJuJtnuivxJeKnbw6jsb7GNiA15QBFao",
  "key11": "R1aKP8AQ9xWvZQ2sXP772CzsZhW4YEzbWwgfFvhuJCMYK1J9ChEhrXenNp5XAiwtrJeEAorncZojJexY2R1K3px",
  "key12": "4uEG3kFV6RQojWy3BXD6RbAQB5tEiF8d7EqSRG28zaH9vcNfvfDSV2cw79WRx5MfaFrEesWJpcKzbq3t9msfdCve",
  "key13": "28HZW9eRkEMiNXPkr6Lm1ivre7eaTdXTzx4xT7vfNaGB5oQLjwAaqGsiVpEaWv4BW4dvRoUEnS3z1j8TMbXMdn3W",
  "key14": "5j4BBwP3sX4wN6KPeyAnbc1rHv8QJq3Yr9zj8kqghhJB1JfChMhQr93hAD1HQgyE3akCjLoNCipxcBeF4PLmoVwa",
  "key15": "3PntD5a4jgYPdZSBJfBbG5b5idwc1YRrHuNMwU4KdWMpe42Nu8hZDMpm4f3ijwcfrfDmcQKLkGveyiqJcDj8DVYW",
  "key16": "2fvAvDyKso2WYajRYmZQTZJEysLo8kEVjJSH5L2qumY8wrQBVnyhhyqCwEUVTN5X1eBDHCmAVbTg2hkTekzhAtYz",
  "key17": "2uGk2nPQdL1nAbpUMBM7Jos4EoJLWo2AeBccqf6feWHAnBzDgAC6DqMRfBF1d9QEqEdpZBNvdr9QvFTYaWq9b7f",
  "key18": "3SW13V5ogiHtZQMDsa9MCpvYKaMR5WMPykTGMkSe51LAAZ68kRzDptebma66LgUKmUrsxNZxewAj7yDrGFpf2Y6o",
  "key19": "5y1TvrTw6oAnh5rB6BaMscuGr58MohDFRzX7hAwLBPMt9xMWJ8SniAat5Qnod7jVhEXhQb3iUzs3B9ASbCgkE8Bs",
  "key20": "3SnWs4VcZD6AoCUgbWkEkVdntWfbVsagLgqa3tdGyxX7dYbXbbXvREsQTe1YVvy327C3tFuXCgMTMh6v6qPXnkTn",
  "key21": "63cL8hin7CPM8fswWXiMFeqkttdvAcF9RJ22DXaMJrNMwVhWL3DcTcrcqsCU8um2mJEArZdoVozZ23KMMKDUSEan",
  "key22": "2b2o6LKb3X82aAnBiaYQr8TmQMeZ2DS84XetcVLvqwcTtju7qzBE6PDmyBfAK3Ckb3hu9WKGXxrAqEomCYib1xuN",
  "key23": "3jKJFW3APBsNva9UHZGg44bVLvXv8P7GWBybhyxqTs5yiJZ1W1JXLjUMZH5pCYJxtsJBFJrf2x6u4UBCtXRJdend",
  "key24": "5bZjYDv4UJJf27u5WDT9oVzNmovJVbjwY4Vi9S1u6eSMZajcQqjoinJ3Yq3sDHw3KgEwXBeWYwosRkyaRFNKVpmT",
  "key25": "34pi9AKyHxbb7zW6Qa2ziFk5kBvFqpA2H7Es7EAks7JFYpQL6erAmNuiA71YjjY5eHn1uLKUUuDXFufFtt64moQe",
  "key26": "3mxE2PSACQhCg7t4f8auMgGxy7p2Q9D2AepWkaKPdMAmXv3fS7vvz9DsRehSEifuoooYJ3mzuam4vpGcBxwSVhqa",
  "key27": "cV2QerV9U96gd2fgpLmZKiupKMWrJCMkERxCFtSzVC2zETrq5ebfecEE9TGa6c9pATFZd1kn47Txwh9jMa2ntMZ",
  "key28": "4fNEFRR6f4ui85Msyu1ixJohGWkDj49TiFE9sNHtMqz1ryn5X6T8bNUPNgAvogQtZGj7hrtvJ8EqV1VsPGLtELPy",
  "key29": "4WBEAumvyRWyBmkov4fvnhHtXxURqpgELLTDZhAAUiwET4tbPr4LKMvYhr4ySCs9qRovM1DmRwaaPzjMJEayQe3",
  "key30": "cNYbyzfSCpRduyMv52AucMe2B292mxHSnVAoWYBh1Lo4rs8GLJWhVYfA5CNnMgfG3zWX59wEBt8X7MiZa4SAizp",
  "key31": "2YN1ngfzoAGSwEWZ1RRTFCpabmzLMCtgWT7DzBm3o4588PsTCpBjd9AT129WqhgDGcMAEFfaHLANz9wgGXWPjePY",
  "key32": "UjZgmVNq9CCfRxkBwzGiTWyHYHqosYCKU6JnQndvysY5AaXZ5uq5hWFVzumw6tLVuHrY4STXV1T1u9xZRirrX3R",
  "key33": "52ToKV1ntJTQ3xdQHcnt4HRW1PBxZDhBBP9dE1JdhrhnCwDzfvo9ZSFUMsniMaGpyqSoZjKpSY2nUNWkBBWiqMcB",
  "key34": "LHAMS797jYX9C6YChjQUVf7pcnYChJaEuDg8DRgWV7XZaoVzivyed4zZM7igbQewLiPVszGLXuarSt7RyRxmrDG",
  "key35": "5WJdXPYoxZjcDFf8o4bKR4VyKSaT6T2hQdUaBcwRuHXGNeL7bmQJFga5hhgaLtB7DnoF1kJGhKJEyaF1QMTsAfyd",
  "key36": "4kcqLqYQh18VEu3U8XtXvgAkNykXanL4boSdX8oj359kZ1j4LXcpP9EikucVMx6WroGsH3kF9ttKsePJ11FcZsSc",
  "key37": "26h47c2QLRRQnvnpaUuEVgJyHevUpPTPtZwEDzJ5U8JVNpDotagxqnDij3ZPjbYjUwryEE64o9fueyTcJZ8AQfAS",
  "key38": "2AEusFaDbAj195UqndHhAFhic5FhDdVcm6sfhP3s8rbTNkh8vTZ5BR1eRS31A9c1TawUZtdbw499YEb4DUP3gkst",
  "key39": "2QBFrU2XYCmsmTJH92dBrRvMJ4Gcs1pDUqdHWNu28Hf4NTfvBrF3G2HrgsT1xqpua7NLQGYxebFbifsisKd4YcfP",
  "key40": "3he4tLnmMzSwaQDCaMYgtGyqg9qStSEgknwPVo4QpzoEb14NuFNiUh2FjBdYWu2UupUbs8gCGtG5WVywwYycTNk6",
  "key41": "3eCibH2ukNhxhr3FUwtXJmrTajXqwYKy3573mvXHg1mPNogLPDas2qCV9ExM1oft9dsD6m2JAceXHjAXbvrcHf1s",
  "key42": "NTdGFauUtvvPAov4hgEWmNtdmbQqpMF4Q289oLBhdYbc78cTX7142TzhxJH9wcahmyqsiAbnTLruW43b2ZcUbmP"
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
