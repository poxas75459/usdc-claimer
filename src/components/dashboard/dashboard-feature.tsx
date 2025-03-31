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
    "4DgmUnQQ5oGmnNvQtNN1JSbgoyPcKMDfHCXvHWqnuQrTqc8Q6JFzvbr7kZjWV9hcaVNWj8fdjRtrt9YPF4XMrmMp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xZCzdhDdQVKDDXJmpnFcvz4yLtEQWCfYz7E3dAzUq5YAcffYwZF6Rp3tguYgakvU8wgxzezAFgM55ggFUZpBwBo",
  "key1": "3nHNssxVLkX841U47jJuHfHQzoaPNcEnfLbSWrxuXxh4WqCjfqqMHeWZv6F8W6RBaNeAw8wdpgktnAgVgV7jpVd9",
  "key2": "4HXubqb2zH8BHt2SRdmjpND6PU6QHMBpeBTYTkF2hjHZijDAF4BGspeAFM1hHkkm7zCJueHUWLNUG9n5odAk2keG",
  "key3": "4d5KjtMH6zc6kmNPDrVdkdzuoPm95cFqABWRLM2mrurximnxLSsQZ7GYCJMRubgSMnbBCcKLup2uLSzqKv4wsEkw",
  "key4": "2iNBNvGHetN7nxHoS6b1CpZrRvkab1T7MVCf89kV7YhH9JQEFXTT3faFYq5ke29me4fqUTAZSMoh2TP51L9wmsp1",
  "key5": "YXsA5kKfWTVNB1DKNpGHr718tXq2LQ3CWLbcW2MsY2qaD8gEbNLomZ5ZR1oiapHnw9X7haetrwQQLuSCShj9aon",
  "key6": "3ULzy8VgQBoV9aZxfoWbVNt14fxzmJZTCrPzcGFEjFNM4uCfwek8RG8tj4X1xzyoVqV7QkUTCxrzUkMPrvh9HyaQ",
  "key7": "5fsCvFS6SGW2mNHNhEbe9XfWY6r9JsumJqjuj14f8XYufoNXdhN3Fyw5bfHRfNRF6EL1EzmwCCx3M36gCU8zmQQ5",
  "key8": "4AmsDavqCiZKswFCpZvDYzKsYmGoR47RPjRSsvxPMUyK6ya5Mt1LK8ATAmrch3NJJjfH8f5nVNfweUaf6YrefD4d",
  "key9": "3MexA9txF2E6qCMqfSTzMYyyHHeC1dWnTy12rXQBG1z1EKZCDZTDQYQFg3p3A7j3qJtyHVrSyufBrostJSAiyG6",
  "key10": "3Q17cBR87ycsKJDUkdqoRfdQCAD5ZRTFWUCvGzVGXkftrtEvEfpkD58aZ39tG6wCFZkrJpKc7abz7wMqAc4uvjFW",
  "key11": "yQaPaSwX4TtK1GfeeCWbMvtdTvMNBTwVv1C1TzftrpH4sgsgcjsNp1XSsGrA8K1xuUf9fDYdJeqkqN8zd5Wb1V4",
  "key12": "3PexH8nhAY5kF2qCiDhRAMG4RUfC5AgyiDRsVnUSncWcR7h2p8tH6wSm7zYo6G3yKX2CXzWFzSeBp8ekGpVVf2FJ",
  "key13": "5Vuc2mwKQvRgNmErbXg1VAfgG5XENqFm34YPUFPdMDF3bcGx8gnBFWxa9RQABnpw43ik91WFQjdTcLoY3DfpGtvT",
  "key14": "EvXPRjxWrgG22sqrTEoq6WRns6XaBiT7wj2uWfL5BsTEKueFeW4bAbAWjG2Se2bTASsRbB2Tsaor6nYnkk141sw",
  "key15": "8PJto5xgGSqENes2JUAZG6BRYtDVGmhcnkuUsvoMQEuHSwo6JYZGvmsiQnvfNfFu3w8CzYPxybC1Z8moY83XNDY",
  "key16": "48wdiG5L8ULWvECfEuUtyaHBtmsngZr23dSvU8eKJXsq244Kp97pbVC1bsviXWBovRBGCmsUNFWCJrMcHNNWR1p4",
  "key17": "5pXc9sHBk6bKzsBPNKuKp5ADRD2bfuvAMzqQJzoEz3Wnw9nXkuMRDzqT5EWD2rMXYJgUUS2HTYp6uC5MjAyJbJhD",
  "key18": "4Z8EPq5GvBZ5E3LETcgYw4gUF3ffixpe2ctNVoy8RzHLRPF6Fdygr8xdyudgEFz93b2iUrn6qohtkotCq6qTHhtk",
  "key19": "5PoJFCNBaSdd9ypqxpN7y64Sq7hP7vV8MsDY5Aye5JeQdekRi3GNWyUrJGfuG2z1ZDDJKFqpndEWp2BKwBpaHXvj",
  "key20": "oDXSZHc8xBFvLbgyQqt6Q8SZZC2hQCmnzV59zmhuHxGBhZwfKxnTcwt57pAawEPAHsYCd9XZUzMA5YCHkdUxRwC",
  "key21": "2L499NquRGiVRRHKUfzQQPTbuwxvDAiAyXNjKyS4tJTyVGdGGvXPGmGhgEd3rcJzYCCJ5iWrQww7HezeQPPV9zdu",
  "key22": "5KZWwfvR6qHgU9bHQUCL7DYzz2s2YfSG9UTBsgxFVkLmMD5REQ4qG35pSVvTh76bBEEommURekkCdQGUAM6xD8vV",
  "key23": "7XzF2HninXo1XwipQfZdNWAUWwnkwYmcp5R2UQBizHTCTfef2nXuYcJfQ6qch2UuUAbS8ER9p76ToYyjn2tJEqP",
  "key24": "5oRWETCjHM8jB6GD88FM9wCb4nQu7cUiQeEMfyGK8HbC58q1jS6ViZRP51BsUUSZQEY7J2TPk9Ytr2rCGD9YKZqo",
  "key25": "3vsBrGGaMSb9kEaqNm5xKiQ44wJtkhJ3D3Pn8UvhynUHwmeegZvA17MQt2PfzKWEceuHQ8u79xAfcmM33aKzuioB",
  "key26": "2MKhFUUGirqoMHW9ZadK47T4nermhqGDKsbVZetcF92aRxkB7BTHihpVJoJGmP2ye6HxqZAmbx9hZgD3GqTLBsqF"
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
