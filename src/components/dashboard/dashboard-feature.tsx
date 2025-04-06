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
    "4ZwQaZhvemLtGVEF2jsKiCsQd2FaiQL3WyPm1Bdzdxoc56rsS4gw3ScJWkp3esuAtgHwxnwgA66CtFh757RAwtc2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F7GQEYZSRdo6nC7WPaRE6PbAbPXMFYzTqm2UJrqZ38nR4Vs411FW2zPRS3NKmkj7uPFRj9eed1HXt6jstSr3Gz6",
  "key1": "yuPh5q1LTt3E2zEcHwiXWD2MokYJ2wAETW1s2wUjxGk2e83VWs7aEHzS2GDEkC8CDC6Fwg24N6ptVRhbfZ3Mgof",
  "key2": "8RAEveyrLzpYKvP1hmzF39jTkK477ABHkEvkyH92kEQSFFRnMQkUoNzjzyxYjJKXZkZ1oYJ8ej4NzKsNvFucpo2",
  "key3": "dQ3yY9muxKM3bN6CpZhVZoeN6fWQp1vpsh8oRpTsYRsrJyNkGhGitAQgHKNfr28dNxxEEWXHAR3SyJUE1pwGNvc",
  "key4": "2kcShsUyGWxA7xsPJwdZtFmvVdQ6542BCjdtJvx3Zda6vokyr6XqzGzaCtmiLKTa5rKXNoEMN8X8Bd3MicDy4fxC",
  "key5": "554t83svud7FTuapMZ5DuBmB8xLw8jMPi3benMkUgtGm5PD3cvwWPf52a5bjTex9Hwnugyzm464m1GGCqjRduP4H",
  "key6": "2BbpWrLUfiJA51bZjF9boL94DmyMv7psFwXrMuqx47HFdW1JCH26NFwbfu3HiNTv4FRtMqPboXowAVXGptNkUR5d",
  "key7": "3J8UC5TgF1zk11B5MajtB1RVnB7dvJ82qQvSHRrRJi25Be6qNVAi9sHM4RsCMvuAUommBQWPANrsFwvy5WxiBJs1",
  "key8": "4GSis7hDRa5mKxoZ7mPaiVSvVppL3Y4pCEdTXkXzKzhgDqBwVNCZ1o526XS8nJuaCG6V1UzjPcV3kFtLP1a79gp3",
  "key9": "4w9Kxn15hktgvZq9ToJY8q9kK51esDjYAd2QC6cSC3wFX3KtGpg1jSd76vNyuumKmpZgLppX1yS594TAZH7p2RFa",
  "key10": "2ViPLnMDYmEsE7UgXbWc3CG6JtwwPbkVgJVuYyCBDp3W7KE9R7vk3iFVig5MqyBN1Vx5CiH3by1eqA9M92JVfPAd",
  "key11": "SFT8tQDQePWfLbT8oMQnEnURa7NLLbXYtZyHYo7VZEDwvABhjJLhuQaWwuVN2k6TQcqeMJdyXyu9mgPo8ocPC37",
  "key12": "5RzVBaTEsazrd4qoBa4TUPqzpe4QMqh7hHnXejF5JytsW1Q1cbptzjPxY1kiTXz5PhjdggYRi4b3z6rcDXCGGNqh",
  "key13": "4JK1JsL62oDb2kxmvEsT9MUzbn2ym1fkaD4YsJnUsfGhxoyNfKBqMqkmFHqYzzBi4FjqrpsZFwq6HnMhfMwrYnj5",
  "key14": "KCC1P8NiQfBzXUDRaYESt6XDTE3NE9HcBBL9o4yZKQfARXVyyn7dZUh2B9hV7K29ZNdjXhXzQgYUSqqqP8KXTsn",
  "key15": "55rAMtLd7whBs1CKLrNY3UAHKQ6LZM1hvfrN8mTwdek9KxbabZHsYYUhwTsBmHPAG34Xviwont7Qh99eBTGAtn1E",
  "key16": "HxQucyK5u6f1y3xCxWgqR1ysveu3yEMM4uvUz2fNvfVajpJF5uN7pQANAV9cY6fkpWRA4Q81hGgBmU7k7Noa112",
  "key17": "2h7ACFBHt3LGhyaBVLHidxKhLwkD7d1erybm76jD8oxnEjz7SYCDPdNqBD1i7g2pAJ419p9WyVyVwF7D7zTgwSa2",
  "key18": "5cB58oPWiJDUpK7L7wzxMSBTPFxRDFmWpWKg5Qrykuu2XePp65TuGiMjvbkf7vk6HTvn4YZwA3aaWyMmGbv7LE7x",
  "key19": "5j6nSa7ginEkk84zwFidAx4pVWaPviAgb9AS7g2FBQzm6PgwYUk15o13mWPiWkivbVny3GTT6RYABELCBBiB5Mj8",
  "key20": "3FKW4PkJeEd7ryVbAtJBMTPw4ZLc7zDLNaA5xRRUhHUZztMVXtHjaejh6qoHuunPBQZC98g2kpdX3ANMoLFJeFG1",
  "key21": "2B64zYTrm6iWEPQrwzb2eQXPDocRhEkB8T6vnFzHM2M43UT61MXgv5sdGn57qKWpnLMAGuFuy4nzmVGNPsqdQpi7",
  "key22": "3FxTjgaHPsLRvvDfiddWFr5ZUY3wogLd7fMb6QZ5D82M2qtnBJ2pfTvLCXbevFoESgMYWmetJAtqQdmpYgywLB5v",
  "key23": "2ohsLHgrdBSnraMq3MnhBn4UJQsWtH7KpQGcDYdQBuoVeQF4T3LDRQqe5r34Ghni56EGmhHsCHYWBsghPLNcDZwL",
  "key24": "JSb24PFfLXeMKDBe98tUFdyBySEq76q67bVzLPnZc1M5QabCahk9vf17tsbeCEZoqzy6xymUNs6UNKMohm6HHie",
  "key25": "V9JwJA5AdwFa42AHX21187ZP8Drrqo3LbcLrZYuJL6kDq4UeP6dMM9G8LZHj53DgkUkfZzuEdZj7JuWqkttuPnT",
  "key26": "4DcGa6rY8wxT5aMxoWrjRb1MvwrpRsD2ujxmdyUpU8HrxJoxz3aY7s228osj1EdRs1ymjXY43hhLxVmaXLZfC62N",
  "key27": "2XTFJBhdo1nGjaNxMJovYvvJ3hVmwZkXs7VTZtiKFxhFUfVpJB13prwk8LMfigc4BauBrWnKVCC6pZvm4engFyo3",
  "key28": "3y5CBd6tsJ7k3GN1aXHXtcirbH3BrWHxAjMEtZ3sLsia2P7dpm9EFGK2LhNJ32orRBQKscSUMow1tqDaY1pSorvL",
  "key29": "CC352DjxSnp9rA2hYZ4DVLFe1JKFGdBEVYg7Sw9TFAzKMdJKcVhB8dsdXuLWstjU1pL4NLvgogpGVDwLnmFk71a",
  "key30": "5Hy29CMioojhFkbuG1K7ZZ1fMZ6C9bZ6MHNjU34iWnyiUdAqcbekGYeKPBqUhWr4M5H5XUdz4VNUFE96PtaLwDMH",
  "key31": "2nXCMJJSZykh8yGME33cVtokjs56JAxqaaXkE3b8sQedVA1rYS6GdUAEycyWC7u8bxNyzsK5WfVM5s31H6c2yFcf",
  "key32": "DGbX8uekJCLZsKLfnEa9TAPF7xY7xHp8MdKyLT8aLQqQHYNb7mn1MBVzPdavJ1Dib8DhLsJyGmyWUaWxTA6e7yv",
  "key33": "UGfRd5yMnTutj2Fa3hxBz87uhgPYXhkNr1mFh7BbknSjWAXqzDHTmeAmZGFsq8Fb2DyzZ5Ltg784uVSN2byqATV",
  "key34": "58N2FVPhxK77FdmEBpPhUHPVC3SyhJHaBrTGaLcJXqNgbvi7XvS9RxjPmAboHL2ta6jVAdK32ggcuL3tk6JNCg7E",
  "key35": "4oAg7qy2Ajrk6aBcSD3NTmZmpPiFYHTDJVdRtdzSTojL2AY5UtAULwo1ye1VWAiyYdR4obRpeeQVY7fDS8TKkWbg",
  "key36": "4n8xHNYR2XM9yTsTwdmMVoaCTHEPY1itSTgCB4mjAWsH19DobSGvQKtCjkvk4NgB49b7oKoyCWjAouL7TxNtKueH",
  "key37": "2L8iq4K3f6qYeD5wyvryxP3ixANwgeAwwTBJtyN9G5w5CZsrzCNY2pQA9mUWSA2kffn81PGgr37iJ75UzVHrw9ig",
  "key38": "5ykpMLkAhpom3ynDFvgUAauF2GXEX1p37wPA4LpwkGmW24V7AtPmbfRBmuKDFcWg2oyhE1BwdArpVnbd4KKBTvEG",
  "key39": "4dPvYK2hX2auCkdNyViMEcXZMtH8wgzYgASQDbx5zL1kVsv2DCBu9xBz9JnFuJfwy7FUckPfqBSpQ5CJjBaxzDGe",
  "key40": "3KbSyTE24t9UUqesPnK5WzFpo7nXnPzvjxsJsmGYWvNt6YhHzaj3vy1WucAoD3KRyu7ijkHgWdt6wYbEgH73VzUx",
  "key41": "5HGM55LZrzKwDBdQ7yMvagZnv7SFxqNFwoCKhhVQjZD7rWz9mr8sRaHePES8P2d5VzjnvWrRegkQbjGea2cWLn2v",
  "key42": "54ZUjMipkUBVwWR6cSVueaNPW8VgHE5o2iAZW9EPxA8MYqrGpbM5KSdEzXGdDsPTv3duvL9VV1ZPCHbNX9ALn5Xk",
  "key43": "mGvfwn8wkW1m9mwQCy1mHduo8SUjyCCX7CHos4bGWB1Fd3CBj8hkujF9Af8PygXd3gm5JAgEyQrASb7MXMuvp3x",
  "key44": "vLX5BAbdumZniQiPsEDgGWnY3ETD4C2ErPXwqN2AG3iaFUXHVxotVqWdwKD3FZyrRozcLNPkvca9m2ZTr17iN29",
  "key45": "3k9Ui97rg8eUxgfe1D3jXds4dEFTPi1UArYS7y4iDZ8vZMq6sVGFVQfrjozajQkpLuXc3Ypww6wfqqQe5zrn9VPg",
  "key46": "25EFLqPvbZGTByhToMHz1AHJe2GsXSsVTPb4VBsLc3AE7W1rU4RQAqqUYoCkDbkiEhJyG1H1LampUdDzuHwEAmag",
  "key47": "4AVCwgtJF4vQmgjEtpfzw6bT2Y3dCaRQNU3TqTts4s1sXfm5kTqBoLMPHc4gnpkknUGrP7NWSt1LBv9oWyUvBokv",
  "key48": "2ucKDmRkgwYRAmF6SmHLx53BxkZNFRgLM8eLb6VdBrZAnDtHV1jYjQosJM3AN7sCVgjRxzFn5ZmSFeF2U2w2x2Wm",
  "key49": "4FqXAeKuiyR2wAnG8rRtPnkMCmJegs8TXPCYoP3baGufqV9JysR5wZB6tQub2gEJh3RSngYXgjH8FmBmZpQNMtN2"
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
