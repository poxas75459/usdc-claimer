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
    "2doD7X14MFYrEFTz1xBfCr2XnaR6hsZgJUXZq6wwjoGyjkWvaDwkWpjkDjp1C92giYfvX285ZXkBwpR689Kxyi5h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FEEf9aUkGFGJEWrTEjNhqU8hkH1Sjkk61wQxN6PG9x2qBufg6Qv7djCCJboUhv9XBuBKVwdq3tdNtsaV7oiJXYR",
  "key1": "4fN16kQEBVqWemTAknap6ddUM88FUnqM9fJCYjWGyGYrjQXR6aixykz8PLoY5paoGWxkGdhUgne1L7pa4ufncmA4",
  "key2": "2skbv6wgBSFwpQ1G4i66TCnqiYuRpAh9XJQNfx9Q62Pz7sXe596e9FP7uFQC2YuWyzim1nAY1qo6xgVdxKrYekuA",
  "key3": "4swtzfGRudxMXGKvgGhL6ASFg3D1A3AcPAZgrUZcJRXCzu7c6VNhpue8s1XXKt4Tn3p88ghvqzDGituhXJfrP2gW",
  "key4": "3a9D97hofWmAGfxkMffWbuWB6eJVaSQEcSLXQWy6iEEB2gz5fT9fXmNYARJnQQzwj1kHHjhC8SCDvm1rwP9vgaFM",
  "key5": "5ymsUPUehtoQ1TEVB65kiuuKjUZjDzGFpdm1jqf1SqChfX73UXHtAZbV15hUBMjiajo2vHPzNanLwQwrjVAB68e5",
  "key6": "3S5qkixTvMnZ1X8W3y99DWDf933DXwCEYwUEXN4oEARMWCdAsXt8RqBzML4TZvys2FDdBg3fhVtGUW4NgGt2fUaM",
  "key7": "3NVhsLiGg6miV1HAPrqG2JwP1p19fMpSs9u7U1FGergY7R4AZkkTcys4XYijkdnh2sZ4CKPhB9pGnPHFFwJJxGdd",
  "key8": "z7Qe798BC7rPe7jef3NrWac1Nu3papr3QoJzQem9269JSdXsF1ez65wh9p4cGksTxxjbh9C5nSpNntGd2ox6Si6",
  "key9": "5HBregACVkrd9m1FWhXXu7CM1NQZwZJmF4x1uCjDfLgcmGUyBqmMDUvGcM35dunH4xQwv46ikVUwsfbSGprmyc2h",
  "key10": "2ddqTo7oKt96Nf2vhpYxZvKM9KUhg4hksc5QDBa7ssAYjA9muDnijYjtWRf6mU1ifDHnjaQAvP8PL3wkkqgdk1pb",
  "key11": "4cL2kN16qTt4XPBp7JJHCkVBwgbZbzfYgU6i2rpPaLYDb25TpzGhGqP6yzEworaoxrkSg8Xe9p1SDb4ZcoKvCHtz",
  "key12": "2t8SL4Cyf9ZRX75FwkfzToJ6h5gAQ46sShF9BmBBv4RutQQ3yXHze29zZrB95Zr9icL7AXeMQcNwyjHu2E37FM3k",
  "key13": "4LCJe9bpuwwukfTSN9pnZU7hJC1xWiPGSx2NFFMVYnxeVPLirwXJFxyHNrpA918HUwKfmEnyARz7tPZN9cfDuepC",
  "key14": "NaSBca7EwT9NdEC46Htmryek7KSyewqj7mcCjtdbbbZtnGcZBGidxABHJgt2EfHt6PBhc96iLLpiQao7GbbQyig",
  "key15": "2KCMBibjqdKy6fTrj93wckfUgmGbwrHdC4tkYExdyBTsJ9xZMjtWxSzbrju229Jjc2267BDdQXi1GePRSkgsYqPk",
  "key16": "4dJgGVHPLGP4XiRdacNK7bfEebyWTLZqDaV3mRDwzkJ4Nh1HcEbANzzhFWqZrXTpwDQ1yUkiFpwvu5aVJ8JSzZ2W",
  "key17": "yjL9zGs9nNy4P2TiQ7GW42YGMuEGg9tDeznC6eZVCXSUwPgkSSRrm2dWXVxCTEnhbL8u8yUUuPd3DHRxm7V4vQG",
  "key18": "38CXzoaPHX9r6aVmXsx1F237fUo9itDwYRARrQnce4trCSh7EfR4MvA2rYHWmJTQVr72JrTRfh5YHrTSkA6cHtAn",
  "key19": "aCs7qkWJsUXg8VUgmvp9yT6RoxcW1KR954fe2gjNYktGE7HWxLw2YJtnTsPRgZujKtnnCCbuiSJH1FxPMpiDyCC",
  "key20": "3U9fPhTfQ5pgZccsWjF3pJ4LxEjxunjueYh6tL8MvLwKmSyWEqwTWzDsrkiVcb5KP7hJkHZzHRDUSXHyfyKC7qUk",
  "key21": "2CpqWHxnB2W2kcxQDfwzk4i51H4XVgjZiboQ8EJU6xdoHYH4L7mRRy8yuhUsY2SMnE31Ubz9yNDx7sRUf72uRhea",
  "key22": "5LekSfAhjAJM7Pb7nKWCd2TxLiUqw6zjd9uvQ8bYuuhP1khaXJQWYzf7iPoudhc3Wn29UhxovSiZWzhgY78rmAHq",
  "key23": "2tzTd2spYP9Xs3Ax7sRnst9RoVEBa2EibrM77Q31pQiE6SuzYqhyv3EhEr8XFXRhoEkcvc7tCVHSw1wWg2FQSQUx",
  "key24": "58yHNvzPbqomuQgNGCrNvyW9JXDUJRiWcqqwj5ssEYHdbh7zyQYm7RzcnHJPiofzfqaC2wRFuuLD99BqPMhTqxnb",
  "key25": "3Koh2bK41cghiW2vH76SokZVHFNtJ6y6EpCoUYp2cwfJ6WWMBDeyASNm7nyoLrf6mjv5LHx6wtpAqBhpCvuP1G3E"
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
