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
    "5dDedf1CTx2V6dDFrc6wNs3eB8u7WpAgGEYkJDnryHvWs7WKtdw8cbjhkHi6ViGubqM68XEGf6krV1PNrS7M3ujj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "br1wJHRbGDZLySN78HhfqCwy7te2rvVyKKrvw5PFw1ADHDzWjGjftc1yKg4uXbyFvUX6kVQiv5qLr11A79cBDTX",
  "key1": "yRrjoe8SZtkyAmeXKd8r9nwGmUDwZkLpqKH8Z2o4ZYo7eDdGp4F36awLVP3YoURjc6wZfFiRmjy35DAGpmKNEzn",
  "key2": "64k9aTvfZfSCJjWKg6VyizFgvk31WtVcRDMHHGULobgSn63BWrJFPf2PjsN7tekMtt9oCbcBe578PRoK2oqZMo1U",
  "key3": "3Nd1b7aarSBG2b3euQLZnXSycFqiqnvcjfMwDWRKLv3DmxdTjNceN2oDUvGdh3M8WnN7WwhRbZap3GYg7EdTU1hc",
  "key4": "miSjTsN7tmXtgC6F6wU8hezkpgEcF4ZchxqjTRa1BuvF1xyNjeKtthEfgSvNTxfSsLrGXDdwrhe9LwZcq56mLoz",
  "key5": "4YdAabFWciy3oJ6FLGwKkyDExxBYcr1Kgda8YEHYdhagRSVbi2HLvgGytEs9hU4CNByEq3gDuSuEyPqmk8kh5kpq",
  "key6": "4TnRfxAjiBSNDMZi2ojm2zNdaERvxMXH2qYiBxmknjLuHoBTQDEB1sQfWx6P32oMg9sf7WsHoZe1dmC7y3TowNZM",
  "key7": "4RkwuZ3Uk1fm5UF7YFTNTE4JEDRt3gqEawfj5tijkPTqFAmx8Bdc4DCYHWSn6nrwwoipTMSxf6XJSJzHhvvdjrQS",
  "key8": "2UBfFP9yK9UZEoqiLMuSd1J4RT4CCCERTMBh5rjERdF4c97HWaPDoLvmwbd8qET7T28KWu2x1zJXQd5KaGYChb5m",
  "key9": "5buTy7egF6KCArwM9txCEkdfWzeEd5cekvyWPuMHuEB15ZGf38AoMUMx7EMWBkiB1eRL55mryvqUTXaqPMAUbSYD",
  "key10": "31g3FKdhBWfA5bEpk3u6siT45QX1FmRQAzUCRVE6ZevXm744dT9Wxr62gHkVirzc7EkVVFUxbej1zxib1aQSQyVC",
  "key11": "4KWEqGgxtS5aGbFdm3SbCCEwoqJee4dU1qvDGWXzGuhfZe7sLCzob2HHijxQJ5u3E6zwkbWRQ9r7Zb1GHNXRSYja",
  "key12": "2GcM1wszKmmnRcyJrenRW4V78eWh7EhKwd4xAoifSew79sWzU6ZS9ygDPJCGfrASghp5QoCwBGMBfwk65PFnKrBS",
  "key13": "5RuBhgMww7WkAPgFgGZbeTmjwx1vAoxEtMV7qGmYShEXhRvkiFP4X8ULXCXw1NBmDFLN9ebnKb5YxQHcr1vHJkPs",
  "key14": "3YcYwqvPtA9PHFV1MNjworrRgpLD4tfgryndmwBowbLPaAy9c2oB6DMdCKLUUqbeFNShQkobimUnYBEib63AG97z",
  "key15": "3vw1j8aw8ED7bgruEWKXjFWGxnndVTGqSab4a7fsJ4XkeZkRer5xtCsNPmobKEb78fXRaeynkVLng7EEcgxGPWZ8",
  "key16": "3tnqeEDhZBM8sxCdXeyNJDELWs1m72SW5wxgiaw7DcFKJKNrturHdbVjD28L7LJzB3xBRmzPbbeLELLxGojjUBwm",
  "key17": "5gDcJhRpQ8WYseG2eUtJhJ3wDEq7paCpPd7CkyonjJi1d5HYPjFkxQiXyfJ9hQxZ8tMzXpLA9zi1e1nxLu6a3CR7",
  "key18": "4U9FV8jWaAYTZDs9GHafanW3WZvr5SpNPuxyPqSi6cE3YLvY3P6NEwiugiDakwgLmAd6tRyQK7Ve2dD18s9oxFem",
  "key19": "4zMeSSKer8LdxFhFTYNre3XxftGCvMdJ7FYXvnyYNeGdsgWK9FSa4wTPnrYxsgztprbLPNrkKb2kXoJeAtpGUfd5",
  "key20": "CWgmqsSh1MLxzgFKySWFTQvBA9W9P22xaXb9apGVcLawATF5fVXHBDC4kRo125gXVHe7EUxpA2mSv6BtapxeUmK",
  "key21": "6149yQpxS1jGhiXGbS1QTRh3DDiMJRT2efH2eAczGHYowboHt9e8PTSybzwwX8WFvuS3bLrVMbXnYHX5UkDJp5B5",
  "key22": "2LWvvHvTYhoamGCCeKjvqry81Cjb7gid3DXPRgX3KWf2CPqzUeurd1RMAzjjBSL8vGeGquckUv1ToZNpCHEpvZ9S",
  "key23": "521jXMGqYwPArmduPh3FS9rLtcGYjw148g5XAJBzzq7QJmuPEP5cN4cyFFBpsDapvhnUtFUrYLdnNnV3fiz5HCkA",
  "key24": "mMjrdRdxDoQjye3zSNiCMAMkxN8QaUdd6cmF2akCgFdyP1uDCVdg21JE8nWLqXZA5PrmBtxgpM61KGodBgikDwu",
  "key25": "3gnQfLfrMxBMkcgacwHNQepHbVqxQ4iPdusf52V3VrVmNSZiD5esEmyaCywZGNNmxduqrAV5sd6JpX4GzugaFA2W",
  "key26": "7ofq5hBry4pARx4oHWSgtTk7fJBnEAk2ga9Y2enSiKAjeoreP3t8yUJcEtbhksKvy16tfx4Ygn82BQWb2NxBqJb",
  "key27": "2VYXGNT6ZaiGYoDjwrzt6MfGaiq9Cik1igE4mLG3gQFSRZ7yFW1jgTJSBZmJjZ1sPaP8Zpg4aacKb88ZM1wM6y2x",
  "key28": "4oPXniDxpjNFY78YtQne9N2RtBry1n8XxjwGGpW8YxfhWoPWdLWiSzQc628JXGeFeWEH8yUsyx1wMDyEQZmxDcqB",
  "key29": "2JtWkqeYKuQqRb35BxUz7TbzKLZG8qjAn5WfTUmQb6FpYXNBPTxcCpM59rRZcrjmqZChptH15SMn8wHSbKFe7Adk",
  "key30": "2xe33dT65CRWmB3fLPtTr7Lc6ZnveQZ7zYFy1PhhhR9PdxyFUMrKCqzhe858YrhmdtoLqBpiPoT1DUGnpcn4AG14"
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
