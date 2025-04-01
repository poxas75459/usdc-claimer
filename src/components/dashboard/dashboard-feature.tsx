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
    "HHhByu7QVgboqVZRCwYexy1UYNCsswVtuUBYABy7VwsEkNwfgKwmaF5TPJ2TcguoHGvghpAKXoDTqy7wGQkY1sz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Qvz6VNo4x9nr6wfu11xpDqGKnw2JfUQHbk5myqEZMr4PHWBX4a9BFeFP9VC67X3Mk52PcjabrMBTLFzRxJijG5j",
  "key1": "4CeWnyTyvSvGLsVjW23HKXSXAk1LSQoEFaFzNXXdLN3H7u2dYN2xZLzUzDYu2tHi3ebgDaeLNgVsEqJKTtHKm49i",
  "key2": "1JvjpmVWF73fcqYAFXe4mz3gEyCNjJ5dB79ik5PttZvBd6nk7p9aZtaKomXVMXcWQ4f9Gz91JDiDQ8qtZmj3gQ6",
  "key3": "31mFo4TLznfT1vG8ULaHJeCon3iMLTJbjQTZVgopJpC2cUbAXVC8kHyL9KVFqh2DABsqrpkLPUdT2YxVu1r1zZhT",
  "key4": "3dHuLE4qxXfVbpwHxssFendLku7n8MuuTaneesHQA4khxjWikTCJ7mBMschE6rvULjz9TNBWxW5GhAZstT4fG8aA",
  "key5": "4WeE8so8PwLBaxGAYe5cmxqAPSfbN6MzNNYPAm4TExCdo8HrMPFRmmPhz1kJKbomeA1h53Lvobs3KvJkuZQvJHFX",
  "key6": "5u4cCEiowBnt5yJYDY2yk3Sa6oPNceA8mxe638GrYhPHH1hX9rtvV6PrjXCkP4V89RfKDtDQfi2CCaRRvgRipJ73",
  "key7": "57xLNjMAxFcLqZzyfGvrZKyszR3zKX91i9yk5ys9uTWgkR4wvqcBYdFmKxRznGjYhd6m1FbTesZUgetShnBALKnX",
  "key8": "2eC4bWKMZc9xypm6zukEHFMNN6tcJw5yTfjdn5TdqvNgdGCh7BszLoTERj1RTs8rz1zFE1QcuPpGLEnR3ny22FjJ",
  "key9": "3KTqFvGuC9ik8YHd2S9XgnQ5uRhLHsYjbPrAAwwgeXG9sKRsynhgDSN2UBUWTVrrscjBRv7AgLwZSiQrtVS6tgWg",
  "key10": "3869CCAS7r8a7NYUxWTPPsBUQLzAUhULwPb7Lxwnawpv9quLtqQr9PCyetKKf8BKUYKkQXtf19KaEj5B1xikSHA5",
  "key11": "5nWh2vAqspuHVPAvfunbnHAdecVY7wbnd3187cQZH2JJN7z43DX2q3Tun3DBaiqZitQPd9KDNDoAMUBC54kiY9Bk",
  "key12": "5ezrpMwUtEFFJxs48PSTrzG2Msv6ZhQF7YGWB56D4hmFQNoPMTPf9bcMLxHKwBEivj7kZ1JqJGoKbKCz5d7u4oaW",
  "key13": "2JQNLoLdTazdXkLKsyFLjW398H83rFoMQdWJkJ8yaX7rAvjn6LmKAJetk5mcHLJ98WLoKDQr24vjjN1aziztwFpL",
  "key14": "2faSY5mkUZVSN7Zj6cZ3msUrQPmnpe4oNAo4NprFvZMxgAnHUG9hDPf5dnyjriNk7CffHDPcFW8SnxYeXrXU7zp4",
  "key15": "tucEfwSZ5nLoVFuyjoCMRfDoxjJdzbSbemegQz4KAEernS6PgNNhaeFLsdPGKRTBgiQVm16JQPC4S9MJZmvQ8D1",
  "key16": "yGE4xqHAJVp2X7EFkyuZPgHrX9WmdRnLoMDbsbfPe5hCimpSVkpq8LpGN1MzXqjtXmDhZuC53terGSdwbdTbs7X",
  "key17": "2taNqi6TK2LMmPgNVN3cpmog2bu22xc9cp3Y76WnLMfjZpYVDrq4zN4CAFpPoBMKvMDyR7MJjh27qHPeRKK6BJfJ",
  "key18": "3pJuunWpADs2WpdhoK98QAoY5TK8m7hSoUMPh9126AnetyRMctxMT1sBXvFG6z9cx8skAGERWfstUJRnuusbMCvp",
  "key19": "5zf56ijkCGSRGLTuSAvb9PLNpNWwFFaDLmVcRJv23ywBa8LYeFAHbrFKddTu7SBLro8VFSF9XNw5Nm5xWwndeiAt",
  "key20": "3TNivyAGXPoRQpHaNaCuGmmiJAK16gXwtKY5jkr9rmjmrRDBmtZtSXmdsECLXxeNsKwWuMG9wXCneKvx3Wz7AQJg",
  "key21": "3xs5VY3ej2Zaxd9iUX2tb4FVuhzxWXQJAik3FNbg6m33FUJqP2etWJJQHsJsA3nnEkZ9CVMgdXtezHvaLz53tyDg",
  "key22": "4CioacQXF1vTF8DGet7PhKePhXPVAUVYNkGAzFXYgBZ3U5nACjntW5FQoYt1TZThx3izLFRpN9zZ5TrSgpqEeyu2",
  "key23": "4dwcoMg9p8HcenoFQSD5W8AxaMygA5Qib4uR4G2m1PJKEeFqVQiq4Jnk6bYUkJQMpZK2MXGmGz5rUoN5f3D1qUon",
  "key24": "2wgAKRytmQNQBFFJTCphWDt37X5jDqPVemYi1vBbmnmTvpnge1CevwkZjbvZsuU1EWrhancCyHdQ1dKDN8HmnUU1",
  "key25": "2ryn7zKp3AuJ7YdMHfcG6zVLbqV4TR347eAjA6JEvTCoPBeZ1ATGsgumatkShfGe1QmPTrWfybD1fmxDcpvPPKsK",
  "key26": "634QQib75rWRKfubAHtouMRvDeuvUeXRw5yGRWWDToaq4XMDCMcSCd7bsjdMSCpkYE6scBaPwawv62YUk1ohEFVp",
  "key27": "4PQdAgc8pXa4PuQfSRG6CVPqMLeG1mdZa3rBgZQD9W7arRbQM18oLCYHZMn78b2NSKcZtZAGswyTWdc6v45iTkwd",
  "key28": "3SBwjfpvMF5VgXx8Gnu5gETsQRBcvLc9XnJX3N3WxeRmkBYSdjbkM4agu65DVDjqfoDehY65uyjjXiYRrHZzmFaY",
  "key29": "294PW1JkSdeEx965UEahiH4juuarHwAUtERnAyCeRw2XMPRTNHV2yTUVSWcFJrdjqo5GNxZ2R3F5HnHztSTMbHSv",
  "key30": "4UTnYifikREo4VPSkGptQnNgKqCjFTx4yJ8QXLiTCadWHTyaVRTKXgGAD2anK566vH47HkVFyGsZgXuaUCn8qrRH",
  "key31": "3vJfAXb6gJPxmnPBopLCtYQ2tpiHDNrzMAj3mTu6ULyYA1CJSTBLJjM3BdKoabY2y6SAubtxhjY3mzE9jD76gZpo",
  "key32": "3hPwAEypztf3z88rUqv1ESXFEA6UjEwaA53ffLhLoTQauyjpWWs1HNYhxCJFSxuW7zedgJ9a52rM5f9z6SWNHFwg",
  "key33": "4HHbMpFQzL5rgTzWVHYPZ9EVdZFziQmWgZvNn2vHAVhghrtnWSqo4PdazDoVPxSVEghfbrZkXx3uu7h79ZYpn71u",
  "key34": "4L8RAHC7wMMzZAyZbeiS7EiHiQizK4FeWMamr1xsvGq68uE59J8HhfGAD88ZnvZ6ESHsk1M1shbp8Uw2XR3Zo97t"
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
