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
    "4JmJhaQf4vsvgBYR8kEGKMHApgXKTRSuMe1xzsGRhpjzKKw5MxDRYedBU4uydnpqwZwwncVVUo615kuU64r1aoD5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XTsAN42dFLxVLBE3LM3Lw9tfTinf8fYyRdVAApvFqZajP3Yo18dm8Xb9GJLjpMmKSpnTobCisJxUL9oUS8A8Qnt",
  "key1": "47arc9wFqZXE296pk7jAcUuSqSUhD1B2t63P7xa2M57dD9UBQwKqmM9oAcnda7Cv8Y4rUk9w7uKuUWok3e6BbnWz",
  "key2": "42NUCyqLhJSDaepQ4TjLFkW7mTLu1sWHb2DLgo9PoRjtuxsMXohGFHv1yjdkESvTvoCodaE54i42sqnJCWW7ywXX",
  "key3": "4xHHka8wDwnUxVqSaj5qTpbFUWtUorgJXyAJQ42wSE6ccnAa2hh2eXSJ2LMoVo1kZyBajBXHPwpMinZJQRtGKzzB",
  "key4": "wgvKgsaSx3G43a89b5VjgihTeR7LEiBFLPkEaDh3WqS2LtC8CyXG3TZqZyzpPwG8pip57LjnBoGNqfujxFJdGQD",
  "key5": "QrA59ia7VLjaEL11oCUypdQ2j1jdZyT7X5RFwGvQ53dsxUqfKdWgDjGtchBuHfcdS4xbsFVaVAj1eELNoDyhkbt",
  "key6": "23hE9qVia1vDMytKrxXzMFyyRxCXAatpihZHgEeDsnsZ65enXs4Y9mMc28M39RpLmKLJCuhURpkGMiPumvj99Re8",
  "key7": "2HNrAfot2V1rZeZFMZmq4onyanpC6NQvnNTttyuG4b6hVw24StmvHzkt1wZD4xbgdiUrQB6wvyorunc9YWLAsmTX",
  "key8": "3ybXaMYU2vFqocme7B9ogs2KM5ET9pJmKXP4xaYe4MEvQLfxktYA8P7avF5QGMsWwHakUY9JmV61gub2MhnNnvoa",
  "key9": "2vwnpjSnFpkF8Pg5wxuojjsPRCEeYEJ8eR3VwYMJ251DxyxdYwmGu8Yg8XLNHUSVcTHoJKuM3kqRSzwVdrsRVyNz",
  "key10": "3GWqgh15CQWLmkWzrY692z5ceYHYL7mMMtpErWArvAJZRdqT7UGmxqv9pYrNaPJxYorZQYCVj67p5sKSRhAkZXvi",
  "key11": "3ZTGWZbgVmBxPYPjcbe7jLpRcamcbsEAjpEfAKPxp64Qc2STccLWMgWcAPmj38HnymzWrTR5P8k4GcP2CnDR4FqX",
  "key12": "2f4JTfimxz7Z535JoFSeY9JTSsL8mqHvUyzk1628qHmX5bKesGq51pamWD6UXNad5fABVe4MyFdS8KFZwE2T5fFm",
  "key13": "3txTLp3D52VqfaNxtzNCiPi31YmevvDU1CWoXULDaBMmEZeMtTnVFiUoJy5g7nsR1pLy2SxKezLoFRKnvynNXck6",
  "key14": "3LftuQsnjR9PUigYmHmKDKNigMVN71NxBWBfRSqUuYyTXZKPVFzQ5aJpcdiD4sQ5rYetCy5neqzPxdfC9p5BMLje",
  "key15": "RqQPTiCu5Sbsa3PzqJkGstsYnKP2G5FhvLkBXbgKUhU143Mg2LiEZ1jKU5LRzVZDPDyKmixWEg8Z3N2dBPrR4id",
  "key16": "1SppH9syaVmm1umJo7ppBGPd8EoQfvxFykt7AUZMEWcqYXwPaupcRXnyL5VqfFhqpCyWawUmngZPtFA4xCBoTe2",
  "key17": "2PKUWTHB6sJ94XUgwCJ2ezoZrzJyXfuijbfuzgrNYJG5E5gubxb3cMFnsTfh9XUH75eYMUbPp51LkiBegCPRLd2e",
  "key18": "4J6PaMM5mXFWzUahxh2f9eKrwzwRzKARL6WCgusszHGL2ZwHWoG1xEPWoLgYRfNmzyj14bZVxzLnDix7NpaS29YY",
  "key19": "3sJUcnf3GzEwRB9TJQmYUVE1hENu33jocg4Mt8wVKXmyR6hsmsRVfUC1VD4FoeP42QFABq2iqYmMN7BQ6DHx6VHo",
  "key20": "2qTX13QywuTo2KwF9czgwgwgTVp1Lvc2dJC4cXRXXLvNP3JHy53ZWx3Fiiei4NKdibsQZAufr9AHmKn36YhswSrh",
  "key21": "onAVao7BZLK5gJALhqZEVBKMqEyGnNcpoCQsy8XLYbdUhmUFADdXr5oq1zn9vWTVg1wB9V2L11etxbxqDrp8DV7",
  "key22": "4YCaVpbFo2ZDNbxaXR4YubVfaomHeXQFuir8KrT3oNJs5TCxhH6KksaNGbxzjqP34exKxrvX2RrAjKfUw7aXsRXq",
  "key23": "PEXwALmU4VVq4NfSapM4zNqJ85L8rVvyDCmMMDGSrqmniqpQtAWD23qjrrBUpUuhHmprBEfNrMdDxw4jvRauSPp",
  "key24": "5W5FWsgz2GD4wxY82KJa5GprTow8ngTcvxLvvapk1MCgG8eMyQ3j9q4E6fGh5oXSUVQLFi8P8W7RjUzkQMKMDTXY",
  "key25": "rjyoTfuZ2PErFkogp2aYQVA61mv4bd1ZEdGi5NriJ2uATkq6wUZGcCrjG1z7tQv6aACFNLNQLuH8qnH9YWA5QbL",
  "key26": "4TUybaentE687qg1f4H4w7i79HoaVKMNm4pDbYetmAD3QkYVjZ3yUNksjor4ip5KJjKQuYPpRXYYq5YEHWe7EUN7",
  "key27": "2wMrBJkjJDVjxPFCf6VfyruefK9aGv4CfrjcVg4bugmCk77BHdCuLKL3Ksrnubyxe3eDT6cUvhLJf3Fna2DystMZ"
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
