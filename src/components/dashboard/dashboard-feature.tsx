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
    "nPfo992d1dVWtwLFHUxddmBb2nTDahkhqhyidZCvXwrx8EpJLUWdaRWjeAGuasEd3imhbbhBHE4wYrhpgXbRNs6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uj4CLV1KetRhf2fodUboTE9An72rSrwxRJKUhxKx3LCGNiBHpZAwLepgT7Fga74jdzaZmYffNw53MusoSrqKAut",
  "key1": "5Dy6G19E2zXVwsQPE5NGNtMLmu2gXPkFGrAZg7LzJVt3rSY8cDmnkZGjBFmfqiMALUa7wX1DXTKc27uFybd8hwbs",
  "key2": "5JZTSTVS96ZzeCZfrPg6P4wQv5b67PVAxzCyVFdfu1oTAFvcoV3SVJtKTYLUWg68BxR11qUk9Mr8bC5YVKLVcU3G",
  "key3": "3QSz42SrZDDTqsHiM8p3Uj1LWgqRtNRYNHNYeSHzUjzNhBuxpXbNfB2SyE73zNkgTd9EcPAQZzQgKT6SFECPrW5B",
  "key4": "4aRY6TDT9HmUhkAPvKKjDqPmnUztAxv1U6GPRS3DSmC5AB8uyG29QZ9x2svetX4A7o5o7aZcVo2GZpdp7ApQ6iEt",
  "key5": "35BGqLQfYsFVJwotSvcFzNcjD6N2CfeQSD9yvbVRqLom3W2Ffws433nuLJ9xYqQLHzji1z5HiPDj1GnS3gXzHbHo",
  "key6": "2wTipqoA8eBBLY2g67FpC1kVUy5XdSmrUD4Y7vzekVHeSqSsZDgWNBbcEmewkJ4oFXUcfaZesVDpfWVY7qoMX4Li",
  "key7": "2aDmbR3jdrGv4hXp8LgUz9iCDr7RppEvTWuxDd2vLuTe6TqR7Pp1GyFpa8bWP9gyJQ9P3z6R49wdBibLUT7khKLT",
  "key8": "5aNSFDRXNpQaCqozebHX98eMU72nk5uKJB2wQpm7nTjejgdMpKae3E4Wk8HWnmeMk1vYTA3wjRxF2w2ShCZ8nxmz",
  "key9": "4RX7Hgjrp1W1eYkFkAt1whPpxDvmjLgtDehEyJXp42xeziyyZE37UdzYozcw6Huxf8w1XdB3jvJyyyv9FbhFXuZM",
  "key10": "4FQeLPeQ2o9w31iteURpEqAQfebp72rk9hqZDrM1rDBu5fqSCVgqJqUC9fWAv2Q1zCjqKZXynUM5eoRPdEtQYAUh",
  "key11": "4J2ekcFuCWMi9iF4DnUyuurqZ7CAarmttZckFEE49BXbJYLpw54Hfq9e3nZfBdSkSGjXAsXb3YVNiwMSF9QqmiGk",
  "key12": "fGUkQiBowKScs6QWeT3SxvMtBv8YQb7cBRMsdvtyLpHBagoMzxp5ysAeBNoFB7wzoZAzqAyKsZbXdr49anXe9gQ",
  "key13": "5TF5J6Us8Yj2xFfz3rbwhxyJWTKcpxtLDBDJRS9fG42SWXTbZ8JGM2ZYHVKq1rgodsmHmqP2oFXzebe9t7dhc4nG",
  "key14": "txMw4KicSxReZtZY43xj5kF45PBnjwfdA9nskqJWA48ovhQcsEmq7J3iv6rbWDgHBNCaRzuEZ6jNYfymuxxw41T",
  "key15": "4t5ZEL1mPQLfipYHHH8vH37zrzkPeWWgbA3zJfG8sozqvh6EyfRow7hqHhgHcmagJGPetjB1xyw4WzpqDi7jtVot",
  "key16": "2ejgCYDC3sZvWQ9wNAnvgTqyL6npwjJUgrV2AQmdQeyUJzXcmVSoFUrz2coHG9Zc67hfa6rBjsW8TQtx9wJvt7sN",
  "key17": "2QZnhhe6Z6218jSSc7XVr3iXS2vEGTGZ9rsTZLbK19N9MMZYgUjwykoFcHon4hCJh8XopcG59EsP7RHGRiCdjwoc",
  "key18": "5YpUB1UW2oFE15pJMkGK9VkTm5d8VnYES6J8doe2u4Hi6LXA4MEQqamVsm2d5kCbhXfe9Q6NQdheJ9UoVnM9qGoE",
  "key19": "5aTHKezFvTmDuqJcpz1zCVSkgGknVPZSagLn1Y2k3ryycsfQb5oKRqfeAQCeRQEFYdSaqXkhUyyfykx8AH6kP4XT",
  "key20": "2NNL1L9CdwoVG9cEx6YGg3GfaAS3Frm2kGYBSz9JqWpbkq7y8LHAXa7vV6Uh4x54WnitgqZkfd27zaQ3wZFY9XTJ",
  "key21": "34tv9myEev23jFqpwjaAM4wvLuoyH5AhR5Ls1QhqwJW1e2GZvdkFk4577VtZ5Xi6HtbXtSDEn46v6np3Ech1PFK8",
  "key22": "5heDQV2xukrUvduzUCxbP2gmeMdUWejMqw5gZm67XYyNhQVADJ6Lp7YakfWbXEetQjzLrxpZTiPGWpJmBf84F2tT",
  "key23": "5gyX4DMovBiooxrb2jvWxorEEqP1zZetcGVPFWk22jUkicDt2Kuk4FkpcDBVPJL7kE6qdhjV3iAJW8bQdi8xvjLz",
  "key24": "3BT2tBVzGckQdYrPwH1y4B6r9n2kWAaGqVi5KKzY7KcepJoprdTQi1yth81nAPb6aiQcfWEPnUNqGPXYWmC1mBTX",
  "key25": "3nSLYk5i3wtSC7sZmzKyDhtBsDyk3bC7iWeQreeNrYR826a4BwU7Htgv34vwsq2hk81JJPzqYKj9tNzKTHQHhxBB",
  "key26": "22a5KDcctr16SrcLvSeZwBDYHxR6sLHS3i5U3KSGJ2va8vaL4XPodRyeM6FKqof74iK1XgLGPGTdHxetgMFQ6XhV",
  "key27": "JPJe2j5Mf4qaZTQ6ZeZhgkHvRDe6SH4d1mQrWYYop2v1SV4XVr8cpX3vkzQ8D7jNbGn6zCxVbayJghemkqhfBz8",
  "key28": "3Kq9bWa9wYVxUXpiZyJwy6Nda6qYBCoEiiVoGVxgbYZTnhNGHYiCrdLaEXA3gFS4M8iF69yk7m72d4ZD48Y6yydm",
  "key29": "Mcz9CSqhGtzh6e3x4gPr4QJrEbVnudheRuyS84SDv652GZKUx3tn3Exy6MbZvSkBfMabhm9hSTkVpebPRtHdpQ6",
  "key30": "E8mz9Eqd1bXnMUbYaJ9Rs2GTspDLFgkFpU86Bem4CaxT8fHMpRtakhbcdo86svk1TLAGu6urkPZKaXSqkk1pfRd",
  "key31": "jRvpQhtsWnjUMmNr9yiteoK9tBUfUkxinNDMCZcAATzq9QP5wG8YnvrA5o7q2BoxtFQrvbGgQtGvQ8Fpo8kSWGk",
  "key32": "25eiNUfSQRuaLQDJMd2GSoVmAvRBGEu4mM8Xw2Xuq5mmuQAGm8oUWRigyq8sDpZeiqGmTf6Hf1vjLmt3CXA76oFV",
  "key33": "22sW4b2t4z2kKdnmTBFAHEyDSPASsBGQuiNfMGuuoYcXiGSd3sMWDXwHYnF4KADrRv4pLvuXZY5jac94CDBJHvY9",
  "key34": "4vD85fhSoES2S2aurUaYM8itwDseSfjTP4R5Cf4yaA24BE7fh5MKHLHJX3y9AKonopANdbQR6wLdBTTDQmbDYPjB",
  "key35": "4LhTVDJVZkTM8wEYu7Ngf8gdvBEHgDkRmyHx7AXYtKiT8q9jS3tYnq4TibqXZPwAFWuRo16x7R1HXxHtXr2KyiQn",
  "key36": "5FRSVyiKc23WnoqxppBpZvRxaeZbkAZJjSsbXA94cR365Mh3LRzQxstB6Hg4SUtZbLJEC7KCtr5sbtWM7g8MouLe",
  "key37": "kf2zabVQYyW4ofQtGW9jhZCWKwHBDkGmo1tGKkwpw2pkMfyTmkx1ysAJPPyyVzNbQ7zNB57vv88DKjZfewGvMj1",
  "key38": "5nZXwBBx8nSVqbHqzZWdjsarfaBWcicHhk7PHXgHFVAqtPWRfg4xVMeioqJP1kNMps1UAB319aKnxyvjqRohM8Ru",
  "key39": "2Jr6r5ai1NKvuXTtdHQuT8wTEaK1PN7WqEWX7UwHt1KiFk4v6LPe84sPtogKf35qNRvJgsGAmNnypJziCCXv1Lfh",
  "key40": "2seFHeAJxXfRjQN7xMpHSWGuv3gnUPxv6UDj1LXKzL3eCiymWTTFGoji9d9D8KNoB88J14q35Nqppb3FmEPjMzxL",
  "key41": "26bWHKc5L7TNMLgH5tpYA6Xjbp2ZdXKnQyTLC8TYjKFQVeLgAPBuism49RhMog6biwxosnMdCQCXzEaPurBJxQJ8"
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
