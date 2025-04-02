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
    "2bizkxUiKzp7JRMDp6ygghcXDwXCo6maAMZd5S5YmC6MAYfQbUakEh6ibm9VYpcwqUtxsmnU8FxpGYvK8FWix99b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SNHRsSeWAJ7hHDvNEgRXTDEuf2C5yEHzwYpqxuSsL1A6eHVKMXUENh8CraeJXF9Asdos6A8As3pCM2EZ2jG82qw",
  "key1": "NxRoiLhZqCYRhHJiqhL7LFZwR2GYSd5zvf7CKxaWm35mdyVHQPwSmuGwokdaotL3Q1sHA5yLS2sCVWXgK6NQhKD",
  "key2": "4qUQGVSzqqDVj5vtRvjQv5Nwea7Zi22jAYtNk318uvneRTKcqda3LN5rdtTK62HCVJwEw2v6dpNxosGK9R1RiM14",
  "key3": "3C6zxL9pNmLh3cxH4TErrtRkCK2pys2Xn1KW45yXBvSXiPZEX8p67xC7w15FRrP8H4oG4FuAAne1pK61hA7QCQJr",
  "key4": "yFRe9QA13iU7tPUWSpUpPyEDWjTEqe8Lt6SLvFYKChUNHDZ3MYf5J4NDT2vyNM3ZPgfs7PxunwXmDMKKTnB2AXV",
  "key5": "vt9VCjN4WEvzkWHxuhJAyB1jRttDFhUePuWrj9rbGDDeNi55ZsmBEfEXaDSuABMruVX2cfdHa2ZyWJshUoEggY6",
  "key6": "2Aq9vnxvqB2oeWFoPQvmTo5jJCtMjgczStFwbhc5Cw8Bgjsq14c2fTjd6PqfFb5sF4i7euBXHjzPGqscpY5Naiyb",
  "key7": "2FKaseu4sgHZxAjMfhLXszxtTJLaYaWdAyqWvMZaFHXcLjn8qMgbMAvy1ciyim3VqKNPx9HGxVjWL5sjkvQN37Ur",
  "key8": "Zyp32ezq3YVHe4DgFWTdzdf3sSsKX5K5CxGUmrvyJL2gKW7j3RX5vmFHnBrfNqGeR96QaGmD36M89hds5Y8xAo3",
  "key9": "xj9KhtwL2Mg3L2gmWibvVvpzVQVuuVYA4Emm7SeKydV28juNtJckEQ6mZZu5EYtaxebVEb96TzahfqSJwaMQjzt",
  "key10": "55UVakMBkue2ZYXi1uRSsxz45bxgbCxioP2NppKNgpbkttMtxowhNH6LbptRKXj8TQ7o2yoRZcy5eTX5Y5End5S8",
  "key11": "4oVDsyA1yamcCREiewpkndKysD3QqirGfcWcFPWdKWQdY747oKTrqKPfeX3gHthtAuFuCpEijyhVJS8bKycp76kK",
  "key12": "5QBQCQp8VVSuKdwPvi5wGMHQztAujCfZ1QKdCjXaCQDptwdECKmBg2w3jxgsUoa5qeQkQxRaEVePiC734Chxo28K",
  "key13": "7BfJB6x33BrMsCaAX5CbFxE5XK9FUR3GbzFKrUj4YS1mk6T8yfT88iNdUEGyJ8GFAwBtKtwz36pSNLR8rb1myuT",
  "key14": "3C7B5epjAVKXTvmVJ921orVcDh6EKK5H98t27NdJ9BE1xjaojwk9FTCRLah6WrTJQgWtosXnYMgr1MR6rQe8Mrw6",
  "key15": "4X5JGX3t5YsVzkYepymVHLqYtxHiGoBvrkYKKBHS4NXbyRLGRaz2CJnHkajBbaRWBHNf2Zr8mZ8bW999FfE1p8U6",
  "key16": "45W9o1vCWSUUpyZmaNZxParnbgzs82X55NzB6T3B98BvCezQXQZeRacwasY76edbUYVeeCf7CVd1heokc6nHk3tz",
  "key17": "5FkcPPtkcDArbhvehEr5nJkxzhfgSwDWjDVNqS8RKi1kpsF9s6ppvPKnh31Sb2A1aBYzNqpDY4mG93djgpUP5BBm",
  "key18": "3xcvZuo5czcy9fRuQ9A8NNWbkGRe1Jq74J9UX9h7FDQxBcUQaChg4S3NNaiCpJ7pnR65StXwXa8Ny1WwpKs2E2Me",
  "key19": "serkBfLzktdRmUg8j4nWQhaMX9o8gzKbL1FgZv8SUZ5SXmScqEuBS3wHRfHqVG6WiHQNXHLz3TjhwKRmM95rLD7",
  "key20": "3xyopuhJvLXfqk2g1cjgVQKuMeuPiavY2o85L4jyT4DRmseqouUJpQKjAqzujXFCQw2ZTh6MRuHz8hvXq84Axmee",
  "key21": "52JQ2SP66RnvmEgF7BjDYgiwViMosyKeVRRBoV9sZsvBesG9doPfsdxBUzfeemJU2NMpL3b4vy2CDGkrw13Vy4Xu",
  "key22": "3kdaKtaWu8aCf2E1D736yX5sDzic3n1Mj3aML5ksaoZKz1wEf9aGwsQB7XGugh1UMXYv5HHADeyzxbsun8X8y89z",
  "key23": "3zRGk45ehUEbtJ66SB17MAGChztZzKT7dxauqYbuZHYDBV6AUVcgUyWB5nkVCy37eX8WLsDw6BjPS2kjB7tnurcd",
  "key24": "49o6cs6BJLyeKKbYZaLG5e6dxztZAp2NwUo6hdoHi8DFrWSM8yTEb67SHKcrrJeu4osmCAm17XZYrkVosfmHZTnv",
  "key25": "5VQUDwRxor8bdFJD4SkYt9pYaaajn8DBEtqADHs4tXapJpvEEDWHgEDSR2XJBMGcaRa9qX32k5MUCknTZVZtTFSY",
  "key26": "4pikRR7YHmsZxgm5Njt45Bjr8UdiVBgfSsEMKpeFpdHugnZvmRjyUu1ivNaDVjuiUMGFiebKRi3DukvNUMvPKCdr",
  "key27": "rTmBrDwr9wukB5Hwwui2NrBdWeUAnwiaeVNxaPhCz7uQP8KWbETenxU4WyUXR7B2ahSHBM32MoVREYKix4NtsZT",
  "key28": "Mum8nXrVv2vYEXKdAykKQQ9FtMPQMS9VyFFyrj2kEfB6Sc3D7TEJX9d2iFmtK93ifNPk7UNLtwX5KD2UPFhkbCd",
  "key29": "5MhATHN7RS59tpVq2hCWtW7UNisgFDMCKectuHKvUffDZmMR8DJ86UgHhA21BjURddNbQ5BHNgtEehhm8D1EWQMK",
  "key30": "2F1ZqvzE8Jz9g1g4crX1WWNR3LuA9jG6ZWv5GLPZPGJTimUjAXWHePh5Rj9FWkFo1zfgkecLHyFbGZSmfw4VEMd5",
  "key31": "5odqDEVv9BKuSpqx3fXSzfGGqMv3BDPcyaUMUZ3EcoJ1eKh2b7J6Xjz9pmFnBxBsBFdHxAqs5BiYnWLJcSMcWjDP",
  "key32": "3HUoPqXjdiakuTm6VrSeqatiqWVakY94yWPymvWMwbtfekauGo5P5CD9Z4qj9gfppPo4rgaRoDye6pKF9yXeKmGY",
  "key33": "32JWJPVdYjnxAGRa9nWV1Kj7V1WcSkaziFDGjomWQCdAEHQ2yyiS5gwLp1KUcA8NQEZoG78pzM8Cjs2o97saHTpu",
  "key34": "3persezyMCy8Gp4LY3R7aBXGWHdhMvyp17Sri55BwPQec21xo83K7kFysCppisB5TVH7cGqyGBHETJ2moCGRFKyC",
  "key35": "4MLqxhtMAwgeWT7SBB5ZPQ7L5T6t1bMRLP1yKqBT8fcPYpFNLADNhppGpAKeYpp6phPvftDnmr8RNJU4SvJJMGPo",
  "key36": "4jP3eSFfHmi1Vim2xHpWbuw4ddyqcyuQeUvhi2CWk937ovJBB4A3xxcpP6DUfe2Hcy9Tn6wytkEjrEoXT7rcvYs3",
  "key37": "4rygQCa3JSkNtzb2zPRwAwjNvz3CWRYdbDJWEpXFHd6fSidrvFfFT74zBW85YpGkYLsCwWFP8qSJCMKSNKaY3es3",
  "key38": "4HJM3z9ADSX4QUWFKtzjgPjfAgLTuYpEq3uv5gb4r4VrbbFQjwZFAHGWvyo875LhYhzQowGs13tvLJkKx1d9vNna",
  "key39": "5Ngs8iDW1ezuA7ehEEJLeFG85kTA5DrPVpJKQPofM72e7tZ9tVJsaDs7dPmE2QYUuBbY5q1eZvT1j4FTGHSACym",
  "key40": "3AyMRwb4Gdsx7SS2yg37V3Goevy9j35cMrtkDpTGaAkCXVndedXBAvm5Bmur6scKavPKbx8SN4d7cydnxtzofPor",
  "key41": "4oGmpj5JgHTgUa9ifrAxAcgvLb4Tz5zwxTbQrr9gmcmhmv11Tg9Rv1YURRR1xBw95pWoSQQRYwGhpewTTps9k1mq",
  "key42": "4iJEmGSyR7itCY9QqqmcPLxN8hfzoQLSgfYWRst3LMA7StYBFbt1io66oG86BhszPfqeKaCAhThkbqgLD25CQUW3",
  "key43": "5Nue39EMPLKUqvzLh4UPhED9hbf4S5ZcUpdmXzb5YAgnQK8R4qEXgsUChoPrtRiVcKtBWKEpGJPkUgzA1vF5Dfw7",
  "key44": "5hNJuUcPpAb2AXMwNqSRFQwLrqmvpuFj2S7zrzzgZXczUDpNfWPZxjfZ9sXZ2HwbAtbq66Z97vCLaZi3CX9Sk7fA",
  "key45": "2WzZrnHdN1U2gG3AqN5XE6FnqG9dYj94dsYKjvaHaqAASLg7sTENAZUpvRNi9BXcaomvxNYQhQHEkFCr9kt4a65i"
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
