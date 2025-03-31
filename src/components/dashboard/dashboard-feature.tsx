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
    "2Dq97ikY1xXHWiUXCfUqYfV9DEYQF3CAQoXP1NvA3REZssVQ5nn4fLsfdoKRFh4kwVLKr52zE96Lp2MkxA2mE4Wu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uNEMUAM4YHW6UQTfJgcvTV4AFJAZzyj1D6kLacUtaK72BD9ms77KoPiRJxV6Qb4hQx1p6WY3hgGHCJcMVoHco4r",
  "key1": "5LPrmvcwydDhe7rtZFEynAkSyhDMKUA7m3jFYMkhZYhPNtEoeuyuNwjwdxjG6UYzrc71iswdSvgfJoTUyfE6BFcJ",
  "key2": "4oUTiqS76xsZNmaKP2mi7TmcZKS2Z4BYtu78UZ5GsGx2dAaLvu4DmQN1vFGauRsNVjUdQfk33rynsS1nHJ7MCj9",
  "key3": "331CoeP6HdhFMS67hSJjz99HtosodS7xLCpHYdXsfav8FQv3pxi2QKf5zj9isTUHHCQQMaiAbyNt195BoFHmgo9T",
  "key4": "3pf8BHbSvrefSzvCYgzwfVR4MDnjqT9tgQ5UZPPfLqVHZY4WDngnt7vyDByrirFETc3tbrxtU7vhmnLVUtaF9MHC",
  "key5": "5XgYk5FzbdYfWn1gXxDuNvP9DDMf8dSyfmHCrUY3TaWDtvoVCXmXx3CnxGzAqR4B7Zv5MLUFm9EemqBsrtSTNEWq",
  "key6": "1278rghcLCmvhRSgjRt37DNy7GShWAnrvKmShFySFy36bVf8m9UZJpDYZLeFXz4GRsVdyWeNQra2wWyzHZpFZPcR",
  "key7": "42jDUn65hB4r7e3ebmpzV9661xrpQXLVj3QZFDfacEZk11BWe2T5775aS8zBEZvYjyiwzWDEoMCist4qFTmGuBqn",
  "key8": "94SZDqMkLU1DXCqMnmCPopfb7N8PeAUaiLtGDpZb2iYhowoQhkttX71HappdnC2qPeZaxoeBNjbwgrV8wjDsPqh",
  "key9": "3t4FiWSTEXjL3i62LTMutAT9C1uM3TELcGQDMrkJWXw9zbXnLheSBtP5L8hCSCXKdfSUtVo2caVvafiH1eYW9ZXz",
  "key10": "6XHP8shi52xZSC1W2RH5ZzkH8gPVCBGnapaRWAfViohV26hSRhCyUzXoq2yDkF3bYmJ8FZPyKwWJpZKdut1gDvA",
  "key11": "3w54J2dAohu1sstzSQ1nY9NaMFqAxCNbMRXmin8ZWA4vj7Q9JbHGk6xn3yGChJEPcHwVj4i8gSSs5jEU79eBcAX",
  "key12": "4Yfj2REX9cpzAY62QHt33RSPqDfPgvqu7eiFXwFW2hpoptxwV8WXFKUSyp2PMUJzgXc8GwMHmVH19za92cJL2T7T",
  "key13": "3FEMHErs5oiHJ1X5QCE3sLAbfv3mPiVVdDZKwVf9DiQ9qxP6ccW2piRgjnW1iRF3jaiUJTzBfzRT5uprAXMgtS9E",
  "key14": "5WkFkjpct6xDMyBpDrVKsWZzHzFQd5Ep8mHRPD3BSVrRzGZ7VJDYvzHWLG3rXciypJdZoq9YjFW5bcDtYN3oGfGu",
  "key15": "49KTBr3ZkVJBfCK442rbie43f2FGHgjnb26NEGSch7ymTAHBc99vdBENonjrHQSkHUkcCDHtbXCX2ygnak6Dc6DW",
  "key16": "21BuLpr951hb14eFVN17hqseSDjPg7HRqK12pUuUiLwrbkH6tCcyHta9xxBe4gxDimzcEo9BhcqxTEPmkruCqDTQ",
  "key17": "4dk2MYCprHVaX23u8dhCper1efPdaU2Phtfi4WpPY2mcHgQdEXtUcVAtSHwyjU9icXxCAwiX2Y4EdZ7E95hQqejG",
  "key18": "uPYF3sBhKRgF7CawuhcB1KbG3GgWGhdUzEgV5919mwo5HqopGZv14xCeShxMW4TatQHHxRafUSK3K7xaESX81oR",
  "key19": "5ascs1FQ1NxgNpbNgz3BKLuYFMQdJR4z77Qub7YSxVtuQhqzrshnUcBdLXNzWXhxhUadNUaq2naFkrt7UaR2bNmy",
  "key20": "5NzkkFejjJPBt6rZZk9J5WMFsDt3QddnJUHULVAxX98yajzTXzyM981cfHcTGmLszqmS7B98U375xjXFd7bUQM3s",
  "key21": "5XYo3NebgAkHbPTARvBrYG4k81PZAZjaDuUPfnH9gEv9WA4Q2tnB4KZMUG3s64s1XyuoyqJg9eyYkLPzcoKZcCiA",
  "key22": "2Zc4uLu8pBhQgPj8N7zGR5XHoUBK52WLfnmShYU1K7cugGFaqi2F1ZxjG4j7HXoFihm5AF4gYP1b6Siq2gvzuLUV",
  "key23": "b3Td4PLr1hQd6NCsUhuxLGzuPg36hZCKTaxG95v58CpMWkLAo7PDxJg7EmLRx8WF8TTuq7A9hyyekdzmBRQWkQu",
  "key24": "5tdvDqAZZiUPQVAv17bksqVm5659UEFVKf5MhL3U9nQrMEGoNDe6jGvhtRJbisaz57J7BDMjiiHWnXbz1Cdfz9SK",
  "key25": "4Wgrx13oc9xmBsvQX9apPUBw6fvTjEU6WdG3cRsrWzDeWhQTHq9QaFBRthTUS5ZLbrE4MnzBcCZ3uonuhbTGZg8S"
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
