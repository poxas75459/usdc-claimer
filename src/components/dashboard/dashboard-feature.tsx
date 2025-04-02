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
    "ay6TJcadoZNAE1EJjpXAKSYhtfBM3WGx6Gx6mBC7PTm72xfZ226Bt8kJNHvSgmUshY5bbX54bqwFU4AHP3iPnFe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N8ATU7hrHCpC5FU31Srq4gwSAhCVfp5ZJNgkrsum82tXqQs7vtvai1N5Ev7dtqEimkGRtQpkeMJYqSdzjaxbj5f",
  "key1": "4cCJqVWZnsANtBWxaJAyiYuJVwZkRZYEmT82VF7mUChw1gxG1aut17cXqQ3txCtPU8Le36i5HBHC111X1eMWqisq",
  "key2": "frNtkCjZhV4p33d6qGaMZxPKP4TgLipUGEh1zoCDX3HEzuA1D6LQoDGFfuMyEivdDiBuqChtN3v2hTu5d2h1owk",
  "key3": "5HuCi8kTsgxYnxbFqgM7z1XPP8TsQuRUyrLn9JBsk2LQa56D5MpQVKxwntDvbr8JH2XonW2hGfwF17u2KRXrnK2w",
  "key4": "3BevU6VdCVnTKwtefS78AZAtPFeHf5NXMZcg895ML9WtnukNGuf3Fkwv2v2WX2Gr7wsF8UM3GpGNYP9hz47sNKh9",
  "key5": "2wJHzUdLrwiJnZfmSM1ehPtZrg5W5eDjRGny9maxJ33Nz7NotDdM2mrryRrmit1oo6JTAZGVVreBcDfYLVPQGR2t",
  "key6": "4CHbNTyJoZy9xhsZQMXrWkBpgcnr2erMmXYx49ocCErRTF7RzLL2L957wbrtoDTNFA4xMHoZBkjhuQkFhc42QZn9",
  "key7": "4NnomdwGxxohUidK6NxgXqzPDzbVPFvVXGPQR8PJBqmWz5TaN8gwCLFBAY1TWkEHckjybV1AR5BKgmwAqatudCXn",
  "key8": "5eXGmK3DAVJ6B2nJ6vZZpNSt1vHYGZWhjfFMsCRb7xdVsrFccNK3NGsXWvRGzfKSownZU3Cp7JckYuZDivXvvREz",
  "key9": "25z6j1AkrNrYMy5kZVyZY3VaCtYN2Eb4NdroTexmqxSN1FrnUswqECqoewvmjy35jHj2Tjba3T5d5cNUTkwZ4pY3",
  "key10": "5qZyPK7QyWqP2LYuxGQq8htTGRzS1qd526WmbZ587qo6C4GVMtAjXVmNdvtxoBBkd8fPBsj1Yo2HAd6jY1uhQLvo",
  "key11": "VrYQbXYWUrBdbyhHRzEnG8ibRtjCDCHB1hPV1yG4xqG5e5vEHJ9V3XiDVJGSN85NQXsYkm49Qfg71he39kGJbWv",
  "key12": "3wTqUb6S7o8CuVXaUCdpLMqSjhkyYm6RRgutacjo88SW23xGv5WfuxXsu2gtj29fnd3JNouCEgjg5MAm3siFqNYu",
  "key13": "4Q9HM1KusT1N2uYguKABMVss74exZDDEZvEuxA1Y1DEevqwFNncNvXo2kVQiUKTm3Ekb5MA4bAonBjVH6F32BLnn",
  "key14": "3dkCo8aCnUJa7VtHSeuFZfbSdadZcn52mwSFYUWQ4JjHyVi2AC1fBmg5NE3A7frz7fkNwZbkUSg28TARhXhZ2REM",
  "key15": "29LzSTUdpSsbBqMbApa3eH6Yoz4hFHhbPaQf2KFe1xhHBbGH7qrqyBQb7kfDa7vaP5H2fY17Ft5xpo9XPkSDnA4H",
  "key16": "2b6UXvMtqQTWZ4gEe7LMZV1qW3bBaR8qwBwFNQ8NRh9doKYrWzCTyzGeLUMKfo8W622iHT7XuqVZZMNAG7kj8hgi",
  "key17": "59LVjC5Mwy7KekLUgLauamdLygW9iLqaa2mkEoyU1yGxQHXdZf3fN6vcv3WubAzND4UcNExLyDEBjsgR1Vj4qL1w",
  "key18": "5ZVsHnrBLdfFLYPTkhMnyNr5GAqPSqhVvEEqxBcTGUgngHzrG7XCJUR3WHUCaaSUjkvcjnEowJisy1e6AEiva3qz",
  "key19": "2AP8LujTFPJ72VTrp6V9hkXK156KRpHkgKFKv11h6kcTbwcsV4Ahbd1WKCWLpHyDTscKhjpFnZ8RPjxxZXgLPcL9",
  "key20": "4hnFSVsT3etqGQF2F7M9iD8qbKdhcmE3voQMsZZG1pgSDLyfEiovGG7DMF1uKss3mQeRogux4g8RonQRGLk2ENxX",
  "key21": "hpXJzq1QHKAZJYxpiogh7ZXhhYstXsUVP2GCDMjA8WrpfJsBZhG5r3j3qwbfovEPfTyrFbxfEwxGUk4dnjrEZXw",
  "key22": "2e1Z9uS6WdTb4CochMdWMkNpVyTrWc8BSfVa9obrnjn6cF2PyE5wyPvYiwHKb6J9ciLtAN7GTQM9tcv2YreJhiVr",
  "key23": "hnHTUt7nAGvCmMRcpoyemLMUTUQQkcQ4cuTrzzgdWXtx3FmgGLuCCitNi289GFVRAX3t5YzLij1X46JhBfQTf5y",
  "key24": "3fYM2wGvftgmoybTHsxBaiug8xQrTxoP4151k6di3qZfV8KjhuWm7iQg5HfTLyDeYfc4VSm5KEqoxmUsf7oo2xKG",
  "key25": "3GPrqiQoRrhtrueXjoazJuLbpCi8fLip3j7JBTSSefLdR1EhgAsDyaWt4QY3Re6cK5vHS61CVEvdMxddkXqCKEEs",
  "key26": "4azZUUNKQEfNA8gmUWr4vm8mgPcCu2bPpaiLhdP2X5KbD47yArCb2oZb1Xfowah44tPw6hB1c1F4CB74RTbCwxHK"
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
