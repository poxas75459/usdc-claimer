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
    "Lt6BmWvnXbcg1W53u9fB6Lx2uxFrNJNNsevYYqkcSSk4CQEDK2Ddng6GfTeSTk8ntgkERPktgEaRJaAESmxrU6d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rXstKMkEq9EbZB4o1cxmWK1bysBaJr21gi78tyW7f6avBbMJeKsw6zBU4qEqb5igAkzQrtzkHtzvhDNH9kBghaJ",
  "key1": "3T18zYNgD3Gdxfp2yaDJjjHbbfRoJwqMEFsQm6G3UoNRY463NF4Gz2LnVdJup814nPznQ23zuoPZhL9onhSNwrKi",
  "key2": "3XpWW7X719suWsXwvRHADSfNYkRW3NLDR3xLaMxoxK3cTV8NCSqhM5ccN3UKJPzLV7nwAonvm1m9MCgTyZU6aToj",
  "key3": "5X2wNryYSxkdpMsW5fDqUFuBr6d5jXRyv1u476SgaP3r3qG98yskpVPF2r2NnVPLeDN43dtPTixeQFCRYEYAJ3Dy",
  "key4": "3XsgQdCA6p84gbsT7jgddTA5Tvrdnp9b4cpcxVhxQM5aVjzXhrDc543vpqRLeLjpcxaxsWXnbnPVbfyoe43Enz3P",
  "key5": "3c94vMtwgERyEMiBb7Po948sKDEyVp9iur6hdi1fuPY9mZzwRx26NnRUTZS4JiQnofNXHak5sxZGL2SoYRFJjxn7",
  "key6": "GVJ23uL1aCxFgLm9iiAdWWmpdWip8obdT26X5zQinohw6h6mkmXyBY9tKSvV2qSZNWmoJjJkWjHbYaufRgJ9LM9",
  "key7": "9noNb1jjixGN7Rm97f4pBUNQvfGVgLMxrNVnjzqv6fcmMFBDxFMfKkX2RV7YKGPmETWjyK99z89x7fX5HpFZoit",
  "key8": "2pDfPpSTKviVhkX121Gms69VP9f47P9y2qzmma1Wg22yoxGt9iCDKCGLTzoW4QpGz5Pv6uhhs5f5qXRJpBs1mSxH",
  "key9": "3eAwmvTiwxmMMwMufpQrMsStdkNouw7iVGn2roGbtW1C7B69SN6z6jTKF3cTmfQohhNvPiY1doxpqNbwwsjzCPFc",
  "key10": "5Ng6kD7pBJbuVgpfeZvwSbX2CDceBaZFprk3KUWDqE4DMgmL9N1W4aUxnFMnLG1eu8LHNgNzm7DM2ALsfgfZh6fS",
  "key11": "4tSd4oqEhVv16721wKLUAhP8XzGJTz7vARVS1xcw3GGmt5apcSNh6zs8KJQGYjsGESuN6oNbsaLLeJcc59Ncm9cN",
  "key12": "3x23kTRHyrwBdYbB8duDy6y7BS8J5cPt5GHqb64qsSXhcwF4oGyqED9P8VUxoS7GPdWS8b2yXVFgSiaVuZktSiJh",
  "key13": "4UaNQQcpgPDsjA2BBBH3146P1C8moJXzy3ksn1EiHZKNdBhYRdhUmSD5xaDzFf8rJo44mXAj6jQSS4w7fMGc7Mi6",
  "key14": "qyTua7ParsB6CZrX7LaW1DMFwT8VFFLPz8ny2oEeHaobWH9B8WCwTooNQxMGHKLVVQz1zdvJjzXMKgddqP7UWnk",
  "key15": "3wuDQCR9iGV12pu46TGye2mDQPh42fBuEKA6FLvdprh1jcdjjaCefm5yyXpanjuEJPNYucRmmTf8HzakMkodgQ1f",
  "key16": "jSCzQEr6MiERopymyMmBL4pFg5GmtevNeacANUL3iPs15fDhGSW6KFZs3P9kJRe5wHDJRmnLHHUoT6Rt73CAkM6",
  "key17": "4rHUNnQEkVno1RjtjmjBQoEPAkvA7cN4FWW1mM7VpsXJyfJDrDzw8KdG2ZgXHeP7yZCj3ps1XCZvaZg3YxRxA8wY",
  "key18": "2p5x3dz7FwCYbCqsthoR1rP8hRmzDsM2s3iKNDmcg3FAVkGvkt4GpHXtjqexHErDAKCjEAbkr7oEahS1hVVQ56mm",
  "key19": "27gReQaUL6w9AEzAiKvy2GvvpmdDjgFXM3ziHCd26FJfGA9CRRsznfYfHgyZHYWDGa6Y2A6Lo75W7Zh24DsqPBgt",
  "key20": "45NKhgckNA3svamcMp4uYirPE5A1fQ6jrez2PACtg1CKiFg1nJ9SiCRkdYuW1rGHR2vDrThbG9ZDA8dQyh8Vt5yq",
  "key21": "QaR5jcNG9WBzvpQ99r4oc45TeYVwd5rVNohjYwycoP5WT1xW2TQEGVeTCNQrGqEHcAzWhTUjjpe8frns8iz3B16",
  "key22": "58PFrXRHfCaExe1zMeuQmLxCYCbbcnEwpNTFET6TQCWkazp3BZHrCFFExwCG1nCx6uqHHZ5mSjsUqQ5cubV7Pwzm",
  "key23": "oKDiNVUUEL1yqPC1FGbDsTgBjhS9Z7aCa69rY3tGyrDs4SNsMdqrjbmoBS2kUGibgFrrUeXGDnD3bXU9tEQHoB2",
  "key24": "NMUEzggd7LGjcESkrUXnWPQe1n6B4mbVbr1dg1oP7M9sjGzf8bLCNMSGSKLvXxpASiArdHDPDAxnttYfk9Cu6oA",
  "key25": "4MmhuosZxvwV5JKsjCmWXxSJFxad2c4gtR7BnuYWRvLAMBeV2a3W7HKkfsMVu1v8T47w9yBa8n13jFHPrYFnKqKH",
  "key26": "4CXXaqzowZUWcYsXpZQdU8CEqHsbJrggzbBQV5TqsoCPKxFBxEcSBrhCuQhVt7BH96w66asgFo7CFoHaSDSHMNAR",
  "key27": "3kfrXd5xU6MfjxvvEnWh8yzJXZjdyGMGfydaqRqArSERH7tJfuiKiAAXkrFFtRFwZztbdWZCvmjMLTrXdzBU1uMz",
  "key28": "44p9nk6HYvucwAytkevMTMRpBEr5hizridwHjY3Yg4eGoyyxyBMPFnG9Lzf1wSqWczgXFzm8GSgohEpi6T4Kaamh",
  "key29": "51eURd3wjmd1LYVFNVKLuDiVHbawLHbUeNPyKEvdVUMxtcX1qScPP5EJ1gRy26DrmMDnGpD5Ghb9ywLKYFek1Zso",
  "key30": "3pUFNahihqGKJcnE84TM2WbKoRdcD5nr977DJuFwPEChdoeqzqY4XoBLaR1FH19mkq89Ng7KBGXSfZ8GJGv2Akes",
  "key31": "5P2PyP7oAqJBeL1EjSBs4GMsTk7CBZnyTr933t3wUPCRdUKpEzgAMDK2sjhxdxqaHCdRkvaMwwY3cXhdBiP5Wrca",
  "key32": "5XFGeFYG3BzhrtpTJPyLpQqAdpMT1yRR2cKNTA2xvohnvzkpDrSvM1Rx965bxYCVRa1EPv64ks5gSU5opFsD3dEy",
  "key33": "3oKxZXqwac33vRwte9PUdu9zHVtamfbPnNgVDqc33u7j4siF7j3c1uh7gzvX45kr7DsAMTZ5piu8K9PjGdZocUoj",
  "key34": "5bcRsRpQgGdCGkebkVYUknHLy1SKq8sDF7v4FhJdysFZmYLPERnsYKVYD4rtZPxTjXciXF8PUmyYTbzxH9ja5Rjz",
  "key35": "4oxeZGuH1EG1ed3fjPsDLstsE92pgAqf6YcnCwcpC8A2jqiwurzCtpz3gsgNGsmiAq5KeiiLDhje6ZMrcySYoip7",
  "key36": "2zxXVH73Bzq1Z5Lz7SnVftniyXabiBvt4gmaZAZzcdoqV2z2AAXNzZYLfknwhnQReitmx523kYWWrHB2VCN77n8v",
  "key37": "rpwBqPZeB83qv8UqWi6XZNMdbzQuuZcB5RPLUtrrFyQvZXmPjoof7LfLa6pCLw8HWTRA1ZCNvvUZYfkvLtwqfU3",
  "key38": "2yhQhAc7REpHJDDemxEzx9uZko12rrKj4MX6jBDCX9KBsp57zXbtk2Cg3mgjSAoScJtJdQGyXGAXjaRAUtx7hXTW",
  "key39": "4wtpn921kC8cBFPAvDrQZSa9U6HjtPQk4Wym67yYhNPZMiVR61XqAB7benNR4xYTciQsCkJBQVzRRF2hZ8BZJjYz",
  "key40": "4V6rMm1oGHUTmAFnBmfwguDqUkW2EDKvUEDVuVp1EgSaVzC2uLe7WRhfi4Bzc333yT76378K672etDPS3muDvGtU",
  "key41": "2AsM6idPkEwdjY1FqA7tcqzrPyCRAdaeLRzh7KwvofzXBZzGcdTvd9EbYGdjUB6GnufDD89xsGT4jfqXBSmKAkbD"
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
