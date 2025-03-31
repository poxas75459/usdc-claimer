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
    "35YMQn3vhcfJcrG2oC3mhS4BWDfNLLF7bVBhiL79NXe2MpjsbW6fuyESf51PD1Cc6SjsSAPk7k1SeST2y9Fb2diW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XKpDa7AQqbbVniAbkZMye9pHspmvQTRpZDPALrejULAEf1y6YXkW4pEFBCnFbHJ7qrFa3PfCj4qniHBkXzGYGXq",
  "key1": "39cR5gr5ru8WsX8XcJ4QCZRrCaEhuVXfEHhK9tiTkTu47cSafwUkmapJ4RAcx2NomnkVg7146HPFeYtQvW6VF7fC",
  "key2": "3zNh9Afs6DcSj44GeAfvPpSiGedZFmAwTkDWMy5ogLKTL5CefKnM9dhC8PTeUZL9CtVk32QAP9ot3aQbUZEByCVz",
  "key3": "5YCHCoi16QwnDqLZNMgR1fu3h4edF8hH2unMAY11opB6bgvvNaREWP9F66CjvqYhqm9ZUPjB38tYNDVRXtc5UB6p",
  "key4": "28mDnYpQwxnTuqT6u2yNYL8qx53SBFARSX7caisGEYVFiu1CStHsj69nZPdR8ExNui6hDeqNwdqgg4HHYhbZZLBE",
  "key5": "3ovwCFwrDXKzq4EMdr6dadTGGcNS4sZm58kDxTobVJJurtq1BsDBtCsirFWarybLs1KNUXN1fXUsW3ncnYjQkwmf",
  "key6": "2FTomtCKzh4ZJm3KGCZAxRdvkdYt9AXmcyGu6rEruLUibgrYGXZtBrgXrnG8eNSP8GoqiEiqmKpPFRARgzpDZgVA",
  "key7": "3KT5KB2PGYzzsg5jN8uNd75cPbKTnbwkXLeDNvBw7txyHeASkr2eJZXTWBpaFv2uKDakVUFCdeW5Ytx3QPhwiAxv",
  "key8": "3R1V2MAPKRjLJxRtcjwWXE81phRBqqDqK4BoASGes3qP3QKcKuKRVo84hpR8CcWP8m76iaySHJEmnetxhCvS5CrL",
  "key9": "4UsJWr9jJJzYVBunsPGQ3zoBt527s1mciHdKNQMxKyAZMqCqEeJvZ3tptUJsfqHLb2HDVeNay49YAGPukP6LBpTn",
  "key10": "5jpxuQ1LamWspf8qVdSrxzu4MjDsx7XWbLRWyWTy7RSnDVTZLkXS1ApQpFuawjmRPoDLCwWFxvoboBTTUCCZcYer",
  "key11": "gr3xdeF59gFyjGmVtBNehaoJyCEMGhVxT8XMzmNEpmwEmyz5CnueTFU7xyjdJc22xsnU7RmK9hH842HwnQp2Tgf",
  "key12": "3LkhfVzUTw1veAB7FbjpZuJvqgGTcJPYSMKDvRcwr2LuFcPhKbzx4NPmoFRB2nKJyMrjnvZWPgqNjNbKwVUBXYcd",
  "key13": "3KnPo3JPx38DeKeNuPMQzoBi5nCKo2rbzhd37tPhDjQCtBSp8N8BPD5H6ubR9zod6X8QxjMuyn6V9hovAgpnbqYz",
  "key14": "JUpeX5uHAYeNcERbqtGr4FWFFTqw9Uw4a1jXtfBbyQxvttRtZsTxD48ovAA5uCCfX33Z5oHAdc15Wx7Vt7psNNc",
  "key15": "2ZPV2kgAUgUKLhguAZDpPzXeHMdWb1SJKg5L5Je3hkobNycHQchNWSvaM29CrbakSrDincUr38XnUD277HxA171C",
  "key16": "3WDtBa7T66kJLhDHEh7c1Mphj5X8cEzkCfZCRWjh31VypZVpREXkgHgMDwrDztnfxSAGDj2iqa8DiopbtqHrbz26",
  "key17": "2V1nT4qckKFuiLcPek5Si5JfwzpuTWerrWKG8pfUtrAqStNHsRUXuAnEwmb8TkfBG5xCmwvCySpVBPaGsuCKZdmv",
  "key18": "5qdXzEEhNTVMAbVopyNVNB9aBe18BeHagTVCzZLEttRWhpHJCMjd8uPgmxFzFa9fD9YxhacAaZ35JugMPhHtkkXF",
  "key19": "4uJkFx91Zw8duhcqqi8VCi7sZY11ygQbv1ejNpiZ8LaZ9mLxNLwDBBVWacvbWWs8FMwwoAxdGQmbGzsnB7HRtnCE",
  "key20": "5rL9mtuWWwn78UeF45F5Xs6RtAs8tNzYhymkWJEA6vz3MtDqXipE36DTYpwsUboLWcw2LA7DcjgkWjdBDVoErBDE",
  "key21": "3Xd62ax5Tnk2sBBYDXymfdpRPYf2RH15fYbnLHU3A6cLZshkRZGABEgPJXZbaMzfKpdLGsA5t1H8MFQg1faYx9Gv",
  "key22": "2G3fMzhtF4v4xSDqzrqGBWnC5dAcXGmi2Ewae2Q4g4FjfGFyBj46HpCJ15Kk54Q1PvuN6Ua8h4zE7Bhq6Z3iP3Jo",
  "key23": "2YhQkLDj1cYUu2v4e2B97J4kchFe8j5wCB52fnoPAnCnK1UutAfKjxwZcfPdfWcq66PxmByFotHC6TrgE8d2Ju42",
  "key24": "2fdsaLpFNxignaNg3SmRWFpk6cFgT4VhD8X8SaSXXLXGCu5wjzx2a7dqWzHSCDMycWyFakzbn8fy6k16NTkZvECD",
  "key25": "5ZAckmGExtRRheE8Jeu3Y2DqV61msdFdNmDDpftsfXVVgzN17yWtVgM4Qg7wDG96yxEvHTfYym21ZjWSpVbV8HZu",
  "key26": "3juoSxAoLGYpT1xogYmA5N8qvpDEcD7p5z4cLgjteEJKs46q7Wt6BJjeE9kzY8K36hWUmVkoQWYcbuA2V3CeGEbQ",
  "key27": "e1UAZsMb3NxQm623AcMF9iE3KMzKHEVkhYZN34EpZTBg2xH4KQVsrsuob8P69dYkCh7ap25Dvrb9ZiFuCPPQEBV"
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
