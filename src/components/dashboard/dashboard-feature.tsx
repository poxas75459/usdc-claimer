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
    "2Nu4Cie913PoDddymxEZxTQ3Fb8GkpojKgXu6raesMPn9w9E5T3FyjCpzJrmcsxcwKQ8UG9EcgdFBv1wzNNy8Cy5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Aaagu5iPSBpJRKTQ9rayPU9bVyBZibYaZj9FbMwSdv3bKsNKurimrrs1RmmpJNUyokR6bvA94NZ4XYPhEx3jybw",
  "key1": "nLAucpGDZc12P8awUWjiFjC3oiB353L8DweSRUuVtn1XdGa15SkaAEe1RVEY9Na7uKzTxnYBAtMv6kJLyF8V4sC",
  "key2": "5dHUhGkWb8GtAx24bc6Ug7gZAJ4UUCGAAcU2DRcKGyEpZri1ZQV2bkbSDAKxGSFF31CiCoMbHZEMj7zRxKHbg9yS",
  "key3": "3PWhNyoUSeuDTQ6j9ewGfRrtXX4rbGHzVRVaeKSfQxQtUU3rZTVn5cTo6JW3EJF7gBkfw55szTewiiTX6pmvumhT",
  "key4": "4z8ivzdzJbpLzJ7qpXpEugpQoJfkEWTsw6Wg19V73g2SXJn9Gs9f6rFaGx55XK6ZVQewicmiuMzpopZ79vYcojdR",
  "key5": "76kJKLggPfoLvcjvdxBd2V9y7sV2GCry7dJPjoCrcBGVfuipee577vheo228Y2NLVAvrAXbq88ZLHYHExgFLiJQ",
  "key6": "5W81gGJwMPBUfbjYt7QMpqejFbaGWuRBVQiVBpAp9XqKaUg8cAkwqTHhje2SBd5GyET2txjByy1ho544Wmprh3Rp",
  "key7": "5ALsyX3TdSMXpcSyVwLUGw7rZNG1Z7Zbdm5SuhKiFueZg9FoKnNoWBr8c2fnNtnCPerbmRPe6W5ypGqK3RR7R788",
  "key8": "2aHgs2MwTi346NvnRQbLhmDu22gUsLc2Gd3L35ESSJeNDyVbgtkm3SYYNysDaafAmzqYDyWZnUovtCpZp8dpsaDb",
  "key9": "31bwWEbguFy9fQ17SapAYYN4pSgUcpf68Jh7ps52L5TnH5dDMVS1T9nwka2XyqTLXxhTfkx6Q6iBE9qpQ7pr6rEY",
  "key10": "56JE418eB8KCJGAyVJjXkPG5xYKoGwFiFg6Ry7TnGuvPL8iEu7j3B77859o1AosPbtvniYyMVidpK29LpA8hDmQ",
  "key11": "xdgLpFmLeDdAAWAYu1mv6kLaqbpzrNTnrRXZQejWEViALkRcm2Z8yn3GcjiWnaqjDYdGegiXitivRBmGNrVc5KU",
  "key12": "2kgUkCeEHSr4Cv9LYyhMuxKQfchSPo5dj9k27hME3rpSd85cmfkEQteMJsTqQHJsrSTEf74yFkwKXt7WAkaLzxNg",
  "key13": "3QyztWp8Hnfa6LEAHSqBcAhDXe7gqW62ivaTaUc4o4AeZssXAypa8wuYboP6sehaXVHTMT3172Ka2we8p7tApNkA",
  "key14": "5yj3Z1djWjxkXeSCGqeUJzdKVX2Lo1gX17cEv5LxMxckpkS5VsLjLstAXs5nJLiQGR2jgAbSyERSouVyhvGnRtPf",
  "key15": "3zZFqiTm8y2UXCEcUG8gJBBVgpo2BRh7NBsvTPRmasZEUs4YHAg2gY1L4ngh1VUwXUeZ22wfvX1crgMhMY3cQZNw",
  "key16": "2TNpdHV17tS72fWPSwYcKqKEFdGEsyMHd9aaT4kdw87vr1gwykhShNEA3uUTVGHmVQDFoAZnRJwH7vnUKaLPkN2J",
  "key17": "3UW3V7TZTrorM2DYqqGDy1MqUSs4VJe7hcZVJraHKLKsvXu8cKBpe2uadx2dt6N2YfWV7kp6KMKzzQFt3RrXMGba",
  "key18": "2wqhC6heNro59iNaDHPgQnd92B4khBqvFh8zS4PQUqLk6N2YFpeKWm4y6giQZqkudAgjYmrUdFjakgh85UWFcgyP",
  "key19": "5cVTBWRa5UDuAcyuwbTV61f3HpU3MFJmWhM2y4ACtcJW9aXjeqLXeFLzQvL8Qq1G4LuqHcpykK3GesZ2yNCjK8Bt",
  "key20": "5Qpof8RcstuvwLQeSMcYTNfEMv2AuWhsP91oAxKZXUXihpSb7DGuW3GDSb7J1qc6GRv46kqgGRdfNoNESvGkt5HW",
  "key21": "3n7JdNZjL1hSQGhcZv1FMUNmHyz3EU5qqK92tEWyxutZDdYrdB8n32PPenb7Hy2rMzk6zLB8GQ2gV1sRGGdJkJg4",
  "key22": "eLz6HrNVeAAMhhvw13CWZMdzTRT2weQK5RVZYocZihUtUU7xbBfYqkYy4p7SEJS6i5AqDhKE73MdfRmRxUcuCEi",
  "key23": "4ag2oUJSDo8bfNG8uv75cA6NCGrcmRSMvCTEfm4ZYka9vC3EeNS6xhcHshF3i3nDyjAWv75XBxHZLrQi4z1kBx8K",
  "key24": "1yBnXXvuNLchiSyf1XeP1CAnpWzsCdbencc7mn7HLKuDvLcvYuE5eUbWxdAUAbwUBdEnbqMTEMx1e2YWkd9vcrF",
  "key25": "4Q1JTLYoc4XZMTBtiXyM7CivDDfhbdUavR8efCcJmYAi4KeaE7CE2MFfiYR9EPBRTdibZuB2i5Ho6CEa6sP39QwP",
  "key26": "328TKgENCP7bbLJzdRnThUa7mUn4RzYnkLZNFvsPPxryvN3UAE2ATVdUcfRk5jRiwjtthYoB5S8qhnW65iRMcAZ1",
  "key27": "37hC5JGVFLygvUGQq3jU6fHLWZ4Y96Z5GpEuENa1aG162YcCx9sTuvZQDS25UDBxtNGkE66yVWZYGFkrjqccu4z5",
  "key28": "3xuqaj63k2k28c7dQWUmtKdHhxAKa9R7SkkjS2EEB8dypShnRsJ2261jKXGCV8Nwt5n7Ysp8NStJEUzaYHb4upKb",
  "key29": "4P8PNjQbNkzXTLSdgdpaGHpDhCGJbNnvJowXBFihjsAZcLkpD5JVPhgRPEwH6j4wjfcerye9p1TSfeafNRAta4Jx",
  "key30": "axwyHeVJKaETa18wsaRfLJFm3YE19Uu6na4NVoBULuZRDF3PBVZSfZhQTierUZ64VfjfukcMLJ8ZfowgwDFF3Ev",
  "key31": "2p8YBmGFbz44HHZHA6HxTaxDigMdCRYA4XTSMEpHsutZ3TrqkVXMRBj9hzeQ6L8AubLsai6V5F3a6KFxMAjmnaUj",
  "key32": "2rPgSoN8MvnUv8ctK1q72EPvuV3A2MZyTffxCUpJdNH9jTAzGBue7yNCG3adVLoFPMKvrtot3HFxuc48UpnsN732",
  "key33": "5YGABDADEWHnob1GFuSaQtTnrMqxvC51AcXp65PEeHLisMKeuComTZYQakvsg9x3ZLXHYuJfsNep6CyTULmRBtwv",
  "key34": "2uRBzDtKXe8vu4BXg8Mwwc9baePfzTGqWHbLsjsJ426TqhvKgGkeuQ8V1Ek9n9rGTAXZYeLrPtqvQ65EkeXb4Ad5",
  "key35": "65yMe4krXL1qgkCVBjUwPuVXttaTwamm5KhR1j8jhnJFKXhBfgzG58XqqEPNjR9dh68bRsviP7snj5NJFMVt6LNJ",
  "key36": "ADq2WmSkLXkVigkdV9LmYDpfkL2syVrpfV8Zw23VYfa6eKewidyiziEeEynghVvfhTVK5Z2vnqixDgwxk1N3Mjx",
  "key37": "66FDL7RMa4smzAKMe44aj8QfV41MSBDMgpeC8jAw1Ju1DXpCqJQjL1GWPXFTK8c6SzDKJQVn719B8T9Rwu3REb94",
  "key38": "5uXgQrWEq5xncvEddrgfxvsCmbgNxectaHuHyUethFthBma2g6kqny1bi12o2PifvY1fNYNawDaqALTZRn5bBXKn",
  "key39": "4bPftxYhnE7MLKcSmT4egsMBLuTY5NLBB3w2ZQkLSWSrpmS7ud7C1No55vzqYN7j1tYBgNFj27Bn4ZcT2vgTjy68",
  "key40": "2pntr44kDpwChpFESdfLD6zNiikJG3RBK18UmnuZfdGn1wMcnzd5HtuaYbFa6GWrMux4RBiJDMqHixudheSa43qb",
  "key41": "2zfixYweLzzCT6fG7gBgukMKzB8i3xtk7gsqHz3ukgBEnPafybPPVH6JtMP9bsjwhF79NfH2rU4gmpT4o76xxP4N",
  "key42": "466TPqKQQ957dwDxD4jLSfMUWwMP25vNwTRxKgsKtcL3CZN3VuebBYEcj5korPU1aRwDLBgUZTy45XixsDJ8irMi",
  "key43": "sqVCeHurYgxyQAPnSeU1rZH4Nbp1CS4S2xRug6JYyiGvT5SiyFadSNYVqS5cKkYb2zWPSCKt5LzswEHGjXYXKe8"
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
