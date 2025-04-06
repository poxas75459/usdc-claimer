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
    "4krnSq62L62Pvor87ns2m6Cs4uy4CWaea9J1PLAhZcvuxWouzbQ67MkhTCmvNrvMZxFBq4KYzDk3w7YtLAbtJ6NY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WZeMgpN7fk7QQBA8W8MCsH2mjbwpLWVo41AtX3YJexoa9WA3pgHkkyYjd7cSm68XATHESiZi1hW5PjAGjwiAcfh",
  "key1": "2GgzMiTa3dZvZqzgS4ZssMNbhmFFn8jHJ1We4iAzsDQny2PXKiVUCzCY2C5R4FLo9v4uaGwre1A1KzR2bH8KFkKN",
  "key2": "d8TvyX3h9GgdMiTrBLtonnX7kqTdGeqDkvV6PsxDw46oPhJG5Nbte4Yffdz2SszxuiPhR2V1zwJbnf79GmRL2nN",
  "key3": "d8W5evmDREcnJqAvR1dD6W89cUK4f7Rf6UcoGUjbev8tmUxrJnhjF1ch5HPeSX9fHMD7RJUByMJWW6nisHnnMbC",
  "key4": "vTR8qeQkKvPBc3z4Mz5sZwAfnhCBsPmYHEWDpBHHNrW8kbULq7hx4kDe4pr6uFwpM5wCTQibvwCKNte9zZY9xpC",
  "key5": "51MgJ6PdcWCvh6b7E2aJuM9cGbFCS5FDA23mxFGpGC6nH7Lk4YbeTyQGUpqefK8HySX5JbrSUbHhAGLH3KChdoxk",
  "key6": "4DWcTkP9etRDGGEWPPQ6SesfmUkPpH5kdic2MvDWM4sv1uxkCcD2kpCkAStphVA8HoAfwPbe6GgiW9DQs6YocCJ",
  "key7": "2uKumbeaf7RohmMCq8fPp7B7wLuQkmiVpWWLneg217rHSJ1yfPY4vbA6rapX72QT26Fp9SRYjHBzZKftMqYozCcP",
  "key8": "2g4e6bB9hJ1oixCs86giXXZ8KoXbHmF2gzgns99zwcizaVzJbvWSuVLoGNgwKTCHXzErptWrLXJm7DrqaX7m5wcL",
  "key9": "4itbpvM67aPNb5kDRNjjzNasu3t4VmxEQPGVAZWVtw1CD8WF6qrLZfsGQrA3RJnJUFY2rP3WDAWejk2c8ski6YMe",
  "key10": "5rt6A5YHsKNx6Eeb4E4b57JM2u2do8v6KgVdtYwmKf2bcNEAH2tt9RgD4JsmMc7HszwMzE3PquS5rPojVnV9FKSG",
  "key11": "356sVGTv7L3ewcr5pvhfgbt939h9535PcNZEK4KNa36eBHAXnmTBKwD5oSCzX1dXcPrZfBDxNyWmfuNFSpYmLjkw",
  "key12": "2ifeGVKnoM1ZjMbNk8HDqYPcaSjv9bBrQM2WxwmPy44LPg15o6zCYr48ZFipHKScnDZzFNv9SscaMCMh5jiBQe7C",
  "key13": "3ZeFtXUJLp85GK99J4vdJnCx5qQB9fQFuRNYAiFy7ARTynbFyZNmCsCXXN8hFWLQHAoBCia473tmSDjdMKxKx21Y",
  "key14": "2f5RHb8hZtwyznh9pQg8A5kQj8xKvucjXUttCUetaoxv4bd5ELfmHQpHXuxitPSg86yHYaKV36hyhF5UY85Nut7k",
  "key15": "4Aymh9TcTqSWYHi8QYg6khD7gKJFRHNMgV5ubnAkFnB2GHkgCUPx5v71TLwT6KeC2nCy6NrRjhJzAU3UwdPnyDUp",
  "key16": "2XwAex8Kv1oXGFwv1G8AGusTQdAHmKVfXtbiaAvFHGvFT8Xc2cbKeVSBFnpbNW79T6XGPQRhsLtMqnSDrGx2PTWv",
  "key17": "55DWgZAzN1jLtbPshFNrEsUKHQCK4AwDbVur7KXZ7KpvYRRe8fJ6qf5NGmqy2bTSMQkrVYt9qiUz7VN4oA4fnfHg",
  "key18": "2C6Sm6vxjHL7xXrvZiKujxpeUWzrkdgQcFA5FWY5x3e9JTDYi71sXsvLrWEyE6qcFcQ2SrJU4K2XmxP8qs3ZymCK",
  "key19": "42Rrkf6cydK42Af1hCAP1W7W3YeMei79CmAntXHaQ1KNuWTHGB7n4ncfD4Xc5eq3rd8yMJHHH1fzNHpiVSKAAp6d",
  "key20": "46Npm8Co4pMA7YRnHk8YeENfmBB97A1wZnotnKJBbBBE8rfoQUkPLjptwqPU9MgS1JtvmiVKm9MPVuKGHaxbmB9e",
  "key21": "5gBPFSAiZgAuGkohm6crcXG9FpBxVddGNadhALkkzXeEfzmQoYyzzw3e9xntWiANVa1CJFZX2AuP3virgnPyCA5L",
  "key22": "3E3dxnFjMesC7dy5ATZdjMpehUpgGdLB25P6ZzAk6aYDanoVYCfLBKMrWfFznPFt4jyjJ2HcSSdF6XdUoUZBK1nt",
  "key23": "49GzDBW1oqwEtmMzPoZ6SDu2t9A9T5HHgGQo29yJNjUdSRGKSoT15VKhn4gu9HTNRRfFxkiqeo5Xt4vSoEKSiah1",
  "key24": "5jekLf9nuAfdrTb9CcT8tPspK3zoqtjy8Kxy4kWpwndnWqhpGNvjW6SbUH58Z7KYzwuVJumeuYBCQXaPnKjieeLc",
  "key25": "2BdMQ4w4JLEEQw3RqkzEf6TkL3SpYxCYVNboWWQ8kzZ52HFomiJ6hw6LZiPa53Bf1juNMxWtAxisSRxcR6L8sgG2",
  "key26": "uqzbw6sphevin9Trn9YkmDTJjM3D5EfQ2o3LxzAfBVCEFRyFr1z2jkDvDeC6xzdPMzaEqUv3tg8j2HW7JnXYAnj",
  "key27": "33xzQH8DDGYZXcjcUvgF1fNhTbJr9AhXc7cpToQAfwfHanNcq8ZX5yNJ248ouoRefpSrjSWjtM269vo9ECARroPW",
  "key28": "4gA7XR1G5BqGzsn7UWEoMKYaJEiveDzuDaZc8uEesmKUynqTwSkPhmiD8DWUXoH4agBNavLp52LCvvqBFUk3s3kj",
  "key29": "4QybfQqnnbt5HsSZLsmrgwHX4ocpYjfbBdyRgQPzQhePq9SZpMSEX4t7WD7Ys42PJZrCF3PpYep3BZdC92KEQ39k",
  "key30": "4iyWqPCibjq344DMdrrraKkAVfTWpbJLgiLn8fXxxWb2usCRCBSyUbDdmWqRBbybKKycPH3pSodSMvDEAhNWSdsV",
  "key31": "2pYQw5zU3xRn6scvVjVzLgDqaKRVFPQwCZz7YZbhFqqBMkgUsRAa8RQU3giypaymYu6CqXh5No4bANwjkzuKhRv3",
  "key32": "3V2Y42Xh4wMu5Chizhn4oa5DbmWjzHvKk6pQ8qPWzK7DjkWLvofRk45dNpfR15HgZo5fZVq8hYuWxZ225y2J6hnh",
  "key33": "4ZaohC1MWReU8xQawfbYQh9b1UQrJWXzViCbVe8DkDtUt9qhkXx194bx38GgvwLbogHgo1esgTMnWdgDWU89UkM6",
  "key34": "376LbqwW9EGBhq7RYX6hBz7o3PBjKzSxhAivLxw8gcpZ9PHPf6QLKXagVw9piPXKaH7WNyseEF2vA9CUvzxE2EuC",
  "key35": "47WEd1NziWhWQy9cQSBon4GU94w5UbuVhaPtArFxU8WAR6EUSiXasDZLvvRbrbmaLKXdwxDAq7iYP6Mcnw6nC6C2",
  "key36": "5Y8cgjfvYv7CYDfYX9nD6RG9ZJZvQz18e4VrWx8nb5CYTAn4KS2AcRErfRQp1u7gFxaHp3qaH7BTs4suy8qJEFHA",
  "key37": "Jy7kkKzrvq7omfeH1J9WHZc4SzmBUbhvkoCxdVXQUTQ6JcqFg7eafvtL6zhSYc44EULs7EjjfuNp9x9kHPoE8N9",
  "key38": "3cDK25VAwFV9zWKMX7RG7YK3zzRvfoZ9tcVZkvgXXXhKxZ1ryzLxt9UmCPihHiyzXvbb2qRh6QzxGbc79RXHkbKL",
  "key39": "2FikimBL6xJz21YsST7wGWdycyxqMRpTNvraontw3MC2iHEZzLeyj5FukgnwsXszgjoyWGakTfNFdSKkgJKtKMFp",
  "key40": "5MQyuR5f7SeVWJXmqRJBp73Nj7xyA3nL5b3Y5FNqHqcGMGTJa6uAL4muzQdKfSstmRVatbAMibvGGCcMtNJwjfps",
  "key41": "4oDin2R1NYqubnYsqEmjiiYsCFF2AXaRheGmSthaa6AZcFci4x8nhtRBprfZXRCVDF3UVs18A1cnuSdVCqVaS6UG",
  "key42": "4uurx8EJGinQ3rdS5sBiuBmwZWpt8Ak6fh5erDzXF1uFR5RwYUf5mpxbRciFKDhAWV7nSMLMivCZNbJZSRiSYU7e",
  "key43": "BSYD2n39VeyKuyithXVDbG82kNDmcnGzJ4yFKTGq4n5ReHWXxwHeheW1UXhn529hqFjJao6FhC5e6W7JiFrF4vg"
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
