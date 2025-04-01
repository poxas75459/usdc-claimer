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
    "ptxx6nquGUqaaz6ruU7qMFBaKAvZzkDi9MFEuQjWFqk8vytp4JhJwC4hvAogSW5FNefyGRfkJaUGHNfX9EnijUi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TXKZUkJ1ZnXZBQdxKLZcoet52ewEwWezi4bky6YEGZeJq7CTfhW3E3zNDaLJ8VEjG6ad2FEuLag7zSewDxZN1SY",
  "key1": "3xio6ijiLtW1jrxKFsyqewP4UFbD6CpyMhTB41s2UtyPayMPpHZq7F1RvzPw94DsFspHk1bjgsUhaGN6oPRSgVdn",
  "key2": "5gFgziDrJRHh7fLrf7fnZNvvtwmAsCxqxKAXuKG2EVamk878i5RBq3o7XzsXEhcxiLna3ZCia7y3XTB5oiCWPMCk",
  "key3": "41kDpi3ZPstG2kWMwfbSmRVCfddSL5BeCHpvZSDUuq1xCQmYerPU2yDGA5F55sQn2v2ZDygtcu2kge53W5Fj2kBQ",
  "key4": "AMGY539eNxn1ZniEbkZjqnsQgCBzo6FHthGkRT6ZdN39SWtwyPzdZfU4DnNd6Ae3jytp1U9mZaC8tgSq5Y86xAF",
  "key5": "aoX8Mk62qFkxddKapoem7FXxdxNXk9kUmkBy565W5oXqJ13wmgX6NMMrDHpYAChz2hY9bASnQQSWncgkPjdHMDg",
  "key6": "5PvHbzJSZMiQf1dcQwviHNGErWeyHJtFCppDnb94WfdDzMN6JAyJtZVbQyN63zkiqN1rP5HsNNPGXn5Ft9sXkqDk",
  "key7": "3hmPUWogAN4gejCgz6UYBRLRqdkCrpdkWHEjYGpvGMYGS7bp7mYstUFoNoddVJKAXrQTKxmgca3pqy5XQURHKMU5",
  "key8": "4Sy4ZaQ1Aw8ogZgCscsUK1r8ySFQiFy6MXJNowvhZma1pWjvoWkibYJfp5gLJVvjvCDUxh8AneoNVFqM2Fo4nEUb",
  "key9": "yVwEMjK9A6Xg8pxZN5jEToff1F4tGQQ233dT5yHayGraj8ccFrFiGgiPyWUzVWGk9uUuWLncHb1Nw27gh2NwezT",
  "key10": "5YUPfururkJ8GJMjCL5gJYXhorhZoCsqRZ14iw5qadf4JapELH2fPWRpunWHZinx89JfPth56ndukeHKeJouZjFE",
  "key11": "3ZJwTzvYUStwQHMn3H7iXabkiRay23ZREnQwsjY8mhhsxnXBxa1QZkDy4W27BBSmSiSetkaixyPuYwoRXHX7WkLc",
  "key12": "3nnTBefXuDBNAJpcL7jBHLAaMHtF634s1JTZKC6xDrX7n9W4EjXeaovpm9TcVAFkTNRN1XpQqCRihnBqbWQVXXPt",
  "key13": "2M1hzNekRN5g1T9nhYnH7DD27KnsVCa97KqRv4xQbtWzmYcm96yXUg3TH7yN7CzYDKvBbnyeuTgBPQ8qzryLw8g5",
  "key14": "2FubkoXheJsChATE15vxUBQV86iVdnkqsGtkrktWw32LovH45xfT5WoJT15SWFSd9CQdLKLXCkvqsKWJQc93YvxW",
  "key15": "4JY8uFT5M8vk1R3oUaAMubfirwcRfxCCQjoadmgMLNY5dcxgReFVUFD2nehZhXLhBoVke77giiimfjiBBE2Vu32H",
  "key16": "3brAfvyhoSQVpJvquEHKUcoSU8E8Bov6moJeSxVCSrUiVpmSAKi1MojbKb9k49Ze5E8TmEDRpGPqbcbGEEn4pFKe",
  "key17": "26hiEbJQFVSqszAYmshi3APMMesFXVgwKJHrST1YQHPJe9h9uSJzZnPXs9J5han4yfUYWuKM16zuMzLKfCnz4BYn",
  "key18": "ZWSgZWZdVz8xmF3HT9wfSVKNFnEodovjsDayAAPazJNHASw6HZPVx2SZQNLBCZLaU57eX72M4KmADBAhJWEHCih",
  "key19": "3skgRW77YsYgGwPu4PTBZFDFVFZdY6pk6L3QxJb4ZQaUDf377MSZNmdfu2zXi2r3sEiFUjjTSLjfDHVzDfwf994g",
  "key20": "4NjfcJmTRpktoxgf74TxvXtdgedSdMknjsYxoz1d7DbbTbgrJWveHYnmMnfGvmzpJBbBTRgiuXXZSBcoLvfUfKgR",
  "key21": "4RaUzWC1zNyvpgvNTbQdn1bH2bW4jHByeBjoxGdTP5A1j1AhTbUfHJzNN1Hcy7XexPXZyKepZGqW9W1Q4KFsHyv7",
  "key22": "47WXHNesQgbdeF8q1X3ThcXT9fuwwqApzZVzzQSDS4Ux6g4FMtkyMyoPVWec58aXV3XUdE9CmxexcpRxmigMPxJj",
  "key23": "5DcKDv6bD2C4M9GHvZgMoyDxPg3eNraBzoropTW35UkSpXhaKFDztgDn9zkq1Am2x4QqZbDSH61WTSBo4MspB6se",
  "key24": "2v89uA3STkHUG5hjqedirJH5u53YHV8qy8FMFpikuhfgXxpjzPpnayJbnURgv3iDAS77RJKzXEnRAVfYcLR3oL8W",
  "key25": "38W4sj6v4GvjvcFpRo8spkv1FDRAXD6JjLKMA736JkGN1ReHL48mavqA2vgNhBpMYkT7tnF3CV28gvkKu5Xz1KHE",
  "key26": "4YPF95AMcV7355mZDwY7piZ9MPnNDkZe2TX2KwKDsZd2XPDFPuDogyyUm4xW4BFXUzB7KNSqCZAH8QmSbrD9Ak46",
  "key27": "5UQcZ8J48Fjy4GbY4iB1L2f8tmMfY9w2DMtVfkAfDWfLT7P47cnqQRwA2dEqHrkoZu6j9zSybFU6SDD7Mevm4v5u",
  "key28": "hKtMRZ9FpdkHJjj3YzraE96Gqz9v4hscEz8n7CRzZaQi6eXykrMK9FtpApspEeVhDyNZxgtkfeNqhvCz6hZfKkH"
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
