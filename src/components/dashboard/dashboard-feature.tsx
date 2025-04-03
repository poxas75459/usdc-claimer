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
    "6mZgHkXmckHDhCx2CE2HJTfMRkDZ9Rc3hTrUJQWAmqbxf8bnmL5VmQAnfN9YqA4ac9Ke4RX4C7vXLibU3AtnT4m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Qj3trutZ9hX9kf755JbqRaugAd7PS6dWX7u8mqzVwjiF9aDH1nWHDAX9gZsBmc2VwfqR5TpFRt5LQzu6P3eKmU2",
  "key1": "4y86j4VD9ocnFskszzfP3HkQEsTPq1kXGLNHipZg9RBwBLbC6hFxvemLqkoTpakusgLoons2rH7B9JNrLLA3eMgp",
  "key2": "R2tatBGywuD8F85mFDB9VNHKL3DKgMuHWtT9N3YWTdRpFqBQUFfvX9qcgFf9hfYnviF2gfyWajGSMz2sSX3YG4o",
  "key3": "499RXbqJvM6vHdgCJc86iRDoDw3ssqU5cYEhLykNS87so4WPqT2eEVPkFTMv2AcUDDYeSszuAhfNNGtZ51Vnq8pA",
  "key4": "567sT7cEuMVrLDLh4AW5zh4W3AHaKNDAp2V8GiGfdTk7qzZXk4udMLPvJFbDXsbGzv9LKLJ9DRrXToWURkhFPg62",
  "key5": "2Uj9M6rr4Hj2i4CkrXKR8SyfJFkn5emidcSJKRkZSw9PKT6GGcjBcBxTF6cVJvCDFsHEbQdoGUXPm8fB2kPWbVDR",
  "key6": "5mPGhFQY6aoNZeugNZQhzvMFctnhG6ud11DP4n7nTu5rw584Q6y7YmV7vztqLRpbKTq3WPMbZm5t71Dp8193dgFG",
  "key7": "j8NiATqnKsXDnffN7cKJis24xUi1dAq3zZPCCqJKDsviFyJv3Pn3Gc6aWQimzxBjLRc1w8nYQMULVVMptRhD8Gh",
  "key8": "2jvSD2rbkX41otM6kwDxffpkSKDPCNttGrt9yYKNhmRTtd6ASJymecYb8sfps5zh3e5t2xRAnmsbavf7JPSjEGNs",
  "key9": "2AQydinFtDsyLKTrWGWubnmF3th1T6mDRMkDffM4CMVjbPbWeBHjRyAneVbVXZanDzfV8zH1kXi5xf1htJyW5tKh",
  "key10": "399HYMRkdiBmyA9rf8uxT8mzt5TVC19zV6u8TD19kieSACihWdF5ZnnJP6FpnnhAgnNHccNgoMbBbbrHB4Hd5oot",
  "key11": "5NVMVtrZvmm2VuQGz83Pjm8mjU5ozz6Zus9vEr64jhgsf7k6FhhC5cSgB8ho2CrJ3JfZPWp9P85YrpnPSYspkYid",
  "key12": "3Nrb2Zn5AdnyVPqxDWkCiT1fEmvjiEF6a4xjVDKeP4PnX7zk7bziLu9Ec1SEsWMZ99EDuJY72AsiG21g9nPqAi5y",
  "key13": "5Ag5LHPx44SdNcznJuKWFcKmfMe8J9g6Au5HYGBiBRWEF8bThszJDZyN1ukmjeGFuyHYSdhrsN1scdBoWW1aE6mL",
  "key14": "2yBfQPa2py258tKW9Jowm5dYm7RZU4AAm6ScCyc9oRdiAkj9CfXFhG8xRhEzSLfuUomfGzvWUfoR8yCPkedqZ4cD",
  "key15": "2LXLcbKhqdiit3SuxbfxqLXhv6h7UiKEr4pXi9TXsaejBsVmcw7WmPpoEXuQrhjxEWynU5U6TXDomuuh6vgBkqZt",
  "key16": "5b9C4Bp8CXymLnKDtjKAUB1BGpUSUuGUZtp2YVZcu7QRSc2ytJSinJN25ijn22wNc3k8bAcVANbYLneFBUw5B6Jf",
  "key17": "4J1SfW6Rtu4wZvZ7Jr4GDQ5qdc98gojXxv47yDg7FfgEy8vfJB968ZTsvjqZpUXZqhTACJUw7n1LPXCuJsdXvPSp",
  "key18": "5THxTqapKif2fcGBSa7D5HEFVRtf8KvuTTz5wyHrhboVwmEBC2e4icT3JP4qZSq1d99dSgq5VrQGDbV9rtcEqk64",
  "key19": "2vKfKwY6FexLPbsTZwFf9HgNKV9bopKdPbnhPTjgCZstKHFLCNhiDKb3bLACZHr4JdYgjUSytSWJTkYgRQUChhbF",
  "key20": "4BwMiKMAQspUWnmZ3qC2ydJ5J9vf1YLLbFNxhnCWKPJUXRiymfT9ZBaCbQev1j5P8dYYVk8kinymwywJSoB36pJh",
  "key21": "3u73bpSwQQBioFk4vKkXjmQLvMQfyhdgStpyuvdaDbQARz5PPz56h368iWcDESG4aSja3gZprdmZVQhLaiwsrpSt",
  "key22": "4VRnFSSLn3WGt9WNYtR1BYjAn6YNTEnf9rE8gc68pjpvX3QxZfwc2cnFJGNz8QCxiWBW48mQeNyLwmCnF2DZeA4R",
  "key23": "3RQSMhHmvQ8VmBgcbR4sQgaGFJBsCsy6Gk3s4wzZGNDz356aogdnaCN35DCXGQbHVfAxF1f5sstCVqepkt8xxh28",
  "key24": "5S1KUqybx9AjSPoqGrRG4HEQhHPYW3mHQP2o6GpVJBi2FgEsx2og1smYBPr7zr613TLbg6dS3riouimWRtZbyLMk",
  "key25": "hJUx6RsL9c5NGbksEKcnpuBntJCJk6KsqFvpAX7MBYZLmnG4ZuDDqgqHqdf68vLiQ4hf8JvEickRsKsH1hfLcW3",
  "key26": "4khRXqjXsddWjLQ6QZUKt5J9a4tY19d4NdhxSbxhdHHnUiFkpriRPkg62kNg6ZsnpTwNnyxXA2CUcL2tGEAT1tb7",
  "key27": "249TSC5AEDLRcx68c61azKjByxzbnRR9wAR5BFz4R1VCJf4zSeETi1rEtnu1kKj5jFfbWXAJyNCXWHdGZn8X29k9",
  "key28": "2jnPcq36RDhmUNiJZSQAUmGqgg3tpjayLUtMGoajUkEgZuD45TcoPxc1KitQzbwDQnnW5vNZ8Y22rr3Dmkt7mYiD",
  "key29": "2buheLX7pmkmCm68fJQutAQXDT69KvGSKRLipAZp9ErARE8nwsAvUgD4hgSau2La8mExMkQJBLKdbQVKzCJeZtnW",
  "key30": "4mS6iSrCMxSbo7767dyF4yZjmfG7phV3kGLhf9TahCdS1mZWzZwrFYXmLouYo8TzQVHoG6necmp1jkzD6EpB4et8",
  "key31": "54FFtW9ixCDv3FvCtjFcyhJVQqzqxX5msNnpmniMhEwoMTceqvSM52Xe8rTggVJSv5fCce8kmsFMn9NuFa3JpaGL",
  "key32": "3DBaxyHi8bKEaVe39CMunCiYiE4DosGFkDGfFLjWmCBEukU9r4siEjFDewY5B8aHTVyrtDPSZHH72QaYNiNanG2T",
  "key33": "3XQnC4WGRAvctn73LR9GS2ExLbKu2W2BcJ4d7JSdmGZ67VeZQ8dpVfM72unR1wpSFrzmorGGZPF2GDjUdxpowNBh",
  "key34": "67AzgtSUP4Rn9jwuwZ85cYVxFvqWVNZ7e4jmqoX7CUeUCWWjAuy9Gi9PXUYxTfDrLxJGXTdGReGEiHFWggPsNogN",
  "key35": "3tUUSd2V6ErkrEdiGbQ1zgiAJX3VftrAw4SrX7PwjMmEhM1XApe33pTXmKjev4oRjSu45jUyzHeVjU3kjpmiZp3a",
  "key36": "3M6iNJcpXUDi19WENR5YGLQ9QpC13bLHVCnXUtLpBSAqEE2FppfZEXT4Saauiqkdy1qmPmyfifxyyemP8vbCEgPx",
  "key37": "5sUB1hADTnzG6xPFEk8JygXjh5HbFGyUyhheWycXYGkLsAZ8HZ4SLRbRgy5L6JLJnpLCh1savduG9RRWufZD6QoV",
  "key38": "2FPYnZ421ZZ8CdzWr14msNuKv18rB38pjgPfTYMWc2t8avEBDsZfojwTYfJQre8obFYCfG6ZcbWrqFiqe7R5d6zf",
  "key39": "5R7DYCTMTsn6iWDXFNqYktDjr29qHsRfLYCpAZPQGFsDcjt43ZAxaWgKjy1CP4PMXVm8wMZjX8jfE1VVXdTSA8sR",
  "key40": "41ktKvs64mpnAsnDtC13CGAkFUtcGnE3sBxxhRp2BQ2PdxaRH9ofcEdND3mW6YqzSqzWovkB369ZLBAS5orN3Kj7",
  "key41": "2zYMV36VCz836y19oA33TEMLPZseBEimw9kcRCEeheZarzuNyr9K2bzrjsthZPCY4N1JkFNJAMK1pHxLr2vNi6sv"
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
