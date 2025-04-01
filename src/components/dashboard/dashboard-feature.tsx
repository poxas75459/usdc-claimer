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
    "L7GtfRbsxncu9MBW2XFu44eUSdPajpuJ2Wh2DV7mgpvZhEQSXiQA4z5cb3C8yAY9jr7fG4zTPyEeB5LCsKmSd7y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Rgn6mjsJdJCDT9FCf6e7AFKydG72ZiXpSXGcX3UwDQmpdkUW7L7zMA19ZRqoEVCcdLRGLfrgVzeumvLgYhKQfKS",
  "key1": "5r2YKn8tk2WYr1s39QFqnAunFAEMwSmLjgWqckvHBBJbxFgFwKoowyjbGUwXDDfMn1j2yp9YHGkJ17brckfR8sJ3",
  "key2": "3n9n7jU2RUHoPn6CbzCTZ85CaAqXekcJNJTUs8aMUoqn89f9QXU5UzZpKmkLECXtQSyqE3ksxBdptdSaDsAmLVm7",
  "key3": "jJ6ZC1jE7nWAFnHi5K21aQmGsfrpQtNmnAJ9bxGx9X3WNqauvys7vKQTsNKJVeVEHpN7zKuuJpCqXDwo3A5bp7z",
  "key4": "5MrVGcBJ6PCF88nRPKybJu7iFtxDMpbk6RNa4eEmS8DPCSUEaMgDUdwiKfk7LxDuKNGxJDFgVhEHTePd8jGa9tzb",
  "key5": "4yWZiJvuZ4PgjNJgqGXZujDgG3fJLVoMzpV52Sbx6xiP6abcwW537ftUWvoxLJ8i4HYekuruZ7CekVmL84A7Saji",
  "key6": "xvHGLzWCuCUHDPKDSe5xY47P8xyf3HpGMwzDtSshcFY5otJ15ydssyEgyN4TtPzx2fa7hbGw7YFSGFqHacHsSwa",
  "key7": "3JijGwtsGHDNVfoeQTY9x7pb4JjUsUteiCeMFMFwkTiM6cPwXB7JVmWXfv4DKhBe4YrDfAhiZ8QD6ryCChT5o6Tc",
  "key8": "atXiG77Lqo9QubcYTXpyWELpFS3Q9aEt2nD9kdHnZr9dZoV1B87C1Qjy1Bkue6yRLNn7Dbq1duTbWAkrDkA1BbD",
  "key9": "4mxR8s1G25aEzWSMtvJ2gAHPtbkSAVFPTexQ9hM7Rt1FLDScj2R9FN9KgzCTZoa57f96NZXSXGG5P8e4cvaHhsAV",
  "key10": "2bhBAzKpD4K3QqQJQJvKw5hG4E3dPDHJWmjQ8X16dzqJQLxYydZoonqMABELftjpN6Hhsqt64jHttNHDZsFDuhkU",
  "key11": "5Mf7eLF2iWZ1Mn7nwXdqu9mZodxo583sqM8fdMkvA7oNwqp1hbMngZn1PGNGv6hwSShxz4MhWnasTVSmusnvP8AU",
  "key12": "4HovBuW3vmTthvYG3syEDBJE5936evDrimYpPF36fmeXtnxqPueDTm2XphxvsVSWca57Ls5Kq1yWLM3aN3mVqRvG",
  "key13": "58cASw5qZHTFKML9Vs7R5PsjdESNkkWSoV4CZTJGmHuEJ2vzBs3X98eFJ6quzw52sKR8vM2aHip1uRBdfy9EN9g7",
  "key14": "3ADrQCSa8eLE4gRGobndQUKCBG4wXKs7Z4pDtWWKqat2E3MTPB49bHdou6cBiZUaCx3xWusVQETXs5eknWZwQbcq",
  "key15": "4Ggscc3YrHs1SFeYTiWhmZijRyAFvRgovu6kgWsjU999hW9nGNe5EFNhFW4xq7cQfG3MLjWZBTP4psjFE2xfvmXW",
  "key16": "zFnapiGTwoKy1xZcEXLCktRsWR9C9WwwKePPqkb6doyNy2ZjRDMeCvvX8c3uEHcnet9KjhrKXhFNmzq52vHGM8b",
  "key17": "6771BMgMNCy7jEaGk44mTcZJ4RDNEf55arn7NRhdWyFXVGZ1EgP8urrceBgjavDGnZLME7LbNtWWD92nMA6FKHnj",
  "key18": "2waoRLbQKUDWCeRUNCmj37tp2rXALohTXUe7CWdmKLUw9WCRGLcJwLgNtqYAH7y6pad3EA1eBJfUmk4gZnmJABdY",
  "key19": "LdzHLP2mmfkpKjhGSt1LkeYLfbQowwESdXTmguqogJ4TVSoTYcB7zPJ8gBRESm6WNoC6Vg8ZyH9pnPtxn5NwVvJ",
  "key20": "2afW6zFvgMDjn3vfJXvE4Z1Tkz1zdH1kNUuHFrwkbW7HAff1HSqhpyB1AGGLjR8NsEosmzHvLJXjffEEHRz7paNn",
  "key21": "2b94YbGmNr4EsY7WVryw8LDRme4Jp76bBiZqMkjb99SFcEGKY2yVXEYpr5AbH126t6Q6M3259htrQoUBypekPzWT",
  "key22": "4aVUt3SnyFj5S3YR5eCnrSi3AMzNfTXfVBsg1CsZVr4gri3zuKiyKQLDYuuy7QG9CXzHTAqD7tGSSNeHrLuXXJ6Q",
  "key23": "4tGCWYhjH7v1myB1isCDu6WZvE9UnnKi41tdAQhduk9EzKLcRQMrcttuUjhnBdrkTjHRHzr124zaoL4hbKCQNvUT",
  "key24": "FZmYxMFiuVX4VEqbsx1N3n3ns624tNpcNThqioQdbk6Asx4RVJpq6XVkeVtEF2EEpUPrUQi966LLZ8NgeGdgL7t",
  "key25": "5ArvUYopN1xQTPXoot6nLvaDMicd3ShVFrWUJ8N1mGMx7b8nc4NLKBtaGmcURDZCZLMnkKjhBtYvrhq4RQ64uBBc",
  "key26": "4NSEjX388LtKtGzzvA39EBTHkj5ubNoCQDFHNf3MLpRvD2RTFg8QctK9XNbsd3N262Qs6BV4YxH5SiUhQmtjVN2q",
  "key27": "3Pv3tgsvK6YY3du1ARETFqdLR6iLgQMiGDPxsgSy3HUkew94GWj5rmY4V4TupJZb9hvnpCxs8Pd1VAjSEqxFR7RH",
  "key28": "4MfTu7V8h8tSU81zCcBkwjGHCCbZgqkEZaBM8GCZAfoRNateGRofvpwBtszjoCcMhHxKEhY6fBznXohnmddcqtPc",
  "key29": "5fPCW9RkUtdtFGSbKrqkQKtNuZzfBmNKQji5e27kRjEsCpH5PJEcgvZm7KGZgi5GWJeV5umrPHg8XvMucz9CPxLs",
  "key30": "2SYDoytWqcshTY134PiiKrDz4ETmtKpjqzSL9myC7EEmRSMt74NTCpA6BViDC9t5Pvqf4UHuYSTYxF4D9dLxtBp8",
  "key31": "5yVgN2ehDtu7mv6KFZ45Tx5evWWk5sYrmP1hjQNwvziXdrFtsHNjhn8BkwdpYYyWzbBv3GgfrQ2mJqvMpyNbTLxx",
  "key32": "5P6RubktkR4Aekiz5d2Q8NxPzF1eYR6L4KvNkhvdVUssYGPRrNk3UHCT4kj5N9cmyyp3WVMhNZHT6BjZMVPnfj2r",
  "key33": "4Sbc6869UJ33w4dGf7MnWBqo1yEVwSwPgabdYC7PaakcjHyHTWjmLymVX4EwJpHvko48QbukNVb9Rbcy6Fc2Gh3X",
  "key34": "2dyrCo97PwkHZoQ1tT7Z2frM1rYfyfZWGFZD7EHfhFYUYpDHAoBfK623VJydJbABjgEXMJpfXmwcuWXFNjo7Gguu",
  "key35": "4hcnPBkWWqiCboTJwq1zzc1XaqnZ8jjkHWyf2xGGRsV6oEVE7qgaKbZJ3TTM4BWSfTLBSy8PqPZrpHcr1rXFvCEB",
  "key36": "xwg4tmVmYdekEWRHbFKbF7aiZQ7ou8c99kxLBRqWPvSy65Hj52hf2p5guSYrKZDkkUq5EmrMqpNe3xjsuyE1jhp",
  "key37": "3t5WFjmAe4N5A7q7zFn3dce1rDR1QsnJthkp4QjpFMrNXeHTMafxR7Lva1KSDYCEKFbJvNhF3dzbgTZEtqZWLZU8",
  "key38": "3hBL8yd611zretNxrrqMRZo3ybd9P9RAH95rsGxRRBy8w2WN7gxiLs2BSotCiQUUGx1tL3K5DAzauA5dpmbd4apX",
  "key39": "5ZdCc3ZZ5NAk3iJayWWpT9vJmBkMmDJ29YrMDiQLoyeYLe7zBE3YTmvQ35uvZaAyvhV3EhYokGPjccyHEa4dXnGJ",
  "key40": "957S2Gtp7X1yrqz56T68WdT5GkGx5QydxYuZ8Bd45c5dGi5udpSrAgmfStjF4ZFtw4PGotZQfivy9wRu9evyFUb",
  "key41": "JzuaVFHfMq39N9VQ1UGdevbVy8wCmVkLLT9E5j1kxLkQVgM9p1KWSna9n4mfCh6XZ4F14Ar7hgzuqmMRUFiodPJ",
  "key42": "3iv7BoQpSHQfVPyTGK24V82FeuQ39FUnPqfrSVqVQUseTiqXkk1wV1817k8H8Q4vQE3HRXetyNRrBk4ghvN5R7JR"
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
