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
    "4VmcVUv5AmcnTFtZHVdLhfaAptsYbpSJ2aVoSrpx1vmrduE5qLrnE63oyqdjvVyVqtVRromUb91hp7RWdEbYcX6Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uaTJwYvbL8m8JkJTZJ2jttqRzo9re8o55ddLuiVu2HWGhryqw2AwpP92M4MJ81k1i129nnAk1kCaMuYD9CuW1f6",
  "key1": "37yrEtteP7uTBMfXtUTy3CgKhTGssPL7ET6CjjqswaBoDaUqqn4jbqCsyiFyQ3YVYspUvgtjxS12TDebKtBVRcmX",
  "key2": "5YrTojXK9Y6D7cQ8wJP3y21tCSVggm7uEpwtBd5sbrbH7mADz5JRH3PwitX6iB14wvDXSsBSNGGkR7g4V81jbmMm",
  "key3": "4QVAbD3dm2wRvsV5KKLRYJ6PrR4xQQ2SJQiwgaxNTr3iFFu26SVUdb8UK27NcgKafzdXA52w7Hr5HNQU7Y1hmqkW",
  "key4": "4EALBkvmtpGMC21Et1MwJHa3iwCWLeRkV8AgGAYaGjZ54VQVbRmUBru9rSVKncsnwKqaDP3dRo4scFcFhFYChvz7",
  "key5": "32otfaFjdcnouKkuUXJYmQANqsKq3ZBQshPTmk2EoH59Cow4NomUUh4oH92iU4ARQGjaLRffv8ef31TWYXtWZMjM",
  "key6": "3SzKbZpebtfAdzpRLqvQgGfLXwMZiAupLKdbf2qDvBgJMtqvRhjjegbWTAGjmwMWnrgvkJBEmufQArYnzGCkKBEx",
  "key7": "2etLvikWZw2tp83RZuaQwL3y9QygUyXt4s4pWXYfq8cyQdQ1uUm5ZYUijYsqKtPgSAnowSsm9KLvAYHDvRWWSz8J",
  "key8": "5bqRNrpVkZs6Z9XsHz2114waEEtcy1KNw8xVqo2dSoTpcVCPVA6PUm2eLUqrksVB6zhuk3J7v7Kb2UBUL4fyEJFV",
  "key9": "5U9NUoWVi47rekD8ay5j9jQz3QBPgtbkoTgFe2ozwGLkrFZdNMmfGWZG1jpaqJFfo92Rsw1fCKHsoTaz5YCvEuRs",
  "key10": "32Zr1pKdRQu4F4MH5KpKrK3TVMz3GWXskbA9yrL3dx1Pi2tKqWE3DcNomVESDR5t8gw2KUjpPDnPziAtAYsMb2Fy",
  "key11": "4zJRtc6Di7frTYxeJT8URghv9zBF5wB43DySGF9J13kda7UWDY5GMCuQdGa5bMvCBvRbNNtdUU1GNfzhVTp3r395",
  "key12": "2M1eoUSfZwZN17hLK9tm3E25mkhnc2tZGfXd1LR7MQFejrfQdNzvyKEsboALqJsGAVp6vEYyxjfM3BNnWeUEX9oS",
  "key13": "4Jaotjjcq11ox3CTmuzVjM3Pjn2iNDFxC5nFwur5Um9CC1o3EPpTEFqKTxJrcH4DUj7Ksn37Xn97PRL1ig8wcU3k",
  "key14": "3F9TUPXj5Ds4Vfp5SQikBqDSbMvGGgnfXsEV1BYSYk6rNZuqVvmquU2rFmYcxWfjbp31zBWZGMwpmwwzzaEwMoX",
  "key15": "27JxMb4h38exMDSfnqNvVASDMjVbr49YdvysTqgTTCjmPCUHuCQ7bK6zMoi9SKeTXC26GRLhJTQdp4UEmQcyJBcg",
  "key16": "4ggYP8dKxL3Sef8c2PqPys592kQ6opru5MNW6VBzeX5qf1iJ4DLqNwzDsS5BGUM4SAHVG6iRjbcJd9ZR5A7tVBQ8",
  "key17": "5BJpR7ihHSDjV3MnFR8NL4REyY9QBiJD1gu7o3yckfXzMi86KCg1M2uDiDHFN1B75EWHxT1jcQQDidJTsueq5949",
  "key18": "3eDwz3x3LGFJGK8dvxComdafB3CKDp1iGzc3FFjX7PEKE7cfop3NZxhGa7FZke1WuuynbQ4XEDNErk4cwZVDLkSB",
  "key19": "4cuMGmct3sAmxAP5zGi9wVBy2vzQyMFUo3jfMVztgXNgkqbHvR5uMvq4ZtUHWXgttnNCqcaRZZ8Gjnn5FB3hx79M",
  "key20": "4Vz7oPvxDkv23RmMEfiJpq881WASKMK92kdLsWFJ3wE2Vyy5yb4tYMRxzsuc6mv6QLps8cuuSYnuqesNu9ZJc5X3",
  "key21": "25UN8ogUmrpGBWTRn1eAkcXSBFRf19hcVdesYWxTN8JogSoHzHPLgQ2kUiWDjPSWKHHs8fXt76bKS4E6jpMqczPA",
  "key22": "4LTNzKJdXMHfVirbA3DEZdNaqHkjZdERkAxmtGHkatMaVAzaNDxSqiJiLX9XmMgejNL6TMckwZo3LV3TYsiC2VHr",
  "key23": "4hu7mtAEAc4FyiLkTaukhjx8kYyzFJ1a2zf3iYUmU7qzGdNcVrG6mBDkM5Z1bMHxgen3Lwmtx4tbuXFbj9A9t2S7",
  "key24": "zDvY54YHtR5agZEGJMHvFrKZ3kvPuhVGScB2krHmWqMPjD9mWxhLAFcwqEYwyy1uE4oHQgsVFd9nF8ju9VXyYZ3",
  "key25": "5fLkjKSkiQNNro9QEiEGaEZQjSXoLhHqXKTE5oknDeXLZKzKahUBeqkbSk3XBMpaB4PEZnRrbtjL3DnxGGuY5kuJ",
  "key26": "3PQ3c7JcwLXDwZ815moAb1Ga4tQx61jxZSYxbYRthAuq25NrwhqYmwpJCw7wZn2LbuSYkgJcbDAKgRHsWDa1tELv",
  "key27": "2HYcR6TRSGm8m78BWhFcxJRFFGewjRH9sWhpPrNTp5hdohQCDV9Ck8V7U5ghLsKL4CQ81mPPRL9wHdQe6RHfoQdb",
  "key28": "5W7PiUiiQPYDohfpzweZZ7JxuGtz7kWZJ22zVa7g731FocuQEFD92iehiABQeDTMRTTumRFx71Bp1VNENT7ZUCea",
  "key29": "nL6Gb5kYj75YNJ1ALPbUHnAniKWcPpXCjddkZg3cwnyebwTKrbGNjcnSHMbNVrzgkNezPRZsVsSy6fBa1TFgRTo",
  "key30": "iH4VEvBGBve8Sf1wcMTwj2X1E7emEM9kykqj7JzfxktjP3qyycYwDETvGvfFx7evk2Kf4hbxJtw4iPZsRCWL8mp",
  "key31": "4TFgtYJtRqZsieYuajZ3oC2KXmBjkhT9XqkX7nyfR67XM5cqdkH644ss7rV98HpAF4cR1BRPiBPdWpkNbLP1G6Tq",
  "key32": "pmcDFSKpusTKncD4JRjtCWBK3GrBepnfJseivpF4oNHDiQGo2C1HWkTFPVitxRUdoD9fsD3fcG2mC3kEbMBBM6G",
  "key33": "2sSTg4GoWy54ZtLa5HaNKefxkgNZH7gjVNsFjQwWZfRUW7qWdtQsP8M3ZeCZ4szaY4myvCJrtgdWST8UnHk9Rdx1",
  "key34": "4DWUdfvGWkTHKmakcVpqK34DJYZwgMp7SdNNzpYHQy8Pfp5465UaQmfMLEFcHuLnmLcvQadu9en3aMpvaZbyk94T",
  "key35": "HeqeWk7st24yiEWfd3zqf4oVBGYxqcZGiByW7HsM9LucUaSrTwW7TrkBUcgrct2n7EDHm5bQny7aAG323ypPFUf",
  "key36": "65nPHa61ovPfepbj1XwhjJvDXQcnrAxHMHhRuB1ZoErwSMfs6bA6eEMFyNu9eQwH7cDTwVWvfNaqTmjXYFHTErUZ",
  "key37": "2fkhoifrKKmEZb5f7EfGbAJK9FUqNQZc4qWBe2nu65yvHBry66rHKHXW3XHMzHoREeoXdy1Ux8Rpaghsb6ZbwHS4",
  "key38": "3YWGB38FDTF2ccrrjhFrq1ZFQobgcWstskepixwfiSGYkjDV8jkkMYkkH3HnsCiNhRMdn3HGm4DVSSQn1gJHtwcW",
  "key39": "46xzbD18t4cH3DVnKd32szo1ZbDE4Kf1hQWorUXFoKyK1f2eGsHhMstPzvqyxJTeQXScLS1gSw4z39NzRqKaqLQd",
  "key40": "54xAyV3EqEvF4RUrgxmAM4hQmuUwebyzhFGgDqwGuGDRw1moZ2gaTMD6kJJw7Y7LZSnfeCwZDN4yP8jG9yFRRuEG"
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
