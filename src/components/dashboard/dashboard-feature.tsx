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
    "2j8yhDgT5DLr8ruW1Rev1fSjea18MDFHpoS875hS4iSP1BCPFDCEPeWMbVz9igUVJr1DrRByXM9gTPaj4XjC2PG3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jmi3svxrzVK7RwPkcsF3nHxodv3VPjmk3g8XJfwke8icf4x3ndLUzKbDEQqFeLMtpfzVVavya94pVTwedEUhZSk",
  "key1": "4p55JcQuaSmr9XvQzqSnkxeWdqKbBpx8cUTCeP9qNTLkXNAf3bQZb1EWrkv5hn4NuoX6MZ1nw36m9PnUs8q3CTQ6",
  "key2": "FQ7jUHSaKDzhe4rrsx3tQFaJzoJRNsVovgidjw72afWRacQCTEEei3FUwgn4mPBZXyvWzEiAApnUb3Q8FfBuVth",
  "key3": "5yATTW7LBa9ofXEwmVQTdNcAMi9pGMLAAKopcNzrn1Ki2RsHxHvLiD3JBVAb7pbGnRUjcM2be2P6Q1sK4v4yk3dL",
  "key4": "4GfkoHJ7Ugh66uU273rX3NAfdk6ajZ3oxE5msWiDt3ByJLStD2UdpytsX2mNhZ6WdgDzjdoLtmG1SWDsgrLQtM3q",
  "key5": "248sszpDGXoLxKDM767ZGu6eeVcBADnQLfStQTPAR3JPXoGt937vTBHAY6GQBQvbboELVA5wDXpveg8sGqZtppJp",
  "key6": "4KVmMJhhmUhMZaqYRxty36XQ4UhcSg6RGNHTF5NPrDq1aszYKfJQmKza2szfgU6MjHo8HWA19CBvRKJ3yqNKSQUc",
  "key7": "5jEBuQjKc813bvje3WAmSQXXDoAxQx3DA25Ccna5SE51fQuJZ2wsPPSji36U3Kw7sQBtqqFy9KEGRZU5W9fUDoJ3",
  "key8": "67fZuHAt4NBfu7Q2UP8oHff6N7psKGXsBHMKAkAxtjWxha8tsH4jdev5v9AofDobruAcq79mE9XduPqUYeGooGGt",
  "key9": "vw4MeRBC1QYso4spuPUYtBHgRZkAMn758ifjUP9cSq4hGzQj4QtxpvuAn59ySmprpTytF26FezK4P75qKGdGQiX",
  "key10": "47JNYQG5TwTaiocFUJLFB3zEWyJgWnj1Y1Ywuw9roq1H7GwD9Mx6tYXbJ8gBdCpebBYu2QJy1S2T8g3TuLoQ8xty",
  "key11": "2ksAM6vrXxgAXhYpiJRE5iGcXkWdCrRsmC7rdeVgrNWkW1K1fcmGC3QKv4i84oWYmTGmWxxZGELS9qJNgTZWx2r7",
  "key12": "4mPhiEMWmu4o7sJLBZs7AbN729YpYjrfFMG3J6ALoYuLukuwToRfcYRvkrvari6jSq3RiMtsRhsqRTX5WtcaYGMm",
  "key13": "whCJdRUpLx6CP14EXVVUB12YYdJh4TXKQftMLDvePXgdEFsUvsqFDXFDmMPGdJkgEKxnmV3NfjVrKwK1n4tmE8b",
  "key14": "5qEv6iQM1Qmos24RtaUnJFukR3FqCNJKfsMzcSV2FJLB51ZJBv3UsdXQZ5XdRJq8PpNwqzcMhp3WR4xnUdn82ixL",
  "key15": "P6J2fEFYqm1kEEkfmDXNYs7zDwVRJRHSYPBgYDsPoQkoCzUoJr1Ae7ZBCPpWXPCT5hMwWWF4UJ3KdujdAnpF6dg",
  "key16": "322A6TrEoYo8WcZFhQ7zx4NFKvDtpnEU68kbZEtgEtA8msbdu4SNct43YN77gUdrqQmvborinpVXjAiMDZ3fgtLS",
  "key17": "53PoVVtm45y4L6i35hhQFfdqwiuzrUCoFzJQ4hq3nZgkBMLab43JdDCJDEaAdiMseSXHzcrByFJ6MiWDcH9BNKTB",
  "key18": "LMqweAfvNrbDXPQ9DSGu4hXd4aW8P2ht5V38akEXs1Tt69CrFJGsPxFzHszYEh4nbWrx3wv9FvTg1AVfi3WBEUq",
  "key19": "4N2fhxqwZES82bJxdrKDXpGpbCmWipULwWeNevGyLWFWAJe3uD9vWWiTMnGsX7zm2zcGj6tFMhphhfJsrFFSbpak",
  "key20": "4hjcsyCuYyMfVqMbiKEWL7qi39fvU7pBXyFRfKnAm7uSj78yuQBEWMGsU2vYvfuKZ4QDHtKHqbXRwDFVygTb59qd",
  "key21": "3B8mPk9LTVBrRpp7qK6nJK2BBwed3jSNfftqpidY2SzdXxvkdi4u4NP8pWdA3HbBc8SYXiCYZdR6jdteSFsg45bQ",
  "key22": "5W5Y7SH5gDPtB81hRGt5oq8D6Ct8eFZ7qLaBLrYnpdHK89asfHzYDEr5vmiHcdRQS4zut22h925jRZS5kdaC9WVY",
  "key23": "4mtt22pW99BXwcwCEyda6wbBRjr6a6kJyH1wSmj3reVnkm4hS8or8T4Smp9AZ7VTXL62sDbG1KsXnFuoMRGhe86C",
  "key24": "66dHehgN5Lmc21cLxAc7bBkRrrpRMs8TxKWzibPW8i6vM8feRyQdENv4MvHvT9UaKgp5cEULSfNHAKpm5qBkbybS",
  "key25": "4EDb1ikna8pqgVgg52NWXYehYCudFMQwZvTYRqUPPibCS4sLMBjrRENT4PXBGUDJ3zysKHfvMNzsskTfxL3rhC39",
  "key26": "WE8qGvyTA3kLvDyHa4urXXr3wvP9vytqhkWgkuKsekJD5SEUs661TPhjhmEAiZfr5sGGMYrjhGEqKzKC5M3T5hz",
  "key27": "5kziuD994A4w3q4CYFf6xBDwd9WVwoA7uQ7MJB7Pq9TsXJZWNXezuN6d8se3vS1vcAYkAWETdkVKCLqzbtFiv5ey",
  "key28": "5tqJ9heYbgchpBr371L2EdvB522KWkJYTMGyoKTrmHWCZdro1UjMpKk2mwxJNobscpmtFMS4UYywJ2UAQRihBMLX",
  "key29": "23mdh9GzgSrVKUQRnkReUJjfQerEHjJBKqVhtLzCMYrR1q9NpiMYovXfdMhiJvLuMphhKM4PNmaZNPf5B6Jz7tyP",
  "key30": "4s9ooU15y48mKgVyh5hMbnDUpbxn5kkhKRosRpP6s9iLEHp2gQaR1ffcsUMZjrXyy8N5LbeszHacdUDcKUraT4K9",
  "key31": "36r6qcNotg9Agz4yoRnGYNKn8p3KWdWCXiXQckwN8T3gdE84HKfGRURhSU35feYvG7SGCSA7LKCsT2LyP2yubtb1",
  "key32": "4audH8F7xeW37Y1BoCgrXGBANnoHnVzwEGZikL2VaiyVM73vf9NJNG161ePTQq49GSeGANgmkysN4gTQTbQfiz4u"
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
