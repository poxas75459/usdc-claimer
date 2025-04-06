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
    "5jtdDMa3ZAivp8zm5YzP6jfpstmsuB7HgnsEJgMWsg4TKofAGU5ja9xmcREeAgN9bbnTCWPCF57xDiPDDoD7NC2y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wJPHomSFXKovrvLefYN4mUBENYh9rS1AzHGRSmNMw8t3Ls6VWXjeAndSzexPn6HPrScksPDHUPrpeXXjt3WZDTc",
  "key1": "4RHEnTTE3vUGKvHBrzYAHLQSWDG4fULe2N7Qa1pAhDBHb5ZKErX6YTQXwfRw95J5uxq2Cv9AbudLQKzoQn6rTw1N",
  "key2": "3LTzxTaeP3PnTFD8aiQrGKAF7g8ragr8KyFksDVmc6bCHLxVHYaU83DzxUQ8hXoDd73gndoukpuQuZf8eXq1iMFU",
  "key3": "352vkfUWJocDRaduoKj5iK96V1pAyCwWFn9mH4pjGG8XPbqxSUxs466UkrnFtseqpEgSWZyvbniqw84onnZixBrY",
  "key4": "63yKstqgf5TheDfWT16F7RqKfuxfxzbPdv7qmprMY8PpPwsdp8DADENYjmb8sqoTcVH4R1waoRQA2zuEm7HSVQBP",
  "key5": "4cabVARxUsKRw3uCBNnnU8Q3KSUCziDVTTxMimKp6tFQho6mf3XheNDAcL3fYii5v2yM74cCFbNMXR5DDPWSAxV",
  "key6": "3fj4Kv439KC9KLWHGmDBpcUJg6dofK48gmsWCKxgdW5AUESFmFQCWLuZ43KwkAhv9Ct1mZiZNeMSGyLRArWaYjdg",
  "key7": "2oC2ovKxRFWqcuYVcrubBPqPT93a8Z3YYtFxtYqcog2BQyZHhEXKwb7JESWDzpZgVZD2rqJ6XF2QaQHwBZbEVNFW",
  "key8": "5g51zwdNdaVpdepfkzm9ktQ1fEzerJNUpjPNroUSipKANNZKu5JMuYwVLztjdDboTix1WrCsBaEohiaEeTZmpFH1",
  "key9": "5AVWJpXoKLgpuuiKks1Ehg18YcDsRt6Tz5XqfZUuJBkCGuyAcvNtBzbmGikKZ7xHRWJwHFvEsVg4y2UGPqMtg325",
  "key10": "4g81kSVqdVUzycU1PQ7TwfsgABAsN4vGJT7SPbyyiGNBJ1iYr5X8szsLsW89WBimKW5omzMSRNxmRNetx2SKmYCe",
  "key11": "5GMxwDqQuTAgyNB7tAuawtbZUUsFMY9doqL2396SV3tR4nMn6s1WnhtXTYEe3nfzckia4j9sJqr4tkw332JGmWWU",
  "key12": "5FAhLG6WQv6J6VPZSJkK78WW2QvsJnxW8M9gwtLuoNUvwNgzjtHJ5D7ZyLn4xf8WcysA89Yi54w8Nt15bqBKmKkX",
  "key13": "4E5F3CWf741Kyrm47BNF8VJTEAetMEtRcMUAFywnTJZ7ymRf79GvEmcAydGQjdn3L3XhA8rarL2ac5Qzd2fXWiNd",
  "key14": "X3H24fG2rUHzHbFZ7kvNGenGDmzDqHpz2ZDXxXztjeh3cHXUX1A4bSDWa9bxkiyVrfgD9UR6NgGC6yu1VWW93Qy",
  "key15": "2QLaAAhHb4UzBFhgLSgzPgjhmS9B1MQgZpZ73B1RR9dMFrdrwGethvwn3S23hDMxEe7hxNZ3jrw7N1gQjLGNi4vo",
  "key16": "59B9rGgj1QjaeRmvyDE3PkHQwfdX22dGvHbhNpakQ4X3AoMnH4J2cwotXT9FDAtCtALDjazTYY9dmAVGmnHDHNwo",
  "key17": "3sTwZuBGLtQjzqKWk4q5hxDrdVb96fTegu1YS22Esb9PsKKcELe9Dsbw8YPoHxJQRXMUxdmB8oj2yUwzfrtBpqup",
  "key18": "21CaMGxiC5S8cWQBCAPTpNRw1rgkj7vDmZxPAMSDq8yLYBVCqcDiw3qbdLeydejgEkw4tfW62UyyxsVNELgH6EDh",
  "key19": "4cJxNffiQTGEysk3SZR2TyjMG9ybQZZTuXaUbxcWNiA7ZE6kJ21B9EFzcyg57uLvzQGdqzionFjPY2wsbcMQtVLt",
  "key20": "3dJhiCeJLFWhSAeVdB8TMqfuDRq5hNr11yqm2g8ockYrW7yAA5nfgKh8YRncL2xZNDuYmPDozEpTQ4zdV5YBbxUe",
  "key21": "62jZcyp4rwELkQAZDrAXRuaQYWG2RE3PKyDCUedWGqfj8PHV6RVfKrq7Tjfm4SSW53jpV6yZiCpkbhhXiWEWSxha",
  "key22": "4ZorbkkRLrTQaYvcLV6ydx6uDaetgsRShQLX29j7U7AmCr1uJSnQME66MQnogUCefTvTYYoX8fw89QWU5qyF9PtA",
  "key23": "5uQ2JLoH7EsYtzJJdXpchP6MBLdgRF6aqqJXxoK91pX2svDbnfyDcZZL6HZ5fyLwCR1de5mbfUiRwcPx1qJjNUVA",
  "key24": "49ncAVRXaeFAL1icXGejzvLy6Pvzo9phaG6S96WhnDH5RrxYtxLKUCLUzy7SqXy9ED4mtCNguFERed64CTYrmwTF",
  "key25": "5DBAXGH31JE2G5bWBYrQwBYYPNyTu22EyGhxsJD5kCiMTR3VRVJqaQiAGfxGPMhoBCy8EAMsvcs3PCtPjeAPiWYE",
  "key26": "4X4LBtMRdfGvgrgbyqsEm7Sfst8f9ZNj2PkdN3wjaZgCCQGjRKgGHiNCmHERHjoeS5vTBnbj88WnrCYjLSH2WTWb",
  "key27": "zGyVcbxLHvkVux26YZcneNEdJPKnQfMoGwsigFfsd4wVUR3KaZJZoEyQ8EY8jVbSGHbBrFnBsnPqEqvtoEbwtCw",
  "key28": "3bDMFbkG8QJUY5swKUMkmsFVGkSrEkTrs6rSRVR8Xi2tegjGANKhr2m4fx9T3U1cuZ3B1yo8YHHoyu7CfTSFWhut",
  "key29": "5NdZqsAy7fMgTyzancDye5EtsEqMRvYCn5bbG6jpZg86zTueRsJKM3neGPogjuYNM7bzQgRm83iGQHQF8PVpGjca",
  "key30": "3oKXP26bQAEzDS3qBEqZBnJQCfpwW6zcai2JZCgKeiQiSc4UKHcEZ7w8ZfS4w12dHL2KEcKrjWd4QjhLQdEWiz5m",
  "key31": "4cDjKgADdTVZsZwrg7uHkW8eT82D6bUz647bQPPJLZiJWsLcr36aGzB8KCRyvxMn81M5WV8dxrLQQNxFio1WokeV",
  "key32": "5xmkB7XDVE2Y66ooStJsFuajnnBQXvn8wZFuQV6FaxHMKJosTwH1N32ZW4S8VxVgRXAZNodgoD7kYaB4rQM4VS8d"
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
