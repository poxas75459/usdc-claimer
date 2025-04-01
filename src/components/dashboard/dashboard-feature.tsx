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
    "aPJjiVUbL4Hwo3NuKWe1iAdfHB8sC9gbreiE6sRcc2aF3tqfWqC1mP85Tq1MbTSatk6Yph6LEiKsHt9yBUqz4RW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49kJEYx5q6rUjgCe6JpP2M3rTqevBrih7YkvtAgttH1PnfbxpK1eztkMvrL6pFmZGfjffwPUDNZ6jSFSMdo6rZoT",
  "key1": "29arULvSCCL52v4vciDsVnQatNkf6oRrWK8nWgbKkvsh9Px6u67EnzMGa12EFt4asRKfetDuQNcZZjTDhTyTD7XX",
  "key2": "2NLhKUbKS3LFUYZWnf2Js2UM55NgLAKYH4Z8GdqwaqjhAX31s87msZkXDXu74h5KjRzadyfWSH2e8Zrx4mQ1Z6Q3",
  "key3": "38G8D8dLBvRJ9ByrMX8zKiwj7HENxmuuRd2YRsiuBGDpELMS8u15MbJFTDiLvTa8m2XK9fg3Qq3bobcQAia6nxL4",
  "key4": "hyzuZ3VREF2Dxde3qnHARGdLxf9W9fqaitSG3xfYKnA7fMTum1eKYCut1KpcSAJCixc6myKUw1bKXkNQUFKU5dq",
  "key5": "27Uyc8LdJsfbpC5SgxXKqJTg4oSsW99kYa5N5RxySdM2EmdMQWJF91n7qTddRsGFaExsNaeXFzEqARy9TTRAgcEb",
  "key6": "4RHk8evi2DekeKg9LpMAHVKcxXAyTHa9jvZXccR51BtH4CP7Hb6aSUGwZfGHSkhRxVER8hZ2yhEg9iCP6ydPB4Dx",
  "key7": "5rXWw9sw2papA14jWjvf4DrGeS1JSzC87g9UpPmGGhsQtHRPuLFcyyZZc6TDzGXHVocPFCCQqxrC4ZRtHGkoCxVR",
  "key8": "2UsUToHCdkUTjf2UnPbfDsUVJ5hTaH4CUZaDTsb1fhcYKfy67bZShDNokvsK8GWacep4tXhLuuM2T17UQ5YLmbjr",
  "key9": "hcexoNaD6mm2JAbag2jL89odETnq3B9ANLZKXV7LxLQgZ9GuC5P6GArQnpdkJv6pPzKroyQ1iR39rUEeQp1Kxsu",
  "key10": "5jN7Fu58Hn3bTsUA3b2PfbxUZDNvwrohyBNgqRd9wkM1XyyAGCdPpKAuhPdtCdu7mz1pof1Rqw3X3seqrUbQwPDc",
  "key11": "WFUwbXzDq1BYb1r4LNbFucT4RYTXairP7i1Tk17Xcf8cq4JwzT8KzeBWhK9aYaMKrkZ231DZ7Tmv12ghc1S1Udv",
  "key12": "3MmrR6JxEjkWJNNTMozjd8SLH8qUtjQDZosZhNGMK98UqUcEN85kEnqvHTFhtYmDEo5GBD7Mi72EHaZqt4D5o4Lc",
  "key13": "32zNhKVQHQH2EDmocE84hkbpHc4ucp2MfkftemeK64EExWb8sDsaAnJN3WC9MMRvkHtu3YoY258iFf2rr3BCJ1Mn",
  "key14": "rM4faZZ9iGQiXMiieBkGSpPwAMnL8AusU4jFh6bLfGEdHZZhcyEgEZidDyXz7G3dwu2nTN1j2SPCEWMAn6GewmD",
  "key15": "2sFoQHoWuP9Kz3MoaFs6mSYqXnMGDjbF4CKWWhs39ZX4uFaMvFg6CNehd1WgUgNQQc1oFSC6L94pcdscV47938gH",
  "key16": "562SbX1Hxjmb2Bu2W6KjjzfHDEweTDQq9Zvp8d3ALwujNfqEAzGCW19baiBfgwzohk5CmyuvgZjCmfdN3atXUrbc",
  "key17": "4KDdqjT7FxqcTU6fYHQA7pEBVQ28KGfu3j4EwwaqyamQ8bxh5bd4VYXUGWiPHkPPhFWWN2bGZS8DJEA2ERxHNgS3",
  "key18": "3k73j9hqz8Lbvdb77L3FDxRwyUBjaRdV5XKnvNjgwHmKPemoGyzy4VnSKEJckYW1fJj1o9pNxKWo6hzbKK239oS3",
  "key19": "5nvL1DUiViw5mJpHNyxv9tqnHRMxJAwv8cGcQdEZf7CW2o2PnGRA1wsMiFz1yyWdg2SLs6SXJuN2hhtfmMSKyKmq",
  "key20": "5hJWuF3YVdFXhBJmpHGXCHPKXM9eL4yCU6d8z2dVjtqkC57zMHoscSwLW8DivcZvAJek5WnqX5vxH8PL7hZtYHb8",
  "key21": "4jkfd5cB6RKiPe2x5bzyJXzMPF4gb6yk2Cyc8Tpk4deqvZMoaczpjuFv1bqCvULUMfGF7wSTAMhUAjDCZrFQeMgB",
  "key22": "4HZC1GnvNtkPykVYRoEFQVhsFGvqRK3kebLDEoxRuGdAp1Nqi4REPAU1P4qTmPfL1BpxnhuwVoJmAb2rHWdYsLNT",
  "key23": "ATeN1xwViYUmZz2f8dAEH6zKwAebAn2Yo54EmHJ4CuGgNdcB5YseqBRdPw45ka75PH6kjxCsbpjmdtrNS6rLQa2",
  "key24": "dKujuNbWeBg6TNFKUCcVsPug8mKJKNAMe5kKbGMBFwM1L3WUYDWJQfExf3EaT953zjEVcNaj9eJTKjm5VTqnaGX",
  "key25": "mPfj6xY8zURymWjuYzRmD4adPoqVbioeFVM7Jc3RG3ytUqaAjwRr83Qy6C1djLWbmXXyzE5CZxW9mEPyikLFgWQ",
  "key26": "3BxzFT6bcfZyvTyKy2jAxWBQHHNS6buQ1kF8JM6y8LDp87MiRUG6EhVtYfZzPJ4MLarx8TCDXrrPqqCug6A2g3UD"
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
