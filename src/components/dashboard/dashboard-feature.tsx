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
    "55mQhfJqTHP6A8nuHKRpb3zUhRv4pMZxcTYruaiE1TEATh9W3k4cAkMrog9GvxTfGLr8smWvXXN1KB2BTs2NVN6F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xznsgs3YtwSMD86rfsgduf6kgPdjdB6Yxw4fFTPjhfrSWh18GH6fxUTAnRgiE5zD6m7MHCFfoGtXdwPiCpJug4r",
  "key1": "5xGc7eRFHDrBAyjusTLmQk1ukAB8wpqNJXyzchdprr1b26XdKFCbdxVVRRWsBcGdkhfYDfbcP4UB4p3eKpC1vXQ6",
  "key2": "28skWzWK8WyavVbWXgv9tVBfy9XYV5zSQgXqBcsLUM3VWRWNLncWfZZtK9gzQQk7gT5tXPC8tQ5bN5eaKBBeSPGR",
  "key3": "4VQNJzhYZsry7mU1MD8qMFcsxjaYQk3EmGa47BS1aUkM9ZuWQ7FDAwzepTJ3HaPPD66tLwpX7SDSrmBKfyaVBgSG",
  "key4": "3VdKEqYB4P7BepchotJTR8sjjr8UEkA4H7CLpKzyvve5aGCYkMNKsvFqkNjGKKGmKcAtkTFT1dd4v8w7WA7eRNSR",
  "key5": "5ZP2VHW3KumAWhXZVA1nus2ThrYkAn2cW2JwjWb7mevzLMh6Q2bzx4tNNtXiiDawcZgFk8BgRzvTuyDNSdvvpVic",
  "key6": "41BEMJK6KSrsbuSHrHk75Rmp7Eb6X3K4EhdcpJ8tSFH1NxCoD42621C3UkePqCbGyFx1SEnFuLwcm4efJHYWSt32",
  "key7": "54fZ7sKKeUsjgwtYqYTJdAm69EjqxakitcxHnpbU575KpJisFdPd3D29PV1g8N3nHetX99bGiHs8zcdxKqeF6nak",
  "key8": "4cFisrzxCTVj9WSsTMaVh9SJuoeGAqBAwtxnHcr1mADpb1AJrys6Nz8r2zedJnLEbyNViyvjsBxbio3f5VNFjG3k",
  "key9": "4dwC8dR1rZ3axkKWNzastSgy7XC4t4VkbcZ8QNYggZFnxQKxSwVPWsqZyg85AipShJSvXUw7FCmpZMJNHQy29iTc",
  "key10": "2DyTgD9EnHYA1rCUR3Py68r27BVLdrqeXEvwEszAU6LLT2aoWcfE9z6XZhzcHeWX83irCmu52wwEbVBJAvJto9tT",
  "key11": "4TKDGaqgKSTtyQ4Yy5KuVqxDun5C2hoj294vPAnwnqfGWeRtPwRxPeWYmuLwR82NGbXrBAwKjDAHak3AcNSUzjhp",
  "key12": "2iN9TvQTjN9epNRQ6niPFEL2WEAmveSqJCs8wVkng8tB4zktRcDgG9ZsTMoPhWJ7oBkdGXETCyPzEiuq6Y91s2pW",
  "key13": "2y2SF1jskiPpJjiVe4CjDeiMstoyYu98yFdPUuLKcNEsDBLCuCb7EfL22wbpe93YBpsE9AGqAvAD11HcFUoowuwM",
  "key14": "3AFmrEPKixML3WGw6J8QiUECoMpogoDMk2SjjSLv14AFfxzLjAMi9bVsLFUZvG2JPMiNLnCMPBrqCUGnzGbEGBaf",
  "key15": "4ubgWUV89QBfNeJPiTiwHib1e79wUzAJQ9pLjhUxhEqhxrB8St5xPx188E9ep5wtX1eXTfh6y1PWkYfB26MwHoq9",
  "key16": "42uLi3uNXWA83Pg6ccQ93FRq8NZWTN84jpo1b4cL6Z8uzA4n13GkdWdmH5JZXhuAoQ9k8bqQ3w1JHxPnuo9rLMSX",
  "key17": "V2Dkv3r4qmCZ87u1tsrokPSMTHbuQw24wgjpu6pL3ggsAZQtA7daxnbuwxwQqFDWGDUUfGg5CbVncnWqxxDgijX",
  "key18": "4WJ9hx5NnYqNw5G9ip1CYcdoeCiLCoDQNNMpH8i2RmFXkDU2xeAsuah7besYfkhK1FFr4pAMxRyvz8n6T6C7UpB5",
  "key19": "3862St8u8RY2hr2H2j5dNB8mwGNk8TPTweWx3i4g534X8MtF1ZtRTb86E8P4t5uq3pCZsneZNHeDzq4tMs1pN2zY",
  "key20": "5mFhnhaqzHkwARoERX2NAxL9YPKM1XxtcLhy8aaoW7UenBWUtgdyapXKwdHiw8FirQDZ6MERo38bp4uTpiwDeHwQ",
  "key21": "4q2jVvpoLdosbPqg7uxPaqtU5AbCGxyTtmrBDHzUFazKpQ8CFYv8KDPtCKBicQb3tprXWuGkQybBiot8ncVt1XJ5",
  "key22": "bFRKPbZRyYqBZJzpFatnGGRxCnxaKxWtWsNL9DciSMe4YcFjApZYA9DUtUH1EkbZ4Kadb38P4sCMHR8bzpnB5Xe",
  "key23": "5p7aVbkvahs1w7RjcZrPuaYrUzhNfcgUmdSwfWFJFhifJmzeU7RjFneL8A4UqNZFCy8WnHSGkp3sECNiEqBXjMLr",
  "key24": "6tWotuycnhpbmuNV2nwBKNx9X3igSGXPFiLuudrTaHJXZnVifdzoR29gdBaYDUg9aNzi2riofJe6U6F94Z2x2WG",
  "key25": "V3fS83f8ubV2q7GkExzZyTqtJzQWG3euK3tGbX9s7HVGHqhTvnEw1pm2LQoSDZ2U9hCG2gubYaPGSC8uoaHqH8t",
  "key26": "48PhwVpzvWaffDvfG3Z5V1oQVLSK9sYB3RMXNz1wbmfuWrq2GWxDrM3Lp1xMf51bEuHoao9XnGNuXZsfTYEiP9EQ",
  "key27": "3kiBVRHDmW8XiwotNkJxBHtkc1rWsDJVqdsMpcy2Zx8L4ifwysK5n837nCPZEqZ5Tfo7F1jaPvD1QCP9of7s9PyB",
  "key28": "3HAyaBrbjx18pWSCjh4ZDFMZgbvkSmunajXt995J1eMXwLLvoC2kZBM3q9WZ1dGzSapLasdHjMvLz6E5rRpFPWWk",
  "key29": "4D799XtQVAbZaGbvCLR6UoqaXHMWvekBiLJRtxh5rdhL6iMBDYXF9QBxTbiByiVMKZhnm2wRmqmAB5s6UuNST2oX",
  "key30": "Ft1tm3Tv78EB383H3R5TJvPRi58EHRkLDTmWd945ew115z4DQZnnzDiXNhPECBhFVXoPTCNroyK31MxMkQ7cVKM",
  "key31": "5VZTS2zPffiucvPfj31CDLGf1jDCf2yJzYpLrV8WUDm6w6sK7C6JbTqxiz2nBVYvveQhfzAyq6BrSYrw1T2zC33n",
  "key32": "5Ej2cPgdco9zW9F638Xfq9DphaqTFBWDqj4822S5SbJhzKxKFfKtKtX47sxzkvxAoWEyeVJ3fJajDkpJ1jMo2jtb",
  "key33": "4hXyJujCt1UssWvB6Se2cLJvNdDrua8rN2wNFRDmCqUmf15UaFQEwXok2CFQv1o3Eni2WeC8UUC3ewjBV82Qm12V",
  "key34": "53qm1TScpjcUfooUL56xK8EACMg4XBuwFaX2WD1XeVNsgr2rePVneXHkFwiTEGhhd5R5f8i2sn5oZB332dMBJPMY",
  "key35": "iEhGjuzDAGyKdyRcxq1622LTAdiY6BGwgEoyTwWNwq6cMY5re9HFNsSUx2NPBRqocrnWjVMxzkz18zHKHgfVAkq",
  "key36": "2ipgdGuRqFhUGXQ3jViH1d9XQGfmugk7j1iSYAm29n4kbGyKUHv5Twdn1kVTuxF9Vbj4XBSwCBUbkK866GZw64oo",
  "key37": "2dWPUHjnQrCHnpe82BgpTQr8TiDuThkvsakZmNWDC6C66xXKpcAQyBQWNzxjGevWbVgysh89weVg2TmrayRhAQPx",
  "key38": "3E997dfhDeAqQaV1edsqCJttTX4fhchjTopaKMAedpDYR2GJ4iYw5Z4dCfJ2adbsQ7SG8P213LQa1PyPcSwwNoqU",
  "key39": "5WWH7BYuLa1m46zebdAx4BTEU85BAXthjMprTXVpPvYXzxKyxjK7B9sKytjgUz5eBLiLriusATL8RKyNMcZwP94X",
  "key40": "2D2Mz9g6E3G9V3r3ZC6568S7YNfaS7LRLejNt85ww9TP48NvkPjyTusdyq5EoboFfYakybcWnqauB3HPZUnhZgcc",
  "key41": "N8vdXFftrUSsxBCUTu9m63rVCMocbFTXSv2C3UttEduQt4TD8LoYe17P5bH88mhxkvHxAXa6FtBiLyhsZ4jzaHG",
  "key42": "UYZ9kjsjE1PvYwcUGCNni6F9c5sozvH74zww8Yq7A6YB3UoGd4gfgRrdMqfvW6CYhkEktogyUP5dkH3tsrwVMBV",
  "key43": "4cdDW6cZjTkLFcRg24dCMQBjmfuY14d1XoFymugSDYuEd1wmcU5Yp4zrHj5htexK3kigbBesYdYSR8s59KYLpVH4",
  "key44": "4BS99tmnedWAe958dbBMzyHZDu9HEQLsJriRyoGG42BfswbhowgRJCAnazgKP3M4Kw6XBXTWDiNgHkusYi6xZRfY",
  "key45": "Cz52RRgNoNcive92H9z5Je9ofWxbyPtcWDsXCtZzvtGfeeFjJ1pZfXK2gXKWXqHCTc2mygAU26eFzC1mpts4HMS",
  "key46": "XAYyfq1AyVpiREsPZtCh7MD7CmE5CksRkazAJcEn8yCtP5fCCh61g7RDWnoVtxb5u65JBL6CA6FCXF6sX1ddZMk",
  "key47": "3kngFXBdr8z2Qt3eeYXEUVXCwVMe2Vh7Au2xsyWKu3weEzbyYfePQbLU64S7PCX55d3RSE94D2FicjJ3TjJNBeEs",
  "key48": "3ZUNs3kGsxrENAv1zLUB1t3zfHhrqBT8gMJGKAfRR1SsA3vbP1wH7wuotRaERMG9ZkqRguyPVc4a4GYVbRQcMCE8"
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
