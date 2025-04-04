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
    "2tzpaiiZkw71pLxQXeWzpSR9vPupLA1WAo9zLmgsUFVGNJnTX4RA42JfaUQgP97GMVt9zMfMESKD21Yx2hoeoAUg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TURccemxZCKD63jhxw715pPsyf5JFatFMpC4SfSdmci842JSM9ZeBKnCAguosaJ8G7oAFvWSNecWwmVEaUKKsjd",
  "key1": "1ya1xW7Tdtb3FKYFx9fkKJbiZ2TJ9yBueW6NENcEDDZBDZkzXndPGtsCWDZPPBGD1pEB3Q1WZKkKNHBMK2SC3yo",
  "key2": "5J5qCmFSqziZYnUonDNfsuB9hYLdxyDdBDk1ZfR4cawsQ24qYdhivCfRYAyJtTsphrT9vng1aCWFXyfJyYXEHVtR",
  "key3": "xjHuRxnE7u1TRRE4PwEg511R9nL4nN215N8cGvbWAHE3WihtYrhncmJcAr9XPXoLedUWDUfJLVNn6ZGKKCAyKL3",
  "key4": "335GmszL9U37FP4BvwaQme3G8U85vjuLGfFsshHKUogu85ocm86Di3qhapUMsmWgD4RiruN1xGdf2HWuhZD5HU8k",
  "key5": "L5NHB1tuf6nyqCdunVyExPES2dcti4jSP7XFWjBM1ax7bCGqEhHm6TBFV4xVLy88NwsJCcBZitiJNGHZh8JEXPQ",
  "key6": "4qcJhCeZjudJpmH8MxdR98H7vAe6dCp25V5BFKPaZZjPUiYXzdV6wp5qVdJf9uLwTByctXYz2gKyXkcXW9TdzhpF",
  "key7": "5jYaCJwrW1EWY1xXhHa7ekpnrLWmWd5E6yxvTGqXEtaGo8fSeSpWYSN6GSkie8tBbEWqiXLWUx2D2gt8uBGZNu6E",
  "key8": "CcvFjkcthpP8LAbqvz5PLAUQiQZNPqim6ZvdrhLkGGKn6oMxNLKJ6xpHE8wdRDtM7gWzgaJWSCy6u5Mu9YBcb8L",
  "key9": "4hubMSVA4i2yQq3iwyj6HqyoNHrPMJgTPec1UkwQrcQDDa3antLHvn17C9csTYLWA1K8E1iMoLKnEcfJTCoC9MpM",
  "key10": "4EVsyW6osu75NYCm2WXvSsjtBsWg9hBqAUwa8NYzit93nBLDYV1P7D73XBCT4SEzDANg1Qt6V3ErLNzZowXT45Xv",
  "key11": "hEKYrA8rLhs5JGRkT4GKRE3m1c3Lia9vSpEKbRstQxVmc8kUm4XxJR5Hj885PdyG8Gn6rCVig27Rg4X3Aui2jU1",
  "key12": "4gEbUwhaZ7GiVvZHjkupk7kvwS2nmV5bLPVxqtzWovHTagEGogTazp2MiD3ehuCkBVfKYzmEUBWbXFbXvYm7fHZd",
  "key13": "2DEV3V4vLDKjKNcAnh13x5mFitAvtbUw6B6KKN1qE4hypeQMUP9JkbpKB9sxAk2xb2TqqHNFXWfPdyuuThDojKQD",
  "key14": "5XbeKbfuA4jBPYNTg8EXWPo9uBcWwhLJsLrNA6Sbsea5dXEqHLqADeJXMUsB2m8fgwXwjvYDs7i1RGwsRpvwuwdP",
  "key15": "65fPJeWDFzhL1bf8Ps3PBiSHFtqnxRNFdjkJZ28WnnifntEQtziKfiJPQgU7kkS2QAYQq1uaJUBG3pCfcnE2a1vJ",
  "key16": "21xcRsNzbNxSs5nkGvGru47gSU9PqXpPxXxDQYKHTWcS6GQ6ZvbEqAGCbrYbGYPEfyDvNUL41BBT3B3uDv9Dx75e",
  "key17": "3FPskiwvUg7r6PTQgxCEXfP988SJmNoC3khpdfaphayz4wfRS7Czq7FGUa26GUnY8QQhxC18yvVe1F2UoHCyzmMS",
  "key18": "5XP2AWW5a7Y2e5sZzjpo717vz88J4T6nm8AkRrD4LjdhcHAwA8xx6c6Ek2AJ7xVz9Hw8HVwBSsyYXAz5veCuNfhR",
  "key19": "5uy8tKQg27t2wbbPE857ssfGGGkPasyTJYUTpVY98dBC9yqxTe22c7iQxx2njphfQCo6DVVAg5NChdLVV8Hgi3WR",
  "key20": "WWqdwjfbHwqxpy65xmwsdJ91UkGmXBHzkVC9QQ3XTQbHPW5HkWP3ZSF1MmVaqv8nH5Zjrf36HT72EmP3knVuBzb",
  "key21": "2R1pN3pzREX7zuZR96MDKV5aDV9Ukp2rKQGLWu84j9LTdPumhL5VFxEDRwWZwHjt5ecuYGa9HmvH7ysc5zpsbHxc",
  "key22": "8GAaKbQrmEgfXcmciHLPC21D2oS35T7L7AhaiwF3LvEqrWZCPLewwkBzzbpHRQ8TGVGWRZgmetC8iJJBUuryagE",
  "key23": "4GSKfikvVjXTPxkb5TKd8hibaCXWNiaP4BcJMPSrraWMQ4MW31Re7oqrqddNHXnpBCbzCxkBjcPV2BPkjn2pBsLh",
  "key24": "627buBGaE2DSYV2cTQwrc4G6tin7hpirvSWfgQCXiUFXwRhd4nHLJRNQ3mMae6WUuc8qk8DKPHBLoojSytNS8eeU",
  "key25": "59bWaHGJbAEnzbwwPAx27DVvNUycrmitw1NgSdjeGF4Z8iYvBTEWVwHkUGsgijeVzMbcULWgzbZdmhpQfRTB4Ush",
  "key26": "25gJpdSGNKjqr5N9T76HV3EUWERxP8RhaajeZjHiXyS1CDKfHiWRaMqGwaz7sKybtveWqVBQaoqVdtx2Z2xFARof",
  "key27": "3Ckd9Juw1jcRVHEBnrTtFqydocJGBZYRMUGbevSDTgAQ8DBETpiTuFREmjBvpvj1xQES7p5vD4ZWY2APiX8PKTek",
  "key28": "3FK7UNftfRhhWVn8VtemYQvv3fNXNZqo9UL2KNKcRRkrRivGnUBu5K7NPtigzTqhi9dvUi4r5iRYge5fH9XLkCJo",
  "key29": "2r3h66oXizhNHfcdimNqF5jYi8DRWcW4PR6qrzS3KZJaa731Ea9vV4WepwdQrvBbDGeYJxbU5FuHC6YxpaN9sVYs",
  "key30": "4xZWPrvXZEfL1UtNUjakCBMbnjUQTwPBes2UbP3RZ85iwGa1EvWF5vYfpPiw5Fm7t3jWt2a5v6dHJHENaPfUg7w8",
  "key31": "2PucDvj4kqdLiy9jBf7zaUFkq41fLRnKDrVjquhefxCys26EcUyhkmiRgqNYFYks5i3pkoAV5yd77WKYdqtSHGsT",
  "key32": "5JzMu3CGWu9KBLsiKV5QDuNAwzRkqaeqVVz8ibxFAr2TrVsN2csQt9rZC7sSND99vQipgj7wpe6RaYyYL7rArmdw",
  "key33": "2ovTNnndfzCksXGg5iWcEzLp3a34AXx5fUGxVnFj3kdLiAYxYqsnXW4EZMtfbf7GbokSqPyaZSWwMETdECjrXH3i",
  "key34": "5orSiZqGVShVh4XTK5QkerebpdbsRXeDZq6YKDzuZg6XdymBuWsHQa6sMLui5XJvQpCiqVtez2A3BQhHArERTggq",
  "key35": "85CYwBwyJsdD6TAyBZtuxx1PhD64KVvGUVuzQ79d1gwqU6o3wFqE8Uvr2hfqxo26bvQFqEPwaUhagWL9pfxyPXc",
  "key36": "5Uj2GxCHr5SbM117mNa33AbBgrHSPFKqZBSf1vax66a16yjpV9USQCrGbZMoZbb96P12t1wmRpnYE6TJcCS94WGB"
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
