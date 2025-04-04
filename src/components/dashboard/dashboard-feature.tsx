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
    "4fwgMQJYPiiTYfR7UKhPRCJbEt5N2fCz9ZrQxSSsmt5BMNaiLNmk72gT2dPaVW31cjrALvJdou8LMn2UYZpbuppo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z4zbKbDciuFdGwD2RT93oeL6pA5nRCUXrw3dSu4hu3ZomnzZVRc4bCMpX5eK6K4CwLxmKU8uzHc7MLGtgamCSze",
  "key1": "pyRsv5uQfiZpyj3ywaQRaNQfpM8mBwkSgiP3iqSj5o4AAfMLepphAkcL43nNvqj5uTVoEVukYqJc7eaGY4uMezi",
  "key2": "62hSvE4s8QMW7aXqRyGnfLFR1TrTMopep5ywUUtbrECGuMAtkxx6gGvbHpvSpjiKb4ai98qTZ2GTCXpKsKSr2GAG",
  "key3": "2kUUyDLoHHzazq8gzpmvhByeGvQrohhev7bHrTtJVf54LhYHqUPbTBNcmZrUwfyQEtURBS5bcpw4DohoEduGEjkm",
  "key4": "5fNrY4uDrUfzcyv2VmhYea9jDDG72tis6H3U3W7Lpeq9BTEeG4KXvSi8t29ASJqHrCtXYWng1E6znbL851X2M9pH",
  "key5": "44CXGrnqP9Bd4gY7jEvgrqPyGVwX6h1rEvhfAiE8ugSuUcYTeV4HhdXBzhMoDVwKoyXgwB21BppA876kYKVmJs9f",
  "key6": "FLogQEqNT18gbzLCgqDs85kfiqWCDeqvbCUFZsQysHy939q3SCtvUwS1NUMBJaV2aKxBBFonJXX1ou4xy1GwA89",
  "key7": "Q21jbDgUg42afRho8gbCZFHzeXBARNRsBxf7ozyXR78WKNU5TDat3W5vb2UoWYzt9S9Cq5hQb9XNvhvrKB5Xvfe",
  "key8": "YXUy6irtUtsfRwyj1LPtYGwqaRHE2H2mCvPKDeNoY1Fry1U7HC1VXYmX7Et8UKDW4HqqUdXVXDaWGKUP79qK9iv",
  "key9": "n5zgxDScJWRCaoNivWtGk2ZbS7ZGVKex1HvKfqw6E7EMK2skUyL2WPvn5RuycQPsrTTgeqCeF4vg8U9oiPYCA7A",
  "key10": "yqpAJCWfTVpAqN7xi58rQxniJQ6Du9wAkpRsp6499Th4PVdW5QRcDnyggqU2ekGfpSVRcew4u3DWguRZDuHcP7v",
  "key11": "4wpZCyxvetwL7Me8z3wzLJUT1Wy2E7ma6xKyQyiWnyTsLciPyzWGJ9ZuvRh4bnWq4GH3nmgRaBXxdVbf28hBW9e",
  "key12": "3NQih9X7EKyCouSeyu6yPDn7rFSTqfQnzHmEWNPyCKdGPw2kk2hf4DaUog97oLLacEpKLCwZ46CepomheHGhnhNE",
  "key13": "u1tSCyCiEeP6JfAT8nBURAJpxPhddqy4XDR9irFsaD7yntYBUoQzs4xhmfg91NnNUacH5fXF2WMFsbhxRC289kY",
  "key14": "36LnV3uaY3vsReJKUEGREwtoPTAt4oBSeMP8mYweJWDJDZCYPuctEK4hA5KJrrk8Tw3pALSTJ9uGpMMPGzBAE17W",
  "key15": "3pGqKQf8hyGiU2sEPUq4CQ5crDKnyYndtqUsSoTVpmwnfJ9VoMLh2bf2zoeG6reWL5wiTxtVP6AG3a7gW5ihs7Lm",
  "key16": "2vSJ9emujBzrCwkSPVVmWtpVKhM1SMi8oQMXAkxVudsQAPUEc3T1UsGTDL3Ly1LSb5aeuB1FTQcuLnfdMVJWwnC5",
  "key17": "gTG1q6k9uMm383uJVUmByR8MdNKdtEaBxiRP6LgKFEnqnKphwdCHN9xKZ3cZSCeoagBBkzndjp6tsXwdj6TSBYz",
  "key18": "rE9FWbYuDJ7pxP1K71bnkv2JQGTY3C9AvTaehpRx5GfeH4Avc1WSCXgsmRLeVrciXuP3CzXRaY6xoDvZ2uQ3DM6",
  "key19": "3MSk3DdxUbpJSnYGxELEtHj16pm5hUvP2T7Qs57cf8BoRuBE1a151nP4DG7pjLicJ3XbXaFfBDmHoA8SoPD1uzra",
  "key20": "4AJiRNcjAPLQFVCScr4CBw2a8HZysC64wYjr1vwAtzpTibXXZEBDmLZD5eHBDgybsBsV3iZ3Cra7cqP7WbxREXoa",
  "key21": "45ozewSWEqVJpYiwHs8d3Y7jR6dAAqE7hXUuxJ2NSe5uKHnh2q5ZY5ZYYtRXk9qK9yJicRdJ4yQPD1LGjjKgQYeV",
  "key22": "3DQ5HegqJ67j4StjSBQJvqbj4rm7MYEYXhegmcJuDGVtKFvuCZyGWCsRDEZsNPDVKgxEwhkqbZjo4TSoGfWihuCu",
  "key23": "YyuPNi4kBcWTBPm2XZKTiVJvqP69PYA6YafC8rh241ZdD4Na2mK77TjvMBxHHYxr17SiX7auxYhVvCoEPPm9tEF",
  "key24": "2PWERkunMoatAVteNVhz8TBkRUavcEEsLjeiAK3bpQ9JaJKG7WezS8Ni9BXrrRLhbmbsgLGDWf6bzEc6txLJakHi",
  "key25": "3iCRh5fvipdiMCWNigQow4WSkqKU2Stpd8KSX2eJExgEHroeMicNcNHUMWEART43moH46rYgVzJvzXTG3vbBhy7x",
  "key26": "2KHBfyTwAC3zcmCoam9PTtGE1zWTPW8cnnxQBNGbugYb4fBT5VqVCEfjBaAhFtZXVLU2UbNdRyX2JPeMaLiyoz19",
  "key27": "5LxR5WsV24tQwWdjhHkvGN2Rjopdmit8PcfBJ8DadTaYcFbpqcQ4WyBUBiAEJRjvkwgTwh4d6dJXLSGERa7wkB7f",
  "key28": "36XwTHEa5FaATVFFQrfxBEL7A3hWANa8PDo64BUp6T1D68cQJhis3HRn1KvCMUhZk52pSDQDygMW69eqYptVgFkw",
  "key29": "3wF63dWUbsznuM2nxuSBGtPGw1JBXXnHKAidyZ2PNxF7KDE1qtCsYd8TxtUAsj2vxyNEShXr6WZY5bnznXehPpzz",
  "key30": "27PfdYp5FGV2BcoD6WPVpN3K15SDGkgMW9YyvpgBo7CTPDjbQfhQkE5PXnJeFQn3TMbS9ZFn5QWy9H16U3kfymkQ",
  "key31": "3uYRBEcYzibPgT1LzWrkPJ9pxBj99rC5iiSenVZc4aDEi4xmwjNk775ntNA7hU2ya1TX5h9UpbW7Z8ke4PogBTND",
  "key32": "2rPRqV4ee8nK8grUachXYFfoVeq6USTCDHFbADr7682j8tGZm5p37BsTeQoQMxcw87L6qGgUpt6j97Nz3QqzJchx",
  "key33": "5iJDnQttk6dEYtTgqi4S2SjRucezN4qRhmE4Y2y4Bb7V5DAZzWzZZeVF2iqmjkmFDtdWQZAgGzJwVESMP9CmGnKV",
  "key34": "338NKi6av3XYyDnowrgPhDnjn1rJPftKndhNnQSxtgxmTnCrXcu3cUWJupLB1CwYc3vGtikrSXdAexvLNpjzWrFj",
  "key35": "5NXSiYCnJtgnxn7bTKAg9UPi5gB9fxho2vSFN8SDHfyLbCiYDRHvYibGoEg2N6i3vqVJ8TqALrBt8BjDmhMNRmCu",
  "key36": "6VgMDH66zVQW3ZP2oD2Q8URmJ6Y72jtLww3ZMVinqaAwbDLjaw8XvNHZA8mGsU11pNscTnEHrWhwkvH96yHofSi",
  "key37": "rFTpRoVhvGC52HTz1tkA7G5JFCAKVyiU31wADiSgFqL2iePfgJA2XmPZaLMU9YZdSWxgMXfQNRaM36rZL3u2NVf",
  "key38": "F1pSMeVPR633CboEMprbVKQediD1jTEhMeHoZW8zR6kEU1ijNLrkFJS5xHCp9DL1f6DVEKE6mwQPCdWtokhc6U8",
  "key39": "DN2twr1BwMFptiV965tBwJ9CYzddFsUTRaiyMiAjce42hzFsDBtKhUnvvQLxcBf1kkncp1JMv1zVj57BNLtHBgt",
  "key40": "2e6bECfKzPSaPehJQk49ZAvQqnALbpUUVcTPmfaRyQZ9qE4s15LRXTiUTbNpcawaWx1XYHGsN7KGXonmuP3hMTQw"
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
