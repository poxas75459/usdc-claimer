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
    "33zk9y9pqAGUSQoyhBizNm8WDebMYkkk6sGPPCP6oc4BxEuJkXhmEyUz3qNQXxTWfUsAbBr5Boy7nfM6EMBC9TPS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LcgzCX8KEDgg6zmSBhEKQNrY3HQCtV7ZFgaBPTUxJ1p6SL6ZgpfpAnerLuhreUiGEi6anqNaKtbfCi4EEKycwfk",
  "key1": "5FSFvnfaY6e93WTF3uV6EsmrjnqTNEMfxTNndQerC3PZRJV3BaVUMbtnqmZvxaSxdmvavDzfJF54QRNrmqH5thyR",
  "key2": "41G7QGkJqZMLPAUHoN2fEdad3ziN8jSbrrT1Rs4zyWa1qH1m5wQ2zVpGdSgFqLYLsQayUHnyvJGh8o4GKLJbBbVV",
  "key3": "FbKCY24cos648cHXjVsAgcvu4BybE4JYVeZY5hFkfRcqJQY9ReHRTZLiVLMHYmahFmv9MfaQEShbzMForgNQ2fq",
  "key4": "2viVLpkrAyB5NyGdCo3VJSLs24Kj3GLiKGaek3UqLyFNRcxQPWBRJX7d359KZ5E33i8kQpEmkQgdcEkT5Tx3cQCE",
  "key5": "CoXoaAeG8ir8tfnDoSEfe1T65Xmz8UczUj7ehCDHYaFfJ6swM8rsKpznJWSVcSMaZo2A3mSkywpUvoVpSMmq3wz",
  "key6": "2sPAzfqQci7SdzZu33NSDYCbHv7H2Jwoz4tj1nTweuxWNukfnuR29Y48FwVU79uLj4LgxgLYqS1Q2pXTk5X5bJwb",
  "key7": "Yb4UTtqwXhS9usHxKDgne5yXzF3yQUUdS4P8KaE43b9tD2ATUkeXjhximraZ6nGDcCVV74i7xCgAdw1pZEsm3ti",
  "key8": "5EPXLv6Qy7UQc2FB3a8fUSkfnrj75gY1NihL8uYgmrNg9ST9m9RGjGyJv6mYFD6Z9LW8UJdTWqgLtycnoWrjsRMt",
  "key9": "5hmCqqpFMdq63mNV64WrYwXr1A7nT14UTCjneVVCErNgMRsogwp417jeKqripoSJLofnGQvTCixGfmwFDpuN9bow",
  "key10": "2xbMnoXSaSwQJ7xytY2eAPPA1xhdjmG7xzgZHLBAi328eY8mDvQZx4wwHyRTFpqzKNJ4oxyB7z9VQCmVyvQDU4ng",
  "key11": "4sdKsiuxMaS7BXvcDW7RvSRQCoJbzRbHMgHtybu1BfkxMxhriACLRCH5KqACvUr6Z4tKBPFAwomaRvY2BqvuFEyc",
  "key12": "5wnPSnozzP7Xxm3qrwKa9QoWuWHYdKXfhfF23JUkxdn596TThJ97BevBjPjNT3iPdwM26buxZwoeudc5HibMURxg",
  "key13": "2jtH99nu6Hs5JssNGV7jydXCPSqnMSU8hUj53VQ1zn9Fs96RZh6aeKgSJLT2VvpsnGChCdj2bhwzpNN5sSUAPi1T",
  "key14": "42pSekY4ctHuRmUNhBHnWvd1WsHWTf58RSS7wrNdcTkU5dF9gYj3ykJp1ttFWMHKr9up3SuqrgGxfd4x9RA3w29c",
  "key15": "5cTzb6MCxzDyzbYxhcthx8yvh1oVkjdMC1668ADtwvcMm4PjMvDTNFUCHcBgqNxYb3K6BGYWL5jhgARWsoPULXnp",
  "key16": "4ia36HzCjqP6XPQAqC5yCUq9gvPmATCs2gYZi2unLFmAjsgcmJV3tJMnjrt9YKVRtcjxoAqPeqmcG2QkeBwBE5uC",
  "key17": "3ifG1cnDp2cnuxH6WMScksFzHsmX92CgbzfJD8v9jc1Vboz5gEM35atNfBkV5E7ofEerHGoqJPCU88Ve6hd8Fk76",
  "key18": "5oLqWeuwagaC7CraEtmdeEe4YyqtUN5GnCY3z13SZCNX4KvDsuciDaJioCebm77dJzCpMNtqV23AXa9H4FfrArCA",
  "key19": "53ZZeFszCA9KSqsQadRRbeKPR9tSy5ooUUoSL1M54BpA9gkPQiZbEs7y5q4ab7c72jtHvk229xjNMbWfSBXPw2h2",
  "key20": "2qxGLDTb5yPLzJ7kTqxqSX3VcWWzFp3v6QKRDuwDVWqGycULvj9B5uLDFinBE1svqBdHXT9ytThp1A8QTPtKqfrk",
  "key21": "nw3aXAZhvjp7JKrMLmgzmWh3R6T7o3Yk5JUAFUTgDDe8gncF9vBx3Vw8SYHQEcTPBYTxNBTJnvf8YkthqKJVEtg",
  "key22": "5DRQRm3mJ4S7NnokgdQFuCS1oBRLg6PqvbpmRSgAQq9224ShykuaXFgh7rUjsXz3JBbL4nUx2w1czHqGCx9GsTbh",
  "key23": "2DULjeZZFaxrqwpARodgmRLSy42rCgRYGDtmSsFGcjcwCTwUzT5v3bTqbeMfRsjQT1KWWVz5yLb5MQEdFyGGJjXS",
  "key24": "3rbWh57X8vDHoBXmKCkAV5M2gh2nZUGh1kK22foBGpJh39TZ3ue1R8HFr2RFSq3Ek3izrvpJELE8frYzVyXPvv7M",
  "key25": "6ivGbGH5HjgMV75gEzEACjKeQK7orNTUe2mKcY1QAeSfQJ2jWx8JPDEo3i8koisMgKbriVa5u4SdcTMhZgrDnBK",
  "key26": "23xjuSwMz3s8bJUf8DjRagvdbuy6pCtLhUmkdntdVvB9pD14jFsFpd1H5GP2RERFU46UzWk4nTN6R9jjYRzgyuEG",
  "key27": "5mRfG2J5tCKxsndkjgLgnPV4e1cUyopq27Nj7366hnF4CiY5UECB8oDdVc8hKEErDsxb683UtKV7n1gQuz4RWigk"
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
