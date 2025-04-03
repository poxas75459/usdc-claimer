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
    "2ZDxwXnvmWSkVpR2YJkSyuhqwfF6k9BrHASbYpVprsFHMRmvw7gjsCBuSfNEwjRhyXYcGS8oVf3AVJtuyvDSVj2T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zkkkRjdJo23MB9hUbEvFhry3xp6mb3ZLpQM4gN5RzyLEn2KyE9Mpz4h7P1kLmKKHZ1xe6VhRucm2rR38jMohnFn",
  "key1": "4VBD8erUCJ3fWjBT3KZUsBBgrtJ7g3rmjp8H7kgUU2Euyf24rRvjKNU6N3FckAbGSktaFbNrCWimVXFafVEeo7QL",
  "key2": "4WnHJxFP2eW517ssDKmeFANdhW752B2qLQuPKgiVSyugRTixjLcocpDL8653ixCVLX9mhqNeKwR5JBW7cQWDaXR6",
  "key3": "4LkPFD84vifgeMDY48Fn5FNWDx1mcDkuk4u4C6Hev29NRAXq78UXHy56hjVDu8dbpytPNuS9b5FpEG1bw2mesLGM",
  "key4": "5CxK8uRpVdJctn2DoBHSr2U98Y8HCuMRqgvThj1gFc9SfzyhYpzL4nrstkzWpKaMWDCKBA2tJkqSQxHmTuJqxkNN",
  "key5": "4oRfAzXn59WWxknUbVfNm7LJ3c8G8MGsQx2WYyxTMrWbDN2Gh6AJPWDZ91EZtcoQYgeWC1q2padL14qsBw4pwTBv",
  "key6": "2JJphM6tymE7jNRCkBPwFgXJTdC7dkWFFPcALkiPQSDqHhtzVi7Buu6kB7PMxjMmo9EjKiU7qFxdKrV6Q2Zavd4n",
  "key7": "3MadM2VkhRf1HBet6zWoFhNtjbo9F9WcuMfbzHHh5Dmd1yBQpCcPNq9UKDreRXP51udhLiCGQnvaEcyo6yQiyjPv",
  "key8": "rqtaSjk5AQkDmerEpeYM3bQnFczz9sBVN46rZHaCLaRNnnWDR5eQwXvZYJ7PjbnCJqiwHir2WNdwDL7BBgF1rVe",
  "key9": "brNU1DQoCeQKG6N1aCN4WXUxdpA4pc5bydRY6yn7WzUoKLPLvKo5Pq7MpupBuCAsepgT1roV8qfXYSjQzy32Ppc",
  "key10": "2Rx2A9vnqA3Pg4G7qC9VyqhEYGHtE8Eb6Qfc9GWMBTfRGHCdoHnhkWQNv7uoLAAMNyvNbDqK13T77phCHWxB5c4w",
  "key11": "4CzmhACmwo4CZqQ92VYTzPao8CnVyYXrU7zt9x7bneFjWuGBzNaha2kns5yjCfecLa9yCExjdxrMXTrcHRkjSZ6N",
  "key12": "V2Q2YJjTvT1CqdNx48uZunkDCkAEfvuU5uC6e2Cc4AizC9VsFm5Z95BtphMweJQefH1tXXsaP3BUEXBxHxQBMNC",
  "key13": "4vZLDbrxPHgaZK1uGEktNBdyHtyn811AsV2pRhpp8t3izVSAkUqPxeFSdf2vxuyMZNic6uQxk4wprwwY39BdievE",
  "key14": "48tyvT6t8fyoGN1cjRqtqN1icVHGDtJZ6akmndmcFBPVfuyxzgxyDYrq5xacuSdUxgHqB8EujBfTA2Hfe8zcpYBd",
  "key15": "5AGt7F5CKv4LT6YQvPrpNiVz28unN4sNF9ZoPdF6hn2etKiwV6LFmTJBnjxyvsnFUcDwfk9nVGnJStHyCc6XWSgV",
  "key16": "3ct1oPSk1vxWgnYS2QSR1kAjJpuaG3uDQMH8hqxfougAB3mAkQR9BkVyJnu18s1aksbAQemLUY9orJn9HidErtBp",
  "key17": "aKR3m9sZokXTmVKtBhRGohRLYgCopkuxXcPxsFexCi4eywny4uZhF7iamLg7dQXZKQxiymV3HsdrwnZjs9J7eyd",
  "key18": "4v6ozBU3HAtFSvLeH8KVJVfFYj3436hREWJAWDPXA8rxfsDd68uhjJQyKsAv7j8RFRtQp9m3ASB1PX52eGR28KBZ",
  "key19": "5tB5nrxaXJFBDJmZoPCGP38LfLqLMTqVBxWXSunsWs2uE68tphDv7eRy9bieyS45vQgMNj7hGg4muoyXRZNnd5uM",
  "key20": "2rfHJXmk3Qrqtrp4cPGtiag9woocPhZc7X9kTjtuSEUqa8BJj8Xj9k3VFsSv2Sc6FXXouSUoP8B5SikhMmeJgVaN",
  "key21": "WBCn3j4TSDCDHqxETTe5ug1HnMbePJzCEPYEhjGCyiiY8ABuquNWHWg8PKuzAWTsdHSaAFVgZi7Pn8fZ154SX88",
  "key22": "4RQRMwDvuur5FE2ncFveXGgLev9vCqzDrbuTT7P2SESTebdcV8mRy3JU9bWVEDQ3vW6UPa17JDZygvWfGmX5qaGX",
  "key23": "4CS61DGk8mxoWUdr7wakjc8GwpSUHWJAiqqqPhmMdLnN5bW2PF8xKtVuZAFwDnMUebvSFgSgegC5jyxkpZpDcBh3",
  "key24": "S2HsA4nu7Q81SA6AQEoKeRn2x7few8dA77i9nEVMDkibEoqgtib21F1Thex87gyLBAVZBJ3ocMBmi6arxMctp1n",
  "key25": "3VNRawf6EZp6x9TZ2DEcQkCrc7ktei1pn4HjLfbKFmbPYh2u8iKDCTUCbRi9YM4NP29n9r6DWBYbDTXjk9yp8E8p",
  "key26": "h5mavJEKfPCa6qXcdgNYvmqPrePVPhZQjxi3bW7quWUbBQPDmiaa2oakR8hLjdZaeHffqUoB9dULFgybtKTJCAh",
  "key27": "3kSNCUaP6uqjZbhom3JVWv33HCyoajb8kmg92sojKPMJgXqEL13HLA5fMFWgE2ctSqLB1GeNQuKy4Bn7bTr47tYo",
  "key28": "2BVkCUyjSFfYoQsxmzyrr6fyQVM9W7J3z7Lv8rmLh3464roE6S9mGf5mMMpn5AfpcXkaaHEJamRvEDmoujGzMmWi",
  "key29": "34gjDAVxHH3V9eNTDMfmRPTPXtP3nyUxqi7MoP5Z73pqozTZH4ntqHvYrRPDUG8ee4rcokf6fvEi2HKzWHVbrNa7",
  "key30": "3XwQCDWq1bG8rSNQA1W9iPQr9UAcSt27vftejhNga6Z8brWynj9uSL3PQEEHQ5J7vtKqhnSruaEfGnQkK21Wkqiv",
  "key31": "tNw5LP4pAysZPMDHf35jwwHCSbZ3kp3EvJZh9D9U2DaKCr684TzJDWtyvYatvyt9PvNCEniKZdzRqVMXkWH867k",
  "key32": "qJYpa4STJijrUpFoEMnwVjpPrm6KfndRhCtGBrkTD54niBFNxmfpwFX52acxmPBLsVgiQ1XvTGuWvJd4h1swNRP",
  "key33": "55Um5mB4rmi1hiyL7HZhXDQg131XELeHAZxs2EGcfKZxXeRsp4NhzpypzMdnfoMVUwChQEhTVrUXvKvqZ252wMxK",
  "key34": "y6iEgGsMLANcgTPT4ZUv8u6SJjwn9BvavYdnYsxaSxvL4X46RGAjaynJepL17iBCs49bH2uYPKWTYL6cJvSpR6p",
  "key35": "5jfJU9onJcSqNRwpLk4gx86arc3DePnzsZtwJE4qDX6dccnbTwrmyAQXtp26APVtbLx6e9gtzHicUtoxDJ6eZA4t",
  "key36": "3691ugR2MhvRXmtgoxoH5WqtBtjN6MBLuMhkszYXTj5sYPQtGGvyt4mszarwVCciwFivn6u6NK1suD7XAYSSRvuD"
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
