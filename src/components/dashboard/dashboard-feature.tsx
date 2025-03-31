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
    "5k8WNQF2vsFU2zdmeHPwrMEtCw6MRSerdj3Y3hKTD4h3dbBMZyHN89or2jmSASPD1SHEE9XvtCGC1aDbH34TUXsf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tkvqYmQBJPM1ZZD7dmTGbj196KJgmkNZ9tmAKjbK5qV2FqxCZEd6Q2nDuxcPT17awjgk3p2aLDc1CtMVojjHRhn",
  "key1": "3H1iKoTms6vEXeg5JxCCoa7m7D7DooBcXX9yAhmWXRNnVjAZjATPj8p2k49WgYH2XcrAUZoooakPjdvgwTNJWSqW",
  "key2": "89b56mjgVfouyzxN6YBqMuYnQNJdnbiEEs13evM4Eg4aKQ8ZvvuanVfUN4Mib3hMjfsNPJC2ALJNFJLhLyX8vvr",
  "key3": "67LyATS3oQ5uJEqYrMpecrFa6mMvBBMBjCq94AWWPFkADK37yHeZJ6dnZQQfgTR79jgvXRzpN8Pn17uY41Pbeuek",
  "key4": "3MDUZuYL81tyFAE8hPGcD44kBdFKGF1kaxFbcVBZnAgQBmwJUsFkJGsXdHzqJov3opXSnvWWKfcKuoBcLfad36q5",
  "key5": "3XsvTUZRxtbPLWZ2Lw4YL1BeBKMBpixfsCf2g4hXpi9Hjs3PaBtf7QLjqoDxXsyxj4NBWSSL9EWtLXszazHTSCvc",
  "key6": "2yPhjW7q9yZEebZjpmFCjw81jyeadc5LiwqSXnowWhfsSWcxi1ggDmB3aGf1aM7snQEPmoayoMDneBgpqe1YnwvW",
  "key7": "3jz55mUZkXt8LuUeP2yV4xbXWghbNYecg2bizkiQzZw22yqGc94b8yeJt9uxzBCBFZeXNetjo2h4ooD1FRn8Ytvn",
  "key8": "5oPjWU1Q5ErA1YtrvhxBKTvGxSP485KfBYf91pW59KJTYXM4eoJkoXrXytbTGJ8H9MMWknwT4iwyV6oZMNUiXzzJ",
  "key9": "4578dtLTUnzukPtThfFGsNv5Mb3JBGVcXFCXy9RHRviu81MXqPkpzgYkbgVRhtTBBJFsGSKdSHchcjXPNR19kEJa",
  "key10": "2QJ9NNzps5x9LiH2no2pNNVBotCMbtavNooWAAPXwbaTzkJ98zTLHp5AJb1qUt9iT6Xz66tVMWwK41DehxsX6nLG",
  "key11": "4UA4fbLRKGkcsn6VgfKxxZxGgywy6u2hgh2xbCxLkFTMxVrWHiLKALYoHneXJzMk8VDRjFdcbK8AmQaQF4A2oSR8",
  "key12": "2Pvhkszp152y1brQCmcqFewVsyFuyiNBBdscc2aWESjrr5VjKj7vuwZJCTs7ySXVrUma74aDa33unoGS3CECpqgW",
  "key13": "2kARuqDtdMN4PXKZqS6KkWTrCsfcNJvSJtgnuKkLc7VE8874kZ25ieWgfMqH2iwi4KdE6e5aDWkaSEgpoVZD6rgz",
  "key14": "4XRZZ8qg5Kj364SDuq9cpxmtQuJmgEyhr7vay3WGLKnwsuTcE1KWovEAMUqFTXiMAhPrAyvVYp5YLfmUPGZaqfRP",
  "key15": "53giEYLb4fDh7jJPi7P2X6GPn9X7f1GZUwaN1j4CiQs3jcViDUFyHAZ3cxyogSZWQZrqwgmzF3xdaF3cRqBonZP2",
  "key16": "dM7zTR98hEKNuHvnZ7gxZ4vkg1PCsdJ4NzNSQ97h1WdGEarbwZSmfwukqfHZ2enibrFGVZL3VBisfLSi7HAcbjj",
  "key17": "4FbKqPwtAUqWSwBvDk9b8WKBMGhwjeetVEtx9CDQxPUYuBupB6XoR9Hb6nFnDMR1G3SEgPr7h9RC4zJ19Mo7Gw3m",
  "key18": "3niG1efavRcTcZcoqkdQQMxb6CHLDmXAaM1UgqDXzQLTvvNwfBz6UVXGpEjuvR36ZmuUq6kNJvVKYvho9Kt9SJaw",
  "key19": "5taYLAbEbPW9zneGYHXsb8RxGX5H3Qc9dsDtcG3C9MNzQNJxtufuRZfq3Wj7AcUuGSLFUv2vEcgwfBrrq3djAmDM",
  "key20": "4sKbpRjpZ3wLWE7FQb2fZZgjpZZ7ziMLZj84Lns1fjhq32Z5iBHDj39cy9ZwihHhcjrBEtMpYG1rsQb9za8XecnR",
  "key21": "2Avxo5skvt7LMPFvkK1McWWiVvgU6NCLKg7GCaepfcdfDrVLTpFbVyswY6zzzTjXfj22guQ6VD7iHQ9PxBtf3ezL",
  "key22": "54TrAciMKX3HepJd1T36rfVgnstyAM7tRnkNAs3gfZ9ku9becG1zsFG9wqG42GPdDJEwEm68fjmgPKYcQnuJr3RC",
  "key23": "3oGRP313RhUbFfeafogmscnkc7UEyP2i4vYbMLj4zpwSP2DuAunHzAZ7jfAzzN3binMRMnLk3c6PyMLWHWptpMBF",
  "key24": "3Kbcc97L1Ss25QtRzRTtbX4pYXmXVo9zHnpMMgyTEB8M8Jc5Dfe9JaFG5ftndJy6dzNX8K2da8ykG2fRiKaPVxKB",
  "key25": "4TXGUfTHgpxtR1KeFiKsC6HAQEsLKDb4nnv4z1d46UsaLP4QMkPfM8wRrmGhUs7twxuTFYJBiEtFPsbMawBvcaSy",
  "key26": "5HxPEGbKJNPjCd5nhrgJGiziweDbXJ3568KYjdYZ81XhHjH3b7ojHagc2y63RLWMuzBZXrZQkDSxduJj2PxKYeqA",
  "key27": "5QrvFygaNRmPd5snhxEUjHoSadmNPoGLMaitupPG8vj4Lvao3FsX8XgnvvVRNisQaKrFCgx2iWGDxpQTPXXVzYHW",
  "key28": "5kW7uzZ8e6kDyrZS6ZTFmLgpVU1cVTkyvbL9C2CPG2aedu6MnLmLd9hRzJ3CX6TnArMCSsBVcQU8tsFC4n8L7gz",
  "key29": "24vTqfvbv5FnJPLwEUWUMFt1qb6i7WwPgkYUb4NHdUcBykRC38BgEjmNSUcF55aqHWX9ANxwazLRgcW6i6vEKL2x",
  "key30": "3TkE24rZH7yF5KiHRUztNiigtfoRrHFrZhd73JyzdesePhZAaumKuk18n2ZmnrwbCAnw1GPYD1hePc4KMcig868P",
  "key31": "2FCGLzTfW6uG3ZgWhEtCrvwEmFWDY5Ku8Cd2njdgjmBR6TWLwYi5KWa441EevY9Qh2WVGGEVsSodowYs8mERTvao",
  "key32": "5koJouKHdps7n8vh15QkLVWhdGSRAhR1aemxg416hVCgiD1MjrzrpjmgmWgTr9sqoZB5H9V8tSFht1RvgaxqiRwk",
  "key33": "4KetoDkmUXnNNQAvbga3uszu85ySp8Z23SH4bbL1jWzK5H7E14gqBGrMU9pNp1rXomTdU73xvYrs9JojjsfRCsEJ",
  "key34": "4PZZUiV8diKkm16sfBkwFVwrrHVUJTeehJzjQiepvLHk15TPQjuSm9sK5qgPEytTxEVSty6ps9CVQTMgvaCWCVXM",
  "key35": "3Ezo3ZwM653jnbLvr5SrwEqMvcnrpohDopcqtCvkJjz1BTu7amfy2tLc3DxSetouv2zjmf4ZhBnjZudAQpaKvZVW",
  "key36": "2PYA5kfKpA6ihcLxhDvU9BV9XAXvz7pkNzaA5PYgx7y8vCg7oAsNSNrEjx6gWdMD3pLXozrWwgUBEu48u27UXJwQ",
  "key37": "3pS3pueubLxzVK1utkjGQ9uDxQ3bKVfoSr3qWH2Dc35Xj1JhTZhr3mHmGtaJUNFvnsCNFCUQQEpW7ebHvqFQgxrw",
  "key38": "2ExsekWJCf7ryTKe6bYn5JjKUJNUmZLxSm7VkzLTdMWnYU8TZmWsHeJ4ueVdKWU8gz53bmxs2WiBnE2DWjNwepFr",
  "key39": "4DdNXiWM9SkyrMhAsgnfa93mv7zXFV121uTnxun6Wh4T2CRoH44kUPyJrDhDTqtuH5hzZbT2etYXxP5kspG545uY",
  "key40": "512bURY6XTsTfz1MaKU5zYNCq3dY3EJzyuD98vWJzkAGFuYsfiNyhEfQCXNLd6q4uK1beYBUMQ5kFRRAxSQa2Rnp",
  "key41": "2Xa82gCb5asJfEq6CsGh1NLJP12oa6P6id4gLC7QytVxehufWMUF5XWr7STUNZW9A5MRj3cvXAaYzGTYDinnwAG2",
  "key42": "5iH6YmCSmvnV6dTsu6bUFYyf7a7ZWYsXSRP2KdUwTyfjaPt6wMkjzZh99V6TPUBn7aRnt8SUFYZ3DLgxHPJF9XUP",
  "key43": "28NftHH2Sk9JwM7j2RSFpmZgmuwFZi17AwBNkGX2jKwD3cMM6v9y2E5UAYiiBiab2LymHC86LZHpAa4kpPY2nv79",
  "key44": "4ixRgpmoXQj86SLigfvky6GtFc3xf3KMeoBczNGWrQ1jijs1za2ixjnSKBSMQFLVTXBXq8qBU7ruKEUDRc69fL1R",
  "key45": "y9UNzC2gPfdUxh7FJVcJoDczp4qMu7MBxeYM4LDiH8Gcjo4wioFXu2PaBSchtsCRRLoWkr9x3BUMCqLwtZEzEBq",
  "key46": "3tarx8qZByNQvjsvLCEGAUp24gPxCPWvvUWmpNjjqHai8uvLmzmzW6viJwwrWYCJgkdA9aWwfaaCwik9cGAnhGS2",
  "key47": "h7WCJgqqPWocjSZQ4SLvkiA99BXXfiWANY5mePYjo6NhKvWKAbkKPQdy3wm5CvwghSpwRMisyPajHpmgPPFZr6S"
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
