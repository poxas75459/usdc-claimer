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
    "4nGtngGZoHX32LuMBLRu4jBBrh2Srojj4mb2RCHd4QBruBSudrdGiUKCcZoNYsKUDoQm733uiR7xvkAZPc1dfj96"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49VRsAYyuZboMjRhVcVf8BmHi8SS88sC6B6ygbwa88T1oqDiCxeMvNKHRxtYqJguqYHR6dZBpniqmMefUAGR34J9",
  "key1": "4pHebyursm6U9v1At1yGQ5r7XgNaG4MneL7wJ6NNzhQS3naR7PPESFEcTd3RiJCWPzYE3xf6VmfN6EZDvJeW3h8v",
  "key2": "Vn85BGYKtJDmVEis3xgtAzXKS86XtStyutgXbKL85n2vs9agBjapKxcMJBbzrSyYaK9po6shGya2WcbX9WdQJ3b",
  "key3": "4p51Eed59TCWPxV1qr18XGG2dMPVdxZSN8TWTxBzWsUf59eDizuNythehMNNaFgUoZFDnDSfGa1m1MdKdzPSxz4h",
  "key4": "5kiVQmNt4S7mAGrFBERtjCN4y46xejkffELmhuzhJQXXpC6h6UzL6XUdpJU6CNcHB2ZEUacfqnnLsoqnYxWHc61X",
  "key5": "5W5JVsyPatgnDf9kYqhTSHQoPfnuwJeZ8XTUBSsMqEfwEvZzVChtDKVb6TTvrGAShKnzj6QuwwAE8s3wZK56T7Dg",
  "key6": "3HXAjCE2WgmLSBKVTnErcVfiSADTHLcn8BSjqJwCszpXYty6JceMx6TmoK6WyVrevqPjDSHZvULkY8g5GZRcrn7i",
  "key7": "ahYLzreso3EPrpnPe59EiKqj1vPhnW46esPH2zNh9KAPebiaBLKxpZ3GwSc7A7JnGTkiCAfdoYnMaMimn2YRqXa",
  "key8": "5rV8KWGLhjFW6nF2554idkoAvFw3kGhjyPKX9r1c9crW5ZsmkuUco5k7dK4gfPzNDaop81NrGqBGXKZBvCFqrUg3",
  "key9": "3riSNMtGCAzaEe3k2RZnM1oPBEKDsgHqVRndCQZqcE3xRoarj52UA7VDNFUCvSBsfgZYLjpZb14DLY21BSLmQYGs",
  "key10": "2dgHM7JN2fX3AtSva7MSRYfmduLjgZ7oyWhBSfcZZ4V9dJpXCyZby9SaCVR5qPdwhs5AwdpPb5h7zZt1jMJaDdEA",
  "key11": "3exnuuMobfN4LG3o9bkKRXv473f6u4tbQYspYfcvgaHfAGPoC4r5Krj3SpyQucx8Df6AbQeCLuZqHbMv5m26ToBo",
  "key12": "4mNEZNdkmp2vhzCmhQWsWfcrt6D52HrWz2jVLkJ7HUJoPv4qxaYxz6GDVeqG4ukD9g723p493h77ejhoynHfXG4o",
  "key13": "2DHB2zCw67VgdccwatQ6nCKnhd2d9BWUyWpVN4wsJa6LKSssNFvRM5h85kHMtuXYogATtDnLofNccEQ7aLwgouPx",
  "key14": "3RuNbJnbiwGmVEXXGErDRvbZLt7h545fcgV6kiq2weXShutkcGycaHNXHZEtdKpSyuKP6vB8LXukjrjkSKJ3dt93",
  "key15": "2AzPUahAX6zBaTSpQQiHbTHPN7UUgtzqxZkQZ6UsL67P86yQMg6iDX9iVyWnx7B3gY1PQnj9x3pmeRCBbUr3mTJm",
  "key16": "UK6K8W3tnUMUEJYvMBDucz9xBPqGUvX361HkGegRUoxeKGCWhNV48srPrLoA8uVwriGioJ8s3ChVJ7rdfK87h7y",
  "key17": "3bq2HQM2ph76ezfVfbjTUQU5wsG5ey41EQhyMGwia2knxEXfJXR71mWuwszeChrFsT6moBKCWbpxQBwpCzWXp4eS",
  "key18": "4N9bhVayV1RocmbdD2YdRLV2236gf8kMfwxSjHTj2uP77S9JXEuZ74zQGUuHV4LSSUuX7CWrw36yNgsQwFXP4s89",
  "key19": "5tLGhXibY9FCP2CBJP7aBPzs5pHf1hGKwpW8VAAiZve25yDUVbs3DUcJw4nEjXLhUpZnyBxqQUsxr7TbD5nkgc7b",
  "key20": "2ASp4SyYwBNTipW29YuX7tL7mkye5RnUB2xm95NC5EyRKa1cCz7EjzBogakKh6h2PK7hLvsu5z9ZMvAWDDX4Uo19",
  "key21": "5XkULkfWdxGAagFp6cwuYj1qqdeg7UDMkNTdH9moCMTNKuauBeiJkZY7ihHtR9pQnSpg4kgyMvWgYbpjkN94mqxE",
  "key22": "5ysjMmeD5aTpgwyyB9q3g9FzTFwDUonLCqRpJnVpgaKq8egd7GkNv2kNqgxdZGng9WQKZMaua5LvaWarhDJyLECE",
  "key23": "5qu2CkVkv2sa7g9YnPxdywLsRxzK33VTEViobEb6tJQRjWy2WPBaMp1gSLTimSyct5XREBUTRK1LvaDSJQwjJqix",
  "key24": "4kp5Pff5z3fsq7jDnnhjSQNynLEeiD6ZbtXG9WzJ6CoAHQ5cG8D4eKMQCgPisFkMVMdCgRaGqL6JeSXoav672in4",
  "key25": "4r9pG5zoU4xV9vP2AkCtesHYe3H8oWugG5XU7Wd9ShmEHo8nt6GurmGJi6B98GcJhWjAZQcQaTzJ6D9dtA7f28ib",
  "key26": "KafCH5SHNS46549gsxnSz2SS3K542vi6Z32XPGxQ1PNi8Eg6R44R2CsD12D6ZWoFCpF4UatyBnf33uZ8F3mfiQ6",
  "key27": "4fre5crhxvRVbnhLLx6zaPHir6ww48wpHeFbLTLwydK79xLSxFDX76ryvFKGWguxHVmkzMt1htbjkRpCbV2C4Jd6",
  "key28": "5UJVw8hfvkYWyR24V3JwdSmWcwYNsJau6x8HQLG2LgUqFSu6THxj1a6NQKckSo2MXyovJkovNZAfxLrXFTfGSbui",
  "key29": "ic2s1WPt6oJYSdNXHEnQTd2bDkvdxRafkwYLfhS2yUk2K3NXDKFoMM2qT8SDNoUM9Cn1TxiunEepuhycGrPm6ZG",
  "key30": "4YCTjSEUXPSXYkoNYYSZpNAyn2zEKbRTihmzH6RfQHMm3PBojxhs16RvBii6RKoMBG2WLY967V7bzyfkaBUZ6ceb",
  "key31": "kbAf6WxEzGr72VyGjqbMgVjxvxjNPbzBeNNzwnVbVAJmrd7sZeRVCGhe6EZgu8pS7CyL2aXr8YpZsuV1DTDzypG",
  "key32": "4o7Pe6PJaMF7dT63AgVuirrvRCE6G2zXJ52TKHDdT4NMnjLnuimHshcBkCvtDYxrm8T3UFAW23tfSbEEVdqnySNk",
  "key33": "55MFutFQjoPFrDo9J4s2VBohnq3qk6XJoGqqAPA7omCvQW5uB99XBoMyeDFm2jjZHsf4f7Le8o63JosatqVMWWuX",
  "key34": "4J71PeVDp7V5EjRDcEKfK4ftZrSPsX7QpjSPmc2b7A4yZqom1YJL5sMbXzggVuBegpSJPPYmwBFaWWcUHJfSxyq",
  "key35": "3GNjje6Hw6N7xW1dViJUtzsiGQgzx2ppHHWEgHmgNiCbH6s15Z5rCqwz4Zt7jiaRxHvmRKyk8HnnydqEMv7joaoY",
  "key36": "HzNtFhmLgJRwdy1KvZFhDfRqZN96Ty2aHLpoY7oX8izTwXZGr94mXdigt9xV4nbBxqy56nJxYecbkPSjj92z3n4",
  "key37": "62TFso8AY73nuc1yKLqzrQaorxuM4Auc93pA1fFxRU4w5Jrd3Rxs8vqqyFw8uGED4zaK63oBpcM8cr9wwPB75nyq",
  "key38": "2Th9QT2SS1gWyMJSSFpF3sCAwhEVU8Rjj2oWE1bAFRAEKfRACCEW6vhYesYoi8AUsB9M965Bf66e9mq6YEeQgw1Q",
  "key39": "3edyC9YVer4uvgg5Mg9D5LskgzbzK1BrgazzEbNNw3oyi7ZPbpNY9J9TefYBiP6bqPN7P8MEECw3sh5DSQ7siz3x",
  "key40": "2NnxhKqj2rC6q9TXStsy6hKDw7xX2B3g5P3d6RYuQfJTYzHnvn28hhmNHA2r52hdsFK9PXf2t4oB6Wqo8UhXuUNJ",
  "key41": "54b5U82RJXkgUzMqwfFxajo7LpktJKdqwoLg4CL2DbM94EAbw9iSnKfEpD3PwCGFwiNzj1fuhqjDxyTSm8RkqZ2q",
  "key42": "3ryHdgenkdjM1FkwQr866zUYSXf1SmRjMtcbVJfC7ehXvjLvpc7EFhJV7FbpBRKgyRY4PPRyd7TEFwe9SCvG31aA"
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
