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
    "uEnFWxarFAC7UG4MjEYyR4Uiv8xbYb8PhJeY1TCpjbMSf7MA6aNiDeKADJVkYoMHWdFdw631ZLkzB3EdniWFdUG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D1JTGd1eiUwCuXMT7a1w2kQ1nGahHsuNwgMKmCPTYfba5dDwu8ZxLM5Zw8Ah7nhTRF3QcKDeGc4gCTVXWW34TVz",
  "key1": "31rfCoqfWfbowYqw7gfjUDwyUR84ipbNo2Z5dbwcvnHtzo1CH7VTDD6UnX9JNPRUaAe2RSMw6KVMe8Fe9J24G7ne",
  "key2": "2dFTAearsUyoN7nSKFh8H216tyaUQjZZarcCqTf6mZqBXXSg26XG1j1yLk4SNDfaBWwm6Sdi8mtJx7Awr3DSBw7a",
  "key3": "5aX7NfS1TNVnfXQ39RJQfoQu6FbSbDkML4vEwbTWZgwsAn3LpnpNADpYFyE48SY9DnUGAJNQYFrg9gWGsBW3usHo",
  "key4": "5uzF3pu4HXC8JkL58mogrGd8YXGLgriwidxBEGa2mKQn7f77LUB9AZDcXkB1vfPygx7qJqeoUEV8VuzqKeBuyG5",
  "key5": "4rsJjoYQBcKiri4W6zfiKBcH2d7LvBUo8euxXn1h5E25R1bTkvoVAveFSXPFyjjdHhwi2nBeccHLP6iHCKdrfBKh",
  "key6": "2vgZKvChFgLW78fXR2fQDB5j6Pm4suz47s75RnxzHWmyPYvrfo3X6M6ursbuxXfu7Qj3rPVGoC59HWJCCD1aKf8z",
  "key7": "2CvQbu132gxhrdo817cvhcZ2HHvU4JMKqmnnyTVSiZgniKCR7wUGHcMVU8S1Ke6CRU2q3ZuTH9DzzyUvTm97EZL",
  "key8": "4uJnqkuWrHhNUXHxz4Z1LPfB75DSATpCoZX1UekcmyTmnyVjCGnKdzQqHYHa5N2wxa5ZKQ2cmqZ5TTAudCJvEqTd",
  "key9": "4NJaSsYc8NkjcGxFGsdmqNiNDvVbDGpDxxedoakq5YHEnXZ5U1W38DciQGzyyWK9GpbDcLoCrN5Lgrna6qyvKvwt",
  "key10": "2mnjpYmDjBFGJw1HVYsy9nd8dKtnVkp7QirQzA3hHBGfd2SajaRQwWsmoW6R4bi5SSC3BNBd9YkuWFtmxXswAwTT",
  "key11": "22nJhWrscK7ouLf4HNpx1Vos3LbbBD8phinPsDGgMJXjidbFJFCBwFnwA3Tr2h7Ekm7ZVhZMiHHaazYV62abn5Mw",
  "key12": "53hH42bkMu9TJj2Vop8v8psvPDxqGXCsXmFduoe4pzSBq4NRb1MFXHyydMJGYQgC56hdHXJH4YvsGRnMtbYeuQaA",
  "key13": "4ATM8tHC1HLzh6QfCy2kPM1PHyD8n1kyFLx9Bhgrk3DATbRbAD4eFr8LaAA6KuRPNosPuJZDZXw36765WdqUMYuG",
  "key14": "54Gw7LVWJAaMnAdmK1VF7YtvqX3HUVB7XZTtGd1xTvNvCtjWYTQ6GxbhgrULYiYmTyPrY8EWbBrp7NptDhr9tqjt",
  "key15": "LaDs8b4d335KE6tFR4aZnufzidMkE9dSYY6vfFHxXwBsjsXwMUJgZ7vGiTquyR4HqWQkdefp5Pfk1AwU8Cm8djE",
  "key16": "5maFgTsuuVMqhoX5Aua56zX7baPm6LACBKWSM2mXTCppKdXs16JcCxGkceSoxC8AHGFB9iQE6r4ALuzhnAjAYWP6",
  "key17": "5zmBY3isUAqMteraiYG72W6eCvZ8ZXthQeNUqtZcy9snn4Z8AgUFYH2EVUZr89pWCMXJTPHR4yknTW7dtZMJddE",
  "key18": "3Y5aKAx3izga34iAyCfKUJyw6hWkupEnoBhVSo5mdhejnCAXMj9ADxjLwEZxfreBBq1ffaiUXcrvNgP1o2BWu9WL",
  "key19": "5i1gDac2CQLPzS5W4JUepCpjeXDcwaJ74oqkkykks8hmXzUVd9PGNxhV9c6w8Nv5udnK3LEEXMxPxsKeoDNjzugA",
  "key20": "2qjLH8mFNYMukRfwe8hwGYNf5WADGvHMvv1u7xBSqzEV8wLH34nswwjWANVCjodKpyfFo7opysMdBXt6cdCdHxM5",
  "key21": "xwhiw46SHrEba8VweXei3oktT5iXtV4SYVphrb5XVGANn44KyYviEpY5bHZNyp327kdJ1vzYVcE4m5HArNDKPoC",
  "key22": "127cYRKJiMBCuyU1oByDReBtMpRoYvnKHmxLxCySwdM6hTKyHQjWz2jtCGsBS6o15Tx31pbA2b8Abv6wxs8n1B3N",
  "key23": "Y2wpBP37g9Vb3y7ooPzuFu959vkT5xmiNmjJcxLwjNMUCYpzWZeTrUKwArHefJk4trtLAXpyFXw8RqtDb38wtwM",
  "key24": "3SZpWEmxjNUUDNv3mgmdLvMoEXHJmntrbQoedbbo9xPSmNy4fCPuvXCagkxDFLk6i2bPFNrJ6TyRijJw5mqVBsCb",
  "key25": "3m2oNCgSjApDgwkefcNb5sTsat24MMAmZ2BHMPB5yYN6K6A5pyHxah3Q4j7JyQNLpqVev93ytpMAUXA8iWj563Gb",
  "key26": "2jjjS3SZoHJexAcVpSEMsHD63rvKvigF38bipLfrU2Px6rijQyaNL6UbTguFC3DMY7yWdemQsZHSBJQfUBHvRYXM",
  "key27": "2gbSAZQY8L7ig8qwE1u1VteERSwgt6KGMusFg3ks7yLcfLK9fXAbqXJPGGvndCkUbUYBoy9bAAwtG3kreim9jUBN"
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
