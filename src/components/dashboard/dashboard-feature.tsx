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
    "cTN4SyarEqJYJkZ6TAGwsk1ezfiy1Jw46S2a38QPf8AG3Tw2wTHgjrT4h32ALiPpHRZMvfkzvMD8dg1Umf6DCPm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ruT3TgwYVEL19UrXn1T6NJDQU6Fer4s5mDHVkWSMeUPKtwFdt3wZVuVmjw9gDPvERnFiAacjB4wfyC9Lx5oNUyc",
  "key1": "5JeastCqEqhGVS4nbx2psQRtc8N8qe5NPR5JuTLNrUhjdRVijsguJDgkA4A1MLWUevK5at5pwksEd3TtJH5uu3PN",
  "key2": "3xLEjs8bkk4x94Qh5fX7gAzA4JKQGf7kYzLANYvjcthWc7E3eBSvsEaJt4sMBMY9X1ef4QzoSUbEtPEMeCqPuVuM",
  "key3": "4jgSnosxtGGstx6dXirwmjsJk7Vo7dQeEijfv7LeMKp16aM5AptBtXew4k33i2EoAYvUv8R9zi9J1JSewoRugWnY",
  "key4": "3BaHoF7dAuJiRmmxbx1k1ms9SmDxofLLvJCC493KjxjHvyyicpYMKrdoTjp8uvoTa7ULTWbqHCBY74tyobc4JG4L",
  "key5": "4Uoa4m58dFA41FhvV9BBQ4BTGUPzhhqP5afZMNyfijX6PKFhvNHR5agBiWWgbgycc4FyhWXZRMRzbij46bvR2F2W",
  "key6": "39UyV28xEPfmP5f1u1TW1LmhCBMA2JthmaUrM8rdS7czrFjo88ABdzxtdEEXxUu9PHSGiMCPAFVMrNYh4NCkwiG8",
  "key7": "SXkv2nMhft7MiTGepgt1tWG9wokGjDN3FYxVFhfEC54pziZ8wB6K9QrY13DemMJMEHWNRGS4KpP1k8nT34e7G1C",
  "key8": "4up2np25mG2VHRkvmHDtZfqcVxsv2oh2fnrJNm8Mv8b7RQ1zPcrbQg8iRA76c257oB4LD6jbUmKpKEpV3XN2Jzkq",
  "key9": "2DqquutcufVEMpPCcgUeBJT8ajzsb8nzf6nVJ4xt5bmJa5G1ZRa9WaVnSSE7T83sQQg1BJe5n3h1HAJheVntyA4Q",
  "key10": "44DHgRjSmX5xy4k59CnRL5VetDLMnG5PtDmqvqS9t9e1BCEy6sA81owSFJNUu6c6Zr2hfUCgafmAjkuzNi15xdff",
  "key11": "5yvXiXHaokSZdwNfmE57S9zfBrekKrHrEkmuf7LLHjz1Ui7nyRFafRje3J9swdRJZPVEQ3xdAQBFV7ZRK8y4si9g",
  "key12": "3J6zUqQmSaxNJ6WUNFD7hitEb9CAsavVBYFdG31WmNh8if3RXSwWaRjGedNA5g1zgDz1SpZmbQgLmyLskaKPZpxk",
  "key13": "4LszS9FMRJ4hvTaLBtKYjfYmRLCQHuaQ9DVAtU3i4yXUu8TsS6FdBKHpv8xpGkGn4amLzvtRWsR2ThHQJj5DX1pw",
  "key14": "5RRrfaTuTj8MTkwTRXSPhCnUnWSF5sWvUpW5USYanWm7aRnHL8CFWfHNMKPUArrNipn6VKWT1ffdsf67Si8BHkGz",
  "key15": "3zHwSG9XmXSVsXNaArBMX2D6GvABtb9uArGAxHU2o9Zmm2YjZWC3evoT3aYG2G9uZABrUCYoo8jhXSLxtG5YT1PX",
  "key16": "2gEBMuHh9nj8GT7Vs6ZKTNroPSJ9xn5gGWKX7qqmHF1SCZ4uwP7scCrwNrbBmJWbgvafLUEGq65VVE3nFKnfGtrh",
  "key17": "4zJQspLp6tuSfakgsLqKDfmaATemu4L1yKtXYKUjwCa1FTCKmM2r9tHgjmmy9R4fJJqXMbmtrGqBhCuULEZaf9zE",
  "key18": "4kXDyq5nP1QJKsEJXp6cXDvrL7gZJSkgnnz7V5RrsXhN3GAJd4A3kPn17DgovRAAyMbnjQfWxAjTervU6ZVg4QmL",
  "key19": "UJWvx3vm3FBsCVYpV9Duvu3vNkn96muFxLzsHc7iRuUyxHc1WBqDvpD1AwYiUjo4ktisrcTgAmrpFzkNxsZQ3Ys",
  "key20": "4KawneKdAaro62KiaPawYqRmMFdvSSNPZ7D71F5SZL7ZM9Ei2pHdvR1pG7cckCMJHrgWmENjHrJQyJEDXXnqTsgj",
  "key21": "2Z8m1KZSbxnwFuoGjUyLhHTUy8K129JKJFSEEyrxqJKm4gZ1ik4R9QGCSzmKDKwbt9XrGQA7fUvp9k7xAQB3hjmV",
  "key22": "5VsbnduBgTfD9JyrJTfu6Qo28DNputPb1274q7MBR9uGokhVzFQQgCpSQHR1HeU4jv8J94oXMkzVzpDRTmp4Ebow",
  "key23": "5jQE2QcwtRoo5sMKKyMNLbvgZuUzHxNHeQDZuyd6yifrKiFg5eqZjKXxgS1HqbPgAEZ2wsfYC9u6UYa6gojiXPj4",
  "key24": "349EycTAbjCcVmjLYobo4RR5cXDEc8ThjX8wkHFjdAWCdAWt2RRwnMmTbnDyawPwsjYXxPKVcaofpzU9Uq18vH5k",
  "key25": "iKRzkZ3c9W1SYBMpSD7t1jqUt3sbQ9sChwmkizSiJsEAXm1LbBLpr3GsAtfFsqHqzMQC67RCkgZEpFec8pk7TJH",
  "key26": "4ntFLBnbKvNv2EShDsbDsFYxqP4AUZBXgUw3isUW2mNfjUviq2eaewHCpqbzC7xvH4yQrvjAJ7fShpCYPBfwU7Pj",
  "key27": "5L5BkERG61GSLG8eRiADqhR3to91QWjFNyCxvnJDyRNyTFhfNSBpfKBbJhYA9ViQ78BnC1ri2RcKjBRGRQ2ce3so"
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
