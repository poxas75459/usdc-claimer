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
    "5UUKfHUWUCLy5yk9SdCH5kYNvgoM7YLF6QNv2wzyTEsQwkgiyQ6ywQWD4ahVbaC76kXEzXx8LPMX8E1axXfRhiwf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QDx2HCXwnZFAigYVNyXLRfEPAx8hKa8dFaDW3pYGJqqiqqQdDa1UXvoyPhMZFRn86Ccng8NWSroz25Hkdf4eUiC",
  "key1": "4JaHZAo6SkVK1d9TS8Ft4Vz7jWrK1K8CUjUz9pmhzoEbHLLxqCDEbu4kvYUPp9A15tUPNaVxiAt22voqv8a9XFHi",
  "key2": "2AKT6RfeUmst4dG9Zh2VGBvqM6UjK7CbGRzioopZeGrhu7savwf54WeLoVfeNjrZaPWsx41wB73Xp9xNi4RXH2NL",
  "key3": "R1ztwDTpWE2ab2ErES9xWMiwCCr34FLoFCYrqRLdzKa4d2jzK8iFgS5AsELZcbXUuP8qmjQRCgEMJBGXTjU7WZX",
  "key4": "4LtFVf6o5iTq8GwYUTMJaHR1bbGfuthin9Q2sChMEgRc8QFL8ZV5rYJkP89tC28aMXYzrzzTW9CdmohTKi6H8F2Z",
  "key5": "3PTQFJ8yjG1An9HSV8tweRnZCs2qJgc4YD3sH5Y3oP2HNggyAL67XWAVURXYCCQpLoPwE3tfubF9ZKcisL2JnCUQ",
  "key6": "wvJqFXVc5YDorJMp6xhmaRcJ1fZFwLi9ZBWWdXtouMcTUsdojeQHBnhgCRpJFU8TT4DFr7oop74DuSV8WRfoV53",
  "key7": "GEwiUfHJ1QPquX2wb9KVhkeShawTgfWJhPSsyDzuVMcTGEACgigYogbPNjccx5vnKNoyStnD1J9XhtucrPhAfdL",
  "key8": "31QS2XRNEEByiduQRgDdFU7JrAy2pHo3z8MMZHQAR6BRDTeKjMiP9LHPUpi1tBe3tiDRuDNkMG2UuEbwZxMooYhX",
  "key9": "4ve4L8T3bhGywsbZzLrFmvtPPDmvxSacSBkF5kAikSGwDSh433upakpeB7Sdt3krJ6eE31gzXb5dHhNST8M78kGb",
  "key10": "2e1kPJTVuZT5R1tykfWqXtYbZaPy7v3EXhWd5fCUmJn1MANGt6VdQhbzMizevcecbqWWW3ck1G1xHk9584V9yLit",
  "key11": "3rf7wtAjSrKDPJddJyUSjSZqN2B75WySywYW85BogE5o7yXrWsizKLv5fi4uo7pkx91V1CJbdKXPphjYocF82mwL",
  "key12": "r1p2rpn82X8BhgALjxHvBbRR3WBQBgmUmfkrovDAL4M7TeRyDAyTnT2P7HWGhDS7QbajsjRTDR2Dfn8H36VUtjN",
  "key13": "2MSNMBmJdZnGptLUFWbaPUmg639beeEcad8sT3paDzy832BH9b9J41He1QzG62BWTGimSsEVBNvPwEYbrBEB1MXR",
  "key14": "5ivi9u6x68JVn2gqjvHxE4mfrvFZJXfYKAvA5RQvizB8UM4Az7LeLndajF4LyJ7sqcDCGSCW5nq4cV2YGpNpJPBb",
  "key15": "2Nw4B9XXrbyK66GCQYVzeyDhk2KKkVCSCtr2og1K1sRCASrmcNSzNKD3kdf5Ld3FibNdJh1sQXLeZ9f81B2sJ6Xa",
  "key16": "5aXXy4g2PwGrxbPXVtwYLVApaairPAKvWvMfKvCmxYMMUKJKcbXYgPey5YQ4qtzFoTHFa5nX2fx9THL62BFFmJgw",
  "key17": "KZYMgu9UvLK7Jz4neKqKVU1r7oYtpw4pu3xUuaDHZBGgme9Umj6Mn9rNswYtoWaHABjwzSnYhcJmGGtwNnQd298",
  "key18": "2xGajK5ZsWkXArHbAqdxY9M1FjHCy5S1M3e41p3GFGNCaS3JXs76BpXRwFzr9YpRB7qpYA1pXcSVPKkUtv619e1M",
  "key19": "3fGeYPxqtXTeKyRLNP99rgwnb4XkyDUrNWde5WhnyhayDzyFVUr9MXjXid3rrCeHVShV86WTLVoARcY1xFo4GhGc",
  "key20": "2irtZPEc8ZxA5o5jLBkZyxHg7sPwkzvyf4gqwAitwhxdZ7STPtM6q6KJZKo9tiL7WjDdSCLhY1tkuTaJBLpyJiuv",
  "key21": "5ki1ngHKdwq5quhiaLiqzr6kW1kqKn4wKXLszTsLuJoaKGWBuqQvEZDRSLxvxQEUw9sVz4Edfnc9ph9ua8G6Crqi",
  "key22": "5eFkAThVgEcvpiasBF2uarEyGiwiaCKPC9uE8PDnShm5ZBg7RcDsHbUfzeQi6aG6yhnZ4nXxJwj36oHnWdTHTRXY",
  "key23": "4W2sD9pF4Hi9WbsFGmytDTueR2ByWrtrhcSbqybzdBgGjMVW4akqpDZZQA4jgrAy5dYUSdAefjM7JMjvXZTjH5TP",
  "key24": "2NRMzoKuqhRYqWBJoNYEAK6SDzRyc6zePc1qoJiniMnEzRTQpMQ1LH7oRWh82SiVcZC6jnDwYSfqDBBCt19u2zoe",
  "key25": "3UwS9mehAdSJG8LafCaQT8SqaX7ciqW6Yxv7B2q3GZdG22gDYBbWUzEK9mRUqXi3o26NHizde9TEy3CV2fyQgYWV",
  "key26": "4i8hhvcb1ouWBB42veMLjBs1CM21mN7vH5RENvs5YE12rjKdj8AVWqJTAXc8ZGi9yxVcNRCZjMPj7prfy91ihg9w",
  "key27": "5yeRE8v7MuKzWYbynUQeumXS34k3RXfU2gp3XPL2fuq7QQcchnzvxvf3fVU5jDpsmhMsQX12HmP5eMxgbq3wvVh7",
  "key28": "3UQs5JfcymnpWpibP1C3CAkZrqQPYcsXQDBU4gy1oRBVsAbX2r4L41iqyciB8pHeniQZp2wdBV9CjpWVvCaQ6tUj",
  "key29": "zPqWiK9cLLcNqf6DSv2FSyAwai6fgUbfiYq3HPqPa8NEvSqXaZFNyWgoQCXrVbnUGSGFE2xqmuPP2uNyFZq3JqU",
  "key30": "3fZ9Us512PAUkvuh8XZfJzuWKyu2BkguCxedXWMGrQLrjfUvxeX2CTqNw96KiHF6fAcK96gt2kL5Pi3DQegq2DS7",
  "key31": "5i4mgvhLCsxSU9DRdmt8rPWSPNnu3NX7BDuhRpy8FxVELfg3mNFdXPAdzf6QNqdHd1yYiisvawTryLD4bFGDMFjb",
  "key32": "3TiUYwCXDNJJsFTouUTnrgn4Bok6KPmax2CVsvVMVxJCjnZxrY8R4LKi4oJm1fRVF4jhq86ieGAFoPqZ7HGnNeDg",
  "key33": "2Xkkfjwug2MX2Re8TAUBfWQyhkD4ujoeE25z8kvfVkurCZefz3pThjWWKoepdMe7SHTrxURKdkKMnaN6MWgjhriP",
  "key34": "5JMLmSnxd47xVkAWjUW7nh5Biye4YEaD8RKvX8ZMvwerc3x94jtkYxWfHFqfUnKjHwhLaRAooFEHPAxXZ255NqTQ",
  "key35": "3W6J2m4StvZ2tH8B9XP2erAVSU26RpS6CGhMRhTFwnuPLCAjEhFS5vLR25HvJHQsUBqCskCWheCuLJvpEnpxKkuy",
  "key36": "4PAVKWJRmWJ253n7ByYbhTP4i88gEasFp1GEnz2jQ9gjVmFW9QDNzcmNDJ3rToTwQvXdce63nWp32UeQyxFGv26n",
  "key37": "5uPSRg2Gvgw5dZwrYHiyhvGBkRy7HdTAaAtz6Wkh1A97fZeBDU6LWdevzZaugNdzhCVwRHkB1QQu8G9ou7GsLj58",
  "key38": "2umX211YGZdavkby2PFPLrPpy4NMMtdQTa4DvCtm1PxX3S5dr1UzifgzTLGHm6ZScvVwsawhC3TugEptJ7ZAvqzq",
  "key39": "24jhQ4wtMtru3oJoRCN38yMCCM6NoZ19Uyr5BfX94xMSfGFEqYGh8uVtqaeNwx9Hcf5SHTBAHUyY5bMoYwKGHf7G",
  "key40": "3m96K9xxZB9edQM5fLHVXNLgxjjb3aSWutmsfFVD4ozkP3goCgUsWHniRzF6FZana2JPvE1oKAFBUAQbTtUHDjKt",
  "key41": "4ai5JQN5fC1boGa14eZbaxgDcvFvBS9TXco5947c7kVHsTMpxzpT45BkA8D6NtBjJ1yoNNo6XjAPfX1HYemiYaXQ",
  "key42": "5kEFjFvKTpgZw6qi9ZQG5mJk1javPttV1XGgNoEgHtzyKMM82kSuxByJRbKRUjSGG7rokLD4rgB95EMqbVCRZeMG",
  "key43": "35Ky6qJv14jc15rjuUfu2kco5AqzbvJi4qkc7FbWYRNrYLc1WrxJhhoFtCdABki3QS4RRQUe4nA9sVBg7943pbEV",
  "key44": "2D9jP2RwSpEwo8vHmEGNqZHhfCNUCsyEmjbLtM8ojUiKBjR5DgrAr3feL15sMDRHf9a56NBFNBHYuwDNycrKqus",
  "key45": "2j5QhWLwCJcBdDPFFnLdVjhG6pkhdYjDVNtP2rCvYrxx93ufhR8pzo6ccYWsbpWCxfRznWACZN33f32DbataYHfV",
  "key46": "42dVwyz27MqekpD4FResqjX4T3GVCDwnNoTdoTC4DLP3m2af9YQYCXx1MvmsyrWP6BV7Gdjh6Ge119mBYitDXhFL",
  "key47": "4XbjJ9v9YtwCzrLmqTX8V5Nz2SY2etbEotMyNixwhoZcxQ2QAk9oQ4oCds9SKDQZmKDSDhuhmwafRJWqaLP2zbkG",
  "key48": "2GQV1v6xQkkHHPk2Yc6DEjWfVfSUJqTQwPnRy6Hnw7h3HdSzG1h5zmeWNsH84Wr37pQXbpew9kxoBP7U92RssikG"
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
