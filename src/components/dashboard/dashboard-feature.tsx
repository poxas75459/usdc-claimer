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
    "3p33aBZfsSHuNiU4tPXNVrfuxQLbTrqwfGxAih9Yy8y4vTZJU2MNJGhjqaLf2rrWp4psXRYJjXMFwQAdvTDMpvXF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VLynsBvgQduuuGUAJff1nEDwTu4btPvDLWNAdT6Wc5DkocxUU6ahVphLrCCArFtU8JhdbohK5j1wPbCLbUvtoAW",
  "key1": "3aZFCS8ghHZCV6cAsDAfqU78XnKNvJUMAvZf1yZWhmfZZH6sMBRPASviT8KQjQmSJmLgox9q7QjmzpwaPKd19HrW",
  "key2": "47KUHLFBVGygHvfRZTLC2S5CKcdmAuiqxUDJU7QkMymPyrQDLSbuVWbHmxccnuyqJEqav4hNxzxKnpM6Y5WGoqod",
  "key3": "5KiPDDg3xiKuagZ5maTW8b6D3hAEVQkjjdFuGMvvydhu92rZ39a68eSUNXdQFjx8JSECjKnGQ2qFqabakRmtzass",
  "key4": "4847HE2cq12pGqHeaFrgFiFMtJqFqGTtzZoAUfERRn4NRWDhEiobmMzUfQE8o8tPDDtpWNnCAGZDWZuTyFzda32G",
  "key5": "2p99mkL1655DQisrHkFz9cVksx3vyjtci8LnSzAEnHLS9KZrxkNkivqmKYMagD67FRkkynJJXfhhNSJhLJ2Dtr6X",
  "key6": "4Ccv8APUvjgKukVTeTwPhu31x5jxykEJnGcNRH3i43a5Qdt7To3PQTh1uXUFA6nQnnGuLYRGsj6R7AhkYXeNyjzQ",
  "key7": "2bAffWMmG9znLDyrnszL9UN16uGdvCpGWQEsMU2QDH37GAKqtGVxwf7boPSgFiJdVPFP5M4wgWVyTLFxp88HY2ym",
  "key8": "2TfSeVHXqvYC6REgr6ehHiKU1HiQg6rfk8kymY5PLxk3qDwR5KxoAMvkC68wTrNZQGt79eCkWnXxNWSTCLmyMi3B",
  "key9": "2htHsehcUp85Esud3gdZPXSDNa21uamVRECK5H1jhpuQSxRhwq4cPBYenx77hnxRjmBKjKyCN5C1shwYWqNKZQLy",
  "key10": "2dbQPYHqJiA6ppncXSM1DKb6EzT6uSmSorFPqptBGs8Z7z8VPYQ45gB2W9Lyo6rNtsQjjskzX85aVqa6ceQrvGbR",
  "key11": "5tc4romUgVY9dbAAjE6vAaxBeYuuiUQFWa23eKV59hchCHJEpBzRhrSj5J6VkB946Va5y38MFt4trEnLXvWoLjX8",
  "key12": "4Yj7DZDgU63UzHdzwdRGxtwsHqM8ebN4VYYD25nj6XKsBsL7UkjXZBazjECJmvMT8JF9KzSv8q8yG7aXPAAoRDmK",
  "key13": "2rnBkXJNTXoG9499qhrj6Fgq9UvJGvNSKaGpCDY2AHYaQ36zEW5F9FsmWySTALvNVmusDXVgtFm9fgBFRH8rzfw",
  "key14": "3VHi1SXbsAXsr7EJiZpeaGd4EyHPk4YNJsia5h6r43MvAQzCoL2CXpDgBG1VXuuxWmpg3ByHnmh5MHWzMEmUSw5f",
  "key15": "4YeEevLwbKnVJqbJwpdaYA7dWptZCc1d3WpYhPQ6mn791MKN6Bpt1BgPXeEYL1sRkA7oBuN9SfvFh69hhhezsuwx",
  "key16": "2pJuNgzzP36Hu87iA9kBW7JjHAV225TEWoTo65gHPRVob3WSQYeJeQe5zkwdgh5RfPF7a5ECQwzySEDHJrgVGnVM",
  "key17": "5X4aE5noHYGVgNrdWobHK9BkibenNvVUXkUjZTED9WfYUnfeteLy1ignuPJ88smJpM586LwiHsri5GspGFgKU3GB",
  "key18": "62p4ZRq56F7NU4daBoW2k5zYVBKR2crerL7yPnji7FQpqHgDS6jUqeEYyvAmmAHo6VdGTNe5LjUPaYVSpKQBuvVj",
  "key19": "2DXwNWDcE2iVKtPXK3QCZP5WhvfQmHrxxg7hHRBug94UUbG1bUSYLmMa8FrjhPRP25orc5GN5f9Ph57oDwPd41MM",
  "key20": "3VDxSbj8WKSZSZXcqbux8aYee6tYpeJEEZWTu1VRc95vC4kKV2YJEJ64hdtEJAL9bKysRjLwM5XwexfXrEQzh45q",
  "key21": "4nM1MCsaSPGF4fM85TC5KgVr8SvaG9BV9M48X8LRDLEYkMYGd7Rz9puWfzN8GAH61YoYZvHS7Eg9XMYfvKm5h1fY",
  "key22": "3QNbNRBMM5z9ZUhDHsLpudzjNgvDemYhT4kuF1zW4jQKxr8Dtb6yLkQyCFXfmB8ukU3BaJiA2Zqj2xcJBJoCAxqm",
  "key23": "2FLY9ztdV1Ri9ovwJSkSz3wmAHA8JRFkDLtkjAaMGKVAEM3ZfKzKDYtgK2U6XWqrpA7eSSg5tzDmj72k4WAvmVDN",
  "key24": "5BKNVWZhzgM8oas712rqXGu9FFFYyraDeq3ZSqW2hg6eD9mv6Li3gcXpK93obyS1j4t7QJ6C6j1Sehppr3SvqdjD",
  "key25": "4vRCU1yqsC4vC5nvccxcwJuvNQDp3eLruVZhW3DCaGZQhHdXWGmzw2DeoQ2uYCsu4LWKzqbeKVkxTDKLDZaGrs4v",
  "key26": "2GegZPuKpNUhJic1GM475ytH5qXLUgygRzs7tEh5uzYEQXh7AkZ24ViwdzgodNcdyGDECoy2HYYm81N8eve8sWRU",
  "key27": "5koC62htAxHte43agFkRHd9VCpCo3VR7taeXnKVpkbHCkbaRer26neh6isABxQ8CFjmxTMEX7uJrW5KQXQzBJw78",
  "key28": "2rDLumg1GhFh7khisnMLUKqGk5f6FFcwew3GvR9Fpx67G6RdyhPnAFujUuqud1dcHLsSNT8hT2XevhR4eKsqvjK4",
  "key29": "66igMfqGco2TW4qv281S2gVBuqsADhk1NGadqrMhWu2B49MeuUENKQdxiT6poHuzb8UXgShYeQnKgi5bzz5r7EzV",
  "key30": "4Z7SjKTae8rbkrcU1E9e71XPjFAf23y4edzw1tsiDZ9jWFuZTd3Dyx4iTJ4sNLB6KKpLj8sdsCeDXHZPry7M4LF8",
  "key31": "BsdHLpdPH9bgdaSvdpxC7ADZRbCeYsT5b1qjjyMqv7sLFokPYd41HPewMfd5giddZA169JATRvZTPpj2ZH2ZedK",
  "key32": "5iCW5bVaBeQEqirTvsNiGwzEiCqFYn7jKBdkD29SA4mvQDzWrBQRt6W92ostdE3nAzoiVcnSvj5fC8mvRUzU2ygu",
  "key33": "5M13XPMsscpc97sEmHYfycVkCijTWQUsQcAkn3br4hYud6QMshtJza6w6xvXLvUBiwsKcc7yAas2uFWzW1VUsV2A",
  "key34": "F76tGYiXcdV61uW8TWYWFhNkuDKmXvqUAcPT9w8FKdszWjo663WSjjKexkMyKBs5eQ7EpVxwHwYs1xUNwuFdbU8",
  "key35": "2b43uoj7w2FtA7q1Y7VfWYtVEycdpTfyWHP7aVissnet8xnZYDVfGyW3EwTKpxu4GfXbZbvwhAy1tBvajN3Z754z",
  "key36": "AuPEC8o2cYzTaoXEmVRoY42pzt4tC1grSiE96KokAvCRZjR3fvZ4Q3whsNZ39JwQ2vYWYGpLJjDf1BpiGJJ98g8",
  "key37": "3AxrQpF3tq1HHRCTmhfZkQn9HenkBDz7wH1yq3ZAGvVqtVf4gTMPu7fVrJCw1Yc6ML9BMk8bLtPXTkKuHxfBYrKR",
  "key38": "2vgJ3FFkuYRnJE3E1z3xPAP9JpXRojdndpxLBeZRq225uGuNBVvTeibZeFLYsUqswicQs1NKKyFFfNet9ZFsqbgT",
  "key39": "2gjJigWwoF14nkpmDceEEtu8BbF9nfX3h1nHhAX14hZmszPRWFeJkmC1TkG2in2bcvKBx1tLTMKRCpgi1SYETduN",
  "key40": "3vpyo2Q7Vp7gEBkNkeMtCjpLwSeiN4r2XvE7qHwhY7VinagnZVAVnaYjCUxrsu5PufaQHVjphN1KHKuPQKyqR9sh",
  "key41": "ViKFedioAa2yWPA6hZ5QUcUiv5DwSTGktsMs71CCq33N4Emj6e98Ngr37SecopkriE9uwfneGJxfSjGjupoSHWY",
  "key42": "Hu2G4bdnPpRw2orb48ttdqG5AqzTVbvUqHLqZMofMBvvfkD2X3AzRFPU7twX3eVV3ZEC7ZgNUyv82ek1ckBXsWG",
  "key43": "4E17VqbCqpnUKkf4b4KVxcEyX9KUHiYZfQpHc3htAGgHAPrbnua1eVE36i5kJ3Kis65ovyZgBY3YuyAUTc739JPf",
  "key44": "2P5eD3eWzT8yJQuv3iQnDXQgBpUP1Pamg23qh7vQWSAF2EAAsEbcxQGDCbuTvMce4iEN9eavVVcGNXdyi7o5WKjt",
  "key45": "59DQSmXRimRh9LByYN1VnEdiVxFYViGYTzHuiyfUNa6v3weMdGTakXrzgatC4RBgo6epKdv1ANp4xj3cDUDi5Ej3",
  "key46": "4gVEv8WWjRZJZWmWjRDHj8meXEcbzcRL7t9E33TmffuMHfz16z3FGVhPdTbqKiJDWBb9gHJVJyGFamLZhw7SvsAD",
  "key47": "3kEfDUYsWYtQq1DfpuZug3sjGkHpiyb1thi6VANqEMNVAFnaekesny1ihd4Tp5PSerxiE7Ffz3Vc52JuoUfwenP6",
  "key48": "5XeSg9avTNzKKiKR17pvGCFfNfEmAzTcZSEvqiS9yfDJ1x87C5RQYy7moNai3ZTJtByNtMZefE8Wa35T3ZMweHc2"
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
