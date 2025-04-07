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
    "VYbjtnMugM3CJNrHs9rNGkmFVz3crW9K5jhDWvKFTWm1LVc9YiaTYmnvKjH1dCKTNp14NZZT2kooNAJz3oxdtCA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qeg53hhashjfkSHCffeisKLWkW32MJ24HQSVNq7LXL4uFwttEamBL6jwq4rUuJ6cZ9CaRXgv9QTobibSsyUtnZt",
  "key1": "2KwoWBcvwTQbqvrA4WVC9ZET6tb8K1wgiPxac3kPfutFb1mkRzekyaxHsjEusZVAbLzvqnXzBPv1GZ4TMUsgiukM",
  "key2": "3mAy6gjiFRYCcmVWHfN3qbgYxyfCBtT8j1JkUTKmxAgnbh2zLV2dsefcTQgQRfKCmvErVpre3zHiSpycxMUnAdDi",
  "key3": "2wzymSoXtAWKnx96xB3NCNu72EJnZEcfXL9fquSWxh3No2NKQUp8MYuLNxGW2XLokwUQAKreSYtdmcG4NzU7JoAt",
  "key4": "dLo7cYfkYKqdkk5zqoTLs9Sd3oXthG2qDSwrkubifugNzEmXC67mEHn1rgVS3Ck45go2Ww7MwqUg7UKohgQmxpX",
  "key5": "3mvfCSACwPwx91zx81K3Sb4P9JkF2KSsZ6NDHcr7suggSMfdRUkbvpaHCzDQKZwt5o3QdZboyGTdk4sYftMGJmjo",
  "key6": "dcN978iciguMtJ2vaFcVNWe5xyzgLdtaFVxx7uFpFBLNdX3gbmtCvuRnJdTcNrHfeVTxRrMixq3gZ4pFAezKLNc",
  "key7": "5ggjesBAgRRZC1nVcfyjFAMBHr6VqogfeMpV9aN8Pb39AfBh6DCMDDaGkG4rEJKjE4n8L9nfQY8YNr3M848eGFoZ",
  "key8": "2NAvT2dSwUG8xAW5EemuqG2VT913cX1Q79YoRV1SJeFz5pJNGvwsjF1ix5wb6jUp5bKfkf8o1tcRRCuXzgNEYFwk",
  "key9": "4Nt8CiK5i2g7evdi6QzRMHC9mHYkFyxMTbrwbRnaq9vMYPJ7TzaYLntdVjhAoVx9dtzwET53h8vxVwApm1Tg4sPz",
  "key10": "5513oeJesfFiX8QkdC7tJCrrJeKzNX5PgcytJcmJjgAfDRYwN3wxSJzJnmn4sbYaxnSr7QWw1TtzNsg72NooUsBq",
  "key11": "3eY6g6Kyxw43TcuFGxTMDbNHuZM2UqKrdcJe9EhNSJEudQrGHA1Cr7VHFCPNnHdSq7xAp94zpb4X52YJ27YwcJ64",
  "key12": "2SrbEta9o8kW6riHfU51tYf1gkNQN3PZRaqDt74M7vevNAery62ok88aTV1FyHzyQUFdwkgHcSwE4H1zF7NdWKR3",
  "key13": "GwAoTX8UX45uEzVtpsvi7X3NLEomGBJ7wccT2CfC7nrM9yrUvASomj5icvXujTYYM9NWn38XfSzKEMNtwSqxySW",
  "key14": "uYrCn452L7x6c9qwDShCaNVXfsACXE4o3kHzDSwMeQNQ6CDNHWJexSbfb5e2zbZyE6G7Ye5mpUz9g4VkvtNgqx5",
  "key15": "5HUHXkT9X5E3R1RkrCAuTDFfec4a7YjPysAPcoDLdFB9HLDX5ngXN6eGD8jsGkTrxdc8t6vHg9Jzy875tsR1K7Sx",
  "key16": "5JUNnDAjAB6iJoHdpy6xQngkmWS3TfyKddnZTfiR8yxndcdQtvG5rHiwyUVkQYE4FsCPEGvcNtnMekFH9xvDJwT1",
  "key17": "2MrJJDwm7TJFr9xesj7edoHBkAY5XRtyrqmxGzCrvhb3eGUH9Ve7rdt51qYFnaPFPiiRtrwNwfFe9HvEQTwfWXgu",
  "key18": "4TVQsEeFziseRgN6tPr2YUfayXnszZwFbf18wAopX73BQsAjguSRYsUxhZLa36gc5ELxo5tnMhyUQWUiihSQcvwk",
  "key19": "5bZFuZrLXppRpsC3c3cXP9RyxcY6dQAoGjzHGQ1DuaTo6C8odFKot8bamWLnbvpCfU9sVabWdzsPZNkWGcTqbdFy",
  "key20": "FhDPJWPfFUfYbLEaLuXpkW6oCwniDeFrjVdbFe3rtxfGurQbFUh2m3VHNPp1w7hFZD2MPEWKFQTufKRdGvB9Sfu",
  "key21": "5ybwxuAQGY57Rhw1CTAwCoL9B7pZ85kdHCJewB5sYctC9ixELwkrCz3duYjoM4zsvGWC7cXHeYhFC8rDTywg5Uwp",
  "key22": "3tiGjAdpWh5nfazuftkZTprukisb4M6M1ac3Zm1Rd1JmU7zuKanycQG8c399yBtM4FEx2jzWZFqKTUQNoY5zGNfB",
  "key23": "4xggZdBQvHgKKRqZ9nNn2W5hPBiHKnchMz11tXSRFk2nCiXKWfwNUXfuHWH3EMHGrvMeqwPFVmHEuAD9UUC73hZ8",
  "key24": "2Q99XEY5WecZA14GufWwCsw1XAB3F8bC1CC7dtAQmoHEavFfPJwGEscD5UDM2vzawwCNWFFUmNmFYRXU9EfwK2e5",
  "key25": "4J26o4jcGTo1yLkGyCKuRVPuLfbssAUAhtvQy9n5GrYFmRdZSTkqdr1h58DxrrFRKocjLFKYHxqibj9G3YBHDo4Q",
  "key26": "5GeNVcRDRvhBa1X5KtHgwYkX3mX7dekBFpVRGHwTYyJ21Mmm94AoZAT1ip8J66es2Ev5FFL8MqLzj1ookW75SNUH",
  "key27": "ZnuGzkvQQPfuyEtJ4DANkSsGDfGFFg5EFn5RHg4K5yminAxxsE7yVp9Cx9RDTWuaheCLKGJHdrGHs7L3jzu18oy",
  "key28": "2aLm65mgwVbHV2YsQTzBWfT4GB5NNR5PZSBqdentw7k8hjFUojZpwMinfJNCM98TRLtsFtWUbwvVvobm9Jo6Z6LV",
  "key29": "4hdEymTy6TxuhdnciCr93ac8nLD6WeCgTpVWbr7S6vKTHt9BZcNJctDeU7vJdtWoVnW6d3DEgoMmLjhGm9QFA5by",
  "key30": "3dKUyviB2gXWAB9vkb2y9oudfwTjpE5EdBxYA6WxMteMScfiK3a4xq914z7cakv4BXitav4BCuvqeUPByDaTnxyn",
  "key31": "3XC8pjdGNWDp3g2uQDn35H7C5Fgv3r3ZmPVvAnFF5zGewSnBksqgh3jb9LyoEjBQWReb8AuH4d4qVVt1LXptNjZz"
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
