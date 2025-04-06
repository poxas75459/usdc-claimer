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
    "ooYmBhJwcNBp6sRnyeo97EcCXUCvhfbhhBF1EPEh7predy1G4FSVj3UF7KGHtwGzSYUAKmauLwAUqQMshA6YFYU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ftwbFrk7jmhKfHrwAgQe2snPu43QZ28XZD6wxoWaeMBdTw2cVLTPC98MC9dGvAQxZbcWPVSNapQcMVLf91316zp",
  "key1": "5swyhe1YH6FkY68DDh9nS8h6iTTeEigjyMaCrFhrDfxMJSoLM9yLPvg1aJ4dR2pCqQqtcd7bHmpYxZ2ACKSsJRR3",
  "key2": "5NniZwyg58E7QgkgQRFyhfVL12BZC3cqfUdyx8VaMz6DqBZtPiJvWaWxNQaKGtNHE2tajvak7yk7YCnUdyQ5kdZx",
  "key3": "vaZhJeZXSX4wgUeMf7khwfhmyn1DPBqFLq61iRznVDnKHS3CzXodhU9JVgh5XoRHBCFPbVQaccLgfENYvfzeHE6",
  "key4": "5cQZNKtrazjsUJRWyGVzxFH66gpYWHjFBFLqRcYn4vVDUk2rXGn9dE44c6eV9kNLSbCWD86JoKoWBQHQD8QgZdwJ",
  "key5": "fHK5gQ5YJe2SsSWLBkGyC3te1tSc76UNqhbypSgZphyQoeZWemyUr22FQCN3D8EtxsHsJ9C5ZgsbXwwcxnj5Ntj",
  "key6": "2xPoxe1GMceU5qhNpBfkJqmbirdE6zGo32o9MqgUsPbH3is1FfZbHNo4o2Jp9erx7HDgemJEm6EiNK3jwC3FfxEH",
  "key7": "wXcqyAFfg5RLtP44yi7ozr1AQ7HgU8mP8NqgTGXP5mkTmCAhwUJ5vQjzwwnbh6B7RdFbN9NV6mPBkU37nk6vyD4",
  "key8": "5pPxQbYZdH529Ab9GWA6tNqQg6EJy6M6nFcW4jWuXFDpQHePyDs1TAKXrop8hX2Q4XR5FwyH5B7bGm3eNieQvGhQ",
  "key9": "4TZ7kGnYTqMbwpN4jfGMremoTiwQHxekKqfQXXxP1pbYFGwi5dXqsLcU9BCruMSoTB5RTfcWmQBPNBQRP91r7KFG",
  "key10": "4jeBnTTDRhJNZCG1ajbixRFFhENvLYcTYQPbvuiSvp6WkQijMa9zoYmhcVwfcrPJc4zpuWD4WTv6KjsZA3hc7zzu",
  "key11": "4R1EbqBH9TdmXmoAcbAhAsk3uJ48mnG5UcT8GoytYDxWK1Zq6hTLHeYXVobDxukemwNYPUsNYqGAJGZfwn2GGokK",
  "key12": "2p1qoaaWpSqQQHHro41cNRuAaC4EfaafH7SraonHKkS3UmXXqk72tSqkFLeYJguusbrAJN8kXYHqRu9yGxVTK3ue",
  "key13": "37fMjcKPybu8s1hKmvDPzAkoj7edNhcdCxhRydvmUBs7YQpi1o9PerqT4rgYdgzY9YFPeHdNZ1xJsASRbfRHShMa",
  "key14": "3GtKz4FoveokvsZ8rWbgC59FL7gQZX9hnBAskVW8AX8eUkKPppFpB7avN3SHkf5BJLrUDgXZoCFHkNtStG1brMzE",
  "key15": "3btpj8xd8J1FFi1jCA3VrgtiTNXU8b4DczAmSYJzVvPtkUo1v8KLb5Ys4qFXxsvFArADqEQmjRQYBKqU9rSJLwhJ",
  "key16": "FfyXEDyKegn21JxPwSH7NZckyvEZM8X6LRFAQjR5tdr2me6scz7cUSoQMJw2gAYHJz1251zqJ2vtnp1S1P3teNg",
  "key17": "5h5p23nC6nNZbkbB96YhuQqM3f7jY9VEG7h7wdC7UzhNmb9VSygvoRSKBB4htPfyP418oPHVsZqhgHPNbQMf1GaL",
  "key18": "5xNV1gkCmbfziNc3hLo7itcUGASZuaUDZiWsRe7QjmcLzVTdcUDySLrgwzvBwqYhC5botdfMQKCu6A8zPJjt9SrB",
  "key19": "5THQpxkkPYC5nXtxMY7DFtSGJpmqGthvLhyy4pFCZi9mt7rody9oYaM7NtbKBmgTapAcDWvqGJXcHm3kyGNwRbq7",
  "key20": "3PbexiskMfiXrwPBPKoJkkoT8M3VcqvzHju9sQkhbv63pWWfmtKjSf9k9Uyr54MhDCA4cT7HXGZkokL7SmN1Nf2E",
  "key21": "4dc2xnLmboY54QZ66YBBQc34YFMy6By23TV6PxjNM4jGVUsHcNwXChvgcRW5x3CLi757dAuJQT78cDmjdLf3FjLw",
  "key22": "49XTiFEPTM3vWicAFFSwEDoSvEbohbEEzNo1vCprZUMpE9F5Jx11BBVbNEUSZ2oJKJtoymGTLJwHzQJ63EuPhXkU",
  "key23": "4KcLcS5kwBBNBv3eDzuzYnTUvjDbEc8ryzyqoEPeX6eark5scfoNJGTQ84S1H86URjKquZZssT81MgswsmtvvbTE",
  "key24": "3o1EJgEsc2pxUiVis6t84t3Ahymzag1DcVgzMkpZuEdcYoHaN6Sht9CuWXM37u8nnLGDnxtVS4oWWfjwytFULKbr",
  "key25": "5TvsocLDmq85H6BCruhnpz78RQSgY1SfG6ULGCjVf8VC9j9LVDkkSsdX5bUtvVPoYDEnJDCWwkSpBDpxfTXPSAm2",
  "key26": "5AqVYcadgDzyT1zpvqtKDoWLSRHeJ48p3tispeav4AFjaHw3UchSwrhaXArMZACQ1EdUJdJHkzfhYuHevC57iZxW",
  "key27": "cam7Hny4yfsw1mrkurCDfkzcYxePdMzDBrtKFadv93F2byYteMoUsFssfSswo1h1JepLTWDSpAiTcsiVsndqk9F",
  "key28": "5JFntLusybF1E35JcT63r1cAWWxgckMDPG8gJn6p5NaC78HTjjnbwRDXzqCSk8gWpSKu2e5RwQTkEHp7X7gDTzBM",
  "key29": "3Qncrwgk8BWWLx1L1vuNi9ZD8qPvZPNsZyee8REUk91P3Bvb4qgt59xnjxLhGSeZfULw87JKF5ALdJedYZeU3QLN",
  "key30": "5cPZdst1mSMByoFhk53jTJ6DMHBQiEBmeXdHM9CjhHWEVbmCnHfdnED1asVeCwGHFEABipuxjRvKW4t15FuD2C2J",
  "key31": "4bJSXZgUGytKRu1dZWoLKgKUSYfsG1kRWXgXKDo1nopwEuYw2MKwswBZqRxVhBQ6y4wS6RDvVwTon86wa9esc4tj",
  "key32": "29vNFrxhWmQV7vQWGBindhULwurxzpgxHjkfw2RZk9PtpPfFcudTF8R56bQygExE1JWYbbJpUHzx5Ptcxv4XxshE",
  "key33": "BqL13j1pD7gBbyDcLagg5xNDuEPVx9fyv7GoGahkEnGXMeqo6yWy45iQTLEti4FZahduGrsZhJPCTrpQBACtznq",
  "key34": "eVwuaa2PQxBqhj3QubSP2bvU9YPhefFcJvFGU39tnDAMGHGfJ2TmF1VPKQuyfK8B6GD9mncgtYM1CGaTAgefvTy",
  "key35": "5AX9Y9VGP9wthd9LVunhCazLKaopKuLNbkt7CAJZfTZaF5faPgsEoRP5pjWDek6JFQm2fjTSzypU4LtTuXZeRQ2F",
  "key36": "24znRNkBfbSSV8c3MHaEz4P9BESYwfgxPy2a9hRDNPwDYWarZbdRSs1cx3Ss563dYiK9tAWd5yMG1RnoMkN7bkso",
  "key37": "4WpGM5uQ7HJEQi7M8xzWJi9ztL2j9dPr4ggf2WT85V6T2mrT56Nfgbp6i9SLv933JtXfhvsymJFSLj6ENgSwD36Y",
  "key38": "3ikiefBuPPuy1CrBkKvCY1vpR3V1Knx8PgCoMJ6zC1xKkGqjHhRKVJqADMruNzsUe7PDpu6LXNZiGuPf2mqghBA4",
  "key39": "3Dtx25fFRCRYcd62RBF7cNCBb18e7pwSkpxhGCPQWfVquuU5B8edvkFyxzP4YTqVjE1t1JQo5XhmaJhLZTSvBa9K",
  "key40": "4HhSv8Knze1AmYqTSGc8qneifPVpbX4rCXjqCaSAqw7opaKtKJS9QTM55fsktdXVGjFv9Y61pbCpjvHUhvzRv6bz",
  "key41": "3oMC4WemHJ2SPuVNXPkdf4g7hABaTfYKFUigXsKnFfREK4dvAFvQui5Jm23FJuCzgAS7H3sUcN9Q1kJTzVjVffT6",
  "key42": "3m3cV5QzB2ikUdK7jqchfBcT6f3H3YXptw511GLDoVbTCDTrhM4iUTNjjYJWWKQWxsEuRQPXvN17216dATbr5Wbs",
  "key43": "3CbqH93DLhhNjea6Mjrr2aWKvMgx8SmVdEDDUKVBtPA3iCan1xTDaeyGedpWhABLt1myELaJHfEBsDtgEtS8XU5j",
  "key44": "32EBdQEnoV7ERtaQh5esZWAxdZgH6jWU2JzbKzKRn5VToaAdt9uMMiREhkzKBAtxpBUCkvm7t3z8ucFRa4gbHGGo",
  "key45": "RXmJY1VpEVC8Bbvfe1wtcwDDpWajpmeQ82eC95bRvt7Sd2AQu7oa4BWnaP8izs7jCLpp8m3YZpag9Q5ThWPqWah",
  "key46": "3RmdkTUnHPHkQYP2spbCLksjHJJrEYAaWVsvHcJuWGsarMnjdbSUTa6paUNs4MbGDDGCTrjVW6BzzNHkV5DBCxLT",
  "key47": "2gX5TKQF9WUqEaPbeEvyYUruJRfWPkHpKbUgKyKbrxspzAuPKcnndjfPEDUnuAMupaPZGPVVDF4ybrLwwxw7daKo"
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
