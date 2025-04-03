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
    "57Lu2gF2SHjMFskzJwxQsvbhtFuGhhJ2biiAa3b3jLWBjczCuRc1RCUVnF2obeWj45sJDQs4kaovhFvBQPmZDoHR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a7cokFyDuZ7w7mwCH1Wjx8x2h22Nx4LVDtXa3VRxRtsMTjvGaaXGDscwpWUc8zK2kccvgjsen9Z4M47Hr3WEzpc",
  "key1": "3BanXfonTcdUge2Dp6cgFdFtDCFXLHhBrLKmVXrPhXUissEv6WdBUwfZByqZD7SsBbo6FzqtYCoZsjGwHX2x2Dt4",
  "key2": "2czt1Nfoqg4u6nooVRuK6EGtNi9WVh5VVnifxo6tMqESoWCsS1vu4JEArXedQttFQS4XjiPm6vgSobpEQaXn3TG2",
  "key3": "DcjC4yNrxqLrx3ZPPTSMGGN7gxEj2xPyK28xbD7j5Rzi1ALYXiFWrEUAf9obsZ4LeGP7KJDwoj7uLoyfYrDq3j9",
  "key4": "431e7DCoRnpAMinA9E3JrWquzHqDhJMPkaHnMZnH6ZY47pQ2LkkDjLWNgqyqfG4zkwycUM7BnTYu1YNnRvaukrCN",
  "key5": "4mmoVgtGPhFAcXt7FsN2KzxydJgcEo4cULuukmRQ9jSvPGetuJJXAXvKfwauq7oU7di6hbL4pP9R4dBBgYrH1VTB",
  "key6": "2sWrC3ttmPWJi842FZtsxYzkAijXd2se2fLECBbem3wX4P8GEF2Kt1jytZzphPrXm2Ggjxz5ahk6AMjf8xiDZBvZ",
  "key7": "4VDTVtSCybqVpRnEQrYMp335bEV8t3pyNYXBphMxeM9ezRFH9k5eCchyVC8Q5wYiuDc1JBJB4Mm6YDXgS6wahp55",
  "key8": "3y83yLCsTQTyuB9vuSyu2iokyJcH9udve49ufmBNXZL1ehssvEoUfiAUG4Mvx9foKY1QQkt5JqxoAVf5LHJjPFao",
  "key9": "42QHetSsrkCzAoP3tkRPTrTnL1tBqqBBAVe3rVao4sBtdn7nH3ZahQ5CVPcyC8rSecbkb72nHMhT7zeuznPCDo8v",
  "key10": "5HXyqKrVrWSN4RPJvWF4w29xjVXpaDWLgk4NeQZEhBjLZ4JZkPVRxEG7iom4RyNfZbqbZUBmZJFJbwMjknt9vnmB",
  "key11": "2HBcSncrVNtjq1aJkYWuNW42QcZ2ttrF3WHt6qWzyzqnzCPeFDwYHvMCseAi4d9veTaUbYEFaDjBk2fhstK98mpg",
  "key12": "4XUrzYnCjSXRaAS8JbUASpJfedQkUetAfaq7h1Hrk4WCf7NDq3Wk2tFsLgKz7uUVp89vc5nnYm4u2Vs6mVDGXhMF",
  "key13": "32LTpcuSxd6Y7yCQD3GDVkKvT9LE3kG1PVAvDJAEMMDMSD21YzsnnmoPVUdmLiiQzHtaVaMavBWVpkkBD9GR3Qnc",
  "key14": "5YQVW1Pm6hYNCie17gG5kkEpNzLZyLEHWTkC7w48M4Hk8JRBVrhTjQCh8PDxbTBSR5Co7p4MUvLUuyQM4AEZ4JqU",
  "key15": "5ZJG87WhS9Xxvf5hM8N3LbWQPMKDjTsPChgfkV7i5WvFawXJkJ5dd5pSni1q8rMp1ffQugWLaLQTAMzCMfZbHwS2",
  "key16": "a2EVwvx7YXN8ccp3pSEVdPdmvFhcN1JHGDnL8LtL7uAuNDciQf4gSaQQ8jPQgVhUZ3rk65qPwauJJFTSv5tZhE6",
  "key17": "4SR3s3pHgr21gZCjEgKf7Fz6YFNcmjFWRKmFY5vhuoJtUTZFBM87JaaKMocxrCrwP9ENqHFtVv9u97MgVaD9HBj7",
  "key18": "CRFwfGHtjvkWndiFufepCNQRmH5fFFyoBsT88VASvX2xTCJmLRSwdM37371iixqchxdZxVgxiEEQP9NK6n8hR4T",
  "key19": "5xMDKifhBb3taQ25tC1xg9utw8vUQvT6TyYNH9mniapDqSBhy2ZbWXkGjqAV2fnaxkjRmZZiuXJmxJcwHtt2fo1K",
  "key20": "oR5ks1JSMmm8eJMpnkZJ3wi28xQWD1iqS51GNCKXjhoctGburqHyrhxH5CN3dhneiRV8Kf3SR4bVrE4LYhmZQaq",
  "key21": "2xJgX6ZpNbh5zDUbcennA6gxfZfzeVfF3PeFaBZyAMcLpdeFhLWnURomerFWrf3YUydxoAceQafmRpc2RyJnfMzk",
  "key22": "WULHQMnXjaq3PbSmBjnQHshDeeAcuLsq4mrdPopPbrz8rVJZvixgVsje3sFeUHTbmRUmfK3dZ9h1F2Mza1DWiQa",
  "key23": "2B9m3nhWLz2Ux5xDUp7Xukq517svPj1ffLVrQgCVks3ph43gVgVwPQBizhxVSRJEXmyffWd1CugddcpwAyHhHbwQ",
  "key24": "5Tqrh5xGjUQSLZS4jJGHU18tdE6AjAFjyXS5Jn3qzrQfjpk4YvNaPXM1J32A2D2GBqS92gLkNyMssnyQVsjCEKaP",
  "key25": "ecUnn8xPrEwdQ4LgSWBqrMmUXWdWpGn7TDda3STwTKjMyGGAsB34DSocsCPKECme8iKdc2TaqCFKEg22X76WLGq",
  "key26": "4FpHgmnfcEM14mHBeKSdhkVo6iimNgCndeN5C3SFhwDUXuRWGoqDNAHVRxXeCVcbRy9TEqDD5ddgWA2MY5np5izg",
  "key27": "2DRt4o4NT5X6Ff5KriZYZ5yw1jRMm9ZgtBD8ijPnM87btnsVitbZGptTaseVwPUJ5BtkChbyc7cpazGwrML1qF1p",
  "key28": "42ntRsFbEtQjeTcosSqQFmaFpeBigmX8i32azhP27tjVHxh9mTcvJ481qjSewR7x9xMQHD44Hpzj2XJ5CsFVr6hN",
  "key29": "4tK6n4Db63Joo2uG5tJAjzh3X9Nz4VJeawUWXcu8G1eSDw6BAHkiN9WfzzE1jk4hWiiZahSzmWpwA9MK13rABBMG",
  "key30": "4WfJFt6kRJvPoGfkqYgUpUaSvqpfgAvwzPh8m8nUJwQxy4xn7cJwj4BAcusWU3FMG1kNqmiPcJ71tKvGRQKZHAge",
  "key31": "25VFVnC4AQ3qu2oPbhXnrjUB1bFX4YQfnBVRWzmf6ws4CvKeeT8fFJywQod1CJcjtg3z698vhJyYTBqSzPgM2QwU",
  "key32": "3WauNhxfHk1u4WJaLMS7NJGUTaoXmVvpgDppgkJUjmnz7Wuvk2n3RU3G5a6tk6FWFUAAwxMbwqtLze8QKGc3p1NZ",
  "key33": "2x6p2hpBnftGMkHunD4uEqhpDKoP2VuA1G5GRdYLX1Vvu1RsBevwC6gSxzzvkWNJYmCC7XWErC46PR6bktCEj6Uq",
  "key34": "Zm8gRpWhpmEzkaMf37TD13YY6v16KJbjEwGzeN9NgBaARgQKFvNnp6tUfKwCAYAEyc8ijpVxZZSmnGbeJvjBCxd",
  "key35": "uASCXBZcS4XYcA3opqxakUsm6Qvktyk3ANdu4VHzi1rNAmLVqhrDwvFm68k6LsvPkkqa5mZwBMtWYubVqg9Y2Gc",
  "key36": "GnvUGPj6LHBwBpMHY8jcy6UfmVDU49uyicrXGnAkaiZMfECbhdHVS6FL3QXq3eAtpStHAZ3HKHD7WWqw4WFsGVi",
  "key37": "2xWYtgXJ6S3Wq9EqDFyRcb52wosjdUNDczf4SCB2b4t9Gcci2x3PpncRFu7k2miW4Z1EUcpRWA3VkKP8j3F6qXUD",
  "key38": "5Zr9muzwrTnuV3WrnVrnJajrwBAYzko9KHhV3AviThusqUA6ReE2sQB1kyhDKjwRowUxP4e538suaVj13NbuBCUr",
  "key39": "2qdDcmuHy9egC1UjB6kyGj4ddTDyWhS3DU9J51kKGTL59WKorRDqzprB43T6H1V6Nd6GwEKzip4U48NBhwfifTgU",
  "key40": "3jSkU5xYHJNawqqPF2Vi7dLfVRmbjyNZKx2DoME4DZTSVzZcsxU4uiTz8J7jDE5w73YPqMRY4N9TbGobscfWzszY"
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
