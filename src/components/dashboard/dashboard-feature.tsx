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
    "3RHYGLnQ2HMDFZHpL7fJkTRZs9C1TztHLx1rVLviM3NyCkxD1LGmGCrvtHB7CjiC4XMvQEBHp4Gr88FSpreWfBsH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31UFQKcgvmciUtxnGfh8r2w3JMwbufPhtQ75pPLSarnfTEFDQFDUWsfs1czvea8ZhDGCjFjHFcmbmQKdgc9A5Z4k",
  "key1": "5ySkxGVqZ5NoReeYGZ8E6n5hZPUsWubTr6dEEnH8isF2pbErsDdEgz3S6mKcDvWtEforVqtX4C8Kbu7dHa5irnfo",
  "key2": "2Tfcfs71TkHz3NmK23HBEs5WQhxQFLve5szeAApATRgNUjcqhYxVsHLjV3ucxGmMyZqhdsLeXkz1ANgVFqc8WN1u",
  "key3": "5NfPp3rxeGixAV6vZ9F9suCtEXzCHTkieDYjc7jPMhfZHfP9ov7duU5nmzAnxpVc8rnoR6WMgLHbLj7n4Fvx1ALE",
  "key4": "48E8miK7gKPpx3iyFWKkdjZaoGshDg9zJYFo2HChgJsDTAx3HKNdZZJT8U6CUe2TZDifoRjZBfvpH8pwi8htmGS",
  "key5": "3nZeD1eY96xAzmjGyGoTXsrLwoStNFaeeRqrxuV1FrYEAzYu4XEJZkEVBAw1sdTshJDKqfMVYQehpBQ6k9cSMZ55",
  "key6": "4c4cUxFkxfDBqxRKTadv2XmRwQk9pwLxYZ3q6e53GefmknTZkYgavQdfhGcSKgN6zVurZt783MNuhPcPVs7cEpjd",
  "key7": "4iT8GqRnuQX6jBAkLUHTnu1n9BuRvXCiJ3GNB7RoqikLDXriCQohsVTA8msX5sPztKs5w9zcBjmb1FUZ3Vt2mwtk",
  "key8": "5pfNLPNoXf95vwBU5x2PqCBmGVXpDisckwPHjYccXHtS8picGn2sqmY2ZAFxctUzpQ7kBJcoeumYNaRLUriKhZ1z",
  "key9": "2Pf8p9zSgditHJaC5K4ERWeb9W4uKixwvVAvJ8e3JErPAWvdW9d2fYzPY3WJmb87HsvXoHdpjY4wVxC2zHYwfJRz",
  "key10": "kqfzgjYchXAdXvMBv5Exp8bofTVW8huTE1Bri6W9HmpR9Jd4pLHARPTaxGGgbGZyjxbzosuy7W83i65NK9qqMaf",
  "key11": "o9mcEQ6fcNHjLRn1Afex5eeaUu3rNRsDSh1A5n5bdmSP3q5tGsDmDTqEDHY1CjvxhJR9rmkzDrV7ZALzpq3zi3P",
  "key12": "3MAaJtAzK3MPgFiTrvPMbRf8gxbp9iKWiBspUtadK6hBNyHZK5R7GNtpUAcBw5CyxEUxUKti5FDT6Vja7Njqkuz3",
  "key13": "Hjcb1D7Bctzzpv91uT1dqEYmK1iKN2s1zqE6Y2GM6SV3AbhtsAvQgTgQQjFEx7fQgAE6e2TzQADjjNzvy6yLrRo",
  "key14": "41434CgZEAPzP1DivJptPwxy15tsbVYhrLEcYZPzahujcbXpfWqdeGmTzs7ht62vdyQuxkpgVWzmrRvXXdCdTJzB",
  "key15": "3aiSHtJRS5w9DuGpL3RXZkHWBHZ7gtoqBkmecXnRpvxo6gKFjPfmLXZEWPWxD2mmCkWeDS2QGAoAVEPPZmx92evR",
  "key16": "2tdGCQ6iSsn3RS98jqcZ6hGvpSHuvf34DJ99Z8CWJ5geMNsQJMVZNGQLF54Ns5a9oUtVtfXi5HKGRaCw7c4op56T",
  "key17": "3cHvmUUZCinTuPD9yreS1LeDF3i5iHWzUEvsDMho3wYeMCDrdKiEu2qxQbxgCHTku4aU7y5LtaKtEpD5EGc71fdG",
  "key18": "25MZEkDbV9s2W8kHD1oHGUKy8GNdSDpbhbusTdQdvhqBHykdCiUBUgS6bc8KupvnB43S3RbCkDcUAoLN7jqp5Leg",
  "key19": "2w8Bp5PabxgbMBy8qpkByqyWYpA5BazFvzZjSeunYuEoDSZW1veEvDiL15EgeS54JGXnA1g7w6L2yjcAGC17GaRA",
  "key20": "u9kHJqYuYnDpWdtQW6NRKGpEoDZjK6TD9qrXv5KSeexLk3DtNXE1jyYqj2uM4f7qnK4XmQ7sp5z4LmxcHYWKduU",
  "key21": "5kHMh5oNzymrskJ3BESVoXPFzR6qAcerwN9Gtqgu6c5PCQa5k4BabKubTaSwiFdBTafM6YmiwTLdb1BYq8VUxJ3Q",
  "key22": "5vqxBYVJP1vdRd4bNqEB2zxAeVdKjhcQ15b4qzrfHYBBzs1tGPEum1bf8MnjrQVm8BkGXr14PLRGDEUXKPrZwKK1",
  "key23": "2GV7Yx4kvLaQKiayJKzWHb37zzifZNDZg9YqgAuaekxzE6Ss8QqkS36Us7dk9UoG8oaaCMcVB42wWzFocejpHSwj",
  "key24": "2dshx2M6LQVKkmXho3Gy9E89JdnbwB2UJ9JjK5tiEdjbRUHSZF58vMxy83skNsLvRP4mYkuWAL9McETLDvDaA3kT",
  "key25": "3pcExhG7TH322CUbD6HpiRZfrudC96pbLsr1BLMbGdAwYHU7G6Pi6BxUgnx7RNEMNePZD6VsofpDKG6KTAgFcrWJ",
  "key26": "sAiVN7u6whvacjty3YBsPTXdN7pPGdztMTv4JYPzENVHheKtUwVS4mQzppdXLVvfJwYwCAeTVqNMG1QSDF7oeoD",
  "key27": "3xehmNnMJYhyQPobKMewSub3s5j3z55YjuwAtjJm8VJnHmC6od8Hr1v7q8nosQ2jQQp1fSZgLcM5ov1ASRjsievu",
  "key28": "4apV9RWHnmqhNUsJDfXvFaeyycn5mCBR9pDfDbhRuTb35eaEAK2xaT59647ZE1vLRim43NsQU4QZc41XP4Hu1xGM",
  "key29": "5GDZ7m2eUnNkxcNZ3KX37Jef2G9r8wR4z8qAxDPXaiUVDATJpi5Svdx2iDZ9K4R6U5kBnoow4qCfQUSWkzm84WKZ",
  "key30": "u8HxRZ9YAwUQ2Ndrgdc29ToNXztB2Vfve4tareExdEDwvdetxMjDtfFUZK9PSrYum98SzkEZX5r5trYBr4wwuyq",
  "key31": "2aqPXUCcRb3E3GWuHdzZz9L2DPKtu7iH3Hc7iVNzryi9bnakuV13fF2w5C7tZZ5EjBEZwmgDC8qJSkCUqASGfH9Y",
  "key32": "5P4YKHbdZk39HoZrnkQbSFpq7nk1qNnDavf7GNQS3bKk1EowpftFi2H39MDq9uRMqAqxNFGCB89oTqBahLfHPDko",
  "key33": "5WHLpjdffWBoe8SNpVisnCwjP45he7Wo7Q2nhKsoFBxyfqQgmGoWg1xVtvnNZosKnAxPp16MmEb4wgKKBXocgazz",
  "key34": "4Yqm92cqm4Uj3MhaZ9qoYLBvbExu5Np5BZteLBdzBrjXQTCrhng5v2X4QY3dEMNzJXBLNDUV3zpDCNksCrMSQFjF",
  "key35": "4bgTY3rr8BfRNtvB6Jk9HcPTXmT2xpiEcvRmA2ryUDqUiBv9CciwXfcxpPQDHQT8SSBPC26uCHNXj2NRHTPECex2",
  "key36": "3v6s2f9ovUZxcRomYhHLQTVrvkrM8rZCLHRUFiPysqbHXLj4W1nPnv8FnvkBjgdP2LCg2Crh11qnPwg3KMSYTeab",
  "key37": "2Pv4tk67m1Mc7fL1Jj5DocBjiGH6v7eFhgTZZcVudcvYWUXENvzGcD7Si2HpWFngorXNbA6Sq4MdadCd3Qn1RF1T",
  "key38": "3HvBWntcPiH1Ys7TmCQev71aVePU7KUaCHu6TaBV7LB8wU1HLuiFfdaThLE2rxjwyQ848Sx6duu76BCoC2DGY9CF",
  "key39": "3Rtafj5A2fP6zdAKEBsm9zBbhnY3Z7TxAtT1ThYQBoyeeuaDcuW6bms8Shmb1bJSuEnTDCzmAfULYaDULkeLVfz5",
  "key40": "2LgneNB7xnQoRMcpHnpbwHfXe4jo7Y2fwKPxHiTtxC5Pbtv7PPzgc5R7oZyuH97CC8d88tGwtu6eCzWx76vVyPFf",
  "key41": "CcT58VvPSWP6yNtj4AccksaxG7iByZQtfz7onmDNgSwrNrgDXwzHmsMtsVEctKrwGMhpnUmMNNqWfVqBwhvxM9S",
  "key42": "2jZA1931atuijfbLXEarAL8EgDGDNVan1YyDhmbAwZgbNnN86BboAq73eHg2rNo2esiN1Dh2Mdkpk4yCqRTRAaN8",
  "key43": "5EhvUKsx4ArwKrXPpfPxJLxnezwkriH2tvu1yA17GkxLVQveU2e4mzM6BNfyD4dD2dXFJMq8ab8BJd69855GrgRH",
  "key44": "3NDG5jz5AzgXmcGobuw3gkSAcbLxQR3aYhtC3zBYPRK3abRUG7RnD3MqZbDU8MGf81RryW1N1fE3fDAFEE5McsnU",
  "key45": "56TztESasiqspcGyXAMjeAThCuT9UAsVJGFojUpKtva68SFgUGn5q715gsHuBmHLEbdnZdEvJZ245L2SxDqHwiTM",
  "key46": "51YmuXTxz2g93pyp37HzbrspTuCZVFQsybb8d2fQgQTZJuJ1BJpMPNSQ9voHwie4eFBwBcLmzZftxECXJXb76Hn6",
  "key47": "4dTLAYDKpj2UdeeHAtLewB5VpTRBcbZRTe5N3iiMMopu7atiWqyMdNumtrvtJz5kVC12oVBZA1S8V8mDWRWBVAPC"
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
