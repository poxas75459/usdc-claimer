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
    "3nhUh9aX1PcwsYSNoArKuCUFngrTMTM3b4L8cN88qY7LeSoFFwUkEh7DU83KQCEYgBvZvEvhW6bZAvL9Ah6t2qf6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Nfz9wGAk6rnqQEgvYdibRSgyqtZBoYqpjF3aqpiesGiUbx6RLfoGEbXjqYjzuG4ga7DPS3aXgn5iTosEgPaBMcZ",
  "key1": "2CX9jGvwr9JnuYx16xUnkb8WJdRH98kQhBJoTG2ti746BreaTTc4BUsMZpqQ2BhRbivqhCch8bJCZMruB7gcqnZT",
  "key2": "3doRZ4snXuiEizXJVsAxh5cVLPF3f83e9fS8xPsU8oG4BEDKEvBEpEcJyxFnUfctjwwENtkV3Lfs4mCEVqmqxsNJ",
  "key3": "2u93vJ7vGAbrVqVHjWEHfv8nzW5cyUnBS3vP8obiBjqLuCtqtvvfm92qNGwEyzoHA1ZuRTVHT6R8QBeUknmftL7M",
  "key4": "2AFVKGXqaE3QnHYsAaqWDVD4d6K4zvpkpkr4CsWNz41ZLDp3oxj5Du9cQnrTG37m12fAXQjCxVJUfrS7GyM7QSYX",
  "key5": "48EJCJNDShWZWcWdPTmDVHA932YJMWUWxVQEuVcatc34QRa8jP1hMS6Y4evgM4DxcVMuZdw8JH5YhQisQuMkSc5V",
  "key6": "hT16hyPTAmcZsFeWYKdZysgWXz1fQXnfDRcm7TdgRAo53pGib5ZxUsuXmxeZ9gZAL53GurdLbhiWYkBmYxTgZxi",
  "key7": "cwbLNLfHrhuQZrcrHBYhrbAi8eSsRjy5vfcPgfaCd5YfaK8Ky9hEu5kqF6uZBYNfNQioFMQBM51PBZHNNdAM5K2",
  "key8": "2DWUf64B24s63Snug3qiwougxG3iXHTem4gsxiLnWyFAC95hWjpFRkzFT9d3oY66TTEYdB2hNdHPJLfSW5zPu3JS",
  "key9": "5m3pr4LTmWGBNRWCAaAufZkbt1kpt916obizwbXPQ9Xqp9KzgKUc13yBKTt8PZ8fgtHCHMVycM7DWyLKqKisjuMG",
  "key10": "5FAjLifLvqCa4K7Nt2Geet5woSSTQhwk4sjUXTNEmp6VMUKEESmTaxjVYX68ZVDiqvwjtdruWAQZzVy993az3AJf",
  "key11": "UvEb4j8rLM7hcnodSBs6R53RfeQX1PcTXuhM8bdLHynx6xoSjggpzQyYHLkwLCyp9Zdut899mmjMfXy7EGuhFUK",
  "key12": "4L89wFDiZTMRwLqqkoxizXje55dFhqiHYBAgNeTVcC6qn9bEBLk9DnC8s6iCG8EGxzKvr7W7b3pe9o5EUZC3dR24",
  "key13": "29aKhsbBxEzansMmQB6BbkziBc4Z9FshwJHhxqUXLUESYN78QVLDE2GPKAwhmKyo1Ksq2N5BcheJEuLsUZjrZ6NM",
  "key14": "4NAExPBLsmUWMS6vKxJryVg5aFAeSN5QNo58XEreD6to7U55VBYAtNyqW2VHC4qo73pqxVtwYLG1R2zgj59qaB7B",
  "key15": "3hzkpjo2P6Fi2H1iB2PcLVSZtEtG45dcLHbnsu6GhPwvdgFM4fwVRCyUbVADQB1Ppci8WWEmf8XsNAHwq5nHRyrW",
  "key16": "2J5V9nAT57vbfZpWttDFXMiDd21KqsfJZfQNZRjssHE99KFxrAagYrVojcbfA6SuzQaxQaMMMxLt1nQrfV7rZzkJ",
  "key17": "3BcsXgGYZXSfRjdpihkWVZxWNoj4VmrsAaifJwFYJowBaazgXy93KBu3zrZQKmQ4UN55gUHxqfXCskb7oEoeXzeB",
  "key18": "FyfXTWxYpqr1QmDWcP4MxyoJXFn7n16v8Et8e7qGXdvCTKzeucyEVLfR53ZHTMs6kjao4q2UKvaLuysY1iZxeoN",
  "key19": "2pviVau1nDjxVLQpfeuihA9Hojif983yWDP7o1NSGYcBop4MtQ1FgQHaGPKiffCUEE9U516aJUb6RDKNGuQNY8Ex",
  "key20": "4WLCsf6hUURV6ns6AFT58CbG9xasHoWUaoLS4ox7ehSdt8CGp8T4s9GTzGzWxDBoDj1YH5UQxZcqH49LnMatb8YJ",
  "key21": "25pCrTGm8sM8DcV4oVnnUGqrzAzxDPcNAGghtDBeXtGcwdDEQrYu9AJnJtZeSAr6UNTmUSRYvyvT48Lo5ZujAHkX",
  "key22": "pHE1cq29UJozcTMD3L4meTs6L36XKkbsWCbRMjAT7MLJCZ7tjEYmunFbLsEPobqZrovPi962nfyMk68favk9dne",
  "key23": "nSnePpVA35mwNGE3czsk46Z1qygWQytT4UMnVaJhnhUDcGVTA9diX9Pxu3DsWZUtHaoVYkMp55y6yAjKTUHhPgA",
  "key24": "2dYvCiacVs26o4bioNSuTVhBS3egNbXKtXjc8WshR6tRBzgiyycEngtv3egTjbJnRzAbPvAkVcq5KuSFQNrw4vjy",
  "key25": "53cRxQC8qEkLYzCQi2Bi23iFbphZ33DYNuRWNe59vRMQbWSYcoEFTzUFkEPreRLLD2Raprzxu9z3AcZDa2A65SBY",
  "key26": "4QyYiEBq8yxFCqi25G1ZeUdFyEapiX2s7SuDTYJbAtSLn9tGkyyaoqohyjig1C2JdxwqfcVjk3MzkkjeU3ftp7Aj",
  "key27": "P5mmqYk2PSGPbRcfMR6x6Yq6tiRJCUqN5MEw1SkLJiBDxdiGxMwfZQywXyHYAuTNKUu5BLA5xEUVQmSx3VZ5kQV",
  "key28": "b17RPpZUCJSKcySE1LxMfdRRLqtR9yVoKw78eQjK1bZd4bVJpVQxjHEvvK6ArmZYuMXv58kdJ5GnghK1gUrofQy",
  "key29": "c5cM8pKCXU8xQ4sQHCSnq48SFVEmDtQGmjicE6wpbhRQcP6LcYquz3eb9ckrDQwuqsHX9mUw5rt6oQjfjJvqFFA",
  "key30": "2zTssfiDD84oJYpSmgttYtxVYMV36FRvjkc6GhBGxUCZW7WnJAt9qsfRSeEUxHZPwaR4zy2qj8jp2gUyQPboSRJk"
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
