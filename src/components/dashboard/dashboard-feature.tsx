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
    "G2i3PMR3RjpKUFdcKgMAv5NmKzM3PvdPP7SuKoTTxr9iHUAShJJvm8k73VzBQraXX7Nw6u7GFCjprXhjdGW2WG3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ueqQuvRRJMDuwKmaTqWqRcLsGAJ7QgXGqCmq3Zkmv88wCTK71u7p1qEUBmFUo78JHTV8skuKrivwfX15JkgefiT",
  "key1": "2urd1xuXeXeziEoh8ZEgx1hhsWUu1cmcW6PSuq9zoV8m3hq7WN39cLopd9eqS2ykqBpcYD4KXz1HdpfaZoAXq1qd",
  "key2": "3B1WN6LfovxuSkZnhXAsWANv6aURxVCftABQ6xDqgBF7QxVzeBvfH1Ng7AMn2sYCJoXxqqiiL4nrrG7gQU3cNpHw",
  "key3": "3rNnVpgt8Fwp6kMRp3QUpR8n9xhKdNnFruuEzCem8FVpPAHuwVaftaFQ2BQ5nQoFYczTMb6ENofcLhTVmsxhaPor",
  "key4": "671QZ8C4jtWFbAPZGZZMD956QrEwjvs55ZykXp7EpiKGo9hC3zXWpwvVLit4cWBC2UV1hDQTtHX83VEGy3TLZAui",
  "key5": "4WdjnzSBhibKn4qBcB7iBXmc1ZZkUgW1fy3R1dxYps1XPLMyg7bjc1AsgrLXWSXDuXusfVf6y7Y9YE419vHdNHzi",
  "key6": "3W4q1Fp3UCsQ1JKtcYDtwsghQoqcvkzYjwLTuG1yXpiCsm7vsWZEcpMKZ4gYL3ghPZQ2veCtVDYNVzodpyjUk31b",
  "key7": "3S7YmEoBwQi3Hs1NdrYqPccxuAKCKHNYpJrapyi6SBXaWdDrA4hZjG6yHzVWvWLT9nsmAhDpCX6qFPUFzu2qewvT",
  "key8": "7VoSdAnkirgirwV8oTMvL6hQQHnmcxCxg8tzwMnAYFGU2GRK52Eh6MdqjAS9owPpC52LT8xSJE6hwFhZViDiqra",
  "key9": "3u9AP7yRfLMkv45kwNNw4CHaBuSfYGb4AviUetkchb3F543mS7MiL8zmqnPLmKACcdQyJKj5sqzYu3r2GPYjTwn8",
  "key10": "49MbSADqfjBGs1wjycseNmmxiNdyyEYSyzDQLDiBqm3EQQwqeGDeGeYRzrQHp6MTJyioob9ba7kiG5r85UrwNBy9",
  "key11": "4kyR93akkmMBHgtVBuJVmFobvJb1z3D2w9Yu31oTqQmg4kCvmbGzA9qcC533K2qQMu2uGoQcLexaEP8gYqUJvcFi",
  "key12": "46PYhYqYhMV2d6aete9EHd43DAo4c2Y2mxVpjnisDciHwWDM2thPMo3hYC5F1zjq1f514Pck8wo5pYkAPwwNCru6",
  "key13": "2L6y4KvCpuFDECcerPnfTpYN2U3P7WmsLhautrN948gvTaaGqWisKnbSkh5T6RrKghUfHTNqqjYyu2wJJ2W8D3Xg",
  "key14": "2yT5Cp23BJYZXWg5MGheoyDhvaAKuDQtWSHsT9VdNj8RSxr6eyCQgvA1i3x1Wk8CbxikKTDP9AUvjt7j7pv3dFaY",
  "key15": "2pkdQ2gpaon9d9L9zfiDAcz4gKNNdh95oK4UbyTnEczW6ANNxLNgJvYF5Wv6hE5h5GkTZDM3onbzvCeE9cE5K6js",
  "key16": "52CF9QcoCXsHyKiTHwJJR82S8ZEjyUDgSd7qNfste6FGdd5RCn9KuSQbxWYm3gjKEs4kLwxzqnpjz59ZywC8PLq4",
  "key17": "5zeYrAL3oH4ias3ndhuE1woeMRpikcbiymmSF4fnjmrTzQ7Jg57cx2tipws1FgJAjGshavuQXkT7t8ohSA4mmcQE",
  "key18": "2MXfnwvCC2VEo1Bn3GMQUvKMPwVQgc5Y8QLidMLfnYg93vr2Y1LSGSjfVNgTU2WSXpTrLXc5me4FNnWqN7DxUXcN",
  "key19": "S4bRL4yhNKpibvb8XEBh8P6Uphz1ZEsEb8YoqdRuo4JWYdpuUxf9cZmjQ4nESvrvwfBmoEZ3e7rA7qxAXF2oPDK",
  "key20": "258eWRmj9FGxYr827gDgD1f5QjqdEi7f3hEZXCbA2uoiBmhvpFxaYYyy9CvzS7uCrph43SLLk6qxMzpp3f1TGnFF",
  "key21": "2wxo96o54rkpmnZT1ZDdxAn4T4d8RrqDsJgtst1sm7DsR6KvQ2E2tHUzDDKRYZHSrGn9uhAKkNuDXGn4c9oajwXr",
  "key22": "2j1SqDZ4XTBw2usQs1sY4Da2jrpKRfWjNxe8VtymM5LjJhqGhhYdpG4naJ6PmPAo2veYJvmxVD4bawarSchX4g4E",
  "key23": "4Lr82RJPKHENPjGS7mHGC5RyK7zb16KWH2y9h3ipJLBMMwNjz8YyRz1c7igauerEzWov7LB5qT7PjXDGN9jyboK",
  "key24": "2yrRoBUGgEB8vd6dzDY4EbH3Ak7C15Tp6AWMHqfc2df2jwV6gkgii4vk6ohyC2BMDXBWo4Hs4AkoFh7tPFbvw57h",
  "key25": "2puZC3NSt6eDTbdg983MksG17xqFkRBqtdnwe1iynhEuMBiW6DUUQcqziYVaxvCyvMjJ23Ldcc2J5Ku2KfHWFVrM",
  "key26": "3r9nScqshWvsHVT8TnFGjWaeSJJ2enb8psHQkoC9HAAqWuWnfdYQQp6H1cK6aGsUeAM8ESHWG646v7vuXiE421Tk",
  "key27": "3gGh584EzZ9x9RutK8qdkEioRcoCY8Cob7rh4PvT94FAvzSs6g3vvGbAxr6gYMY1ic74HcPUg2UfhmSJZi99EnXm",
  "key28": "4TeD93XZ1FdLTs4UKbtsSUDmjFwdHRL1WsEA3A8skm59jtvGHSeQhiRkXk8nLpa2xMzL1nJnyJGz47M1VVwz9KrU",
  "key29": "2MAptrVHrvxZU681FR77TbreaEQK4a5FvezmbvkZktjRgnfb64HE16gGVXuetGmMwwHoivv6urkAkHEUmtUxhUzo",
  "key30": "2fEoUVpQogCyq9nsUuBUU2oATne7bw4ypDCpQgq1EDWV7HJRUUxfYvNebLE29SnhP7Mez3JXeeN9qPoR5DjysMAN"
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
