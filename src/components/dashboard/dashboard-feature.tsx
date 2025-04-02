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
    "5SHAiBL4koFa8ivBCkjNmrRYpxfezLQXdQELQEyNGPd4Jf84iWjfrFe2vFUsjikSRHijbcA5FRLaGqyfAH2JqCDt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39kSw1HuMpnv87253DWYMYYVmeBEnPU8g2vpopWZr2QcgchGfwUjvbEvmj6vCe3RhhfoFqfm3ff5Z2LCjVhwBpwM",
  "key1": "63f2wXsSietE85JPCoMSCVpWCYsQDikf3SVq5nCU6p84Ao6efNQpcbWpU7wMKYJiZBhGEarjRxr4f5WeivkwxP1m",
  "key2": "3ZcNWy3XcubxWH7VTxinYPuMim7jh6nE6WV3RS9933MeTcJWMc6pXVhoZNS8r9AQVFdxs4LfMfjr8ZAek63svVT2",
  "key3": "4ZUJ2x9BE85ptmgveffz3fjFj1r468pLrLAu3YpFN4Z5dBvkqVWvg2gQY4sxq7f18koH7Yg5VV6DXNV2gbFFvmo3",
  "key4": "3qCtQvtQJXrnJh75MevM1xcbyG87Cq6bi3A2LpuqRuGhvAaNEikNmQYH1vMHDvwsn7kYc1Z3ziS6f8aspEzFk4b7",
  "key5": "4BhSwHAqCqWAhpR1tYrEvknqj9TSM5Dm91r99j9AKrsLHf3GD6zwxR3znxZSfXfEPTamwQd8hMPMVJGM8Eaq1F1E",
  "key6": "58gstyrYg2UQaYnnMnA1zBQuCtNtXBcSV15UDAZSgKSQhBRc7e8qU2BYcaoFGgmzfkE4c7bydWEic7ywp8ZccRi2",
  "key7": "3wnYX7ZYjQcR8mnNDy5QrDRsrFScoqQzCQYuFMPnCJ1TmesA9ziA3UPBvcCbnagMPPAYwuHwCzQmHZ644UsuJ7of",
  "key8": "BWXFHhj4upNqcjC9zoo8cDN81vyC9Sryb19QoYmPXE4gzyBck7vSmHnZ3DZph5dk7fzyr7AeAqdSZeMCm6y5CFQ",
  "key9": "37ZxnXYrwo1MMBACQ5tKSXUYu4ymVWiJ9whX2uXXFQjrNMgRmPPdZX6Rdtbf1E997TaVxmdiCmy2Xhx649aiQPDR",
  "key10": "Gq8ujvzvxf36hQj3nm3vVKTkPNy7TBcBbsWSmnxEZCT9BKWsRynfRwzgaYpdBY9XL4UiPvvsTZVSdoGQkPEm3zW",
  "key11": "317cdPCMSReDgFz3eRriRTqrjgDYpsxmnDvM9v7Zk6yXiHiuQKWN1whA4jgBnKQF54mBd8mUyyvMYohGxweYRRX4",
  "key12": "3Ec4CBvJXLoSmTacBoqULPU7dbhqrQW3Y2mTPf6vSUCN4Syis5ScU7rvkp7nZG4z4ts97G9S8decUehydwUagjMT",
  "key13": "3hzwpRjJmUTtkiRSEJDwrgryabYAXWpECA23b7itQD6aekFnkbCQzJD8EXcJFw4BcnZmzbqUiEXHKN5yfQhWvjLL",
  "key14": "5uHdztcM8jFAAmrp2W7mSRdWKmkX322Fu1DNm2WydmWCUGWBSRTQFGm4Uqocg4GNC34MPzpzk39GeFvAye2xuA26",
  "key15": "5aWkNhjdxzAWGfEiLpsRydgRqQt6kqkE1in4KkZQaaGLr6nKRqurWB81Bm2gEw9RrdPTAgNhhh38PEvsHM9ers2b",
  "key16": "4LNC8aknX5bixdYv8kiSfkLBe2aNSZsNbmNAxB18zSawK9vGRge1ecguAVZTR4kZPfhcgfWvoBYZWnJrduPP1mwU",
  "key17": "5vy7XeUdx57shogCavxumDetotKjHbmcF6myTCTuE4TpsZQMJHqkNxkF5bKunxis6F6tNZhPr6aiXiF8K4tDLT5v",
  "key18": "8DuZipnehvBBEUqAKRy7CQQKertjninYgqhfPsVy7yVNSajtDbq3Gb6R8WinWLbgDo2LmUBAEQbdR7WjXkaAg5V",
  "key19": "pnUFUnT1ysU1VSXqfJ2KKqWkp9nApj5954eD2piperndmV6vHgPtJHipfqP8AwkDihWc2oZ5GHGoUuK5USEnemj",
  "key20": "7gGMEef7vtntQZoaa4gTjpvner55MuGAx3jB89x5FfZfJB94sEwfG39cEracxXAyZoAycPJwfCBwUJGhDgAk9AN",
  "key21": "2LovRiS987rB99U94A7pmbeF1gRdz4J6ZAkKaPXRgBhnaiNMdgtWEn2jW6jLmEetJc59gJy4aj3T62Mx78o2Xhgu",
  "key22": "4vnAfutt5fgjj8AWdrcikZU5XAW27Ww2T5NmJ5zG4wDCyqimdC5hwaTMQ7jCdhfwmnkcrTZgarHbDwZN58iFMzeN",
  "key23": "51scL8enXjzScqtxmexDfwJe65FSKbixR2djXBbZX6jYCGbbnRy1cKhzXCRmMDuxmjhEdVNgbcUwueTeukQawsHK",
  "key24": "2XYtQBKYLouQ5mdJJ7rWZFiLxo9p6amFqa5BMeoPAGLdm8xHKyhMUXtJxdXTstzexYrsckUYTckwdJ8boqtamfs7",
  "key25": "tkfZSuRSTx7dCM8pbiPBJ5nVnRuM6fa19zfAXQD5YqikS4bXFZL3HrnE2feAc4c8RyFrSudDt6ogXr3xvp6rMfm",
  "key26": "47vRzqXwJAcSuxSddumJjSbb9LW5cwqX6p3KyngBt64taVupGzYrXjBcrBaUvumAHRqYPPeX6Q2AAGsAnFWX1fwb",
  "key27": "4oiwTShPR4g2weiCFRPDbesEVNRXzfp1brwwrfQEGdnbz26VJVEMBv7rGzhf3Hvy4FKLBZGHfoFHw46Z21W28hF7",
  "key28": "67NFyuRYuvBWJQ8VShmtCiMkGmbCQRymsQ2WYRfdQMBHE3a5U7gEKC47XASyYZTh81wmhdfRVzkUR95FFuo4m5RZ",
  "key29": "3DsGChPHDyDvkXH9p6ep4u8e8FvYqaLmAJ8nwsNdsiVCRQq5Xu4dVDUMKdBuEPnozCqW7zzmwueVCUcJ6zBofECE",
  "key30": "3D6oGpYCwQxjm2NTUASThwzmxAhM6Ln3F2EZ7iW8X7sDwyh56sJrQ46NsEqRC2vcVHvPmF93miGFA7GiecGijASD",
  "key31": "33NDhXc6DWfhpZXR6TDe2iet2rKvsrujKpEnq3yYjkQQwb7F9A5Jk4Y9A2S1dYNCyQXztio6i4KGJbJ1TFkUbtNV",
  "key32": "37FHUL8yFWqpJ5EG9GhstAB6b2b5AxmyszswgkhWMqK7iqfeszsPSyLCTy2dxiKphBp4uWhwmF8zgaeyv695RtGD",
  "key33": "4y7v46JcjebkJTztV7ZPRhPHeasz9WRJh827vxT1SGCwqGetiFrS2ghSdMPVGsjR8nwQwN7xwCKx6e98uBca4jQs",
  "key34": "125VBMSnFhbSBgTFqui9waE79fU6S3rD2DK4VTyMdzEai2AYUDJdguJzaqg2yDrvQUiPLUdgM26euvtr3VYjfzTd",
  "key35": "54SLku6GnhPXgDnMw7mgVJuxvLy6g5qkFvnDQdv4Zyv2wsWvyUpuNph964dk8vqKBHUrYn8NK6EJnn3mB2mWFiYD",
  "key36": "54VFoUJBkGr6Se5FJ3qdnVjZ3Tk6MUTQ1PnxjFHXmCbMzhU9oCb5jMBFTYjE4SXKNaQpKHL2w5GQdgvY8o3czEnQ",
  "key37": "digRBQf3zUe1SJWMdn5Cj4cn7bx4v3f7Gtimy2hpkTtaUnpgd9FDzb89HkbbdzwD8FRDF3uqGj13qAhNvhrXyWq",
  "key38": "3Kjde4im1hJYmxmbynqqwe7YaGpN3BK4pFfM9KyeiUrJRhduSFmgcnvU48W6BL9GU3Tw1Hy9QRyK6ybTBabN18Hc",
  "key39": "3ta7X6YvprYa4mY9pihmXEBzM6QLyXYC4ibCRpM57TLgEMfcLUhGePTforyS996SMfb5YwBASbMcXnrNtj1JYdUD",
  "key40": "brtktm5QY4p5wsxMubLDUEXLa9TUEUEfN8yotvtmeUtkijFyQ9P9jyjy3FzBTgKBJ5Tic5EfYYNcAuivGMkuuuh",
  "key41": "4VACgFzL4Et8Hk8CJXetYFSqhxdtcbB1UJBtQq2BEUUHMFv6Ads37gc91L5gy4WoUK3rtGmDEndwinJtZJwaRhc2",
  "key42": "2dPznGZ8xBgjo4MGyEiJerkXcYzb8hMPTNyQLTUZR9eRtsSrCqcTJUVPbtTovYPWVjDGdHWMJbTS3bhbeFqY8nM",
  "key43": "4wqBcEPyN1SFrfqN4L9pySWDrypeE9kUhxN6CmRDgrd91wuicDvHgZKxg2tZBS7CgeGjHD8mieekPTQx1YUyJ4mw",
  "key44": "2wVtt31GRNdBd87etZnrNTrPvBUC5mk5dbkpW4kGQmzynW6Rz5v7PJn2QVNC61r6FjxaKKC85JeDUUjFUkZDFBUx",
  "key45": "gYQaYPJCVAC5Qvffov9BZQstgxg53k5gSVBWrfqG6n7FWugcD5T3ZY5WR5roZHAsYN5n4dhKMGjTVjWm7JP2oER",
  "key46": "3PQG6xMrz7GgYQj3L8Bf5Y1Pq6q2ghoZ34pKW6SqZ1nY64Shp2hNhYftAKwYnFVUUR4nF1sSVVi4HETiuTj6MLQ",
  "key47": "5V7AzqGzMGV9XFTtYJBxbuq88vZ14uunham5BDEDZHrYSbdtwX95kJRjMDFWaHSxia83S2CCHPL4cWieowd8Y6v5"
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
