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
    "2DZXonsgBSADuC8EKFPjZYYvNDG7D1syjZhDfTKnYKq5aSfbLxRJq7pZkhbMbzBFqzBU7TQiAwttTnbsE9EA2MDf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gjQuuh4onMLZwPU4KpuRx4rvAxhGd6n1ZAdc1zdG8GhVU1CG5WTzeFoZXawLMF7Y9YE49nEJYmCq1RKYCZ3BDtZ",
  "key1": "2wvjQzzb7QQRWx1jFUiSzqgGtpTjhueufkAJt6pGTzLzSzNEqvKrsaD8s4pKbXbVqZ6BjvPRcN1xnTNiZnRYZnpw",
  "key2": "3z2UGXeNscDdAen3Pc75f7GB9YFNvaGgugrFEM8jQHhtABh1ww16uYnnG3ULgitgM9VFcK1S3mAZAp8N1W8NGf2k",
  "key3": "W33qAKpUPPrCSKYBu9VN7H9kJxWfk6Dv9Kqss3zchDTFzgbn4CkRTXyoX5LiA2bVZb8cVCa4zSWoRyAkvMiRf81",
  "key4": "5CSxaDZJftWhMtu8Bn9NST7osRSTGSgVxSAVYdZTx5Dc3zmQkhPm7MpK7NMdLXMiDKrUfxc3C6kYG3GNpxw9d7kG",
  "key5": "5XVGbfxPKo6UWtKBBcS5jzbTJZRqWsZEYMA9xnZJsHRCMi4STaWh8RDCmMPxJtxqxCnZqSqEvsPbpzrRn8yub7oT",
  "key6": "4ptYkj33NGoRa35x6VX2UxfFib8jarySi2eKXxRai5fiCQxmgjSqDR73ekR98x8bnYWEM1wzSkwcJ4yjq6QaZwrz",
  "key7": "GNkD7xH5tGZbcz3vTE3WUAT9TtuxjLSqYrrifiWgeG9cMxjdcY5vuq5si6RXiATFDnbK33F9QrwN4Cq86rrPhNF",
  "key8": "quXNniiffpTA1VCfJFD2pxaYdoVD7SDF6GX4qjtZraVmZpQEH2AYfbMJR41SkazBk2aBrX2ahHdv6u4X41uhnYv",
  "key9": "3292ZnFx637WEaFx1LkgvD7N3iHhDPPziL6umZyAUhorRW7ztfY7c3Mb67YRS42GwX6ei3VaDNCfRkcnUvUoVH2J",
  "key10": "4HQPuQMWVvzHeBXg13i8AJ3PLdqhzNWmFjvffvBxvT4TsstxETrZurymhFX7EBFNE7Ng2W5ah2d8u8CP7bZMMaq9",
  "key11": "QBCHd4yDgx15GfGiHDET2NdMttF5Jaszh1VUPdRyhitzTihbBYUftce9eNKZDXp7SejywXKj9sETd5k3KmmUEVZ",
  "key12": "PZkB5m4Y6CkaFkgYpQfhjS5SVvkdbiTvgV3pWTkceTAqRHCgQnABXf82tsMgtizvBh6SGuDWYNqihRL9UAhqeim",
  "key13": "2DQZcrHLZVGV39HHd96CCXPziZfvFdromrxyH43s3C5oECKxYhqyEEW5G8cRNWzWN4h5eqA6yUzpY6Z22jXGWXYa",
  "key14": "4RCp5X6DxgpvK1aAzcBKGhLuA7N1BydKfAv69qV8Ap71tx4hhVQuMJa4ABZBd81Gm1c2dWW8VycqBbL1vn3EL2Hc",
  "key15": "3rahJQws6CieKZn6V7ZtyxzdroKiKpoWzhtqLrGhsW3oSLJAZxkwS7QKyh762YuJRRFJrZp55sRqsmUvxNeBbvZk",
  "key16": "5GtFQaFfqn9eVcqMmTnnDAShXUnLSZACUV3drHFR586dDdAUD89EoEtiHNuh53nsHJcRgedDHvHWR1WRyQ2bhSrS",
  "key17": "2xNic3oVQoePJsmEDWVx4EkNvE21YT2uDA8vzLrt8cXMbWCzBXK2NjwBhJih3NyoxB5fgSBzMfb265JPrjoRnawZ",
  "key18": "2fbgMMo7zt12ZxghHuxAqCyeBXeyXhevzA9ziF5HgUtshCnxo8icSCH72dtW2q3AspdZV57c4xQ7Jsxtc6iNYxYL",
  "key19": "eG4rwC8L2HjuTdwLDFhujSarvYusaLsd483xbQ8mr1ciEjhDsEtJeJkaRU9ftDBXC4xAGWxuUqu6Jz5buVvaEbp",
  "key20": "56L2oB4YkXifXrJxaq4rZgT7vQ6nFJnEmjJwjAnkad7gXfMaD2TZ1N9rF9MpufZrRNvi8Bamc3Pj4RAADKXQ95WK",
  "key21": "5rXimoaMeYNK1R9JT4jKWFAFdPRdeVe2bSQsp3oXJ4p1yZP5YcnxWiojcBBt7t3i2X5LL7dhhnz75CyLfvDB5nQ8",
  "key22": "5N7612KBhTt3n1u4sgMUvDqjaW1XYhUoThJgiCCikmM34Vnt3m3Gsd9zUnyNcUmzFmznKiXzUNYJ3uqGn4LoZqG3",
  "key23": "5TgUKjkwfduWjbJwqoXDvGQAXxj4fapn7S2BnDV58tW3Zw61tS1nCTNsT49ECArzNkCamwA2sK8UDFpkvuYgdpt6",
  "key24": "3TBogLMqUeXcZUjFV5WKzkzrEawyXqa33QegUK6NJ8fMGGVayGqt1LXDMLwf17oRGHseHZ1s6LLtRzw14Mm6KES6",
  "key25": "3x7RSrxxP1wa3kRms2KP7GhicaGBS7NesmyUx7P1kWASfwUvNQmBev7cSZYny2VDyXMgRv73CNvMMXPtopqWyT4K",
  "key26": "5VV2oCt2Zvkge7AgtAD2jS25M5ubfTnm3k6SUtg1EzfTdTcZMHbhMhuxt5HkXwtohDjkPUTYLDKwmcXeeHgdG5nM",
  "key27": "5xviw1sGnBmCmL4coezvZTq8zCisjmC8iaNge1kYS6q62kswCCvboZKmahrpKF7DSp1ggmMFH7vC6rLj3A6dQJbi"
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
