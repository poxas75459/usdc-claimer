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
    "4uLrzH9fkr5gSQJhVXGoVLn3wDBbLWFTmXnqiR9VJQXRGjAEMJ3iU9bvjfafWZxmAmqvpHiUjg1Y5dnZ6CpquZsk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jf1TsGfXQBbTZXTfvmFq27wgDHhhMwdwK8kP6nbuEREHm43qT6gvLo9Un5eHs9JGyn2DLr69LZMBsFf3HYK5AvM",
  "key1": "3ZdLvuFFfkTV8ZpDmZ1jAP5rNpMbtR8H5GDZ4SFwNRahr6d68piSfYHEbE4byNdQzHNSi7TDMVQkWEPZSx4LJTnf",
  "key2": "5aiLx56SAxbK9w5WSeuo2ucoCdRBLp2XMPwFnJ7CjYd8fS2JNFosvsqCEg1ELXghamrsPrnSqwT7qonPmrTjqhNi",
  "key3": "61jJNLtUnX2eFNWg5M7G87pBBEzhBU88HAKB33gSnfbEnX6zpZE4Jim3AqAfF6zxpbXiGVAchFdgwjnD9RFAUiXZ",
  "key4": "t2uVu7YdmMXewAdPjnZkrPrNz2HfhpN72apRTRtjK37AiaTLXsQdDPeno3LAFLwyzKX3w4UY9z3c7RRKA1rm6CD",
  "key5": "312zoQZ5HAMfyVvXXZGnGy6WRLbstsZ7L333kVFZBBCZo6b6dW4Pph3ReDc9TyewZ6CeS4CpdxoFnmaTL4xbf6j1",
  "key6": "2o1i3PCRxjYpzPfN9jBGZzaAN3emWv3x6uU1HhWbbLk4PjusDSQWpEGa7qipehLt3GWicmNjoyAt1xSwYra4CF6H",
  "key7": "45MLP3QBco3wyN2q1air29fh9oLsDGQcNn4yZYHV2hFnUinQgzze6xETp5vToV1XhjZDJxNMJRckX9Ga3bKTx9HS",
  "key8": "3PcVMDT4AGm2aMqi1XH1Myn5MDFmhfRdeKJCyjAdrRqUEXqsYfyNtGqw9NKsrUAf6Gv2u3Rm1QfHZmBEmtVTxDC3",
  "key9": "46Fxb88xJXXHymL3eU4L9vHnyQA7LcotJaod5M45G4necdvHVpEqhGHCnHRuzUN1ipZ2qwFdkqncvsHG8qAbq1ZJ",
  "key10": "35nATWqth48jGZk7FmW613UBLwCMsnuapCtkacZBpYJDrasNQp62L79Kum3YXRmv91eyYvZt975Tn9ynPrSt3GKx",
  "key11": "5qxXd5eR7nD6kqMyhE3SkcsPsQY2NN3sR5b7HWnNdYEzjsAPwNhSX25q4paLQq8wWM4RWgoyYckz6QmVazqN3MmA",
  "key12": "55rVreFJQb1Z4owp8FDoL95TgWnTcQhbeMyRboZgNQ7jQJzeHotRTMoQuagdkP1Ur2FJSx89BXAm8vYWRS76dkS9",
  "key13": "ygEvdaTmuFp8p8oTkTMtrCrZSccu5B3iwLUwxWMTYQQT7HYRGz92oPrnWh5eji9qx6PLyCViUtPvKW2WMnKDFFZ",
  "key14": "44M7Rj9X3RxVzVJ7qKTFZwhkaUjS5MiCvX1Qs2JNUwqxQ19LhDEPnNZCHbkJx9jhZPuKTGoHcqzc3JUx3ZQo4oW6",
  "key15": "uD7sLpdudiYMBaV4r3xfcN74JiNZaNPphEEoQDQgPDDMVL4bWyGmBzU3k5zUtUWc4dxcbQwjnpZfyeqZ2SatWnA",
  "key16": "4HotzNjueNZud4MTA2AcXe8UE6mPFZHF9YZ4vBqefVHsYW49mhvfXecyguUsfFawsc6UFuXg7y3jcdTqGGbXg3wz",
  "key17": "4Gk5JQcv3htRfmzqokSFbi5Mg6cM1gfPLNAow9rkU1c8m6pVAaaHzxvJsFpjCQzUmPMHgxDCkxpPCMfrntEM6RtV",
  "key18": "4oJ76umcAAMF7qGDQvyQZxJZbUERoWkJzrkJd5Cx5Qba9WpYHcXr7knUz3iCoEa1dCdbwaYHsEkdFNfKjcCoqD6v",
  "key19": "4bCEH29bStNsuAG9UHt1PXgFtJ6k6kyoYKDDP27xifr6t11pqz6JWcteRURq6XB6SFdA1xJvAZtKcbNYVtq79Lnv",
  "key20": "4aDYg6ofK1mw4DGpxiXK4xwYBhYU9Ux42NXqfwMLSpsoEK8mTPXEjoNxHVwCC9WthrtY28kp2Ga3PWpCkiiks2aK",
  "key21": "5yppRPRuPKE8JLPDuXArEN3WYSVQnzNmmjF21npQzS2z2Mx23HDFmd99PxGThb2xMgjMXaRJRS3g2KyBV2AzfPVz",
  "key22": "7rqzvw836btQi31eHewEyCKTUxisSvrLvnjeT5m1zh8KKFjbyZ5YNXyQrZcsEjTj8VsqBU9cETNBN1HVfDXcw9L",
  "key23": "2jwiLYLnZWWjHVYiL2JWR9BaGxCZ1yEUetPHZN4xUe2NKcXjsTiRXU98NypZrv1VAFPhktLvaLXNxTaKSQ8kk2SF",
  "key24": "4xzMew1EjS5qyH7MkBfcVQcqmSCo5wXG5hbYhSbzi4V8QiwAyo4Hv8S7Ky6ABEjE2hNbzWLPVM5wRGcyxnzgtgCd",
  "key25": "5qb516ApcgfaqFSTxQ2BdXtU5j3sxTnTvA2GhbW8QNA6i3AVF4b5QLQM7HcXBC41CDmxrs3rcfqpxsoNmMPZxz3U",
  "key26": "5ka5C9tfpZYBgZpHNtSxu5wPpnuyXwYY5zEZ8L93kJ1tY64bqnwqZ7in8oRBYYbJ6qGx6pXQWPNAYDdZUMpUevpp",
  "key27": "2gyNjnoCWRqeqTG76iogBFeMXVRD3FrkmLJfebmKtjGHj3Y6DUFb75jZkdKX2QRVvvn1wC7xBrxbVwJcjm3rNYpc",
  "key28": "MFbA9XbYux7uS68xMukzNNyYzE2Yj6QMg2cFsXU9pyo62GNyXgW24fDVUfQjrLSFbCVJvgzhLERpXknKHV2k1S7",
  "key29": "34GiQ2qeWzAgCqzaWBqNEUPiBF48YcWETENUG9WLgtyd7oVDqDJGruHRXeohxCLoCN7eqSrUCnz73s621kYeK5y1",
  "key30": "3WBwRTxZiBTgqt8tmYovixth1CYL4hgLbsxeFmALh9af7UtD7ZvdVxUghpkXxsQEYzKY67E68AWVHSJ2Nny1gXCZ",
  "key31": "S4245fXojpDe5nz5qZryRDx4Qijdp7cVC17rgR7oueLUySY6PCqGn7FvGmWxdKeatC4tdz6vPuNFJJSsUmGVMgm",
  "key32": "4XaLpipEud7X9sVZymDEE54Mp1NBhjjrj2brw8TtH2sp4RURHPKLVbEnhx7YadqzuHz3QCVTHffGJLaEmHcnVxoN",
  "key33": "tUq9dTEeY75qDHJdqCHdmdf2NG9qBAeoNDwjNtBCzeXmmBQd75uPER8Bh3WxJKvj41BcLFbteNm464W8iLCQZWG"
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
