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
    "37tHAnjZ5pwYePMc9coxSup6NV6BaaNkbq6NKRKVDyP9sBadD6bEnbn2Zr5qiVRNNuBejypHqCtEsu41jEoFDvN2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r2wcL9LjCHwpJ4zWR9qT2NCWWSynEnvn5DE4ytJNTAK9eooFKPPov7UChPKvHDHq8UhmdvCJ8LcnjK8NLq5MdSX",
  "key1": "3vEtomLJRiwwJD288z17rJnFpVnMPUL63nAWZj3Ec6yjB4aDnorFhbDUV6iPaVJdTjZC5hkBqSpWdLg7LyfAryZ2",
  "key2": "2WdKTWBJsMDUpHozUQc1VCTDPRSJeWAjhaygcCLKU4gKRnYzAXGFikvcY2isGmp2woJKNoDCjHWjwdkfHtxAFtEa",
  "key3": "67cJdr9efGdn25Geak8kPNCqmxRxe3gSYB1RtyizTwaZpRzsb667JZdAimuyd5LxCpSUCifmxrciT5PiC6VVpm8t",
  "key4": "3JZshhhAwkM7sRWKvZXfUiLpfK9Aj3tdmqSCZwe2uf4WsueiuexAo7UiCYdoRuY3wnvaMvBhfvCVYaoYJa25rPNX",
  "key5": "2WTfzpc681VoVCQKKZdjSQuJUkuR5ozrPVNYvEc6b3TW7SA4rttZLAVbnrCJs6bXbuzcMEkRjZEw5KGgidqyotkr",
  "key6": "3wqREj1VMGKf2L8KLeE5VT2kmDFpHBFwXXM2DsFsCr54uWVKuGLVhKirNvQC4CP6LR5V9rhZLhahmJwB9aeTdimH",
  "key7": "2DahoT5TabB56FziAbKLg1E3iuXbu7F25Cmaqmhcw2unEhCmHuUEsYv19Hb7wb7SJAjf9DnfmJ18rRNDLvCBxME3",
  "key8": "3ZoxM9MSh3v7AQgsBr6TmtJbryhGaBeYvnba6Qoej4NE9wsiAhtaE2LpbKqSHDr1tcHDvaye4M5bPv5VRCjvNdtT",
  "key9": "2fdPPLWxFUyVRZpCXAJAkS9r3ftgp1pYbwkJHbcUAFTRif4WWtSUZJXyqJVpZ73qJjqPMbQREEZFcNjgLAc4dNE1",
  "key10": "42rA1iuHUiqJoo11BNP4qBp6HsvUfoXcDCz3uZNMvR3YqJMkCPphq2jcSdNbJHwMeY4nAjVLtWmHQYmNh5xSXnro",
  "key11": "27tDh9xfSZbV1UjRCVyp4yZ1GumFSyEtGEBuNW7vV9ENKqHr75EqRBts6PBLHV7DGqkdGzhfzmN2ehknq18jkFUY",
  "key12": "58W7SpoEnRkSEw1c7VrzispVvTFtk27fwD2ugcwTmbsWfRHDswjCHWf6Lb1yNUYf8RrE2QQ3sKA48yQMm4REGc9U",
  "key13": "25rRME4r1TCrkTM33GCtvjKc84hMFab9MSJbKM7PF3imGzoi9t47MeXcKTnrTkPGtagQQ8p1yTbSnUuLkNGH4Uns",
  "key14": "2k9PXhvg4rJqodnyETGbv6zxXpD51fV11NMZat7PuRHRrRS8xPCPQLsGKw3yQ3zTpCMrBzrbXFJvojqqRViizXKh",
  "key15": "M6T1fWNZagDTdhjrBsy4NLXBQ1osdhMnUtE5u3WBNX8YHxKngvC1jxv7tqQha6Hpdkw31fj1rFn2nBuhDmMtPv2",
  "key16": "5N8FoXu3seZBoBqraU7nqvSbBQZPNbaBKepzU4tLmySgTKac5i5YR9M62esq7KHm4shAG14EnU2grhpsovciLgA9",
  "key17": "2jLRiqTwTKCjNLN4ePDreEG38Wbh5xzx97NfDEZ5Ywp8MKPw2sSCFdg8bF89Ark3BjwT6YGhSoK4myap6w38fVpZ",
  "key18": "3b62MU1J76RKy71ZEmNNCYYhE3gxgfPmyySLEcDAid9Lg2264T8R5dCAsnGtBAv9puxSUDnL27xC4bW6HNM3ZYYt",
  "key19": "vhtugWjjjZdT591MLTkcdozgAggjrHNZDbmLVfgq7LVUCYBJvVSyvw49YmY6K396sv7HjcmZw15E5cSgKJWHmLd",
  "key20": "2Pu4Rvkg5p4DcG35Woeztu2uBMt7rNNVrKLsx1CQpKVrwYKX1RkjgxegnbXG2WrAuPy2Cwix6u3wfCc667gB7Gc7",
  "key21": "gMpw1HKXwxNHtKBZ2zxjuGJBYmmscSM2iphcVXC6C9mH3U3SfXby1wpiFwTY3iVxoRe9F8RhjXtzWSwGzWHVDrR",
  "key22": "dz1wZCUZbZwKjmPb9FfSPZokwoQYuyRYjmJ3rxXMYgBQgyrLMSYxdhNdb8GPjSjZXJEXZMsYanpdzVf2kD7vMQ5",
  "key23": "4ZPB6cLzzSbqibByaPNDJqLLMKhqHe1KxBDUiXX77aVECMLJYYdUGzVVYhA3AMtq9psc8ox8xRJ4fzmYUjamTcZx",
  "key24": "4uV8PaE3zUWZjxDFn3UTidzSGf7fkWCSYCb3q7Lqkkdb6akz67KhYrr76dy7NaDcbicRLowQDifdfAdepbpbjM29"
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
