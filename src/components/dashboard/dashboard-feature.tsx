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
    "5msquxgFTSTPD4EAzXYtJVq6DmKSU1kHGZ8DuxtqfW3NNcpR7mx3d49cGdLEyuH3Tfx8WgiEfBs5MbFxEJ4Zuw2X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uDceQHe7JBLt2pvcfRwLpkvqZu92MTUSNUT5ZXAPdWDAaq1sZaVkjCm1XSK7PeVcbAsz7Ggthwe6RxfPWgNNRRN",
  "key1": "3QAjXoULhMxWSqV9xbjDy7mkBbKtfJPFor24VPEywdt3qutFruJvRC77FV7c6zFV6kkK8R9obPasyPMwyfst9GXN",
  "key2": "3JjjZMq1nMc3kS9mJuyzLtcNQo6rYkCucH4L6iAHxcJEkwxz858VKMLLfunWHnwKknq9S8HrmgikGGNGd1rZuExG",
  "key3": "2NRH6Sx3JRiRatcV9qGKL6r8SZRhxpcvMjHj3b2GZLdBRMexQhq4ABCiwP8h8sacqxLdZXdQJcE18VmmmYTQduKd",
  "key4": "64tUbtYvcPkRYPUACQPARQNY3SRoHf8cxNEKuwwjnzpcT2xALPv1YyHaiGCt1yEWmZnxk7WENcGdwSgt9jUbTEdS",
  "key5": "aXt8YmrxxNP8wPadnpBfttCb6ALyXkoajjoSaphUdUAdLMVGYagRinNiZuash51kYyyFE8Wq24A4e6GDnCGRmXB",
  "key6": "2HjuAkL8h7MM82Vhv1XMeX4EM7vAwejKn55jLVP6tuNqvEUbn3MH81EgFURctEju5cHSdXgeZkZSwvbKTVYETtvB",
  "key7": "5yaTywxP2aVU7RtH2ioLN1DZ5BcYnnoh7bNEb4uwRzPqESrhfhT3WH21KELhcc7PyLm2a3X7TVTmzM8QKtExMkvb",
  "key8": "2gWzXUhgBRQHB37TfWdQ3s9bGJ7xBR9kSQEhEpNh5ZYPBfn6Vxpi4xJBDdAs2UvxPyVJ22PURdDkuua3yadLjw1R",
  "key9": "CHnmNHpXP8sv5jSiroGCD7HjTuczfzd7knLPCcFmKPWZANc8v5Ngc86NahBM4LhJmi1nzvfPGMvdDSRbg36Qt3J",
  "key10": "3mjxFgeAjQ9QSc6vWqpgGhRDN7CVRst8fxD3FqU6ADc6cbHJEWSLwbc7REBARfY4NHLhmHdZFZR9NG7gCM2WTs8K",
  "key11": "3FQjtQbHKwrgn7pPHhXJBkzjFaQJqpaAHTdmTvMZAUpDBwuZWjeFjbqi4GAU8dToKGzNr4u2QNoWzJqbP95JyGQm",
  "key12": "3kVXhsbiJDESeZ21KPUjpnBQb8CnYDGLm3AmFuT8Qet6JeKEp1cmhgtdw2LDDBR9Frh3UMN1i1ZA8uYCTFfryCec",
  "key13": "38vwFchUxZ1XVHHHeEcvQhKmmVGECFrAbrXREeJ4rtznA8mwFJZWR9zUsHwd1eBULHG41jkvFCAzkVyjM3MaWUPx",
  "key14": "4vAFr7NrGyG68FWfDXAYicyCV9hhrUmZcAqB1WZk4D1NgES9huVrrZTuiZDwevVdUpx8uctzWwvBVYTq6XcPCvaJ",
  "key15": "4T9nDkR1FTFcZ4Agc6AKeey5uS36suZnoT2SLShTtEmpDeBTFBv3dRNdhGA1kWohz2Za7WDGsujTMGmCgMrvE3vg",
  "key16": "34nsYRrTFR1tAE1DcxgDtqX9UXCZVypR2QVdkdyFYkVNg3PTpjwCvca554my19EWT87FAPuXM2SRv3pUqg7hHEj4",
  "key17": "5EqErNXh8tEqBHurmVJoVTcU1cW3kvfEyKz4g3ELeLEbY9GdHdX3QAsNtxJ8U5nymHs8tALSwwY4KjfZcLwy6ap3",
  "key18": "2MEntnnLtBzuCJv7iTBaX1z6qUAk3kfVgzc61ummJYRZYBE2989RyRYJeBL8A2YDg6Fpt96WQbvd1CQBPdMwcgFj",
  "key19": "2sEh8b3BNoKjJCFemxtUtgzkHf5uN9i1CBF5v2A6P4kBfKLinoH2at82HKtTTGdcGnzy8yc7VXEAhpPneHPsE1bh",
  "key20": "uBr1MeTAxukawSGX7jopNvqRoNZjoUGe4ET9MggsiUdPR7ibaBiWYFZzfVVv93wkYFCQ3f9jbrMyjjRtjsUyZDQ",
  "key21": "47wTrGqRgMujJhqhLxgGXdwfV7vJyCk6BYteuXXkJTiom8FnzD8ZLc3GBBjLw41GEhHWgdnSN87cwXfa7z4q2AHD",
  "key22": "3E7oehMmT58mxGrCXAan43ZyuiCFK2Z3BFSQYJt3VCE8q1izUPLXu4FKX1TiskxzHpbP9ErUPmJue6akEqVkight",
  "key23": "4u28PG9LFNsV97WuPV1ASuBCYquFGfyfMHgFFGCMTfMsn5wmDsKAZTobAoapn5wdX53sVbZXba75itW6C9oW8BbC",
  "key24": "3tCSbpnZGJiYe8xdRU4cCxreRdx1SMh4PCiqpre253YVd5wxz3T1ckokYn3xU8Me9xXfjKDb4sv8oxvzna3HbXAV",
  "key25": "5p3tQTFErSbDjko7XqhFUCUj26zCgS4hvzkJxFeQgkkv8n3UEQKxSxsuGh3kWz4wZPBkZm6X4F3VonjvNi4XL9Mk",
  "key26": "Fg1wavqCdCsXSCoVdPXPoBXi1gYABbj7JgvS3kGBSQpktnx8emi8TsCTqBzprwsWbi6JSUXfMABYp8NHXoyjn1q",
  "key27": "VbwQL4t98HCyvzH2eqCDqcvNkvAg6ufASaEbYWZ1UH6ZqpYDwntnH25kFutEB5RDLRkzLUXCUPFuP2tmW1KYk79",
  "key28": "2kUaFshysRGMmptR8pwDHMycony3Amp9yGQtwgzU8pVo15y3G4xDEUfm8ui3g67L6GDVgzipyJyTZFRu6p6DAhG3",
  "key29": "2PKp2hBs9xSoXnRV3wxprvPf6RaD3A39uhk4KDQGs6GUzF9h4PP7twqGshXqsmLP9dBf4d4YYjCp9ZSv3daRDQ2h",
  "key30": "3q8FFRuV4q725KAwjLvTLHkUVk2t6QGyVYAzbWFpecrgsxoRePqFW5ivjDHK81XWzALcwafhYPYZMzqe1qQ7pDdB",
  "key31": "5tuGJNYN5v5UVmiJ27LyoJdiRX6JTiRKvLExgRvzg2G8T6NFtsSmueuCtoAuNDgDTjukxrupCchZNXrgRk83VNR"
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
