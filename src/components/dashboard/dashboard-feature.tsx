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
    "vJ4w3A6egtcUG6yBnQKE8As9a4Pf1cPm3sPU9qsWnjsgkX4KhNDa1YPJhK9UgUg8p2T5RU5Ht8Dz8kpngw7jcmc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24tSAK2FNQCyjKbypPERjBR2P7LnHXa1nSfTc38J924UZJPFTNuv3RRZWoVYpDBSCiDQRFzs9UDD3VkGGP5SrZiL",
  "key1": "2Yu4mYEX2ELFfRzEkw6vVwRxAS7VfbweArQALBH6Udgvab1z7gVisMeErHHztQqF7qqtcujBTGE9ESo3sDnTzNDY",
  "key2": "5LzoY1nzE3MoyAEvJBr3PvYbzkdD5YRNzaTbA8rrzFqKnPLnMzVcXZWCR6FciBpB6U9VSLXc3ZtDjWScdJP11VW6",
  "key3": "3SruRutd62XYVRf8neWpmVjL9S3JRqPyAtgAbi9WoVYrBeMihugwc1RM5xHiUezyh1g3eciVCtGVdyGSpsthywF1",
  "key4": "5kz6zKR5NsK7QsFL8PgWLbQmzrqZSpGa47pU5xW7B2zETaLa4Qjxh9bLY6HR6Mu4EqLyuX1Z8TAXeMwJmyh3A25x",
  "key5": "4MYQyz68S4a8kgeLb7pvuRvUvajFebL8WjisBjo56RP1hFBw5utu9ejuTZusFKUaYVAyV9LhwzYA3roseibo68pK",
  "key6": "2HssGaa4QppfyGWxxqz2MvTmEiuDu8YPVSZmKwvS65hFmznZ4bcopTpbFzcfu71gg3P2u6WE7aBNLxTir6m3kbjX",
  "key7": "5bVkikxKs41VRrvJBzhi2b8njBaf2VpHkPAQTAuA1Rj2pmCUuGXzBjjP44nyWBgPPAvdNVdfAimwK8MsRuFpfTYs",
  "key8": "2f6i776KuBLuTr7h2oS9EMweqLAgA4aoogUkh85nWgXoE8i7NAgEkAGWCma4ASu1HgxPYqMnsyqwZR1dwBLE2G9s",
  "key9": "2y2n7cqaRsSr64z3DCLcpEyj76rTE58JCNX61kWvTSXEhJFdgcE5XqUyQsrapeHbT4FjX9RYz4ceP3iixPrRgrtm",
  "key10": "2YJVUJ4372qfhVL8WRpYKzjcWDvWGQNxMQnj2RxfkGY2GcN5yWzMxX6Pm4zKuEXwfqBS7Sfd4uTxP6fQ51k5UUAP",
  "key11": "4qVGJXi9yqRvttN9rxgbf3trBJdLCX96GCmHFrEHYzxo6ZDa6vQyonUez3ccMFXzvDS7rk33S5GF4Haz7UQqXguU",
  "key12": "5deeKEQDWFxiTcgaFM3oz7ehXtr5UX2Xnb6DUr3NyVs8mq8eeanu1svUXADqpoTVbWiUPVTiNbo2bd4NsnwiyY1c",
  "key13": "dJXv3or5ixzeQgY1FrKLaK4LUhcbHt6QhVbJwNzSyNvJWAsmdupPMexLg14prc41cGZxcLAbC9au1mQ564cgq4Z",
  "key14": "634Y5oWzVczJ5BkfsStfjsWbbPBn4Mtkh46QbxMu5s6esCXKGYuCKaS8gGyPk3Z6f53RDH1ngq3298tajo6gGMah",
  "key15": "39prN1azAJE6BZVJH8jcZ33WZQTAamUy33wWzhSsbdNPWNmwWsBTtrxi39VmagzpxxtBJFQ3c9NpxN9eqBWYZ7e7",
  "key16": "2kwzqpS9mR9SnqykGwuTGRQgS7Hm9ekMd8vZ6pYtXUJq4bX78JeXkSWbFidx4DBRPup13KEXbLTDCMGcbHs5TpJ4",
  "key17": "2yZ3EeCp8ikkVnucrUUDweSe98KhicYdz5ussjj2Aasy3WrQnobhTaRsTwM8yDTEWh2bJ5h38LruoVWJTW4gMMGF",
  "key18": "4J9K4i2iPPCiEg1iWLxGET6uf1pCrynKmsXHLJvbRvrttcqZQM35bomPGv75kuzUcjMi1QEinRH76UeMN2GMzYHS",
  "key19": "jWXhTYB37m27He8Ch11h9zF47oYwL254pdVacqAyAcpmsL9xpZJGdS15fnJooQ5K69bdn8u8QNcu8vjhPaMeqFE",
  "key20": "3Yu7YhNNEZrxCqPJVjcGE6FYidn4WV7h6QNXwyq8DokJNaW8Gjy8Xy2MoN2bN6KGXyqWvW1AB3D4bzKNVwCvL7J3",
  "key21": "3Fxb8TVskjJucLrR3Hhq6c4Vv2BvTE973qaGNgNXp4NUKZReKfBZ3LnrktATpdqGQEsHVFsDGwHSZ3Tr1DrGDikN",
  "key22": "2uqHrEwmN5EkMEeg2UC1Z3iLRLoVhcyVPdB4fS9gW4EQ6TWLENhZr9VfH2YLrEW3RW4jpYXdyuc9PboJoDpspARn",
  "key23": "4TLAYr1V9bCF9T5nJTZmXFRYtmfEARkubQd6H31D2qkQnF44qkBHik8wCjbQqVREcF4ed2PmcEtTHea12LGqvBaE",
  "key24": "4yasngqkZqzThyho1EWfMG7m1Nau9LqvusSjh5YG4myuoTpN8eyE85sN2iPeojTN1krMmJRBs2QmcsBVbh5fHq6u",
  "key25": "5AS434kq8jwdRZJsiTwEV9896EKyppKnS4VUrzAhFLuFAZgi8d66uxZgALo5GajSbLRvKWfLGDsbhb7pigWxaddG",
  "key26": "5S5XQ822sgZyqpEkRU6aX61wTR7w7Y9hoyU6G3xqGgRHh7PPS64Vt3JovU5YhWajvXmYp5Y41ymoa53NVqDaS9s",
  "key27": "43dgJ1qNYmb76c5zwMFip4BiXfN8g1w6Q4PSXj6n65mxSJoPe6zwWRq3RJrdCq4iCkWPirFxHCvv1GeqmfHXCFx8",
  "key28": "53uEr2tf4WaRqV7vkYb9zgobUxips86eQWBJdgbLncXDfyXfReeF1GYCfcwGUUjHoahY8edUFn6Yo744duPwVWTm",
  "key29": "5DracKAvE7F7jo8o78tL4kVCWpWreFJcm4JMpFprGquZ6Km3hr5ViScmxhSQVYXPaW6hXFsHEKXWkPyfx8ybPwTM",
  "key30": "2RM1hdYmxXgZubtRZEjzGkoncPUu9vqQNKP5Xg4kEi3cyna1gjpvpY2r6FR1WiyyMMEKxHcj1VPDLsowEMoD6CGn",
  "key31": "2GBm5Z1RD6itaXUVGRRBwCuh6h9poz2qk2ZYyX33aVfz9tomBo8gqx839XdroKNSwKZVSsxjKM562XW3jDTz8JK2",
  "key32": "3xi5orV67dSRwMXn1mKZW87eLua1D1dHGHmYPzjYv1SqM8BHrBTgqyRxbKLkueUFxQripMBv5ZdGpS7KfAFk6bfM",
  "key33": "ysMZCcRXaCvWpvDtY2vNeMFFvPZiQVPT4z6Ufq2kfUByqZnTbX3iBNNd7RzT3EFgWYPv1R73siWk9CcYV66p4zd",
  "key34": "ZvhNAYAXUcueyTw62wr4s4TxiSq4zArLSrhyVqVnz65PTnFsHHTeLgVQyT9WNRZRkZvsQmkU8F7KER9r7vMYG8E",
  "key35": "5EvXhU7jfv1RMZQnr6WBeVqAVPGbAjWNQW3cZDvcVUvCNPvXdzBrMaq2P84qLqPyVDtr191XeMVRxRAELAmc976x",
  "key36": "3Qf2BYBmudenwLVZu6W1DicWwFduokX2eGnq7vZknuJN6JbTKe7m2rWr59dsyua7GAvHUi5LefZu7sWGAjXcRbuv"
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
