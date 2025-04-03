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
    "2nSTqp8gwBt7QpdkbePZYuiewXcVzSFMJjPWhX3iKcptLBSLkqkaiwnpTV6D2eDwMMhLGWqzxPSsnJ8r4uDuft8b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55qgCF16J6xPUL3cwb3zJceGwCmmGQWJdnWcA1AVjNfqqvmRKh7qapQwy6c3p61gnPP2Pb22N1Sv7fdxAzrYn7K2",
  "key1": "36ZvNsu47muDWeujQMzPKdCpNLh9jT5BBos1NTq2eiJb4dx8kzrNVun3yipUQ1puejsTxCR4gF84Vp3EX8KNGREY",
  "key2": "5XHeCnGMr7VuZcAfJEpnK1B7PUoZRLtGUjigMDAcgfEovc8kWeRWCGfB6NYQ9T2pFYFR2NFf6BXMjXx8oRdokm2g",
  "key3": "2SK4GQq1qzpXmXMhUG1m8daiDc7dYiBYYhhPS6cvpGS4ZVRCin2moF5o3XA1tqi588WKFNdtgmodyXDpd52JBCLL",
  "key4": "3GcxBfktdSzfEcFAWgcSw59r6JU6TFfYJS9z6Ze3TUgpCqQiQGxCQzMYwEPrQwwa32MeWLdztEu8H3mLWWrtWTbk",
  "key5": "3DvrC7Ahj8xhBhQ8CY7ZPbCda4Qg5kTbyGWPijTLRqNHTUAm2X17R8X2QLnSvq7BdJW2K8UjcFT4pWfiS6nKLDSV",
  "key6": "2gHzJ1UbvVWPzuq4tnb34htKHYNqhdGktMvrWTsg3VmUbxQoYkeezG5q8MGkDTwYJS1jzJBAyzfmxJLGqAmkzvxz",
  "key7": "2uaxZ5JtMdRaacHPrkodFfpePBf9TjeJ3jytGiafjqAdR2QosDhyhiW1VYyH5dpt8nM7HPvTQR6pDuvM7ZJRfDWN",
  "key8": "3xWhHowrsqBTk9EMCcbzPhsxpAxrLW1ktnLzS2CbzBP3LFCc9asSq3mzgHnDvquWDuo4Kgy47UME1t4nN5EuGkhe",
  "key9": "3crYorSu5roxri8DWu7tBNwRG9RwYWAFA6Ks6ux9d7WEcsebwa7LW8sDK9P81ZqQyws4y5GHRre5s9hKbAaACVDB",
  "key10": "38QxaGTufyz698WH9SdtVDC2QHjwVWFyyvw5zY1m9P3v3mVee51P8LdYBhMAJysuYQzwG5B3G6GUp3C3FjXv9kWZ",
  "key11": "3SNCFQM7ddynedriuRmqG2bBVo8Qo7xYsPMrH8igW2a6zbcQmZFA31dfDE5geFbkSjhqMf2JeeycKfFXkaf5Eoey",
  "key12": "2QGvY9NP36hfFX5m8SzDoo5v53XmEm4MzHc5KzS591NSrh7apdG3VMFDyHMp47Rcf8ekxeUvisNCu26oSGPz498Q",
  "key13": "5NRG2qWT3eYXHuJzQXdir6m7FSAAyCMnqxMMf8Jib43hKZoaKgdshSbDwRA9as7tt5gnqnqh5rZvukFmTwKaeujD",
  "key14": "52CXYHv5gDF8bTjkmwDrx5QvqqDA8KQbKUmtANGWSukDdgS3F5sZyKcFPV6btw6EAfheDstDmmQE4qRiFVe6tvXa",
  "key15": "4eQRRUtNnhfpUUuPgp1dkWEgBhP5aRLuqmExLdyb5JtQecaY4yZNekmi8t19m9GeL8RbBfg21FiY4z57ez9J4kNi",
  "key16": "5k5ghgaqnmBEgGcefpHK59nGc1R5aXoxxcKtba4LrFZo53WxeXMPnK8EWogWLuyEwrRVRFPytFjSDJCqqJmaDeww",
  "key17": "669SbXqKCFc8gkVreB2ULi9ofVvVYRaAoVpSNsUYEeUKqNM3FZx3VpcTWUkZNitxr5U8mHzHcT5F2jPnmn27Smwm",
  "key18": "66ydUVN4qSPzfYL6UvNWdpdWH8TYzV2eS4FatDJWtCbqZPVQLgCwf882f5ucHWoRH7dZPfMyMfWhK1ecJgR8C8qi",
  "key19": "2zwTshtQYVuEarEPehyW1XZVo6fyYNngSbHQbxG4nxZ6Aew7UqHKftE9q7wacF16Qhwm4tzdJ5nLkwsUrHdVHYug",
  "key20": "4PMAaY9CjmuhgWwqP4ya46Dmiy4oZsPyDjXTHqBWCUVDGr6MXvEqmjXPF5oP9BqxkrtMVHZjVSjPVdVmnwwYgV1i",
  "key21": "54rWbExAR3vqXD1aszCazp8eokNR9wHxisKHJkHEdyGYWfMu6EMbpn3nf4vryeNnPeWqJnwnpJR9itP9nZgJu842",
  "key22": "gwC5GGdN2uuxsuBdUifV22hJmxGEkjox7hGU6wL1Cp3WAV1xD2VPHPEy9pFgeBdSpqWXUeAqZssTFJywfvwJsQ4",
  "key23": "4oLa8XszCr2dhmrpEwsNgrN2JYCdNxs6mA4wfEeRp2dUzdUnDrEpCdsA8aHadTzMjzfLXDty237P28Qe8k3hfRoM",
  "key24": "3syFgoHVHeQRwi56eMoVJVbr1vnsqNAxhHy8PBwwSKmoJSH4oW3x4W5n4V2Kv9ChpxAefriKQ5bSK6Lcr9Jz2pVN",
  "key25": "5thuea2K9pY8UF9BKwG4Bpk3todjAu8UALBvbehoS9KbQdgUVtBtvUM5UwxMQVsw47P6VViAAmtuwP8qi6S51CWB",
  "key26": "5e6VRQ96Zz7qaB9HnYpHYJHyi4DtAEJCNPtDa7roYyCLXEVRKwggE65iqzgG6vG6op1bxeakXKqaLjunkQNP2mTo",
  "key27": "sXBmJWPYnRxgsAHWkpbKKyM51arTDUN1eNXey6kMqrPKTA2wR1u8dxmdTDHcYCGBgMZFtFpaTh4ixJ3drvAxrVs",
  "key28": "4EuZwh2jfBZjWt2hrNyPveV3U6yCJMF5ajj7oTSMqBnNpe1ad8UCgfuXyGKSjGZSu5KQwnKVjTKCiYTpDiANRmYx",
  "key29": "2MSzxcY4QTs8Tw9TgQs7FpQNStsQDdGmAdTLWtX3nd9nEsYA7rofTAvApKtsJKTBKvqhVoc5ksc2CzUegonutMAb",
  "key30": "2GaazojTnRwHcX5JnsXEtCh5dxR2dZfGfD4Ub9srWSHafoNXTP5Sc4NCfggHmVS69GJny7Ya3xGfyJXgrdfrLiUA",
  "key31": "3opP4JFjQHSfSy7R3Xp6C4p3UCdf7EK6LEnWD7UQcUv9hR1p6xvDWidfN9hzCSG6PWdhdVLX5AkdgyZvrF3e12ni",
  "key32": "5GZa8LB2jYyro5s87EyPcZtb5GjjJ5nPXymwJe71eANGUZCh5JXPE4BD5vuvLetZMLKC44v5prSeZ9tsFqNhD2PS",
  "key33": "R1eXgH335YuWAUk3DVM4Et4aaRr14JnsMuAzTM5vwsJKhvr9GmqiQsdowBYSAH3JizJwDBLP3XHGnMbQr4b8ZP5",
  "key34": "53QoiV1vcy2oP7uGbmYuk9iaqwmUTzUB3mWTq711nHCHidggFh42h46wWJd9tonVisam91iSj61jSEXZCrfV5HHB",
  "key35": "2oVAHZ5armCWhrDPmyguUJ4yPVYEWwLFyTwfvC1ot66DdwLUvxmYtKGVoGXb6gziv7zhw8k1H7dwsXTEDso9qbnk",
  "key36": "3norya6q4qVeHWWzy8kirZ8L5LhuHkB8t6fWiozDhpCHNfBKi5GdPXooEXhPU6BYuw7aY3317KUa1ypt7VtAkfHg",
  "key37": "3J39woYETcbgfAPvXoRRva39eNfQ6SeaiXsQAMs7dGj46etcHQT1NRdbBYat4hZMNgHzSwZazMTdiT4hVUQ6KpeG",
  "key38": "5LZpRbG5qZjYbmd3ZavWT3wPXangF7BA62ZKSUmgvTEpkSr3X32nxhR61Vi3ytFQVKGtuegW9VdTFjDvZoBV4vjM",
  "key39": "2LkdCHELpSbt3QmBwnjrn3Wmeiapf5GAto6Eh9mvEZH1KzvugkFbinxabCnAakYqhoTvTRoAtEh21jzeUNVV5NYd",
  "key40": "3D1zgxTGMdb4zKS7MujfwGuMwDsXphPUsXDj1xbDp2o44WBng6B8yVwPAw4H7tJPHbgRUVk7V3ntTz5H3uVMiLT6",
  "key41": "62Vh5eohJivsmNJCYYhEcpeC9y3eHvk8xxxb24ov13rxiDSR1Af3E1V8GQFYsxE3u7wdQE8qnP48p3i85kiMiZnv",
  "key42": "4Xea4N3qaRJR3KBNtNkM18RqB8W8PpqD6EU4RFKJya6angifeACjdbQ7dX5WK23dYwLw43jrGG2BJhqRU8sbUqXg",
  "key43": "4f6EpEnqSgfHX5KFkpgZ7JU1jM7sLp6Tc9WPApoMhDY7DDLoJxdnUyE1dtXhv1VcRqam1KFEmRtEfXK9H2DFCpY9",
  "key44": "2FyB5bHv6NVJ1diCmxU7cSBWNM9gmVJc3YsjZAe7UMAX9Avry6h7PM8ESbaZaPFei2uPWPhyMiSJvmmMyVWWG4mo",
  "key45": "2cKe1CLd1Gw2NMByo4AzBLmF1XxVjS4rxLTLKCwRD3T1wSMHApgvi5qmRXEfPRKPpqcjCyiy2x7URZ1ZpVjbFXog",
  "key46": "5gMqBJ3eVgGc1JzgDgDTs2H6qeDvD4fbXTFq3GCP2TBsNEDc8VRH6nGUB4y3pLXyaTSYG54vbzRoYdyzRbwhkwaS"
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
