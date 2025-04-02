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
    "2VLjT7KTQCRYmvQyx7FvAkvow1BXru6VgsAkffrvNL2uqsniw5RMYaEEi88n7edSLCyC97e7QkBkDcCmY11mtEEr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61gUENMe1iyghgv9JqUTNTzDjdXjWEEwF113ZYTRcNPYegaoXkQCUm73ewq6Y2b4c7jw5QrnBN5z5DWCxKJJ1Vxo",
  "key1": "4eUh8erZLb8QPZkxggmcGcJvzk1vSJuesVxW8Hs6K4VekkjH3EMW9xWDgSX2aK1MLSPqvpcKjoqGwPsb2M6VDiUK",
  "key2": "K4ZXTJwkTSp33E5BEUcuZC7wMUQtYLgt3moJhwzKW779GaTyy3v79RYEAUHJPkwQLC78aCFYn3k2qutuga13C4C",
  "key3": "3ghTjcsejtjP2BH1cVRwnS4QoirdZS91USv2KLgFnZUs3Ya6Zy2ZxZGwmYgqzhVfNwWQKVQH4XDYMA66fvzRpuPr",
  "key4": "4TpKweH73z2XkrrrDGQG4ZQRsk3PJujLgeY9d4wK6gYbPe9XKMMhVXHWnNQZJ6KA3NAhcrdAAppHEjEqcFjxeBdT",
  "key5": "TMxZp6Wwn2E1YE7u9dC7wqTi7meZhc6Qxq5ES2VGqoDzM18tCqh7mbX76h49SuRogqP5CT5iupcmAP7UBoTcdZe",
  "key6": "2mFTKJQNvRn3T82Tp55YVqP9qHPmvn6fsoTMpeZ2WhkFUnFS7DER63VuPp7H89wKCixjLRSeG4bWNynjj9GYi1QR",
  "key7": "3rwv4g5Y8PxJZKMKL6ufz91fKL8T5Jx6ADnBdwKRvnDJ9cY9LgXVUq7gJdwCCGQCppHKEbpscD3zAc4Gezq4b2Ev",
  "key8": "cYn7HMX4gH3qD7sPNKZWuuHBuW9pNk2BmThWRdeeHKbBFYatY8sF2TLaEhFgscFc562EaXE9KR23Wd6XzYyye5B",
  "key9": "5mcELVxXhxKKp7JchHJzg2uizbTbxro96u6mU6qBNT7pcce9tHeX51HD81CN5UMwTqy9zVoANNzfNUS6hHTSMJtV",
  "key10": "5pQzgjD98L8EZt4qAxAkTotPUd1QJxN3tCxDUkkUj1nc9CRcx5AyrtN3W2mzgAwK8pjjt6SYxXQnSPEuMAHQ8YMV",
  "key11": "3zW1XdsVoBrueoeE3hqNQJJk7MooVCp2g3ecF3Bv5EkBJGXudHM7vJs6HbhNhDSUkgvehf4PBCfdeMAd5363mPzi",
  "key12": "571hkfAzY1FGvjKzqimeaNoMh5pAjDZbMHYYtGwHC5dgCb87TECs7biXtfKaXjyEF929D9KAkeqvMVGfhnHyz41H",
  "key13": "5SkXuiyQWigt2Pvj3wwX4qQv3bo8QpjXjqMMaQ5bNYW8mxRq2rVBNRTJDab4pMdgC5iSs35ZTv7EwAYjYWeirJsP",
  "key14": "4zzroPTEwc7sk3C9bykqYUKkCtgXr6YabvkeeL9bcPee7dRbcTHkyfSBCzYfNvSNNB2davegNUsUorj3GfAegtY2",
  "key15": "4aJMHh4whWX635HBxzMxg4Em86bnRbUpTmgoYFyVbT4GX8x7LwnQpLFYD2FAPFPDKAQmKjBzTF7BJ98kqyN9aJ2x",
  "key16": "47hb2Y1FDmHT7oeqtWibSFyqvR1dCoNeGphAjAhKznVShfkbi1BbrRQL8sYATzemGJKMMrT3WvU1SMKCGLjb4rCo",
  "key17": "63joSowFcU7trpffXQXztLfTeR3bDewy9644TvX4HdAL5a9uRhdWM7rQPbfQxMgF8aHsZ6Bp8B5WK32beGmANqev",
  "key18": "wB5Eb4tKKCNu6HcscTFkbKcToA7RhnFbeDZAzDkPN58dEsBEbjX7eKEh2tFdo4wXY9aE1TN4m7KrhLYa1pfHrQS",
  "key19": "das2ZjcnubNXmWnBJ5c3s7nMUsGnDQAQ7Bq1KnT9MbmvRujgwr9AN3n5wCjNzA9zs5rnTcmbKUNP7T3dGamn3hT",
  "key20": "2dCtipN3hbhHaw7vzUzsXuunjqAREet2WWe4iNx42zPV9wwmtH6KbWqWyDgNazf5AY8LUuXYRDTYJfLLRwYJHUpH",
  "key21": "63y1bzoY88GiEnBSpz3ByJRurRS6hFmwKEiSANUdBo24EkELHBNGeuQTRdj5QpYeDkK3CFBG9vXTMemP128PmkUC",
  "key22": "643KhJTi1WHdmvwm5yYn8Ut3jnZoSu6iuPbqBtAWFvPC7BXW8U8ckxqj2b4JBdXjhY8scvi59jxby62iqmkNqReu",
  "key23": "2MonJJddLP1gG9p9w5bG1u39TcCxT4TbVkrARsjCzjnXzMqPzztHac5YkXfTsvdKfn9uAE2kCYBsEJBQVczMmNDg",
  "key24": "gT9aLQigNr27AMAZKfcRG8JyQ1r4tChYsWVT9xQRt3Jh2GYYkGWe8QRZXWbthio4rgS3q2NLgWMF1cRS33nBSHR",
  "key25": "2ytZDKbtRbxH39dfhv893goJfc6AbaxQiMTQows792cuYzHm4fgxHCoYb9Wv2dxGZGhgkeM19dLMW9nQ2TMGL6Hm",
  "key26": "3QkQ3qfXGQsxpkbQr4rZp2BkPzGDRekPpPfvgK4poBsJR1T7Cc5tF5cmHscw49spwQUWf6D95D438ee9jsHpmPj6",
  "key27": "5MjeenhJbuxAqjXiJ3Zwraszr4L4nbT21UDrKkf335bMvxkzBVMUtydeLLoMB4zF6aCUbgAZfpKQVdxa91Vyu7gu",
  "key28": "EEhoZNtiuMuRekyBTcE3EZh2GxDq6X1JX7PTEBSMesG2AjRAeZDNUQ8dSW7uzaJnvrQKZZ89nxc5gRyryQGdM3t",
  "key29": "4usNJfNa68PUFvyDxBL1GEpUeSTQfhxRpWZE4Fxem9kQ5G4kB5giaRbYskWBYsAQnJXHwWsqfp4Ms7SHPva5oznD",
  "key30": "5BQRpsBpc5rV2opp4ybqEBsUfz1orT762q5hmKJt4m1M5QosJV25GjhCUtvf7UnP19sX81nfm71zDS1tkhX7D8dy",
  "key31": "5KXPdqoVXF147GXTuWq9ai23DUmAXCRKFH13qccSTuBG6gnL4xLK1gcSFjd9Ru8LUmbXz1QwVAKh89TJ3uyMXhbX",
  "key32": "4tcyyg8Q97rRoyiZE6BJ2mmjSmDaxe8ReBpfPycmyDjhxpHKo3gDN7jBP9dhHm99iwKBEAHE8FTGguo8LeQVUEMD"
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
