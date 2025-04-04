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
    "5LRULKAT7Y6dgW1JGU2CNRT9293qw8uSmvi1j1FbbYGdWhbrgKX1iyC5rUcCw65k3YziCVsmDeLF41g9ycNrK8eJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DXbrJ3kzSsk1y6C8EaFfPZbgp9BvwDhmw4ptnWQ6g2KJfC4tfizL1JDgDWkPep4wSLQcg6hEuFuAYLaH91dRw3f",
  "key1": "2qV4u43MDor44iLznNtDWRyUoiZUszFyWMQ5UbLfPQgwq5j2gatnMw9k46wAitGUEGWUmbSNDRACrqZ9hZpiuAWe",
  "key2": "C5RugBfBAuNUmdjQSoyPXDBHz1bp43LnfxsS4nExYjeERriTLo9HXC6E1i4CTS8fQL9JL8s8SQ9yAsojPwRQndA",
  "key3": "9v5ZcgUutY2VDufnFTAqWYjtgtEYLSmseR3a5maTjyQDYnUqBGHM1jUSJ9F66dYhHBpFWbWkhEXewnKtkexXf55",
  "key4": "2GuXymjn8LeEYioULDSP3nNufnhs1jtuo11MRCzGdmXQnrnUme12ZREYh423Cxrr6cWPbbX8J7B5tUrbXKRHAaJf",
  "key5": "36RGhWuJQVLgEuWS2cCFXFfxrey3X1pZQ5oY5rD96R4r9dTx7eGS5uAwUa7J9rdrJk3TmeGS9AWonZVptRusf2wQ",
  "key6": "3ZokZgoCpGUu9cemhEtjcpPCSf9sJoet6fLGHDh7TagMAKjTbqxapxaYy3nZouuTK8fsXFCGsBEN8q9qxDxfM6tP",
  "key7": "3Wd5fkgYJW1pDewWa46CppSCwG67XMq9zMcq4QZ7HFJp174E7HEPjej5VcXXPEq4dP1jzAVp5dbcj55rMbi3vbtx",
  "key8": "R35fudqq9vLciT4rXNKWyHrf5qGrZFhjivZUg17vVnFAfsUFaweT1ZjtB3t6tJhpFhVbazZJByNQvmncFRhTyyZ",
  "key9": "YM1rH9h6N9ewTvCQb3RHriC23KXAetci9MfLEgBCjDoDazVYrakepo7k9XEGSBjJbHzvv4ojNLtXnQDR3C93Cpz",
  "key10": "66yYiqbXbDwz5FLH6KaFFGniP9UgfVNp8A65DZinaw8ZsqBw1k3kdSz7C5LhhaQ4niXW12pyx1WLPhyzB7A8jejW",
  "key11": "ng6WtPX5BxyVQ3ccaReW3hvZjXDDt32Lqy2yiqozzCQ2oEGURNBvNpHQKN9y3qanmTjVZdFA2AaQZa6aBA9Ynxs",
  "key12": "5RnDvLgvU6273cuRS6RPzW6X9iFqi9y4nwto8MP1pP9u384jFtr8fLbZggFuYhkFKEaajNqKcuag4YJN5pX5ixfL",
  "key13": "5daQWKLL1ZAjQqCt6aBADF8QXSwPgdjhLCkPoXtskWYWBcRW6e6eq3tQdRFCwzJC255HR5mH9ofZuKJUgP7QKpCY",
  "key14": "3GRDB1m65PTDz3v6ZyiXWEQpJxGo4HiB7CTRjWkbprgswA6zJT4Fck4nvR9iVgkqiebnWuDhrBBkTf3AW8UJmnD7",
  "key15": "i2Mo1y1AicevuZtwp1Kd5YvXFYrTj28XM65ohPY6bk6W6aXuTBn2BEXMNvNX5F4LTPu6bxEgEwZ9XVDyRxhxPFP",
  "key16": "3hBhZFXw4wXRUefWJsH3sWuQdkRCnbg55VntSY3fgct6BDuvaBsJw65i1bmtbVdbhbPR1mAAzpLopPuxps7RhjYn",
  "key17": "2giGnrrNs9zywBbjuUwokwuvKa3KSpWVPvdPb8B8bo92fiqPTTSgzv72fwgHLs26k9xNCrkofxww3wUNEL63u4C8",
  "key18": "67Toq6Nq5H9ENjc1regPHwnjCA67znhLfJr9NAYFerSV3k75PaQr4RSDxGGuNTrM5Xg7DTkSyLxrQWJwKXbqYysR",
  "key19": "4AjpQo241CKVWwhXWWR5j8hZLFcvogjPmiKyknagDFbzpixJNpNmfqqxJmeJYruacpxb5RcRLcghCxgBBdcfr1uW",
  "key20": "3BpcDRZx7QPUUyLp7uj9Wy7X5Sy2XK91sY1A3rfoiApckikrex5o3hCbEftuSoSP7x3qqwV328757bapN2ckJxwb",
  "key21": "23nvoXSgrCgSo1ooLcENsDBNYWTrETSVuQGSSGEVka1suLLuCDQnKSKbUjWR8Tx8Y8pAtb7L7EwcJzDobiomh1YM",
  "key22": "4XRy5zwxRgSyEY2GwnsEEVbmnE7sGEYPD4RW7jx8rphPPGC99JQ8ZuqfTUuQasysQ8b1EmJfo7NB8vxTZA3sRpne",
  "key23": "29qkSKPN1FYNTN2BdSSEk4PpnR129akCGCy4roxcSy2KLacZQw4H9ZTfYS8SyMxQ7fNMfxGX3KH9v5RBLMjpzMAE",
  "key24": "41yZyHqybJbWS9FnJazWQ7Yqz95d327kK5J8QvF4sp7SUpnhVzXUcm46A9LykBLbQYGwR3MUeVjPLLeXacWWgC2R",
  "key25": "3XdoYWMRNjaBhcfJzVxM8ND6ciLmUBkQuWYGAXpe1mW9HP1drrFLPnRbJrJmR8n8LnnBXEEtX3oax23vmjpyX5Me",
  "key26": "fjc84JFDYkwFHnSTXb2wewbVztF35KdB1DAib76Uh5GyW2k1tzPvsWNdz9j4N7DtawF2xvuNQM1xuz2VtQAWkUZ",
  "key27": "5SZ75ZmQvY4PZr4KWh3Gpfa47Ef7DyeuW68SZGWS439CPHaAfSGZACTJWHpG7d7p6f27bQD5k8kRRuEuL194PCoh",
  "key28": "3VffjZWi6TnGRh1eXhggJYiZUo4MCFngGaDK95wVJSKcyMRF8Pj7kVucKrn28t58u3J3QUuWfJQnohLiVCcPzrqR",
  "key29": "5nQhyqpbe32ct5peKvAkh16BK3LQbq9uex2VCzTxM3bRcCqFBwdtRP1FNPeuxY34mhh9rEKD5gbAeisPr3YYFPzb",
  "key30": "5xPZGzTk2uaMA7Z1QTrbTZ1rxWHYgYZ2sSyoJghdspzppKnKvvp77TgoidUhaD2X6Ubhsc8bmhEqz4sY1Goe8sVZ",
  "key31": "2tbyA8cy9cdkegKwE8MDR1LitJ7Y6D46ECH9zZ9ffS44Qbjdaykjab1Pfy7bnDLLVNVfPn28yzQgZ13qhDGTUQq4",
  "key32": "VQ5cRs6gHqqQVkWzsSUj5kSkLEnpfAPLWRPhZRPP9NWt9YhGmPDpoGdgpgmc6JVRKbegEYnGv4LQDoNUZBmFtbP",
  "key33": "2244sst9NRhaLLkgyDEcfMSS2BJfgQ7UenakFSXvWNKGJCPDFmpT8TAfof61NMpZ1s1vyH6pppq6ySmcPxS7vSTs"
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
