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
    "461fPojR8ASANdK3n1SvGqRvCmHSa9yVPDnJu8oVJXKmvr5jJtH7fkPuoYgfHq1iU5iNGgHiLo6R8FrgZGe5mqAw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a3cBUrw7bFwAdZYFKaUDdtBzhJGyXwSAuJyEjg4stKNC52nACR7HwDo1HuzWVmBUUr2UffcnuyJqZN8UvVfqj8n",
  "key1": "29Js2cJKyrk4Q2RH3x5nHWwvHiuBzypm2y7ybhhWnha6UsPq1wB6DXNjuEVh8NcVdtJ6VD3bfCwmTde2HnGUb43m",
  "key2": "7NLB4JsHv48NRLtR63MeUeuGtBz3uhED3ghZVwk4KsApMJZuUeLMhVXUjjFfzz3b6S3TLgtfgfB1yzV7c9694FT",
  "key3": "3HBLTG5rnLhU32nhkvb2CKhdz8Fi9NrBxgyvAtMN7KKvs648qvWcXYWVG3rzXpSnAjfEKFsZSp9mo9Dz913SMR1n",
  "key4": "3kwHTaGh2e4BLrcgGqnmHYWzcAJkTGzAYKenCcC19ZMXGtDtxXSghVCatPJnzsLUF5xiFqSzDUfdWJbFatHuFSF6",
  "key5": "4xwZogLDqTTyq1RNvvp29aHn7ksti9aWw8Q9FmrNbxC8UqVkumChXyDV9wixsohPc818SaTdG2Q3MBtHj7nX16CN",
  "key6": "3q28jfCTgX8oKFtuKHWf6tdTWLJUvyg6eyZHn31uDwEzUYQTmiNg4LUV8ApThVqHN7u13JVEiSWxFKnp6KNsTmDA",
  "key7": "5cC66VtmmyF46WAMYJFGYo1M88KCv7dVgwADNwkE8C9XQrtFi2uxYJfbsC59yeXeReMiCUxCq4YM8ZZwPSfkzAGQ",
  "key8": "4cgDFpjyzQEfsuUnDT2xrLASFEXVE472F34SiGc9FoPv4eH47Zp4r9kXPCEyZ824Z9zVWP56zZiuqX8Xsqz4hge1",
  "key9": "5FZ1HfCg4SEuQKQEGGZVGYDCKqmzDjXk6U35Aq6RMtxEgPPWS7SoUBcU4ZYQBXQeDZNzYXu9w7sKFbibykXSv931",
  "key10": "31A7nimCgYbKKMoeHJXyAp8Ka9kmW5sLyRbjcDBRA7JwoFhsz5wfo9zyfDDHp9dbBmBfc6EnSnoiYktgM67PzKDC",
  "key11": "3xFLH2HeiyYeKo9MyrhkkNm3sanqZ1jSDcKqBfGUy9KgVdAAD1xzjHsanATpqgRZtiMJAinbnwdFzq1HNYuaB6CM",
  "key12": "2UGAfxJRwPwitmNzhgjXPv3Y1Byu6iZwSxxEjTHVSXeYyGMpjK28YmVWDKSQ4U9PeGq5svYL9mQCgMD4C8HizMas",
  "key13": "5gjra9prNmWcWfVXvnP1KfZD916MyQJUPLditmjnTCS5UwthQpiMzxbffFgVcyyef3CADZrFimEHEgv8ErhsfgqK",
  "key14": "2gb7bciK9ksDLdDiGrVqVHDpxtddqemhfwgjAXPA1dzpFig9Upm7v55gpHEscLbYHVuAiy8ZwANxCRK8U995n4Zj",
  "key15": "sq8tcJz2AtoUKr1sY7quQmSfGPdK56nwtmqayz1w1Nmj7HEtUx61i9dZF1wazCFEEBy8yNFBzqJ6Eearr85rq4H",
  "key16": "3gPJyHj4KpYVY9ZdxfEc2rUXvtDnN1Fd3qWaf8LYFbHN6nMR69gbZbSVeLp79UBSPp87zpzSqCA2JZ3sRY53kjX5",
  "key17": "4TtTPZdf4Z14qvKdbSab7uMQKmVbki751qD3st4QTTvaJ1BggszcgJtnMtf8atk4rbnSbvFxHa7rRpt5XJDj59yn",
  "key18": "2ywkNPshT56BCEPSEZXEzUpBv2yRX6pWfpvvZn1Ts7utrdKfuYgab4CZvwpPx9WuydD5Ym66Zt9BkgoaEFh4dvm2",
  "key19": "51W6ywPdj6cSn8gagxM4dXSQnUEE2tPW3F3acnL164YQizbBsoKRv9DqUKGzoks1bkfuYgL3vP2LPi4735mzydBb",
  "key20": "3aqkagYuARxWBPeqeDMAne7YMppeiPNP9sXXEmuQzgKfYHjnyzRYtSwUVC4SQwBg1crxGNHpgynadJC8s6nZuj5a",
  "key21": "4RV6DAEQ5HCDV9cYhDbF1jDp9pkJdYkBkWBt297HZmXx5zzCYMzKs1peUEyBun42QETgEoPANDp6sZKD8whLmnYU",
  "key22": "58j3CNFychHznnnUHko3ehHQJuncdzhvojoT3jbNSeKzrCE4xc9gxEZdu9RNTj7P2L2gi8yUjCvoaKjD6jukmJPk",
  "key23": "5KCA2PsiXcz41pE6G5vQEosFHPA2aozmEqsx76ecuijwmSv15EyZtB3qD5JMHZQjEfSWqzYC64XG6DayYDjnzrSP",
  "key24": "3qWZj2HMCNW48687Q6Z13H3jJBensdSAnzRanLL8pi2PeepC8KkAYsv1GZ6zity5S455E3vAprwVF9bXY48q8bAQ",
  "key25": "3Jqno7bKQxsYc18YybFAYT7nu7ZqNKGnjwPx1ThiAfv4nBBFYHns355Cib8FLVfVemaFApCxhCaMxr1W4gfmChpa",
  "key26": "1VQitLNwpjCGHfquZ68Mt2Hp4qstiEi1L1QoWXYzq4Mxt9jABHpJbA8ZeKZXeTURtMKjibDWi2NiCkkxe2sLrTt",
  "key27": "5RQ1APREgP5pwNyxYBELDYgQoJr1HQ3wMBqnz2fYm7fFM5P6pBNbubcF49KT5x1zQqpJp4Ypi9kKgR7dHSNjY3VW",
  "key28": "59qNevFQKNJ2fmZMW3tTnTTnhx4eVTMsEtJEiRQRFr1uVoQ5FtAUsP7SGtX9TK2HczbcL81jxkwS5ysTHWLJ4PwC",
  "key29": "5oVHwdfJui7trMRTc86ufKEtUVdprpz3kpZzduMsDDJyJKJmvR9vBcZjVwmZvZgiQTJZcPL9GeoZ4F5goXFnhd6Z",
  "key30": "4ZCEz4EUSnpNYVSiYPFYDsqFtBH87AHAszRQetv9RFDCT1DA69kfvUSFLM4S6XRLMCdZPdFacCMTR862ts5qya9m",
  "key31": "4ftFEsBJpGeCkTY81Fv3bqQgBBWoN3NXxdAFeQYZdH8Ky8pqUM5acqV8NDd7kk8SAMnPAFLMsiPwYnwf1SNd9KqH",
  "key32": "3FbHNjYDstX2bmPsNvdp5pGJQHxxJoUXFMUUjPvT12pD7RwJHTv8XGLSCCce9w1gdHqTi9xj3mACJu1TWBaAWRu9",
  "key33": "yNLftfxZ7quV7Gz1D82jPCKVkGBprBaTWFBgb3VuPH1CbLj9vMxTcKBimDBs2EB9bQWpgVtNw1paZYCbjUEn6Kd",
  "key34": "36JVj84P5s6h71apybbvMsAHH6xoTn31nCFbHUPRUVpRjs53Qxeb6YEzpy1xoLH8yNgFArBtnGBmZBFaCLosAPTT",
  "key35": "6b3NcQbRau3G3Reh3GB1HGwhpjyPrdx54uEmxoThhobGjvAYhKHmwuoDgZtd1L93TbVpfdbQXeMRwK9hpoPKKub"
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
