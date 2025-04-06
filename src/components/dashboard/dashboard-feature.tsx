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
    "3ZCmBeG1rsB39c4sn4yhWdeKsk4SUcHXbvqc6TVchui75D26QFQxcekBQrKQE8719paqb9Hiwi2xsYmLjuZaaeag"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zUhTJkNSudYXofVT3XpqnUmYFzgN8QX6jLAfTGxPnomq9KzbdGk1zGmAfjRnMFpKuUTcCUyE5eVLsjiZHV6opvp",
  "key1": "3oXCHDfaDh8QDVw4R9zW2B69DFiTVpc3SU5W3q9JzHBcG48Zqh3g7wUqF8H1G6HmagVZk9N5yFJTp9rAHCrAhZYL",
  "key2": "51wX5zRvyZpf1AMXyU68Az7p2bNx8HQsFLnarWrxKmER7VPtU7DRXeBFBoeBNQ5ftWTFPQFa8jGjLXQZtbz9WUcy",
  "key3": "bvRBDeSRqWKc9henGh5QRHYKMsHcVqUN9C4wf3uaSKYNW2N2MT5EfSM8sUPf2WgjWRJK6g91Q97qMGqv1vshVkW",
  "key4": "3JaUwxbHVQEq5AfSt1nX9ZqW74KFbF8Z1CvubV3GtfXJfD2J4UBvWoTRBjpZkf4vPtEzBDwX6LVDQRQEpzoEwLKM",
  "key5": "39aNKD7iwu8xCXGDaBRCb64Qp8GyTq9b8A5kjDW3oWMWQgfTvej8X8GkY4EnVehwpz4fecsQNk3ihrU3r6HoQSPZ",
  "key6": "4DH5njN9j1uL1ypj6QcMfLHzRU4GfxHwW381kzsYogmmff6M7wuH2DD54je57x7D6r6d7itRCsr58Hs4soB3DRPQ",
  "key7": "4dfAqDhW32S5nmdq2qUkT1musNG2MYVErsVYU6T1hq3aq2AcvXj3dMjCfqdSUm8bvvbzmzNm9LsWJP93CHbCwn6r",
  "key8": "YSmXnZK6iztMGpwLMYRBzXFJyt5U4yz76p7ZLH64ZE28ohf44tKxG5tH6HpzGSGSTwxEiASTnTBSyt5qftv8KJf",
  "key9": "2sGGacCGuGBRsw2SBRUY7FnHecrbbngg9Q4AnRzG9qsXxaTbPd731pcwURZZyasEQVsTxtZgQPAqeMv1zoE4nbAq",
  "key10": "4ZpSwjzwPBN63JERoS1LiNqaqWUh6HioUYDVcf2M3iyPWNqS4iegf4WeHcGhqCPmC5tRQ6vgPdhoPxqNRfYLZRVa",
  "key11": "5Wa2nTkDazBaRzbhvSbcJ3G8pWkurKueNzp2T2NmZPcHC2THfqbGHDPMzLd6TCWkqt2rG6LgUSGXzR7SNwtfMZWw",
  "key12": "3kPr2Uy1V8fFCcRya3W7waRMx7Xjw5Rk1tRDaBVwTBhS38v4yM1tizqTgwzvLLjPYRNhJkeNtiMDRmWYw7ygRTY1",
  "key13": "4xeLsxjaXe3aB6VYeFAK7zmRkoCUoVn5uu5mpTdxothWQMuUy47upu8DfaqQQxiPaGGkSdieANU4E99wQbS9QNyS",
  "key14": "46joN9PunRWG3EhHTundJV6PJYC83dU3pX9DSsMm9xdKgKFHJDCuKucRYWZxna8QL3ADRL8u3LBMceM6qZAc2F9T",
  "key15": "3ZRFodQxfCKHDqroYLUrDxvKoMUVGhzwwB1f99PBbAnbSS5KSWxkhw5rLtHc8UKw7DSZCUzmRgWXcSKcCf7zD3xX",
  "key16": "4Bet6my3uReRDv2mtKerm5QRse2sMJTABWJwPsoreSDWJuFtQ8KJYA54KpcCpz4HtqXAbyL2eSMskFCHSyKE5GRe",
  "key17": "Mb4nPAWSjhRco13Dx1U7w79BTGRr6P1wdRcusJSdU5txgDejcbUSdEm9UR9GtmSCz5a6RUUyto2AqBxjGwbDiHG",
  "key18": "2XVRsykZwaRZ5VjFAYKDuUrhL1KYTjgs5AZBRFLuxcBb5aK75yPNdPVdXui9eLdhZ8RhTMRXFh8L92xzRaNvJiZK",
  "key19": "4j2fUdeAGwe2GazA5RohxUTM4yWvXSo4kZvSFBVXW2FcA787d2p7E8GvY11rPEmp98oLHvsgdHP5U6ajgkCcLYsQ",
  "key20": "64Kr2FsdjDQQsNrwiDab4xfyXrr3W4FfLR6AG8fzfknSyMqDwhsvZ9FnRqcJjvZyjrW6vxZYY46y3x8myJGS5hLg",
  "key21": "JWu3HXPifFcBB135VzYP3TsYMGAaFh331bz3rBQA7f1AhTbBPgBwgVWPp8LmmtkHh1Ei4jggFB3L3DfyP752bEp",
  "key22": "Ghx2jgCHEA5rHWJiB2j3aYVR7JB3gw3ceuYUBwQehUpSoJCWP5VzMJj5Gf1TaZEgUvuiDvZHguyq3C5hcuH8mJ9",
  "key23": "MNNCC9NJ3ohMqBsdYi7r2Sf3GauPiP99cAmVFFnkYb5baG8bafmwnTWPAM9Qr2LrF2mv8i2ohBQ53U7YLtvKh9T",
  "key24": "4n3VwA9ZWCe4uWz5L6fVLicB9BkptX1gLSDakeKfNnpGtHhW3hEbcJzCsTXuuQZEi1D1p3nhNhSRVq2rq4uEskDz",
  "key25": "hakMz8Qke9xyfdu3Bj3fh4CiLEkSFTtsU4pepXCk3oBk4rgcTY1cKSDNgxmg7RmWmy5BVMYcSD5MSVygiN3SpgS",
  "key26": "yJpuzWDGfN3iZM2etMzCW45hbcM4Np5g892EdYmdhN71UesaHZi6Pwt7DZHBi9DqNaCjSUJW2QruxLkWufQjejw",
  "key27": "4yrkrCmswL5YAhzuh41R6B4xoCEVPkFeERh8kFg4PpUduJNpg6nDmYbdP2TyvLFmH4e7VBsvRkjUwmir1AC5SZtj",
  "key28": "5y31afsawPPcJWkvxyykZjh6SSrNnRCKtjJXJ1wstbDQjn9kqxMFwC3DSXnGUBkcVmkXHM4cHQp2LoWeu5e1ufJz",
  "key29": "3Dd5ZXK8jA7evA9tAS5BTy3NafYV2kakFLwG8u7aqUSSwBqyPUYcHLj951tk6fGzc2Zzy5wF7ygmtvgKAZfcvgmf",
  "key30": "4hTuw8TGEo2QidDS1dfSxGy95HqNxe5Kz6sLNrZVqMtt9J6ZGjPXu2Rt1Ded5k91odKfLRh6r5o98M5dbRHd59ZB",
  "key31": "4e5fjWmRa2qhNmPn9ED42EBFVB5yQ38VFAyhoqn3oWDkatMq3E4jAtSwpdqvTpTnHGnap7D29g6PknrnCFYkdaWZ",
  "key32": "2QdGPewHkRjEakSKYdxjyvfA4VmfnukJNePGtVMYgkh5cE94TAKVV7A8C7rHnAc7Lb2nnUojeF7ALem9E35a1pVC",
  "key33": "5nxz7QLy1BHG5def5CVuZWbyApCqvycRSV3yv8rrNYXMwsurxPJLHh4AoVQDEZhw1b1XnLetPv7sTWq77dD4iRkk",
  "key34": "3z5D5sruKaqAYHEa6X1iHrZcS8KGYrrwW7qJ7FmBFsfn7tnfqfC7MgBKj1K2Srtwr9FqwHM9fnCt79jLnoheYtua",
  "key35": "2rFZBXFGdJVpSx6NFwQhg1Uj6wvmufrtWet14Byz9Sm46NPSWsdQJXgodiYe6HZSfCfyMHQn5jQ6cjfuS5k4eXNS",
  "key36": "QtT2qouAFsFCRaYso8xUoZ4NVCLDASjR6mm5JEG6NwcM6mnxCfWYRTrqDXGhhzJCGrvF87QAy9qHuwr6XXMggFe",
  "key37": "H2EJqGwqrjasMHyFBZyyU9wQRLWJAW9vqL3Gh86xia1egjYsRz5nfMrBWLQVZcRhvCAf8UgxanUXi7qWc8b5FpN",
  "key38": "5jTj2thBten552gMHXaL68sBLcVEx5fFH6QpG6c27qh7PfvLZZZtTrodLLov96VkZZsG33aHYRq5DWVYAhTYJHa4"
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
