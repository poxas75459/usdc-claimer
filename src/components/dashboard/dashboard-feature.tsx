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
    "4Bw9RVXvyS3aicTqByqe2StCyn1DDdPprqHPj1FuvN6XJFcxRTRHXgw1KvkpPLTcvAdoYYUgfXs61AWoGAfFTBU5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PmGp55AJB3gQm7kDu8DXVNpvQKUy4xRaRGKbcuxVzUyGzoUmLoXVAEagvN8BvyyzSUC9FFGxhTiGbvKbs1nCzH8",
  "key1": "bKCoYTVjLJpPTDokmNWudY7bTtU3pqWptg5ZT3MpH78c7LhFGhX3LLasPXTitXJs4trfu7HGYTy1QcbQiRDLzCb",
  "key2": "52zdJht6iggvGDfu5c8XeAZcPZGbiq7m1ZH2HFGq3LaADBHVw6JCAgkjjtiXHA5R3tGhaZ51n9DUgpxFGndtZyxe",
  "key3": "4X8UmVmndi6xrKHz4iQ3oZhZCs1zBU3wsDfwdHMVU4FY3Q3qKBBzj3eqYNosjEbBaypwkgPA7nUcZ6WCy1iX3CaB",
  "key4": "4RFpBHEinhMf3LRaSmzBfn3t4ZKyWmRya1n2LAXAf8ms9QGJEz5SAEjuxr9g3TsSvS1YM5Fd4Lefj7rM7UtyUatY",
  "key5": "4CdjNaAagMU372jpFUqDbXKrVgikW6b53knDyjJ6XJBFzz62id6UEtrZMttCDWnEzgknqzxnghFqAafK5y931czz",
  "key6": "tRtCX8UFtcTYoCaurh5VMDHcPtf96WjevLJjxHAC9GjE9xcXBdZkYEm6BcBSm9zAwRnZHp2SiHBbLq2BQGkrTVB",
  "key7": "3RmRuP2x51vCWR91m6N1cxvCCpFf8bDscJv56dvhsHYfNMrkLpbyNJBiVBtxU5UzTYs7m9Psy7ccdbddRhaiSzkC",
  "key8": "2gFf8AFv9kuQMgKN5GNeGn28YorpnAhgZ5VBU6g6igowJRL4NmUTEubLCcFzMYiVCtMp2vXwxDT3BEBKajhxdVp9",
  "key9": "4Wv7po5h4wHw6hBgt7oWcDvBF736DJT6GCSyQxq1CNc6C8zHjCNqAqWGdHR7uV93hn9xPuWjLfF4yUEFgem9gJ9T",
  "key10": "4vSSZinPGzgkGrWFAPhkhC6t2xnMeNg8UcPN72ua4vPBtzct81CjSB8qTy6P8VP3CLhPDkE6nJLhme7X5dktqaJx",
  "key11": "4TAYSTFgZbYyRsQpHTpYafLuFuBV4FQCnu578hRpxnF4FkkS8fbA9k3VPc1C7j6kHYdSXbFeqR7UK22mAEg8cBXZ",
  "key12": "28h6makZVd3oBgQApmr3LTzdNic3YEDBJVgaMPgMp1TbgS8P89iopCc23eGYGrKEwNfkGJkWeFong6QXVTD8zL6y",
  "key13": "tHEaNSdJMinCHfWEYRAZJALx6ka6z9aAQRCibq8SHyFGoTRLJS1ELcLkHXPdzissfir5bfFcYSpAcFhttxgduBS",
  "key14": "3znzVQkHQSxNFJvzJZybzS3h5Kpx7nXgdVpQRUkEH24vnZmuCshUaNfEfwoTqjeRdTWw7uiLP9BvsutcjA5yfReG",
  "key15": "5ac5i8oEL5R9JiBd9sAdBVtAkSVtFg3AmCWm5P7sJt3tgfegzZ2RzwHPzE2XCF5R8vUW46rABrMRG5j82cMXAvu9",
  "key16": "4cw3qDn4gxsQrDiPS9Jo91imkuLAg44Gw3HMVXqHimAiedZBiU9yj1t3buBScYiod8oYxW7Yy8vho7r5ofee57Ga",
  "key17": "2AxB2bGuACuVU28QSKk9KroG3Cwq8wNRF8HqXnEAnZWZ1ER7r1u62CEBa2QggLxjdGcYGTsRTh16yMxzusNGAAv8",
  "key18": "63LosZuM2nS8BaW5Bxa3YcA6rsF61oYSMN7aRm4akEyV3K4KYaKa3fTUaUbmanbvqRg5KhvFqWFfDZp1c9ENdJpi",
  "key19": "3WfdFYKAxqiTMnwmuLjq2tFzSsCmd2pG4Eiy6CedMHKYbdW2wxz6F1MUgGnARzGFo4JuKdUCH72i8wpkSWGSVSnz",
  "key20": "38qzYh4Ux25EGnpq8ENDDQS6xavUBw9kScsNpXrrFp1sQxwanhELQTMyeGhJPAWjb7pG2qjk47Qoep4fWDPMcHkY",
  "key21": "5wgYmPpeQVKvmHKG5YbTBRcT9PTayQU2saAfrN5GaRBWa92WnUm6kNwvngTgKUKQzBuHmBPSvA86QBdwDUGQgCsf",
  "key22": "3efoXn2CJVN8Ag5etyrb9MkaiST6hrVUwW7iHSEZh5fVz17yoAVzfGmBXdmQaZe92fXr9oYyfXaijjhGTFqgSG1m",
  "key23": "4YLbRtKDjr9zYSHjGsXAZ92HeCgm8EbS8wmdYNtsNDwumSYq9yfVDyzcC5eezWmpbLQgmJrCy9hTUUmhbUKCFEep",
  "key24": "mxrrmkKGsbLzX9whgs2pM5FhVgaJEkbigGLWwpS5nnvbafgdwCiX4cGA6RTXannM8nupAT7yhBxWx7zcXqrbpS7",
  "key25": "3ii1Lgxk2PXcwvuJB1D3GkeAPyY7YJgvUuSVZV29jm5mKLBw6X79B3MZ852vGaeFyi9JRCg8PXc21nKPKjAqfdyu",
  "key26": "4bDP4mwf6SKZqoZFHup6QLQbqJh3852KBmuY3VC2G36hm37DmzmcPYC5iviB7RGicKLcHnow4siKBwEhrzbsSqAA",
  "key27": "5rNwMWgtPFzvTpSEbf41CvLF3PVMZgjwuKXKihBE7XhkCsDQWoQkSYo45wftSDADt7Zhp3bBpjRUFqTac3vjyXCV",
  "key28": "HQe9V3D4vR4eYv2GKszarVnMPu1rL7cXf3rCzVs8vsTGqtkb7cMXFuB8DzCuG4E75QQ8KXssQRadB1SCfttsJLB",
  "key29": "TzoSPEEusaKBuYb7jasDYViNohZGWsrwYe1V3V2Ugttdh6nLpPTaQAf9prERBHxXaDDmJ1GyrLc5vpVoaN8iKq6",
  "key30": "128UoDjg1hfN6rjhHU4dhh6ygkmtEaXUbZRnA3DTs4W7iyJuxW2NxUF6QzisH6jP7c9LMyRgYmYPsnzkC9FewVhp",
  "key31": "2sfFgq9FRk6aV2gYBxGipo7DuZLULuyZo78mKo44uSphYQGBAzYNhsebEWn4JGJfNS79m7Ai1jkHuPt6yoKj15kj",
  "key32": "4QagB2kehAL6CyPPGbMreVzaj21h39GhMdXv29UWKRcvP2c1HNCLTXdmVYXetSnqB4ZDys4VeUeGQJn2LM9KjDH9",
  "key33": "3Gb5s9dz7eWsjXAtpfuJKsjD8kd75eL8HUkyqRhzLRBx8WpZdEwLyNfwZhatHNMkMctEz5tVFrEbDNTiargxyYkt",
  "key34": "2DnpYAnreywcVTEKmSiR38aXwQ6TpD8BYXx74EUoH9u7PMPbaD2YBDKiWiQTNhhQcDRjcjMb36DXbE6uTW8XrqZK",
  "key35": "4rH2MdrCXBYXerWngUWRyMBgHayKApLSuEr14Pn5xoe9FuGXutfNp65kL4eKkTqsHtoSykQpRDTr16oRb6fSi2hB",
  "key36": "1nLg5h4Zt4xEpffzJPp4nW6nsZHvRqiASLqMRzDrLgRZCt6YNTX7dtCJtR1MYgLYRPKbEg4DQq4jiRkJqdSPuPh",
  "key37": "3A5AjhF3TKe9mTkDq7mpTBKnMkdcDPB6zsSN23hFYSA3KqPeh72SvERWr5VG5XPPte475hCn4q1GKdJPgkx3kGSK",
  "key38": "2vvp94tP55ScSvhc29ScmtjDXqZnMywnwM17T4jdaZ6riYn9tYMp55isCiSH94Rw8SMcNmz1JYWoMCk9bq4FavgM"
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
