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
    "5f9Vt1EFtFjd575bjeu1Szj6osuRoJbTJUqoQH9vCQxWYWCxGoAzh5YSGruLL24rVr9vbsEuvEaBr5kutYS7EHgY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GoYVpWwFC54nfEeXQbXtNtvMVJdrWJhrx1GTzxMv8RDH4kPvN8hqDGwMq5Jnt8571p9xNMgWdwoWBNKbnfEuyrW",
  "key1": "c2eCkn4k3aXLv9YcYamSTve8svNhSELn2HP8sp6bfbzvFL25b9Xey2fYkhbzGQmfNNL6qRwt9dZ1oETEPzB5SHJ",
  "key2": "67ThSkXUHyMAjPGYv9jTQhNWYWCT31MWWYJ2g6QWvsubwCCAKYarZpBk6tKq8YaGjS8iKqigVFgFRpNSUPcNPJZo",
  "key3": "4b5Pu5BdbYg131LwNhznbY2uxeXqJexkez9NrGQdxtdJHriPq98RHbN5BXBsY3YZGv8vZ84J8hmH2zg7uB9de6Yt",
  "key4": "3w8pZyd3VV5Q6WQdU1jgzVXTdusMVgmb4HjSeTpW2vcZKhS66L9LEYwCjSVC4bLQTCwRTYMpMLAVyNmdRn7sAAWn",
  "key5": "34KEJGrY6c4QSNbgroRPQTadLgb7aprBETbEX8PUoqPFncGGsVWufUzLmL776EZkrTWu7e9rQRLg3ZonF6bavUyG",
  "key6": "29RNDdgzUdaWgFhz8JjhJHWX8etRTMQKshgwB4oNxT8fqY8oE3HQkLk6ntJ6QjeCm4MTa3ktS4gB6HsFbyvDpC3K",
  "key7": "5NoTrn5KWGMS7FqpwashLp4xkM4QKod15s9huLGwukZ4Vq8512BNY9jeQcR1mM6ay8VQw7Ym3AZhKoPiMYBefmix",
  "key8": "5mgGKAFwUSJG5UQrdWTDubh6tGmqSwVc7r8CayNHk8ioL4yRPEia7RqVUeuLgDWS3aYiuxMv9u6eRPXXcjnyqWBi",
  "key9": "2Yca3McbCvaK9pLm9QwCrJWqqnfBoHYgXy6UcZ2FWLhVmewiphC9ERndLsR4pP4DDS6jR2mZubpTMR8qZhYsXE85",
  "key10": "em7NM34AbR3Hqs3LGdqdnB8PPgUwFXwiKTwG8prmA6Hp31XMKy4emExZEncDtuiTHK8U3Z761NH3iibMybsBt7e",
  "key11": "3AH4mMG9i3tTs6CQq7UG3u8fmK3NBvEPvTDbww7vX5tzFiv9x7Jvm7ioqsL7zovwer29xfe58aPBZUUac82qAt5u",
  "key12": "4sH482yzou3ZfyuVj2kHpT4NobT7rTvUJG42oe9opZqWTdrrziL1PaJQkJSo2RDLPD4gPqB6Jh3fLjoSkBSJujE5",
  "key13": "PrJb6KeusoVNCLSrEH6bnd3vs9QihQNG5FkUhuQR1avLSHJxuZuoCaUaunRPJT6o4K9BWNsQAJn9FFmJTPEbXbk",
  "key14": "L4Ff7m21Uk94ihJ5wyZKMrBw26jviKw8jp8Rgm1qVPUFLfFAmTjRUQHgWzn47N67VWFMnSqczf8fnMk3A1FQdMF",
  "key15": "2AGJMBD62wZeCShmMkZKWY5zprhab7gM3m59CFnNMwiGJ5JqWcEXNYZCYGnKaifd9ijiXQNZceoAi11z9cMAJHc4",
  "key16": "MAehtepjcKhTZ8GQRAfGHsjCcNz287ZrBTifDntHqqP85NAfSUVmhqdwT4dt1fQCVZ86z9paNMfhivmunNtNvCR",
  "key17": "5od5aJWmPahQz9brrzmuubnF4s3H4oKLuat6JatNcatUfi8Jo7k1cKvEDDJXhY6bscCezHpby9VAFmQZievkRK6b",
  "key18": "3BPFtLBa4bAp3PeFqNMSYdQwBwBfbaPykMHjASYFMF5uatZhksAVHtiLUxiGiHzW5JVRuXJWTRLVwyj25jH7PMi5",
  "key19": "5bWR9w6T4bxtUELLhRxNjZjRLuzY5LUqxgbBPpoStcUZv6My87dMTchTbvAoRRdFPbjMRAteSwYSDwZ6D1aUft2m",
  "key20": "5SS8Qre7wzMWpEzk24yJ7wMnWRCThEuVvwQf3pcFppoqAR8dEfHLpPdecuJFLZBS5bfqMth6aJPyMBDfuox5Nzvt",
  "key21": "22FQnFE6x25FL426wMzcwVxkGGCJo3jZXsgSEf3HEaJjnHxJMYNxXteLAXDhsavTKG8JQy3kFWe5Ve6gctH7jX6r",
  "key22": "5xFsZ1GjmNhPzXcEgB34V3yj8ij96gPUoSPwhcHoPEzjhkgJd79uFNnyTkuxUYCLigrgv7vyMH9BW7aBuAFuFXUK",
  "key23": "3iknC3YpQNBZnH5AvwTi8LmpprS3KKh5nH8rfR8otNn1fsfvrX9G2n5BVmE6BArDXb6yqVHcWZsKeHQS1Kxj1tKM",
  "key24": "zhSSMUT9NTxnBuainGpgVUUNvJC7EntJvkcsfxSzLPTyBNR6nU3W3PXXFwjbw1k3xqDdrz6eiuaDE7z9UYQcCps",
  "key25": "KVTpQRvvSRk4oExUDuSs2Fmd9hQHrd5ZPVVzEUtxectMZ6YsEoTwA1pMQtXviwLkdEt2xu6X657hW1PT7tsfD1F",
  "key26": "6y3LCdesnXa2619HmuRQumiFmCTRniiX61dcDTh9d55tRe5Lxfx189eQEBESeHj3AjTSS21QhcapGZYRj7RxCDJ",
  "key27": "671BzaGxmjNszi3zeiZPrJVW684XjbpD32gbC3CD1hG2EnWnMg4fCgXjMXLEMnVS8tW4LFTu7hkudtJom3pe2pTZ",
  "key28": "4sEQdwSzJNc94cpEwutwroC8qzQpKQkk4sMAWmBnWhp92ZPu6awDuuSkTu45DMsWZXWGwPwEtTNdFJ3K2o888Zdf",
  "key29": "5wXCA1JavCciz2GqxQcZhXcKjHQFgNuTP294qkc75TJKXfbFr7wbnVQoPx5LSRKBcryaZ6vXgnZxSAa9NKDPZktw",
  "key30": "5LRdfe9gCPCzjjDFyeu6wmUkhxYwHLXCyo3PxJRjDQyCWD6S7tmxkt4YV6eWgRb1jNkjKA7hJxpKAkBSnoVyd2ih",
  "key31": "5uSVM9km6zx5SvBkPtAfCA1XhciBwPwsZoJ7WuWaMqzKRDX8HGi5RLUDVYqDQCKRQJdoAS5QP2RytjTuLZ76tKDZ",
  "key32": "5eemvaiWYMNyMD99W1xxWfQ8mqcPLKTBWT6v6sRwZCQMCvatvhtRgy7NLnAGbR1nP6y18p9DYYLTktmdh7o8RdKZ",
  "key33": "4qMDoKGdsA643RAsKWuhzGWG7X9x8EDg3VqbBzzkjj1Dv9ZMG8Vca7EHffpEJRdzmgCKLQa5QFArkMa5DapCoXe",
  "key34": "3AGCekTk2F3E67JuyqzHK7XtDTLaMRx3RTrfk7c1f4Vj136TvYKaDqChjtnmp9FjRaTaiyeWBazM3HPSNdmxRfKj"
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
