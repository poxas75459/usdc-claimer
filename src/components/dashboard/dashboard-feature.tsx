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
    "2DdfzJktEAts1o1kovpfVZsdWGjWHmSCBcdYjBG769XBTqYoVvQULvp1QGB7dfjpUYzrH5wazn6N7wDFqKbenBqi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qvBBdZAYCkMwS1vSHShpKDwv6NGpTzy65kuWv68Sat7v51fmZtBNxBooXqnjdNCRJPPjojkp2EZk7N8kwaFb2ye",
  "key1": "23uuZJQS5dv7yuqGNmYk4Jb8TBq1zKz3xLb3X5cqVMMb5dZ63r6U3tXe3MF8rRXuAZ2cojC7T7bC8cNjyjjtGdEe",
  "key2": "GAxdJGsBWb9f37HDiDyDqEbmpxrY9s71oyhpAP7MPhQDU5adsSY7Ef6zDhKr69jgV6xS3uQugaduuNBQG9Ng2ji",
  "key3": "3HSxXyQwjmQMQnuXh14CHVodxJuRbqFKVU6hPfMh6UAaaqx37VQgDRXjVSezNnxNBs6PL2nZVUWppZ9ap6rtG63F",
  "key4": "3qF1V1LYDtK1Ck8nmkFmhRsZ1epHa7t4o6eRXxi4XZ1NSta5AzitrR9Zu1fiXS7NkuTkZz89ptpdT5fy81iNJdna",
  "key5": "4G2TiRbdByXEzyvoUhpiCpVyNG3JQrJWhfhKopfD6vtAZyvG9SqhVpTy12nZJTeUGg2yn4mcvQrZEdmJzxBgM7md",
  "key6": "24wN9kE2gW5cu5X4hDhEY6ueftYMtnHQpTAgw6T8Z8CRFk91hJo8XVgs5ZHakYjjxdXxyyJpmwoJFq8ex2KdTz9c",
  "key7": "3qG2UnSFFZ6ahYPpfLMir5S7fQHVbKQ9SuUnir1H4jPQWDhaiP83M3oNwy3jMoZXAmMMiE2r2NfE6YuepN5cxKzB",
  "key8": "5fenmJHo5QcvbaoRNvopwXcyDuHWLLnTRQFYb6yHVGG1cwVuWFUQ5iSFsQgr9Gqu1DwseeVGWy2QTLrpfHq1Z8uN",
  "key9": "2De3izSHTpxXUT9tLz1UCxeKcixqj3inGzWk8RXffextLBuNoN7kUNTe3yd2i4fseHz1mZmqmKsA6ejYjNuLBAh7",
  "key10": "TvmxrRPYQudjjxsVRyyyMeTqmoijceb7DMWCLq4CUsArboKKWtc3Gb13DEu17ohbXJPSnsTDV1R519ouFQo7rGN",
  "key11": "b8RmwCPiHa258oKbsc9kxrnBDeDfWdn8s6CShLsbMbEdzUbTtubmxoQ6ehhsNtWCeAWWNpd6twnw5VouNQWysEb",
  "key12": "4VfBer5gXsjFhqqJhXYMUJvsPZvmCfricWmFr9mEExvDDLd2kkK5tdFG4DJjCzR36SdUpHTCehNvaKg4XmKV4V3e",
  "key13": "29uhSCjfwsWoDYoi2mjtxXjyqM1wpVKmRjrntTzgYZJFWUXr5Y2WMqbjhH3ZrVmjtjUtgLXUa6fdEho5QnwQrVug",
  "key14": "4Fh2mwcHWzAok5MiXjcGv4xKUPPJgdA2UXNtX17adZ6TRGdsgg3MkrATnsY1BrDVkxLJcvbYkFk7M2ma7dQqkgdy",
  "key15": "3EtNpxTNCUQkK33g4qxmWEMrgwv5MbeZMfPUpSFxtGkAoF5Xa5xQtoPGqAJTVvB8oTysrmLT8MBfoRt3KbRCE1rU",
  "key16": "2n3KbMb8FtRTmDgCDCpHhPaELDCwWqwg7uC3qCttkKfJKvu13uZn2eVQgGNxQjb2TVPrKmyxPJPR8FfB7mnnCRt9",
  "key17": "5Ls6otTvsahtkqNeoJMdEt3JxAfzJdQ1AfKV1LmuQA5sV6EVu7ZzABU7cz47vJJ2BkYfwR1VkMcuqCygHnmEoE1i",
  "key18": "YEvF5vNw2MnGr2shv4D8niEVrgJh3HPXNY8PnsxVcTcED4Wkp45sa7H1674LEitLpXcg1rUdk85jPjs9D2Lu3mF",
  "key19": "4VQ2uK9UpR11to1mrEkrfvvYH54G1zEzEFES8L9dFo1zdzdVBDtqa3dhyNpq6yr1uNAQYeznq1xTBATV8twZR8gi",
  "key20": "5WiNUyeCwaDFZZxVv6mJE2PwnuFmmcq9ddV8jfigLNcDXLn93WzKSGa9uzjBus1k5GWzmPhV2VJY8Mh5HZUjD7ZJ",
  "key21": "HZHikFECCUcB2PWeFyBeYjkDXB4rLaZQVnitQvpRjwAuD3pywVBdeLv37TY1FMiwmm4gagYkubxHkJNFmNX2scg",
  "key22": "2dFy8vgv37j5tKSK458CKy7NJXh1hEDZqYfSLZhXWs7ibJWKkiJcSWs9C2jpqYo8rUZbJkQRuNnw5PiUr9Kb5TZi",
  "key23": "2fqCqybGpRDJrNBtS2hRbJMfcrDgXZX79fCuR7sT5i3dR2zcARXRuCh6KBtw4FGuqb2FBoTxUnugytY2vALurmTw",
  "key24": "5Z1jFUPH2rt5rkTCMqo4rSXNYZdx7MnLJy9sa1XL6MeDc9YzxMpKZHWEPXu76pPQFVTYTycMAk8mnKSLPn3rPKdy",
  "key25": "5vVPGKKwuiKdbUrh8TXpb2oxDezTw1ANp933D6ARNrUU3eMUAA3KwHncwmDHbEznFzDA2eQ3T2sNHMLx2dBzh1d4",
  "key26": "ucsYVoSNDdkq8ne4a8rwreMN3F7FNhnWeNcJfPSCnqHJDceq2RECK8DTAAiFCCiEovngPz5i4p7gsZ9H5zBRGM4",
  "key27": "5RdNUBis7W5pzwACMPMnLxNkqqoghKfB22a9QZ55r3MYEVuqcK8XEiWLBa6Xg6zrhyhD26PKyGKTYiNwj24EsraR",
  "key28": "51SBdiHqZycg2pMZSfep6CFHRSaPgNGxsFJBzSnT6PeUFs3qkjt15N56zQ5ssvZwhr8ihNJGH1PKsY2cxt5bGXBw",
  "key29": "62rrpGCxxEgeVTKpXYnhpHUQm8Ft7noeB5ndZeq7cNWpcjNr3h8inU5E8uiyisQfp6kzRSWxP94JeHcKHA66hCrD",
  "key30": "5oz1JuBYh1GGrXffxTiu8ofwJ2pbBM94sXAWxNqe4FDJE7RazFxcxZ27aQsRhDQXwb7iD5Ms755fLpXJLWsGqyJK",
  "key31": "3SByu95chiSVUbcZBbj2AjQZFJXRhHkUGtqZeFmiez67sSomDaXhpHi6gpN2vEjHSB3Q1VfEns8X92omJAQMkyAe",
  "key32": "3gXNXV2KWeGpx83k5tnH2BufmwdPfTYQAYtKLF1nzQLChuRZcrJ9f4LHNdD612jf1G23oE3CrjZm7P1XqvWk2rbG",
  "key33": "29GqLuEeAdWWYpASyW4tUHNouaoxsEx1SnfzEz8WHdf9QEE1JJj69oMENisE7zX6fLnnma3TZeFbJp3FGCfAokJx",
  "key34": "2keaCBk1MUo3yFkgPA8mgPBKHpnL5usTcU6XUiKhJL94Ypk6EuTwRPCokhHjn9q2GyrQs9vzAcoKsCGqfCiJnS7T",
  "key35": "3dUCftEv54FZaQLprNXwn9LogecocimNCmN4j2dPBEPrATpBSaDX2Dt8wu7jjHf8uDwKsgAtmT7H2ahKyUFxn189",
  "key36": "37pHPdVgorkfte5cKqrLQNP8KsM5wXbkcqCvfZyP2TU6hwkfRVs4Hz7fXhJFg9WbGzUyxA5UrYfcFHXhJLuF35jz",
  "key37": "Th35TH1Z9vgF2ozWxS4BvDGF2c6coWuJ3jaime38zuxYxzQAWTG5HgeScuHLuATRZdo166qG7G52SXFvGeZUjU3",
  "key38": "32iepq3uGEUKqj7ds2RsqvXFjnantLBxEixwWUZdfn6evBvbrEzS8wSFd7AHv8b2JtNd2prVBqNxTrcud4cMLp1j",
  "key39": "5FQ2hS4GB9ADjZrHNdk3Qx3GCZcvUZraF8wjG9ProKVrkqLXZQG2Mrxr7zv6H4XAT7GCSeV88JJrTnTLr93rb8p3",
  "key40": "5uAB1CBibkV8D6vsuqWLdLcymoPu4wTJae9pNSbrTjNEEf2LJ6dxQpU6miqNq3RiZduRB2M41gPUFWPqcVmayWJ5",
  "key41": "B3WacwudLGcHukRTQHugwhc6L4UrbUEr9p4jgV9iW6qEK5LZhnfJzRgrQZ2UgRDaK3RjVUHTCNjkfSo5sHM4sqA",
  "key42": "4UkeuHVbhniLeZE5m6EEZGBWuCjMNBQ5vHHP8KyLgHUzhAu8t1jzrT5xMMSMomF1NBDETuA56D8bJKSeMYmJmzzy",
  "key43": "66wgYsfGePXVBDoap4JXR5FyBNci42mLLhHFPNgKU9eLS2gfjSaPLehRPfaWp5VPqt1sNKERZBA8TY5yWLBRDcAz",
  "key44": "5M3ZAQBBVvqqP2UQLXLehS7Fqam8WjDtnQ3mByNG6fnR1zUXv9aYPkoHHGqCeadaSdGK6AJhXnSUod1wbermz9jz",
  "key45": "3vxu5ru196p8f7qRXzPkLn9XixChTaFotziFkwFL8t2yRqyq6UVdjxMGdxCn5nbCJjQQWsZmsAc8NzLciUqto4xA",
  "key46": "54AdTLEVV8wv21iz12qoo2fyMFCGzVhT2i9m5BGHT2RH75fTuCuLsKMbUCRWyDvMz8HLBPrmfTLyrUZhdFEWY9DA",
  "key47": "5zMNK1eqJ94TshpnLeUFrhhWLyR9aBxWjXbjYApxAR1pbGHujUhJJFDdbGPD2DZrGKYh84B936nZQQWbxeZwpQKv",
  "key48": "7S9TEtcfYk8anoGbNT2hgP5bAW8tQTc4UcSf1ro2kctTrXkfFwSFFbbtQi47ztq3Qe4gxabR3Y8Dkdtvr99wauN",
  "key49": "2k8CuHX6JytBFihi2p6QcHiRB54qQ3j72cqzey43cF185nPDPnQ4UqkSoCnDyrgzM9myNys6rBH9ek6rSDA8gTUc"
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
