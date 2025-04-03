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
    "4ubY36AVNhk8icChwTakJL24QzFLbUqTvFVvEct7UbmmfPn94qj5DX5nhvoxf1hNW4GwgjXkxN8RvJtUwewxrLJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KmxJLAKwJUsDJfqC38vrr5kuyG6J4GSgB242RcstTEqgptuMhn1eT2QTGiaicLxST8PFRrYCbtRQkybbq5mfRpV",
  "key1": "4X2XT1bw1Cz2sATiirZBZ9MTcBgbenGXe5ArZjjdKKPdziyuaq8B5eoU4S7TR7hCL1DRQdoLNdczzUoirjDoEK94",
  "key2": "4fptE3ZrXymbeurABNt9ppXrQDg4dGT9P3BwVDj5VULqSYtV5VhvqrzBqiGErVgMqCEoTXZmHQnxRT9Zm4FRv7cg",
  "key3": "x2q6ZLMTZEZGHYW2SPZmqwYrLjQVK5ekfmpYSrk2QMf196SfpKEb8MD1dCSFAZvYhYGyxUXY2WmetrquK8cnyL7",
  "key4": "5m5Z87j2rATvpRRfmFcu2VNMV9FBTYrGxf8EXx4MbEMiUKq3BeLK3jnDjeWizr2fXrf5h25f6PzMWYgs1FDVHUZb",
  "key5": "4CEcsCfWQAxz2aLS3eWAtTZReHCWHJgo6xjaE8hNMf4suyrffPeAZon3NZFmAuQ1qo13pcK9PYfM4tcYSRMAnrGb",
  "key6": "3ETdLzrU4uJ2Dp2kdja2RStwtrBhJL5Hw5Go3mhe1B9ES98qGrsQsxQWuhTYwu7GbhtHsSAbEPcMRsXv3ELg9VK",
  "key7": "4oQfeEZfiR7j4Vu3ApxLLvgKdtYB4ajcRTR4vp3RhoUxNADNv7iT4DksBvJ5BBFTdRLBkMHNEbbsuzTqcUaMwQhF",
  "key8": "2EApmBTFTpD632oby6MkpW2ydMMwwNvhrmNd3VMQkATpRABQGVXBoPVTGeNcC9GWBgM2rLLLHq2p7duKUXYjNm4x",
  "key9": "YZhhGdFjFkyJiuBNpZV1K2KxWt2UK24DbrtCppBQn46kR81YxfZmgF4WaLKyVbuRqhsqdMNiZNNn2kLmizZE616",
  "key10": "4JDkDmttLmTYJdsDkYzvBhQdWdd6uEpKDB2ZvTYC7e8C9jdiGmWr5yq4QZS5JRcMz3TKau7f9mzL6SeSZ1jbqkCk",
  "key11": "3wKAYAcaJpopJYR3Nf3DJZahXyjFSVFRJAJ1FtkDyKaJwHKY1595eZeb3j1jFAU2LCfVAou4JzC39xDuHkb8qvVo",
  "key12": "SitNqWTJ98iVRHSnwHB1z8eejFaRMM9dZZBBLtR9amWVyfCvxpuMDBbZbQxF66WReR6Fd93jvPd985o9cARvYxQ",
  "key13": "5nYLj2UBwGnvSjqSbjojD1ck9FedcKkFaWELWbuke87zXwvv3p6oKAzj4ZQEAqr8FtdUkb5FgGmejUAmuXCUbvt7",
  "key14": "5XoEVrgYeQzcddT9m24YvBGXBVVhadPVLSv2GKRfzWh5Wob7jqPJQsGMNqfQP38d4oHRsvjHAkH2LMKJAJzNGVCW",
  "key15": "26zgq2MgnZ5dQubz1vqUigenFD15EpAHyakiH1DNSb98cyazxgUr83AXVP3NJHmu6uA1xnznLmDCrnftcT5fGVmW",
  "key16": "5VaSnaVRT7T9z7gXbsU9nAnMmD3HgceHbw9nUeup2TbKSubgR9oJhrWq6uf2u4euaNaerd1M1kWt1zGHtyuez2wD",
  "key17": "3uhfdTQPLwcRKxoZsunWs2yCVBy2TW3NfR9bzp1akWq6SphTywSDuhD8yS23ipFu31veTw4r87KNqnY28UYhngLi",
  "key18": "DPn5i4814e1k84qefSmWV1jFhxE8qB1XjbWua2s3QMjanJEHWDwtMS9yQtjdogr58EKEaAABuQhijG4QPHv7qoT",
  "key19": "2DTfhZbazn9dPJsTerXB56GRT5pdn19Zw4w3n4o7hDhWJNXPsirP19PTo6XPKqiVaJaBTV5Wm2gTowNpYhscv4TM",
  "key20": "37qKebTU8noKDKDG3uMLbekwnEZDxZyqZiGpjLSBPpSjnwTRDhjPGLGQVHYXWQmAzh2iLgxTaAvK3XDhXzEL9H9B",
  "key21": "MFpwy2dYyQDxRWsUdjYQhByWUeaZueguZmLjkXuUT8ui7XnXWGFx3CXuZ2V6caBRiudbm7rEcAfKCGoQJRrCFGA",
  "key22": "3QNcrSTQ3Yq71gvbh86CDYgaw82o9mqRokWzBDVe6zMstETFdQTHfgk6UvdGf9KtLuK57W2XwtJA2paijZF5XU3U",
  "key23": "4V4SdapQjUTWHm4cmBhnWsvfcvLfgm7W1d7JiUTGZVpDhUNdoXb6tnu5SQ7oDGHM5h6ddKHzRFdPmWe9JQgHXJCB",
  "key24": "4aAaRJAUQLptzd3PtZdL9JaRUBmPH38CRbfCCBdLBkryW9PEPGZcdKiJpzDQcJkZCJQHyP5j7gCwaWirACLyPQMi",
  "key25": "5iDBSc9HcFDt2ZYS3pkZzagxeg1YCucsvJHbh6LqqvHv6eukMjEeUGkonpCQw1RKVa9sQeeayPV1uPTQeg2r2My5",
  "key26": "3FszWEggriEtcFrSG4tUiRroyHAdt66HrJ7KcC8xxRSQqAEbv8f4JbH8PzTbgku3UhA8adDncfv6d3J1fQFSJQea",
  "key27": "HznowxboLugZ4bhtPH4ZNA4wbPfG9j1dy1mC6DQu1kPYPbbNaEZntPYL1LEPKRLuAy7xNQdXxsLAbHbgBy12F24",
  "key28": "4vKEYXT4SkiZ4SWDEjX5KBLm3xi5BaWeSemuRNnKAxQj6LnYQJEu3oedBTLZwCD5KT3yWMFnWRvDrDpUaTGQpAJj",
  "key29": "3aHsmA4QnJR2pZ8xySnHCytvddLbrmFSdfvS1bng78u3TgJLrmDZPWSNc4Px6vs5i16jU3GzNwoyQ3q4QLcMg3SC",
  "key30": "56ks4YoQCvuu25RdR3ZjbaQvT7XkzQsA7813s54GJTLJrLLaGfwooLXFPxMc24xLHw1jZteMecCcrZsaNq5sGNBc",
  "key31": "5tk4ej69SGZn98SkG1oCpZZs9w3Hgup9A45oHmpfzbK7yfzyih75kgm6ScYo3fAcXQDe9kRCvdiVKauVZHdCLFv",
  "key32": "rqSdeCvWpHSKFfZWWNzZCScZHxvxA9dHn3goULoA5mgofyrfwk3VP9FWtm1acEPLjeg1sbM9zbNLxWdwwFmMoT3",
  "key33": "2EXQxP252vkEXsKWFcJ8m5cmnmKbiYqQozLJ2BRqcpjEcWbJG7J15UT7ZaUwvUfbEobqi1tauGo7YyFeEp57aYNx",
  "key34": "3uN2KyVy7UHE2c8k8ei9nG68mDsvMGU9QQf87nKp3wCY2FXPA8xLTvpZ8aigzoYLXBtyY9MmDCJyT9iRs5CUfTor"
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
