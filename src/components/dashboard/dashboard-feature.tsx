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
    "4vVoPBSfv7tVPQnEveTYPageRoYQu9Nys8w8o4AKxC1x5c4JATpPzTEmzZdPZFAyQrLCnUZfGovWfgpUQA88PW2B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fvJ3n6BYLrELPZfmWP2FovcRx9KqxMH22cN7mSqxFedcsesHtUz6cSM8Dq9LKEXwabY93wRpLYJP6NqGzM1E9hM",
  "key1": "fEqdK9NXWQEaJSRZ48RbJj7gonaXw2LEPwjYdnE7eBy9kXaFK59y9AvtCQeSAW959hxQFzK56PqAkwtEtfQUQ86",
  "key2": "5taBVfqwy35gXQ4LHMNgmMndEy1ZeMKEyhUyuW69TpXcANJ3TvYPE88eB18XNsjsKTuLG1fdfC36e37br9gpWhCZ",
  "key3": "2xGENgJ6ij7fbBDCxDfUKwEqyQcP1TNqbNh5gr1ADfmJDzhdKMA4PcTQdbSmSWHoc79rj4ixyq9Cwz8duu9PPdUC",
  "key4": "57s3gkMt5F1CeJcqb5pNzXfLCDGYUvgSMec4Zz9TgcvehGmPfvog6ZuPbq2zFXYW7rcvvmKa9iSyZmwNivtJ9hsW",
  "key5": "JguUCdgjUyPCBZKfdZQDBHADTya7FTNmgsuQpuDVACMKLYXschHmBd92yXXtPxYhhs7Z84qC5PtPofN24oWd5th",
  "key6": "4PvzKsu3rUSPsX2zyGMxx6BBap7kC19CQb2mgWUB4aSXjaVdgBnx3rPPuJm2ixMESxvsEczEhjS6EQRtDi3gYdY4",
  "key7": "5Yk5P313UmJ3kjDP4ZLBHfkkn9GuckE3rTfa8xnw6V6rkfMYwdxpp6JKprwZyzwoX962sGx1RAVcR56W6iTMc58K",
  "key8": "51KxZqV7uYDS2CHyXKkeHvdyj1W6dzS6tL1wb72qcvUhLUNhySPv4JTUkeG36c7284wxNetykWcBzVyQfALweX9b",
  "key9": "4c1zEAop7i4cfzDoDtfrttyyfogHLtEvDWn9FZMB1cpGumx7E6DiemYxu1ZJmojCo77zt43Ghr8saWC54cMRYRvk",
  "key10": "5cRctU5dAaVhV8Whi54zShczwosumuoHqZ3hCoFL11supwuPEZrtsgptKUeEARYD3F4uN1K2D2LzXKaDDGRpEMKA",
  "key11": "4ALExzqn6AfPBuzKtXULWgJSMFGyx2LqETkeoRWXenAsMvVvmhfuMUigCUezoS3YEFcX3s24PEjUge6GqVGkeadf",
  "key12": "326DQkHoXJVkgPSCyyyexniEJdCwznQN9Xt1yikMJcsg3JTAvtTMMEqq6KCggZHe6Y8o8XnaaKCU4Ktm5thFTV6u",
  "key13": "2unB5nxFkrHTu4VTZgBtUVCzDfPRwc6Ud7A4SkEJsL5EmTRVt2GvRa4y1KgEifUq8oUbHy72sFu8Nbww8v8SHV2U",
  "key14": "2wv3zLB1AegaECJJ8UtRTDjKRNxz1vYd3pQZRzvznbgBQzuKoj7smP8edKkDNqq7xx6BoTVxrTXkyhFZZXStD9mq",
  "key15": "3ZDxurESU2svbfreyC7uSShqWmjHcaQotn1rY8Nm1WMBGRExxf9Gor4QMdakbrwQP5twBdvwa141ivuMSq1kPVn6",
  "key16": "4DpZpXmjcVexGLBthHJfPDe3orJwGGYppCm7Fratd3PBVQsHgmLsRJ3pn6Xs6K1RR4WGkCYYKtmKvwYGRHkFzzLd",
  "key17": "hW9iw1JuJ7RtNJtauM3bM9e6dDAvBFW1WBxxkyYcqjBRjvH7bZ1w6vo8TrxfWN8rXUf2SAkmPWXCUCf8Cg8J8ER",
  "key18": "2sfxk3fxuKaBX8ViKbuQ5bUfYjmiJhW1LGxixeuvUftUkBoStNpU4LvMyBAHRyVhYpn3tpmB4NYXdC5gN2HEG6qL",
  "key19": "5rZqZ7oLt8ewxLze9ZULViJs86dAyJXotJFS7hupjqhSjzW2eU961B5nEvGAeVn47Ngpx1HeUkkAC2ZrdHNKHEeT",
  "key20": "4BN26ReqkEKCNKR56pQGBT69Z82Nm3n9mUPCJQcfCgw2ENByeg7r6eraktiAfjucjDdZPQgJRE2ARjkTw2em8jDm",
  "key21": "241PNqwYA9ovEJr2LYk648HTYdh1B1XUriVrHY4TFrS2fK2xRjtNn5y7Y5L2tU9cpxPcu376DfJQZAMcJhjASmX7",
  "key22": "3UCtUAKhE3iHzx15WbNGM3oktDGTXnMtejMCVTr5dbiEqXrifJWM1Kz2AFUpdzx5tYd4xdZdFQJZ5Qm7annugXM3",
  "key23": "5fdFgEVf7psNpyXxMTAVZgxZHPCNCJv7K7jiJyHjZ6gr29wff8ML4R3sw2rqDBKCkPp1TdsPn269A69ATkt92dT2",
  "key24": "4imZ5vhNuiUvC4Bv3w97oMAgUqfQABAZ9n4WqRr4jdQLdcJQBLF6ia8NqxEDvaimRCQ1CLjs6FntEvPwzitsHL3E",
  "key25": "3tEGUrajuaRWtC2JyD3FvU6a3ijfYkx7E9GrnKv8rxBjJaxnwHFAdXXbN4FGFGBrQbpccpoVMgnfpzC45zNnbcmJ",
  "key26": "2VYwSDYxdzQ5XExd2QU93CekrQDnebUSVhH14DZKDW3tHF1moVfCvNL9sn6R2VhcXL8tGjtZTfjFMDpxj9HF8s2k",
  "key27": "2GnTybPTH35wngKv8ZxL1XPLubcqC7LhgC6Hp9YHfdQnm3bkF1qaGUEeDm7e2w1A4VCroXABpovPjJwnWqL6mkk9",
  "key28": "udL1ReT4sYVfhNzwFZz6dtTpK1RfWwzCLVLWfjbMj4YQKshLzJ3GhydMdsErYuiL6ACHyKYbYkTZZb38txkcngv",
  "key29": "45CkNFJkjA3TE3WAZE3rhrG967jP5BKLqXrx4GBQdLiXFKoNEh1Eq1t1onwgdAvvjMjKHN8TvgGhwQv4qqbYuYCE",
  "key30": "5FZjdgvNMq3XtxjKniAZJyHWLbXWEFHgyjXN137eLAm2skg17pXRE46eMZzkWYKx1LCFFHt7CS48fks6hpqj3SVG",
  "key31": "4ZriZHkw9SW4Yof57pfzd8MLuDbeo4c8xfSvvY468w65eYH1ZPkGDE3yiwXRCzSFPEGoNLdnQqmNt83vwD5qojHh",
  "key32": "dG2qU31k2xQc8XN6MZyPBsz662h3QpeajPHZWQovPB9GgyuYd4jYim84aBVjpWVVEwhioD6YrdXiJ3KmLNrdkrQ",
  "key33": "RCbJ4CiT3X1T1J2LKNZ7wQTMoN8ibhEeyaEZU1sucvn1ERYeggT7bnwMrHW5XxcUXdoUjAkNDyZi8GG738J3Tcw",
  "key34": "5ZpwHpZAbfNRERbDwV8Vb2bgw2KjUH76cXahbHj44yBkae4DmLtKroGzT6dAhXVeKy4LVBbwiYP17ZWGGmtNRnrr",
  "key35": "W7j3JffHCadJ64di4djDfgo45vmpwwY9uy8W3wDoSF5FvWZEPPBPF8br2QfCKj69Cw3F4tde8Nqf1QojLjWYQeN",
  "key36": "3F2WMxz5kwqGqU8NM6hXQEiGFx2p5m8MggxPs1XZhzGnrYHKXBPxJZaCi5iGYGF64NwEfEx8iaYRxNHPChVxTk56",
  "key37": "3azz2j42ePgufRBcys1iJsPy8hfGStTK7kPy9ZZ4zLctSJ6nRT6yTfmDHpsAnt8t6iwAAXYMPzNN1Nm6aeic5v1u",
  "key38": "5DG5a2ssQfTByoSB8pFaevqZc5X4iAxwt7P6YWdANHj9bTihzHwNxdcijAC4UXxgpyqfJkX2euz74rrCfDtjL8Gp",
  "key39": "52mhL6CXAE3dj929FbxVCLLnNpViqcmrhPR3q1oh5FeHbYEydBxzm7VyRdmJwazdb8MiE6ndiB6vtf8ZFeMx21K9",
  "key40": "FMgdB7omcoyMWktDsVryEkB7mhvGSPaspMGsY5c6cSWCEZPbu1EtJkGwqAqHYEmPYJeccLJzux4kv8dmQRoNfVW",
  "key41": "2T354a3eawquZZNvt9K1qJGJJEQmQpGGsxSM7ZSoP16MBVyZREmbY4enA6TB6iexGnUeXzKo2D5sAJWwYRGnnS5u",
  "key42": "63Du7NeSUg8ZqUegY6hDCMHTngeKRBNnofUbzvt6UfpWnMLpDH6etmEYVYZjYyjcLk1LeAZuyxqVLXbWYAhZpaJ8",
  "key43": "54JeqAv8jxrbve6doEM4ALFjYEBCBt5D5rjsMnbw8ZeENMSaaUQth2MXGXyQcCgKjuEjPp8UaVXot5TLm6x9edxZ",
  "key44": "2vST6pb5iV9esjKueodBBmAGzfU6aWAQSpGQjM47TW9ggeNFXkNXbvekxAbXng9wwwrpoZQ8pdsb7J6XiLxxFKqp"
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
