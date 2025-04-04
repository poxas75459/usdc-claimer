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
    "55ueadX7TSEjoFeUJYSvKPP5pa1MBU1bBKCFSt9sd2JWBXM2EUptHizP4PU9tiprLvpNBKJ2m8cu2cLGWgmw68uf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yQt6zNrRjYNXeLgQdvvXjLyaGLd5LNC27Ujg41RMwHU87Dbx9oGkMTvJiLt4ramE1SwjwuoVGCQ7J2QxXQbGwbG",
  "key1": "3fsZz81ST68GNGScBUHQx3xdFEJSxdrWnc5VjmaBBSPAyVfYrg39SNNppc1r78SEaKWnmrA2LCpfBzNdrW9dhkDi",
  "key2": "3fZnE4spaX482tBW5bBc6NuukFYuTt6Fgq3vyK5ei4XW5SEZgWJK4hpu4w7BJq3pEvEGMhsYQ7GTSSYo5Tp4x2Fg",
  "key3": "43KNWRyKESDCMnUaNKjVucMDxLk8CByVfy2xsK44aFRcEjY6pPdT8vCrDSLnYpDG97B7k8jB5LDK9ypZfsZE1L11",
  "key4": "3pE8Az25hZ61irYC25hkn4HUJVpMciTtXpX6gXaf4M5HPyFrkxdSwKvwzYzbRyK2rdbtvxmVxdgewK4NWFRmhEWV",
  "key5": "4aN5H1A7ZMBq9mEfehsWm9jWc55d7FwUXwQNQw29uoQUj7aKyaTq5g8Ah5AQbnLpgcbEqYkLc7aqasNBbPjoAbNb",
  "key6": "4CujEVsprnw5bUXhEbjoQa2cwgx3tL7SFJbPVqSYVSUWNDGsan3sRsg3tcHQTUnton7RMKCw9YQiUGmDcrrm29wm",
  "key7": "5YSRpJDZdHu63cB3Anv59D6WUsZ2TUcDabknVf2X8yWMZZHZXhcF8wm3o1p14GAsDMv3R92bNu51mo2HYvo2AmQR",
  "key8": "5yUG7M54t4KQpmTNEEVWf1R5kLnEFyCirbqNMM9qzuP2VEB63gFsDNnfRWam4hRfG6KpvjdakS3fJRZfuEz1czSn",
  "key9": "5yB86iiefuJRZ3qzwMeXz2Ti2hbb5LfndEybZ2WmVCJ94kzHhYwgkQGzTdKXGJAsxQQ6M8Jc3M5rYeti8w36FjoU",
  "key10": "2XVPfwS7Cy54pwSRjnc9RcpN39ZTCaXDeQmWrAMdcKgtGDNR1Cu5MLiAJf6bvhchaFwDV4YkRx55vpY7MpzbwSGK",
  "key11": "MLg3ek6YpDijGhKivTyt2ZBzKcNjbjKWPFUkMPyT7B6H7uBMVrppP4cZJbo7HjQvSwqw4c8NNnjEJSjrC6JE8Vr",
  "key12": "5oXz7sdquuVGdEwHyMxN4nbA9kK6TNttF7dZsgfSYabCysxYc7rFTTDn5bGqmNspNXvskk5jvqpFiKwXujwKcvTb",
  "key13": "n6YhJ2AKda7eABjAtzJVHP78jjDUvEvLoyiMw7tDmUcmiA28chSeNdf8EUwrBxArftA6MLRL5yYysmq5q4VeYjT",
  "key14": "4aTFWkDppvPJcHDbv88JLh7czfJNFNkftEY733YNcWJXJPZHQjt3f5F6NU89s2aC1C5dtgTx8xpzF7j1cRFVibRp",
  "key15": "5BeAoZNtJEX4QjgL3adkS2crMaJeES3Nj3CyD6mj6y621zKEf3662wzRYodzMLrnKRxZgEbeArHuS3A15U5qktAm",
  "key16": "L6unmRJfGsXgiPXfpQfRFbxvjdsVGc2642ratAp4WLkpWTcNwk2CBRVKE8KA7wBYhTp25J2tsKdQCgY969ZMHuu",
  "key17": "3QbrJaZWoF4DDaJcabvYqtwv86B6UriZA3PjuFDjhz1YvDqLzNzmW1tjBJdnLNajVYZAuCqjWfozCXwx5hxbTZRA",
  "key18": "4kGmXA7WF1xKDVSRT33VBzVF2jppUFJadaqEfa9UVK4thCycS5Mk3Ut9iSWqdfdQFcpF6eXSodgHrYnXokzpr4v4",
  "key19": "5z4rcwDgjiFKqfhrSsLkzuniivU4eym7WdGMRKJQM4u3g9E9q3GCyeykeuJim2tCcnBJA5i4cpgiPSanZEdDRL5o",
  "key20": "5VUCiZxmGR7ECNbcj6X4vPXDBoRMrWj9tRLrpq6mufJ7bVAyXFd2XE24B1qEQpuFLeGNSZ7vtzKNyP9Y1up8eDuo",
  "key21": "2J4B26dcjm9HMG1Twn5AED72xmH8szKwr4GD6dmhu2Ajee53cuTSHf7bPHoXqznShXAYPtdnL337zNJuiY7WnPgJ",
  "key22": "bGTUkq1dUBMys4g68RnuskxuNvdKDGFCJnK3uMkbv9nssSFmUMxZCjLNNhRuNb9dWGuDZVyHY3m4QJHCs46kfQZ",
  "key23": "aQp7NyrWFXVrs6EDPuFMF6E2M2eFmVYJs5H1Gkdwc8jUWomrmGEwoRZQ12cHUHWGvCLcm5oficGvfxRGq3axhhd",
  "key24": "4t8aiqBwuiUJMM7WZ2C6Q4kef1wUNUj2TA55Fy62J3athgbSH597Rm3KTRB2bXYa6QsfFMe81C7hDJm4DLmPn92F",
  "key25": "YGRcbXM3TmdLVPUhdH48YKe7Drem4akbGdB9z2GBWND44CVBu5mexr8FgJCYKaMKFJ6dL1WWsgw7BT6AqHeSC2u",
  "key26": "w3LErZsb3dJv2LXeDH8FCr1QpqJ1b6oa7ChkS8i2JEuoZV8dqYWi2pUHnTLn4HzbAS48LquztP8waj9fRxmBVAh",
  "key27": "2PCekecRX9LZdBRm5KaMvoUckna6NEJhseYcCrpAjbmSnAsjSbwyPfnyUMzWZJXWSKoZzxVrSYvirkeEugAVCB4F",
  "key28": "yRnLhx5AHosSw5t4fiBff6awgUKEjohA1ndyz18uYfBJU4Wk15PkT6JU1bKyMLpWuAqz5g9HNPiy2ur61Qc3HwV",
  "key29": "2UYqufJtRbjtqgjw3U1Li5KNc3HV9jh4nqYnRUxrDVrjmdWaHU2ePSsMz4jDHUbuUoiSR3j75HaQ6EkDfqqKP7aY",
  "key30": "4wH5WzZqwhvjGd1p9x8mKJpkCATWL37MNs14aY6xPrA9DrvJLd2YxVKSxGC513x2dvbX46kqDPPgMARkKxSwEWrK",
  "key31": "4JVwfNNjeEQtMQd7F9GJ216YQwTW3aadXoLfBQCqFdEV5UypHpYxkBtHYjcAHZEzXR5aCSunb1SVvU4CnG9XBYT",
  "key32": "355tS72JTcwPkVkeuMbpCCsyRdivGbLMgF2p8daCwWFFBayENZsG5S3hvA5TyNHakUwLHP3nfa3ft5tNf5hhW88R",
  "key33": "gmYR4pBWjHWwGhs3zkU91vSD3W4zYQ31hasPBrY621ShA1JcEXsqWobjwJwki9LYxoegxrF8aYvohxS57J8HjkY",
  "key34": "35SHci2q9u66MDMWpzFcyHpBEvWJzA7y8fqnDQjtsxejKEMF2jR35EGiSiUPmc7w4snB1Aen3N2NS64whcdaZvbi",
  "key35": "2FhLefhxcPP1wBuTAKjMPKgPCGNGMFx3E12tqPBj2L9QfF5GTHgaxBsySnc1KLbbAJzGAMSZLW2v2ABReSvWWWbu",
  "key36": "4ZpMAvf7cRhSbQ62qpH7J8zTMHa9RZqG6E1V8BfB9phUNEa55iQy89yeg524FCXmifnrPbzf9xD1qrzLxCePoHuw"
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
