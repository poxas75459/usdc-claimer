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
    "2Nvr8uUZRg6LeCPHpTdXx9S4DekvbRpwfu32cLzogD3q6xnVQRAHhLmUb3g8EoryAVurLN4efE42QiQoTFY2mDjZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Rpozi9xtp6LPsS8kjFMhsEEwwUjaLifxoHDyhPA4jroaRSxj2LwbmsaFrcGTmS2wp19brPKR2p23wkN7KxTvpbR",
  "key1": "4Awa46XB8kZwvmwhL1WHfFsUrdKCjKobhHgt3oLce4dqvkSb3p8KoQdMMXEceqLm4UK18T7ZzRg9yAmSDDXbcuhX",
  "key2": "4Fs6xQXfivT6sxvFVHpa7Rj8LJ4tWFi7yWZGmodf3JXQh58rbAYFVugDVahAQXsYXEqQ8KMrvZrmdeNuFMax7MFP",
  "key3": "tmWpMkC5j9a2uwCzkx6k9rBpEr4hNEHg42FQLmeBQbPWoiSsMrmWadXGKyi9F6UobdB22w1DdwS6uafqRSeYYAv",
  "key4": "4npx79MvLB32bAU54WzdhBLnu4wRFFvJDHSh5mqRGR5BvqUWoSqhF7JWH1hceTy4BfmxSiXCqSFnbLPgzuGqiJch",
  "key5": "3vaUuH46w6oT8rjCZFwLAvbU99ahZRMWMcYgdNUHGSbaZPXwiamuHGni8HRBeVmppBbAKxgLj1zmA3NkNC8NHWaA",
  "key6": "3m6sDc23Ez45N5jTugGtCdFNKnKDaFdpKG8uBuqVosWnYU8VRHrHz1xCCCfP7rDh3QBuXFQTcRoJrvYsWk7Nb23X",
  "key7": "HqLitPqVoD3k3ALcQ2Zf1ZFQvkN3CS9BSTGwVTZqh7x7eBUyysgKWjF6KtFaXuSXN76oxAE5AMG5QHvH4bwh1jF",
  "key8": "318ubhLbjPCwW24Vqqfu2RFww5EiYkz8c3KV2vwkLPY4Zves7zbUxcuCu6Eriesh8rUQgYbHtERJPUxy5RgJiWko",
  "key9": "671N1EB6diXrWfyFrpbxpZ7oP3R76NzMMk9D9CVJm6gUYgGojmYSq7zyKa2N8JwTy2CUeYiaQHp6Nt7MdZk9q8U3",
  "key10": "51ZqnBHa7vUui1HAFEAvvdw8ZAsDmph6eNqw3ZaVRnDVHo5AMjLtLy4GabeYbK1E16uTG1xpkMjNF1KsyZufmFjV",
  "key11": "2Fx3VFXzFrR5xdXgzYcwVBscFzthpoFVJbU8U3eVyKYDLxPxyi7ADtZjZB5jetmHeSbkKHUg5grt3zhdaH5eTTQu",
  "key12": "2kzW2Zp26jCZHDGfD9Cp8zmFXuYh7U4x7319uNndB3jHJhgBvgsXYnFGc9iNBYs9yN8yPXRYj5azvzF7qzcbAxvK",
  "key13": "3Qr9C7HtCzM32cBF451QbbKvSAHuEptPjDyx4jEZoNz5FySTHGBm4qA6c11SvPG5AjSmFENUYnJfdQhRhnRebVSH",
  "key14": "3UsPTAQ8bMw988pKUrhW8F3SNVsFuFoAjR4Q1gvhbYwKAd4D94MfZFU4rJNKX5k85E2xzYxg7NDGwYaCnrhr5Ac2",
  "key15": "26VBmKpwChixbumLP2NfccQR87hxxbZhY8PkPGnVXqUZVLxQKLmp77Lu88SuN7jFuVWATMg5tvnChG7jXrsn7gVp",
  "key16": "2G2eJDv1deR9Mo2cz5CbzFmqTMBUKhnWG36fNLreJwjgU49Pc1tfhPA2H9ci2JVdMVHuvbWpvHGcgiA5cm7qcohA",
  "key17": "23wmFprc437GnLNiCLu96Q3tSyYJveaVQRK8W8r4UxFwroF2iyvd2SQ3Lxta8Ab6ZzapkSP4wN1eYU147QLNcTQk",
  "key18": "5iyqPrAUd6dT5vAvwzCzYSHH3k7qp1D8f2RWRCifqvu1UypzrRBscvUPxVM5yKWWbbAiZYydA81GocuB9AWRK1NB",
  "key19": "3paAfiV1fFWCdgecuc9jCF4YFQFy1hWKLddiduMYGWzdWHzStwWHFZaPMH4qVXNWw7RLhVHdqJUB2Y18H7TQQN9s",
  "key20": "2qbuBwxzNd2TgeYPd2zYSgFkLQswieZSNNuN78SPnmfHbTz8oDfiZaFVFJ95SX8mAFRkTyPS9GVkWhvUPRGKrrWr",
  "key21": "43vLHXixYbTVFP1PtfRdaX9AXb7ac76jc2Jm4GEdm3UfQY2122nKCfPdUeWGKnjnMCb7bzBLHdUaYnoQREk2PCYF",
  "key22": "2gfazQTTx9kMTXRHzpNJ92ifcmue4AjFyvAdSbV3nRsAVFPojy7qTpZkdyAsg7Yf5gcGEeJFnGBuJfiiDUxKXEEi",
  "key23": "ubFszgcjcw5eYFvRpQBFY8ks4Ey676Ca4gpELjn312BFajvbA5h72npSBwxeTg2UAJrcjDHmJp9qNkgWW3vg3hq",
  "key24": "4aE9JeJiEcFSiYtBDFJyp9Dvwi5hAp28ghKL4g1DavCHDb8B5jWQf8Fg6SinT9iWHKoVZZSZQJrPs9zWjNaMLMqR",
  "key25": "jXnLgqtHLu2q1rQUwg3NJMYGHJU8YdYSApz363nG4NwUSwnqiAk3eq8XWseaDkJVG72oVFLADuyn9cjbRqUTD3s",
  "key26": "3tpvstd5WFcEq6241ZXg1eztouqe8F8S594JVdHCGnekhy5UkQBJvLg7idkbP9XxZLoKK7RS2VLurZcthe5NsLLA",
  "key27": "5pZxAgGbUPs22mJLS1eNNH5sPLHW2r2uQkYH8T49efWu7PQoXxGu97559pV2dd1AcEs1pnwqPeCKmDMrZaTE168x"
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
