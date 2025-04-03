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
    "3hHVAxUfSD5SzGEpDsCaZH6dQT4iwAkXN5GZ9bs6R4o2mN4YbKn5vV6RjjhDMDmGxM2ZdeVnGmFpo4WiJF7UtCj9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MPrE6hj3MSPCbg6jggKZaXRM3eBbzUPMx3ggmz39dKjKCqA6d1JZekx5UuDQFaGTN4FVhxwvVHEhdDrnadgStjq",
  "key1": "2NRBBTcFTqvkrUERBh6yHG1uAMBVXW7LuimJyuYof7aiN2TcCN54KBR1SDYcrTwbQQxNJgTkGeydExCDURfv83Xd",
  "key2": "4a6w1b35nJyCrdoujEpPFEaSy58WbzGkdWL3f7kNqeFwtrTx8yi8aqH1xFcwCG3dxg4YVjfhYz2kcSQKG5YyEiXB",
  "key3": "5nQ9JhreC9b8LgmdKv5Vj8wKmQ5RVLkgoGStVAmDsi1v85jJQcZD2cKkuaSnvxhi5vMCAFZy5FxtetSdRMPzHSB9",
  "key4": "4RHFqi9LYBmGDhCSMEhkjNtVQaQBvDdCkVbCwaNKatpGtBL2iXFUjc4ASbkQABENZwzgbvMo2ahcPdmYZUPkitjR",
  "key5": "2TaJGZFSpLv7izuLYgb37uYuAzzb5V8TP4tSChrWNmC5b2A7MpECWqaUMjXsAYG3bC1uwvuABp32AgZtkUwkQjuw",
  "key6": "5usAEuLhSn8PRVTp7Npak8jK1VQqFFSszNcm5noeckFWzdbQC9rdpjN8u3J69wbFa4bvujyDEZAYJrkgb7HucPZY",
  "key7": "2NhhJguwCrZbFfBiqQ8jFHcPVPQJMCivQCbdnZQrVQiKP869qZam1KU3eAQuhe1dyTGieLacWNLco2FXeTga29Uh",
  "key8": "3qGiejr98pwpd7xh5qnk9mh3jfQyLCd8YLE8gkttpRpruAraUFup4rJvQa1Rw8CxhscTmP3dRoJJXWEYRtFuVuT5",
  "key9": "38quNaRmXjx447yiXzRh7heAzXCJzVz5jMypV4pyeV98tNqd9NFuu4ciS4TvNo9upLPfTWzDSagtS62W4f9iPEi",
  "key10": "42Dwh54FBbX9N1ftXDZ55iEsztpRsiTVZLmk5mg9Z1uj7Z45EAtTR83ZVFjgqk5PgzuQqxUWH522ihSDdrQWQZu6",
  "key11": "2dXW6eArkDwiAyLCcrevp6mDSvjjPEGfAaS8KfDEcEQT5fzL7LyderAbsovdvfMJS2387qLPdTXo4sx5h4An8mw1",
  "key12": "D4QGNP9kYoHBhtZHd5B8nVAQ6HTdTz5JPjPz7TQLxpu5sJE4G23nzHV8RqsP3GPsXm58f8cCyTmFgwsncNWYKGZ",
  "key13": "2eaFngBfAJFmM1Ft1WJuHBst6r46gy5ap4LF7iDmFqCAkaqn4GvMbxTGkvEkd6FJd1JXgCwWgyS1ZgdReAx1effv",
  "key14": "2XiBaP2UuoTup8AVrkSHfv41giAHU2kY2EzYeBy7Su8JvtdcKKUVdHnu745xZq2izkJfWP2fDJG8oo9H4h6BHTpx",
  "key15": "2N6cM5Vc1ww5ADxAw7rPQCT1NadhcVEZtBPE9aYsmGVaW6kxaStzQmT4opKRXi3ZeGb68dXKebCrRyX2YjgV7Bgj",
  "key16": "4aGRFmid9LZUi2Nb1fHaXwh99bUMKkmWHyKCVLjybnLQrPTsRSMYgTv2vLEVApa2suKeRUBrFTWACmXawxTjrPYo",
  "key17": "5JaSKxNftc5DQPCebiwLzCR8urhfKEeteZGZXSEZFKcJVKKpoYVGAkpjviUy6tLP7cNRNcEKuvQNhXVXf5LBzfRz",
  "key18": "499bFiC5Ynsn47fwpbk2EpuJmTeGjajru21r6pJpsGma3LUWaJW6UVoxHVLz61j4MAnWEMpu4hspyLcb4fFLNpc1",
  "key19": "3zoTbMYG3ntLBBdf7W5kQz5svjKsV2ki7yUpNp4PeF2HUBYcrhc8Q7sdokmFN5Pc3ZppRDFrwXLmHewrebky3UPg",
  "key20": "5AYKzH7EoRHKQnudgri6ypmGMmYFnySmpZcMuXi7wS7gZLtqN5BUXtz1PUNV9asMKjStYtbGXVv4E55Pr5ihQegM",
  "key21": "5E3fFuNEFzATW2Cf74mNNoBfdcLxcZFGMzQvYjA3aC8HYtUNd9T7ZujmkKJkRmikTrwdEuvkBjnBCVdERyfJTbmG",
  "key22": "2rdLSM9n2Fmid8pamHpjjEUfWLmKbnsWUGzHDuAL5DqDzoovpxkGLSJvbgkje3sC6GjBswG8ZzC2a3AB3S8FfLKS",
  "key23": "3mX9LrfHrDkMKU8U5da3HQuVE8pFYJ8YmwrJFzn2DpjzKCHFhtkdVcpn4nhMQdV7m4a54RkHEfFKxWm7feizutkZ",
  "key24": "25QVafGyCrFPZMV27dNU1pzW2QaVaBrCN3XF848eLkwoZDUq846baApHgvKTozmREj8jwjp26ce1edFQwg67bYfY",
  "key25": "xMHSPfNe98EfkVqcxKQRkMMSVbycP2Pxn3v9Xwe1ZqSNFU9fY7h5EzTqdCXtUgf9PjqLLokucLocLgNzWgBPrCR",
  "key26": "5mGWJB965meTQf49K7y7pEeLa1RwnhQNdsMjarCzRSymQGUZrdiHhuLpQEHaSM1UcEdFbNa5TcYU99ag7qdgVqCW",
  "key27": "4LGDF4PKE6kdBQduGqBwDUCiumwAxb86vWenf8Kc1GWooxMyYdBC12gZhWksQ6EjTfcEtu8raua1uWDCPDSmYy5y",
  "key28": "rBe7dcZWPtJK7HhV7A9y9c3WPqRintKL5yCkch9E4w6zwxQ1yjH7WGTmn1vRdb3YG2nBTuUaZ3B3qjpedCxLyvV",
  "key29": "637mdwtm83mnJgUi7AGrtw9v6wDdjwb6oScodrASSJsSFh74aFzfFstiyiunYjZGc3ZpcuiKsPmHtwGuARYYW5Yy",
  "key30": "3ETyxVxcVCR9qTsKkZAYPooY1wFVmL77fJLhPYat4iGyqC9bWV7BaVqq4RBbgvXrJSzWY8wKWggikT7dLWpu5jjB",
  "key31": "2Fkq513XftKX8a6jwfTdGdtPR9ybzFGJbzoPFVhu16mnXkbWf6h6dqJ3E483EVFULzRWr6QDSYzmncDJsvcD6xs8",
  "key32": "2hddB9pH7vnqpdmgG57cPuU8M5TDQD5GGDF877668Yf1fbzPK1HHy2inKV4irYYAgeEPosgSqphDVcZ8BZ7LmuHL",
  "key33": "iazLSqfDnbbB4Q4u4ZEfC5qrL3KCa9N2LUMvJzmStMbD8PDiXkTY9XJrjqRCuBqs595zmV6Fen12Pz3WSKjAqw9",
  "key34": "5s9wBAngbjzSP54mZa7whjVM3W1388PMhaA6pn5Aw9tcXXRUCyDNauSf19f8oUWT1AxHRR3soHgroTivD1qFLafM",
  "key35": "44LLY2nrh6YfMu7aKftX5yYXsVsh2wyDF8PJ3sVMVefG1guD432DxQb6tpeBCgZd8SDK6UkPgdaP4hXi6wHvuKxP",
  "key36": "5CuKpwPo7xoE8EJt3hm3FJCHhR64JJCrLZnLPzT5My4ZFscMd2MUK1f8A7E2P4rTS2Db9K8Uj6TjVrfSUzDf8Q4X",
  "key37": "2hb6djaCiYdVjyiuQgngm76e9XwSEuULMyVpm1okbHF7YWqDXDTautNpCZygkqiEnEzfpmfRmNXbT27jJ8RuJ7nU",
  "key38": "4qKxagMfqe4to9dfk9sd8kR2Gs6W7G3FrEz4ppM9KE9F6GtUyqhFXbvTmY2GM5Gp6cEgm2RkASNVEMRKMKFwPWf6",
  "key39": "3UetwXZapatkqnegjgjp9iLN2gza3vNy7N6LiJkiGdbxRY2nF6iU79SJxyCKNCNHcF6ozG7vwtoD8SrorActhMf1",
  "key40": "4eSCP2vEpD9kUcjruQCEMeRR4RysYeKBRUuAJaEb8X3ndqzYPmH1f1Kvi9Bnf4Tmq9tJsdKeXiQXDdherH92ucX4",
  "key41": "4f83uWN4mUygZ72S7p4h44hvnMLtJsunqrETPaV5LYk28hB2fbW3cBgCmz6CWiqxtxs3EqQdBgXcuA8rQsc583Ca",
  "key42": "ZSmBzdHC74kn1dpmxXja5mKBfo7daeKF7CM7YP1tw8ub6o3Ra3EZUQ8MMXvW8t2DdjKN6EueEC2JW69bi7o24iG",
  "key43": "3jYxRhVMLgXYDgKdTLprSkh44ojAtzkKUFFogS9fojwMe6eoyhFp817wYFBCKEZH6zvJATRc6JqkyB9HvorzWAkN",
  "key44": "9NNcNTebBJC8sEcBWxYQpEKB3NWM7T6X7dz5wH8B776RWdjVdqR8TnyskNxMbRqn1Q6KWAtFAhuiyPZQManoCAN",
  "key45": "2rdvndpVE3fLvgggFUHQSiX21RDztncNNvmjKFV6byNvpFr2wTtnaAH9oz6Lm9kZDLsnwbxrp23k7etRd65yFAS",
  "key46": "63c5eHF8GoCPtJDbMctAV65ZQDNPBFPjN6bw6ak3TDpq3BUE9b9NDBonJZiB8u2oucaPhy9bd3EpbYvd1gaAxCUS",
  "key47": "WUouD4X1HG1QB6z9pmociodfbfeWAJrqdLbj6uw1JwcaoJurQELdp3TaG3xxDvvtvzWEYqRzQ4f8EZ1XRvGrgC8",
  "key48": "4sM14uciMNpZB7rTCrqYMBiL6Q9Yt5tkoWxxZzbDkpwQ3aGQCrNmgNXvN4P3xFyck8zjHs1VdRdAwLM5wKecxE79",
  "key49": "N8uRLci8QaCU1LcJ1bE4Tni2GTyc4tAaar5enB2tvAyk9PSX2RNPypFA5SxTFu9L7jZrAbqWPDepe1TFAPfhCo6"
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
