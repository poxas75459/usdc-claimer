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
    "5DbGsjJ2isbU7nMLsYmQV2cW65M5gdqiV5CFccq1ncoB2sbj4qWnSqpzN3mAU1QxNwKnxYvd64cULc5NqDKiyJAf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bXkwRJQbXazJ4xhfWrR1rSE6sgEREYCxTMk1EKRUpzwy2sgKa4vJuDkDdM2H1nEVytgC29oBaiSB2wEgLoyPM9E",
  "key1": "4qteKrCv8ZCsoVLE3rLYG6BWdYc5iJnT8qoqS58p9vvE8oxiaUSKsMq9DL9S2FkPRinh13FS3fRUDy6F4Jfvx74e",
  "key2": "2oTRbwSjTv55H8eh8seUCyMfAw4ytHT2FSXQfkrvuFFRrVDpC2KYUxmxtCmMRwkPhVuRZiNBz8GCP8gcZyyF1MTJ",
  "key3": "41qdWfYXRFuZ7KTryzJ39K3d1vxdASqDH6QBR2RHm7P1dLgePX37CtzeuKLvkY6whiSUHhb5vea563tGGEmMWcfT",
  "key4": "yDDkPepQchRB1MYCgJPRSRexxPqpMMYCNPxeVN4d7VVrWY2ajjcyw9zaCkw8umeEYbPNo85KwEpyqZ1uJ4zEHSF",
  "key5": "2Q9wPqeY8ndsvSUiKk2FoJBWsy3KMGSYwiijyaTr8muU5k9DieSkYuBtoJo231TcdFXQTLYMYfDUufG3Z7sc55yt",
  "key6": "29Q3VeGeJAt2cDcFaj5p86K97gXa5exAmbjuet5epZQ2mgXX66XewNEEi7xzPRcBcbpF3ehcRcTKWUo5HUgPpsTZ",
  "key7": "5HK8DyLsffHZtm3c5vczkv7ErvRFHC3qdLYyNxicJHoEZeN3t2mgXRxHsq8x4BZmdu2zPGvZNwmLypdXNk97N61C",
  "key8": "4ksSY51ujyyRRs59egjrBY9FMW6L5bFuFbAdfhp7TLNEo79Sx1Gkb6rU8nvsn2zLi2gqjMQqGtJxNzpJgb8PgHG",
  "key9": "3Vs7A7cXQsvDbCpg1iyY7Zz86QDyGwTg5p53DbRrDB347risSFqrEsyuo3zdnKWDv9s1zCb3ahNswPbCZfbFwGEa",
  "key10": "4P5f3bmcRcvgTtUAHcYeXJDJUgzboDr8A3BAN1AE4E1HNfkoFmwAbEjgA9UEVZrYEoTS7nYywQRR7puUZYMsMGmC",
  "key11": "4fqckHLrLtuDv7oAsntbB218SDMGUPNMt2F9w5Lk8Q8J4DGqpsM9GJHDbE5KgmaB8Hs5HfZf5R2wTjAwBAVjHL6U",
  "key12": "3pym6pbb2KqXxfoMufqacVwbhWj9HdhFvt9eGoRgrdecUmTpPMrJgEnkutVqfY215ve9C2F7kbC3bdNayL38K5Um",
  "key13": "5oXXb8MCp2Cgk8JZcV9Ek3meEKkupxKt811925W241gSzb8Ls4FF4MWKF648N5ZF5mJhGBRonZscAaiEkgndCCGt",
  "key14": "2JEPpJDRJtSCK6LrCTf5cFwiT6yuFdcfbBtUuryXnS4FYPGtp6ABznq1c8XSvHJVT68ptiZqCVkeFFsSB7KHZa6o",
  "key15": "5gVLGFsPkRDS6Gq8UQS6ERCK6JF58mbdHtgkAxrqd55c3LoVphQyPiVdy4Kwf24oaGe8EPseAYK1J9W6GzrCG4av",
  "key16": "tMujUVVzm9f8WQdnN5BLcCJ1PQVxy3RYW8q3SB3UY7bvgr1C8QvxACdUDtvzzUJfxNJVFWD33akoBVAwFi5geiq",
  "key17": "fd5Epuzo218bTsUC7YznFrBNQon2Z3mNtgEDK45HC3meGhfReFRybBHsCsS8mQJw4WJ9H5EoxqGgKhwmLUAFA4U",
  "key18": "3YZnZPj9wL8Q1S3D6AB7TfD2TTV6YoMuyEYUFmK9ZrZJViHaxFjNJ7jCGxiuH1ZWfy8cFR3ngDsxF1zCx98sPTvC",
  "key19": "4jdZtHDpQ4u9bwjVv4v9kVvHcxJUYAD8SqQgveDWH5rCF13vx7XcopnuT3efcb3PAaFmQNMiwWVKwbWJfTaz8yNx",
  "key20": "5FVueBt7kK8aEMEZh7i22Dn3HeaR3nkaAfrME4KRry4UJ2yLdETT4XtbQmrBmRGgcMdctcFov7ng5Gt2kAh6G7xa",
  "key21": "5ompsFaTUN8ALTjzuVDnzdEy8X4eQdE3dbHBEC27RC4X5shQZ6rdrincBwpvNGvi3BKWA72QYdHpJRkhRe911nMj",
  "key22": "3nHKfTZchzykD65YZj1fBbdfN9K4mnNEENZNasjAWCWnQHwDTLV6HxpVJxtDScfSCGRW46K8UAUSpfJWf598BsHo",
  "key23": "Jvx9CtMfkPR2MZM75CYSAF5UHFE3134R9v7UX1BVfKKXYnuLa3yZtevUZfPNpqZENY1m5M5kstV39wye1dv6KAz",
  "key24": "4jSodybwxnaSu2bPBpCzdgQY8EabwqK1queJUhfKS382AFKuycayKHtw7TAqD5vLF53gtUGoEJuM34Nrz4M3RMa3",
  "key25": "rVG6WtBGQ7tTbJGbS9bhocFwDMJp6pb916UkZjMSg2DT4zYeoDjFKrJzZR9WFaJCn3bHd2Va3VkSAZx4BAqXzSn",
  "key26": "4SHgj7cTgkm69sWUwBsbbWxmx3iDcne6xRarGQzU8HMcLcki48CBgZ7rFAeNZc3NsHKwdrZGyjvot9CNB1x5gUj5",
  "key27": "5pgtptf3EdHQZpgeYGbeu3YtY71uaAM5twJDkegHiCENPSKp5fsgYZ9FPXmXMFPEXAJCdr8UCz6KqR3KkN6yMaPM",
  "key28": "3SwE9LyYAhNeCvoFWyDUxc1S4aLM7E5auHKJpxuUBY2MgiUEKjTXU2wNdLMrGgHWXdkse3ig7z77oQ1BSfbC4Sow",
  "key29": "2oC2Ntq5fgww1QuL6CdT2EnF8h8sdFYH8a5RPEB52idni1Tj5Vat9zTL1kJdFax6SSCFu6CrJniyd1qyvLwWMSMo",
  "key30": "5HXjd8AxzoHrmDXGa4F9sRoT6izn8ADkVDDvbAhqwKE8o9RDKitPX8gg3Re4H14Z94y3SbH7RzLwfcjkCtrgKiMp",
  "key31": "55qc7XrqBQ5GoTbmPF23qy95QRoYc9MnEMYaACQ4AzsrbU5kM1sbZF4GdYFX3tWf1GPUBpwiEGYb3fzWSS6GJJWz",
  "key32": "SXg26NBPZFP2qxRcitUePovBW7Q3omJCA1m2WncbW1zST9SVwfXZJtCsDsaqxrUdEEMqaXpWWPFbhNuMsRnpKAV",
  "key33": "3tUTgsCWeuUqU5u5ngaAYVW67YNGCKWcf6nuAF5HcqHtnj7TtmgLqR4txBBKJGMx3ZVHj6jmGcoMeGZSMJz34WYX",
  "key34": "2yXGyDwMGqJPJpFLoTRjgA7gjiG3Do5n11D9GbjEpcEDqqLErTtqjHzLkm6c2ZHWgsu7HZViFSMrYf27CyAFbxo2",
  "key35": "5ygtrE6axGQMLJq5nmgRcs5jwz5rHspAr8rDGRGArxJwCYPEc8mV8sn5FixqUerUCUxoKT8Rg8HX4cnNWJYWjRxn",
  "key36": "3WaNp6nnvH5Zf9Lnn6yaD3Y41p2CeqSqV9AcXEm3mPpF9DYkjiXfqDequaAz7gDCqpovEv8neDRJSyeU4VEGMRhN",
  "key37": "35z6GD77CAUUBpgSbGehXFjfnifYPhBrnqtyZn4LHAGYKCrfYZmGJou2ytJdqKn99Jv8eudxXjPkK8sTagYG1xC1",
  "key38": "2i9EnsiLEmsjYTPzuYwaXiyydZmu9i9ou9fLZ1CT3TEm66bQLtgNkS6qfzQKvxyjtDJeDqY429DtDB2xwycgQeem",
  "key39": "3To6HkX6SFMvrQz7tjkZ4vPK9RNxUSgk1xGoADJnFpFgPjbNZyvmiwPLp3SBFAeYtfproZ5vKz7sRhjRC2Trndav",
  "key40": "3kSkLjf1yXqS54AWZdWNrZxrx7PLFtM9sHT4z2VtDnoXeaQzS6LpibYpMKo18YzSzVQCMYcZphLB6ehHtS9u7son"
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
