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
    "3PRcw297rerruH2nKcmSF91LfxYbK7ioxyDbSWdHa7Y4ZQLaXPLNQQJsLDAFzD9FiQWa8JZAKFs8mFMwfvc7Bj9f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G3vEUZdRS1B8B5WCLajdoaTEMR47kmNQPYSvYDkYsjqJeBvRZhASStG9aTPcLv4oKihnjsf9mZXVpz5oMwWiKBF",
  "key1": "4zu9vpMprYTAaHMGJWPqQUtGLsCLjqQfZuemGmXt5HXNsFEAiaAkW8BszRcKWYQdCWNzve3Y36xDRY6sANz8rpQh",
  "key2": "4kKYArwkDrRVHPXPReRoSsTxf5g6N2j8kxvgUnsNesVayx8JMFKsGpFwqPqtBaRy3NBGFSr6GvmGAAyYocLEPUXV",
  "key3": "9Z8WBQFYrY8biQEoP9ZmMsqyyA7soFpHVMfhGpWq2ZBd9aE4gu51roChe25bVBXm9rrgE8g6GM9vyMQNajMcx1W",
  "key4": "3cPmNAQVLvuXVW1oTmpLGgMHVzAvsaWiBpoXWtzmmF8Af4MQDGcRUdeBckQSLNfJmJMnB8NoY6DLByj2wvncwdX8",
  "key5": "5Fe944KvA51xpm6CEYMxutsbUmd4MpHGaHxzK2yYHbLKYmZN28wPpK168zBo6a5X78UVvtjweCygZ9XSk73WpF6T",
  "key6": "323UtnU7Suw3oiUgLTuXrvUA6H1TSBn6v6vPQ52B7WPcJiZGPUuc1XsF7cXDtPi5YPAvXG2TRYWS3MAfcJQKcM24",
  "key7": "kGWvi11uhEAQNQkRsdSTahaN7dWmfKJt3FaADwwtyCy72CZZovLCrQFqwn8PGCLXikCsAfCLj53AGvDL2gAkUny",
  "key8": "5L7C5cbJunpDDLGmdeRmLkwzAmpBtY9g9V36tHEzq34h8JYzueVqy7sy7JhSWQfdqMFLs9z4msHWVuMDa4zSisPA",
  "key9": "5c2h7XLVLJ5mjtuJN26F1yL3CbZymuZwy4AHijvw1etKtwvN1XN2xajdK9xBw7HKkr67mR7mod7d1VeFSjrcmCYp",
  "key10": "5dNcWv1LeoWPQHQT5PGiapiwHBZaEE1yRwoWA6qJy3ZHPG1YUJSc7VzQ6kqKJrWx8Q5N2YoWYzVywyNVCxSzxoTn",
  "key11": "22Li2i9TSewNftWKmdBDN4AuMMB7mUJHsgcCGD7KxheiCadRxByBLs46zba5i1FW82EL3zP6MFXrz4Z6Q5r9Lnmp",
  "key12": "4qFDX42SPDFbJ5W4tiv3YidxEzHeJrEsWLrQ8tRxsfR5baFDTKfA7GfiR7stoGbnimjUUsQ3FdSAWBh7qFwujj2B",
  "key13": "5rZNtXEGUrHEtAzNiWL8myj1PXx24tfpM3enzwrdaq6c4u7FXwuBADRnXZdmqH4G8oDdKjwJkiLPP89Wjnc2ihnr",
  "key14": "55yNkEhBd1vTSRtyaFsVEfrhwLHUzTNrf2JsJU8n9GG4xCqg2WKdnG4cjD6wrv25Zp9D4yC3eUayWAq1hCccDtFJ",
  "key15": "5PvhcNXdMLPNzLzvsqiBv5dZxDgXrZQf4iYM6dHAz5mr19AJFZkAbF8ZbCiCDjexkqGS4SmS4JhU5H4JJ8gc2DW5",
  "key16": "3eYVrbn7DNH1jWjChySz2HUsqw4aWTr4qEozbzBMG9BXczrzrf6gXMw2hr7Gf2GNsRFojGVBazVFEyVg4frwdHQk",
  "key17": "2BHiK2sQHYVptQ5eFfAjYrkiNQ26ERXpBNfSwNjP1HeL5QnojCwr5iymQen2WkY7xh8WhmeSYzBc1hUY8bmKYxkd",
  "key18": "2fRPsJYZ5KAwg2MxadUCFzm8FUeUdFmgzqCNXVe5QbPCNEq6Ji9J2sVL8BXUGD2hBsS8hncVzAwp4sgKuG9ySN3W",
  "key19": "5FF3Qtpg1E7hLZbVSp1mNT8V3mT3WcezSXF489jb5knsoFjMY3to4tcKMWMeYwjuYhqXwdBdTnq1D2QZdfEVW8v9",
  "key20": "rvL8uNK4gWXBq95fJFBwAPXLXpjuAovUAzbCQdLgHnoPP3F4NpvS7U4gBNvmmUCLnXsZ6d9Y1MSBtoBz7uhLsVJ",
  "key21": "5shJzbmmpTUG941fqZi17HL6BGmDpqRnahNH5a494qpEuY6nFhdvVGh6Lb3GstLzYLvwkneap3UqZX9uh94ACxub",
  "key22": "3yghWD8hJY3mYTNbkPfRaE4j9ftTezQ9o1kzAecxkvAADjsVB1gxqMu4CAZHSJL2GESEzgBN4KiTUaaGw3LZCmgj",
  "key23": "4VRs7N9yGfGC2wFUbqdmPQiwN2T3cFasNVZ2yg7b64xDpBP4Mqkp4VDR4AwpBFvY4LMotNmM9z17kzRf9zrtmaqD",
  "key24": "28AFEDySr4QaYfCjTXBiCaKwnyCw13q9ex2tQktDndJihNL5wnkDc7KaEVgKuntmUR12bETzQWyCJSUSti1uPjLX",
  "key25": "QArw5VsVBemMYqdwHHNnxkXiJoCMnUzhnaQsCcP98o7iFjbziM225r22WZ5tchddWiwFtebWSHNRhn8ihzykPLq",
  "key26": "3ZQqUurKmAx7rko842u4YJrdfWJzfMYcLTgCy49oNjP4Y5LnsmJihbzRuyyrESgnpC1U6T1qRWkkD8tngwWom8pQ",
  "key27": "3ASMF8t6v5d9mWhALSdvQpahHG5wS45GuwmpjWhFfBke2QxPmYGqj1V2bZrVzkMh1iV7jqteUYvS4qkesm3Uds3w",
  "key28": "371XbWzN54aiY9H545Y9bG1wJWGySViH71JbqjUq42ALFxPzx2QHt1JtWZ1hXAdNYMnhjCJxgWVqSk5rnumma6aG",
  "key29": "67jNiY5NQJFj4MNAcXDe7GZEWf5MWkFvPaSDAQUygt9WWrJUH6vNFGB32si6xuyzLLZBvfUMebEFX8LTFTEwCQeK",
  "key30": "61KByb6kVFXSkGqAsMaDwp1x9QGtnreEMYVsTmqexV3pS1QsU7EFCYTYr6py9nvopD7BRDDFHfhbv3De7C57o3TW",
  "key31": "2EWtv8eTeDTRXMR3Ez25euPu3CsTximMLgMnm78dbwozwyhJ4rWxBWxLg5ensGD8rQ8AKrn9AZe7XCPH8Y6gMM3j",
  "key32": "2cqVjg4eZoGUxQsZ7WhiJRZ7SKA3M4zhqsnkw6eydMgShTUEnGq95TkdfwAphuqkRsScp7qes3UAtNqjLdSQ8ryT",
  "key33": "2wppToJWZWcWvHD8h6RsGZfnbcmboRxfnbR5zf8QrTsB3RRfSJ92WLjbocZQWtLXxvkVqSXrJM1Lm6d23CvajpXW",
  "key34": "5yiXGG3PVBkdVgfdjWQykZ7N78oQBzmNBcmp8riXJBhgHUwPpzmPqZnAT5LFKMWRpmwi8JHAu2nDJuQRSHrctf39",
  "key35": "3MBraoiY8SCRNerQnj2HNVKATyUqz8HVuyMRNebaYfrDxFJUAEcHoQ18dqyPL7YWhqKo5bGm6YGdPBVYv2rpGKwb",
  "key36": "RQfM2guWLx2nPYmG8VTMcp4UYaniijfroGAMQaMrbdPaeZTkib8okine3d65AYhwgNzSwAxWgqv1C4oxZVF7UqB",
  "key37": "ebHZrWjyG1XQijkBNJYeoC1Mfv9Q54v6bPBiSws8tuNgdt8AdqMrGFavPgh1dxFabQePtwD16d9bRpoK4jMskxj",
  "key38": "2zJZgzTj4Z4zThtqYJChQ6iwd2v9PFbN9tfjmcaKcmgsQUEvhBhZR4e5KoStGcapWhm4hHEzfDSS8MY9wR38p4jq"
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
