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
    "roJfh6tskgfRSqcjQU84sQBT8UbcPLzf8MKp2RXU34WyQ8BSncNJkq6FtfkEwLg73GjLMJSCW5rXkUYWuVHPuy7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ivTKhKGJ3qbUYYjD5xfFxpNWwJbvtPaBq1Qr1akhGh8AKWb6ovuShpCjnJef52ZK5WHrpbtoRv2tZddnSbLNMnU",
  "key1": "2TTDLQ9Wgc6TBNrC4ZiD16SbGPuEH5wK1zqZXpfxHLr3w6P4vxanBSHciB682XRSMhSJJtkwUM1uG3jvpWUtPeqv",
  "key2": "5MSLpbC1hqch5hVd5WvzdhSJe36Cno8G8S4awQcXVUb84Qui57MrUfUoz2K6nEZMPjGcuVATWDwqU8Xfr4Wwwbum",
  "key3": "2XfxP3SNKE6KiFPjje7CbRinfjkCho4CesJbyF2mRAtotpAWgWDjmBTNQKuRav89vtWpuCNDdcsXbbd9nD8AdvKS",
  "key4": "611ekXoEjy7LWFCKUUiWT9dCbiP1QurDhxXJEU3gw1q9Bt32mLAWQNaZVAhvTKXFiXXupDhQKSPB4uB4gvti8Dq5",
  "key5": "2MVE3nDFeZDLJuBL9H774Rngjky6GsXKQ2wE6hMBoTtau4J3Zz7w8Z9UEQ7EbnZYFA3dfqJA9WZThTjYEeVon1SC",
  "key6": "65uE9jHaAsd4gFrEd7UUQEpQpoQZeGuU7qNwCLkMKHWzyNqQDPJe8u1GFhi4SGS6Uom7HrEGv26SXMgGuk8nsaeb",
  "key7": "5Jb8YboK2zC2VJfVEAPNgm8n179ih1mXEfwKai7WG6zbruu2Dra2akfCTjep6KWryKQ9FJnf3GG2CsXPJBPhRYDt",
  "key8": "2KEpdT4csymE3vPCyjHubc7woMwk2fAKTheXXs5eDLopgYMWKJrtZcaPK6UV18JF429p4wF2HzApmSchqS1f4Xu5",
  "key9": "xQZimZwx9cuCcbxaMUt6w3gYVBMXu4BntQuia5D1TvsEnRrM2fbnCMrrgVrmNcoPTuMgEEzJirVUYcxXh6DBZU9",
  "key10": "5atzfaLG9vr9yhCecrjL4KxnY5dwux94gqSCZHbddvrTFisBwH8KtEVf66qPf3L8reHezHcb1HSKuzkUi3Dmsg48",
  "key11": "A4JoAz3az6kccVmHvJKPZwJowjpFjYba35qVMLE7S14AFinsPPm9F4SPiy7t4XasjkckrQD6jBj1GRjSsLs5jVn",
  "key12": "4rwcxpnAQFmJiA1C8yKhLcjgzRBhkAmkFqVqFrHrMmRRNMbW34f6QdWg2rDrcB3uepLpqna8NKF2hP6XphKp3i1H",
  "key13": "4KL7ST7zSpdoH4bZcDQmg5enByeyhi8vwdgq38HHnzwyYwSZWDZzF9wZRCLJsApQuviq7ifrdUJJA7p4uf25iDVr",
  "key14": "5e1ZrGCzk6nJPUWsWGDb1Mj8RuMBTmECTiYEXmbRwqXF8ginaW8DenDZGtX9ZNATq7h1yacoUnLhZS7aL12GZW5a",
  "key15": "46oC99sNeiCfSVZK7Pw24Q159HQwkjnYtTkijgoDUwxqcR3RAemBJ9PELyUNtWFECwdd9PMifMpisb1pTXy7rxSe",
  "key16": "3eHFFUq6XwhgJhXXKN9PizXjoHjvLBP18iVY6HABXJ6LP6F35u8VVHGahvgt86iyLY5ahRE3JuFnn6yZh9Fq8tY4",
  "key17": "5qCSsFh5nH5jXcn5v2SBUByL7beNjPxqrdzADCBtdAfe2LfV1t1879wbJfQXHKMNyVFbnMs7jq8VquR5GnLCHLP8",
  "key18": "5Ty1iia8ZbwUgcWUGX2jDx2gL6C1tQpPSDfDJMLWMvpy1RLy6j1cdZvKLC4EnSGD373cTEC7gtiiLW7fFd5uCgp6",
  "key19": "4ufhSGLJ38CkGGDjJfisZ7kAdYfg2Aw95PGicaf1WNh91pa4y47Cns596KvhwhFXQAfS8FMW2tWVi5uGXuKEt4Ua",
  "key20": "4sVCAN47224ikYke9Y7sQJS8x6f7ebJHaacjN2fYka1fMELEru1KoEx6y2mq5hJJamhvgYFKHw8Rsii4sRVhcYJ2",
  "key21": "4PTtudrZCLNbh35eLPt1XnpAJfRqoCp2qoyJjzZWhVcvJHxBMs3a7twt9uRoYCD9qEYCqw1kXiTWJ1fY3jKnouVF",
  "key22": "35b8mkLZ14omJWBYcmcd1Xb2rtMuDFcQSnsAqUnT452kygoeVEUovxSoyA4yBPEHhNSwVSS4kSkjCfCALDqB4nkf",
  "key23": "5JCG4n1Q9hFnsANkdFrFn7VACF3WdU6DJjFd6PkGuco3PGidvVLxM7CS5FjnWzNZYMVH45EbmQtYnBDbZYFjkWQR",
  "key24": "2zoBrJqREmu4jGQnGGRdKxJLkuduJVpQZqYgz1dPC6wYiVtb1wpEA9BE7ZwykB7UGM7H8mcLrueu7cR4kDGGDTFH",
  "key25": "5HrdTt7YVuFNgCETBacCs5Wdx53PrPEBD8aoUHAUJ64ZfitDDD5Qsc2XUp2XhFsGk87yv6vy6U6wgEwAt4qZXAn9",
  "key26": "P9tiqY8tho8froM9r9iskA4zLvDLNuhNiTkFCQC15hgZH3tk34m8QW92P5umRiiSAU8qBevGBAJiSmTe6aFL2fj"
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
