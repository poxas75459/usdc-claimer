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
    "4QVZnsGGtf7bjUC98ArpRWzWZr88SpHGG3yo75Ys5Es5f91oRkbWRBFo5iNf67LDnGst6TWtRAKSpUE5k8o86LEQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pGcKQDGAFRBvdYfsxpsFHuziDr4eN6TqigqSfmgcFqm9VvQR6Zo7h4RCWhBDcNpvBSTPzHNSKkVfy4t6otBo1Tn",
  "key1": "z2U2YE6wgX82VseQHaAVpnN7qiuK2FNDUpBXCLNvXTzHDwpMFX9VMjF3XsRNQj7YgfyS6FwKFKdVvtCt1q3M8FC",
  "key2": "4JS1FTuRkZDx2BQuYMxmctZDgKuRaE5GYEA8FpM1XbRsxiUizfgfmirx5LBsSXwZYy9keVWs5YNDRL6sTXABWVme",
  "key3": "5U3aQGZDaHQVzmWaRvai1Z3itXJUvvfZtaKfu1BtAXkD98yrZZm66t4koTKhaHZMtH1JGpCKzx274LDngQkVfkj2",
  "key4": "5NJimQeSKuw7DQTG8hJ2BicVshzEaPXmdKehLiRiaFZ1XLLGH7SWbMvMCxLMrCipZwgLzBzSZ9Yr1wTATz99jB6G",
  "key5": "3bj7S9ScpccwUWHFwqwPMaiHerXMrF4GzNqFNadBsPp9iEDTe2fVyctsAqppkRJ4KGXsSrbSRaLn6UD1dzqM1kr7",
  "key6": "2yo39yBU9ERJgB7drZN6LRt6BPuDjJZc8DkTn5rwq3DGazmEPvk9MHXHyfCQ1EJW6nZ74FpSFyuRtXf9EpTR9mj",
  "key7": "W3ES8voj2pXEGb2LSFDg4t7xiPrh7fJAVZepko36oGig4GFeW77V7eCbRS5VHtcTtnhQMVQg3mEbrXKSf634ZP4",
  "key8": "5b8c7mtsW7p42ZvmdkPEmaGGAFahvBwzLV5duemKtUEcRAaNts8VMXBVsaUeTijzwdDhM66AAigRKCgbrPqJxfBY",
  "key9": "YJms1SeJVZgTH3YjctV6iCEszLKG9yKrnX2V6K2yufEgP2KLCY3P4rjeBHEREVW9LhwgR1jVfQbZoTZCnic9cvA",
  "key10": "ntwXznStjATNwZ95k8nqb8ttjxh2zJdFHDyGZj8byB9cUgeJBp5MpAqWjBB4oj7u8tXsj2QpLScAjfdrT3eK3Yn",
  "key11": "66SWoVZhz9TuyQfoB3yavrJ4YHk4LSDdHaykNLNkvT94utTyDNkVQhb832xYG32wzYnL2vzfUGaKnxUbMkrpqher",
  "key12": "2gW96eziH2jZ1sWwUGXmidAt3FXegysKCw49hVQGoVMGHjs2vZDxvLQog47XPAWGY1ekzm3uQ14Hgc1SDgRQVetc",
  "key13": "66D6pPBbW7PkTkBk2DRT38sxP2VA5vnHHqiQ1jADVfS6jF9QuHwUSUtMFdutu4VSaNYJ9fAGhLBZ8nhSkmCFKXzr",
  "key14": "3DewJeJaLayXkCsLHN4bj6wqSYvfQ7wgS4DbSVdc9NaSdNaywn1RVbjhXzpASSHDsNU7SnKBCXbqpd1iW4dVJiz3",
  "key15": "2Bp7pp2vZNa45TZ8ks48P36cwD8z7x6XtNT1xRkDVPiF2AxTQhugbGVXrtYexZgup8NcKnVN6YoLnwKQCAY9nNqo",
  "key16": "iuFPD9d4x9uYjm5GG5FmQ2EdREWgtU5aK2uGP4HqSzVaAz4sHbGWuzqb1sbatqzN93WJcU6G4xNC3XXt4iuA2XJ",
  "key17": "SW38cS8abP34JPiT8cd2SvVeNMAaBGqQyeSYSNkUdpzQQVXRVArs9KGfbhDmbAiGTS8rSNnevPLW4gacYngS3Da",
  "key18": "3VhxgUWnSJ27cjRcBkoXv1DFjHi5ZxkRWRjD8gKL1wRjRS8u6z3FjEApm8CVWYixmkmhAkVdpbVMgCfvkFqiVppC",
  "key19": "FhSoK4UD7Ud4786zkZYe6e3K36wgXZyzVS7FvovxUwwag4jo2kSJBnDuNmmTxZugdkv2t7fZN4fytnpGVzLY9gS",
  "key20": "qn2AF6cVtzizufR1SeTf26JdHaLXYGHXQDTphCuHFVypSrB4CBg1J5EJoHTZiY2Y6GGvWCv52BAMMfo9742o2mJ",
  "key21": "5xUv83eNutZtA3NzenoRZ5CfBPqUTCmEoWRmjvpvTmRsdV926BKnv1vFrS77iz8NYJYwQvSKJg91EiePBRNQkLHa",
  "key22": "4AiSKpFCUTDFNnQk21AmkF8JsQ27DwW4qTT36zfKL9Hgu5WfUqJgGC5yBdREKfGEWbZsjjG5Q3BdhK6RS2t45Ghh",
  "key23": "24uYGEGupkcz7YGaeDrSXeJDYZFWVCc44DkJsE9F3gvpcen5tK8DUR3AXyb8accsdZYRdnsM5twGNs5AxGbk6MBa",
  "key24": "Dd2EFWorcmqugsWhaDfD5A38QiYMMsPVzeUZx4L3XGq6pU64Uii1zf684TWLHAPV7Ah3hUGo6fABvNiv2UsyRqg",
  "key25": "iMxSfJvndyMCzdWTs67bjWoynapHjUs76geKJYgQYSWxXXzF6gVqSeT2temzamfVMEGDGyhfJwVCsArrEzBCYvu",
  "key26": "4mQw6isKr5u8YuAidjUvvnEPfzrAMifBUnY1QgNNfgeU2XMzEw7Ku7jywFB7cNHAZNiAr3Ny742JnTpLnTZmDTDg",
  "key27": "2yTXng1wHCL8VExeAt2RL7MFg5b4e2bsT5snqWtvRCpveGnPySDRJAwsKwoz3d7L6zvFDVJ7ZFkbsjGRGpn5QToN",
  "key28": "25D7ahsH8NtCpyqiU1tRVmib2cbdRmMU6M1jgiTwMSEGaLvAghrGwrWYyzZdbejnMTrmGTZZdtSgUsrLEfVwfHsg",
  "key29": "4XhC35qPujG49anrKQMghQ6T8d7XBtnEYAbbxWU6HGj79hhinxkVq7w2GQNFBytjvHAuL3ZoUbzTb6j4umA3vyEq",
  "key30": "4V5Gs1FrruRmeTsqaqRBZ6opvr4k3PWwcLiawo2R8pyJiGzP3PAYL81T7mJwjz9TP1qg99eapJukg3ETQCFW58KB",
  "key31": "28r6TN8rmKfZzx9MYBw98MMRbgQyx4KBJaVJyK2J322VY4qxtn6RRcDdpuao3QJP6A4nHW1yUpqaJ51WziavFKpk",
  "key32": "3FzsBUVhTcJV5MrPoEaBX7JAUs1smqtwZ3LXgHYADKzEFduMw3DSewJCwFjaKUx9JqrPPfWnW8pujcRm9W3tR9DJ",
  "key33": "3A8cFHKtWnFtev387ZyFtVwR3xYwBFuBHS1tQdVe91XNo5UJWNFR4Nonjw8ghfxhKC7ENYWF4noKd9cA7pftDU4K",
  "key34": "2SNiuactVdUBfhpS6djda9idXpy3TrvbQERQLjtnHoaWmi5i3Gk6yAsEPcbhVhKM472bz6NnMosU8Yxqu9L7vyCR",
  "key35": "S6TFredtS7eH1SGuUkfKYHUaDdJpkT45cxYnDxsxUTC9QVjreGavEeKt15Sj5jEmGMoMvUb9KwG4dCtd7DFHFek",
  "key36": "3ZZSjTbWFvogBBse9iZ6U9DGDhcYeFz5pHpbod9vv4J54AfjdrAJ8U7rpr8Aj53XMngx7GzrjaMNRR1yL1cnKzm7",
  "key37": "5sLrvgMijnyWUD8Qr3PzJpKehJ6pm4LX4cGra7eZNx94pQkCxoPQgrHajV8AhJWs588MxbWDdfV9MoPw7PZdR566"
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
