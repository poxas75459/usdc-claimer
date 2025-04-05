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
    "4qLtRp3tP3smbyvLySTHAtsdSprTZNaaGq2G171yEkipSHZeKK8SzZAW1V9DNVFZK7oVSRFGVKRrB6mdsVFk9dHQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D14Wwf4wzWR4p8357SKXv9Co2xm5x3FSuPTmopHif5XqTghAWA6jVFF8WoREgrGFTtPWnDHHNnHGPtUoNTtrRay",
  "key1": "4oSXm1MHEC4ZDk3KG7zwrEGXhGYybR1rbMiexABWJ2brWkLjMY1ywmFYqHbfRoSEyDumjf1ntRNRcQBBg1rTS6wU",
  "key2": "SdWDMyndz2KLVmcMFhwVsE9nbgKRAsvo1hKBHGeFru4zjDci5GfUggEd4HzyBUnthrTbob3A6f5L8oQ8dKcfzzW",
  "key3": "enrGAkRASK8zw4PmWHjxxoco65MeaUMV672NCnppr1aLhPdJJJUeTroBaTtBv6qY7DcDVR4Ls8nBSXsdocXykEF",
  "key4": "5vk71Fm1qv9qeCfqygYohChLgF3ppoArNcPXKbgVZFvLpeuMgt7ijxXBDCnrWmxELVSWmkwUGfcPMQx2UCG1cmgm",
  "key5": "25hMwCyLJvnXqg8nEh3kjAxtHpGYLgKc7BnX3ckGaoUayRdPZ2NRmbiAoPGKwfsBJk9yHwXjyigyTdRFkSLByzYN",
  "key6": "nErCtDsjnBda4e2zK8SGfC3xYSiuXUbVj5ESGTc58CitUdqS73xzvM1cWuXWpYcFUEF3KhVFQTbJaYiaC9ZY2y9",
  "key7": "2C7K4kbFJ9NzqeGSnp3omj4n4SbCWWrt51GPqhR4mMXHR9FpuQfni4RFnpLnaMMjpgYcN3rpHQNkfsyVn2jfeT7x",
  "key8": "4fedyZCxeu6gU8LdBSc22smbiuhBVKVFUopRaMWA73DziS464znZPbFWtgZxSjCxJqB2EtE11dPAm5EVUSVYmg8E",
  "key9": "udVVE1uEScxqbfnZez1uaddux8abFPT2w7KQTipp3bEXEp2gTh6T88B6SVq3HjgJ2mpDqD14myoD657zHLsnu8M",
  "key10": "53nNwWwcXL6htJWVz9qr42o6FsyLssLceaMkSQwKnYorj17h3Ptftqxp98QruHnC5EUDV8daAp2VyHvLZFPdxhzh",
  "key11": "bAAzGMdGWBirb3DQZ6MKFqppH6KvP7ezqByMFHWAJA1X5yZpkCfCUqUvQFsArxHZtaXqrzrU22yF5DyXsxyR23j",
  "key12": "q4f6Uhi5LZEvpTMA3aynVbtdw4JcEWSnjrrAnkKTSgzVQExhXR8Kb7PFVAEM7B7CDXWRiMyeLMy7WanZwgTqCm6",
  "key13": "5MHRw4qyojyg4ChUb2djQWxJcTz5dxtS64KoY42E4871vuByNCLJmfUJ5Ybfg4qaVuxEg3pH8P4PcigqakoSoLDa",
  "key14": "5bNB6VWUTKXjQjSwzKAUbXvrBcqXBBpwzjxaJTJR9KVh6BDTGHX1A7H8hTR6P96RSqjJ8Mfr9UoTmFBGxYjsriFh",
  "key15": "4jZjGRmkBjaL6eVnVadZE5cujQqJbzvVH7cSEyhA1h8jHyqEWQSn119fFgJqgSB9Q3dFmSEjeDSUuXGRVeaHQTm5",
  "key16": "2NdC4KJXYkMFKYQY7BHWFynHrXUEBEqhnBZZpofnp4fTSyfQ6EUPNVDpAtpnAfgxgUHTN49D9mtV98PCPL6WZT8y",
  "key17": "4fPWAeVbvc5KeF9XjWgojpeXue1i1jGNb8FGFTMScUPi6pZTGsKAK2cKuBqwtoABx2BnmWopEHdNfqeowB7JJAFe",
  "key18": "3o178oBJnkiHXfaadQFSpT4foqqeqjpKZi1ZvxKmMk5CWWJri1BRH6mCydEpSFstCwCiDmJQadrzLpBsFr4gNL4o",
  "key19": "2LTA8ZCd7SVvFsu33L9CVmHWXQXVPNYjsomCFcPpAQu5QYo5RWzRHJP1DEVUNmuaenQYsQXt9iR1SVGErJUrQNR3",
  "key20": "3iiJQYX82dhLFXRrc4QmxzJr7sycKpq6iHAkYYfja1ffmji2BYeVVGD72VLxoAR8Zc6pdhvqxBmb2NF44FFSwkMY",
  "key21": "zbxZ8a4xS3q64h1DeuLS8mDW2Xn67FWAnUqQT4XEYeNXnoGe8Wpf8Qv1eYK7Ss35xpMGi4xSJG54gc7VrPEDc3Z",
  "key22": "3N5jzxadFKc35taXPtPGyTBbQAz5GPBpb85r8UpuX1w6mJZT4XgxGQYqjBncUGPtEwNQYuvZ12hBw2qfV3HN1i1X",
  "key23": "2hVj9TCk4q8dmrFtJ8hgHGcHJWA16uZjzJ5hSuwAYmPqnXpWj46qEtDkJheJcTzUUTsrof65Yurh46dDu1GMTU3P",
  "key24": "3pzyBdB1eEyuUkfiBAwX32pVqiUVn1ThnvsS9mcksUTqrTfbRW4CpQWDQ5Kt9xyYcRvCxcZo8fePt9VqKyY1HtjG"
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
