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
    "2KnwbUxhDomE9648mjLA5d4ASkDcdc7F77R117FdgoDCfN4d78f4gyUkJ7wYmNTPCoK796GB3GoGJMXw1zFZCcPS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gBTJWsatEbBRYTReLQgKM8noNxWTPD1vE7pADJayyA88LchpBMpdLUY4M1KSrEfqme5nZMmLBZWCTk9cyo8NocL",
  "key1": "3ebSYh3yahy117DoNj9LqePrSQpMQswzMjBce985ZLHLfK5xFXA6ZxcQjGmLqQVmhzL9bUEW14L78uYcEa2wXthF",
  "key2": "59krhhxGjQ8GsKCTxHC2UFAPwHNaxyvefzbAhmyuSpKx2gPZfdR1PQr75xVDnXnCE5DEH94BLvrAdQPJuyvL1HYK",
  "key3": "3YDakzRw8bid5aGYmu6DYzP6eNnpUBZz1HTjynR4f17QtnFZTFaP4ZahPzWwqsxj73HBy9bjFbSQWcxGKNjh2K5D",
  "key4": "2k2N68DViqd4JEac7NLwt33EFhH5dGA71N86CsZxUyG9AFwLfayFkdX6Mb2FkqTeC4UKFXKj7r2T5qU6dA3bkRxk",
  "key5": "39xQFMvBGNBaY6xLenVWfMErD6rVMNhEzKFNaJsjE1Pv4hktdu62Fwxc3s1Ehge15DDwURzBtsMQAgtCNxPiqqdF",
  "key6": "FeJMEi4mXDjmirRYYrnsgqe15vToV5uZboVKc1FDraqt3Azf6XzpAWnKEgveuCgYLfW3G8yygAToLJn7CmUq5c3",
  "key7": "3s1Ha9JVqs4usxhmYxZCUsZDB3ZQCJhzovh1k3D7uVkGqekd4TcytYjHzDdcnAYgiVhRy5UVyDTPGB5D684JA7Zz",
  "key8": "4BZj52s8PHPwuBcYMJc2zfT4HaA1uiGov4m7cW6P5BHxjs8DNQfHYBV5Vu4M5sEGiLDQ38b8kHn4LixcXhoK42ui",
  "key9": "4bpTp8AcGxhKvBwciJXaZYiuTygNETMS2qYpMr9MM2Jo3Ls2fP6tGUzunXLG57wrZzVreQGEUCXHSZUUPMt82R6t",
  "key10": "3Npp56xBW73wwFznqXQpQ8zBt4btfWpzvwJNdD4gdVNHsKV29bTLf8amJf1oGbGweWA2dHCQqRCUJcQ7XjWacPfx",
  "key11": "5e8Bdtt9iDDUg8i1LHqCLMMCtmPysRi9RwPoQdspvqd7vgeqHdExq1qg4aK5R4RMaBoUnFgKuKgVVrLD7t2KbpqQ",
  "key12": "4iYMpxh4VJj36y1ngAKBg9Y9MoB2G82QgxhYAmWypm5tSFjFLrUDJbYQA8YiJvbSGhw19CpZ3aDrcw8LHn4cmqfP",
  "key13": "5NGauC9hh2gLHsx6kkVhmfnZQC2JxFHMFqe57Z76zWQ6msNzohALLfTctLgunQ9j5XHdYgJUBi54RF7kDLnRswEf",
  "key14": "QPngs9A9qY8oSyCaK7NGb2eRPxrxob32m27KWiRycnciwr9w6iYC845dqPNMihvq1D1feh6oZkYHSvnx6LGfCZW",
  "key15": "2PCJxdwJd2kKUnzchKXaUy6WmhZ21ThMhJbp4RQohU68iMyZ1Ka34jazy8SRizaoKCyz3b9VtTPnQFp7Dt2MhHsd",
  "key16": "4bWAHw9L6Ax9jiRKC7ycW8CEBGJYK8TwxP9pGb2oJaDDHYKwsrCAfsXt2pTidCdGf4C1xHa3jNaCcpwhGaMPfrNJ",
  "key17": "59vF9vwKp4d8prAH3ZEwMnNNxYScq8CQze7eyPK9fk5h5FCViqjFXwDRV1e5fVAYdbwuD9ma7TYkeiWfCZQyPxXZ",
  "key18": "4n4Rd2iVEeBx1rcx8BEu95m1MqFdAbLSK48qTydEMNnt6inPjp4uihViAqw7CfQzjpdk5yYTz9qjTZ454hdcbhE2",
  "key19": "RsiGVZovew96k5UptkDiWPuwAJ1xqhSurBGNZksiCwku9VtA7V6XpB7Yr3pG1iiiG9F5eK6DEQBoKvAYZVjWS9X",
  "key20": "4tfNAPWzWNWH4XcdZydTHX99uUoSN6rPsZ9j9wB6Vrf3TozNFpGd1aKs4yUD5yxsi3AhSNZBGH4Bkyp3wQz98m8g",
  "key21": "4UfRSnLw9ftE8bATaZXQMbBHgsr8u8tykgAX8SUa8sLuoyeC4XWEzguJ63bSJApts5cLVEZvK4t1GqZdkfp3WpR",
  "key22": "49W4ynVGM35MYAxDhatmYVvv1h1ihtWJSPA7krhbfbmvytdZeD1ZnvSb2StLw4LYWPnZDqQkQeQqQxz5aFezVk5C",
  "key23": "5JUCXpFiufcwCxBSjXVzExy4FBQ5tDvuqoyUXDepGkMQCp7VsC7VTqJEwJPu9V6KPQ2bEJgW6CAnvMyC9RyNTQMV",
  "key24": "Zqs98NbzgcERf6TqmagUWsHFWYYt5xYL6FGmvciAinaREXJYkpz51SQ7W4rRNSnAdGhognN9jeoo36UKN7tc7QZ",
  "key25": "MsHHWqZQVRGkBCWK245FWh1JU4SmhTvWm1GB89rmEGuvLMEyRcmHopzpjw1XJ6mBixLV7kacMWqMSXjTQTfgjr9",
  "key26": "2SYEQK83Jbint1YGEH78u7tmuxXeD63hLA7nyUr8KpHyG7sQaQY49fWGL6EJCCZ25neajfQS1c5jappyNqYMokdq",
  "key27": "4sfevgSK82pfNQwbdzNamKd1TbWEJbEG4WvEQ7Yni7kpNmcShYGqay4eDA7tqouucNcjC6MBPbkGBBeuErMAy8SP",
  "key28": "63gTMVuiiL77rnEMMFQbsQwwd1cx8WPeAsJkgQFbapNPKokyuEkTeq9vbv4nbfHcSHgJgdUUrvdg7LNQ4P8jMUtx",
  "key29": "32EWZs512gWJ7xfPibLst8KxpKki1ckKy6PjMVYW5cNPt46VAnAKNvkgeKdbYaF5kvttHjo8vHDq6kMYe5UHkH1s",
  "key30": "5HxPr4xZQ894c8VX5tFWKLXD57J5qsWHgAiBkKBRWGUH258T7a8aVYoTwUGHetm1xf4FwWGoQHr62PznSk4EEmMp",
  "key31": "deWtvCdKKWAcsrach9H7hYAiYkco88vT4338qnyEZtmajbNkb69qQfXZkzZVNncXQ4T7cCSJULH31YyMBd3WePE",
  "key32": "3pjzs5N2nywCVc7tiNG2uKKKvbziws89s8pb1spiKTPUMBtNLGT7MRJUujs17ad8voTtx3QwHYPu9yuKdWGQi8pm",
  "key33": "5EvrZoEq7qyooEuypvF4t5AEu5USHkQC3G19ZEy933eBLRY4dAom8t6bUn7BRKQuYSmepPX1nn5gx55fCC1AXfV6",
  "key34": "63BWmj6vs5QfcNNMigS4KGm547ggeaLhXZdcGaaxqziLZfrsgXPMyGxC8xjZntSDC6xHgwxR9oNRvnvJ5orYhLLM",
  "key35": "2J3cVn5AGzbPtvGHbjKyX7XwtboFQxnbpoAUpKkJELZy6uVEsL2und8UgmN6LTzjeSVpaU2NSTmPemQCtA7sz6kh"
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
