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
    "2TDnfP2Utv9bk7izBxJ3FrxuWwsqfZWzxPhBUbEsRUn5nXDGsH8rmMmFSvyhLVf1nkPTqG7ZbFzKr9qLNYsZCSQL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EuBRTeN66QQnDNqzCESX2fJuRBpG8gYQ9strXtXefFS74pw1i4Q2E8ZsLM54Han297hrSXVncw49ApTtgH3yqNV",
  "key1": "44HSbYLqaye8G4zT9AYt9JAdrdP4PJ9TEHShMFzaiAi5kSP5TtXubwBAsxW9YdtUAxk1vpeLmHJm3hR2fRyuhann",
  "key2": "Bo3YJyDagNPm2VsZJhEDeXKur9qoxLUBYy4zJhWiNCcffr4NevRsTeb34MSAJvL86yoBsHrWXa73ghtTiFHHWCj",
  "key3": "2jsT3crnZLL2Aap7HzFn2U4qLUj4WLJpBGmffn7ThmmZy1G6UjZ4yaXjNE77EjF74bc4CHBqxRzH42yqe6mS9U3w",
  "key4": "4sSzBsJfBqMma9DtdmoTmFzDu6pMUSsJV4DFVq2pHuQ6HAcPGwvSPnU4kEt77sTtfG2Y7e3VsypS1YKcneWZH28f",
  "key5": "2NVvszwYMhy95zYY1Sc7uCMtbN51GCZ1MjoR4DSFCUM7mzNUr1uoptkZt8m1WzKdpDQY4J2GqJbTQQEHwbg99ANu",
  "key6": "5cCAyqjfidVNuNirbsi2Z5uv3tDVjNFb5rkRLTHbz8nXeu2iYXveNdGXcKL91LJ9pxcyzyvAuEUtNQ5KW1eMT8Bd",
  "key7": "5Wq8xP3gPLES3bvzX877DGscY1Zu9hBtDMjAJFif4TiiaXNEF1ckagDJmaXjERW14z6tos1Mrqb2tab7g524Wv2S",
  "key8": "4vEsJ9FZo5Bb2Qah64M5wsgxUWYKgw2TXsv7MiXFnQu8fS37cQFHFS8nBpqgrJgUHFzwz2bgaqfVACggCwDVWUh2",
  "key9": "3qMxgGRkKTZ8EZ1w9PwV9unxZfXHjxwKjyrbwp27KHA7jjLnVxEcxRiu9D8yzXJZu7RhADYCZpzPgcQ5uRsKBDtz",
  "key10": "52rPtBA4TFmwUa7wGnt4R1CVjAE4knhtBQBvqw9yJVKAupJSFS8gjjk17FyED3s97AFpaTfyxcxW6C6RXQCwEBy6",
  "key11": "4LiPeFrUyeV6hkDRQnt2tnNVjJeWfbYze1xKuRpe42423tWHDZmnUYmfD9mp8z79b89pashVhU9ASdER8RFE8jTB",
  "key12": "4CSnEb4uRAbUPf3jdCQHhDP95CH5xzDmLwr3HhJN7CEj9juTfmGHKxVrJVPiaCmoyFquJHS6YpfRT9FySUhTAXuh",
  "key13": "3886xcnM8nzdjaVkq58Ait21Cnokx2whfhLmoywQ3w5L5qQsYNWj6vs9J769U7qcPYTcr1qb4GF6CRUyMe46mrYd",
  "key14": "4ZAtZGtiB3DHepGMrzf1k8wvjmAMkLXox776PupZQ5vn7edFDyYHCPE6vf1KVqxShTHnC7MCdDHwTSHXEGbNTfxj",
  "key15": "8aNn4S81ud8XZFEgitny2FacZrDQT7ZyahM4ucQJzjwEW9KfXnoM5Fso4B2Qi8vi8ecbqeocu4SLQKvQEb21U5D",
  "key16": "3BpD3SRiokz4MYQayatRSVSM856pXgiyuTtv8Fckhg83pTwQ1N44ebfPkhsHUxAHQdjedNWckoRE1DwzjshaKAHd",
  "key17": "2LGPKVW1hqsrGiaz31c1fT5e3tNM3XHRNxs63p3TESJTdfmR4QFBiHQbj5CC2KYNWSWRRs85phiHarR58GPNcHi1",
  "key18": "5gZdwhuNbKh2mxEBeUGjkgDLAV2PskWuN6EpyTs81hD8GSiDtqYPiWSPn7TKRXTHran82xVjRDTEfgh58F8SuXqD",
  "key19": "b1jtoZab57A1wHDnmiMJfNgwCpvaSy55VZn2KGqjJM97Q9soST7neKBu1ebZsuXizG7Z1gmCUf3oJSDez8rs68f",
  "key20": "4EWvkwPn7FQ3hf1C69yfbRVGDST6xbGjU2EgFETeKRZEUzdoT1ATvopNcz3fRG3UdPyqGLJduVEweLyamTSSt6ZY",
  "key21": "A3b9UcEJTCpTPtNWRxqpJkCPpksQL3Rn2yS2xbnpUoaSR3kV1Tx4qrApMkfw5enMoshm2ZLhAHtncubWf3EE3UT",
  "key22": "4KF9AfmavVMjQ86z4dUAVuTad2nAfK2waV5XXpLCejxxwty4eet9ybNBDhJjoK3czBbFmgDf1uqoTx6jPDbCA5if",
  "key23": "4crxNt9BbqMmiLxCpXgEQXbpSgCUFzVakSkNYaLsQgLExbwAHRB3qv4myjQjuo4m6ofsxaVhQrbN26PvczMPzSiB",
  "key24": "3UbJDPZjq3Mek5VgB8MWcCBBxXKTGj2cmpDgJTLXeqyxPimqYqFeVQMko7F9u1hrcgT6Xgdfa1cBmDq1PiqpeGcy"
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
