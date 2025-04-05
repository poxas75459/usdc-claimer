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
    "4UMXeQba3uDWmBtsvi94Pi7BswBEr7Bxpfr1gniaSRAsEv4ZdnrRu9Mvpxxp5cdoraxtZ3ob5oUFhZCuf5UVMYWz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HEvL9zLahcKWTygL9r66tckLPFbHwgAQHfFW97oeDMzxUvNvKg3NSAMk6zL68HnjkDL3w35uaRaBxhtm5fWgBq3",
  "key1": "mMmnJd1Byhn1FVk1p82Bhcike1GSGGkrqFH8ENXqJBDYgQJwyk8R9eu6DmesWYJcET8cTXUx5zMYmA7ngvH8CEk",
  "key2": "4cQUvhczVSHVGieiap1K6psd27k9YbrGoMNDkuvZxqgYXnmKEXszKqSXBBJeSujzNqRvLazFujueUDwpXuH28xeH",
  "key3": "25Kvc1mNtWzvQ8fn1R53JWTdMMSdrKonrer2TZXDbNftsLndMcid4MAnyrCBQCZ1jTFexdyJNUxFKj3PaFZV63zF",
  "key4": "3Vx7VPEJX7BXas5mAse93wyxo3T275qXFQbKEe1jGXbHTTCFpV9ZtY2QomFZJ1iDKHVBZ1FiSFK95TsLv18e1dwW",
  "key5": "64WJR6WxvoLEmpMmvGU4uyqbzfpBNTersYjpexiCA6ib6TRViE6KccTeNFcXABnsRSWRvYEFSxGYQCnQVu1e2o32",
  "key6": "2SAgeuzJK8ArfCyfo4uT1381Yb2TwT7eXg1qL518JUPhWMG7MMiSvzusZtDFfgSv1xA8smc6A6rgxQJ8nFnj7kvB",
  "key7": "16wgyHt5QfBBVEJoGWbQDEMPDYLbFEDCoYAX9qiLwbqcD6MFmtFcjEkWN2YQcriqkA4McsJSTZYnnPDkqWZy4Tx",
  "key8": "3smRj5WUdoxweXMKrnE7egXesFkd3rGDTXbMCwzXvWwGuFiUjoB8d3RqkqWxk46J9pCWh3je52itAmtKMRpBpir9",
  "key9": "BULGtHMrkgUfDNHFBH15p9AHQuY5hmhjkV5rsn318pi8HhdSXJeVAJY6cb9qtDYbDNGJm6nLqTcG4SUYeZMbHxv",
  "key10": "4JvKKRDGiZhLxXfZQYkUgUijHK9WXBuQptxM4wnJmSaJ4UquL23cTVSk5XrqmyY8Mco3i5mpaFKJcKNBjFHsQXj6",
  "key11": "24L2NYD5rYCq37Jhtesq6oL2Qkz4LnTaotKgR5yV4vcmMDxBye8cjvJDJxVyb9b5NhuVuc8ag3RpjqgvuFg9eHc8",
  "key12": "5fHoHqTvyV1fb4yN9Sxqwa1ZzwGWEtKA8986v1NGRqQRUe2xSPccEJPGCoA9fqJvYa193n2m6dByDwzFfU5pa4XG",
  "key13": "47XEuQ7Sg2kipH37T4yvGZA4gXVK8cGLdQCBqjg1YV7RjVQjskt28wL1FowMtDBLhHvKDhg8hPZec8FkUkhJgTKL",
  "key14": "5DzUbAJDAiZNAfdq399wv6QKe3cYm39ub9Y3eN7LvDgR1t9ZjcDSTXvggi3xR9oSzfz16tmNMy5v5PAot7py25Jf",
  "key15": "5XPWpt4hZqydJtFoskm71jxDYnrB1LQvV5KQL3vmvN7uJqTFN5pSn1gjrqJNBmwKwDJQ93h7dK4jpzTqqb22vubR",
  "key16": "2FsG1tYcweetxXYafSirisqv5K4cmzZVKdNBQRX9Bcft4iMHU22DJjkQ9wjH1DoUrmZ8f5WDTVukQFG6321yEkWr",
  "key17": "AZTLwHtTJtL8z8omiZH9rN1Q5JCDb8FRWkxcgvczpm3zqvBvSzJSMmnJze1buQUSYho3vECEL6hktxJVbZGJUij",
  "key18": "2M3D8z32SK4UNXk6mX4DNbMtK42Z5EoUoXyDCZcyfDLRhT5PfA6C2Krcsz8y5udgnmFG4Nz6WRS2AYkSAz35cwC5",
  "key19": "34D3EfHrr8gf5GAJ6hU8yGLtMbw8R5xFZ4zWunBuBMEMm32Q4CWJXpFQW2ocPCUyitghbZETMQRc8tGaU7SEp4y3",
  "key20": "59R2KkrSBZF6k1Lei3pafq6JqrioKnTBa1cyFuZQD7G5pnnEpcB7wFwR8ZuWMfCxRbEAw3J8zH5Kj9x5puTH4bow",
  "key21": "nELAbbCLx3a2egmGv8MgNpy2vvdJCw1Vye98kgAwVPWg3RpH6jTJp9Gaoonj6kdaE4XA8bvzKPLEQSSwKnx7Gdi",
  "key22": "3SG42u6pCTnW9MkH4dPKJbbjAAJ8t1PfMahWGSmCUz9PBPDUujHwTdbdj9GkgzqvBnJw2TEyXbxzfZT4Hk8w8uGd",
  "key23": "LaZFGoez6oTSKEGkYzowEkU7VLMPuiDcw2Mf3Tt2RG6NtLo4Rf4fTXS9k7iCWqU5ERxca91gTmYSw9VkL3vBsep",
  "key24": "DMU9ChHpuqm6CCc41ptpiGrqxgsJcfzWmD9vYCucKcSaaaVbVYTM2bjw47EXg8QGUBQExcXFjDLQoQw5hgcoGW4",
  "key25": "35Gim7x2QgR8dJdb71PYLvKTQ4kvKigLaUWDCgqYpmRjRhSJZeucFi3vw4ZUDyMpA6qtJYdghqtYxen9gH6dYU7s",
  "key26": "2wWJjjscCsodbcXXcfxcfBYqFmZNbeJwT8WczjHxV7qr4GsxjyrnaFjDT8L6PidE6XKaL97pwgcpg75nygPkXv99",
  "key27": "2cgBreyWQQTfwL89H1Y2xozJiDajDrJiqcP3GnTA1Ao6aG8fJvsn422sukzaddNXCBv7Hdrf7n2VdJHBDZVKo7Fk",
  "key28": "5JkTanqMSBhgpyJ3qyUzrpBWbo8qX7hEF75UmrnGLVvymQWTMHJQAvjcJ9FvSFkrJwfmWwDk3nWf2zENWVkGUejn",
  "key29": "3QkDEAMNaWgR8ajLLZGENqQvV8BP95XnpXfAWNK62EK9vJzFbepzphXvNo9vdHxaawTkUKjJvnromnWbMFwnXNiv",
  "key30": "C21UbHn7EypGPdokqytDPZRjpHgwZvQ5kBKgpw9WWfWpUx3Ds6xv38aogLHFkG566FzpXyZxX3feo6brSHFTeqf",
  "key31": "d43SckA23FevNpNNmZJde41qSEsTErDViAPejEmP6vqna6QFRVdKp3UkjH5fTY8iQo5SbrZVyVd9D3CFgAuY9eF",
  "key32": "62UyxTfaNQJ8MotJwnnimjdEitchM8Zj2NvAgyf4HSPpZcR6XbkQEH7LsLNL28i6KwdNMUMdrtgDnyRdLStudrVV",
  "key33": "yrQbem8DyoSDNZFMtk8xV6daBkeNWbBXhwAwgNz3QMVwt1q1fzbUAKvjeibinqWknJeYZpKuiXZdKLbvBAMkutQ",
  "key34": "57NPoaAyYm6cv5Bf9gA7MA3T9aVicUy41NgC84TfKUYxqpibseUZVruLcJQG4ajQN6qJyXfYrrvLWmbJQfyiyrNg",
  "key35": "5saqTEuFTpPRJMWaCqGWGcBV5vMUjiyyDWS1TSj7U6f6jFQFjNyrDb7KZ3WTGrbi4zuyPqF68EgkDYdMSHdqvDvq",
  "key36": "31LctQ3An9p6yGhFnucxyEEJJNE4ZxyRAETQPbWxAeTP2383rk93jrXX38SR8B5hTD86Nn3TaE7wufCpbJmCcSb6",
  "key37": "3tWMJsQgDkwSiG17FKkrnLHF56H9WYVCBBbVJKLviTiHn8HY6a4fCfmKCEbo7LKTYz8sp9Tr8hH9y8dRqwxyDUFT",
  "key38": "2B3KXJYdqAQx2b9dPuQScHqhK4puS4UPZrmSXuADBgY1dFFkwybhgtjrVx3Gdy6NrbpdTN6vhSLaYGc5v5Jrubfr",
  "key39": "2tzpArJCxJ6UmE9BAJYZRG2dPAJ1vJKGYzNcEd3kvErkrBwgRaWJBrFWWzPuDFjpNFRVjY3VGwZJYP1dn9M97b48"
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
