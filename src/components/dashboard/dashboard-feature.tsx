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
    "3EgsujTvuqyMah6EyH9nWAFMByo9V1MagAaSv3fart9UQ53BdpBpwSaXJjiZX1oiABKX78mTwCT7gw4J5XyG8sK5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xj7XxTZN6tnM18YNrPG1HQPwyrK5SWaK6CFWTD34HRoWPk152Hz3VBAdyNaHPbbmwCVBQkwtGHa6KvmsGbcnbM2",
  "key1": "4VpDXJ79AXnsnBVxoMLqXxvCWDX7zBRQtTJ6mKnmvuvjs4GpFxjYFiSSgTvhCw4Ln3v3vAZ7G3LfmFLdM541tHyW",
  "key2": "5yGcZj9tnnhKLpGTDjmGsfFwnkyRxxFwnYL8KcPPYYFqcZqdj3UyUgLwjBxSH4NtYTfcxxbS5R5Jnzvfh71ksKYa",
  "key3": "3xg76VexUPeBvGwwVjYH6cH5p22B8HDPLMf7zuyo189qrG27oHt5m3Us6maicam6C1bBnf62a7NQznrLNBB9rne6",
  "key4": "W3jTA5GbmLqFNjWrxZSgG7Rz4sMSRBsaoW8rMcL1QARu5Kh3kKtKZmEieKEYJ5dwwjwad32WppWX8Ca6EJtM3tW",
  "key5": "3DMjoiZtQvTeUbk1MLvR4Bef8xwiv3RZ4gUrwXXSxXThs7HaAM8Zqg1WXFSMMz9DBsH7pYYBtTQxwfFjitTfXoGj",
  "key6": "Jsjrw4H99txWX5EjH7i3kfMdN1PeJe89W1KBEgDAUZHNGEZddrowztk9fZPBBsxE7LWVbVa63UAQDJBumgzigzQ",
  "key7": "WKrnmy6y4aDcWY2Gr7mC1hZjyMUuv9utzcMU3BoHNPWoVRzscUSwQr3NqySzetTf4BL3QP8SfTwRCo76nFij6Mn",
  "key8": "555qkQZGgEs4d4bJbVGwofzyPwVHNCqfDHsQEFY9wBTz5x7XvaDQmficwXe46RS3fwRhwtLtXVtaELGZUJg3RRNT",
  "key9": "5N2bSX5HuxJeHsUkwRty7vY9thjG6AQLfrVrFXcRLA7gNUqVxYDbHTAjFPfquwVobQTM4Ny9nt8HhYJzRT5QENXC",
  "key10": "4F3f27T7niQeAcfJp63Fj8qu4ZPzYoPiFE46jPd38BqTLgkiy2RzVhJB5K3LBQn9worsVyvSjB5DdTab7w6L569Z",
  "key11": "5qtmKCGKHV9VMtFjV1CycbF9anAjyVR49ShrgjTpdxDB9VJBLqJ74B9bvS9AE1A96xNSDTMJ7VdMEkBxie4rauuR",
  "key12": "4LaF5FdCn2B4ALsRb2QfRFiF3MxFWS5UWAquNqqdpiUYx3bE7WXaZQ3MkQpSNWDcSvEB2z66qRZtxZ6ikoXQ5jNe",
  "key13": "2iZiBudrGg5U9LmhLi5EDWgTUuXXgLKaAKW882dy3NwNVoPNjQF6JC3ZrDMXaTGUhMVv8nB2ett4o9PLaxJfyuEE",
  "key14": "5vMo35VNJKqi5xy1FV7JQ1qnjqTkDA8K2ebn3odpaCwpd8s7xg1kQEJnN2RwVpvD6dEJyzfZuGjFX3AQXbPRT8rM",
  "key15": "3tyzhfzZbdcLcCQjK4FPzHeNiMYnx1kC7HY6TgvWZrVWcX7AStdK1m5NNY6Wi2xyfH9bQ8JexAm6ce9Qhe5c7Lvo",
  "key16": "64WDhiQdKs1UyChcKQDc4tLJbxo6hfxpFGmLTMk6dbzpEaZAzg1Jini1HtotbSsK9AoJ1Dwd8PMovShfiq42YCXt",
  "key17": "4gTW86SnkCAJNJn23puxmg1NPrv7hMTqUT2Eg5HuXxoVLpTriPCpxzn18bXAnrzmtW4nrBazU2C7CNewTRXqD58h",
  "key18": "3v7asf2pEqjPDp9dWNXGztyumvfQviy6Sskb4JtijeNKX8B9bcz2LC35DEWg4uDMvD6ML7sARZNk4ULJjRfgf1RG",
  "key19": "3TqxV8pcfVi8wtYB825AJBhh5oEdL8BPxAfxC3pGufYRk6LAtdsvFSWnEPPLuVdnQtJbhrkzokCrRzYcycuew8U5",
  "key20": "3qMiZ581A7emJcJN8KMFwsMFq7rbiB6cpDoRe4TvDcgkho2i6Btvba6vaYKTBnVJoHqFw3nfVuAJebi6xZxjHpU8",
  "key21": "3qXpxWBaWXWXwXwecEz3mb84JmcQ7UGLhdkrQ6THDva297UHNVbu3p8t5MWy5RqxPPGGwezsWrcm4RkLJPxRPyYN",
  "key22": "5C9Cpw7vUKTk7MbSPTAeRYoxXtyXgzb4oDCqRFrdtZjqhWQQQRDir8QzAiMEu94H6bpn3WyFkxRVSdJ5zCK9SYmu",
  "key23": "5yQk4xFHCWtBUPW8ETmHu9Co7kmPEp2ehtnEiGAV9SXUrS2Cmp9CA1yEUWujz4iTV2Wbg2j6BMZbdqknSpmnu8qZ",
  "key24": "4W4YR2sY66F5Qkt84ErpyituBwU7yTmng7N22MxoY49An4mNP3NEfb3kQBRiZzyrdStNkuZWRAYPUfuoEsc2UC1k",
  "key25": "2FASv2YbeKkRiR7tL1XN9fLCfaihayZmZvsEg1XDhe4xN9yKBdicdkHGL9wpk9jjY7shm6W4vqH1SosmgUa48297",
  "key26": "KZA75YevpWAsUuMGUbPXSJ1dRL9zQdXehfjtbW2x8JNLn2oqTPA1RJ6Q3VL5THMLfPhu2YqKGwtkeRmCPZ2jFnS",
  "key27": "4vohHUN7Jmi9xVG3VKMQvT8TVSHcAb7nzBFeYBbfzpLJGH6jDE97bcGpQjRT1t18PzsK5xUwfpVCXwCwuWfUdyFJ",
  "key28": "35LpmW3aQ1i8iJqJwEt6Fb1wx2B3tSmDkN4GU2gua53YJu94Tphnu1mjKL8HbWsfC4SLGa8cm9UJUetKG76ZsS4T"
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
