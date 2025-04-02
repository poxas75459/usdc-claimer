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
    "A77CxYSWrJ5YWWztMuPSLDktqoVzof48oFKnwDec8UWcqCHJfBgeyfYPna6bcYuk51tpwBFaZ2YSnX8b64R7PKv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44SbDuyhww3977SG9DqqdzggpRMFQpjjvQm6kgWCLGa73Ar5Vt8yEgqq4qaC6oDBMT3eBDDPPzAmBm3QhdN5dRcU",
  "key1": "24199uBASXS241nZ8ToZDWJCpDRmox4YYwBGiifSz9RMCiNmyhFL6i6ZJBnHCCEurQcJL1sH6JM77172cFzhHEjB",
  "key2": "2puPmTjNRyv9kR5wCc4Py79D4j5peLpx26iWRb5fRLxP3mbZBEK44DES6mqiXBvkitFkgginuQNF4u8vBPwRN2GX",
  "key3": "2765WDDZLDETgmHvTzJhibSK1Zr8me815FpPhYpURuWSWa5qEpKSpfVhvK4aAKrsQ8GSj6sSAVjQHcud8Kmaz8iH",
  "key4": "9YxAFXTRAReudmXokEMMSwcu6xzwnaHZzyseMorBSzgXtQSK6Ke1r2Fv3RPdikA3ws8jW1NGiRCW7f9ZqQ4f3xY",
  "key5": "56ZsCcpwD3m28cBrPQEi4QsJrubNvUwZyndzEFfEtDBMD8GQcaR5pShaEEFgLTBCAEaMrihyv9HVn6ogKZjwf3ya",
  "key6": "47jpGzhoLKSfgkH6sno8A6xUZvSSAS5F5FdUrhwrQfAHzDJnpy2pLneEZkUZkVNhm6BE9g3Ag2eFqdQ9mFkZJNQ2",
  "key7": "4fnadKpWHihFjdkhzBR8R1M2mVGW7UKZA1xvWWgJucsmfm2q6ThsGtjatxyXDP57idnDJKt6pR4He5yg9mobVGbj",
  "key8": "3kueeBGq7u2FwFwHcCcYnteA6TdfnNvDzFwgqyZg6apdh715RGhyGXnbWiWGGnaFaLt9gfAo3DkFa7zZpNyDsy1o",
  "key9": "345cFoY7scrWFGg7idPt8dqcouRaSWDxoSJhBsTW16PdTz7PtJNQTUxZ89NXTZEaXhxCMWmejNQV5x1SUuV47h4a",
  "key10": "27S1vvPBdU56Tas6LLHpTWSxpqBfBCwcorZo8gQxnN4gZtrcVUnFQhbcBTmVWxy9dPxV7M32zQCJQxd5T7qDpHHP",
  "key11": "4ms5VMhhAdvSk7WpYyonnHDssMHKx1vPKudHg7WSGBd783FfbD6fduMCpZ7PnyZyiU2B8RpxYu6LxHuu6zK7tGW5",
  "key12": "2Aor8CpMba2J6Udrc2UMkdpRDTydoqFxqW4YXVxZ51JNrQZnGuSma9FThbdBRvMxF3jctXjoztCkHGdAndHqywVc",
  "key13": "2JfnpnpMxoM4Eciks5nrZ4cCs7T34Rig7AYobg8hrV3N6x3kQkZfVErqk8fRfzwugZPmwhamoyMbSwkwZbq498gK",
  "key14": "47z2rvUxUMDB7E3MT7m4KRePVZA31AyFy56c6188KeGWvoi9Yg34HbDpsfRLx9zjGjx6Cgseu2uNeYGoFz93okMS",
  "key15": "2ydpQJNZdmwxsvfCjTmTKPEiCWVeb5L25bYQBM5CVt1sZbf2JwwH9A7mf69MN1GGiHTaTQiCDNCQhCEgG1mvYvKi",
  "key16": "4FcQXGeDjbfwnpJhpz6wahiwYJeKmrj1UL1NhEdwGdDPnuoai1T6vXZthTxUhk2qsFoi7b23UvSK4efB1qCfoPa4",
  "key17": "2rQbTGyEjPkXe3YbdB5WSC3B6tZEvz3BFoLY3XaMRcvqhko8dgF1ygTrfMvz5etN4YaSCFU8sEj2L5vBEYuoNLKP",
  "key18": "Lbbov8XgTe7aQGaCXzgb9aX3W3KqzHk4XXko3GqupXeygJHDJS3aeC5dEFVVxMRSpU1JpdZy9vuXmQ7u191sodk",
  "key19": "2WfEyYPm6LRGPnJWVK7wpWQiuGLpFqdKyPUtcQEXP4goPYxchnDqSXEdqPPxr6bFH6eb5YH1yDbMh3Fv5aE6sYmq",
  "key20": "5NNrhXkLrYhhPGvaMGFyvKJmVkKzat4PaR5KPCLuic7j1otRtgf3oAw3jM6w5hMJ7sEjUibD9gLC2cF81jbcwfiP",
  "key21": "aVVL5RJMBMZeGV6tWayzUtg3AMiVYCYvxu1bjzNqiper6qGA8oHzHafFukUPHDr4qiGBqQ637FHpZ31fe3MxmYA",
  "key22": "4XWK7rnG92W3PoLzPYhqHHo3DDFQneR6gPGBy3K9KgbJaoDHyasK4LuPB7279BRSStezkcYsGH3wwRoxJdR5oQ3z",
  "key23": "4ubxdDpBaWe2Y48KXaf8NAEX9JuKcxyD5DEJ8d2ndY48TX5KgFgJ9HTghJnmbKXCFHTE26WEZ4wQYH5v6dC4CJT6",
  "key24": "4Q2SGB4YenL7objWNBb7YkuupbxgPeJKuZ68W9nvAZWb2qm2uiH6zfG5euAYuiMa6mUn6dnuo7YzSwMKDw5tnzpo",
  "key25": "4Yp1suV9J5gHewStfKR5chfRb4vCsaTtZ6RyRvUJH6p8xHVpB1gS9fbi9rHW5MF9jqcRxHtAwmv2hC9RBy1B8HBY",
  "key26": "4uzB9cvHcnFBTm2Jwv8Q9zyhNUhhbcGE5DvGNdUrbCCxXC3bCtrws2zpqcuD66KFS64NW6ybbQzLBDhPVKArz6Si",
  "key27": "52UMjnHYoxsgfZKGvqnic2FnuqHiPsYKPW6oEfQKJPwCWtpmAMptrSFpFRGmukMugfyLskfreKmnWXRhh83qPmws",
  "key28": "221eQiuNQj8F9f9jV5KBsDoAanuMeJ1pCCm64G88rPaFKPaX1VQhC6dmn3PP4TewBmz9JmhipWfVQYVYGAYN4ykV",
  "key29": "BVVtrksQYHBpyD7uDRwFYqeZA7fQTQgUw34rHbnDHU9FxRhzmF3btkkHrP85hNSKBVwEdktZ662HD9fa39qouR5",
  "key30": "5HjEgQiqn6AvLgatFJv64ZMDeQnTiyHNQTUYnHRSpVZfrTvgLfQuESCrnwf7fPnLMy6iXzYaZXF5tjgoEoYuBncS",
  "key31": "3TDya64mWcQ2BxkneAr6hiewU2MHzUhwzwTUUXMqTV4Jy4NFgtikzmkE9aMZ9ZFo8fciy4eMZunci2eVZjT5i8e3",
  "key32": "ZrCu2AeT3GwJiP85nSgM5aTMjXpFw37DePg5cwvCrv1FVHrFSpfVo6DgSVNGazfUTGtAm4rVUQcDTU5zTTJPmBn"
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
