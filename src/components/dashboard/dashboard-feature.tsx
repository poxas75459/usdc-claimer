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
    "4amonq3ZbQtMyRgbPhoLK7p5RLEmmXbhp6FSoDdvxMWF5q9Cw3s8xnECCBd92Z5S5Xxz1cceVWHiBW3kvFGKDGyw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UeCFpKD2zuQxHgLUw55ZqoxEZiywE3AyvXQ4sRHJaCbWbTcmTLdTZVCsAZHTkM5xqyzi4DHA6ptvz5AGng6KLSy",
  "key1": "4cBzE85FqDnbrxmLg69eygQoaG9R7H9AiJosQmbDDpGCFufTifnZCfyK1bubhreHZmXLLk5EV7xkY9yCvSuGzLwC",
  "key2": "3pF3jWNYcdwP4UEAhC6Brt77U2Xco16MaAASEUEh1ZF1SvDk6RWENmXdvtywgXYV2BLKi2CNia1E7xKgFPbmvPVM",
  "key3": "2VaQ5h5mhb3qEN5ANBrWvRnvvyL23e1azqV988wLgbUv189Eaa6vibVXkMvyEsgvcSGDc3JKv1pm5ziUmZe4eqCB",
  "key4": "4j731eEP35agpT3jcf3nRQWNz5iHyp7TtUyssCGRhSbCJvopr2xjaJ87XYSD9PLwmb2FcPyU6MCeUtmJHTWaSFFJ",
  "key5": "5GmVp3kkFagdRJPvYbQxZrYyAWGgsVxtbrdRaTJeWzKTw1rse9gZtMHD5nS4qLrHbTbYmodVaf58FANKYpTc9yNd",
  "key6": "2MagpCatTz1BvTAVnSPXLMTRc6H47XsKyturM5rU7knNmrmp1516HD7MqDXM6pedQ3hbwmyjyBgkNGYCBjYL3gg1",
  "key7": "5LnaLtf9ywzPMATVUURWDxzCSWvPXu4JLYZzh71baXgu4dJVPxCqDAxmNvSkKPBNs5Sxy7McPCyW3TPGXSNApGA8",
  "key8": "2qKZHZ3LWGP6un1WbuNVQYMB8zwXUbzUfAPiret7yiHUdZP1LUyqmyvWxQZkES5X14e4u81u2qMQM7nMabRznZXe",
  "key9": "2km7UXEy5ELzR9SLN95ZpSZaRPKo5aNN5YuiHyg9F6zMPEpDkCajEsAPECRM4RHJh1qVYajRLfaE8KnxdFtPVw6u",
  "key10": "4JBTqEyby7scrXdJEWcELuSPuVhs2Mw9qB1XpzRuSxkX7ZCnihKGzMdjYnmbSEZd36ht6XHxDwVkbwLV7QbEffY4",
  "key11": "4whejXbAoaYpGU1J76JR7oKQ1Bf4Hg9ThnPMfLiDeE4vuaDKwQWQHnpXsUr9zFbNJqoEri51N24xcZrciwCSNSqH",
  "key12": "4wF1wKupDkDY9UCB3SbJJaixrdayXJnJMTNvUKjpZ3JcgKGpdJvPPPGDy7ceMGLQ2ZaqFUVrYW4F86D77bBj8xNQ",
  "key13": "3qSCYdr8YA2QFuEr2dyN2JHLFwyVetf1VPmCc923QmPmACcyydE4bQpEuwNhsFQ7HpCHeijsRMPswZE2jFtwQANu",
  "key14": "3y7Hkf5Q7Q9G1pPNDKJgzJcjvVP7yY4u51ofs6Yf8QUn9Av796T1enJ5T7hsZFDDUzzBcSJ78YYoU4PHrFHVjiYe",
  "key15": "7cU8SA8k1uMqBU6A5pwRJstej1HSd4vgnTUDBX88oRJjfEzT3k45Dg1Zd1f9U4LwcLyTof89UdFQovyzMEThhfD",
  "key16": "44fDBh5ps4n4yquVz1S7nLKx91uxhpGAL4kvYvh4mzKgm2rGdgAx7taYE88stnbsQi1DXV4h1TnZ4HfKv2jnFf3H",
  "key17": "5ezVfKf3SySjZB3aEpDWnc2GhKK8hCUMkDkahAj9uJmR7mdxWo7RnVtXtTP1iQaNnu1iLXAbiEAEit2j1mnZsFqL",
  "key18": "uU1c4odbYaYtSPrQ1SRUQjRBAzatM4SkMp1phAjFyQAeUUzXZqzdkbgVAHpihunsyxef7rcuKBUKU9kcNdA9Kq7",
  "key19": "3WoDkQwi4EWXWRrBFdhU1hL14mEtzthdUnPxMwqeSRVLdv7zGxMG6cJcwaVJbGjG21oP1yLid35iju5iHKgpJBgL",
  "key20": "3MfzmgjEBsgqtm1zqPBKqBXUruyr1EyXWPVNKcmSgnq2notnQqneWaNfDN3AN1r4kXwyXGsPYXjRs75SKnJLj18h",
  "key21": "EDXwuNxux42mRvigusoQLEzyHuMqHrYuoDt71fNJccQ99RfULkTvTtRAo4CUhS4NQRpHog53uCuXA5JSAeKV2B5",
  "key22": "2tTGpfcFx1vCdxGDkwh2W1348qeEZPCRKjZBSKyDdFJP7Qt75Jr16S4gZtyF3oQNvsr8A9vQuzo8u969bqeeF8qe",
  "key23": "57YnM1BYbKSVVNTwaqHfyjqeu3mPBtNK59jDvzB48KkMekLUisJLhF3bX6VvKtaK7aKQzPbUzmRHF598ALe84v8J",
  "key24": "44STTrPRoFiHf6Q3hLe3Pvn3WihK2wFmXZdUmZFhj3tS72jD6g8TMhuTPUrpR5f1GM3Na3mJvzQXQJoa8dX9qiWr",
  "key25": "3KVT1DpwJMmHXwZcT18HfKy5ZPrtY9Xk4A4f2C6uA17t4M4dMLPq7mpYH7mDstUCNpuUDF2Qzbe7BUS1MUFRnL7f",
  "key26": "DERraRVyBtyQULKrKMePZN5aTTz98TP2hqowuueXuZhrjhJrBkG5YQmpSRXVAqAPryiYZYtsNbchFQKesE5SkA4",
  "key27": "5pC68qGs3EXaGgtfBinENd8AUZ1AXixjyA1HWtHEgkZKdUppGQ689KaiqcryYVQ4Bkw2PS7b6qtZvD62TQ7jPVCq",
  "key28": "65YE7SnQb9rEgE6VkCteTT6zQg1thnh52ZXM1sR7vL6GekwiAgnMF1sqkR34UDiT9echxTx27bV74XzqXUu6dxy8",
  "key29": "4nk61FYkgXxKEwmT4h8JYvh5CyyJZKbDtkBi4HGpS8dszpQeH21uGdnSwMz1Tj2ecdN2C6N7ofdf9RusXUGi2E4i",
  "key30": "5oLyqmC7NSK49kBjSY3Zhboh53rpgwAubKjwUtjrNLFcTnucNXksiMnKhRGYkkDJfzV1iHEVRFwk4gXLBwksvK9J",
  "key31": "V75qMnuQ6YovzmsMGNZqdzcKqGc4cqBv74f454GH6E4613ZaKk4f7Rk7TcwjiExDi9qdtzaPMK57vPARZqQQcix",
  "key32": "eZAQ7DS1VcRfhqgwPid4t4onKgxg5Gzq6ZZJjgAKWZWddfzfQQ3YTg8d6Kn1eMcJXfi9jx24meYL2xgeJK5vzSY",
  "key33": "3HorPAWMxhLffH4FngYoAgJ9NFbXio3FALs8DxGVn1s3nDAqCe98ux4JLKH5DFTpk97osW4VW6VvcYG9J8pimuYE",
  "key34": "66NKBabcWTErb3D1wULnNTkd8ny7hTYn8UZVzdmS6KjrLtxpKLhDbioHsEgdMJtasPhFrq1NzFNduQG7nUG4uT4k",
  "key35": "3jvDECvDGhGtvF2gf7xbe9bfz6zUW7swzu1pBebVGK6sSfTrUDBqDfGxFTs7JjMz4h6NApbJ7KBYsg3bbkghibRZ",
  "key36": "3eKFiyf5b6SQYxgZ6PS846BZvj4SeriKQPqpZe97D1jiDE6nL29DYTYe3wafqhMGySKu2rPjKLhqQ93gy1hVUVEb",
  "key37": "3nAa1hpyRPWs3a9PSD84WW164arPkkMF4EDY9qTxuyW7h7qnk2B3vBc2vACvHb9mEaSEzzpY66YE8BthKCzzX5W5",
  "key38": "3Yx3PPg7VecjzJVQzPX854xcFQrfGPwU61weNfbf2iULJL935c4N236iWcuKSGWnCAstmPq97K4gMdNMRGn4fWT2",
  "key39": "4JZk9TWtWFUE25CR6AMsUfKyqAp17KJDydUfikmsuX912J49BujHJ6cMPFVn9bDeo9nMjQfPKaAxukqgLMVYYrWJ",
  "key40": "27VvoCQqo72rompZ9sTPyy3i9xFJfMQwqTRY3iBFPuTxLMAwH1MbEH3VyhZkN4PGU6fjJerwkkUUBqyEwBQH49iE",
  "key41": "zfyXPQyZm1qXa64fnRPbppGkNRY4rEYvXuQNHHTLrsoDLUz9VmGoanEQyrc7RyRPB3LhzoyT8WXZj3vBjDtxYXp",
  "key42": "24jKiBqrYxFYUwbd5uHoEomBemCKStzVqB5QoHYkQx2TbA7QnghiSNjcKgnr6x7gzxxLqDL5tyUh3JPdxBVZaEGK",
  "key43": "4382TsC62XdDcjF8Gqz4fzu5ikngUomERfhqiQ4DEDdiZ78cReW9NpFK7TQqLiucfppZSBH8iWJcheDxKGuJDEZ",
  "key44": "rVT2vpxzNGnMsQsJG8vCqRUSgpb5ryvSwJsACfHaGUYZTo8vfULjA1RPGEgU7LTffmdPuL8sARkxD2eHEfs28nH"
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
