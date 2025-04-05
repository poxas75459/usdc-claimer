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
    "5ZTjDqzQ2jTPS5un4fsRJaew7QXSJdVnGguGr6xzTNSmPuySHHLtaCXgo1RReoSMFwNgA6QFDRDpgZ5R22jCu2jc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JXPHUNNhtCMG4h3J5jPecj75n6zC8zwwxUBX7NLvhaa7LrMaLLPPMZvEbspPeYt4vZs78QHeqT9z1DYrf4jJx45",
  "key1": "JGKiceC7rFvEctkHTThoMpUm4vXQK3VNANhpZLuQKiqEGqJKHYugUq2Tia5ijoFtjBiGBKQVCyKxCo5ZwALsKUo",
  "key2": "3jHUdGyFAEDm3e7yqdDdR2LBD3eLc8LmFQhAjwRtpPfx2szSpLJcF5PHKQqK31swDX9DuvukJ8jTWEqFM6pcAciN",
  "key3": "2foBWto2z9PQU76dk7VwttQFsM5xbQAjaem8s5xGwaS7VpDHzqErJykrDvmu8EPvGXmAz4zJe8EBEeqMWqqERRoP",
  "key4": "298akCSj4VcFSYq9ZL3JfHS45vTCLUU2Zue7gj7bcDtXjSu18CeH8XgxKAhGVHoU5DhDEYYN9yyauQPsfJMHHEmZ",
  "key5": "2Gnny92jmjWhvURNrq3ywrNgFgNH7ds1F6P7JS6brD5fHx4WREKkp9KGg6MUk1rYEeZpVi4v7PaUYVFDTMtNNTmN",
  "key6": "3PNjktXo9Q4v7pU8yADXsGdcRDii3MHEYvcpbDrxTLifoWVMSdpuhGMmiv4nRWfGDsefSAEju1jzE9DKWzn8dyGx",
  "key7": "5fvCwJmMCTLKhYtXLMRpEcnozLjGivtpojPo38PWc2tkycpMz2FDSZC6jZmJxcHURaNce4i7swqyVAL3z187WjvY",
  "key8": "418NWENAEMKVDP9AUXe3ZRFfYSa7hk6gsLr9ATEbt2dcv8VRMyUzgQW5bj8wYcj2ddinw67fA7r2xejmtZPsEdN7",
  "key9": "CTZb52uWs37FWd4hK2vu46NMZ8XWL8F4coCePM1zATWtEWQVcAAGveacT3BbuoN5CMeGHCUmDWQLZyE4xFgYMZ3",
  "key10": "63XeLUAUmcDzvCJm61yqWircVtB57biHcpaBjDgSycp6xBMcLG9V2f6R25Epu4VvmQuAmhAetm7SxaacC2ftfEGr",
  "key11": "5wgcE3rx5wpchnXmHyhFj8sfZfaETnTvdZ3DaVgQX5D4TomD5iRopHNM51yKAfGLDSDssKw8Fwk6e9hMNj4wvL77",
  "key12": "2e3ineheYesZqFgWWdt98Gwhapy78urBymhVcyafDEL8ugP9BbSDvXxL3QJ6yFfce5E5m3w8FsXEWfEaeg3122qd",
  "key13": "2pq7Mi1BK4qgV64RFEdBrfNF5T1ZKZWbuys1yrW92Uahk2J4GuLCmfRD6E7xFKpVHSNoiheytfD4rxpCKAbNkehe",
  "key14": "4H8MZdUSXBFHxqQpyU5zuM8PsAxfMMpUFKuDrpxbBBByjC22bLkGAnAETjR1PCqyYtnuyvQJT4fyGECNbSAvnyMt",
  "key15": "63G9eQh6vvpKrTirmAhMVRd1XGyvcoWokn6ybo3p1hmHUCRhZwkd6XrcTw4KLLEZwmLEbbAbnix8tqYEEMRMeppe",
  "key16": "W649vw14CiJZz2FXH6TFtSxGSp1RBjshZ5WPJ7RAaowZz9LW4C6CtkNzYebRhT3F4SbkD4ryikuycL5WRXmqg4m",
  "key17": "3WAauukEM4YmXF7hFRgHc1Ec9q1j61fJFe626Vsp5SirWPcixwiFv1gLSjcrBbmfatzqSeJX7sc73dfAystXNsjp",
  "key18": "5h5vVYGBD5HrX5fPMo2VKQVfPRQ3WYKeZGDQSKmvb2Tp3XVNEnCTduZktaLDfUSTz4GUxJ92UT8so3cv3WjtKRM3",
  "key19": "S1NGbonkFJvZqGbTyAzP3QnQbL4zH1K68NcFchixHEBU4m3hveyoZMAM3Zdt5PNXAtJmd8pzdSMibkHUN22wJPi",
  "key20": "326y6EQLSkzesoZsp99hAWot8D4LQmgNWL7AfmACEyAfCpt7x6nKRxs2nw8dPW968iVmFbYFuys64wXACcsJsCof",
  "key21": "2vFFnVNVTrjmgCUKJcbz9b35pqsy3HwuPVcCTLPM4s4fHU9Ap929ruC1PG5o2UWjPeJ2wBztt53HwkGBnvPCBT7w",
  "key22": "3LWqNug3uzUPkm989CwZX9GdQwWzCywcz1dhJVQVVGAGnEhk99mmXWoMjHExytLWHXwjFr6eiEzXKRmrbMHhgNyt",
  "key23": "4fotmXJSaYP3fcV1pf4iPiU2nVLA4bWWAhkDCtaRqPc3g5qnq7DsmykLcoR8pjC2uQSauieuQCjyosG6m7cSj7KA",
  "key24": "aTqYTg7GNeSsSmKXX7Vz2WAK6W31WyEhdFbKFpHrAWfAHbCE1mQYhUFYtYDDB8PsXPeL9js5EWsnxXS72pPDHzk",
  "key25": "4VYiod4goQ64z27uiuNmAtxZCt8WvFrrexqAisPcYtyhs3d9EmTbMk43S7iTSU327PXSCaEVnzjyHgn2u4DhAsBU",
  "key26": "4EecGsi8ZNw4kkm9AS3aCfgf1We1U9nwvTo9y4tzRSBZALzXYAsQMwRSXaNEdKzcVU8sJ5RnoupcNHMwvWdhf7Rt",
  "key27": "4aWBaAGwhA7kvA2j6zaWp7Wyzotm7xTv3S1ntNoh8etnEwY4gcmPKmR7GRmWAS966ZS7q6NdJgbVbM7346XSpM4e",
  "key28": "2YHixqSoMM9FW1sPWnSPjvepYkLjyo3Z21iuvd11aVRL8eVTiD5BcYYCwwVGrBFppvP2SpZofZwPac5MwCAmpSkz",
  "key29": "2kfsW39RPM4NAbLwwrAQJRFz8qRZGEbEbyWqZ93zresyW3XSEGFKKgseSgQ9JuS5VV4vbbvDDcWgdxQCqubBdEfk",
  "key30": "4sExYxccwPPMNkgkhejeBUrM6cszwML6LXfgeJxGeTDLLvAxnqzH9XZooaKtgQnxZhAfaJg3RFUjpP8kHrTTkjcb",
  "key31": "3zydNdR9nvTERGHmtHm5T7u5qQKbHLA9bBXVr1LAGf4oTiYEqWo8h6ARk7qAynaw7nRDUXUiUuDZ1hBUUMmT7wps",
  "key32": "29H7EaLRGxqocQhtta7fhjYRywBh8kNZKsawLunyEpcNqdgVpBbiqPaQXThcoacjNDtsRzFVGhSd9NTsoCgdiNfc",
  "key33": "2akd9DxXaSFW51PzjKiZjSYzWinBHss39AvVNpBbbKJKv7FByBxDeqEtGE2hsAiTE6Y5RXdDCPLBAzSjPMLAUT2h"
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
