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
    "5KJozHVVfnDkm2qYQ8MgJYGJvmJcjmRZnzg8GYXnaYS5uYuVzTCveQLNpCS4RQXJGCNmvLAN546pLzDdUCGDnMmj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n1kYzeaV5VWd4TRejB3XWEG4NLQA236ExMTPsL6KgvhiNbWjKq1kHnqirGSrjh6TAzdWt2fNCMsvXFAGmRovfx7",
  "key1": "23VT7LtFMKqe2mPYtitv3bxBKrgUWHqRscJL9m2RiiouAzRJ1qfntoG3GBMtB75C4WKadkygqch6T7GkM4sgYyeF",
  "key2": "4Y3ds7PSPSSWQM7XpE5w91C5TreC2VBcKyVM68mgJbURWwPE5ReSQ82eBfTE9LoBWD2qf6tHnPAZP2Yq9c2Ha2tg",
  "key3": "5ymStDPpKvBEucNKb2PAahejvGdbmxjV87WHYr2vspor298RRHYJnCnU9P3jkckrfiuYJ7kYsAw7HsX7B8o26RhW",
  "key4": "4L3QXLK77QVybfBBBz1ck8gYo5YDW9qUMaMNDPjLdkZQP9BKTs3haWGx1aSXEYTSoTMafLenFeZhs6YXda7edgCr",
  "key5": "2XziKP6CFzvUswGk3ndrNNZp7UasvCeceepzvLELbMAL3gWdumHeFHMx6jwCNjWDNxRjV5LE8QRHA8DXUgjbLZKS",
  "key6": "59LLMLZrGTsfqymfHwcAAgWxCYv8f8dP7tKu8XMK9s23xHiWaDMYCnD8tcsXNmUpAc89sxFtEWAJ9WXkYkDbNnaY",
  "key7": "5LTFE23LtukLvi7sUXuRCh3zvcXMtp4RnAALu55dDpbJJbkhGeouWJBGnp1PpJ57cmbyMTkW2rFYDobWPKkyi8Gq",
  "key8": "5ky3hgGjbUW4DBFdnENz8GesvNcjwjFWkM7Um9xArf9xSbHSBkyPV3LDjTMPH2TMHG8Qms844niGsGLGKAY9dDSM",
  "key9": "2VTLr3ogaFZtt6xndxAE91gUpfo7bjf4khZ4BLKZ2pZN5yTX3AKBqP7R1sucDQi6PR6jvTDHKnXeGPTngChomeAH",
  "key10": "4njUUKZ5o23PAnsqTjY8Lj6cHc44e4iaDTi1rWJbmzwQ9TRfHiwozKNbwhGF2HhJmAN2df7nKRBpYPrVFzatrCHZ",
  "key11": "5PRmi5jnnDHHyZFeLbNax83Ra4ghqu2AFSSgeCTzHCFL61CiyNepggATmcv56GnqABFSDVrcSm6TZ9r5jYUafdZN",
  "key12": "5g7KmTHs1ZNxX6PaX5DnMFEGbfvWqNLE37V189ioCdyq19PNrFV2LuXsShPAkPC9X8Kx6B831SmfhHkbdDQQyWQQ",
  "key13": "3PmbDTeezuCpGDTprkH3mWCMJvsBpkeq2jztqW99STqi4mFrik31rA6NVMS3LKjSkQHq39tE6JyV8H8Ti3Td9YT7",
  "key14": "4w9Rv7VPScH81gb3uSC3Y4kvxtDdQ4b8EPfsMXNfCSRjjq8rcUzC8Mef7pzLGKrDX72aBq5nTRrLVFmQiXNLR8FH",
  "key15": "5SDcjAK1XdhhQ49TgUKStPymUJHrQAsKLpembh1sYMDGqgNijq29zmbJY6zFVRCRx2H9YWtzXeayRgQc3QojWAcQ",
  "key16": "4jPKbNpfsJnCuStAFVFXUQGcZHzEwAH3WopJQ1sYPbwNv4q2tVqjBU71AYkEPxy7xwCDU7MogfddS8TmVqTSGqVF",
  "key17": "3ZSBsvpKbFoXtiidYq36bkegUFtPQqeZeHSk3YdwZGap29v8yqMwdZb7izDGDx1c5GLf11UzCTz2v7egZZA7dCpA",
  "key18": "SfVnQuK3cDXsBk2BMdQXua8Qv3rpwdNGVgjnEspRVKzk31sPYidGBQG25qh8ijmk5iqjZ7o5j8sRNMqZ85Zvo2i",
  "key19": "5W1P8ZpUTm8tAjF6Zppic5Db2bGQWqp6J9ZqM5XTfhMz66KwG8XXqavAQYckypp92gjZMUP9rYzXzQCLL6EnHamw",
  "key20": "127JzbSg225CgheP62wcaMtuuffeSatwZu1zHNYjpiZfMaVYLaZ7sA8xsjQgQuyDQpQRd1mKmeASkAY1CdXK5PxD",
  "key21": "2S9QBnA4mei2dJjYASc5RA7oi28wAu1HYfs7p5C2LvkmBxioQwFtY5bu5qJRTSq4H8PXods8fA3MYwNHdLSB7z8T",
  "key22": "3YXfVXunKXiUNmr6Au5bVvPMNuds37ZW3jcHThNeEmTzy1fmshR66JPJWW1PSkE2UfgEJAxD94tZ7FEfx9Qjoegd",
  "key23": "FHcYoHZ9Ub6YonJ1tTQWZmgPjHZAnxaS84Vt6fsgt5dcH7giiJpn8kqDyMPj6azj9DtwgqrkqG2GCDac8hmUcrH",
  "key24": "4gNq7mqnNpNMWG8puKY1GyD2vtHN14xdeLZpmK5n6ALPTYGL36gzA71wr3k9phcHV27ioVHYmPGsaYRgBqtTLee1",
  "key25": "2iWnX5h96pypJmW1Q9hUtHpCfQN3drhvKtACRZzu21qUeXw2dphj1ZBoscqUVyHVQ1wnZo5FHrxHAuEFHF9UHoh8",
  "key26": "39pXsAWmMCtbVMCScyQ2vXhEsjefxjDEN6KN9JF1x5RrdQcvDnD8WnmvKPbcbmxw4p3dSWUpzQhw3iRUTQxCnMi7",
  "key27": "2iYqamfzumzqtBCprvg6ymPazwXyVPT6S6ocmwUqobyV9C1siexEavjvBc8opSCxC7ne2tatBawrrq2VTt5rkSTS",
  "key28": "QuCYQeKXaQdBfaP4ProzpVyHBxSQ3qwZzk1zRUyeX9zaCSh4xAamcYLB4pMiNiTmUMQf3vjevSd8YTf8eZuUFnA",
  "key29": "2T1WDVDWpVZjVbsyW7qHdgZDg9Kir7ECX8L81rKs1vm3eYXWqW6pHgpkZXE8M4dLHK568y4AvgvHmcS2HzQ9k4wW",
  "key30": "2BPyaXrR494LMfcpR8xSw5vjsPXPvCyxSjy9NBnumBFqJ5PwE1VzuEa6W6yH84joKkRZbpp5vifpDBbG4cTrNqws",
  "key31": "41n1U2dR7yF43WEDG5Wy3Z9xBLqguarGUPpq4g5WXoSRFpVejijTdWZdwzGVnCsA2jvqdo66BusqQqxBqeZcXxAB",
  "key32": "5jg4RSXWL6BbY7QqmGmPSc8bsWA1MZfwyiU8a3Gemd7RM7EmDrXbL4pRMz7R8ZDoUE7CCzQsH53gqYWwZp8URUNY",
  "key33": "WBTjmEtxzHxw32LwASqewkywcRaUumVd3zdAbSCAiANxkbgSUNRnKwvauwhfQPk6xgmkCNcLRyqKuPwWwH4KNTn",
  "key34": "7QXWmcaUkKRFecb4Y5TUNaYF9AusPQgZ5BZwR8urN8asJGs9VUfdSiHcXZy9EuvNC5oQTd4gTnSA6j8jmBbY4rW",
  "key35": "sXxmT2dkU2o1DzACutJDkfUuXhnmcHSKoHCtdkuSnRVCTSuJuHFUJMxAsFGWVhJWHtSoDDpYLJUzz7G1kFFWZ2X",
  "key36": "4guRwyCLhUgu7eNnM5zZfmFNps9DFFeRNWCjJefJcZt1hTDi47GqXzGYbTkdLAc5h3vdWutL6BExZCKovCdKBBAg",
  "key37": "2g7gwfBAk1YGfjPeTG2GBdEbUg3WZeRyVnWXajygi3m9hJh57vY49jatTTiXasvrBb6X2xyuTfR6n76QcwqDrzXX",
  "key38": "5aTMHfbJHSb4WHf5AFGvhzSNjBJQDyp53vfoXJZ5KekW9KXXZxzvA4v25jyWHqnJp3UrEZtYZGNRyLww38ycYU2m",
  "key39": "5AdyTE68N2Va6Kdie5Mpz1J8YxpEkHqrw6FnA9qk7mLQ6mSDLyB9nfiKsoCVuCKRpzUDLVxJxp3MWdLaxXL4o8vA",
  "key40": "5o5zq7hkTjk9Rp65NJ8eAjm8CRVGzJC3n4SaQ1To4FpMosxFgx67PHX5DeCEmBk31FENgVDQGJa7riCMQBmSosqq"
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
