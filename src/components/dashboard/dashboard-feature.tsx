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
    "5wVWJqvkE2NQhWigubgDs8CCpWTifSPhJXexQniEz6RRCru4Zr59mp4XbyK6CHVpibqDSEZxEsM3s14PyBBDSind"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gkVuDJZXtKDUdmsHDBVh9wAWJ8y5oqJDuGHdSgVoh9pdgevWTdNxD2tJCYWHAMMF2Ab2dN8tRS3FXZaHi23py9S",
  "key1": "5Du4kEGQgtpW9kPL4J2KEM8dXi66QgkDbdTGMUnLsVEWzEJZQm3Mk4WaBn84eoZqhRfBmnq6zt7mnVeZiFSXuHL7",
  "key2": "1FE367E7D1vXvuKvwGM4vMnpDzatUecc7AAoXAgckbxoy3aJxpP7aHdGxpy6PEmXqsbEmXyCYq6u9Xgjv3VuMw2",
  "key3": "4ZN741sHPRjZkepRX52fvPY8eWzc13UQLF4ifT4HJwLDDV6AaPCE4haiA3tSUf2u9zamQdWU5KzGNJwC8yQZQEoa",
  "key4": "4Qca2vNRyZzYVKskyKf3SMPxGbveasLeruSEBgEbpSbB4jDh2Ajv5Md4nTmu2pSafb8Ru3M6B4mmicAv3z15VyA1",
  "key5": "4ygTAUBewsmkn4u7JzT7q3cBCWw3CY3ME8NFUZ8xo6i63LPtdhcH9gcmp2pM2BogWnVQG2BYewwYfCMkYjQHzABq",
  "key6": "2obFxLtDdRfotJ1hTBBf7927jJ5DQ47vE9ScvhBmirmBLEqXxYR1cyXc4cZqK2884kvK8Wsjy3CbD9b2xFaDUePZ",
  "key7": "3yJWuFZ8ieBW7BkRvKYBJbni4KDrrtvt2NThvi32b24fpzr893bUeWWddGb1wLsoaN6xiNgshtQQJ1UWP87bMDaj",
  "key8": "2JZ8mCaPPXqQFGnoQPYU92axzmeUAihKu6bqRhWafvaqxJ5V14qVdutGFTReSBMgUzMH7prTSvbsvbmSNgJTCciH",
  "key9": "3nM9YiQs7jk9SYnsAZD1FBuU3Qb84WXpuuKahwTPuH38K6w5whK42uUBJHLY2L53FQqg4kpTgZMBwtVAvB88TsBX",
  "key10": "4RCLAPFffe5RvYNVNbpGEx2vRNHqCg2WoCUaQTsuW1E8F1gVK1VyMYX3LVAzCDXdwApPhTaCWVxCuRHnM4ed6grG",
  "key11": "4FnrMNKUyS1faxxcF7ieViJ3JNdE9hPsu7r492A2BDSW2f1VCq8iPD4FLTXNif2sFubQnPhcHuvWmhNhg17UHABJ",
  "key12": "2VEcAgpPrevGactKUaZsHLPmuY32EFRx4gvHCb4RZ3AHpwK6X1QQ2WLNFoDv726qZ4T3G7mBbHnNQ86EsJ1dkTd9",
  "key13": "3cApoLP6eNjZyjNEmkWo8RjnqVEveYYGtPn4YpoGbdCHq3gN9FZycmWP43hk9ot3sh3SjWzdvocDv5PkURtYpY7M",
  "key14": "374dfNN1WSjEtNaEe8aLEuGiLGdfM6YLfPBapswd43ANEQJPyhzjL1VnuJ6gG9b4bsux82g553atVwbM2eV8nj3o",
  "key15": "uXiGsUnfDmeuB7JjQy8NLVMC1BeDNSmWwi7uahpqFX9vW859E8XgSQ7bNntEAHghChENpr6Yim5i7vasC1RnW8e",
  "key16": "66xTtD2Pdi3VMFJx8TpszJeGK3dFN5BPb2VJKZkaTnXS6CdJ1r7Htvwy9QZaU57L7JBJB2gwCbpvi5GFRqb6oTb1",
  "key17": "2o1aZo4rgtfRnjkvQ48SzAWGMgVzbSawvFePt9HZBhbfrVXvJgUBMk4R4jdce7SsiuDfN6sx2A1KsSk7FjhNojz1",
  "key18": "2RcfZ6XoBvucv1w6AXm51cUKGkeNaLSBE8tR6UJTwwKUqZiHVr8yUrMBY9Yim8EcoTpADigEiBZHCTdqag9mSQGe",
  "key19": "8xoWYYYVQE2DoxanW49eQXqJGwK9yFPtyB258StgvP7Gfv5zMrx5awwPkm7xf9pNSKEcwU2mQDDAC77zPcwp3d9",
  "key20": "5SdJC7xeAHd34SRUbH4JLQSU8KyFCJWXR1RdvJZ6hQCFEX2B6SbMQLRKb5GEWHw2K2X73X2Qj27Zyh1h3VqMDC1g",
  "key21": "31cAXoYWjrgcuAEQzFta7vA9hDwRsER2pk2x3s6GTP8xcgH3xBcgcYNjDpJtm1PZyw8ET7eJpw7vveNA6gEJ6RXT",
  "key22": "5nKwD81DmjDwnnSew337ShLegL54f2FomJv3s45esZ6ASHCYrkGPiTrPtoApzphD5Vo9iyJRHei3GqNZSiz2sWZY",
  "key23": "4dteFfeSCx4jtFebU4UZ2CDuv4quCzJFZb52w1Kxp7Zd7skjwsbXprgfEuNShniMTEoV3xWpeMK3jCQBwRTYabS9",
  "key24": "2k8LHL4RT9ASGiMWCL4byGubrV5LrMMfs2DXZYwg3jw86vTkx1e9qUsSFfJxvBn3hWfALzt4kFxY8QRFyBeJtRr1",
  "key25": "5eDJRTZEWFUq6T1JWpMNMvm4Eo8FrPHhtxeRTsYeJDD6hSVAi4w3MThcq8AK5TpLfcwHjYQpfuQTh5SPvc5oiyLA",
  "key26": "5UVzNXTFJdGAM8UMHyqNQ1aXdt8j6DkPUBgr45C5q4EsjKrx9Wz6xzBeeLVE7jhYJuEeVKVhfK6QyQ3DQZTSKgkR",
  "key27": "rDcuyBqbEwKdMkADewe2WcgaPNvYVZJfbN3ypWTnLtrDRsden5Hx4ExCnBTpAKUtdbkS8cgB7hBNvoadYVn1SRB",
  "key28": "5nehbDFi4AgKgmtCqAP87VLno7wQEXnmKctFVnJbsCKwx7bcMqSgDHrN2ok2crYJLX5PL3PcyuytfUL1uzCjGuQx"
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
