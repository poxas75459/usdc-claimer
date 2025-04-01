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
    "3pMq5Z6tXEL6ha5R3cn4q5o2yGUXhkRGSfhUaowomt6BKUsxxADzRzSCHFePjy39DYDUu6AmGcygAeQHDy7g7oCm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eXZxUwufbmW1v2UrP5y2E1Brq2nPQ3qNaNXkRFehom3RCZqooyisamL9WMFjaS7suyT3kmQhqJidghgdVLbEdUN",
  "key1": "HqPgy86EkFh5NNFRHJEDomtiVYXVD5ZuQvFUmX7uQ2WTY85tZzRbv8siE8QEHZ86wVRbHNJMn5d7dawP5S4wGws",
  "key2": "2MYZTeHhkLHYRsBYyVDav1KQZsaTgB698Kv1t2R7qenZWoAMnFdFzV2NVpnnN1gqyPyrvckc6yffnKRUQTjRArZ9",
  "key3": "2ZjEwaC6a9vfqJZN16dRdGvpUR92EWrAoiCBhwr6qp9QrpKXPGAcUmYNqjeNcoXR1f5zZVnFAofnVomhwi48Rj6",
  "key4": "4Rw7NG9GxjuPqmjDQFTv92bet4j9WsAkBPhiEPpk3FQGJUwxU3we6Ygpg5TL9DuhK8NoNR4FV7nAuf6vJCArtFrT",
  "key5": "3C3sGzLXycBLLwM4mcSF7fxtkPYbPqcyj1jT5AM8xGyV2NKec3RYCVNeyPWo1GS4TtyDoPWeWp9k2qTmxWjUgfEY",
  "key6": "3R9cKJAQc5BzMJxhhdy6BpFQnRw9bxLTdy6M5w1SFvKG8hN1LJhZH8fxsVLU5mkQ4xsuTXFy7fycoHdKnXN9Hi1U",
  "key7": "4Aiw8XP4mMzpy8Z4KKt9YUSC9MHDWjDk2sSXJdAEbmDD345FjdyLEEuy3991Q399KvzGCRxwtQoB1JR7yYkVD3fX",
  "key8": "5AnEBZwPUxcJ2eUk4Cg7jJv967Xkf4DvR9EXr1uJtmCrYFTMioM8rQiC57vmSSgmQL5HfCm5zTeXiSysX2b1A3Ud",
  "key9": "67Wn28E8TQs44C5NkP2PHmBHezEcBYdyrba66aW43M3PZHC5FXHFWPaamvRaoqvwrxfKwyZHUgimTX7NaQuZjyTG",
  "key10": "5nocX52BYi8qHDrJSbBrULUtFirYTiuAKfZ7ogkJz3a8wkbhRTqkEbQD2n7rkPFLHCGvMqjPgfUhMDZjzi9oRv59",
  "key11": "2oz6oTMbyuA6uhdDjK4a2gNKm4XsdFsYWvDrnFbHCZGmsspBD6WpEoiKcJXWxUazyFmXvBP2keRW4hrjpk1TobdF",
  "key12": "4siajr9CeNJErXK9jh7CNBoMPXMAJaDED9zQGpQquboor6vQXZSU1ZA9k8kx5JwgXBB49NmAeG6QF1y475ofspGj",
  "key13": "B2Gs94S4TeaP743XcfaA6FKNt2NCtHukPHwmP3pHtTNhroJP9QuZDBT9xxmGZhnjL6PPWXaWpVkFjFi4pnMxWqG",
  "key14": "2hgUzW79gxHAQp3ZE8SsmvAjNSf3h9zVW6BbJAE2h42WNFVRA3oQNzQHSM66dTRdWVyheyv1Ab1AaVvQWfvndaWN",
  "key15": "66NNFXMZgS3mVZon7Ap4DvbfeD21u2Fqnhfqp7SDmqEJpjkNRYtaxE6Q8YriusDQjXqJsqWy2cQmzLbA1rdoyzuT",
  "key16": "4pDqoH3rosQz8zcAke3TCdA9qD6W8Ukg3WPFrDHaxjc41sBmKRm9A4tYZmBn2qynSSq1wYnWt7c9ND6fWFBWVpiQ",
  "key17": "5LsrkvDVSEXx6DPqS3Lb8osyoDE8GiWththtRgYVhUCpA7DGpfgYrTDEU5pfThirP5ejFKpxaxppDF984wTijYMN",
  "key18": "2PZyKjmQfNLs7DDt8Edw1TNVhCqs86XtVEGyndjGTmvtk2rnv8mUznaP65dnCMnXUQt3511jJgW5vu6mc57bqdSe",
  "key19": "2WwqUbS5S5q9WUDBoE9d3UQ5Zp4tJwWR19DRQWBSY4HgfU2FuEqkpL8tQmXXpsG36VWSQNwoXD35923cXyB8UFhg",
  "key20": "4YhL4Ru7HEfp6FpP44d33MKm6PMSsyRtPdJeDKoXnvcLPLpNPQ6xR1KRYBn53Z2Kb96ZChseqKYFy2gLcSnYhDcu",
  "key21": "5VbFrdUW44gR6UBe9793voaexceBjmVhWPFUzFeLSkpNhmT9Mno58gSs5246qRfgZdU3x2UngTtDQVxQsRZ5oR3R",
  "key22": "fbQ5MbxJ3QSGMUszGAqEPSuKccW6Lerhspvsw8DiCTc5CxRCuGEXEt1MhARfTMdwqgiQib6BuLSMcW1qYxGVM3U",
  "key23": "2vVC8LMaPhu3msJVptywoMF7HCryBBimFn75NRDYSwGqKMaQzBhfmGJMNEHLcRMdoBkWbPE1jU3vWHr9dotkGgmv",
  "key24": "tFDPVAETXwUFxBfjkAakqpXTRKRA3n91LexnegVu5B6wg14BLrUXDiMzM3XhAfDyAcnkTgCkju3p7fLHhXpucsd",
  "key25": "38GxL94iPYfRnjMSFBkmMRJwQQUNpY7HvwMjqf4uqHhGT2SGENUgDV6u75EQzUqKBhzYzZahw4McddL9z9qXwofM",
  "key26": "61E48JehdT7TiyTxaEjedq1ht1oAEvnBu2q3yGU1few3YgvKYwGmar3pwfGhdhobvCRrsMKUrND4LoYDdFFwWaug",
  "key27": "43DCxBkpmC26255gNpg6V3wXbcWnL66MEXhUNZ7cr9vNNsakf8UivjHkbkhugtCnJCs7qkWd1Jr6KdNvfz5LA9a8"
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
