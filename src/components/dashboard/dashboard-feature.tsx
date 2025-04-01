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
    "4YEk52qVmq71EFfpj7xQtZq1Q1EFxhLgLUbgMpb95vnJ9eMPAa6Tcoo4TcCU3bm5XBSUqgE3HDCfew8AMwkT5u7n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ca6JNp39fUc3K1o8fAkcExLJzWPbAje2sL7h2fhjhab1Yv53E9zKgzZVzTLiGiCRE2FfcWxpFELKLD5btccChsR",
  "key1": "37yvgVntezvL8e1NCYK1bi4wdFUzLPs7PazTeKFLfMRdd4sWmb9h5iwZe2hLyH8ndJ85Q12CYA3dT87LcCVoXYGC",
  "key2": "3po8qcCGVUP8fTPMAaRrrUVsGMZbusDoCa8n8syFkHFwRAhEKBVVTMv7NNYAqAPSosZczWMFiKtYzH93imj2LRWg",
  "key3": "53584Q6Br5554vp4uDcVZTj9bHroUCx4RR8N9aQVmexQx3u21UjXKF1GmfXCKq6iSdXmcgtrcBdqDkeyVwzeVWN7",
  "key4": "4sDmEoVZi2gHdpGi7GjC2QBSdAAkM1xZggyW8oQ5EwV8vQTZA8cFvnBdqtEaCVTLWTwdzu3vebM6qfz1DqtL6mN1",
  "key5": "4MGy1YhqM42t9Gi5cx536f2yCSfp1XdkkNJRhqXDCrcDp8n1xipKetm5HeVzysjGfzpxyzx1PWLwFz2mtSCp3PqL",
  "key6": "2D8ZuRiUx32LBmQ4A6ogcZpuoLDkp54TMmWfoM36BhPUbaWEr93GCPk2LsaDAq31r4ymwgEjgSy6ZF2Y7uZYJEvR",
  "key7": "5MRmCQB7yq2dQWjY3PWSBhvAFnBwAUS47QLVZ9Bm3asP77BSt42zNmGfY997Tb29jmm7QyQyJwg36VWppVfe656a",
  "key8": "5vyif6XQGbMCFYtaZppaZzH8icaRFhQdcHkHXuZzUjEtwpJyFxkqkjP6zL8Uv4Tiw2vRCTpLPWUgxRtZ3MDuuKaq",
  "key9": "DtArqMGY8mgTD6XAU7sAibRLH4si7iYajahtdiFNafdYQypgTy45JMz6YJHmDHE5RRX1XmQs4GHhAF9E8EAXi4X",
  "key10": "i6Hn1JkckAC2ii3msN9uFJLwxd1eEi4Md7Voz12RRqSE2NZs4qr89DYyLtC7m6fjVVcoNAryvmEEKpLtjZQM26K",
  "key11": "2bB2XvNkgfbrB96yXGN1Ez6JUjBiJKqFk95pEhUU7v2vHbYXAoK26vPddb3LopAFACJv62V2ujnYYXCHhbYDMnTu",
  "key12": "5fdbmpThqcrZKhpH4YJ1LgKjfug9ugLzWk2XNcqNra73KqBABSjpbC4Ay7rtQCV2DtVZgjJN6UdXBwCAeqj35ZKX",
  "key13": "4RrJDVywRMHDcbU9EVtambAD4Q34tburbpuMm4tyVgEyXUv2oYZhEFjzCmZxPwvAbJJC7w9bqZHoBidQSvtgsA4y",
  "key14": "ebX854vE4M9Zrmdm3KeV5idcrr2JadULSo484GVqVPMxQ1Ukfb4JR47hr2ZXXpytBBFoWBKwGZksKg9xYhv6KTW",
  "key15": "4U5Phu9t6YE4acrLEShXin6Lbuq3e6YC3xjqcnDNaz2KAadYujJdcRuPfeazMf2CG6NKpAgyDhHpveV7kq7GKbv7",
  "key16": "2nPCvUViXcLJAFeiqJsrrSNUsDBZckHdj26bCFdMxP1mof8Uj627RVTyxEEpTbvt9WsMQMsLJTvMMJ6ZZSYpgAgq",
  "key17": "4TfmmcEk7nL8jA4hkj8vZCZRTi1e71mdSKaX98AX2hbeyNXkN7JEs93Nr1S5agUqrFFiEa3TWt4pvS1ox9q6xX8B",
  "key18": "4s8ecwd74j3yAtzepgcczn83WL63zU9Wvv3zQmccHvXu9Vd6t6BGD5Wt3GJdCAFL1bnqRLmGuR9yNoYRLWmMQHrg",
  "key19": "5B1DYYNYjtBpLHyZoDEQaw1GVEYfCZsfs5aP2vQ2FA4aE14XDt9SP73eX2w2r3vmV7KqFwnCKaPJmem9ujt3fpe4",
  "key20": "2hDufNMkG2KsKeyKNiuPCj1PBq1fxsZKQhSKX5uSietEPpKF97AJuw1KHYcXGqH7z87yvDJDagA9sYQeq7mXCcUd",
  "key21": "4PTidGgPdmAXDumoChM6hMxe9tSeF7r37fWWa8rtiQ8c16Yby1mMWMa64kR18sSeFKxnW6yfvjJUU6g3ss4FzTRF",
  "key22": "4SMQdNQnCn8eenU4BNYjUC4ToneCHMVzX6Te43rfdVo1yoTjMMKSVb1u9vogLGMUae8FjFxGHei7SMmbNJuW77n5",
  "key23": "3NoST952Vuxtyotuq7iRU3rKVGnqgVtky7Nhb7eWga4kPkCazvGXNh2wacfiBmsUYSggH2QZ1zvfYC3LNzAJbCic",
  "key24": "4Pny598D6aMnvm81rzcyBhNvQv8P3vFQHBZ3knksBw8bqCJdNxPJ7TcAWH9HFZaxqZGTboHpZL98VZuYSX98T6ix",
  "key25": "4haTpSMgc3dBER457Y1FPuyYZtP6xDSBHvtKNjj3zmgftEqQCf5unstAxauegq9NjyAGwT1iDXBYMzPLDXJat7fM"
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
