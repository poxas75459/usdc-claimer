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
    "25hbLdrVDmE2USb2eESDaZg6nxXm2VjR3EVBeth4xdeVstwTzmGdfbCGK34r8iRLsssGucHL692HHMLNLo8TcNDR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gppjABi7m1pnwPs61rM3ZjuSTRPL4DzvoqhfJP222tebyuakjb7TyEqCZzK3KCGvpW5XWG3hoFGSYEH68tD8DJ5",
  "key1": "28fZoMc8ULWBJmAyXgzTFGtuzuTtVxk2ts8UN8vc7c2kDgiRtXJrWhmmUH4m6H8HU3uGZgUmRqwxrs7Qfn7RFrsy",
  "key2": "XbxvMav7m9pVpvxCF3PubuLsQPfBceL3wSYuNHCAEMAvpJN43C86ys2po3BTLBt5dLmP7j1mRkovEgJhCctfAZm",
  "key3": "DiVQ45DbatzgJBHZVvwZQc7RQyMiRsJyr9pFoMo8Vi2PoDxr2YcQgBtcSzoTRnAAAMv4Ru1m6MpVPiCHSV2oBSW",
  "key4": "hva8fPyMKoN3b29yCXnSGaCDdfgyX7tYvkUiGaWt26X1fRtsUjYg1QdEiekeSJi9MkYReibM9abGeGxAqgH6462",
  "key5": "8WJ8LGWVQVW88uckcECY75wCwXeZ5bidkBuFH6zkwKsSKDDQStocGqZbion8Aqj8WTVwJWJzNpUzAh79QQsSo3n",
  "key6": "4RyfHJ9nAWbBnkYJwKdcompk2NXcLQaBfHKMY5TRrsPjFsnnjqTmvuLBrYPhGSATG7Mrv7vTwB919RbtXatqVHJj",
  "key7": "4k5vhXp6ciaDyZuSf5swLtJX5XtcGvHXCvqi4PWcR6PQeBzDL9dWREqaBdgCRDmLawuCJBzLodxB5csyw54frcAM",
  "key8": "7zKuVRtsxx8L8sf3Gw7BVy5MVaHA1wYtxytWz7sbUeifxjdJmzPtzp5v9nAtAnU3PhCi1ofGrjzciYG1e17Afxj",
  "key9": "3saszYkyfwozUXxD9qPj2JmJLH96pZip6STLbmyxBrC7435chXpUvTR77jcxHBdR7Bw98rwBd4umCu9MTE3BVq9R",
  "key10": "RuhvqRdYnCSpp8Qc3zSkAHRR1C8ccoRNWkuYPGmjpNrKNJQJvcJGR96giWkFhtvXK15zKXeL7p84neb6nScAHNv",
  "key11": "2ZqAEUjYsNpWnhiLdBBxx1SHQqmuDa478YkHKjhh8Aye7zaa8RCfcsaeyXm1qyan1fWuHSnBvJ2unXK6uweBKQU8",
  "key12": "2nYkB1SV5yoEoovUEM823fdtr8jDykJwSmgLcPmGRc2JxLksPQ7jrkMZzB1yRYVuGdG3xZCZH7bAdae1vLM4j1c2",
  "key13": "5eoJfp3w8jaueeUSVt3e1g5PLsGbZ77wEQAXCEXKwNX1sgVkk1FYwRxxCRZGD1LcGcfni7t8vLv4zAXpnphdUJcF",
  "key14": "3uV5vE9Lh3rEFotGC1n9WCDxFYozqQgjtmvvwsMdm3iSDLebeJUZu1XCQofax7vRHyKkeRadgQHsdJjmi2aGc6Pm",
  "key15": "3Nxv4qqrEhfWa1cdm6ApD86piUcMo52Uhn2LgvdAN2oBzXFzM1RBNh5Te7mCJWc6rsfufwQcREebbkXv6dMVGZ62",
  "key16": "2LYsf9JM9i2FefC28EnhWs2be6ZA2zHoXCHTZWVVbuXhh74SyHXTETnuK83j8MQ416nxN5Mnd2hoCidxHiGLjmBS",
  "key17": "5Hf831NbMHij9hzX9hyqC5mNZKkbGdw3fP6PMwjyegkfhrpePaVf7JA9YL8X8ZoVFfAhJrgEe1b9QDpusFEmKPDd",
  "key18": "519Qf9KzU6g3qvTdJn2Npf566WX67CLv8nsQk2KXFf7oiKW2vwmjA5T45ou3TwJJEV6EWa6cpra39763dhUE9ejR",
  "key19": "4i2hgM361Hm5gd4hBrFBunR7yMVzKroPHpdjM44fCDdB6PAmoFDem7RaHmtbvwGV5hcsHCv9J1pMCYx3GSPWsUuE",
  "key20": "5TQ6BU3vM8PYxiRK46m4N82vjiuED3uKmqNAq7NtGhWW5BNpBqHXiUsTd3hbX3rdSUdRdLWYa6AX6upzdQ9Vw4LB",
  "key21": "3EKeDzpYmgSC3UzRfCM6Ru4XV3tBtVMULFCLrq5FKagpEWHdeRkiUT1qnKgBZTTMJJ8Xi4gSe9w6G9Yvh2H8s5XE",
  "key22": "246z75MxX1oCVMeFH1GQgWhbjPyYBrRZhY8mQUy8vg3J4oMBhh3vRM28GunnRTa95fh83zdyMhoYCFJMrgMPzDMa",
  "key23": "3T6Fcnruq7iqSe6A7t8jdNPdJ3neu3VNtaHrwbi8gfrTkYcJkTSnGPnBhtuT3rihGaETmcujC7QXyj4bP8gTCwHB",
  "key24": "2qjAGPsWG7GswJoFNSUKmS67EBUi5JjjrPUnHo99zToMKGn2VsgwRBkxXTem6CTwRQcsYZLG9VNEct4sGYTn1hY3",
  "key25": "oXgT8wCzBHZ2YXXPYCdkGTXLNmVXSSP2HC5eEmNrc5o6TRmzdsNGbyH4sWhFthYvMe1rHSoSeYdTuibeNQeZYNX",
  "key26": "4TuNZPHHZTGmqNbTejs7327pQCjRaMCnBBsQ7kBf9teQfpn2LPYrr9WNapYD7GoibfFeuHZ3MQQ11z3cDFp5cMgS",
  "key27": "FSXDR8zTjbcFtq29CvJDuYUNgSBkAaiGZncHj3B466ZYrHLMWWuatD5mEPHFeY99FeR1DQfjfMUh78Gg75uFWfD",
  "key28": "4dR8ZyrgLe3BJNTXamp9uTKu8HjXZRRYd22CZEXEXexFgktymmz2sdDM4KpCRWJetmKQZxFdmEdw1DtoKPRJ68eF",
  "key29": "211CbJoGm9ZDt54SU9joGJm11JBJrxaiV2wcy7JvdWs5pd8dSKdaoGGfAFDXdRpB3WdqsWQWRyfJMwovhZyrbYik"
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
