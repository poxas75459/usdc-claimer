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
    "2SyPj99bwzsdE4zWrpdE8PUT36hmgKkU4PNCZDuC93EeWv6EGNNMFGA3UM4AuZ8pUwhw3KFVGVEeoPG9F4LGMDdP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bihU7eVQKiNJVstzHzsZsaRPMUqsD1a2pqnX11iMtXkyHyp82K2QBeTtrDbWczri6PT47fzrP1mSoa8aVZqhYYT",
  "key1": "64B1zmDT7Hi4wWjYmJUD4GdRy5KFquT4zaN57cSiyw5AWnLFAcCUYZd1ExDtX8kBArdPxQ6toBQ25RLUEQGinonn",
  "key2": "31D3J47N8xg4NR7UH4GqLveqdvfhtiYLBjQ1Rtzhz8WRid6bwAnUHiaVTkVSGnCfmjUtk81jThzwCFhfoD1dMjoW",
  "key3": "2CXJW9GNj9d3Mm9CZCfYd5bwpzQDi9NAKWNqS1AnvtG3EkdwCttpsywV73ZeppDRpZju7crgp6HzAEng8U4azAvi",
  "key4": "FkeeLkyfZLhqmimQGadL9M6JDBhKAXkGdiWU141tTfbZoMxZz3iTRL3DVqxWCeuKQqFsTg4UF1QoXjrYK5aNkQF",
  "key5": "3RVpzPCKtA2wMXUjAQpwXDfxeDGc7GStH9kiw747TSBV9KLxuHCCL7wYeghhdBajg5busZD6pHaA4r7WnE2Qghsq",
  "key6": "EXQZr6wNdeW71X8fKk8MNFQyqG7ZNdCxpajnWMSK16XCWKJkHrpjAmxtfdt56Wc9LkX328MWUdqzYyKVNXzmhL3",
  "key7": "3G4noyfjTurFZw14QrzcgBKEDFBs2GRw9FvHg7AcEmbGP48YdcmMgFYNDJYnv2Uj3nzhwaV94U7hXraCr9NWAnws",
  "key8": "VtDhp9mVkxG87p1MXsd8bkYv4UWiRsdJdcXDxJ3mEbmCQ6P7yg47c8ieZ6gGCDPvsHtVmfMsE72cN23CiE28qQD",
  "key9": "4A1RmDDNJuu1gi5dHCHCXYvZsJ3MZXNHs3FE9ZvMm3mjJH5Ygu5Y6XrTskKLcv6XL8CpVEK7gdMCHQtnvVwc8irM",
  "key10": "2FmmDQ2CktHcYbqDBzMDEe6kN2HKqQNSxkV8xoqLChV27gSKnLSndt78hBcYEJ1Tiqi8dEWrh7KEUmec8hbE7TdA",
  "key11": "33zGyhPkT2k49CnHTxKYK1dgD4MB725DbKKAWWUXUNDprLGeSLpoUYrQqqyeUK8ffGwDsk1AYjfQzaPs8ubj8zaH",
  "key12": "23Hqe2PFzUL9NGPLqdz8pfsgUUfQJ76bFCU6tGH5wmH6aFLhzoS13bBik8LCkBYiSFVgzTMKEyEqjp1hdxMP2J6G",
  "key13": "3bPKQKVTe3ZGRPDUKMJeY2ZVR9cS65xwmxS63mCP6pob5jbMmZmWD2MK3QPcDAFRC8ASpeuWsyqH8gd2FrktR3gZ",
  "key14": "3xBvrD1ZmdQkMpHUg4wu4fhw8aB6zZyTUstRN7Sjebsc27ts3Y6Cf1XEtuxGH6Ps9QnDq5WcHppy5sh1N6E56znb",
  "key15": "krkhr6svcjmXHCoDsKAaUUBUDyPArzbJURAwxSdKjEBhmmveTNxQQAHbHZTk4iqDV8Jry9NaEDJkGBKGEJ9ybEF",
  "key16": "4wVTB2W1vhisqSgB8eH7QhzU36sesig15omvdHpKgSaEtD7fso2BnkHaC7fcmYnT6jfsusrgy4uAvf5bBVWq1xkc",
  "key17": "JencsFipHasD75axXL4P4xYUYCVFTfr4oWssdnMTXVmsufBhi4ZCGDdEjxBQbkEkVkCW8Lso39iwq5FvZG1J45w",
  "key18": "48wJkWMQGoUBYyLcARdYToft17nUgBLB7ikZTVGYSfkD88iEqpLvbzxKDUjkwAwVzaQ9W5kSmU7jhB5bNCHVbe45",
  "key19": "5Q5TfJpNok55NvQpFN2XpmZfg7kjvbCinf9G1e8B7ttJ5RSNmAPy796dZYkNJiTko9Ua6RywfLuK6G4ng9nCSHtD",
  "key20": "2zyfaw4Z7AXywo5srCiGJBrXZtjCRPwx8rSxg3DAFagwZsN4i4Kznsas8xL7AYjkgSVrn7QZcuGfGN3RnvmjUS16",
  "key21": "48J9BFSzRrEeMEzKr23pe7uEqjHEgLXaS76VYATu5ipSwTa3PfANGWjRn5rMGToKr1R5PviSLvGffZNWJoL6e47H",
  "key22": "2WyfKNtRJVQLxYSAUUacMqbPVo4fswZbJYbEhqQq28GzFQ9sYm5E3UYtuZzJJrQZgHjDJtZqp5JchB9CVaDniuDE",
  "key23": "3yL5bjetnZNQBCY7N7zmVHQw7XHmz3gFwopog3H62pvjRVJWDtbuj7HiiebZA1STsV8acynitWwJ6oLfckVR1yr6",
  "key24": "3ycZZzBJUcs3Sz1MxfTW2BK1pUcDYWntZbAPqYzER2up37E2QLPNU14pzPKA6YxAtPFAZ8crww76iT8NBTiPhQx1",
  "key25": "2dWvjBShR33jcPHYwxeND9VirJ9LjWn5ozavQAyopkK2vxg9zURRC8a1iCxhWbmusbT3Q32uQjQNkfULXJbei3Hd",
  "key26": "5X9mysmi5zBgYHUaXz6mXxu8YCQsR139wmEEvZYBJaGM7NjwQ3DiTj6HeyELF5kjaSAcF7ckTtcaiAEwZ5rG1SuF",
  "key27": "29Aq6j1Cffa6aDFaxw2FGAU5aLjJBmqemtcGwXETpMH3FxNW5qnGJfTQtpP3uKf6Ssee6Xq3P1apC3MG3G96x7s9",
  "key28": "Pz2iZJGEDZW5uWRuXVkprjaZMbnBN2K8QWUKmDbS9afnAGYzaJ4d6aPApoRmyzJWu5jfBKy3aHsmsRa4dfboHta",
  "key29": "3iJWMwcyQx8cUEssDuQbXQNByg3MuLmGphB7jMDVr7n9eh6eE3yrq8VS2y7kxdBZWKz62Xbwz6ZBYuqrBsS1yNJG",
  "key30": "4N9nxVhnjGAJxonV93Ptget78qTYJcgKDUTddD2LwLw35jqRnaRkLSfvVvyT4aUxa75VsBBRadUdNrXvWNJtVzLF",
  "key31": "2jyprodWu6m8Cf6zouAPMY9LGq32ep5N272xb8Rhwyf1m6D2eWmcn1c77Ne5LmF2eCiy4X3B6A4V7eCPzinwmZQ7",
  "key32": "ZpZ52p83xCJgFUUTnMbrUUNMNsgWX5Cuhpdu23pLmqbGSLnxYWJUPthLa9TrsRqVpfNPScc15dvo54PjD5qmBhn",
  "key33": "4VVnhLXbL11oHLandNRuo9XHcZH8Tc7Mfwu8aeXiRBKZSnok3Jb3eYyaTBNTETxVf4ZpRioeYjcvL6np8tCCLkBb",
  "key34": "3jmad7NkudnHyCQKMDUSpQYGdUDmzo8bYrB6XhtnjD5L1mp4FjVok4TPApLV5Vy1jcNxmxTKwgZLZLy9CdLYBYU2",
  "key35": "3so41jxz4zZTrr65ygf6VRF2Cgbnm3Seczbrr4cojEm8hH921NYfrzwnS3QnW4BAdRPbFBw5SuR2889UK3QScWB4",
  "key36": "4vTFzLpEa9zQ7eUNecrQzVYTzoUqx52eoogFnZtWJKsYxnZRXkcNRLNi1qBVwuR45sbwKU4rgh4Djki3VYZi82RE",
  "key37": "5MCTDFRL646wP2hQWoLy2F9cP6DCmLJK4vbTFEwGWFg4jLHUbccj1fgfS7k3E2Pk9SCac5aK3QT38kMnFH4UaUWG",
  "key38": "5JoGq1iLuENsdgVhCnDXP737yt5gjUEtvt6QHcuM3hFFfwRjAaMFCnaL1JqeMYdfsjkCCoR57kRYL91KDqKndtW",
  "key39": "5kSUo5FcdGRqj5ji4ftqBAQGrqLRWuEkifd5D74HGw58wGzRSeA5bNmywPqpTt7QSDts7rNKF1H5126pgEjYyoD6",
  "key40": "2ioxJcS4v8jZAPe2KcPaEspWo71HSUx4aSZqPXmSzM4S4hiXYnp8acwn1X4hmQyLDy6T3KhjTR9Zny7GmrYjpsYt",
  "key41": "3Eap9B2QwPQoLB421v8LVVaaBupyST4ipWNW7mSrfT35MB41cEKZtRPrzyk9QdG1Udoh5VsBWC2Ky9WdtE46D1FS",
  "key42": "L8xsNBr9Y8aZ7pqcoZ5jggnaMinEdoHA17GURJduc3nEqxPAn3YzRKBXwHw4b2q1DdWo7MnLDNUCvtotGVWLBDZ",
  "key43": "2KEETyXVU1ej151bDvBXBAWJzTHuWSAEkSrYjXhH53bnzg8wTzDFyZyrHALa8owAyReKwp8MkyRogt7vbJwQHkAF",
  "key44": "Jb8zGaRZsPjrusYyMVC3Hy9K3UZSeojWZR1A6GbJqJzcwGxTK6Y8Cb1QjjwhvLjVtnWsUiyZP8xum1hGC4Z9WHj",
  "key45": "5MYUUkyNW2RtCcPC2uw4d6tmzrCDEzsDkND6P6FsVB9oWposkqPfTvHrNdZonwTEr8fkY32xXBTzTL1UVuQtGkfZ",
  "key46": "2jc3mxnPLRLCGsJJHnuB5bgBetRsLoyQNguPbPHmiYWU9FQqbGH8SdP6YjcJzUyinRFiyZ1YF9KrmYJN5B4Eqt7c"
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
