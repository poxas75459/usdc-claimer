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
    "UyG4zTyp4HFHz1SkfuykyHJNEbEWoGpRibuBbKm8SqScPRdiST4VTNEAMgDwU7dSr7CGPNgjia4ovtxppJevYok"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SjtFVpvNsK8Sx1h4nYoYvSNBigsJbPmws1ux13XuXiGduRZXaWfYvZCxJ1NGuSzVSKHZVPzCLHgRHxQnM5JFun",
  "key1": "hgUYinV6kuuC5K9WpPciPBW84KWjVBZg8MFaQwKGQL9f4ZJFrtpgFRQfJGJFmERDnvJeBxEGh4CJwPAazwbSHbk",
  "key2": "3GbARKJvTD3QJWxK3zMNS1fnXnEwvGuU26hgsPbP7RzvT5u5PYGVQ7GFArtpcmcJ8yNhZa3UpWq6H11QYxEUE75k",
  "key3": "21sK2jPQgAu3zVhBH6i8bBdRipXDno7KHGi7z7AhhCtkzwieh4UaCf9vThemjQBzfmSf1jCryhQ4KDdnXP7wed7V",
  "key4": "24KFz72WnSzXbD1h4JiK3xkdJdTrHu5GVwcDpAwzY7r1MyXQQ9fbWQSvLGcJQ18fRbALnNFpR3Ke8CUbrhrHAeJP",
  "key5": "51U4AH5S9oNZFaxwEJKCgGUHeBZbRL1wPQFwVzuucrxFFk7DWwvmpm7qVCoYoKrC9bd9VsBZ8BLAycbQ1gxYNy62",
  "key6": "UFJdHrL9tyHj9V79ZtZ1hs8CPxtDVHbsSyJ4g2e3AXtfPz8wnMohtS9Ky1WJN3V4ZBR2cQAtrPjDMN7tQq16bBx",
  "key7": "5a3sfpqWs4a954hjKhixWYMexaMnWxaG7QpxG3PTQ2DbUDG685cHmnAmin8gY9eMrwhHj4y7x77xoAFkuVgPXDWt",
  "key8": "355Zbzg1SZrg36eberfVPU3qhasaAnpQLFcYMifxvA3HzgJzMnnUsf22apRj58BuMpV4uv79sekve1rwJHX6fhe7",
  "key9": "5czxxANXzmzyG9K9wsT5fpY6jEGmpjmzEL2xgRGJPWVWxu3SxVqX2KrcsVedJVBCWTCHy5KJKaEe1dtaPdGAwTUA",
  "key10": "3Rx6y6b6h84AeTT6Wy2JxRDyHtdb83pRZAPXFs1v16D9YB44suyR9NaB1wDGuY5CCHeJ1PMwnkG5YFY5MfEq4j4o",
  "key11": "44fD5pCMqsbTomeGRTQ2HtWBxDFtdPscyARngGMdNNWPYjfkaCLh7VSZG4v36s3nHgYHMM6Y66Uoeg2T5ur4gpNM",
  "key12": "2FKSbjK9dtiLxmkxyFg7bqP8pdEipn3dH8xXfCNPTByyfJAHxDpJps31Dj3X3xNMYVACT7RMpZRsssD964DKS669",
  "key13": "dLYdU1cJ8ZtpNYgT2buRXaqar3RBeiLsReJ3Rzxx3kU7cUKKzri4VPVjwnt97XgAxQbstPhdTnFcwkX5iRDr1DG",
  "key14": "3pVTFhWZbCEhnhBMkQR2R266c4tmWLBSgsD5Rfmm3pAd31b5uVef84sTYVwyfpYzvZDJdAiUPy4X52t98S4gPFrc",
  "key15": "5xrepoStyz8y1Fk3t1Vv27TuG3Mw6udF8SERAsSS7Grk72jyXbDSiidcc8LL4RmfDBZqYsZZSAA74sHNQofbfqJw",
  "key16": "4Q9bfYouuaHP95ee4xbsea2W9mmmNj4kZuQnxC2U6RcKVCQQxzWP2WarXwyfr8JCqfrVzVWjRGDnCxpHAu793Ayz",
  "key17": "42dJVcBSRo6ntmK731YEzHqec7Amk3UWFRWbA2FSsoDFL1ApJbB11GethUxgyjBfXaFyXMUWmYekTzuPryPFjju2",
  "key18": "2NmMnFSM7ajYhq4XaAKyS4PLPVk7cjWJfypr7vWxCYyCLJBCZYcbabkazGSD6LXFPSiKZTTXrfAReoqS8js1RCQP",
  "key19": "2uKaXgoLhpvpBD5g4qYxpvsghd8j3NMusorWuTwCtkDrX6nWvhXiL2ko9vzxCN8E64T7tJzR6ZfNPFZkcjwXvX7r",
  "key20": "5aoYdsux2q3FSMpP9z5Q5mkFQhacSe6JFADQCB8Kai1piWpekUmiXexq2UanVHukuqqwYhmNgW6k1ojamjQNRBnP",
  "key21": "5Qwko6VADxtneLk2qTgSYqueNMF2MrDnKwQy159A2YYiM4DFukN7izv2pAfL29LXV1mhXyhMtBMfjXkq3gaEzk1j",
  "key22": "5GpqgEVpGeTFw7kJ7ZpNGnEiKjSi8GNE9z5TsxLgxsQshbgGs1NjF1hff8e4hX5W9S1YkQM3KZXWzjP9BSjCBpCF",
  "key23": "127AGK2YoYGkxqMSGuCNmrUhEH69JS3QCFsEGquZjVogtzmapsRLk3HSw8MMH7KeXWkJBNtEWP6uPXSqD1zTCEcs",
  "key24": "3DDG3kD5sHbD9eF1ofXNhehJUkB12q4SbnHodC4qB7BhywVFyBoXRmCfqPxucQihakruTLPteEiHWibXScmTpdGm",
  "key25": "NE5NceWzBK7RjgnN8Vj9CAj8krQzM78cnfSUSHccHVV1kPim9FJnE5tFwHfxn1cGR6PcAHJtFXuxKmfU4qZXoy5",
  "key26": "4hJ26mkozzqeLaCsvVyyEwWSHhs9EiJWYVroqWJR2f4zUUcMUEf5X18YNVW41HUES3nkhSVsMUvUfNY9i3zKe9HE",
  "key27": "BKBC211DhmdnPBMZjD9nrtqAJZMB2kzk3fKYLMWJHyd1z8SMvQU3EsHGQdcgeiHHA37vbqngjCyj96F3CxiPfGa",
  "key28": "45TizPZQV7PtnXXEkdVc5LU7XE5XGZYCfucee7PcFQzLqoF2eqSRc2E1rfxscfN9LwdSiK5CAZCSUgd33tecH3ry",
  "key29": "2v1P32jZcRtUgepk6YSWe1tNZfFPCeasfvke4wvqiaLY1ZVBKLZMYkuvakCS7CjSFwNCCp3Nn4C19o4zLMw7wPY5"
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
