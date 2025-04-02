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
    "2FB7bmhBN1hXNxgeRLcDJgYBt79ERvcc3Yr7Zp5sSLG5UnstMz82VE3uZFX9SEo5RSXMzgjeNrLnHyzAV87TQedg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Yp3VTuUQhgwCRZwcamvapGs1e8LJ13sRMb9w2A4ixcZuQHywNhwjv7GfhmBq72MJkVpiPxGuWUYGdsRkYUCCe7P",
  "key1": "tW7EwwSbSgzkhFajMK7tt6MMjw98Ur57KjUrQGh1Wz4ztGBAmAWqVbBUWP2haVBZrvSiS4PfRs8oQvy6B2uipyW",
  "key2": "3wGL5zibHuCGz4a9Ys1FuxSUWzBEWLsrjbK2qaMPoJ4UFoxuerACBhXUANVwcoKDqG8E1rmhJ2XLYgvHQzYEz4T6",
  "key3": "38btFm6LSgRVs97Zx63MBSmzRH8tEVuboTsUNn2rjmVsbXDfcXyF5PRZJ7ogVghcDYg7KD9ijtgxkt289q6xc5Mp",
  "key4": "AAuirm1GQmtLeCEkj7FhwRNEeenpGx2QtHUhUsDMjPbZhFtDm6peDKBmkhDKUd6eEr4JmBDdVuSF8hkiJsotUy4",
  "key5": "5ZZ5SfTjJYvf3yJFghPvLF5XxAbA2s3UTSPBXwUcZPRGCcT173UTpCRpF7zXrZcSZ2x7Qs3uVb1nPAw9ckTBWY9v",
  "key6": "51LSPWRYzuZSX9ou6VBAsJuHZA61srvoE5fszmvAyBWyd2tjzBuSZ4rMKpQRqLTKPHc15zxoMTgYwaqGDdiXch7e",
  "key7": "5GU9yjpfdxQ2r3pcaQLgYa74sVwQc4XxrKxnwVZmrPutHyA6ipHW5wkAxYN1y4cWzGXnuJMwTU7Uw7zGfMBHXPBX",
  "key8": "4cz5ZHq21Z9P6ffwJQgQfjc8Z5JMYkjkhicfEaVNkcNriozXsga8DjHqEbJ6S1bN4D8UNk3Cfh2MMKwaRhzdHnBY",
  "key9": "4gVkD86GVoZxF2dYikU7LG6PmhU9Ti32QJ93UoWVQRSdanQZYM87rNStAJLR4TC349b4jvvw6hmkTB8zm3AsViyQ",
  "key10": "XUkgX4paQdvDz3DEphPaTbV5MAZ8dKx1vE4EvcPSaGwqp1MkydrfZCSqeoYN8AYxbtTGh4Z8VPEJGQ2UQRdndHx",
  "key11": "5TG7mXMdThi9WXfpy5NTztvt1yTDUWMBd2fEfjvWNFQHtVkRWCP3eYK2qTFFsNFBexAVm2dvRh3GvRGUmzqNVvZU",
  "key12": "5iCjapgTrLjxC9dRjyJsje9kmmKnC4Sk7NFQxYr15krqvA8R3Geyam25Y2vFwCt55r1DdPsmtdhqXAUk4C4uutnu",
  "key13": "26WFFcDDkiipZvxpya8fLuHTaaKeDadraGg7o4B79UwUxxPAvQmvrE72PNsEeEkVCDJ4uoJBGaK9xdPEh3Gquupk",
  "key14": "hTSUsqpVnHws63uEBHzLaxfHpRsdosxA4whKJ2ThfCiBkMMS4Fs3TfLhDs8Xt3WHUwvNvZPjC13SWkXrC7F564y",
  "key15": "5KvzAP9EqPaMQrbknNwHzNVgKwesxpaBXyvSvVoHsD3bDq7DbaEynQS5vBYFzDktBwqgUZjDJMZBD2UcWBthCmac",
  "key16": "54R3KH9buVJWBMNHYSuYvJjSNtiBG9ZpCfxT6uZRVMPmDTT6ijK6hpqQbbZxZbhdGUNZCmUz5FQjs8Z6H513FjBK",
  "key17": "2TZtUq8DZWi73cNSQ5jMAjNZYfgFwRuAtmzFeiMUWKg2C4ppEKNPYExU83CUAjHc4kjq1NtCnrB1h5sfX5zWi7i6",
  "key18": "3L4bHtgUjLsACtc6zgDeQnHNGcCieCMhTs9daWfmsi465Fxc9QBySVvLMKUxyfp3EQDzfdZSq2u2AWm22MqkxonD",
  "key19": "chgWs7wK3PP7c5WhwnnkjuCtFK1vnsStp5AJMadomWVr8JsoZBsyAiT4zXkm2HaEW2eL58Qphq9Cmcm2z25GNCw",
  "key20": "aG4ZMJ1HBPCgCdWqAQweTva3yB4NemmVbbPJPvhSBr1oCSv4n1wqrN8CMXcHyjZMTr5LMYfHBWFPDHEp4WQazB8",
  "key21": "4kztcsyuiBDi7ht9PwqbxBxpr5BZWyBC2wc6xN5pWsrv48WbwABGkbqs9ML63Yv29d2ZmKtunHo8U3zVzzq2c8so",
  "key22": "3AHgcLg1Akyn7bcEZ9hUkd84pZBDRCWmNgSH8mPUefVBSixQQcvdKEDcHM97Fyg5gtLNi9C3iNjX9UPVGSkhWd9a",
  "key23": "2LAfK7rNqqRzJfCjC4S1L64XBqkKUxCXJ4oJVhDM7qF6vo5AupmtHq2nQXbvV2UZbTtYw4PJv2bgWSh2UgVsvzEp",
  "key24": "2D5czktikfwpVNRGYAxLaefVNj41k53WTYDN2uq1M9XEbhEHULrNAKvS15RMdRD2xc9rGG9qTMu6xTs6pm8UoShk",
  "key25": "56pFiR6DZ67AAUmqTswSP1hWDgYZEUwmEkbjVuo5eXpFJ2F89StCMyyfPn5wmzeWkSUzecszLqDCtVE98eqF81Kf",
  "key26": "2aSg6KrwDegZkQphS7AXH57rm9YQ11RFFoozx7BK4gzEEhb9JcDTfPHk7dQiqQJtPe6a24dJqbpuPmoxE9EveRkt"
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
