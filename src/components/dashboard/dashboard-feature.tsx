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
    "21kSoYHSia6As26RdEJD4PHwfE1dtp55S8FTMa7D3Lz4taf6EXgoCCx9SWDyd2JjqFCEWQfcjYD6eBr1hA8hY33x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gm36qmBbGCrmgz63VS3awMcwepngXGFK7MUgyWDzWYVfadfZkHkQ2esC1hxABoHQJtvYrY4Pagd7uBudih1kdjn",
  "key1": "U8B3cbFRRxW5KX3axuXrHjgQKU6d54awniKpsEwsLbfyfYUDyp2j2dTSGzhM9zaQN29D4v12Bs25AshiNTqCRhh",
  "key2": "4h7N5ypGh39mWLXHR26dCp4igvgynjSyFFLH8VbUefFoCpNqZppgePGDd8VFnuwpZor5gvB6VnfmmqGCWoHfFSnb",
  "key3": "5syQQb57pr3q1U3XRNvBZcjwZ5mV1eKQq1SBJ6m8tTYA5qpfbBoitZuqCzb5NFJL9jiWqn1Jrk45kHfckdxwo7hd",
  "key4": "2PHdtDkP53WyGkChSmSxoy5BrRAwQ8AoaLidUGLGgsZeLcaTuuyrbH3LmoKukPfLangVNX1W3H266xadofoM2pAf",
  "key5": "3xYtwUpT51oU4XDTxbbnCzAQjd72W5ET88nWaLuE3pmLWFuafe3m6CoKigfqx5dCFADibUwcDU39XQrevQYUb4mj",
  "key6": "2kq9UYy2L3uASzaURRYsgvPyxmePMBpFHvzqQiZP9VxskCF3gcQyRiXGftEXHzbRUqi1sSGqvLkyiJBx9uCEHCvR",
  "key7": "5dnJVSPaFLdAND3yZkB66NRUPaYNh81CNnPM9fSm7WA6ebshcazbVQ1CQtvSJY6c7dioFiL12Ut6vLuC8RMJmNXg",
  "key8": "3jgGeKohZn1buW56uYcvGzpDuPaHt5LjEg3QtjDXhpiDjz8heaGSPaYhsrrwyc5e49bCCnkvVHs2uLy6ZsCbqjvv",
  "key9": "4p3vgtva1nA8ng95kmj4E6U1A7AdVxU1TmdyJqssJJH2fRYMMQEmM82M9Az8gTpxJpmni5PhWHbRzN4sRzpMaMBt",
  "key10": "TiUxuHdSuMCtGqUBoTEnN7JfeVVTHivcvREFbnEd6pgc5DyD9XpkSBCc8euHBDnMHpPpJ1FxtpNJ6yCzd43Fn9A",
  "key11": "5fa9Mc6d5Ns3RgRUXndVxtzKioeHcdxL47Ypxt3dKSLScD93c63vCHE46dZbnHsXRPUy1EFmBksE4S6XArPuamrC",
  "key12": "2deeEi5JZG7EfBsdrjbNXUodN5KDkK9LYAQegXAPXbb7JsES2NRGjJrZ3VMBFukk36qALcFWP1teh53V3RjUHa2d",
  "key13": "2jnWVQwZhXRapVXrrPSZuQx1MxkXhCjj1e9gLmiRemdhJYoPZndkjw3hKeFULqKKLQ3JZYLop3chujSmbpqK1Sir",
  "key14": "4n7eDhcZ5VY6u5d3vXDVFkQy1TuPn31sfzP5i8LBMuYxPAGKH1VKEawTgmK5sT1LDiQ5H4K1qeAtNpJyzMogup6W",
  "key15": "347gDEGB2pAqGKq9nEWmGLsqJtF4p2DkuJ3fETkZfw39gLkJQvX5WXzkYNauMC4AUwowBxGiNWch6cDPbsqHSwbA",
  "key16": "4HWBgjrYTCsgHz6wrPhPRGirLecs8mHtdbBBYbavqH5Lmch4YpdXDoGKJRhQezAKwQjbCjRohgmFsTfhVCKAAeAz",
  "key17": "9WLmK53ep9g1BxgBLgExWH62kPw3eeMtDuJN1Ku4GvBdoNLNk8suw34HfPkw3TV37xfMkU5S6sKnXf7di6R7BiZ",
  "key18": "28SSCmr5AFpLtchh4LCDzXC5WRUVgKibsVfnxSt9eXfrXFnGpEyqiJVFU763EmFcDpj4KMX6xHsL2g7rQvdp4iaq",
  "key19": "5WugcYzFvDdc7JtYEA8Y5gvZZi9gegGykz95yhh4M5786y2vtYUdBhNwkJi4t4gC39exx7ysrd9hZBacAGBGxcFn",
  "key20": "2KWJ12CM34JWCBtWG23Jg38Cz6puFhAs3H6Q2auD2Ru9z2Km1BE7YjkARKGKUKNviHNDFcnFEoMJsgUfB3BQESZC",
  "key21": "3NQbhePRmKnV7PbE5n5YDenGoFQshjM2k7tYMhbh9jKZVc2czvvPoMEyEgBqzb9UMUjWwDa2FTMGzWmURKP6kdpV",
  "key22": "B8AF5PeaUCEXYTHxhvv62GBuZcZx4pt3umVHfRDZ5texsVmuPKGGeHsRMcFbhzvfLoXZv775nFUEa8H5nzzNW2F",
  "key23": "27J2eGysXzztP1J2tyR73yRmNkzJ25TDYVCEs5H33Cc11hkymfo7EPDv5bmLdg1LhXgq2GMpHCRMvGw8Yyorszeq",
  "key24": "3cf4Q9VKRFZiV2FmNCi9sbnXtuLN7L8PspkCAE6CKapbfqByaQSsYE3jpaZ8nzUjXhjnHdSSWM3VTHWv8cgQZmoe",
  "key25": "3yn78iutVtvDpMPZdFacMfBimJoZvrCubt9HyGuAHDnnDbEXX5WvFayau3fNkTgEBvXEAUFXPa487m5TQyZkzKPG",
  "key26": "DdEgakB6FSLRLqD5dBhw3t1dkoEin6aBY2KiDGYA6G6xp4cKABtgfBY2x76xUakGzEdmxQLZtYxafGkiHhr7dTB",
  "key27": "NgAoMMSQt42gZQJGiWX7MUoufDkm4wHPxvfptnXmPBbQmPz9CKBzvcwAnXs2aZPZBywkVWVRQBqVuiwRjm2q4ei",
  "key28": "2SiL8aQeiJi8xZ68mVUSh74bCr8KePjP8ZfSxcrZLwvVcxJxWR2B9hg9ehB8ubEKcDEf4fZ5QM3pW5csJE3YXpeX",
  "key29": "2nPSCEzLnHZ91DKq6RkGi18NdxYQwkgkwZqreHx4op6w2164aCCaMmUjjbJXHKttDWGBhPLtzXwtXzSP9G9ZrP24",
  "key30": "5K6oKC1S3hqdejxJh2DPFkNMHqr6dSJNa9kokekrNpuxfiNBikjn72sAFsrP3YBH16QvpmisnbtoCg2WR3P6mqmD"
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
