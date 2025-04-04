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
    "61feMRMc9TGE994Xd1PB3GbvPiaJ2SL4rar6ES235SYmjDJjkVmKoLPqQrLrQQZ2PXQuUr7DnpcZQLVHfD5HXBfE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UfhuyYZ73RPoxjAj48q1v2JeuJoT35QRYuPi177oVututy7ib9jimuBMgWB42hm1w7yZiUaMH9dm3YV7wddpBzz",
  "key1": "4AMhcugQxnJDKmYxa1c6Fvp6oTRz8G1pKnMDSN5UYT12QcHR9UKyPpNkVnqSyyd6u4aDMV9kkHo22qYL5sp2MJoM",
  "key2": "5yKbxf5SfUNNycgrNMdNp3mKiCUbLjpxwjMVrohgdNoAGAufdvt5fVrPjgzjpy5pCfXRwoZh4xvadY5372r9MmmR",
  "key3": "4oScZqS2Gs55dZpi9YG7c8XzBzoZWajbfkgZum1h9RBZoigkTkm758Aq1mJTK61QgJGujF5jz7GfSr2gfRvE2mvw",
  "key4": "5HQWkfCpJoZw6wpKWXJ1Td6SLYNMzw3V4rVbHZ7KbnEYPqCRP9o9MMbqkfzjuqensSzx9BtMn9PzYsV682oUdbwe",
  "key5": "24T2gjkjR4siARBbgrRZfn8tNCdaAykHrpUAaGSVBc2vmFeBq1YJSbEUkDKdPV5QX1a8qE8xSwKfnxhA7N8rxrsL",
  "key6": "3i1VMnLPpw8W35k3Vdk2EyNkvJagNn7erDcmDPveokxYobBALo25g6WQSCU5aygeYVgpwzAbR9cGBsZB5stNWQnT",
  "key7": "2J2rMVkorujKhT4ZPMAacwm3cP3mSy75XfNHV4b5Xny3gEvpwWjwjNTA2znw2VZdY9hGJf6ybKKp5S7AkyLGLZ5",
  "key8": "2iAeNPAxM9v9pe7DEUt6m3KK9yfpSAFjqxF7GHaUzA6ruZFK26rXXNQyRGhJ4Z9274tACDCxZTTpuBWXBDHFDx7d",
  "key9": "iDjFCXyBtmiuJ2xQkoabbcuyF1jxs2U35LjBQfZHu3F7BhRm6Czvz8pRQQj8myLHEUu5xqv9zzPMf1tMjYuB6nd",
  "key10": "5pWu41snZJ7pqbxZwiKjqvMPGXFTssHPnX6C7bRttZmVv8M8N21WqyG7Kjyug8Le9uVAr8cYMTwi5QGPLRYFsAzt",
  "key11": "5xRJAXNJf8xzxvP8HSJjEXK6Xf5iiDZoSyZ4A24zePG22948mF9eosRurg9fYgsbygDCDoAsSuTrHSRNdLvyeAds",
  "key12": "5VASNffeQZdZmacxcijpH3VLrQgJk2rsurTRxF2tgH81qoLkwJy4MeoNKsBscgnebQDBhkLbirtxrSsmoaRuSwwD",
  "key13": "gua4EWTAyNc7dSrnMppLz82M7VetkPS5JW8cRVHJAEoqNXunqUPsdxDQYfxB8fwQHMGK8kCTPtWQkgzpn3YDqnp",
  "key14": "4xRedbLRkF46EiyCenHZYNeH8azg6LMx1jcsRyshZemZeKPVFKzwtoeXBzqiJ3GV5W2i6MS9hdLTre9cUCfyZes4",
  "key15": "54Mn4pgxHf172ty3dn4PRdWcXwhdQvS4kU8qf3J1qcMdcbYwwrNm8NoEQ28i7pgcBALvwzdzRxqSo7JxwEH3hn9Q",
  "key16": "3vFuC3ZLHXANtRtwSCPpM1Gh9gQmuCixKwQkPUBNEzDeeGjANwtASCCwy2YhCGMUBatExkTjH4bsqzUSRMvSExu4",
  "key17": "Z8LGKsHsXUZak4eUFMEm4qv9D8C5FKsFxaRoT9UcqYwEdnWS3H1HNgXvSVW2Wt4WcCS4aENMpW3aybLkU8F1N7S",
  "key18": "53mYNRJYiinr8Sar3936Xm4riENj3kQWhfqRZJwJCtcTvQ7oVbCaBg9UBiiZkCWtprf5GRP7XbkbWfTev2mFRnfG",
  "key19": "36FsQgPzT2edJNVSUqpk9xGy1NVMsGWtBheMEbjT2grb7qD8BxreUt2mFZpVJcE6BNFU1MMMCkTac5c3tavv8Zsd",
  "key20": "4LupjoCoNnydWZ3HW1CEYFhgYC9QnxHiDCXquqa64bZnCjRAYEJJvTjbQ9BdEVJn2AAxFskNJPPeQifajHt8Wn4D",
  "key21": "LEiEht1fGpbsPAvuS4frFdMkrHTVEXN5vkMrkPjqYQxcPzFdfDoHxvvsjLzq7NQ9wHNZU7sbLKnAoNraNzQ9tiv",
  "key22": "v6t4FEFNYi3GeYb4JT977mMPxDmXWvSAvfbFerdZ7YaFzpjyXZgEKMFTc3xudtjDaUci6c2hZmVRcrLmpyeX2Xz",
  "key23": "5tLqCPymtnmctVAWdMGQubKhsq9wLZxzg1C94MkXbAzYAfivdWkap1dxn1C2if9b4SjWtev4TWnncJ3qD2Z8VxwA",
  "key24": "4LYSh8fcdCFXynEyofyoAi6mRUZn5nfoiWSnK49bWvF37hx8x4wtaPc9FeWZrnPgivtL1ZraALN3rQwHfzynDiBd",
  "key25": "47PCKKLT8gZTZiCpK4k3PrFgmdSqbKyjgn4mrJ6BmhFadGHZyxdfumNX7FHC6ndCH7NtToQ8couruyz5oV37LHar",
  "key26": "N3MYnuo9G9eM9GUUKHjvRGHryLPD5isUNFBV19XLtmeTcsAhLb6QdaTqCqtkGVZo2cemdLX6WiRdPCdyjZWjm8N",
  "key27": "3UFiwY57AyUjskzz6w1UnYje3XHuDiZgZEy1K9J8z3KED3nigDnnoHgAiMw8yHG3B7B67FcivQBjcECQT1RepAkQ",
  "key28": "3vZVcHDDfGVQnqBS6BZ8Fnak3Lmn7ddFRbyPm9FaGTibaFdKhkcgWiL2m8YQN3dMiHiwkohMZVwqe85RhVK3QLi3",
  "key29": "3L2a2p4fG6t2UGimLDH6mRShK5DN7WwxBXA84CbKgaeAsrap9BkKkwW43EK8uUMNHHDFLPHCTiDUp3PLQ6rscQ2b",
  "key30": "2eUGpy7iXegJwAGFaM7PxdxQcoGpwjAcueUXjSuhhjCZF39WHomktARQhmdjKeBcFUZeYATaVFrdENvjdjSgW6Vt"
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
