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
    "XoHnSTasAU9w4X4mLHKUrJRA2Y92TPoLyMuTTTPpyjiokshMpcekFUXJ5FkJr4KhhDoxBtDacSQBXNmybYCwgt6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Hy7jf4QH3i5a17r4zmxt39NpmvjNRsyVeyYcpVcJxFybVh9pAFPaBjFqstHZBJBmJnqVNAthTpxuaRh1qqJMdqC",
  "key1": "fpfsVAP2bKDMmfR3jZF269tbwEXGn4kaY6aPYZFQ8P1XDg13NuRSsquP2x3bWE4xZmCXznqSEFC5KddFLe6W6Wo",
  "key2": "55wUiZ7CBs4Nj2ydtv3fK3Pa31H72bvFB8dCUc3yAHRTb7KeDPzVV1BjpTcgBSa6jPgNoLDpYGZeeZizTZHU3d9m",
  "key3": "VfZ7wVq2FrjvFSi1frinJqubwjH9HCvQKVSd1JKdFDYzkkPCiehvv75PYeJVZ1qmXLAtPafNmJ3UZccgaJ8aiHp",
  "key4": "52kKcdwXepMFbBVzGWCMFwk2jcCXt2oNeJujFb6YrXpjNvhg9T4WjBHRx2LMCpzYNRD6xKR3yijpVoiwKWxcXPwe",
  "key5": "47fznx9e73j8nj4eqkSQmD5Y4FGW7yW4vsz3KkTrWsz3yzouTn8WF4aJ6NbZd5Ze8csKkgu8c97X3rCFzEhMGaxp",
  "key6": "25iy8wLzHKJkc927stkE4fJnEcHew53TcerRmvxjiAHs2tHdeSPLuvu77z8FoK5Y8gx6wNLLy9JRQQYUW73A7KT5",
  "key7": "4EMx4vexoufAnphwm3QTVnFjxkaL8h7ozXheLPfm6xUwUBSPQRNQFxHLKXBgW61ianFesFn7ESLUFk1FvXCszRSs",
  "key8": "2heU3GbB5yPFVE7LcPNTmfM4oMy8qQRMGWJdQS566M31k84uX8QdqDMiPfmMqP38xgAFTQhqNWBxusepGPgyc12D",
  "key9": "4q7M4EHmRdhHZgy6Y92vuxwdnq45m8xD5wnPhTDjDRTn5m11HQn2VMqpmmszgJdjPy51cjt6nJhcsagU4uynzEgb",
  "key10": "5ghpRuXvP6yx3JnqBsbuxVVNdRJdxM2EqFC6wc7stvmurfrKwaPizgpEDrxRzPddGnpLXo6XCW3DUHTZdKJc5WcX",
  "key11": "2Ffvc3pLeidD5Xtw5gdFsiX3Q6eppxFg5MQLofycP3oSFsuWaDesqauJuwtUWSV9f8SiLFuw7vGKjTRbW1hE3xNH",
  "key12": "4F3pbunYEBV6HG1uaP6L5vjSCh3QumM8sLD7C5y7iv8ajDT5GL2omnogQX46V5dNwpcSpngffpArB8YXCk8RawZW",
  "key13": "3x3EbQ3Yau8ZpityWJGXPVhngDqDhnDXavUTn495i8XaBPAbtEeQ5wogBwRLxekeRfhBe7tapGqeEkoyH5KpiUb2",
  "key14": "5VfUcpdut7aCxVZaU1reUiEoM4pLUFDBFQF5GJEWxm1NnjVP4gQupBpC58G8cr4aayZ5o8qrrQJs7RthMxQoFC38",
  "key15": "1xQGZy21oooEgxHyx6z6iK4DUch6vhcL2aFPhHtGrHeVMsn5ui7AvcRDqLVTT9AdaLcYXdPFXuDRb2RB8SCQr8",
  "key16": "3XYiowTRVwqAPHKHspmjog9vEjQWuoibLroKJN5QjTBQmhphxiXtv5ZfGXuAgQ7wkgJqwMtkctweyzuRYeb1zibK",
  "key17": "2PUcrf9W9Szz3svQ6PtAFb26AqKbUuzynfm4mcSKkAtLHURpS5EQYMikTF254zjQhcrfVFSWRP6E5hppCxeQFqcF",
  "key18": "2jaYSus7dKXRfJdnxMSQGpSDuijiW5LU4MEFbBs9ivYTvtbUUr8Rkj24MML99GcMnmdQjjW698NJN6Xr8Wxf2kWB",
  "key19": "361pF7k6uN9vYeE6MvqV87ShToUy1QRpwzaHwr3x4HgmS5WYKzgwXCzQLLEARH79CcjqZQtDCWkGW7s25J3n392",
  "key20": "prm1G1U97KSETeQFXHekreygeP5UzeTh3MsLLWQwENhWHEyn6kCGNNEV1gPAydHnGB3dCzwT6CgEj8oMfCZ1FDV",
  "key21": "5Wy8ZiNm8xqJjSw2QXC7z1LH7NqGMDvJmWNTDptfTaFMqi3LUPRWoEMP6pbHjGdH3sHre1QdCHmY7byZueXZjiLJ",
  "key22": "JiCzafCGxWzcUQJQwMDLXNmEw6mGwEVx8m5VCwB1fUzGtQx6uaKH3mctnqsCfT6z7xatFg6p4SVWMEa2LWs7RSG",
  "key23": "332B7TbpV8edQp77eFzBhjduVthq4udDcBH7xMVSrNARMx7aWasHqBDzfKdMKj4htDpWyz14wKYG5j4DVCAXxsHY",
  "key24": "EyoZ8y15T45q7uSWSjU3vfdVnA75dW81uafMzTJjsGp44TT1b4f8x9NqjLC4a3nubTcLzFQ4xKNzKFsAg1ZCiTS",
  "key25": "2Ay1fVAVYTJLx6nNU2YxUqNy78rxbVgCo6ZCKzS7CqQvM3xfSRU5ZFaf1MoMfV6ZBHBz95xr9ek6PRfz8GTRJuKT",
  "key26": "3jjGSm1Pt4pqb2gisZMo8d6aKHH7A46SyHVCfDJMRo5FxYXGWN3wBzjRFfP9YXu3N1LmAcR1JwKi8iWDfQbWZKXi",
  "key27": "5VRhoUwWDx4auhKxebqFZnee6HPLMGkRuaEz52ADPpVo3JtqFKqmvDBT95o5JATmpGzBhcVuKAZcJ2CuuUw3gDxJ",
  "key28": "4AGs7ZYfWxstm8pX8QtMsm3JNqyKrCyXdNTN9iWYdbgvAyui1tSp1TJALCvUSjHWLWyQunCd5BjK8CB7riKJEq3C",
  "key29": "3dATDtohqX4Ap9BoqmSrsjYspFkm8uMZMzM4JMFhvkshEJYHgVWCr2yd4ZaWvvKQMVmgiXpwZYqMrm2zuW7XtTr6",
  "key30": "3CZNyuKfqrqu5VnCNxEXgWhDFX1LQbmkxUbXSLhCftgnEdp67WjBJDfeeUNH1iPtEbFAeesv7gksz8XXJN3G3WmF",
  "key31": "39Qq6aYva4PUw8tguFWmeRdM99ejnHq5GpKKHENoKjqFXBpL3Vjzfub6dBn6SsUDPC7QQiLLpSnh4prpsVCq1nhT",
  "key32": "3b3sYMzjds1R6ipamPevPRwtiLJutyLo5B313p7g8N7YLtT6ARPcFLo7G4BMbNMXQVoKzhAnQxv5bSA8tdJo2P6W",
  "key33": "3ATdKufBw9UXH8mZcyuHzCXtPjK8xT6fWTJniFszPHHjscc6GFc6NwpGzujCTeWE7CcUfzM9W4Rxa7QqPCLD6Mu6",
  "key34": "zNamyn73UsBLRGioiUbuYZ6xmjJG3bHfmkdZ7WQ4xVSQM4HMtoNhtAJoKZXPZ7PJwjzW15y7MkecmsKTM4Eo5qT",
  "key35": "5HbozPWvAmkyBUgccqSp2AuxnHgoPH6riBCKXMAfVWqz7gnuveVXGxidR4AmqAMzeYF1WMHjtjWikRSqaHwcvdWC",
  "key36": "BRhQ4yR6DHBr3ZwMMJtnMLZYh5zh8VL43Mjfxo5BJyahqoXvkwCDcevp2xLDjtMZpQCxsNKVvafb7XKLwMuqaW8",
  "key37": "M3BuuwHjqUo1jihKUxw6y1civN72c5VnxGVJuM7fAgXNnHpQDdRg5G2UH1S5dF35hnqKDQPyBPLeXGse5ddYHZG",
  "key38": "54huDWLSBwwpuF2QyKhpD9QSdsrq9r72Zg9nmApXUAutJbVXSpt7oTFEV6f9rZx4n3MBNeskzwGJKE9AXGSQcdCF",
  "key39": "5T7uVEGB4KhZ3gxNbBycv1eJ6SG5mPkcYgGvGfnbcQcm1g3oZ16oV7KfyPX2mTPr8pp4YdPAiyUwdhQKPjDVa5xo",
  "key40": "2t4H3khjEgZnQwsRFSo52L9GEFekXHkrcBA57rqLPh2JsePW9ky7BkDChcxNvHEg87uWHcFcJNuSH3psbaLYGYUi",
  "key41": "4UjvjRrvbvGkWzp4w3KAUSobKv1xYaA7RCJ8DzSwWVojvzTSuBio6hgEbCVknMELzNZN53MNZLpWFt8kVEfaNemy",
  "key42": "i6LqqW7jFpm66a7VXg4V3cSDssLNjMqx8TpEUXNjJSthNGPgMViHWhRsfMJD9JvSCsjPK2PTuvDsL74LedYYY2E",
  "key43": "417m6QmdEYHcEjieFj2StPUFjCP8YArJuo8j8fwodiDz6UDWJn4dXS2iv3tpjScPJchSiZGhMVwGLoZJW5TJqaYq",
  "key44": "5FBpKSd5ZDZ9RmpCCd7mSTk114UPNn3ZNF4QFbLW7c5ZrXkg4pYCFFvxkGHJNhLks7kiJCYjzThM4eicfkUPwiVc",
  "key45": "67hgvW8Pc5Ef5ni6hhb4ky2UBKxFmSdShMN2PPLmZC6UvS2MhPexxtpChNbuBDPiohnw3MhAfYhrz7LetKXYgZMe",
  "key46": "672JNZ1YPxiEoJPF6YfMNYaNr55fFD4HQXmrxCFq9kSDhNqRVBzEUf2ZyTiAyxVdMzeKghbokBFeraGk6d12sGp3",
  "key47": "4H2HnWwkFMpshF7gfVnDrMfrB9tnLN7YwyyZD4HzSevqkcwMhVKa7ME3iATbRdCqGsJxLw53kteszYXEWXrNpbtU",
  "key48": "2csbFsu9R6DvBe7iy9mUiRHC6rwMMx5EDu36SL4iDGw8WUA19J8NubrWd28DfwNSP9tKzEHspAfHCUS4GcFC5enN"
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
