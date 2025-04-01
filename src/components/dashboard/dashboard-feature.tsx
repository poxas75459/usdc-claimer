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
    "23PcwT8rTMXL1sgpdKTsrvaVjNM34DLXNssrhSv77vpV2YNmHsHvGBQMPXXj3KtZiove4sQEW9zvvGfUPMqrBgA1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fjyA9ts1f5AD9cQA3Kdj1JouhzWLPPK29dB27LBTLwoD6cTmgSDD5G99mgr5pPqLHXRS8AvYmhVJkWWE2VMHjWU",
  "key1": "5uNsPdzegX9anD1ygVdGcC5Z392LWK6H9vFu4zqhU3uuABSfPQjkDyMhuiyYdVi14qhLdPq9payeR7FD1Ue24qC8",
  "key2": "3njqomJawiEyCrgKtWzyw2NGpgcSMPXCdjQzJRmYHv3ZEGYoJUrCuEt2BMQgQFM3PMJyHo6DeP2Czz6oFHmTenfn",
  "key3": "5n47o5WYCYRpGhtKr3LFMPM8jd7K9Uj5kEGXdq4c4W9dHQuA3Y2Ce83ai3NRqu5vmsbiwi95xV91Sq8QzHeS3ijm",
  "key4": "36P8sWVMxQQNJrEuTpEnYyWgUTD3KFxDiPZjtESJv9zujx51Tt9MGHouQUmHezEUYCu1XHFJisJt3gryHasT6M7h",
  "key5": "2hXTWcwehXzA7RFKCHDnAwwNv8Dw7qLoN8S1o3eSFdayucPX59Rg2FxS5LnD3scdCY8LqS9B1ffAs8EtCq7do8A2",
  "key6": "5iTZFqt52WyuQXnCPyCoSvVWsdQez3UgzhTXctRhBFnLSnDkrkjQmp3cLQj9EG2N37kUCqMSWknUgNBAc3mY3HcR",
  "key7": "546keptsREdbXGRi8jAtudi9sDDWy4maTmFiVQBLGmQari1wWi4u2o2FKehUz5xDKzwDrb5cjxz8oBakPQqq7kpZ",
  "key8": "3EBt9XCnkhULS5X85zyZffhojZ2JoXpMoELWneDe56EoyTs6RqXdYpMMrBVc1GS1netXYWNADC4HnkzhN548AHQ9",
  "key9": "54CAiwYBD3KtTsyDv4kXvtcbUcRWz1vKm5Q4UNxZLZzse3vctoSkCAM113HfG1ZtsUsvQsV4j8pFk7dVXZgQiF9A",
  "key10": "363L7ZfyZuhmXmhsFZCnNpKXDk45aPcUvw74HTfNnnoc2nVPGuzVdF9M2jmyP5kCPm4CwJ62G51dYPdim8WRQuDU",
  "key11": "2AoKktMkQxWMNUa5pydm3Cx4JCF4Un5HENHefYq6Q2jYB3Xf1HZagWz2yB8fHtxM8DNaG7mxAkm5FKMHmVm15NLg",
  "key12": "WtYaiV7q3GLJRbDwHs77ShFEH88Q5naKap1bYR1nqXbBPCjtTbeL7FVfVU7eemMsTiUDqjUnN1YRmvVZfXS7ZJ6",
  "key13": "5mbLWKBtNQejkTeRojwpXWVgo69bqUbMmoyGgiTcxtD5VD6erNQQknJVcYjfYwCJFLq2xeqzkfuXtDRLmAWfmQJW",
  "key14": "ttvbN2otx53Tnz9wHw1YSvH78E8yY1UBzBh3pu7XUXXyriizonQJPX17gmgQrmCoCByFVNvHngZtQ55V1FECdWr",
  "key15": "2FTU3jx4SCnLKoTRBT75qXYSUUNB2cWGcvnecw47ouFrf1SQ4zDybKzGsfjjaojUpfbpJ5BWSDgQC9StmPcmu1Sm",
  "key16": "3pWZxJZ9Ap9j7uysYvCfsNuZuWTJDZp6VP1hHAbjn8Dsin98LWoK2Wyj4CjJipdZGNTAWKVSMHBEAXwmMWMaawUd",
  "key17": "32pV1mC5vWYHJmsztmEsRgoZWBprP8opv33mwoW9BvCJah5kxrzaJGgm7aTgoake7uf2SyuJUTadrsi8CAg3sL6A",
  "key18": "52DiVRg1BmgyeH4qgqfokuRsxkYgbUgSc5Tvv9qqjDF1BRgXMcn8fc4YSJvizHzApTka9gvoyZk23syKAPu1JrWs",
  "key19": "4E921nJ8gCFZXFoSaZedzwEBv57XehjwETCP8tLYX9PS1Gv34TGVNgwDrN9hjtFUutGbd9wxvdUokapbGBMZia9n",
  "key20": "5jsMcbG61KT726MyG24e4zcWRvxnW9cYFdAMxP2fT5egBoj38D5PXao6ZRrsJHMWKkoVJr5u4RZ97kyVeAPxR9pC",
  "key21": "22N1ScAusPZ7JtcPkJm5KZ5aJKW6vxVVMU4k2KF4XTvLsLKf8qn1p6mpNkUp2WCndZ2hjCrwHLGeXHTUuKfeQXyP",
  "key22": "36DLrKV8hdzV8avvkw9EMM5Ve8RYUW165s9FtZfVo4tuCszYBZcyziJAdrr7HXiywLwFkLzt4MDoT16Mq8eSrpCE",
  "key23": "3ncmH7NB84AxC72nhcdVf7frPpZAjUmwh7Xd2VKcVALY3CVuFNyM1vBD7RPpAf8NvkxJ7EqJ8PPdppHeyz66oaMC",
  "key24": "59wEMv3hsNiLHMLUvA4NWnBs2fNfj6bMKx4Lq6Q3r6eaxataVKqrfBwctKUpF8tQdrEcPrZVdS39iGfTNGWtK9fn"
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
