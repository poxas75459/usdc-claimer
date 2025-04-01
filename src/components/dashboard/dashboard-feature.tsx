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
    "25yTtYe5m8Di6ookb9sf3HvDFFmT2fECEg1Ca83e4RbHoUe87rGAxKBcZJonkF5vuy34ewXtEKXWQwWiav8NsHXD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64qSoJHtdEffZbrJipyoUhBrUV1is5HuXLDSDtChp66u4wzLWc4dMPhscLykcKsvvf1sU4PtBjJJio8vNLSZTTwS",
  "key1": "4EnrGkSRwJ4tAxECmdTEQjYNwPjPqCHSRRCXoFEcBWJNticKqwW8opagzWKFYdyHBPT8cG95EERwXKHJjkjrDeRe",
  "key2": "4CUP1JYqLRwuFwB3mkFSok9BD1e27huuwkKXFCSkzTkjr2z9PDGVoiYawAYpbMM2asjyGC1k6W4sUdFreKJ9Hxdm",
  "key3": "5XM53srRrK3Xo36n575rmFZanj7ztUiUnLvCMZcRWjytH8NRJnejEUt8sYDoEtoViduUEH3eKHSRty9TyJiHtgNS",
  "key4": "5jnagx9uHzM5yJXfz8N74YBYWAaLFnWFXkt3rstZGNWQ9EqnXHCyYbv1gAe69a2YGiWEYzPwcgWAD3kUpRdjnxVN",
  "key5": "MmAEQbyXVS1C3fciLrRqHD7WyfY2ofRkvomP1P6pnVU3fRhoLw5wb8PHuPXz94rusdEUbnaaAQUAJkerUjCcdBT",
  "key6": "4w7cJKbf6FziJCEnSpnhwG4CxEHsLUbXXLAxzM18GAEkjFNoZMzWTPXN7Cv1yip1LJH1qnG6v1rZQnccRYehfq9p",
  "key7": "2QX6Rid4UfVrSJw5HxKmxNDXg8MP7zwJKC5ydcPGxjZSJK2PcQ99jf4eonYeoY4xrgmez2RkWPYEQgrwuucg9AYN",
  "key8": "4d8H82nTnPyzfkV9pvTcgswE36NPLzsZ3t2juJnYn1EooXue7rC9qmuzBrTE7CFHEf8PsN5jvKBD5TC7MPGG4GZ2",
  "key9": "568qoWeqatpRr22TT1YG7uGBqJNFnbvN3HS6Xnv4UnYDd9ji8cSVxhX1PWdMQ3F9cBYMDaZCqQCiaTkAQEe5MjLd",
  "key10": "3rKydw1QRTJV4TvXsuHBnHAhBNrYtJt5bZQiweer7pwAqvg3azxWxPQQp55C5vNaw2Vm27p52kd3PYVM5GBBzNVq",
  "key11": "26atihKKAGiG148QnGKLV58SyZs82siicA8entKQtMhQP3g32KnUgoTG3vf2PhXMKXH2CqX1VHkr19QPWRRJVEaW",
  "key12": "2rXDgoncdykoQm2tyukJx3mAfJb4bWmSivZfr3HrKkAym737gEVoCf9Mh7doQrnvBGywYT4idhd943MzaKiGP9F8",
  "key13": "3b2zGwn5ZoTnbin4SD3iJthqa7dAZZnwxQLZ5FJMsSS1waX226HDRU1z45GCA9bJbGvhq9YFHziPSJzYeHpwmWLs",
  "key14": "2ZZGyTjLVr9VCF8iTpMsfaiDPwZEwX18WiwDgG4RA2yZnzm2PjCPXpZX1nodZYT3LkyvdyjSwiTUvvFB4hqrXaox",
  "key15": "31uDKeJK4uNw9zv3VDQyKEYQwXj1goq4SMoP2Hm3Amuvuw4DPGEvXTGi17CFUMzeu7amX2cNRyJZbPXRp4LNW1uF",
  "key16": "3bXeyG3PFa8mGk8ZDG4uATtN1B1NiUGQ4DHGVcNjTLEu8iJrKvdAMkdQHWcS5pGLm6LxMxGBJ8J3v4EN5fPY9NUD",
  "key17": "3kfZbv3NuQVygz4s92t9DAkPbKUXj3g3k4nygAYZ3h5vHUMDKu79EPNd663MzbzKeE5yEfmaqAP66nvibARXWarV",
  "key18": "2tP2gqRPkA66VX6LSRniqM4ADcFUok9zpHfboWT8vSjb3Sczoq1tGU1pgxXXpWiRRpoYhiycpvpwo2ebhT9F929D",
  "key19": "P5VG2Hs9crB5TUwut9bvJoaFQq9XXoe57tKDUGxLnmNHAugdskQiLnNiEECqZPsWCKPnssVsYTXDqH5MeXSqAmw",
  "key20": "2s3WEU3eVD7f53k4EgKztyiqV27cSAdotHVYBQB5Z5bV55NeQxKv6kPEKyinqwvAPjM4tfA71mmUAERAhoadHQ2t",
  "key21": "3LbYhVhyVgF7PE55yyxYKvJ2pWfQ4TB3L5apDJz8PAfR2HvMsxwNT8Vi6bNSRtTRPAP9nU4C59LN2hZh97dEAvrj",
  "key22": "51b7FUQYuyV4pQNnceeE7iLo861CNWjqvQV1VXmhEZMut9pB4KH69HQnuCqucryMbKPA1UnuFNnMWE13STWhbSzw",
  "key23": "oS5wmYhJdy6LgY6WghW9Xobb8783DqbKfsFhPzoXcPnHdiBXq8FbwXMRtWCXTQJZycqmm9bkMsHdrkJjVCVHpKK",
  "key24": "637DmaD3LQwoei2tkUtntsp25HJ1ydX5qSPnjvPdYZDVHsfe3aCAYDXvEnQsBAbjpwpTYgqeHX1gD7Sv2JG7FPQ9",
  "key25": "21ULGRbBL8YvRHjdA4ESgjAkGxwDpW8oKcVdrD5bxrB9vmZ21iA2Rir3oZcdZHLMcMeSX9ZX7RoZU3f7qHGhHthH",
  "key26": "5aFYi8x3vjRbKfpyovgaGV9SYqAZyRe2NQb5nwiq8PkTErtYXenXGYfmnGZhXBqXBXfz2i7mcUoJYVotKomDFgRZ",
  "key27": "4qHMHQqBhb6ZUY6VM6zw91FjvPBoRPU5Ag5155QpEnWcJM8DzoxRFc2kq5gfUhsLRNSniTrisYbWsD8yzhLMDmgG",
  "key28": "XkqG5CWA2UyptunRaBKH7w4y7ffcmZFY81KyLzXCKY5fiSLiKgU2ytg7M3jui4vzm6X2bQadSQ8jPpyYvRa5cpx"
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
