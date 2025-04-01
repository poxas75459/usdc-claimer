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
    "zwnyjoPuEHST6N5VRSGLAPh7xgxNiK4iXF157xbEkDfDP4XojSn1nfTVLzSMe8eGvzmCSespPsGHuARv5KxpS87"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "458gxiebwRMfQfGoMxaVfBhYfBsQpg97SKCTVPoUDDZby6TCACbYSSsUXafNstzkHyf78aAPuBGM6L1dxHz5zioe",
  "key1": "49LWZYfhQiFkohXtzhrtEQxpqTvFA5rd3GgEvcxGhWXtcCsr43xekNWTxqc7RpzFxUaYaTXjJVukAjXn2KFvnu2j",
  "key2": "67hfswxJwyfoJRJqBX9dgFZ7SsecF3uzJFrHqDA5sBmt9WPkeTbDd8spmYuqGYC7Nay8Hgpedfm8szxNP7891k8D",
  "key3": "4VQVArz5SmfhFnYxARbnUTXR7empx5AjS7nwZaCr89Fmn9cfLCMMGcRmDeYBeFEzb2ShNxkTagVh6MhEjovMFR75",
  "key4": "35Q4k6pNKsJ9BFn9C33bsD349xTbGVF6prBncefp2W7j4QdJn15tHj6xa1mf5wU5QbQiYgy95AyABR9Dv839Exz1",
  "key5": "5VJkJM4konhqoWXUk8d277WoWxvYiZqykGT8GL44F4B4y4foeeEvjpwANHANyvccrDvMqprSLDZEpnW2rw3excc1",
  "key6": "5W7UHGEDeyHjf8vauXTKTascpS8vffzJ3qdxYY3tNMLSzW61Ty3Gg2KPFTDuvHqKPvwbYf7uNw7G49cZMcbEDU9J",
  "key7": "4pRLEuRfiitJyLjaKaDWC9BQy3d8UVwmDi1TAYEgGyrmekLCRGTYvBHeGuk2zRExPzPhZf38uA3tC27JHaNReqPk",
  "key8": "2xZ7HXdJPAYEDnfcJshsetTybFRnadYbX3wz9GnnJEKvKMqD5gdTeyqdKv89D6iSTidctHiNPxuv8UtZX8D9xKWu",
  "key9": "2LN2NQv2LUyFcS2nCe2ua8d57udZmLP9QxKqj3kUHXLofDfgFz5ryy5iFT66T6etcXrcyiAskceGLaff8K5zLRdq",
  "key10": "5HHdYoNUcgKbANWqmeoV3Ar3aUrX68m4eHfB8iX3YxkdYm73oohFr53SweEWKb2phgXuWFBTWvTAzByFh3Aq5GSZ",
  "key11": "5wSQgayK2y7YoeTvTdpZMt33NP95Yw6j7VRkHnR3x7i4BGzn2RXBzuKz6Fo21tbNLgWCZKDVD4j7wXc9SCbux3er",
  "key12": "2jZVASntp8r5ueoZWvc6UgWYLWznfgR5Nmvn7wq1NtwmHRpTwNT5b6P9Uh3Cr2M9dUPc8SPtmy4WaY6Z7eC5UZr2",
  "key13": "429YkfKMT7H5Cb48jfu7nzBnw5GjkwAquMYXWpheD82HWsxaPKyFkDzjsDmWGqb8FCxbgnvWMYvRzjV1inQ7TGs8",
  "key14": "4sXfQ1wr9c3WN75r53z7kNiVS16k6q5qR7L61RxUffUH8yzGnms5H6nG9zYb4zNNS9St9rjiVUMpgzvLAsTns2UR",
  "key15": "AfaYH2hVGpZpw5g8GKvSQCF3vEvXWMUQdjYd99B27VFv3Ds9HQYFJKkpStAjBmhgkx3ney9NQkyvi1YbdKChzpd",
  "key16": "4w8VJA9fHPANJE9R8wiAEbts3QShXVRNS9KgnwbiSKyi2A9VVq21LVoM9TSaCGoms6wHuhyXfL3iXesfWidEnBko",
  "key17": "4LwxUf2rPthFvdffzf9RgPk7pzgUeMNnBMmwmvw5YrmQs4der1xD3pDuU1LJT6EYBW8eBR1NDu5aPoTMvw7gJkEc",
  "key18": "64kd3JyhmpFShCFebmKdWwsKWiVsy7ubwneMAxNKaHNUeLg2wfTqETQV8sVbEvAxFyYJcLyWrgax2oRwo46LNSAc",
  "key19": "5rjLhiYrdfjJ6s5ywWWBCgAgyPy6DQWSX8y9xuEjLfKSx1Gs9CTH46fj6S3vYEfGWTuTm8PxnzPzJbwaiTbmye6r",
  "key20": "2UHKWBddvardT1hA7j3U3RHZMpZryMazUQBo1vbEPszi2fA1SoW8TNpV3zCex2rEkbHBUT3hER1zRaHCJm1g1NcF",
  "key21": "5gqQBQsRDafY5TuCGhEc1CAU4mjJQR1XhVi4Hy1gHakRWU8Qncu1stabKWVFxtsE8i3iAGEWprh7PeDTD8rixNPH",
  "key22": "4P58Q2mwqaVddZrWuLmSvFfvupZza7CAdWnPohDmS2yMYp4kTEPQSsBSnMRmR2ccHM9XUfhG2rZyM6tULR6nBBht",
  "key23": "31cgVEUYNBYbKesk2wKuLtaMLRWvaB4sgz6tVxi42A9x8F4cmiwCnDcoDVdNJYNixWLdTCmRQRGZ5DKVmDs9nSQD",
  "key24": "3bgzFxbMiZ1DUoLhWKUJkJ334jbcg1xGoYH4fPdgpSYjQaJoCCcKUPnfa1sVwhFGoksFzaMKrgdKbTnD9ZU47Fh9",
  "key25": "D88igFDGBgPWJawTryMRTu42eZuR2yCV2yb4GBfb8ZSmS97VBG6ugtfKAcL3Bj7VdWydsXHTGeGKoAzueS2Yhu4"
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
