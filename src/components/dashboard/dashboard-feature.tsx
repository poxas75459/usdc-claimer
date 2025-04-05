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
    "YYFWzhgqmg5SjL4NtRMH3bLYhLjmNyqb7vcfQKHEkVxdSzjKGeHdDqxvS1eaNDQ9jiFpxbruhaLfgpxQTG1omt4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vDUvXJmiGVhoXV3WbLre2tNeDVXozxthouXBCCPePGbYPNVJiS1dPw2Wg6GeK3BezUZrSni5neVD7RTK4aoXRM6",
  "key1": "3J7uCfZE1r4gyZHjidakvtCK2JyQ6qaphnBrN59MnxDGZibuL1RTPRPuPHdSY8wBkZB5T7nWb41CfStaBK4PE5dR",
  "key2": "2C7Nv4WRino7m1xJ7J7V88Ef6A5VdZxsH5ZNwext5LJ3pbewoxd7DDXzBDe3RLJpBfrHkjDRSoYaehapBH8zsuDV",
  "key3": "2cmjFDvCBCB1ESqo4M1Nwwr9ekYKEVtkzAK6yzxT7hNsSZ8aUvBQhSmyEPmGV9v3hfybEEBb9FRWHJWxEJxoQYgx",
  "key4": "3CtXCzRvLz4jdCn9e6HRF2w6RBA59SW1g7eh2nGHJoz9BbnyXkNtMZAmqVRurtbXAnSkdsVdqpWspUvmmxGArUJ1",
  "key5": "477sBviWUgcwUZCmUVEQUTq8voY1GBFSAnVqvJFsuSdwD9zuVNcYc1Vn65EEpacQpD5AdXE2Q2r1jpBzZNf4kgYA",
  "key6": "4oSvF5x1ZDyewwrmhMFxNbjYjQWZvAgeR8JMVXqFQCxKoRgXU6CLasetcEMeGaNZEBuJmgpndABUyF3cZAKvVmoE",
  "key7": "VBUk3mixbHej8zhEGUx5ycZoQRTVbms7iXagKV3bhWQTTFoFfR4QKGB491hqThLBfCFPxEnSb2PofXCARZ6cooN",
  "key8": "56RwGp62ucAWVD3tqB4P6f27i6r9opsKZ4ZuTcbSZ5prAMxWEkoQU4dKpDk3H9vy6K8mXeX27vcknv86pymvYs4V",
  "key9": "3AdZpWWkp73Pib4ooe9n5w1eyA6AREXEebYQthSP4xoeuuc95cQhjz2cba8VPivs493buc1FwbbBQfjTy2ZNrcAS",
  "key10": "o6iYY9aJ1mDfcTqmz1GEhhuDnM2PJHA7DepNxnHZDqqvbjyndjDMVm6gVA38gV2GwUKX8PtVous2x3j6FHcfKD4",
  "key11": "iv9XZV9wry4DT2hwTVfS3FMgCfK4qhbQz3C7dw58z4outhFWWw3uQcWXDekFCeNhi7JHRMajTomHVYXi33b6Cnr",
  "key12": "9M9TFrjNAU4wCeQagRZ2gxsbcc54WnTXtSNpcL7GJJrYJJYGHz6zbYZNcWtA5pKaoUXXVDPTYDHLpVyCdkeMnNV",
  "key13": "5Aa88ePpfRXZNQNJ2w994H5bPWoZqXxLC8qC9YbxGrnSu8MJNpL62MvcGovRmMWJ9Wo44B1nxzijefHdrMN6jzQh",
  "key14": "FJk4CGyz3QRFTC1zXvpt1K3wyvLqny3YmKV5KbsnsBPFg1opqEs3YZfwRupcJUMR8hEpNk1vh3vRU4JYreqUVxP",
  "key15": "3ka8euSys27TNK9S8YQHzcSfJEMNvn5F8x5cyv2362WHKYVuoQY4n9i3Wu3ZiVnnNaM3pFAfVUWaoZiPi5YoLtNL",
  "key16": "3fjskLizc6wgNyWFQeTDRsg456UTTp9YtCwircs8gPL8idtFc6uhv21PkscRZpEqfKgGWPtfLG4NmDaHWzpesdfB",
  "key17": "2XSLjXJkrFjcob3DTbMadBWtXTwX9w4YqwBDFWGrG7vmFkS8Sr8ZWA1QpSRXfJ64biJiZGA97zmqRDktgjiSm3XZ",
  "key18": "3Fn7vB4hewKwnGAniAaVNyPEbXaZZWGwitSdCQWAEqVJn4DPMPNQtCGrQpSt6BXsftCucxQ1TEGZR5yQQxnJw9pd",
  "key19": "3ADk6YqQPA5AcChaRP2RUfFnp8wmnfD3iTezeULjPgWFMtvUA9djDM81tdD6s4uEiAm3rS1WYiKDcXCUzho29f9c",
  "key20": "5G9NSbZhPeHBifTFKJ9ZnSCCQBijhpJa9QGgGTwtjsN8HUQNa5nAGzCjDZzLMSVph32CVXJGdtguRxXh2yYnjbzA",
  "key21": "3qiuxYf1pMhYJeJi2YZZcTUsgRooLVmNsjmiBKxJxTRrAbRkzZAdUh2sLtqhAKapQ8SsdS7hCrs4dbY15JjEwyZW",
  "key22": "37W88bnPJtDgwBXZwUhKWWRsnscXK4p3RGRiCkhPaHuhuQ25L3Yv6ZZ2KCQynjTarqwdPZiEWaFxuaZ1cjKaMvcU",
  "key23": "jqfpiayQN5G4goX4sUjus9FzYTH9dgVmfjFxwMZ9VhvRRibetw5GcRzQSXzKTEDvqQJNptJKvCDT1c6nD1kp1uj",
  "key24": "64TYiNnnxp8aoVDM9qFj8haqBk3sWdcpq6mHrZKyEpyyYoMLDW8pMdxLdWJo8ePqzQkyL9xA8zSNgbSrMjohqJef",
  "key25": "3UopsjWYyMi8EfTsfi4mosNmwKU9yvVyJC45j8yQ5M3RCJuDejq4qVt6stETsZ1SbwGUab1ttDiYfw9W8Hpa7dkM",
  "key26": "2cNZFfFgasMXTR6TVA88vLYZdG8X5cWTYGW7aSQQiyChX5FAo1MtotZUGioVQ9iVFTPjKuyg4Zp1bLMNQKdnGkfJ",
  "key27": "5yjdr1e8K46uPa34vmruWUvhcmsEkA7UhmhyZ56mmA5BCyizGkzXGi7Dz9Dyoh6HsNPLyP9u187UUgjtF7i1mugF"
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
