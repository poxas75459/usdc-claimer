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
    "3FSXrWcvSg3fD43TxPu8kA5yMZCiuzZ1CztRPwr2Tqt42vp1egkWuwH6T12HrwWLE7AnPZ5RDi7aDRQKmCiqJzZ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41VyndGn3uveo9YiKGKkemBzwgFEYtxs4V9PK5f1s6g6tDLp8WhffX4ntQfe99Z2unMoDMzKau64rNECAysCKeMD",
  "key1": "QZiLqpmifvkQoeejRGMd61a4r4C6EhMc8hkJhon26eiekZX8mXrEyDF8WuEUuwJd7TCacoZzzjEcStYaFgUBb1E",
  "key2": "5RqgzwgPU4TJmoeF3fYfTNJGnh3z86mVmDnXd3C973S6xhiunwmbvt54Wjug66gW1mVSUCdkQRgRYp5YNV6pHp9G",
  "key3": "27FuGQR4Gapon5XVm6i2fALxiBChBd9GEu3EkB64Zi9Pg5ZNdatrrHnLgdxoAj6LNP9365Wfkv35jh6pW2yDuB7U",
  "key4": "b2qvGSw2eAvREsu5Q34KixZheyjCpSYJ13kmbYyn5ZtfnoGyB81AEXYE8f3EKQ5ZyCr7uzypWdNYpRX52RPxfd3",
  "key5": "3BnAMMKMuTNU53HhK4FNqx7bzYADmcCsUBPBm7MvreEuUnWZnXHdC2nCbqsGqJZBdC8P64KVxgVLprS9KQ85PzTj",
  "key6": "42ga6RbpXG2MKVGM36QKar4YsEWDvFApoKzpLgi2WHdFkFHtJ66twGq6DdLo3GYW7Zo3t9xWCLPacPWQTKybrkP7",
  "key7": "5Q3h4S8P6HR7DcsiaWkt4yySJh3zAoWuMxpkrPLyb5iSUoZhN39swaFmMzQAa692TwT42ivvyF3yXMbk8YJBDRg3",
  "key8": "4Tx9fe4GFKDTJNCLxrYk9MtiYjoCTifQgv1BAVUrFhkaTWwEAPZcbEkqj8zbburhYpLCuBV73XMR5fE8qk5AT1f",
  "key9": "5purm24VdePkBuHapCFC1hahTz8HHThfxzzmG6wx62vjXwmk8Z774wGCQvPRD8G1dCmA4sSjS9jHGgdYyEam4Yus",
  "key10": "bksC93vFSyHqie8Hpkbn1AT9McjxBNJ3icGE7KdMomBJpKJzePXF1Y6xuvuufcGY1GzqAWGUFzrs7SrRL2jgick",
  "key11": "3tu433QTuK4w2NaTehW8cCxWkyopKwfrbqejQCpDFFWwxH67qCPzPdAxQwdV3KHAwqNrcfvKgsnpuJmL3rR3rQpd",
  "key12": "2BspCnHBjYNDhEJVB1Dqyh9n8P2zSKsvssDV6Wi2nQu8HvraGoAARBvgmfWvAhduxrARJ1E1MNN3ZDoh9j8xEwt5",
  "key13": "5xPtK5iv41AhrgqNpyxNURXUzzZF8m1W5jiYX5VVi4u2HvgCPf8vnn3Vw39wCc5583QdD13ZBM3H7uh8TXMNgCHf",
  "key14": "5rByxBKNr4jcmyTtwkuH2XZSySfqsSyQma6s11TmTiPwCaqwA6tYVVKCZTUrv8JtxdUQtBvDD6w6VAeHQoaq6362",
  "key15": "2a28HBzy5XP6eHW29tco6h39JpqqfzFGZn9WnyPtS7CLUpMQVNZDaTbXcAPVvo87YtKpkudKy1F4xxD4w9iiQzPi",
  "key16": "2Yu7uCiTXHvQgezmDSZGB3TJ1hEQyJ9vhEm4cHvjQdDwvjBwtmAn6nXC1b7ZGQWwNXH9jeaRS9aWikYzZ3sxzHbF",
  "key17": "2cexUN29i21eus7qjRW7DA6K4DYafBGqRKGCE7T3ojQuWMdPquLdJ5tk2TqGMw2QzwHupDNhqVALtKZMHogFqao1",
  "key18": "28P73LobBMaeivBrAE81uQhD5wLNQU3iG6Sg7ho7Km7sCUjEjdyKCVkBRVTBHzMEW71LU6ndVHnudJBA1LVEgnGD",
  "key19": "5wMewYigqtLXYo9PMyspuR1b5B2UptvCvKbhaUTwyx6u218raDePpYA2xf4325qAfdqLSW35zZQsq3nt9uSdtGBi",
  "key20": "4qdfSakNjBwdoNxuQg6b5VGyJ4SFPF4Z7LmeeZgCGvbdJzirDJipBAsPYrhZJhoFiPBmR36kQVGWv2MucUkPSbAA",
  "key21": "6vxueskSc6AiEMd3xzCJ6QpH4DUmW8Yd6oaiad34do4kE5A7Rw88TVoQpnQU273vgCTHLQusycgq2BS6jYspxXf",
  "key22": "UKoTp1pcGsZj9NBRsaWi1VW6gsnCrs39fMBQDupjDtXTQSLAnYQRZtKSTjXixWybDhUt6LLLzFKWb2LeHDgTMy5",
  "key23": "2jz4pqEmXeSKiRfmoAvZoUjfKJHaYiWuHnY3ofAGHrBqVtnzeNcLbVSWyvQvBXQrRdSw7bTtt5ebyT9SQSBHdQGG",
  "key24": "4KWRifZnmNJ3z5ZHGRwpAxNoqC5rhHoT44tCHiJsBN5eUkELvU1zSZJUkv3UFToeiqetzkEitdS6EpEaEBzv4oxk",
  "key25": "4FJmPuVBQBqqM1zdnhicjbqhs5NGnCRcvRMs4pZb1ftRYKH96hHEuJRNvszyk6fpfLy2x8axo1eTiEKwSRppSegv",
  "key26": "4RW98UcJFwf2UAusSaqSfiWZWP4TqqZ58B8ocejLmcMPD4BnVhxaSp9mnWdwwygMGGaubQXUSQ5HgrJVFxu3qFPW",
  "key27": "3phvqsWM8CWwrRzzwWVeVouJpurq9rvubid35Wpu6oXm1B1PTAEim1ygpM8wJoYqGU3fNcQmzmKAdEb26rDVJeNy"
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
