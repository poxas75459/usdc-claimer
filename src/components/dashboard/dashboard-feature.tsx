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
    "3AV22fZHh12V1ytxa9a8sTtHLMqf54MURDjbtJcXaB9txedHh4hXjnMnenYUCqYUf3HWewvpY7sZgZsdmSeoQjHZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xkG9z7c39tdmw6Hd2HeFF2UaDUgyPikckZRG82LNoZf8GzL7x48GeykoDDKAoVNsnHRZ7Lrv5SRSkPHkvAqyoDB",
  "key1": "Y19Pwt6iPsDhfLWLHkNuZoBSyUg3KVN7Puq7Ugwgiid69prsQdFjRZiDFuh9RSpBXXeoZpqLWCAZtVnSaqCCbUV",
  "key2": "5iM2ovN4ZfZ3YzoKjQY3mwC3HHQrzXHfghsfWKtPsrCrm8S2UiGmMqVPj9XDaunGuCK1hpGtAbpshmWCPLxahYrY",
  "key3": "4pojzqU24yBY9uz5dXEULc79roDzLwDABSz4ZGy4nTeYcCFZSoTmN93xFHRiZ8GYLst1y4ku8tM7FMvjR9n6BW1b",
  "key4": "5GZiteDsqKUAPJFJjLjkUiLrn4c8Lq12zogCadhsUKj6RuGpvsjUURJ8mDnpG72nJEzU5LZAZACZyXjdLgSQi4Nd",
  "key5": "43jEHbJz89dbBGupdDN6cRvGDCXyXp6xxRo5Tfi1Ku93Tuyujjbz7LzSmwEmLZJxvFgcCFTcZViYVZQQHopFv5Ct",
  "key6": "587Z1cgwfRiuR4SozNM1LaoLQjDSrgCpJRTAm4hR8jBB5kiJRiKWaseNQH4ecqxJx1BD1G5ZsH1FiMX8Rww4a4Uj",
  "key7": "5zEptoaJsgLtVJzELgN29Uee8mx9NfGWjkHM8yWnx4Uy7vp2WBK152vJHvWPAabmkmdNPPTUXZozWBQASzLumTiE",
  "key8": "LtjUzfa3iqtA9Hye5sKzBzvo1AthrtPwxYSv4WfErxSCRYmwQxhite38DAzicBiSjEhq3bvku59tZvkKcbB2ENL",
  "key9": "2ZXZM6CPahL4Nm4uVPF3ZMDFP82rc6u83EPV11ApAyJ3frYApba5eQJEnkSkiXpm5GJ1457Dteqb9rvVHDmhFTov",
  "key10": "3fA3nPram8ypiBd9Ve1uA26X3h4iimT4SxEq2iXgt4soZZNyJmZuofXhZctEPow3tUEWrgssWSqYEXhAASQXAgX9",
  "key11": "5bte3K7CG45mwZQGr9pK4VM2jJ4nG1pvCYLoCXffHT3EHfsczgkfwDvypg1bhognAfE5QqTh5PcyhPjVNZxA3AZy",
  "key12": "2TDeA8XizJeNhdpQP4UwFGi9WwcJ1AHXpGWQksMQU6pJ4jFjz4qfRZVy1rV88VLnkcZ4xAYQh15u88Pez7pstmwZ",
  "key13": "2etb9tJ1bAbv5LiWDLzYyTYnTwTQveLx3CWMYYo5Z8GU66tPLx6atqjCUuFLiQmCAKzDPhDBJJDqhdfNhYup5uPo",
  "key14": "2Q9pTXcGqMAMbiQBm1Jdr4bjFPXSgVbF97e1oR4GCdipBmvR2jBGBZkgbV6RHwb7cJjG6UyJu4BsCa8epPN8nA1Q",
  "key15": "5KYBpWiuURqorxQPiM58rRPKJ1cEyTBYxhBhHi8dpkvdRDTjuLbrzT5ibPm1SURjV3NNMpSfmusMkuCTnWxXc28A",
  "key16": "3EsKPKWvozVRSdXyqMQ5mGQqfwPKs59RjBZZaJzxtfFoZU8yjsT8q2j6Wzqq4M82ascX7zsxyYWAu2Px9DP4C9Lr",
  "key17": "4d99b8esDazCQtgYCVeX2GvZvML7nY5g7DwV1hQDnRVQju1jDjFk7iw1uACQyGEHYcpXBFDrFgjXDhQ7ZPWRzTYY",
  "key18": "pFc4ZDJm1FDdLHXdgXcv57LQLfDmUPXh4bvXn1cSh7GNgW14GW6JrihmG1xPSKeECBD6ejUjxsPrAaXkHskesY9",
  "key19": "2fxW84jhqPG76LjbYfzsB7Z466ozmoZKHD5TuZXSJKqqxs6EJkGYfrDtjnWq4iAgAn71YeRnmLrsXAvPTZBdVa3Y",
  "key20": "4zLadDuMfSmcoiSWNLHB4uMqp2Mx9twZKi2QougKnLbGVQddSPJkDF26jJuVo5C83UQTpVR43mU3HD23PvfQ886w",
  "key21": "TFkLWECVTmS3YFRHqrwrMPXWZ7NsBgeFK6Sfdjtf5BjYhuv8xMADMQvrAYxHALfnm82Z97s19e9TqbungFZPh6K",
  "key22": "VThnrdWDcxryifA98ym1xi41aJLhHTTxrLBYNd1r9zbq54W5VC3sSzfCZX5vHjSz22PRdyDPuwbws7puHd5qArJ",
  "key23": "24YteJQTBut5kpFdqWHuRGMtZ9GjMuU5x3d8kGTwsZLVmxzHgUEZgXWAtyq8LmJk5KrZEVnBNyAKerTLEopaWhvP",
  "key24": "5rANY1SgzC3jtYcpXGXtVhHYj7vVj4MTw31aFAAinMRTRcjpAFRQNrDpyGeaiZEPDBp1SG12vLxGcXjmjKT1kjSy",
  "key25": "5b5ptBtDEmMAVdTM7xcnzWWL2VPFT65c8fWLvpdVZgNLSA6UMeepqvnXMehoixn1zS7XcAaMttB7yPeQ7fMx121a",
  "key26": "2eM8w7PpWbQuYPqJvZphv45zYEzkSM6n8wz99g9BsAtVE3HdFQUVW3EMj7BEvo8horDsUDwdibAqjPN8gv1wGx1V",
  "key27": "4cQjTpoK1MeBQnAuGyTqsoat7XmZdYx91EUq1jfxBSCSDxJQV6mXkfj5kdHfWunEs3HJE7vXzjJ7XtbF5DnSHGRF",
  "key28": "3Rg1h7bmZGM79pMSFHLrC1bunYXSuQbsZRY6spjrWUDjr2Jt1W7EJmZ6Ye1XS5Y8AawAniAK5goLw9pbVLeibFwV",
  "key29": "k6hiZd4RpAtD5RtH8rQ199vMtrx7LJTGQwTyzBPNvQBdttsQW4hNJGbC1Nx98t4KVENARHDidLV7Rn2tMSgEUDs",
  "key30": "45cw9arxtG1V3LanjGZYmkgbVxsMJuJJZXRLWpMX7uoz7SJUHfY8eiD9CfcSxGdoHmr79akCsmkqjMqARq21gjvc",
  "key31": "GtbimibcZbTfuL1Yfw91WEcCY3uCmkCKMfWq4ZjTMzfvEFiGTJVix4LeXB82pY523FdifLvVqrWeApAosgtvc7r",
  "key32": "3KAwkzrEwpN7f1QuwVR5M6HavF4GbLrHbj4RvuUD7nTHUXeigw1ZrpwHffZnip4HsGWoEtyXjGr7QvCiPjryCqoE",
  "key33": "5jhTA9hhao5cCGZtQ4gr3pfVxCm2pzVe3Ts877z1LLv6d1U8SGARvC1djbtjzyqw3fXSTsfaQkditUqLQj4vuSHZ",
  "key34": "5fots9raSCRbpvMEDsLuLPW9NXNg859GESgL8Ekzn8gQnhMoZa939rSebno9VVpnk4NUfXwQ7DtGEHzDst536EJN",
  "key35": "EV6Dyvvq1fvC4YiPGPL4uuU7gEFFDWsLbkruVx2HBGF4SqXbNHobUUGeTEJmQ56Qpcxg6bdr3RtfPnCG6dVDbWq",
  "key36": "or1hUQawPGnqXvCjdNHgCH2TkJ5uax8e43cF28nZPyG7tbT5veJ9fYFcZDYpNqUXHA6uQ2iLt7Z5GgYjwohouQN",
  "key37": "Y66qNi4sH7XY2VDqbTPk7DfXaqSy5TvGffL3Pi5AJB2961drMsJLCyoSYgbYLvir2UjMr9Un29V4no9f4XfgD4e",
  "key38": "sV2ryS2CxLHX21Zj5gQ7pPFqzvHf2KxjkrvdgUPQR4XzX7peWKouqu6ycbos64bMy6bva1XawKxhgPXUNomAMfr",
  "key39": "2TSwPjKNPbjkZetRHVV4F7vKQYNhZxsR9NQNfFW2kXNzGt47oKuv1U7Kn5nR8nax78poZQZzmuVDAz2MEEsrym8o"
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
