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
    "39E4N2nsfiFd3c9RfdbCNjmncjGE938Yx79g5eNJ6e7wZ61s73cAPopNtAAxkdN3MPSVdAAa5nTuPoWqNxYeRPfK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48vbfp56S7Uq8qnN8xx8SLYBmUbyzK2YpB5Y7nqjyyNrd8ZzPiztxFG31kSYhEUoNeNDmNwPWFXp7Rcr9ny3MLm2",
  "key1": "5Y4C5efrGGZ7jLgzPmyzAiUiavJBFd8vHyaZBeEf8MkWSQ3FMVWi2iirJwGBLvmJMyQoBhjbqZVMzs4KDCSFVkfi",
  "key2": "2yxGZztRkZxXJs8YDx89S6QKBKkcHeJ91eLPqyq5qdBVxBKwQ6B5kNCYBoepTX1tw1DTT7n83PKoE9LxNggNwMdY",
  "key3": "4YbS9VG2V7cPEJqAaGzBKm7Ruo8BuBzwqoSvPP1Q31t9onDu3wvjrjmSoMbzNiFxuqWzxzNGinBXkiVnnqzxrS6m",
  "key4": "4sGEU86kFdrG7e47N7wFVoJBRu4yjE4X7ecCd58zfx6huTNtJidr4dmfwj3Z6uNTgsBhKsoR2dECbk8Kb2xWj8Cc",
  "key5": "26xtLTe2Aka86rg44ENps6dBbAWyQRpFmf92xwEGWFRtTx4VupNEv2Hb4gmDznwbokZjCy1TTYfYqGwvkUXPeJr8",
  "key6": "2ix963BFgHRqvg97JaztsK2KNHvgypakZCQ48tDXN842ut1nULDe4jGhLKSUzRCnSoVLKwTv9PxHRU9TqUrktQ6V",
  "key7": "31EhuLnXT5pin37tUXcGWw74FV3hbatH3UYxCf1Zp1M3yhEknu7FWqHReNjrTn1CZcA1E6SVjKxf2UinQ7tHR8EG",
  "key8": "LeAQKDnJKJfcut1J9EjaTNcPJ4akVSvsmpYuztpwopeVgLasKToo3gyX7YRkR8bDARKYv3AgS782Nh4fWd4bADB",
  "key9": "5K6Wt6GBrqZ5tdgZEqN46Ta1KfqvsmxgZZhnUzXjTLY2P3VtY8N7N7qrtxUVJgfgsnbVVmed9agZZtk3xdTo3SNX",
  "key10": "Z8B4jU1Q85SDcMzDnKYP9fyt4HScN7kVkebc49Zi3P11qyDZB4rDEqdseGE3DUpDjbhgbzBW2KR7TzsQUAGsEMU",
  "key11": "4WrBQ1K62bvapkhm9p59MpCzfefUFJ3ZWoVMvydoe5gETJygEptqfwqStmzp8kxZhjWYWhQAcQJ2HCPnrWH5MnUx",
  "key12": "AiE35r51p4pb59EsiGzCEVm6L3WSBoaAybTSitVBt1a7gcRWEsNF1NHvLbQiKvdSxJuaxrDiwLSQrcW9TD2dVm3",
  "key13": "53VVnpBbxdRxgCx3gUg1eL6UwCSu7VqM2yLLyq8Y1w18AL2K2qWgf78WPUCsk9gej3txQKUxqAncDxsoDf13KLs9",
  "key14": "3sn6bpGYVB76ETVHtfbqEQna8xDksxeNTGTtBMMYJuHTQB85CyT35ycVZqA4M9n4pSBSeni4vu2jCzN2MerW73s7",
  "key15": "3Ziu2QSBFENJgP5yqNnSivktEXr3CPJodVRwdZR1JQMDcrH4VURrM8AfzvENbQcsWjNVdisYSMbwAwPo3vP4Q1Hv",
  "key16": "5TUNTKxvTm7mDXU2LU8SdfykmXr3tB95LwnPnS35Uag5TpswSPJY6qRJP1nS5WMCpscvfefAcwt5yeye1sa3N4sY",
  "key17": "5BR4trBus677DJ8ceqj766FV1mDX2TyKn8CksrAbgh6fmsoWm1LJK3heH7rAmsHZhZmrnC4iFhd1SGEXfCN6nMvt",
  "key18": "3nyZ6o3cM2fDcpjfrdPxiMDx7DjB79Rg9LbwknNPYHwSgB4ihh8vAr6xG5kvXWSRJXrkEMGA6pACX3fCq4d5yfnd",
  "key19": "4drWfsCePNGLGgxuDVPp8SdFWhBYxn5AhhbhLguuDQH877b2yU9E1zFWcQqb7HZx5FGEw3F14FCZqPPdYzq2vHeF",
  "key20": "2i3J6QJQapoiwwPWg7sp9JSY6zZ2NAYe2mApZXdhvZKGyNAMxNgr9y28PNBAjfgTnNKB8h5hnhqwVA3D8PSKWiuh",
  "key21": "3rHGstkj2wTtzUhqvT6QF6SihrZ1PomvUF3gK8wCcEj3mPe7G9JHYF57K8UEwopsSB5VeoDyTYAza4c9MLoxU2bv",
  "key22": "egiehWZK1Tmt8DnujBJp1KEKj5GwAx3iNC3mHQJvSo64vK4BvUMiMAALaC3SNQYJ6BTpJqME38vd14uZaNQe65a",
  "key23": "LaHVCrwu5rHxW24ZnYDSu8n2psErRxZbVdM56TPY2mSwWNQaZ4mrFAcNBSJHu7368yMvyi7Wc5ycv4QP9VB53tQ",
  "key24": "3TGYCm9cKGUzEsEQuosu7jQE4c8GipC4fUALp5kEecqYBeAvdRGSG8JrvRj7SSGw1T1CMw3TvKikFdLNyiyNvLVW",
  "key25": "3yZdhFZTYVBQHtJZ4e2LrapqCEXYiztKiDpvk3pwKStJxU5YLtUAuBvrd2Reem3o2MPM6g3Z7Q6fsfw4mu4wxxYH",
  "key26": "5hUFL7HBi6y5PX3zaMMMzZnv4dBPejRMcfUKJm8NegdXe1Mp172WsQFLRrh4ASrqJNF3yTjDAzGW37N9fWim7PEF",
  "key27": "3XAzizkStnZpcLJ14XZDs1hemgGWHfmbdyD4XirXKL5cWEF7XUL3JUdxLB2AVUq59Jp6nwEmX9xx2Y4Jz7ehQPne",
  "key28": "4jmt2wqdJkmN7UeGyKaJeQMDKs7U7N5KGA911KYGo4WQMn1qEk5NK1SyaKTCjBDjxVFDiRbPTfCuFxS3rF1wBSKa",
  "key29": "2vdbHJK761vt3VgijuQZSDGfehUSnAisBg7YipZ7jGRiAVjsHJnZjFLtQsnjYaNLpZLcj5NCxxJRzgcWU3nVjLDN",
  "key30": "3KcqPQMNznrkci6LABRjGVjrKCDTA6283rXp2GtmqmkWKKQLRMtcc6tp8GjNaBkx7HG5jZFis7kAscrnUhyAg3Kw",
  "key31": "2xbnoUpNxPeDGPvPtXAoifgxL81akd9PweUAc85wZaqhhMvS7Twshseyyuozr69QPPJUEvQqPqVb5VCiZDgvW33D",
  "key32": "61TeTKG5ueC1wYuYKQounSUQnpkWenSXW8QCyqH6A6F82E8pBPuZ5kMxRTgous5oYzw5CdVtYX6Yc5R2da34nrcr",
  "key33": "3fysfv4cBLE9VibRMsYb8goe58w5TTzSdLcxYHMCD28ue1mAVKxdcPzMrmYTnQaiS4oKNRyeNBf5xmJJy8n68HoU",
  "key34": "45r1qjEdPxfjzLDbKm4zrNSKU6pYoYnLYNg1PmUemF6jvfw3wzD7bcsHUGzHU9huKpNsq11HZsuUA6Gg25LqrBib",
  "key35": "32SgBp7rKk5ncYSBPdkVmdpJMoEjYLrjXdZ8rvPuK3riHxCXxa4ERcu5jswzHKXNYdBmemQAuVjsRXnRCh1YANop",
  "key36": "34ZzRNPaAPJFmpsiKJp3wyc5Q7xgJYNjqWvX2q47kJMkStYdhB2cdhyDx8aT9av9rwpBJRQFteGceUUaQsqnbpRo",
  "key37": "5xKWcgh2GjNQmfHkTRbVFGAhX5anCHCj7CMs5rotnGmLz1ULU8zrYqjLD8DdiLjUjQDeygjn1Egge6LmKTnYD1YX",
  "key38": "3LxgsteQ6LMPfLFrXDCyjsG9jAzdYooxtiEqirgWKmwP32xy3mwoiwisiG3Qcy7YvrThq3htMmtBA2DhuxWSxLku",
  "key39": "5yQbsj4kYCRvFVFC3nAsvTmJezD18SRpsdx289rGiRhiTr4TjxFw7SRw7WSTkMtyrQeLaJBfrZtHcmqL3P8E2Mg",
  "key40": "vRPkArHsqPVa1FUK39WiYnsydp9nfMtcPgdzgTw2L2AMFdoJymjvmdJsQzpvqqgoxku5c5Vsw8QEY5rbxATvQs8",
  "key41": "2PDj1MFHMnJ8GhVRX6GkGy2gUjXhsKrZQ9Z9Fu5evscbTwjpD5nszBqLHok2Y87sHBReDVuiact6r3j4gQYdjYxv",
  "key42": "2kxBmcXFgXDfzDkQxLaNTSnXcTmWYWyyQoWCyQAe3mXGmQmB71uNSbAD4VFzae3uPqt1tL8QS2RyMwCP2ewAP6UN",
  "key43": "3Uc4DH4byonrzQJ5osTQGLzUoDd6CzeNfm8kCLGaxRQ42sdBBSm579QZcc5CykUoExqTmmiYVEdc2SqeVqknKph3",
  "key44": "4N3n1oiqgG7EpCWti78JxvL7k43pbKqfov98C4opaePDs4bzvrzfcoWnR9NRbMYdK7qMq2F2cDrcHT2SifNoFK4F",
  "key45": "67nD96ZJz55oasfb2YG6LpbYhAJx86JK3jAJiWPr4UKqY7VMvaDn4kXLbPoJEQLmagXAEQXcfCekAxybCwNZzh6V",
  "key46": "2VyALrB3TWiasPJ9yP8pVtCfKtoNRwUyh5EWQSrk8eVRsenbimSdL5rk9cAYGsuqBQSCdJ9qpXpx1GMcYmN12KCy"
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
