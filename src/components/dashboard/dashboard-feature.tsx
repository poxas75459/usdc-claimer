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
    "2JdABZgYQZQAuQA6zPBKmvnYEhPssuWZJQm6mVwJhU4S7rgLzqpFg4AmN2S7aEqmaJrLncN3XjYjxMXEwYnebMnf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R5mafksYRDYF4jRjBRMvjMGcKSJdFsA7YbWqtNKDTsTvPmEPqd7KpJ9s6ipa89W1G6goU5drm3it6crETY22mew",
  "key1": "4XhSgKtxvbGYkcSCB6SnMtMMeQxpj7R9ro2UpDuL67b2UZrjxNGgwZjHokBHALBagFKMjkn7ycvXXiW8ptf6S5rE",
  "key2": "5aeWChF2ha7TQ5hpZRhMBoWJ5qZiF1ozAgxv5buSftLp4EPczq7zaUyn29tYRvNQNY54NAUS33Eyejyv9tr5hb7p",
  "key3": "3Y7c9KTypuR5r2yjU9reu6qAcivzxhdSuhscpM9QgEGN3bWHXcccgnBEEan5oTuKxjJL4Y1txcQJabsQvSrtyWgb",
  "key4": "32G4Grs8vyF559Adyiqpafx34vXHj4Ak3RXU21yG5ACBo36F3azFExp8umn4yvjdJMHAjrLJYnh74pLaUfKJKcM4",
  "key5": "4VoH1YdzcHWFf9YKKdKmwfjtTeQZ1KxWq5eRLJsnoXMB4KWEB1RhrdjoJ8Drkp2ti3Ji2mKfLEXG9ArXdxHjkb4f",
  "key6": "43uWuBA7eaFJtrD5bvTv3UrYVyJFn14DMn1FctVekkyCvkqH8zVUjY5t9H7s6VJM2ARif2G5KTEKuwPZ8wfUiE5m",
  "key7": "hp44rkJMF92CHLUDA6ESBYeWbmUHQ7UuLwEnc2BAaD7CdKrCGv7r4YDjfeKYMazPc9rgQnvvnDcNaGTwTYWBJRG",
  "key8": "2xNeN4HbRxztujh7BQWLJDgrVjALih2PT3EuTxPHm6fH9mZGjBU7tchhpiVG1qns3ADnufQoDMY8i3Tno4QSjX5U",
  "key9": "3pMLNPBuQbuworH1SoqsUgTMuFGdupA8mKib8e5zEY57AAzY1AKY8ynjwTggnrU5YaKPC2vBuDbEgySW82eg55Aj",
  "key10": "f2Pu6z7uwDGfLZkELG76ddTgotaNjA5ybWzTie5bG6td2n7skrN4Ux6nfmiWwWDSVmgUJgXAb7g3KkSXUd2hicm",
  "key11": "3ou5LaByUy46seZFTBn9dLKBA5nRFdaaiwpbMycyPt8LgErgKYAwKxAX7r8fjeV8EQEMM2fUUYPXfCPkT76DJ8YL",
  "key12": "4KUEPk2mBFSXuLomzX9T9EXowjfrEffjKmJnZmqz7BAC2Rxd43C4BKTyrhJJgxkd29p5JjjnhhwveXqHkpaaJkoA",
  "key13": "aYDhDVf1px5MPAL27qSShFtjA41ZrhvNFHP22AqnsAVt2QGsqHAMAUABVcjQcYhJEE9jARkMXEzYQjcjp6edrCx",
  "key14": "Eq334EQ3Siqc2LWtvsZVmCkLYgEkXxYovVjgDvBgg15f5DJVPzNzvQANvrCtsdD2ukugUFVtjHzezZma2UCnGwk",
  "key15": "KGCxzJCD7YECqF4uNm1wmZmkZoy3Bacnb4dynDxTPfEH6u7FvavZq3gg31eZL3q5BCFRTXMBZ78ivd7KQuRn3KT",
  "key16": "2zpx2xsqjncnREompBqC4gHvBxkva3CfEqPAoq28QsEZnjU7Tuxf68NGbS2fF96MnN1j64NP7Z6hcUV3C2JB6JAh",
  "key17": "51ubcVD585EDjH2b6yYdfnvv1umjqcKj4wLjP8Benq2geemB6iGVXiFGYNTXp1Y8j4JA3LLXc2znFhc2ZixhS6Bi",
  "key18": "3NqDkkvxcnNwRsTWHGMyLj9qts93xALjZjbh7hY6BmVzygbD1ejdPS3j5bnf1JBR9w4gvprWMgBTMejfUfYD6UcB",
  "key19": "5DFg6gNw7CzVQ1G19U8zjRD7b73Dj7ZAazPxJfBN98gn28pBwcrAWaRXdErB1HVmnrkfQKpQZphrcj5VqpExZLnR",
  "key20": "2yL6QwS7yKKSKX5FGm6PubfPBnSBvGjGpaHa4ifgjg5VszYrGooxgf4hiS5V8kmP1LficyNt44G5f9PGeY9uUr7d",
  "key21": "btbCoGSqHrtu6eY8UHsejLDJo4eVH243Ad1xYD9NUZ7dPwbcX9z1jPo2PypzqqXFtZgKYzUeQZ8fiSszdVrisR5",
  "key22": "3t2ia2Rxnho1JjooUqG6GLijAvgZH3DZByDhkQUHrEAiHPn3eQTkZ3YXLSEJWZAHhf3P8uWWzMXDpGgCFebf3qTv",
  "key23": "2NYjQK4W5BtDMganiBf3yJh4j9DSpYtvcM3dvnEXz1mGkDEtVH6MsuYVG4HDKYYpzScN431r35CTpUEEpDbfdCZr",
  "key24": "3HJgmMUybFgPp47tsoqinudx47Zxyd991Th6v4z7SfvRiy7URUqDBdb9m56FzVGKkzQDBcdVnsSqQmYph4gF3e68",
  "key25": "36UvDYMgx8H9F3SoSTnZP4wucuKB4qSMJCoVZ1AS7KYey4JWB5L4H5mrWk3yVBwvCJkkj7eRfn2Xt89WrEbxGPyL",
  "key26": "2gYJKEmd7ztpTeQFxmAuqA386wZ7hJCJouq48KL1te19duorVc2o7K7goTbRu8nWtUSazUdmf9ZyZjQviZ4vwN52",
  "key27": "3GN1cc7xTCR2UDEwP93iDE4RfSGMWhD6dsNbyRnxX61drRBVH8iBvLtbbyHdu3ZHPBwoiPUdJfYVWFUhVqvekQn2",
  "key28": "4ViV8SX6tCy3773sM1gHGMcEbYYDcrLbuampec38FjRayLg2vARWBUHcmywXCYvvLUYyPDtF5Ke7vwe3nEjy6Hpp",
  "key29": "3Z6rvJ5p43T9fHCsCi6i21MzWo9q6rhHdQR6CQ8x5o9KM4NDgBZhK5B59pZ5yZadvhfbHRQYERmVuwEDErJEavP1",
  "key30": "581UbCRAMGzFPJj1rmmBHtuB2Z6gRLjtceX1L1eh196n9xohVQVxySti1DvSLCu8bPBALUyAMNFRzWnuyD5FDWed",
  "key31": "3uxBvbC9mo1GnnrBMtd2dtjLbQxp38uDdqrx95RbwfQiotmB7XQDzCBJH4EaLdkGNz2x9RCKxSqJcAacXSFyXj3G",
  "key32": "3V47SUsngiDzm6oiNFJVLAJjNERf3r4LiCvtpvCPhGj7V5ss84wsHpa53RdVXZxkmGVuaCeUkvCqjEHUCPm7JWHk",
  "key33": "4x3D8vSfaipiXXRhKGW9PBk3SorNmWhYYJoHvC3TcWh6EvLKbUb5ab8uar24MY6ukd91w2Zhtgvr8MJZ9qDwR6nn",
  "key34": "5DDjzPu6V1AHYQWteNxKaBzoZ9RtneXhTYWaUNo3iV1wBdvVEqdtNcqfBt2u3DjYUPEXxo9j92BmiFfJ7wCAsoyu",
  "key35": "57u9MZyEdH5X9cp7XexDDuLqpuUEQoAWecgswL7tpRFrWjGDNkxZRLfpEq5m65g5LsQcAir378weurdAAmNC9dF6",
  "key36": "3Emfv3s3vmRgB7N8RJe4214F2uXms5yg6TwQMqStHWaj7HqPGxsb4WQxmGFwGSXFVQZ6RZJyweQq81YbmWb43449",
  "key37": "4pgBERf6DuyhEJSb3Go4CTwwo2JHXTq6erbWd4TUXRgmYBZmPCjizfdtKB2QN6WwEWC8F1auLi1A8VjBN9F7RF8a",
  "key38": "3nW5cKfTuxKhLJJoZ1dNW57CAS4pDfUyzpmkcSQbV4gH62RtwFU41TJCmvHkcSEmty7Y2q7dZZStpz1nx3X4hwdR",
  "key39": "2DPdeeyU7gt2Po9QtdyfTshC9FFe3nFvLKvRQySnYvcSU2v1k9Th8xz2GYamut1bCAs5jFxZrnA3eXnv9vsb1oP5",
  "key40": "2fUyeHzPrqcCsXXXemGQJ96qRfvFYK26yQZiD8EernL5Q6WuzSeEoJ9KwYL64rmqNu6q9evP8nBfcLbvSfPBMn3S",
  "key41": "5HgQRzmZggyBuRzVqX8AS88zsxZde9KcQgq4XiiBSUVC5UWsWQQSSrj2TrrhNpfce7NCzoW7j314DkhJj651MniT",
  "key42": "3kRHK7ic1163kShwcjXXieJyutkhWzYgxvqXAYb8xmZrVc4NSA6qLecAoZMCFr5CjZKjLUPL25TPfbmn2kRw6Hvj",
  "key43": "4KwFDuuEqBM3SNiep6rXupdZtg28z4ZZnz92CWaDMDDc7QWVF1iJd4DMSTt6GioKUfhkdBHQEnEmXsiMQQq9WcKE",
  "key44": "6gkwHUrFgntRACvAafvDG3J1gCUfNizpuJBZofjLVaVupmFsDHTkrkUZJgvL3aW33HNbJsWoGUdu9WsxuCZXr45",
  "key45": "5CGYpFjgmeicEY5sTYLaru6AX45S8fXW3fJKL4LGJEzRTDDvgdJqceE23eQNEDCKwHhCjwC5sR99PMVNfBH7Mm2D",
  "key46": "2caz99p4RKw9KnGVSPxdPSpuWQj2k9wsvkvHGRkeHcxRM7DNU7MernRq7LBBnyrnVaJMcEv3XxNEnJhGPixHR6jr"
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
