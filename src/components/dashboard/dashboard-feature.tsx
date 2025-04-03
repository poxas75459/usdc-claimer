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
    "vcg291wckjvvBgPR4f5zMnoXpMq7kx43uVWg9s2zvz6uH3Y8iULtcrh9G9sL5qiaVmZGQo4BxC8fTQ8nXpvmN6w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Tn4m9PnoVPd6HHbyE6N3gr591ViCTL8rJnX8rggw7wcwGtfqMSGPnTe4YxMteCc1d7pU5A1v1auK3nNzjbvUWmX",
  "key1": "3qsB7uLXqG4f14fCkMKtC5MS3dFXA6vZMrzRceXJVCui54dMifTEp2sk8Fcy5apKKSrrGZR4sNCqo13Qt66PkhJ9",
  "key2": "GmtMpXh4Nr14wuDRjyUk3sJBdMcCYzGd1wkdXGyeBvNsFUdRTaCkdzoZkmoLWqQZXbJS6YVhy53UgM9hMbqwkdZ",
  "key3": "3dPWWBMBFsNuLdd84tHy6Urn2qcwmv42S4eU1Abftys1gMjsz7CjnKfbpQkuar7h6HKKr16xpuHvczZB8SCojgSr",
  "key4": "3TTXmBwXrUexc6yB9VP79K6aTARhoPoKhjNffAq5HzDArDE8BUvwdHaMnLJmcj3TvKY9wsnD2CWvemDNxe71Sqwx",
  "key5": "4gC66Gk635j3ET1KfLTNaeSasonPP1z1kibmxvysJESqXsj497NGnJ7zjnXURDE9cx5SWH3ug6h1PBwby3PDMhXV",
  "key6": "32QYK3pgSwwRMoeXRVnbbwxbwETka87ZhLX1MsJJhgh9GE2HL5BJco4jHqkmhNyTf3y1CnAocj1rRP86ALs6TkP7",
  "key7": "5WwM4hDDusstpVpMrCAf78zeJ3DcTerqWMrVqRPsLzsYkxmLpuoe2QaxtPqMGZZ33DG9G9rPyjGWJxaqjBmN4CUi",
  "key8": "zNRch1qDRkHpDjSRz2uoyN8rrozUvnxENGUJGQffSdSfAq6xqrUpo6WttJUWxptUjcLBZoEGcGKFxtt84RjmD46",
  "key9": "2Xvgs5Gna98vAdRk3BXFfQz1LjLd1zWaQ7iYgNUNT6xB6EEa2Aq4FHH4xhTUeHW78uN9KhMoMEDmjE2sdoyBbeGE",
  "key10": "5QdMRB5WdXXB9Kdg4fzjrRVJa8JAfQHiEMsJ2XJk7xQz2pUZ5MBkz61YUbqeWgKAdoLZFNyuezce16TnXgjbAMFj",
  "key11": "4HiUcACxHJFXLxCFob4dcV8Pa77qvRkudK3HYYL5epBPPnhrPxQZxnk8QQsVtn8yBgeWD5gm8DdsSV6jvdmnoZap",
  "key12": "KG7rEBpeErVsK11QgKagbTwghGi16FKF79eUsEujCjMkV4ujn5cLcGSAMmJcGUsR1S4zdoFAPgsCBfVfrqk4Kgb",
  "key13": "2FeAVSeHSdmZwo1PhyL5kycZZWwHs4oNbV7cFrAepbuNEmRf5an9CUHZbXeSsJjbrszBoQKa4gnC8BevBuHDi4k6",
  "key14": "24KrPmr6KxT3TGxAqqdWQHjrBMHFe4sqvK6aGuMNaK3Gf9NeJY9BxxscjNQp5ATCrnGJzS5qrkgRgn1M21e9siXg",
  "key15": "5H7MBV2KrwHCsaU6ycLpsEfKM7FQzjXGJK8xDM4QUMXoJ5nbukXZqdydcR4RRJTh7Z7dneiAeotiiAyzoPk5bCLY",
  "key16": "4aaAuWMXSVc1xqBhEUAbWP8FKGKsDhQeBLP8hPNAyz7xTCs4aN5xoj7hgNkv3RSGVdvf83txvfj1sGuKNgc8G5nN",
  "key17": "4m2gtQxRSDTMPEmBXkmfvY3UAyiYiabbdPhnYeFinpnRkCWifTWLie7w6Lsfp5euiSEWJK1aZ3ywsdZfKip4bQrN",
  "key18": "5LPyRDhAzqhttnndQVNtbtiMEg49nyNsUs4pFwyNKT8t9kT6Mcbb1Lm41swQe4GHoW5wbeqXe5JeJuVK2FKmLQYo",
  "key19": "VQDWyfEw5VtQ8qJKdoLBhTpsjgnRMzwQv7gya1XtmERwea22oshM9YCu4BzGtif9TiabTDeAMcSnZyuxtS4X6tG",
  "key20": "KYYFnfshHoXzaUjK86byHaF9azmBgurqiJaMh3R42QG4CPgLNANmrndgBnrhyDUxB6QGfwiwYmTKxGCF7nDjUn9",
  "key21": "2E7JhVRyR79Y2i44hr1JdPb2y5rBgX3LF7XfRta4vmtFL3jWrwQfVNDMfEyKWLYq2fwQ3bWyoBSsjigM2yvCqDX4",
  "key22": "Te1a3T1UPwWyV2ccHKGwnL9BvXP2tEJRLvPvb66BWxdd5eAR8gQoronAJNyEtrLTCuYGCi6gjPirStLMR1zqbES",
  "key23": "5zdATJiQEGRnCNPW56H3ey2rXNjdwKDpg6HUhQ6tNC32fSqmqCb7ZSfDHM2ozJicpLNjheQMJHwfYoA9XorAk6SF",
  "key24": "3MCYCDXrTUPrTtP4L33ykLr8pEis2ECc4MxgGE54amVk12YgwVM6G3V3Xc7nFmgzTMEYLdeRR623MEBf2C8aV4Er",
  "key25": "4FhqXGyeazRj9Ro7wqCEZKsRjJDCPT7CWQRyePeCLfN7Nrq1192CiqbH3zb5ciLxZnpZLGncvzd2m2F2mySxtfcm",
  "key26": "BzKSgLCZoCJ7KAz2HucdCzJ7XhDt3x19VLybo5pLtF9yj1ugMgANQVeJpRMkxHDmmZMiRRuoHqzdf1KPGKn2swG",
  "key27": "2YNJmVjKi1gvVGzqxDAsH8cUiZXtDzVTDd7EtDovc7xfGimvbPMrkGakx2vsjTE2HMiYkEVTLziDjJWX64RFx41A",
  "key28": "3txcjrpr3fiyA6xiK6FDv2nc6yp8ZVrk8uVZiBzAaKB8k8SvJbhRqPEchW7VLki3VXe1m6nLaVbyUaJxgABF3sMr",
  "key29": "37CBNUH7sQChozAPACJ2LZuEtfhQkyjLzyHiLfqg1n9Efvx2sdyimed9iedMSyDqFd9W5oqLV5nNhthcKEBrJXZn",
  "key30": "5iwQHBQJdGedPx5gMmENpo1t9XesceABFJ5phsgJrGNH7jySyNcqFzdwDFtQhR8wiDER9srVd43tSBtNBHMu6cEi",
  "key31": "2zX9M8FtL8gxTWA2RjgLuy7dNSApj1VC75LxZPmuYV9eRKMW6js5iMo36mc7C6wAaovpReyEC6mkmsqKEe26uTFD",
  "key32": "3pqUZjArLf93iBG46bhX4zX3R5hapVBmQJF3p2ymEEBh5rwvNAaqjEmoCCbyoo9pNBnNTApkawX2wpH4sjGxWTmw",
  "key33": "2rCrt5Yy65skjLaYWHb1AWgKbtqJTU1vPokBK8Fbh6cRdj9aRu1ekW642YjHLyVVQSH5xavzuZCuQFag6CLYvVno",
  "key34": "4j7TFZr43x2yBHRuHPTqLSZ9TP5hhDTEmztwMHmw5qpYreuYM19zCudy4ZGn17Q1FM1XZh9hrMTPHc5Jy4iKmcM2",
  "key35": "2p5SNrjUUKtsKY9UsuZ3VAiX61K1Je9omeEQxwRwdbA2SG3DntqH6mzXcJ22tfm1uaLS5sWwdHDX6NzdDbfYofQ6",
  "key36": "2kLqxYEYTKMEexSWYGV3ry76mJoR1krXvLjBk4Xoki9YRTQRUeR3xnRB7TQNMxVcM4yEVJbNYxXusnUMukuffHFv",
  "key37": "4oQTVxD1sw167fAmyMThmtp6TfbuhM512Fc1bmtzoqqcQCbm3BFNfeiV1J5bVa73qoAEBdS6BSxHUePkz6LG4717",
  "key38": "2nE2SPneAPFM4dEjVwm7fLy7Gic6ZfA7PCKpTsA1MibTdg4UBn43iqx6pUcNew6FjnRrvVQbAEiRJuQwWo3RANVz",
  "key39": "K9FkGHWENgrny1yLvyvsGZHsZfq9aSfzHFeoVdRnKQuZvsjvVnRKJN6asE83P24WWqsFxDD2x5NVupXhAQUjZwX",
  "key40": "4YHjewMHbWwxnkU1nb6RupMypUWdefpTh3rJhk2ntwthVuWDPXt9RNJHhTYqVmYynkBG7G5TS2b8vUD2Zo5FvNjz",
  "key41": "5hcnkH5zyUhkLpr5nTrXSNPntzryCbDizcFTENGo1Dago1FLmXBXWFtN7rg87RhtwpKiFPy9gQP5abGP2xNJKusq",
  "key42": "35zc1pxeSYKJ46nxkpgXKfWtgweEWrPh7qwJAxwdyaBuqAeiw9myxtrU4RSRiRRqjyNETAtKcSFMstU1LodRZpbV",
  "key43": "5rHpoQujNKsTnrbaQVeEPJRnMm7BWZ34swwaQWJ9nVMznpWBUsVuPutC4aFgiAerCv9d2e59DPrnRmrhFJ1UfoPt",
  "key44": "3McebW4cyQGbQj6FHqxycvHqL8e24gPCZsdVX2yv22P3LY7A9CJ2voNoCKRF27pzvz8r3S4dhF9Uj9QbVkrvL7GG"
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
