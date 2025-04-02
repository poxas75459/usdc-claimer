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
    "4A5v5hGVkFSjcCkeHVe14t6bb33H3UdcnwKpxyEd4owUw5a3JXuKevyKtgnucfwa8UoUp5eUhCaedm93QeaSdcNJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SrKpHRtsttrFzZ1xhiYdJL7p13qScYAJ9ARbTFWRTazPrffMc2Au2C9tPbgshGfCi24cyJC3XMzZFZzXq26N8Qv",
  "key1": "5uXq129dRkJYizqfBgqmR2RFRK9LwEsawCYKC5WtGUiUgFbRqoxK37qCeVvwf6RLRvZAHdHnjPzZu6dsvHphQgjV",
  "key2": "2kyfsAThKKNaQr2fihLJwwRyHYMRW2Nxk213HPx7Rb4WKE5MnYnXzxi2VFMW77TBrgDNr6xviyP2aBEqSqNfVp6E",
  "key3": "22JW9VEKhZUWEerAFCa5iboas1KWz3LgT6szsuxoFuNvv6qyqPe61Md6WvJjKg9hG6RJ2Up9ixYSNS7zKa3rK8Sm",
  "key4": "3YVTue8qc3kz2LpAZZv9NJw7meoYBsFxX12KMS2vFVWw7GRvesLH5n3M79ZzSoWXwTkJogE3NYbMHRGyer5nZJzT",
  "key5": "5HfYxCyXBURyysrivCnhkN3fRUJXVXaAY2bEGr2mcKXUDsASAzJie5tWmzsQd3vzWgKEfYu2GaimyPKAbU6CDBgK",
  "key6": "39vpuRguhVwJoPvQQmLMzvoA7jGcHCUPXQFy3s1bfnG4dFgvVyGSRB7bSx3L5cRRBrZNYk1gBdnSUCyEd6YHmuxa",
  "key7": "3GXtTX6bnNZfHV2F5gmuX5xxAWtg3z4PCkuvgs4DSkNqePgDLewcwhdDpr4ESLxNZUgcEb3viweybr8qGUtY4bPL",
  "key8": "7EyH2G6jiLTU7nFpr1jsgSibYWsGPVhcQuhJLh7gP4qwJMF6fTfV6U3X92XKikLf5gfejpBkoYoedmYUY5bkBEZ",
  "key9": "PvLmHzbqzNoM2R6P2eVKoecxRWztmu8MzCMHThxAXLZGKARhugnbKD1CiAWxeap9JfP6hBgHwQcF4u2GDfHUGDG",
  "key10": "5BvXfsPJFDqKkhKfxZm8dW4bNKFya4Xn2WU7Bb4oxuYRhnNetwccQAaeDKFjHEHJRvgqCrpUKLw4iZpEG8obXxgZ",
  "key11": "5bHDfRBBcZevUWVmC3GNCQ4mgsVb8Su2j4xR6YKafWfxbMu4LbXF65vsrva1KhfTKQDpgiDhkzw4Y38weXtKbwgL",
  "key12": "56ibz3KYjzEpGRpU6P52fur8McAxrB865iFAs78HUVBRY4Trp4fqE8wPwJsfX7GuauBij1NfpLNnvHpCXD8tun5D",
  "key13": "3hkKNZktrXgq35JrLr7yM6k39FanxL7Kp3KJU2gXSzLujemMNyrechvbPH1Y2sqBVZVPXRh7ktgYU7YXootiW13P",
  "key14": "27CdbcnbVnKe9XMkDfH8SMKuuVZAf78EJnPdUePMjPQzsE7WonfsJHPfippBcJa7yiVRiY72umSEm2h1BkSNdSv2",
  "key15": "3F75yrag1KzLEGdocYB7tycSuahNuGfaiyCxUqLYbta1FefiJALf7W5fB7yYKofgpRD6oQeHEmdzXY3t37fRLmpd",
  "key16": "5Wh8VFDr3rEQTdH6x63mBuxUNyhUH9AQx1KX767J7efqt7K1zbKbe9ULWhGMHJfCNMtvBs2qwyB7u4t3nKYkjcWX",
  "key17": "1RqrLiST8eiDxV19fZUWQksYzHhKaVj6bEKiqcyZ986i7YuxKqz5sQYa1oMVZkox9gz43vLE5xQDdVN9dzybFiB",
  "key18": "5YPyfe8sUAed6oP15PPdYMzScgFDBtDN1XUGNfa2huc8n6LxrJ6izixQG4Z62N9nVP46s1gV8mVZEV3ByPQtKA7w",
  "key19": "T2NUib3zRYAGuMGuGkFmSoibvhVSTVTwxatoX77vD1y5Y8s1ihxG7PHFAGsXospzd8kZBdS24i7Zzy3GTh8DqTC",
  "key20": "47T1RNkPXm9b4XAE1wjjRkBoFGjv3AfQh5ZYuWWSw5hTc8Y8oMxVNE7e9YwHezyKHKtHptWrkbmKTA7reYLUEAUm",
  "key21": "5weH4bozUThdjxpnCo2x9tdRGhc86A2QShkYB4JKkV7ZdoxZ2zXiSbpvWkiLp6CeWSHzqQvQwRmNVt8HuUZcuNjs",
  "key22": "568FcptXdGL7TTVU9an5tmamzWHgVf9pnDiN4WMbqpfm69zqchGEzpwwUxuVv2aQazsxa6bmrLHADPusefVox7T8",
  "key23": "Be2Zm28YgSF9B75RGJSuJK24kPY8WUKnocM2jghap1dh9EuWFcPAWhPKAga7nZHv9FXKL7E7yj49JULQmheFkHB",
  "key24": "4T4mq4hyWwVYSfjQCVeBwWJf1vrhJdra8fHuWrdWPikDeaDa7s9dJonyWaAEm8HCqhVWyg7Ek5of8CTYZJE85Uqt",
  "key25": "44DnGeRZNx9AUr5pzJTiYVD9YtD4zp4w5aJL2BpmfaLpwrV9BSHmkqMqrgBqPVe4f5PfkAacT8wwFJSBNrHdk95Z",
  "key26": "3PejuSH6gJ2mHaygVcgx1jMK9h49GcdgjX6xBDFjCc1aF7iQVgCaEsRKqesKAp8oY7cMHb91kiVVhajZwRxH3ZXe",
  "key27": "4SCLAff3NQqmGadc2WLf7AMS1Fe2GRznf7YWAn2g4ZkAJJZvhqNMj4ta83BRZkrcvn6Dmg9KQMAQtoMDjbT7TAXC",
  "key28": "3BSCTmNcVeiaYo843y58c8XZ9hj8jQ3n81bu7SiQgYWpQSZ462z9s6Hp7wmGQoNamTea2v6NBVS2fjxuhKzGMT9V",
  "key29": "4c2NeRS26PU9f9MGvbi54EVzbpB7knaeGFZ9YNpDXKRTFgBKUQxVCJz6mQ8mVuDZ34BuZNUEhFVatYjJrMAQnsCL",
  "key30": "27Nm86Faj3otNtZmAXK2svuF7s4qx7dAuYvyGuzXv8yPmVXcifkH2SSSTRGAJPKbSonFFjFypGEaXGrzwGRwW9nZ",
  "key31": "a9dYr6as9GYTU29RZkN7UYninzzgvWyxQsCeY8QfTSnYdgE8SjwimJBTGvCBcFBGdFmPqnpWkRPN1xAtMd8vuHo",
  "key32": "2wTTWgbJpVZCLze49w5QyY84BZU9QjAyiToA2E3MYN5vGETioUudGm1CeyCsxRCiL9MWBD5Uu9vJWDVUJxn1LKhc",
  "key33": "2G97PQpzMbKrgPefaA4mqJXqGQqZcsso8HsXYp6Y2NwLHuySMhy1XeEW2KxdmR1FYrsewKtKs1qLkY7HQNUzAg9L",
  "key34": "2UXDNKXbRog4PevZTfLJKvAtQaoqGtWBrzkVRtKWk6H7w1j5SjcheCaqSdGZeSRVwdJWkGjYJge9ZMF4SBTEK6Px",
  "key35": "X1QrP6HB6R7eXztfzEdJymboJhH5AHM6jB94Lzt96HVStbRf37ZssdYVUzDnPySbuiqDRUiUywqzp3ZgDk7sMCz",
  "key36": "4HM1uHm11mqJPqk2RCxzbjQxuTYc2gYv8hW6NW5Y3YbhFb7p1iwfoEhaNmRqT3cZ4rUH1extEJcyuEcgHywgsh3v",
  "key37": "oPN8tVNPK9iR7Zng9BGjzuXx2fmPdNKUPv884ECobuiHEvcfXBGBmybur3VgnesKe6eGA8Bs5JjQRXUgFzamZZH",
  "key38": "2x8b2X3Z6TPZhr6MgmJyfoLmvmyXKjDYvg1LG3Cca3TGvDaiHKUZUUsCMKTDcCGEwAGReeZqYedVK8treGY4yGs8",
  "key39": "2qLFNLm5vKA4j9z3ZmDaDFLVMZo6vnmfp6c3NqswuhqkUydYmRMRbHzpVXNVR5k34tFRFZnqqxU61f81SfXD38fq",
  "key40": "N7bRTECGB6ZTBLC4U1WucC4Up1k55dbo7CHZaFm5uWRW4qrLoQJf5qz9Nhfsj34uVJ2scATyfL3fxbKYjF9CLA1",
  "key41": "5gszQhKQ8nLGr3nP1ALGXEToDWNw8pVQLdXQMXui96vwGftAnzvNm4X7G3kEGoGCs7zzrGarNMSMFmezgdULj8kU",
  "key42": "2Ednw2TuQpRjb6VrEXawDViF5jrrLpd7HAKYd8tXVez7uWbmeMmnP1ngSk4DyJoNAPBLVgJ56mXS8Nby6G92serA",
  "key43": "C2Nrm38Pa35mGpTxMvGHbYUMavXuwaCBeV6ktWCzeETEyhp54VDhYHiHCxicA8fi373FBgMxnJ7L34PWAUfrwU3"
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
