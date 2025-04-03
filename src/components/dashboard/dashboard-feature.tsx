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
    "5nrUTefT55YAAaAo43xdgGm5ttw2f7Lup36H4J9AzZ3V4DywFx8fbsL5qY8AxdaGbnE5dzNjY3LLPsk22kqBvawx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65E9FydWHXKioYCtiVW7NResELyE8W7S4EE4UtCZpJcppoTmdN3yoWEnta3gi8yGY3EGsdWB9WZAJwa2whCJbLDT",
  "key1": "4gKUm8VSf9Y1UAfpbHhmor9pJyssEjegCfPNDx6k2KKqupXX99e5zrZyp4U942H8FC3YSTZCc3FVBQayAMVjwAyo",
  "key2": "3CbXnkkv47fEu9AJh8rau9iKjQfDXYPZpzfbSzrTSoUotEEahMC3z2jcvjhrDXkBazhuXGeG1UhdZcfcDZHcuMAX",
  "key3": "2Snjc8AfL4rJLq52mBpkoNpx7YkVYGzFxHtWSKNrQeRBqHhb4XuQaNGtsAMVgqWxicBccf8Qm3y8oP7ALbW81wFc",
  "key4": "5YtBwKamrAx3Yn9BDjJCPAxTpbx8cXjMz5WNRMMcrhEcpRVKV5KLqrLxxjCGrtELumw8rNLn2YgqozRwGGvSTcJZ",
  "key5": "3pgCVcmKhYwQ5uTF1wFeqT9FB7WjYg43VKjypSsc14ERXGne2ke1K8KyP3AJWfuqynGo1fGiQthkUXWzFHYKBEZ",
  "key6": "3U6LSK7bn2LXbXRk7kvxEdGL8MxmeLJPhriXkQNH9McDe4XpUqzhT8RU9QtT6nS4MJ3dAUoVNwdZXVNUQDsuoMpu",
  "key7": "4Zge1M8CsNT4vwZgWVwcqt2JCrrN1gEA1Q1ovFnXsD4g6Ax4Npu67e5NiisDFDLWi7tv9G4yfryC5zRo2NKo1wmE",
  "key8": "BHvspmAxPcw39v9RYhyR1MTJegdRhtevUkaNmXLQo4SJEqJ5rBKkhJzm8bWpnaQC5ueo285MEjhQhUheXGEriy4",
  "key9": "619FfKg6s6qCbrRoTbWesw4SYcBok6sTqTo3yF71U2HBP95b5aVk3GbDGKZxpjWoc73AP5tAqGe2YeqgoXDppfAQ",
  "key10": "51LcwGsL1u25nuJoHPskud8pbR3M4yDHd8RnoRyERxytGeMDUyhNRdHvVZfcy3P4qKvXbJTn9BWrVmhtrtSEDqtA",
  "key11": "WPV9TUe1VPrdHtERsr1GyG7ni9pJuBCUVVgMQzPAcQbfqMJDwW5UbkrPXZtPHKH2KrjCgRswYtwk9kYWhXJPLKV",
  "key12": "EA2UfWHkx8GwtZj1nBNxtM3NbEQmfp3qAmc9qnCxSiXpMjeKATpnLnBecJF75QLp4p4kiToeLwvMZBXTAvasjMc",
  "key13": "2ZGBiocqA6zXAktGp2kPAMs2gLsK5mWqc9shg85LfayWBfzTF6DKvcR3i2xTQsS1E1XobL8v8JbsUBmyH2krXKEe",
  "key14": "4UqPfiYUGMQWb2ttzWwcrK3PiZsUHkfa7mth3D4YAQuoYSMuHMS12wgjanDWBf5Lr714H7QkXcx1SVvnhFeemmr9",
  "key15": "67NZLYuq88aDrrtkb1ACWFUi3b6kbiy69HY5AjeE9URqDnkAzCNNYePHPvoSK8wnCgNw8BDoeKcDPEndpBDzQnkx",
  "key16": "2PGfM9t89wk48K9DX2MLqvQodE8tQNXbRMcyYxeL5NscQo1KLAXtA3YcL7q1jdcum8qbv3jik9Po3uHK2cLgpwsF",
  "key17": "577KQeSeNgHEn1R7TRWWyzWEYDNN4GQCC9a47GsDYL7ZrJn5KVJPPPQLyfxW6dsrfd9t2zGAKsdUdPxuzaaHc9v7",
  "key18": "4FDYX8xzisGt35t4HxuykHj1KEmVyc85fCeof6MoZGYQcMSBw2fQWhPiiauKeeT8SdKNxHD5tGVi1HLryfUPBSm",
  "key19": "42QdA1swU4tbyVf6q19hVzZuwLM7tvkQyLuCgdK1jYQmjdqS8JBWGbya4tNPc6pWtgcaF6e8PpUyVbReAANjhna5",
  "key20": "3ttSsUsp2K4jBgqjsmfxXtvtjQgTYkRNPGFyoN8zkU4JuCrsTuy7ZnXikEwvt9uzXGZwrsq1LUbgEiRAXEJU1mVj",
  "key21": "3atZxBDggBAa8N8QsAfK5E7tUqScFJ4ej6DodWjTWWq8uKV5HLjzRj6cMjSCgMVXdRT8i2qcd3k4evDvWXHbjsth",
  "key22": "4TCBC727Ndaq3jSTX55F74ZcPebo9Ziava8vYvkyGBxSHbNUP65Lt5oKY5iEUPDmafLqwN3wGLpvajz7uLKcVD6V",
  "key23": "zFg1n7i4bx1BnX2syvrhPDxSbHQhsjk1BYGoyDxazB9q2spMTZTrt8n1e2dMWU4jt2PB3RzKF1SFSbikw6316dr",
  "key24": "5vtinGcVyZCwQrTbk4e1xoC8tsHcoAQnTnQ946G18esFmTG4Z2ed2F9Ky35ewDhSYi6znMMBDx7LtSYxAo9Z4mwM",
  "key25": "2678xe9KHWFHxWTFgXYu8bvrYPrtEbvEQdkB2JTZUbVzLx1oxibe8QF391MaPGQd925h7ZSSW7VVRyHTNKA1m1j8",
  "key26": "B1N77xHipWF5x6DecEy3Eh3YqbHHp5tssAMXtwn77kgwVfhLcdZvqfvNkUxwmVGQ4WAb226wcbs26wgiopjTVfh",
  "key27": "57TAbA9DpALi4FchNh4uhp2n3qqkAjJThMSN9uoJSuiexCyhFfixv8GtMr8e3nSJiTnRxpMXQ9WNi6y7mDZBDKFE",
  "key28": "4WwrMpC52X1bVYsrfd6RxpySxMRw9dPpo4VutUYW6kgodAjYF28xuyinxw3enpt1vKFtdcjTBsA2DJybnjPfPqJQ",
  "key29": "CgaqcJENnacRcxoCkeK6GJbfK2ftrhrBELqGMQhZqQ5uYtiEcsqt4Ko8XE7A84z5XTkD9FsZdmVdWCagnWFE7ma",
  "key30": "L1h7bXXJqpvRg8v1jDtUmYRAaZjEhS1oJP886VSdssg7KtTHnUB6YsCF2BvSBwJ7pPKaXGcN777yhqNMW9dC3Rn",
  "key31": "3RQ3zM9rAJeqiXvmu1Q95MH8yArzont65wSpJZdHF7iSi4LJdXSpvA7gAEiJFZcio28Fb8ZCEmRAPr2agXLPR4UJ",
  "key32": "5Ur3rTxvSrEasFrJDimmDrKxNhknwejf8mphfG1MrjEHZZgRHFubKsCBpXcJvjAmNJe5bWCZYq2HVYZSwSYjmEJE",
  "key33": "22bszMYJctgPXPvAsf7sgfRMp1v2i7y9wptktzfmgsRVDvK95YzZi1gS8JXFCMmiErvj6HfgjyLCgbCrSkbvuqxB",
  "key34": "4UnHarD9A7BpVqJQw1HRPK4ky9CGxyYza51krj6yQneRSoLiwwEJk2YRMdXtr9eJEyH2w4VxuxsucyyNa4EhMRC9",
  "key35": "rNV7m2YhERxPABL1Z3wJsaAwZ3KhfueEc7Xcp1ZWwtjbfTNCu2BPTCToDaPDWTaaCtW3QScfcsshKzFwovVUuBd",
  "key36": "V8qsvEomFw8ptdefpFW8HntntMAwhKpeANJCPRgPnCA7YtQcHny8Tc6FisQCuQB6U4EpVE5e1BBBddKxD9HrkTz",
  "key37": "3MqshCSEk5b1uhmKTV14PHuXzNHXzm4dSzeNSnpj5acWEEkqfFWVKSd25cmdTxpAixQbF2o8aDGGuN2hQZG4BxbJ",
  "key38": "3B3HaE8WydQesxeb7BrbdJZecBvABLygqe2szewe9Jxkyb1Q9fnx5YYtTA2JJZkViVmt5HTAJucxm5VGwrutUFqc",
  "key39": "3jim9ZnDZbq5pna2TE7ic7ooaV55Hpm6p1dY757V1SREkj7KbUgHHTJdfnkfZ4aX9MiZx2HFDYcHTFvBFtMp9aZD",
  "key40": "4FZKDLaLbcTuLYAuphewe4nSTfRNrB2EZDwiVGE1sHxjpupR68nweWnmumsnZNxerGQKaeze8UecR9Jsg7vthj3X",
  "key41": "2xdJHxSkFJmVDQiQ4iE3TEWQ2ghqo92CkSX7PXQ9j9otNL546hDg7uNGYvWHLQuVeFv9hP8aMtJtNL6pFk2QP9Ju",
  "key42": "43AdvmJtSS3N8gFv6zvsLQGyUQ3sVxGE245uUsFaYPWtxM8XExLKdy8QQKRm6rMVeu4pzQCYrp1Z5bXLpUnS6Uw2",
  "key43": "5PU6CWU4VrLDiGKmNSxSmjXdMX7dJra3HCYtr3pwg9m8n5CpP568C7FQneLieEQyB5dvCe3PeWkS6dAjLSyqbsDF"
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
