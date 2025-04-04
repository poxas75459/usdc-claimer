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
    "2NnY8uS26Zft4iUNTXNrN2LBbjfsoMEGqJ1TcMr9pkmg5QmayHBHTM3r2SSdV3givep4nuua3JM8N9QMEvHF5HHt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54QEAtMrJY8umSi8J2aSVU2UAFCRUfnNS7B32X5XDKmBiDscsUVXeUhKLrXiwvSipdJsfbAbFUE479noWNSXr85E",
  "key1": "3fqYPSXEUrojjLsqLEFcFg2awvk5M4sjgdqsm5ois6MVcCibK4f92vQqCTBamTKBYTAPnMYbt1xqobTA3uYtqvrF",
  "key2": "4MjJXG99fqCXqTk5tbDsMGdTNeqTyYyBF1ZzYYVoxYEt9GjrPdZaED25HLg6MwitctrSuKP8RtgduRsh5fHqau6o",
  "key3": "5KNkQAPZiDsatvVmhKpuLYEmogo8MP3QxZabKD5Ho7R8m72EmWkWyn4hBntEUfb39e9GEEqb9G1QTPbA2NJwc3Py",
  "key4": "49gPgx9hszqG8xuEMar3pFm2p7g8bmVBh8UNe615UY64zK9DcktppjcPzACxsJW4mP3rsDUUbpDiZ8eBhCx2StW9",
  "key5": "9Z1wUyK3ets3XFpjz8wn3WPHGJir8XdU1C1TPxgUFNWLRycXNWjn3fNZj5UjphZ63biUPVYceh3VWSYC5QuXFRr",
  "key6": "DxwBgHg9mFK9EsifDy62NH1ESm7tt1WiBGY9jEx38HN37RfN5vnd9oX4tf4DW9vLbpPPYw24aX4LAMg62Lnpa8h",
  "key7": "4A15EKnadSF7Mk752yd8xXpRt6ugEQ5SEWendv8NiHnpGSzXKhYUsCVEYCMGBbkRSW4kJg3N7ZU7rNzvdpF3YuTv",
  "key8": "2bsDTnfSMwbDVEhrnKwCeoChb6vugYpDwGe4gFuEmmFU9WdwpE7H2wSZ2N4bzrA9pZAMNGuw1v52Wywi7LA11YKJ",
  "key9": "4J4BexGQ1oMULhdgxDL99t5nAT8jhPpkJvCEjMyHCPgAcfHCDF9dMU9c2BwcgcAta2LXbBjhRW7Vuo7D2Y7edSTA",
  "key10": "65M7LuefwRZGc4svMWZkCFH1YyWpvTj5QGH3rT2F9R7tUtCMBrQr4YjzsQqUF4Zi1Nj8e4BjBXE7BR5eKiPXsF9P",
  "key11": "3EwSae4PgDuPhnNVcp6LtGFSAWkZkoasaSQcsvL1tagE25v1FLJuryvir9PTHThiXtEnfZDJXZgwFHY1ySD471rx",
  "key12": "ik5j9S9zujDqyZBbB1mSxVgXkBcRRmdFG1vLsUyYRe9tnjzNFoXUcJhWxf3R7tyMnsGsbHNdjVTyWyPgz6smcyE",
  "key13": "39wJ5Pdp6Ucz3xKRX2iA1E5bJds6Hdo7Ct2Me5SwRJ6jMoG9rekAjZYUzgXBeSSUp9VU4H2WswKkwQLK6WgRMgyc",
  "key14": "4z8RsjWunamgyN7NuaaGztdYzpGK4C422JebopVi7BFKfpLbpGUzVPnCqzKqBsYWjqN5nM3b7qwAhBLfmyuANeFV",
  "key15": "qDrF1XdtdTQjtP8Q2fDkG92LsDG5C8AbEEi79XTZoqpck87XDnK8nzL7YJgnmUQtxWkig7z4SNWcxz6rjMrPaYd",
  "key16": "5NxBLadfnZEydxGiC7ctP17pJiJzjm5hDEtkN5LjXJXMk7qeJeB1wwWWHrrxpFYRUo7HuSsyG9rhgsU4KZEb1Hjz",
  "key17": "j9fndE9coms7cFeU7592K4L2rstU4WVJTQm2U6yxxxzb1eELJGrWCWyJ5DSqybYet7sSEpuJYorF52UyjT77YW3",
  "key18": "2bbkZx5vXdyLGrpYHqyofwrSVUTv57ijJhQgjJ4xphY5jubJE8ZCZWpt6TZZWQ22Rn9Q3naPQxcrCnTbXVzrP6jQ",
  "key19": "3jcqXTJLSxQVyKR7URgsu11S94UtyPL26tLMHj8yaPUTbeq3Y2EX9UsMeZ1oY68MTGww5QsxvomtSq9BVhHvACGk",
  "key20": "2EtmLEtPJcWuwesD3oyyeXxfr5DxuXqkq1tiqdhV2nrmj4xjqx85pGjhzc5qax7DRhR38Ng1YkznCrwonKRFkS5G",
  "key21": "i3qtnaVbCivYTnrZmDfd4TEkCC28x4Cy8Q9ie2m4tCfkN19cGFo7vWmfqNHxi6mFJrH5EaiAgxbbdV8K2ZF5dBJ",
  "key22": "289UkTuA3nepbBNf3vYGKA6jomkB9cGidRT9yMDJAos6NCzkYwJ9H17jj3z1U6Nx1MCU3JHUNzNdGmZDouEqio98",
  "key23": "H2y2yJgcJieAdqfwSAS18ZEMrV414KMEEcGzN9iSH4gshKrqgLXWEku8UePvL5DYrUqgUvTygsyoWjM1oHLny33",
  "key24": "3EQQQrwpXQXjNyEpS4AUURiayoEcgnBbU92EYKXxVS8LzMZLHuJJTeXhpoxzBTom8xLRK7X6S8HyCAddcMp6mB35",
  "key25": "3dz2rPyXyer6TAUyYEuLVMP4Ywfua9YtdCZsD4k3uQAxDLBBfZDtfdrfnQjacwsJiK3GzGz4vpALtYqpc9w8pDFm",
  "key26": "5soTXnHsYpBTm45uWog7DfyShMzkiNqyfd2vT3bJ8a2HABFttRLB2yVm8QLmeY8z28AnhcCHstVJHM9ekbEUbstk",
  "key27": "5YWT1A9dbnWjcadN3ALmGv4i4MWo2eSW35iPpPmH8PhuVBxu6mkYAjDMT66Z57JxiKZEauguZZsMPj1BU9cdUWgw",
  "key28": "3sEcY4WEMEYZ5rmm9JJ9SWW86RdRXGp6zvtnNN8HWiyNr8AaKtGSXQLtiiRttuwiYc3KkL2PdKw1Poor7sZFGCoz",
  "key29": "3DJQKnRf3ebPacxRButihSEo5YduJbc15JJxaNttV5yzWF3cMsZCa4in3oetcaVWZYbo61axKovSgywr9rYZ2Np",
  "key30": "2hk8JKrMcwZ9ts77UWQ9y2nUGEVe8gHGbyNZ7dGQ21XAN68u5G3zAf9P4joaLMsBLgLKdtb7sBPeYMMLf5R1Gn8Y",
  "key31": "4w8oBnqY2jYf99AGKZbQUC8bfFUjXru3agASCkSnhtAQ1Moeg46GjvMzoa7SqCfSCSF15X7y4SG4LRAxSbJcUgQ5",
  "key32": "458HfRaqXBzw9rnX4jFiD5hPEJAuPiPRXFHzbp2i1gmcPH8izKif8ZgydyXsNUH6cQiExVGdPmFu4qBrr3gipLnc",
  "key33": "4NhzAxKyoeb1vihFjosEmP3zh71TNJx8sjB1gXhBeG7Ka3gjogerWC4TG1ho2gkboaNfKug4K4vKKkdmTVJLoYBc",
  "key34": "39HmnR9eqb5io2ghr8v6UZr9TEgeTpCJgR4iJ5EhcPh1wX2K5FouagEu8n2iGV7cdtHgQxPx9KxjfNtm5dNhgzwd",
  "key35": "2kzVxSCHEnd7pz8oLT5LWy3AQx9RaAkkcZWYzqdg5qzFybUnTJ8iFmiNB96GHAECLzwHj3e73w51bGWe9euZ8P73",
  "key36": "5NNvJDHwyDQy7jtTTYy3YRdbnF1oNAKz7WsK8j4pK35P5XKP7Kj1JBX4z5pmTTF6e2NR4CxK8sLYDK416VWofJgd",
  "key37": "3nVvRKU4fXr2wERBCx1hMkMshN68esPXmVf58QEPkjPvTHii2Wa9WTWbFfWxmFqF9CzwNRBp65E2upzC3qaZtaMX",
  "key38": "5NKv6sxwjm6zb7BHN1W8k6cszsMpPgPnfyavS1uwxZNK2aLB3xPhjm1v7VJTg1EF3HgHXFtKYNfdttj9MdhYozZ5",
  "key39": "2QHCaSUZdced4a4bjDg9NfHyJ41xsXqJda1D9SbUnoi1nAMBJCpDcLB9u3w5TBsnQsDFS4m9jeNFNdcfeBN8rDu",
  "key40": "4RZvS6hKpSPcApjLevUBrEvn3aFnyuq9xLof95q41ysZ5PykXMi42WTZXBi1i4D6CGrphymhVWt5wiFZooB2aDye",
  "key41": "4Su2wpe3uSfzNDJRaQtiLVuJzT6dWe1RJJRm9oeLkDa1nrRUSC59CwMzHbxhn5tCMgKjLuTFqPTytR8Ek3aqZHyQ",
  "key42": "5V2KrdDWyMGzrRxwh4PDTJ97gUNDXMSAB8nEcR9hRkwipnnCRx2n4FUU8QqaVd8cJF5zBaSrsSGX7UWXwWsXndGz",
  "key43": "5XWRKmyGdRk9swXCt2rJ4bMukrczE1r5TXs8s7TNBkexrLpQjDvTcBWD1u1WC5gdxKfMkE24X6tKsmriyzJ2ascq"
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
