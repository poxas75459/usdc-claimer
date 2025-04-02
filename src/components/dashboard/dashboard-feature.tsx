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
    "5wXT1rj4yeM1g6YJU1DFVSjPtAEthA9qYbucvXQFPvCSq6S1E7ojPibV3P4DdopxEpRosJvJD2BqBeyx8oFcVYut"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V8mXd4Z7R4WfXKbwvbfayTHpA1FFQHZ7H6JuaZuBdRuzJS3ZKXNXyupVEHMnhVt8vWfRidjSD5PEFET6AXn8XP7",
  "key1": "45WFQgAUCCQiNYuE2U4vB8eTngyx8ERXjHsSbsUmubQZkRxCyNMrVq8ipCoMJU67dNobxuvu5tjrs8LhZsyWv9Z7",
  "key2": "2udNfukFcCUhD85bqeWRLrkm3zuRNPz6CAgsThhGsV4HiggXm3ASekSDTq3ncTXfUwMQKyLaU23V7pdDMqUWvq9r",
  "key3": "398HTeuAobYSz2vGyk4rLfbG6UNmbVRHV7cMAmQeKqdRPwwZdwWdgjDE9HEgKRKnRPnim4BrkRwcBSR8LM4xyh4o",
  "key4": "5vJZJx3fxVqrXAwvK1vpi1fWcyGvLdT1btEq9BdYfuSnqioVnHg4E6vjfNaTQrmCJRk8CCLfBUcFG2USBBzykvhS",
  "key5": "63wsUJKFLY8ckDftnbdxeNZ8eTRfaRAXcX1BTH1kbByYfeGWAZsYbDB6oTNmNefegerkjBau6CjMXhpV3WixLfcX",
  "key6": "57eS7QGJy4zxhLapXvCn5yF1RieEkgmhqQi3qbM8ATFe7qYRVrb1NRHyVKhBkDVrYjMnaCaxd7HhKCPx2CaVekdz",
  "key7": "5DYMap6aAro38EpCerc9JkQBtdrm2P4VYvQbiGjkpF5BZXF1gqgaxZfBd3YyAkVfRRFsVN5LtsSpcJNNktdKgX9H",
  "key8": "237SFUG5ZJNwMNXuGt7KypejuwWwRTQiuX7VpAp1EeBq8f2DEGNhitsQvY8nDwzk5ZhwACQFU1j8ebzqPvLLZJs1",
  "key9": "2xt1jZirE5BLEXTd4BaQiVwL86YPt8z7xK2Ms6kHgaTDPLiJ8ZhjozdmuzcdZj3ihkMZhRZL1uP6ZGvGX5Na2YXq",
  "key10": "2mXEkwEKY2hpzH3qnmiebcHrRB6PW7Vjz4w4nJrdpErEt8C11XR2329uaehyuadBfwgN5PxDNznuSGRhcGzEU2Y1",
  "key11": "4GeL34D6hFrydzHCPPY4iz4vYzo1AiFvwkrwKNrXJnHrjgmih9kRpSkj14AHyZGNHzZuc2yF52ohQMMaoyJqtpTt",
  "key12": "2zyq8U1MQ8FmAJaEGUw2Drfdk4frRboJFBXHic6LTcXt6UPK8TbusiVig5xxi251Y8BRAspxrcEk3oAKPhzyXDRy",
  "key13": "4woaA25g2FPQB5hsKbMJVbPZ1J5d6q1KycTZv4mv77wrPiRLEZADg3iCswoeaAVLBCzZMKznySqE9Jr58nus6EEn",
  "key14": "2WdLFNCv4YL5kjynrP58Tq7dmgUst8ppwDRP3gEkKFcG9xU8sRGZf1C3P4WP7SnToJmZdvC6QuVXyTn12vA4kkap",
  "key15": "3SB8hWpFxNejTCHeCF54nam3sLXK4Hhgjeg8zrAfJqHvSUDTqrJ9WXKDHXk1y7xFsqh5mFNib4zPXZH72GUPSbKs",
  "key16": "63Bs14Rer6xT5tAYu8sFeEhD9VDGjcNUz6zAwYX9tpp4KAjyNM1iTuXQiByRKaXJ9HRcmLbywS2j7ekoMX2NMkQD",
  "key17": "3c1ZKeLHqnAzNnR7EiQQodL5Hb2soPdnjZgFwnWDtLjexgJETXpSr4ouZNbWf8pYLCxjRzQcHRwiLErhNQQ3DFqZ",
  "key18": "5TtcSjhg72omaHv2v3ex9dNji7AmmQUupaWCS5CNSBJnuND5JiMT3fLD5tCorDvmzZrEqXZRNBXyM3yepU28R9Rc",
  "key19": "5LNCBLiFQX8yEf7UzoD4mieC1vLYFzscJ4cu3CHCFqbfXpDS2jn1gSpWuuWv3bg4BsJoZUALJG7keFxVKDRtqjjv",
  "key20": "65AeK6WVHxBJSvJhkyqvTUAgYG1M39MCQbxL6aFePYzMhS3UWStYNUyeQr5CUXicJzJhg2CrW5zy4udeE2FCtG39",
  "key21": "23HSNUTnJ8jbb9SmVssV5MPDsGkbx71JFcyVzse8pMLbFpfVe6WqG8dnCaK7W6uQEys6rjAFT2WFYRXhsZvHV7dv",
  "key22": "wcAaYqSV5KxLvGC1effC5ms8ErvkTbNEUswqPee2yH5evMMm69GTQimzsbMxrcR3PwZ2Q68r3JMpSU6miW62oCi",
  "key23": "37Chem2uahURbiE1V1aiWxcZsqCn8u9883mzkbaErXwKfbQjDwZgXY1bDf9Jrp5FhrWaZ43ncuPrHUnS1JoN6EdS",
  "key24": "31uK1kgWb4mKsPWZio6SDydnwj86FaKFfRtTm3Csrkg5MxzxcnCu7Qxuu8V7qn1BxSTd77zRVenewRBPzfbW9hSp",
  "key25": "2QdAbWGiuec98pjbYBnvnRCt8JK6fgds8bH6TYtC2hWEQoo1d4ddL86Haz8HkFpsSHD71uqbP6hyKYkVhyAmgQgh",
  "key26": "YRPhLWakSr9D5ykWcCRUan3go27a881g1QJYvW3M3QTaSsuQvSADTni2CYegqMdPvTks7zJdG7F3SxAKqx3UiHy",
  "key27": "5kSf8fGts2H9EFSQDwa6S6zTzfBTWiTHKjUKNc3cKatoXAttn9Cbu2SLWqxPBhnTHgovAGastzFgNst4H91xvy4w",
  "key28": "4TRDLNTfEiLXJtX3dop7jCy7QvL54crhkjBjBmJkVC73VJUhiMai98NiE9VAFqzWBJTMz2jtU61wZSQeyaWKSm6e",
  "key29": "4cNtdizqnkjnu1V9XBnbXUG8UwDm6F1GtfWZx1QvCm7c5NF6dXexFrtgh79gy2Dq1aNWh6nh27WDMZvqwsxNn2a5",
  "key30": "1TFh4cKCJaVhWJZd36rezY94aQg54BzzRbMMJAfoG2PpwmxDSntws34Wb5RnfPK5s7HubpdXdSocuJKUqeENtJd",
  "key31": "4ksnnG1c8riToQ38xyHjXordE7kAWgrqVfTe5VkNmzbtuxaNhtE3TidQc6VZVLeqQeXcNcEhGsyPGqgnXZ9vKVaJ",
  "key32": "54DGNrGN4mDHir6yekmHa8HauzoBaSvNq6VfmAEx2R8PRoYLqaVzuZ6ZrXKoYJ559cnp4SJpdC7YN8tvurLZJVYT",
  "key33": "KoYw9QbgqYnyfsAZbRstWuYTSFbcBPf7FrMiiS8BmDJ99ui1k2fV3Mi9zfad8huiDJa5EafXptn6zFEDfYCT48v",
  "key34": "2g3CAGgajYZwT4EQH43zBCiXyfjM3F9b1MpxrssjavbeAUfQEaLdTeNdvxayxkCFHjs4VLu6RU2iU8MHs3rNcm6L",
  "key35": "2fM6yr8EoRvzKViFoCqTd4C5Eoyjt9bfcKTBh4UaNtBwSNRBXBZk3MC7a6zQ9EKQQVgyuai4NP2vUFVPwf4hVakE",
  "key36": "uEr6s29kMNQPGGg3tgKH25iBx4CQ3fWFA3tM4FsFXYcQNr7b7VfmWC9gb1hXbsaLojiRNNXGF1UCUqPCdSNY74e",
  "key37": "4WatY7ciQaKPeSVjHz48RrtFtfq7MsZMXmhLLEkYyXRNA3cgQztNiwiDorApja9B5k26FmQSarBHyQak2r8gnX4g",
  "key38": "66dNBoKKQXPgbHkYBUSYD4dM5btp2CgrMnWkh33YqcVPk85z4HbJDN6r6SnZF5gicM6sc45VMf4ZesXz16mjiYar",
  "key39": "5ZtTPRUeKSgSQcdMVE9jkr91sRjbFZRtxRSBm7yR7g2NJd3aqLW5miAHezB3sTBNJbqqZJFzVsFJcwdtene6qUv3",
  "key40": "53yiU77yGDvfcBGSQaavpNifraDNVVK9zW7pKGpvu516e5uKJxdEiWWymqB2yoemvijJ6CqkN63uTNkMuNimCReN",
  "key41": "2FnBqbfwEDtFzfrsdbe4z5qFTdy1SaCLTt5a1MVehjEt8VQfB9sYUMMZMmRmUD5oieycS2GsK7vwyZMeG6Zejkab",
  "key42": "vVDbi7KVVWJi8iN4b2Lo6MztPqVjRBh19fDreZmzh4fPJdSXeYeVREojNJq2KPdpjm4cfdxoGZ2WU8hBLShvu5C",
  "key43": "3B5weNEomAF8LHMx8rjdgVUCKy5JSwxgJjt2XyZmMTs2WdUphJZpjMB6vWnTU1eEScD7m1jUofYB3ZckHZrTHZLf",
  "key44": "4WYhJduhacfWPPZoZ4TN6q14qnPFaHH2LHpRSvgKEDW684uJSPwJ7PzLQkkAM7HSdFQMGahHZAjz2CtK9RQh4BVY",
  "key45": "rtaYXtZG6zyGas8s91JYij2zAH1H23YCUrUJxnHWDUHvPJjDWRzHymrqAvE3coz6jkiuCuiEgWTjtK1pfmpfhFH",
  "key46": "AL4vyPU2oKfponatPCHerRZaPx4GPDKvU1LuUeEjQr813CB8QHjW1XB9T74ZX1ftDe5kByhgakExbbrPABaDjxx"
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
