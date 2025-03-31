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
    "4jwUVAbeTsRdXBA6pgYCp8x1BX7BNkdSDwnzbpPpQzX5d1PPNXAEZC79fQabfsahs5hhDoJaUd723Xgve4b2ts5T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UHGrFiqMxLduobyVamBCmWFvPhPkhctNeezY1G4P9NRMXu9Vm5iWYvSKKhTLtdt1SUmdNRoXDeDaTZh1wqJPfNr",
  "key1": "52CzcLif5bUjPx81m2mXqaXws8jBRXN8YBxKZ1GKQF4uXbjNEgW9YDZvHVg8GsPDizYi7pfdcyHajdmdZjytcTic",
  "key2": "4h2DABc4qo6bG1zorfAWz2cvzFVEQXtwrEwjbceTcsThSEZ1vfFKPCgGBphjZmjnvrApXzzEpoJqG3FLi4PyRJoS",
  "key3": "65vdMEskKPrmTzfy2EVDaepi5t2kTMjybAg4jy4RBg4vopQZDUhyfokKwAqouq29WYartEk8TiogAxas9MMDZ6CT",
  "key4": "2tjPoFWkHv8KyPi5YAjnxKB4jB9nLD8wNwUiohXJRRiS4m22hwiZxEZWWsCxtGkJaPKuWgBnv8Mnyu1LqfS2t2ZQ",
  "key5": "41qqowYeZUE61qSrpGSj32aqsibFkQ8SWNmmxBedRwi8c9aSAiL5JrfQTkFPcBTDsRuzL7juTbSr54F8Zx4m3q9Y",
  "key6": "42rQJvghAxsugy111avGb4CM8MECLXa8jhTPWFLrRx7FAfvksA64qvSK6Upte9vGCroi1i1gaLrrdA6SKswwqFB2",
  "key7": "2GUZBRZY4dDpBzQXHvwJ4A5jwwwddPovWo6ZNQKV3YvmKb43xPoaBzaxZvjsfPgL52cLkgUqTDJTbvUw7QELPFi2",
  "key8": "zY3V22jvFUooAhGGQVhxLLLXFuhPFBKocbiqq5a9JaiDLMTbS2fn2NQuzCCG5tqZD4cUR8qvBrGr4E8yu3XY6BW",
  "key9": "4sTzBZkGjnxfZsNvVzRM28gkj2XHWw7SEt4PcT2H4D8wP6kCPFUwFmBoVNott9tFCqLG57LnwTcd3zLGawE9vv5r",
  "key10": "4Nj6oYqowi5Hu3N51x82Z63pk8gBnSdxd21BRRxhoaK9ne6o96uWFcqANNCYQUtK9NLPier8a3GcT8P3w8aR9oUY",
  "key11": "5khYkK88MFB5SRAAM2RYnzurtqXV1da2S3LHDepBMNCj67bJsneQA2MDHxdcGpQJHrkxcTNmNG3YrXcuKgWqWe2r",
  "key12": "57zgXnEEYdz7X4cVHEMFZKyvwNKpc9gt3PK9tTAtsjTyoZ2RoYD96w7TpHCndgxvztSEcNxATyDxVjPyKuS1PUMX",
  "key13": "5kyCfr3EqYx8Ea5YtoUqsAnWUXVw7BsMcCW66bHyir9B5jVUttWj4HGe1xznyJLHVcsYybMS5TDFm79ij6dEN5ap",
  "key14": "xpHRgHCRF6mVLsuXZR7nHC61JaWa2bUsTHE9dxGSYg2dvnSAGi3z1yBVkmDQ2qKULTk1ShA7W6WPBLKcZG7QPnd",
  "key15": "4gJHPcLrFmwK6gJrHVVona5ncoPNYNYKRKAZ5pDcJuWMSmF39akyXyJd9F355pbXS2ReDMie9iuigKXh1vyxUicF",
  "key16": "5qBkdw5sYk5gPX9ihGQbdjsMSFZcvnayyoiSXwvxXD4eiPKv55oVgoYtUqACYNwjrLt5J7uP358CTSQwdjo3QRUr",
  "key17": "2GkTkY5z62tvVp1PZ7JHxBzJBNnmzsZDXqHVZVXyhZiKqxVmeV6wdtzDMEHxSoQunFoA1rtVhizHW9ADFmV2xyze",
  "key18": "41RU8KJroys2L2hVp2sHouza64zMhaMZrFnbmqESwYC82tB2i8cLUqp6yV774KJFAD4kCVVGyi5mPz8zw97KdDqW",
  "key19": "3RuyzuZt6chqMsbdAe1DvAEZvGKYdcuHCRt4BD7jVgSVJzf4dRReKNmdn2Npwwexkt3VfHfHcMg28MCssvs53d6C",
  "key20": "mJs9WL3hU4HZdzkeUDaA23MzRn43FowaCYLjC1AH1gHhwvVeF3Fe4pxBFNkEav3ADRvL9MKtxZrZWwiF3XZFdRu",
  "key21": "4crbKaQyUxbFUsPnRF8WrxG6sqogZsst44KDHmB51ac76c9A7B4F4kUsEEUT54pWFDXx5nr27AyP74vAihS31PFj",
  "key22": "XErR5VST38BxEXHj9EphvqojLk8Y78wZALrmhyD2qARkfGiEdRfPF31zXsuwRUPi6535utgAni6bxk5cYssHu8t",
  "key23": "mLpg8LUXYkv2mT38xt6cjC787h89TBCTF3sveG18tEe647JBVfP3o5EopnGak2XGdTSQZXakiymegfMbd92KG2c",
  "key24": "5skTaADT6uY6RANyQEut3eFxfUruZTngA2f8xHuu5W4o5UwcAWsRhcNimWL7qE1FwR2pwZRTD8sbVtNs4Kg2z8bK",
  "key25": "2dvyqZNNZSp1nh2pNUnWvt2BLW9aAq2AJC8ZzC78iBzTrXZjf3ZNLS7S8eyjDM1imC7xhxBtdZHZ4ysM4QgNKZqN",
  "key26": "2z64h4beDGknnsyqLSuoihYTaHkMz32vFGQZuWVg8vP4vRHsYKKqaLeWvPUDBnZYRifuzXBgKh9jpayvvpyFRADB",
  "key27": "bYw1W6twvsa8n2aa6GWapP4478kqG4meGnAnywoTGZbbZYcZVEbzKC3HjRfb2taen1ejnTwnnsHeTaYKX983NEd",
  "key28": "vCjPFmMRFBBMWbD43CNGGnvjYgKY4LQc8bKbs3vhiovctcUWzvLxrAS9RzkUWptjWaWY4yy9TidTz3FAcbZNh6i",
  "key29": "5w3tyEMHnMsURHBtcnLREPRGxcS8Pk1R37v71kn4CjbqmzfYzYiPfmCh1G5ZjNSKMD7J6sWbWB2CqeJV4KYA3ESg",
  "key30": "3aWgZUF3GKZeaPN57iPuNZGsdy9xXtukZFAmuvekFofurftqKaYjxhxGbS2kfghcUH2AjH46NyYj1V1u48283p4p",
  "key31": "5xxcbQ7N2P7nxNduVyS4faJ3znrQQJBoEoBsWW9QzKj1MkCfwyLppeDzc1PABi6rH8bAjpBcanPrGE4V7q9wxMEq",
  "key32": "3pajJnzUMo2wvzX17K3kX6FWE2bGeULkAn8vaTZVxguheLf1a7sVNVQxX324Pj7GZqncx27VXHSxLcmfTZWjiA1B",
  "key33": "7bUiyS4kYQKGZgQQyksjJ2ntmXeoxGzjNj3MzHcHxwCB73s4ERhwafx7Jjfi8EvuhHBoAvVLAqhWodzAMBq3bx8",
  "key34": "EFcwGxkJ3tWDsqaj1HvhFMvRMjGkVAFYHRzVXAt3o4j2faFcKYhBfWuY5PF5qZetD1REeGWz9swnaEHQLJFc8Z1",
  "key35": "5DShdf7bifr8wU5PHaS7R5KsZy6Wo3dPWMGbMaJUiMCgFPjAd4E3nxaJx2G9h4kt5ntuPbQxHemQ4MLfJYSnW2qY",
  "key36": "Kiv2JbJb7HCbe7rzK6SgXsmf8f4tuXwEZcbfegmpp9Wk33sBoq2igGvdpBVBdvSLqoUoc1PD6xkgSvuvRKg4bzo",
  "key37": "31o3X1HK2hynwiywWvVnmoQ3ekei9MaX2V5cPNw2RuvmBDEX7NPXwUMmSrGkVAvViD21LBF1Z81VoiDq4wmkJbPD",
  "key38": "3ch7xwkXAsw4uAJcVhGN41tGovLinT9vWpegy6Z7uWbmCCm2XEBPDQRCseJ9h27yz7RMEyzqwExAmk7udVrGGMwm"
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
