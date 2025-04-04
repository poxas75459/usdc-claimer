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
    "55jiYK1zfwQkdV8wUW9t8T4Bn5dSLwDZFTGgMuM3YCEi3v5T4FS9wUL9uvwip6YbS3uiLVz6HmQX77RP7hj7NLL7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cMJrZcyeNX9XQDcd9cxptLndsnKfVLAcpTbdaTeLXQpvze9hyFjPxycW74mA5ji1qyBbfboRmNLCK3ryDHNATWd",
  "key1": "2yHYn8UhB3QsBD3Jc5cDe373ERppH7e5odqNxE5Jnt1WDjEZ7WTk4nhjv74aEeER84kEDAqX8fiewCrjeXxT7Qu5",
  "key2": "4TTCS2qCPVXcmXrNkJBA7oQr6gRXB7UKNY61SAf1eq1qhKmTk2Y3XK72WXa6xVPq27bGdeSMS53R9ptJ2Eo8qV9i",
  "key3": "4fjkzbWMXPA78Eo3dy1rFA4s6V9MFjxiz5eoG8iRrq44n6Vd4JGctLRtYTyjKdj4g96B16aYFds7EFmKT5LdLYEV",
  "key4": "2GqSSfZBZ5YweJAgRba7VEWTLWBy3YxPjfA1BZmg5CsvhhKLDedEhsAy58hUg66XiMxaK7aVqwPyLqk3yPHE1HPH",
  "key5": "5pnvzrfv8y3MPAP169AxjdHa4cL9BwSgiWH2JnmCHmF55Qe8MPieYHdSGxo3aVBUVBsR4jizAHn22B8RqfUueoWD",
  "key6": "4199t5DCcG92Mvix5HqmDCLCQ8X1jYVYu3dc5EqoxufiDfW6HRgKfaFautHkRZR9CHxyVPYj554ARHzCZUnqtoCp",
  "key7": "4SqXhWR7YCXbXtobBxXjFcnoKq6M2hZjVLzPD7HF1xMyzc2n3xLLhVjYC8MHJYB58k5j69Ba6vZKvAHu7FWtikfM",
  "key8": "SKtCpvUbEZzN9BvUBhaij29CGKrEueL4RFWaPUFNzQM5WgEgfn6HC7DzdUSKXaH5F6BJYiLgiDQGKTy2CSER4Na",
  "key9": "42rJ1fJbZZAnN1mfUNhXLzUeDxaqjCL7FQYLmLJ7ytFDS2Nw9P3LH26KXPRUNDAScRzj9NLcu6f7e6F2eqfiqogW",
  "key10": "5ofBD7ecRDV1X93LPNrNrrbCn2dLicnfsKuxNgH5xar4hqMSGP6bDdan5RMT2rR1xXf8xTXhAWdKzNiXFMz6odiR",
  "key11": "2Z2XhKocoYQWMx5Hu8mnzdgrQDtofbuEdUHDken42Xq1hcQ6a54iEiHpEKWzagmLde2396YJJ1KqA5BsvrZvK7Mp",
  "key12": "5pXaKcs9crLppV3UqrnC5VTcXb3EM6bWQkoKoxNUD9yjFYhbPCRmNfxyNMU14xZaJWFAgg9fyDsGUo3PUmTKoPWH",
  "key13": "3v3r1syjbpTEWEVpkBpfx6T923cUT3Knfd7fmBzRXh8qv6dNqNuNt1xmengXgHZ6NEhdGw3sGbokZJPFKQvaDMko",
  "key14": "67ZZGaMUA1Qr1HEoj6SgPQStjREmeQk9Ft3q4qzpuTaabb8y1DCTyzgLvqm7GXP3wc9SWkHDMLD9pHg3WmNPjAef",
  "key15": "3xAhGvquHp7iJymoWW2RxFSf95RE3QLAtxUvaSk8Gd2MiqeXrfTfHSD7E7NrZJHfXdq7cBmtrWgNx6z5GXxQeBJz",
  "key16": "4zRscxfUxd5HZReWfNZnyvsWj7m4f5viWkkLaGTUCDyVTsPUYsmESBKwZoy78Bsp8TPPQqtdUCpmUPBhoeBBGi1n",
  "key17": "5yWJZt31iYZVmojLSZqvcxCiLrVhVVXV9AaTsx3DRsJAQB1TqT9FcxWPz9MCE6D735sRkZRf9f7nqXBTUJJ2GZtz",
  "key18": "vnf92gqiQ78qME5rqyZU785GMAFstt8QGKt1X9c6TGAoagme3UYRr7h2XC88Cb1r4ANAivQNpXPRmRyBJ1BQAkJ",
  "key19": "2CTCKsziaahtRQQgj9Aq9TtweL8GdrMpBZepeWqHtGFv3Bkfii3PQU6E13nhpwgfPU2tmQ5RyjHxHukokHmQ6Xae",
  "key20": "MrkHZpgGCMFzDuMFy1ruZuXtrfx3L8G1jDPdWL9SAnLN3RGNsWwNTVcY7nSn1YTsYpxJ2aJD6B6kGR7QRWsQx8f",
  "key21": "JZhScvB5G4VFQkW2mZZ5rk4QFJPtgdvphjof8U9T5c7Fq1MRWCVfGwBYLyi31ue9UhhpGJwrEMtMAGGoujPsaJk",
  "key22": "2MexxnNvh5MiaaJMC3ZBCzLsawWDZgQAG5JZ2HpXJbWPU2gwgu9MWJn7VPLysFiQyfsRyJSVhyEfVc73uco2aoj6",
  "key23": "659zdKeeJ8QjYDfxJZnHmZmMzkEUF4Joaw8QUGNXG6vhFJuSSaeDS7HtPdMZL2yi5241wsahXQTZ9mjNeMboHq9L",
  "key24": "4SrUYGFFaCdnu79MSVLapdYLapWxqtCdLL9KGoFRA1qcww8xRfTRit7pRBmcYsZFDtNPcqxVoYGbp399Tddy1VyW",
  "key25": "2zpSE4Ax3SGDpR1Z6UUb6YDGfqfMQsaG5AWNGRhcr8LorjnmbrPXky2f2wq2ujig2VVgLQ5gZ4sHCbkH8a6ziC4F",
  "key26": "5eu8LCbXHFSYR94gkLoZjaAvxzrY27XkPAQNvDLbPxoojXK8HLzWb9rQEdiyKhaRC8x7gkUJyRhKnySKe4SyP7Be",
  "key27": "4ia6mddfUmHnAg22oSue1nSemJyk6PdqZEx7Yuxj8JmsXy8Lz9Nn3dtoERTKzm2enJ3SLMfZGqRvLTi37rXsUJds",
  "key28": "5o8jhrxRRJg7XKqEoUM649LrqPkRqVa4xwKYPY6w92bA5Raq3jYBdNqvGJTwukHjeVWQn6i3AZdGx3uZLKVi9vxV"
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
