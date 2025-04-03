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
    "cCMtmchojCtBbPCA1MZdYzyZDuKnh8csXNDhPcfCMJNdHR2usBGXcdGkSew6iEWUeu3hK9ZqfHkHzLy4rgx8Bt2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67MGKsNejpx7dML9eC9Dn4KE5e8Ma1zKaGYSMe6gHgx1LJyPwy6srKaLZWUXsz5bVLBTNBykDToECPrXLvAHVabY",
  "key1": "2jfW3oHkudpqBm7W1z3pQMNA3xLcPctgWVorBbaVUS53iXeoxu5H4GaZxy8odqvE52tfrDiZT8EqGoNMGptM2KAB",
  "key2": "F1sUoJ6KVpwGAvZbvYSVREdA5JTPHeBCxiTAVqCo7CkWfHq6YZYLpQht2MJRC5rnEig4LEwnVQUyLKqT94kCi9a",
  "key3": "4UScybvooL68ZdUKab9DxmM1GSoftdsjmaAP2289sv7AjTHZSQQuEjQmHrsCHczr1YH83GnX3x9V79jhzrdaS9fk",
  "key4": "3VJv9NEQ2Yk9d1wKF31nGcNNGvPJxk7uENCuPvoMFCbwxbj4C8pEsJyjBxGXFrewEyf4iH61etyb18qNoikt6EHw",
  "key5": "BHKQUSqJkjiCKm37aKHnrpjNkMGGrJNiGzYAYUweA3kqaR8mNvqhNZL8sh4sYmF9BuKprk3bNBmwGBsbV6cmYwY",
  "key6": "4dQADq3eczKpBLr14m2ffV3vDWAeiLtkhJd3JyaSdKtrUeesBFgFQFGddxqe3jf6uGhpMxsQd2BcFhgsmhkhAdFT",
  "key7": "2gMpPh9ax5iA2p4tyGWJ18HpWMSBYYLDvrnn4NUaLq335sVxmntzGP6cTsL7QPK8J7HAd6PzhvpNnLRLzR6HKy1",
  "key8": "5u97z2HnxqYAzqARhh3dC3doHekNRkhgcP39bbNuiasqRYUMbcFq3TNJd4iPyDbXwb6vo42J5Tk4eqmodUSY66Ru",
  "key9": "5HXUbywUh4LTHrBWB19PNkwaGh6DGMCz5MGW2pebsqoz5AwQ1tAAPvXQqN3hZBJogQq7Xs9Hz2sfiCv2QRGJeQeH",
  "key10": "3DxTgu871Bgk4koUfW6nHdYBEzj2pf65WF3ALAvWM4LfpZJQKTheu5cYmMpDPKNMvKJnGihPBCNgExgjWKADxWDt",
  "key11": "52dnYSA3k1g2uLtZS9b55mneUGTErWCqw3H6c1wVRA6ASbTUry683dMW9Hsu3x3KQEupFHjbTnrY5Bhx4thp1Dd1",
  "key12": "iSu8jB7yrLRP8vGTv8gbZ6KLn4RjxSM3qigv6MyrzE9NiJHESdc1whQKXm1SEPQsYy9uv1BA9mwT668axcsXymF",
  "key13": "3VbZXtWaoYEYBVvK7B9EY3M8R8rHxwpbbxuUvTA422KEei964HtDeWuHyuhJDwkRhonnPyQLuhabi2t2ny9KaXss",
  "key14": "WbdASKn4Fo5M7AxZEhfPxLpstpSGszQfDUfo69XprXZcD2A8MLZVgYT25k1XrZTKPvY2jPohVyoYSMxxXg5YifM",
  "key15": "259cAE3sWwKpguxv1xEYpV7r2DbFVdHctyPc7rYjgVCdirnLuRvhWiagZUoq1kG97VoruoQUCGm1gNotwCS55bmD",
  "key16": "4C9sMkfzjKf1PacVmjt7amr2o3e9MFRx4quQj9994AtsyqVjRcLz237HtHYDzwMoRUYwPK6jjPXDkTZDvHUcMNVx",
  "key17": "RS86TSYP8TB51nsTFhLitomEQrmi5xqhWEEdf3DNkTQiby5igoJ5wKpM8gQzjDRSL7MuEbMnjtbaLzAaQvUjgF6",
  "key18": "4s6M13wNCwyiYwroA4mNL9rXzGzjbTtdtQC342kkrvFAZXH4SK69qW6LPALSBAA72rDrL3pTFgvmSpKHRYu6gWPt",
  "key19": "zsX1snFPYwXGxnGe3CaPLooJJ5tu4kaxUt8S9bnFzctQ7mTZHaN7gQqqc1mS4TEi59Ug8zj63YfQHreZQ7MRWZs",
  "key20": "mnnyCTBGb2FNRHkiDfTBANMsRovockTreWomzqpgggJWhZ3X7ThnKfYcnTKriR5FF4fKdwLzRY4ReGMjP1f4aq4",
  "key21": "5khENyj49simUZhBQ22jmbMB1iXjaXvjNwCczWxVQvQgHc2jg45SfSW4vDE3xEbR1Nm29sQeZWjLHTnvF4vQLqmx",
  "key22": "5TCxsQgBfKoxFqJ5ki9VuBm3myetV5ZDKe45Uog7yCwJkin4EJHdq6qpwZKcBosFcfK9EDPiWy3NRtPX3EfRPtXf",
  "key23": "37osr5UsQ6mpCM64bEXFe9gAALfDueb8dy9yGv2zdD6icNKHWPoHhoocsd3wak3pYvWWcNQUtTUg1mcfSvnxmCgW",
  "key24": "5NFey87sP1PnmwzovFe2AxvQKPPymDard2Budoy1zWtBQ1zGS3PzV5tkh1YvWWU677293xrg5376V4fk5u2QqEiv",
  "key25": "3hcQvsuBimorFTxotVBK5yAXsxtN7cvcYvz1vyqcHBds2tcpCVRFJtL58SyTvRXcEaXkZLz94UthYBJCKYE9B9UB",
  "key26": "Tqr7bggrWNeACkhF3fUC7AaH72fZY1uXiP4NRXvs7vabfBdEjH3y7r1awjaUBjwrec5b1Z25JNk738Vc7rFME8b",
  "key27": "2dFv6ohKPk1UvGtdPYkRuq15EqaHEgFYaq2XJekXUQju5cmizsv1n5woyJJyTwq2nTKRDWgvviwrMbcKw1cFDSWC",
  "key28": "3GL1PZKoPomMHeMiYkNhxoMBnyesnoWUxfk2aPqAFHCftzaS3tafTu6fervzTi6yV1tRnoc9fzWzpmjc6WDC7s8d",
  "key29": "54iQGUB11SM9QgYz2gH1V3MSjEYMTh9bZ5kazre7ENnchsU36cwUK1ZEx6N3sgCztGiVJdw42DWZHf1wHq3xBq5P"
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
