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
    "5n2sYitqsGEY3CMxFQ45VFc2xxEUti9fExAc8yGVixWkNm9Ao1ZsWfALqR1ihXtUkkHm7bp1X2k4Yc3B6M8V6SQh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61dHExjEExDv6qJ8XoCn7FkyZeYcxyLGT99obipAbAYwwmRqHfAeiEy9TkRhnNo1mYhtYbNDTpUycPHsNcxqkLm7",
  "key1": "4i2DXNZf8fniXP6P3y42tH4K2HY3iqajqBJ7yWMCt48AWyHDfLMexjFPE5az3mXiEAynnHetnn4tGBmrcs5pGtgA",
  "key2": "dPBiMYvS5ducMZiwNuvgaZ9Kd9C4CpkoDhBBD7TBXryYFmu7tQC5azorXGedqzsRZiPS4mYB8hZsLv22jBmeS2Q",
  "key3": "5pmfxesPKRDpzNUv6ZteeYWDhomC17h525DnzUy8SuDDsgMmcUPUbkh1gLPgKcif2kocNHJLXHavtXiqwm5d9pyz",
  "key4": "2KvSqZe6vwq3HG7MMuzRAJLxdx9rF1GgvhmW5dgSLaUKv84f15mCLUke7xot18mUfM7Qg18MbqL4N7DyM7f4YMP9",
  "key5": "4yQNf13jZzxCPpaWXhZfoUb3MhrnRTyg2DtnT14mo6tAHPV2614y2wjS7R4nEHpgC8hwG4LYACXmp7eHayiVQcST",
  "key6": "rAJp74HvYpxigMVRtuFsNScdfnyn3pne64dFGFmLFqkwd5UMu6GL6DNkvFH4Ht2fVek9RAfAcjkqFCRwqPFQSpQ",
  "key7": "2XtYfv6ze3f9uKCqqNRrCTQRuv4U9cZwNQcxnXwxMREtfx6Ys2i533er2pPNMyQdYJSXRTd3E9kcbeXpnHz1dkLi",
  "key8": "43YcEQp3jS7rogubkGEtgh6LupsjcFGeirtuWTNj8X4h8wfQnyuno4jYwrJ4w69BtBewhFBm9LVe6VK4qz9DEHUk",
  "key9": "wTU2m3xR5T19oWppb3xXjZrgPtevFginnsBHe6DBpgZjHz5TGbMAphrPYfvJQyEE5rqC6NFfFtEccC9yQmr5uxq",
  "key10": "ivReJwXnqoaXcKqYb2SDRSSRikoH3nVC7z9qerAC28ewzkHjv8fENwMtXTuqk3u6PGq9XCccftSuwGfGGdqaVa7",
  "key11": "4ishG1w1oeDptps5t4cJXbRr8ZdrWLKBd7UDELS1d27g2VzKP3xMEbxRvmcX8y9J1cUp5ez4kbRuakkEhZx1gRHW",
  "key12": "RFya19fmfW63SEfXimZLSsSc4vhowWYjMZmjZ97mkyRUetoCY8X38nQJTDrjKBtzZpvQq1ukjwDJNhSRwNDvN4r",
  "key13": "4sL1YaeYao9J6FooGX4XKtoHCfyebLYdA3wKN7z6Wr4KaRqrZ6bNfTP1ioLyFwFeok9HdyhdqXbKrSt24gKNsXc1",
  "key14": "3adH467k7RqDpetmTJzrKPhm2iHrz3fX4coGAZtqfFBEaVKeQeAAfeCyVdYig9hy8PH421SJ79RNRPnNNKWtuHBY",
  "key15": "5tewjFo4bpiQt8X2UHEgQxPvWu7ST9RbAjeSamhD3DP9pHt2VA3a7gJRvSYHFsnQXZKJu3n5cXQtinFNdZMaJBrf",
  "key16": "eQzknFaRiPsp3MTAABQ5rGSif9s61JexdJgkAGFgwechhJUiTp9mWY5Lnr4JrnNNC9CrMGv5joB6zTqkEQcUgVY",
  "key17": "McbQc7gTy6DoQWYPrMvVL7b6aKvp4A7HR3jtK73wu7dM5rQmEsNFL7KzfH8MrjzepjKymHNN9avb1soD2D8dn4A",
  "key18": "5gv42h9dyrmHnkrugsTrHJMvTEqYtSMNEqHorLhy4GCZFWKsECgf8JsZR2JM4HcNuQ7zmACjjybf4e9o4h3yGWRp",
  "key19": "5D2EQ7omgQtakDw7Z7orKEWtBCQ698mY2H5F259jSaDz5enULxnsMgfCvzg4ZLcSGTU1ex715pgUMarLArFnfsme",
  "key20": "4S7wy7tdBty7AgPqnc8dQ8wfWd7sGwdQg31yDs88YetdtEsMS2AbTQdCJRnRQvks9xMSJncVtvZhXKZwcbLijgyz",
  "key21": "2WRuvg5BbYBV3UA6NEQdxH2QQgMwkC6sAansPLoNo2W4sukhfxSHFYNr2WFHHh6reHDTzGUJt4ibdutUPnUH2WE",
  "key22": "3FDHYHBiqs6UArxcjFs5NvicUBNY47UZf5QBDMKRiC76xndLALToydngSJDk8R9EU2iv8XR6KEZUmLerACJPvWrt",
  "key23": "5xXaF44H1LzWuvojta1GEL3mhcQGRYw5f5k7yH21KcyiegBRx21Mdz9TFcwWtJxTh6CFRqHTyhNPv8J1tNGU5JPn",
  "key24": "5HKu1oQvgP4KrDWH9FRwXdScF9L2DrDwYz9MG7avzYbVbBk3arUbae6dHUD42GVc5yvrCuiN92qSvyKQQyjW86Rv",
  "key25": "2G6gABvYpjs4XACHxwFJSE9WX4K4i28HvU1M6N6SsHmWvnsN1TB2qkFUfrY1t1MSPRPc8PtGFYCvEgSCqWJXsDy9",
  "key26": "4qLfLHGi3LK1ncYDP9cMswdu5cfnMP2FiJk49ge4vCAJZAX91xe1Amq49NGsBRv5UawPEwiieNNuzkUA7Wvk9pip",
  "key27": "44zaKWC2WuEAeoDitWs6t1NumdHEDXUAwABLhCvtzk81P541YGazp3fX7v7X9zbReatsm2i7hfyCr721SFtndJYH",
  "key28": "32pS56zA5nc27S9BFkgYg7GNApeDPg3GcxpL4ARXV8fd6e7kHCL614EXDodKAxBJ93GwyxGJSnc3y2oHyKCnDbSL",
  "key29": "2sDaGXfRvkYNWc4FT3XESjUBthitsX2ND2Mu9eoLfq756dzejeX1ohph6ASNnPcWWZHVwpDCdLTg8J7jnDxBPfFo",
  "key30": "22BEhnprpH76hMvVGHqNNEGr9uE7EMYfEqvw8iufePBE7ZMvWMGjQwS5Y9PBiPGS2EuHbMRqtQqEQ73pFBHgAiUr",
  "key31": "2nfKdeFgX6fKYCvpu75bHY2E3kTR25oSenhfW61YPw16rTKiUUijN1BRd3NWd7juKhzdZkbbJkGsrUNDCogGb2YJ",
  "key32": "GMSUq3c6uZzxbH93N5TapTavZtoz5cDwTXw8Zo3A261spG1hsa2bJip4Q2AWhAHtTGNkgHGSSKqQapLcUTf4FnJ",
  "key33": "53iXf4FfE75WxmB6ZF83pVCmaJVcwK5Gpeuafrtx3bPE4GwTnJhuQR7LNSKgyidtVnJpu9KVZAHVhxYUWjPGaWTz",
  "key34": "5zpU6MpyKpYcpiKQ81NcSNLwR9ziXbdkwzWzvBxqwPQHUR49U81ScSzNSP4KmV9UgR65QHYhxH5xmXHsWx1wmLLV",
  "key35": "4EqLdvnQ5uWkX7vht7ZfxqM8fJariaRewzBwnAWJJbAUZtYJpYgcoDQRtKSexwpjnvZYMb1bVGsFSQv9ZPtDzEQ8",
  "key36": "8k9ixUU7Um8SJbPEcpBixkUBnbNgKubSYALpxLzcqAwHkMHpe7ozMsGamaEe22BmjjtH4YKTJiTSJboYBWNXjr8",
  "key37": "2pTAJLJJrhvPRncFR6MiaqrA8xX2HSy4tJTuyjg5otSHAYdWfqduy9j96vwgmenqrvPH3eEx2rcMEAocBwAB6TUZ",
  "key38": "V1QZpWWiPFC8JDCQRt2gXmVXVz9qPd5QdyLMxwfcTManzzTsXAJv9Kkm6jJ8jTjHk9edQZJpDgX9a7yqC9JYZt5",
  "key39": "2VDxjHPrWPLoF2FcKLuDiXPVoMZooBwzMXnvWVoSqXXDnLzZ9F9UcLjBnW3xPDKhYF4XB9xmfbJEs3zV3AJWjPKG",
  "key40": "2tCSzhNT6Dshxh19ohvivFWiq5CVAM1979iVccFQwiC6GF1GgQotopoVnVxqDC4rtGjZTGZCD3dukMcAydKNVEYS",
  "key41": "3cd5jYbUQCpyxiNHdN63o9XDZ8sZwXaWyAhinxiH1mk836Lk1gj6hZawqKkR13A24mem1gq8zN2jgjg6Cs67Z6Yb",
  "key42": "2XeSSyLYq7EQXH9WqeyKotD92xi3bftK6CMJoN9pCG5unepB28CPxc6z2DqAFhq99hFXkT7YsySiwTp3EzSkZjem",
  "key43": "38PxqN1RbCF5njFPEBJxndGJniRFPCMZNDfwt5rF16sNQZo7EB5AWTg3dsnBvGner3cLbMkV4ngruQkgswEJ88Wz",
  "key44": "oKXbQb3f8zCoew6nGy4eav1SSymmjCzsqLRwnTUTQEatsqz5akpjsnaJXARMoT1tpEhqwcNPx6QuDYirCLDJRk7",
  "key45": "4TBHgLdY2SL6DF6vgKbzddHzuU184xUG51LgiFfCUBs76CxNcfYrk1Q1hdr9kE4nZmbs71hnW51NmEupMNUYKAik",
  "key46": "5K99c67WJ1yF4hdUP3LZKZMqc3XDPwbZYfE41Jp32vdZKYHSAqd3xDKyZefowpRzJXVb3iuZcSJjTfvK3zq7VcUX",
  "key47": "33JgLCzdrmBbVSyYY3JDM8brfP9E1te9DnVUUjgtw6F2Bdo57hBTRu5Ce61rkUHV9bUaPBMbr8S3nxw2PTU82JGK"
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
