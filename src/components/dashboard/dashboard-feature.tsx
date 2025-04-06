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
    "2ncvxA1uDBij2T9UozEqqCbM7KeMn8nxFnxmVoX48SPNmuaynTQARsTG7et6sNYyLGHp5z9geqveQZ4jgkVe7KUk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33yshuv9sLP2oE8bTWadGyMK2QhJQSWX2B31aeE7JPp7z5x1m5jVemtc15r7wx1oGLW5512G3JaQvcuoYJ3YPLyN",
  "key1": "LXFm5XCLBzaoDsUMZxtTrch5KBQ1Pt74eAMs6dFaN46QN6xK3Dsh7XT8RW3rXk4z6NXQF1cZi1sQtErtyw2f5aJ",
  "key2": "22uCfbBJ16XtvHak3raPRkR3LyH9RBP3s55b8FGJrqGrcFpJ5YRu3cnufyYSiTDxbMnS7XSRkVwuSQeaTbeYN5nN",
  "key3": "4NTDwhNuFZuCnWcjzcGjWZW6EdZnADAjefAf3xKcLuNpCH4qh1ynJrqsuVr7452XoLdiCVXRmeZZTbMsqZPVCoLx",
  "key4": "2hA98qLWnJMEYB28fprTEZjcvzHHdsXgQjVaVqbGznqMT3rW5sJFUFmACTHJjH8x8nzZdrrZC8fRz58d2hDKAh1j",
  "key5": "2Y4gQKEfscgu6Fnxy521BZe1xanXy9awyvhkmixwcanW4LSMv7uMyrQi7c7JxF9n7xQvbhm3vQPhDeEDy8BVP5HG",
  "key6": "5iVFFBg24A7wWDspe1tyXKhZ7WEjBniHtDvHn18JcFdAxyjayeiCW1P2uTHPLX8kLavpJEZXdSgyZXJgXbocTcgS",
  "key7": "5488gsa7B8akbq36VBMCxL6wjb1zynPa3RaQHAVkxJLN1jpYLyWvKcnoPhL4LDFHb1Fqf3w8W3Q3HTKSbjx7qwuF",
  "key8": "CiUK6SwJgMobBc5vnhPuafPG5DMkRDbhcAhEUZdcPZkUiLWTHfSMtJuDLiKtbghJK9TzBtV9LSY8i1MLYkyDQu4",
  "key9": "4nPuEQ6yeAQ6cNDA2YBZJo8vxkgUBpY9HK5NPKbRcRWdBNriA8ZkwQuhXPWiWbo1tNQe4U5g16wWhjG7GanyFV7y",
  "key10": "5CworGY5wNjdF4seFSY9xaPVoHEAjDgQEz5n2oSesE9d3GLwcss1PQmJDrs2rE98yisfEbAM3zEKnTDZxeHgvoKM",
  "key11": "3bz5KRzkCPa2Ku9Ue7t92biReYc7ooJMZRgejY5qN5jUXVas2XbrJzmvVu7BfLADxMG97ZsNsabwtADd7mxEJkNy",
  "key12": "4pPembz5AV6D89H9M7biTDVQTeVBFFf8H98NiqrvYdi4qbiXngGZ7Lc4eoVYidm2ifuZ9Mh4X2fCnB4NbRNiNFeo",
  "key13": "66agDbaEGYycnUQd2otUcM3LoWnwriU41t7CYV3YgRtghsi3pngNKPU1ZCKjHWRGB8zRyHF2oLx9QqbJDMgjkXDV",
  "key14": "2FjMz5bYbUoQDeiKVCFoPJfzxErXEno9k8yQ1MdkKz7g4KTQczJzGyDSgNNZSRUAu2Bx2uU9daTXwvxZFTD5FKuu",
  "key15": "3KM7qyShENvuivBoSCKvFqpKoSXq3i268YVQkUnW7dCxMf7L16AUty3ULGLFjeDx66VgijFJPvsRyBLLfn7utTYF",
  "key16": "dLTn6hz6SPzi6jWrt9FUB2uuD1Qwqx7X25vsFVCEsY6xCg31QLHiLR8PzNSSy6RRKU9MsjybkDk6MAcJ9niw6Vo",
  "key17": "3wq5n8K5ZYTeNJpxnEibM2KbMgu6BnuYbu3AvfPMoccZL98nwwc8zkpuof9DSYP8yroe4MdcKzmBMp2D9FDFTYAr",
  "key18": "3UYeZN6JPaFapeqMCKGNiJFAgfRmVDzUh5EWzqh3WpdptdjZqe2g65ndR1HjQdvNZ4AgjL8J4BadRZZugPVJJWjF",
  "key19": "3w6YaR1qhS8kr2ThCx7Fdfq7covDzSwW5s5BT9w6kKmTJmTwZsdt79jiLQeKx8NzEjR5UoWq5nrahbrxcGnufKDN",
  "key20": "584TckTi4qT84DV89f9gWnBh2btVKH7F6FK6bkpmJfaxJtQUiEqW8JVfKDR4UsUgCEnnogryHVBDoAjo5U9BFJkp",
  "key21": "5hHkzDuwUi2Nmp5ZiUUzAeqyugGsQch2S7GaWb785rqnxgAdYqgPQz2jCmeKLoCMB6knmCuqHUPWExR17k8xZ4oW",
  "key22": "4tWJkCKA8duGJ6pk2zToz95eSaR1XXExeWsHbsQrwnLucPH1juJjmvvNEEPXnKqD9bfEKhQPA7LnWYJUgtREyfF7",
  "key23": "Km6pTowiL55eeyD2ut8brsY91ZtGi4qMNy8Z8LeKAjRvDH5KUNHh5vkpM4V3Wd5KPEadbMQZWfxZk36hQ6VQK6S",
  "key24": "4CLEo3tPoiJLrTXe4kQWtKv4Kn9QMeexKyvFqS3Mz7Do8K24iGqp1SKGMUkyjrdxWDSF63mYAM9iwYMWSWXe1EHD",
  "key25": "3mzpLL8DoM6soy2J3gRTJ28jqx6mmWPdMRTdzvf8sjyx4wVHHFHAPW5BwbNS5wVL5w3fEgkR3TbbpsUF5up11Rob",
  "key26": "49xjeQm3zG13KUeoSyj9LBKhJqUSHY6R8dRvnLHFe1YMEuydQRabnptMaD6v5fWFnnLfEHrKs7vKKKr6V4CGqFLv",
  "key27": "T22FfLFUnXsdbP6j4Aupn8PioSnrurwVjsLUL4zwHf2con56whemkU34EAHSJtGk8WKx9kN85bmgcZmYrRk6jTK",
  "key28": "6ygGdAcmAqnYUJVdrXfzQ1dcVPgK4XwqNaeD6zuzKZXjZL5pQA24S2toFqnSf8RFcnECn9VcDrL7DE8FizTkdwN",
  "key29": "MnuCv2q66LD4RUP9fCQoMEKgYqZUH6DYqEsgJN5rKGvpkc6DnwmixUNGX5caYWbPVNTY4jaPipvwdwe3TxCdvFg",
  "key30": "59oZZNok62gVBLYfBZooANTo3SNhKk3ssNgR8UPGUXqeMmmxUefi2p8YzMLmy4eBT74YCZcEwoSnXDQa1cUzSLqP",
  "key31": "2Lqr7yuTqvkQwhsH1VNqmKPvD1uoxtjsQiDzUPhk4PaMMD4mTModgdL7a5rjN5Qhpug6tRLhJHPe5kho2GdpJhZi",
  "key32": "3wHfa6GWoyrLiSBzqujh8FpYxpzosTEcnnRktfDP5GMGthS1Nh1qJkvxRUxEEQzwtBCA1k6hJcvCjvHphNBRzUzP",
  "key33": "aHQtffWeDQcB4LAkqGjHDttgEA27WUqajtxPDe6ejKuy37Q7Zr5t8oA9aVPF5seYigamLBwSL4T3T7gDVXKw8Zd",
  "key34": "4MLXm7kB1P12iUZM2EGekUeS8VB22w2wptcB8XfdVZkoKegDpG1Aitiu1dNcfCpssCYnCcw2o6866K46WbxWsrcG",
  "key35": "38UaoiXPAQyJk2LNyZDpm5czrJYkPWyp9iN9XcghzkZGPhmFTzH6uqsTm8fG181RBgjq1r3HmgTyM4nLBSBF5zm5",
  "key36": "4gUdvy1rkvrtCT9vU2nS98unBfBetYXunPNsNBNsLfbDGxRPaBNvSXAbYJ3zZJdBdZHpUAsiosVvKf3tU4BrSrpy",
  "key37": "42mjPYWuWeFkURMXf4Eq6ZAg2uHCbkZbH1b1hHRa8zk6L85po2JWjCVv9qWm5ukWdkvEtPkTH3t2YLVZ7urZVugs",
  "key38": "5s18jV4zsmnCQJuK87bY3UiApm7f31fHr7ewppF34WAx78Z9fjMfdCMN2tdFfcyMBwm8eZJtQ9wyjzGN8oxJS75b",
  "key39": "wPTzpe4AEddtZUXqKfSdB3jSAuF1qyWHNaTVYg5fGdFZt2CZNo4KZTnGj8tdd2oXAeTrJgKruw89qT3GM1pECxx",
  "key40": "2cXo6j7c8JRthBpFn9VQoPKTfCjFFDZ8ZW6UXieZufEchxHVjd4sRxYCbJx9EjiJFHbV9c3Jqed5ifPiYccFbzU6",
  "key41": "44XavT5gRx5M7PDB2v1RmUr6EvUc6goQaUBqgVSYR4eprEwZuTygQcEoEPVmfkuNPjtCXhsRxhyiAwiXSx62B4iv",
  "key42": "3gkQKmqi79upm3RfFnjAq4iZwgwvekdtGe5s9HP4F1PLDYXWEy1HqvhY37Ja7PwDR5ZRJFVQz69rsFctukj8ZEeE",
  "key43": "2MrsDSrrEawnHgMoLZMx7n6Eok4WNo3yzqrvmQLCyz8UqF9zDpDY8SpCUD3x84GFi6awZfWzBh3XceK8oY19gRJF"
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
