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
    "4KmoMxadoZjm2d244xkYeUzSToMnqqdR4h74QuMXe16a5dJpoiRQv1A9DWNftzSx1nPmBmp3dJM4iVrbyQ6RwZDK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RanqGa5iABKdJhHq2b3B8DKrbeTzAfsPPFAHqoafrUPX68y52HwmNJLhM7NFNcj3yhEnvtyNNVpysaYucEdgmJo",
  "key1": "2cZqfZhVGtktCc2SABLgvqpu8fyFVNLHqS9tXsNqsCtZjVV5obDgdVYDqjsbv9wwbCSh9VQAs8U5XMun7T6VqA5Y",
  "key2": "ixLWT1LrZYh3TQ7DATyhE3zgqdvjxwLyqbsHZbjtgnnUfmvw6VsNzdtW9N4thQcbWhNQzFmXj3ogLd8Ze2hAC7J",
  "key3": "2VmXbSZCELmXAuRUKJiv6eVCiz84GndZs7Vjc2iNgowrcE4RC7C2SCzSy316EFNrmCPZrYGGG5dUSKuUAuaRmqqG",
  "key4": "4mkR9VP15uGF3tyZY3bTbKPvJdmY8ePRf8hDBCGdp7V1JNUMaoq5ovnu416NMTF8o8ckX1biHuQhRpXFKP36ez2F",
  "key5": "3UgkpBxewdHgJtqZMvben4k1CmxyaETD5vxrh9LKJHbiM7Wqejfuo9ZYNmBrBMXCm7hG63T85WwoGdBprcwNURY2",
  "key6": "32iNxaZK7anbQcMddybLNmNMCEvaPaH4Qv2E2sVPgHkmHT1vp3kfxukicQt4446XwDuEXfM3PscxmP6EG8LHusY1",
  "key7": "5khYg9uWUoHEFBipAoxAyz2GNxGAdfxzhSxLdJnd3kvu6sugkHz179WFUK6oYFjdWSbjepLmq5cYxeGsdoJg1HAn",
  "key8": "5XSuEKs6Du87Us56QS2VnUroqYFWnh9kodCmNV4CpkSkAcXi5geDonAMVVyTQHoQiACCNEjpzVDDLYphm8Vq7KGg",
  "key9": "511L7tpzoHsWKPkCWEpQ7W8zxEd58giTqFc8mGu2Vth8njWmEsfFhADv5XxtmhSeNQwt6sNayxwW2SpTDCtsYNwN",
  "key10": "3Vv2fQquu2euftDEhde7xBFNKBBjgKB2grkDovkHxF2jgSXHF6iyApVhZ99Vxa4CWcYV1zHFmzmrQd7bzw6kkPiP",
  "key11": "2Ep2khbFUBnEFwyXVidf1NdrAX3SPr6nwLCYkEe2cDvjGm4BwrGzZ51qZGRYtZAkz66Pg8CqPAdUETBref2573y9",
  "key12": "rUSdJ6Lz9FpKe4UKdwFvg8eMd3ZVrqXZArWhAcCjU7zEH5bDpJ6gSNo3HNjRHArTurpymxLw2Hx1jTm9FJTH4XW",
  "key13": "2UpEeBg8dUePzoG8MLChgmfEnLFsWnxHZBEMxkscu6mxLum4ATnVrLY63VzYh82JxJNv6TsKr4qcyLox9iquVfpK",
  "key14": "Be5F1hn2hGZVeUcaEzsqHvh8pHwKKJ7VXM1bENhCKhjjgNKgfBnKkiYhcaFuX9zvAioiGTNE6rMaZzfs3Djhw6F",
  "key15": "2D7vdE59rB6rRjUVWWJMjqar1oLiQ6Cm7QTNKTXj4o9rPCyv71d7qpUcPzBr1aU2iB81nRtRCxcRvkPbE1W6Ndes",
  "key16": "5bMuz79Gen81pcCiEK3xhM3PbTNHJtFjFALuuXeBSH48dn4dFb2wh4Cbkbm1m9tAoExUTLDdR967vXxD7DNs5cUe",
  "key17": "5ECXN5Q1vHu4PqsHjyDfPMTmtjZQeisxBBqJGAnaCGutT7n6Z7exdpiMKSz6QedUyqFz3oGt8Sx8Wo9UqFqtfsch",
  "key18": "5PREaZyd7jGBEYajEB5oFNYgxFZHUi4cVSJT9U5gFid95cWpHi58R8NHx4utLtYGYu9eTtvYxQ9sJALDczhd3oWH",
  "key19": "CZndczGyV3y6ferPc83Wqzfw6G8cot7HpS129Eip3H1iXvNS6GYKMiEuF3rw8PwEbZ4MT2duyCMLYddtS8BPnFr",
  "key20": "4kNzot19qrqQvhcuuFNhQRqaGPoZre91d6yosAWwGn4GybbpQD9ZuoEPK5yJBzMGVMfa2nQnKk1DLtyfP2vzVCBL",
  "key21": "34PzdzpnjLxWuVPQWNLE1MDkU3hU5cqhhXuM8iMqvYNWuf8DnUgkyLcTxRCLX32onBRvGFgdThqWRp8L9WCbTVBR",
  "key22": "XugdmRdRDRZskGQV4KLG1uz6E4S8y7Cpyi9CrUGmDCEFrV2Vi7gWbrrX3DUU8jzMNzNNBnnAnoTfeoUtA8fXgRh",
  "key23": "JZBapeK4ohWB6Wb7XPKgbdw3ZNGc9DuTN8sEhLDBqAUVNPPvdmCDRsj5PjX61Kzxcg1jQcBZjGyCfUm19jgikM3",
  "key24": "2Ne81X2ycbffgEankySrdhqLa5UMTS18cEKEhZEALQoYPUp9jEdNt4fYs3sgq7N91xCBztBRnhbwEaf5LLoAYuqU",
  "key25": "5VL6XNdMzwZi8FqCAWFiW4SqqvhfDgasNU7gJEyqcUSeVYNHcnFW31thr7WDJioBfbETq1hP6J3HjiKeLfNWrRfd",
  "key26": "3zz6dtKRK7kFnGYwC7hiTg48KyZuSMUADuKFeRCeumk2VRrJVHeZzA7JLGEqhmkrkbgLw89zjzJbAxHtSREFwSKt",
  "key27": "5HPPPVpqyUEYCh6eBEcH8Vp9w1HLWBR5X4A5H565j5oTWRfteSBsh7okXviJwTi3msazLtvWbzAevPa4LxtQZNWf",
  "key28": "3endFvrChx773q8PHxnvW2EqTopqJnp4XEmXNPaNj2HbSyxkjJj68eW7GNhbomAiJFF7tfBs6WQ9rVUctkzgCCr8",
  "key29": "28AQPEbf6zyvTMabAeoBAz72h6P3QYLtQJoWCqJu5xE8aLeqPsGceR3xTUiohz7N4bwxHhBQuyYQTxvyp7GFxiZs",
  "key30": "U2sUtvWytym1q93WxK3Gb17Gt9BYv8gGuuJmnWmb8C9u6w3ygLYzpQu5YhRWGFUPDKaMuzyMbtUEgPcHV6bz5Ko",
  "key31": "33LJPcLcETtW4SMwyBz5nGpJc2anKazFXbomQCpMXzxmQeVEKst3k3isBeiqPGKPPE1oeozHaYbiNc1ngqdCpBZA",
  "key32": "5NPXknrtnbfRnTTFKFgVvfwiwGuDqTVZoiubMYbikrwATtSAuJJeUeBSUFijcNG7LbjgVMAVZm1DLMSDxnUjDZnb",
  "key33": "54BHUqU2ouvgAYqwbC93ajE1E3rvuubkiNyWPrMxsdfrhzYTHCUo91QsehTixSiTVrZZjta8tmWQGyk69Mowe6aR",
  "key34": "GNNVQCXepTi6FYitfbcFdnrTNmqBsP2TgK8u7ki5Q2f8XZySC39CfsS8KVWq9Cq4QToUzuQDDjS42sK2QWADWmd",
  "key35": "5oSMehUgvmntPyyp3Lh6QpQvU5KXyKecTZ9e3vhGoh7jMQNYxtZw4Feo5LXbqVZc17bC1kK7gMdKwo4TL5pFZMu7",
  "key36": "4zHTVWbkevJ7NUBVa81w3irBhAK4PsRJhuYL1f4cfYV4vVXdC2aTZ3bTYkbvZQ71wog3KZ4gZUCt1CjHBnm7eu1L",
  "key37": "64h2jr2VVZGxKGpQmNqw4s9X7ggGDGpjymP5M5po59ku2NcUuDSnWYbzw3rwv9iBN9qaco839aHs3UNPZBd7epXo",
  "key38": "5ZM7r88RQGi57ovyo3td47MBPuLybTW5ckR8L6ncgxeiTPKuBsbBWECwcmszjtXRdhQ8NVtWasRbYYLWoviDrDfy",
  "key39": "5iKbGoV6qsqfivxWfU8TgshRcyrqcpYXPxCCF2HaxGiPFdA2uQ4NAu7Gqw3SvH9ku8rSAznj6WJCViPorWvLQQJo",
  "key40": "ess85mYp1MUntJAkdwYeNLbE5xc1JYK7es11tMNNa6c6aWuXx3RWyA8PAPJ9zv4ypFuSa32f7MPiPRoN4ehSKvy",
  "key41": "2s5i7MdvFRLbSekGPq7t6cFur7q6gotPTMzUhPhk43L1asiawiZoFaXEvojokkDiWFdSMBLHUrUirtEUdFnKCd2k",
  "key42": "2KKVdGzjECFpNCPF9kmwwEjyHD8ChgVNZD76cZY47SxM2K45quVEPf23fKTj3yjN12njgYVqcPGpkm17ubU935Kf",
  "key43": "3UAJRLMGJdMjQV72oEwhTPfSv28F4pYKUtbtUwV1WiHqAtfXXbwEi12G7sQMkUSu98a9dfyTPjNKBbX4s7HDxWxQ",
  "key44": "N5D1hVAe9nfgJPWgxX5S4GTjo5cLEHTiR6KixPurNjzetSYFaCtkZd7M9RrRTATwo58tFMtKGkrxrvsJ5sw92p2",
  "key45": "48QrxApW2MLhgnbL7zH8yAb7KFm4iBD86UMo6aeya9Gn1SL3eFbbbJJrqLkb3MY3CAKmM63DvsQrtLtd35P5sNRU"
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
