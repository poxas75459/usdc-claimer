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
    "4vFkkULEsJPCuzKoN2TXWXws5AB6T6QT8gkUv9kgxhyRyTjSKaPdu7q74Hr3DDpYTs6Tdo4Va6BYA2oGdbpfean3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28ExACN15Y455CNrh2S3emDJLQjQRFT86WGAaFCGsyENRTwTG9PDXhrF7uqrYGL3zyY73st2Kt8HQhbm92texJcn",
  "key1": "hgGTU3B5281jdRhYrXPRSM1q7JCAF6sLUQgtYyTJeQxZEcp7pjegJ2bo4ifnP6GevMNSBAV3xDnp3hPRiqW2ixL",
  "key2": "2oKhvN9q3Y4uKMFRexXvEhdhBPgMW9TQF72kqG2tcoERYxsmUJSqk1BmC6p1mTQhajcujmgKkbW4s335d8APCQH",
  "key3": "3wZV6ZbfXGnpJohgug5vHQqvvQeDTxXC59xT8Zu8mK5i6wrFXbsfmQTxwirZtdESGkRwEiEtCT7LDn8S1HcGzku3",
  "key4": "58gmPVSwWSPBK6eZBxaJJPEENkyAih1dPb6KDj2EWsr7AHBBbKnXjuSpbonTCR3dVsfHBvRKZ1qiH1gyHNHx5VFF",
  "key5": "2M8U8bKrd8C5QXNbxvck77hvvhwzWHHJuUNtPzS168LEFZn9ejwajyQDMGsncxD2SdPJQKzgWk9ZXcJj4sNp3ZbX",
  "key6": "3TjAjDNGSfKRaXGXrbC2NyoQgTW18ajDHEAHiomBeci3P3bULFX32ntCU9wmMJKV55uRVtv1RzXN4khmBs9kxXZo",
  "key7": "42PfbW11nkefw8GsMgaNCGHWZRAFbpkGW9w7EwwXR1NGDturiTDzWj3pgNQheoTBYgMp9WkpTxMQWtc5JwdQbZ23",
  "key8": "2dHJe6d17UKrUsVsKaEE3bKBky2FX8maGLkR1iDDikt7J8Z8RjuRsYxNWcX6GM6KpE2dfMW63NsPffCQQgdJQHoE",
  "key9": "YaoTKF61NXrhBC98JJf37u6ZCHrcUyS1AKnNDS8yLUUwnYdTNh169FmDmXJygdtReLUFHYHv9tzTndzSenP9zrk",
  "key10": "3bAQDTXa5U2H6jHzpZayQNM9qgoRGABTbwsrBFKZN1BYAVvokERhBiAetm4nuBUVToqRE8wYtYUniBedhgUqazpc",
  "key11": "2rxAzZD4pa2AUPt86vEG5etEUZzv91TyHhNdnoXpEaUW8pduFUbhG7rKQnYdQjxFkGD7fKpKf2evQS1mZbePah4m",
  "key12": "3DxENsiVCCjm9xbJEj9gQAYjX2nLUoxedbSTSv1mRSRKWvopgXaqYjkVeWsLFr1JB4vsXtgHiiGyc5Q1HYE88Cpo",
  "key13": "5oukZYBnnUyh8kGBWBSvVnmt4wCd1cX4dAv7gbh7MAiBo9ddRDFxuWv54K2KSS46qi2SC7kM6zE92y4NLsRhTHYn",
  "key14": "KYVLR5kdRS7GBwj8dqxTffm83LNe2tptcdD7BphqZDHCzCAdxtisJPgFt3g2fevm91PDsJeX7XcCKSUTX3M9vEn",
  "key15": "37jEkZcH5AcufUdzeCQynoCsDJrxSqoG6fAnHyY48QJMoN51GX1TTRmmYuuffdGze7AoGzW66BPrd9NdL8EKK5jt",
  "key16": "5x54JoaaCz5rE93ibgA4usJfqLZrWJiCfexNZo9hGuBYWCdpC5TLAAAvft5spFQxrg3NLbH7z3jm7ManBAVaQEMi",
  "key17": "35at3ZZ5As3tJJisM9bnZ39MaKqMXxaHX53z9HthGq5bJ7VVrBRq1Fk5e2T7g5iGBq2KRbL22mJPDm5qVc1mhY3r",
  "key18": "x8ub9h1HRA4aRqQ8XbfjhU7TZMW76EyuNPNtzEsWXC7iXVxCWGdMSARqopUuW9QRJJqvQQPdo8DSTFNM6pAAsvk",
  "key19": "3vLEqZQ5an7cBbTiLMHJBgHdjVA9t16amj2exCx954aJCGkPiML2ZJTWKW1stNDSWdqMXjqqufU7BBEghMjwBnK1",
  "key20": "31HakiSWjwPSNUy8EpGs8uGZrbaLZ2a6wxjZAxMR1MhZSDsaBnwPdBm23o2DZXUbSXVPmAeqvC2sYEsMyteUZg6q",
  "key21": "PmJf3TtAnRoyhnmMnz3NNiovG5QaUZL5m6gAPs7mzi9HXtzQwHjSKqgpUeHRCNGCsdSQcLP1fs2fT8LoqCE2gkv",
  "key22": "3CLQoaqXcmXoYcNgzbnyT8LfPm74kBNbV9y5W1uD16vJvrzePqgmbaJaVfcoEvoZPoY1TvcYFo7ZuTJJrmC8d4Ky",
  "key23": "5S5veuhHeVXpUe9aP64b4JhPnJJh7CSbR4m1BGZNf9zEmTFjFdbcRCGizgHv5b523VLrzyrTbBdW9hfey6oJMopb",
  "key24": "3CnihQonZL3xeNgZRToLJeQjKFYVbVgEcc5r4stBNSv3FbGeqT3D4s3uY8yQE1DPpManWJeHZuknB3NyCVnus1eY",
  "key25": "4w8r4PsV3pu1MaHwCCJT9WWPaKw41SYyrRWnCn2pcxyourhdzPoWzneu9vdb2rbsmDpNb7u1zf9i2hFb6vps7Qkh",
  "key26": "58gAJZqiWMs1GgYUgs5QEdZ5Mx2oXZYVHXWTxH2hZJwFGXSFQPBYV64aSgMDYnUJ6c9P2VQddpndN4euA5jQLzkb",
  "key27": "3uwnBcT9XCrDNSYaaYDAZeUsh23x6sMvpgecLfBbjWg5FNaB8d2nHMYmg1BsR7r8HhrME147doojcoEAQDE4DkCU",
  "key28": "2DrrsNSYmqDyhTCiNKYbqbrKitLwS3fRu7VEpWJQJ3cTpj1ZBgc1Cy11MhKsCZcHaophJhWFbiWsH97qtB38oxXB",
  "key29": "2W6vybpGaDFky7uipjrGfhgzsLxVHcDtrkuvMcuRwrEFpDkRMadgoPK9khFMziYKcuY49iiMjygdYD2d6qZ9FD4x",
  "key30": "2kScrTDiBCNP7WYJTo3jBfi5oxetYMg5YgWhW6E8YctquhpBxTYh43NoNr9F9QmVzeJptceXLzfqiQUfiUWJ8yG7",
  "key31": "5k7n2gYhTFpYfQb2VuMBpbp4qQKCa6GmXLjvfPBKyQa7vNdaLGhqaoCMRo7DGpuY93BS1NeAQVQDsX7ZGpFrzXhc",
  "key32": "2A7wDocR6sgJEGZtMz2VYG8vYEzoZjHccEueU9nfanHTT4Pms3ktEJ7PrJ6gp5tz3CroJJCD1WvPmqmehv8QzNNU",
  "key33": "59gsDEM5sMj3kX5rvCWsAABE2KV486YpGtffV4HKwuDAiP24CJa6tWf9MpJNgUBt6fPNSxfk7V9MoFTU1ao8xv24",
  "key34": "28aqP3QmhfGnjTpbuz2rPCEnLqKNzWCNFX7sV6EWWPFvLg5QzdaYh4x35kY3QkLnrMSXqehZ1VXKbFz48T3yH1zc",
  "key35": "i36rysQWAtQ6qR8xJmTHjPBcEnQySBTKk2jiXpPkHUqr4uZtmEa4FLtRAuW6Ms21tHYvLiP42p2YzF2ZNKpzKQn",
  "key36": "3dVhpeFCoHK1GHQcvFiiRSmQvAkfwGugejreKmKWXVQWSqsfV8sCXDehUcz4PavLNaif9BtXHhtAkTx2AcKuUZya",
  "key37": "5LHkJEK5w13v9RVwRewHWm4KakDu4F41G4xRoaQ586XQHxNjVmCsXP7DZd2CoudVCTLE55wVBNRToFPEbHVQDuMX",
  "key38": "53TRiRyP1VtQnzDmdrTHCnj1YDTAJm2n6YheoHCigpoZnNBu8wZUhECLVNKn23jEkwqsX44phEGdEXQkUJiLLG48",
  "key39": "5yQ1MmpUKJg2rGT4ZXDDBiPcoL4FLruy96aP32VwPVaZRSP4WQai3Bsczfz7XPPZErTjeGn8y8TsUq28NPRCkya5",
  "key40": "4rwpGP3R8cuxaJrEYj5ydUGkifvnKN4rr9CEs8Jp3BsdMoismf9yNYd96t6hcA73MbxkEpTLZGpzbrube82X5ZQa",
  "key41": "vspVJbvGVk7SbL3Xb3tpKgkPTQ1PSd8onEmM1MrP6VtXtu95UHxxmsSycBe1JgamnVxriEvdK9684fevLGk757f",
  "key42": "4Bnnm6EM6WUMTXzqq4HStbyu62MzBH4UiYdX2847ikQSTSD8uzaEnJdaYb4D97EWcwd6HFMCBJDLvrxXBxFjcDYi",
  "key43": "4Dgr3iShqixeZmycSDEasmpnQSZVSDFwdxoDjvCS5rCXqeDN7tQLVZg7nTU1MbhgQjLHJZ65C1cqgCx1gCfMo91M",
  "key44": "XTqddsnb77vRHRi5r7Au7DiejjtQSTi4Dft6sT47wLFyXYFiySX6qsp1EdmtQ8uSYs7deSFKsfBDhCJJKxST4L4",
  "key45": "2MncH86CtsJNhavyBYseeTmx52yokEgoosxcLJGTLPVBLDEakWRRm9FckpU7fyfU1Vq4dLL5KfR8vfebyDC3LLJE",
  "key46": "2PP8joCwJJeka8vJ21NihtFxk28NKeWMZJETLsUz5z1GKhU7LeEgW2m3AdPRXX2SDVEX1uw2wqx6rvAiaaXhZ5mt",
  "key47": "5aphpFAV4RfQruWqwSjLHUu6aHWg7hPJHTAGvyEZaud8m5ZeexWBA258mY9CHFgvqEcBQZP9tSgPSQYCMsrZtiA2",
  "key48": "5SenHbQHCRHwms8oWDWhwp7c2QzDdasEX5LuaGfQaX3946fsoexQV8LuePzwvEK8GdWmaftMByKg1sdQKYFjjSKg"
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
