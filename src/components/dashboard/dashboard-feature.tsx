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
    "2pNUwKoP9iSMQXMYd8jiEWCuBnzWovLJnF3oaCaUhujmnuTbSkk6Pvwh9dGM7iAravFsjNse8paKhzxwgikqfvwv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N45sq2fvy1vsneLTKquNU7Z6RiAcJXGTB15dj9bPfMbAH7sSevVH9UtzRAtd3WAX51dtmguVHVDLiitwZbv9GLP",
  "key1": "tMwEkgoKxnnSApmtdFssdJG11iWuEShEbnyaU3tChEfMpkNvqFimeSdjoAzwaw7EsqqDyLPHq6jGZA6YzwFM6H4",
  "key2": "3o2EbLTzdrRa2r64g1pAejm6Azi8Q65DrQ49HFamXpGCPSN5cnregTxdtnS6Juvs7snZdC911iPzc1ooBZgiiLW5",
  "key3": "2yQVwJjwcsCtHJi88FwbvC7Aa4qzTvfTWcx4kx7GzAxs3vHKQJQjb4Wi99wR7kDqGrKwAiR1SW33uhov9oD2jLGm",
  "key4": "3BeqsNzoL3oKi7Cgg778nU4HnNs9Ce4uUCnmzkHckoB4HvwE85TDJv313msvVwxvifKE6evk9EZAXZ7apBKbGag3",
  "key5": "Ftqrx5h3U4euCirPP3MABDUQQLUy91jXs4xZvBXusb3QXz148MEzUgs1ByWxZTupGj1tKEq5KHRDPCEouXkiZmL",
  "key6": "4fKAaSVhadTAputJCSeYvQqzWnJgjmbHwmErXbw87V7F2yLb2vnExN67WZgW7VoU4wVhhL7aaYFfikPSC9z4iMYL",
  "key7": "3r33jbKdC3sybB1BCXySqBMD3ahLzA4FuxG4AWwXmXbz8ASYfsKPLRNBHpSAjXo6EbMKSum9Bpn53Lpej9Bes18i",
  "key8": "541q3RHZnB1AEJMk8ikXa7TYK6QX5j3GtrE91oX4rPFn25EScnYprwaqn7P3Y4LVCToiSVgWEd3rq2jCoLzr4Gd",
  "key9": "27sz6e1YfMXfbh6h2YukUj2i3JGJyXTJkJmfTyeaoWt2UDt1YVwkK5xkPmqGU5drAyQPm3WV5xkTeriRQxYnCvHM",
  "key10": "3SkmqK3Qg8cgRKHZ6Yam5w1CogRLDAeMw55Px431XcPScKBJdeAHXZ59kapBKvnEnstie2UQBty8UiCsJobHXSjY",
  "key11": "Squ77vywAk7habufTCwa462Dd784HpnDKSEE7t8c42RZvNWQKoKZKYd8wD4C3aA42jpbxspgmQLimHqqnWFdkEF",
  "key12": "tdmikAbVYs8Q68zu5AtwrJfFEewMqqUQ1rzPNZVHTJAkeSSrv953y29g5vHwdnn7nnePduxM7LHycs3Kc34QJNM",
  "key13": "vXDuNUBKRdj57bPWx14u5khxLKfZXZUQa8WhZVmLnZX9aZsGQW4dDnoijPkLFsUaHeaxgf8E2tGAEKbv9oiTEAn",
  "key14": "4N5Yw7KPAjDouy9EVuQVPzYLzZuTkru6kBb4HrcmhapVknsLzNydy4u8uogF1Sv7p8is5jQdjEmmxmNjLfLnLtHo",
  "key15": "y8D5VMggkJ4y67BJXPpNBgDSWUJBMriy8QAQMVCMJ5TFY9sVkLACMgA7QqqfFGvbmMup81ckgxKVweiq64o1fBp",
  "key16": "pgNUr1bjqVU7fn2KcoZmBvq8rB6FSkMeqfb7HbPNqDdR9CManMi11Kmtu5V4dKFAbbV68X6ar6UY6T5zBYNwVwQ",
  "key17": "41W49BtBP2LLGSk3xZNMXuVcXMr31kUW6J5qr2yQwmjfGbhbWvU3v9sAuM8Go3feD4Tewbt5hfK1rsxzptiq1LDX",
  "key18": "2T9FzkYg4yK8xjmEUwTZHgZpqb8gmQpz9p8GSUmBDtXrZ1imQ9ByXH41qUQuerqvVT3nDf8RvnHHFHVdWmjPUvpB",
  "key19": "4AnjSgjdTC8Q9ruXoXyPVZW6XevcA4BQL2mYQz3Jj9VFsb1Z8ssWQt4YsQdyvQkhFgs4NpLvC8tpt69MjBusmiEg",
  "key20": "5fzFt4BhwC9znvcJE4gkyyz8g4utEcib1xsKhu9Mk6tXTXo3j5GA5n8Ve8o4m5TtXNoo5VCzUx6u2zuzLoB2NP7h",
  "key21": "3Sf6AME79A66ndhxcV4pGyc96pd6JW2NR2zPxxCCx8bioYCK5nVka9rHZTpCqYnx8FKntQJkEosJs6HFweEmGFS7",
  "key22": "34Abk5x6PgW7y5ov1gT6v7NMwramdpctYibibF6PVqzwVugzHhy7MEjbVFPh9DGSY5eaCLhnWW9p4YwVLX18MMDJ",
  "key23": "5oHQGCyfDDuQfrfDCCYzRwtJ7NDAmbr8YKSHcqLM5AeTUY8BTtcVuGW4J6isnzGMW9U5TDB5pGQGkzahkoqmnPEe",
  "key24": "4z5BRhMPQDVEDT6FUTrr4tMxGnt5PmetgQtNtqXktabUDQyuPRzjgLRLW7eKQWJKoRmUveRdFYQfa9rEkA4HjUwy",
  "key25": "58ghiBbgxsKTjRaqwEshK1T9XvMtZ1qhN1PZYVQ3ZNLHTSM3CwzUsCbtdRLGfSPhWxKxrPv2pK5TypycUziFofp2",
  "key26": "hYAEbuGquCdiRMc1SUsnjYQYygct9AwNrafKFNbU7AoeWopyMDNTLLNYNk4xkM79X82Rjh7HyJgbTDXjb87h463",
  "key27": "2zbivFCw3Nd9qyjLLxWWm3Jidqd1r8VwCwUm3FqQ6Hv2v1Qot8N1bmrkdFzkrXid5mmUnLLvmn96LHTY6J471uyT",
  "key28": "5dDuwsep9UPaTpscdPT3uCcrb2NGdS2kSTh6ajNveUcPfhn2UeU7PPj6jTa7t3y2zbxAtskRUVxKPgwgL5FfoGJK",
  "key29": "xeNvS4SsykSFNNSGMGQXvHLBuKhhgMNn8ASTn2DDUbx3z5eNg2z2kNaaQnvf4sQLUpN9eFBZwkUiMM7rBK4K4zn",
  "key30": "5YZGmzgxwtEUa5Lqk8UBqZx5nQWuG5atbUyCPPudfXKfwakT1QpWQ8oqSSmTKWUqrqet13D5KomgEBKfb2Hmc4oU",
  "key31": "38DCwg5VXDBF9TWCPwj6976M5AX7bFzbUZAoiPYdmjnWKVUVmL7465kB3Z4GZkpapwJrQXGDbM5ApvrPyFV9RRyj",
  "key32": "5YV4ZWivSBDrsRHWAELQ1KDwyJjbM3kx9gF2jZxyjEzxvgkR2CFRdBq1B252vAG2ijYnm7B5t9ThDatqE4cnQtdJ",
  "key33": "Wukm319KDjPvJCsuSkkLRbvPgZHrWgTgcjySxaJE3KWT19c4j8aLCLUUKuL865y34hHqLdJoZ33XagX89s1wds1",
  "key34": "5kQx6odVdsueoA58uZtU5cfa66ZQRjDi4LhuqaFEKrHTg1bwYGL8ksRi9yuHNk9MswrSv89FqVEwjEg2gEdTVemv",
  "key35": "5U4iUW169WwqRuYKhfYT9ye9Dc5kt43trrezyPeyFd8StQ7VhuGbZwQr7CPCs3HvZzw845gXiBAAUDYgcQvUgh9t",
  "key36": "5vYJKc79VVdHQ5APpLCBv6JKtyQE52qpDus27ni7fCvH693QAPiLdkaz2LFRMUY18tSYMU1c6nB7iYmcFGvFzUL6",
  "key37": "3RWDnArmbVjQQQAQkXm8ozzrKYvVYJukqV37k4RwMeg9ot5dXVnXmttA2igNaiHZSWzHRHhgRJCYFwMCBj726N8p",
  "key38": "2dgfqDpDaZqDygn98KjDtU6xaNaNoTNY9uATtHiu5kj1xGr6p3JKKmFdADg16McSbbkCByYUzZgU6APckL58Mv5N",
  "key39": "55bzpZXqDofD1BryGrpaj19bh1hLAfbJFYaDYSXvgij75is9gBBscxfEm9RujQCXXvfHYEtDHRrWJRxBsJbCqxwF",
  "key40": "28HVhK7gkyMCbXLaucw4daTDT6qQXw1CPaWkbomYDoKuhLEYmghVdFt3y2q77TGU3bmBiu1kdEMSBxoKQAJMXemH",
  "key41": "t2AqtYejViXpuKuUUq7VsQNsjxZSMhuHcpFxETae55P8HAkpGmY5rwwid5g5YuEVp5ZEV3DwWf56v2ijyocrL4D"
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
