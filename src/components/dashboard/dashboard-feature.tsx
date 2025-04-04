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
    "MjAGJ6b9HsZj1FkTiRG44uVvnqTXTSVT5aF6jmf6VVp5iCMbLgg6Qwd4TCsVPhUJcZhuJ4YPQibnCJgHJxqpzmy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Fzqby9DQrJnL7rv3XKD95Q3M1mJ3TQrKS9mVdUpWSCDXV51YA8exxeFsqZiAhYhkEZovRUXghKQ8u64UP6k9cpt",
  "key1": "5YZswFi7pdZYQnHuCAeLq7kg11LPpHa7V59KJ6QQpu57t8oYcf1KXys2sUwV2aLHBiwawBdC9G5GFynPho627zT3",
  "key2": "3Pxa2hJQBU7HJYzxdqeU4ydH2MhmcEthxre9ndAQAM55WX7RY1cBF82ST24SA9RZSNnj7wAT3ozBMqAnVoeVANtK",
  "key3": "5NUh646FrDcfsRY1pFN8rRzEeMcDGsaezy9tJTFLsBZwQNZdJ2CYrhQMqZN3b5cwVujEFm2ZZ6HVydPLpB27MCmD",
  "key4": "4UUxDsfEvTdSJ8etVeGEmc3HVcZaUSXqgMXb6WjQ9S9qyzZELE2FtKXFgpAnTXgazsfPB7pDxfkRDFENF5MTn55L",
  "key5": "zJNMJNnR7jbEjJnNTaUP3HPpckw4PZ995U1jKLcSN42Q5QtTXe5oYeAFTLzB2sCgXWpuAbk5qS8EVhsQAW1twV5",
  "key6": "24HqXgPsfSmpbhNAE1yW5tD3Xv8kdE6XWqQK6w3UCMJyN4UbGCkQkNz94NTPHc5ULYdgbNKv2tBR3cuPnCaTiARE",
  "key7": "5iNzWHi3NmYg2LJXNfuMaruyRNJPsqY79ZmpT1PKTCCrFkRUWSon43akCREo69bCe2CcLwevj67EzjFUbHeKpM9a",
  "key8": "VNF3L3pAsVH7jFUUqNyqQpjdWebXoyL7KFKz4bLvPASjXzGWYzmg2LwrUZGDTb4URWLxNx7oMS4r2PVR2iA7381",
  "key9": "Va6WhNxUjHYsVeeVCdHRJQXWEn2ZsxZtocJuTRhmQoh6QHJehysFKyuGdqPdpm7R89uwRG5voTZcen9ftEkvmaB",
  "key10": "RhYu11wEd6wCxEmor3MUTU1EzzvfnjtzATCwcZx8XrGmhbi9yhqc8Syj8E367e5qmdrA7SRWEVSMsygHWtGyt6K",
  "key11": "4Th235XJivS6PETJisa6n4843gxfSg28JCSJynK8pQvbiUUEoWepJmThZmdevvnC43cFyyFgUjqxWQ3iUtcTrUin",
  "key12": "3S54dybi4QeTxwEjkzWKVq9Qp6QjQu1A3kQ6YxmPecyaLvtSx1zxeDaJ42G446WyeUxuATq18u68srKHGnuJrU4L",
  "key13": "4psroefSKt9sDsCgt2N3tQZRCyAzup7aPitkZx2FHBjtaigtpQ9ajtPSm7nqHy44b8MGA8m6suThaLpHBBDGKgkA",
  "key14": "eW1sAhM8V9ACG6GM4pq7rRrcTWs9zSh65CtDKyYpXtdoCnWJTJQxBnuwQoVgQ5wchYvFYsHABS6rnvzbqLwVffm",
  "key15": "2B98fq1AocjgiJRmAArM3bZxvwVGAKu5RGTGtKEehrrQ41dXSPbEzLJ2yCK6bjsgCEZ8JPSvijRZCGFLMXqcxbQG",
  "key16": "285YiGPYTAATtJVn18rRrJi3xZv3Qu7gyZFxxKqjVuzJDuxaKU1ntNmFTx6JrutTu23kqCSNRTRzF18y3c5tovSd",
  "key17": "3ixVALfEybzZHVHANsdUugYFHHDQhbddtqgAKN9iKrHRaP14cgETV46Ur37YkxVDrkaDqwbGQyaWSBHGz2PkBQEn",
  "key18": "5hc5GgwVR2bZXYxj62tcz9qhbuXBzmgFJbxxVcSaF9KzR3ifeoRUFs6jNESWyJzQNq5cWUQzGjoM4fgBr7GKhQBM",
  "key19": "3oCVyYYbmPvEAKdQfbFoQULLS6YhfPoDJZvWzjh7M15KUEVX84MQxqk5V3KPdLvMSEsjywR25nDvMNKZJfx14NFN",
  "key20": "2TK5KxCJax9aDzJwJSTEzProwZtfvJKv8NDugvXREt8EpxF4RCkCtATn6RKeZhc9GBU7QmHBnmcUgyNWW3nZAoaF",
  "key21": "43Sa5udNb7tRe6uHVC7fwveEGcDjxJFiFKbWSon6bkR9LmR7qu6nmV1fRQJ9g52QgyGNmVM3ZXQzk2cJLTmdcGHk",
  "key22": "CErDnJD15BaRPf7AfSKY1P4UiQf7eaWUfDLwdhTCRQYo1MG7fQbjuKxWDDwJ5rP53MNyP4aE4GVCPY8aL55wXCq",
  "key23": "2RZzJFTiZrMhW194AAGqGdC1owtX4oAhhPRxxcSDrNR61iwQNV3gBXuGmcKef9hR7oeQMeaMink7rPJHDUp9xadT",
  "key24": "3kHq59ZxiUVa6HjkRmAxgKfR6PzQJoFXVnTYt4BgBNdhKZWKK8i29vnb7QswZWkEeVTUMD8B6GghPTD3EhQTWWbf",
  "key25": "48MQmBEiUsvJCGR8U1qkbfvrBMku79fcxEjkVBFK4svh4PhaS5rhVQXTubwrQDwZVuF8q3tDzS5tbAtZHYpiKLQW",
  "key26": "4YwmpfowQAzGa1VwnEuWawMefrQLZoVrzwco48TToBjDDERTZmBRzRAn4CCS4kq2yc3VLe3tcHHki3e294we8gHA",
  "key27": "ZnQDztmx92siggpm1FJFUWt6tSCRzbtKKBkoXeU93Qcbh8Lec7zfnovURopTPiqrdd5wgfeyf148JzVKYGMtxf6",
  "key28": "2J6a7haubUzLxrpQf8dkjJpPgeNxwzDty3QcJNvKrhWpatjs5DMaZ3ugegKgnp35abhrenLaAV2GPWg6BLPEnon5",
  "key29": "5AmaJyGo4BmMWydyqLbnjzf7C8EgJh6fswhvEwX4QgHB1svKWX747d3BZSMkgMFf1Q1g9uD5HbQKuZBg19nmaa8C",
  "key30": "AWyFK3Tg6GcgFc6tTkJmU2J3E1miBtBh6zhcueGQicPLWqTFH7GHpJdk3H7vqwqePAVWcZYNHvuC7xMAd234HN2",
  "key31": "A5ZBbpCshreWaBoBuwFDYB2np5zUXf7AJnjY1Ef848t27svpsByFdwgUw1b2ZkKZcPaBqzX5YaoEn5xjg992S92",
  "key32": "618KUJ48Zs6AxhDPtQ3rpC67hsbDRbs3jJPLzDdfjvUUPKpkj9GPwJjiZfzGoTuNqXCDmNpF9gpbJ3LT3KfsQBS7",
  "key33": "TMYi6ErS5atQzbKwgBrMJ96iQtkgesYfnJua976oiz9HALKZxaHejJZFfqbnCUvYjid3rhwn4aMZUFVcRw2PZJH",
  "key34": "efuAvrYzTrEw6aiQGeHwNm1dzVzmpZwyxGZ16zgy5b3kr8MPSgC3QpVWaaWaAwtr4q24gwWVwXyuRpuLqTRRSG6",
  "key35": "fAqqQ2n7jnbRi5FNHqbDtg5nUDsQ2xB6ngck7BB36uoxModqbzki7BijJaytWcqRy8AGX38KKVDm5oiPgroWs9B",
  "key36": "41sjmktWNB4bFYwCvwdkWgXkLKcdwj6LaTuzTFK6185vG8d6LpEXTX5nDNdM7iMTgCnsn4FwJjj54xHuCg42Hnmm",
  "key37": "mypjotwZhVx7TYrFYMYcuqBC4ZCtmLMHqm9xeoe7KK9E9JeCzjX5ua4achj5a7XyrrCHReoiz5iDW4Me8GNEjxF",
  "key38": "5J9W31HEZtPggEvNXmm8Vp2nGqWf5ojBtaexPHpjCcpYcQs3hwVonRGdSndENvTzM3Y2YQmpdgfBQ1G9jMvTzPsD",
  "key39": "2p7EcsB2RJQrz621jXctnrrfY7hGiuA75BFrSkZMh9oWiH9zPRQv55Gu4zGSuE7BVa9m9H3hVdr3vp1BJj6qztQj",
  "key40": "tbhYTWSDkEeiBoMh26CUfKPnWNEXAMKSkbfwzLJK8GQ6L3kzajzKDVgaEv4RQEtMtnvgQsNcvYAMaCzvQ4yhTVv",
  "key41": "PFh28krizzYEUtrEKrze7ffJLJaRCBWAuT2YTB6s3X7dFbD37FpJjgYV4Wzo432q1nzf4c4N2j6LJARmoYNvHza",
  "key42": "2ipibUq9s6HstGaybMFFwsaaa9V4ipoez47v5d8ELmmDvUdQWsXqc2Y5nfbCvA9xiRQyG5dNgqGdE74t6utJAo5b",
  "key43": "4K7Sedk3M9vL6RrLa6d8Wgsx2GbX1e8qDKNdpaQt3ZgWW5iQptfwpNpMuy3Zs9TEhES4dQKV8V1hCy7nCLoceJNK"
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
