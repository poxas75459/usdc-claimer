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
    "2W7NSgwJ8LUdFF1UWVmTrsAAHDTE8WBpw5R6jRMLgNK8cvN61peCLejut73U18GJcPSP9Uf99DGvpfrnhV76y5q7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ErE66rMkerKSaEiM6aq4KFSwyRe45voNYabw9z168dcA2r3qviutMiGEmC4aUmT878fdTF2M4Dak9GemVR7jtQf",
  "key1": "3j22Mg9wW7ZJp6f6RDcx8PwBZhfKUnstiLDFLwE4USxVG3pVtSUR2JfvFnk7gNGCMEHU2oNbsiA6XPGkknVR35G9",
  "key2": "BTqYFCEoB5BvEoPQasK7Mo8K4N43uf2PRzvo8bhQFxjkYuLyrBoGFwz6py3Fa3x8qpfHrM4qYmJmBa4SbCNcqYW",
  "key3": "312bLK65Mmh565r7nVsBop6dAfzmDZWdmGq1hSR5CWYx15bqUsYc4xv13F2snZdh3BQmvL9ydNSmRZU37EmAcQUb",
  "key4": "3q2um3G1gdt6nd4PpcTvZiCxtB4pgFEyVnUzy3kgXvCUffFuNmmDJzdMsznPyvGATx1Syqfum3k8F713YtNTsQw5",
  "key5": "zy9tBDFBpAwqpGAqMvPGFY95RCk1y9P6xs6qSsBhrdtaADfvCk3m7GsEQ4i36Yba4YrTAnhfwX4S88nmbjtpncQ",
  "key6": "46hrSu3eDCUH3pX9T2zJbUdwYkbmxj2p3oz7HXUofLkWPbSFZEso2fEDWK959G2mkjzr9UBVSeLpBgYo1vDLDH4B",
  "key7": "3kqfLxs1kjap2hm5bCxexuk69pbvAZrYo6enauTECEqciR5pNmaeaAFmFvwSQaua36sKymh6zAoFrGUSB35hFLoV",
  "key8": "WTucs5yURCUp39owZUSypgaBncpUCWZBjhj8rjtZkvD5jQBP8Sbp6n1frP7vKWD7SN1h16wh8TYjr7Z16sLXeHj",
  "key9": "vmkFQV32HQPihW98cQXqKVfXbSnT4LpNMZFa5BpefyybBfiFvmnGfLq9Q7TEFLcWU8gdWnqowJuzCcXkQQKCEqg",
  "key10": "3aWFunPRcc6NT3JtxWkQz7qswL35DZmbc31kSpkci26iepVEqUuotELJwir77a9wYgok8pbTcUyHeGHbGVwbuv8F",
  "key11": "2PzBNFktssai8ESp63QZfi3LEPjLU4ExfyNkP7UDyoZjLFW85sarUV6SG5SxQDBL7y8Nwy63aXoJ8AGRFHQM6ewx",
  "key12": "3RrP4W8tGwWQ2iqHRL9qJa5X1Dmu5RsEcs3zD2yG9HPvY3iLwzU7fZSL3S5Kays4kSv83JWwqCmUB2RRQPdph9C7",
  "key13": "3P8rt7jXfLWfwFpbqtpdDt78SQS4WTpvFMHwhX8dA6rJyLtTCpCJZyafHkZpDB4TN473yL2udQBDBHg9guKhLfDW",
  "key14": "5X9YRSPg2e9j7T96JbR5YLYtQVrzbH34L2yXQNS1KAbDm5A5NMykHqxnbwfqcFuN2pu3AZq1sQfm5eawrWwMx8Cf",
  "key15": "4JdcEd3AoFL4ePHQdE4ucoqDnHrYVRfT4A2EVAhJXmFDPq848kmeyfDk9C5bZYJHhqNaRT8CFCtTDw5pMvzeKR1b",
  "key16": "4atGMdAChYJ444DowgnJfQxVGLQKPQFr44PQs6kSrpAyGh6QcZu4WEGKqjPXS47GwVkWHDv6t7MyxCDmKivJDNoi",
  "key17": "5YNdCG3KhDyL2bH7ETnf37Hzv7KtkHDRJsJKdJL2oLN35ANHaBu25HhvJu8un5QW8Xymfp47yz5Y23zJMfaWhPk1",
  "key18": "VLkn3G4Me1GrvUwgmFtwpuHUNbfrc9txXCQwXUra5bo2ks4szmX4jJVdvBD2TenWQJo7XGo86d93MJHWoEffG6d",
  "key19": "3h75Xj76r5Ez4HWcjEfbsajkQ6ProF1gVtNj3M4ReXdWDjRQmPdoFP8xYgP6dweKHSiyi6BYt9QekwmBXecdMFaY",
  "key20": "1V28TxE33S4pYhRmsf3cN9QHDArMXtnaPtNVsAt7fRnzDWBQhHtkfrZFs8MFkndepBtSuExibB2vPygsdRuLR69",
  "key21": "nbz1cckx8i2wCPFuiMDdMhegVP6PajHd36Aww7vYKvYfHisKkooEpex2FALZMWGiNgEPpfMtRGkRi2sDbCN5qBb",
  "key22": "5zW3zpmnzhFRwygTdwif8KQVXuN47swEqHfkED7XGnnGBxrAYAkVVmdH5SDWcQqU3b1pKPGKTHkNA78B49RmsyAS",
  "key23": "5k8wyfCn7v6gnnUNZszBpaKYQF8hwsQAHGkcLyahbhyeFy8ZUkZuMmVyjHy765oCDWYHe1y9x92e7pWo9TfkDLgh",
  "key24": "36sS2di5MZifnVATXBs29iSZTDJn226NgfurqKGQHbye9tQDMoUMRqFTLZAyH3LYciLkqi99dhtj8Qp9sNLZ2zq5",
  "key25": "229BUNpUSymqK49WvpM4p1B1dvtd69jdNAgCuNeJq46iyKHik4Jeikp1ym4FU9E3CxMrQA4CMnGRDN3YjQQsbtfR",
  "key26": "21AYDrGjQ1f168i4yGYjuhVxzjmnMYhZmPSGJqJUJDC97HQBzUytqVuF6iUscArCHq6jNjieAWmWyEsjZwGhoL8Q",
  "key27": "5KRH7A8kiGZ9YEJ6XBv6DVL9yq92f9sLj6Hdb3RuvLbqDBEPYiXBUNdf1YM2VdE3oQaKnuD9aiNuE1dsHMpgoNva",
  "key28": "3ceqNu5EFuCtoyLBBT2PE2zHS2FnLLHtEzAHDGRY83751Ya7hTKf5sUrreBpmgArkD9xB55sqr5HfqDuSDc8vm3A",
  "key29": "4MiTf6FgfW6eWiRNZFXjmNG1sM8BdTDhGnMEFxSpp23b7KgQvcNeVxMFTQmUo75198f81eo1V9QfXXUsvnQBBpFo",
  "key30": "5YJbCiHXqyLKXkduGVTQLz3A4TtkkQURtd4p95QncoN8d5j4Xz4xjKTuuAErvM5EqxunisTugndXKqtz2Bfkg77t",
  "key31": "2ZuWXzA2k3WGdqeAmBhgTdZKTJ5Jf4BPf47BNYEip4C5B5chD2E5qsAtMBEMZA71e4pahpmjx1GQFpnjFq8g2eUi",
  "key32": "2yNhvu3bMmUorrgmjoie3FvfqYouGkqW6Ba8RAc1WPYTuinuiENgcUaCx14NNRnY76w9zcPXhvbgsFHaMX71UdRd",
  "key33": "2RBC4Zp67pTGjBU1zJyoAMKegCDkQoDB6nnAys6bz8eNLu3og1STnqC8jfsJhpJhWU38DTVCfWajGHqfRNySg1Fz",
  "key34": "5ZzMmjefpihbKffAHfhL7ZQm7HyacEjnjHzdYqcXTR1DKM9e5P4KopHTP4gX76sZbpFohZtNgqyxRaA5BnDMQGHM",
  "key35": "2B1Bb3ytnbeULSe6vnUTCpvba6rmr5eKTKwJkoGDJXZDCgQgxERVUQCtwDsceTGoto4HrjAsgnPZvYVjCESGUxe1",
  "key36": "24unaCRZZbtWyZuVvGa1q36FQkRdHPp6xH9Sa9ZtEsp461NAHuFbXNu4USAhHSfjm2U84remLQwXFn9TnvQrRc9H",
  "key37": "E78Qy2cfpHqfCVR2T7YFp5RMEJM7JZcAMMLmzNJLfjLXSWqhBiTHwrLZZVJkbyZB4yXm3yHs9Tb9Zh2rfndSy9s",
  "key38": "qzrHKC55KCMFYH6qbSJy2XKiBg5GVstbv4mJKf3KaRpNmZgJ6fafyuupw28dA7ziB6TCvT1WCSKJg1RHXz7PtJS",
  "key39": "tCyNkeHz9af5csLc8QzQcG2zvUat3kEh5XPYKBfTUUGfzPhTXcUDhrckYBW9MnLyewgUWvGawfpfQEYoQ4B547o",
  "key40": "2LyxeNsFmjTSSVgkopDuq2sd1wa1SrxEyKLAcqpkkL65divCpMu9x7E7bMv7B7j7auSUTbT8rQnaciarXb3knY1a",
  "key41": "3aE1ZUK4AdCECkGw7bGkdY8s2WSX7eqNUzNmcbKbitaEd46dUfkkYitKET6wbufSSipKXvebxbdqfiu1tuoyaJK6",
  "key42": "27VUYKdrxvERXk1vF671Yy178Euifw2ptJUgrvfpBFHsYsPs1S2wgvokyjWShYNWaMVz9rMkFuc3v9KxseS78iRw",
  "key43": "5RXxpfentvh2b5XdLrdMpAAG754gtbEaekcKWhqaxUvvxFy4BNSxrWRZ3hecpWME1dN6MVK8LgbSFKFTpx4uUBSq"
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
