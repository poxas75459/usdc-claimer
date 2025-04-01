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
    "KktfCobTr1LfDzXbTjfoPWKtMKzrkHcquwH5BzmNoaX6e3HWsrZRkFy5KRVDWP38gbhPazGQYvkRYmrEjvxcuRV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EoeMCczhtBW114v7VXsEKN5hT7tGg33B8HgQ6Reoy351zmrkubxLe6WnoSyfn3uvxKh9dDmtUqk6KajBiNUE1vj",
  "key1": "3XPzGNaWQwLbvfrGbDgNDXvRKowPd3Yfq6uGZBbkGmtwW21DbMBAsGEwtAyC99G6j129nF7BG8hU2CWtbcTnDdQj",
  "key2": "2LYbBphgYgnLbgpXYmj2JrsxDqocE3xPGrZPaBTNoRoCPTD77w6gpiEKZ76rYRKTgH5A9EJ9ZHy23XsnboN4t6nQ",
  "key3": "4jQosG3AkK4gUFvLGWv32joFLwKsLNco24dhhgAV6w7woPEacxVd7YsUL5aVMbiNndKrScPAUDzqcLUuqBD5q2jk",
  "key4": "zjHJ9LP64agQ7JhwQWhYBBmAq42E2LuJiSQ8SQuAThSaoiqgDu8weogeFzrez9hMpxwXxnjice7PPrmfKSgQ3uZ",
  "key5": "23H92bzYoPhnfmNjkEdh5FmxbCXnnvZuJwM8G5TAqstS7hCmFhjkVwRXow7ZgMC99EQLCgbJWbx211W63rrVajWx",
  "key6": "3et7BbMYyx9ZpuyXobUkUcnJgvj4zz7upshBr4uNd3L49WeDDqoY4uRY14g2xwQ2zHq9u2dxsbkBKQjKUs8XVg5c",
  "key7": "4kpjfeZvheEN8Aoa7cNzG317XHQBFA1zxN9vmvh4hCnjH2cGVE1KmzkmWrSPPXUranav1CfVPQH9wuzhHYZjZ6B2",
  "key8": "Zd7e938rcfh7XgZ3D8YHzoBnrgDvqiZkExuHCM3wK99jncf4dQaXD4XEsqZLxbBw1JAZLQuFLKTksJRcZuufhzs",
  "key9": "3AVZxPPL2L448aFwvHuxeMQuzsxLQsb2CSVJ1dcCfKx5YrBK4FuKLQU4nm9wE8BCcSXuCnhFGetx7azEFvxASGfJ",
  "key10": "25mAZK6ooT4FtVyLneWkuHYqETRAc3PFkhUhWc7GDgWk7RzoZNjtCdRvjdryquoiXiYLKWA7eUBHbj6FZbn4aNPH",
  "key11": "4P9r7wrLzATDbMa3U2uDmAbXAp4jS6s8tuCq8ofcS4jmWP5Woxohka9QAJzpkDnajL66YiFYKegHdiosLyUjerVr",
  "key12": "3wfrctQyusrwrdeyE7i8citektFg7n1gHPCfHqoG12DqeTGqMNHEVDguvfDwaqugy4hKgT75fGst3GyPyq9hbYps",
  "key13": "4ttzBKaoBbqz2AZ79a9a9Zr4FW9V5Jr8HJHuCtDpbHfQmzarLMAsVcrbyonw57MyYHzHN4TSawYJDxmZ9thwhCdX",
  "key14": "62Qtc9oELacwZN82nfC43PDJWoY8ZoqcMZti39xcCLpfEd6VxpK9JFwvsZM8mVesn2U1VPfNQKvJPRiYNR91fJGX",
  "key15": "5viGHAnQ7GaqdbNm2kMFSnKzverWWeaAGTXC6HwCGx7Vv8Sv81G57cBL3emT9XUzexi8qz9W2kxajaFT135hEE3f",
  "key16": "gCxWQWaNn6SV3P1nVmYjNtcwKPwLbCcQTJRfQE8PHxo15VSpXHKwb575eTYqsfLz69usH1C33SVGq1nEAuSkFRt",
  "key17": "3899bMVaDNMM98vmhPkFG13CMJyVqbajMUnc4Z3bbJcMfuYB5S2hB89YixchZZ7Tbffhr8PtWLp2j2Tg6GAXJ5VJ",
  "key18": "46pyMg3a2o1edESVPpZamkfp4FdRRwGRhdpMzuMhssfyp34QydGPPHsFWBSNX9A3FC87bEnexGUbaprDQYYuCH51",
  "key19": "3u1NszpUEj9AgLLghvPvbaicYTcW1ArjnYombni2sZj43bE1jV5SzXWMPkLLTLTh15ok3Zsxxrz1saLQZT7M5iZd",
  "key20": "2EZPrHupfvwRSzp42osEZoG1kyJQ7W4m4bkrg4HmvhriA4kdnErc2gWUdLaPDYRXNmGCz42HNRXtnRnFdVYpkUmt",
  "key21": "5Q3bgFendtkNRBaeZYkbst9XLmWCRXQiffTPBdU3oqKthCeHTYHvAc3SEaQHer2cd1f6UhGeBL4kCwtEfn6XpNLv",
  "key22": "Ki1NZUgYisBfroGufYHiFhDPkVSw3C5b2M2kbkcdDWruYJ9WW69uospPDzeCUXSPDMgbbhpSxrZcVTCr4YJjF4M",
  "key23": "2DFz5pTassNs3rZHuBrqw5w3bn7WicNcWXSxJ9WExgXSipakHAEE2W71rhbZJ3JsYzQ5ecTtbcAKTaawqxZDKE8R",
  "key24": "3pkpiy6q6qKjZekQEeWSK3b4D1qk14QAsEWfSCA5HWNcoHXapEA5UXKmAjwVgHbP8LHspYd6ne8f7A1hLxSvQMtM",
  "key25": "4iYobWRtbNLc4ACYsVwNRzk7W11HS9nyneo4jvs8VYLu9C3bjD3SkUTzmKuGNNRGifxXAMomqz84agCzT6W6QJfm"
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
