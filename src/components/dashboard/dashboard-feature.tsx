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
    "28akTbZpTekbqBK7BvxMF1V7ZUBLBAu3iuKpCV9ysR1uAfPeys5nJ7d51V2auQQSecjXx2P2iN267ywKy8cKFTUX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qXYV1LhCmGEnb2H6QazqSQWw3fS3vvDtUVCYbtUDk5v6jwCJi1rSWfTqMJ6HwMHLf1U9bXQkz172QyfaT8XNESd",
  "key1": "2rUPQ7DE52L8BAPh3ZKMxsEJrZkQC7gL5k6ifXBDFuCn1WXgCMS1Tjo2aud12AxoW8mdtXqVcd5KPh6sdAbqnBdF",
  "key2": "2GXUsWcid5m5viVKNdYLbfNrwokCTXReg6npGgrNfAb7oCKNd7UBHpZ9p5V9mbHekpbQfyhXnYScaJChu28NViru",
  "key3": "ubwos7kbFJCgackzsX4Z52xEc9EVYawVBi3p8DfdaLVrhHYRfx2M3Z4kUVonMgmJSdsB5toAdiAoQoFgA2uvcZc",
  "key4": "a2UnagGgMfVtRVgK5erHHExe3ihBQRXQL8SGbg7agGVoeDS24NmYDxmsaGkWn8AKtTSkTfBrr779gMrNo1y19Bh",
  "key5": "3hacP5qipgzUQawjqZgGqCbNkdpV9ksQ7aDcEP7DMax54gsyQMBmw7Ehk4tnu1SCGz53oc2DJd6hMQfJc93bSYy1",
  "key6": "3D4ErbNFdmccYoF132Z9UjaLU5ZC6jmhjp6CMHvvMALRPKyDeQUk8wxhT5hK5tzgLP7S83s8PAB72LbPcPFvZ7Lt",
  "key7": "g5Z32HPfLReWdLkQoRsZEdP1fBXGTcPmh35JrSeqGBSJpRfjU8n9j8BTgovrjxviJ72c9hS8DarYSSdzEBoySsa",
  "key8": "2zuW4ENoNjPvL3TPqL4iR34JJZpgqdRgKEgGVeWpq8tj8d4fxmygFTbCPHDg4PZUr4JhVtS14fyAFrn2Ad2abtUK",
  "key9": "5gJMSo2vE9fkN7SkwBbqwB6MVTCr1M9V1pAcumicUJ64zn7j4uVdjutd7RP4wQz2zhv7Eb7tug4gP5QhrHc1ahqA",
  "key10": "3JJeSZci6AV4fdJhwPBfTj9pRnMdGqd36uaj79aL3tfM6ihkhzPrF2uGi3v7biJ97S5kJG16wxuYCBpQvEEns7pe",
  "key11": "fbzZMbA4EQ8nt6cBjeV4aj6UHNYZVCLGMpjZiEyHGuHXZbc49dHKCHFp2rtPJQ8C6bEsiACJXm53y3wvk5fskAy",
  "key12": "5P52eLFUcTg6NpUuMZ2M5q3Q7bdLtcoYjfgcSFr3EZW1MuHVcnysDodqoEuZSbHHgswUwhqjX3zYWLPq61otYPhq",
  "key13": "3QnNBwcYjViUNv3CkFPptCrekXDwEuEDfPYuP2GDiUXyj2D5ErQXftAKq2zmZfs3mVnFB3aTGNEqyRJeJwWjvN4r",
  "key14": "jHLTnFqx6EsFaw5rE7smxi6WtVAkg7qmNYxDCQkgQsck6sGiFNkmHsUKc7Y6MqdGhTMjfYafszJUve4S5yXSXA1",
  "key15": "4HKKaZAhA2A64UT4TGcbRd6dDqmDFyhCP3vVp5b5xaekuTugEHMWgyitAzHpCmdYdD9u321pZuUBhmdMximdN2gr",
  "key16": "Lv9rFs4X28TgSPXDuvgVhXYhNcGR5VAnHQPHo1F7HEPksGQJGUXtLKD29GDRkRdjZeVVkpLzoCKdGJJpPt4Ad5j",
  "key17": "4KBJYkY3cu5DcS9v6eDaMaKqCtNdEAhB5xDL6Yk837V1rRtityFEWeh3ZRJfFeF9cWxE9m653iMBddpULS95tGba",
  "key18": "5khij68MjhSaRjCRTrmakfP6w2iT23xFhJ8tyfXwk87FiPGNvtwejbrq3dT3PAGiRjAQmgZ6eiDPjZz6UGfbeJPq",
  "key19": "4uPVLGWwGdfsoD1gWsvavXfTVTqToyvohTh1dEa8KC91o5Xngy3Xoxe4Ponr2reJumYc9Z3TZbN23hAFDr6jbHBx",
  "key20": "36c8y9gn5gnUReUYwZNdqiqeJEnhops9XXyRmUrDy1wtF1zFC74XWgR8FzpapkHR4XmiFEpWtZK4SkpsQ16e7T4M",
  "key21": "4W6wksad97oDdKQBRv46HkRGhWGRicvVeFDNDjEht6BavmWYhTmvoVqxuk2EZv7Gy8UJV8RyRWJvmUwXWW8Gtydv",
  "key22": "2KN2GipSpddKkjjyGG93ALhMvAdRkhhMDtv5gcZcfyZvfJbXFQrtr3ZKUR47cLEZ7NRHFgckuaBqs9Hnj7mqPKRX",
  "key23": "2EsHmJA8mwEMeTPzdG3UMCgWRa8wukZVpC4o3BeJ2htVQ5wXbNVhpLcN7Pz21rSSY1crYq84u9vNsgAReNWNtFLa",
  "key24": "ViwHtVsoHtRumUHdHPre6J6eeGt2nwADoWXKxBM1VT7GdXaFYbMLqMqn7M48VvmmHWWNfCMGKBcHZUidK4uDZLg",
  "key25": "4ooPrAiJTLL6sf67fT5FHge4UnPotm44ms4Yyiam4drzCPMJ9e4FdPUQP2UnWbcQFjkF4hLS3pdTHGhBbHkYPxMd",
  "key26": "294pw3CzvqeXp7zNcPixBQ1SL1WQV8Ezs9o7vsLZ8pEYEdgdUWp6x35ECLHzxz6xvwvokgxe3meW2C1hMo1jfdEm",
  "key27": "39BwgeqzWuk2NdPsKCkWo7iAXV9Fy5zuoGJNT4tpbTLQdShTf78BUoSRFXby9ufwQXRGDXwbcRfneRreFCvARx4N",
  "key28": "5fFvr7whsR7QT1YW4GoUhatK79U2do3GQdbP4SqPk7LdShdP5j8JUqTJRx5ZmiZBjhPtsmJmxrz4BENfxsU4Qyj6",
  "key29": "QvCsHBEpqUGrPfnMVMZSDSYBdAPRrNcgZbsiRRuDa2NhM7DEUa1nCdKXnPBc9PQDAFn8x34pVbLFbioNWa1f5Zp",
  "key30": "2CbLAgPsGaGxvLfPd6BViWxB7f4RAiJByQuH5H4XRxv8mMXJix9jJ5YFpiECTNwSngD82vXh5rZHyuBaS8B2opa1",
  "key31": "2tTMhmCjPeYokSRwU9VHDMynGM3pdqhb8V4ZKG7o9cPtyzuoqm8eoF1fV5g26yitxx7GrMo5nuKv7jrFYrVZAphQ",
  "key32": "53EtsSLcAKmFws25A3MA5skyq5nBHXpbxA7AizZhR8fr5FJwJBnZVwnG4SJfUtAF9jXmyuxGMZjFVk1RnZHR99aD",
  "key33": "pxgHMAA8TF1hJME86fHwobsLRYgxqnRRg14NEZ2RBahhPQ2VqgYTpvzdfxYaJ5kLt6pwapJ8sS8NyCgYQmweqAP",
  "key34": "4eZTnXtf9kCrGHtVJmo4JxKDRZcytrVPoHfdWJrV6zApK9tF8FGRmbk7XiaZCrcnCAR2gqBY6waADNZA36qFAVwy",
  "key35": "3tGu9QsEvsKCmRFVaxLDPd28Fcw7VxAZvC4WjNqK98s65o7GPR6NfJGTJoV4Tkivouwdt16CK2aMPxNE3APWUdYu",
  "key36": "2sH8CD52tvu4Qm68vSCuUSpBEF8uv8n7YXdvAgHLg1mHGr2iRSkh5EL7YVbidfNuE5pke2TvFjycVF2JjgNExHFM",
  "key37": "4QmFikg83DGtgE3DbGofWU9cAecT1BkiYGAesuc2uYdiQd2unP21Y2MsZG1JzbrAb66hYAcMZicaYf8bh6W1Qotd"
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
