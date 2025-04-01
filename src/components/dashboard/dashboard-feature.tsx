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
    "51G7G1SZBwcnTdpYSuvGYGr9jf5iUu4GsdubdsZMqFAsJayq7qK4L9nRV6scjZqq4n32QtzYVKqAUcvc1WLfavug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dzb2mtEckBpQN4GW8MFP4aAiY2JAH15jf8LocXLQ4Lmrh7a4se4BnpYfVQRoEvKU6Hux2ateBh32E8ydkyTxn6D",
  "key1": "pKVJ62BxiyrKBphsFq7p9UdpbsEcUdpZybu9uMqdTHmqcMv9Xk1ZWHei7pW7xpwsR3hmW81rCSkbE3px4mD2sBo",
  "key2": "5aojeeSizYZfNnzavBeo8TkAugQYe622PvvhwStHqdMvfCavv8tUbyWjifGbLAiyHFsg5hedYRQZT5GEKJpXDLQA",
  "key3": "3xR7aGB9FNi8p69f6Fe6XwCDA36UXgma4ZjrZCjbEgn76sho7aghzHvuiRf5tXV3SUdUwHvRA1xga9yZ1nEVQ1Zo",
  "key4": "3DpAgxz1QSBFpqqoq62o7peTXbgYgarFkjNbzz9fGuWpVVXyevqMmnZZNYznZJSJSyDuDzA7vQj6fS3weWbuqjnw",
  "key5": "4n9dtroUVY4SdDGBWrtKBgXVKLXWsMA2fntiFAcAYfXwXAQQP7pTcpsqdwZMR7zFb88r4S62jztyc1w6J2Q7VsNB",
  "key6": "3k8y58JLYpkPNeiKEN3zweSUaLDEpwFHnSJcx9QkxTQ8r2VrptebubrBjFnRbH8RHB5YHB9fpMb2HWi4gonnCZCT",
  "key7": "22d3578do1QxBmVNLHTzB5mh1r7zBo7CEnJe6d5JjuGtkTYnDDx4UNeJ1Nyz6iftzeNu1jVdTG8nXA92YdwGgs1F",
  "key8": "2sM4tye66khaBwr4jUqrTPBjA3YCaPo7UpXzWseTGiPhAEzaZoTR1Vackar1E5p11BoMcbimV9DUqmEH6E6Ge3CD",
  "key9": "2h1hV8Ckdd6J59D5ZbgvWonnvAy3d5onkYfFCpsF8tWnaSvtsujvgtCcAqGCV1bhvhYrbGsCztXWfpwEatV7EGRD",
  "key10": "VXChWB2fvE6Cf611V6VuJt9nb5S78vTtWk8dXsqfohrRqMaPPUgqwMo2rsZKUcip4szUvyx9tVQUNXadZG6m6ar",
  "key11": "4atqTvy23zAzRpVXxaR8UTcsNGCfGdoFM8MMiXsRD3QgVxTLz8GLc2j2cPj68bHQQuNHZABCj1vZfEg9GmsbCmGq",
  "key12": "4RNmVx4XbVD3srU4ZBY5YqRRBUawMv3CxFVX1BBYoYAF2s85CmmdvrkuB3MCvExuMVXrRm4dsb8GUiwxTCTDHdFw",
  "key13": "3F5afrjP9EieEk95eQSqpPL5SwrMwYHxio13UcXwEG2TLh2pf659MQikKxvH1SaypmMxbb2o9VoTuRckXjeJx3L7",
  "key14": "5T1NjcSarcL2KLFkd9A83FsvZAC3EXHhKZxbVac4JjUDdvcPgThmG9eW3ZAn5otAmqubR6CZwB1PVmtDs739dvkZ",
  "key15": "q5eMgbnu6aitb5SWmDvjq1tLdJvTyqGx9GkYochXC99Lp688TrSR4TCXmiyC97DDvhjahdUrHa1GYUc3WvDh7CD",
  "key16": "4pHwfGrnC1Z6rcLGevYByAWnQjiDuegVfT9hasoaLxxkrKuBEunkDT1LghZHNqs81BkfWurkYSmanKqUak3pURzc",
  "key17": "5zs13eqTzeX596RfhnQanE1ewowLM59cy6D9dKv1Cf1CsYHSGNm4tXAF4GiGFL25o9xRFbqb2ufQGGYrhMJUpW95",
  "key18": "4DwQuwFkLd1GEZYCGtHLziZjhHhmChM6D85j3cCAL91dVGCvtiTvrQMmHnhrAXTocXNc8BhcnLZUZ1MhVvnpXFaw",
  "key19": "48E95yxVrUCg9WsNRXgyXrig9cuymatpVpWHgbK3DuqperRTxGoE9ERyGUXzGgHVfbjXxrR3UJG9NUDdyt9GWVdu",
  "key20": "mRCPVPqYzoy7ASubCx4t8HBfkM4M9cRNZSBU9QXt3ES1Uo4eX8P7vPtXBF3Bu58t4bSUkf2dRjFSsGnTeJWDq3F",
  "key21": "2BY1tcZ173GjLiKc96MLbxP98wEZv6QBXgHPSPPG9L9k3JafHb2EViYLwBdZsKiDxsyqPd777iDtvQjiL6okDMw8",
  "key22": "2onyzmhn2a4u4BAqpimqUoJ42XR3ukvFhYUvGyxtWXU9dmnYLARyTonw9CXVnp6aQtRrFgUVn7cCWz3UTBGhEAc",
  "key23": "avYUG9KMuLL6bWdWJ7ifyQ62rGGC9ejxKrAdk5jM76VKb75b7L8Hjg7ReBPAwMhoAeB4h2MMW1Cg4iFGpH4nyfM",
  "key24": "36skoiBskimtpwsgNyDC83oozrXkyyRLyReiySU82cts4a2TwgP5emKzfHUsD9gSaad7VFEEMoo5cbZFXzB4VFq5",
  "key25": "2jLYq8nSWAcot9rzWtRXXJYJH8VtkJMKqKZBeJg5D8SgNQa71iWdfzLfSfUJqMicdSzfWqi8kvFWbzfcnTC1ZZxk",
  "key26": "29v9Fid32yaz1RWJKui29KxYDE6qpKNRMt3fhMroMgs4Xan27a1b8iRqmcuFwJBdFYHU5gqvFSh6Bn7qJLQZP1oP",
  "key27": "2in8GG3vVzz5M7VLXkNG4yE9V5s1Zp6x9WXCWC6yL6E5Yin3D1SLzb7b3uyjyFnS5gNaZzXzAotEHukCXEmnxoSa",
  "key28": "42KvuK6ajVmgZPJaXgTCnjVyvBeEFGuAYWjBQQXUownDKntEmYtZw2EHuKTeGgpKtTjSn1u6xcnpYLvHDU2Nap6B",
  "key29": "3LdLs1rjn6D1ZxQmtur7CT114FVw3v1UKPFnhj8fhkmoXCiKgcYxwLYcTdLHi4gTbGpKZUp5Hcna9Au7G2dzRvXt",
  "key30": "4AnwRAPo6AmWSvEmNvgYccYsz4m6JjyFfiexKEYbssRcdch4dgSyYqcXtnUCRzzm4eKhWBhuhpEWh2wxBhEWnojN",
  "key31": "4UjSMijoEN8aD8ZNeWQPneUp5nxN31iJYbDR8uXJTiy4mpp6H5EtRQBm6jJf5ARjmSXN5828vwoFL94XjyzHLRs4",
  "key32": "4H4ZFv3Mwznt3WsLCYXXMLGYGMYkkaCiKEobKqsYVPaP46mzqgR7iKq8GMnors2hn27HyPiyAWBKjcnkg54bvgLX",
  "key33": "5TbwmiVA6R2rAPbJQbyBhaBHbn6uwKPp82ASxufiYUt61MqvYbCZmqt8VcbayUvq1zJX67Fh32HrG264BQRtkTC2",
  "key34": "FVgnrXnKhqsXGMXr9Ybm3ZqLpz3r5xyFYWKw8ckdnL1u27LmKQWbTf265ACpZJTywgBUob98Lqfgqj2QVX6arwB"
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
