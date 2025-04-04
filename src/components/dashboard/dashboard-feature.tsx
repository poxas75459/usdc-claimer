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
    "3M5Cz1aQiBZMnKPPfPUYBzthiByZwYLKaYV6FnLSTALTS2yEWVQN33XcRX5xnVpMsXQ5SVJceLiBmV6gMzx9u5mP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qWCj1SxHA877ALUQ2Re7LvB2Qy9kTyJ3ntjxAuSgok7Jp82FrCe7utjePZJcGev4U2Maqj75vw3anja6qAmusD3",
  "key1": "3r6rverQWkTGjafdQfYqDq7wurPqXSk5cmzE342jYrTUkxLszUNFZTZzbVRMup6SfUmob9ky4zLgPYhFrjEZz6KP",
  "key2": "5Zj2egysH9Dp9pd7Mo2Cag1z3T5TJjEKjLT8dxJXjkMGZ3WfPWW6gJB6ZQhoZ5synTxP4kxE4NsDxu4Rq6HZmh4E",
  "key3": "ut2wrGyGntSQqFjp54RnySYvgY4NS76q4hRhUuC14J5dVqoeZ7uUW594cVBeFfD13LtYhA1TsPeQWCY1DpdJRes",
  "key4": "3yrDXnhznnJmrKFNRkiKVtnyLHEAsmpGLHxHGyrN9Df4UCanRZxYkwf5oWVDT4c8qwhALSTxNHzgvvdoFSQznujg",
  "key5": "2iKXaGAR2Vm8HL1p4zqCiTVcpP2gM1mwuXohEDkpp8xkociXpdJUo4ju6dfaqiHckzynQsUKhNPnTAS3kao3Tmj2",
  "key6": "3EJpi4ZhXF8g11Mf1rdZ7dYJsFPCYWodU2YiEx44vp7Fvjibj8wNgDzXiTmPtG7Jo244ab1QqBXvE2UpTPRNKFbo",
  "key7": "5xQtx9ETsif2AAWLWepYuHJqBiP1fqLfRvcq1YXE7W4u6Bky2w5Su1Jmj4Jg94dqiqTnYL7sAzJXPCttwbhWA5Hj",
  "key8": "3wCrkytcEFM2Xfw8YpwJUQzQNvcWQakm8fmrkKVGU8CmSbvkS5iKc8Jr7sgFeG2579x4RuAdQXiMUqU936EijiDL",
  "key9": "3BAhBuD8D3zCmSU8YayMndVQgfxNCW8EQNhZJbEpjfHBADNhHkG826K5eQSHi4T6L51YJGZptbu7AEUjRHGxk6Jj",
  "key10": "5qGXD45hyDdAuJr96xXJ3ZrybhGJAuNdZpYysBjmqM5hjE8vsJKicEqAL1xc8aERQnQgmfLq2XF7djWwWPGUeUm8",
  "key11": "2EnZDVJJTc2rgma58a45ueQVdvB1ptNM9zg9QJuC37uMqHA55PosaK8nxuPegpNvEpENx1TXa3mTTvjQEvME9Pyh",
  "key12": "457rpXMLFgK6tP1H7j24wYqAzV6aTvGxjpzudwp7dd4mJsg7P9ap5bdB8Y4zTa7Kf6nxiyjPWSd8r9kPJmqE74so",
  "key13": "sgCrNFXhGdVPkweAFksgn67tCbD5ARaN1U1SzRYYzw6feQvjfXgwYDuDRVF2BpiMn6SriJCPEx51gSCwh69fjpb",
  "key14": "M1RGqwoakWhqfy9C48vH96NMEpdTGtLyYNu8N7efrRMvBPyKuTasdYSaujJTWd6k1Rn7R43HhDxYX2QCEyDtaJ7",
  "key15": "2HHWaotsV1d41L2PrV3fiYFmZ3ZSfgzaXs4g3BsBaTYf8AFLE7YfbRRc3bV7XLdRRANsMHJYpAys9Yq1kuHN9KLL",
  "key16": "b2bRzE2U69cF6JG5y1u4LzxfpryZpcgvqLGQJKYYcxFm74NdxdQCAtEHyhTswkZM7Y33U77AtbCFgB2Qfn5FgYR",
  "key17": "5TFdr9ZZZMT8PmPEhUT2byEQVYrXdZfHJCQ5tsySgFuff2ycsCMazSTpHbDWYCZ1zD1gW2MoBH4anEvV1eWudUw7",
  "key18": "3UdDHAyjDeHZPRtzv6kAaYmMLiPZFoKr5J2tmF6W1gsfnrT8DHWsYuG9rkBhsD7HqSDc6cFwz1Eusk6oepD3mDBB",
  "key19": "55UDhemwvR2aJQQhuHiSc3tawhEdwmQYpZXdeUyYsQ5wpXCVihrXbwmUaGna9fFyKt93yH5UWVYXfCHFeMgps5Ad",
  "key20": "5o6qs8n73uHRX94axN4ZFPdq9NKb3HBiY82TNjdr4QxgB3sT7k5zGdMSkmhZFKFD7NYAeJPkFMkptgx8TmjrWrP9",
  "key21": "3jUgV8YxYoWUFuSBKMxan5Vsq92uWQ53ihfJBfirkB9J7r3r5PNGiqTE1rv7rhdEV5Rspgb3vLDnXAJPfF4Sy8T6",
  "key22": "4xrRJKm3b8PUNiFCszB9nFeAJ1qfz6Q6KPiR9XRvCZUcSqV53sorjt72eGF5E9e98GzF8N1PnuFVc4KYDxV5tTw2",
  "key23": "3tgaNwm7ZzuWFT6tRSQ9u4rEfBuJRh92oRhcJchAvDt3KaT74BqLyS4u67TaoF795LAF9M5JMoFCa5KYbjUpGNAt",
  "key24": "5sHSSULvWQdHaWqE3Accs3VHX3x8i7DnbGPjHC31s1bjXoKjbHKrdkjBRJ2Bh7WXQDMaVr6uGToBP7npdfEMeJ1u",
  "key25": "5ip3iiC1WYiA1T5g7cPpDAWuCZnNj3DN4awVJgUMvJEpFLAcLNQBXFzwYuyiU7Pd14dgndcudh1CJbpGzpw4ry1Y",
  "key26": "3R9NG9huJSXsyxxB8regbz186TBWZfEaziSXkA9CMA1RNL7FK6LCyTjX9XH8x72EUCjwcUwNDKfEAgKK4BLfyyVH"
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
