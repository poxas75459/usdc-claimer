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
    "3qCkb6PmYqJ8Qme3UBWVEQSaMc2Jdxk2J2CWA811xBa3ig1DbJ2GLAAdWswRRHrqGyfywaxyUEFyNQeornW7UFLS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T8k4mY7LkDnEuap2NZb7TfyujQYd8uwCnLGmRjZNNvp9sURza6LP3TkFnrTyXTm1uFQ1VqSnQkdVdza2s9usZas",
  "key1": "289dNAEvXVpMdm21otCR6Dhh4UgUzawFMd4gHQAKpw7sgF2KfFqvWQzq9E8BJyfGcCkhzJ5DNXkWUZqAehMx1Rk6",
  "key2": "2RtDGoj7VH4UicGWqJSgtGfcJCx4nRbigaYMh6i1vdcyaUR7kHeEdwpu4G9YUaoUnTJVDB3edZUCkg2WPYtRw3Nb",
  "key3": "3doYwujC8zcEmwUyWGwbmZ7FPRJfzPm5Cnf6CEF1mroj5wC6dgo1X9RX27fPzjnhBetqauecB7dSzdvLGTPJgMma",
  "key4": "4vWrrqMWgeqpR1aDP3vTuYw6hqvzemYhFUsbBKNHWwFHnt4C7Ni4frJsU5toaXqZYGZwuQXhA6Ur6CHjftmtxC9Q",
  "key5": "5H35FX5rS1KXyVi4wvugR4ewPrPxKZFDSiEGN7DM9NrZvZj2bFPYCXSuKwWqBWnhQehph6dZbCABPJjiKn3B84Pt",
  "key6": "5z7n4CCsg1Y4YQ6WQfE4G8h3rxnY1GfBxi2RnFjYDeT8uLgvCcjTeciQDPEaeCJA98cNo71LJb3qJsmqKEZwPDca",
  "key7": "4TYKXMNfhGmWK8ygSfAj5Pa4kvtsAMmXHDLqMcDc3nNnSkdtAzD6SmQTTYU9JUA4bGTNLysUePFCCEpmnxhsYPxn",
  "key8": "KDn7bt8zED6QRXVFU8n21nh4Mi4UeuUWVY4xhofmsYLGqdDw6TEJvq4HdqW7LKncCXvEJxAxiDHxS13YFJg9vzy",
  "key9": "2jBtoGnnUJfBv9mWi3r133iZZCaNAc6tUiCtmmM2y8pQ1tEFDhzvCjRD1LmgrTYX3jDztBq9gjyByg66A8p2krac",
  "key10": "3aZhuMhteVcRU7ntG1vCdwh7B6Ejiog5iiMqgoPnqwB4jeRhcKv7ArB8paM7Wv8D1jN1tnjymwA8wn8e36VDR234",
  "key11": "2E6HAA7ioJBrJmzQiU1cTZF6A3tQa1qK5bqpmrqx1JZyT8gj1WJphDmaYDiSL8JgazNd4mZKYBBCkC2ZVKZVq6Hx",
  "key12": "hqv29ifEty33eAYJJhghc3neoM6TgTm6Q44QDpX2k2hDfahcAsrejhzz4ht78cvDtcj6D2KdnnV562MHst6WL35",
  "key13": "2JypKBhBD4VfQye6Xfr2atJrREzqqYSc8F3RU6Jtuvcotx82L6jfWH7H6fnqUGxjLAguwCwjWgvkeMukspybtr2p",
  "key14": "2xqs4A8k7akbF3x3kG4JgidHdFxTa9XYjADSkzGfx8BCKFpZgo3MpEvZJoHEsmbNwCrCP184eEeoWJ9ABV4yKLCo",
  "key15": "2cr1HRBhWj4tsPCmXieyyMgvmHWRgDab7Uu8nqXmuyUXTvDZqi6rAwgnPxB4Y3chDHUf3mDuY3Mj1Gvezu2aH3w8",
  "key16": "29pYBGhJpt16owvuk8QkHBYhv1tgjqZJLpzLc63yzZo8StpriLvmRdW1KenFiXEXEvqfuM1XB1GA9zK5Q5foKmzX",
  "key17": "3M4EGVii6hiNiac5sPskjknmanFx4qRLYqVjVviTw3bgxpzRGeN4gzY35PygSdbAk7WhMcLNnemE8aRZihMpcyBk",
  "key18": "5RgcsgUDCsTezDRDCbAfJA5NJddv8MdPgpHmZDR8hnWJUq4BmYXoPJftNAyYPQaLHBHcZ3qJMD9JAKhC4UYuuCqL",
  "key19": "vRtEyzXZCrvNFSkGDK1YUgyD9NHKC6dh2fPL9Rha1Qtmy4FTdbkCPXJfBr3VHwjSm1mrYF6HXEoZTgUkTxayxFU",
  "key20": "g99KJdhMEFYVCoGa8J4oMuac8JSGpJSHETyqLXGG6vJwg5LTwJYrPNZntq9zjBTAKVr8EsLDmgVfCjWesXcm5VJ",
  "key21": "5NrpquJ5A5CCh2DmKFqZa3FEZR3H85fVS1v4VpBuCkHbFxxfM95UBGhNeM9ih6RvbgFAbrpvRBi4aKz7p7JEawMV",
  "key22": "5uWu5V4fX7ev55CJqvYr3JW8U5VbDMVZ1Wxdd9RrZGtv1CJ8UJUxk6zSFGy392f12dco9fBv8cRpB5K5bRiqbQ8b",
  "key23": "3RtJNLxcn4PR3vifgwvg9JLcaNrzKcmqkvgkbTXXGy5mDMoYM1GWPgq9RoNiqcANaYUgQaBfTDkw82rZnRum6Ka2",
  "key24": "57vapNgcRG6q1jdZpj5qN6CveuyYe9HiWnNtQVYt5hoTkXVoJNCchMfwibjBqAsfuUGvGxJDiG7CdPN9ukJKyZiH",
  "key25": "LdNAXuFoHA6hajWVqfrBvK88TCQnsTr4Bt7eNTkTjryV3cD7cxSc4DEdGCCZukw3rarDitXXh34CcxCCDA6c99J",
  "key26": "4AGCK4Ecj6sNAYa6YNnp7FRk52mgTQ6fDL8mM9Cby26vvZraSgWFRAbkh9h59JaCum45Rc1sjrkshh4DSkWwowQG",
  "key27": "52C3dfMCTXsEQ5aEDyCGW7qfUCBW2vZbBWU8EvFUMK1ko1PteQiVt3GqxW9E92bTo4NYWsdL5q5Y7N78avzNW2CH",
  "key28": "JConAcRaqQpFdN3adUXBjZDsJWWxAf6851iXUK7S62ZAfSGG7VPGpUaanV2H3JzAEZgDJA7jvTckzfh3mBfkYf7"
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
