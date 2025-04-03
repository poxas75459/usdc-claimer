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
    "U8Eq2AYg1hYqcyDbcZjh8rmq8VaTFYgPM47cudoUnmNeZkFT45DjhqAxfmPXndrTknV2SJTrYKUX1T5XDzY2mnU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "658JuZHa7rYwmzEj3TzVKGehnRhEVwDy4Z7ry5yQmRJNuSTHpBQE7bx8BVpmPmoUssj3T1AawHaJGyinmjvWzvJY",
  "key1": "EZsmvzXr6c67pF5rMjUoHV61VyxbVBJvxdqkHH8X43UGQQeLsgktLBgRjRELC2zcqCV8KVdAWvhdzPBHYQWFFPc",
  "key2": "278yiHfb4XeAZHTkX8Yv7ks9spDEd6aShNMyzhSuMuufAwDiXYKZUYjkMJGu2SphapZF6PzmfnZr79FFYv3hfvEC",
  "key3": "5sCUoD1k97vosuRcmxw6LjJuamRCMGSu9HxN2EURY3C5KDUViVHMspGHASCwe2hhdyXJvLjyX6XZPvFnD8R18DiH",
  "key4": "57ao2rCwA3TC9iPyp5PMjajDk37GBPsg2cuWgoyqwBd3CthNq3PQZc1btxh4mWvwaGKUNhBgYgsvgfzMNexrFatk",
  "key5": "2UNzuz1E3f4yjaCpuWzQ3ax6UQmimDQobpgrUU5a3pPafRwkDctAi6CLYXpuXaG6SMnhERZaXMVRTAFNzUUHAjXn",
  "key6": "64yo5nssYjPX3xdHTGM16SZ4HFZM85CMkkhxT9hP4re1BsiVQ4Y4joMhfufFXiSxkh8ouqbF14uVQ22CynNRD9oq",
  "key7": "3R6Wd53BcG3KpDfQrAxFxpZx5p7qFDRzUUDgGEFNuKXHThVzCU2uGRzSRsf41CZGwP79LaTgAmS3Rbyv4B26KTHw",
  "key8": "66jYj4vNayrnNqEq7zaJJTY3wzYGRyjgJYqtJHKSQEVKRRW1T9MUZEP7Q9zdQDu793zoRgTpjHeebGthqL84RaLH",
  "key9": "65sAgAqPen3WC7mZ4aftwcX39yBG1WfKGjVHywmmDiHaj1TqYU9nq72AnVDYqK8ENSU9UrboFeMo8H1Thdt9jSZD",
  "key10": "3EWHAHqUTE1i1cjZTtdeBr3XLLTKpgghLNJRteyBKo5S937j6RkLgcTP2qqfdw7qXtJubtq2vUtkUQt9esjK41x4",
  "key11": "ByMM4g1123N8KS9brXeSz85C7TQi54PW75SBWwLYvhnsYHsaRrZ2zwjqhBFrSUk7p2PQFgfNFDqxkQWNVh3ovjF",
  "key12": "2drQ2txG5mEYv6fbawz2fvweVm67B4WQpVG4ySFpX7rpgr3eTg5eupc281t8wbE1uwrjjqWrdZEgxRpRfwJM5Epr",
  "key13": "2JbNvojQAwj5VqgYHRHEWpioxvek3tPbAtqRYKydxzS9moDb4FWmFKMpiyAQ41Wa8tqFX9EcjVtuXS1Esipj6zco",
  "key14": "4oEifzHAxdWQTdAj1sD9f5HAnhsn11wT6fPhStqaBfTQLDY5JxSzGMpfGQL73Tyv6m8sCafsqYGjveTyBeRVKGB7",
  "key15": "2SXH3XeERtUTpnxcZ21EkdfQ2igatVxA5GHmMhkuHsSpaDLfTqF9QBxc9S8nygFyMfiaWB71N9L14efQV2T2kchB",
  "key16": "sTUwe8R4jQdYk8cVefWZzVmioMApDbcXiuaCxqCjcDN9ZabdQzGBe7RxwebPqcyaG5PajSf6Fxkrto1f7oeEHoN",
  "key17": "UWLsxb3QoTSFbps2bfg4LHKy67ZA1b8wcT3zgZ9Lgc7fo2J3tZxi54zwX2DNjVVorYzCPWodnAfMVPBtZXMivmA",
  "key18": "FxQ2gkQQA7pqYPHQbZKPNqtJM4u9BC8BZi5gjPGBUPxVnC116p6XfQUEhR5RC21faFypvb3kmqko2TZHjdRb7Y2",
  "key19": "pdn3XN5T7yCmV7Vt951JbnFEsAjcX4h1C5KDNLvmmocgmb2Z5cvSo2yr2YoivrGP2dJW4qXvd3kgpJ7PM4Us3FH",
  "key20": "4ecQkrffezAkZsJ5QrM5ffhtG6X3rRgv6X4kugtjYGaz9DuwHKoLTpH3HF7VsoaMSbvXvYwzFBRNPxAzTRRxk1P5",
  "key21": "5Npjwvfx8n4ZBVgVKnCX7axTMdKnJtVkTQW2iAcwubM7u311eXHkz34CYAT72LyksxNEPghb7ty1ixymWpoFcwtH",
  "key22": "2nzkgtNMqZ64JkTuyvRhkeFQs69MSQrV5LehV8sJLhkYHTHHq1GudaeA54EyE3DNKU3qKjiU1siaguxiDbDaSUDV",
  "key23": "5y1yEQ6bGytb7Bs7nWNKCkfbMDdNdNTawiZehTS3pV1NWFGbZNe46tws6VNyh8grcuqvt6VTk1HXBibHEtrGy2S4",
  "key24": "2DMT5uvdX7RL4285VkTXxTjvPZMjFS27o4cEEZ59RcPXkhutR1NW7JM9B5sm7NiyWbEK1wp8CLzkxN38WdqoPxMo",
  "key25": "4zD7iasewMVxjMTVJXS5CARR8RG5vVBddxfzCHRT1GjSHCxMb8BpaBYe8tbN1VaARXVZd6mVoJeJkAZTcyBfcN9o",
  "key26": "3kufpMxzRH7drjZkSQHPUFyM9jLp6WxHDhcP9mdfUm156SWuVVKCDF5QpCTitL8aSfzwFBe1gfLSNHYkUvpqXkfS",
  "key27": "4y5dK9RWmQLj8M8aE6c98mZrNE2JF7dwPCS3pbmU8kyC44Me3RWr2rsH6ekrR6C6Drn2UnsnjJQYsDzFrVqBAuKD",
  "key28": "38JtYrFbjCeLvYkwc175P883tfdR91VTiLsP3X3ieTTgAKAfEcSfwwdeXus2bHLdbVABJGSzbQDFdd3sstNJxpNT",
  "key29": "nxQjbXrzQcRGP1X2rANfCDoWwVGBCkEzvZEKiG2SXnwNhRSHy5ptZCHFvZoPQyDTUF4hi4pBbJPDBqNuz4nhdj5",
  "key30": "fbRpmBqb9Ev9kV8FVwff3wmvGDQdWqruXzx4MXGN4hyo4SHcFDrQbr6nzmPWmeuBhNX2LRc1vX8tHUGFQEggtta",
  "key31": "3iM8YdJ8FbSGBJ2T1SXRo67PYVDdkg4p5BS8y9vVjdN5kfi6RML3MbDTJLYCm2JAZ6GiQkvk3UMf7kWzpqco4K6E",
  "key32": "JSxjgM9W2bRad5pNSNejdE78zC9iCApBgc56cMfi3Qg65wqhn9h4NkC6JUE4zx7xWudLnpubbySwxAH3qRbCios",
  "key33": "5mxY6akjimLJTgPNhTMUY7t4XRbFx3LVEM78dknAcQyT4ZAHpDyd2Z3Mp5HrRRHdV5Y9jCQRoRN9iN6JTpnjGn3K",
  "key34": "3aREJMtdVgS5qf98SPwvSJP58NVGf9mhxumUvdPsaeNL93XV5gNtPRq1SrGuhh3WdUXXtvPZHv9W5UergD4VfwHo",
  "key35": "GMhjhX9gp9vPNw1jNHhjdZvNfpz5xxPzPMMBioSz2TeADvXarJGuCjS6vWjRA2pSbE81Rmfm6dFS5nQkDKbWYUh",
  "key36": "2PVpvdXrL8CtcYCSFU2HjYhmDJS4NdNJQ145AovyCmRH8p3Dr4XbzWnDnKbqiccJeD729wmAfM5iTuF7QYcCgwiN",
  "key37": "37GZJc3QibsawNrqyhmuC4gJUKkJ35YfkfTpyddrU1nu1UpSkKqqMhKHuyCqCzZzL5sAJo9JMzFJNdc9aNjQNGJt",
  "key38": "67dqfqVV3RxeH1rRsHCs2MfRShSPKzerRF32SLkUZ1xYT1u3j7x2Q7b5Ua2FPp5Ewndrujz5hYCPpocjVnyxaKgD",
  "key39": "4nCPP9BKPG2EuekvNhdinNvMKbT3uZPvAvvUHExVvGAs2qXRdeMpD7693e5BTgJZnjravmBS2oNsNFyrD681YTgU",
  "key40": "5UxxzWcvLeuqdAHPgoEA9VtvAXYNSVNxvf6UFPyNzrnieh3bkd15vb6BLSy5Nk8di1gHPTHYhLLKpY1kJChGPb3p",
  "key41": "4Jxxtj63NZ6crVzK9trnxhAUcdc3Creqzk4KXShj1aGNB1MT6158AVkJc12h3uPR155X7mQEbxuVboxAH9QRFW4E",
  "key42": "53T3hgbb9TG2o5zws4gmMJrQkg41xVFwwdz5LCubMjxCvbKFv8hbXb3qBBGDwj4yBE77KWpo4nSatt5KEGHrsrhD",
  "key43": "4fyzz6RN3WyvndXuhWBWx4Ws19cUB4tRHr7pykaRc6KayBNWZ7RTAnwJ2ozdkokZnXCXoi8oBTcTC2Cksaryg38",
  "key44": "2mcwRMUhvGupiGnpbJVSJDrAe3tSSHjM26ns3EYMTkwWCp5RmRSApHE6evQLFtEUyMXvfpFYKXcmTWkWSNqQTbAd",
  "key45": "4ybfVk7V4WUUse8oVkzH6eBu4TY3f5kyF6gFUL1tEZ2w8JugX6vergAnYv1kesmmXb1oWc6bAjbBQommCkEbAKXL",
  "key46": "5DjpSWNbeECgE4nD1aSW5SAmJpm2kq3YrqZuQLCioxSm6PRzuBEUEhkCaoGNNPbmcaminuPRsNME94cqR6gpQybm",
  "key47": "5FWEAjmcxkPkRjgVPEmSykt8B2RkoPZ7GEgJiYh3kiTVSBDXqQQkpPGqEkzHox1VKxDcEbq26hyN5VRZDrhFNYzD",
  "key48": "43koacg8ZUB8ZofwEhFfg82ExGH9YGTPEZWMjB7zEGm7TWa1dNsKxd96u1kz6N6UQbE1PHct7k6D38WuyTkRtWUv"
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
