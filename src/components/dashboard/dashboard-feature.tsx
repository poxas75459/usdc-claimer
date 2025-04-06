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
    "3cRgKcYXNNTVqK5a6baQE9kwAnHoZ1YSi6gjoPiJN1cuuD6XRpbVHd4ogXVKZdK6vkdKy9kfr6SGE8Jd9dDqYiEw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EyaExbRB8QFXrUs8tgmkcfaCFDE5cayN5Qswd1Jewi6tcjgiLqfFvxQrUhP92JvTGWSZwGfqsjYgPu2Dera1JhN",
  "key1": "3wiwvgFiMbokQZGPVEFkcc84ZgdDm8fk6XnFosEDghHULydYsnG3Q5E1FebeM1JNbawSYEQQrvTvf8GN4tnxu87P",
  "key2": "XUU1p7V4uxtfzkXoSjixJf3JmZU9BkBt8RXJE9ouPkRn4xY8aWhUCM5ate8CYHqp5aBCMC23D53wUWMfKdpXLXi",
  "key3": "27hpbce5LVAaaJDbA8Bn9C8ewGrTUn4gdoXy2tBFwBowGoqhBawopD7xaXUEkw8nHPwcXTW4Y6LFRpc8V7QigAL1",
  "key4": "4S1Gf5Ar8hBR4MkCYAJTWvRSLuBCUsoctJhKmCVzBUhejenxcV3nYQPYfPSe9J8YGmETPbefmCxd8LUk3iL9sxf9",
  "key5": "9jqEA3QPHtsgpq7LwGopFkScA3PYHSoNEeML2PYeE7VHTM2UcZitW7jvK5VP5ydohLouiUV8dezqKCPZjHtEoCW",
  "key6": "2EhhT8KoUUDUqyXMPq4rAMVw4MgifZpiSs66ZrtLUx6WJGDpii7G2Z1pRhat2B555uVFP9mVDAaXsnQURRhjL6a7",
  "key7": "bwz8XJLeDEZ18jrpja57JB1Kvg3V1b1i9HHtbZRoEfarT3vymGQdQN8TwfUVPkfpk1eXzWVwnSqqEX38tD7qsDC",
  "key8": "2GCd4mNT6ntNToFgAg2t6J5MMCasWsx3Y6aEUuJ3bK2Ug9xcuRq8cDhV6dn58PGvC9fcF9edYxLkw53AKnCmPQD6",
  "key9": "4jBT67N1mR7FopQr6broF7wMckD1Gcf5B6WNhfz3oBHSWZdWqvzdTbJsRN9jFv3fn5cTr6dX3JpHqhjrx8yYs9y3",
  "key10": "4zJsHdz7HPkKKiefWqN9rc6ZLNkBXxxhx2quskzCUFGyz1RCgP53STwuFAonW5f3SUYHdiF13peDh3ofTmN4UQ4x",
  "key11": "4hnsNMRw1FQH9GHPZBb1ty5TEx9bn6awsJCvj9LYFqBNCvCyeCDjy6c3iW1NZLXNkcENemohcEx4nxLrgrEfAbzU",
  "key12": "wkSBWg9XqYi555v6bHSe1ZBTHGMQ7mmoM7re5EmXSeH88vRSBVcsV8itxJVimuDB4Uy3ruiaVzqHtWNv72QjsPe",
  "key13": "4KCGUQvG55mQfmMXKRXzjxpiVbCStoyBMgAexvhqKMeWsDwZYiodybToiAtyRKnwb1GvshNMuwHHXLE8TvBwhJMQ",
  "key14": "4bv6JZDkK4io4w94exneQv14DWFacUHRkqc7uYWJL75JeiZ7KZfwKDvVYSwaK1zzgRtSUDKBurBkZhPNSoKtg6WD",
  "key15": "5VtRCF74bh4kysiaXUZfu6yodrRbA7xhfd3d2kgec5hvEFv9ULWFQ8945bdN6XWD239oj5Ag2uEsnzLuzBxAitGC",
  "key16": "zC4dfAATE3Y7KGWKJR5GMgGrcyaQcf9njrZHAL8rvbDd8StQtzyZS84BoHvgNRKdWh8sYZ41FHS7kQa29ZLeP3f",
  "key17": "5LytUDCoJj3WkPunHW3Nkf9VHTrHY9171Ch673fz5vyDRzyc8ZEW3Pu62Qarde8UREhoK288ZbDiNEnzEtHzdbEi",
  "key18": "66vdAa3gDHTq6EXVsEjucsrQdT9ST1EBCFbFjJM1aUj7UEFvhTKVsojUhZxLbuTAxihtq62HTWxPS8tQFNJKncxu",
  "key19": "2RkFbjcEJD2ELcWZgL9EM3BKk87bbPvkWxcPdxeQAy2NrZUAZdWeTftifFgyonWX8fFKazFqf994U9Tk1Fr7wisq",
  "key20": "5PSCXAmbNSKHs4gxDPXJX2yJinFYSRZdsJA64K666SKq3Lk18bWmBx5VFzZ1JdyqV9sJLys8dh1zZUHztFa6f6WB",
  "key21": "3raheByZefw7mAxxqB73vUT792g2dqXuoQ8uDRCb6h9WtwWCXKapsmmgHuXy7oVHNyc6yofXRioCT9kCXji58zKt",
  "key22": "3emvd32Q6p932Eb4UPSmLscshM3HBJH3eKw1yxZ2hTFDdjxy3dfRJSaDarqbibD8rWs4BguYQApfxCZTizQGt5oN",
  "key23": "7NgKTm5JLCLen5z1YUhV9oAe5XdrwyLECsAiVLSLmZ2hRtkUfVKBWcJshb5WmF9bP51E8U1LNLdopSL5mCJD769",
  "key24": "56oAU7HrcWpzzCAbHnZjDpanHyzgec1aQzvnhdgRybqLKeyMZsbYpC3XWvS7CG9pDb5mxQxYpXTRseZTuLoJYYnn",
  "key25": "24g9WqoHGXipMkhrk1xbXVvKD3uPoixq8dk5Bka4SCY35K4k5prEMusn7wq7csdbWfqgu8KD9LhCaRJXEGourGVC",
  "key26": "2k8Fd96mVzeuj7qymv8c5mAUEiRNHgUbVqnEkjN9qnVeXbAwehyHR6gXQAYcpqdgif8SZ24QCCq1peraw2P6nvkh",
  "key27": "2g8TqC3yhWyTz5xwFCqiXPTthf2U31Td1QfWjEXzXsAsTo9Za8BQ72n1xqyqfrHiia8QQJ5bNAS7op3FsgzcQzcL",
  "key28": "Hm72WM7jc14HuDFHdiuypa3BSyRDpvrA2cWiNZo1FKbbUgZUobciMDxKDMPXDwAFyRdRiZhcF3nggmL65k1nGqe",
  "key29": "5EYbwe9dQJpHY1jM8gVUUP292Wq2rMTE5hXDqgQRrR49mTMf1LWdMxgG1qkEX28xRCwm7YLnvoUgwgdmBfdPG7vj",
  "key30": "2vJS3hzvfs8NVghgQ9GfDLts6cv5Fv4bgM5ZykFPWLe1HYD4RL188Y8mxKj1bKKw9Qxy7HyUtAaeM37dp5yqwHgB"
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
