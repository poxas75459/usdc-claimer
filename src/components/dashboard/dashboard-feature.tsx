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
    "3gG14sAFb9iBb2ezWTY1xEWB2YMZ3pHSpjwojKD2zD9sc4zegPt5Gbu6eSsUMRjcs9yDwqCKG8VZL2HogZhz6kef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fy1hZzZRvjhiAG4QeR5Vey2bwvMBuxdD2eSJGBqi6EFGo8sY4XN6RjWaqS5Wbbhn5Hbbdb6sfuxqQx4geiPeQqZ",
  "key1": "5a396ao6byZsPY8FPHJMRyJJTbzTuoM9ff5eich2uQqWyExxAojARxHw5LUdsX3tdGePmGzfJ8aWHh4wqkh81gCs",
  "key2": "4n8fNrbThqkyqzx5YxSxH7YXbRW4hwmYy2tpzoSCZ6W3VN899nKbzJHKndaGwYHyWMzHw7GBQEKdK7rbodcQeMtj",
  "key3": "2HS4oKG5hi8wv1gs6wuyoPTutL36kXaXVbEAgFdUZ2Lt5nBx3AnewFqvwW2qgh42WEBrBCKSvW1bFQhQhN9EoQnW",
  "key4": "2NRWR8EETeNq8VRsJ5VCwonR9p7MyhpUYEAYaQQWLte7oKVMLY71LCEzxxX42FSwUhVGco3odR6ofXxguvzFf3RP",
  "key5": "2CAAjm4TWTByHAGZ22gZjGMMtyHm4T6oP3eMMCPeTcPBrJR2pQpYDHbGLUpxjJnegnziDvHGum653ekXUzJdDhuF",
  "key6": "22nZZTDAukCFHNx1zL5GsgCQNs2G4z6W5nNJ6rS3y3P9nimypDLcUvbz8g77VavHWc6jL8nuGNHXGAoTg4yFJLuH",
  "key7": "5vmEY8MQjWycNpXVXvJ7yc8d2iL7CNWaotMeP6tbE3mnzx3shqbCjqpo7DGtJNTiWThTc74B36bhXMg9XE2kYBzs",
  "key8": "4aqm2TnSQNhojuat7JHLpEmAncwFVvLGvYzhV2ZYu9LiSuxNqfYXJ1iWDho1rDicuSa6XfqskL9Vb1ydrtwWRcbB",
  "key9": "32KF2w4XSFcYkJoZBsKQPjFZsMkEYQzqsrz1tMdHfpXZLqz27rYhTgBbWPWSCZ5MAMknRjy477UGUu1K9NyGtzsy",
  "key10": "4uJzkHrtL8QvReaKcDgyjW6L9PozWFa2aRErAS2ZB4sjxL8sTC5J3ZjiHaT2hhD4F4XfS1evqr2da22ieVXeiEmy",
  "key11": "F9UBETenyFimL4JbaaZ8ASdExbvSqM7TdtibSskd4i5rQgkrXgEPfGUwCmJMYRX2TFiu7QKdmH6ujXUHBfuaJA5",
  "key12": "2u7d7iwehgJHeUeq36ua56ii5S3XfzdkXZPv36w2vmfZSWKn68cpf5Fr2z2ZXScSVUpfeo6TjWhupmCSdmEpSuwK",
  "key13": "sGCbqsT9LsmotbHJ8ixHRNm49pubUi6wdCkq2A4nwNb9r4BUWkYvfMCWzaN42cpopNso9JzK54bN6waf59YGGRo",
  "key14": "MCo4qCXAa8whWbuqBzFh34mBbgDBAQDZUYGd2m26RVWpjjHNuJsKjQeU2VANnrdksnvjU5KBK9cqZxre937ELGy",
  "key15": "WzbDT5LSWm7MZT311e3rp9WxTr293wk9JupWDhVcMi5RCQWsn6WeWR1hpg2nCuw8Zwz1BbnfRDSaQDC38qkCfkQ",
  "key16": "2Sif3efVqc15Sxbx7WNfEH6vqTzpBZ4wRyM7eyYdwi8nQ6KFZaXKagX78QKCPAEQVZniv29XpNguTK4CjrfMPt7E",
  "key17": "3hAi9u7tLPa6tegaDDBvsTR9vmWKVbSevSQbkvKkqboWNRNfBzBS2j3wBUsPB6pmyTrrXcL8WFA6DtQzNcPRoNeN",
  "key18": "2PQT4oQkRX3PVGLNpkz7zqR99QHsVDQ7sPFU4a3m6V7er37Zy6CrUHr13U59tVFepiZdiheYMb654fNFPe4JnFHF",
  "key19": "zhN4eHgFLunjrzorpXkxFrLjg7LX8hxWfQkrvSndY5pXuMzEtBNPgBnyyc19VZifXUTuXZhydV72ekfydnzeLou",
  "key20": "2CfJ4gmb4ifSvqhzkV7BBRtRQ51xiP8pw5PUVdGVpBJXijLPvZY8jydati8oiqGvUiRFptzoexXSrZ2VCJft9yhm",
  "key21": "64dxLA6zw9inbn8GXyjCPTcNAg7h4vaLeBmbd3qoi2VrCDAdfJN5dNFxP9sbB4ybRGBwHCojUpwzgNZ3QT6y9BdF",
  "key22": "3DGSdj2gBBiRj53aTqMDLS5iCMRP1yptZAbCBdg9eAoye2JabKuPGwT2ad9u4deMQCFgqn14PBypmCTixR3Sd4sY",
  "key23": "5kdfkAw6RpnVjALF1TjC95UCXu3LWW8Dwovwk4VFUUx5axhCy38Ptt4m5fMKuwkHSFcCLG759u1WnwGuQCKda9Tf",
  "key24": "67YDMryuLNLB1c38HwuUKSYAB3V65VynqpfbZmy2ZG2w4bnbpbgiAr5Mo9GDuH4cffyQJAbaGgDbWoMjfmkWaPav",
  "key25": "21yWCjeytLWWzAPkhdXtxaGBxAZwcHFemur4swsuxwn9jfP8buKVGvcHvgXFwShHLUvrd1pSuaDvaw6cutdrPkFY",
  "key26": "5fqZizHNHFcDNDi8ShHnb8Ytu7o1raKjsjy2xYkgG5DZ7smGo3nBJdhrDsmBxF28uYajMMj8bhaG2Mb9X2ECN321",
  "key27": "3fcqLFxeXMfFMLzRmUZKE8JT8dgfR4oAvhwPUTxcn2YBLe8Urq6JTtqxhM3vgrW9XpacGzRobDHGZSwmotwnifGp",
  "key28": "43XADikouEJ8EFgvp52i9RRwy3E5iKstyv4Xz9fsvoE4Swrc13KHmJT82Yc5UhXBHTU4RC5aEjD6gSFzDFh1wgVx",
  "key29": "3W9ARpjUJ85XACfiWpFXY7h9qDuf1TGp9bSWg7dkxdSfZyUZLNka3LB37yajVoRB1U2F2G2BiCBhCXPq15k5c99e",
  "key30": "4NKNkngzXTzEa56rRqFSpSBBmaMca9SX6FDmowyB2EMWrvrYcxFzDaUfqUK49BYGf3CKg8cbHnbn6kWhq36Yt9wU",
  "key31": "322q34kj9GzukTF5CANm6EtXAKjLwU3SbpW6J96mZoqDqyQJY9gAWfw5oq9qAsZYifmUv25QfJ9YfM6MgS91wVCE"
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
