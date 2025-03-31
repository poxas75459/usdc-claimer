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
    "3RiZdtsbuJGVWrgCN6U64QDbrHiTmqNp9dhCN9p1iYGE8fB44HJHhJBtYjGnufiDB9HZT636CNsmM4vfBasigqG8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EW1KTF2iib6efmZHEwk5eah2Zcj2ckzTBKoHeifaA4K5d7YVg5v8o7MsZJDooMaSJb1NuHfzgbf3bCk9bUf6kb",
  "key1": "5iKTUpXswqJuX7j5L8xDoTSMvSJFuQVWTDaAvE22wa1nYrQh2Ti2DVurxsi1xDofy6qKo22op18GvWmuF8W5JKuq",
  "key2": "5gWQiEmTFyyh7UK6kgL7fNvTdXZDp2LpnTnNNorkWuhUCW53mzctdYtZRZn9uPn239RsuJDMcirGaoywfqwVXh96",
  "key3": "5kWgoDEpRwjDwCHDgsp6QHesT4jKX9Q1vrFus21q9bkWLeXkCnqFLgxS5XxWEJrWDQcSGQeh7HcW97N4cp2X8Mb7",
  "key4": "56rdfrRZniSDUrrFNmjwea632be7Jh7thQf8SpWwTUikQ5pZCbSFsv95TJvaKiB5SszKU2KTNhGXF4U1ApguPXst",
  "key5": "3hsku6WarJNcshjvsjfsWdJnBkZn7oSGcvLgFUx2Ufwy7h2ppGgRvduQmkbUUTfsme4vbLDo9uCpTFHKWs6wVUiM",
  "key6": "3fcqRq8nCsdKFb5HVmWYWGmvfRrTiSBto58DdXtF54W7G8d7fNPtby9RgBeJKwbfoAo12uJqrpZu2QMD39gActvu",
  "key7": "5VusgT6hMNPAar79iE3yCjNoXGq3Y8ADs9LvLNu2hT5DqnJApiznSrTh5CPNmurjGEjnXNJzSxsmZySC16GHpaCf",
  "key8": "4Dgh2b37ypCTw8JoJPESZVDmSPHLvXnQc19zZhWeERxMMwcBarqdDYBdbjGDkFoLZzXmw3wnNvNoUGZpsZhPe2Sh",
  "key9": "5sKGoqV8h99NuTTJBKtrEamBKLfdiDNx5jvzM2EBbhLKpPVae5U1xuyZSRcTLmQrC4tT2Bq2CnSCZSRV3zzLycM7",
  "key10": "5SLqB54Jsz3RfP1ahUsSphSpBY4TyyQyXfSX1gsTU3Drd19rUpUgdv9tK7u9w56RhE6xuHizmhRiaS1qeZnuNL3T",
  "key11": "4q2ea3evLitAxnPdY8TyiEDUA4hZ7ej41eBwxVtH38zyxS3ZCGmoZ3soCvUUMAiPgGoHxi7E2Mscr2itc1FT4gfP",
  "key12": "WbCFHgyXtmSsusPXq4G6cMxq9fUvhakLPX2KM3ie3JKF7wh85nJKDQpUxDWcXnkTvuTz7haHQaVMK4K7bxwZ877",
  "key13": "4EnQzn5J3K2a7dBsTywbWtLCt76TU8Z95svXFnBPbw7etUKdjoD1oAn9AM558YiAFmDpWTq9AkbMh8VqQWFg9fXq",
  "key14": "MM9zcSed4UtyGZ4e1Tahxhbn1EZfgf64j9nVL4K84W8qosNwx9fmtjRSfJzJxgeuWcYgG9sT8QSs8kEU5WFhdBQ",
  "key15": "2TwVbaeyeQe6xCtqRy5BCSJAqDQrs2kYTD7RBoUZZyYnNkBN1tLA5Eki2kPrGGJ7yMHVAMBVkWUv3pBjshvYM28k",
  "key16": "3LJw9i7fU33W237KyNm2aiTNZ19BLD1zHhw94z9RbrUjvD1UrqWsEhxEt4boU58geR9VMRC2WwrWp97fKsWzQhGV",
  "key17": "2NQZge894t286T7fUGz1JtvtvL3Ax67Ea7vYn8qfJnwFtBpfSVDqtbqkCuRCFgKhLgZmrBgse6jmwWxXKNyfVUZq",
  "key18": "2rCRQKoEJncEEwcu6A5UAEWADuZ8NaAAg28FGkgRgr95tgibbM92UaocGpbPkoC75PsNy2J1WwjsoXFC48d3u9pW",
  "key19": "4cLeqVDcZ98gzAk5MVkygofT8F1awyxPU2gxcvHiNcioxrimJsvsiZG6BULorSy14foNcC3Dem2pAk7LsWPEfUD5",
  "key20": "fYuRjfovQDxKMqKGT2cwFd7dZDat2Dhb1oTgzvGP7ms8KSu3qDH9am72vcbv21Ew6MEnyrwshAFbMCSU6WsXYNh",
  "key21": "5ecPJ4NkoWYeFPhzkKNHAT7Bk5ZaQqJJE2JhQrRbXbRFpM4kZeNn8HwMXx2tQHckwEHe2R4UYu2BMKTW7NFTQ91m",
  "key22": "4qMrUZbNPEW6WVnkHSD69C2ug78HZyHdXhHEHz7CxF9AkGebzYrocpmMWPrCnqx1ne5d2MTtyDSgBTF8NgvNq8Ma",
  "key23": "XPc1zxSxjaKBNvULihMggy4jnNHDNYvATmvWXvuW8sra2o2DdDFJrAeCezh44rUfXCvvVqsszreMYaHhYB3AWdR",
  "key24": "JFVj6iBat8q8LG7TqYF34wiVL4w845XW8an8uCYnSrnYdgRHFhGwcqgSudtN84zyJ6yXK67WXoiB69FnrD4PS1f",
  "key25": "2EtP3MAuG8TECDQ4BKEZ2cnUGiWjDCvZQK2BCsd1ZK9M24gAGoBvGhS8Qegk1CRbukC1VcxFLC1Wm6XErPELZa2h",
  "key26": "63Dcfh9KKLJLVYvVBGSF7j3QQ5BrK4ErSbhHSWKhR4gwev6i3MKaCZ55Y9F6fonS2Dkkx35tLg7b2vVXYiHxDw9n",
  "key27": "5Hkrhq4Shi6hHaMrkdMi8Z835SyAXhvppFfwUHK676pxrf31uYGQiic2D83GScvq8q3n2cHqKESQGJqJpxR883WS",
  "key28": "vaYdxdW6CDFPsTQPDeAz9t7KQBAqBjVaumCEEtVVq3BsRV1TByDp1NvCxM3ZzxB3w9aYkQxcrjEyyeJ1vzDmLHP",
  "key29": "3JgpR4eXS2jUtJMy7XVyMxLpTFaQmnu4dMXYePaAX6Cde14vgcAYACXdyeMgkkn3auNTWn1DmQK7UGrrsiyTP7TK",
  "key30": "4cCCWugztSm9ZGHDyzn2Ka6YEfmpYzetAub7XWqByH4x44ZFf7yJdPHnJspzxZLt7hhGSCo9DUKyiMgoPRNjYCuj",
  "key31": "35moiqs353JCPVNi91yHdeVX6j6QQcvb4hEkYwsCidV3FjD9kY1oPRZaXFEinvSENQg87xKUEvnCKZbiZyb4x1Ph",
  "key32": "2x3mWDLwcwPhTR6zZSLszKvcpv6dv66cY3cNqN7G9cbEtSy8RTuKcjg6Nb9nvY2ydLtnquagEq5z8JA8XWjDNFWR",
  "key33": "4exSTbakcbQ9xUr9ABRkVaTqmMoauGQ6czPVyA4dPpTfii28GXUcxrvqPFhgpbcqHcb9qkKxjzvdn4NAMyijeDT3",
  "key34": "3KmF2FXvNiwCUQo77hsFLpbVUjbMYFW3GZ8a4Pukra5gZowBCD77BGzyNarUbYmQnNKyJfBJ8FeAPsf9K46dQsW9",
  "key35": "2naUrgBMtRWjMGqWCzcF5UXSidhJE6iKfrDAWpbKeTDJGpLwC48gVzkab926k3LTnXZsZyRsrcBC7ux47uXmQLcf",
  "key36": "3ta2MD3umcA1dtcmuEMKR58ncY7bVjxCiiwyz7xYkR9xph6aT5mnJbFTaMyBqm7ENV6cB3gE4sPRgegkubqt14aV",
  "key37": "4KxTNyR86EyjagtTxKP29okxgH3bUVgjfuAuzhz6mrSAhRaBYW3Cs6i95Ev5hFrAZp9JtdrNQkyeQ5f2cgb6u8As",
  "key38": "5fXG6fDZ8P8gYxn3WYAmGgnegYNkz5VRSHDYJJGvyXwhEwFJeDHc9P8XcjdaWcDQE7HzEbfrAZjmXUa3gG2G1gyD",
  "key39": "24sWTSPpQQmAErKrPNFxzyatDqY4tm4ki1PF3PbpCPnGCiasp8tKPWimzXQogTjg6erfuFPhqreWsVVaoA387hfs"
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
