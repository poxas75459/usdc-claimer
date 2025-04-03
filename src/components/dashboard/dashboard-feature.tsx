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
    "5J2KQjgob8CK3cGQxwnG5tovSAmH814YRMk9FR7ZNSVkPt11ZF8PWa1p9dY29UWdc8UkPBU1EP532qzNycDZGdG5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49RGUDaLx3DTxkELBAiRoEmFDkDCnZuJ5vejzZWTzsoXL59ddUpnSZLZRFsD5n9Xyp8DBRNhGsp5GbqLzCdqLJmP",
  "key1": "62JAtziKPxk9b2crnbVXBVWCDHHy2ZhqHP1xNUfMUihYcRyE4jCyPqjXpbkmtwwthoE1c92HfeVRCLJBdN3Ka72p",
  "key2": "mtCL1QhBPCUkHEkzQVL3gtcWVfoHa4gcoGUaBVrga7eM6Dm7pi7HKgSwF1pdK9rKiXxKMcxb6s33xgLWbneQBPK",
  "key3": "5o19uEpmMS55HBtVmwnXMWQygN9JX4AhukYFEbJAoQEBLaf2iHUnpcP3T5t5uR49Mayn8YmHFR38nmsJMWriGLJd",
  "key4": "JpugVd5rSapct6c1HHoeU9MJbqsTMJBwYpZkGUeDRKRBak4KwYbd6fZvdkPgjubv88m1fLf8JmvJWzQFaY6HuJ5",
  "key5": "UWwgRiRawzcFXch6M15ZMvFdaZJnG5oNLuF68nHgksWYxQHDj32RfEsZ1Wn7BLDNHnTtTzGjvVGtho4tzwD3mWZ",
  "key6": "53ETVHLb7gXWJ1BknV8PCG4QmN8yvZa52bQsbepP2L9KFj7ksLEwXdQgyF8qfqvyXx68BwfYN819XzaMUZc3xe4Z",
  "key7": "5EF643wohpXFp5dR4ysdHqN9gXQ9E1kzJ1owNx5RxHCEKWbYidTi6JysD4ko5jXqpuGgppqk342AU3XKvS7KtNww",
  "key8": "5myTvoCCX9eTLBas3vqQSofdm1vgrxxLkhkkQvxjwjTwbT5jn3HJ88g4SnMgv8BdWtcKt4haDsXBxReD5vajvSfi",
  "key9": "5oiXV9E7Sd2wsDeyUR1zEyrJXayAdiQtdmPpbsESdnXApTyuKmGgaCDB1pURNT5g85f1BvQbeUGiRgyDVxyR3bRk",
  "key10": "5sk1Pg826AQMqhhmk66Rr4s2oSPk6RVNUBVD5dEpgBTmB8THDC4uc3ZGTJzPtRteUQJRYumzZuTQNjjbCKmePkaw",
  "key11": "2cDEWXqYfkurqPzJgD4Dx6jWJEoE9VAJfF347KLj847iRwdAeZ4aCpfXgATEbVWtM57qC9qcUoPEvqvQm8aVMNuq",
  "key12": "4a2SvNF4TNFwr5fFBUnhVijvUNSAWxpVPsaoZyEWcYBAhxyprTVB5fVcbVYLAVAUDAPG5snR2rvJ6oDmTVZmYKMr",
  "key13": "53cAc9TZEn7X9sUg1wXfLJmzVzoSFskgAdn8EoftvTGhbfndCU7rzEGo9uHEeHKQHyv4En1TjLy6zB4ZPAnxQLLf",
  "key14": "3eXVJ5R2Qfbo4a7EJnbLQZfJhyVgnYLN3xNeTGeGAebn6VX1kuVgs96mXtjZTaVc3ntkHMWXbad5WXTdzMJNPDZ3",
  "key15": "RR4fquPnzv69brDvyC6ZnYmicGf46fBfofKSSgiukSwNUo9NV28TmQij71R21zKSBYvvGcE3JTyRUgSRPVe5CkN",
  "key16": "5JFDmz521oEjg86W4maBGpDgAyNDwa4ypEiZCcY9XYjA4yzwPrydedAy2aLWZyZyxvBRNb3ct7YTxQtTaCXxYZ5f",
  "key17": "4N97UhynTx42qBhErnKtZicjG78UxJo6zjyxFHpHNB5AGjw9EK2eK2WFjpo6TjXJSwZ146VeCaWWY8Rs1kyvhRRu",
  "key18": "4EmhXjtaxFhgF4xxwTZbEJTRhg21VoJurSsv3dA1gUd33cVJrRieGHDWUUJNeWiWACsjKAWPaixkkuz5jgrYh1xB",
  "key19": "3gqh6uyjoeEsdUW73wfP75fgWtdYQTyNfZAh6Eo8d9EG1ZFNjegTfaAAYgsBF1YfWeBuWVWvkWbkbdhK1xtkzLoT",
  "key20": "7q4U2AegCD3Jy3Zux9FBxRZFvFnGB5VvTpcweigFYdYi7KLkw7SsC7n7uM85y5f5Kr2BkQpe2DJe9gooFnSCTs2",
  "key21": "SGHdj9C93PdGMsbrToxguogQvF6Puj1BmEq4oTSL5RP6f1EBoWbrks31DHr8dE1hg8QQAm3ZyuaQGavLqd4yTch",
  "key22": "2hdeUxLnDFz4aoJdkBAJXV7L2j4jN7DibrQJPV9m6jBLDeg6mzzmpq3pNskP6SYYWpLmqd4AseoPhFsc69CW95Am",
  "key23": "2wLAjFpV7EHo1XfJG3VoU3UHe7dGN8dayTTffGzAQ1Yt6YLkoPzcC7gzF9GnC832318ia84j41kRXFVymsU717S7",
  "key24": "4BxYCGmohCNv1rkVWjCgCMsKDnSNws99AKYncN5KpVsDHu9GFxm2C5VuhQBvqc51jnNKBfB6yMYVKihWQ29HdL3E",
  "key25": "3P82QVxBUV5pyky44zek8Dx1zjipCwmLo2VWRDvPc1uJ2EdR5SQQp71bSTiQCX4sD2yLEFSi2cSmB6uZa512LobW",
  "key26": "5X5youVmiPJ5hFKhohuk2n2pxCTa3ShrbeQCqPg3VQp8fmyXd9zJ3VNTv6aVd4p42rDA5t7NghLoCYkUgUgfc9Qq",
  "key27": "4mXjMnRKzrwi67K39oB9mBj73mwTWSy5bWpoSJyiiJKrjRT8ioDexXhxmexeLt3p497pdwHgNYtKXBYVe7ZbiSjm",
  "key28": "JJoYKD6EkcTzjncvpMX6k5jzQBoKCRrH1UwbkN1gKQdVFrdwmKE4sd4XW435cD1KcPsnW8rqFGDmDiegRjxcBta",
  "key29": "2cmnAMFr91YzbgFxkw2xTSAA9WXqA4jziXcxpAYotBH6nFKJrmrbUa3RPc1LeXgKPG3JU4scRgQLpQZx5G7ZVH7y",
  "key30": "2iPYHUfVksfyDvu6N94Vefb5eoe74kNYwYEbeqs5jwtBJRDkZeAhD5FoZEz9nBKXhUr8R63WxxBKUPVhbEdmdxNL"
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
