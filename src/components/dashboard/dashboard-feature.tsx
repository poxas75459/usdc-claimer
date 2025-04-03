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
    "4X7W5buNkHXENWJJwBnS91renmFEnSQpjqBStTznP8adymsK7rrKWMtLpdV7y7uPBXZNkafaq3GJ7Y2mS9qcfN9h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GPoywH8fquJibwv6A69z1Gty6dpXhQT7GAyY8SGo6gSiqWvSCb6Ypzy7rNofiWuuZL6RXXpGLV5vtbhQMeZyDkF",
  "key1": "sfTvtMxJBsBFadnDUy6JygmGuwKF54LkxS6iNHND6U7QWTUdBqZiyQsC3QYFwsgRKQ9XWvk8V1MX7mWzmQHorkX",
  "key2": "3P2uvJhu7o34SrHK3ghpQRnW63xdkW3msSkQZ4k6q28mZmh3tz6xThWBJZPZcp8wHrUNj7y2Gdb2pXaERGK31FSM",
  "key3": "cPFNorZs5rGHHbrvULoG7LxxKaR1FrLwVH5SWxKLzHmtyyr4YLFdG11orm3rZcsq3RTqgpV9f3Z5QD9QEoCsKHj",
  "key4": "3S4SMcsFQTCu4nWAH2uP5qBpCxEypYunywVyDBAyva2JM1njbN1PofPGVvFERqrTUCZKfdCYKQDkYMF9TdzCsrtB",
  "key5": "3LKSpkmiv11Wz5oub4grJxah1sirwuc8qYMTvArKkCSYB8rn6fS2VEYcfJ51riiUqtUgH5RfK3ZindG5QLLuu1U",
  "key6": "44NcynG77dpHvdKoy8cHbJdLPwViWx9cn3cpKKtKjSgDDtR8MZ4EpQDQ4NiefiTXVpg8Di5kSHVjJZgWW4KJrqdP",
  "key7": "AzyBFfr9uF83D6DnWLEyt57RKGmjJXDBXXu3WS2sDanoHmu7hqMVNzouZJdefF2FeycksWyJQQxtDoWUqifD5xj",
  "key8": "4hisxJSWkchPnFfWxxuB15n7qd6FsfXRUbwXcM6TJ7svyXpfd1NuK3ohLKwuuUNEvuVBoYifq2cpKx49WvhcxVGf",
  "key9": "39Uzy4TgXBbMfWA6LB9nbfXU3EUuWmAN5k9smtDbL5RWhpVsstwfJ7fZDsmpSwzmS3EFhm48fRo61DoSFuqTWq8p",
  "key10": "5Kd5bWocryC9XwsQ4hUzKXTc1KpVJgXuXpv6jh7xN9sfj1GxpX8yWZaZkLm5BEy7yaZdofxdzqJwZm2JiZzfQSov",
  "key11": "2L15qhnCAGuEQHYkm17VAZruq6TbRawJNdDsFDxwZwEKUCiL2o7R14Yp3LXmCCmehUBeQtANifxRsaHrQBdRS2LR",
  "key12": "5ZEYMgK6LVoJXLW3a6uEt1ik3kifzzbqEA4QDMMKsKVgBedj4MMbS1ZiVRBZkKsHYUggrku3D8vjfmtfgXVvg8a5",
  "key13": "3mbxufsYCHyrUMtiQBSUUAiTARKYV61PCtEHkouBmC3Y7jt1ysQ6Bz2rUihyLwrXiQrtftfr8hApr9NRaRuUDSTn",
  "key14": "4DKMhXEuKUK4suPgTLK9hfvHEtRQooPZsfVeXfDVQzAk6TaRHjBJZ9GeGYHbLQz953LnkZbMeBHq1wjYxj3aiwrw",
  "key15": "3fV46EaoWzYL8bwCrsY2jB35i3EmPoiv2tcM6sb7xHRHttdNCLUXgBnG1AoeWFnLRUzw99mCnXoyzYEv3JCn7fB5",
  "key16": "3DptBvXgLQva65w5UeHf2ZghN85wCr4qxRttxbkTkDgXJfoVXmQEStJtmoJPdjF2xseinfYJ5N4oytzM4YxMaKaj",
  "key17": "27uFbjF2QsnBLDbuWiqRf3Lhvq1VMhDjPdJGuqD3am7HSvyebKaEzBG8jLAY18qqc2APKH4exP99wNjWUi53rXNX",
  "key18": "gZPGMHeYfK4K4eNxC3K2ToZU1RBhY8yHYk3yRZGMDy7GKzohyByjgYi2h7aMhAuHJUvtHkL6Lvy2HSWxefiGPM8",
  "key19": "4B4vAyWNdPr7UUGdven1CJ1v6puMTa5aQGWftmnHtvSBL1W5NS7mbopcZXmoDyAvg18ohQXz3dHtiY49U71KAL3p",
  "key20": "3mBuLCev7HSuNYYTjePAASvPGrXFnoDD7f9pNG5W9HjdN3nwTXzYmYqWjCAaDiNuM6MjSL9VBJ6ARet2ikx3DC2k",
  "key21": "4zP4m6R5L4dHfoXBaVsxLZuvucPW2ytvCTCVWzKUJxSbGDDih3Swmtj3tRdBc6CdJzf4VjUS9nfCM59ooViGRbW3",
  "key22": "3t5pAvAnBAhh7a6mSz6ZTNTVFWrrfQVkDkeYa7AA6LMwUgxGwMV8E4GC2ZGTjTJQQk15mamRM8u2Zg1wq8hrERcU",
  "key23": "5oFrkCYEB73hfDWeF2LxvVvUXakPDr2npbGQHc5iEcxeeq1o9UfdsNtjPvpwTW1AH3D748wLQL7qBHWvimokrwoG",
  "key24": "51wYnq5jJQb8AgUhimWhh5xy3oRjxSmn83dRZGstmDC7686k25rHyW3YsT2eFxr8oyAY1wQWJ4SmKiGAoWhxC98U"
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
