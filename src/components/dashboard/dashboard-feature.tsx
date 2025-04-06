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
    "2iKBZcpeSQ47L8cbM5DeKKyVZptVa85qT6R8rks9WSdTxHxet8QPUtwJvtzH3MAGSpjxykt3hYn66CPFFe5nUAdp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UjpyYTTj6BrzfXfbn4grSWcqmoQHrDSncc6rCsEkzayF2ugohnjjmAZ1MDaoUFr3TTmn5ydnmk3SxbJB4z2f3AP",
  "key1": "yVx3fUrwPRmQ6UdfmLsxC8dEj2wZguBNVsqRoUMCYuujADjBoXzm4AqGLJq1iXsxrStabVxmEBvABBQNvxwZWpp",
  "key2": "2SxuzV5jTMPY7H2xUxctg1ai5gHemR2a5SeeLRjr4nUEZBHM6Zqmoy8Q7nhNKe5SACZCPukJKk8GtZiAS38W7DJv",
  "key3": "371vzP5AcMZVhdrkwhrRVqxrh7g2red6EkFY8uVsTYH5URsqy4m8nadaBnGHEpwMaqE49DGUqgip9rUzXfVKGyjU",
  "key4": "45MFZF1BiizFn9oDrXPjqqmqHzGStfJUmHxpuh6ovpbuHBRckMaHHeU1sJgnZyUPJhM3NywyRGPnoW6ea86C2BVE",
  "key5": "4FFAzkHWkHC3sWYnR4aSN66hSPDaFCW2jUDbXanrtpCELRoJRnsEW1SR2RGUMbasaiCJL6ywm5ZP8tdRDYLFKs73",
  "key6": "RoedmM8AYUVSqbfxEJw8Q5ZikyjdyupGbbtJG7HNeroz7DeeyVsLzAW4AufK3rvSS69aXV27f9nznSx6X3VsdwF",
  "key7": "EJymakBwB5n5eoVz53544GZ5aXmyVyQty52gSb8jfYhbRuTrgMv8FaMb1aQWcRk1JUSeFk4Le9VcKKYvYjjkUUf",
  "key8": "5FFwdmv37ub4vySdRhzCpgPbqLuWSuJ8SZV41Sfoz77vDbvz3JMaNKY1AUvf3jDL7MRBbjkjp5mJufaqiKL3WknA",
  "key9": "5EEjc6BHiWBint8sTfVePryo9bvkVvDCKMJJznuSq1HqkuU8mKMmv12fvA1Qo6oc13ombdVACchoActtxstESKAU",
  "key10": "YiZNfrxiW69D72CxsaqGS3SoDUVohWgMQinRfturfTaWfzu3zcNFWMn5v3Z2AAfY8qp95ySwLtQ2Kxw1rDjNgMh",
  "key11": "2S9B64ch9r3R7tr23d2QooPAC2TVHgTpVR1UB1xo9c7tpsZ7GVGtdAiV5ZSojomGL2DzmvtCuCzaHjWG8Jr64cHW",
  "key12": "3GQaQidx5Mcor9RMYCt2K91jk6LuLQGzJNYu259gXtJqME8mu1H9fMvP7RKW9PS95cqvuiU6viSnJ8dTXXk3Nc53",
  "key13": "BCuj21w9kUmuxnpJMawsqZ1dUPe1hkaN8dMN6FjGVvWKPoG27iiq7i1R2ZgRMB55abZn1im9Trr4HKXQK9HZL54",
  "key14": "VULjZemds5vkkZGYMvYpWZ3W7LcRaCNGwQ5rfk9dPiSE3T1KYJYwiNJ1LaF9k96ZW3JMhksNkbg7jAaAKwBCsYy",
  "key15": "5zXtGKYspNU7o6VSg9stak8unqJodtuJJxuC7b296DFtzk6nP3ZkgSW4FRxFB7fkcYKHuxWXFJheoh6R1gYDyasG",
  "key16": "3TkFzWkfYXN74XZhyns8rey38qn5V5XYgbg4f8fc3HhpiM4zW84cca1ayD5Ly5cgQJaTvkRMKy4ZEHTf1F118v5v",
  "key17": "Y9GdY1Xk8yE6sv6BhGaMbWY2rz5WTy6yauiVLTiXUvhsbtRcuSBypbJj7YPGEcEFsg1NXrQNoqiihxVNxCJXBNt",
  "key18": "ezCqgWKG3gA5Jbnf6JmRtJ5ooD5QKXmH2RjjvAPVzp4fWadoP1xUhh3aPN5foLVLVq9mBBnPJcFD1R4GWG7sLqT",
  "key19": "4Zy64NwU47qMUj4zcqotioTweVz7sodfbicpVRJw3eY5BxKbiG53HVdvLD3r8KZTzNBmsRQEeL1vD5G9aCXnoJ6h",
  "key20": "2DCREr2J7yzAePPmP57MWKwCxff6CgyXz2wKqZyCCHEpsgTpZy6Fg48DqRuq7pmkpKY67QWmc27uYdMbNUxPSZ4E",
  "key21": "KoeGkWdfvUBhr5YGkEPkth2RobFicJujPbk22jNYiBzJL9K15GNBSrs9M9V3Yxgrg2PDbuj1E3k1oAQiL59uHaN",
  "key22": "muzLa77qztwuTsVyPBdbr3CjNk9gEPK7PL11Nsx7AWpV1QMu3uKTkRFVccu4vEqVzm3oAGix79e1AXaCuV98pJK",
  "key23": "35oGsY12BDQKx1MFL79ZZ4XMTyas6iLMGmgRwc1RFEQruD1KFoDL2HdyoB2GGivRsrtSkPSkMVRnRUQAnJDzWDNp",
  "key24": "5C2YpAuz8LJF9QcRt5sQii9rZpkvypJ5d1dsS9w7PLx3918Gn35MCFTaquT1guG7RfEpRe2WgUD7LeQBMqFEzDJj",
  "key25": "5PeR35FcWjwDjdXG4Kx7ADnzU5ETUTqCiXiFUvwo9aRsDvfxko3Nstp88RburHX8fa2MmxyjHJpd8928LrxQRvQs",
  "key26": "WX1UvcEBETF4MCPaDCRkAdQf6LvmKVCughCUsFdHYuPBhKHsWS2aJgowkNELs8PEgixbPqJiXyMmfxznFPd76wY",
  "key27": "aPVaM4UapE2p7ZufLGr9B4yPq6ymot57oJhjabnc4rt4MnMpJk2TT5uSDbTkrzMg2bgz5nnR51djCrTyg2uFXWh"
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
