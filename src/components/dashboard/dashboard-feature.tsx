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
    "2oAA8ad9HLcENpdbfW7LTvZQZSDtKS7vEQJeHkoix4u94AveQRLioWwJXjB4o2BgMDXVnPZKMubSgd3e16XcQ9sR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JVs3YkkgVKVMWREUUzMpgJLmmPDwvCK2cJjSXQnffG4rggDDLgnyAswxwerQvqrbPFuv4KKpdTJVZwExFsSAMBX",
  "key1": "2JyMgA6k6rpP83GSwayVF1oLusxZ4N5NTYS441drL5U1qie5TB1ooEbLxxeW1v4aDMsYkSPVAQrkiHxRqGDXGqXA",
  "key2": "4n1fzmdHtHQgZyMGHhCY1pxqM34rcutKwJQVxcCebQwJkdcAjFEhA1utu3xTjDHQZHHK9bycXCKhk6Vj9gT2yE2Z",
  "key3": "fFwkjYRh86opURNgkTzx6Y11Fq5vp8XooeQ6g972Hf5aLKmpF6TX4mZsmDC6d5NBhYczYMJjgq3vXE8DyBcne5s",
  "key4": "4rTxZh2Wz6rBc6ym16ZNvpQyko9QGTdx1vJx1bdHRfoJA2q64FGjPaFxfmc3vm7re2QMth56E1jgogu7KUiD2LLy",
  "key5": "237vmeXq9wqnrktCraNmfu1pJ5TNhi2RDe99FEt8wfoCt4CyU639DqagiiBbDSyyAcUBkhWGvJYyzLBB4T2w2p2m",
  "key6": "4nG16VhB5C4AjperBuGTeXuhKzVpqYGat7X7yuRbqwnf4aBHrDokJktaeFmyMWV4neUYf7W7aj2xj1EvrA62Yru",
  "key7": "2ZxitFjLfA171H2GUYzu5XcmdBU2QApN9ht2o3gToCSZAvvjzsHqF6czcS6N67daaQLy9AVNkTmTv39b86xrqNdF",
  "key8": "5mXSyJx2ch79x1LCJqvden2GXGd3Y6ay3UjSXT4Yk4ejf8QAk9Ea2x97upswWz6yXkJe4SijVjj5Epi3dTL4JqCf",
  "key9": "2T2x5w2Z5aCtgchMYZoW2b6zGuu4aX3i7ncyA3CiZVygPHotaXXPJD3Fwq8kC6f2Kw2BsnzNoUETGuN3pFnCsd1K",
  "key10": "2W8UDR5BBgMaGTRWFjSFr2eZjq4435nwrnbNwyrYUi7A6TncBSK9Joop2GR3QUVjjMgzBKbMPFhA9Zg96abH7deL",
  "key11": "3qeqCZhUgAwJDSgoD84MVGRSWM6herNxQJ4sEwZYw1NE9poWnYK4Z5Tfdig2Cdk6sXxVMxo4DxWXWjUPTqcsEuBG",
  "key12": "3iKnp1n4BxLXR6RooB8yGD7uCUmvtFsciuYzUgqPDcRxbi7gTDinGYgC6NZnNUNbXKaqnwyMz4DKqeezj9YXwigR",
  "key13": "4cWY18m92f35p9P3gohjj7QjapBaSkkMw394czMq7kWpp4u5h99YCAQ5EeBFUuNjwzQrCnQZrW19jQHhzt5cXSCK",
  "key14": "4UQ3TvrzrxoVf2BQ1KoCqUfbEAMiWvD5JcHTRAJNmf4CSYMCPSDfzcg6UtadJhJYV1VFFTNrLEWhEjE42yzeREHG",
  "key15": "213Ng2XomWL5wqreHfjdZjzrL9MjbCQA9iMCLPBSziUTQGUC5KeBvGJMVmxTkZMyUwXufztA6vbcDuv65LwWSngj",
  "key16": "4Y3EA6UDENjKnvYmZWgp2WngiwkXkgDmWMrPMXDwuW3zuWmsbTFqdyWMXWip6ymaC4w6y2iLZzSwWgK3Y4gtAGFJ",
  "key17": "591uxA8PpCH5zFNEm5Wc51PydJadxg5GXt6RrX7b1WxG3PEVPDSHHJ15Kc6BECWwwimyyj4Wc8FLzu5U8mGxWhG6",
  "key18": "3QCKFDM7mE8daeRzDh3Fm9EGzeKKTGn4FMufhfUJDZkRAMx1Ze5bdX8zjNWwDayRZHnRpjLecpqcT5UdvaG3FFuw",
  "key19": "2StXSWmpbHdU93QkitcBqpQjgepuvv4T5wHhwrmTRF9Gv3nNYE6uMECjncuUBeVALoJpbVdjPkVBY6cmE6ubiA1Y",
  "key20": "21PTvXt6V1Vo6xEjoxKp9g5Ft3DYswAEMWjjvEBcLrAYAwBq7RoKskpJcQUA3jPxvqsq1jXW8HX8AywPCPhTZX7J",
  "key21": "5C3Tk1i161XhFyY6JWQRmLa2LBaXJrXJLgwETMUyg2LNa1BMyuaFiarVEb6EoEs9pxZNwRxHw2DRBcZ2GAmtvfgp",
  "key22": "EigeN7oNwEYWfFjZQkxGGCGdGZPMqYJiAXTtycUBJRmf8dPzXZ98YJet8gYks1ycuDiseBBipZ86HCCRizm3PmE",
  "key23": "4pgd2YSwFBatwPY3Qwvj4X4LPHUaQZJ2ZVo2hizqek932cW2LohiJrA8NmfGJZ6oA7Dshx8rmYZ1YASVkzqMXErR",
  "key24": "5b4oRbhq7hhxENuw1YJ4MzToS8DTQkpyAqs3H23RZ5an6escEfcX1rH4ohDKdgFKLqcAh6mifQRgfq47RXSp3bSz",
  "key25": "26GL7GzqiU1aN6vsGrFQQ3FiinWPoY4mYmmrgvLrS8wFmGCGeDDaeiuM1NDpvNRXn9U3fVe9PmPYbiCnLAZym7aN",
  "key26": "3XsPZCFi1W9Y6KWJJd48shLxeZTiCqvKbx22Qf1scHBesAAuX2FBFDCX23h6ahcS3ovPhwKY3wnFzEtcixJkvmFd",
  "key27": "4bY7iJd5ZFh3PP51N3UiQeB97Z4tw2gevrb1ufZEpoE2cCfhcXS9JcC1gK7j5jHuHGRJybv5D9UfXx8vf17m4YNy",
  "key28": "31ag8nBvfYLZPX1QtWdoKmydcRLK4EoQsXJunZLe12sifLdxdWPaeDBBFZa3FUSkdE7cZ6dada5UmeaDcQFsPBhu",
  "key29": "3CBB6RU6dR7EYgH8TzZw1woYvcFMw2VpcERwDKjaoc2QP1chm9aqVGyK46uWfHiBfz968a1BuzTb8JkNhJDcJWhG",
  "key30": "4Byb8TRgRx2AJPtze56NmuHL9pKTBf5U62zCXtqqEy4DcxPGm2PaymA4TuiGDft1sxg59cYZLBZd8CVQ7bufCwSy",
  "key31": "2amYiMLXfyJBqS4TQ6jgGUaP7gJ8iREZWqNDdRbtLAfH7wLoyiLVujroNv4cyFpUuSLBMX3LenWSY4gwWqMiZLJs",
  "key32": "5PXwY3hsSWJABA2pB33uAzuKH11YudR9XH2jXy5rE6oHGLGwn6CokVqiuNrRdcUUFSvTcdMwNqn6PxVRw2AgNa8y"
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
