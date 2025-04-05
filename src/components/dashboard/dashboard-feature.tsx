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
    "Fg2iFMRDkBebe5UnEcRUE8bz9DQToQyXdaBhFicz9DPWKJVdFZFoJoo8UUwaCdgYUtRSesUKemeSSRHfiiKJ7WN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oHXQh8V9rpocgUwyUw6TnpZ9EUtmqqCL4GAf6nR24oNL8R5fUL4UbT8M24jwgEbTPnEqDKPb3zBuoR6WogVhfzd",
  "key1": "yaMSxygydxjSAvjDuwJeS8RHHe5umfjNjZnH9Ci8RcdeUPfsjX9JFfMfvEp4cKPAnaQgsakMyp3VCcYjBK5nYuf",
  "key2": "JhfXw1KVwTbp6bypTpmzT8DB65ngXQEmyZYBAgvYkSS1Kw6FPLs8dEDwY39idkoASL88NExqfUkTYRu6YKP2oiH",
  "key3": "2raB5xQbP5tpSg4RZZDk8jmC5Q8uXViL3WYxjf4XG4AhCtvQRNSHu4gK8DCCDnEg2NZ5jtwkHW4biBQ113VTxrqB",
  "key4": "JwQFNLDnhp4SodaLNGxe25otBzp8ugJMA72tXnsD4Xhb1jpNKc5annXBryEzJxsAeuZDqo7syr62SbynxtUQMgR",
  "key5": "LQWKP4b7u3q2jc1e1xgQorHCfv4U72C5p1xv1Y7nVbEK9tyxMGKbgjR8PQnfpRFwNSqRvi7178uKxMDvmnJwiSe",
  "key6": "4n54sgLHF1RS1EBNBv2rvdFCRt6kfKvZtkyozEDXJuZ3jrS37c86ofuriMYE3ZzhnSiK6R8vAHb6PmdhD4d71idi",
  "key7": "3XCUh77Fx2iFZUWg29okP438aDBQEj1tJrCfTUSGcPEHXBVsyC6xE69y5z4faLRxa37N7RUJ9CYYe45HFvfAj8hm",
  "key8": "4FV2TcPSxbXDDddSJVYMWBBecGG9C1djCsiGAuoTm93kCxkShLQodUqaj2WECqx2HDmi9r3kjDfScYTXgHJiXMKm",
  "key9": "64FutmPyeLQCNhG23ExRuCYSLiGvRCizBDzRA4t1F6QXtm8n5r8N1UGcL7Dh8vMtHa3FgUi2g7bAbs5LzK7vbDnp",
  "key10": "2jCMeG2NphjFdA7kthPF2Avrh4q2u5cY3xNvDxPBcVPXkNwQ8juJ5TyL36HgQxo5mtCqDxZNizpEXgKy4CZCGEQi",
  "key11": "39xMv7GPfwWjHneFWjpaNgQZX8JiyMnRk817wYkKtf1Qa7nNDd6DXFPTr41CQDUmbbCopgteqcHuTU4Jvo41TggL",
  "key12": "aCqpkZcwaqzgWQXtTXDP8wgpdNdYBh7rhAa2QYAJa6nvoLpN6657Gya5cFLWmF1WyAg9F1vFhbY7d37c5TKnYg1",
  "key13": "duWxYeugQC2hrkVeLMAz48Xj7n6VGFaR4qCgMu2t3XpGcwUdVi857iPLSVNsPJeuXs3wpVpEC4kAvhY7sTdKSxg",
  "key14": "T2Nsf6qGNGqNkR7oHwwB5niXT2JRSRUm49obF8RX3ubphVvCdPh6BFx1nKjQQ7Qudun8Dzu7BgcRTps7Wf7Ht9F",
  "key15": "Q1uX33u9KNxtB4r4W3V8ukyzCL9HnGAUJsdupNS1o3U7qJ7AyJSdA53b8h9bmkS8xA6kKtQgEf22cFYLugaa85D",
  "key16": "yLg5GJsb6i2rvjMcu3MAyncKBCVv5NQZBTQ2t96RYhbgh4TSJL3ZVQK6ns7kmJUGDdGB9HzbCmoM2UTcsxSaq7e",
  "key17": "5qXNC83aUbfyKmBQwLu8a6jSMQ1e8YjpkF8r53hPcz89e7HqbXeR56mFPehYBMVwFjhuKdi2XgDico3EVH7etvyU",
  "key18": "5nvsAAadWbPQ4yVCP3YMA7MCkqJsXi9RjTXVxGfruGbwP31AjfQStjqFEui8st9qf4A82aEekKYFrmT7MuBbGmzV",
  "key19": "6Ta4gb71AyCQyVfK4xej6g5ztFUkq528cXhgzgTm39yyHhQ2TfcQn9XCaZjUbSCk8w5Q2L8tmxT2k6xchaEVa44",
  "key20": "TfgrsW3go9FRzvrK7MeuReDyTH7oyBmbFJQFx5NE2eE82cBEeb2h6tchiPGTy1n1kCrysGnveJ8v9dSvudJYcTj",
  "key21": "4H7dahrC1cJ3aEBh1PL1rnM6sTmpmCcMGTiRCNLsdjWVHcYqR9QChUh9whS4u9zuxvGqHjeHoFHVBwCggQFmjaUn",
  "key22": "4rsXPv7ms3QmDG7Chc9wR7MQmxynYUCLY7TgoS98Y45vZphxYKynLiRA9FDDCTHwee9SYCQ7gKRFc2zvVfhCo2ca",
  "key23": "5vMLUpZ2hRW14mCQrqec3wYsUQhLM3op2aWvbTFSWhKRMqRYCqUHr5PLBsXJt7tQAuE2SZqypWoU8f22KabnmYnr",
  "key24": "3qs7DoC5yuURuKKuQgmquVE4tMWtNGypafRAfDtx23hBrvJBtXCkNXfox97nZEza83j8Cdj7s5RAbTDL4widSESE",
  "key25": "37u13CfxnaDFbpHC82RQK4htKsSFDsUixP1Mm4ZutGE3SF6ZZxWfLyJPqgAHpWagX4bRmeba5aRbNz3P7S8tNTpv",
  "key26": "vqJ3ujKckoYMUudxukJWqSTdNuWMBdhMy1JtjCGambaRMTPTg2Yh5yK2QnTnsSupodV3YozFrS4vXaWg5YAu96A",
  "key27": "2RCtfj8kQ3jMdUUgPmeLtxh269h3YkyoPmL9S57oHueok59V9uX4DjXaxpC6gs9Tr2giX5ExrQez2eLd3JCiD5Lz"
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
