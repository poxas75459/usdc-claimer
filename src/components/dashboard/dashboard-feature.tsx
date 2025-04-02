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
    "3GZCcJq77h4VSVUmwy8gDLw8tbo6j7YrgWFRajwjaDVMBNSP7F3wNvWHwu2m7dM5GB3YBPw9kwQdq1gVjEgxKvxi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qgzb4TWPXG78LsXE2aDouf4DCp8Ygm4d19Zw9cd9kdpYPoGfLwW5qQpAYpSmH57ERJx2M94hafZnmbwBpYPGZjq",
  "key1": "2d3AbjrKtJS3caXtdZGG38CjBNoGXrdzgpMRaJka9r1MoqPBXowKAvqeugXTqKX79HeRX3BKW6TY636XMRqXnuH4",
  "key2": "4ysDepexVtJGEMzzqVC7BnQqpzELYf8AdkGo5qGSjwEZztPfNkGfDbzwoKcF163ft5t8UaUr22WkKD6bGPfFi73i",
  "key3": "7b8YFQwiBiYUbHwN5NBeiov6F3dLJ53ShvvvuvxhhmNLfcmzjRqgPBqJpMbANyauBL4fFjuFmgwTBv8Tj7PYhRS",
  "key4": "DwWaU9CQebp1adMq1LuQngv2zcmsS983P7nVbh4ruRsPTwrKcoxHHbzBSZaoGDM7SyqA8HLasPaDhrjbiHaqjDC",
  "key5": "5mxqeuxR1fN3HQXv5V8G7yET6DbkpuVU4QdMP6LmQvxA7hBG7fTjyPEvZNbNFxgDFAzmYRxteLRM9YETYDehpNvv",
  "key6": "2fGG27Tv8wB4dEgARsnKPBm2wVuPxLKwCy9wPzc5XxwGYHYEmaoFL9zh5n4h8gwznGVKHbHKxozvvHp2s7C6i6VX",
  "key7": "BGLUoN9bPVu437p9BgbUVtnryH1qg7tH898yhm5oboPtn93zfwFo9biaLUgPAi3M3YQMWbyrV8Tj6RjAYT9thqN",
  "key8": "2YasavZY17pHadxsY1MwefKrXrjZakW4fiN4noDngis97ghHbW7afdsfp2ro9P2n7q49x6Pbq6mJBRK8tWfG9CxW",
  "key9": "5Y9L5XkRi468LxJaW4EN7Z586ZZ2AwZFWcVsiHR3RDDJiyJgrChp4QYiav6PuKuBhebJvLEsXA1GzzZ5BKNwbQN5",
  "key10": "zDJ5mQ7vY6wWYtnMS28R3bpfVCT6yXrLWg3VCn1uY1uU64uFL7mSt1YHngWYxsGPudgPJp3wA6NswbyeVjCe8Vw",
  "key11": "4j6fhtzVoSy6Wg85xy3TQTLaingJt3Di6nCtA6MppjLLWzX2p4Z48NhyEbg3mQsfXtUjmBCYY8mZnEfMEKBE1CoH",
  "key12": "2mRK3KHDJMwB2vg7C2EBs7ShGa6qQJcfPtgEZ6UQt29XXnCtj3GNYJTUA8Ai4mnjqCxt9sUtHqDB2fUXBncyj3Cy",
  "key13": "3LkesWp7nsBbTUDBPiDCEAgLfBRFSxiLwBndvqTrp2XmrZszxqhSy4AmXWEaSFuyrKfRWi9X1NwmvbA184yHVqgo",
  "key14": "2Xizcg2Ayo9Ug3zSoh9Bu2ZgCcBehRLwjKySbe9vGhRjD9oPreFpyxs5m3xuqfj7iZCv9xK7mFy8MTpkDmG6aR4E",
  "key15": "5Ky6Cs4VWTus8wV8y8NC9zwXc8YXK3AT1ShKyoRGSo8TJaR592dc7h1LcXsuPFi4yWTRbADKxj9HKLcskjBuHKsA",
  "key16": "2jz9qccDm1GeKHC9pmEspzQBveHFatYCwuWDyE9MXfm5tja4zUdfnPV9yZH2o3BWrLFrhsqLAdEv5KDYnrctNx4t",
  "key17": "3qsR6adF1HYL66z3FZoPYHaZkn3mVREKUaP6WH2hLaLjUCtjKtJhSCJkzu8da6pg38hcLVN4d1GWVHhKvcErSr6",
  "key18": "5pQ9BZAGhVBY6k8vCRiewFufs1fF6NyV5HJqykpxPwKJS16TEJS1UvDoWk7vEDCLRScQwNeZFxmLe2FNj9nVac5k",
  "key19": "5pDtLboPjU4VVkDzmQcUySTorVUEpj1mmeY2P3f66YNVfhJJiy98YVad8yWQQAxVWXSa5bRfmAAWe1jEQWE6xA3U",
  "key20": "R4ktPD2DDboDxG721W6sfuVaXchtUy4gmgFguYmZKHM7zd9EPUJzLLTcPcEr1Nk5ChAevbEPT69NZRyhAHEDMrG",
  "key21": "UE9pUAeByRsYL2EiqFF3U21g9nzKSXYJSbAkmt2bCQcTWHYuhAYhZcHMtNGpgWeN978Z4kzrUd2cPmfB6xa3eRm",
  "key22": "4HT96tenbWrRZFPCWQsnz5AmGPExif66g9up1AhBqtuSi5oeDaWVyYrHF8kmfr6PR9fmYUfKjkLYC9KTo7Y7TCeU",
  "key23": "374enEpq953NejBBS8NkA6oPw6v4AnxTt8J8LFvN6WNEMVq2A3dcrA2pgNNFsumJsGXZjLCHF7M19JDbntxKK8LJ",
  "key24": "3m4gDeJStdfwu2judxBuJRUDeD6CjtRSE6LSZHGkaP6yFNALtjCHSptn5xfo5suE8EZ5kGBeXWjWK5ieaP3FMF3f",
  "key25": "3sqjYWu86w3N1sUvH1xDVcoieVPdEJvVgifAfdRf3ZVmjPXJBrtBR9fzGag7WxMX3WbaTpWc9fdsLVrTMcw2thym",
  "key26": "4xGHrTFtmxYH6ywUYKQFrVgrofantCmcSkMh4cDRPJj2sCKnG7ayo7i6X2BeMaJHH4ZW5LCFbjjCJQxkbotAZnFa",
  "key27": "2HCvqGPDqKxwjMVjrxY2LWkeJYZLqdm3pJdZ7bXfci51hZKZc55SoUMM3iFytjRrr2JCvaTPQ8cT4d9NoKzZuDBB",
  "key28": "2Sm7jGUBH79pQ4b5sZncG4CgRow9JjxMRPYVWUebjveBX6MQjpuG6bZ3iqsDDvVD3Uyid6X2sRYCRcwdUvU9FULE",
  "key29": "5PHjhqWsXwDG4GdThYvSaxgTjw49uXrgprmhLfuyavquEhHygqTh1YZDqCd5C3VoazMggEJHMDCBk1kJfbma5EG5",
  "key30": "dobUWiJvDDvQBRFM8WBXdj9aJH7T4a8ewhBSahJQfvTNa2pY4YN1pFTF8gS2sbKSwg6fsaEQpSa4eDUqFEthrb3",
  "key31": "5d9xeCHK73FX7BKTzDb7rrAB8146TDFwKd8e7g1WjWfE5BJf4hcpZyt5PtvSTQ62PoXie76bSHTpcBHFb2QudNma",
  "key32": "31qkKDEuC4XRCK8pGXXsfxgh9n4y1RWGKL6pXyww2A8Er8hjigp15zZ3nm74qCGyGt2fU3k8kX7kAVThegTzy1vK",
  "key33": "CcqvBdRBskN4z66KEc98AS4F1rA6usgCD91Aprfpd4SVKYUutPeqQj5svoT6vdk3YLcCc1Art3z5KcjQj6eXjhp",
  "key34": "9KWr16jar1YzBwnAtjWbDNb7HP3tw5GxUru12KHZisEpBHCkPZ523poakJeSoSHr5raVxH8ETzovPqc9A7Z1mdW",
  "key35": "4EfbyUmY81jWSaSrGGkFhqeMnKhpcQc9NUoSM2GgrCRexW2zBHHEgDo1dbzTSLThvpJcx8pJLUrFxh2mgtmoQXRR",
  "key36": "63wTJGoMBqMmsgi4bnucmkKeHdPKoLjnZ6aaEi45rUXvr1f4iNPNdWEWtQgz2DbSTzYpNqrFjWik1yyJRmfXFrTf",
  "key37": "3mTSduqazp1X3szBczMuDTWEwi5JmYjEqvehKSNbhjfLeFTLeciwt6mq526iSrNE4DHdyvkPx5VP7M5ezJFfX55n",
  "key38": "wG8b8uhfuhvui9a7r31XHyDmXrmY832HRNJ5n7UMZaBzMALU2Pf2HfHwWSdkR1FJguphtzVzYgCLCwxMVs86gbH",
  "key39": "5FpmjtaQ1UrDDbrBXBSVxweLEqU11hM12hkTkiZvwyWEV6GV3E8Q9zhKiHK91DVFgpZdRweRV54r7tXad8gSFFa9",
  "key40": "3zraSLx7DXMGaNLwVDoedgarhbMYq6AFiXZFZ1z22ETXeMkScCVNRaA23GqFVGatoq6LDZLkwhTe3JdWhKRZvig9",
  "key41": "4Pbtwhv78scHb88BreLvEiNB8swwoZvJcL8ZKjmfCrtG531mB2mtnobYRjkKxHvTDQiN3Eepd4AgSevQWJ8SnRuZ",
  "key42": "5yiBmJr6vymVYc9FFP5dGLqYL2VgUfSZ3UDtdNyyMjZwZmY5dr8cFvQyosD6kpfJXh19d9Jkkr7uTJd12R1kSeKp",
  "key43": "4CNPk8KfxHTenwUGNCKD2Yss2hFPQi2deTnc51VNjaxL1HsoQaUA2kuppA3RojzVWAMUsKr11Kemd2bqrE5sGSsG"
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
