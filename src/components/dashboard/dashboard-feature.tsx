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
    "5GHgkwGTH33z5CNXCaJun2CEQDMgRa3p2G6x3bP8KaZ8v7JeNLeSswHRizYfqMZk2wJjJ9ZGXRv4C7JZvNMrXgsb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QVNvKxBqy5veMNHJKBb5GGPEAHpn8P4PX7p28mqSL4Qb4KnX8s8mfwzxDtj4HSSbR9Ng2hk5Ds3JXjWdiZBfRqs",
  "key1": "ruemnCbUquEFzUXj7uMtFgHDJFWPfmqgP6peWHCicXMxqdio2MWvnP3LhgFRtEVvjsx7N941sqDTJx18QpTtLad",
  "key2": "4RDDRMrwCc4MVtzwNxTnJ5wVrE2PBjZ2AnANPuVRwK5u8sWWwVh83iMNaEe4ozkXLTQsFu74965D4zrEFs5Uiez6",
  "key3": "tJrKzkZfL3Die4ipkCqiZb9KmNcyK7hRAjYhvyFDzdA9MhVRNXaqVy3BMa14L28jgTjeLoCWmcFdpodn4QAY6eF",
  "key4": "4zVE4xgjCje8CTqq68WCLPTNFCuc2Gr3LaBovrPgHRAZCbYh8GqBvgsw97vYwRbTyC8r166AAztX51pgsoKotbLG",
  "key5": "3zkPrYSowMAePMwo2EH4iy9ndSbzXGZhpXAcCxb3gzwvWs1ZWBmia4vFcpz5aUp5LkjmofMRKvK99EpDNGZbox27",
  "key6": "4oFbFeWqHXgjwJqrvmWVvmFtxuWnKN8b7Pcditc38SRVtVU5FrJhEqVrqBan6ndESKiWNqEqDxFUjvMyUL6T1Hoi",
  "key7": "S2iu2M669hQ4X9MsPRXGbs6L3hDZw3Eh2DuQyUcdzfmSjCWfyGC8aWTLm6jZDeNiWrj5Bu51qkxXBGdvpSgn3oo",
  "key8": "3SNQFLed24MwMpAuaDh1qjAQTqDFaUgNp9nbJFbnaEpFzABtUwK3Zs6LemBS62e4cDMadz3cgGUYzpdNQTswGLX6",
  "key9": "5ubVhGw43nf7dwytpzqTAzhcDPjgKQZDnRwWwaGZZHJvZracAYpwWgUVG3r4572b7Ziov8X2TBdZiHx2WoZ8VdjL",
  "key10": "52zaXDVnpAGfsAbwtn9Kyxo5Gib2vfvgwsDxxYYj7K3599m8DBbCQTDT5DqQnvpE8YkabBi3PvwzbjxbZfsgfnWx",
  "key11": "2opry5DLvt62VyokcgRGoRQ1hXexNPNPCmZenevvNmh9G2VJVRSELQebMgipeYEUhNbKhRaXQhVMhQ52fkLrZyjz",
  "key12": "UMfq5GmvsazFXKNcJb7tiYg8xsk2Stfra5BKe6svWgwjE5foFQR3Qy6A4ED6b1qK8s4ArUkXeBfAERkbHFoL3pv",
  "key13": "2KxASYPaYatjAevTb7ENbhQtEvcTJEKoc3ETR5smyvePorwCxHZaESxyqDtrdR8sGgQn4gcKwtMFARNUd1GWXamY",
  "key14": "5dMm5CUS2NJcVDj9fhxc2LWPrZgwys6W3FexvSxpFvHAi1eNwJPrqazTb1K2fVygwXX7HdUwLSyz1qJpSDzEWB31",
  "key15": "2xoHD9hvaYeM1YvHNoWuGjDF7Rk8B46X9Xx1EqbSm5FGPX2G1AzwRU1QUpwnmUm3Apf654QCgJmagSCVpF6MBwyq",
  "key16": "4SqU3iaUaecQnUvjAV6ZVdfJzubnoobybt6wfjgNLiMB1WeJcjyWymv8bdEVgDsnXtzttfxRY5DsKmei9JgrspQu",
  "key17": "2pNtvL3LLbGccfVYot6Nbtb9uxG73geUbHfHCQF1Utmwfs3MdWhNcdmduFwsMJrT1126A2rm8kxcuqijzpsdmqXq",
  "key18": "3DCvwoVnvdbWaamEPm4vZKaVxzoY7AKfd9F6TBgNsBBYQUPh9WHxF2dWawfRj7zWEzvZv5thqrnyek2RyKevewZA",
  "key19": "4TW1pxfSUpk3WQCQ52V1xb2f1LrvLgwnMAsbu4vsAhzjPLNzAzouzxKurZBvrFrnMFAeS5u4Gh7REBXnsn2E2Dod",
  "key20": "wm1WLaxvZExPieXcmuNkbWAHzkSxBwETMgWU7rMariDouwNHVUNe8bmRGBsxRFTt33ULYqEgKw97svoav8w7sC8",
  "key21": "LA1swTw6So3gJHbh3uB55QScihc6cN7ct9UQ6oz82Hn1nB3JuhQb66VfiU8mwPvvZcEizK7n7XcfnExSD5CG2f2",
  "key22": "67mpTKgbWVRDwgct8hqkoPYDT5QnoXfKC4E7oQEc5MovGkXyGnM5AbuSR5MpuYGLq1YgAxe7kqt4mBXiaZDqEoHB",
  "key23": "4yURZaJH5stCN1kAhmAGDTQtbgs8Wb8VbMaVQ9CKofh8N1nvabDvTXbKY3gPHnVYaBrXCWENHvSz3cFwdsW8k5z2",
  "key24": "2P395qwhoHW5HSZjRErf2YHPW9EFypCRWQtRG9REAuTx8JXkS5nSB9DrzzRss6ZMdpHG8yC1Hxf2GeEDCeMvYxbz",
  "key25": "2U98huL9vAowb3Yz9v7NVKVf8mCMaR7Lt5twa9sfcwy1qZrS6iWKabaNuGv9WYubpm8t2sftd5yk7dmGcaLjWnEZ",
  "key26": "3NkLFMgbwJMmxTK3ePmXE5wseAkNJpE69gaCxjVScecF6qVYGQxsmMhe1MsWPTwGeEdEUhXR2MKjVmAJ3HNYd5gn",
  "key27": "43VZYpHuhoJvMYPMPxzRZ1BpemdMtxJVbZg7r3GueXoNmokhDxgpWsvVdefnTPvap6ao52VuRcHzfA7My7QrgueM",
  "key28": "eABpqKA9hhJgY8F2GwQag5vkxrVXCXEfwbFc2wCLgqt1kvDr5838zA1AsfvRKay24nEB76EwzC4EDCDTEH7JG8B",
  "key29": "5Hx2FurwoxFG9XzD4BRCiLJJnghE2SURWSTK4hKgLfXU94JnEWU2UCs3dWsAS3wrq4wKC7yxab8tH8WBxLti9k63",
  "key30": "4PNLz1Y9ac1ErkLE9rUXjTBoqscBm2ckeLSWKUwyZWA42dT5YDCaBtKKq3LQX2rZwzgwcrfT3zzA6fZzEbzBRUKu",
  "key31": "3wwTxHP6k49UNmiJ76VnwqFSf3A49dUYKpPbsxHFdsxhu3tHnJcjX22n15tYM14gjkE5wwuXJ2Ynoo78xSKfSXM2",
  "key32": "3zTpDiSk5dqB4JzZR99QZqWP4YxXA6CA1q1odcgZcWoMZQzCeHTzBEsRg9LzHY17vkpj4iqiVwELFojmfYaKNhzM",
  "key33": "3XXs7TT5diyzeRkkjAuFAX5Mspv25r1SVU2WmfPzgua9LB4ctXfDLnyVs3VtTodYqND48CW294XYcxTSwPZBEXwp"
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
