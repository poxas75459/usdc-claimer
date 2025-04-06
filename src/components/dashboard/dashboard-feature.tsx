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
    "5MA1osPAALnufQtktVyy4PwieE53J4Z2UpjF8m5AfB57uSApRR3ESeWfT6Q5uY5eWLjZypCTmhbXPTuuzCBiuNvE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "657RA7PWF1LdPUsYxnASx9SLSnGofs5iUoqQhgdJJhdJourTBN5EeTHypQtdQvhSVxkAFnAC34mjJxbTXdRquGvh",
  "key1": "4oLKNG7e9iC6c3Tt4bHrBiw9Hrk97n5eSx4zbrSvnkUxKzd3uqGJSWMqivfgReKcNqYFJd8N4yTrNQL9J3kJCQpk",
  "key2": "5owm4hNCNAA8sHHN9u1ym1BqLW5bCmf6eXRyCbJDywkhaLhzDwPYjH44WB1rovvF7dARypG293tx2T6GuewSs8Sw",
  "key3": "2CRQVpyGQ3pSsmdntpGFjxe9h94EL234bFErQBMZ6qAxwE2aLuQxjXNgxpdbFnxgiSTUGV1X8h6J6EuaEzrUB99p",
  "key4": "38x1y2iu1r5hSPTVa7dXyadH3HMPSfSaSPNp9hooVS3boJeb2BeG5Gt9pioGm56PjYnpHjHRwi2Uy5JdxWNwCc4G",
  "key5": "2n3oevpAHBcdgQYs7cPsnGCj6UF9FxBrusVrF5sZMzZw8iAMRCsJZFpJf5QTFQ8P7HXKc4iASDQTYEKtg8yFqoep",
  "key6": "3CzrKJ9LfmEhNTvPENhrQYu3R7t33TXXc48wgSpBPTpfxjqzp9BiRjUAPMxydkmHwoLFtwfZNxxqavobubzjgnuX",
  "key7": "pvvyfJWn2oj8qPpGrY1LqKBukQyBuHXR49GC8iT9PYF5NXykYWLGtTcSg8s3YqqCMbd4Hbk9WmF6YVfktckqdX4",
  "key8": "JFdNkBLMQ2CcsZMy2WWNRAHjm1VaHAGhNLBRRDYiQyLDnU6QYKpPnnJD4X97PhGpX2xGPpS4ek5BEmWGy2LQ8gH",
  "key9": "4PEuGsjsJxoFNebCco5CWKzE6Qyoe4qxi3tj7bSkS6dNrFsinPqJ8gfDoDgGrxAknomvttKJzMaCjVvxLrpBt9ae",
  "key10": "5rem1wPhQjtPLcmyyyLerYbe9GWnw6WcDH7CGFpy31VHipEK2E75dXQCftjbwh8mvMvzJc6EJHnaERDj9RS5gqdS",
  "key11": "5Biks3af4zSrKZCPYt4zgjaS86LNm8S5UDC628yWEGH4xwZUEynfF8ogkexLgVB4kiLUhhpAgx29rqiGxyXmYy5E",
  "key12": "JtZWh94eErtdtUxBBuAr9YohNaimGmBxMV66R3Qo5pEzj43jraUyji4SP6iaywVjvvSBhZhtx6ozQh7fRxSiAmS",
  "key13": "5bAYzLLi4PeNnGEpgucXoVxdpnEurA2BJrS3BGdnhWJBozxxKzciTmfw9e8Zt5afganc6CNTGPXkGHDZU531qe8J",
  "key14": "3WnPTSg4EFc9C238BQ1qJoQhkvpfNY937NACsiMJYrPuWQ8ateDBNWTCmUJs5rhu1jRMPp1MPF1TEW54Ny5uVeDB",
  "key15": "dnR3jwGsUC4LHcQPtfQAp6SkChVw41ScFWtCPqvWxGWDCZCqsdRBs27jodysEt6MpDaxGuq24TS5jYYro1cbgBa",
  "key16": "nN252oPNd9RapCAbLXcLB5vdXG5j9o49g8UZBv7q4PG5ahywhouU39CBiUn7iMks3AcbqQtj9siC4Zc82uNzm7i",
  "key17": "5Rowid6sTKzUvyB39boJLj6ofCVXkm8CNsQmBepaYaM76gRphC8hLQgY4RrihKb2XTLRZECxJoDFs2qHazbQPLj",
  "key18": "vq3Zhv3tSVgu2dihfYt611wBvi4MboDJs8tHzksgajQKsJK4rBf6xGgqJYqSvuWpndTDd25Pap7agC4aitkvocD",
  "key19": "5v6BFMDnTLmz2j1bBW3AnQMRbNgvFjcFQrQgd4jNQEvCSy1xBaPqUwLHkjX4zq9fT8JyU1SpXoarA1NrrvpWD9qD",
  "key20": "45hcxTaMi7E1Q6ojnaKjJbC1Nt27U8UYuYS1CHLWSp3TDToTALCWog5wXi6CQLKqqc6MQPnaCa94StJa6yTqrcrH",
  "key21": "my5x82wfSBFXD1mSrLetcF3j7TVg3jVXmixeCznrSnKb5NAVadNu5uhUZ9aHNTMgaG8NxqnwXcmimikMraPtvH7",
  "key22": "498yV1aSBEcZvsiB56zXBG3WqbCtX3f2qJjDqiVnURHxNhHEP9DJMZ6J2Gsfigp5JM6nvZCKbRJzM9YvCG93fFzH",
  "key23": "5cHxH5iZAhi2BKrAuQQvmQCZxiWQSestmMDY2Mw9LwoUTCENJEn6avRSttFXfv7fGWh8Ya7VXYAfu27CJTbArqze",
  "key24": "3A1W9mBLALxJRYYnUnWQjPdrXY6dunRQVKftZjX1cWRX5HFpAxuq1vbvjhpK68KhyJf94TmBtZqRdUJVtqS3eGSv",
  "key25": "4TERwEF1Mchx2YqkbcZV358p11oTd1sML4GfFZCvaAZnoyg86pdwBbWLgvioUVggfPXL7u5BFpvK8k2JNfpE8YQa",
  "key26": "aZNugvZ8iVYeakC1E4dSshNRrPSC76eRpby2vRFauYonURfFwrun4pkK4yW81c57FxhKP2eKJuPvYLAmzEs7jqf",
  "key27": "5AeEAkeFVnTq41DAfywAzuHhWjg3jsKcbRMiLXWBBzACZgPebpzrGRGgBZG3MLyMAceN6nw49KkjNrussjgmvn3w",
  "key28": "5eA3g8xs7CKWK94PBYT2jugAewkSogBXSuxuwVdVNQX9LwzNmcAJD5R6ecvnmNBeBnymJqSFJqbKkSihApKXo6mV",
  "key29": "2yvT5orqUTvWTtqDHWLq3HP46M6vKh4zaW7CSfSYFaFCNgvRB1Q2NpzSTzvnmbNaREz9A68UxVUoyWw7zJFTyqt",
  "key30": "3pyipBCfJbV4hduK1Ar2CTKaTQLtEg3kEMU7EqWXzbsEaLWMzRqECrKLbiqrY2kBEXMhNkC6vuAcV8Mx4r8EsG8C",
  "key31": "sV82QbNStE3HSWkeBreikQcVfNocB21nbX8rhu6KxWeJxPvNNLvPSfiU2pFXPGxXFYUZdhz6VKU7ugphJKeU5wJ",
  "key32": "u2tD3ra5b13JxSpPNv1vewP5vmtZZbX5CXEYuiQrnxYo6vTQGkNZTkZPr1ZM37Hzt5qdsRp7AswbrEPphEUocd5",
  "key33": "3fYqLthXzenFkJYnRUhJWo8TiMFc1FTBEKqD22MyTjtQ44ZSB8joxmXmFsNCaePgDUi8JxzwDHQZhtD4rPgburKj",
  "key34": "4B28xt1gGa1PJEtMa4WjygUm1Ay3fqhwu3xnzjzh2X67WzcoWHPDcw2X2NXgeiTuTmybgXgWuYNW6UswbcKLVLAP",
  "key35": "2Hh2th3EaJuFB5wT2u6mrVEdzbecWZtKPT3R9BU2oNumTUN8tQq9gRP4ajoksN2iGQcDoESiZEp7G89vKyynq8Ff",
  "key36": "3Kit67Vjo4SBpjDpB6LGEWGFi88aSwuwUQNNjAX75TzJ2QH2hAnrpe3kGHLdmUaVSEyNsrU1sRryUGKnLh1LAunS",
  "key37": "4bBx56PuUZPuqzc59TaDTFMM9DvVrAAPUyZGadADVaNKviEj5RCmCWT6bYzCR3Kigj8aqMhRzyarCF9o5fVP2GS",
  "key38": "2jCDMZcJZqhYSvre8CMePLvoACvLYXrgee7P1e2WdsQRFgrFheitjkbyGEQG3BzYMcUiWNYdDvmHmjDGLFZ1CFQt",
  "key39": "2bBjuQ49JJ3qMA4xWeQPExn9V6dqtf7WKBqCo9eZX7bHaVUncKdnkyv85uAx4kRHxrsWvZ5sTAuVAfJ4pg9cf7Ym",
  "key40": "2iAXnHwGBzShUS9EEJ1HUZ51uGEpbdjLNLedFih1sSPSco2kucYJ18G1f6MYYDCjs2g8YChW3sYqpHxpuyGHrgkK",
  "key41": "5krns5isjHB7j26WbAtfoU277kWti8mGcdA9bEgDg3x4rsdEzesVK6ec7w3TcRnn6WPz1n7DUGd1gM9QQZZFrPdA",
  "key42": "4pyxDoZQ9XHicjFspv7Qk1pWwsTXTbEmmL88GaCerdjR9vKdZauGBp2PdebYBXjyL3yNhCqkUpjLbz5gKiPurQ1H",
  "key43": "5JLUVUMZAyr3spEnhbENjU2rcntDq1QwM9KM7E52qTrdVBTo7a2wUood5qqc2LHjhXUJVh83idkvg642yrHGVioU",
  "key44": "52iBS5H1q1NkAKNNcRfgFRHhNtmKrpWRjj13knSY4m5bNwpYJoHMdjKEoL94HctGejA8DiHDTGBwXBMwqoqgBNgb"
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
