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
    "3xCEVHFFBthn7naZJkLM1MErs1imHjMyckV1wWtvUTGCEDfy5jdHuuWSyLC47aARTmMkwn556oRNVZ9FnpKCaWzt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BQrAJCh8i7an8idxnYV3HumQFhR5DZEnWYGbwWRHhBuHEE2Y1EdsQfaiFhzfatVnfpVKkcxvf8ZVhXPuM5cQcNw",
  "key1": "3PkNX4NbZ9JZVuvCyw1MD5ts8RwdC7Dh5RFkcMoyDKWaNPeurrGT8qe6nfMsuvNypxsJtSMbwpZDWUcURVDYCAAm",
  "key2": "ewc4AQTG3nTeRv7dxZiZf6R5StsXtwDpoAYtaVhebkoT4KkiF2JaWKjxWKpbXQpRRbPU5cdpKotVnSBpBp3LiLi",
  "key3": "4HeKYwBQD8q8bSPa18wJKM51HAx66atnMppkP115kdktLx6DkCMe6hRCJRwu9mmXDoep4h5YKJPfMA86DjVeCahJ",
  "key4": "4tENgJysZz3vCMe15HpMcuUjsWDDfT7Kjpt4rwd8QC4zZgNHDu6komMK5YyBfZnipQMd9NGmo1vPZpgdK3tNSddL",
  "key5": "T15MisevMoessFKcaEGcsKqNF5BQ8T14rgw3grYLcYNPazNsmCHae5yxWTDtMWKMnWZABirh1ALfv66hoqEq6Sz",
  "key6": "62Zq6kj8VphpszUwa3EuVDKUf8Svzj9T6UgnoCgHzvjoN8VsayKwxw3KmFELqZyme8Keb7pEEmqJ7G3Pj1o6ohVS",
  "key7": "358ANimTaeQggDVG9YLkdtQcQxTBv6zLxZRfhNwQDS9PBQn8AwGrsKH8whXRu1rzFhqhPRYTFfdANtfVGRCWkjCW",
  "key8": "3QXp3tpv49JGj6Gx4Pupi9ZbTvktqvPMjbQSJEJsqHxzcwwXs8tM1UZsVpj3wjidExVJXPKuo6d3Dw9pWqQNPcap",
  "key9": "27tUKSfRPsAoGAyRYkv9YXo8CSmkEjLbfJfCGn3vq4YsAT5GTUgBT9eS9X9bHZ24xqSNc5Sy64zjDTJZm158v9wC",
  "key10": "5hbwRQiXLTvsFmKcVKYuyBmDMtcs6BBti3SLkHQN1nWeA2nHD7skZZRTtd5gma6LjTiQN7mYGYXquze3Abjo3wqn",
  "key11": "5koE9YacHdBAS4vogFwGkA9ZGuky3TfesrGuAG5Zo8qstMp2AziMBi7mKcgktJLvqYpchcHjnNvXX9mQAnWXUm3v",
  "key12": "43WowmzGkcpJRq4dgcRZCLbeehC5ngkn7XXmN1d2tX5bfsjj2kaL7Z1Vb1ZjbkX9BxxZqpzcP4UBYX9suAcGc6YY",
  "key13": "3PNqK5feBSwoXSaZTwg2z6sCUCejaRcKR6FGsFZGy2XPNXzEFYFTLLaFhShwJLV3iVZL8Rvqxg4AEWxqxQ4qLHva",
  "key14": "5ozJgDpUr3zNKf87MmM6TjWsx2GYU9DA6y3bQTQatmfJtq7GcXnPiB3TRdWSfmtkPxYuAjVkNqzrduhwcz7NG1zj",
  "key15": "4nRVf1BEdsr2Kvbmo4R1WCQAm88hw2F4yiZuqXHkKnm2kHsWT7P77uxYRmWDVBWLLLWqKVDYFQJbxN4HbApju4bw",
  "key16": "2xDtWbkQPQDvgz64JnYPg16aH9LZuCUCJQFHh9d3tuWrYZkoNnsF8VxmJc4zuojWPK6bija5bi7oCsscqKnCUQnn",
  "key17": "36g3o7gMgXtHzhkadUeY16Bf5kbUhy8Kqtn8T1YYys4XVtDPb6XavJXqQiUnzv4eP4Njgi8hFEZiGPJ3XT9LZdSq",
  "key18": "2SvbAeTm6aQxok5w1kbKMi1HgYT3mFzxkKwHkNcoZkcu2iQCKfXWL2auAwm4oRR8RsAyW1mNahHbQSdt4jNsQQnW",
  "key19": "2yxLphvCoGdUXrh4umijB2dxnzbGmYrPN1yBTovPJogL9u5b5KqNLfdAsv6AaUoeJLJbD17FRyej7pD9hTtNvdQT",
  "key20": "21zHQzZkV1zPXQXZygJit7f8tKA9msWWkRoEoxnVeHAs2CWXdgpCD8ihnkcGwPxfMQWY1Sxa3a63MkNtyGss6ecG",
  "key21": "3NW5ZFrJcYtKqiLTX89wHU8qQGsTTnjADt2AZpuR3UPZQ3EcoLv8LAfauqiBNqGFGdiLNbPFPK9me2VUNkZsVzxQ",
  "key22": "4AdRz7UnGHNGrDUJ9ZYWC7MNzL3WqnLQ2dVjYLvqJNEKq3RHpaa9Yza6n12z37CD4n8zjaYFjhmocX1K8NUfyzBN",
  "key23": "4HHsVSUMVAgmoXw7duPWkXPq9cbEXXaoab7j2UqMAi5d7uGnwE4W3qVyMbZJuqeAaSgJi8Me6H5xbcqcyx2vSkKZ",
  "key24": "5DiA2Rf3zRJoTim5BovVF5sz2DD2khZhFMLp8D9a9hC6woo8mZPzchS9J7PWAXkLmAS2HaFR6rEhZV2Sfpjri93x",
  "key25": "5tZdK7S5JLZ3Ha98vms1azUwctVAFmVupV3iGmcsYFbnST3VdtQarazHe5FWx7gzZqMKoPqqtfPxGmcpGEisryrR",
  "key26": "29txR36mchLa6gb5Aj3qjMeXXDjA2ERhk15qBs1XW5MWJ2kV8c5js7bj3cueRTXAryUy8YkvQEjk9ebWMVLGV2sd",
  "key27": "4XxRcos1ioyCA8earY3D6CSeaAry5QuLoE7B1PTSydniTZaEToomzcBAUGB9rDez5Jj86cbW2BQZvSq2DqcBK4Mk",
  "key28": "49Ur4usZRiujVMbay5AZHktAWEVuDJt6keEA8dCXxy32XZUxXPJVsgTgeNcycjDDMmMZrrQjUWWdMQmhq3NW8Vzd",
  "key29": "37SeSuQCuVU2xAHPLUu9XFbLSvp1WE2mvA5BV4t7ayy4VQr3N7FRNZaUoQ4rzoEHZGEqSp5kvfWp9DPH2xw2NkUY",
  "key30": "3ZTGgZZEUkv6cwQVCq4WwHBK6xQoDGzMpi1QF34chWeea9i7nuqzgBJPws4Zg5UzDmMdkP8cVqcvt8qbJuoX4gaK",
  "key31": "2RkCx7MJuhhCYn7wwWgtHwSe4FhvVR3Z7HovySAy7sULn1W6ThNSE9RyQrQKb8rztQ5ZtovRqck6vNG83NhnBw89",
  "key32": "4CLvo4DMpZTp7H8EYR17d8829QyELDxrUQwGPg8E5QcCbt1MwahxczMzY5pwziLpUwPVPUDfJLheBFTM8LQR1coe",
  "key33": "59fWY5v1ZvXjxdpcBxkzpA5m3VpjQDksKZCwJMetD7avgbdtb61f1jKCxCDLUrLjSg6wE8C8wKFJFadPzGrA8cFf",
  "key34": "3mAXwaJnScEpJLMcsrLLso3G9v7w2uPkbArMwu7MMjTycsYvC8BFKgH7gcDcAPFS4iTgHLzvyZQPsVRA4MU4V4PC",
  "key35": "26Z77WBwyGdruhepKwKoGBs2EXqJN2KsD9eJykZZZPHx8opJfTRkpYa4tZeAKcQ2jRYiuUZUyfDgxZ5QCcfp9TGy",
  "key36": "jn2inpb5Qgne8XrCdXRTv53sX7x1YpSbzgSJM4bJVCaYDHffQJsu9EVwRtUjvzieYyr2Mw7bgF3LHB6o46hKBG4",
  "key37": "kXU3JGNn4u7WjBQwwVif8ZkKj6L4oRvUbHKWiueL6rTGhPurTx4gnZJ1vR6d1wKJ6BeZKnSNcLAH1wvXRsiCGuS",
  "key38": "4fJgjauRfjZuc78pLjANggfENfATenMksGDRije3CNumkYP62mpnnFC11sYKxtqzJZQiDiufFs5E32dm4oRKB18Y",
  "key39": "2ePZh3irQYw6npKFkAYbvB3b5e9DiE7YKNTvy5kapqdoqZdbvUHjg5dULRa4zfVjEn2dV7ku3kqZnoJa9oPS1EUG",
  "key40": "2tLLBzZs7mwfV85jmWy57TnXA2i4gjVhe6bnvjKV7XoRdWbWx3uVomCdWvNaSeqvMFijSdJxeQhGeFVxNk96wbxP"
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
