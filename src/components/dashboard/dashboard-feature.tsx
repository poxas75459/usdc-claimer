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
    "3qHX8wuPs1md12uKdwU2kASJ4or5GVgmTyTwyxPbK4xq18t3ammoG9qmrPYhdXosWy9KgRPUgYftgNbCZYa75nya"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qQWDATQEPbdLa6RXro77nkY53xY7wyCW1HAACN274fKozhNj4oLsqq2R5m3nfkFhngQtkvM8f5LkXx2CPihqyXP",
  "key1": "5xft5udCicoPfLwwE3nmZnVMKT2uDvQisxsTm8i1pMSNaHQrTXqpb1WMaaNJyNn6P7Yp18b1SHdWE2ys6svHkpnq",
  "key2": "2M8mUQ3kUJkGhiNSTFNnJ7fykrxeFu7bDYmssu4cGeSjs4CGGcwfey1fjbbrBF2KASyKzFAeZjPSpaidowv9PXU1",
  "key3": "3svL7JqVnK1vUtYxBF9A2rBfLXGFAXrrpTUwHLypoXMdj3hpKSK4BLpMDPozDoMzZ4jJk4hvUa4dTHyCfpRcHoMm",
  "key4": "4knsF5Hb7PtycayWPQt9HbqrjzpbsP2F2Gvdo9sE1XeghfQTmRaPjLi2aGWMrzrptiW2ecpAHjGV8HthWp5fPijz",
  "key5": "3mMyeEnp3EoKwUtjBbqa1bTuy2qYybieQkMozQRtPJUkKFYtWGA764zpthHLHNtK74rWivP7gYWxdmnkkbXj1sWp",
  "key6": "4m1oxxBUjExys8YwzdmZbkPR4S6DHHsubbuJUVChsrHyQ3NuzBwjST249ak4FwrLKQVG9T9PCB1HNJNE5TmJR3Ch",
  "key7": "2xXDiGrPGenwnuVhke3JkZzEvxmyd4x7FvhJXsKfCt1XFcMeXd4ZqkibqXx6DX66yErKSwtYgHuwyVYSX7SVRT2m",
  "key8": "5emPmRepJXpPAb5CkCtaBUHy7LuXM8GKxSvnKfujXpbU637u8QAexd1tz1wxQxRefjPPC2hF5UM4uQtpT64GHco4",
  "key9": "RAZmk32sxjvLaxainpZ7w54PzP134qr9cZEmy6KyBri2GBjoAsXR6iUNAUsqzSiNNj7J2Gfb9fNRoHw6H4mbm3R",
  "key10": "7LCATm2kjYjHiNNzZjptdUsfPMXmpQ1navkif1PAt6yaSxsoXrctk3QG8ps3KTW48Lwgvn78XZQvaQQrJyJPDMi",
  "key11": "3z6395Kapfjw3hGVzbSKkLJpz4g5GX3vCZz57sUnJB5p7Cw8LcoYQz3XyXAuXrAww16kVmQJVfqisrGXoELnbE7S",
  "key12": "3kvN1w124PbZu86gSVQsk7Xh6prPNhJzXitmaWiwzJQ5jAz6upDVJ5rjgLFRkXTQP4a5Sg7bGdEgeQmaZzUyRbue",
  "key13": "3kWi8T54u3Xj6neCDQS5CUu5nQJjxdqbnzFQc3jC2erfFE6MspfmzLvdy5Cz9fUyVkWVfFvF95DJk3y3q3tZ42Rs",
  "key14": "WSeu8dJx5XFDMHPdoekQow9vXMoThSCvQEEtenuRDT1N3yBYGQnNVcrciyn28BCFjZVTubq1guNfYcAMkUELwTa",
  "key15": "g7tDiYdimESx62rz2g2HZVd4o75afFXS4RzieoEWJvkcHHDu97SqSVkUPHuzWYNc9W4tCL8x7rrZMqbYqxr4Uht",
  "key16": "45KcEdMVTUYv93vVtZREG9q4j4hmEXekeiArJqNHvD5ZAYLgPoTb14eRf8vvkRSPRtPydYEbREo7RjBjWRphmTcK",
  "key17": "29fg2sTju2A5yp6q3xSjghdKKv5nWinXR3r6cvGpgyEvNdGkKLdxYzUcYBqGjd4c8g2GWeSwRNygJkcKpfgCtGgA",
  "key18": "5x4PAVLPGDG1CBpvrxvyYrrJcPk1Xqzmuq2uokWdUziv5w3qtcibcyPRmrHUNupWsqvbucvTMQC5Ln6TBCQfdWdm",
  "key19": "i9hjsXS8QbrAgQeo4nkEq9s77nmExsaRx2jXftZMAcAWt3n6wZsqDYBPtcDAAEtB8tPoC47XPgoTtaFemcjkXxx",
  "key20": "28i2D8G1sAf5xnDjaArLx1mEM7J9Pmj4rCXUYJ7UAjQEuLwXhMmc4Wb4aGJBoaHU361S3kww4VoM3P43GkkAyJBA",
  "key21": "2t15Scqi5i71JpntMmiRirn88Mrs5z737tBprYhKP9W4aNHWKXciJu4e9rrD3WsUPaJUGkNuDrDUdufJi2sHhT5U",
  "key22": "2ViAJ9dGkstzSKqaYWZLHTm55imTPoPcSDvS23k1p9fB8834bpUQ95KXQVQC3JqmXNpZHRTuGoWnSP2q4ASNApQL",
  "key23": "978PEoRjGnbJoSCwMWHfEREKERo1whLfiACwBkMnPQesWwieDTDpko1tMdDNtNzm1amn8Qn5m32nb4gZLgXBz2V",
  "key24": "5pb1d5hPW1T9Hv5KNGCT6QXkcFM1QRcV1kREKeQG9reRKRdqhtHfRLPEZh49AkGHKYFrXFQHtE2gxaoVZYLdzYNb",
  "key25": "qin1cNj4vvFDqBP1ud4PHNzGrG8wUv4Yzpebu3Cd6DWNGS2PUz9kBEVWZnf71yJnzwe27ztqTEFDgx8k6uPNsEa",
  "key26": "2BUgEKqH6etsDgqQFZJrPG5VE8V5oFr1hkhSHVAQji3aoCAA82sno3Xh5yx3ZoXRcL4cKCEPfnmeBkhiCSgomFzw",
  "key27": "1aH9dzL8iCvsH6FQfYnrBnc2aJGGHjMFpbpFAXN2hcSSDrviCfqcbMKqHFe5hhdjnx8emvE9xTc7g64ZA4tfaud"
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
