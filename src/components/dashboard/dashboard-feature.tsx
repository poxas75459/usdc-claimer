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
    "FC9cLCX64vJutpNofjSg2MjSb3y4yBTE9tGHhUzUqgJfU7Y5HSHj1qhBeXssNX888pmSvW2nUdwb3sSNocX21fS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NwvQkhC1A7f6fi5iRZLVaNDeDM1zUfCWjttKbGHAWc7ssQXqasfMfN1PdRgXjmL2zwZm6FSoKkq1FLC2CvwcpZg",
  "key1": "2riWyc6jm4oUzUgmFoaoVjHDQZYrwESLa2ryLmXLXzXhFDDuAPBkDadca5fxeZhWxfcZv8Tf1tsrJKWMK3eK3YE3",
  "key2": "xfT82CsUkcESCbeQkTMexaHdiVx1p6G9Zrt9PFz6u9XBkKBnooeqWqUq7d6XFBeCASCsLmjTM4gQkNroXvG42qc",
  "key3": "4tvk4GMu6T8L7cqicjf8vhnpXSKPnc1vQH43rjHALCvk7Go3rRKmn2qE3V7YkgbxSaC8sz2ewUSPSmJhLeCcEviV",
  "key4": "2QVeh6fSHvYc1yX4EckDfdvYmJ6TRea54kQMX2kkiDpVKUe4H729Y5qBKVJcjEE8wYu92F2Zo2A4UBEFGHXqnPbB",
  "key5": "23rGenTRsgJ8pWED1RewHPmtMmkbGMoMwbwztfC6CbhJZGYpjwbgi6QxeAMwpPQoJG3n3pxeyKr4srWom7Yir3SS",
  "key6": "rMAScL53n7Br1YCejUsinyhQt33gXjs7jUKbMuTBSbiMtKtcH7NrFiYAQnjbD64Yt4VMmhoet2LaqjuWaL4QHi5",
  "key7": "wnKr1ZmhvPfiQ3KFfBavqNZm72dGsAa5hRqjuGqroWqnVxVLMkBy2SLxeb6JMAxRT9eYEYxj8gs13B1nQmZ32fk",
  "key8": "4QzwwPULbLThR9cPQZC5C3aSYr5HghF2hu7XkLpmWTZEUB7mc945kVQLamxRkB1w36bJrzFqtT5RZquJjQboGUee",
  "key9": "4rRNVxVga6HQrGjfqBSk5nPUuTPtBhjHZamDcGp558vvQvJinSnH2gR2AXQK3AATZ1FeAqZEvWCDkK29U97zUcj6",
  "key10": "5oQtKZEtqDbfBjeFJtJYwU7sEKiVEBg9bVUmkN9qugkCjjn5oYT5r48kKPVZoFrQgZ45ZGvMaCEYvwxdrNEWAHdD",
  "key11": "48wZk5aJEYHwJPVgKX47hfSPGTUSP26DoF2q5BbJ6T2oTBo3wPArwiwb9uKD8ERKY2cAUSJpktTqWQv5dKNQF3xX",
  "key12": "3ZDLAFm7zUCRo1MLJznGRDeoq4v98fnaWUyb4QbSELJ4YroS1tWbGWRPevHTg3fKREsVncAHnbyUNR2YSBJSGBGY",
  "key13": "3A83ZCxyoQ5juyMML4JcYCBUgDTPk1C5Kkkqmkcj3XcQ1N8cp8by8tSZNEmXpkw9j3F9mYS8dQU2DgsQcFncx2wW",
  "key14": "64v7RTpRNeEaoLYwMzQjYdJEzL9yTS45tQUj3j6ugRVm9wwz7TegGB4YenmdguvSc89v3Yc2MYTrq8BnbccHqnF4",
  "key15": "29BeWP2CShXWxZC4an2t7RmqaPFQgpowr1WWRagP1LAHWPg6BG8Xkr6aGPm7gveCuEfRSHc6Cm2iB44tRvtocixq",
  "key16": "bQV82zvQhDkmVbJANjAnVbwMQKZ9KPmQ5onZHLSbCEUVbKfQxokDx58oqa2dkErE6CfFsSQcdp61UDTY62JyPAv",
  "key17": "4DVzWqmZv8KbwiU5gbUaJamDq7gTMaq7Cd9PM52bunaH7peQat67He2E6Rsd5iQENs33yHMdppKCqAzMAzH6oKN1",
  "key18": "4ckXc3E3jGPPft3vgaonKbzjYizrM4Nf3oC3bP6gP4yLzMeZySTKYpYjqtpuGEx5KgdLPyB1QgSxs2RTjeBe2N7h",
  "key19": "2iVzJnHrhgE6efMi6CmsXv7wSADDtoPobpWpeZMSbDuDdWuJEpeT3nRJL5cuPre392gSyUTW2yCPnZbHiip2d2Gp",
  "key20": "2HujoGDnWkyREp4igVZkVcbfxzL4bNDaBFbfVFxggWugiKBfB6N5J79H6jqWm6cVteoGasgCb4FUGhESkhqEkxC8",
  "key21": "2gQRjGh3ityxq6Eki9qH58eR5ACDUysyr2gKEn1KQcWTQd3GjQGk1tXteJDZimw7s3mR6wGYXsVtphcB9WxKD4St",
  "key22": "P9uPyWLwrfVrdnQz6k8UpWSMgMxBiK86fSavzMvVhfeAJkifF88LzwsfGDJDegLHH9kpaxFqGDZcmFbnRAEyeuQ",
  "key23": "U8tDku2gCKby1FSiE1xNE5fLfbtD5UX4KXDFA5KMgHYysFmMgrdpQAKSzb7z8XzNTCawdknwtXNVbgntTt49aq1",
  "key24": "3MDgUMMBBq3py9JjhyZ2A49ubxAftT8ppFFGJF1D7XBawpRT9j2NdXYCUs8r2nUeW25CKBgSe48ChrF9PHLatcuk",
  "key25": "uR8Jh8Fp4kzJwmJ6JiREMRZfEhotZYAwoLzfzJSYYCUcsZWDJRdneviwSRpNciTriyvSa9tEexAjHUKSF9fBthH",
  "key26": "55MqKnU5Qjoc3EBkjyu4w8DjMHMjhT7or1BQmyk2ovvdDs3uyyfpoytByScgfjXFiZmNx144gxwKU3729ng4XncJ",
  "key27": "38H6DfiHNuA4vPB39UVr7FgtPcDeBW6iQin3VdRiGH1uuGzU2gnfB6d5RoSqLqsPyXJewQXAjo3ohCRkEwEuro5a",
  "key28": "2TtgqLodjccJkDXtpvpHh5uZBZuiaCQ6BEJUMQTRF8veWN94T69fVfVaHH4Ccq4DpShs95o9vgsokQYaQ1dz5ySc",
  "key29": "KmRVwmNncqHAD4RAoDRUiHCkP42jYR9ZViNDse1wd7ZuhLXvVYugwc41mR878j8xAzcVN2Ftz89MbBV7yhZdaEn",
  "key30": "5ERe7DwPKrE2hQySWWCPHsvP4kXshfPddz4hCQwMncgLLy3HtcKxAKffonDnKsHirQbew9Sy6v89WTdv8Jsot9nG",
  "key31": "5yv7wAKC9Rm2y3sAtmLfQedTvyCLVwvYP29RnaBsBYWXFtR9ggXgzE7P3QtsykDbr2akszhmW3Pf9yjRFJ6oaiUW",
  "key32": "2aoReHMpaDC22dwjhcoVa6JVLZQdupgPrc9fXmLxBiNyRSKDV6HP367Y8yeN2R3kLZuPLsvkutgCokniWN2Pn35W",
  "key33": "arTwYnwoRAYy3g7sscBCg54XVwZagSy54941gXSoH3ASbjsiWbwicbGXCRLANPdXftcpLFeenTnEtJbNqX7ZDe9",
  "key34": "2LxVLooz1LWStgNg9FtLZkeLYmjACULHCHMRCxw8C1f7xUznWeXCSBMStw63BNQEb2hYEPUyZq5zk15nfSZyJvuU",
  "key35": "5eBgujzXDsaiyQazhfbEnChHFEc4yVb8u1871jzUP9JosUTWEUHVof2up8UPiCgb2bzYT1KGKTrXekSKmbrtzo85",
  "key36": "3V4EH9LAxReLJ1AtGVAvPco19H7etz3qfymgDLDqiN9mvE4c6WTFn42LZRtyrHLdPsFRJWrkioMAejLXu8RzetT7",
  "key37": "2WsMMS6qVM7Di1sgWXg8yQwsXwpYNSwW8d7SB135M6heKceF3eZE3daGcZnxHK2WiKSB3ekgzBaAGFrhFPUMdUyV",
  "key38": "2rbV7DSzX3U3UYMWhknCxwwXFJxWTSzpNmvdjodJrgY58msJdZ4xR1kfWBFQHBGvWhfy2EGarK48ABzWXgNchJwz",
  "key39": "3HyhvQKfLraEKNbzxzECcR8HNqQiF29St6V3EEVPrMLXzGKtuCGKypJ8eVuAf8Wajb6Mna2oWAHZVwiHQmmaJTf4"
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
