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
    "3cBHYzS41HcwCWrk88J1yEXvPKqk5YiMCZ1Wozrb4yJz4PG1rUqFPrpmNu4eaonKtofXqHbdBHMpTyMyvrT7QWK3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MYLRUbVEBWysm3zuQZ1wkPvdFQVFHf2hxNgnBCbxbWfyqWYYzkvbhUvoPc9ZKbvmro4aDRZ6StwaUmPRCVMzNUN",
  "key1": "5L6my2NEPTEYUdiwMnHCZWo8KxkwerjjQ3vw2zNRzZW3ERLrwJhTzrniFfNbsqwebaXb7oNtPVisWSNJ32qJW7Nh",
  "key2": "2yHCpsVx25PFLDD3PS9eHZytZyV3byNdjcBTEeGRu1tQuoBmZreA4uzPumAQ4hfpvxdiwpKjvPropuqXnDYE3kDy",
  "key3": "3ifJFptuZ1RqBjqjuMsUHYu6DdTXBtYVdxo9MvXE6kDUvXmrYejA2tMgB6YLHKAEaHByn8idTkMphPC2XabxUiq9",
  "key4": "28HxqB4pFgPYG6xguYzjykgsEgDKC2nsE8ssJdpiDJxJ1F2pyG9Mpoeq4TjdYp6Zga73HMWXcBL4VPBcFrUrKTE3",
  "key5": "37X7JtgKiG5bvqcGMqVFkucFGTyYFL66wt96D9E47gpvXdUQ97nuJH35LLMSF3PmC9TrxFySgRax13UbdX3QoEzj",
  "key6": "5D3svcLbwknf2WUXxMrJ8e2yfXsbJzs5EMiEjFBUra6raVJ55aDH92BXtFbkDdfYRYgYti3SUYHRkhNjxvWuFZi9",
  "key7": "41n4Dm85GRvaZGnpKEAyGLgpEAKcpZRFihyyrYAtu1odDjiyeFtYgb6igJnJkLBFNEEJHhG6HDfYc9HuPp3wfJ9q",
  "key8": "2Srdi4qHopTRXForhvmjgH3nGPG4v4ApdotHD1pYKwfCpsnnvWiRFXGUvyXL73bxq55BoWU7aCtemqKerB9izbxj",
  "key9": "3Yaf223iAR95iY5sLCABod2TFccGZFNRrVFzdedgRmNayHmFUcEVSHKb6mXSuwdzwewqS3t24ov1bktukRUTeF44",
  "key10": "2YhWmHfYhvsa8AFhZbVXqtmHhmXPnYfynyBohgEDoMUQkeLnKfzquVph17jChULavh4F1Zzk2fUftn2ww1EMFzu4",
  "key11": "3ji4NSGqJi5y8Ycf8h9HwXZkmeSwtWArwK8kynZwbr7fzb2hTb7dAwhAjhxFifiVBnQ3DwWcvYx5dsGma2rBF8mD",
  "key12": "3PMtpLyVWPD1taRFP9ZwZVFWvrv8MWrrm5Exiz15hkhtXAcAmxCtqtbZrqfcvNJ2XEjBhQbhUxDRFgzgiDAhGuSv",
  "key13": "39EoGegtd2h1rZhXK8ewwdksSJa6ZABgENiioi9CE8DU4qs1uUq7FEexe5rsQ7K1995qpKJPsrxw7DCh7Gt5BLKQ",
  "key14": "5nBTiiDvdYD2uJGRBafoJ17PMwUr4ryUnmJm3yc3rWEBAzJeNSF778WDy53CgXmaFFzgK77zGXW4pT2BYTPhm6kh",
  "key15": "3CupRHBHkPvKydQASmKfwyntkvanxrr6DA6hVLEtrXsQqDBmegarnxqHyhWn36CL7goncx1a3PseDahhY1BmdtGE",
  "key16": "43Do6JXRNreT5azJ9eC6MMi6kax1djxEyoMQcddcWzpfJkvNmar6VbnJd8eqaJLZShk4HCDUfohC3P5rUHGR562m",
  "key17": "4ckoU6tvnbESXsyLpDtdHjrLPagb5Bf9uSQwKCdvPyB1rEjsVvynSkTWEvbsByZwiQ23fhJ8EzGe1QpmLgTpwaLM",
  "key18": "5uXSgrqMhR98YVoJ91nHEiAiefQ1HX8j4S5TH5et8SFZHVbKw5A1xeTjsd6bLDv9kzPEjNC9rjZViHPn2b2KggNh",
  "key19": "RhyNzZ5uJhUWcK7oJvswuza3CPT1uuDrnjiPqx4wPZbbTFTcRpyDBsgQ6sNL2zQJXNEc2ZNnue4gon4bAKAfB8x",
  "key20": "5AiYM5QBRXv1wWvtrcvayojWdNBzUhDPuxZLLrWaiV6EYXJVeA2DFWV869SoXtfYH7u3sPmnn3dWRANgVvremBte",
  "key21": "LmsnPqpoyHDwSqdPh3LKJSUerfqwat1XWiV1ZXhws7zczKy337nDKwvZwGB8yE3BtwGsknEGPv7qZQzoC6EuGug",
  "key22": "4TQaNJFzPum8TXunRjWUtWUgmxmhiH1EkCoeEuuJa5pzXBqTYDCPnqqs61bJhKPqfQ8oZe8eH3fn1se8wc3qLXF",
  "key23": "3BSeRyTiDRVh5jBXz4fAJJHPEiz3WbMBbz8zWH8RR27uC2AkyqVEP4MD8XzwACaSP3k9ss1UUr1NdmMS7xCPksZu",
  "key24": "4f9dmCtwzsiodjDL42jjFycCDDtFPeKnqYuHtZsxNx8zwfr9xquqYvnWXHJi6rqbWeUVeXqyMqhKjUDmG9KN5FVJ"
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
