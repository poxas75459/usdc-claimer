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
    "4Ue2SDmtvAYM424hXg9SmLnEpF2DyUdmteLnqhxEKaP5KqDSZutw89czUQ1NvmqNGnUotHFnxFexuZsWda56Ru1P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vyuk8M2uDCNf54HJKXmx9ZkDrp1p118oHdcnsBHrjhKwrsLXy7vt7v58u5EGPWursECwofiFvZAszGuGLfvSYZ7",
  "key1": "2f9ZCn4YMxortdq67VebbaxowFc1rFxCEKsa2mircWFzVEvijvTnogRoeSoZMMo4vqdGf4y2f3MdVkdyikAn3YcV",
  "key2": "3T6DjrDbR5poaEVeNrg65Hastr5CmJoNHsS4F2dzszfZa9C1K9mnfWWJ9TxouB9VyWCi9qeNPerKCj8qj2R3Zuio",
  "key3": "5jDctxL3Jznr3myy1gmeoc3J4TAvLLWF7Lkv36FghfSHREuQgbViBAWbZv72X7iZEH3b5XJivAstyD3hmvW7qXr4",
  "key4": "EcXRVd7m5XpRrNsazcgrD547MNnXpszpwZHjqRy6gXc3eA6saBqtgWiUcMjDe9UwBLSt86fLCvjJ7R8RnKVLJf3",
  "key5": "2mtjEBH4fJT2fLdYNBem8y6WG5kENVFfDcFqHAPejW9X73devDMxqHFYxdFVybkwJbuQ1C6VkNUktY3L2KmWr5v6",
  "key6": "pdDMs6KzigKZDgCBhGxTmtqcFYbsWKXe3q9oiy2bJM3X1ZFhcUnmUUuY8BgJ2ZQdsjwBiDegkhYtrLWctMPD49b",
  "key7": "xXwrPw8X2rXLusPT7nbzqCkHSSazAqub1LStCtkWcqQVkY3SNYMQEj8fgcHyNv1ajUmnqCNjKAG27KkcubGqFMq",
  "key8": "r3QWCxJiCUjHvAGza92SFoKB2M3jxraUA2bNhetyuGsd6pvdL3vFsn3Puksr8U5Sx2RJJVJerMAfyFj53iip1Xk",
  "key9": "Ud9ACFjVxCjFDfasmE6eFoQo3uMEgZo8eXXY88eCzq7dWqV5fxi6WnWKRDVUrAYd3NUWvXtEjuf7CZFJM7BzRnx",
  "key10": "DHG64SgxkSiXxNrKhdKWwBtbBq3TvKg4JbzMHDNSbBjciA8UFkWyd72WLS2tfquJyoKspXyiz8ZaXGQecRET2JD",
  "key11": "5bRKi64kuaAQVk8qjPJDH1bBvkwAGGUxXwgywQe5Gsczi3vEGRtK17GdvWWvimJmcLiFJ1hN1BWRGMdKVUt7omzf",
  "key12": "5PptHu8WYvyvUCHkBRoAWJCNJDEAkv8bz8sbyXtLayKdBauN7u2Rmw95GqEELTPeHCd5WqtuczE7arMVbmX9JQS",
  "key13": "33T7giKeEUvGy9yQNQEWeaAKQTudfXcBsdRoBmbfUUtMqZAePPb7Nz4e5ReoNMvZ46GAD3ivjvLiftrjFgKUKWeF",
  "key14": "3GM2XfVkhj77gvZLJzQeQSXDzMTWM6TE5erWmpBVRC6QtMhBW3yib97PTc2C4epzm1e1b48P42DSM1ygLGGLJ2Th",
  "key15": "57b1uhsKp5iHwfGam28zDdk9RfGdKBeWcHWF9pVpFzcdNPRgYGnSKoPWicfMpfQEd5Qd7TbqWLyUj43g4jjS1EuF",
  "key16": "5o7jk1WQNDxsDLrSRvQ4PDHfqxGHmdjbjoojnsnBj281wU9tknm2XfqvbWyWu69C1eBYKqXYjRwJpkWVfPXH6mMZ",
  "key17": "WrixGCnQNtJJwWLe11ouX5WzdTM3SEGzuk4nZFtacqCEKy16wd2tjBYyWvcKrxysKY5bggEVAjrDCFboP1R1Z4M",
  "key18": "4qMQtuFPGi1k6DXwC7bSf4Bh4dvXJiLXmG4UkCwbmvnpnWgb7E9xFVaQY9jWcAZCUncS4Uz5oT4paQ9HTR9Km1Fj",
  "key19": "5YcoH9WJVohZAuazba6WCxsQkWVMtkRfzoXwvb4dxw6k1Gx6L6XoY1t6aLMzZHDYS8jrQPh31v2WqeE2XPvYjmmc",
  "key20": "3NNtjdmFfm8swYxRbNyHGE1gZwyBiyvSvago5cMfT32ZVLQzztj3eWL2HK6St3zjRbte69MAQkQX1QKQuxsrWow",
  "key21": "2w4dhaKzXSEbh1XCgoU2jFV7StdKScQkzQtPpu4vhFuhfqY7s6KwNYBk5PHuu8KxNWeQ5AnriERr7PPWJsZDcCwu",
  "key22": "4Eo5ojnyH4da6NaivrU3CXZDFU5TEAqsvZaY4ig1SF9Y8d2qtbwhF9Jn5R6ekEN6pWMzo5nwxDLrKjDXSEPYSunv",
  "key23": "5mBJfEZLSVxYxfMcTSrucpRJRv88HzVEpkazHJEcCcCzWenXhFPKucKgofYLdjiRoJeQf9qKNs1RZrWoPFVkmrGu",
  "key24": "ErKYUCng8NEN5S6schjxEYXj7H5gcQewKHfCumXBre3qzCnPMebxUFuR3c9DbUbL3ihWEWByxdM6pQGAUssqVwM",
  "key25": "5ogAU2BwqkUfBHQN7zvuuRxsbUDPdMPA9L5sG3Re4KcsUNac49RU3mB34GUZzjmzhNgfRuaWCTgrzDd8hwdViV4R",
  "key26": "2BVr8dDnVY7cfr7zVH8N2Y3HSqgHn4xu4b8AhKUjMKER5tCmv5obGbqeidzmZGVv7vzoHHjmACunUr6B6wXeP89h",
  "key27": "Ky7nKkqCftuxerSXowrxKAUufArpPv8x19YtLwjKj98YnL7CGHCc8nPJ9QX3jgNzq1geaFtdaVeWn4QCaAWCBeG",
  "key28": "abYxDEcQBvyLyxgmjMa3VuBLBdLT6wNu81CLK1UQBsHJ6WuNAct9DmLJe1hvCxucmgCH88n38vM6cvtbj8Rc2GL",
  "key29": "4Dmx5AvZefJeKzKrT49Tr7aVEz4y9uWFXZDqNoQ2VDMj9ZdhtiqJrfxg7e4HeBqTaApzzFd6USksGJweTCTQY7g1",
  "key30": "32ATRFseEgPGKvMmyfaGJZibHCeG9fCW7fgCdSbGCzMh6KtHaFTxe9qK4m3R63Pi69gmXDfqcRtXx1JJz8zT4B1o",
  "key31": "44j4ArpADL7jN1QrBeNwba3TvVJDteY3RPBcw4PoM5wt8jSBxECnqSmFubuaDeAGbjcxVoAek8FpQUQo9bAe83TE",
  "key32": "23y3GK5JuJgqAJ7yyjqvZTBGXF1R42d99WbcbdmdQ3DEYgRXjYxki9XFMY3t8uNDjKiixQh9spJxD4gaQfk11ga5",
  "key33": "5uPhP3tmxd1ZRM96XeprwTy588bGyddgxkMKBdof1eBR1F5hvKjQp2mnJgxx2VjTApqxiDNnst1dTHj57g8aGSza",
  "key34": "419RJdaKhH1yhce1YYdKLBTRDZ3NCR1iz1bKZi8iz9T3uS5VQCU74BXpd7N2RGyw8AgYMUdC1YpEkfMzaAnEFAZ1",
  "key35": "3EyG6i31EZTMNQFwuc3rHp7FbhFLSSfs9bpoPBxauo1zrEvjVqwZzakRt1sRZvTHkNbZ6io5goJKxajkjX3SU3K8",
  "key36": "tvxaj6qJ7YMg5ZyG8xZqfhc3fuBja1Vr6yEQ39C4Chtxo2zLsCGqLE3n4QMe7nBbwLdXSCz6gWmXsQrGEWPAws4",
  "key37": "S33ayRVUxSbb6R6v3sQQAJaLrxon4ywi9qCJDcvevSphNkFqD1Mqd7uh5s8zKATkyxAAg1xF3SyxgKEjow5bivd",
  "key38": "4iqzXeczv5a1EUYtcFCbTd6rSJG3J9UY1xeFBZDbTnU8KSKrgUL46VUYiSN52mp5PKzGg2f3JznDcCvviqCy338q",
  "key39": "4k395QA1dV4DzSvfG7zdEaYNKALuTtN1zMH852fZG7jtagoSBAS3tmfiF3b5f3x7yTzbmWypsmhEVRHybnbizCBv",
  "key40": "3nAEngYBtuW31S2eAzcM9pKdppRVehEr377Sx8LnquP9XSCwba6je9UxZ4178cd6wRcgzbQP83hrsWv2AuSaEkrW",
  "key41": "4rgsFZpJpat5nVyiAUJMfP5yeZNMDF3ffmxm5c7V3U6urRNTU6nR47swuPxYCRreYrjNiLZx3oAigP5KQx7NVXrQ",
  "key42": "2PTxSkmdSEJXj8GYXJh6YGxdWoqNmYBdG7Khv8ytvV9DRGbBAdXC6yjKyepdgwjctNgQ5EsspLQPtC4r1p3iJ1Hx",
  "key43": "4eBWYmBe4t7dfMoFyDZBGvtPTtJtSfXBoxvHpS2HjPkw8utwRdW8YtoYQzpDgxuyR8apEkni3jshWF4TqsFFK24A",
  "key44": "4vZYQuoyBwAxncBmXzR7J29SymLSME3pkoq3BpyJq8JazQQnisi9qcVpeJLtrRU3vYqXXSHT2UDe2Y1oTQzHpu82",
  "key45": "24BKJ1LjoLGMRMrq9AgSsrsHPrqcm78MZ1jjRjRG3HRNEde83RnrCQ29RpX42GzyN47JTwBGvPb7p4JX3rPw3SEN",
  "key46": "2umrVngKU9PGCS4d46GgLZTELsVS4U6DuHZTUKjBSVYbG2ukgKAoorad1mRVpFad8sM7JnMMLAotYVfb7BHmw39W"
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
