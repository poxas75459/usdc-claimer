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
    "4VMjSEffarucqhXCRbzfH6NzUTopiNDtaTm8Dm4YRsvDJNqyqfaCpZB1Z1yyRqUJJH3dG3GE8HZNrNZvaw6rTmEZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GmqLQ9PTqMqS2MQ7ru1FV6Saq3NybSdy88q9n1wJZ5V6oGxuHzbZAomxxBqZ6FNaXBdErEaHi62JJi25JGZob4L",
  "key1": "Me4b9TMUCwt4LgUWNUQrPXA4iDUu3MYxrtv5kPegm6uioUrPLg9qeBbCot2ekaWkdANt2aagoXdSncrKLXFaJ5x",
  "key2": "5PouHJ6EzvkzPcm478X7rniJbK8oq1XaRL2G26B2VwRHkTNKAyvJo1C3uqoZxvGMQCwiUx1W1j6pLLUgcyHdQYmc",
  "key3": "3onpRpWmPfe1SkSaNNypkBjTR6EVZ2WGVu5NP2dRpvEoGvuU9myhgSS6hvGZtMNLdmYRa3VFR9ogj351j3d79Nkj",
  "key4": "4WXKGrzCnWR7F8FAoVKeymLpdqU58nn4rkMpCpfQVWs3bx4T59oxXkj7u5U2xyqk3Mm26L14P7xLa3vzyttowBzM",
  "key5": "2EQQZnAMFLSUCgE7S6eFYFYgptCc9hsm22TwYyZyTpPLC7d3xiemhg66a2LoVXTPfN2iqgwfMefgiWfQCNr82YTb",
  "key6": "5154cPS43a5f79gYn4URKdsAAXFuxHic1UfAgs8CnVNuHamaWRpREgN6GXuKfoyKYWsRgefAaSeLTymWTz61WAq2",
  "key7": "2M6AyGbAWwV7EjbAnFfcxciMCAuocnx5W7WUrZPcXenBc4T29Vdd2zurvXhSXgJd2nxD2WwHCcSo8sMydQJnexnH",
  "key8": "k2oiK2RK5KnTDGRQNV7jTUtPZDW6baysiLqerCdMuDHCkAfpZpY2kUHCP3W32gUjfCaseiD44N8FDdZxb3kdR9K",
  "key9": "3JK4ayASDpB1a8sHPjyc3q19iAY4iAwTF1k4EXaRkCRXaNA2nvgkyYWg5vRemGzZtJ7oxHraivfLg7hS2MMWrURd",
  "key10": "ASQZfjdXXvd28Gk3iLMA1x3ixoZrKQ6vKMvWNX2XPEY2fxp9MtLq5WJGHYLxsRS1gP1GtzY8fEis3BQ3b8yAKid",
  "key11": "zF8GMtFzUimeVK97f7aVxfXyNLp9353H18L9UdFmWGKkZ4DL8bBt6yg4is6exmsV2bbcV9qpP7Qp3edkzEuWWXj",
  "key12": "5ye6QoJERmSircTJXrkREfjkD4gL7tS2UQsjJFRPVBgSiS4aswaVRX2D4u4SJJ3HP6xXhzn22zUQ9jJrbu2RKENK",
  "key13": "5QDg7cnzqVWck9P9rL79pZUSfQnWa8h3GBq2V7WRfwyrufvrc9Ehxe1MbFi4Punnx3nzAFqfgEesBc9x5e5wnY5N",
  "key14": "5aTLKXyWgcWgTinPTgMB41RWAQbukdr3KGQT1zX7Amg8JmQtkdu5vvQy82wXrPrZdGDYEnyfY9PbDrC3NMq2gZhX",
  "key15": "4b3uDHZdD3PQHFAquf1JfHHVjFQQGLaeyYGg6NSNXv9X2yHtzK3hW4E4mGrL8pbEWRZcWPz7RzfLBmB9UndZa7Ty",
  "key16": "4UmKJuQDEkB86sXBu2H6F324UEFghyxUzM7N9QTwAWfyHpfu4NtDDWV4kxstxgGRRZrPNZjbBWtoakToBfLoorMd",
  "key17": "2UKkZavDTuXvk3z8BEi4Hf2URv87wkbyTew2DAV1bL6U4oVrRaNB1Wonky8EDpcxC77J9ixcx1RBDxANJ7o16L4T",
  "key18": "2KEVVt6GvY4oZC7GuZ7EkHL7iZGgDZoVRyhGSHeQgXqTSSVvY7LzQvsyLCFmt4fx1BnEwsYEeMePQZkS8M71fx3H",
  "key19": "5YktKhv3GoFdwrjxs8dw3JEG1tS7uh5BSnJJsNAUEG8ZVHme2dSw4fqvQduTAqdyNKBVun8XetAu1KCrUA8HFad7",
  "key20": "2HNVn8EoXk4sk2G2y7Mw2bxTgbfeUP47B16qfuC1CiwtCAvWyzov1JdJrFVPoRVEVZsgGkbhNmz5pRiVdPDmKVCb",
  "key21": "59ajRBiATZp8zYPVzMmwiqtiStApVEGSWmg2CC19yzHY6i4cLvfqak1QCQ6tHqKN4eQotAv5DP9KSCrcJ7YK1WcU",
  "key22": "3KLAyqDZNkqZfFmKfbEN7YNgcz7MxiUY2ePNtcKW7syJ94pfJK4rXj3EesbiyCiGgrdJiA3yCiAe1VNgXWvZLsJY",
  "key23": "66dzQVA9nC7vAvX2intSZh8VZiKzcmKBVtFVvwCiHV4K83jMXvk4fr2vhmtkqHsTP2MFYNCMrKQCuVmeasfzKLQk",
  "key24": "4NXxgXiTs89963ZNxZdf2HHo5GK3gskeY4Bp9PZVomBmcpbXGJbsfQ1ET7rDciYC2QcHnwZ14Rvaho2Pqjywce4o",
  "key25": "4r7TsAHEBQ9v39mqVSQVPDF2BsXsy5DoXGU5w8KPzNDfeYNHZfshKTd6h5H3Dg3xhMsvx8uEZYJ3UMYm3ciTLP13",
  "key26": "9S6PwYEopLfi5kADNYyF3U9EWU2vgCMWBDFJadNckGLJ9hS1DisfEnoqxC2QMNhFqcb2NcoftAK73anZvswHvpL",
  "key27": "3FtCRRR6icpCz9QSW4k4o7ZqG9zaBPHWzSMej63L98fhUFWDYxw4MFvedZh8WrnARyftKbFrxKU616NiQh4UdtXr",
  "key28": "2TVXaBdL72z4Vg2X1KfVDhyrze7B3qfnsAdxT8kQZWaour8s8jAsxehoCJk8JWFdCnFbysXNXbDZfyA7G6Axcui",
  "key29": "2GbvXjrrXSDgbKt8BUpnNwC9e2pWDLuvdZu9uog72rQpHXJsgjRhp7FmFm8irY8SJ76Zy65KpmFgrYkWuQDuRCzW",
  "key30": "5cz46AAR5z1M13MYChpEr2TDoETPsM2MMWk4RS7h8JSNzoG738nUto7WhTEdZvgrzTt7rXKxi7gD81LtLGsm82Vp",
  "key31": "XhSHHhkV4MVNwnL5KwX13Ahz2ivDb88jFgaQB2oaGehawaafEBG27jsohXQR97vADUN9jBZx4q3F3ejgGRBwt8y",
  "key32": "64JdjqSFkFzaKzXzTPXKMz8tKEfiPfEHzL17cZdHS9w3zNBBZPP4hw4CUqGJ5PjFTMThtTggfgn7pVvY2dtiMRJN",
  "key33": "eZAzBGuDbTJPKBMTxxyReNSVXBWMCd1m7Jh2gQqAqRt5wWBkXW1VuRKhpuzyxvX4zxZTN2jnhwbEj2uQ3oBywXV",
  "key34": "DBRd6HR1hhPSUCu2CMM2Vb4S5xVAbMr1TrqtCQJefH8Vz5q24hccT1Q28QWnEVn5z1iwKT2ADCrAvY4PTr7FvcS",
  "key35": "31y2VwA1h8jiDRLTge6KLdoRiUeayRJmavBFdCqsj8Vkxm7ffCNFiXZkbgbWPP89SRKF3CmMJ3anRzkfaxxCfSk8",
  "key36": "63yYbhAp8dYCvGjD8z8fxpyLxu3HL5wnJ8wkKvKFHkrUqrv25tWuPGhNztzft8HDcKcnxkzhX5NTJoyYucAXZHTc",
  "key37": "47mB45o3LPSRd4REHumm67ESuHAxiWVEGNp3KFTFVEoUToefTfbBVxRSp6GMmAY3daFiTDvPyBUSVP1s9xmXw3xt",
  "key38": "4NRg1Hb2dY1zzKKspBGNaR5BCLSwfZKNYrAkV3wpR36vpfPo7ZEmeNzmiMpRfzGiTs887RETNk8TgPkEzNQgjQCk",
  "key39": "5NBoWtjNPkAuaDN5CxFSJ9F8cbpakpi72jXJs6ucv3mhcUGLnJi3zPyRzqahWzthz8pywoyVsrdPvWqbwSwkFGpy"
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
