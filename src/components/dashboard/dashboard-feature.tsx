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
    "376FAy72jufpBtarvkw1g3nUYhVEEmC1LbE2m3t2FqCXvBTuLsNjvBqtAMJ27GxDyxGXJBFJJ1gtqita44FfZTe3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e5JiqnYoWLDppTb9vJsg91XUf12UktdZimuvFTpsWoKQnf8E8s4RQLgJn3reE7QtobYLFBTtHJdXEsjZ2JncSBS",
  "key1": "MBtEv6hEbsshd4q2s5fTa1f3njyhZ8oBhdd8M9mzj9hHYoKHtUuqiSgqft9EECZZcXjdK6c4wUWQZQNQdqFeXFf",
  "key2": "5Yd9CorMztJK4kTBBvrEbihdzcwBdsT2XQgZv4zWrMvXMebKMdza7H8NgrRQkr3ebgpcJUchNAkYZbudfw47DWRf",
  "key3": "5ZAKVCqgsYr8b4ZMRwpPwPeKcXmyoWmH1SAV9KXo2e5nmmHnZBCQoFN7WceoxuVWBNHNw3YeU2ApU5BNvHFNtFqT",
  "key4": "5qrtSbH1Fm9TWkv91eU7acnFVWanQD1Q8WccyNieoM6wpW8eU5FRe7KFE861eMFaEhECzxNJuJdjbWZwBi5jWQWh",
  "key5": "5ZP72m766rFs3vJhKLZ6K4f9Z9tpiA1M5a8udJANPfoWpoj8ZhnnxNT3zHvTZZdgjMv4hDQz4ZpjTdXUx8kNzKq1",
  "key6": "3yKcTBYDtXs4CBfc9xFp5K6FM8SnuogZKCrnj5bFi4Dwdjt7JF4BEFmVSyWU8Mu26mTjkwWy1nr4buapHdDrXMz8",
  "key7": "2KJGYSZbKuJ89zncz8McWp1sDqNPUkGRLs2QzqU6GaLPp9Sk5Jb322JWv4xSpsnoiSTQLAb6hRccBrQfgL9C731P",
  "key8": "5tnBxrBG8574cy4qdnGZrj9dviQehpcPcQDsJsnTAqSyxh2piQ9tv2uMkSmocyy282QaXRHkgVomfuHxiKdwd35e",
  "key9": "j7db288kWazRc4MpdAn33LyqcYfn8Byuj1dn2fkZ53qBUbjZMejiRUPC6wbyF9NffaQMpBmyZisnjxD5a6i8Xuz",
  "key10": "5o7buknTK6rfh9XEMz31ctjNA4rNXcb3me5UdKMrZvmGMkTyjW1hcWh5pvAS6tKY2Rcunpk6UrBuFK4HM9cXqz2t",
  "key11": "2eysGvzjrE8zVYETf7H735jsRAJqHQjEC3e37xbxqSpEk42ThAhaDEsUYrU5PXuvqda4U1cxuUqwrzHu1fXcJTEE",
  "key12": "3j8kM47Pnx5NQwttVqz6JfGFtq1tDN72SLdeGKY2W7hTHjppSvqpzZGEccG6vAfX6KeV9nunJcb2HWHA1wfw5jmt",
  "key13": "4BkvGE7Fq2ezc7fsGFQu6NDcW2d5nW1shcDJwKTGmSKbdjH2pJmJbwvg1SPWuo3De7eAyUYSFV8yefMcMr3eYjRr",
  "key14": "311Y3cYc25E7yCTmsigmmbTJ2ZNydjcfbf4Wo1RGySsJoNH9Gei3Mf4E54MUcUg7UKyttotNf4Lb3ZtDmYdyyvz9",
  "key15": "VJ6dmuerAseeNQLg47dSP9nJLUxYPLt2i6gPiHp1Hobv68mcWqERndXaTj6uxYKJ2sZrDUgA9MYw6e3ZkeN6LXK",
  "key16": "3Ko9ZEByQZK67BGeR64FvvpPD9v1EqKjkuVAHBusYSrdZP7HawTj7ZbLRYp5wc2EPPdhGzjPASPiokv6poLEZmAu",
  "key17": "4HHqG9UQuktqudjRHp22m2TDWaJsysRYR8VccatinUUfT9TuZNnPfXpwTUBumsTx5nqfWxDRQT9BAuYwQEarrREY",
  "key18": "64KKxcefYfMtSCKVh4LnGHFBM28zudqfmVnZTXLg3Nxb3PeAcwqWLcT5QCiH5Y4N7HQtURgBiL6R8zvWTYB7NE4j",
  "key19": "5A19KskeEVSNokJMmwXdNY8aMm7MPW1f3gJnZRmUZFqX6sHzcFnACKCaRYWMg7em5EaCWszMcVoM9JZ7QWwEY4GQ",
  "key20": "iNM3rtUaw5Qj8bAjEd9oG3LBmqfdJ4LGSo7MV3vfjtbhibJcTKsqoeaeHGsoKm5V7dg45hGA56TQvPuwzkPujTU",
  "key21": "3rJU9DHJLJrgkphnjkbTVKksSmTHwd4dXtKvSa6e66mo9ooF2Psi4nu6FvKvGk54yoVJjuG16AW9gJEp6xWVsEeS",
  "key22": "2i3d5fj4QFeyvLrb1X8cqdUV1L8z8LvvY5TFJuYf4r8N74PvEVR925A3oik6KtqCng5HM7YQUFmsatQaTtR2NNkN",
  "key23": "2GnrtyR8SLshjSAsD23xRpXSBQg3co1PbfA3N6FWXW57sj8UW5neUdFNZuN4f1Pr96qJHpaAMiTadcZaNzjx8qir",
  "key24": "2ukkrHkQsKx4AR5L7zHxQzbWGG1wxMRzYirZAMSQjSvLdXWsXEpUXNRiJjiPojoDrHMJzS5QBGvP749Ad1DKw9cN",
  "key25": "2nG9W6Mr8uyWeGDWmHT2kvh6NbzncpupM8g8iTDZyjNonrZoT168rypMzWxmBw1VdxZMjqTsiMT9X6rqY52q1GDK",
  "key26": "3fXWJQR29iVAh5gczLWfMRpakmodKY1rawi4sUAJ63JgzSBKxw45jUPHYDeJUjNGjGYDv9UypxAEm7BkX85ish8A",
  "key27": "5WpCkiwsZdiFV3hCX36z633JHdCFbvxMWDg2rX24wfkNTVmXxtAZSh7Djhnqu3YwHDp56DfVTkoQ4xR9vGnDKhRK",
  "key28": "63y2QoaA9gdbsLdVzrC2DNvhJQ1L9hRfoFsHxDSJd4TCmW48GpMDja8vWrRFirznGGsHZY6ar1gVVzwrgsRbrVa1",
  "key29": "2Nfpepu46GkF3TQtj5bZWxCXcFGmnyoPPKGewr1s5UggQiLtz5huQQqGy46q2GEKuD9uW1zesZPERrYNHLqENZGw",
  "key30": "2C1vtep6hBVVBrNgQUfD77T5YQjfYxTCkXuK5TEeScaJqSJnXDKNQFMZVj3bh2WW8kwGNP4PbG5pZRZ5Y7RN9cRT",
  "key31": "3t6o55BLiiNtGk8mbwnpZbzqU37Zr2SVBNvsUrm5vxqSaG2detooXH2rpyUrseV7xJRcXGtUZyYghWRyfuySvtps",
  "key32": "3N5vYxvQgcyK3TuaULtFzmXpneJT326h4iT5gyqy8a11AXCjcC4toHp2AuTPX31gPyhCTNjvhjgdFhQBNxfcvLNC",
  "key33": "2ScsPW398B9vr69B8hfFsehuYuUjAdoBasEykeQjsPudo1SFWgEXgx742wZakFudLny8CFBNFKbtQD9ibhYRkmzA",
  "key34": "39qcgCR633AgqfCezeXKDLQsxAHNd9V7UfQ9o19QhnnSoyei68H5zJVUASiBMi4exmsF7nTEF94sUdnbEoFCeJa2",
  "key35": "2yFNXTrLHL8Ex9A9iKAZXrzxUBtSBVDUnY7Emt4tMXVT5JdksGJLEubjeBxpKwFzQSeMMCkDDyAmcP7qXVwEAssP",
  "key36": "hrDXb31Z95KkgZTsfhnLrjiwXJr1JFHkjXYAYJHsSEU2vbGuhZzrZjpFGQMiSh4rZRLcR14dYAbAiPr4oC1w6o4",
  "key37": "4R1oH3WTqnyNw7pSVTdWSxfjxhudisi5zWhhKvRJqRqXw8PYm6k296hRVpnsrE962L8SkvVJ8BiRUGyojQoh5tdH",
  "key38": "4WSwNbicaAYqt3ytRCaHSemrgTL2mYtjZw28tz4YRMofCRw9L8maC53fH5npwGvmpG1htGACGUo4VhDKbBQTc5Ay",
  "key39": "63r5nywe5LA7HzwdZzCjKrFFgyReuAfcE6W2z1Txc6aq2stC7nTRTrryqpmoxD7L7pYAdXmXg4v3asnDQZh3f15J",
  "key40": "kZactyui1cpbTKxM2E9EiCzADFDB1WoWB5jZgsRRBgBuwkCpkQBfN5GYDp7CiSmxPouR6cmx1Jg7x4UBVphSF5d",
  "key41": "4hYYC739Gq3iipNAbzN1fsjy41T39R8er3o83qSNDJpwRSa66GpgdLFWKAveyKzsSSmSqD6rVycczXjb5tg1nmzc",
  "key42": "xhGn6YrSHm34vTzziEetQN2DTfNuUAbV3WvqueFhKgLjz9jCr6BP6oxcBjzJjo8fLWWmajp3scRxo1gqAvx8Ngf",
  "key43": "2k56ESahj68ZF9vmT6id7T9ZRhgi8NjzKHGvmARrqgELBtHa2kSenURmCWvwQawrCyZ1MFqfSYuc14F1GY4wF1Ez"
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
