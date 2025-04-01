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
    "44rnt4KGksokWe3xgmRghm8CjyHroYEcztXiDSwT77t7ujhsZbvwk4khzL4V5iWvYUD1vPUKzYzSxc5CNqREAvMY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z47qcLvkNhVEw5H2YiuhiYRoymqwnEsbZeoFDvps2BprfAakpqnRyHhhMYQZHjJwoi4GDPpGevxWXpyYF2woFc3",
  "key1": "3c9L5xaT7oKoftMuCLKPHeGX1DemcnHCBdMec94pjkr2SPeQ6Y8U6q6yfY3xa3SvdyR79qPFk43oLXu3nyfR63GU",
  "key2": "3fdX9jZxD9x9bx6WF5Ndt8T4e61dsbMNFkQ31CJigJgeesTnxi5c2u7eBzLR2463Hi1VswWGtKJL6LPDc8jxnZzo",
  "key3": "GSz4GVLCL6PsNAW5nWo1fCb49yy8USjQtvDxfWYndsiCpKQ6hRzfSxa5UmtSMUAgeB47imddsFSY9F7zy5HfgHn",
  "key4": "3XNKVYL8bSDvG1SewkepxvK4ZeGyEqj6b9DpzCZAJnvdj4oNGoKyv5hjH4oYsxJPeV1UNZvjbNXRiDXEhncCfPSd",
  "key5": "2tgJxgGArPFANCh7EPfM4TStBsd3MHyYjhN6Nz1qADqHJKJjKkqnGwtEY5pNCZnUNvH1eddkfZyf2v5cozhapBfN",
  "key6": "2ymUZYcF35kdNMLaNLi4SWso9oR6zayf37eoQTEajhWMgPifnHQ3VzQo9jBqKFDVvs2DxeWYtUJ42bCbKF8zLcWR",
  "key7": "2sTwcZK9vcHfvL9vMBinJTu7BQqHjssGRUhX7XcDTXx7s1wZnKSyw2DyFPSUy1taQS5dRiVYgDV3Eqr3vz8fhG8A",
  "key8": "2foHyYZiENaEAa4nrFBMD5u2NDGw7vnf8ZGQMzgXSwY8EqYaJPnFYCFciQ9kZB8GdwhCiiLJeonTezyqtn43DHru",
  "key9": "5YbmkkVyVhng3JfcszShhcf662Ecea4zaPF2iRtUF5Jzs1mjMpZ1AcELyPanhu9rfakHKBg39BuLtRkavUjsLrTB",
  "key10": "24mLiNKzjMMsuVdgbyBHmNNctbgyrf66uwTeZobFH8y588qQnmhiBQzeFwzVwCHH18AMXXGHL6cJvTytHa9xR4Xz",
  "key11": "3CcsviTR2148wKUXHC4whYhwNFd4k1k7aGPvq5LC5TZyzUxMKa6hUos1jWoNSY9TFVAUbZu68dph4mpszxcbB1zn",
  "key12": "5sZHmYxrx9HdXQinvRxUYySHNvvwnTz58ZgatPE65fWduewdKJzpxSeojU9mzmmU6U842axyZwBEidfqnghhXMKY",
  "key13": "2Mi4wbTCTvjjaz2WpLvzcgVgwxZhjmcKG78wz5dXV1VZWnaHgwQMgbKS1y36adWTBwyHYRwsyJxgNUAVtVA5EFQZ",
  "key14": "4wJJKjiG3XuD1bJaUA2ZYZyHvakoRLL71C3Dbep41H823s4hUTrCEd8i9Z3mQnHrGSXtdjPhgQFhqgbuFFStXtmz",
  "key15": "4dqvqADqVxb417sWjqaNncPw4zUc84Xr5yDHqMf8HSsQfP6AjCtYJspAzwwWUQg8THYVhLvTYHBVk3iRV6GRXDm3",
  "key16": "4RPaWNbygt8ibxwumLcAykUsMNowJ5DWE5Ls2FkitmntaWWZepTJww4gEZ8rWUQSbNF8F29Xm5XTdsACcaRzbbD1",
  "key17": "5NprsMqbUEyYAj6PuAAgyMGUZ1Va8P94mekYye9NuaRBRu5Rofe4eLnkdXBDC2X2AU9hojzhivaBi6mCjpb7wUZ6",
  "key18": "4hb76AFp9Aj2j8RmdSUjQbrMRLMG9MWxYZ8Cgxn2EXLCazqBTPRVa8defmzthkfj7L5mJMUP69sKEwmsTt3J6wkn",
  "key19": "4YrkktEef9inQYfhWrQvj9918N1ZhrTmhxGmi7ohK35xXEgkWtKJYXFZ3t2xTKzBAzaaW72sb43Yp4HrX58pLshv",
  "key20": "3eUPDF8oLZxFDY73brKHfMV46kL2v8LhJQFGK9JEneVPvoBZYQJEwxuKi19ACJhNQnqa8fyBqjC8a7zkVuJo7zdF",
  "key21": "4zicAzSWNnxGMNQ3vGmzkU2kGNTXCCURdDUnDWugKdEvRQu5hNY3hrBxmihkkSGfdA4Z9hDXrU61A2sr9QXY2Zwh",
  "key22": "4Qkzwb1RdaktM4wpZMiEumV5aus3tjGoKzo3CuJHkMAbNgXY7DtnT5VRThBAJeWgWDYWfMYabeZUhnyni7tjREua",
  "key23": "4maUXpbv2fSFSzUNJmC6fhjLdXPHESuuZFQD8nAZL2efNyHS9Eh2FHx6c4W4rNS9RVvTURWxUuVi32LqFJhwxLUC",
  "key24": "d1egVhv3KhS1nnympLhscyHFzDdzeorXMQZ7sMxVYV2JMjxdQkVwmGYZhxvuesY3FZeHATj2G2fJVEXR4sWcYxV",
  "key25": "5qBnMQYFR6ka6hNJHfbYPa1EpZEDMzUvdJe43D6suV9bQCXGJxiqAz4xdmpDumVRSwBK2JJZJisDgh5PgoMZZv1V",
  "key26": "46pWTr9BchyzbsBTJuimrgWCu12idHyqPExTLX57VkcMXbmwSbmiVyN45yxvf7zSa4ZPyeQTae6A1WAzZ6poCfQS",
  "key27": "obfvVoPa3wxQCNBvJZmdiKvZfr3oTbbXbT1yvEPr2KowBHtkteBn2oucx5yeQkBAYxSwa8jzMximd4EqhaACdxL",
  "key28": "3xqrFk34xWDV4Gj96sdpHGJUTpTZDFhu2AmR8mwWifsYncAzGvxLFMHYqgNKqP5Y4uD99mN32h6b7tj9Qbr5nkpS",
  "key29": "5xVKhGxfWesGEv4AAg8HyeYsURz239b8rgKwYKQJR9h828aKG6ME7cQxp4zTqAvbbpajtWRxaMwD2xi9onH1sDd4",
  "key30": "5NhKmr5MWC5yWUBWWKGpS6rQz53Q1NZxpunLmXBA8vuM143KwteQymhSFLgihWZe19M36ygeD9dzj9fpvtptgWzh",
  "key31": "3xdJWqvdozbXhC9boVZK47QdEtY1oSySPrGr77pZBc3Kn4pXbV6yzruupxZupmFaP8FCv9i1rLg3w1E4i1sA9Dsp",
  "key32": "2ffyA7vqJ48N9tyPzD6gfh6yRqQqAqcne2oHmskYwBTeKewZokq7bMsFR4EKNQBEN6Pr7U9B6xDAeRTtonCRudRf",
  "key33": "2LLtxmiyyc6crsfFrwAudeZjpCwBTAhjxZKyZ1HA1BpmgUwCLnXsGjuxJg4BR8fmU9idVM2S34T49DbcRMwHh5jx",
  "key34": "H71LctWC17gstCbRrZzKiDh4ay2RTWbxcYsNQjf4Mkd5FzEgvpRzumDhrVs5SNfcEs9JC4kDqkZdq8AxGrwLir1"
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
