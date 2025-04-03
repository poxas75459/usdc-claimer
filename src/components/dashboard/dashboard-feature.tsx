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
    "383uAh3Cwe7VkkFhELUeYsx9DrsfcbTz1a6Zo8fWTxiD7WCKP55PCP9XdmDKWKWpXpYu2VDVL7uLaPLwhRjNNZRz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38NAzgo8umBE31J5XyzrEMYyzTzTbd5nVr9ijrWpsWhD6Ms7Cd2hEDnJ74Mf7jsvy7nDWmrgCokBjngrLahfDTs8",
  "key1": "5RoUiXYAYAP9nviKsYmu6hxaQ4n5WvrmxUocfMnHf58XG6CnqcDatf215EcDQreQJtAHpLZMz2bUrhnd9TZ22ipL",
  "key2": "4cXkAhCocYsGiHnJAH3x37HoYQYHK1jR63o9rtqbQMjsaKM9WNQuFb24qdctAEhcaqoiywZwxQZDbi3HwpkpwzEF",
  "key3": "3hLkbwcpfQWvyEEVDefyNLDLYZL76f9cXk4zVNfZUjsWRx7tZtQ4DfLxipZ4RGKZ7NAXrzq3Mjes1mbdCmzMvkiv",
  "key4": "TG6S7BPjNVnuaxybF3sJEN2V2vp5gGmmTQNKMfHSfVPNaoqJsz4a2n3sQFVW7ZHvV8NxqofXEbJ84px8tk9odar",
  "key5": "3FiA3Rk4wMT13DrNESWAcNPMUFetPFrH3ZaQQWqy5WwLZSGA9cC8QH32H9FAabYvVdk6E19Hh4MK3PL9q2XJ6rRC",
  "key6": "hsRyyHshiD6SadigT9RkAdp1cUiop44DsX7e95zGMbJz5iLBm5Xbtvz8B9aqEJsMezPjKk5Zgca1D4gM2LjQSME",
  "key7": "2nf9XFmR4M7aWpqQscycWDLX4HWZFXrbjp3gNjvFsvyZrXgHsicGFSUwW5rfApfj9RHKmod5nDuWSMDiTyxLfqjG",
  "key8": "g2aA7yqP5bvahdbyX351fPTwzZdi6Pu1kJ1tmsbeZuhdX5DziK5WNg54QUbtaHFxKTS5c7xCXN1roNxSeEZgWXC",
  "key9": "4eKEAv3o1SoZ2i5ReV8wsSCB2qs1DM4XCaPGH3PL6XEtRSQ3XVBkZBe5FHX76PW6gqKQY4fwsWZ2EYVX9wUWToeA",
  "key10": "5zufMAkdLPk2SYnzvgtLxPFVvM1Xq1FcqXruAF1X9JRods4BMsUtDBu67Z3epiFUuY43oirmrbWmTbXBDFtd7kRp",
  "key11": "3zghgkHzekKAJe7NGMeLsHhsKNcHeWLPvR3LxABGfqygn5Ssfrt6TtDGKGs4PyNoMTEP3okipsBxxDomihDsHLgY",
  "key12": "2MerRhPjoUYdC9vENw4UtZECdxuNnWKPFMVoYovLQiH2bUQtGCQcFwPLfPRrASPyRCfscnk6nce9SXRcahtFG5bu",
  "key13": "2HM2TcGkNUW7qacQe2yMdB3kw6fi58TFbPUQLA4FjV3zqP4QGvXkW381nLRbFhX9Lth9pLcpvK1GBmVBqExn6irx",
  "key14": "dMsJxkDcmQDqsBxH48VDNHvybN9HEbLCcmsixkgp6iEe4663GmBjfh3UXqrkkF5epiHsdMnsrXKSCTicLGbqTsP",
  "key15": "2cGXuid1gqCKW2FfDzcgJ2goJT1ZWniw9EXoE1ACYKBoivsSDnWAjMTuZ8JgARgvmqqwHm94W68jpqgeszLr7M2z",
  "key16": "g3sdPoYydm724eVDWiP6oa7Tip1AR8MtzPkK6nQ7XPqbBrpS9naRShvTkt8pYBwYjcfipPVLX5y2wBdmpPrvSDd",
  "key17": "63UfvCXu38goKmeQuNR8eyTs83bQiMuzgKH44L6RqjQgaadQ3L7n9b8vDMCSCo4iejUr3m62yaqNPGx3G5GDTpr5",
  "key18": "4QeUNZ81iELV4eNSE31jEbTcPmsdW7u4WirLsVFCuqcWVd6Es34r1Rvht5dVrUDvDFrxFJk3xgZEqpmv54f1K5Rk",
  "key19": "4YS7Prc3YYXKfLq97GEHyACzm8iPXggjp5PxiuW2dy53g2PJb2nj66axtcgNWev6b7kjjRd6zxKjRMQZY1L9b2SM",
  "key20": "4B8xxVMJ5eKHanJCBmW4ev6YZMuLHE1AVGwTi9C9KNEwAjnJj71ZRtFw3FZ7Y3xCpcRQkfFHQ1hjSmFAe9uTFaw2",
  "key21": "5wqUmyH3m7bPe2yLv817p5dBkG2ZFBsL2QzhJBwx2vZsTKqFw3j2KUzZVBNocXHM4RPvAYPYpdhC7PSyaDTPn8U3",
  "key22": "4gG5gKcJDAPN4Rao4bHSQsGRfdymULaED2BY866HQxGw757hWWdm9uBkpiAaXaTnEjQ2JNfPYD4o6GRyr1WFZNY8",
  "key23": "3Zheoy76uRp91KB8n13DgPgMWFP2xFF3iRtW6pXCSuZS1oQ9kT3H3mLe8LFmtmWpho2yzEuGZnhaihR7815q3xZh",
  "key24": "2TW5Wp5pmVnMP8tZS9SdM4mqt76PBmYjfkv1CSF5ZbfikwHkyo2DB8xfJw4xfMHjqEcbzWovGs7WqwSRafgwFuvy",
  "key25": "2GC4YihTq4DhhbwnRapHLq1WbJzKnQ8bJpmfsfSM6s4TJefuZPBfk7MJ3Vd7WPeGgNbTtv5KatpAji5y47UQQFoV"
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
