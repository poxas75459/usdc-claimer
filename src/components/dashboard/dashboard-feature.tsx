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
    "2RKeLrEsQcTPgtW7czVZ9QZtmNDV32Unss7vfAbzscAYm8CDYWHmPNL93R7ij158wuWoQJFGLGK9JvJSe947kX7f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uPYi9yo6rzhRmr241RFvap8oTPxAqXLcrhtEcjmJZTSGChAHCzywqzf4VzQgTMYC4FK71tmxohpNtgqgGuDebiW",
  "key1": "3cm6cekgExb73RowchULTqXQ7C7tvsvaxNyYZd6Xi5kPqJitWRcWSeYExZe3Z1r38Mousm8k2KZMdzN6FPsVknaq",
  "key2": "3Qzuu9bDXQRCaz8StH6RkHaHhWPVUpSAvoz6SshA85DdALLVi3YNKYadG8FgrdqZ73EVLdBNQScQPYG5QTMVsSy",
  "key3": "5iUeYnkMYuUrm8eAWuif5a4znSPoj26BkfuvNBQJaXxVgZWT2kYVbN9QicqCRwpvBeiuwyczesxiTVtXkJWLfrnc",
  "key4": "4gLHhFuMu5pWQMa32tmoeFCgdkR9M7VuGpwNaM2y7HWPAVXTXxscrjiG3g7k6xJ8yGa8WJDF4qGiiMUxqKEux3cM",
  "key5": "yEUgwEogRRgaLBUZCBxbib6pjFjcD6je7H1AePv6KQnaE29mpkGzR2bUQu9MZdVyYkE6DgFAmy23N35Dv81jhaB",
  "key6": "2Mstsw56Bj8YxdXdYaEqjvMXBEpo6r4vFBQmffmtnQvXjJQfkuYxb6QSG4fmqjPGpTGac96mqKyJ8z3u3LuQ5yUJ",
  "key7": "3J2SS8MWo35s1AGaf6ewGX7PnedT98VdJar1Xp8qsRhwsKMizR5QVUujVgiDvRYY8fpTk28dNq4Yy7tgJSZW2NML",
  "key8": "2EoCVuuXMSMxkG61wi3HA4yVDSqsYv3oVaw2ZtUoumygqnpVL7xri3Y8NtnNS4XucxMkeR7xdiLzM3EzhfwgDL5M",
  "key9": "3aLWb3SEVHPHi5HZuvRHdwCttx1483bSLZ6eKjVCU4FXgrtdUqWZBjAc1hvGPnoF2WxEqFd1ZR7V6XLPScEMEmuH",
  "key10": "5yNsVwScfijHeiyGNSw5qxFdABatzSypnGJ2KPLbv6g3527xe9pghVVuQ9eX4T8mFmAc4UDUMAgJYXwPZzJgNYQq",
  "key11": "4NXypjS5P2MUSH5eseFe1JzzaUWJdGoGqJhUS5QFGFhJ2eSkNuueXmktvJpLR7LYRc8s5w9fRc9GLNqsKePGWVGh",
  "key12": "Jd6oXRXJ5BQPXibh1eq85rJbaXPdCXjmcpBVFHE1HvtiZKgUtetsoBzya6P4QV7YcyzkRvH7urMLGpMVr4zURxD",
  "key13": "2dArRADJrXWud1RKQBqWwgHDmuryUYZYxtmXrr3TuFpQq59iLhYU7nKBAV2LxNBEyJKxwhxtRRDPTkNjTC4eYwBV",
  "key14": "5pEmSyJ4big9pRj5rhHfTUM42L8AjjXeN3N7dhfdDCADJcwf94Dc573UwWZLkWX7WPqo7vsRNCpcBLGUUNo4cw6g",
  "key15": "2vtuTRhAQpY2j5WUShrRWdzQR6yr4GwfqDUv38Rmk2JGN3f3BvLiUVyu6RXL4YooNfy7vocqJLfpzf371oqF4t1D",
  "key16": "4HZ39uBBSbv4LTwcTWugQMdMMfp6CuxRp4L3x9FgNy92nfrxEzGwaz1QurARH7SadmwNSgAqSzckQMkkyTcMdicV",
  "key17": "65diypQAj4aJvzMsGSdvYut9YEcym4wkxKgb4NU3FAG5AF1EoXHjHwnQw2kLZJ6ABVbeKA6cEgTszieANnEQSy57",
  "key18": "54WH7qAcqtk6ACruTqtvCRHpgybzPBfjyCBwhvjSEw7rsKzcdQk5PLdTtfWdHHp9bDR1nSJ21DuiScW6wTz8Chyn",
  "key19": "5pDEkjhgbpnmnFhKdVC8vq7ChRDxADn1obg28SiaW4XUft1osyWPdv2kpRoWxZXqXfxkANE5Rzg3H8jid1Lcjdro",
  "key20": "ytrJzq5jATpxz7RR4Q1HsBFGZfvepVy7x9GxuCTZJYkQAhtPivHWWM3c63cM34TGpG2djWdDNDQdJdCWeTKbQsC",
  "key21": "sANoPJnePSitprKmnfmkYdF3vNPBTPUep4VcGQP5kdgomZR6RQpZixk8z3GVKM93rk2gMibtrK5DwKAwUZwenMj",
  "key22": "2rGM7db2FMc6fxbpGoADonSLAs5GJMdXtgWWd5mrFVCPoZr6oxdGPBzDUmWrMm4KT5Y9fjpa423qA2qJtsDWEDmx",
  "key23": "5LKkDiXmDgTXYgXu59AEzhg6EQR3XkKkS324JUBDBtqo2R29gYg7UDnCte5VAZoUNR3MB5qU841nomPza2LTtiXt",
  "key24": "4LkZfkJisEDNvxQXnuhvMTTZzDD2xBoPyn4AUNx7ps4QjgtSon3yKTQYk1qWa9jdPWve3AVdCR698E2HZ9AqiFGa",
  "key25": "66bQtCjcxgkYkThDsAvC9K3h4Ye37KefbZ3D55HzckfiZp2SGaRzJLCnxA1BFaJsoDzvgQonSt9yrmUQw4rejzMC",
  "key26": "584xko7tbPoW71e3rospECSNYRNxAvfR1FCWECbQugFgWFLy6yPZQQxqaBsdjRnqYbvvgGDBYWrSio98mNeGJc68",
  "key27": "66udvdgsQmSS81Pm4Z584evDqp9hu4y31kekTeoeYmbyRg3FBwmYKHNQ6X3bcMEsSo8m8dxMGbGn5Yah8xoEXcno",
  "key28": "4g78QgvpYSH8zyk9v9XUwrFYcvHovpVfKop493cx3gB43aZTfWcgpiWAnHy7HV1hKucZpWrZZsgTgkbBoCeRQk1T",
  "key29": "5LF4Uu7KX4hayjdU3MHhru35Mk79gbq28kjcptDV3CsGgT4yuaW69PUkXMxwggZQnCoYsjoo6ABiR65cW8az2Abm",
  "key30": "5UnWvgziJXjvL959sARHzG5XoiwqhdW89Wkfd24xvyFmQtxyLAVf397mEdUXh8UbGRtt1fGetxuN86ZbSx7TJYNN",
  "key31": "3cp2x3YXLbJDZT5eNf9RFYSYunf91oQ5CPY5usg3PBBMMoPb3YvaWU6zwRJGnmqct9LG8hjSPeEWcZAhJ5g2cdui",
  "key32": "3DcUrXU6LPfMZdwbyVRV4jLHdvik5EvDXovdNXFxixYhJNjMtUq5mzqXXFwwmxfkqkape8GCkmZ8EDNwEjnHWjtW",
  "key33": "obnwA8LBsQdggLXD1GbTctqT3WimaDvS4a8savCCSHwDn8UZuDAuw4GPZ9jvf8K7LUN36h9NnA5febnCJHgPYmt"
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
