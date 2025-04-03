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
    "4if4XUUcShykAYzL56rMEWiYyVWCh4EzRtdf3z3JLVzETDg7YHWoctY2hGuYUMdcQ1XE68Dz67xmkbyh7PNHyySg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Kng1WiQqoZaZPZn6btTqGfTg62UWQHYDthvLyyt9pY61VmMyZijKLkUp8FnPS5P43bu2foMBrt8CcfGSxA6KowB",
  "key1": "4mnH7UoNJBordX65TssNuW5dEwE8kbWu2iaELBeHBcjo4dhFtzHu29fHjEt6vHHkQogxHpjrZbBq3Aon9w6XZYwD",
  "key2": "4MHmRtSRX8cCRiJpPVRGroE8BJ78kQcNT83ddHn8eZHrLe4B5ZtUMokrvfeuXe7VvQcfnEptFvQPpnvDCrZZ38cS",
  "key3": "fh2WvBPuvsTYCF7VVWSF2iaGJ3doh7RcRQKPAKdVPWumNtZUiJZB7AMr1M6iWFknwM71uE467MC9ku1hhkUBm6c",
  "key4": "2qFXzSqkicuAoogx9drfjjV445vtLqGbpWQk4NaBkSZYkL4w7qqPxWNEtYNCjuw6eA2jtTeFkA8CUgS1LJBJoTh5",
  "key5": "51iZD2w3YjyRBLRsAQm2H3emvTRM5ybyB2fkEtEVEWYtuGJjFvayyrUquAd6mEySniEiotZwq1WhaJPz4nQCCtQQ",
  "key6": "3nhGbM25cJrb7azRU6Y4KMYn9mjMsk1dG87CM9ukPTqgDF1cWJv6pfA4uwFBck5GudUM5XUGFB5Z6F7kjikxQRLr",
  "key7": "2QhBTedSJmrC2nTh9bPZN8Lcg6dNo2wqnUZsJRs6FLJ5bcw8HKMBnrVewC7voqxCizyqrKpXNovsF4E27qrM3BVV",
  "key8": "5pCgiChdPar1Z3VR7LPtn8GzviTAy2VCbd8FJQYrss59cfcTcgPNgS2iZyakrah7zCyG9DomAp5W4Atebov2zHx7",
  "key9": "2AU6Q4zN2RRYx1oQpVZGLuZQY6rVyVf49uvaLZLxPGaejp4p7DyBRTb1amckbF7sC2FBjvVZbDzmhWu8xEYAVnSC",
  "key10": "3S4PjcW8dzLoZF9FmCT3jrWsvm9kxpn4bEbnQGntchWUBTFChiAXAXJdzMad3nrT4Su5nBcosQ1Z25nC8vENoZdj",
  "key11": "2hSNZfoSsUGtZsB1Zoi82JC6js53SGnDb1EgJAz3vCwD38JAjaX5DEX5fxcPqs2bGvcxmAKkCHRryxMuGPfpGHvN",
  "key12": "4EQA7iXN1vD63Eer1iNURbD7WRauBUUoPA2RMR2RB1b8U12Y4C1NaSDbk2hPcx2yXv4kTnuWhUH6vtJHf68p51NB",
  "key13": "5D7MUne3u3gUgPme2wmpT2W2PjS4RmRThRB21wp91EACQs2Lg23YvMNVdapg8Sa3tFvq9LEjEMRHrjPrm84v3eE8",
  "key14": "3mKwJBRudkHPU1iWh6yPP3YmZpNaBnKydJKtPwg6Bh9nNBMGbyssea8yaMyQawVNscTmN986YmGembq4qxwNTRLh",
  "key15": "3cq8A9rKzKEfe7Qfy2hqaS2avUrpuvhQMoBuPWr2YGbxAeFQL1hLywmUdrwpt3cC5qCrNBf1Uw7KPkTXrnJnzSTS",
  "key16": "37BMbQgViEQ47NkFPsvw7nHhmcqmvEtmtXf3SNjRSF1ayU2kQWYR85fsYQDxGCBqpoABxhT5eESV14zEqpg6p597",
  "key17": "49hihm96Wt9SRR8WBwqE7U3u7c2JTygJTShxMJ6nsavJS2iWQ2hcMJDV3o88iqw7k1GUoNwZpMe268xQhFTUSznD",
  "key18": "ZzEzEWfi8HKnqgD1BkrQEKUoy2VkinrpknTSLPv8JNr7C2hKwGqQrwXjbKwuQo5yNW8B6t79VJ1e6vsDoPxdr3k",
  "key19": "4Ge7w7Xob6upHnu3H2J1XrMgeX6QXGoW2Si9STL6yLY2EG2NEeHh1xckSquPP9KMZJUPesPZWH1DmhYJAYTHWfy9",
  "key20": "5YCd6Gh5C6ufSSKkVhWJ6fdu2s3FEWKJ1ZnSbyoAZQ99jb7cK5TAsQ1enmrYBbwCeFaYZTMkaC4MNd6iMVKWjovT",
  "key21": "4gjX9yQVuMat2sqVMUfYJefMiN5U9VtduWwFJzjS5EiNjqczeJhpJQGpE4DgbHBP2CyEq935Qk2yyT2XkcssRLik",
  "key22": "5Hrtxca9doTCBkycXqWY2n4hakQ4agg1EqySiU73FWK5bCdZR1RpXYwsh6qkyFAk4A5nsN4NUZpwD3WmkAo3uts6",
  "key23": "2jgjfwEK1pu7LQbdzjHoWmv47aemVG6N14QtPuYZC6SXznQcWjk9cvRPP1GU8miNevnssA6sXXj4ZC2BVQZhurmE",
  "key24": "3cYT1fWXK2wNyiJEJj4kJUT3wtYDHp57ERWLRURnUmQ1L6GKDyMgCk5y14dcVthHcAYEzunmCEAEDSunMTQ5rRKd",
  "key25": "4knMSQarrghm3JqYNHsshfVecHmcacbRe3KEwTGyVq7PjMdYnMrrXXy5oJ9ghgGYadRxZCMuSaCtVwWCYKG4szdh"
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
