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
    "2fJjDwAG1MqUCLE2n3ZzfPtRvWVg2XARj7C35bEPjV96tT2qG986TynnGk5nhiEADiYi9muQYyvAc2wejDQAW2YW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ifAGpNpNnqYAWXUrwcZEE687pBYufEMzJsrckGbyLpM2EQR34T1CKa2tnYCQGc1tfhtmBtdDioo3XG6qvXjURkx",
  "key1": "3z3K8ap1b54hCsr67ddr67Y9ASuLa2oNz7rcaXDu9UzwQVxHMkn8Chx66iup9BDKpHmv2hL3azUJAsa3iYkqKLC2",
  "key2": "2CyC64JiFMmwLgFoswJxVYnYv2CMp4ifVBm5VswhX8EPXrDDhKZ4raYWyhmkLNKNjizb7JtuPsPRtZBNEb3wCcY",
  "key3": "5MMGw7DEWSWjdhYwGkbU9fQFA255FtrbTBuak7EFSATNHBaL54NXfst6rZpQRhW2dYhdFMKeYmaUZs9nq2DKvpmH",
  "key4": "4QSBNf8UcvhbUFZvucZM7YUdSNBk82aTauVPPpsvT39Kf5oo8yYZFKVjbbWxWfFvNTe81fGqkaN8h7Ns5Di6VJ1u",
  "key5": "3GCv4XAwCJFMF3r9bnRXeQWDGwZjw6Akze3B55uXLu2TVbX3GdjNfcueUUvWgGoKqAkvV5PfVVEwXnv3kXuRnRLq",
  "key6": "4bqXuJ7zP1v7FdJFnbNdyhwvZ9FpBBECpjwNdDRdk4rxax3n5HHxmKpe9r3qkqyHgExkarKttCRXmoCVwaAhjDC3",
  "key7": "LiqADmypCjgE6DHTjEWy3BtXzcayxDUQQdqtnNQ8z1q2DQwzooer1GMXd2AodQzGxuibqucNoutRygiAXistkMC",
  "key8": "4cfvokN6svYq4ficSc7bFAxCyeH6rmvrxufYUf1cGG934wo2TMpUAU4awg4SGRaXEUGt8BYsBYUza7hQkjuJFqW2",
  "key9": "52UoPqx2xm2myrmC1FurrCpCK84ZzbpE5Wuci2Kq6okyFvkQBEr5eBsYLPyqe1QU3d2SqjZgcyd1wXA6Bq78mHtk",
  "key10": "47YMz1D64dEh9U6XUTqfxnoYRinPCmwTNTT4XC24eDZ9fPNj8MxFUsadavPvegSLXpNX8HVwyAk2qm52Bg6WBDUd",
  "key11": "VC3cmw6HhWwvdXFKFnw5f2ybNRFiU3mw5Gtqm5Mf26SKz4W3zzRydUXRZsAHvLfACrXxdrQPdDu4JCt5QDtXsiE",
  "key12": "4QdEhunmJVGACcPHeeVk6yU5qeQX6hnxjSFBfD18WWs74G2JicfF2kiboQRmdW8eFsHarkhVYZaVHwzfd5721i9T",
  "key13": "3iUSY1cq4sDps4pJD6CZPcQcYm9wLkmB58YS1BoSb9ffTLLxzeZmvoFgjfnSRhMTK88xPaoSFoYNJnxQuieJnkuH",
  "key14": "2jt6qZn19yrpJVsiCF7c7A9AQPUfxDTEijWupqPcNUoVzmTHKXqP27E3EBQtRJxL7UtsCuQowf2Mc64LoEGPjAJ3",
  "key15": "ZGN3LG5kUSSSK551bQNYgi37ifNuovWwj1mAmqQGaRMAMo4gjmjzNgbDXWtP6WJV7WEmHCbcwRDfD2RnxweoJ7c",
  "key16": "MESBEvY7E6qap56nZQsy98SNB7gScPuHuELLibaoZeVhakfAk1KMi93AU2ed8TMvREqjcj5339URvALiNT6Tgq9",
  "key17": "4kKCdQqa3z9cciiUAfQtMeo1bYYkoBxEtUQP66fGr5eH6RyrFvzoz8tmTkdpPaj71p7C9bYzSStukm5ysNN3XeKm",
  "key18": "4wYkuGgpm5dWWFh43kgAjVidn6Y5bQFPYQXPgDgEyBDs6RyLxpcqSZkLGoHQDjsGHjY5GZgnfsPEY26FbZmQZA2b",
  "key19": "4j7MiieBDfCP26eaWFw8agmUv4rn4Sh8y1qTRvSyDzrB8gis24ksaXgARjZK1wAJQ9ErrkYvMc4yMuam6SnKHQJn",
  "key20": "3tDqTSCmpp1q4LjrXTKCDiegjFRsocuTkG9diMKrLVxyR9R9JVNeRTxqbqtiYwSMRyx7sWhk6oDdBBw5pnVuX6a7",
  "key21": "4hddAuF8pEWv4jw6qiwJUGvHzPmmqXbaiiEvyNWjzTNKPMXKLPyicybjz61mrEvi99w1pdeZSkDrAfN7K9LwTqon",
  "key22": "tVzCXsiNCP2aVLG8bzt8h6FfQoQ6PoRdcZ4qVABpTPJPMfn7d7R9PdnxWBGPGWhs5P97oimoK5hkmZTBunK7Bpe",
  "key23": "64tvJUPumsJVKcFn5nqNvGQ8gPFmdgyRE6qk69x58oXzVBWemTFDgoNfgrS1V5QPjPMC2b2xTLEef6UheckFikas",
  "key24": "5o5PsTbuUVFixELQ894VFQSwjTh7X24ozrPHgedifEA497CRpeCBHKozGbLXNfUAChc9PG2KMjHkM6Jvp1nAzcjk",
  "key25": "2qB94qWgSaWWAWuurxtmcjSpAwDwdSPiFsFUF3tWWkQtE7tZaWkSNtGCAmcrnKZCAHG12E7WmUt8NJ298ZbTDMgr",
  "key26": "59uRz2DLNZpYHcBLhiCdKtKtY8FQh7xJpz7ejgvhFvnYVG797GboftvGPMoiXWGebeHVxNXLDEmZrF33eLswDzuJ",
  "key27": "4pftsLWhLchAYrSK7mDgMKeKgAod9dpPDZwxptc329Bz5tGvxiYEo3cmV8dV5JKnsxarVh7SfbVjfhmrYH8r4iRF",
  "key28": "4y6tzNA8Wvyh2y3eB99QpUodM3M8VUarVpfQq6mEbk8hT3sVdYuHot31zGLNSYn9wuVdbDJTTpV8hdZ3zSDBDNe7",
  "key29": "5HYTbudL7qp1iK5KAJBRrMukyeL5SAspd1ySgQkgd7qBeFuMHQSE3S8127fhVxoxxWwMQwNVfoexTx5YjLu5YTxa",
  "key30": "5hke1aurEmaMGKHaVuF6MDhDyPmnSf8PbJg7NS444xP24X8xcywhFd5AzYdd31CPn3BQvPAX4VAtgoe2yZSHdepL",
  "key31": "39GgtQwM1E8ypA3MChRym8XpJxiGhuBmNqFpoxa8MpdULmZpdK44seuMzmcPhwkA13s9ATMMurmr8hzGbyyZDwm5",
  "key32": "2MwDW7CdkusT7PGz6FpQokH1YjEm9hXhCmgmx4LqJFRQWUuY2AFwv6fafNyHYvmnrdipTK3WBndLkFkVqMYBLzrg",
  "key33": "Lf8CM3kVNHh6PyPinhcVocn1CicCUdZXEvsnErFcmMsVMombFEbFhP1Nbe3eotqJy3PytAn8FMMSajNq1HWtcej",
  "key34": "24B4mtHgrXB7Tkagyo4PyK1FA5KaERBUta2jTcat4ijmitduH8jUarogNtAkh3i1fCHo7Pk2TnK1VvbWS5bwUcqy",
  "key35": "3uzBCKBkpKLfUSp3uYmc1K5in1RYQ24HB7RtGUusrA6AcuvM56kqsZT6JF4gqXqjrM8ivV9TKp2mnpPzCGD8qG7Z",
  "key36": "5wNiPkdMPEMMfNhsDqciZAAGLQCGxxsAqpDWwPChahFf6eWxPomhD6ivPS49YFjqYeNqZ5AzDa8t9PCxwC6WjXdb",
  "key37": "3mvRvJvv9uc2tGzkemoRrEUX2PeyfybynsC5gSB7XQAia9NDufC2k6VQrPixkp5PdY3Puq7y6dUTUtuwuQunKqyh",
  "key38": "3jsVEJvmxt6dERZYqqrak4CcBTpcYnsKWYeoS3J17eAxZwkWr6Z1TR2ECha663MP5MhNDBDAevCdQk3aAx7s9wd4",
  "key39": "2Rsonid8B8xrro8n7Gn1HHBPgGq9QjoNYV2LK81mMLmCvyYBB9qPSoRiWemZ2T2QPn5wWR4RkyYzps2S2H3Qgxax",
  "key40": "4qVo24YkgVHiuBefiVo1qL68ksnki94Zbzg8gx2sCSapBQu5gaZmPHWrd1KWHHdbg1cURYQuSMSno7tYsUyE6HYD",
  "key41": "3ehChLAQDUEWcoh5VbvXmmFcucJCBx79xCD71bHnuEW3s8TZUMhx5oh5vU636GGNYk3uCgH3NS6Qfzr9FdoU92q7",
  "key42": "3x5enrzXcxdPnrE63gkX27HQe2PPZzikDeN1iWLN4dNQAVhQLYXGTbYpqy4cfjmyjcGj18si75L7Nh17AhDYUkio",
  "key43": "5Lb2KuE2d1wGBRzbN7x2NwNP8kfSFkVwyt5p91uaENpM8jyHhxWjZbUvSuaVSnwxVAGhZrVoQvuVRGiKUD47eKvK",
  "key44": "4ijFYrZjNYT5e44nimGdZH7PesLw8Vvegeftrt5SVuSaQsnfXCMexuzuW5kvMn23WzTomWvZJff3jKbj1j1kMTwq",
  "key45": "5TNEnDLJHQ2G2Qv2vcprCmjV38SZ4wcdh6jjBMb18gaoSSv6v66uy7UocR6iJN7KhcrXujGfW5e6h7uBj3yHQbiC",
  "key46": "5Baj1WGEqbvvWpqPu5EkHw91Cr3Rj1cK9XNvdezSLdG8m8MFaYRep4SZGmpG7hwz3SNzT9YAdZEkdAjXwVTVUjX3",
  "key47": "FkZ5tFTfr6MqCDNpW57zZ9JifMbKYdoxcrGSXmeM4hWQhMn9mdiQMNPUtQC98VKryMmpoyDb9pLuCP72UdS6TyZ",
  "key48": "2BWpDA7ixiGukVha1ZeyiY42QUwr5ZHsiCxAXgK91ao6sCYFCTod6y2FViPAZVZjVcQ5RRac3XWHtMja17eoDwvD",
  "key49": "3Yi1tHezj6Un7D5iW7Basxwua8NHG2T6Usqh15kEtpauNauC6RJ9dysPRwHdjCyjEvvAzT5T2BmbPBo8MysTkYd4"
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
