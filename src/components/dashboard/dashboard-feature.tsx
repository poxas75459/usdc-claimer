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
    "5mxc44XW13MC5GXaR3Tg3pbFnfPczhMA5h337eGTZgwyfZbrmzi1eQeg5TaG8vXMBz3dnacNQPVGnxwnTLa1Kkfj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e2cavQE8fpX7Y5AxRmYmXcTLfKgw7K8iSU61qhyXXpB5ihpS9qH1Qf3JQrdVxBDQFZnqs8S5WFDu71Q6bCsxt6C",
  "key1": "3ZJmWnmX2vZ4RDdpKsGV6ormaAyqPMxAfieR2AcMB9f6QsE47gMVqvTRL1rtmZHCfBLkbtHQopFdSqabZkdctWqA",
  "key2": "4X8RNRjBgA49JFEdrdh9GZ6kq4X9wYDNZroxy5Puzq15aWL5BtoGfwLxGYwuNX5zmV25wLVY1EVy58VuppUjCocG",
  "key3": "3Z7dQqPEo6ZPpZQhHEsGgzTNuoQCK7RhWzopVHh3gpEdW6UVRqZK3PHTXnW28t2cfKdEd4vcX8nEUNf5kYBtgpo6",
  "key4": "3QoNVNrfScaHZcwQZpLDsnY9tWUJBfV4fQwYTChkY6hqKahcgfAuWpJg2UJ1KeNFL8DGqimviEtD5cFtVwusZcqj",
  "key5": "2zwMbaLcQeTzXCXZDCGTzdz8gWAdtp5SMHLeMnJnPcmbnmXPGGRGLhbvfdbTit9eVLXCQRgdj2T84By2HZF4eDZV",
  "key6": "5K6azD8UeFefZ2S1uXf78vb4cAbQZQYFw1i1X2YpT75qFAqZ1PurwamEki1gjBvwPXuwF3Q9hbs2KAhjXM8bD2Tm",
  "key7": "32QT8aVi5NGgqFfMYWQxS39iYuM7c4JSjNT6LGYTRBMiNzDGjL2Yh3AfG1gffnCgPGaupdicY3Wju5tYKR3BSgxE",
  "key8": "4jsVFMymzcbEeQ8appMoCQBHTPKAF5cHHrkxtWPDEpui9rRreuvDzoZusVMg3nbdHzfwZtyahPq9usi2RZCWxUNF",
  "key9": "QZcMNLGKypaFKLLAju6zsoQPa43PPaxBfTEGP2mQ96foSphwvjxDnjtknfU9aBrxH2gZLghCnqEWt9ecM9Wqzxa",
  "key10": "5oBbm86EZC6WwSPcqwgTRjucRFTegwQTN4PMEbGxFT71okx6DxUxMKzbGstj4ctc9BsQP9r7j1517xoDL9ZinM9T",
  "key11": "3grnZdqzfV5s4hsF13ayC1ZKtNMUBHa9tX1idMZgLJK1AMhAUFa49dfZ6JB7snQTe5nXdE4o51cGitnQ3xUBPMqN",
  "key12": "4R99cShFMbheAE7kuY56wzb6E2nymqZefminQtmooNUGAg7ekwwfmYkxp1PMfSUdSPaQbZtnsfAU3tVjcRjn2jo3",
  "key13": "59eNka4UbyAt9vYvfydzxtdnBrivvaZgqtpJuUqenwNU63pxv4XfRt1NiDzwyYaeSiSns3ZcQ6fPMLVhhw59dhUy",
  "key14": "26qupPMSLHBYnM9RLgWn1ZmvQnimXJMVos5MY1EUJbEP5RTb2ZRamDuahJjpsiVni41gJjia9JdoQr27g15Pdi3p",
  "key15": "WaQmiKuvYRyUV7rShzgJWkwSNdBwGmdWsPf791yHopJUZzfQemSK8Fe4YX8byDhQmWHbuNZ2CNmiGxecDhin7o4",
  "key16": "5P13LDqdAGGTBo7xG1ExV4G8YwiTmpmbzyR9eFgjyZM1u4KftNaKqUi1DVRUpx98vBB77Ht8sBxGU1FuRfEL1Cqp",
  "key17": "gQBygLkYT7JKiCBWjQq4K19t5BcMXpQx3fft7As4NwmwSchJRaNnjvDzXaaW1zXtAYZAKPUAPcrG78ANRnBj6KA",
  "key18": "2tdDzeGsxP23ytm4jzvL1cAjvTnwVzabZBpgFXQ5W8HxqV53fXQEUGy7wScKSQZyUJcyW6ZH2eakrJcuAKcLiGUQ",
  "key19": "Yn9agh86KkkVGaB98sco3bnpQwgajDdsEp8LhV8qyGrr6Tz2RNbPtqfXFuGHz6eMiB5ke4kYYytvnGcvhPQ3ubn",
  "key20": "4iNRAa3hX4rKXLjqHMQxmvCDV7yDka2iEU4khUNyH8fsWBYGaZuRCo6raAnnXMBbtLmwLFDvjv6keK3f914KUySx",
  "key21": "mEne4Le46APWgTppDERHLK34bXkm9jy6CU1AGuDmMKW9DWRG28fQxzyNTqjV4Lw7yfjyjmgVggmRJa7GdUYmdMT",
  "key22": "2X5ffs39yojXazobxjcWa7RZwpfqzw8HdxT5TDRfFjQ6Guy2gqxdFWPznewFYyMa2FHbJtakBhh8XwBVThHyM9PD",
  "key23": "RsFfrKWzWJaY1rVg4MqkWpuisNt8nup2htAahXKfCjGyaKfvBEqQHy2rerGiHVC9vt3kDKZaMHbmfpqGwyEp9tD",
  "key24": "5cYL4LG6UYp7E187E57BLZgpoS9YFLy6m9neimUPAUUaKnF4pfjq8jmzWw8FwQT35MwUsWrthZ6CuHRew1SaNQXm",
  "key25": "KiJmKfZMQPyTHK2iVsnWikx8ANwkPv3SgVi4X8Woch7AcAUgZpdMZPvgKuGPgefbfL4f74eM42jq2ds8moKcnkX",
  "key26": "uDdorRJGqpEBXqJAuaLLnwTtoMBMinVqY24VUpxrhj3gZ73CHSamPjoQpRebp4MQykaA9zEyEGwZNbRE5WU6jeL",
  "key27": "3N3S81u9ZpfrDDu4jkwgeVj6LKeuUkr6dJSmcg8RnxVKy8or79cfGXFB7cMSU18pDzJwReYNQ8hmm4z8xNFBrxLu",
  "key28": "34eqCx9CkjudxJJ9zEYGZXsXPoafPdSbAwEycgqe67inwfP8YBhwpByZLrJekENPgysjvSeVfSsxssZvMrYw4nCK",
  "key29": "2QwoLPPqhVWcrK6mFbNqnfSH3akTcFBjJwmwMCvnWgyPtUejCShjk8tHz7oL6gJpqcGsfxNJJsbe6XfL3cqLmmXq"
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
