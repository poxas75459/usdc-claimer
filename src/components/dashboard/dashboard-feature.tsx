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
    "4zsVuWYi8kH2iTkzp4K5R5b5jKTjv7cDM7Mgqq4YTVREesdKo23MYFwpvngjBfxe9GDhrEuuQutjRdNwgFEMr3Ke"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CewVtAFsnpzdfsEc835WvkF3qUyuGjDZzC8EtGWkJWFNDK5Ca9QipZYQhChBQCdRUWbSyxSYEpvcPgoLG2CA7So",
  "key1": "bLjKz1GE3yGEqtTiQpjdcRE1pftJEFTXS2JKTtfH1vgv6dqprB78TLKPKBVHFQh8UhfQDxuhN1bUSLUZJCvJPkE",
  "key2": "4zWKPipmNZ9zpy2KpYiPQT1jiDV1g65Tj8TEXAAcZWx2viksCnREM1D7BP7JxvJU5stf88xJw9sYtbJWLRotVkWv",
  "key3": "5RdUhq6M7iKij8SCd2cHkxE9TmjQCU5xJusEykWfTwDR78T63QzVpHoZRtsWJg1ZKkVLUWJHdTyXHqCPahAcwCTs",
  "key4": "35bHF2PtcybckboiYdiHmEb3uKA9qaMRC91dsQxPjZdjMSh8M4SQkXyJHxGpW4mfbL86ma2Eav4w6Bx39qic1TMX",
  "key5": "4Cc6ytsUf4iEdUXz72DoMza6BZqywkxYBNqEZ9xyfTa3wjeckStRQbZh1ibupt4iBewSk3fcVCYoxqrm7KzMR43E",
  "key6": "NDe87tcTWRSzbmV2twCaqLe63VmAxQtUP8jQ12h66t8Br1bqCHUt6pdWcMjacdy9VkNu7raksHTm9EN2YmTvgee",
  "key7": "WMR8X4dgVdViaT32zN3Uo8oRGB3cuuXgbvmK8kLtN7PMzD2qfiLKrbGJAK2HQMiHDUiMFnW35v7JMGwRm1VAWFJ",
  "key8": "36ef2QvxH1p8mu1cndG1Xv7paNVFQm89X3TTX6BDNyRb2tTd7xAfssMqoAGb2bppvbxA3J7RSBoS5Nc4MsQr88MV",
  "key9": "2B5RAGUFAKoUfP6toezyxybZNmQVs658cxvsookRqo2rJf7Fdt6GENmx8HwDpoFqe2aQt6PJfWchLUY69iDLyFwy",
  "key10": "QYkm24oVuhNVvywj76DpeknGtRDdXMXww832QBHmRGKNLCVsRyN2f2hBRrsL67CbPp5nudt7h9Xf9hatTETW6tG",
  "key11": "3XDNaEepWBTGipgovYithcmTxX3T1FqK16pGC6PuifQXjeHFw8y1SW9tFocRJbWw9Ed2MBJaqiZhYiT4SxtXQsSm",
  "key12": "2AT9ZU2ppedNRq9HxXrAyVjd2nvhZWattzh8z8XhTHkWWaP3ccavWkZZSQsC5JyMz7Z2BzYeQvG8NXvkRmZHiqEa",
  "key13": "4z7DgHdZbH7MhhDRfb84uLgoDrDkSb7vKdDENQFgzUdJE6b7ErEqGUmbkthLkugKNuvXZ83nwwp2CkzjhN8gjcJz",
  "key14": "51XoKGixAGFwhj9oxByWyFEVM2ig4XxpFJfiynooTCTeMHdzyygamV2WiFZbXSqXHDJjL5hdkaCsnAxQSkJKHGh9",
  "key15": "2zmHJpQErTCQ9AtJbA6b2vvv7Ywu86jJqyJzeuck7ETEu4CwZRRZYY2bZCrGvVMzp8w4ChY6PXLDnMPZUGvAup2h",
  "key16": "5K7CAJCRGG74RpXqixTWv7tFMGsi3TkKodEJNXqYyAaDVyut1fpM5QgzEsaZQrHGvhDq5hBtmRX7GueivH85kVPn",
  "key17": "5tJqsFwxgVigxN3rWE7uHQEGs7uzQ5NjiG1AxXauGoB4K4iM81UASyQBrog7sgS5MaSfLZuR3k9uo6Aywpwmk5qp",
  "key18": "2hmz3eGu8795tNimdS4xiADFdUne96Pwu1Lwj65mUdcew2SiPDM42RiXzzCqTjQKJaFxSra343UbDiqGz9hLsm2p",
  "key19": "5LeyqwNwX1dPqa24wdpHQ2i1nMcE7FqDoCsYf638PeDcE6Ss3Huj1ezxQkj7Y7C2u134SMrLNNTA5eSZrFjheq9J",
  "key20": "3Xp43QiVhFNq9w5JQN6t5gu5NoBS9QBhpWjNUtNMgxSHdY8wxz6FF1FYDrs1LJMDdpnd9Fr68Jdwu4H7TTohtA4",
  "key21": "3untNjPYyD6J3n2cyRQ1znhMir5PRAvXssqziRpwCNULmfrNEBjRrrdetE7ZBQEDSfMsWUq3zx3QmXyCpCt536md",
  "key22": "2pnCKvi1Anf2ZYsK2JhWaqWkCJzHCzFwAEbvGo54C6NpbTbRYJpwmkTcB5n8E3kwJ1ZtdobTFkXvZpqxf5JJGFju",
  "key23": "2nAxuVoUbTsLFYkBK1RVeo9RRMYPsQrbdD2oTvr7ZmiTtvXuyjax2uWBo3eoCpV829trK9D8ioswZrqydJY5481",
  "key24": "33FmAT3pZu8H8grSrqkMAD46TRJX7S6ZF4EkTzJd8WC3beRfzs7z4zvXf6z28e61Wic4PnstayiPXfQrR2eNR9ba",
  "key25": "2z9BS5KRfs5wd7eWthfD78EHPjVmY1M5GX42v2ou7QUvRV6CmhuZJZ4L8yQS2tc7zUe8nmSP7SkZWdBTDy3anYKi",
  "key26": "3wxVV2Y4NSuAJZ8zxvNeGc8NP6tJEA9nk6i1ixAHUKyu6HcugmxBxQ1UdfdbjoKWQW1K1zECVWfhUcwBwHAbZaa8",
  "key27": "2Bt5LusK6aFNXrf4zU3ygvC94ZxYAUH5Vug4bPHW5459Bcp4kAU7P8oKWB4QAfLQMYRztPFRjbF3BU2TkJdJ5gog",
  "key28": "5Ge4vYYE7rSGL6iKBebXNZbp7VdF4TgUX2Kny2qBxWCFBpq9ApqHRAd4WhFNtfu6ofTNFkZpSSVo9zvpVjdbf26Y",
  "key29": "qk3pbfC64KPkx8PqhoCG4As2xQxRq14LXVZCLhUBeQrW72u6w4mXczvJ6L4CNBfNUUWSVqsN8GNrKUpeR6Q1Ek5",
  "key30": "51hYhTYi5bZEuYgJ8i3AgdEff6oKi3KxKbjAiwHnGsZQSkUqeuyL5bttzEDHJAzRvz5GKR8bTZQLvcZR5rbvv9tK",
  "key31": "5L4ADR2A7sdE7nzHVZTTTvY9WPUytbo6Kj4vZJxYKGvH7WdaANhkoUSEUx7R7ZyZRf7TRUqsUnfKjG52jJoubpFw",
  "key32": "3bbKpnMGrNqiKaRY8auAGqpw2CdPx6j8i9Qyh3dTCJRkM2bDJiatfZSSRsrn8KjGeqBwCLkUxw4KLvsT4GyByPA9",
  "key33": "5bRVPVMYqXApiLfMSM4D29Fef2j6i63ReQZwcv6CQKiGgiURXrc13yGhoKYrX6chQyvvZ8jgTGB1eS2xeTFmm5iF",
  "key34": "iNBLBipkTb86DTwpQrnM3k3rAsx5UMXqqdwSPPVuWn1pFvAG3EgJjZ2W63UiUfW4FCngr7bgecRxcFZwjUp3iRi",
  "key35": "45RZuw3yxCQgfCCgfDqrXLmWsr2nmCUNHefqanikEuu4XXgcMLq5frqBwRNmKiWJruKWhogDy7u48cSdFkubEJXk",
  "key36": "aPK5gj9SbiehDdjysog7ERVnKoaWzQHxeck1S8tb7wi1oaaTAm9VVyUeqSCZbZkXmFVHsPGMBFHmZerX7tTayvS",
  "key37": "65iebu5wuoihGph1yFsTcTuSBzEPL3Rnqzj9gJ3et73wdsHQnAvMSv5EzeuZhzDSgkxoeRStp67TnmJf8u2Uwtbe",
  "key38": "2GYWD8RjMjR12TRnrWvtCj2pNaiSvNhDXYnKwc2m8FPxqzjmHuZGZF8sryep1wqA6Zd1EPLQSGmtZyfhNi144kCj"
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
