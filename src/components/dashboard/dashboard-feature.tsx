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
    "2hfWndMizE3SZV4E2fSHtX925z9sDNgSFBsPywxze6bJ2LAdqRL5Lg2RC6drNJtX6uAMUGuVcGrzKgXTzWZZBiSt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zt7W9mkhDprVqGEHCY1Mt9qekhSoi86q9WxsFpzrkndWD6vKhReAtom4sciJgWGrwhrGU94jfh98FhLzsc5SXmp",
  "key1": "5NgNyDxWRigTB7urJbJFAep4WfAU9n2eS57xquqTR8V8q5ZdThY1cBdddVmSVxTbGaFmJEZGYUj8Lv2NK3dmTeS4",
  "key2": "2pjdMxjGZwUozdpwUZs6Qpa7Gxdd7aUx6DfayJDvvecipCxp4wzymwdfXGyad6iR1581BvTnwt2bdpakHncrvFBU",
  "key3": "47VMB7wVzUyXfsMcCWnm66gzwu1Fdn5xPiaYFWzYaeDr8pmxQd6r3n7EeLhBt3gTbLA9d94y1MPqHtWLcEN7xGk5",
  "key4": "2d5x2VnvPozTx8YE5RA6pa4JXuYJz1XmbbbtD5FWT6E81nhHZaBkj3LmqJSPJGuJWe8meBe44MDbUB3v7u2sJSpM",
  "key5": "5EVdxC3jAauj9SQancNaEaCMKSERdFVPct3KpSqxDPvdMm61xrowgDrnHLvmKbRoVZa16JZ1ZFfK3EXHGLf9ZSXZ",
  "key6": "5WYFnvaPrXCmK4YPPjJpHpR6Vw39AcBdatSpmj3DGpfc5BpPa5PqnLA3YFh8MqRfeAhBh1TD9EJgwSDYzSRi2PV3",
  "key7": "3ph4V2fmVxuSawV4P9B9CEPBrkqnFaauirEQVyNcwNhz8VhLL3aB9EFhukrXgWsLgRDX7Czeir3iGzmvjeQrRcaE",
  "key8": "4hpFqHWDWAKyoivo11kLyS8BA992SVhjBLqNiucG5YubAAg8Pi2BqTHrfuZyBRG3xAzDCwmzfHhnEBWBavcm2KWb",
  "key9": "5DE1QbxfWNs2WJw9XcWp12kHwDCkfNu6MKmkBUzejf9ueqEAjJLAsjgKRkjYW6GMkpGkU8AHsHCeq1SnGgbpRKme",
  "key10": "5tBpsRwXTZKU77X8FtLra4ms9YhoRVvvzQbAF9GDdtd49D51ASCf9vJep2EgjgvTSqJj9SzpJ49sxWPwixZpj7cQ",
  "key11": "36t2hRwFNHZbta4L36PEpYnXQf1XoJBtDbhg8AcVV1dpPst1gp9SP2vzvNgdxDspiw1mQtKnBGU9KGAvcENjZZ3R",
  "key12": "2UxGWWkZ1YLWtCdubZzXr3kiZotveFLU36dLgNjaQRnSQ17tne4oD9jfiC8j9CgHksrxHPvtJogQ8FUMKcN7wra5",
  "key13": "5XTBt9AJ5L42pasencY8Y8pSgkYFwhdqEn9aqHNAbWGSyzBcbKUYgXYVg5KPARu7ZhB9Cm5jq2XjAHYDHwDkUdRd",
  "key14": "3PfjknCpLDQGkSzrBr6cCLBUGEmcAARsXhcGMpHg1u6P421zgUMZjrkr7CCZYFEqYMjP8hMPrWbPXTQWfW71nsfM",
  "key15": "2y62fG8nzRSGANTKwdrNoLVbaXAtkJEQx8WggUnT2nVj5eofkjwPnFjaVTFg5kvpV16p9TR1C2np8WEcyAtXcGuc",
  "key16": "2ttvCuPwbjyHP7CgaSpX34NtGvxk6PH3mrP6bREKaY25dckjmowNR2pfS4zJD4b6VRcT7Gv5XA5nTTtYDGCVPsSJ",
  "key17": "4Ur8efMeHKXYwLPSe6oNqiCv1BX4f7rRYBTY3PyixCRJaVCrkEHqxSBLuZEHgBs8cr1HEyyHkLYqSegUugitj9Hh",
  "key18": "4enAHtisGxYacDH8U2Y2fpxzg3mo5Jx6ujqKKj5eFBQZBzLBtiPrSqZMJ7aYHCJwvxeZWzCZdDv6GG7neiaSVB9g",
  "key19": "28FMYerFRNWz8bPfUjNMJUFhdtMzVMMBKCkswr76eiyb4ixHjoA649h91wAknLPDH44wbZHTRSH3vTkaZkB745bm",
  "key20": "4QTs588UW3SMAm6sgf39dL1nQ784bhG8TVg7FkXrZn8szTg2MFvjj52XpqPyU52mLyLJzKkzCYzUWwQmzn4niPni",
  "key21": "VKxSNnuByUh5ej6kVZsogR3WRSnbuwMdXd5RMuZkeuM72fRLsL5oeowRf1mwy7WnoU1ELetBQUXTG2ARNo6uw1U",
  "key22": "2h6p8D1A9Q5jUe62s427HzboMDMEUmuteLBx5TBXZvmJwZbQgGGZyNjFmFEq84syZMHHqWrruXP6uRqwCY46SbXU",
  "key23": "3hiJ3pA2L5eaT19HPWLLqTQ2UnSb3znLorHTfxa4dqEedntZZPFd4oeWbJEFjiE1ckvRJrUteWrzMRjSKiReiiuG",
  "key24": "3w1EAPg4L3z7XQ9kxuGSUWyBfxhcWavx6CQFVopkk3BKkQwCMNG4txSw8BkFZcj7v1C1H6ospXTBFaSSMFwcNdiH",
  "key25": "42LWFDobKNgAdVTRZL9octjup1cpvtdQZAAc4BzQgTFcbXxngPnPHp6ZTuuXxmJvE46xXaWBhpFfw7fFk2tejCwo",
  "key26": "3ZYkpewNQGgVRMFjtxd5AZ4rqc1V5Hhve3LK2v1osTL6GhuEZiA7GnAEG6vKdwreZa1a5yedCRMMS7Pmtwn7owuw",
  "key27": "4HyaorSvs6CwxzgJDumznJp6X31G5rC4h5N7BjfogkjfPDam25DuoHPdbFTbnn1Nstqei16sSEFDbP2PKcYAKmSa",
  "key28": "2VMLEFWb4cLVL4kHpRixHEdzfhSjvccS7sny3LKLXgABr3b6YEuaRTrCafPs272unyi3YK6XAeSXPYCVUb9AtnSY",
  "key29": "48aTgH5nXq7Vd7vjeU6yrvafCNNubuMm5vX2feJ3YPahBaJ6WvKMMKWaAdVs9m2nYDJ7iYz76PhM1zKGXsdzb2qj",
  "key30": "R62MySX7tBsWkvELBf91DVenHTTvxYfqGvPRSDtfFNtG6aWk3p2kATSy1PBo2KMTFRBcj9V9PwLYBgEHHLsxkDW",
  "key31": "2Gfz7vV47NM7JfxuAXd7o1PEUSaotbdXzQRoFYSJQirF5p86KgaCkWbLbCRtawk4QdYgT2aNdeby4kxNVkVWWhiT",
  "key32": "5jdsurgxLU4xrVaYk3eMV6k8YbhbbmmYAJ3qr6sKbuuFYuCWteFNQpNNMyeuL7YoMnD7tP8TkG2neGSY6QL99GSB",
  "key33": "5FdA9ZJZH21A7gyraESF1jX1e3THNxeXy2RAAk7XtRyPQGSbZyRPocFM9RjEgyQxQkrbpUjt8b9bmbkCUt5fyF5k",
  "key34": "2kBpCacHWt8dNXZm39oivNk1FBYMehxQokGPTCV21ZpPGzbZXuD3rsA4fJ4NetGwBUfXK4fn3bWb4EaTn8g2oKBM",
  "key35": "Hq9uTmJp4behWiGtZ6KpTDoF2wnbbXMDnJofGtqg1KGAfDfkLWUP9tPmSD18eVjGRCREQXnHE3TYAVDJMCqZv6b",
  "key36": "5XrYzmhQb2ZPLxfmYPGLrsta2jSA1oGNcNjiJieF9nxszWefy5G4pfpq5Uwr7hQFM6npvUAZ6mWK2KJKrd43bUTv",
  "key37": "4nQm14AwAkiMUBhM8bii5vTMny7ccHnKqsrLP5mGVVo4BXBVJcEjARjEHUmuKDBPEqkwK8Jf79qdA3X6m5bZD3zy",
  "key38": "2iqUsEtjXDULEN6LSfCfHEfWgZBDu1QohWTd1ofkwhiGrQ7YPRBEbydBNo2eoDPD3cL5SC8AnBYtQv5rdvi7iAGt",
  "key39": "5m5YH53AJ4wxMh2YApPnzz9yveZuSZvaoVT4K84SeYxW3g4exjR1jyBrDAAvY4cWohGbGxCvNNntiajsYEXNx1hN",
  "key40": "2JayRnXrHPmhupT93goSWefswE8y5ZNScrZvu2ScMeaUHsWKhvypBewQaPPfhmwdfGd2vXSPcGQKmUFPPjyUMcNW",
  "key41": "5pPLeZTPUR9Q2pybd5o7Ve9Gk6cdkRbhXjgKF1Gnrud1zZjkKQkcQibRFSEnbhUZQQxe8bvc6BZd6ewRm1B7UGM6",
  "key42": "31wvJkdVC8DV5QUTuHjtKM5FsXsYwbUktpwxcGMYKkAYjLxPePGEbYswtB4k3cfuVajAs15xt3uSSdhbwe4orooZ",
  "key43": "5skx4KvHcvM7nMdf5n2veXThMbsvztvFoseXV98jNs1YAXwuZC3BKBUK6dnzvwQ3k1WbQqjCwksYtVexUZUbTDHg",
  "key44": "3vaKwACicBxYcpREwJKtBB2SsQR6vxoFYVPvR3Kc4Z89YNPLRivpkuqHRcxqaFki6JkCb2ydmLvcj3nC2CxM6oyo",
  "key45": "57qQY1ioKgtSgugVpjf6othcNnydLMPD3EL2WrqyFoxALAiu6AuNDQ5hGvT1uiKtN92hgVt7sqCjK61TqEvZ5Wdt",
  "key46": "5tcfHwYkm46YyKFrRTpW7NhswtD2P8tc9gJrPNsKLa3tMMyaM2ZwuJgvmYT3ZFhqmYFuuuSRLWpWSHHQSKpN2Xbd",
  "key47": "2j2FAmmQRjM4bbPLkhCJPS54U6iZqWSWXzeS1LtdV6Cbrs5ZpayKrdqGCjWFBs9suNmenYWBA4TQDgKveiv8RHJN"
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
