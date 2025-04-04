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
    "3Af6Jt8GHuL9wPckwxeA2pPc2KHqMYKw7w8pC5tP3ojUE6AQHCxRnBE5GWmQpYzEU9kfxM74kByWSgU4qP5PqkC4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ajASdDSX6RTZJAVRnJX3ZZYqbDx8oredjddGXYMZoKjhLiuZx3Qja35r8FzRry2x7iRTFMpbhzYEoBbd3LD8Vtx",
  "key1": "24VoJ32vokP2VGVA9jhmFpGiLwzQx6zPjGqwViUXcVyPQphWtmCDt6tx6g37xH1yQyAfJgappRomH7cJG2XBGMuY",
  "key2": "5BniJKpgqJxvVNVjHXQg25Z96XP4RnwmwZkurKEeMUc6Cs7TyXBQGoWvFR1uSzZbMZpPBPGzqH3oyqSb5yjrnRuY",
  "key3": "3mju9CZrgMBGR32VGfkaAuhT9pR479aufhiZhL2BUQQXLUy4fdLsPJnVewgouSfCYoyFdXhGvb5YwWsKCywMGmd8",
  "key4": "4W5S6bibeMWmNP8ETdoUHpDv1kutwc6iBw9PSEfJrs65GPGQWFkYji8Y9LmQZdDc6riEvb2tMoAPyvszPrJev1xc",
  "key5": "2z3tUT46CEfepMRyGxhXjoiLybUz3zjN2iwX2LNK6ah4Ss43jfTV6ccFjvxiETfure4mQkDo7oaoTeW7eqgs6MXT",
  "key6": "4QbNo5AQmnLq4GjfeYCJqQWEqSaJfGxpsju94gbjySeFrnxg7Xhj7rbH6pjaPRsPwR1hNy7XAwgQrrsCKTLYGHYe",
  "key7": "eRhi3QntRZE4ZPqwjiVd97bKk5ZuZtZUhBPcHLpF27M6WQkHfsYbbUgMvGuLseVoYEGNypKQDpvBNBYfYUKEKBp",
  "key8": "3JGsXMQ3fJ9CNcoxnJW3hX8JwbWTMtBM3uTifAV26Su8uS1VyzurH2exX5Pxbtcd18JSvqHAmdV9kxoEBAfuAveN",
  "key9": "4FKjJgKLgKFJffahB2TYcos1iZWPVgmpC81UqPE7E23XD3K2m5pNer2ymqWqhybepSPtpR6gg9zQp1XbEAkiTyJY",
  "key10": "DqaRQc435Bdq3tXeP1jggtELvsVFHkRj3yRtXhzxCutnTaBQ17HjoWLYx2zDckuNx7LA5tat1CvCGEtLua5spY1",
  "key11": "4QqNch9vQYyoY5nAcsSqZGJqvwmJgGVWX4iBsGT8jxGMUXFL5nKevd91UCjKdw2xGdpQJBG5ThxDGGYDREwj26Pr",
  "key12": "2CWnfbRF6SYx3mb63AafMLYywgCFeUjjAwUSBydj2hBxGULmLcF913XwrLFuH5orXWA1bjhuA6GRL3h497BtyVrb",
  "key13": "5vAiQr5bRjgUpKwxM31GJLqG7ZTgn1RCvoKLb9Rko2Qy5CPPxff6AkMgc67YR3JBoa9GKNSr9848XR9fFnzMLzAu",
  "key14": "24VBBf5EtoL52EJEpJUo8VWQnSZz5J9gpewQhUKhtJ2MR9MmNSRpEsJUoruAnV7sbCvjPdxEVM1e75RugMHMYkAk",
  "key15": "67NR7YoDJRqygGTCC5EfLaVD7o1MpoxXUE23Yq6hUQAMfWM6LyCRJdGH29Jv2PoGSh3wCqfPFuaipvkcgxj8wg2F",
  "key16": "3rinmzQY5FFfo2E5turpE3DvoNc5ASXXLJ6FUf8Jzm7M5wZyX5FxYGYriGBQUV3tBQEFW86xqFwQQmgCUmSM4jaV",
  "key17": "4rLPQmNjzEKhgGpycoEjmsUvD4zqcniKVLZrEcPy7z7KpLxiXxx2XNYVhRK5Nmx7mCwAqRtvquWD8HggrLoadi5b",
  "key18": "4gq53ms4soCsXXnB27aWQvmzR387ZZxUB6Dh8bpHReax654dhTqdC5WvKtPYCBy1LKsPGvA5Ce9xjKdvALNxVKRD",
  "key19": "3MJfSTXwY7wVFpXHFybUaEAMby3HLTMQf31mJpR55VDyCwXumWrTb56BEwHCeFYTovtdV9Zn1sY7XT3FR5HvgasK",
  "key20": "2KbwBzqPmgPLVGYeWYQNwAQybt8BvMapcvH6Uom5SrVcYFxmhHgXwahXXyG6uQgjAMDaQFDfv41VPxTsJbQLWroX",
  "key21": "32F4zGPVvYogkSADCZAB8NemvKX6x1kBX3PdQfKcQ5RcDeQfjKagtUSk7oM3eLAp7bHM2Bqm1KYCj88DtdWd1cnr",
  "key22": "3PU3NPYNx83j9cPeCf6iFT9TF5MDMTSKM2Z1Z9abnr8SEvXzpHQHuu4mjJvKFFHph2JRj9qKsFT2MCJnAioVBvhJ",
  "key23": "f3jWvKvb1Kc3bfvKTd6ampYsj7SDM2rbv8nsb7sH1pnMHnpPfvA8njXPcVLC2SHSJdVLBUpSbLQ6KCmevKPbFrz",
  "key24": "31zAKhcdzrFFQdPLtjanbTHyxmyvw1T99APZi9Lqf1ivyTWhi49AnJRVpfKHmqVxZcL7RP5oxSZbaJHnauB6ve26",
  "key25": "3fXWDD3GJseFuLuREyjovxNwPEgcX9e2C7yQKw2zbH8UJzQNUUPBU8FgFmGqSLQetWJ51XbDndR4EF6ceCyEW1b5",
  "key26": "61HpJH5PPMozPR3mgMrB8qJ9hQf8uJ3vL5xLek7Q7zLSK8SARmgq8kXbwoG4CYkrhQDoXVisLyDWrwbgZFb2g8Db",
  "key27": "VMVjzxAHD77WfLyj2Tphk87MNjoQs7gKpXUcCqvDfPRdkTajhNfLWVikdfbfMaC7TkvybpSLwMxxYRszpeFcGJU",
  "key28": "5PUwytFEAdx2GdVVdQo3c1EWN7JL2mvrApeNa8vrTQrsuuNfESbyc3LoUuYLieDADqNYM2hLQ4UrdtYH6Xi2rrGw",
  "key29": "4ZjpMQQRpZSHzUAm49qGucsUQtFS1PAPejRYs36GhfLeNLCFrKhhzmdc94QabnALpyNCLaemVUgGfigSwKh2tsDd",
  "key30": "4ipmk2YEDeoLJdBDanFFYd5BbNui6i2vGiJ8WCKgEB9vvEYqqb9TazB3YMNtNuD5aCWB2x9oDUXgsVhTS7tdWnGU",
  "key31": "2z91ec8yskrwiqEwSNSZggFL5bANxe5fR5FuycEp7R14C3zpnDLoQM5ZKTgyycZL9zwr6wMJBHVp5BRAM36c2Jxa",
  "key32": "DdeQHUwSY8T6483jSLS4HL52zxtNJR6DEaWRBAmZjKARjuCVcMBtXZ46uYjcZyn1oK9DzeR2ST4ezmcuEAqF57i",
  "key33": "42Eja3yCRcY6uPYdXY8qon26qN9zckiTeyacG581w6obvfVncsgke7StFwmhJRsDtdfQ4dGd5SHrf8DSSHu7PVjy",
  "key34": "4Tt4M32NTWCzjaxEuC37vHEKMSkcXRhuxYQLWXjbFURtASd62sRgFV6N3dK8SVdKNucMMd52x5LiahXoPM5WyyMu",
  "key35": "56YSTjUbb7zTBPqohUVrW9DzYDrDTeGMnGnThbjE2m3edjpZ4gFw6ikEZpKScWc7uD5LHCxyr8SpkbK1iUTstYS1",
  "key36": "213LwPtr6iWxvZKuHGbTLGxKowwkwE5U3YqzKKBbgjMuZGzc8zEERACceBp7zSE6oVaBVLadGmsEEvNFk5JCP8eE",
  "key37": "3CnKjHJL9F9s7Uo9FR9nxTNrr3F1nokT7W6Nb3d38bnQPNotcDaCqJdHGaLTc7iVXDi489KT49eWJ1zvSbyR8HYX",
  "key38": "2KgbQHzjXpRvUoLGGJAdCZ2bNRhWVxM9YJ6ZfaUnDaYCXAwHHw2dhazQ4vxNKr4mtyAv9Nk8GTQ73rQGSDkDdEw8"
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
