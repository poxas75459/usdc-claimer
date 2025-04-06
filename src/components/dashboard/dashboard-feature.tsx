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
    "kY69d2yN9zuhdmwZXRtmpe3ebD2Q8Y87L8i92U2WKBDB5gXNJia3NDuUeKjqrKk5JdjKBeDTFeF9BVeMPb4RVq8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "597pW5xeBRvr7RHbi4hCrMXeKfcPBSrLKfVYJZkazvR4b8Mm84FALkYg1nKavsPf8os2g86atyHHLGeSJnjdBsno",
  "key1": "2gSRH28sN7x28didbb12bpJntA2rcGk71aeN5HfkmDzTKFsd8bq7pvq63CxfLxZVBmPTN8zW3Hy55bD2QVATjtUe",
  "key2": "5M2nMXiUiiwpcgiNFSx4VZ1bZgDk7zKcV3YRHbC9EsqcewXN199bnFPVxt7trYimoNenTEe5jscTcGiFnnnaPzAe",
  "key3": "4K5YwHFZYuK5xw2S5CG9ax953sgpzEA3MPBDpBmDyav2tzoBZmwJgEsSF1Gj5ffgH6rvKqMF8cpMJcqe2d9gdTkU",
  "key4": "2cu4reoq5DWU2KRZ22j9SADriVmHD4aTWGEhESL8kjzgnK1dUd9hGa9n32nJjmc3qnbhNdgz6RxCpkHCcavRTKMs",
  "key5": "3qeHBU9Qfo3shPMQ1KPy4WEa39UgC3FtyK8uRY9jMRaJkZCEqJ2K3cqRRxB7xxwsVGVG7x7S9FbKkcPmSCrgAqYJ",
  "key6": "41xudkrfLzFSi4LkzjKQsTGLCQA1nrSmNA8aLz8AYoRJEvNNJwZYG5GSckuzN5K62GbfaV8HLfkNeMZh4FFjdYVs",
  "key7": "4UWFo2FAQiY3srtunKHv3wjdK39Zqq7W8BALCxjPkXv6zcYku71TPTuCSvidD3SZ1pBx5iBrSxZMLVHobcGTH6CP",
  "key8": "RMmXEr7679UzuM4VoBjmbBz5iD2JbsV6nPsUpxb1RKEm22wwLRRNXnAiufydpJh51vciJMPwwbsUD5zVAnhbr76",
  "key9": "4odwv4wckmQr833SR6CmXz9uPoTiiJKhGMe5p46LiAeYmM28G21VtpzAFc7htYDSTkweHFJvAXPNeLDNdsFBcPve",
  "key10": "35H5mJCAA9cznMwdDQj5h4QHiFHCf6T2zz1RoDMz3PgskhZakwFi7zEeBkHoQdQdS6QHtnLQMe8qJjkaHqirsxQQ",
  "key11": "4t2RECrZJ21ATiCnEe6cogWZd1VVnBKYV99hoJao5nsw3UJTdE5zY6nhKMs7mnmWk1QQehPHnprZgBbXqsjrVnGv",
  "key12": "3Kbp2vMVPsurG55aTnaWqm7XTCY2uktLc3qkbzdvGTsN1dj8trzjhVKzYCz8e9ziPE4fCHdtEy5Bje5Ry9HhTLfJ",
  "key13": "3RnZMG3gGJoiC65wsaoW4DHwb31FVRjMoTND6DBULBYUqsQSi7VTNQWvv1RY6FTPswxkWUHhpsgvp1TAVZtXs9Vp",
  "key14": "3nHB8WigvFCJnxUg6HbRy7W4Mk2kdgYu4JMe3AuxBSgoJctHyGDAT31b9B5dyWy3gXcwgFNV1SJGKzPTqP3gAez3",
  "key15": "3KjcrGZfa7iCRq6tCJgTqnRxpJGPzWrHo3SPm5XR1AXSjhbT9ddULQGPfPNKw3T1C87FybKPUG6hUiMAiYgwnY1r",
  "key16": "59M2WJnsRkgqGtFJkUptbsfFr2aQGvngzjeXvZLQTymMM9aasP3Rj86WLz3oQ4ZQDAV96cGxqrftnr9uHaMrvUGD",
  "key17": "37dT5T2yPSJVJDESwUwnTCh2nnvCQijNGt7AiWS4DTbX57hPsUTvvKKXtGiEzQvBmzpTiJeCqJCwrDTnxz3F1aGj",
  "key18": "2rUnBvaGsctAzJ4Z5ms7cJ1obPqYhWVAGxZvQ8APbWMRLV5LTkEfQS3STwTF59Fx5pNmmu5HeMY77mpv4WbSZtuh",
  "key19": "5jSJSY3GdMiWY4vzTtAiVbXAcoRbNBcn8QeaKFMoMCHFPPMiXAB1bRxVXiYWEGCA6uc1wbeJrUXeyDwuKHfgDUxu",
  "key20": "2F5BZXbpLy1Tv8LzBVgGbs7UqYPrRYcy1WmKcTyxaa59rMRwik9NnKTfH9s3ezcsCHt5Vf3UsDp5tx1RGUqNFCyH",
  "key21": "arEjAaZL3VXi3bDc7XBvJbmYHHp1L5F4fm9Fp1SRuaTYqSWz7xuv9d9eiTTEnLt74c6S7L327chGuE3Su8xUm6v",
  "key22": "2Jj8Wf6Bxn85RtG5XDEsWYAvuRrJ1jnZkZALRS5mLAwy9pBvfCjWpt3vj8zjsuEyQ3mrYKNDUdyQ6mfKoEKsCzqy",
  "key23": "3kxyatHmVXsXjA6hVKceZsFTs81w4sx5tP35M62tH3xAcJ9qFPPsQzsTpsXzA9pPiJxYXPWADVxzgscyN7K4ACnP",
  "key24": "5Kw7Cm7ZmMmhoMcskGbiG7AzoKXArUncKDhQYynNJDAKZfoYLuDZQoqKrEU5jXSVB2Q8TD64bVrhDfqH3yFWeAZ4",
  "key25": "5vMBFyQ1hjGAsrwzWHNg3FrGVrPxrWfd1ytoPhgo4SuocL85YUmvMNgXb3N1CkbxZzx7DyVo9ciKSvZMnZR4mWUb"
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
