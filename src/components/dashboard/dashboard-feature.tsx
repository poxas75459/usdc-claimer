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
    "d58V7jbdKzc2pMCXxKWUq5qfvv6JPTnmMnDoUNmNqHnNh3DgJ1SoUv97QtuFsBZqEzYgZoAEKh3Fwm2z2PGQaBV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j5DFu5pmoKPb6p8WgJJp8pYonGdUM2YwJQCy2Rycber6BcoEYMQvwG76QvwgzEn1LmLoRKnAyD3PmT1WRqvrHTo",
  "key1": "3PCk2NZfuXEE8wuo4h3SsfTj2ynt9vDhtQ9jPCPjCe5LTuaRHrvu59oJGk6VBAZWFvawsrHKXGivKXk5SFTBBTh",
  "key2": "5MiT3xBnRfjxnSHW3NVq9ygfL9tT4A2RF5R7i3wtRwmUSBK5wZXNzj3KGJ37K4uDhFdrFBtGpEi7phKK2VLSMiD",
  "key3": "Jn8YAMKGASYER5DYwh3rSsV8b1HYnKs7hq7vhf83LpnfJTviTycXvHaHdo67eDtSQzRH4PYwodTkwXaggCW94At",
  "key4": "4MHhoEph2Pr1PpWfrLuSdrJVwYQZyocusPk8Ngqxa2ZjLRxHH79uVX74V4y6fnWNDYUXUe9SrwPVbJ55WKwGBos",
  "key5": "5LTBB22JcBDokYFGgJBD3ejsbAzr8gFwbizyMyMMQ3f8KJBfp2Qbc6bKm8nGxKg2fGPQTTB3qVdpebGb2PbdnCRy",
  "key6": "kAE6YRfGBmn5wBq7Mdk67opMB7YGx3EZFRMEdDyS17Lcd16B2XJHeqYPDPcuW5HvVC3pwUWNYWy89mQT2TDPShk",
  "key7": "474HJ2cEUxfb4bZcSaikZHhyMGyGuBrrsh379ib3LeDYJg5yKa9kdNcouzDBjRVj33BULL9Uww9zGR782hfhPhAx",
  "key8": "5f3eB7HXqtNG2b5zdk4eNRvb8NKhEBkwgL2SuUb5qZktt9MNLw32sVmD6dL35CZrgmK9G1S6v6uP4vnb9jFi1sqn",
  "key9": "3mUSEE1s8MRr9dL1CnHYTXgNkksHgwGtPs8shJXsCajvXLywbj6Cr7AMoHhGaa8uDu6H7BX8GiDDL3LTPu1LWZv2",
  "key10": "2jELnfjJKqLHVXoSqvsi66HMYjchrXUTVFAx5LmyAMg4Y3hBAh3GVxzn6DAiMroBoCNJKvrAPBm14Y2FUDMBHKw5",
  "key11": "5Ae8ePC7gKeF35MKoDpj3zGjGoCTF1hJrkxKVasFQ4HYpzzdoVPpjyLmbBuGVDDjPS36aTqVBP9zSURxCehkm7fz",
  "key12": "4CEBgb5ACEsdQqwUup52pBdNAnGzyM15gkQvK5mzXwoMJCJaVEKn5i1425ufFjBYyGe5sXe4jiDV7xuUAU4hdf5R",
  "key13": "53XN5pqqHvL16s7rTGdPq8zj7iPqTjtwAtC37sGZcT8AVxiuBPKWmTB7rW3nNKnu5vzWHpwAFx4UzkyoueM37VSd",
  "key14": "5cJ8GRhTDoppmMTnj8q11UTBtWfyuZtApsoxRo83tLwPEYTbnsC4dcLWj1ndREKn1tCb9ZEo7BLhnUKjU1oB89pA",
  "key15": "56eQkmrHbyPDfL2F6pwd992GTB8DsD37gPKiYyUporWUs42EvBHycu8TfYhUqJqGq9N8TtXHMEryCH1udebj4j1L",
  "key16": "5ASCRj43S8BfpQxzYiCGe3TBEv6BPJdaFwozADJud7EampVBdG2pQQQLLUCyZSaEULyuwdG4N6ppdwiu1cMfiJmJ",
  "key17": "4oHJzAXWx6JWJ8mxG9qWzJYf3JEzCzpfC5y1mSn1yHNgTS8R7p9v8JqX4rFgdrtnJwUCiCPnFzqUSjJj4YjJAyoC",
  "key18": "2kGajLR4hGhECLD5UrgJaEHktqhtuD1caVCV1HGgVBrWjNvtAh7UrntRSNSrrviGhEzbHN54Seus9FQ5Edz9ugaz",
  "key19": "37JtpPm6s1F7pWdG5u8ntALJjp4hQ1vUt1z6qvP3sLc1g45gD76KuPT2RMvCsxLNFS1fXwMS2CwTpZ6yCeKSjYNC",
  "key20": "2LzvMDRzfThHkCJLWsgaGrTusPuno7PnqxKfTBFT3o4v1R1pKHqmWppMjRWViMkVA63HnmbnTRoqchSnZDmERdg8",
  "key21": "493T6nYbmBpN1e4jgHbgJF1s9PJDsoc5PKeuiZj2xAZ5hXw1sWTCnq5tCEAaVRLkpY1uQCN85bpUXxdE5GBATjZp",
  "key22": "xff2sbxiwm7SkpASxUFA1rnRioUZdLP16cu1t57KdqoRkob5VbiqYZQFgmhcDpK7ux2BVySuCdfabaBpa7kAkF1",
  "key23": "23H9oKxH1NnaueAWCsfAC6aozpqPn5zKDrC8ZZuT481MGd7xEfuvfGHQhJnj8ELCXkFpuTcCSRQTgABHqF5128vg",
  "key24": "WrrnKwn8bdLyxqYVkhazDyvk1SkJrBTNwsWetjfdGLHd9n13XgxE3a8vAYptQpqTFjk8J1qFfgQXajB1R7Wcgpw",
  "key25": "ezd4x3VyziMsLdBUAwqMxhUBU7dKDEZTTaAfaoSyzDLKeZAqVeu9NBt6cftFKDMBNe6XM3PzZuub2ZzEQBLk7w9",
  "key26": "3ftqVRK6Eb4MJUcbAPfX1jhm2ELC8bin4gwciiX28P6jNBy5tgoZhDBTMGo8aESDFSJpYYd2fazG458G7yroyroY",
  "key27": "3wY2WnY1oeX5Nv4KTLt9saz9g2PW8upZkdk5KyEEBZgr3mBxPbQyjmkDjtNYUnhWiY1i3etSfRxqtkybGkTpaew",
  "key28": "34ceATSuaZsx4izfvL3ohRvhue7FyihEdQ7mEhRvbVstu3pMGjRgA4ucsEVAXL3ZegAyXdZP2WGaBgRGpxdxZzoa",
  "key29": "2HWR5SM9poEWoTGXSpb77YzApAsZoajmngYcGa6argiqEMYRt43DLRNwwsQsq5GBeScqrnsgXnPYgofmyhgFWhDC",
  "key30": "4EvnTpCNPXeBNh62heMrCdhYaGu24eWLhczs5AzHxLnBy3n56o37fWbz2Aofh3R8HcJjbyVx1mYEuukoYpyqW414",
  "key31": "4ke7P4MWiqQsX7jFQUz5L3j55Y1CHdBbWCre831phi13YUnxwJ3xaRuzZHWwh3NZX3TwSDQZsF7Vb13s5LGYNzwg",
  "key32": "4bMpUnuEamVESBTDrYrV5FP8hReCidHnDFiHz4ZfhVC5MTkV4PjkkExTpzRvuXHn3zCEhcMfEezJrntUH7bZzXXa",
  "key33": "hF4fPhA5qWeUBkcHE3MgjSwt1FCJGUFsJvVR2FN9SXkEMvERxMs8pBeXjZBn1DyxkeKCeo35YCSFnjX4CJ4jgT7",
  "key34": "2YwT5JBHTAtbHdrhzhHFR36xz4t6V1w2ndYmYDhEumbqHpkj499y4scJKzmBQkGRcjg9oXVBsoWbNKkBcS63oe7a",
  "key35": "5m9JhreCtNv3jJboWAd6GuGQm8pug3NibKFAKs6odaNfNWnDkyRucie69WbkaCWNLRDuyhcM3hXKMxSjrv17Jqu3",
  "key36": "2TQ27Q3p5KFgq1yZNpePBVd1YpDYV9Ej6T1hjF2jZpEBgMt3VweN8SR95TY6gNtdamuGxSmxU32YVMMGz4h53TSe",
  "key37": "5kEU3m9dfbuYsZwsgbvgWbqRC3p4rELrBjrVZUQHeNmiYrNnsgbiFyV8ZbY32jUzX1TGjTXYkLwbi2BH6Daw9Gqd",
  "key38": "5wLRnLskXctxaF7CMMt2nxRQS2tsP6CSh12zgHC4pnaS7er4HQtYf8Q8Ne43jnwCnQENqAN1iiWFWWS98bLhmczE",
  "key39": "58YuWmLdvJbNtoyAENncYhfJeDStJZPfJBmPf4X5fLb1LmNEs84mdMrPPEPWp9EfVnkjJiec8GQ3KqnpaTBBe5Ay",
  "key40": "2JiryYe323w94w9GspzHCZTLzCR6kpnTeDXBJphg9wLAyBFTBTy3d6N1WcaXqSNVRimkeW6Cf2krrBUGkyqbFD93",
  "key41": "3wgSJxzQnt8t3NwBJoEbixHzcemu23qUwcmGn8bpbFJax6d2u7fKtgjPCPfQNgLbGa8f6ewMeN8qyNRzidGtcUwv",
  "key42": "2Nuew4XbHTaFbnPyhRocmUyYwF6B423RELTBpxwu3HSMTp2krepzoPUzAmtPG4t4w2ETjokArwDHHswmbzJfQLL6",
  "key43": "3QyAdQLiEBoDVBCFFnYxHxCfEYnyAwrz2Hi1MvQ9iwmirToHPpLG5YzpxzmeRokutnC3SriLtZz2EPiAuTLVyC3s",
  "key44": "5dN6G37bgzgCpoarMyG4hbppVn9jrccK6qxLfGm26E1hCdSBowfsCM19WUFBNqAc9EM2WLFcxhU7hbF5pSm2hzGT"
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
