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
    "5r5eYiVVBkMJJRK8yXuQxW3eAvQTecPJ1ePWx3562KmrP61rLrnomKX3F85RtrDymdcMp4rHG4behaHxFrqR2EhU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hgjHMoSVLDjBQDrPrwrBPuaFTTo2WS2KVFsC8SVTukYYwCxqN4XTUmm65xpY4ctoVZ68NncwC5xxius86D3xqdD",
  "key1": "2neoYTmBLN1Yhb8M6rAM3WZjFykEGibWJVsv1Rd9qKv95BiPqQkJJD9siUFDGDtZ7pVW9ArR2YRJLbj2Tik2Cppi",
  "key2": "iARcQVE54nyAWEdZGCY5P1e17nQ7xSS6caYM5As3jXcC7wZPrKCf7S7yqLQqKJCLvKd2M71a6qiHRfsJiJJ5WgV",
  "key3": "W5tqSVQjVsNeFPv1yxm8eq44euu2dRDyVKCNmvyBJRtPaGsRTkXvNwKoQpBs5HjohakY246RSQLsm4iD3vddYv9",
  "key4": "5eLAkbprCt8Jms9Z2roeyyvEKQRXL6SBtLxxVvdPLJhec7FSGms2CQiM9dU9DwYPFDWKYhgJQTjituLZjVcKrrGn",
  "key5": "38ZvmEjFvF8yiSX3tG3veaWgvvJvm8kArvgjbjNNnR2RSD1A86oZxZbiSQ66RNVY2rmQ47aYo7fjdEE8z1YTXUNa",
  "key6": "2SCavUbBocyizmxi53VCTJYiig3voMXzPDQK5kjwy28KBFj4FdpvTX7UxUofW2MbSRCj5rUbxcVvyjNxAsi1nZWW",
  "key7": "3fUx3KhxJdGNzk5Xy2GjBN5EH6xayXnQktwEKxtDdM8HzRVgAyEyFrpqLg6R81A9Si3ZrMypg5TnAyuvJMhV3CGm",
  "key8": "433EAtXbD8AgdwLTX8pSvhKcGfSi5DW6DGbfvbGdb4DxYtgsk3BJ2era6B32hpBzUYMnA2qvn57udEMJSHznRUj4",
  "key9": "3b4KoZZjsrrNMBRPTZK4DMcYBAFh2f74QNiXXzLi16fc81qeWAxPaX9VaquKKpnmJmstaBjpqqvViAg6FwKtTtWM",
  "key10": "3LU5n6xhonpEXCarntGvzdsGmw9LXaPKpTNtgtSLbjGTFtVxoZV9Yo9w4SXQzAVcxVE5LqVWxVJ5XgJ5ixzGfTCu",
  "key11": "3jz5UQmdu6LkFdTUBwEQ1cBvrH8JAVLFaWGa44h2HV3T6z8Fbo2ccuZm1yUijAbaFrXBmb8yrzTi4Cz6dNxHdBN1",
  "key12": "5ZCPcwy2cpDHMGhdgHJBqo3AsNLRBstaAyczyJnU34GiQFPsGAQjBX37wy3sVsGBVoRnTTm9HmVT3bHBhdmBvd43",
  "key13": "39QLVq42uusUq571GXohydAo6rmvWN9D2KtGPgLeEkjDagXimJ1RR3VNPQJepJR8YimeSYKSJFuTCm6FtcHMCnW8",
  "key14": "45oCXegoZzFeNoYpm7ycebbZbztiaUqUEwnkLPLigUwAo3gVQKyXQbX3Wp6ybxpchGfKrMrJVZrRTrgm8iXVBg5f",
  "key15": "5k8H8Fc64rUNUeQ3yQzXtQcVrvocfdQu8DJXad4BgBqjzCHgPmm6rKLLpiDAYw3MMfwmfvHyVcJcaqPyPKuaTXPJ",
  "key16": "N2RfL1ct8WCqgRgD6dQnakbBendxPSNhgTY7s5nKUioxhHkJdwsY3WT31ceVXruFGS2K3w276d2uM2EGfn3SoZe",
  "key17": "a9nC3Q34fNvWQcdYUgxKqZPBxQh1eHruK6t4ja3p7z4bMX79ARzNWW5Q9Fpvu3JRC9xUppA8bGZpgHSrQtZTcJ6",
  "key18": "5rwHqKRCAJmjeSwbRtqjojtrBCaDi7FaoyPm6ovXw8Qa6t7vMryFaxQaCbZ58kgoJGnBq9U8TCzRs8ZViFcLPpRX",
  "key19": "eDU87XMchBDNZhjqHtHBbHbZ8qPsb24TtC7SZH44JQAamNjSkqZsDfWWRuMQisbJCXCFP6mcuoBHbCjyX7bkJej",
  "key20": "35ju3Q7cq4Pa8ua3ge8ZrEXqtMtFxkMLTUWjmiNVPcS8HbUdpphxP9CtuGVm6CMoVhkuc96dqESc8S2jgG1jTR7Y",
  "key21": "3ySMf3ZkXvwtoYF8ZNrQrexcVzGrT8xCniAVqQD2U5V9xJgFkRsMbX116oAEGqFAtp5hVqdu4cwmNYevBfif4R3G",
  "key22": "5K2Y2udsE9aRkjcD6EKMzjRZWhkcBNcGxgsQSxJHfPw1NBM3rymk9Wbai4dBPmfLzBHaAz19ZDmwWfmo14982VHL",
  "key23": "4od5ob1m5Jbh1JRUfL37Rf37RKEKBXkVj5vaUDcVe73hEQ5w3Ndo7kKAKoeQp3UxAs7DzEEFRKFFuz2KR1vdhEZB",
  "key24": "5egqvcU93BxrDjrtTJwWypDtKWkw2hxEUZ83iznn5x5C88vr2mdGXRYAvpv2kAS1ZPmj6nK6hCpMsdL5BH8aZRKe",
  "key25": "4PV3PAuVMDMnDkxXVF5j3BftKwdchzWsANpta9uPegiv8ihvKxKyx1M1tJypYxhq11iGSKMf9AtHpZkHuvYj5Jju"
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
