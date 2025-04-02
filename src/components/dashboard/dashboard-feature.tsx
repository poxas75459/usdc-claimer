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
    "L2RhqeXiEFbu21xP8EkQBvDQAQpg3TXcZGmdoACx2ZC9YisRrvUXazpubAzu7m74YzfWB1U1EUrN4mKT4CJFjPh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eCbqN6iUYDKgg26eZjUBs3MbRTpjK1ERx1KwLMTBZnrTeTfM4ukxNoMGHXnhsYGZcexbwLi21xfzg34ZZ8QL274",
  "key1": "vGPdgCtXTSiTSpC9Nrp5dQZuftQ9Nr7UVhgaiwuijaHoK8jf6Hv1haJFN7ySHReuJNsNSFgRpRgofNvmxr5RX3K",
  "key2": "4xpwRHMisw9H1YQoYUJaBa5Zytwi1J143EgBwikCBzQCQNvB2ebRQdrCEWgGf1zQvsWqrjVoBZD6rZ9NmByWjEGF",
  "key3": "2GGsEUfNvCtBLpGC6Qq3FcxMjnBPaV3AkziS7A8X7Q4p5ZNgN5HF1Z1tZiUtv9EVPbgRL5u4xvBGdcrxjHVJ1qU6",
  "key4": "27SeeL2sBqe7gvp8FVb54HUNSKpZyWxJFzdrnQg9WG7zXC9GKvxFQ9XEdcS1Usi2uHA5C9ADyV4CGHc1ZLq2cijU",
  "key5": "4n6hnKP55d8TpA9iuoHubznPKUD35Ave3aVrs9tNxdiNEaAzKamdkyfbQQ9p9R1ChEaR393DEN449RtcGGvxnmrD",
  "key6": "4haeeyt88S3vUL4CFPNTg18PT5tschTC5MehS7xkQzJir7TNpF1xb4k8ZrX6MbDGJcqMNejadR6dkVZ5NduD9zRf",
  "key7": "3ESoPRQRQGEffA6um8LRLQLU4Qz24LUh2kxLHqS7zGYRXxkUznSiiRVit82kNkPi8pYLeFg3XuCGppBt2wTqwJHp",
  "key8": "27RejvjpxApEWgamqon63L22BYXPqsjtz3bYwPjWsYWPXduFoJfdV3KH225SC9TcxECUFcVhSbEkb6dLrdbSJMxY",
  "key9": "5kyN3PXNKA7dTHYd7gF1MBCNKU6oRRYpA6nSL3Np8mQoLyhzQpjkzNmyBEuFJHCizgDhoZeFGng9C78yaJaLa3RN",
  "key10": "3pcivCvWYmRfNhYYvmegZKTpswdPnTwpXrAixof7dyLmQsUhY6fEGju8nHtjW4pyZMn2NDH5V7BPAEFkMpMmbQeT",
  "key11": "5zX5235eTqQabWAJjodHpTpJ1pDqGsAuUezzcSxEF6kPFgGAkmoqR69CMq3X3BtD1MsSVVxCoPB2vWMiayXt4LrH",
  "key12": "jnLoD99EERWf7nzY3pdyCdvvHtybjQHDGcxNRvUTkNsmNKWScFitPtVauLCBqhucn8jSwKUTHTTesrJo8Jkftqr",
  "key13": "3XE1WWVzWHeNmQVuz517eMc8ZTeJq7gU1imZkqLHF79PEyYEUu24SfxMscfxMkf3TNTrzHkbDAHMM5h9JtaSSdbe",
  "key14": "45GQXLstXPnS6exxc61a3PRTnH2RqEF5YGzg5h1QUYHHirvkcPty4UUmNKWbvTRXFhkWGsXPLXZTbTagqwrHWBAN",
  "key15": "4zbXijXxDqqYBb6trLgC3JdXaz3MPJnRFL5SHtG2SVPJYB8JQUjYNDzMvDLCWvy6c8suUDYYQgWwdhQH2bZ1PLa6",
  "key16": "4NbnM4JHAEFEyCKAEdTctqn528gUAs7RJezEgvut4cEowczf18pWR2G5zCKmyNcMgQeoPwVfURZi5q8PNVK87TA1",
  "key17": "5WfaEn2Ni8yX7ZV5PVQ3iSayTTm9FftsqUR6QddCf9sWX42XeAh83owXRNjE4gKk9b7TUrSELA3vqY7179tQmjFk",
  "key18": "66W5J9Aob6vudvcHcdVrgRTb2kNVEHsdTGFG9UMib4CXVPz8fNoJMoLLTm6tmH2sh8CguyAG4ZZFq4wsmMHWmUv5",
  "key19": "62FLqtcC5wuAfEN6Zf2zVq9xYfvFNa4oAs1qmySJdJ3zDTWvfzS6XRnT4jud3gLWr4wcBck5YNEp8RGVAJzBNvPH",
  "key20": "4TSgY1XQLW7GUJCP7nbhUHCVABoUmb4HAXsgnXk5y7wB93ZgiNmyoimWUtAzTV6amG49q1QXGthHCgLSaWSoibay",
  "key21": "2U49j1JsfdqWkawfbJYTsdKjnbdTCF4oWen9ieV7BiyQKYGKaQBDYCac5ysdKhdnfBDi941KUXUK8LkmEwqt18wv",
  "key22": "5GVDyYRhRH5h9AZqpZM3JrDSx449DTULuuk1KMEyh5Di4iV1kPxP7nTgJNhM2RxW3DYzo3fYF62FvHwJitpjMfxr",
  "key23": "51x3khi1JNCtR1kN7dRKNrVBzGwG9YhzPz6y5o72v6sAHJsaFay7aviWjQ93A5EgFaoNRi4ZAzoY7N7HkcGXpqV1",
  "key24": "4yp9rb7DYLoBRv6KSoiikzgPaWQNs4HKtT5WdfoeLbaMt6F3ukzN4sDPUWrAzvWm13xc3JjV9qG5gRFGH7tEZyAX",
  "key25": "22HLFASumMcgMCyCswApq1wWNV2ZitpVVRQMMPUXrN1iFSRSsZYuUaKQwfEXf1sQnYad4BhWsvvYhrEgmcZGGJ8h",
  "key26": "36bbtouCL9rbzmPJGbmKJDbXRxCQKXYpYEbDjeUsi7ejs4vwJKH4A4CdxKuYNbM2hAbzbzT9zY4Qs7F4r7nTdYSW",
  "key27": "2MfdnM2GyE55uwdD6mfNUux1Xgegymnq4FeKBmz86Dp5WFX3NBD3wk9C4ZjfhyvwuiDmviWDmmvULxSC7eu8DLkz",
  "key28": "2mdN73tsfwfFZKnZLrsJ2EuNCQo2FdMZs1xgdL8jrsE9dx8znwhQMYCbDHj31WBmWgKwbntokKrfdtYr3tVdbdXF",
  "key29": "4TjckU46gtH3zsukUCJiUS16ufUVeUzR7HghrjPDvhagCRc2dfxmov5xuGdHT5m1PozbXhzQ8YDn822qzyrANawY",
  "key30": "XSorUmT8i6yicJDfMbG8kNgaY5W2z7FEYvtHDz8bhkaZBVVQ2f1AN13m4vSiXUbvbnHvEtv22zJ7hDReUqYWLZR",
  "key31": "58R6SEzzqqd53gzzSZJSBSZSRmVPBabhjEC65C6yxf8CAXyCSmQAkr5qzEhPq6B4vEk6wfxKTas4SUtP4ELSWq38",
  "key32": "3UDrFEGZHt3mjYVGPwwScfxZ3jk9Yhmzmimfyh6Lej3kXSHmEPp71eMjZ2puVvGe4uikoCgKCrQirWNWnrtSz75x",
  "key33": "5iE6phuNNJHvoF57jfxTLW4CJpwydDe86as5sApRgNPqxwBT5HTtNELaJuo7136CujyUajpMRkrkhdcUUchScH1J",
  "key34": "2YJTVdbUvKkuc2cHW8vwQHNsEmbRzq7xUGx12x3BFtisvfKMAdh4TmFnRPHnSHjhDQMUaTZ5e3yKv2nLkTeJVkre",
  "key35": "3JqXHAghumKjuicmsBecS41PLmPHQ1Tm6TiT21VG1aydpJR5C7sbug5R4bTTaH6nJYgBhcZEJE6s7BficF5W42HK",
  "key36": "5D9Y2jogqYo5wpk5LVwiABBQqPvQuFYLNKjtmVxsYdwVYZgv2cAWvY5ZHGdHq1dKcf4BGPiAkjUrLkVqeiXLGMwn"
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
