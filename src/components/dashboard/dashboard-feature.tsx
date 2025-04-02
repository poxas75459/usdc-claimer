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
    "3W8fLARWT7T2GC9RiJcyyKr7vhz1TDL6xMNcjwCwvznZzYzQReoN3Le7hPX7BEGbZttYZ2n8B4WHZw8fhqhxF9mE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pRYfo5rYfTpXLPWqKGA2XZReZnGX1ukdS6LjvJLBhoNHEFy3SBuhReF88chLJ7NWEVZ8pgVWg4hEhb6rf4DoutH",
  "key1": "28CWC7uKQyrKL6tPmvyRA57iZqkCqNP6EPfoBAbowU1iaCm2UeqB4q788MDpNwrT9KAZZVUFerKHuxZCTAmJgURG",
  "key2": "aKxK4PYDrYQiA1gULCcL8gp8BkYbC9a2zx84WeLY4UnVopTwiLVrCN3MEvkoeyxrmC8PNoEiAFMmbwTmNUNp5Et",
  "key3": "3TWEM5hE47vEy8DUzAtUmJ81MwG3Z3huBRMxiZ4RQWR1gNAUkPTDkUmWF9sr2ofUrfmYbd2BD85jKLBHY1mgEVmQ",
  "key4": "2wGXfVL32sNoqtroYnmzH41FqN7LfTxePvoTnsVhyZiGG1rGDTChPVf64m5hnuex3H2awUsxvT4KtVZphGPCLP67",
  "key5": "vSVuUfCbixB6BCzRu4HCKSP1UbfkXfAX39qrT4v3zWeWDR1Mbgmu85y8ownuK3HcpAdcAiHuFzbGW678gAEco8E",
  "key6": "3kQD6KDqawjnnGXvW8iwPDWieDveka3a5tyzEMRgTaZwwy3AxHiv9kf2C4W8Utmngq3TLbDaim6Xqj29BVLWRep3",
  "key7": "skebJHakxTCu5EG1CUxdBd3uLdfPJg87MBzAaUZmWgj1mQDdkVnbzHAHgxgFWsxcozpsKg1ihRyKYz3BWM5D4tY",
  "key8": "2N2TeYt4XF597tgXqi6PQTccZjqM8sqrQGjEGFyewRCsdgiYjDm6jSjGkAaTyzHLdYsgr6uHgmNefnxz6sx2CRGR",
  "key9": "3xMGqyR81JGc2xx9dbFQhYXZgodhwCcFZnzN2eAsWvkYzc6d72sRGpkXbu9DbRgxRyaxncAYhGiEXpdCvS9Jj9Hn",
  "key10": "2iXhTtDTKq9RRdmWwvFw4oxEKeGgkBAQdcum2J8iQfpDQTAZP6v3J69fDLX9Qri3kt1sgyM3cepLUE6kaMdEVNX9",
  "key11": "ER3QgJLMs99bJLg4e2zBWricxUhwf364aPusTKAHZWniy5WPHz3EtcZcxty9W6C5Gq7QQBWtp6CojGxTh29v5df",
  "key12": "35KUwu9k6VLFLBvi15C8AVpCaQEQvdSuwQ6QJEbPrT52hU4qyGU784PbEJpLWci3GZtaCXDTiAaQz7DE3KBe1YF3",
  "key13": "5do8CNwKgEcecsnn4FDN3Aym2B7kUEhUZi9UnqKNioWJKLJeeXpUoCKuyktxFvUg3Xu5M8B4oHfSYen8Xig8RNyU",
  "key14": "3JkW8jAs8DpYJDPMLr41UdexQxJqBEkvaDdmeiNidjn6iC5fnmBnfNbzSrdC55sJEaaAqrN5kENZMAtJtKHT9g7P",
  "key15": "3XL7gKkB5JAD6D6uJ7ezz1qsiVMtTWS2uByxsjWWPKjco3pgsMGE8LCFeKJ6q11Z16bQmV2u7ERxbXYYCQur6iv4",
  "key16": "4zaGY6UTKSeWdyt62a8v46DfJQ4TCdj4KLwxkFXLkWgxmM9AdRpf5xAymvhJVbnSZw33wPiJ9tFp5HnHUD178tRS",
  "key17": "5D1bhbBKxKCagwM5kPo6SVWyFMEhntov8eEiYxTvfVay5Pkc3WQDH2yLMEZo8371YUYUuoypcASdfHj7MTeuhNrV",
  "key18": "2A947mNosLmyg75Zq6LWVutxXpirLHwr43ss4r27Fq9bbQyxSURMMgRNTUVg3joiARnU1ajkaLUUG2J4bFoxUL37",
  "key19": "2ea799BSxrsjytFned3KbupmTDUDc1uSM62eHXYUDcwnJKzLcrjT4Ed9gKGWbygaR3UxpNXuSFjdYpmkTqbqZScj",
  "key20": "dYbiE2mqubQRyZ5hLavxTZfpXXbBmTSfMKPC244n99mjp767teZvsumxbZT6784R6abgnnLGiipxShbZVeFh6tu",
  "key21": "52UpBNym3Za5nxuD58WoRA74sXcW2waW4Lp9NuaoK2s7KrcDnP4qg3KT6i7jZTLuh7X1rewdDQYdcDTjrhRhWh1N",
  "key22": "3VAoS1ZxWxzgfGDNG4zR2PCPtBZhE1csGTDMWim7uuHHm7sktceBTmS3Uk56daKU2DgyUEg58cQBRST9JEpNFVP7",
  "key23": "31hPXQeKawFynekbmAD7qPM1EB34m7yfJXVvNmvgXseTwErX1pooBhjPNXwfxXyuzqjH17i9a5jp8AS2tm7C8UAy",
  "key24": "3DzbzBTgu6RTfw6ftsn6rF9g3cieeJdc74dW3N38KZhtJyKNBMMqgr1E1UnF7CKHAginPrcHFrUtVFJ6VM5TkpFV",
  "key25": "24JNyS8vxCEB5ryJi56h5fQqx1MS1tzSmStp9k6kYA3qWVnBiM6PH6sANbgHm8dwr7y9sfqM1fzpJMa4Zrd3obf9",
  "key26": "4KYuHFiYbdCgxRX4Yxds8CVSSL6dk6o4Kv7hwnZStDytidiRh4fBQXNA5s29CfgSiizf3DNSmVpXNbBTMJmLgmH4",
  "key27": "5pBaZ4hn2tQyGZ3UpnQwHbuExWii3F6DRikmZ6WasxRdYXcm61AgjZsWZm17ayaA7QdmsWCbEuN6iiBUzFgLbibt",
  "key28": "y1SfBkVEyesPmaHP9gVTUcd5DGYQ2hrRS698yBwR4DohE4hnXfmVpMSiSPtwHN3sPnndhoZfdNjzMwehqHdiQNc",
  "key29": "4kMKCkT9JQnkZn6uYis1Y66drEeDZSDSaTonJFcoQbVBN8WfvDggpzNu3Uba8fwRskZNpurBqr87mqbJHD7v7dyB",
  "key30": "2WDsabySqm3a3jwDAfmZyiZCdBuzNhar4qCD6LVT8arBz8ooBQz2f6feZA6B93cQMfpAbLcvD4NmJW7T9UpN8hYg",
  "key31": "3pmdtaH2VVJU5bXKhk7qLKK3E34ed8E4sfMek3TyZEQcXAxWdYXbx9EyXBiUiQYKRqfbuyCBMCNLUQMjkRszTpxP",
  "key32": "5cpwgFfsFfipUMyNk7ofaApKQbdrCkANMwsP7r7kCprfpjECBAXGrrJgWXah4ETiHyrHscstw8iaogi75qFExvwy",
  "key33": "58HM2fNtMZCa9uS16mNtktfJjLr9fKFkR1csVK5kd8JgJzwarvgYZYgKeRzsgtgeFzvUafcgsiSmCopsYsoiDCBr",
  "key34": "2XPhcBo9xn5rCExmRsQyTJoqhaREwMmtLDtWmWJsUAggMJHNyZCj71wWvJpH3pUB1hTDRj6UiNmLnF7n4G6pLqtd",
  "key35": "5T9Y8UhEJoYN2Nk3Fdr1ujMaFCj528uCPW8U6hG1YoDFbh4pQn9hff16RJsqjXQ4KZG58Cudefr31s2vK7dg4H8h",
  "key36": "2ZzVRsbk7YW1Q1XpRSy9JPxmyNpFQ8UgJ4YWh4jZppKYy89wDVXPiWhQDr7aTkhXMXYtmtHLqbryJV7tFr8nsv7o",
  "key37": "5SpnHc2kYbnNqVv8ibzGBGzPknzmfU5JFRvP2K5xrGtFFX4VTZN9mQxJruHjtLKc9HGaFBdEPupeoxXGXBfMrp1r",
  "key38": "3rAp6dXMvxk1BmAfNCecZYUVoR5iojyou5cpyeNptMroixk6xJFuCZUwRVvVvfDPgcScmj2WYE7Y9iWugrJWA7AA",
  "key39": "UPQrGSUi3vLpqSQRYhh5VGy9k3i6bsaentt9TxYas2u21Uk3xMsLqgTkTMtKoVe6L5XQNB4h9JokhbRQQ3H8C7Y",
  "key40": "4r1LVWQyqDBHFk11S9pfy8WhUc39Qnz8h8evtXC9Q69FHvxQ4Q6NjD98YENRdTm785aUdbPXv2dsVR6R4zqiEdJq",
  "key41": "5BiDw77fZbLU6UDUjR74pmL51SEtzZas8Smj68hxh36kgRPUWAwMPd6zs36gyoxjDNwTtCfbc7dqTXzF93qZrLM"
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
