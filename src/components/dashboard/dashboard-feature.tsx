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
    "2XFqGNKHeSW1nqyyFkmV4aULV8WYXquvbrLDhgyndKjibJZXKeJw2H4jizAo8nKoqhuHq5ULfMrioGcdEUj6KuMJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B8iKMTLmfSycLbEqqDWKLG81HBFnnDTJ1J2jK2cKJjnVHifkZc7xV2EAapjN2aYChb6BhTBUm1j9u2panrtScu8",
  "key1": "5kd4ebQTD4rzcJqvSZdBGujrMxDB2GHgp39n3BdXKBSDAjPkSum2UmveZ8B3CpUQAtDTLtj5ysHJda5hkvKBmbCo",
  "key2": "5i6kpmx325FaTe56mKBLU3m1WvBZHRHRpX2ACJmBAtFXcdXmYoHQRQMppcRcNgqeFoCNWvtJSaVGSeGHH3exHJuQ",
  "key3": "55H4B3FGLViPr5kqvkxJd1fvTavtup8iT4D8HamSnSrNCjYfLrUNVHVnUzkX3UwCHWo1NcoW9ML2aVt4LG8doBpD",
  "key4": "3QV2geaqL2jQi14UsuUqLHmCHpEZB99srWrSeRBkqaRaA5CH7dVCZQi6zk8ccX4yAY1qsUYTj3BvPmdSybdyVxF3",
  "key5": "3xatkNjn9TPhkWLjgCBah7g9zS7cMXNvcMiziuCoQvNVhecrx7vPNZCtRZUiDLsoHDhqVzJ5c7mFrTvmUsa3oRBr",
  "key6": "4QypUrScRHerP5E5SuLpvHd1SJykPf1EydDxUmDq2jESRtDfksHoh1pC36CM5wbLfmdkfTk2Z9bEzA6RQqeNNLqV",
  "key7": "3zPRA4wuwTYcqexJczJkAthfkKW18Kshdm7huhAauk8NeJKWBS4EqHGYBMWm99NhJAV6PBHUf5BkyS58nEi6cn4f",
  "key8": "53DMwbfT67XDcqU8kXYTcq4oVckxt4kp963aRcuqNm5Eq5CiFheJpswhYDMzfUwmDG3zdPMb6ABLrB3wd9n2RKQ6",
  "key9": "4oP4g32PBipdA3zphCkMYwouLHLi3eGzrrj2kvTSScChdJLqNR2SwpQuxMpxtXnvjqwR7XoePqFh7radtca2rKbW",
  "key10": "4K1e1kkuNMf7zJuWaKS2bEzGu1CPtEQtfjdcinQwMMJT2x7ZaVmubE2BzTzQTid6eFTP3JSYsqwCLoeLPff7jQrb",
  "key11": "4e28ScPPXhuqj37MGwiKj6H2zKsC1kgZ4i3wt9ep149DmpaNvE1L4f3brHXuLbpkocfUBw84Q957bGV3cbdaFKqx",
  "key12": "NqCuvquTv54tv48ayPdPtrVFJRPgaox4AVFqD8hpD8ugxEY1MX5hjiSj6op3oK2wwCBTnXcnwWSthC1pqrHoydG",
  "key13": "4JHw2Ct1FmukipS7sKhQ1HjeSZvZDsQ8Jfuk8phYqWprjERAGuZARRCaAvb3qwYhaVj8sMW9MMQ6AxQKv2eWJwgT",
  "key14": "4wJP6Cc9pqeKw5aKaiSuTAKTTMZffSFUEFFXLu6bemjaUFT7xbnC13iU6DQrZu8sXBY4yVsdCS8R2br2vrEBAcCW",
  "key15": "ezNKg3chYQz1AVBupViKYBsfUyoyoxCAYZ5ujoxkrBNGZfGvhPq7HQJpDpGLZ4pX1waMWN3VgKNokZVDMzZEQsW",
  "key16": "3eoFcrMeSphdnAv2cpkT99HnQ35dDDo1a6rsPb4NyTf1Lw5YJaz3AGx4H1SYToBCGPCJnJaoTBMH1WnX6hsEE12A",
  "key17": "3sKCEjJ7d2mhCtUNqgP1tTEQhyfgfpDnHeHmA74zRhUupzchRpTvF5EDso4FbUJtRgcbxbUBXjHG1Mghd2uLPvrG",
  "key18": "4pjPTcWWWRBT85oPXLyRqNY8hfXWk1NRhNFqoLgzL8bCAGva69yLs5tM1sJqsCiVL8vkRGdaMUmfef8y5An3A8y",
  "key19": "2A4JrEpZF6Asd1chjSmYPaZPDUxQ5tebe4VjYKhMDXptCCoEoVa4ozCDVshbBwLtzVyV9assFrXFeaDgbFv96HTK",
  "key20": "3veGL3ganChnbcqN8xpkru6fc9gji4rZP4GnX5kBhNM5N6rYw2hp6zeiwgGtLyLVJdx59PiHW53pk94F3mVsZVVj",
  "key21": "4GZTvLZhx7sZyzHHogDFeV395kMQ5ewo4vPVS9nvv2M7YHGvKCrnaNMgr5oGn8aXMvsoRjtAgMNjQNrZ2Akphndd",
  "key22": "4spGqXPBUijw5Nt9MtbTZzHZ9CoQgxVEmLrNJB85jAUJa4ivj7khoJk1ct1BBcwa1EUFJobimy2aKJ2HGqZ45hGY",
  "key23": "4imiBm5keneVxLSnsZQ2jLKzkkGyfHTpXEfaGfhHP8AWQzBzJ57HLFZobjgf3rH7PE3kzPiz2opKey6iVU3kwnuW",
  "key24": "87ZKgputAmiZf4J5knrwM1EYQ34nUJXkCUnCuBxVhWvBcgdTSBhaA8ucGg2m31N5CvTEgBbVKsomZrh4FgD8HGy",
  "key25": "3SV71Dq3wB6EQTsjoZgJmB57ujTaYhQWUWDfGT2txt7Ak9AVEmWBRQVYEfyWZL9TmREGdB7LGu2i91EjLsfqxxQe",
  "key26": "4tr3qsxNXsq5JxS6UuA1zCFmnjmhnNLotyoymnQ9DVEnU8yppBEAn9nCN46XNaRtRUwM8dmoFi7YfSWAcvkQvRVc",
  "key27": "36xQmRZHDC4QYHV7h1Fcse5o9msUWAUiLuMxgdBqhYANk6ytPHLsQKSsitdjRAiuC42cCKTfc7a2KFpwozcBfKqN",
  "key28": "2P9RjdzH3jHoa6TxtEWkPKGzkXvthyZnFZhQ3iMFK2spQjizHLpKjHJ2jqxmrTwC746jsYdgKQtnYyYgCfuVq9wL",
  "key29": "23GZFz5fZjGEu5177ipiPj7r2h7RNR443NMWPqeMr9BLYffpWSSWsyPsQqVdKkJBRnS7jGahi8ujx9fXrSMdNE2N",
  "key30": "34joT8PYSGsdPVdxCyQJAukka7yFLNNKfxECNCmQ1Xx5FccMAtMknVsf7auHoyAUWQ5DNFzFfAFsdbwncQzawNUb",
  "key31": "4eWFEyK9DP66W2Jj6fBK5TFAWueZoK9NPYi6r5hvjKGvzvoNSfQJWA2RwSK2Tgxe2mGV4b9fDfX6yD27aLFUAUcU",
  "key32": "4qNHPi3yYfyNYSSTDQuh5gZbdxv6vg9FubmVDJNqJwVEPtbRADHonco3w41kEauqJdsKWN3Yrmu64SdmeXt4MVXF",
  "key33": "4b2zxcpEScbjEwxUTaUR1AdGH8VCYyn9vmmxj1XHypsA2eUkZNCwNkUHEawENhtrkbVTZQvRrAso3PU4VHrGmzdi",
  "key34": "2eNyHe97k1hadgTGT68E8ZzenVQtFhz5bZHfAw9fxCZxCmExCc3t4qGkNneoynQiniUcofL4Pyij7NphgdVDdRLT"
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
