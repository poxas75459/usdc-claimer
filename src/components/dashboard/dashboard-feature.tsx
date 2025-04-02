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
    "cT3oC6CDBUrvcgcqkXvFBwU3saiEKB9izpxX58CzhnM76rpa9qBrpGxnnkf7kt11vxpPmBrJ2bve7PxG9HcLNEf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bZhHTeumrWaMrB4bWd3TTqg2BX8ugdZybe9eUunPYZmqDQ62wFJ9ZVozLQA2TwVb4zG9RcoGYUwfoa1DVHxqVxB",
  "key1": "4tuqTB73chV83MXWX2FVJ1kb8dHBpmunS7ttdkjkyPuF8EqzoVwJG6yM6F4PP1qt2mL3hzX8dXSrgQfVo6S3TzYU",
  "key2": "5h8VBv7vpjDctJSZaqda5HmsDFXhfPvLHbW6JNXCrxvT281p4BhNZj1iJTUyF5XXVaheUsxVPXHHosdMRdY9sH2Y",
  "key3": "4GQ6wybPsyUogM4ddY8j8FzYiG7oVPp8XkBn6JLyRRcPMFi2HviC7RV25LwF8x3EPSG7JmsrZrMEfSy7axMMVVVA",
  "key4": "5YXq1p9gEDmiQTkUysht4mNHXiqRTFL4Mahc6U6xHvHNiKP8YEaxVGZCF1ESH6Aocbyt5S7LRqXzzBehzMpb4pYT",
  "key5": "4dH7RmL4ZgGbgJyjTjyodrxREj9ERFR5dkK16NRgprt3zX4x9xpkERWteWP26kA6e4obdiV4jGf8aVzx6LWjX1gR",
  "key6": "vEpohTASpxJc7CT7mz9MPaNLhrmshwyyUxKVaofpgoKbBKBuprGnJoUFfgGFkghQaJNEGbVwPLHK75RrwGt8b2W",
  "key7": "4QDanpSTuziEPHBhExMdbfWgcNp1b1kVHBGLiLeotXo6zjURzbMMaFLyh98ghkR4q7oDGcni6PQQ2ntkHxBrwGe3",
  "key8": "XGcb3eerxqxJdifY4fzt7eZh22vs9dHWvDKSXukcVUkD38jYXufq1cG9iifw28h9AZzGLBDM4vedkG2UW7n41JD",
  "key9": "5XKxdSXe2MsfMJWBnNUqwj43KMvLuJ19U8mzSLaWEVghYeHWukxjE1WVg73Go7JbTgFMTDfPdQxDV6WFpyQLWL7r",
  "key10": "4RKsvxKHzAXVoWuYNH5X4XX2uF8etDvyus9FTwbWe6AjknCseKZ9v4UDHPA6jThV9p6KrVCWgBvpQrPP9zxpXhdg",
  "key11": "5xxv6fSQU5BSBoLWLSuaN857R4cQucaqzvwTaKecp9juu6cRVnRQG6UjjU4XPNvX8rRffMD7mNX5mWQcS4FQa14E",
  "key12": "aLSNUoAtj9XsD9cMGBPzYawdJo1ejYJci51ySZhYTD6w4dBsZgL8pwAyCNxAP7azjtYshWbgohGgKHF9yZ2EeJ9",
  "key13": "3fZLoL58wr4Lr3ad78iQFeuAi5hQvyKF8kowupBLL5zbDoQTf71bNNjLQGpo8ambtTyq3PrJxCwMxEZ5CHxNpf2K",
  "key14": "2iEiUAKeb8h6bteoEF1Bj5K9waULSR1MUvH2Fjm8kfi59V1i7MopNuD6cag4632TyDdtq6VV2K2b931uuQeEm4PJ",
  "key15": "4NPzSdbNhZ46PxrkV5aeKgz4Lszak2fMTsxGyEDqRNyyGMVgqAmHULB9CEgNpzz2Xbp9gdSWbuTqK978S2JDz3Zx",
  "key16": "4frJmTfWUcQLneAMj5oUAVDVAaEtcCLPXvZNaiefiahZpVar8tV6nCmrRt56Y2h9EfYwc33orF4yNzyGU1QRy7eB",
  "key17": "2cSHecpDjvgivY223BoA3rojtxt4TFTtS6QuTz52aj1szMwji37yLtw7BbMZQtmkhFWdTGv23vaXcfzot1pnV7nE",
  "key18": "4SPKSh3ZSqMmu2B2e3iHjMoczmRkFjg3kkXMMsewKGL5kPFeLAbX4FJAiSTGoHykqRwCuX8YokrEBUtHLmyqhery",
  "key19": "2u3h79AFFVYR5R9nG4TbwgmwaU2AXa4tYSnAHHQy2Fj6FYCTj2fAMtoYcht7ckzxAWoCQg7K3RY7FdGUzMa3yeuF",
  "key20": "UPpREKMJ5HsVBP7VFmoH2qTN6xVScUetW3aDbqfV9HANNuxpPdvAHx7V2KKtKzUqik4igRPu1WFq9iqft2TPYZg",
  "key21": "ycx8xdeEwTzMVtTghxF1xjodwKkCHPBLuXShtdxqfhkA1HE7Wq2bamjwJT7EcSKJ8rprQfhXkx9PrRzxoQz9q7G",
  "key22": "3snetTytBuHJuoF6bgyVpK4QKh6vXJQf64A3a2bYqWbF68k3EmSUDK2j2r7j3P8gA6UQEHyk62ZniZRTqBLWj9Er",
  "key23": "3wsHWVe2fXLBNaKaxHTtpXrV4JFbrRKa4JwJciHpy185eqPnqneWTzMeZh1rytrUASaM5GTN4AqpuetBqkvi1bYz",
  "key24": "2G2U7JTwuuABFB5JAKVCGrH275kAbHqWwpJ1H7FpLMoB6BgaxL5MnnVQ52N6kXg2rWqxZgHm8UxbYT4FnTnqMULc",
  "key25": "51fN17jkogk9z1hbaGMCQBAASnS9PBVGccGb8q76PqvfbhzKAyrHsA4yefYFP5vkmZvXsaWouABN4vLGCX5kkT2D"
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
