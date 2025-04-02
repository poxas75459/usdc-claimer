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
    "31skP2Ae43TbYbQhjfLnBMUep3qYXw23w7jx65RDtjNqECEQgrHneYsMV46pLxGBkQU1jxff3MdrdUidoqUuxJNn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vCsKJGPXkWZRLn2Qe18EezVxfg2Vd27reZPVvRz6933B2gYeAFKDZE9W365PtUMNo2iK5Cdf5jexM2eMGLEHRp2",
  "key1": "3dveNR4G9XevsKTVTF5tknUXPoKSW1ZetddB2MhU4hAkwJs5WH69uvu2KfuUXForLTkLyHDUPYCGSFVAR9Mun6qQ",
  "key2": "5phtCQH7jqVdcSuZ8qm1bXr9gqcAPZyVF1T9jkCx5rDWiKobMGu4izCbpF3FohNP1KbumkQfZkGyzUBXNRNGFUvD",
  "key3": "gRR8UMxfNYUJNc7dbdaKNq8YwFp4voaTFHKZUGxrMaD6e42TC7kBnUKvE5M6moAkaUvQLcD6RFSdoABaNxdBMQm",
  "key4": "5FbUuADtqV8NPw7CEWHMfx11K7hqPVcXN4LFcyKgvA52XvHHoxuH6oZ1zLHyBR9SBMPYXjY9jKdbzqREFLPMA5BW",
  "key5": "2GxCrHuHcjeiyxEjntYVMzzG76mVvj6qNvEszipytqVrm5SAJY5tisWGg8kfd32h49JcjjhmVauGqxcBz1ycmzNj",
  "key6": "MdmVreMw8aLY1am7adeMFqBunb36k4uwsrvk2pC2vN9cRsAMkkAKdzGkwdEtWuQaPRehxuy8zUGDBqGXiYuy8dB",
  "key7": "5LezEQ4WLLwwGgTTN7nWSgtenbkPSqQyhUjif7EBFxHD3JQ12bjBGKcnsAyY4moPb3zAaj6kY3w6gW9tDUMbSYXV",
  "key8": "4yroeRYcpoomrJTribKLJ87Bm2cn5psPhLu5hx2v2LGpMtaSm1DbLeigJnVCEYjMpjsnjwSVtv7bQSGguu8hyw8K",
  "key9": "4Eqe7Wv14i7U66t5HWzRCEzofv8ZvVky2xpR1ixiUbYGkhUYWbUduh34Kf1iBoRTVpGDuC4KxUZCcAUyJtfE1sR4",
  "key10": "4XCFsfErY9BQ2QGmC5aDv7Bam1XSK1heWwZFXN7BKaG6dCRvAoAKKSBK6663bDHfvtKN5v9zCKprVgyvQV6PjrFq",
  "key11": "27xqnvz9EHnQ16HcagfyMMuBbtrdQYwZuLKibXB6E7AcrTxXN9pY5AUgSoeQsead2MqgVdsLDCaDH8uiY22SNtjq",
  "key12": "61bFCkBi6HNT68SQ4tCA29HGbjBrs244fa5hJdDjXuvfgP7vNUiVcRSN551ZBcmfdgwTR8JwvD1ST968KpFdn1uf",
  "key13": "499rsJF2fE8XGC75Hfm2uEifDcb8JfC9YYmY35rXiHK6TJumMGjG5ABL2YDyeQdCxjz4Jz1soShjUhxr7L4KNdLp",
  "key14": "G7D4YBjCjYC2st7SJWj6uzpG2MFJERZSASLKDGP2v7VCft479XFAvuUwvDKGma5cFNQhmJpfNhkmfFUj5sz5CMy",
  "key15": "2EAT6H4i4oPyCCPUd3NReefsN9grMB7gjbbAUtB4hZkftyvz4AoXR2imqJWqhEXSLy4sEVDfSe9ZTuJMxFg7skZV",
  "key16": "4pYQuX2oSjQFnfCgvybdH2TMsmHkoN57Vkxroi1Z3mpkmBpaaXUEVH2csRrB96AXL8CRZ5FDRXnJMsa1dragYFca",
  "key17": "55hQbbbaSTao8UTHb28aqkwRggLd179YFUrhgiAPL7pHsgkp7cN4j13bq3ZkBHU6GYGDk41gX2TgFx4MMCAnkmQr",
  "key18": "2jdRnsUs9Qe1GWxsxYH8jM5fGxVkHZAzBj5Y1kRTJiZMmmkcDBaoiZXSUdZNs9R3LVcXppCr2f41jMjEKcfJZgF1",
  "key19": "3L4MP94hmLR2kptmo7UX5ycw5nfQ8tGQspsoBZ2PUCaC286bmMpVgpPaG96B4yUoCvWHcuHQqKLZjNPFiH7E4cLj",
  "key20": "4d8X736y4UKsManBxY13C9oQ3hBp71MF1USJKRmHJ2UB89aUrcr5A673JKWWe7inDeNCTojQh2gDGn4qbRcy5BeD",
  "key21": "4yrsNTuq8ehoLyKUjajAUzycsXYVdmR9MPvmwzo3iLNWfEnHR7kgVZsPkwHzM2DCwESFMErz34aFiusAUGuFAEAi",
  "key22": "34D6wXefcjLyWjANv81PhhHpE4iwmKCQfC1EDcR2kmjn822UfrkCXaavtfJFZAP6rLrn5HtE42M7itVWL8t7XBZM",
  "key23": "4FZC2733bNZYkVbMqkf4jeQqQdTk3tao4kFpd4LkAgYBwV6knVzSJKXLUQPfkB85Ghb9ESWNAktoDvzfTKAhBxCH",
  "key24": "DLnwgKTqiGyP1R2XWzVNDcjnaf7yNbGATypYH9TcEaEiZkzsbTcSRvNCgfnXe558b5eWBbMhdsmdZwbrbxnce7o",
  "key25": "5GhriDf3mHdBR8HCHcEQYb1Q4s9p4gfeYLhqC8zYnmLVYHKLQHKWqbuQU5q7KnwhENAQT3ABNUyvhMnbcwpAKcSq",
  "key26": "5VKrNbAGdGocTejD6XTnG5v5HAtcxvpqRymxx7dNSCFQaTSZpcxgxEihJrNPNn6eVtJHmJBskvScY4PdfFR8nGMr",
  "key27": "R2Q1SsVuyGbh22zXboaXyG1HkNHBfXMcmMqF5PZABiEQ1bjZGzgi8rDd3ZxmhYzhEPkVYQQVv4d1tKtgF3EPBgE",
  "key28": "MSh2C4uDbo2PcLXnmrn9SzE3zyJBx3Wrjww2P1dojtzZ6VE7vV5A2VtuKkRhk64igWBfic1rd5w47sikpY4LBNz",
  "key29": "tkP2vgQ1bNLqRQZqQDaVMkyYUioNw5ndUhuwwTwVUg7V1n851YWC2XNPKkjnsyRpyjWw728dA3QStrEkhDE2SNb",
  "key30": "3uBMCJr3juGvHPCAKyBQ1Um4Pdwy7bmtfnmJm49kY9ag81tZUC3F19VNZFeWLBKUwT5rWmoDYXf1AVA1Jjpz7hpR",
  "key31": "M3RGXzZU2k1KqaqZziYu6y7MF2VooK64UyMTXj5c25Xhbqi3obnNxXZ5tESFAab4QSkoWam6U4baXA1u5sbx8i1",
  "key32": "4dEpe2jca6GPvpT5ixeaWqNNuzkxs5nW8kgUFiEb7mp7w7PSpGxkMTCwkc851dCFS1gtYi86tKtbtJmuCdQgENbc",
  "key33": "2by2iThRbiCHg7KMFQ3vUJXPB9zAvFh7k3FdvsdhQCTGumbFGrusWvHL5T622Bf2MfqTMg4NZcdCJho23AVkLQGM",
  "key34": "zPpsuvfLqUtKTH6NLntKmhVxQtfAaW3tebopurBE289kUh7i2DMeaASHo9kdkLkciAwoV8ayWjHEABj8SZrvSui",
  "key35": "5EnyfchpDUySqeUzFLK4iRPYFhK6kbcSQvgmqTGV3K7oPjVJdUA3qyQ7TUA1NiZMyE6LS6oUzajj4jq3SZny5riJ",
  "key36": "3e6aWuhXkfWWzY3XSFDcKZFhDPXbJu3gzWEXsMzA3sN9Cmj7Hx3VT9JDk7g43SmUC1G1x5HJ3JNfh2BiZRiysK9F",
  "key37": "5rY3Y66EJrYFGi1P49K22DymB5hotgpBAVQLiRzdwUTPBrCGyVUXNQdyDEmgs1Z8sPePVNPQKJLCsZjXFnmp3SK",
  "key38": "5FiCQgswj1jkno2wvCB4rR9mNCk2GxwnjZA9qF1JdrbeozbkxA6y5EoVMjoGWGxJgnGZXuKjrxdGGgReJgjPUB6h",
  "key39": "ggVWSgRKT3m1NQxvZhFTDcFZQDM9FpvJkgetKFDPTbJYpDKnbJdCqFya1rK3UxMbhCQELGds3BCnn9DSf5KoFQu",
  "key40": "2z5bxqwCDRuy9jpzPCoW62mPifGZKDV1ERgyzbwgJLdLiojpLv3QJ9Q285czg7y5QnSKLNgdasBWsczPrDMz8wZv",
  "key41": "2WzPDVcpK8nbvUFUadfdhU4i4tyy6bYThx9RqytoM53kixcaLfH7yi7sJavgnorNmL14XKA8QFDs4vsgmhbeYkqu",
  "key42": "2H12wvVJshNfkXRYviqYdD8L8F6nUePtQHMWsgiGcJXyFuouMDWDou43rsFX3r6YiTtdSGXq5rai6xK6wPF5J55p",
  "key43": "7pVGgRip6JjKALqtR5nobMnsSJuxj1g8k1VzuWreQDPmdmZGLMu628NTc1fMeHKffcMgtFmHjz79Xgo8ZJ2E34X"
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
