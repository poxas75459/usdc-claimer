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
    "3AgnQ5UBenUjUsGdHmmLCTo3emP9N4HazkqmsYMyXTS4myoZWShWDKR1bi9TEQimqXZwXSLLxqYEU5yJrQBLVPz7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4igLQco1zZ8BeRXFKwsAEkPHrQnhZBNtFUhxpGFGps4VnUTTJFsqSZVAY6EdQPDK3A6Q7zAuXsbHvtVgpb6xhVun",
  "key1": "3BJvwYon3MDYFpv2hmtBqhUp2GS93GFVbZeRP1cciaw3tmE37umnE1J9BPnYBVtpBaejjieXgMb9P574eQHUu8P",
  "key2": "2YAxA9EZRF1fsXe6t1bGanxjPtugEZeCodc27MD6xKL7XhTFBkGSj5hQRpcZZHUcUdCERvWosvKwK6CRB1y7MnMa",
  "key3": "25sSTAJ2x944dK4P32snbkb7h3byzmqDwdx1AFm4FcTa8XesvW7t71HCc3Td8cWPicAbBVMTav7KfewBzouRFwLj",
  "key4": "5nVjgbjpGvTmLWK1XaRvC1hmR4JRLSrwiBKPAkH6hpYtJg4GDyxAMv3GX2RwGripDyrvPu7xG2spS2AHZeqL4QYT",
  "key5": "hdEpqb4uBCmGA7Z1LH9BUMnvNi47LgQKmoMpbdTEqztvn9X2bAYrR8PqjkP8dVT4mRfcNWFbg1bbPgoiDRMNpBr",
  "key6": "34ZhdUTt1K6rntyYVbxLjCKoLiuUdjj7C1HpcFLXXz4KNTTqJAbYh8BF91v92D97655ntzRqnfFW9Ee6aUULqJMn",
  "key7": "4KkqdsdUfGihu9b22TfghTXCWfB4qVUaepoQRMtHQ3AzCcMQmuPa9ryK44LbBER8usnDCjhxMtKpskSArdN4ugzJ",
  "key8": "5BX5ricVNXhU1MFKjdjHd3hVvcZvWEN4M49D6SaZ82kL8ZSSX9T8vH16BwENxc6sxYJWWQuYNEdsMXsxPra59vVL",
  "key9": "4FEK4dPiCPGzvWkxcFegGzADcgvu6tVSNTPWEE1VoWPjN8Eh11R5eLQahgiMdwGYmUUhx1if2QWWvux22JGTKfZ8",
  "key10": "3NHZKUbGYk9ZABtxN327mhYAws5F1fSs16KPBM2GkPn85m4UvBevv3dbt75cBkciLreex9zsQt7MP18p6BC6YAuU",
  "key11": "NtwdohdE4PCFFzr6tkJHgjWXXvRXJfLn5HSS654SiLtPcKspe7LWxn2ErP4947S6N7koQLoXrGucKVzJGMbXjNn",
  "key12": "3VDE9cktbka3Kezcpe1JRmpRnZpfm6czqUTXVFT4aVSMnK1CtRbqsemhTXmayn7EkVA2Y3Su9i8a8fK48fZDc1CH",
  "key13": "66PprbpRdvhi9pRzusV8A89d3qz5EmHuB4L98fKvE9QmsJULf5QJneENTzjvmj2bouCSRXKLP2nYFsUrLnWE2MGZ",
  "key14": "4EqaGC6Q1LwpXshHvbCfZZhasf6hGgh2wp2qJBUSNq7DCEHmL65JQyJL9HLLbm9UFXfQDEmQSicgM3GvGhoBrGYC",
  "key15": "2ZJpd4HMjpT6ui9xgNvJmfJzhJqBJr4xeQ2zp2bGMu9EtUM8rJ7LmHns6AZ8gDVB1fva1FgGuyFZfWhMsJh5Mz1C",
  "key16": "5Wt5PFV2KTKMWb6rZ6kKcF68Txs383ii4KFWwJYJMHgrgwtJ6cC4ZoiKLQCbbqiXQSAsf1aEm5MtQB3XryTawy6Q",
  "key17": "5Z7DMSTLBabcmbwsRnLe3dBhbhLdd9oeKQDSWpt4WdrRkoAkWrRztCpYTAqSyJPqqhzBuwJVFSRiVLp1j4oSHe4c",
  "key18": "4hPtg3nZ2A1e87PfgmNFq7Fi4Cy1MsSFZneNSczyzy4ehY2hRPdiu1EmMHi7m9SW9MoZL8oaKAGwNXPX2ZbXgNMA",
  "key19": "BVqH2yoWjAKpMGYDQWnLDpBhPbWCigBcK7mcqPnxRGRV5Pnb6ytefmFStTokDG7uy69d3BKnVQc52S6AvgNwKvH",
  "key20": "cMXq5STYQJ5GXBGn8Gn7TdEhaRtCZzsrWkSyJjnWZ3gYEbrGV3FuGpjACcwJPFape2wmjPN8bqQMPpU1n9wTnhH",
  "key21": "vJLY148TF7mNkWpcqvofhpgW4jqeXsRuNyqR8bCDMyGtDKQrytdYsJ8K78ym4edjVrqfY7KfL1LFPMBTQd9pEYf",
  "key22": "55cj224zerr4KtwMYUnT94bZYaDR9RqCwmawHGZ7MHVPaGdBij7snyebPF564ZB3tkusMfbKNU9Awuf6QnArzMJf",
  "key23": "qFhxMNs5Ti4ntMAZADXPcnujVdY7FAXkbjPymQgQ7zrFWfRC1gnVFjqmXNA8fP27vzANp9QiNfB6MJnHak3L8tk",
  "key24": "3TTSht3jYrjQPBwQp1QfZ55ch5cMdN83iGLQoh9sfiPoBcVoVC8KzM9X59LKvL91zyJkJceUzFUb2GTLMRHc7yjT",
  "key25": "3FHMP3Vf539ZQhFqLWAEEzFmqDcXzX4G3UT35xasn549oJqFwbkzgWY6joXGkY989sgvGZ9UCm9S26bFGWDvrBAG",
  "key26": "3vQNxqje8w4VQNMYapPEpAQj6muuhaUr8TRKZnUP3atwNUo5rrhyH7vnitD1sahBp7EJZJRHWoNWHQ69gxgAh5Z1",
  "key27": "4PbBWwLLa43gjFDuMStL5v8ZgafpRMZmhGHsLAEnK1VDum2p5EczwzSDD2dtm3fEcmefnBAqsH1F6AoAoTccPnPY",
  "key28": "3uSJPtsuLrzabBPZN45jAefD9bR6jtxkWLWGcfUjh3j5ZcsNEjy34T7kQAh7txzsNcUasahscTRLPDUtGzLVT2Ux",
  "key29": "4ZS5mvBrunhaeHGRnm5s6ATArs1mLVc6UvkvPMjDQtSA8NDjaFA8bTM3qKbD2W3swrqyJwnsyrothFWFMaiKgVa",
  "key30": "33v1UegASP5RUN8UJXgAiMcgT3qYWYrdkF4n3UpPgwigQusNYtGDTeBrGAxAyyP3jAEgwC1xG9stJEXnY5FVSfhk",
  "key31": "3DQdUTnhmtLwxBFKxrthQmRMAMibng3H9cGL4ufvW4kb37endtynRbMVeMUMZshFb8MJtESUnVGS4qrnMnuWZDSg",
  "key32": "46KRB5QSddUztWZ4xJHZwoiedWdqY8VNkwz9zBj2vynRzFfZ4SBJifrXF5JX3U95KD9UaTDYuLhDKmB1bJZmQR8z",
  "key33": "2UfUTDs5QFjpr6N74Jfw75hdooNP8x7f8RyK5YZKVkuhDSHDL9gQYYfvu64Qoma42icNFdHquXGNEGh7J3TFAysS",
  "key34": "2zJYybyrD7hR2fQbfSzCzjeoaKFzHXn8S7EMo28rErfpSHsBD74YhajutoRTACBuKQuL6TrpNjJNq9x8rZNMmSbf",
  "key35": "4hmnycUxAxb9fyicmphnSyPTsk4q6hKAoxATxopcGwwGzNvAFj5B3LHW3Po1pJKdxXtsvhwfo5MghReBEzzLXRLH"
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
