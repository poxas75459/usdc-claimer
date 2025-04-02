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
    "2bcmXvUiBXwZghWeruRCh973hMHE4NA8wbXJ7E9SPca1b8h8GEgoMtzvFdv41tvJQcSuxTPHNMwvwdUrXxuHMnWk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F3JFHiiPh4tk933nQVWTx6MY6NwckTNQqFwHyqyXpuCUiCgEwdEhb8p7fqYjqaT4nfyvyHMPCvixcVHuqfUPTQs",
  "key1": "sRzhHiLMPQUG7Vr8mzsnP2yqxp8orgEyk8skHwBpLVtt3egmGycKeFZbftUpC2YwLehAt528GtGCwrV3wCedKR8",
  "key2": "4jGzLNF8k99E5pZj856TwhkytBnfFA15nUgt8cvTZmqR9LCytyNH7LNkj4HS6eZVbtz9e9gRxjLcVXbbiynKGZg2",
  "key3": "3qNu1XdLM3UUjDe411qZ1GchuQGwVQhcaYPkZ7RvWsuC51H2HPPHGNUCsjZER6iLHrK1ZdVxFK9s2TJTF2uZi4Ct",
  "key4": "3m2r2rATAHwMgAKhLT7F5XoQ3KKqBRdSADpcCZQZy8w2vo3mdo7rmm3uLL4N7HtRLQi47iHAbs9niJNYMivPr34Q",
  "key5": "65cfWwSsFDQu4uMrmx7u73f5RBRt3kznTnWPLGZ8Qyky57uXmmFMnky2xdDzo2dqudXMtVPaDM2EZH34VGtVwMKq",
  "key6": "2fzmJcb9VMVNWYaC1VnZh2tbyFPeiHNHV6fEXqDuhYrZCFoefb16NLaUGDH5a1WLFY7njN3h65cZ9P1YeXzEvjny",
  "key7": "Lw1j1xDzHPFo71tCtKeswDJFwZNBdYs44Zo8xjDug8YUHp4rfphHpk2T7z1JX7vj4hS5eoQbxWHPjMmMjpRWMCJ",
  "key8": "27uWYZPEMkNLdzSfEEQTYYqsShqy24ZKbvmExDEtiAUVcwpbJaMJFB4mv8mh8VK1dm5hn1KM8omv4hwiKp5dMtsP",
  "key9": "3WvKQZiPznFhy1Qd1xFTra7Nw6mpdKpzaBvELWAL9avemf4THMU1PWJPSF5LB6NXj59EDRXdk9p8fxhoCaUsanvQ",
  "key10": "3yFa5msLnjdc37qvL4N5oPHJ9M6GgqKRgJi6o7htFCZKs755GUtHs7z9oDPwnvafrmMNStToRAsbmEMTdjDrVtwG",
  "key11": "4jgcmcWHAVknBnRGjqp1jVPV6qjaucDtfq6cE29EamF1DSNqw4r36uTyRBHQLpkea4uKBrXGU8PqFGwN9T7Vw1ai",
  "key12": "2RNMLLfyevvGyibMvwzu4N54Usz5Dn5PTyeX7LbH1mMYPqgcRE4jkZE4NfaTmackxV9N1FTsTC7U3TQDQ2rPEsB7",
  "key13": "4LF9GAZdjZFNvoxQwuaVov1oBrb3vGdcDLFNeTVdZwrPz63yUscErkfxDXCf3p72jjf8JfzugR2XavfutVan1QhB",
  "key14": "5TcBJQhQwMtSEMSjBGTJ1vEeHUkGDHa5RzsdYFy7kj4bBHCk3QYGqFhBfXUaZ4MMN5fwNN33p7wvkAJLAvjjpKyo",
  "key15": "5tjFTJVFhLmaoWSRsx8AnXBQpL3DnQPNmUEWBNNdkcGhcHA51Bp6RwJrFLqresbU57LgoNmevx8MuM23zekDLdhS",
  "key16": "3WDDMKLXqzC3dmx3o1LvAeWoP3Xv58Mj9iFrnmYxuRr3pV8Eh7QwuHHiXS4kHTophqUDjNUtuAiSmYE4Sg6eK4sx",
  "key17": "2yyTQEPHAoD6SfszcHKYcUcPfAQDtew6Kpzf4KqgGd9nNVRKetuTDNCgPL788g9FpvtYuEwvXzWqW1q6q4Zq91kD",
  "key18": "Jy7fvmhZWfjYgWC2obJDN5Tg9TPkoxLqiX1d5BBDUWcsCWcPLKdNdAJt2crndS9bEu8Pe5b9QtU9F1RzxTncWSL",
  "key19": "pUeXWrGG4TSYNCxdaKrrKzy3gibgfEzyHGxwPHwVKbvReCLpTNPts7nDp6hamDVfcNUYoLwChfeqgU2yyFhCNqM",
  "key20": "2rgeFV397rU6PvkYeT68qe651fSUuXVwyYEukNxovPH9zfv86DowLAqgciBgAL7FEF1oHxqek3Hj1YGjX2HnCgvk",
  "key21": "5fsvchCRgPcWoj1ZJhiUVWWfiU2CDY5kcEhMdBYxXkbFoABy7Gh271CYa988RfYsVAQFR69XLWttdubtcvrYW6KH",
  "key22": "2NvXbwVabLXrTooCTxgzUTiLJSr84wLSVjbGZXJDQihnTQjehwpm8WqXGMeVzAXDdda7Soa6diCVjnpM19ZfxKMK",
  "key23": "4VGEjthhmfgh6YBG3SDM9KCMnapqgYX6mYiXJ6BnZJGHEzvGoxNW3Z7ZGUdfPxS8AXwB5x18PZV7HrkNHuXPYJCL",
  "key24": "45y3Uw7xpiRrzPcXuzGHryFcByD7sUr6j2ZPu4UXWeuCzrojTix8FSd9oGDFwogRq9cvrprx1Vab3yfMJBDUw3jP",
  "key25": "QcgBhpyYDfNsipWD8V62brDnQxfkHZQZaHUbUSwrZZGCy4EcTzGJczkhpTbEC5woBAvT1XSARaccXFjA8m44Cez",
  "key26": "3YrfZUA65RTR1B3YcLSn2wu1WBme5F4suFA3RK97NKtV94mrimaJ4hR6H7W3pm9CS1CyAnUpckUMcUUQ9H9Wgu9k",
  "key27": "236yzRuZugA6FPvUqSRfQhQkYdwkWxYH6N2hKjDimfXtKvbXCYwb8GbJAQBeL1iSawAtmT83yxT1HR7j2dN5BDzr",
  "key28": "33WhLS6zg4YoEjnoGi4soLJJ3TfpmtNzjeeKWeKh2g6HtSmU5tQMvUGL18LDrvnKB6j2RSQeAU3UYr5GrYxZbswp",
  "key29": "3FrLWAeZztPpY1vdsJocrj6fHpAuAc7CkA5syHaxA266x5CuU8CS1oknHr7jqnJ5XVc6W8UPCsSfU8XjGJRpS4en",
  "key30": "3X52ihmFiiCCNCkHQPjXbDt4ZqSkgzipsvV1wbYHF8KmAKyaGxnQc8nHQsiPxjRnQQpztJJ72hGyKwqaV1YQ19yw",
  "key31": "T4ztMR7Lp3BAey7Rp5mGeQVEHAEtzyrpabEjZphXkmBzGfReJraAJXd4VdhxRTMrFJTtsZteP2twmorNvZW569H",
  "key32": "2BR4JWyxbPm3UEd75wsc7fGvnT8a8BHqXukCSNHEQyNzMcqGjwUgUBpUfV9r6LnqCzW4zUQNGPTgg9YMBigNuLtD",
  "key33": "5PbaNmRuGRCsydV7nscaHLfDx99X6aRdssyqnPfru7t7ScCK4cx8fg5JNmif56Q55CavQYGZzf9ZkSMzxH1hHmFx",
  "key34": "5ptezqPLjDbhBWNcpPnYEDpAggKhzVKZo8vVYzN2yaRTufjTvhGMwEjSyC5u3aMrnFqXZ7b3uWyusyxHfkphR2zp",
  "key35": "2FfLS4SLXfAizRE1BeR6pLwmBXr7xTphpGfJRnhVBrRBmkmwfG7VU4NrQLMdMf8ijgKeggp9skmUZHtjV4E696oG",
  "key36": "2UYJCPYGASp74jGJkcVtHSoVSmRRDVJwwiFvyxwyRpCEzX3F8JRT62K83g1yNphA3bz9RP2Lt96yK77eWM4mg91W",
  "key37": "PtriajE9ipYtyhbrmfeMULhscuSnpdEM8kVQwEqjSgbVajDWAfArmT9WMhVzNwC8BENA5sfeCRdr2oQTtrH6zsK",
  "key38": "3cGDrcuBD6hqWWGgRCySXQoEyqz9rqwHy7qptunSBksEgrrWLPm4vHEKzJYi6ztpJipXXb1hTSRqmZCvTUQUscZ1",
  "key39": "4i9hwwurupjMTBK5KYeB1DUCWzduxtWshWJKDVTzvdZNPpkhPnZ2qvRYqxLKNPNpuZGMqScHvkiPVcX7MsbnxwHA",
  "key40": "4XZ4JM9ALdmUCfUhqnG9in48EbbDZPLKtjCrLuYbFMJ1C9GuiSHnLaVGKSvjpsYz5SrLPfsuusjb6t87Gpc6DNep"
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
