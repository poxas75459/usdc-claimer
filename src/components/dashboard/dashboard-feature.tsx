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
    "5vZMoRF4qQp5Y7ZYgfHSTNhSpVoN162iVrXpE9rFj4YadvW2H7hGgyYtqMZxA5ENJEzgU1tMZwN6AuXo6byK2dEU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A9uQNYiBkeCKAFC1zbdC29TFV5iKNePU4JXsYxASgeyVSZ8M77uZVpQJryb1PPxeH3bsJq8u6stdmU9pgF7afEW",
  "key1": "2PsuwHt4SGJggvoXBvum3YHtYEC7Ktb3Lvi8c23kgC69HLsWCmS71yw9C7EVyYfecWBC3ud3UEzNGWS8ancNmox5",
  "key2": "2kbegGQGqyYAVD5Roc5X6G6mevcjeG2towU3p47ZQHsSamBXSPwmcfnjM79aErTe1CtZhbJowSKhsGeeH3r9UdZ2",
  "key3": "123YTB8TFzP7PTKaDrQ8D3W3DsWUPTygJVpW7GPCwt1Dn8qSEFws8gye7iCYszYmfsMxFvQsRyrZUFnZokwcN24n",
  "key4": "2sCWqEjNDY7TnEoTqFJhj6sVddavmbRj7Y5a9Rw4XmamyKqDxDZujTVkMEmxNBmKRwY8fZKfU1vH31sMkCHjEUH9",
  "key5": "2o152o5GeAmFn8yhDa1Yw9YgvvQbxx1xPK33BXtmQaun5RnDuWquRfJPGE2MGcowpWcSt3jr4SNwm6yP7soH7LDM",
  "key6": "25wocHsNZ8TGETxu1LB8UKrdeP7pEaH7QJJ4CwBo9sZ1Re9BhcidRfLoTFymxzcKT94UCSGZw4H7yMs9sD9MN5sc",
  "key7": "3hjrcJ8VddXaNKZ7nmCeyNYWvCqPehzGUKZkbxMdhv22sy8qAN4YWPmHK3SGAXAi8zw1wr2xfQqgcwA3GnZcZgV1",
  "key8": "SCSQ6YgDa45fCMMhQ5Yy3zjV4f97cXhDNmLc9SyMNwWpr97tK6sPmLq6tSTrSLJQC9R8N4JjhwfxrA2nUyhjxtu",
  "key9": "5Yw5Cr7mHf88gKsuqmQiHMYdoAzNdpfx6JCJKvDmf8TVrFcV2cqUqgnbtWCWimoAF6t1K7WcbZsQZNsK2idHi1Ju",
  "key10": "2i6aKPL8AddcobEz9KhqXB87iGNJdmY5UrziUE9ENqUw1qZoBr7Fe5DcpStuYp5NNo5Db8Qqix5e6bNCgjSSt8U9",
  "key11": "5mpkwDTypjgSQtnWr11UqSYVkuYbTZrHiZngp82wLGCWJ2ZonPu5xmrcZy6ezZZkwt7euj8mwLWgwdXZ1ri6u2vm",
  "key12": "3iHXBPAGrcbwZzwR5YZXC3xr2EyXyKUDoydwKrBeAz9AETuH9a3HbamCHFbiuNttnMjco9PLXFis4BoqAbFcbLvo",
  "key13": "5tB4ARkRUH8Ww8X97yYsC4bL4gtx4fZkVAYDr6hZQ7mf43tgM2vPcg3WMyi96H4nvTNHWyznSnYSPQ6YRsBjnKBA",
  "key14": "5ptcJf2Rv1QzT1J3cT2sFxD7k9LZ5jWhus6kkbmeebfXd79TMWAXx1fTZwaTVDPXJrFtmBP9Bh11tXs3Cte2o963",
  "key15": "2LwguPxrqWxoxLj2fNEdCqf5sXf7HfNV3dFksvTLAJT3RNyrnkD7SdnvwLRZGcrc2KTGGkyUJTPJ7nQDkdHQHQFv",
  "key16": "5Q917dt79wNaCoi96nMByWqTV87ajLKwbtLtTVLQt9t23k9kMdFLp4jC4QPJRJnNcpqrZ6go6HBFTo3hBoKN2NDy",
  "key17": "3obAPNa4gXikVcisYPDP3UD5z5r8VL6iwHhiUg3Av9kEEMtjy85TPLiLdBUG1zRgPoH8Tg8atQHH3NPBziQocw2t",
  "key18": "4zNVE1PyTPqVqScuoxcRfQaDogJEcrFLXVMzcJUpW7Z9pmqMK9T994jC3VQGtouSrVZTf65WeWF4XfBFFQ8QCEhm",
  "key19": "43FSMWZA7TF5TJjkK7KREgHqAFjtpw9CJpHKGUssCm6F1LnGiapbELYHH46W7W7JZstTb5vLtHQuHfHDqdJbsLHB",
  "key20": "2aNzVcg9Z9ToAXsCpTpt4NWcQJYCj65PX4hWKJdQM1uUGWMXvqZDzre1gJEH1ek5HBfbiQ2mPMi7VtSu7mtFaQ96",
  "key21": "54NryBuYgea1pFwQDcTUg4xMTQJXACVBRVxued39jsfNewtb6r4cNLm7T48pSd3qVxZRLSwHo7kCm7VUcZZGkeUj",
  "key22": "5ywm75ZJ4Y3mmzgqJ9ePgQhB4feQjbTJUUJQfpyaEEELQKC6qeoqYvYtXE4xBnv7Ux4zcnahsaYNko36PkjWpUCT",
  "key23": "425A3vdHrW11vYy66tn5zensXcGva1r57pNdykuSSkWxRWLsM3xKGa3F5mVUXbM3by8EJUi4zfVMdMupQFkSGisJ",
  "key24": "46cuQJ8Z6Rxqy5aNYLfywKTdf1ocgXpzKmcqMQTGEmUG7GqHvzCvAzBn4MCGex9hFqbWXpUzvmLtftUnysdeaSzw",
  "key25": "edGVjmKBib95vg55heiR1so7TptponrpssoZA3RiBCyM1CXdjbZmqsiHNNSFyuJiqV6PjKWtLjkkK47PeKCTxgh",
  "key26": "Z57FsMLs3WwgXVexqU7eWEzmqs5eJ8K5i4ZRb1X3JAS7PR4EV2ohQGoCuZLr7ay2r11CGo7zFX4KW749LdVnmFN",
  "key27": "BuDnRAFRv6nodz3kBTr59LzHYSbYD4jRGoJnoKUa1gKCX4Snj9o3FgUkB2WLk2FA3DUpq8XG2HBht1jqjW99nxV",
  "key28": "3zVC3aaHjmdRq6S2AFN2oeHELMoCFgRPCQqKLuDvTabbQAkYa61NNfVuVpSwstfGqm9zENfU3PFmjdAPq7VY75op"
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
