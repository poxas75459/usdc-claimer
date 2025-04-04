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
    "5vqc8DRFViVWMEknjswKQ78z6FNGZHcH73yocJrRVic8mJedeA6B9zTY61Sgu743VezTR2qEGEnNhmb7mBuXg5hx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FdpZ2pVsndQzcJxPscpJ8Z6MfZRopi2Zs952RA38FhDYKnzdT5Zkq6UkU4cEvbwFJAjpjYZpvhFGXNZ9FXQ1B7Y",
  "key1": "4dDSLKfzsFscJXY6v2yTwhaj6RTxzNGWXBk1XRmv1gwzbhu4xidr7zCf6gYERA5zZ91Y6c84FqWMHUTE5vMG95L7",
  "key2": "kZ8kUWi59R85TP6EtQkGfNR8uAHbDSULCpT6E5sq9uMga8fNGaCm2CFC9u2E3RxVAbujro6hpASDfDBtTTPGUDg",
  "key3": "4AWgusGP2PM3gBWfPceP9dUob8LHB2ikadM5dS64Dt3Ks4pR9bev63CfBwUCXoco3e6WCRb5Ez8HCCwhWh777DSJ",
  "key4": "2HgQjEh8XwCXnbTRxMMSSYRLyhwoUqDjgAm3iGRBL4yyiitWdmxCeC1cqcAyur39rpSoTrbDp4yQmKQEy6VwZ8Sz",
  "key5": "31xpYxNoJpwmjMioFGGH8wNfK9oMp6NBDUUn2LpYQz1nR3DqN3k4aN6HgNCDSPtkvKm1rHTkrrKYmpQUqjQUaPGQ",
  "key6": "2MDVVYn3wWR5QxsSNxX5c1aoRvBCdn145m8FXC8NmQvKqhapK2KVsY3NaPnSPQMnwozVjYNVvbXTGx9uTP5JVNL6",
  "key7": "5AkdtPjxfFpjZY3UTCyP3rr7kd5532smr3jSw7Cu4emEj5YxVtjuZkZswSKLz3i8sgMBPdcZ6A5N7MZ7rbDXqBDR",
  "key8": "FE1o5zAXTWPMXNTTKbYn7S3wEC9H52buaJaR3WjhzA28m8f629pb3mGEoT3beDG3i1zZAYivv4VNAMmrTsSqYJv",
  "key9": "5AF2kVpKNQD5ArHZQ18FVVWmGQ85uKtRFDzs2t6wGKLWaquqCeirntmC2iFkNn4i6VmhuVJ5s2twcMwX3BXoS13Q",
  "key10": "5gAAAs7KJKFsTBWjvn3qeYREs4bTnjs5heETk63DpWGNiE6oufNDCj1ZMVCA1ZWJFNc1DbvbNjVfqmJ8ZaqzNhBK",
  "key11": "65jt31J44DYAYDE424xCMjBaCEAK5eeCoT9rNfTp1gP3iKzJTRL26XXMHz6hUuEUM5ZbshacxESberWUEKaQ6KT8",
  "key12": "3ayQ5nYHHvdP94vvgmTSLNXguPEJrhxALBPBwqM7FeJKP35CaVePqzSPfzPKuPZYoSgHCGPiFdp6yYQzJvL8fpxV",
  "key13": "F71XFPzAmdwFAaPqSn1tqnrmEM9JsgWKqk77Natu763m2sjh5FJ8duBvbDjwjcaNMF5jkHG6EnsNjtG3E1YUALC",
  "key14": "49NwHxfymDnUtCNBoTwBC6qiYTCupVStkNNcjt48fUj2EjCTxGx75vbV1Re6oJYXRmiMpBwP2bSKqy3wisNbiPJv",
  "key15": "2eMGLBRENgJfnS4VzMpuE7fZqXPnSnjhtngLDPQYZy4GtFHVWF5YhmZesQvkGAXPBqKB18KoFxHvVBoMYjNxzLkT",
  "key16": "3X4AP8DQpbETKx8yLVWcLGFoYTFSNSFwUU6HH2rBik8UmCStfHkiUJwmLCg8xj2MbhPjKv4qN6bD6nnS2vYbCMxc",
  "key17": "46QKx2s2EMC5M1c6MPKhPV4s9iE8XV3WJRJVQRCxSQbApe1pJ1zrA3LhwTHzYrCDqJVNZC1v7QNJdnbo2p3FAG4j",
  "key18": "2Fet6CHuDL4WsKPRiD3nrftKoFKnP4LJT6QGNni2kTkHt1gufXbQC1qJRRT5SLpBUoCen9wuVr3m8Sk9vpKB7cAh",
  "key19": "5hTuzBhqcPTEg4PWcshz2QaBY4epWzaBo11HdMAp2qGv1W55FtF6nUWxEjRMb25WxYi4MtAyFrNUNmbuujyHmyPp",
  "key20": "PURRMZ26S9sZKdPPhRn5yPHVaofkREiuZTLNSP9AcFoJwQpQKD9uVKjbMu3UgE8vYUKd4eGiuhe5U7332Mvu6hi",
  "key21": "wibt7wNocmbvbD5HgkQsjyDqRwwopABUwkfz26u8UQQ6iZDMmPFtribaqjBypPPA57g2ovzo3y3w4n96xg3sQx5",
  "key22": "3yuzKSVU7mRsCzc2hiVWqKagZrpzv29LbQ8SDNYJYFzUhrbUFKTouBkL37SE3aDaeA8UpXS7cZUAQrHfpxb76ari",
  "key23": "3X7Fo39A5LNyYS6sKCAmeXZuvsrWdRcZop8C18GzQcVeaYFUDrmHN3uAosKuz2yQJjyHSVAXKkkMCcKVWwE3UXCn",
  "key24": "4aQB3GmP5HJFR46nLoRYMjfVaTsrgzqYsdjWsPJoj1GU6Ue2ktPCCLLftmVNhCxayMyx2t6EnXdTgZNqKi3QNbHT",
  "key25": "2K8zKR3QbB6ovr3oQyq4ex2BK5MsjaiFuWv6m5GM7MbYSg7f5v7B8BYF3EvcA5BsACb6YKtALUGupeyqQ7hasdse",
  "key26": "W7eRsLWmn3pDGPNKP5XAXZAGMgmZuakinwKLL4bdE5oswEo3faYwnh4qoXfgUGniDn4XpeFRPiWgq4G3z57UcXN"
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
