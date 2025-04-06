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
    "465Detxr1LopLE8NVhfsKrBjRdujdpqn9siiey6MeiPPdy5rMizEn5cLGqQgV9EhYbftuQnyDYXZ67n3PdD7Vdvm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58WisCeXSmtbQFp3X2Prm5v5jfEQ8FBdwLgTgdnwLZ3ibJvSpNKfRcsZoGwUHxEmnSkEmWJLGAjKzQ7AGunumYFA",
  "key1": "59tmuHn6nHCAVcemLFuezu4Bnf6YRXb3VmYVhqaTB2hpE7rXKB3oC7mRZ4Z5XHLy3yNGEJcXTa7CfHPtjGdzjwDH",
  "key2": "2NANt9QDtX6hfcNyFxZsoZikGzpeN5Nb9etMtgUUqFPGqMrMuzQ7AMjGvcRFqoG4NkMVpmUVPEU1ihk8U2w9xPmd",
  "key3": "2ASNzFHMt15cQQsJ1RQ5MQJW8smxW4GA2LHP7iA8rqbyzhsDGhGsgFzf8VWcW8Nv7PkAX8JGLreRp1d6ki9x2zqt",
  "key4": "671kFB5HEoXkR5hK2G3o8Ei3bNwcJjTzS1gYbeJK8YPMU8eeS8RBvpfkEgPS2YrtoGq1Gw25ySBJSMcm6umMGNFM",
  "key5": "63modnKxmZAhEGa35mZ3ByZHW1uBPF8fB3VvyjNNdwKoGygPSWmCmpXDR8CVmvkc3nCcXiFRozjdKuW9GFzH6ZHS",
  "key6": "ES99UcjhHqDq7vXUA2y9DKGYgAojEJgzfu4QDeVx7Fp849E2zTM6gLZKYwhowRboW8CVBWD7rxQTH1Jim2jiNgz",
  "key7": "2Mh8ukXKhtfKoji5QP9azKaUBPgPaET35NX95mpcMCkqhxJRDeb7dQiGPKrZMZwPd4jNLZ2xsT7EcpkMrZVkbMDq",
  "key8": "4fczFdHSybZ8FSqvgrgwEtHMhg55JKuKaMmpcWs4Y6fa2HbYk6AwRKvFYmXj6UKz67pqD9n5ZZwCqNFYHBsBxgUo",
  "key9": "5GovKxtBoQvmVu4B6dVSQtyfnAqRCJe5XDMJ282wftHejf3jb53Z9CM56DdpHTh27RHcukptnYgZvaGPbG1FDiuR",
  "key10": "5FG98eZDxVWrmDC6s4JrcUXak6jzeVxLjDGKpHxCVzucoRrmUBqFN7xgCtd93njfcQcsto2MiWZpUjzxTqhA4GMc",
  "key11": "kxqN28rw3gtHG69pMGzWCsvHfPzMj9dqauQmvetAzmY7b7C7pX8wFQbk6VdCGKoNssZ4uPrDndatzypiJNCwi4n",
  "key12": "5XUBnSWSDXP2eM5xzxUrh4i9Lqs8FyPpbEfAYR6iQLfxAhR2YFhZkYoMWSbeZivnr98BsMb3FmrCcs4gsozRMscE",
  "key13": "2auDCi19sL2Lu7HCk93mNuzu2ySNL6igVQzh7EoZzR1sccPHQcfUzQr6S9PrqwBtMdcxogoMT4mkeNNBfZCEMVap",
  "key14": "3cR3axPMviELhqaSFmWQ5HbkZA1EhXi5ULULss38sWEo216p2HGoNoqjJvMWbmGtKvtDyaf9iMRLNvvjkhSU3yjG",
  "key15": "e1WywW1BzqcXugrXJakL7tjAxA7U3S9hxABoimHfwr992nkUBSoneww41wzD2wWumTxPDh751dXGQtj6SApd4dF",
  "key16": "3AQzAzQdWyfk2kSkTV9NrAvoSsYkaMT8N5ijChDuhc8XYUEx5VcDgVoDtECiNT7b5yPe1duYmBijosvDNYqYCrtS",
  "key17": "5Jpwg9MLDCQ4vrUfmHU8ok9ggiD5NwzgxKkvRXSDaq1kqJ9UEfvzqN6Xzp3RcL2t6RhVoQ6RbRkmR4xcbedxPW2V",
  "key18": "byxncZxbXEikktGPg8CwqW4NgueUsxg3mnaSGXC29xhkvbqNrUndU7Lw5cWj6EBNkNhFmeX7irL2c6jRKk4tZkr",
  "key19": "5EC2HmY4VDWJX9gvdEZJRhF58qd7LkDZiSzy46hV3aubPUF5SHjYkZ8ZDx7L1y4SrG3boEQjuvNabiwcUJ6nnEVt",
  "key20": "3QK38msdkUt9ZNgzE1HkXySkXoKBAzkRt3pQmsQsZptJAWq3Vc6ae2GpviPBrwTutkNo8tReNcBqUk5c4EDWJhad",
  "key21": "5gxCBFf43bKqRxEeaUmvdLNuU3ATzwdf3q2cUvxLiKuDAaomcEVBhvqo6NjKJYamePcrdVx64BHZcTjGkfpLMVPT",
  "key22": "BPcpEY8mLEUo1vALhhc48PJeM99uqe31XqPrZ9ds26GF2ot7WckmuKsvukSWqagk84Jjq8eWRb72voPSzVLRvs3",
  "key23": "45h1J6dEqXXPBxyBSZEhavMgqCkJggFJ1EEBZQ742aVRzk86KVBPhGpFBpix35EymntyjeceR1koVGUAJqgiKPM3",
  "key24": "3VqDD1USEx7znRi4LnQigaxw1nu4cR25UAscnzQvp8FjCsRv6f51RaLiBshwK8TJfgUZ1mYGsyJscSNPgZMvBE5u",
  "key25": "33x4LnF1TdrdkPiJuZshvTnZRXeRLdaZNvSQZrRhhwqaRhxnFRVLiBprqmVPeEqSE3wZMpuJjTem8Qzp8tEqTDQr",
  "key26": "4Vj7JAKgLB1ymHEpRotcFag5R77Z8YYajNp8NiAbZQEfWwroPgopSPxwM5N5o4LWk9tdxtdtwP2yVZDevdANSLjS",
  "key27": "3cuUQNCgo6vfnE1Tgmc2qsEVhSUHCXh7o6uvkFmGQocgfkCBEpqSq4oALFXXB8eRXzYeWuGZfZybHWB6xzskFh9B",
  "key28": "2gEqYTts8robseZ4V4FBrNAEyvFFbjQ4ynagDibnhHNfLD7wtFizFzxiP4UvxuKdVm3a1qziahCLTDGTLEirxkoD",
  "key29": "xnwfnxVxz51FNVQC18zHYPUibkiJPkkpFweLTPExh8UFfev6KB39kRYxKBmAiyjT1gCqpd2byQeaWLtH8iJt3Wp"
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
