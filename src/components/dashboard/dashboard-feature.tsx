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
    "28ftC6A3SRXiAmt6CnMdXxvpM84bEv2LHtTPKvR2yHDm6Ppb7KJVCdr25BN95WGqSLVSPYvbngH4UqrQvfTMnhm8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bZhnjefveBEygPmZnAUPky3Y7wNruPDjHMMYkh6WCE4pJErtJHPRbxyec5qmXp9GZoR2YhL3fntV8ULcY5baymo",
  "key1": "mpSj8E7wAabQyZ7p5e1iYn3goajcmpDsowdTfyq186Y6VebGWHr1eDgR8aETq9mvM8bPa7tK6TbeGyZHoPcNASz",
  "key2": "3xFh3DBp4htKtSbexBPNpv7X1PQMu5VjwqD5NdHqDv68ijq94GD1dv46r9worbr1hagTxXfd4EbJWAw6LHu4PYiy",
  "key3": "5XrhubXagMU2RcWN88Ch84N8wvJzaAP3s2RKXKrujJtmcPQj7bTg3zsSWGLLKv4MxH42sMF82ZzFAK96oKN5fcYK",
  "key4": "4wgq276ydWZ74UjKse7TNmpvpqAe21MAgewiA5dxz9zTWfDTQKigXbtFPS3Tmzr3AC5YbdzGdQccBhvx1oAkKZgU",
  "key5": "HJhroaHFnnnW9azPmzvPqnMuDoU8n2PrDGEwKcD4XRFQgL15WGv2EoL5E8L9eZtsUcoAmkuSDcWnH1xrBGeLEvK",
  "key6": "5JxTNdFLHoeKyJAFJJ2VnFaWremj3XuidnSXZAycpgX4c7djhs6P157MapZF8v9RhDAwJFSgGXcdf5UVWkoBFuyi",
  "key7": "3gZsoHqxyo3Bm7pYbGFeaxUNS4zGp8mmkxcJnr3wtkLtuUJZq7nvvGExP8oCzzfJ6CboB817vPb7ZF51ivcoSR4T",
  "key8": "4GnsyD243hoMfcaHnSWqbxr4aRRMkJ6ghbkHoGt7pnUqRtxshUT1e2dfWytBXzCLhzbqFiHrHwsNPBkk9oCkSWVS",
  "key9": "3EX86K8jhfSyhLKYp4MpgMVwhEwvZXTcsS4PYJNWJozs3QpYCgfvDz8xvx9W42xfYQLV3JLTKK8GkKdfKTCvCCEc",
  "key10": "4eozZcqRT572SYwv6JLuRH4Lj2wTqzuWEGftQKchvSSAHy2Rwg5BMVAfroTzG5vn7ULL1eagkkLEND3cdGsmLFd1",
  "key11": "4U4x1VUBkeK6C4mvSQ1VeAVVbK9UdgxdX8gTVSAmv8rCihnB4UmLtL7Ub6iJTXRAmionTbjBiERhLRMkwQjLHvxN",
  "key12": "2yLQCUeaxYyWcMF3HBuMmFkSKWVxpqQuoW64wNwsXLAF7fQZdC5gWywi3d396FcbkxKpJ5DxDSZ3h4McJcfYRvjp",
  "key13": "CihKsqNC1XBiVVhLryyo95dMarBdWwUe2Z7WoHNg1ZK96MkjLrq83BbTwmFCojvWYjY6LDpYxxBYWCYepr3ZSdN",
  "key14": "2BHVvxe65jvuoGpy5aBEw8SX3CQKVZx6JEuUq4UujPDXykaaPfEPRnTDZyA8XExdhiNxmvnnoCPTQ7xTSiXW8vgS",
  "key15": "3XKWqrBXdtyFRANsupkpQu9YXvwgwSWPVeutUipDXYeQTK7eH1ffkT7DQcvCg1ei41ifdUPjC4gvQDFnWxTmHY1b",
  "key16": "2xHH3fnVK8yGaPHLwFDfZEzwni94CJUNkvdhhkQmceHwmZj9wxVstvA3D5CdX54YZ5rxrc6NHrhJabosMaDrgYDg",
  "key17": "2UNd8HR5Pgi7RhV3WePpkBvW2QaX6ckdJSjBS3yQevpC2RptUkH9t58J1bN24KYcfUGmTcb5jdjpuostM3URKYXH",
  "key18": "4H65p2sox2k1Q6bQRL3nMVzv3wL29BswwbtgBxVZtR7rWB5V6e7CMa9gqU3VM7dp8cZFHPX4sZFk53VtMUGa3jng",
  "key19": "3bw14c9xM63ERMZeE6HH74Hvggii4EzMf9w8DEu7jKZe24GpgcJ3KVuVDdQoHeVGSwqMmNArUtKHMDJCZR5GbcWF",
  "key20": "coa54PXid2J73fap5LF6AAYVsNvBowotuAnkMaVM97GSoXVsxBqRinvSbbX1gFhidHqRCkQcanEAW6BLaEhmMYY",
  "key21": "4hPz78s21fv1paDrodr9hEvAats9qToQtTnHEW1rZB8WKPv96AX6PP5X8VQzXiDDXurebBXP51k4Uvdv4NxZbMjv",
  "key22": "35vYKUxCzJGdKMuBqnpJxASkshoKt9GDrgk7Qh6bUaSF944pqVR8wQSozuDvbTvykJFEC156eJzMxf8kXg19tk4g",
  "key23": "3Nm5b9KLVP1LmtPS9UoZgTL4SaxD2BdXesGwMYi7o7LSfRDHHoYt5xJHsbtxPPgEgFnW5JYGk9odq8LXugBPxoBs",
  "key24": "1aN9veKKsXMZ6pN8ikvntvDydShFShFEou3xmKonzvz99HySr3reyUU6tpQBL9HL475nSuYZajWp3veewv1xqGM",
  "key25": "42P5xgxefVnkMDtxGPY68o7j1oV4hYbKENBmvrAnkr3X8FwA4sFHfHpkJeqwmcxNY233xnRQRozciAzzdQat7FiH",
  "key26": "3xLzFgh64XoYFtNPErFN6ohso9zUTkvj4kJBokSyVcvBh6C1sv7z4GHsiAsTF1FYoAntG4LhArQQ67SAmKk8yHYm",
  "key27": "53JCSm3bb7i26fp6bpqbPkW17F33c6kdxmEs3bvqkNeyUTUBfmTAaqiNzVTJ1Xg8GusKnAXnMUX27nGnoYYHNHS9",
  "key28": "2z1UeJMEQ8v2DTLYtmNNob1w4AbUP6iPxY5WsM3ocQ54CCdDwKrx1LLgwsCPWduCXmtMZnHQk9phCMGXJRZxm4De",
  "key29": "4Q67NuQDR4DRW8eu1qaiiQeP1HazberJnUJhdPPCXV64UaLtNzACyGdX228Sm3e1y2vZXwYPKS9oEsgeGAonezEn",
  "key30": "u2tYs86JL14iBTkukcU1vy5pGRkGHQb2LgWwdXPczRY29ta1uEuMWB8nV4E8goxoPTwkb1X4uXJYACPwtpqn4M3",
  "key31": "2bdwb82vminF5oJqVJbRYWvACphn5KTKpqEbKc6U49avAjqkcbyn1XeRjBNGHmkvwE6kAgmBPQxsmqBwhJeW5kmz",
  "key32": "3hdYRjKBJRrqAZBPwg2vLbmbyTttppHty1S7RCRtdttz2KKUowrVeut5FP9W1KgEXhrdUETtQyXZqxhmhncynrsx",
  "key33": "3xpgWmPKDKSs2Y7PWQzfdpV1dsDq251wVMD9fyNmeahrXSqzXocTEwvLVpBZP93QFh2A6nhqqrC6gzFJwvj5k2kC",
  "key34": "2FoV1vAHHPPTuhx9xkUYhavRsChLUd3SoQi3nQJmxjrGK4udsBxJrUiS7uoWmFqWbGeKhK94fDzF2Ay68oDst1az",
  "key35": "4z6SdnxQ9LbHoW5fnpBnNXtLXsw16Zp7hXjxZv68nvkfgt9Gb2ccJYseiuZxqDVBWibWmrw8JJ93s6ANd44ehM6P",
  "key36": "3uHbJUNUSrrrHSXvUo4uzq8doFcG61fe374Z9WqJsH3cwAFuUx9HNLAxRBLXFETLgZBAQ67iDmZTSGboKsVj5fam",
  "key37": "5d3qc9kFvvoomndQdPnuCTFksyCxGhmU13zAb4z2pTPjm88zr94SkFj3GZk9WGQ3zfBWxWsYpD3CEsEjbcW17rFE",
  "key38": "mfNij5iKgC3NisvtZf1fX5amWAjtW6arkWwJPAjW7AegdPJzVWmKL1RkffLLSKGjop3rzT7tWP9weuKRwx8uCJw",
  "key39": "543uZA8B51Gy2KzmYn98PPW9HWBZ6o74UPkiTHsEmZnxVnyiZQBeoShNFtNj8bBpoDywJxCrBoJwsHgWLxBeumP8",
  "key40": "uFgVC2mgkBSzSyGMYDCsEmL2JVyVbt6nFpKDmgEAVzjNP9dtFAQZpbeD9Wd4TBsrSJTVGaMwvwuaXQvdLLS52rH",
  "key41": "21z4TJN9VotKj1HGWoS8xPvn4b1F8ydL94ZiR8x9ivEUdzbxWd1mjLFZ3fBM9qahVcc71AnwtaabY3acJn3CW7zL"
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
