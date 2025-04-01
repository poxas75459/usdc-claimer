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
    "5xKfyV5cpP3bDv1kmkXFWTYH8uaNAZ5rEX2Sos2cE5LAxfQkK3oaz9weAY7eMpnXq6QXGy7YapoytkUsDtjq8wZH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a7Sp1TBswnRXu6SABfehammyEbd8aKziNGEP3rJuT4dWjDi6A3Vx9Ys1UCEVus3cS71kL9fPqRJPuXgrXD6be8L",
  "key1": "2MxedR2AnjZKBFV9anH8cuvC2ayLhVX4hPTnSZZh5Y74Zj2H4CcxBsi45Lr2rXPokAy8XGfuAHVbK5nGZM5rdGL6",
  "key2": "3ycBbdzeTZBmfvXCBqveQCseVeWVSjmmrmdeHnCAcEUHvjCggmNemP9G52cw8Ni25EMS1Sxa1qMFAkMd1f9AyFC5",
  "key3": "5G9nJnQErjD3hLKyWMWK3Q9nfzqbXaGGgc18qfv9TZ1r11ZCZa8MRU15m5yHSr9u7tcpy1hkMBvojP9DofmYzHK2",
  "key4": "3fHGFJ7uXToTsDZnPmK5LxyDo47ZosUMXYT5Njq7JJcXhiUyy26y6H8b4gMrGNk7qczGorDibYYywunrDU2Z2zoR",
  "key5": "ZfaRuoW8y2iKZJG6JXDHchobiMPXtUz92fTQ493r1X18T3ifrbGAXsnR3KvXAxbsxPtV6Q96cteyBZD7Gr9B5Pd",
  "key6": "43cE5DuKP3SQdj3ug97sLRosUcAWXv4PCBPz3PqsAdwgxktGLp2gUyGj5vdQ2NUhzZrnMtLDH2uE36dd2h2AWqqg",
  "key7": "4HVmdGyPUYoMMgyZxD3zQTocF3WdLfqRGzaGHnH1vmvDGruPE23qmpLv3Pt5xazC7aR5VGCdwdpyYaAhdWCXL3um",
  "key8": "67FatgGethxkDv3gQYgh6ySXCDkeo3raZkmfLpPEykoF5BMLVYmT4KcGEZgCBhTJNBM5J4w991pGKKHkok4n1xbT",
  "key9": "5YYTNh8317Th8G3pYzqKSo1PBtohbCByF3f7Wien88KFdUX3umeqvcaaTwYhufn5ewq9enUDwhWy8At8eAZppiKN",
  "key10": "3cDg4YXg573q6bVwRub5JApyr9RQzxp7rnou4Qbhfr5X2hTusT371RXv8V7xEe1VtV5XjW71LpProWb7C8r39pYb",
  "key11": "2iENhVRtuo9ukgRkK617YLrdWztbmJzduevu3Aa2s5pkib3xKTbhbdFm56nMK88H4sYBDBy6LnrB3fuYw79rzmdA",
  "key12": "2aQin277S5pDLV6WLpk4oGe4gSVdaZ148E3scCKv3LGAyt2q5Pypb1HZQKfuQ7gV46Uh9CNVFRJUHeLg5meUDCA5",
  "key13": "5o6JaBMAebknAkEdNM2sdbq5bj4Hfhpt28xRxcMxXDmAMC766iVfijtSwn4urqQYwXoHferejq8TgNHTDPW23tWM",
  "key14": "25WrxefY3f4mk8ZXD9zzwJy347CgwT9AL9eC1niQAMsYmzFbEYeivWj2hF9GfnWcbbHy7U6A4WDTmvHgF1DsSomJ",
  "key15": "gSk7egKcufTggMMVNQZZX5PAHL1Hdp6skgBYY2qcQuRMkFXmAQrYCsbAzgmAkdoTGJBHqV1DPnEEYX9eXXbrxg2",
  "key16": "67gXsJ3z1pRAnQcGCkNGHpryjVteSi5SzGiu9DrgBHZuQ212retzUYGTfWCb4hvT5U5zZWNTwLyPxN9ekjJro1RC",
  "key17": "5G4jeno22sjDTJLMszeXqjsVhmzTnvgshqjJMEHdFwPDDXe8oS1ZvywQyktvLCAKs6eS5KzDXQ9V8kxG4FfmobqN",
  "key18": "7BaSU6PKiiJvdfjSbrNMmBsn5ULSnTZ7SHCTSGJ3Z9yVifWLB6F3RQJ1rcDnKRmUbMPF8hjsey2zms6TeTr2HWo",
  "key19": "3fjkFEDeTy1DaxGe41ZkmQHfJYGhdYw6JW7WwqjmgUN4SGksBVnZL9ZKMi6hRtbFJqniXJUyCppV2UWA45DZR43K",
  "key20": "5k4cD5PVYW3DFHyRcy5R26Cw7djs31JScgKyCftdedE5few7pwpYUYk3exroeVE5G7FoGe3wvPhjwXCWYwogpPFi",
  "key21": "44QVK5horLXXaxD2QNoKPs2QJWkW7SPFFWFhkEFDN1JjaEbCxoyi7SH8tpFS6RGPyyf5kBMHJZCuCckaLpjJ5sbb",
  "key22": "2KDwivTi1JVWQvNeucWha1Caaev7ZxdRaBTttUDMVVCYFAfuZoSe3JMkfiDDZENUjCX24Y6d6DdKwTG7NoP4Xdra",
  "key23": "4pYz95BiUfFSi7tr81M4E2AY97aH9o9wH7Ct7AuLNqcN7Kj3U3y18gVVdGCkShDbEhVXGTDiSAJfQoUkRHdhnyRU",
  "key24": "4nbsRBjpZqagCszVWBz23Kdx2gsW3QcutE7MyVoCCKecDxNbc98XPS5cQfJpPRBq3WYCAmbt9X5UKXPCGVLhxmh",
  "key25": "5xAB5bmE5Uj3aKWeZ4bmvGY3PGeax184CMKRs4pJFqsvTVPQsNGHV2KbQiJBJHf9PfPuLpBoPvxECPsNHu81Fu9a",
  "key26": "3WwPBwBwYa8fBzttsD3WYojLLHDJsmSjJTnAHKxYvn43FqDJWcgDyE6eHTNpA56jk1jjmb9YqTTrMFSfhNWGpHUX",
  "key27": "4vM89MKDFAUKYLvaBoU9iTzVMtLb8Zcdd3RmbaJbb3n8mp1WxjHnpoFjiMvCkA4hS3dkSKSALoFSgjBiBF7WVoNz",
  "key28": "dXFEo4743caD51zgrAcULpU4U2HA2rZhUf5p4QeeRbg92pzTX3id3ah64q5gfadRhDq5HahN6PsoKDRc2JidFJy",
  "key29": "64MdiFfUJexpEkbuAMdy2bnn8Dh3WPrLyiiccJWkKuQymywM2eEV7CBajPtx88zx52hoBY5TJBsifb1n5SwEzpBQ",
  "key30": "5MzWS7kL4fSU5npXufATYpDHvQu9ycBb3QxUUmPJNDyueTMVySdM3NkRsPQLH243dW4Rq92cCaHXmQQr8q5aFtpq",
  "key31": "5JoPwdTtwe4oFc77mz6Tpwj7mu8ZWVqcaASd52UfJqsj9FMWpZutnAu1VaThKckYgez4Y8ARUFhEwdM4YYCJ2fwe",
  "key32": "53We6EwHHRFXkctbNoGQLpKeJ448b2YW9kYk1essgmhVSYEmzdEpkUFBGYaz7TeNgKPpdgwNjuh45W6bfc7QXVu5",
  "key33": "5KmeUrTB6dn1WRR8sC5YKGGJk4DQUzKsAq7NLGJd2r3FB9PWXrVRJv5RBvphVR6oGiV6MeMedP421VHtNyX9NwcZ",
  "key34": "5aejC8xURPcJGXUr3ETaRe1jLR9VsU9ADfqtzVDkLD1WokBEMaSXrDY9xEAcyNMp5TnznpTU6gCtHUoWKLKnUnLo",
  "key35": "3QjyQzAkLDN8hzc4sKfEGgJ9eNC3yJKAY2DBAMcAeFMHp8Yr4WeBs7TLtXsDBkvQmh8ZaRpwPSN954DaHB8bD2US",
  "key36": "3MCq2DVZpwGrJcUTWcmX7cUHxjbmb3UF3My1QVgn4429jRiX6HRFQixwGsaaS36oqT5EH9eDsG6GCYfD3mvNwjRg",
  "key37": "46PDWBvBj56bTNTyCmiYBYqtsyvASQq4h9uU1QpCPDjtHqETzbgqf4GcPPnnyYNEgCq2z5v4mayWsLAchT9WZVMQ",
  "key38": "63w9vbMdnJ6sV8PZuNhTpQ6csHM7VBt41s86VxEFbBxGYWWAaLhnbab3tRqB13x5i5NLn2GJuUK8AyVkowFnNMeJ",
  "key39": "2XVZ1NZVBmii1geRLrHvqL8yt5JQMXnTUAEnFYchsPBpFGmo6W11dqoqQ8bqxZ4yxyFdScsjyTtyakPCUNWAQcfv"
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
