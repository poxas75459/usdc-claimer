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
    "3QkJ1NxoZTg3rBEuWJ8nnK71QuUavSSEJ28adkXQrwp6zahKHbcJAVe6oaNdAsaweMvGCUKY3ydi6my9uSvqEVTY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FTyrSD1fh3VdZSiNMc7qzhMK1D38qHY3TsRdA8A8R8ZVztGHK7fjZ4TPGqLBsQCjYJEFv9N4oUJYrXTpMsVDQTi",
  "key1": "5A31S6yuGa2KRuY1CWBf3uHfiNhmKKE4YmnxEzDiYE3dogAsHximd14NHzBREvT1SJsuKYASZ8c2GoUk2XdRzUHh",
  "key2": "3kNCB41uNoYit44E5uzFFkrHQFqK7jUDhWXPXsSXjJmXax6EfWid8UWfzpUESzr4xMzmW9CAKepaFiScU5Xn7AoF",
  "key3": "33NRGAK9Q3ZnHEqF2baKFsM2FtRonoC5omA123sw9WEhUcJbxcHEVFzz7erCfVn67Kh4J69ZLWN1mBKapt47WPP5",
  "key4": "5GCYZsM57tdbfsxLYfwhF1EgKfMGRPQEK5mA9iBHy7a1HqPuMF6oFUqf5mhXVsCgY6CFUG8EvZQjbJ6Vbpkvhowp",
  "key5": "Z16KBDzZeNvmeFvktRSX55LZTyrx174whPzg5XaWcFzDCshCbAcvA26ZeLPxPoys1C49YMNbuzsvSB4gJTWHRAe",
  "key6": "2hmxihXr61X6oi2yxEh6GbezLK7L1YvvV5TUJ3giRFrHpUbYjzy8zg4k8Z7XHwZfarS58LQAcwxg7hd8wRmCkKJA",
  "key7": "2LAiUMytFE6bkyo1rqDX7xj7JGU4hMecifFrbLTYWpLkyAaBQx5SRAQWCcXJEQmKqGmQnrEpuWnwQoqKdeqggQhH",
  "key8": "5x5nJ8nN6bq7roDo4hwS2SHw6ugGYyMHa2m8Af1FqFxrh6qEoU2e3oNszXA4QaRrdGfzgjVruNiMdZJCCHaUWmLP",
  "key9": "3QJ3zJJdidEFV5PmgoBJHAxq9Qus2jvihjU5K5hqR8D6Up8apinSGSGuyXjfBnD7vALLZsqo47hBQuou1Y5uWKMn",
  "key10": "fYuczQxwS2jkoP52XtqeribVTLwZUFi8Lj2bJAD58HRUguKUkpQxPKPdscr3NdmqSgem2qKByZSkJUej5A5BECS",
  "key11": "5kZBV71srCTDUdR2rf8TLdaMW1XmXqcUQoXLE7eW1qf8UBR6LqgkR81TgnRFNdxyzBymbJQ23cYYc4XYKvNEWKg7",
  "key12": "42NqPvKnpjJqmCUYNtcXUsSK6Z5seJZhjwEBdThcYuP24j1gVwgVTDMpP4SWy8bfdKDXUGXVegr1v4GjdJ6k5jxd",
  "key13": "2E8nsT8bTXr3Pq7X1JkJwBv94EZGCPTGPph5KxuM4qCAL5B3xRcU5JvahCzo1upxkkPbgh3M4ByWi5UyEW2mT8L6",
  "key14": "5BgqncLZgJ9QmEzUjA1b1f5yhawSoDW1RKBK2kNJhNNMP22JQaNRsJDBgpdrUkfVFmTY3jNdYfFkZSiD1EyigZzn",
  "key15": "58dV1UNvEz5iKZH3hDtnBJHtdqbm4BvFQj3cmbAh8EByv1X17q6m6dNqT2mr18Qa9LJexxkZuYDwusqivUjrqvWK",
  "key16": "5EUWWc8qpqSQhEVRzebqtLA783d1WmEuw21gbcmUTiQSzTGAo2e4pJnzkRLkvcqSK9FX416ydCbznmDVyWRbEzvy",
  "key17": "3WJYBZ5rCXVvvRi1zota2p1tSHQpjw1TcgXCiyUCdG2wMpNfnjBiWK5Z5BRYn1YcYoPe5Yx9G6zSHgXSjonKAnK7",
  "key18": "aTcy2311h15jC6brHnk33v7xUtmcdtAHrp9AepND6r83baKKpANcba35dCWq5wN8pvj3e5Nfm66RvEjxoHH46kV",
  "key19": "3HkregmZujRamPbHwBTn4Q21bHUXuB6dah9CiV5v1MAKt7NVVRMosWPJyUvQ8hbiRPyJMJzWdwnu5dbPDZ23zXuF",
  "key20": "23Zzj53hSEmnpSProZ7SS25hdqAiVr1Jajg7WBNc8Mrta7qDHvRJwfYv3q4vifJ4AVnUbNhaTcE2f4LL9WLLwWoa",
  "key21": "3dQ72GVqnPTjSsy21p5Z44wPQ9bT2m3Yo4tbSvE6VYLbm2dVN54tZab3LYJebPm6y3ChgnHtNwZYZPiGGkewgZ9D",
  "key22": "2RNeLTGztN2fsUgUeKc35XoUDHU1dUZKZfJnayGe9TdihP5vCHvVFDy1wTPbKAPjTmLpL3Wz5sVDo3ADiGrqkcHm",
  "key23": "5uoXUT5otNz42fZ16WoNx2djMascq9FbXeVEwmLciywx8gMbzNYNh3h7Y9GMPKejBfyxxdc4fY7YwwMxJpWhxmbR",
  "key24": "35nLzXkhLwFjrpopYap8gstozHuYiACwb3BgxdMtVVtmjkNmLtvmGbBDySMYP8RBwCgkTi3wiRfAEyvgVL1ApLL7",
  "key25": "2TAssTJweG3srVojPgddVx4bjGtoXHthMf2EJZv8cddoBrkajrNZ8ACbV5K2ah1EUMXwnSGQANrB7stKYWFW8ALb",
  "key26": "4ts8sGwfKm9MtfEoQ9j6P2NxKdoUXC2JSTGJCfLRtUQjB1svX6ZZmDBSqCvUB8fKadZ4HgE6NYMvCdgRQWn5d9yH",
  "key27": "2nZ4FCAuBDFCjv64sDSD5XPa7rCAvHTEcZFtvP8a3mMGHUwuK8HjRKqMLdmqKVpY9pVr8jiYvmJ5HWeZNdSmtybZ",
  "key28": "3VW8S7DDQWy78yN1j41Ryyv8doAxCoQeNyrf1a5TLpiZo6SJac1EChNYasjhoJ3hAN2nMZEVeBLhqLRv8bME4xQr",
  "key29": "4YGJCgESh2Le1eKqHVv8N5YQPAeNAjnpqFL2cH3NuHnYjDDLfjXgJshcHHfqyqiKAzMWPpR5hzVXrsdSJvqp3fkE",
  "key30": "4VVF6p2P9iccrMqfiXV4cMxbGB4qj8jeQdixwPiuvRjmMM1LneDcZ98s1yynqYExohSL2jAJ8zYcQJmuageN5e8i",
  "key31": "67ZrJE7g9zq3JjWDsFddSYxsPEifg1vcuoHZDdhNSNn52NustAndR2843AjFx499RoqzMfAgm5BtYzULUr7KnpUt",
  "key32": "5ecgLP6sfrpgCqDetWMRVrcfoeYr3N53HCi88y5dhSCHC19MAec9LWAiR2yAN6ov5YVqFF7WUfzswHCwx9miuHoj",
  "key33": "Gj9cLH4nLRgwSBoLLxWXh4LCHnce7ythmGJQkgCGPoE7C3gQpYRxW7LXyU415xNwcyfZwrrrWyJGRfjR6f3K7Ae",
  "key34": "3np8d86Pi3oK1MUJG5sLrMv6aoKEEZEqR1NU4azFHpxQQQf8tcMpJZmqv8aCGNzmVBUhLXEPAyRog6LST36rcnJ4",
  "key35": "HM5b38TQKZGxrbW6zQdQiTQ1z6WzP276ysU7PwsdD85RiATCgEMt8nyQx49SrChehZcN3NYH4BZ4ejA9PE2GKxL",
  "key36": "4T12xmpayuckc1rrZSzdaRmaKNByTkAcgGjaLyyHWvhi5JnCTF2jxMkMWyJ8yRFdr53b2EKazbjF8BSJhMbS8XH1",
  "key37": "3ZSwzVsWBX9uu9rSTkVfDS3p4q3iojMiJsX8QBafkFBuSseiLAsZmKTGFAkdFTukPumDRu5xUD545ZWzvK3tNif8",
  "key38": "4QYiumJvCCPQKP3aPZfm4KuYuHK74n4v2pdEfmgKVHKoAPj2k5415Q7gQLwSbctKvWiFEbdxkgbeVRdgu9VWfnY7"
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
