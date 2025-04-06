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
    "2v95gV15JEy13FFk9c3ya6ZdXGcpJrocx6D37YbsDRfTUMobn1eRHSCNGCcaFktEt8XUAWaFoafTMP7ovV44DZWX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jmBt11ZdwNFsbk2Y6uubQw53MNsqDeDZxJRMaUWapLyqYJRCM1TtonRCyq5cZK7JFWcrKowKQ4oLEwXywQUdoFF",
  "key1": "42Ndy3RQGQj9mGjs5y7RvENtiQFZC7s7nmGBtX7wmgGgvqa4YT2K366UXEDuvjqj9YZwPHgehaw7CuMkf5H125qe",
  "key2": "31aTmBZyGXzVU8xYKYfvTnT89pnNgNTiF2cNFBbi5NkQ73KhNcdnSBNhJDrA8J5zxdxWZpNrwc8NPuCaJrp6Grta",
  "key3": "3jSzH5G8WdLKth2nGBDpv8mNJ8ymAJHV8U1QEyVTaHYE8m42nX7YfqaiYmryGRq72YTtAEASioSYsJ8UNGpZA3sN",
  "key4": "31hFCBu2RmcAQxTEMKDq8T3RyNyYJD8JfjGcFHDpkCZd3Vwm81dgL7jJS37cWVS6ZBN9iDkcaf7zLBFBjy3HRWFP",
  "key5": "2cweZtQuHLQrBXtCJ2BWqcygHAMKa8uCCJPLRKhyutE43qGagEWjYfJhvrcjXQremo8Zovq4v9CoTTebCYRtrozh",
  "key6": "5SeDHX3WpbKHaWMfaDrCKfcJ6KPxjE3kxD8FqVzLjrCEH9gCqS2SXfJ1ic2B61tJgktP2z71crQRf7TPq9ESTi1Q",
  "key7": "5Sx8q7giXB8QUAXVPwq4LZd7zeNuQqFphgSYqpyKy4ZwRZL9heSrRz9jX8RPMKBNMBcYiNRJXmUJSXGRXjUTtzjV",
  "key8": "2Lkqn66Pb2P9NxuCps691LJquLPAHQKGEZBxNeFt6gVUEV5zHf6bQEdFXprawqifTtpqwdg5VLJSLLrjzim2EWxT",
  "key9": "2XbL24m5yfYBNL5Nsc5VmKA9nMtgZBQzNYEwgaio1QStTXr618mGadFNmaQ3t54i3BHuFNN71zWzMRji1YEBPsvr",
  "key10": "4QCfvJWkViCEWd24PwwDhCTFZuHbXMZBWhk4B8Bpv1Gauxy2VdPfz1hvTpCSeFZqrhGoigsooaEgSJfy25P1TDE8",
  "key11": "5spvLjPD79n29FtBiW7ZXkHukr1CJcM3iktgbXaY7LisSPCDaTerDHHEZVGGLXCtm3hEttqudG2FHDcNbzcpTsEz",
  "key12": "RyKaN1kWhYP3YSjRK4Wa1CsegBaA2C3TFNh4EXvz8ooXrXxny1QG69rsWtDhJVq9nEkP2bYKf4Z3bxuitQUj8HX",
  "key13": "2rm5iQttv8s1y7E5EGmmMqeQ6qgkBBQURVdHzEU5ymqDP5jNcvooAefFvV6JseYce2jzBwe6143GDNyMUxAnCELz",
  "key14": "478yxcu461nCoz9HV9nkA2oEaoK4ikE4iU3osbNKs6eUu9SjnkG5BgdLMdYYNQTJ8VdzdHmVKmgvjUuYyQP5DP59",
  "key15": "52ZTw7vCyc5pPkeShEX7EqkuWgevabB27UsVZDcE3yhZymWBrcbaKAK8XFncwzz5DqYgMmz5bVKZEN2bpDD1bUR1",
  "key16": "4n8SsT6VifMN8zzksSsPNs47FKyJYgavSpGotVCCR6RJA2NbwKfVtbmvCw6vf9Bf8MJqQxQmJzE7zcL6AXNYVmh8",
  "key17": "4g9GirfdKQQrJQbY4Qe9w1kFB1nME7Qkej8e9ndL5p1TMaeStJCs4U1WAk6WSqDvSPeGtcHPMqcnoaWN5ZRo5ny3",
  "key18": "5MK61yKs2L6EHrnDhor3jQpNP7d1exw7v5UiRyiawywNd3UDaKhKyEg4P3m39rgBLMxFx9tPqyU37y2swD5SundA",
  "key19": "4Ysfg6AiUqi6DjPBTRNdiYUPSQoq8LU8yDLTQPSXtWD1cjk5ZKdkxVrzbqju4wZaqsFuFrFZahfepxbBF1MaBE2R",
  "key20": "27tSbykA623QhW1NgqCwVEcnbZQ8ggEXgTCqNaiGb1LvTNxTpsNwReMYQ15w93p34iR6D394RAJnjb85Zbf5obV2",
  "key21": "cA365RDJCcBy9hcz8p7V6dMGWhPdBjzEBiuKkHpXmjsYn2Ci3iuj4Kxw3YtmdJwmKB2mHQkyrczztnHjnR4LvYV",
  "key22": "3SnwJ8bcuYJVRkX1gV9Egru6STmFkAy7a4jHNUhnYgeWCPBqyJrXvVJzfrPisGS9UWtDeVitmyQBSbuX4nRqaueW",
  "key23": "2zqAB27F4EwgpPYPS8K9saUrS5nAXQjRWVR2BysBzYYXpsUyPEn5QSrTsJjFWFWh8ycm9PQWz2rgVtpw6jTxRKeD",
  "key24": "2xmy278kK2AdTJ8ckLsxj8mPY85NiZ1Ft65e2u7MeZhBQqYZwHytXdPr1e57ByPMpvTur8cubrFFLSv3tXE7vm5q",
  "key25": "4pNWaXHVFfXgR19xuNBX2xyncpU3JbSr2tBStsJYDU8nqjDMKamXdi82MPg4uWJbb2p5pcAK8F41ZWJCsWt25YWn",
  "key26": "MZfueYkSYjGN9t2xbdHvWQNwWNDXoLjGTj7XbupR7c6zZLadqwWweTSnhAVc2CrX2bRFHJ5vSjFfQo3ZxmoA3qZ",
  "key27": "5WQkB2CNp86wgRadAJc9Mjga9fDPRtw9qWrE8HTfkrC343a2ApMZyo6W4dETMjGDBm1pbAG5q8Zj6BePwaZy6zHA",
  "key28": "5h1NsNKdBXhJxoWMpAZn2xWGqiwh7ruawM4aczptM5kxjo3gNuGox58vYKcbRWjuRBnXVRiPd2pLMPnVJc87VZVZ",
  "key29": "4sBBC4wEBQ9mZ9aaegSD1xapMvd36DnHMvgzzVLyAzopgxr1qnzEc3fh9T6ZGipYaxQ1z3LjAcDjEtrhyaCcQDtf",
  "key30": "2AwYXHnqFR8rXFoxzExDbYiEvuEEYvCBVxCu96knAhRJVd6q2e2gxUHPW9dQxbx2W5fvffnCmW6KXqNfG614hvbk",
  "key31": "5Y26SUERg8ycoHuHSG2LiH1z6s5roKKAeY1fPwp64J7cYSokyJe2J7WnKm6GE8J9KyZQCNfxdYHcuwCnBQYuC5Z6",
  "key32": "C5cd9SKxded9MzDczD1RUd1hmg7uiibu6PU5WJPyAg6cCsPAEvo9et4m2ZGEKk7yV5tJZ4S8PXx6ewd5VJrC6Fm",
  "key33": "2pwUzQ5uF1RwV6GboPaaGwgxkHCDe61H4xWoJs94Nn74gemtQ3DqzXSFDtANTUCPg92R4LHDJ5LHNhFjQf4qy834",
  "key34": "tcCZr43vtMH3MZKhpYYSn1RjvPJtjujc1GkkEKbu5iA8e3VcvnheBS7JxUcsyNNZZ4Lt56zXGzLi7HmACpJ64zM",
  "key35": "2i1phGphZ9yj1tHfKJLmKvrWFihzyJTMFUGc2wmS77dovX1jWxqGg5z5GA4BGQYrnXkjaf5t64pziv2j8SXVkoao",
  "key36": "3y6wSCgBA3XMbN7nDFPjWXiM3Fij8zziSnMk2MJhycWvJPbaTG9bGXdoMSMFZc5NFtcaoTWx6tpHT3jLgStQsm8v",
  "key37": "4fyd5nntWxZ61cKKSZga1Eto4oTFPgVEQMQn9KghL7NaQvb6mvxHo7hxU8EYHPeYRNA47Ku1denk6iCDh5GHGNNS",
  "key38": "2n3zbtiGm4iKNqJpeTUgtkcWQffBvf4G5fAF7BJwgQPfqDPLBi65EktT3Q8WdB5aJYGEyMYCHJqoKk4wwSkN4qjf"
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
