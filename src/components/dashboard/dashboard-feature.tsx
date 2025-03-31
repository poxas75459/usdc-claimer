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
    "47AVHeaGj2RYLNhNdy12TAnkChziTb45ZrZnXX7YoZnUwLy4jWaGtS6DyzwWQ7XHTv7v27L6zCnp3hrtpcj2D3Rx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ULQkc1EQmyvbRdYqNvXPj3eQpiTSTaB3FGMDoJPYqt87t8JwZSTcyRv3425Po2HnBJaELYfgKud8xgKbAi1yFhn",
  "key1": "2HUmPvNXwmfSyes5UQKZtEeieAqrXzhPNZkPSjZxVCnDKUVSsMgnhJ6tQw9dUf6f4uXVhRV7u4kwbevvQ56GmkGe",
  "key2": "4dJXPPzEizbor1UPJ9gbQzcc8V6NMQDR5cK1UbuG2XuJeHdkXKdDS7gJoiiNEi83rj2oDM5YeiFVKnaEqs6n4QW6",
  "key3": "21jbH8QqGbgUCnf4yJ8fj4cxnVP72VpRGtseothXZ7YWwhzJRe5TDEcixh5gmrA3YdGKT7KcZp17ztecSukufU5e",
  "key4": "fTZ8nfLQr2adBQ42NUh8Yc6UF1vXTiJqRGnh4npe9QDkdin55FjFtHhAXoSrjAW8739uGp4nmVvHpJqk3BSedDJ",
  "key5": "3MCJ6QZoTpukNYeimxG1oDv65xRYLtC7HJpuy8GcnCiRZ4PdDTp2KuedBTwj8XpXZiocxPy1uiW8ra11Bz3So2aE",
  "key6": "3WWA2gHmxz4bi9d8rxh9HCmcxPTVDpDi5bfEyfBfDcrP7vLhp2xYFSf5UHyQPd8PnhxVnFfRZZDHZ74PLrCa8Lf2",
  "key7": "5SWUV8wCorbW6kkmfKsyAFV9iGZxriSWEHiKhJ76V1EBFYi4L47S3KLejo7ECctWDqWkBUxqeMvi976bSwRzXDCu",
  "key8": "3H3QoTcDKzRh2z4hbzeN8dV7z2LVopgUvK2X2QCdrpcqDTB5hBWLykBEY9Vnp8DoBvkCkSitEpmdjrbWdj93cptT",
  "key9": "2gP7tibWa7hrmb2yjwRFuPSm2XgDqdMFaVQrERJTaSMZdj5LrgfeZ6HSqsNTZQnDonBsK4x9chJvGAM8vJYaikuQ",
  "key10": "5ytpoEzHKzMt99sJ1b1ikQ3JEmcsuHjoZLPFcoaDegXKMtD2G119S2odUH9E9cYCPpNR5X6GyNAt9mtJvtJkpJcc",
  "key11": "2gfJhPDVqLPoq9JmuB56HKfsNMv2DcD5ArJVH7aHmZxhe425yo5XdkNsSmUKfVReBkdGiKXv54hpRNzWUW4Xhm8M",
  "key12": "3waMAFeKVFnCz4N5ECXjppRmz4SveFRc5yjFLAW1XLzAA9rGJg6ZquhZQvMaJBx8qxE7LtpbFG1TXF7JfSuMKouJ",
  "key13": "52SjngpKYiMqML7W939t5ESMAznv6BEhYDE8bmidV4iSpuc3MNW7keL4p1FJoATAk5acoNhy1rxbmPJ9twZR8GEu",
  "key14": "3hnj3ZXmS6hUjeGxHaDpZtd3hqcyMrEyjFgoZSAL5o8ekKoWUTV1fmbv8ARxBY7wmZZwjhtW8hCmb3PvhN5GfcFd",
  "key15": "5JJ1onT2K3az9tWma8W9EcMMujVS8k1BQUZyAhYMCrMLfcanu37p84j6wBFu6NEicHnQmm5WLJvJZZPzmGx1i4Nd",
  "key16": "58XWK6KDpVJ1gLvP9rgmv7wmDe8R8iq4j5L91ggWRWEqSYRouXCYwhFmhcEv6mYu1iAybpz2nY8GiUhsjAhKHbik",
  "key17": "2YwA7z6biWQjZemp6n9yc5SezuGBBQZeoWSP3HwmHNPgnmExrY1vWDyNx1VnnbQsYxHKm8fUDgEkGwtUdYPyVQ4C",
  "key18": "5KjVRHjXyxp6RBVrphNqzVKLaMoWvwZDVphay3eDfQju28ZoWiFapVits1Kg5ZVr2SfVMEFBTY6UGdAoZDWKDVCP",
  "key19": "4TP7vHaGrURcnYy9SY9LzDn2NgzJpvZJ4pNpkYX4p3jKiGrEFiMseZSSmYk7QBnuJbmgH8xSg4UwsQinZC2cQtqp",
  "key20": "gtVKitzqCUu1oMuBADvv6uxzBhPHi3Qh5UVKQDin5rT8PnXfUVCGLDekkQ84oWwsCGMAPFUsuT6wmhvQ5gY5gaU",
  "key21": "5jBZN6pZiwc6vodLc35WZfJ5ffctx7TTtxERHkHcYpCRRutBgYEFJxuFDA7E8YRtniagKQsGiRfchPgEoS6pC6Ro",
  "key22": "3jArMdry2T8CNu32XXuvD8fSCcSXLFF2jxh5bTGRKYQyce4n5aGgYs3hBaEVB2NFdMfrVb63UHKM2FNXMaECrGMb",
  "key23": "3yVnTKGT8gQeUxJApCCVZkKEqfbzM84VSRwNzdWeoCEG4bhb6nmhb7ZmachShWsLEQ6CZK7Yt6Hp1Sq6XxVw7meU",
  "key24": "4GBMCJGaFpp3isKyR9CZYH32JiSrzbFe99nMoNTdeDWo6rzt27PphtJy7kVSQqZk7WXAinaeNa2o2zqSZ3g587pv",
  "key25": "29LeqgSzzQ25oWjb5iyacEm3V2H7XA7tjdHbMRqzyjAiW59ytZhRuXo63yzLSYWKbfDCmR2id6xdpAkDGu7cqn9N",
  "key26": "49zZ8PhAPCDPgiNX68ijjSBZ1TF78BhtfMw7aBQKmhmVDDV73Nz5zaEDjjg4GfZP4aw5uzhGxGnephmcJSf1xuz1",
  "key27": "areQ4621wkksm8QQJ4UAefiYQAoaZ37RZYkfSnxBYXz9TJG8gbU5mvWijM21QGp4sYy6XMEhSsV6GXGAaP1b6o8",
  "key28": "jbeCxjSAj9m9iY8555kZZ58YHd2x5m3b12bu2h61eEJhBxSyzZwTAbqo2y14fYRRVtTd5VFeJh5t3GvRwLjgH1V",
  "key29": "43KHYhgnbqarE8Dv2QyC2aX7TYYDPZqirwx2RTi4XAT5Mu37L9bkcUuQ3AMyT5aA3VFZDvxEARoPwmZ1x3cB2uBj",
  "key30": "u6SRDh1HsN1et7rd8CkAmqEBfhyVVS9PN21cXr9s3gacbyXZNUW68i5QAfXrsQ9aBASqYZjbQv8utCTjPRgDW5B",
  "key31": "nS3SteyMACDPzgVmt4ABurZ2FiSC9gXWppgCWVXEcUV5AfALxCK2ct5ux6sQ5AjttV5gxXM5mU4iys33L1qbtRf"
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
