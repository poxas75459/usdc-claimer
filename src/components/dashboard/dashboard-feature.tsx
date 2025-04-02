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
    "XKSka2Aq9qpqMA9cUbfDZYsDJfafhEkLYbqMLAx1xEWm3RJHDkrkCJ86BeL3uACc9pQZcTyXxcv4AaqYuigsHiG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M61tee3wNwgab8a1DwmUxhJ5xsji3tiK25ZmTHC5A9RNEgJrX4o6mmjYV9kjynPtTfqEU3chuEEAGE8bbqF5uwg",
  "key1": "5fksVam5J6ncXZN2E2RTMrhf83UFsKWPs5W4APpuFDkQc5tMzLrF2sfP2c8k9D8sihf6u2BTa5E861t1gLsECGAv",
  "key2": "3UnNjW2GLtN9VQThWdeh5nNgmiVvDULcTjnovzoEsA691Bs9yyDCbqqPZS9Dz8SoZKYGzMiibhBRA5RLPj7aCQPV",
  "key3": "59pcpcJfFZuFhqPzzGsU7HQHuHCEEK7A7r5jpw5s3nKzu9gbgkCSp95fPVF5AgjCfZqpFQiuSQVDeqLrGMq44iAV",
  "key4": "5siFDAzfDZtbKU79CHGxTJfTZyhcVXUgLv9oEvWWHsY2Yer8xgHSXz89TprgFcU3dr6mdnPnbFbSUqTpfCJEZefz",
  "key5": "3yshKk7gF57arUG2pfCnyoCcgRrC9NPP4g2beinE4cKSBzYkcXt5nDQDnzQYgZRXaKFwT6Q1oqJvroDi5bmzDUBr",
  "key6": "4zpctb3qjT1UdknjGuTrt6vkPB3wfMdoKTimNE9z21NQauGYZVk687H78pzJZaHxoEWxd7gKsYQYp4BYPzgLb7ou",
  "key7": "3TpcQ76fGRkwMAH6uNnFf86TyFTM8R3rS22ye32Vi6DTXBgaCqLom5jbWtSNZ63PjBAc2VpiAfC1Ux2DLTGwdKQr",
  "key8": "36m7iyLKMhePwwHNCkbcn11JZMrBvQFHAMqbPrqXPpX4tC9gEQnGbVmnhK14MA51UuqWHZcGt6YwyRBABTiBC9dL",
  "key9": "Kzx9WP6AX2wDPLNW2kZJom4CtNAu9R6AKKNaCZkHLGiM8CeXk4z4mY5ibKDzrpjYxciGahfg9FQ3QrGqHUDWx7N",
  "key10": "x8mJMUKHgiyFwVsxNumqTWQQrrgRPqywo1RCYDoy94NP45iBfxHZcR2Md7F8PuMnfuhG9aNGANEobAH3Uw5RheE",
  "key11": "5mxJtLQxix1BiXWjkLb9RVYTdsDpRhGCGVdXyo5X3LF93wMpwkufffw9wouciT8z6WWaLhFSgB72xpTuhWvV7vYe",
  "key12": "shG12wVcptPT6WMuVLjmRXk3sB81QBGajkVq6PQoRsr4Vf8ayc7vjZjktka8BzxoAmVmKYnw5xNn3S5zUWRM9wo",
  "key13": "5SAM5GqvbrMYMoTpPPr4EDzj99pdEWCbKzpCHZNVHPRyzgqS2yV5MqhvXTUbb1v4TCArnFxucv9gubeWeM7MA7Ev",
  "key14": "S4jwiKs4Tp2wdTXJQPiVcmCvr4q2trvyjheZUEeD7f2tVfjXXGUAh22DQyDq2Q756mn2PtRaMgftxAzBNygrpj7",
  "key15": "38CxoQB2nZJZYenc8ZpUMe3nftrYSYNdt9gr59pT8Qx9g66DyEhpgkU8EGPfBcif5iLDCXPi9fMKVv662sgR1u3r",
  "key16": "3gEYFcGyEQ3AKrzLyiQKDJrxNfLyPcQhJ2zfzGuu8K8QNaPjGefBuRyfyMKuUmLLsn8RdDgfj3cC4MZSs1dL9uWg",
  "key17": "4fV6KnS29s9GrjmWC44e9kJbzMkBhH3B6FRwkq1gVswC8WNAyotBNhJbbLf78hfSHcnEFijNdXvLWeYwfMy8ABk3",
  "key18": "5HzGr58mFjBvpV1d81vSSYoFVxvLTogpZ2LpuoNuj6Qu7vYjqZ5yDaMF61JNPnXBw2LYiMqGfWDSK3QRcZQDnDm1",
  "key19": "fKXaWGKk98h9st7yA8uwxGwy6SHtkmn3DqSTh6WrUFtZ5rqczg8xrsS5BjDzntbwiQXLQksjpC7Bi94LV7b6HFm",
  "key20": "2ek18rELhas5NfUZdfmMRJ3sxmV6cQqPGsG1N1SSVmxUfpMG6Lf38FkUTunf9499vbRKAoBD34hoXP8pGyaWZUCH",
  "key21": "5qqWcb4jL7CwJnSfiuQMUXRy28qBFeRKqUKK4vCA9vSqGBPATpaBsRGpst3ELKHKbt2VDSNmF9LhHCHoqc88zou5",
  "key22": "536r32oS3tP7bmKZ7fj5t34efeY1dk3cmq87kt77Xic9t3z7S3KUrdN68xxBZvXCvRYRrN6rysgsg7bM4L7TTx46",
  "key23": "3rjvzvve9vo9QDqmbGJeGFevwc4h8Dzk1SxBCx5TSrfDzvqD32gdGXKp3S66H4FkcgS8Dbif3oEuaJ2h9pUXdFbD",
  "key24": "2mY9pbokcdQYup2bqU1isajFTaJJwJxhmTDgbmmK3qhoySb81fQWU7h7gNbfTNU74hVYBoFrNar4QY97LSa5Fn6g",
  "key25": "JqKt4Q6EdxzxH52gGt7TZYrFgKEAeMe8DhBMcjrtx2eDGXLpzte11NcFAxPSvMzCJaVzTNK2ajs7M39P1joLij8",
  "key26": "sxMNedZDgrMNY3SDLgz7R3qEgbe26ZKkgxW39sREen4gDi5EM5FmVzDDD47PmnNco6wdraCjP7TP5jTogPY81kg",
  "key27": "3hdWSRATNy5NsCTnGytithu4GNnHWfWgCG7RCrTwKtygkpdRAY7SS9PnZ99o6qQx4az6nqToRbnDeT4ZVnahLdM7",
  "key28": "J6wBVV8wiwLzxMHKwQE8WwnKybv86RwoPVxLAowHdgBkPbugkzgRtn6PAnwcAVLwvcnncv6uWL72F5ZkNtSbSBC",
  "key29": "34n4zU5SMkRXgHwmaQw8W2TnNJPKM31kE5h8qtyMGVbqpVbZ9mK12fRxxGBWsrxEx6YXcdf4qBiftGXtavzqesjb",
  "key30": "4gvczQNoSkPtTxDSd66v654vEgUg1PaS7QPsLXHMLGeaHZr9Kki7DoDBzBL2mMJ1L6FZbTcdWDAj6NoWseXskDtM",
  "key31": "5e54zPYjyzBGnKML8Hc863SRmL6adYvTACb5ka8NqoDpefRgpX3NyydKPMk6upHW3R21MvQXVUx4k1L6A2XLVAx8",
  "key32": "4K9BZKLUN8UZhv4bdQSgmdSksT7CdrXA35TvbTRkv7t9Jdn54bPC1g5bzkUJEXPNjXDmtdWB1gDFLR6QXaNCVfdN"
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
