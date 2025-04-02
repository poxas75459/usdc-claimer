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
    "51N2ZTUAVxRAt7bSDLPkNkWGXK7aLyhBTu8X7PLC7bnLd8k5S4R8oUXFMFySuCFnWTK8F7eSLsHfcuaBrvHUBtXB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LC12zTQnjdTdqZR6nVXGdeaauLXuP8qNbR7b8UGBgLPyN8ereBZWZAhcw8hmnekdDSAe9xpks2aKhinWFZsyUzR",
  "key1": "2MVhrTwshMvQPwNHcirnRcuJGmMMBCyt8ThDS1r7XTKLXZ1mXXGTEkaU7JnrxUNQHanriwCAZqpWTprde3atdyX9",
  "key2": "j3AxN5pqMJcaq8SYxTtbgqUh6YVpdKe5Lb7uyAgcL2vodLdcW27pijTMako9SWJhnVn2igctWBuNgcdp58rLMAG",
  "key3": "ksL8FjfHdhNUqGQ4CTymbe5nzsMN5PD5g3hDLZXXQVzKdJMxrWyVjvJwPcTmwyuXaSwRbxas58WHpUnCdgnGGem",
  "key4": "3GhNAY9AmvDXt2qqAdTqWiAWWiKSBdJKDVJmtQGKFwz3YqaEcZjZAfKo1DQQAJb1RhH8BmDXyzFkY5vhxsbvQPpR",
  "key5": "3ukgjkQsKDVvxMUrgcPM3hSHSgVGC1GNA2LDnMfrKLi51nProE3x6xvZCshYhYd8xSbq8VoueCmNVCQ9TnaCbXkq",
  "key6": "4rmX1qQVyHCNZ9eUVT7ptzfxtXRVp12yddPRQKjQDz3ukqDVdUrjAGBkTqbGrv4fYH81jM1SgnG5iHSCWKzki6WY",
  "key7": "671RCay1NB1fxtzdpPB1tMaXVP4a7ytz7QQTimdBcfjZn2vFBNpKkwCWJhg3k5BbsSpsRgB1XbDNjyF7XF3Qcfpx",
  "key8": "222vRMhodo9XuheLnzZZFmEfWwkchP77G2ZqjU8RFjGGNZAqnoiLKgpnC92SKYtYpLgmmPeecPmaXQkaGBAPZEYE",
  "key9": "5NjrQMhY1VLND8hfgmvWHn9HbPxmjccAw9iweCrrexKPjPmXXdxh3g91bGfVktnoPkBqK4BQc2cgq7VikixSAHYR",
  "key10": "3v9njz4LiaXmQYEQZ4AorjYcrE6xApPbDuSDG3kpBUfoS672hXY6b6MqNKiGi3mWUNUT7EMnfLqd9hDE8ot9YM8E",
  "key11": "4suyZ5rsAY63KjmMTcfp5k6w7tCiYAbv6kEj4gcfPcFxdxwEzwMV3GFkYX22L22x9iX2V6ujyi86Gx6izPumGZzw",
  "key12": "3MBUQam9iSfQ1XvRr1MxcNCMWxVFka3LQsQwuEVPRx6rd4eAgs6ZEFQh5DsM4e4ttsfEpd7ixavvxT3KtGvn2p15",
  "key13": "2FJE344ptPPvPsupNyfiJjEMiJGtCnyABRy2MzaupKofh9D9P7c1c9NZ4gcakgpfnKkmuk1w2FbMdpEUbPBAQKE8",
  "key14": "25xLiPSfbkzsGAfCazMuwxnQWKDbJkRsiAFjVQWGBTorKgmrj1GyDd8Urujq9yzDRrzgxyFQs7wrTdmZokn4iUFq",
  "key15": "STLAus2jcMSwTcKDVXj2ZugEkEhNH9MzoRgRHrBTXXXDQBJwzVdgHRd3wjboL3CXueT3K4PmDoy7K9naED2SHpF",
  "key16": "361eFhZYEfP6SsANqbpZ4pkGvT6gJiB5t3Miy4KVy5kQUmhZUXYrcCJAKUbWueGwdWZRxLbEHVaW1gqi5tRgMB7h",
  "key17": "3GmtprVUkd2Sowg6yFcf8Vi5aHU4RHMg4rqmRyESTJCrd2eLTdTfzewGMuXGFtxMdXboED4ThfCYEERznQ6JH2c4",
  "key18": "4rDQF4AuKjUDPXDFF1pAoKk6wtiLLYt3BYVfU2HkXVkGyaKMgBnQZvi9xreiFXkmryVYiG3ye3PUCSQZotGGLLsh",
  "key19": "4WzTdjMiw6RPNq37CdqeJz9ntHToquqHV68xoQDZgmrZoJDJaWPbTESUrxU12JXBtZdwxQAedD1RvxXGWiY7s2BM",
  "key20": "me2VeYLvFepq8ZJgcRNS3Ntg9Ja1snffyqvnEidRRV1WnN1AAagx4oAP92yn5JWD8MarCya22x3y8jYSDStQW6h",
  "key21": "39ZskyYxa6gAtg31xwopLnwuyWGsYR3aSxqfGYLAkBbYCAEGQdGmUJKYf9zZAA7WkmdsQ1WfgmKYChyDUdc91VY7",
  "key22": "583fsoGzWNsHsWAVsjH4DEiRZVgX1HYL84oas1RdVcugKaQG8657b9CpTknzTAcV8J7Nxx2Ue34jY4UU4Ed31keM",
  "key23": "5Mr1J3Qs2m8W6GU5JVuLHk2PZuLWF8Z2CQCwJd36KC2TdTwmvFkRgF8LmEf8fAKz9oQaz28cfibz7winc3K9onWz",
  "key24": "4G4PSR962dyiMLpNFSWQAUK875DD9iShNBQknVS4NT2uAKNr2kri7FqeUCzyhAPo5xV8Z3imTqRt6jZbwT9qdE9e",
  "key25": "5aWJ5qoPTZQP1roHq1fRKnQKqgHHEkyecTDSG4Gejk3aGujpQmnccrhe8oHpXsFcS2uEyVSnfsZGZtBAc2Rgijuk",
  "key26": "2DYFS7f3hU7Bn74AoeFK3K3qRvcJPXU8Udcs9qBwxEkZD8T1KvHvxvBEQkCKP4QMzoTAZcfnzPCHS22yPXGkAgA1"
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
