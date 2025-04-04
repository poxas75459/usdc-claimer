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
    "4XJqEvhQqiMcGh4JzAJqS6LhoKwvLoRbTdGJA6d8JVNdK6cviu33pNyyVEeGBJMFnQmKLLQugqt4URKh8D5zrtPQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mQMKknZU1yPicGX8PpGszwdVjZ2VT8LrPQKcUY1N4xn9QDwv6sw14v4868bRTj5iXFUyf9pqMKMqzPzUddCpdW8",
  "key1": "3sdorwgoyv3KB8zQZ8JaQSFtk8PSRTuHN9Cz4UWdLAM4CNak3BbF8doqSC6AD4dRi5keFBG89c359emLY4M5oKnm",
  "key2": "ipGyMzws7uYtGJcbGNMKodX7MiNVeFu4Mn6nZTa8mSU9U7cjq4tchHd2AaTLCewQ5eZKV84biVgYCxmSF8hNuwt",
  "key3": "3tbbNboKmpgGauCwP7TNKEwjHtoBxn6AxCkA7C1Jax9awmJ8fF81PQubeTx7BgfYTFXPvoSC9vnNr2dfxjNa7xM4",
  "key4": "2Wyzc833eXPDoijotAzSPuvAFwxfPpvzDDBL57RXiYtXx6tFKB9mAL3gcvYiC1nxMtFV3kug3iuyNHiGFudq9Aoh",
  "key5": "5ZvJASNXELUbX7cnyh2x7LsHLcr6EhuAPEFmF717yCSXCPPVRSZ7eg81dfKyJXURpnfVHPFSgfbVgX37RfqA6PWb",
  "key6": "gvaqcHhhAbgqUDuSpZ23CHvybTPiyRrx78d7SHLwdaNQNec1awPfVyE8aXt8FwkfE41hp3nF8FXPKCo4NJGxA1w",
  "key7": "5Fcp1yGAknvD3uJsy6w1aydSWv3Mei6pQm1ACBs7tfXx5CvjsvktCY3xfej5Jr79op9GfArKhpyzyAwaS8947zUZ",
  "key8": "5JZkMyWv624F7Va7hF1mvVCRdsPr8bLcbkEHm421bTyX9Hj6NenHSzcDQAoDy9CRf6hRuToy4S1tWbcXwygXGEwC",
  "key9": "2K5DA9u6pvYFKbikPC1SHodty9akhAUabgAHcJ46nQkVdjeqFkYVkJDamWKqRa2EM1SVMx8GR2w5HPpdZRDPanRx",
  "key10": "5ueusA3mQGLUPGuwDEcSRfwfDk5CJ9qkvYYrGNxR7MWAkc7fDxBmi2pkZ6Zm87Wgkzfp3UgoJMgjwGtzkBie6eug",
  "key11": "FuRLgiQSUtuWRr2BLxWDRLB5zxRqpmFrGphrDUV9udEWq9CDd7Bg2eRKMHmTLKXA2W4xXfKHAKYdAFofgxGP1BS",
  "key12": "KxVSDyk6d9bxRYFfQbL81tVPNtHodEV3y93bvXrcc3UP4tbXBwpKAxx2wZQ5jdi2aMzX9T62dT8CqVc6JSvGx57",
  "key13": "5xNVY7p5dmc4haAnZnK6FARA2CDTLAPeVeWThxqLCoRCpcSpiEgz5qLzGQFCNVr51ZQGcHTjP9dBdjiFMPX4p8wd",
  "key14": "39do5vWUgmwCN2pvKJezWjqPSdPoXwfuJZPtaaivPY5GwVwSq4FWCdDUM7PYaamMdUFDrvsEa6UR9Xdb477k9fYL",
  "key15": "3sCitNmcHCPgbZkLnD6zg88JDvJ5qu2AFZinvKoSsU6tV2EY6q573agdLSGRvJxaBLMzkmQ2nkEG45j1nG9KkBzB",
  "key16": "64vQruWGYk84tq5bWe1XbhH3DVkT7aUgL9uTJrdLB93W9XnUjfViYqdymoKivVFF2yWUuCEjH6GRY8WqhsaA6H86",
  "key17": "4bNNbFfLr8u19NTaGV6p3GV5nrxipzYchyiVuXFRZhemhzNzofnzoyFLuZe2U1xfxDjTVQ3i8tdPx2mSfC9apgZG",
  "key18": "57QMby2mWCXb3SnbDW7kJ1Kx9uoWcRZ9dhheEe8NSZ32RF7MiQq3i2W7PKmLZQLWt5USZPe6ukwFat18tsSr52PY",
  "key19": "2skh3zXoQ6vzDCsUHZ8ZcqTpwiwCvmTXoBDf6LqYhBjrmmgzqidDTvHTJ3bm67bPgH8mGTdHNZNQ6nK5NCeBvTwo",
  "key20": "5huoQrvG7pzXDATwNtXrbSAdPrQdJzAP7kGPGkj24LKrPLkpuFd3remZf3kr2kTcSCD9ejEEAPe1vWPjcDG3xpw7",
  "key21": "2W9Ds4MuaVJhGQ2tZxem98Y3pRdPGCq4PfF9PxVL2kRzTRzXpyfaPxHz3CyFiGTqEiqKYzJFcJREhPUXHArkB4Gs",
  "key22": "2rZeZVb5XzP2APbGBnTb1PRFYXj3taQUQxiicKgAPoAU5RdHL5vfzwwd3DbbSBxevTtXr8uLvf6q4iTs5NzMnhkf",
  "key23": "5AhTP938mq2AWLae5Usqi5HdMVWFoasz6xV53wh7EegMKuxZUjXBmb1b9TfJs2fxNYQeSZ4oXH2Mjft742eaUe2m",
  "key24": "BmTXNF3NXUxNKboewdEz111iBjc6rmod1Dy8wQuTxsGL8kPTp5K4uE9ZxbyrBW1YMTY1UBYnYfixcDzEM63KcBa",
  "key25": "5TPixsX6d4NS5tEABAwPjta2SJvPteXhBumpSj7kcJxHhDY2m9CcGMLnpg1StxqgxURkzLmRibucUujdxaSBPAo"
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
