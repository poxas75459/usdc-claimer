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
    "544UiU4VfkF2LEPSBaSVL1j959M7uefsmpBQTus5soQ7xTA3BYxKBMdV1jXooFDVetSi1j7BPTL4iZQF6aKEb6th"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FGyXsVzoMfCPwCsCRAsvxa8HnR7fZu5yfxK7YwjvPSqGs14uuGdk3YHp3MkQtpmpwCAKuHZywFBwiU967NQ7Uqd",
  "key1": "62hFnXA6ZguowKMRT3JeGGG8uvcXyGj7x8d9gzN81PhBWkVLBq22u4QgCGQ5aUZfNLTk8t6p34uh2gkNFGTeXhDr",
  "key2": "mtoyP13b6WmJV4Fma3L17Ur32cH9qfo5em48jvFvA5WjBePdGCu4tck2tyAJJxQVto95tduvKcuzS4xGBMY9EMX",
  "key3": "57HBxjtU3RM6cgiLXoa7bLhnHuf3sNaDEyJKzcRumQkrJhPdXqRoC9steWhLBdJ6poNozw8BwbDhzsiAgaHRfVsn",
  "key4": "2ifcR7E9PWCdZeMXTuhwHCoofLd2Jv4pQ2nXXRhsLtodzzgnhmfFTrf8LXiUmzMjrLQSRYoeYuWwAVzbptUB5W1r",
  "key5": "k4ASuc7AVificL1S8YNQB19RozESPyEuAhduJcMvVDddC2Zvr1HBszkdU77quGyoiygm9XhUR3dSXiH1X7ibpGo",
  "key6": "5tXvceNFaFCosUUBCoV9aKohUa6rhwdKvboEr233oKFJtYEKReZ7Lp8LERnUwksHkubv12hJ1wxhqLAKiuZSWn4j",
  "key7": "5LWAYP7qteCZUkj93EFjY9FgwCDWTVnCG57qRs9SCYvpQe3qHMFCMGMrDdwjdpPy7geVb5HbNwsbcx42mQym76XH",
  "key8": "5u8mACxrnUy5ksJe8YkUqC5spzNaKmgJ7WU5qsUkhEqSiZ7VnedHP5Rt3Cx134VNQZRgTuQ9jtGE7e6h9DvbvaX3",
  "key9": "2gzntKX3DNpbcWtLLEraa6tEcELR66TCU7eKUjbitpecY2RKMn84oxd4q4Cw7dBQ7cgkuetecqWcQcxV4ZudxDpJ",
  "key10": "2rPkMFHmk7keXZY8PBKkcoejzVvzn4kHTsx2LiJfdXVmB8j7WjSrkM5VqgjioZ1ZSCC9nRhbEvdxhiwNvXET8581",
  "key11": "4H1dqRRksBRkcgVwWQ4XkfAHKMo2voJPsxTEXEDyRjGY18W8dtQRrw52yzd4CpJq9j8Fh6g4gWJFQNkMWDNaHiiU",
  "key12": "4jerPQjsNDSA2vwBc9vNujZcDT1s7BEC1g35yXWRB94hVCxZQhzmTEwNqsuho2moFGsGw1Zrpf5p55iNtXQxfMQf",
  "key13": "3VQ6DhkVhzWk8FvUqwHobG92G2Cq4qf6bNeVgyyMVwyc3LPPXYQpZZuhQzYMw4NTVYrt8G7MVV1e59BXLnTo8rj2",
  "key14": "3oD2esiDkZZN8k3EebCiPTUsc3v7Z7E2p41cdhc1h5AoACLDnuAFLCbujgqYtJpBxZQD4pQWnzfCa1tY9G43gYP4",
  "key15": "4kfhtwLS2KWUPwMrenRxVqHd5APRo7ZsdK1qtonSTrzX92wpsJXFLSghgN2K6yYA394WBgsvDGBprv2G6g6rgNaj",
  "key16": "459geAP27XDuNPFhquA5rDKbjXLjmuSY5fqw1D76F7YnBVwy2RhLUJ1uAH4nnDMLs4c1G19SCUugyG1hcdoaNF22",
  "key17": "5caPmFNYeKuq6NWNxHm3r7DCy61ZzhcktR8pVqDqRgsbVHN3UVk6Jz7YLZFb7MepJPqL5joeHf41Zff9FE7DynQE",
  "key18": "2pygaX2YbjW7sSr27gaLxUXmPusnasz7bWS46fsXMTUf2Fb6564cwpWPSJ3sqgetY4igE1dCUhoQ5FG4eofQCXSQ",
  "key19": "3RtqYqgJpujkeatpQLTcEN491GysuYFktCz57K5Jo5E3ZEnDULdVshJYbYVAR4V7oGdqdvV16CmB6j3WvtABNJJK",
  "key20": "4Ji9hLEh76uFGSh3HbRKP6mspQTPfCT6bABswyEatAet3T3QjGCoBYRu9Af1LzQ2Z32ZHTiVQJ6uiYoseRk2ithx",
  "key21": "5dASonbXrkig2uQdrw2AD6cpS8LPqh5DVE16MH3pBKprMDiBW25AJAxqEozGcp8oefVvxVBXUPFUmf11TP7Nf4WL",
  "key22": "5CP5JJ2Gf88Ga6qggW2Cs5JSzahiRuQTrwLxPQjz5L9dosQmmhFfTmrroeiGoKotg3pWcs9yTuPQThPoYnyBbks6",
  "key23": "3ZDpMuCsX2ndqM3YrpKRM36VPTCQBiiqt5MGPjfyECVnydgJMDsP2JcpF8LA7Xni7Z74CU2QpUtLr6HBMaErgb2N",
  "key24": "45SoD6kQ15W4ygDed2hT1bRc1bDNNaDdGoUwPjm4BUM5mjCB93kt5MxFHK3a4Q4DiwJQxDG2i7FEEcyrfxKNtBJu",
  "key25": "4BNozvobRB5WeB1MnKZBbLzbJ51u4rKx6ndwCqWjrdnwNYGebT2uV7cR9ARiUna5ncZV6GNqmniLZ3vNtsazxiuq",
  "key26": "9wn2ip4DPKkGLALe2xX7KneE3ncmHxdRhSP1Wu6ZdvtdeXcXJ6Dto1SVAMU8CM5s32vgEGV5Ck2n1msZ5qCFdmi",
  "key27": "5V3rmcgtBMbBjwPEQgyrkFwJF2mMqPZHe3PNAkXdaiKCm1LBEBcEJvQj7KSapjvX1an71qmrgBNQMxaJEesf4gW5",
  "key28": "3yjxVdieDSeaFJDUvTdShFt2vF15RiTHu1t3NFJY6Vvt3UMdR1PstEPSxFHhNGyw6AqG824Kbwzd7JCubr8Qkpdk",
  "key29": "33gfawDRH3zkDEP4mKuYxFW46iL2BKxscGZZD3cJkreWK1mAJLa4xmAXXnNYZbtGNWhJWGQkfPESNgtcfpDhaMxx",
  "key30": "29bUB37yzjvJLGNDwd6rj2zFYYXW8sAmicUWvYcwgkTpUjZF7hUQDJXNQ3erB5mwgR9RghSZPQoNKu8px6Q3yfQt",
  "key31": "3WWpDhtx7udAkPnn4ue9v9fJrG8CzxLx84XDUd4pSK4Swkcz8H4qN8mgvLAnYBNnX976DN3bDTEtEcu4a4cNUvvv",
  "key32": "4dnaoxt6juB1mpSasXuxm3Y5GJJzhRfB6LbEFwqkBQdHBNz4qSH5ErXAJKD8ynTRBtRMvdBD4DDPfy6NNaPA9gmj",
  "key33": "3TpTPGGa5FNs5J3iYDKny3yhyo4YmcSvNcQiWa3Eeg1mQv87SyTMdJ7HGQATbudew8fpXHh5hp2qizGhbwRfWRXV"
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
