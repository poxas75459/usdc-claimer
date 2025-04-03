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
    "3cj3xKb4zyFgKBdfGne5EfCcQs8w8Y1w5UzK3QLib7UqW9v6ixe7Y7SMsSwetw2zbBCyiNSLgQs8JMDdx1CeYnTs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i4LyA8TmGu92jJRXuWbtDarUXTxXPYtTf4BwMJXaMryuarVrH6MJLF2A25NhsJGfXfE914XhTLcN7wGmdYBmpyx",
  "key1": "6217c3jvYuAuiDiYv7Jf3zXvb4pRVuNQV6qie9TkczNKttVQBYuE6jGTzcG3DntizMCfWVdaEfe73pztYWB9PEVt",
  "key2": "2KYiJujRCWFHBB7AU44s9BY97mxuyGf6mUV6iKiJo2ZywBnNbCgZMwjX4xS5SC53nDyL6Cxo3jvLpeuVSvf4HB1K",
  "key3": "3pd6YGZjTpJbw3Sh8qtFmokW89gUPHgkHH863nD6A3srastLZm7nA8MrhU4KzUZ87e3zUemtjdnTUFCfek6APF8y",
  "key4": "3YoQW2maZEi8UbLSY7oGSh4DCA4wRedgqD4VPGx8g3hbECFh5VJgAtZVKLSTuJfNfMsuSbgLf8Num46cz7nzrD6P",
  "key5": "4vuR15xA6gM65ux6Bscs1ctBfgksnCFNPqhjcjQqJbM2bq5mwYgsFaNL4PvfDuwuKHt6jYcgq6Ye4tdNhTpTPTra",
  "key6": "5UfnZ68ZfbU24Cd92XwpF5JoMJXgCcJGxfi7abCVKnVPYGVCd2mdvm31dnHqVyevAYYK8cqHAeUMcRBUhkHL16AC",
  "key7": "4LRmTZr7rwrFY7LAB5MyBV7bEUaZJGgS8WEBs1TbrC6qr8P4v2Gr5wTV9D7HExcDHfi15sgvyQjkm88xrvBcSjU9",
  "key8": "5biRwG9p3es6rgUX3MS1ziTtLejrbLST9eYLPFCJBHdF7VqZd7uqG4uA5x9Cmb5E46renA42GtR9RJTdhxB7F8cm",
  "key9": "kcikNYUWyYms5wCP52BEhaFKE5uBXspYKUjMaGUPZJwrJUcYQF5r9gRSj1Y5W8W5SEFmmeAPm4zC5vGYfq7G53R",
  "key10": "MvLnkCkmeaYZx7EE84TzQjrzCQBBC13N4Fa1sCpR8ix5yQWKuN9gnzPSjBMGgZJ4pBitLkVbzcW2fm5Me4YtB2o",
  "key11": "4EEijKFeXeR5sCXtp5o4tn5ZB1sffrcR23mAhQUSL3zKqgovHbnXiiifFtbdxtcGFKqJLFHCT1hpVbMKE9dPc3R6",
  "key12": "4Qd8b8fnnqB2BQMAAoMtvkzRkgSBUkTBCFmLousjnkL2B5twne6JpQCJJ6FxMaiQDURQCvdTYg7YmevRZRQgShZa",
  "key13": "4wuELo18Eq5w4KxkUiKeQeRb1pMrA3c6YZuL2AMGRwcPKqbcho8sFLS8w7kVff7qMk1JyD4c361oVyY3AkJbbakj",
  "key14": "TVVh7toA8tEGuHj3bsks1rVhyqvYv2eDaEg6tzMLyx5BidCxfFEtGKnW85ivUnhTnuG7nx3D12P3wexwMMWPhzT",
  "key15": "38SgUE5ZumjKZEH8LKHdBaRNaNLfMu5FNNyCoiHiarLUop22dcYMvd3zHaE4LM6cgLi8aLXU3BiaMHAKaGf8DCT8",
  "key16": "2oACdXDAQdfZgQ2w4FsepX9HkSBkRoNyu8CsFAcXXMYmdypoCqTvmay5Nt4LESpegQCjDpyjSoMHLBvWKUBpWmfL",
  "key17": "5TuXFAb5sh1hN6pLrUJVkq1UyD15PNjxhtKvkCpQjJEcpTgCwenKDecLZn9AwhE1ScF7Gc4qtdGEvEVK4rtbhZFb",
  "key18": "3i2r4P2WXHqsiJCUykPsBhxNy3PjFnLaQJij712cAeFvdVkE3ZJPT5tFuaKQ9C1bDMuEG7C8YDdQBUP1iGDp5w3B",
  "key19": "4CggLuqKYtHGcCT3NsCkXukaMGn4eNsjDs7U457bDSytxX9pVc6HrHHGvUSEXjZXEzJi7Jr7cb6yh3Agw7mfApYv",
  "key20": "dqGo9vP8PaPGXxbwbFyGHQwbbhparvoy4mYVameTVTbMaKNHgNaq576sGirA2WhZ512e9RhuYWFA4ooKVQJXxc2",
  "key21": "4QXSHgZ1ZyZaEWa4dfrMZ4gWUJ5sNyNz4q2CFsXoRwDJf2S8GLjihaLNa95DTXuKNtsEEbwYi54oewH6XeX9u6r9",
  "key22": "2W6DWAmVmvWghfpGAoDZmXLoRoMdVzrLU2JUMXfeiQtGsMM2W8xG6fUCsTxUu7rr9XQsLqz3FSpoca1CRpjeFVjn",
  "key23": "4aymavCGaN6pcytVvrJRtA8C83WfA2gHPqUHAcSwDEQDX6XwaK21CRH68kurPk2XNRnMqRD9HNoQsA3XTDGr6TL5",
  "key24": "4qhu1YgSTPeqkPazyDXK13AkgfbtWNkskGH7dMfuMfuDzUDohpCs1AhmmA1AZGW7JXCJewPbJHBjFsVjMQZaTEh8",
  "key25": "3u3aSkYBaSLVzm4iFCiiNw2i3jAVw914obTKeozvmzGtSBN9x7oMVDyxRRCEB7fcoMbNVSGUKKjtPhRxbd2vWcjR",
  "key26": "3ECAt3Xm57tqbJrgZh1HVQk3G43jFYnAYbkPBU7Me8ciLTiVvWA17VNFLfEjZimWNAW2A2oiY9V3xzmBdpAztM5b",
  "key27": "5b1YgeoME4vjSwDFCB8zbwWeuLg3aACcNfUf35XAmLgmJA3DfvjZuiTjVVnYgKkAaU6T69XC86RLuDPo2teTuZuh",
  "key28": "3s9XKCYw3V1JaazfRCAs4LS89rdLGcBMNkuYrsEXTWibcsozDfbmkDHtrw9vJGnSNFPJR7id61ebBMc7RT88ZU8i",
  "key29": "4AEkrXouh51NV3t8FACE7y9z4Cs5Pu2HBANrN3DqUQiwHTd5EeuQccGsHC1snjMJDDkfYDWqdQpR2gexY99nbbat",
  "key30": "4XSnZTaDoNtrpjnxiSCGUZJadiXMk3JT6RaadWs5z51EhEGiY3R3UaH6NsdeWyT4Eti7qemcda3dwNMjTMa1JsmC",
  "key31": "3P7ZLHJduAXGHD3VR6XWUF2VQzWFoeRbTxRQn3cHSW8b24ZPVQ8UfJsYpiFmKj8gmhNDN8Jyiecx9UqWFTpLipDe",
  "key32": "NhyjGNXqamBgbWNAcAHmqHbAxhF3uqd7KGQs7kWhgWXqo8GQsgaUMd8PRjf8kRhFrXaDEuvoQTW9X9ksGsZ9A2L",
  "key33": "3isY2YaGWeW6ufuuyK6FCzoiwLvFeGcTTrwJrLx9GCVyib23YcLdCSAMnnwU6cMnyWKTi8TkEQk7e2NcqdgGTDDJ",
  "key34": "4Ud8Ugs7ALWdwqnSofG7DfbErurEv8TUWo3uZwst4VvEgU4KmrKNd5PAvf7hcE4mTX8VT5yVvYSS3sTKhLSJ8bdk",
  "key35": "5Gg7eLh9qb4obcBPKLAqDNXLDhpQ4GdWQLDjSAsTiqZf9VqNLYsgjZNsMCR7iRbi6WWDnDXk13tLo2hQZedHGGZN",
  "key36": "23asn3pd4tojJxYaiR6uoAiAHGD5duNiFfyfHxAiGp7Mhk9J7zpBcsYXU89YuLkkPMsMLga7iLkm3Z6KGj4ch323",
  "key37": "4FatTejHdmXRv8MRhQ69cAC4J7v4GzBJHCqY5HicnnTVcegwTYJZsgr6if73paSz4cKiqwUHXGE3z4cBneJpREzL",
  "key38": "2odbev1trUPRPuH5JrCReGJL35kuBkaj5EYBbpeV7rfC359aPGTxqCk1GhaX9tL88j6hLSBC6HDQc1MegEvAAz6i",
  "key39": "kZyfDPXDB6duxQVetnKcT4kRrEPN67SLwXsZLhYRGdzzLDnBRXLHPySnUz7WrcnZivgK2WeCDEaPP7yi4bfFk4y",
  "key40": "2P8gXsQWHVfBZASP8PtrUtUcpAxsbe5NjPXiJyA12qRzstMQTEGdCqEoNHMpNtMijLrjGEJUch3ibVpXHpDkSK5D",
  "key41": "4tSPkrHQXAfo6M1mcwCvZKX2Xo5jzMjoJD8XuwDCSRYy1NVwaeWBadzarmTrCsEoNzRmbRo8gUxL8Jzqt8PDyn6L",
  "key42": "3Gn5EKm6ZU6GqFqJvqqnmsuJE89BVZv9oe7Z2Cvmz1hZ7xeFtMVa59QxjLPRjYrnav4CcU2oBmhuUDbGZQaUcGYc",
  "key43": "2ZQ8wG4RMvskPcgJw9kTSjNdbu13DgvdDLDReGF4RtneTQrCmTfB2Qinx8UQ6ru6cToFTXpH9JyUeJkSX4MNd1wb",
  "key44": "2ewpupMStWQcPm3yXWdMuaYSZ5TxwufXWae36jZpJGXrSBgLkQTFnSSozTQQ5YvP5bnvkszGr8oWvcajLgHGnyGo",
  "key45": "2mescdiKqJ78dGg5ruzfcAB5xAvCJEwsscK2wxBFxhp3U5pqhtKLWRCJinG61wDZiSN9e1vrzPk5s7dXszFkCdXb"
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
