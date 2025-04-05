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
    "EeJCz8z1zwQrtwHecm3thE7JTSPTyXT1YsTpDU7ik4qSrg3PuNWyczfeD8YLi8Mz478qA1uS71LnrE6yX528TSu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zPYDyv2TJRZMzjLY9fVRhUtAiwENnvkhN14KBVe7gzhiZGkZTKWheqFnebTD5CjEFeYTekqhHE3GJaD6EMseYP",
  "key1": "2aLKG5Lcas1ezduiyG3kiEKSDCCmTKrLAAwBq9YtiF2Te39mtofh1gbJq73N1uQdfiPFaHmHEeyrSPAx9TViLQJa",
  "key2": "2EeMwYMmkGfSfxfWg2AJic1DJiSUo3CtVkr5dR5hQqJkH188BYBpjvPPsLX52wvmgyzkrBseW4zmYmqBgzGLnfXv",
  "key3": "2m1NBLDh5idTeUQoPwkxnDpZaKLmBJePaA9SfStkPgPsw2e7Mz6hijeDqT1VtDb6apMjaj5VrfPa4rFAeH8JGwiQ",
  "key4": "XqVquStP7b9NtPy8LSpx1GdLgk6gRkAEKAaWPYC2ipFZK1eJbjCRzYoj4Qi3XT6yazHbhbgtY4z153sd77d42oK",
  "key5": "34ehbErK95FJTuobR4YtZVscorPFMRJH7ncDoeuLgKQNzxWJabzooNftVUoeRDYLXdVFfzKEavFLo6guq3Zwx1yS",
  "key6": "5eNYC5D62Y2x55Dco12SYtF5dBrFtAzYy2Cqe7HZcA31wf1ZETpdi2PCy5ELWGwR3CSgQ1AUJVmRAX7AHTq3sAf",
  "key7": "3FTNtnocGpVPRf8BUuEEWaYUt3dnVAABHuxhEszXDFLPcEchWPMyzokhgwdJz61MRT2oDWtpUN9f9UXBEwkTfFM9",
  "key8": "55zN1GVD57swfzvTCSwUBjsjZNwpYQKoHZWXP4pVQtVDXXk2QJFmbiKKujJiVqyc2Qqi7sKXxyDVeukAZf7rPqxH",
  "key9": "4iDJT3S6iKww8cvC2rYmN2ZQqwrfhjxk4bcny6DFvLwms11ZQqzPGFUkkZiSwJ2HZEPYZr8q87ipLwHJMp9kqKUE",
  "key10": "2jKkcvDQvjNaGAty2pedMaRPzgRFNCkrJVQHU7P4Do9vDYBQmPVBV7c2syAzZR1KUHZ8iJrM5ntV2xNpd3f5u2TN",
  "key11": "2idPNoCMWgZcywVgJmLjQQBW6dk3JjYo2c9US9crxhjDUg7eEEb4djsZPpxV47u98KG22t3shgqyyrKatL4E1FMV",
  "key12": "vL9kntjvq2NhYu9yCXf9qujhCMUvRUUKVQ8rwqPuN36M718ZkNjWbP15yuF9wsSe2KLbWVUwHvRzyjb2tw3tSKK",
  "key13": "23j9ZRNaz4t5b9RZzHp5FF1gnrhXnQNzhryXWxGeTGS1QpihQAuinoRwMsEibS3Kibqw17pzAByobfkekuXLHU8q",
  "key14": "5JjFNBPTqRJmoxmVsCw61oDGNnUguMe4d9aX26SiU4ysRBm8cfpYRDPYXabvCjLK8rmbzrkmVnPRgZB2ukLt6Q1z",
  "key15": "DcFELzM9jJ6wwQWRtATiQe2aigeeavpF3QiJQrA3Sqqryzow25PkU6itG7eHeNzgSwiEEQsSmgPecb5R4Xuzh5e",
  "key16": "4c5Vr3nUx7spyJLB1A2k5zE1r659UjNp8Yq6uJE3TPUMDZMKSybvN8MT1eJmkip7zPwMcVKp4mNTcHQuNckZz67U",
  "key17": "2dPjUS1R8w6GEJPpjeFJeGjABGWR1rHic8Wn8nHFkiwoyHjhhyfRgCkgdoDot1GDWCxzexYairr6q7ANWj1LdBxo",
  "key18": "3ECkLcHofZbcivz18qQx4fLKm8xAzkf5VGJW7hppGFwbfDTDvzFNJfAku8PwFGfTpx1GGyzTbca6exbkm4Jytmpu",
  "key19": "4TvovcrhYzrNLMowVZYV4E8ZsbWggkANs8Z58qd7wWQnhSN81fHAoqi68HHBiSKGSAVFUFpytQ4MviJU8L2sdmXG",
  "key20": "3Rha945ywF4qk3V8r5YHNBBMLka9RLhhJELAgr8NPtVtyzaAHtSG4S6bws3QzGb7jBjKQNfQ2s1xEaBjvqsYVQUC",
  "key21": "sgT5Tu5wEity9caGeDkpk2TL5EzM7ZqZ7ZrJKBgsDarDWGgBnzAQdhEkhh4sxNkmcYPEAAaC4heSG4WwdaqKUtE",
  "key22": "5Q9DRNpUWq2ZdzcXQTHQeb1WYaiCXihd4WDLnF6Vbn3cPyw2VBj7CV89CT5bCvRexpwePKR6A11sRYem7ZN1pmNr",
  "key23": "3uBvi1PTaHNgJrBNmdvd8yCzZUWnizVM5HvNyo2w6e4adowPaRBZMTvzX5iDXYpESqZtHqqTraUeuu33Fx8EpkSG",
  "key24": "bw6CYbW2XLUkYBQfY1LNqPSqJDTrNCKknn9S7T33grLwoVotZ9yZqxHZ6D3myWbHcnqF4Ddjy5Ex6WYj9aeryLg",
  "key25": "SW2cidwU2Gw2R6V6TZuTSotrMSFKFx8da8sYkMPw4RhdzDJ9HftgwqDeUuavPFuWzZgChAgS8RKqg2rFUV5KbGg",
  "key26": "2Xuc16vbwinndLHPfeeWZdbs4UNeYvf5DKKdvHhFZFBggBoLr4riKK9xtVE4MziL81RUMZ5k5F6sS2PgEM29JGmy",
  "key27": "64DFiKwm9RrpXYvbznYLJmnhfSsoVMRKi9xMj52X1fQQA5xviBkyxz5HQDs28GvqrjdBrf7bBEqxi2u6WV3Ghkvz",
  "key28": "2UquYbHzpMb9HnEuDdr1AXExt76VLge1pyX6Me5CmTEeZoyUdBYtv5PjypBmDJPScCJ3KFhSk1whEUeqSQkYAVoA",
  "key29": "2hFKq2qn8RDYkSuQWNbjeXmAsb5CfDLAXGFxi6dbgUDtJeQjm2WiN3Gsd9R2KZsaDgbajJw8qDDmdVUAZjS39UcL",
  "key30": "4ePz88EygQi1LPoDCu7dw53yRySajdGfgXrBQM9MP9RcorYxCfKwaexCycsm9KJNeQsFrXxBWgKmbfrpxjau2Znx",
  "key31": "5Hnk6pX7HCe43t2YJhiK2jmQBt64TRydZtQv6Uv6wmoYH7dwydWijgfdgYcZJ5k4Q95UKVXe2gBMB1kKfpwk33ZM",
  "key32": "5F1QMHHi12suSdUftRvRb1brbdzDzqrm7vBwQkFRmXLW2t6K37Lb14m5qSBBZYadQpdag1Wt2PPVfFYEASRuydQP",
  "key33": "4DQNPq5a6hfeYwEvENdQPksqMnVLKy2eQvpzZk2G6stuBRviEV5844v6vFdndx9wzkWGMNF3xxmKLeXH2MiLqRGt",
  "key34": "2wSBtTTUtLsVfpAUtZggQQ73qRa7NqkZpf1m2EnumqiXTjYVt5tg31zwevuMwGFBr9BotuvPs9yL95AJs6zuoJ7R",
  "key35": "5LANMtJAXeXysdiuq3LEL7DBRuKaA2eAzW4Y6DxHYthpHCLZDpxeeHuqyZUAGRQ2U8bTLMH5eNAAG4DPZzLwHvtv",
  "key36": "2s7yR1fkGtu7KsULVPikauxuhCM3XvR1jEvjDRg8vSX8nHjP6AnYywokPEThCTtFS9dN5qeiCSKbfeF3WSuRgAVQ",
  "key37": "5DmhEcYrJjo3qyF9kPsJKg6KdzTpbsft4xNHpRgjMx9PEdT9sUmh6bycbCvu9s1WyGykKnPTcprVj867MDkcE9eC",
  "key38": "2L6bEWpYGNBW7rHz5KA2N7n674oE9aGmNEHQRVkGxtsFncxctFV4VuXM6nNWboSU5HTZqmc5CiVoXMcvfyABfuNt",
  "key39": "22MrQ8FL4jas1RMwNNwmPYEbBA5hMFbiXJJ43uy6cTWBJTkQWgzpi7YaJA6mxE6C863jRMvoRirpWjAeKsBY1zrA",
  "key40": "5MF6qyi2Z8U1WX7HxSju67uoPjHu3T4hHQpFNhJo8ZSNcLW6TJvyykKmXFkU4t8DQfkAvGEkideg3QcA4EUa7RQY",
  "key41": "3gUQuWo3T3kQzWfCWYgb8fkCTkutXaVMT8UGxL15oX4fKCK555cTPthoTp6VQnTZ5mgX1wbGGy4B9nak9sP93sDz",
  "key42": "3jh2BAxc3oZ9g5AsDY4uMqwTdRqFXAejjTHZeJxndqtd8825M4JtMiAB6DteRXKyeohHCEPZyXSsVcxY225oUR5i",
  "key43": "5NmB7e9RThhJFpmYUR6L36zVE2Hc3ep84ZPVQLGonmjJG2eWfzLvPzfHKMjSVx8oo2PNccwqjWyqNwsNZC6WNyVt",
  "key44": "3yxjo51MHWwV4e6BZtPMbYbLz5TgGoZbpcpDHVKazyz27b9UkTxsejjBEuLctXW3q337YrNexpVMtCWMbNrHy9SC"
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
