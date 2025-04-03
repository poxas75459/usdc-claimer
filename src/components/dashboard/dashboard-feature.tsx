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
    "3rXs2zyJcUBhV8zzyoLJqjHXXXDv4A9iJCbkskcFH8xkwAx6htC66xDFGwn95E2E6bLfUrvhfKrDoNXrA12aWQK4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PGnmtYzZaXv2FcY5F2zwLePuQBeXhwRK6GXhCdDR5aaLvHmWzs7kQZEpsiQr84owwLjbULGed82YYMWKuDQQuNM",
  "key1": "3228ricyWV8p96rwF3uoScHXgdq5k7cyDr15k7Zi6VyVdaVL4zvx3NH6T82K22RkZHkJWjk2gV8yoM2E2uuJdzYx",
  "key2": "4wtMY6xZgmjY17yyVujH16TAec2xuyor6Wimkj1tcxbka7CvuMHzMqmunPc1UYa7DMLocALV3d7pnNsEm6uaTAAZ",
  "key3": "rzXXYdoLNmDPwEfauGQajQZJRSVWnnQ8SbhRwCX3Fb8ZAX4tqQnXrp7SFnst7ngvt4WPbajezZr4WGFwwv1mh8P",
  "key4": "3k1kbFG7xCXGUiF2BCxhdGc4P68PPjbwZvtcrHCxq1BqdR62f9m6gu9jYSz99mRzQspbqCxSwKGEViNLM4jHhMFq",
  "key5": "mfVNuxNqkJsUbXHnN4WAJ81RiVyQey6XxK6tiEN3rJVFWPan3sxdPMPyA2Go23ydDefWgxFzaBwfsU7FKibKDTz",
  "key6": "3WGG3WzT7UP2yY6YWbcaRaUfWSdEWxSF3riVctmuWseC4P6UkQPGKo2GQenHmDpvPMYLYsSqi3aiuCu67dqM39TD",
  "key7": "2HastRbn3CkoLpnzAYB8BfyK4pnAtLTu1t9jCYdaHDsDfVPqzh74ENtqa7WYfGBpn9a9XcM1d1P6N4iRkKbCsC6X",
  "key8": "3h7CEvE7RnSiJBuXVvXRHfjtYWwEkAZTCKThBTcdqfVMNbEYnNYuNAqbDkkLMjH3czcW8fXnMye5fk2d1P8kKdqM",
  "key9": "2v5SJabgNqUCyxseoKsT4MLcXiA457ojiFrpXjMKydBCHaNJgpYqLoRbeGiXrAp1yL1pxT1CkmhuZH4mKefdMNB",
  "key10": "KdXzKzNBMf5GHRL72tyYCfDqMUkpbwawB8pJ8AQz4YQTzFLBmYvDHzTu3JMi47d8ktHvTNsPWeqJK64M4FzzURr",
  "key11": "4udUcZeAn422nKBNEkB9kiug4VsxBWCQWRkRh2F8REyijdyCtFirrfVfFYWJoehvZdMSjNEebP7X3bDknwgFGMxX",
  "key12": "2XAHtGcmZvysof7QCTfHugJhVHFpXDZEDYjPVbbxNg3F4xf9XM8FSTBbaB5kcxUdgTrS6UDT7ajGb4gG9kZLpqVN",
  "key13": "3FKPiXfTCKb9hsTR2UuP5DfwAfVA9MncwDuqZFNZ5Svso9nFpqHqy3kCJtJ5BStNe1RqvfGFFfJMPZvVbAHb21H6",
  "key14": "36bNVABdShvLgR1eqPJgLnCjYet3gWi2BpDZiy7JK2AMm5tuur5Y9rnasmuj9a5QTUyEuyfGLDpuNjkBhhci5X9e",
  "key15": "2kRPVrr56gduG5v8A5AKdY8JsD3Hf4qWYaW8YfCz5ypcUiCExidNNnEuW3seGjUDezip3MSWD1zs5KnihewveWcJ",
  "key16": "5YMLSEaG2VSZkWwYqLkXfbryQYCFsh3oLDsA4jpH3RgRbqpf1MtQ9upazRLkKmNkuXZHJA7QypRcGsMTKbogyXLm",
  "key17": "5559M7Kjkq6J1UQW2R9eV432pVM85PDmrCBzfxY77u1aNXnYdKu7jsZzwHYVyY4qrCAboxQxd87fFBL3xp8q6vpK",
  "key18": "4xFG7NND1LbqCFybcchkh64d9B5cFABQqQCF1jfeUuL9Ch19CxPj7d9pRgyZ5JTRqQeSruPVyyJjTAruPECzGd6U",
  "key19": "5GAcBfbX1K2KwL2khgymwUNwTBLJkVZn5j5xyrX6tuN734bUZWCKmnucTMoSA4EX4YZBXF8N5DoiEa2FLA3tGEja",
  "key20": "xz6Lc2LyKuu7RszpxzGBvd3Wu1VA6iEaR4dkrw58zN95n7qQgaYK1M6mNLceVcYVVXRJrLsTMx53i2LTGij8CLt",
  "key21": "4oh2TeQqoQspeHixsRu5hhkg9uem68YJEH2q2xiQZTdX6tHmLyvQnmoCFuCpHfj5Vv4CXNXqW54pFNko1zmaAKt5",
  "key22": "4zEzjQKCcgt5NacnyboVms7aSDSqWsKAb2hpMtLD9XfVZZJhHo3M2EyyvHnU7TGQVHjCQ5DYTpVaWoVige6SJ9sH",
  "key23": "5LyanQoUzDXTna49McqGcTaPqCeF8S7puyYBRvFq82YLJXADW2EFDZqwueAPU6hkwDCUYAq8E7yGCCPDk95C2cfR",
  "key24": "2gSAfx4jixmt84JxmNgsYzUExoXppx1CsTxJjPzLbBvBbMpBsDbkw1DR7cQqhwwLmFDMt5UEEB59gYSfUkuSstkk",
  "key25": "rpy3cq4vcQwB7QYT39HM6C2SS5u8zXbremPRLiKiKL8AuUadreysFjn5WXuCsF5w7u1usyRTPTr88TEqa3WxL4j",
  "key26": "qTscJfga1NfYJWWL6AfjFNtsCEQj6oSc2HRt86wDQ3gt8voAZtL88k8TFLBEShUYi1QvvQhBa3rTGXrHmSWTLAY",
  "key27": "GdVx32UGckXpu4H5b1A3iRd2SR1LSufGpMMnLtiYJ1urad1wM1K1kHS1z6VvuWLRuMK6eUHa4tDfGgBuYc3HhFy",
  "key28": "5y2gzEAHycRv4gja2rCddfxo6roDakhRW1PRokU1nSuEnkQKzZwgmRpFeJZnPQRuAGewJyfCkrQCEqz1WFPA7Huc",
  "key29": "2L75i4pfafAftB1cechFw5743xojwK6BpXRBS6ymUcahw1gCipEvvm8EpRVD5mZ5yQgGsBquxqMLAQn3ceCzmBdN"
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
