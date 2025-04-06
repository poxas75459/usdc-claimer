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
    "4G8KQrspqERE62nJwDgAkguHz7xn2b6xaa9fGHeHr8v6KgBqWMMJKT5bF4YLbm58Jq6yaaff2krSEB1aTkFr4wCh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26RP5Z9b4UVDZrYbJ31cPhdt5FG77mECuNx3zSdG5YHdoSW5sfbY1Gu5Sz7c8b4b4vgLX4MTi92Jy6vEQZxR4AwP",
  "key1": "3y5CRUtUC48CqsQsnUkka8xUp6EpPF7ymM8gi6weDFYCTfih6KQk7PP5KD8w4ksNaEei5cr4JtaUzMNNoe1QA7ZA",
  "key2": "4TJtE3K2op6Lx216cXPHREbCtHhY2616dbGeqtQkgNEWCUSJGi7MFGeDYGZXwGLGbmAqz3s1rgkYmQnMZjzYpwiZ",
  "key3": "52Mzwru8QzFjrnv1HPqTt1Y84mAaEwaTrReM65FSM6VtSV23ceo6DHLd8akuMC1dbK4p2qnCcdRtaY4k7tgRq1Aa",
  "key4": "35CHCd8e9BEYRVkGtUEemoH9TybqH5ynqwSthTRP2TyhdnsF7wCfrKphgYTU6joD9UaZTS2JjgkFoBESCEkYe3Bp",
  "key5": "5Qq5xi8JywA4CSEfLdToj9UBLz9cNk74dDwuhwRG9N4H928noRM92kna1hm5YXEt5KmEQz6Hve2dQxrynTXJhBQx",
  "key6": "4EtPvxs2dGZHaG2acubTmx8ZqPiDkAQW6e3ueM1Jx3fArF2DKPgmhNERCkq5VrszsSivhgspgJLQKM8nYD5mnbbQ",
  "key7": "5tNZWAdPnhaLd8Ah3HVvNBMTnkQ33A9gCHA8oiMEvWGuvAcXHxY8UPs1rTpUcSNWC6B3DZJDJzZrc2bs6RvJ1S6j",
  "key8": "3K4KMxAdu6Lwx99UpQuFkEHnamg8EkDRmwqxSUkMRvJnpAyz6dfifZWH9JQB3RE1hTtvTVsQtH7MNyfxxc1K6oBq",
  "key9": "3CPMrpzvtYhkqdJh5STn8c2rG74UFzeNx7yHpmMXtPMLXXiLUpZXe3vq7LrXe8wDHCXjdAMZawwnHsTL7ammKXv2",
  "key10": "3BcGrXS11HHiAhaYMMwnXYptWZRFtfYxSrhdcyMs42i7MeMr6Bzg6SG9UxpkATffgiobmRUPGCJXxETkH2vfMNU3",
  "key11": "258BS6NGunDux8TZN4D9ubxQZR12agbBDPwUvRb9sGKWw49fpsYhus2HkpgxNF3LTtiCS8Y2wSLNDWimJNCKRPWG",
  "key12": "uMEgtAqyhmi1Mfq47GJKhn8mzMUz1oELsvzEFMy7F8wKnacSRNGpSTuVwwT69x3TAj3a5pB8ixj868MBu1a3vUH",
  "key13": "2PYEZ6kbLDm1bcu9mdujsLnKN2uwvYSbL7cwptdz7ppYzU24yVWSH3VPWYQnVTmDhTRFkKb1bfcLHSFpp9TsjByC",
  "key14": "k2icwjw1rbfRQgWs98Ay2BpjdtZUzAo1JZHCaPgKrHYGcJQ4F5WEVRoGZ1UNH7k1vJBQ7eGqEeSnZs6ySNwe19d",
  "key15": "3nZJTaqdWcoCrmLX1X72FbLtTb9zsGNBTrbLudo2yLVDKwKc4gFbVsabFRt9HPKDE9iV8s45sZatvtTFmcZGfPDq",
  "key16": "267RLYpHYSuxoiRuHTTeZGLfL8wHguCB1FFxCa7s8E5FazHVkbs4jtDuSyegxqBGTUFkd4vHM6YN2U4wYRXfC8UH",
  "key17": "24k9W1xHJ5apguNpCMTT8rgyRxtNvexofjHeYexfLutRJNStZ7jSeyyHjQ1p6evnVesNdsZ8XB4aZzYNx1xi1X5Y",
  "key18": "2fkdxJ1oqJCPxq8zBUU7LVa4gajG7PH3uz4N1SkxCfWQziAfyehk2WZYJ5LyBZDAWoZakia1qcyauTPQLFwBhP6C",
  "key19": "45UdBrAzezsDkbMGYZpneHHBTFghT1o5nXVe4swKRUo13s4yHzRKqxFRGRi5GqxN5NeFkegbjmsoa6VxynHSzXhr",
  "key20": "5NqT9bqidni3CRnAZ9PcTcieA1gBbZBNEtgHjZGFNXVCux4QobDgnJvefhCSBa6smL58xwwRUWTYdNTVbL8f2xt7",
  "key21": "uYDaHKSxsxUsnbvDMkoNkZE5VVnTMxZwthM7a5arAbyFJpAmRNrmuBsKTM4Dndsh8JP4aRHLeghaZcZshnk1KqL",
  "key22": "3KWUoY1Wrjwfa7RickbvuahzRQnFY6URCMRz8GudLg5byQ4UkLZtny9rHGFS2B4yoHXqMVnW2YpczZQVTzfV5MWG",
  "key23": "ACXgFF4x12tvcYzG5jM8SJDvkECUVvZjwCYLKFfWJszR8RpACv6gSLpcwyHQ6VBbM7j2XZyzhk7Mhx4p6QGkttA",
  "key24": "5RJTyLxkSnWsngzEnPxTGwhnDBJDR5gGLfWbZkLEC2FJKRoZZB4SwWvactdvZyM5i75V8MbyFfmEh5Q47qrQCGUT",
  "key25": "2HmXziCxQLKpnAVnj2jRRk1r2iMP59bRNLoZVciEHbQeGHpc5ShzCEvS8xdX8jRMcGxvyYxXm9e1KY4Xc7kR8HjD",
  "key26": "4gATLLfrVC6vYo6yRUJk4Gatu1a7cXF1QSMhcRqFLQQeuFtSfmB1tbZ7yuDRTbaKNFfr6ATWYmFSMXE6eZQHNbgz",
  "key27": "3v1mY58qpvUaTWUpjoyW9pqAut13czf5T4q2MF8NA94g8pY9G3Dx2bCLrqa3MSry9Y7Nu6Xv8gjujwBPYjNWHr8C",
  "key28": "4KqPWg8JQxZPyXheCoaW7Cmz9q1aHmWb2E4pfhWJ3igLhJsahMKrrZDEXP9B5YXHM5s1Bg25g3NTmJEY9CfJNKc4",
  "key29": "5vjqSKCPVAjynxUkaVFoZrAt9499HtypmZeorSXyNXqSU4n7SegQTSPV8UCEFCf9XQrmL2nZznaG94Pnyp99SVFr",
  "key30": "N6euVW8jQrx5EKrQydXwuNp454MerwNYJqQfFaQ7mygkbGPQZqFbCc5Vw87E9T65gY7u2pi6wuue5TARP1KzPVH",
  "key31": "MtXrCEr15NjH7RhNJ8WKrtPiGWK4kYCx3nDEW5rjnyVRx9ty9fy2kQAnW8zS5XwcLEiKHDUC2XKe2pghQxcNzXj",
  "key32": "4uegmUH46wnmVRpBxdAXT7QKnh6Y5QD5Jwjy2VEJtMsUkX4R5dve1V4XpUrWzqgSuzfbgTcv8JHjseXw5koWNguB",
  "key33": "VJWMAcHfp6TYDvK2LTQGpMMVbPLsJgzF2CKNm1yM3vFwVz4fjBqyRTs3Qby1gfwivbma4ZCYM9dPBVMA2AjUoSw"
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
