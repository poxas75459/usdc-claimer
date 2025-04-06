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
    "5ZCZWNaMUKjHmXvhn8ARDtHaAtXgrxDwduzDscAHnLCQ4oqTtZzqkPyQyAv6xyp6MUd1tybt1R8oZFC9XFEg7xqK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C1rC33ebGChuiMNyxpb3WJDbF2pGtoa83aukHGbeBmZrQ24ggXRQUtBPL3WghufRp6ZSmTwWXPVmGEfotxoLZgu",
  "key1": "55MjpTEANEe7GN8ULeFaJ8Cyf1ssi9519FTLnRuf3MMtaUcRtNEYhym1JPa93x69osfbCtu9a5aDv5R4SEo7vGt8",
  "key2": "4xmsMGW1NK2N9Z9t19ipzid9apy3PBwx9VjuZQQkS9HWTNdHt7bA46CWM4VVNUuJcsNu7jwH69aedDhb5Z5QHLNy",
  "key3": "2PMes1FMfoGrTmPp8dVWmuRgBLcPFsrX3DSYE3zAZrFYbk8RvwyUxCn452fsrbaXf5eeqPCLsGdKPoFha5frJead",
  "key4": "34xgDykpAjPg3BJw6EAEXPwTcQsQrxAQ63WSyLsLzRH2U8371GXY1ssrNDnTucTWtW8EZxCokJXGQjg2omP7d7XU",
  "key5": "4GyaTsoJuKEZhTkMTa71jvUQvE84JLih6hLqizN7jiCxKmT4wMcwDrJdGFdt6doexRW6oTLHTGTM9b21Yyb9Khkz",
  "key6": "5V28cXPF47KyzUfk9vNKfV9FYwuZCp4HbQECnd4FhFvjgGnFkGFdzcXxLP1vFarr43Y3Wwa9LtgUAcDE1xb38FLc",
  "key7": "5xbB2bSkDZGsLfMXerbo5EDzh1BefzEiYQzMP2xatsNM89FhpBnsaBRZC1reuABjZ38N3su5P5SyLKpDxxuV6YGY",
  "key8": "3XomjQovj1GgQAVRQJBdhkU8MMFDoGMTDQs8ahzbA9rdxLFneQuukPnbNox5GBo5SZUDDH9w28ERpj9ETksSkU3y",
  "key9": "5GRckr2uR4Kg6Q4x4u9JYmGBXaBYU7gxxvQLUveTqzq6WFTqUA7cuE8T5mbnVooXVdwoSYymS7s1LgLgbDz7WZ5x",
  "key10": "URJJQep1F5QJreqFpFpAHP4w6AXs66mJv9Yj8of97YVjowzw84sZUwqZQwiescHpGghjQV7DF3mA2a9sGyCxw1N",
  "key11": "4S57aYx1cR7nWbWddXzv4udYznbXyAxF4jDjHDREE6Fiuivexzt559FFF9zS55YJCc67pbGLVTqccWACeHHLre2c",
  "key12": "2DAnFTiiHyTRVnwUo9CUktb9vhBhMLkfmRVWqUSWNoCQFkgTbop4taY8uQUcBx1BqpcKzkpbmZi9riwDZDkjbLq2",
  "key13": "7prY5E9jNDn1V1ZFXVi2J4zGdqyTGEkdGPH3AEspqMcJKS2BWvfanHM8b9GYb8LJ2cvZLmgZzSn1nurkqTRaBbR",
  "key14": "4VXWC6bS6pmjDWsfDaM7Fvxmgqs3MuAwJcNi3Pxxv6bi6v8dhnqJ73E2DjiRyrtMo3oRWdjnZB82dhghu2f2sMkk",
  "key15": "5hrWEwoYGDPwZ5SgQNkDtCQ6NCkzNq6HKJ28dniZa2DVgiMb4S3TZJ4KBsBBXpPrKCapzDHjJ2MeNUe5Qwxu32Vz",
  "key16": "4gsyXWtjSuw9z2YEe8qLErTcsbfqTzgGrhfTM8Mp8vXYcbVYrtL1YKi5GrL9h3RTnv9g2K9799RKvBovhFM32PTV",
  "key17": "3dZPvP6tZVkaJvJYXgGymCfa3rh21uovxagYvNwaHQyvGmXvHXBcDNj2bFwiKREwJwiw1zP2EdbkTppoaCGm2xX2",
  "key18": "5aP6hmFq6TjMsvtuNvWJ5Tbw5qX9uaxBTfDt5GgX1JAMhdhP2CApNmNG7w7qqbK2Yx5PJ6XhA9xVxm15TCa9eMu5",
  "key19": "4rJKoKktLftfNvQQhp6PMsKM3UeXfNE6vBJ9qnjRD3MnM4qDPV2mhFdBm6D34aSm3rsnK4NMUXE8VQKduMvLvEm3",
  "key20": "EVFjrZustnvLtTw7zNgdy6rgTPinF2kWT29DTN9kPxT59K3xnhk1YCpQvni2wUsTowLrHhqiWqAmsnvG3HmdRsY",
  "key21": "N4D34J5RkZNZKtwsBba6CdjDFkE9pYTDAury9HHe5gWxuVxbr7xKrT73UKiJ3CEzsZs2UZUW7zvivL4qVvhrD8P",
  "key22": "598r9csiymiEzFhdQXGcPfBQ444ZQa2Y5xYKe9no8w1Xczc29t37heRv33PWDTV8o1TMYrhwsTzJpBT6jnKdCAVt",
  "key23": "5L7MTcxd18ApDDPRFcS3eouT5BcNCj7RxEDT6Qbv9kjhwPVSdnCNS2bjsPohq1nWfFLzXSonPPcKR5PcQmaS4C8D",
  "key24": "1jcosVzqTLCHxhKaTt5LcqKScSp2srMZGHEZBJvRjPbq43sDT17Xz2oE2T1cZaoxiM8v92XsdVBzDv7Pt3WkChA",
  "key25": "DmoBBVKZJDVkxWrhB816XHLt88Fs2MkHt6WhxgratxN5P2GhAtsTaVTfevz67ejXnGdg8KF9yj1nYDheAuLseKo",
  "key26": "2EThNu4BjXdoWnxDamcZ4G74MLDvAzaq4WuWfoahDf4W6MAC3Rsc4AeuvVBDrq77rUgjhMdDim4Nt8CVeLigiZCM",
  "key27": "2S23HvGR2yq6eyW945tvgvYY5bYp278zWE24uDweuYe1qA4iCq5D6coREx8fWxYVqETpRFhHGnK2VD81cZdhRAGx",
  "key28": "4FVL6h2LZbneTQS7QgcBWxdnwZk796YNFa9euumn3EdM8pCa1GyKbVce2J8n4FjudTDwdBHyNLudwMh4mZ4Es8Uh"
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
