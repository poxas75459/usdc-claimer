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
    "4CknUNA4Ucs1gQZcjnC7nPEJw4RZKUtWndgKoVrKWRSV8S7TSApdkmforATnfNJEHYZsiLBkGY1XTrxCTxsYPN5c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PRiAbp6FtSYWFas5bCL3iQCzK6YsBnhhDqw87RLPCxaLKEepprxSk1Pp6FetCwtbtP4wKuZ9t7CbG8MfNxCKVPM",
  "key1": "2JbuhDKFkXp5Q7bV3ZbHhyyf9JxVnNdNnf9qAXhdKa8HDuz8o1VXhBuMZpYwpHyHh5CNPpYTQnN7pwNPaF2SWzdP",
  "key2": "2pfqVrmw6kawSzz2ddAvSXK9SkdnrReMHHy5mae1A4KU29QJnc7i6JXDFYSeEQ7QTbcfnceymHMS8kWoUjz7D4in",
  "key3": "3FrZotJcXimrectFB4i7mQoEuCYLFmFUe8zTbdit9rjL3W279Tu8dTvBUWidLVXqaey1HX2g1HCMrjT8PHT9wTrh",
  "key4": "4beeX845k7Se8YJ2pQGoupUq33tpfhrQf5aMSk4Bezgn2EHPM2FGcLDbhEkKEAfmGR9b65upCPNU9koz7id3ujdh",
  "key5": "3wHXsyN6MjxcxtGjsTfQG9S6VYycCsoQJN3tdvPYAyxqpqayHq96ja1raDZiniWQri5zc3mDM9KvGyNi2VYoSJou",
  "key6": "62Q1zcQT7jiUzPJcw3iJRq18bu88WYBSCrFzLh4LM2djRzb529ngFQji4dLxBKhS3t4cNmSWFfjHrJ5N4vhx1RXB",
  "key7": "5epaZbSavim4VZpWdLH6qWMKk6c9RFGW8BSNvb46dh9bsRspRh3f7BAcKk9VfAPFHdpds3VUAoTiDf7JRtq7VoZu",
  "key8": "61pGrRyi8JrGZmByLupk9kkmD84v3SNP6EAf4TjZFBbADFvFi7aUtpgCrnSZUQx81Nu9xtGzHGJaXeJsPDdSsfNL",
  "key9": "5p2eB88iYxQaGPT3ZBfrFGuAE4Rj2Yu1H5jXChf4azLJKAnn9iGzxrVtFcKgjY3z9GiBxrbow8uYzvt2ATihNouG",
  "key10": "54Ciaj6eVcV88YkDjCgUpnLFUfNunNwSAp5osGcKQ27PaBUbgdGfSqudjJcLGcL3tbgdyh73vMupk5H7thb6uEcg",
  "key11": "4QyTdajQiT98GDwFCohcdZzTs9wN6xxu2ar31F68GZRdqGyCiSFA9wAdkWjmxpk82WV5arnZL3APrrX5d2ufhcuZ",
  "key12": "61Nfv1u6djPm9WnBPadkEah8h7dGs3RBudVAUQaxoMEye31e2WUami9xJne9mX2XoenMa36N3Zv2fyBL5kEHNPCv",
  "key13": "5FdwXyKjVPVpSEBVjrbdLRqVKLRRPFV8fujFeDvhFDqeMmAgPqvdKgDZMqTu3gyRdYeLpFvqcGAc8kiR52Ru2uN5",
  "key14": "3peAvxr5bTdQnhcfmvK3J5Pnh8UZWxrRvAgcGaFJT138WU6Q4e3SQhzqmGAQJ8nkeMf56uH4yK1xsq5rtgffsSiV",
  "key15": "SyKKGtrwE9ypWmzfto2yGMDzv2kb5tD66WhPCJQ1bms2drFrew994Q8GtjYCsaSMZoikVTyxtuNbiev8gbMRX1q",
  "key16": "5NRLSthFGvvJcSjzpBm7wiw1yfFV4qycya7pxzjand7NCdi6ZKfdUGnRqVeqVFsxf5rsUGJAZsjmV5sdSDfGSGYe",
  "key17": "49bzc5FWyzthcpf3VcpVWJuNMX4x7PjYtkbMGt6JLzQZiK5CyJ68YCkiwF2ZtQSmVci6dDcUWduRzJCkY6NjxEYK",
  "key18": "4Bs3pKrTLejTxT9GAFU6hiQs1bWtw7dCYuC2MJxY4CxXC8h8deo5NJKc6srP4MuPw5kcpnejLknyfjXSYjaj2o8D",
  "key19": "3KkpSC3eHNk4DRV5bzQB1Zi5iUnqw9Afmdta2wbmsx8GCeBzqkMhdJfdDQgrfoJi2nLy8XEzVt9k9XCwD8he3STf",
  "key20": "5JNDxhmwLACqWove37hXgeRuXh19z4kDpAvDgGpKHEieumDVpC6TNXadx6AfadE8Z3PTEW3FZWXnGE522GwNhvuq",
  "key21": "h6eLfuDvzGk7Mp1JYmrPqRF9TQu1jhziKZVGXYbXFR5daaLPbx9KtZAos6DiBCBajUwNbioCuUtz8Ef92XdzQ9p",
  "key22": "65ZMYkCd1PiqC2avhaazn2w1esBg6y58ZvYCeBPUAFvFGZYLSsVNVmqBQvEeHd5HWhFkp8mGcg7cH6b2badyFuVx",
  "key23": "61THK4yNTELapqjJGNa8AeC3Q1xEbzn9rQZmVLHMgVPrMuPGaEDD5Ry7payJAQpaoisWzdtHPQ6J51Jw7TBfG2mS",
  "key24": "3J7rYoUzPt6qtDJpfEP5kvDyhafpJ5X8mrX9pxNeje58RsDP8a9X2amD9QT5QF3MvWwLKamiSnN1yn93GWUGo541",
  "key25": "T3ibBK2ANAWb6QNfszudCueAg4iZfBaufdDARjucrJGNKPBNER1KF2GPpTYmYWSeAPA3gE2SW8ApUwkdJxybPBa",
  "key26": "4jXMXsr9sJpzMZVGcUoNYRj8zBi7KhBniMcnLdn5YXzuQHxPG3p4RL8gS9U5XD7SPFCtmkzky8d1LhQ2EQt5PLyN",
  "key27": "3qDFrPnZiqnjpJvTcRVYdrwAMzoSWfzv4KRJuTTJCw3YX8dYjvhDkiJTZPx6oWUdCGyNK8zaddZNUuk9nvhfoBKX",
  "key28": "5CXWBYmovE9yFQ9qoWtDevV4H9wNhFhRVEfPgVK2gNr3BdyD2zoAvhVM7voVdczfE2oMeiVi57oGmPUD8RDCNUB7",
  "key29": "35rfKiC1jvvPJWsX62eyL7hRBJjmKaeNVU3X2BjDBNkz4DPmfqV11iXER2UKbbzeGs8DGgL3AC8Q8CCJThoTx6dW",
  "key30": "5meV2Fmnd75TvY1iqsmzsQpEWxn9F6ZDzzQykogWuUkTq9T4xNsKPziNyvNaqPWSsfNo3utepPBx4W6s4WdJicZL",
  "key31": "551xmvXBgZM3ix2bNrYywFUrYf8ZsCvr518CJgEMjBT7cttzVWmPKXYC2mEQ89wh7uPbThD9S1o3kNftHAos3GZc",
  "key32": "4DUAKepWGNHAjYvzmUmMQH7vbt5Y1eSo3DUGneEFhkaZm9YKR4Rkxb5Q8ccr365jsX87KrNSBcYgBnkWArQhp772",
  "key33": "GVJAaE9nbn1ZUpQ8fcumoFw21LhQ5LHpbqb7XKSwpSQue6FU6pq7TjU4K7HsYoKeWGoS3BQEKHerN4y9DUF74Pj",
  "key34": "2T5GLGKMYyH6JvRP5mHkatweSaGmdQjRQDV8MwRURXf49d6cpXCNxMYncKxLUfs9eVJJjqpL1qR3eR3WamhWtsk1",
  "key35": "5P7E8xbeY2WNYSJEc6ynyqrrw8T4DE7xBpGjfgqiVg7Dj2y9Jb5ivZAs6SQZMSQCqjbqEB77P98WdZTZnptuaRjt",
  "key36": "2QLRtXbw5BAGEzT1Whnct8Dre35XrJk64ujP9yeZRr46wL86yMkcbEi657P5p73NeChB8RmzdtXk6Ak2Hw1hre4u",
  "key37": "JCw8njZfwj6xhMPW82d4V2yPMVBSAzgvNV81u5urkXyRHECjaCUijR7RRRyZ2DNNBwQvgVvRcVo1tffxY6y7SrY",
  "key38": "4MnWHtqKVdo5bSK7FViU49jm7P7XXqWbH2z3nXrNWeW7uVTo7AoJWhvVSJZvEbH6ePZjriHvWueN538BVw3JxSqi",
  "key39": "4YJoM9ZCrc6b5Jv3yhaRcXoP6FFpDYPBtf9zDU3zuLzHbLipNE81BPDScoW7NhxLBFFNmRG6gUVSzCsWP2uJuZHU",
  "key40": "2W8grhDYJbGPTMhoFoCMhEdn12Ps5PHQAVb4JFp6uKEB28bZCz38qchCp1wt5kDmvhW544egKuEidGx4bUZqdh9Y",
  "key41": "5vryQKdtw84XxcpXVD8ybQBBjXwc5NKJmhz65txgQPjHG3rY7K37JRKVzi4DipZ37oBzs3a6KLxSaDAHxS23yr73"
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
