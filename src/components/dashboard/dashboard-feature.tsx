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
    "49czhvDwGAev8hy4GYktBrKsxmw7zRqhctrs6VVqwxreWpWSBxYDcgZpP3XVqT6KLdMvpN3VFycpj6dZQbdEPnAT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WjLSYs7zt3VcXtPyR6X9c5WGVUm2gv5CnbXxftJCL5iawo5EtN9TAWSxzQHwiz5LZbM9eS8P1x9B726CAN6LeMF",
  "key1": "pW9iYhKHDTpixZNjimf9RnrxUPnaDJmpVgpcHnaxYBZMgoXJZQLQtyukKJLjGFfWPcdAZh5vEcjLVTB5rURSvFA",
  "key2": "3X3dgUWjddYnAApELMMkQGsqN4khbP8XxBwCmHwUyyGSh4qeDMBGMEK6CsQFWVhaWFgmwpUxbimF3NndtyKkZ5WD",
  "key3": "2QksQaBce1RN3MpLFJd4ReF4aD8wusrUG6JhDWncptvtK8obS8KCofD2GqYWDfY32VBpaXY957UqNZ5wjnV3ccNe",
  "key4": "49nnZ4pvbcHYtgtimdy4331y7fvdVrgJQYDb6ppkAPBWGEY9mxLmYkFjSmop3jpcEYi9baDVyfxTAsnX5hospeVr",
  "key5": "4cq51pTVNu1LpDtFcpRngtAXFZKQaM1D4h4fzRjiX9kbcmyY3i5CRNpMS3TdWd8ueUgWF16qfYpWUKTwuUb8c9PQ",
  "key6": "3vACnt2zsXM7SVQoUN9WRDV6KDUZHC1rPrUCLsSZypxqSVNQ8GM1Lp45vPVU8zDxnLbfxaYbc1WminSrwQzAUyBA",
  "key7": "3dA7P8pnHKf8UPWshVw2ASWnGTJ2Qy6Y5xuvMBQpLtRiEDrQV7ed5VxTGM1EA5Q7vFX6H1eHDA3CAMLi1pxPxYC6",
  "key8": "4ZhDmJNWA6qNT7rM449DHHdq6PvT8VzqCKZLB2cKNoHGgu47MfzVdSUSqnAHbkkMfdSDXiARbgMCmqn46uU4EwuK",
  "key9": "3qbSknBvg828bVJkYFcMvZkgecut1je4MNq7r2W45SPk6XjfyM2W4sMjyXT9YeG4btdhQ88fdbSk26vsYVzMRBrd",
  "key10": "2XmkyrdbVQiiit4hyunfYFj3P3iUqpSXasQbhftCnNSJ6r2Mpn47pgXuX4Cky3cfMBcEkzyN1hDT84BBXJa6MKXb",
  "key11": "6j7AbqmK9Jicfmw7SJbf9ARiMwghNYb7qz5iozM9UcQPvA6SXA3qu9cZEphbxLSuzH59xYZqB99FBroojMrLszJ",
  "key12": "3QE5176sAnwyLmcSGS5sTjM4fK7KvXzzLSaUAhtptt6RW8793izR9zfDr88DVTfnKizxTvbZaPbd9nimPa8D46hJ",
  "key13": "4gnd1MRjn6n7QrQuzkXwFeikdNgRWtiywpmeoEfDCCHjLGWatj7iTLM87LuQsxiEi8VRgN4evJAsMnaW4GZ6Nb5M",
  "key14": "4XoJZfmnbu1BMhw6cyasLaFVwXLiiicdQ5cJNyiHsz8DJXY4dLwiiAzXPEWGgTBsCHsTikBtPYDi1soCKTbnonjb",
  "key15": "2Mc2a921kaAMX9S3XUH9L8BGH7ivvzGiT1o6n5SLpP94aMNjcFdmbCrpAtPvdqiTbmB5u1Wbxui1oRzgvsHRk5vL",
  "key16": "yshViLJ7HzB9rT7x9B9V3RvVcf8atp7rzEUnv2UA6GZyazkuiBaoiC8gCt2vxoLdxy7PrxBdsNJkCcrZEy5zHpr",
  "key17": "TMN1yBizQTVxHTE5QzBK6sSrxyz1KcDbpZJWFHvNBMBKPcTvrxw5KYF5d3nLa1pk6p8VVAJ7S8DEGVNyr6yTnZd",
  "key18": "3oxjjfaXK87uDoCuittKAahj114MpSTskbNfWBGSAJ95WDj5WksjbdWk6QAWZnT8HzEsuhCzVf9q2bPpQfM78XpW",
  "key19": "2DbCm3J9t4eowyZ5RDxgGYwmG7PYgzFDJAriBHpBtRmV9kNKao9w1FcMkcARzd6nVUSR3xAmyTgHxdKvBUqHvNoH",
  "key20": "66TbcbKyj3CwwN9GvsvmCaeuzegFLBe4XU15Fwkcqq9pUK2NrM1zqLNjTbSniztoKnDREXU6MdT171Rxzfs18YPv",
  "key21": "32FDTNGvZ7Gf9ZDVaMLwhAKobkZapNDMDEAHYaf4HDoRGEBnX3mEYBEgB6VyPDfJgHY972xpgU1TjXg7zYoU6muG",
  "key22": "2FiG686myJMGFBKrYM2Kp5HUcpYXQAuFCYrSk9Dk1HXLAj6h869LFSmpMSYMReZDrpnZTsQHdu7c53gHWYQH1TPF",
  "key23": "2skbjj7TsZz7KoiX1N71SDeJD53BvFCEHnuRmfxZqtNdK3JmSZc8taGEEpnJp7xYNGEGv4mdRwe8GtRUrxTiJ3JR",
  "key24": "5iaebqNDjoFZoXVJThZVMSJHPtrkFSwQ3WnkPBcuTANbuLMZagtzqfjRDbJvbF7M8uJRa3KhwQxofTqg1ka4c2AB",
  "key25": "5xcxkYX6aorZdDqwudBa1UVzZVnxEzmC4dS6MbSeqfMo4t3u8voStj4SUNmUptMgvv9u91DkrZyqYpS3ziUvXYns",
  "key26": "4ytoLPKPeYynxj6WhoVKR8pVCaJhYpoyQB6z8gfQqHzPi4DfJwRYEixdWkkLENYwBiTAMzjtJMWQcL6z4eu1EB7a",
  "key27": "46gjemPZepqGjFPNiFdZ9VnQe6xPY758r6cC9oXA88YHoREoU9wznyKF1u64ZD538iwT5mhG8zmgeH5CXVVFLGAe",
  "key28": "5KcngLonDV9AHAPxoh8xov13SvXqtdm2u5m3obCBV8kEbBvMZRUZm7eRq6pkjdyimkHSo8ZAJNUgPywrKX4dbe9b",
  "key29": "2eiQLv6pg5av29isa8dr9NWuvNypSjkmNfFcLh9kqTG47WBuQ37KguwP1us6vddvmwGo1Aq3DHiLeNqZ7sxLLBJ1",
  "key30": "4NDCckFQsjYyzEy5ESpjr5H4mzYDC1PFwMUck6u2VATtzq5xnHHXMzYJ9n2jXYTY7B3wKUzwpXzURRujEW3hoKSq",
  "key31": "5qQo5VzJV7aUKNAaJn9APsnsF6DjKZS3xRKnC9pmRiq1YdJmfzqT9Mu1KSbCR6mx54nXdVyZ8cVfjdWBPE3fndhq",
  "key32": "Cv8vDvMgzTh4TCrsm5AVz3xAuKcfEKk3G4zQkeuQybjzTc2JT3pGpxDTgJtReoC7Wh2EFpmf8QwKPGn6uSBPbRY"
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
