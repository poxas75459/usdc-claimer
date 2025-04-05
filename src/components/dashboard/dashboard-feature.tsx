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
    "36oAUA9zhM27Qp4o1K9LGamLgYGLt6XdPik1K8tKMQhk4AatSTxm4T4WMiDNYNzvYE6UC5AyKX8dPCHLfBc72jBa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vS59K6cdq7wAhDY8PXnVNJWGQ7wH8KBhxGUeHy3egjqPCNLHp3gtMRA9jXcJYqr558aApimM2ZJCcyjDkay1vQ8",
  "key1": "2LhP7JtbigvtQ39JMYaycVSK1tvnwNk3fN6cKSNmHr8skEWaSrtp4d5JHqFYsmLnsrkPEfFGxJjMcELcLScjRkvE",
  "key2": "63DHXvRPyQFVjKhskrjiTAZigLkBBLmnNZ5SxUXq4JPLpSyxYb1TEsxdghKn4GXqFz8syYgN9y3hyUudDbCHXg5k",
  "key3": "ULgRscUPMC5ctTVFo8TKFMGsXExjfmD1VjUeYWGVWxHMcqaRPM6r4tJukGWEjWELPtGXyyhmbw8R6V4TgxQGeSc",
  "key4": "aQWiKrwsxo7X5eY9wXC47bCZJ96SihCbR5nbyXEysj4yXnUfC5acDKrRq3yJQ6EkKADRHGX9xxjQnqTh5G4uf5D",
  "key5": "4V5iHeh64Fd2Z52urKeavhoEuN5xA7iyeT2uCkPgUcBe8tVbLke1QXYoGus3VEM9KAJzGnNxFd5ALpFv4vNC6xQW",
  "key6": "4FBSWwadC1X5mLao9HQejjXDDGpgKdNtnEmj94cPiU7vd5RZKqG1vbTjn8znZHPJKQRJE1YrSCS3m4Fz8TxzrYMk",
  "key7": "3fsHz3n4Xywbq3HgeweBLhJgrGQBQCX1ay4JVhB61KxjfTbkbZXtdBks1R28aj9Vo5DJZNiRhQdbaFQaSiUWhQ2C",
  "key8": "2gvuoJAWB4rX8Brua5TfnZjzEqcxvcUepAtmaeU9X6qzjZ9rmP4bDv9YmPmiatRNiwk6Mmbbu6tNqmhFZNhpvnnj",
  "key9": "hJro5PSkGKPJnCdKTM6A2u3ixQJ8DBanzSfz9smMTHVuotsuzXWvjaQ9c6uTPJB2RpQHRgfEcALbMgUb2eYBRbH",
  "key10": "NS8bhbCUpB4KbEJ4vCByvChT13aSiy6nsHmDfUkaf64hCqshRzWUo3uo1VV3foGuFEEvvK3S3MLgYgCo91xWZ1A",
  "key11": "2PgM8BYcWDv5pV5NnEEruoatqJiToQNGhPoDa7MrmNZqaFFSXrqHniwaxt5vNZFVPoGnDPZ5sFNoaahAyn1Rgd9Z",
  "key12": "odW3Btq18ewa5fU7wwToEaMAcgAVWnVWhp7hPLoK18d6dTMoqQGLTLnc3wfXFg86qwEX7V6JqeEdPe4oTJyAXL3",
  "key13": "2JCcLTDu7g9CXRvXGHXdkEEeRo2cyYi7UZs8RcnHr2kNk6ntf9h4tPLDKtHQRH3M1hn6R8unXQvrVefrKQZTuCw4",
  "key14": "21iGMUmQXTVty8QcBye2hdUtkdhuMSrxaYk4qxhuryM3suk1AppUPbRaLqD8Swzmeq2YdrkrjAWJxABFNsDUTR5c",
  "key15": "4MNA9zcNdCiRLsspHjGsnikVwsyNt96mDNYeqTe3ikyWQXQDY9qaKJTevK8CmWKfQYoxHVXhMSYFgyx17Ek8ycb4",
  "key16": "2EUq2coN6zVzMCnnzxY6ERciEue9gzAiLvkEN7r7b7Ksgeb3HLyCGD2ULCGpGBWefA2Qjo526Q5mSh5UYKYvvKYx",
  "key17": "4MqkPYGUAatNqzVSFJeDCeVpQgtD5F7MtGRSwyCVrGkF4xEXFG2TAq5Gov4s3Aa8c4yYDUq6w7XwSkfeQTim4Zi4",
  "key18": "2XL7TAouNpMkQwxYJX2Ru6XrGqLE7P829MLoFqDCVnjNs5or3dKPk41Qn3N9Hqea35CUyEmGBGXfJ2NWS8KjA7MJ",
  "key19": "2drperjs2pERoQaVszfNmc9GJ1Rbe4w9QLacU7DnSRFpqTULyBHph2PUf36b94GEkh9amkWu8PwMArgLpuKeCgJ7",
  "key20": "4VAYxHqvNHpzk8ahtxoVDpz2cKDSMHGmeSenW2sC9J818AZbfrsJ1zAyjZErPWxtgoBJXZPFBMdGjg6CFCuvPPid",
  "key21": "2qF2dNbvfZ3H3y5k1BKmpbChnPLvfxnoiaUxQ1DDNLQY9YhiZxY7c9HfXp4JLtZa1i6YKqLdnPUY5ipp3HWgF56y",
  "key22": "4xC7cUVZY2FgLMF7nfaE91m116y4n1YuSGh84hW7edSXdvZ3NagPcQunvB1JtcmgvToAZ8gB9nAQ3Ec2QEpjSDeS",
  "key23": "5P6nX3EmRxoSPyBdNhHdyxUwPeJTvDhvGnDS9wrNLsjccdJMX49qRtftp1dEBeBojVfmh11PnvuRy9cDiEMJEZUQ",
  "key24": "wPsWRapK4Weg5W5V3oiAh6gWqjhBDej4meBwbsJYvMTCtfCBEJoRs8CsaHFsp1jmfuUCP1Ts86y8Z1s4SDhoyBg",
  "key25": "2icpBbMoWsWZLP81HNUQVR2XczjoAnu9F1ysrohEPPbVEmszPQ7sozhPyjUbWxzzPopVfKzrQFS6qDH3RV9ti4Pr"
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
