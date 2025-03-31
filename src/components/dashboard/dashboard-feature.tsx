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
    "2uinciQkDNU7BVbiV5ShNa81NkHrK5nTK2icQ6PZMTtCyWLYPQbNfa3oCVnLnvwtHiDQHbBR7TVr9mYtsBbXgFeA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KMzFjNzPDggKwk1RS1RTdz2nUWtv8forWJqEA7sntHy2XT5B6THD99Bh17zQt2qYFk4nYVfQxiqKxmVw74tLcHx",
  "key1": "5Hncqs2J5dHjgC53R4asFhSesQsM9ZN8GNKefj4f3RVHfNpGoCcsfWKcPhk93m1DiHhEbqa4aqx9QXV9kwPuqoLD",
  "key2": "55MzNtZcWoR9F64PkakYDR9GQuXjHnEabhxhPvK7Je5WZkMmzb3vrDoQcYGSrVEbtxxPJBNsKJqfmCeE9NeZ65x2",
  "key3": "28jL4TEF48u2gHFNRp3PaLCkWw4EgGCZdk6aKukpaxbvd24mPR4btmqLHVyZnfumHwBYmGuUHSQEw6TqxvuGBr6z",
  "key4": "5gdCdHuLGkiTMu9PvtLFczyGpDsYueKixBTpBQ8Drz2SGRRWGXugkaozhHah4zK1Fw9YGkLKT1vzEcYEJogTXu7Q",
  "key5": "4jCepUteYc8uDak1Sef9niWb9khLhwq1DqkrnfUgoCjDRKdPLyR7ksgxh7qRkHjb9zWXdsuSZvzzNeZn7aD7Zkqn",
  "key6": "2PJgFC4jQwKWLMtsSE7QcWxaBNFrmCvWP3rdNbHeQsDrfTA7ttUmsntfeYQJzztP7CtmVyALsCmdk4jqM9DNYe1h",
  "key7": "GjcAdBC76V7yVs7xqyE8WKvPD4Dfph6VbxhMkc8K1geVn8zPZiwPwGAwnr7cW5fnDxWDatR2XGQWwGBGZwrpcsU",
  "key8": "41S7UCkUzcUMSDe7GYzQ3XUThauagETaZ4TC8PyS8ZELWUPWSaEZAdSLHdtwqZ5QGZkGJVVRMBkGEeKbdp9JX5Ug",
  "key9": "5nC5EZkmBcfNfR4oCmwxmyKS3DkGbRmL5oErV1EmefBLqPFkWuoGRJRkUsybSf6h5XMyxt3dNCirwGDET4GF511e",
  "key10": "3uBtmCUbKgchEt2F8jgVuuQJZye2NwFxq3fvpQUhNntMYxMJTEfxMugmdubxXDkGAoJnKHzAYeg8uXhDYcRCrAFR",
  "key11": "35LzoY9NGWYiJvzbhNbmP5CtucxA8s2XFjmgToHkP7U5KWrJdhS51BW5vP9T9NimSbZaTn18ezjg5pzf9BAqZStt",
  "key12": "3vezbqtGA8KmYBT14iEWyUL5CTuvxV51iJbGkxhvicriZJiRqJbPKffsPmYmQyV2H1UaNvYLJ3XDada9iroEZTdD",
  "key13": "3gBR2uVvyN9hrfMhMN4fouHcEi3eYM8Q7m6kPrkSgHg2W7F8ouQcFkQpcsrfQqF8fB8BzRJ6T9ksTJtBJjPjniVA",
  "key14": "3JJfaVsgc9wXu9nBbXdoTNiVRQCSbDZvpUG8TTKqV28nUNKf7YRQMH7zG1AKMWByLkW3DDmf86Enxpek4Vc8gCoS",
  "key15": "UhESeWKY2kgCtZvgThqJNf5wFWPjJhEaUdGYsfaSezWBgWLV4eYUdzoicsPM86HtavYmJQjNLjKuCEzvmKMkJic",
  "key16": "35Fauz9YUoNS86T8BQSbk98PpE1bcM7XYKQdVTvtLbGyBot6RfMtfao8rYCKir1j51MV3Y1ekxLTFfHsK9TvQjYr",
  "key17": "5TihnorEEN5xwZq4krHnh76nKR87jB5861uurbZvHLHffze5WpD1YgcBafSpnfKbkzCNzSQrZrjSWF1ULpZvUgMf",
  "key18": "62o6XhXuZrgFU3cTnpENYFJdyfub5z65kXe59Meu9kZtxqr7LQxTfmKrrKorSs9Lkmfat23Yh5F1oodFm2Jvxx41",
  "key19": "32wr1wmbA7fHXc8YxSdpBBWqsAxoMsrA6bLYP88YpRpwUcY5tDn9izLr6Jq6hfrfoQUtGNhqUxzCvyDVSi93b2Cw",
  "key20": "3b6q2T27uvaD2mVptfhP6QW29EXhmCJUaFi5yyNHwP7erydhEbGHQA43sPZ76LHUxi4SC9uoLC3pvZ6V9kHvQRBp",
  "key21": "561mpqVbBMSoL2sFneEZJ55jDcdyPsH9jMg5XyW8k9YWdLt23XVa1ukfLymPqq4xMEBskZp6FVt3nQ6QFgTodm3c",
  "key22": "3aojN9qvBxABXm13u43FJ59s7iXmuhMH8xKuFpbB51ULyN76c5av1FHD3uzab27Cgb9bESWyQtQMJMKThJFy3pyL",
  "key23": "5VWrnqq51exULwNuk3H9JJY3Pk7najUGEL95PTDhBCY2uost7fb2XF6UNwtBuc58wps5tL644sss89HVEpcCQsDa",
  "key24": "63633WfT6rUgGhAdQcHXfNyMDLqx34zPREjorKBRunfH7voEJJq5BbPmoBESdvTYxP43gyTSHpdWqmHwWFBy4g29",
  "key25": "4JW7gxpCyqBQYYiJons5Yf1PevF6r9VHeTpUQ1Kq3sBAemXGfYHzrDHJGwtSR22kVopH1LJrCX8PBkXBkjfqtwZ8",
  "key26": "3V9juFWsXKkqESvLQ7Zzn5FxAfoKRLyQAVK4syqwrhbkuLJt5D8p3UKZkdJgqnoRHsQEXX43QZXRd6EBfJWFYcwU",
  "key27": "32LkhKiqBPS68UWzfgLhsoHQhkUdAPCnxiCJBvuAsUHUVdrAg9wDgVBMiCiLSw9TRxydkg9RDEza7XHtqDo2BFPi",
  "key28": "4Ct68SstUadDytqbomspwUFoE9fQYdhvVnnyN6U24W4kwsHYrVN8JQGz87Q8r9RogaRtBh1qtzfBuCft6PcnpT45",
  "key29": "58oS54DMJuVNnVxKbUPT3isfDELuvCmGBdUVdfT3jcz7m8biLg2P66ADYKMNcgzCW9aFzFSBrvQ4sz8haGnRF3fe",
  "key30": "hij8iGddTU53DVKnc3qpV3CMrZLCBrgjwgvqCYqCaWJerGqVu3h1aMQk7eeLeSB725EmjWP6rXzQpxTzv6FjQsW",
  "key31": "4ANvmvB5JzacE8cvG79kWFsyhi2fXfdy4mEhfALHeVvsWDH2ooUFoZGhYcKBKD5vjdfMLq66NYNwBpruGBc6UmMo",
  "key32": "5kzMhfGe2gTTtKM2ABZf6hVgJQbLAxgXnZoYaf5Zn4WGRtEaQ6vhsuJWM4ZmkwYQHdqnbYBuo9QQGdhjxcizQVTk",
  "key33": "4LhrkCEvHb5fkbbFtihM3sS74xgXHd6tHoNvAN4Y4UNXzAm6TCwU2C9XcKykwp7S1YoThPkA8sUfk2vcDuu54cvC",
  "key34": "4dP4VNayijbs9zBez5HKT3ShxGzp4XT5bYTFaScMRgj5XgdCBhGHoAxhHAmtKg2M5L2BxRwBkds5oDivhqqMhKbd",
  "key35": "2DiTipFKtcT7RtW1Y5WdjyeBzGt3PsxamocRzEov6uoSStUH515fwhVVBEUA4CFwPdRqfu1mkipSN36CqKJBMwJM",
  "key36": "2YXJ877WNc8MdFnWxgmUJJPjaB7iXnAa8haavR2Guqz1e2jVU1j3sJJpygAB4ApBXeMQCHjXdwvBMGQkPYeJNt5R",
  "key37": "63z1N5ySMBgXfNozaBQKeP6Z92jWfoyz1mSmnErrDL1vL7YRpqbBK1QnyEk3sQ1aa5SzxHcpoCrGcnrVPFHHwBYH",
  "key38": "3SWxjbsgA1xuWiqoBzWJrVsdFd36gNuTVSGnzUC4UgkTF4dLMd5UpBPnVdjF25CSCqdQ7yvks2vXr3PUthdQjCWh",
  "key39": "2b6bcCo7RgpzivjBcLP1ePtumCd29Jg2PtM9pvEwaSbKqk6X2yfdtBBQVvpcq3S2vcR52qd8i2FojAuvMGLKJG2z",
  "key40": "2cm4SVrTBs8Ekm8roUfPABP6tvgeScccixEQkYVJexBhYZWKbP2ciABerYEiUWZryfXomA9N13r1QMap5DpVSgwx"
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
