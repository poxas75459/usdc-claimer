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
    "4DZ3bo6nX9svYzaNit7gTB44ZDGG9ChqLteJSp7Pti7jkc2aAmn8XJRWp6fLszFy1FN5zdT9geBQf7ZbA1WLsCQL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CukXnf6n6j1ESJUY6XvuA8uNtVetF8ED8wjzk5R32uM3mZ3h1FKDVjfkrdWBdk7KQbzrSyf8PZFovxuoMcgfUAa",
  "key1": "2VZKVSLk8DRJhRnBoJh1xVdS4Zz1LdrTJvgo8Z8wEqPsEfZBxaJarx6MqPc6VL7oXhERZopx1dXoLXNrSU39rQ8p",
  "key2": "2deRRruiP1AczTqPokoeZr1JJUZ9crABe7gYfVD1ZKLF1Xz5DARfS2cQ13zDT86Bu5ayw1r6JakyM6ADPsaA9rNA",
  "key3": "5RPabkd6sgrosfTj5vqmb3j3r1VqR5hiGsBoXnh6UJWBHyak8dtg1T9SXoFMMnV48DpK1qC7ximkaU5kTEL1fWKh",
  "key4": "EqrqtPjUWKSLQ87wqiBJ1DwPpJ5mjyf2BNzdyDWpDr8aAV97Z55s4ATb7KmVE6TszNqxcHNBk7hm7tjbwcKVoL4",
  "key5": "5q3SbRSNWMJemML1tjhYbJqEv9eWHUfcdm9cJzgw5qxkyn8s6uZo76sFyHkS48QTqEuanqJWssMp6oZK7KpVy3mN",
  "key6": "3TeuursNeydDfobUSnHqrdacydsWCcwGF5eVcri19Fonm2r43t4X6g4MKfneHjMDmXtQKZb4yQXmxSkF9sD3ieMw",
  "key7": "5RXA8MUXT9wwPHiDTpDQcYxsM1x1WWJZ4kRkM7vFHm4K6xJxe2L85iTBKhhQcsQBHa56nkEHab36DsDp3nZPBbH",
  "key8": "3Ktrfy5VCNF8aVMGwz7EVyzHPjLAsjapBnhmN8joPdz9gEqDj6iDx9uUqvtnCL3eAShhWanjRPzqvNGk3b4gvv8W",
  "key9": "5HjjnopZEHJ7jT8qCL8YsqB15Zst8A51JJw2ZB21BkbYqpw22QSask5n7zAogBQVE1HLyehySUFEhnNdQ5QCJrKN",
  "key10": "2MzNNQr9dg7bwTvxTAPMQ9fDQzi6EjXf3JAmAq56CEebswN1eVimNJbf2a9yb3A9RH7BHnzQ2udQBT27raDs8L82",
  "key11": "2BZToyUTcJRWKVBTPa9sGjmE2sba21HojCmubigPuLcREx2McFt9YnJgYrLSKSfyJ3eFpJ9b3kEvLfEYhaS5KE4f",
  "key12": "3AcqpgurLDgXZGH23M1nF7rC69gTWSHho6kST22z5MMF9QikGo4yhYq8QLKRGghDvNTQ9WCwiZezqyQP2oqqRtK4",
  "key13": "7Wh3BrP68axtGV3Hhbpgh4XdJpdRv6m9ZV1HKANYKdzyCrk6ANxqkpv3wkmigurZDftZ6ygs2WDyy6dCy4rxe6k",
  "key14": "5Yk4qbebZZYsyGV5cut23AcbHeqhcaCH5xFs3ESu857daNxsaECRB2HpRpjQQX1b64apmKjcrsryajnBUdGWzUQK",
  "key15": "4GwvbWbSdAXC83dbVA3vTj5VngL47Ap64vp9NFaDPzPHqei9YtrNXBNZ2LnXiGzsxoZsRJPzfgCXrmzURrU9j22Y",
  "key16": "3YQaNr9Eqd5rchz6apz57TcG72jRLhRsXqP4QTngcUErWccx5RgATxK3DkDNTFcfdUHiYj9C3kCFeUZZ6HmGYYKk",
  "key17": "4KMcyYmLnPCV4PBRZGSPsKXEkHGabSNETa9sEKZfA92hREN9gG8yYF2iXJy3R9oaeU8e5eU33LJPXe4nHJyUoTQ1",
  "key18": "2x6jDdqZRuNhU4bhRjqrcyXVrmHsNjEzzXmWBRnFBrre3MvKcrac7VnwbNmtBS5uiTZP7u9D6QzWsxKxFPWoEUV",
  "key19": "3HSbHnHGdwAPLDY3SQyAMghFHaUERaM84Rsu9B8mByYdHVtksfTUNmiSCP8VicivuRyHgXC53Pf3UYbJLvyPTnTz",
  "key20": "3JBcbcmbsXSUrF849EMUhtc2ihX7VH8JF36yNvGRTPr6DDRyMW3kH2dsDANT8TecjWF6RN3Z45Mi7bo4siGpYyPU",
  "key21": "4wAfr42j8RUTCz2xGdskUE3oXWSRoL89NtVtARsKR7dw1cP5TW9KTcvF44dHvsxca7xxnUsLVbpb9SKaMa8zZ6F2",
  "key22": "65WTRnfNo4hSUnGaEZekiMmyRvkvZBv1GReZvbDeDkHqJY3Ur3dS1L3DSwSd2SeHfv9Gf1cWzmZuHVeGm35pXP84",
  "key23": "5JFXEVySayYLvFBGZfNu8m8DDHbWSqaXyMyuPtqAuTBnVjafkgV4xQ8sAsVGWXLhzZ28RyBMyo5ML2VL8C8ooUst",
  "key24": "2v3Vjj6A4CzDrfqjXLAByMbAcWWevpga1hguA9AV6Fp7A7fkhTYcy7aCBSRAvcfgHpUMBdmkQwWEHDBoURJTCPtx"
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
