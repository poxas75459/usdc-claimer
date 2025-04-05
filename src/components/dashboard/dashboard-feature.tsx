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
    "SvA7Dm8QASdefPecnqHpszqeKhRPHGMbDvc8EgGikvQUbNGDDc7ei1VrMqUcQkuXYCXow1v2dXqmUg9TRNEz7J1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EVwREGRdo3HXjizfYqh2Sohxy36mxxEm3tQ7wNNWX9AYX4JwroBRhdziggsBs748XBdcoThosLGZPCezNvYKYi5",
  "key1": "e1xEj4MxzHKuGJWbz33nq2Rc4AddVP4maYnZnDYRZsdyoLHHgPjaSPqH2sNfDkVhgGCc433tLFvV1b7y827whQC",
  "key2": "61qzkTEiVuSYkeTwBeCYVkG9hTa34McoAAuCci8MautREEZrN72ki46jRtaknf3LLEGu4zvTbNqgxVpSmHWwWAex",
  "key3": "3GDm8CKw23GryGq1Wgz8swatrMezTmhDoaYTU5sSpspF6FHjg1ebVvddrum33kpdZ343s6hzpVXCRK3SMiUijSkh",
  "key4": "5Ku9kzhCaeDUrtvmRaHUCPBXSePWLFsxXNfh4txMGtZ1hcSKeuh2DdKrTWBrrbjnqEsTuuTDuH5E5Kc73SnKXh7V",
  "key5": "3qnvjWdv5R6urM9Fg6RvRJxZSHZbJa4qoqDTSnMwevjuTBtESK7B8NonH9QY7EWkUhS4NcuRjijTLDq2RWm79xZm",
  "key6": "2x7yz7GPAeskH4aJDa4Gnni2TxM1r3keBTRqwLG7Gd6Rxu19pUKFgrzc7RvYCsT2KtkspVzytQkF8V7vfXw8BSzm",
  "key7": "4k62YFwmXRDsJBN28u8bnBVgrFHGfWH9ehn5pNNnWZa9PsfF4yeNHLvt1Vt1oKitqtrbPF9ktMC45BPjw4EKHNEN",
  "key8": "5P8ackYF5PLqiF2DouBsg4PzVzoMt1Au2bUxLdJNzpJwZGC1dGfHwm3rTzWytii5FT9GQLLSTFWipecmJvJt9HyN",
  "key9": "4kRCTCvsaZAKzMvBUWa4WEnvEozAoHTcsfNRE8rWXoP67CUyEdQrsDFnjGfxovnDtiyygp3jdyXPwymeVKT1cj4C",
  "key10": "2STEkzKxCqraEt7uMjkVhpQWYKUmboDNooe4znJRN95z1Rai2MBHH3LG14eftxfTJLqa415Wu84AMgkbVgjgDVvN",
  "key11": "5vBoR2wv3q8ZATndiip8LQEFnR4bLnLWDNiiN45qkDJCEkwSTXjksUXsSyMbxzSL1jjHZLkXtUehK9Sm5LcBz9ug",
  "key12": "wiCFAeFFkAWJRJL8aEpfojjXGweV4LQeQMAwjuQPDiCKLSppQZVSuzan87nF1mMEu8ecSPySrNATYv1pAZSzs83",
  "key13": "4gBWSnMEpkEgWmWyE6HvSHN7AZY2yEXDAuYCwb2zB5Hgrr1rCG7WvJJYmBeaehLfWeNN5Hp6kWGRFqzum9rKGFWU",
  "key14": "2DQX8HuucaLevG9RBwWy1ygt1mViFvvmvdrLvVQfGMsZ3ECAWP8o7wPtJ8gSmB3C5MhmiiHHqTsua1cYmFsGUFCy",
  "key15": "4gePTSm2cgSt3ZoVUrHgCP2fAxw3QZuUpM6xDaHYEhY1prP6G8NTUWRW3DqSto7F8xTRF7DqjM8Q1pz9PAzHBvT6",
  "key16": "5CACGc4gJtrMCSqpR8Eyg3G1e1rRnEKAjcRkVkRvxXzotK9Msfcj68tPma6NyKekzZEcYQuHNPCXiH7ENY4dVuqN",
  "key17": "2oahG3xPArQF7fn1W7BtexK57QbJ6iAnE9AdAzCnJXoJZEGJYTMZuBBXAnEG9wHFG9e5RjVDmwwv6DWLLS4SqyGr",
  "key18": "4hbCwgNu7LsY7qUtGFgUfbTrwE94Uii3ejXqApsyKhPcqTfZArmSyM9XR61PxCCtWCGQfD5rB6FwZ6zSoGT5mv8u",
  "key19": "2MfuvYHyTeDwNcYEoWWHHLarf6t2cHy61AYkkPJxTaKrFpsk2YiKLwtGh4dAoKbepmkoiTU2izTEgkEY7wC5tcna",
  "key20": "5Dn4XDt38GQufBMYLbTrq7LwL8bw5JjAPu9yVaozg4RE5sA27N2rxbe5xqpzrkiLLrSFnNaWqhaqtAupEEoKvtNy",
  "key21": "3LctmjpF2JF24a3MXr2psavXBmsTWMvwULL9du9kHRgNnwJWyPEEHxZehMD4PN7dct3po5qp4RHYY9qQ6dLizPrY",
  "key22": "qcLC2RpzpsbD21Ci72yakwpxAArAnbjRQQiYtVAVgcpyWQqJZg7wiAew62Cuy9pFaBA8kCLMhcJTdKYJLwYtcFy",
  "key23": "3zukjjpuPTexRyhZNQFFAwSeTVfES96wGa7Kz7wBHfLeA2Pjxn78b8enxSiJ2ViVYSr2XZNTAXbNvopWWFreB146",
  "key24": "2yDjcdu8TTGa2t4k262NMrC8XMKHH8HTXaUYfSur6H2FKYtQZtajsKuhd9YmN5kYM62CZGZQtdJN1JFDUdi7fXTN",
  "key25": "5WEnLvDe6qgA5WxZSqcEapNfk5GYidRSiwZXP2twoL8xvbu2wDX12YYnp2EwSUCAH2JE9Rs592MQe8Qy4VQPau9g",
  "key26": "mLXUEoPWorzYnsM7DJ9jEAnuXC11yi4rMSWYhLjLCShHXHV73sao8g9jejqCzeuMc3ixXzrCNYudjdCETdr9MhV",
  "key27": "24oSQ6Ehfx3SLgKJtT7Fh23D5tAnGi5nm8KK797ZB3mitzJdE8F8hcHcciXjaVCaPjynAyGTY5js531dXdBodfRD",
  "key28": "5WfXH33KUHAEQGdJbUWFr5DnRzCmKobHKMNdDKHkiWvAqmpdx1xCC1xqxvRFrMGDgFCF8EVMaks6TabtPAaAiXv",
  "key29": "5nhorDHFbPyqoYx6C117qhPgSkQp2hyMPdmgztHMvuX4QhWwQ878zySRBgRocL6mjJTjYdKJPVqwUiqaKEWNy9Mr"
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
