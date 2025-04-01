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
    "3eoY9qnpqKguFyZ2ymZ7YDhH2Yvnc4CUnqZAd9vhb5PfX8kYsfyC9cuFiwYN9Cvmcjh36DjbUzVKfgtkvbmZHYRf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MVeeRY8MhS19puVV9Bw5ArKCZVEXvjwYdwKp7ECsT2tE8vyzTBWjLtfhfgBCQSsYSWFc3377wsYxB7aQ7UCt45a",
  "key1": "SFJWMNg1zjnvYAbobj19UBFp9T1by7WaSvxP8Sfc8QKfLkwVTYGSMnav5YZZ1hkxLuNLfrZsAou2ENTom7ky1k9",
  "key2": "5ojnyaP1Pnj3GTuHVg98Ts6y2G9TFuvS43qt8fXqbszvyb6Kn3R2JRkEDrWrjaxy8BpmmSMqrP2rrkNF9siaH9JR",
  "key3": "8e26UFjADgFDag88v1FomJQr5Qwxgv5SsM8asavQAs2inxSy7ZLQJWEnzCpTHBL7PuMTJKx5jPY6jQAzCizywCA",
  "key4": "4aMsvT4GZ7rDxihGDsqrwjwf3hF11fKuzMFUcSgVAwhoZdzDCx8zXx1yKtumdNYkKZT6T3bDDnWP7giKX2x6vuWa",
  "key5": "3m2kihCUusdCWxEdzCXtZhhMPzxnEnqg8jvfuk3VfwxJedGqJcNxrFU8u6HZXqT2Eiun56gXZ1rjgwBjSCktEA3s",
  "key6": "55N1Ahubcfkvb23WHjfduUBzYsNRZibfv84E1wpzug1EapCzq5g7oMvsLGpBTozxeFfbRnF51axbyjfN3pdp6pro",
  "key7": "32NF18Hqs34Em288CpLBbXDdJ6aMWDYuccfXpZh55Ey6huVzAVhCe8dwAEdEyy2vJpRnAFqrdBXAty9ojv2PRex8",
  "key8": "32iiBnWXrx2pd2ZwjGJzuYmActpEZuU973iWko2FqdTa5hHqreHyYoLXeLJGpUNi2KBeHHejMfiE87Dxt2P2F5Wr",
  "key9": "2mzVUTV4GbTDDR98fN3iZq9gMbt9UVVDYMyVv6Ub3ooeaF2edwm2gMqKXMxV3uXH9kzjVCLKbKk4fS22JHaiRZQy",
  "key10": "4mcCDQwSBW7RxyammgCahw5zEKLBZN8AgPCiQpF72CzHFctXHonEE2t3nLYFJRMys2ufE2C8Kdz8hTmrsEdK7xTc",
  "key11": "k5bmHyaM2Vqg3CApKWCmjejMXqFCamPcXTMD3xdBhHpSMi8r62V53zPj7mXXTAm8KetSZnKKMfYJYTrAJbD7RMC",
  "key12": "jUTCymQoTaCFHWdCbvihbeCbhkCjGVxx38DhahDZUnKf8z35U2MzCLKLwy8sWJpxmKHdjC7HW8VqtYscGUMrzCB",
  "key13": "5AzMstqZcKs5n5Rgbdudp5CeJRvLsEezx2SiMkudHmKTPcFSdWVGysuRwX75CFsCnhqt9drcgN5a3BHfxidzJP8W",
  "key14": "3xW4ijwcEFjfGa3RFzePVPCcevcDepfFj6mg7J93pEBYnkLgnhWd6GMvh6bFTH7JFPJtrkVtTwVayXjszs4rQuT9",
  "key15": "2VE8585G5sdUzincrLrq7KcPhpqF5mojESopnUCsxz1G3bFdh2DzEzPDrMTP9r2Up86iZ4xxTM2bnXfP168q28rz",
  "key16": "ZgdjTtZkKedVTrZRTekZHmkpWZ8Hmg9UzMyd7BYYK9KbTA6kZAyaSDziXG1EfgtzYiWPmqVfEWuf9h7xiDU5TjM",
  "key17": "2rWW8CjhECcdrP9kvnamGGwWYbp1K6LpK6Fzro9igL74S7vXrvyUNzTPVLhfnoUqLnWTzPu7HiNnWX7ajFgfLyK3",
  "key18": "4QrH338714MNxKbz9TjpeseQ2KzBCRX5K8PDpRRdKywNy6bNZbbm6axXnAoNHybA4hgoZbGK2jfJ9pyDMjE24jj8",
  "key19": "2MtTNk4ySuvfQuBUsEgN2LFvSgQgZrcZTMRq8t7T5QygMTVuSj4eynnHUhq36XQbRcddzZDGDqAJh7CpmekLJ46f",
  "key20": "39pqRu797k8xn7DJcBGWLFPY6w2MmZ9Vuytm9ZSuaFNhHGa9VmA4deTTjVkk3pKpaeUHyr5u4fp6XD4B15K7xWTh",
  "key21": "to3WChahN7HPu2oFrddCiEVW6jJgiAq6BrUYVejHaCBK7faCbJDaw4Pt2GW5oXBb2Fzjha8svM24sd24szArZ63",
  "key22": "kaDbmKKk86gCrWLXiJJBtTSVtwhakqCyqkM2Q3KcnEBmwLrU5LxCdkiPWEXKcAc3M9w3bSKTA76hMx1sWiyoB86",
  "key23": "3Lx13N8jTvd7NVxzj7VBkion53zAMtXHzwwx8zTwkkpH6cyD1ChtxbiuB6V1dmhtUDqBNaudFLYyTYLyibeqs6hJ",
  "key24": "41UoyFErhWYnkSbd3dYqQ3A2khrv1xi8NkHXYhzB7vpM2EzAn5yhe6Axk47nCyhpQmfYZK9PDZuyAiqHumPAPaph",
  "key25": "31z4PLtmjbnGW9o58FAbGE7xds1Grf7tfr4EyRfQP6xeNGoT4v5rqQYFhuJymTBNZLeEbzb3FcSkXpNp9KVqq1hH",
  "key26": "2TftKpKQjh1ZeVsz5khp8PHBXro4qMbxZpvE2khR5fGzrq2uUyf7FvFkHny69e899ShfBTtsTFbXRAJG33c3qidn",
  "key27": "W7SKGExRvjZKWkfK5mdFaDcexpfqEuKqaJQrm3cPbTyC4erETeaYhE9DqqNVxaekFDHjS8xZXVdaQTTouNtCFqG",
  "key28": "2YGA8kRYPMv5KrU6PAJcM9DNxWG4BtLNaS7EXmF7pn5qfyVUfGYJuvD9zzoz1EBMjLoQKXpkx6YGVkF3MZqV3ZWS",
  "key29": "52j2GqckAtuSaf5tfWEcbtebzGSekE7CY2CMcRApmH3hKhbyv2gUR5uAnN87KqDXHxsA8XTZL7uS91Zb8yg3B7pg",
  "key30": "eVFHLXn6DqZgmna4T6GeFZDjHs9yf4tLBFoNmiRXC3jSJgVzZYGrxe8X78h1XCa95B4JWrBz4z32W7BzV2rkprh",
  "key31": "UwNeUuMG2GFRAWiYiDKdygMWfuq4eHvs1XsstUhajZH2X7Shifa86ehNHW3JpozeBNF7SjkfnZVhD9TCUJLRzBm",
  "key32": "YovJaVMgCFsV5Kaf9GrzaYpzfiVLgf8ZGRJdaweFDEKpB5mXhWnDJL5GHNveJPPKQ48aJ6uqSCHqQhwRb1tFfMG",
  "key33": "2cFQauDeKoVUAaSRKWNdXcpUSEWwehhsXVjuoeBDi6t22gaKY588nVEZ57NG8eaccyLg5UosgZ5n9QBhx42iXdQx",
  "key34": "4TETH3xQnasJgXB3DXAieSd18Aa9HFwQZaunYeHQaJVpjMDZwsc7RBy83564PpCZRE698ek6HrHZtkv3hAcHXfGf",
  "key35": "W9XTv3Gd6LYYK4NfsCRdt9rFehuBLEBTsx8uiDpzzSzwiySGqrYpB87uyzXanzmtYA3AVwKSMarYNexYkdksk2B",
  "key36": "4VgcpJmYdY8iRDf25SprJZaMz5NBHMyQ7fg6CoyWQtBfEHcshtD5GUo4LNcFjycrhwZS71fvtLr839r8jbo6mSLu",
  "key37": "5T8xAhaC3bw7HwnNEKzMyZjhAMfykm2FsTp73uurEfPrQj7FiUqEwh7Dp5NqnZR2tSuwsi8gZn698jbAZzWJunff",
  "key38": "56eYX7uTY5Kfpxt2iKcH1SgUkTjUMAMFr2JK3Li3pBFzJvAVJhUSB8zAjkLdMqUpFwUaZRTfYVfYC3obEzYiFRA2",
  "key39": "Nid9VZenfE7Fcg8z4VG9yp3SsaiP14McqVE2awKhgNRNCEiFv3E2eD1RyTRCvbtRaw3LisnSppU5rmSrQTeULeX",
  "key40": "5Pb8kAVcX6QCrBZfeXA9AFm3GhrdcaUxZWcNVcJsTbjY7qJHcskztrQJ67VGbC1TkB6HEFrkJVCN8hkREYtf6mhw",
  "key41": "5MojZc4iSdYYQXmXVtjJH8xD2aqRAXj6iPQsnHheEoebPseUtocAcBzg6hcY9HMi5NCBj9CBdFWxUidTD65KgsWh",
  "key42": "3Xc98vZKNF7eGUp3cgqTMFX8qUBVkNK31C2uXVwah6awakx6SqfgPH8AbqCfzupfBEEZfkcHSNmpLxDxmhffk6Lt",
  "key43": "5kJpd9kguLZjXcupf9FnCNd4go8K1F5GDCz88N1aMxzZAX69E58xkhsm5SaqQ7N5Y2xFycynXytaFHCMaW5w2r9f",
  "key44": "3dgnAo1yw55DWXStD3ZDqBpnZtLk8re1bhaxdgo9K49gn6NQUZRBQ4PzSk3kYsq9GRPom9ewMBwEVB5uTBLtPhkc",
  "key45": "5rzhevWobGBkXTgfuYsGzBeq4nuEACdDrafig8jga79mdCyc47Ak6TwjXgcPpPwbdBM9aFLmjFLsxLqbBqHoVGp9",
  "key46": "2G9hhwXZT476wMsNiSchxeFnx2evEVKMQQEvL8pns98Mgn6VN9cZMQBqzSt5DiUZMNZmwCkRRyoRUGDdTjR68KYS",
  "key47": "4ib78rc3YKGvW5h4pyrqsWt8QbLyMeHcSKjkmoSDPrtG7heHGd8dBaTrg7ofxtznePLtDaZDP6aEr7yf6Us3yzDW"
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
