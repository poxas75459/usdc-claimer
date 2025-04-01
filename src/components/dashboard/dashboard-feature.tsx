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
    "3CguzNwqpK5qxKYLVohM1p7XHtMVhpoQD5p3UxUb9x5UMNaGyd67Wa9DoNk2aepB5isgmaaV3FufPEwQg52ReH8j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PPdHXUGwxsC4j1Dwri8KFMNipzByLrAYtMyfLd7Buzsjfb9QTdufYtN8wVLYUBBBq3fA3gNHeunGEkR4MXgFC76",
  "key1": "3pQiyA4Nuwuhy2pnNzRc8yUSQJ16ERRJTCMWJHST2sd4U5Grq9BNjEtUkjYJxzcQt8CWgAGWCVdn4mMUzH3NZMzr",
  "key2": "4UFJjtNG8KK4Y8oXgNoU4MbTfvg2bX9F12o3thGfNLo6MMkUEyF45dToSEXffhYSgXQPCdnC7boH433MsHq4Dyqb",
  "key3": "wUMnuAzcD6ufhiMh4xB9tVr7RDVqhqCCdRN3cJeWi7S1FHLQysNuvtWeS4XdGvYbTPSt9rCd8dG1QAcUkQHem1m",
  "key4": "4QztyNKDAat6FDxVm3DfDwwgWASqaGfR5LZC6eY6p9CkHDmjtkEKYKqa7CTfS33qR1vrLxM4N26KXR8xTunbNPFe",
  "key5": "5LGPj2mcYSKzixnHujMxA5GYdSgBvYCeFoULeQbHYNm5Zc4hzuCoToEj9jznzR4b8LUTUVBE6M78CpxvWVRBVTms",
  "key6": "4eMkDS2MYujFSnEeMsAx4J5KFV3auy9sj4skLSJUndm3RHrhJQipU5UT6PDDpYapiEUDz1pTwiRfyKWFwtUu25Wr",
  "key7": "7Y1Z5moBTe1LuAAWPcvcvqzJijiwM5DWo2CKBDmqiYAvUnDbwdAGqobzqmBKUQQKaxDdhB58nDxyKQjfKz9XH7A",
  "key8": "2pys4bE77d71CCJc1aRSM8VfSQMyEDLrGZSjeznZyGs3E95xjrj2re1mhnnKjevLjojMGH3hpBhiVQMXaafbyEiP",
  "key9": "2FzTcpxQZNRSRAuYArc1VSkPNoxBiGuuvFm6VLgmVbMEuba8aEqJ3BPXe5whSMt4cdQ8GRCL1M1KTAm1eRUKYRXv",
  "key10": "2vrtAVU2M3KVxv8CzUBaiA7HzF6XxBVppXQvQmBNBHyYQGo58E8fyyzYFXhiPap4zN32mUntTeBzTqkGcGKFK4jh",
  "key11": "5q57v9x9KgY6xa1dcd3MTxqKAEpkeD7aNtk58uvDgLrKFtvnNegs6crzzrRr84YfAkbuPGXHmRLTbZFF1pZftMTE",
  "key12": "3LNrmFKiY2mDyD2BdvpJTPrfWGbVaP1cvCMyMv6o5XWDHxt7Tn4DBzSgrAYXTUz7kAovBonUd2r7EwWZnALa3WB1",
  "key13": "2F2SCcnYyPZZumgbFN8NUDcxshEy3EVXHeYJfm8QzC9RZpxuHFghSJNknFv8W2xt1Bo1qDu15MUyEsbL21PJahCS",
  "key14": "4As94TkxAzTpakPuivqp1EkS1fDR6Q24V7ayGnNZD2oAVxHT8pb8e85WJ5Cn7XEjoj8kLufkshE6WbR8czk8xpcC",
  "key15": "3FiT6AfxmSr7HNKYsjAL4T9max2WZGAHkj7NVR5RTBQ9eCzpGBz7g6N6SqEHnrX1BGtcfq5tsnm2KNmzjBm7AteU",
  "key16": "64g2CP6Zm5DyukveFhjeqrXsNr2Ygitgy2dGARjZvafWj3yFeGUyHdAknLcZTZ7ZxXwtykU14mDJ4mDtU4QKBhr1",
  "key17": "2TAtDYJeyqNBrqMQNL8tnfFpPdXDcS4hGytvHFbb26mSp4iT8GPXwhrnXvi4pM4ABBUdqG4VGkzmVE6Tnj2kCguu",
  "key18": "3YnauEjYV1rAcKpaF3ZNtS4oxrtEfV675TSB5c8ynsAPNbdfnRkuanFDCRGR1FghBcnkHqPcm5RUsPT9CTofmykT",
  "key19": "2Sz19h3JFZSKg83jMpoCbbU9iCR4CriYEvtH35jv7axD6n1A5q1VsiNGvZEyH3NcRQL9FNEwfstavZGGDd6Wginn",
  "key20": "4mwdVaKqcmwptuMTGdiK3taZkejFS9uaWXFLpZWdF4yBZJFGS6oHUGWbajsYM9ptzGJExtkrTnsodfyAhPQwp56R",
  "key21": "3LuHKxKKN7fR9jQpBXgTe9AysvbThScC135bkwSfsdhyvmyhCtncMMLD2mAuuN48onniDMTJ7u3BB8UNv3k51NSY",
  "key22": "aYTsj6pDH2PBuxA76sVxuXfrTpnpGgDcAvkA6GoAjcAG6t2KAsbvEe2AZFkyGBzNJyeTNDWM6rpo3Cwo6ze1QMG",
  "key23": "35F7tPp3ujCw13pajeyVMFj882FmJb8uSiimwSGnNoRHf2XKWi745KxZBTRU82y17gpZPHEDJ313L4VXP9iMoQUF",
  "key24": "5dM19Fxqw7PfKqrFrs8ZTJ12mrn24jsKbMHBFwfA6zHkVE6QatsVk8ZsutAc8oZSQmqG7uWm9Pyum6xZT7WMHZoW",
  "key25": "5VkpQiYgbB13CzAyF9LX254cyHtQWpG9Tu93ePiRkjSKSKmz6mP51kAJZXWpU63Qr2BH6NRU3QD927LvrB6Sc5ca",
  "key26": "167sukmiHhstiZyGgJLCBv4Bu9S5itiCcaeMLwBNCd9VhhbhEksnTi9Rqh3fcF94FL64uGFd6TTDc1ogL8rsRVD",
  "key27": "5Z8z55YA9zzWpTUjBYYcEnBzQFa9JToAcprgrRgGTwTNaUAx7Urwbp5qso6c7NkqP6giciELwstc5osSndRTt3zA",
  "key28": "tLHx4EUehAQqFrhwYLME28k6wshKWs8adQBmh6tk6DsXWxWiHa86rP22G18v1v58w555henX2c2H8GK2t8R9n2Q",
  "key29": "nxiEzNwRZtGwc5rGvCvVAzfhRHXd7VPCdwgbnsM6x3LV1XwBTb7MaYgJggWqUAmEBMHYZj6W5gR3CpofyA1GopE",
  "key30": "3LeNW1MEfv8FpacMn9BmrqFzSGjA3y8BMRWkBjVP5CdnUSRSnMrYsAMCm2iCxSgpxDGgzPqkY5BB3LTmiMoLsh5a",
  "key31": "4dbvfYHAzJZs8ueD8ByNSZXJ5U99YBanM49po87U1fc5sbbc4K54DpnJLZZkD5gKP6b6YrtLE4fZtvZHDree522X",
  "key32": "WXCRLYbLdA7SJxp2YwFfVRCd4ffgEmtjmso6vSmmcA8gRfsCn8uJ1RyJDMQ1PZvSCbeeMbFdJepZT4LbWPSFgJe",
  "key33": "DbGbz2DPpUKxctGA8UzWNgThhtDtrdAoqJPZTNtEpmQ8CZecm8PUkhu8CwCwRWCvBDUpRPisGz8BsSu6LBUyMHh",
  "key34": "4AGd6R44UeHRoG6JDJuQ7eLEHRdxCNp9vFGkgnsxN7n3ayMkKk9HZgUx3jqHShnAm5DXvmNuVwyhzJRa2eHsYcJ5",
  "key35": "4wqNJAMnd4bCa9mgemyCpTj4cbrwWuZet95iVMfB8x2EKArEZcJGjnA5VJa5V8U8SjtYKWBrwx3LQDHz9FM1GqS5"
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
