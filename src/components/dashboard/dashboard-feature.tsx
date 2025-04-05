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
    "2oqWjSWrB9XHVVToaM3wBAbN7TPCP7UZvVKMKvTAPVFuixjuwcoiMtiTukKmca6L14ynqsEy9iWw2x4gLdrZCuvA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fQhRpNoeKmH4n2VYBcLtsHyMJTKowVjTzu8L5La3Gg27TzqasRKsXxYkJighzsnmu4nvWtjGgd72EzyH43NzPtM",
  "key1": "3VcxKf4B6qCZZC9T9vkb9K3UDZcp6YtpLasVRoGsEk1Pv2YTxwJPR4MpC1o8QHhTUYsoat7TnSP5yghc7kaC1JuU",
  "key2": "gicnZBJsSR2D4tCN4Z8RXKjsrt3EudY5rXeQjJxEeytZJ9ZkXgxyEgSCz5Cn8Zem7Y3TpyLmiGuxNce53qTJPSr",
  "key3": "2XjWrHYPwDSu8znFvb7J5Se1aRHRRxcM7vWw2tLgn7TspuuKs7XzP7xPuuaVxbkhtMV8aG9ztHmX7m3jwyeWTaLf",
  "key4": "5Wfv63WtWGb5GWs3wuNvtdj8i3k7DACPUWY8sKujFcWn85p9Fyzwxszc4xF3zSq4SupSzHGXqPVDrhVNmB2AFYLz",
  "key5": "4nPXrEvZJUZpKnZkKh7B2j4QS9D13tGQf1SUWWh4A7CtERWJHp3QbEQMHETiKU8QthdkVkC23Jq9hBsi1gskoBtz",
  "key6": "QXraE2itwFRoUVRJ1srWE8aX6JXsk1F3RDMuQn1xbZLT66518ErCC4euuT44ZEP7VR73FU9g7mzTCr8Evy3bhqe",
  "key7": "28ACi42aausDxU7BabBg3kedLsbMDUBmrCn3SvGjP34vAsiuZrByXor8PgdzEeZ5fGSauMGgYcrRKEqjYuGPbRPN",
  "key8": "3dLMupzzMHMovUFXKdMiLrbMwG8CNi3ApFdvTF5kPvS8pSHMKoDuMAgebdcLEQPK2MF8UZ4B4ez89f5LH9mV1KQi",
  "key9": "2BKMwJXhmEq6pRS5cEs6ek3VkkBT1DwhbGuNXVUA8MvWwVur4CUXcCDFHr4vHRuLP3qYCbNYEtw4E2praHSGZ1Co",
  "key10": "3vgSpn3Z7z9yCjbGjNzKbdG8VP8BxFa9VKpn1DoS1ei61oTuZfom7u8rFxisM35zGeMn1L9nosgZGcN9ss581BF4",
  "key11": "5ZNWs3eNF7qgcRacD2FqS6yNz1C1ujhytSQNfpNbfhiZLssYNtM9UCec8Xqbr9RiYiHwZGo2guJxVxbtryXQ9ynd",
  "key12": "5rYtuMhX7cMbXj7bVyf2c5mMJJhss7vecjirmSmRSds97bP6BXffazPiYhnoFuNo8ZHvJojmp4fFhr6HkSMc43H3",
  "key13": "32CcWGkaYAtcvSJmbyvucxAAZD51pbd5cve5RtERqssgfBkKjYAWxWWydznD8akBnS2ptNfwnmiFPHNZ3wBScrKn",
  "key14": "3SSZH9mXvKiwHJCNGExGw1BQkXrnPsuy4ZGvvmQBh75o2FX292ssVJcy2Ja2shWBffq9bJKd4V3wxc8TKSYYxxSq",
  "key15": "4GHS2hcWZhtumhxSj7EFBesSW4uPKAYnoZzgUSqAQ6XjY32L4xk5NAPbjcjdsGeKH6tGVKps3xnnvL683GUnpAgH",
  "key16": "2zwardUhpvW1F16415PYDM2VtaA58iz7K9n8KDDirHsbo2csuPUpE2AUqunxBQr3Wexoo3mSHjYKofDW7DQJUfdD",
  "key17": "2meVzTFK92KrWu9aVRkC2Y9Jfhf6A89SGhuRcSqEyB59ozKaV1hnLiDnahsFnTwD8iTZvd6fg58W95fns7T3ebZY",
  "key18": "64UcdBEirYg2T28WpJ4hficnmVqnhZn5M6HpMdcBQfAd5d5C6M5DFnKtNwz1BBcH7tfLNcYipt4jViCH9AVu7xr5",
  "key19": "E41oaeeBiUMz4AUYhS2BbDYWVggsZL3GmE7FSQCQT7aZxDJrPX1S75s4BZ7cyjn8WwmpVY8Kf4DPfRgRGeV5GAP",
  "key20": "5RWLdmtw6cecBdNjy5QELf6gN3ZJLtngLdvW3pe7Pq6jcp47gspLQTNHu4bYgSjSFoYttJ7nXBgYd6fk8cfKR2jp",
  "key21": "5wMyaxBNbXJhS3BCUUDB2VeejDc3nem115uyXsStcH5Xwh37G2Hpk7Yh1E5MuHimn8S35UvGznxabr66FArh7WGD",
  "key22": "P6seXdKHPyVoZryWSs1FHr55UWBZxfB7SZbc8wgtMmi9kPbdR4CiygVUgwHdR2soD8fvcXwSEUn5gbYRfYMVTzx",
  "key23": "3juF4Naq7LTPb1Rq55f4DXgAE1fpPgnnFE5iQyHzLrsqnmTHoa5ZCKYfg3RUFhGcaK5s8P8arGxDvhTCQtGFUYSk",
  "key24": "5J14iMvb9vaUHVPsEAGDhML5bcbSqu2CNUaBNQQRRyMwxccwrMwAgEAuyZj8PCffj7Zmaxiqde7ie66u49gBp7dH",
  "key25": "uk8jfexcuoiKYWufsxArX54CRvYDLQrLNyL9RWB31eZuHFJcYNzb33MaynkfMT8QtQXfsUskYyikXzb7nxZ861z",
  "key26": "5DWBMJgkdhXV3gANj4WfviRTsAWk2NhzVnRqw6o3BxVVYAQxvxTzSrBcS3PRdphGULCUSNnbpVNJ3oPwtWfqzQZz"
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
