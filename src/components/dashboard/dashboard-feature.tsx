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
    "53CkZ5TQjv8bBFZKvZBBnoNpjENDWyo1EpMAikcsRbtzKLfXiUHjhZM5hKziny11TgJBi7ZDFTJHQC52umAjnecT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V4mpr1VFoPXwDNHTUoUUaGTcyBH7FWwPo1ryd3fHid2VmAX3RdnT7iRX3nQZJ8sp5Tor7w5UwFxcobTgqfM1fuq",
  "key1": "2SbCDVzeCcUuGeCw9UNz18sa4LageeLGY6cs2fvCpgwgqMuwwJmexWeUPtcg83XwbPD64yooKAxD1QQ5Ncb5tgth",
  "key2": "22NxHy7ScvQKUK8oFzLcssGZguufsK4AADrQLotCSh5Hhm8v3WK6N3MiUukAtX39zY9QTMakiWUUToMYdw8AmRNA",
  "key3": "5cr47u6gHx7WWouMU7uaDwfHUM6ypCCcz7db4QL4PafKVwkDtK1GYgeqAJTs6vNjNVsx8eN5YCmZi5wDVMZSeDro",
  "key4": "2XrsqhTnxAxtkEg58xZoXHM3XYe1FrGjB5U8FmtVosvUEvo7N33oqBaUGkax1F9f7tiRtjyM8KDdMtyhpXW2ZQ52",
  "key5": "43nrXFkmJw2uvJGScfnMPay1a8Y8pkx7UbEDLyGuLzX7VcQstWnpaBsaXPbxbPvmkHfzBgKRReqoTokgUjQ1KpXs",
  "key6": "XUTWuLpfjpqXwvppwtPxLmo9XGGura72RW1dxeiqjHVsCuecyZywonwNXcLDCDPeG7GWydkVkfZPrkKP4vReyne",
  "key7": "XX9gJZV7CpQYVMapDZgKXErfw6G2X6uHgeAcajWWhHCbEpNzmxs1UftFecKaKPZKhy4vURomSU2zZ21j6fEenD4",
  "key8": "5AjM5Dn7vcs3ceApKzVVgeckoP4Fn7v4hmt8mmKEE45jiWaAsdoELEGGEbBqnS1dvfYcLDgoWTBJvPceXU535eB1",
  "key9": "7ZsNzyohHVMhQgnKDVo6e7Yne9incfv4gw8495VqU6qvcL1zVUhEPrzhU4pPVh4F5gEK3En1v5ej17af3GXNYVi",
  "key10": "ETm8Ddefpq6adLM2DNGe93qGNWCfarBGeLwsMepTrSxg19pYeyzKGRRwdauM5ijqZ4Qs7bihQchTwc539SVp15U",
  "key11": "5hw5vuczNkpPXKsT6huARb1aAZfDhLSnad9fWNGqRbTvjJxKaPT3ZZFgRcg4VGLz3pneMvMJQLDHoFGPvNtVNmRi",
  "key12": "5qgLJsLRZTgG4ecKiCUtpWDsX3HwiPStphXvkysxhgT5SFVhk3uANXJDjiC6SXY9f6Dr6LBr8oKXokRFR4HyZnxJ",
  "key13": "5XQC392brtXt1RcGnoG9hKmAAVMBUH8pB8h7C4dhi4yScwL7U7xGjCAUwSf39TGPrMuovzHu3CsSZWsaQDK7UYwD",
  "key14": "5Ma3sicYJz963XzvFt3xR3KNRqy418rzAq4tyR4bhk9YvC3NjsTGGZ8MTW9AAhBy39ntz2imkE2cSQ3DVrwY7PEy",
  "key15": "5BE62u2R9p3JrKXJitFNqPCU7iHjQCNkkaEoMF5VPGgrcEooZAsRCTfRzbnB4fN6TQ7j14A9Hi75AU4h12zzMHtg",
  "key16": "juh1ERPvqFWnvmkTuji647nWusbcZZpCyEZTbEsZZazLsJiKbQBfHE4hxjFZ7YFtmNzaZrWZuvSsG33VypGosYf",
  "key17": "zMzVBs6hTmteoFLhnBZCXiKK9eCACCU6AMzKAoo1hvWt7uYwZ8PAi5Vgb2836krjWbt4K5m2eBEqTVrBuengtzh",
  "key18": "5haKM9R2WwXwHFdZ2tGA2AC1L81ozPSXVG9TWGKCfkx2y62oVZhsTMVJyPkRDTKchB1vQpVCB8g3JdAwALke5AV2",
  "key19": "5g975i3ugfugzHMFsPgrh38jxs2zCa5yaFLRRYAbvnfToaAZsv3mahLHTf6kXwDLkbALHy1mFXMyCQM6VymsSAA2",
  "key20": "4Nceauqf6sx4EFGmDDS7W9wSRffChWa3rXzMCvwhZzF4R9EhEVH3x3nk1Bcb7dxqT4VesC1PetTJy5KjsCQbg8gx",
  "key21": "4isaiCYxgHGm8UgCXkWZsPDueFP1R7jdQYa8hhfFxc7k8EmJgUSGYsBHBtsHKSGV9LuJP2aJsvdRcvVipdDWcqSe",
  "key22": "KYXmBXa6r3UYUHD5vA3oHcrSkz2T8YyJiYeAdRJQYkN32QBoqabTJZ5Q59WNVPv9hiEjnhcK6QWw1rXDbVGRjzt",
  "key23": "4mLhLjM34XSVfXEQG71MPYvj9ri8vEERsjtFMziwisRhKdZw8bcENtcDkEBVh5CUW2EwihrRw6n6saWr8NpdBXYx",
  "key24": "4JVGRNzBZDkGgxkKUMh21pbTXJXmFHxbf5JXdZYrQM9ryufw1YxJL6taDyynfZCZX8PwxKeRtL2uvGAu2RT85vVA",
  "key25": "gfHeiTctxWc1ioiiGqTsJcjadhWDF3L5CWZ3d14U5v7UiGmRE2GWtdqQtt8PbTLV1Ynf4u1Aw35JMEM47vuAQHe",
  "key26": "2Qx4C4fakUZjGyGww4va7XuKjxpaQKEzmUMnY4yUyAZGzgibvB6pLAvoRP8aJ3E1XyKWCKPRvzAFy42nBwANxBjv",
  "key27": "4gDNMLd8PgWW27zuNrDfjhe2SMEC6L1fAgv8cA3qxgyPD4HWHdWHyeTBcBePynip3RLmP1xid3cVFvP3H6ng3LVw",
  "key28": "5LwZkmRfmt1cdbQnLfSsRkpjiArtgUtqEwwnx3464sPZ3WFiprJGQtRwbe1T9LYaiEmv5h6ksfAprxA5x6r3Lkau",
  "key29": "4Tn987p5Jyq2odCXV6qhcckqwX36A1oArxxvGJPKd1rmU4h6nQtnCr5A3RLMDkS1DhStuYZYwLJgSMQ45RFq1ZYi",
  "key30": "4hsAkwj2kkYSW9JaZngVBVcuoQdiSeBpKyYAfKD1ynYyvKTDdKrWHytMtiGDhs922DxsmGXdeWKmUd6wScCyp8hz",
  "key31": "3hQtReKem3pdFuXn3qmWsNsdwHiBhj75tz4m3Gc1dDPmxrCNJoMhPb6vBA1mtCPzmLYePbLxKYBV1F7N9bPcz8HN",
  "key32": "4BJh6spbFqfaFCziQrAbzhx57XmeEcPjeFjtv2oJjboDx583oMzeAPChSE2zvdirfqAVwmFjjeyYjY4Vr7eMzdtT",
  "key33": "DwW1KqMKUjoEfndThJVsKme6sE1HhMzzQz9KjZBqoYhRpbzhkr1kDkLMJqTaBFXcZULazHosQjwTvNPSPSBuD9B",
  "key34": "5LpbRE6ecLaZmY7feVdMikntgjHoQ45K7BnfjcGSwyGKCzfHiZtbENPoLpfT4mFi4GZb7nqnaGVu3btPdv6rWydY",
  "key35": "hwBNLz68tq1vAbKkoMVLXkrRa4CGhUxri6gBzYQrezxZnRvE3Gevg1mDZVAWrCRQFXxXuZ7qjG1iC2oyAuJcsk5",
  "key36": "4kuZP2SEjnXx9C17yHMLVJuYHCPrL3nAxA9gftrDKLki8aLysKTxsaE3Ga6G7Y9ds9iuRhEqFKCNx76Qnbm7qFrX",
  "key37": "N3tzLKVAbdeNfjuQKVYqPDS9M5m1fai91ADUTdcyudJmqm6MFmACtF9redoQdNsjwQ2jgF2fifku1cL8hhnnhsY"
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
