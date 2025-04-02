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
    "2kitYmq7Y6141gEHyFY9Jna7B1cJRLzcEZ7NNmphgNAAexhrdcgRiPH9CcoLBa6jgK3CGptos6VzqKWnddamRF1G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "275dQ3PQWpcWgcGQjMx2JJMuH7nndPGeb4F7Ch9SNu1fTzgCe4yahv2K7ZC4k1QqjVYfdTnZEzLprHaxghQRhQQ9",
  "key1": "V8qbViDa8cwUh1PitSYWbevg3TRu8Ffixj8kLmkbBgzLWUoLbYcQnd9ve8pKriSeiw2jnUkjpTG9yVjhfFQcivD",
  "key2": "3jcs8LYCBLkR6VAFUVm5CcZ19NZmNHZukQbYXRsMXkARfT9Tyae4L9UT6VNTK2WSgFt9jE6rbnsDa8cVGgfQFvfN",
  "key3": "2QNw6sVaVax64r5Eo4KW6qjW1LDcY8Upw8yxN3ALYfdrstV7RiVAKhToF67XqfYcivH7oCa6MhjTaZEs43nb3TPT",
  "key4": "3HTLodz2qYiQXvci88pfivVz1E1qEYEiQKVebpcoTLZX6yrTZUEDw6Kj52Ex7vRJW9bdJuqZAEdWjkAyZXsavL1a",
  "key5": "42RKHxgwbiHUiPowM8GrGG7CyPzjXPp2Y1kovmCheDimY5xpRPNVH1bLEnoLUaPCJX7oseDFC7uAQBpjMcFXttwN",
  "key6": "5osSVUNSfThGE9SWhooVteiyGFDdxX34eDzzmZuNVVyBnMSyWumok13ZfL1ZVmARSF5dxdhFax5o3Y6s3xhjYNii",
  "key7": "36JKRcLDZYt3dW49f6XddWFWnQFn3paVx6nYvuSXJVTioASCcGw1t6mkWvRqeYYBMuo8n6Cv3oaawsChaZcCeF69",
  "key8": "nLNnKE7zjYxdSt5qxK88RF1YKJn5Ymhs3yi6kKeB5SS378XSHemoqxpsuSrWMpo9ytL5hCLcuKdd4S31yaUwWV4",
  "key9": "52q2L4pAxCPrFnnUEHo6NfgbPrdSx81JWUyCnNiktzGAh1N1CYnZmnw8d87ZFHC61VFULMadLSt3j997Mc2fDjs6",
  "key10": "59mxgsMzcUywRWFcV9TNWGw1yyq1Rza1i9zVFKsdsyLGw16qrT58nE4cKv1aZ7huF7GLR48t9b3s9r3UUeZQEYec",
  "key11": "2KM2fMaKAEiAZi4yDJU2rrjB8mauR2hQQkutB9v4aNLSWwgA1qGjNE3ceQg7AjZPzz78CnaquAPoqeCXQKm2dMQ3",
  "key12": "4D141SVVFemBXojFTaxXcr11rkKTNg1WjTpCXS7B4zFamvgp3ztpKnsPkzh7w7TDkuKKYyFbet8r8TjYuogyfvdz",
  "key13": "4CV68nmWDXrjV98oJ9RLwHL1JDUJA1xZamgyz1MQZX1qxX7ENUdKUPw6SAvEyzd4QcMcwKHstNTvppNdePhXuc48",
  "key14": "pEBqkvR1PBYoyyGiZSHxpC3Zgeog5iTchUzGNCYmVbFuF5fX2GAqXacituZGo1miqTNtW2o1MKgF2ncd1oikjbi",
  "key15": "2ZwyBShMBWrFU56xFdDYET3NkdxXxyJQQQX8AVquYdvaxabdTWXwN7nGQK2t3Wgehwr51ngfyMjQ9pA8LKSCeHZh",
  "key16": "3mLt6ZfaacXTqzJj7a2WR39Ymi5P3nKWNEy9RsdkoVMbBPW2ssjxiAeVDQEXWMtcVBxgBzxFTFSQ43QSWXLvSEAU",
  "key17": "3GAg7SKmeBp8KTh1DVs7PEFsFwT6mHcgMsHA3vXJZKiJqfg8PY35rVfsHRcUzi9pEaAMrkj7T1xJAZ8bKVD6ADNp",
  "key18": "2iQWsbMEyGGjSFFHAw7csYx3haCn96JudYAGzcAsGYXcMErcsodPbCRT9kzMHzBe7jNkAtJGbLhn4FiUhkKxLuwt",
  "key19": "AccAeqewTtgDwcwwCtH55UMdY631tyESPF3SQtBtdS6nfW2SCB9x4UeLH45guyB74rMDN2JnRXmsuxEBzjSZtBM",
  "key20": "3FiwsPVtUmrP3vZZq2LYyja6xP3Brg1LWrdjcBE9sZ9DembrghQtU6ewj7iNtP8EMRdcyDE7RfhrD8dUqKUUZ3AZ",
  "key21": "4NmEd4wSzCte65aaB1t128P9Ewaje7r2xjAxvJM7qhtnxsYYCGWuYHD4XX9KDbsToqGibEcnXkV7Fb3GcW4s3a1M",
  "key22": "3jQbuKBwybAK9tPYfRcAb1BmQ4vUbpCwVGpvcsD4czoFrkXnnWEFSa6hYxNZ4NvGa5ZyY3qV79rCHPB6xeyNHfcg",
  "key23": "45XCm7M1DzYZs3fJVxr61ppPGaJZq2UwKY8GihignXrmpswjyqEZWNXEqWfQEP8g3sCKnG4fWsDHU3V81v4hRqs2",
  "key24": "2usL7BfpDKutgnb7boH4EcB1S9TyWJPrz9igJjRQ3rjEDgQLGfT3pfsEGQGh7y9ZikkydvzsByuB6vbxnxcD7bAU",
  "key25": "2BYDuBq3uUExKxBDkdyTeRfzSZtxQvsPhGvrqWvwPhs5Rtfa9wx7553w6Zth3MkLabXoTWqZgrtUR4JKnuTvsdE8",
  "key26": "pbMuaMCpMtoheAdk9c59VnYJuq4fS6a2n4EfyeEUCF5h8V2VLXS9tuPGkjYHADcZXWihUKxVJMJe4PW94aUe4pF",
  "key27": "3fAbZJp2h8upGYVVjPc81nqah3gZfeRqSk3nnyFcye8sHUkAjG1x6kPqkRaVEJYGxuxRt3aNptNmiATwAJgBwkZb"
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
