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
    "49H4zeNGXPJtyuHCC1cwS79vDG8S4CjR7pAbkPyez746gSgZnwa1GJAVk1YLjd6YrBPY6qp3y4ng8FJszy6A9Rwq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UUixcoH22WbcPzsqhitrmhNR2uU2iEy366pb6oGz15BZqpnehnJVWVM75sbaGX9saYcL9SinBD9kbSMQBUauUpv",
  "key1": "2frXMubcGeuViNuD9AHEkSzy45cYfzpT37cFcD1aXBXjH2TUFvgTDLDPPPrnBqoG6HstKEhSvD26WW4xBktZS2eE",
  "key2": "2nc4wMBX21y6m9LXXVyYhuUy2uSSqG4mNMxwkkbRQb5GmRGZFsVwbd1kk8nfruiJcjoaKrbjJtXZz9b2PfeaeYNG",
  "key3": "3PN8vXQ2K1nGqM1pxf4K144G3u7AX8WSkQXwktzGtzR52FxsF1RMNUzLW2ZMrmPTRbPJskTgFkhvx5jeCkzc53vC",
  "key4": "38JeeqvnmnfC2ADjKDKhXFtFnXEGteXWpc2CTbK7xBCcHbE3uud72ZYjR3sdv7Ttd6iE2NbAEaMYVBFKFJKcPiyu",
  "key5": "5LGik6qMt8QqLiTsD5CtdkPCpXzzYh2EVyAcxHKG9QScYLVn4xsNWobrq3WA3xLiKTh5TuFB2tgDeRqzADiHavLu",
  "key6": "2SSmZRCjkxzRmWKxzc15Fnbqmt8cSZuxgQSgBz78hhUvCW2CtPhi4FJSJmpWkfooHGFnsnh8QWatToyD4eWaULpz",
  "key7": "54kuzNryyamBJNZu2Mh9ndZPJf1A7TVAHwLzYQfiJ7wWFzPFHQkTLiK5jDewsBNPLYKLKHeodeQABbRz82aVWyot",
  "key8": "2skQJKSEiG9QFcsBwo1w19jqchRTK8u5kGFgouqRorsDVifdMPL2qKM27aDadyMu3c8yPBtZJuEQds54oJfQQkXA",
  "key9": "ke7DAJTMKqyZDTgeDNu3dfux28mFbYYWosg1wwzFuLCi2HY1xSRwWCmm34Z9CtZHL3mfcN6CE7kpnDD9s2c7yWa",
  "key10": "5JCX2ap4UDxcQBuw4Tvrby2F12g4uMgzSdSyGcAGBUDdW4esv9oQvF36ckcKTVcNPWKoJEtNeNckCRtqaNegKsCg",
  "key11": "5ryejsp3yLFJmReoxSZy7i9XUPPZjERgCi5t8zqeepr8oGWqYpoeLnN332WM2VyzJeShemHeKMU7xGNrT7bgFaq1",
  "key12": "5PMNas3qAbE4G8m98Aoih2HPHBiaJPs1L7sL8B3uZfETqK5nqsjUoKLoAk6R6iL9prosr7CFdZLrGMLSR8duzF6A",
  "key13": "5tXSvR9YDCjY7M97QQs93RHz2tFdFEr4549woHhXNduggw8XyBPGy2CjvMiQanPxGRDLxhpzxm7bY1NdcwAe4mfS",
  "key14": "24R5h1vB5WWMa78is83Qwrgy3P7sr7HLXXDwbxH32wtm3SuUPLTMEPYpHwB3zVJ5R6aN27qKoWcTr96eNh4aGNnA",
  "key15": "3vohxLV3NXiPzmEzSLMKTzhBt1oysREZ7n9eoHnvHwW7MkUrAwFefuPR1jht2e1eJJhb2u3W2Lw6ZDCLC6ZFR4PY",
  "key16": "39STZfwdcK7wgwxmQUxDTnucZ1qEkDc1xkozPsn3EfijrXqFm3H6qBCoZbAm3hxZFEUJbQWD926ueEBVRMM9dEx8",
  "key17": "WdbUwcrBaaGj638wbrFVxcU5BZAvbRia8ScNGmyWYZaLm8JGfwmeEqw3hNCpLoJRJvi6vuHUdKEdzen33yPagGr",
  "key18": "2xAMUdH93XEErMGiaATW2nhYSMMZMdHD4sV8quqaxvVPoNuNerU7qiaU7NSB4REywVJGmLCWSiwa4r5CrJmFMiSb",
  "key19": "4pNTybjDaNopNodmTLdUsyaUH4yBZN7d4M88QhPPSq79Cd33oGhuU14JB7ghN5wiCY5GQv8kMTeN9CFJv1mRYiFz",
  "key20": "THvnnksKnErY6Peg8S2LTMk9Y7iJ4RhHi9KNyzoFEqDRDtCckwz65sokg1oqBEfkfNfrrTMesLeGGJs1A1E4PD1",
  "key21": "3hSX8ZfZB2DG1TwUKpPU1TwV2rCo8McdxpPXUQaEqNmTo5bytSqmn8Bs15bWmoYBiXXgxYqwm4UkUwogSyN3XYz",
  "key22": "KSX9Ls1LWcKk91XCyn4gzgakNp1pzTez5HzaNpDvtB6pzhKMDEbLoSQYHe3jX3c1zsMKzucogKjtCsTWcyfcVGM",
  "key23": "bVfjGSFTiYgExyWqrUaS8shqmGZkKehYWgssAdxw7EuBHoXHowf8DMuTGYWsvFUY8M7By9tAEMwxA9iBzCbJAJ2",
  "key24": "28brUmQTa8UcXUFi5mNJBtN2kMjRon3dqL2duuwMbTZPSoBhmCs2xHTkX2T4K7Yqf7Sq6AXS9YP1m3Liq4B7bEnZ",
  "key25": "3c7Bk92EMJpM4Ys754ip9AsRW2m2NkeF3Vr3KhmT4c9WVe4C6j9yP7t4JPxT9SAJzihE75ciV1oB472ia25QkyYw",
  "key26": "iazTWkN33yzrGN8fhmsUT4GnD3YaACXMqPyQS2UXmc3VjVXsa47b29Dvy1CaP51jtZpChUFnHQAEQoJRnmzgvbF",
  "key27": "2YTrMoC92sBcwjgmkmNs5JmCRbVCCt7kcinCsyC8sfvguBRDeRZ4CH4Y2e3dVJAuYMb94FnujtLv4WmehjcfRzyo",
  "key28": "4FuU2kPTB3ThGCbBRWRqHrD57EPnsegKQMUC5c9oHnPA8YfuFXw9BmF1t4FrwoU2xUeJFWzvSoQRixbw34RB7S7W",
  "key29": "ScqKsrxERSU26Ss2Ss89BmcRu6FEF5PUBMMH4AbM7ziSEofZiUsfKWfjZZ62DdLoDq5nW37fJLU2rerxd5zoSQa",
  "key30": "4umk5KYZswd3XY4NPfz2xGciPEq2mC5evBLuL4TEJRu9x1vpmYcTkqoTFfJ4VSZ5SQjLyxqHjjwAtnUMk25s9Usq",
  "key31": "243JCcdLkWHjsrsmzyfiUwXru5P5ritficJ5Ezzjq7uQCA6QLsn88EvL1fAv7T3dn5d37gX6vhQcoyBz7oZDjT3x",
  "key32": "5Zjd2R6XiDjaz8g7Lz5xm9Efxi9Bf31KVtBcWAp7KveXk3FsMibLhQ2wL1YN32Ri3vViWyNoA6YpLq1GGQAyNLRd",
  "key33": "2iuKxYp2QpoLq4JximuVfLtR6U4yVQx1jwFDLayw3poCg3D2q4SQ61WwGWwhqLVXqJo1HgkvvNMXH4QagBTiDKiG",
  "key34": "2GVXYRtr25jVHZrBy7Qfvvx3BVJ9hAC7mf9D8ZxSJnbAkCa7ZihAm2rpyKbtgmi41sjeigWBJPvHVQfFovVLXqvw",
  "key35": "3uGaJJWJv7fqahtgmnkQ75K1ANVRKXW3HRWyz47GW591h7wqc4PegeQqHRQTQXQjBfmQczopVJZuVx1esTCVZQo",
  "key36": "6hTdg3E2wUeWe4FXsNDM9NN43GtTJaESvSxsHJj4LKnFRjWZBsb7aY7B8di7AkjzYSHAqGqNEZQ3aaUQF5ZumWU",
  "key37": "397CtPmroFsYbgx1M6RKpWgVMEpyqb4iReddiWYHPcxX2WgbABK5bcxre91cFMUJ1UwsjSY2S4EftLgjYty9CNdz",
  "key38": "3oPT19Gdfr23oMueiX68HSnTyppbm4PSk6nxSZ9hMUSnuJWiTffLqkFHzc7n8nWwdWAaX8fBTM3sHaw52DM1wLLy",
  "key39": "2G3to78q7MApQVeKkEp9aUoJj1hFSsZ7sUdFdjrd9N71AwqESPzYzC56R7yv22PrmBByTWzb5YsJqHEYG7azMQLg",
  "key40": "5aPWnHx6fQHfEwwjpDakqYJQsBvtt8WA6sebe6xCy9QSthNstczrqKznPbTi5oKKw1bsD2xYpu5K41FVdBmnhDmW"
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
