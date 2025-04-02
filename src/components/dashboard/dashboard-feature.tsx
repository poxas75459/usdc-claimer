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
    "3fRHb621AFJ9nbHjBzNppjF7zUyLEHen3zcYxcLUzVCrUXLU7ze5bBwJV34bGNNP7m6p1qS9X3LVPkXCuNFUygvZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZWTha9gcR6hZ4pC4TMrrCK4c8tYQc28vZuzLC1BsYjm5RLYpwMct8Pchk8GWX9vjU4SwDHoJiXnqkCA6LHkZaQX",
  "key1": "3uDiMY9shYgwPn3kuD661WYTRqSopMnMqzRSxiNKzPAX345xfyRyr6ZntMQr7yUjVayf9LHyvtTp1VuCBouDmpFs",
  "key2": "Q7JD2yrq2z2SWuDNHQ7QLAGM11Ac8esF7toTyEMzn6HRBf2KMLC1N4EqfdtPYhreGFt3psAJgNw2VnWiHGDGZSJ",
  "key3": "4987VFhAvES7aV5g3B87e2t6fpswYa4L64EnSUgjcinnm73WXUiCE7ASLv7NKF6VJ6AWj2cAGyKEL7215iuc9mbL",
  "key4": "39tvW4ncqnPpYdUB4HoRPn4jAoyAgAopGQYNURJfanfo7bkVarsNUfq27s2Exrf3P2CfzzbSfVcJVTX4Hh3K38cH",
  "key5": "4p5D9myHRHE6CgHTTRRnjSgVSz2tsApt64fr9KWKnbdM5RQE3LPZJd5rjVEs3fpjdgWmxpM4ZgaWfnWWAYE2MteW",
  "key6": "2XZfMWJeF55tyuGE2VDAjdx5vQ7hpP4gAAuupfu9QoQfuW1othyhR3dURrMTK7PdTdi4SBAwAFVYPGxsGvHwswAN",
  "key7": "28cyJ7yj7tVo9jz99P2qfT1UBi1Vmv29kb5vtRWe5Px5swkQNtvvayXRvnwRRuzGvV6owH2gTmixpDuDUEFYbApC",
  "key8": "3nrTSHJVdswtrvf7F3DFwCx1JSA4zMdCsTPDpzBW8tgncpxyMZ48cqndWGgxvfaXwABbhfrVz7L7VcR619A2fa5X",
  "key9": "4dFrsBdv2ry66Fik8du6ExTM9HSHaantV1AtxYF5ZFCrA8caH9nt3N5H35LYX6pgXiJsSYPdyi5xGsxwaVocVPTq",
  "key10": "3agWSUseWUeHrTUG2zV7Cv5u5KdYTd4gTm2yym2LRcHjUc6d1BNVvxzEXCoSHVWQUZSvwAzgoy1HCVK6Xx8jL54P",
  "key11": "499dNgfJr8SFL711WTKHEkijMPow5Ys7Jn7grPVNLGn1y4bCoNMstN8AMxxfkT51xngdAP7xgz2C9c6e4aeN5uP5",
  "key12": "5ZujxHerVF9NKVvFHufiNyqwCUjb965tbtpsaLrhUvYkXmgGBDdZbueYNuBL4QuXJsQ1jWDSBYHef4wjmZFkLgQc",
  "key13": "5S7NSVQbZG9kXsDTvpQn5yvP3igTT8oZ6VmFbU44tgLVtXSKm8bbK7UoKpK8Vz8huuQNae6pvGS7LR749PKRfocJ",
  "key14": "2ZLBqKwsXUETDX5gTtec73e8QmxagucHqFfwQehkBxY3bkFRC3Fd52cZgxUP2kqa4EQQ4MCnE71UAn8MJAxbUtsi",
  "key15": "3HGMNs8vPhsZ3KoaPxpDB69qVt8XMrFCwcHA6a8Rys29omqF5HSYAy1sJeJq8igTsYcusCbCsanMLgrbPD6cvZ17",
  "key16": "4XFZmZrqtKCsAkhr37A1KjDQ3nzMMFYZ4zy9cDAALqanZdWBAEpwLVhg5CZ7Pn5drpP3J25uspfWxwSD8YtQ328G",
  "key17": "2X8sSEUZDq682Uc1kSCBacxsNrSPGJ4a3RMSnHBfgfVxaM7BrPuVh7TXYRugjYttfttqXtS4XmBjRFkeZ9hPiu7g",
  "key18": "4ZcNbuemdqYY9qFdis1doZG4fhivsyZQWdfBV69S3Kj8Bus1SBBSHG6Qe6KPZZgd72F6hqTf3CNEnLchrT6cK6bU",
  "key19": "Lu87FmZ1VT1rFMSGxVNGXLUvcN1R9TzTJaxqznLuYLj419bRqFepTxp65J1TNytxXhhryThtX4q3RBtoxkuyZMM",
  "key20": "23vz7n7ZYMHv9zGg2Jrd3dFTTtdrFaLXenDZ1mXPsi4FcWxcaGX8ARUimnkUWgeX7KR2Df4gQHihGrFSxfN9SWcg",
  "key21": "5B6aTnNBumh2974AhiNDzBudtSvubkxGLS6qz3EAw2qb4enxPLw2MxVAbdtCAyJXkLEyMhXkHzG5EdNdgFz8aAvn",
  "key22": "452Tk6So3SxKzd5Gd8zU6r8fxdaEM6fAfcA7w9iYZcsT3UVL2vVi6g6YCfDbQSYAPJD2hfGdDe8bXsdEBHEgfMN8",
  "key23": "4deYcmy2aJVPpBzS5oADTeFXtCjYDXYXj916eAbXDYccYtNzLSmj6UBbTrfBJq7pxYur2KdaYSGM9WwZ148zX6Fh",
  "key24": "jkoRPrReQaaUa1KaBTQ33BcFyic5Jvu7ftKtHxP58t8NkZ1Wd4SvduayWLkXNr27qmiMe9demPzVLaS1WM6vgUn",
  "key25": "2q3PG52DdQXESZ96JhegumAU5rxaZTTBVUQfodBK28iizDF5sHar899UvnF28h4A7tCgp3G3BX7q7AM8sg614hdG",
  "key26": "5E9Y6sdZBfJPVyZhTy7iyf2UrxMmctfYgBwkdg7Dn4fh3NwSzrQFptDnnx4m3tvtTwhgJFqNiyA1otSZSdrNsxW8",
  "key27": "4MGoDzW4UULcgEonSt4VmzqmWJqkPHmaMSHjcaKb9tdyWJYWTywHcZQuxtK5WUdVDFAaAdvygMtrEidV9wpoNzsG"
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
