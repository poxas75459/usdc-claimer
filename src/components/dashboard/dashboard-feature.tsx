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
    "gCXHaAeB7Ld1ofq28GwGEDR6AgNvJCNhqkuzxEMURAHZ7PamFz2iUU7qYwyxc81dfcdFbGwnUHM7JAfsv2y6yWM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mxtoh2KoNtA4UL2fTwk5mh9BK6deodYaoYpKSNcZcsTymT9EZ4hTjBDiEaYGnaYRgcmQ6ccVQTN9eYqQycdEUNR",
  "key1": "63gAqDaeodZcfFeCLeHmqXinkdK5fcaSmnbkkMpjvGAVczhNh7xbRqq8A9NbtN8dVWAkbWDEjvfnBNwcsBwqgni",
  "key2": "Y8yusHArrYTsPmvMFsV8mBrvx9BGmxdUjyxz5sqyEB8YCwKKZGCciHDqtNz5XSmSbmEpkncnr1NHK1HQXQQY3up",
  "key3": "61FRdQ6j486BUD2W2zGXbuSxP5XH25dGpPZsbG7iFbMJXjM2en4m14hnBNCifjz2dJsUDBhk2kvRh7ogLWXn6VgD",
  "key4": "5GwUPzHxuTuPoTbCeumSm892NPWD7HFgTt4Y3AssUDD81vxJz6z8kLXzBvM7LszoHMxa2HuFkYRv1yzFVqxCK18S",
  "key5": "5tUerxwrJaagWHATmengcfmQPzuLB6xPQSW3y6uxN7JkvYrWB5UvRThFbYznYfguoi6WkcpToMXivVXgZy4fL6hJ",
  "key6": "45sbrxPvmXYu4hLfZgrywvmZwfJBVjbDSFWDteZP4TmFHMgCdUk3mQKoDNRSaBCDLZtGezYjRvfck8cBD5youNLc",
  "key7": "5kWf37256uC8GBh8TXDxVabhfNcJJohDj65eAb3RasWsJFrFNHw35ha923QjdTVmqQvbE1DXERhBE72kRNEfbJkR",
  "key8": "4Ws1Mcfr5Vs6npaFCHgCMpHCwmJ5EtZEZG7G3iV8MHqEviuYDJPZfDurgiDEMyyut5Mr8GeYwc2iGzXZoWFGuFfk",
  "key9": "B9Cz1CMJfHT8KtbLXRfVNaa7C4AU6Ab625ME1EZdXf34qDFVXvEVPCC6HTGGARxNH9RZRySBqpjafBnQZaG4xLJ",
  "key10": "4quugaKBp4LVu5a1ntkDTkJwr9Ar8QZch3aLvAPib7j9gfrvzeoaG3eyczjbVxkJzLvWNtB9rm5WzR8kM4kbho1m",
  "key11": "42zDwzFDN6tBzbFuemd5CHE1fX7MmCAFRfvXgp4iUf69WfJjqw5RJfFQWc2RYaifXnuFNo1Shp99BCNYfbYDfx9w",
  "key12": "2LcFhemmoB4sEWVzA372MEzzAstSKNYyz356Vyj6XPXXzhYEb4f5mF1SJyX7xMRbrxMVoAT2ewihFPQDyRLCevqb",
  "key13": "SiXGXqiMfwDzDsSs2ErMkLhMKpcTTT1UY3PeHhKjQdwZpLdyGgQNAdbPw8k2UoEjS6FknG9U5CovcBVt55eo3SP",
  "key14": "toztXNzpgfxjXHGhMYPS3G13YA4hi6ZvNYSRiYvTJrPSjQ7eJ3U5w2k9Gr1ma8dDwAntGVR4vkHWH7LB6abAiZ5",
  "key15": "2KkdJN88EAQ7aXg6ShfraooXC3JmE5PjbXkY2oVVpgYJ1zWsjWwuVnzm5h8chTDEwNxsQKPFiRoCAF7PWZBrTeQ8",
  "key16": "qZvJfNc1wVExn3VPQRwWYnbUf2wgdxQouZQTxgn3iY6nYJT8tx6t9bTd4BFwXzfM42MnRAX74aWrNfKR6VTgPyF",
  "key17": "4dQ4GcCxFYbU3rjdc4AXXEmB4AmSBs4bPc8P8woyzRAX74abBoY4T89jdBpi5Uj7qKm9yxMKWWqb2C1Vt1okpb6L",
  "key18": "63n1fBwNjH9WrBqeWpbBznria8L4aNoZ1vdgNNhkehp7Mhrs9axtPE45Xu2g71aiDZuPtSvFyyXuFP4tEU3qaunh",
  "key19": "Gq377uGynoAcn6JBXd7KxLkzVVYsErDSvWFE8Q9vkpHjcy35SxR26Kappd6z85uSR23jrC8UWVk2oiypD45S57j",
  "key20": "2t2kDr2HYhRuixZTvXfjFyveZPomAhVsai2iJypFj3m6xMxJRmrKaz74DZnDdFfzCU9C6aMUHEveLjqKSgaX4iSj",
  "key21": "3C5WgJ8ECQnhFtBDrkuSkvHHtdMfwxuHAWFoU2N8GBPZabtx6Qq2v8sdVj2HsTqSbdiqNFsvF4jw2gGPWyvkaJtT",
  "key22": "45qWhhQnQpN4gMERj6bPWHo3a4ZCMKqjAqQJz8b18mymw78ULgNdyfHzoR5hpSHYCscJ2G4CUr5RzEDQ1QQsfuzt",
  "key23": "4hpASwcFfcfV3rDaWam5PEGn3B5hRPph71chCxRnKYPQgBUpogD7MNNtwu5KKp6AYgHyxvJzEubzCBxgujk4pbwt",
  "key24": "58z8WTPBcsKbUDQzK7uWSRptEYyLQvpWRpuMoN2xtqCASKp1huGGHCTpFysKVWJMRc9xyZN8GLgrrnAVdH1kuvQR",
  "key25": "5L3UTNFpQy7NrzZAYFpnadjPkq8eGeb972F5JZ1Wb7rjDp2hnCnG1QjNEzTEkyM3mWEHQE8VXmSUtuRjVMRdeSqQ",
  "key26": "5Pa2rwwFNZwDhNUpozQgHcbZ9KWQ3CAjBkJ31e6yLJ18igoQ2yeWjPnGSPGyd428f3fBVAZQg2oYbW21KM2Ca1QT",
  "key27": "3BsvcKGgXyFsQbyoAWiEb8nAxTHaKDDZysz3TdhwyKr9KWZdDcSj96RK1sk1hGSGgcnSxQX4KD4XoU8CftdnrxVF",
  "key28": "5eQCgwA1KkQ9ndhK2vQHjrjr1ytUHmmTewN23yu4RRpRWoC2zEpYuX323wzAuMLrZrsXxT3sgheeUu1tkMxKi85i",
  "key29": "2YXUpLbwmpZBgCRmpsfAoE2xZHr2DgSeozx1aTJf9c3YCkmxkxjVBPgBZCAB4keXgX7LfTyTpyH251RwdsGa7pub",
  "key30": "4gZACdQ6oMoaHN6wwfHbnn359cpBXuq5fdkSwYUM5McbF4PnnHhBgns9DK7G6KKiMS8aLngW5gA7oCsWQ9XzGndE",
  "key31": "4SFGAaWF9B5XB2yKEHYbSef7hPmp4nazxP3r5f5vTw1JuCznpwdGS7tZEVGmNL6XCFHu12Fj6UFo7V3Hng2aK2JA",
  "key32": "WNqEM58BEeCBVUJUR3ZDANuqFw66PBDWmqRvnvxaYoPgfepVyQDFpNqRC6tKqVE4WLSxZTQQ3qRAhJqDbEHuJ7f",
  "key33": "3CUQbds8efThAqBT2A1sTbB87zLWCa7qycfH3L54ucbA6GvW4sLHP9UXhKPhDfwtvK2mZFSkJncvtuLa9C4espqJ"
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
