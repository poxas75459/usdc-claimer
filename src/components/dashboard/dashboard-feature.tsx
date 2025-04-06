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
    "2EZSkdby2SqNvtygWTkyt5Kx8zRKHWtqGHXeA3w7Mzf8YYJLuAc6Fcq2A7wuQKw2G9b7FQeDw2bjhbhwksBkVC9a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r1SpgDK6uwUgbHKZ73bCyXsDiKHAxubbNhQQZFUhF4YH9S9CXW3RLXQgxn9EipJcuJY7TnB2Y9YVPFRyEyprRjm",
  "key1": "2DwTt49KvYpgsNVrVqtgkm2PCBerGf4pKvTUBdfkTA8uFtsqEZVYRcUVSCVEi6RumJv1LWpmmiVs6ZfPVEdeYciE",
  "key2": "49yLXPyy9jxkYZaKQTqY8iZ1aTTbywkpiXRwzAH4JVLeefD4x77PUmkJcb6gpFNsA36c9Qh7eThAfqsnfGakUZH",
  "key3": "4sNCJLpENWqAf7rKFzTBajWdhf3MXbWo9dAFvKsE9gAJNYw1VK3fb98K8Jf57NQUFaVoKLr9dXibMBPkV2aQHnqA",
  "key4": "4KzBtgNVVvoNnoYwnnf5DREMZLxyJGmUh7vAzDBe4EutRSNusYF8B5mogDbTdoDN5M8ZsSAxyyCbfSk4ddNnwoZc",
  "key5": "5YE61Abbinb53SeMYrVCLfakfA4Nu3eX7o3TUqanKBAVjzDMvEeWNvzAcNb7iArimGQfVDnvZBmM7RDSF3Lai7R4",
  "key6": "5JBzWGQYQ2yhpKLqrQVDqhFfFf6YcBpPPaN7q5VeBGypg7zHDSjUqj6noMJXFGXKFgGSHtrLRDmUcPhNQaGzgiHj",
  "key7": "5gi22VsdCMaJnMQRo7J24y1E2nXQTuWxf1n6e6mCU4KU8QMemmPUTTaNWe5ZR5p4gLG3SUxz1AEA9vX2cepWHkxX",
  "key8": "2LqU8tfRrqdo4Cm81ZGaR4Jq5ojhq31ecK2z2gprzohq1BGgUSifJDNrr8dKmUtkmJ6AcvKLz2BSBmhDNeynAVFx",
  "key9": "5VEbpYJ7jkkDvrjf1q2BzDuuHc3CEzHtYAzrzwHoRb8miXeddBtjU2KgXrSNuNFJJyfhKi4PycJTomGQSxHkxian",
  "key10": "b1yFHUDrpZFoKfYePE22jykLaTb9DqnMHjmNTFokuergCucY7sKnVAtTGoqKvPwUAyXFgwgdetNL9nfoqivn8Ne",
  "key11": "4s1C3sCQtLfKgsHnmaas6yGBqhq6rTSPkWGpDyCrMPidEnxqmQdUGCQYV3zZKmt9Q4pFegGhptiQbbFvA59TYRTP",
  "key12": "4GS6AqvhnyAu4eM28n3Z7RtVSyq643e3fXUrd3uQ3NWUDgyncGhtunh7LLJFp5Ukp32S5sWxwQ6faEYZZq43SRAD",
  "key13": "3u4FBDg3sjPnxagU2QVMLukPB4HHpxzbnyQ2ZJddXCUQpy4UszAxZF2veqdYx5HmaC8JXSxEWBvkp6jRu1WwkPTL",
  "key14": "Whha94Y4Sn1pTcYpyWsQ3VB6FTzdmBz8T1bgSg1CejBxD8FDhiMvqoNcsYt8k5StA1PTozpiJAihkTEXpwkAvHi",
  "key15": "57AKgTBB6cArrKHrWnxiR7dqf7mMJ9dsuWpskhzY2187QR5LNrkMqt31mUFNtPdHMLfxApzefBgGRnAa6HyNTefK",
  "key16": "5S3gRwEoDkwYchohJ35g6yRRKo3VQhHBqvTzugEtd28fzYjf82PMKy2YXVGQjG3cmghnmNUei1noNN5ZVSfBCLUd",
  "key17": "4Fk5hyrLPNmQjRhBPfnwPrHLAmZeT3HLRCN4ncnaokc5bCPxuS6qmCSqTUhM3Z6vngFexgQCPSnB7JzjYmSbiFJG",
  "key18": "GQHtFJndbSvx2vVSqRtWQocnQd9QB1suXjLpJe1zZxnTNri1fthswAcQAB7DD9qqr39cpRNbw2exWiH5muAXoRf",
  "key19": "2CYhPkxJvZwx8VQTMGXzH5YbKHQZ9MM1JXK2MsZbUDndVQMfDjfgTVSzYkUndUkcqrJds5c5xgtC4ccGhVuQZnA",
  "key20": "2UwK8wY93XpqE2auyYqMRxNkTkxdc65PSGEjWyvNtxTPfp7NiBcRNdyRyYWiFpV3MrU72BuW8Uk4A5BJUf1qVqhQ",
  "key21": "3rhjinqUys67pjm5bNCVuASRHKR6cpQH1zt5DmebNTMGa81vUELPYjM4fZ9V75KqUsjXo73wJvemjmXD3X1ugg8i",
  "key22": "ripsKD65FBzvEFR2W4g2hdLz6JdepGBbPqEbBNzA9cnvnEqYBwERBoQnUNZGDdCTdS3CNSmL1P3rhDLB4zLdVgq",
  "key23": "4r16jSn4Gh9m6V19GY3FecsgxkxDRUiLv47NaiFmzoa9NoPqvqqdowqBFyXFC9NNpLH9HDAY3VXwVN7dZ2Fv1f2T",
  "key24": "jVZ888ojBSGFqZ13Ufo2vnSaC89u2eWshms75nSs4esBNmNXgXsTHrJg4ymuVEherjZkNbRhEyTaYemVG8wiUP4",
  "key25": "3hHXuiT5ZtoVpyyXg7VCyhEi1DfqjeBP2c5ifZGhsMufXW3WYsKxMiV7gjRqsJT1iNUFSNRn99d41QXCLsCphxf5",
  "key26": "639iJtLT2W6rCidM4JTL9R1HgTe7HvNYbYn1UoC5U1aaFPgecaKzTReU2vLr6VgjuspiUZbssPbukcYqBvmHN4JE",
  "key27": "28YcXAFHyCG8dCXB5v9ZbF4v3Mk5bsCdGWUrkCVLQC6r9ktguDANS5KRAk8X2SoWRhFZuCKwyCBk17gTr5zPe6Fu",
  "key28": "5xbZNnE3WRTaxaiZ3bZEU4oDgnzHaNCDnheYtX5YhTw8ubEzfkSTPzNHs5TZNVz2FQUySeZfthNUAejfF7i288D8",
  "key29": "5feC7KRJWRXsBj638drw9NpwywkaszWmzdy9CR8Brtccdi5y6EdAJr1Y5EqszfvH7ZV5ppzsMR3ruGGjw6DVoyjB"
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
