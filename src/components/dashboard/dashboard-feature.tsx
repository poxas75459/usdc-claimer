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
    "2hQxb4vh2Nxze9ywgP2KjTzKH9Zb8oADwDqvmzMxn9ywjwxbrs4UceAjurHTwPe66qoNL3s2QPE1X2jDJJjVjJix"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LWCwYgbtC9YJhaH2zpJMreA4pir3qdq8KTJ5hhc77BUXt9MjBooV1SiPiy9o2RRzn6Keq5c35vi1SfavCTHFyUX",
  "key1": "5n2jTx7EXzgPH6aBY5ELjpBD496hFCNko59neC7M9Dy9dEvfLv5FDaWTfwwArdgmcxKNWzh2eMb9s9L7KZzwT1wJ",
  "key2": "3uqYNBNALmimjbYz2WFPc3Y1Xuvz2N4kbasF3N6eCcV66xsDbp6nMsYuBSsdeXarXW3MakcsBxvGCisZEQA6ukhm",
  "key3": "2mCy7bob7bGsvsNnWvasQrYtKU7T4Sxi6TJY4SUvd2cPzvUQzazH9zhbPfdZvAHY6DE9ABdiaZSQXa7fnD8d77cs",
  "key4": "4549vznJx27y3SbfQDncZbDgP16KKtGRCB4Ke8nFWy1sMMKrGfv5PUWGZgmmXDj65ZqfiMk44FFyL2spWgZiJ4Jy",
  "key5": "5mdHfjQw6rw5rTz4ePDebcv5qQmN5qWXTp1kLTWoVqkbdjxrjPBLsz9J6xvfCTQz9YcjJ1daF9amN5dTfZm9QWAt",
  "key6": "4VJ7YtTFmPSqEyPcpHkkPKWbsTpjK8hgK5Y7R6U2Rw4piJGgDWPYLcTJdaPoD6poyDucfgt9m8eew2oGgTxDBPd",
  "key7": "3z9tMgXGDxkdvxEK9SX24ZPCQYq4d3PPR8nqjZ4QR9PCSRnCWQNnwG9sxPJaF7vQBK6T5giVyerXZe3n444eCQd8",
  "key8": "21RTGahNborJPjMMzb18ZeBjV4CovmWaorL5VdXudRKc7M6WEM8rCVKTjCyhjaZwFwdCeYUF7o8Kazs2wYm5Xrms",
  "key9": "51FAr8GKd2wehscCuDQPLfdiT4MebEmbhQuvv1dxkeSaKQCqiB5FYFULU8xVZCzMuBVZbFBhziBUzJGB1ZNS5JZq",
  "key10": "5jWbriHQgv5d51xMSEhJw6H6iPi1P2xWdrrJmWEuQFBeJenK8a2F9pb6snWL1YcWTYNnfkS9S37zMsSg1ghsQAE9",
  "key11": "QW1kQsCAHSW9G1nNSRHcxMWafZ5jT7WEM9CRmxD6gcwPb8QfGtYriscXqHCUXPr5358FaNaFNYi7uvH3uWRBTJu",
  "key12": "4ecCKPgZgy26DB74dahzmMXvwyce9FkGgumkMsYA1exYpxyDbUkGZ949WPX25dGy1ZMZF774eHkpDS4BAshQBfak",
  "key13": "5YhjqkihZ1RKS7vLMF8faDPbKAx3d7n5PkFJ9ZiwCzGDCtuB3MEcApZJUjdiwDEgmPYSHqA4DrmCE3kSWFoLRDmV",
  "key14": "4UeboYovpukb8BjFXkXd6CXTBb5BhTiePRNir2LfKF3BcziyQSmZMLD25UVgxDK5as1jST8gvm8PmRivT3CCKd7S",
  "key15": "5aHb46tso84mtaNCiSgeaueu2kY6uPHuujTUPEHr9uT2h1YeEc4SvUtruPFygvViYxVG6xJY9eTGKAJRNUBXfode",
  "key16": "2nc63iQnq4d3twoRSNzcoa7MRZyHE4FJT5eDEaphxXiyVJBQxgT16GcMXAXq66Vw6MoPhVxDcNxHk4Eu46Ax6TgJ",
  "key17": "5hGABnFXpT7RgWnUuHeeKBy9oXUU7QNq71zUmPzwnmfnGZ5gAP2jptJBzYLRRbPDQZd19qUDBixJ9F52fZgGVhzP",
  "key18": "4tB3Bzaq4DoYR64kiFTc8EQdGHMA47PRkSMaXwrBUZFFSi8xyFHBiub1S9ZNDhv7MjxyoxYsdrhipWhXP36FWedj",
  "key19": "VEQcs4Q7cb7m6gZzLAhq8rVLDNF6bB7WU3yGqstX8rmFKrniWBmDfExXoudaQjjNvpLhcbSAivhAa4HiTCKZ5CB",
  "key20": "62P4nxcXrVAB2DANF8CUkGaY3kCiH6Gkf4HsW4MMjqv2qQ9FCew4fZaZuN4hfNujaGs43UcZCWCctWfdimceMp4R",
  "key21": "o1dAA3vXUP2mKBoYicVgKRC3Z1ieoGhpLCyZq4scUg6447Fz7aSyuskAuwNX2FqSmCUQfuVG3vLDBM48cvXHuYg",
  "key22": "4esrsK1DtSJZduNpw8d1KMMjbg4ArhpFQKMhrdCk5ysdk37TmHHNMTtrPK6zQeJiBZqesFC5TJc4VHnywpygcTeX",
  "key23": "61D15JNNCU1ngcQGb81qEFSJjCZeGpxp8F9gD5CG4rtvBtgnVLors4LvQ8W5VqG5norRY5psgiSNsoqDjhjFE7BD",
  "key24": "63rmYGxMe3TCiPc5bqzkxVUEDWk3EGdbLCAxtLQReiLFKrXukLCHop8j8WRam7JHu4gstLCMmiDfPysDEK9n98my"
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
