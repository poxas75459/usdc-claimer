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
    "28ZTuiaJ7Ed8byy8ESkh61kmmAsBAUFpaSKQQovMA7RVwLSkwkEJu8RM6YG6G6oGzTVfi1hoECvSTAjuT1Sc61Eh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j31QP7h8SRVahAkPfcGGSpuKXXxhr73ar4tC3FAY8qDeBgjk8cQUdDLUhR5cnZUhmNTPTdwNHphQ1w2tdVRhddt",
  "key1": "2mu613nEPJXEo6vZwhLaHacwas7RuGDxM1RWNbYd8tJCh3dRppF5ydyraxJiDVX1LQpXh6cumNM7DqQ3rnTbTP82",
  "key2": "5bcPgvK9uYL3Eb2r9HQAWXQr2krHVDFLECYmsz5MRTHyZzatZ5aZfCeWsMSL5uCfbQrUEaxhNfEeX1DiHoCpq9oj",
  "key3": "2PkDcQ7Afh3oz75GP43kiXkz3vvxnWUgSLKRLT6qCS52rfevDkxphiWsK38kG8pWManNqn876iLRsFqJcDg39afh",
  "key4": "3Nqe2wP1oK2krTTYzMYq1VGnexdKFFR7Du6hMjW6SViPa4p62RUSHti9rzKnjV1YRvRA4EgUJP7sLmVne8Hc8H9F",
  "key5": "5nbCRL6sFGtSASEvQ4niQK4M7VZk3UDSoFw564A57JhLMRAogJRGEWAFVQSEMDk6rcxwtJyXnUR6QmhXsPkGTyyC",
  "key6": "5H6zkh6r6tBcKDWxwtxmjx8pugTydJBjUsZ2TWNpmyVZXPLmHknigPYhiWJQtf1CBZqTRokNULWQChvuv48r9jsg",
  "key7": "3cZtb5hJqERREYUZpdz5tAmcujDq9zMdqr4CWecYjguLHGCs3oNLqgt2iZ7S2e43mUFi77mKqpa9mfTpT57c5T5T",
  "key8": "5kK17dUL3jQwN1D8Kn524H7sN2xU3GmLNyYqqjEfEWG127fZAtbzg7aHaPUeiMw8HgDhSHSNP1R37DKA1vUTaLeQ",
  "key9": "yvPevHFcoDeZnSKpUb3Qh3aUo338gUWycMGZamhsAsTbeLWZsFgbsKbyJ2h1YcqJVd9BTywcf258oyyiXkifoCW",
  "key10": "27z87Lk4hR7MyDVdw9uArSgctgphD7nExZ2ucqMsQ9h7r8oEDeB76PcbNaXZRJTPBoQdQvQcYHHfsLdMp461zMso",
  "key11": "64FWy5SyjbFdga5rYsVKcvZy5AspBjWy8anUYQCJRh7xRPLt8K62mNC8YDBppN9sXrDEDaQt4GchTAQBqSg94zLC",
  "key12": "JThyYtKAHuoD13pEk1tZisDsfJ2XW5dopNq8WnC36YF9cCRpGfYDmhFcXvnrLJCC8jzBib8VPgXfXcXHuPhKojS",
  "key13": "4eFhcjcgUpZwX4rrfANWX6hm8vbC7npVjJfyoURTJkW3wvUkc1LBjApCDNU36bJLR2W8ombH9d3TwVkuzHb9xsXJ",
  "key14": "4o176mzeFrQb2uEmxnaM9Nv1Q85QiS5hRYuEYYpEtBKJTxp2o8Q7YrEvdE1EJi1nDUMRqM5yuG5ejsgTTbU7Kipf",
  "key15": "4eibQZkrnftbndNtoceEDRKvk57v3EEQ4jJU61wvsiYLKVyBV7gGiYEepeTriSDwUvCkKEjBTaZc3gMtdWyYfj6e",
  "key16": "5LJcREMwPrdDK3U1FAo7JxiNJPE5eMxFfJ3MxA6q47nj1E48TzmzzuxXYHtCAWYwxEY25sgTVDukrLRxzoezBMAx",
  "key17": "HmuGAWqzzgUfswSYGLALon7PDJT1BLkyptgDK3HUDhprqKcEf8rYRLBJi6nGSHMDaGRw1E3SwGYGW1dWKdHNpUR",
  "key18": "5enQbFR1sTgpZsbPt4fmMcbCW7UPKmHJawqCxEhA1Kca9JkNuUisKdoa7K5rNSWVBKbvcKvYEAbgVP4LemEj6DKy",
  "key19": "5GwABweFZTcoNHy8SJYvXcCzffo2CQJLPA2A7XT8QB4LG4pFaBDeqGX4BtF8r7ALFs9BBTAybCkVh9cGzRfAT3yS",
  "key20": "x8jmEwm5YaQ5whfvrxQsx1PWYEwiNmH3qQxA77jWJ47tV2DseQiLePLHjrJJ26MP7DhQaVGRTNUJqwKUgLHtJPJ",
  "key21": "2rs1nGzy3EesQsf8UrkobNjXBMEpMWAKPkEciT6DUrUsY11g6UZ7BE5j9qvWo3SDqPsHcLv7hF6npJUHxAoLNTT",
  "key22": "51okykfnF8oWHbc7QrSoNLb95AcYuGnWmFu1CZ4PQ9XV3gMySRDtwt5gGiXDGPLkX9aVnGLfVChZ3xR7u7j51df9",
  "key23": "3bu9q1s338gt8JevFvkdLRHrKd4TxPmfRD2RXAjnfWwRyJXzRgTsAVi99crPGTPBETQTGysXS1gjF8myWAKozich",
  "key24": "3fVT9Yf9Tgw9Z8tusWT6aHGuHJ4k2KikBDkLotpbTGtyPM9GasJXMBVyFEAjHbwLpzTj8d45K1WtYwxuSwEKtS5T",
  "key25": "21qbbZiymB766KfaHcmAKNoAX7zjPCB3uq9N1sgtWimBV1BrKS8LUXBArqexQoCu2UVypnv7goMM443eHTA8wWTY",
  "key26": "4p38CX3ErY6CCJ7oZS9aMS1cNtqBmYgRpWD9RRDMi9L2emCD6NjW84vWFRpEdrwuVL8BLEv7Q4E7H9rNS7kiMGxr",
  "key27": "2CbtQVbfb7vsTtHoU9FFccAvVmhuL71BrYei5ru3s7K4CnknhGfSqy7GfaD4B9Jnj9ooyLBWvb3ir1tYf811Z4on",
  "key28": "n6Uysp9G3UPEkfD43i7Jbmk4aMcPFuMZ1vrhfCTxPvCrViyKRjQuEa8Tmi3oMU4VqxGNtHMeKqt194gcTXBHiEf",
  "key29": "4PnrQ57xhtrQr7LuQumLMpJa76NoRVQx16v5bfVeuUto847xxBNos1w4FDNXKDSf4GFpHegPAJaNxCvUNYsp8hdB",
  "key30": "5mp7atHr88LtMiVn5Lrofuajq1CF6ci6o1bTTtXggDM53nmiFbxTp4gywNNJrizTeAe8UWkTkuZAAa6ZbsGpCzxG",
  "key31": "ErH6VeYrj6kpzB5dJNq7LUfaL58v77CC1KqmcusjUskccEEtC7nUZaib79HBZndShwRodEpHsjpv7c7VrBmc9MZ",
  "key32": "43z62oESvnfzfZTh2pfggQJHYDuAywpR5TvVjBjkMBDaQCuTTePdMnB3qFQhb4BB62PYZi4BwNYv8GrCXp9aETqe",
  "key33": "67XiUhQo7Rs13WUwrTa6Jq6fJ72XtVVLpgx4tppHzaDxrNyqJiADNdfzgg5wbR99R9yHvFANVvtzD5qpprHdtPGY",
  "key34": "4zibzLnzN7AYZnnSAJt7EadDLeGuXwKecC4vbW9YvaQXNC4gNcY9n5pY3FZPjEF87SA4Dg5NA2o3XSNqPps2zULB",
  "key35": "3VgzieFNkiD7oHTPagZYrcwipenEQ3jscHexVgNPHZ6RT9gapxYHwQyetdmCK6xNygo1mJ8iDEoNyvTuNTtLwpcY",
  "key36": "5Kf3ecNngZeTqnud2dxDAEHLjgDgusfQcqeLM2jHVUmMRWtWs4Y4b2NGKRQGLoAcpoDFegi2pVe7P22nWBMJJWYu",
  "key37": "5cgGMmFdd4awtTYifLBQhWBSEoT1wMtjQ4vziUhKx1osfkoyjz6Ri2BN83xQnjn6r7BYVBvtvyAFSNtMpJpDVEbo",
  "key38": "35R18Wx2mTwXbDvxzrFvEcCb9SREtN4qMbjbccFRHLQwUU3i2kaNbfMz43E1nQxUYb1AeivhrDYQCp7Mrg2bz2h",
  "key39": "4mWGXgAS2AgvZBHJ3s5eYgnS8nqCU65gJfY9VjCPyAq6dRhygtEXy2gxPNxfgNn7xshFyanYDVjT4RWR65u9bZAa",
  "key40": "4XuKS6sHVwUphSbobPdSxHLZuRmQ2coMidjf56jHnb65Q4W9nxdUCxxGm8BSpAYirBQTjbKEpuKGWGDAmNJXXDA6",
  "key41": "121ykm4Tis9tsUAu8yJC2DWhKrVuRqgdCWv45dUbNmtKCcHyaCgCUQwtUjKxXYUa3jJb6bMdxkzShAJpeQLaozsK",
  "key42": "2AmjCMmezHGRJQvS8CiYgWnRH15R4HRFhP4jZwACpbwerqJdEVsF4xzyDgechHQ5uwmkQBAwtCfs5BzcDnsVRmhZ",
  "key43": "4jrEZbLX8ZGNGFbNn3sEd14EynLhbFSvwDo1yXzKr4Ltpz2TnWwPWhjBk4cVhMpjttPA2kp42y77g4Qa5wT9KFgb",
  "key44": "FwBZgwJ5dSCP4NTvJ8sY9QfM2gjX3guszkowoRiwMdSLi2vtw4QcYbT1Sn5pasugdZFDK6tPadidCuDEG44anN4",
  "key45": "4riC4fkTDXLaseuzuss719Gmoj263DdmDYR61nSGeaUgWay6Bt9Cddd7Fx51amNzdppnXBpDQ7ZXBBmaKyBEjmZo",
  "key46": "46sPmQoqnYTW8Mn9vo4fvX8muZ7WD3o7iDzeEuCMdQw2yNCXM98fqSjQyBu9K4fdwMqAtrtFb9LvPWBWRYsKq781",
  "key47": "54iiUQyGpfG465drAzjBroWy8KvL9WFFeMk1vGSYykwKSPf8WShf5NdyXk3y6x54SDdX7sY3ky8QYeAwGbhqmawD",
  "key48": "4nFPFLX2y14Ghaep64GWaBffJhfvkwL1yuBKaUASZniRbKjUkVinyKN6ABvt4XzEjU7iu36Pz1XWJ7SyUpu9E84h",
  "key49": "36Vcu15esAjUh7cyoe7fXGmQ5ec8URibR3vvrTMEXff7pCDQ24i3b425bGPAbZ2quygpTaNrjEbKgDY4nVBZtPWX"
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
