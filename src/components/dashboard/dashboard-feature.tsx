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
    "3kupHPnVyVHkwbERvWV1n1VmnvyPVYRyCPYv6odKog6TWYvSb6m4cMzozwXkAjgycazDgaxMTsuA8Z5n2bMDFigc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29NhCXCrDLFVQeegoasBY2EW15kKvbfySF7uQQ3yXN7oYug1w8VePQJYSP93HfWTxDkQZvSuaRACSgXq7f7Aq95U",
  "key1": "2sNod6YPzGc8e7dxPThWN3T4TbRHmrTJj1Xgkuv1TCyNocstR4sXKjTVZ61Qe22NXHq2oCFFpvbQXFkr9Juda6UB",
  "key2": "57Kq96EF9VbPAuwceqjiYd9gnCCoKmYVBqRxr8D7fDefAbXWBUFawF1Lz9npQQn6mFUxTzXJVpvbtYydp89KdnZy",
  "key3": "AwsS7PkxQPXzrFgwu37v63EvPv8GrbyJxCx2oMk3QnUQ3gEm7oy4Kn1Y7t9gNTvpdB4BEWeUyRBUtE2qbYcumnT",
  "key4": "45yBR2sa2ZrrZcAZDAPm5WSSU2aBstPQGsWRLLPHnbrp6V332KrE9oGF9jWB57euQiwsEKrFBgYFCvBXnStMBXbV",
  "key5": "XCXHYsdbj4JKdkmdiqXpJ81tpcwu1jsLjJR4RzQZZzvBXyMw9sgPLD7pXVYsCnho82dtGvzWXgPZnbu8bFmW2Mi",
  "key6": "2DYzRFpqUdZnv3YbFYzSSWiJkgeaHMgyFudEsywrcT3RDBddUoigm3yyhzCTrW2tSdaaDpQG1Rmbk5FEHpJ7y5WT",
  "key7": "APGPhBqzkHXE7sfuopXErdiE5E7kV5B6fe2y3VmZG6WtdUPMgKh5iEVrJfvwPX76kHuQqgNhxkyajFucD6tRorL",
  "key8": "5zveEnnw23LZgRb9GeWY2PgNYjZVMJ5b2KCzKUSdCGCMGjjg4o26YiWLDJBQm68diEfkT8om5k7cDS34skVRicnk",
  "key9": "4dL8EsS3gNjjubAoqqDz3NMTTjPsQQhf9GWvw6UAqEoDaaQn5PYEVGTD73ADWTjkWU7ZZJdumZ3ueedFSCvKh2VU",
  "key10": "4g3x4dqKsDqeageJ7ZTPYgPUhBwCqZLrJF5Pk9tNykE5pDSDwwZKXWJnYbAobst9Lne8xtcpA2v3QMtaqAnJpmhe",
  "key11": "59QpxFMXrut7mVhmmVyXMsoRvuuM3G4cvQaNRrusEYxPPm95347LwLhjFbkiuVsPeoRCsRiDpGdf3QXmsE7Wf39a",
  "key12": "2t9xndgrJFirAkFiBN98ysLR4VcF6rND4SSu4knU7QusnDEHCAyJ5aioj13Vd5MbWSsP4P3oZw6icenpbFXRPg2A",
  "key13": "5v1t24mHLfU8m27AokAZm2FB32xsNbuLmpLE2jPxfw9xRwPwmQMYMao1dN8hL4tfdfN8k5T7CkW1t2AfNThwTnFk",
  "key14": "63zhKT1eqzSDD8J91VZaAtHsdFM3SrPwhcU5VZNoqQMF88sbyBaiNrRd8dBpQxyFXqvXjq3yBfk7Sge4Lm9NyT1D",
  "key15": "42ctXuewpDeA97hvsEVQxwz9VZ5nz2d7PM9QyeYaDYSfRtETJuqDm1w8q5gdn125rPE5va1M6yhH7WRtnxjpBf4e",
  "key16": "Ziw1GJEGnARbCM7cvhvTCrUNnKpD1Ef6qTWtGqy1HyvLtndRYiSwMRcK7Nah6VRN6xhumaLm5MTqjaouNzQA4bt",
  "key17": "va2QSvB41FzdF3p9MaWC8Hy4EJMJXipTMmc7pTFyw4MsuSdHapPnJAZKT65EwAg8bVRR616TR4NZiiMEHq63yte",
  "key18": "29XF3Nc1Z7bySa1AgVQH4MmUAzxKLP9xCiHVxM8cGW6yjqscAZMmmYmWFL5LQShkYhSx1jN2esXZNPZ4F9yBmPpq",
  "key19": "3qrVcjHE4q2GRv3Tqr7YYg2BvwRBHAR3uqfBzrHU4xpP2gCjxwEZqwn7LDcBRMFjd25oibMUSdvy8UpRYJi3rHzo",
  "key20": "2vj1yTrgvE1haXWwiXsyZa2CohYc1D7tBkymCcwhVTJHTdaB8zfeB3AhEJL9knUmEkQUJh6rGMZ2yhRgUfdmKZo3",
  "key21": "3nRmSznMUPLPGAQpPeQip2YGqRwGVBrWqY4A4rJv4j9M59zMvwpWPc5ELsvxbhyoifBTmCg1wnySXrQB22cnfbQn",
  "key22": "435RS1Hw2WUhQKYUkEd7Tnj9JzpGztPpc1DV1ryGBe96CGnvpDwksxRvdLz75ZbUjX4k8jRZkmzzsZrgpkX7rmea",
  "key23": "488VhoQBiqxTCm5AKuoLDb4mEGscyXDwuv6cVpBueuuAUjQAfr2CvB4LDgyiyXrWWHEg64AmgGuSBv4KCwcetnmy",
  "key24": "fmn5YadFg6XSVPK1zSF4KgXhpDAFeRJj7voAc9rEiXDxVd7gJFoghLC4wE82oedgfnSfRR6nbKG9trXT4ytLLih",
  "key25": "614juTDpSCpHfvX4YBVcixxB5Byb6ivLESJ8kUKnC6ZcEPeQJsho3Xa8G7ifa1w4L46UoE6ds1MSoeTNqMR9oyEY",
  "key26": "3aQQadixpPsSYP2AaxfDfvD81jCW9MkoodFhrLZiQmAZukymRnmJBkTCJSaH9gGTiQTraWNYQyTESYyaQv79s6ra",
  "key27": "uzsz8Grqpy3JVd29tNbgHYdAWgbRA41oedkiY2AJx6Fzv1cvBgGgEFLNySnrKLYVwDbt9RAxSH4Gyb8EtXvoyUA",
  "key28": "3H2iTQNABcYQoEJCrc6MisNuoFdnovVye1f8136rzXmkWYBsYzxciBUxE9fsNzLehWTVxHj3FZBB14hfELMJh31X",
  "key29": "36uW8UmGdPFeNgXtTwbLxRso4cY4ZEdZAhMmT8t5CY6oPeE2iddqxJCBZWPrbcjeR5gmPYEBYMLWhDiCZr9Wwj9j",
  "key30": "5oS3k86QRYev3ooVALb5M2P8qc2FsgtJwpNDBZ1H9WAHxcoVvH775BCSWWYtTU18yK7CDRGxESEVe6G2REuXkVLN",
  "key31": "AfUbL1wdDoY7br2cd4iKkUoaJsEfJCgfLkD9qHgeeF1tiwtyugvbSFh6TbzvRGXdLeApLpsnyr9XctotHicYyVZ",
  "key32": "89CaBGnTcSwsnqGJu3ycZc9xbMNBhvPSu3SSETioZ7DipUcr4KbybLopVLQuUs3C88d38ppg9LAuPaUWcQY7ttm",
  "key33": "h2B2MGKrWiJuPUFEzEVq5N6KQFByGEYRoCPBMH8i53F3kBdnxnUvcwPerJSYFDzCo4crLXuJr2CtyqNBiFv39r2",
  "key34": "4DeunvmXP4peJxaDBRXojwR53MV2ZMTNayTPGfVNUyUQLBUR1vKsDXc7zo5yVesrPHtSk8AinX4pAue62FBngkeK",
  "key35": "59GVuFzFvtGcFMCrknjbrxwJQZWe6PMfjZw1nHN8LzCG5Loa1vhpWzpBcLQ46ph8S1my7Pu1gyvFLH7EFzcbhj2K",
  "key36": "3nYn6Y6PfFrNLiszUWb1Cp83fzr7KpqzWKNyQKu1gQJVcMyzhzK4ojQZsNzz561E9vwMmuBhLyZz8G5QSJ6C8D9Y",
  "key37": "63vCZJEbDdG97DKLJS6Gt5kVvYmwg4dC8nPzS61twCJRDLgsS2HMzGNdpidQZehp6zG1cERJn78V1u4p68Kcw7mj",
  "key38": "ahPW7mcxRv1Dc9fDN4iWon8RkyeNaxceuteDU344rsknjuCwBTkWbMQbnYEm1HX595PWJoRSa65a5s5D9k63E4N",
  "key39": "5FkWD5JUtRMHnDsN4rRTFSXVZzUiRi58Wbh252nYkDj3S6WM3yoNHJgVws3MMU6v6y8zJHQWiF6wuZx1cfi3dyug",
  "key40": "4RsHrgmThvXPfTRXeEmaC6xkUbFa6VNaw8UMFZdKD7X6nFKpLUtvvTjVfaDf6tAiFUSgZzFm5i3BAKVhWDn3ZrAB",
  "key41": "8bGRKyyF9ESQ9kWvjcA8sd594HmbJ1EPvSSpPja6MbJubM2sHEMtpiSceFykmjB9ykK1njBciFwVXxUoRK5JTwX",
  "key42": "5W7BH1hj2FA2adtSt1QK5jEAPWQRkbJeqoknKa1pXjeNW1nvi2zD2igmNnboUk9mrxqfohxifSnL8iMa5grmbgj1",
  "key43": "QUGrTFKN3rKtP9BCc34hFXb1QnkNKxcQrQmPdQA1SDpqReua9onVmKWqLesmicVz85Kkre15rRoKHRWYStxoj3c",
  "key44": "41SUUAvyvkYMGCK4ZvJCfTZjQ9TvKMJYWiZfJeVkoLZbF6A42ssy9a12xGQhwkCwWfNmyR8V2dKCbKNeY2SnxX51",
  "key45": "5sWU2wetbLDxWTnu9gu52KMWVTPsas3QbkqYq4XtHqHzjXSdtyJ44Q8PjgjbPU8W16zrVhPRpvQ4fxxmDLHGWovi",
  "key46": "4BGUKWzGrNEapHoXxrnxoguz52KVodfTxUiHJomAGTo9aR8VqFRbHhqskaEn7rWwutFUDoxHidippPXh7UjoUCgK"
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
