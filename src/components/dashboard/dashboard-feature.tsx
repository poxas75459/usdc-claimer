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
    "2L3HFbUfUjQYgZsiKcwFLbHUEXkCKMpRRpf1qdXtruKvYdYCodgLJ7jrkU1cvf3aR3mjBCPjUyaqW3A7g3mg69rh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3haVc6691x4KqMkPKyzHzu8NTLKiPLQigChTKUDXGzyNdof8y2wi8ZNjQsFWh1s7WDY6P94vaR2i84S3TP9gobyo",
  "key1": "84RR6pGeucyLMJZPRTRL1LM9jgkUwyw4CtSqimmqhyjBXsBN8625vN6JiazHbGGutoMvmQympppG3FkJe2BSZhN",
  "key2": "3oqAQfAsJgv8ifUERErHJuYyCHaFwn4CkPxnDDnZ8zMN4fUkjUcG2DkQfzHNR9hAo1FvTJj4u3isLqsDZotesLQC",
  "key3": "3W8LxiVjR1noTFd3hc5SYwPsWnAB2kxgSZdJYZAyhEqgKK3J4U3oP62N4b7nEFdVmvTzFKgcczBWGh63QtuHbcsr",
  "key4": "fMHyBxrToAW148bfHdjhMxeLDNY7UH851tZWL7GrK9bZgk4KpdSsSwejfkb4hkS4JgQgAh4Pc5sm2YnMhKgnqWE",
  "key5": "3UqQLk1YpG8XJ85NDsn3oHJ9FMMb1U8yb4fqCvsDrRZLCR9gQD814yoyCCG2BfYShiZQRc9k4Av3xJ5oDX1rhHSw",
  "key6": "3CtENHWQUsE2R3h81Ko4vqSzJVMebCVZXoe4ZeDegbYw7vBtfjEqdhty9hx3osHy9PkhPrwpGnCTFNLdy59d7Pzf",
  "key7": "2vkSJL35EUWqLbcdf3NGBzo1vmhFhz4PFzoNHf8nSY9U76DC7R1h5P1QBxv368t2DX2WrkPxrMreJkWEvdv3CFQd",
  "key8": "xXRssK35nttFbkmCB4cmDCK9eGZLycbzPzc83NepjDzXavN3MnahEWMRY4mPWETku541enV1mqt5cBsd1bvW4Sm",
  "key9": "2VWcwfpV6cRZDfeDcecL98jQA2ipxbzHdU5uRdi426LHQtwX4mPnoGTN6dBRtf9ErYkmq781o8SwyUwyEMYcWyor",
  "key10": "c9go5VCL6yh8Z5nSA7vkq2KCzjRZraNJMt7qDL2szduD5xg8pYhwEULaTpFUHkVfFwtuyv2sSmkJZq9UxQ9vPHS",
  "key11": "4qZ5Dsmy9oAJCWW9uH9mqfkyzhvL2PuNstiuHkVmXHFbkmtM4HCkXLGWjCXaDEkYohaZM1H5UjDAXGhEp4567ruU",
  "key12": "336b3pAHVZVeZXSijVARiTEg94cj3AedLoPQMLQqBQShTb8gDETismjgRq3nVJdLzfJPReWfAbX9f6Pp85w3uuvi",
  "key13": "2v9VAfbiDfYudk1rGbp1fuYUk9kuc6gCYi4PXNUvNS1Zqsz8ah4bG7XsGbhuntPouQAv1AfpneWCpDwbX1UXdpos",
  "key14": "3DdLzaZM7Ng5wWdvstjjWH21nifdeR51qQqDxn9x7QWdXy3Va2gJy44CSwqbyCEyWgmx5o62wVxajiY7EuZmvPi2",
  "key15": "qGqJBZ9dBaoFZykGiQsu8eH1vVV5SuuoAKSqiiAqGR8faAwAddb4zAd8JsdoUNKoxnd6M2RhqzEXysQhTUVzksk",
  "key16": "4cf1GXdqMT34mq5NXjyPmBvCzVAEXaJUrJzAWkL8jcvuw9VuGXRKJRxeM6ox6TF9RXVF4cnws1ExohLy6MAxKDcy",
  "key17": "3jNwPoSvdMCuj6WiW2vWzH7P45D2MvWATy2PXXXYkcrzcpEJsNNhf4XeBGTJbAGKxi33HVpxGjGLPiavboEia3Ju",
  "key18": "2YfA5DdzKgbWPWsJZLdsm2eeV53ch7Rmp53Fr3bADfPFRwzbZCxTaxnubyBc4dEgebEaSvyJCoAXvnLbMqteoKbe",
  "key19": "4mT84JZq3jvAE5NeNYDcoXHXMD3WbfP9sLLq2FHaxEXhqABexBZDfYUZXgKoUVjh7YRavXMiWhkqH8mYiMdpybGk",
  "key20": "2xjMfcjCnqbuLVXn3P83kMdqZauB8uhbxnJ4fFTx7VJpmh5G12khz9yfBMMMoyuMWcQkfXEuUg8dNruUcard8euw",
  "key21": "2uVFTtygmWsrteYMJa9DWL1gueNexzvpiThsN1uXRzVj1ZJGUuJnwmBDMKhsGTwYGRTcmCsScL2XZczJxqCz3H4i",
  "key22": "2WRy9e7bGsadPqgZbW3FUtQ8gGe7WCh46RcFDuHVb57TW2QUcLdV2m2CLWrpayAW8vXKdJo8J71oZMiW8BeQKNuL",
  "key23": "5oGF5Bkt7inponH6NURAeetHhQufh5zqSC9xdZoej2QuLXFm5doAowRaJ3uSLQo1FeNNvpjZLf9iQBEEYBdXmaBQ",
  "key24": "3ZM6goMabwWBr8hj6v2C2SAz5Q4zwMT3ji548v2edrZ1VvE9mAtr742XwNa1e2zc3EgNaMymRzYG8PjjkGxFrWhA",
  "key25": "55du2AkDRAY5ZNFVJ2wF25tjQ6NzYnjbAmueJ2RZWURn3M4NN7yZm7bnULfRYCaFgCxfV3zcXxo3uxLPUBLHJLAx"
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
