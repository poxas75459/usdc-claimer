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
    "5ozBvEowcDwG9RfZSKnB4TLGKYroyKQRvsVepF2ECypJvC6b38mUgywxyigYMLGUYpevhXsXPpbPu68aoSMSXVBc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g6URdJNFv3SbsBWoRphQMn6qJRSoFzFbuw1kS6hVNBxdbB7cLtCqGjfbNjVQYWW64NE16G4kwLBhPGYEUxcaSb5",
  "key1": "2pcfDBfHBPdF6LcBS2kft1RXmDRsXCmTjmRNiAuwXvSgTZqtaShAEqQeuJhVDTRjjhZR1JTQqTPSNSZWrddN6ATY",
  "key2": "4NEgT4kamzr94kSoqYj8428vqFSvvAwBJuQYWotSb2rV1SP3gwXD1JyGoNTsVVLUYXqR3mzZ9pSyzcUWqXgAocK2",
  "key3": "4GqRERsWHyP7paGsXPwsJEafU9ufrvT8x1g9g7GF2G9wNJaH6pRtUDvYXpRCKTFe59vru6XkQNx9uLWUC9n8DaFR",
  "key4": "654o2V9YLSe2xrLorFxAH2UAyiJNcvVqyCM2UfUJNyhwwyHSDe61xbdf9AgwNJ93TjwCHVvR21V49Ed2Hnbw6G5H",
  "key5": "4we9dvVd1feefT6oLVwL9fBbW5QMEA3uS1ujZUTN6zf1wxrJyi99QSg4ButwJhn5fafqFLGeHWzKdTgqFCCBHzrR",
  "key6": "34QfU5RXcwX13LYrrQFvxv8JBAtBf8Ho1BecSrFuEhDmFw1GQvqwQ3NXoR5yDQUgyeATJwcP9DeLtq5GJPVxBkQi",
  "key7": "qq2rQh6M6urZqF5gywS32zaDqJscJTXr5rrENw59XWxJ2V9gFwudH5Gmr7LL1v94ufrfbZCxTLb9pJNCChN5i6V",
  "key8": "2RZ9XtEktgr7vowcAUCYqqrnbxKyCgQ7Ef8A7JbXWQs6xEnsYrHCE8dEGwagM1kFzvsAyXZVrEf8o1UMWwqdY4ju",
  "key9": "2MrHXLMnNzMgJVvZ9AqZHM4AxUk4LXRUXnQkYaHQSPJTcWGgKkUR8sbsu1Bthojx2djS2HB5pa9FuZDBDTYSMJy7",
  "key10": "4xjPC54GWRG1p7ejqSZcs9zh9ksXSd8rDAZHwBHPnffhnDxxWje5UH3A6bri3Z6QYdNkJT9bKRpWzuh3sXL2fbM9",
  "key11": "5QQQERi6JBprnjXxMz5SM8nLvcqhedTAZAicgpAXFRTf9yqPJ67MEbbpcZn29zEBqiwZjJuM6qyVLxvSh2EkjjDn",
  "key12": "342s2Jny2dSLecT1D92XLBmwad4Nw9zeQ2SXKnmbsEhjXyiDPSjdfhzBY5LJh97Thtc1WxqfvnymyZ4JjrQp23Wa",
  "key13": "3N5RNNrr3ENmhdqMcTku65Kh6F1ZUa6fBmae5H792JWJ7HiGSYrHf3ZMVgRqautypv184TmnYw6UUbyQfLtVEbCA",
  "key14": "2FKBXm5zPLQWd1Uup5GDS6NWdxzfW84BsnyWZUz914mi2Vrt7DrAQABe6Df7t5oqCqDrsWw5YmtZTYh9EFMNQiS6",
  "key15": "5QNnoZMwtT8cmNUR7GHq79eK4Ub5ZjL5f6An3EvfcekBUj4nVe8Ye9wa9sgZAnuMSTUfyJYqYfskTTSbeMF7qF5x",
  "key16": "35KQcAVJjwDZTbPUmedGWgU1jiuVfHpPXX72ibKCxSN1Zbtrzmr4HWsJJWqY9Wo8aXYeCob7moLesqMWSqWiK84z",
  "key17": "2aXDvRxbAzfhQxKhV8jzq96TJQQ7xubDx87tEtja12EPePopdKKMGahNSvwZprnW6DiuGW54NXKeMDRxuYLow1Cf",
  "key18": "2ZqQcz7rnGZMzT6x72bn1aeH1gSWP9VbYN9oiPxMzsdP5oSYYkVxCCz6zhbfhDbh4UJ7fBi95ijH8KFFMf2WaUsT",
  "key19": "3XpckQWTgQtVNhGGBsihvFurBxLiCU1otxGTNKzFkxZ1yguvVtrMcy79Q1u4E4yyFPX1G24D2NV2J2VR5xsrvihS",
  "key20": "3PitrqGZ2Ykz2e944tnPGBTC89AAC8RbG2Kc7oLjFrCQ1y3RfF2t9hXYz7BkZXtKhxPkpsWAruqq2WEdJremuXhM",
  "key21": "38j89BJFDHVJkeCsCUiP4DkzMPp3dLc8muCDi1i5QHgiFNqnZyjQhpjK4qehoBaJdkuiMnP35VGB6cBuPJjrAM94",
  "key22": "57cFxBfUFWwbrtVNtzKVWFE3gtJTaE7KJt5XMopknepsBUQCafBszvHwXnFYroT3x6F8ikBEyWskLXRp1Hmz58mM",
  "key23": "5E3reJ8K12kUgoi6wWBzUzvx7wFeaiis7Lsw6hwgWP9mEdmA1tgAFjtmSmwASzUcFLXysSqazdJTKbA4NfUpaYae",
  "key24": "5A3SrBm5CFYoMsr9u5S6qXcSiBcz9XHoppyk2VuypueeCHXCrtWM4wgsUfz9LbBqfj7mWhGudxnbtfP5dmouXCqy",
  "key25": "2wXeKVmZ2MHjjboGpyZeR6S3BiUXgvRjRB4K96TXjYdKc9QXswFtkauqy5rr8raJxSFtg1wk7WFuJ3MiS5sW1Fw5",
  "key26": "6eJ8dh7cExhgiL9f1qZA8MGQr2axGw6Z79jh9NKCWLUaQXdc9DCYs9RgmDY5dz2amRzDoiMjSi34YhC96V5g8oF",
  "key27": "ADHiUVHpnfLq71YK8HEt3yTW9jqxBXry81FhNdYCjsHgD3L1E7meSzSnN1wioeNTKYUpuqm7N8nCx9LiYdTNpNv"
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
