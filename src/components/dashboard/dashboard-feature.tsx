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
    "25ntRa6duC5Toj8q7odXJqNCC8EPTxH7xUdaZVyU3wUiqQYFYitpYYJZc6M3tiQuptCbeE8fGJXepTg4fMyN5Kxj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Rb1VKYNm6aHxT59dh6BgHiqq1SY5L5H7LQBZeX4QAGRongjPa96BZqNfJVjWeU38YSRZYd2YzFkXH5Ckvz3TQCM",
  "key1": "5PzCDHaUCVU11skhHyd5kSxp67Ad6eV5kBawuEXT8PhmqeChopELHzwbjAi16dF9KQAJQ2fWkFtEqv2uLtQ4S6e4",
  "key2": "Kf5EoVY2Lx9KD51bb2XXbnrzEjYbs28S8rRdPaMLsuNzoFdgCYbYrj1h1WwoGAL48XmmYNwpiXaeySo88sayhLr",
  "key3": "39TSQ6UsRo3VP28NQaetjubPC4e88B4PpCtPnoYocJQCycdpo3SWMu5RsLkgh74ED2KYyeLvwEGq36m6wqYFwheR",
  "key4": "THkVxrjcJkcaGHR6JU2k7ZCgUbFK27YGgu3kdtFZPN6vbokiptBP5Bt2HPDpmYwY7zNKQi8zvjEKMNyu5Xk8xHx",
  "key5": "4QMahqFaRPFStDfjvHmKQ9jAJnXPYWntP86sjsMCPEBjn4K28J9ceCH4VknEPgxtKCnsCKPmhedH1kYRXwSjD9sQ",
  "key6": "3HXNkVDDRAUtmcDsFaYWMxV3gTiFdukhUisHoKR2nJbVU5napNQFeNUtWRqZbWDGzYieVRRuGCi7pCyDS8GUSoZR",
  "key7": "fStX2ikr6pNfh3Pe49MEVvywDNdZWjy5KNzjPsgkeAP4F28yULJXG4J7w82zxrXwnTdPuMZsN1P861DswTX4c5Z",
  "key8": "3YAxAoSHdWWqpYYZLC9nP6mDKf4vGzfximT9PSpw4JwyKRrQ3wF4Ah1CHKHzyQaz9wXXtpuvF5Da3H52R7QWQ1Mw",
  "key9": "4a9mbpuu2sgnLeYnuRtY8NWut7ioSUR7qyVdcHAMSn7WQDQaTsDmHwkwTBB7gT2C4H9s8S4Esg1J3WFhaPu49jhy",
  "key10": "w6ER2Wu134WTbZ8ovzRt3ULX5KxLYjR52AtMEaao9JwKy9ZPHzNSbPFZeXs7aCwX73XJSayka3iNrVTceTRjFUb",
  "key11": "3MYyigbwM5hE5H7HHUCDW87qMyM1wKcsYorYotXMJH18575EWYQEryT8Ue9UBjBBKPQW3nk24fkG5fQRcyZ7sn2i",
  "key12": "hoJTk236kNDef7tCVp3qX8CJrv3MJw8qztH3NGF1dQXthYtQj31uwRBVFNrb7eAD2igAb4xjYXsaiCqYyFdTYot",
  "key13": "4fWdMcPFR8F7c8YVwCsdCdF7C1B4mwQPm7Br3EQeceWNudTbkzmEuKeD2fer2zWATbYPtLESgVyWQLeggb9VCKsx",
  "key14": "5vyZWgHoG5MNbtSCoBYHpxyLj1Lv2XRRq2HgPL9eidiG7t6vQFFQ9hJ75v7YzTrSGsXPWHZwGmUo1QbNRx4i97Px",
  "key15": "5NSsnuP8z7TYUKvUe5WStAybyaiuXxpYFUpL7CXeT66wEasjtjFbwCGKCVPVqrUGpBPYC8dCNbQkabZWYzjbAgvo",
  "key16": "MjM9Zo2cXMgYMYjbF7iFXN84Ja1vXj2sUR5AiEAmHJh8msn9M2FX3HZs2cfoscJxVecsNAwVAWMsxqq5821Zjxf",
  "key17": "Ts4krE6mD8xEev2vjnUu6KwjXKHLyKXUjskAsLA8GzPtgn9ogVjGTuCvzXuj1Aj563Ukk7AqdFhu3WwP1oD1K6D",
  "key18": "53HJJnimr73YihrX8RvaDTaTpZNxcLkEW2cjGQD3E6K9q6mPtDYHTwMGAMgFKYLFqvKkC5ZgGkwXcFpaCkJsYsyy",
  "key19": "Syng5NVKUxizSwt9i19pQ4urAZ7fUmUbUyxRwc56KeWdxvQDfbKtoM6aVWKKmpeovKJXCAJfRG5JZCNY5DNe2mg",
  "key20": "48bJeB4oNTzGDBVqf7SaT4RyaeLKNRUq9vsPwZHshhqkgWomrsgZcVunv2wKzypXxuqR8kS2tuHCEuDyqimgaffv",
  "key21": "WqAC72WSL1e3vjNkb9CLNkrNXXiyPQjGH2v7SdMqKToVkKfMKdxEemaTiaL4WVc9s39sUiWi9R2UvEcnCAZL4tL",
  "key22": "4QYnn9vRhLThMQN9FCaBmPSyFL3x8rqieK54ZSTBJPxi24ERU2H6yMakvYkAPhyT5BEECqwknza5A6yPN5w8tcrB",
  "key23": "gzSo1suv2gd6Dar8pMWndt8j1xVS8EUSa1UgGREJygzxBmN9n8QrNGqYXKPw5ytv5Dc9ow9pm8BxkpqwMRmPneF",
  "key24": "4a8LhCtGx8hMTba6Zm18vmnrpK4VCPaZoLNu6uCVcqDHRdxf2UtNpVTE4366joxaJpjKudQoUUth1ji9pmdFWDLx",
  "key25": "3Z7mxXYSHSQV8HC6jNtbNQvDKMpMfnw84721upidCYUHx1MPGdoKE2oHkJCFcmVjR6g622sWq6jKQc7mWXzWXJ2w",
  "key26": "2H7nfmiSmjSyrKcWuc75EodT9oQsGMEMD8ZBcxFHofPbSCm49NPjnpzrS19z13NnKHwcsrXWaaTfQdn9mrxmyN4L",
  "key27": "j3MXJ5mfj7aFX1Qm8EyTGqMVgbjjsCxfDjZS5Y5bYT89QTLL2twtUkJgAXCnad2VygRTrLKMbTeccZmxn3hAiVk",
  "key28": "29YgtLiPmTdGoheB8TzQkSR3YtaC5rHBU7YKe2odKALDEs41RkdT6J8WLvj3138bWLWmkRrjwF9czMrXRCn9pRor",
  "key29": "4ADA4nTuvsCKdiSQ9y2diMoLabeMuBMSmJBGoPfZf8TDEr6eyGLpTHgKyLanUULCTcop47zDtVmFQy9E1HeF2Xs5",
  "key30": "52cvAVuC4fJ59MhJUtvHKxS4a3iNDfXCGj4u6YSnwkyGf3U8oQ2A6RrudMScNWaZBPQzP3oKXwotS2H9C1R19VyJ",
  "key31": "3GsYbuUJ3YJ5AG1uuusz1AiUxLgk4nrxs3JyjURNm7HNCRqAySuLyDkJtDaBctzNsNCWg4kumuckXztzLpHoe2Nn",
  "key32": "6ZmAyZNGqzX1JcfekQYb8Xy1FZrJ7yV4fzhFgH4K6mky67rLmJnZ2udrrRLEjWuFsoCaypgtGtKSNj6CLvWj8JL",
  "key33": "2zLzETEqDaFRgqHaUgcsyGLSGty5uAPJjUPaAAu7hK3gLfVtQvhAYDi9vs5yig4g2wt6VuR2QZdr4whjVgGzdxig",
  "key34": "3EJru7BXugFNGLmEb5pspgUxXdh5Zsr6a5eDVSHVoVLTFBLQg77JvGs4nS8i8K2JEgxAodusV2Nn2yKy6y6dEETw",
  "key35": "23ZJJgr3KaYJLCbjkAtwnJwR8WTnQMvZGPdcLKVbSaTnbPS7JAGCbQbgAqjfWe2SRyxbysFQgE9MXKqy6xXkZnze",
  "key36": "4q1HSsQenj8WCd5YENgJmdN4gpMzdaGfMzNkghDqZVMZQqApExwQxe72ovXPbSsBbgPRn9okqUSBWkqwexHvN1ad",
  "key37": "4gp2nxFG93ZHopZpezGCfEsKvPSAL8RPZQ6py4RBTFMoiBRWgV4vas6AUoLUkcZintDzmaLVvBPdc9rG56qNragV",
  "key38": "5K2rjN4Ba1TovfqUbEpx7rcysCF8a9TmswPf5Jzv6srS8q7ScMTp9T3tZMW6BYEgdxMWfbDK4uK2TX73KAX6kCJ1",
  "key39": "jPPPnJhu1S9R4WpubCGcLDicnPKesvVmwVY793dArZB63pYtpxTs37MBzUF5pSnzVfRaFrNNRJpSRzddpEbmjvC",
  "key40": "4Aj4FUu6jcSbT9qpDsekfPZeWomHHyXmArgGHzWdufXHtGLAz9FUV3k5NYyLvsJSPLyNTLbitso4v9D7zvMpms7F",
  "key41": "2VT2QMb5ZsKtUC9YWw1H7HetPLaAyxQfMZYrVa73Lm1Vn66JHnT96nnKyThnUcVAo7tqPiSrsiUHKGXBgNN5h32Y",
  "key42": "oEJJjH6YChBSYUPBWSn7Z9pgCUTmurYrAAWYCZ9XiaTN4vuvZxtuv8zBVVbe5W8yPPKDvcpd1Kw9ZyyuM6mWDgG",
  "key43": "59gmjgWAQejAyvXxhR62Vfqcq1ddrDqqGk9nPH9g3t8kNsvLAtPuwp97TaupjpSYVZnC3UNUeLmM36RMet2cx3pC",
  "key44": "2h4BbgYoeHo311oMgK17bivLh2DBNrs8sVvpd7yjKW5r8zop6q3imRR9wDuSosmfniFVqd2CtArrY5Tg5TvaEXD1",
  "key45": "3uCy79RHtfhR8KrNw1UnWQZXBko5YYzJW67h1Czq8LwwxcnnfTxrHoqhPgrnnkuGRUjn8FrnSeMZ2hvsCUsdHe2L",
  "key46": "5fWbW3XsX9TwHgr3VBLARD2kSYPD93iazmqGKrFbvjbpXkEDhwCAArtWNrqcuUP8W8YtFv4E59ShzZdcxLm99jzb",
  "key47": "4XFhuUvaJi8VyQx9wCwoDdRo45Z3UdyK2UiKhdcTU5HsC3VKRzz514j4CFCfHZJteeD7MZjetZDUf4nbYtAT78R2",
  "key48": "5YdjrjLZYqmLW5nXXWKY8UZgUyyrcufjzdKv67vgoe99GaqQHER6dEXkQT3vCduAL243Fnzz7vKCdZfw6xEQxcjJ",
  "key49": "3Y6AnZjShd6fzFXWreeuxPpiyJu2PqeKWjz7Egs9mtbB6LpygqbiieVhmMzzCkSFSWThNhyZApftAi53p2DXvRAY"
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
