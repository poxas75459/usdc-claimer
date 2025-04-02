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
    "2KTVGHoyctVkVti2gGvA3sNTa6Vpk6c5eByNzkR9u8BtGroyq4EW2XYCGsmxqD8c3tKrFgGpXN8dGAn2pLBNYHRY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LAqgdxmGSpZnqAt2cgLSComcWhwaiKce6Fcbg55SXxFBeWeaZieWaSdmUjiLmvFMBY7n4avt1DC8ZdBcFXMRNky",
  "key1": "4GFFnHj5NTBvj9efyU9XSdwTxYjytkp5nwRDeYAUhsW4gMYibiq7bZANgZjE759woNYjsHa3XiE4HfC1T1Ldg1iT",
  "key2": "Km9FvyXNz23F1f9ZAVi9z7ZNGoYbrY1eBVS1cnRte3PZaUp5Ron2XNpJRXD9xtEtSYR8ArN4Ejqu9Qvn7BvQy9o",
  "key3": "4CJxy6LzxBAZvMVAFEHrocTcvoNUSv5y2Qr51ZMTZ7jNdLHVYe6oEruiABUNQYaZy3QUpyz2UrdUNS9dCwnTg9tV",
  "key4": "sdxnYXbVTGp93bpK8P7pgHsgS5rudYGnpTra1utQWVhieuwCk9YCWXdvBwM1B7tTDb4wxDzHxKY6F8h6y12BQJC",
  "key5": "2w4ECe5WfueHoB51GFnGkUccyDaWab3mp2Arie8A5bdm49oDgGrP8wDyQLyRnHP7E5NGiuB9Ko3jcpP9BEQ4BmPY",
  "key6": "WMvnz35njBkrEkJXVBwZFH12QJbLBkH9ZTfy8FXX6GxGpz145cGej77h32VaYDdKXRKiLY4Z8TSLToERFGvK279",
  "key7": "2kPez9LmohuJqRsX2DLuWXvskhx4wzHTuHsZGrPVzWtXZGiY7Ms1ffxm7QiRAKK1YjK9YkHVfX1Aura3ZgDL1gSU",
  "key8": "4HmaErHPm47T5xPrWar1e9gDw2s9djQfGd7GpQoUTmAGgyzGzQtFCoqvLLDgHoFRs8pXtr4aUNmPMuoe6ms4Wak1",
  "key9": "2RKuLifMMud1rKmZvE4QSB7wcrtD9bGQHoE1tteLZHHwQqLBXdGXBGk2jdG7pQwBF7PBE5mjMronmQv4nmvhg3rz",
  "key10": "2wiwMLpayR3KpdRqbNfpZHjhmbCaGZhM8MHxM6UQAaAid3FRTyBKNyYJJ8tdatvK8qXUCAymYd5JMnWupkquw9C8",
  "key11": "4S6321CNrsKKXn6qDprjH5rmWkfiwbYgvM8k2Hc1MkT2hRMaQtEdJwkqSe3g7v5hmFYiZysVGR3LKxsUbXM7F2dD",
  "key12": "2dN47eZs7vYRjMnr47nZiPFRCfAALKv3nMP3ak7K5bB9rEKUToNGsm6g39U6e2fwBBViBVb7dMAnv9ysZf5gxHEH",
  "key13": "5m8x2bj4N7MQXMxknUikam9UUD8zJi3gEPoJPjXDErJTFemE2iaGXtpkJT1EcQC8xbfvSkoesCZMyd8R3Q9rihkJ",
  "key14": "52dgvHuoakvYXjsLdV5CbotcFuSHQkwUeUQ5ncXwUGbcRWiLbLJf6fNgLpSxCdJktgFzDN3A8Ja9Psn3rppciUYN",
  "key15": "4VNGimNKS75WdnQ1biZ9rQRSJV3xA1qwPyNLKUdpoBmjEt4RecbPxmPCXq2kM8WGcPApYWAk9m4QmMJ9LNkJ7xnx",
  "key16": "2YMKsHGxaccvDgLDVoFw9zwmwXCYJyeLG57osTPSYqcimoJPe3Aa3DpyjgAyykyu3WEpBnwX3CedRUHdqKu9f28j",
  "key17": "2fhy78q7LSoBELewRmmBRbCAqH2iiBwx5XhEysQACMQMDPmaB56jssUUcvkEjw59cHhYskXYNFeHdvfGtfBJBr1p",
  "key18": "2riU8dA5NHT5btzPkxfC3Lknq6iGJKr2Vs9z2tNrAyETLp3zRi8mZbz8KayESbjdyBtMmCFSxCgU5H146F24pktF",
  "key19": "3FY2em7DiwT2KDEDP3riaEwc1EKymFDGaVN2jifQuQk1GWjxReobdqxaa1LhaeAbMqKMarN3NFaMmcypwi3V18LY",
  "key20": "4e96jxetMsXJo7ehXfAYKF8evycsafymuq8hWdRt2KRGJdyHRnD2a4JL1VQkgXsem8eJuiueNMcM5WnBxazF6bRt",
  "key21": "5PSA7HbVewAQAd6mRT7kLYYLmEyYzo92Hhre12Dmu2B1gnx1gutUupvtVNJXf8qZqUJPwUs19aorRugub7Adto1R",
  "key22": "2M491srEQ3CBPJpSpLPjdk8RJPuk5fLXmrWDAKJuG5oytvMdCNjcaUmUHtV9jLbR7qSTdTMWEngWS6Cg33FH83t",
  "key23": "3wEHGf5DeuuQR9bFHU2NnsW8gkTAwALQ3WibTxYUNk3pP17ok9WtTkUQePQxjDS3JARfewRJsxrhDCPWqatsYDnJ",
  "key24": "5L283jeevFQehaZvhXUEouLvWos5bwuxAcKjeYD4BEduDiWzBMzweqwkFdrg1WTDhUzncYSR7DSa5cKSgNyAFsLo",
  "key25": "5RUmGHCkVeXwPwsqrRkBjPVrRRmAqmBAuYr6aZopYSP9Ftx47VPEVvE9AvnNrcWysty1kbA3CxhJMtMEd5BTD45r",
  "key26": "3GPFxzbyh6W5YWDhRBcjZ8RndKZ3KUuqYyKeevwkjt9RoCkUHsN5MNnGrcKqNqaxQpHDmzQJRveL6myQeEmmjYzX",
  "key27": "48pjGuWDM4DBEhDHWAPKEvRDN74CTkjMqjaYCmvUmmBD4Mw2kpSvXTVGC6RiemyPtg5Dbi4Erqrt5Xzy7iEwbKHa",
  "key28": "4oc6ezcRA7wwUJmbQv1A1ebpMgrMMwVPYUmmvdt5zTfjZknzhkd2YrqWkwswNe9kNt1Hak2KmyRhqPFd24RMN4TJ",
  "key29": "3ZA2NfXodENU7GBGeknPE626whypvMTWKngsfuFuHKWwULUGmErFzTyrG8ZS49y7do8JgBbksnnPmkQiUfy6PrLK",
  "key30": "4XWR3SKCAyggMmDx5KoKL41H4sG1dzxqch6TDS7pp5pHEymYTVkfqEnF5KJwWHXqcNke2JMAArfmEVP1VMQ6gQxj",
  "key31": "4iA7Ef2HeyTpdhY3TuRJmv3kW4Pc17c6HLnETCmHPHSXj3eYeiq1AiVYroCacScw41SVguB9B8zhisV73fj4xnJk",
  "key32": "fdtUEBq3NNLLxwUCsbrPVH1XMK5yTgjgHrgWWdsinU1FrnrAyhYg5h2cZ8yaTHcLFANa3S5hfgrHq3KXUvC7r5Q",
  "key33": "2pjCCnmjqN5qp9ZjUa1damFsR1wUHr8koTgSZbq1yX2GzDn5p3te82HAkB6Qiipj3TNEcH7BvP7F8CoxSQcjzyQG",
  "key34": "5gW5uRbosS7zHJAxkWMV5FZHhVX7o5tGUSgEeCPHeXDane9UdUiVEaaLAPGmtBEQL4ui3UZzmyfjj3LrkpQmaZzf",
  "key35": "mZqfLpoqumxUkinXsRgCrLXLhFGf3uC5yTjxX1nawV6wm4H5QwzkyPx19KRpbz5kh7iW6a7WykcpSiVcgpFwEWD",
  "key36": "4FFpgopXjsUsw6o81ZWZLyhPWrRQTc8EAZNfqpuxWBMK8iPKqWk7EckYK92YNpjceMChcAuLEaNocHVYzKgFF6ou",
  "key37": "55E9U3N1J7PDQ2Qu5RRB9XC2Z7HWbfcpkgWdEcZyQZxvzARdLy8cE1w4Zj47YNeQXESiJsjRKeGHGjohbE7vmoy",
  "key38": "31aUdcDDkCSdzUUvdszTHszc1Mi4syPP9afg9Lm9Ba8qJTgo8bhdWskfHujg8iRUFEj2sTsudjN4GqyqyqDrANqs",
  "key39": "5E89fSu6epT7GY7CM4Cro25w4Lb8c6kX9SWjQ1sxyyvR11iqcQVFFvqCFoWfWgoF9vZ8iV5SXvss3AXcHCDJf3wj",
  "key40": "4o4DgmaHTtuMzibkesBe4imjcqTEar6FcNuUoTQRhhBxZXKox8csi97hQfmaS2m6PDijTVEVkEGnVJUbTbidqrWt",
  "key41": "5iBeJs4yG9JngcJC75XRcVA3cv9q8C23zob7RqLALERmPqTfrjmFLgqZNqJEye8FqmC3WbtboLkBR9Mo2UTA6BD8",
  "key42": "5VB9YXdY1pBttHymbJhP59GQxRmRZ9MDg4y8rAj5d9yTGdaB75guVbF5ceZmaoqxxJqPdV8zyAr9PiC3X9ayRMFy",
  "key43": "5n3sUcELAwhQ1aE6muZGkDRXsyBbFi6Sxq6bFV6f75KagVff4mRcV89R1KMTXEjjEpFfx6CZDTqBhPCpYvqrV5Lq",
  "key44": "2EAdRwf9S9NsMP2Bny8ns7gVE2gQdEKv5jy66ynfXoGXPsX3HqipSDyTFdR7JQiBrRSMCnLaXH58RyhipBf5yoyW",
  "key45": "Eo2vBtYf4JHvi73MYQMxgx5h7oXk7cmUrRhDtHezVaPbavsrRXzjtAkm68F8evBYDgN7KE7rn8frJo9Yym5yJjr"
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
