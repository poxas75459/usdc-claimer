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
    "2S4tVUWMLhKookreNqrp6QJZ6kUXSiMsGqvRZ4MhgKWKJiGRPFcpeooLpzoJqTVNJqRKyFW9HRxmGF7jzcYveE4E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65kFjwDtxAcDYpYM2GhiXtyiRk1gTHk933ud4YnhQ29J6bZuRjXFaoH7JEK2f2JVUnARiYAPpSMsmcpPULPEWVpZ",
  "key1": "dkTbookgABAXky6cdxG44e3Gs1qHFHLHZry8tyXzb12Gk1JPRi3njBB5nf5dFH4yZgT31jeKjEB3aBqS8AUpS6Z",
  "key2": "29EnaZdG4M5MKMxJZbD39yJCDXoBuBEdjYH2tnm27DDY4cBhKgYCfRNyPPJ3SVJKnFp9itfVE3jeMtT2fHTjFq74",
  "key3": "49XMNDnqoDPiokKN36ASUPyvycoAH6RVQLkzKekfEBKWM9eyaaD6NFkRMF5Qb9Pb6kcUpL13v3Vfzt8yMQgajdz7",
  "key4": "2PVc6P3TKp1KdRyxGMfBtW8ZB8abMtBXi7oM5F5AoWcn9k9t16GvHrCs7DyQ7ENd6nhrASov1X1dTgVNZq1afJN7",
  "key5": "4cCUcds99nC9xD8fUspDPNsjRm7QYaSboAiSo8xMoC2933CfjK9pytJ8QED6mSY1qdwebxjMJjVbmVc97ugrX8N6",
  "key6": "2SgQTWwLSrEpmuKG4W3RNctB2gaoUG67Ee2M2B6KqeQ39J54VNcSfkkmhpCVdA5j3nVnsa3SPesYL24eyYBtLcrc",
  "key7": "2eoFoR1S7RN3WQJi62qqWZeVJtvsp1vq2VMjqejCV3xAXoPFDAVwvxGgaeTnR74nYwzLmYsEwVrgDALnMpHD91e2",
  "key8": "3GuHH6g4u5V842NCyA57kZAhqo2kfEduzme4FmQ2Rti7SYry3spnx1YReo3R2ydJRuLytA8mrY3zzfvus5ay3AtY",
  "key9": "qwA3htyXT9XWTA7dGKPKZY5QjxLcy4hR9iD5mZm41XpjXVU2AsCV5wgyr6PXhxc3Kc1V1gTUrCuuPmBT8QA9QvU",
  "key10": "68A24YSBdZCBiCyE1Q6AiXGrm14AitpHRwc1NJg8a95yC3R5uXc8DJeV47WSDDsZgsPqg7MiT47KN6UsNTQ776h",
  "key11": "3ARGUnDiNNwFKR2jVxn4G5dLMHFzEnsabu9xqXWaufXLYW8mmCFmjk1G9gvwrSUu4NTojeQ1gsv5rxkwLvGZtsJ8",
  "key12": "dQewPatEmnHzJsRxoU56j6iNjNASwg8aQ7zvTdZittQYGn4RjQtDtQfhfgMt6K5geMWZEkPLTvBhsGBa3c6VzjD",
  "key13": "5P4JP76JpjHqhUdat9jbU6rgRXVbBC6a9LVtSwDdEn5mciHodfG7ei3xg9BrJhE88rdbuDstozsrKDG3nBYvKJ6T",
  "key14": "5hCMkUY3Dt2uSCjqsZbu1wvLs1ghqknnhpRigzgJc1pYaNDvrnPjxCZE3XjHitYuFWmr4xAYpHgRFTBwAz1P9cYR",
  "key15": "5dRXPRw4ZBhxuCYZyW8otd7roY28Pwh6GDksfU31iexjkRk7CGacwcN2V5vuFqVgBbKdvpfE7GWJbuFcJCDJd9nJ",
  "key16": "52t5dwWqoSs4EcmbMm4dX6M5k59rNbuN4bCqaEbVGdksPFw3umABTJJpw9qZN39wjFQxvHpGLBJTcz4g2HtV8pAT",
  "key17": "5VjFZeA31EscMy4CLaG655yFLBKgPuVXbhDSbbFeA32CgbiKxuUYEP7JBbGVUJnRoNQ8ULXF4j199MRQ8WnW3Rc9",
  "key18": "3PN3kFqdAKobr6Cs7eFkefBbenZtF1aunnfMd86jEH6k7K4DbMsT6uyUdVRvaVvvUvELMZ4HE7mPVY336CVso3XW",
  "key19": "64YVErd7rHrG8X6WG5fqPH68TVKAYApkdHnE9rso9or7x3cSU2siksoUh64HHdL3qGq5nbwAmM1BVcDbD3wxD9HL",
  "key20": "3Cpdjsn7iS2ig3KK44XQ8UfCFs4vQHa7mFsTfJyyXZ7NrTrs9g9JYvDtoJRmBMHCx2evre5VowCZdRrSxXMryxwV",
  "key21": "3zdEYyBWw81khfdQoPBRhPUJnp7N3cXkyyK9xvBNJQ4Bt5BkEXu5XZEbBtJdFpN2XzgsxR1aZgpBUmg3Rjb3367x",
  "key22": "3N56rpdu7HH2FkJSDMWn5aeSu1B4eSP1z4wjpkwSp7bx9n21feCDqpxwQenv3x2j5zP7JMHmVM43Jk16ogLGcPBB",
  "key23": "63Qkg7kJhCnvbAkBMXpGojUcoZeprGDj9BSkDUy8NXSzcJPJi9zUofkLofLwUCTuXtnVT8WeyK2Fb3ifa3upADgg",
  "key24": "2Rn2yvv41twLEMCzhdKhmet7pwUEjSzAwRdH2YDJnXhfzA1DGeXgPHAUEFskpLgdjjh6h3thdC3cLxCaBKhTwWBC"
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
