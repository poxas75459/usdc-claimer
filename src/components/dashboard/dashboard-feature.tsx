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
    "3avCKwz21NxspQE1G8fi3EJgNH61S9WugztChUv72rSkuCwGDBr3ozk9254yULCYWHkuThGWrWCWBj1CNvjiJT9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24fF6WBtqmDTKfv7V4ooA68sACr5WFtAusvQdvJqq3ZPkiyekDUwsekGoMPfPgzutT9XXCxnyPCw5xYgHQPnHGFJ",
  "key1": "jGrrvuVQiq4jZ3ap5mmA5HD35nRidDai5vwuexRQaVpQtc6JJfUXDPESMe1E7aKRegtbBqX2WRGTk9C56inMiFE",
  "key2": "3qRGitF8vw5CNNAhEotTUWP1X5FTELqaTXkjpi7DSChHVqvr7CBpPPaYa9htSVBMCFtsQESPqTUnrEymX853dbp8",
  "key3": "3rJdRR66bpnrkyWcAmVybp7zfSCiiLDyDktdvbBPVMmrJ7HpMmvH7DXumEzPwCVKiYGzsfKkgeF1ye16nd6vVmyJ",
  "key4": "4jGNrNtmSQzmPT7AUvVremCZKZPTXwq1Pp8Jf8VySUjvsrbQ5CdhpR93JfDuqNEL75J9CLGZSk2f5m5ZnJ6nfCpX",
  "key5": "2jzRHQKXAHR2eUzdzqRTW96A7faKdmztnBP68Anjbb3iCfu9Gq3ESbseRciY2CJmUt5LatUMvLk2uecnyLmkqGwX",
  "key6": "53bT3ezAnaFB5E4vK5mCGoUHJVvZwoU5a9mrHVGEuD2QUquAfsQcxF12Zdt2dQVMwvSNZKR4Y6VSiRTxncTAtQPi",
  "key7": "5u9fraFdZKsSdr7WoZUUDJvwNaTMsC6mJdZLTw2UBGcGy2FLYmrD6oJgbZoLzm4nqLNzeqbUttpCw8Uhf4YnacxZ",
  "key8": "2vn4npzZossuHnkTvXaQjhMPgyYE49H6NuSu6er4V15wdpPtiXuWugbzzno1Fp9koiYrifaCLf4sTYYFNp2cKsV2",
  "key9": "3ok3SXPodr3VtdBCP3FuvzPt8PDwvsemF6hTPX7qjUxAL62XUh5cRcaG9e9cb6NhNbTJ1F4F27DCEWM5YiyQ7AU8",
  "key10": "64gbZcYco8o2KPoYk3MLQByrpBo8oFdKNFkjLsD8dtZGd5WkkYceA3UQzTNSVoA4KJ6goUmnCcMwvRZQvXmhL4J2",
  "key11": "DRJT8qD9hVYeCtjQZniYdrFspPFTGm7BnfsyV1ddk5pEUdiW8HFg1uNrtbDxVaT2zPuz5vJAbkBR7tx4yaNSWmn",
  "key12": "4QL5dWgwzDoxFp9xsPry9Qs2AgRrvArgb87VEpvMWut1PGTdZamEXCAt7okGmbi9SJ2ECquqB5F8s4UntxhDPhHv",
  "key13": "3CG6LnQLYfU6KFyPPzj5LNvnCcpYxXviEwfnqT9DtWXCSwQAujXad2JzTiFSi2fNGqM9jdA91ed4dBtuF6BNApY",
  "key14": "Ytzyz2PQmQRsbK1P72pVNJZW7i4doYeaqaicivqbnbG5k7G1vnUdp1hr5nMRbRhqhSzuzxVWiq3rBoghjajDsdQ",
  "key15": "R7FJxrLZCsxgRe3Y3WFVMESDv2dNJeu2AFh7WZ6R3rVr3vyRrRDebjWai5KXkCTf8x8HrHpktudcz4Q7itWMPuD",
  "key16": "3utVhQFq3Qfg7XExkwqXZr37wgK9foq99MznUbqtWQjQ4oN3emjtF5gh1juWJ8Aqx3bTubwJFw1ALzUEu4Kc3p7f",
  "key17": "5Gj6r9zmS7XfLagBMpka4Tx9c3QtsVAdoo4BwYX2BN8oStYW2XMVBNMxS65LWf4m3f8qGtVtXwaM2p8gCKh4PaAG",
  "key18": "36JsoLETDgaToq2fmSxNGX99h2TiffCEg8zU8LLJqwybadVHXwAdHY9giPZAv4dKxvWZdhdU6USC4gnKeeqvVgDA",
  "key19": "4NgbcoYPE34jpmL6SF6R6v6Wgq3ZK9JXJQo5CUiR2DMe6UQFPZEszhvTeCJzBbcZRcu8AjWjafF1GS6NCwCMksJ",
  "key20": "4JVpGUZUNTvCBUbA13xPqVUCW51H7dqb9epNJGVPyCdHcGzkcMbP5UmN5t592BMfF3B9TADbbrS3BpkQFbiTrgnX",
  "key21": "3aYnFjpUqAsRAMasRkX1huMYh7mpREWZf2hQ7z9SAWJiEHVLejh9iTmr5qscBSCgcfA6y2cGJtXU7fhwT4YXc1Nz",
  "key22": "rjw9XUVifyQtSeimxkeQWthyWDC1LV2VkzTNGSe77euzXQAHHwg6znDzhSig8XT8LWkoAS2LWkq1jyFoeWWJAks",
  "key23": "2hPHojom786epT2fgvZqEDYqX91jCoddxrfM1iKbspunz5G9ePZtTWRN88ZfzECZVQ6FGZmaynUKbRpuBHJsL5Ty",
  "key24": "5aUD1GWAcdZBhKAdCFRZ9ags2XV82MrRWv5qqYXvbzez6Dc1VoVMHJahLsmLgwBgSXurqtPeubzJWw8b1R1teQF4",
  "key25": "3Zz5CwoqCRm9Coj2nvxpm2ZyJhEBJt2RWTZ88xNshE8ceKws88p42iLir9JwatGPeAmJ12px9uNwj16M3BexkHKe",
  "key26": "cCpjRAxmAcW8FLmJrXbVKTCoLjEqsXBrGYuoFoLPQ9ikkthj4n62mCH1qcC1i9zB4ZivTn5NwHV6VJaz5cNxgv9",
  "key27": "3NvMvRnqTA4U9Zg5vGDxiowxhuGDhaY5wqFQnGuXFoMXMTeP3GTFGFFjz2QQRHf4pus6DB1VgCY5iBJ6giuCEYsY",
  "key28": "4rTy8xoKqoz5v52DTYqgQthK8vPGmSTiFbUo4uapukAXbRdLQXnUvnvMrBs4YuM2P9i7PjGH6SsghMuViPU4FwUe",
  "key29": "4xJ2tMA5CFJA2CoSZYgS7j4ozxBp5Nr9yzjeNEmBpkeTMZKqNRF7Su2FfmPDQYSWeSiMN7ZV6QJVjnpAgEv1qnt5",
  "key30": "4ZdxBApvbmWaL9c5mzPvcJhAGCdKGCJXA634EZxAaz6cNXSaKTPVKQo9fHxm5fCYGFRYhg8bGCkhdiP8t8GR6wq2",
  "key31": "3aQ3V7Tk8m8wkvxBmsktMY1Nc6Z5Z7M6uX1YEVnCPGPkTVUuAZqvhrzy6K19aMEfemytp37iaJgtM83LoS9FHisR",
  "key32": "KjT4SQTbvmm2DUCrPTmzRdFqPnXTAz5ZJUZbGrwPGEMWkWVgZNg2VzDAafP7qQ4Jw1G712CKemACGYY2CUSaYXP",
  "key33": "2LrR4XzXcxRxxsFPxRuBa4LCcWLkzg8h1k3gxRvbHp5eVdL69Q5Ckq5mbZSW8jKjdvW31CKWEU6Ts6eCWu6XKFRa",
  "key34": "4K2FMRNzvb9o3szF9e5EwVWQvrfjoidBArVBnXkDBU2WkCg6qDgqTP23kNduHhcjhHk4qpB2ycsNw8ZHXnjiuVdv",
  "key35": "4MMNhc7SBzMrbd2uSwCBqqL9FwQPxoU64T8LcfBHYqMe83ucjttq5AwAziJAJjY9enD6eegpMcZC3cD2cY7cjJyY",
  "key36": "4qC5xwej8C3G5C8HVVDPQsjGq2SaoJHTPkYurx6mETRxmqvPEfntBo9FWat6q4SAaBJ9gA47J8TZQtYSKha45gdq",
  "key37": "5u8tgXeU744L5qt25z29aMHZ5WMoQ7xxWD1q9Quo8EkfrzwLgPnvG5iYT2qLPFVZJbe915cXENzgTBhVTQASQsPF",
  "key38": "gnj44ak5ipULL9qQK8LqVGkZ1QiWUYGGe7D3VWWixD5XppzrmpJkCLiVgQ7adsp2s2rBvwRvF6PozRXg3oTSead"
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
