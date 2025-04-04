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
    "3gk5yJXNnjsSN1S6E18QJx5G9EuCxYcbPEgbPAS3tYvpHu11yMEuhgEK2CMPY3Bqp1LAqm8hfF1kW2UGP4sdbPLg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JCpWiErvKHDYHqw6j9Xf4HsWjUyyMxMywphbZdhRYQPhn1uigwyaFyJ4JS4Fy2jWhrajDVk3UmhkLL9oP7iQjei",
  "key1": "2HKxiPFdCMMEXqwPB9CsTsseyicSqZGGpiEbXXBwcFJ9197TWKtJ754NV79bmnMKZ46FCWfqraCtqSvHD3cjKizW",
  "key2": "5GBMiAnYpc2ykXdyNLekYHNwa6FjpjfarNLJddewwqET9PLPrFXPLTGj1FM2UQLFdDoT51W5JaDxzCbkE1qLxb2p",
  "key3": "42gN2SRpTcYrcBkt4fuhvXBkVxqvGbwiqcLucjD5ux7j4rw9dd6GwgoyMYi6DUcAouz44NBbKzCm1WhQKxijD6XM",
  "key4": "yNMnttPhdz9dSdyfC797DfkqG1ssWRFVrqvfG3g8EXVXHZFYk7k76Xvj7UCzXtMUtH9JiPRQtqv5qJ2oeCmgrbN",
  "key5": "4sPydh96PVL3hE5GYe3uWvTzy1GcxBeNogDkQtAXE6JypkyNDUrJxE7zq2F1bMuZHvrpDmyvqJDscYtcKsd9sPXG",
  "key6": "5StuzrbTqR2L5FixH24dNaNwA2ufwsm4a34hJ8pwoG2eny5Rv2Eu2Hm1UPhD2MzftJ8M56sNX4zZW3ceFdu3JWWZ",
  "key7": "CtmSMaxhZy5qBcdPvxgP59QTwSmNH9mwnkYzB2NxUMGBBPVGW7Bdni3EVi1czRRbYLnGK3TZGwhpz1ncoCYsMpo",
  "key8": "2bZo91XBT18hL9NGqPt6tmJMLJfAxUBBXzSNFi7cQrvY1cJswf8cNJpogoAssyBiVEdft5c2nBUBUiGefiknb7Ut",
  "key9": "53xKon3GCkyZGNj6JkjKXu2TYtJEydMA6Ri4QJVJrRQT7deth6YfCixy556S76qFjtTRQx9wfjhHH9cF7mKSGrJu",
  "key10": "5AmkZEjXzKkXubU7K3ZXBE3KrLrLYEuHGvdpNBBcB625wfNhfgv9aD3h8dRAtWr4sCRDvwcAumNX9x6bndpC2Mjx",
  "key11": "48eoQSWJAzfEZxhumTru8mzPwvmXbznibTu68F86mW23Zvqp24y5dzm8sAhuABDHpDxp2Z8GnawRnFLGABDZvnRz",
  "key12": "e9AkfFtrraLHJC7wQHB5WKU8TU66Lu8Lju4ewjSLX5TdCKBhvmNcR23WbchpXHN5rpBV6bEt1MXH3kMiBz6zGoG",
  "key13": "35bY3t6ynmWPTre1iqF4KdGmJ6Fc3Layo4SgybugvwJBG6PdNYrctFo6TEA5Twq44HRDPChXDSXH1jFqVZKDLNbe",
  "key14": "ZNkAzS1pexbdMyPg398zTnTH1pRhfuHKqCMzVzByBVpeZMUr3Bvyqt2p14WM7GG5sjbBGXMUBEDGYBfKQT6EhHE",
  "key15": "3Ee1XVqu4azSH1QQUrKSFtaYRNBvWG44iGmijRcfsFvohZWpcSeR6CMKR4BkCcrxUJmUfkXB7tCKdPxgZYVEizAA",
  "key16": "2uRe5uojYuHPtYgTSKiXwYEcUc2Ws3NfVvciVaWEQWsAMBYBb7R9SkjP3xoxkopm3HAxgFqjtkmdwMgR7LfirFa8",
  "key17": "4NgNSTLGQDZkhsgPTSUDkgrmByzbHEKJxSW3HwAZBQphJRLdeMmXtGdvCmCPQ5on93RzQVt4uS6w5q8vxXDGjNkE",
  "key18": "KaTPfE5Yixvaw4xJsxNXGNWL6uFjeYdfxgynknerY5xhsMDpXL5KvXpDJdaW9gGHUUHUXVYKkHjXRqrYbhh7p2w",
  "key19": "4osB3hQwCZA7LA8WBQAhsS3jEM6gfHB6qvHnyVE5oLqrJTGqxvFVEC6SWjXbHW6u2iX3RjPJT8EGXEoYcEq8Q9Jd",
  "key20": "5TVJbXpk5HzwV8wfK4Phb4E9MVRLxRP7g5qj1JADJ7PoFAUCWeSyDjCw673MP9JkoYD44CH124f9A97vkM46bnds",
  "key21": "5aTXQCoetHWQXQt2EeonUkBqCFMPsAnGcMvJJp5F35cY2AH8NF72QbomcG3vuLQhtxRW7xghqdFRkY6noYRzTPfp",
  "key22": "WiWcRyUvyfy1q2H98V6QGcLrmwfZqEka7UTQEUHddngkFWMdgvCm2C1SQC7gN7vfvaepU9EjodDgsRAqxwywEdB",
  "key23": "2bcdNBVvxwz8XHRcvb35fStuBFpHoAxH7hfjkRTMeVfsPuLEBpHJ1L23wFak68RFvZ6gReULTV6CQdh5YzSMtzpN",
  "key24": "4yJR1oPu3d7ZrVJeQqioYf6EPdc1xMMoAREq7x7ksyorz3gDyac2egV5LhSfurXGQn2eAFCxbrBDudyx8kGgiq1g"
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
