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
    "3d7BzMUixJeD7HemHET39KXJV7pbsxRFXeKKizvcK6XpYvfuNJiizzrEoafmH4mMer1WKMpdm9S4aEEpW9DcnnX6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T4Vns9gQqYQWsBoFCT89arnbQLeZ2Munv8PDjw4CMFnqmeGj5hL4H17PDHCfWKCPumxKAZASA4Z4hSTUbiHZ575",
  "key1": "SEozXb6Y57onrU3556xuPGJJ7EmT8H3zK8Sy3RsQ9z4rXhXYbHUQHzYqF6pPUMHqe9kTETfZpgzMu9u3AJHwN2y",
  "key2": "3VqWZ1gBpvtB79omZWWSvtd65MNewJNyMHhehZMHiezFSiEECjXCigdGu6etAQhQ1Pvn6qo6Qx6dQiYKatbzSNcW",
  "key3": "2et2BoySoYUgMaTw6fn5pKSJsJ6cPuTFSZtbwoAdxh1NPUQD4L9eWNonFWBpqg1U4R8GAcvko4sUBnEtqNtgXroS",
  "key4": "4SDYxz4bt7gGiKy9gYAPNmShRBaAxiSvsL4Riaz1rncruM9MPTqVv8cke6eUuaU92HnTSKy5y1t5saEJyDcQEnpA",
  "key5": "3Lk1G4Sp6wAG9pNkA8q3LQbkkkhZ3RboHq3Qu9dmNzH4fF2cErJE9BLXCTDe2J8ujN7kBeP93frDEKs6UaC4yXE",
  "key6": "5D8bZXmUBBCUxvdSun6FQXPFh3p2BFS8EsdzZ9of1KuxjErV1BJui44TXRS54g3tSUwy9B8uihkgLvcby2ZB2kMh",
  "key7": "3NREdqF7YVG88apJ4ZVmd91aKUfQHjpwSKaPN6QusGfGJVRZSV3uAP7HqSgprgoYdtTws5yUZkLeTZavBQDJ5kXu",
  "key8": "3NREeDkqFMKrqsGiCwMyxAvKMY4GdvJwc9HGLcW62ug2nJX7tFF418SKvP6urbiGGvGWh3XwwftRC6DRWewccARb",
  "key9": "65VEuLhMDmw8pk8GZDaJHKm6QzTZMfpnTk1CtkkBpL8anXLub3HaK28wY7jkJXdT96VLHyoBP9cUNbDBEdrZYX7h",
  "key10": "58u9JAxucPp2ntZ59r4GVokCUPdzki7RWbm9R4tNLJRhJBqgNdrkdBBvcBN9Nco5hJcMSPVr2ToTAGP1dn1thniS",
  "key11": "65FVA5L5WPi8tV9xe3jMfyckau6BszzTk8NmPHHi6KeibLhKPYdqUjpLYZuynpGjy1VrF6PjyeuQNypDn6uNTzAx",
  "key12": "5eTn5v6e3PngTk4u45YV7hjiXQWxYChX788wWnnUJhesHpyQXxQaq2MJ11CuyojUTjYRbP6HYGVWm8nVLc92GH5b",
  "key13": "ceKt7nJdW6nQGUPNNRfuqeQRJev5zQ88bfVDv9cTWyg6cL5oX5K3MmBAnMCQ66XZxi81PbDuqZjYA53d4DPHizC",
  "key14": "3QzS5G5uzTxfAhDEw1kW3UWzXsnHwN976vG38bc6FpeuGcsjGrFd8bupDcWVNzqFWSgZFLAttus89kggEhxqSZSN",
  "key15": "4Um1UTUJ83UjxFCNLsTnA9J7JBgeyYTehJ8bqMf2bjKDZiRinMfjTnuzeV7cHGntYQEQepz6nKU1DFN2efuDDAKK",
  "key16": "47CB2bwBhXGrcSSJA91JNqBZAgcj7qG1gJZMghXgazaadDUsNcYkxMYkFnoiVq74yF2QnPshdv8AsbyDoJjx4Fc5",
  "key17": "4f91FPDaZHrDThvtW6Z2dKTsqECZKyV3YK1GWSf7vs1njiiZ9NLWJYR6A9NPxrbpUFcRVoUCET4PTvWD2gaN6FRZ",
  "key18": "5zwrg51ygWBUEWN4tARQFj87ckcnh3nAFM7sZfdEUgPDuY5Z9XgZsWQnNjYGjZuiSfe6D5hMGRwi7roSwCoLZfMD",
  "key19": "2EMsU2dEGoNaHCijYQyFAhoETGyxbjqVNCav1toEqbMmCEDy5eBttWhaYqQ9Z4sVnTPe2gu3uGM5HAwP4YYt1hQt",
  "key20": "5AULUFCNHYEdmCv3kqvo4wrUJdgocFCRcqfkzFRAKFKt2euv8DAi62aDy8ZsXVXuYadFomEqkzsUDhvtziqwYzM7",
  "key21": "H7wr5rr7opJqbtDvhphn15DxSMZPrpZgFiThBJotNKfAoJHVdqPuaj2Ai8V8juLErE8K9yktiz8z8yRS1gP4ZQv",
  "key22": "44jxzfAABcu62QYYV2mSTtvDuCPLo3dZ7nz1q2mxSmoAuYZYo8j464sy4bxti4exuP9TZ9sX6miH7wX6PgHFL8AN",
  "key23": "4J7aP1d7MqoNfxm2Ua9NQuGvGyfZPtPDEj3sprtQswLFQDhcuFJKaw1DMhWQ6RkJXAHwCespubkMj1rGRYMYVxUV",
  "key24": "55Atsmf7B6BBkRKsr6QjAM36m7a8pSvytUMHtjEfVC9UuK8dboxcwiWcmhAAo4KPB77JBvwaaQ3jGtGVvFohRbrq",
  "key25": "5BUykZz9HhnXB7F4EoWsDB8JTD89TjFpLxTLLfF8JGNUfcPspRSdxWaw1eqaswtPwJUb7uAvwKcRdjh1p2TpqzZa",
  "key26": "5RGbxZqg3z3Pt9fxNm6CoLayRrUuGzcMUrQwdsNgw1sFYsXhvKjCBiHnNHvdvVUJJipQ6zqpyGx3Acke8CHMjpWm",
  "key27": "nVhqDhYGjU55udX5hL68YQjVxiM4U2VLxLkHuxxMMb4f2obgK9BWBFdT1qdk1XCFvnrEgJuBwV5nnUVF3deEbnY",
  "key28": "2i3o7vbqLuHxG8gLNGJc13hmX4N1MJ1gEeYhj9xpJh3avzuT2R5n4rTgANwnTwe2Hh3KCVp583Z6jiP12qWUGHzd",
  "key29": "65kjHYZKquo1nxFJ3ZvrtrSK6iGKrQ2esSdSLtudjw3Dt4nNcW48vgwqijGmFh5zbZF988wkK6CjAotStYqLsrqk",
  "key30": "5GZLbM94bWDRV61mX1nF6fGURG4HQ46cHQ3fwqahiiWBZyR45NpFq1Xgiya94WJ8S5hG45AfHYKEaJE1azTqZLz8",
  "key31": "4Lq4K8C9jJjuVpGX27JoT38hbxQacXeoiAxLzqG1QLxN57AYGBNjxvLjWtcMZxRtHp2TqV7DR5fXTJ6kY3mtJPBd",
  "key32": "7mCNizkUwMitoXae8CzSgVmam1cXK4KisXWVYbCkcWUvEshQ8wA6ZcStD9k4JjBBcfFewd9KHTJ9qfR11EDpsgH",
  "key33": "5DVvprnb5R4FReoNzDZ3DLKFcReL7LkAnpJ5NarXntGd2S7HueWHE6jtbrFfxWGvc89s8MWwxLPLs3oMzsVC5fNu",
  "key34": "23zCqe1gWmuxP2Mz8ferFryiNuNbxVhHvePwJ1rN5Yr4kW42oWhRss6LKYuNgBfd4LE1V3dbbT9aw9pi1oCNJge4",
  "key35": "482Ek5Skbu8t2oMYKc6scZbbFPz5nZbfDQRwhi5qra6wu6QpxyGgT1gAVmvvomdwLs1ohCFrDAzGcpvvdinMbrfn"
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
