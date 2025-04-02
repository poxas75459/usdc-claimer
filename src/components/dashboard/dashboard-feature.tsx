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
    "5Sbx583xEgsjTkwx7SVNJ99AxvVQGqhvs3gWKN5bk8fpjkAaNxHn1kiAzx9FwHT6wZ6s8rJxx8ezGrv4E6VVSQUg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FUtWofdySF96z9FcYvV5yfc2aD3T434QfjD7NQDPBtcG41qmfMde2LFPLaijmq2Afaw6LWxFVqUfccGsUiDbK7a",
  "key1": "2fnkVMgRf8Reu52hiMuQkihEr96k7CgMBFGh8Sagp8xMBPJvHsn5LAUGZSb2eWijWqNiknwGLHkNi5mQZZpusZt8",
  "key2": "4iNMuuHYX1iSCKc7haWcuZdhtcJMk5b4shG8aQj8sZrou7ebzembTZR1v1ZjVjheWR2GKGngEhvVEJkKMwgduucu",
  "key3": "uHVggZaRuuGt2JjefgVS7ZiGjUseKzTENun6oT43z9DiqwY9ycmEj5wyPsfuhGPu9sfN2wnhFmPp9sxznyjZL9s",
  "key4": "QmM23xqVWnpQhJAn3foDstkVHGBAVMVjDfRK7irZXokBBsVzkTP8WEVXGN3JpRxKs67xvYhXsNyJRo8yZpwgi9w",
  "key5": "413SotifF2tGQu46M8R8Ka792KP2pUwTp5ZL5vPseByzcKBHTm3JfuQZbz9jBHQ9Jo1Fp6yeHyWjSHw9xnhifKtW",
  "key6": "2dZzLvBt5J5SKM6v7aoTznh3oAmv2xX9RJU9Xj2DdNzJ5HtwyVFy8P44RMzTsVpFAaZAJBxDaaAJtBYEfrXueBfQ",
  "key7": "4nhQqwHxFpH9e4rn9NBHmg1aSYHwTffKaCDYVjJMNigtXCWsbkXNjABBQ7UaVbQKpqo8rLFoFbMchRC1FcH8qQmV",
  "key8": "4Div429wfoZu6qu9Ax5JjptmibViLM6i5ox5yK3w2hcS9zq41BgzJGyncSwZXcHn8BnaswVkughiGPKESVj2T9Be",
  "key9": "5j2UqbtDuAuKKTBckCoGHQekuySm51iw9G8gXNz5xAfbFTwjw3E5TH5ZDChTJoTr2TRR1ZoiPaJyKpEgFn97TWyp",
  "key10": "4z7Bn8Tt6ZJUjB7LcVfcMgLEYK8EnuYrr6DXdTWjuD2bSVdUXL4cv7Wf6c6AWnjsHeSLTqvBaq5BdkkQ2YwKRWid",
  "key11": "4myAEwKWm3KBN8pYxGAowqqrHtLYck1v6fkWwxWxVoSkEH1zX43Kz3Jarj5BLvA8LTe45AX533vjnjAjZUPWqjYj",
  "key12": "3nPFi4Py3pjHHkYyKV7w25m7XpEZDcERSPsxyiW3N11Aqc2gLK5X2omPinfqJZzABMrgEiDj53ZQodUssZRRPJ3U",
  "key13": "qwS3CtEv4hEAv5DxkgE8wyep38sF5qGBStPxrG7UHMRPqy5dX2y6yHFCtTq1DDcutzM53s5jSSKwwNbph4NyYnG",
  "key14": "bMKPqfWfm7kU5AR2FNFxJ9wnev726m7HAH4a5Fz3krPCTMtcz7Ymevi9YuA34VquhJgQon6pS6m6zMo5DmH82V7",
  "key15": "5XPMnqJnWAMphB4Ux9j2GGWD6CuiiVYJRFFVHRzgx7LVr6gpwkVeQm1VJEcq95Nn89iqw9pk17FTMZQcnnudd7nk",
  "key16": "54o5ZU8aK6ntVXnnQA7AmGjF6mniobKF3i1wyuZZAL6vJTYHTGhyvTSpnG2R6u8kUzwu9Zh9P8C5gHFUHP1XMB7z",
  "key17": "r1JuXwkKNvQa9BiYaqgXYgCzs97LicdTf2q71UhJ3UNLEacy4ZrbEU7ENmno158WKtFeHETBW1VSqJjPjGyvgs9",
  "key18": "43BombvdBP375Hsq6pEAuaefUKZz8tp34wj1edJkyYArDNPCKv647JTBMGuC1ERRChmoFDzcHbiTydNJ6L7gH5cb",
  "key19": "3mNik48PokHZhtZLwV4MBWnWGZnc9PQMgmbFdo4P5bdJ3U5utUdwzuhhbTH7oo9opsZdMLHbk1hQ8X3qXvCpdoku",
  "key20": "4CxRa2hLUJJDCvs44intAPqggHh3UX8ceZP2HGhSYy2Jvmf7eNnjPcS9Ga29PaVLyZ3WtuAqXSN8fnjAwwfBNNn8",
  "key21": "4s1URkL4uCu4g1LKFG2zfcwXtrsbySKjDb94xGPRQ3vZDHrQnuzArzCU5Bo9p3xs6qTtp8GvizhnqFuyLnW1XVSa",
  "key22": "2F4HwKTCVZ9ogW4Nc6SNf7iucFXxt2hPJhQYYUoioB2YktiyCtR91pjsQWHsHBPKcCdHisbehfamMd3M3C8Z2nZ3",
  "key23": "5PnZD4srDHFpJyV6DSLyvgpk5CHU5oPNhmRUjsD6GeCXZGzevHjkvqKCwjm8N5NbT5kVZRSXXeBerjLvzfgQEraA",
  "key24": "yAusX4cYoLij1S3x5LyFWxbH5Kyrr8LoY9YivvjRXyXymeCfBdrExb4iBzPmgZyUAa5ujke5H9PJiyRZ4HJw8wL",
  "key25": "5ssfAmXpyNxc69nmGJHtdqsFXoWi6YvDMTK8Azwfsda5hqKYLDjrq7hPXfxtiGfR7jvLHR7Qabb2VaBT54AmPKCB",
  "key26": "2Nima3Y3qwRpV91JmU9XUyyC2cxfVx4W8hownRbX1Lqsjc5H7LKok78RHehiRaKgfW9kapwmVn8G5ZBVU1SmqwRy",
  "key27": "GwX3egAQQrbJNsGcY4zCJ1YxKBk1S9rDQdTiLSqMhx1oxRqzuJxELpdzaPGutCJS3iZV619wxDpLCxrLmKycvvw",
  "key28": "ZSNJ7Mxgy9mwCzbUTSswx1wST5BGeTBParWjZeTJP7pCdyYQnw2gtH7H4DeALkVcSo7UiWxyQgyhXkTBKVvvXv5",
  "key29": "4DhzkxSQSpqBfMNPKM3BbpJGwcJWLBhGiCkecUWfhnzvG8o8UwtomuVMuwdnLQwSTgEXdQozv5yAxdtF77oyVrcg",
  "key30": "32Y8cZJBxmnncPYQXKNkDwpnpYKdcJnz6fjoUcuswpLayqtFE9dxKeYhc4SUGPxJSYJ2BfajsMan7WYXmBEAjMMz",
  "key31": "4r2dyPALRmxyq4hXLnZrokronD8FU3WjxQrn775tfysW9L9FaBazniCw8Gb4p5vrRfTPqhYGD6A7GdYwpCUB5mq3",
  "key32": "4TP6ZjrT9BkxEf352s3iqSLYkbpjyTyCuZBZaWkQAHjhRnUh6vpNbNjpuG7AiH9wuwRQMGxrbizsrMDzZsL1AT5X",
  "key33": "4Twg6fyoUcB6bSpMRf5fE8fVbqBMZav56WvgJpkU8dKPfpcp7tKzpfg4rYgPoEREaGT7PjFLU7JWEzjS7mY6ZJxo",
  "key34": "2b4etyN6dFTtB1tsxFc6ip3WYpz7GPf1WR8sWa1YsCiSaASdS2hChDunPFtf6Zj8wn15RiK4beHX3qKajy7NjfrH",
  "key35": "24NKA17zybzhwunAGK71MvxqgPBAn3Lz9HChrSrvWAtshXcPWGyhfkqbiFQwFacnXAp8WCqzskJL7c8NyMcDn6j9",
  "key36": "4AZxcdgaQw7kzSzF9kdaFKSeJvZpkARXSuYGvMppBUgbyBNDTfHPnYMJAfuzefmfavFk97Rzi5fYGUHRngqRo74f",
  "key37": "33wDpn2ZCSp8sxvB9C6CUWwxT8wSozzggN2UEzjRbgjQHJcnjHAM85bWNVnyfrPzQShFhyfymf6p3JVmcosSX3en",
  "key38": "4TxgAEQk2ZWrmx2DnDg9N4H7j6Bowax6J7M2UUbUDmbiT528qMVfvT6JFpeef2tpvJHQBXvSH4v2HJx6sQursPRq",
  "key39": "57o1EGkHGaCE6oAyc2BewzezyM6Wv7HZoFohzucq8sjV83zFi1Q9Xrhw5cemzzEnoq3aL6gvgzWMkY35ig5xqW9H",
  "key40": "2QpHi8kuSLHdXFHP4tkBgXKbH32yFVE53FZzDCfMBh7kswmPPQZ32LLAzoa9Q5Wx1DuSQP5Prd3FFCrdQcyjsQdL",
  "key41": "42ju4zhzMeEEqNkL16Mg8k1Zvh9QQaHQb397BKTbvVEsGBn274gmGWQbmemPuLboEAH6L2t5fkAm51umztFNWm6b",
  "key42": "23CmmEpDFQjGL3MUi28EeC3URCQJgnH9uuopDCmdgNj9qqtgcVgnAyrQ1XsbbdFGTX2G6QFsPY5BznrNWPVkKRXL",
  "key43": "53wyPWdqdqaCEj9WB3rnXYCPbQ7UnBAjtQFYUghApy12V7cSS1QkB17CmH9fGpZTEemyzNvJUU9GjynvzFg9Hbd5",
  "key44": "4YdFZC61ugvA8CJZydnBmwkCpyGyroh6onSbE71oWZijyDNRbaAX4nGEmtTsYnQcNgXKMT5pkUrvkKT9RNruCvQD",
  "key45": "3n8Y29mH2geznenX34QYyJSMxp1Ktnm1VUtaYFZ1EifX9YSUTevAnNCWRkpXDc4XoP58R66Upfbk4QyE5ZNHxag"
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
