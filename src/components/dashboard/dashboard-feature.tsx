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
    "2AJsAgUwKLsiUedw5XsMRKhcJDy55KWMHDGF4BYjZPEJCboqen3pssuVAeexjT2ufnohn2SRRHjWexsR56yF5HSK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8g9KCoYE6aqMQXkj1EpemqE5PG8Cyz8K37CG2zcqS4poB9uxX7aBYXiD9Dexk6yWd9eZdvwrbmRw5xc5SY774Zs",
  "key1": "8q2jC3HYNMj6yCMawRNLUQ7ZWbc7SQ3MVKZwDsJXmCGfZc9RyqYvaBXDyrBB7QP5g5f8yzyLBTM2pHESkcgFxof",
  "key2": "yANEYWUTmXeCWTvp4j79ZaW7dSqF1VdkyPVgYHExgxeLTxVY499BpizwReqkwm6ktJdVMpeZA9zarqNzgfpA2ta",
  "key3": "FK5mN5cXM5XaDmEfFkWhE3B6cEYaQZXiApggcxygd2ZFqS8aWagW6LXwMdJ3gamcG4JbbLHtXGftX3CQkCYp94U",
  "key4": "3uiuhdGRUGBAbCky71PSrJq7CNWFakPU5W2dSV353bMe42oNbv1KSwiUG4vrpT3aJGwMq7wiurBsVjSYrSuiYn9H",
  "key5": "31ciPAdDZBuZQj5GkMXNmYXUFRuwxufjV4pgAhZg4FwCTPFKqmsmJN2XCJLv2owgMj6Xy37BYx8f2bx4AeoXCENH",
  "key6": "4o247wwpAUs8hQvdBJRv6HZHasHVeuEcyMqtDYrBHCRyMQdMnT3sKCe4M7dtgoxpTFSpn9jGdytKHWw4w2dzcn7f",
  "key7": "5KwoBz8kZtNqyVAdoZBPWbADEYoCZcQLxV8voHtRfSTGaaMHmgsciaYUkoqaKh9ohZSZQpsMASF7KvfrREuDLpYH",
  "key8": "WQNXTCwF98jVB3BN85bkJHEqgyv7juceUBZJjNhdxvZ7sqsG69J1ZywsKnqY7stNS9PY4ZZAXUoZMNPDWi3QyXC",
  "key9": "oqiJQq19QsvxjG5Z62qWacTTtFCkwqxnwk6S5C8Qy93KVbkb1PLyMt1aEZzJ1as5tHavKh9Ug8bMCShZ4DmK2QM",
  "key10": "3X9hbt4PdHLeS7FvSMnzDHyic88RTTtTyMcd1uH1hKWntYG3QJhGHzabvebus9dVxMHsj1gr5e3KRTrGy5DgKZx2",
  "key11": "3sWJw5dKQP5HqM5JbuynKZaBGaDS73eaNqzGhWhMma9BmsYUQY4pnGFLXDD5nxH8Qzbsvi51S2yXTtak5W7f81jx",
  "key12": "3k8zg1Jj8brm7dgBCE84jgS2JuMZ2SJ566NWrQANDG8n84v3wD5GQPastNJX2DW3KC83YuWvn3EfwwXZEC4bV1cn",
  "key13": "7tw3mcbccsQ9titaYtQcZJ7YqRvwq6U4ZTUiTLaKdCHAuHHHAyKavhUbDzR7N7gQpNUtDtu8d8xAnfrjkiX2LnU",
  "key14": "3AMHvYLBcmqkX2EuqdmE6gMh9CAigdxi75aTnCsvJBx38xrrhXcMieiLiu1AKWQZ4xe5bz6M6oPitVCn2aQjR4Pu",
  "key15": "5qb7m4F6onTMnLoiVMrbqxDdbLHXCSfWLfEFbzaqzMuQVdtR5EpJMCMwbUQtSL97o1Tnn9rqgbCXemqCx4sAYym5",
  "key16": "2ksKZ9jFRDsYKegSWwGdiBWupVaE5mjCEQrcpq7SkyNeh61R6wBN8648SR95mLBagJNcSDrEW4zdQmFUDksFyNaW",
  "key17": "wFNFCxHuRJ1G8XGqNBemXKGdMLmcidKTECWH2zXvPJTj41dGQcyZDSVXXPfnwq55vPT8zceHbK5RUsDdo6qoQjL",
  "key18": "4xkksaifYyKC2KnNx7UcTorbwUmrzAJHsK4hRmncJPjPXyeVGduBEp8z6e2Y9WGLNcvRGovxMiyCaG6itzWR5Rmy",
  "key19": "41gfQKdDCNniMJ8g7WPUgCMUMNGfrmMHbZDee6Li8zQ86JqQeXUp1ArDb2bh7tdHkRKAfQhVfhwy6cXJbA8NJ1pR",
  "key20": "2SKzd5UUATzwB41hCzoAVpZcPvWsduEyogUjDy9j6yaLxWB9YayaPBq3apcwJjtR9fhfGNC2ABApcxYzToqLWQeY",
  "key21": "38ppzpCXybs5FjGecE5dNWCkFZiobdoUdeMjgBnv3ipkTsLsUaS2SQVStiMYXr7zMbgTrh13kRcpChisYhe1C83Y",
  "key22": "2NvLcMnsrdgiwGPfDTbS7na7y77n2QxBm3qJNmDXn827UB6zwS1cYyzHCeiHnDGuVbad2sQi3uzxPz6XuxGhFpfF",
  "key23": "4Lg1oizxDEG7raV2nBpnUc23NgSCNQMuqTanwaW8JEJnrGzHJZXSHXvKvDBuh6pR6tv6t4tV5PLioC25kUCKZrY6",
  "key24": "3xQMrkYNFRbk9pxaEAZ9jowUJhoRUFyA6NjjtUkEmmCdTiTJx12MfyKiGeh2oKPTYFU8gfmFbt3J93EvfJumo9F3",
  "key25": "5GZzzzE4TSyYCAfCtqtXjk7FZknSNpYdJ2nQ4iC5DVc21VFqvoauniXTzFHJeWRLk2Bv8aC4WNotnqN8vS81tXqv",
  "key26": "tuKFYzj8JYpA54hQwnkLStkyVZMMmdbcQzeKk75ZZmnTJKktSnxrNVnLZMSBR9fprDRLKC5bEycw1zxiEePkyHk",
  "key27": "3Eb9EZs9QCzVKf9uQHSBXrQ4LLw4Jhm7ZMnK1A8iok5rcSzacedbHzSjL5S1Sut2qVgzDmRYSJ7GMowmiDks8uy",
  "key28": "2LmmikijyYU82BGQHL8d44nZNhDyyTQGYRFsPWQUbH1enb5m5epr5Y69wvv6Re4uaCRA32fmUFZcw1hEucUjBWSG",
  "key29": "3EL6huupFRWMYsiwHswyEktFjKSXBDoVYVcWd26C58xs43ZftTfQV2uk2AuBEkAj1C4kjg4b253LPsPNdMEFxeEA",
  "key30": "4gCZejg1W7NtGkUea3ymrgvNpTco5F8veNSvZMKGbSpPduuARkPf89gj5JNnHtLXeTCFjA6tTmrJ36B3Hrn3WqaV",
  "key31": "34mhCRfKGVXn7LoNUdnbqqfc1A2mmLV8QPeYqwDw8o4pXEd1vZkgDzBMDRKFVorzgrkPLReVXWCKLjkk32huangd",
  "key32": "4VsZfWdGzZoDwAJTzas4FSLi1zippJanZunFyv2u8Y1AVnCg7a8qYSsu18rq6cU3j4nCKtzzBhpqQ7bwcHo8yM91",
  "key33": "hd9BTHP28MCu1JvHCj4uPb1AdcimPRHY7ekq1UUMzZ4yd9j2YXJZZoD3rmViookbsw4WEJ6g8RXwLWXpxBrwaYz",
  "key34": "4SozvUCtzsJdAKbmqCRcRcXxxk7cvUCgwFBFu8EkVQFKDe53hFxSEYDqsPKwoEXvPDR5favDxh4NvRqeZXwVjKDZ",
  "key35": "5QmFegyMpeG557xhjK1CvzDzcbAn37vj3Q9AbZLgd6fRAa7WYTHrw3xpef6y59oeSquSH61hgTJyHZ8bPso17YfW",
  "key36": "5uEao8RTAbzY4JtqBbRk16d2b7Qzen7w4dFfy4SMfbWMLrcjhWTbzPLk3sq9gCh21rPRqAsfmSwGasa1rZfGzEbi",
  "key37": "5oKtuomPTrmqYEcyPPdjR1NWkFSXhS5ksD5ewB44anB2vTaULN1Vmpng5jhYcoqKfzdSsA4oiGgAoFJG98MNoDv3",
  "key38": "22g9d2v2ae7CFEjLS6CkQLsuZ26rnFQykefaWeGdUGfRySCw44miWqJy7iXgdD6psURmd55YmbAvBUwYjn3SSgTW",
  "key39": "44pzE8mVkukJQU3dPFNfEyd1kwKmuiPmJrDWhE849J8EuNQHBEaBiqY6g87kVeP54TeZJXYzg36Fk2VVQ5Je1BAw",
  "key40": "2mVzN8cv76QvPSTgYgCKJ7NeCMuRGkZws5dRK4eUBSCenH5eAe5JGoSD8g2WcfMtVu1pkNVtHyzkVXdTs7YcHPSG",
  "key41": "5AgVXu4AUPWBRTpTTKwnRhAyzrUn1eN96orkCPuvVu8sqbhqt8MAx8Db5GTpKD1KjrWn3CVmk5PBKFYNEy1FhVFd",
  "key42": "5Xo8eykxGGt5RKD5hh9WRpMeqRRA31N3u3pfHxsCKuYnRhWcz5GrTABCyQcGd1fVGmZurMAoGtaKjkJEdQTJT97a",
  "key43": "5M91e1peYdnQ9LyTa1M1xd7R8kfepp3De6Ph4A8xsVon1rrPC96Qx6KQFjiRMyz2rbf7U5T2ZSNAa5iDg1VhZGqZ"
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
