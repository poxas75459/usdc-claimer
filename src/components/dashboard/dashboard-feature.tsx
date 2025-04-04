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
    "ScbmGWbFhFogxBHkxN4pxq5CcLKqJwPHfibYPW19efg3F6W3vvfWYhLqdFzT6CXVviprqj9nFEaNMKXJtMwT2tv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wdMdZPouRPW83tiYdDHVTaPoWiB1JCiTgdPfDD56Mau1YsbNC1TJinpRDvFBccLr8VePnFNLqKsXyw1TWgfAtu5",
  "key1": "45fKLUeofcL5EDn3pT3qd38yXdyaQA5wuPnUmVjz1dDqdr4ccuScN3YEaqW2ah2HGUQzX1nJ8hgyR3ZzVpg5uMzm",
  "key2": "35fn8StXqmpHwpHTFGL2SVmhjuwmm1HunUFygKWh6ijkqfG1YcbSe2WJ9TRjdEUbAeXWfME3baiXhkCJsNaoUo31",
  "key3": "5Ng7q6VHK5HjtSRYzbQATRY3VMUBiHMxR1ZSTAPeRjNRgWD2G3dSiMnVfA6GsZ3dCCixaaBpHH4Ta6yW2yd5bYzJ",
  "key4": "5vznZ8iWjuuRXNcEx3R61HTJE8ZKEJmvrebRnGyaeFsoXRZk45tuJ4a9WAWHYNQRpQ6Xc1LgiyttVDDqt6FC8B38",
  "key5": "3i2pa1NV2WD5cVpCXszZPk6j3uEGMSmMGmdCdzDgikf1LQH6375UPKYKL6JhwP5wNm9EuyXG5TyHmB6GbEa96CcZ",
  "key6": "2kS73vMxqALLx6tY9zGSVv5ejDcfgpzf2wZYybmVxsaQ3ChaKLkaws4UoVggUue9phaUdxwpWxCYK1LHLbM3UyrP",
  "key7": "4UHRiNnaFeoF1n2rejYWRRhPQfWvP2xBSrVBmNtom2GV4wJmFADPYJARZMG5fQSKFHGyH36Evk6MBVbZmYbjSR28",
  "key8": "27ZoSbi8ur55Kg7SxtcafW8xChugrGWF4rD4r9EErT3GjZUjxPBJ6K6UgUNv12w4fV9xfivUaXd9SkkaupnRJaSY",
  "key9": "eCSmqEFFi2LgSBN6baRkCnbAbt9pBQMHwyePocyim9rocgfy6mJjLAG3JMdsb9CzcPm3vmgLENrDbaRdnD4fX1g",
  "key10": "5HhWKihRmhu68KFMrSgqu2FeZc5XJD4SUTqf7qqsyDu4Rxa4tjkJ38Sr1sxv8MjprwfsvkHW4fGRnMEQNBgeRCTb",
  "key11": "NroceReDunDT6pVr1MaC4gtHJojXxddzFD39P1Yo5jU7w3BXx8FrVArjMHMkaL6H4fgvUWgBTdMpHBg6DTkqmVh",
  "key12": "61fxc6Qesm6zoVWC8cM4jVBTVhtBSBGmWe3ChPXMsUiYNnHXAU5Ppj45duYiAxCrBvZh8uBEUsEdoomjU9yQ5D51",
  "key13": "4sQnisK8g3nALKc84Xm2fjLDoDJuFDAkE5ppk3K1ZQLnWFTBHnx3zs6HDHd5qRPfowogF6kVEqinhygYcdf4dzF",
  "key14": "3Va88o9CmrZKykccooPH5LvYwuXpHSMWqGJfDB1dxRu1XwyieGpcgrWWZkZ4CMcXSW26APAVCMLw6xvQNssfb4Sk",
  "key15": "2gK8H4wXxHkk9fw5jwDFrti7ApsQQtYyVf5SC9roQbz2xeUFfEDApXZAnJ2xq8hPWtnkUcaVwuCcNZYjcBJ1fBKC",
  "key16": "3saT1zrnTjNvXMvroGZj6dQXUBRiGmn6jnWbgkkeCqCUiv1C3jRF8zF1V651AL6ZfXmWLwYCSoj4EeWeD8gY87Vp",
  "key17": "3Bb4tJ2y8DFgNPWdMrajW1uc32TCjdwJ64waPV619SAoQ4KKgD7KVg3EtGTYq54Cj2kKqfkhAeBNg2mvkabu8CrF",
  "key18": "47vxeu3uooGT3WvjtQhPxgfhvtweJyr5SVGvfQKJBQoTs5vyMLKdmQsUJ1S6yDfzxqiq57oa7MMbYvoZeaxMknCV",
  "key19": "3frCjKH5QX9VyJV9nnge9Yv1xiip5w6wioutKGucpEtLZknJLaHbMBfGeA7GCGW7J68qTBh4w2bPAusM5wPUPeLs",
  "key20": "3P8o8F7jduNPBQ4PKkq2CF7vWCf3VjKV7bybCnKySVNjctBLAnCY2UUJ7JdTLtRpYjZd4z8LT8iE3KTramaPJpC2",
  "key21": "4MTuHFPvGrmF6LPXmTwg4mWMAiK2X8Qm9jvpKWVoqiR97NiV8XSzfGaUASi3wqoLGEprHXExWoNEBTnj2XrWF4Vp",
  "key22": "2Q5tb6WhHkYUxjDfdh4Uz4EG1Zdqr8ffk7vcHEpMddeSG9Jif2NcMWo98trdzbF3diFvF319eLGJRJDDTEypdhKV",
  "key23": "4ZH6uZAXALV8R9SD8nQQ8h7oB2YHXvckzJ7QeukbsRtMBW7ShY8se6jHgCiAC9t88ibRgG7roDyie49Dx9jLArNW",
  "key24": "4MuEgHBvr4q2gs2i5fXxvWHn764x2zBF1poRyjLVGCfsLNH9gy1KhSrnyaBHWAHEuc7uwt81i32Bovg1F7WmaRam",
  "key25": "4SaASArMkCekjXt1VTYD4GfrHMGmGVCgTCwsDAtsRa6VgpcjT5jdeMdyvoodhunvHgqCxuzAsRCbG4onnCLDvaDS",
  "key26": "32DgwuKzMCf5e4Bzj46YxfSz4ShpHZwiQj1E4TxzUcHt8ubZJKtLFZxJM1aKqwJf5QBXrKRueigG9YGLXMK2Jbzq",
  "key27": "56rrrgFMD8zeYf9vHrs7NQSoW4pRYiR8c2rMKpiFvBsSUtesJ1HkVfhv6EyAps5327MM7FdDDQNgw8hZWgfQwCAR",
  "key28": "2ETuH4eHVQ7mSBGN9QaFYu3xV8P3xGeFWfZ3mRTsrHJHEGCpaP9jULgqws5D4ZDVnfh3DX4QwQnreetskYmsQVTz",
  "key29": "3k65Aj3XnEyFRfPBTwoHJHtXJA6UBCskRsXrJVKfY8twutznASUDggezPBaGYFSZrQUMQcZ6CJZyDYjzix7qmwgJ",
  "key30": "5jdHUSbQ1sSrVYfoQtzX4M2e94S6Aoudq1dGdrUqqJyvzYfaKa9LTeRE2PTYioxJcBRRV5oLHoBWmALXjXfwo3uU",
  "key31": "5y8zEVaomk52tMHK92pbygVkTfrXh5JZQtcKJm2WzDfiWrPtJeTocdVtm1F8tzQGRCYXPpejrfhdtidN1mkFr9F4",
  "key32": "2SNwpygESwPPjCuWScF8hBTPufhoqzhvjkgjc9iTET88AaMU4QZKb479a8dbfajC9Qt6usyrkKfiJiKfB7sbgf1"
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
