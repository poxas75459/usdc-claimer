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
    "omXGG5WLPv7apFWCrhkQBWxMf6RkfduvrVfCZs4y5mDHSGhuabTVbg9ar2r2WyKw5PYzYvs7t6H52XcrPrtxyqt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ra1rASdy2ibiSfZ3FoU2WMSs6nGzNMQTR22r5Z2AAFxQLBxFxFU1fR9iNnC6BohqUTFjkq2VssYMdTUkE2MJ5YA",
  "key1": "3wumX2tLKKeBA5UoQJpaZswx6cvaZQD5hVLB7PdxErMAoTcWo9uM6UPwnTGfobRAXQkrsfQ8cYyYqJ5gnoqH9t7N",
  "key2": "tbiBr8tdqe9ZpQpQ2CWaP7idHPNYBEMoZydXQzQ4oKUWHPGgaj6SurhZrmYTBqBjTX5pNTbnSPydKrDFcwUieSJ",
  "key3": "A7BxxeVAHTFX6cS7zAX6odmPV3GDGSnvu1eLPR4AyxAMzD8DGQ3kNP8nt5y95HG2Frre8DuPB5dXEeZYYUTJd4K",
  "key4": "mzq85dMicCGHFLQ6v1aSJguspgu51pxyqgLm9q8xi9DmRXY9sdyCVQu9DJQHLhFkzkqTB5qqGoFFProYHXv2tCL",
  "key5": "4hMaRBcYjkgN2tVxbHsE4zVLkKsvMHECUPsLBsBVfzXzwJud1WzDAt4MFeWipn4aY9w9DDpNJ7QL8LndMfmcPEZV",
  "key6": "4iCadHjpQSJJr3DSumoujETLTEuenUyoYXWv1XjWxRDuFaeedy1o4zhrf6VEtedTXDRknwbc7tfCqkZpT1kNtY2M",
  "key7": "yaCeQNsoqF8R1MKiG87LsEkDDzvzLALPc6K9URGcq4U1QgKEWG8R9yqGWQ3pQiCyufRC6eGF727kN69rWdQJxhC",
  "key8": "4HSNmVqrY5WMPpJd8t55cfjPU3e3g6sQ3DGrDYXdusASuFea68LcFpdr4XV7g6miysPWGbYkjsVPfnD89jy6psDV",
  "key9": "4nu5vhw5FDSAmMnb9v5sr2HRBdfDKV2paDUPenmjyMNXSKSvCMvnVtE6EpWUW7vjuYaXSirGwkobhJ1cVri3V646",
  "key10": "5XavUmCyCaBYBpXUUMFYwm4WRAW6Gy3xbubjr7ghoaQ6iQNhaesvqgkVZnUdMQmSrae5dje7ieoH9knpwr3HeieC",
  "key11": "56wHutixXehxoTBkkj2Q3gYD57rdW3mYQUX3xz8AYBs8tY5StPSPwWohAh3KY1pgXksrwiCGG55QDGD7t3jwnGtN",
  "key12": "4whW8ZnMUmvMY2b8khAZRp9PHwTijwaU4sND2twK7v2SZr7B4prmJJGRVQw6ZSEN5dKicrsds5UK2dRRFRFnuTuL",
  "key13": "269d8JYFAAkoH231rdFYuhrhErshzaVCFr8VSbj3wEGdZcpdA6LVkZMbs1CTpegUvRs9zhtD7uwcE1BYzWBUcwEx",
  "key14": "325cgArHoHoe8w1vedfaFZ6LYFS5FcpTjzfrQQS5a6NLz87bYDKV5jKWk6WL9Z2Ce4iZfpNBhVSovRGpAL6JX7Qe",
  "key15": "37HSC7zRRrctBHvzzUSQ9GtsQLgrfDwvEFFE21QFn4ScYWzev5s5VxG2H26eresSJjg1RWYjkhWh4uVuUYWtWRtC",
  "key16": "4bX6qXu9xpdVgDQGLPvV3uz3LXqUjug2Y5vnuHmaGQkpZx7GaxBdobVnnwshtrKkwuRo9tCmtvTzyVbz4whRU7tT",
  "key17": "3C4ydLAXxzRJxmdtrrgxnAtHxYaP25Usyb9fE6MeaFSKJJ68sfptV49XaHL6taqdb8bWWtue1xzdppQixyaHEePU",
  "key18": "5J6CHGscfcZ5WrD2WJqhodmpHiNa2n7XHrBArHhZUpnFT7usw9pHxz2G6FkcjJZrLYWhMdU7yQEpsB5mFRMMTAQn",
  "key19": "kNsJh3CEFajn23YAn4VadTjWPHymriprKoLeAoCQwapaoryAsTXhh1y78X2pV9mbGMg8r2VbS2V7CGGm825KU82",
  "key20": "ovAPt69mBBzCF9DLsP6Pv7bVFohGsmor7W4jnCpHgJ6XRQCFfPFBmQwCorKmixJ8QK7rCX21nMcFdxcTjTBmMiG",
  "key21": "UqvNZ2xFqEFmuerDbBuYVUU5hw7Xscedm1di16KRwhV3hWG7xADLB9HCown1Q2FcTbdHVGVZvfx8SMmRx1uWjCY",
  "key22": "38dYptMG8uRQMRNk2ZmQxTwcZyNiM41Pt31VPSySwV1MwBw38dpSP8o3WfEkUGisZGike8d1NUoNfQE5t3F71VWM",
  "key23": "48ZeccKrRFWH7QN1XT1BWQT8Y7cFuFqcb1vR8fdA1cGMvwViET1oEpjpkMrW9UxbQzesCXvMKkpUcuHA8SzgQZ2m",
  "key24": "2gKnxx1eopCXZmjGnqSgYU3Tn6jnG2JktMcXHKiSKznzZTSH2XTRhWbKZwa5RiRUrEG563fCd9QdgVxJ4xxZc7co",
  "key25": "4EY6rPjijRKHxbd5n9zQfDvEFQRHaBcSLruAGtX4MMtd97sA9wWLuegex18jj4cCbubWh81hWHY3pUygQdo3Aiwb",
  "key26": "2MPc78RXiZJL2ssaHfNUcoZhEn8ukrwTHwvtDyMiY38utJGQVGfbrJAg9A1vr9c93FEF9rGU7xWZpQ8tu8RYSwkD",
  "key27": "5RRi89RbwbqXVuRD7ME83rfJzJ9xit6jsYBoWtFKBQXL2k4zjLwzmVn7SRdNxjBqZ676RU9qwRGUchGnwDoATjyZ",
  "key28": "QmGM1Sq9Khjky6mbmvbpUQuXk2w8NvCFJgrmd3wXvzwknuqiHhF3bCPaU1fimWaB2bJNLrcCTTs9VZAFYTmtyXU",
  "key29": "3zhT2JzRZzpUXnbJWBRUyUwF3gcfKM41Muw2P53F6LX9kerNJ7d2FVuRHXe4MwrVbf6YYE2LyaG3wDr2Dhg7BefD"
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
