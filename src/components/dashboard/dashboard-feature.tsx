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
    "4bbQ3SrYPhMWXqcyedaJyFfiKqw9DwaHwdaPT59iUMSbe3wM9NU9THDFiecYnLM7TDunFDTf6GMWHFANCwAYHqr6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h8htKqXNc45TN2QmyAKMXAnMbqEp3trDz3PVRFxnZnNM826SjH9cHEsYmdgv3SnTkswbboxZjGh8mpWvPE9dEBh",
  "key1": "xmVAuuhUbpSoMAi9GjMPUrMEvE2Afga4CfJNcMT35NFoMJ4mn58NCN8AV2H9t6CAQ1VfYJamWKrCLAg8qUrD5cX",
  "key2": "37B72Ai2dq8YyeGo23UKWhEmoQAqKzRR7X9m213xYi6m1jU7hbhfy5oJnRDprsnucJPf2LZVED9ACL4AEYAVTPPf",
  "key3": "27LrtLPLC3SuYP19bmbpmGaSNFiDbRBTzjX7oK2hVsPQ6NMnA1EpsRAXjpyK5YiFfW3mhSgvLF4C2UAyAZm7FL61",
  "key4": "2fkvcCBh3AcA4eiH2227UeSgCjEyvSJY7brw8pyLYMy74Z34jTzBLEGoXECwiftY39qwB8PdYwNBbm216uLdibKL",
  "key5": "3uqgMGXoyeLLnkfDJPrbEarCpbF2Gw8afHx2sNofbou2Tp1xzAirsc4Cj3wHdkQH7taovH137hGkx3VMbHuvyZR8",
  "key6": "22FwrKTrkNWRSKjhjs5j1rhmpyTN1iHFqcTrc7BznSpGd6YNeuCFLp517eHC3E2Nt8ecffxzzYpy7AL9PhRG9pCT",
  "key7": "5aJjxJ3VKW7GJT2Xe1WkguCXYDMfzUB5LdemRjUQ9pGNpyHyZQx5CkdX3YM7ZGs1onePxip51dagbCrvh6Bcdh8E",
  "key8": "2zRYga8jjwYjashcmdszP4B8mJkN84p6zHauAdMmbWcAfFKfWyMWheAktkiUPchcLjs67NLsTVsDnmsYAw9m47M",
  "key9": "5wh9Hrbmk3vHSv9BL33GipVXA2myq4b55Da1ZNeMHfMGzDe8pBxWPNtiT9XBBMqM3KhxySBMB2Kka5s2mDBCnSqo",
  "key10": "47tC6afCNxpdVkXhX2TryoFvnqG8d2A9SX3iYWdAWMEaCooc7zunHSJrBVQs3wpNCSxkxpuh5vDCNfUh73Hh9iAd",
  "key11": "34Rrk1PP3xTqssLJ2aZyTtb5aRATo3d2mn57bRRGYfJjT2LEWEpq6GWhyMMrC5baWmgQhEn6kAca8VjYaVVvs5mT",
  "key12": "2ZzjLx7HrCWXa6Jr74CnPvnhGEJ9Qcw63HwH5jEA8zQSNRt2V1FoGQnSfmJRgWkSCcFN6jCstq9tmXKPGMKgUGYa",
  "key13": "662EM8KjWdVDT1uChpdGaWUgKdf58a3qZ95GbHdgsKUh5BuzFbpGutE7GqHnUX4yRJ7dNm9pSoLzNg4Rq5yrHgjJ",
  "key14": "WQ6YFoB5U4Vo7cDhSFLSdGEFpuN1wRbtd5q9JVcF6SqyydvQEBRFSTxd4rSj6wwBaiKFpbdNannasJwz1rza4L4",
  "key15": "5S7tbtFjyr3FK1PAx1ERNUujE5uaARnXReSnrdLU2PurKicwTdM7KP4ajFrKsyrzBRh44shSYPCRCpu2ev57aQrf",
  "key16": "3RkAXWwHzwBVnZLRxEbjNdTdWQrivBJAaYcUJM3MeQA1CuiHdrqEGa2sqJXoaj3USxVuzFqCZFhp1HyNr869aWxx",
  "key17": "1NdjxfGLUeoWpzeivjwSMRaXWjPaSE6EAmwe3k73MCmkDCczY917FjAQoLLsHhVC6nhGfLs74RskDGZPcunFVZb",
  "key18": "4DpJGjCRDexcmneX8mcUY9xxXPGkhWEzz7DNY53keHdQqNhX9GRdo5xSmkA14J1kddCXUG5MWSJe8goUv8AyGHcC",
  "key19": "39Pg3WP9UBXzNw3PJ35g3SSgf19AREVUPJUrPBo6WroRQAJQMZfMUqxPfZrsNDfvovMW9fcq2DMHKd2gfF9SqwDD",
  "key20": "4xvBJy1qhdhRPfoAHBwCyxt8ZLHJu3uj9RkGEVZtYP2Zw4bLQrSssXtTArJsHw6mP1XoLAEp2CURFGXtpwq8kCPB",
  "key21": "2q2vK3NjQkrGJjiv8e1jb2zwMnygRzN9yuwJJJ9n5j8pV45HDQVxxrZsbTfrmAX5ZiAoVzuQQQ6vVLtjPHkSHGr",
  "key22": "5M5Nb9WSKjZfgaYZJ1s2CDR4syFdLQqLcz5jC3NRWS5qrdaUkr9J16Za1LcofAy5sVYqjK8Mb6asLsHyEwCG98ei",
  "key23": "2iC5RYFs4QpkvPPxbp2Y6JhpijDbJDMG4J2QKvW234ZLhKcLF33xym7qCt31XTUf6D4TKrUK48SS5R6jr74VCUC",
  "key24": "3C2tYPYEFw22yX9dP7Jk2cYtqBueb83zNFmi4QDA7uuuX5JJafNX9t6ekv5b7jkJmXRCAUidYMvzt8NgmJ8UL3Xm",
  "key25": "4RcDrGo7aUhwKB99mzok4QeU23fGT5FR1kKnBrxzh235dPb7mbijHekxX2Qmy7FeABHnvE9bRWxgZCn68cJ2n5Nj",
  "key26": "4Pix2zVh3gs9xoN3YFdj1Zq7UShnBw5zXZ4xnimUHNGeXoBTHNqpf7rn6Eqxu8xgR8b2jVoML4KKCfYorat6889s",
  "key27": "35hzjcoDXUpprNPhz7Luq6QgacjchHuAH7CjVpMnAcyKpGY81sBhdCqahVnA4hPbjr6y6w56BU4LdJmyVVJRLKfS",
  "key28": "3KaQzqfFoWhU8wgeASkd7zeHacLjfEqcV59uk4bRUzVxfnRGLRpfeRewb6UB6qz4VuRvmVqy5guMRahxPuqew69b",
  "key29": "36Bh2WcNybY41ymuKKX7dH94SjANjr7WKYKk59tCqFHFh8XgYrErL4AAER9SQuGtAYWMHp81fSfdjpbuLf7doxa4",
  "key30": "58d7B7VoJz4JqqSGfntX36eEh4mNWYSmQszggmFaLeGUTH7PaiLujo23qSGtV41PsX5R2NhcWjcMF28gmmCLuFee",
  "key31": "yzCQ7pEvBtYLWiTh6HCBFa6vaZuAPi9L8WCjM1nCQqLvRDLC2AZHSCV8VmDQDrpWeV9QKPJz2W8mmorQJNvk2Qr",
  "key32": "M19GVE4ectucAvDRvFsxKPh4BkudQFh9nb795ubnsHiXeGhvfNqQ7bW8qp4yieQ9rRPL9XGFZyX73MpqZWFwRdj",
  "key33": "3ybcn98nhpBoihm4RtobtGZ6Kzcm6wLFPR19bJzpeFHyQsyZcELBDf9Vj97zN2srktu9xi1wKrek3Tf8kktsBeab",
  "key34": "2ZGtaz9k3qSibEMEuAkx3aecdkPo8NqYfdovTysMS6MxRhcGja3VrNf3Zgz9aSn5jXXkFkBBVGwSDFyGwDGniHjT",
  "key35": "2BFWLsiS5Pp7oaekhUaA5cLKr7DUqgqj4rQY6yCgfujvh1VKhHeBswE3wAhtZkkmYhrnWFT7Ux157Y5FpV4zN4Hf",
  "key36": "azohb1gyT5JtweckeyBNr2jHfvMA5suxyoKVmLtzXKWs94C2rTzHUkjRLq3m75qzHboFstFxq7gchkJrogcMkLj",
  "key37": "4gshYb8LRwCmU79HBL3LqRFjxx1KrfxQbw7CNRZSHLpTeMuq4quiFAKsBApZAAqfpopyhqvTEsZqSc3j4Avyoaxb",
  "key38": "5B13xv4JowCYWZ7ts4MhRUytyjf46xQDzFNgHQhXFoKiFLziZGp45jMpJ8qiffx6m1PUyh8iMdMXoC7xagpZZ5QK",
  "key39": "5qTYQaJoNDxVP26fSVDgB6fcJTw7q1TX6i6vkHeXzJ49e5AqeodsVBfweP3Gr8ARafr3v2prpjN1GDALSRtEtgBM",
  "key40": "3RdWxAk5AXtRkGAw543rdac9Z9xxx5gBy3AZHSdGDezYzAESrNz2Rz9Ys6RrJzESNBavGvXMTPdZU74pxt5dbJ9D",
  "key41": "wMMMRDtVoa7hVHjMT9b3zeCwc75JS7uzWDjHN2kux3SnGH1VMSxreAWWXKCeSZ2amVakdLYL1qPzyff12KSecGT",
  "key42": "2RJWLD4iXpS9LGqTSmRUS9YMkdiJLFscHjh8UUbfyt4uJnSNsZgudwrMBzbFRJUTpXyz5GLFkFcWXYVgMSesxZmC",
  "key43": "4LzQqPWsfpw5RzWY2yrckBib8BTxKByMECduTbCdPCvYe1iz1bDb48trXvSCVo9xxf28duxHmJg29ahpRiZZ4wty",
  "key44": "4GA21vt14XrncupYLoUXsCMwXwoRjBXzW4Dc8EpBJHd5cSY7teJVYbYUHPFGQSGPoXmSC9smkhnN7UDqHAopUbtK"
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
