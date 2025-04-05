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
    "4BEBU8DJU5xaaADPdyjYH58HQwPd39aQWfrcPNpApzauHCbgoZyc5r52k3b23BHDedALhdK67bnEz1QaNMqkmB6U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d6huEq8R6Bzf8XmfPj5J3Vtg21xMexBu64biyWnchQc49BFspPHJLUZGoEu4rw56WGw8MMdtmUNmTq3ddtZiFT7",
  "key1": "4sjKd8r8E7KnhtbjnWFy1Yx6euPZcFa3UGdYfMxhBTLFWKE4RvWeMp88JyBaTmSkQo7VhyJjLTsRDbuneTtnzGtL",
  "key2": "3t8gFpsAtKLufYs1b1vzQwFCqj24ATTwgXhH4DLh1H5zkLwep3ahXNXF64w7y2waggnYz9YDTxbjRs2P1tfS57Si",
  "key3": "44pE54aGVwKF3ACcpjoaMe55dmNGMCfY2FehUbqFsffTcXmiqfxbj1FF2LyLPHZhfoXz9WYbExS97KnGz8qiWsFH",
  "key4": "3mU7Z8CCyULW3ryGFZYrH6U3ciAweRNg4r7Z5pC4kSeaazxYSCrrTLZpXeGJrWFf2XWHhUskvWRvhBPPc26Da8jS",
  "key5": "4uRiufuMHNVjNkrPK6K1ZY4oP23pkGEqkqTHxc4q2HqQePemWByyQDuzfA5H8ijrhubzhLDyJ8d94yrWpW9chuob",
  "key6": "2cJLBEXqyGiKCWifL4Ymun36Pq6DxSA72pFVq8C6yxbo32bZNiySDNjDWvBF5bxdooRWC8vaBocKnxQuNQw8bZy9",
  "key7": "RLenUnCzHWKZFcrTva2MYgvyHsfU1Rm21F2MPxXuNYPxbf6aJz2LCyUZngUofowJpwxdPcPSfPv4DgSrePTkA7P",
  "key8": "4FFBzaF2gjW7bKfrhvGsKM88Ty3EFjiYZDi9v6hYRy8yXJYbCsc1CQSPbvRNtbQfaAjw47Zaf4Db9i26djaAwPXG",
  "key9": "h9SA457J7dv4kASmnsbx8NJoqPkxgEwZAHkeNGU7YtwgM5vksprPW6HoG4mD1vjyzeeF4hmviTy6mRPfFa83PMF",
  "key10": "2AFGpgCB32A9Zv7wBwWRJfRznfumC52potbbuFbLN93TDXSmq5xwzzWFyyUSUw8qctf1iY3DUvh7P3SrxvQRXRgW",
  "key11": "2se1bFduXi3eqDRtJRXmLtkxsME9dRf2vm7PFNhXZF71rAFzpbkKqGJ1EmwPXNHFTfod7XqEKa4mTP4SfwY1mPQu",
  "key12": "5LZYrnTMLqNGNcXjXReDJvoZ17LZ3J7NTjA7QVuHbAoYN8pdD3zfTzWL6W17W8PnKu3EBr5rXfoGnKEPH1cgL6sZ",
  "key13": "4smS2w9kU8ZTeWiXPKw3wd2nkjQTSZ7AMsJLVnsca3vduFSob2b5REpb9x2R1bw8doDHBLuABE1wZKSK2WuVht4m",
  "key14": "4vwv2E6igutdyY2rzn3u8mDhMV4E4rfqf1Y2BzhxLVZaVRkNjS4JFpCLSm9SxDuD7Qrf81ho5i9DrApCS1dxQXzW",
  "key15": "31ncMdXaZ4a8Ao7cJmWJtbUSyTdEGdr2i1XXuM4uaZTKTcR9ULnkiSm5r4o4jpjCFcbQyQVEq7b9yVBBXaHJQPGZ",
  "key16": "52pntvSFzyttqGpRUTVRZZNvEzwFz9tAerNfXH2JgGVbZFUDoD1LgmLshsF8kzK4534oQjKk3G8UXCEeaJouuXJi",
  "key17": "ZrgH1XQw5MuZuat7kMCh6kkG4CLiNdFrcnxRvuVssS6JkA5mBTrmJvPFLdoK9sYVAgvUo4GribNkFnFhHXAPyYE",
  "key18": "24H4muJ8Ch2R2HuWQMyDxAKzoRrGWUWeNUzWWo8ebCvzafgkTebQmMPEmi2HXJp8VW6BsuZvw5ZY8UxkRoAe6Ygp",
  "key19": "w4LUGuCWULGWH6M3cSRdZydP5TcEufak3rk3kf5FDPyBCQF8GZrYax7zsBq1DK7AjvZmeEeevKgDR2qxYp9bf1s",
  "key20": "3q5rHMm5Pj22X7HdGAGgGLe1dz3i336AnL97tfrFLazkpL9EKLnyZySxh2mDdtxJCoiFqKRRKnMxE7ouDbe23kmr",
  "key21": "4tNGV8LyzjDxJ2Ure5XMzh3dgLekd6BKy2t7Vn82Niu2d2tQw8cKbGJM6WoY8UPpeUufP4oQ25uTsLT464ja6eJk",
  "key22": "38KF2KiYDwoSL1hGesTUR82svoAqHKVv2wPRmEDXiqFstDcuvzTAfk59dPBKLxMBTCBSai1EX53qNsEyBziJWDDZ",
  "key23": "3Q17i6DjBayAr3Dn8g5x6pBUpmVPkadjFuWxiXTtrRvsKKo6N8ma4RYkizS2iYBmgzC8Kw7tPcR4wQ5eSgCSsg9v",
  "key24": "218Xt8KSBkPpUjoFT6yhbQ2BdBcPxN5FRmP6TTBgZvGEf3gcM1NZuiRY1XV23dJHvBHD8R18ZKmRDiAFJDjUjBd4",
  "key25": "24E8vrK8oJT1JpBhHeHQ6bTV3h8HurzQpxU1h4kPhYEhUs6uMDHBXgf7LGeRfgg2CDWFRW3TXCTeRnGeLMuEJR2T",
  "key26": "5UqFSJcsvRR3nfQmugiGoUmPJWEnkvuoXiPWpZXvXrpxK46YecgDYBYkz3NewF349bwux8FSSy26iC6KpqFmty2a",
  "key27": "33PcffoCioyvj5tF9n9ijmkxFqJXjz4BF3Uu1i5E6r6H9wTyiGXo5o3RdGxXjPg44cyjDsk7Ln3xyj31KtqHi6iB",
  "key28": "2xqV9PqBtcZw6GTf8u6UWPz2tRGWyPTZwjJwSbuigteGuTyAwfXeTbgFwBLBRAxZKSR7ZTsPMQLTjZRVvuyuHeZJ",
  "key29": "3Miq7WMwWzW1YG73ySiHrUyGshwKvCGwSWatQUX4oeXVUBFvwmfAWYhbsBoPZ2TcxrfKAdcX3ycQy7hVVcgKohTe",
  "key30": "jirzSpvKboxmNcs9Txci22YPVsWdacfqLbMbiHnBa3kP7rouCNGwmt22hCijU49ewSy9wNET1TsuJz5TxvEX4MY",
  "key31": "3U7kn47R5AdW94ZX2QWrM18SaXcCbLjEJYdrookBPnbAowvKLDAVyNnu23Xk5HEf2DWL2JaYpBMk6HMCgb5t3222",
  "key32": "4TmjMCyNQBc9WnqzZUWbwPfeygRBH8fbNK6kguTgdSthzuA7mEjh1xeYDst58QDuE57WrZYEPvJSkQZp5ZVwvVMX",
  "key33": "4H7ypYAwdUbR1nZMMZahYY1wPrah2emWtc7oNDhoe2ShzbU1T46LcQPXjg4ZtXedoLXM3hAXYowDzbXK8CVmVSCj",
  "key34": "25yZsnwNd32NSKAC4PbZhaRpbqibBoGnesvvRmo5mP8Q3LoNDtPgsHfeLNcaWnC7NLxXjr9B9KBLNyfgF43RMeQ4",
  "key35": "3q2RX9FEksZRz4JogQbr7JqZUDLUhacmx7Xe49zFPgbFRUkCKjWYkvPANHECAzpNXZtXJEgzZQe7wFQhJeJNfagb",
  "key36": "44hpijkW18FoZe8L8DF4m8JKHtUiKsMHCj8WfzSV4b6oSdNsp3tDfDpRSPFz8NPDDqYLCQXzqZPHW1TmDrHLnmzQ",
  "key37": "5frRYSQEQLLbvnz1zD37euUbnrQ22SqNgBm9kJuG5VfTwyGKoR2EYasZ6SDzd9x7TzLZXTMAjs1gWFMbtiLUQsVM",
  "key38": "7fTPWMMmHCANoN9kPf3vkyYZQEjZcLbErznV2dMtAcSVS7GksktuJJwhRCEeApBZZRpMFh4TT8gUH2wgJJSvx5b",
  "key39": "ugr1e9wXCfWYq79FvRj3ASz8iB4gmV7W2GqqkKDTShsk43DENbwQk2jEFsGcYZbnPqoKcvw3sEFwBwAwtFe9ypS",
  "key40": "3riKyZmfqGygPfT1vhyqjgzfW3BFEfuwLjgg675Es7DFbMYCpQzwqiQxXBg7sb7QGG1TSgv2MzptiEerFbdnZvYv",
  "key41": "5ArRG2bZGEuzJBC88fbRCtXKqD5pWwu5YkiVSHu671CHXH1ivf2xxcNLN9yKDWJkXetixb5iWniPcc8owDD8HqWa",
  "key42": "3PZEF1xvXn9M9mNqcquyTu1TYGeDN9ueyCTABPS7TmDaCheYrXavXUPnqoponW7zuzE4zxf8H7fe7WZf7uGpKKbo",
  "key43": "3xGRcthpkYvEBc2Bd24mk9yFzk5wwoZQj3PADx6eSzrEFQvXbYoVf3BA3t5AEcbj9gcXwL2yE25qEy8ghy2ibTxi"
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
