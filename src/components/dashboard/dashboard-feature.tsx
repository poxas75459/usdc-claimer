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
    "23vEiwuYz2Shjkz9rhzBWVAyG3uZdvV5VggsZBJYfvy2GCQGSbhY8s3gj1ynqD7v7P3aC9TJVeH1xKEmr2RgrMHM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YRECAkpNKRAVXDXCxceDNddkRdkMKNVNv4jD77FyirxrLr6DEfkSkZE8Y1MAACEynAjPD6LD23eb7DdhUEx1iga",
  "key1": "4VReEJcqnw9L5dh71jrrSLx2CCfT6ZAV8Uqe4c3Yu46fnqcnQ8RCaGTtzJGYJxawf4bvWaNGULSMoFkbBp7ZGr2h",
  "key2": "76UAa9EeB8pfbvGngEyh7oAEVkmyp15enFfV9ziRmtNy3M4gnaN5EJNroLEAoPxvkSQN2Rmmi7qxVnT2VZzhHVB",
  "key3": "4wpBmpMqS7DqYbVKb4zorMpCyz9qUjaaJPpHdEAMLExkpwXFzmTJJMHXQej2D1NHZPb5NgoaJaVPzn6StxT9swTY",
  "key4": "cFY1eLYekNTBcEW6PRd1oqCQ7bS7X318EiyWAiB69BnwpvuR4CstnfCBM5zLbDjG2qgVTYsiANscS5adggbKfKp",
  "key5": "5MqGmK1SwEKufwQ9FsJMkwoVp9sSgX8F6PrDC8XLBWSnvWhCr3N7R5q2bnAJLffn4MT2EwFaFweJ4FEL6ik6SaAQ",
  "key6": "3QB3Tb3mR1jsjuBu9GRAxHixRSKqWhavC9g32UrgxUAY3r6Lkw7fiTXUnKC7VtdbkMoJyYXvigy4aEUAr8QYXERq",
  "key7": "xsQy8grXKywNePm4ddv8AMvAwxVWEQB5ChdHnwoJTKrxbrpz8rYsfB8Nwp2A4EDwRsRzpCjqTTHdKmimxSSvisr",
  "key8": "3dsMYnVeL8zkExGbTocLHHrZSkdsvS5t5pxLNyL7ckhkaNzy424jnehozH1S4Z4wNuGESmiXpaiwKS5ye77r9pai",
  "key9": "2R5G1bquTcQ3zpPdfr4DszN63G8zTu2BeHuineueJb4wMZRpVdPazFdvCWRBxEjjmREEnybhDJjpm3chQjG84BhD",
  "key10": "3GTTCLBe3S2YhxqxXiZ3nqGx4pfDR48UuLDDyhxcSVrfBJJSPpPtwUZS1jg393m461pT5T5LVSh5k8y6guftB1uH",
  "key11": "43ZGbG1gg6XCG8KFgEugGM31pL1BbTMAKQPzmFixwhUJo1Zsxwu34s8W8B9hDiH8v6Dgfyh86n956aLNqH1nzPZm",
  "key12": "4WBtMU2gZHsSYAea59g9ZMxxZboFxzg8bzA9PsoMd7EWN2jLaaEpnLvEimdgfxcRtcRyeKZAumt3JoLnA73PMQ6t",
  "key13": "whVgcqLNEWzp2WWT6FAbwWyudgzEuuXZ9JUoRr6vpHrmQ1T5EQiY1W6RxofLzeND83VfXtoyvVaCMQnyNHnh1XG",
  "key14": "37NtKriJvtyhbYuhnw5DuXADJ5XZhNDjSohHbUnjwQY39PGmyj6qyNTgtqVKcPmbcLHViYB2YGFDfesfyvQnSSK3",
  "key15": "5mf7SfTeLp4mdCSQ4hSwKhnz5fnYeZgJ37uqTUjNiNjuuTF6mSdc4kTwpoDsiXBAqt8KXfBmYge2kJktLhoerbFR",
  "key16": "3Ns78XKMJPEEhiEaiPhXJSSfcmZvk6nGrECEnsXj2S7anQkVjncCqSwTJhC3h1oH7BZr9wXmw4crJ6KgpB6LEcZh",
  "key17": "h9hrfCfg8prmuskwmnwskiji6P7rcijXEyFE8rDZUqJ69555uwmJ54AYpxpFA9W2RbeJqvwsQaNtvgUzbmfWw9v",
  "key18": "3y55ZeoxdG7hvicdk885JjpwLndWDS96zKMmkYxK4uNkjy8xgbhaoA7pnwnGyVmokDNPxw4H6T3WABDGpW7NgKxp",
  "key19": "3n2QhWc5dvMCTpAxs151TcbBiaaeEZGGwgPJsHBR9sTi8hq5Hw3es9fojUQzGJYgdCoBZxFKwGnU5gDV2Wopwy48",
  "key20": "2Uqf5BbQMVHNcznpUcFFcR9mjprdRiErV2EvdA99ic8QrpTDpcgyDkSSm591J2qNMG8dagUokDwY5BzyH16cJxEs",
  "key21": "3bQqbT4CQbkhixDuWopoMU6bpYbPC5ydqiy83SRMcV1E5TyW55k2BW6Y5o2q25ARER4djULPdeNDKV4ARndzCzeG",
  "key22": "4CvbZ6d1kY2GTvTaw2Xm6gGqrrigv4PQMWcAk77VQugLC11Nvg7dVQNK6kus7FWXR2ybyXiBQR2PFVfNgHVRjB8g",
  "key23": "4zJLSaEax4owGyk4cr17A6qKocmzR3sQPjNcQhYJavUFMwsZsisC4qNxVZXoauDm816sjjsYLynNVFdbdkg1PiLw",
  "key24": "dtNEH3KwW1HHhgMHoW8vwHVqU92oLsaykoXZxqYcA2UpRNtbnm8n2khfN7PnKY8zdNrVnRA3G7Ke3Kf8DgURZf6",
  "key25": "4jD2bc3p8Fha88FLdZL45BoZrTgHdeM8xaNjZtHZuUzcYkd9AXnMTUaujpxedqTUbCVCddM7j3HtcYWrWDEqGpKU",
  "key26": "2xVUU49Ew7id4bj9rJq6RWAygmCaEKeHanKJuvD3EpVQGe9tA37yBBnEGjoNnJ8rXZTsbsnsZUhtsyAkHWZzddVo"
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
