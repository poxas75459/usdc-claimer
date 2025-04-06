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
    "48NWfU9cxjSaTyekwADivTFMcF8ZvpiqH7AVLjLjjN122nAT6pE7Z3NBYXx8szCNnZtaCAHC764eEqGCHpgSUwrJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rY2VMniXKmaz4D5NPsM9yVY4UtKVvoqUs91dN3dQHZnMZZ7Ma2ooTztwL973qSi1KMAm4J2x4J6Bpsv27kKGwpS",
  "key1": "3mB4oeYqxvswsfsJVmwhDEd97k6wKw3e4ETB1dAY458mvjjXYLjDeDPbK358fg96zbU2WzuhXRNQ1YNfuMgQLBqX",
  "key2": "2fPbC6odbAs7VW1qysLQAJXw1osVG5d9vwugUX6Dw6oELvbCAprsqz4WeStQxNbmKbFpax3Tib61Hc7kKk177DNS",
  "key3": "QQRMBUPjUThXdCP1Rrcne72Nn1USUMsMTiaBptUuRPjSYbUpP8kB4wQUdKanKJhwtiAZpR9iq5eJZX2Ef2jEhKU",
  "key4": "5q6xeGJZ9gEjqDrDfSG456dFxUoq6Hf4fjPXpTwWSx7FD1rUNcVeYnTkUjSY68nP6Au8dTLxPqQCD719QcyZuUan",
  "key5": "8VDsSqHyN36jcCdcbwFHEMR7SDuRZfZFWUB7bQrXDU6LPZQLFTaWSHUiP1RRxB5T1hg46yhiwC7C9DguQe7YJc7",
  "key6": "3EWH6NZjeiQ1gBnTXtPfmUJmSQVsUsMt3mWEmSouTPy8Rs22JtPFg4jf5qzQh7Bo3TaoD6SNKUFZ3YqnYTxDfNzi",
  "key7": "23u2Ye8ELEspk9LvDVpwXwBjxYAkA82mZWGjWqdrD5pLLecLz6EfJHMJBi54NWkQBaiU5iyJ1wYCGsoa518wAJqA",
  "key8": "3beZuCaNdR4oMbomUJwLXHxQPWErzJXW6m6r2Vavoqm8riu36GT8NxQLjThiZri1WtSsusZ2QsFZuwTajrRAhaLK",
  "key9": "2UWyT1i79u3upynjtAU51ghuitbhfgT5GhvrgvCVop4mbnApt6e1dNESnZwPtXGSn81np4F3Fxw2Vz5Kr4Z53kL1",
  "key10": "51fkC3LYkYR5RhgSY7xgGiT5CwYHFe5sR6cfZUnoeB6YP1T6s3oWF5XqyBUnDn5yYNkHf9ZJC8nnJKZ5BQ6SVysy",
  "key11": "4MsY1q83ryNERuxJidhk9Ss67FNcy4TSdMhfu5xdh6UQFdG3ozmeE1cG9tEi2G58EijNKVVUSSPkbGcwKfykPqJs",
  "key12": "2vo6uKzNzich29A8g616AfDgYzekMULT5fu9fKtByjRzqu7KaGLgpKWXgBhF7h7mSkLJjUaEqVkzyYdVWWEA2Xno",
  "key13": "24BPYL7CeViqbZBeabWqVskpAwYkzCLZL8TyMoogzvS4ty2HbpfaTXGpjNM8BmfFXNsz6v5RhZYsDy4MGf35Mm2b",
  "key14": "5RFw7sqjzeXz8PQ2Rv85wRfZVcC2cFxNBqfx89asYNTHgFK7XkcJK8v7RiwhqUfEVYHLqDPuWjxzkgJ3dzDiWLBT",
  "key15": "2vweDS3bBN9bjZ6ZEQMZ2honoe4zz7MCvQLGFzz1AH23AzmKe8MrrJzjDrXU11Z7F11b1qRcfa9Q4wjNmK2o2oMs",
  "key16": "eubS8JA3qyU9pigLLa8rLMGc7wdHP7gGhnxZa1iyDDFnnbszFD9SSNm5JwoUtWVPzJ2L3x1msN9UpCQr3GXsF1h",
  "key17": "2E1HAW39xHkvkJrbcRov9X6E3k6NK4fHpowQaw9PRUz31h4v7htyeHeFgTCW3aBcVYTFpM6xbFAAJ8Kfu5NdVwfF",
  "key18": "2ScsuWBuFfALLXKFHMsS1Rboq638LGfZFWscJFEaoh9JuoixJESJVwExfiE5XhNj6igRB7tStGne9cqg3SLkZ6RF",
  "key19": "24TP5Yw4y7uiL5djhYCVbHbonHZK7PRuc6c6vG5TR2L5gTXjGYQnJzPQv6zyeA2g2BspdSyqt2y6BjznZbfokaBp",
  "key20": "4ktNay4hT8J17GwdobMZvYUNDkUua4YauCbPeFyY5QCdEAT5aBCASPtWR2fjKKXV78y2WcsoQgsnVao22MoQgJni",
  "key21": "3E4c6KiLgvLMKtkLcST62z1dYMVciUTydZnx9hGs4JFLaiwUuUixXkZkDKAFYcbo6Yj3Ci3rZVDaWGb51Gz73Ecw",
  "key22": "4rJe8AwHZpULDe5dL7r6tLpLAsZTBJaJSwKgqHCgdo9Gv3bWXM1Ct8GokwNmNmShctydBT1XpSw6tbcUqUMs6w3C",
  "key23": "3u5aPZzXXK3KkRtsKT1QT8122dn45gKgsAZyr7dsygEUQRUK4yVmmsFhcGetX75shctio3oTanzxuWcCBjX3qnAz",
  "key24": "38Vqc8yyJtwVqGhf2Avs4PDmrjjwtoZ1Zt95QwLg5tpQ48nFWfqjJtzL74sW7A81ZeHoQGNViJz9PnY9qQZP1bT3",
  "key25": "4RCXJ9bHk3YiNrVAbhiEXTV2BFrWhX44N2zYiHBEGgxEZj34MFqU8EGzxPG7Yy5XmCkGM1X3THkMVJvg6NZDrGNR",
  "key26": "61J5edvTXJmp4e6xJ5qJcgaZzLiyScaJrZrK1i4yBzVyQ6eXwm3TrtzdEXBaDeWKEHFqCGiEm2BKxwwh2grvLfeS",
  "key27": "65cQmZMp3wUWRtSgPcHGmKqd99WdsgCy1rwU7iqiQME2juNjyJoHJSYAH2WQT89Jv3aFMkDbxUbi83QHuu7Xj1Aw",
  "key28": "5hhhRM3z2ofq7dAfKVMCZoTvvZahunkkyRvRTCgvTCDbR6xG4CdDy6N5wPX7ojUytbjrSFC7Uv4QKBLeYmQQPhpp",
  "key29": "25doGpM43HuLGWny11x3aiQ44bY1U8Ywo9KSZLG7fAyRpVcxygKoWE7F4dUinfAMueQHajfSYver76WhTQj1fyxa",
  "key30": "58sukZ4tJfKT3zTBWVmKoM5qyL28iD8WrW7BbQunVZp26D5PwbYgm3g6TMLnZY7tp7qgXAbyrZXwVnmDWci3uHbY",
  "key31": "3CuXqZRbVX2tjpVP6W3L2kT71ZGcbch9UGbLsKQKhzMLcMrsRUnntMPon83F3iDzok5sjUyLazQjGNfuG4RoDmQV",
  "key32": "2N7NRRV4iwa7Xq6qjcSwzugPB1tAW11MbewmDfVSSE2sDmahumdNVLt5rKAKcgthah7rRsUwpHxvRGayu3Gpd1gW",
  "key33": "5qsqs6qMjAWEZdnUCJt8gr9fgW6TFhASno7TygeLXyhoe1zo5Jg3VXf8mPb1pvcPHnTnrx3eayCp8C4LC2d5Hw4g",
  "key34": "2rQdooCsy6UapBst5qgiaNBgSvqEcRpcszuzmZS9xEKf1BFNZHwrGPAtR1P9Ejf4qaV5DimTqa7XfV8Gs5X3QoDV",
  "key35": "PnFHj9ktFtSgazvBPK2uunB7NkzjefaprgYQadw9JxAk36roZcMVqo1wtkBmVvRiR81yyFMCg7dPpCEKDFUrQ4c",
  "key36": "3ghKb2EfD4xFR17jDypbSfVfMCM62nsCT17TXaHKSUFEbiu7ChNEoMBHSq76dV3d7joZ1E9WZ7J62iAbFqxfJcdt"
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
