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
    "5gQiQ5sacR6SRkTkKHwx5Tao79bMu5gDA9vyYztaPtHW9vYqaTYxc6mX4sDxckwnJDGj5ViMo9XQkh9NZooQvew"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d1Wjtt2Ew48DY5NRzG6Y4Fm7UXCKogNnuRnxiQfLg5Hwym5keLHJN72CQKXypFFn6MBPcqLQCVYkkbm6LiMLHni",
  "key1": "5sRmyZmJCvdLKzZNNZ5WoU58VhNwEAzyCs9jhcFNEEnEPvYVWTzh8rMVHQUbFEZqiyEZYJPvb7YGTRYTG2N2NMfp",
  "key2": "2XeQxcW4iwgYCxPQPwe4DmK3u6CHPDWaQFqmSL3ZyY4NHLiCDYXBCLdD7puzrvekCgEKaWwoQ1L16ptWsovPLWMm",
  "key3": "2QV3MMtMiQw4yya7XCBTWVYwFM5yjVx3zXM1cfrTLd6e1ffocaKjcMGgZ3an54evJm6d9REQaFsuNpAvzxtbiznX",
  "key4": "65MkG1BdkQgc7MuPFF9L6W5DLC2uLq6uctVyHMh65JTGcmpMSVrrZMUmdx3qxupJW6tpdgS2thR9nRBvEUFPP89b",
  "key5": "FcHPBCu8G2SYouw2m9Jd2YrpC4TKNFfidXN6UpVg7ELMRwq6DALnC4qyBb4xJo3m61SvyJdWgTBVpCCLNowGVDd",
  "key6": "5SV3RYdeyrogkL8j9AK11CrdqN3HaEZYcqtiefxx19vH6Ej7kUpmqMzUfJHJiYfjGKARxV6hmPFJNn44ZDKdKL5d",
  "key7": "5jVru5nrosLxRdsUXnhVqYq9txVgEWyERMGkDFXp7B7L7X1xiuLTSnweiG8gNptiooaCPMXRQLUgd5kNLp9Kx51W",
  "key8": "fz4ByxMaCKJYoxDCeH8m7qFTBRAi8rVordfGWhXMHcS4uavH5Td7dxqtnS1G4yfCfrfhqcMcn5ApRXXNfV4f2QW",
  "key9": "4BaPSEy9HkR47EzwdEozdoYyb2mmWkZ42k2kym6g8ioWUKX6cL76cSoM4wEEdx4gXbadGKvNybm6NEkTSP3VRCma",
  "key10": "4i24uxg1vS8hYNKdrtwVBctVBuzwFjdA11rGddCTcfgjbK1rtiuCwXu3iSexnNLqKGWbY7xqqQ8UYBA9711g5oEn",
  "key11": "mXnrdhNmTfAXyDss8s15pEd9c2X4Mwv1KUcR13HSXGBiPMSKK9FtciVDgBnYKbfKdL1TPeporygqXT9ucupmTK3",
  "key12": "2cY2BbSJawg1rw4Etd4dSwYpM2rhPafF3U8w3RddPkPdHzqGrqEbNjf6MS73Q3CT33V9XGmKqE5L1ZPghrxXuSDJ",
  "key13": "26nkWWyxFmoG9m2Qsp8kRppPyJMFhPXBp6Gs2tMnG4PFJn7BaKVPDSy55VGtRq1AMGi9UjpcHXvyhGV7qetLmpzE",
  "key14": "3fYQP1M4NPNG2NN9ccRaGwtwnPQHRGDmi6ERavUmbxZrL4zpoFUnQk3dQQsLjDgZ9XRCxaNNeJaCVhFaaEU5V489",
  "key15": "5hv64DcJ2UiqhMMCXpTuwjP5UtkpgeLvBfQgqQwNyYo9nS3moMcdii9ytVSkYwcACyLnEBYPx4RBMXAdyHESydGJ",
  "key16": "4HCK76y3vFSHhwbuh9SSLMWC8dkZBqTKVLDieo75ZNcMQxTCoVhbHgrjzrckCR36ubxfCNGzNJtQBMUP3BuZLSsM",
  "key17": "3YDuQxuivTwuWRfPzZmrRwsJK5jATdYX2giqLikcrKZMANp6VSksEJ46ccasCRCMG3MxCQUS4fQniH9jpntmGmwD",
  "key18": "2FSu4TMYA7mco3ucexf3a2XAPPq4LESeApzeHcdVpRQsVqBHYKduHwzPp3xm1Q7azSyyU1cpKYf4EgGabaPoARk6",
  "key19": "7WZxU54RuGUpitzHLaJyCqxC3Vb4xB4x2SYjMPkpH4SJi7F8D3D2mFH7RrNZyoUhA7cexixXRe4mLkuKccgibUi",
  "key20": "2Av8v215UsEB2BYUVpPb92jihbiDzSY6P7cAcD9J46w4SngeF5Tb1PsrBLkwBca5FeTqb6GZEFvvX7tmULbxwowU",
  "key21": "2H2YTBoEMUP4aBf7Su8STyeLScGf8KM5JZn8su2gPcasgeT3CJgaj26W3pNkZeSr8ioqnwua29HqroSC9WWLGHsF",
  "key22": "2k7h4o8gYqwtUqRcHunLL7T3aSN7yS1jQxreHtY4i9MVncwrdefgHGxx6H1nFuGnsmoeXrrfhJ3jMJ722RPrzzF6",
  "key23": "2haNH6J4mYLNYt3Nt8BtiovBeVsMvQQaBKQib3kxoJyBxbKFD6zBQAN3MuiwS24jgvu4y4SYXiHeMsQcYDuHTkir",
  "key24": "3CgHdzsdhWoDsJVo1mrUpwPs3HYFiW2ciqNrTuw9RtSuKgPMefEkq16mB2JFKe1tA7jJiL78kVCrnehACUE7Lc6G"
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
