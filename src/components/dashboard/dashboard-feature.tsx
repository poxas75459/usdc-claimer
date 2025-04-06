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
    "5Uyx794RyiKCrCXHHQfygSGy8qJHyzKtf4ceuHVADzwd2We9o6tGyN8pRxv9oKm1KQuWLwQ2GiEn14iCstao7KPX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qRrCMuGJCLW5SjuQ2pcjmRHUrcF3MLqp2w11zCzuDBxWnHTCxjkoD4orVhuGUYsLjE2FLBAf8Pw2ud2PhHtJLEy",
  "key1": "5FKcNGjFFb1ck821CfrVR8VfSmnzWEKWq2a4b19ES4Rw7EGcKVKF6ELLbJYH1hJiwsg6ePCPWrRrvQWCZ3ZMRQmp",
  "key2": "63oi9BayvTkZDKpLbzGSYWgKv6FpjRbYYHwHJqZZerxKRXd8dcj4Net4AjMY4QhoQWerx9iyMbMg5Avs4eiyrqu9",
  "key3": "5XnzJpdqvsLZPSUHoACm4x91BcE7eT13wMbrpLTzouCNzcEdSA6P8RDUDzNHpC17z2ebiQfbUF39Jmvp3R4mpJNp",
  "key4": "3duEuhw6NnfF3ipvMZf7iadGxc1qrYb4DVDwB7V3Nz6r9Es9DZPe1evf59iuWGtNgrWjifTN7LnRqMaq5LRHJy1u",
  "key5": "kk4TezgifjXoqosMCcpP3fTMYU22cRdo1zVn2jL775ankUUKnL8QaF3JsdDeVmrpBPvZub8F4iS5J3J6adazMEX",
  "key6": "3VVwMhwN4K25adJwPCnTtZPfKfHAnx1MJbd1nqPGuwe32WDxDou5HBow5dpVuNovi7R4E636tczBvvACMGwM1B7h",
  "key7": "4VW5S1F3VZg1uT7WJPou19jMQ8GHXzTGUUWefYzfkT6ikhtPnmuD7MnjLvpawinUvm1i1bsnsV4XN7y5mbuLJyK5",
  "key8": "2kuoUTF3MM6u4YN9aKjgpvPpx7HXETHY3nvJvGARXekiBreX7NsjS27vU1eKQbbamuzEhP9zsvftDSJP7enXDJ33",
  "key9": "36rbjeJj5CHUQHGdvUf2QaZicdxWD7P3Gmiy2mVKimSEys8xmFWT9oVDdZYXJRiJCMzw11GKHCvD1XzL6TnffaKc",
  "key10": "2ghaBfLjPbgTBvtUxKkatnzUWyGj7zTJSNWFPZmegfNKYdkSr5469EZDFdu7irj9sEEdHJDny5Tx7bQ54TcGX2QX",
  "key11": "3162VPk3yZrsgsdjrSrh567Ju3rmJW6uKWqTb693hxQAho7dcL9fR4bfaUYwNLb4XmxnWkGWh2UcRjHhbJ3T6W4d",
  "key12": "5yr7MUiP39PjS54v2Le3gRXecKPPoxj4KPL6bZQrEHsfts7jLtL5sLkxhqXdXtRx68CMJgdSvQT6d4TFiBcWWMEy",
  "key13": "5Xv9HrD1DEhZgC1TNpr5ytNoNR3LR3Z4tD5F9oa8uD2wEatQQmKcLSoK7QZEscAb5aJhd3EZFaFZXgtbUHz1PG91",
  "key14": "qXrV9G7Ld2p8T9EXGaowdG46y9Fss559cdDe9jjkrMZMcZsjEmhnoVaYi2DPQfdHt9RYC496My3SS5JaZBaLNep",
  "key15": "4wG3QvfxksyKfYvXiqJFUpfRPy221Kd1sMMJJB2KC9Rg3kY1F3qtpadKEvc4CPBMn2wYm4uXHVro7bTkspn9o8yg",
  "key16": "48v2sfouhYMVCkqGnsmzbvK97pMHQKqajFHZ2G5awBudVoabvT34SY9hTkuYFYGEotr6W6bBG5gn4kakf3iDg1eM",
  "key17": "2ahrT8fJ3EEfE1moybFjPAUNuDnSwzsjSFGPJ6mDZ4xuvqq45UQhHwAiwWNsWXaujWVy4VaF44Vj4W4sHJx61DuV",
  "key18": "pgJQxaDD3xjA7Rdb2GRHN2ykm4AnsGmzufj21gvuoTp6Rde4gdrvwdqyDU5RvQgrKP2FkbtejTxdGb8j5cfeLM7",
  "key19": "3f5bgyz2THJXD9nPac3qbho3o8DyoaVMtz6rFMiQjAdBUY8sdDWXmZdVvVM5udDxDdXd4N4BFMtg3d6xcr3r3r3H",
  "key20": "3UYsLWmLkHHnQgQ6banZyVcDjPWsUBP2Bj1jxeYiSgGvJE8rXUAfBujcoUv1PmaoDvzzRw8jVgstTWFTd91mZqe6",
  "key21": "3vvVUXfjC6WZGbiptNNzz5CY4mZV6YF8RGEwRWUm8hM9njR5hZ9Ahz5yRGyiqjVBsNkj5SQ1fphpm98ETbA5DR8B",
  "key22": "krDArPbZyJFK35M9xJqyjL9NN7HfC26UNJ3MS2eHDSRgvedd7PSL4A2pTdFFGA7WrKLNWa6vNX2RhY7TucAJ4rE",
  "key23": "27RRXMRiqq6FKvudiuRTB5YadVUwEPsqqrdNZx4Rh8roWKZ1cz56FnLC1whAt4PhaJ3kmBHZtqYeJJDCNeEQRSGq",
  "key24": "94HRhy1d9dVTsZ2ubxiGqaknhRqW8FpSfzJTqp2ouGmuyRefG4NY4N1A6eh8KnneYcVc5nGBCoSrE7VNyPhiz3t",
  "key25": "3KJcedVQne2ZAvkA3Dxbih7cWrcn6nBCvN1gknrjkWw4kT59Hr2s3oP9Gc6t4KPwfn5RZA5F3G7TSAZW52WK8zYB",
  "key26": "v97gEBhvHLkMDCBYzgox9XHadDkwqpKqTTQ1ee21b8ZgRMbPyZut4oHYdd7qFLfxMYa9U8DLPug8KCC7RaDwoqG",
  "key27": "2CpomoscLELdgMSqAKRExWZpsi7JsSuunEBJNerpBrnjL4YZUi3yNjf8wMXawreXfXMCCFhv8DJfQBNrhB3Beeee",
  "key28": "4XtSix4599DuJJZ3FiFUqX5HBBxQ5Ejk6U8skvAzeYyUWSmYRKhsjf3EnEpajkuZEjufsXCMWKPDNLcxPGP7Vrzr",
  "key29": "5z1rBPMqL5f9zYWX1T7HCDmJyRdQQgekCczjP5S7i9yCErbi4qXG5eKaUAgbSeS5Z6XxKB9AStYFDyuE8S7DhUni",
  "key30": "f768w62f7sfD9yBkBEZm6V6Vc7nE5iULhV21KDddTWEytU58MNQTv3NV5Jg5fie5tVoCCYQEyLhwJknBr1TKUvx",
  "key31": "hUrECtXoBWD9eRsDaVFWJvCVzEeGm1MXBmaAjDmL63pLGJpEr3DUbKLjGffqEnGQ3QpvKCPi5P3GbbK1Nr8cBZk",
  "key32": "662LGgKqDTKawJbL9YYu2nhMuDvZZUqfNrbcNujCdv4V7bUF1mXKGLSnSQf91T1JMj8fYJk32hPrckw4DsCnzDbY",
  "key33": "5CWsSWo1XbSgb3X15Zu5bNTBh3Wn6m7D1EoocMrDHmXwVFaeBbQURnXNAdqQC5w3JTGMLz3VtnsmpWVagzj7UAqb",
  "key34": "5xLfV9TZxgTr4Fa8AzFHCGkwrcKW6D2ujRRjYgov8Jxr4xcjhuSk31Ha6p7mEKqNwyPsvGBNTRQgN18cEWY1TcQi",
  "key35": "KppUs9Qh12Z4JucC9K6Dtxa8WqD9YdXXwLgF7syBGPdc5EMUB3XkewUahr1tuag62ky1QzcWU418NEvZrueLtbh",
  "key36": "23LZWEsRE1vL41Z8PuzPYDXPUDTvRrU7rjQRibDdqAd1c25KMt9ATaa2gxyHRXKJnSzZETXhtKXWLvg8pUEUSeeP",
  "key37": "C6PmQQT75b5TqcQZmGqEpKQ3uFhDfBsp7L4Va8sbjAVHu3XihkQ38Mpdb2MCqTkeUxUfTEXTDJWDEdLyJccrtoe",
  "key38": "oVRp6TUDhsK9Fnz86dnsRDP1L4b4PJw9xBRG71SHrj2hGW3Pc45oPFTx77FHKNgXCVbd8rvZ8ppuRs3NgRKp5ea",
  "key39": "5xKNQdPSkcvTzjxue1ZodJnfG3QFRuSDRkWRxoR7AC7H5DcjZHWcqU38PebzfQyaPkrifn1F1Q4dUn8K1ZKUXuUL",
  "key40": "4rxHKvh43bFrn8toqf2iWMTZjLZZcdAjKB7tgbRi1q1BqWnLsJcrx4kC2SWr5kTVfPbMuzuuiobg5mVydzDof3f6",
  "key41": "62dKRKVKmj8vDe7oAYm4GoEdWkwDgFigdSmrzagfQDhTQcAWNXhT2zvfZDTR3uxAnRgbuyaRLhEjgD7LY7qDQAKT",
  "key42": "3XxWbpnjv8qcwz2MLR3yni7rLGkeLXQ1BK27qaz9fB2RLKyYeB2fuXEfzxf7KQnPMmr9Txz6QnvLoW6J3GXZQHei",
  "key43": "5ubNTFjzTV1qpWN3SMFvYYkE4rD4yx5zKJGfLei91srNgKHqQm62Z2KCwwGakdMPYVET49YiWbbhchukWVrPGWGg",
  "key44": "59TomcNohGybXyS6T6Hx9AMxyWuSrHDfFnpDEh7G8dBvwNSAVBarr1rtLWVFCtmyMoXP6owPV36a2kNmhArj2fH1",
  "key45": "28UQ9np8KcgenFpYnWgXBc6HZLrdnHpJB6ejSRSAhyf87zB3fKdFFzCngxVtMyhSEZEHLPpHEepPtWe4a4QenfE2",
  "key46": "56qqTQGh6WMMLHHR69K3ix9pyFNEYNtR38qCZ8nf3boa9isqyBTmuZPSh4Q1PQy58sohq9m3AP3W7FscLEhS5UZi"
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
