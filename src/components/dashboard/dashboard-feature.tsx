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
    "SpLDc1QJkUSKZxLRrEwtQW13PLnSdSyCjnJNvJRabk2BtLtcEQoQ8T9skxcnkck1aUDw1CR67hVwoTmfgLiiY1n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oWWGgnc2Z7oqo2XTXF4YXvN68Lyc42QxT1TszcKCEEZZujA1kkExboXVQvA6z7fKh3gBeKTGCD529yVWXNgMVWu",
  "key1": "4eHgFnReHcpiVBeduDZFAB86fmXFCmE2PzWkWH76PYA4Svw4rbV35UJbJkSVcpB7oTNRp6raB9EN5tadzfrFVVYt",
  "key2": "NXWLDsB255CBDdCiiiSbRoxE2ZMBA1d7gqgoyQ3VWwCSGSj3BCs8R1PeBjfNUS5XVZrcN7pD1YU3GxWKJ8KKARG",
  "key3": "4q8fzDSafUCJiEzoNUE1UXN8CvHXKZWRVoDyiCd7mZhe6Wiy3BU7Zdi7qHD49E3PNGpGCTtRYRZYnjwpePeBypBe",
  "key4": "mdga5zhfqLJg2mQvnPZA7mmoaf7eyEKZaVP7qZmT4SLUcpd925VeEFDzw1SwsRjZNjVXgstpDBiA5aAh2oh345E",
  "key5": "5E4efpqAMUSg2QMsp3qrAbJdUA4NoTwx9oL6yBik1Uxv1dWwKf12JyNFrBk8RovrfsFfWStCCxX1CfrkE31BFoFn",
  "key6": "66pJEhDzcLg2Hr6uEestbvq5YKrQQdHQVUbXw2KEN1FDCW7svNUX1zXX5rZEy8H61bJM5MBDW922LdbmMb2mzT4E",
  "key7": "5HELnXrwHdCkksrtQktDaiU5XZ7s1dcZGBPLXUGGHBYG1DxgKrVdLQkFVAKeTubiAG2iKcy1vYgmhBfq1f2CUK2u",
  "key8": "FYiLHeSA3w5scGD4vBDRuERzFQH8HFYuxhq577ctq6G7BnjZKfQpCPjS71kKasE4PkxHHesJQV9KqzhamySGTqA",
  "key9": "CCW5RtcsApo9Ph2SLYWLNyRKTkJuHt3mxF3eBXaTgCXkdp2y38nobdW7fPgKvGWLtHxphh4RM2QGSMJhKWqaw8Q",
  "key10": "5rXYxWhrJk27htGLDB8jjEuFMsrVt5uH6Tsrwi5oPZcpLLd32cbUHCL6YhTNBXqgcHNAxM1LV8BQaDzwrxLXZYrf",
  "key11": "4WgegvYrmERdjzix1SXTJVEeqMVxLAx89EzujCsjDtvPfzVqfmT1b6XPEEXN9XDLGwXFGWFUBG5YTrws6dY5zRT5",
  "key12": "2znWdZPt6FTZDAszzNed5C3da96pc2JT8VzRtFx2YkG5nneJeHaEUcBQ25X3qcTmFCh4BHV54phqo5L6RQGTu4Hd",
  "key13": "3NojdCxF3rLwpmtkFoSJj6APoeSBuaP1RRrwZRMcbDDirKs8M29tzsuQn3YEmbW2YW7JDmFRjcNnHNtHbvKRevZL",
  "key14": "652GGoAYgQqAUSE2x3DyW646TnCiAB3j5M1L7NV24Uu87Z5PSaVvxqeVVe7LAHsUrsDk8Ua5BfdzUtn7WiMUAFGr",
  "key15": "2kEY5dLHVaT4sHp5LhKoWfiezUFTVLUctYFyMXnc2Et1KtSeVwWGbn1pJTT93up9pgYqdePiL8uXST9zXHpXo12q",
  "key16": "3vQRx5iL2UwCN4zzj7Twkvzb2aexmEydcUMQT8x6X7GCdujxaH1Yk1qubtE5qse8ACFgtRC3VKwNZWAP7k3D4C6k",
  "key17": "2DrFuNc4wDBP5zpX8SqDJjaUzipAjazYsghccu2n2A2DQzz2cGpFfAB4FSUkfYdFG93pLWNydSKirkymDMr1jGHJ",
  "key18": "fVxWA8fWgUsFzZN9CkU9o4T6zFWkjwFofTFaqyRbGw3bRAeAx9NCAcNABogFS9CLh2GVsDnc4WshVospBVLUhvV",
  "key19": "2774H6n3UdwsK6crpKeM6rDcbr61kco3FkzVVP5qqZHq8xTV9KXgvqXvq3V1bC53ni4TFg4CM8BakpNd5BjMiA6c",
  "key20": "2HskBr3GyrqZB4WW2GGRYvEknePkQzjQVEcpZzP4LekQCAtYDwyCzH9jdevXhtebJEtcJPAP7Ri1m2TM8JUUSm8P",
  "key21": "zt7AkMGNxUQDVGg2iNWLZyYiN7a4F2XBFXcEkZswtdy9MjbyYcccoWeaMWgPdixQnVZF6t8YPH8nuL3bbF4AvZG",
  "key22": "5rfnVyWY6B7Xw7KpH1SQ5ZhWFMJNfViXgpjthTqFu6oinP7oYCQzT3mk7U5CNewfLk3edzvedzWWV7bJ46mvMSjM",
  "key23": "4KiUZr2YDCsBqywTC2TGQXoTVpGKzFkXYxrE4uvQZuzUbCv6m3y7twWBgX3YMSeLpiRwKAs1dKXLeEQaWoE1CriR",
  "key24": "5Wnwo9XC2FHz1B27HtexBkkHyZVjDqDPo5azRwRbjUvXj79sHBiutyY71yg4Xt6UE3ocx56DWUMwvMxTMQfuupWz",
  "key25": "4PV4JdC78osTqkJYeeoyvnxJdehCRrp3hYL3bh2oS38HPzJsUwo2CNPBA6Yejfc1ecFZeGRntdvmKurFtmFRxWvx",
  "key26": "59NYkz9BwSV35bAoFXh48Gn5oPjyqHVdzg7LiADiDLJduarwAWZxeNKxqTJNkxcsasaTs1hDbLkrnLr8waEZmTmr",
  "key27": "zYGac6dQxC51U4qxEzywWKakrHJiw8uEGgPrsVfSiNMsa9gBDXZg9NU2tbz744GGXD7PL2XMevz8wodZQBE84DC",
  "key28": "5mxrNfj5Bb9GUe2DNhrNx5wFa15neS91f3s9ry5LYgKXiNXJvUSuuKTna5qDsTfoAMgsjVJ2RskkJvfiTrGw4vVq",
  "key29": "4RGTtNtSxbohcAoPGoiJJSL7Sx3zyrqBQifiPg9Gc7SG7XEQF3LvqzkVt5vXPztKXyaCiWW1UM5DEchZmemGeofM",
  "key30": "5xgoH9Sao98u73tMBd8peoG83m17WBa8eQbFHLQH2xjpieUHmCvkpUhQF49hyNkYKSi7WgDD4YHGi5Xu4xp1TuvY",
  "key31": "3B5kSZMc468tUyEuFmcuheQWfXkoW8ReM9eQybtEuug8JQfug4ufS4SKhFR9etTz7CHY6tByDD7piBCiVWsxcdh5"
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
