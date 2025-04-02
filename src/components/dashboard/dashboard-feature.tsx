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
    "5LsnQgTBHyZ3MTPf5WS8fFBncPzDLSho2Pd6WHrboADoAyqQNikgoZJLZdVWDRgQ17d2yKFvg6F5U81VSt75pXJF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42DppCS6ucor7NuPyxxWVaaVc8eqVd2svi4ZpMTcqS7cioXX2YFc9JJiuNCu6sFMp82n5zQPeomafpoui4SrhJgt",
  "key1": "3sNia9YPxueKNoPsurxbP6oz6sS8nspksEeFi1Xsfv2SndfqpSCe4yZobig9ettGju7tNiPcZx7N1L5oPWJVgvKv",
  "key2": "3CZHzuibEoJdA6kQuE6MYF4WRKfRjds4JaVzSrQgTJUpEeUPkX7QgEF3q9c6RXMZLraTxZdM77xBRMfcsVYRNhmf",
  "key3": "5yt5msJNT9LpdrHbxK6sB9C8JZqwmz65d56smF4oFKkfS9JoaSzfTL1Zp9PQrj7AFyBJyGFGRPMdSvqG2rrbRzQV",
  "key4": "4eQ5yU8nWgPx1mo6M3fmE5oeX6hkicXufRMe7DgTv6uyPN1LEVcwvP8AnMqSxKDGPgDgjC5sYfv7TuJDci4LL3Nn",
  "key5": "5oz6QNwbkwRpND36eA3EHLeKyag2em5gTzq9GWpuueNSqTq7Pdi3xxs97XqprrhJ95KRmrq1qoFZ59Lg6kYbBPgi",
  "key6": "2wAGZugX4vF17uoGcMW6mNZULAYGe3t35TXnuVLYtQb9Mw1HasmXXRbnN3wbC2z8BTez5iaUy4xPY4R4HTyPToqJ",
  "key7": "5UxnRsdP8DJXbyUemphzgoRwvqws3R5n5umSFC1MoXAdYrYZVdygQrX9okNnmwKwxTr2m3VzPENqRt8yi2BbYrBW",
  "key8": "3vNeZwast6xL1EDZEn3uTJnWdVF9WoRxB42qZANxQnnqN5fTeqJFGLG2ZxMrbgdijpQUVd6REPgU5vA1EkhREcEA",
  "key9": "4Zq1R7cz8dE4HfA3sFeniSE8eZyjgHo77UHfAhiEiUBHYHmC8CtxcHgKrLbE1M1Po4SyXCBpgGF8TGxc2GrsG44B",
  "key10": "2BAXys57SfuJzSH38RNkmgat8GJBfd7gkQ3birkYwJ3gGbX6MNLxsPDimgL9B6De1iYwTyeDPRwRsFjbZCDNBDqE",
  "key11": "23LzfHckBNqjV9PucFZ7KBMnk59LaDA67Jjmc8LvRJjVzwgzWoWSafWz2e7Q6SKS5TUDykxr4nemQZ3JNa57JBAy",
  "key12": "4Y5gWTcNPETLseheqrHbHvRPkXDH4Xni6rnjrHX4XDb5G2iJyF52vvneNAbJpZPkn2v67yRpod4YZ2CMGu7EVwBC",
  "key13": "3mMgRxbgLh7Y1ZtZFD5NUiKRRQwxCoYgMJdULPG6Fg5pTGUzBMnvYP8itn48zd93FcqktTfterYP2W3QNK2qiJ15",
  "key14": "3VfaiB3uxvUoEa5m91Y36jAtECadqSFi3JhGYmjnJqi2KomysLjSjSsWT84VS5akruLFobtRyLM9zS4TF1SHLSvx",
  "key15": "4UYqypAkbkekgxDk9AkkAWfX85EkLJ1nGp56jVJfs1H8qSuzrdRJNoerGLctZrhPpZghYYUYK493TnYyJdVLrNGJ",
  "key16": "3qMAhy4aXUrCMaPFPLfdMXpxVt3wFcZNPcv6SSAYfRtPqU7rtDA2iBMpsiPspzsXnCNXBf4xNJRKM9EpA24efNh9",
  "key17": "gQzMxmBCND5rgzTPsDVjHYC2m1DWrxvqioghuhu6njccefvdCHSbbBo6WaMZXRP6ynV1CgEifWPfXQ4krq7EsXd",
  "key18": "imcssYnwL31YQXedWT64shRTJD8vDiDwx64HueJQre8qycBQqta1j578Jqu9dsrqSsTEu6yxQhUoQADhH3t9dJ1",
  "key19": "2y6ZR1r2tRRyLCyMhe7hwQzznja2BrsfGc8NWcM4AhggSeNiRv2YaMyiGAcQqM9GbxsAaWVqdX6R8dz6ZS9UNczs",
  "key20": "2rqT1kGRJbvjJEeeqXMHmzF4ev8LKMueAZCBpBicjg9PfUM6eLb1MQAQefKXmGPFuovEqoPchSzxau3HRjUKCthY",
  "key21": "2JNyHqZ1WFkzWAFgowAqFGDBubcSiRbBNnN7NxTR9H4F63ogeXSVSELjR23ErG5CJ6bAZjBnRuypoK1e6KP8XhPb",
  "key22": "25YFevvmVqyvhsVHbmmvTrKjGxZnQBLxhaBuyFZvH2djWgeJAYd58YGHKKe2AHvURo8SPpUq5BA8dQ3dnHbSZQN4",
  "key23": "5XLrWXCmGQVmLYz3rUs2qE8JhRi6fCNou1TKkoxgndxXV9WepNJUR1WQ3vZHNU1jeK2rXZELbMce1N4C3oBDdmzz",
  "key24": "2DiduWVejRFWP9hGcFVbNNLohSe9NNkzPpPbDrgHwzrdzqVB6eBBwxe3ScPb1i4HEeSuFGp5W3rLvfD4dtaHeDzC",
  "key25": "4YuPY6TM2V9jxJbhLUQwEunevE7GKL8QETRgamLVuSZv7nthmZoXdREBvF9j7GoSqv4rUYrzt1a8HwWGPAxshUyH",
  "key26": "3GHhe9vYdUSSgQqXnDRg5Q1T7YnHYiVtP6aii2qJsLF96893UTeHQ6HK7ahv4jzH3mCbuZ78G2PikzB4R8Rux9Rj",
  "key27": "5i36W27zZQQC2tzLzAqmXCiYT89KsHbCEE3HaWbgpb2fAktGGQmYny2KEivfHQDvG7HNG674MqchktCQsfN5Nyai",
  "key28": "5Dnpc2HNbJibnNJMffmHLmmWb5MJqBw3tmFQ5kJZTkxAsGEDBGeT6HGy8EkJSmQDnqDe5ut9tFD8K26SLEz3SxA7",
  "key29": "NDoTFgtLsH6V5dKTquWbaTYJ6cN2tEQfBjBnBgPq9Am7GLXJakb9KevDQPbBe87Gyr8rw69y7VgsSAhEXtjezKH",
  "key30": "nbxNE5UKixGrwjf1VWC65PZDBa9xo7dpnL8q3ZrB2WHVVp5sZyMCRQaNBrDveg2hAziTb2kTPXFe9LUEMX6TeRH",
  "key31": "3WkEnSerU3CpN7uyZaqYVyKRmmsiVWVJiPWtBwVTPZeGzM6EGSm1UW8nnHrUAi9XwEuRAWJtjtyyZG7KtArWmwAx",
  "key32": "4nBEEWKFy8h47GBwJ7tbuZpHPBoVfc73ctXDDVBM8hxnHhbc61FbLHecVKnKt3R4SUkfC8rXPNcwUxtbjbyqexE2",
  "key33": "4fwSPBDyXaJDVBF7MC7Q6cmRdJ1rcFH9DbXMbVgpBGTFsCWBERJ6PCKtaXKQVK1VygFAho6eFvDmzwMznpBAwtU1",
  "key34": "D4Pup1pJdBqAvWLQzpfGJBFjAbvWNAzhpYpVLrvKcyvHMjogLnn4NM36Zydz4G1KDWJyHr3WRoH8KFzCMLHjiSD",
  "key35": "3WbXfvTUnXQJL4pQYDjHnuajk1SNEhRZ6A8Zk1CeCixjUm1jWHbSv5Qba8NcHsrQBZngCwYEFGgPsSUnCQYErGrN",
  "key36": "5ugmASLhkGGJ7dRgtAqjkK5PaSwkgqNwtsEpt8HHSy7KtNxEtQ8fzbfz5MiLTnzAGYxmrL1rWB1d4Sd7zJgqTTcB",
  "key37": "bF4oAH79uVCJuQDnbFWrykAY7juRXyLp5VXQ19UwckUacuB7MTCRN8L5P7HxHzDkHCHfZobnS1ju6ZLpuocVHg3",
  "key38": "2FRPTxPsVvX6gZP5fwTVcDs4MPk2oS3jVrgMTFPx6XyzKGyYT9aAKWrHmR1hB3qnxBs5LgV2bAAwQQfRbh5kRXtk",
  "key39": "5Excn4X5neeAw4EKeec7sdwhzaYeJwk3woEGdyrQmGNzyD8gYcjDudxoCRPCeYEQ2Jx42EYeBu7ic6cCxSJBhh9G",
  "key40": "2DunrAa8TXN8MgoPCVT9cUFgcZZdodQsnhDQTTsdzQ5C16kwXQGi1FyTF1ehMFrj9TDFrdLoqcBVibj1qV86ycV9",
  "key41": "5JXjaGftP3bz6SMoG8GHhrSardGZTfFm1EvRRL4855MMfHYxGfv2UnWbP1PKaTcisKZoChY3BYeWe3cpKKyJTgxq",
  "key42": "dKzbGXx89hHCMjk3r2us63F7gekR6AUBPSxZXLvQUnUt18o8X3vcJmzr4Pxd2g6oP5BVndVcCEs7mgcsqGVj9QK",
  "key43": "2uc3ZqrZjzSEp5s2zWdG68XMjxR1kuiCjLGJm7dixtws3HobW9TpiniYRWz7EJDKhWAXBY524Ku3xcnjJco2gzH9",
  "key44": "2tBkHfZ8XaAAQ1D945GViq5GJYikThXPoSz4WezZToaJ3nfs1wboC6cMRdVx4Fbcz95zTbZg6VgBQSRpWyXjwDqr",
  "key45": "4S4Comzm65WKRPDvdVNzpAkXXfqbzJZ83kHyRTv6tGK4vPW58YEP4fXEXW9tZHuj6Zm55HsCN25rjZktnD991bhb",
  "key46": "25ok8h8NKt8hEXFqFcztoS5xaUKPTeKKCMZ8LuLUxFZzXPmGuvKFwvZ5D2wfvv4huhKvsoup183Kqm7qnWj6sfYw",
  "key47": "33YGntmEeZodcRcGVBYFEKcnTkfpnjhwa3H1RrBxRFYtTgArmiwVBr8PreX97oGktwmw5chsTZC1ViYWEXtykHbA",
  "key48": "5s8bfbvyryhGJ45pQ1hJQCEbVuuVkxfxaZDuoT1cwqouUbUo7bELeFUxoFVtBHZj4fQg6RZMVGJi3gsVLjqyDth6",
  "key49": "2PPtDgtU4XeG3g81gtNFLiWFXfNsgitkX1wCi8cTaRvDxjQsTxpyRASU5Uag2agMHcBtKZe4kThXoeyq3pv8ojCP"
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
