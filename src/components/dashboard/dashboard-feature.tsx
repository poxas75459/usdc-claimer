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
    "4iyxqvtJgo1pFwqAx2NL5nf9YDMeTf7A3m4cLGdWaGbMTFzXZd8YyNkQAfqjZ4fwJJAVgh2xmBiyvJdk5MJpQURm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AkWfgYVKxDo1bviigfrQpUyF34KQb1BqtL2mSZCgGrKf29qxHxQpzWECHyyWjvNXEixSTS3H1jHv3KBztWWHzhm",
  "key1": "3vRazxMFa6ggqLPeuVQyt3TrEP5ifC226s6E3pRvZmCrYY6KFsXrpjW4AJ3n5Yh78GEH7J8ecjZRgZUJVVfhVRU3",
  "key2": "3pUfP2vyv2eEtSoBVnEejYcDR4xzCJiy5rFkTLotRtjYzQuzWyaem3iWUs611mawdridLwgLV19zXX9k5pMgy75R",
  "key3": "3athNUG3kzEDz8QuhcrTXLDVVhVTNYWY4RnpTzbMuYRW1MDrhyucsVH6Ae4PN4jXofcaJ8NAxDTmmKkfsU59FisL",
  "key4": "5HVJchqECmDbq6pCgJdWTnu5Ev91cCu9K2ut9WC5N6dqzMsxC8viY9TGvzmEFNQsdAsTRLKnzaLj4qFXQ5t5EJcd",
  "key5": "4iQPC8fHZ8gHtGmWNA52y1fS6788VMvdenu6qmBeNAPjXg89eHiP5EXqZLCZATwwdsdZ37aaR9HBAFvmBrf3odfY",
  "key6": "4moATH8V1mShxejYPxDQ7ti3M3HHGcuy7BrxTtH2ytPxEQBdfFrw7vxsaCf6DgH3emaJJoe3A6p2jKzShZ4AntyT",
  "key7": "4QAFBQEVV5fBUD5i7Qt4F7DxZfSQVm15368SsJkHbvxu47HEd2HZtMBWE8tuKMmyCqydZgYtoi18iKJBXLHZ5XiZ",
  "key8": "j1fD3TTYi9EdHJkA8kkxror3wZfXEG94FLtGBk4Zh5AfWTw94PL7T3CC6oYTctu1KUNeP5yXCGTXaYmCodXyTyw",
  "key9": "9rKTmT7NcpNB8SmtAg5hWRfRcbVWkts4LcUrxYKMZFP1YfHmKBEZGUD2qdzC1in1keJF6Xm64sq9KWKKzZxVJHr",
  "key10": "3oYbAHoBEYDyfJhGtw1GXrMgDmLKCJ2BKSxDWLRpXG3hjXiVjTazzVhBymoBTxa5G35HGPc1mQ5ptacYXRXAnFzw",
  "key11": "4XwbcrLYoRGMWvxFJX4ZHUuJaFVQAJEpKNpDqAUzfGSo8zRSXQGPa6R4Z3BnENwLydFvJQbF1VLcqA8W6EimkDFD",
  "key12": "42W5M3xWbMMqdSDEAt3nJnpwQWteAuBMPBEzSnBKf311LgSqciYFUspzTyEMekCL4C27UQesFeoStnNuN3A5dPFc",
  "key13": "5oYTd9CB5yrG6PFhh8A71bXMMrpUaumnU8bsxTf5hXF5zNYvvPcH2SeBYsiq6tBP6rxowPwPNHqkWWNFa25WoaNV",
  "key14": "3op7Ghu1dM41HFcdjZRy46m6E3G1Bny9Q4xhwuqyFG99Y3z3rxt2ECo7CfiRff2pyU5SL9s6DC1hBKodTKfL1fYt",
  "key15": "3aUfTBXz8d2s2mh8jcjc1Q2YPMjZWKg32FT1ijcACzFKEHRa6FBJbSRMbjyb3gD6YoLX86MJc4ivDc2uQDMsnzoL",
  "key16": "5kyt9EnFqJP5p1iERgk1TqePmGmuc3JnCWYRJ53ngBnf9VRF3KQacWh2nJXrRc1b8wNH6iAXCvrgVL1CTmV6U6Yn",
  "key17": "3nu414K6Axfj7C8ZT5vspFeqShNSq12p2wqmYHQbrTBzaY5gH2wYynEBcW6XMuqzBw85qwwRMa9jZL18yTDM2PDh",
  "key18": "4hsUgo9HPAo9uwmWuaUrUJtTaCdbccfaKSchCagFrjLq4S3ajNFzqDzbHsXkaoCX2GxhRF64oZ4dGPYqu1GkXyxz",
  "key19": "5JkLKE9bWsogsdqqy1VxeLz9EPKKLjGLCxM3gF2wTLwNdMKn81Jb7ZiAdhRySg7j7qPm7XvYFBDbNRPQjTVsvhxv",
  "key20": "2mo79uTkCLWBfqTdr5eKYbi2eUBAn26TtDFwAPsFcG6Es8uHC253y687UCTaFCQpvxDmYy8ywsU5fSZGWaFqa1pU",
  "key21": "2r2rLFUEwGfucQtapE2TNh1bHiTdx5JPptTHanwkty5RPkVYisz3iat9dyNfzcsxxRgkckQTcUSQ31jXaPwiGZN5",
  "key22": "MFfqdees8eqbCK7SHMKysUz6gAJVesZfdhk7XjRkGiUdgqL7zQ28arMte9xYeKdbcaMt3drcJvST349wvhDv9Jm",
  "key23": "VFdvWzLxDQdEUeNDgCYHTWNYscXmsNiuuxvSvdjvNpFT9r7AaPNc8ssSfQZbtwj9vmoWxUtugAFPkwxSeQHjVzq",
  "key24": "1FBZahv1ZN3eFEiKRtWrbi5D1rVMpm1fhXGP9rY8QWzjdzMZPKExbj8nyf47MAqkZps6TQTvohLEJWnmgfdKAg9"
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
