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
    "4vLraF996x8HmYkKCCm23ioXbunAZ9XtrY4zRU4uLMSEXToswm9NYv1bTnY4vRRVt4EPAeBAvMA9J4H3rtCp6Te9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31tBokMJrNqjKz7uu1X3zKFQvZgEAtRcgvY7NLPrfSKsCvms5QTqR2zvJg8foucSnVueNeUWq8KVxnbUJ5bCj9QP",
  "key1": "4G8xZUWWEZ2cUHEhnLWqwvQxipNTxfvsy2yULXpY6UxUQsmicuScwr26KAPesVzTe3DLxw5ZdhGbb5mQsx9Ej7qM",
  "key2": "5CTReMjZDZ4E2Ka68QAR6EgBk69B1buaTFKboY9Gcd26LeAwppsrV2Rf9k8bE9Lm4TK7EcLShcuv7tpHUvGS9qN4",
  "key3": "4DAZvGr5yWnARDZUR3rqUfZagdHdp3H38Vf81Gt7F78P6Zw6chgBYGYxsdggPBq1B8hNAxSWXt7nRqU2bwGyLLVh",
  "key4": "5koccAFzDEeULtdtZLtXpcnKpyNgvMKqqXQpeQmAarSL51dQw6AMwF7qtewC7ye6sXyQAKnMeiV41HZpwHXRe7xc",
  "key5": "5ce9N9UZZz96c8Qb2x1kiBGctML4NbiFreqjNHTS588fh1bkNtw1E17JuXhhik2Knei7mqivUCbzRfS19x3kFSVz",
  "key6": "ZbTK19WAK78EATEEqLbWKsSCs8PQa8deMN7QTvrEV4Zwf1bs4JFxTmCRT7X877thms52QhDDkoycKpcvthEKMxT",
  "key7": "3zFLx4nCyvVgXF1qy1YgJEFAthKUNLrNQTqR2sHk3Zu1ThszCF9HbQVysBBhNHkiR3no3UA2n3GzMBn8wpCACcSb",
  "key8": "5rDZ8RExpmruP9n4KKC1NnYuVhPbmKBxFC4LsKAFtXE9F5uZ5CcewU8wbZ9Wpn8H5PLZ9Kahs89F1Ffo9UKAvgPV",
  "key9": "2aDQctJypq69FGxYvuy2gwArU8iSt45f9pNndiQabUpqdWvE4UnJwge5TgFZa974wkAZ4SzEMdb5P42wB9dfMqY1",
  "key10": "5xzZthx8cQiYFMkxJeNEJt15HS3uxDtABTJgro9w3p9gDwpxF512ZZcX4yhD4f2Lh5qPJ5KaG1uBv7rrpVkn2hAm",
  "key11": "36nCmcippe8CAM635nBSQ9YS1BxCVwNTBWiKaFMkss3AwMiXjuFZvZqVBfUNpn29bPTXupCZQrT8zyEvZGevqQ64",
  "key12": "5dsq69m841QStjBkwrHnbCHjPNJACNYAu3cEgmatidvNHB5Xqozkz4L1uanBYP9JV2csBPcjex5fTkds1F8igzSo",
  "key13": "5G6F83Rt75t6j2fXkg85cJdWwQrh9u1aWT86yhLM53D81Fo9SeKH8ZwzHHh8hT1N2JamFTjinE2AwX3TBcZeXYJe",
  "key14": "2KTUmiwbBbVgwCRPSJNcj6cZPGLEb29pJTtEtWovbHC8FDFRJWbMteyHQeXDtTVJi9YMKxaHBHs2oq2oufS2mT9v",
  "key15": "3SKtw2pRcpuAuj7kCokncA2DSax8wSxeMvMMWAejUYetkbndR41qfXJ5X3zaYM7rn8EzJZwTBtJE3B1czRjf3Zzi",
  "key16": "29GrJUmNDrNfdHndBpfuTLnrkVBqgnuBdLbRmrJFM2iUxxUKYWGxtiL15c3QyhpMbce8vDSarpUcMQPSVPVikfgR",
  "key17": "2eXWYn6vzgjGnd3pXb13KW47tXbxGLzi9VMQmqyxEwHf1BGTmaVhA67zmLo3f78iLiuJZs8vcBxBLYRr8u5Fqmdz",
  "key18": "YkNwqCsQR3mfdSGxika1d4RUEs4vdXfaFrHgmLvvhJ6TSEZnYCEriPPkL9Mdm2A7DtPoXmDn2Pt1Kamxxkho9Yg",
  "key19": "2gxCZa54CoFGzqgGgNQCa4BJj4JPoEFTCio3vD6B7EzBcKcEaf5BAWjrknC453Agu4S9RDPKepHVigQYKPvz5Y1k",
  "key20": "MFG6EPjtwNMuXubos1NkZzJzPsAeG7i1CdHj6Znz4waVYtrZsVW59FjJZxHKV3ykg8ahB5d8GmCSsSDjcbZtzSn",
  "key21": "3wq3gxShYLMh8pDbYB9Qf32ubhD2ao28yWVXhpGbkjJKZGUr5QYrfxaBMcHWuvWAwScpu7AaVUoz267YHmFQpTx8",
  "key22": "4VMhKzNtJJbwYaDx1LuEy74CzkxnUyoQkhex95UhtUDyhA8FKkNhXYdCYtpS8qRPoREVBJci2ze7uRuFS5mGfpoi",
  "key23": "uPFYnsmQUsd2HcsweACXvn4rpKRWZS9EM3frbzdK9YGgm6tFGhLYo5gCy2mxHeVAzbdMyU3mfjDoZveCixkuWt9",
  "key24": "4boRXQa3FWZjQBcHYjEkjZD1Rek5otE7rj1tPao3NWVHcn4pebSYav78gDySN4AQgLG5DBtgofKpC3ASDXWfhf3J",
  "key25": "3KgkZTkG31WzcBwzd3c2gMH9WA5BVLkXLEGeP56D1cyRxjECKZaEv5xawDsWjQTW1NaujQzvJ62G6HSPmstCtNZ9",
  "key26": "4q2P6sEhmL5Zk5y8f4StZkQXfUKEmmu6VCZ8Zd2xeeoAB7L3M4AzZMVwxyyWGaQaeFLdYJ6wZysDXTCiD2695XXU",
  "key27": "5ef8ZPpQARcAuZpf9y5pMEf6aKz2sN3XiM6iDdNn3YfiaNvUQv9oif5x5pe5Dmb9jNyZb1DCLFcFGuEfMk5LM1Sw",
  "key28": "5P24vMYJXwomQEa9FPD2D5m3FDJuSiqzcHetGLogef73A1PBuPc4obEEovvQV6RsQKe1HSxF3gYUQ8yP6peB151p",
  "key29": "2rJCJGZ9JCE2KmWf3DVrR4sGXF71LaXVExF2sXcC3AGgK8ASunXvJhQ3onVfApj5wtL3Z8vVqhF2TF3KGTH52f43",
  "key30": "2DJAj7xHw1h3XxLpmv2Rci6aQF2P6x2y9hxNGnrBuCnTPXEBxEiiM9LakE79yD2mHW4GakLFeqy7Ur3uTmCoLXk6",
  "key31": "TPog58Srq7z16Z3ZQRr9MR5PqHccsvsDjTPcA5L6znbHjuFrgwEdXbQ3rFWG79Wh5wPhsDU8qAjd2GaGrSQUB4T",
  "key32": "3oaXNV16y7MCoLc1k4qfRZCYNTZUykmHaeey4vVtf2EjLsg3yDo8imVVNfAiVWyMntZdtEmYK7caykTqeuxL1xLY"
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
