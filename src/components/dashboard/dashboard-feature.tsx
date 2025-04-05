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
    "5cj69ivmobcXbScxocjrjcmkEZVCBS991waGQFBJ4VCEbK1UV396fyNDwqxbpn5BVGPvXCm4qz7mRUK8XJ9grbda"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U8g7f41pnsFbv7K6FZwZogLT2Zvne9JRAeAdZDRK8ZGmwnUmtZdXg13D5xmAjM5GZbXnNed4S9guH3VwKUvRdPs",
  "key1": "2dYn76tSMLzzc4V7fMCt4fw1FLjmd3FyMZsM9kk9d9ZUpvmmormVJGSpJyP641vq3b22iNfrbhkStGXpySwzXN6A",
  "key2": "fx8P8u16udajwpdbdSTJyHLzU81UzNB4KGGayiA5PPMiAF9WeakxxctdzpDQ33A18XEKFKxnjdJvkXNoZUJ5oxt",
  "key3": "KzQxaB2yhmf9Pn3PYQrKh6crg8ei53upvA3qMrCSgmKZfTZWkBN8kNnr6DmAJsL2eL9VNqpnYULiTJeddoot46m",
  "key4": "GpUkQYSc9WLniJG38jxcSb8LsXU6caAUvEB8Za8fWMNs8UP9s9TSGrckBeopodpPhY8Q3hmaoUn9r4RDFSWEPUC",
  "key5": "32k5JdGtraUjFea21iPHDwMzTLcr6qQkj4GwRf2EMkK5RCnAU8KbGnQtcBnaTJqkpuntuzWyZANiKJ6z2od1u5nK",
  "key6": "3WAZ9fb9pX1V8RWu7pfjkMdyiaDcGGJrqrxrEvMNjCwRMDmcHhwfYZ9Yzwu2fp3an1cxDyULCjbdQhE3vnRPDDXd",
  "key7": "jNXaJvrtYEcwh3232xdXdMNwCuWgnTomMMccP5F8MwPGkMZyJq97nmqQUS4aBLrPosNrywvywNgZFkLUi8quidU",
  "key8": "kdhkSv3fS1KZsE6ivKoA8Dj55SH9xoT68S91QskDTNhZCGMVV5RftxE1D82KNmFMjnnyNe88kJpPHz23Bz1vRHS",
  "key9": "4xBRYvwnmn3e3hDrHYnjUxAiTZ3eZPNz1eExnBRvAdDvxLQmyTXQGXkXgGzSdcALTHAWfDzueatPBFq1GnYrsA1F",
  "key10": "vrPdHK8gzGaJwCDfeUh5YRpBKhPfFr61EydNa7tNdnJgSDXCadF1KEbWjSBicgDQQMmxd67StYFAkhmzuuvvEt8",
  "key11": "9m8XM7KS7v2c274WhDvTXZTz1sWRSdBeY6z3ZAtEqr2t3QtbXU2vaqd2vKiqUy5dkCDKaRrTmgxYTXnd1wUzyuA",
  "key12": "2sXwoJmMerArEisGkCfVuAJVknwDFNiB3n4FWzmQ8EXXdv3va2rwN3Rzgx2anJJCZziQtT8j1Zax9jsLcQdp2WX2",
  "key13": "63PEq1wAE2a7SU5XnWzVjSNNxWCe5kpn41TQLTqjLAc9YZJzDfunU2fHQ2K4LLkHw5hYRmZ6REyuBmnMKVsGzN1X",
  "key14": "4w9tUVrY8FcJUAC9wAbd9bb55fe5aKkPcmfegi6FPze5VU9aHszec2KKr5BCUtvXqH9pUtRWZoEXnm75ibViwGNW",
  "key15": "3wvUP91DAySLvMRMWxmQUAp46NFv24kdxnNedCUKj5GXV8Rwq4dCiDDo5JrSpN5jhuhGsWjmgHyvaDU7TGaMRwvj",
  "key16": "4mkkVV8youXG4Yjpmg3vYeXADsi7QmxW7NzFjHJPr13b8rL5JqyhHa61ZBCkpg95myyFbhs5cSDE9cBApwT9vgRU",
  "key17": "3qHkXjDcwkRW8sTPGxWm98HGoDYfsWZbgTRLBxm6jr1vfrT2R69JKSDqZWGYkwuYFP2ed3sUTUA92uXgNTwQHqLg",
  "key18": "4VWjLATT1YqqQQ6Df9vUAPh7saWJpCVn9eR1HgAG9cF1narKivCGKbRfEpiwZQBbVYgnu9jjy7LmSy9QNg4u6Mvr",
  "key19": "YrcQ2paZPAoGBRrXxPadkrPbGgZxkXNJGLm3Mrx9AZZ2HzANUZdvcdpQ1fy9gE7oPUiDoJ6eobvWuzzuXYatUx1",
  "key20": "4dY44aEtnTTJaL5pqhH7DLbmEpLH4j1TCDsLQ8rBWLj2KVmuAqZXcVn2dC6UAgpTyLw8vg8EW2SQ2ebk1tKhKwAg",
  "key21": "5gAZKcdePwi3jQ8w9dq2oH6rPr3aWs6nN8ZFMvc12uV1e6PopEbEbCDVX2qd6zXKpA4AZfD8JMU9zG6FhmkhSVcA",
  "key22": "5JVxgKA4ovUzoRBuuqT36bTpLpCGx7G6WYCv9SekbNYZkN8PcyQNMEnncuWpBVPt25KNJc8SCkgLNE8GV1EcQXTD",
  "key23": "5jKYouHnQM4a6YtAY9odkxGj2HfSAYFQmxDCJYGqEdu1JH7XNRUgnxjqLoeH8HFBhqawHK97roerXLVUTNNFcFGT",
  "key24": "vq1DHDgV3YGKk78yfJnGdcGni548DT4w9tkmRp7RF32WHswyQpaZKqRvJJaL1kvBDrNfyBWuHhXAkdrXx4mYEbU"
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
