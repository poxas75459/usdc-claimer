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
    "2VWHy1PfjVL4s27Yp56ZZB4yBramorVoDdnp3aNdUmj9DS2ogFApFhuSsfGfZBDaBWkWQjfTunPouidwesBZR1by"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qpN74Fk14CpcGNECYr11GNAjPMD5bbev2KDoBx7A81kkEntFhhZSdTaunytxmFLwRV8JTLW8TYdcWWjuQSTF9Ju",
  "key1": "4Cgja2zoNjXNRZcvSqoxMx8URGRoafV5yieRNp1QeqVLcLAdbdBAdBXY2Mt4JyLfMkcCW4CotVyG1A8pjVhtZqyz",
  "key2": "3MgRNfcApCGWVgdTygVqUKTfMGfcmFWPhdFPQ5GmmMkPGFrBx3GMo1igavtJRUHgyEnuF38qxfEGeXG86y446nn6",
  "key3": "vYR96bf6cgqdHiaiGqteet5YPeiEnRbk3EtwQkBFs3cCdUpasPJazd7Un2B1dArejSCbkegejoRD7vUf9weRCfM",
  "key4": "5u9wpVLsB9RkDzPDBUCNBCEtbEbBcVD9sQfpnnmsHmswDKhqz1HAGjXPqNCpLkrhxpYhPVLohaE3GDZBFkra1u4H",
  "key5": "2Zr1BYxt6m6FNUU5rJhCXvyzPg2tRK8BVwPjthsSVxq8uuu3ZvqnQoNguCUy9X3iCHQYyETqz6WydS7EEsHNWEKA",
  "key6": "5h8k7nMBFCA6XpovwNzVDnqcCqYut4Y1K1KrNmSov3wX6QCwKzaacrxM1rPCypczx8rLvJGiPU78EpLoK98SEPU1",
  "key7": "3oFE4afN8QGpm7VmzGNJ3qUA7yS5w6Tvju6c5QUQU9cSYvS216ZQsuBFVUKW4PAuLsw9nAkvYWSJVfap2sPk1Fhs",
  "key8": "3oN69Q55dQPgE3bm9Ura9UaEX69QyiYb1MEEuHemAM6AaPjaqr5zRRqfNAqTDYFxukTMyLgPrQwWbqev5WHFeJrV",
  "key9": "XZHp7chPFjvw6vHAVAZkW5v9VYKfdzBJBteNPn9EfsbguND3wZ7J66yNtrXXmJRrKm8p4BtLv76ArqdmjRrSbMd",
  "key10": "56jrPmHbNhRRdTjFfs8XqUCX7Sr3Wn2NsNPUP6GZM7bbaurjpS3uGvn9kNFAq2oVpSxJLjNt4CY8oQmDSjtvgUgy",
  "key11": "5aSNaPnpMqH5xKA4tnBiSJbtDw5dS6YFjHWJoAm6ceJqRE16syZDX9FktfUCtCmozky8LSCQasESdA8D5cBnySgU",
  "key12": "5py8sfMqDCYsgRdaAdTNYcgGWNhAU5Zga5AhT21MuzxFPW5j2sxr3EFBbh66aGMdi6TqDfejhsu2ScLifHx5GAoA",
  "key13": "2haXqwvFjzehjGPhhHiccHLcExoP5zpthiC8VaPojXL8LZrihnyfMG8QVxifeRyHamMKLc7A3wZX1MFpMzkpNHzz",
  "key14": "kLLJrZqdpfdgf8SmrDBEyUgCWxuxSxXucUsahKiKuTqFwJsJUX8iyEqxoTaiAtJXAn4uK1RbhLP1taktwK6v7Vx",
  "key15": "yEmGEkT4PcrPZZJwGcUCVnq7GBQc8vNBzqhf7NZLm6RAqHwyEV5ui8AnvrxbGQWWVTpFW83goHb2jLLvV78BeFu",
  "key16": "5eSAtaQDBHTqyKDHg2fPnXx3ZsZbBKoF5VRtFGvDU5NEo1NKzvQHX67p6D56BwU1yAK9SM1r2YXfQZcizDgEupoG",
  "key17": "5RmyEL47r7Cidgp2v23pCrYp6vLqF8Yu4gGDXNzdmdMiM7GBL1f4F64RKgN5NfhdE4UpQmbEiRmFWmEum3dFE2Vw",
  "key18": "5bUBqwQq7bsvCKt5CAJ5QunCSpksm7b1Wne746fs1rTkTKAohATVZ6xPg6iE3uCXMyCT6Bo5ggopd1ieag6U1ipi",
  "key19": "52VtR9s2EBpG16yrv7mZdwiXPWP5NJ5aEaDSy6qqyMht4j8ps946Cceu5XGFdDeNLdfsuCm7R86r2MW6tpPj4agX",
  "key20": "5jTCSZzKWM1JaYdwDVLuvDNNxPsaQAaAMPxDwFBAD2g7Gb5HyLR64GrR8RbSKJShgTrtJVmuAgdYF4AVdH7no9zT",
  "key21": "5cnvWHfyUo9SQD5Hjp4Lb1v2hGsW6fwCr64375vCUmu57g1ynu28JrocFDDqu1h8Y8jvcC4kkHfSu6eQgfw8Fdkt",
  "key22": "4LWmpzzRzTjWf37c45MURZA6NNf9LKmEy9SAxALbLGdWjnsXhKoumLKrhdNH1z1NoMZ4Db3irNoR8EPcRR3UNfce",
  "key23": "48vr5WtW8roGcWpcLpdaXLrg2mG8nxGFWg6PXAZoyXbVwu541mqKMnwp2yZkymWSQ1vsY1xrGkG94MdtbNQh9MSr",
  "key24": "svgWS2VbmfN1RLH1FtorseFpaKai815D13SQpC5uQUrGoUSR9KLbgrVV3FUUem2QAH93WPec9LTLRXjrXRxJCTG",
  "key25": "4tci42qxfv44S7TqD7ZfQZx7W8nbqWnTsxUrX34rrt1SarSD3MgnNPMg73WwA946BAxA13XvqXaHax5Go2LxW9jn",
  "key26": "4RSWC5V8sSEMPUfW7JFtRbJSsiKfBoVvxRaD84iB8k6x4wAUisuxvMULmtPpkqDermqP3Xt35wbUhmCk6XV6yqjo",
  "key27": "5QsspA8TWPjzW888t3K6LQ5p1Jc5rd8gnTC9SyXwSgrwYwS3psvM9QgsEXWMrUka1Juvf3nSq4kDS72H4N9jHhLf",
  "key28": "3cjJoXPmJFmMkHFf41bHWo6EVW6UVUJDp5yGcQhU1GKfk1FMXEPijFSYjyr5LcaGQ2e9yR9WrgSDHVWdW3meAb2q",
  "key29": "41T9ufL5USLcv5GAztQt1hh9QKujysPXEw9A6crpvKZBgfE8cakogHUMjn6pBRLYZEu7vJ6K1ERCEy14cwUPBLMk",
  "key30": "fwXFi1Jx891xSaUp3uBxzZbaqTnNiMXqazPqSXNSw9mKwx5nTyEQcPQZUaVbANz1MgJkFQd9tfkVYeUJZMpz7w8",
  "key31": "S7uQijdpTJb2NsiyyJ4oXWrBgeYNxSwfE1wqSd6qqg4vT8CXRgbXGWZ2xuqa9niEaqe5g5krBsi5kr4xGFjXNWJ",
  "key32": "5GT3msRznWu6K6WSQxNKyntfFVYyDVGFaHpR6TsSLSK2ptcbmnrVoMP8Y6Zcjh5AtMdKMmfSpTg5eQK2VVQWPaz4",
  "key33": "5DsnB6o1nzTGirskoncuyL9zAEi9Hwsn4YoJj1DzvuQvCEWFxU6Q2wnBAW3nr7TWE2ihxNsyv5gV5jawfkSYJkBf",
  "key34": "2hxUV9PT4JbegrAJqYSVyfuxrVm6d8nq79FTANyJA7mTdDkKkDXzy9NcBmRqF85683wJF6rjeUiAGzmN7KDeKDvj",
  "key35": "2r9yX3xMHt6x4eA5Rga9AbVQaT7XmnCMLaLyhpuwHLfmXyzHm8J8DkCJkxXN8uv48dnhBT557FKXsSYSdankRptz",
  "key36": "5m5UcJT2qbknJaACRng9o5z914ALpXU7D1CWZPA5Vamid6nnuyMvMbfY4QyVcXgCyDFy79JhHHiymK9wKk19o6Zh",
  "key37": "57rk6HXfwyhLQZeegUdfVrZCWqhehDrdGxG4GgfXnX56kCrxP5JehUkNZrU2gi6TT87NQTHzeYDC6Ur6ASde15bi",
  "key38": "3P8iC62TSbt4k28MyGqiomQCpmF2qmmVUACK2MeQ6jViYvRksr2cFrFsTRcmJTorA2PB9oP6Rsn5BrTqvz6Uv5du",
  "key39": "CSNmnJam29Ho5eApHtPGPR66Zb1TH1tAfMdTYMdohEcFmSTB4PeZ1qYiszJTFYFX6uruTu7vvotZDJjDF6N7fFv",
  "key40": "2DLofTcbpkJA3k15MBhvh61VKe715WHviDYBXqDoSMfP7vQdba4ub98Fq8GDmRyej9EJEFHDyhKotiGGCcyyDBeC",
  "key41": "2jqJVeqQ2VE5vZDA2Y9UuTLDbmNzCeata3TWha2VziX9FpabsyadNfMq7wraD35cv5hsCszzz1FmaR5pzYtMQWa8",
  "key42": "5vn3tWJDqX8i13vhatCssCapdNmpi8xgLkJAUo93g6tZz4PDLBWWSJhfGpyTibEx1p9Q5vshrFDPJ76YFC7wRqbY",
  "key43": "28EQZAU1NzSbdkxBoMTuC1UwPHY7ub2wSg3QNdfMd7YvBShcUj4Mya4mDurw8NhGoJhrBCbyr8G38qwWNKVaBguC",
  "key44": "3DEtYBv3jfRyzVQv3uRzzjAHXHPW3XXHK9MribPo1T3a7bxf2U4wcnxAPRTRgG9YKF83cR3pvQBhUtYBJCKYPtAx",
  "key45": "46y7nrnvz4va41WYBVUU6YvArnA5un3zt4ciRNGJ2Sio7eQbmq6WUTkiMXPXFYHeN9FVDXxHVD6oeNuR854hUKwK",
  "key46": "2VkJB6dgGe9YfZDGczJffFGyhyPDyL6RK8yRudPdj1ciAvcgW7ytrKePjf6CSYbQhLCqTYavZSFZu6DjdK31rpyh",
  "key47": "3CNMMW34zrQC8MGN9iSjPGk9HLKQKNSCxdepCvnkT7JJh3ReMnYzzwhBHrfQsRB4CzFzpfhtBnvSTKayouv7Y5ay"
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
