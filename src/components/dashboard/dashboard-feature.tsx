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
    "EceKvi25R6inwXPXCeQFw9VkEWAmuNN8rMssJfPpkXqyNgnkv6dztJBC7tEE7vXuxFxyH8gXFhkexAipfLaXXZx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZNt1DU7hkPwWzqasyYyLd1B1rGdH3LCZ7A7m4sr6bY9BMqfDXtPaxhazozgPNzSpiZq8qvZUg2Bi2YwJFsTPyPF",
  "key1": "3CCuYA8US49qG3QT98X4wKhyE1BrKAkaNyKbcdkwGrdwC9PjyYb9wNQmqDkmk26KFibKHMna13vTzyZ1JhHVs4xk",
  "key2": "4bjMvZFHEVLV5a59amukM8Vsddtdc3f8x4n85MSvZZAjSbYByRy58awdnmqCBogfZ8dNuBs39AXguyArv66cK7MK",
  "key3": "EFVoPmUTKtAWgf8g4G7z8a5ooe2H2pzvCXjX3AxXwCYGbNQ5PyhCazYouHWsqZMF3GY9SPRLSNbauJotSbbdqYm",
  "key4": "2hjoeXH12KPxCSAqUtjfX4trpwKJEqtbjmtjnfXfiEPQcR88TYhAYodP6RnLxqA6opCa9eQLCTJkEY6grz8YRgir",
  "key5": "cPYB1Se85k7Bt3t6s8jXvG1oQmAPbAwDac1oXTqd7877YwgvwNaQQNw4NpfrgycsPwpbXa7HV9LF7JdMpmNQVzK",
  "key6": "2V8r4DpvQbfCJ9thvvqCukj2pVfyVA8c3XNhRW3BaDdCDs9UUL5eGrkVsUSuw3i3JH6PBjhbdid7J74QGUBKLgdz",
  "key7": "4JNxh9vTHz9YJwnVr3VZE8ZnrrX8iMnxHYB6e3YXX5CRPy1Zi5jyxnyyA1yRALmPwM7EySDS6gYTVZccC6ffK4RN",
  "key8": "3DeKd89BRC4C67URb1DEkTFp8GV75mnTtidbgGoge9oquLmHyCTTHDPBQLtT3siRGFBWqkedk1BQZM7jvdtasL99",
  "key9": "33yZBCdCqqh9hQjLdiReSu3R3QzzsT6X19rMBQ5b6QC6raD53fVEQkSPN8XFZ6RKhCofF6HJJoZxo1uGrJd3j4Ty",
  "key10": "4b9PNih9BGLpJPQnAvFGSWWwp5w6SPUhoehPS21PbFAURGPAb8fVsQwVwvHZ1oLkJhTeaUawSaNAELcJjgJPwGvR",
  "key11": "zLWbUThuRLtUSUJstMLG9jmSUC3ax39GmazcTAnJiWvR1WyqdF5MdkKsbc33wcveoHcv4id6eHXg6cU3esH9Hxm",
  "key12": "2RB3rfth8oek3JGZ9Uj7j9xFnfSbPszm7XgthKrW31uYYv1b3vsL1cwYv4pqbMk2Gak5qZ9cibW2DndkUQPGTkzm",
  "key13": "4MdtHtb5xs7hAdvdd34bSsQkEwY1PzzKzqn8wkW7SbjMy26XAb2NUHESSPsedmr8KYGxmvCY4Zij41hkLi3tPrpb",
  "key14": "Ry1QiHTc9A8DZrtqvPUvnrezWX8W5q5KmSQzmQnJGw8PVU4gF7D8eZXAZzMAYquD4PhFdM1UcTbGn6VZWEjtcvm",
  "key15": "no7C2hunBdehcky8DxkvYA4iLdiN7EdkoPLz7zPKWVLgKDGk3vX7SDL1qFMUp4Neyf8wREGzcv72jVuBHScei7f",
  "key16": "bRLx2x5GRsgbxrs6sXtMavcFAAmnbpH5NAJBYaEXjuMFNZcWs2691TEsWwzLgXmUeqgdmAuxgX6hCjn2KebwAzH",
  "key17": "dxkjPTgqFmjo4NaYkDbhyMhK31bgLGqhLbG7wrkXTMExUVyCH8vma3ox3MS4wRxY7caBQDSo8T8GMf7h8HCUciR",
  "key18": "tE1VemgXHPiWhWwWeYWF5gpy1hkzRg6WTy7it5WDAedj882HNAcMY674gvj94wpMyjXedrrHy6CPGAaK8MckyMx",
  "key19": "3tjWFN7SGXgwmStVvBUhksuKN3zQKjrfmwyZmAZRj4BGVJn9fqtn12EHUNunTGWmAujqVPveGgc2zZ7pNRfzxYXS",
  "key20": "2PPVsPEf5rejgeznuvaVt4dvdNtAzoKzCbqA772MtSnQga1xYFrP3BEnLEFYc39fSiN2Qw7uDqHnvMH87ewZZreB",
  "key21": "YRctCaVJg4BpeUNSXnqVarc6QsdFEckypBDPtCkWMDBKaP7Spe8inquZp1DcHcBfWfnXBgkWasqXfBszRjx91CW",
  "key22": "55SC2icJiXL5agFK1qaRzG28NHfXzSofkYJB6vAkyLF9YrDSkRwMcotk4gr8b1zFjrSqhvnZHCUMmRVA9HZNgEcw",
  "key23": "iXEG3fpySDEomRomFj7B4FEzGYrusuGMuDJs4jxseZEjcph85hvv63gpVMemvfPNWGWK67DBto8J7hoj74Q5Xfo",
  "key24": "4AU3ohoDQ9tKx8EckZk2begzFThjdXZCZ7NBcQ7k9a3SKH8PRqnHiZoGdYpHfTU5PGKcR4sqwBHAqy1RjDXLsrFo",
  "key25": "43mnkKKnfX7Nus23mALCrKuqcU8zK8EwQ2cXNQG4EhFhVpdWYAj9UACBVZ6rLMAPqpJgR99yUewPpaj2AQ4amPrW",
  "key26": "2H9txX72iyQ8fCXkQB16QKFGaN4XLEo3uZfrr3vmaEBAzXXSZfuaCPs5bVmpiHYRAHxj4GSRzH5yJCtjcxPVNDHE",
  "key27": "3aVZPfpLSGNxS6jKcQW1WzJiHkCA96CDEhLceGMXVLMPk1dVdfw7HCg48YGt1CQjCa27f288sPdxPDxEz9K6ybdU",
  "key28": "35AMvMim6UYHVy6tzMfpbddxvJBSbhhGW18uKtJxSfUiQp6gB3uiWFZwKJSoUx1DnnEJj69Cjm9JgNc6yTsuca1L",
  "key29": "4GmsNyBYwR5sL5wvRxW5jzZUALsEbNvDs4HsdG8xanbgEgKFevb52hTcBmV6uJXGHcJUaJLVtffXHKwZ9jN3Qz3F",
  "key30": "2sm7u1sv5HPrif5vHQNWRVz4h5bmoLmxARAHxs5q6CnJVpWGYL5QuigjgS6w14mGiuLgKSVt1YQtzW6WsyaNJzfx",
  "key31": "5xn7d6etUjYCpXv6SX5G8TZuHwadDAb6CxJF6CVCQs8iVUiDHjxcwCeF4cDN5EtZN3C9mUQWaQ735H5Wage5qUjD",
  "key32": "41wpDHzLu6CocnC7hLB7V74YVtJLtBikUm2Rsn5YdhiB3VojW83k6zmH42TnDbt2eXUkXG373XDCAhjuRGENqzNX",
  "key33": "3GN43g1E9oWR3PCwWakGDdMeapJxYRetWt1ENLvzvtogwbsLXECRDmo7T8yNhoMU2J3hU2nCWbSDkbmroLj3utCM",
  "key34": "38JTdXebdiDZB1St9wLFqLpBJN8t2reE9MANCTGfAxiYydL98wA8CndNtHh8uvqguVCnmdbHcBuZfwZLDFVZFp4q",
  "key35": "3PvB3eyriiSVGujVNaH3s4mtYTttvUMNhYa11xKuuGsMV8dPioy8ViUMgALkacbXKPXAbuAigMPgSaJJ2gCueYS6",
  "key36": "2GRJG1q4WhtnqVtXydngf2GVm4vTzpyc2YQp4cVb33k5wXqJN1gsQafCEDnuvymVdHm22r4kraU3avsG1jWtnmEt",
  "key37": "5prXxT8WCWDHyDVpqttjggPGVq6QJeM6LY9x55zSboCNVQtt9tPCeGvfaAcBt9YXjWYTfADwunHJztUvVQAGEjzr",
  "key38": "rUV8zec2SrFwxCGkLibSfTm2HnWv5ggtnZiyFUoSiCBNG3qfuKCm2AsaRDcmPnMxwVf632FgNjQW9MNfmC5eWNk",
  "key39": "35SG1VemUyCBBmCtWCgxAQD4FAegGUzKkPrrxcirBML39W1cZHJ7cnqG92ZMsFMLtxK3A1EvknP3zdKyDosDWj39",
  "key40": "5Z3bVQapMuE3sZ16uGnzi5Gg2p5CRqQeXcowF9Q6kwQyEZpcsWsaNHuf3oM6WDXZr5DxBHCFfW3jQE3RsXcH1n3i",
  "key41": "4ewjL19k7TNc8z7S9Ev3UPH67wBprr4QdtPMBHcXbDHJt8i9xBcNt8aG147aUih6figk88fcmA7iZ2r74oseeupn",
  "key42": "KGBAFHCAXVBJjGNDMGGmzxZoB13qLtiAvXLz3k17aWFSk7utsWxWrQ5SvCs2C7gh7ssn8EX42pBr7K4sLMWNXHc",
  "key43": "34Kt66yPwUtt6FqEMeKhwzVZd3EPbrg1r1yZCrUD5kQVuqk1wz2EUWyajZYYF43QrPCmHK1nFvAgyeXyi8hfgLvo"
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
