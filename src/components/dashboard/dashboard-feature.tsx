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
    "wivyQtZGAc9qaJYdjeP6x3ot7RFwkXufU3S8rXxVmpyQq9MjpAxDEmRo6eQdFrMU2XpjctKGYvi4LrNrok8f2Ef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62kziWudUqiAK8cs3SAzN4Qod4FoiTDnRbRRSRs5ahTpkpSDaDxCyeNeVEozUwe6Bgjfe1rwiA2TSk9YZDqBSjQf",
  "key1": "2VNewgZUcHV6m98qioZ529VcT41yYNNye5qmLwzg2iLuChG5wmnocKbEXCJMWhMhDJwiqMp5AqUne2hKh85x1K7o",
  "key2": "2yP3RBdG4bNHLbLL2gMXDRHqva43CBq2pwpcGmjbipnqvxGEQJDM9XN7VuLVBVNfFAroSroyThHQU89RLk36Wquo",
  "key3": "3FDSzsHnrVKKn99mC9YpdqDfxfDtFhWsHY3UkppZsDRnSVXaKkJrhsBtPJZ1HSujKb2N2XT7puD9a8YzTiuVjVaq",
  "key4": "28WK1i6AyF3cZp39fE1bimyS1PxKEsG4g5dSBpb75DBuLzh2aWBjVMCx73vUfth2Xhp6VqvZbjiUvCfgrUQM3wcs",
  "key5": "2MV63dztZe31q5DDcBaYHzkt9ETcsksNa7QD6VYEovRsbpom3Hkw9JPv3uxofnFP8hD1J6V7vkSBLn4zKfFvjHpy",
  "key6": "2Q5zwCAbkCw1M2LsTwYWk8DhghyEMcFwK6wrRFk9FLqEHuL34Sr2EQKnEqvK59a8QKzwp2PwZHMuwb4KNJYcFi1R",
  "key7": "2oPwMxASknjCUSmZQ8Z68CXgSoKVfum2Ys1pZq4LVsTR5MjFHTnuiKE34KoedprFeQxdJ9N9WisY8QzeSV74iiwD",
  "key8": "rZdMmRYch4ohKZeiXEKtvnsJTA4iYsFQhhptRvFwbyxC4FPmugBVQqrMEdPUDypou8PNqpCPeu9Htj7AnkpgadZ",
  "key9": "3Nwa2dHsMvo7MFp72CC2LSVczwpx6aaa96ktbmiBAtBnv3k5qMMi6Rh7zPqP2k9MYsB6pByj7qk6mxrMVDgGd8Xk",
  "key10": "3bpZ5kpJimaz9G1E7gFvmHBSs8vR4CTx9VmY4ChDz6Xb4aGLieE7rtT8un2MNMpCAACZxwnVUdxFra3ogXa4D8sT",
  "key11": "5EwX4BpSUwRfYxZx5tBPbURKkK5B328LZBEecJacHFFPLfr43s4uxXBxGxdSrUijQNf4YjLWKvjAN5Nd6tP46YmL",
  "key12": "4ChseZc4LJvbP2X89PMDkwUKryDQeP8bQ7jpNhNWeWc7VYbxRgBjVccYBRzeTA6CuA1ydLA3iD2v3UkXeQGBgdr2",
  "key13": "4WymTErS7MYNXm7gnD5qXYac1axro6hSNFQ4i2oNmW98dsaS71oNoKwdTFWifobaXUK5WStPSSm25eH3KLQibxzK",
  "key14": "3qDq4mkPMEaoXxRPmBx8Q9rQTCpZPZ3WxBujhhgJ9uCoYi2cUyZPAe8My69Ha3srZ7adEtCLR2V9LFHQ88JoHwZN",
  "key15": "2nS8HDGQuxxaWekrvksB11HjYMhSvrhWyNRmU6D6WdnhaGrqg5ciBpFkjMf8gdKTujYTay1YZJRY3PnG7aG5bGXJ",
  "key16": "3yqSsxJ2Y8PjRMrz566h3MZuk58uXGaayyqC7R1JskCvtk4cy4TC9rjstDMoBcS8wgkiSnP2e2LfS8b64Tr2WfxK",
  "key17": "oFD1tmQbLQ6arHbhz3jdiRjCE2mRJ5LJWj2dsF8PsBGnQnXT17DiiV3wtEgXahktaNZC3szm1pxFzMU8FLuKcYG",
  "key18": "3DFR2VKzk1kAVChCeBoULFtXvQ5szt5PPGaAfvkNUrQLoquXWwfZ3ygx4dXsTpUckFoQGUMkCQUtsd7UKHChKjKt",
  "key19": "AYSFRLNYEL8C2Y49TaE37v2rSZRpzF8oh4mYQT9FtfwafdBhzQfpggcvpFFauj4EzQD67rsewopFS4ektgvwgro",
  "key20": "3kuTKK8GQvHnca9QK5rYGUvhwFwTrPtYEJtGQ2x83Am6PkFuGHXMZ4hQGDPPJez7UuYz1zTn71bh1t1SsQsVnGsJ",
  "key21": "67AD2Fnk5nfqnvx586ieW6AutJ9PTrwLUBsopgQG8UWPkSM3sEAcqurvqi1FQZKBciwMLo9wSGM6ipB9REoimUwk",
  "key22": "vhRYVtqmVdhQXsvkQ8kCzBET1khyWr4jQtTQPcsJ7bcMRWw89VmxV53fRvLBec6TqWjcomo4HMTzXR5zzjs9fuu",
  "key23": "Np1h92zNevVcQ7nBPwh953NkftYVs3zEZYBx2DcVP1VBqWLy1M1emVrzkRdaDVaxSPTBr2kEVhsA5zDyMFsnPVG",
  "key24": "5w6gvCN5Pcp6LaFhzkeDNphfeyy5RpgYQNCTQPakmoj31JhYLSMijJDwEtsP2FVLAEhFtuvzVAeyB8WzS3gNf2x2",
  "key25": "4h8nynBwMcudyLqpQFks8Gw7EAu2n7cBZzBRfcfJqhzwAAYmYV8fRuWNuzuGP8Le27Mw6HGY1WuUYJtteu5NSM4c",
  "key26": "5hDV28UxC7kaxgohwEX78TNRUktFC93o9mgcAnxnJ8dmMTfP67ixKQjXqUrAqYBCm3eBAzHdar6D8qzRXvj9ptRW",
  "key27": "3wnLJ5r4AWBp5v5DQFDdjtKmKirrBvWYk2UuCJ78fpJivJY6U5KkoTgeimisbGxC4Bb9iiedYFm4gjbFNxNumPMt",
  "key28": "5Tw6Q4CBPLfZX1s99kELUkph3EeP8gHsqiBbF8yGFdpTvHsmS6DDXVwC1P3dZRva2xjtPVQQq6v2FVJ6ZubRouqB",
  "key29": "kAq1Pkb6SnZWfqTLxo4W1BtpwMW4U5g4UMFnjr5PLaAat1SRkhGTskPFiiNFoAyPTYp5J6EtpyTA14ioEpuLchc",
  "key30": "2LCDWjVcavN9FtndXnWUNSZKEjZXFDtikEREz1GsBrn9DAw9vLJUdmhQUSWVQTW8y5STKZ29e87brhEUhZ3k7mEq",
  "key31": "41Va21GPk5LiLPtjS5Rq9byf2i3gQez8BoyW8GtZHNsPGhViqa5QjaD6LmjL2WViE4e1TVPpAeA3Ng25xjUVZM9e",
  "key32": "5Z7utaejhpcQ2o1c7XWSFCB6TG4vdDrvQeWx14chMZFtMMYBC38o3Pqtvc6fDQ5DyJS4JxPmRdp8Zq8FMLTwsUgM",
  "key33": "2WmbPwtM9ci1fxJQ2yQ6nVTbPkye2qK7Xq6D8gHf5gN48wSqByjvXRrxwVBjQa7NteK425A4MTMRVAuHQciCRTRm",
  "key34": "MMG4YahDYW9T7kNoy61G3xdYtSMJdAwz6ySMo94epVZtk8BqyCaEDq9DFt6mqPbKtP3GgRT7DvE2j8F9jT1VCwr",
  "key35": "mcRxQWbwrxGUxPaQZAbVRC8c7hrAZ4PV653kK7dfejkNbJpH6TjiYsK2t8Fir1WwzZntftFTpDqZPRuZrHERPMF",
  "key36": "3mNBcMNU2WJnTLc5NbmRixgCP4hVRGV7SYpKi2o2BPt5aDZ6Tgkdfz6vgiTrStvSEq6P9wdSgt2nyKRs188neFVU",
  "key37": "3yi2GWCpfdWbA6opxcz7u98ALWQtXoAJnFvXgXocXqBvVrDR7fxL1Ny213Ee9rGwM9HrZUxrbwUcU8DUjDTed9nT",
  "key38": "2BwgwvZip3ifaF2LGV3XT6Zj5NYravwRWTyxdZLz4Hr22FMEQk7gPBXCraFTBpgtJuDqQ2oaThqEd6zXTKRpjBLA",
  "key39": "Kmud5kdUuQ1X3tsidZmgAXfYrTsejNirDr2rZJLSjtDxGPMrkmi4gpVuBbaRPgQTyT9AqYrcZ5fqNfDUMGHXWVw"
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
