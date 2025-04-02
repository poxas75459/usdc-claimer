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
    "4M3eQ2ktoFdvzeUhj3fiAxdMcRrkkH7XjY4iQHvxSYemGmEFG3rNPxmxE7XdA4J3HzeQMBy3J9tc5VBqJiLVaZaZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MNQwM4cVCBfytyKT5jBoBcDdZ7jk3TsRdeEbM79uYXTxf1NqVt5GrksNnqe1EUV6vcN6iekJ2tj3CSTj8sdc8ht",
  "key1": "5Jtwswz25VD9ndoZdHdJmk8RE9XwqcM7wNK9Y9k19qKiNeZXDVDzZDTndTYwCpTo7yrBP1bx3AtLUo78AARZbTnT",
  "key2": "3gcMA8xawuGTX9yWkyuMCSF4SdXW3TFXFPX8KL3RVRUt9VHctxzLQytfqTMaARW9hn7bvwq92jyFZCS67xz7ftna",
  "key3": "2N3aeSPW11jiMP9CCwBZXv6HFY3nwHsgjxWGSVFKhp9jWnrn5tpuv76TXPDTmEPuN5tBvkZa2ATBt2jzPg3RqL8x",
  "key4": "JmHUNmkwStZWWmDMW8JFqDTtEcs1sdgVE2TDojboMVVqzeK87EkSZGopByV1ZfefHQHL6HMhhLZEjDGDKVBAQPX",
  "key5": "5SaHdZsDyzwBn41VULf8uyjXKy9tpThEdjXrHY9LngSTF7czR8GJR1JjP2DvZHS1a55gjyCPvRkGoq8znDzAzXaM",
  "key6": "5seFhbyLmYehzTCwBj8PA8WJtDKpvcBiLUGCTatGVjG2fxHzSPsbk4wDAHSMPpKR6WVdhK5CzVxLVU6B3o4KK4FX",
  "key7": "4cpZeKLV1HKSZtfyC5SVbtmcAjuqUva6GGRrWH8KGZ25VMQBhxzrd8T5P8iwFTtcceUq1BbMnsetPK5VaBdHyCPW",
  "key8": "3xxhjiszE29NXrvWfhBjog97yCMXZTQqSea4xWeHZcejCERciucgzwSRbK45iSfvtwjeUQyrDWu9rVu5Har4FZH2",
  "key9": "5a5WyTTew3RtnoATxmYULj3PeF2fEVbotD21WT2GnwsfEzXJTnvyCFbrpRDdoGdYSEdqPYb9FJJsqDWtJCTTUYw9",
  "key10": "2hPta7xSb7nsPV8RsjftuybHic1ePJ1ZL5AsakKbowbTaEzGDxWrb4Ckh9sN62L8pdNfbTCwWeqb9EWazTPTDnTd",
  "key11": "4GZMrs4frpYG8GeS415cMPD6tzzSpKu3vtfD5SgpDK6eiRscax3jGf2pTRqYKTWZbFEfZzP6EbvJfkSb4YHudgNX",
  "key12": "4kji6VeSHi9HAYo5b6FUgy17ARAsh48bYbvN91zq7RFX3xwkkbRoLchWQgUbvn2P286MpGxW8Li5GjREqnZN1Jei",
  "key13": "4vv9K5M2cHzRAT3okXeLZBHXtgpR6nA2VNiACwZaUEp6AQBDv6ArUoWD1UksknbQkteFjoVuJQir1jfatkVnMsp4",
  "key14": "3UAscff1b6fkFiVofjfzAmbewK8WvHcHDZScgvEhuCCGKj1otX58xEfQsS1WKt4G4sUSJJEnanoLS4HBFsDLRrtA",
  "key15": "4Bd6wMo3hrt8AijPiDYcS12QgHAWJNN4Q59Hb5KzU8mU8g5cwjr2fbeyofzs4wzZek8CwNUZQo9AfrtukaGjSmhE",
  "key16": "4VQt6EzYdcXKFAKMsSLQJY6Vbno1fKGZsiMYgSsGM8tAWwCdwMZj1pSJR3gjTU2vVUjmgToNV1wUuZUxtwo8NWWR",
  "key17": "3cBH9iiRAvKyCSmvBqKAVem8VKfEjtYSgUcG3icXFrsZmqpYgitwkunzVRni3QPSVTBxGFRWQJnC3XgQZ9C7tMEM",
  "key18": "SD6V2hHjjR5GVtX8HvVYzmBw4Qdnna3mfzcF3B9jmcQgdre7Zo8YTNwXycJ4Jdzv6mM5FWDKFawNmbRrmJK6gRP",
  "key19": "4ywAuHVHCJw4emEoMzFhz7VtPr2meCwaNWJPWu6ZkQK5jZcNS2syFKb2w9LangbbHgouu94gzJWonLd4G9vVMKkv",
  "key20": "63PULaee3GLLBYfe4Bki3BeAg3tNvienED2YFZHu2FQQV7sYsUKRjyfezTCMhFCryueymdNj1YhQjktNXVkTpuG",
  "key21": "YzyJmBs2XG6M4RBGGpL2iWjvz8gw928DS5giaKejBV3na8K6iNgLJX8NbQKGdVHoAqTo1Wy58dW6fUH1xDwe4Q9",
  "key22": "kLVG1NhT8PVaJwLDCxnqYy7S4216d4n3xLzS31SDnjgfRf8kCHrWh5ZcV3Nf79sK75nciFzCPXWFg6nA9VU4Y4i",
  "key23": "2fu3WyBnqJ8vJnvLB5qr3X6YHeNAHAnENUPTqCTDYg6KfvVwLdVuyC5cSs6TgrCKQgct3P2egPqwaVnomkPwt5rt",
  "key24": "JWi1q62aV5DC3j77itopCDy7XktAVppFkTEgfJcuWozqeiUWGDXLVrSEbA2CC2AHCEyjePkCmqse5pbJcakMA3e",
  "key25": "3rz3zsmZAtndesqDLrL4MfWF6GPF6eesUygpJ577yQ1NLZ7kazCtwrLsAy5BAM4qcmu7veXVksXVVA4QshTdDgtE",
  "key26": "7PYwTQ8psyfS5kvndMkep3i6CztJA7EP5rVgYCUwqtcUdpHiZYzzioPU4qyypgs7jmB7mGeCrjPzdLzuujmvJuJ",
  "key27": "5QLeuPsnsU1EWBiyKWQCtxPfdaj8iP1sdKTt9eZi2baDMLSLtco6fKcsGHiTpz5PLCiidtiZQyaEJD5p1H5iacuc",
  "key28": "21qsBYYHsbAv1a37cZ4pBBSYg7zsgfHLM2tE1Y1NZvE8uCfwZFhVaQYi8HqMQFAk2aMx9c6USSbwzzrZHSRwQJd8",
  "key29": "4YBqZvervvxWXX3jZjoL6zFyvDyRsLqybHz1WV1nSLed53ZSk6oE1oumuCgXirYEvrU17Yz4jtcnBBVH9zy3ZDfj",
  "key30": "fm5GuDpo7s63G8a1eCduji9bb6PuZMGqobz9eCAHp1Fxg7UBZumRwdpV3mnfKqm7aFcYt6pwfm3oWaaZjiZNpML",
  "key31": "5U2nQsHoBKBq3rhcpmFpirykD5jj9f4nJZY29YivQFGmhPGTLYLpMfqTGxYrUPwPfGa47v4L1TGWrG6FeAHSAvfK",
  "key32": "2v7EhpSskpJx1bRKzcih3JLxySM4qLkXMNCy6e7aSFVhFa2WaMf26zNbbY8vB5BeJr55FQJWUpdwstDm1YmWaPuq",
  "key33": "FJxtbyZhsADoeYsvpgnxqz8jLfxKRUuNJ5rNn373wR57vwK8Dt8Kn97DCbpjiBWfddKBgAmjxVkyup4J93rG5UK",
  "key34": "4vpDRe3TaQLX4DdYFWkvqGQY2gbXTrdae7ad2qNCGeDJB82EfBHjNSsKCBakx3dxjex4LsAQnszCJPeWXc8aY9YA"
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
