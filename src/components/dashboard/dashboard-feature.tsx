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
    "2tGRGff8BDDWaqY7oSEbUHJ6LZEpdQCrX6hEyvKnNBVkPKirZevRt2fa9tTE1EwuNPjNhfUvZ4r9wcrNFcgZ3f3J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e1GMtC1UcY6drEEFXLVcmjVXdbFDWr2euYunEZXN9A32yFVJd5oBL3KYCh6DqVQoFngiuCbWhqNfF2qYvq84NiJ",
  "key1": "ejnzqTo5k8TPZujiPciTNMXqfYd1iGYkRdZkmjqLmbv8Fy579KtwTm5qCrgr6Qxf2X46g3z5nYPr43Ky7Mafa17",
  "key2": "3gRoiF5nYua5TDtDWcQPh3pLgoVw5LAU3iiLYpYkxrUS2vPRwHXiKSkSPwy4a8ptJTtKTeofNUkPhsRnCgyfcRfZ",
  "key3": "3kYkj7nxUf3VX9AG1wMpwRnwisp5Y2pq3jficaPQvDJGvfY4VMKbombGoujy2NmoKjBqBpRg7f4eH8LPVkLeWLma",
  "key4": "3VQowdBNVCkdn9Rwa74a5i9vSaar9VE1D4oR4ybty8H2KvNsTBjSbLw5w1f7UiioZACz9DmFrxHZfD72JcWuf3bX",
  "key5": "5ChipZ8MzNTBo84i3RpfskRdVZdxN8q36jVPJwmBFk3fWuAByPvekLnWNvs6WS9JaXnW6NMwzeKoaFn1oQ2jbq2e",
  "key6": "5XHsrVNsTPaPa5R7wLSdboBDdsmeER1F5p4EHDFYFDUdEfJXkKAtxSQ8s5yz7ybUs5rC8uheJFFEgr3nsN8Ebsn5",
  "key7": "5pLSiE4ugdYvtcY4WaB9jZnf6UoSMs7qo2i9c2vzevJMkGcq8tXsP24Lrjys1c9BiDZzPw5VdEg3EepAypQw1hNQ",
  "key8": "42Vk1ECXCQEPKoALNkFqbPRfaBSk7fM8PoVVpdGuoZAHdwBpwe46HFrxA5UFEN1sx3XC9KssLXyhbHJ7Zv9a6KDS",
  "key9": "2ZJPkVJkgqLocPpqb3iHukefNYn4naNkSnfewbNxmW7XjfdXWgfdvx2NvAnYfVqtdz8X3bMgFfBmK6HPnoRgF9sn",
  "key10": "Xd7bGvMX4JLMF1dM9svfeYZi5aJUSc2cnzmJR21K2nzRe9NdL28Buh8Ni686PQonfcqxahRDbGoeGzLsVjSmjE8",
  "key11": "5YjUU9do6zafJd76JD3yioRYNRVVvhkeYjVMTF9pE84X2dzXPdkxa1AyPCdcGP4ooCApmLxwwE4JQ7AY6jNWTMot",
  "key12": "i6AwtAU5KAEn4BzTNA9GwzEP4p1tZTnc9QSF9iEocvAH6Emdti3zaP8ToT6D1U8HTHjfAEjcwS6F6TxAPrUznPv",
  "key13": "3m2ND9deoSuyDMtRmt7BiJdiMowbUENS2Fct6ibMwe8muKod4teq4Fmtm2yq3h1ZSbmGh5VcL9WzmLytE5zJPP6r",
  "key14": "2rkXtc9dqe1GqChucmkydojtiokqA5HH9zxrGJoWUNu1XDZZVz5v8UPK44BEDkjrUJsikVGpT29GdKASMJaXAYsM",
  "key15": "3MM8hbdE1b4YLV2mZenXyYR984jT69yeTjGGMoCMV2eGqR9QrZHA6sSorRPYvyiTwTAH9M5Payc6sMjUP6BN4a3B",
  "key16": "G3L7Gnoj8HzE3HuDsnPEC5VM6pEH8HM7Z68We6XDHzz79E3m4ENH8bDorfN9hEy6LMMorpatn3y1ZyznyDBTm8x",
  "key17": "4cB1Kk9NJCJopzkcQhXNZwbq4mkDW99sVn7oDTqitvmhAVCCwn5LoqYH6Ve9zr3i3E447XUmrrNrMWMUFjRwiBvt",
  "key18": "3FZfVpoKkc56Ez2FfHPCyTexE2RRzwygFSoHCdZwjd2JHTrXTuQsc9HthzR8rdXtzWi1dG9Kgf6dV8Pkucs3qyo7",
  "key19": "2jnb8dxyqT7D96mTPwKvhvW5JvNKGxbRnSpTFgF3okAWKqP363i6vGQj4pQJhBhKCHYUbSkyXCY1KWrcAgd6N16e",
  "key20": "5kqg248hBMMQEkzpHCNBUhhR9xvnuLrw1r8qwtgiKTDBjKHqoMqrZqR5Jodkd2nNJCXgaF2vRMU6Sk744FUUeLKd",
  "key21": "2hUUmUDDEuUwJqjumvABqfeRR7yobpQcvzvQWvoHKqvptfcyc64kCFcWeGfAn3ByzAGp2PgtcuNDxFHhgCZk1peg",
  "key22": "3ZpPHMtQ7H7aNweRNRvftrQrsvisHsoat52vVowo3Rk1X8gsUXDNWUT2QwXwMAAYe3C7LswhfTWXrm9KE663hn4k",
  "key23": "XZC8P5oM3VPtdyvLRuHbxKzm3FnGYgDFCXVw2ZVgd3CTKxpwwBE9NueNLFnGkYkrCFKzCnHoXb5XvRmTM4ZrjWu",
  "key24": "LXXTzHMh4Gqwj9oH78MJF1Xx9e11pgeCzDiAa4bCfw3fsJXXucUnY5Ku1giwqhHw4QQNXL1Pwv5qMgsfK6xF4sk",
  "key25": "2weG1W96BZh2WRNeBXKBG9qF4348occLY2HTdhKTovKZy9cu5XKbouEhXwJQXWiAfdoDCExCWEoCczvzBnX8XVcr",
  "key26": "39wNANduWCo53uS4oNEgvbrTYqbNki29Sq5A8CqZ5uHFGPY9rydeXPEgNT9k2K3TefiJZLtCFGvVXVdAD3wzMRi",
  "key27": "5KVfCpyMEcjMigbRotUJihAi4snK26xefDdx42VpE1TrQonLayjBRKgMDufAguCifvpqbT1dwGwdDv8XQpGmHoLs",
  "key28": "3zSWrvm1eE7SMCqzkpLhHrEiBKCq8GgTzedP5Leq6jTqiEf9pFThGxVavRP63YmhvbeE6Cd4Fj5UA9MnrWku3GW8",
  "key29": "UX5tEEdud8ad9w6mn3NE97CCqW5L6hgA48tEvxPbFe7DLRcYndTRLSQVy6tjwaEtkVU6nDeWKnuX7NYrnY8TAeu",
  "key30": "Ej9zx15qY655pFau4CuXCYCsnP9i7VjQwgdZ8Gb1vGH1KCrQnfDKZqzeNZo3ucRwF89GX8fZwrGDbowRxb2Vo25",
  "key31": "3VSN22Wpnh3XLy3PLddXTZE5vfrWvMFWYNX3Aqo2AVLKjcTgauQ3EskhxbqLPM62zxujCxuwy7uPXTHVsjLdhtni"
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
