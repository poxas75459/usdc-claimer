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
    "5muWHyC3jg7s2Mpb39tVRTH9voYEBinKr7p7g3BtriyZooYXnUziF1nbLff6vWEWHwBqVuApKz152s6SLm1kzptB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aEouesNWtqjGSFubBqaucYhD4EgeK1UWAo3NrmJgAtta2CbeLwzmLxdaPt289suFGt5r8rXjaq1GVpmeYyRBdQu",
  "key1": "3eyNrQ2VobfdCrkKHFTwyWBy6uk48hzQX4FYhV1UfY6T47j9bByoP69G5kFfS5PJqR4KWnadGNirNsb5iyUKKapa",
  "key2": "2XTCENTADpHgxP5ikbA9i34y4hguNRXMUT1LQD5WMdnwVK9yV9o3p862jmr7ZBnHrmZ2gRhWwyaocAJTSBjggTWG",
  "key3": "aVHzyDBdQt4vMJvKuNgvUkP7sJjBDaa7hkbBL15ay84eVnvyh6fPhLv1owuCDJmNU93VethgF374yxVNAVmN9md",
  "key4": "2BJ9z74Da9FepbHsnJAnwKPVzdgASejofXe23EP1ubVA9LvzwC7WwZ49uDnjQMnZvKxLwBtaTaFkix4hgxQF3wTV",
  "key5": "3P7uBFAMbFH4CMrBkt9g2FzwnQHQFKogG7C8YinfCfAuQpFHtQtPVWebqXFZyfdWA4ZDtkGoVrq42FTwEY7cwh9x",
  "key6": "55zYLsHKfMopfZDBq6su9gMbB2nMbovYq7hJWoLjnFJV5Xj36goQhCf7Ecy3jjemK2buW65kqV91Ei99nvdDU3Wh",
  "key7": "uDMnr6RoeCVAivrixABAbigVuAV42cY9FoHPnmRvY3bzqoyY8vQVTva6h3Q3kZb8Q4uHP6R8ugSY6WfrkuEcgxL",
  "key8": "26BkhGLVTVVmPkbDp5EPcgduSkcPW96SWGdJb3PZKwCwVKe4N1NzZuqs8c1m9gRjdiLg8XEqjy5Uk2HdpDTdkbcD",
  "key9": "2CDm8C582cEu6JPYDWR55438SGHAMNSJpQBJ1urjs4h9ULHVWRGbhHM5dMLftStsewowRcDvBe1xciB4UPoeomfG",
  "key10": "5WFEHyWXYfXg7Fsq8K9ALQk1H7H2LfGnS5WCSoBsHXCHgiH5YYZQDMuxrpPvN4jvkUSccVHZzUo4Xyhv99xHThrY",
  "key11": "2ijAa2575tHY8sfhQnQE1LPMKpeDCi1p58fUSKD7Pj67xEsV8uKQHz7qVfetZVkh4zSrvhijSkESGe5Kt83mzact",
  "key12": "3ZAiB8Y4UZXq2NNEfy83BBdpvwfwHtUyqjVZSWVmdViBdUs3gKyuVjnqa3E6Gk3WdyzRtLcQDtRhux54iMFYrxyH",
  "key13": "3XcgiXRLsnBUvm8PmafYWDoELFnwP8PA8JwsVgXKRuWRBxhP5EaVV4oQnTEmsME7g93XNw7NgePmeB9EMa9YsLHH",
  "key14": "4i3WSd5i9xaY8g9x2gSaMozLGojf9Fa24yRr7sMSHWYprKZ6PYCvcr9MqFWxFSwLgkSABcZF78JRxD1JBbR8h5JP",
  "key15": "5UEtgUK3pKsxM5ZUXMd2Toonw8ekKQzZSda2grA8VxHeuY27jJcY5r1PFbZto586fPHWQBtPoHyjH5818HR5gfgg",
  "key16": "5P5btKjF6Xu59y91FtFJxHaFhwbrQqX5buvmJcTWfZEdnV5oaCsSWyWrpkL1374VP81XGQjz3UjFFieBHeJHdYNq",
  "key17": "3EgLVacyBe8ftqHETmzrfgq4vvjQWFMA6aXapbZD4LrTSuDR15Kbkj7J5UhruywrtVAby4AcYhuTK2DRqcYsojnd",
  "key18": "57uNCJvR98egSckB4qvqXRD8ytWzp4kSapY3ipX6jD6dhDCJD3Zs1TP9feXwj99iiBAh3EwX77c11Nocx5mBsP7p",
  "key19": "3CrLuML47sV56LJasWvQXssmKqH4EpU9VQQfXS6P287Cg1251yoVXfE8XDuEYRivSyADUCRL7Ysu3HmePYTTVtRz",
  "key20": "4oTyZ6sQfdyKFEA9d3jhixh2xowcfgvfhEmWVDxyYWhREepKsBznjyyhSeRUXvf8JHZcJuhbeGkqwdhRAvrogMoa",
  "key21": "eLM8GAyPzGZxLQrfkUyNg8ihKGsx3ZoQGzdXJJm5NNSACppGgKKNF7FBfkL1kbAJz28BqUmFbmjiCKgAJuc5qqw",
  "key22": "3n8rZp7BLNJ3zmCmqsvvJNqptvt531jpnJ6rW2vR1LwnFC6MAhLbcKkVrgPUxtsBCjWP187Y2e5dkKmMo9D7523H",
  "key23": "2EJ9i9bK3Y56NfYxKvfG3xojDk6mZCDLqXifSpz5dV3Jxy6gsSxSj1fKHFz8RHSh2KYjCHo7Z1oVv1F7CdQLMouR",
  "key24": "4FVYpEyHV8zpjfUA8zNvhho7dBDfNB35TCb6MLp3N6nbipUR8YgG3vxLRuXDzGSogzmMYv2SRhyKWCj52PSC8rJa",
  "key25": "5b4JQwWTZjX8R23QkvkRu3k9PTP7wqQYavPDt9jdDuS2EmmvhwbNM1ByFwj9hotbVbYhgKNdWNhmUQuyZWd95Rrj",
  "key26": "4sAMSX185p3Lrr6L9ajJhquXNVLBu8UCWdWgNBEuAWHJWbPzHBxQZjVbkgGnb5J95XBLTvjHkmRnwK6Bu9wV8uEx",
  "key27": "2Lqkeq8vqT1PPEhvioNeSvrw8xmcGqHbG3a5wSTLrmfc7cGC7YnMcKLcYy79KQuR81XkFgXwvAWBSAvdWjkTnLdo",
  "key28": "2zJkboDfnMZW9Jt5iYkkDPzscno1sEfwafyAoSiVVZU9JSUDt9GE64cBMyG3LkpsFiN5Z78kadZuHyjJiammSxxq",
  "key29": "2LgpaSSdu7VLrHstnaTZgag5cjFP7eekdBwS4fUAaLC42u1rKyxCsSQ4a9noMzgjBsUaLCtjcSrbbZphuYqcHNWU",
  "key30": "2cViiEXxcWYAmHByHw4xTxPrqD1WTWGPfCHGHnDg5pMEguYFt7EVpC4kudXXAcAUjM4cVcY96vHwfQpiWLHNFERz",
  "key31": "5iFv3aRJV92opQZzdPMi88KydW8ZBmtSgnrMcWdYMFQmLXHpYnvdTueaSxCwmJ4dy2sqzV6tUypvUfBp4MKNuxpk",
  "key32": "4vrjFy22EGs5mtFgEUh7WcQGkaT3qAdeiBiZwMGF211XvWh9wTGqwnssDKfCG3jAQAfmukni2G1ZuqFfdM1xB3cA",
  "key33": "mtqxoJMBXtm5AMg8apcxK7DMPcUv2tihW2jvsmCEh9rB7Xads9MvcB3vmkudNLicyYvgDswm14jnLGVCFCtvXzZ",
  "key34": "2KrZ74qQJEiFLmAFQBZCAUxTFpXs4pLXHwRxgy5nGbDJTspqjrNCcKJhW6bsCwzBwKDHxfDjNo6sU315j7d5JxdC",
  "key35": "4o3sp2kAowTepxCZS6QzCsgh2wGBiFSXpZGzV1Tvufrho8GuPGx9TdXZ2njCUEGXeiTws3KRwW61T1ug9FN4YQB6",
  "key36": "4D1j4WybM8edvEhuRYxFz9FKGTPvA6P5R1d3Z79oFjSLcAMxxM6bK5wMN5mz8p5TfJrhxRHZzbGAZ3XKUo932Zxs",
  "key37": "yHVhhoUramYyyzCGKEyb9Ne5eNcc6EQVK36YZeqTLLNQCHWDxhht8dNXYKRjF6sJj7EHMF2bkX9G1hQhAf7yuxo",
  "key38": "584r3KV1CJ7FattdJgGjVhdENdmP4jmDEEF5DB43ZXVHY59G9SWTT2cay7Q5QaPPrPUvVeuJqL3LjaWeNAWrU4t9",
  "key39": "42gdR5YTtBjSZDmPMcexgHnb6M783iERmBpNtYG3xghNJazB3ZsXgzmD4gxyA5HUuqyHXhLaAkYKHjRPtxwczS5T",
  "key40": "4xHqS73si4WXGRkmA2GQx2qGutWgyVRBiGo5a4ttU2fxhc54NsBbVkyupUThYK1KA6h4FcsfLiLtXcUU149sUY1T",
  "key41": "48CrE2DbrEoqKaFn8qmjpqWsZaY48XfMQrq6rYtT2JL8tWKfj23xetSqhAnhkKfC6KUjTCnURnU7nEgcrddvPpch",
  "key42": "mNwXJHetux6KEs15irtGU7oxpRXJ9qrAhkjCEv4jSNuuPzhzNEMqS6Hn4yq4MJtsczSwiBvf2914k64A18ssufe",
  "key43": "5f7FNt6tjengDahYtygC8agUzLvnP5KvdASsuCFWZoWHi8ENsdL1CsSsXxj1g2xJTtH5JL5uedNrnXF7C3y5exN2",
  "key44": "2mwgNwRnfBiXxHzyeCcg1XRgK51knruXBQPyFi4NhHWD6BggaRuo2WQ45bJvnJ7WsBtvxSVA8RYY1Xs1qng4EBvz",
  "key45": "RzNwQCvGNzT4sWmenG8TVaB5WmhJh7LPTUZ9HypVmbPki5sJXdpNgvwWKSSYa5xdtujugddNbaZuiXmAjFsQr3E",
  "key46": "EjZmmbVZ7m2Fv71HenxDauNDoPH1nK7s1iA7677esULX82Ggz14ZHCyRNEwCa7JfuSJmgcAHoJbue3497pqCYaS",
  "key47": "58rkTvbd84asECVGgqSaye6QYT1jLh2MYpibdbjBGJmQaXaZ4RNLQjo7xdySoSdycwYJctjaibbDC4Z6YWndYDh5",
  "key48": "5kUnTdqzjawD5FQgTkpcTThKQEMNK7Wcv2qVwFMTqnMQgj1gRLkf7NG8Tn9iS1M9k4VsLwHy6Y7mif9Kcdb6K4R8"
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
