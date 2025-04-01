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
    "5PVPMRLWKnw1V6jn6LPoDwRMrCdP3zcnMjzqpTJEDgsMYSf4MaPUbQDpBhF1ZTCNM9hPJ2jmMoe8RM8qGYEskdW2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WHKL7uCJ1KF24ipXb4tXBUiHVPSyFrMvYDV4YWLevYy64jcKUbgXFeihB5vfyzvim67xGLZsGqYcThcw1pErBgT",
  "key1": "5pz6DCdTxyPFhf46yiApeQjHWeVcTXEF4cmFuASBeEiz25XwiyJ3NHR253sp1vqFqV7bzuCyg2X19sqpeW7XFYai",
  "key2": "5Sxqwo8Vg8PjGLwgPESYiYzRVVT4zi94hhrqrRqVtrwH3kRyUoW5SFD2dTMWCKmuuCostA68kQ8hPZjL72La7gpf",
  "key3": "ZZxZu3BGcbKjRan4CPM69sy6Pba2nNvKhUL2P3kaYd9eyQfrM6A7DU63jHzkASXFtN9AsGiCc2zWXpePUnDEcD8",
  "key4": "3pRcupXM9fixxh5UiboagC5gUAxTvuFKqYFtz8e4X9TsQVUJtYz8NAheBwgWwpTw9vZh7DkeuRjQTLAYjo3eKWHC",
  "key5": "3uqttjz8wfyQHq2yGSg8ZbZLKSMWHCkBZBMEHSJftzjrGZc8qx4dsYuZDxRPydPRHocGNSuZohWMJfANYffK5eFv",
  "key6": "3Q3Y5Ck7UxmP5vfRqEggBzapmhtg2ZwFwPbCCNBQCoVG81kVuhpv5wvw5BAzPHPmEhaw4sWc1pM2a92bxpx85gtS",
  "key7": "XSUAiTpiYH6Czj8xkBEFBv75nrT8MFCt8YFe1KG2aYmvUqWpCDr8PR22V9n8UC4byNwNmHcDusdzv5s6GXHdj89",
  "key8": "4DickkzSsbmpfYxGdoRy932pgWXZbDuhJVco63ogA3cXQsjdk3ndpXnFYCnE5Sjp1oTeWX231z4ihk4yUioVhqk7",
  "key9": "7qxNfMsQm3rPoS8P7ZQfYg4rYNcSAEqasd9voucR9NM8Gem4qk34ecfAaLjKMQDRVvnCCVNCYg7x2qEY1aCyRSs",
  "key10": "5sJYpih6hpeBVxaUNHfbDW3Wbe6nSDLkJFABSr699tDwj2LgKzUczYsicvRwxPBoozF9AaWGTTpqbUoLwtPQmbSy",
  "key11": "9UeNsXNiyi6YhyyZ6VyYf8rEtiY7tBp8KBGe2pCvAZud6rbN4vN94TiiPTdQezX2v1pVCetVicsCtSncffKng1t",
  "key12": "j9Gz9KSWDEajt3dPZUNCdnd9Qd5qK8EAHBXyCfmtRXHL5vBNgNaoDc1huAGc5HSkqHjqVo8WByh5G7J8ZK7pGzu",
  "key13": "4cGdC4FvNxtDZs411gB6wKfSkPGwtfsEbmrort89xfYhoFfPDxPrfyLjBDf2g86vBx8Y9VuUT7jucrDE6ftUTwrZ",
  "key14": "5Jkio6GqaWiaHkZVHzWBRnxQqs5huRkBb8U3HwwN5nVpsHAgLzfKJQmyont7t7vH5B3eGMTCbcLAcSohzke8PrBq",
  "key15": "4qeLVgJeDLziVykbncG1BSnbx7GPv9G5Y3JBqnsE8E6poboFyHaqZ7eN2zScvez2XAVzyUCfVmFnTBKjmzUr5x7P",
  "key16": "2vKwaJGWVacKrhZMfjUvfNAAvDj2L6PtET72DvyAt2dNjvvv6uuwSSZxHT9H453Vi5NcDVqSoCebcAgA9XAnNWUM",
  "key17": "4p7iZmDT46YRjsM5jk17W2TX8EBvuhyC6RH9DZ8dWtFGpTPjFvdA565PSdnTfPybo8esAp74oUqBXqsosgPgYP1b",
  "key18": "2PPPXayJg6uX8ukqJrkLXUMe6SPb7vCPjV2WCfdzhtJXGu5G4quGkAYvCDsAazg1AtcbeVKzHJAUJ2qUvbugLuVG",
  "key19": "4tiPsWMBEm1ByMcib8ssqF1XLnBcdtohiFRPfSP2DcirAbcTue6DtheKo4g3zmUezvi8S3PaQWFqT1fQ8BSZ8yTa",
  "key20": "52hneRMsgDwHsZKFsH5uPr1gj3FYvyx77pkk7iGuhG73uhzR8z74Q1MU5jv4KiDxAjtYjkDdEDWMHYQQjy2stQKg",
  "key21": "258esPhPux87JCnj6wtkvyfjRqJimFrpTE4DhUY3XQLSJqz28jWGdQ9466euh2KBv4gGBkatY9j9KfNkrgS43cya",
  "key22": "279t3STWBgj58fGzXeiVq74TnaHskeNfH4eAQ9tUQu2wiGAZVjTCznBvidxbi32ey4jk2oQmmLd88qnYrr4B5G7X",
  "key23": "4Mk7Vy4aevGqu8GKi2R9M9rMGj5wq2cN9MWt9n3CBrYxXM4aQUWZRDvAG3pPFPxDnAC7ESoLXgTrph7dkxptAHRX",
  "key24": "2Qp14TzRKTTqSxZQuZPjCk5L3Wh8CvrMhddrxDnoM83U8rX4rCLjrGv6G8PMtnTW77wBkjZukVoqaWGPyzHrnuJq",
  "key25": "3MMPfVFrZNum8ee5LoTnVZE285PrL58JfjcAwTkjww3ZFsZKid7NSTVAJHbeVbfDqa9br3jK93rXEcLAB7bmBFdJ",
  "key26": "5uhkR1ac1bvfM7NSzAJcBwaAUdkshJyCfW5US5uBVPFTP6441CkSY3Ug99DdAKryVNnJJ8J2XDab7L72c7EXuS2E",
  "key27": "pLzvD6ic69e3oqZko75iBLdek64mhG2AdXVkbwVygsUQ3ttMqdVvnDSP7hhY9LA53koK8aaTEvaPmrNKTJDs1J9",
  "key28": "4haXqALb3m2FDMAdZ1ytMLxqkWBq73qKUcdF6iYAKC1X5Jiz8z1p3CdrxekSx2sTjBfxN5v9ZVGRr91HSrhaf1Mn",
  "key29": "4HbKs227HUfBis66oDqh8DNy4iezDANCYWh2SivP8RNiqficRUytLdoivb8R59aQTjuaiD5vLdWEcYQkH9mUyexE",
  "key30": "5ktKTeKAXZzKiAepgzvcNa2cCWoKetr849fnCeo7rxC25D1kcb3Q5dnB9QFPPed14TeQGeyaawinDziczJkgZajd",
  "key31": "4U6M17QJTji3Ez35TZBH4fcxEeJWZHCh3MreEBcJromqBLjCkLPExH2f7dUD4YSpRbcs9wNZRfWV4Cs8csnEkvG9",
  "key32": "2hpc2CHuRaKYuMUyEov25NBwAnHJZToyyo23p2LxcAvVZT7nzgNdCgsZ6KmLJaS9vmQua7JhK9o331wcnM4QuzhN",
  "key33": "5AWP9DbFHMq7E6gfYmFE6XnHFFpJQb3pJgq1wAHj44QPC7xEKzudGaUNa7Wxyb3MSWbiv5DVnrAQhFrtzZPT5Qyq",
  "key34": "4L9p1aojw3RmartuibnCmxu5EERboRoMZHhusyLsjtf8oDCRZkeBQuP4ytHaeTHRRcPK6qRuP3rwcwAcXwcnBa6P",
  "key35": "papFdEVR8azj75kahNexfr8fHkKVw89HMr42Txm5WAx41q2joF295TnkWyy9MfxvvvASMrsVg3LYgXqEMtJFaAM",
  "key36": "4sqixZtjFNycKD5zrHqtcorW9x85dRDSpVNEmy6ZKmWbmf5TjdT2Ycy2EnaBDqnY9xdr1mGEiCbnxmuTY4tnZDVo",
  "key37": "4YcvMi9o4UE8CNQUmKYTNyiecH61JCF6LwYtkD6gxT6wvgdhXs7QrYNeW37eedMCXLbGvaZ6JaQZwK3qfjYuG8rW",
  "key38": "mp5bZ4XuaFWf4vXgzm9zXRoj3sgMzo5uDVduDLLK8BULJTaqsy6w9MMhXkaDfKMGRmqjtWRmayzrPYcJ7VmXASC"
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
