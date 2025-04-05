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
    "3ZmFyQ1rMhMjFCwDrqQGHf2FhmQ7oa4x2vMUwPHgAcBJ3pKuTixZXAe3CwJvqHccXBbSkf8k11S9uR4v38hZgkaD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "415RTTCG9MahwYWRDGgczPD1G7x6i87DYTHWk9KwhJSgpYstzcSo5Bz64ZqaqeKgerPxCFUufWxSvWEpNXokowD5",
  "key1": "21GjLv8jycr5mE2hDz6KSx3C7gsbCjxhyeyC2Mfka39Bvh6ygYWkiH6TCbnXcM4eshEWFB3kyJD5A1kULkudXwUg",
  "key2": "3VbKLGmt3bnCvXrNRHZUfM6oW3ew5p29DdDHCsAaGuaLth39JZYBZmzqM65FUagAXSpPTuxLzYpXVhARJSkXg1hC",
  "key3": "3jRUJQLoS3pDTYmYn71p4c1saP84QaLVkqoAZAWLdj9qDWzUGuGhUkcw42oiM1fYKGJDcu9GjRNEmvQ7bfCfdz3q",
  "key4": "4z5m5Ap5octYVdveMg4PgTd58mawKVAeTVqwpkL62Xs1NycSRkTMkHdDLwjTpQqx9JfUApHgN68NKko2aiqpCGT5",
  "key5": "41TXYRi74egr8wpsP8wZ5Tuf3bNFnMnHLf2BJkpPW1zPvfZmELtAgKBtqhSGVMUexbvbboprFMxozjGBWrNMPLFt",
  "key6": "58rbtzYtRpdwi9fWupuyHoWdNQLyVGxUjsoe8D3u8cLw8ZFTcpc4kDZeYZkhTarcKhhVqHxtPUZE5JxnuYGiQf9N",
  "key7": "4Ru6mDMjvZDGfeRzkQBNiVXneM67m99mPCY7PQdhy5YEdiwR8Kqn1qdNWnEksL6mCSvToQMPqsjbQZW8D95rAGGa",
  "key8": "4wV3nE2gjhy6DXUaz3DcdGTAaVJh67APwq2ysbsukcVZEDiAU2qBHgNXJ8iExqTGFN8bqnsRxLQVkiNZ2VEpf2Xy",
  "key9": "45Fm8ujGRYRqEp8DbL7TPgrrBC1YYyujH6ugiUD6gdLcmYw8V2jNpaVwCF1gyy2LsCEFyp8iLWoP3tz3Ryjz1zvU",
  "key10": "ZcNAuo5EzYfys6ZeKHazUrawecxdowsxAU3Wk69JPfi6kuzSnN3m8oN1grx1Rs6r1RBGpiTyvTxjKq9QUNgBccE",
  "key11": "pmzi9dgTDF8jvkTZHsSxvXfGKhWU8QLPqJoEMPYp8c1MgsiqqWDXZ44XYrzhhD1RfA2uEJB2seTETUz546Dn1cw",
  "key12": "4mHtEUUPU9s3AD4ne6NJvhntMTheoa7WVEEZh7AqZAvnmggqe9DaA3832BKx2oBbq8ieBuPFE1kwBbMWD3k5V5me",
  "key13": "2ov2xceMGvpPoqcXBMgMrQyqXw1KmUDmqJwHP361suHj4JhBu6cyiG7NQh9LfCC94noXWwEPn3hGhXNXTMoJtfxd",
  "key14": "3AHGysYuXKprN1LmMB9dV6HPHsfZJpk7iPGC9Q1SPGFu9BvamQG5Ycp8iWmyj8DWLrv1btg5YnTb8RibwnWtDN6E",
  "key15": "5jEauewDnbeB4RbNHbMZHuVH6xD584u8xhnj8HQ4W1Ey4N2Sec8LwYze6tpNisXejH4dSbjPMr9wqNcjpWYYAhKU",
  "key16": "3dzQsjHykZ6mKcehTZC5DryJfpT56JFQwDiYdrpsyZ5HTAtjzoaRBv5BTov3Arfq8E8XwskJ8jz22RkX2T37paXN",
  "key17": "P9ZjSRFkNo48cGYrvAWv4r73ZcfMoWnoz16QgwzdSScKmrzcrCnNPd45Fbybyk33tRZbRk3zMystKy9RxJ8YCsd",
  "key18": "4DJgnst4AYKFpPpJ7ECrk9Nu76h1hGQEnZobkZcait2QQf3qhKsjeGXqZvipDy77Bcna6QPEGewXomvGFEiwMBub",
  "key19": "3jkYeU2jvuuZnnkM4nNWAv1Cdj6XSbHjh3g7mciMmEqwjKWi7HjmxfypLHPg7MGgPr7nq6inMYxCaZAfDYkKbsFn",
  "key20": "3VrSNuhLxKEwKcpMymGqCdmnYjuQbNQAUqnxh29Q9wVHqoiusW8PijPe2zTTeH5P4o4sEpXzBfuz3PqdNT728crk",
  "key21": "45fj248GcnBRhMAEsf7gzh3eFnXjzWeiWvWX4FVxL3pWGb1QNUwajwWQ6w1W4HHNnVvqneU5j5MGs6zZx8yDCZD9",
  "key22": "486h6mViqviJEcGvBjSgB3cnzmBrPwUBJyRCKVh2wxvF9BLxcGPo9h4GdhBTp6FBtS2xhQj2Q1eX5ZwrWouYErHd",
  "key23": "4LdVXK2YiYgddGFLBVUCaRqgSDuHjHCr43yib56Vouw4Q5LDM25hBzkRFz4KWH2n9VFYn6G5CuXzdKVrffm7NTXk",
  "key24": "XVyNgTMuofUZoaDvSpmutUC3KyzcCLosR3JPpKtK1A6A8sWHLdf6mjpUmowHD2U4yU3NPi82i5fVGBd9suzV5dj",
  "key25": "YnhB6EJMoo1Z4NAkVqsX6FPh7aCLgpCsJCPphGKYMfxCXb5qMsKojAKy1cchd1hfaaXVjc6vdYYRsU29sizM5rc",
  "key26": "2Q29YKnMTreL4vpLAxKRRDtzJh6zjCU6MfEPhrH5JfdqgXW12QsYczApZw3HcxvubNguo2GSGeGpNTh1bfrf2CVJ",
  "key27": "25QkFFhs37KRkwL842YL9sAcRJoN6E2tPFketiVyxgVrAVP6HRZHvbaDUZHjA6GVhBvCW9X6v9MXcbk83JCLVR7D",
  "key28": "2ZbwMYCVDeuhFfAsruTbAc2ffBdqeZ2wxP83tj3g3BuGEjnq9oJ1RGDtvZ6S6SwshKL3itPVQk8igNpvQjUwKnof",
  "key29": "63WZsawWdmzb36r1FTaEmhbCVqfZKJtvaJXLvPhbjaGgXGFyqr12THgAPLRKpn6nGQufbRgRgrYwXP5ShJV5trRk",
  "key30": "5tUvMd9vjmdSy3FAqbnqsqHZdG3s9uTQrkUoEtv54tHYsfV4JoQfvcDAaReaKLFfYhK6yuB2Fvub7xtanXsfk8jP",
  "key31": "3xyH2Tk3PcmUxokAiYTpJC6bbqtQnctUhMKTEHNXFmzdfq2vWJBkehp31yz2xEjMnnVkHr3dWM2DrW4Jh8Jru9Aa",
  "key32": "4SEm9yvMrXydBxxu4wPm6WKzvjGp1PXt8Kv2H8ej6owazBFeKie1KsAzeVDr5y3iptUASCjQQXkPfWpKhnfUNLnB",
  "key33": "5CxComYKA598KQcBtkz7HMpbbfp6wEqjmAQBftGDfbFT5s9WQxdpVH1tFRW6Tz2HS7GuhjB5GAk8B2jCXkxmZE1m",
  "key34": "452WTwkZ6oU1c3RVBouzEza8LAow2p1Jx7NMjy1Eeni8zsLRfqxETHNjsSci76XiN2ZWTc4pHrNfi73Cvd15Nh4Q",
  "key35": "3ETgKAUF4YFrgdBFiTxAo4krsE8hjsKbdN2jPgKrc6VVjjZtaAxjVapUgUhnVCvbxD3Z1i1m48zaeZaSxxCPfvgk",
  "key36": "STZRYdDcoKH5JCV6o8VnxwpYcsaPXAvtFvbRxFHFVMhmQd8W71iQCRMKrF8DMWULACKu1z5C4PVviC6hWs6qYB8",
  "key37": "2d1d1mTBwpioMj9tgz7AazTnLKpgQupATazmgR88qo5uz5bCCTqjDaX6a4gAZxSNV3U9teE87Dz26BnDCt9FF8m2",
  "key38": "B6mtPMks88jckjD8vqebkLEGX8p9MBZkvkxYcY8SuwbY6AFjfhLG5D7ipwtPwwFLsg4rx2Y5vibne62jHpq1Td4"
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
