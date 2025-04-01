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
    "VimTc3x6v2usfrbx8cRF4fSnNcnH6VEXm9PE7oDiWuaByADUFdK1kH6cN2NKyNe2jMgPVa8AGLjjtFb6BdABqg4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7TLEx2xqy1p6M1r6iMeTZskHbqjkP99idnfkEVod5r9TZD8gtt5yyu76JfEqpqdApF2y4gopgXGPzRt7C3Qeq3c",
  "key1": "4Pjz25JcdG4CGT2ifA1Ppv7ZZxnn2H83EH4m34byGWjmsURcJiqtHs2T7ivZt2eo58oYwqtNpQwCuxkgifAC3pUW",
  "key2": "3L1wnGB8tbweBm3iotobfFuMLKL87KXWBQMe4ZDkxF7yPRNiZR1HPftZU1mhDb849PoGmFzDEWLFzhNKwnwApGdA",
  "key3": "2o2tspD8oBSNF5PopvGSc6DVJgDycabnTdRnzvFKvFEz716yzAmz2BkQDj2ajVgakZ9mUwxfRdmxhpaVYHYrMhWN",
  "key4": "2P2SPEkmDXVavyKuNnj6e8vzLaEbn9gWWumD9Kin5sFnA8oGBBonJtDbLtmeQ8Gk5yeVSkrf4qh1FknYs2uutgdd",
  "key5": "38Bj1uwhyXM2vGBWbawZRR9e3d2o7fsgeKn1K99jro5bScTknNr3vLCciyvJkZo5VaCiBxvDU8uC88eA3ePXvXJS",
  "key6": "dwtSNThtz89bS52JNBa9DEe6HGGfodRX3JDQZSLQYRsfhj43Ymzr8dYpQvEjE9i5awRsbFor34RCiW3emmNmM1T",
  "key7": "4hh93Hc7f7bCb8UKeqgP8LUvy5sa6YF45wc7qUDPAyyUSqoiwMhsgWYPe2mUyHUnahmYRDtbzNzFX9sPLhFu8RYz",
  "key8": "jCxPfQy1NNpeDq6QGFgLxV75xyZQwPfNwvWTpZkNc7fxo8u9Paj3hw7zsZZDu8349pUV1CWFiMZKkrCkB8yNHtY",
  "key9": "2PuGrDtRf3HAHHS3JvPtNQ7akyX6SYZhGW2EuFqe8TQUh7kBGjTtLrtXSP1eZYvR9CFbwHEonCnypKK8ZDBgpN5h",
  "key10": "4gnf19ZDcvQ7rxMFfwJFcVWwB2p4EAXmM2XX7F5Yc7iQmaJqCet2GJUNHJPsVCGpnfi5SZ2qJL9ub5fuqDQ37krS",
  "key11": "3yXSJQp3BTC55Ayec3trsPN3geA7HMVBEjSqgn9GW4YTbds1g7ZjpruNgWDEtMBFCmZ7VpSmiApi1cKkqDbgEAer",
  "key12": "3k2AA66ynUZNusLR5KTxo2ykfGxQMsSi3sYU9eRZLpAfRnRPAFX3WuwgzNGGiwqAJFixKzWt1MtJiKAsQ9CAXoyq",
  "key13": "5htYfKXq2vsTZXrr5B8M73Sbdo2VosK8Hvff3HC6NvBRU6eVpZ3LtSs2182ygTzkoRQZpPxZ8DTeZgdEyY6sZ5sF",
  "key14": "u3cPkZ1FosUhfGm5QgmViJWhUF6WfoQVkcxbxg7Q5MLMzSFAptX3edU9aNshASCbJKHUTrZc4jcuELD4aMCSdqF",
  "key15": "3dxPci4Ybq9uA9hAsRxQCoVH9dUn9jBTqWkpBZbvNUzmH6ysbTdmEcVJbmVfJkix6rFuRabkBjDFMcHVAqMffUk3",
  "key16": "2PVAT1MQZ8z3pG5aMWtcBE8YeDiptXCJ1umxkjMYsQGuzvaNRq84zNaHw54xk8WVkYtBLY1PTE8ZAfuMU3C2oxLj",
  "key17": "2SzqLjK14pFQ3Rm13HRTwCBkPHeSqTrLDTNFXyo54dVVQGitMCbwo7L89iA8uvrj52XbQVNMGzDHGpmX4GAeSCYU",
  "key18": "4ZNsbgSBw7cerjifwVsfhoczs4VUFvzyQDoNNGAknuJzwgZwW9EPJdhxTmoigbpDNznMXzuJkE9L8mMtvWaU891k",
  "key19": "54er8GDrYJXeDMG4SDMUwA39rtp99vjxft1vSm4TkAnfTErSxZDnEAXzA8P6TS4iFp6xiwJajuyuc1Z6KxVLgah2",
  "key20": "iXhpDTKuA4sHb6Gkbq9SaN6o3kmGwSAiTA9sKQoVFT6SziTDM2Yqfu7BaPiHm3Kf8MNds2sNW5byfsnQy9px5sA",
  "key21": "4GYsntmZ236Yd9kvf6jX3r7uT5B1agAe53QLjEtDZ8MVi3ffRLipRsRefwrYXCFbqgs1i2BCjKt3RPV5uKCiGZU1",
  "key22": "3Wzu2E1v7hczcNrzSmV2n4HapjZTvPvCS3pazkAYTRnQykaCwiF28ZrMwj2t9SYjUCVJddwYdPRLjxL9xcvLq3Wj",
  "key23": "4PbFLhpGhMkmN34Be9QsCtjo7uB3b4U1UpfiwuUGSyVQ1BGCqoTxdN8JDMzfNnnD4Tqf2Uu2Z8kykgv6AhsDHrJS",
  "key24": "3HPiqDnpt6YVmoP5efhoz1mDZ26rj6C9aHQQXp1PUrW121BjnTpd7gB5jro7zuT3wAXwCpnKRNHLi8XXi3aA5teg"
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
