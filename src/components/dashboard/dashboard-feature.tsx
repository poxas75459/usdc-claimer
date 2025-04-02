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
    "4FLWzkpUXqCpwHH2J9Vuo9r3p97gfNGm9qfhJESShesvpi2NPFwZcgJqSwsdki9fjSijqzbKxNHkm3iRAz8JMNcB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34Hpf1Ei4UfrHQ6p1bdBFWnJtLmxTseDiEpEX9qsVnShQnBHApYaNj1E5T8T5uKrXPH9cid52L2AQGWurTQQ799w",
  "key1": "QuqZbxtcBHAwXzf8SZc1Nqj2umxyCifPUkfyWNpEVUZfQZgUhET2C6ZD4HpJoMWB5cTns4M5yUaksrEuVbb8R4C",
  "key2": "4hXihCvc7xVch2Yx4544xZvPXL3CqYP4Hq7goHdqrjnbXKjebPXyHwrXVEZnuVfVRSqhesVrpRKCoLRjjymRpz4G",
  "key3": "5zxsNcHKZetM36ZbcwF2gU4Y3ZBdFGCnQXt3f127N7XVzZkf3moDTLHvP73PUK8nKdUpmdr6EHzmkhit891jRDj1",
  "key4": "GEJGxMGFMWgTfjanuA9toEgTTNDVdcxNmgEp4XTgPqns7xULKnmNnFyK9FBsUo28XzBmNVQo9gFm7HDXREZJZWk",
  "key5": "2c831Q2YG4Mz7bKX5KMwG5ykcPiNgNhXaziH6mW8XHgDC2znDHgJrJ2F4sLbGmcC281kPLKxXxNcB3CK5RuJq3bq",
  "key6": "58XxHY78i1AoarG9F3BbV9skfUJtEvwp2qP79TxZHKdQ6pP2y865m95WJJ4R67EnvhmiPdi4vjKaHHQQu65cJ3Ms",
  "key7": "4EZYsiNUBsuHb6vXLt2D3GnavLNFhtHXhrAtWMU9pXGtkhry3XwHkkSYo1nzichxeoD52JYmzc7FVhtbQFCrFmQ9",
  "key8": "5US4DQyfVbZrRfPfazjA93TDTqT8poiLQzsF9QjhaMeUmMzMv5AgpPfXG4CAkenhB2XkRF6ZUsVd8ftLotT38Z3i",
  "key9": "61oW97y6JfpBiTvziN8hqcHRBpVNmXbijxARPm7LmeZFmb5Bi3RtFixt7Stp2nSfPV2cRtCCJoiLE9jitSwNDLgH",
  "key10": "4CZEAd7xskL2Zg6U2VKphzApsqHhyNgz1wEsNrZ2fj3tSgzrEMhVy5iUXULaojoKnTsdvDaNNkfCR5vy8CQtuo4o",
  "key11": "352GKgfgW9qejFXs3cbMS8ZsbSgKHJYtHLJypFoK9RGUTgSRsn8ZRYKXcoFY4AWGFpYoc14dDmsF73eREdy6SXoj",
  "key12": "3iX2k7tEyouBXH8cgEqm8oZLa4d4UWD5irtCkq1L9E4hkdZZKhMQEThiamtSv7cXFbBcwTMzxiY5uonoSStPoEEN",
  "key13": "3KAbeKpQacPTfZcGTSMgNYFDMcp1cCUitrdYV6bofve86kT4vNveEtEgGVavxYtoSQ9wo5878nAGfvwW4bkejw8J",
  "key14": "3L9jYCeZrvpgT1jxTu4RaHGTKwZaDqPVqKc6xv81p69WykB6c8P12ht2bGecZCoit8VJh4cgXywFGqcikcB8Aign",
  "key15": "3noqt7LDdTvRRBhKAxHLMwTDKwHBrjXj69d2sg5LkrEbmMAnamzVqDz97mzVmk5NjXGJJ2a5z18trhRjtwVKiQSd",
  "key16": "3EDYuQWLC643zwBQUUiMZvUdMGgg8VnWYgwdn1JQzHDApThuM8AW4df2NeNHqEAGYQMJa5sGNDbfeHsXxP5bbzuy",
  "key17": "BjkofE3TDkb4mxzJMwKBUfzcZzSczowSpjPLjJgshTeUb3o3Ts4z2YHx8suremrv1iyesUe3dXvP2VstAUPR9gn",
  "key18": "5SR9xaGUN5Zcw9R84AKVMoV2xnKBm9u34C4sTvUnzYkoHzHjpLReGuizfaq48Ly9Z2WfuUdd4eeRAnLzwroTRDHY",
  "key19": "2wDhX9wDd8jtCD74a9FtPNq9M7kSU4jbr98XrixkZx5eLvzEZsVG3d84ZTgAdJ6zsV5wDMvsAgNNUmpkGFM4NzFn",
  "key20": "2DxguaLWZgZHh4qjMV5mR6BjHgKeDKd3ekC3tTMD8SvF9ZNtTuH4Mb1P9eSskLhFn9wD8zqJqk5uM4pLPBEtAtWw",
  "key21": "55agts8ucAL5jZKnEwga5NZi3P9eb8qpFkCP1it44NwyrJXjVH7GAghSDLE5J4oeRZDPX75f5Q9djLXXnpd4a2A7",
  "key22": "3S91tHMyoAK93Jmigr7WaFzMio5JLeL3AahbtkP8rJeMg6MJtsWW89B2SCinVz4tGpSxzqx77RUEZuYz62LFvuPJ",
  "key23": "2aTwK7wEMUmEd3G1fvCThBAzmDF5ws6yPuTz9HvGdpBr8FcdiDbU21fFzX6eXPcC6JBWdf6N1eT8gUAbuzCLxspR",
  "key24": "4pfch8FyfEFcny2D4WGJPYUxcDeGyfAXZCSSvefGazxYwjrek3wCEgDc53tYneWfj4kuzXHCH92hpxysyM7wKJb3",
  "key25": "q7xpp3og3nXAqWA534Bh62KCWpctHucgA95Pgsv3vmnvNkrqAYzXz8GsFEeN3TQQ8srFPBZMXReuxFgSvT26YQo",
  "key26": "2B9dfWVta4uCXiESqMeZJZJ552U3X5pvT8dWn9WDsKncJRaaamspvGRG65C8oUVfuorWmrKaBQtVpEtjVdYJLqN4",
  "key27": "3FsuuqTGNmS9puLpqgTqzfikjYqtETVP4ZVW24RRiJrXYbThpanS9kd1ezXBGVKAsQHtZe3RmLfuX8ZgFTx959LP",
  "key28": "5RonE6iCj6R1miak3Lnt3iTJz3zZwq3TsSLmHQaNGss7MTbBfqYdnXbSchG6E7kbJm2p4Eq3uYRFQJHTxtRujKMx",
  "key29": "XgDB7yyPec9RbgcfjatYWPqGnXogY8RrxGT92HNfYADFuYEEcMMHr2CMkCPkwgS6w2mRz1G9XAedWywnXa5T2pw"
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
