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
    "yvmMiwi97iHWQkXKA9ixZuG7DTvX4P8x7dXWpZVHxmASxoFmBKYojpCU2xGNnYYYjZUs5XyfK1J3qHq3x9GUadJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62JQgzZCfSew7vSt1cQV3mtRcGnWMJJpKAfxmeXk1Us333vpZLNpAbxefUAMqepngjgb9fJZNHn85zXoUw5LfNXm",
  "key1": "5w86M5qGEVGy9aPfaZ65ZH61eB3A6VPEvWjFpvt3d6KcxCZPoaWixmzY7BSt2vbCkPDMkPYKajEV7wLynfWFfEML",
  "key2": "5feoXFHjPKXZiwsKn6u1bsKfwPNaTg8HdLrryXF2GMePCv7eHYgHoCNaK2BoNQmBDdYntVrACiSeNAnz922MCdLQ",
  "key3": "osF17cPQwXMoaZ19GUh6GjRV35kK4AtJH8V9s8rwKbLd2mVwgZ9GG9FBRFKuYp3JAkNWTAMz7HbRvA1T7pXehqH",
  "key4": "3HtvpogBabbKQGRDsN7YAs8CfcfjqHD5Ytjy9tWuyL7iLTP3T1xcLMA3eN8VBSqYfyLXq4CTjkFcHUhQi4FYazKn",
  "key5": "4y8P6p61brk3iiXWjz1X59ngzxFk4SGJSxa2MUkpZGK1zfZFPtFfGZgojzqrY6VkLJhoLAdoQ5mtK6PZMhapPhDg",
  "key6": "4iMiCb29MFRNKXj9DWgpq8hzSY3TABR7DzcFYaxRLzWACFFsuTAQBBB2VMiX2x4tn4tv73eRvoLBpx53TD7DLFBt",
  "key7": "2qDBixR1YaAmSEGDwhYQRu7dPCQwYW2gEwLJsbN7bo55T2VacS1FCLpaFpkEtFobfCEY5Yrfyg3vvcaSjCPzmpSZ",
  "key8": "5uLELAgS8v8JVadcpTNQcvKpeficCuqeVMgNbP3yRK9Tm9iSjv7aEZ8T9WEMDkwty5HtB8aJ77tAKa9ex7yBiyUJ",
  "key9": "2gRG5ra3hqsbyeciQeGUecTLsYGSUV3uqAnYJhTM1XJTcChbpm29vZTMju7YqeYQjjpZd6CRoKYV5xT68AHeKf9u",
  "key10": "3YTa7m5i6hDMpgEh2KSpHq4S9zMAcvPPzUVKk3hfX6XRzESu7gr4TKv5dqhsoB8drVPPxZoM9tzvTkiV9Y5TU6Xf",
  "key11": "3yayWyBUpEAFZj8Yep5z4sHmJDxmitmGGqFtzWDKAo9rN8AwLurN5RBmR7egmHysM3WQy3BzRaunRqsoS2TxCPMm",
  "key12": "5fA7YpxNnNc4TaotH2aiGUPnkDL13CdSspf6c9Nx9CdCZMHC5oKUoHp4BDFszj6vk3QTnmqzdG7mavkcGmpUw5GX",
  "key13": "5b23m7gNQqQ57tBQ6z66aMbh9HBH2HFxzZD9KVWUfz3RUEckcJWwQPWskpjx2Deo6oFyHFhX9D5aR8vhKzfsqX1z",
  "key14": "4WBTbJKSuieQR5jT6pD3JKm9UkhkgMbds1hFEVXvhv9zj2VDHoa8bSSGAQAzw2bzc4tcyJwcFYRgUFvCtCVq1gqX",
  "key15": "21bc258YJo9Sx9c2hPawJc2yNPTKhp4tWg54jLaocxrvu1NmjmqV7eX7fY5FAEeRsua3hzkNPW6VF7RjsH8sGmL2",
  "key16": "FHCwe9Fy5JeuA8QZpnQNpZ4AtuHYEKXDdChQBQVbFycXF5orW13K1pYQq6RDTz2Z1sdqEoAR3N21hDaUwgtDG6Q",
  "key17": "fw8TXdE6wUukw22J3F4zghss3zEXu9X1nom5t4sDc85pnhFbx62KhifAkZkPn7Bwkq1pqNKQZKo7YtDCvgvKhFH",
  "key18": "3sMbEKJHgPWYNdw6ZTpwfKus5gxMQZ69QPoUECcZtzUWMA76HwWPfo7Ny4yFQaRhwQieWWECxHjRP6wLC3m4vFV",
  "key19": "4r6Hjqv7JR9aXQKE6oUZQeQVihrrRa3SpZ5UZ8i2KsaHi3a6osmTmgAmmMAjd3vcwJ8b88NAL7cBPdeKLRMHzPa3",
  "key20": "yWPyn2NosvwNSb5eumV9wSzz3nC5YBuiHWSPMyhY1D1BLt3teCFdUVEMwupEcSa65iyAq4QTqVgkHwUZoF1Jppv",
  "key21": "5TEG96ZRC3sHSawNYkykkf5NKgk5d6zRuHs3k424qmrd58ay8piN39nvsKWchDVw5Q3zdPZodE6NR1U2Zdomg5fZ",
  "key22": "5kLK8Sn1kEZww47566Ggfp1tQEpSdnxh1sTnTCA1h4bjx4NXZRAF8bLsxeHWykpzGFz988arcz8UmA4tHXsjwsbz",
  "key23": "5fiUTaedoL2EZTMztKaEKBmjXWubdBm6bXEqPX1oeLeDssVVic8M69huFQmNQyrXeJtEa7qN6zqvwpF6WeNG6cWB",
  "key24": "y2whtMmdQpPbMBtnZ7iz5xEWVBFM1BBv5uHb8TP2svtgnYRswVkCxmtaipGJJwRUcvoMfxnzpNFYGdb1Rwhg7DL",
  "key25": "5iu6axDhPVd6c6CtUmtsz84U7NfXnKWTaiaonraMKdv9d8vuod6LCnzeuyLXQqgeBQ2SLyVm5s41k3PfCm7Kjsk1",
  "key26": "23ezqPLnNqH2dekZnNKSzBFGvzo7uskF64aQhVYjqcMZX4y9YSyXgPWXbmicLCApCWUwwfQBTg2QBC4vHPWXmRTB",
  "key27": "bMpTLmnAU5PzLg885yNGzxzTKDhxaRFb77ugKex6WpMiyQjgUnh6MxupVXcK9Tyc5ADUrV2zhGDEYcNem2Ph1vg",
  "key28": "4xjVzFU5EsFf1hec4WtsG4VtHjnue1fmFC5y9HCsdavk93m1TzGdxkTxfTWWHdTxNaES3fm7jshyjMz3Bb99CfpB",
  "key29": "vmsVmETFzE4wrbg9jwxeANyQuoVnqTo6JW5Z9NLT69svdhfDDKtnmjwCv6fwr1s3dh5hHSrt8NeVYnwr3uNCBZZ",
  "key30": "4ah5jWndUjcr5LY2jrqu2mstjJm5MELzY2fNEm92MaADMkzovScczf44JdUWFH7LHAgjQ4hiKbg9LS8YsZ9HkKNe",
  "key31": "4A4KHEKQozd8TjEBHomqzh3FufxEbpD4oJ2LWeQEmpoCUXgtsBCMKMM8NHZ7GovVaVg6P6BabRJ8FFJY1zUrruZb",
  "key32": "5Dq2tLp6KMKwcw8EDvAAKQtyyejftSRR9Wwj9JYjL4upV5b9kHoTWuPiQfXjbohy7wukUN1J2QSsqZrgBmRyQ6nU",
  "key33": "3cxjnWVkSKXHZE48btgJheKMksCWMAfZT3fviY7hLJeW8M34wvxaEc3aAocypA7tKDJUV6T7FV5rQL5MK5xL2H8Y",
  "key34": "5afGqCAsc61vRHV3SRXEPTRe5u8xYQadYxvPqLAWhuGcj5TT2eyo5DcaQDgEoS4XhR7qooggq4TBEHbonHKXqYKA",
  "key35": "3AL4jVSSCWuiQRESfJgEsLtZjKe5inqcKWh3KtLYvvaamZPcY5ddDsjw8FioSRkGaoUgsZdvo5zGheaJam7XmyLV",
  "key36": "5VDrGWrQy1PkD2q6VfGtWmecjiBKinxUBfWdcJDUPfH5KekiBBkoDz4s2GaXBZCjVdwLJjiMh4pfDdJZRM446wJq",
  "key37": "42TY6BPw777oNRQtXycJrqJ3EVsojc7g9gWmCiAvbMesJQbp2SzDUDsHgsPdco1dGZFJWapCn4xFMGpf3HU8wX24",
  "key38": "4x9J924HhG6RgtcXkcChfA47qvctbfPcGdw6NkkPJ9APk8NXfyRgBBkq9C7wh1o9nwEGFWbo1zvvppZwJVmpXj4v",
  "key39": "2VDkerGhCu1wuX7ZxxEMrZsc49tq9Kbr2W6HLVSy8JjoHjJVkHQ2q28o7NTwG7Pu1yjmQDA3dDdugi5oqBwaGpJa",
  "key40": "2DZXasp92P4xVUVwaTZmi1A9VKcs4ShG3BKx53k8ynkF5wuemgwmeS73o6ymgHcnUNvAKb8wASVTH4FFyoGAUeMV",
  "key41": "24M9bQRG2HXbLMDCssXgY6k9kuZAyoCvretPUvEfRTeJH1iesFEndKdhFJpDXajz5hLXaRypK3WfU4YZkNCmJTGt",
  "key42": "2cUwRyt6xMe7VgYrUKGFWEiA8Bhpx84iWoXhAojyrYBypCzQBvEmmP4riwu6mCqU9xo9swABXRkBcGaiCrVrQYmg",
  "key43": "31Nrs94fHcEDtikF2e6GMYXBrAsjoxvTif955ydXLbeYtmav9F9SxGgb6iWNNpEfC9mAdVgA1MUX1fs3XLkhvJx6",
  "key44": "398Ph9gTX8AihrxbVEuB9C8Us3Zm9ARTUfHetCxEnyZ6CQK5Pwcx3niC8bHoBpBKHJ7xmYJJp4buHs4iqbLPgZ1G",
  "key45": "4KjxmJuTtxj1jL4GQmqqqWTyQ5cU2jQYLQcnAfJX2aFps1Y1d2uuPk8xLtTUmsmNDMDFGxXDG8xvD2j8XKE2mRgY",
  "key46": "5ZHHGkciUWS815fUPMB19ttXLshYs664uZ6QM45FHeby56uN6HSdUnXdXNF5zkVSERUnBp5J6U3DnaugHjz8kmZK",
  "key47": "4CBH7krS51gz7SQMDksfuXkiEeeBQrAC6sBFDehq1cT5p7SbnhJnKrxQoHF4R4EKoTsmYkHP12kFNZpKggQDPGp8"
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
