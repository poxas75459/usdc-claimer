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
    "29SLuzDaRKUiiQQSpnyEFaWJ1jAJuBttpyaBCiEgKwUi96MYLtPvrxz5KFk1Xyg2mJGoGgvZLXxiohUv3FJMT5mv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f2jFQFckye1gqx1vEURxe6izFWs7XeoSBBtd7cjtJu3TieFG4dBMXSctEzzVokNHenRQePWmUY674k8TAowznDo",
  "key1": "5LY54pzDZdsmCua3RKCs5nJMwuwrvEnpjpxYcX67Ywxv4b2AT39fwegXHvx6vyoQhJQSsByB6uoK9VKM9xhkCLno",
  "key2": "3Ur7W9iA3QMocShXasmszKv7VLCmnkeEe4usBko3v1DokPirXDLitDbtcxNEoeNjj3CSzdstKfDdJoRhAYHVhYP4",
  "key3": "436BhFj7dzTm6HfRiNW1Dk6x8qrZ2c5SYJyhDMKYASQ6xKduWSDiGhxKG4LWL6pS1NySifhgC4oeFk9QFB6Xfe2P",
  "key4": "3oQioLNsUv3GB1GykhyytrwecQZN9UVkTK3tyiYe5XQKjm3YwY52tD4vqp4jkUtHrNc4cJQNfW1yJE5Gwvxtotwu",
  "key5": "38CF33A7UDyXMx45U1knAXivHiHFKJrqfSNo9hZ45baBYNsHGyCiBz676Vw6uPMTiA1DUZTSxkZYtvknpLHvV2jn",
  "key6": "2Z5ZiL5juA3s3r1h7uzUCif8nHt3AsoAD5rki1W2Hfko31v78WVGRnEgdiUEcyq1AauLB6WpFB45DpgMhX9uww3P",
  "key7": "3gYJcjampD4GxzteethHPYTSBffheeswBu44DJPdWD6AqBWy7eSHNJLvifsAESfLdmFJC8wZAxGh13TuHtwzPshS",
  "key8": "3ewGL6d2UHD61GK4Dnhpkwwm3bC9ahtVZzdQXYnZPkpW7idfokXbMG9SU33kYUPFQFFXdY5hg5sRnUYgbBHzh5xu",
  "key9": "rYrYnEUGDgX8jSYrf9oeQV6ctDi2hZH5UcMF6sDac8wXWgkVsiBix9mNnW8QEuPgcbc8NH4zNTPWdG7tY7tQYWR",
  "key10": "5h6hHddfxkJJRGsBjtQzaGMz2198aFwDfJbHKLGffokgDhwEbYu19KYLn4mGtLAihWDKBAbyaACycYbb5bLuqhsS",
  "key11": "3osXQHbp2P2qB7LVFqVLXiJdMVJHWp4jfBksQbFritKVBYS5XTLC1XgUYBj176UKqryKPrSfV7JGTcNG1GpDYYnA",
  "key12": "41NNHkxLom9VUn6mtZe2Z7VjGmXcsGqiA5Kg6ffrUCPRgWaL1qegBN675k5DUJnWNgakMZg5aqa9M821oTtoFLBd",
  "key13": "594UGQx42tLiyhSpXRCV7rnNnNA4gQ2TQeWwfLmR1VcSfg2iUjKRRGYddKAwoqjBNiRhbPjdttMWffdUgayBZzdN",
  "key14": "4o55SkxvE7kbw1tdRdcUtLqZCzZkSUygjA5hMxixNx9zMNeYrui5ws4JEAJoCdwUhwYfjybVhXKpPFrELFe3Fdev",
  "key15": "qzSpMUyFDGAP7zGSdCiVRRwRZtLz7LTRr2LwF8VbtjdVaPMKQ2PAka8UzMmTq9WQkwbaiWj8QPXhU6eXVWsN1Dm",
  "key16": "2fWyiTzdRZYx2wyKj2C86P19bpYnRDYQ3QLmUdnWxwUD9XZzdZxcr5K5iqS63CysizKK8XfEpNsi46rBgLnecWhi",
  "key17": "4j6WmQBjeY9t85vThafsTrW14ZkhJEjEvkkNPnjHBAdJBGFNDZ8ygSp1CjbwE7AmXh325QUku3s7hZcFRYuDYsd8",
  "key18": "2K5g2ekqQ3BmEsrusyBBLSi9RJ7Bdrdq9HdTS87gnWSP9dENNokAeWdLrM7h79qVTwwNwST15514hyydQVSF5q1B",
  "key19": "3zoB4y1HXExD6oqFVcxA9HjacZpJLYinoBXNbQN6tyHqTi2u5Bn4WpzrBC28f3vEgRqPitYNcRWperMy92eXEu18",
  "key20": "5JsBq4E6WYQ2KPC8SfmPXSMH4JvkfEcK3rSAzvvroQKUpZmddymiywzq6iqYSfd7kos5VZqwzKHv7Cq7NAveiiUT",
  "key21": "4hR7wW2M9FYdq99WUxPprtU6DbNT7STK8bmUzoDf8QnphtT6x2h7G43cRiAhYu1cUW23weygK29m46b5kGDs1Sxx",
  "key22": "485J1VDUTtay6ouCGyYTLuGJjP5HxtHpBEicmZXEZT3WDiQfurEH27qEykXiz7ivwWzZabPN3cdS4739r3Qv3zF8",
  "key23": "2eu86moXzn7G5mtTm49nmC9HQwE3JALcVdDo3QGdgUT1Tk9qRFkUn492cyUV2ynsGgnuB6oQ1ZsFStXWebdq8F9K",
  "key24": "5ksoyN2SShUJ8YD8KtwDmrqAEa462aZx6gYfyjCu7mhJgyJWgMAUo5aAcK9ASLjbLjGMSKsiLoXaL9hMe8kjGdjG",
  "key25": "365JvCeDWY7dGcXTNFCXgR9MWq7DRDsHHhozV4ewgKADSJWGZtrZ9fyRqpfPXzQu88yGkf5knzYTeY5bY8au7dU6",
  "key26": "5xifVyLktbr4Rf82mYfsRKKveJsvKLoEezHisUwHenXXRtzZG1AK2u7SD736wqCYr5Wg1tTu5NiKzKPgofr8VQwb",
  "key27": "BbAVVP7KYF5GKK6teEaenuJB7dFum7j4uQzkvyjYhDNKLykKGRHKUNZbYoGcTBbWwesX5okhcTQQD8b33tBT72r",
  "key28": "3RfzwtcB9TiGKZ4EitRG3BVefrkNKuQr2KkWkyji9UezDgEfBwfAwW2YSK5XJHdVcgrtQsY8KzTP3xnRKZYG69BW",
  "key29": "5j45EafqchQNMBmqvrqv634VzhypX6j5r27mPSvECU1GViRsWs1q7VxtdmECtgiQMx2Vfaa8ePaae3GWJufGm5Sh",
  "key30": "5c4B3aFoYpcs6tsjmaAQtWCJW5oUUnUmD28kLtYLpQSu54Af66t7kV12AJoi3GAZiq8WL3FjsWfVx43LHTfVTNLo",
  "key31": "csePzi9wjSgCCC8qtrw7Dp8dhPngzELwnRSUqGWE1HZEuav9uLovXDCdhAmZH5BPd6ZczmzgYSAG8jepinMG5ob",
  "key32": "4sZGUCKNKN6XZpFycnv6gejPUDYYuaULTTvJx4qc9bywaC5Uk9K7gUR7LDhaoAenkYrLFFeiKnj6UmP5BY4619c1",
  "key33": "4YzzqTjR6Y8k7WAaaxWR5uuFEtQd9HdtfRb112DixQFAzFaoVeUPdBncK3vEzyPvnziJCezsUCadxGdySDjh8vjw",
  "key34": "3rZq68jfEoz5jMnM8eTro7ind56KPfxynYXV4Kf35rDRhVALR8AxMeATuMvxihE5t49VoYEuWXDFtSdnCd7fL9ac",
  "key35": "2vGDLavjH9pV96fhcfmE8fMNE49GSKwwWvZGzVLbCFqVe71GPdmf7BApkNBx1NTBehDbUUYb1PxyUr6K5nEynf2P",
  "key36": "3fhEWNKZU6y9WvodkK3XWyi6953DW1YH6c9YmgEbVVC8WJa8NfEcjqqZRnHp7sKJPXMK9LieHcZszGV4m6UH1YD7",
  "key37": "vvUD3xnsoNKrxodJ32LAtFxRKpG9KoCiyWJuQNEVC1WKiH88DLvPj6UMByr8hUyNiimqq5CpnXWHbFEP5PiZb3R",
  "key38": "3ZCG4bUSUzejJE6Th9QCHwKSTqeKyLV638c71uFUkri6LrZZWTiHxmcKRmC2uNYNjxcBWJJnGBL8DxDEs1N56DBJ",
  "key39": "5rzdXeSYtp3kEzeKZBnXp7tsLDvrfumYkKMcQN5M26pe4iKCaqvmdGZ4SirBap1hZVrbhn8SwVD3E8uPEP2HKxwX",
  "key40": "4kbVjuMBrSqp5nWkJwWN5hJjwVEV5Z1PkcqaQa3MHXRBHWdVu8kWMStCeWYyDLrBbayi6r4VGwkVwywHtotqDE2m"
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
