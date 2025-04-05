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
    "6qCdV44PgmycfKQpiGskZCPoefwTWEiKgfr1LNaLwznXaQ4RZQA6igaw9RSPvL2eXSE6rqB9xH5KmZzB9RhaPNH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rJjXH2bkiG8UoJhq9nSU1p279fPUWP3PjW5YrWTXLEUsKD8m8tUc4hUgVgkQz7wr44BQRfBHziAfbqBsuR5Suvw",
  "key1": "3XH1Aa9p9di4Y3HZqQCMHgeyyaDtBKu9Eh6HdA12nmVhKoy9ZPqJojooAeU1vGXSpvsXPBkhut1psHsVcCcbPAJL",
  "key2": "4GrAEhHi5B2iaGLq1ipy7cRrycKCJz9tSDU7YBt6Aygw1sF1PuKtRzYYeugWbFWaT1Weg5mcVewSW7e894JxKe6P",
  "key3": "5DVQq4ihyK8TVviWCFr9JiD1gnwb4FWHnpuE3sNVpH9haeo9R1esLG98aHJhkk25poMbQ7H6E4bkkxgCmD1naoEU",
  "key4": "3rDupkSmZGQZ2Q6iKhAxwid7zSrqoyGXdTSyAKf7zJPwRpYc917ja9fQfQiaQFiCsnDZnt6pAZSfUQM3BwDxz2wu",
  "key5": "uNU12rWpohUL6pjXvAib9nCWNxqZFfyvURd1bizMwohKamprabdMwt9a5NztXzYHWyjHuEfaDNcDk39my27WA17",
  "key6": "5aZz8SY6gCYk8YSENRiC746rStotGha55BCm9hSUx7VEGb15XHJnDCxGTwJKCJJoxjw1KimrVSYc5NN49hHUdiPr",
  "key7": "3EbyaKsbAKf49K5ddAGUMgB2sJ5zpbasWKcuAgeNtahpidrXJKVLbFb3iPozjjgieabcAvKF7N4yHs5YoZ9Sx51P",
  "key8": "3sX8ksQhtucESunNQiBB7DXSm4mS84EsHwWfZa58vSeFWNLr3uhGVptTafXqbDjLWdJBJjZ9pPDBwtYv7CMRN5vq",
  "key9": "46WgrSaUcoWfj7fPvrbCtRxoify9sYSn2cfro43k3FyuyFKw4Dc7pitAwZDX5tHd5LGeaw6ivVEKNQyMaYZ3jtB2",
  "key10": "4MboeRdqZjjvryfUmeBZj55jR4DAcxQRbB3nbFxCvL977U9E2rj7HQY1CxCdDT7UHMAm1dqcL8Q6DnStz469AS8q",
  "key11": "5L5XHxY2ZjSM7iSfFVuDTRr87EmRBGiYAgnqmszQi64Kij5QNNDee7qM4Ko2o6dDEj7XUX8ETVj5UWbBqeMmeQRK",
  "key12": "5WxPNUMB3SV7ASGScYUCpyRXtNG3K7h49Fd6Ti9Bb5zYerBBbMeDvF8C9Poy56R4KAmSKRjmrGNsBQS5S4dU4YzM",
  "key13": "5ju6htMNHEPZmt7p2ZVMhYdd8k3FuPgvoLJTg9kJwEYzoYp6ywQdVdRnsEssTUp41zqdwsn1XDzWm5s2rVtfbeTG",
  "key14": "2ijCgMxr877F2kHiGPJvKLAC6VcvEUAbw42aa8jU4rA8p1f1oUEbT6JtsAYawmF12JCMkEoP49iUKUMSjh7bsgGd",
  "key15": "2AjSADKAWkv5SKFYgFktKh1VTvquuS5rphu2MxtJHjsHRMW5S5aGPKYM4j4aAdoLy9171f9kmeQkHHMWrBKuDd7T",
  "key16": "3CcuF2H1SnQanippghz5Tr22cGtJdvFawinBLRNake6oXqMnRh8NgyYdST4CMp1ihPLj2ffNQsV6Nr5adsSMAFns",
  "key17": "S9Ah9HvtqoeoYCArFoJQWXP6M1CSaybVVrc4F2DL26KunTmho5BZjUnDzC7j8ApeBQkuGUDRngsmowbsbLWf81g",
  "key18": "49C6gf6MNNfxxNTkX9g8njLCbv8wmUDvDFjiG9P5L7KNGjvm2uEb5hc53z5wzFaDCwFdcftVPdtge72te8Ku7DYF",
  "key19": "3mbmmfj1nm6A11s5x4y12EjCYw2GW9BJpmuZyR21xKmr7x7xGEeqn7UmJtXPFUCiJho58hfajizgiMUvhsbwQ7w9",
  "key20": "TWFVQkMrUevgYE5WyvDJkAP3hfXkRdZUxNuq5zzqz1tLk1sgNjFxWAJZ2QJmPe2PwvpYrjghhAmfvqkjY6TvRgL",
  "key21": "4pb1qaTEDseKK56dopUyJSHSbNQHjQXEzczgKRtnT44xV13bKzxEhbCaHFMyRXwVFTDhUkEnw8BvqAnd3y6T74wZ",
  "key22": "4PHqPdFsysT2LnFLu4dx3NFZk4mzrh2i1pHLV1RCof7LieYQjxExp5ACuw4GKCwYx7CbvdawthiJBRU8BnKFNnoP",
  "key23": "mzUNUPgGjzedbdKFXw4JN8Qdho5YxFRbHngapusSGcPbb2w8W87QJND6TEAZkiVy4PeigH1VeoW328edGdKHKzR",
  "key24": "2Yix9jRHS39jBuCPomBY2eAAN83p1TSy2aRzdGgsY39LMFR7D4AeM1M9pSepqp6BMxDzYqM7YwVrsMBscawhHHH5",
  "key25": "2AFDLuBzoXyuxNqUAjxpVCtB9x3GQ3xW6UcHjDQNCCydxKyfWjHHbf7ZBosq3fVG8xg8poogQ9pk4W7oYU1pxAig",
  "key26": "6GPi7Acv8a4ndW9oitLgnJfCc9xfuAM8y7uy3AfwkzCxJ8y42tEBGeLjhd6KcNYTZJAGoTkC8WJ8pkrsoxzgJew"
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
