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
    "52v91VEZ9bGZ4obWSs2Wv9QfdcE3WQxwjtuh8ikB5EYFstD86UffiHy9GFJeu8eowqsvfdwd21dRYmiW3nvB4AGY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mUq2WBJ2cn9NbJJ52gfRhPtHPsiVXsC1xyFY8z3FcNNuDDBrPSXfM6oQwLBv7wGfmCBhGkWBuC655NuwZkegqqp",
  "key1": "4EkwAymFGikZcEcFAUGUuKGMaC5GgcPz6xjPKc72ngDMe3vjWpN7oceAmCSUhH2qqNHHFk5RpYwUMRt6Z1iDgpaC",
  "key2": "993DZDddVTbiRg6YwFA3Yc7wdbyQk2BmvHH3EtQ5ayomkcRW2DeY5bq3xQEWZqnJUXKxdbagyDe1hJUdjgFSrEh",
  "key3": "t5ekLNoJrDK6jVAgcYo2o2gtEd5wRceyBheqPAM8Bxyie5Zpxe5xgzfVcondAdiftfFHm1HKFTx4e9gxqsPoXQa",
  "key4": "3epnuD44V5SvBjuvMrbpDLCuNPnbEL89hXBkpE49ixU4K2zzWCDQhfXMBUFEZJaVLA3V1fSmAWC6JFtDqUmyXABw",
  "key5": "3nvDN5aNYBMseYqskWPdg1ujUyxu2D2JrfNWZH5FqH3bUEyHSmU5XR6G2ftWSXhSWmZPxPYhszTnrioB6Z8KTHSH",
  "key6": "3dfUTYuKrAcFoPLXjG6ei2KprDYxcwmNWtaQpV8U7WPvSmgUy2btJtP6zm3rcTVKf4P9fKkUi8GeLUyErqr6sPp",
  "key7": "2H6wx9SNq3g2UL8GtT5yMRPcbK4jKq4CQkAvJfRskcuhQSNLjWvAjifVSnBeWm8kRXWuLroxiu3ggLmTsv3i4jFx",
  "key8": "5sd4GFqi7GVpztF9RZrCTYG6D6Tsi9sTR2rb7QvBTG2wMpR61vBP914Szr8dunCdU5zNway7yYDsfPMvWxU4At3c",
  "key9": "3uNC1rcAu919SMrSiGWJECZVR9JfoGEzNmd9DpDZJqXtdvScbAobpXxkSyuWJ7au5YZMCA6ps1UznLAN8cy6Xn3y",
  "key10": "2hzVmV3jnzy3V9jZcto7BVL6A4kiaoC21FKEpnWaKaehALui9kFjh43sEYGXa8Mgn1UP2Z6Xs3PQUPvTRncNM4kK",
  "key11": "4MwGrVcGeypyB2KrUkEdHcF59wUqEWzgi1dZq1hsti7tgT6VeADZCMXvErNrJsSsw5d9uckHMTRAAi4fYvf74SHo",
  "key12": "iTeYzRVJ3yHHguyVYTh47xyQU5RgHkDYnB6kKW9P2vT6XG1xzHFj2J4h5gCnh1WhBPxzqttoukEyXf2crbRLJXE",
  "key13": "3cCfybswzq4e6uLqaY7op8jDmHYdPSx328oJpN3tKrL8UXiy5Fshf2uK8mkhM2ypeszG26uotGkcdEcxCGvVP6GJ",
  "key14": "5tvy9ts3GMXYhqZ8REh5wcNnREA8pBr9qtnYetQqxvN4yZeKu4iZbwpvdffpZZF889UDRHcohtzNCRALUy2ZHn96",
  "key15": "4Ax8s3qtUEfaALM3toUDWZmsVYFmggPVjSUWfGdhuYGPpuXDCUEHYUNvm9NPczJXD5dmeFcY8yBMjhqhu3TzZ3gE",
  "key16": "2TK83JHpMGYoaD6L4r4yZsmTRq7F52MPno142LFQ9S7Fgfo4ttwzWwhxcTGxxfCHMyrFwmjaXLvHL8dpBfB8Yy7R",
  "key17": "5Mku2BeZqhciEG7yioBAhUru49j7A7CuDRHow8s4VheU2q19qMNukiqP38YURLZnhhRBp5JPrMkCpDvWXSiWVeFq",
  "key18": "4dAN4uMETMTgVsYy42MbptkxKXHGJxhhSYA1AAnEyLg5R6v1YpMBAeeMM2Urhmwh9zXAZAX224kMuH8qmApinysz",
  "key19": "5FCxwmAXGjs2b3Kyqk5is3kLgQtoj7fFENWg6habLatCZ7Y7yDkjA69WHVojzscs2h3HJa5b5ghVrygLZy2tzTzv",
  "key20": "3hPFo5oaHRYrnUTAoNBuuE2s5Gt89VFeKaeuxnuPgy9DPN7fQTzXcWDfLuu8qdo2CL7fQN1t73fpo2E2bXVsbCsF",
  "key21": "2hWjdtxjBjJ4Xm8H5tQaztDHZQH5oSwe9ADxdxcvsVHwSL54xqPMUDSnfwFX2edfQNXDv36xAeoWt2vKkPxc2qFP",
  "key22": "2V4xpe4BAYoGMrkf6SwEJSAQuuogQz3vqrcEMnijha6hTifFUCkaUHnN4cvtbiVbY5yHiwzGiLr5DgqzmCiAn7dL",
  "key23": "37xctAxZNJLNWTbFi7vj9YiJFvmixUWQm5RNEQsAPjvmtaXNtA2if5uEr9JeyDGHost1q4kdy3Fk9Ye1mRz2kLQe",
  "key24": "4d61bxTHk4a4ufxqoqgZ29s6N5nwKx1MavnEw7JQcSs2LkX5WrUPby2t557SkEkMDUmSDv3MuLzTo1yhx9RtgpKL",
  "key25": "3btXcb1YZVkoo9ESVCezPuBbmosLgq56CW8KrmhxoLQCRmtHM5VYCMgqt5fShNGjAXG4pwP8g2rA27iYKFuvXkQe",
  "key26": "33eHf3cHvCRTBoQqqx8Lj9MTeU9TSNdxwScohxREGUEWY6Y6hbTiSaKbbWh2GwGiiq5GrS8L5usFKZcUjpLeSKzk"
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
