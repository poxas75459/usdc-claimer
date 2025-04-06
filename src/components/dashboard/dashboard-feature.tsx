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
    "52bX94fmDP4bK4QLQLXWjcNfJnu7NB7aJxTAHYjyofNd7qJVSDYVUooc8LNzprH6tPP2zu7DH86bKDiSCChxcVmg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Rx67vizeRQbPCf4WEuTK8uYqF44L64MQfgXUAZuwRvRL6VJHeWJzNEvi2YRmw1PHHCdY6pBYgue6hbFC6Vnfhhj",
  "key1": "5MdLceN85XMeEFSeePX7Gahrpo1bsnk4n7mZL3KXYhSJqKMmZfd6KFg18AmNdnUaaC2avZUmuYgdEcXWymVvjb3T",
  "key2": "5ji7r9aHn43vWSFBaVhdHYoKgV1AnBb9MHFmnaZm3rfiyBAQZQ9JHF3TCsweUXZu68E3zkCTUP1CLe57YJiNdbfD",
  "key3": "51xZnNBLWuQm5q8rXK6GiP4H43HLrHqpP9PSebtjVWnGEucvW8gEhZ77fGQW6Wd4gJp8dL3so36wpd2fjR4LdzAP",
  "key4": "34yJ4LwcD1tmw5RQsN34mJeYcUcsYnVgvxS94YRmV2fTWFhMF9xCfs3na7vVmeyvQQccfS9EopjfasMWF3omiWiu",
  "key5": "5LjeVzcti5ei6KGp8iZd9BQ4wH4mCHWGo72dJvnw3VB8AEXyzdjhMuvgZmme8HkUtwPM2DHRBxFyoRrNyBr6qSrQ",
  "key6": "EEs4zWbta5fHpkZk3onxCgz6TrgSB8CzFKcmeFJkFhv3477EuD8kELrgW7ymfoEJwWY8EzFYbe7djufEKxurarh",
  "key7": "3RoAtVMWeqNpFPx63gnZQ69JXajRowAvT57HLEdsrBZgxXqYigZ8U5nZtPHT9T1BTmKfaMyD2qGxbVxMmoTX4x1Z",
  "key8": "nDJq79nQSjrMRRPnmpVc21UQ19xbC5fkDmP3NuvAj7m6siCvWBbzTcyfBEngbKu69SRaGRD4gRsZaMH2LtXoCNw",
  "key9": "5jtLafH1xC88NxspcBcA1tAWUXHNnaLHt1hL2nxrDLiGKJu4oP3uvA9mh1kRwJx8gcPgGArGay85m9tfED4EituM",
  "key10": "4XVN2m7iFVK8AFD3iWcTM1MBeX5CteAFKw59pmNERaSWN4sd4Cyzd48q1uvTqBGwPicSGXNKo8rf2asMAcWiQfuJ",
  "key11": "49giMJgko1Vk6xSK5Z3LiAa8cwAfqfHsJH9xPB87x5NkRXJwSCggXVXKgsamahfAUmrXLfk9jXqDdeg1KSzrZ4J1",
  "key12": "aEJUaN7WuTdhwUfWzzg5x2L7Zcsp6JfZUApfvyPQTGGwoFrgL7sFkR2W7Jis553sNetwbbQHd1om1ZD6Zhx43AT",
  "key13": "32n1dRDBZ1V2peABtTeZKcbJsY7Upn1cti551n3wF4qXMj82jNRewU3UV6DVspFurxT6GxFSjMQKbHng5tgEkQtz",
  "key14": "2KVr6axonNJJ7kabkzqaywsgwR6RDeV4sg4fPn9JsT5oPUK8fpkLGn5UXszhBokYnLHQWkRZauPwKjEGhjKR9WY2",
  "key15": "5z2WYy6nSDbMdz3KC3vKwUvKF44csUsb4iTgQDpMUhZQtEZshMnux8PkgtS45ekQUcuV4GRzmDAs6F5doXYHy91z",
  "key16": "2mrmauq2wBL4vb2o1eqN1c5w9ne6v3kttzirexd8fE1p8mmc1AsbSVKQr446qqrKNcdMsBwEDjnvbwLabsDfVyh",
  "key17": "3a7pG33n9fqzLp1ykpmdR4118q6AovNpB6RyYtf15cciNQ1avpmrFk5nRh4k4wDqzQtVZQx2Nfw9c1xjZJZJYwYr",
  "key18": "422cv8vccRe7D5k1WwCb7DpXKAm4Eyez2DYXWYLvEtowLmwVvjvh5DQ7MsBjfCNUdziYmFqF57cfsXRG27RLDFSx",
  "key19": "3uWgC6pF649eYaNv1cu2tv9nv8EqBJgzfhhyeygupayCu7tkrVVVkkAU9aZC1NhQYN2UnvDRa7383AXbWuQvLScX",
  "key20": "2JHmNwoMwFv51HzBDxDyGx51YZZYbFqAERMmep3qbxuRnm6gUpgqBGZr6LFZapHdH7H5zUuKYYqErxUBSb5S1XDP",
  "key21": "5Cv9cEDanUWGGUWFoUiJPES1NDkdp7papMQkFKJM1F3bpt1otD18M6UrEekwABozPrZpiSo6uQxEHmNdHoLzXqhv",
  "key22": "4d5Xq62qFd6YTCb11RsLQguBDXJycBujPJ1m6112awnC56psMQX1eHXhXYK5rwGE6Y35AP9qmZaokYxxa1rMMvxt",
  "key23": "3B2vxgBKoGVgd8Q7nukVeCHkqnQsWrQ31rmtEMpnMg7ZUf53LtCv2mpM2VBFEaD5AjbBKYaS2NsdLgAPw8p28XYT",
  "key24": "5QQhBNz6Vubv1r3kedjcQeowffVKQZAsyho8g66pbfWAyb7XDC8TQGUvED2C4gwZHL6zJ2aoyxXRX8Bkbnb1pGXU",
  "key25": "5bkLookDfyWces6qBQbBGxM1wSt4EeYCkpocpRanjppUGoxbd2HPaWEJmW3sTUbxmhzpLCKb6A2Yg7TAkdDvaHpR",
  "key26": "wyE7zkLiRhKQPNARxaaRVuSzcDdr5R3ahtKQ7nNH3vqDyR4jTajNFeUAJKehzAqc9tmgpRwRfHRjmP5csrJ7fjC",
  "key27": "5Fe1hRsy1SjbcEx8yjhbRcC7RAFPyzhzDs3Z7Bo3ocGGLFSQ8SRmnVykVXPENN2dA9KJQqCnJffkSFpQEjQg6b9K",
  "key28": "3vv5bW38xtxbgzLGX9k94dvHTVqWCx4kkSzW9ScfaXXdsg9ysVLSXYpMtKUhWnHhpQvV7c8bW6c9FTekFicfec49",
  "key29": "pSctWQq2HdS77h674S2mct94N9aJHFVhhp6g7vZsN3G8au8yDM55vaPCrK6m4hVVtFxU49hWPdVnNwSCvdJ6YEk",
  "key30": "LCddaZLWsESfK5BhRgkkfzT2YeiM9CQaf5kVfgTYpyqwZ8JS2349La1kCQryd5b3553K2czVFRZYTJA2ZpWBHqo",
  "key31": "576oEjsGusF7ap1HCd88isSDQtcHfzcXd7b1dWnLmCvMxewv417rWLJrwqWH1tfr7MfHe9nGQijt3YS1pejyxDLk",
  "key32": "5DavT9PK6DMwudiGqJwgTbEAKyzd3yMmrRxx852Zk6yU3zZzoU9Z8giEskQpqdZqmcb5PCuSx842v2EYja8YzGam",
  "key33": "3jgCKjCPbdCe31pR6Awk4RM55LqaZsM7Vjjpy6CFWt12jjbJJRxhJ2kvy7Xp6y7U7rD8Dw27hsfAaXvLziZo2Ftf",
  "key34": "fXkf98hndR5wghTGcnunEd47nHnYgPFM8uouaBT9W1wpMw8dL9t7FtUASujuNsJ9MrxJEiGN4hreY8Cfa7M8gdf",
  "key35": "3N6jrcgK4Xf1kRVQxZ9KxeC6aKYhibbkSWDjV7ssBnrG2Vqkcru2rgYYeC4w3veVaMcx3L5ToVd4VrjnNbpPGTDr",
  "key36": "433KdUTeQzqkdftzagqrQ4L9rN199VoJN14eXiRMhypm7iPFdehi9zXs9jT2pfworv927tWqGs6t554hhHuBPrP8"
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
