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
    "raQ9XPaTWqgCE2c4ERsuGKdPyqTT5fjWANtAytw2FcXpPAXZ4Qk8eB2RTtmtRukjk5T6jFVkFjaqFt4inUqQFnH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jCQJvuLjmccayC3ZDdHnzXpnY3m8rkgE432z5pVei42RjPjtkHF2QgwYcDgJ9xXWqKeidPXH7FPJXSrWkrXz8NW",
  "key1": "9qdRgFJj33Yng5xdjpPtFs1SSLPbtTf7w2rXcy17YLtnH8ZZBpTMY89S4ttcBZEaFMqzWoceBPC8Ma8U5cxrSUV",
  "key2": "5APGBu2rpjSVQZrdmsAEm45ZVoa8KKpvkv6NScmVX1X1seqqKRVVec6EFmAKw3Jo1ZZxusMBoa5Jh9xkdUEi9huk",
  "key3": "2v3Qs8rDUSVVSKvHdUUsj6UfaST2pc4Min5VCGYU1HfdEuhamgD8yrjtdp1e9wsuGn8i4WEXq8pn8jpfhvJqdQPY",
  "key4": "427WRL9AKXzaPTDPu5FSx52JVeiLPC9d8oWHzKQWMjyjFqFXTWTAhgH6Mk16s7HQfQVvrHJcT66hnETM47wuRrZT",
  "key5": "2oGYncDWGumrEy3AnXzUMXbocad2HurXFyDHVvrsyo6WGSeJtXhNvKkeHncyETnxB7EUPYMgKhyg84F6Y8edWwvp",
  "key6": "5MHUynwT28ZXQcanZPUX3dX2kqCaLFaQyGS3cx4KjWayw4D45Xq1J4JbZHjG2Vc6JToyVu6jwkRz842rEmMTznJa",
  "key7": "352yW4wvaL51GUwYsDZn96VrjGe3LsRQg8sWq8MFw9ERYCwuTZAUBKhc3XQCd9vkbkj2bETwuLBFN1zRhrnwtLCP",
  "key8": "4cSQoxDNEi829XqAzmc2wRdxdz68aEPqkf3ecwd8cBk5YQE3TMRWo6nMyeWYuZLaNUNhpKuQHUPX37XTGhzbPrfX",
  "key9": "2h2GCLaZQEnZXkdpi9McK9N2ahfqLWg84hMTe1Y6K7dy8BDw7KFayC5JaevRZmYCeFmnkrkRqyrVL7cqy9tTyiN9",
  "key10": "EaeyiPUtYRu9XQn7A5sDfhFTPD2xv5Rai69ehbfUYKgXEf3xKTrx5prs5VC45nVgkaW6YjMAtHsiFrDkg6g1XLg",
  "key11": "5ePD198eiQMT9aV3bAnY5fxuJyBFg8i5f6YTgQeihjcpxLrnmE4mERYW2gXkM9ZEqLXEiGeutCNvtSBsiRGAY7Rq",
  "key12": "2swvg6BeC2nLzwWgLnuP7uAMYn3wm98P92To2t62BzDpc4qUz4AgqPFEZ5ncb79bbeDg94Rzr7Dgcs1384ZSJnvd",
  "key13": "4yYiZXrURDtxbsZvPuCi3DcLKLSweWgcFAoNV1y9tYk9m1T8Q1tX9QKjHv6JH6xVP2RKyuP8QSfxS1aqxVcxyLxB",
  "key14": "a1R4aoAX5sPy42vMLHSrPsobaVEGFBDMK4r7VfVMS2wv4iaDrRuBmd44YuydHV17BHYfbtMyaJfXUNgC9L1B3oV",
  "key15": "mz8qT4sbRGPP27sRT4feH3GeZcMXoFzBAgN7jQF9CLFLv7KSC3HoiBHbPMmtcYLi6tWR5Sa8Ka3efrWooJvxAUt",
  "key16": "RCj4TryoR6oD4Fb9qKBuzdRKjw2xCTKJUeA9R49qjWz9Hp7D1j8nroWXbaTZity34MMveeSkY4hJegqvXGi67hh",
  "key17": "2HiWPBtKHqXHkSTGcQC6JGDKuWgv4rbMste6S3YVwCz6mmweGRAub3KxKjw4U93ru9AdK1txjR1GYiF4uyTU34Dr",
  "key18": "3Gd5vzihDtBKGmcH4Zc39tp72sB96RBS4HFbLFreM3oQ2FDgcM9MVeFaHgPfSCMA8Kuz1s31aHstdU7Y3KEZEDG5",
  "key19": "4HfmbuZ63ZZjPpAoQkVY7MKSGYNVdqk5R2kbs5C3FMcsQRVTeSokX6mcCugFf5BR6Hv9CYeQWNXcmjJSTKKSKzCm",
  "key20": "4gxDNtHz9PXXyAM8WJWUstGsce4bmY4yGu8WZSQefdpJbJGL99aXHnMwybbYZmXcWdcxL3UJB9Lo26vpD9ULdFq4",
  "key21": "2MQNiUWGLR22Vk42rEdvhTaWG8czZmVCDg51rwN9kYKugWNG2XEhp8TzxSEvycBVMRsbtdckyrp49gYidqm5ZP6U",
  "key22": "3Ya9hkdFWWrTPJ7k8qjgNdQbJP4EiemLWKo2PySUW5tE4UDv1o1T4wbuY4xxgRdwx4gha1kBP3BABK54HFW8wniC",
  "key23": "3PerwoN53rW5JNzr6Mik64TdSRHK5pwfqdBUutq2hYqRRkZYHBANTxGzvoJMgXfjGrfon88gSU8P6ecisXfXS9Xf",
  "key24": "43WFZ6Yg8eZHcuRukmdqCnafHg7sb69eZfHUr7WhZykH9eN4tfg3DK7nCZbSSV95kzojD9FsT1gYndZL1JDtBNWW",
  "key25": "vedMqBhVxinUKqxm8AFD3QbwBBoVV4HjoURsZFDKRDn39xXSbCa9b4WP9yqyGDadDUsnP2k3EnSWuRx62Z6MkG2",
  "key26": "xupTXPzseYy7rBwhzqijz6mrQNJCiWDhexAzccQ8QajDHk95nFXBkReSK5x9msM7yhof8niTeGUpvhqh7kHEvd7",
  "key27": "3SSCscdpFPcyLNVkNLKRoHbBQLQq8iYGdephq24mTWZ9eq4uYBMrwHjdvr3njx5VpTZG21uaze4y3HbsrwpM76K2",
  "key28": "4UaeiWnbrewax3gFaZ31iwMQGRYfh4tFLCJYwQ96XfVVEeLZ1AuvznbLV7EkjmZqPJjDfFv8n3Pr5KNztTpevTp7",
  "key29": "GUfSExyNUQoW7YJhYdJbHP1pSyJRFCnbT8Luwiv5UMS3NnzVLqULNThfMyQMWCZkPNWD1jqrKwJtieXbbNi5zPm",
  "key30": "2vdqR6wcmKj3XFa5cFgq2iFm4tKQkUw2nVpqEecDXWeQxtRFk1D7K7za4bYfh2zFDFsQnQsA1NgpQUUkJsMNuiQp",
  "key31": "k18SVnexVnjjYouEkNwtzNDoy7CAoDRa23UvYE4sjP3WiWzYm2MCgpMYRhm3MskTsice2qBdCwFZjer7gp6Rob5",
  "key32": "3zAgufjpyhLzbX48oSJHwNPDdYEwH4EAbA3SboLWP6kiHBz5eDyGLKbnFrkfUg1EfdpWJm1vg7BhDZMSfSbrNgXG",
  "key33": "4vNYFYQa9hED57t8FRcn1otCodgQRGMSor8LN7C2xVv7CxXDW46RQq6pzuCihpcyYfXQrGGPEF5cofooJAs3EvrC",
  "key34": "kEKFTo387w7LswoQKcPcNi9LskVphY2pkanvKhDdLqUP1i5TFhRwCXzNkYGeLCyDKZUFxpLVkhirsNLApCf12nz",
  "key35": "kXrRQ2h4M9CF3k8cfH5oA6DRJYSWDF61k1dTARLkZQEZcrc9ktvX98d9PKte7QBeebxWHpfbhX6UrCGt159EFQB",
  "key36": "4PQpGocGpVed2GKmQfjzhAVysRqK7cXNFe9XKrPXvNNXgTSNRK3r9dgq2xsXyxz1Bkq1ck6Cfv7DJ721LnyrUbn9",
  "key37": "2N23esjYTMYVCgxRNJb4Di2r9837HbqGQzosnGjQKgcPYiN1HtAyMSFjbTDrhLUSnJ99x4HFWvprYdQkd13ZbfYA",
  "key38": "49G2uSTDNp9eL9U8D9GnwAS35pGGoMyJpSBXEwfZ28wYCJN9EAjDagX7WAKhGeTSsS4yDyySm8be8mBCXytR9s1K",
  "key39": "35QLcTzRxVfHTMKySTqkfSyYzYNYhdBKqwADtuseoNVjy4sa8apspUT7bPCxNqBh3oWbdy6EEH6omEvRDSUxvqkK",
  "key40": "3cuzB4TGczKYkvk7uBhe4smzfLwJetiMrUPwcTDk6BofPqehSVAth4KgWHoMwKU7ACMP8def8Tm2NDB66PHwJvqv",
  "key41": "2ZRPs2PKC8Byxx5EGrUdxfKkXxiVWTBajNiQFMWM6NTJMmhs3Uax5YhLG8FnirYhn7L9MvhpT9568DVrT9k9hraR",
  "key42": "2RqSqR1pkE9ecVEGPQFVpgHAmTyURNqbTnd531sR2SyfXAu2xcwFEKtCnm8B1iJraVuNb7tZVUFqxE6JWii8veS",
  "key43": "2NuDTDcjrYBjvyhhvdYbbKBZvmLwyWrxULFUq4BkTKL4BzmcPfPkkqPsyVsExTvZmSMtSB8YqdeVAr4VrVFYrYpQ",
  "key44": "2TrUf6A6DTHT9RC9DiTJGbqktaF7Pxexp5D2MjsY9aTFLfL9TpVnX3YE5giwYK6MSjLvGV2MSxBquc4gGS4nMkWF",
  "key45": "4xpXgYj6agBJENCYA3aYyySN9C4zVTjQe2xdYNYDSvi9fuzUQpuKVo3brdhFyMq8fSQLwrEjQ1NmxRDdMXunmwBi"
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
