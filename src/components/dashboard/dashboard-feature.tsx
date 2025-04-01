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
    "4znvBLdaCQFr1TwZDLr2aUGmXsjeku1C54LuEWQhdN9QBLKgaQF2oGpZ5CstvxUjYC9ZGxEJxzy1NkTLPdsRz1AT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MruJB3wogLqbVpRNCh9Q3LFspUdjV4uKDDmyE7DXnLUHNiJgkNW2rQbtuckaSwA4z3ZmcpSkYELRrbzEbQKbyqn",
  "key1": "26pFaoDBL5udFEQkiQ2B4wKAkbL8AGcL9qi72aTHcWEjG1wKdkFeERtPeYsCaB8nM3x51vBF7Vyfeyb5AKuSqVqf",
  "key2": "tUJqrE19FB9TUjnZBmg1KbE4HbV1t65zzeNxFwLUYsz1qkjmCabz6LW7BxcENWnG5JKmLN4Q1kt4kcfVh83fsVV",
  "key3": "4qfMHtkAzHyCnGrtaQFJYVDGjm9tNU129seZfkmHcHhDgc5j8UqwRCBXVM2pKZ3TBjbA1dmNr4Hv9Kf3NXvzKQwm",
  "key4": "3TfQbdcVq48qJTmVwPZ187SFgHJrezZypdM46t3JyDn9wU9cFn2PYNK1kZhxibTkDPBEJezvLeAAQgduWpAjmVis",
  "key5": "5NUMMqBRDdQwxv149zXYwyGvcB3JjhyzEnHyfkQRdbpoTyNmoAYfADrbhZTfhu8bTde2Wziy9jH2FtMytuVQJqqn",
  "key6": "4yRVWEoNHbkeiJgwWX1vvupUUBM4CEEEmxY2PHRMUn1B3KUPhfHh5VAXf5LGxcyFdh8kp5sXCktnaFBWyLVNKGM9",
  "key7": "2oyREXAoH9fvEi9sqbEE3y1WtfSEGCxxe6LDy2JtLvecskoVyjhpsHEqTeiMJxq1MDjJt3epCvUKCBQo872uXt16",
  "key8": "YuYJhqXjNqWH3rczwvTsAUigUF4266akzBgfcEVtt7kkufJjDt4G2okUcsAwjcxwXRC2nyAc1mWpt21d9FhkvG1",
  "key9": "2Ct6GWvKKBAdnJ1yhiEgdM7vSraoBn9HGkA9UwwmtUP9gvjgddwTL9tjxdAX3v6UKu3kMDNp17cD3ngx3iuYvHEP",
  "key10": "zsekngt4yqiLf65JrXwfsR2YeyR7WAQrj31wEc9b3K7Dk2yFj8j1VuoRiMxsD1eLjBA8Q9uMh9X8g6ksH4smsJr",
  "key11": "3FfcWATvVps44TehBRf5kH2cgxw1YAydaKTyDnN726tqNuKbGHAV1aB8E2fWMjvu8KgPUK5ikQJr8r8wLA75GFZh",
  "key12": "2VyEvTyrr4G5QDGGXFRfy8uE6RaUGQ8mAWDwUXXSGNQxs6Yuxh97AUEkfUKnaGNwxMCQptG2RizdtLxyfMxxrX2g",
  "key13": "2TJv2frreqowKhYpi5y1YaCMq3dDdEvxfkDmaCqBmt2Ykb4czJEJRNMWatc7MqxiS7vJFhvtNRMaNR27yUcMVUhs",
  "key14": "3RWHWyDKDgifJJYjtqoeAhvqPZiDzshkRPk2wFhzwmz13fzBDZyuSF9ygb81svPDKwLppDnpafFaqz89hPaEi4HM",
  "key15": "4cBLSb7cPVth43opmf2X6WXxcXiSvoNA2V6Aq9bKCQpZEBF3vnn4WgbZR1GwvZVjKDUtASjrgwMoW5wukTo1MmG3",
  "key16": "64fmgYTDbiXof3GD3aW4G2isV1zANGuHHXdzsR35RjQxCp3x5XWV2cYRVoGvP8XBqztXCF7nkeFosSWTGiZEe1DG",
  "key17": "62ZV8ZfPfv2Cpke19egBSGE2J7J1sAne6NgdUcKbxoMUSwAyvmtgBsqAPJ1BZJyX5ukV5bXhUKCSamGT49e5pagM",
  "key18": "N4N2j8BgnGjGKUCU3wZ4hYjoAit1TkRVpS7NP2FoW43AJMw4JW3MR4bgij6EXSkurC7Ea1jMUgTvRH2yNrLomVb",
  "key19": "5qFK4GoqBcfzfuCEF3AM7pvSemzMCDAcPMAsodW1V9DPQC9NFfHKkxwc2dVL33BVEvQFpqffBHTpkcmexgqid8xR",
  "key20": "aP3fNQ75G5EgQE2sPMX78bEfjpbQNUb9z9oHcAP6JyqAgFJzdQQbEjrZdy5rSCM4DY2KYVvWfXrEwAWpZWKy2rr",
  "key21": "5BksVhKuy7Ar2tEFwUwxuGdP5iTCLFWq4XADnvAFNFm8hmtCd7DGcVkRA9pSJxXpev54aj1eM9kbACuiTFhY8Tdz",
  "key22": "2R5ur8NyNFpuQJZVC9jQntbk3eCG9KRagSdVxbM8Q2e73Z8Vm66QVWfW2eNdd3GQM2iz9K6yeYg9xfSfQmpXok7f",
  "key23": "jG5RyY88b17JAVkQxuDqZUynoxSR6LLfg7JvpwY7jbq84W8ZAiqReRqRvTjdwW8mj2byK1wqR7xNnTJ3J8GYZdd",
  "key24": "5rxbi1JmUpfHTtwAcMWbEkfbDx4MyJnAra4vMbkRSDtgSvg7Q2f922K92NEyJEaKMwXAVFa56PBrmgSswQS8Jhng",
  "key25": "4uPUqNWm6UXYHXcj3xCwDNcWPoapc8uVerzjF3uL25EQVttCr16SqYG8rXZahzenA1evAramKBaLQ2MvU2fL3U7R",
  "key26": "35YQLFr7yadH1SYupdHC7qD99HwgZbDMXcrnkD6yBhWhCtb4Giw25eX5LdLiUQqE5M9FJeBo1eq4QEJvoUEAqhmG"
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
