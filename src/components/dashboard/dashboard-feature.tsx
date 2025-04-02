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
    "2Y1MzAfi7dWyZb2nLwqbrcGW4wEYYD5Ht9GxB8bSubVDhvgN11HNmoJdRgFqJTnkj3c4hqLFYXsgiujF8RHScbEp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eygQquzLTVb6zw7S5PxytiFvvhHtjBeve8eeEJD6EmBTTcX8D8hJEZQBXEvcDCLrdPJHVhFCzp3cXBEXQxDi9r3",
  "key1": "6maBBGfKopyH2623JKxpnZaShw4Qbm4cBZTsQQDWJ5kwDzrfMnXXFy8kiQAnmoBqXHwFPKkSCRnWRRsAZ6fYXZp",
  "key2": "QKZ4Jv3Lvuw7siH65wXbqbLJGMC9ysVPqXSV78pN9ebzfkYt8hoEVWNHEZLpyUSWBfg56nuDzxn4hq6T3kQqnUw",
  "key3": "57wpuhHebwW9wNffhbrtiVCcYU54Jun7jm76pxYNCvSSwx7GJGeytYjyChSTezkkvFwJHhnFDuQzPGAhY3r7HuXV",
  "key4": "2qxuJUZjAZL2Zb6jkwUkGmSrKzn3AvJLz7YKG2yb9KonDcb4pwMsNF95LWrpjQ8DcijcGuqcvtRC7sCqFEnQnMPT",
  "key5": "2ERdUHGJARjX9aduEXftwHdhaTFanX4XSfmaozeW1tZALCcmFcBxWPeYiuM7XXXfej63du4n4ZyMqzxkTZgC7g9p",
  "key6": "4LUkApv2cqF35pk6TyjFxmqY1VmbWFeSLzDc4Ni2uddVLmmdjW5YA9meGvnwWu6iR5b6F7zThE6qNn8WKZjCjp7k",
  "key7": "5kfDLukqmVjr3EVkE9RHcc2L8Kb4fiQsZj41pfESmzR1LignJnHAHpNyuv4AaGYbPLAiLWSUJcKWJ2B38bgu8bT6",
  "key8": "e8NNoiv7TAyqRwKiMKjVBh2FXUHCL9SJTkFHDKwQzb9Pusn9AtfuTSTfGQE3qqnDCKecQ3T372BkE2RQYkvxJ3H",
  "key9": "cwuPXKDsbjm2iEVMF8wJ5DeEmLLBZQPWK8TCjdkQzTK3JXBMCteGcGWmAV8GXh59wowgxhhsvoAPtTUkxq2TZbN",
  "key10": "5w4P47dhMu4dVdHwfprBUG5zghGL7VmmV5W5o5C2LHxm8kDtDCyWYVuGF3rKxn7tZXH3rhHNcgKWU8rBnm3nHzT8",
  "key11": "bphZ32KhdmkLUJYwQsXEeS87T89u3iPcw62UqrmUWigHSqc1K3K33sZaVJ4b18qGp3JMm9VCJBo26uCdwHfQ4yJ",
  "key12": "4BZLKHuhPdjhsx5WziJicgWYgS3m45nnSY4ZjPwJtL7xEMLk44LPsiRURN2miXGXZTaDX6cbM1FTGGG3y1ga8jQb",
  "key13": "2hUTp7Ve464Tdak1pCxBwgbgca1eD2AR2beft2obaqQwVzh2EqJx6mtGqstbY6YopgVKworzRv4z6TutQjgUsJm4",
  "key14": "45FRuFZWNxVjYVPeqSyzD7buagigjHu27fUfQVFGsjZowbXCTk7aaDyTnua32AuMkVX2LxfXbPoHvq5qwMGNGzcH",
  "key15": "4gyfprkP5aNKBmovRp1cryPGdYRZqPn3EuQvzcwcuyh9JH1AcogGWNtMoEnMhQPeQ3yvigV9Jz6BJxqc9usaHsY5",
  "key16": "5kfPTbfJUqioXCSHkPqZPdT9iqe6zgPKYk4rKBsEvVSPwFuGFbahDYprsKBv85viyvpQGJVf6xZ2E1q3bN3uSwKC",
  "key17": "5fbBFhoMzcSmtxNWiEkLnciTptn2E8RH8cBD4Bzhps1HGCw1LzR7A7gZiJXoV2m4nmWDKtosM5UvjJRCRWusJem2",
  "key18": "2qWhMAjo47piHFKmhyMa3YeA5jXGRvTcet7ncyTEdtbiBeWnzutTBD4DYLBobYYRkYgCD44SE81rfdf9ETH9pNqX",
  "key19": "5r9Z1mKbbfdx7wLtxun2DuhL3UuAeABK5tuE5HpCBLFB859UwmkiauGVWeho2GjKocCLmti1GEzkBsvZL6Pwaaf3",
  "key20": "4VFeNQvKMYk9ruoxiGotMNoUDeNjHymP4WdYxC5HRhMXADUFTwnFvgBkLWHyLJdBpB2xgSb8xXVSyp6DC3jerEcA",
  "key21": "qajYELqzu96cUtDT1pZ17U66aYJQLV4kTEEyRqjY8Vj5mAR2tCSBpuRVdodfQEbif8ZKGRc4WTfiUZS42mkeaou",
  "key22": "5R9TUcR4hwwUyskRGoc437A3jHJiGsEBx9MAmcRPJTDecd2jwHnqiMddT1bLY8VLkx2rA7S1idTW57TdSHamaQbE",
  "key23": "4z88psQuKLsymBcGqqvzKrbpt4B6XfUpyyWuV9cMNsRunjr13MvV6bC4HGqyUcqUyFSHu8Nap9mksFv5KupD3MmD",
  "key24": "5uxe16nxJG9V7mY4FvevGkLDCyNBs6cyinc5dwwXpDtPc1mBuWXsF5mjCSPZZeNVXxxRYQBQ6iNdz64m871wE5k"
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
