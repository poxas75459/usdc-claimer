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
    "5e6s8V51u3N1ZCDZ5WT9eonwpccJzQpvynVNGWD6A31moJoNdaq64E3MgksKsxkwdUgMMuuuwJbXHsBt9GTqroWr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ghVTkJ27hGhjnwXY2hEEaHPRJFeTBWG8SsiGumFqQKgN64VeGcBMVRVG9oVqTS6dEcykjZDjLagLYmaqKZ6qzr1",
  "key1": "4ebXfLwK82qwfGvJetXmmd7cJkpEjM4EPCsAcQ9B1acdQLGYkh2Rfs3CVWdrXZRSHpJYFMqPMcCex8YndEuVN4A1",
  "key2": "3RfZ3PCUsQhVoZdDvBwWWgJuKqTun328d6zi3oAR11jNfvaHz1MxDWYBFjnSY2q885EQwfW2kuNmAg2rQwd1tdRS",
  "key3": "2CzjA7DyXjZvWGgnmR1wMDNN4fUUMo8mEEGhS2fbqbtYfSziYvVGBGQf9FkBKc9JhuZtjQe3mFdo34jSezrKSdwn",
  "key4": "5omyoP9yGXNsoCmgE4Ln8pBNUU1qEfUbeCnn2U42kUHR2BHr3dW3kiXU1GZz7QcXtHEi8NQDrZCSMf6PmLWhMbF",
  "key5": "48nVsnHnLtDiLH7zDuPJks1V4tpoEwipnwXRPMDSgSf5WfeNFCFD6vryQKneGX6YP9Dbxg4j6NXgTjdPcJwSHWsb",
  "key6": "4SU1Z7aECPU3na9HVxPuRXY2LM1vYrLehjfAXpX3FtjjTSmA9kfTFiqPZ92qbo7hgaxow8Hh14wpznHDBMHqzkg6",
  "key7": "4EXZsac7yCopjBJtid4gBWkj8FfD38KT1qGw7CMiPemG85DpM1nxVna94GCHNPCSAQy1LxxMDUaY61HdkdD7aAoE",
  "key8": "28L3TyZ1YeG3YPQoDgQQ6EwJxY5FSpPdpy5iCe62LnrKL75sc977cydyfkHB8q2Li5jjZ744LnbBBgT96KxU5Euk",
  "key9": "4cjk77aHJpVP2XCVbFhq7qU56taDydrwJeb1fiTknuKPdVLpHo2MFDUPeQYXzEMpc9kNrEyv6PNszCreKhs6nkYd",
  "key10": "4fwvsmtQn7jAjugs5xwsNr8pGetJZCXS2hP4gfdgwAwCW1DLyvCqnw5pJW3DDgxGVnJzsp3wzqjSpSGevMZXhyHF",
  "key11": "2UvooLtMDvnh2cEAv61piqtE6WnLaTNnFeGddWjc9a3YWNMuDFTQYLXueNyDS3WnMz6yAbXnRXCPGG26HNtwHNVD",
  "key12": "42APshJNfu8h5MApEeHqb47uQtEQEyVQi9MjB4TxK18dsjutkue8UNuELAnvS8BSNhzaMbbZHCgWqaVRWkPWCR5H",
  "key13": "5L17dNv1cVjzSwtLa1arXD47MBsURyHmnGZPjxZX8gAy8kew6CUvdxVaJk44kCTnb2ByxqFovQLhRWUU1dbMwEmj",
  "key14": "7htVF5P7W3dSoWiyuc75Jzr7fdDVYPuTug7r4hMeDcUEtKJKnFKBCoBnjNHZdFmAoZCYwwp2eNPgyuCkDzWF76B",
  "key15": "486NRcZxMD19SYk2Qr3Buy1FLRC8VecXUTsnYnekgVaaet33Y3rMQsW4kNrLzbrhERFUSaQrb566hF747x1EAtx1",
  "key16": "uw2WTK3HhCUf3yC8rehoG74LLcxW9xwEp9gdSySsELTjpspH2yd9xJUUUBWj71RkkcXh6ndTCYR7A4hpdpbcHaZ",
  "key17": "66rwUq6QzBVgfcmSUXBMXeFdMRrW8hH8GzkNboYyKfJVhvoFKLKRYtZJo3Y9LhFyczN8haDdQfRZcjEdfsGMgPf3",
  "key18": "4H8KBXgxAgVyufzQAsxCHqc9UCJ3RcK1Hxo6DnhuRV2yzN9GHsR5SiCmAQkfApMXo4msasLawTz1qQM6yy9AM4P7",
  "key19": "2KXDC4vT2hbTUY3aWWiWrSJSBVVQ2NEoGbBuCjKwzFWKDXurEuMm2N8tJaH5gL16cdAwd1km3QNBZ2NuhBbZuc2c",
  "key20": "2B6KeJLfkTMh8Qy3zeuuNhZoyMXvzQEZbsy7hJoi4s33JE45kERAq3VM2sXvsdJvvz74Lw4w3JeUWiZbH9gD1oSw",
  "key21": "8hDqTAk2wGaKR2fLrvSYcYE341cz1sKJvaF7tXmscuAX6RXoqqSur7CCv89jvbgREzAa8hYtMZGA9a9NDHtC7bV",
  "key22": "2T9nqBp1af7fbbVY99PgJYL7kDwL4tyvho99xeuzzvvoG4QiQYnAB9DKz6zYSwHGx6Ebac1edNm1qAD9uk5XA8Hs",
  "key23": "4kaaedWPPu6ywFmmM2kN9j77o421u8vouN8ANx8Ke4MChKVcLmLWEbqBtYAzv6S5uLMyPQLPGHc5ndSTQXJmXpAE",
  "key24": "3bBhYPs4HojFHEAoDYgXpxBVzBxc5gA793D4QBNsmVrREUoz3y5frmCKSzkbgJeMHUWFH5CfGHtbGpU9n4RCC4A6",
  "key25": "2MiN9vi1X8N7GkgDGR5Du7x1jEWRHAiGRv6DKQgU5Nzw44yWCno3FNoPPUK8wVmh9ogZxS51rf5Yf7T5UcWV53LS",
  "key26": "4AmWabBqhormvgr5UgFCogebNHLMPPbH1AFJ75j6bzfMTBtaGTEuhMkSxyWJhvK61CvKHRfKbhfjv5qn51ZDXWRP",
  "key27": "5eTUeVaxo7QT4u18pZcZ8SQdatvehLXLwatSU4bod6QwK9hxK8ZCaD5f2vTfDS2GqC86kRWVBWuDL9UpcQkvCvwm",
  "key28": "2fyVBKTTAqdDnh1GnJZraSe7Bk6HTrzLW4PPr9swfz2GZAKNvHwNDGWyRz7Aq8DHouJsH3eKqynq1Fv4U3S2uupQ",
  "key29": "3sKQxj3oVjKHVwBQntDFrtQuvM2JCgpPkCucaStFdGQiovsBk3cfV77Rs5Mf1dCamEQUURkgxLX8uD93fBwXyngU",
  "key30": "2MpZsgkrtDMatiqEjJugNw7aQnCJpzJxgKsW3EGsyEquzuVvBGVfXr3T3BbzW2ZGHfQxpxca9f77F45r7C2yCurP",
  "key31": "5LeSvvfs98CA8jEBfZWzXbt2JMYYLoRVMutUXjDdxurtZaMgQCBHayeajBx7LnPytcpQryEbW5WYL9rHgKVABe85",
  "key32": "4Wbcn49L146Qb6CE7mqZoR1UiYPaaimw7edke6jCB4GtnYjSvFmHhxRciCjGGtWsJLwSKBQo5wsbxF2KdjMP3NcD",
  "key33": "4BCMJ9th67XXQAozgGmw8iUD5sYuotkCt7USSHBHSvtv2BonevvgqKMdNpJa6CQxWLtmLFJ2mSWvX6HqgNKMkVDg",
  "key34": "5WRpuCtfTv4czFpPej5rWovZW1WyT6WjHRdtMmbeuSHXQbgDomqJf8hb8stCpYW9igGKpjTR8sVdAeUCbog7unYj",
  "key35": "4PvRSi9iiMxrg8QkzemSK8RweVKNfTUod6e3V7Vm2ZcSjELRE6uZu1h4ALbiDHasB4DAHEn5VDGeTiQ3LiivdFan",
  "key36": "4pWNztz4ZUuegLQFnHhBUBuygGCJrWotTSBjCm5tHZbpvEzb53QvPCam5e4XLbd4LfaLTeEjLPJ1dztGpoG533Ge",
  "key37": "32Ac52cyMhBz6RV2RcEoDfgQwFTij2UXAEnkcTmfyUtxzxHjs1y7nPvck226FoEarak1cHnae5ycQar3QAhp953j",
  "key38": "5Cp4B3FEWcdSSBC4LJqiPjLWYxBvyCMsuwBiWLziLewtJCRgodTS11uoobbfWC2SQ2J5AGNQMHxZFxryTt7oPwi2",
  "key39": "5QD5VNENZGCkh4e1qSwUYRdfHTgP4ZZ58V7GMyzgTG5r4tRTQKDtQyB8v7wTNt7w5pSP7Ti6zLJZsFCZnkNBsXDo",
  "key40": "2hvjcebJ8DqXt7VorJx3rT75kAgtCXLARKLp2RsubAPGbK3jAfnRUy4n5ceW1kvGtt9kHoZs4eZqHiKicx4aePdB",
  "key41": "31iE7KKJt4ZH3g4Pb2UBbxqiJt2bgEPuYAXQW35yeF2EhjGy1YodDrSd6aWwBSs4Y6amvV3gKfvFzCjn8GdeZYzr",
  "key42": "5QNscnY9SRQKTGxqNnRgG7rmgYJum4wg56TaXxKu9gZ8ACHaxu8cRuzpYgptXdWqu5Ltj8BE6335kNudpRwfzEom",
  "key43": "4GdVsJ7rjorqjXtDSoUGueAv6JjTVyrrecA5X84QeecYcoaPAGYpJPsCaeKQQ3NdtysRgsrAMiyJDqvYTRPCenS1",
  "key44": "4JRrewc6Hgm7gHYtfaeyK4B42dU1ExumAZGTVXRF57kHqg8CTrpk3Jthuc1jxeNJuVfbzu78X82z6nY4jStSjLhZ",
  "key45": "2zD3nvLM9setZbTN5RZ14s9v2r53iBnG73q7JTPBrvLf2Hs2ggjrDzU9JKGsucLhkxW7c7AwGLync4eV9vgfBvLC"
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
