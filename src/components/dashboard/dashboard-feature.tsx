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
    "eGq2oYSBX1mEXStoq4uZGQWPZZfFxHnngQWXwkbaaatK7tGqy3iY3CjNBgFiWwNKFBkYW6gjGwkCDa8cxhNeeaj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35wzhpX1L67XMKa6UvAcYkVyXexZtJxT1FmFxcHq91Z7EcYgHWBKcQmQi4b675mezv1rtApoL5mtsrw9rX2SRdH1",
  "key1": "4FDQa2YT9UMgpnvfw5TSwTr1Hg8KXvHtLYVx65frDgZRBT8Kv4kCxzDCQPUFY1LjQh1d2BwAyGNuYAyppmdFpYMX",
  "key2": "4aoLiLxrhPpC9i6GbC2ZqWxjmh8iChs9kPaHPn3K38fSwhGcZZAuUSQwRA5J8wCrD22BL7RCPQs2aNyK2zR3cMfG",
  "key3": "88i4fXijfWNRkt5b2WjAu9So9uEp4TFDb9WVTFn7b8AyavkkutARgcLDAXWyReKHX8Hz5rumy2dva8LQ6knfwFE",
  "key4": "4QNWosccfif9J2nsjC35p9Nn8yYFMS8Nw9kS4dLbVkVd3dcEfCkg1tLVy3ErgAtxxg46iAMj2cx89R1MxcPXrxVJ",
  "key5": "4DzbZaRWpPViZEa6XaM76g5eyGAFkrz1vu663MM8SovQ57FRSAsFwZxKfQeVwLYFuNMughSancrH6fx92NPggUT4",
  "key6": "9wNsAyFPs5yYkxJquPh2fwH1B3rtPAZN6UXYENZnsYS5RsxGXWQdgjS2nAGow2BWjarKJXicZiBqjgMoNBFdSfQ",
  "key7": "3iJ34pLTD6QZDKJvBc7wXKqHwHS947VLVrCCviBuMxRaovqTdx1qyZSn2d9nURBH3krc2kssABX2ZakA4as1cZjP",
  "key8": "itkkNjwQpgSMjVniW1gUZyi6egLVwWBHVPhiZCCodR7RibJ8jtpkf7dgFukUDs3UNH15qXC2J42xxYzp8kB2bBJ",
  "key9": "63J3uT5WkzAQ9r6fVzoVRrR2Dy1hpuxKZLDq5PRPRiqpPuDLWgSoR9WaG6LSGn8Nb2LydDhXmicYqCBfnqVbb67C",
  "key10": "4ydqsXVe21mMjC4U3vkr4fd5qX8HMxj9K5xje96uv63vLV28H3tN1eWdUBziTe7xq2PDDYEZWcsabUSJjc1m8Fst",
  "key11": "59JoBmeUBH2aw5uvqimCGDfb8bKEvyZPDWuvmXzKFqAnDyeVWs75nuideT7k3MVYNoCBBenqxTNhVMBL3Y3Md2Q4",
  "key12": "3RWDsKE2fwqPHQ4XBtUU7zGv6ChPs5PYVikTDQg6oVpCTUBSz9q7kLR67vz6JWcKR5iY1Wic9fShMBRwBQPzSRh5",
  "key13": "2A9MK61m1YEX9ZE8V3KKxx3Fi5BdzPUZdWH8yePra7KFN14zpvrvNqGB2SMauugPCnhRogbNEhaJANrBm273tRor",
  "key14": "2Hq4GoFf5aMVKkEJKgGgxCsAD3FCndGq4XeuyQRjnooWDxgHB1TKZgve69qQJ5s2FULV5xtZCzVhwp3EaXCfntig",
  "key15": "g8qXSw3X3ZvCh3pfEAJq235VUfMu2u4FNZgxZktUirapNrZgYKeFM2nhiSjm6gjKAD8vwcMQz3ZVhidkP14X69h",
  "key16": "5Fm42nK25xRyrd8Tkr92fS9XjKdyPDhemQVRo9XNRNLYKgcCmrmc9E7iY39v6Gznwqia3XdBhbsUztXYm9ALBh4R",
  "key17": "3uSnaCYSZrNt8XDM5TU7AJXNzP19k9n4qsYHh7rpDjFLZh4CDmEwvdxdGXjkUE4ovMTNZrHA8WAoEYCfhzgwvtwY",
  "key18": "5uBG8T4mpgQxPPyUvsbD37J7wEtBWCkzjjrDAwdK6zAi3U8t19bpubjr2yT3ocSwiscp8668DSCoCKs6RezByMnp",
  "key19": "5hrHYvL2vD5heSLuzga9UDXh6JnTndRoQQqqSRYwhLidiv5Eytrc8LjY5PnhP3k3rcJZYApXNdk8Emyq5onmjt7b",
  "key20": "4a3WfBqAaVPWKQEZGk4yceDAfkJLhvYVd7PL9ajTbJmB9b6fDWT9iLiEFGvAEqp4tTV5dXGeAt3jkrKSFrzmnenw",
  "key21": "3w7hecAofaRoScwqZnn9PdwvSJxaeuQh23wXwpSJDrVyy1QezKSEtLoVeVnfGHaNwzWqrPkZXGres3howSfuo7TB",
  "key22": "zRihkf1KagYsS1DdgvXbUEN5UChHeCzuiEuB9xLdK9EsJMnqKqjbR8SgRr5URduiGRjjn2G8crLKKf6YfnfvM7R",
  "key23": "2HjS9G3bba9AckZnWksU7WGMAnJamVuNUHJXZQRy3cmGL8WiAkfUwLPFgZkQLSDLAxZ2yBrbh5g9jJQNEXiKQx3b",
  "key24": "31zdcJTjD5hr8HbVoDUF2fKQooGpnq8KdMeNJ35KRjeWUYDEuP7L2PGVogFXkirNuvbtoKoyAfq7NrhFdXZACJnt",
  "key25": "2bvE7Fpmn79zxp8z1Re6zkXoaDpZGZkt1gHt1aRfzGbhptQ5mhRyjjvej9Wx9L7XyoqZTX8hCmU92Dn7dbeqqrk7",
  "key26": "5LbqQKGuWrkVrdVh7wuYtqAnUQ7br7atR3wwcCNp2uB8tDzG9Bw1oVBH6jpkGjcwB5QbSv6pgEUsGD7WG1zREeK2",
  "key27": "41jTn6H9ZFsP1C1aqvwUGmbDqAdz7X2Pp84HZjL2rkLLm8St6GNdu37oD9ishrDK2TzhK3CihmUyUwMHWYpuQUDs",
  "key28": "55LzS6EsiK8pMBPHDKAJwA3PNvUzvVvWWsn59vPvjsuF2KdwM7sHQb1WLSaxXEbRHGAFt9WSSNxocMfxVPFN4xHb",
  "key29": "HVhr56Wfar8esGKoC8z26Z6FFP3Sgfv1ugg2zw9bRLFdWhvvvdgfbkxxwttUmLekyUkDs1mM664HwWWWmPkcDfS",
  "key30": "4CWNYKwDwtNAcowVAcq1k5kejzeKCc8pDGz7wcNbGBgfU7SEqRfPkSKvgCtkseEkwUQLckeAMcPwyomL8bXpvCyV",
  "key31": "QsSBLLp3egYTSQSErM6uM3zymHwccLKM6mpga1vGfyjUxqGNx7nZvgZyPytJyrJA2vsUeFraLUoB2z6wEwAhCWv",
  "key32": "2xxEoSStdFCtuF6F3yjaf31hrNtYFcaZbzjA347y5qaXFUG4vmwZAZ7BCkfzyDwbkmzVArXSM67YUPF9Y4dXFdHk",
  "key33": "52SXncvnjH9MnE31hmkE9PkDReD4pSzZXGj5YpaS7fwHsmvYzqDRB7mCkdtyA8F2n8KN2osE5ZRQdS3GaGZXZGjQ"
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
