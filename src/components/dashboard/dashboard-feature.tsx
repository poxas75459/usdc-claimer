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
    "4H7WVBtYuHbhW2acGuq1cJMTBkaoFHBGw2yyyzHRpH8KAqKVNL9GY3wqyJRMDU6yJAxHMwUw5a9KdMBoxygZRYh6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57JWVv3Htqj8Kmzi2anbjSiwVcNNGcA15wmtvvkieCVytGBzztTFMacra13zg8cBUPwPukAFXBWaghB5Gtjy9A6q",
  "key1": "4ztoBc4p7o88ooFGFRHwdfdRyASYxHJTB7qs7rH2wseYsjFxWMRxgsVU1yPbbx5iBdawsyNsUaPGxwFVoxAEjfwb",
  "key2": "5CuXs77o9UZgQBvQo4BFPcwVENg6yuZdkT2s6jU2DRDi6HfdhPNMaCWGV5sJkQQWwW1ijdK5uBcDWTUAhpQ5fDG7",
  "key3": "4xX4gekwE4G4s6EZ1ukLiyVZ5imBZ6GkaFqnJd71pimBNbxQBvtdP826iaW5zR1VggdyUuu4bQNVoKnkVhWKSss1",
  "key4": "39nft17tUT6DmSNUsaare6rKbz7UiWYS9Vuy8tU2sT8ZxH5Qym6yCeGzXDCZkfBzfrxKFm3WhgaPERo6dgXih6oc",
  "key5": "3NgGxnSPKmsBJb4i83e6CbM69XEKUNJDYBUthQpG1wUpJpV266DtvJ4kQvpzNa8JrUuv45oxAbbdVUhJGFHYE5wE",
  "key6": "4aMPqMq2TSwe5nrtNewcSLW7f4LGkFAiox3wrWShMdCvFDzKTeDWXDVbiUA3KXRmrym1WXYNwRonx38kAvCUV3SN",
  "key7": "wh967B25unyJhaECrd44ndZdLzvDuvZut7czXHzuJ87NJNaM847m93eFXLMbzo4QZxLbe3W8rsZ1pP9MRHm9a4E",
  "key8": "44TELYuJzSn9Yy1D4fMg6QFmqdqoucNfzE3kotZu3r53RcnB9rJyKkQzczkSbsb3ZqdtFFVF57x28PCDERincfei",
  "key9": "4McD6rD5aReu8PZNbTqA5i5GujatxSwVg6p18WemQcKyYk6v7pg2j99GqG5Uge5qxfwLMW3J7ZB3CMYiggEkHD9M",
  "key10": "2tpvJe1YZqowJqSdWgLEv4VfgKgfVaGbuPyChGEbu66sbeeW8L5PoNNjRrmVcB9HJ2AfxDqn3o5K9ngxHtyUs3xy",
  "key11": "5kTBh1kjwyLbbDdGkNJVuwuzMv6g1jBU7NfbmNkQ6ogvM1gpJsou8m4J5TaFjiD4MWErSc7mbS5WHNXZqgJb3VhR",
  "key12": "5xCsKwrFqxG4VJSbHYvYNT9C8G5G93ComknekKfdDqv4GSknxoTZstuT6AnTUUwonnP5KG1qEdf8uZEKhyoeMQS1",
  "key13": "2F2rvVzMbKEGXjRpucBcAM2VNr66DFu1YVako1oU3n9mZp2YGFw6B8CGtVzAyHTJLFKx5ZVJ4VSof7NeCgerA57i",
  "key14": "4pAN7YTt8sHaBDtH7S7yRsfeChvUxP6rDAuMFqgAsEPFWirfvXgUAC35xqeQCMsigPpon4x4t6M6xdHkidAL5Axd",
  "key15": "2dvDzaWiA5RX7Cgaj4axTkBbKKE3BmzZCM93C6hGww4xz6VyqLEduNr79PLzkqVhXrrm6jM9DdNUsT6Gne9LsxMT",
  "key16": "2pBwFqTnZ68PvNuCXkPcBG4pSS6vJ1rrGXPyQET5NFuB5G8aBKVmKqewUoQbSWnBsBU6LmDsmvofuyUuLfv9uY9z",
  "key17": "3W4uvt72aMMF1ivqA9qouxPCgk5N7mzmUC1ysAoLAx1DgRssFqZYRimFFL2oGUGWCpTUcDU7dpQBYaPnmSuYytq6",
  "key18": "128MUGvbAJDhqnd6FkELJjnmShdVoJNm5AhXXPTKodwggQ1bPoaZaS9h831jpVgodqXJgyDkZrsCLJzHPZpek5vV",
  "key19": "4T5gMvBsdys4jEi8j5Ga7aruLsmuroe8rkQEgZt3Xs6wY9hvro1TvhY793kEhAuSwc2WS43KwnbLLeRC5MngBt7n",
  "key20": "SionFYJHiQHUC7UADwnb9PmMrRsyWaxxzhpr6jbm7cjmBzXKcprCqjrv2adXJfWNp9qSDsHMjWJJPxvY8kmvDEy",
  "key21": "HG1GrZKerbGMechwhXCcCBzX8RkeYVGCwRA3Yjw8Fo5pmsL27ZT7uejMt8WkdoJSSzSceA1obhFhgVyNqksm7B2",
  "key22": "CAbE4aWWHCrxYW8r7NDvp86aoy6ZraijZxSXyFBXnQWbheUi2whB42ZaT6UnZACT9MyAekis2QKyWh1dBpTicos",
  "key23": "3oba5JF2FVwJdKN99QQNTDAEbxN28dcGMgCXChij2RVSqE3EWKHWmsDeR7kps3rvpVjBa1boiy2UFYz1RGLxVELU",
  "key24": "5ULHXZLMzR3YQMh8ik9zqMyuACw9riJM9dt6mzYokJm8MjTrJT1uoXUr84xUKQyWc3gSy5uaq1TebYDsxMEmNuab",
  "key25": "4TjRFAxmphaiQgkE5kqmRcoU33M5gSn9BmpANhsp4Jq3AQnnbsE8oKsW9gcWT3YZFAsp9ZRseSr9MUki5TKqZfim",
  "key26": "G4YJnGoUDQXEvpkLXvtqKuh49FMaoGM6cRZx43DKKrf5NtqxwpFP2gVez61H1QFdZePacFxKkZGX6QyTJ7J53hM",
  "key27": "2qzBx3a44eDLQ7CpyCrwnYpUiEvg2giXLyHTbW5SXFF9mmky24oMMdmnGxKbCUC51PbkiW6iMoK5XzKMAVqBNbNv",
  "key28": "3w1YkuYLGDJnHZc8CKhtz58mJai1DstZX8aWT3wWiu7EajiGH7e8fjWW8PBGfHWBNDjx7rkbfNL14s1U9soSh7Ks",
  "key29": "2FsrdzEsAoFkaHqFt2Q4DyPKe7f6u9jLkmkp2kTbWyqJwVnrBdXvCCCar9qUmMG9queZ8NYsFNyxykeBCgAHa2wf",
  "key30": "KD3yT3pEk5YZYadGjt5Jq24Ha5syCPHEtxHdLr44qpnHNwgUBRcm3XgdKBsSvsrz33c1SPtcMbZzSGsNVJvxdyn",
  "key31": "466NDMpcqTkhuVz4gcS4u97WgF752iK3hCsJBHqLSRUQxFq3j1sg7ibMyv42SRsFPTDmsUXjkGWZrhcNXn9aixPs",
  "key32": "66RRxGZDCAP8vmxdWSmJraCL9HcqC84VGCPMCnGvhkZHrAwRjF4BLWveUybs9soRVBJKLhmp8kLneorrhqj5Jsxr",
  "key33": "4GDCxz8gUXzKwbX16UX6pgFmnKWgs8Gm2sWjcfxLGrUHG3Rb65LEhHCq432Bjxi8dA5fdFW6LRpvpYAWioVgri1d",
  "key34": "57cBiYbKyZSqrNVgwYtCuKw4nXJCvrCW6pAjEH8VoXYyJFhuZfzrbTWqLrNBb4jkB9SLfXptAVdczw5NFUwYXVbP",
  "key35": "4s4BCEkS99Lvyfuqxga52XuWgSyiJ4JmZQ1vtR8AzkGqpJ4Q8cdofHK4hxwAgUCf2rjp3P4siFRYMUkd6MboYKMW",
  "key36": "63ixiXvw8tjoXgvCa1UAPt6foADnRQNw1Y59Cszsm2Pj9dgg5Wfn5WuPG6cuBb4RJtqWmzL69Uwbscb9FBG1itq9",
  "key37": "SAowzreZ1iTnJQ94nCcAEdSjStFntG2wxwwuHRHYjZaB3UGiBRSpRFJy8h1LG6EZ6gCXe1CzYEWrQ17rLVohApH",
  "key38": "4yYUo2J7PaAJggJTMg1Ceam1Y3KFGJ12NLQd6afgrkceuUTzbR9nPcpXamu1LFTswyzd2rwA2JE8NKQmpvDuDg3b",
  "key39": "ov6UVTmtYDoJ9DWskrPzwmzucKG47jdmFzwnwaQrw59VGL5Upms8gaWi9UXLgYrMjTj7DNLRYVKD4WnwJXqo5Wi",
  "key40": "3S37kWWiujZvh8sCgPrVY12GKJRvmvggFDe69ay9zi8G49grEKMyay7mq8ni5dJqx8kYViTMYBNXGgEFiA6wN2sv",
  "key41": "2v3HewhW63xxXjxchsLde6wXEHbEg8wxE1DBErXsReHtWw6Ghb8XSa1jGzLY3ew7RJsn9EXPC5Yvz2WGABS2HU4Z",
  "key42": "5So124nmKmMxTUHbKKNy8NA7bcHhy1E71PAbyPPWJmDKqgtxHPcmPXUj8arrBQ8ypQqkyPr9x5j3X3vjCjrmRyyt"
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
