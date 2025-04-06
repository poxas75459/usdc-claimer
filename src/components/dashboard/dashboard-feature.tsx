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
    "5gMRRxw3tgwAz46onKKmJh3t9i95GsirqWMwMhtWSDqtFA3hz5q9MbiERUKQqp5PudFeNZkL4oQjpBZfGosiFxVB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jYGEU57sWQWjR49RKpFgWd1Zia6eaQ1DJzX1g5RjEnRg3PMSeXgiqKHsJoGipDrQZmXfwiUrNqPQs2MjXvGsBYG",
  "key1": "4xbC9nnNxjvRw7H6ipuAr9Ht1NxsPUxUEDumj1ZJdmFMUsUuTsxcudQWxgT2qpEnKrLQ5kS2dji178Aso9jWwUGJ",
  "key2": "5diBJMHTQxEioV4zxLme6qpeQTudhfvSVTM3PpWBfK41ve4L5saS1LLXXiZT4uQGjShRQnUakVtnfi4ijqYGADoF",
  "key3": "3EJtMCyHyx5yBRPk5M7dGnTjpVdJ1M3SARPgpMvt7e24y9X5T9UKfRibnZyURJ91zLV9ZjQLbehVKnu1wbhqN1vY",
  "key4": "DLmJurHn2aH76Gwozq2nXUJhq7xsexrtb1NaHU5pQHdqTZB1GGxnVojPr6qLCdEMDanKx7e94GhZati8fa75Exp",
  "key5": "3C6YrUjy5sgywSjGdx8NJEfWo9jKzozF249Wp9NyQd68RKzLytV9pCH3FZtuVZFCS42KQQCqJ7sDij3eb5jRsEXw",
  "key6": "m73ghGAUTdWnSswqaGWh8mhN3H1PHX7abw6dkVs48bPhha61g7K3UMV44ZVotpdszXsrcykVcq3cnuvKdtDipYk",
  "key7": "5UGa1DXy79USTk2P9JHHViCnKa3ExHRkte9P6kwnV8Qzwo9mLdSKo1XfQeoTUFhg7d8WZT4BHqnvNeFBMJzg9soW",
  "key8": "3Lp2WyouckEu9y8VbgEiwFZXofcQ1r9ZrpQRUyZAiZWCsdUFpSUyGoUoj3H61JN8VLxRkZVvbbedPMKnLSPuKyUu",
  "key9": "5qm34QwRUiTKt5UsYAm8xAQtASMp8N9miSy3a2nbFGu78Z9pnzPV1AEoacBPWQCrdcH2LxowKgUvUYPhRLg69Z8y",
  "key10": "5V14RWhRPvUKGBEJj7zvfhUr8Mkotx4QQ3MnNRaYHPjQdVxe4oXUarMPmzaJfWZuCzouds8FjfPwur63vRahrpM1",
  "key11": "4DJSS4xDS9A2aELJWFhRhgXVPUv3Au2VDM3oXsVD7yfYCN3vLVBbuBcckMt7iKkw3d2D42BceAqACwsF7kvE8z5i",
  "key12": "4QbyN2uPbzfYMgP7RuKoAc1TZpLZPonmDVoccn6d5MTcob9ATNgfPp12QVPLAVRkvAUvJTzTM2fkNBGrZZnxfSQE",
  "key13": "5DYr96WWSvb4nRfdBgjMs9yZPbnky7YmhiPF14zLRzwjQ6oVAKEPSwwsXZbAfc3p7enJrYMLF1yZrvduHEaJDpfx",
  "key14": "5wbjN4bXE2UGehLEK3a2SUs432ah54UiUpmSQcdL1oD9PxUxpAAVgt6LENP7yweXyCuqD6Ksa8NbLfRJGjP1oHhv",
  "key15": "3nyyXcaWjyRVcBvmkhheUaM6mzqgvbz6DWHZv8a5ViNuR5uUNvkLfbscPVzyHKkTgQ1xa9bVtuPf9edfE1GH5RFo",
  "key16": "3NQ2VimA6jBSdPcMuNhuT1xXnTp3Yybk9yPfhmomYhCggfwZ95pRErsipRJ5oLdYEWuSA5tnAzDXXQh5R5rhC98G",
  "key17": "2dG5HWD26DqceafpqBkn6H5i1EW6jwJh5QPGH4cXEKvuHyfg3fz276t7VN5e2hxQLcaLGfqxyrFotXs5vkcDFLNQ",
  "key18": "2wMynC4z5RRqJbmzgE2tRf3nhciWtMGbwtHLSrhuDB2tpmUZrd25kD3HsakneUB5W57kT8T3kPvdE7yBEqmDHrVu",
  "key19": "4MkhyQrjHz4aWLYiC95nB97V9d49e7WW8Qb9VZHhFtQzeoDW8YqSmRW5GHktPoYmvPeizUkpoC2cpZSf2kKJwHun",
  "key20": "5JReUacWUB5PxNtGWHrMkkbx58v3RteRXxRLNe56P16uHyL4sJEnXsBJ2te4traHdvDxAV8Bd43edv5eUYmwjDeh",
  "key21": "2jhSyQB3FV5ULA2HKDrHeG9xDjBTQX5JamnCSbk4pDBUCwHdDK4QHU3mJx4ggTiaJ19CwewBqjfaRy1358rZWsK8",
  "key22": "66mx8bUWvircCUKUS1aUw6E4Z534UhvLyiDnwuqNR2qX42KYbFkQUeVdUCa4WpyPhADb8ZYAhBEChHSkccu9QbQM",
  "key23": "3fTiYqWGNkr5gV8Mohz2bWrXmoTx2GbCSaitecV4J3k8RjCYz2CzjSqen5ZRueuuNovZdxxtaa2NjgUNK7ZFN3Jp",
  "key24": "2pKqQeHmS4BXMaL5y8oNx26HeEndLdzZvsdAx8QwTv2CRNVtBR5jU1EkKEChyFgU3PX6pcfKhyKoHcRr1ZFcCeuo",
  "key25": "3eSj19QQMWSwiVcKhbdwFPDykU4qdSFrieDyhdd1W2aDG8JQTL2zuKyySKW6uFdz87Agf4j5Brsd3hDeVso3nSAn",
  "key26": "4f9tvVbmALdGYrjdvgLwGqzXYLZqKgx7Zu6Vscx4NGwQwBjX2cKtnCuoHy4MrbKbeZuTf9D49zBBWwb3BUVVqbD3",
  "key27": "3wbZ9WjJndN4P4zcs9JMpZvmcHZaU1oRQ4BEUbddpRg97rc7YPgPQFfeKZgcB8bp87ZeuGXH9Tq2Tu24v6kzxphU",
  "key28": "5EkoiV1xbMx64Gosbba3QQKhFEbQpUb5Q4vn8H6ZehHGktUNxeLo4EEbdU1JsWQjjp2bzc66XWqTfBL8YpkMqfQh",
  "key29": "26vTDwKWZWFrZ2NN87U3546JyyWXGPK55ykLPALok8Fqx54XdftXjx4cegDZUqs63oYi7FWakjHoTA88Jmvhqypg",
  "key30": "48jbBZcsiVhw6hGzsjdzvtMgX1gQfPUA7xhvVJ9BRFQDyzTrbKBY3JCEqAFUJDCSJTAeoNGXoKMMPvH5hCT31mwV",
  "key31": "335kaDfJof79QbLhdV1xDQnorUX2we5eTEYy4rofXhBH4XFgURaHbnrPan5XB2jHYwx8GdadHGQ1417NEsrz2QXc"
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
