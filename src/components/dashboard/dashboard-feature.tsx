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
    "2VXZ4uPFtwJrkMmRHa6YgCGK6MLuM2UrrGiXAbwd5dJikUUrqn3mpudU6iQbpFGC45x8N3sW2sXBCvZNDB61Axx9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42fY1Kk26i7z3fXh1G5LynjWL7aYemTaGzAYTRgMWaERcj8r7devN3hDBhHxvxXYiWe7Sv5xozQetaFJCZfcF4yY",
  "key1": "2xAZhqyQA2eJ9Cv8Hg7oPhDnf8VSfatLmwuLHvMg9vTtygs3CKxHsmFwCbDKj531dkj2sMXbXSApung7YkDsj3xG",
  "key2": "5XdmsgBG1WSfcy4KfYbm3c2iNHMjn8PXwKxQAYCmWGGYw7K5ZgLHS2vNtVRC4LY1kQpRjYJb4bLkBfswZNNFKwq9",
  "key3": "4Xfvj3faiqQEmd8qgRzj2N1bJ7a9zn85RzpzoRWKUyHuuHgxpUMSfpdcMHGFA2XGue36bs57dEJsQ2EHf3z3nSu",
  "key4": "41D78TFMobyGbGRoPnRGzGSgYPjrvTWyF9Kv8z2RpdxUDWTLLUP8wLNF5L9CQrUAYffM6Sm21arRuBTQN5hwyga4",
  "key5": "4C6n9w3MdvMHucZ3Lfg8AQMLmiQcd1NxrTNyAVZBY7qGPNajrUr28JBURCU7CHdD1nWrTHmYy5BKjw7s2ieHQKL1",
  "key6": "2GWSMCeFHH8hzckCJ2uXPk2ukFDUwKaCpxtGRPREvP7x5bvUvoj9m6MpCTX7pf9AeEtxmmazxcEdb58HpqytXwoQ",
  "key7": "3YQ8VCJyigpUJ2EWHn2Xvtr49c7n9efEyCweyVkDevWNYMCwvc7CS7vWkDDMfsuCK15LmFKPzVSSZGDjiSR7iqSA",
  "key8": "4WRr38raaazwBK5sdhoCecA6FK2qj1EFndEj5qMzpPFxeTd9upAVJexXoet47d9UNJQrHxLtrFQHcUytQTFBPDTT",
  "key9": "5sxm2XknR27UqHpzd5Dyk7YDnfS3sE1J6P5dHCwMbo52Gcg2t3LowkCG2zXkjmcE3LLypKCBac8mqftN9iFZ1JV4",
  "key10": "3xaf8W5crzHbf8sPXahh1JPRspNRNTE28r3utEN65S9K17AnWPCGBDJPKMYFnWy6wtTQp1po1kHk5bqKDFZghsKq",
  "key11": "2QF4EesK7kBSAQFfhGhPU3UQ5JyjKcipGyxz8S5mouRagBSjwovueFRpxUFfvC4seGPocRrvgojSkuSBBkJRsPkQ",
  "key12": "4UnL3zHZ3X9wMjcgMuFJgVjQdeujySYT2peZStwFTeaBwj4DT3zFQT74S3fUHFbgnxX4JyxpVhz5u18yk7fbtpMP",
  "key13": "65EpDjiqawrGCrdeVS9PFamep98evCYeja7owTmwMkftkXYAAWdAz3k6NsZWGa6i2FH6scTfm3bitKJwsnsxpcFF",
  "key14": "4TW6VW574hmtdm9YWmh4uiDASfQLoyXJkxGUCMuKooPpy5UPqbfvSJdX3N3yKdogZe7NCcxty2Wu5ViBexCks5hA",
  "key15": "4UeQ4T9Z7AnqAfD9ikwFwPfC2VpLXJ89uiwdrWRnXaMpj376YbtuWVvYvzVYNqmA1zGpn4pZNDqe4iPbZCWhgXuW",
  "key16": "2UPqd5F4dcydH6TYYbfA32dUVgPhXpzpd8G7dtbfETD4VCkzD2Un3X4AXzpYQsKWFNcxwx7v1ddH6rZSEHgxzi3w",
  "key17": "5qWMqGj6TqsBMTgTCv1Dwdt8avUsV4ceRDx4PrpTeymkHgph6TL7Qcd5Pvpox2mfmmJva479HqarSSXjSqwduWhH",
  "key18": "4XDbikbs5Hgwk5MbcKxgf5Um9zMq3PW1m8CYdb9ToGgQwFkVfSHZof2TMVip7AuH2yu9Xaa9TFqRSRNst4s3ybou",
  "key19": "4Rq5xS6gYWfZ9S5iwBFTPoR8ZmHFQUFBcBkSoJYAxYT8sV3nRH8gDry6YPDJ7k3Jqwo55ENtjMkcRfbGopoXh5Np",
  "key20": "AyNKoxfiExgNV31pYd9S9Xtp9p9C5eFfCXqWhHv9jMHftqkTcyzQjc2JCAA1ux4RoYF352hoxzRxCLqoVbhj5fY",
  "key21": "RUQ6chKEP6qfVb1TJRYA8iTENL9hjvKtMqFihrVuN8tiAXPereivCLkdn7bqEXcgwzGATU1xpejnu7AQKiAbiGE",
  "key22": "5hWZiRYkb26LqQnUYtAroU9iUXFRPZWPpdoyJxvmUheFaR1FV5t3avnyLK47nAi7p6UEqQjoCuDmv6LQLJvPaypd",
  "key23": "39epJBHEWeD7AaBYanswB7bwJSbCd1dGhghFYBHEgxqTRTHjJvnhfcLFGE26ccnrQB3Rfx3gYYZwek519B9cyvaM",
  "key24": "2DdYxJczTzojrsrPubAAkveaC5h1gNWwvpMUZntDjZeRp7D4rumqWFWAhHV83Kaug9eqojkZKUJKKgLJuHQoxeZd",
  "key25": "dx4rJ9VXtJ7g7F3TNJyTcbVbdoVo71X3YmLeoH2Jzs2vfv8AirFAivS2MUzs8uBzpewkkWaVjN6SNqQcwVjXvcc",
  "key26": "EgD4gNDWY468xDo6rpC4AsCqtGWWWnT8DkDEBzvJW7oxfM45QZkiVkeRxZiRX2wmEbfYCmhMmdTtjfpT5qtdJ12"
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
