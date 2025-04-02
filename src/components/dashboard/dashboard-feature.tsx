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
    "33DM2NvHpBpx9ZpXRbSDm7hBSgUSYM3oK2SnCE73HWDFttnt5RBPb9FkG3eKydrLA29AtXTzzoB7vLoqApoctrvm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4osnqyvcKBLXuqRtZcmd12hgGyJGgxfoviE6Q6okV7npLx1Q3GY5zYVvHKQ6EvEazMMJN7AP7waM3Ucq5Uw6d78v",
  "key1": "4YeteoVeLFLhNXw1Y8pzGnZRFpnGUSxPfcMfcX4jrCoMHP4ZTPHZxBosHi9xdGATcZsfH4TY4JKafb3hLHa5NNkb",
  "key2": "3UxfKnGAWjvByzFWoQ5iHV2AueArmnDnk8TFMVgm2qAkBZUW9XtHmmT7UE5m8YMGY4RMdUUuLUMV1eq3pStG1ecP",
  "key3": "59DjnS8GaF5UZvfZ4LXvLhood7bM3mvf4buWUQmkYhPeQxJWd8LNk5DM1ZkManvCpetvSxPRNpr4pr4YH4idQvrY",
  "key4": "2Zrk8ChNf9g9xPkWNZm2ToBgtzV7KhJZZ7TZu3cnCkmWiSrBj2gyjpe6iDDgK4hZXBPbibtRRcw52boQGjc2C9GV",
  "key5": "6nYYsb1ELy6WMv8YDwQdb3uiGLsMci3Wv9f2qtphGuhbTzhoog9QrFmGfdtinEtErUP5UGP378ucCWJR8KTRzJV",
  "key6": "61TWSqzmEMnn18apwpxHdLFNb4Na93oF9Z1Zyrh3QjtfEvfwiomTCdMnFWRSFf3Zrt9irgtL3UbZt5aLYtkQ4JRP",
  "key7": "24QVMQpy9JdZWnThZVQriE5kkjH2s2kNyEKd4dxXnRUhc42gouaHoJE4XZ27BdTRxLQTqWMmQ5CZWo38DMzEJ555",
  "key8": "5aoqcisVixFwcqNkdvZD3XhSGBjy8XandBmMYMi2kXR2zepErd2R9Z83sJjmxthUw3XjfQsfNnmMM81Rc7E9E8yY",
  "key9": "4Ztkejx6Lt4F7CvRFpfHctaaHBtp52bmGYPchpAo9tVczUm5D6SNLsi8Ru5jLqZXqipAFxsFRJUp1hB9Dxhvaexg",
  "key10": "5M4jQAq3MidGzhoeYzTwqLMTjJhLAA8TSxBPpxnkrHUbmYziLxr2r5uRnLdxov8KLAqUgEpGZGmk2cje5BELeWug",
  "key11": "2UZJLjmzxVTNDjkUwbGPPY1nwjDD1x2Dnus2SU9hVNgwJN72A3EoRi5sPxPSdnayWupR7uAHfGF97SoKXoeRGdYW",
  "key12": "39o838bnqFbB4TPntKXTwEJyuoegVA3CRFWsMHTzoN69jQHZhPxQneAc1EWL6tTFDBkZYntGws6xFfJzpwkZ8Ud7",
  "key13": "BXWd2eTqz8bkYcEfFbkVrb4WeBvU1P4B6L99BRY2dpLzEnhkW3VJYxc4gT34tvEcneAxz9dedDMfRDZ7dYZ6W2s",
  "key14": "AJgT4GSM42g6Y2HKp287L4Z5G8iApLHyQQcRquAYDq1KvxXojcDQfyWzWvmvjLeMd6ZjyAv8dAVQ75tvV73t3DL",
  "key15": "jEK8W2vLfKovok4tQ2UJuGMdygSHohyoF9XMVkUZbTZMtzH87qQnBbjTwKMqdGYr6RF1LhkuXi8z4Dq9dV7LauK",
  "key16": "2ArTphGAosvUZL28q7wYmK3rmVz2SzE2JUhp1vwAmafRe4AuU4MUu8GAB1PZpHepEywiWG9aVGf5SPpeAyKbFQcA",
  "key17": "4zePmzuJBaURwhz61yF6mY5UFkEddcSitJBEY4WnXRuPz68yFtU3UeWtgyGpLZ91m2TtcDdCyDd8CPmgBULY66MM",
  "key18": "3GvRBTAsPcaTXHt9LkF7Zvh7z3LkhaqQ2bAB1BWahLwuNnhAicqb9mNXZfEzExP7Bgk4R65wKU6Rae6DgVQyChPJ",
  "key19": "QJY5HF1VSGfNZo2x5sinJbwoCDikfN1GWhNXtUgePkLr2AsaEi9bVTMdeUmTLPvZPq2rQ89qGUokoN95dMEN9dW",
  "key20": "37fiuaXixYGTPU4jbz6SH3ZoT5z5MqE1TMQPUKnZokzKMAsq1SrNDwyH6bYFeSnHju9YUcUZM4Hxq6WXRM6WxfvG",
  "key21": "45oiUnF8T8k7rLoqFNUg5VNZTbDXSQ3X19Zd2eZ7dYzwpXdCQMdghVd9M2dH6BpU8ijR1BMTsGgMTigGJh4uNK6o",
  "key22": "22LqykXumkHSxuGp9jfkG8ZKT96BvSXHacGzkfTFuoDAj7572rc9VsvWRQRTjiqgcuocexVJs3RVnPb2KkEeN2jJ",
  "key23": "4tvC8CnufWT5x5qT7qxKzdmLrhTCV3ZZWnMcR6MaKMb1ekmFDdJDx8seDFK1eM2HqQu4H1iyLpMNbnUq2twvfn1B",
  "key24": "32SANNBQ5hYKFA83ALcS9JtpjHzBbpuT4T11a3NknqMrGRUTg4bSahMHXC64JYx6ieJULLrJSumpc8xGBbp7dJTV",
  "key25": "32K2v8VrVfDt96923BhUdZN6gh8rrd4MP4we2hnhvsmnhMb6qsqegC92KtzNckb4zYhmdxTqE7x3qKqeBXqVkKba",
  "key26": "3z1VrgeSF8evEajQ224sjrUwTLcWDFwGPUXHG68s84doUS7bkC6hokuTUeyfz5HR3XU1WjiuKxJKkaemqXjGGET5",
  "key27": "kczcrqb7iwJo1Cyv7P6qWf6oDraGca8k7WiA59kAFb9ReJFqvDdL7LUdrpuuREeMUj6zkZ5ovekcsfrDyjisvWf",
  "key28": "3AG6byNRRUcZ3NeopMrVCkRXpnG12sev5r3Y4xcLcJRQv3HX7wqmMpL5MBsbvZie1V3kCxLWp48L9BxwBMLGwZ3x",
  "key29": "66yVFxWy79YjfvF75iaQRd6BSnu9JZzvLLENSW78w7PRA15fm7pUHXCsbexoRmjsrYX73fkMnCqYrWsNbc5owNtQ",
  "key30": "CF6QwkD6gG1yNU7gFSQ8KGx2Vy42v6rVt25dXd2CM8LHoDWweDHXgVe4TRjY4CaKB9MTagKiqkx3pMxJErjGpFz",
  "key31": "2x2vp3rATYFdm8qdU2JRvG1B7xr3ARMbeGfs8yYPu1xY8CmnPJmSQNZEBkcX6o45DZ54PaqzfXGKgWejdf9Vohrh",
  "key32": "3smxfEeDngRRQZg9nu7tmcr4Emi42aggdwYVgaZkBL7XMZNd7sZjuq6keGnqk5qeNuNGdvfqkXzGGokbCqNGECFR",
  "key33": "2xFAhASab71TmbEwbpYiR4nShRTpxAUajDRoTYewS6dJWRuF8PcR3vkvzUb9ewMS4gnGgCZiaG3WQRYvZBsmMu11",
  "key34": "z5K7CPYkf2N2LLHo8xn3kQaFhTmJzBZBXimUvdELdzYUfe9Jya4AJXEhufV6sAcby95j6VXWZRkK4edAdWd8fzB",
  "key35": "3DDnkZq7Hcr1xtneTL5YHEVwgLUVhqKdfiDBwBJMutBGceF5uu5UjWFtFek8TnZ8pqN57SdpJ46mKCB6fRaRUo3q",
  "key36": "3vAhfTx7m3zJCAbCXoYxMCahRvq2bXfWTAoKGkDjKa6t9rRGefsuDCfSNHKiCPgKqkFsBtRtH7fLTwx3v25uQeMD",
  "key37": "3yfmyi9vUwPBDD3spUFgFcrkqw6kVMtrXcefvsqhaj7oUUjhVuQ3bMgDos69U69bVqnmoJ2udbefhJLHzcF1bRzp",
  "key38": "2z2TYFo18WVVvYrWxFwK1bu1WGCjsXH4gJFy445UQnDkZj3T6fLjHuDFYJEBawqSYipWcGsBy7EoqqFC3RhD8iCD"
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
