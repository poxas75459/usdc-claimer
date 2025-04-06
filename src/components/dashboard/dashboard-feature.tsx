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
    "QopJe9sdRRyCmRPJXQsn8adSTzMmUNZYD6Ff4zMEpDYBSu9VJsvGAm5XqQ6iB9uJUQ7kBC2eTe6Foip6GETSeiM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cUgrwTXjf6cCnR9RrD2vwzLtfW28YVe7beemjxyZ2cj2gju3rSP2AodNsSQtcbTyzAb3dhYhcjaPE73WtnhaXYX",
  "key1": "4iJqq2WDpFEnPtcR1UJD9LKK5JuZVnTRFPndWi59WGku78p9DgspqXEKTKMm6Rwty3VuFk5wYCtgensnZSaDqxMb",
  "key2": "5f85mDnbDegF5mZz76BvXYtzXT2yTwHV1Ee2d9W4a5aXZ9enfdWBgrbnc9UuMWpze6y8VCcCtMRnkjW8BVEXG9fR",
  "key3": "3CU63SRWqiCgpTmMwRxjw2pTqokSRDC39aJin3ujZEhVu3xNXtBHjffNhiPkmmkEvt5Z6g8utbgU8ozzxd1BqhAp",
  "key4": "3Fck8BaX9QKhKK6yq72wCfFqzWhZDtJk996uH7kQux5Sjkh1bGAobNmACygZxtqV3D7zoFMu79YzkhcyoucYw7h1",
  "key5": "YAZAxm6Fztzr1JJQnXA4fvGfvCaJqCc83Juc3SHTd88hag7pWQsy22SNWkyS9N47au4etPaSwJuwkfxcJoTqHS6",
  "key6": "4VE67mpfKfN5VpP53AgExFk8vzFpbvWR16gWhtcNzAAgjAYWqo39NDkCURKWNDpMwz835k4mfirxWGgsXAhcDfH",
  "key7": "22XAErbxwvuAJcXSs3ZgMd2Rdnrd6nXoLu2ULHiDWiUfPfWV8rMJs8Xh7StMXzkJVYF9zUXEU1KdnquQTadwG9Rd",
  "key8": "5xCCxm4x8Zws2zNV9s9KMTo29GprrK9nLMGbWtJE14C83d6yWfMMXjnFYcZQSLkwcJEHEmZoMbLHpkjzf3GjGj5B",
  "key9": "3t9bMyZ7RrQU87ZuMejcvvXrgN967Dy6MupourBR2Xh3UY4QAP4C653kvFAqwzHDZKeY3SnorwYeehYekLqXJJE2",
  "key10": "5hBXQv8XHGVw6ydwPXrSa9owgmqoB3CahZwviJFwvPcdJVu82cDyacdT8Lzvj2gWVWzuGMYvkFmGFxd6JyeyCNHu",
  "key11": "52YYzhTRUA4fYmdqrP6FvSHNNAjcFffiuvtpbdwHetdwxq1im2jfnRuHMyZrJSbF7JRjouk3Z8Vo7nsWjJkm2NjK",
  "key12": "M29ziGoVMCuAYTfrsMpYpLqZmZ4aN9SGrPrrskF2CBiuGMtuv4uA4vZ1NTtqPrseDSt7sAJy1s4WGGjm7wBUGQu",
  "key13": "dhRpg6N7BuSmG5LFGs6pL1xeUr7EdEzjggFQ5EQdg3HJamfeQxfs33gryZdfVh3dyxJLWJuDWCACWQsixTK7qBT",
  "key14": "426BVV8DZwkMpVy6UTqFKq1ivcepfnP4KkguAczFQQuaTPRztVpcwFLUQR2mo4ApUNUMrPnm4bxzxhiJH7ba3T5q",
  "key15": "3YzYYopssyZpSwWG4vNPUrCByNDYJwvyDRispMHTheZ71cTzD8yuP7TrduzcwsgMeryGzBWoi94xqMK9KVPxGCJ8",
  "key16": "2KycHU2mVNyRywF3u97ANpqyA1nxGiDV1cEjStmN9EUUzE4HiP71umZQo8GkFrPez7XmKNk8uZ8Z1LrwY78Khpa7",
  "key17": "2zfMKrzJUGUHLPYH1S1Y8HdpcdtTLnjAFDbbxAf6Qc1KoSdgX2gAxpFdD7WKsQBGS6BMv6PKtgJcWTbKuFZpW5ry",
  "key18": "5VeyKXnsyfZPTxn8EnWX9HGFXitB8WxKiuUwVbTAVQYbjzJBWfNoSc9WAA6YBC9tUvVCpUhcRK7a6WE3EsbnpYDi",
  "key19": "3rjQA9C9WxPmEDmYktR2pyTEwTz47HTkvVcaj16Disznd4orQoDCrXww7PGE7xCfE4QXvAx9oe7grPuoj5Zwin7S",
  "key20": "Q6eVpJEtbfiFJHcm7VbwzPZhYiGPuUnpx47Hx6fANtDmSif4R5qoMf9NBeZ5EL3uAuPagPDJJW2DAh6tgB6u21L",
  "key21": "2ZzwxyzTkB2v4gXUxD9RuggDcUQbnsYTda45V9NVW6kVGZHzwtct6HHhYtLgLsGMfeqGFMZAxpEUBUKTkxpN9DpV",
  "key22": "s2oPpmzo49SJhNAwDUYRgbJVrp34QjdwWua37q5nMVqFyGCViUt7i9d19z32Cy3MHJNra3i3eXrb9N44SvBHz7y",
  "key23": "bRw7EgT7jVT8Riw8RxKmBoooTHRBUJEShdyEbC1t116QhBTXFdxzRYgai7F5gqsJSssjZFLaqwH2qGfkRSBp7ZW",
  "key24": "5zQaHuMrRmp4JC1kzFZuTUDARpnyz515z35XThK76ZHdjC7sD7gFLYM7mXc7xDkB9fqAp9yao7revMVVzVq9ZF3p",
  "key25": "2bCoqJXVpyXaWiYDr3eDMay7k9PLP7pWcV5Csz1f3J7zRK7cXdkxYYiFCPEEneuxJyF4z8B7MbeLRvBgzSX5ybPn",
  "key26": "2N6jPqEWnCLbiwP1gHSBwJ7NAtewdLXhUy8uC8mbLULc6JAXKBhquUHo2n7XTgTgUwsyyZPWkaanE8muwAw7JCL2",
  "key27": "ivPZnb7xF7nHsmPqSaAho7FeEtKCt1jtc3HeRevUU1kXUmZu5iThUVHEdoZRPSmep3PpVzuYysvDMbs17JEHsBv"
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
