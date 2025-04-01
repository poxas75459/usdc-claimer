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
    "4A3PJkUkBhQzqM9GSXUBNtcMcKv84jxakks3qfdcCb8uc16UoJ5UNGJsYd9f59sQ5RijqGHn4rFDLERyhPtPGJM9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZjuQ4aXgs52a34p1NC6QpzHrCwTea9VgufuEGpZR9seC7YXp2mcPCsUtfT61tq9Rx2KJ8ff3fn1v4BRZfpWXSR6",
  "key1": "5uAXZck7k8jz3G6q9SnBDnfMtX9yo9yFmvctU8HwaDD4QpA9fyirsfYWbneFQmbpdk4ycMU5weRr481ixNoGUHjb",
  "key2": "29QF4b5JX1uqetRSiURexSFMRz6dsAZ7SWNpCNWMYLpo9FnLxs4qm2e1eKDjweE74PzPbFape4qJXYjLxic8fpWe",
  "key3": "29uRYjbAR3TVhPTCC3knkyKW85rbb8Xui3o5SUyUpkqpaaeysD2Vp4QXwd1zG2o5xqobT9NEoAyoWDM5cJQtorGt",
  "key4": "4mvge86DfXq3AxViJybADrxuktw1ysnQwnY7dPf5TmYZZSEwkAgYrKSVBUDDuzy48qNaN8RShGCEf6dWe3KdxgM9",
  "key5": "oPhN1dbfHHZ6xuzW2b9CkQqfzs2TtW5KDA1WV3DsRfAFMPV89Jv1cYvKtRoWisqk6DRcNKboYWxUNNH21Hqn8ef",
  "key6": "2EnQrqLk82jVEVU2ewH4qeUmMw6kEhNyCA3iZKyxPqYdg26AnRMSRmYToQBa975ZoiZcER5WVbWKvPD9E349JEoo",
  "key7": "65TTrsH6wxGG4qQzhKGDJhqeNZ6RnhH6A5DKWQFDjKbZCyLvSxBvErih1ZG32eCg8BQpBgZhMCQAV9Ng25v97vJb",
  "key8": "45HvVGC57HPkJRA4jgRc3NMjUqxVxaizkEDzWKQCHeaqJsSu6Suj3hcqn4F8pwGzW3pY9JqPmZH8imDVXibuZgXV",
  "key9": "2TWKj24cYTyhL1dyAJR2M616dGrD6KoxNosSXMyBNzSAtbxEzXj4xi6UkYSRDLSNvMtJQ37zeuYqMFo825zog9gJ",
  "key10": "3tAYaDcRHReXfhPkEsutqp1jcpN5ZivKgNNTY1PeS2azhZxHvs5WYA8J3cJYi51mBqa5tJX3W1Ga7QkTuwFbWfFC",
  "key11": "4ZFYXAGCXuFXkp5uSR75vgQqU43u8UqCzjUeFAoe5DTV11G3ec79zv1VzeeULd4UrHN5FBvrfsNADKAF1N51ijAp",
  "key12": "3PhvaqCzvAseJPtnJT3SfQcWztqNhEBUDVmssdjQEbqPognsgPc9msn1G7r9bSXHtTBF8KGeByf4ATLUbPvtL4oQ",
  "key13": "3gctnLjCzV1cLosWvYb7ABXYtteR66rLHJagEsarK42PaJsZa3XSstgmDYH1hNnKLZhTRsyomPXyy2cVnvq3TJuk",
  "key14": "AjYafn1neriAVJetwxyiWD449GkuWKZbf4P65bxKAHsvNJa6xFVziiHc9WGPtgBeczjuzFDtdjyuyFefAYdpjoX",
  "key15": "2sSCLqDYQfqxkBqBa937tHVr7ksrJgYGbLjM8fZKscVKtTbgP64rrpw3P7dnLZiFzEyraFmVef34sUo8sbJRmwbj",
  "key16": "5jARJBmA1ibMvNryRV6Rvj23TbrmRU4xU3sq9YBtAoiNWifbPhwueZWjPNSAPjJ9SunxETprtcFn2UxuGm8NWCpL",
  "key17": "4i48wGHH3wgwC5Pcjafv1ukoJFPfWDFQZyzeu2JRDEu1APrWnDoW8q8Aiznf9mPsNu6o843Vqg95AQqVb2n5ifat",
  "key18": "28szpLwG62PyW7hSZ1a2vXE4kH23HaFNAML5m1DCBgRt268ePAGgiFN2wnCv5Hw2Ld687Rp6LE1UCqCk6VDfj8QN",
  "key19": "5HFvagdwRKeAVcYhFmKWu78RHkifRqJ6MWknjM657nRo1V7G5UTc1MKN4PrE5sSmBLtCJotmxdJ6aJ7vEqkC5myx",
  "key20": "5fhpcrFuY12Ewt4Yp4vV6c63u2PaUtMfatcuFnHYxyAtmTt4XvzwqCKubQC3bzGUUed1djuacRoidcz4G1PTyZ5h",
  "key21": "3DEH6csVEGfsWQtxvYWQbXh9vCPhqzQCWR7vkV2h1tLbWehSDk6pgJSanWuRtEkHF8Vhwqiif6YJ1YrQN1mjDTr2",
  "key22": "2tSZxsdK8RNLSYpmwqk6xoRNTEVyVJe18z7zdZHUFnT3EWmsvcesZg4CM1v43YqPpRi3EcvA77FrXzZuR2RHhEJP",
  "key23": "4nUs4fPSxapVyqPNEUV3WF2qifp51N4nukQNiYYxhLygrnTPSa8UKJkxiJ7UzXUYkDbXfgQyVZCZHymsQXnrSoEB",
  "key24": "5aCgsReuciwEKN5JzUWAjiAaz19vE2HBuM4DzdQUNGtLGjvVqUS3xBs1BQhqrfNaHRM2AUmRnz6fzNtpbXssyQyb",
  "key25": "H7mHxCf9CYJmrcnmSoJGPKv4UgKNSnDFegT2ChfA76RT1whQFSwdzvXhEZ2faRSU2qgoe6rmCdcDmv3Re15RgvH",
  "key26": "3JmNuCXnsfAkR94ENLRbf1jgeoJFQ4G54T5cyz1CV8bd2mM8UjAbqETcsDKf9firjDP7MYLzE9hQN8nRhTz4NyDm",
  "key27": "4QjkwbbAPqtn2Jziz7uLdEJTMsU5HYpsXGnoLfqsMEwg8BUAHtZ38MA34rFj5Ecd48eMRXNoY1wQFjuAtf5v4X9v"
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
