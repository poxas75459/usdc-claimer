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
    "dPDn4DX2RTwUMej2jCfNiVbRZwgAVbyhgzDBo9tjpyBMsqRmDxYU8qC9uEKpHKcufFZ2YdX7rV4uWsuPWXg2RS4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g5DgwHk4hnJUkihJV1VfywvuzH2Vf58KZmPwCpmcyCXzAxD3vMcvXUuLQDn1ku2EnikUgxBLKUGKYAv4aA6aoWF",
  "key1": "4BbuEYfoRKW1XKPfCz2rXsgTtPGrqEkP6bLwiPEtyMmgfV5aEags4feUv7S6rnAhmE8XmxRdTcqe9X6c9i9Gmvim",
  "key2": "2yHzZvHFdjJUC6HgbAe5Yp9TMsPQ5jRcJQ7jWj9axnN8MqoJrJUCckRmadmb7bY67YRdaQKrQUrJzULnHrh8wH64",
  "key3": "sUbs4X6Xf4qRk7HuyxXUX4yP1G2RUkxULnTE3x1ryGgPbd8poHhVKMKrGQAuEE3AunCoBvZpuYHV8jnc9v4kcWm",
  "key4": "5qPc7f3PoUtcfo947kimXZ2ZSB9ewBzngN2y6DoE8eUDRfGBzKher5Mm1J7cRqFimXyo5eMwMdp3LxE2Y9H765rM",
  "key5": "5TiF7edJhkYoho49xirjyDsRGv2rtaEebvk1je4t7grNAEWuhUVSBpKM33i6b1DmuKvzgbfkV2AoHvYXUj2S7pgT",
  "key6": "2jxy7PkXe6WtpmjZeSSzswGf4e29vrNGx4iF9RYQp1K4z3RUVdRt6MpsUeaGxjKbJXoaDSD3J94Tr9FS6HE7nrBj",
  "key7": "47RCE3Pyc82AWE4DJaiZ6oEUKmHNpmivYJpWJVLgv2uQnRkQyHtp36aHt5eEsoyycA7AurWFN94hU53xvynXaeRu",
  "key8": "GZgrE356rfx5pySdnMhNuWgC6uLQ7dSiv1nZCSixdZ8qSGvM7FeCwmSXyjaGVrVxKq51YygxSQkgi2rWUuBxjLe",
  "key9": "5p8ZAwuvC3VbVntGY4v3mZwnXfaYxhgrYwE2yy1Kax2JuPH8pawPejGFgnN33NW7NqSmDnTqAb28xnNiHx5ktvH6",
  "key10": "2f5eCsVVeJBkc84TCJ8Z4XL24zVqq5E9u2Axgzfxnxawb6S2wCAem5YXFxYcYoyKm2ftLRAjbi2YKZeaEDPFa1na",
  "key11": "5szu9Md9r3CsYZeHKUvbywt2mJ7Rgnm6ksB26PzXxPoE5htahrQARJFunrezZQx1nrb8cU4h6NgkfnQY5HrFKGe8",
  "key12": "2avXihUEJLtLH4wMASnJV8dZX7q34X14R4yHsTepFLb3uHJt58A1NiVLkQaxmxRFrQxSrpXWAjHaRRC6epMig1vZ",
  "key13": "5sh8DivJP152bWTCY1t8nKpSag7jevv4onEfF6Ue78bJaDoHwmUwcQJa4ybxwQSwtf4gYCSHcke3C6KtWaR5Nwm8",
  "key14": "4VxT3LNCFFdASXotsNNdmQzy3YwKzUuuPwVap6C6qdVp8t6Eg1ksPrxbDdQUAqxrHWMDcndycFVpWfZdpbAzHNFy",
  "key15": "2PdqZ2Kdib6dUB7E5F6qrFkbm4cC2TnaroVKxr9NmxknMVPtN4Ryo7k5cajDGq75twPpSTf7w4pq8ZAuT7iCwECE",
  "key16": "3MiLEPnq5icuqt1Mo2MugvGt5j8YbYGJCLR7j5fU1TefDBCRBYT1WizPr7Lr6xvyY6KGcm5BMgXf2MHNAKPW7z9V",
  "key17": "58zfgDDrHYmFxFLFWWZuWr3wVoZ7bjHbGTuPGksC75TaF1wTN1YB7KyFDLr4jyBLnU3eoAtaLaUPwUJP7TNekeFa",
  "key18": "33bHdGpHXv7e9bZQoVE97us5qHERLzV8schgfBocHfT7AQd2ByVYiVNnkj93p2cnpnsxMZtsvfUMuvsYvJSpiYQf",
  "key19": "7h3kpLzSQ14QdFbE479WyLJqbsvBZZpFEJN96smXVPniudkzLt73YDH3iXcDUh3qHchx8iZAcJMFr3HYQ1kSMnL",
  "key20": "4fNWDTjLiCc3UoQcHjeUC4yRado9CQSSUNChTw49J2SS2N8j5gW4KtqzynLB4dshCcLBR6N96YLYNS8aVo8CvEYw",
  "key21": "52ckXQiLtKsjET1axJdaycdu98W9oRoHetZpAqUkTwpkqmdoQeV58RSAotHEbbU4nba2XpJzpV6tEpXnZzSmDxwN",
  "key22": "WNwwwxytrGyx7hEAjyLxEwayQ8kPr5QennpPBq3dk5Uq7vZPBSjU2MUDjqu2Ht8QKmWhiXgkts8QGE9ABBb9rML",
  "key23": "3ZDrYkfDh68ksnhs1zyZN63kRhezmm7UfTNLTLmrW81SwkQ8V1hgGcEwmW3wvNDrDmbayL3pvMTbC99yUX7LHznK",
  "key24": "2obi5QGTDEBEQrx8DJfWCiRaSWCRYPuhXygCqpFK7Vv9rqsKYZHC6cGnZe1KfHBRKCLZrmWrEpd4jwkV18TjRBJH",
  "key25": "5Z3k2x7q4MXHj5axDRaxf9cGrxzLETjVwje6pSLACh9SQ7JzfMwZou1mx4LgyPNR2KVu9LkS1AUqsog9d9K4WzEM",
  "key26": "5PsuEtbSKLjaeGowrJsVXhMtoT6AsvueW3baYTkwAErrL7VTWtUj3cM2inwMgosE16tBWPvQ4fRdYSEhffHX1Wi5"
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
