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
    "3e177Vzy5nXMZftPzgbNHKG6mRv8miejoPdMhnuywJputbuhVEBCkcCngX3gRYfcDsCT5VPAAhDKfWSvs7hHdzWT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HsrYeAkEkLfbFgmgqEsnZpQFYTBHc1Ux3C6ZR7PE2AvHqnJeF3dDxGKNwgot19Uhveudm2T1ZV97yKUWVYRus1p",
  "key1": "2KNbXNh1uuq322uREm9RsdeXwsvRSdnimqnvn6XRASMSzvPiwaaipi3P8xwfQyZgFr1tvtrSnGCmjjjPXyaKYimR",
  "key2": "2sY3CRXmEyijumweNSHYvQQRAcrfCLjZn515RfK15ybYjDEKVcpVNvUJybWVETEBXgSzWyAy9F5DoY8Z1kdAozV9",
  "key3": "2PUyPejDegsANcinXo2kAT7b4rbr4NfUdqYXpihaGUGc7KM44S28bUugdNZGP6z8oiv9xG1vos18uyvWq82CVHJX",
  "key4": "62ZPL9tQ2VK2zDBRQCNmRxFC8WWrvsnTbLaCzrV9JBtpVqLV9MFgyHyBV6Vzebi4r4uhmSGTf2xqHRqNb5eZidr6",
  "key5": "gpLdjQZQjZkXinwS2L6HnMbRpRtEDAoMe7fv1M4N354iDWbq8C7Cmw879YCkXmyiNmt4uxws2fDLptLqNvrAbv8",
  "key6": "qN4Y6vJzkiT7KYk3mM9UBMNTwz3Uxcf9cKWMqFoyW2WprDN1cn5fHSc7zDffrfE9Zby3CbHqn6xqtkfoLYxirej",
  "key7": "2JUjMGoErc39o6hYF51qMveSESPmpHP7DMwaTvfA5edt9ny3N2MfY3qYLVK7QrGxv1vzxtZQtd2XWqjUgik8uV2T",
  "key8": "43j96GNpFa7oVWhLb5bozukR1rEBDQqy57N57tohzGzj7bGA8T3FAR2tRvS9Z2kUcsUTV3uFtFcP5axRRTyDo6XN",
  "key9": "2wCWonhM2i6zDxXvJZgXXSEL3DgUiNT3tB332Qw3bVU17vZGX86T1DBEnTd7woxM3JymsTAmGx1wpXW663ztdDSg",
  "key10": "4y5YyfkMAY8f9ePkKxrui2iHUapvbgoRhC5io1bRe54Z9d3SVR2scmxP8Nh7B1NxnEonzpf78ojBQoquZrPWDq5J",
  "key11": "2ZNheDGThxMrzH6rtaGTPFmWEtXhYZdimT5JyuPdUyLafvwaToWGsB6ZBzeN8V4wxgUxCHpUToEJ5wAjwDocM92p",
  "key12": "DtWFNCwrbSHGd7a4gyV46JYeFXhpT6qm1CAAPU1kMttZGqrCaVZLWUqicfJooxgPhJ2AbkMNyxKGDNhpbJXfRza",
  "key13": "5S3DJ5udrmeX6D4tC1NYaBtPpF1CzkKNmmJX2KBA3Q3ZgDcdz4vQgHwtXZFJM1LnWjCyY85MTof7t9QmRAwdzhAi",
  "key14": "4wQnJBfvtHTTuSJRWX9wk5pGUULaQgC55wqrKkX4d837vqj7TUvkHH2Vyr7KoyMirckmGVRNqiTm1KF6BoPYMNny",
  "key15": "2jT3pm7DbvkyaXp5F2P9DazAxkW89FdBirEecLQtRkeKvxh9FsKmJF8AXA7BjTaTFBPWjVkWgzv5EKn3rX2UYmTY",
  "key16": "2SroPgLU5b6ZGwB1WVLkRQy6cnCBE3oW3KkDH6ABgqDeH7C6ASjpyJWj2zGmVRDFonakEjc7t4Vm6gFdmhhe3cBi",
  "key17": "2SoRn8AcMKLhiT6vLLajFEs6VJkN3e5LgNi27qbLR9m8XKXSJVfKL1YwoFqRiekMMEkYXDMNJGhFhudMyEkMUf3i",
  "key18": "3EtMZSeFBYZQWMHn3CUi8r3MYVtZJ34jmJUJ1jbiBDvZstQiYQs5WGugXo5XcLuvLKRgmxoh71qEf6ra8mFcsmXR",
  "key19": "5RtKmCB3FSzy3uz7EcQtkV551pMGWxqdjpVan2tc5gZjASFa5ixg1skrHi9f2rw6gfGK1Pjqt3XBZ6ybj9zytieG",
  "key20": "4XP1sNWRJdiGUviBzvncu7cmk4k5bcTrgQTdaUzajT5WFU33phh959gBbC2CM8mfRgsqxUtM6Xsq2n8iAKnAT16e",
  "key21": "5TYzP7GQdqJ8GLk33vDFLhbhytstUL5AzG8WAi2Kn2DqdmStHKt4dm4urTFxruZqzks5oY3uFRtedCNXK6XcHnHY",
  "key22": "3K6aBAedScQsFgkcUkPaa6UcP6C5cmbGnprPKAEoNvPGFmqT5SxfLmeDKnY66Na1zaecamrJVsZb73yKAqCRBwy5",
  "key23": "5Hocy2GB8kSpSqUbih87kAKHovtPssoQ8hZ33AtpeBsFgQPvcDzHEFoAwQtqjBPiJS3bo6hJpdtfjagy6RftkpVK",
  "key24": "61yHitpnaJqmifGocKiPkV1mz8r56J84jw4bQumzEmxBLgtJzbZwztPX7ymGRZfkPBM7Zk8eopy7Mdm7egc7TMTh",
  "key25": "33DiQWqUS2eYA1KswYsSNQRdJ4drhJNH8W8Ackq58JCYsj2UhGNA7BMBcACDYTL5oRDrz6WTKiThwRV8pxCyGZj2",
  "key26": "5mqeYiFE2v7GrdzSoG3kxtAqwRryEaEx9foCqL61vFDUjDve19Htg2CBF5d1dnCH3kNByYcrNxss5Km9QCta8HHM",
  "key27": "2XNLq9QFMbyu1vuEpB859F7QzwYrqQX37CDesJuxKtnQ796bq48jVjfsGZWhchpxDAPY2KGwXhS5YneuMaWLEW8i",
  "key28": "4LBTVuv7REs8gkvSBo74JsmaQGgwuVBt9SkapmuRZCmaDtqpEEALaj3NonCjb5DcL4yD5Ts7ZsFMMLwKV2reXipU",
  "key29": "2hmQz8xZgj5qZE4byWNRwtrw4zL1qb3bQryD5ms6aDJFHsLdjCwsvsxmwJ8W9G4mUh8Tsar7eqdsDTjJsowMVv6R",
  "key30": "D1dhmjjGJ1cjKko86gzczzzCpL8eByi9Ge24ZG9tjCWRZTyFMt1t2JhqsmfTMahGBkBv3tXYNUj1DW83thMHEtV",
  "key31": "4RL4wfZXVKEWQNBfMkSEpP5nNeEDFGqMuweWDdPdCMMgM9uxZLpuZ1kQSNgMpKGHvK7ZGZoHgZjjsr5YtQb9xSyq",
  "key32": "3RzMGiJuwHS4fBNKZ63daeJG12QimRK885aXrXRGuur2y54KfV3PWzF7Gq9DB5JJyNj9kYstqycf76nFgUrkNDjJ",
  "key33": "2mbWE9B4fGB2bsL8QjkF7ea7gf6XS9USr8uD2TLRVMHLqvc7ckQvTkrhbf6Yq6LTuoGK45YwdCYa2PruEXqmo6LB",
  "key34": "2MoUW59DgaFo39h6eonHHKxp58Y1RjYE9g8kq6UiYZhWEWX5QchjaWg8dKWf7k9KBuyaWc1KjNgDDC1cXfgZmc2L",
  "key35": "4fPfA3WT7iJyLoLJv6xvtf5rsHBcmvHZKFL8cgL1sMfmNgn2r8C3JG6vLvGnbsnLajjiSUETZkYMu8oYpZebLZyG",
  "key36": "2vaNchfYgkV7Zj7D9cqTe2hr1gvQyadf4uzg6951WQ62QSySn6uys3fmGVVSC5vNDgnFXGHFnzvgJnHHZtsVoer9",
  "key37": "3xvDpXcTibzCpR6aDKNWSmGjjwKkGgSpp71GUJ9onsvbbSmpRgtd7dhQVMAVSCxwqztU3NV2KmYSYTCK1yQks1Pm",
  "key38": "2sePhqjQbduFFkjpsxtTL2rX9tGf2o9UJrYZzDe2W9rZp1jRzjGctAybudf5cCUYbfXNww7rvXVvb7ci2D7mmWQu",
  "key39": "4biqC1oMJ19S4EEHpMtdDoFqweDmomEWBgApYFF69uv7kZeeMZwd43A3eaUmmZhqU2Q3XatZJrP1s8PsB4DMye7x",
  "key40": "56xzj5BMY6HhTKjQxhTskwSA2XYxuAbLHKcomsP2W1ZLg71fWTWwV26WQ3etT6YPEArd6xhxMm85iAA5DnL2qf7s",
  "key41": "5P5P4vxRBVDoFSisB7CeUqjmVM8QMqGpdfm8UfCjF7b6vpxNGVPmUc9mxC4P3bHBFce66A3VqZH6hDSyAcbZgVjK",
  "key42": "4eZsyWs4qdqTJhLyop1hVG9dcXnrZQntzuuJv2tTpuGmrhjiPQxW3wnwcUYzwKwwrKDqmtLTunS2kZQZ3oi4GHDc",
  "key43": "31Hke7qifdCnfYwGL7yhTYGJUb7W6Ad7S69qbwP4KHDRCDVcPar4T2bX4bMgaLHPwL3wnvCUvGiCE3EqirrdyhBD",
  "key44": "Ccymv22auYgsLkDLxvYLDiUZ8Am6oFcE1BHytNU3PcLGeVT5xfw5yCqrfKTn2EM9SLanbEVqBcQRGwyr15h7fBC",
  "key45": "3DeKpnK1eZfH49q6THrVc51pBhJP9wjs1efvjzxuFz1otymgyetboSBGRXffLKbsuAowxTDJizBixcdnP2JMkQkC",
  "key46": "5fKREh8F5mi1aRAtCs16yVpug5aVCTEd7D47ZE9Zb14UTnrHaAndV6x5eRGfPz4Puz8bjSdBT7ERfMCGMxDmfP6F",
  "key47": "4a2PZ8bQp6DWVFawPQw7MibYQX8RrEejD9Gq73TWQ86ZmSmnKTNhPBosyLuHzogcHBvt5s2PjQZjic6u7xa2M9uP"
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
