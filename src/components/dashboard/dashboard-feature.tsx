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
    "4dGjkwbDyYtcWSPZpu5vvJeLCTyfbiuy6SGrPa1jznXBY6edgK2vqgzdrXn7dhzBVfedFxCufEKedbhKPincK2vx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49Y1J1dhgXyx9qZMUx7iSg2ZSYSPXsWB9ZdotTKtEswtLerSvWtG1vmJN6E2AKjAnsJh9Ygs5TypVw1E88uNVQXz",
  "key1": "3hgT7uRGhsU1teusTaSpYEBQweRCgkNuHfj91m4AsSjvSt1WPMayutHRvagpGqyQ3Jm6VFDCox1xRWnxgWCFL5aY",
  "key2": "3V4DrXqPmgKrS8rrS8y15ev8qmEE8qYqYFSrc8Ag5NuthT49CswFjmnmf58j8F8qqCw7Q7FCWYgw1ZTFqQGbcu3U",
  "key3": "3BTnfu9sbMC9vV9D3VzuSTvuJtGYpJnj7QdoeKYGhMo9fNnuhxZ59gDppyc4tMup6j9QM2Y8cQGkfSQpYq2YYfrJ",
  "key4": "2AeN9aLBBPFsT6TVjf5MgpSpAq7uoVeBnk5tidbwojyYPHmBbhY472PpGxphCzgU5LKh3ohsgspyqXZyjzzxFEtk",
  "key5": "3b1UcsNH4J6DEZVDGmWp6UKYAzKLAqtHcb3QJ53Sz2ZGFhpDcwB6zkjyiFwd9jchf2DqSSD4WJPpd3ZvrmVJ3s5u",
  "key6": "5d2gGuF8E1czEvNYjdBcG5RGaUMiqbsv9ZuHGDybchncAUDd78MtkrdEdpijjDsrmuY1nDsX8N73eNtukKpJjzmA",
  "key7": "cm9i4fFrhQubJhizpJsKvaVxJHPJ3r845yc1Cj2zgrFMZC8tEfnuxP3aMEKo8i3iw3okxXDfid7MSuDpkWJ4M5v",
  "key8": "aqBqquc6cTtteMR1ff5rQxADX7LKPjQWKurTMeDJCTt7ANuRfULBovqkvbmFPCpBn7qDiUFidCE9Rmq46Mmb575",
  "key9": "3LYj4VopPbTx8yfXoT7JKgT9FDFmCDWQEYiBRg3taiAatcQ6nRGtNRM28D4AtUGt9b5mDPaPMKKBjMhBAWXnKYTK",
  "key10": "4yeDn2Paqw4v4vJdsdKK4N99wen2ZYH3y1UnVD88m77P31cgzsMpZ9ezfhfeEKKSaPfSY6uw5ZsM853fpwS3xkKV",
  "key11": "27ugovBAphCykqLny3h3wNQwJaPW5jHTBbtZJ1DN3YecyfL2AAEFL8huV3F9rQXiF9vh4hgm71VJJLMpLy3HQR6A",
  "key12": "41u1P5gLVQgXttKAfCpV2av4AcURETMco2g54MS8cKRCX9TCWtpJ4CFgWe5LCnLUDveAo6jEDZPTiP5xqxeM7Tof",
  "key13": "2Y952oEBD7D8Wi6JTnZXUc1syACTszoHjV8hW4JDQy5rwfc23oeFxb7CD1BoepSumGug9C2J38MWVJNPtJVUoyHM",
  "key14": "55Aw5J84kzxnkB2r1BtmQAkWHbfHzwbKcfPREB9wHjBaRSXAxJFjaP7QLupcSGorzYQvY92VEnTnzy3hcLf7DrmV",
  "key15": "3EFQBfoMFva5thcvYJGfGNJB61XesXw83EhSULyeMckTeD5FhQTP28TtbmXTd67HtVqLQhWHPmqpNzLyLq3vFcur",
  "key16": "4D8ZqJyjnZhYoMvwZYG8bzU98QHJ32esTyiLpCFu8DZdEthewjUTTSd4Mi1jV3rUWwAQapdxXcaxKD1r85pE5pkG",
  "key17": "QHhHdAUUVdR6ifKEYbBNnyYzoQ6NjzKrk3AxqkBsVdBZXMwxy2oYPKpiEPr61vhDzeFfa2kuiCpry8bSRV2u4bV",
  "key18": "38sTLuBUjUgoGGjRZWsZAUvmZw5oqJh4TMJvNGREvtHqjHDPsp95HMEjMvtSjGNigLc4yrvFaknekgnajF3pFcy",
  "key19": "o7YG5hT8oRYbXkT1R4oPVp66rxyrW7PJBQNb1DxHrpEtAKbfka3ag9aurWsSq98kNC1xtKiUmBKhvnEcBtq7zNm",
  "key20": "3U9yqadwQrWe11UpiUWLGBSssQwbXaueLW3rLVgtbKkxAHrkXBihZNWNuJWLHn4TfttnNomkXg7BH2tEHxtrC8Gg",
  "key21": "5JirYw2mZzGNLnQSkBGWyJWESZbytGNecMLs4kC59rW2yvKfA3wKb8pi5WPNoiyYfhZBDpHkyBXQPJ7BnfknNyJH",
  "key22": "4iXzSL5D3RApnT5yoCjaYFmSNYsrS1fpL6tspdCiNA6WaTUfPRseGoS5XpsX8R2rNrDYq9t1XYhsSgoyZ9D2NgxQ",
  "key23": "5D7bBFrN4wSdFM4nYGCBoeNhq4yUGp7Ej4cBrc6girMGdwxNauZfb4YBgRJwcfLuoMFz3HL9ppaP6w2fazUPY4C2",
  "key24": "2XindYPbqsujirojEt1JYBpfr6CRV9sWmV4qfghxoC8PgsT4rGV3ky6iiKzZWXCjL12sXvmjAMtzbu1ncFqogA9a",
  "key25": "2ZvzfemdJBWut3nadXQM1nXFSn8PQ4DXWeNn66YfY4VEX9ZLAdfd1TAEPvgTCMYs3h2HjsCE69dYGE3cGymVFjjV",
  "key26": "WL9pcFXJyPtJrBihTVK2p1sWKG29zoXqDAhyn6jHcn6T23LB73FC37wXESvuU3iX2bPb51vKhZ98z17fspvnDCY",
  "key27": "29xfxTBeE4mXV9xEWCiDJWjUJog5MnfEoJ4kKF6N9KcPvRYBxoe6n93uRNZNkDM2PXKvpYSpFUR7n99376Lpd1gd",
  "key28": "4RK51WvcCxXQctYeRjMzVF4dPuTJT3xkTH9udutBfNB4XQwgN1LN5eW2UckZyDde4tV3cH8K5btVtxsdZEUv8Yo2",
  "key29": "3hQgpzkUVFLc1mkuhtGuBrC8VioCgFSMi5bt75izrnqBsdJNQaXC2VJYmyTsaLyqCNSDC3aXjd5X1hVqzBwxLtvS",
  "key30": "4Fge2Wp2yKN3jFXB9ipu5x1x2ixs9nf4PvR6PMFLxmZ8ZuCkEiGoYjLe7rxQXwZLhbi8jGcXYkmEUh41dU6p4UA3",
  "key31": "3oGW8xd596i7gysWHnanmkQrNv5Phm46z4nR29H6JNPXh7FXwVjRzNCrbywoBNXp5VHBg5FVMz4Z2E3GJnJwzk7Q",
  "key32": "5WaVy6wUb7GdGEpWfi7i9bMLaMU46Eqph4hDHWzYwdD6HjECTV3qgb9N3QPrZ1FCgrpUBxxT2KcuBuWcE6z36XzL",
  "key33": "23YpGFREUq1BKSo6HwDtK1qWGtbAEcZDwjdv5eTZhTmSxwT2Mh5HoBiDg23P8MqjyXoCtXNmmc2rov1pcmMeciCg",
  "key34": "3ST2Vjk4Jw4ngpKyvkpPX1NACwMjW3H8gYTWXGq3f7bNznhuHc4tasp8AGLNwtXVQqcFMGkUUZ9UeF4dN87De7CP",
  "key35": "357GFzM6NZ3jsyXhkJfoMepUP8LqxZFWTxbfDPo5MWztEWum3P5aDj9ycH6f1rDzmBQJxfsQMGyfnwBLuezkVxWh",
  "key36": "2FJa2Gx8AmqTTiMnptMbB1VL2rKJmuYfZq3Ht4zwtS39YUdZX9NEoRNd8mfrXyXn8pJbEWJ6zUbLHHFGUc3N1Gfw",
  "key37": "AMGErbNtb1ir9kQdLVtU8mLLksfZKPionfgo8h6fxQFdhkMAVZNX87ftFVi9rxfsq7wyuMpBDANT5HeV4CdsS9i",
  "key38": "4uEBwhJpQc9JD37Mj2j8ksQEpMGTiMoC6E4gktfCjvVVrQMHr4kTyaMrSLuSEJko2kvPYUZxDoTr2GnZyMat8DKK",
  "key39": "3iwtjUxEwWnuXvBaZU4h9njwQf2PedRYUgreWfqcswYnwrpLM2Mo6deb24Mg85dHDS1nP7A3DhdmG9rhE11DngCb",
  "key40": "5BTebA3iUa3tGSXYxFVwWw5HJRTUBVcjdESW9tmPvDZuz6dYGJ1ushBuVz9VQctsoq69cL2su6hjyXW1RdxbQpWT",
  "key41": "2kgwcrRS67V3crqj2BwUi4DRs8VD3Vx3jQKXR4yPKPSDzpC85zcErCei7PJ3pK8jvLwKqHJP7JENsKEabTyPqci1",
  "key42": "AHGri1FE7LxfoebCh3Yz3qXK5Zm17XzbvSmQ4yMpiCdeZvkwxeCZFU9ygi6WzfFWpQZ8XN5gmpztFNydu8mN5UQ",
  "key43": "63obzJmP8vVNxAmSVrhnrF4MAUy5Q1YDhqGifGoZp5EKZFGZzEjkxgP2i1fA7qVAsTf9CmMLGTDcougiCPx8kD3m",
  "key44": "4PFMdTZGsoinunzuwZCwLTfa4CWbSK62bCaMxnRvGxtjMnFz2VjAJcffe7qt4zfxX6qkedfpGthBNhJaMMDca5jN",
  "key45": "2uC1K5LhKtiopTJqNXZEdrFSpw987TPge1txySL7BkDY7B2oEX7vTMbGUPTPyk3BJjoPui4fwmPDtGAovES9bvgT",
  "key46": "2fSFVtvSeMnKDwbwALcM2PXz3gSxGd4d24javw7DzxzYRcjhhqyzHKWq9rmwmdDdZksChpxn5AwqmTSH7j32fs2e",
  "key47": "4PGdGGGCHVhxBm2AsXHDTjnQiHj5Z1bGzMN2G1RcLPkqtGoWx2kPFQwXGjQDYc8nnCyrZwecm4xgAcz39gPsEZQx"
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
