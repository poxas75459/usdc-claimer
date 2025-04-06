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
    "36YN1mkoUwFewip1qN2pQyKTd1vzkLkjJDwXhGhJoWvMBESBFRxKFEB55qVrwaUSrfx86Xue5n1sXvXDuMifu8cu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q4HizkDZYJJWpu5JDNAD8M4mf95U3cQshhjJvecoCMiGH9mDv8Z1RKd41hxnYox2RD9aiUpxESQXrxiqcuxEjXf",
  "key1": "4FWJCN3xLbbnA4LUwgoSiPaTP5dJRizYySk3BpCQKm2UqE1T4CeEn3DZV9HGKUA6reoszoZ1jBcfeBbu6GkajMtV",
  "key2": "3We4U6wTwMtPY8uadP5PRxFNrboo1oMSaY7sJkBhyLGdhiFz2G9RUeRkVe71gv9piMbeo5NZ658gfQy71pue3izD",
  "key3": "2uc89L6RHmt3iz9DLepcBiuhagXF5dzB6Qzca668mmB5EDLoHFHGfkxHkVMM65L2692mUHd5W8wEgEvMsjx2shvy",
  "key4": "vxPe6WHMbs4RAUqZzvAphx1ir6kMcVtP1M7PBto3YSwQJzpVZefHxADN4ZowG7Gp2p9pwyqpCZPgPA8mHjZz4w7",
  "key5": "3H6ayjbpbbNybA754WnXJxRkCbiUb79yd1dKCd5iWA9jtdj2XvBQBXuqHq2dNE51QFNtrZ9cAq7p4gUkrAehBzdq",
  "key6": "4pfEDxYzTGiXSme5hr2pit11QLvktfGNk3zHt8Lwrw4JkTUBMKxymPcfFBdBx2ZCNg6PLr8q6rWsMhj4odugis4G",
  "key7": "4boSxBcSk34m1Eojmf5HivWSKeFexegEeAAyypzaJWU74itba8fMDDjkG1TQWjiagxf3kK9MxQXNMWNZmynT77ke",
  "key8": "2zqDVRi96BndxERwvye1YDPV3n19wtszFMc7Z2h2uCzMeujWkcX1ki4oCtJ7temwQWw2VPSuVF36rYWyrGEtV7Z7",
  "key9": "5aipbANqgvrk2F7vWCvWm17ggB4FehRvh4QAvvgCcobHRFTtswvPXDKXVxnMrmt63F73xmbfgqWFtP2g1cxg4dJR",
  "key10": "2NXSb3JwZPDPp9h4UfospVeAzwadAWq9U98haAwfZT2iiyrqukaQbzFS86fnHMsPvQVjmmG8xdZXmNzdB9TLeutP",
  "key11": "Sh8n41Cn1w1voqn5xhH24xkuq1skrAZmnttppvtJpd86XBXsringVFmAAhN1nrFAuZn2emCfWk1rKtE7RXCNAqu",
  "key12": "4DhFsgPWfBK1wSLFi4aetc181JGKkkXFfHU9W2oeBjzRruo2x29f4i3ASfVJLsq9NFxeH43773e8v6TbPFwCkQ9u",
  "key13": "2wtWU4T3CpkJYHcwyumhUqxE8ggu28P4xtbGcLtrhzSRyeffSh97XRPUbzxQ4m3inpYUBStJxGqcRx2rzwryHVZW",
  "key14": "5SfdNrbgkhbEVsVKWZnVbFZLSXDV2WxGQmx3qJwzSdoRX78o9GPhjah3tC4K6aYZxhLJw7cAbb1VMD9KQEEMQ1J1",
  "key15": "3mttV6xb1fpimpQm2U8PjEnZshEh9rqcoHcqhDN9jmYNxWi3nQkffN57gazKSvZ8qbDv5dHJUf4ZuyKQ3p5rrt9x",
  "key16": "4yZc1dLwfjmoH1aS5TFhD8KezXHz9KQtvbfUeoBGkZwgjxghU9GJprLba4oiAajUiCQv2bNcvu69EL6GMHrtumCC",
  "key17": "4p8z97T124jShJRB9CCjmnC8ZRgHBHn5yM5kudgmZDS1RLN5Xa33pFqt8q6gGnFoDVQSzis3785DwZdGzWQ6CHHi",
  "key18": "5CrhN4xFyJGS3uxV45eikrnm2vYVS8QjE3rCVN384M6QzboWx9po2AZ5XFNSxf6TyUtHTo7ZQk3Kiw9ZXRAQiBfT",
  "key19": "5m8t5XUsXzMS5CuHreLN7gyrJoJvFn3oMHaqbN7MBaQZjJ3rM9JD1b8pv1mWAvpMoeswT3E4H1nFAeEZvqrD2P8N",
  "key20": "38LPdziX9jm1bHFRTHD6eVB9cMyNgjT7fSAz1AVVkyFHxUwjujZq6SA88JrfcSRC7gvvnhXc7pCxXTY5nQRRUGrU",
  "key21": "mWpeQ3G71c1RJJRqeAEX6yxDP5hZxTiBtUKEvLK8qVnFqFeXuYrW1RPCH7MYj43LdoxGQWGeZGohqi135vXRrzP",
  "key22": "5y9w9k9gLwYtNfaSieJmyQPxctkZu9kYG3rujz5f7mY54mWPB8qRAyFUjhYWvYe2hmeQr3zptEZyxiSQ2zPsMXuC",
  "key23": "4FTpynBpvLMT3UXKjdepYxgjahNH99eWmBrJXEPcb4H6Tar8fA1qsmUpGsh93doj3d4pVSYDQbicrEsNzHYCqr5J",
  "key24": "3LAwui6doNsNz7gXVUYiwiQ27QSJTatoxftt93uoaaeVBX78w5rm8DRxpRbvmZfu1yhCf17F4HYVM9sfgMTBHUik"
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
