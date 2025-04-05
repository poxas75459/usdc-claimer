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
    "2UG6V4YkVwhoNGX4VTu7YL8m6t9xrY8CHYVL8yB2GfJyD7beNxCQfaiMahs4nsJZm6x73DJrfxV1fpRk7SJBhJQ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SbMQsbXV55FtDKAmu5YwEWSXjGxhaMUrfdgeUYvXfUgrMhrQRwcnPqbM8uXBBNSwAqDMd7uS6faoxGYbGvJZ4uk",
  "key1": "3PxHPyh2NQP2L9MYvribgDQsFiJbU4Y1V1dm9Bnd9VPyej2gTuKpmXSmjd7gWzfU1bDMG3QWqNkFa2RTwHeNRrwK",
  "key2": "2N1dg71K795nhkZ99jidwpXrXvkiXTUyz5BTujguVpeiY2NogZpT8USuntjWi9E3ifjr2oLx62cuaCLmXVn6dbwR",
  "key3": "3ikK8sWmbLyxW6Z1bJsoocKDrgqfLQugw4PD69PgdfrCammbeeLtTZ9GCEhnXBytVxUXGT8ybrApxrp216qpBPNb",
  "key4": "3wRC6YeQssTfSqXV2pMPeMaWdN8AgT6heNFYb7nqqJvNBk4anJh2mLrd6ctASBLVYHeMfMKxgfdp8oNnb27jG8S",
  "key5": "2caEaRDU8kBQ4vWFMoXdm3rLTYWcMxMvAnpHs22rDS5Sqb1356PsnSZ1WDB2okVoikRmYJXU9KAzhP8Z5w9wwzCs",
  "key6": "4fRo7eiei5SBoVsmhwnRCSr6shHacuTtG7Vq3CpQY8P6t8xcxDf4TrZ7ZU5xCiqJBkhSjEQzYE2See67vfbEv5cL",
  "key7": "2qCAqgB8c4g8Q4hGRUFSVCwETMqxpLwFbycx9JFjfEb3dVYrCRez49QhtGAS8BrDisJ3fFyoXKVPXiLZteAGrEqM",
  "key8": "2CqMiWpEd1PTE4QMJVASend19d9oyEfF5iTHbXYEsrmwig3AoFBt47JjBr52XPcdSt68NGJqSpmC8MBdbpTp1RJJ",
  "key9": "5gKW5LtoNBatGDSnuHJjsRLR5iSHp4VU7ordFXjjxkJUj3uVfrq5boNYmLKayF4p8FPiVdj9MFYP67u4fkkD1JFt",
  "key10": "5MxRSR84FmF3dqTsZR87CozY4abNfkK1JjBGgZ1i9Q4cwgvdWmWbsJyPekMjZG18Hm7ybVyQzHppF93CEW7Yx6GD",
  "key11": "539zNP3xsrQQFABUrSjHBXHj2ayStsPwq3YMg2GJYduYyabd39xEx4qLYxSvMb3TXdy1jB1zj7UxtxXEVj9bvfN7",
  "key12": "KzkZMcJqtb8Ct7cg4rcUSkVXNNvCFQSE8NSs4AzX7xNy3UdS4dduyBbJd3f9mL7XL7i25f3dcyKMCfTSzcEqpCC",
  "key13": "4ugcdFifhigHaALLKGiARo2aWkLYa2nEDDJ7agEDLrvMpdCkfJh3MqUupaamiZ8emnKCsfTaXFnaJ6MPzdzk5zTm",
  "key14": "4o22VqsM3E839scbHHZ2tMGeuAn9Gr54u11icWu67py8uWEvPZ78WiiWYhRVSGi9PMSRMPRWrnoD7XnrA5YkYUs4",
  "key15": "5UnWhHtXENYqnbyG4XcERpt5nsM68WNNwJaznUeinKMMAQ9zBGSngVsjCEqEq8yCvrGgjLMH4sjD86H4KqjVkY15",
  "key16": "3n72acepuwxxA2qwDTQJQdsqm7ykYq28skEorpdF2pKgdKD6UduoHGEcBfTxLfBu4bTHwn2iwS2b8mjDTbzz12Ui",
  "key17": "5HV8zuhD3XxgVjXiVnjAJtoGSmHPqKfkbTfSEfdWQWKz4w225aztwKgEfNJvgUcHY4Qp1JCru3QtYmNDmhNah9e4",
  "key18": "2ZxKiaPM2imdFB6QRyVYxSvKG5Duymar8H4Kx1aDRuaQBtrfXHS4MuQAJbFEALyrvEEpa9jRVovqR13uMqhqjfWt",
  "key19": "HRAkpSzxaxAahm1uP98ctXf2R9N33bvdawepUUBytTbGAMUMrkJNn26NYywzByXFD7SjMwBF1BTsrwhdfJTKtx6",
  "key20": "XDwm3EjQkdXzkTFQJvVhZMG9wJt2hc1J14DUPnE7xgzArdKXtbnM3AKTrebE7Txd3symoVknqbRRuLytPfGQXsE",
  "key21": "3t7BMwkcfm5uotwYmwTFDEBYqSWpsDpAYcM4MdruqLLuF1Ec7cRF6LENxdTWccg77GN6o1reshQ6R2vK3jyNGTh5",
  "key22": "2ZD2aS6xvEpr7EAEh2JhwRqxoWcfb8a2hbu1GG9pjEGXBr8mv8oxhFBARAeUsorXkSAaZnD4C5JnXY6D8fGRrPdB",
  "key23": "2dHvm2sXjuYfJ6NsDmzouBZjB7SzWmgk2PGgzSuqgBwkSed6wxY1HgtiUbrJ83cRiofZT5CgsLtNvD6xFFnsUz6p",
  "key24": "4x36YCo12VH3YgTEdwddgB4spvjbW5WxMF5Qc6sEBUbGTaP9BAh2ikw1MWyUv5dK4X7jCcBDU1DjAAKFqMZkkNY6",
  "key25": "mqUN86LJdygteMyAwepM1Q2jGZ6nzgYpoChjRa22xdwN5PkhTb53S1BFeFuiKCrBsHFRHCAo8d7CEDaMpdPHUAL",
  "key26": "yvXoQLZJvSTgE6raUvAhVFg2tnjACHTnP9WEpiMPouYoH2zd9Lue4iShhay3e8HkotFJPidfW92arz7Jwoxrowf",
  "key27": "2DWuzBrdYJaMgjb9kVvaPAYMMBGnN5bw7FXc7PYqWiBjAjb4SDsgQRnhKi7ATX8mwX7r3ZgZbzYriwCd3Hu8eLHL",
  "key28": "4g2Q3YyNBP2qSwGdbxKgRJDvtz5Y7a6jyxjvUJDW7gnEdTNppFmEn7ZmXoNrLEToyeY4oewFXCEyF8N2cPUhDwZg",
  "key29": "2TUWqyrecgjRxH21r6ZFsVMtCbJf1tsJGZ86Q8kXoaqebwsJbmEeG9hFKhGx6oidJ2zJLTG4EvutcaoGRNtP7fh1",
  "key30": "2UQ8zU68p2mRFkCL2Nc9VhMSevFMuDKovof6jw2yBw4szySaJuKddnQLsNtJajkVHtoNoYKCEYayvU4qMETSnz2L",
  "key31": "M8jqh2iG2896s2in4kdgsVTJwGims3P88EWbBoZkVEq4DUzGdafGf6jFewTJZDNC5Bo3YiebQV1gvBvzdP24Tgy"
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
