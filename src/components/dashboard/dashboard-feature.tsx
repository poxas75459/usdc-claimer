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
    "paDmdYXG8W562ZT4pWKvrNAdiUnMRSndp3hCEZikwAKgrSs5DGKZNqnQ4U8DaesXuCugJmJ4sYccDmCWaVbPHFe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zWkkbY4APwrpeYcV8zf9PukNY8GGuh11KMQWagPzmXHeNv7aK2G8Qc22hcPUEvaybr2Gu3tdU9TXEfoGFBzBppk",
  "key1": "51EFjNVR6uZTL74nAErFvw6ovgCg7hTy9ELXDa8N9mC2CaGyzBAt5cg5XtNU9XkHhn3TQaQqvfSxY92D4minKPcP",
  "key2": "2bug5XqwX4YwaY94tg2u7shwEvttiuNEwmRvAyRbmYzq3nnWPygxz6qRsoKDjMwhDnMwsS2f5YDsfEZYr1dHbGAV",
  "key3": "59x8sbQjB4Bh6sD9mPJaL5ULoVqUuwNHCCxgBE5AairMr2ZGcerQSDJ3aDKDJCFwcKwQb59otWfynkBf7uRuTKTJ",
  "key4": "7VBeA54tURGi3owafzeyGQ936TYNBcGrqbdnWsXYQjxGRYsgdNg9vrAZQfAL4ersYvk74gSarLLpkEcH2YTdmrc",
  "key5": "5esnyGSvfKXw62WG96yZ4BUgKWrNoF3eKYVfTghQYbej67MBKy8owGqN6wUN8E8iyUBmCPSFpmKACtKtAYDXF7KJ",
  "key6": "5iUHBXUe5tGG83DQXvaip3h6MNKZAsWFm3jri8USqRe9QVyedpy3caYYpYX1oT2fzUVP9VjaKD5qwvQNLLzK1DAr",
  "key7": "649xjYz6FTdsg38KRfaxzBfpT49TJHmJ84qAQDB1cQkTFo5s3tGgGRNpnixDboKG9keNgEvYaJJyk4bq91GmuhNe",
  "key8": "4hNYT3WJaZGiRkTp56p5HGB6ubp88UEnVf84Wq3RUx4Pf2VTCp58BhNuqyxBFKWVQrt3vvgSoKWcFYsNdeMNnFNs",
  "key9": "oRRA1rPpv2MkNnDBDWo8JKXYS2pgcvsf48soKZ9CfagNprq2XCaeipLn4PaY36Pn9iDDGTaHYKvdMHQPKKqkMBx",
  "key10": "3MDZ9S4ncSCcHdoyU5w8ffGJF5tnyGgnhC1fVrK6WihqsZjXp2diWK5oJgsSZBP349twnxwQjmYcSS2H9obMJdat",
  "key11": "4WgQBPdZvBZ8uFJ1jv4foVApRCZA6qP9tUVofifXbXi1w4aHkHqxdK4JFZEtk4XmuGb34xXH2Gq5s1vo2UNLuYMv",
  "key12": "23RdKCQPjbmeaAd4uvZtQmCACq6k4rqL9Z5oPSrtGVeQcPNqn7cucKRpeCrYhtFUYx6AQufHExwXd8gm6kidm53x",
  "key13": "4aArWAQExic2xyHb6YQ28kXimr6QEWD2dRKJXjkWE3pQE26vG6LGGQDSYgFsvUSzE8eT3Kpr2QaqFyVrLNFNvhSB",
  "key14": "3RCXR3i6wnt2zm2uBVLy17J7xrc9yZXPisqgNvwQ4KNgiA1xriUCojqbviZfiA9esKj9z3RMRa4ugbVFngty7oEy",
  "key15": "4678iiKfQkV3FLJ4JJTvRrB3DcAx4VrXUXKVGfKt3FJfkYoAL6aLAc3hpMx6MCMUPFRdVZUgVvYusBnbrE1XRhv9",
  "key16": "2PUbjtryr5ghFGUm8Md2NQRpxVzjpP4QTYzyR5dBeZ3ojELyaKRhhcULjWAfWGu6HUKqjBB8kqUPVj2pKMHxdUYt",
  "key17": "4H4nX2JLX13U2ZN3jT9tD42cpiqhhZzMh7wTiCUwQLPkPFRzVkHorjUQCAwNjeZTB7ocYvfR8qzk6yNWhqT87Gp4",
  "key18": "z2Am12LLapkPWfB829icqyxzKiugFeffBqKdZu7iusB4nPHeui9zq1TZoFwe2TKhwNKKVe4jAEzGhSZcptTNusK",
  "key19": "62qr9cqQw692GNuxfhvej7tZ1zSuMjy4e6mUNKAkqXD8DgMKkRGsCdKwpcL6L6NXYjaQUfrCy6DjXm3U9HQDdmFX",
  "key20": "5uKt9Ks6BHAunUsVx6VoSvkFj3Du6TBb2xjt14Wb7Vdh7ADct5Kq3QdrhzdE7bk8NvktuSY6YRpPM5nARxgVs5AK",
  "key21": "3JocyacUPGvD2gyQ5bV17YFMAbfGCUTKu1w51yqjHXA4jcrWMd2MQaAcUEFNLetogKWiyjuhYcfJPMvAu4aeN7xU",
  "key22": "3HEkNaho5aZeDUWktNDJCmJWnZTePWkXJ2GjJrpbTuS5HtxdHE1QHybNk2eDmbbvPCXbPN8MkUF4Za41gmgsj8gc",
  "key23": "51FxsTsKZ4Gs2jr8jbLPAcBZ741cqJdTQ9WzfPLVRc6Qz63FejkThZ9FfXYEVzJ5riHrs3Nwc1duKqS2XcYWeh1h",
  "key24": "3uimS3QuKar3AUNHbn19P4hryGb3Bi2DF1eXSnTZX32VmJErUdU31jiGpFjeCFQmMKGWtx4CjFmK73DEzFC9T57Q",
  "key25": "3jeuY3r8S5gEPY3zdKZ8SbVuAXG5bLwWyU1uQhVi7t8edhSEszSg4hvTeWMHUA5k95z8Qh7i2rRmEV9PKL1e9YYj",
  "key26": "5yW2b38NGYBS1zhZ1fZUphBkbszUC1zonMgLCeKy5n7pRQ7HQbW7oZgVekHApqGmGeBREokC45kQqoT2fd1KHncq",
  "key27": "4yhdYQfnST2jiH9KiQ2H8sjD1WQZ46XoS8csySDnvzRdPPy2j8aZbdNbmDEeA9eg3Uq4PuYTE1hHR78TvzV67kK3",
  "key28": "3g9SpD7ga7tXYuzkDQLJnfnueVRLbj9zNH1CDav3hCNiuehVpsM85u6i3zDyq5HGwXUcNpPYMpN24Bd2wbpBx4Wr",
  "key29": "1c6qJWB168n8XQuzsDcT6J9fpn5bYB21AcHC4y2dqm7eGY8DQDkCnQy1EaC5eygMQ2Qdy915WmmAq3kFYvFKTYz",
  "key30": "4bHbcfgePYkBXaehHgNRN9J5mZQ84LqP22Nqq419axYzUA4irPohYG5MGYQV5EmPqbAkt2mi912WygDpqXoXxXLv",
  "key31": "56GsZ5tzrxFimKN6thJFYNQ51PiXPpw4WJySZpoQcjS6KARU7DQVFz4vtivHWLjPF5PUs2vxL9AWgccPVFSJjsg1",
  "key32": "2PNFyN8JV9N38XMSCVipmNLaJGvFLaA8nxggwMAazcvbTKuvB3cmwunPCs3ktNWtbR6GXsxKGowbxhnHRK6BX1SC",
  "key33": "4yWdJJBqWRgpHXqkcjTQx6YuC3TXjbsmzxawoxNt96yJxiHV8DB54rtizuZkE3YV4kNzjJPLXmQNgaK4BTVnASWN",
  "key34": "2VAdX5wE8HpSrqxWnXnq326W2xC4NvGZQDCiMbdCP12GWNCG8UxxoEx84dXwD2ELNgNa1ikhUcc8exUFAZ8JxJ2D",
  "key35": "mNncQ7CBHETTW7yxoV4mPnJZqCMUfNGf6AyV5WAWKzPRiGVTDDoK5Bt3o76JuzgS9YtwqF3JnJrd7yTTaYzxPe4",
  "key36": "3RJ1tXjmWHTnizjBZ9Hf3wPPMpqH2muDdSJkoCnsmgPWK2wmd54vipKwznJNFrJacwvbxFTgrt13StkovmzQMWRB",
  "key37": "24HshM6fm7oyWtCpHcwjXpPjSG69CxHc18Jaf8Zy77NYNpEYk6NWUfCLVyoxCFdaogZajfjiVNYGinYsj1F2Bjgj",
  "key38": "2dyeXxRV9wpdmwXnNJDYtZDn2Eq9xdWcZCHF6NLSQbY2NCHkyEH8TzFgdoPYLkKgPCFoenUkneqZFkFM2kn4VFP7"
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
