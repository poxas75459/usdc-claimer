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
    "412FCd2AVjn3TLo5d9g94Y3RhC8eCjBgm7E2Xx3x1EUNT1e4aB6Gbuu7bZkq5hdeMfL9zbPVHVXFB2yrLg5xDz73"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dRATY4CMxJEjVpCFe9YomrUGkfCYYNP4rTqRm9fPbroqhu7q7u1NXtrswE7ob8RkFqpT8iNfBiecF8jwTXDM2Hn",
  "key1": "54dADQdhVs5dChv5WxmsTF5v5km2B4EDBhfB2VrHMv2M7VaMY7ugfJ9wCMag6UCEVs9GuNkj1MpWCpQN5XYxSvu6",
  "key2": "2vFtuRyh8UZaiwYkZXWyqEUAXhVvZWoxyg9KNJ51EbqnawnRPs4xKx3u5SQ97YUWoPLa5f8eiVdah8fMa22LCfQu",
  "key3": "4dJwXyxcqGTqMAVSBfTYsgPhTnX5gnNKtcSf9bTUiBxJ1SukheimqWaeQL14JVrczSP7TeHs2sFAn9E4HcRyGGTH",
  "key4": "sXMbikVU7WoR1oRxXSKf3tRMKM4qXpVEQJKvPABNw28NDPRQChAXzRREhszTLmKMJBHcsLkCjGihqCEGnQR1ThT",
  "key5": "4tuTrn7nUicajZEM5TUtnbjR4BF8n1J69msYV6ZtnN3EFj2ysVtdDghRyTTxwbpYz64d3AYiHTiD8VADB2zxXkDq",
  "key6": "3QSxKK6oXnTSGdToBiqbPrbCndXmWHA6qD5u3vRyYVRydYHMQDVCeC1nZpM1kGSrK94PranF4erkVe5vDtS2yBjv",
  "key7": "5NewJTdnDN8wpdY87kfvXV89bTkbDgbgSxWwHkjTdYjorRzSuSzDDozGwTSAGQCUjZXGaXqP7B74gw66HXAWsgWJ",
  "key8": "5LR8xDyC57vEedPJgDSDD86p8pgkHbuDTrzDTckaAvpCAU3mTcPNtQahWiFrX1Fhy7YTK6BCYcyNZ6p5Jh4UvJci",
  "key9": "5ZvUfoTrCNvnB1jY962GP7CeNZqZ1u9NHrGYSnRDx4byGpuHxeT2FigWspwVHCFj2nzU6vRzWpeFV2dpAtsnrdcP",
  "key10": "4E6JSLZhCZF2yWMm3sxsSh34jVPnwZLZLwXg1c84wgMiMBmdGHf9ZBZzRiEst3sHGHsGQ25H6d7cXGELmLA636Br",
  "key11": "5xS5VCZGCp9MFWN4vph836ZnyUATLAUQzhC95RsZnQ3r96ukJC8U7GsGsDbRrLf9cWagFYSLx6oeqe5LBkUYgxrC",
  "key12": "3xcK3TitJnf3owpvW9H25t9CeQogxQv5fQ16sQerPW7zTqCzNKLHRpmbkCNEwcr9Jp25HAbxrdskAAu5yAoBi1kX",
  "key13": "2fj7Afy7Xj5cUeHeTMo6iZH7VaBTqQNSPTwuj38HBJ8qdrqUW6YRin4DCPGtShp8SxvWEAWNJCz5d4GZLVVN7cj8",
  "key14": "iWEKHaAZsMyF5X1kMPt9QThYXZ2zPk7td1XL6dhEPHfNaxC9Zhd2ip1jo65ULRrknJp1cjZqTYtRwxq3V3jRWdt",
  "key15": "56WrUp7Mnt9wkpnaZQMEmpqxBwZvsktvhs5uXqpUcAbQ3EtiCyMAcqwWcTXFWrrZ9oNGgSRtecKk3StZLBUvsnS3",
  "key16": "5yf6UDchMvmpEsXxTUAvmZENtMEMSaEDfsC74QvnR4iD4pf6x3STxHNiy39ua4Ybbof6tfEpcXADCWQEXtwmD3Zg",
  "key17": "izpohQ1eJ6GAywS3DtoY5crNX6xRydLy1Y4VziBWh7Awx2dTxWSh6XsR32VfDoi2omNP1tHDDTj17i6YoegUHzM",
  "key18": "54fEebhYXFTPh5YDscVxhfdGQ6A61UUd6ddHhLLSsr8rQ1DCs11itMLdymuH9kWsb1YVR1JBeGS9vWprN27ELSnS",
  "key19": "2dFwN1qkpTLUgQkLkBoUUUKhRXBdt46PHrozTYUoj9WfkX36ANmqMkYc6TUjvqhEorQurJhM856ENv3TsBMXikXs",
  "key20": "2zLY6PPDJJ942AqmCsmqzjgkZkh3JGmUynxQNdWkT4A5rUoydz8AsoBeuj2peD3nermJ4UqWuRsAciRaX1SkTFFs",
  "key21": "3nrRn1jsBtKQ5JhNuFPwEsSfBRFWzyQsuv6ZGQqCkLpa4cN2G8RQQyQBjhHaBdDzqv7QsoqW6trbaghePg6cBsZ2",
  "key22": "29HQPNokgLVeKHGhWxQV1LUTN5Fnkj7C4DMgCE8fsTPGm4g6tBKkm24vPZarUxsfc5wgfcpjn5x1a3Q7gsX3Vsef",
  "key23": "WhV7s5nbEjaFXKYeSKh2YFYknUedc1wAak36TKG1spdxL2D7cBtLDas6Fr6bysRtRWYcTVSbkhkczt5GVH5Bc8K",
  "key24": "4t97eZVfL5p8g1GggWnLHe7P6KmwMMMdwJK41w1uGpUpDtggqvjf2EkdSrD9HpPWFoXEJigib2PJUans2GhTaANH",
  "key25": "3FCSDXMVHS1uqtcVsq8rRz8564kdd47DtosrBK3RGT5d5JhRtxWkGh2Y7GRWUgsWvPbRqpYG1YmyzZi4UzitWfqH"
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
