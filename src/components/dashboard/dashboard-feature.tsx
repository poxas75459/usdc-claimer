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
    "3J1EoMt2t7MK24fbVVAv9kGqMt5cQNcg4UL5KZ3oGtP6qDVuCMAyMBbZSU1EdAzEcnU2yLScrFppH2hTGibHNybh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tW71oLFRwRRbcoaNZzTKkMwy4tPe29EfYQ1mACo8e84HzaDkcubp1M5tYcazsHvAvMcMrVxmCrjD2jPswspyG3K",
  "key1": "38jvg432ATVsBWZ3RjDWf3Fw8vfNAYBvZu4MQvB2sFLpm9duqqtDSV9PXDRjcpVj3ykD5zeEz616TscZKaGHM3uH",
  "key2": "57p9zoQbqwHRGMsRn98HkZJi9sjPLP8XHy6fopLbjqcg37JBUecHr4onXU4BjGA82pfvhqCkZc2WFu4nQvcRnZwY",
  "key3": "sc9yKqfSTMwvXJc4928uPchfRYLysCreVFirPSc7bCpDYVnYrEbteGWADAss7qed7qHbzPhtA7ZRW8kCKUBGBur",
  "key4": "3a7XqXTWBRrY1hpCr1bgZ9q8KMH5P8SSfcLFSeCNNhf9vNqmsfEYCJ1ieWdkHGNRNN5qMkhnELyRusnwjXFcxdFj",
  "key5": "5AL73sUfJ3o8zTTboDzrVEVTJhgNWzZJbWbffWcTno7kfF6ZvT6QF9qr5bPJFnQ5YQhZNoMPyAqFwz9AS2uDNDVn",
  "key6": "5EoNJK13gFSC2Dnhjbn9DzbVkLHKK4Ud9CzJwgU9H8S1P2RczAqRKHaVgYXPayNBp29EfNWBbwZvksrrffSQJ3ga",
  "key7": "4Cuz2inaNajWvHvFbmoz7qtq7My8S8UhvJhZhdHWfCapwJVkU9A9pP38N6m24qQn9DSe7nduXb6PWWkHHFYRbC1U",
  "key8": "2XrVoFvMMV4P6W6ai67VH7hnkHNnPWYv2SdGepdZSqbxf5NyVbMz37SsZVuPVTxshAbAbHjbyCHNgHBejhcyW1kg",
  "key9": "2dbjj1bvyF3tubAiurwx4GAna3M8vcJYD9h9BieubHc8LS8BsuKP89My39fjCrZTHWXxfrKQBaTtH17fBFuys7kc",
  "key10": "59HzrQT2XJNm2VSQ48xzybwwBwDKFw7VexRuEDMuneD3UPJhjrTCLBDYkaic81QXsn95xY53QV9DL7EVztnkFrZd",
  "key11": "54Q1pm8kTFf7rgErxx3vqeyGDBA438z7s2FiPaoBXsByapB8GVXvcT3BexE3jwSM6to9uKGwCFHP1Y65c7gcEsuQ",
  "key12": "2Rbe45GB7DEgjcVZtu6rbV2Qwb49H3Lrrg8abqAJSZT1YeDPvSXy5zNgFqFza9tKffhWXFW6PEQ9NPhSrbmCtj2h",
  "key13": "5cnVkgpHYKc8Qk7UD7RMnE81Gycy2joTQbxGHuScKv9SZQT7fmQnKGyDtk8mUUZT2n9PkWxzBMvHFYQ8FHP6XA8d",
  "key14": "2HttgVho8H5Qz7biCmBphwCtWLs3wSx1aAanjM7R3qNdd3bTY1p96Jt65rUXmwzsGcKGNbL9yfjko73vv1VkJBUK",
  "key15": "3F9zgd6sSJEcdgX8YVyB3YtXNR8E6sWzRet3FN8rJuaXUoVznUt6MjJDJcxad1pPTLqSHxtwgDtc164zkzQcms5f",
  "key16": "3AE98L3gFDvurWMgvN3KACiRxdbTTk1UhKREwCutFhEkt4TAq8JqTJdTyRaHQRCvC4M1XBHZQqxaXR4kgaW4sFKq",
  "key17": "4XA2czFHuCffnfv6PJ1LRHbsGLtd1pAC3eieRAdaafqmiFNESmbKNH2FwDfkX6eZCMMWDEbdom5jmbYz53o38sA1",
  "key18": "4MJ866dR8rQ3sXT42hkcJC8TNGxtyQajPMSKhRuZ6A9AyQ8dkg156U9oUBqLfzPN7CtjTfHgzc6N4umhaKzFS76W",
  "key19": "5rLQ8YWbdrrmjgi8fkr4KnHv8djfucwgurMKkNavuYxicMNhdbASKTaZGPtmMurBZNDjzEpr9dwfyXgKZJkAenB2",
  "key20": "KH1Fb71UQrVkR47jQ6ADDE2TSyEKC94wxdQsPJxJyscjPUjsEAf6kpL2kUBQvzupcsFebdNBhQiioekuyMewVpp",
  "key21": "aKadSMf1Gt8UnDzXmHUqivfaGUjsH2JAmsz3LMcCPmyM8ruxGLRBqx3Vyu2VcR7DKET2coAQuKrVRmi3fnXEeCG",
  "key22": "5VWDuoS7niNwkjdnCFoPxXSwg4QqdACKMGRoPjay8xu4Fe7f3d3AB3r7pgmX5fj84iNLBhGLXvBGx13ZZrwXrMh6",
  "key23": "46xHYzyM4mE4tdfuEqd7u3ZAXVNX9HLcm5tDCKicAMB1ckRUZSmtpv1aNpKjhJ5FfAu1Wd7N1hsoGGZfH5sAvZ77",
  "key24": "5Tik7oC4aYNZXkegTkPnuvVwzNGULbG2MxhKqfunHKr9mkZEnZhuQCcejaDQbweLcegpS5xRu1YUnpuZzQydMKFm",
  "key25": "2hVhxLFfbEZc1aAQUwDzGpiCbFupSFvRgdvgEZ2wY1qBxuBRTP1fmNx2v6twqXSfo7bHYfGuHF1BWK4ZuV3FJSqb",
  "key26": "4jbYo9ToX8Cf68W48ARTmLjVVPYZxWJxiN8u9dFXFUj93DpAWCa4AdcrY7UYeXG6GHewyaUaJww1nF4r6ryW1Wp1",
  "key27": "3xQBd4TLhe56g7KZ1J4ufaZUPHM2XqG4zxeyevLxnxXnmKLZViVR9xjwZvg4LzNMVhWDxLy1VMpRinGUrkhMWHoo",
  "key28": "66JG31ZhGyS6FgBWJj8CnhTxMadNhQNMi7efMBTegWDSn7RDtJRGJUx3hAEnVAXct1oMiaxgCgTqx3Den7UiBJ85",
  "key29": "5kzP2bGfMZxLg3WngL4ggDgsYYTuMY2pfnHkjeyKmRdMKQMGRdsehbxhJJqwtgvsPcNHbUbdVizpLSTJBHSpTzRb",
  "key30": "4czNTsMiYgmrGYzaMtKWeU4hofCdA1SRbp6ndFhgGcAKA2NyX8VX3ENhXpyoPb21BMuKrSoojpCq2Jrvg8FXPpCz",
  "key31": "3FhSpXxMDQzN3moRg5JRoX2Vin5F79JxiDZQJ1u23sJzorVzb9R2pLHnLN7siZcbpGeSuimkJJLG6CWgNxE7mZz7",
  "key32": "45qt14qV6Ji9EL858GgtavBNtVw51urtK2K1Yt44t29zQBvvrsDmdPjgCEN6DZsSvSFRWaxA7SE5pz2MPstiJAVy",
  "key33": "gS9EpctvqzuvMoRvAKkumr3CJDPEchajfY4EwnVjPTVxZFxvF3eTV5i7PSCGY68HTAU67r2KdM4MjMBERTtfKb4",
  "key34": "9np5VRxjWiEy6SR9QVNLgXQirSPtcxxwhnwD9xLics4kfappiZNqarDboVi55xDpXUeUt4Gvug7jdJ3w19ThtBZ",
  "key35": "kc2WeNrashChCYt2FuoZaFh1m8XkoeXrks2ZmHbVoCkSotuRsfsUvjxtPsn3vMsjQyUJcKqFN5mycz349H6kaw3",
  "key36": "2sazuJ5dw1kMN9uoHBtrGPPggqCWkULCSNXnsV1afBtREGL14SMfqGpcYMEjCvrPUJwCiHMXsUAEFMpeg5eBZXR2",
  "key37": "4GCKYTvKPYCEHXN5mzwnLUyrdkR1bENAwu8cjBtHyVJ2BoTqjF4UqiDNmVsoqs6FDXR3pdggTg1pyTT5YMG3PLEc",
  "key38": "3nxwnSteY7n5yhQMLKDbNDtyz9vm1kaSB6qAQzHQFaj4rVMZPiQLXizMQFgmpDDoW532oQxtzEqYoopc3WzMLpg9",
  "key39": "4qhP51eREM1WbKRA3merHsnt7wk3mWU8HWihdTZ1i5VC7fSt6aozRPkStkyRiAWPbWfVsBiadMdwuGiYQBTB16Dd",
  "key40": "2PjNmAp9YhCWiA1ut3VXak4NHGwwNexaB1ACs6g9EjiEpuw2z7NW3w4wsqPBfFFfhFfnVNZp9NPkJLF3pJCeeown",
  "key41": "2P7TNpNYQCgA8wWrCC9MagXhU7eiEYhPG2hmF9rUnC9kuPqiSYuGDnJFy6YzCWvbQU9v1Tdnk286gSyXQqryBZJj",
  "key42": "g2YvHEtWGQNFggLSjGnLrfb9kK4ZZ66CYbvfk4TE6VKRBxch6CfVUXWJM1NRUVMkhgZsBeGSAeFyJ1n66aqxmtM",
  "key43": "2tsVmJ8sftWCeUzSGGUEzLvMYQ4hRHTjTV1gsopL8T6nZecQGjsjLrRvAmHjcJJqnW9JnUedcAPRUYMDHBdpnTjV",
  "key44": "5UCCpTXGKgAcHANKwqfEHWcYmzRMTGB6fSQAudkiZgmmZ8phmNk9Xt3Hd1nAGiEvPrufrGCGNQaBfFJUXfskKgnY",
  "key45": "2vskejZeEh2aPBDZXnnJv44j6ywCV3Yb6xfSh233niGEwhteHFtb7s7vFpgsKMWRxZvKmtzvBKRubFXkUGQuN9ZY",
  "key46": "2RngDCWdYMuuBaW5vyhRTr2iwoZm72CPavz4ouPthRZ361zAgrQ5g1LfX4uyaxxo6ZLJq6QrRhPwayno7uNFaFHm",
  "key47": "61FHYLVCzKXL6th1eFBW5CgQNuN58XDXexxSyuATjbacQgdfDyrieKadjqM75T7iQWAMDPiQi1eSbKhKgBT2yCaB",
  "key48": "2vGtxCoP2W2NoNMRsLzFT1Et3YFtSqnsnaf6Bx9J57Ak8Mju8F5oKaPV1inTZQdYgbrr7wFxYSHY7TwNU34dNxxt",
  "key49": "4SeUwWec9tU4q2FFWpZMhZncsXDGtNg9ags9zDmAJtcmSxRnQV7zi7W5TpewejiDoEvydrWGjW13ZdYZGFvgCGCg"
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
