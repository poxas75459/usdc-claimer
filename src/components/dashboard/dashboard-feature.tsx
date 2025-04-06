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
    "y8hJo8VU3pKmTuf4ZLRbYrRfMbjBsKMweVC1kkag1H2Jbrz2S3bWSDiHvCrdSez97Cs8qqa8DRNWJUqhhDh474o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dBUtrRmqFbmKQE8PBoTyAq2pczcTtPbpdTsnXgbQR3kyYPDHKmV8vHqt9h5fZ7WKyZfU85DGtf5vmrvgdnKPbri",
  "key1": "547grVtzWJHBAdntwxbeS95ijEHGDMCNydZVeAMhwLawEJpFfwUrZ6t5Mrr5R2Rcm77LFzNSd5qiXuQE7HiQNkeh",
  "key2": "2pY4D9KpUBFm8b5fBU39ZY5uXKRbJuo7nboxjMPhZ2uC5FcKUmd94Eujp8GLybftUcyjSRHfpuR8BTcAVxsrZnQo",
  "key3": "5Jw2aCn5Jkmwtiw1nYiu64uZEFyBEauUaBXhdCYTXUu9x4d8GMq1oMRunvCnXMcqNkxMs2ybgMN6wNNAj8guizdr",
  "key4": "5htpidodnZ4cnDgmo5pi9FWBGc9Y5A1yv36sHGQHi8fC7jSF6aEnJywEUFaC8de9ZW6KubfkQfVcNpZFQj8H4sg4",
  "key5": "4LyBPrgi9nCKeHYdNsnPmfWt42gNeK2i8iaEDRkuk9sf8GP228wM8AkymNLfKXhdjJDCFqh3qGDKxcg42NGWQnmK",
  "key6": "5mjQuiyF8ivj2ByFsHLL2RMkWck137L1aRjroZdphQ476BQeZp9cfvk1Lbt85pPCkCEyW81Z5dBtgxp28Ji3wkwJ",
  "key7": "KAWQuEtHPZco4dSdXwb18zsHZhEGMCpAU4yVHYc86MvtnkBoE6LVwWEKWBBGYbPmicx5Bxe1GyaEcAKqT5tW9GR",
  "key8": "2sNXht2Xv9DZoDsaGnRA6w4DervKiQaZ5R4NE6ST25JYbkhm3uxds4aHWk2qowE3knDmALQksqxfQsCXvaRxEc3v",
  "key9": "4JbWJkEn4mqyGiM7jgF29ZCi44KyCVsuAW6XY9Fm9BvupQwTRy5rafXDMbvBB4vbQVjTTYqxna5DCYT23Ek1QFmb",
  "key10": "46gYbXcSxodkg14UApbrxfUrrrbvmHebvxnHE9e6tMV8Lb3kgz58wjPbpxoxZciJ6M6hRBtGyY7ECHGRyt2up2dy",
  "key11": "3CxBttJJjRkUSGSb46ad64FHPmMkPHZjFrHA13bmo1Q3X8u1xMHji6YxQGzjPZJkcAhVQM4h6pLs3z6pohsBV4mN",
  "key12": "3onHGyQzZFaf2eeaXBDsVgbUpsR9AVht6DQGXSSBtpkAwTQpgWWNTTmWfvfo2VR9VB8uEJqwNYCEc2yGsr3zCxXe",
  "key13": "pDqAue96Br2yQ2BxumMsyzZWk71w4V6B2ED4Z4cru6RSy1V3W9dMw2BYJk7VoCZmG2XB2qCqyUCsnqy8HrE4BkE",
  "key14": "tRpu4PFV13YyhFt12wMnqMgR4GiToo91nYTnQ3sSLCNXwhGMuqVjL2L2AFBLKHqbTgYc2ipaMN8j4JWZinCyw1A",
  "key15": "4o64cJTgUXKWfo4e3ureC7fUTb2iPpJbaHq4Bg1b8bgdrRjMuQtMoBsZqKZjdVfgeJx7sm8kiGKHHhP94bWn3AS1",
  "key16": "4s549BWceZNqpuQB5aNScpLLjBR26AaPoPMmKPkcfmnDq4zXKhpEzYBjeJ49SMgEXQqn2rwmn2Z1nwaavn1SphPF",
  "key17": "2EG8mgTyvnqT6vswoK7T5epVntf91nN31WGc9yGAeQp8Y8hbFUs8TAebNUkhNYHLYRoHFctpuujAbuR2ygBREHW8",
  "key18": "2GY5jGPHd3EpXDWALCLu6tyte9LjtewyFXPT29S1SaG3ZqQJU9emaKep4jT7SG8BhDGLWb9yFQZ76x8j8VE2aw8M",
  "key19": "3knUoaoJcMBfCPv4oeUCqmkLsTK6Kb5VHtmKpVRC39L9nZ3y6dK2NicBRc2MfucNErN3hQdirJM7wJY4Dn3BTEJV",
  "key20": "33X3hbmk7HUKoStj513qTnZJnacM8bLpoYtNmDayyLLSQGr938WdSqubccMXfcfk2jTQ88YbvnBWnFfzBjfeVgnR",
  "key21": "4LKoPihVJ91dnN4soBtdSJ3zxqaomWUHTncH7isg1ycveYfhma552ibKp9fiaTNgaBLw7JhFxUxBaeuqdJUmEdjF",
  "key22": "27AyJHSyt8hCsMcVmbdwTnXgVEcEnFDx92tqiks5MCs6uAhmLcdxKHkT1W2ARX9JTZAyHsoyVpYdNbKVzxZu7Brx",
  "key23": "5Uc9VSKYXqZ8NBB4qsjLAXcrLg2iuuvcwxZHcXQmMAns7XzohHo6Z3dXvQAZMmiR2h53RHA9xg6rG9347dhgN2ug",
  "key24": "3w9HP2MtjJNrNkoq7CR5TqzYZrAKA4GwoToMEhU78EVbmS19LbBoUbymZ1a8Y5rF7FwiJHC8hoXWv9BpqV6Z92CE",
  "key25": "45dV3oiuPJAtTuhkEtkHWNn8bKXsJQGqT6ceDtpbMBgYvp8NbxsELRxWaDLVqnmc8o7Dp7XDJKehMAWDdhsG6Wp1",
  "key26": "2zMNRpCtsqqzp3Dk76ktkVjNyYoBUD9VRGLS7pH9f4mVQcCaG5S69n3ba1N8PbgHvC4wC2e12F9hgbGD8HMDAhzs",
  "key27": "5dxnsMtaEzZbWU9Lcbj84z5fzdxtCLA2Au6ix4R5kttRaBMfLnzkMWPF4DE2xBuCbj4rHUNmoKWQ53vPMnbaGjSQ",
  "key28": "4GjdWUkztgrEKx77rNQUGtWCzm3hUSwke3kWALhjBdfTUG8hEZMar5QXis72iMWKgxa5Zmsn9Pt8GL2YS9Tq1tPn",
  "key29": "txwe93Bq6Mi3NRteRMZ5jqQo69frH3MfaGXstMywQ6Kd1Q5tKD6og3cxWWV29zzdrnvqAaVwcxDasX5PFrvyhvN"
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
