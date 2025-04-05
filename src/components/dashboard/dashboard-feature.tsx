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
    "2XWnUNytyQyjAzHspkBm2PP4GCs95SLfStmX3Y3PcGFqp5wmfcVUhMpwgkqhRGiCg387jpYi3DpDHj5fE93J7FWe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P9asAHJeSXKfkmGQrt4VrJnLSKYtni7VNtEh2rmvsRvGA8Ck76kNknHZy4SNYKm75kFfFpDBeyUwD6L7uxJQiAr",
  "key1": "4V2z2rhF5ECGh5CGXeDE4WqFFAu7bPU2yqX6HFGYLi4NfshDikfxNA8kxSmi45xn1zxKr95ZFkKCCQJwVYmy28oi",
  "key2": "3Q1ozVYESZQjEC7hHXT4qQtf8YxdsYaQ9yUDNCCHN1h5JWGwbEAkiXJa8yU8FpwXjC9VkL371KKVzCs5LQ4D5XqL",
  "key3": "3qEJfiU322E6tbGFjKizCjZmMfQ8LRXU1HJtTAWAHkPt9AJWcXDGntUQzXPVABf4r2qLtBaxthVdSSXiBxwrsMJU",
  "key4": "35YNJb54t8oAtrSJHZRtzLbWaTXF4TWDS2BeCoAzeGU6CnvToR5chikZCFQ42CMvH7E6d5YUmsiQt4Y1697einNP",
  "key5": "4ddkkFGrKQ9EWEsnjbKYed8v79HeDHSJPDMi1p4Q8eQttaepK4HyBs4p2yWtzuDfbq2PCZZ4mHMy9wZQpWTPM4Sa",
  "key6": "4QcFHUXMjXs3fZTVVS4SJo18VNuUybTbXQrC9gcKsnAhnsj8GuqfEWK1j5jSEfBNCZqapZcb2tDp9Y4FcTBPzTAH",
  "key7": "3eHfsvusFrshyNJNfrUTdFV42ECRjMBgVHAQvSZ4BX3EXfNqw54z3aCMTdwpbggGxufKYoTP329XECc2fmTdJnF4",
  "key8": "3nXt2kugsXhxDj7SpP5RNXGX6WPuEP1H29mRbqhVA8zhkECSybUoQREqS9988CbfWZYad5L3k4RjqdMbFrnSDLDV",
  "key9": "3DvRzwVLJfYB6jKxAEe6WDQgawzB61YLWBTBcscfXg8SSyD8hjgQ7snc9hak5qxoMoGKCZFQXsfvxVqMQXAXGYNC",
  "key10": "naG1ATH5Bp5zURDXiqDp1ESM8miTMKfT7eT8x63BEJq69D367mfBqRKcuNGHcyTuCF82zKyXUYRq9aeWnvnSjrW",
  "key11": "57n4fV5h4rEcSwB33myFgHkMwNyMwxwGXGy2gs5JMjjMXcjWqHsBJwfuSqFCmNfkB9AG6U68p4fpgKDeLGEcxwJs",
  "key12": "2cFFdZQxT4vuTkQvXGJPYZNuCpx8y4CQdz3cjVAaT7ndpmL52YTWuGudPkKAbmxqgSuN8xwfUGCPYv47mmidbAN8",
  "key13": "497oASAtFSg2zpL18nsqwDq9oof81vbR8PPvMCz2LNM9UDs49sKsNzvxZTN6B9VTuU41AyzBTShqjdEfX4rKqWD9",
  "key14": "311pfVmkuHHiqWTDdkGDLnrvoMU83miqSj7kP3nbP7zZrkeziPXgyP8PgTvPYAzrf7obotyDontaNFiJUNKLqWDC",
  "key15": "3tkDKHhVdTDi8Zr5zgv6hwQ955Y9UcB35mZPak77CbkD4ccmvXwidUonsDjWsmeJsJRP7QuZeYbyWN3ZATizxFK9",
  "key16": "3QNgNyoiM7iQ1gKUwfEqVTUuE2KxmFLQFsZGgecaeVvH1v49QbUny2126pNhTEd9KTj83c5A5CpndbRAeNWAbGY6",
  "key17": "2tv34jycr4m1apvLcPVdJM423QViy9VWxR2PEkmabdzvU7YFSioHfkRjEU7tiAmq3oUkTxNcLVNuMiuyhGbpcpXh",
  "key18": "4HzMQYHFrEBszXXLExuH7QKXRz5n4gCFjvEGyEgcdbQvSYAHNiaUi3nKSD62asiBQfHYXwuef1PSjMCu6qDQrzHx",
  "key19": "2mV9zoLB1Ti5SkeppazM4SUz194Qo3JgMYJtXassi27X8ZRoLd1uWKZmLJNfjCYRBnQ8fYX4wPFsL6i29XBtXT29",
  "key20": "4LVHNVMuxmsmW8SCxDejFZ8ukMDAxKnm2noYRh9d32PStJxULT7CcXtKFZzh3bxXc2su3gSb9WryJ2yBduq1kS4h",
  "key21": "rdM7yFqDN2muJtcNPwnhuBnDhoL5oacCDkRLQ6CCb8QDXj3Py975FgKxQVseUdGXp5W9i5DhYk28C8p1Ci4d5WY",
  "key22": "2ZuMcrYZZNHpJsiKo3XvCqdBDGGgPwJ5AXgKCF4ccKkY8NU2GnQMhWECieC43228CJGtrKzYazmUYP2mmR1dhiTr",
  "key23": "DUoVoU9YTQM5RzdWdnNHYdVTFZVPB7SdNbUfPqvaA8BNcp2xtQDDPruGZzWuxNZxUwHRBQ1oTZh5xS1o4yBHAtm",
  "key24": "4riE3zZ7mi5HChYnGyUBVAZo86B3vfrWCNsQsrYFdT4yRXamQJwni4bQMVdmehmkGYf2xJPHutwWhYeoii8wt6H8",
  "key25": "ev3HRJWf5Vz3wMWjLfLQHF5CXZBVhCQbETsxfvFvjRR6pbyn4jiEGeb3Md3BEZepU6Xu3ihpf5834EGU1qe7Jes",
  "key26": "26EuXZNBRTNxA8CUWUxGEs6MfotJtJfG4WhdYjux5ZdXZ59JRTVcUMh65bUQPf6vxkUQndDpzgouis4ZXHiPCHhr"
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
