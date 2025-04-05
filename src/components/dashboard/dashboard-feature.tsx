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
    "2HAXS8ZP6ZfyEVu3sk2rcTSsxps6XZSCEUEW3Ff1vEccTx8isvG1WG5DAhmVDKmBWteVs25vWAt4EGdJ8DFpRugq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hQWmp8gPrBSHygRkiGtRTnhmHEYqLQr8nnFWopcQdhXGyBqtko1nkjJ6fjTdevuM9o6Q9GFtwN5oDPNGb99czKS",
  "key1": "4Lah7hPfdiALkLQXMsnJjTeFRYc9ZeqsvfzwEGNPSf2xuHoNvewLv1uSPengUw8A7td275voXdVBTJXXu6Xhcw4o",
  "key2": "4yeJcZTiPbdZRh9ZNANujtefrCDLvteYUMXQ6PSbhTHEpjH6ScUnPGTZhfA1pzD2tKFWta5hXwh7PYSiPN3NadnU",
  "key3": "312XreSWgu3H8wvJd9ik5wyqR5uEEkKLyhXsZhBvxJXMCAXNGBq7AeXMh77g4aYGXTvvtLPwBEDRLZXKwjfnzDjr",
  "key4": "24azN3UwCPE22DdatvCsuX1GYQL8YsjHY9ZbAn4B5mqz8Bh1tLBAxf6iEu6fggnWpGErarwLxYRsaiu2XQAAvY4i",
  "key5": "4rK2xJ2S3B3LCJjsGAgV8uUKv9m3QaPATqpggUpr8yRxeRCnd1CQyJtGPdXM9Umss12wCHRqZgky5KAv6hgoN2kZ",
  "key6": "QbYuftezBrWJMHHSHQgkru2QzGRamgpVzWjWFkw6QnKyouHx3fA1mm4mzCeCr39wpKytEJqhoN1ZmGJSMmCMd2u",
  "key7": "2UB3Qe3QE9QxsHAK3jTTYfnEWNwi1sXchAP5zy2a68RMxCdPq2EPZSKLTQfWQ2WZe4b4CjgqNdVrPUfDRduw2BY4",
  "key8": "py52rf9k3czX6xDM4cpYhnX2oHJN45irs9w79whhPbwQMREf1uipvnWd67EBzvGrJdJrtNh16vHf6D25ntNGtQ6",
  "key9": "23HD6Ew8FtuMQjPT4UNexDQAHdYAKVnFEY8rCgbjs19fbTssKtcmtxj6WQnhMCNAwRZDexZXf6TXTT6CVTc1KkpX",
  "key10": "3417HAK8e4EPQ16GXwQfgDQGizNP1pqyYNyzsEWfkJMfqg5dAGW9Zi5pUToh8pvoB5bnrfGsiCRGc7c9nUALDRak",
  "key11": "2rd4dM5fYrh9aP3LRuVkBwKyxAFLG9Hjuen28qVBg9mhjBGb9GSBkbupR8geHX3dk9UDYVrqjy5QKjYejEwbYSG3",
  "key12": "51VjiVZ4VRJ2BzQ6ucnVoM3C9kZzr9hcwD4qjoMp4bJtCununc5g6cexVYGLxhygYR78iThxjCMJJrWcWzbLntro",
  "key13": "5rnwWGmZRbd5cnAjm1qx2HS7PpELzFyqoMRNsykdrsf4vTwWJFnHG3n27xH4UzRSDXjRSAKVj364NCKMkUkjc5UF",
  "key14": "18uEJzDXuQqyLJrxDSrqAwQgSUHng3dC4JUT5meNoBjhSHycs1gfMeazq8GYgcshATbWE7nKYLRJ8qWsjnub9Qk",
  "key15": "35jAzbKHdvChqi4yT47N5V9VqNkfr6V4TLcCyXGPRjMAzFeb3SqZkB8kPkfJF1sNthFNKZTF9nWUXKXZqKNQX1wk",
  "key16": "5XjD5iDpnkkVDjPTF4go1Nbk3PGF3YdnGwv7Wc9sNebRjABm1hKEs3KjRTqwYmQXdQxdjUnSZqKhptRuGCJhhqvw",
  "key17": "3hKTvG8C9MfQsoMXCmnrpjC8iydLd3tNnFqLYN1atPKub1s3o4zCA8bdrzgzFa2RW8oGdijWKdfWmdPnWk1SQawi",
  "key18": "3gv49g5BE5c8q6ULez4Lx4qKs9xH4xVWBtp7Qz5MsRqL1uEdQmjPPHFkpstiL16US9nfAVnmgre3Q5yTxW87FRGJ",
  "key19": "56K99zCWJxAsFMGP5UH2nNDwLuJaZQoopknkdewTpZA11unrqCUy1k8y3PKSKsCWU2tLwSiQ4LqoG3LjhMseUPGq",
  "key20": "HUaMSR8ztLmdsagvBdq8geK7QrJCsvDAUarrcJLGF6zE34Mk7XjdZXn96USGymeAFaj6TKz1aPuBoKoKg3krLKR",
  "key21": "5mriixwsGFyeFX8UtiDQtZ6t5N8QzJTQrHhGim72Kg1iNv5YesAePJnUfdr6v2EPYf1KpoyiiBQSL5bPrQgfBVLs",
  "key22": "CoTCuoN5kmhAZTprjtuC4dxTfcyEU4p8baS3rF71DHj8yHw6RctJLr3TngrtKonDpYHwy4TxSR9anor6DYwtYqZ",
  "key23": "NDtQeghkDfkyz2BJpyM9jWJBmbtodTY5cQuE3qB4R6Jiv9JrRf93F8oLWc43vRM89YCBXQ82Z8HyNq2WaFd9JTn",
  "key24": "3dwKgNqZXQ8Tp6cCJxrPg77oDLAteea8azLE8bxqqu5kW3dYrLexGKXE456LnaGNFFDG16WVB2VbhLtsbqGxpf1C",
  "key25": "51wDdUqkC8aWVHSZrsc15j6b4j97mMrDn33RQMdAteezhNWGRSH66Y8zA8zPGQxfYUBLYWfErHnvdZQasm5LaYn3",
  "key26": "LtJAnaSP4XcunHRCYjHhdQCsQa9AAvwh8rRXEW3iGqjDC453XBw3URG2GjJW3UsPD6UdbrucLCJmgef8GsUDzhc"
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
