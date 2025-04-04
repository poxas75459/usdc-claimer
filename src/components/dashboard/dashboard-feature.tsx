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
    "5i6sMtcwXZwE7kTCVAnEdBB7im956uVpNDcBb7qNzk97d3hU7Rwk3SDJBSbBrsuCMRr9wy1PL1BxRZGapEzWLh1C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h7GE18ZXkAnkseaH9LuPn7gt1KMqun4sPDM7f4e51FJBKwSAVLY8feYyLxGmytn22jmpn3fS2tcpDzTapRA6kwt",
  "key1": "4gKqkS2p2Yp4awrwKDD2L2F9Uhs91LSdrVPXaDeAN15XUq6tBZ1wMrfED9x69fqtAX4kmqEbcYftuDXVM7hMWvuo",
  "key2": "bBVSEzqdAhkTPqsHGBQGrQieMScFrtYKQggzX76GkxmLPMkvmHR2kv15QZUGA7hugiqJFg4iPDtdUTs5k6ni4YN",
  "key3": "3LUoiux4tHy4wPjKaM4egcwaebqmhtYGphxDirjZ4gNQgBpvT7fawrZgvXUUZtvvtxaB2Pc9dN2sCuPMuJLJDsQa",
  "key4": "2rX6kVugKd3ezmziK9LJnYJXPyFsdTdG5JnW5V6Hw8hXnoxfem7S8D7x5Ca7YXTd3buVNhuno4oAJMJTA1e5t5Ag",
  "key5": "4CoNdDdNESj4xJpxb7jFXBn1p5jxZPc3sEPbe1jUB62VfftMHy6yHNEVz5rhXGMDX3GSyo2aTWHFTX3oHRXQ6L1p",
  "key6": "4nfmNtoCi9wx4zbjCQn76Q5XekDFFW23iyKn56bVn9xRRYGsFHcRYgr4pFAWzthMs64qwfT8W3BvJWG7spoP3ayd",
  "key7": "4WxMbzYjfz984fY8ubPVyvXy23MAkELnydCpu2LaAyVtMXC6DMiQWPMWEi1m7p3fWnYJuAkaBzWZjwRDPXfFJEt6",
  "key8": "vv1Dv9M9HKQWXRVJdNuaxAXib2SNptKYV8uRF4BCvFZCQ87QeKfbAg8TPWeiQAoxzfXFgzf29q3a8U2GeB3YBto",
  "key9": "2wug9MEbD6eJnLajEWHM73LhXFR4AWAw37UFFVebhytXFfzGN9HGh1guu1f7abeVnkHS9mhiMXwrkY6wWvH9Q3c5",
  "key10": "22f57vdmSJgp1wSMB7pLYzGnmDBw4HaBSxrvyWyUCFNDSHXXztGD8RbVcKDEWZtAtMtye2ZcqCD3omYrsvqj4Qce",
  "key11": "4bHvPsC9oc5X7qBGEXq8qPjcW9kcnjkusbJntbYrPLH3Du67hZYf44nWMQKzrGD5VSrDefhJ9Q4L6YDMh7e1DHfq",
  "key12": "4qwdXvAyqWehhLF3G64fGXFWf8QbsbZKoUCRpNQo3f5JbKHXEYjWYbNsbXd7fakdshNBhGWfjaNdbEZwBmc6Px4S",
  "key13": "5jfBRtSMLYJbUXz3SF3fsxPPpb2y8tv1ZskKpCDwo4Uku8xLTDrUHKFJJFFv9BqVmRcjDo7qPMx5Xs4Vt43VfGRf",
  "key14": "2fZ7FGLFroiSQmsh3GjMWairtpb8ySqfhphoJvHUfVQvrJ1vcf67kDJYNehXKwsqwQc8ahLNphyPPNYtiuK7KH3H",
  "key15": "2rpWmv2HTBcLd6L8rnkFQXQw5wxospCKHfu8NTFuYeP56NWPpFgg4cYvhqn2ePDoiLX1tgE1StHrhSMYHhXk26vu",
  "key16": "JswF5imbxeoXDr3gTdwtk4giH91VPWt3TmT5Yuf1Dm1kBuu88PSs2xLAnW5sLGkwHTfbeoMUxf92iVZV8Yf9gkX",
  "key17": "5PGKmi9QJ5WV1EEZrRPpuGC4Gt7ugZBASCtphTFqtRnucTCQXgBe91w9BnY9bMYF6c1iPZTLBg1Vw6S1PZmoY5MF",
  "key18": "JyRZshUT6zeBZCyN6qkfmv8jcwQ7jxY9RVQcFrgyY8uR2Y9awBsrqDFiZm8RXuTjUNQbjiCNedbbZ2GnMyiTykR",
  "key19": "xwBWvCvRz3qzthbeuEqUQBu1gFMKuTLGSwJkhxdZbyfNEBa7wWNCW69yLXzqQuaBsy3GA52YrnpKHGXFhQCVXoN",
  "key20": "2oSuABFqrvNwikP2Qx3xDg4jQR6TXgqZZBEw9HEDaDEFSuKjDVWDkGbaZU5618ffWqrocKBRMty3ScmcUUiiJCvE",
  "key21": "2iWtvRqx6hmCrtYP6CRLeXo7NZahotwN3ATgKkxWhaLjJub6jx2yc8B5SLa2hw4M8qXYCMjvRhc86WvFajiVLUH3",
  "key22": "r9zFFvBstmizGHFAx2Nb3t6avhtG9LU3tvwXxv2wZHgsFHA5JmkurVScMhsaZmcCaq5zGLWpk1rYrKsyeAi99Jd",
  "key23": "2wSKQAS2mfEuin9ASATgh2FfBBs2iSfUKDzcFtaKS88q7m3Tz4AggqeAQZxzi1mFV4Bi6YouAKR2FeWzNsQEAcBX",
  "key24": "jbGNhX1n1j2DCFZJk7M4SjBytvrhHqkYoM35FKs8YKcXh5MmP46NBLXtUdcKYcLiWaurhCxb42P43XiVFqjuvLa",
  "key25": "5uPidUgUdUWujaKy14e7gRc457nEyGWhyKJZEim25fnWjeMWUwFRkT94wZjtZnsdYxsURiS6oiuhum4Jj1wvG1AE",
  "key26": "3b4JbA33qCxQhbBh3sbLzifUTPnsbSmhQB5HmKDGdE67BM9m51KTf8Cn6TRvCfppf3Ud51vkUXUPhJyKs3LNxZfB",
  "key27": "CxtwCdpxeuGn8tzS7mCWt7WMGmQfJLpabLDctGuY1gopWtio3FBSQhecn29K1NdWLxG4ADcLFdYCGLn1eevxErN",
  "key28": "5WvrDvVPbrZ9bxcrGMF3f5DsJYgstZc7yKnYumh77kn5ACJeoMTZhfbSuF7gSkNuSrQj8C1tPyyoPVT3MzuwJcK2",
  "key29": "2uXAJ3rjBNHRcMKV5XRbWw3oFm6Y9w6cADfZBXtRimC2UyWkiPUWpCDb7YDBFvogeUX64wxoMWtbzcBP3BFMhwc6",
  "key30": "4MvH8mSVqNaddBY8obMVaNaxuuK2zzqqyoiy8BUVgG7PbFKbDFWJFfFBenMxzHTNM7NeaUoLGjKMTzPyx9gGDBim",
  "key31": "5ktBDnu5HyK8NnBM9u2V6K887CXHh1hXM9fTohszadBeUNZ5d4K8oPf4QVSvfk1a1oS1URpye8t9WfRvaDhvd15B",
  "key32": "3Ru6JQDTBpA5PYxhAGnUgdVwiivJ9YVE4B3vcZHbpmQp6B9xuMHczi16f4ZVhrpNjKxkdZbMqR81Xx4xuUA8oHdr",
  "key33": "2uRenLpcMxamSWKgyMideFm2tHVjuMSj2dMgW42TUC4Wit4FbhDE2tnrrEx1xg18hJRKWVipvyLdBoJtuUXJbSZV",
  "key34": "555x9FUm8BgXvKrw4MmKs9rKToBYeeap3xpA9RzMewJ7aFk69anK2WnRiVk3pf6KKUsznhNS8MfaeWjJrp7DoGgp",
  "key35": "4ZiYWUtHwCUVVMsAztWBYQr7bmDrypD4VW8DgDLSSShLFwC223sPWPU4RVpjaW9zzrCviMHfHC9MQbtnvbAdaM63",
  "key36": "2BMBrwomWv2SRoknpMTZi8r1whs3oKMx5jncASJC8QPMVLe95tgXkKnEH1BgACHez5N7Morjq8TFnEJLUSEa6t3G",
  "key37": "kBK9164yhmpYuimtxXY3tbGscAmr3WYaqVo9LRNSQeiWNpLmzVbmBX9CGc9RwckVVG9AKFaVcTyHHdtUgD8GxXq",
  "key38": "32UBGQwprVVsG8x8cD4zNvQEk1DHFd8uYttCV2icc9DusxnfCbf5RM9SD6DskYsiVMoT4YwWC4w3q3WzZpb1SuYz"
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
