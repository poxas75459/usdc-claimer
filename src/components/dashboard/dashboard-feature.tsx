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
    "53UPQSK1S5ukARQDffKmxjBi5Rehc3BbnL6YYV12TPDDS5mbiUkFYVNeuwThFqKT71JftYKZiFpBdrRz81AjqYdg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KpXn4MZvJwBoJeNqm46H8BVHxjhLk2P8QngZgqmMSWSYgGRYhh7fRzNT81fdK1yHWdTSZPMVhkpegyZU4gEoRe9",
  "key1": "aJ2ugCjW3pw5ofWBjfZRKt4Gxpc6YuBTZ99SL8JEByitj1PsgaRMKZpsQYPPaC9AcR6Y7E7cpKXye123huZfiBv",
  "key2": "iCFyktiGCx2N7wQs7QYEjbPzaAgWXkNc11mBmbCYBXGYroGofbuuaSKGyvirSaSMeWiDeVoz3h9VGdxCfxKppyr",
  "key3": "eSx26DkvtjAMik368nHqYdQZUnr9ufjXWmsJm2GEE9ojfkxKuYhUJf1XznxzTa2xMeRxfHRJ3dG9CMkkFftoCGy",
  "key4": "e3Amem69ka24N5kU9XSZXzwsXn6eqP1eRP33qN6P66rACNesa4orF4iwKrc7vWW8R32ESdN2fi8mnkHtyJjjmhg",
  "key5": "42aQyNn7AtNcADMinAvxjGgFxUR9Xzb3GozrFtXnvKHCpRmTwZSQncyAS5JqLyqsUezBbSShzWeZLDsNQrSSky15",
  "key6": "55d4WnxrkSqwwpPe1D3rhbn78c5oPre8v1NmoGP6954bXnGQnS4cWAKp1FPLuYCLS81Ai2uURPxV2Jfzqy6pAia5",
  "key7": "Uy4nkzH9AAPwHmoxNoMRrFwCojggPp5keRTYuAnmovijLL7MhxkjieKVtmpkxNv5sG6FmHrkLCiZc8gXJvPTzLG",
  "key8": "3nPqCTRd2EnSusYnZGmRG1rYppyDqWtjZcHx63YJQaGQU7wmS68mcMqUYoZFXqGw4qw3AePAitLwdq8Dv8QQS6Rb",
  "key9": "4HgPDFpLYHuUHhE46CqQmRJdFPAsiTtaMBLBRobLFwRzBWdDjbtjPLP1BkPDi15zMLBxH2NDKg9q2iuyM1QKMtg4",
  "key10": "2jzSaRUwyhYYFv7VRd8RgmiCKS5r1jDgAyPNAZMcmVVg9jhar6c3Wb4A1Mu7kcXiR6DhbUfFXDrbkixjhnxa1Vjx",
  "key11": "2k9zvNZxJ4CufTxm9EGmxVnNfYzYUavF5mgzdm3GKY6CvF33bCUAV8MrXBWgXvwhWBcm3qMgah4NgWuMq9nopYCm",
  "key12": "5qnMKabYh4NFWMGUD7WMzECetXwcd3niwFNcSL8firu8SKk4bGrFYyH9z1MNmVVRDZRNfZrzedvL7ZAmUe2q2BVo",
  "key13": "5sUzCwaED3SffhP2K2a5fCnxgrteu5wTNk1jeoDbYnV4zDrzykp8pzykez76QxQZAkj6ZDwGajvStXwMDRdkNd1D",
  "key14": "3iYf2NFbXfxMvSvektwNB87wDZEx86v6MTQA2n9E2szBmDEVXZbTGqu7yAeqWF2zUSo6SNGnzWusEEWapuMLZB4X",
  "key15": "4fkUoi8gjWBDcQKcYt26rJywALhBXcTbCSAibvsXk83ywrLTpt5WwBrqf6xwTjQBzzedbJZKHMxNtubiNf1Ho2dd",
  "key16": "3GnynbYUppqPihFE2mJbPTSDUhwYrUDqM1UfEp9Ky3s5pJshTtx5NCeKdndtx3DMdRFigcQSgXhi3qMv1T3xjMDP",
  "key17": "44Eh4yVJ7sko58494dxxMj52TJxyTLmXxp1mH7RoeU32B4zpxezxky7pe4Y5G8ndZdq2LJVy9dLZXHPmuv8GS8to",
  "key18": "2DmfDptPHAvBSFScvSSvW53jMVujz9B36EK1q9rCqRTLAYu22AxPn7DRnj6QcAqyGQA5N1y4DUMt5dk95rqsMdZj",
  "key19": "uS1ujeiRQiQJ62ypgHsYm5MVWU8qe7Luj2nu4FdwUCctnqpAeN5CfvzLGV7U7SniFaa21DZndywuekyKbGwCvmR",
  "key20": "HBUs3JA5r8tfCZ8RLFfoLwFoDiVtoTANzwxVF6ffXARQd2fVuVq4nGRpSNPQRPjQvFLoHF7HpEeV7BnUwnyX1an",
  "key21": "3GG1BMzdiCNGgdPUn5XJGtPbHDiseVn5Pwu9b6zgUDPKvqJwomMw8nsaXwKqU6wD5phDcQ73fWrDSuuutNNozxag",
  "key22": "4UwzwJwNFkGp3f6NkzbAGmpB6gKioKK6XsifHCebGLnZ6FDPYbUJ6d6suafJdCqT9PnKfSPdSvNiLEhazWaygnHU",
  "key23": "3MatoAVdQ3uWKoFyYKCbBy4TTdervwyYrtCXsx6XP3jybmaNNSv9haX8niGaAePcpKMyH5PTuqDnEVvgvo6CDWoV",
  "key24": "3sRr6LoH7mnaGU6xpx4RSQDxhBhPo4shGnZ3sHwXxo9SEqvQb48zHshZFWaPAXi1fmu5NogSt8Ye9zxnkDdjrMTU",
  "key25": "5SR9zoEkGB53z6NhFMz39UWXFLY6DczJJjvebWZQ2mo7GdPVmzbF6m98HzBowZfVsvULxWsmGjXkFdvcKWRuvhQ",
  "key26": "cVWzzSPHXSovaTWDXMGDEPjEwiC7MMiyZwJuAEPMF5EoDBiWsCYR9WVWXcrDDJy6uFHJRoka5acLZNx1WUTk9MS",
  "key27": "UE5snzZLCnb22MeFqQi3N4gJuudbrGaCT1PAZQWPjg9psqkwLTkX8upPotZQNuRywgK5Jri852qkPofi5mvBWH7",
  "key28": "4TY8RsfG3S1x9ZLZNmxyepk7yKFuquxpWqoUDf7QaeW7Td987AssFbTTAMhPxgYKiivx6nR4zrdYLKoropCd8ueV",
  "key29": "winpYEQy4bfjZXM4FGspRTVEDtWs76zzQgE78EyMB4MPxoNpZJe8cN8DkSWppfGa5stf4ByBjHNaybKTSWAZyAq",
  "key30": "41Ppd7YajE6vcfocqCbLFj4Vv5HSNf1XqvVDajDt4fVyV6eChYfvNEYzRYUP3nrnV3Y55mVpnw1NcyvcgUJPmAvp",
  "key31": "3R2GUrNywCCXtbCaivNpB9HBfg1gLJ7RoCrgkkhWCsshqZSVVuW3cbypd4JuZaExBnZwXFrLXmN6tyt5PMhtNRC7",
  "key32": "yaHhJaX2FiFRNRaWcrufYsAi3UjBVULzNXoiR7HgztgyfHL6sTQSU1MAmwfqQDds9GxvtxWbei2nygeFbUxMLgY",
  "key33": "35kmsP3gEcTDFyXg8VamiwMD3KiMUUUgn2PR4TMAZCrbL9mLjDN74i4KwQfDSZuQtsKvrcHUDzs2gRvQ9HqthEV7",
  "key34": "53ZYPFxHpu46bke3kHK8QyK4E3tsxQqgMWJiu55mRYtTkq1LyQwMH7QcXQSQ3rK2xXcZr8chSMw4WcWuXUCw1tKz"
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
