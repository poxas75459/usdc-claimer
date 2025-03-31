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
    "5rkKckzXxagtY7krbU3A92shnx6eaQKqTADdvQhxSKntwyLYjgD72Lr1C7vDMtgYzedQU4FbCHggabBnsxAzhLqf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42WsDWTsR6aucMVYazofUEu47d43gQvAgZrcyKg7koqoSRUKkiruQV3bfjEFhRShwH3FJx4NP7AS2ndbFZrodYXZ",
  "key1": "2oab1qvUBpjEwJckH2iahBAFjG1eiXcDV5TTWDTVWJb6CXuQrznZfcuVRXoZq33kuGWa5GWuEVpkqyo1uujnHsBA",
  "key2": "4ojCJ9gMSMmupuXmwkw56WrQQKizumpnmNBzwzEYLswG2Tfw4fiGzpzDCNemsYRti5J3K3y3y9Wm1FHWtJhwiPLn",
  "key3": "3sfvYL4L8mCjk5TjsSHGm25SNwNsfxr9TfQTgGANNfq3bPfdKv4zRgo9rtb4x8auziTxZGH69ZLRQvYxguoB8RAi",
  "key4": "4HhUKnh9gLdEcySUPjjevv1YCcDBcJ4zWyuKHzuYgrp4yCK92g9h7YorKK6zMgtJqr8xhJidM4j6rF58ztudn7KE",
  "key5": "SXwkDoqnUfVBNtvAL4dds2uCpRiqF8fExr64d9emgAKbh1U6XVNY5rhnjCszCAzuQDqgCnPqBrLVw2UHvBiN3kP",
  "key6": "5tFjSdbPof2ZC4BNxXnAcgiQXQuCytqicCZCCHUMBCeRyHriQN77TXUXMtKGtkX3eMTxfre8jJ5effu6zqh6jHts",
  "key7": "3gvcZqNRGJ2yiueJ4tjojBrnRx6zy8G1a2XhFJPCkgqrDjWReEd5rZKzoJEewhHQwPZDuGrZ93cbQ651kNFRqtRm",
  "key8": "2K1BgbsunugV5t7Hczc6si4zMrxjfUMrPwjMqu8inAq6nKLTHKtZUNifPSCSWUW36ABGRMqjcogc4qiXXB8GW4WY",
  "key9": "4o3p7UsZSSRw3rambZVbziEnCGdYAuqQPEwMixVsdbS7KhNtmfyMjZJqYVDafvdwDYkJEjUprs86uqRPEB6h2TSn",
  "key10": "3eywpwBxPtG36eHceEdh9AxXWqqFtmxx9TnU6WumYcurHqkYL5SWxxiRZzse6oci477TfMK5tN56uSK9xfBVTzLW",
  "key11": "446snWt2GmxXqdMP9KoNGoZeCUA94AWAiR71shEqgoNjqRoD172wvj5XfJE193VJgEBCZ5yUBcykP2UheneUo7sH",
  "key12": "4HppcMrq5snFdr1X82mEgHL5WaZbNX7VaXCsDvZDi8JjqmUoC2V1JbZSKMVdB7AFHLo6LWAPQriWYfSAR9pab6KD",
  "key13": "M39TLkNPdrCpkTYwjhCKWVKdpMKizri1xkZBqwzfrw3HspuoFpoVrNNJBPBgo2bfJAB2iv56k5QJivfRFH1qhZq",
  "key14": "4pdtkLfEnGZ1VBRuaomvNW6jf9JQn1coZycpDtsJYsLhqwFnXHJimWuNgvrETYnpnSLPZLjCqqv3hUB1dsmX75sy",
  "key15": "2NSZih28DXeEXEaff9xikNsNYsGjyXNsvRY14iSgLP8JMWd6DS4nGMwM7QFaFEzErjNuKT6eaGceLHTLqEtB4vYk",
  "key16": "3sTt9L8CfMJjqbfVz8drN97KpMV7bvfpoQKjWRKLFPMiFP2ZhPw1xjucU8usUpe9rcoiNC6bBiyJPeQofQg8ZJFD",
  "key17": "2z6gpFnKCTtpd48TAQ8BkmuxNMYauMvcztiFm6kZ5RE6UfCDxhjxGxdzsKQXAUXzDsHu29icqpGZwbhT17bxzjEZ",
  "key18": "3e8i69zppvqnu5X3PJm8gGG6TFYRrTQLBTYRUEq8vpArRH8sRpJEx9oTKaGZfBSN2ZwaAnDHQsZGBhKZXD4Mi9aZ",
  "key19": "65JdWVii5xTLHJwLb8qnrfooVgAfMoPrxk9Bh6biWkaE8zkHTXMKzKoZN9ttf3tQ9yTFa7EsQ44bcodvcwnBssk5",
  "key20": "4UNUY5pDY1H8z7xUV2LVMhJvzBU1i7oBbjQ1QyvRxDJRD31ReqQvTZP5f2xbkWiCex3p2WsoyoL4WjigeVARKfGZ",
  "key21": "8BLKWbV98GCqJwWkz5zJuiabnMWa5YbnMha27qRADzerdtDwNTc5V1mSLPVjWqZizrRRTRs8yi3SiXg147VnJd8",
  "key22": "3AzA6tpBYkRE89MyXyj4QoXjjVpDVNGBBZfqERcAj6wvUAs7Tb7BWy8CWyoqNfPEeN9kKsj9P96oQvwuGfXAASiB",
  "key23": "4W51wS5wCMdwTChYgadZF6hbBiQ4qoiChNrVJxywaBbAZ74bHcu1GYQR2R9iULCnAXH9iT71wNt4EGXCxRgpMoPr",
  "key24": "2JkXzfFXfPcY7kyJgTuYmgctiuEJkCAg9i15w22Usonn292GL5pjUxX1ai55UKNhiKdje1LSM2SBoshEt5kyY1FY",
  "key25": "5SsBwef1yrAanAQZDTxFVNv3b2QKG9MU3XjwpQExBXjdEiiS8PJh4zYRnxcZneqM9rZQxoJ5JDUoMXZA4d1Uy3XL",
  "key26": "4Buuz24eaKD5zFz9Q6REh87YsESrr3pa93coZis5LDwXqteZREmTmqcf3nuT6M5yFnW41kdrZ2BbMwGEsu5bPEkj",
  "key27": "4GwS2UrDLwSj6ErmvYAXDAdKazx5vH8opEcivMPj8FLBsJ3Fn51u327jMG4cVG7C36woX4NPBxjFqT1xcmqjzSrq",
  "key28": "52eeBf28kLxKqbWgkVPQLwdafU7imaZjhrozMbjtHe979DWFzz1ijFEtraXyiEW6WF478wzaxAb6mxDn9obTvu61",
  "key29": "26ZFvDC48LQbP5T1BfsrGMBP36XiYV6ErS4gGiWHzvWASyzUNcmkmsDq51VCCgbSwPTGc1y8uixi861DjtwmXAto",
  "key30": "4P4rQnVaZfHeSUFHUujsC1yy9jvgmLoePs294CdkFAjDABsBpSddhTVY74jaaXpZKbH3asNF5MDbeAVi8iQxj7my",
  "key31": "29R44VkA6K8UMpabUrTuozNgPZkicaEy5Equa169o4UtobTKbWH5h8AP7QJs2oqsmpNKJv2ryx9qwPSVr6eV64Q9",
  "key32": "2wxJzwwjaevmM8ZsnbrzW3YFDvj5WKnQ92VEgiV1kDkHBu53YEXAQfhyPWM7M4xLo3bDxh5KaBYukmoYJAqcKVzN",
  "key33": "X2dUhek3y3BjBfCHrPMCUYaRikkFngXa92kuLZb8HqpFB1Tm37rHev3ppyf28m4U7HNr9hKVkfmkHrG5TUKkbxf",
  "key34": "5FtFzzf7KpT5ybyAMxk8fJSKXZXegXZzRqS2oiLCznsYXZSTiNB6heQEaTbBogW8WgKFoaQk6EoUVLif57crutss",
  "key35": "4yMz2WA7U9QzUE58bVr63CLbWZurEYAUvkT8fj95wyS1YcD7pJVCqAC1RyKXQWof82GpiPSR8pSnJn9YfibGQwSG",
  "key36": "vD2SuKYdXX1XBid18Qz6oq6Fgb2hV2eeANZiMJbZDj7DyLxLLZyXcpQxtLc4K5zMtAfinskogtV1D3hcLNBttPM",
  "key37": "3nhqViNtjo7LNvP9cFCVG2QGsCjWzZMFgTGmSWSCDwvw24onZS6eewEdr1hAaSsqekw7xvAb6jQqtRuW57NQN5Mn",
  "key38": "3PbEvufm7wpk7XpppPe8NJzg2Ck2huTQybqXN7KxseBaKbvqLqCGdR6a6DAYu4emJHLY6dPXzeKJJ2Eq9rAgLWCw",
  "key39": "2SshFC1DPYEVV9YTeKHTWzvJKMugP3xSPfkn4KqyRBbvve29waqj4WcWNm1u93r74XxDvB1D6n8CiXY2PqtVzSKo",
  "key40": "33KDja4KQ7f29igyPnp87eofhry84PxQyHDD7MewWXabLDvARbx1h2aGCKsQ16L6DMf2A7rtKKcZUkfznE8HFaQJ",
  "key41": "5BFmfeYi8YWYMMvHUWv2jtLYKkhqEAfKGo78Cn6QZTizxdpfcCNzGnvMEYfQvnxW6y296aue52biK5qV4ruEjEFv",
  "key42": "2YQXRDDawNbnKwCZ7ep8JFAEnS4Bo3dYvh7NcLhU6nLv7NSstdgXhvK4y3HZv9nzft7JPoKdgEU2YGDeTRqHE42y",
  "key43": "33CNfBx6aXeJjWcXzK5Ly6U2erteuZv3kzhXeanyDaB44nBqhCBwFPxTisa2x5QL1arshErTKx3wKsathjD1nm5r",
  "key44": "3dKGDYhfa7d8xgEPyD2E6CaNjL8qU8aVoWPNdCTPMCx9FZ7QEXof81pDEThd3hHj9XWEECRye27MTT496strQed8",
  "key45": "24gY5RGLG8W2yBTe4is73eGL8TvM5hx1e8Y97L1KbV6oAJXqyHB9uhDwLfbkMf1xBTtCkrGzyq6TMaMxTov61mtn",
  "key46": "2bZVRiQHfFJkmKPtmhh2Q4xQeToYmydbVxYJCnRZfSxggyeUVG7tWY58kYxgFGpkf8RiAxwr7hpw4WP4th2YCnqt"
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
