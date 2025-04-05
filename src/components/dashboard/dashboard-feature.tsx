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
    "32SRAhWZnG3CwakvJEfeZPH5c2UxV8CEwokGoidhVrNJ65JPkdHbAoNbN5YCeeo4AmcEMn5EKgmFJBf99e6D2jqC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H22nKMHHeHDuiZVbPExCGEn56jsYDnC7SHez4Rp7BVXL4uybucsT4qkT92KGMJq7XwaSVQF1o2UAmorjp8gAhvA",
  "key1": "2DwLQAe5qQ9muDdXzH4HdsPDatXoRKLHueT2P236dLefGdVCvkDgTbB26MFfUYmSR2zYDuhhZxFPVSw1sqgmJw4J",
  "key2": "4kxSDfEbDQzSi5VgHY9uWNC17CkYL3DP4PercZhBSxs3hANXsi3geTRQtVHLpQvKFLAa9oM2KBehPKtnWLZoz4QT",
  "key3": "2WAdPJLUuvJVfFvdbKdREw42Hcv1xBfw9GNfi2RjE4cSzKH7myNy7uXoPZ6kqaSHXFvqw6o7qqxxDHA7gXpqVE5j",
  "key4": "4S1Kvo974hmohKG1CUVVVEpcz8EPgjNue5e2FMhBpB31s4xNe7JqJsyU9a8xSu9XRDLMyjFtS66ZhAJYWa33khYC",
  "key5": "51D6pmrEewnSdLP1GCfFukjbb7DEFsLAu5XShm2cMWSV6WbEQzDRAeWYHGcKRxLFUrjgGraFXxNPgYV23jVCitHn",
  "key6": "3NU7xb2ruP3r3rr9cy7VbRY3U4S9kCfZCTBwZoDCzJ4H4vgB5trqbSowZTSqa8pJgLeoJv2MYhZRq6YhWBuw1Qhw",
  "key7": "4P9cTLbdgfzk2BgLJRqzC3caD3QWKnZRZhfRfUFZJdrsFH3x74KB93JKJk9s4cxXYV71RCb4Bw2Rtevn8gyjtn33",
  "key8": "Ui3NsgAzkq37kEPm9eJ7oUphZ5TTztSTz5Xt2TDPNugTaR43oZaX1pLe7TxcW1aZP5xoJ4CwpSkrCHBv9QRF16h",
  "key9": "5Snq8rMybDoRPgAQkdXyG6yGCPSEMGmM3d6WzoEvaG5tA8uk3f4ftg25Zx81Sfz2S8gAGRxPFHmbEGMnkHPng4sU",
  "key10": "56fJYYgcnWBD5QurRC5EFeaDpUtR6K5mm5srMvbJ2HBJ3eNKum2ZQzK9teNvvWKrg1ihEA8S1icCBEeppgnHdY5Z",
  "key11": "5HV9ueLu94zD4MC8rzPpEpEGxsjG1svfyTitmre5AGe5LKCfdqdB8gNj4DCHZL6EaheeuQHnmScqaepCjj5vrDkq",
  "key12": "2Ns6NmMxasjuw7sVdfQtPBk1ifnXeFrZhAw32MTkoSgJjNTsBkSdfQx5C1kkmPQ4gm11ZxWoZMTCnH17kpSBGift",
  "key13": "5VpU716NSNqZtDmqt9AGDj8iZw7KBVPpDB4KjF5AS99LNGBbQx9ZzJELGMY245ENziXYFbjjFNdmX2oUhMWKqz1q",
  "key14": "GU5aL4s4sJfJ8SXd2MP8tvGazmRDVkmvvParwFW4wBiePQAPV9UYceNQtP2doht7j9dvqJenm7Y1wFHN8hF3cCM",
  "key15": "FbwGmE2QAwMXm9UNHpVPQFaJvGSLdnLyRiWS2ZYQrU5rV6bTv6ZpoXJQgXFkzy1Di387jtNovhLijjSuPk5uKwn",
  "key16": "VAYhTZWQoLJqwowNvuwD4QcTKrWdwNtSDwWdjtzbqqF5WSVbNdoa1q7i7mJxCmETDoC1ie2vccKEbSQE47mE2yF",
  "key17": "4xpec98B8WADfWELNNCTNh6h65ND1vhbz8P9ZWzMP6shPbZu3ftMKvFsFbZ95XgKYMkZirC13NAU3kAgwyyooPzh",
  "key18": "23mfNPwpXfkKR6sFe7pnNZqSc4bXoCcQ1U3FTP1TccowqkiWRUrUzmZSWNRiQEeBu81bD7edU5piEm2JobeTA3CM",
  "key19": "4Kn3yBBk14mbgrjud4xujrCTGAyMGbFegtVHLa89Pe5FKfknmwGA7jdakz4cQFe2gVkxMPMcq1pzQfBYABZXWzEV",
  "key20": "2U3zjTdwtQ5JBqW2BweCfuyEF3xYH4jVLF1MNj1VYCi6zML59WC12LK5vRghcw5aDXy7ViYBSVEKu9xhPmLDdJxj",
  "key21": "2UY6FJnLhmQxqd5SMrtAuM6wzissJEgKUY8ZD8aNPMLT5esRuEifRWwCsHEHxoC2n77zUUGKwqtUGLigJHoeKHt1",
  "key22": "ohYSNgDa2xq8kvp5B5YsKQ9YpV87EFsMjh6t3UXZSKJW91Vcq2Zv5LsqKpbAKn5uNGT4FAX69PUAi5GH8rLAcG1",
  "key23": "3K2FTcpKBx48u5v9FSVjJBjLBGsDY8ZBxBEmvnJromt9N2zSvNW3pbtLhk15BXjLaKtzM7aPkFPkntcSU29xFjRT",
  "key24": "4e4HH3HnHsVrqWEXFZafzaoeApCfgJwp3PeMKHEckSVq3iQa7NMmFLTQyUX8rvTDRE9RxMkTS3RciMZW4wAuFAf7",
  "key25": "2XdpMq8Jpjh8exGFKrSofguuXTYUv6idyGP3qQ5U1yZGLW2qEMAMJi4L8uyXVwXrHg2cy4AY1W9nXbTKWMdkLyR9",
  "key26": "4YSFQa7ghxZube1WXuDUfno4teht3mBdko1svESbVjFgTxpaKYGhjHWgbWzc9iGE7JEa5kuqjWj5XPaJWuXPu8BA",
  "key27": "66E1X8H9bXJKhm5s7tcaGabDxnSgWnAJK2BNWnZWH3GaAa9x6jdpLkqAyzY29wwfQftJefWxhm1t4MFZnWxCN9Av",
  "key28": "G5hkT3wV6heq9SjaJqrJHJAgTVxNq1k6DLKHXSpaZzLSVvbPJMCWHbTDQcEWPTiJR3GPv5CjK3zEnvWNqDPLubH",
  "key29": "5cK26c3N3N2MZHFsxZGHJp4Hxk72gXQ2yGdcQ5bUe9HXkKNX5Y2LqzYuWeaQCczUEX367irApEhTr5X8SuF7pZ2D",
  "key30": "5KZY2VHVYpB4Tuxxp3h2gv52p1oAgkoSaGdwFRjPwAiFt9QCzy2ND4sxp9DeUZfKMvtswB5kip6PKd4b95BB3JkT",
  "key31": "3tPtdCNrNHRBcxLQqkqkwHbbqcgzYb4nMvc9mna6MScjEQGrWgMJg3TDF6jDwMpEhknthwUwtrLrtnh53RRz4ir7",
  "key32": "TdM2334zcZUJPFrujGjn9rEtEdfbi4z9Ku2TGi9yWy9DhEuFnKZVYSKoyuuZgdNq3yyhCbjZC2HTT2Lod1Ctaib",
  "key33": "24PG5Szwbi7o584uAhgFcrpDsMBZwiMsFyz4nYVPsia2BQqyp3keFNoSFAcvDVPmdAdzbGQg97HBwDuGKresohkF",
  "key34": "5f1kojD2iScN3xpEkZSFTMd7oqUumz1DhQNAvUGZwSTqfrcdThnWnHcizzLgcthYsrXQK85BBw1T8EAG4DP79p2a",
  "key35": "zJgi1nbJW32iKXxTqKFkNs9K8fctYv91Uvhsj7zJ7LQZcXqSwZGZgF8QGaM5GTrqdZ6oYipYmsiX5vFCsjRNfmn",
  "key36": "4nZyYE81839a3qS1uioPPzFEoD4NNSQcC979hSUUCspUW9R67zEBxscnvm8sEWAR1AYyugD3uDPoRugpErUL8qRd",
  "key37": "3hyq8r94GU9k9wrAGFdV3m4umLAP3FMpQ1xNc1sm3BrkHAY91DULYr3DnedjnmqrrXiacZ4P4ye1hhnxjW1JbMEf",
  "key38": "3LBRqeyurCpRSpQRaYraB5xRCJxteD4o13KSfXhnhaTdsjKbX4iSsAaUtru9wjzN2hbeEbFhWbLWKZo2dnEKXDSU",
  "key39": "2xUTZ1DaZ53VCqrocuSEngk3PUr6KGrtLnhQ6zARzNvnyzNZE8v9QmdudMgud5EkX7gzD6XF6cd7gypNyzm6Pnxy",
  "key40": "p7RxZ3TghfrK5jLsEkR5PqWtmDVzbXgY6YbPapywsqExdGPaHWt75D6xMJMitE3FHDxrYY6wcHXWfJ1J2hdsEmR",
  "key41": "2LkP1BXZmEQBoufrHReupPXSuS8bTjp6EqDvjZ5y83bFMZBAyQCxXXg169VDrMoP4begqc1VUhrMtDG6aS2zG9Yp",
  "key42": "2RtNPWbHjy3jjEYqjWVbkrL5oGV8Efs6zXRcaZX388iB16zr5GgpHvqd5mKf8dgKaFd9JN2t1Bi59z2HxTJFN5UF",
  "key43": "3RyRMF82kDDvGc6rHXiDTE7ZEDXefxQQDhXrUmaDCYGmfkWeDvtt8buixju1F4d4tq9u7ntKsHJm63LP7gXVgfnq",
  "key44": "27KirFyzkCwEt7X2syTh3hkdHXASAxxfntm8spHwiuM5kGPjjbxB3LDkM2w8F72X2RYiPGHzQjxTk8F5hz7wUWsD",
  "key45": "436v11mz53E8k3wJtwhbwgxGd6gbjByep91cVgDjrgFPMeHb1f6kvRTgn7zHPd2pJHzALkwszQZCyEquzsd8ib96",
  "key46": "4qzHCmFjrSqTXpJVFzsk2jbWkKGJeofCbQrKmJAmEr2eJX5Gmq5Wtmkq5CVLyNLDuN9y1dpp6DC14Ccz5XA3iwPE",
  "key47": "2JzeDd9PfPNjhgF6ifDtffrzp2nRWHQV5C5og8cPeFdPSxCep9yXN2HoMWGMrAQDYh6zChdo7rHfhcSSD8uxjydH",
  "key48": "gX7NHJwBof5WHvg57auFfav2T1yC8o1esV4wGUoAzUASL6orYxkozYTkNBNxhhv7c3X3hTckwahxsKZW7Yj1KnV"
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
