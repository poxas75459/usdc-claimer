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
    "5d5mU1cy7sZhCHHYCELJ9qqC9zeBp6yxs1mnfGhxz1WiQhA35xH4x2WYfnvYfLEAVZeC6oEH9vr2BTRMh8Fry1Za"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RKKuHpskhJpaepsDhENPXe3doVjhC9ERQ6ARFx4P4t4o8WH2VegbWmZEejiXXjYzTrsnr9JzYnkFwU6zFBMMaUv",
  "key1": "3t81na7gb7Qc59SVR7ews696Y2yMQcVLe249ubNmArdJRPMaUHTgfRSKF4pqLT5d6iZDMNpGdzBTXKFxfzrwdnjP",
  "key2": "3hK7LHjNedzEt6Xfefy4FCzmPiGGQwEkHmDrmhSp45g7QaYARhaZEjwGy6W1bv4aTRaVBM3iRLfGTE5GZCTGXb9D",
  "key3": "Sf6cvpHJHZa6rnxpmpYZs7ydbk6jJjeNgLPuruEMcvBvCtQKfvgEuJVKjQ7FyCmcRiPtNr4WpabSA4L7enp6Ubh",
  "key4": "3MWGAVMuxjB6Enn6np1BQeUNgPqSY1XZBYZUHp2yMBbJXhB29LDU817RY4NenmCNa1j5DChhXig8Vg7LgMd4ZSeX",
  "key5": "3Tz5RGdkvnapbou3HDpdTjTv3QojCkYBTQfMVrogzT6Cu6pUwVgKx4Ev3vSo1TXCeK8tfNezWKatAq1j5EUzsRrR",
  "key6": "2jgaYgJB1hLiauvwaofywYcec1xjYmrsHHucERYQDjFFMCNm2FsSX8FTAziAhAq9g8kmwtHxKrkThend7guqGD1C",
  "key7": "5NYJvvDRDscxRittZ4et8UPuz3iR2nfZPwiWwrt3DZyE6uT6BHnvd1D9ToWR9PpN6iD8vm9y6Hq7b4MqWgcmy1E9",
  "key8": "5ho3Ut5qfDYXnnyrgztteaAXFEczHtNvNxGanyzZ5vg6Mf2hQX9TzwMqTeK97biEGj7QnaWwS5Qcr3a9PtsJbqUj",
  "key9": "24mvWLkBpN4pVmU6nXEHhHZTMoX6fzi3E9QhsbjfpBXx5g72jMekbRVMaH9qcydgqYEU9hVqgcQMQwEFjTg6YcRD",
  "key10": "6NE165QMnJ6VpVot98HDZ1RcrcvfmvaC6D6zJdG7s3kjy6ch3aQuGTvjRyRYHmpQ1uMEhqCBX9RjS8cvKhsRJrv",
  "key11": "5ung15MXXCR3NthrscSY6igshtyDfgREXmVBz472HLFxBhhLzJGkwReJ9QZpTP6Wk11UwTKrwUQYp5wMjpEovnYs",
  "key12": "3KLeH6jKvuXSYktretDNCBPN3wwqWK9UYEhVHtpWNjBaPmksPiCpzQaUJjsuP8MZzvVyaJyLhsTqJry4HmY5sJy3",
  "key13": "hgV6UGYXNyaNFXQmDnssoDefYbgTfYajueGpfRyFoS1FSiQyZk3Vu9DEcSzf78oVdjqEeFdDnpCPdmqJFzjuDZB",
  "key14": "4RS8Rzos5A8vaMWLRRCXWFDvuiVpTgCG8cXysTA8LX4xr19VN4kQ53KAsGGdNh91T3RRQWNaLU9ZZJoHErMhnJJ6",
  "key15": "4thtKE3i9eYFa51T6Ba64MT37JGHSBDjbia2f8MPawwzGRuRaFhpqCbuLc1m1D9wJTy9HtiQ8q8ByeFHNEJj5JhF",
  "key16": "3mfxiMtJmBukMuB6UfBKNMTZHoYHVAV8itDNtstMMBfcaYLAFfDrRmceUp2u1ktyvVfGri8Nbah4aj57WZRwcNsV",
  "key17": "22DYKRXXVnD3jQ1BhYfRpw2tiRWogEG3vbRFGcPsAC6B5mgpw6YgT4NWt6C81cVEqdkR4XdorjtjfdMtNhASQ9o9",
  "key18": "K7Z2He4tso1XgkjCoy1k38JQ8tTntHFB8jLPWGwDnm6DBg1Mwzj1LidrHjmUGejANiFFT72TsZiqW8TYAGZr7Jo",
  "key19": "3oRiWKqigyfWjCFRk3nR44gJJq96nQi3GoSNoiLx4ssKndTFMkHXtGDfsVqtiF2NnNQ9xY21n8vgdSMMnfGZ2r7c",
  "key20": "5mEouCEmMTzfNPVSsbq4NW8kM5b7tAMAXfRNCESgj8jBrw3QANyiMAu5mvsTXRqyX738LQJBJdf5wY6kz6HUhCzi",
  "key21": "4TqLfLsfSKkBbARwgCFUggXxoDSNxW6HL32wctPBq37hxt2Dbemgfn5ziq9WGBcbZa33nu6QVpjGwekWUk8DURax",
  "key22": "2vSiqJ8sPuKhq1TgdPbGfjuQKQEjnMyxw3Brsr8m73YLYvyCeGfxkDXEnVCMdswwz7fLuKKFELnwA1Z9cHmzkKTw",
  "key23": "5LtbQamPrL4eoo47pojH8ZV7SpN1uTSXAkbmfKtFQwHaz38TyNTCcyYM1pfEso7eMdjf5eT1a3izrLqguJMpAbC7",
  "key24": "9roGrzqR6WwQ3RrXdJx6w9iFrEtD3khvmei2jn5iziqtmAjcWFNHvMhwmf3YXuapmSjmJhejU5YZmXYnurxHUhx",
  "key25": "57KCmi93MrNUTGar3yeyaxuDqj28pkFALH1MhQvBWYuCSeA1mMsPvwnqkRUXX6g6opQiBz4CgLxvkVzzxsUjYEmr",
  "key26": "2wD5tcCyCwN6HkPcLKpXUrKBaCfF6DwvRC7mYMCwnwDRuw1SDFgpq5gwQcbL8FHAmNivcY79nw5fUtdYuM56Dg8R",
  "key27": "5vBrBsxdbicQ2muQ6rwWrCx55gTSojW6Q8VDMmX8Dt6N6ZVhtg8MFKQMuH76QakrtjD8QYiybrnTyEVLMQPe1K2g",
  "key28": "4ZkVD4CHGpWQ3iJsy9i5LqsdqPjs7M1ecVAzJWy9gAFSMvYWMTdva51s62QTzW87T6mgxhVE7PcsqaqBR3YCi4hi",
  "key29": "5sUANRmd6KTrALZ6hsJRPLmFjAd5DAgp4TK6dzQgrnkLGgnZ7LHbhYTQ9WYvWgx5fU1xCcATUrpznxTacj8fRrBL",
  "key30": "46HbnEc4yExLXo3oTgX7kphtHMaiokqs8mReswLsYoDMuCUPvRJqgiRLvfQEg7Q1N8B4z6ofZKp1dzq8sS3AuV6F",
  "key31": "66DYCAVwxGVf3HvAhttH21pQFdjwNXBMwsinVBDbJfTPm8TZto4oomcn3PigFHWkYjnJf9aWYjN8ensD13mw1BGT",
  "key32": "5SRSGJiFZqshGXXvhFYpahch8AhvguHCm7JyPCrADLfz453M4RcVV7p1KEcbFQHGxe9F1rWDYyCXWqeLKy4c7CC2",
  "key33": "Z4uvEdmQoCuskVyHS7H9zMFvVhSynXPq48WjeZcXzivX1mmzbGJtyseoVaoWHVGwwKVLXaAzFxiKXVcxSrar6LG",
  "key34": "31DLZ6ksA7bVJZU9RZM8CQ6ji6UbGnSLfbLvNALTjzGJyaUybA67mf6SLg7hEBzV3XJQNTxjdexfj6HEm7MeQvP6",
  "key35": "2j3ByoXAryAVwar8Vqgg2Rvrcs8d3qJ1VbYtnb42owh1Nk4WjKD9ggesmLUi12ncrFdhwaB5W9Lj8ZizuJj94WwE",
  "key36": "39VgbZvhzdaWR4DAaRFotG3YavdFJPA5B9aJC9Uo16n1EMtsXhJn21VtFjBYa2sY2VgfRZetREc9tGqnsB1qHosQ",
  "key37": "4fi8TiHyg7N9VmkD2HPmv7E3ndozjT8rhQeypsBmmNqUxdasE1PZGiZ57Hv9iR66Ss4MFt7B6jSfJS3eT3mjJUGJ",
  "key38": "AEQ1aFrGw57475TjyNv469Wk7SXZ3Q7XCp8z8DLx2ScubLnpKFqUnVawB3GXdxdsay4PmqGxqR1T9Kh2iMMCcZ9",
  "key39": "4rAjtrXKYGkhaz5L1cR6YE29F6xNM6K6R7yfwn6svFnGxz76aqbSBfNMWo6LETq76WFRpP8WPfha15Bd48DmvtQB",
  "key40": "291DJxH1nyTcjtM6rdyqBRqjkQU3FZkbsjSmpzZjQyLbo6BF6drLHE764ND56B5AjXTnTBngE3pDqtGAwyaEpFVF",
  "key41": "587qLZwX5MPBA7kkgLnCazgS8tB7w4bHLdq1rSWcZ66uu2RzSPHrJhRxxfSgryjYG6BcWkb2YMDB8FDeEF7Yg8py",
  "key42": "5c1mtfa7xRJz5nYJoUeqQYHfcu9cNdhSNbw5vQFg7THTnRV246apJdF35QvxxzeR5dz7YfcLSdikYR4ViPbpjRQK",
  "key43": "2j2szRU28cCgNFyVAyYLMhgmg4xskNM9cDMJv1CNMEYZ3M9Koc1u449T2q6nHYwFXDYnACDBV95ESJtYyqMBf6cq"
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
