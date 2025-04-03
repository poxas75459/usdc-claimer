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
    "BQZPTynqn4iNnzAPYL9hQG83Tu2AUcaw81rwzMCzLQx3xMLMvk4WXNQcqtqQcgA6vHRYVhZ3zN1BSqYrjqgdiD5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24fGPMtzWvReTj3wuBnromMNEwJnb8VvosoZkAZ7ANhfhAKomTizqed1JP9QfVd7wQXvoD9ktU5tMxtf4vpQFWRF",
  "key1": "5MPz22Ht1TTa6DhzVCJaVJHqF7VYMKz1259TPsHUy3sNZLgnHuJjjaGy1bdVbycy2htv15BfpGM21VKzY2iwzBbw",
  "key2": "29Kesubq6NTrEpzPk8KVfdUf1AJL2ZU4AZUHZzoUACVbBSW7CXDNL3rozJTW6XEE27w8Lp6ZR89Ptygu1B9hSPuH",
  "key3": "2GTnphtpDJLo2nSY3qUvsiwaj8vNqYMYirUsmoQpWmjx7kJnfgEjiSvSMprUTJKFCLfqvvZqk6hLdchepKiRGEjG",
  "key4": "5PM1TRTJzEQNv6Y91vNoL3PJ82eKCLz5UNn5bKygDAM2jWQLBmBndMv8CrbFfvmeNeyNzn9ZCyn27w6AyW1mZxk9",
  "key5": "5JZRVPT4Qd8d4dDgVGKP544AvW3uaz8oqnwJVY7h5st5LRQdfFpwxPHJhAtjtSGG9vNPUaHYJKhTJBYoPdU64ZLX",
  "key6": "4Ye9DfUPFioAAngfDmi3NDoB4MRTXBmx7mBCeFfrEMJtxQnk2ixAadFXuUap97LTQi1VqAQ6BZHmnYFGJN5mTtfT",
  "key7": "5AcWh5WPuHUF63ZMFg3mC38LgqgV32UCJcrgUkASMst4eLddkHVqFqKayLzWRickosTgGa6z3kadstuKoxJWSoQ6",
  "key8": "2bG8QUBTZ93yF9eLYxLwUxQbXy2nQSATNfFH7TCd7NmGioea2JgMcB2ZReiqYDSMZYBaiweTTQXfAESAt6rFbEgF",
  "key9": "4Q3kBe5efJJjKbGqF6ow6EYhdhdCUu9tN646LpdeGN6mtYkhoxmnyZxYhJq6GuLKMCvCsFKcuzsr6rNjRUHbNM5L",
  "key10": "WHdBRu1cKNeCUfKUWPRZp3Vts8aYQfgHorxKWu6syP3SmU82mCc1W3ckbjifpd31eygk1Vu6pb5eF2yvBHbZGgP",
  "key11": "39FqVvMJCjwsFmRzuvC1ZLWmRFUNmCdS4MWKFcaT6eNKAJrzzatibGA6eRcfNyytgCxLVVLvnsi1Bp3YzJa5j3yE",
  "key12": "43mwGcpgS6kuSFL33H3FybEcASNhUsaGpWRDQp6qjPwUCnPRGcDVx3wDi5P8ooqSF9DLmQYy7gTXZD9CdQa8y6X6",
  "key13": "2kc1JaQzTE3Qnby8Tmob5LXZ3izfhq5HxJfBocLa3hLJXXihf8XWkYGJ1baPBdfDmH11MPWnqq1QzjjEbAUYd9Xo",
  "key14": "gJAkWf2cBqN5NAnerNMnrVpwFJpnCw7R8a6b3zsqcGriSb5E9r7cV5SJ7Mz7JtYcTXSSF8KBW5bQNpnvXfv3PvZ",
  "key15": "4Fgq4NZFfhguiSysoTgekRZwT4oGspfZ8EEFCCM2JC5CdrxAbVsiaNKfZNNhrtSRU4knuGjpzLPZy2wYMNDDY3aG",
  "key16": "4DR5ctKWzVcaMDwqF7fWA1ytw6fwfAwjhZrKKijx2tdX8rqEydypdjD3pZsBovWGHqU4vC7FnYdwrjMYD3jfR37S",
  "key17": "BF4DSQPLr9ube8ucuu3a9M97Q8m3wk1XN8gMuHk9DqREk7zvf8UbuLvnkmFxdU3kTjzJduSqnepj6FUELzPeX9y",
  "key18": "5buYb6zGW33F86DTsrWXY5PjFe5kRWDnAtirBnuszVphndNUJF42jsCHSGm65qZW7kWg48X7c89F3DtxPkvvGJyC",
  "key19": "5KacmM3ivCi8WMsV3Hcsgtt9okJargY2CqYnn2tfAUvB1iKSqgW6EAZWs5sZtikQH4tXdVmMJdkVB9f8hxsSyiLk",
  "key20": "2xyHGLWpvVMp4tvDpWWGV1ycBJk5aEurfQjUsmQ2Yx2Q5xx9tfTK7RShCtrwnXmpb3mhLN5gMhKaFhfJk4qMb2AK",
  "key21": "V2PTBrK2X5pBG5bqNVegEQNgSik27Qv7xpnCivELWkMrSo5jk99DosJY3Z8gG8C1hoP1P1CDE3PstviKnPDBNgG",
  "key22": "4DRvYFnupPcqreqsjhqPqSvEKLvWJB1uqjA3Wa8kanATcgSadmbdqXCPCFoMy16LPSReinLd88Ln8iWVis4qBMYw",
  "key23": "33J2L6GdEQLUHu89Ta6hMTg1ud7idEBN2Uf6HxLujdbq4DNthrnUJeSbxPt6DtgpBKwB6YAHt1ZD1MbHB42onnrH",
  "key24": "2mJeuFbxDAkujbSeV1NkHNBhFQCiPsUT2gQB8YaKwxfp9Xp2cY88bwg8Qd4ju2AMm1xebL9ma6i1jXUWinnGcBtY",
  "key25": "2N4UzwCKK72npgG1CrGH5ySHQNu2ZKKJXYbmRjVeMECnbrpxNfuoBbgRrpKAA5CMoz7FYorPk4Tq3iX1Bmb7f63D",
  "key26": "38xmu5tWD3tvtyViK1LCzyp9iARMsNcJYfMdia2scd3EU4TziSussPRysJrerShdGFpekmxB5Zo4miGxJ4SK6h98",
  "key27": "sUGUVefnCCd6zBfkHWks6zv28YmWVWRLsDenPLC5fuGfvuMZugEm9FQJW1wJpbtTNVSmcZMa7pbe9x8MBLeTi5P",
  "key28": "4L8BZyymiNrqJXwf6srW5ZaaQWzxEbE2FysCcHZNLRNxdY3gQ12sCA6xLKaNPYvE1e3iGHyuBN4zm7ufMTHryVh3",
  "key29": "3GVS7RBdSogX1D4f2V8Mc1J4LmpWNk7EbeBH5cp63LnysjPBj1STiuCciqLWkcUpyR5LEy2pyhG2D8cqw8p1LW7y",
  "key30": "5nibYTCmhzyzb9Gtnx9YW8saNsd22N2zXzoz9Ty5vognsjH5j8YtEA9ZTJurF3kHuszjPmFfG4LiLicf1gk1pDVN",
  "key31": "2Yere5kKALY8dMpNg5VkZc5rc4XqGqHTzUjmHYsAopvwian4hvH67qqLBSLPTjHoQfSXdRrvyk1Kgs8v55yywXpv",
  "key32": "4ETRuxuZXegEtrXLskLnPLx93XMzQShXcmrr7ksbhcGbAhVRmJ1QbeB9w1jwddZ4iKXbyahgYQqBE5vfsEpUGp3w",
  "key33": "5R2sJm5HT661G1QrCwFTjq49jon7d8TY92YFXGHjL5mcEZEp5eNbA6hkvubYdaQmqF9VNoUYc6knR9X2M7iKUkVk",
  "key34": "3JzJE3UVZYmnkxBgXzjUokF8VcLf8JyTJQsmR7zcRDAhZS5SPVWb3v1tNzcXv3ib786zRp5RkefPRTaLa5eVz3rh",
  "key35": "3yAme1anj29jHWezF1YWqUkv5jBdUiyCD8QgiZz7oCQHBXVQTuNPa2eyazzWksNuFzrUcRvx7fFnk7yH2EyE9vB5",
  "key36": "3AtCLSSNVH5Yov7C7LzMQfUYrwcrL4EbG1rjDRVKv15zRc5h8TkqefYrMC41WoKm3iJMcMqf2RC7L9A8pa5GfWeZ",
  "key37": "2Ec6d5KwVfuaTEMbQPUS6vmUYgrUSbfVoPeGBpyyVUYCMTwK7p76kVFwkjb67jo3aPuPF6KAVXczfW2j9nuNGpo8",
  "key38": "47iVZgCZfJfNGqpuLFCrvkgZNEQ6pw27vqAkzX357cZY6mquJJuyTuoSbu3p9aiZoS1TCtH2Zp9yooF7KmDVZzfA",
  "key39": "2Ap2NWDiJZDPDpYQWmvtcFf46qnpkR94VMjQRwinihfVa15SMWvqGSTWFTtTDA8Cs4eopCL6PRfCjG9U3XnEYr7F",
  "key40": "3EcrS2uKfzLobdd1ua3Tn6HbxNBmc2knaV2nupnfXN4ufcHWfPztwGWBfiKaAouymnNvec3Le4m7ZZV8kiayaEyn",
  "key41": "EsHY8HpTpNPraDt6F8nGXKVBacWTUHCeJ7BufHxQNUJfY4nYqmV2BbMsAC4p895u4S9cjFUpqi9TcZDeSsKn7Qz",
  "key42": "5kF9CZgYxhmpScyai1L2kGJFey2mf8RqaSAfmevgZ7pNFUqnNGCeHRMiecFYdHVfmQZFKYhTgcdcVjhhaMVRhjZ1",
  "key43": "4gDGTcKCC2i4WLtVBFPRDmeHyCaCUizTXBkBNqBa6aUprHgoPgG7QWq8p9v9Xhww6sE8dgLwxdhx7HqjAMVFkvLq",
  "key44": "34wbS9ZrXR5zHyL7YuGbd9jcG19c1P7MUS7cqvevuLmEWarbTb39eCdsbc9xppMxu4gz4fW9eQ2s5CCi7kZfyeCd"
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
