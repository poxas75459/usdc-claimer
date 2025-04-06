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
    "3MJQ3xnJdw6VSgjbW69P2aWXrB7qnhnUC8nzfhfHkPyxXotg7kyLbqbTcDseij7a64EuhFPy1wp8UPg52odH2VMg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ybY3a5Z6cAWtoDSizDEAXQm4EEEET4Svk38RW9XEzEb3AUTFszQbVcQ6Gjsy5kWZsaxxV58ZUHGrST9od2vj6F",
  "key1": "4fDYcSm9sa2mHFvbVfitmFu9xQyxJdTxeG1qT6e4zte152ATLbT87MGPn8jTifkX6eXZC7JaVnxVTfSKSqcUXQYD",
  "key2": "4hFmZy7sB1KxLpv7DwcVesv3UDisDXJT77Coxwkp7YHTGNSbdANK69sE7NdFofcY69oK6ivBenMLDmYzDZr9Gznd",
  "key3": "7BCpFtMCCa88YMuGQwRtNQe9eoJdzjf2EvyBFuLCdeg2rz9E9MfJwfHMHcgCEMV9LQNFk9TFSZdNRr6jpjTYE1Q",
  "key4": "3ZhvfEKAxupujUngRGFQ32xbgb4pstkBpqCcEhgqS8LTkLzFwfs5VtKoL6QkrWMva2fwhZULsc9FNsvFzRUZ1fG4",
  "key5": "4AvVwDL2VebeMMd4GsjY3ovhnfVCDSHP1rDZjdkvSfpAiXpe43St3au1Taq9HYDxhSda4HiSCSd2XHBnHjHCT9Xg",
  "key6": "291NMBT7qzKqT2YQvLwcSc99ixP23UyJuNesjY42yuEwkrW4cx8bgijSzF4e6uakssCnMcMZ83oG3SLmDg8Y4ZNR",
  "key7": "4JzpEx3LJcLYU2mV3DAnnajgjCzXx3Gwi3S7v2Q7sKdfw8D8WB16W9qW5x6DdZatMjLxSFxXwFXJuwDWEpkxNgeW",
  "key8": "2KoxafDPveSDuEKuFYygRpEhMZiyHi1QK7mPcAhjy9qbBYuAFzfnLgfusrQW8UULHk7sK7geH9LZ2t3nWRBSpBa4",
  "key9": "5vczdhnMqK336gKwC5krUL7GRw8RT54nzQ9bmTrfSz1KZZ7cfjzVT2mjgMWPoMzmmFAcpiy3TZ5UiuMRJB72ujFC",
  "key10": "3vUWYH8PAc8TXVTfqyQzc7VaXvu1D7ZUfzFHJ5anMNxKGqRBVdbWtkMhhZ29EvTy9SjkVPZXhJZKbgFaowGVMVuf",
  "key11": "3Vv834bDew7YtCNoMb2Dcpm3syWne66GASp6xNcN37VcwmJKGzEY9jGLim5m9QWqGEBW5aSZzRN9SvB2bykpxHy9",
  "key12": "5m47kyMbuWJiVLq1Zh454u3uc2pwEtLEDw2pCdChCDMWqBXF5vYgFFCP8QKeM7Y8wygyyUeGuRns8nhwEfCiUZpJ",
  "key13": "3Bo3p8hNasZWCjkwX87fJ1Jmb3u4nchxkrhNKedqLCncDu2cdRKrn9BoVq9cwecLjPHYGF7ZjHgAreckmcVXBBYo",
  "key14": "4MKZCv9Q8jRhb2UpGwWJoA3tS2ZMiJbzijXub5DTsDyBK2oBwygoPzJcoWzEBKm3Yct99idpv7V3RxNR8TBLEy9C",
  "key15": "2fBbPNviArkczpMGqL5HCry5YQYB5WDnD1m3RuAydsPDyk7brZy4uSr8UCDw7LzUS7pfUjgBSTTgSV8vX3vWkocj",
  "key16": "2UQ8zCEoZWxaAJFCAMRsQWtq4NccTo95h93G87bWoZWrphRfbZCEFvt27R2pt3k8xtte7GxxARrV5tTQRu2oQvSZ",
  "key17": "3GbPKzEBoDjXTSwkAZLPrxRGUaGZ97Ryyddm1rcrENq1Umab9Bmx2qgZXcDmUpoMA4vMyzJokZys6nVrmm5WyYU7",
  "key18": "62TqSP8nmLKQ8HtfXeiXLWdHhV7jFk5phjNX4NnnuzV7VDCjPqGAgJGFrYH2KVQfEqBsGDsiG3MkkPY8nk5RzzsZ",
  "key19": "3ufTVYbuqbbD4iGq2QcYHZCdZ5S2iycRVL5Aee5EfZyFnDhSdVJBf5P2tvRBWNmD1mQJKpvkewupqTUvEHt6y7Kk",
  "key20": "5xn4VhB5unRyeYfEJVC4kazjsyRSpDH5f1TwqtxhumHxSKhjziCaCijpNBg5r58tp5feCDpk8zPb5pEkvYgvw2Lq",
  "key21": "5Bw6aG4g9HFtsL6LaPYvkkg3kyR5v1BmP2qqFvx5vmMXsTQjVr2gSAzqfnjVDyshv4LgjQhi5FBDc93Fk5vf5ZPe",
  "key22": "41JEQmHjDbRbjbHkggmzVdgRYzDCfEHMBCRprWpHVJmJHJYnkLRYcs6iTKYPCgUNixxpn3hrBLuTysi4WXrNtYLe",
  "key23": "5LRZyrq6vRraeYFE3tQBmkk1uiWTcNqtXmR2oMuz63XGCBp9KK7NbQojS3EPE5SBQtKcVXUWbMRrgGXrchiZkdZf",
  "key24": "2TvgYBwfz5ebpoH8iA8TPdsYz6znCRnAnstK7HKCL9BYAHruUUDum7dRkaXDHk7khsVAyn1bAqPJnQRqRh3Fj12x",
  "key25": "4WLbxnGeESxFgwUXqrDupiVaUdQpo44ToSejRN7DRJDTL96o8QqogRAi17KJqeVC3qJekt1Uxg4nxg1Qr6k7gJQD",
  "key26": "3K2do64379UYbPW4CvsGz9tGVcwx4HtECyFV5KBfaY9yZSQ1m6A7Q89mNnvq7ZDm8P2fJM8GwB6qfPQnWPHLnNpt",
  "key27": "59FeoECVcTxundKJjzxJEwM4NVqd3e7UNM5Hif3SXLpUtSkWHq3gBZ2ncW723X1YTh3mGBMgzA1Zf4avSPy8RVes",
  "key28": "52C4xmikay6dgtDTPBeVDCeA3UkBZhZ2aDRQyKPTqWa2ghUpm3XN15Stk5DpYYmWEtUeY65xSZcY64MVj9dUJeD1",
  "key29": "3nrPFypuMvTsrArEkHn1nAT5iStEZeLkqF8pqfbjH5Cxmke97ThqbGAmjfpCSpqh5739AN57PCtP96oQNNYBjVch",
  "key30": "678KWHUxNecx6YRAHmMcHBR2po2QwbPuFNKbdraUgEdfEPQDfYZ9ZpDoPcWeFh2rLDnw6rNzqQR6wnpanK7GU6F2",
  "key31": "3FsuJ3EvXPHsKvL5rkxRZ6A2HPr4LfBZCAdrbsDPJw4BnyFTKTcyZpLxunr61JdaGmbQ6wWGti3m1jQrTys2Tgwb",
  "key32": "FSkMYLCtGi8KprwrRsM22rdyrjoUBxAPpZdcZiKebXwBLTvavFXk2GDyjjc9a3jgcKLZXG8wceZh87ossbQ3H8o",
  "key33": "3A2ec83qBL5xkapxNJ8wqrCJZwLxfihLFg76T9G9bENr5fkWgugReLkvV5pPRv3CnCbksrDLZymeGFjd6xNPVcsL",
  "key34": "4h9wZ6LYayGJN4SkJr2B18172mnLEq6FkJJBazsRjAaRDX5g5NuKeUHSGLKKeiCfRn4mEkQrb1knzEGaN6dpakjs",
  "key35": "5yAhd3kZ6JDCWRVm7ppGAvjvW239PYMT9aVJTXD8GGttq1LtozcbK1jgGNCRbAQhJpH45SfSMpXjEPhj73P2tDwu",
  "key36": "5rEbadM3hXwBPZLszjkb3DLNsy9ioAej5EgJAM3LbndaDT7wDoSHAbUtBSXKEN31ihuAq6qv1L2MCV4pMViMooPm"
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
