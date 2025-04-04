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
    "2cWPS9ozQxM4GENL23gyUKvuZJ888YhWJvJ5dxMbePfkc9EABB5crmRYAkk3j9fzr7v9eNTeNEs5vRcLa2dePS8M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X1AvFMKnrdFdEETnZgsS1ukRCkPPba1vZkkMe3kUTU2dW6fvuJwz8uQsAipxeb9xcxz9BxZ5qXg8SXvVn7Xtqrx",
  "key1": "2tipcmZd56UJvDvoXA8mFP4ann5btrYTx8mKL3ykdfFqWc1K9tc5Vnz2dbBrfDxDbLxoQEWZCnKopgdExfhjwNTH",
  "key2": "4KGqeohPxHSnkUEZs91Eo4x3bx6gY25SUVEs3AnTJ4BP3vGML2Eb6CcPHnGUBF2eYmmdoAdEfZmiTqNr8tJGpJxn",
  "key3": "61Ra1VJQuJpfPKKxgZxTLZFXydqqdz1A9YCio4U9QhuBt5VKAFDmEAxyNUTXTzBkvDp7gH2QFkdFnpeLhvXjT8hn",
  "key4": "5sFQdBAijmTbfaP6ef9gA42reFRTyjyecRifhL6Nuk3qRVYnHjAmdB6DoUdujJp8fK7SRxRSsUxLBqXJFX85moMk",
  "key5": "5TSaT1JLvMbC4vTjx7evD99WG7VuchQGkixyteMCLCbhPGVmL2KiQd49B2UR9wdLwNdvZ8NkpaCwDx7wygLKxZng",
  "key6": "2zysCLBNc7ZwB1VFes3X1V4AXxqcQz2sFxukvy2kL5yMsjyFg9VQXHzjZ4GqXE9egS15XSKsdE8eoDc8vxPWF99p",
  "key7": "5JT8wcPNZd4a1Lbwxi2HTnRSY5zmX81SmtpHcRihbsGXrtFCaZ3RhvaqHYU1iazLdapk4QkhLcgnHZzVmbdpbfp6",
  "key8": "3sYA47Yqc2Az8NLkVvHvS1VHFcAr5ZFdh8hpzEBfXEJDwL3prQomqscWNqQNEgmB9dqmNFf7hEaToQkmKcSmvcWQ",
  "key9": "5NLGiRw1VAExT5MZdg99SKmwcwRS5CsCzXwNW1Tnq3hcbUrWWEwhHRdDNrW8fi9zWNeu53DmG656N9zhB5hziMLu",
  "key10": "5D163jQHzyhg8cTA3UqVbYbuNrjjsPP1YS4NvrvNXDMci92fnusXqSvzhHYmyeui6dZxsntfu99bc3TvDwPyEz9o",
  "key11": "3SPtxoeF6pSG78YfitL2SrXsCt1q8pGWigxrnG1FPyuNncqJ615imu3y9HCLhbErBXFJcAsm519heBZy6x9SuNjZ",
  "key12": "4fHXGSDn1JvqeL6ykNKB5ZMJ2qaguYsUo1bAWeu2p8c2nyKP3LuR8RdVbV68AJWkmW7QueYK2zZ1ViTbh8w351P8",
  "key13": "Crm8dSJifh4SHTS4HC5FtQ9oEha4hMgCWoBqEY15w3dYTP9TpWwJDfq4NuVSTsMxaUBwdGebUx2KrgfBYqkmW6n",
  "key14": "51XKDjpi3dAZX8cpSJU7X41J4bXL9rBa53bhm52nKnSLQzK8BLTzxvm8zP9WTQy45Gbx2VFP1mbMD4gTyJAajyfc",
  "key15": "5wrjpqFAH748QPECZoko9YEmPzYwMXV3NYtBTqvZ8DLbziKPUJjzSXj92FX7bBHuhM3Tx4FQ1TWMEigEANHEsDBN",
  "key16": "62fj3cABWA6zSfgMFtiHD9DzE8Jc9NUTjCGKAUsgtqYedZqKAw1NZi3JxCLU16QR5kbmwzHyu2AkrQorLLpffNb4",
  "key17": "3KkT1sP3cUizwtj4a7Zx3SV8rL3L82xYDaDBL1iTXFcdsvT5EMXk38HfVbYozH74i9dCtq3qew5aunweaQtZVeuK",
  "key18": "3o3LgQTCress9q27Yypf1oZ2rxHbZhkr3EfnDb5r2M6JJFzxqdWPUgXdT2EoweYUu3W6N9M2TGywyre9hxtJsToe",
  "key19": "59YPcNmN59LoAHtKrHmt6ek9KT9CSDncjdQRyvo2FQ4ZuR1NovS61Rnq9tXmbJTxBTXBCgnw6kbzXSUCnd1Nwxfh",
  "key20": "2wdZnJuzCBiq3ejMf6okSLH3RFHEgpJC6nUptY1pEiPQigYZubWcVkp9NEkdfogQTykpMLdrajwyQuCw3K4io9zw",
  "key21": "44XsLCnZGjiPeRNME5Ck2o1EK8gKLvctpqg19PRzai4fzxttPkXhhbcDvbcvK8EyGHPf2BzgtXyA5WywvhNr3ifG",
  "key22": "3y35mZ6jDeM4SvpCfUD7mBnaGx1obiQYD94cGTFV8cACp9GPE6BnSnui5NXUBj3dw4JuHfzWkDznsjM6b7ZEguoc",
  "key23": "2cygKHDeMjYRmgcQvsviBEJt3ccycaRTenjF2PRpwRCXfWmvfruUk8xWiR1FtkmnmkYx45fTPXLn1KsgasEU5yuV",
  "key24": "VEJd1nfHaTvmg6xRrCihsjzzFzn9zESycg5Xj6C4qHscY7qa3uMCJaihWuozKPummQTSfFYzpN5zHSgPYZaSCFw",
  "key25": "1sp9eDV5rpM2hUV4a6pjyHnTvWXek8CXyqRuLARwnTugPPBnr8LooHhdKvGiaaY9WksFSDGrXHEqjzWXiVr1oY8",
  "key26": "ujYwi7GozwMpGNzRE21TxA9bk67m1qiTpdHT2kpUtza2XxdXkk26PoQiT2MYdop3Nf7QaBeGNbzAMAtTvqcay71",
  "key27": "2KLVd8sXdukQCtA5MNSNypSdnV4UhwhhBU7V5TigjjSZdgoEN42qRtar1Bi6hDkJzmchXkJakpSStNXnXQuE1ATK",
  "key28": "3umZrZUkFAvnMukU3N1y8E9yujm3mA6wsZX7xeZrwuS1HgFS8uDj12FSo3C1YDpHtwEfy4QkK5gHLDBQ4RmadXG1",
  "key29": "3nveKBteYszQoh2L9cbGhkJNZ9uBFpJv1sAnvH8Wm9dJXqbxkjyiRUD5FsCwzKagdHwgN2TCrXx8omKLg9iDz7jR",
  "key30": "4FPcXDSxGNZeeengjuAufMWhkebJHXGmW4mbsXxtrPPgdKzd5jc29xFE7ZRfbFrrfMNnxRygMB4eSbUnqdxEzLko",
  "key31": "5nBKj6qBbkjZRx2538heoxqTfgGCNa6u8wh49C9eL1SAZLg3wecPHYksBk18VGHbDijWDsN1XCeL3hNKZGVkuu1j",
  "key32": "4jf9tbdNK2FPDZHfpDWbzZaM6T8Miv8MGh3u3Ra2zfmVZaeZq7L4KBfjqKAgMaVgXEGqB9iZoxHXAoBXGMaKdyG6",
  "key33": "38cnsQ4aiYpudFQ9ijxqcCWVPPG41dGiWzwpif5jTDT6qFdYYAGdybEsr9d73ik6A1YxgTKnccSMwCeNZvRFaKL2",
  "key34": "4ezCLR7Yf2Cq7km4VJETvPtD8otj6QjPmoiYUp8MVohGyQrFM4MLkd3pBTPriUzTwyUpvC3oHBSyRNfhsPKxfnDJ",
  "key35": "67Dp4cUBNYZeAU89dpr7rKxpDH6wd4TLA7bBdY1qTK7v6haSvKhiAh8r9Sc8PB3sQu27Bw7tCRDE1SrWY9FkbEUF"
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
