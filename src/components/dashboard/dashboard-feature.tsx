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
    "4Vwr9QzpcXmZtxVmpqxkQpbmfqhxxJnZzD2x1ajYQi43FD41wEjAuEcB5rqbvmuCGTft4qNmb3zzKwfCPLqcJJc9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gVUnimvLkAQimwrot3GwDzc6iGmJKbwuPthuQaqdfm9NNSEe54dZ9APX2oj5eHMjLHGg6XxQY6nKA2E4p3Er568",
  "key1": "3UniGL1uk9U6Qejxn7ewFjYk3Di8mniXFBgP3cD8pBLZ7AhwHGDqJXk6YD1zDxJAag1UK8wzEk8qj4yFvX75J94",
  "key2": "MG6xbrpf5M64TFofQBZMVLe5oiShw7iei1Go7ZTXKZAtPHe6vrvpowYJ1QTFSVa8re5iuGZjySKYLJrncdMfNgb",
  "key3": "2MJq6iCMKdViqrDGVi96st7ctq1Er5DkM9U6SY9USeisPdMJrmFicWfBuMt9X5Z4APpqc8uU6xu2iNq2hvbbumqu",
  "key4": "gFGtfzMyo7PoVzi3YoBvb8j3BF3Q2h7gymTND1jNWWSQRD1YsghxPAjgKtzSvkGbbvt6x8L4oCivNe6shKFg28k",
  "key5": "MzK2JtiHiR8tV7X3jcyxigEuLwoSAXCqSbFsza44HX3BGbazpWurkmwRMnUTpMPSzbqrskSY17BhvvFNGH9yNRp",
  "key6": "3o5EXzW2gFagUgYLPuotZrHwfB7J7KhVn9aq8HNVbjRsG3MzMugCivWgeYrkXnCr9DrgxrEsNoQS7nxEzs53tdhs",
  "key7": "48d1yaXFeB3tkZTjUEDtJAUP53112VbrwdgEDaGnx3AuMMhfrVgqsv2UQ229bx61Yce3cxegNF18nmHYzAugaD3Y",
  "key8": "3MBwdVBZTeH8x4aqqf5NPTDiWS3McxjgFgRMHimZgykfixkEBzqr4cSrQqAVxESzgeGQf227GAmfoqJQz5kdENyZ",
  "key9": "2f18BCHKSd3Nfhp6T2j4bYkMDqMVKoeDhEuumRHPmuZy1vzG2oL4PwQxsEG9v6FM3oL2omyWsuW4BpaMY5LAAiub",
  "key10": "3auN2PSqbGwgwgEUgyAaBLUwVD59eX8gcwj3BkNQ1PwsFGS69iPtFbNqfQZGX3aDQfNk18ukupKZU2EE7YwBsX3x",
  "key11": "5jLqaSNYvqbm68h3mNeHp3rNQAq8RSQRcKuP26kXZcgXPXTExMrUCowMFyCikSKJzvrPsgT9ZqzSYnKHeMF9kLMv",
  "key12": "5WRd9p7Mae6FaZK5Ki1ME6Z6mmqwHWQDh9Jay2MMzqd3uKU18P5UewZwJewys4tLajJ72Bn2qBduzvbofJNBLtto",
  "key13": "5cPv2FFjHxDBrD3BjdjPtS25seZjZAbfTjHfq5HZrigwQCeXfGjdxboc1f4R7HPbGh6CfSVTkMAjrdBBcrRxaP1A",
  "key14": "61ytAgUXj3zv4Lw5MuSDRNqaudKHoR2DLEJHMY2LppgzCCGm2X9Pxcmo4jJkHDSttMDWagCE7gbUoxxgbuTPBywv",
  "key15": "4UozihezyFktMbVq1k8q1uXbDo8vs2YeL3L5AjawF2eqGa3VNSvnD3iSimHEh1MntnPxqDHmJSpAQPVTb1ZdFAhZ",
  "key16": "3SrmSb1oCybzRhKHqV8ewdpqboZUoPCdPRcJcug4x5h2FTAyNU58h6ym5XZuVvX5bNrQycju6Cyb7UFg5cSzxY3J",
  "key17": "5VqZJE78NEXUWVDqwds9CNzyomaZhRQ8yAChDrVFt2BdUaJKydEzeuC8gWXwdqqEngEisqfS5iB2a5tSWWEBL1ah",
  "key18": "59sdW8Q4jfH5TKPhTDKBLLCz2UNjhb5mGrBsaM8kgVtSuHLhxaC4Z1iCbKFtfhqAeDWYfoQj2b6Jc3yEX5CNjL3g",
  "key19": "2VrzXCsJN3nKyHzMVCoXTn9QZtjdM7uNF7JnRcAArs9LUp2us15bbafiLZBZH3qFJi9hzPQnNqiwo1cquoLi3aJ1",
  "key20": "21epUeecPPp3XaFZDeHu2yDM6vm6BTjZd1UB2HZ5V8touwyyCvSFAYYJREt6AudiNcfPu1gK2c3a25vBfi1wfyUb",
  "key21": "5iwepCRBZtCjRd3HQJFwosENgyMALySPXq6E7pgEWFSCZjinwZL8iajRnodPb5LovKBTxKf11jHRps3VdboDs7uK",
  "key22": "5Tn5r3WSxQHF9jEevZc4kYSweFKD48Vf7MfdjAEe4YctdGLr5QieLDNjvnNm2qa91crgkHzzQhg21Jj6wK4cXKaH",
  "key23": "4NMR1eMxpez6zBHWyRhmf1eBYuW6ZSEfAW5AKSGxmNpVakWW4DzoBt8k55L1cAM5HhrnQEXp41zUi3XyAcXJuPZK",
  "key24": "4RkYNTVPyNVjhENPUUq5rooFbvpJGUTXU4FGmGmnyHWsSEB9FSUJQHGG1QDDTgYR9tovn63mPMMAiC3M5dLf1t1V",
  "key25": "2QzAd511bFCtb14NkGhy2nSKxUe4UYBu74DsiqAAKV5JhJPZf3jnRqPJdURLSTKD3wHPsXoUtwyTQUk1u484E3tT",
  "key26": "2yyV7dEFQ9ttrmX745CcadwUfY3QgTZHx42UDybqMZweW8JZqvLGnogVWpk7hMcuib96k9fGqqgoCHUA7huKiNjP",
  "key27": "3PYtELUAAskFtXAwcmKc74jpGAfxHRmomva8W9ybtZZgEKvPGtSL9otEwdVLxSXaDm52GuK9GS22dG7XmnTdW8Kz",
  "key28": "3FdGXbjnr73apeAk6zcb8dbustptc32zwWs2qZUufDffGmEQDA6uwmbkZrJUW7kVaT7Adt5eFh1SZpFbtTjxHiGS",
  "key29": "xbWoqMPZJV3TQz8miWS3ecWJtWtdXsTtrTfA8okkk6WG4GbViqLXFJ7JptB8dkHq5nYNGePbB4U3tyrGpLJr8pz",
  "key30": "2YuQj9VGzomyGS2hBVHbwPcZumBYJGo5GwA3iyHVsvnxvSSi96M5Wo1HMNwg5Nsqh3tVAxf276QMT23okCgk3pA6",
  "key31": "3jfSSNx877rjqfcV7YkQEdgEazkGsRRG6ZfsHUN2PkQ8QJgMZKWd6hvzMC1e12L1sVtCPm2nbKELeX6ftzthtr9D",
  "key32": "35pqSrwN9s7BH1c4ZNsnoyposcYy1faiwrkTYecRhwWtdXsS71aoQgsvyC1iB2UfU8iB1KUZ41xu3HrpDbPAinLc",
  "key33": "4AHnJqHG9CUYZfRkKH3Lmksvfqtnyt8dE4yGNMAoFXvvEMGteJ6PnLk7vrroAxzT5cMPsUX8tVYLrvMUc2pR69Vc",
  "key34": "4g8WZgsmMDsJbdwc8Fd6DZ4PuaNNb3HexFsu98WesSKVgZBWoE2VSo8X2WHZ7XGkhUpwon2wqpX1dJEQ4aV6mK7Q",
  "key35": "5zNBu2jKNKCU96uvGnL2KSMj4TmFtwmvfquifPWrD1hQEkxr4q8b3p9VgJMFNnq6n2anf9kCKS8QfgfTfNGtyDLQ",
  "key36": "43Uko31LFnuyPeYJLqWM8Ytk6L72thFkZofka4wJjqCefcPr9EzKp9ZMdtf87VQ6hE4o2ah48JDDMVJZybpzKYDR",
  "key37": "ERTohDUv7vQUZtkCS5NibTbzwexUEs7v2p1ed8qmLcTbRHyB9Egwkxw23vqtG26WimvpbNqnG3rjApFypGDoeLY",
  "key38": "5htn6MVDCwjb7qZsFjUUEuQJeGd2YAUCGmBVHst9vk8VJrwUv1haDHNcipLkFDpq2uCgFhnQkMHX7thwmKGg4Qzh",
  "key39": "2ChEWCGfwh7nx4exBqzDC51ZumNdGZSLGAJ47mCRA2oi1N6gQzFH8VyMUgYtuXjWKDiccxa87CcGGGtKWqePQDMz",
  "key40": "2ka1XfLjwxhVGb8u1u8p1qbRMKDAcgP6tmKWbMUp9A1tuyQ2auie2R738VF5coKMgjTT3tr6hK1Fztnp15KBaeyo",
  "key41": "2WAmRtr3YoWsQ74M8FVv694TNjW5iRvin7WrGf9KAUDu14qSRGqJoXTjyxhUbbX92UVFZhV2CU6aUiqfFkH67Bgz",
  "key42": "23Lm8RurofhKNz7ZkWJQDorLasZSdmywD52bD7M9zrBS1DQYkJU94tDZAYPrGnZXfWymfNLEB8JbyohecaVGXRQd"
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
