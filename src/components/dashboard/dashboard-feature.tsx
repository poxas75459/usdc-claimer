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
    "2RLyaCRywMC8nJBoXYRX95gUZ4Tv9EqDZ6PQAM4JWBSuEmvL1TjUxhXC731PSwVa9NJuwj9wr7sQiNnhEfbw4p13"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DCKaSHxmifm1KAWc1imbdK1Jcn8EawZny1GbaGqqxv3iSfB9yD2sFGckAVupaTzZJsfZQLeweox7uqekRTrnuVb",
  "key1": "nPKiQUpLTwgfjqhMm8KnTWezzT51GJ5M2PYv2cbs4X4f6T8uMyFcEmuBEFRzjLXsAKHyCBLgARJo2XfFK3f5Djy",
  "key2": "p5BNyw3GkgCCNeur6BB7121sLosFsaqd1zVZ2yQEmgpe3faexnjWwFTYsyADK3e2kP3jSKjRXAYm1DHv1cAm6sY",
  "key3": "4ct5nmkfA17pDtfiiLUHhcsXxqC6bZ9TPX7pUWypRTrHLkM89Gzw5mKm9ExUDH4UNjULYWZL2B9EnHb4Xd65uBAL",
  "key4": "4jMguhnDWbAGMM5GSQDpGEd3VXY3QFnAh8UREPtqfCpRmcLzPQeGUrBi52QtCV5vRPpTHANM3pfY1t2sEqQ1Xmxj",
  "key5": "5o8uK3SbH89nRgR7cUzngcSLaU4jN118reATwJ3miNYqYiyNswjtuAJv6fbXRfCRWeUvWXUquHLSk51B8fzTU5oi",
  "key6": "33By6gVgJTvBQMNBKNabRuMFt1HyU9JaJ7C6n3MnDQWCNSAZauMtnKzmBDre7Ks327k1WfFrqXcrNxniP864jbme",
  "key7": "3jFuTJvrTWVV3sZmNYRiV6Q3u5edqPMqgzR9DRxKXAg2H6nex5dXFyfEiPK7s9sVt6iePZbySM7WzeEXovUfqVxG",
  "key8": "5xWfNWrDWRzemQ8n9noXeYbbMnLDZG1hBMwddbhrPjc2xe8ojCNwaeQyDg4tAJUUbc3n3oWiBUsBLpMv9GW1Kogr",
  "key9": "djiQXhY5LpN6PWVy4h3Cc9eUr23meFgfkxUf7oLLLjK9wi6guJNvnRhgtvTh3CLvkC9KE9iYZfRDSWRbkZ9AoHt",
  "key10": "28zBhfMWDbhHvTvssEBq9yPDRXYKt7Vee3N4TrCUNMmfM5kydP5PxqStnjSPK5NdtGYEvcsyziBfVobrnYSYrLwD",
  "key11": "4APSXjFCF2yyX8z16Pgj8uRxSsvMWaqq7TxVPFHoGMV66xmYhw1djnNgR8BNNmDPCH5ELMq7ix6G9THG5q98yPKY",
  "key12": "U6KPR7sERh1ZdZU3BeEXsnZjTwPSt2ZFh3Ao3pvLe8ryX2UWMw26Jz9s1caaMWs3WPis4GwGxyq7y47oBzZpK5j",
  "key13": "2w176UZFt2yKkzuHQHGQymXqtetxoipTvhjfJgL1Sc1WvjctBTLiMJfyjKuikMWrtVAjf1mWVjKxQCqsdxfZo9AV",
  "key14": "cgFKs7p4YaVPSVStriVojkvwD6SWBkw49KaMJqaQvQMXaMiowRZ53dPsL7cCos1x7Mtv8AWLPHmqxSn5WNUnGWc",
  "key15": "3AstvHY43Wf9eyRixrbESMgmjRMEvgzTmepETj4P4aPWfPrtJZhHrQC28Hw2VhmZr2CK2nEeqJJ6yeU7icWfBDwq",
  "key16": "3yqCBN7Req6699sFUWtToVgKr9DUgpWnTJh9V79TPB1vzwmu4PFdvjmXDXwuYHgZTXJve9QV36m8Rs3x1YMCnGsJ",
  "key17": "5pXYcxT6z4Uy1PwHtk1BqSyJktx5dEbeurT7JTL9ymMvFdY4PbeZ8YwTgcZz2AMmT5QW1SmDBHeHq5EiaepL3doV",
  "key18": "46BUq7fgBfezRPsDBYF42Uw4C2rH2RnDPai8d5CZtQALN3nKxji5Qrqyep2iYtkdWAqb66aUvZsT6vcPRVrKh41C",
  "key19": "3LJkVVnQhocfWxMRCMc8rfQVZ8Kq8DKZMKkjZKFVG7XM1PU4NcZmjLi8eHXZzygGH8fzNFy5srKE4dttSbZbyKQ5",
  "key20": "X18N9SYJdZksfjz65vKWK3zchcFRAfG7iKm6ynqmYyZ99VYSWtUouEuDdbpSwrJsSRJ1iKyfGmQqp5UAFRUitxz",
  "key21": "2kbsnKGu44Sms6ZnyTFz1PSP2D4XZ1rz2tKmTaCC2MeWriMHBHNS52aRyoU1cmFA13BcJxgqX9JcpG1zdf6icyU1",
  "key22": "ggrJjvjRsodRnVYWthkiw1YHcuEvDogNbTAW46Z6D7fmXkCe4gDMJ6FD6SLMBBZVi4XhAiYJqyfVUa7EqjenbGZ",
  "key23": "iTuXpo7tQ39iFf4v1A8Vg43G6xLqSczxyJbwUeDCPF5s2ejx4pxNUeRNJuMKSY6jdyY9WhPMmAZH8Yb1xk6jnSk",
  "key24": "2TydC6PV8NW5nUY3NeMadzMqndTSPa9z4fQuANYVqrQukDPufUqQ2cNorzNU35iZzszbi9NKggaQg3eD8QMRroeV",
  "key25": "5zmYnvfkLKmzeEwVggG6vFY6osEiaAi8UobudKpbr3WuzJyFmo3XnkmeaTRWkJgFHuRuNKXyVK5Qf6ntExxLCoHf",
  "key26": "rtsCPobEybWAiMYSY4MKuDLDziXS79XM6aLFEq8SL7RnG8AD6R7RmT6RAQBCaZAcDXPXErbEPfvfTtFstNg68LG",
  "key27": "66FP3XuzC6S6oUPXmXVryGrMUHTQKB6a6nv7WecikwMv3HUrizuGQUA43TRBxtAH4hkL5bkfqBdKYxGmbtW1qKV2",
  "key28": "5G8MLY7G2Z1mFk6FpxTDc5TAJGbAYrpWY4NwNsHASsDJ6kGKkzAXDqYq1t9QEmU6cTCZmcW1exScp2YkWvLYQwk",
  "key29": "29HRPtkTV6kJYQLU6drxRJtXMJATRfMR1EFvbxmaVQ5eSUPW19mcYioeKKhrYJxXQjS3SUz2EhaRKN5RLE8uMmPC",
  "key30": "54rsbKGb79e7C128yaqbXyZ9xZ89LW7dnuk7HiE5Rgw5PCrwTeYn5xgPtPZHXCKJ6cUesDwzeYHBM8H7mLubbKpF",
  "key31": "LoK6t2zhGsBw1e84exzx6NdCMeSQpyPGXVamW9ypK5L7Aufrc8ZTXAwsVu63CdA8j1eYEBC4rdVpWdUhJacFBuc",
  "key32": "aF7oZvUXiLXgarnE9p5K89zhw8WXRzReZ27BbTydwghJmYbXLDSV7K1fqRXfahyKLwrfbKiYouwJgUCh6SpUtzX",
  "key33": "3UKp52DFm1QKXLqGTu7LA5xZoTGTveTX3rkHdKraqvevLhj5W2jngtc5YCeG95oFVr9RThDQzGP38ZBPdpG9zxLk",
  "key34": "2aftzgBk9KzrohFiJrKSo77eZ3zA61K5E64r6Mg36rdzeZQ6Zk2mYpMQiuJpgvZzCiUD1scAm3jsn3fYVMF84UhX",
  "key35": "4hwcnBYcdJj5WmdnebjYnDLSCqjR9ReqjcBASgAaMHQx8amRvECTjygJL1hPLtEFmpRNdY3mjePyxLbcFFxkKbwh",
  "key36": "3H6uToKghCsSizoZgcwsKqdEyCduQRXf2zdHKbsZgQSDZuBgP9fQQAoCBrtdjhhD3QWqhBZ8oX9v6FwRNPq2vH35",
  "key37": "31vgEarWF3Uq9jGgueQW3bzsjkkq55c2tbx5YoVzCfrUS5FjD7SLM58UDgdVx2nBxu2dTrQHnGM4BBMgTsW1gMV2",
  "key38": "2UjjyQFT4T2chc29ny12QK25GR2314FMnpfBSmjwMpoGPr6N6uYZXfCHT2kdwArPnekdU2eznRYr8zdG3FLRyZL",
  "key39": "4QCYy7prt9FBTfcwqbH3p9k1kkgpaFHrEUJunnCY5uTwtjxHscy7Sg8McQqeb1sMd1r3uPjvgzyvnh896CtbHd39",
  "key40": "bE4zSBT2iQKoDiSP4WVwBPqH8oSF8oFVrPrYkATBB1eF2bQRbEFMs7aTi38DXbDvDKL66YeGjTbrxnaV5EEVw33",
  "key41": "5eYqJSApDYtG7NjxZVr6kNmSDs7NjPB4b26FvqquNvPtMwv5TFZdvcGGNC3dhkETBRSVvpfk6watGKkG9LSshn5j",
  "key42": "4kpLowb4qv9UXv1JtQgHkapdQf1EDDx9JpZiWRoVc88TnDk1JbdZnmk8bKnDuBaur3VDnpDk9cGWUBWfBJ5r6fHy"
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
