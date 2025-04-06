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
    "3yAT8V1EaNYqkDNzRqdmfvTviQ6gL49uK3KLsgRKheiZ1pEZRMXzzuVbNiY2a23vbUADVPdcMw2GRF5WfQKN1xpc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zE1NmgPeJczf2SSZ3aE4nxQqi3nR5ixYexjSveAfZit8vinG2Qb6fxrpHnJ2N9fYi8sPbYGJbPMJvJZQBkZVb6A",
  "key1": "2zxtNg1cVKD3FKXtBcsZWVt5aFMoxteFwxVYLp4kypDcvLjSTYNCbRX9Cq9Q57C7C4fnpsoPvUKVNx5xYb878iw1",
  "key2": "3CY5u8355J168ztjPmRs3zm9YUvoBLKjnGnZfrmGt4iRPyeeAVDC32VLH7mhHebq4cgABP8BHd8zvKsRAWCWUTdP",
  "key3": "ZDr32dphThqWWVSyR9F4J7V1NYUfRGreMHq6q1rpiovA9qqiXwQA3t13DgBxZ6HKSEqj3wq78idep24FHsqkm5h",
  "key4": "5qeiyRykRudND9R3td1KQriVHsCyCkGjTsycstruquQuEyoJHHD29Y34XZwWj8BeBTgyBT9jfjaMqGZdbkXYs1Z8",
  "key5": "2nvXuyHXyfSWJYad4EKhoge5mS4D2VBRbYardMT7gTbvVB2imSVY8fcovDCgTWfHkdeQAcPyVYxKy8TK89QyKmz4",
  "key6": "4Wqv35SqVZZPN1WHxxRcDcZ363bkKNEj2wA7x3FmGFpQNz8SBw7pNZbTgZavdziS4SqY7Ex9QwfmQoqykTuvJREE",
  "key7": "5ZmQmmo3EWqL9mNDAH4aXx93hydbMoypv7RPmz3xv77gHVeTTSTq52UJdYhZXLSauiVoe4ePo7ywv7SvFgsPZeTh",
  "key8": "4GNjPxipAUdoAW4y566Yyaw45ufieVMVGN7iEBPdSfWnc2XKPQoKLDZ1biMMpvsnneVevaraePe4RjbBWhoLMZre",
  "key9": "JmYRmmBBN7xRF9RASkN7DYQvF5JBEu4CAjVNC3hxV7XL2N9F5zXns92mPy5Urpf9EndMvLe25rwDu5sSrVx8Jzi",
  "key10": "tVMMMyPFZwGVfrYgGJfcUpeQgUdsERgCt1cBAChZzg53zSq4q2wexGkWVtAaZ6wVJ6wnTP9ZHfpFvyQ16c8cgLk",
  "key11": "2My8MczU5Lyi87JJA4LU2ujKvdwtkpnBweCZriT7TC6kyBqtfmEjTF9kxKtgnBf97gVgM7nJA3SsSwBus7VnmcWe",
  "key12": "2utKyAE6XBahwLd7fLaubg6bnSj78xTj1LEWfDeyzQpmtn9FrHG7BVdRBAdaSqTy4RZ85n4j4xPBrFgavS6hAjU3",
  "key13": "2QXJYSXZsf2BQRkiBN8p8JQuuQW9Le5WX3iGL97iRVjrn5HDUdEpbT8qGHzyQgaZiBj644AGWMNyECeEXjtKnX9X",
  "key14": "rACY3SPo4BCukRzjdsr1jXFC1VfpPVfFR9NwDsWzyG97fqCh26X3DyDyg3Lo7bs9bwzLfprd4tMp4mmj3jzvk3X",
  "key15": "2n3rweUFK9ovXh2EKm1aaNwGGL2qotYswBvBAWeGH1vyxNZeFzebhiXk2AVrgoXGMyxMzmPmKMQyFVw21PnK1uh9",
  "key16": "oZtksc3pyCVR1KGiLdDSZUm1J4qw3dQjkZFo2F1CVFy7kS1Tzat4Fou6u7wMQoBVZZoBv93t37PCgiHX9YG14sq",
  "key17": "2r7g3kZhefUHiWJTtF1eCeRDZ2ej68sb8Q9sSGUsYZqUYesBaCYdnhpvDaqPpj7tNaPvgemvahsKwUhiKmChgvKz",
  "key18": "2qdyST3uTbT7EwbzaQcPHDLY1fagizDPxnKew4EPXGL4LZE6fpX6JQNJnwZuRg4zXy65vi2bV9mKZNuqqqk8dsHu",
  "key19": "3NcKtPDJCjnC1xnAqnd4RdHdQ1h7gKcixYFmPxeSQJchegUmechK43SV1CMXwFrZzEGvGupr6s9WJWCyv9iQicZf",
  "key20": "YoiwrkcN5xgDtwrBLua3EDTNPv6qGrdsjwayGCk4zMt3JqvkjRXWSYYhWMBVnpAXYTJsMSt3bKxQoTAuqHDtSoK",
  "key21": "2QDiXXePS6y4J8uNJSJ9963hjRFp78qC6xZCTA65SZsVqVFZC6Ya173m4VBuTamKRa8S1rGobP2VYs47Zj523cgh",
  "key22": "5bN4Hzkg7ZDcahv15dPFVsSgcyjkvG8dqigJ2oPpPxy6vtgi84J2R9xrxmtJg4rBmgo1ezwTTE21L5e3tQe3KJmg",
  "key23": "5o66iCdaWqtXNr91Pg1rT64w6SskQfM2CHRKcfLsYMtWRP1B8S4YxptbMrvBiZjbuba7YJELGeCFTQB8tCoLJRQV",
  "key24": "9Ag31JaEAFDe2t9ihKkoWjg94feHLkFMqb66C2GjhmGCkazivevKdcUgnPYfwr4n4SyoiZTFHFuQNdg78NAWLVf",
  "key25": "3EPNFssHKJv96SY5995TLDL245RqkHjvm5YbWJdqbBdPvRTHLcpRgZpux54mofTGdBBWuhCKKWgYCm2MPmmUyzDW"
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
