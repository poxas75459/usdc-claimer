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
    "LzMvLo1hAbjFNxzpS7PQ2VDBovb6SELhjsnHnWjHPUu45bJG2HL7bZqj1zy8rCmwpFy7jqN63Vtr3bkqrnoUrNZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DWLP1vZNgCmobTw2zdBEPj73NzAo8MPzfjZPBZBtDprx4ofb9XEimKTvDEotzLnE3XeVK9Gr6whhBu5TgdbPeNS",
  "key1": "32ZrTFXajEc59EwHP8A8JQMpd6D6mcFFvKsPGF6HfewoyjHPztMwtzbffazKniAxMn3RVbgPnKtyxcjXrzCWo8WK",
  "key2": "62w1ug37ibmyLwrYzHwXxKdsfnWcUF633m1DaxanZDoMMjLn1MZnDxPVs2TAmGukEyvwjQ83V5qWbWe2WfirYRLm",
  "key3": "d7PdsiV9RvdKHnSJXjnAbBEF5BRAL3GHNfXxzMEwLo969BAftdm95zikuGbP11V5sdTA3NFd78H4kU1zun11PSg",
  "key4": "5zAU7uPYaYj1BxsqZd3fQ7654PRkCZM4rNEXLCqzabTb5mXKoSm4jkDL3gPXnAp73wKRcTU3XtQQNgXQuCtJPnjn",
  "key5": "2rYfujmT9xuehQQLBk3ntkMq2sycueNj55WFLEAvW1Dc4oTGnwN6Lb7TFS3Fdj47e39pFeWjBpeeKjvTWB43S4Tt",
  "key6": "8dZPUGfFtfeKMQ1Ue2SDRVtw5HyeLXFEtHYVgbQ92X7QB2EjK3heLaLC3zDXu3RUDvPCXrp8jz1Cjqs7tC2vYuH",
  "key7": "4JUHsEghbJV2DtpEQG4ncJT2wq7JzUxP53j9ZGFLPSsySobgihhJ9eLmDsgCCFKTLJHLmSNS6UNhXAZpaDpQ6zUk",
  "key8": "5mzsQ2mgkDMbJ9oc81TdLetYkuPJvoj6W7k5fCuPWyRgXauStSgv3vSaBedcpbTr91t1BVprszHFvrzM8Ye48EXa",
  "key9": "5YKV57uJJXF6c3fouwyVboU4WxC4B9CXJSZ3jJ51fQCwG3837qriY6HVf3Yy6yS95Yg7mF3XwM2XQ14fwoyriyVo",
  "key10": "2jx56UAnwecnD6FbRe2qnbrqBdFSuYHRHwfopM1hsprtVdBfoKsdMapcMv2kPDTUYboxpUwp1KvhK5xtKJKz4A11",
  "key11": "2iBDB72Vb5UuLPerCNmVrLc46qYFqmyRFUS6oXsPkCVNMeBEHa1s5xqXJ7uWqBjwZnxjsRDf2CoFVTJ39p5psc5v",
  "key12": "kxZvfLkdCdV344YrEKqPdYErmLqdxJ3EbVsTrd6jNKe7dK8zQ7DTFqpd9pQ5BEPf2xAvkP8RWui82UXN49Yhvcw",
  "key13": "5RbdHDvSNJzsyyA3xx6PMRksnaDSCx87v8JATBL9yx1RmDDnKaByQkkwEUCLuTvK8KNEv94mTLDLznaSFokW4Cw9",
  "key14": "3YiF3gQRM3woYPva3raMkvKgZjrdkS7BmLCdv3kmCVSvgKfvbThfofEQQKGeHm5euHfcosjB8TERfnTyso6rsSqZ",
  "key15": "4efgqPv7NBEenZC4w8EXJAtoR6DKevyEsxRnirNsGwiM2UajYyfNvJRHtygBWnCc77fmnFaS4m3cdfoThxfJP9Uq",
  "key16": "5vZBgTXBVc8YV1g3tfP7CvkGC5qrjyUcdZuf1HJXZdNcdr5yb9Aqg9WfmfPXQqNqYUidAWzaxTRkmJoKpqDo4Fjz",
  "key17": "61bDgjdQfQJEUdpDM8ggf7UZXSBfyUEv5QQeCFwzj8BhKiAHvxv84pivpjuE2UtCfi4RGJSa9Gkti2XZKm7rAXyU",
  "key18": "53CGZiCiJRNucgkKQSGLyH25jhYVvUPJp81bR5aw5nNJB2CpCx5NssNozSLPthccPTACQ6tWrb1LngfBuz7hVVh5",
  "key19": "owjrLqvdF2m3Cv8NZgxx8T6MLEGJ9qW2YF8ra35XwLkjjnZtECV7BLg62gukBrRcSAFiG2sUmyB7aNrpo83bMqP",
  "key20": "1cUjKEMnUGYYAWmgtp9NeVVTKKHHX2ujUzR7xquJwx4cAbEGD97boyMGaL8hmjTHtkCEmsnU3igfni3PjWWrUzQ",
  "key21": "4cduNtrUVqqisJXR9JrAufoq2YvwgxAmSnT8Q5a3zMNHH7vfCXrbJAUn8nifd81DDGMvFxwnzgZtdSKTCMz4W5zS",
  "key22": "F3GMNXXoZsFWpnFGRuTT4UdEitTVNaXHacUW21ronSMLZdUuSvU4PPXpWWRkas3tnsaCk67ao55VxvLnhrrdsLs",
  "key23": "4WKfg3Qsa6A2H8n9KeNE1YFxFXJ8gGkGn99Zt2mWP6ajmYH6b23nVnJbPeXbrWAoh6xeCwH2WrGGMd7xUBf8sZeq",
  "key24": "5wtpqbto7S4YLc6Dwr4XBy1XP4qr6fXmXPKiEvzqsvxJAbyBDwrvFmep6ZQcxP4qon7kiuzvysdonyiNaF5N7XMU",
  "key25": "49BCThp9dwQZUtxAwdfGPGnFVPAHMfWyVXmbqtiXtMheDok1eXvjwR3yHdUcMDXPv7UXafE5x5WHRNGfmyS7xxNU",
  "key26": "4VUCcxRT58FDcpBsioDWESFzoskWCGC99WcTcxqJRG8sSn2zJQ1B9qwfSs8jJJCKLgHYAo5qZHHatFqdYMBJi4w3",
  "key27": "3f2XZcT8276NTZUxK64jJD5bPPxgCFDi1ELBr62VJLkZxx7TyWDtn4z7Be2BoBNJcUi6pxEiq8YpVb7j68JKa2W9",
  "key28": "4cM9TsnRmkTSq9dNqskQ3wPfU4dqfSowXsXLs5ddKGGh2zbRRq7hMu2P745KfnybxTeeHEPXBSfQcrw7DRqauhfS",
  "key29": "3MKFPwMJ2EjU85oUTtTdtZYQfGs1J4z1UjZAz2d6sVF6Mhhceexn7QcGvbSJem85EWVr5JaCgVzbFGTwARMaQf7c",
  "key30": "4vbmvzeTR9UNL5XQJ9nqvESCSAQa8ahtbY9swqithK25sBBprG3Ttcx8sRc7NVDD5TLt51XZcA4SjtyiXFRJWnmq",
  "key31": "RP6He17oKJbmT3Q92STRaWpzgwCwgqguihtDVTEcNpT8Zsxjx2RR7fiVwpJ5N2LkZq7nCRddA853n4xrD25Kfkr"
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
