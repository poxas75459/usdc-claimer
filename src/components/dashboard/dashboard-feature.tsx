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
    "2f6LN76GZP5Hbb9nXJy8dHXwGKpHY85ensrhVer5awQ4NU8wwtonKeAM6iVELALRC3o6gpNsNmBwoCQWZFv6uNvk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PfnBE4NHBbGos6y2NYyyfyrt1syZwMzsjfbJNfxSnJ7twsoHQxuo2Djm5o85TrpjyBrWJipiSokR7ZR61bxdDcG",
  "key1": "2AxfxqWv1bi6xGVsgQ6xJJsskUukmmyyE5tx2ULs4uhaKLtHrBoTgub9pr4uEirtr3RB4L1S4k1jcVRxvXuvqWV5",
  "key2": "5ZW91tBMdu7PWsT7zmAmHMwFQPgS1gxUCB4UARpLWsHirDk4M3qHisHgfzY263or5j7vZFUydrTrurRE3Bht38Gj",
  "key3": "3Te6P1Smf9eYRM4iRhkx9VKoBTRAF2RPP5BD29JkUWq9dYqfVfJQAzeSg36VchLoShxfCsw1E1MbaZgmrtZAsuT4",
  "key4": "2W6uw3GCdSkFcZ2aLcGK9zmq697V7RvDEQ347htCKSvZ2xQDdnKC9Xh18aLyqCWBXzQtbGMK3obgQ9iE9jbSbsRQ",
  "key5": "3vbAdvkGruupoQqKa1AGRuWxfJYmuHdBMSWwrbW5q1fDz8rfvooYNagcjPqM6LprDvD9Zg1j6kJChF2BB3ZS7mt",
  "key6": "2ox4dwAwg9LxnfFSpmhXTiaQcub9TaB9PDtRnCaytQbqFj14QSk5Sxy1S5EBLTtJhySnf6YPmTeJ6gf7UdD7pPdh",
  "key7": "2cDiZ75CjGmrkL4U6DhKkPjXJwtSLf5hSL55Rf6k1Skhifqji6ZvPVvkSqBgPrckVhKRPjksS7d31fbsE5AzNRbS",
  "key8": "2m3PCWxaiwisQ34eZfbsVoskE75g48fGzbVbrZ84PHwYSMmFELTWYMQj24ffTYPqrhaWSFDCHR4cw29LtdsPJWik",
  "key9": "3ennAzHtFsxeX3CRPAzT3Cpiv3LHxkjDMY2BuDvM3o9QLKtmALjEU9AZGRZxSQy8z6tWLonQac87aA7LxVfXsTBC",
  "key10": "2ipCcgjYV2UJGbrAHS2GM5neiTcJegPnuwGYZ7MUkphvopNMTE21PyY1CC8yVdXYQdAYvvTUZQgahENHu45nAeM5",
  "key11": "5DuphRL82HoUYV77Fcfyhnka15nw74G521Yj6cDTgYH4zPSpBQVcSkjyo6sBQpbKMHzFFPSsVwCk8EEkAwPb192T",
  "key12": "2Vm5tpqwEYcbkGUrNVmhYjZKpfVCrb2UpKUTnUGBMH9eSPESFZncmZXLqUAyQBh2mviYDUKV5UAAmF9Pdgg8x4Db",
  "key13": "65eAhNdjGJis8S2U6mctoBPG26bvqqMrxikqDCYj9iG6nFfunNSgnZwBJTy85PiFRv7fLVxKvnW838vAzE22t9k9",
  "key14": "2hg67H1fJ1EUb5UUBGskQxJqvBAmR1pNorkyv9gzjUn7FjKS5VCwE8wdQkQ4UiCu5H6RJdC5Pmp8Zo4Bto38DrBU",
  "key15": "3Vh9mk7y77tyQxw8cvcXDoSsDMRrPFjHN9yCYhmh13263WxJ8HqWomfB9VFRionNQ8fFPyHNLxuYrsgzDVzZGTMt",
  "key16": "2DPcuB2LcoE717UFop4WhwVXrkQ27yGPQZcAijw9JQv4Qp2x36DGEoLR6EABfZ9HcvBwtfcZN7pybRREaLM4QN3s",
  "key17": "49ZU91MzuuQDMCDGz9oHhDiJkwqvBjkX3ba1Z9pq8BPVhNGQKHAz8AwPWw3kWdFGXvLLnSXCAK3XMKdkiJu1Tsp8",
  "key18": "4qhDcobkXqQ8QmDAkU1C4B38uqmPRegnahREbtsPhoH2bg6ba2EEiqCRfbKdwzEevJn2k3GtfH7NxwMMvcAtVsEW",
  "key19": "5np69rfzH2hJTtLFeGXRV5YJUUmYeoH6TdqYUJN2brWVqfHJAMVXcv1PQ9bEUn2DxF2NApEPBz2W7J7NufWuVFri",
  "key20": "gWq8nbVgPGfakiSotb2d8Jj4NBp9qGbpt1EeXi5Y75FmSHhZUqFjsm4oSRbFaNZCR5jPVmeRZNLJrPMVb7ebx5Y",
  "key21": "3JzLuNLTdZYpwdUZFd8MSvDyMgicCgi43imNZRqpt1u5sih6nJspjWBEF3PZaiLzJjDEoLB2RWR9euhjuMb26YtU",
  "key22": "9pyyMHptCnAdJ8AmzcXLTckL7DpSkvJaLH7QDZLhrWdrGeNHaW6ceF5bJqghejQvKb9KafSxWKW9RQ1yeq7X1dQ",
  "key23": "4WQPaZ8m3TYoGyNvvJvBbomkZ5M2vVctGrtZXafLQoe5NiaVF2TrLBtSdPaLcSn8ehKqaqSkWHgYJWMJNteSGK9W",
  "key24": "Fus8o3ewfbrknb6wTP6jk5gdFX7Wmdd8goQ76hkc6zbsieztTWiDQCttiywipFphFzGMkdeRn5YuncKSPUtA6Xm",
  "key25": "CfApTDKQ8R8kZbyhT16hnCY69fNX3o8bdSyxHkoR5ZW18Lj4WAkCHuRc5t6Sife6HJSf3tQUHshNPKZaf8CrcP8",
  "key26": "3eihLCSX2dZTH8QeKJj3r29DGPCPjxV8hd6ZvkhJKzh2Lsoor8X5DMbio9wGv5dEWPmaG7mt8tjAJrhkgMpxX9B1",
  "key27": "4AUzWi4sTRMrSwcx6NHqRvgX6yZySPtXh2oWgtVKrjpxh8nzM4SxhaN7qaNixsseBsdbPPKVVZbjFbUwmDbno6Ti",
  "key28": "3KwwpvcgXqk8RiES6qrgH2tY7b3kXgQQxKWnSha5Mt5pvSjP1fZiq6eCVdxfUdiPC5JK1mALnungxXt3joqKdQwe",
  "key29": "2ERJAT3Zeutdb2WjNbwh7begx8c1J7CWkF7ZmiBqG27YjkBU7Sh3ysuJzYQskpe7TjbNhrB5dH2HCRGGP4EfxuAu",
  "key30": "56cSx4vMSibh3eyVcHNETNEVgmX868tuvPs5TkGVVgWawzTmhuZYQhwiPgzYPf3farHRnCXU2EdbnPhBRd8k9W4j",
  "key31": "3MPDJRzaynNjj27fvkwEg1aq2cXXStetEvUSmkZLWAcB3WNWxnoF1wdHvYfUpMa6p84BTnJcFy4ppiMxkGPhhFgt",
  "key32": "FAjuRTJDknAfhaREUvDxYbpJugi9NpmjCXYEXb5gPbRJn1Lq7c6JLANW4Jx3fzwm3ShGqgRygmHYpNeubg2P2yv",
  "key33": "sP342iEnkcC81HjMXr7NAe3BoZizS5xFdo4c1CAiqzZ3uoZ83Q1V3npJf1iKzbzv7jwdmtbK1h8rPApi8b8Dgiz",
  "key34": "3kJiUdsadnUY365DABeyUN1bLsjWdtChqjNNTiuaxeasmBqbyJNwh5KYZodLkQXBss5mMDaoNWVvL6FbbDf5bJPT",
  "key35": "3mJcWhty1GSp8Us7RshT12swtgoWLK1WfG1aU7mgweshMA4us1Bmc3ANXgZqT8v2byMM9VLLti89eunkhasxcR91",
  "key36": "4pzNdkxK7iYieS19hu6n6DTjvQfBSLoth2W83d8nvzpWwEZ2MqwB5Qs9GZjrVUB1962rjYkNUPX1AMnY62HgkiXn",
  "key37": "3VicHYu6ZtmBe5NiBhty8MtZK7SctZekF9kHQ2q2PR3Lew5PCzD64oxGFJwH6qNGewuGeA2Nk1qKkwhtAs2taVs4",
  "key38": "48RqQvCpZMJwiL1Cpt2T6wYE299aVU4rYW45Ya9CyirEXBizZz8cQNpUna48iKJsLcJ69ERe1MCFUDyBTZ7c7aJQ"
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
