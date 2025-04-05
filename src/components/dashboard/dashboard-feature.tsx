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
    "2pRxhsjxxwXXAgf1BTs6RKArv78p21S9Mn9uuUYMdf1TuBnxhyTYrkFAs98VZTkQeujbvViqzgtGCUHdsxPfoxFb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5af3i3HuFydXttrANsXiz3gBYi1hcqrKrx3D2HTZbU2dNLpFSzrZVYzY9KQJnkqSYBFfvAFTPEHJj29eZumYHWoB",
  "key1": "2g1BFMSbxPtLee58VcpPjWkgt7efXcHMQtvwiqwj46ca6YEwc9y1EvbLKpvEf7CJm2QARmCgMUUdL1X82K4gxVoR",
  "key2": "P74BCRkto36xBeduZuTXNFpLgt3hNt5WX6iYcdXPw5afsHvqFo6XtjoL6sYHTwq2EvBMnVnzP3UMLtujKKSXZtj",
  "key3": "54k3HWQwcAAXxyGw8F5ygcJWJRR7Cw5Gmqax2pPKtCZvwWQyfCEhnEFvm6BC3wGyua8YJGm1XhABRatvZReWKzSP",
  "key4": "51LHbymwPCn2sGxrm1wDNyVCZeZkmSVf6ppkDC4LR3pRZfYi5mtod7gXj9Gi18LJweUcSJAekoLyKMLmzfYAbrXR",
  "key5": "2bULEaZxtd88vyMGoYrDmVoAR8gJtkux55LC97Rtb6DgqHG3t7kfEQJXVXaStSYQpqXBBu2Y6gdP1hN12L8eEFGX",
  "key6": "3D5GqW8bRKM6AeWV6LmLiv3qDZ2z3ps9Eku33pJaUEwHrcHUmffPYmKa5BAWSqpT9aETVWRC2kF2z95gx1P9CxwV",
  "key7": "53QyfvwV2KDHDDyVsnQAjMaE2uMtAkT1GKJUgUc8dmF2Z6oeXzVFRnUrL8zz1FHK3bRXiqgb1JZUXjt2nNbSrY6U",
  "key8": "JFQ9oq2iKhc8BJgyU216C2MaJSyYJ3svSJs5gWo3NrqwBM777vp9dK5ji5Tt8ceTNbDoAe5GjEqFG3X8UFPuofg",
  "key9": "21iQVvHnzqVtsakBzGUkWtjrn48xiHmcPrSjoHZjcnc9XwsHKqsZN6gEeCaDpR8pL9wFyrzbVK1RLhbL5wJzmTfM",
  "key10": "5vjTzUEWvSWfVcpb7rPvzDPn6CRcnLqhHFhLn2ib2o5j76Foj37gfkNW3uyaUaGhCoMN4VyDg6acbPcKS1hP6Qb9",
  "key11": "4UCo42oTdzPdLMTtKRZarYbSjLoZrVqG9kPNzg97B4M8qMUva67jWQrgekvqqyAZ5No1A3CSEyHWQZtNLY9QXdPs",
  "key12": "2FNndeKibEgAAmrLKEbNKoWK9qbfdr8pVSXPHjehSce2yXvHvLG1wANdSv7ut5a5erq28b7kf2d1eb1ewQ2ZD8oM",
  "key13": "kfpJJiDyaRAK7aXWxMVoAPEmq11Y7wUGBRijdc1ga1oTPoFGz4ajoezA8GqjjU1fFVWegnuEuKjz6x56YqwzhSw",
  "key14": "4NXsLQi7arxkRU37racWmYpKaPcyrkA7mD7jsJAYc1MWDRLC5rP6Jbbvzu6rZJU5HtNNtsqnC13i7mjhJYcB2hNA",
  "key15": "4Cf9WXxR1hjvCLVrDMrbuR6A5rjzaDdqWbWFiCVoRuJTFyKniqSCswiv18ftnCD9SEQQZuAKwCozEY9ZuSDdZXH9",
  "key16": "4QeiweLmc6mvjmmsJ7RMAJhniK5eWETCcmPx1z9ft2zdgGXanLzQifP7zGFBtaYjhQqdZib1gnhty8vnjYY4nQSm",
  "key17": "5QsQZKJgw58K6y37tekTynGENE2GrSLv7JNLQXsJuGHDUGaYJc47EDrz5j5yW8KyLMUB9Ggbc8o6H5YNsshfH9P5",
  "key18": "97ENB4kSAdV5fBesjV8XScwyLMruYpvJA4iJUrcMmo4N5Vsh2AagqV9r4BcDZK6cbZiw6drnkBSFrNNM3y5EjcT",
  "key19": "39BtNoMUoYdZrQVT28mqkjBdhV1fMm2ntJcZ3gLonW5ehWW1aN2yRNV2eXfPjyrVgH8kq1owKaQhAmr63e9TAvWp",
  "key20": "4jTDnJVNsnpYDSZXTNmYKoAQY4zCP9rZsLGWGDmnrMNUWDyp2w1Awd9Psr9HyQqCfpvZCGwDRuD27twxJJ8ZYwzu",
  "key21": "3xeVomzWwPdEV4CVMo7DRsfvGFLQGbCHh5H2mzqiJLttTxHLG6RpwphbGose8MHnHQ1WW1qtASgsEkNQpX4fNAob",
  "key22": "24zgYsEyGYGfcz8z14qSRb9zC9QruNFY4rbCqQ9eg82itU26ndPbL89S3mC926dMvX9BkQmpwSB49Xw3hRB9B8X9",
  "key23": "D4USLCBbzs2EBzd4YZhK6PV9r3aCyErZE3FtTjWyNvWEVjcMGzcnpF2AP99zG4nQwweYSR6oTBpem75sPXQD2cb",
  "key24": "2NF9bkG61ssMZUzL3vziV3qZNmDDkEECZic5m9DEDWrVz565apdAJEMUcA1srKEfjuAwQmJvJsfqnBuTATSspLJV",
  "key25": "8TKwobm5VG3gzEM2ZXASFu1p4aVXUS8TryWmJhfMtatsfm9ko3nxj9vumxWzdR9dxVg1LhrrVgGdhwK6GDCX1YS",
  "key26": "4v1En8RLFuKms7ouHvnkzfbQeRNgcF8Xpv2Phd8Nb15A4fbVBGWSTFy1AqGrt8ZRBiN511ej7mKXSR5TZzjxtXpu",
  "key27": "4eEPkMEuooiBPYfGUZpsp5ZfGf9abrqHsGxo2PGY5FUBuFjLYcEQZWJfhoGYu6nEpkqqGm2N2PXTyVBpSn6JwHah",
  "key28": "uEGUVWPySYmZhWHPDK8PJeeKd674vHPBBdoayaya1wGhAC5BXM3VJpmbhP7xmeApxT4M79GC63WnL2Z8NQQs4wu",
  "key29": "2MVQQ1pzJaXQdKAU8pfNyREeQLSHPwy8qwae5QthNN8aYschsRiejbvAiKVJUUjrJvvLtzGvkQhsZGhvjTEYXyPw",
  "key30": "5tPPNTmaJZKZZnUfB9RCccySZ9C14VDkJbbe9gLmd9QKbnxdSCUfvBZ2ZX2n57KbJPqrg83xGnaAeB9aWnXQhi2V",
  "key31": "45MYBWnZZYCpAM3TpusgBHroekjf4sMk5hDaFnuLq8pGS1bcBuZEqrS6rrQGzzQR3mc6YrYnQ3XjtR37psJPjDfH"
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
