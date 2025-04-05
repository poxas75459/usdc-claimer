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
    "q8xsfc4b1aQFzCzn1HG745Zr3aP57dHN6nEWXZFt1aRtZredGuQqc7AEKcvnbrSE5PaZmKeyzdfK7GpKeUeGc4D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4thE8BLoxnTD7VbSa37D8zHExq5NNyPo4at41pjN9H2PBM3Pas6asNHpi7nGuN7p3DD8Gn667SvnmyiAemduE3Xg",
  "key1": "4dvhJ1CXWoMMVgZvQuCdQr5qzUikoRuhKFUtaUCyUU5PJGzShx7WFd5zW7VbHvawkceexDByBfWNT3hJMQYe44PH",
  "key2": "59DjY7e38X3zed6ZCbnmtsue1FM5ohsYCSVdbPJW6qBnCgtM5RLqn7euakr79tsXrBq5pvjunacWCHobkgG3zeyU",
  "key3": "32GXDMH2RSot2giTJN65LuKU7iATimvKsF1Zv2MnmQ8vAsSWtDn4yTb9gKQ5A3Bd279exTGAjJdAr8qVq3QzweVH",
  "key4": "KZLVQEE2YnKJB5RvvgoKrzWdKgX8QHnkFGSPKsoczKZAyBcSJubB5rVvdSGeaFeMs3TybSqhdcCDBGmWJcQ7TPS",
  "key5": "5SvoQ1FDgKjXUmnXXJJtNsCKFc3gYWksncVRHXz9FE71XZD6V1mDi51vphtvs6WzbLoQdryawvgPuXyebKBkuLNd",
  "key6": "3jxyo6GVPoY1ksfzGRpFFAvhHdX8ixHutEcD4mcW96zvGpBCNu3xTE46swQawZp91KPWc9PHDtFAN4GN9STNHvUV",
  "key7": "242i5rkighb1EDJUorJSYK91XqgeU1ocDDaTdQZWFeePeTpV6riXVdLJC8kN9MqS6ssNcUkaFDRZsHvLqk2shx9A",
  "key8": "38fbHjjdBbe8k88i5i8uYnXBxqx8e88nBMgiPpvJKVsDRhZDWAim4eFoPktK6bcPPXGRY23BG7hnrAyGs4L2k44V",
  "key9": "3D6BGkL4QPsJXp9FcsdMDjcvwK85AYw4K48MjU3H9BzdFxikUagXSLJMMvujnacEPT4L7EtueJKiAXLH3atB16zP",
  "key10": "3v7aLXdY7wxzQP2iPhn8RqYEkMpHyp7Bn6wrk6LkDNjvY1DL93zRrHAA5rHzCRGnzNuMEadMqmPQvoFK18bqBrY1",
  "key11": "2jVEwTpMNqNfcSjKWz9XAV6aSH6dAgPtHdi665W72rUhAPwHeQ7PgytauMnAyWYfPq6SmTjWLVqVCZ34AxQXxkxN",
  "key12": "52xcxDATJ3gjAsDd53LXoowZNxPM23CXCu5CNJxCri7pyCK5rNN1WrUMzDBJMserjNxPWEh7jazszYJgNTPjfH4F",
  "key13": "43k1ch22RxoViRihPVGRAmDJ6g443PGqVp44n8SWAsBbz26NcJThNn7t3Ud6zqoBSnGQvuY9AdcG8pjsPJBUR8Ch",
  "key14": "2mvcE7MR1SJAXZyRYxykWVbD6mgZPwVPxcVMGNB2pLAhaYmSJhLMjShHBXrdgAPkTHRGJzCEfCsESPGA38V8bJpG",
  "key15": "3JLkgZqq1AvNmY3WUewWwbAdPxjNa6qK49pyYrWkKrwVKbxin1KugBAX6ePiLppgKqpPfwamnfdN1bnYrZHBkW8e",
  "key16": "2W4cJx7h8xREpYeBFN9mbcEPpurfbCRzvzbfsUZL98Q8MLZUUgVdC7jsTKjWYzPf3m3wY1xkhWX7L6qa5n79T6Yx",
  "key17": "qcVJhXfDVKmRVZaiBmxs3uhzL5etEAyAsVCVuhJezr3KVee1e2x1g5MQH2EU3dQecLpXYoda5jieirUAwREpiqy",
  "key18": "3yy55q9gjN7MQumcCACGXDRg9eUv4tZzjAh7jZCiTKaUNTwZprvHgGxq19gnAW2cGaqTprQwtZMvee2dskCSxEAi",
  "key19": "3WegRaGBd7QfFS53tadz4E4nVmvcXgCW38p38A7rE2khQMoSWQetAYq4R37xTcPLJ7Me5sRYxk9HmPxs8CUQanGS",
  "key20": "32GLMHPpmqsgNntSS8qSF1dnyNComvidSBddqtSK6dkBZRKFZNzvVCQQ2AM6oVwHyuZWYTY9QydKKLSt6h8QnHsh",
  "key21": "3GA9CoVzTCn5tShJZ2ueLZgmsrgJyhcfeur8q9wxmcQMtHQPjLJ7Sjx4fmek5uCa7pTHheBrR6uvNoeaa1Wo7aBR",
  "key22": "5DDxxrn8YSqy3zRsgAr5qbj9UHxNiLT7DvLihtxiZvALpb9BgiQYbvxdapA1iXbdpZGebWvzsSgUk2wXBFoUVKFb",
  "key23": "3UGG2dPVJoJwYRzDXfDTntnfChdUATXKoUXkuyUEsUs9ZRXL49ZebfhsKXkRaErc8GqNmdCdfozjFPfZbF5igPVR",
  "key24": "3FTbtUDEUoSgUcJxNoVtcrvSpLSzfkLjMTchmTNDdZfiDL5mM1hKT7FYu4vi7AzR4AdhMxA4Y3MsM2yJncA11kcd",
  "key25": "29KLCHKVmEEREXqBgMYFF1Y2Aomaxms2XidX19diMuxd76uAJtDXmWTuc7VzpRrCegtnxXhA7t3eVC5PQ5DWoHZ1",
  "key26": "4C5BzjYyoQdWJeKiFfCET6tYb2bTgPxEorJZgWUokHYSbezkhqqfhyBk1kQffgWXdrfKNJjQxeaUNeopXD68Hhb3",
  "key27": "5KB5fubTf5gS8BhVjAwPX17zKVkbtQHazX1BXTwXJ8sS1VQKNC1s3CoEjgexcGPtkAUQUbVS2b9kiyPEF3eURUTU",
  "key28": "674EDGrjB5DT74naEy7dLGvQYyoHfnCYVhgnwwqx7nTCz4e3FR42bT9vSi7hpQf63yJCAc5zgkHf2jEsJUet63oR",
  "key29": "5J6AEGt3zjhmvmHWpY82DjeLjsK4DaTzTTjS5BU4JbPTf2DBQYutBnAwAhpLhMmuMfoKyo9BC6uWFYpE5JXrd6vk",
  "key30": "5wW51kJHoZh2RLavFBa7a2iTvsvmGoWVWCtDKqvfWfhrGRMnDJoDX96BFgVko9kH6vaLwTxq9SPutLcDWKJZtkgF",
  "key31": "2xcxRgfgVdTtivPjuKKfGTtCU3rM1yMryJKWUYhvjQYAWhrtedm8CVkRiu9mkrQENiwxCtqBefZ6c8eZn6NKZtpT",
  "key32": "2JZWKutAwuFgx8QhvEzKK65hJwBx54jwCe8npzwgRGzPpp7kkuqVENjbPsZMZu9hhqUrSCouQjYt9bHe6Lp7TJS7",
  "key33": "xcEQke91NKG197vFSNhGCQfnpYtwgbk6uowkTDjhgifZ67ijoKkACYms6X1fMxPFJuShfNm8a1eXU5nAMWVcRLU",
  "key34": "2nom8VsTjnSSag9wUwbrUrNjzDwmjGMNAvihgnNk9ePiLYUfzhjGhSbQzMxyLRxyRHgexZwfm3gDyaBYBpvk3yne",
  "key35": "3u96NmHAohTgkpMwDM58BJKcBfhHEc1GbeSn666BvRpN9Ccf3MjVymYzGxxfkNe96gzSauxXcVLH9RBVKSKHHHKX",
  "key36": "36E6qrvEBznY8vAsft8WpLdZNcTJjdTp9Vuir7AWiCArchCK6SdKhMLDZb9Zgxigm5jk49bhyLprejPzw9yic46V",
  "key37": "7r27jmZykfchz1x5qpFiQDGPQkhyK3Pq1LmsvnPgbXzbpgiFDFtZNor57k6mpuCrsBtv9ApQaRQ8SWbYKrEBsAS",
  "key38": "3EmdUsPLZB4SGQnzdhq6ZbieUiFcMtKq4iHCDkFj3RUHosK5dWMAXSSgXQ95gUS2cTNKZTkkvgA7TLGQsLRyXaCJ",
  "key39": "3sFSgUinQ8d9nouZBxznMrvapVjbC9TwRKXAKN36UiMoqh5r2DRUXUEWJnb8Lj7gZPteCVqw35KWG3geasPDDXsu",
  "key40": "5ioTCmfZRyUCbTbT6GwvTJrBEDt1R3jAtZ8SsWsydgqM7ZTKKzAkbtLcVGJwF7gAU53mYxQVvHZmyPD7gGAyDrTJ",
  "key41": "47fEPWB8bzePGxFMyajWzbrF3v5fpLbi9Y8ZoRPDeVw1sZT1jHgJcmYUzHdbVKD9tU1BmWkioasVqLgexkHF2Fhg",
  "key42": "5vbJYNRr34xnG9Q4WmcsnfEa6YHCi6LYpJNHtuQw5gmqeZKPxADoQm834QihnaM7puxyrPk5Nosw6tBmNuDSmcWz",
  "key43": "zUYsgriHYmyoFHfFq38zMPKgkEV7a6oc9kGaaDrM7ZvgvHBPSCjqtpJbf938cUR6itdjE25oPrW6nXiLFkFiFkk"
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
