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
    "3SV8JRuDPaWWB58K6X7uExK65ePRckihQ6ypd7JnVtZ77PoAquRknjZcqNDWR562mBfbcoUmqHwoVcSeaRX5shRW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GvoSwCeibAWpYXE2FVDhGbx2hJpLUhiFUzkFgtfsbp7cnusW83patRBoH8HijRBnQSt4yfcxX6TQgdharinJMgH",
  "key1": "3GHQX5zbiBnu7NDs4VXgn1xYXYPAbjrUN2DU5QcZfd9nZQgnXVwiBcpjjo9EvoJrSCELu4PWgDRm31W4z3wg5WHb",
  "key2": "4eoEKW7L1UTTujJju3VCH73sxMYU56NcdAkBWfuos1FjityFzAFCMEoKnzDhKwuzDWdwxrZvNZ1efPBd2d6rmh2n",
  "key3": "4JjSeDZ21N3dH4hSGkJnxeKUALZSVGJ6rW2U29eSSPNcZEn9tavRuJRW2frxxzHrqyySSMVasBu1WAP6uRxgYuoY",
  "key4": "55eW9VyBtyx3HYQGTcqPE2gJYkS5Mc2sVJuHzFrtPPsteqD8irJywRbstbUkB6SjCj9wG1TZc2pZXwgK2VmEvZi3",
  "key5": "4YmkdKF7tPuEcPMxtY2UL9pJwnaBnbrJJrCpVx755bLdE1quzGxFRLakTmhFtiRSX3FnN5HLrwrHBeEciM2WaB2j",
  "key6": "2jnsfpikLQ2q9EwH8BmXfsL8hYq58EmXG4qCQmoYJ1E9LDgKopgy5ibbqpwmg2UeAfCJxh2WNJR5o9hDCJKoC1ZG",
  "key7": "2ummywRJDmANzTAPgw8JcyeB45kJ69mcZ8Yzn9kDi2ZNCXMXXjbh7kkyy5MtVWDx5oyeFAjd4bnVUrerhmALB3xk",
  "key8": "32y4zWjMLSrfZyWchzQD79rEXzvVzNiJFH7afrtPireYRPpYVfLM25Lm3ZjyuuyFE7etXPBFQBpXUStn362ETjCC",
  "key9": "55AjPxNhNHd11FdJdWErAfLj4aDf9DsDac6BRvo5fkaqbir2Sooir2gCKNaVW6zcrXBA3buQKvWPs728VihjtJfo",
  "key10": "2uUzrw2iKSipmYdirYDdXTXK8sNVroxydVW7xGAYBTqFxxcofma8tYdSx7tVESdMgRzrbsWjvP8smGG3TsZTTJLu",
  "key11": "3wsR6mfEtmh1FEqs71XkZp1hGXfEcJbFdCsZX1Mei1gFoMeTG72wh8vxofKnpxFjjhLdiUVaHFR4TXwBXJHbqfzw",
  "key12": "4sAxst6pQ4zvYSGohBRYLpQREpRWuVQ5f5B8DTxdN7vgiGg3cCBMGpjSDDxgM7DFvk6N4cYvfaQG2VjE5TDjfEbo",
  "key13": "5szfG8Se7aM5NTjabwnkhfmz9q6nHwyKWYhXB5szvQ3GM7WefsDnxEBG8wGHUHzrxh2f69DCzK6kxufAsNYR5rEb",
  "key14": "22waV771McouPRGN9TSQuj4yyg17SqY63HF6m9hbhcwv7XXkFFXtfYbbf19CQWSQ5gcFNcbYumH1SahActwvZ3zx",
  "key15": "4RZR4wAvfkWqFt86BpEaqVHKayY68M49nmw4aKLDVbQK7zN9SmbUekx3kfTXRzaSohyicixwN6gwa3PDnQQtJNmf",
  "key16": "3Xeendc31QH3o55UGLRrGUB8FNSKe9egoKQt9Dh5hiCJ3e75h9Zn5se6rwvVgJ58can4ihktyzHHxdVGf3hYE2Bg",
  "key17": "JNeCvipmcRULVnvCpHW83xNqG1qyN6Kf2L1gtziXN3zxPRr3pj7xihpbLetc4eYEXYd3sporS3osLZEi8DQrVPR",
  "key18": "4AiGpRk5xbZrRY28UF8vnj1tt8h2Q4yRQ9Wnde4P6qzeXcGQzKSLN6U7P3MFs615qMF5cYn1trjYqgxCxV2qKYZ2",
  "key19": "5Xse6P54LPAvpCrUPZEs4Ab5ZPQgione9desTrYTDjRCLhpwuagw9XwWMFyS87apN3vASZ7dSovv7tx425HUZPh9",
  "key20": "2MF4VyAdKjvp1Sv8evnmYkUT4aFhwRJGFkcJpNwaxMR9UXHnoueCaJMTMZSQUeBFWAYGLeFj8HnYH2WFj3zvG9gn",
  "key21": "4X4wiMui527jQ6nWZ9tLgsMsUiCp3oJ7XWrLDKr3ZD7gmeN3rVVgnX5JX1MmwuuNnU2Wkzwqka96ZjCayMtQ4Rdu",
  "key22": "4CG9iLSGaDG7gEZXAbqC9iBkKsXqa8Bq1CunyGEod5GVtSfEFR8f6dBEfNoPc4L3MPi76tyPRBqnDo3657oJbTM2",
  "key23": "3MyjNDtA336y3D4qMEN4j4fWVQJ5H8m8RnccQxXJAre7RGkpd6Pvn9vgk56kbqNGp4zxPEE9aj3d52HEfdc7zbBL",
  "key24": "WSDrShB64zw8xWwwi2DiU3bSQWQUyCVf82YDn2vdvRZ7VkRYYuFKKj8XAy1pPS1DJi3RQ1mfxghzVCSajLdLJVt",
  "key25": "37AHrL6Q8YK6U2FNk5dz4MWzEq4QuLnGc6AzGjbew1u1fVQ4dvf1xi2ZDf2PZBTHRd5C9Yx1GZrzBS4utGUiQNx6",
  "key26": "3NsviKnDoEoKdcPPhwe7J8VSXMZerJBcghjakavX9UKhYGnY9ifXECp86DF8PKoEovnaaZTo2oKiCHbkGvYKMAwx",
  "key27": "3PpgXj7afdAntGjimaK7oUnCumuhh59xXK7Lyg77t4iSYJaMWwv5zCnU34r8HWFvwXdyoCeNVAfAif8fAzs4r9cL",
  "key28": "42oaBxpaUpoE544VZP1vHaQYpLQBKD2NftdDnVJcV68bngTMQX3eNVUW5JhkdegxDp9RSFt68FV2ihAAFEmKyhv7",
  "key29": "5uiUNfLrp6M1cTnirtWgvG61q3hq62jUcDCg9k4Aajfx9pJcnEsULdo3J5ntGgN9ZUoxuayj2FcyCYDDJQZdhpFY",
  "key30": "5fkWWnyS94Eu42w1cDKv4TaizwV541fYMrYoG9oPqZsCqA3zWRoDPPTBs5NK8DCGZVxR6adKRi6tKM1chMAKR16e",
  "key31": "56dh1brNHVi3ciZjEgEUucDQHWj2ndMKYroA6v42vkFJPzdGiifCRXRvLHAHWQVFWvbubHEcTRRViaue6U47dqzV",
  "key32": "4WT8FN8wdFgodW1asJWSEgN1dPtokCfuVB3rzqpA2JC6qd1diERUKdUaNFm9azxv5WvfErBYoUhRTSSUNtvJpRRs",
  "key33": "2LsuBJnKYs7cP3HacrBkGimzhAbozP3n4S1zSiGeefgMVm4cxinHVSKM7bqh9Vp2yVy5EyPG4Mn4HedJCiTahNCH",
  "key34": "2NawrCxe8ghgYi2iDGBpxmJEoxV8UUHF4xnPf8CZxXU3n7M7zmMNebVKMb5Rwb3FLw4nW9ybxfucvkgGxJKuaNT6",
  "key35": "4bhHo8ZXqiEUzWMiHdr2yXxLMwtURgJXkkKrQtWyo9ititZ7ywb6VCWBuqr23a3b9MCQugta4x6NHVL8hxjvG4CM",
  "key36": "JsLQXNFTRpJpMuRZLaADbqhnHPkPNQ5qUxwmWvrQVpjVHDDYc8q6vPHshnsbtTAvE82jrA6UH1Xdk5LZikfS8ER",
  "key37": "5xqAdP8ibcQuspLXLBjFUhJCnZaokS4hQ4Li1wAG2qqgngcXa3H1o5B2pUgTWgpdzG4Vu7RSCoepgipbKGw8Fpti",
  "key38": "bzD1fT4xwmVeHyroK86YgsWNPqJ5yFKk6y3tDNyWGCYi7e5oRa3hvjhzfXG3aKEbSV3uUePKPByqpfXqrDciAJt",
  "key39": "2QPXGcW3VBDgiJcDLGvpT9L7QLFPteovZ32DWE4HK7RnMrHWgRJPA5xhuMaqM5TffUHTaMBohY94UqSR6fUWuryV",
  "key40": "4FsuG49NctsL4g3ygZdE7QGdiraoJsC3T2UQstcrhvtSgPFmF26HAXfGYTXCyfUeuyL95uRWmZoJCsRrxc8DrerS",
  "key41": "285o9X3vhTKysXuSwfGBhd4j85mfEoX3r5grLn6eCf3w91jviM1d1rT2452kPBswAJH5KMb17fToHYgjCDHPvVoz",
  "key42": "5VHEi6p42zCmhw78VmXhYgG7JGSyFPsJ1ydu7i4HAz1ykVyj5oVbZiFM5MURU3EcVa4HTEawFgtcVUFzp1pnABjr",
  "key43": "Vy6T7GDbvbEA3DSVHRtCEXQwTHiadM6WizfN2qjDdhUzhphc5soidAfBbR1XHaRAdLsMc9d7JBepbh7SCvBWJbL",
  "key44": "4J9ByZHS9NGBbg8y4tnTUt1uvkBxbVVXg9YrvJyr2Gizj4mV7qb4BqJ5uMmCq1H3t1cNYz5Mfvd5rSiuYqbBNdT5",
  "key45": "3GkT3yoPKW8yf7SqUQB5CNs3Sj1bwgEpd67DtENhmywUswk5SQRu9yujXG9iTB1fx6zoUWVztt4ubWVukxdt5SZw",
  "key46": "2DBhrAJUj3U2C4H9AQ28BseeJz5MGehuWWRaGMxoGazEfdS84PnoD69773X385vEkMESB2UoCoYMEZvvALCTxzZk",
  "key47": "dEjZM7e6tpYAqTCU9m1RCvDcZgpWp7dcLex7nuLufevAjCgGoWgwoMEzGQy2HREfsYSR3DNpWuMh2UmvHQHM23t",
  "key48": "5Ncgu4gQa7FTVH4PHAJFRDqh2mANSRtHeNs3sznigskYFHzavV2YFeuYsLg928qfUPkec4JSJD9GAgqzs2wpeaLw",
  "key49": "2z2sekCGioYbtc8Ju9gv3aouhw3RfvZAAvPLdg343KXvSnop4yvpC8zwXhmfPbRCwFqhztVnutRTVaZ5mZ1AtWX4"
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
