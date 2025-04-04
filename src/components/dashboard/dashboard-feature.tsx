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
    "26wjUj6A1gnvKnzikz2JzZchCkWQpbt6YBEqdERCfD68RESaJ84X57pkXdY3mPHRMjuYJR1VmdamUgJi2TPdnGDB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ndX8UyZKtddcxGULHrtzMeLRK2denjaJ8XvWa6VQAfYjBUiU9ACjN96SePKUEP8Kx24jpNWvog7LAAjftFeUBv2",
  "key1": "2ySS8XsvdHEQa8LSMvtVeH1pwdRtsM2JtBnYqb8JN4smkSHsCP9fKXiPD1mNdUQkHKiZBRY5V1YEhkFzATpbkv8L",
  "key2": "4rfxs1B7GcB8zUg3NcihjgFKrk9JGMHCtbZsi7arJE5P2Z6X9hPibtQa3wLDWQWQtCSkNBC2Mdqdi2fiHHW9GpVh",
  "key3": "KgmCeazuvpceXP1NfF9aXrqTHUrWpF6FUkgE2Q7zQ2hr5ggb3VvVtd5ekRXDVFcyKzo9cyktCZrruEQfWyGWFJo",
  "key4": "dRZnUhbz6ZZ9H3vP6HuhSNAoYtfaMCsHiEgoQUg6R2vNHWYJCyLLFHRpZ6D1rHKePCMCCaQf6RMQC6iP4jmBfmf",
  "key5": "2AqrSruke4FCGLrihdU7sQkW7ABVQhNTaSXNwSKKWVUbjjpHthrtEEE8uBi6V5Fui42Xirf3E46s35YaywhqNCmG",
  "key6": "3F4hHCSfnJjmzLd8bU37n37YYb15YubVhWPKGVqpgAUedCfSo1EzKiACQ6UcuUHLdXbtcEGPJPK1d3nHdWYywkXF",
  "key7": "4MvvsAYtN1G5g31Bs7Bo9GAX8NC4jkGpk3rhwp6uQWqEhSye5o2tnGRjpUwS1GT7kaNF9pHUSqEqaYN5zusFY3UG",
  "key8": "25aRZXHgeJgE13uVDsqq9AWu773Me2xxU9kChfaRcsSLNse9grjbSRYE5SE8hkDpXYBkqGQydxnEfMEMnYQvrchW",
  "key9": "5Kv8BESecZMqSooBNxb9Q6nUJNe19FnHXrtfoFS8EVpmvU8JkL9urrkMU7J3puVao4zapoDJU8SSaAh57MAUsfNx",
  "key10": "4T7wAw9ECKXkk5pyNS4vCASLM9FmDAvumHHe12jstaUBbTwiFYtmjpUjvCo45o9JNkKrHgTvPirMKGSmnEJLRaeb",
  "key11": "5zcLwJUvzfA5QccsEyZMggkCscQZnFZCBkfdLdcDch16kxwtijpCMfcun8YLAkwopyZ6HnnasRADPZkKpGhqg1UZ",
  "key12": "2dy3cbBGA23uX8Rua75sCLF87inhszS6GHBrs48pgmek1GvyZuxGTP9d4YwmhcCFcE2Xejtj81rtHDitcUfSqnXy",
  "key13": "4cZTsVPXpLGbWrDJGm7MQ8xv5DW658sm4FYQ5rkvdLzJthJhDmM6yQNxnaAm3fb1PZFThhZ69jXkgKJijbdSkscA",
  "key14": "3TQeRcCiF3xU6kkbHdMio3id7CgbQds25CYJdZHVBVnJaktptxR29PZ7WJUmSJjkLXt6oENfCiwwPvxY3VMhzfXL",
  "key15": "8gZhS4N4knC7YuydNyYYPDHgEUKRpzn9zEVgf2zxg7Eb3i8XZWKzQ4THg1ywivs6xojahtnPujXR645muZuJRLB",
  "key16": "oEG2xfyUWKvQgVAEaS8gBfAnX7ymsCz531B9eiN7LF6UYBpsfLMFTiw3DZEKvWbNPdCgsj8M6NtDm4aV8RKMSdq",
  "key17": "BbrJBn4eE8u6dbh1PPBfKZ9sfvMPvGXtScsh4XpSSW6y9ijtMjvy1tQd9AqZEXcz5eEhWL9bpcQCYSQgobn8kaY",
  "key18": "jN1FMZ2AgomQFBamDkeKydF7uqEdaubi4HgvXjjbYAGHwZrJf6AmR1ocGijTGvndVDdQToBnTDNm3hYVrwzGJUZ",
  "key19": "5Ugv38YgstvwpJTsxnM7XhN5XhiHL5YKpn78zjxkaMVgpmENexucXH5rfxCYEihSaWonmkY5u5tfJswVrJcZoVUV",
  "key20": "5pprDyzw3kUpSMnwmPAGoLGaRZxZH6wc4pPjfModyj3aom8jUJMBwooqQDYK2pNVAeZ4yy683NvHh5Yqqi9Hfv5z",
  "key21": "2FDauoKwiuWWYJobTjKcnq7WmGY3Rg9EBsB5wKp12Q1VhjJ6SHWfVjhWxeNkfFDBc67mQ5h5iAEq5tZaCRxbWq3x",
  "key22": "31SpwXrvkKYsoHhSkspUJpQuevbpxY78DtnjAMqa2U4qNQRsRi6r1mKn2FqhniBeL9wuJLYQptPSNvaunFNBzNBS",
  "key23": "57cWaL4fg7pBVmTWb1iyK78HgFGmxY4MAuZaMcQ6UmVRrvRPdvEtDacrpTQ7fo8UzcVZuG9pMoAUGFSvRjhmPkev",
  "key24": "5UYfzhh6d7kvNccQSX6h671BRQEsDYVwX4XcN7eag1H26VGaiyFt5ZSMm5zWkVQDFHMoqE82oDER5J6BaBg31kde",
  "key25": "41xShZm7GvufK6So4GTxVCnTnVD6qbWsDvv94sSCV3Q7mwEjfDo6PHRR8tTJv6s5hrEsiahcPUzb9zgp1mzAqz5j",
  "key26": "3VrXvjjURTtRWj6j51UCNarbK62EcCZpmeDh3v2h1CSj9Yx3hpPEzLW6JJJhB8wBiR6h3ScXFwDwkrLdijeByrkV",
  "key27": "3JJ1nBPg4nNsW337Z8KJTUL4CF7ntiEoFuMMXx35SCj2SGftKn2gDVRaDtwvUUitAmG4s3Jx1PMTiSWMyPsXESvM",
  "key28": "4ehTJHmTJQfLJYERDQX8debQg1mTqTGDPXSRWFyVmSQ7tCcByDLF6UA7bWAcRGGQ4BeEpMSnfjG3Grh5i6n8VbsP",
  "key29": "WWnk1UXGj7AE2TMNzWDCJA1sZWwnPcmSrPJ2moedXeFthGGmaHZooAbR3PZgUWmE2nyycCb9Jm3m471jXRyegxt",
  "key30": "5XqtpM7FCBoB8KuepXWgsV5M5wRDnBiHPCjSBY5kPWg8P2PVNuzS3Q5B9xJTmXmRHD4xF3Yo4Xb7esP6xLpTazXm",
  "key31": "4WqMWeWCwsYSLY7nx8GzQ7UYLF6PKTm2cYvxKRZy7cdLw8BARWxZ77u5T7HTtwPnPMrXkP5aa9urFJusswqnR65r",
  "key32": "5JqvSHLvC1dh9DPEcw4buCJXvtc45QNWrZ4xB48ck979U4Z6jsWGo5SPhQtwnoeRXGZpCVRjhx2SBGqgnqzXWSb8",
  "key33": "2VhEHkcxb5jRkUGNaxsAL9aS2enbPLLVe4Wuk6VNDAEb8YxGRpsyWVk2fTcKfdLUKFf6kiptq96Mye1dWRkhKnUH",
  "key34": "w9s7SYhKcuo6W8HTqix24feiQo7sZEHZqyktCdG8goxAkL8ravjWJJZNCCQxYWdk6nvnbukRemyiDevZH7wexWJ",
  "key35": "4dWxT4c94hzxJvaEsJGKJGx8FrkJE1RE2Cf1ctAJG1cdz9GVVHjjPZqWNpp6XstqHn8kXgs4rMfMCFyDLVZhrRjf",
  "key36": "2Cen7dr96BTizkDsUsJtfPKvCHD4ywET24ohbiDtjZEf4cAhf7XF684iqBi5iropAxcsHU9y4W3DXvDzFFPxYUxA",
  "key37": "3475rgpdBCFS6TnJAxuTFTdUGPgYDx1BA6PMDFzeXkZpoEUFPfGpdq82aSPYos64RXWudKrJHdy3oHzfe6rSUoVy",
  "key38": "5nJNUtW4RHuJGd3GUwJJKjP4qx6iqqHM1brQHCgHwA8oBQeEVCCH7cudUwfBmjJvS1jy21KvpZKzzCn4XVNkSnra",
  "key39": "356azmDMPKaSDYrHEZ89HaCQ6fK25svdM2PQMT7rUmFbL3wnE6GZnDeDWqgVAQoaaaNsVGDtDsj8qeJdk7XdFWAy"
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
