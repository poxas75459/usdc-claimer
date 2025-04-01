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
    "8HEfjc6XzcnmeUz9goqzCyZa99SCWbhc63GRFix96Fh5sMV9sYueQfXH5cP8RR99JLEXyMnzjVaG85XszQPRKfh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ueUPywhUQorcXfczDLSjwNggicnyM9sk6ZuY1DrReuA1Wcz6eFaTyU9aykybRzaCtXXMGNQ5djchkqeQovqcRjJ",
  "key1": "21aSnLPjnPywtQcAGmn1uZFuk8tn1UXaRHSFSHK6bMDiW5MxG1p6PLdhKcx8xEypb4HVAM1CM5B1tE2U7deu2Vi9",
  "key2": "5s9Vh5NAkKQL2xCZvrFdcA5yR8tKNhkJcXDDncrH9W6gokPgPFcHEhm2pHPLV49CehCnW6j99rBWsExXuuv66vJc",
  "key3": "2ARGjYKtCeT6G9LYujGcZ71qHgHnnrRSGX2PCi8jsqzYwpnZAdWau9SdmM349u5avCcgVa3R49urtzTRioW5qaG2",
  "key4": "UAhqETK6yWx1vHvk4hGtjS8n5mzairChgrtZKvFm7PpEu7R8q8ewjXTYu8r9apBh9UNAKtxdd1kSAdFm7Woh6hZ",
  "key5": "qtEjjWbrXTJao9VWcDiR5aLc3FcHCYtqCWwNaMeFwnqb2vjkuxyXK6pErUrx21Ji5PbcMQFPNuDbcL7b3Zgrgfz",
  "key6": "679wqXs5FdtzKofA6LbUZboLUedpdBaLeqBXYR7wRpzamYp82KmtBBTJibk92ngmtLxwuZyaGfDCSKEfHCxKntQT",
  "key7": "Z9mV9r1ETsQbEH8ZZCqDPHLxr1vFyZpmkSnLgNBEUwzhZ64CQLBU9z2kRP3ofZ1pwcCGFmtywVyZ5Mu3zbQ2UrX",
  "key8": "49UYsQSp6QPxJw8utbFfeTGd6Y8cpQdnBMcqXMaW9staYWQnZexTZA7Qo9vaPDs4WQAaUfaWrBfq1zncwNuc2J2t",
  "key9": "5yXkEG6rZN3GrWbLEWSUbhcdtbmzQSEvCRvQrkiGw38nnY2JzQa8PnMBwBM21QBa77Y8cHtnC5wmfQiEv3r8iX7f",
  "key10": "3MpzSXfsL2pMgeBtAtxcDVmfVkacEDAvpSqAJFyQdyVDkbFWHjMWdR2TA9eVWKCwB7zjGKKzxpCWazfFJoLh3QsM",
  "key11": "5zsksauiJozw3qBKPYo8rgShiKHDnqDFkNwtzne7hVxYHWXUHBVPYa2nDWcDwgMagfRsMgQaWpAjR1N6pqBSeYNC",
  "key12": "HuURrG1QRA7V9TSmi5ssCZfEA2xiorDsMFmdn5gzEe8jCFzp1orBUAiiqSPihNwxUzEbqafiuVg5Xwx1f1CYh1E",
  "key13": "614cLLY8rVPEFjmre2FhFMF64qgWDgxHVzWM5c6MkZD7TBijpWnWJ7qg26L1LRLqDkTsBgmbx38PRZ2yS3KYopeA",
  "key14": "2b54hZm1KwjhGAHSTi7PbDJnAttrLd2EJS9ue8qNa5bySoVTQGWxohLgJhJxPEeMTXmTKo8LAkgEbp37Tg3NqZq1",
  "key15": "63FWv1xLzUQRiDhH1unvK7nViCxF5U3F9vkG4QUvKvd8LEe4N38W7u9YhYwnkzzhr7KxKMkPfzHhyDJcvagcUD9f",
  "key16": "5Fk8wDX5WmbMEMVKNcomyBFrARzQYu1PXBetiyW7sfrepN9Keiu55KhEym9F1Uu5sNCMG6GWhS1D6dw8iAkdR2ez",
  "key17": "31KzZw38avMAPZopiExHjeNSFZncrt5CybqeV7S7ZrX5Zkuq3KjSDxWRvXdiCc2BLZSU4XrJLPZ2DaQ25VHadszn",
  "key18": "4JdptweoGyAJH8XrLPCM3BiBe7X69Z47XxVV63kuxsjwgwukQHiBXfXMXmW6BqfaDFRKVEPbmjKUxw7Uub94VeEF",
  "key19": "vaJxyzWmLi5wkgPgZWfXP8aGYYZjJbGD2EQnDFbcbaGuMS4pycW7wMT6zpfQrUzPzVpKCx6Li5T42gbA76ADQMB",
  "key20": "45Nbcj9K9uD88VXsgg4vLbvc8D3gvoRtCgzrcMfyTwMcAi1BvCK7WqZMFVthW7ha7AhyPJsBMJ71GX3gZ5E7mW5U",
  "key21": "4AuWULPpUkznU7yzU5XouSV7oSREW16gNFyQRpfNymbx7ThGZfvUk8iD7AwbgBxLUHAtbsT7HS1WHmVhYFdgBXKV",
  "key22": "njeqANkJGJjMnuS58mBwtUrCsE4ikkEtRkFrhpMnjpVweWmzbe9nJz93TwMAptweiiuMr74PZzcoxA2gTzse44S",
  "key23": "4kSuAL2KTPivQZAxKUQDVbAiUaRUaA4BTJMBCRZmah4PB6dsKyUfyUhik4ged948n83xhFsSHZujH8D6PNp4RWzX",
  "key24": "2VJjin5Dfcehhnn5mw5TVR29v1tTki6D2KaNUvmUFmdcc1YVoeToVwggSGHDaAwA3eN1ccdC3F3H673bH71YYke4"
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
