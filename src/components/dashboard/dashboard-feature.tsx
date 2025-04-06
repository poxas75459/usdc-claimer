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
    "5RkQ6b2MaEadc83BRPKcdZCnvZXBg8n2uck3rUgfbuZr3VGnQDbtDVTChiLfBmgUshdRGDz1vjsDG1FEUs741QHT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rEjTwkQzKbZotqzRJc5HyynsJbC2WWjR9nqP99cTkchqAWPBH1X2cxSFjB27nFen8bHdBkDjuzN8NsGomZf4bnY",
  "key1": "4z9ZjN5HGH926rjNfFREKB1k6cwSeCiTecGTCCE9QsuLguocza5irmhVTMBA5YssHCGrpuHcCw9RbGKKYPnYx1oQ",
  "key2": "yF9dU6JdchuEccQkwRjFie1p4Qc8gonTZE6Gv29x71UcBzfWBRP3H3hUFoHMLc6XZoPoTds2qknQNX1Y8GfSCQH",
  "key3": "61s26BXETbGzhqFFN1q656AqXohS63ZNXrRMY6mnU9cBQKHpUrxkwBDCsknx8vHBCLBrshUhDenNfDJgRSzfDN4o",
  "key4": "5qgaYW9GUJ2ExppowE7USXFJTVhRT2tCtFRSbCf5aCWpdgnN4BnsXUFnqWnR8kbiDSY3WxymMKQ9DszhD2Uo1ez4",
  "key5": "45Yw1QZSZ8FDJPHEq9VPzEprZTKSFegP9SKCMpdoNLLsJtN54AidQsroogqcdHEJcxQsEnbQWixEooxZLnRoJwKu",
  "key6": "EZwyNYHqrUB3ntLxP1GNwQPcVwqSnjbT7jGH1WqwCQmmom683AQEk3Wrteg2tzTsHk7asm65m2YAkXMjTar8EB9",
  "key7": "4zdwxyTgiepHssA4AAPjCZ2Mtj9u82rxSsFb6prSuoezuMRsPxaXz5HypDVwktrndjdvTpqKS5aNPMvugttYxSFm",
  "key8": "KeMPL5sKgxwqf6dwoHXC9edki8XciDF3RCLHPtdqErsUJeB8x3dtiJTsmrutohKnpR36q41NS3XyUMnnUkGyqKp",
  "key9": "4VRSJi3y6Vw2GhxtB3B2qsXAu4qfAPWPHzTKH9rBgnJXSSRb8DHjJ2EWXUfRAGzg6a3gLcLLddkDgHk1aXX1AqvG",
  "key10": "5rFpVBeZBL5bG2rzgT1WHo1oRVpffZRSdyEvZY8RYvG87kJS3CCDEoMpq3VPcdV3JpN9sdhxQ9fSZhNN4Nwn2tD9",
  "key11": "46oWSJjncZJLrEbePEb4jMFxRDJcrommefWxLUyAductr4n44xaHjWkhUAzKff2ufmPeWH9vtBSACDDDb6Sq15tQ",
  "key12": "5YHFkfamyusAeaQmyCScLZLirfwVT8B6iDHDGEEA76sjVMpLA8XT4w97pA2CFhw1ya6T45MeCof4PxKbpJvz2cwn",
  "key13": "dWR6eyeNqfGRfKwaNYtJB7YL8qwHhXmDLcKxmTmyfuvPbngBwkZHrhr3Fnty5ors9Ce2FJzLBYe2egUtmoTrytp",
  "key14": "5CGMH3t4VTaLBmBfMDGSdizvrS4GhRXBLTpQRDp2E6rnsTS5t8dxtcHwwMWxvGGaKEXTLRZM6kuxoP8UVG4DGYUb",
  "key15": "4JschHHRDZutkqk5k4S4t7oSGgE5TRX2QCuXr9iN8RuvR59Y8iWAoBWJ2dC2nNw4HCi3SL4T8MRnATDME7BtAgER",
  "key16": "4JY8RVkemXCwzW58MPJQXcLwaBF6UjHCE4jFgYWYQLkTMw7iZrsPc8i8i1PgkAPb8vPgavvQuLZ4pjAboQDcMScY",
  "key17": "5xahkogxhKz92uL8vn3sFmy8X3h5PudGAvYu7vB6YCoQedRvoJGjahcJxXhuoD3dxkyYk1HrmRX4cadrUhDBB88h",
  "key18": "5Jja8ZdYe5k7joEBmN2H81bZH7bmy6ExBoqmJ6Hb9V2oZY9KtB2T888AfoTZSdWGg5fvJR9vd9Ysfg7bHM6gi7ws",
  "key19": "2w1kbqv3N1FjuaECFZKpsK8JQmHgq8CpeLBekMM8zyap6ckv9ELN6b1qWDTL2WdNQXUNfs5okNz1kG7mTeP4TZ1R",
  "key20": "3M2Qy3dJjciYPuF6DRkV2wMntAfZrfWt1BiACTW5QUcMv8D1uR8GEvjLNYKcRzdjvDjrHZqokeAGJWrNm1zsck88",
  "key21": "34vKNx1dDRh4VM4iUGeDhJVTuTpmDtXvTkf11v8KzeuStNH4gWensKPpTbimXyThm15K1Bxu9QzNWgqCVn5VPHeB",
  "key22": "3emFprkQ6aGuzK4UaVSFppFGjXXss6oKakpQiK9hV6AmM3f7EyC6cFcQxqpuXQ1SJ9PbE8QwU65MxdTDseY7MDuz",
  "key23": "5wvkKuQCaYQ8KYGFHmRqP1kCuRiqMH14WVcVcGAxxryTvw5syFQx5d8XpQecwbj9AQ9thk3FKvmvEKnLVZcnCjwZ",
  "key24": "44YnF8TY5vZyghNe7qTitvjjKuAfpaujMXLqk8xrSsfne2z3P4yjMAfVYWEArxNSinhv4fyC2XMzVT1isXK8mH4M",
  "key25": "5WJCdZTSbWFTNHLZLbjogMu4NZUiFRnH6KeqWKRFYhCQtjPJiGUJS6ZxzfG4acrdm93rGpWnJBFXDETVr9rKb5t7",
  "key26": "5aJ5SvbTUsLYUrXu17gcKmRiD2F7axjxyYdxQThCgNghmJ7vLCSciM2v2WdZt3SugSQGJ37PUMh4ahMvT1hSLjvX",
  "key27": "32hHccQAX8qLbjFev4unmAK9tPE7zhRUQveEm3pFTavS5SfKXfP34fb3pJNe4UsBvwMdkP1KJJicPTyB1iqBrrau",
  "key28": "5eRt75ueumrSKStRjEURn2ETfEinDsyb9ezXoyVvNSPTBrsBxmjhDyKq9VRUeFSXrDYP6WH8vvc5pUHkxggLKf1D",
  "key29": "3cEMUy84K7JV1gGMptAZsJZeaTYVHd5ojAELRppiPiB64PgWmWmVkFPGzbQcQrB3caYD51sYzYbvrjGd6P5UcjCC",
  "key30": "4uZJHpmTCkRHU1NDtd34PCjdokf7V8spX3yNkJtyhNW2Tcdr517i6T93uMSn346oqDVRXieHj95H3a7gF3vHrbFA",
  "key31": "3aR9vgd5dSYicEvszt4NXj1Jz6MonWQhaRsm6ai73s8SEeLJiMzELxYPc3VF1LeuEkGH2yFLUKge47nNywCnc8cT",
  "key32": "5A6nBENmV3MXjU2qHmWvx3Kp9kC3YHAk1CiNu7wqzVLqgwCU3Vbx3K8h5tj8BqpeNU1J8LvFs7fPbwMdEvzqSz1H",
  "key33": "3LNS8TErAR1wnK9pgPXd9tPk1sMU1WyMxVUMTSC3Nk1nzRKybKficpGAbJtLmYzGsikh4KMyKqeuBqnb7VtD5We9",
  "key34": "huYgyM7naPrVBY3ryLbkD1ijJha7tfpTujCdKr33QLQXvaoj9qM3kvstJ27p2WpH2FFezUTSw1nx3LXvTvUTbjN"
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
