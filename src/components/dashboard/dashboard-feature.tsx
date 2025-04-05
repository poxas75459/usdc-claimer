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
    "3gAXBYYQ5d3CiNM5sUQ3cvfHA4bjCMeM87VeXA9mvFWceMbPp1khbpPKyutdWNuAs7KsdUnCDJvsvpQQNt9adGcs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gfCrqUnMfGo9PuNoLymZtzHu6mFZMxBJSxW1mztNjX53WzsuSGVntf3Th6wfmysRCSotntrtoZ2TiVqXXeZZnDS",
  "key1": "5n7reKuTpTzsEH9efbLParJduprvJWMh8gc33WiTbTF1pRc6HtMgRAzczLJ4nzYb7dBmAp3P5fTdrqgLiDvGGc91",
  "key2": "2HeaLcQPRe9EskvzcY2359UbKV8tLreG2g9T4Zj3qF9NhJfcgV4ik75x7uA1KsYMcw5Zedg1RgtnhXmCtajRMWsC",
  "key3": "21jDJtPht4epRtPf44ZuzAFNA7B5LKjWMg4k6sCiBVSCSYSL2SGwqFrbLmZXqh4auGxpb3E9HkRPaH4D8qKwHgtP",
  "key4": "23uMqrUCRyHSUXfKRrH4ZoqFTg2B7pB1inPvfwWSBCcFWYEfPvG9BcSE8qakhhue2uMWDXVy5sX21re9Dxmh5Sw6",
  "key5": "J82hxk4u6jNagoyfuWLCEaQHTva8uLC3CjCHFPaeFyCMGAndhVkb6ZxHBQBe6MjUDdULkKw7vxzNpFRQRLm4jxi",
  "key6": "5SyZxXMFdkcrv76EcECmy4wm7FRakFCe59z87SKUKLjWtj6K8ACy39C77G861hTWuHGsKWBC9c6rmiSLRnsv8hVi",
  "key7": "5EoU7S4Zzrkkvyw8yvWaViioHR6HcaMibwFtGJddHmmVUmS7zCPTHLte4hHqu9EfMeF7hZtGpH8HbqnFpTFfh9sT",
  "key8": "4E7Wo3RezaymcYhwxK7gcuaMaaWrnGynC1UgrAZ7V6uaRub6w1DdXFUKTjSGYyYEcXW6gBNfVAo5bLWksj6dsXP8",
  "key9": "3eEVCMFWzgWYCY7mt7e4tzH4JmLGmajD4Fm3Nf1XG7DGcnhu2sehzPfUCZuFVjkbV2PDnfrtghhPLuAuiNrRGt1R",
  "key10": "3UZDMmjtR9ijYBxSaH2BWah1TUhqmPV8QJfYMoWNw4BrGHyKRXRmEJc2Z9jFvRUnK4meryW6oX3XPU72k5YMhMMo",
  "key11": "2s1hM3PfSetH7TnLTbdeL4qq8YoJ7aZaV2b1xpdEdWwuSNcbrkWUYvFuFjzKbba9K4aufatTiHyYQ9KRHYZrAy7f",
  "key12": "3jczx3v7kNjvVziEkNVV3aWX1F3tKc5MdianVWfpjtstc9MC9H4ZpAKFfu2332iWqDojfoggKAjjG28t9SmzyE1k",
  "key13": "2Cjj4gRur5HV6rgzEMpp69Sz9F3qd9a3D9c6GM5t5bdfUq9ke2LZ3HmKKyDFEwVJDd2an9meCJA8JzA2WAfHsopr",
  "key14": "2fZmfTnsUNZzXT89At836b3CzSUTdVz1rX73Tr86F8jwSGyVjMNjMwTY4UbjJGbBj5LEC5FtdazKBoqiUr8mpFxX",
  "key15": "ENBL4uB6qxbWrP3uxy7qBdeNZ8sYsqUghe95ziPMtXKfUtfvjh4eSMieUcAEqs1abrTt4BbMK6TDYx7Uv6uNh5P",
  "key16": "56tQvMNamozt8YRJPTJ6svhvs5VAvDkPryeE58fizKuU8mQQrddVXgoSQ1JkYgcHvXRRJmdZby7L5QPaLqW2HWXE",
  "key17": "VVMq8PFuRF8Vvk2fuHLJrVnCPq7UmpoNsrav3K48sJVh3td9vAJ4ouTh2rwKvq5S6iLe3drCYWNmauw7YwhdSDR",
  "key18": "3VpScjgCTjEBPPGficEkwkXitnd11N7pz2Tj6gj1TBHmoP8LPGYrhZapsh7K3vpFQCALVjcPyPDb5n9XpYA6Hdvt",
  "key19": "5AxMaMDLXCUJeTsk1SbW1uV7dhDX8fC2zybq29qZ1SvAi1erDW4ywsKrK5ZZyNPCyJDN2LL4vynfmt5qMsafVi3c",
  "key20": "4bNWhS5vPyh8U69ieBzRz812KSTVqNwGoNnz5cGoeKLris4vqWdDSGcxDsrz7GAyVTcprckBDeGVPFDzL9KKeR6T",
  "key21": "3waNt4vw3fjDE7A4d1SajXs6xLBvaw7G7gf4phkUS782TmkzBeSBxbYTNyrUedurjpBJ2KtvomYiGJ2BLo1P2ooE",
  "key22": "WdYBLr5MxTkZRjSH8JocbxBxqwtWFkAub8djd63dX9msixe9DED1MeNPbQgYFRgFS2tKGjNFiqquRUfycNBQNVh",
  "key23": "3TyoWBbgfstRzLVszDdkLf4QCeNhaQcpS7br9ukGxEhKmTzpcUEP37ytPHm3rNJftQ2mnaiF4tBt2SyV4EEfMNSF",
  "key24": "4wNDhaZg9gkk6TeHMHkyPh1xNReUAWiYrLzdUgK7HtTjDk5H6BpWCm54Zyr1AH4HSyb8Wkihj2EtRw7r7DdBRiF4",
  "key25": "4GRAoKhckVJV1FPtwp5aS6yg32Zs786jmpLxfRK6bDFYjZPRwy1QwmL1iGr4LQzm9dLSi5iBtmmrDd9GkxUW8ivS"
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
