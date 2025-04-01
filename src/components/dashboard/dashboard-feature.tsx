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
    "3kmNXyXUQUKknu4c8PX2mmwJ8xPJS3Awj9ohL7gexwYtz3Ddf7JqxSJtf3ufBKtKrqLgGibJ1NL2LyF65BUX5M9A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kfvw1EKwzFhb5YLv61Myqkspz47jWrXUfAYfg9dGsm163hw8yLSx3eQtRioJrVoDLojCH7iz2oc6fGjBTgmbKzd",
  "key1": "5tafSW528iG8ZEneYYHA69DBFe1TR43JdPoo8xwHFKi2oeaoVmMjT5MNhmSWdQfgQ61b7xAzmTzo62qyRNVCCCoa",
  "key2": "ZWvHN3EgwAKBeiNATgMGZLWjkzn99YWBmNTdqi4bEGrxZY7Cr1SwHhqdtzzzfX8EQYXAK6Qcsv6JUSShbEWjW7c",
  "key3": "4yMJ8sBZ2ueNUC3JXeXDPM1nQPZ6C2SuKUNQFP87xDvrvRdnQ89Tzek64QqcSwBsGwEEGi5V87KgFr1MdxnjXQbb",
  "key4": "4BhoCVbQXfCPUwMt3W9kBRjPfENCQre63Sd6eXGacqQdicdHKReDPEpp7de6N51rbqFqywdQNjNFUYSfUbv1ztUH",
  "key5": "5cUegD5RZjsoVidaivEQcpdJf8TJbZyS1joFn6vAWpGCXxocbWNUAwd6XHLgFvMscL5thi4NhWHhvgpHwg8xNRXb",
  "key6": "4sW3YEQZBuwpprJ443PEEZtz7oz3n3tZ2e9emKprPrejGbrp95B6cziWoD51ywVYAsokVLtuSMQvAK7auTQfHq76",
  "key7": "2FS96jeFAQvwVJtvYovhKKSgJgEQqzowUMjnYrVFsLC422jL8iUmMqPhNG2nEv1UZPHFa2bCsZMTPJ957MfdZdTf",
  "key8": "2GjuaRn4dtV7j9HbzMVNEj2d2eGd8y2xfWRySkkKsMwGLeDAJFopKzNfR9QmpavWZPvp1TR7Bp8vfMZk9BdYp1oU",
  "key9": "3oiFZsoDvegjzCzFbuxpYhYJjCrGpu7yhngX7TtFy6cvAMcPAs3K9PZE2qxVHYxH4qo7hT71mJk8jfkk3V2VuXaC",
  "key10": "5YMaoHXCKqDp6afshjXG6SQAC5RACRwyejmiPwTmVDEY3Q56EdjN8cDrj1wye4hrB3pbMZDTDPUUy1g9dQpiCZ3x",
  "key11": "2VApk78R4GuxG6mrQySHErV4nSRycqGnL5qHgonyzaHioX4AczXYJemCmrYeZxt14vmQ8uGryVswXCD6CvmhvHu",
  "key12": "6xiuy4MSwPqHDGaYU5ubXGsgaF8pLPVVrg5PBKdtLsZxPKU7etKKBjjUCbVpXWZ6fBUTUqRZypv4aL6XiFCh9aD",
  "key13": "uNNNW4GHAnDoLvL7LXCxbHMaBg78Qc2ivZmo8pAfSDCd27Fxq6VGMyoJPwX6SpURPFbaF8sPjwSTAyqHSyEyEuJ",
  "key14": "2jBZhKWNcYrSy4gaHSeqKcpdSSzwvQ6nofE6pE943aNBmawFH2K8j2BNmw57gAEN11BSYepdoym2Ln9WWm7EbntC",
  "key15": "5HaRncv4jp4FRXhmpD4YoCTkF5oQpQL5B4Bvsrtkh3VhGbD4mCWMb7o1hAdWumPJMP9cakvUfqJ43skwW2YAtCSW",
  "key16": "4xQzkXJ87HLZUGemHaY71t4cw2WCN7VSybKoAUSgwXe1w3puWmTWjMxQppfFjr7vGCL7jLBQ2m6MEJT1j2gU1MCe",
  "key17": "53TFaYv7wsbuwCFidiNggiwsui2q3CeogmxjEqdmjrtpwdW4jp6Zmh3FUDFeczE2pV79GsXdr8ZPkEABV45iyWZW",
  "key18": "4sQso9i87zStQPTXp89hHXqYaBWMq6kFRMHFRUfi7XWrSWKZfkhbaeCaj2X7ixYhTWBoGhP4hUkHkvVspprFb4qa",
  "key19": "AZ3K8fVrXheJ4pJ7esTgGXLiCTMp9Y3ehMs7MGqGDMbsfCSXarsvBgRBSwGwVaMUmAnr7YQqd5Beosw6N9pniz9",
  "key20": "3Tj6oPDGJXhjK1VZa6NTTqwhkMkfWqk7GhsgNM76jaaVvUw6Kdo2pSirJ4bVHmu3PGyifwi8ExEXLDoLXSFbJNKM",
  "key21": "2ZHvrAL6SBkiXZ8A3wVbVF2EjrRTsqCocHMdwtMnJoSSErG8DzVzEqoDTXotHQCXnCiWS9EFLjqCBjc7UirUKcLA",
  "key22": "4YrTurvTa4m8KmV3KNdCMF3d6UcAqVtjwE1BgK8eUNRJyVsCxYPJoE1ZrVfYr6XnFGyXWpKM5mtWuw9bDFbNAWFR",
  "key23": "LbVicwjcyRgQjCVhWTxNB77ZofMPBqpvGab8DYRKXAv5mpzahE92gxKtm5xA5AymhikBNQK3QvsJTdVqqx1DGFB",
  "key24": "uVvtu5sL2nErBiuBvinb9ynvbN1GxUe2YGjpKtgJq6PxpxsPLVq2qnrPdDvWNMiAALddDoUhatUhQ1TbETKzMg7",
  "key25": "64gYVhCEApyMD9NwQsijnti6GfDY9A4BVEQKonCHvfNTBJBwAWsivud3ajhnHbVeBfjbGbkgR4Tu2WN7x3WauinR",
  "key26": "5bbYPWqYfLU9yRinB6ies6Ki5fENcWdci2ri5qsDtzMj7hBZthDPzX1VRJ1mrRKyUS53TXTwAobr84fQmyQFvURD",
  "key27": "4N5Zmuk1Zot5rd5WEqGDhhg1SZT62qPQz8PzNFsCf5JSHaDoDrENx3Et4eF9H4NBqd5efrM7Lm6L831JFD2ABCkN",
  "key28": "3LyyMdCBMJPHFCgrMkmY5qqPjBAC1PtAVxGVspiPVav2AypQjRSpUTiFr9ZbqH2jUffnTjNCcewp1WXFLwuZxHE5",
  "key29": "5Y3GjgX2ymHnoTLU9Z1WSuByCjE51BMDGN7K1hr2CD299Uy55b8zvbA91YENx4sfQHR3BsCb5r2QHkiYNeaypWMu",
  "key30": "4fnDUdsftWvGFYgedH7g1yRWZyUNN7XVrESMMBU5ef8VTAq6vfzGGqfcjcDSduQWR1LgB4sqeEtqbgsxY84pKdos",
  "key31": "63hjw7cxu95VFX5dCViiHcwGuW3UV9avs19un41DVpVSgLt4BqKjAGEoortXjoCuvVr9k4aNy7a3WXDsFAbijZ4y",
  "key32": "GLWLxA21W1SSTBzA48ruB3yfg5YYNYdjPwN7WAp8w2ZCwMaQxC1Ad64VzEUSFwX17GSXJGpTHCPYtxEgB2ZjVVA",
  "key33": "2H3DgktmJteFawmmA3R9w8mNV7kG86EjpfKaiNXkmTawByb7enrvDtP12JFx138UNLWnd1GS3TJBxEMkMExndQXP",
  "key34": "cDf1E42WKy5XdqKQXSnsBRX5W6Md3tRhF7PZMTJmZdJK9U4ue1rwjaDCDHdQfkVkuc7aqZHuqFB9qndhEBBTcq1",
  "key35": "46TdaYEbVSxVUEvxAbdvdvCQ8MyebBwkzCZn8BLbQyvMX8pCq8pvXihKT8F6XbLubWdXcCT9PgT72a9sWgv1METS",
  "key36": "2FiN3Gkz6Xp8jgo2i226VVKhvrduruxrY24L99P9K2Xdzm1BwjBFq9vEJUFxrqSmsFMazb75NQk8e1iZ6YrCp6hz",
  "key37": "2Ajq7N6mvHJc9qR4d2WxELipQibHxmWRWJHN4Y81twtkSx8MXRaj5GCfi9eNxLZTrureDggXB744VnG8PyfWgyKW",
  "key38": "4kLMg2sXW4DLNQifqRHjmbwMeme1koWEuUDsd3pLpgJ2JmKtYp74VdUUWd7iysAi6K8itWpCSCBVduc54UAVEntS",
  "key39": "4hPyg66bVmGRyEJygeqnJRpTrCigRqvij6K3gzmM9eqFQCiKjNwisdUGmHQaryBGsH2qY4yMnLnHNn6teiWU9BsV"
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
