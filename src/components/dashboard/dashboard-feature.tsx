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
    "4jhRnvtXUVaFZ3mhSNo3n2Aqv4ZkV7fAXb4VNayTG41jtGFmHJoq1Hris8pHZHjChPFwPPGEKJwvuniapJ4TDMxG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wj9X6A3HNz2AHCkjRxwybfi213BJ94EFJTP8RBrY2frAw5MAsfuJeEdowhokzLBZkyJJboctWw2oTFBSk4q2YJC",
  "key1": "5wCppCkCmMvD71WwAWVv2d1sUtsTqksMVjzwGeXZqbrRSfT2ao2idLbHr5ZnzNCH1pLDvCh13YkzUCLPtnEGEdBR",
  "key2": "2DBARsjNytPwh9NNyUTC5dX2U84bZwGd5PnD7dfPvFs6TcZBxnYfjgbPv3kBApf25dPw8Ho92XGvZqKMWyX9jbgA",
  "key3": "2B14tsAYLuCv2BBCBxYiXeMXNy6mms5HQdwQQBkxWjeyBUzvVrme7X873zRRncdfceEjgbmY88gQvB2c9txSnUHk",
  "key4": "25dspigyY6LNvBwGvJNLDyQ7METCMoKtwxk6p65yqX8jKP3BLu999aesWLte175bFE38PbNZbRkJ2rUpWZ6wAHjA",
  "key5": "67QQ8U2wXWoWM5Bpen22u5qDczJt7qufFw3CL6VLf5sBZYhDepngeBGaHTmVHt4kVtnM8rHMrKps8yqJgn2zqn6m",
  "key6": "3xrhC8vWoB5sNfnXBJg8km9vGHqz28aMJWWf34rDKhRdAoSfNWkjFqKNmyfSYVebDLTgPgR5YJnLzKyVNeA9oVV7",
  "key7": "4AuG8KuNkshqj8HRPx8cCZRJJ7FBQHGMMesuYvR5og8RRkTZ1AedX7FtP8b4Qeor2avDWcdv7XkUKGHxdHRTJjTb",
  "key8": "49W7gPVJtyHYzVJvJc57vCEVGSHEiNLkNSdGHsehL64JoqdGWEDWczrJ62e5ZdwT6b9Z4Uxc8HDG1kzSzLietT6m",
  "key9": "5uQfYZ6Kcg8BMb429gFnYDn4xtkgMBmdyt2fZzbVYD8rDR4uYZqPKts7e5N7UC1pkfx99pA4PnkT2ws77j8R6WzT",
  "key10": "2ynJusAQHwXdht5XFzYZxQaeeGPBXqyi3kfCoAYn91DbZuU7j2W8Y8AE7pGXARpcJXutNQfjPiJVVu52dryb4rMa",
  "key11": "3dA7nztBXGPUuvEb6TpPgKrWbKxppBqB46eDLdLfzDPwjp9LjfZ1dXCkZPKaFx13gG24vLHNmEB4UfJMiDaKfDar",
  "key12": "2GuS8XxrjyxLMgHECiGX8h3crVuSRSkHGpGMGPZx3BFG69vqVWm6p5mcXz9vSakgakDxbj7LLvFHf9F8EhM2NM5S",
  "key13": "4KK1NQ6PGRWKXAUxVeDuPYFDCyvu4gwiNs8grbSGwJUpRWZxPNYgJG9sj6vFX926FP84wnSPA2doBig6btR4myAc",
  "key14": "wV3qzu1qFSACiGuyMAmaiQkjWNyq7BqNtpdCZTTZj7kpRpUBvTwpF6N3nxRQLfJHExon5JccswivtnwK7Qt5HJ7",
  "key15": "3J1xC3v9brzEzM886uBfoDkeCu9ZyFRPnedQ7RPYRP9dWJSiRoLFnK7BqJKkYg811NK1qwCMyYk6Y8TFULu4LM4z",
  "key16": "4NTrg24wg2UWUwXSBE2iCJbSbrWpS6m2JyoPsYjEoRqQv91TxaoKQGZdsgrtSZQBPgbjiWBnwbmuEkptvpHt6V3e",
  "key17": "2kwe3m1zVeKGxSc7VsUoASAmaakcLHT3CPRbGu3d2x24BqN7thFdFhN8UUMQRqxtAjh9UYqLZeMVEJDR1b7uBCyQ",
  "key18": "3Da6WV3X3mPdf7iMazzWAQwPSmpZAycThtZbzm1eeGa9WkN9zFTiEEog75QFGBrMaFmB6Wr3h8vnJJKycJoZuLEx",
  "key19": "2qo9cKnXztZVC9PDPgf4wiDkn9mg55a9VrWYg3eXqEnV8pr9GuYgziXQVzs26XFUrdBNzmmeYiaMXNRGimQgkVJ8",
  "key20": "626hiL6aDHPagf8L8oHDMzxUzVUhnCHJmeCPhK1itxYrD89Vzk5iab6BQBg2ki9iCYj7MxTpdMjzWpx3s7hL5zeB",
  "key21": "5TcqXLpUg8mgS6t9EM8tfqJWLx8SyD6niqLBSYaoME6X8WK6Tr4pZiyaBE3MZ2jTrJhM3ogEm4cckNAXRnaTMH5W",
  "key22": "5MpfoyCwMijjwuHnE9zxDGGJ6pJGEDAoJs5YyGQcuVJ9JoYza1osEPbwMer3D2NEkxfNvDpvxjaFNBYfaR9wGCXF",
  "key23": "3TEgv2MrNAwhWj4mBYuH7B6Lyyq44rCzTRh99ijqzgQYSscy1Q2ZXSFjzUA1L8Yc2L3JtY3bVkh9uhT8jutmT74f",
  "key24": "4z8C8YmFhvZ5dYVpJ7jDurQrATZiEdqayLd17bHwC95rLy9oTLwp417G6FWwsqVr8Q1NaKimpyN8TQHwLJxwUhZ1",
  "key25": "7vLvTMWPTmqmVqhLTmWnemC6Jw7UZMwaPtuvV4fWfi3B7VhQNUGMZHYAbK7zQviUVRMrbf1XoLjGXzAb8vfWNxo",
  "key26": "38isaZf7L8o2x83RUPqMXK2tNvdrzfmSX8GNPk72yjMQimacFiEx8CvQqXFLR5w8bu3oKWxeiTwfSHSj24ffWYSF",
  "key27": "3RXUh52raAVPfh6aoELU4fDMP26tMaa4QAz45H2T6cTSLtw8SeQRbdh6TQcZHZFHCChJEzx8kSadd978R1Lv7cye",
  "key28": "5qxhgLGxWjWjF9nSy8xKef3aFfrKFzH7LvwfFWWi279UZsvV6HBPKZTnfjhAWSqS1J6pv9kniqGoyFt2poHDCdCX",
  "key29": "4bVSScKDZDKX8dnrUYtk5pPgs4yKXQHtzcshvMpotQYwZx7iW2whhqxFk2uVhpstQANMdQR12DqTZ7yXtrEXnuuw",
  "key30": "5WzQUpuyGrga7CsGv6xDbQPLxpUtqEnNf6e2DbeanD7w6drx1iJkW54VgRM7PAyQ5CWHnjTNwTQGBB87D7JxdU3k",
  "key31": "58Ea9koWKkwZgDsjDfPty9yUpPpwCzZaR4vxxrMzLj1Kxk4MKG4EEhECRpYceTeTCT81LvbKKbbhJNuZwGcrHMST",
  "key32": "2Rp3ERngLFio3UYBMj451U8WdpoV1Hc3s8yz2rmzLjXP6NhLE2oApVkp4JT5dGbUbR5e2cJWCjdPQmue3MywXTRF",
  "key33": "648T9Wfb5ZKE53LsYA7BGdt7kikyuxQQ4e2RLXcxuLobZgrYCj5fMW8Hi28x6ANPy9AUTfWpP8GH3J4PgtR6hTQ",
  "key34": "2VkSgRsze8nR7r25MGyXBLwNELZ634F88HU3aWRRHq1856RiQLzTHnAfnPEw5KXiyDXwAxd2ZyaZ9VbMP8HhuP8N",
  "key35": "3Eh6miDZFf7yhug9yV9ihBC27w7fw34MGTwMMajZcgkAEtknb8FwMQCjoMUgStNEpnKP6FT62H6LoMqZWJZfwjiG"
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
