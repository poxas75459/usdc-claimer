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
    "41U5sZPc79JQjX3wYFKMFtMz53Vi3USFv66D35Agtpsm1wYcTMSLZG3rkpm8MXhMhemSJPFDNzEK4w5ZKg5YhwvM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57V6qGYmMHysjBDKrD9228METCzWjLGxwNbLcaXvCJXwhsTT2ry7ZgQEXVzqnk1sx2oHTPhR73fgLhuHkkqQJTdr",
  "key1": "2tvf1BHfAQX2Es136zEBxhpmHLnRLb8NjbhG2TTHvcfzxLdyedYe4X6LDpiCrYPTZd6DyfLn2zMdEud9TyiVVDNn",
  "key2": "oTDqLxJo1xi3SkCtNyqfvAeSED79FoMEkGMF8YqYXQUf2JvvYbdZF1UTTgm3PbUNz3cxZwhiHzJx7myxP2PAAM7",
  "key3": "5dRhB1uWsbPw1A9Sp3Fyzw7L4zbVvk26JuTHM6zzzdwCTAcjZReP1VJPN3Me3EHdkjdPYVKYLESkBRUEB12DcVus",
  "key4": "4YLK4c7TvcuBY5Pu5KVuaT1RSR2HKf5nHLCBzfxpbFSYkTbRqG1CYrPuLQzsBmqCnCJfdFpf3RVGu5RG1MP2vQrv",
  "key5": "5aT44d9FsMtZNdxBD9NhJw8myN22DHxyA4Wkmu7WPoVWPYYhdtawWmZDGppXLom5CGVmax4ntxuj7ByhD6aVxpBP",
  "key6": "3AgxV6Sfo94FFLW7T3DiMb55FkDSNWhwRZJXyeiJUGphAqkLQwpb5DcPf32wrLUW7kJDK9M2svpXZUBqdNsvVU8y",
  "key7": "4ffoQV8BJfNXJ2o2toQceZpdxLTUha52zsnW15rw4RDCa3UjDVHqPbA2RuvscSggRNnnpVk8qLsbRMRrCZjdGFzV",
  "key8": "5cf13TMSuyRTGEBVhWgQPXEyupDp1auc45cQN2mJ5HSdVXu7eRwpGwumCC8qFhE65VivoHjWmEyrv3mNr3QDGRMC",
  "key9": "3zJQPJeU6Af6cerMwEyVg8FETUCkeQyQpiMzL6hyiCi3ad1qv359fhi8BHEcMhX2uky8fGTGenf1TbVc1bMuf5t6",
  "key10": "5Km5xbxhRksY3opCLv5QbWQgGFaKFZgXgTrc1XNF6F5jr3rgfdSJEdidZhEkMgMu7i1R6bNVU3FZajwmANMkVpy6",
  "key11": "5PD1E6vYpBzTRc9jEah4Nq5TgeZ71atsMExqC2ZM2ruXMeNt6wMEthureaDvVjrM5recCgcVcckdNZAi7kkCg9Da",
  "key12": "3E8rsDfwnHf6XC5LE3LJpE4jx73yoUQXY8iXWckwabDXu5bv7yZswk6SYoQCidcagMJDtwP3Hk6bLto6N3uzgHAY",
  "key13": "22YjR3Ut3NKJWhVh1Vb1F4aqLuivK5pR5hzTqEznQR7nxnpEAPLEzmEuMFVqtvzjwBKBf4t2K3KSGt8QVRDY4wr8",
  "key14": "qygwd7QE2qUwBh5ZJakzHaJ68zr2YXwyts4AWayFPEjYF33iXQywZNJ5utEbjFqDmBW8R4H6GJcQ5SxycF8aXJd",
  "key15": "5hi6neeDN72gfFe4Nk6mAYdEbDvuVv6xMBu5oDCPwg8LwvPPwpgQ6BtVe8qAY5yhKdpghRNLJcn6JP9h6ARoJ1pW",
  "key16": "5axp3cbrum5vqBYmeBXctteguaog2QaQZDvnxkQRmL83B2vj2p9Yc1TXnL9pHLPRPnoTR8TkZfw7Y4jJcjLSKDX8",
  "key17": "341iSahXDV689RGg18vhHfGPDYJAzA8ZhjcpEFeqLAL8kt2enXwjxcouT3dpbhi9pAdjqZJCELWjBa6R6FTbem2a",
  "key18": "23pLxfbJBG6UNvqbTYkhqEh3rWjvmEX7vKSrP7PQZYR5cPkcP7Kp7g464KDNDURJjctxiBXkW2jKpzYUbyyuKtW7",
  "key19": "3qQq14qsdsXZdYaxzL7BA2SetN2idb4SUxnEKp8jXsBCTtcNxf9SnDGBxxRYoz6NAeHJ483KrC87n8gsdF2Kf6pE",
  "key20": "kPVrELMfz232D6geUBMTHJiChiSW9hSmtDkeLL5UShqr2mN34KdA85fwsUm1KBXxoyvtntoQMZ9dBBVrwNNtc64",
  "key21": "2C4NhpwgUsj5KDrUr5CD7xGsDDAL2DbjC7LYp5y1xm42SCXZZywXXphpcwkd2o4S2EsQ2U7XgXQdgv2EqXyTVFS4",
  "key22": "3bTGLTwqq7W81nyiLid774dArgtqL3LZ5o8xym5gVgooXtoMRAngUkeeqAsMGrtRdR7L1pVxWghJpkmpenuaVkEM",
  "key23": "YjsbaEW8wqeZBqKUrLbnModcPZfqqgPo3mEH3tNXbDo8d9xXRXewo6cgt5JoJY3gCCp3qmWPy6oGdDZ9e2aVVb4",
  "key24": "2uzpSBSpuiaeaLJ7hPPdhYyT9s8hrUi2ydXUD9CqfMgGF4uPbkpeAS7yjGpZpmj5LnCxnyy2AAWDXJ8FfpUFEKs3",
  "key25": "2yx8ELmrohPty1iwfkHzdn3joczyoXBUZjHfkQiuzEfayB7894eBn6kPR61vLXmbWjXfei7QsVtGcZteLj8D8cxC",
  "key26": "51N6oXD67cWTUH9KhikfmBQyGahDM34VMYhhV2pEE996pzArFDJV75bW1E7fS1Jvac1UCaU9UkWci5rtwV9VWVg2",
  "key27": "4Mg3mUJeXt33fL6XJvvjS5d62apkLtQkt93Lt9B12wtWEbdmAGGdcyzaUc8zXiLmkRTVCY9py96EHsUpgkVapVro",
  "key28": "nB2SxQCXTBGJF2KJPTbZYMbJP9DVE4Xx2Aiu73L1EZ89UkH4MvaABruyU6kLmxzefy115WUXuJTSFELdw6dr93v",
  "key29": "5RuTnZfC6vZ8FYyztMQpttsQ9hcspAGrjbbgz4jULXbuRSjrGNyxz4LaAwzs88UP66j7cJaxWZ75NTPS1q7rc8Fx",
  "key30": "3LY9XpksMVzrDap5GaDrP8kryKma7u17DXbNTbcsdZBUwJVWwukkdGefajhKENHi5uG952j4pSSVVHBJoUaAVoz9",
  "key31": "5YT3afPDSKhs2G1nPL5tW72QJm1u9iNzTr8tZo9adj7stzD3Y8EKKLAKAmAdYKK94E1cPKNS3cXMZU8UbtBtKBgr",
  "key32": "5TU1QHmVPbMvXGP4Lqs3wct178zNk1Y6N3xTfbvzLUoqo52hYHoGj6s765tDpxGZfPD3iubAN14PvKsyzUDHzcPH",
  "key33": "4e53ARNuzUgAodomTFTyrcz4TKfQFQ6gNvCezsugj3VnXpKh5Sku3GRQtAPo49BSsSz4v1V6q3mHB4ieoV9vMwvf",
  "key34": "361wQG1DFUFcG6TEV5AMyCziHAJLD8uyDbJgqPBppW1nP3DmLRoNWQwtNLmz5oKahCXLnmXo42QyTrJKYjaBQvt7",
  "key35": "uGYnngbZbo71WbC3kD284HfqVkwMfXv4XVLjDYUCdstpci6tA1HR8JPGyTJaKpE5TSNMbHgCEXD7CHPGB453gKC",
  "key36": "2TRnd2JZ2nWpx8M1nYds9Ln8mDT1o9hYfG8tpdGYptdzZvxjrBNT4FbXhmMqeKhyrdGPLEwb8exaiFzqXyzgk2pb"
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
