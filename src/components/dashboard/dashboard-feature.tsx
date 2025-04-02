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
    "4mo5QJFZPyaeHbthTXboPAE7auQf6wQoJ7dkhTPKgeXhizNZAjZUcKChNG2D9jU4BrbddwSxezxA5qiiZefMefv9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o5PXcXKHd6ExTUq9YJowmNe2MuVWNcT3NTkEt9nyWKENa766bXbVczeuENsvP8fxwePLNsWTCv66gQx9BY4CcTo",
  "key1": "3WCbC4GQzMqnq56Xu1J4KuKtUzrJov6VCsNghq7yENt1Kqp4Gv11dvnfukijBXpUGKRauRSGjLBaZzVZJoro5Zcj",
  "key2": "ez25HZVSQEKLhfmqnKrASonDmLESjSDyrFtJaNNeFttdSvuqvwizUwGhtG7Tj6sdi22RTH1h4FLCu5TxvDyyqTA",
  "key3": "4YRrQ2ibE6RGENtgZojTAcr1spqALFArCbGEVvke3eQLfqnHgwPYjoaECcysf1Xu8AX8ZAAzoe5rzR9r8mLUHhaV",
  "key4": "CBRN6jJbjkEB3FBGJAXUCoCkrxyJip4gPQoZxi5Nvn7evTN8eLcrbirBs2QTBbXVqnogvrCJbQFfRHY3dhwKirB",
  "key5": "uNzCM7tDQyi3chdAyDBfTXu4TLqDHc5gVWtSWzaCRtRBZr7VKQzBVEH5MHBDc56A7HucPva9mU15HwAsCkyFRK3",
  "key6": "4iQzks9TKLnrfAZNuTLgQyzVd5nZh3uGWuxRZQay5Gx4SfRuNMPRLCARJ87a9MnXZykPgaeem9CDBTZj4LRcZorV",
  "key7": "wskCrY2Ag5Y4YRdoGoFDPLJofE8z9AiwNbyEmHVKw2YRJ3ENaxqitwtvbP1HaWTqkHv9BVE8nZ1f9CL2mBETdRC",
  "key8": "4g2CxvSHEJfyBNja6sFHP54KP1iV3HFn5L4rkXVM63rS5h37MWucVf2XGBGCQ3x1Lz9B39R3129neWaA6udxGToR",
  "key9": "46XFNHVWf459KnQQYwVajpFqJ8e4hPvjMiE1wR1gwiQjUuQykt17BKBstG7V4CV6jXxBUxSEXzrcYysWNDHH6UKJ",
  "key10": "5th9GaRLJdbWEaJEsitybd534q4zSUh5ZqbZXXuDSMZEq61vBBuPNjycGEbcdNV9DUvGe8rFDrvyuwXYBrW7imRL",
  "key11": "2XwMgHkJANjjfGqibN8WgCraseGsEXqNihSTWqMgF4ftD42vZMiEen245yPniujJCQPXsKkDdyCtEhEJwbh7zp1a",
  "key12": "aLaexntzPpAqLJtvmvLHBLGTxjWr9fZ2m7sR2hMXeP7xCo7wS6yimrpGjHBcujxZBjkCYwvDRPsh9zWbbVQPn3M",
  "key13": "XSNn7CNPuFUAi9BzvzotPP8Q7iFRDdA3pV2Z9phaDA6rPoS3onPPLh62fJGQS7KLFcoNrP3GpbsHFJg5sSTTRte",
  "key14": "4YARpvCahePhqEV7LFTQfgrwuoo4kugJ2hJ8J9iJSvKPDaz51xoiHBi4GCnN77posVMSXoqTZjjBqz5qiwjrmxw3",
  "key15": "exNwaNKShMKpTY1ETDeCEM3XGZHBbb6KpZhPSArzGzV8xXF54tWkq5ikUMEjZR7BKuzmUjvhc3yxSy2DH9HFmYA",
  "key16": "4Fuu26ms2FUzFbQAhrYQswV8DzSCsAfgh3iz9dhwch8QELY8ERqQwXKLZhhJcrgnddUezNoqHPRQTSaozRhCsqRQ",
  "key17": "2FkK4xfT7SykA2wTkvvYSiauZSWvCPcoBV3zpGz8JhS1hK7ZdYCP8rNNo8p3DPpugKHFF9Eyi8KbtvsT9BMYi2Z",
  "key18": "43Qat3p3brLys335w8RMYaeaX36MLASYB5QaVmnFeTio6hzzK6ZGLvHbCrcYgFKws7rJvToLuUSxBFFgXrH4eHEb",
  "key19": "614vcT2hsdfGF9kMeavUJvjw1kTnDuSPSmcGY2beBBE7xtpGg2hhCfw6vhrjgnY7oUWa5xr7FtH27ntvnmoy46HF",
  "key20": "d6ZbpC1XV6pWdgze88HW8C4vVeHPG2bDxGJqD7rjbUS1zz2Yxj4jHGyWKDx9SGfitxCwRs8A5rAa581XcUBdwpw",
  "key21": "5JqQTT6pZSevDwQfDeUeb2rFh5aknYNHmBmuTs4wHEqqWtj7hZjMEK92EHDXxv7DrFkj8huUv2X3rDV5iE7XvAuN",
  "key22": "4DAWfWTyqRj7ZqhLtbF7uz3Y45UBhDGqmibQ9F2PdutYz1naqyc1YMk5dPbPMcjN5fRkp1oPJb1f7HFVS1rNRxsR",
  "key23": "cC61L2JSDkTcFaoJqhBsewjFoRsZd2ESEK8Pg73582ws7ta3P9dpJpJEuxRmJpvagJApX5s8YT4nrWpR1qRvc2f",
  "key24": "355onAjg2Htw7SU2Z8E7kYQ3qCumw9mhQEPHfwAVgbnfjE1UkizeJS5UtF3MCvkmhtrhidb1ZpBRAkdc1i7Npj7M",
  "key25": "ijVigEEfuGRynwLbXkM8x8USt66VyNVSfmdxwV6VV8EcnxxNzjTZPXcPqKuiugNRmrg2BqxQvpzV4xbogFvtj5A",
  "key26": "41xw5DVFmVoAdM5duMCzHmGVc47RZm9CFBZ6A9yVxmSk5xgYCoRRJBHw7uWvzjq5mh2eX4DJ8nRWj2QCegnkT1EM",
  "key27": "2gv9kmhTGvYD6WsjjScZfm4gLfEF2dMWx7dssMcv8XcsZtEhjskExCK2FhW5zjfM5tGLKhEFjJiYjaVCh53EszYQ",
  "key28": "25iqWXSLZPkqgy6eput1y9rKUeJx72Lbz2UxxqXvvFbDrKwJoqLNWvuKfD4PBDMjBf3s19T3ZUcJEXPaQ9rCk4HD",
  "key29": "3rNmTuLjbF7eHNzyeFAkbxiihfvsEFJVf4Lu9RouiocfFsHcdtQdoL3TMwWfV2yyUHDF8EHmUuxtUyLcQMbSYSXD",
  "key30": "5caCjhXdPRbX6ZALSQW33QEs4F89qzsfmL5LUvwbykNcw8PCUJrJwo1cxXmQ1gxifF2TxXucedUfNiBbaknfNY56",
  "key31": "3eHyxQxUXipogEkrLaCuCcBPnMgRFQTFwnwMVQSr9mBsCB91msALgqNVhsb3u228LMmqz4cj2D26W3M9vCKca6hj",
  "key32": "2ZJfbGWuSRzPFpAGcpXxKN4SySvWXUFC3tHD7pePxmeQu7raYBUKC2iGaB4GFL2o1GKhkxQnxtwJ9uxkD3zjfofr",
  "key33": "65fFAGUsZ9MsQkz7xZCHSL6GwuHHi2kkKsHfaxEkEfG4pt6txd8MAyYyCnKVGJvA5sTmYt1ohe8eLEUb77PgXvqP",
  "key34": "29mejqKB7FySFhnrZAWcAUQaPervzqUVJChU2qiHddTNJ2R5YfQsEXK6pxxpALonhnkRetFrgt3A6tBreCC9Wecp",
  "key35": "4zTsMrkDdJDAJ5VYRwwoiQx3mQxfoyFU8MzVYiJwmsXLjibEHEEpvYi6oN2wRvKRW4kgsCEDn2dSPGKGWaqszoTL",
  "key36": "isWbsCBRj88P44oKZfeJN8jvjUZ1BVxHU9DmL6msv9bBCo6pZRytpEuiTfEkBKZkLSHG56KsCkT6SwXk2aZgDWo",
  "key37": "5jirXcg4ZetexyNEMbuqN2CjCMnibJck3sFThe3nxaiWa6CVihJd1X7fPvVmg58GZSrnucA5W61FY8j69n1ivLF8",
  "key38": "2CEHJ6anGcGyey7Mkb23sgGeX1PpHztVoKuC8Wq4f7dtF6G3RvfNMAW17PMzU4VHGGgLe6PzNBTz8ccf3Bw9rNAt",
  "key39": "2cLTsgcz9yGko2ncSVqZ5wqx2dBtUrzDFtEe5z76FQLV2c11arnc6gRRQ3m6xDRcn1ycvaCmZ1qkzjfHvrACfupM",
  "key40": "2BYdwRHZLd9pfwsHJPJsEma3LwHTE3RUo8Qtj8jMkufPBHsvj9E5gQb9ckh6264SwriYYAcXRuVFXhiJCJCd9997",
  "key41": "2qNhxmZDRvWKQUTLpxTktZ27PuKvMUHataVuSAPC2XijukmUDuydiEZdcmKmrL5voEzQ237VvFbJNKjVKJYMsKBK",
  "key42": "CoFQexWutCdmMGDRugF8Lr7SRxL9C3hmeJi8psCF1quN1sEXumuXwKTiyj621xdWKkjRaJp4xELvE5yMdNyDA8N",
  "key43": "3nkw2D6dgDeYmLp1nPFtrvTJZBYYtvjvxtYdLa3Uc7UWWvC4ouWyB5ywoD5pSr3giCHuWFpuSegGHegvYyTNt7UE",
  "key44": "4ypEBEGJ2qbdBXxhikayG1MiuydGxESJZafJaXhrU48bFcaGbsdf35wFg8fYHpQWWwwWh1VxAf1yZmUHD4wuDhHM",
  "key45": "2BNjPmi8z9SMHYU1YsPpV4kb81AyE5okYNKffPUwuSytjZNvr3gCSji2m3GCYb5pGgTZsJH7m8uezhbF9t1Eixiq",
  "key46": "64K4xPjLgAFxadpM6uMaRajESmc1zmupz16mqpvnECvUSirgGpAxbb9TpwcXtKhjrBiogtnSgotEtRUZQLWb75i5"
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
