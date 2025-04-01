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
    "5q4JBDhNY96aM2jQQLvGCB1kaRfXeizMkJnZmDw5KAJTT7DytKhbwwb8uRQGtsMyUqYuMBbQhf9Z47oSctkH8DoR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aPBiobSczprqqg83DMXW2hRp6B6NgdZPEmSfKenpETXMYvAoEVvq6ELm6vkbrCFR51qtiqq9J1hPZ3b49WVJugZ",
  "key1": "2q2bgx9eDRPLEDZb23Ea77wCJ2VQsxZYbRsVYn9KCWPxbcsBfqVx1wZnG1jSZH3ULfZbdfMefkvfZkuSHH13Gzw9",
  "key2": "4zgJafiLgeccmJRvEZ23ETJ4iBfj4yu2MfqFtXCvxgD28DR5rnwBsXHXNawW9UZXeTAbwzkYcGzdicY4k51aim5R",
  "key3": "3NupZrTatpzYiTAPjF6uU7A4wAGnZj11XAhG4rcSMqjtXQEybc3wGSDLk3rF9DSKP9k3sQZLx7KKktFd7GYENCeH",
  "key4": "5q2QypoB2DMseWEETMLk3z91rutcdJC5EUVB5phXZpA7HQsozoYY6LgJfjrUxCxJt8Jup1VPWyokuYTtWKeLLSCF",
  "key5": "7K67w9hK4tK1WVfde9rKtycudaHuPZxuVCqfutuWRdQPxVDiuAGk6c7HbjRPHKvmrtF5eAv7236ytMAn3TehJtp",
  "key6": "2LBBMwoabufoLWZhxphCbpVpsaCP9NEQuzfuyC4ZMfV58phqdwy54MNJoNr6htU58SNw8oF8KQ938LMdyB5qc32m",
  "key7": "5gTJdrB6STv2ZbVd3YX1QY3MuRVG4nAd1yvZRnWQWib8wwUwqMkHsNa9BppwUBqty1e9pCSD5GYR7y37Rp7qtz2c",
  "key8": "Z1M99AExKiLdfYEbiac9hyQuVYXUe6mDsTiX6rNFcoLYdonBHAxqb2kPfRNbDMupRCddaLEXfE2GajjYSf7Dp1Y",
  "key9": "4ggnhs9TnjyuVkrhRmuhoZApMShKyrtH8y3TFy6cBXa8eGV8wXAWhCraxxzdSyr96aQ8b5DLog3KqS7L27DTGu5m",
  "key10": "4WysPQf9jVa1KNp8D9v5SaDC4XwW7ZqJu2nuz6a6T6AZBtoFu1rjk49GvfoG7XLZebhBxktiroFG3TaJq88nTF93",
  "key11": "53D9et5hym4pAQv3QYS5ZRqMczjUcufuJosGA9TChgVKfmhPQqje64H2VBEHHZJLYijNxT362YtLLAbVRuqjuaq5",
  "key12": "2jNGbAHKjLam1ykaSaArHXukugggoNGUUvWXg9WNq8SZFYtS9ywhfDoNZFRWDhxceLS5gTGh4MhfUpZ73cm3yf9",
  "key13": "4DUNfRWAwn9xYfsQ3J5wPVMEPH1drQVDMMXPA5RENb86VgXo88H1x4zfoX9tXmdbpfVVWemLkyWC2PjMseyaC5n8",
  "key14": "4reod1WkQLB11hgjBocAWbrN4d2hPy4CctR8kJZBP3MhmWZb3H8SVcbrqKwZ3XLEzNrZ3iEpqXZTTSEGitQw7A2m",
  "key15": "5WqsEAENpPn43UfPn9HtpESZ2dXdV6ig4XZrY1PWdKWXJx9GM4GFRe8ZHUXqHdou2DEgUYR2hQvwtG2yVGriZxkV",
  "key16": "3KBBDS2bL2KeZk4Q7yFwFZuq2Rv9UcLYMsp7DBh2bp7sjJtRKLMEKhimF7TjbjZ1P7SANFGHLLBseQJryHXwAHor",
  "key17": "2vwUaXGPVaqrc6oNrNHRUditEhKTpN72VKCkerGZeePpQ7X5Bbuan16PhqMDETd1znZ9ESK3VnuguYNLfrNJ9cr",
  "key18": "5WFGpAvDZKgtVTrmB54zA1pAjqM34n27VYYsxoanwjRTQqvH59NW6w4cWESmDWzxfmLYSpetr2ujDueEGeRdJnmF",
  "key19": "4uBijArd1ozvEguHZqFEPmDuZ3C77w24XDmwvPuhf2nBhNT3tsZexyjmm4yqxDftMj2RzVAMNS1pCj4M2n8zpSz5",
  "key20": "2CzJREaSQ4oanA7zPurCGzP2C6y4tJ7Lqk5CU1PqNoN9q2TKQ1cg2Z225vPbySWZQmGJRGd4rejmmLNkrPxwMh9V",
  "key21": "4ZPUaCKKAGiQnArYvcNAJSywrUvURst4upPqxzxkmkFymp8TqUpkzgZzRkMZRMwhxUYM2NWc6n5bbqxUvDLAyq3i",
  "key22": "3EXUAX3A7GEQhCL3YTwgaycp4nGGfmKSGMA7LKgbtESDsrDGWGuRJPA3o7VfR4PtkZBcjRxTaLAt5BC7qa5LHuk4",
  "key23": "6265KFQFkPfFVCHUX1bphypmbvTJEMN9KVAj3ygbGEiGHn7fnbApUgjL2mJMrHfieGJTxiQX2DPpx1TXKq7fQqNJ",
  "key24": "2i1ptjhsHV1gG44sXJVsX72FGgaeo31Wo6CpqNwzvrbWGCX78EW1hizSzVJmQuCLCKppkv4z7KwqnnfvDvUj4kay",
  "key25": "zT8Ddm5XerVc91VyQ4XUZR37eCyUv2VZ4NohUUTPZdV7ZxSBvdNJ23imiXYfSSLwb9psKfjiLmAHFjnpu8svSf2",
  "key26": "PUV4CP8TnR5towSJuDayWS9vLAZkMPh2QEMqnm6ZxnnNecAT3dDj1YC5ERyvdZjPxeuca41NM1tHPfTBA3qx4xZ",
  "key27": "3GNoM7PPv29K3xwXuu8MsiQ9mJxoNqPTBuzBrGsMeKptMvcA9H3BskK8wawKPTunQ2NfuVREMm6SCZyD4hi7Wvej",
  "key28": "3xz7pZMQBn1EhnkbMsovwsoKrJvqfbv2g6qZyD5Fh1m2JumpsxSb4BauWJeEQK7S78dtzm9puj85Ru5CybyteKuj",
  "key29": "4FXLhAs3mY9gdAKeuCnMCsY4UykTjQvebEsyfYYGt7u6Fo5eQ3LyReSqFcAiBCRbX1nixEY3WJv7mojA7b9HBaU2",
  "key30": "5suV8kjapznJB2ninqcec47xuiopb5EvKiTPsZT3R1GBB91ih89pL9cPwrdHGVy4S5M6zG7x999a52u9PfAsuJsG",
  "key31": "4EG5SJ3UXkXijH9pvDAG7B6CKKyoQQNuAaAfbsZCwLGjHyx6nVB8mZdhWr5qxtLCJcQV8RyiefFvJHnamEqgmYU1",
  "key32": "p1WfNrWfnSrmJEfaLdMgZg3HLnGJzVGac3UF3pDF2JDzQ4tqPwpbUk8tcBPs8np4BPyDUEFJ2yhN5jsTPXjeL4D",
  "key33": "4ge1ng93p47M8UVvUMBg2GYhkGkwwVpWAYAV5gtETEowy2j6T7arFS1p3iam4Qd5w8rBDe3AkZ4msxgDdtoqMc8F",
  "key34": "SnimVSFYjvWogYvS7nGsRRAQnXWYaM8wVcndN3jFbrhn4B2BBUcHMLND1qadrZXG4LwPyhB9y51XxvrqREqA792"
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
