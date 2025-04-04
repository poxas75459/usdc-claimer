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
    "3EhBzVfruK8iY8fmZj2d2fz9NynBQQLVJZpEopsnQf47WRuzjf12t8f13nJoQMmxvJjv7w29MJbHdA1QDaFZHst7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sGZ3nxWgpzPBDNc9B7jFZzGZFWZhCroYnR5yR2eFLEGC4bj36kPx1USMdZaKUJ4KyVcF1r19CUaUcShuuzmsJBp",
  "key1": "2m8pAbDCZ24kVKNcVLL6C87vr9gdKEUww1dLobcLnH6qsAyzCt8PFUADmxkPo8EEkY37epEaCeKEyN6wJJc1MDQc",
  "key2": "5C93sQ1HiGD1apjYWgKJgew7UAFgyiFvbJZ4QraPArEJKb4WkcHzcBThdjSun7xPo6pLwXYJPoKnK2rypSYQ4q6K",
  "key3": "5qSKx7TcBb2bKpo5gZkz1yPT4HC3AfwKPdumXve73cguwjcbuuf8QpqxB6dJsuCe21GFaTtUAMY8GpQSp2VzX2kY",
  "key4": "47BWDSt6CaKVUWmgahqugZcDTqXuoM3iVRvUYSAAbEcRx6xnWJTVG3b5MQk5nhhvcM497FaoUEkrkN1qybYy1iqD",
  "key5": "twBoRBY1njPYgtypmn1RVKscnjiUa5E19Yo275vyA8xcaCQ1LVoD9MiE9gAwHntYXeehd79bK22H3P1WzXrraFU",
  "key6": "3s3apQQ5UhTQKjUp2PK8YRiKA81716q89xo5ntNTtqKWw38wTvSR3geWnweUiLXgnLecaYcBrvSWLgZtukq3NN1F",
  "key7": "2UPvBwqMcUc2jusf73gtDH7uPntgu33vezUaEy82ci3h3JJv6JbYj24TkcyhrxQLLFE1KCuamRv42JecqkDF1JAC",
  "key8": "65yAWutZJhvPWpMXwmKovRBo1w1w5LZcwvzy3kJbrSsSmMVJxceS9hsebVMCH7EAukMyyQjWSkUJdvRnmmofCDP5",
  "key9": "5NnU4cXXXk11CL4moezyPv5HUmijUxPnpNhYnHE8zHncZktfBRnrJp42EmKd4zreLZjpVSL5FapmDnshvjGSBaWd",
  "key10": "33ZzFJkUgDt11kLRKDCjD4YY3hqX8epSSETzSydwWFNb26uvuKPDzTcSw1tpkomjY8G8d3Ly9QKYTsZX478nG7y",
  "key11": "58oTrr8CnFowR1eSCjMowPnXkyFG8aszoy8uRjwua2cFABoExUtGtnjWPv2rMe6hVq4XC6pB57r8LsbuRazpNkXL",
  "key12": "2qofU2qfhejpHSHmr7UNW4jbsCwb7WxzLRaQGxpTkKxKQ2uPL2WuayhTckxaNBkaHNbEZGT6i6SmFxqUFsJS2SK5",
  "key13": "4S8rSfdZsKCYmKps61b17Xot3TK1MQJyYuSkt9xv7S645SiZ9fPDJxiEFyLn2ZHGLLLj4DrPurjDRJFTwNMgtPGU",
  "key14": "3CZo7nvc8aYx66hLcKqv1g86KkPxLyz3ePQUwwSGXg4sXovfuvSLfFMidF8FiNeNQDt2BBcJ8L6P6NXMXPAGE5G5",
  "key15": "4uin5c4kkthQAZZsPATCHqo6M91YT9uJnBJVPSiX8DaZkFPhczFqcL6hPqv5er88NwevxY8S9LtLYenwFSXAv54B",
  "key16": "4mfx5p1kJszbNmpRSt8GZE8LUGZqE8M39HT7454VhxMwiGBDJrjjeAWZhRaSMbwUxEqqnA1DE4Hh9G3dzkNKiJpk",
  "key17": "YfKNq4AejB77oEC36sUDC3K22wDkrvoRJt8bG7RPPzmPdCjDDmhdoJTC46pG33eppRnfHfN2G5byDcAvKU3M2Lp",
  "key18": "2bZxTGREWgtBq87vHBh3Fb3hqEqWQyokz4QNQNmZfpLZf69ZUkhzhQY8y8u34wYgw6k6q9kt5tVfU9DU21TthC2L",
  "key19": "4nbiNV19JcfdeJc142GTjsvjCF3UWv64ZAM2Uew6VnmzHsNWKQ7GNwzdC7EteCEXjBPuMaLhDE9j6QWzuRqngeD2",
  "key20": "57PnQNbjoMbazp2CtVE9jsyp8QbsTqYpRzpHBFra5SvPrLXt924r1jCo1gTEjBi1xkp1xxF2CYqP5CcoobyFXdfJ",
  "key21": "5jsBpn1gznaMM3NSCWLcajAecYfxbBewLDvD2Pj8njZqVYv5qcNxDFwzR85s1kTkzWDJbrrNurhYToi51UfrcgMK",
  "key22": "aKq6CwiMma97WrMiLv768uPmLYE5J4wnPwF1LJcS2ZFhWN5vzTJHrdFGhZKGCRF2hGEwt9AUvQpfn5HfeDF7Qx2",
  "key23": "VfR5VaCMLLmZh6ZGgwgKM5f4YATnxsvX88VuDGW9MEJXAGQCQrHa19Ls46bwno9rutDGUVn35aaY6XmuChJasKL",
  "key24": "4xwpNSD3PfdPKYGHqRwdpLedRgMfw9aKfi8XmKCHQLmXHnW2U4qgTes158Z2VApqDWKfX2LnPdSF8hJ7Lx8MUSuG",
  "key25": "43ZreqTA3DgrwSK35yPJb3E8GYacAW4fvNM16gCge5o48ptvQP5hkNRUyh1UFRjFCx7dAMt3256P98JHfB1ntK1n",
  "key26": "a3FTK9YEkBqQsyQcaJnX8evQse45FNfF7g8gpSp1SuhEvgjicvDQjbAtHSwomrpB6kpW7c3rDrsCijHZEtzVwWP",
  "key27": "2rfHDRZEmkvzAmSw5y7VCKu6Bzf7RuwJMZ4no2cJjpGY3Ex9R33u31jvuhoHPWojssudgDgv2kkovwPk7fdP5qox",
  "key28": "5UgD9gMFWmfu6Eq9CWen9P2figorWeKxNwEUjQs3Vdm1vYrCeGFi838bqmGCKY7cVHGUHUcE8Pk9PfznphnGY4Fr",
  "key29": "61PNKBW1ung4SBvJmnb4hmoMeystEFz4nrztnpkSUyutJtZ4JTiNTQccKFpd33NE3CyF12CSdLLjpjcnKf8JNVk3",
  "key30": "3tAZLqohaFTmpvVB7F1vCEGnuQywkwJofjxSRCthMSLjpfPCMgj34Lk2v8BW9Leet3hhFujpT2ZK43NhMHCbJ1Cq",
  "key31": "2mw122Bm5pCa4BRLFAvHDbJeEejyhPdcGp1y8M2vZMgGzqZUmyXhpDWDvcxJvhsw54og1bGYpaqH7pmpu8bzJh4m",
  "key32": "55FcRFGYzRbLUXQDHP4UnqJEfiEKf7fZR45fvWb4WL5tnsMUj4VyxudVCpiPhoYMKHJASJnfUwZt49HmjX2eDr4a"
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
