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
    "2tJZmQnTVYHisWiKYJoHjFEMD5tQs6akk2QosUCSq8kheAacHkQGToLDQXwTf74mYfCj55aKRr4k7FKU9TbvrDT2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bTbJg9si7bFNDQLUS42GmFBv1rMcfCBVHSbfXFeLHRp8cNGypibZGbRvoqGiuKQHH5ve66pM33VxdhKyNLKx1F5",
  "key1": "3JtFL5vA43BPMb2hCyyMithX2wcasMMNCGQLDDj48xPZXDqa1HzBYaBs7yL2kjR5hX4X5zBKh8L1VZNP11cLpnPk",
  "key2": "2z2xqXyDU4TBEmvPoPHwF13nLhtuJgzVLFpvZx1dmLXhs7axdWaJ5Nv7rw2Rv6Ci4zjLyYtsDVTgC7QSP9no54GJ",
  "key3": "28526nydpDW2tZwihUvmRqwQEQZTDJd12nYSExv2sLZe84tnxpEzG9ggK3RPiggDCPtquzTXieUd9to7j8z3qSgf",
  "key4": "2EHH9TYETTBYaCbDSWXdsGT7rUCpLVc7TVuJ6RvBpH84fFCriGy8hLqoLNqu9vYKagU7ZgYxzc8xnaj3PQ8WDCEV",
  "key5": "3T5M4SndsY8uoec5SfdC4PFUaGxvhmuaDgxjwnU3ahuQzPzyLwtTkhngsUoNAHqDsJiELcshgjX54wr84BXFDuEz",
  "key6": "37wcMf7azXLsDUtoP2bXBo7UGYGaY8gcitt4FZ8Vgsb5RDtRCjGNeTsoPEDjRzRaJKSZpLPXcpv1zSVVn1HNGB83",
  "key7": "24Dz9XhPww348RVKb9JxaUJ1wR6i631x8zgNwQKHGq4EDuAM14P23AkHk29eKLxpFWd1EMKTGvBfBhKyf9dcGhde",
  "key8": "2HXQWoDVqNANRTmnj7oYpdsXMUA653w538bCnqkaztAPN8dkUQQVH6Km6Mb7nXwfHuQGREh59KEJ7eNgfmT3n2Y2",
  "key9": "5p645Mopf5QMF7SNfC2UXQzMyhzwpvQBMRtpseFJn1SwQwzGvYUwhgAH2LTjQuZ875VeFJX2JaG2DvhwrBeamqH8",
  "key10": "5NsWDFynxHhjz7qgJeH66JsGsUY5YXdNg3VTZCBSHwMmibdVkLp5XmfET2TodwejLVdjfkPgVThVfsVCV4npBkAh",
  "key11": "4TEjVk7M5v5Z1yNCM4piCeqCR7eS3SMnoDHuDUEkAkfAXy5DmPppXDHusbGpLjr8xc4kWoFKwnXANN2R9WU6UyWX",
  "key12": "3tRLvsSPsTwvf1kzeg8A4r9ykbwNiqD88nJ6mP8VnVaSXeesrSkVRDf9weX4rfZ9R7MeypkubhdE29ew3qvTn4hz",
  "key13": "F1EZh12PfxPTBTMgnejuMrMq5r9iq8TebZP2hShYr31SwprpzarVKTLvRogkjacwbuWMkHW2r5wqqFMAsA26Wj3",
  "key14": "3bT6ahQToL2mtzmyvW9SurHcNGKGJDibn5CuFWXEv2G1bic3P58ss5dwNL9H1aLFXxfmArJhv3f9teg8GkyhmGBv",
  "key15": "825pYRCZahtSeohjzAjfUxqYET56zGYGmfgHxyWMePHjcGhYdD9FdTJozngpUCp1nXTbWDGsHj3VjXVXeRmMzM4",
  "key16": "67dfYaLwtnG8gdZxKRDtDktNp4aRWLKXyaxgT6YrSSHyimMiPACWYsPzL3cYi9YjiUhCukfbGp3CpYUGmzL1agPz",
  "key17": "Uw86fe4gx4H7mkkvASGXn7pxRQT5hgbRiiBaRjYwEKBdNVbN8QaERD539yHLmkoTyNNFDfqZyGNUAV6phUc9ExP",
  "key18": "3zE6UbjqCk7PBeJFJeVopHvREgfXiFHayuGaqBiXKUgMoRseg91AgUGoUhL9pQfVE3v5KWGtpZZfxjfGAnGQZJiN",
  "key19": "mp5riiGjro32YTdYeEpXhR9iKUzxP5i9VsV1RU7ZHRxaPv7s2PCfRKHdxN1voGgtM2stobQLaZherGPHpaKfJRD",
  "key20": "5TRULWds7haddYArWXiA4j1URcBThVbHx7Mzdeq3kHN9NjMdP8TBu7UAAMLzGrFj92FtUtjZP7CLv1QBDJo5v6YW",
  "key21": "5P2XNwFFPQAwde6QoNUAVHPZqfXTWGXys5s9SiFFcuCw36rvLVdhirLd7EhbgHfsMZrFziURZVpzPJo4LgAbm3Y9",
  "key22": "2cXf8FRNQWTcTkAUduVebb96EkZM6gCLevFMCZ6ejZG5656eZqrQ7SxH4yGUoU1TQsAWKbgs7eSm5VTnRQSXKHnA",
  "key23": "37G9AgD2NbdWfVCjqtdTWnUE1u3RYyE2wnPNjwH6d46VsH2cvWbahvBUVCjMRZqs3h5JNUvKHcWGuDy43M56or1",
  "key24": "5PBnjqsXovbkgZNrFSySgxj2JEhrpJipE7i1jpJdEr82xD5yDco5HBg8G3BD5jQafVgJd1sJAE57yE6nPXHTNgqX",
  "key25": "3GJUc42i71uZJJc3v54edeefQjPT6ZTPWVYzAEeTPtds3UFPEkCuPTpH38iU834J1c5ZZgyvxivZahjTetyAqKiY",
  "key26": "5Aqgvc6dsh6U8PgaVEWuX9W6NkPikE9SJX6SqL6vWdBdHa3kBH1AVou7bdeqw7Gk6LcxV2zE6w21NGR8Mh1Lkm6s",
  "key27": "ARS589zFbZYAXKiGvcpVzq177KmuTbkCU34WhWKXc11LvyHdVLk46ddco6kvHqZfsFQCbSGrGAz2HknRb1nDoPP",
  "key28": "4bFo7zv4wL63KKNPS8PLLAdvmMZk9Tti5RQCWG7vsDxka4WGRPgbroxmQpWbA5WYUHBzuzESEQf6xUFwiUxFuUR8",
  "key29": "dp1Phuc4LVbkCRjKpXukhfdWKkndnVk7VBzB2dvKTpiX5GGdC41Gktdoh6cax6z6XwJNqePvBRQLdsur1QMZiNN",
  "key30": "3hrzkY5452sVByP1H3DvYB1mTpVVWSuWCweBdEN9ezoxRX1rsLoGduu9Wnm7RtpPzQriBrFDxr36BkjjQDth3Er8",
  "key31": "zxNpip96TXznSTszAsM1eshurv2LrkNYiEZjVUhDmush4NgM8BXSwAU4GuqZ5SYDbHfhiB6dsA4kgW5R2TuqTKh",
  "key32": "F4FsVeSU6AoEL2KpbaWquQsEjbhqL4CvxKVvEiFxT31AKiyoG689JnkjG1DCV6hgEgapN46qgjfxMvCU1NVtdWz",
  "key33": "35QZo2Zw7jkCihvEZbLTdScAh7v6LtfAjkmixMeCYLmD8hZxhj3iX4YMvzrYMyjvRtuauY7G6Ntq3hf1egnCYdc8",
  "key34": "37zc2L6YvwvEJTseGsdZSe5rohsUXAbq4Qwqh8iRjsBxrYJGp6yBfBrUT1g1YR8Su1isc7n5bk8jjDrMNfDKhUZk",
  "key35": "eWsSHheV7Qp8sq4w1S7CwWYr72gBwprtnzJvQ7hyBKciUx1D2WXVMYDuqUTVWDimLKmS22MfPigssvTrGJQiUMZ",
  "key36": "32La57kgpSm2vPWzRon7y7fqC3L6qzu7rL6K3GMmdT88iYiBHkUrMsrPpAPRdT9KEH9MmVnYwEEqUTcaEtWWfG2X",
  "key37": "3grTFNwSDELhxqAgAhFdnWpK2tckex26yMjxX43ZRHryEVzTjAppwupagSV13JhheZZ5dCkQnziSSH2B2myDXTR8",
  "key38": "3Gu5ypD8qoUxNFmeZFhEkNaw3NS1n3te48NL3noKMWKiu7ACwMF1ig2UoxzTqsmNyvu9pnk8gRpwBvfQV5ZfwiMH",
  "key39": "6ryonD1Vu61es6BMeXTFbL3yM6rAtqYMkgP5179FrQxxe55bmFMAYK5AcEeqomjFk2FLkbUoCKBb86Qg6eABdbo"
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
