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
    "RXshsUaBow8hpLFXocmzDxTCoW5ZWsJ3FzZztLZc73wbukRJq27G5zU9j5EGMbxeBgU6q9Wyz3AFApjZepK8wqo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u8oSdSwwBKGJ2rP7ruCLyugGW759uaCf8Z4LDwsRiPyWekiKUyeoZWQeo5rGJyEWDyauqzL81eRwzoGrDjQXaaf",
  "key1": "2WumBi5hm5N5KQT6Q3nVSLmKz1TsssfgSHk8Gm4vcxnGfs8DkFcSYxZWX9fxRRBEUDpWcuoHrDCCwjY8zt9cYUAz",
  "key2": "5EGuxNDYtovb4mDDxqyzUmewY4QDMhBgiQBS8kxj4EEBqC2aA7rRekRbdXgwv7KtUyo1scrCDgh77XGNf6Jn53GR",
  "key3": "MMPVveoQuWMQmAJTo3RFSrzhw5WgArdwSDtuDRt2W3RFvQfuvCNvEhRGnTNWBgc64689eVeycGoR54NjPgDHhMN",
  "key4": "2kYzmeVPfFieW4LGZN5j1XxGEYqYvbj6viiXkDkz77sgtfFzcvNrnJ5cDuSNMeVjyWS48vXqmFdegmTu6zUCc3rr",
  "key5": "4i11XNiiYCqDfxteoKH6tGZCi5fYCCD2KVtdkZvsDyoLeFN1J4NvJvSfzTDyCgmMxhnsPWjoXzcG8evMVX3phtWL",
  "key6": "nqMoA1hAzkvaVEBEi29jsLBN53ee6qsXTrmoeLPEVodk9anZ9Mk9mg4Quv2cKf1jfUJxoyQ4ocUpxBQNDKZGFgP",
  "key7": "5Nyo17iS6YMr8txER7o5ARqUEwoDJm2Z6PVEfFrhix818pRRz8WuNZ2SZsXcVYJSMBVkU23rxkxB5QphTENEXM8y",
  "key8": "2wEiENJ3HgJKHY3g6weKgCzRsLyL7279p6FAfnQZYfgZ7MhH9i9QnsB1k4MWi8Qnv9uajdLRPBjL7rrkPEm4mLMr",
  "key9": "2genqWLf56j6hCj8HvsWwUkcw6om1qXrs3TkbcmhfggdY25ZCbhjh7Chc5egwMBbjKU8NurGFUPyUhn7QGdtfyyz",
  "key10": "Q1YfsLxu43wEweRGRpfVpqFtsbkorWPs9NgYqLGcpazjL6QnCRq1nSgTcagw3MAxsFmmPWYzHb4PNzNLxn15zgd",
  "key11": "5THTzVBgyiBP48riCrDeS9eDnYgEpkPaDXkMieCpz9Hngy59VRKTVr7YZ5ZEUVJwjxZqjNDjUK2tdTJJ4QGWVz2X",
  "key12": "4dNbG9TTgMTNV3k8gtESi1w5qS8o52LohABAJZCoYBpMPE4tnVHDA27sMh8KHUch1jFcr4Q6DRjwKnxvBbQmmMc2",
  "key13": "caMqHTe1Ufw7TTdTCYv2V1FWFQH2gwH5Mtvaqi5WVFCLXbLNkEqbqYYGgSVQuvfr5QzMP8DMtDkSArRGa2gz89p",
  "key14": "45vTm4Zi15TqpjDHYsXLMzfYeBhxmKqSSo6jxbqgxdoGZ6egvtQSivNPNkiC6vYXM5Fws2F3YC4UNsFyrMs7ws6N",
  "key15": "5Hm5N4VafAML7YentsdGvqGCq2BPmzSYLrrPKSgdzErSikVREpShG2mRLfecDgNgcRkMGWBHnYs5dYf74qPBGXYs",
  "key16": "4LpXnpmSm369XMXRQNyL9FP95VPX8xf5QmvKXkoyMwFZCaCzjXeCZLZvrTEXiNqEro6cahiGR4GmM56qoX7xgzp6",
  "key17": "3D5fq1SPVxmRqJvCFCMbY8Bzq2RBNbXiomWHB7KYaH7xTEyBnkT2pcqQShs6w8jdVZs1PANb1XaYEhCdwtje4VBW",
  "key18": "itNepS8TN4GBrWxbSmNyxYHrPabK4Lfksng8MHJ2VW2SxBV7uKx1tuAzFiKCoHeybig6ueDJJiLUB36qW3Arenn",
  "key19": "5YjLfe3kjD2R8ZgeAewrCtSihmd55MKtfncopTrKyTz6DNoqXAoyU2N2XB6rtfd7CRuAwvjZTkN1GfFZm234hr5P",
  "key20": "5CMeAjk7mBRPJwR7ZMQEvfLueiE9rt7gdzytyc8aWwigRQP61RUtV9CCSWLPHZLJwJmApVnZdX6RxUfHTAD2fSU5",
  "key21": "4ChDPcN4MxDMR772nkvBM2BbS7wm33n3mvHfAwQAXnDYFspi3eC7VhJc6B6HTJkgjehy1LTQd7ByNgC6wFcUQ866",
  "key22": "4SqCAH5gDXRxcpTgxo8DQrBNnuvgy8NmnwWGTqnBnoo7mAQXSwUPXV8SuecEXXc6Nh6XwjvbKwnxcunwtsVsyrej",
  "key23": "3uBRmzuUM2HyuD1ZKnzqsZaqw7Jcsj5P5d5MQD9U4K2xQK9wmaboYEeNxwwGMoNU1BYBDa3bx15yXxZhf6GEQLiQ",
  "key24": "2L9zgpq8NqpJRMLEXEd7CGNkhMgsUendFdAEb8Yp4NdatNt1YvQXD2rjFipxQ8Up8XTfEq4vea89pmbc4You7nwG",
  "key25": "3A4GjatCwZJhRiq52MwCNLLZknenjCqL2BZGJge7iunBmn19gY2GFEavB78dbNDFuE7iX7TgoTMu17nyy6DKnSTT",
  "key26": "2Vsdt9nVTjb3RMamvzrxRfnYGSd7gqyEqTPavKuSHTVxazASAzgLNHdFNgsX1NsFf3J9aaGihmNNCPCLaQFhwgnZ",
  "key27": "3indafZJ5Bg2Fi2jrdyYfUyAPQbgpnJwsx8eP8FpHV3w5rwQK8HnMRC64Eucgceur9SKvsQDuJ4c7YtLVkMmA4y1",
  "key28": "4FSmoDU8mkDBPqLPyATBzebyQnsUouSvVuhdeXvPtNrnW9PfsWFoxc7J2YSUUF8aehzhhMJouS9NQWnspqXPxbuv",
  "key29": "Xpb7GSF5cHxuzWeKoh5pqJH6yTmHswLE17qG34yd6EpJ1V9uUSjj2rmvBWdcKjc5XFYAhRxKZhCGwwAsefPTQy7",
  "key30": "3wRUksrBaG8rsk2wT2jUe9xjzPxE82REoVvmtncdnPcCLGjWp7KhwJ9VjJtEFxqNmQ36Qvm2gyeQQdsWpSHfdEa5",
  "key31": "FHQV4gKwGVt4qNMMhKxn9mC9iEcPqV7yaMJDDme9phqLwwKCTaimbfNrKnCSspcMQg6AQBvPoNFyCCQN84TGZas",
  "key32": "5KHsdMuRHaHpU8FzizyTdjUeyKqonYKFtMQDQyuZkYZqRMZTrG1NN5RxQuC7aMfTH34fG8XdXL2WjeQecCBcjHfK",
  "key33": "4nxVbkntDPV4tkAfukkbw3EzdFMCS4znXtckwpKNtdvpsaxEReKRrB9CPs5KkQBxDMng769Me3rYhTBuixWpapj9",
  "key34": "JjL9s6QzRCw3cDjVBeYSBtMNuykFJfngHdNcRDg5pU27VzKSWyF4fVicnHGE62YDJ89BwA3UCYBxAyYf6YR1ktu",
  "key35": "4dUPXKmH4d9QobT3PseQzpcSg7DPXvR62fDwBqpH5RXYucqaPJoam6jR2iSCkCtXVZkQXSFAHHQakpV49fJqp1fD",
  "key36": "5oBK47FaHMTVHwrTcoWMKMC7Sq4VmvV1f2Uypk9pJWaM8SZYWvqYeWQgx2zLWTi6fcdPaPGHky9aTXFz7F6FE2T5",
  "key37": "2s6NFq1kwuafan6YXvvGst9vKJ3SDruboqcntC8ARSCDsr8CwMEDciPYUSZ1D6H58eJ1n2PaXM1eu4pSJ5StYzx3",
  "key38": "3dEuRuj2awMWDbcZZYjVnAh4cs9ARrgQPebKxjB3sC5PHiXPGo7iHFn7aubkFCkENQs1UxNLUUXbhYLiyzTx5Uj8",
  "key39": "356auRNUKWCxSqkKPzDa2K9M8FvnuXZUxPwneVtis9cbCyzLzcLvdvfBGhwE2xe4oq2ricMsJNFFsK1dZSo3tkcF",
  "key40": "5YdZQznVWvpbk38Xs1SX2DtRjnBLvxXU5iZmF8Byh8rr7PcTjaR5FBkNEsXv6MHGxgymyKtnWB77kEQv9RYXDzoA",
  "key41": "3aVYTmeoT8SF2CxNe5efrRbEuueCDD4waqMDaNASA9Wn1xfLDsxnvTe6bEWNQTSzbe9rkDXUeunFYjfEDpPqXCeR",
  "key42": "ph2oW9kkZzDz9Ubhj3PejNm7WV5T52pjCWZqvgyVcA1YjgxDquiVwHES61nBvFn9VboChY5VeNwRQCzXKF6QFGA",
  "key43": "3Tcaebb3pkHNLAmdAW4H6FvofqsPnWfNoApiEHAQYD19jNukSetKnwsP5NPnT4pu9UDXE4ZuAxBYHe8KdZCiSLsv",
  "key44": "4ngQBjQZSauqsnw76CDyG7qowiXU6MzWP7gsgSGBPWTAjV6hLsP9MYbVcStfXXGff88wj8Rg8Q3EBgqDN2BHag1e",
  "key45": "3WC1kKrqufrhWEGTRMZmtw3fC6z6vYm4RRfTzB9DT2EHY4ggUziTb1oNjBDBJmn9FG1s6qWMaR5VLjEpZmVSGsW9",
  "key46": "3fpzM6H7Qt8uJabPYLThQCzXySDyMybujnV2WpSWbMk3zZQ5cXkgaiBR3pU2c8L5z1quoCXEUtq7RWG8JtqLXfwq",
  "key47": "5uZEnBKF4SiizCkoXQ4TBeLp6TVvTGR4t8j4YHzfg7ToHWLLQcd2oj31KWL96DpsRDMTE1wudvwJxcsJVbbDsngn",
  "key48": "ruQPg1YpcEZYt4YPYWJhLcGZis9QTyQsnS7AqJ7WdmMH5DyP799CEZ2u6zyzU8dydrRctd2smHimheXLLXKSarU"
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
