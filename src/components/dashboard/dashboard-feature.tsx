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
    "gVpAgjH7zJQjMqHsEX92veTjut2Uty3EWGcnEPoP7dKeCbxihEioXdF8uAsSdKbp4XLoC8MVtW8uRbxqZycKPwH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iAQyAWdxU5oryWvU6BNumMLksAbaLuWRoFsqcPrptVznELWpH8Usc1HcycW47tA7cpdptNHFs7VpTyobaD3NjoF",
  "key1": "4SN9ciB6vEcYNPhmPfKJi7t2vrqV7hmyBH6HUEQ17ZWXDH7RE8d1iBcM3owF2QV2c11PRmGPLMmKzfmB3UFfXjxk",
  "key2": "4PvTStaY2vx9BdSmBU1kPwnHFnwsgf6kwxVHoHShovtGuUBdAWNMkwjrBprrZZzbVxwzSyrqaz7jRoCSoTw7PSog",
  "key3": "3vkxqj5HZTND8ygvRZz2TEoFdJbCGbyz9PV4UxCvM9esjNEKKgreCwg2uvgz6gCCJpbS7BhJK3V25rsREW3nHF6W",
  "key4": "5aPbCLyW9VAfbbspH9qK8eTZGwjr3ovCmqzk89QftgG7sx7GF6ZmexvkB6hhPHmYyzpzFmSNjg4moH2uPzSuD57r",
  "key5": "5gU6BPgND9HCkpAf7PXaU4tzZCTJ1iC9Hw1D3ToFVXFhk3vsxTf6SHyoNTq631wmgRxrkb6apeW2F3VTVaZC35BJ",
  "key6": "3UqZ39ND2V5dxM6ykVC31oELmMjASyw8UxYqT1L6vbdmJxfhNa2mKUGBJAgNnSh9rGmHQptKorfb4vw14wnTJTrf",
  "key7": "5aHCyvh4ePRy4zJdQsRzSjHZiM6kcqdTaEUmJ7SEoL9kpTw3GT3WzvMp4gDphiDo6HyMaKyx3PRDuTmZ1y8pGMP4",
  "key8": "2n9CXs4hVgSXcZS9umEcQXH7Z9KtRsXSFemVVAuGooYzDsoeZuuDfxazcnzbdqHA8ZssBuLiUk8XEEGDKJ9bwDPk",
  "key9": "3n9vWBh96PUmJix7RxmWXaYaerjYnAfN53ABTsAbfBhpuRq5bEjqZnhLFeoRDCnobjNWDYKDbZ5a5jTd8ntrmpja",
  "key10": "3gaEVLwFtsd2pyT7ask8Ko2bf8i4pwdSiwSvDXmGh8ATqnLCRZzBMTCYncG8UGaKKh7VVPmsiNMUy39wph4qGAkS",
  "key11": "4x4QpDyE6DALotpcCGNhuALHrdHSZyzJn7B1GynM7E2MFVycGvb7tctbQammVgDw1DBcffVFvd2Sp9L2TSDYJjSj",
  "key12": "3H7EWEJBCFiXhA1MVcEV8gF5TSw7sg7XFoFN5Bi5x8quJGXwDgbir5GLGA4tQrnmycbeXfSSLuuzyYfhNwR9AqEG",
  "key13": "4WSDTmVWJK37beF2gDbqoyQ5YUaVt5QsmBifp34Ddk5AAqNfFjiNS3uYmoBbEai3oRadUdLqSpmPz81PgSBmTzzs",
  "key14": "27UnPBqP2SnoM1dSodoU1FZij55V8dqo4RAPJ6ubUf2k24n4W3HaubetY6nwCnkRw2UePPLtiHqmVVYAbYcEGEgq",
  "key15": "4mVXg727Nf55Nmxx5EFiDmUDHbz7rZR8669piMJpmhvGsAkikgGtdFwZysRExxcpgG2PnRA7c1WzodzA7L4a3QaA",
  "key16": "4kcuJHAfVUPmaeMTE2E4QBtxBXL269QxcK5Z2gTWoBGJZjCgA15UD6EmzQThv7MeuixMEnf9sakQjN6p7sdB5pHS",
  "key17": "4WySFtwPbhFjSfy5Wych4Vjzbu5y5HVT1kbyajK5ZEXKPCT8YSZJQLGsgd9B6GKkhikjkTTAzeY3qYR1qEdsNsVH",
  "key18": "4oQG5wmza9c8i6v3RjL76E3fooLpCuG6JvVX2136JvStCD9nT592ZchUXhuNLRWfrv66tcsYDHhX5RHubvcUBxQ2",
  "key19": "21WmvxTkp9KXspaarbcWAXHeL4HM67zfWeVq1fgpsGKXuubuFtiwtcBvZVd8gHP5im8PAYvmCeDpkZkPWrr3DB6W",
  "key20": "37swobyTQjYGQRmwUitRsQv8YbCJ4WeHA7po6CHtd282ZyK47tVpU2piGRS2ggEbmUsnTfa63NFM9k1B9hfkoDtG",
  "key21": "SsE3i6iy3qCCnbSTHN2eMXpqwwub61PMMjrMDx9LAcgugD7DeKZR739nEwhPTaVFavvddLhW2xjVXmcMnDmfneH",
  "key22": "4ax35B2Jf5drANAW4Hn33hQc6aCRUakViZhhghDkhNJL7Gue1w2BiyJyhEG3ReqDvsykZVbe6HBLLu64JCndbhFg",
  "key23": "5nayUxeoX1zq5QPMpAaFiWn5SBuDPCXYmYRQ2FWiJdVRSbC9hPNYodMiEb5aYvSwz149YQT8EqLbcme3EM2gQyF7",
  "key24": "2asKYgiEuW7h1xTtCAt9UHR9c4gBx3h6CVhDjAg1EFB7VuPsnem2K2L7dgnoae4UjLExnA8F9DP7BysbN7aV432R",
  "key25": "4ncoChxJvYep1rJph3mRD2ieS6HZ4u6K6KetUiodbqc6RMpcLsLppAT2fvRR8cQCWi5NiBeU2t55ASQEkTStTMHd",
  "key26": "2eVYSk5Afu7Wtfq5xZTMiQrq8kheExamNkrdfrDQ81ZJbhgoq1cpC9dTLp8UhHsnU34B6ePrj1beZsTg1ZJQjzCm",
  "key27": "3Yoh1MstcRRCrFKq9uwtgMmv2kjdbxDi2f6uKZmExMk2fN7UhM5gmgs9YgS92zRatft71zQx2BZoZUG6eJ17vm15",
  "key28": "HbdREjix1uMzANqJMipcVXYQHmLeWeFa111YG24rsWczKtAEP2bVzhXQygTxLUuaGnQGuJ5Ubv2cFhmNXn5taNJ",
  "key29": "4PzxkCpXrszdjYw5dit7jxyZaT42cDeWec9yHw2XipGEbQHmGKcTfBn1sGxcVVf486oPoyE1CirYKYWevBH6pEwW",
  "key30": "5cohZBQfXYHpnrdY2uq2KFR2Nhqr7gARLWoZtkDaaTfeVSGFGFcZyLrg1QUcr3fm1yTNGmk6GUD7oryj45kv8HAn",
  "key31": "5osFZ9Ptyvz2NoYXzoF1GzKrE7fTsT1EDCgv2FCw47gRAwDwE39whjpQjL5t1oCZTJDhy6LTYQdY8Gnb2Nh7Nw1e",
  "key32": "2tSV29GFihj4ZBonQtHv2vi8yiu2xdGL8Uxxq9RpxaoSEJFPjGJfiMUa6VAofvXHJxb4Sv6ptfdnsTavS61Kd6B2"
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
