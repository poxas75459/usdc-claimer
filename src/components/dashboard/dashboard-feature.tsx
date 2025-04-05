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
    "4Kwtve3HFA3bXu8fqArTEad3wuMzRBW2WgWizUtoH28iPNHNxJKXzVYUeCZwZWihx7715GcrnLUR8Q4oycmbYUwA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NPtB4x9FXMtW6ETaP6ShBhztZ4quLNamgNTT7zermwSisSz3tWhbx4htMvgv2G85HqJt38xujx4LMbCsw3nBbyH",
  "key1": "3XRtyVqBFp5kpjGXSyCRedhGj8UzTA94ubydHPXbzAf3eYAorpNHzb5N2bLRn3Wps3GyNAr8k7RASERJeF4xphfx",
  "key2": "4hpPQmzUGdwczdbVuUBBFBvDUz8HB2bJwYJiDfTq8fYU18j3pcDM8rWJfZhevKgkSoWCTSrsfDHxjgUPfZSm2HJH",
  "key3": "43KDwo1z4i6ZCL8rhTyR7ZiWby7WW7ZsY8xvYMT8uXhLZxkKrWahDtHqLkZ3KSo3JfTXUiRMxbUf8BbvTbq5pUCN",
  "key4": "5Vt9x7TGxMWrfa6oCfxJxN9V1QsdnmewUKNchhGNzo2pYitNB8WswtoBYzRfrrga2zzknx5REeQaCcL5ZRCPRSNR",
  "key5": "3iZV9rabncCS2p2v6ubbbMvYJj21DCSitrRxWqo3TSjmUTxGrFJ83ovKd2JdAVbWznrWhVJb3NKUeu6EZoJUib1V",
  "key6": "4J7ovHPrupFc8LURcBqcBBC3BrJNM6443721GBSF2nf3k4fyxi7DrEQewsZuvizQdc9eHeV9iVen3c5NstyMJoF2",
  "key7": "2hGBgNUnE8uW2RKxaCLrbkUn1BzmM5TBNsRGneRVWfYRSrkB9ztne15TchCVQqvHs8BoydxkKmUpnsN6GXgXUQUD",
  "key8": "4SvKxCRkiDxUdB2WZsjYq9633NVbzQ3mL7i5kQqZhTLNeEF62Wv67TZnj9pLFw9SYbpExkTH9KM8jxSHGQJ9w8MT",
  "key9": "jkN6YmKR3CHiQ7sGH2JXHEzRyBctdGmMnDToTptokgFm8ipBaADkDckADUM2Vzf2FNmBXfgXGKMmH228S9DptYx",
  "key10": "5afXSHTCd8ZWakW3ry5BJTxvNmsBXzhFwRMq7FHJtV8TgnHrLjntZcHE2rmmkjK7MDSZXwGsLdtVKdS3HtNbWvsW",
  "key11": "2sxwHTzr8Bd2cdFbetjguZzCC6DuimufkBVEYvaKfDWYyCgbFeHvFjdCv3zc1E3j3WeRvY1ZhUjNNzT5VzGKTkSr",
  "key12": "42pvvX3Ruq3er7i1QUwSXSPNfFt1WzoraP2BWjXiKYz49gPmKb17mmg873FA4VCLTAnrvoBYKkzHeAXC61jYEBXy",
  "key13": "3HzidVrmTdCUfSLQQ3DBZwqBzyiMGhq8PLVQXf2i8cHRH6AKCuogUrccUqRFWGGiK6mCShRcd2vuEKmwQkKoJyBz",
  "key14": "4KbkngxYX5ddY4q6JaNdH7NT4U2u2ZnQRan6k1VXTPnCGyLzYaqDAMEVDexwq3myk2uyTAojqS5KUadyMdEVr2wv",
  "key15": "WJgKFzUbzPrBBa3eYYJCFoyoRqp7U3giyz92ukmdzEHwojVUtCXeqEKVUiT3xikhomF63nHoA5dRj66JA4MjKkJ",
  "key16": "4x1iybkBQsMJcukfZbTwPQ6ykHXML3WCB3HfTF2djfVLijzUEfFW9rZyVAf1NabDgPAQ33BWNbKKbTxuFgeb6nC1",
  "key17": "38UehUxhv6enGwuJYwyd6p26bX62oA6c1SyqKaEwQrKRjZyk4bNs1mw3PEjafhXWyyUXEv3CmSnNT43eS8Q9Ynte",
  "key18": "4aXSiis6YtNKM3Kf6QgaY5Mjd1ow4iaBW2FR7iNXk9zwQ2FGuv1eA37feohx4P9BPL5wwvre8NYeEm8Lx3TypPVS",
  "key19": "3xrLNfn7pSnJBcDNV6oJe6AAdnR7ckSuT2atqqLucVZPx8j9vE9wz15pJBjg3yey9CQfMXDef8GgHFHF32wazR2E",
  "key20": "5x7V8cBnjvgkmt3pQErGGiFrya62ib6bqBsiptxRKT9MwyfbkLYEWnpHNNVRM4FJtGmuv5gcrrmFuAHTbSXpbDsJ",
  "key21": "M4RN2RYRJPHvhWh7ALN15D6W4QoeS4wu8DYivodQ5JTgRQ1vTrvFYE1pq1ikP9hVjCk9P4tqWox9BRvbeQsG15h",
  "key22": "HBsZwLkAUsNeVVCnXxEeYSHVyugdvGZe178sapun4u227Ln31XH3FaJyvDvayWHEdEqGS5tFzuGzGWzrCrAm1xG",
  "key23": "2UckAaoBS14FogkrXMYKEcBREduTpeKfD9MR3zBTSZAiPbWe9y9dABCtYUWETqT6FvtvDAGTWCFagQLFp6WEoLaU",
  "key24": "55a2cQuKQupzp7DSa4dZqDaaJasU7VKdeifwJkNKsxPRjFc6hChpNefBCe2ibsveZBevnRcf4MFG68bWoo4sxUSg",
  "key25": "2kYEcwiHWt12zjjDFFxFGGVXgr7oGYKG3FwdNteNHK5PtjLzMJspAyaNWNXSeLawmpvxZAWi4fhS1Bjux73JHS8C",
  "key26": "YRXrj1S7WLKxKZcqWiiWkHRoc1w6vAmD15GcZk5uWv29xnycQq92hgPvG7kHiexJeNWYSUM6u3UftSbKSJjkQCU",
  "key27": "2dt2FMhnVLYJRZzzK3Qf3QPmPaD8gRVULfgapHbASH2ZZc11pEfx8e8L4CBPNq2vpTNJXBaJaXF6onJzc49FoSnf",
  "key28": "5g42h8KZ64uyeGi4wVMEwrGtf8PhwNhb9yDqnh7EKadTbgM7hKZx8ivgeBKoQ4GkhpQRxXDma6EhBLx1x7w9adkV",
  "key29": "3HLp5jGKd1cehwpbwfKsrXa6MjDhfSGj1tWHvSjNVbnM43x1oeVzuzXmCqkGpvwZjcGxCWfj7qhcNQbGWjK7F7mf",
  "key30": "47BD96u9a8cwdW6L3u6if9CJfjNNsewavCuS458DumHShhc8WS3mNPwPyxgM3tN5EVaPduFrrRN4C4u6QxiCnn6B",
  "key31": "4Z4wCDTCKq6nu1UJPaikQdJ5pMcqQi6J8RffkMhgJTJxqcvNtGZPUjNaBt8xnGeE2JJGQ69rVNzjdisXwhLT5xFL",
  "key32": "gL1rAF8Tscbh55TCjk3FY8rcg85oxx5cqwydiBU5Ssd1yTNMzzefKoyvquVpyLJhcZWmhpvdoer4m9WQSLWvSK6",
  "key33": "weZcHvxDBLBa9qQpHJsteBGV8a35Sj3LvxzTHCqgR8Lcq9TxfdgkEiv7hdsVvTcCfKd9MoLhMZwhyQB8ARTsFMS",
  "key34": "fhWf2qgYucYgSuwDk9dwmNb6nLGpMME4JoGypmkCFZnhztWeY5BS6ED4Nr8t2AyrGqMB6jCXwZPBTF4HDeCn1ei",
  "key35": "3a1z4MqPmqTJ7N5VCheREVJJWXWCuzEPPifPs758YpfxPbXq6cRoLqJBdqy2NQv1SJnWgCnsprccrNLeLhip4Cyo",
  "key36": "3pA3PC7UeMjWJDZ44HFyVTPFgtbpN4m6NDedt4JHUH2aaBzUgzKAsckfT5Y3wtYjNjrsNwJSCydCJyemauWeuHRf",
  "key37": "3kGopXvPodsVsDGj8YkfVQsAzHtsDosgr1mC48VwYE1kJsspef5coLd4qKERCfubzdN3WFn1XCP4Q8GtUojE93Tc",
  "key38": "4NjBGk9JfuLBHMS3Ci8yc2LDtCasAQLEcsXQzpESDc4FMhFrk789s9y5E4PqjTkdqGdVWdsWRuFdFpWPmfFfRCJe",
  "key39": "4zbANb9yemgFwn36FaVbKgLiS6pxcs6x9NAz4FgRfwi4L1yhmnAttvRYfWayChshVVWnRzx9LwesvUsi4SbxNjw1",
  "key40": "3hJwSrKUUrh1QUhjxVoSTtgyoRw4CFqnCEj3V96AgMT2Lht1uFZfHtFJ4NsNNb8TnjWnrRZifHyw5jdbvXyZa6yu",
  "key41": "4oW7R8P7Zm8X5Kxjgz1M1jqvXGwUGaMTyLMDT7mnGJNr16cZca7XK4uVZme1BdoKkmsWN2yG7YHWNyXKoFX8omDR",
  "key42": "4TQqG9tnXWTrh6J7gJFE2PAVeTArPmHDsYkwPw3oAKuM6zzQnhb3WSYeFLgExQSTyGwA1989LHKENb8M2ACpwcqp",
  "key43": "vpdoqWbm7LEbCMyYTFDizLx1TT62deS6pLdpauoQ8wd6xfKs5d18voPFpBfwTyWc5nU3qqF4jhuZLkAqHLs8T2Q",
  "key44": "3RhgB3aJxdjV2HbpnAPQZ4qg5kE8jz8C3ETWjNoVbqz2Ac7BM4Fs4F1jUsU1ePe4hGtmvr2ipiq9xuqbBMoa1jpQ",
  "key45": "2tb7mUFJwG5WB5Fjk7J799PTZaRFz91RNP2EVnVSvKBG4nrReWJECHoy4fWsKeJiJB5haLWmxxhLG6AUmARsGwg3",
  "key46": "jGkrdemyYpVSPb6tYx4ya1UBUt3Hb82cF8xxfG5CTaUPuBwZXLgwgbVw57yMM5fm9oEmcg44DzaLHWY9xeQcCaf",
  "key47": "pPvCeYWkzUbY74jgXv2wVCW3hdrkW1hMbwa8prP7BAhiMgGCcyt2PoAkiX2qVbDP7ioBYAK247Re3fqt3ZuwXRJ"
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
