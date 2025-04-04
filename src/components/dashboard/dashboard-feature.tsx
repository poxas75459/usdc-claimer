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
    "4nnwt8zea4Gmqxj22WPBpAHTioY9C1NzSzTWMDoieZodXDyr759SfxGqtrFUXRuLV23NVdWA4qtcGxM9nza8wTxc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RXfLZ8AjG9EFvBQfACa13oTH5TVEpqjXVQs19GVFzMretD9KGMwCwPysvhBfywyMjw8pL66j22F7K9Wey7cYbTs",
  "key1": "27Wrnipb9ZFK3ZwLdFYg74RmuJf4sfYSDFSoKSknPwkkYGNqMGzP4KUNUS5jgn4TyB7qbhSrieFYRsSPWo4KbC6M",
  "key2": "3pkbGR3AYiwidFaCmJECdjtLWPZWztY48YGwS7wpqUXq6XaXGJWrrgEHWj7DD3nusySt64MiJQo1RJrKBRaBUeVH",
  "key3": "2oz9sLDjRV3q2pjwNsJSAS5orzm2eXsBhnhpBCY8tAGFyvQmVB6oWRHh2vipDXqZpCywvTuviEMeoFYsToPkozF7",
  "key4": "3nsikWP6XenXhoJyvB2HCLmkz8XmJK4JiFqVNmhGGp4ugMxGxFtAiMZQfp8XW9Pp7Q6mCFsqqs9CZbiJGMPYbd3x",
  "key5": "58tqvZVH9rTnRMNGhjFkarAcugET69MamSd1yMUy1GZjhyNPH72AskWUqct452KNHB2RMLkwp5baj3gBnnWj6D6W",
  "key6": "GPGxgXAB7XpEHsgS9dtGwRbWJjju5nkE31StKjM2dw8fsRuENkUJnSj5sugA5LDV1qQCVGaCbAhut4LLuJuMpKr",
  "key7": "64GhbwMajuo19pBrV7vxgZ9ymXYpzLBN9HTrBcL2X3gNXGpQKSvJappMjGQFyp9vTSKx8E68g3o7qTLCX1pcjfPR",
  "key8": "fQecWnFvbfcn8xQvuyytivHFRQHDzqeMu4Z4CyhUqSGanneZi63DTezppn6v45dgDD7EzZRM94dBsjrnAkEBnHN",
  "key9": "5t17zYUAzxkpgKwXGKVVYjr7krkqNahTRgFYzxPrd2fo56dHAf2FVxGRtbuxh3L8N6aTUEcy4vWJ8ZCZMLoJLMgJ",
  "key10": "5QzE1Zc5dTeuKkCiachcM9kETZXrn4wm6KVFjPPYmm1xeemi12ARUaemJccpAHMwyYHYJWz9bkNdCm1vA7vAdbUM",
  "key11": "hioMPAb6aGERvPi7oLfqVMWHtN7dEz2tLTtjmLhLtu5ptffmadpeFGP5xZzJj887xYyvrgW58CrpYHBo7vUyR8B",
  "key12": "3Sm8CAcH3Qi4GapFnkTCEnhbmx9Bia9Ugz9oBTHJcx4HdLmTPGcJSJ1YQDyS87yk8s6Z4ZeHUu9DCS6ag9vRNkWA",
  "key13": "5J5UbDjnemdYG6uwKo2cJArA1rtejxKDRUmsvcYpsEG88zdtHJHHa5D6ZEbvnwHuyM9TrLkFHpJuT3qnaae5p8MW",
  "key14": "59jJ5943Ra2ybmfPj9ogDtqjV8v1hsQMZAF8rqAMK4QjeEV4EZqYhSQ1TgcrV12JTesAaxqJBJTUi3ceEM71Whpp",
  "key15": "2qF1BUbx7wfjBrQvowLofwp4FinPJJoQHgwTycffFBP5UgwJ68TCAm3zhEE14MXZQ2jdVk8G9FLbk23ivP7Z5o31",
  "key16": "2gsxXTkj6KK6Tr9vv49niiyJwcJvbnPEoCiMbAfxf6MwRLoQstxFNHTitg5gaLNzUsSm94Ectf6mNn4Tsy632YPu",
  "key17": "2N6UPyB1GHn1KD1BPr44ZGdZJKkDxnyQPxFPknX49MXSRyGkjK6PMeawd6MKaWaHzMccZPnRn1nYxBZsyMML5Ah3",
  "key18": "25xce3rKV3Pr9nrcSo5YFS9Uwauffci7Q7oKMmcsV7vnxCdMWeMh4Zd1j7EWWaKbQz6sQi6bXfnnWfdYpxjtv3Su",
  "key19": "DqKDxJgpwt8BmezGPXFFbX1LypwJduhfQoozu7WLVWn8tBsNkhhd5kKKG9GdMVzSgkx4UBJXNGMfsRGniv7Kerj",
  "key20": "4MSNDF5tz4L8TCzcTDbDrFzGdqZN1YDdR8fNdPgDpPoyuugk94x8VnATnHDaMeNCBy4PXG5nTv3QmMCbcwwArAxR",
  "key21": "4KJCmKJNm5PGseKoVap3SLkM4kbE5wBjutpKPHYkdHoi9UuYLH5FqujVPhGzcx15uJWEk9vpNgcFRyKSJhBnHLtn",
  "key22": "svpuqMHCxQ5P4eBYthRRZzGbVxXkU3wiCPXnXw1e7c1EvAKNwa3BjQkeKncskpQLPhVeU1mJRWRiLt5KPWXy4o9",
  "key23": "577RP1jepUizVNv7Msy6WpknC6xVU2msJU7WvDyc3Zf76w2XQjcuBKxS1yAMmkwgay6okykwYL9mEBWEZycTr4CS",
  "key24": "3RkQNgbR5WZsunB4Mkgp3xU9KuVX4eFqJEhNGn78CgVdWsYF4hYibJU1xMo4H7TXM14QdEbNAbDVXzMK1NgK88Sk",
  "key25": "3Rchu5iVRyCJoNigg9hkkupmUaZr5FkHXhqgNnDCj2WdANcnH575LgLJCkKYgCUycmXJWeAGwaZdukcgCca1mJwF",
  "key26": "2QoBnxuwnH5gCCKNFaQjWEPrRBhN45T6FEAcFPTUb81f2adyLGWn8FUy9sBsEkhHBVPg1Fz11xreiz6uKVUiTDyv",
  "key27": "p2LZ79r8iFpVN9YnjiSvtzrqqLdCgXhfjw4EejxcgxzzN1376y4YKgo6qxfRwe3mENvRHY5r53gvjC6MoN91Yfm",
  "key28": "42zTY8LNEEQvKmnPpRVNycvEyYFqAWWD3DAK3CpifNeKtmF2FhSBUn8eMGpdE7fHqopm9EW5m3gXw2SxVCv7zg8p",
  "key29": "Dzatb5KUYz7BNqJ5YSL2hRC2rM9FUuFgUPypwP55BEaRkWEDD7Fn7Yahk68jKqrLcvToLECPdFKY7at7WjSuPB4",
  "key30": "V6NdZAGmMUhvrMZFuw1seh26TL2nmXRS1QGnM5ejDGj2cYBymfAdJreXKPGLwQ8RH7r7KQDTwXnohrpYAWL1hjY",
  "key31": "5HT5WEMrJEPMRu7Wcxsep5cBc3DP7FnvQAY5p2mQ7dcFT32BtPC69bgQHotFZKJCtyUyS6XtmcAQQHXakb7wBnsa",
  "key32": "67cBW8zP4CDHT6hpbMiRMLZoJTqWd6rmwEWhB6criMrx6WeQeMVrcFVAaus1Cwkhv2Nsa6s91QVKRVpqCU1KmPwD"
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
