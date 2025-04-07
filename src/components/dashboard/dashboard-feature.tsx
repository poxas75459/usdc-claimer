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
    "36f3FkSwNbczZUFnySEd5SsqnmpPpe8TCAa4WcpN7iGHpKg2Jqn3ACkxCwhqeZjnjrZyDUzQmiQ86AgZoFRrS38X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hf6yN86RdTQpnjKuMfJnupg54VxuQvp3DCEBpwTbA6JGtFHqe5NEMBdmP1NRc2GrL3qmuEZzVj8nMdECoGLvodQ",
  "key1": "fvZ9u36PaWe7rbVJH9GAWU4FpPj8cV3eW8temxNfU7idSvA79nzymUMxdhB5skibqtg9sAUnadxVEsDawEyuKVs",
  "key2": "3PvP8SxGW2hqSRgxoVhAtDJPgkPznQriWHva8c4ZdJg1TxkaDq9mxGdMppdSmnnTReSSsChqfhe4t83yQxoDb4Ra",
  "key3": "bVpW9bzFxZZSGPnBP2bwq48bKGnVCigVmgYPwsRSDmV4We3hYpJhf6rcBdT5PdEKj7u8hzKPdPaaT6VxSYRAnxu",
  "key4": "5UsjDTzWvtTbcYuGZ93rgff55zN7NbQUf6JBqNB7spEZztLYxW2dZ8cYnFqvYRQw7hbHLQLfXn8vethQNu7cuXYR",
  "key5": "4oamsaXfD3LsMPbEz7S7rbwukij9h3ZccvS8gJYNCXifHHTiBBHbXXRzZYfjvCyuBgnDoMk2KyRDtgLqvhoLmo43",
  "key6": "21en6ZhKDCc4SBXPGiwwsTyY6jShr4YWxZPht9Awzyer3LBy1A9dyw73zmsenWMzHrBs3kDwSiY5YhYb7uCyQy4g",
  "key7": "eHEpFduPaLNdhcVka4hf1LV5emVPNnnPtbuQJDfpyEFrMbPfrwpRBoiRKXLJXLctmCB5JkJNA5XvVUSz24mbyAf",
  "key8": "2xNEXNsQfA3VDJ5FhxJ33h97F9ni9arsg4aurKVjdhYihp3cBW7rAcrEkNoqbcLU4r5JLbiP2fuGmZzmLChKFDc9",
  "key9": "5fuFiT73s5JdKJaKkjEgLfJmvEkwRDgDV4Zt2goJEydJ2shL8HnQZaaDU1AK1rnEav29N1PCXCoCqYV62vrfgmxq",
  "key10": "3NvWxeP9AEhNk7tQCJPFsGnRwNfvHT4MwQCKGADc1YqLTRbTaQzVQT7vtazY8aoNLC3idsQxRCfwNmjYr29aBu4y",
  "key11": "2Lrt9TWRPFwCaBTXdA6bMm8pVqAo3wQUVfYmRk2bZE7DBoS1NrN6xvnnXK776SAwLXYJWX8aif5MdpAn2EEJ4Wzy",
  "key12": "57mkzw6JCLgxQHRKmbrKLxSZuaXnN72KsjgwuvhDmE81jZdxqj8GsbdQJcmJWncP7L1pvbGjsU2sVirNG7bRSpHX",
  "key13": "396AXD1h2jKuQTmhXdJMLagf8fXLU4hg4utQTgqHX9PN5keiMRmwAmF6Q1Hy1tcvHXE8wRSxLnTR3L3Fh6en3xQb",
  "key14": "NFRkjfKde1VqWDPyomXZs6DYSEz6qztmqidpirzD21DxFYKUaWXnxY2RPrQ9f5AMgnp6qt8Hs6QwVjvmEim5e7c",
  "key15": "5Qegw7g38xPSXvDBR8jdHPw9gULdJQNk42gK8gTCJHQ8yuGVqBDK3LWhATNpmh9Di6KHpJcsDpSYoH411Zw1Dic9",
  "key16": "2HRZXpZhoTrTsJQFBjStzpD1ot28wpDx9majSKfYGfxTeWBT7ipdiyUFG8B3dZvkZtyzRNDXyZ6X5ojLz1QSWpiK",
  "key17": "2QX54UmXK1UMGHgZVXJRmWLD3dQbydh382gLULnPyUjgsci5TMZffsQ3LiH1zr5FjgEb3f5cPvkm4WfvVZEibJtA",
  "key18": "4M6M7Jyi3Et3gRrBgHCPmxYBTpxHBWWGVWPj9642b896ZhNsFGoT7BMFxoeB8cVjBpHs8wMcCVc1fdFa2XLAXoQe",
  "key19": "3GKxHvJnPXLCouiVksiZyK9oayuqx3LFCBRVG1UAvNgKebYLtfa9wYbDYFxZRhiCRuvpRsiyuMkz8xPdiU3keiRv",
  "key20": "33qwpSaXkePXBndfwj5qv7EBXPt4z31HpL2q5qQFDRuJzDjKuJWiDjHoLULAyVonU5FC6H9ax1mpC658zPZifn9J",
  "key21": "4oYTZSiAa5zqQRQ7kPyvFY52dEhyWdk9wjV19VbE8JYLDpfWCeBpkfMe8hu9swHnCs9qrnkDwTBeQft5A7AskYLn",
  "key22": "4gYb6QWmiAJ6479eS1gMzDDNUaL8egZK62ppatFWU45yoM84mBgJDH71dsteEa31LQjmyfo7k1g7M5m7qKUQJLj4",
  "key23": "6UEY2ywHV24qDAebQbsfdvLSrQZpgGf9QRW5fMiXqgig8gUTXq22fD1twzGJ8BNaQ1XnfRyLnw8CHxdYVbqmxiP",
  "key24": "4EvvASCdxcZep68zDzhL1Dyz2nzpQurAVH5TBRf2udu1QdUZU5G6TopXPCJr4TeNQ23PZBLoAgLxGt8xYutAtXWs",
  "key25": "4hZ4C4nq6L51aucvj2Z4BEG58NgoGndFzg6zsDxEo5cJLLs6veGXgfinrBTzDGerVkhnBCVQw7Dgm8XEDTh651v9",
  "key26": "4aqoHma6vHtdkFJZszVNmQAL89iXDfWEip26ui5bbPQvQavNep5ir5o3tm8eL9PXUQYfWLJZb8voEs5uhPEjZhMU",
  "key27": "3GwByNKzoCRfpcJr4mqR7uSUBe97BBDJwuURAGhzWUtX5maJmkxPEnXtyxDaMdW8auXju37K4Hwh2na1xsio9J43",
  "key28": "2tvjqejSsuVcPE8hV8r3bWAzBRsBjSazDGoFDxeUFNsxFgryxdPtA2UAZXmCXd58t4P8SKcicg3F7fTNd7HvPLDd",
  "key29": "5RHPZyqqo8UJXeppBCv1we2BziZNQDV74nAVcvCs1PuAZDyV5CABoaWN7rdNKEAZ7iFtNMUBpjntgfwrKVyPD65F",
  "key30": "5J65hXnyKJeEJEBrKBJkt8xS4HMc71UrTFGESHUXHzGHBSsZ8UmjLbNzkE4GKJreR2DzpXz9kgcioBYifvvJE3gE",
  "key31": "2RnG77v6YFLKHqku7ugeuPHkqJc1TH1rGjhcfiS7YQopKmxo75FMiP8y2phx2VQnan92gMvs4wsWYDu1QF9tMuW6",
  "key32": "Fx1euyiCoGxUhKg47WNEs2bqzh3UyAfVTe5aaXZoDoRizstpEA7GtxRtpikwfESgr8xaUFgufy28WJqfh1LnFZA",
  "key33": "35UjXc4FgDAWSZMYzPWoYUXPztdVzS9RGKCpSWcFZyWJFYJ8ctP9AbqhzvNUDqqiEqtquX4eRcgGK8bLZQyC9XHn",
  "key34": "4DwboNC3MT2T7d7pEkpro7bovSayhf7jVwrwbnUFyV7EESPMQ48c9hb6Qr3Yv3LDRzaX5hc3xjdTdEogqPzFYoz4",
  "key35": "4PPG1yzCeVESdpzL2dsqRdJPX2viPQQXDt8qQEaLChm2jF3EXtqs5BVZnWHFnJRPjxvFRqZEkqL1vionHNjccFU4",
  "key36": "4w9yKXDjgacp9ShFJqw43dVAbYeyXmQm2XQ9k6vM7yNrjouiqshig1BvATB7qQDjyrPBob5hWmkWCgLHPZKhwn1r",
  "key37": "2hFHeG1i2i4GYnwGJ8hq6aYdGbbjcxj6mNnMsXJDj4Kh7PTTrgp4PGo74YLk4weEKQRvKdAyD8wETtzvUeGnwLJU",
  "key38": "uBUptv7nDNeP3qxtpuKZJ5tVgBUi99xq5EGFiTDni2ScKjmKKppob1Q1e8a8N6dT1qJsyPQKRzUgko1C4eb4d38",
  "key39": "3fsJHYy3i1ayL6zpJNMuL8Zw5rMCnUBC5p5sXeaT2uegWgBWsKaqBCyPQ3rW34t5K26qhXwYNKYTKp56CBRBeW8o",
  "key40": "4Bw5TpPKex5QjTSCXKdsZtDV2bCwbYqZJ5D9SG9tLmV2NWYb9QSUphC2zXgcYpSbw3FZeqCEhTeShGdW7W5h3fAB",
  "key41": "mr2PgMpisJFGGneVPfNR9yhZ7JQkDvzj3ZGHz5Tb4pYryvxRza5DLE5XU9ZMJ47u3SpJj9UbxHCPEwKBFX41njU",
  "key42": "2sfxJ771MQFZdyZoR8fW8G3cJsMqLMVmcTRwjSaSyAFipdiE2EXMp1Rpszik6d15ALLh4qCUXub9QKK5nb4oAQ4Q",
  "key43": "5QnBzcvP1ryyYF9K48D1ctvFr7HDNTKZ8gqduBNau6Eo4XpayAQEj44PDGtth8q5UpGAirEeSLCJYx47eKzgsyZ4",
  "key44": "32GgVJ1Ez4hW2uMK78HeRGcyFQWaNp7kARX2vkVwsqfZMcRXztpfuY4t4E7vwTR3888UW1TUHUNTifsbqrXkK8X4",
  "key45": "3gXmMSqDNPS3kSRMUGyFxd2Jj2c8E7EF1kmusyHu5dRfQyk2ibZW1rGR2TFNiQSnkVDjtiZhhtumPe3eTpNnJjpE",
  "key46": "3YCWeS15XbUUZ5wtpjS5fwL2zhbXQUeT5zsddkn6k9BKUZFH6RwyPAqwLdZr7UwTY4T45F3ffdxYEojrLXQK1vtn",
  "key47": "wa5QMoeFxed2aNkre39qsCw63RYFD3o6eqx7SGaL6WUovYdNKCJMAJb97SgqKa97hFKtvDTUX18b21mnTU3DYZo",
  "key48": "SafonHRumBEGuiEaBkoYXnN3xSMgJfXEyKp9jpKWC4xJptVSipaT5o7pN9LLNnUdNvGfaq22wDUoMkHJQXPoMHx"
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
