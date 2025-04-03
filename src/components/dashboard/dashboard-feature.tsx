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
    "5QXK47Rd2RiirZ6x2NXu2XCwnXUj53LMFw6kVBdS9wsSjHXz8JBguB1vR7dSx2uaUMJAgwVDsTXa4rqMgSSSy69x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BkWRtEA9Lkz44w4YjbJRYHDeR9Ah6v4KaSABWBiqjd3omxCQZ7akqidVUX2Y9AFMR8weW77LMdZTpDuKJ9XQ57G",
  "key1": "nbdhHYR9g1SD54mrasqGdn3De1hfF8WvhmuqqNwmoLPoR2V9T9UwqrbUrcrkLDhYa4jAJHCsLCyrCeQSRETeEW5",
  "key2": "3YBfVgY85D1857492jrPYVPDqyqogBMfxhuGaWkfSSxGFLgyGTihnXv8wE4btzZWW2HKNSwW1tNAKdTgyTsYKGUq",
  "key3": "6585EDABGbEAgJMuTfKZdonPTnJYt91RmWjt3Ei186gPspLQCEFuGrBgsqR37G2G856K315XKgGqbGNoBaPLpJZP",
  "key4": "2hASPz2HT7u1Czayn9ckcgYn4r3VnUczWmwaTmdhNxts7qeiJRarYzrtigrWVDg8ExtyBe7JMhEUo5uXPrGvrVQZ",
  "key5": "451Y9dPrrJpnAWdrzEbhaxNXL7vnTqtxX67br358R4UQLHFZdRXmUNAbxyNWEe5FDZ14BmR5XQU5HvTyCaqWnfEJ",
  "key6": "52hSkTtCvDDc3MnVVXpvViUVqm1W7fdjcUKjrVsR4sh9xFgh726RLav9NnTZdXoijxZ7fxwZiFKCYQWx2NoSPSem",
  "key7": "3qUZ3eQyug8URsAePcVjUFVBxLFe5JRZw6VQHRnfKPXpsUpsKD1RZGowd6wHrhKC9QFyHQV9Ak44kPDvBiQkv1kV",
  "key8": "2GXGGVBfnbc23TbxtjysqsWSUQkvZdE91jxhjVxgZdL8x22mKUbSMcW3BxRZp2WsBvRvzhTaFCkG4Kq22g5MAU7K",
  "key9": "4ngQ4ABgmWUoK6NTsVZmaP3UbBgmD9sfPNduMCqC2GjE5iTx2thSoBwgnX5qarydVrr65e5btuukmTbe2Ya4F6Nx",
  "key10": "KbqtTrdnAr75jfRRFBLUXdYmhChsJc2qdgFMebySkUf6F3wVEWPPb3XVpsuNMhQd7vCE5o3WK24aFE6oJFsHKh6",
  "key11": "AuJMRYZ5rap7r3Sm5Lqw7b7mA2LfRe6SE25sXv2YrHoa9cu3Jy32ErPQX2fUZ44mAJ7bQHqxNQ77gXhjLLWjhpp",
  "key12": "215oztWXjvueEUfMZ5m9DDVrCMzebtw2z1ernEjWKh4QdkSdNDL9mWsPqaE9UzFps1CrZQSs1XWQJQ3abKv32NBr",
  "key13": "cdCGDSki3Pfso6Quo24TbtoDXVJwGj8aX5KV1eUmnpR5AUiQ5bnQdq8EcUUw4Cacdtiqmx442BoHUFPyEcqTQuE",
  "key14": "3yFqwYL8UbBLuP5QJiFwQCdUrQddFaAgi9LueXDKLxb9SuwHT4iP8MgNCkGrn41ZN5ZQX2HNJZuQfMW3bmBnZgWM",
  "key15": "ME1JvRH32zHCdohoN94d3chdLurt2mUqLWmeAaAGQYA1d3rVUG8B2DJELs1mVSSMaHDgr9tkiG3DT8mGMxGDuNA",
  "key16": "EvN8S4LmY55nsXHtiDwefvtS1kf7k8innUVmHstXDi7nysEMwdyBcF6jjt5EqbkkKnYsmVnU4hSY43Xdvt9iejm",
  "key17": "4oBzEZZ5DWqU6k49zPV3DGLPZXvtQ3NHGshZRsV94cD5RnLtwSfMzv2TVypiNHdhhrchU4WkpuGUu5SiFHx4BCcA",
  "key18": "5GD6qaP6Swyy412oPnRpNPSy5qVuyWMpLcekUjTKsX9Gw1aKU9M3DEPz24Xwu46LacPrRzKGSgcjHPN9rucpYRbs",
  "key19": "4UdFHw7J451u5pn1QHi6tX8Lkt8RubiedtZCKCs7JZBDryT4MUcCZj1X6HfBzq7bAdxQPewQvzoW2ktSq29Djc1K",
  "key20": "4Wm3nrxvpaPuoehNdioZKmT7cXxJSL8MWv36mAWxYbTDKwkYj5HmzNPVegGsSQzLvbvidPCCuc3NyoK7vg4m5aYb",
  "key21": "533WJPzKpQzGtxWWWmH44wHuHQdTe3Fn4G1kn4kq26etjFZD5Sw3UaCwa9tLEFNuKWE5CSvRY4VT4LmhDQZ8gtBt",
  "key22": "5w3PCTEugRW1ZB3rx19Spyo1AVjPQkPtV3JypuzDZvnEg8vboy3rnmjEioMXnFJX95Cybyc48Z7BDXSrHcQB3J7o",
  "key23": "2F7jbYCE2Kifa17nvDrwsLxKyp1S9uC78tDe2sexZkzDMBEpb3a8CACUw9Q7vVzA363RHDXsUKdQKcxK8rn98fjg",
  "key24": "QdGne4Fq5G1m5hkHouY1uH2gvXW2MR1SiJZ8bjuWt7uJRUDHmJZLgjpmSz6xGywYBqZTb9Dc9npoeUaejPsGhqD",
  "key25": "4gy85JMx9NDVr4jankBxAcQRAhooL6Vk2bkSyKsET6zgDaK8D4ojAP19JnuWsVUp4f7jmtEhN6rH1y7fPeD2XF3C",
  "key26": "MDxbxPuUSB6ctx4UfB3Jk8UQepWAv3ktemVqBxZpUsGNVucqFaFk9shQpraJVMXJBYPhCE3uFPhiDfEzJHPMPwV",
  "key27": "CRQx1qU5F1UfTFsdowaqrCipegUp1gxY9A4uKgTsc6ErmFShX12MnyVnyz8wyfzbBVLnPqRFjDCN5hxnzGPaQQc",
  "key28": "43aDX7shUTFM9TP8WNWwGsPDLeYXLJXJHCCTCv34XUmMbUMePbAh7j259cCNT72kdtfNFCbSRTuHMdyBeNTKEKt",
  "key29": "4cWepHpGeA5L1QCENe7PFnHPvKZmPetkup15gAEoCy7YBroKUiFff2PkmZXZZc24NYEyrSBywtXZZM1KcVuXqmRh",
  "key30": "5cuSesQJ8SWBa8hZNpCuFWXGhBfCGgMMzXeuvnG1fCbpPHKYXuJ4bDRHdDLhzBjX9ihB8tZt7bzyDu4EHcLdoKz4",
  "key31": "4g2iXAAtqWKFtcjBYnPhh24RG5s9tmChtRpjFnVeh5EmEinkcqJzSo4nwVrXVwLVs6Z1YxU4xuPTxwipLiLMfRf",
  "key32": "5y5R24WXBy4ydGznD2qQs34RQ9C9c3bipbp5XhpN3G4C79aUAFLQN31vXftNQdSgyPWyCCnkm5QB1Fon6o1qPSPV",
  "key33": "3ZQYf511ybH6YpWAggziiKyeEPD6uPAUnuNWZxnfCDNqhmKJLGasFz6bxKah3JYxgMYMfTbVnMrghcdYmCL5TRZ1",
  "key34": "2gR2HZZkEQ4c1XYfhrTG4cBE9qPY5TGxjPZazASDsgEg14k2xjaPYCRGeEA5SEGpvsXyMyaEBBCq3M4mRBn5wscC",
  "key35": "2DVyLKsG8qfsrNBvFkWFFmU8qj5SYoB73MyPjQ7fRBgPtzQqQyBWFLhHt67yuL5TJDArqRMKx2nx9UpwnwukQQFX",
  "key36": "46HE3JNgk8PhJ7VL7zez42n6oFZDmAbZnA7Pg4GxqauSPEytJ9SPuatqsMtKXCFPZyxytUHK5C9EvMM3jfUtRkFV",
  "key37": "4viRGvVQrnDdcQv4NvKcPujc7UHKdbxJq5XyMwE8wvZWSA1CQT4uk6QWe9TfBv48DehvJ2ijyhURD9MXRp7FuiA1",
  "key38": "4bHQ9yUDqGuAninErPeqYjh3Kz8mgnwMYwUkoNMmJALwcLForn7165JLH5XjkMdtVZxBDW7yzAGTaxgDc7PPetEm",
  "key39": "64kSnEttXrwVQUawm9zK2x3rTiXcuq6gfxpJ6ohujhbXvQL4jfkj8h2CEETCqiDu2Eg27zg5FLzrGADqBg92gusM",
  "key40": "2jZhjcc3PPJo4fg97VNNxE7LoDFjmzGL1PP4jP246JgMthBo5ZigMNzbAHFaCpnrHoEj3weAFmtwxvrD3VtERVAF",
  "key41": "4JrqYei1WCaS1ftcmbJmwQ8yCTpwvfBcP288oyyc3qctL88EniuPjCokzu9JcikFdLMpFf1A2Gdckr2NjJ94iLjp",
  "key42": "2JTS4WQzkuobFGbyaTcZd6Cgyn4BuDh5dbs3AoVBy3DXkuqBKRSgcsBdYK9rJJCPCBLuMchfpS4nMoXVsvt24VGR",
  "key43": "5QBv1ahhVnJp9UJQUmvtBPbPHDVZEqLbfstb5jgAZzHjXKWZHLpEgKojXKw5Ctqd84E4LJvWTXCh1XSADFzFwDrz"
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
