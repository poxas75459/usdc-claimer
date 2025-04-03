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
    "5cZ6CmcrBF3rLBcCGaTKTrG7GDbbmYtBatTbUVTWM37pJNCQMfUv4pUkWSZwqDAJgSLmJon4RU3JpceB6nX6v9bk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56rMmGQjzfBM7GpTb19py1stPE9XcbqDsSFb4s87Wqfc7jCMnd7cSc4nmxQF5QfKvqeTerLxCKvYuj13aozSrGUX",
  "key1": "2qhp1eUKennaYWB3aTgSBNAoJwqVsfxc4VtFZKdWACVPwFPkgYXnXjcmX1NSvhWthVd45pnJ4RRMorgfLab2TRSe",
  "key2": "3G57oUoZ196gSzg7iecGPRtXFHnBHEPimZtxmyYbZtRaEWQMp5w2skrewX77RWCYayg53h8DXrVysD1cHpzxEE4p",
  "key3": "GMfoWZKzf5X7tzTymujojR8KuyFT72pJbVXDNL53aTME9Ezd5bMyHNKkYmHDHcg1TrWjjYKCmWeDpMvBJMzfVzD",
  "key4": "3KTpQPnCFS1XpbDTASfyWXZ1xvHxNrCLDidjf3znKQqCkDLUZWrVWhsWD6VvAa3cgN9pPjbWeCViBrjWWtMrKzd2",
  "key5": "bcg89iBaKos3ft9CnwkpQHW1zRoMotcox9yjU1X2kfaKJwNcPmpozeYeDpdhkYRS4c64umLbzwmmDrSmRWv3jnn",
  "key6": "4yC6gLTSLJV4Jq6qtpJGdGQy2DU4tzTvhH5qpHNYHGs73XAQ8MpfmydtvcHB77Gitzic3aZ4gHPJLcua2jhyzprc",
  "key7": "w3GPTAwbWFXzDrgQGQSuA1BBbxbaob4oPaSD2JbQjVL8H5EP2eKJxxMybhJK9FAMtJZQXAkgEerqy9g7TtHSihN",
  "key8": "Z3qeaLaLGJW3kmwZ9ujyC4z5CG4pNGkF1Gp1G6FjMYb7jVT5WrwaoqZjRPgpV1G1jPHL5YnpMqeHdJ38siDpwZJ",
  "key9": "48F2GS1RL83EaTmRXdrEvSQyi6QciA4xeLoYJ65K13tCD175XBWYeeuc5C9FwaSV34Rk8ZSe2v2dJFgWUuQCC5Cq",
  "key10": "4qkozjgqRtZskjJpphv1Ax9X4JwzSmZoBr4VFWyY4WYgQ6Abb26c2HJsa5NJAqSPDyBaoMzK6jUFuAWS4qWhQPXh",
  "key11": "28SpaJnBJ5hnqRpFoUaxNEeX6SeBDKnuSftaahTbzC6kaWcd1RZ2VjCY9hStiVX4T5khQrqiMjrqfnFmvnkvddrv",
  "key12": "4fH9foWib5EwK6w5XE1b4DDFTeKrRg793AyQMrMkHy5uvh2VGgsx3xYyybrLytZFiXzFZLnS4bcACXKoW5xDmVSy",
  "key13": "4kXTcrK5ixwGRfxKSYy8zvLvYVjQtfmn2Tw8cqukQ22jyXNMdV6TZmQic76LyQ8YyRSoQFXV9xaUmRDcfASg971h",
  "key14": "5jz9E4uGwMxnK2YCM9BJ2FiuDLXBXXxo15KEA7heZD9gSv8G5kgSwCqfn2yxgs5mDNLcGvJELee6Q4grJTM5P7bP",
  "key15": "fvkKm2qutczXkJ4Qbt1C2mbr81W5JaDbTgTRBmZGWW7CDqvKjBqYuuPTbdbTj6ci3RygqVttpkia2sFzneqLTs1",
  "key16": "4Tsw3D7HwMdGhZyWcnDVabsPUhzipeTZKMz1FCwAApbpPzFXxjLn4D2wAvdvkDN47X6L7NemPyR4yLnXo9NvhaSt",
  "key17": "3VAPyD3BxcJy6aJ6Ago7sVtnrFjnu66MeETYJ6WxjsEzPga9XCEStGBneR4j1QbbERjkCw6GzEzY3CXtSxk7HuyV",
  "key18": "2dpvhXQP13VNhEGjXKsN5Zo5Hm3fzdhagCSYhiRi3ZkEkdpTiYHdN6bc6KmNCYnp5nwreonResYJT415S42iyxrv",
  "key19": "3ESM6HH9h4GUj68ENb5hhqiHAHH3xKHycrXB8jbZkF9meoFLpkJLGYqtTQz7G3q7H1vYQ4fntm81PhkNcocbLLk6",
  "key20": "4r1TNi2skXM5scZBtfMNnsZCpUVprArcMvMBMyab4zFrdrpX8FxkSNmocRacCH3kEJdUSUEWDi6V6ZUxtUJKKKJA",
  "key21": "59taPb5V5koG7LuN6bUZY1d4ZhYdCH3SkCSJ8xzWiTqW2uKwGHQ1Tpi4njeACeiDRtBq6AvH1CCTMaYeBusaUVsR",
  "key22": "5iY8JBqtEGLB9N75tRuZ2RrYnG3fcNv29e94M3W1nJX4Zqf2fBBBJ6R9AFVbbpekeTQGX9M9DHdNjWda4MRJ2eVb",
  "key23": "3RKdqxWCd8VS6xKPXeDyVvjSKMQPyzugFQMe7GNV6khCcZXamkT7efso9nJHuBghBA8pXxzL28PuLoQNPBK4PhLY",
  "key24": "uzthgUeEsZ3fphq8oier6LDJwdF6Z2EFCtGGK9mXSU84y5sZhA8jgHYZWEmv1qvQB2UrHdFSgEXhqyLyMW9v2Hp",
  "key25": "54FjBXVo2DTc42j4mXSot19azy1wtpmXVNcAWkiXCvSKjkDfwkv2x9ELKfinoqg7JqiJQzceRw2rw6T4RguLoH4s",
  "key26": "5XBDu3C4QZT6x5sAgFXnfnDGUxFyMnHdAppcdRXEVZXx6BM9wdRXJC8PS721aRmNCNqi4aaRCyRp4H4ynx668bse",
  "key27": "GnUWbhQC49xZTGfMSwVrAmu8QB7hRLbmAKcsgxgckLNKsewEvYD31TpbRcLjcwuiLykinSL3aUU66tPfyEbycW7",
  "key28": "pyMHot8WJph9yCsYizBrKNGEpJDfvkpUC6Vbdu8R97YvYtDQFXXVjn6R4kWRS7qMQLynjXkvd7Mg5zSRdZhqaem",
  "key29": "Fi91prqA3EP8v3JNbcEezRkvQKuwdQCEReMjX4dtZEjWN7ePh2i9x61g32gT2ZBvQ5KRJm1a3ZKjPr3df66iAps",
  "key30": "oUdL1C1SAVyp2KpevcE71ga8uRUBkjYkcbEDzNGHd4rcpQ3J94Td9YdrRb6skBpAmvBVpzniuSZJK8NZvBmJejh",
  "key31": "4eJEiJw8kxKmYiSKpE4T5UvDmDNWrcxJwBymB5h8XHFD4fmpgaPjxTPTT5MPkac2o8EH4typEsxjdYj2ifCioKkK",
  "key32": "43dhZ5sNASZXurnb3vNSzg8iA95s2E8mCvTEpCTbsp3epepRKZiSfX24zr73b8HpP4hp85jBQneVfxPM2BcZVmSb",
  "key33": "24iawpduhVe1eozGyUrKdV1AXoSMQw6Mg2umTpAYEQ4iN7Lo9Db4A6oDzcvYxHjBiMAAQ2kpmFTvyHyv2L5rfnMC",
  "key34": "3wSWqoVEUQ62NT6gpAc6CWvEj97L4oAnsu9K7oQXkU9n5PFh7zVZVEmU9PqBpgmCuKpX1wbqw7yG24GyZ8W8ftmX",
  "key35": "4WUbLYreZAWkPcZvCvC3ZrZ2jpUQn7BufuggB9ogkmMs5P3RCfmSGNQvefjqSYzwR2Gw8abbBFpS4fYaoLprQoi3",
  "key36": "4kjNAeRk5VaswuqqyxgXap2pSg2ZErk3fzm3jw3uk2NPvs3tYF6Xz44EwRk8vYQbsFum4bHnsCSNefKVMj6trvhW",
  "key37": "3r85F6U8hNFNxSEeb9Pc7cJAdxWEzWWZcUUZJdk6qr5H5jqwen7mwYqeNNsWa1BtmZxGY4WycKHPg7uCiqDr68u",
  "key38": "ZpQzYSVQ8Y81yrcYuTqBvpY88LW9c5PKFMpuJaFJCwvNHMtgjHAExwx3iqR58LrpQPWxKbJ9LYV26xUnDD2X97n",
  "key39": "4ZU4FZnGUimkqVnG6NEpWCunySzUppPmvEzV6xQ5svXj852h75a2iZWfe6RBdSyHECFCYMwo8NuoUR9hiw2zz74u",
  "key40": "2Dyw9ShLUNWs8jabLUqewspc2jynJaWeenrPjJBEUPLyqiADGKodssV4wRky3oRYUppizH49tqXXMhRiAES7hRcv",
  "key41": "2EyEy6ULW9Xd2mNsyhBV392PNHP9iJbDx1hb4557k1z5CTPfFzbnmF8KnkYVfnqsPEo1UFZ92E8BGoT1YpztmhKC",
  "key42": "5QtdZrb3fprCajsqBaAy5BBSDmsBdt3qAozraUWo2HMv1P2eeAWsMEdwh2b8oPc6wSVF9JjfuGB8xAAPndJZU23U",
  "key43": "4oYNvMwrPqvt8CWYuSwptdVnaTK7QVzTuoauJ64D88hFaDo3TMgaoJbbGzupKS6NMHjH7KCYCEAUT3dbYLjUPTLa",
  "key44": "rq2smHABDQc66tqbJbpwK4rzgSDVC7gVyechT1XnmD5zcpChvoPV2hFjrqNyQuBpkacXZNExPMVMoD4iRmXHTeb",
  "key45": "CSXEcTgMsbjPXcLWwwYGSZDR59obHv5Y8DYdNxtPdco7eUzZMWETa72zC6pGRShYKepMyNXATKSnFS9xfY4PHt1",
  "key46": "2cfgMiVdKv7AkkqXqJXEzk69JvpPyYFUPovyqbbTk7jnm8zw1Dz8GAUukCn1gKez8a3JPrqSQPhmmcLcRY6ZwTbP",
  "key47": "2o9412k99FaVZpQwpb5FZkfiwLLijFLzzq9igVyusqCmABxMNk5y6eDudS8EP38RC434awmGKgjzP5oqQ8tZ4iuN",
  "key48": "s3MX8UYvZzGwpB3iHY1QGPvT2iNVfrPYUE8BXrVY9UdTNQQAt3TMXvtzTANp5TLKmeqDqo2wN1V4DxXdpCFjaV7"
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
