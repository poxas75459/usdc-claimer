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
    "5PPag9kaoj9rSE1No5wi2Rmp8G2c5K77NMsG5UbmzzscSDACq5bNDNirNSX2riULaY9WtXHfmVHYXWpWvk25rgCW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yC38N6iz8D7GwjdtsbagcGY9fqjBr5hrcYrfo9PRbCp7iPunDrLHeR8nDqspxovzbFQ9L4tH2eNBHM1J2HENMFg",
  "key1": "4Q4iFB7FN2GkxoXsedynxQ1MCgmctfiGNhbacz7PnhYqX3eTEVPbe2WRYBsEgVf9gT3wwMXhHLx2g97j5wStz1hA",
  "key2": "2ZRREm9N1g9LNiR62nueHmBib1kGqifHVkyajUQREvehAqFirKx5L74wrxPy4V2XcriorgT7bXf5N2YcCX99FJs7",
  "key3": "2i1KBNyUmrvboeXjDGCs7mB6WbN1R1LgYzm96woxXnyofZRmMqJXFtadArDYSm3eFyN574TAvJ35LCzaiC2455W6",
  "key4": "2hM53SKPZi17JjJmW9i9tm2DM3UPKBH1XbUEu4NHaAzKgFML3j9P4DS2ZxcYFa2fNNkWLqjs3qpHwjxS9HwDSKp1",
  "key5": "25toCXt6JGnJJ3wSyHviF9R3rCpnKtLeEgkXJKiDDjxmc6VmLSAgSnQ89w6qcifH9kp8oNVb2kJUxQ7rn2TnPQTn",
  "key6": "LVqJq6ESdE6cbKQzfM7QMwCDqP7wsE7Ui5bocJibWM2SEWJSs36SKeFG5HYEJUUFYvUFeBcrcNDgEK7CezJbt1Y",
  "key7": "TtUBkjjdPWXFywuTS3MC3qUEiFLkbRXaqqcUgUipMr9vrocLQqZTSWmHLTjC8H6R3EVJHcSCJUF4ZM35Qeh8M5Z",
  "key8": "5XzwTFrPFeeR4PkQneSYzmaaNvdkbXEkUycx4wrZYHdgPpA7qhoo5WNTQEoD6DJqbnMAJLyWKs5AeExD1mwLTZzW",
  "key9": "46QwNKvjUqNiYFNq8ZZ4fgtEnVsU7mUemS993xtfMm6QKGEcxncJattpxm6tpiUPTcNFo4WQ7CZ6giRjaorztts4",
  "key10": "5wkw8RaDQPx7Wd7568EmGsCSjLAk8VdQ8cX1szpmVfBBmW8dPbqJvnuvyVRtfQ9q6HC4wgG9CQJWa23VvPjPQB1c",
  "key11": "1RnZTsXt884osdnX5LYZd92gBLdBeGpBrvREa1tdKaRWgoxbe1KvGbVKFQEKtvti4Hoh677Lzw2XNzMZKn42GfE",
  "key12": "4hwmEKY5ebQbqBBJqHnAHxBk8YNAPoAM7WdNMELamuygvYKz1TxqcWRZUT1Pj4QfyZMMgcQdJKcQ9MtGS5NvA85R",
  "key13": "karx6fJaEzJiwmDHmK29m2M3su5G6vdzYeZkqSERqmCrM2u9ewV9vmVsEnQLcagNbhmf221X4jC2foHDhQWFkZq",
  "key14": "2Hv2U9epKwm1uc6chEttQH6ynTCjxm1fBKef6K5JSSgyjN6ZCMD73BMFTevwr2N7WZ69g3mrypjSuzjGRQEz5m68",
  "key15": "Vh3wLA5xNg7475M449mdqpujuuGi7XZeUS4yZjyUypP1fpKFaNyMio8xqNF7bfNmEHTuQ4veiJsATzbVnsKwekC",
  "key16": "5PWsCGYeVe44Mjx4uQXGmf45mhDwA5Wjb4unfmMT1B3i6ChuJ5F5mQCCxU4iPjL9ZRFmTmXEu8aUoEw9zSXVhgLV",
  "key17": "v74UjaNn22T6gj36dwkk4pfJumBV6vRpkCSRdL3N1CpPEuBmXrs5n7b1L8fNEjDHvLVpXQLMf6Dw2zbLcB3QKPd",
  "key18": "5qcK1EDnrZuG652LQpwmyfdYxQ2HQcCEq1fFYQpGyZsGzRNxeWsEdHUTfD1RngGARZg1mJ5t2XZp3d6mjotMhvej",
  "key19": "V1LDdSQ45mHr6xKvoYQgEYC5iBXBGsRK8VbkEdhhM8mYc2JohdNRX1GWdCPtmo9PvgKfxjTc7dC5jXNkJbLJVj8",
  "key20": "3EMmS6wCpHZ3wdQD3vQAuvhneu2mDHsfDufxr6yJSnNZgAFH5w8CnCeSReHTgSZkiqUtmnrVy1CebhRa9gkY5VWp",
  "key21": "4AuaT7dV4fL8dDLmpCBHHDcY1hEfEgZ1qkuKzcoai46VBBDXvVf8pAQqgoj66dEf2dXxiDRd4gvvVaU43r6nJLkP",
  "key22": "2VaVuevH6c9JVdbKftBHzZrQQEXpt5ZZZgWMxs9JyBkKv8Ppd7QyyBFtQBnVUw6o6acgVqgJPk2zEk3ttZFwKSZ3",
  "key23": "tn47knsjE14kEo1zBAfrbKwzjC344RfLGWXKXjrXg7YTVNT88YM41z5VHAqSmHhTBzApX2Eix8sRggHooDsqCCn",
  "key24": "5XGkNp7k6ymvkLnLti8w3hKw6st6fDb6uyhDUo7bFo66ZCeoAiHBmzU66VtuP5XQcmHLeFe6pt8SvnGtWoTexqN7"
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
