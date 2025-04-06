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
    "2RAaL4xDDS8DuV5B33JwspChTHW3RvpCEowbjNCFZrangA4FU1Ci2QzrzwFNnrUHGdJJEBqnt9cmdnV9UmzaySP9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ESkk2AKr2psE13LJnF9jf3kT3TPD3JeqYci5YaQeRVkYEBJGd2NCLPAFmtNzmWz7hUGz1nuSbkRxddthpuFLqi5",
  "key1": "45DvDCVxWqdnuot3hZDPjgwBGitKecbUhoXAcet3Rwb5yegRXFwQjyZQieGQwnJPdRFUkRSPxfYptT5hm9zvAcAy",
  "key2": "V7uBax4pauBLEMJFMeP3YkfpDZxhMhqgFMQphv1CQEnZEqGcLkjjgZuLDZzyMcEm6EbZfeXk5236cKq5N78hfdm",
  "key3": "iaD47BmnnggbmC78VDqFX4HKn8DNSrfdaM8MUhCzRL8cVj1eTJfGhiiJqYtK8xEdt8mdV4YMUePRkzywJ2C4NGD",
  "key4": "r5XLFzEAzCAxMDs8x3CFmWnn4am3GdHNcuEeUJEtETMn2mnmtbVz7nsqYWjgVi1E1S2fGgTKQ6QF9sddu8MCwqn",
  "key5": "4YNoki9YAF9MMaJe2KyTkperV3KUbF1u2P9D8KZvk5BpH57ZN1NFoQ1U73pjTGVCQLBJqVJfJ2GUqjvGm5Q2pTbd",
  "key6": "5PhbLePT9SYo8iNUQTkeHTUphazYTgtQuiL2DUMHugV9wNVfMtk67oL13hdP2wzHFhCTXeV5wZAR8pECVpa3Jj1P",
  "key7": "4JR8Yd6jJmZsT17Bo8tYBFuLtm38fbcX5RXAHabrUxXW8JKf75A3eRtfYGJuWZP19hmwv3QUNGhsXqXcD2t7Dydq",
  "key8": "27FhCb74jejmKTiN74tWN5JJgCNpoyxYyjGiaKwPFNPkDR7QG9TYdEttA3QKifqwouEu4seEwGNGYdzpkrSAuMoU",
  "key9": "4qBsvK7XTZRoesvSu4teMmWcDASejUgRioM6fgTHvSNvqJREM4oBUZ1Jvyvc2jNcnMHNGFr38vVGmHWfQpsrrbBQ",
  "key10": "2Q4xRERc9ZzPF6mMkt2f11jJQQTh9eJxyVS74enxfVzsSR3MrENXz1jDj967ibvxMyrrbBwYKRsFSrJP3njjdrab",
  "key11": "48aBRtmVvWq2qBxXpyfjktuGKZ15kzbZLtmt2kkTwD1NRQKNBjz1KLijZfze4VtaCAXx9FXB2khyTVHK4uQTrxGD",
  "key12": "4pFRyQwtVmgoVqQ9r2qYyMF9nti99KS8iJzDXhqRs74ndvPradAAb6wjwkUZPNHodsUJqKLLXuqxoBv3tN4LSBVh",
  "key13": "4uUggMxtf6Zq7fY3hKnyatCGtAuhsaVinACDdq4M6wkbA5YFa1iNwZSXF1GXWUAv1kRa5i84xJud8wA9rb2Q2zeL",
  "key14": "yut282ra5Kzbu44SqwuWcdNUvB8DHmZ3kcTTE6mYh2fgKFpQiE2nBxT37NkW4ukjdX3ZNgzKUfcNB5KnkbEUXDs",
  "key15": "5BvQsgjjrbwoeKTLoXG3vWsUrpS4isinj24AfSAHX8B4kMv3CERtxPeYbi8EWrjjvipAWqkhTrBKNutV1d4nB7Rf",
  "key16": "ZauiKjN18Pj2o8PmS8NR2jfEFfHJYmL3Kfth7EAdVKFrU7hSLzM9V8G7CEvK2k1U9HF5K35xkJL9V3EcrX5PmrF",
  "key17": "4TfoNVZKgw2v31AgXa6cq7LSe9iFbtbKx1x4Ex1hSC4DwQZtyEnWZLXsNsWmzP1BBWP3WVjLz34evoGDxnsGy3EJ",
  "key18": "2AFJ2ExEHgzgFo5TfB19TvQyvZNrsWtFwJDASzAnZkr2XS4VMhD7RjL9ZPw9X2YHYZkKivZqcARf9JLBSdBmVNUv",
  "key19": "4PJfhaZZ6eP5jFcB9UHvECVE8oRwC9mzyMXuSwt1cgvidmRh5wvRN7hH4yatscNf639yWt98mbRvZATkEdjXGkkp",
  "key20": "4HRsBLLvT68Yj2tLkAb68D1H9rxfvAB1u9pA343Tu55NT9FMUaa2tm77dRdv6TKpMWvMNVYLJGAjAioZuBxPV6hH",
  "key21": "3UFjEFqHDydxyF3uQYL7aWF5VsCFX2JFUS3gUWTjfHbtX6faLYAvXwzH6itZW3FKpSb1Jo1VuLGfSE5xDdRrZtRd",
  "key22": "2Ufgo9DzHkMz838cG2G9d4dmVcRzedwoafWusi8pej7sYAMCZgM7qR7miqbUV3NmnqMfvAiovCWDLXYNEjfTEYjr",
  "key23": "5TPPhtaNjj1EQN6zskV11MHLFXcqksGBVZNg3Kph4jcpdKYsR8ZK9rVE5A8U8yeGWoR79gwgAYZd5B8zfUCj15qK",
  "key24": "3nShDNkBgzpLN9csSEi4dFityNMDEhAchiDdERYU2syKwMFq2u9iE4FdM8hH7giZYJxUk2hGSHpGmuDWen9sDndV",
  "key25": "3oTajsV5yUW6YoKRoDm19NCnd7VCu4cS8YFxSGFdtaJGQbBndnmjdfR5yCwyfcYgUjyCcYj2NiuUexa4xxbTT8Mh",
  "key26": "64b4yUsfW1QWcPjwYwGmrX2zieLHhiWbmBkHGx4d1QejuiQQWgthvAhjCadFYbbTwQqMxdvpt55sz9A92V7YW981"
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
