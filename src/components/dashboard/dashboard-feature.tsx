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
    "4dmbPnCge2qkK5af4CYtUq1bBjSVT21GQYThEJa7Yr3sdkoudpNFmcazwoUmfWMK7NMxsQn2yPruHise2HeydQPD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QKF8MTdRvcCcZyEYxD5Kay8oieMsVXjWc3k32HFjY6EQ32pZygd7PFEZfZY2Nmcw3uwui3z7PnpY9e857qqvvA8",
  "key1": "4kXBGwbJgeFP3KnxHC245cX4UiphJi8gmaiFE5vt94UmaoCCfXmgKhivko6gwFiqbMcJXhxABuYevCUEpaUfzAjN",
  "key2": "4iZuyCfUjP9XaMkXid39kioYnmPuD2fUUHtixfn2dhgAz7uwXTttZdoLs8yHtKjm6Ne3RueLC5Z8VjHr4KR7Mr7o",
  "key3": "3uvXmL9cvYMRmQkiCCug1A7dqeVnYPuYyPwr3M39xttR1fyAaYSirfF8UDUgFPZ6eWHLUp9So4DBaRqENfsCgSba",
  "key4": "5aZfKCTUqL9GyXw9HTJS2RL1KcNmQHyrLpda2wB4g2Q265RGEYceTr23zBtrmHxE327idSrST3vEvkVYi3K6y2Ln",
  "key5": "3Vw9bWhLX8zi29WAgSKPzzD5GfzZEX5HLqnWYxLNqPAKZFJTnfeSWYiGisLGGLacDL5N1hCfjjSq3iKs2S3hv2NF",
  "key6": "386Mc1zZ4SjDXeigii8EghUBmvnxjxq224ucyDDFwrC9j3rGGoYqww5VMxMk7ySTCfDTEFx1B3Zt6kp5fxBBaTs",
  "key7": "4wBDphUVsCJw95ZkmXYN1todeYivbf2FhqtYM8WTTwBeRLDeRWuvPzpfBTmkF8TFarbzkwFtEuQi9riaLTkCwQto",
  "key8": "36ZbxZnDW31rAX6eiwz25fPzD3HUubfzaqjw9knMFrYXk8Fro5Q7dSykvc94BGXrSGmnFPutWmobDQsL6LingEQT",
  "key9": "5qnvcjUhBFrVAXwUzaFkZfqj4K7PDDR2iS5PXNZgBHfUwjNHKrAp7FBEJixCF2teSiT4pMZH1UyQrErErTR95oS2",
  "key10": "3oNHuta7kQ2s9NJm3BputMYTsVWtUiUNB2RhCB23tgWva57D5VeULaKnLJDu2HpkwN2wTiRiaSttjbtH5tXPYkXM",
  "key11": "3WozAozx4UBg49CkpN3rtyanu2RipRpnjkN8FiN8HvU57uSP2VaTwFuGxCEmA45F2iu6wVjdPtKBKCMh8sswEAM",
  "key12": "455fYrEtgor2RUE1CVmGv1Twd2VqThMFjLYNvT4fg1hpcoNUvAuzrct37YNNP6E1etA5kTwhMN1Q1fGTGewDgfFs",
  "key13": "5LTjMHUEVkD6DMa44FekkrudsusQYVEpJ8k8wsqt9pN45QtuVNgDdniCF6h1zHWcYxetkm86qN57L2GzBLwmAq9A",
  "key14": "3Jwemt3Mrads2HyzwSHzQfZxz476HW8SHikoDB2UtqtZNVH2BiuDTSUC3d8Adhjh8bhq5gFb831e84N6pnSEexXo",
  "key15": "3YW5jw9z1zfUoRxYdVfzNDH8gGJwJTNKdKV7ysLzBsHB7s7nJV3kjp1a7AGy7F6RK9iurVmRcdGAxcD3zUaMotRN",
  "key16": "2RKjzQvQaHwTNbxNyGdnJ9c5gWMMB5QajJuJQp6SocPWBWWvBy17WAApXpq8VTjWca56HZRLkrjogQibvsEMt3Ub",
  "key17": "2RbpgHQqE4gi3UYCp43ehD11iUzqtvfnaKbWJ7qSCZXQBii21cqpTLxtNGZrsfB3kpjXaqLNtWdGAPN9Rum7b1LT",
  "key18": "4zoMZYRTSEjm497g2tfvBCeZtNXVCqhnxmfMLgrsi8BoumqnjgUTgjgUheYzRMURTHALFnGEgxauZgPVeaqtczks",
  "key19": "5GsQntwJcWyDzfQ52XaQbACqFEpLQzbetLSwtmx3TZULc6HKRQ4V4g7Lvs9aqLuaou3qQVp8fCyFE3WqB9rd3gtX",
  "key20": "4KngbpK484RsvxnirqNQGaefAHX4kXsP26koY9KHaSFXsfbB1LbXmix9EBitz3YnpmgjvXBqvULvzu994EafRiAz",
  "key21": "3Q1mhPiD81MjY8EvdvZSnT5HnZqAjSyPBLbpaeHF1AMHFCqJX14KTF9tLo69RWKz2MSdJWJ6vU7SHoNxD9kzhKpL",
  "key22": "5vdL7PM6KbZ7H3CnwCgPVe2yKqy6A574zKSSrqecv57q9fCmAZToLXFGEitmikXzyGA3MdV7bm8CSyjN8FSWj1kt",
  "key23": "2ethrSx8TVTevUGZ5mWwkfH9DekhvA5tWdt8TL2o5K69LJx8KoV98FpZkJWBawf9ATf9BhH9tbBfdK5h5ePGajZA",
  "key24": "5jtkmzBoLx7Y7ZS7faxpcS9nfbq2srVBaZkochAM66UJ9z4ip7CGuWfvTbWstezi7mCe79srQtoJgy3TYMbp2HF9"
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
