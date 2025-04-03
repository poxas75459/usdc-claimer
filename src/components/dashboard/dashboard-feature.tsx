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
    "3cv3kx6imDiUUferQFuuumrqed7mwvzUijmJ9ijZUBXiuQaW2RfLAtH5Knju1BmSBs93g9GqHyf4APzXDn8FaaKW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TZ1UbSCiMC2VcQzLXd3emMc7cWCR1E5XdmjVowdd76mqBf745XTcxV7ubB8fgiwcLpJe1TSSRQr7y7gAe6iJMwm",
  "key1": "53KDcMhYQgGXcDqra16tWTg5XWto4bG2ENUixtCEbtimPbWfrqhy8fnNECHfF2ifyRQTWwhk1uJNfEJYMQaNrBux",
  "key2": "2X63NfVmfAjLe5wiqwQWCwk3BxjjLtwxk8Z6XEy2R4KURSmdwCmPLUikLtVWeHXAAzodRJwowdBo3zHEYJZht6aB",
  "key3": "6k3TGysojGrJDrfdMU9fhNJ7io8Pdekk1eCx3qEZ7bxtzF5rMFTgAnRUoJZQJsARfCHby3ohPSdCxieowhu1ZAG",
  "key4": "5YBxGLag9mqwJPoGwvWBbVPy7GWHrXxsxoFBk9GBvWpuPCLPxyBL4DhP7Wgu4fASE422GTGgXvX1dEAT842W9yUV",
  "key5": "4RwzLsZnXK76JJHnVF8mfAqKg5T4EM6cgaXFCGABEDhhm1Zs3trWRXATvuxDMJm97YZWPr8d9sqENz7Y6Yw98tfU",
  "key6": "4Na5NMrZZLwCP5GNCqL4PdMCXGDzfncgTyBGSKo9LV1fkEfsDccGBAuaA2J8US6NqVc6WeKQnUYoPSZ1H7NfhcNr",
  "key7": "4fUxxg1bJ7BsHHCTCfYCKaAM4B5NvXgrtMxp5fEDSkTk9gVKonjy8MfZESZxQt6brEp1vUy9kHmdR6LHTDMoU5af",
  "key8": "hPCfiWbn8SKRu4Qgtch4nEyUtkehXXpyob9VCeABRAz2CaeNWwatX8HSwsVB1duubYq2XVeybQ6d6SXcwMxuTTp",
  "key9": "27F6WGqZUxvXhfq7jPKWPa3QLvYpYueZNwe3juFVb8uAWBRzXyc8t2SmCrhQxPsJfF5B84bVvc1GuvmdmmSU84Fr",
  "key10": "2JJCRqsfQ8s8CnrrNTdnYHDVPAsG5N8wcdTTKVfKYZEgAZBSBz3d5gTepa6fQx44Kqd2WNguYT4wdTzCoi1uJFHM",
  "key11": "Hx1rnPhoBTcBYYFPaL97ZVwuQnYDe6p7tCjgDdXfjbmihNGAsJv33xzaWvFuCMgAu7rBi7WCoheciuNHgmZh1zg",
  "key12": "5EUr5e9KP4nM5sBJafNQNMEeCj3ASibTTS6e17JyTSKQdVytTRy4prFJ5zSfbYZkymkNcBdkMfiQxeQt8Rq38grx",
  "key13": "5TXZHK4dCdZD5UZehGaYt9B71jCSQpnAVzhuZcGnJu5HJTSDPAnc2MVyt5kGuBb16J2sizCkZsoqcHHfF5WHffJg",
  "key14": "4KDKRsykpq5S1ja26bbLkPYSUyRzPMs7ERcrScuwSdTD4RMC8sXbPVYtw6aRW17nmUeqj2uqkGiCxHXW7B4fVbJU",
  "key15": "pwHmVQszSwf16GQcyq1ajoZ3MynVnaPatj1hXCx9RhxEUySrSpDWZTz3qV8zmBpq42SN5fzAtRodJRiXoSFH7ES",
  "key16": "3ru5SrZhuu2vB4kYAo6YWQMyEa2K5hGq3RgDxqosYSTAhTyy9gG3TCcNAxwfNxKqDN3W5TcWdwk7Dx1xEStKHBaZ",
  "key17": "27v4r42BPs2HfiWJPjh2QBjJixo1mtS7JVL59Qz2x48LN8xRjAre9SyzMzebFFZ35g3GRyRgY6YAftHaUQWXwFt6",
  "key18": "2aczbqH8Xg68kp5mj4bAK4o9FizyrLKVoQWDmCn1B3Tmt86GRKsq778VfUMLGquv2sFDKq5x3y5UHyY9DmLKWJTg",
  "key19": "4UF6LkjkyhSb47LqS9eukUtQGSq4uzFdBGjWcYt1TZfkZa9bUFdKjws69GVgspiPevNdrjhR7GQPpKkAvVw7Xtt4",
  "key20": "4p7HMUJs96uPhEWVef44NdGe82G9Ux15Hhe9iRv4tMzsiHA488xjgHViTFDCERuhNkQRziK3JkqWpaQsTjPZ7MAu",
  "key21": "j3tktMiN6LAr6qakvkmNKRmhJjM5Pta6AL8bKK4j8MZRZJszJDof9HycHYBp7B6R99dfmmWyzSq83zkne2LFiXD",
  "key22": "4R6sUWcMsunmoJ2tCD6UHZjqfYuTdeBbXCikjyBie8qM7Uk9ixCSHXuh2K4F3CUVgVQfhyG2EhvR7ZuyfuZcCEtL",
  "key23": "4pBub6NvFN1AhLTeyiQqvgKTzpoMfS9SUhXgsRtTiNm4tvFzLH6CnQdxXxcgz3HafB6Vs3zYvnGCg4TyBM9wqiYk",
  "key24": "66joQYqfp5QsJ3JHvyPonXQDwy92SDPhYES8bVYdspXFZv6B32jyyEy88GBnoGG9CyVomRFt9C8Cntbdrb7Arua7"
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
