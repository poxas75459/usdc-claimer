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
    "5QTg1L1fVj8KLza8CD6Cdp9MFHXfTshXRAwyAJJHVQrHGPmYDKTySU9Z9u6QCvt655U3XJ8EhobShDRJvuwUz5Qz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LBPqoifWR7kyNcAPBcLmLWLhm8CZoPSYUiSMPH9iQf1PvJnrnEZNfFFnNp1tBvPn83M9mAj7KXqjv2Df3nMNjvX",
  "key1": "5DxMdtn8NnzSPaHhmbKWptowpWjryUnUifXUwCjtjbEpD2n4mg1FCp1H7cUUfQbZAtJddrrwa6F2w8AbJR27hSG5",
  "key2": "3aKLPT7gM8ZhKqZYNpb7ceoeGoZLozitiyDXfKRPg7t6rtmQizz6LfWKUfsSNjhdD3vSkrYzRnqwfma7KmwvhkZA",
  "key3": "5sXRMwxbzyQi14QX1qPGmfwZqssq2rZ3zbNirvU9mh4BYVhMRnvbV3kReWDn3riWv3L7MuPba6itNg8fyJPJeMiy",
  "key4": "iFn8mK9EtrTFbgKFPS4N5PGn8GuThpv1DrDA6ZjNfRcuecJX2G6QiKW5jLXE1feL4DHsUpm3gFEndJmnntsGkiS",
  "key5": "5NQ97XjdWUE7PGL5nAxQnS31vhrH2L3wGSqU4t7VnCz9ozGBBUUVsGC1nkZEx99F37kigbV5q3kSkdzGvi9iKouU",
  "key6": "5i86WTztJVNQABPcqHPKmq5ou6Kstk9G65ZVmKmrPR2cJoS3cpeNcRMgzerZe6dj1TuWfLfvc25opDT7pUybfRSX",
  "key7": "5Ej2uH7Ya98hnQvswEgy4jqow2jEkKi24f2jRLUfTLxvjuHn4kZBins2K1sArdUwwnmGLikozFukJTRHRDNceVnx",
  "key8": "bPWArkQu8gUvgodnd18R2sRKGrsHPMGgemyJWnPfcSh88nCWhRZ3q4YZqVgXwydGAox9YCWhmizx1fB6hNcQac3",
  "key9": "3Y2DXiUYYuPxzGyBa1obayLEa4t28Nn7H3CgxKboxvGCToVBPTcuZXApa8n2EarE1ESxTnYZKaKpCLWGsGHVxXsa",
  "key10": "2cLM1nwjH9rdqKUqcf5NZKrn6gjpFb8sENookGQk3yoUP9RVx1TtEeKGYtGE2RCivkjaYZ7XZ1ebi6CfaP7nwZe5",
  "key11": "3zps5tF3SX1ZXJs7FEL731m46H6gUZidmUTJdffSHyn6ovVjVkFVGBKxQEi7pHqVZeMvxiusjmUqHDdCfGJor7AT",
  "key12": "3bzkqEqAtfNQw6xGbmJz53TJ2MpZ9mXcUPcwGBNdZvrYATut2Jz2d3E78vEMqVpkn1WcZf62WapNH3Ymzc8W9ap1",
  "key13": "3c6cDpjeC3LxRgVmhHVJXGCg3itCQ1uQsbgWF2yhvTvxbYwJv3y5VsyDNY3kpdk2aNpzwG5NptepSedtMrXQp8GN",
  "key14": "nzA4dvPntbS639WvRrJ5Xaptq5U56LeZ8Ztn5kFMby6Yrp4rH1AytKmv5kbfVMQ1ziTgnse2hDedeLGFGhsfL3C",
  "key15": "VrYjRzdaRRBZSB6ZMDZ7PPNV53Xxwoz4kUp36Qs2F6UVUpPAUNf65rsPiKdN5YXjYYJ5L8KdSPCFo3gBXxLtGuS",
  "key16": "2fJXBJjAm9SyzAqu4wrrkMuADcQZbiZbhkjMYeS1BsBjjZ9NJiR9w9xp75opaYXgT2Z7HjmdPLREi8sMNgFiVE1Z",
  "key17": "5KYybSufbfFAKB5kA5i23fbx499i6Z2NAsY61UzPFngEtYWcfezQ6WiEkTtVxMKW1v8b6HRi6zxezyNtgsr29BPy",
  "key18": "65igWNnQEZW9ShBcEe7f2YH5T1Wi68s2A3LgSTspbE2sjVntpYHLuxNUrJj1cBFXYHZz2FFYF2ZGLhKzF8UKYaG3",
  "key19": "Qw3qj6LJhS6Kx2G71XjXuMon623jyceyXg4GEmoE85fkjjoPZYJkdWqpQpVKiArjdvfAktpe8wUyTKsKjKbxAHG",
  "key20": "qBgPMJ1q8bmCeeLt9YVj2q2BWFGSnJSQtgzjKv4MjzMixY1JQAtSkZ5k5PQNbCNEzkjymYz7eLVymtsU4swjGSL",
  "key21": "3xzVeeejVz9YDEWwcxvEEWBFioQjzgDbseEvB78CTrQRLXf8G99C82GaQk8d84dCR3zXacAnCZBYBXoBjjBvjvma",
  "key22": "33Yi77vPMhi4wxfkCPNZ71iV2DdoBEdya55hFN151EeR52DjK2ctrGfi4Af5tgQ3LxPf34ZPCHb3bnPs7PoHWGg4",
  "key23": "2saW11muwCRMNoAa4jt8xsXw3trVcNW5YerhnRkpGDpypmtiMmKsz24zRx5oZguXV1gi5jjCtqaoLGporeud62we",
  "key24": "2T1nMnto74jrvgq38YUSS61B6sz283iZcAbWFiMXHy8WdVwbM2uG6PSt3MYxgvVUJ2YyuUk5wT89WtCXqPmEh5pe",
  "key25": "KwwqMYcNZbPtTmy7rkwCESnLDoTZ2YmGqcvsVc1D3XuTkDsYqiF1A77YE6yaUbkxoCEmGCqGQnJwnaF3pVEmZMK",
  "key26": "5tBqAx72Zwy4J8N2ufRfp6qppUzqkKMsSk8B4pQ7NnA637sNyaMyAcw7WUNZExP72E3rrzqSjna6uQ9BfTjgSTJB",
  "key27": "5eSa2pRKouetFXNJZidkdSQ9j1rpGh1A9DvKUaggouoAhBcCnjkH5NNAuZv9t991ueGqa97WV4U2ahppyLewHe7W",
  "key28": "3QZAcoR1iytrKpGCUH9arDtEhqC92HvNouH9esKaGvn2CkeohkivUsEh7sdqv2TKgE5PT8MxPk6oRYWtrpDdhnZH",
  "key29": "5KV28y2a2oUPb5sSpqVeLcugaJUpwBYwbQviaveZeAZfNeq7BobnCu6CkK4ushwM3ygjJqugRCHRy52GnHyDWVib",
  "key30": "HGVEbEAogYhNYjDF8yzyUpsyJy12zzmcLFepA2w3wbLHtNFbfXKDZSQ3TYSKCmTYWe3c4TGXfbJHnDWvsYn4NMB",
  "key31": "3KDUELeEzcwXdYBQXcYAmwakp5LCqScfEh4eNd8z2749RR7msfQb8VmThDyXjWXhvGhMuaqnP4Xrzc9katC4Hisn",
  "key32": "5bPdDUafqD2J1j9FSpmWq5pgDYerMJyVdu3dsEyyK5bJx5rEr13xjMHoN6kMqf1BBvq9pwRMAczCGcYeq1MKFUQi",
  "key33": "4FovVzxguJfpLCEYcCwsE7maLi6iKvDmBdokDbGx14rr3NCe4af1ywXAhPPySKrWYAi17Qi1WhhDrsutcmo6hPfF",
  "key34": "eXZrScjyY14TtjGhEpVpiSMbCJ7jSj1dUwyzhYU4SibTsQf6taqMVNAvqoorrJDiCWnLwzgNuLZ5y57kmiz7V9d",
  "key35": "5At7q7RV8P2oGnAJjZTykAnyhbMLidxMWQEDcTYFt9b4T4PMHAcvxpCUknf577edfNBv5ruZQF9q6ewMBqTNVuPS",
  "key36": "3NXwTqHDxGt3sfHUi7Gvnep75SJADLhFpNzJSxDxMr9BdWud7djza68XUdn9PRfHYstRcv5mpcxCxJH4F99hrY1h",
  "key37": "GYHdE6i4pe8TSt83UEBcf8Yw3sKKHr4KG5xQoePfig9bdBRWN33RGsKfgBMnQvtfwGQTJrZtN7b1ikKR8QfMEPr",
  "key38": "3fJJe1YSdbTArffRfz76TeN8fZsXcKMuWdMnNp6uhnBnT8dAttBWkce3JLjs2aCArjcbYvo2c14xcbtghKUsqRpR",
  "key39": "2DmFLjbG8oHbDzgFQFSUzaCqhDKPnxAAUeLBWkkhKL2t288riRSjUSERtR1WDMTHkiJqnoVYK3894J4kaKWW3Sg1",
  "key40": "3mRL8gH1y52ZVjkvpupzoXCgH33bKELx7hHNEqyk9RX8PN2ELPCuiBbNeeniav5tWc93gFBeHByNSpjNMych6Hgc",
  "key41": "3QXKfBBH47Va5t7eQrVre5nmrwYPph35ptVjhKgsaq9tcHBS8xQFyrdSbqE6X565pCC4G7Ur7Vf4cH1wSpM8SpuM",
  "key42": "4WtL8ZYPYCzqqogeoExt26B9WExZyEukQqgtU7RR3hbD9fyqdhhxta6YxAUGAYjMCGTk4xD2ayW8G3uSaJS1QBNU",
  "key43": "4oJSC8XLR8R7wUskL67hyprm3Er4RJhNtSGGsCFmka9Y5ix9tM77TUBqKoqw49v7EGuMGsVMYuueX8AueAJs7GGQ",
  "key44": "5CYrmeGQQKn2gEa3KqTKY8J2LkCgcad1aFzkewfttJz5MWAe7NzvrR7oHTHTZ8qNwB6bTWwQXP2jByRdsMF644Ls",
  "key45": "odDxeN9JqFfnMbLZgbtS9dqz9Tye6gph9nunwuwgVzChm9srSgDPx5XHqWRZxbQjgZY3GyniZL9WTk9zqcALDuL",
  "key46": "5vL2Uf2CmDa9f5hVvtSyfEY9eYyV5qdM1iVd96Sau9cGC5D9vKWfPzSNTSpbbGw9ZYVji7dq3jCeJzC51UYXK4cm",
  "key47": "63yRAYLCUrAB5U8bmzbxAxUFchcuUgQ5WfSXkiP81njghaQg89GAdn1e6uELypq6Rf68bD39hHWbMTx1YZPsTLTH"
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
