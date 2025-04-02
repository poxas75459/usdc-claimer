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
    "odCkxUCxbU1sKxjzxuQ8GFUvdiwAaY2MrmuyN1h67BDPWm77QMac2oVMVt47tvbRz2qJj2pstkepHwazG4L2EwU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yafzVwZgb8BDTHchb8teCZz9vMoWVNEQkBmEtTH56bJ7sV6jJdNPEMJuyhnPStwQYZpbnxqcHm4u4nKWAkpifzd",
  "key1": "4osHipwamWUR48kqtcyaoGzmrhCGeHz1Rx9FQQoN9uXsLNAz9zNpt6AQdYeJG8Z6D4x4m3FGiWjr87AhPWkPXzME",
  "key2": "MBkpC7PA9AkQV5pUrFbWuqfwMjwR5n3XdkduUfyMpHjb6Mpiy14S4MSGnEF6CrNo4oLZrk85BHqKP1Qg7biCZXk",
  "key3": "2WZf5r6UUsMf5u3WLM3hBu6Qxxw7V9uU8qbESLfKAwP2AC7G5z58RnATzwz1s38n2EKhHqDzuWiJetrVoty3SqFe",
  "key4": "T8KYc89y77nt1bbbyUXpmiap4VRuoFemkFERGxUjaucfUxGARUaVydcLmBs47SfBu2Y6vHBMxnf7hrh5ejMp8sx",
  "key5": "8AQYo23Kb1TGDVsq7YVFNyX6dC4PikHmZbLG1V8gmeHSGAhxNnqanAT6H7eE2uU1GQfupsuETZd2XzKHAcWjhZ2",
  "key6": "eWohyT4JTV2i6VNu4b9YNpG5HBxVimPUKGgtoCgrQbqEEpGDKEoQ9nxtx37UazxeJY9rrLzYhDx4ZAXavhqPrj4",
  "key7": "5vyaq51ZauZCwtGgQRsgMXPN3ddGxFhgSpzMjzE9FnC28ChKqZShKZaW3xAS1GDziabQDcZGkUbVmuWV7oDsAc3Z",
  "key8": "357ehPgwij5FXXaMcRaAZiHyitEvKWsT4dJWcoYLYPzbKtPgRcQy5nRfzpHj6SNWVWmJVULKD2CbEmsXNiSEabJG",
  "key9": "2z7Ls5avCfKqk5RFaKiuq3CAoeq6656jUtzrwPFQoyjeuWUc9ZV9iFNxR6g6VuBwVwLQvjCenGukfddwsUReEhQe",
  "key10": "26zziH7KW7sUJ9Tw29q3ZxVWy3S5CKiTMC54Xc7dqY7fd1wzmSoi4FV14mGv8mWcHSL5fRWK12A6fsBhXKBoAqY9",
  "key11": "4Tk4gzf1BY8wPxEE2iBnR1eVeC7345eimEDnT5KAe9VXM61oW8bHAQz6pw9ZuHYkmzCWaQ9LEsyv2bkv9eXeYp9D",
  "key12": "5CAtBLk1N613STxxtfTZuHGLaBN9pk91PuRoNE9RBTEo8vSP4Ki1gvq7eyibU6UPBfjxCo5pow29ywxXy8p892ie",
  "key13": "57MrVGBgv6SjTLjQgu6ieJJqwy471YUfDnrCfVKm61mP3q4H8nNF3X9eThQt2P1ifJErnWoeHAf1sJq9eA6FxR6w",
  "key14": "5JWkunkcd6s8p1fsYFd8H5nT7SgLvSQVK2MExh9Egx4MDV6jkrTCYgoLYqVNCMGLUuaoiyuu5wVrdPzvVeUPrm1D",
  "key15": "5TaiwCcf4kC1ZE2XT1XuavYcfkRXXkJBAuu7f8fvQ4dmFRPMGma29v4CsmmavijTg34pTRaJ7zRSJdCmJtLZznnz",
  "key16": "4Bf14Y4dzsztmKhxFPRbtjbbH5DyYhvJmKCZsuU9Zu8q1y4QPufbsh3Mrazuds67ejsmgxN67dvPaCeZKKaqoSLD",
  "key17": "DYCA7NcpqJTifimqJCNPD1rqss4MQDfFVzeUnP6eoRtb1XzDbRiR95cr37vbSXFpBuwh7zEb31XiKX3goeYz4h2",
  "key18": "2YrkLg8d1skkwFYVU44My999Qd4BADKdGRu9o7aWnP1foDh15K9B4GzeTJTtqmU92dWk3ZjDZ17ybPuP5TWFTihq",
  "key19": "4rNjkxZcE717JLDnpFxQ9V9uurR7UnuXN2SH8GmBXmtzrPzqiq3618VtMYbe27RjytYkXQfpYYRo8Kft8FLk4Tv9",
  "key20": "5hkC9XSZys5pB4KWmAsrwYXWTZKU1cp2Lqoj2Ep8UC2gDs4D3pr4MQDmzijhLte9LNQJe3TtRbnxoD6AFARaJNxU",
  "key21": "Us4xMBud4yZv8te94YSFQyNvWFw5zCvM5vo92fDgFU5wLc5dEwJVa2LDApmVBSaHmy6F4PWubh1GVhim1SroqeC",
  "key22": "4RaXdPYwu1pVLJRv7xYK7Y3FAokdfqhZgVrevg9kZJNYDcmjUiwJgTA3hpou5DRuTi8wM4Ttb6Px6kXFntnphsS1",
  "key23": "5112cHfPs6Wn6TncR8j6KbLUFHAM4hTyFaGuWj9xjGrBHoPSD3fyAiWXsJNgdWYDZZ7bAuTFHyTnqTYBAUo3JRFP",
  "key24": "5RUgh1q9GgWoB9KFMPphVLd49wTsj5YQ1Gg7GBQxYTEPJf2VQPUFTuBuQ4ZHSna1vqp71MAu4hgo8XoaivQ3C8Z",
  "key25": "p8fFncfyq8KrGtBsNN9wvEhgnFwXLj2AzXTGFiZT2fnjagK4TZ8vLMtgCRmqysYabu9tdg7mu9nauYu3Q8QqxRV",
  "key26": "2kJ6WK9XnTN9VY3ipfsqbJtSCMt5rHBLksrVY3PTjtn6CLWs1Jti2zW2WNocFCwZdXzeKzo6Y2pWeehRMSKcU1Hv",
  "key27": "4Vam1bkhveKRij1bf9PxWkEAq6VcAe8ZYrh2Z4yuPSzLFttvaYEFazvGT6oUYmCcmRExuva2JhXAbUzmByQm1Qir"
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
