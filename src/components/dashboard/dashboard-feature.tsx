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
    "2FJGNDe3QdqZbdBUSxqcHxdtenKTQ4HBou6p9H1VgZPG3mLTgXcvj4btctqLVwYB7S95wsywKHvyon4CXAYPwats"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tcU9pZR2H9p4Sk8Jn1AdiBMv3aYtfHwxUG9QuEj3ztkWA3sLbGpUQvbUfyKA7zK8Stc64pAoyvYLNneoGb69Ff",
  "key1": "2tccvSAqhjXJC7W28HHpBkmQB8BSRPS1sdF9VAtp1CyB6ApLCwvKEBVP65ohkfaVungkXWMUotsEqi29EYkD9U1G",
  "key2": "4h3hfMJgfEEjY2AmZ1LKCKrgxE7xcsykqkSKYNv6RNbdBq1egEKhLKaWYBdEVSM2vQQWeCAF6npy8P4KLT2HGGWM",
  "key3": "2A1hR4Zxd84oMSAQXArjkvaBdns85swEuTXhyHDiw7ozVSwskhYVdnC5p5eLF4NGBYfLnZYP44rCJacAR4AvZETS",
  "key4": "aacyGYYstANxPnTtZn7mPLFVucGGNzoxJyfcRMdLiQR9uSt4DR319oi5YHFAzjmie6iPqCZjs2JQ8nHAmV4gjar",
  "key5": "2HiWHnJH386QNVhWoEhPPKYmEPJKPjvwQGnDcFxPKB5Q1kDNzqUDyxUic6epzVhANxSYxAN6UPQyHY8CnRJWvwr8",
  "key6": "2F3EmLqHZWteQsoJdjgfqwMKryntpwbWRjT3WLuHozSb3CfBGDwVjxAZxYKCQwAJXYLCoh3QG6KZ99iYZ4EKMJG3",
  "key7": "5Ae1ncDHBBR1mCHBa5mNR86mBjvrh7PYqcXSDvEksgVaNV8VkaoPNeDyX2Wh8PMYYkindKaywNe4zB1wyDaUBW9V",
  "key8": "55nTgiiw37DkzcvyA9JvhMKvkYaMC7XJoX4vWgMUrTMDZbJnizD1othYAGnTo865mwDkgDHmY8PLZRkhByy6XByF",
  "key9": "54zMgtzjvqT4eSYSPQxJ1AxUmCUCDC4uAKr2KjrFEymjpkYmMtGvFu9aCEjVChszE7SsDAdYmQ6SCwqxe7h4LTk1",
  "key10": "3kFWEfiGymSyjjtb2R3xVAP7NkZRvFow5CtCGCTudGbC4SktMYpCrEH2bAEgy46wvLWtuddYsPu2qwmMJnnnHdgs",
  "key11": "4iJ3WCuHEjEhRAxGYWzQgbfUi9e5xruh9vbk9nZdad9haiAkUZX25brGD5MsGHtu52VfZsp7GKb2RpjaxMSoTLbn",
  "key12": "2uThwrAFXEzsQztbqfs6SSwpZihnr5KpzkRw4iQdSEQ22pdHYYhBxEtYTnghNCnsLtcke3DaHiEEY7U2Q9W6BmRU",
  "key13": "jPFMWgz7Qd1UcYBJ16JpFbzopdW2BP1iXWmVnQknpqbXcXr2r9D4siFoo4KvR3opQSH5J6exG8PTrUm9S76fchj",
  "key14": "4xsYeDsBgYV8Pbu2QFKoW9ZM6KpbYLzwnjbfqFceEKUApyscfU5LGXB8jExifkL6p9xJZDP9nMQP7y66LhgeZ3xs",
  "key15": "5KeJm7YA78xWKff5wE4zQnTTqFnsU658qsaBBiKEHndxE669MFDJQBGqHArBZbvFB8rsFGh5oyhQmk6FcnukhF7F",
  "key16": "3mGcHcJt6EYTf4W3iz3mfPrA6qo35kQkPULNwGdiVtHWwHiMyy6DZkKZjHP6pEsSNCtE5nfEyH2i6Sfh2XsM3ENv",
  "key17": "2TPjAtfEnh93e11JqwcqmGck7UphyE23izqkLpmKUgKyiRz5hLmm6Pta8vqSXiYFfkRAJ7YkS6Nkn7JEebpAo667",
  "key18": "RjEoePSpRrtHUMU52TQZxiomXV13PtJR15nktUzqYSvQjZp9EXfDeCMkpoDTgkUafA2LiXGRgVFPq2QA74BzWuf",
  "key19": "4KUC8zeTnN7mNDhDZ8PYsfFpPcRADDwm7cieArYBH9fnSKBpGPfK36RmFff2rKethiTmfj4bwjZ2ERh23AwM8SwS",
  "key20": "SG6Mhq5SFPGuUwUo3GwCC6xw6vkDJ9Dyo7uX56syBDnfCovdwg8Yajqzckw7UKsJFR7XYTh5n7rf1UzMSMbfBiQ",
  "key21": "Kqpc3LAQ4BViPihGomhusbyqbxpQB8gWmTaGW93zJ5UWUeHikN4PqPum4RqpXtaHqTvHGhP1C479xT8GQT9ZkRQ",
  "key22": "4EKV4Hdy3CM4hYE981cNLezAT2Td21MeHWVKfpSkWuBgf6VCxAXJCZDJk1aX2GCTcGEJCRSMXNacgQXGfZzDnfHZ",
  "key23": "qf7s6DtqkYKcyLZJywRSGjG9sGnr7LnHggwn5eKaegDVgPoCWRaXh9JFLWf8pChLRWx6CDg5DeVwx3eRJ3HmMEu",
  "key24": "2XEoVXTtL8EwYwZ6EuDZ6EBy1kCH7GZ1nrVFMMFRxAHthPSBLizwT66tmz54ZeMoSRzQkEVCT9xgj8dHJJrrZYEL",
  "key25": "UkBNdXpgS29EN7ssV3suqRwZutMuT6TA3h9TVDQNfv5E35GHVS71sLK66kn3La5fwXRKEfBNBsKrbA1Qb7UAqWa",
  "key26": "4pxQNJRUWR9Y5VDhuB4pi9rLZ7As3ADw8CPHwCh7t8J2Per1wTcfY2CxRqNXRnZ6aJkLkRyWh8TBkaTDPDpPtJyZ",
  "key27": "2u1RxSSZArPaBAQcqg45F6WJYgwFc7h5vEKJ8ypK7Zc9osoy5skPpKwpu3EWHEUuvaf4A8eyqqrkJid3pGqRLTXJ",
  "key28": "2R5nMEMyuw4EdynDr6SaW3Uz2LjY3jv4sx7bNzPXbNxvttQ3oFixwWc9YiPMjH8waYZhEDf7vUWvoqCxypbrywbP",
  "key29": "dqGCkwwZ1Xaz6Ftaygu6b9DK4iEpeXzeNd75gwzktQCJXoZtabTUdLKwbqCYyQr8cBNPc2BWnziDjRzzvdf7Y2E",
  "key30": "5xhArTSoJkRWoNLF2UykbSaDsnAyASnnPcEhKEbndZSNrdmJdranJxQGmW3j6kKhcK32LtWciCXhHq8TXMSn8UEx",
  "key31": "49thAso9ZGUGDARYTN1LM1awGLRUJk9CEhG7pEaHNLu743rFAxHKUyewZwqC36M3NYD55vvAtWDJsPDrbBkttdSc",
  "key32": "2ohaoaLocsey1xuL2Zqkt2hnXqLBsopEBZKa43NDwYSX7FVasqCNWCrCYW4U1KgX2EhJvNqaVrSuwP2JM49Sskdb",
  "key33": "3VWm95HAn9Fu5z8s2rqXg58UgswLDwt99nzmw92wdnAqDL5JEH8TbSsVFZ1GraukF8szjXz5SiUpP5baaL1nMwGp",
  "key34": "342HNeegZdPebNT5zM5zHUoQHGMuYr3kkZvCGUo8t5CmXv7zAFzvPCgSBBZQMUebAzXNrGL6ZitpqEf6pN7xk2EB",
  "key35": "2BamicvnaoQJ1X9AUDtYZWbGMuoB2vWUpt8imebzYGEhJBUSZJuf2zrCg5AzBEbfXBSXk1QGPPaFyyTQi8w4MmfE",
  "key36": "2YKgCboHfMZVPDwaFFEF4DDHF7VcpR3Y53EgMPeCBCcUxUDwR13rQ56iKeXav8gQQ9r3dGJqVUUpEWaRt1AbwLPK",
  "key37": "4pNNUTryhKbPZkN54zhFr1JwMWPz6XfUZZrJFKGZeV4ZqtQFcc88G4oRpNUNTmH9Sw9Lbh3qY1khmxQsC9sUEFtq"
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
