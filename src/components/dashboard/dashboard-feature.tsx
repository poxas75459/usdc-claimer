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
    "35yJt7dy4SfxX9JVW9g6TsH4f2K8WCN99kiEXXh1KEYkVmijJN8JQj3MY15UYDxb98N2WDRy7ESdJfffo6HeufD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49PPpZkKPp9p4NuM1Z91JgPQen5WqFDW84YKj79rbsXwWKDwa8C7i4WYY6qN61VdQx78WqzGeyqCKwYna4psYwAU",
  "key1": "2rcvApHF1mQgbCqThKnqsyodw9zxLJ6mzwjH3JLk3LjFjp6Li1fG2CfV94YzHUjRF3yboMtvvRvM32M85nJUNAYy",
  "key2": "55Zssqodztb7uD1cAm1EBSuZBDiHdLGWc8XeUxWXPHxMcBRZf7dPxFeUga2ghFCWCFU2T3t7xUKxtLm3NA1obbXz",
  "key3": "4Yp29Z5AGtdL2Z6gFoKCmsqTpAhCGzk5oGHYaDs9MkHThNrnAJ4wybjh2TFKR2YH9FXatSnHm4wLEACuFtX3DMAD",
  "key4": "3aX1gz5fwUdidAabRDNDQANt9t4FrDLouQSinwErCJmXCFhBZFVCnez3YeYHkbu7nrYXkNJGfj98774jxtrKA4P2",
  "key5": "3RXZFctKAmXgfUtvRkc7dNZDuBXzxSTy3TyNGbXgjN4WSZ5uhAC5KfZYMfTqLTRPmHkCfgXyULkyyaDp7Dx461da",
  "key6": "5iKMMoeNyKa6xrHVfFGvvqsfrhB6J4u1ryWXBiqGJ5MLkSX2hD2DPKSoD2dc1UQY1TBMdMMjhHfxb9aviKVnEi26",
  "key7": "i3BSLqHiUfVBisCn9n7cgoMZE6EppP8huUdZGdUCRsJCtH1UCkxxKG2P96R4PZi97gYPi5gwqLCYS1yTeqK1tDD",
  "key8": "31SzLAZkz27rRZR8EBCjTZ5wUDgK2wGZMh7nX3xuVFHCQagdQzgypcGgtbqLjUJqRZbnSmzSUePR2Mdrc3DoxCx4",
  "key9": "4ooXBBwvhUxQ3DppV4CBtrJLvxYTDyvXmx9McAKnEQkzmMZD2gcvFrPqPQNQJUMPLtbx1XFfhnxM9HMNRicY2tmJ",
  "key10": "5eGtzfnBVTnYfq47Ct4G2K2tk5Z72kPFRitmtt8D1bvZM931qZ7gRyuFei9tjY16DzieCKJykVMkriRbStwkPhvG",
  "key11": "oQ5HMvhRKdMRnbSFM7Z8m3hJaRP7LohVn6K1GRQNY9GYMpdzY7vWT3Z5gCN7oiisETmAiCVTtiFA1nNVg8wgDyi",
  "key12": "2T4VTSb3KFYYDES9EYoGfCVufDFm1rKws86wiRRLsfPwVKaAVQGtDQpGg95PN6vEGqoYvqi3wiQgPp5DfHDGFweP",
  "key13": "61gEZVvf1TZiJqvZnJuC1qgxbEv4NQxcPpLezjK57KY3WEJwPKs4XDAc5Eqmetp3CPbqAQFZ5fMdAv11xNf8ZLkA",
  "key14": "4idYimGaMLt42UV3db2cmiCXg43dcRuBhZLzC6RK8uccwfVbcxNUBCLumRciWDvcXNcr4YXdnT98JamZPV4NpKzr",
  "key15": "Rh5pw5pfQ7yG3uHGxA96wvJJSkKGCKpX3b1xygpKf5n3HwSBFzALXeURtKUmjnJkBaNmr6mmfKNvNxBmfMJGjje",
  "key16": "3nKwYrvkxNAYoHC8tyHAgE4EqqTQkuugLeb7DQfRKor67Kt7rrYjr3QYCpWFfBL7ArKx92HVT8wZ88Bx48SKkEgF",
  "key17": "2FVavwCuh1yny2LiJLDmRpk3XVo5dU4SEs5hMXzknakbb8PniS6nbkujMYHHumnwmLZ5qUTniZ78sDfo6EMUHR11",
  "key18": "4VFbnQirdUMuy23sbADhh85nzDrgC1hX31n98ZP81YjdYU3r7YeoShhnKuP7ZVHGiYYUoAb4QZBF843s4ephwruy",
  "key19": "5NpMQLCPJ8KJ2hhM1KtiVKSeivpunmaCJv5PAiDUnsWWhV9Y7m7vnbdGsY2ajg6GocKeyznwDjPK3jAtrmzrDCzT",
  "key20": "3HdBWXQeC82Fb3Tt1mugfjE9o84NsCYKu11Eg5qEtTyZH3pd9W4aoZKEHYE6z3wFjWi5t5GAGq6KjBe9FHQfxLcQ",
  "key21": "2s7ofHdehvE8vdJecpL6ZNpBrT35uBVXvoDUsJLf1dz9SCfeFHNoi6B6mMReyPcPgQ5m9Erf9sCkq5tUuUwRq6xT",
  "key22": "5fzZqA2eez27Wjgz1pe55CNVi56my7sUEANkn1h9QuM6dZ1porTFkASqXu8bpvgqYtyWL5xqaCXw6fPXUN6xoZ3y",
  "key23": "3r1RovzSyGLYpa7zkMTnCjqTdE2VqNUHYQX28qcLTVpspjKqNQvzR16SrskoxTY4t4cLMNeJWSDo2Wfk3e5og1xn",
  "key24": "3rdd1GTWXQWEdD5Byb89uAPUermjNXFprxnxazYtEqFYuAgtKFF4dKhMPH3Gf4ydurbh7mXtkDiLP86NXsWjseqL",
  "key25": "396mvSAAZpYxuDKbuiAQxmUeBtWRWiybZDrRxnZRrjfMQ4cCsUjg4S2qsZPdL5CCMsktXC6vZ5xAqBbEAhBBPiAh",
  "key26": "3eaiLvAJ9CAH3nKzztGp4nPX2CXkVH9wHTV9pToJDAgt6Eh8UNEjPF5oJ9qYixKWpNADWouabgTeWfv6XzrWvmtq"
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
