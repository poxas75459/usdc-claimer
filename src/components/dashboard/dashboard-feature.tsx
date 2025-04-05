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
    "51jExiuzoANRwTEA42nKsGhAHvVf5GZwXHAwLroG3xCBZYVUUtf1rCcMZAE67JE8gUAN5bLPYyKUsjL8vcy9Ej7Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NppF2cQdvvwdU2ozQNzPsFtCjuUJV2iaSUgHRuxcD824df6vqYM542UUePVPEYXUwaFTzj4rsc9ZUjPkvZG3gbT",
  "key1": "3pRNDAFvPu2TzzMqiKjetQpPCP8kaAi8D445zdueh72mouGQpK9VErMWRNvt92u2rZTyWtRsh6ebkDtcHQEkaeDR",
  "key2": "vPiLyFTDBYVYfD9uTUaTue4N96TVmNWPtpQntYVy5uKR1zd1Q3DqvJ3kZpyvUJ6vbto61ziwcAbkMakJDWXXjD2",
  "key3": "2UHdQLLoUSYa2PihVDgzt6WvDZvTLRE4q6P74GH1Hd2gvtxaQyW8rSfXyRJYhTLoA4RHYoBN7bpa1f2YvAon72fm",
  "key4": "43thxPYfgrfmuJvjemrMnJatWPNpnEQBBpTBehJYxgERmwAZfgfV4bkFas8EJHQPUBaiDaUKRnjtcwHqSxPStNtx",
  "key5": "4HRirnQoEYebWFbhrg5hub2X8jv8XoqHfjac33Q13j3icQ6jh5EJnnFZm3N21pbmrkhtBuXfaYrxzFWTErznJ3vu",
  "key6": "3NBSZv8FzmzQzpbdejF1cyM53q7w1nBLop7fWMXNd721HUi9FNcH4qKBDwNADZZAc85x3ARvsCQVrt3zSEss9Mxj",
  "key7": "4BDErpGvmjc1WvhBcCFmz4ahgrKJwps4QsFwrd93o69vuEsH1wHeid2H1LTo452mLUSr3dpZV2ngoeJv8cLeVN7f",
  "key8": "5Xjpft9on7uC4zDeKh8BP9qcvEtUAbeZPP57du4wrufryTo8iQrZrhk9HNQBXPQ8fpzRv1jWFZ57FvsVveVFucV6",
  "key9": "5WRrqqgSSjUBKXMwKSKKSRTQnRc14FJSGM1Fqo5vAwXq24mUYVigpSkiP3Ed6vK2x7qXmATPtTxnXLGqHgzRXSWG",
  "key10": "2i1FurtsL4bd2EZTx8XDkL5SDfpmBuR3ZAQ35jJhVh6byqXYg2W52R7Lyjz29bmFWG7pVUuzZocioCwbQuqYErbA",
  "key11": "yq6ECrwtZeqMovBeo2msRJ6eNyZKBCc9pK7nhauYPkdvD4HiG2LJATgbzkLCQD8Qc8tbuTKLnibc9eCypw2wxgH",
  "key12": "e7pUZQgxeKGATeVPqmdcAYm1UmuCEj5uq4YxiaQr73UPBei6ANWv7kjU9LupxzAfRC56Z3wDaSPbrdA1m4Lfnmi",
  "key13": "5F3JYaVXiKNrh9x9RXZoJhAcmPezB6Tz1uTLkq4p1J5CHMTRjSobYYdubwLtXxpgzo1HfxJ1XEtveGKNK3recBPM",
  "key14": "ATTi1pAqN9fgQyxKc8ekb94uePYCv1M8nupGXYt1aX1BNUqP5ePnkYTMH2wXE8QLUUtmujmXesPD6f4tQ9xfEZy",
  "key15": "56DzLAYmUWB22tC2skEjb2mw5j2bYNz2Ps988NpA97vtqBQpHdyzDFcBEwwnc2TvRpQv5hw3FqwGUjDWW8f1xJ6Q",
  "key16": "54iFoeAk9rpA96agSRbpMmqV5nqCrMaSxtKGBK327eDtPdwB54pnTFtpxQ84zSZFwR6bnSE3ziEyQ6XUatux21Cc",
  "key17": "at4Y6g9bkid5P7UZFUY3KJZcQNBAKHPvjEKoQ5fu2fiz388U1z93sFeKLJVxPMc8K9eEY3wvDnT57Ffys7hwBNW",
  "key18": "122FUnVuHVrVCfKqiogjVny5YgVkDw5DRqk4rMsWVHWtaF7RKfy3mjdPMtMZf6gZBXAUKJoZxCVyd9MAPKCLTtdx",
  "key19": "555XZSTn3Hfj9GHDAdndxEqCAkpVLXFm33V48vXtCTpFghFZneppiC2CTwTPxRxagrs1ZNeWjPzXBKj1d3LVuBZi",
  "key20": "5L7BVvBRmj9NzgYceuGdSXZUZ8E7bXSW9MNhA9nGN9qhPzXghbVPLr4e6JLGUbepKbZZsNN4votaFG8fwnW1nLwM",
  "key21": "3kHm2AKC78YDP5MxQEQmuTYt3a8iG3N3qQKMFQrm9jbhDMnamyTMvrcnmiimj4gy8w2gpB9xiApbXyJvqqDFFvEE",
  "key22": "5XWFXWpNtn57D2CqLSTJDfZYtzn4d1vthfpPFZ4zxTxMWqyLECrZ3DVFTPGQtY94yTzUAjR8JdxutWqWEg8pSzyM",
  "key23": "55mZTdeEQw5c1gfnYZv5ErtkbX7Gnfhp9muq4mE1bF79phy71vdf2AzneN9KAiLkFQpeVkCaHTLW6BdBBGbxsx22",
  "key24": "4GD41Rqa24wtyj3zA3XEh1vMNmqqqxXcgRW61igPWqSw2KTB4ed9bA3MX1D8Nk79xY7cks2cUkHPb7isUeLzdjGd",
  "key25": "5yZZkXu1UMRxkb9hzBas1UBZ8vhBKLvxtpGRAQBSZtLcpEV6fSk8BNygTsbiSN8ccs3qGQfyrYSrV8eMxga2MnYB",
  "key26": "2khCvg4FK3eTc7nFLjvmcLDemDGSFJyacJqeTxnb3uKoCNYXGZf8GTJzUh1Lfh6wmbVzhx8LTHMPeykmJUry8QNg",
  "key27": "LfEmAC6nN6y63JdYkhQNiQMUvQM88rZvmnPsU838jKDhDc7qBYhYKUzDXMyUL8ZhkrMDyYUQ8UuNLG1W5CHgByu",
  "key28": "c7V2qRDChQPp3NWvFGRSP1rTnJ96NbwSQRje2oQn51tMNVn2GvyyBVzhqLh3SZVcg8kJFrYSFvqL12RATzXzkgY",
  "key29": "3SLVMizmgm3CTLTkW6N9K8ewazLZNuBP3Qvw3gTHNVAKP7i535bnatsCGAm2A9T8PEaGup5Y9pJv69wzxgp4E4Xi",
  "key30": "4MLXJZ1usPfzYSN6pxtojvzS1zYNAKPvepJeBzYQo9LyJg2ZfH5LiMe9hXvM9FBLwdGnRJWrWHetjTFXiyHyVV2t",
  "key31": "5go1VChYyQq8J6duEuVszd5B9ZEHjvUPkP45QWv3cdNkAVUovseb87MmFb2EEaHuZf1Qj8gYrUetZqn4Nq4eZmjv",
  "key32": "5Mbu2Up64unLtrWae2xEwhhPtYy2dbr39zGWCqYjZs7rC7a54pmNrLNLrG7WDtPM7zft2HqiSQaxaW32vEbFYfj5",
  "key33": "4gqG82uTNFKApiU7hhNH68VDFnTTyX9Y6eZLRGdiEA265EGw8GacSmU4gbp6J3sZrmp3HW9XEsE7hseNQJ6NE1y9",
  "key34": "4UKdzthodoV2NMeqP1V4VbjvR5K4u4Wmx45ZKgzGpSoTotxcc95MAZnWntjwr9yQC8uiP5K94rUs2npHP1L6LWeM",
  "key35": "5wbfz2wzvJscJi6vAg9YgL7SCZDcAmaMXjGppr48YRnxHLEBWPkYdPVorJZkcKJAudPwSAzTnD8rojcYzHwkrLuj",
  "key36": "5GDH8e39RuheJXFFs8kci5crZBuytwr5U7Pfi8XarcutpCd3MXBtG2CN2f4sVXFCVAPpvC6XQWK7ye4UoPRnt8GP",
  "key37": "5Svfa5xSdvXrC6ZM3J5Fm6PcGTrhfEgCPSgjtjkbz7kPGMwH8ETXy4QJTB5sUt5Ef65NZCX5jFpFWHyWzSaC9UXx",
  "key38": "ZkE6JrWgWUWLzKkMy6vHXW9fEoNyME1G9K9bRTgYXYT2hbWt4JeU8hrHwigDu5jyS7s4qyR52hTV4r3qCuZQHhq",
  "key39": "52YnuMsrR7bqyxnM7B8eH1S9ksvuaHVbnhDAAgo4WcChFAefSY41qWn7FNx2BarEwFwJMHM8PRu3yD9CqmbWcxps",
  "key40": "psE9e4FbTK5wjkjoLwwjfP8XoCupWWAA1EbyNBEjTCbKHR71YGsgDkL8QZMKUS76revHSwiTF238ztBQTq367PK",
  "key41": "79kXZonWr31KrEKnJKyXXZASTZkWcwLquKSPTYN3q3qycz6fG34VFrM4tmjtj6iAKyH6mMgMwZrZH6RmQQ3sNjb",
  "key42": "5Vc88jDyBmFPxtj5JPWAvzGUL6PXoK7eeapu1utsCSb8v1UyaXaLhq65GKwNVSjqn3Mhfnix3kvTZLPpATUP9UQP",
  "key43": "3hRMzAgX4YYkJ3Meyq4NrXNV3rg7XTugLpB1a1VvoVyZYxNCnkMjsfq1yZazs9zrk79RDV8iNU2JDfVxMFtyexNA",
  "key44": "XaWAYt5G2SdR4emEFZ5yrauqrx2zGTUkrUqkEokMWL3GkezQJd7Aoq1Khrq9SEFi79UXt2GfbcxqYriq6ZNmJaG",
  "key45": "5VjXZVk9WZKZfDMunVijJVFwxnuEfpYrupZ1wGTE4Ct4FcVkyCMiPtU1DjYYePVTpARyKmrURiqw48T8XzpqCizr",
  "key46": "4YrZWq5aNMbeSFFUYAgGGBxmBrS5t4anbZ6JjpBZNtuoJUre4DW8PRikWMXjsUpyYUi6NZceKTEc4thBGoFeNCaW",
  "key47": "262LpHqifyWwdExQkrX1HTUvsqcHma6KT49HjHfs5SpSBhs4ws1K4YauyUCKQ2h7CxzGiV7Bb9ffHmpVKKx12wqT"
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
