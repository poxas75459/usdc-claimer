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
    "5q8g58C888g6767GMPSood3sHgTiea1oQ3RzL8VGZxwci3CwbQwe1ZVPcjwEL8fyjrsbaz3zCCDki3r7pvmAcHih"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bQn2PzTd7CUBeSw2f9Jnw81MtaknoawLNPn49jWSeMa53gusAQXX61DCrvUvczKSgt6odRfQc5nNRE94zpi611P",
  "key1": "3se7KiUr9fwBpU9dMRWoZrTKKsGpY36qh44NhZSkXTFJf6zyyYXxnjk9t4KS6wdrNCm9ZtN7ve69j1QgTXw9GhRn",
  "key2": "2TRWsuceLhL7sYJHJ7G1QE2vooiPMnphphfBMQ27KswkUU848e2V84iNhUzfjhtbizahP5g4oAuzVTSmGG82vphu",
  "key3": "664KCw1uh5Jyj7umvVhgewocWhyYSQW4hCUdcUdSs4mVGfz2z86yabB86Bhu9mAtA1GtHMT4gGQsd7k3f6ufcAzM",
  "key4": "TmjY6chr2QwwfnKKyRfu8QXFoCD8QRfWnTPuT3SXBrhbKVt2h4CmeFoJdppkSV9RZ8P15dh8RhhDQH91QitUiG7",
  "key5": "2GXcWftroq4q5CbqoeQ89seA3BbxqfCcz8LCYDLn4xDG1bSZha7BiG3t6VsqSPqBoxnQ2R8Tj3w8KCtaqiCLTNpg",
  "key6": "61m5G92N2q4JCxgGn4GYayGHaWoZFNxK74pSQNCjnkfVHXQCYzPdwxBet2gDucTvLZtLb8U96cBGnAhJzcEQGF31",
  "key7": "5TtfdmcPH9HJzb8TofCDUqYzgshVxwdgCcdmXtf3LYS5VGDboMaYFvCUvJRVDNKEpFiHzBEto26ZPDW16UzKXbGi",
  "key8": "2Kt4rqXp8YfzyGeuwrXMgn5di5bZ6xjjudAzyW8cj9jX1MTFbN1hxHotW1KfCsuZ3PxRFFvrZATx6kxyyTrnCC55",
  "key9": "2oQSTxMVboDyxJXCz35J4uP73TYF89GhGbU6RaxsgPspvyw9z6AWZETk7UcfK55K17SxYY1V1G1MfmnQmFchwY5y",
  "key10": "3heBWEZ4KddxUodPY96ukxLH2U6MPXp8CQC9XLsTUeEAjYP9ZbTkSYY5u9Wo4gbCt2Si7Y9VT35ry4rhGH2WaR8h",
  "key11": "65ub4ivqBd1t8t5fkzwV29qgeU9fRzZJJX75vpgcn1Bu8n5B17meJgkvbJi8LFKW7XfYZqnvgkD7PPVR1jAehP8u",
  "key12": "GutKDiPc3nTMaYYEXmVF1CyAyoAufoxHcgAXBF1rzEp1HomM3ZRpU1RRGwz2zsWJTB3NQm6nUzCocEShGFAZvcn",
  "key13": "4fVjBEX3td1zLr3CtbEwQsK9kEJqe7FTFGyHeEMGgsXNerSkm1ifgXoFDeVvKjcXZVozxyDdyvjzE7jxSeMp669c",
  "key14": "4hDYbKLs9U8WjUoufRELjyf26DET4YVFpZNC7QhgR141cNyoSywWcswPbPNQAsPxhFtCPxsRXC81b1rXzdAWwHUo",
  "key15": "kuncSNgpwk5RKnYFzN317BNByV1xRS3C2mobB7s5ezn3pqGV98GEeRpQnY7QVaBwUz6tfjEHXzJuSg8DoHaBa7E",
  "key16": "HfHhoo5SNHVTFHoXk1WAn7KjA6dJ74MZ8iQQki8g21NAhdKdrMxZ7sqzf1iE46VDvVDbqGonQcgGeDqqT8ME4mF",
  "key17": "4NEwmMytGF8muvBjZaqjW3BwD3koXuwazj2ytYoMkTNfLPGayGc1zk1BnVgvJpWezUERwq97DfPD3aaqi9h9qKCj",
  "key18": "Kbeg3M8xVjMk22admCUQFDn31rbouH1MhUJEAGKyPxYDvwSnUfH8PRGuiUi1Sca5hC9BBuncuCeRzsbqQYyvXr3",
  "key19": "3Sog29x9txajkKcEnRA8PE6HuhBcpftB2wocCwmmtmRJvfudzf1fyDS5pxiRCw9uREB2wfzy7rKnPUYQWdNwL3Ho",
  "key20": "si43fT6wpspsHVAqMtDxrbY3NicDzbVU9nuCdLnkGSPFrM1FqtunBL12FEZ9FyDwwJpe2vKym8dGLrEuKR7EscV",
  "key21": "5T73SKt28hEVZeea8Hot9ooZKg74y7mL4UEhXGFjYKHeeC29VfhckzxvoXwgpWJKbu62YB7Abf7LfC8WyRkC7uGQ",
  "key22": "5PAMj8XLpKyNZLQhHrsVmxW6ZsQUFovayG2VyGGZzuAFKjFQvyHauwpghEEwi1F6qiuVwHGdtC2y54TkW8iywtEk",
  "key23": "3Dxin5Acob4aDdzBKEw7bqf1KDJuHuy8AuEC9na6H3CUfLURrUHNbUq57v3eyQ63A75YeEjkDjeCGAe2qedjYLBo",
  "key24": "5KWNWuiWuMztKhXfdWfXuncJvjvmVffWqAVCfaM3SgSsqEKihjUmxCLcE1xNS492xyB5YvYmiR8tfsgo8feJmpiy",
  "key25": "2YyhTSLCzQavBhtZgn2btqe2qjNaf9WcM4CHMBwNrER1byB56QoK5qHUrYRLCnke7PAjWNN2RedqUgNkjRLKm6Hg",
  "key26": "BgAy8CYseyQKm6uCKZKgJ7Avi9q8D4Zyrc57TX1Tobj4oNmD42EYwxPTFDJ8G5Z3699NmSsku6KAcYMeaWrGvqV",
  "key27": "63S69Mae5Lke9rxFqjxB2fUgA7D1PeCoHwiqid6C4w5qafCnwwmLDJVbVqXq6J2Aw4MC5DNLrHKkZWEgLG8nockb",
  "key28": "MSEQ4Y6a8h5xSVUqYsZTTJ4uZGe5m96mBR6dDNmMavcoEoRYCD5VAkDAUecvnyNvwG5EECEsDFdrbU9y7dBygqt",
  "key29": "4k2YXcg8K9Khsb75ou1DUqKnXbH4XkajGXncJZwtkw94GtcQESrKXZYpEzxNBg6cDjRQrs5zyCv5pYNisWVv6HRG",
  "key30": "4BKAtCJf68f2X8VbXvjrx1qRbnnZebMRhC3gVDLq4STA2pkjzokBpLe6X7Q92xjHrwvncXsjgL2czNRG3rHaAUEM",
  "key31": "4L48UFQwFJwPJu3oaUbhvDenHZVCcHPG7vG2Q8oFi52jHup8JrspcrmywPp9GYALT7oV5NUUwawdt5tAXGHr8UU9",
  "key32": "5szPAtUqYAqkkE43pmNnBxwy1n4nkyyYxF5kVki7xVQLEinReac7PQqYLVkbQu89tHBu9WiWrJrGqyzwbqtpa3VE",
  "key33": "5hsmuiG53jXezN2zYy9fUxaMvwKfEjHBm1nVGKFm8QipqMv94MCc2MnpQXJrHEZtU212G9az9WhGudkPXvZ299VU",
  "key34": "RtDP797jnV2r4Bz3zkoiwfdkoGo8vYsL4cFoRmb8Pwu7YrdwCLjTjzqQL9bKgnzySiLSK8LoktYBp82hTGnJkoJ",
  "key35": "5X6xUUEGVA4uYgfSikSoQ7hvi7yMB7jnTg3LxNj6s67wg6dyaAwvJQVKSPYYiixsWUi1rYX6jmCHeceRkqAiQdgm",
  "key36": "21hSLHJSP5zaz6hvWXFEvdkVh4GygJz865XkdbecL2LAanYRUS8k9RFtkMnUwANoBNURiC23SVpbtjhFtSALWi5g",
  "key37": "332MWgogh9p2Busm54y4eBZoBc999Kbt9Y1JFkJ5DMZu5VaekSbzmTQDmeGN6WSdEBkFzbg45sVVL76e7RQvMdgV",
  "key38": "4Z8o7d7wuxK8rrZY9oL9YSkxsdgFdUhjn57xMnz58T8ypgTTkmeHqUAqt17yjsqaT3QLsFvCkuvKzBq8uYC56cGQ",
  "key39": "u1FVHtKVgPan5q7pZJW5EBdA1BjQkB5tAf6oJs4CmJQzLHHbnBv8De7bWuF2TMmXjR8mG3iDSX8h1WSzu1bBF8L",
  "key40": "EceaZh7hP45pzrZovUxm2s36a2mZVQH2Y3EvnoA4vML3Y5vdfk4HSzWs4ZzJjp2jUgSzbMEp5DnzMovYG1rAP31",
  "key41": "5bXzmh9Z13nqk8GioGjhiK6T1JiET2Mz2yxfoUHApKHKsApbEwY6x7YguoV45YmwVK6egHuMuB3mJcG9JwGwXh3c",
  "key42": "4hGpRMWeRcgYumRTy85WxSMLNfuHw7TSetmv6SZ7ZBAep8EyD9mddyThpnHKKFcKHbw7q83qu1PEwSMsYEmNEUZV",
  "key43": "55jb7mfKkYdxekguoEPy9PReotXd54XUtBBksHaPiUqpiYaBg5zJXm47W3uit7MzdpjM22WtF4DxL4wjJT6emjTs",
  "key44": "4bTcZJ5rgmK9RgvxrAhBgrtoo3jYhDS2JZ7gc9UmcjUqEq2si2cPk9f16j3Hbq9Ycn5ApsZY4ntTjexvZgqigbjU",
  "key45": "277Q5AbKE9YenmFh17TYbySgvv9xgRyKbmUTjxeDHBmSKNX7akr6z9ZhXRfDeFMo3S4Q4E6o5jupfiaUg5R2RSy7",
  "key46": "8Sy8GnGQof59qFiAtQRkonZoresZUh6gEob7zYM6LxUPqzugmRkbAkoj7B2ubSnQZ1zjCDppkWkKfaCfoQxiEsX",
  "key47": "3XzH8oHq9joTcnt9spioMfyXmmZbbhnXJhMyWzNf1g16AQGZuvnCFhfTn933EY2dXcRpoRDBPd3v6LTCeQbmbgAw"
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
