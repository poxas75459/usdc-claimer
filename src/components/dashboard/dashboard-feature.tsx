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
    "2J7V7ACy9VjAPgkSAxxGH6ucjYKmRmVJXMvrN2D4GUfzYGwbgyPhthbxKL4UJSzSPNgeDtLkrQGKntcuQmYW5oJm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44e5XuvPpoCGXM2ECp51a4UC5voBacV6TDWFeDRzSx6awbpcFi4EUquBtx2H9DbLPLZQ8esHwtMKbRHgCHR54nut",
  "key1": "2XSPH2Kdur7v8PsK6WuBgkD2WKRNzGSPwkh5wERDZY3F1nKMTTbvHVMSTQBNqC6tAcxfHBpWSPUzPjX6jsjcUPrr",
  "key2": "312AJeqf4arLGCs6PTjEzpdRXStwPy3Cg4ychB3xqoawgV5V6rCZidhSinBGTHvPFFFs1FFPYRsnDL6nW7vjr3go",
  "key3": "5jSCd8cQp95mANtjuZsrGb6VdXXxD37UnaPBDd4QReomX5MatYdTnTyaHDju8qdYX5fvjRTY4rkT6CMUky2xPR8o",
  "key4": "2P4TB5uDPLuDeZ9HD1MNNFiSKrCfmFkktmJ8fvV53o3k3w6oJQ8RFTyYY9w3Vv4Zq8hw5ubdGr6HFbUW1qyrdh3c",
  "key5": "a89LwJF4gdKZqE2nLtPzL1q2ZcXhiZQdnawjRiM3BCqY63pCLJxmutzK3CpFfDKCFAQVoBJi4uACBNnSYsQWumA",
  "key6": "EVGeysoGFcHzdSc16QLG5MfFBNBiLELpyEMHZRZtnuD8DLFSVfC7zZauqVdXFUL75ZHKBWCdbLKia82ST4crr2b",
  "key7": "3LoXhHDthfqQVigqKFXo6tuvozBwiCFjjjhTPquGUxdg2DtwhQb3zGowiEUhqukUi7eB1uUjChxamc4yMfKQTznm",
  "key8": "3qgqY2Vop3PnuTg5QzwQGh1MxMFeWC474qHHhHCYb1TtHuX1ka3TzzWA7wLg2ruHgeM66W7jZhfTYKFidy3gExrS",
  "key9": "4Ev27aWCTCFjJ1AbKRDsXTwvtPgmPo695j6VKKr9pcp1Bdtage45qDD6juYeBXTHSkAExddjcTc9NzuFoKQBBPAS",
  "key10": "8vaHCYyn5WmY2oE3z5hqqFSxwfhnmvuFrCNy9widBJZZguMr69r9on2Tv3ssejNjGNhUD62Sm4nk689qPX5S3EX",
  "key11": "32Wk46gLYpcgqRoJYkkkk3rWLfYraAbEMu6fG9EADpLY1LjtrSceXoUX7TLd8uVHNBGi5kkctkvf1gy6TSUJqCkZ",
  "key12": "2bUTkJ8PKD9xERHvJjXtEzNzCi8FxLgQnexckaSBpGqwyUPwkEjx8zymQjbwKwt9x26oWvsQQwBNeqwpxfhhAoZt",
  "key13": "3yhibtgwasZ73XTbw3rJVRi5WBrsKvwomq9Fr8qSczwPLMjCcVsVP1wLdq2uEet3Gu2ee7DGXRFaX6JZHSGRCXhX",
  "key14": "3adCtC2SnLEbABSu39T89WqX6DJ1ZQG6bJhjpVSbMDcLXRgUQ61eMauSUCc3x6eHQs18t2kVTR8rATuZxPVAEyJa",
  "key15": "4BLma9YMP8GEuUXoSD73uCkRaN1kJA6dco3ewSFSk5fTLvs7XMGsFbJdZC6iRuuVUrJhyaCkfBUe3uQ9WCwC5yrj",
  "key16": "3JXWfEypSAcEa72tyK2UQpwwshNXF5coH9kyTpje9HaAWRuMKtaFN8Ja9hdVLvH3sLmuuz1bCRTQAqWdwS6T93Vz",
  "key17": "4trXiXoSP2gfT6c3KSDrbuzKjDMPvnjBYPS8PmXYR1SBG6Hif9XrMewx8tore4ig8k2CrCvNFahMJTxwKi74WPA6",
  "key18": "34uRSjPP7khFkQKG7zdaJk7E4ytJEko4zPSKPxXku6JFchTiafPfj58TNWSw1yvNzqR2gFAf1gqgeohrhYztdeLt",
  "key19": "4RLkCkM4Ntrgx5SeWH92cdsU6yH5To4NDDhTBVSGMqBoYruHr1FbMmpX8ZjBDw8Wq1tqUR46hwqiuKzp4JVsYV61",
  "key20": "3cJJUnyd2VLrUKoA7gSugPu4YD1iPBVKcRkLTzVbuxWnCjbPHHAbtoeUs6JT1tkYQfbt7m5sdmr4DvNMmYyQChFT",
  "key21": "2YAqepiLLfomBvp5nwzvNqvUTr8M2tu4v4q5SDyTSzkstixEExuqYrBaygaPzC7agQxXcsBTVnyW5u8U43E9sJgx",
  "key22": "2o3fui8bCHyaBDSBxgsmudy82n3YuuenzgHFCnY585LyiQzSdFCyVNxpKda6vgduc1YMP9zPJWxorfJwfgG8r9fA",
  "key23": "2uWa6wwCD94wsSHqUqYDyezamqdTcTxpaWwskyFLxVAN7hytXfSq7qTeyAeRDE4LzvqLS6ntzgXF1CuahbPbDVrg",
  "key24": "2S6tPJKCVjthktFHDem4h5H2Sq4G7WoB856EfXryskPPFZ9dbcPLD6T46buta7DJwNuET1rJZrWo11GfVyzRVzpy",
  "key25": "2k8cBBkEZKaw3NhXwSR4y5mDPBGcSvrntgdJVv27ktasEiKXGyMKqVLdnrcGELKybVMGHttJhXV418bzgRRYrBvy",
  "key26": "raqyoATVZwt8F8eeyzcpkxzkAHuWVfU3WeG29k1vDzfdco6pwRXS3VaZ8ece7QPGnomRGtmbRFufyrnAed73yrX",
  "key27": "4CyFCx6RwXPmkcdqc8WG2ZDkvWmmvJB63eRAooCbU8qEkWxcCdLWvhVfRBJwAWkYdSvvExyJMsjxicj7zhwyQtRG",
  "key28": "5Kttnc26iKmKrXgEdxEevU5TijPT66VEUaED6VGTTquzxNEijgqu4v6gLPXxKrjkbpinS2EzWXPsZhbmXSKZAAKr",
  "key29": "25QJZLr6SbjLS1gDdUkBHmg5EqKaXj4NVK5D8nfk8mWT4afaFcgj8AjVDcuZcQXKK8gD4qv3UrCZHjH242yBy1NU",
  "key30": "55Ub3KexQMN5BWkohJEohj7gkAR93RFggsu4aT5QEdvWjBgg8xahTD5jZwJCYM1a6RXETSStMKrZ2BWBvXW4VgyK",
  "key31": "2Za2RKkDD3x4vLfwrTTB9Ut8mqVSDUzNxoJdiVVmaTH2oWXcA5dcn5n53y5iBjBgwkiCxfdUQbBWP1L62k6c87wB",
  "key32": "S7d3KzoG1du99zZotthgqtp3gMjgK18tdc55UWErLRGC36215jzsyzRddsGbV2MrJSwdWadFG2koMzRRkxWH43V",
  "key33": "2bHEbm6pKNgYeQhf9PBPv437QUj3he9EggjeUwVnFEdbu4LDrxFBVbyZTqPrmWLcK2tZTdXiFy5uz4HnxEwTjTw5",
  "key34": "3jqa5i9w8FgYtVU6UqNUpC4ddwXX31ZHce7GGSXDofhirJYnrPcyjbpdme98Qv2ca4R6onNfprJ6YWx1TsoMhD7A",
  "key35": "CLvgCg8A66xdr4tM6oKRyk63XkQBz7Xehqh5qiWq3oLTCPakFSqZJ2Fy9RrJA7wxfRM1D9gs3gNYt2jmfquGN3j",
  "key36": "4dV988gYVcRqP9Uhmu8yJ2jCFSG14iZZnAYR1NEAyMhYJzns1fRmReKBAksi6vXK5zdb5xUkApdC11kZojqyfphB",
  "key37": "52w8yyo6RoFWEqRD7ZbSCuWtU2DFuYNcNASPtdfqqRtmHHykdyiqCDADTxHpgC6Whw4dUhsrqnsCVxtXM9zNr6GH",
  "key38": "5o7riLucEV26GMhJihPXKHpZF51C1xseChpWNTV7Dah3Mj6vegEU9e4z19FYquxrKBdPXZLZC2SFHQByvm5YhSm5",
  "key39": "WHuuBkpaffyEJ8ZfeppUZmmgKTWJtz7QuZYuxMnPQC5b9N7BeqGYwnch2Z4cxuFeULZb8KeDeKjpW1cAo5J5TLW",
  "key40": "3TCjvBFiuHgcqHR9nzv2mBeK5mcpLd7iEktPvSAHvwnvje5msfHu6qREP8fF7d8Lc4ZH2PwWuDiqs8Ame84JaThi",
  "key41": "3narVv6S1toiEsKV3UddEiak5iDFvwuWRCQDmHs9puHuW9YpHJcyM1zsZBU6UaJEjhh7KhPhG23xkibvpL4Pea7J",
  "key42": "jmztEFKQyACByHdvRuqYdnPdjrsdgRScWA4G2DQQpoBd5XUyAnwGXWj3ZHCRvDH3opwFEmqHTYWdZkaW6qVTi7G",
  "key43": "2x6judfmEyGnT8RvvhtkyqiJoRJKRTUHxSGHXoodA26KDW1LsmsSGg3czCwNiWrNSVHkuVt4HnKDgEHJkT85nVMo",
  "key44": "5CmXguP1eqcfEderVdF3aXefmynsusCdPqCBsvj4xiUkFAnHQBaBT7an7SKWeWZuD8VTYZM2ZBwonf5QnTA2WZYQ",
  "key45": "4HgR8ixR7hCpGkMM1tR4CEXeVmMjDQeZRRaEk78RpsvRERanET6DPhtjSgsrpeMw86VCwGLmzEWWF76yFwnbyaR7"
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
