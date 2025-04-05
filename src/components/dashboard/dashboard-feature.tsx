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
    "29fTpPzodLLj7zkdrKPQHVUzy4sKMsoyXYBgJnUvmooURzZx44dgA56AcLd3NJWXguVnk8RVM5phDA9NPG8B7u1K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27JS42ciEHzTFTQxKwnYo5AM5vQfEiNyocQNptREeW7ThZyVSBfxyhJsqD3c7oUeGuiCQrZYiJKzFPSLdqpwUyQk",
  "key1": "2H25qzeFVK7wHHQkPgXXefoP8ZcffkqpBfYtgihh17US4BufRDHEcVCBg4mHufFoH9jSC9kAcJuzbYrCa2E455LF",
  "key2": "3vNAPeGGuZ7X283njihfBPDCMHzoVxNpLShEwfhwvgPyWWzbWeh58TSLXNxvDDUsMo4y6njPLyScFP7gP59djqmB",
  "key3": "3YvfA2149149rKT1uj6gUAp6F134BUMWmRxzsGJBKAdHDsHuQLwHEgiwqBvkyYJzzt6YVDcZ59scB3eEUHyE9Lnr",
  "key4": "28b2sr31WHmErXgP1tGLo2D5NggPHiN6gnNUT4szbLQQqChb84kjKtnZrRud9nNQLT9NWHG6EbUtZxvsnb6v9zuL",
  "key5": "2gnpGathJi5vGhfGF2CgFkqD9KLCBHzjgBjRpJ4XaKeFRZo1Nk1Viu4m1JjYm9h92XahkbpFNdjcDnagS98ZD4CP",
  "key6": "5WeZ2eZFFtNyLZdiuxDh21kJwyKb7JmzrzZQHLPfoanqqMBzEc9prpw1crhrK9Pdh9P2JSEK43d6GAReqPVn8s1n",
  "key7": "4zpgLGAvbmAZjomrSrj5ZJi2TYEcPWDXws8DLZz4sc9RmwTpDqvnBSo2xHrUjD2TKiQRxH9H1zAN9vEEUpKBAnVw",
  "key8": "3CZWbo8UG4FEQttvSnYkZ39g9ReHrEFkzoq8Vute7x96zSdS5UyHSWQtWq5syErsweeggBRtUbtYajohAvtyeppY",
  "key9": "71Gp4MSvc6WeK1AgFosCaCYHDwkMWymFJia8kMEoFTtL6hRLJPomXRQtdc32dvMgKrz7Tux2PxbFTGmhFkBkjyB",
  "key10": "5tdmhoNRTUeafUAbWu5zGfLTaUhM17MYGdoqc1uT2vvjYtdkbzPwKiSAKFFUVGKmn3qzTkMxkBfHZnRfMYmL7EK4",
  "key11": "2oVxH6mn8XH3r3V9GntsS6ARn67CEgy8S7CoPUBH117i57oxF1WUwDXaFZ2TijNRLxX6eVehgGCh2RSYCQpTdVD",
  "key12": "Wgep3BrFw3GbmGKVCUmoJHQuM3wekvuG74NJAEsUFH3jrbXUAG3QfWgnZU3roQv6ZX2kRMgrHkJNV33SrNh8WPG",
  "key13": "47U3Nwu24Qx13aLs1svAh5onGEDcMkgiZ4fkS9S2z6ATBYwg2vo46QbrPvM4Wxeb2xLEtAtMRM3N61zx63rw6dcG",
  "key14": "5SCwVKYJBsETAxYraZAgHonJxyiEYqa8YzRCravqbxvV7ZymiBn8cXePUT7cTnDX8ZNbysUAPiXk8Sy8dajmpSfS",
  "key15": "2stcNURw5HwgL3NYena3Tmy8YWfDGRF9DDLviwYjA8FZGeLSsGpNbqR1zHjhCvw1y7ZwYSu3teUhTjVRpKMdY41b",
  "key16": "2Ki2ongYc5T3ce3yjr9AXpLnyi2CGKoDU9vAMQPLWizqznBoo1MVrWnBrHm9q6CacfhDCcDF8DHqNuUv7SYci1EF",
  "key17": "55qV55vtQ221EfoxpkS4jesxcKdfairFxpxBBZ9ZdxoaavAWZqkqdsxvSRkDTNC7hXkjvCVj8JrV1NgcMm9S5YWX",
  "key18": "2B3S4yJoxPEm5vF4sBdnss8pmhR8rn6nfo8SezUNvuvchGqPkr1GsUh8NzugATvHao5DZhHueme9qoULkTTeMjd",
  "key19": "4cnAzuMXgv5ZUbAi6RNKKSEVXLhFPeRTkt7CWwZRuPJXg7G7m4VgpKaoc52wkApHosTmpByiJrrkQXkRTQCiH13d",
  "key20": "3Wsj73EYQywtjyiNff1tedjouncW6R2QKxgAXMqEtVC9j5vMvjYYEmxG7L8uU5D8Ai3e8m5Tji5arp3E45EKbb3w",
  "key21": "3hwhqYrKrsQcXQG6Ko1qKngZMA7VJgYckMmdXgCQ7gtcVBBNxRfoaNyHssNQa7XANPzyEppo7vzpGB4EoHe6xa5k",
  "key22": "THXAD7zXiscJhiFcZLBrgB4Vu8DqN8wasowpmVygj1eE1dJiQmGPKz9jNiX5ydhF2x9s3haL5RsyfomedBApDzL",
  "key23": "ErwgXRS4uSpE8DX5Xs6gqzb45GnFTgLxDCh3oKY9sJRtAQbPHCXvoD9K5cmxnYhwhJEDk5tiJsY92743jjDqvfT",
  "key24": "4HxUGkVSEmBHUqr25E9AMjrgmtSxf3kGPTYdS1yczY6JjB6y13Zsqjs1GvGYXQ5Fc5MmrYJcAYnCoCrA7rFroU1r",
  "key25": "2bkTTKSCpdXZquSn7dfdeyHNhWn66754WmQwgAABp7vcZ3VafKJt5AAkMf5cr2CFGeAqs4AtiVrpNd3weqXVgDU8",
  "key26": "CvSVrfpGpAByqb3SVu3B62kymY7RW14AidZMnyVyERLa8HhSzj6iewjxMTcpocLW7CvVSk5zjsmqxiCuEXkuRMV",
  "key27": "5zsho9f6FAfvSSGdj4LrE1HGwojsPXTwkm6SwxbnXQXbNzd6JmwLM9YL1yNLTnsTWGGLbivFzC2nefwkkKrSEqgM",
  "key28": "5ijC5gQXbMdyRjvt9zw1tcjrrfDsput2GA46H4M2acrT8R3NZCXvKK9X1apvc18YzWwy4p1ZRXBf6MPQDEAf4ZN2",
  "key29": "5qgXBNJ1nHjjtZzKAuaZmKLV26EPnJ5ZjtEPRWnzwyQityzTv3HKtWXxnFiRHEKzpuPzWSX2H7QdrwKsHiegxWcG",
  "key30": "5C4MC9qcvdrTHHzeFiMY8ZJ1McLiw2o7XmaSeH3m9b3bJXMnmzVeAo8cirUZuUPRyVRDMin9v3FWVFMuKTJW288m",
  "key31": "2Fj24UbxuK4jzvwFoFRy4ddytmdoRUx7Nyshn2H47Kxj7xSSRjCskbpJBULHAV8uH5nM2axxFCFuvvSMVK5kdEE2",
  "key32": "4QzUT9UJcCrSQMfGKFtK6FJXF99ixATbyqFhv8aptJNumCKEj2J9vekeWYenyKGgpdC4nPCXuvDhKmUPRXsUgoUd",
  "key33": "43KwSGf8hgwgkCvDv2gmgTYBPxgWVTBHqNLM9MYrxJYurjkRUCgmT9AmVVjoVW65AECWRWxeVgb5QXf71v7342qt",
  "key34": "2uPYrLkE11YEJ7VuREED1MYVNDzvK5zbbnF8aQ7dbQ3D1pSUAXN7gtwz63U41BtqoZMrxkyrrWvUzjZK1UjxHnK4",
  "key35": "2UV5DDmSosaQ48uJQRYWh2i6fkR13eNRrYkyZqj4RKfRtj8NkXNtZ2Y5h6dcu2ShmiPH6zkrfzXHrZeQ2NA1Ukgk",
  "key36": "3ixJf2BPjZk2KPTTNx52sA59h1mpmfrcFZLVBtpgH24zFDGffQ5ttv2hQiFiaF8XdqdVAZ1oVQrLH3YsqTvR93tU",
  "key37": "3opN9zHAqsdPsftMaQd63qAYXn88qFzxHoZiX8XUQL56oRHicrgdbAgqEqCS6PHgWBqCM99nZnUM6FUB5r7xLzrH",
  "key38": "brDt5PsUWAH81d6d2bR3fwMgNkN2h6xhJWWHxMgDoZgx8RmbDYE96Fmsc8WstYsXiVqv1nuinvoC5rkuJpEs81i",
  "key39": "54uzcSU5LMb5SWmqSHCd6mxuiXwBVNpy4cv4KNnkQZDRxG4pdBR1g6Y875uNb8ako4foawg79kk2bvinNWKs2Nxy",
  "key40": "3knRXymwdvq1ojFaVsgq3jYr9QCvRUBETyfhrFPiGX69viTvTuW2BoHoMZ7o3PysXZsMkce9BdZaZuutokmw6zwW",
  "key41": "4CcwHU1RUKHMGb3zfYuxabUPj2YDAMd4cXKwCsAqugQ9gVe7MX2myBBGQcTea1388E7rgfrTnxdrVQD39iFVRBbH",
  "key42": "3kwzxX22vpXwf2GyebT3zYkRrkxoJTnKmfVF9GYZy26Yb3nXHDZoRxND8E24h5RLwQiEEBXuqEi2bLZxDR6o5vAH",
  "key43": "4iPMtj7k8Gi5PtJ3ZQ6zpw2mz3iD7zDgVvoVNdNukMzTZZ6qQHSASJ8sYekurKstv4qYoYyiHKk3GwZgmco26wsm"
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
