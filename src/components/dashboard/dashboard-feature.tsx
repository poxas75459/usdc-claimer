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
    "2eNri6RpXAjiqfRhp98QnakbPw9vu64Awj4LhxJGtDyBVGgDpJtKYzJK4up6iWMWrTFsuGcQfWRVHyahyQgtfYbY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SW1QTuzwriwUxLsSyD85HifgwzPmgukVQyRhgstuREMq8P5Ccvycd5BVArsXqMU537XFp1Xjyw7cVwaRm7w1hcN",
  "key1": "64pg2r1jsXGBcmwcf2dh6rnaYRZRex87qbfHMHPLMmk8PDk2B8WcQhRdyu3xYmDSVYrrBKYwZUB1PEq8iDtcB9wR",
  "key2": "3QUzLadT8cCcP7wrpnT2ScoeVnRFJu1csUTiR4ZLu2dww3RrR7rT6zc7aomVA2GXnEe7FzPoSoN2VqmE4VCiArjk",
  "key3": "TWRFCRKnCVEKBwwWFeFLgKjk3621MdqKVtcoQD7Yctez2XXgZE83yLvf8BzGBFCFQ8Uqt9ZEQJi2hwqSDbC58vG",
  "key4": "5PaLM75Wukjv1vg48N1zqiAdAKNmy9oRpv1LCT2DbWGM2gRd9jtY4ACfDmXMdxzpLDy42VUEpWMs8BRro6wjgrHV",
  "key5": "518Z1ioAC2cWUWgu7nGKsu1bLDWWNTeQJyoBfai4rEfUREbmhztxZPPWaL1zQuo3XWeSF1ikhEEwtjzfL58zH49A",
  "key6": "3gQndZiW4gohPJARQ5BvaX2syqMANpekj8hm3MnbZG6VbLWE5mNnSQMpYZpwEoNHK361KmikV5DNybZNez9EsNCW",
  "key7": "2vYcAWL8bSNL5j1mAUfrAhXF976SKUAFGUQYRFBRAwrj3xhgg8n1W7CQ7EUtd9Wh4Po2BFN6XLmpyy171oSG1oA4",
  "key8": "4V5BVthsPUWXAeFP8vHTbomMvbQ8fitbvCmAjrUEdQz8CDhDgEhSUVp9ZRbVianUXys2sP4tJyG8s8W7LDjTfEcK",
  "key9": "2i2FMyt8UiFH4SDhCDBnCSSXYzZYSPTqxcuWAJkiSsioWNz6rU96euANaYYgVwcqESJXa92QoR13gUFVGScAR1xu",
  "key10": "54YzG1k6kzw7FRsfNTSj3FsYjNbt3ogkyZsgWoecoBbnpn9NPBvPMoKwN39m7Tw9XYqAHhGcHqgd3nu7vtZweMb6",
  "key11": "4dsEG13vijvcAKLGNuNCz9JfwGGooTUte6CyxBowe3611JRQDQWPXoZNoBgCMkthPhngbTPHLZTkpUhYas2cUtZK",
  "key12": "3g5CuyfXw4WuhJkcKLUFB4JZbKY4hwSwWouqyi5j8NRmryLYgUdYUAwbJpPK6VR7mEEXQKRatqY2BisoyqvKVLm8",
  "key13": "5X7EcvppwhjNXUPaShr9kk3rAx1KyWEcffAcTD5o4X3kXbXwM55xPbxSSB6jWLhBvetUyQyfVHy5BVCHQdkzHKPH",
  "key14": "3ks2PoUe3zHCJoxf39S7vsvV8J7o2rkr59mkh46yAvPbCHy3LEPhsvgSPtHPDgkLyiH6FdqNW3WLy3TpkbzD2963",
  "key15": "2xYvG9NhXc6D4gwgKdseoK6ejxdXYJYJqZBTW1qwvY1eUjz63eNzwGLsAYwjU6SvhxHyJWFJ1sXtoecYGipioQ9D",
  "key16": "4ZGVyTQK63yBaTirt5m4qYYF4V5ahGexZ7TqJxiCJSJ4AGTE9rMM54KhxVaSEBFm2LrBC7FEAyyjDg6kaATNZhBQ",
  "key17": "4mHmfuiRUknYuSMBed6LxzzdJzzw3Q422jMcFttfQiVFjme5aYmfBivEYF7XufFY3ZFxmkKq5rEWVfDHTig7y3h6",
  "key18": "21PhJNWoBqygpLaZGhLT6gELzCdbfpJNUf4AHoFQfG5KBUEKYZdwtC5HfsTMPGDCcjwU4fUTHKKwnaeX47EAhUdJ",
  "key19": "5KjxApwTH8jw7bxZyVyPdoXfhTDd3mfU4SGC7vQYa2VHb1jgpKG7rjQRENHRGAbvAzR11gVFJW5XrzSaWhmwt7DN",
  "key20": "51qsnbP7KvqapKwWmqqKD6hoW6YapDkGvZLWHK4K5TKLCDbPqKoTc2xBdwJawLc4GRPaaE7iRbUgo7GrQGQBeE5Y",
  "key21": "5UKuhhSjFYMNjm87GH1ccBxkDGQpEZqTk1Pqdo5bqfZg5xfrdhcDckMV58pCB9h26jzb419EbEMMqDrCo47As5bJ",
  "key22": "2YtP69xcgWo4911tCH6xTdUCpTQutEduwGjjPZrL6Y3YveGmb3wLNr2PWNcMZkcmdszLdJjNN75HdvRyHeGawoWL",
  "key23": "2TfqAZbEjKv81Bn8dEP8xoTqZpk2M2crdW7uhiVkSHEtoU61FMsUqW8Hr9tY42ZbmdvvtmpwbM15KpBJxm7jSxfQ",
  "key24": "3sWEQ4no6ntVehSoaTtQtzaZYxXeoY8aZfzKWZ2Hy7zV67BpdKg9NitgbA6yQh8fVe8hLPaD2XyMFcp2Q8rwnu7m",
  "key25": "4k2JCKCDA3URcpz5E2VSL8my9SJ3yt9sncMMcZD7UrR91YDUd1DH7Xh8RMcLrNXZhrnF3EGrbSF6mfNfJS9ZN5vV",
  "key26": "66gXXtLn41Lsswzr2yCxg5Wq2vcsbbajXiHFLTh1K9G129nEsqyj76emDaHaeu6LLgLcKgwqv1CiyAR1QR1SaapC",
  "key27": "5BtBdJg8w5bKLwHSuJsKLK33oCNjUePa5rnsMDV9JD6Q2ncmHuxJGPpYqyho8JyJ3yoXKQNKRX7oSXiBHhyVoGbo",
  "key28": "2fnc4zQyqYCA7ua9voMoVdXrTnrZPibt3uMpUUZNHAi9psFWSjNThk4tz2uQtJ8yD8oiejptWwdN9wSkGMPjWrPE",
  "key29": "5vrTbSRi2Bv9GvHuvuFLLTD5wUGZYkg1tYxFVKsUD3kVEo1iSZ4JANJth1AJ9YmQZhuRHb5zZJ41saLm4EeCg7TH",
  "key30": "2hpE8s8TJTqXCKythw12evoNy96Dd1MoKGAbg6f4S91KhaqENr99tfc589Pf1jCtHyeY8Y5e43YYLJdwmqrkuvuX",
  "key31": "2we8oay7jtw3dgvuZBWeUUv5vx4gNnWhEV4EfPW1MEYJUqcsWhsaVgRnt7u76Skuf5uUcYjTjv7yiUXQdvorXQDe",
  "key32": "iUQzVrUNzx2apFzpM8ky3nzSiiFK6kh5P3gBVwxkSsju2A5EgyLLCx3BHPZZJHGi7zt2UbGGR7eUFVpJirPFaVy",
  "key33": "3ussWqkNPmvtuQrQ2Tx8vVa9wj2HyNAkt6MQdB9mJmRMJstsACp63E289M1FAMCszgB8ggFPcafZsY1hq9k6ngBr",
  "key34": "3CwJ4pSD22GQx58141vjh36kn2PNTxtTx81bBFB6K6UgmNKrEmdAbiLNmn9gz1DEKxBZjmJxS8jMz5hPiqyX5Bdq",
  "key35": "fQLHoTVpEp5jVTpiyjbGVtkbAHd8ybRHiRxkc95NNfMd6XMpavCucKbt7T56VZmuLErCpm1mCNzQ1SDxHUPSajN",
  "key36": "5hh3icfV6tp357rwkswWu6VpoAFvzNXZmXyPkDgXcMXPLsedDBaArrmGbKNpUPSCnFPGpoVB6RTHAMbbsDgb5EU6",
  "key37": "5eausX12CPVLUie9jVXdiHC88WkiL71nKnE2qFDzGWFTaYHC5SLi2nRnjw9wnJ4ToF1PSJBqWbGqHNTok3fwJEq3",
  "key38": "49jfmpiu3YiiyfVSByFKdbEuMDtEdcPntBv8dXyeUXsFNAderT1QY1AX3rfZ4oBKjnma1sYoAQaAPFsvHWKPGdQ9",
  "key39": "5dzt2tLAKfBECUU8MXxbsRHZWZccc7qz9owUYXQ5jzeHAtMzzBMRkTigLKmoni6Nqa3zmRyhR3NDNG5JJd4Po259",
  "key40": "3MmvJVRZvV4CCnMmHePeTC9NHnEhv2oMYR9N8UACkaCKjS8yfk6AFDFWcQbGwPb8h1GX9X3u1wVYq6fmxKgzZfBo",
  "key41": "5CBbVFRVLuGbDn58wwn8mJSaQ3xpU4Y9Esk6XVqWKFAoZ5JJptENXt9cifziwEn1o14TfEDB5g8rD6U4ifP9QR97",
  "key42": "5HRWGKHTWffDTXWwMP44NHeH5z9X3VozKeRewk9Ck4VnwiNjhU9EePwU9ENWGJU17FiPookdVwWspn6Lq1CT5JNW",
  "key43": "2qL1gvcDMPcni73ybZXTghTjNXnVYTZX3FnhfJLxy6FZQA4ChT2twfdLK8YEkknhcFqUoAuT9iJJ7wn9knu6kLZ5",
  "key44": "c2EgSCk7EnpWsTbecNbaoX9QhCXnuYsST6tKN6gkvddVwVgp5jYTF2TgNEgB7qcS79zZvCz7qCi2jgrsRHu6v1F",
  "key45": "3epSCnATKzby3V3BahysNWwCYacyuU8DwQfY8CnLhSt8b5etr96PXVNcvLJk7Hc5wbcHyVzAAtvtbDkh4CJGYz4B",
  "key46": "oUxH7zTFnT2htR11S6kqE8Vk54FqDPSB4QyQNNqBZR73jfmqiNKMbYseCJSMFppqTWgKejqQXV1rvEV7KCjihUT",
  "key47": "56y7LLx6BfMv4ckCzr7zinJisYARUPbtFm72erv4uppSx5w6QVxycwsxvfBzGW9beNrfhcBstzZ8GNTbMYsoBcs5"
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
