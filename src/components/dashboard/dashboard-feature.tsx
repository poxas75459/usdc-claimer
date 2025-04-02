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
    "2HPzb4RHRCyGPwUJrLH3TC2zuVxTmmwNGGi2K9URuHbAvHthR7jMcE9dLTaHgPaCuZPe2ERuTeWc3uTXH1RLcfJA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "267mCL8wZUtMMvp63QYMFXqUpZipddoz29E8JsUFsCL685JBv2jjUQLnrSERTWQjvD325RhDKSE3U1AiP17hq96a",
  "key1": "2Ed4tDEbbt5iCwxcAgE7nd3YCsmiBbQUveeS3iJ22FLpYfijQ789jTC118LMJr6tL2QuzqtFvd6XPx5TJSwSYshV",
  "key2": "sJ1Ddo5rWmH2nQpf5ZPjrbWfi9pF3ab1Q8qbq9MGw5nAQVgrd5HaFGZkR8gUMkUPeHeJzXbhgY3wF64fS3LHGMb",
  "key3": "zMpCdyHqCAratd2cH6SwRNyND6xjbSj1oiuU9soTQaNSTGkYyrUbxJRCV7sbq5Aiy85c5wphWNcK9w6APJNSm1k",
  "key4": "4YfDEZBtexszP5B9QQcTyghn2aVutnCmsWPR6jjvNJb4FtYTerHkPUTfwJJfQgLvuhyyf7BLCi7oRS4kkQrB1G4D",
  "key5": "iKUofPK2d8rTcr3AgnBT7PamdCb6FmWPYNuEhFpKTwZVBTRkmtRdJRBJQw1z65ch2UPwMRhetZYskfwLHqHWne6",
  "key6": "6eGeUW5i6Z5YvMsiwvirRkzvz8Ump4gJrB6xySbskt5f9reCg5SNFRpMs8ApybwRVQc5GvE7BXyLVD4GkbE18N4",
  "key7": "5C27u2CGfzqCzJLfJDh99oCKWfLq9QaajDCATLy9xWzEjVf64kGV1wJr1i4BeafG47zLpr4ZiV24bPDSrRP6bovQ",
  "key8": "4o7LYuzaVyw2HyniCP8E1hzy855dKzqDZndfwgU1gqZXgME8K64a2SSqs8mH6oVct3NiV2ES7Y4ei3QcVu3oqgcs",
  "key9": "VkZPiFoYcNmb1wj7y6Wih3PWfPYJxJ7cA6T3tWFM5egDQUBWmcCQLs4Qsw8qv2VQyoSSDEBPeFmwdvozb1kKKfj",
  "key10": "2t2UPYSqZJawJZSAsqTt7gsgiWthi51RqFRRG9wZVzo2QruA8XULbf7qES7WqK7B3C5nRFNbSFosuKhsHxxXgxM3",
  "key11": "2yD6TxKKUiDiW64vz4yjMcmN3KJERWmfdAbXx8jMTznvLr7oUszhHZUb6fXdWVGgzcA6jDJ1LLFx9pHuhiHtspdv",
  "key12": "2vV4BU8ax7UMdt9kSMj4U1TkNFGiFuiLwvRuAfew483yeutRHPXLSPw33qcE2DJA795Kb6EVmoMafdwkPBwJ3hzU",
  "key13": "667N9MqcRqCdvGtPLvBgktgiEgyP2VwXZLCKaMsmk2HSfAyjLLeBeKZxAh1jbAw49zVr1t9hKhvZ5VYnkEWiXE2K",
  "key14": "4MEQQhQumR5XXsx8n15mGhmGXc56bGUgxd5qpGnvZB3qnmrPLvwJQwx8RfidoTNKPS1qbkC5mEPtCGeBshuNTMyK",
  "key15": "2FFjSFTwbDhvKWHRwhm5UNvynXPeFyLdkVNsELq4pNMpvRVUeYFLm23rSZ3jdB4t7jypSUkFeABkLhhfJ1P9LaZE",
  "key16": "2Poaziu5SzZGA3NHM8wcYu14ahuxSqcZ3RrDMegT1YWgB5uEYpF3vZUs1QCADqTWG6ii5cLkQFSYPc99nnTwhkoq",
  "key17": "4SkhhY3i3PCWmyLFaoGaBmzBREDwxCJp8McamjcoaUCPPqEm4iZ4kfsZE2WRUVoRKhCUF6qPjs3L73pWB8XZv7d",
  "key18": "45keTLwptX55WyKYFGWrQuXnEyJo4YsvPchtdnnu3JUsSDhQu3AMLuCxKJi6ucTDi76Y7PQSShkG4SCM4ajWDEa",
  "key19": "4WzW5ugCt1xW1ExWiozL5kv2iDkkazJbStRZHWcGvCGrpaSwWnSo3U18RojVEsV6vCDXvNhmrxdif8xxAxv1qZfF",
  "key20": "3gaNqK9PVrvTaCFcT9ZkexyDFXfp411e3yiW143GFyppPJsxodPm69MEgDkFoUwEZabxStYnehAXi46rAiPvhTXb",
  "key21": "4LGuhjNnf1ytMaHe7GuJvvuZ7pG9VmQWd67qEWsSMGE2uAUiJa8TfYgt4XLbcKSLBQfhD5Vhpv9jZ4iCcddeQrW8",
  "key22": "5W8QSQvmkjR8PNAnYuZ2giWGMCKj33BdfmGU24Q9tC5HAEtpyK7H51RBaWihwje4VnBtqkyM6SkNjvodDEsH9oho",
  "key23": "3y2ghnBU3Wmcf2jLpmPT8f16LLHLLxwQ7xZS9t9deJdNUamk1yHJxw3APHjXJxJExmT3eL4Vn4KRQrBievBmeTe9",
  "key24": "2cwBWc18h4uhpRBbQQYcVdeF6LqiGiZekXDfFaCTJLDM6VPEnaCXwSSq93yghHXRe26dhHsZ1tcHv29DFSMBLqtt",
  "key25": "3HDn8RSwKue9wsWWW9VTfwRHxwAF98xR5zNAkc7CsoZxzAPyTDYA6tu1CXoCnWXBLw8uLiZdqowswfboagvL2NgK",
  "key26": "6nJc2wTqyQndozs9aRYbqd8CLYHeknUeruxJuzKdthcsqXW3AhiVfiMy5gVHni5EfX2KFRSoGLts1NirB452XWY",
  "key27": "2shZgrG5hfN1Ghj1zdzKibi7Q6TWPVFDPFVeenTDKQpebrKzkkKstBMzMob3cSn6aBNvjjsq35w5doHfokh2jQi7",
  "key28": "5f3skdULdSCxG3LrQ5KeuVavvnckge8MJCt2EGArDxd1PxJYUgmQhC32saB617p1VLmHtAEoc7Xq7mzqsbfwiRbd",
  "key29": "47F7rZorPAB5H5wdxLCvgf9hq5ao7sWCmyjzsbPadrmiwHkCtLjDN17p3c54YdhTH1qytTzPqov8Q2SVki2NrUr7",
  "key30": "FoQRVJ5ecUYHCdhzMJHMPeKsfz39Cx8HXXTEYteP67e5MU4LbyTnuybuDSn6SoiVYdGx3EbxBCaVystb8gdWB6V",
  "key31": "3EPbUkDcoLFwdg7EVTRM8yiwFZ9AmtqhzYhHSa43v2mVpeDhCZ7keyTxcrV6XEF47hyfanApntvgjFaNSxD2AZyG",
  "key32": "4zuVtTv7X9zJXaBHDq6EbocmKFNxqkrPznrdpUCFcVrQ81rRNdB6tTb33ko9PnCuayGbyyYEQfuQNCaZKNoLbcQm",
  "key33": "5R4k3beWmvYC8uKCiwQuuEe8R3GNuisAqsAaMGADHBumMeNF7eaE8VDH8LWjNsYMJPeC8wJ7Q3sCheDtZ1LjiBwD",
  "key34": "iWQ5HeuFtGsTGjxCr9wXhYy5sydt7xrFBpmeQVeMef1Jmf81qnXDzCmTFomfRuYRtGXMtdSUVNDTk1zgD9nh9WD",
  "key35": "3ypbV7TdQEzKjfHnVyLyTUGyc4dFia89krrHt6GEB3M1f1MqforKyCptotYZ6uRzQiyqwZnizvJgwsg5eAjKMo6p"
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
