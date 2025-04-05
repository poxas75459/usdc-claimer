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
    "osZV27itfrx9s2fnWBFv4ohsBrzUVYFwqx4XH61B4QoKeqa3eboWfsdYBsFZivaXvRgkJxnxVg9ZSjCHC89g8AL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TTLfkNUH3NVzKhzmT2Ptyja96Z9jJggm9seN7sUS7kA4v49fdrRBoJdBnMdDbwr1u27ov7r9bxoCi3kaPLcEYPc",
  "key1": "3jSce5TZNwtnSF8pBiY356CWzZgqrMhodV3K3ksGQqJfV11afBQiotJcsbN3YyS6NzyHwBf6UiYiScdxAjaSCQWK",
  "key2": "483qTVvKGaW7R9WNp3EsKjJLaS7jHDy8kTrc2xA8k7n17Qek3mzZHmkpXBkSLGwx4oq2BdqQf3aJKxHamX35uos3",
  "key3": "2u2oR6LwbCdLkAuE3F2o9YQeGAyqYvuPqdewxcG3moVVtsrMg27dF53v2CPYYo8saCMj4f4Sry6HNuSJARKQUZfX",
  "key4": "2A1BgAJBoXeTgvegoKKhdaTzcEuU8bXcpYTC8BGvuMTub8kyuuhieSZ6RRasFEBoiD2DLAPMboqbPiNbwmMti8Rq",
  "key5": "KWs7i12w3ZU3hmsiALqQtsz9LBnE57oyHTxKKNFpdSnsnnfFdkBZsmVbNiZYt2azwih4CucYhMeNZyg2XdPLrGv",
  "key6": "4wtfNC3sbXYRQ5bVcunVyFhAef3qEWpXDy6xrafr1sGoTxGzUBiWSYDq2XNC8MKk7fjCq1N6gGhxR8nkCchs1Q4y",
  "key7": "638KKwr6APjf3vSjtqgXEdTZibMcZZBGDSRC14BF8gkobusF3VteNSYrpUgGRv1tSfXrYE61TmiUnuzNpGTJjkKB",
  "key8": "2mtycUdBPnKY51gYDXGy2YVY64bcmY7xhsPSVQqnyZwJ7nBERi7fAGntukVhQtnrc8muKZyS4MKco8rbC4JpAUe",
  "key9": "56Tw9ScEASVyRWaQBtsV6VPnQh83AnZtWzayBkMcw9P9AqmXsYt7RddJmC5cbgoVKqG3d4g4B3FqdNV9NmZAcfKo",
  "key10": "prpXL7Zm8mWDXgZf31VJse7CXKWGxvje3nDx7m2oFusqtK6ccrQ8ohHiiUNP9jpYMrn8uCtV2xUbA3EwSNvG3MP",
  "key11": "61T6zVgH5eNFYmPsSKixUHeZQArsGbM2KhVa5HGZfdF24B4L1NwxG9F3cUwHca4xWFyQW9Bp66nCLjcZVbDjaa2m",
  "key12": "3JFLEeasx7sn3WuxpVCVDTSb7vUYpKC5f8HeoiaEDYE3hf6wYQf4xEpQB1Y6YHdUvf73HY5AseqniPFPtdUWJhHH",
  "key13": "567KsN2PL9TF8h3RsjvyGH4EdpvJiv3Cau4iCdUsoNdmyR983w6spnM3ESRwEH1RbQx5Vg3uWN3Jd4YmE7qp9C1N",
  "key14": "zzbufFYArc5UVEXCScbSa6CHEZv9RGu8xkBpt8qnr5UqLEGBS1esv9w5TC8UaqzH3rcWFjTJ17mrWqnGRSzPdoT",
  "key15": "3XTyiwDsSLzrh1ete8FihpEzpbTAM8CnLMmkTGR83V15TyCb5tADWoy4WcQ15tf7hsH4ibjzQEZeEk3atbu46gEh",
  "key16": "5kT4GJCQ2QFwSjrwNgQ4uewZDQXSGHpS6M4WoV21GLfxByhSYJdoR51ZR2zm5zo64wWWXFqNgzyqwcKHFRnkKp2N",
  "key17": "4yPGVjg1NPuyemsfJFY7yt4PYyscLZRGaFaUAJSekU55DRFhfnQCWNE7jJz4muifVCXusfhAonk4dr72aU8vUypA",
  "key18": "3Ctseewmb7AGwm4k9Cm2BdBWQaRrDd8AFEQc6xMkCdJ6SDBQwbT4TEvxbvjpacYjFUSBkJ1yMrpwjpYkDbwUiDcm",
  "key19": "x9rRDxLu3JPBPKgdUcUDR7QMUpCupbtYbtRUisDGyWi4pM8b4sFMdnS3v5ASx31iAE6fHmhM3qdZxJSQ6iYfsE7",
  "key20": "3a3xCdyVMhkxGWGqBiQXBehfdCQ8DPSMpHh15ULVF5TcBvA5dSiX8WZM5qdp653vEyZcR8mxDb29YdGzoadbvuvU",
  "key21": "DhqL8gLsvVnEPv9WaVADuRvvvqWxBduCf3Px444GXoQwHwhNdcCfBwp4mRT1wMGoedWcMHGg4bUBJepXV5W7pEM",
  "key22": "2CCocaSkMEqqUD4B56XUdzudDozHC1QD6AfKCahMgyCW7sMVZsZNB5tFAuxhxkC7LXzm4FYm45cMEwF2nd1nzMWq",
  "key23": "613CkqUbvCnzpNC79e3XskW1bkTNZHFJRjvXx4bsium67Q6hMYcc1miNCcMMmGFsjk68kMHUkiTzre6xydLouN8h",
  "key24": "4MtLp8bueA2qmTt7VKcL1TQ2u4iQ8wbaXCwn84jTXp7qqbyVEA1zVjfdzncaC87ZhtecpNDcgFHi1c8QYPRhEpVm",
  "key25": "4HSLjv3xWF8w1SJwrQKyHyFJzV5qEsWohdycRTir8zz2k2r5vsNzQeXg9Uti53ipbtwA8UGN4SfhJFCUropBa96b",
  "key26": "2v2GvLLgzYtQXzjMK8HKKYo6W8JDRmiPikQTKM672XfEHtpRmgh4WLbx9KmAN4S9ciQKJjoJ2hZCw9X9oKhTtAJN",
  "key27": "55QrNiZkmNvuSNnRQi2zUoM6hTea7bB2CspBMEv5jaHyR6MJuZmjHSbRmm569Sr1MbpgeqG9scc726Xx6H9mTh7q",
  "key28": "23C19FpLTvsBVH13HV2qQ7FaYxT6TxvMryrTqPWGctvF3AcQoQKCyZcSHnCBxcwgh1v1EUwzS1DYwNy1TdtVCeyR",
  "key29": "bPz76gMNiDC5Tjfs58nnLnn4sfDsSn2W6kam75GNdFmdyxGpJedgewsvhib4UWDonNoCDerwv8mG3M6v685KkrB",
  "key30": "53yjQyfEEKhnk3RmxzRaG7P5yQAAdwCC85KcEy4MhZadBYXo8kXHAHfU73hy9fKTBqDJ6RceU93o4289Wu3ucXkN",
  "key31": "2KjhDrYeg5xT7fwJgqQNK7pPwci9vJM2rWXL1rDs12VVdd4srUTVujoUBj2AqFNSMtJnvpxXxmxurBafZFhHSQw3",
  "key32": "4EXV47ae64iowacGtmCp9Xis8TJcAzPz2ndNPnzPyTUwFhHJ1na6uCe6KyihhzcFECKyCULuUKy4GSFBQToQrKFM",
  "key33": "4oSaNPDfc5QyuR9eMnry8bdPtdomCVMj2gv8mubPRJ58P6LVjDKB2NbA4M5Dip9Had5vygmmJidacRbcbxV9SfGK"
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
