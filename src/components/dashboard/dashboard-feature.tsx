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
    "3GWfAUoRX5iPbx8L5S2rNmcpQ7UuhPKB2zgPHtPp3Z5NX1VUh8HU6X7gd4xzAzpEMCjgZNuqY4dSgahVuaUtQdUs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZFU8kXt3yKvR2GkkmpdawpipQdj7zHTgdDB936harGBXHQhZPkC3k9XUeaKRviZTHpDuhyVxoWsqAZDTkqCQZ8d",
  "key1": "5xJBhhPEaaqyNVckeGCBgMBBoF1j5r9dyWX9fXnCcGz6gRjwEDJ1jtnUdognt9UVCy32uXJ2AEBSEn7LohV2xwoY",
  "key2": "3ZTyoy5iqXHRndUKtcE6RLegPm1eHLjwiwDb2Ea83RFvN2yC5EGTKwxCPxVUeHWR2yA1uGFq12grRuU3N2ChfEic",
  "key3": "3cXP3QXmKZfEneWkXpu4MjyzL475LrLz7WUJrMbTBWiQW2Gg1xBg3jSGUuCu67QC1n4Gf3AMaDNytsN1GtrBQpca",
  "key4": "ap1a7JRD9NgHURCKnvTUqycbens5naHfMoaHUkg25ZxHwYMhFiJqu4CgvzNxR3yFsfQZS9nT6z3NiYHpa8koAu7",
  "key5": "3tmdLd3geT8qNXXijPdxh1pm8uEMg2ReyXMMR1KojPins8gMzDfKijFpSQcQBYAhwSEAY83xexyEJAyat7U7yzSb",
  "key6": "5oz7jkLKYtnvfED2XG9DQ7KZoX8awkrGRzMV1dNvii4fevUdRL7U6e3Qr8myP1QSiQbqFyJhgioM2cuKqhDvWxva",
  "key7": "HanXykeYN7ognNtfWeM2A2JbaaYbD662rNN19Z8QeBmbJkp7oE3UQdGeRrK9wc3LPZQ5rKw5576Wkfw38T3cwsF",
  "key8": "5woEZRcyJFYEz6MnvieDJ2oupDCtPNesugr6sKCQsmqyfucPmCvEgLzzhEG5AhPTtCi7ZgF3nXpvZWEt9uzQRb6q",
  "key9": "uusU9xd2YHe7asinc8V2nzc5fvVZV1R4bYH2tvzWaYGi9E2HouSzHm3k2g9i7zbK7ELV2BmLasMvw83Fq9Er7ua",
  "key10": "3X3T4JgCH9PF1W5rciZaWcofy92j8CHmwsgzKZSf6MBPRsnnMkWxDgtvN29JXkJc1M3dJCXaL8C9ijZcMAAfoYFV",
  "key11": "VG4wg1XBnyr2ZsgiVBvBG6xdvAesT5joKzrgfdS9VcGdSw53vjMQwxgwvALgt38ZdRWrZRLHYQXndhYjpguKpPr",
  "key12": "s7x4PwWEKK1t86Co4ZtgqdjRPagvN3t6ioo78pnfCw4sWVBUF2VdgfgeYc2Ahtyzvy9vgrAmRLrL44HZDoPmdrz",
  "key13": "5Wxjzch4CdnzngtZXKwSXdJNCYrfyeTXXGQB3Q6YYVCZzG27ewKEfcZ4ykPRckVmE5epMWY6mUNVencyoYt9Ynbc",
  "key14": "2nvkQHr9uLD9VT4vincS1ixmLJBy8RQGZAZNMsPPRGnDCq9vz7MGtd5bEjLQdm5YSgLLBKeMmtqr44nfbRCZVhpW",
  "key15": "2t4FraFJKGCwbECowXV3g8bsaU17Erg5EaT6UH52yC2z8z9ydBNPEKBhcxELFipnrgDZ2WaKRYUaZMSYgYkWGhhd",
  "key16": "2rhvZNV5xJsd8524brULdqUCtvChK5McTJAV9a3y9s76TR8o275PmMCUAc6caWNAxnPnD4PS6iGrXA5uQ9cvtFh",
  "key17": "2QvUkTNsXq2zufgqoNTpZoRRVoDe9aGZY4CgV38FaWpZb6tzVHywbKyNwRWadD15t1YbAbNLoU241WGtqZ7g6jB1",
  "key18": "3UM31u2ncLcoA7CLnUMc1Fc4hHdiN8uEKdbhKpBVCxVnq38SNDyQmZGrsnnXsaKsksJyLMtu93z6N5qixgRf9NVc",
  "key19": "5SF2kH3BiJSgMBP8qjN3hQBPDsv1JJnGfdC9ojXo5KJ7U9898SG8G5rJQVktktVetSbkDu3uUBKtDvMHUbsS7qmQ",
  "key20": "4kNFQMV4yTMPbVj4z8Lum4EAgpBSLmodyqKafi26FuUsEAk9y8nFkQBMvM1u24sqyuuEaQBpCFsCLk1tjELSjo73",
  "key21": "2UNCkRtbqB27XtVDpGekjbrra6uT8CRNhEstXH8nvzjHgEcaAWVN46SGen39PuLZSs4MCN6ayGLJ7xTnrTiDEpDA",
  "key22": "3M6Q1S82fpEL7HATXByndGC81RXoNjqznKXtdPowMauLsL5CNE3qFhvobfteq8GVm12fxnzQoLfnpCeZrn4uaEop",
  "key23": "4et2nAPkw6N14gsf3AiU5XR1YLcX6uCPFLM5qQqW9zSqtLQaibvLbsSCVSekYbHjyw1bDWGuG7nzJX86EiTotZVK",
  "key24": "4nUDSEQoy11EjvTiCbCKVmvFHfffLWYg9MyVpb3cFvpf2EynzQHnwB9ZrTQnAPWYRwQmEpY3d7JHKeEUrBph3ELT",
  "key25": "5QpHiMwyvCKULUzzUh7mu8HN9ZDyGPSCsHw8iELwGEurAXc6sXzM8PRHr39XgsdyqHj1qMxbzB623A9vSUD1yT3Q",
  "key26": "5dWVhkVFUR895YJCBcwmZ4Ee4t2cX7kXve45EN4rwwzEzaK41UzXUYFs2JY2AmgMSNTBBbxEmm17oj6fdSAdX8LZ",
  "key27": "mgU9pniwQQ8s24d1HEGPF1SQq9HSH3ke2A8oETxGQ3F8ttiherxnkrfVpUCJwv9Xc1d7pLe9ingmoLxWM9mxyxE",
  "key28": "56S1sbMfisfDf1xpC9ZDWxux5sz25capAEdUXGhhNYMRhzfP7RfCpwVujwWXfenzagNV9m7eqHe74RkqCK3ni3XR"
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
