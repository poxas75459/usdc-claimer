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
    "5zFGuQsgCjKh1kvpLk414DiukPQB39nyFVQ92EXnyvyvFArqjW3hmUVvL8Dm7fAo2p9ZgJyGPBN8a1bWR5kEoyAm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qaDSpvyXccuV4jAJqPoag9DLRT25iXD7JmK4G1FxdvYJKpqJ4GSF9xfMDcP5aVu2NsYgX1YRBLpsSatuQNNESg1",
  "key1": "Lwdcu5KTMRUEpH7sp53rxWjbCg1Sr1q9m1CfMiyEhCj4DWM1pJxDRArd2Z5Y1QeuPiU7mdXbzHG2NV5yUHmRmFP",
  "key2": "3jrbKE5q4yW7TyvMX5SUpaY6WFwRyXMMwK3uZsVi2JvrXMJ7kAUfk8GVJkL1KgxsbTyjfFD5iyAHNhy4mhdyUfre",
  "key3": "2e43vQQT8XLQYx7tABgScaeiGyeY51vYQRYPbWueCEUPYBkFvCPo8EpBhJjYGwhS5qYgE2TsrTPxqAjvMop6PoXq",
  "key4": "49fCrseJvNDBaZvhizBSy7j4D97c51XrcZWpjqkAzyN4J2YHb2LHwEhgUh1UTfGuSkh2rucHAhD8eHTHjbC1p7Fy",
  "key5": "5reUNhSQZancb7a4ASuTN3HvjnxhmA2KPttSopj4LShMEa5z3R7EFP11yfA3TVa7QYUmRTiTMXJ69f3Rx9Bsg8RR",
  "key6": "4s6d6H2YmWjVH4A7TTbrAAsLqrSwjLBq3cU4AE2TPMtShLx78WZKRN9cXkNiS8KSM61TmYxR9gTfCnYLL4CCw8FL",
  "key7": "nDS9yR2Tq8FD1eSmS399uYBNCX8ocEYkDzWPVCd3MVfM653PVYWuTBg17ueaYvVnsbxmNpGqWhWfVCXHaVYw9cz",
  "key8": "3t9Do6wYBdCz8MFa4Uwq3uayPForv6X84MkxS6qtUuxf45QTnTmV9E2z87rtzmrPLvjnLx5X1yJSgc4KCEdLkwax",
  "key9": "HR35jYzfwxpa9PK78CNP5KBPQeJeVyVkcfx2wa5Exci7fK9Hw3RU3dYaMynWFsaFz7yAeZoR3NcT97hphDxaCVL",
  "key10": "3d6GKNnJMabZnz3RiPtqSjU849XosEHsBSBDWF2vzU6PVcamj2eBGun5dagRMMKj8mg5XdyXS3CohcpBjBcVVQBM",
  "key11": "3xg64Qzdt5wjDPotmwHYk7jtmqvzuts3686DAxXSo4h4Xzii4ZVZw6AQdME5cSibRkn6v1sNz7Jo9FbqTiuBi8Vq",
  "key12": "5bXo6V9Lmfp5wLLk3BGtY2AP5Wkxbja4WVtx285Ld1SQv5D2k883BevqXm3FmspY2bEG2FAWxk6a7scWFYh5cnDh",
  "key13": "rKkQV4FXgBv65LEw2Gm3bt8gcfSj8SAnaAqwf4VrtJMLMoC26aDmiGWbH31Zr1Njnn9Fz2NmzWJiZFPPJjW6dAz",
  "key14": "5Y4b8FfVbj5SJqULT7NcfRLymvLCFN43Jxa7HLdvbTNJV4RnWEDKLp8hWBKdr2E68SmcWyWgKbWSw3LPtfYV7ZRP",
  "key15": "s6S82KGNwApDYu4EvUmi4m68H8SGifFT7F75ksu1QsXQcTdzCd9SAyMAPb73F6TPMNNzHXHahFmitgoGuG5JwAF",
  "key16": "4yqrSwbsRq7ZNjcedCjRaYqzzpkW4t9PwfufxK7yQcbFVteG2RpbZUdXKjSUFgayVGSB1DkrT7n7qAkNaUvzPdC5",
  "key17": "5pjGGLCqhDQWM66aUMYHc4n5ojPLnPjzbHF7ChMa9UqeKsNVbqvDFJPfZuUCRvALzKKEUtFT7AngpKkucP3FcX62",
  "key18": "3JQgLakyAVbzJAEcPUwu5xM6t8kPadDi3NygwXDhdWU6qUe4FHH8tSk5iDmZYS2sCwqGyWRVV92Du85Y1hynoK7z",
  "key19": "5YhTuL3XErJ6uRjVhsKk46WvbNRp4MXSwjNfxha8f96etjpEZDR2ekiXDoEaGeoXw5mgXgCsrviezKLKSUbRbRrU",
  "key20": "2G2y6sVa2fDqydBa9TyPg7cW3P2bg8PMk5wS62DkmVhPqWTPbhkKhQ6fEekjfz2Lb2P5io5cCLNF3LW7m5Pxo5CG",
  "key21": "2K5C36GuwodSkggAyFG5bfBuf5nicbVFNmiuHLoNsC8CfQu6oLN75uWfk9vYfvVBSSAmDyZUgpqoCe4FoskqGDKq",
  "key22": "5A28L1HNm7HbSYgoFR4QEXsCsaXGKSy56CLJvcSS31xUuQrPGQtUTdgFt2wSNQTHCCmTBms1CpTUoUtCUszmzusj",
  "key23": "3EjH7hQ71eevj5FNBCzzqB526GDcsDr4Ngsu2dzaszTRMhmyq3ZTkV9VhWirfZNdipqgGrnj8EAruvWPMcQnqKS8",
  "key24": "3Nj4RMkh5waxDJp6BSfQbtEFkUf4NfCmjswvk6dcbWiKajKx79ort1HTW6sRbWRwTDUQKfE4hws6i998Yh3TjjaH",
  "key25": "cerixotTUtk3xBPxMQwomq6iaqtoBA2XYJkyJGiArNvvSXfkdtVwy95vb5zcVh7iSHz3FiKfJqLwGCxwLeUPTM5",
  "key26": "52EV4m4rgeN5gCQeanfMTVWewxzKntGTJyXyZ4HD2Ex5vqJLWNtWJ5eMpf8RDp5kyA71M1qiEg7njKejSQsYegs7",
  "key27": "5RWTEam2A7RXsNyp5AMNzEToKxj3G6EuKetQo78u2zAMN5QioYLiRi6yzTSZ6yGhDmEJW7MD68ivQ7rsUABiB4wb",
  "key28": "5jCt28kvGm1Ryz3TbDsj7wfBLkUQAZJ1ci7TzbWL7h8oTFRSUMd6BdhashetqYbAs1Yzkq8AGdsSjzgfcoRXvhER",
  "key29": "51D7EZQxGmjxLTfb5Y3GPfVKSMb4vKdABXxz7zT3G68BRie9sTRnJXJLAZLkY7KKD6taogMb7JhfWV2shcjPHAou",
  "key30": "3qyuC6MYc43qT5NC2czUu429yqd53mQMsCjVCEKd952VqGSJoVYMKfhWBBrsM9XggwAJAoFnXWS6gt5UkGL1wCHV",
  "key31": "2wvgty5PohXV6x9btyuj6X9Rx9DjDEbDCewe23jv62RskTHA2w5cQfjVdBGvk2EKf3j9eLZGAggBH2J4mRKTwAwL"
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
