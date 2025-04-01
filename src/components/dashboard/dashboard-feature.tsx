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
    "3uzumAEUpFVWHXQkwhX4sXjhZhM4BfYQF4DnYS74NNqKc3BUjp21AKXeq9rdhktM9buJ8aoK8V8wzstVhTthDeza"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UKREi8YpFKf9KEqyxzUswRj9o7dGugmC13B34tRm3oRx6Ama5ZHGoNLhhSz9Rz5Z45QSEycNBs1sEuemgEVbxeX",
  "key1": "5oX7PSktmNvUsD7XcUNZKaaaDs3ATqvmZzPqUHYMr9M22D7DC2k9A5SEwsuFQvTjMnf4XTCM174dmb1dkiVbLvrV",
  "key2": "nnK4VZBFkb9NM2okR1updjrHZiDebWo8mB79BRVGQwYQebMMSCVPXFJdNWobEo6hHzn58QZmNP1ZEyvAxSMU5fu",
  "key3": "p2Mekv1YH5w7NHiEsh9Uu6X7NaCJiVZ8bYYYcypLSAk8fQiFjTZrZquAA6ueZFeDdPrhxtfKhx8SQLsVd7CcJ5f",
  "key4": "3uePPTaY42dVzqzZQmLZ1vM1Qr9ytVxTB3Bfscg9i9yHNM493BTaTUzAszrB4g3uEL9BE9fFcSRHiiAppmBKYvZH",
  "key5": "Ecupm1DFQrkqeBwdSVwzMYMqDJ59vzhi86i8xYoiVDk1NHmrohXbqSwmr3esqvzMcBC953msY2vSLAHV9iDdyGW",
  "key6": "2cZYF9e6hY9w2bCkXRQune9PeDHXsXW7B4PmjFB9VJk5XaGPPWvSMzYfYVGju33kzPaEhd1BaX1phb6PCf3UuzpS",
  "key7": "5hoExxRaVY16W4VUQF1hqtgjHd4vJUydRtxNuudc8AMKuVdHzTvJb7miDTsEinRNcDmb98WjyW5mbV4sRu2uqWFL",
  "key8": "5bnHmUPZycoj9xaNiVDh9N338kJs38a5UMnZ5e5FDxhWoLURW8LmQN5EiHSaKB3gByzZyciuvFVNSo62RAbztmCP",
  "key9": "4rM56EuBx3V5o1Jg9uB8wpqdEmd1Y5s8hNp84SP514XxZTa1NrFdWD7KTWboZhdP7s51EVvuDnaTFXMFdqKDwWBs",
  "key10": "5Jd1YAqbq4se5Kixk7zXixE1GEZ3rFuSUenEnUM3mth4PLow2eMtjhMApPN3arAkdTykvfX5eMJ38dcacHJbgQpW",
  "key11": "3A2T1fWM5EimdpH1crvVCCZbei2zHyjFT5YpJSmPmBcRs1Vq7QyFZpCAHCzrATm5Ayjg4vmgcRZ4hcQqe7guVuSF",
  "key12": "23EYM3Z98AeQJazDBa7kc8FYeA5C88bhbaA5EywjqMpz83v7bwstGdzQG72CYNr7MBr1sShPmhBdN8GY489qbStz",
  "key13": "47Rixy6Nt1apedXbBT4T74LNWdDE2Jumf9w5WTRRXR444UiNHecQ9VB9i3GuMk9m2jeFSRSRHGhJXekV9rb8FskZ",
  "key14": "2o5oonGidJvjpzEp2Mi8k2ek1jfaeYbY6DaxCVHnLvKyeePGo5sAAQAY9GFFhA4zP7sqXUQV6ME2GQfT1Gbj57Wc",
  "key15": "wJo8bwRGtxDKY6TEUziFAp2we9Uz77fiYLkfKxg1j9sotpBwwUSBBG88S4RGup2KwiUNwDdchdKs7xfH5BJiZBU",
  "key16": "2FfQAsDQLYBSp1GjLbnqhVLZguQn62cMhkXv3MXHJG2otqBmXbTqCCv9YiGwrn2xL68dyVx9CpBsQTxkNKChTZZD",
  "key17": "37eMajGxt6poqW14fa5Fg1VBe6izC7GTJpn1MjNsSEz7Jw1bGCXFJYCyBNNcG3JecFESgTNSvbzBkYE6pq4p6K4K",
  "key18": "3cU141k4xFcR5zMhWeAxxLY5KMTeKamax5ifUKgNwUxuDW9Y9gbCEXj5NqjL512AB2YjwpTRmsRpt6Mr1VvA1iyh",
  "key19": "LVAgsPdwtu9cLDUw8n8KQWiuHnNvnCvUZ8fpU4sYt3HjfWq6BFEXYKapeV1MGrtcDuVt62qJWxWN2swjDxRawhi",
  "key20": "WyPowytaARnJzk5X3HzvzUEH35364fF3HrVcPS1nwVqrc8fVwSC975wKQ59NaqRvhxELfbeVsZrJTk97pyTZNif",
  "key21": "a7AQXLAcFz4HpZgNFdeP9zXuZgL7Tfe2AhqJzrxq156brfFLDdwAgvrYtUg3Ycfa2JtQJbX8UWJJfL7YCTeU9hS",
  "key22": "2jZgDjGFADZqdQejhEyuGDV3a92Hp7FXXZtnwtVEnoHzkHs9DpRW84KdAxhmvv6npr5bJRqJJpHfS4W24SVR5wxw",
  "key23": "5EaBLQL2MDLzb9nK5r6FAPQkPs4ASuniKQZNB8EjjhjUgwdWD5Wmni9HRHLz4SBCtk4mD8MpJeqbhA8dzTDAZJNC",
  "key24": "ksRR43orEGX4JFSJajVrrAKV6ZqKJmkea3LMA3kYHa8BfMaLr3vbvwWwyfdtnW5NNuFVGUrK8oEnE6faPTd2E1c",
  "key25": "5KSu2p9NqFSm4XMmGFrRUWW4FuDLVMeYmnqAYP94TF7hqCHKaCK9pDYtRfiwbB3MZ46SCSAJUVzeq4zeW95osF8K",
  "key26": "3vd6ikuykLNUqAEVXwXtX1JV4oxxLs2AQJ6N4VFDSS5mu4fRvmgmiSBCBX9fzo2nRtnkzx4W7RfyafSpyXvuK5w8",
  "key27": "2VD5BNHiXeGQaBiEJtLWkRhFyi5FW1TiEG7cnULDPg9498j3vmfoXo4itwZiqmbQ7t8VQagP9uHb2hMPnd9tcq8E",
  "key28": "2BPmgqjGHJEesdqZGd1PsyxR8X9Tu6DxPDFVEDc7h3SHah29KbVM5fRDjmQoYHf7cc9pqhHuNbPgvYsbCaUtUEPi",
  "key29": "457gnnw3dxJrcG4RrpJCA4eq8XAgUYyz7zZnMox42yT66qZ9hRLDDtA6PUA2rtEcw9wisw6zn2xWLRiUxuvsn8F4",
  "key30": "2LEsbFoKzd3gDMzecY73nbmJbFrSpwgoekmUJ1p1uA77DxcaHNv12gTpJEQQGYJZF18vwUoQgo24eQRHHLoPxw7U",
  "key31": "3KserTxiGP17pdz9gXZQLxZSs3bMiiNHFEjjWVS2EDt5pnFzewhrBnC6XpdPv4A4j8zCt2EZarbrc1EwnZLqWKwM",
  "key32": "5992BZ8JsN6YrRKvdkoyXzNN6a8bG96ywrD35zXdwf2dNmYuYQKzWVb9DcVDCCPxrBMajHmMDFibnVmTmJSqjUdr",
  "key33": "3GSpEeUvLUAbAFCdL93QpDEoWmzcHJKR77Nb2SxskqTx9bhDLVJHSy8RiUdYAt79Pf7ivRfCDFWrB8r1UiYZ9NkH",
  "key34": "213Tos8AGAXqtK8koQ1ukk8hTMC1WDLedQM2csyGkQy4htSnKssvkxbdSXZwFY9PYweb4wDuQfpL5SZEWyNWgSNd",
  "key35": "4JMjJTKzEjGXMvF4jsuVNR6n1q3wuFvh6GnFoJhdFG1rYdd4zyoWotHjWrij2NxmVg49FfkGrtJHJUtdMhdUdvVx",
  "key36": "3wJnymcWhanmdVgndwtjtU4pKeUFuevBcQ2jFjJe8dHb8NsayeoxTwZtwve4xnfrSNAfANAkDP3EKMmum1yAi8pu",
  "key37": "3MLxDFk5LDHXcVmAitfGeR5Zs5ZkcuJHmEGm7PwoaFNgf4cqbJTz4bJy3SwVmfwUGTarzGqpmeDaQjb6Gmzm31zN",
  "key38": "62gXrStNep9KmR7V6T4knQ9r94eLyrgtgp4TR8CnbbnZhc3YW3eU8DbkxR2hnMBSAyJCXpK5RWhUMku4GvURw1b7",
  "key39": "Wi4jwDsgm6VmyyHZCGPSvG6gZ8HSkUWTtdzP4eGvoiB56QJrrD2m7Lewhom8kcDdA6Wao4P7AnVKzcWpcjgxKPo",
  "key40": "tpcXQ3LhyJ562gtj4GaP8d8G5KTJ16jNQX2hVh6xUDkCKP6F5dd7yKrCsSPUDR1zDikaL1ZtLaxLXWp84aU7jD9",
  "key41": "dASqxbuLcwyCHy12vs7Ekb62Zk9DKAXTt1TQRZN44Svqqc9fPfksk42J346SdRsNU3afNkxujSQKoRfgaShbtu9",
  "key42": "3xG3J2mbUJE8G4gXEWsTzJA8B9CahBi62yUcZpw8gX6R7uEhPg5nS5TNtW4Lg7p1sWSkCeAVXJmmh1zK2qyGysY1",
  "key43": "JvjEjc9oXL2wshb4JVtrMMeV83GvqKGS9mRXmsUCerPT3mrSFEmPpoUSQSRcTMVDQg3P1Tk9S3Qrn1VXEjhdmV4",
  "key44": "2bzxFNrP1yx1dePFGN1w6tZ1qcL2YoBgGpTrJ23NhJVgWtv1THPQVLJJpt8YAxQgYaFWLzkeVneQh5ukDiJeM9K1",
  "key45": "4pukjbSU7Y8xw1T5rB78PCqgHqFvJwf9pYpDS6oy67rCUH5EKspCTXfEpYYFRAnfJsGfzF6kTXc6gX8BeGjKLbVs",
  "key46": "2shCoMxMNtRVSjoVhHL2QWdVmUivC4VztpHTL2xpAGPqnwS8gBbsSC5jBBJzkB2DCYUUNeceQcwjL8oPTxjpyTET",
  "key47": "sAvPCpdDghs9itemMDXRiBBT8MkhvJXvghrXdXdiiuSE9shaKPbbNEnuiGHYzb7x2kQPuVEsTxKJ3H36gnRgXr4",
  "key48": "48d868VSbNXLB8oMqYcykoZjBtW3XeKpiPkXPucq92QLKhxEJTpH1SG6K1WvHqpzH3uSB1racBRu6acrhnSg7dgW"
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
