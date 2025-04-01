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
    "2iYrsc7nyuNykh3rMjK685n1zBtsnzChG64kp1CqD1Upz4x8gViSUfB3UrP5chowcpGs8yMuSXpUkwbfZJVBi6Z4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BJLao5vb3hEjZFMVUFx9yCwQcxud8fuyVGtTMJzhfWsNfJ8rPqSCgTSXfLNSNFqfktteMNoEDKCdqxnChha8p64",
  "key1": "s3q2wb6qQ1XKQsBKe6qWPKSMbricjyJVZQSff3zw4bEnFU2hgHXhBNU97YgCLuRagArGNkVMj32tX5V8akSRCie",
  "key2": "5e5Jmu7sFdZuXKD8pyjaYfvyaYofWjoecZKDun4Rt83ZrdWiK2kQy4sFMTZx2N4mmdsv25G5Kf7w3w3KqRnUoWZS",
  "key3": "3RTFmo6mSM5CXyW8RfC6nV9WzBa7Z8qyZcL82ourg7tQEfrLsiEvszKVrHMS3X3rBTAXLy5xAEKoxeuFCa5jgYZT",
  "key4": "3WvZuuwt6dfNiFxogZYKjNf2JTpUwxVRaEqqmMdosSnLir4pQzqdg4CWf7ZdsYYxEC7nvuRbJVs2PTaYfTeLxCyN",
  "key5": "47frD8tKjcs3j4om7tbD7bjc5rUFPpnK64W8FqB1133NE76DjZrhq8kaPTVQEosLQZwXRM1n3pmmYiYk4tBdPW57",
  "key6": "4ficnZbw3s5rzNbKWZxeRP7aEhaFsXeaVU1bAka5apNy4rndGgGdunPLei1jA7TfH9LLgRL4MG4KcJYUCrgn9JUN",
  "key7": "5NMBfZk6gPEShzkaWerV7E6rcquHaEAciLkHQ7vwFDYzvz4dzp7ZBqYRks5dk29oLiotkzvSnqvVxBYF4cTi8gZS",
  "key8": "2qtkDDPCzLEDbcLPdUprTyTQn8dn4jCQuE1WuEeVCfkjp33NWdK6nY6ngcG5fqnW5723h9M845EX8RwkwB9SqYe8",
  "key9": "SiVpxnstSMbdE2Xrs3s9UdciF9wrmgF4BDM3w4otiZvwntuXPVYJk5V2UHLFo8RK4NgT1TCMXrNvEURYRLXpVpe",
  "key10": "2RMQpWUCGgQCThrTUUxNWh6UX2uNHdsszu2SVz1rfx6nywZVZYm7UxTeQeCWWpRUvyTgaTaZg3XgBTeKhBB9zkLE",
  "key11": "4xMXZRRxqyRB7bLNgvDQSunPkPYzT9u2pQqwwBnS6JEah5JxXcBR2rR8WnZNKiXZWzwjtW6gKoSXrk8jHRfidnCF",
  "key12": "3SmmSgUWfLFvtAYtLgnhwoCdTSEHaZ6EeCyKzBpAfcjasckoPEF4jrqx5z2BFUtbt8c24aLRFhjDTrMdK56eGhkf",
  "key13": "4vcAKtwKeYUt5Dmk9iCqjnYMbyWhuUyeX9VzafXjXTVTPFP1t5xRdrNyKCjdrqBsBHXwhwB4zm6jAcQaauYUf78n",
  "key14": "id3AdovP8rSttzxowkgsAijsW8RpFQ9LQx9EsxpNXTkncgCb1RnpSY2b6hLENfPRPZcdS2GRTXrmqsMsy5rZR8k",
  "key15": "x7d7VGdFtdk232tGe61NsoZSxFQAkVjWvfTdphbGVy8LdeuNJAfwNqZBNg3avtLFsVELhbnGP35qUGVtDvkMruj",
  "key16": "5xj6oJ7zDvJ4t2qPYcRoAVhCWzANgXDn3yH1m7rfFssRTvDQUE6KHZe6TjXCpiXpMgqP999s917pzdHZTkR4zAFt",
  "key17": "48eBMvwhKuNtko4uSShSnFSHDq2HwWvhsSbuTgXBCeZoC4wyvep1vG4MG2ritikGTjC2fEjKJtZ2QmiBgij11RzY",
  "key18": "rSVKqgRpjHp2ymQ3bWyF8DKwvt5U6jKrFXbiexHAtF9vRto4D795WUbAJBt4YCMmfpmuKPxnFG4aYSAcquDkZrB",
  "key19": "5zcucY2RzSqFhPY4eRGJuiUJBonvTbRQ5Uo9ZhnrcQP9EVZ4MVLjJu54QHDwZnbGhPNcpSCaZUZCzTsfs2MSUxaK",
  "key20": "4bXaQPvBKrACdNkGTCJQfVfFSHSYToozkbJ6aLimqCq3DEb1nGNeBugcPdhtkUG1MQoohgSzD11psLdrC2CiN7jD",
  "key21": "3PaouaSNJWnzELkBxnRavGTXV8tyz2JfQWPRAoDSu1aHq517jdKBpdngMEvgkMZnZ6DyT6rV9eH6XfjarAU98xfk",
  "key22": "5f2DGF8AevQK9tx8o6MLqU7karoP7xwuzMJeTTrNCBwToZMg9ZptsHNESgYFFCRZNxqCRQ3KJY2KK4SimDGuiUzb",
  "key23": "5ZbbkSGyRJdRKp7Kq7LT5pGw12fuQsw2XNCfvwZUGr28qhEhzZ1ESQGhjXrrQBvVreb6Ype8rjkKetUmucRdtUHG",
  "key24": "21DDv9eGRbuL7YCbEiD1QvRQ9yJhxAb4XeHSf6uoDhJqBmp3QmE1aHsHqBkQ1u3JuaNUDrjBCpJDG6oEeUGGLszN",
  "key25": "5PL9yVrVQumAvNCU54o61QM3JXANBMcroMHCvtdvJVdejL2GKEdFupQzYtBDtXso65ubTquZ1Fes5GQCWzEHk8nz",
  "key26": "2DJdXc77fubCSrReF3yRixyBBoNHLXbm3ccNJGTTDFDVrpe2JqTfQsS4zQVYDDBApR2PtNG4jBncSeTe5udzmG2a",
  "key27": "5nnvmSoNWewnXiJGL7s1gt1VZHHVrVk29nJedRU4v1hNwaqYBPhXrBvUUaCgSWktshXM9bZHzkpuNSohKrT27uQP",
  "key28": "EFBpS97BhL4koSBdAzX5sXvcv9zUMN3PqXSR6SVGKLSpY8Uj858dWkY81oeTixKtWepv4KxNk6JmzfRVkmDr2QG",
  "key29": "671A8HArW8NtHfgwAgzN752JtpounU1fwp1mJzh8DFKuSohpNauECSt8KY1hTYCRgDqpQejppZfT9kcQZzimE7c",
  "key30": "2yCLde43MZB26yfpUskHLcqCzyRz6KiRNN8nvo5v9DcG1seQXCB3GWFNJggSGeTQ1ibnCunBUPr8HzLDG4Jb6Vjk",
  "key31": "5zwxq82HxwVeF4YxNhahgoBycfHE9LGxaA4Zi1XzExDTmvthBHhLtENPoKd5juzpKezWxwYtLuQ9aC2ZKApA9itP",
  "key32": "5VdAzz7us4MDRCgpNi4BhrnZgakXhpf2Hy2cK9bVfqPNXomQqxqU3vhi8sPu74EGrEw2KL84cjGrWf692CUszCK6",
  "key33": "2NT4qGJwwZpjxhacB3P4kyarTFPSXYAd5JAQqZ7GNHzFZHVDv8rLWjPz98H7HNtGLxBQRLyifa4JmHzfrkRTAWkL"
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
