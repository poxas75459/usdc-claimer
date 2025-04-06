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
    "2Q6Fsrz6M8PAX3nA3EW9TWVSdZ8nCXicNK9a75WKAzvA8qvtKoh3FxeX9Rnw4FQP7yZ3faPUVf6ASjYRuE297JF3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35927PH7VPKBcDQjTGafUQPFLbK3wYkda6pLweBpR2aJNbdvWveSnHHkjvVNcdYMka9Fsv4MNGRUBXC6Kok64RY6",
  "key1": "2s98tV6ajPUgTyKhB3HbNRfDJzUEq2X1nkg8q8weG2PJDejecTRXNovUcbKSQMXcwTe7po9BSerUCSzRLQAd2ket",
  "key2": "4SPmNuqqVLMCc6uqpWZbCs4wFJQiCw1e2T915Y1s7em4UubfyX98wu7Eoj3meMoWF6XuSUVxRP79ycEaqdgH6JSY",
  "key3": "5vpVGVNvcNTeA2BbGjSiUnmoDtdJSpZ2qNR3jaML3TdmUwS3D8DS3Mhqp7EMUASGepgnJXCecStDuojSYFCNGbLt",
  "key4": "47v3Lg2FuHMA4ryYLcHRzhBURu2kDJR9USGekA3eGwbqZ1pkVNCsRT6own6Vo6eJv9rxiaCuwuqNfXYM2RqqUWrm",
  "key5": "4aHJBDtFXALuWdEoYTfZEhsgte6HhAPu6w9DHuhbij5rpZGcgTYETKnPrtckGeUci4hzc2DjtsxN2y2RZ1HYA6E3",
  "key6": "4Q6EJ2vWcTTYq8pa5jxybzQFksTfHmpTyiCi5webhemZE2mGxiGbeJhYBz3BZmp5Gq5VpvydypxuWHJjYaDERCWe",
  "key7": "2piJgDRqAgZEJuZGDPnNf4oZro24mggCEFX44NDjnv65BEobKVSB75trKLGxxu684fwWKU29iaRa4PxRcUhzZfQJ",
  "key8": "aJMVBBWSTFEBJtLyfdJYByBn4g9YA3Zu4jxc6LqcrxKDngpT1XMUkKjTxoS4BPBJG2vXt1hpjEaabMn7zqxuLV2",
  "key9": "3Fq64Scy2CcKoGfhhGBmPd7wheBrbKYJSEkr7tjCEH9pk325xGc8DUxMtaXHupyzCwHCuN66Njgof3vprR3hMdPN",
  "key10": "4kFvmo4V4rRvX7poQGzGdR8xKCFT6iTLoWcbREF4zyY8UXKMAPaA7H5JtAEPY6jZ3xBnCBbkDcTw7vx73GeXJYR4",
  "key11": "5AQV7d1D2TdyuTSAQGaUG9Ury13R76TTRRw6Cwt6weqYp4S4hvQqB7btLpHdHWqivTsPbFeSJZhfn2fhMoKnhiNf",
  "key12": "XUFAbnCPW6tApQ7S41LFhqGeBdT4hxT13x6iDHnRSsAD7fxvzsNLXCANTdEfCkMkAEwZaM24VYGne3qeWn5Ki6L",
  "key13": "5iY4sRy1KSkeRhza7ajNwRTNVWoy1CDXmmndmabR4hM5Ld2Yfa63Bp3fuFniem1MChUGrqQ87jJgneX3oJrEYAPP",
  "key14": "3saf2oC5BszoUqDcjobQcvTz9NCmTaVcSEkCmKUE3GWdQo22425gKXtGYSDNNPfvW6cWUS2PT5C7wrpvfqXjqgVa",
  "key15": "4mhWzXDTedMRfApSjvAACNUDU6pFFZsqe5pGgRBfJg78TCKr6r1K3BdrXnvNU94hAvomAE5ieQzXtLPJ4poSAS6m",
  "key16": "2N9MF9j1thspju8s96sQjZYdkmokHyv6yxnryvjpJKnhZaP5SHjmqF2GhdjoRyikqgp36C2PCJX8ajAuQaxDuXtA",
  "key17": "2cphAZX1rns2UACvuJJZ6xRKQhYojSVDC5mpdLuFAsqn2hH3gPnV5HXBMeyh2HbmSNG8Z6Xe4JKafWZCPoHcqTDQ",
  "key18": "24DbDbpz3CiuouG3zHyj2DTA5XbHwBbBfikWuZnujoinydBfN1mofsFqgX1nDzThweFzrq9udtbnobqWcy5psb5H",
  "key19": "bHGD1WZSQdS7MNEySxnvFVKzxcwf7UHP6KYsdocGDmrCvCdAV1FEAhsWXbozhwDvpcuVAUceQTvC5NpFbSvuTaY",
  "key20": "4jUHGDfk6tEm9xprbSzKJpcd5fngrJrFXbHaK2ahfZnA9CGx4wAzcux82h6wJzcHhwk4yXGtLu5JEHLuqZqVuFe3",
  "key21": "2HcYDvHNUwqQitgR9j26anXoajzcNnBW8MknuRHVLBqeihybHBdzaUD9rJ7zNB9dAVEajfLmjBHtJJPEWKQgH5S",
  "key22": "4Ba1CUJXSkYuRHwsuvpgd45qsv4eJ4aiZbww4hEkP9eVnakJfiu9iwjAu9cHtxD7FE15q7ewg4JbAgkQjxT8HChK",
  "key23": "5vqgnPDM5qaLivUBQE89JTVUutDTkgoniz2BGnLsRRGsoNhXHyJVyR7u7L9aSwp3UcqdSjjZetHTcjionbvdUqnd",
  "key24": "5hgT6SWuBfxGDzuVveCQcytBVk9Czgw3gcp8ZuggsQQU9S5tH1cqKvEHHcmkQa9J2tBrnaSac4c5ez2sxmj87Mzu",
  "key25": "dS8J9mSNGKevdngShQXzib1NADCwXdmDyog9pa1mKumHRLjf9WHqanbG2TBnq8owKHV8jbCmbcwUJ7PBtyhn1P9",
  "key26": "2eNKqUbVqkh5cA2HSZnBSLEwFs9dRJ3Jf96HNRvinqCx6vW1cFH8ogjywpTaEHJg2o2h9KB6iVWEstZfansKAFSx",
  "key27": "5TosfW8Vrdk6h46syUcgrsGD6JYALByZdbQjAxUCcqFHwnSJ1f1e8h5ZtA5k9E8JxMMXTVoifatoGrwBFKe6uAZH",
  "key28": "4UBPBdcY9b6MD1CKyrCBsfb6zjbJPrexcqw4txm5GHR3sGjF9yW45snpZGTSWUkiZ1oyfG9mEByXyFq9zcb9Rpvx",
  "key29": "4A7f59No7Srx1SYbvKLoMazs1A27QQTqoh89jiVH9Gw1aKfZPfW5hAABPr6HApZQDgqAJ2Lr7XnL63VuRZS5TmoA",
  "key30": "62cN3eyhWu8DF5j6KfbvVXiMw2GTCYuuDmzr6cend8Ms3taghz4h7rmz2zg6i5dzwz3JU6dyGGrQ88FkvRB7ogPU",
  "key31": "4Zgk6ku5g8xhxTXGpwfW1VhSeawY6dUTibrW7kZh2MR6rttXEYKVtCgAT5wgNB4JCsGstLPjUftqbq8okFG6CxWP",
  "key32": "2Ftzq9e5efXcqqN49HughpfTCx9Bxro9zF4DofpYuzLZ45Xwx1XDHGwiYJ1QWXpPHrqjMUEAksSkgsVRhTbMvmas"
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
