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
    "41W9cXHDHxo6i3BmnaJiUGjFXSVRbvtTrbZreLccKG4SQUhrviWZ3zKhHGBFn7M5NpDtsiQt5cfcgGtVbQ1k4jmZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3py1WF8qMLZjMYpAFFDd1t1bjLmSxDZDijCy7yz6eTY7BJrNXsWLoo8LNpiYiNnBgfSKrh7dpsXGES84uQmNGMvB",
  "key1": "39PDBRyhoh6VPRWXePgdxp6j24XXSzkzPQZPbaw3qjUCAH2hPT52UedkE2psMk4T4zpnpGqHUZSjo9zoMK7BdCZt",
  "key2": "GghzzJtWVYcLotAwqtWWNWqAoKCbX5C6G4pNscRqYpaeK6kDWGQ7EyH4hTTGjBo156WUyDy9VBqQhJjXSe8GTrp",
  "key3": "2e8tPU74DutKeZmaPityfGRqceV58A1yYhkTpLZ7G6a3qS4SV4NitXGGnxrYGJdzq228v3buioJpT17SnYvpntT1",
  "key4": "2ASTktYWywKkjM7ME5ipUKr3asCBD8TU2s3T6mfhR6mjZG9FcBpRAiVG4AtLxyxFNpPPQZfacLQXPMdJSX1nGzSb",
  "key5": "2hPzZzBwC87vogx8Tmn9TsBC7uUq3AHUP2gegsx5wTwwSwcDjkpidY5SG8Fb5NQ63eePZDsb9mRvphTd3RSE2DDd",
  "key6": "AXBxjKPgv8btwCKb9KSUcqvdFEdL8Khrgi39hSUEDhymPsrkNnmfsMqM4a7HLyKfNiH6Dxh3tpAEharPLi5s6DA",
  "key7": "fz8QSWZiQ2wBXf8X92Ys7vXSGwrjQgwN5jMGcZ5YMTGX71yJPpc1WRj2QUFMQPyeKzyQW4hGNTFSyXLuNgReVDr",
  "key8": "4doGYmVohLzJf6JPkquLzvxzNJo76FVLskxTR2KPeSVH752XpUpw4PNiY3JgMNiF56sYeA9v6EUUHWdMKVApFk9Y",
  "key9": "BqBMmUrCw5C7rkgTUxCS1FfsindkxNpDRbpNNLDkT8nN5pjuoHUrAAmG2Z2E8vLxnanbs2u2zj6XorDK8vU67Vg",
  "key10": "54wQgNvcaTUFfxgf6n2BTBFRytQGve1GMc943mxTDCN2vpjyGK89GA6xwLMzajdK2KzQvvYyppPYF95prqgdKQpK",
  "key11": "3SpUvUgNtEnAsQn7K6vXuN8Mix3bAwxoMyxoTr5BdaKHh14TaLXjWEtfpgEF4ooygvmPis6FpaiztXhJTsjrKC58",
  "key12": "2371ERiJNq8VjMNSpTeuif39qHsSZNzu2DC2tQHJqcNLhR2ESxC9e1K3NNo77GUJQBuWqPHz4jUHrqorZfco45oV",
  "key13": "3775TQXoQLMr7eKbCdZysYTXBRiF191rhCSN6Tt6wnQhk6bHZEMZHVuH8JdtGWfEGxrgMABzzLHWqgZEH4GpY6qQ",
  "key14": "47FpzBeqPWAsGdCcaQjwSw8Rus1NcemFA1f5MZ3JdCqtnrpWfwECNA285iZ2vGEvJCBKK2pbyY9YpkkfEW3ZGUns",
  "key15": "8oPj7HWpXUzbUcYBfVrSBBraCzBJYNcBMzDqcyE2FMvrMPRW6nnS5vQmiw32J2pp165gf5fgUeTxQgTxfpGgtfe",
  "key16": "2zcZ1drC3TnDwXGLCiQKGoZCbyCM8Wpw2CDjNRX62VyzA1hKDBdL6XEwCkb9iy4RnnXJFmYe665gMf5cTEftA2BC",
  "key17": "4JPJDdZAK43xsAm47cbTTC5jU4nNhtojX4RQEwVzHKvXAWwDcAMfRuStbaE91RRTcxT61SLFmW4yGqLYzvx6LuiG",
  "key18": "37vzVKBPG5MrQE4QSgosAbXUdF9chnSVo5LARWgH8fcq3bhfSP9QWpb8AkkAD1DVuwRbtMP1Bnv2hNp6TTFizhZN",
  "key19": "DAMNMHQsh7wLA5SXdWPme5ZN8xzDT8iMqNVqvmRf5G2vZ74PYYZMYzYYhC3ZBQuePwHACSK2F9WgVjs4cq9NMSD",
  "key20": "3R3BKhpTpK1ZdSra81VktYVsW3tJ7dyQ9bGPNXJEpuPGBL9y4cYLwwkmbzRwfdZf4CQR4H4ioNBw99Nw7wTeQXZe",
  "key21": "4WNJquscfzD6DbkVr6PUk6jh7X79UJ1Sc6XfDRzE21cH66dBgFQqCuY2Mf66q9gTsfxv29kWLEY7kFD7TXK6NqJK",
  "key22": "uiuhPqxLGYtfknmBzLcDtbVn2N8t4h2ZqGe2oP6ufnMFpYeuMTt8kKDQNEwh9SxMk1DvbNVgFDpDnhsVevB97ou",
  "key23": "2BVDtTjBiBbCsvsd4qSSjiZnSaYQJLkB9VPDy6QJJfaq3mArVn8gt7R3Zqza5M52qM59myeFKzL3zCH2KtCS1b55",
  "key24": "2afm8NDHzfnK5Wy1USkKT6p42iQeEhaRkSqKhXUPeqdHCt8VeLLFLNakZ4VjH7KuYJp3M8VeLdLHczqepFuk4ePL",
  "key25": "5fiiL8V7CKHXXZZ6xYjiaivXmqtiij9f5PWLtiPzSd4z3ZCfjX6hvhSxxfoycjEc1GLRdQ1v26DRVwEea6pcLxPV",
  "key26": "2Vpw6MnSGnnHJHkkuh7ynzsBn4bEtFceaoxmLkQ7sCBX9gZctGRgKQVTFqZNfK6yPZUaJNXxs5Gzzhp1V6cGWw38"
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
