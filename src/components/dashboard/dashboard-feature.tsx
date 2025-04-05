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
    "48MBWWTdPJp41hRRuhqFNmwqXRxbMwRyhSVPk3UfwgzR4yB22VWV8NEd8Jy2cRXK3tNMxuqm1xyX9j9FaSbnnHNx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EbsYM4KKdG1EQjCQFvnpkh8RUw76mhhzya87cdHDhAUZveojPdMbNNwFcVfkNca1AZXoPA2tiYVnfR3EyypEX5f",
  "key1": "4yj7CVDZTizmMPwH8Tc1rCBCd8tpjHz8mwVVtSHL8maidrcAMYT2MDn1BXxRZNK2t9Ui6a5JMoxLW47yECB1wAuw",
  "key2": "4ss3mrtDFc8jbtkyK5mp8PmirE3T9uvzjWhK6M2HsunJRwUZE6dFZbuU7wnjbuaoKmNsmwXtSv91Z25vQd97dpyS",
  "key3": "3sGjV1jwP8xXd5cS5SyYRRg6Zzx7fdWjrN9ARt9X5tmXw3twiotRY4W6z95wMbGsw3vs1e3upbsWhVBAGJ9neGt7",
  "key4": "3LChB8TckeK4aTetKonSGevueWgJFEJ5J5zGRTwnS2ZXXrRgDWjmd49nBKqTxyE5zhcdNsVi6E6TxZbRAGZqBrKM",
  "key5": "s5zbCuhR6qEWWjPheuJ64XCB47dob8GcXPGu3R8wnEaLLFv9jynTJ9W6zTEMhxV2yUE1iE4Wu9pPYaHKKPt6fZt",
  "key6": "xEURN7RWko8gHPi3x1ebHSRGCuGEsVVwdGaSdUUFUpDhHRnz8URZVCJ7LV9BUBt6os4Sz5rnvNDBtLNvfux5eab",
  "key7": "bLkEmXfJDr4UTimpoMNVpmFiLmu4ZBBnRnTsuVDLkYgkXBNV15MBii7q6cn7Pb3rjExZVdJBYUWJpJq2C529Yj3",
  "key8": "4LvfpJkv38vEfjTnYrh2hitABudN8YgrP26c6g3NBGADZiX73rxU7qbdYB1P2iUniNHukEQLnEtxsk4JiwJyZqmq",
  "key9": "66tqEF3B4L4c5gfjLUAxNCYT9TyobFLjfLwJsNT7g9oA4yuDsPv6aDb4Eb6ZoU3FhN1tKNpTD1VB9DKCdXjoV9HY",
  "key10": "5R3uWFrTYVqo6XvoZznT5T4GcRZbyPPF57RXUTVZ6WsbYK1FpqnEj6cw3gzBix8hGwtUiiiLbAJPm8tEACj47EMs",
  "key11": "2LStkbaaHu1b1UunQV4koRecL3aATNYCFb4bKD4tReo8EoRi9CKr35qE1nLW82fPNewutTznnBQCAyUZ5DA9tmMY",
  "key12": "52iKJKEUexQJoGVZgnatnyM4ctsA1zboGAjmpTq9TEmABmfUFiShptrUeEZ8EAw7rePxaVU5KwTWJP1EdjVh5wJj",
  "key13": "5QSn5JEWDEhw3ybHChPBmACPqVQZugVgcQzVBJiWcgTV1dWCizUuzg4hnvT9LKPjAjKm4b6DxttzgRCK4bMaxg7B",
  "key14": "tBATGipVH6vPhtxsuEUkPSdfJjEUwL2EogpgnQApFQHS2xdniamUzsxvTFzwQEDiTJdE29vm19M9zWX22cYLg8r",
  "key15": "28L1yWouoEcxVHLsYNGbHKzyM41gBgYNRZGT8bFejx8E51SaVk3MhrTKXoFadPFs5xNmCjeWSLYzaG1X4Nj7gkcH",
  "key16": "RmFPrwiS6AohEzp6g5aADJGvU65o1CzVEtiLAurRegssq7swT64qZD4JaRwPtt6yHiaZsaU6b1hnLwpWK1N75Sz",
  "key17": "qjacqe8Y5NzvsAi9yRWhGQHQ37Vhr7Vjz7jCsm6yt3E4SgWfPZTti6n43FcyuJ4FVvs7Xm6up2NGEW1WSTki2TW",
  "key18": "2cFv5ENSqR5AQJPtFWitUK1DNZZHU46uJmGbJmdi9LPoYED95efHpHtHmTJ7HqcwhYCZfFV35LnCmUSLyApZtsMc",
  "key19": "3MCrumkrYbpUWuWZ8bZmkPqCStsW3q7DeVd75bwiA1ug9cEcPaBpN1DJ4yKFc6hFRPuLJq4Xea3XwC1djzA5ny41",
  "key20": "mVoYWiSKak9QDRDHgBjXAceCSa6fXAFJ9WDafhrwXKmwB59ADaUQTNcNvV1PTeDNtyFfgW38sqgekZVygoLBtA5",
  "key21": "2ghA7vvbpZi5GCXkMxa9HU1EAwxhRqsURgMQsrAUkRnEPiLScENCyasvfxify9RdAXXbbjNikQ5EVAe2YQmPyU7z",
  "key22": "nzKqABTvsMG2ivctGCQgKq75DqGsiBvvhs21mRCueXAErUVMpUR6eU4oH5gzwbKTBht5rfWb8BzMExLa57dUG6z",
  "key23": "ZNKT4FFd8XUvmnosyyTyrJSf4aEu24vdhJZCgxuanGga9vQCcFCPyiJMHwBf2THMjGMDypFVRB9g5VkorvToENk",
  "key24": "3KH6hcMzTBKCtEsDxp1Mxw2xxTbP4eto7qcCVRmqCnc4hVvFBnD2oggrdKvns6r4eYNUw3UcV16fm5H3C7eHEVYN",
  "key25": "2Artb1ShrsX7eQRzsYyGtzvWm2S2rMZBoAoWjepcU4DpPvRyX6Ctxkx2MJFo23DGi2EdmazgU3UXduNDGm1pZQFa",
  "key26": "4ScQgdZw4NkmZzm3uU9gRKC1rTpHVtUpjBQhgJ7e1GHyGGdvtHAoKXA9W4jWndZSyM9Jr5k8bg7BU2tLBWNe2RZx",
  "key27": "4vKMMJVkqvznJKQvLcFFSbdZW167GSBJMMTfCJ35Cf9nc6heg1ZhKqzmjh5TvmAARiSAopQcHx6s6HyYMinF3ACp",
  "key28": "3iVJMfGEDFLkCXGk5cZRwHCFocRdPJ7ThCq5iesoAKFW84kZEt6eRuzn7BuTFW65Hu2XYj3hwSooBBTiB4sTiNkq",
  "key29": "29n6maDUJFgtEMeoyQsoRXuTLRdTgXnp5ttgb261CP1TB5r7zRu2X1ucyz8f95mJsW33x2pJxCPTi7u5HkKNzXiL",
  "key30": "2URnKvYYu4WnjYEXV4zaqHtnoLm3iPRKdjiuu9o8gwpJ3gEUcaTby6GfgYwGSzUG3K3N8PqkmXkPM8xbhg8rg7YN",
  "key31": "2MnsqoayRNE8r33zAmQWiANu53rECL9KgLLKaFvCTdy5V3QCLJJ69XAfVFU63fYwZRoqdGzFxc6yE2e68jot1ETP",
  "key32": "wH3RL5UxRf8kb5gpys1E6dr5vFB2dXA5F3iDsKccDLoWvf62fWjYNnSUL2T6sjQX8nQeY1AWCwTojCvq7xYUCuX",
  "key33": "5eXarUNQDeiUdDamidzDhSE8UsEB9EqsbaZmCi6xWeYh8q9avbaT1t4P5w8attap16o8Uh5fTqcVdSk743tnrvrg",
  "key34": "3NGggRGPXXJa26NgJmJCeygjEHEYPSU9fWY6S5YPrV4R1WNhnuJVUZsRf3MvAhtmk29o5C5rQRAUGgczD4PQHGiV",
  "key35": "5RSn749YN2nDaihqPgARcwqTYb542ycPGW6RjK1EuQRYfnmRuJKcy7rdqj87ABhMRQhsXjqZidAXKkBEwTVwZh4f"
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
