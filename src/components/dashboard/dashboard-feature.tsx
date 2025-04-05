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
    "2ovNPjnABv7QCPPyTYP4CdUsjwKQ1QSCsKKqi5afoJ7eT55HAxUT5U434Em43GPWMhr33CKya2NcBnV3o1HRPt8C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d2AeMfQcXEmtLsbJmn7bEX15TTMbF8a5MbRv9Dc8Fc7FjmWsZ2JWdZBVmRiCzkCBYT6vnQ3pM1vzomJ9pPDU7ns",
  "key1": "1BwWxEJu8KB7J74aSG72dCTd3b34pSFQ3wFD1s5w8vBXLGeYa4C7zQ2pxo7nNCeSAEEQb6yCrvS1Lfb2N44TuG8",
  "key2": "5hrbzrC164YqEb8gLSNGgcBJZQnbnMspCTdah97qN58beSbrn3qBfKx1npU8ozYJmKEFt6b5JRdZyFeGdH3Ki6zJ",
  "key3": "55oBrYct2bTwTWM2YFq8Bkv6eq6JYq8iuHtmaCJjrwzmvkFaVRV9mb3ZJuyqX1NkeJizeuN4jSjoLu5u7NWUGwnK",
  "key4": "34qFA9nSwW9j4ydVpStAe24yMq6A9yQMBDfuvKdBAtQSSERv75FzGiohEPvi3vDEgJWXdeLXdTUE9jJbd96Hq9g6",
  "key5": "3V94XPL2TtzwUiCYMtREvEZssYj6FCdNXW3RvAUesywAb627BH8bv384rmPGkrRhwhP3zc6U7X67z8qHaktSevQZ",
  "key6": "2ShvRGRZuDrFPqjMZdTGveCfGUu4kyjeczo1cbb9YDdeais1pJa3symbawiPYMXuKPMWaq9foEJRpQyBwypGaPRD",
  "key7": "3eBdgWgHfLvqy315mr2WaNrcZB5iYYgBmywYRofApi4KdtW52V9xGF6LqELQ8aZYSWGga9d293Fq3NBpqq4D7A5r",
  "key8": "5NHkRuFdtbibaRPEbM8SgYnDi3YAnAVDt6BHob6V7WmjD1mMwQGwRXLunjX5WC8oGtGanP8DN7uCzgxXX8WBcZuG",
  "key9": "5beKnBJ7LSyb2ijrF45AideWaojGCB4tzEwArk8DYtA3BopSUTcgW2B8Y3jVtnvGXXSDTryZrmJqF1VcSUf7b88n",
  "key10": "5aABGqRUNB8nUzcuS4rCh2veovdovrQxZmxcBzzttcCD3s8Pc1ixfLEGYFHASEZCt2fQtRanb1ieQYWtUAsXBAud",
  "key11": "5BZR5G4UPaQRJbHdaqSnZ6n5vGNz9K4E7wy4Ly8NZjRaU3NwMj1L4s2aSoodvnqD67fwHTtAJbpZCzJfhyjYwF3",
  "key12": "38ikNqG9ieK4QLG3EBC63hVzhSXSReP1a2vs6LDk5BZUUj1CJFyKKh6UFwb3NPRUcn7bhteh4iAfFsXwx45aLvLc",
  "key13": "3HfM8tMthBREKHkFSmmez19skccgV4tdUNYcpb53NaQcKSjEdbtqFDzRbWJqdNEGnj6wbugpQeZPRDuheQeyDNzB",
  "key14": "RebCmWR27Ny6aMdtdeC2yJhAGJRmBtjMERTiP7fff96KCrrcpLxB7D6PhdKRXNfH7dr5UywcXgCcZYQECtjC1JJ",
  "key15": "5M9cc5aRjhJwg7swwnnHA34R7tDTbC4aMWiCByGycy5aD3ChXctKqfoFbKXULF2VHfpSkhKGaf5FfdWiJjVzSHjm",
  "key16": "4C9sgokD8MFU6Rh64CnaHpsAL25DhxnDeuxNunCwQC9Z8veCP5t6h6B1pDhJsQbiKTs5SdmGKc2KQULH4mchJkfG",
  "key17": "3nBLQbPLFPbQN76WxD5fMaskxgtoNCW8wYVygQKYrXPdMHS6WtZzxWjYTwCgZkZKyWdQqpXFFAgdccXh4Re5RNAN",
  "key18": "4wbcYtFeyaSDg9QCLP3gXrTDnERmCTiB6f4EhtsuUks2TeLp3mf5tZsxrjdpvbJ3d27qteYG5VsYZEB5XRk6HXZS",
  "key19": "2tsQZ4p8EJXqVUcgVVynJE4LF4ytU4P3GC5TrtszgXhmfruxjExY11sCYr6MoE6ZL964TtvmMvfC2RK8JWiiZ42X",
  "key20": "3BTDzhSE8ePS39tpDsFVYcc2BSFdUva748jA5YxijnKbD9Z3ZFoVUGBXDCfzvFcoRFT8xNtBm5iRbEzvdw5fv7eY",
  "key21": "5Bz3VPxkavQeu3S1sS54X16D3tXYxTZRE5oi65JodezEA78TKy9ukMqHG5ce2ZraXmAU83NA8vqEKfFuGAE4KvPs",
  "key22": "3ojzg4F1CbMT9PWwAa7an8zeGjPZYeZghVDXUsoA6YPEz6bQrAbaQT5uQg79pYCFYC8H5jr9D2z8CY6Ua6eo39T8",
  "key23": "3uoLARZiZJnn9frKkU3fwpx2AUTnFHTxshL6twDaXd5ko9wkgcei4adpw7e47tWYuGqXwGz1jKhF3o4DX5jwoSoe",
  "key24": "61G8tkxJ3x3YNw2UVYCXRENGeiKL6PtQovPGnak3BcAAzN3ziSddpHnWBcMZzbXnYU5X9zXiKtzMNHVjTF9vJSL1",
  "key25": "3ZimwfejkrYLs3cRvqFB4krT2wg4tvQ2iAs6riAQLdo7C5KNwEBBuWjiMHr2suSTkvCvSGdvDUPXbhAH86ZhSLja",
  "key26": "3JzgLrELF5bt6tJrKU2EoYXJsV2GCXCQyqern3wTvrkw26DnVMScETPNkaexYi45h7XxEFYXefpnsHMrrzZ5AYM7",
  "key27": "34SUecCeGbkozvtimWDoDnSh8PbsAFqWDiUKFdEYC7cFyVuivdrMiBfymvJBsceNXSRozTWd7dfjAYbpgG9ruuQB",
  "key28": "3vw9XT7GRqjdDG2f3mDPuz9oZHUhiiQsPpsoREoXRHmutkoAoqt9Njz2xNtQofKTQCckYd7x1uFfp2RCH1LDR4E",
  "key29": "5x5fhYvrAPQZMJa3oBnC1MufapJgrvU6MChRrUys3ermL81va2tGfXSK5YswSkwEDfzHBW8ZrTWeMBAzEH6iCNT6",
  "key30": "LXL6vypRrnLorQiYvE11wfxX61MuKBEM4rZ9rZCZWJ5LXHRYjxWxzknxfrpkNJ3APHF85WFbj863nMyuRmWLFrb",
  "key31": "551eJQaEfaXu9cDtV23aLy3EBtQMirwei9VEQKjRijpxPfav2Rub5cKhUr35GNuqdmKu1y8qwbCwwjCT6TX14z6c",
  "key32": "4rFQvsLJDjwawkZJqyJmPubchejj298dLYbDYatDCfVnHJcU7mAfTRyJRpFiPNSKchseVuXPYxdYogaDSX8Hh1UH",
  "key33": "49nFLxBFcwsFEQk79kPXStKfy7iTBtVvGZ8oQwy37WPVbT1JcqwL3xGhRuHksFryAcgLSCJ16nvVDUA6xo3pcJNA",
  "key34": "2WFFhzzUuZZsJyGeeDbaiV9fdFCPiup9wSHPaH86tSDa5oFYj2gY2WjXF3sYWCyZnk8PSiwTkNVVTMfpn11Q41LY",
  "key35": "2ceE9C9AAUre6Xos9xeC2ZEz32MYBVkhAFGP6Gi8LrwC1jV5pnhiHyhWqHfid8BrnKgcosWPkZcQoz8jU2tSQxrT",
  "key36": "5rhXyrmfNo3C8PbwDhjUfDximkyxFWkxpYaVv9xbi6HXXbudo23LW2ZAwygvTV4yhMAzjyNYcRCHPuWGFGVExo98",
  "key37": "51RE21ohYeYYY9co5frpSLPZtWU4qnhKHBfbNXeDBpxcdwARfJBz1cKr5CBXwcCWEXRBE7U7EXuixMz3puPwRgcH",
  "key38": "2exj4wCLmjLnLWr6B4Vp6KsvTaHiVTizFFeGBJYyNUsZfhC9R4UhjMSTcdKPTcnXvNowSefYeAfF7wE9uLduCUX3",
  "key39": "3i8fZUzEfefjSNK1LMmdapcAZKmisZyLKGkPiTttE4jfYgCU5dUZi8tHGr1Kg7MeihG31qJkY31NjJ24z2pMEFuZ",
  "key40": "2yZgNoCxrJA7joAkZanSpByt7kHn2LZvhvBbA3BQvmGE7ZyBmXuzQGk99yiPit4itGhjLTapTF3wXTtkg5kVu6FW",
  "key41": "4h1wnxbDATpUFFExUCMzwRRhH9hx4E9oaEnZTZMXsquF9kHJZBNjANy1W2tTFsJfu7eJKoUKHzFt5xNkmS26Mskd",
  "key42": "4DFNKv7wbk9CUjwyCaGfwfvGqdRGUV2xvUtJ2taThqCa9yLZochMiJV5UqcuXXuq2ZkTco42FH7eyZ69LZ7PahK1",
  "key43": "4g1v2AwcuPFHUPAXCdA8yqtUCXFSdbAKeAmdTdb8Yu9vBhbLrKmJAFWGpS936gcPb1cQjh91mWryPXUmpgyiiGTs",
  "key44": "4ngRmQYkniDZLrDbb2rcEBo4jQPKM2Dr5RGic2cPq1AbWnQHcqwouTEdditKzVgXTDLZwSXfPPcgTTD6xtYp3HPS"
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
