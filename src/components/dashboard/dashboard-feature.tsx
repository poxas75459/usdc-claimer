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
    "43CZfUDqRxMta2P6be7zhn68RTow41Lpb5dHRwB4qcNUtBLQYpwkPwPZokdWPdCGGY3CtvJR4m8fZwD35jaHW8Sq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29Kq7YPD9sX61mYNAXZ7Gb69GgeVdrNH5BcTR9aRJVZh3mNEkrSeBvmTPKeMcQBGGnHQBusgYt3qBghk8oP3eZGF",
  "key1": "355dMTtPWYrm9oN5jmmeP5mx5QbCrbXiwKoB8gVqgZpLsBZCEHhrhbKmUbPnoiiLEQmuw6fjxg9xmzvWYEMk1WeA",
  "key2": "3twV3MgJdq9NEpm3KMYe6x4dkaqDMhD3vQZg5B5h3sPNAnoBBT3VXZMUUup2hmsJjLhhQMsrWpwQsZVgpiVXhf99",
  "key3": "5RQmJnyftet6jskvnEJZmLqBJYY14omeoYc3t6o39PFW2GJBiTLfdLTFCgTR4tZxCAv9nuxoXxKkMwfwTH16S88T",
  "key4": "4CTfK5JmBxS13rY6EV4wjoFmgx4RtN7PqRrVu124FLARNRdrn1bAQHBsKSpwnCqBxM9FHGgByp6ynVTSY8kUNCT4",
  "key5": "eQtXVLeL2dMnTgphAtcZMmtEzqmEoKJxHpgVy8jXihndUm2TDDVY1SqSZSGv3JFWC4n5m6o1LkPcVrzmZZ9vgxc",
  "key6": "49nocXM1rN7NmiqWb31GdGS5Drwtu154x3TQmxKmhbJoNuGUoxbX9R1aGPASjJeCBYBT6eEE8czFA5EqwfuPGJ3A",
  "key7": "4E9XdxMz2kvq81cs6XvzUD8fJ8CvAGpCRKWP5jvARBbpdM8S1duRkte1vtHG62AaTziH7RAaekq4LZaX1RgwZQzi",
  "key8": "5AXm3RHdkAUKzF8iGp5C5NS6hHTUoKbX9zUh5beZ3tcdYhV9XJGHbud3dhxjfY5mkV4BfhRQA1NHTHFRvfCjNx3N",
  "key9": "mfXfYZvKT1LJtymRDGdXUAst9NiBKmqHQDCRpJLyceMjCTy1YTsS24GkXB8TCRM1AGQ1YJxj612ZXZu191H7Vga",
  "key10": "tSjkrXd8nvwL1i7G1ftxzf2MdTsGJp3A5RA7KuwgMSHJmC9UvjX17k2C8YpsgZMyX4JW6Yg29CT17zcfoJDmdeK",
  "key11": "8JcFbVtQ5gdgfM4QPMYnDXPzMgH9FUP48PNrHJMqm7ddgAhj1X9dv8AmpaRhyGCryyf7aEn6Vkh977Zrzm317AD",
  "key12": "2bNjzno9QfKtZjQKjVuyuv6KNoQpkztWvHWNAMn7mgsSkiezJcfxmndtz54gDjW9gfR4RBJVFjFq7pJ7dR7DCmMp",
  "key13": "3osWBwsefK7ri6thTwgvNh5K6kr7gKKWML6SrMdVJezngnMB965Vxar347kyoDL3pjpmveBE6gGtL5dmp9yvbDCe",
  "key14": "VtE3tgJwX83d1uLDW1N9WL7Zhb23DwXi8jc9f36vAC9afArovetGFuV4LcfMKmX5bhtfRic5raYDG8SJj1Fsb3e",
  "key15": "EQuanKWau6ndgFRK6T9LovCiZGV83kD8b53NGcteNgxs4NejdPcSyQTSE5jLu8FeZe4UuJmd3t4qzzpQj9wnt7Y",
  "key16": "2rsXZHxpB4mBwhdHQbfh3pVw17TcDzeRfnFMkQ3QHyTXJ8LnaNcQNztQzRdRCbbJ57k26gZRQRoKySHBZLdtQ2aA",
  "key17": "4XZxbQev35huZ43AAfPZWfM4MwoijwoPna5LKNoDvyGwmD7GSaRnYWtz5TAq8rkswgrFfzQU9CmQ8t8WD63yNYCL",
  "key18": "3JseoQNMAkVgKUfSWebM8UfPWrB3VvgqNRm9qV3mYrCTbwHiXn4p9A2Rj7zSB6sNhrCccgwW9UPrzDLL9oLiCCjC",
  "key19": "3udWyUjvpEx7JXupZUUwxLBifbK3NUotQKgLZJCXgJ6gFWViRaP7EknM892AweUZHX54NNjfsnfHb37VZL77bDvt",
  "key20": "28cdVffvAfroPeahXnuMiSZQhgXbXX3L4nxu2navTyCUT6eHWEHn4ghhhEVepS3VUeWztKEYMVqPsM9RK4gxmhCd",
  "key21": "3Ld3YqHYJZQU4EwWkQjA79XerJ1EVhKAUZk1TqMkcnSZ7gM6fYrHmxaTZS4ijGmEKTdvPTdgVU2gNpsS96A859gd",
  "key22": "273rPVy2CVdrZqcLxAD5VcGjrF9MZCFDca5xCn6AVqg43dCdx5khhwxViJbZH1SfTJtcSvX3DTNR7SD23MxCP8Cj",
  "key23": "3z25TtBjHNr1VezrwfYyvRgTcwokKbPxpW7nnyARre3sNoW5ppkXMQf4pU1vrMtzp5gAKVJXz5GYD3QuFTma1Qa2",
  "key24": "4oJPr5KUAcTM1NDrFVJJWyCC37AEgLq1Ej8f9QVMn2zu37pa71hm5pMMS4xDFNKK8jmi7oxMMCte5156SxwXJPGU",
  "key25": "otUy6pGNeNXQQwWquMitiRteUxsP9BF6Dd6wuHhKuUKd4QAz3XPBHk2kLunB4DMdr252oXDS5juJBd8Eg9oNMdC",
  "key26": "34uTzQLHqHYB6w2vvVTxWsXtjVAG9RSPx1xi3yAKJLsDx6oJ7bnqkUd5re2VmdvTHzCGvhTUwjrTWMXw4QE3BfeR",
  "key27": "2yPtzu953N19ZdcuU6QjBbXR4rqCnL8Se1cws1GJ7FgPfXTByoqDvmGPviyayhN9TvQKvxmuCKNBcpRkTwGgeUNs",
  "key28": "3mF1gZeNojHFbgXGWLk17JWSQVBwZfogGijzzqAjeeqo7dXVYxUWJzkYNmvJXhrAvk5VJvcZqtHNRBBWrdTPPJZe",
  "key29": "SZcKcKfiTEjSEc6g75RxVmoesjtYrXikMyAivTwvi1VD3Tr5JgBqBeDWbxZPjUwL1Ba9q4BkZaGLoqPPr9Xvza5",
  "key30": "5LQbq6NDV1GiXdvpGXeo4yquzZ8QKHXLZe2ny5qZbf4G7kMg5jqmybQ1L7uVrkLrH6DbrJG8fK7ykGaC3ym1ySeT"
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
