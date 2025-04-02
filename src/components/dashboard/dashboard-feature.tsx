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
    "Gb5GLnvu6HyRYbK5GFykBnktcQC2wqkqGYDmiinAguFqBLyGghCop1UMes8E2bTHvhvYFXSkyj3A6yh8DV5mjBv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HWcAz9CYAfpwj4PFXgavcQcfPvBP4Qywu5A58EQxoaGvJtkzBvrsQA7aENG75U56zCJG7H7CXvtGpkfk2QEJzx4",
  "key1": "2ec2aqFRPvjHEFTi3hEDhrwp5qwxSGzmFTyfmDuaQF36s9g2kUvqTrZLW6VzzD44GrVeEd2iENpPHF97TTVuvN7t",
  "key2": "4JQBiQT2dZ8mheUw6wSbwP33PqSfcBYBmdYp2ehYt3kpHhJtu4DtE7PUuMxDcwJRLtELXrQhH7V9zn3HAwTRjVrW",
  "key3": "3y2hX9uC2HZD1La2vNouVqcFSDxQ2t3J4hQdLGZdVWdY7WKoe1pnmwDCM6VMr2s74Qh27WYQD9NTWSRbue86yDcW",
  "key4": "67cBxJE4h3LvMRGq8NJArMgob6ziALm9VzCTSUgXb6BisfQtjpdC1wAYiqkFL7FrcBht4put2YQcF5KxgC9uVsEP",
  "key5": "3GByZqiGK9FVbrdGiUcnW6HGtSxb6ZxeD8YHkDcfs4GEKDJpS6xmgbRVvK8Cn7Kf1StX5AFTtTk41QyifzgXniVE",
  "key6": "3oVny2QkNFc6m63V91PFexiYqafucm1C4nsyfeH5NzGaW5Lc4p1MqCXeVjh9XWHHyXL8a1sBCQa1TEEBCkURERhH",
  "key7": "2v6vcVYb9Uw1Ew8VJjzctVZkRWAxehcruZuYD3T9nrqACcejDZSB5iBFF9dhVRzniE3hWKVJviWiJczXajHZAWc",
  "key8": "21H5bpDc7dki8WoCd31KHiDJmAx1GigFQTkQMSbZuG4PaJoN74FPpy3XVCJrYd4Zw6PzLpZGZtZTmx7fNjNtm5b7",
  "key9": "28uUBtYKErivKp59sajuuaxR71HQozJyuVxcNQ2DWD9361yAiD2cqKxLsc8LZBgYD6zNmV8PsPskk1Ntxu8Cmm6Q",
  "key10": "2EAere8Dkkwn4B445h57hV3MyBvBoyTaVPPFi8WMNS9Ke3SDAjJeGp39TvRq3XybMsw5wM9wBim1FEM8ocqLdkfq",
  "key11": "53VLBGmMx3aaHjE7zXJuB4HTM4eMrnnAds4WueAHq3uDiv7Zs2SXCjqDAPXurMtzfPRwaNWcq6YUhpSXYNbttTLr",
  "key12": "3JrcbEAX384vGb3VA4Rw3k13LwzEUHnSiicQ625qC8RqPrEwh1q9xjDqe2Cysr9zN3BRuixqtbBC3WMNxoxCkvFd",
  "key13": "3dZi6eRxwWxbFH8Zg3zkjc6xUpqPJc6uVHJw5GeqL8bTsN3RJuvZSGADtCGHvrhHFhuEARZPPd3rbCk6B8fBfDSh",
  "key14": "27cPeFnvMYg6M5WzCoey2JUZbrBovMqLTTHjg52e6TYDCCVFhewmwyWdTPyPLTyB3qvifb5t2FfmdTJM41Sn6iUJ",
  "key15": "N6QTk4HVgzENb7PxLJpvetf17ZTKcjUEXu3G33xbcwYk5MCbhumqkVbc8B6ZfgKqg69qkphjK2GkW7FAEBnosHt",
  "key16": "5CNij51w121YhBZ773Cfjj4maeuLigdD78GuqyJYu2rHqKdm3R4J76rBRpB4mcWrk1XcQQJPDDLfmXe8wTDSsgPB",
  "key17": "nqRqgNDAZ8crBzaryM7XDtLwn3a3KFS6ZTfjLCrSfVQo22Dp1T7GdKB5fh81TFoL7kMucUxxuFv7XytygseKdVG",
  "key18": "37MACfngyQRbcXPbSUWL4W3F3F9jrzHB4mR3NCdJfeik7MhBWprMbMhmjH86wD6uj1troQNx7177T7WhDtXBA7Yx",
  "key19": "2uJoLSpUDQPxY7Xy7bjx2r7b9xE6oGuDtDRyV6bj7otAgvuy4FwfGo219To89pqJKQdhUuqHJfj7Uvv9cSHu6nGn",
  "key20": "56nPPrGJrD7Qcbzr398eNcm3Qh7i1CwZaTEz6U8qrvNQyuno8Fibt7Vam22vHsFv9pf27sYWtLL1RcBSBsbyhdXs",
  "key21": "3auBvt1RsdcfdWZpkCdsZuRHwxpgYw2UdSWCLTyJrtXvThZ3rSg4HBvqsLZMFwSZA7UP1x3ryAf2Xtf5L61dch6o",
  "key22": "5FdtXsdcke6QWvLLG8YV7mVSkFPjqzgC962sk7dq7V1kZAyD6NKgW1JxhBi2ngs9WMFtMpPoKvWhgYrTRxnsC2Y2",
  "key23": "2pp6bbcs11fuVoCjb25B8GiurswuuYfkcFLr7dWmMjFcvgmNXR7ERgr4aod7YovTdyDmhX7j2MkPYazWRynHaSZM",
  "key24": "4WhuCTF6hrdw6rKmiD2qKRo7LhidiGCtQFHfizjF3izQkZ9DUgMR7B28bMXojqfVrXYEWKq6aooXvboUywA2pGUz",
  "key25": "3sdCSQSKARGxJNwuz8Q4vkoDNXSqE8Muav7xghSkGrKUnYa8pszSX9d6cngcQJixwRU5JALtM3ch5z85C1SNyXKe",
  "key26": "Lmr3GJwv4rsSoNzFrJjUzDHL5k2rhHCUxRkbPGKW6kfKEcsWB5opwToa1RVnzMw5xKaDAEVPUdXzpLL2zDdRVnz",
  "key27": "4iwzvY3HMG6kwSC7FiEBgwxTHyWEUcBxGeePcpmYSEFB8rxqD8pxR3hwbnTmnYuBjgD8bcxET16VnjR66kPGjW6E",
  "key28": "4KjqGrTmLtZ5Z6CVBG1HypYwRLubo1gak2JFkoqvM2RPi4RAioj9BYFRe2xUtj7BKXcBNBAeFCGV5PrMterrDETn",
  "key29": "5TZR4b96XQyaW2zHvQY2iMdTYL9r5pmZdRiEKGrGdbaiVGYGS3FnCkGTSm86rLTPMrzE9J3GBckL9GLV63Y3UXW9",
  "key30": "WdMxVabyuRKxbXWJbQnZSom8sMXNpbhs15sAWNiNyhf7L6MNw5vicWdSVNUWaLcwyENU9v9LuiYdMGDcioULEzw",
  "key31": "62cKmdm6fVALATsgS1yP4DQhfUzhrf8HgqjfJZTA3MfD1Zjq9zAxcVj9BXCvfyFv1JF7FaS4EdDBDRHqdK6NdctF",
  "key32": "55s5SvXsCCG8ZnRevyKdQUR2vdmMJh83t6PPzoGYYuqCxyxD3ZMX9XSpxzaZy6aCaxMPHF5QdbSn3mgDgUNcT7Xx",
  "key33": "3gGvu5z3mNEJTZmcuasvtWkFzeVqaGGCBqyWNevGUAU4xW7AGmgKnaDn9my9czznKnKNdXfx3BgqVd2QUfnQy7Mf",
  "key34": "3oBNktnMXg5uZhkJ26gHmqqZrKgCH7SkPybP5pEf1AQZDrHLghJkxDWU5TH2K3HcuhKUkx45CEq2saGFvRKuahzw",
  "key35": "5GXN8DzY1g8hSAo9w4oGRJAGkRRM268nrgiZA6rwPURdoQj9fW8i7hu6vwn1vJ2VYHxcV46ocdT51EbeqF4ukPCP",
  "key36": "2x7nRgfyBP7itYrq3FYF3TwiYVLMQSqwTCRfKKMNd1GX7TWGrr46sPpYFVeFurCcKXJ2FihsRDdsFnsro8AFbhHp",
  "key37": "2Xf8pLhYasKHxU2ChG9AVurWJCZnKWZwBdeiPtvo49kzYr5rR35zSDzdfvcJBJA3t63NYUham3dhWMuCqxxxv9iM",
  "key38": "yBQ7yW5fxuu8QEKnd6xC9bdzknh35pmVMSmsU3ubZsD1oSv1CQ2wo1PhBp7royKQHTicnvL3pXFNXyGVQWZG7jy",
  "key39": "3aH38eXW5EtxPNvNMz4CodUaTVmdzN7KWpMyXrD68NsgfMGk2xm1h1d3bmpaMf6aiU5QLCRauRrZiwLWey2djpxH",
  "key40": "4SdvYD53HURA9Qov48cvMVZSMCX8p2isxaR7dYZgdxXveuVrFmig86TDuDC5rJWHv4bH9JZoH7HwRp3wRBYUP33v",
  "key41": "3hxG7AsG8NvZjpNc2vtyCHaZazfVtA1fX1FxsvvsbJYsjf25v9dSpyTmrykFA1CaPwBr5PzJpeN1Ndfk5ExZS2Cn",
  "key42": "27hnLsjvRiqDByAvZLac8bKsxEntKzVL9KZ4YskU7aPTt5RZn3jtYPv2chUGVp543nCovTxS3feAMGiSdXkUDqT2",
  "key43": "3mcryPLuxNfRHs7DRve9uZDwn7Da8YNmRhr7P7XngHa6RxWyDMc4ypbuxGFDbhuJ1KCnCuusL3iVK99HhTDTSfYH",
  "key44": "3KnpHcTXc6Lc3NqWkqTYwZ9utkk7Uwosyu5md1X37Kp7zQeWJRNGC12odK5GvvsdA8L6DfPFj9bhVNu3nKPfchUB",
  "key45": "4NFMepu8fH74Tj2oKVVXPLqhXi7pwcaqokuMXs5HKxumAMw2jjfXDRFjBRXozQtwUVhmMsB2LnETEZYdBHxxVSB2",
  "key46": "4zMs4y566DbhTxqimzMYPPomyukgkLAvncj7m67RTgfaQVgL2hmcCVjoRy22tRwNxSMmuPPMPUMziqzEfV2SAsiG"
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
