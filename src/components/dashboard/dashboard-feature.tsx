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
    "2PwatqTAdmvLgZfNABeWeKNg8y3xspDhnXykATwp9siZczCcadSZFcAx1JVtFmdpAhbLMbKKJbcCcWGnoVcpuPr9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bqphuph3t8pXMPXgNsbFDEx5rAw4zjXgVqpsQK9rb2TtTemuiMHNQGXugea6L1DQsx5tMvqGK52uu4LE1HqvSn3",
  "key1": "2ZquVedePsTsei4mVws5hrNmZneugcvH7KiXowH1q6AYVBfCqfgo88EEueN8S131PNHJUCWKPMoV9btoVoW3PQQX",
  "key2": "5cSAVrmQpxT81KyRLMwDDha6eMcfxniw8LxkENZ9y74VAEKHqa3MgXEwLfXR1s6r8oYUsjWL45M9A5vXX881cdp",
  "key3": "haX6KXGeZ27d8DrZ1mZYQP3KoyCfafsCAMjNsBNkHFru9ujREZbrvxLwVFcFPJqa6x71s9BAdeVReTJkGaNve7P",
  "key4": "2VvV9gT44rWWudsTPje9L17GdVYcdadsBoZJxoUBimbcZNfVHeM9RQRjEedm7BnGYr88YqnUkty9vS1SBRNJaKwr",
  "key5": "5k2ZRDWLcxyjg97hZZ5toFcHBrBRk4KfhPDpVW5yWnwHYSeXh9cWgE6CnUA7uSuKBiZE5yocgtwpxHrjynvfSaJg",
  "key6": "2UD7h63izvwUdVdpBV41HtAoZ8YEUztPHBx2z8PdooBuacq8fEVzFBduP5kKQSYd1yE7SJFP6osRqWPB4U6hM6Gu",
  "key7": "2DG8qBAEykk1Yk73BQqYMEN7yceEWsPc2WhcPyeiUfEfcffSZoL3yoNSCBUaWb9EsdaGKB5bSeE7UAAxcLcqcsxv",
  "key8": "4tFV1eZKjasScJ8Q1podNmPeJ8iDxrHUhnkcBw7LAhojHH6hA2ZD5fJVMNodHXKvry8W2xahq3aQhsnRbdH4xKUc",
  "key9": "3QYmf9AxHWsmC5XXonZWYmzKsbz8SukULJSN3Rbc9AmKU12ZQrEa3con5kDyFLUPbcVoPnAFeqpCVcPt4BaMW3WC",
  "key10": "5ckjxJpPDcvZyrKvrjsJ34Euh3PRLQUuD47RJSKNxv226ScEjvhAVX1bc9LdBAc5ZLb2jHm5631gV9jGegoyiCGh",
  "key11": "27jdfhXdgoP6QT7duikE1z5bLJBneoJgBkWUjdFbnQXJ3xeBqEeArGkh2XGkWSehRvGsT81DL6qRbK2pNV5ZwFCc",
  "key12": "2JYFp4dpTqWwxgChxhdXnAF1jhncfTPJBTp9sK13qmxxxJkskTjChcxSHhxv5s5fzJj7DcHW4jksTmyNVhEoLhaB",
  "key13": "pcadzRVUa6KB4jvbQkY7VDB9UAJA3E7GjQFFqaqUDoSJp98Mf9mvDkCNSLWcenkmHum5Pf3HGPTEYo9KNkoXWnm",
  "key14": "fZHf4WJzWv4EFpXJvwhWr8d6gRoqmHxmp1Qn9FWBMkvvVJt4oVfyWCV9FEh6yM8U7E9CrFsGy5XY48FAUmekbwB",
  "key15": "9AM7ttnTdZp1U8jMvQZPJMgfKf31LaChvm7rauEMu8Xndxjaphb9vcVGN3gKPzQfG5sKCU1oBAFNMzzvKREuV8a",
  "key16": "zLMQYRRnxvKDimnnST7bHonzrNjivznKdZRZnB1nDaER1GR7CkFwMicy3i4F1S3oXmDkhyzaVnxA1Z8DrN9qwYu",
  "key17": "3KMActCeqoTS7NgrrDz7WuxJPHgWKeTAZKvXhVqy4LGNvqNjgw1u4ZTnxczym5CNQyBMnfrb3CzvcBUaQAie2crc",
  "key18": "3ka4zCTNVRYLu3QmMXQEjstkwKwWWoTEhiavXph5fKnefucyPX2LTTJLB1GdqDHiXN2ujN8QrxBtWKvbY2zZdXBJ",
  "key19": "5wd8QDFUCmDna7wbDPzSX29ZhLhkdXsjRQuYRP1pqvcNiYj9wHmM71D7K3pwjd5ivZqq2dVinkPmEUNHvir2QCtu",
  "key20": "3nFWcYZ5VtDtHeWmCvLE6AdR2edaH17zv6aM1FvfEZuZexHcug815ggaHy8yGqohqyqhkX4LjxEcFgoRcSuVkim4",
  "key21": "41gUCwAqWRh2B1dDScSZSRt1ufUBn5oFhy9NoNW3CFWLU5cLxYTunNiNZPzXs3VM93UCTKDta9DYbZnJtc72fc5W",
  "key22": "3FGqW4Y9P5VHzG4NP66h4Yqm4t7ncsd7qw84yep8bocGq49KZdAHyXa759QkR1RjiNXy6av2psWmBav9iNJUMwE",
  "key23": "21EnbCZtyuGXn2qsAtAnHkhdg3GUKkpbnoZaVLsyLQJb9oZdQ5zb7S8iB8rrKChS41Sum3E1Cmt8XovHEgQoP1cb",
  "key24": "9YpEvuQJVNxSUGZGaVS13U2QvHo82CY5wMtS1cLCjcBGiEuJaMD362Fr3jFavxaiDyTj7riUaU7g2TmwRrb7NHk",
  "key25": "3Jae5fFekgefh1uLTTHE4qXPLkhUjBjX7uJdnAFwU2ci9kU9BTsANKEco7UmBeXMSiiUG8sJU3EVDQRBANd5Pqto",
  "key26": "iLhPSuGxtZsqPkFVRqoyx6JvNCZPdvdQkkVgRi7FYC1nPqTcAS1fz6pFKujR7aFQCVfjFahoyAa1QnGwNRPP7Cr",
  "key27": "5J6HPjCVqx6ZGs97dMduSPTQc3HXm7cMsysheoK5GTn2yy2co4qjJFmWfcGpZWtFLB7GkFG1vVL7UE9oK9QNw519",
  "key28": "33yLeaLhvMtt8SdUh981mDEvNxDZ7NjVQgrdu4sch8GWjkuTwVya32dDfLdXLXrqufcvjgy8PQsukDN3pAHu5WuV",
  "key29": "2oUcnKPg9X2HG3AwqifiJ6JrJm54U9bAAZokPF4a2M8twJQQBhZWBWUXSfvuhW86kaGQu3VCMx2VeVx5WXTa5PCU",
  "key30": "53tiJFqq8PUsRkuHJUw5SD4G7tHzrQ1Znew3sD6XXBCzEHRpYMYg3pyEopwpZwAp6Q2rywERJ9bwLMdJdr6oVG9N",
  "key31": "2f411CnqpHLi1a4eJLCQ17toaCmNjh88pKKPL9Xqgxcsp4KmUPHWa5h1F3BFcK9e79PgtmQvkXh3Z7Y6EDRasfhg",
  "key32": "2pqf37idDorUm8WQCN8bu63spN7gJCgwyJef95pQCaNWg9rFSMfdTbpeVP2eeYC1afx7ToMJYcKip3jXKCXFouvX",
  "key33": "63BZLJ9YpxiEWL1U7PXbTDcBtze7vvv46bqSSz3R4vaLDTa9fP5fMvncvkaVwh2HLALLLPoJLnddAvD2erdWjQ15",
  "key34": "5rRckqabUmXREnKYFpyfUxS6QhxqZ3juK2teAF2XWQ8k4z5PoMevTYeuJwiU6ZXxkMwr8Ws67SX7TEfjWcq2SL51"
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
