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
    "4AaktV92XTFcCpCdFcYz1tnkBWADkDxFy2koc54KSFifDZZXq5wNBJkbFvMRomxiKvycB1nGRytWHXxa4pLGqs5d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uaV7HeR7qhRvLHuxfJucomPCGuDzQbEkwTN1Q7RRWLs7oZ6P72pmaESosLVTTQviDvc9uutAYb1vQkiUB7E8rWS",
  "key1": "4H69viiqWFCgmLTMgL3iTLirUbVURDcAkNikKs5igeGfskvVXqMUDGvHXhxwvBAFmqD9hHu89qMz9UDdJMeZnpPH",
  "key2": "4rwTdqD8ECeB8oVmGMMsVVMrSFcvgoMA1LKncvrXvzn37vfR5EB7f3EcnPcu97brFjUcpiYkBtXgFJfbtj9gm4zJ",
  "key3": "5nDc36tc9wZUFE2i9HrJqmJKKtwbyJZtEdQriHxQQE4mnk6nByLro4nWEivf9kK8s9MLfu7uUHb7Tcxd64LQFHzh",
  "key4": "SHp6RRnTSHHr7kWfe34wBr7r3FBhZh198rnvzxUxuNiobnAir7c28zdnTipAA4w5kKEBE8ivQbVCAR4r24eKLvw",
  "key5": "3zLYnjKSKfKwdJRufZHgN9RSF6TmCAhBLrYgay9Mc9DxcEL5e6qZbwnwKLZv3DAnu475cMkx93W1QxnLLZzyUc4a",
  "key6": "5wty9BQE5AT8iaYtBwcVLFsZw6pNVDJMym1Nf8mg3zyKtRXWruMbubqc3SwL3qjnbpTCmFFDnGf8WDM72GCRrLwh",
  "key7": "CEAq3SPiNPqLJdpM7qSadRzPhhM8th9Z8rQXxXV8tjmoM5Y81hGkLH48ByqDdPq5QfnZJtqFvxHoxknpGQZByMx",
  "key8": "62LgN8UVvdsT8KwXsHaZVdE1zawAXGDrY1GQYpJw95DzLbWsHtZ7QTbiUAgY6cHPRBcJNvEHHsVFVevd22LaNBPA",
  "key9": "27QxNNM28Nmi7D3RcdHAfZapULcWZ2HU6SFftuffnexfxJbeqpZ3i1L6woHUdz14vjDJsbe5dmaiCVRepnQAbqBi",
  "key10": "64n8gnrG7G5mAWkSSrRbmvqjt7JCamWCj6BKvcPKiqef2Pngw4pVpKUWQjUojz4zURGHCtF3D6wQU5gFDhieTZTF",
  "key11": "5TFAmvURboAKj1wfjLUF2wupczzDwKxKiQmM9GRq7CwEGYcFNJLGvJYnY9pN52Q5u82FiG7L3KaN6RjNs6LJW5vF",
  "key12": "39o1KZYF3xzfWMZZJxXF61KdawiZehxVhb34cnP59kMoiB8koFT2pvo8PDbc2UanPzbjk2fzpQXYHsRSwE4evZuT",
  "key13": "3zwcCsL2o6dwq9z5esVLF1iKWwfALXAproBXUrayFowfeoNTJnNgWjNY1LjrtCt1fc1ZLmWr5Wb2LZiZ2uhAfQzh",
  "key14": "61zYCGcqw9SNMWCP5eBxSMusjFVAMUKLsUt6eVYrg8ZkYkkYZNPJdJwjNdCcDADp6FfGy7icF8vAiM16wgGE1N39",
  "key15": "5sG7JVBah5WYmsvNxNJ6BRCtSR8NHcjiibyENmy52kGZp8bX4DjnwE8Pynax9j6kCfsXeufbk5NFrgG6GTjEA9iR",
  "key16": "4qH9g73f66nJHek73UmjXWCjjSv4TZYrC2E9YQNCFgZR6YdYyb7nMY53rfoaMa6VvcVmi5GTtLECKy2PmB9ttXnB",
  "key17": "2SLTpbxWz6z5PnVdpA4DuBn58LW1ggfzAoP7bYppWgDvv7cYAfknTkyNov2wtNVveb8xS18cwnNm8K4Pbb3w52Xq",
  "key18": "xfEfo1rBJuZCTyn5G1zsFVbaCvyqKUWoojcBkEKXRTm7uzto2iQ8QPtTwGDvtHadsSyZSPjSTvzJUdPn1Pm1bGv",
  "key19": "2HbsyG9Kt1BgrqH1f3Utu2aYJkWMUoDhH6i2FYfv3qURtYpjeQbVHXo4fhPFdiB2im92RV5ibocRJg1BHt5kPeJF",
  "key20": "546cobZKnHREZDXJReZHzraDVDp1ymqS6FLjJko3fNHSaag1WLREYnWEhZjVLLMBEx8ednRkGYPrKc72uUmzLsr",
  "key21": "3MvBRpGJReen9Uk3c9Fnb65ccsEyUkZcXTaRweK2XoTJSQzP9g6WSKbmi4k4NRSZ7xaqREEArHJ6ree6sbUVKLKc",
  "key22": "5GBDX9XQALu9aAYPNSpcTu5JLimM5B9tTiWwRy56LTsuiXr5tTMwWhWUqjue69cFLyG8unPiZ5JmmpH5ZTVfHYKr",
  "key23": "48zSdAxPAps9juJSaYu3R6oLcauTirtatpKKrz73kS1zeqXL8sA4qxtYAc1DDrcJccBsyJB6axky1r75G2HX3yCh",
  "key24": "4mfN6eaSU78wP9K2H97G63hL2byKGkVQ8Wh3ZxXdTRAbBVCYXV48aVixshCRXzqzhEhJt4tAxduBufRnjz3kTqAJ",
  "key25": "2MjNSfe1qvqSWsu5hrpML5WKGq2yCTtMebFQrud7oGX6rADNx5S81UYeeMJ6MC2JPjaSRH9jKAdi771yfWipkJpD",
  "key26": "3PcK1TwMiPWWXa2EdGhLMQ93AjthnAaewVWVdMHQwBpBeYzKzdm15jh6QCmSk5kMoCq3G7M3q721PtN7wg4yLKf",
  "key27": "3RWKkC75xUF648P4id9YFxa8hY8rFjWRYNTNBdrAoF158oSh6uyjieJMfchJSLAZED63CGg36jDLyzMpQJpiG3eQ",
  "key28": "3eG317e36j2R4drCCfypyMmGvkTxUfirVUJ2qJv7AsTLHdfzxLn83Ag7y4Xbtp9C5gYrqgv1nAHz2oeAALqMagMi",
  "key29": "4WWtBXxT91oakPkeEJhSYjdX4N5GXuYuQRmjCRYxyqcpasW7aGsyyaX1DCTrUjaX3XKY1B1w5zqDzyiq541dnAEH",
  "key30": "ctYc5kKYB7rEhoxCxCko58EYVDtMwWY2z8U5DPsqX1N56JAxyifJWGvpgkjMDvqrqhype34Ub7BCGdPoXscZqdV",
  "key31": "36CTbaoegHFCoEUNEPNAB64dH5voZKfvAUqXJTcpSMG68DZvb6CbbawKxN2Y5iTpMX3bAAusxMEdd7QbJy1BBr2X",
  "key32": "5KMhsjXSuuegvf2v5F1PgDNjoDoKv2PEBvrSJnyoEDLeVaCJFGc1F32JSF2tjT7w5CwvxkdJ2hpBDTfuQXxTFSs4",
  "key33": "cs7kjGLLFNjKUfTaWCUYybSmiGnHeZyaQxDofBFU65mL3FypXSGsf6NuiXowpcwZZSCNws8zTUpmVadAmykXSJd",
  "key34": "4FdvF1Nj5Ce1H3FvNjmJfFUJk4igfTVehQd8mRKfQxPQ8k2uGZHNfcJWhqeEVUDpGsszcB8vRrF6uxoAQePquwX5",
  "key35": "iPf1J621fyWMKibQYNwwJhopa7DXLXfuYaxJZ4ZjS7MEtUgpkp4kbUFJHKnviRdfEsBZF2FVmYtav7PtEVPph7P"
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
