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
    "38MhBkMxoFjfVpZGSsWU93S4D1KqDQVPh8rMHJvCz5ydSgrQVReFq1g361BBawh62Ep9sx69MLjEwAFpg16YXZv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iLiy4Vthy47CfiwjkQF5LSWb4936SBbwy84GwCqV7jLtpPNVAhHfnYLpKYPeHzQr6MfFG2G1tro9s6VuQod6YZk",
  "key1": "5NFZdff7cxZU1tGcvUwhMjL8RDrV67AHTNJU2BzrxHny1Rq3Mj3wYL4diPFG4abvdHixteCe8S9mfKoQ1Jk5xmQq",
  "key2": "5qitGDbdgf8SFvZUnvzhkL9PQXNb1VMAcHmx6B8W3FsnRjxVWWuXoHGJSrebuXbv9gUbuxYGSo8KWbSm1U2Gwmxz",
  "key3": "4sss5tRurdWUssZwXcXTJLiJcDiJJju3vdWs1odcx19wW6EAWH1XdhjfBgRFScY9GdPw3hmgexAK5YbotC9wUee3",
  "key4": "2kDy6YhqsefweECwVHMbxZUE5Zk56wXmwZq4Mz2CphEiTGpYbT6DK1JKwEKC2AYia86QZBZ4kDFPHzwkNXcUbds3",
  "key5": "2wLX2jZ6eEfk7T9sSSFpGn9CEf8FsYYSfSa9dovqqsZ2QcbWk4q8fn9BSbF8rjye552ycN9DDYUB48gkFhajvMPm",
  "key6": "4fMxd2aWrRUMHLqfNKTwrkgXknMepK3rfs1NTqkSTH9jjoxeYzcamQAXm3pYTGXD7jB1jVgVDHGdGCVK4TGYDPUr",
  "key7": "5a3a7abHH3pFC9sfzZyK9mrqBbmvsmxQWteT5b28sUQvvc2cwrBzKQP8uGkzktRqe9s6F4UHhiBFfWb65dhZ3H41",
  "key8": "3MPKsg5AB9zB8TCjcoDQfwn5NfySYBGUcE1MwUxZWYPz4HMdB9FXLjvdPojnvJmdvyEQJpyysqCjZ9H895Avrwig",
  "key9": "irspWwfTBZiKCfmGgS2A1UH7Gm6xSsRWPb82kex7TyDFaTe5Tgca4G4mgMAhEWCUnn3tDnCec1Se6wWLouW4vfR",
  "key10": "3ND6WANufhekcej5mnwg57oTrQNQVN3HYc5x1hg5XLsoxNwJvCLG5bC6TtFUj4gTXPFUqkJFy4cRmwq24oMw8fou",
  "key11": "23HCZCPcGuAv4CnZBp4YZSabsPuAbQCqnDKNYyHcJXrDXttmPPCoHXvmwMmBw3PvaRV58gaVCnPTseVtm5mMSnej",
  "key12": "4PhiagUExEunSRbpsPqo9NYBRzZchpDaxXGGn7hvnpGBu6wPDRTWUY3zRTgn8BeNPv5aWkMSvCGoCzE4xdVx9BRX",
  "key13": "4a1qtSaMXyssCaDF5vq7S1iZNweG8N9F1Az5hctVHvgykVTRQS4CwbnP2m55AJzV9tdDEBKi7WouNpLZdWnNFMSL",
  "key14": "4ZtmhS3Zqen1ydxwXztxvkRGYnG1gv6FaqgTtTWaViouQpQJxmXSbeHW2jiF1xryxnaQuSDELuNf4e27ai5gjJeJ",
  "key15": "3AxULFxqwVyUUKVt34DxCYQNTkEeQqXrJpaJXqDvVD3CXaJxwGFMm3meyYfoGEGJnXit2Rb2D1SxN6x845E6pwZh",
  "key16": "2JsXqWK475YogwmEcj1VETJKyY9xMbitTygR6ts61rCUhfBHXQoiymobwDzREqLUcyD9x7NzQferqxuRqkDTG3Dg",
  "key17": "2CNLx1E1hwWjbW39s9MN5rHQAuNrYK2gn4HLQGFBgou9zomZT7din1wVQRZBLY7TVGny6C2MovieAszqWZWQRjMS",
  "key18": "VFg5JWLty3cNUTa1TFV1eZuyDnxJh46AFe5zz7V9NXHfZN6SYG7HtBHoJ23dVdyqBD2Z9FLc8vGCogbwpRY1uSB",
  "key19": "5nWtKG2aCupAAneQuWtprvZWWYKk3AkxF8GUhPVtxBSCXyB4wco9x1AihLoixnz3AXcKWhr5eXKhsFFAAoFUGq1C",
  "key20": "5bzqdcspBgvXF9kaqbYfC4wqrH8h41TcHiN3eUhjDEKsqDsj9eWuW3LB25AQ6KZqWbo511ME4yPx5U7YxX9caVKi",
  "key21": "yd64thbzgLgwoDH3RSXeFNKopggPvuZtje75jkQPxKf8kgEAUhBP1s5jvMGUn7U1so1vN88kk8QfuQxQW3xwjAK",
  "key22": "5WyHJU9wBjwnWGBak3SRnAoFSt6Wujy4qT6H9mbfSZsXjEjULBmx3ABAfEjVgVgiVFuSW2w5gzfiU7VoYd9sDiMr",
  "key23": "3QHykJSPhPXdk249QbgpbwW2ML6jeZGZvEhWbhRFZ2RcRVQLMzFFEfZrMZWiVLgePMbgqBsjf1jUf5grCk9oTyNE",
  "key24": "5TZyAR2W8aCnmi2BNurnbhVrCjUV6zDXzNyjLzUgKHBPYeaEz45DPgswD4cAY59fodFgWXQDQeUuyAwpypfGcPkH",
  "key25": "3rkkobcYTZ2yyYWbQAZNdM9h426h7Ah4QR8hL71jJuqVykgk5fM9sT3g5JUj1q6GfXPYnjvBdzPPnYZNzCSHAJqS",
  "key26": "4M68oxLnQ4PaRfBi2D3GJnfTS5YsjJUJ4SdSxzPjhyYUCMk8KJ85pY5D2ifDReaDbWGEdiAXVWoKfqENefmNg73x",
  "key27": "5B79ka6NxmLdVDwa6wNnbqV88KKZDGBHRM9vuupbDEDVErd1XNXujb56Km3SNyQp2oENCGPcRgHbeDK88J58Ro5G",
  "key28": "394sN8SPYVGiYm8pYuvxn1Vk3o2qv1mtv8YamP9nn455sd1cdNmvgLpds7U5qh1V3MmWCwWsctotVPYD1aSRLhqG",
  "key29": "2vzMJWfxLboiGnvYPvAWvbfuyBt2K3QQ1Cxaq9mjCostnDC65ZiUMD6ZR44YCwq6NsL1SUVmj1afnea7GdZib7hk",
  "key30": "K5HSd2sEz8j7JnYMs7PGAe2hBpqo3hkWk1DBqjtaaoMHd5FjxB1umhdYeR9huvUKGp9sWnmfKLAWAZGUuPc7k3E"
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
