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
    "55YvtVvYHa2So5HYMHGvZ7B2fSTXCzcZJ5VWN2P4bWCfSHztfVB3rbk4pkdjXAwpGTk29dpSB3k8cRx5P4ZwKDHY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ns2syLspJUCPsxtq9RDW8UXxHp9S1rqoT7S9vkaHwjtRjYMuy4Qz1t15z78om11YWgEJhcHLcNAp7DkCNpsgsSn",
  "key1": "62v4EUsRwpG13s3hutdTB1RwNyUpLmtKzp5nHjewMrpJgS28XEmtGz7pUW3CtmNhHrSjWdokMBZ3aW6AVmr9PRrN",
  "key2": "5QLRB8UM4zTYEhGZUgt3CTKJXjVfZFqhmHNzr96TNipvUHkR1MDapiPeLhikciKyRjCfzXqnRYBPZ5FxJxhtmrMr",
  "key3": "YYRW7wEZP2PkxFVY1WPQwmHnYsto5cLJMMJeQ2UNcEoqhMgMwo96pqZosnkNHPr2GFpPhVgfwbb4BnDKLYcn7pD",
  "key4": "nfYBTm3qPaPqcpUatRAb6hdC7W32HTwwTpGfj6AeP9xa3qaWpXbhhEPReUi2SLmPC9a77ZJPdaRZtAGPXMTfiLX",
  "key5": "2kL8UgYfhPYYLwGPJSNtQZwpFEmSWS9NFndAujWzdeSmzmHVwtFfw6z8whzKWnMK9meqeJ93izB2f4eSKaQtRKw2",
  "key6": "Ks363ZGUxdac5uhyzD6VDUnPPkCk85SExiYroCLPNuMMrdXnL8vZybgRobBoFmDhYhyqQSz9aDX31w41L2tbSS5",
  "key7": "D9rhqLqVA1Hmdw2987rWbUCFtmuK1NaLRpGFyWiqQzUnG9HK5wRxda38W3qGyF16vMTcLRKeiQJwg1XtphwXU8F",
  "key8": "4L6WdMxyosVjP8yGLMsUHwDiQDUgrKqJcCUU8vaEu6ANysXLyF8HSHvt4E3dxD95s38LSMtQDuNxpUoMPWKKXax3",
  "key9": "4r3aYJP6NZ6HWAbhaDG1rqgM3qQG5EXBxXZh39LGX7su66sTgypLpwsbTeNLCBQcurCHCs5PgY7qX3VZs739o7x7",
  "key10": "3D1vxnmmW19zKkcXsXGZgFKuaN2H1thosK2nnCKAYTpJrG8MKXTQfZXpP5L2wkgGxvTVAugVHJmCi4tj9xgB4GrG",
  "key11": "3Z4ttkv3dhD9oQqcuiKBK2UhMW5HwdqHfifmcakmytxRk2Jo8K3Qpp5zFT6XJSw3hRBSWPoo6aiSs4ze5wFie6Tq",
  "key12": "2KuPfkAWWcFgVMnoMHrFjYvqdpzXahnK3NTN6JBxvq5HqHeQUyGrdbUWtpLANPGR8n6NAeU3vRKwrdbMYqiXjEi3",
  "key13": "4QKym6UvGwwzFJ8qE6KEjanWS1V1YhmkA4Q8ivrN2shPyE1KpMZtvHk7vf8ACebi5mvYCkKHGqw9XgwtEBKvngPV",
  "key14": "2pLM1sBZswFGVzfbdkcCV32EEizpWBXS5BuKVP997qujSbWtvhLuWyeASRHaqjhXVGVhSCkvU46MscFPRroxbRHs",
  "key15": "3xDuZ76jALFqDXsfo62d7DNzwsxwTkQTuaesVtHUhFnVw5nnaSTGpYAywJy46j35WxoWDZm47vTKUjcD4wxfqJKV",
  "key16": "2asL2A467HNfUgCuJkEiWexAmh3uTz9KE7Pg8AW8iPeYCbxipV6YphRbWuezDtZCqHWsmv7PuEdsWUHWTmTprdUG",
  "key17": "Y8Cnnx88XxvAanBLR7gvdVbmrRK3edgFhcrvJP5yYSTUu7GXPzbpZ5BDceCUwi4dJ6KkE4VfKJytoXnEjWe2nBH",
  "key18": "42zrYQp8YT8pwo7VSGpdz8A4EAeg4sYpCVt3hsP2usoBgtXkJcmjADwqnW7VyhzaRFSLjmfRwDaTAPWWY8QsT2Y5",
  "key19": "34p3igvD1SpvLKkA4Py9hLAPSGPG5KfCZR1XbBvnPG1BSMUZunbgsfaSDDNoWzjgWobE3yobkYJA3yhzugtUqrwQ",
  "key20": "4QvvWxoLPUi88tDk9AwmGkJgQJYCHRtBMjXK5Bx6CCzs4WeXuyAcH7JqXCMaonTZG6njfYpnLvBKGsQHBPw1N9Vd",
  "key21": "rHf9Hoa4j6zx8SAfzTmnzQG3645uLqanMzJwsu5LdCMVSbiWEuN7XMVfahEANqsEUgkcLcRc4ATCC2Jee51bMbu",
  "key22": "3EMAP41wyRiVAHAzubCKDCU7bGx9C9ksHa5MhnEt7iT4beKsTTXAFNwvD4Bp1Zm9gwpqrYChRup1APpSKRLjxTYK",
  "key23": "2ZbEDR3F2HTEPoSmLXyXLfFexfJuw6t9dE9J9T4mPij1hWb8JL3SJYZPefvBtzK6DVmpoefh771Zs8ARneV7s8jK",
  "key24": "5hK2LugGa7eFhE8AQZNZ4eDcPdTpNfqwRi8RNBL2e7GAu5cXaaY1WKLFCy8NRFe76tsc2GH8Wr7iaj9Ym6E769rS",
  "key25": "3RPAfW9pWpXwjWLdVqDayLc5nPKkbCKpCie2tBAiVehMoe6vAPU4vXU7ZBfzinjaMvvT3j6yujXmd46kP9VmNxur",
  "key26": "5BLuodj4ctmqrckYoYQ9GnKy71RC5ZDM3y13YTt57VCAFoP2Zf1dsn1Fsu6ZiVU6yXUUrbcf3Y4DTUGCQZu7WNAQ",
  "key27": "4CL7wddSyivwsAbpzRBKKB3DxWaUr9sGHpLaA9dD2HhKUCqsRggssUMNUmjDh93TioomR1BsgegWh6BohQv3wsLG",
  "key28": "63i3wjGddfy9NfwTHB7hvaQyywJFYeWS5j1MxBbM4aC2dnGxbsHt12UVhRzPNhYA5syFFk82WcABKFJzmhzzdktK",
  "key29": "3jk1KGfmSP9G7nkSuMSN2xcnSiuLdwg4TEkZXGBns5a1iQdzjxX2CsWU4cKNzmPZXTo8JgMWC3jbdw7jVqN7GkU2",
  "key30": "5UnWAUz1rME5mfdA6A9VXP7J3qguAZVXscNP8Gurju9EoVzVHJosNg4hRuD8Akuzx3BXcVera4r4fdpkNebqNo2J",
  "key31": "4Qjw2riTmZXRHZYLTS8qY8bdP3gzXaDWUEWcbatiusbdWiLonmD17rCnHE5rRGfaQgjzzbvbbzzvifGMsW1VVX9H",
  "key32": "2De9ZUrvc43TzRNfiq9iBCKv2F9WgdUnLW7ihXvzFyRdYnptkCsC77z6DsLqNyR2wYW3UAJwXpjAAxRcjKsUsJes",
  "key33": "24fhqhgX5V6LTgChm4Zf5GNthd4Qfohv2yAr2nAmKS6SsBeVmawrF4Wkz1QX6PrGozTkH7bp5vmkMZgYQeecuiSq",
  "key34": "5R3TXj6gjCiMxFUixJdzRreJA6m3vRwfvN56Aj7G6ZCDFKe3u8bGUGwryBn3BqXVDnmQovd4r6uUc5EGXfGkgeoE",
  "key35": "4g9n7xYCmk6EsHcugGdunBtQ1qv8zbr4472mtDCtbJEWdYXq7ummMisTy2TXiRMj2BSSpitG4TMgaVg51sfAZ3Hq",
  "key36": "2vXdZ6yBTpXQnpayRpFoCuzeu6hYVRJsVxmcg5ZPLXnqeHMEABTKVTeHnjMWzYYB9ZDyZckwqK2eLoo2a6FMh7L6"
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
