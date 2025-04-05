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
    "4xBohJrEEbvqRPcMnqiTiLXkEhaw1DqMw1TZmhDitYUR5nMyPmFmVdGbsABtwrpNF81okym4QvsiDSgSzfSEeDek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NfFPSSpdhDsDDswZ9EZSuXStwCNCZN79Ndsgfwrr5dRbAx7Fif4EkVYi2CKbC98ZS9u88TiGfUwmufxQkxKiTjA",
  "key1": "5Y6XLKH11apGPUG2sUgXrRUt2usFTAxM5KhEvfvoKNAFWnFwonP2ZhB7zx1W63EX4x8pQy6rvodpHfqGB63YKvZJ",
  "key2": "62fSBawAq5JdwVtCna7qdMUXNTMHuM3CLLJMvyA36b4aBgzt2oyaq3hRALhPgdabQF7uMLiL2nBemo5pQSwq5xXm",
  "key3": "7FccFyc45NV3rYU8ttmjrrDeBcpdp3diWqRYw6G6XZYtwxUeZCwDD536bDWRM23Tie69gzfcMsSQnpGJ7sZKqEx",
  "key4": "JY152g2JmWbWb9UufFRH5TYHehvK7Mqm1yDxfLHYdKqxTrMC4nQLM5GDCwPjdfXWFMVqQ8VE37CAmc8xz56WE3m",
  "key5": "4P2oZoxbgvrdN7gBTiioQGtro8Ubhmaou3wYKZfKPSZ53VYwat1Ju27t8QMzd9DKFMFemsmSnDVtcrmFL37rkjNP",
  "key6": "55Riig5MFmsgfvwiUhxskHBPKEAZKUL8kihTPadWJCByXpEbY5yXw9bKyjEnaMN9FuwtdyDYLU5QEsPyNjN3by5b",
  "key7": "zwsHE5Eg8LV8nXHsuYTS8ByuzcjSY7ynp7K3in9vXsbenU97M73ZyfWi1kbCGbzpvGBYaYS36aSV5HLbk2cpv5o",
  "key8": "KrrbMmY75RheF7bptn8rGGdBXary173vtPF5RASTQLNQWrEC7qQa9igYx7kbGaTgPVSyRJXreJnwd4Vu9bU7kUW",
  "key9": "4NfsqSqdWCaPxoqcW9c1BdTNrUmxu41BRhUJqFTydngGu38d45LV4tvmJDWFJBE2NtqhEFYpvTgZKiWXXHhZ1n9P",
  "key10": "4BY488FDG9XVZkMKgDETZH9xxM5FMQABXZFavXDSfNyECih8ntoxacRqxUMu8dGsoifGmzy9KduwuqcN8mTk4C4i",
  "key11": "2Q7Sawooz9j5nyDcMpfjLa8aUVfqaW7c8pXSss5W4tb4rzVooxZsgNCj9AHufZNsyACinVLMxUN3A2pJcrnTDMLD",
  "key12": "3QDZi3vmHerRxTjMfu53ukCamnfjbyBwxtEEbEvuorWaEgMDjdZCsXxtAKPxzNyP2V182xPJRcgG8Br3PGoX3jsx",
  "key13": "5M7138qE3TzEGAWptUCJgUX6CSuGXonnQLoU6QhAvXz8s5TBCHfwRNrMBPvMQoi6YufaYB3qy3CPAnekCMgk8T74",
  "key14": "34XvmEi1jYs64AwwLDPWurjivFifk9wpqUKMYwjPsfRaNDTQuR9tciqhQ3vK1BgJMcy54uc23U2z2B8puv1rsnJj",
  "key15": "3UauaWWWYJqFdbPfq6SeE8X4qm6cjo7ZKZycseDGBypNBoanZ8bRNjkq1qzryW9zpS9c1qmts9Mcck7wboJmdENL",
  "key16": "2o5rTjhEwbbWtHLNW9QCP2TYKx6GMyuzTveMtjJyqzK7YY1NGbbCcaXfoZxSUfojo7zBXvZX2cbWYTkShaEx9Wza",
  "key17": "4nHYDskhtc1QAw9sSK7DbLbrfHVbrh9a9siRoTg3TUDw7WnnyNLgDPw7txemWYv3civXJeP6EinuQ1tnTVb2EVa8",
  "key18": "ZWaovqmwbigJPfhFGoKEZEueUhBU9otKMHqTuq8bGjtP1LPkczWDZgdgZtca1XfZLn1yXAGnxpVnvBkB79B9cA8",
  "key19": "Csmbnc9Q3PHb2iHSjXm1pN69WRV1ncD3zGFjRdS5S3BWbaWzULvpA3DrB5rQH8HuxpmAReDbyqWbdn6Uq1qw8i8",
  "key20": "2ckDGYPTjg4SKWFt4GWyVUX1KT1UwvsQ2pHqHh8TnzCX1W6pPZeaCCF4vR8ajC8Jy8WAaafpdL7RGXCZyyoc5RCU",
  "key21": "JJscfgAGWac6X4tHM6DywJVWRzMwwEAtZWZDZJUuCwrPjqVvUneaRVz7TWqKNGupres4a9XuUMk9QmdYJ7fxGmL",
  "key22": "4qM3xLjKdK1st7JuLLcT47AfRT5RYsbY8bUnorq3bcrc3WqA4Y39rxxzAg1GtD9GNBpiqAeEmJVfWVhHwZxfzPW3",
  "key23": "2Hu5xg7AR17qQU3kKDrm4jvkmtCuEarGd37RCazeZZtDe712Z6eMupVkUAoZQ7j3QKinDYxjZjadAi7DMLJW36Pm",
  "key24": "3Fa2nbFNo3DDSvR6knSFDhAgRknL3Rujf66kNwRUazStmfLe2feERpCBm3PP2etnbFkfDnhYHALsR6NXqV7JNWpt",
  "key25": "3nWHZtp3WQEnU67WYCG2iDDsbT7e5Mdebjr65XYAnCVz56nT1Vc7gL3y4EkW6BoNGodMJ1NsSzKiF8JnTYEQ7qYe",
  "key26": "2NQUsJvZuhp4LmALXoWQww4BfVDTMbGiGNMthLdszduRaf7ZfpKfWhN8W34pHcnqvNmqE94LKAbjConuWQc9mWXE",
  "key27": "j9iAqzkKA1UV4E9UonjNipsp9HSBFgRinenf638Cmqc4Xj7bAR6ecQAnvqNHCHtrwhZ2NTSBThdHyLr8Zi8FSjb",
  "key28": "4BV7UjS5h95Mr2yoH2wr3zfNTcQve3TPEGpXdV72EGwcZ5DSfSZQSvUAQHBFo1BDa3mdcyMjquF4wZ1M4tpfswUJ"
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
