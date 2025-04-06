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
    "2fu6BjUy5Cn436HiXRKv8APm2EzoXkuU8FzaCBtXHbYjkUr6BetHkXdmRVuyftKX3dd2dDK5RXcmocENsAmKFG8E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fNjXFKJMcBWtDF6ErVE9FfYkihhtg7Mr3zP8zZkfxWf2py1CSsqCRbxjKG5H9cmHopXaCBvoPoUfZDo5Qdw7axZ",
  "key1": "5BoEsVxLSQDgT6RYDgKe8cbqSsWw4D6XVAEKLUxAKhYeUe4v6oi3ys3vExMDeSx8EksComZiQDjqAUTu8xwEtB7N",
  "key2": "L4DJdCXka24TzwMfXRV6WBL8N7P9QBfRXK9hgTmVbaTXZJ1mmRLSR8RExgijUa5aGkqhC42KXTTpxGYNkB9nCz6",
  "key3": "2oHoLbQMB4zZqQVwq2wwy3KyErLp2MZBESCAKLboKSDSGNpLx486TM9gwaZKs3gJ9SzZDeUn6DwpquLLsp52TRLH",
  "key4": "3yqCRhVTukZ2sWgw5btVPNcxGa3jRBfnT63mCwueBCcRyS88Pm7QmRKN6hGUFGJndmmPixtNYNnXCPKC2NsyGBbT",
  "key5": "3TuTFnUPJr7SGBU8c25E6yR4dPREdNck2WnbRAMq9UoSgAoctsUqgzMES92MFV3GQcuhkFLvExTUhqyB3m8mBbpx",
  "key6": "2SiJcD6qiWZG6EeUjX7NcgRkM3FEoLAfJUv6BWc5bB1NPxXTcVNBNaRBRJkJ3ULKa5GLJL2ypEgJwkGzqDZiESTG",
  "key7": "4Qx6cgWXSXWqAuMrdMwaTPMaTjafveFMh7SzuUS7Da3WGLfHp5p5aCMCUZqMfBTTJjDcSGVvqPpmzkqNaVC5Meyf",
  "key8": "59FvyiozdTh2CU7xohJicke3N53SMJ7wU7vsFKPR9Tnwf6sUFQiiE1J8QApF1rAMKr1RKmNM7xSZfEEitdSg2uhV",
  "key9": "5umcvHiPNtKrAPVQdvtympuQ4UPcjSKH5fyp71S3aoJvM4twDQRnRMkHUDSP8Y7vvrPFKxz6cxDY8bZHPJCate83",
  "key10": "FHFjo3tzhyL3pVCcYysHvy35FsKXf6VXRWR95fbdaZ6k1sWuuBTFy7SPzjXQfYMnxqL1m4EnmNAFaun9NdFc23f",
  "key11": "4aet9evVFL7zfFo3ywDw6kKvMx8BQ7XM6WkiR68mDyuU5EBZNnj1uzYtRSkyvHWEiNtbqVFEG9zcePzyAh2N2jFu",
  "key12": "4kTGhv6kzq6LwwhQyiCsResbuqDtsEbnwjroDbQJcXjJjFMbc5R1uYL3wxUG64cAXig8NfySM8dSxRodvVHV2Jpc",
  "key13": "4LYPVnkcUhq6a8QL6LTvK68ZMxKZUHPcjtocr4bEEbviXh4BgPLNvvTCeVZtzWBwg8Umpn1cquMECTr5MKbGTdYx",
  "key14": "4h9KcdELe9Zd5zb8v3a5B5tWjiGhM4TWRkaqwmPfEroFQ3aPbiEdDsZ866ycrW5JCj6L1uWPhxyi1uNYbwCToTtP",
  "key15": "66EXi7pXuYiYKUKgXc6cRvUiTJghoLuaFShf8Nuzwkw6Ktp1h4vF3jdum35XQ8qJ27x3L5cmcSSw3viQ7ejiDURo",
  "key16": "5qWow5Z5NHBAR9JHLvhMdFh7WR5URSUf4eusT7bv6quT5VvzW1SXTCaNmJBiWALcPfL6zhEs4nTZ57e6A1DGDFVm",
  "key17": "3ZgAJxnuhEVGPZVkzXcFAPmBUt7azJ5vU2terjLe5RtQf18hmDCeaQb1RH4a1X1yFDr8azYw1TZ19bz2rtrjGtLq",
  "key18": "4aBrax9izWFM98bhFJbnzKRGwiFEpixa2HCGkoibHbiEP5baVRzSB4qwbkEoRc8Fi8qu76moLoEcJNui8t7ND4AW",
  "key19": "2SaD1fGcPRErZdB1e8nz1zx7pSQcSPEJnoa4kb7UqzLie6D3qU4dqeXqLPneJLKjuxN8xVqkk3aKEeB3DyNC7iCh",
  "key20": "2hKfcu59GDtmxKgRWMrnBrvmjCYSJHbZxehjY29cg8c7ZQfRBDXPQc9ZWVVQY9oEMQBGgi8dPDkiXn6APA9a7kAp",
  "key21": "448nDhgm6JhuFb2jzvWvgnxqGhTr5yaYvMdSFyvU1kNe8au7d6DxneFYdKFd3tpe5R1BWh2gtWSi3M5gnNF8TRFa",
  "key22": "51CxeTZAAzhFFy1Sf6r7cmUjhe6GG5ES53dWERYrtmRWX4WE9fCiJLP1bBAbemhUdV1YEZNWSU62GrmW9NfvWTkR",
  "key23": "g3qbpNXuE21DUyksvAZBMb9ooyMCo4F6q4BtS9JfkpC673tm1kxVct2Me1PpW8qbLzL2DjfPq6WqhkSqtp8Xrk4",
  "key24": "62L6LmfUb72mRRJyg1hiYtLwzbRkQxLbnFZoqMgSgzcbzqKsXbFPciz6Fo278yNwDU8fTC28c3TiVMBPWCnZox44"
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
