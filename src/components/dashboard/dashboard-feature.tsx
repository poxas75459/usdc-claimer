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
    "58iNE8AUE7WuCry5hH8tV1qgCqGSnu2VofXyfVEwS6fDkNmthGFLRKQh8GBzFEbZDHQMqQHRQ3RwVzMdPEdgGC6V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZB9rfNv9wwsrnXrU7MGeEmnboqjcm5gsHwQ6vNWkiAWvVTtEQLQCEPJXv9aeKRgTn71witGyUJYoVnUbRxLvdki",
  "key1": "65bMsv1dfeRGF7UM56U81JBWgYbNsFEEZ6wJHn7JFEZ5Yr1iU2X9Ef33FfNGo1PG9LEfeUQhok641GX2UWKdg5Up",
  "key2": "66ptYsVKCSMAFoE2juAhgqkMyRVt6PEjyrR8zwBikbabVtJxJb6vsQ4aJjQMQrwEH2Ki1Ce7yks5Nrtinogfv1H6",
  "key3": "5y5vncAHQbPjgrkoBCDhY9gn8gkKehomt9YNWfjpZmqJ1qmQ7jVDzzGoqgmHMPBQQ6mHPz4Tv3NwdyS9zQHyqKbL",
  "key4": "4EKP9g5eVtdtvt6Ti9TqcxiuknLspkyTGCJEyCyEP6hAnCTtC4Td3LvR4NQaTuHGC279nRkaDgRwFr49zecVKT3q",
  "key5": "4xQ5LJFjDjaR2jcDdiQvkwBS2sD7fEdp95kXj1mr8cgNPPF5zRuFxAEpUWjJkubddFtdtKEgu92bvayKNj5sZ7Ts",
  "key6": "3J22KemxDPZ7eS6kzKPqGqZcGiZnuWUHryvttAyvdivrBKLgAQNSkqkCeLerPz5y9eMbJYSdPGzrfyVfZ6GLr5vE",
  "key7": "Qqn4s1kX2x8TUubVpA9hmxDLm1gmUj1XXXoTHc8wpmYU19CLHhwXSXj45FoE8cCiaDmJhA1FR5SGqo5BUadCVGr",
  "key8": "4HgHpBLk4p2U2SmBn3yjLHq31KtZSw1YukpucrX3z6Gh3XLWW5fwygPKzvhy3jfHkcn9AaJfwbEiQkxevYigRESc",
  "key9": "3BMb176vS3VVLzh5XYC9F5NXNvA1EBXQDRZ1ConhkZQqZw2JBwgbFYNZkoM41qast5dRb5pW5cZnauvYHYqp5dCa",
  "key10": "4B8ic4tRUMxMdj5w2zUfRZRrMgY9D4vAgxf5XWiy3onc1yBXyjjFPF2r4Lu2m83zvhPTxtB2uKCSMPxz8Zgt8jt9",
  "key11": "32WA2FQzJepyubzUvzgFDVBAUdQ4Vm6yfM6jsisxx9mfAoJqWCsGoewtFE5B6DZvFSRshSEqTtSqDcTnU7D753D6",
  "key12": "5yVggDZfpkN5LrYmimUZjLaiG2g2zpsT6zpjB9QkWm5bgC2sqEz5ipxCahmbZCyTyxXB9FWnsBgcTkS5G3N5BgX2",
  "key13": "KhzS6yNA5uQ76eHAwZB66JDChaEdxyJQyTZiJb6bKYvgX7Fv4GnXaqaYeuYS3i4Q7FmPTG95LUGEB3HXhoczCwi",
  "key14": "2vT3yaBNi9i22qudezxevjX8XEJjQTGhdkDnktbLui2UaQaxexA1h2wHZSggFe2FANr22U93ZNjSDZf6WEcwFG9L",
  "key15": "5KzW4PwSPtXcEzpYpheUfHgx4VJSwHMRbRAo8TtfJsgchtekkFtUnMrLmUDWM4pDZaR1524JCr8Y1zrSSBtNZonR",
  "key16": "4QtgTV14PCVUfjyEpJT7MesefnJ4SHs3L4VCjsB7Psm7aotjNfE1cgat5rXHSFZfcUQBpSwMqD7vzaaiEF2epBWF",
  "key17": "3Qg7rUwA9y1PA6Bq8oaY42GSw48adaJ5PkaZzGz6dNEFWdT8q4HjP9b9mumLnboM85t6w6SJPEL5B6jme7DhLfbd",
  "key18": "BovcrY4AZTioTZiRspuN16ckMoFZyD9xmtMMNaobuFcLDBo1mMTQUJTbeJq1gSi7YAfzUPfijBWmZsVQ1Thvx1R",
  "key19": "4Ygi7BaHCiy7DAQsBp7kqhQEne9hyrT9s1dcbJYCS6bUkTF8YCP1dnHrBJ152rqV9xNbZGHpZpAXbMfXTSDvwqCz",
  "key20": "2MhteRXUUxFoyWVJA5gvM2dHZamwa3LVtGF6bwoqAcq72xWAYwqhCjyqD6Ai7mzCr5NkYb8JpbPmevMm5E6EuZak",
  "key21": "4EtpFzhTe5Uz6SzGtTUFzzpHd9jBZ1SU73NccvKvPYi6EUJqBQvfBoKPruUXYCRN2RJhiJ7rv5RhbUCa3k28obd4",
  "key22": "291dM2cdEDv3r2Q2iF8DWZLz6uyNeSGLmr6cBWqb1rKBb6o5kKSM2siCYuk3biAqxo7viJnhBweuRBdUbFC28mp3",
  "key23": "5A9Vp5GNz2e8M3eQxnKpUWN3KWWGRf7gyNFfZS3i92TFrPCN2wspUcbGcpyDiuNQS4zSCAQKwTdMjCA43cYB46BE",
  "key24": "3wcpj4VycS3iyfMkZcyBWD8ZvvKhJm9NQDb2a5pmGMbotuWfhtne44eH4Z14bje34Z9HzMBVDWxFLVLbrsVmi1GH",
  "key25": "4Z6XhFAWWwcW7yRVfQP15UKwRPFHoTaCYDDu5wwK1gUpvaBREn7x3nZehryKE73vAb6AHSVdc8oPeCNAdUegN2Tr",
  "key26": "4aBAYTG65ikgb58QPWQkde14fWJfSarsbYKHFfqYYtJgXetf1QTxfephYDpMPwa7zig1qNR8zHChqNXTKqmhiWXg",
  "key27": "LTvkgjEns6JVLQKvx4VaoedKrsxs6QtQSy69SHYECZy1YLkNndycVVrkByECD87cWdiATofNYtKBudiPFjXWLp7",
  "key28": "j89neMrnmmmNzKsnyPvgxpQCUVPJmJpZEeZjRqUXjsGEaT3nTsk2BZvsMFs3e8eyUXXXHW2iJ2pL3gW69ULn5hJ",
  "key29": "4U9JSQ8NhMk27K6RK7FP9Ds3WcTqzGeWjj2jqVxrTJ4wsrUCuaYcpxJN68PE79KQHAhW7rU9sdMJZoWqpEyJ2C8H",
  "key30": "5EJo9W5PiZKqYdtSj5CusEXPxYgz3P6TnPEPzTLHowGHi2S8SAKcrPCtVQHxHwa9fezhoHyCU97jbRK3NysR65YR",
  "key31": "EyhEaNDz9KTw2EkhUHfrCxz3HeK3L4CZPQ58G4XPG9f63v9rBvifJkEf6HmT8yM31Apt9MgazxEGgEzhWCex2eY",
  "key32": "3pBcUYJnqu267HMtzi5xQNwam6KcPwtfCnFrFxJm5T542Krkwi2h42TakXepPL8MsQHkrLGkuxWSWkw1q3VigEUi",
  "key33": "2vkCQ62cewqfiK2Lkqsokm4wPGP5VUJepQVphfcSMHwuF2R4Ygn2oEJCdXfxLA3MFyvdrnAkjHMprmAzuS3X8xyq",
  "key34": "5LkKeoSZh7Qh2anet9p3kcVaWCJGLy6VHHjwt7aAwzXBBMPZ1gPpcTWvKkF791hqnSgRofWqg88FNV4XKZEWxBZW",
  "key35": "3m4HqZx6R3EwzGjGWxVpUUv57uenUtZX1RNFRqY4zyBE5yHzjEX56EctqHoZ4ksGNvos6DyHubnTRAcDkr1nNd87",
  "key36": "5RyRY1x1WbRDJ85kCo3quFiSRp35bQW9UTPdZ5vymZGhXWqwyJaysMAFnM8iMkRsYktxCQkx1nTVmYrtfWWqzrrK",
  "key37": "43zmABqR2LoSwpqpsHnVYXUC1gZkhzbzhAyTqCctf68PL3XWbXMEyPmwiySNLhrHa1f9ADDGLVUU9JVNC9xFCquU",
  "key38": "NXRWZZ2TaL9s6xKaUXrU6wLTqs7STVWDvCGEhmt11oFsNy1P9uL5KMuzyUuogAPPmGm5Vx9g7f9gaZqiSENuYJT",
  "key39": "28wqrYgChtZq8CFyaZHYhUDfqhScccQpoXed5uWoEydDHzCS5BQU2KR1Fn6kk3UKNrtKK1YgQuvMbsaecRTyKSSn",
  "key40": "3CpgGCpzYzR6efGMJkzQKxt7m5cPYdKUPXN5ADdeYsntMN4NGX3CVXF1q9HTxAy1UJawWaTHv1avpYfzn2xqpTda",
  "key41": "qHsZ9HaSWVgLz31RCFEcs6x9LdZBMjPFzQCuucz22tn56mZJheBcH4TNg1kmGAV9sghpTyahHPnaza1qe8umdRx",
  "key42": "3mumUYFsZzJ16pDZxroAouUY4P6W3fqEGvPqDCvKyfAUbC8k2LFLPjk5raV6diCN2f3yKaTxTQ9QiJsuESH5BdKd",
  "key43": "2zUoB12tygSrK7QDwdMFtsbKQXu6M2Y9Ca12KxBDRUoJ8U72QmoSvBoMsrP6fpyqVsunXSC6GghEwqx9z5boS6Ue",
  "key44": "4x7YhLu2cUN4Ww4oPV4LgYxW2RTx2sa7bLD3bEFkHSiKKXtcT96P5poVqjrFZ3Bjkpu4B4Lop9ghwPWFAJF4AW8Q",
  "key45": "EnsxbggFZ6XBRTB1xpbR2kyNLFrWT3AErr4z7vN7YPj4rZCEcQsYgPBBrQ5dtDPnNdkFQkqdh7jgCB8Qp9QHkti",
  "key46": "49BPoanbKoB9y1BWyXraeZTZUEL3VKTLQxQ4duvuVyq5pRDLHmooRDyFwujs8SzEaC8SgrLC2UMny9NUKAfQjoNP",
  "key47": "2dENk5Pk1Zg5dbuEr7aeL5GyZ1YkvA4T992tJNvc9zfanLGDFAtBPu7zE9Jj2aAmz1hxAGjbvu1eXNGvMX1VSghb"
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
