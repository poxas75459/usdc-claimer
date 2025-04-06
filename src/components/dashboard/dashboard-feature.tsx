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
    "5ohjWsCZRfSuunXUoCngNK8YyJ4cRBkhnN4cu5GPf7qu4zghcWsCceypd6ZpqdUehLMJe4PGBemwtb99TWXpe2vA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tr9cHU5zwtncLrzTQbHnLHCj6UPcmnFktcATrVCN5kX215E4FFXpEoQsWGzAM6MuE7t1QFktvaLo8AHqPbMTqkv",
  "key1": "1243gx3DEL2D5RC4Rqww6z1LjnCwuDLQP7LMfcPxmorWpckXoR3Au8GuMHZejsQF5Z8RJrjLcsksHYRWgKpgbTj7",
  "key2": "328UREiL478ndF3L4jPjyBiVPHC4nnkzWw3pS6SkgJEB6oo1FgqcqVaSjRB7pVS3ZDat8fPkmnxjT1xPdsLHcGkt",
  "key3": "DeajWaoSMf9ijoz9ubup9nYAKD7HvAw2D7D69cpRFQPefMoT1GtcAzBrccGiRas4UqFgNTd86RYcbdVRPG32W3k",
  "key4": "2swZN9jju7nwb1zPpo1V37ZAJzZft3nFCoycL7qyPM6DFtBXq6Rx72fRtmGSZM9MtmxddY9vVjLH8y7mRPPUzrNE",
  "key5": "4xvGwEtbCQGjyboZ8QAE2jNFDGBtQarwv7H846WxBYrDp2bXPZtAw2U1YZBwewNxPXQPevmkUATpiEdKSuHzYvYG",
  "key6": "2Ye5aQHEePCe4KWxoz4ZboPysdBbSRupPmaxG42vtBZELjvuWFGKfJRatdK7ARBdb5C78SKavjkhGeBnoumWX8sL",
  "key7": "2XAtcBWsLY36tqjqYsfZu6MYrLDyrgprXUcUZJTRkmfrUBf31nBKHrjV5VG9YzQUbGgHokz9khAs8czM2ZS4Bncd",
  "key8": "2qmDfhwSwPSRYLyVxwconsTMYe6WQy4GoTSkSXhfH7EkGfT4YEPwH42uWBbLC7F25SyKbnQc64gaJXA4Tvm54ho2",
  "key9": "3QULJGu8nqPRjfKQ8Qz6v5KyBUsskUQ192JmGf7XGuXio29fgEiSfYNMchu3XuhmHYGJAYtffUub4RWqc8ag7erW",
  "key10": "5PgaK8wQjhtC1WSsTjjAikP5KL5jfF47KZKgXBKHZkdSWthaCoofmkybA9JxYmGsKJDpsuszSAwcXoNqRKezuw13",
  "key11": "4HGyhbaZmhqvwBstiEAb7u52J4aFTst2nqf6Fo8NTbNaazo47AewmwwRzAZtvC4tMycTjy9o1p1bZBFunFN7yrdd",
  "key12": "3aT87YjTE5r57HKHmX5T1fsWCbxRGhkRAGjAgD1cDp9rT5tyA8feqDffec39jPzw1vJYnx3VQUf72VmXVj3DSGwd",
  "key13": "3mpMvBsF7o1DzzzFTgUZhG6RFYWuN5winxHXuMtkjy3eUZ1d48SD3dzQxjNJqA6ApNfCbMGUBJZfnxQ52zGwY726",
  "key14": "4VFAsdqPPrPECJvw9y7a3iNFFVMZYGFPLehQZGRpGjrCJpuFwHrnUviDvm8oBefG493VWCQSS9bhVPtkGocmrsVY",
  "key15": "34LBXBdzq2xuRZXAQmenX8GmEUBF3WKiYbxqnZ262gzHh49dRXHU5V7GxqrLg59FEMUg2HkPymMwb77UzEdduAJA",
  "key16": "3XU2CQPa8PWKh7U4Hy1Q72k91yCVny9rfdqYENCmjn8dusvcGodxGb3grA31hdS44bXzeBF6HwceyUb4FUyp34v9",
  "key17": "5dhfpVFzaz4HHfwpGdjnqKdKKDDxbUKq7o8ALSqwneJVQE8RAb2sC5e7LbZKWJ2BCyVtWHnh5T2T5ukP5XgQopqU",
  "key18": "3Gvr9FntaGuf4HqzrtyUPUAM1rzmHJchbcrzc1gS6gy3sGWxgjmDJnoQ4tnZk1cbfHu3LTs986LprhkeqKTQezPP",
  "key19": "2X5VNtsvUwRonvCdw2uobBWp4qLWxuUGwSgaU96V21mRvE4VAvb9ZBEtaa6NdGvQjttd9puwvrSj4StE8UFP13dv",
  "key20": "3LNaYumMwiybeEHZMBFfdaeSkEfmcr6YMPvSzgevTqJmhV4UEpKUBvvf1DmSfDomPmU2osfUKpYSYTFq4aY6YHuX",
  "key21": "4tGGU1n3G6hMeZD2Ukm5FHADmC72ynwn4RkEHpaGPARWNxHrDTYnL333za7LuuTFZzUtAJf6Fd7dHERqBrzQ4Me4",
  "key22": "2ExZgw9Dm2J97SpL3NwXTLMNmuFesutiduea8mjdWM1ce58i8Pde3FmwWC4AJZThi5VUbdxqqJZBDUgcciJFWzL3",
  "key23": "5bJVUmPYEtwcd6UcZgpb9w3HVVwBcEuqx9mtXShu91Hzovtur4giF4H7S2Q7iQYDhFXyHfBupt18Fv9waUKcjNw4",
  "key24": "4ZYTTdVqJQXUGrgRavAuEoUDdeQdzKo2kX8weDj9V1P2dVWa5tdSWGRJdsrPcKYCejHA4oRfyvmdUfxJYHfzsvBe",
  "key25": "2TNUgySHsorAca8ePAGHXo6sQyXiWr9QL14HZhLKSHa1nL2LaK1kNNK817b7FXax7BDpDpimZmYby3j6kEJHuVvf",
  "key26": "QhKkXPbAKpJKNJ8BPrEL6ZnzZ9wXx7To7T4DtnMFrsPhDrk55m7BZTNsePEiL64EdCJ1onrxSQ5X1x1iAKSrgBF",
  "key27": "gs6DKoJE5mg2sofyX2P3ZjqqtrnN4aDA5J8jESn815csyEZgK7yPpcpgJhKDWrdKfj5y2tcuYdGEuaRJdrXkccD",
  "key28": "5u32pahogComr6kaDMjhhtsemnn1f4Bq43iGSbdP1rZo1x5GMfTrDCxanmWrSNnVGcFGgvuwYyRfMVQMSLvyhDkh",
  "key29": "58Hh6PFhtDy1nNVPfuVHh4kNfmDqGVJdpdF5CVk3HG1JZzgtZPRDLkbsTvPqyt4NKEWXQVNPTFZ7dZXndhUnPSdi",
  "key30": "3JsKhURMYDeaUDaFA4EcLXLDz4nqMiNt9bbQzhCzRRoquHWr4kKt27YiAX6DjZU7VtDbr5zkKkZnmosj4Z1u8W1g",
  "key31": "5M2KB8kzrNmsLQBhYab53z135xA4bjTPMnCwLZdcY82YffxmMNajHH1ynLvWnjsUTF4TWFM4GG1ht87HEY4xHkKK",
  "key32": "2ph7DM5deXyT6WpnGCVLM3mQhQq8sGhVoQEuuCFyrX2CwSELFFdzRmowrV1E5K69SbjR8gMrRnfShySK4UhUhA4f",
  "key33": "4UNsbAj6icUKhZMdy29Y55SeVXLxHwWwGszUJqvRdAUUgySGgx5njB788sjmhFeb3ueWvFQ1FQaANgzAcduQ2h7F",
  "key34": "4SpHsVgJyHJ7SVfTGHoKHth84vbCTbQZKjpYNuXCAppgbAWCJY82CM2BKM7U1j63ZrTqxA3YbQWfDbAmpRGWVNsu",
  "key35": "gw7pDJWS8srbi7bkNoaL6CkkbkpxV4xPzYosYjMVyDeTXomyNxVazD5Rm1PcoUWHgqvGfqLefZxULqR6FS6SRCW",
  "key36": "1GwxDji7qrs9s5XyWEPemc1m8vQaZWUQv5mPSpYzB3yTtkGrk1DMugKnCwJoeNwzGMSBfK4tpYUyhWZ9YPz5xDy",
  "key37": "3Je98FDNS7iGZiACQmAtcJyEACBwrs3stdzsH5Tkw32NZDvusuaP6sfw7J4rYdrDAk4q5fEu1kp9V4LYnWX9rRCV",
  "key38": "47vtdcFq56R66oHntcv31Gsq5h8E28m4vyqYf8XP2FxQedy5f9NrpiYBwbEWfPC8yEUSzEuJGB7sdXwZd6MiundK",
  "key39": "4zrx9R7QPkjaxyQvqBdigPhfFoXng4zFuA5rPG4w8Jjr1nVUzcSD817qXFR9JJLCVrvJx6rfm5KVzhbMe2fyLcAL",
  "key40": "5bW4nbDjfNKpzyEkxjMc7J9YXfov6m8woQmHNjCAwrNsVNo5mSRbQrxrZtjqkddEgG2nD6HhAhiLt9vpzZeiPGFf",
  "key41": "4dG3huQM3MKgtiggR6TXowS3KJZL5qjkU9fzQRCzmeyt4y7mbU1bsZYnQ6FGRt29MLg1sN7GpuPzT5yrgvymgYEi",
  "key42": "2hSq6iVWui679VyCqJSmE2tKk6Ye7acXbgfZHZqSXaU3C2qnBgfn2ArV9arocKsNd3gqetXosfzGRUBNNK9evqww",
  "key43": "2hjq7TWfkRMrukNkB2aryiqsrNwgE4fTkUbXpqSAp9bJpmtNoT3yT7d5DgYthKCyhcV3r6StjXLsEQd7oYFfWvxi",
  "key44": "3mpz1ubFC71zPxPdmANHPubGjk3Uhgp2oTHMfVBpHLkc37cUsUr9e8mVL9qn8nVNEorkaZ21caYfjxpUBeGgSfLb",
  "key45": "4ssvgtuhPhEtkLaG5PLXKfX43byPNvifaC958Ge1Y8juZnDbQzfBUUARrGpF9PN2CbW3shToFN1bmUsXtyjpB8fz",
  "key46": "3rMpEsLtr7q2rhZ1N5ekEV1GHp5yaDnYpwTyv6Y1gQU5zfFh4gUDhF1MFKvz41u8JkUmvzSncy83aoSL5ea2fTmh",
  "key47": "5kQUCamMXDyqTBXuLSP5YEV67bYv7MjWWJMa7kRX9cSx4TTtVXaDkoocr7xm9tpgS8AujxeskfZ7aFpni24LdUoJ",
  "key48": "2MV82tRH4hnNrKKayhSw9oNbohBPUwk6nrJ9fF6fwdwEK6nkg3vSgYcAXpviXACY25HmqQcamnA3nxhhkBmgDJXi"
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
