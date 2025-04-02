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
    "4qQKBizyEZfBbgxLu945b1GXKDHiZoGHeJtz2KzzahHbgehNfb4pghcM6GggCzyKVM3363MbYvCD91YKVDcGVkGK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gEU99DKEyqghp1LfbTFs9HYjRdhCapzB5S5NhJ3XU9vDAfxdjRAdswJuPd8j2GNA4e5dHaDGKAp1vtsScF2P8QE",
  "key1": "5BkxowhmD5uH6zZLPAQwMdBcipp1tSS3rhfitCbhShf44ZXS8dbovJcU55k8rAxB93mrkovvRw5RDbuTxTQz4o1X",
  "key2": "2BdoxsbJGv222hbFuoXDq8ziuVHa6dkVPRzv3EpBkZH1QLVUB7CdraVAx3G6Dj4PoFXj9h1brcVFHCFKgEbwQgpf",
  "key3": "cWX9nVm7wHquEVQXrjz3u6hU4kMHCa2oaiGtStvJ9odtzwbywJjhV136NHmLAdx1rqtCfzfQ9zzWd7fhyXAR77q",
  "key4": "2nRUPQWSKbhEy6QbZTDvdfYeTkDX97SSVEygDL37DB6qa1frJoLTabebkpicTgtNRkSvapcQ46ZzEFG5mbqLbq3C",
  "key5": "2wtoiXBXcseaMKfTp5JuBGcTsjEFt5jQTgDyBFGz1Ps2eavbzDeokAmVpb5qcSaVZ4fbpH6o9suMccDcsrqWW2VN",
  "key6": "2EbMmm3PMLsRz7jjhVrCgBcJEStcjyiVpKPPpqNHxHaEgRWtmH8nFxZRiDQEbDRj56rrEjtdVCe7YAmfcuzpmguw",
  "key7": "uTQ1uKov343fTBpaXyWX7hQfB4mXrBkqk8A84p8aKicSGBiqmrnyB6ENCmGEPTWYxJ7T8hXXTga3WP3DFprv8uF",
  "key8": "2T9p1YwWvKpzRtbhLMj3ABVmwsUe5RkURQpb4abknkBwjbGoVyq4ofgS7wjQyeJ4rkGD9PqU1VCAUgAqyatLGymc",
  "key9": "4Kbj5i9EVsYQCVRVJ4MpEEETtPBbXhKyjgFPbGpGwjmWYnTe72775fyp68LcWGh72obirenKs7ez1VzacyH5JZDN",
  "key10": "4zVANDQV7deT67Pn4p7L2UfJAzhqg4rRz14ddSBmXUux37jPsQpQ4HnM4BHJP6u2mV6gx9UsLNEWX25ExmjHtvjj",
  "key11": "39tx1RABGp8MACtrC8vDbCPTTCpA7jQFSTXbTaYMxoh3wrcvqed7vpDBmzoqrC7oaZmeHZqs3DqrjF3PQGAyvurb",
  "key12": "LqiksWx5FpsySvzd7BXi26TXBRXaZYininLFaP2GcEbjeD7iMpV12NtJusNj7fpP2z1pgQGNntUj8EAgiBkSRNt",
  "key13": "5wD3fwE6px9QiNif9eVYuUbDFpbrf53BU7kFJFTHoR8dTof9pLaKH3r9frPyK21hQuQgca4S1dE5yCfP4Hr84X78",
  "key14": "3utWH181DR1KqtJktvJsX5JxgH12iM7N34oHQaU1rCx94HSjEuXqKvKRB8aTP29BhndGZvgBbExkDbtXUqoLPWNq",
  "key15": "38awkGDsb1N57Ri8Yd4L8ZLX6gQRdHbqFBXTWoru4VQnbnMQC7rvzWuLAqY5aXNTUqauo1Csrz6vCu3PGpi2Ls8r",
  "key16": "4ewHkAXP18RU1FYwYA9TyGwVtCJGcBkBn9PB34euVRE8UaP3P3rUQr4oPTgRAVfoDeAGKTeWnNbamtpsLRyA58Xa",
  "key17": "2KN4oHWC2NP2tGz7BMG4nXmz8X4KyHDm7kuTVAg9p4ecWQHc7ZY8o1Jh2DWsKZrCCrPSG4jToFMyWtx1bmeXgn8",
  "key18": "3zgCswYjySsd86Z2YBXkUADWXJofnwCeWiS3JYeK3AQaqxNMZ7erdxVTCbXgbwjkgguGjs6tEuX3rWZ8R3Uur7ba",
  "key19": "57J9gvepczEhtByixRxrkTsHnVhhNBTKrk7LxywFWtGpZtxq8PcLYPnvrYMtDtPekbkNPXV1N6sNZYifEgUFBA69",
  "key20": "5jnbyx9BYzfHBWCnNCvWaMZNTtHLR8jxwyrY9JkSyJQT1zF3Ng1Cx1Bt4Nb9jtavxkaLUAcap4vreaiHoAuyxonn",
  "key21": "4ro4nmRR3xcGVXzLzCFCsSsUaPNNF678VgycH2DfbjDYk4BMyzKLVpoQ3kx48fZ4eoupipmSyZTxkvionyLbU5im",
  "key22": "3LSqfWNnAxT8yrXddYDqCmiNMYJZjmdvE9smqkFeS4M286F6Gf5tNHen34BCGVaKbC57LhEhQU4gf3ogzgo6TNRK",
  "key23": "4MjUZtuqGZ28SZ5EYiEfpeZFX3mqJQX5RqWSiCmhF3B2vQbpej4uS2QZ5VjuHjHRqU9FFG7GBR4tWFPhuxGBrjfs",
  "key24": "4japgR6L54cQTDX1qjKgd8DbMHH2Uka8QyoSK7gUX8SKPcc5GPFr5B6yZFQLsLPZ53kXMDg7bGR2ecQEXqYTgfXP",
  "key25": "3fLLRRCLjN3LZ7sfqqkXMVDH7PEwpXWiUHaiVSCho76cEQxnH1c5LJYVLPWX7cQGsLZKwP7jrL1UxYxye9obE4ap",
  "key26": "2xrk4bpLjxCF2xxubrfyCaiP5zxKniqxWTEiaDrZUL2DpEset1NGv5hj3spvdkELoVh3Z9efwzPgXCiedRMqgU9S"
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
