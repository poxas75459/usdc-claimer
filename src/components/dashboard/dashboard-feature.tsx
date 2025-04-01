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
    "4WZRBcMHHJ8yf3j5XbF7M4G7NSi4rZxChYsqBktYnvtiUR3rydhiVvV2qwNqRhMcuPm5cZQ8Vi92Jb4XfgBhaqDF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MCThRR8UZn3FRERkftvjfhdVptMVydjLbgFkhLSC4yjyoA9qJAGBFQYUhvzdC9UdiknnptzUmfHWdpDvEkTS32y",
  "key1": "3HJFKwPkTbPrwUhHhJgK33gpFxiYnju2GQQoXNJf3EnZtDox2NoWRpPNgVqctanB52KMWap3CXcin49nWjAxe9Gd",
  "key2": "5oJ8hcBcAgoBYjLFo7rxunvqsKhVJkr5MQN63cQ2sYw9arw9MHKZnYB1m35oHLcNNtpeR6m3442obfNxcxCSGvZA",
  "key3": "QmT24TuK6zVPrD6pKgu7H4bnLyvjNNBH4dgVpCqUwa1f9xZyGfKZPZrL8ZVhtdqBrGh4NmQq7bTjzSGVhrdbW7U",
  "key4": "V3zihSCHXHVecoRWxMfYn8dvsvkBq8A6MQApLDa5utoHUMaSrVDftimJBTQP8awuFLJfBMqcSc9PbozSrrAA4rv",
  "key5": "3m7fpqXALaDQNQmJQnG8dNJXsWKM7ZwiJYDqSQkQhEC9iWbHuznUVfa9mGkNQ3pQNBJHJSV3yDjQyU4bMGF1wW7f",
  "key6": "4VHXAjVvSTMCcXHqVjeVwUWuvVCKxW3cT8HQZw46YBNHcCuChh5mTtJph6No98jCh2XhBkXE6UKFwnymYgRPx15y",
  "key7": "nwA7a1Sm1D11GXQiJBWfJUUqcArdaYLST1EeZjfbDtXUqy1sqcFCF4sgpUC1H1whTphdkkR6LDDNEEGRWLspwTu",
  "key8": "4aerVP1N7HUZyjbVd5ERUNtSF1A9TCarphThmskuQeUryRsbEB6UPFUYHHvYiRzfXduH2Cm9ZoP4WSPrgPYsuxKy",
  "key9": "2yKpAeM7uw1oFfxJSsi31mADX5KS8pPFaLa1CyyJ47VyE3wEfys2EpiVWyaH4u6Yw44gQWcF6GJ6jhcEunchriSZ",
  "key10": "5y1G4WCqar9eGSNCMLw6qT7HcdvQxa8XqvpEqPFuJueiWumXcchQH2o9r6ccmpHhrB9BSVqF37yvh88EcZbTrFpq",
  "key11": "3CtC8aFmXBmUS4t7LLxGLTfPyH5QMu9fU1ooks38YWigoXXjzVjXpCLZYJNuixqfV74TgAwd1BC1Z7bfcSkYogsM",
  "key12": "4jCymQRfnbBuEPQ9hf1v8hBv2jRY4D3o3LeV3GJH3cEpXX9gjaskUu3Y5yydsjryMTB3uyhov8zoK6J3yUvdUPM",
  "key13": "2nxNsmahUbABZanjQtH8BP7o3ahnCNQ4hAqdtRk6Mjm1XhVBCfkcfDTmLfxtArAnRqAApy8uxakvbHqhtJG5jFVi",
  "key14": "RMApusUGeQfmfjwMd6aLKxweGjGn13MeUhW4vAfagQuXEds3zR9Dun5HaFL4P2FLjXwSxf2RC44rSgKkS81WVVk",
  "key15": "3D7gwWGxNANNJyuMtSCcm1AhAQLGuMQC9G1Mh1vxUbCuWtz67oa9FFW6NxJYWHyh9QjwA17MBEH2QrRHtKhK7hzQ",
  "key16": "4gy5fZSwvEwYB5uKvyYS9ZUVKqQdxcMxaurxDKuJ1Qq1hzfU5Gm1tXDcVPG7NrU8khMjjug47obY3Uw5Um89yE2Y",
  "key17": "5H9qVhE6HQvg3bbSKzn1FfCzdER14X2uXkRCts9DKsPXRB3T5J3atrbG7VuMESbgZ7AK4axK1nj1oz3aUa6xeUAv",
  "key18": "2Dd1mhSxA5mvgrkmci7Hx9s8FdSBAzNLX6GWJY2vyHqRabyXxLhgViVqKWKgQ79yn7Vxy2TTV3z6d3hDqpnt7tqi",
  "key19": "3ngMdPW91YDamRt5TAZe7BcxsJXuBpEfuLJyetfM5V7egETtU34w4rbW35gmZ49jAs8jT8PgnnJpAc6par8mEWZ",
  "key20": "2Lp5T2t1oLvVUM7JZadiZ24U3QkRA97JTMeneWU9paj4Kd9GUwiLZ8uTGNntd5kXYC5pzUL5LNTJQiqUZdRLKH9J",
  "key21": "4BCCEQKgqJvar5qctd3c8YnUerdv4XCPJESWZiS5U94HtatXjmtP6WooSXbJgn7hCKUCKEQiGdswntSyQf3XtMzG",
  "key22": "2RR6nAG8hRNhHKRcLWfrhUzosdBR3S8eezuqFESbFTEiEfecDLH2T6GhoGPftYxBzGyMRxtqBgtXW16DKKYn3Qca",
  "key23": "5kSuTc5HwwT7m8LnhzXkLWdoyjDrzzj7V7DaxLLTT4Qx38wkZQVN9xUfJmamdvX4xeH1aKy8uzN3vp8BcHWTr9UY",
  "key24": "dZfnkUiLRw9Dw6JTCkrXoERwNWMyEaspNGqXZnkvFPo4bowRieRd6btQX7yHPwfXjRzeS8Eojzk9VAkfrykt4L7",
  "key25": "25pUCsXaUu9fieemYR3TUCPsibbbaJAhGm5wZ8R6Ssbme5o3bhYX4zPyfaEGx4BWHD4toT9iajZD8FxBomjtjZo1",
  "key26": "2BnJ9xXYyJmfZsHnkiGLMYsLb5xZZJcrDKRieGNC3BG3WZrEFQTCSsb4NSopkuMx6xm9x4dGBmZuaYembb4amaY2",
  "key27": "5hB49LmXYY4gG4AHU1RxqDmJ7FuZwf8mtWX4rRtX9wsuqMDvG25eA9jjgmgbsFuR9aahVbPDXpVyyCPkYMrc1WBj",
  "key28": "3FAuykoyzm3X6LyL8qKqNFz8GJaQVCtH2v6b5TBiwHg1q2ASWj7HggSLiGWj3u1QddRrbQdQvYcsRqhj5xcuaEku",
  "key29": "2mssK2uM575Vf36TgL1V5hnex8TZzeFuVdRRX45Wjm1C2axij18G5pgpgjomaGAEsgDoiWNMZmktSMwX85vdCkSB",
  "key30": "41qbaQLGPKwZJ1btubxba61mEte3qdwsQzHAsuryjKbVf7sCSVjqLS6XSYXep7hPSohp9g4so9pqC38xUURPRz6P",
  "key31": "gsem6HZKLRDddRwbWtZwNryuKeJiRFWrJLbEgr84PRCnVwBEpHmPjFbmjKvRQ25qALnacTmZJqQspAvSk6k9Rbk",
  "key32": "usy32PkzSnJs1t8BVPmE7ixDEMobftfPNze9U8KgXEPesHAnmrwLGw1DzU5rwBZwPQYrFaziu5Y3RpWDpU9gMtk",
  "key33": "2CvybCjQp7cHVssife2XeTvjAKzPGScvdNhgzvr7sqz2BHLmL6kh5XLyrLUBA9GNwu4SYbCbVuRvnREGmXTmnExz",
  "key34": "5ZeVz8RDS94p2tupAWNEdauXxN5wWHE2wFPSeRfDo6nZvBoZGvpJk3VTNBzC7XHezNofKwaq5xmu9hVV4zcuxyDG"
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
