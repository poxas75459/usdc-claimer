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
    "4mxweyW5zVGxuYzhxZfe87TNZW33FQW3pAveW7kyGPEJLQiUNgkk17FooDdAUFSaiRHA8WiuiZhP5UtVd59swM7n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mP4rYRo2curw9RE2Udj9MDjLmu4QHApDrJ63YzzPVqxvTSHW6sJyuzKDzM5NsxqsHmvt6K6dpBv5KDnpzWAoxod",
  "key1": "5svV5CKUrW3GAyktZW9GwYpxYjaWeabf779tYhWJVXQa5hSgEtgi9689mJDCnkmQ6UEBHrLjmDYj3VbzbREYw2SB",
  "key2": "4VndagroAyNZEXAQUsi8j5pbvVcQQFRnjjz3n8UgizwAkPzj7ozNhratyECYXUbvdikeoUqEabAnwBQhF2Tnbung",
  "key3": "4gYTz22GzJGsLHCmFbikn6e5gEpq3HfFaYfDhEJNAxrpTq24jVCwi8DZ8azmXtJUEyjRW6TNFfdc5CYxANjuYNVX",
  "key4": "5NDKt7ZzAuQizBA2uHCsGq1tmBnyEYNdQsHHnT6ogjEwhbFo679AvcNZ1WXqY1574DRXszydpbnMC6jmRz7fGuSU",
  "key5": "3tHpCXihwjcmaTF3oe9S4WGUy3Rk4K3T4D114eFTby3uKgsYLgZRJQmhpck3pWmkK4ZzsPxZBcNJDEvD32V8BFv4",
  "key6": "3CV3L9ghMfnN4RCv38cjtaxBRFbz9YFPbcY6swuPMvs5H6GM2e5sFmzbmJ51hMd1AadrLk5bxdvbniMfF6LV6oRt",
  "key7": "5NUEzBrEzdoER35yjy6NT4Xox79E2VAAS9w1aNM2yiYpYqh6DPc6Azn3r6R8e6EZ6g5W15Tftp6Zx4T7Yiu6tVBg",
  "key8": "3Lua1dqgD8mBcRA8Hc1iVYoeJwSpVv3iV3dPVkLywnjJ4HxZ7FgAieeo4gsJ9WnHHybDRa8eqHFucpL6pNZ4Qwde",
  "key9": "siHLq8LfW1aRKKkV9aHrUqLHTha8Ru4HpKh2kMDPYasaK8GE3UpMsaRyrtUkKGoTQm98qRDoXcjmmdYAGyzhSW5",
  "key10": "4SApfeFqad1w9FYW7WXcQy6inJ1bxEhpiNz7uS8NGY4Ean2WQcFotTHZVeneiUCXbxRyKrt2H5KEaRBsHeYybznn",
  "key11": "28p2yPUb4cA1WgRtB7ASuZbyngzY1X5o3PFXDcbKNKnQKVyHh4VECN5pu8BiCbnrYmRTU71P1cDaH8xqb2Mz3og4",
  "key12": "1kwV5DPDaseusEhVDExpru1s5P56XGpDobS4nZrnPwegsxAzXAi7S3u9vJdWkENUT717h7peakBnrvEZVPNmqTJ",
  "key13": "4CzvuCeiiFNo1t1kMAPtTz26ZKuLbg8KvTZcBBV63xH8VFJ5PzD7AJUHvqZxDJxfrgdp6QrCs5FrukAiY9u86xmM",
  "key14": "nWzKQe7df1rYhup5n8aY7fEnNSrGHwfkBb5najsgdbMhg1yk5RAPAEYW7RRRVz6NDgPotYjBYPB3h4cc2bQNG8Z",
  "key15": "3zr7EuS7AvTEH81bqc62s1q3EahiwCSysdcKMTpCGyVT7dQqt1sFqGPxY86sVhFshvqR2C14gtYq4gAYWxijVBCK",
  "key16": "qEkVRzH2odGRp6DPHHxoS2jsBqEwxR7A9VXkBe32Cf1UTNDZCTG4Jvye1krwEYrhDW9AfytTbZ9kLnVWdWJaG4F",
  "key17": "2aWsJRkkn1YCdHDmekmwXda1UF2MgCxh311QeiK729qrAhnNPZcKUvEW9XA9pHt6h89hwvpeGN2fe9UMdCnTWtES",
  "key18": "2DMEtUe1M8NLK8mjzo4G6XUtt8BR97bm64iF9aFjj3H5cE4DTKdCw8ZYt3S8RtSjKTaNy3cY6jT2acaL7sa6tWY5",
  "key19": "2Arp51QDhbbkmh46rvzcHKbDXMkfJf4YmaDzMFNpBcki1dpQjaKhUVRRTPQ4urqfy4YCPJqAVaiHHbv2ghTJdpEM",
  "key20": "3AsY45tRaqq3eAEdthpQXkZGBWmfQoXjQf1jSzBqVdHMP7NGPD16k7yCQsPvdFF3rQq82oGo3dAEhhjTCzhA7ZUw",
  "key21": "49kHQ1YK9QaAUhKN4iXvDYNLk1Tw3y7maX4YNWAeV9Gnbmjh2Z3yun52tbJqr7jMBfeymVddyemkTtRLxJXu1xxA",
  "key22": "jChxJDWdhmMdMyJnBzvbfEVvEobHoKtDF2WJf4eY5Z3FAq9DdruadiCNkqm6QP9DPjm1nDhCXUpAqBecR7TDWhq",
  "key23": "2Z17J2ENCwP2phMhV8kg4idE3iUbBuQFpwBmVP1UJDwxUPmejS164iy2wRyq8at8QEBoPmzZHPAZLEyzSFZtRoYx",
  "key24": "3PqDx6V74hyba7XL51QNGta7MnBa4LqCukVWCi2ptXAd58VxG8Ap2HteQ38uDhRcNc1obuMnPnB9JB7WpDdwt2R2",
  "key25": "31KL11nt6atd6KNRzi7F4ScQRKHNAhriDfVjSmRy4iTSBgREYWPFBHfPNF2qu5cLaSqASSu9CPDMLsSBgAatn4UK",
  "key26": "4Pgx8wVae7SDEzKtoy4dcqMMxXY3fEizq28AyJTM94xPpyLBWwCgL8UkGsXQcp8fPEJN85CgSENdGGn3EG14ewSz",
  "key27": "2dKrRtVx4czPaZKubLjiK3DHn8ZpP57aYNM5Znfki4wP3Zyvrd98fTmzMo1TZr51ygDHYDYXBrURYdsNJcUpYxKj",
  "key28": "3JsZER3F1LJNzoF9d5oA1BzSdGzi9kuzEdFNz62shuK5Rr1NEGYjAgf1Y76Ph71oBSuhiyMvqQQyU49pwiVZ4Xfp",
  "key29": "5JVci4Tq7vYFTJyofBJ7UR5GjgBU6nzHzD3r5W6ve3eWJiWLkyWG3oTaEKzzMFqf11CFRFZZR6Q1tG473kJGE2P"
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
