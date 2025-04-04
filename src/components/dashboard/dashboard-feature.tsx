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
    "3JUsMCapqFkGBaMQEvAqXtnssGVDxsWhFBranzh4GPzFUKq8FZ4M6jPZU8zfaZFyUgJ92Bh6fJVp1nYobFsWYL7T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jjv8Y2sJjUjxiRdedkzjmzLUKFwPMfQwMBbuEp4SfTiZrrqW2GvN6aA6tL2URTqLd79sGjR3strYQ5durVNNuEC",
  "key1": "5EAbr9JsodTjPuWr5cRwRKXebhBP7v1DnnF4ooVND1EbiuszzoCY2GLgfDm76sQ7rE6y2zBq37Lv6VCZDgPr985v",
  "key2": "2dVoiukAobPXGXtPeVndKb7aGfNnacDTkpGth7vbwpkKL13TiWvY8a62g7rUov8Euvj3tMgQ8RCfbUmkhpHaNsdJ",
  "key3": "3xCa2FLLFzgRCuF4NNNuM5y6xwGrbBMrtB3Pqj8Q4g2a6qx2fv6hsDAMVsKyqz7EjXNfgcpiJqaQFpSVHhhgsyEV",
  "key4": "5JTH6ijwnQ6wA3GQDsHkeuqtKvMND8njvwJiaEnsoq3ReVsyiiN7D8KQTTg3VNR6fcwmJCdYc8efempd7DTzbBcQ",
  "key5": "3pGNxroxSoStVZwhdRuxrXBcwBJHEnTmuAvDGD94bQckNcaRBW5M614ruUQiJKo9v1StCPjJvz7qtdsTPXztUsC",
  "key6": "E1m6WcFvp3EJo2EhGCCXQh5T7id77nHtdk1HnfhXeaJXSLxHP1nQUMD5JHpKw8bZzFZw14xtSihpsJPPQe4LFKa",
  "key7": "4AcRwDJrWV7mkcFufby6khhYff86Za9H9x2ScNBbAT9fQE4jM9bbLkYUdiSAb48UjWGS1DbhQuTtiBqcxebrfcvU",
  "key8": "426Y2LT2y2mWjLTDpqiQxnWJUeQDY5bBykTDJEbc9iRJBsM2MSBPZouggJcyLM15ZY5Y4Fhg2DbpBbLSHBDhQVhu",
  "key9": "5g4w8My2pgSQCkfJRgYPoxwWGJSpXqF1gnHUpKQwK1mrZc1GHNo6VuzMepCoBHikjB9GipDkjhA2KtVd7Uqbcr8b",
  "key10": "4yL6HaePKxA6JjNgWNFS5BtY37PH7mJL4Q2L89mZpTCbJokL7h1zAk5wPc1HLDXP2MP5fj5zFqeo1VEUdsDjCG4y",
  "key11": "4c8Y6Dga9ZSVi9m9ikBeVb8hGZk6qmZXjeq8rU4C1VboYmqjQci4YPjTtJP52gCtTig5thXmiXYuwDhMgMRPN1mG",
  "key12": "4o8ZFiKwgebyXsHxa6u1eMsQXrgoAtzC3Focpp3eXqKbrL9bRoqMXtDWVp5YQ8P9hLcYavfvqX5CEvJsQNjtxeGe",
  "key13": "4GnsM3egrWrZaUna6GqctrA56YDHRbiSNBjRLduPpvxwLnkwVVMKtTWwBDLeziM2bD6rdv3nMMM9TgfEbQ6N6kQF",
  "key14": "3maKSJ1ZB15nNp3iE3oMbGXk1oq8jNMb6BCWcCLds14eeykmfZDE8sHjCUcKbPLQUcwKLGxqg9BXvjwL1HBQ7w3N",
  "key15": "5jwE8HmPWcXfNqr5T54Ged5fNcq3cZjXxXWy1soPZkg2oRi62SXK39yD5kwbooyxhbGhQCrGwxiUy3xLrjHBsy1b",
  "key16": "5tB1HKP92QjqBKVg8D5cCnn2EJKBHrAEPF5RzgTmJDjXt9Xn8K4zioAGQF3DiZ6oYsRAGznVXrGRpq2JziVzzYAY",
  "key17": "2k9sENNQrJYMtDSGdLMggW2x2z1UCw6AYp68QL6dX76tmsQ5nrBU9sLq8prko4LnNpLj86g2QrkuVJ27oxE2962m",
  "key18": "3HBTdKLT1AGVffeGv4mMfD4b6hFXFgpYzF6PahcyQ1MHWhjqw2T95XM337r7yeBVtYwEEmwmG6B917pDHYfALG4c",
  "key19": "2iPDMJGrjqvoNomY67LMpPtgh6kWnDKMkGG7C4mUg59FU5o4FSVoSNBYjcfQNcmZjN9uoTfjGr1RP87gK44Tykgv",
  "key20": "g8WAf9Nd3mW6J52WaaarWG8sXZB8XwFPmjs9eQrNnve5h2oc1QW7WEkFe5bZCtGsjmTerjdcNqwSEbPrRuHaRaL",
  "key21": "4VJU4nWV5YKGQiS8EJR2SHmkrHdQpRZRA751N3Wy9AqCJ62A8hm6gA1rp7hpiUNRHrmiuZv6frp2d8u6V9EvvE2j",
  "key22": "36mgJGnsmUt7JGMmxmEK3886zQmYdgdoGTTr9t8CMmXLyNpLWEsEL5k4g84KT2Rp16XNkKExJyx6Wes1bfGbAeU",
  "key23": "3VqUKoCgrJJnrNXwE1gYCG5YyabK5o6UGcyx2RrhJ1QMj2SE6M4HAhsq4QdyoGS9koqZ1Qw7P1boXQH6GVTZuAXK",
  "key24": "YH58bRPM7E4UebZkPUzJfznhf1U8QYKFFeRRgaYi1HKjPF7Jyb6SvKbusHtDFC9F3hsBgkYGQbTyCVaU1JHDAiT",
  "key25": "2QqohJxTcQh8p2kErcfwEUkSp8K3hq1Bj7GigU6BAeT8NS47ddpF7N86Xyk6H4NEHPtWC4ZtVrXidBhfo1ZC1Vvn",
  "key26": "2PmzkUTMbnoKz3br2QZ6CfWXcqoTAfvcD8dtDgyzjQAALGmTTbMS9bNLQixrMgWDVdA8GUWv4vKu7iXvFVvu5SaD",
  "key27": "4F5od96fPyEPJKyUEqcPETtqNeQCw5nDSdTTFJa9zfrV3BRfmtMVeXKQQi8q5TSSQNYF8hGTGu5c1uiUPVt8uznx",
  "key28": "5BwMjMY4AVN1chhxxLKM7qfnpfKhckbQPhPkZCQgWBjvNjuK5BEuAsCmzbzDeCn4cjc2hiD1ZW89YAMg3UV7TgS3",
  "key29": "4tRf1EQidTsoYzcsBS5NTunBTgRjmHbvEyZQ7h7PiKNm5BKkdfJ3ygJgpXyiyNAYhoQmg4mVSX576DuPWsArMkra",
  "key30": "QiJQhDnViUiCXazniD9ubYc1RHrbajA6D86crCQHL4TCDN9Ys9Nr5sKLTotTSKRocdXohhrgUXugk7ujTmaz8hF",
  "key31": "292yqmgpt7yXheNHTLoHAURJ3PYqg3eUQeb36boGEyMFdkdxAD6F44PCELgfyGnV4UDqaACMd8PbjRYYbpapMFx8",
  "key32": "62n2NnJvurxinb4uv2bLrYaZZQuWW3k8Vjqe8Gd5kDR5ebpc2NA5WyVZemKr6CvtgZ2iCfAPBdM8h581V49qQzE",
  "key33": "2P4mDTKM15SD4kajHe9T6Z83dFrCxPTQSL47QZmVtSSDG4BVkmEuQvFACFmYrL9hTvpwbDRMJ9bUDbASHncrZMYK",
  "key34": "4gR5sSY2NFEJ4iFhbhhe1NhJ1U9k5FbDb6B4EexfVqkHJFJVcyGfVpvQfqRxCoLZSoDvN6CmVMhNkLtCW2dqKww4",
  "key35": "3aoG3sfz9KLed7SHBVjYafhtpiQYWrMhG3eexVrR8uiXGmABgVMGgRGBVaPiUSiC4XB4uMzeBFDWf2PPt9vmtrB2",
  "key36": "3xNz51DW28MqNjda7ZwiKcFziwMu7fZ5WUF1v95A1VuZ4T7gmoZnAvA8imPumPFsrCC7145wph2qNutApuPwG6hh",
  "key37": "4qWUNuhLcUiXzdScx1xkNDWYBbZAhTj79kVMyd6eggCpffbbVRbLYZJ1voJV7RM8sscFaAXKP7eFMsMqK4G6rmZn",
  "key38": "2ujQ5L5tYQsKqwHvgBEC73J67bTMcshDEoESt2R3MAbXtxvy6qDss2CNtUUVqScT6pbcrRZtF6Ez22BdpZn9NK6D",
  "key39": "43pQM68phh5iZa91v4AEQXAapQ8nB36t69nNq5xz5BLeAcmi1zPjuxhHDM2MuQNSChVs2pH529RJUYPvbHmup8ew",
  "key40": "3jJQQoJd7iPBafitoWKSug6ugztGdnSFKUyiARRkCt9vM2vLgGZWAmtjL5WENuX62fPAM9W7UgGbrUuUGcjqPJ5A",
  "key41": "oHjywNEtqzgAFQxUv1qu7V7TGeqz1w6ufUoacENdXxuNb4pSodKwowskwzxTxXxLKR8snrEZR2RYbE7cs9z4iUy",
  "key42": "Yw22K8kMHgpt9qYy5q147vC8XnHdQeoFoTvsPLG8gUGM41fbCNxnmrjWguRJ2rngFs6zEB1WufDyyJbrVNdyZuS",
  "key43": "2mVS5jnL9A5qEkwPYw9pCPPVaDGUb2E4xZB8cWyAMVhMzVPUFY2nPJXr8yrGEkUzfrW69Kh6t4DmwgmnhnyXWQfF"
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
