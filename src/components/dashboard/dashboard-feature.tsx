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
    "3NUAq2tTBkf3up4UcxDeBSwgpU9juPnVStrT2DrcWadyAhP3PbgL4VYahvzBzdPdjL6rs8DJ1HAk652Vzjd8xjnT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vNrEUqdzTULTTbg5yD1prEikrSgdgwDxfCn2y6W2Bi9nDqbEFS3J6UjpMfMbEXG5UCwBW779d4K4JsSBFScbedd",
  "key1": "5KgiUYaoK1SZkMSVozPavsoBNGHMKXd5uX7ky5Rk4BYunPVeWSPYDBMMfWPqdRgX1uaShv14K8XJeKpCV5MNXNRz",
  "key2": "4sESHkxUMVqJvrKJvmA88Tm42ECMKYs8vPPmbr8QEytibA1P3VzrmRzozw83MWXiyfgi4XkEjCpQfxppKDfnBEG",
  "key3": "3EKnLtyYD1a3c65FsGetMTv33d34BgPB6sm5V9Mnu4soC45BbavYKdEkThj1YMhX9V6gUuoQpnFKrVsVnTons6Hq",
  "key4": "3sQvfGkGdX6iCBkWALGenPVqCX7gauqPAn7Uu69LeLt91cfxKY8oyczhYxu4c2DvNeQVwNaHmwFh9EvSTaHs42YQ",
  "key5": "5wRNUXuFN5DnXHHXqMi4CBrCqgooo6PqFtyvcboiKGDf1f4c4h7sYaFY3sKN6nCpb35SCxRTsqo5Ur3Zr3zegNiT",
  "key6": "3cQt6gKpNvssxiJmqjw4Ky9c6NbCwn6ZnVNB9XSstgiuoog2nvFysqPi2vuEjYVDYXszqKd24u8vzYwZKws6LqsP",
  "key7": "4GnZNET2P9dEgcXg4UXWbDh8FFf7wWqPBfm7XrdNDhZVwfFEMowvH7L8Xj5vLQcj4qoQHSD163SuAosrr8frKU5m",
  "key8": "67ineEsu4Q4WQ3z1exQFzXMfY3JrhL4RchmfvTiRyUAgBPXwHVMZwGQnEdXsBbCdmFprEcQNcVZmP7PZRhg2PvxJ",
  "key9": "yP7FTqZAuMEacmoqSX6fND1f9tgHBiKnHVGWmqmKfCGiUcXJboYxLFxgEpvYgHaWCkaPio3mXYXEThrp4Kf2wAx",
  "key10": "3qaMJHdvp7ZTxo6oj6vPT19cER2TWbDZ1gpM26p8FhZDS2QGCxE4A1uzKg2TQTkx4ZbVWUZWH3DHfNW5maJu4946",
  "key11": "4RBie2LFRe28rLq5qyxYjPPcXZMQHQUP9Er937UeDtgn3EF628shpDcn1DyQLHiWxKCSoc3k1FAGQvXETmm1hAc3",
  "key12": "qxiX9KzwLNKvSV35kZvt8fCvAfr81RdHGkremMxCHp56jejd1ThZ3EMuLpMSve293nbZKSeHVgmq4Kb6sGE1FLi",
  "key13": "4czPJxKwQej5LFPbYnx5LRQdC5CkafrJ2ajGKimoBN8uRAogpJPK9CNqbQH2Z1QHJMiWJrcVENroqNA5P8U5zxt5",
  "key14": "64fUfnZjdrR7QgavSuoiKJmzPakDAfZQ7g3ELRPjPYTFwdsMCnXsyWTJnyTHnMY83UGd6cq99spJhJA2f6HHNj2S",
  "key15": "yVVnpgd85WEhLoJtwgENLHXp7xgYRC7Tak8kEXUeJS2odsM393gR7k6f7pv3haZqr7Cs23pKtwsgBSnzouNvLC4",
  "key16": "62sZFt4tRkANk2Dw9hLtZb4uecaJZBvud1DQBdGHAKt5PnovmksVFdEqU2RdB35CTt6PCQhSSHNzWYSatB8ujETU",
  "key17": "4ukzQqwN1a8B7FxBrrpvbFxSaob55eMd2mMqNLqbJso4Z95b3Uku5b2XCh62VcHs93SJyzegKGghD5ZG1LmggNNw",
  "key18": "3DMNqvvwpV9dS1xk6dBwETvfuASJ8kzob1RsRBSEdgv4tHh6QJeHK7cHM9NtoYBip3VgEnNnJWvfCogBZXKPqgA4",
  "key19": "5F9LDVHEz8JaZTW6tJS1HZEAXx4P3yBWbPymfXoB4uJqeCwLg4PpG3kk7wP75nZmj7egtyqeQDcEtbLfmx6fBvh7",
  "key20": "3iygbhh7GARxtAF4VHt4dFXQqufxoCjzTT9mp8foVA2BQ48RPR3mR54UdTBossRmard38eY8HChkbg9DaspDm4un",
  "key21": "24fQeSo4eoHpS8z5KozKo63EPn1yN5W3XGWi6WwdrWcLteDwH8bMw29VnzXhfFmUh9psZdsgfp4kNtGUCqvgiKB5",
  "key22": "3h9Mb6racThzy5d8AEHqJVUcnK4Q88eMHCkDP4JLZswdAi3XP6fRLV36LYKz2bir8i6V8aFX61rvNZw1qB3cFTxo",
  "key23": "LosrYMhaecxafDtYoPpmzicNFjuBiCKJfekD25KryNQgEQyBS1g6mfB2kY3RDa1VnK8wFzWmQ5nLUdeQmSEGT1N",
  "key24": "5yjPLhqpMgQUCSmWq4QHG3WwVoQmDoZr9XjTRtTJZ5a4hzo8vSyLEH2YdQ4ABpMAbiVA4CUw1RmSHyGqsQA89pnm",
  "key25": "3RWGnH22AtASx9MgzzXkcJbgMqGPxQtHDFVvFTKZ3pDFEfz5cYtpBNrKVwS4wprntxs7Rk9snAEvWwP9UKj6xFzh",
  "key26": "62paJjWiiFs6ekTT5btTLmp2UvymnvbLimBnLacJ267ZsdS4HwcWkzx7wYtGjUKRFYaiMUZuwyPVP5Sp3bpM4adY",
  "key27": "4GFWC1Jk96jKN1N5CKcBxXe1FwKeDYZNEVnrBNc1Eixk4gt7bodFGdZTJe6KLutkFP2x1QHwzMvwY8xf7dbPsqt6"
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
