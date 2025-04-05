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
    "mcn3ri3QVszqXmCip9mqEL7h22ZubHqvpv6RzfuH6P2PED8JwkRDpwcsAZkuwwuvyJRpHTp1u1ZrKG2hCVmwawf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yTwYvzH6RcDnfR9n1s7nVaEUDba6fCeGbTWgjzAhZ42rU9KzKmCkKgh46aoF5SNWMiJ8ZcBibesmD3wp6XrDf84",
  "key1": "4rqyCwfNRqqF8Juv9Z2YrRBeFYaHfgfJVGxD7XWZd5uP75ZqUtJM1yz71xEN6tDMwokNVMk9wCV9rvyQiG6SdxMf",
  "key2": "4q1FkPBg3Tdp9x466JPDYLPsEB2D3oMpBtJxWVptusKes8HSpaLk4rg18nbsbRn4gxrtEi9fqCHdtojRH2YnKnCt",
  "key3": "5sDTf8UpMJ6FbZs94RtENmNNXNbXEeWsDWqZy2hxvp833j1P8Vbh3Dz8KXgjr8rQKJYFuzVpUkUsUjjM6S83tAzV",
  "key4": "48o868ibvoZKvvTCXpfK6CVHt65r2XkZhpnnfRPzcx4v8nC24jwhpDVV42hXVeTGrMknDpvZT5MotJ4EK4yqxB2g",
  "key5": "3UTu9kg5ejBcxCi8xeMZ3PBznkMBWapSs9jxr3Rcvymmyjd51R5Tz5nY9VwZuVz2EJVGGxwD8VJBLHjL9zbDEPoz",
  "key6": "83o6LNKVbMfbiDuHsrbtq2z7SBQBRVcsWn3NTVDGDHFcUWY8Pm25awmoH9bfXMKWNN1bN6MGv1w9yKQhQTnn2ZR",
  "key7": "4UycxRj1vy1MkQxVN5K9yWuEt9ndWgpGBzYEjSyFSHjxYznHqvpZpPLJkum1oLmcTzwAQgPyevhSJGq2Gt3ad5xA",
  "key8": "2gL6xY4ETaow2p5ASeJMTz3c5FVG6CvpGe8vGy31r67B4DKDvRmq7tmnaQqDRYqhi9BvSAN82euC5UniCmB3akya",
  "key9": "46i7WdSNyENnXCp9QUPErUQT62NP445kmPrAQRwCVdPqQWanqCMUKQTH34Svx2SVYVeGicEHcfcokE8HkjFnfxN5",
  "key10": "5cSH4qor3e2k423FNK1G5m6pqL4XaHQBtewmUVqjNfnVBRhWZiqNqffQtGriU62o5uHUNZFoCiKBvjNcpfSp4NgG",
  "key11": "rLkSCtvFJv2cCnJoKPiSgD1BH996F2NCnPUB32L4Uzmu2jNJZrSUaAFEHt2wDpJWkJeuzCNdRfkNNrMmAUKYBZT",
  "key12": "2GdnHrDkfyoPdxmeQgw6YTGdhGr3pPsqXTjdehi4vb8aLHtzBq43YM3JRwdms6YyTvPpLZtgTJq1y9bKiFvma5HB",
  "key13": "53gaRZvFo5kLvW41k21H339jw3aAp8s9aupZjHDoXBRzNQCsxngUw26oqHv2CC7avh2U7HhXMdbQaeCkRiqvu6Jv",
  "key14": "21vimW3fqn65d1xKcns2oD5RtkMvQgv8BrNgSfsrViQXUVkaNGPF3zqmfLGGdPXKp4g4ZSRvmrSev7J5zzYXdAwx",
  "key15": "3wpYnd4oAx64i7msMRZH9tqnXyj4UuUk8TTK6WL9p6rxG9D8SB8WKn81F9WgygFRgjcQfWGeLxUYi5FfL7JGoXiH",
  "key16": "4c8RUGPFCBccVwc6Z873BuAyzd6ijYmUKTDYMkpHoAKEuDqGz4SfwMn53Ztmo7yVKkuPugQdo6vBVjxJDUUEg7Fi",
  "key17": "55SiPag72jQY6XAQDDAVnyEuopX24buk5TmAqSwbcvSuH5t3vNxq8owBmvHbCE8bJGHwDF5VgL2TsaREUWVssKAn",
  "key18": "5nQvMJeyKjSzzrBurPhMncxSXCbJcemJEaM5ssXFufyhwQNLVJCSGrY7AwkJYDFP7hCx8jNtmA4hnwc2TJrCbddx",
  "key19": "2nsfTBx21Pipg3unePAYQDEQ1d3qdveU14Kk4Dw32ZFhgXLmD7HUa8YQBNDAJAkFwuNp2Y4fGPPod8vroY6xsk74",
  "key20": "26zbxGNwN9gtEG39GqkzwAytf7h8ssbi2mRWjRQyzJLjCWUzfbzgT1uzqU9ESusSg675kWzwDCpwpVifTEMQswRk",
  "key21": "5kqpydqXhbcZbdUM2rjrgM2WUiZBJNb8ExQu5efzXtAVmghhYJpirKLqHcniELp7rT4H14UK8gsFmgVAa2ahhmzf",
  "key22": "3tdy2XXW9gjsMPTDcVkDnJA8aNpdZwE2HafvCxezvkaQ1gbzBxKJ2WXZ9EmmPKb2uzgPZ3ogcPtAcPcQrC6Nuzvv",
  "key23": "29Ae2zbh3cc2vxZ71r9DWgygZ24MDHBAmBLo5gaQYYefue2bMBn7qexHhVJeZ9qpnecwwNqTanvZKrzyHh7Ntdd6",
  "key24": "5t517bDLHxgfksBsHMXtnhcW6LqLi6LukhNB6DhzDU8c5vj6Gg5vFBZrtZTacXufjeK1qPGcKF9CE18SgB9j5Wc6",
  "key25": "2HEgBq5dQ8EED6aav6tdG4uMmystCa4r5AsnA45xRmzsi9Whgc3uwv2bqoXktrFwHQuXptyYbnVL47jRUU42SgLu",
  "key26": "2sx4Cxx8Gc3JqkbysXkw6zsp6k4aZc1hAS596ARAnnzysBa84wBVCj5maYNcF55VA6AVidL4VA35WBfionYXca7w",
  "key27": "dURBSpjiVrajT9EPKZtEuqFn6HFNDGDMhQMSh3Fkv5Mjb4kiptraoAyLT8QrpjSDxLsXQinL5EjM3pd4WAbJ5bV",
  "key28": "5U52ujbVfNERyAxbSXJ9g3WXbxLz7nSZSgamyZmXYU6LsCvtuBqmmcHGNs53ojh1AsroukifdSyeRcdMth5NfAsJ",
  "key29": "2P7siLP4RkLNsiipKriNJUPkMmwabN4BCDWGMM3fM7j3ibw7prWQK9983Mc3tWCi4YcCufvPY4YzdsfNeWJwTRXi",
  "key30": "5bmbxUrgYs75ngCTfDHtF6kqvUpjpePrLjinvYkMysTBZemxFAxaB64S1pTDiTv5Lhr2DkgfHHeEyiuoN3YAvcNA",
  "key31": "dfYHbx74Di2ubJ9AMsii1uZDpzKjCgN3PCQaQxvamZx5Abcuzx8B6kYNpeXij9Dq8E9fkv4kXvP8PkJN3Ujev5s",
  "key32": "kf7bK9aSNqLKKpikfFhDPxnZx3XR5QWXKacCdfAuDWunwnsobLxGKXRVu9hZgjdc2wr4CYZDMW1t9FcwqvUgMKs",
  "key33": "2fAVTpsC7B3k5X4HrhZsJcULz5anktBUvrSFnPdRftq4sBiKva2MKwk6noWLnM2AgLN8xgieT1b4mqg4ZnyDavW4",
  "key34": "Piego9mes5UEdgVUoukVtvkqGce91VAKmruZSyqMs4bHVHzARjdB2PaUTjTMuBLjk7Z7CEk6XRTvNWRDpHY8f4F",
  "key35": "3BWxRdtNFUzkTWbQFLNiriLdjFRW3vyaE77C6uDsyuGnbt8nzq31UoQsC4W9swQ7brPTmEyeawB8s34FWr8nLamL",
  "key36": "5rpaPCUc8uMFahqz4rkQMDqduzuiFRzp9sgV3EcEyZDMqDJJhn4aWX1keXajjTzqPbATadpSxVTXJJSfJdr2WePt",
  "key37": "5UigPsoHA9LXQ8Ckzz7Tm69S5YKzTn7Kugy7qpRzkF3sHWLH1bQktaRL6bZxBoi8p7q86VsSS1Xcdqhg1dTSD5ps",
  "key38": "5ahUVPY6ZhHFBrZcU1ZJFdDxh7aNzdUob6RSjLobzvLFLjyxw9L8pGd19sqjJENVrM4reu1a4s75HfzcMiWaUkAs"
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
