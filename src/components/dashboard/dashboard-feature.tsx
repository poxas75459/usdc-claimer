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
    "53ExBW4EWGkS6opeXk3ZriFpex4RqM6Q5tqCeeqX64PdHoWWy9GDES7XHeHQzCMQUp9JorgXvrUKs3CMyGdx2PNs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wXYU8i3L3PRXSGQhm2keEMS4fKEGV3aGzaGBj39gDn1rre7HzjpNmS7d4jMSSLzxErFHomADPkt4myi4RPri2Z2",
  "key1": "2FeHU2iM8yVD7fZqBaEXFz6yHjEWjbHvmutqyKam4o3dYr8Agxzzt1pNnmfjXM2dJFgMawp7aHchYxWXpS79qmzc",
  "key2": "2EdyKUnf8DeUbMw7nkmBwSTiweYVm2NjCMyZJ2KhoQaSdePZ4VczVDQfoHs4f9DXd8x42tCAKJG7KHfq8bDzFjoi",
  "key3": "5Y2jrWtj3NU3HsmDQn6qJ9kDzUbTJ2r7KLhkCbXeJ3VMLnLoTtXnbtbcKxMowSnVfWH3SeiTjM3oQ89aDDLxCZkQ",
  "key4": "3EtqcLTWXQZzUyoB7QHUdpmfdFnei8oT7RcirRyn5o81FaMZ82184VTqsYpxAJQcsL1G9NnjR91gcKn5WpWKbZ3w",
  "key5": "2AK8pGHkkkHu1BrV94ZhVsTtyd9eUjkQcckEszesXCY7sY18sqmoTARyCv7YFdRFoAKog7piqwrzAVd9ua2d2H5v",
  "key6": "XR8Tv2nz54B6oQkGWraCXpi4xRdzpkzvTCFbciwCYXW38NuZ2nAmWWxHDkAXvL9eXmxTkZicEJKZrk4aAqFZRBg",
  "key7": "3sGNaoVKd2ApAM8RyRo9WCMEqrwXqBqDFi2qktULPiJSrFEiSBfEKwmbcAzr4K9yq3rz7g97cdyNZZgmxz5a6RUq",
  "key8": "483v9jp7kocqUsUXMTSZJX9r6KCHSudSzi1qFeNGsRuCWwjH82MucTcqZrsNuAbu8hzpyG8ARTe9k1WgwwJqcoyE",
  "key9": "5gbtbJbHuFP3nhb9VT81S4EdYkVir3nyRNArgWoTeMEtf6SLDY65VtjK1pvyDcbUavVdjxohRJfNcvxXuFPVVpAG",
  "key10": "5v4gqWyg9x22rydsD7RteraR5r68kFQZJKnLTKMrHSKHiq5FgybJd8Bqv2s5gSeEiSDYRgmaGoRJio2yCmXGGtkz",
  "key11": "a5tgFVTaoq9Y9JePRv9oT7i2PUzzgtsSF2rimu4b5V23Kfn2br9Tq4FzJWN4xmnkqXdkuVAGz3CeKWEe3jWGg2Z",
  "key12": "5zNSPiEvxjjAhbmNCcrGdRL1tnLuQZRRk1riZX2A6m5yVjyzZotRefz1chdmy5jh6HrKCFjRXiXuL4QMN8oCsQQn",
  "key13": "678QNjn2C7mwdAK8vH7BrpHSV7XAw6dMmn1hzAVYZjGpaY75vx8GxKNnJosCwuZVhG665CM1YsE5QGB7myJnSGLr",
  "key14": "3GauWXxFu3CpE1tea2jBrh2r7ahmv85mirdcfJCjMyAS3x8A8Ux7Bn1nifwA5kcirTXMRZRSLaoVpwPadYcXuNbN",
  "key15": "4sKs6TcVQrezdx1nrdhpNccX1Ee3JNB8NrZczVewqwyqSPTGjbgsuq1gn6biQutAFpdp6fCmfLKis7pHqpDUMRu",
  "key16": "5b7k4nJGUwiojK6sk52UyqVQR8yc34t2Nj2sSHDAZ7Aj6eDTXc5wNELRUG6Z3MSfUGt7CPYypatHjjuxdJzsN85N",
  "key17": "5xpCbbZwGNG8UeKMCWEXBpXhW4ucgctGBytXbSeb2MnyRQ9eKFBCNT2zgVCEFnUjPGjoWcKgDhUnF5K2TW46MCnc",
  "key18": "3tZmRmdBWxum5rxYbJcTn7zoNT6QhTdPwJy38wZjTaUxc5EZThD44yEqtAw8QBaHBvWB6YwnXM9oX6tC4jNFgZWj",
  "key19": "GbKgSWKxPsZma5sEDTDnNUQrJubNuinWjZdjKM62WtSW685UJjvNBZBRwsht3yao9vTgUaE2rHFJFycoVkTGyhh",
  "key20": "4ETUMzkSokGhzyX3o1vM8R2UNDJLQhVbiZAkvBqnUTFx6wEkpCoCvDqnw96a6iMuLFS64mb5CDHD1y4tgaCjE6b9",
  "key21": "5wYthpyftegmkuVD583TWXe983to2D5e2eXB44ppYiBY2f8ZnDapV67jw5TY76oT25J1P22fEWwYHoZLNEqrp63R",
  "key22": "5muCFnXLeX4d3AFmGHfYCeUFpSoYigGarByaWYNgthwEZvoHhv8dRwMG5t67ryRUZYQvRexzaHox7E6P4uTsBJ9D",
  "key23": "RCALpjcDyfVitb6oytLqBxE9QYJdsbQpEqPPF6NnSQovx9sGazhuCWsFnFnrcM9RDiZb4YZ6m2UoDQbaSc9bbFY",
  "key24": "52m1Wcf5UN3Qm1fzA3iMVJa6sHhsXfRvx1gL5Brk4kWw7HyeGmkXQBkbWZP8mjdv6ieTDrT8ps3e7bGx1aFFdhX3",
  "key25": "mkLv4vJMsjsQQKdPvoKHp6QxptSMbDUv5hsDsTypiCw4piZ34dxsDut1yyHVLM5xyFoK6ne4m1jWjkMBs76mw3q",
  "key26": "HYcVG8ehJBXe4NUCs3FSc27mL8xvFgXL71vtaMAocxw4xhtN6m5WRJKptVKhRpUyVdh3X8qHpBtdBPNFUMeNcvP",
  "key27": "3emp6KoVPAHFozHBsFfdCs7BhikxLCcLaL7QGt6RR65ZHGaXxJ6j1m2PRAXt8B69r1t3C8D44LS9BmjMyhZFcW1v",
  "key28": "2MpTripmvA5BYPBqe7z27DXcT1GJGEBDnaVFhuXebjtSNwC5i9W1EzM8axfjBTE5xWQsWALT746okTgSJuuiAkSk"
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
