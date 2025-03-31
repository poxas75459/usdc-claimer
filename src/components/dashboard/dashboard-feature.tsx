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
    "5P9yJqxEeDzmUHCG6FRnbQNniQkmeoWwYUFtQtFGbzhFPqCLVGLNNyDd4uL5TbsDm68kenugEYxuVL7LHmCwf4Rr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r4fqdYQ8kongmdikeyDqQvrVtPV6pN5do9wt3647HnPV67nqmBgKkDaQyUEYoBVHT4x2SeD89v7RpAXdfSn15RW",
  "key1": "2mBfGbta3cR2EWgdszn9SZbtYxpbnFXBHoXdFosu3NSa597hHZjXNvAhDjgLYAZ4vYw9rXn26euPPxjtR4UAi6PC",
  "key2": "4eNS89Dz3zc4X3rh4SscRe4PgnaDqvKChCvqCSqV6qztTZFwiQmLsC1nQZ7xBxDfhkR13LVhSnn6mYeCZrcqZKE1",
  "key3": "3LC4EwYa8QWNCVyTo8fE4vYU9uvmrJktZbT56k5fxbbCVyqNThWwfBsRCH3L366HNoDMpySzTMJpp7EL7Cv19rRU",
  "key4": "33SfLa6kFx4oaGV6qeJxw5zQwgQnCSNac6UQVc51bzPMUsC7zXUPjjFnAbm7rrTHfyLfaWoa6ufQkfwM4qEXQkbb",
  "key5": "Mgz5UsHhRWQwBHDenVwuBMJLvKLWVCqR4TaPtgeHHJr1vNJ7wB8HhErdB9tsbb4KQFCstuXKcRY7g44PzdRfiHx",
  "key6": "4EfxHHjtagQJGTycyVRVdRwFvu2QPYLT5Gqe7AU22r2gGC6FBkDCYFf9JChBz9Pmkr8phpApSoAKi4VgUndrFa48",
  "key7": "4opjm56fGnP8oerFLe4wxo7vSkBz3HShN1SxFZS5uQr1D2uDqpcQk8rSpB6JDV4Hr38W7aG4GjuGtRoQUwtqZuj",
  "key8": "3BBX31FyyzZVxibFw4PidT1FuDq21mZpHPrzw8CH1BeUypPBQ8xqAFSddcd4byF3EuoS2cxDAQV3zY7HscTAUXHB",
  "key9": "3gp6NQLQi1QX6kV14xqsw72JVmwCBB6ZBWBs1qAFYe7pJYvNereGq3rMN5Ke8eZhcBEirDg9VPKMh7FaGDTar1Di",
  "key10": "4HtXd9EyYm9x2vX4z6v3V7UBiQNT3CRey9dzA1xTyoJfD8NCM7tUDfG18JKsy1edbvLgTeAiaJWVLy2yJ14Pr9j9",
  "key11": "K6Wnhwq3qjD4bjC2q1icGmsgTam92jdR8mZK4JaQFQSR6tz1k2D7pNeKrUXnfcyY45K7xobzxWPC5qHPWMHBjZZ",
  "key12": "5DJSzzv2zVBtjefT8RAq7fwheKxa8wRDRGUmfp2bA7ggTFgQhmmmhC7KbyXVpuxgg5tPv8J5niWzeCWd32Edo1vc",
  "key13": "DwBBP9grJtam5cUXEg9LQuE6SEpxrqDZ7jzpWN8vK7oqbheCELW9pYVfUtUU4eg2pZSV4ggs1fpaNrVwm4VPshW",
  "key14": "56FmTuZXkLPaxPN3Svb73E6597BzXnYa9DAuQtYdLcWCGJUjvxX431A5qxrBuMoDq6dd5qtFvfdjSmRV6sTvZJqZ",
  "key15": "23mgAW9H57oryFjgwwKMYBPDK61hpnpuF9bNSfKWVk6rCB612e4HFdoFxBupVtEG5eSZWDvax2s3WYdqoNBgVVmK",
  "key16": "3gefmUL9NNqouhWsCdc9mXVZLqAU9RpZKgFkr9W9WZ17azMrmBnUbooCUtS3jY2HVwzSv4EatdN5unv8u328kfGk",
  "key17": "3ULTetpwAiysv1nRmTShygD8n1XqWUgScWq9QCS4gF4nGyjZ45xtvbMmMwhKrzXX5n8Gvq5jLMdu2Q9dVGmeULn2",
  "key18": "5aSijDXobR2CFDLsmgg9byjodRrfdnUcdPDTreKWJKJ6KTzX6oGDpQhxx8F7JXzoPRzFuE3vdo9wRwitASdYDR4m",
  "key19": "62WaR7D3kVAXoRe8y1vwcvq3gndZNSHLBHK1NHBoQtuWNuJxUeLWTpbFHT1CMgp4oD7jrYE5KEE3UKNkYGm6uwAB",
  "key20": "EwrDXnF9Bca1gGEXbBdtdRoAQhgYxwjsPNYSLZmTDttLm1Hu66ftyR6EjBdYxopz9rnZjoDnxK7oN2Vk9BxiXFQ",
  "key21": "56SjteEmUvDR5RsgJJrms8gbbtz7wfWjQwgvfdWiLUKBh3caQJQdVw5sUSJGioAoULp8biQ2KUaLRWcnjbqSkkF7",
  "key22": "ynppx9o196tGNBj7Um2tm9MRpY9xMd5MGp5BzGqp584bSFqSWmqGzcYhJaPvKPVzNqAcPhFWNa9wHuNEEqvASaf",
  "key23": "29CPWW8Nr7Kev5KLTPYHz127Uap1orjkVaCn9qcoyDCuKtTNBmxv6RFjncZ2kt3HJjJaxqsLAqAaEsBxsWFtq3FT",
  "key24": "4c2VCuEdEQtiVMTaYHyBB5aQqm9ATs7drraG2wcQkFrp8EXG1bKSuaXFX16ojteEj2iY1j8a52z3pw6vs6Ho6TKJ",
  "key25": "2iWE8dgA16WApNhRZHAJzwRMBRFPxodoScd3qcSbaTiVB3M4aj3JrAcezazGZbeesH5u95Rxy1wJQaYY2Wfmgp14",
  "key26": "4mBAfTjayRbAoQ9GPjT2op97WsfMMWusEC5NMxriNnAuEPJ4oaSuZm67yk8TT5eL6w9PHSaVuvd5mJiV75nY5wGR",
  "key27": "3QsbZLYWifPx1P3sdrLUiCAEgPRtk4dPPvcmhGFsrZ2NVHeGh99QH6aV6YnLq4yF3gC9acMNvkXtT9mbYiacs6zU",
  "key28": "3TpGwhBGntRXbp8FqQ5XbVkvmxgnTNRpafRFrxauCyaYFSCKZZPZw3TLkRafVHfsn482wkkXxZURVNUx2XTYmDt9",
  "key29": "2MaEdzhzxo7MkRiExekrFmNtW9wkXCkKNhbqSu8ZMEmBmhr1HrFQrSZw1zNASUusFkFMmMLSw7SfRoiLhUUy9giY",
  "key30": "5U728KNd7eLY9itkWHpmZsvS5QBoVS2ugwJt52RNWWrtZzaQaWchNsvLXt2sKLarSmhrWJYg3km7Zen9Tjbf6Uuq",
  "key31": "2BcgwAenhL5N4zGjhuRV37uU8fMHeBmwTtyU4uyGVp3mkYSwjQtLCxBs1SN62maUFsazTZUibW3PGM9rSE8oEq5T",
  "key32": "2r7cF1VwRza8FtLujUKfZk96CzFPjSAiea8yq2Vppz6Xh4gb1GUpnSMgGCmwzjsQ4vWPP3iC2LNAYkUwdAGeNtoF",
  "key33": "1kyBJ91bDaapue3rqbFyNVvgrpDPjC7pSiDUmEDysUgQdAQ1WGHjo8ZYMNmk7q6PQQgyRkSHuYRTogyqcv6Uo9T",
  "key34": "44JEn7qDBXy55QhekeuxGiw9UTTWMcfu61ux2Dvt1dbiScxZDqyfAExjN3Ees72iWCntqQxfYFSHtzryc1eKvcMF",
  "key35": "674QT5mNRnC2qnfPhDcpSHNHx377jz1rae7BobSW8MxqbziGkfe8QYkB2x3QDmdkPhPrPcgrkx32Crq92PZ3zdb7",
  "key36": "4M7mXEWgvfSYfUQYL43wAArbXBTyYeA5BiZxN9chZ2czPAcdNqC7qPRU3Qsu3AgVh75buSPY5DaA5m5jEhLMfWgd",
  "key37": "2FR6UWFkeycRKeYyS1aJ5VDoDZxUEgbeKCr1jZC5eqM5z1sNvEG6TQzx3PDaconc1cu24MgY13w5c9Xeo3wbPJSz",
  "key38": "3qjSPvNcgojYWxrcZyY95WTmDyLVF6WHPrWrBETJhKPiZB9xE73N67gtdwpWM2fGszjatS389pZ48eTSW8hcYTVf",
  "key39": "5Tme3afgYqV4vrrNyx6muuFmTz91jvsghmHWQdnqpt5sTbaK3TWjAVQdJwziBEPqVeRrWfhDMNTKrJBQWYwBGbuD",
  "key40": "5xDqBVr4zb7NyVTDmobnYdmNiKWaT9mLQPLum2MjpYWscZxYqRHUrvW7aYTpHZp2ra3pafgNnZeD5Dz1QxZd1Wth",
  "key41": "4SWyRxn9zE2L6txWL4fshv5E5vWri2FYZh55NwMp8pY3eH71bBJmRPadu2DPjWQhcLxWobg5SQ5q3mXaphWkDYss",
  "key42": "ZtXqjq7RJs9n2vkoBZZG1CDT3XfVizjK9vKrpWfMQKfvPTtXEG315eoBqvyyG4XgNEVahKigjAV4Vt9aGSYUJis"
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
