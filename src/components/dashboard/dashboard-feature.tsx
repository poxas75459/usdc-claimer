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
    "3PGx9KqZwMGZFZRqTqp5eWYkSTPQBWe1gck3FWFcHELMNbd2bY2zvfnPURTydg6qh5dUvqi2s6MJMW5T51NgPDuA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ny7up9TLdazJnsRLb3bSQF28zWUubiFGdxTY2Bm6YpE93s7LnEezREpQoQX19mYa3sKQitFTbf9qVGbzy3pxo8n",
  "key1": "2My5gZcLiga73TntPEYni4EPFNiCaMdCz3epzuQrRSowMbyqt1RtDAoTKcQvG1jJTPi7kg81FBDWRmFe7ViEKWz6",
  "key2": "3K97EpjjHPXiLwERP5n5bxSf45Ww8utEaaYRdQVVs9K3oef7LvmJi3YhP8V6aSn6Tw42smz42cvB6M7iqPzkVohh",
  "key3": "4yDbAdVuzLfrjgxrMmn2xeEgrWd8AA5gTBevt5DLpo2Ut3b2gAAzn2nz6kBj3wcDQaUsZrp3tffU4tsjgyWyG35U",
  "key4": "4CweKM1VWhgogeBsL8DCy6rxT4QDPzuQrHa9qCz6NjB5sLertdYjBXHsNM9VNf2C5y39VoxM4U6zxUVteJfe5Hkz",
  "key5": "5cMsU9EjN45fhBZW8ASJLcsxW2TBZLJ7dPHzp55UPCwkFGvuXvBYbuo7MKz7yC6rDEysovfrersa6B4Pt5bcJVBS",
  "key6": "xbAHiL2KcHX8ru5VndJsm8J7FKAfayfqoANtnrYxwzNy1tzqsbdAbHgfA7DNyix7qJsmkc4ywef5g2CM6rBhZPZ",
  "key7": "HLPyYnBpnS9HRPu8WpXWBSj1Ht15X7uB7F1kPQW1fBtFh4BpaT4BUGieyZWNuFHjtCsUoaedabDq7a1rD8rkZ2s",
  "key8": "4vNvmGS8UHZiTn15C5orawK4KPEn7rtupjhYnMA5K7WS3yvq4WuVsdcfnWo8ieWWiybYGYcUvvWCH7KRoTAe21qH",
  "key9": "4FK7CGEtD5Nrwh4789inw8XoaqJuGJNgrdrXyDN9A97U2DaxacqDBVz72ipWVj7ZZ9E3KrhFkBRh6MVNW3HVX4Tb",
  "key10": "2o3xYisH1xXfB2CvK7j3w8uuWCKAX9aYYmzFPdqZXWJJthJXjLex6j449qgcVKQHbXGmnfvBXZYtYkq1qgrfxrCS",
  "key11": "5uHB7jpBigEzem3j4QWLMtT876xLuXPnrMf56soespPzWryuG9w4hHXf41WHihuw8hStFAe8bNWQHzaBDfLz75sf",
  "key12": "5W3PRsVCKwmNotmmFAgUcuyeyfF92Ny4y1hUEKpqiNWrWrXYrip1vASFLAmvrEpcXEHxYhpyfzLtYhPb99UQZ5qy",
  "key13": "5Ndh7Qhz2S3p3TVHZg3v7Si73DXPpoRMU6rd1ff8gxkcPV93ZktHZMSq2qYgXkt1uTUdtsD79HpPoX436NFASeNv",
  "key14": "VzYE52xkHWwMLREZ3pzmopfYjgqVXwy8d4FXXuh6y2oZH1LGLX2dbgBSgrwr9KJX12ks7cUjJjx1neETTTRnD8y",
  "key15": "66AnDVDB3JoBzY1wAcNfDjnZ5tcgnviDecjkYHuC4p5xw51vpq7qCQfzmFTCWZJsBKZgBHboJNHArfe8ui6GvJoA",
  "key16": "5raPHjgsezWpGKJHXSLQEC2TQsUfTTRybGNqh6fn9xWAqxpjwt8bLd7jzT2bMyfBrvdd5pwG3NgNFPePzecxkgSH",
  "key17": "3JbHdTcnAz1SKcSw5p3zqFagzANKVFFHo42D7BWPwNx9dL4v1MdkKHZoEDo1ehRuiwoYSR6cy82czwvjteiJkHG3",
  "key18": "578xggV8fTaarGcS2PG4HwYX6kU37xfvCVbspetiSfYNcoRQxeE1RegEwVotsqSqPA89M31x1qqqVdDG7Vi5eWwC",
  "key19": "3V2kjuLXCSwbMPvNPnvzq3DmtWSbMfkzWBdG1At8LntRL6BioJpPai3b4Ki9E7nBcNPg9xRNd9Jay9Y17pE4mHKP",
  "key20": "2twdmEgBuevgchpJr6KTRGobZoUr9kYyyHV5518tceed2hfUaqmGCEGLWMyBLGM48EeoYUPYzmJefeRqUDgeRwaw",
  "key21": "3bkePyUZ4bi56EwG4ax8d28SpYz5KxBLdW5WrfcjYZW3nf6wfQTHWp6eBKgftoNMSncUKhPh8NhhnF8cUbF31KvW",
  "key22": "33RjKUdLwuqoN38vcTftwXivdZWRHVyrBrnxoVefZTi3aXeQRNYJkhsubun4aucUKJBaTtivqXEmqSr3ZvccE23R",
  "key23": "5oyqhpBP5Bq7H2Uxg67j9Hw97YMpCWqXxVPPoLkZLMtQHALZ131BJprqp9fhdUCGzBQc18GHitpNP5wnEXbQkSj8",
  "key24": "2FsVfC6si71AcFSeM68hGEnmeZPEAyg63RYACcPbAteJ64NC7YpZ5KWZL6oJmHps5ADubEe258yYjoQyK2YLpdgV",
  "key25": "5bS57GUogkXWfaeGQtMgtxmdBifbL4MwJ63b57cDTUH9iWNzWjEaKV1D988zfUp9V7jfbjwiArkFRD3RPaifZGve",
  "key26": "3ZFKK4x3aJW9GKKcpkCvfc1ifyZSUsRxpaKBJbYznarstv6pvDgTiQPejGtxWWRzuk6H3sgLVo2vHfQExeByu9n7",
  "key27": "4jL61odY5uEfA6mvoJF5ogNHoDpv2YRkqJcZcf1DnrFLLiPnrYBM7PDBH2LxRmyicdDhrBTEPitakfC3wtXywRvF",
  "key28": "3NWsosdfBAEs8YHk6T8GryWni6jcDCmH7VwCvTUAFo4i68PD4HyBMuzqw8EAfd14gcHabGoapyCmmq8n4S91aSjT",
  "key29": "4eKp5dh4D2FHTnhDBzTLia2C3LuCqjPf8MhiTN9cjJpbbUirui1KEx43gEzJteWP8gGvSmb2qH77N6aXD6N1n6dx",
  "key30": "51Kj99wQxXN7ugsj2sFTvbXjhfPnrr4qKygpdHxxWsRC4Mi3T9mW7PQNv9nY65YR2MroMHAybTmLVLGfdi42RXH4",
  "key31": "2fybY8sZEGSpCjuBF6kVCofe9kNjCqJ8ioYbe4onhou6FPtiELQj2G75AtJAk6jRZABAHiM92PwcMo354wHrU8mG",
  "key32": "52m1SLBp3FKgSWr1Axi68Br5Kah3Tngxc8FgGev1UMHo1yiDPdmktQbneYmv2hXCjRMqPU1uTGqLRdkeJbgYJBeS",
  "key33": "4mewHEa1uayZj2hbLM1HhaxhGd9uTLCCMHNym2ji2qa3hU68H4qVRtRraFAPZuTrp3wZuJhZPDU8emUU2byxC7cF",
  "key34": "3oyWbfa1Vb11wNZSrZu4uCqJfLKgZmtG2YcMxkyUHTTeC6nK5pbo4bKgraVXX68TSU4nDHkbBmus9X6iCDZ2yQAY",
  "key35": "6458mmruSxiqtQrPQqJNRNz85qJbDohpCPNPETzf6W5EoEwp6zf6VSMaD418WNwDWWwYajNxKEkJw2EwVgQLp8dG",
  "key36": "2co7gY4djvYE8TPx2SzLyq9wDXXgN5xCcsDiDb2HU2x8iEBtjCnhF9maTNkCFTPfNw7qzoJiQFMASFsXKasjWqC3",
  "key37": "3nMxefK3BtxB32vg9oTLinWCMN1FNakcUnJvTpk2BMGyPMn9ymaJ41TWQvcRtQNCW9D2zeU4t9M1bkecw5iPrqos",
  "key38": "ZscusyqcUSNark5CvaqfJa5jfTxP7rQisWrDeEJEcak94WU3QPoEuzKeWhWjBmXS45JfJTHbvjh2r9AZRdGiGSv",
  "key39": "3V7Cp7FhYt3FpQrqjqf9TqBgitqTVyfVwqE9sxKzYppwuqUwfdSLkb1A9dkHdX6muP8eqgUs5T6eoUrnbzPruQ92",
  "key40": "VfjFVr24Mm3bA1DXHnavDcuGzedjgvYN1jPj51wPWQYAXeJgPXzh9nJm61uE5PQQKMqKMqeiDdJPCWEvCVX5tq2",
  "key41": "5r2uaYM1EBgwqU4hJ8o5fa87gAtHP4BpvKeqHPTu84FzKWXQ2KphBaP6zxSFn7qrE1PWyCn8P69e5zByuXmuCC24",
  "key42": "64gV7MDXPS4GomZKPbP8y19wph9Hz2HruEnaPg4MpNNqzraXG31h5SHSch1w8DzjBMxnRaiUN8V1JdJ86XSqphhu",
  "key43": "2UrPG5JyiUKB9TbmBU9sX84zpaXkDVKykXMbpfGG4UP3i5aSGxw3TnRAdJRCrYWFANJrKDtdEmUxej1dsfAQfuJE"
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
