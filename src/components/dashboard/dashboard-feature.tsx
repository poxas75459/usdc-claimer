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
    "51TbmXuCMDo1mt3qSCMCEfAxymMM3WH7oeo2ZZAutXiXmmef3kNke3LjM3gR1yomygbDLNL7jctN7xZtaaTug5U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T3z3PbSy8b6PiQrwkFvfhPFyeHZgPTYBJPdfUQMDVevdtXmziXWzhiCjSm6CN4RFH65u1wY9hGxvQkHHs8E67Pa",
  "key1": "34c5eJ1uVUrJq8kbzquf6XQFYKfhXNxx13xzLyEsp6joUcLntzDcGXcN6Kvv5B92HdwQ9uijKoNYa6gTZNDAJzqN",
  "key2": "5zjRs5Ve4AxtxDrcA9sG2ncBr7Z7G2b6fz8ZMwRBXz6iEgd2M6eBi5sT2gbiT9ZyWXkn2yfSPuN7wvidR1ZN2Xp2",
  "key3": "2TZAoAheD4hu2SVUPQRQ44noQv4EBDeeQy9E43ueL3uqdkr4LbnDoQBMe7AJi1ohNzn6evYiLN9eCApptW9hxT7u",
  "key4": "4CFKHXwUxwJ6WSEMjjMwPnqHTEnTBb2ssQB6MEbduSdkAHJSJ9ZsRXMZRYd6gfgcYLw9xqkF8VEwQLdKkf3yqdMn",
  "key5": "5jnetHK7sVtu2YEt5eoNUijsSazxGQfx5TkYL4T8U7x7DJWtBN9TDRpueziaQh7UWsJXeN4Qs5c9bCS6V7pNNktt",
  "key6": "82N5wnKgQcXk4tYVnpzUTN1vbLnKj8HcAakf2FaEm6ggg3Wn5KCXHsf4Rw137r5bvcJcU7SZsT7oC4SpFoySBGh",
  "key7": "5cLNvrEUDFraEshRUaq73UdUEtzym3cvYeRQCkBefeNHS78PNmtjVeYcBQkXpd5JZ9SSv4eAW5gw7ZjwaRnX5Hii",
  "key8": "2p6z5vHMin6xMNPx1uc86obgF2JwNX5cphz1wKXeL3Wi2zwsmHGJre92pAkVts6ggduSqeLM3o93YBBqpPs7U6QT",
  "key9": "3ppnhWdx5Zr49vhQZTeEAz3zdBaidHnNPNSjALfTh8SMuF8ZZqUY8qdakm1qCPmMo9BeA7btBNozQq4FxVmc5akM",
  "key10": "2wSLxeM1DC5CckrBezhxPb3Mymm3KrAbuMf2fCRsZpZJvZEdf27LZF9ywL8j1AnH4RxBmNFbNdgRPK34uFNECU7h",
  "key11": "3v8fhaw2eK32xgzFmP32U1aR5SF4JX2Kdn3v8JkPQBAcWact7whRWM3ksYvuc1vvPDdimUjaY9CV5wovPuqHzv3y",
  "key12": "56st2U1iBx8CTiU3Ec9GFzR2muqycNHKP3PHrgH9Lxm4gcZAKQEizUaHmSUTs5NGjB4uHPK1WQ5qMwBqRTgwBZKW",
  "key13": "23eLZ7ziyUA17MmAEqSgZYMNNf53qRR4TT1swdzW1pt6R7fSPKvRNKTm9exmRovb56PTAmRVgDQPYPmFycbrBivq",
  "key14": "ykq8ThNJbNRGfHKX1K7eMqMdM7QTwVLCaYPnWqB83TvhS9D1XdxispCeikdUinnTAKK58z6sZ2Cgw9Z4UeaVD7U",
  "key15": "3xkcF1gVxSFF1wSCtv2ivB7mpQ3BSc7BXS6m2t5qsVJV34GsrqSoneW5EcyjZFjN8VnRkmyoymx1HKt5P8DGv7sQ",
  "key16": "4zSwDkmKqDWwp2ojcFdaX3dfo7WwgwNFJemH89JVxwLjA9oFKbSBxi3sc4NnfdcqJq2nniD4J6HM2BQRPwSZzgJu",
  "key17": "4BrVXfvRjA7mFAHKV6ax2xRuHiRy9fSgRiTccbN32QSwzZCS11HzpcKpBt7NobJVRryruK99opm65UuZVuUcPcEM",
  "key18": "ADUwR4e1CdBXfATwqH7DEEguYApxKxBnGBA8WP7LCd9z47TpmHREE1aVhrL54zYeVJPJd5zYCogSSGHTqZ2ZJYB",
  "key19": "4RLjxsKqgvZQES7713MFAMadbkejZ9NDEAakPXuY45rkmgbTcD6ygerwwjMaDCZASaV34DiKF5uMry9WjjYwdYAG",
  "key20": "2wvNSysE3jxZZPmnb1URtz3RA1De9iTBuhrEnGCRoxGDDLMZtaqDAwVHRkaFpHSW7GNenE4LZd1sS97c9p1W7HLb",
  "key21": "3GSxCsgrvSMnN92zhPwxJdPW6Wa4whCfwL2N3avF1yRwvRu9LRw1Jehhg4jfVa9rnxLZUgnoG393bMwF1gDrvXaG",
  "key22": "4zq8Tyr5MYt9KY5FbPFZZ5TYdT6pmS2yofLRJB9VrBDbQD3JDddrAJq677VSG5QjpPq5KMM63jhQzBWUBFtxXpQ8",
  "key23": "54LeehZKpUfZQfPo5Rg6bnQAonkZwcw7sWZKLnaSXzji2W2jwYp9MPdUSGEhfEjCGmPRqA313iAf5vf6NTPhDUcd",
  "key24": "48GnzkXA5Zh43fqnLkKW9JN6EcF74y3PJtBWg6Bxxbi2GRgA9Bw3j7N2fbprNR56N5vfgWw7kjM7qjA5H5oWyt7v",
  "key25": "4scBxF6W1xFeh9krvS8k2252Nz6dz1fvMSZCsF2xe764Z6zNSgU1UBEW5EVY4VZ3SsXRSguMKkhG4tiaL28PdzGA",
  "key26": "2E7LUsAKMiuTuZR3mzH5vkg1z6sNQgPNAx33EVR7cZ6nNZsnhFF5fz7WzAuf3ixcxzu35DkzGGgdqvXQPG7AxEnT",
  "key27": "4y35q5pT6dXdPMfm4yVgnEhGVooCKXn5wxcfLWoZ1dBK2sYkc4vepMukomEkmVAVmXDN43Q24TMJfBnow4atRXRX",
  "key28": "3FN2LFBvHxkPLAK1irLWB1qwLYYU7DBXpFYXdx5ZGJHRPkVDJa2z12j1VPkB5rAVpvpFgiuZgPFX8wTX28F1LuTw",
  "key29": "5BVk3j65pEXq9iN38CttGsWkdHdXFZg2MfDYtdJDJ7yu772CXh16X2GynBWwJZwEG5WTsKrKigRoLfaXEANDvdNk",
  "key30": "3GRyHTuBhxKwEBK1tMb4gbkwmFhgvLGP2Tkc2d2rqM5VQyXy5eFQWkJK3yxxtecbbz2vtCqxNiGj58pWv1tvUYTX",
  "key31": "4bhwGkk7QaEn1tafsGwwaisgZMAjKD5cQz7W7o7emeUHtctG9b5vwpbQaovEcUh689LggQdWJJQo6S8mTG4ipFCQ",
  "key32": "Xsbt6fX8UmmBk72a8bmgGbeZsjsuc5fe4XS7kqXzgEP36P2qBAvJC56TbmVcABdnKmsTnWwQbVbNwn2vesyTGw2",
  "key33": "3ZKGDESMNQvcZ2kYvDEm78X7JHUTVbf8rKZJwkDt99BtkSyARA1mbDuqBeT6U9j2LQiZwYKRMoKRHesXc22y9TbT",
  "key34": "3jMWqWZzcw72d9ATaE68u7Za9iVc6u5yohoJX9KbUcg1vhHECDkHkZ9FxWzLYNsoPZp7CgfjrhAMfWNEkG9RfFTs",
  "key35": "TQhmGVJTL3NTvLCYWN7WstU7VK5VA29wtActMMJY5DnJisoQx6XvoWA3pPF4FZb5XbaeVss2kPPSBgMp259ZkWX",
  "key36": "4wGctJmr1zamfEhAQJqGuxehprK3Bw7d7DJVzvPYNxJxxRicwt3hZKeM6dixWpZ51t8kABW2cS3xM81EqUgpk9bq",
  "key37": "4TTTXQ8FCNA3pVBQ61uWWKwcchFe59gEm3j7z3gtZq9qv6xiEVARavY4XgcQUKoYcHuhpmVCL96fRGE4BUtgMbtP",
  "key38": "3hwSTq2osmMBYeuzm28WfSTLLBqVgyCrsvSvECbacYjGVQZvRBDa39srXd499dquva7Q5PC2woP3tpqpP6JHXE9C"
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
