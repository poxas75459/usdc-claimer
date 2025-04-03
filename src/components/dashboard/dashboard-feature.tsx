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
    "fDEm6y6RGCM81jBqevA2Asuii8qWzHQZ5mBnQjXdih5qjXS93xFnAQK5oFCJGdr2vKq6to8K7cnDoYoLucEdTwA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sdxrL39BgCKj9gjiRD56XGtqNXX7EBArLx9g9LFBdPSz6M8xtvn2yRzz4hauzNWGhnm3PoGiEZct2F6f19GrfT3",
  "key1": "2KnG63J4UtsCayfw2KupoimptQBZsFb6Hoz1acjvA6GyramxAAGW6dR4E1tzWipRpNjHA55nUavEUKeD9cjWNDVF",
  "key2": "5LExN7b1Rd9cdythJo3w95aR9YrdAj8kuh5i69HPQhN1cqT19J169v1yDQeSd1JpEn4imu4CnUW5wiGqPyWi4YzW",
  "key3": "V6DT12VxS2A2JCPm7WjU6FqYuqu1P4wVJjEqs2r4rxcGKKcmHUcmq5nZFtyu2kdRFPLxsMGQ5jdDWFbT5NyTs28",
  "key4": "3iRALE72UDLZ8YCGzvvN7BZqmEbYazDWQALzFTSCPWhFbHQtMnYcDbcrVWLXi7WKTUQm11ahetk8bvanUwxJcbiP",
  "key5": "67S81BcZReEmpTXF4RPKooxUXdyBgDSUVtQ9BDMGzKYzkKZis5bATfP57hZcLNxcLRJ2EytT1aGt6aY9V7Kodiqs",
  "key6": "2iwy2AC1Qzg73Yf9XWTDVvV2xJMU73iS5ezDa1Xfky6KpcJK1PArb3Pg9NKL1kkyCbdFqmwMyt8oUngWNfwzqDS5",
  "key7": "3Ei6Ln4khQBzpePx9wCmkzE53KvhvuhxsNox3PPXvp8LTqNS9threhH8TCUYEsLUVGVuuyZbEZnhtmrfDb8LYAXB",
  "key8": "2WJKsKgQ1oZZxbzAZJMZgt4P1MczypK17y1zXQdax8QnM99dUgm4Ywinwn5uc5k8iLtdVCvTWg6bunvWtiVQAeRs",
  "key9": "mksjeCWSSqNH6z2YHr7jaYy7PviqKmRa5rU3NbXqC5HPAXhJYLzZLPxYHstdeSz4ejxxvVt3QkCzM4SC7oVHrxj",
  "key10": "5nqPzXuejB43CfMgAQGgdUEnzQSWrwwQFNwZCsWGLc4Qr4XsMtkkWF8rp4y6fei6cvQhe3vgZYoj3ogADTbJNWti",
  "key11": "24W1a2tqbaJsjpTM9UiQFXirQDSK3SHwnnGXYveAn4eUw2qRdGk5eje6mN2tGneS7REDPRTMTdpSo8e92BeLzmE3",
  "key12": "4yH3RJEN7XFJYV2L83dPoC3kqjYNDbztLKzhwMiYMNtnBXPVRrBy84mhQAVYwWYaX4xdLHKaua5NSFEktWAdCqps",
  "key13": "gY6ARtTgy4CWPA57qVFuftpL9AzL12iz23qcmrLMYpFSGfGy2hFAnzPBjzJSbZVuDuVyxXT1MJMGCFCdQbrktCP",
  "key14": "4ECjRsKFo3edhBm5aUCiZVYKUpfZWth7cJv9w4yT2ykzAGqqBKHMkuu6u8Fj7HmSvMEqHwgtrULxF116waxpzi8T",
  "key15": "4gHKjUxov1ABNyuhKBVLgCrTJbSG97XxsiPqqwsQfS4rwbYJY91JB5DRpYULfk9Lgk4bZDVZp4aU567wyFYz7BHG",
  "key16": "2ZV5aDQtW4gR6Mtj6RvaFEEvn9Bu2W85o3eoVA2awoUr1TDjSdF5Gb8C9vq9fBE7uKgubb3PyanLdZo9gfcvgZGR",
  "key17": "51XxJUZ1kXQ2hQDjT8dye12sRoBXLfx3WtMuQP95FbArq7z2m7uJvozgbCk11ouhcKJcjAzJ94ecHQjZrDdRivnc",
  "key18": "bmy3u6Zkidg2MqdG6NtmZaaENt94wKA59UqVoLsvpwHC7qrRNBMHD9xMvtT95NC1TtyGKrBcsiMiJeedwMNLkQd",
  "key19": "4KbhHdJ9qzWgcpkDaHdttX6HP4KfC9zDBRT28FQHyo8sLdg4qCf9FMrnyM5MSDHrd7p31jJAZoJqjdiQsG8Dhf5D",
  "key20": "2urRBoQ6v6usvAp6bJw9MrdFi6xm7oTL9Zp1tc5xjHgWW7mqr7XJZoHWBXf8vr2rxdDo2UrF1n9Mw2fgjYGjBcpH",
  "key21": "5q711KdTes6SgApgYyV891DV42MZpQEzxWyJFoZJLKDA2jWVwiKpLCyu2GUN8DGrzVPckiAWQZKcuWvcyEUUd4Mn",
  "key22": "2uadoLWjDKvpw64c5DkhSydFN3tpDVrYGuZdhVStLRZZQZXGkSqBBdwJUkgcy7e98gPwinQtuGMPZGbswg3e9P9J",
  "key23": "3pbsqLw4ZUKVm9ptKizqtdNi2GZq51uN8vcL7jPWQcatY4DMtedETcN2hHSNJ3WXtyWKcfpTD1EftyR9eZ8x4PdV",
  "key24": "3x7uax4jeY4TKjQbXuxWCjdVgQdutodyKpdUwdjaMQdpoG9pt7jJAsCLCs8xDsPxAcK4oGFn6ikmFDvVofpjcQFN",
  "key25": "5LytZ9qADANR71B5LWxypP2kxWBSU5G91U1BeXokjo9DLhUwhHrzyzLM2WP2DBZ4dxf7myToernaDkCmXNJAaeGt",
  "key26": "5p1CL4f7YziWUdiznEubobrGD1F7N3ZMvCBv2qoNnie3aph8u6M9oyiCSJis5bzQwoZ4KtRRq8db1x8AYRBgjcXT",
  "key27": "Cj8JpbgP5jRTNkiigSQwbFBQL3LXRHV4EjmoDacSB54JzoNvQMvpYhZGvmAMkX4WuxQXB9oZJARmyi1DF1EP3R6",
  "key28": "2UX91NYdMRWncvXwhraGFGH59EtaeKvk53pVfUAtKrdBWCwWks3VhMDi9SsPrfDvegysw7LbADdWo6w9d8GfvN2v"
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
