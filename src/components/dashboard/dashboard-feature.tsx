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
    "49Cn9cssbqvb4ESh2mU3aSJCqx2LheGQPKcr4yzy7EXbnTtyCt5Ki8ArWhXSp39TGbidYJwQzNZDTpunNTnEL47f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R2uC5aSF4okQoQyFsnt6krgAhAehszHUfmxcyzqqYorzZN775LjZJPT2PTc73WHGmW7qwWQL8YKuvHoZbvbPBWQ",
  "key1": "2q7jfuJW5rTw6fLwnaEH1vcK9vn6FRVmVyV7dXJQD54j8Pud99eeXSfWa2Y8bkYrWqJYSRseLBzpRLvACr7wpC4f",
  "key2": "2jYV9WtFp84yqmijz7ZCswL7VgZz9T4UD36yJtzRGfFFmjn2ySEDcGXT4A1Lzbgz5sxRHk4K5d4K3wvNjwZAtUyk",
  "key3": "5VbshF5HC4mS68Va9n38yQ3Z9GVk614CRZQM2vVbXYLhhXiiwvSiEnZgN4GTHdZVv733hjrJ6vxmqViXNszcbhmj",
  "key4": "5MN3mpFRE6bu2LFdvPyKadhcn1mgiU5TqtPeGBu5q8ubPBmXTSzxJRc6HEj4TKHwGQYf5AvySvcLKrydJ6raZcaG",
  "key5": "9hDEvTFPcj8BjHTivDadfZu5HVuvT2VCcM41eH9nPp98AHbai8H63Jv9qUMRfmyMqprsf8XinbJZVyj1i24PTuE",
  "key6": "BMYnU9sdbKUsbbKUAE71L18kAkqJb4fMd52okpsDdksjuDzsEWpXP1rt1JPVUg8KHRubXYXhY6kjWT1cYaR2xYU",
  "key7": "3c843XchxEDZyyLP8WHUmCXBnMcAnvjCiVCopPNQYsbYtqjcuDuNE29hSCiJEDJZedgHpEPgyJTRqRNPPwfViLvP",
  "key8": "4RC82DVGqUWrq3siQaLqbsL7iEgPyHW2YKxTEuN4REiyZpqBUaTJdoxmNS7UWhAQfWeeeH3zfYo161XqNZrxZPAW",
  "key9": "3bQk36zswsJucMkb6Faeqdny4mrAPyURZummdPdR9bBRHzuXLLDtgXuAfREVopyjRYLVgUmDoqoQhCTxtsS9cM9L",
  "key10": "2evSTUEPxyw1yvwPPPeiaBfr6oLiBdvwi5hZiWFKCCyLFbW45MJWTv19e4oK4g5HfrvVfBBQ9ZKcbq5UvXLAsVvb",
  "key11": "2K3B5rDaiN77zkGqzDQtQyFP9FP4wBnZVjsznsxFJPPJD18Zsi4XgX2u1XVgRoPGcziPSk31Bv2dgrNiBXfZF6P9",
  "key12": "64QeXu1UteqgpEKXmj5C148QFCPj6tepf4vzj3ohBpDvNVY5icMELscKcEHUKPChrGTHt1729icqHyKKnn4rjQfS",
  "key13": "GaHZNNkEKhboFVbPDXUULLmQVD8WHxUfK3syCFz3wSWtCjEb5KPuumu3Z1UH6Y6pqQsRFQyZZNYr2rCYbfrdem6",
  "key14": "2n6iJwymaoPgAbn5AYDPt62YLw3keBpRHj7GeRLcituUTYUB4mqMXeHSRjmjzZXiivdCHrwQUYdQba7PrRrQvQ6r",
  "key15": "5KBBfQUSuUuduYkGtUFNC3teRSJU375f4szyx3k3uJHV3gYV3nBLcYe59iNSWEatmzQiikaHx99ce8aohrqrvUTR",
  "key16": "3bYSWmkgU68iqzBZ6ReH9LYwbKSUX2LAK7hFkCQsG6G6LRnKbbWNJabFkajKCZnveqptDWAoZ44f6TU8DxwHfnpQ",
  "key17": "55fGU3EppViMnTvshPezLzAzk4dVMobFvv5ScG7Tnyz4beXwN1xAVXr2cdTaP5HgUJQcAKz8oZcXj7hwsnup5mMG",
  "key18": "4Yh1yXS9JeHFTebRdATKhM3YDLC8cqms1xYAy4dGzomcEnqTMDrNBTUnu4vLqnebH5nz5U93oEU2XiiQVhYUkziu",
  "key19": "39Ft6UUNR44ooMJG54vWawCrRUQ5om2RZix8kTsa4ao3yKKvNszYUCcCZjGQLykXsnnFHDyp8VFfcUaederJAQce",
  "key20": "2t1fmRATnTnV3EDs3KncJp5p3WDwRWyqgVpoH75sTbXHaConmDJajfwZDsKgrdZ67MScnEsPz7UFtshwk2XhjzXg",
  "key21": "357db5shFCrXD3Y8o9hif6hoYU2T9K5ueUAtyoYPwvFBtyrSuRdBpsWbZyVMQrfV5rQZYgJ7w9S3oCmHnqMXMpiq",
  "key22": "3XMkrVcZuRvU43FUSxKpzAuAWip38QotJfdP2sbGW2mNcnNjACMSuAHp67WHwJ78xyoETKd759xxuNbsJfgQ4Tv7",
  "key23": "4JioDV81KWdVM1d2RRCnuwMoQ854WkwrMmnmmXnr5ch5LJvobLHDrneYHbTPEL6EqdYAcCMEjGpzhZzLh9GZcGvM",
  "key24": "4UetHqNWXPfeam5y7DPwfdsJNgKdjRZR2z5xhC1sYrCvZzsL8dhbnzP1Z626s7scgixYMmZTESsP3dkPqUmDUMsp",
  "key25": "51M2iPSZjLsspr5ryR7REv9ZYFtTopYkryGCtF1fwgScVW5wvkxak6vtwj5GGBCttb8mbVW82ekkDFeG9ieAMYHg",
  "key26": "3WbqPQK2sSDzVnji9CEYdkU8v3sRhedR3KMHeSquyBPN1jhQaAcjn7Cy54avo8cts3FtuX6TE78rRYX5hLXZMgbK"
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
