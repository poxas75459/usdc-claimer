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
    "3nxTbp3W6SmHyoNWHfFia7jHY9NrFk4vRuKvykd4x9kw12i3MF7GGK7VCiqpHbrFVYZAH25egCjnKhfgX2EKH26F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u5dY4WGcwKXE5YjuQTECz4huUoYnt9pxf3ofQTnXkuKq4i5iKppHbLuZXT3PXbV8pKXuvSHhg2NvLTAAuhrySYa",
  "key1": "5dkaWNdXB1t3pVWSQtwoDhD7j1DAs9KQBHP8PxiJRGULvcRDAjR1kx2vo7FQS47suqPpxhx37XKtt5awnnVBQNjW",
  "key2": "5hfYNh5VqV7HNgTCDEaGWtRqnvYQyb1XTgwLN1JG4aTgpRL8r18gHrmgR6nndiRWvCp9NCdJ4rre5RzQFMu3xGUn",
  "key3": "4WDwfBtquEo1aP2Mejhhj3RyReyYFLvP8YoTMN4Vm85MXhvrrw36p4xZaQxmZPnwKkoSCtZgyu2drAT9f9NKzuM",
  "key4": "5eYxGwZcwh7HjFP6SdReeckHnksYccSadnoJ92v3MPdsZyXMPN5kZdpufxmE7ALfqp5VuVdAwWTveSAt3hZEg7CA",
  "key5": "4VMrKLvFU5oVatdinFoR3U4uMQZq7HE14ggVyXWuaPQYLn9NrTRV9EGmJdmSFSgd74qLXdb7ocJjVoM3RXDwk8aP",
  "key6": "47stzf6rxVsy2kz1EFRbJSNs4cFkTJ1LoFaazq9XyjoVY2XRKw3b7p6BrDCDybdcuYda8w9zNUriUPQuRDuekoDe",
  "key7": "5Bm6z5V38drRiRRZBRMd5d6Xj1athFPYnG6Pc5vSofzkArUuffraKtu9k73AYQjDN6KzSsK26kB7Ttv5QsFvWnWf",
  "key8": "5XSQCRasvEVesVg5pVPe9aTnWKwS1jhSSAk4ym7NSFUJdH5ax9hakEZAN1S1PKD9A8EW8dQeD6mpeftbrc1LC1LT",
  "key9": "3uNZcE4k92LFfZzFwL3438JohKnnyQpU3jBkPgDg17aqspmUzUPjz83DQXPXkQ6v5S4NPGYg2n91Ke5VzTFqsavk",
  "key10": "2LRD9CKNSWrvxRjJmfu34xMmNfom1XMNpyvVvoCwDezQJRoQqiMX98VoCeMWsxJGRegbAZxt8TgLYZW8JrpJenNy",
  "key11": "4FLCj59JaoVjb5v8V4dniEHDW4B8QBuUy2aifFrYQY93Bw8mkKR97TJzcsYJwh6PiQzDeZUMRQNxCGX3wkzTfpkH",
  "key12": "55YcbtnP7nji1DkL7iadipfBSPWqHgGYwmGarMTEFFUHYVw5fyGo9pDqsWKWY3tNdHZugsRFdP8cTjUqNP2YWFa7",
  "key13": "44RercUmeYhifSjgpmbQc4esCPp792uiVcxZBaaL5ZgkGhRPXDK4Hxqq8LMemdoTW7E2QG2nen84qMngCP9wD4Yx",
  "key14": "5TevHdHFW6SV68F2PYkJahgdhJ6T1jM6jEFqZGJNhtAzG3pY4j4Nn4CdiMyd4Zkb9u42Qc6vw4pZM5ztiaQqbLKJ",
  "key15": "3hPg3mqaVUK3nQk5DNUfXEabaq54MGBEqPi1uZ1ZxDgtqdXGFuCoBy6LDWPEQvAr12ZbRWT7K7HiEstUCqMtocCs",
  "key16": "5Py2WnHuK75FMUgiHPJ6BTn2tmxLu5NWBor9qXWnYY3yGGsZ7bc2RLWpi2h3Q9iEgQ2sxsj7d2D8v85VaC6r1Cwb",
  "key17": "5bak2JiyuE6M8LSD5qPctgsgWLc8fd8GJiqBxe2KviYVLXC5onUbktcXPQn9BwySeDJq6YMoUS2g2YTCK13gwyqa",
  "key18": "5VnUGSrryL6zJM4goBJeSv7DcXAZfPSRpjFZD1UBSJ4JnS4C7EjiG7X4vH2DfPqbUiYYibrSWM9Tg4gzDe3xaoZc",
  "key19": "3B7CkcieqPxaiyotEeA6PBpBKyKkRduLV6drR1QyuqL4HjWpGgufEUVA1pfmxrNxFTFBLfDsF63mzuL9pCcehRZa",
  "key20": "5PgGKew1AwF5epBfDnaBfQEB6Le3j8UBfFatmjK6EbnECzoz58VxEEGnkpdt3EGVZSutTNF9nZtbgV2vtia5o9q8",
  "key21": "2YDDnAeNWS4M27nac8gssg73x8HLeFDb9sEKrjohYJ6Girphcjgw3K9iirxx5kpvSfgCCrx9SQRVAqsPbmQPGaYw",
  "key22": "2mm4y4oR6bMYrWeQKKx4qeZwA4aFFDsW4LQMMSYe1wLoFCfhCW8wnQxBn8Q97tQTCvu81nFFoAgFUwNdn6Y6afUm",
  "key23": "2zfzmVA1TEjh7r5QPLuJThPAnzLEGjiz9VGgFm2zPytfAjZk3TMgQ77nn3ueBEg5dK8TFZK95HdXZqZnfByUAi8c",
  "key24": "5mrjAaNT6vhibjRjmo9QDBhdfHDfjBRXMBXFZthNmVspzK2nTN4JPHgubuJigtAnHhbXt6YVYWzGKwfdn9u1XNuS",
  "key25": "4jidLyFaQsL67PvKcnEUwrbc8WMTLaJrnMVPMLXNDN58D28rDKc4CT4AuuAJ5H4fmEPousDYVrQoPcJn2CSJjHGz",
  "key26": "4sFGk4FmqeoG3FEo1MZQU6w8z4TsQ1MJcqbWnxKBwb9my4fjjwH5wn13LMrzvaPJBw8DnEsiKQknhAusHcuZwXbc",
  "key27": "4GgnaddkM61gmJGko39wBShZV14tizVv6jexGC4twd3wSttBYjHFeSAxGAYWik5pAa6haMdshXbRyVSw4C1ybi1V",
  "key28": "5ZLFrpjp27J8dh979ioSkedCiTWYx8j5VhvykDKDonE7N8tnsL5AjcwreWV5rYmhxKdPDC1f5j9SMzMoxwkENdf3",
  "key29": "t9eTs2yaztQnThPaE58k7ZSgJy65RbgerDT6C3128t7QgNqMsxexWch81KcJ9euTpMPZV6XWPasgjHcvYumadwf",
  "key30": "38MoSvcPXadq95TFBxQ7zBx1LUNGxcFTSMuVYhCmaihyXwDp5XoQ4qMVmUeqpeznjGxjgp5DkxcxX1ck3N6hake4",
  "key31": "5R4T8q8YuhQKTwEfXtSmPtGK3f8Xv3gYvaLbaAL6RKf9rAEPVLALK8w7bZPrXkNr4EUcyzstfK9Zk8239NY32ZSt",
  "key32": "2qtR4BY4dvpy59boRLHAhZnmcbV9EcWVyY3M6x92zzeLkSTMkqmXRKurPa4kPfL86Yw95cACVS4gKqNPLaiB3MiA",
  "key33": "FjUUjysaNWk5gPa1kE3abU4To2htDHt94tZEyUEpEuNoBsKk7cssbi8v4tA3JxNkSroJs5LtpMRsSwAv5Nq6yRA",
  "key34": "3J4GAVTTcpC42y99kG4Xm7ePt51LSCrpPCXgnRLcpqyEUfyJn6aCxe4wfKwLSfk7QK9CZUrdJZtYSvKLnfAnBTrM",
  "key35": "3UqgF2vmNwnFqRBwv59b9UL116L7CB6D47Tam9RL8CbzuPcr4FEHpe1MHzn7QkjnusfezQW3BETjErcAdATD3H37",
  "key36": "57u8trGkUFN9idkb43zoE52nZsnsHr3o2CKGeuh57SYYCVucETpxnoaSyD5onfNokK8hfxYP8VqcdcvWbwU7Z5hm",
  "key37": "3kMSf6e9huww5VAzb5EWY9PrnT6paM29ShBDbZWyqcBzxmhVxdDwLPgDvNM5npdsoJCRmhgJ9deLd6E1cpQXbCoR",
  "key38": "5ChTpbgyc2i1Atv9uhkenjje4T97WYV8CFw4feD4PBJXekQaiL9rssJTPas9wv5oVfhaZbnEMabj21c7DekCZkRG",
  "key39": "ieG3UukrKs4nqN2tT5sY3bgP4QLwrwQtdtiGKo1hz2mEZraoK5BJpePQboSJidEbjqAZQjEbCqu9RaRA9MxHP2n",
  "key40": "T5LsuJ5CZdZYSLoWbtfiauHoZzF1x8ZrwV5cTUFidkp1B7esBNhR7kNhJ2poFCyHbnMAX7wLGTX7CpnNPPWwDQs",
  "key41": "4jvm56FWmBebx5jk6vRLKLQAye3a2cjvFyaAGF9eH4iPjj7oSP9ofhizS8jfwCad28BmnqJkNDpBuaGRNMqJdVXW",
  "key42": "4ruAbie6nCg4fwfDLPk5GhZEHhnPpS56kVHXyzo9nLAwW7DpgXc9hJ5yQpQFB2YeHCa1Njkvz5b6iYgXgvWnfAbR",
  "key43": "2p2rxe1WL5b6VrTYPYGTS2jxzJ7cGiZisjQSxuUzyma6FsD3rSxibQyN2LD8kvKfKdU2Gi1m7wLcETyNEbogxTY1",
  "key44": "4b4sQPiYj4f5HivLaJmATWJfKzezuhx9YhLCcYEdKu3EGsc6HiZnAUfYCyWJKpeioaYBdx4wpNqtB7sW68MUjdJ2",
  "key45": "2kJNuTsj78hnHGqc2ZoMqA1m7ANHuxFxS1c8mZ1ocjNuZeWJshZYe6VvQtuX6NDWrWEvABG1PPdhjM8iFBwbUnhe",
  "key46": "3FMKjLHLJofhuvcbPk6XtinpRB74YyqA8sxa5SifScwAPCiYhCwJESmR7Fz9mybCM5kG3K8ekbZ9LJgY6WaqynZV",
  "key47": "5bEUV9KKKLHefQKtbeMWuRtn5PyypLMSToeitwgKGtPJXPriT8chCASCif4ttUaFQuR8WZiJzzm5sZ3BKADK4XFY",
  "key48": "3CRVdSKwJAULENA2dkhxZC1DaJWrnJ2iWKfDwLcDtAX2QjZiHUFZdFfq51fDZQgSyEcNTpAFRccnhbZRntnTrifC"
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
