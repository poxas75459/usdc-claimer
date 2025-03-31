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
    "2keihnaVAWTbJabx216yhTLoYqbz18xEHZUrRXQ2CtrNX5tLLXySR1QskcGnxKaHiDt1S8J9HyF7eRA7mAUDTToh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36Rz3TFWUcH3GXYN4AASsPa7oXbyZWHewd5e2UzqCBZx5VgpzbQtVQVCHrkWDXa5nHxgiRStiXBzm6fSZ2GtFnpX",
  "key1": "4L3p8R7ewrB4CiJceFvfTTLTudpjEWZfnt2sCj6mWZB1HuHzGmW4WFp5TpTPzZjxSgNosMpP3r1KK97TE1a9r2SV",
  "key2": "21hhtEucWi2E8oT6Gz6PBHBUmLXQGYXVp67tSBzZsB3BqgjQafvYDuxRk8tNdwi4D3SWtgfVCQSw9wu3Nse49BZJ",
  "key3": "2b3bvnjdpQKqYFhFKvqbwLFkqPmoTqVXPjjabJwLvX2KDLpagush1rpjVrpc6ngX9rWZARLApkZL7RD5RrpJLqvZ",
  "key4": "4GjFDUCHYFyst9sdLjNHxpnbWgKEwQWeXVHtEWPrrbcfHzjkpZbfNn4iSuwvmgi3G9svBer1SpTVjKsyczcW2tJu",
  "key5": "5PcfBon6kpbB4fzjJXbN3xMSSVYya6DoYJuQyiqipzYrdahLYT4ZV3VDSBxnUuTjM7AxcBZoS6PrPJHmSFoz5ZU1",
  "key6": "5jZNcdRpT4UZmYqdKHyPrgfkXK9YZocb1bmAFHq98GdcbqJZroCREx6s6YSUsw9xwygMLMRh1aUWXzSKoDABmibn",
  "key7": "2ykFU6VBF39U9hfHeG1gZP3ZB24XBrSWoXpNXMDX6KYGhHmKJ8ry3rTz1TMVzqiNVWf2QmKvh3hktcNdrHCkQdaw",
  "key8": "HSMQmz5WNUCfVqZVossABse73BhEDmVaCqGiX1Xcr272txBxaPtAyeMJ8XyDBqMk6AXP6y8t43H6DcQE3kALyVt",
  "key9": "4BQUf4APdsgMYXGt5GiXJvMRzJRJHPcnzPwD9UZ4REz8JLCjpgLYA7DbZfB49ySNRiX7J3gGiDNTznzCxWAsjKfW",
  "key10": "4toRFGyBGQek1e3Fvwp1aVhrK8dY465v2W2ka5S37F2HzXERP2i9v6G54twm5ffFrKepgWrCK2JKPyXEjwpc9Rf8",
  "key11": "2u9Z5m8Fp51sKeeSS5g35WYPP8wRixxhyS9jFVDa7ARbrhvHK2cujZTa4fwGsedQHE3WEpmtxRRizKvcYRojxQRd",
  "key12": "5ac2fdE1N5e1TaUqRJHpo3vu1LGtwBpUJopow76mRTJoubLkkUfKcDKtp5sMqH6u934CQbx3ZyqbgHZfGu3UsR3P",
  "key13": "34dxkH6JUxyYcrh85ZgTzX5iwR6YPa1HTXyk331ttxVFDUnvPUyH5Q8DTVTGVSsdULSBL3bbRVEiyKH2mvpCDfQD",
  "key14": "wJ2nQgSAVMRwQLqSLjudPFt8SDWhvF5iBgHRr55tJCMn3FqxQwmZNH13AMmWEDHkqJ3BRUGEJCWgeR4Wy9HQ88W",
  "key15": "2u2R8R5nDJihCZcjHFiAenK7XKBAkTe11UohhaZ5F5MVqa2ZYQce5DpPPKjrJtzS4wu6XtEBnUxZHgu2iXx7Gzjo",
  "key16": "5H1Nzw2LEgm5BRXnLvVX7pxFV6WZSrotxjRryTT4jrGhCgUExuUN44ZqY6ehhkAsE2wFo4PaqJ8fMxUykWmBmPwY",
  "key17": "3JgDcWdskAnCMaPLMviPdzUdEgam7FaJEu9WmCB6o4tkBLK42FuPjknniMw4voFfZ7LMqGGTwchXw2KEtJNNRA6w",
  "key18": "4oLALJGHvxAR2WUdbN2D7hemBskV3vmHpYFD9TABEggWZ1uWvwMKh4nU1uSW8ogDhrogWhC7VrzD6YWqZt6Z2LDm",
  "key19": "5yiHQVNbBcdasDfmS2UUq5oGmr3prQCCTvx15wJwaGSNViCd7gZdTtPjjbjgywtA5oagfkdDtm5K3QA9MBrtWpA4",
  "key20": "UegMU7NtHc4xSJTHLGPF1RzRzXLNadC7zi6t56GYCPJWzNAtYG9CuspAYzqj5gpPyprbko6ewizRyybNxKE9iY1",
  "key21": "2R1LPAM6sUig8P4Rmi3hkh9WjLXezsEqoFiVK1pJisQ4JEhrxUcWciPZUM4fZdiYYs8nTuQCEvhM7vLq3jK9B1jj",
  "key22": "65vtsMqQxBZj4UGoJhXzw91QnWeoAUiEsbkR8YXiknsAKEg11j1to4PcEt5A8ELgGL1aMEbSUkpJqyoWQajEUbx8",
  "key23": "232vpRUv4EawfzK5fUnUed8UwymVU6dNbmnAHczZb843v3CDywsJTTHYkLrpkYomHqFPDKq9JdP5DDH7kJ63oVTV",
  "key24": "3DT6b56dhZawgFqGomXMv74nfVnpf1cdTUtyKcJicsNpLEsyq33nxpvh7vCATWHgbQUUoXtXRXJHbx83ksojH8kp",
  "key25": "2EeisHsnLcLLEbgG14jHsZ2uyVJhRWU8sQEMk9HdirBvVDftPMxu1R8pSJQyQJbgbRHYyYEWuaHu7X2FgNMAHFPZ",
  "key26": "23unyJmznoLuyueL4rpHSQbH95nwSHoLUDCLbF6GzNSB3EiFMUq5UgE1ezTq8Tua7uNjLC3rGUDrhnuAZVYYGkvr",
  "key27": "2Xc29nevMFdchm3h1qixcXNarrh54k3gVHy7Ws52CWZVWyTnsrVuFe8BFFC1q3LAbLzWVwkDSV4iC1bhjqmir8Py",
  "key28": "2Bk4rDqh3ZqwnMaM4or8yc5SnWnPrGCvPQTzRh88BbGWnwJZjUfcZNqTvtXHqWUq5JTRa7zMsm1cSAwoJ72CgEyB",
  "key29": "3ob7yd97HqJa8oNBJkQn7didXz3WapY1sNgE4n9HhKp9DEUiji3D3T86cKft8pYLXeaDz9bBrEZDWhCoKRvo95Yn",
  "key30": "2Z9qpzCPWafdqrxzB6TYCU5sYiCjQsFMT9bVBGX7ueDX9aunQWEHWa3NccMRE5vqkBY5eH7iy8xtm8ZDVMqKANoD",
  "key31": "3SPGotjUzjbdAFis22eorosqAdTYAnqjJ1zrdyYscnjSynRs3vy3nyPEJVFgcZrq2WBFbeARXYVENY1fMSsRbH1v",
  "key32": "5M7mccbiLsFBdTeBCJULabJiXDC7kmW1iiTvZay73qnP3YYKXNqB6CfqBeFFDfXu4nbxf8Y5eLnb6teLGXVxnGf6",
  "key33": "wwrcCiHGYZnMSWCTG33ghsqkpJWkoFnoRrGFtKRMB5R8jsThvcbQboWCa87LZhk3Xs6z59vk7CN7fBGbuxrJEcV",
  "key34": "5yC1U28xoPbJijgGTEifZFu7EzSPUF4ARuCg3Mj9vqJmjH1bxcQBTzXp75rNNjvnBpq3wEFAVNaRTDUNZ6txSPhC",
  "key35": "NM4U65fMeABfsB3G3NnJb7B5mCdbmW7PH9uD8oe2it7eDRwJHXWDwHmobv1JP6yH8hRraivWmyhRgoFgiss74ex",
  "key36": "2DVyTkaNTb4a8QUabvm8UGv9UUAfpobajnxSVKqKiXfA8YctaYNgv8pVsJdKg5M43eyVVS9zxGroFek8u5h4YK2u",
  "key37": "66TAJ2eAF4LR4VssNKP6dPudY5Jx4Sv4We9dNEZ6xSCwk8JA1hQCjh8DGUdU6dVEhoV36ebcRDzrYrFAaEu8PLyc",
  "key38": "4S6Zugu2Xv2KdR1xpQFMLpgJejNjrFwYLwo3oRwTZPYrN8rBU6EavYywCzJTjY3MzUaVfFGzc7QMARy19EfjxmjY",
  "key39": "gYTeeR3ZZoLYnjw3GNTqW63harpr4UnsEwVZBzDWPYFdb9tc6CxXhnry5nNHozumskMUVZY2UPtbqxj2ThBaW3b",
  "key40": "5M1qrcWZLoEAm1hx16MDTAFkzXdG5n1dX12d2phnv5D7sx1SQQT3s3vtmro1hXTKVBwpEVa2WE73PMFJRUt6iMRt",
  "key41": "rXuuAyhj4jbGbDNjUCWmNDtABPuoprPfmvsPaXvSu9Pgrm6WJ97AvmyezGwxgDet9ncSqbvQxU6KJ3tLdhceUFE",
  "key42": "4JapfJVHyavA7gkwm1HUnWK1adASpkDJRJWwoYtfSgRwpp1Mtyn3pQrYuVfXG8L7i1Zhz2URjzRg2guY9PLCAq9h",
  "key43": "2HywortfmCXn7cL8S497YSJKZJ18zuJHSCU6rL184PrJ4Ce9d4rGKyKo2CMvmzek4RAhLrHAfoaXVQtMoNjBpTcw",
  "key44": "3T3cgzL9nTWQzEK74B31qKFDUBJBt3TQizdpRiosjG3PTfY5zD5bhLTyuQHw33dgakoEWXatW78emi8U6cXL4ume",
  "key45": "3jPK542yoMER4wn7R88wwGKTJQ4bcz33rtXFdcVFFVBhRbAYHju9gg9G68YiggnGURQhEvktu1hxcPjf41qCoHnF"
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
