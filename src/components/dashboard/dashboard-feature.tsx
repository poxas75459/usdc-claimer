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
    "5H5PV6sr3uZ8mTtykLvSvMWKxZeZ3AokiVR7cVB9uZutFikLkqFboWbzDtT8Kf1Quw2UPBqTVzEmgL2D3Nb7rExL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZUDzL2qmp6FpYrgZKxW2Wvd8NAAPTPtpu58P24vdYCk8nHtE4qsczGjK9SWqTMGZimRoUUZHRknNohHnRicXjpm",
  "key1": "TogeF56NLmrXW8ayGm3L5a6hgsSUEBWCRC53d8DFUcGetCK9EV9SCZfdK99k2EQo9yVVeTSnBz5Hqb31bYeV75C",
  "key2": "2rzhJm79i3txAVN3drV58gQyA8sCZdG6gpZPX55Q2AFZ2ScMaSKWjtcd514bZ3ShkTVZ28653JLM2JrTewkdEk3E",
  "key3": "5VWB12eCS47KEC9TmwdiY72Do8krokooyaKNEW1Ly8z1BVi2u2suvsi8X8dMM1QWGhEyf42jcoE9LV6saDqG8gcR",
  "key4": "4M3PKnJxXApRSLgUktRne3BNvDYF4hjtjhH56bmYzYvGCsqrKbVyJsLXiV9yuh3zQ3B8Lq8vhYabRMTnAQ78akwS",
  "key5": "2yCpHBtz5wLPT6JfPGdmuHTWzPqCAXvWdbQ6oyPEhVKqRsdB81KXBxhnUNGMeo1d4KuEWD7C6oGhb7oeFhnEtd4V",
  "key6": "mUQdg3uMP1d9L4Mc2FVs91ms39dgrc5oY9D9k8qKkbxgH53UaEdH7mYa5ucuSiXcYw88nZF2vCeBY5FHpXyz1JP",
  "key7": "4KYe8dLpgpt95ZYUg5ht6TxfSExVafQH88bh9UsPkBvzWHSmJTusAinUkXJZUGwUDFKBv5cGGp5MDnBZTKKmNC7L",
  "key8": "5mAZMynY4irSuXg67365Mz585QDXxmyBG8fzNU6k85bJRzPywWQ8GSAwx6cvQGLisdCo7wzURatGoGEVZYxX94io",
  "key9": "pyxEWCyEBVbtaNg8FfUt5ZHnWhkNKsaKLG1sezuvTuQdrSoDctazZ71FW5MZukFUNqxhN4wE1w9wdc5ayCJBWir",
  "key10": "L72hADNXGrDa37XXuDFynLKv3xUhGpjeieCmzjb3pm3i3tyrnJJMoxREtzuubPo4TpEgpnFxLPtKx3tC6Sjnr3C",
  "key11": "oo2ZNU9BRg6ogMm8kRhhfunz9DQrz2fMGnuoVvjshX57Tf9CJ6cwzS5pdAxJx4dRi5tjccmsZ1h9nXh8xNsrFPP",
  "key12": "588Rf2Z7u8KQvTtQD3tjXQQaCD3FY892WZzgPPMWFk24xeVnWn5CN7k7VRB36aBGfKrbveHawkHQughy4NaEP92a",
  "key13": "4sZ4533svVCaxiAT5vwcb827Uof12Bj47ogL35nEwkyK4EARA7zwLPpJ99znQ5CFM6RRkRQiDJ5tJPKsvy8RAudJ",
  "key14": "3wY5FQSpw28SXWJWHFnsdjJ2wtwmdxagyQo3PkHcvkrdvFNiyQi3EcLTY524VpdwqQojvrq47YWGnT1N5gHEhoH8",
  "key15": "3UBMJvjJwadSSAWLMfaDzupnVzL93CfBdybt3keu7dQK9hbmX1xyuFDKtye7RUkcywhebGJRjoG8RjrVNXSa6UAK",
  "key16": "5hLkmniPnF7DfPe4iXbaoYNw3Vxf73vpRhQQLVsCt1KMZ3rG6LtrmbiaAQGV5TVrfrs2sh6wryFYKKqZmfNCGzNb",
  "key17": "3aTgmeBXxvnCxXyTXtCXv3Yoka4QDqbY5rQSuEs1U277YV2hm9wmA7htgJ1sBcGqJLCUv1J8JBuJ4Pf49NLJwgUG",
  "key18": "y4bQ5kARAyykZeGqKsZwNswttkRm5W64tBbt73n2Q98mNxF9hiRkEcFFzJoseGGjiV8ZyQRfokY9P9bFL54XopA",
  "key19": "3pFCyai4xNYTFYxEtk6gnMJihVqi2ryZSo4ZTvgTAeXVpXrPpiVuJz1MiBBQmquQH18xNwZT1KN5RjLZxf44RPpV",
  "key20": "4LsCU5qE15tSkEA87qepLaeuEkvi2cRN76vvHr5FKZQTDtuLnxTWtdWuVYKnUrk7oEX6p8EPAzctrRyB6vQjonqa",
  "key21": "7NEeNQopZX2AfttSy5HS22t7AxxUogB78Y6ddhR9amT43TDLkLHjVuN3EvbBbpSR8hGR2nomoeLnHXdrRv3KLbH",
  "key22": "5SBG7r9bDY2A2tRUpuechWsXUrkLkKaYsugkFPzDwiWd96LUCSbFL8qsKYea636we99BvLxzPNg5Fycai15UJ6WL",
  "key23": "tAUXTDijBcJprAzyE2myMEY98M8SpQybEREV6bYfJ9freH3DWnVkMbwLuKqgzVaTht5u4Qq1GjqcaigPvX7wMFw",
  "key24": "5nDGBw3m5ZX9NoGz65AJJEhYhbbhi7waizSiNn3MEfDaZKxBEPo1vc32aMXwkxheU9igPsvron2KDEsottT9kCak",
  "key25": "56KsrFAE2tJBvDudomvKit6UbwSLPkC7bCS2jA9qa6GQAwu1uYLQpD6cWGHHSFkmnuojAE4oKzbkA1nqfSvMrdPA",
  "key26": "4AuGRNa7PNcW5evWwtfrjCSU2LAnwp5hrgdqANjNscfVWRtwERPvrrJBwEejM9FwCXsF5koJYseoU8ctfFvF9hJQ",
  "key27": "4Hn4RMUYLjTGeJX7pZv3pfPis8j5NWSXTuXs1mUjsz8mYroQfitEwe8hnWJAkfHrpYdDxQPsPL8USsN5Ah2K8cs9",
  "key28": "4mjACRdd3NdxLQhXnc6p67khqzyLXeXWUs29TCNHJbWZJAN5hW7ueMscDQC3xUgkkfp1CdWKESstbDnYAFvZsgTm",
  "key29": "ZRBu1GEXLK9QETzUhVsgKZXGjfPm5MBh8euMo43tVpNeYe9itsTTRJGSDwMt5WHSUkWswP1NiLNxMync76LoWX4",
  "key30": "5iP1w7brz5UgYAH7pitre33ArnoJZ4brsi9R22nCyFec1HSMxKBt39tDi7MzF6PePDHRiZE6AdasQau6wxN6Zvz6",
  "key31": "4TBRA8aNRqTq9qJiiahjwds5azi8Ga3txAPQ3cEgadkVwg2sg7TcdhpAc8BJZWa3VBqopRm6CUZyuhWw29H6gtbr",
  "key32": "6423RY7Ty7E5dFFeiatGRkX3ApwZaik77uttYEcAtXxk6yGqCiZm9x9ZGzAjrW7aSZSvuwLZHCpzNY46DA1T8R7M",
  "key33": "nu7TT6P5TU3jZihZFJwDDutHS5iq5pyzAmG34LNH1cPmSMetqLwEA4hHeLW4SkAqjVAqF5wppfQYX32QDtkhatu",
  "key34": "5JfxsvuEVcveGmit84f9dEaUzT19bayzKrfVoosbWWczQUUo3AmtULma12CfLRGNLr2idn93vJGkpCQKUFYdoVYk",
  "key35": "3TurW3bGtyQ7vkG1q3qMiniwGysHjt8qwPZBkdaTivH5MwCZ3xaCapvtHqgh6kPafJZNjdeiExs7YCX4UdJPGBVt",
  "key36": "4wVGqkVeYAbSN3rKwuCgyZFADL6vKfzcP8pCXhqrCAZrQp7heDvHLdcTZiqyKNUWf3uCSsv4fLhijYCvch5wqMif",
  "key37": "5izXYQwDRAFxu4bvbQGyNFAptmRT8dXrA4nPW1Z223ujVQA5UXmxCu8bFtvgUeRWU8TyjUaTQ8monhrSafs8HwZH",
  "key38": "2rSX39kueBtpqcxMry23pC8CDcgXuMNEjiSGQFex4ycrg8C8rwzWa3DJ4G2Adeh4gSpvwC8JDDQzZzwK24kYnMds",
  "key39": "7W1DufbCpg1pmZxSqiAyvyaVR4oER6gjp7TzQ91K28y2aFXvySHjb53qkvVr1tX6PjyNxwkR2XmDq7tkHgukjcR",
  "key40": "zitsLVqTCoiDZHw44qMJHhax2h2Z28zdafx8o5ctR7tKs5gdf9EQjW8LzfQMUaszqcmSVwBd27kDtcJkRnrq3Kc",
  "key41": "4GQEwKd3NvS4DSToYankeF4hfYbvGhM4jmDQXk7MLzzacJ51a1jYuwiASHX2BJiEYJtXgpczT1kf8oQhdgBCD6KZ",
  "key42": "3spUsgH2MbV1pWhkp2UiaXJwjo5Vf5par3SxWJwjFMKPNhf6yK97BbchgPkXp559A4u2yBW4zM78ZKkCg28LPDsw",
  "key43": "ogGHm85JzgHdR5sqroDTMdFu4uxkYQvJvsfjPVhiaHNC2ANcicQYa9hGaNRUhDiK6YVeN1qEe58uHRDGjEeG5sp",
  "key44": "5ETLvnjSazekMcLN18g6hVchAkoKBUN6XKkXB3tAXpXx55dW5g8TrVyx5DMbixuQJ8xkMYcnGL5a9E8CTfRVHGG",
  "key45": "4PAte99qiVYMUBPfkUMQb1B7y8wNjdSH8ZUMxvyNcuc9PYjw7uZbYo1tYfMiBSRfx7WMCvvJRQYcTCcqSU7ncEAD",
  "key46": "4QJTujFTYxh6DvBqfDj5DnbBzprbBDSitdkM59Ltsd6qUteYuRerHYFWFvY4iMUGTcwJNUt9RwBgupanZehYGnSy",
  "key47": "3CYqU9vvoevY6BNKvg4aWt1jM4v3jcohCkawq3gPkjPKsUfmpdDR8gTB1sRJtjRNWxiGrkX5qWKhmc77fu1ffVKU",
  "key48": "4FAtQsEFFPpReQGRb73RpgA9DSDjWWe2qaPwECRNExNPjbBJA69gyRtQyz4ZikWoT8ZVgyd9xCvGrg5zwNgoHxgH"
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
