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
    "59bhMg7ffsS2YaiQ9DTQxkZ5vhc1Uay8E8z41tRvnUCWHKCzCTXFemWjtr2aYC8ivWLYL24yytrZiWrzxF2vHiA4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SipQRKETQL7uRdTjdgfVsCPbSpee9Uwf3CK9zDUSKifueWRsArHasFzBehU5rhNxAGXRZgpASBkgP8CB5onkF1G",
  "key1": "46M4VpsQHWjSNMsM9iJqN8rc7e7N1qg6DXVSFTQuaChDjwhhdkezoz5ytHgVYEyH444z19KxJsqi3taY7bjD8Rkm",
  "key2": "4NAsKzyMdi8nMmQeDxwS1DiQ3bAagxkGLjWT2kYnMLmXCRW5J2HUSYd1chPHnTbqnUBxMF6PZdkB5QCMFimEoLM1",
  "key3": "5UdZFHbs8ESHbfjU1vJ65U2tcencgKz4g6pydbmdpTaRu7Exfbn1rXgcbTNBrcDTMpVBVRqojsxEQ6yzF2zeTGjE",
  "key4": "2yEWeWuiscdBCJZib3ntq7tQbZYbGwc8KCMWuGfZ8AJCygX4W4gjhvEJGkvbHt2eBrEZCdAUEpKh3BHKkYFmJcGv",
  "key5": "4vvjofGUndEBvb4odFuJ2y2toN4BAxHVuhJJ5PXNZgX1KrzAAsJbsbXEiXSMFonur8cfBEEjeiiqXgYbQxqescAf",
  "key6": "5hGTEgmkYm7ZFcsm1xHnRSENpXPVRtmJAi5m12NxVyEfqRZep7hto4oEeJEKqHBujGRi69mwC8NEKTmuqNFNqKzj",
  "key7": "4Q57cB9KtzxCaJp3naLTCxqp91T9CwDNzAhbcu4CRXT1DqBJ1rdsv72s6BQgr1uSJTyrXa4Z56dYB3zSq4keqa6Q",
  "key8": "2XB7cifpNbKGQposEpFYuCVBb7HYpVAX3PTQcmC6VFLxxsGibZhx3yupsBuDukdbbubwm7L4EaeG8JAVD9J8rhRD",
  "key9": "3fhHashiNgUD6PGEG5HRRxQzo1H5pRrES7g4AM4iv1fLuJx4L3Vyzk2cJgMVu5ZiPuAZJwQwz4xVoFpj5RidE3a9",
  "key10": "qod2B2ZvD83hVQ41RAX4zboTKDDMh2Ve8pCUqBKPXcF6eRTyqdjZriScorUY59CX5XUwa9kRvgwgWhj8fsbA8dh",
  "key11": "5ipAjy6YzZdfAZHMC6rcq6DXRN1Qbqbw5he9rtoqAZmrKayAgodpTnR7xRhSBMA3L8KyTEZygQAsf4Y7CSeaZLpa",
  "key12": "5B2b8CoGekeXrqJh3Hx9StdU1hCmdpcmmh9oZZKx3yKwaVfFS6uio15Ff9s1DmGoaMi9mNGXMC5B2WFQ4FP7RKpM",
  "key13": "QYu2SaVbnoa9EAKNSheeBF2HFm3jFmTGbdPdsZbv3HB8QH4hDCayZWUCY9EjALvrsMtpBjv1KqPM4f85pdGkNGv",
  "key14": "4H1uqRmGdwPwktmBU2aoAyNL28vim1WgyDPNYUm16uzvdFVD2tHxA1Az5AQyNrVs5A1GdviotdFdNy66x4SzoBFZ",
  "key15": "2utamaaVwjNW34cjdEP9HKrjX2X98HBiH9DK7R913GVe3CJUokAivWDFKdXbDC8jvegFdCRaghSFK7aQQioBLKZg",
  "key16": "4JCESqLnrjYN2EhdZGwdRBV96HGcsXxcMg1T8xr5T2oD7i3r1uEbVScF8YZkv7qeu236ts53CAzraVFNoKNrzjTN",
  "key17": "4wozois73SVchYMFkqDbE7BHPqNU7yCTZ5NYLtM9Uc6ru7ANUBx8qR9U723JiifbH68BaDvx1Aos47sPDp3YCtQT",
  "key18": "64akqgMvgBMPqGj7ehn4uiWXdrFkaYmSFduAEzMeRZmjK2iT161NQ4Boc9WZeTUQi6i2pCW6BQVxM4SV85ZqxprJ",
  "key19": "4LkUKzmP2AswtLfCaqVWCnt1Cgsi1YVr7xDXBsd8TySffYNekiLJQoKyLGpTQLbHUQxLejJd7DQHvyKHuMUdHTQ6",
  "key20": "3TJRNPm7DBsG9Y5Yj2VBmZvW4yGnQzLvMVtdi9Y49GcFdjaYf6gRnX3QPXJYw9Betdx3Vaem5vjR2GTWHy8ZCM5u",
  "key21": "5jyQ8LkM9GQFjppKe1tq1q4BVtn3eGsUrPNWK1JHcypEmqcACHEh5JCiusriuFdSjXw2m512raXo3c6jYLXd7Pk2",
  "key22": "L8PUECSA9gkcPjLqQGs3PV4Ldzk24WhUrM4dgxo9DAmyvqy2Zvfa5sw2VN3Drtrqq5iHKyLGQd5Fa2HQ5gWb1Ff",
  "key23": "2Jx1aDX6pGjCs6oU2j1PvrD45sRjhhvjA9ZREDCxNbt9XUTMWQrXh1Q4L5vaSS1LWWnnFszBkNFQY5AbxdLbDL1t",
  "key24": "4hpPKNmEb392qBkFxqSYZr4aNRgtP9QAHkGJFrzNZwCz2P5RwMJ1mjuJcXz7JmYKYRDMdLNZqFzE4qfa1yYsbLmQ",
  "key25": "39iDiaJWXDxi4NePwXznim7d7MpiXZDZzLfJhz6fuaQgUvU7TxqWFWdfud47hH2PajxXvngxBoXKSzxoaSMZPaGR",
  "key26": "4mfapTh9KWWYjLv927wgKhrP5vHkFiFyuKcsLuPdBy38c962jjSm43QZzBMvSmG2r88ricZMtXJ34iruad5Ryo1B",
  "key27": "tTAhgToCj8SL64kuby6nBXS6ZBPJo4438U8FBmoeeqj6E3XY1GtY5L8mFxiTRSNQtjQqz2v8d9woodgV2PHhKAj",
  "key28": "UbDc4YsAPRMtoLQZxEzHu3mfB1s7dpmBKu9PVGmhubgNoiSE1Lt5PmyYM9PmrXNpUeZ1srSEvKR4NBEnS4WdzfF",
  "key29": "3vGyHxr2JgSnuUYrrjyKDX3ntutykmEReMJLryFZYc2tkuN5NqGcyQZXFCuFfaWGKwutCRwpCAoziX4v9aAQNR9K"
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
