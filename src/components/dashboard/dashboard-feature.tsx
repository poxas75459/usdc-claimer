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
    "2xNGMmmJT2MbHSNZkkAaHGgNWwaPaYLoTDoxJUMdiNi59jUbhA24yojdVsdFLP8XuJhjUqmGp79oKAvkwoUjhbJB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fZp1V58scQVLWFR55gPxFDRCN5iYRH4zKnTWs68g9wzwNjp4kwKGwZe1MMq36BV71mko2kiyq8ceHHtk9SDeuzc",
  "key1": "dcjQ36mJgQb4t92mxhX41gG16HgZeL73EJruxrAyiNfUhjp3UahFCquZsZ6bDGSff41vLBh2u9A3TidZ4VSkuzW",
  "key2": "5wWQdNejy74FMZejnN98cs6Vd45xjeoaL5RoyJzxs6f46sJbHvn6WeTsW2abV5hpjvsvcPoBof2rfZoyghtS8yHu",
  "key3": "2e8zhgrdq29y78owZsVcMhfigPjsJafkWvTykJatTNqg6nyefHD512MTgWGxjvTZKYEEBUCkLzbWdhvH6mXVNsb2",
  "key4": "3emJWkxLUjqkRpLde8GiYyrQ2Mh7nuaZpgZ3P18dP6LmXDFPsruN7rmwNvrAEEK5CG3xeUKLbBGXdkB4vDVcSTtx",
  "key5": "4g9SqQkzMqDN25Yx4PEiDoxksJGkuSuBioJKLLFh4ucFGZF8LUgjA9qQWMR553nTujaYm1kUqMzKibLKLUxLgk3F",
  "key6": "3HLhbWiM7HE1bsBeER2fiFKai6N5kFwqSArENhnCR8EKB2Umcj3pNpmqzAWuPUqn7QUDXviZAvqAAq6Bng2WWtzC",
  "key7": "3BBsZqD6yWc8kJeZdfw3fE3cDJfkBRBUDoXrd9Rz5o1tih5h1Eq3WYfV2WrYAmnjqBkNKdhdXjGV8v5KxrTmA5LC",
  "key8": "4oi8v9MZoLNhnDn8xEx6CnnWBhfiFNBZbirwSaTNTFuYd7CcWH67meEmAHZE7kw5ezBaMXd36iFjgDmf7yh5yZDH",
  "key9": "4G1Wf79gY5bCYwTPgkqgQupLdpm3GzKwUYDTCUaH4a1jTMn6QStL9eVVfuHbpukk1s98QjTD739Bkp5DFBEpLhuH",
  "key10": "2NYcwEAzmooN9xZeG72D5aSMnqNJUP3goeHev6Mgi5XVMTDNrnt3gwsFWAyYtBrpDi1iu8gWM4tEwpcDbfAny8ES",
  "key11": "4XD5sU38VbqCaTe7AHW5wtUF4czAGS9EySvSdcbh2gj3bJvTGxccvQgZNxeSHRPtwWLNDYeV9xfSQ9amYiGpaHMH",
  "key12": "3eZvnhqgJ84PvVoDbHFTRVjxLz2sUdCiJUscxi9thqmTxGkJBTjL5ZAWFRW3miXULxXkP1qcyUjX8DHar7jN36pM",
  "key13": "2uVs9wf4dCcXKgPE3orftF6QWgC4U6SWHo2sR5y3ktMCGfNbZtWgSFvqKcmKsi4AzRnaTEayW89Kdv2xRQWJbhbC",
  "key14": "4gKiqMSsHGjZd5UCTdw6eLgh2ABV8s3mZ8UGQ6XKn8SqdBPviB3gCAhi57oKQTabhK129MVh6h6gQHjzKR9tc4oK",
  "key15": "jRaDYkALPEnh39BmS4EDQQgXcmhpdhL7hQK1A4RGeGE1VUBT6s8oJgt1mxVjWFNrtAAY848p873KyVm9QQymQXr",
  "key16": "4XgB2sCPcSPfFN4U1hsZwEYuCic6vSZusVQtBxKmvYH7d33hLuWXzD7JQDJ8zmraS4mGix2UzyV4mvrUHdov1zAD",
  "key17": "52pnciHyUhooxSmhZDzG1A6T6kUfxhzyeQ9NH6YR13fLDqUZoK3ooLWRC5MhuJtdu2AcXGeZvXJs6D7ejx3ZvdxL",
  "key18": "2bNLeufaTWevoRoPehTaRbxxJLnn72i288Z4kSWLDjEb7a1pndka5PWG4F9wjKqa4aE5fCzifXHXmB1UUf7tEPC1",
  "key19": "4NcKEJLxAVS129zNr7JzwBs9fsoceq8QptTknaxDWyGyXckf2Ab4vvfTv9gaobaRfDb4uAvViRbpVUq9GdwhP4P6",
  "key20": "2kkwMbxEKwEDHkWVz8FaEMjwnXG8Ax1Rd3wRbHGroHL7U7iVY6rgzMbW4m647BiMbr4wEN2MfKLNgaiNxBUpWBCz",
  "key21": "126efDSz2Vdj95CcC6fT8AFNctTecAX731w6hacXP8Rki6rLSyfShVzk9RVHTwNGCuXCMW6wAM6xW2AhQxVdqnur",
  "key22": "yaPeNELrrvUPh13YAsNCjzHuFYPN2YaXbcDWLyU16FZgZGfrv3PcCyBvvZPH2N5CxKi8zJyz83ZzuFdsv2fZTaa",
  "key23": "pAXuuBoghS7XwzTVVxt8BpC8ihc27898UpvcVmyBVFKJThr9N4CUEt7fnZ8ZfAjdY4uC4JBU4SXbRhr6c4iM46s",
  "key24": "4ubw4dqCxFRZKv8JC6rEtJhSjygwdRuJGRuscJdiF4ky9hCdSUDjGPbKqbbz4dxGYTYmsBq7FF6LUkHzDz6uNwXb"
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
