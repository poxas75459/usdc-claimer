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
    "4exDWZz7k98RjKn7HiWjavhE5K9D5cQniEFnaFYTHZn4PERNHgKSH3qfpKVpfDKkbixDfEQ9zjo8KKUhYbmS4P6B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ev4MyZ4Kenq8BSGfowknWBgm1Sh4cGsNYhzJsVxhoinr1An3onUgkotVHRS8zvHRHobus1iqrT8zVkPUyDTHyZS",
  "key1": "2fKPQVzyqMXvLKV4JP4czUQ13V1kXZ1z4LbB53YYCgtfjK2pZcj712DowNCfmNQ3HAxxPLahEhCULAda2tbDeP55",
  "key2": "4HnwaW4w7nCASDWms9Nsv67LFWbioMPD3nWUHG9dNxp6TEjpVJakvjBjzZzoB7y1cTpsooawrTacQjyjUGAKsovS",
  "key3": "2TsU2NmSVVZKzmG2LEhFkun3kEzVM39Y8ujRkF4g4HQVR21kNZx3LEHx26GcgPShMD9rXseJSz5a37JhWREW4EVY",
  "key4": "2FijtUyJgkUeqyqBXxYPqFUzaarqqqGLPM4qhGyPVHDcsjfErVJ14s39BoASCR2AS6vGNP8JdWxfxyVey1swLCjR",
  "key5": "3pJB4pfqC2Fsn7KTnKE8waNf4ySbKGgTjTEugMAaJ3vTaJuWD9QP6i2nBE1Yr7yXpQuVH95pdaybbx3XKXnAHhbE",
  "key6": "3h1rokWnTEAcfUqMaijqND2etMfVRXFosUQzG6HEggXVMUssSBqGrSpcnsGgD83SdUnHyimkNFZX8ks3U5RcXo9J",
  "key7": "5HYmFtBmCF25DKzd1rF1QvQBqoymgkV8dnXqcAVPwCrMzEN2TadwHDyJRGkbNdK2mMbozetr7zfrDyqNdD3RzMQW",
  "key8": "p6mCmW8HtcK1cG8EYKpNeztB9dRohsiaxDT99BzSNW9PdPnRLv2at6Sks8mNkg8MonEEfjeSV2cUivxvnotZr1M",
  "key9": "4kxjFniAgVUPL3PXX9pAHAwoJV8YouoeXVcaYxeeR8tkAh6cK6V4xy3ovtwV9eVp58Hzfz5kRbt2ME8iKA6HpwEp",
  "key10": "3YsW2Pc1nukXvXFcJf7tdysSubhDsFuSH46ayZQsipc3vdYNrgFmRMcuaLyyjqD7nyGFHG7oYt9G5cTCM4482qHF",
  "key11": "3ZcfZE6EM8vkuU1Zm9xvbbuni4t9ZeQCaA3CeWSAnJbBxoWMfUfd69fU2JyX6bya7mNJYrMrtEgoAivTNphVxQBo",
  "key12": "34db4CEwA6AD9iNgk81cuiFQtT8dZ899xeW5rL5JhjdwHNxY7nvWCewViJQs8RVc8iW2f9HA8iXnK75BsuZKcu59",
  "key13": "5nJzu9PYJN7ucrWcne13GzwxgYp8g9zKr2Q9PXoF267E4dFxJN6SBTcAywE2YXxzmH9yienGRidKn264QfTDSr6H",
  "key14": "iKyrApKbXx3JYuw1LDUf59UL4oVV6n7SS2qxm9yoxctMHMRQ37oRttfsYJ1TFcJHhVSJqFi3TQyKPjckc8CJnwF",
  "key15": "3n6pB3VQpEuo57wwNRsdw4QtimZAvhvPdLjFYSxL73toBJehUGepjbHHG6EiRxNQHuhg9U2uAFHxqPRr97f4Q5y2",
  "key16": "5qPknDWtQHw5JvzWWUBbKw7ab7ZWemGfJcer1zbT5cbRVgrTARs79X8vhRiTBvodJugHJ2gRqAgzp6XQxX8wsMNk",
  "key17": "2BtNHrL7Gt5uL8Hux2LimV1HijkEk5N6RH4EtYb2aGN4iBRoTvrm9AugsNvnBUhA88mJUj2BuWUrTVY9EprR3xRj",
  "key18": "MC8c1VDaLkhkdNrsrNNKQ8JB9cVskcepGvmupagYANbp3StJkv3qvm1VCu2n5AzPfeqHMG9PkrzEXLcPrYDeRqG",
  "key19": "2qhcmMdvWaZr8qxFE8cr2639B87KgpMP69b9EhGLeDkSSeYxF3AJCeQaYx1t3fMH5Aks7bPh66mn9ypQFXLM6Ms5",
  "key20": "4dMuY7W9nNbhhhkjvFh3E6xAPzxEdruBSQuGbJU3PduL7vhEoR2dbpwsx2CvaLirTsihn3VbwE83jzmPnqeKMfeu",
  "key21": "JesLkerxvEAQdbM2MMb6QM5B9GrvV8RJAGBZSWA7iV3qJTecCgc7fSP9fF6kT6XbUDjfakGayhjpbcYQcBiPNuz",
  "key22": "5qxBjhPBUvhj5wwAuRvBkhK7z8Q8BESm5sv8frSFGetiGeS8UypwhB5a1zRmp3u3MVyvEjTmocDC4b4EjGZ96fTV",
  "key23": "631J1JjcgbQZmDijPetagvrATtsN2ouWJBNf6dCDJCkDRMKhh73PjowMrg9JE2R6GjUtH6V2jkQuVeNMGzHxCAzG",
  "key24": "3A7zD3xQesfvvz8HnLDYmPgsrnUebVMH58jCvyqbcRx6WWfvSJkoowaMh87DKBWAET2mdU1kAxAhrv1XzQr8N9LF",
  "key25": "RnLKpwA1F2HW9tZzHNZovKnwvT6s6HjZsAuR1JMDb4MbaBQSrLuXSkMkPwvfQpVfE388oVaxbbt9vGGVWtCq1hu",
  "key26": "4VUipVZoLfr35Lf5PzmfN8UZDPo85St1G1vsxR4ZoCBM7c7yinuVyPd7hXQW1kms28LQ8BZeRFMDV3tYPi87Qzr4",
  "key27": "5FtBbppMsKtBDs5jEbadR6YVt6XkjQXYvUJXkVvxNvWg72LnBDTBQrEXef8iZRmMCqDZSVaU5RN4NQyV1KUhHUZr",
  "key28": "3v6y5xtfDqeiNBPkfejJKc1PFKEfszWMs9AJ8Xhp8m8eQUbKxWzXCTSt9b4MNgnsYSmEzt8qGXBPBKuLKoaBzF5Z",
  "key29": "5fdXPPr8SdsfwhdpydqAmMDC9GtpNL31BKwA5jPimLb3Yia442oSRoKBmUpfWdeqMUgXj4E26KnFj8HGAJ7YL2Ut"
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
