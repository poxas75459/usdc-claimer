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
    "5beqU2jHtycUV7XwB9YTmBDABLVfN2fEi9Z4zTbg91LxH9K2MzxTt9sYJx8sFh9JC7167hESiFxv2tajNH8dy8r1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bHjdzoGkBgHN8bn2izmT1oUbnUgEeWSydALWwiNySAWLcuPQusd1FikmyyQafGGni5c7sh341EdvS9qTu77PVcH",
  "key1": "3qAikX5YhWanB2kWGRBZopoVY5wvn1omqriNYR4D51h61uaLKQWEEZG6kACFpLvPhkdFUxxBkmJeSYDZU1CJV4BB",
  "key2": "4ChMWLkcbLyB7PynXJdTZFGjhNpHprY3XmhjPaVStvsRsJ9fW6Kmr4ZG16uZ8UMuXazaieM65wQdtG5X4g5dwDyk",
  "key3": "5JWpkYfLYnot68ndsQrEUPKeQBjtKu7Quw2ZM5Qbeg4wwTuUWqnvtZZrTnK5Rtqbvx4AELzCABCMgm7nXEyUhmZE",
  "key4": "3aWT1KthUzo4bUF7RGU26DucYRjwEQ8dA5xKpEfZVaxbVvuR7yvhw7nAvnUqjAi8DRuAVdiT8tPhaCBPyxwqQzFT",
  "key5": "NXDaegk9RyWB36AaZLrkDyBLgfarQFTYvwZcVbVy2QbNKPYW5Jjtm4pZ9QxgGDa6jMZEo3ih9aXQPEGSrnEhBDM",
  "key6": "2iTHNPRvRmRMxtCLggH9Sic77D6C1487AnDiAfGY6shBceZcVgJNhWxuAqKom3qT1t42tPK5PkF1evfDDqsbygcG",
  "key7": "29PegLX9QYmHT4weHFKmDQhAmD4B7FwgxJmGG4F4XB31MHZqQEyQBRVwWXQWkJ5a4m16LiaCHq6vmC9xSC7btmAz",
  "key8": "3JoRBMAcXzGKZ9E71QwEkXi85cXD7PuT8JeYsBKJ4vK7RtceKdg29w9K3XStMwrKWFWX1qZkUYJWd1yYvFysw8pa",
  "key9": "3bsSpsXaPc5Y62MXANJLHh9u79qP7KnMRRpvhfy9YS96Edktfdjxu9PhtppGAdYxkwn8nhz7CrnvbQKYGmVEWV11",
  "key10": "3B5o54sQ1zFEBftk29ydf6qhvgiGVP6tq6NnEDxBRKdKmSFEFcgETmLzd56mvokt5bBoSQoLN7CoqZU3CVSxwcV3",
  "key11": "37eB36LdC1b8SFPywxQLhyx7bd6TzKeZ76zpjfNonoQB8AomFzj3vRMoi8y56U8nJSzBdSUgZxQPRAui1UBjQFnH",
  "key12": "ZGubHKu3fnk2GuYh7fwx3tfGZdeVbKFhpZ7ebG7kvioCF4M5rvN7Z55xqYe3mtfHZ3PSXhmWxndNrvkiToLtmHZ",
  "key13": "3zJLzd6zYaCkgNH9wamtwsyaLqpWiKfstAnUEoedPMq8XD6B1fbE15fA3M13rLFGNZEKbF9nyg5QM5DJLcyHPD8Z",
  "key14": "yMkj4AfrCyLCGRk4sGRBAQk5rXRE1fjW1oR7DCY3mDJsWhraFsZAzDiePVQhNRbBApQbShrqjcRacHaBB7TBKNu",
  "key15": "4H1rcUopWnjZdFuozoeeBfFc9npcDj2jPdZEFj8UvihzautpsbX4iLgFScT21cF1HuPKT8JBzaXdtsp1xPbgNPci",
  "key16": "59RwuZgn6wCC5vSTE8uMXUFBwdN3yQ6phX6NWSanFFuy1wSUyyMYth9C1nbeCHiTLGp2pUKuFpxVTXFMY5BtYJjx",
  "key17": "4aKYk4GcaRXFfNSuCkhseowYanzdTmLv7s6zbgWWRadv9APoDyMeFukAoTDjo9AivdDXnEJCShVPdu9tAErsMMTw",
  "key18": "5RNVBjXzKCLfag3xE7tGJbijpGcHKBzLnh7d6BGKnfHZDEjZX87W6L9zWMXt8JrVMcDWWtxzRpENwM5T99t7GMua",
  "key19": "4Z4UxfhE1VhTin22RH8X7WRxAiYZCP2g3tANNJi7UcRFAtYcXZCpqCYnJuTevUtiAD95aprwf8r1zJEc3kP4UGv9",
  "key20": "3NcpZTNt9KGS9C6gL89QjBjksrCkMA5ae4MyrxSSQ1G2Hv8gXZMdW4m6jawcss5ZcUHwjpFeMQZnSVahxj3G3Vhb",
  "key21": "5n1uBXavQmgrgrx4Anw4ZxUaH6N3mSvNUqAxcr9Xovset4RmxecfSG238y8NVSzKvf4U92NM689spxiLpS6zNMs7",
  "key22": "5bfbhCCuuMj7YCMHZpG33uN2nn3GXJwjGj9WPQAbL1NkRkfQNaxYKHNCtSzU2XdX34QsutqhrAsnr24oXAtvHdBN",
  "key23": "2BbBsXxWE23v6uLnHvRS4bqQbig3hoV4Nbz2NVwXbRYFqmJaTbiFXg5sTLtPcAazzhMgQGvdbh6VRKgRBLoGtLjL",
  "key24": "3shrCWzGoMPcix1KAVxubUL3RygYAGfqec45Yx6bE5bAbHi3PScpUz8kc7YCPYvDXXUUepPeF2soBtCpPixeYkBf",
  "key25": "2vSCKetU6ZkQZGqt68DmCEXQt7dGqCgKeNqZkFZPnkQ9cAXCYiAEKF9U8Hcqni1Aki4yfUhtvs7TtxWCLJ74MjM9",
  "key26": "55JmAEJb7dUKPyDLdXw2fnRswmU6KHARTYa4ppjJaN26ahP5dH4zTBySvk7sWTjQL1dbow4rjSmUyiuccwFnwonm",
  "key27": "3wKow2DCHf6WYWqTTr5wuZpibz15599neMS1m9AQBEcaJDCdgjVfJgX7upLc39WMm6hfye3Y2TY8oyHETDnD3RsQ",
  "key28": "5xstNQqB3GUTN5exfiDDMf8ju1jW1TdF7dj7p8jbw1V5QyxuXXuoHPB2VbUnAbkXq1R6jie3TpVu55VBcmb3Y71y",
  "key29": "46iZQNtG4VtuJGPrZtcKRXTkkabjgzvwjmqmdXav3P5qSW2E5Q4n4DdS7QPgbXg7WfA4GmqBeyM3dCrSESgKMZ9z",
  "key30": "DcnCG7NKXKwVVBeJy3wc1BBNqBgwZM25zC36XmJETFjaSVCKRG8gFtsxEFTVSceNxzBEwbfqYFi54tQwep9JRrC",
  "key31": "2m6cVN2Lrk4TAxPPuMCSavSbzet8NcSyvouPZWjLmHHcYx9JNKsWLU6n9HY7gCdoHPEGoJzpGsPJTpfWWTk2RFtN",
  "key32": "kebpXFN1d8NWr3wKLkBBKdNvAPCaSet8XgFT26TnTN5foqEaSALgdDWEMPEePKTNi7fCyVUMCdxD8ZG16EhVSE7",
  "key33": "iCvCdpQUTWRZy4414nWDt51LJSSjtzV4Ds76iwfcF8Mky7EVc7ZTJfgbYNJYNEbsYY3UYHQx4R1qo8N1fQonT1a",
  "key34": "4t4gTrHhffbcmUQP62BwcFxbQtYoxyZRpdcoc3z36Z6dYaDMEvJD9EoPz28yaCx3DqUr6hzYwPdGc4xrLdVFH3Zm",
  "key35": "2NUGS6LHMiadaW6LQpC3VaavN3oAJ24E7oJMaHh5SkHGdyD1RqdWJa8cvdpu8F5CY17iexrMXJ3JY3fvHsp8nmCC",
  "key36": "6uDVU565DBrqBjWk1WK5kgb9nPdjTcXDvXKDEk71WF2SbF5KrbmYAZwXXGy4qxFiHyTrtjs8VRZcJ9KCpGp8m7G",
  "key37": "5Bx3mudYSavqAG9Mbb2yJWaQ8kBuSdbd28mWDnB31mtsghbyDVnZnFGQkgYsZaBUvbGeH5RjQJQSKgA2QCQ46JvZ",
  "key38": "2Lu51b31bGy5GTnRZCL3dAexVBKPh1C8wNr8d8i43ptB4XXaef8B7KJ5Fra57ZZv7oEkhRiL5H5fnFrt8XFqie8q",
  "key39": "4a9d28WTQfRN9pNVVyvTBvSTR156R2aeLeqvHVZkUXHXUFbixLUh1qZpDU2u3LvF6cqzWwG1Mi7RJkpGVnziQvzd",
  "key40": "48zDfGrtk25oytiEQW3ch2P72mXmUPiwwr5F4mSiGNZrPm2hVri4E1b7ZSoBuoo6KQrF9apxKoNLekZHthKUd3u8",
  "key41": "Jy8X8Kko1jbG4BpnbPWGk2XjKRA31PgSC37p3rCqkwv4f97Moeaa8XNVMVourfavLASC4DoBPHGTBCVeiakbNTK",
  "key42": "3Y8SfcDwPNyespzH3WZ1nqLfwgKhfEAkDHCS63SHQLW1JnKVMZw2UZue13ydDryxgXscrbGriX9vyiePCyJZ8Gtr",
  "key43": "7FUWaB4NwzUHC9ditkU6fHHan1Nxs6NfVeBc2DSjoDjhDPhtsMTxascP5rrCGjnY4aJeE3P5uNHvq8seEbbvP9W",
  "key44": "3cjsijJX6nbre8XKSJBQ3b2uwWkabgAJhJrJmnRpDctNUEvusqNDe4jXffuprkcaqq6bTv8McrahGUDwSS4qxZ9y",
  "key45": "44LkjbsTvmejNbEgYPhJYhMx9vEX4BzETEcQoTMEwHhWXEmYvEJr3nhJUtMFotmx7Uf2xDMV8AXWNfAcbmREy1LL",
  "key46": "2iRZ8W7GGDQsvbihy5LVN3mzzcsW2bZdz4NeDSDgriNWz7gasZimNHbSAwPvR9wDWgqmygBwjn7Yip5SNx6LScDw",
  "key47": "CizniP4p3SksJ7RMMLqgXectSAtvLGq5DRy8kYJvkPY5wmRgmtE9yiQk6bty3bNGVHR7DczUPnUAQdjtrxysMJt",
  "key48": "YQd579MtLgQPyhDuLGk6zHmy2ZbPTfMmSa5KKy28QP6ukU5mqBGuqLQyPeJs3MCbm3qUuJpeSYFcg2xUyy9jsgi",
  "key49": "2LJDD8Mt159GqETrXQrufjLL1Pd8fKMTodWyhKgnbgBksVTPqbuTQ2oZkMaWLTpVg8LGMrAJDdgPCGNdztrRt8Q9"
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
