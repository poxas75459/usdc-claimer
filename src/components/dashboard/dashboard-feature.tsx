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
    "3j4dDoG7xACcmT2eRa6ftp6G7EWao5N5M8RoiXKRNVWEPrToUstY4DcmixR4VFZRNMtwgdMekwu9GCRQcEQNdw7G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41f7xT5LVuYwvMubrCKkQAn5h4rQfjxXkBizqec7681PHiAdsrFDurWkyyPcak5e4p9vH6wgKnHxXGsdsTgP5EkN",
  "key1": "55yZhtDDoE2Pezvpmo8rmaBaP9CtaNSgNFHwnPcTQ6SgLr5u9yedZykBrR1TdgNN7MW39vg7o2JFPEbECTNgUxQL",
  "key2": "37eQzUeEhvX2VEZbvCEx6YLgHhbnsZYDiAGTkwcw8qHi3dVTUGHbFotHJ7RJ5cv7Yd4rG3dgoFjnmohgASGt76wx",
  "key3": "Kzjxobv1fjf6V2YGgrjRHJmjZwc6jkJFUnQrXM7MdopPaNRNhYJuBeHCHkUzyiF5AUs4cgJpRBUbDeUsGPpgu9Q",
  "key4": "2y3x2XXvb4FXQQuKWy9a3NouiKWysP1uyH8URffXCbbpjTD5xVv3cFMkouzvUknN1oxh98P5a3z5fxp7ZgDJUBTw",
  "key5": "2WtfYuH7gt1gL83881aGb2g2PqtrsFeiuhV8UCi5NxSaG9BNfmjTgc4C59Kd1e8xqR7YAf8NMSsMUGtSqQTTWF67",
  "key6": "2SHR624717LxGDii4C5oxtU9iB5KfyFrcHzGoRiDKc8FgFaBuKyrKZqkThNNBzooZ63ymzuhwPBKx15BD7jjgAaT",
  "key7": "4HpwJg1ff3wbjoF8S7ba4Teok2pMaMgpxfAqSiWQgvHkmGGeFawndKRN4gWxe21GUAgs3JnHBNx2wzMumb5sFkCa",
  "key8": "3qupQ24MWSHVgL7kHkbht1nzwjFqFMEog8v98RwY8Qu4Y7H6DQYzC77gnjvHzvdtFz79n2wHufw2WxdZ9mQqBaWb",
  "key9": "2RUgwk8pG4e9oGQvyKYciScgR2VxtJMKBhTaP9K5tfoj4S9WZY4odUhWSUHBQXHmsJt437sjX6ccABB8XwRM42UH",
  "key10": "5omXyNTyNp7sKfoV1bdXjGWZddjUTAPXqDUtns4YQmCg4dZyMBDG2SjAftyQPk5RQDy4qbsD3wWxg9C3szCF9Kn6",
  "key11": "kFiq7jBrku7Tn4vUCESs1zDq4CXV823vbGp9XjyHh1hGS7ZuVjcyda6GraBSjg4SA5N3n7mwnVbgeQ4X5XZbzNi",
  "key12": "3UQCgtfpWjN17nhCGzPBhBCVCppYfuSZZgLi1Nt1BZ4h7Tpnkc2KPHjxmsXu8JttRrozrUzTiN492RgvXLWdFEgi",
  "key13": "4S9iXbssMsNKamXaMEi6b1JEF928aPHhoricxKFturxJWyXYXPuQMjXM4Ym8x1fiQpuyzZbaWLZmuHknjwwbupX6",
  "key14": "5QV4ScV1D45HiFQXyCPsyS4gbzZCDGodRL76uQAvFZWf22sPQJcsCzeb2iBUA64J1KYPUwgJVuGeBRGQU9412vY6",
  "key15": "ob7RwKPDEyNbM7HeArBq1LRx4C7bmomzNMMwTae1NaSs1F69J2KiccEfGZWVJ7VBrXHWs3Eo7jumAiUhwnhhoae",
  "key16": "4JdQhickfFjtnG4SZpEmNabq2PP7k67KBA7mwYMx97LgyuSkx4V6t2fwStSWnCw3ihVMNri6SR9xi4gJ5fR43v8y",
  "key17": "3AXYQyf1brAtmomahmCbUyTuzmVTfU9vCLH35EbiQyNuk2FmrbUEEao2H4Lpfw1oV9fQZ9U4WGTDpsfp5bDTazVT",
  "key18": "48HH8pcZwD4kPFPCkRoBYzRWwfwkcCnfZ44zEwrgyJ4kMRunNcKonFXVdhC14BdME3d4QxUwS9VDo8km7KhfWwZn",
  "key19": "3nVdrWGd7FL1EqDuqDSR2CqqEG9ybpV7mcUfWGs6WbUiEZ9aVjane7628i28EG6RNTh9euYBFV7qyxBh9V7QPpBZ",
  "key20": "4Z7yVWc8i1SFZzWjqt296J2Yt2C8FAyUfeKdwA5LEd4aQVYrdoFq62wz9v8RVi9WQSVvF4yFXytHtcPKU2Sn3dXn",
  "key21": "4UvbNXZd5tPcowexLZjjG2c6Jjse9EH8LMSPfNtz7qbAp64KKEEdjfY7Xhwps5tgDtHcKGy51HAUXcgNVnsMhThu",
  "key22": "EMwrCJNTzR3G2UDWbHzXS2Y5UDU3q2mi5eauyLD2KMooGspBPiZvuWNJAd6nuG6Mzbtv84MZ5uuGXwRq4KimnMG",
  "key23": "3VaKLp6nQeaNMc6WePx9QLuxsDKRNCHAnnEeai4W9NgisDgfPjzRESgExJnBSbK6xMvEA25ak8oj58YQcxq7xxft",
  "key24": "67JpRK3NyskKfA8McwxcLyzxUWynFbGLMbaPtAqfaLygpCHXXqngUPZrf2BCt2RHYG3Tg5pXs5QBZnC7GUADQWtx",
  "key25": "2MLwktc3DtDVx4vuMsBtzuq3Y8pjDmiTZ7ULsfqfWySd4n4LvHBWQEZRJq5pAssonjcUuPLgpmP3zJzQzoQBcmPg",
  "key26": "4n9ghpVsUNPbgzpNtnJzsGhUPCrZey8BrWqUP88bnUqV1qUHao1hLR3jKvmp8mNKBL6uEhhqiE7wMcQTvjqVWrpF",
  "key27": "3yBYMFu4arPupyQahNPHumfQq7ym5s9jd928hPD4hetqJ3Q64pF8pjLKDWfc5FQ1zosZVBbJ8eFvk293sLNXQuqv",
  "key28": "4fBFjXmLTBicmW4e41KVe2LgDovUa5rFAuYLkSuJfqJRs3eppcNjkJvJYLp5AqmjhA3zdAv8qKcB4BFj6AiAVyrq",
  "key29": "124PutrevqfEZvGux9c3JkDa3w4CPomQwdqT2SwR8EZPqNKomgLDN3JRuikxkL4ZpeFKF8YyTX8uiUHarjsDWVDC",
  "key30": "4stz5n1HfNzGFM14nQ8YDStr3ZTMrhW4w1ZUujCBambJz6R9vCGoysdBoV1w2JgTyzu8a7fpJVFi26wjo7gqqVS",
  "key31": "2HeNiK6ekBkF9q3vVQbAN6XaWLo1aQgJxUfXxPNDD2r2tYHmxNitwNPbyp83SMeYdJp1pAsyj8GF5eYeZUyT37At",
  "key32": "nuNCWVYCa61Us3KVoFJ1bMHnPs1Kq77vTxb9TB9Q2BjbDH9XeR88EzVMoYh4QsbxLDCVbqtKq914ca8LRJNbtvW",
  "key33": "Ld7ND37SeWaYz4ncT8YDeQ3rjQtrZnovQHeABPgN458MNmNKrBJ8DzmbT4ZmYwsGLDFs1CLQfYBapwzwi79SNgp",
  "key34": "CmNZHHx94wVWTEcYdyJazL4GfYTUN5hoT8rZ4d8jGGbEWCJhieR3HjqzTj9JL7WJdPk18WzqXGWnFSBL6gMqfnW",
  "key35": "5Ptrzm4wawrUjaWtCkTkPYdChBc3zDB9pjjVsLssMvzfSBQ1DqeQKXjSuS9VRoYwe36kjY8BRawBHunv5vKaYVNF",
  "key36": "4w63mcUmE552RfZhoo8PmfTkbKBLwdLmQLez9JAfJvGmPeod6Pz4p6X8tw49eN3acGTuLkgmNnJbpQKFFhVSgS3T",
  "key37": "3AsurmowEsNTRePELvrUssFR4v2NxMJFmzYjaMNV32ZqD8xd7KK8TkFVXShPkWTLawCjEnmmEicebg3L1EWQ1pqs",
  "key38": "2A436HGjvK33jgzFTxxpuXBQA31MrZEBiK8fUqpv8jZ77fyduWQra7mJRp23rQvfNMgkudDSiVPsWx1fwRMmTBuD",
  "key39": "2QSA4LtUS7mcXmKJxEnxaPCubKXQBQHkeT7GAKhfeomBu76rp1DAMxmBErDJWcH1Yaa9p1iGeFwTQsYTxzTeNmo",
  "key40": "2J1QHaFAEqSwyQkrgUu8SZoMnjPqeGstnconRwLPwPNxLRRpZvZ5Q3uWZSJfxjwdRotGPnmk41LoATdC5x8CuEqm",
  "key41": "2anTJuFTzkzsTWMpmfn4mmaBe3CmpJJAB9Bw1KBt9JUsNJnX9JKczrqFrWhyFc226VtReXBHZTt4T53b8YQxfUQ7",
  "key42": "4fRUEbHDRiXJMFNUWsY35xry1zxZmSdG7AwrVjesFENU3nNrH3gpSK5jYvKXcJGLHzkZyvXTY3LPzLS7toBTYGxu",
  "key43": "4RVkhhrDR6rosBiKMtu4hEzgDDsU9pyHajvUbUP6GFgxnd7k1LV1uYTs1uU4xGwsL43i33V6efgso3kwTcYKGHNY",
  "key44": "3EoUZcGVmbmZmiWt4VecX949Qv1eAPtehLnwa3GvWw37pRf6u1JpUT77TuuCkpHSgagZ2UuNJ8rLSKzeTcE28veJ",
  "key45": "2x9DZNnSnaj72LS73gT6qQQv8NFWexg6T6ipeVsvMApXsgJj6NG7PXebLkeMpWB3zCPKcbHc934Xt4YMTWnwyrQQ",
  "key46": "5odh2rZMj7vAEzmgYVJ3PiLgXpfnuCAthXkf8wxpGypyvhPbJRS3dPWGDx2GqFg6n2FKe5wKLJandh6emrXTy54q"
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
