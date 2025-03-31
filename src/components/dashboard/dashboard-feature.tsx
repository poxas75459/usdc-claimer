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
    "2cgmy7nuGbyQQ9Jf1uMyn5JDiKqHvUb5Wefnvr1DPBajGvkDvgSZvJ3EbS3F7ChdQpnmKA4fAfar8EqtSU9GP18X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dr6iqJrNyKhKZczvjqeoLt79Aj6UhjRASjXnSs37wGFDgsNs5NCkNumfC6Xk7VJLrz6UqrGTTV7Dc3be5Dr9eki",
  "key1": "5hcLg5VhoZ5KtitcKh8yat5M1G7Yk1FmCXD3bwbsG7x6fM7jNh4Vknufsw1ErjhTK6cvJ9Wj5eroAxLPZ6dfMati",
  "key2": "3rn19WVmAC46aXP8mmP7KrEzgb626VTabRqLwH473yEE9M7EtuX5tmurKHwHAREeN4aZwqToPXto6nS5V4ee8VoT",
  "key3": "31xDh6k2HpuR1wdfQigxxJhaj6DJE8Mg637A2Waame8QX63r9QcBnxEemTpRzcETNTLM4Vt9js27AtmHchRiDhmY",
  "key4": "2Q5P8buWaqihzLDntTgJK1PMtHkgh2jPP4FXBAHajQHMgcJ25SpRYc4L6VLcSFZtrBPxf5nfuMyGTZpTPPwiiEGc",
  "key5": "5pRwLwnSverVV9k4jCYa3PnHf78mWYTeP4tQx7f6FR9pFVGRh6A38zeqrSrcujYBPFy23xfMUx5donkksTiBEsrx",
  "key6": "4rKKgbUJYiCoqQFpn4QxVSBX4Ld3aTMCxasgKoYqeFHZF5xNu64cNkDmmMdjXLp2pfmtCgNtxe9Rp9fLno7Y3gxm",
  "key7": "3zt5tyVFspsNk8LXf7faxrtu566WSBBProAWsoLM16aVSn7s6D5yGT1sEhLB39kWjVQQZ7XwVNR5VAYztsWjcTBe",
  "key8": "5aERN923kzbJZGGuYioQLiBEn4aomUd1NHCwRR5BHfw2v1ecrC5j4GRNpaHskapmrtsCdihsQtzD5imiMM6s4ng6",
  "key9": "3WZ73c87jZTRQoQWrYxJJPwSD4oVjANWKB6S3sCbn7deK7fEDR6K3AeY9ehTuZJkFoxQahXi1aKHjfWS8VaEmSvG",
  "key10": "4oX8hVhvf3shrAYczSsPySEpHF19qiUNthVRR8jjVXtnyCMtmgVMXoASwhLhmGTXwKfeLHS6hATP5J61Xw2FWTVZ",
  "key11": "2rgn37s84M7cee96H5nE7J21i1cxoiUVmzwNCocGQVy4N6koRGMJaHfTfh9EkGzkFCtnLBUAgMrfWpDuDTqC2R43",
  "key12": "2XsHZShBZwArvufDcrGuLNX8qwFGjWEteftHNsLiPVSd2qNHKApTP6Asm5b5A73WTccQo15KutAwtjhow1bduvFy",
  "key13": "67X1WpQH3fkNhWNMySrqBW5oRHkaVrCutRwu43QqM8VveHqBHPXWqYX23VJcaPiQjyKYPdm2tvJu3U8EkQWmkcDv",
  "key14": "3UTDC8zupu2XQtWMvwoRvjy5QPK8D6Ljgc1P9YUi9ETXoJhyzubYAfjGoHuoXzuUS7guuAJknfhk47ePJqwHhGgd",
  "key15": "4TbywLhx8DabhiDpC5nHrvELShhhNPkahgKZJdsycCyyQ5cvPjyvbNv8KsdFMzMDPd2g1haDwEyDXadxbK38PWDC",
  "key16": "1ZvAoNcbM1jMZaGozLK3V7vKgKapZRLC2jDTxDR1DHYhQLtyezTKvcRNe649TJpZbyAkB3TzsSHTpKmQQsDDivD",
  "key17": "44uLebaqxPa9cFB49xWHPXoESxQPiAmx1B3MJX1cizdUm1XALSyruqyMgRZNLMNpmJ1nZvCvCEod7FB5ztFPkomp",
  "key18": "2GgL6rNun8veHWwW1ZtGcrAbSNcA5sJ6dhJhR121HpQq6auwTxKV6V7cNpEUYeAZXh5G8yYVTcYAoDi8AVsTzdY6",
  "key19": "3Agiabfk4UH1L2v9LYvqbPBGZGhi4a4DwGxCxP1prac4QprSykn5j6KaKdPU4Y8L49xZyn3fjFU5QuHeMv37f79h",
  "key20": "5ArCBJTwHSRaHe1kEh4es8HXTjMne5tDr664sdyQcMbHSVV8FxkaTeyeMoATgU5nqBtEg9zY5rrgf2WroeVPkji4",
  "key21": "2w5sfCetuBDYuckR24vNEo683peH6RNmhCibv5Ve19g2zyc9NTMR8tMwkcfo3LD2V3adXLVywerfyJgoDE9BvRby",
  "key22": "36vmLvV39LF8BGSZrHe2CqrcsrXH3t8LVY3WhcxPMJyH18gg7Euvptd86a9XbcYLN55uNQNfGLyWvRVkGGkZQW5z",
  "key23": "vUYLY5Qqu7Z5E1ZQpRmvxexwenrvfofXPf14aMMUvDFc1vArvCh8Vsj7MDTZV415purCwaroTbTeSweB326E98h",
  "key24": "3wwscKMiZWmYmn2v95uDM8hMamXGJTYzgDCTfubxN3FsqdnyPoJdFHDHMXS976mChhzAqAjko5977dFotvBjuWYP",
  "key25": "2dJBXVkwro3astCV8pLCP5FxH5aK6RVDEBkx8ZvWQoiQ7qK3tDV4XLsZbMTmDPRCuFqTmUDUbnARJoicYGnwvo5m",
  "key26": "5uhq5NAJyEzeHme9RSYrdhpVzmigrEvAxFYuhPNMVKfCfmC4FZZAM1M1zH4H6oMHUUbsmYvhXHxuof3aSzqzzyhU",
  "key27": "4NoDFwT14j5WNbuxbf56o5woeB2NMDQ1Sbho83j2iTHKrUnuMBwmJYhPhuki7S4soN94xWFNv1fAwJKeA5fcW6if",
  "key28": "4MYBGvrJwUHZBVaj5AKePEgwWqW4hZAEGmNiQHhLLxWcFkschRmDm1r3qPsnkMoRZg4sn57nNWJNSKafLU4psaB1",
  "key29": "31U3pzzPKMfZ8NdvGvkxby5hBdC7iGk3uQSip6mZBjHH2JqRk9gHzhbxAyQr2wm6PXAgwM9w8KcJAKw8UnrzZkbq",
  "key30": "22krkrb5aFKWsWKf9j5vKtT5YgMV2trZTRFFmckQz152rzkD9oezkpAzNU2Le7hequMvxmt6Ji9bPQrXm67pe6vX",
  "key31": "3LGpphUJ9ab3xRjnAWrbPjiXSaN96uQdNnVaBFSpGNn8ZhMELq5VZVurvNqszdbKXe69zebmYuFgayaPWCQMzsgR",
  "key32": "4sexhXcGHGgdyjEJGwKbLMQYARNFsyRfDn3WgFuZmh2BPWBxKXmGn7pW3zizLcbKwCAboCB9K6AP6d5aY7gdAquh",
  "key33": "4FtvLYxpLU4nzACGhFsH8nu2xDk11SEzjQpG9Zty9GWCZV7uD7geY1pU6WoiBfpebmJi3VEpkwbyprP3V8usbJCM",
  "key34": "5s4ShtCznea8jdzxTdMUbD3R6mJhg2vTv89RiNjvka658iH1r3KDFKciL2oFQLpQzKC5NT2RzHH4XRLChKd9erTo",
  "key35": "2EHraV99CsQNWS6NSnhaaPyqp4amQDA6KSmTRR1kD2Ky2uQN7jVGpTM29fuwofnNq9SuiJxAJE2yf8VCc8RjRGfa",
  "key36": "4BU2GU1UTw8kyRY9nKeD8HvV9rs3jMGUdZEK4BDvD4VKV1B61Rose623yKr96Xa69LS85YxYQK3MQegRHi2N1f29"
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
