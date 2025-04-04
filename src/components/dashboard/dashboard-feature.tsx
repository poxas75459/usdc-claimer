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
    "2BeA5xiK81JV1WUNBqMmHaeKsme2rvSV4HABeW5xuQKWvjEbCtjwBKNN9nYYopCF8fXKheoCfCX4xKBsuag9dZns"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YaCA7pm7H7n3Z2VqbEGi1DySAjZgFB8qoLYTqmmzeMtigySwArcchJbsLaC64aK79kQcVujxyfinHqRDd4KACcm",
  "key1": "5jMkYPYwSjg9XTJCMx939yC5C8PYoWBNXpAjCBnGXSCCyac1zbNkSzkqY1vtZfnL6RxADhvpfMM13R7KpSeHQiaC",
  "key2": "2pYg7pmV9vq7oeZ3g1BFpUGx578zAaEXB1w82JvALRUqR4uoc2U7AeCUCkGfoNXBPYSfb5UKpWDaGacqsLk3gyEy",
  "key3": "592KTyYccNsbMfwhDQF2nSaBHUBKbkE2F4pGV5zwoz7rVmuoJrpDqkYnyRVowKzpgqG7wtys2TH1JCQXhkofcmcN",
  "key4": "65zPfA7DFf3LsfTntV9JUzP7KSVSxBbaYREFBKyf1UexpRsyGYToLwfV3sJ9T1ad4j2NmhGhJE5gtQzLTtfHK93B",
  "key5": "5SPZ97znJJXk7XDqt8nDxoodeifo3wFnNDceZGuAFDYLeZkJt7sP9e1jdM9Xu6ShmbVbrvSADR7efFS1xL6Mt8Re",
  "key6": "aLb8G4bzzpLEHLVkEwqebr785VV5c3cy8XnAzVAXdrdJW1iDSK84u3wTQea1eYhq9JrrWBf3HkKvwet9qKUHHnF",
  "key7": "XGPEhNNwD6VHu5UjF2i9cpsYjzn4zRgfnBXFKpov82WXZzT3vRUAcabfKEtdgk9vPQptT6ZZT8vKMfNogapQJ47",
  "key8": "3ypNZ9K5redvRsfPWHGVESejZqMqWVVBWZCzZNiub6uq99Ly3u8oPFRL5mNmof2Van2pNq1eiMmKjjJgohSHNLcm",
  "key9": "2vAYAJp4eRuGU6dDdcTQcZtRSN11dRpWkjgco3f2iDkMYFJav1YQwK5tuiZVhJRrbxihNLLjBaXNgjMZQ3Zir4ae",
  "key10": "4wGZVHMS729D9XHrNUrZVY8yKwehx24kJyHjKKs7phEurCuu657RXjakPBtQmALQjvvbaksfQFicmHAKKTnqe9iM",
  "key11": "5cSh5tq9kqGh6DtPTVj3QuQRNUXdVFQrq4c2DixvpMfKrpzBdthruoagdRUr15MCkuQhQMAu8S7JmmN5bgdux2U1",
  "key12": "XToUrYrf9ihnvLWU8AMQoGASxakxqgVxu1JA49sR3k6Sa2D9Xs6VkRLqFBUPpn29aYZx5mbfkD1dcvKPAfqtui3",
  "key13": "cKUqtKxaW6XFeDuDDorJMQMLjdoVGH2jP5T8YVXbwZEmCyUUd1DiLPEqQzTrvYDuvDs6u2acJNRjEHRjpnC7maV",
  "key14": "5rxzdpxKDkupSb9BYk36S6KBuRQV3NMEzztmkCkAP5RsA7U2fgc9D5tfTVzXih4GxYwsWLUhPjTSQ4EEGgdoG1W3",
  "key15": "5LDF5yyhs6WEv9eXTJcJ3yL2RXDWX3RViaZPVKtgij83mSaFJGDTbLWkwwTt4jNBV4MkvDpXzCDZAUWQwPLdhevr",
  "key16": "5Nyg8Yt5E4Bv365m84d9G5c2iEkYK89aXhM2SnzGED1pQnnsmHVxhJh5Z14jdBqbyiGo7RJRVYR5at1SQyjCuGg2",
  "key17": "5ZaWiskV4HnP3kxuEX9XsNNRyNgJaY1fYEA5mviKQajvCnfx8ZErwiEjbCCZi6KZRWrAUbkFr8GUf5mmRnB3Nsof",
  "key18": "4WPVRMVazUMeswKTotjjBgkUmR8CbYv1AekJLx8hYxfAFJSQnRks1nLvmMcJVffDENNj94V9vSrgCwdZUvf7bQ8y",
  "key19": "3NwNcJD7ScdCRjHmn9hgbYDbj1c12td4aoc3Wpg1TiwrBT8VQKm7mWD2tByy3QzTtvvQbNy5qz1bjRZPtuu3cRgW",
  "key20": "5DNkYaFLWKm9vzDAKFMeUevNrTbiKQykQKgYe3Ngk1ub4H311ZeMAJjcC3eP7U3GVCfqdyZjDbwHuVpoD6XhGfFM",
  "key21": "5b1i2s29KKtpgwQXP3LXRNUAEFya3Z9DyU91iRdoNf89ExFGppsKo2i8zZ5fKL3SkZrxFHZvLSkdTed58VGjzmFr",
  "key22": "4brw9PXTANbp69w13jG1BRQLvdRHfkrfj7YFBDYMsWPfdQNJRf29tNfCAMajVRJDpoYHTJhugvZfBG5RyBhStu2w",
  "key23": "4e4TNgeK6kMjxXBsquUV2tsFd5VJMLhuc3U3iQt9rgKkkHDHQRqqCuHeAr3GbRyqtSwxanuDuyaMrNQRVwaq18yn",
  "key24": "iPArTuxNB8yVaWsZaHjyjVFW6RcYXaeLdgSmNLDjF1ayxDZm5ZHuerbcbNdL3HWW1EDraASCJLdmuM67YrBrSmp",
  "key25": "3SJyFi1TyB4QLsEZ3s2PDbXwpuUhAgsppzFXsGdNFkvHi5DoSjeK1ww2UVy2UR69FYE9UmyZD5yvuNqky69x41sh",
  "key26": "5Sn5kuGSYiqv7Th17AfCJPGDY7rDRBxg1cU9pCSsdDshYuHpeaDn3EfDcEpcoKuVK4Lzw7qeA5npL57mpv81PD9a",
  "key27": "dS2KyrJdwq4Q8bbutPxiLRZbafTNhjzMHiSfRWC557BySGDjGwabyJjaQjUoV9XvkmnYbQf4PhEvoVHLwWh8scN",
  "key28": "4WbZq72KcD1nLwYaDgVtok3Pz1Fw2jQMDgPGNUxX9YBEYJVh65kGafhq68cLSBehxP4PAxqzAgMaKLnDrrmbR2MS",
  "key29": "5g2gqK1C5TyNoXRCYFvzT7J22UhUwBjwmnG9PHhqsS9MkEGWGsuzaSDAdZXKxu1fo7fNetFyJd1s2tTVh4mNscPK",
  "key30": "FYK1kiDrj18Gzp4dRi5gipKBckYn7zyMUw9vhtHzUZTcDJgA65itUk4BrpQZNXfu5JHF42HWHBRRpLA5k9kJDHQ",
  "key31": "4116ip4FdixdrKPsEikNxsYGQstezYE6iN8GKdGGPMyWAbnBFGwgg5cXGuKqvZvp4QBjckmYQuTAUHYZdvVG5An8",
  "key32": "5mMHpMuLkYwDGK2sreVaPqQDEMVjfV6uegLG6qxrh1QYDwg318gv3fnw6nTnf8hT7eMpRTD4up2NLFCrjCjRr6yN",
  "key33": "JmhnzhDdRn5JamEBoHvDgS5xFfcZJdrwiYN3cHirJGwf1ZH52XkErDeDNjQQPWs1hQ9e7fJfgi9KAZo6JzMF6Z8",
  "key34": "5cyNNDyLxZ6dxApdvxxZKLsS2gjp8pd8HsB8wShPv1JRaB8TtMp7oc1T7wXdLomWBZmzBuJzywHfdS7WGQYkRczb",
  "key35": "4wYBCfyMT7Zuq8bGN5xcJLEQh6Cu3WEpfdLrUKChYuowykXEjLu5DoAk8mVoHE5vm3NE6t3wWWvUVJX9yWbWjmqb",
  "key36": "48gXyyBp9c9j5j12zMA4tXNnMaC9tDkdRZgQx1ZrQiJ8cFN6PtR5hAzeRv7L8nxCxAKj8ZTaaRpsTCehcDkUAiUa",
  "key37": "3sMhp9sSMh4zhtDf2XcVeWSFaDJf7cmRY9imwje9fumTxwbxdYjXn6zCKUSyyxTnAmkELu6HFGqsRLFY8NNkgPVE",
  "key38": "3CPuyQ3sgsWfKXhR77KssxjkF3XqDPfQx8eFMqTVALUfoQyZpz2WRjmkSZCvNyk8nB5Ggypv4zM8Jqm2xiEFhPWX"
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
