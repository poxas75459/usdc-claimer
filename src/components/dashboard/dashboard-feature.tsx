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
    "3xHTTnPN9oZCtFZvGKRi3vYnL8DvZ7j9Lz1ecq6dx8ZyDY48KRuMcKH3ann6ViXSo51snXBfXzZAaLTxVabBJTt6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZF8vcAePwUs9n1c5knQ7d7Ch2Bht4c158BDg92Nr5rg1cAXSwrWjThRknqRAYEGX9rXUwUcNtqw7ksFZ4yVhBkd",
  "key1": "4NXW98KTdCoMbbnY8LojFU2d2e3xUcLxRDGobY9JT3vf5u8ZqtWkMY8WKz9f1Wotuh2jAeWKC7ThtMopAJsaRF3a",
  "key2": "gGbT4ZiC7YiVFzQW9VVpKjTSu45wPZ1z2nVPawJ4cxbQhaJVKhwE6ddJjcM5itAnptrqxEHc1E2629bLocbMVTS",
  "key3": "45w19oCTv4xh7LZ9otQ9gULJ2YEMZ1MnvmJumUMudoG1SaujtTarzV6BGkauTnpf2BHjFQp1p2PX93zq4C3Y4cQa",
  "key4": "3NokUYZkniJqnbKYgQW3peQZtjVJtenCxaZDTYYMUZtaanHgyvLSCzFR3ZE93zVT9XqPJKoEYmHhRMu1NWjTV35F",
  "key5": "5mpgwdWvH6seEt9sCp7GJ3xhwTjzjoCXmutq2zJVgjeikigrrqcPtFQJ5VukLY5MDieZyLSJ8rwQsGcN58g75oUU",
  "key6": "5svxLfr2bukU5Nxe79vByEq7rNT9iqxjbHjtQUQyJr28QnZnWgar8wiuQY5771B1fCZL57BMav2cpZcw8CKm2CYh",
  "key7": "3rKhZVzinEZHg8iwhGpAoVME4vYQHSkcGguEwWpMjm2vxCcTFbQhsWcxSFd7sVwBnTXhtvwTgrgfQWLCwFoeiLot",
  "key8": "4aHVRsZQC7JGDfipzcNRMT3sQmZBYzRBd3GKP4F37FQwFAMnEuMcguTrC1hwGxnE4SqGWM1n823cEsS2DVtkbYUG",
  "key9": "58kvyV7QhrwqSWvqepJg2s6gWG68C89gxvmJ9Q5A5A7wqoAZGVWT6FVrBpYw2A1Y7BiZmdopyjggVfUKCFpRDZbZ",
  "key10": "3phqL5roRzYzVMSgVq3oijbzyBJSgkWLh8EQtfZagoqd6YLjefvRMmH12pLuDSRwJZZKTdkAnzWbjyxsp5CHrr2U",
  "key11": "2eo31pJAddxMZp2AMjVc8A9oAeGTGdN13fWTY4HnEa4m1kYyKbfu3XSQXJUjnkGttXjb5h77Sd2q8xtackATdamS",
  "key12": "5SLr7FgXBvcwyj2i5FbtRaiggtRC1U1zg7mRxf2d12Jn6q54jv3RFCt75KRQavWuwsZ53avKLNCYKsteziJMBx7s",
  "key13": "5HGj388SoeRcVNmLwxQ7oE4Gka7WjF5srCGrNSUvgcTY4w1ZsKajG3Sz52fpTWXHPcFZxtoqzVLrkVYBBV9qjUMV",
  "key14": "4tNBypFxYjpJAfVDdniNFvh6n49rKzrrMQVLzzAvhhbzhMBkymJJKhjPu7ubBH97yhSHnLvxvAUMyBqMtoYEgjEc",
  "key15": "2h2oF2mHhdMcN2hNgRV9z3r2JoPAeyfJpCVjBd9F1MDwrsXFF2RkoT5oQnVYc51MTscNnWzef9S65b4orBdBj9nV",
  "key16": "4mVqWQFYTJe9m8ELKsV24LPBuEixfu71gtnRwYiDZVYRs4iUTZ4koZVJsCo6JAVRcTj3YNHmygXv4Q4T92oF3Unv",
  "key17": "25u6jL5tXRRopkKFf2iC7BYhE4cxgScm8dcFqAAc2n5RijTT6qHAhFAGxdkAxeNugDmXa7JWBQKtnSt4ndCnXQwP",
  "key18": "4XAGLTKxfKMet72avUiYYHLM5Gz7UwoJvjkU1fbe5xymNNZPq79jWbuD2AET7FCUtQsKg4Kw5NrLSviAjddGr4Na",
  "key19": "4ojUpvVeC9aT2ktm28UG689xusCwmMB8HshyZH2o1UpwwUAuRkJt4DZyrs9m8ekVFzRG1TDBUZFWfH7ArB1oQe6s",
  "key20": "2VGyprCGe2oCjByJxWh2kMmYgEYYxTLhTzJX1wb6Jaf4SXxy7afUQ49ABoXKxqQD4A5sk7Fm5LW2m5FhocYMbtrS",
  "key21": "5ziLiK2qwCn55YcFiYyFDcbDa99u6t1jG14rBz18LBvEhbfCTXWYPFBW6aFECdZVTNU36pi98Ta5WCZjo5FoHzGG",
  "key22": "427Uzs5baVxrpb4R3jG2joFSa4W86AFfLiTUooraeoSA74e9ZD6CLnwDWDfC84C9QfuxerypYyFb3ii7irbkkGX1",
  "key23": "3NFNKQ1isk7ChnoSp6rD5U5rw6xaBGWBV1BcouwtRQ2gWybX2R2295mDcuLx8CstgGrQnZN1NvPsbdMVeewiwCk8",
  "key24": "2B7PofnY7AhtkE6eMB9Hwn3Wf6CY48hjdaQct3p9ksANZvTwbR1fLjD4Fun2HxmXQTKCRsDvMVJbBRsACDqfoC2Y",
  "key25": "4Hw4MGe78DwfVDxuY79E8Xyum8ue4th3XcqVUoqHuvzz1ZFxBKZPVTyFBJFsSdKGHiGEha4xdadL37ww21SXx17f",
  "key26": "xJ7wNRwGGLNrKvpdky9LAoGkwnHrb2VAt7ZbcZ7b6gSEUCeZbRuoV1a7aREf6XBdePrSRXvXQdinS3XEEuE7iq6",
  "key27": "2a4BpDr6jtXjPa35h9AUitgVhxyx6Hur74fUYihZrKkxNR717ojmnPDwMHcwZkr1qGAmY81zEJWq84jFa6CKX2T3"
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
