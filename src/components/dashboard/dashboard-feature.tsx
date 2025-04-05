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
    "4q7PasDtdjJeypBiuqv7UJYWhUYFY5YUAhDr37MDCn61odFkJPYrD1pWj4raGra1qvdqQ6tChtLa8FSu8ADLTbHx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eeWajt7nCTw5msCjRM6Wkd63ecoV1k68VxGPc9gouKQKdt257BdFGDaVsSwup834jHJho5TYMgWK89YVG7VkCRp",
  "key1": "2b6Hf1wzB2k9fEQ5t1H13GfVpxS4X8W6aiLY42anuREeyq6zWFSLXJLBEXbAVNK4di2upPVwqnEJFyjSdH4usu8q",
  "key2": "2vgzdZg5KwSDLUw2BBLwtx7psTaddFg9ozBbA8c7uxxebUEhHanHbi1S8aRrLPRJkKWCLQfpekEBtbpkUFumByAn",
  "key3": "4FAbbAYtBXR6Mv5Tk8eUvQzyoSRqzeeaSbuR9iMXqDGUjbycJLLFHbeZyTDMyiYx1jtKU4MxWxnv2EY7TRbo8TQ7",
  "key4": "4dJTvef9TcryM1M3M6Hyetp2agx8s2eo8Hj7qcAoJs7QHyMGoVZ2WvP1tpYN2QEKkZEw59965ZAQksTrPTGWPDgr",
  "key5": "5p8wKTDvvoAKDWpRXJtv9XTRP4FKbKrtWAuoWkLJDHrQzVCu51fV1tXtiKDoxCxPveqrzyJneigj1M2ymQDYcxme",
  "key6": "657LgVEBf8xsLVsz4qh1G7qKWqhnmq8GWKd3AXXTwcVzG9rS4YZSf9idzzpHdmEpQ8FNTtYhdF198EKjRpzC23Wk",
  "key7": "2mqKWzDszq2oD18MGSdJ5Tzk8ZxMJ1dmQmYkJgpYQQ6wqjRW4dAMgwfiNPSDGnA8Uq4r8N8yaspuwETXvGLtTFPq",
  "key8": "5LErBnsFkUY4zjBexUEUhzaBdxRCDtYL58QtT5Be9whnUBfafr6q4h8Ea85j8CpsRW4UmVv6ef4o1z3Wz488QAax",
  "key9": "24JpJ6q6HUtm7n7M7Vsu3W2AL7WnDNxvmKFYrkoxsLeR7dJmjgoC7C65LUMsFBHucceEGjNzxQprsfZ8zxtFXRXK",
  "key10": "BeyTW9PSLLKa2cE4RMMZKj9TDf9peZa2Cnv69vdDqUPUW8NdVibXArro2bNRw9rd8ZxRbZAcgzp5qZzk8CLEwfj",
  "key11": "sU9BHikFuu8f1DgKaTe1nucg4xffchEtTHUMYxWA4pj9JFjW38G8a95ma21va8DCshMZQv6CXzSnBqrb9ByjRe2",
  "key12": "3gHn4u6piP6FTrfqeV8uYBrbsJGMVmzwwBf3tUhrUhUKnd2SKEnbj246FSUGzvapvAZ5VTMoqhCj7HbFhULxPmuL",
  "key13": "5YsxG7o3Cr69vL6jv68EJUMjtS6SzDWZsNXHkMSfHshnjHm9T2h1RghTpvmEcksnQkJzn95Rsv3LQRsNjFZehKJq",
  "key14": "62F2GhTnAQVG7QCHEuueF1LPnj3oX2CnbqPJQMmzjyrf438Hacs99kwvKZPCjjHetD4Dh8AWuzKar3xdG4sPwkUv",
  "key15": "2xChzKPzgSm6F1EtsEcb74Y6fQFyg4DrjEYQcDu6w88WipbhfuoxgnfA6ui1xUbjcQTHXp5hHDurmHLedVgAuBEk",
  "key16": "4PEwdnrKkdhYEBeFsJKhdK6yWQwPEehzsYbR2M4S3hgxtRFHhqRWYBcR6829fxNxqxbXigbec63svUL9rswJNn8a",
  "key17": "Q87Jhp66zyBpNzz8BLj2TeZxhcwfe2sUKe9yekgwjxpQWniwkSu3EHBFJhCK9mqupK3xZJZkPJ7uBam7ZGYw8qR",
  "key18": "wjt1XHQdPZ3ev7r4Z8SmZGKY1fE96UorRS1GNzRCeWUo5SdiC3ZVr8SPYwZjoz3dVoq5xeaASwa1oZm1h6BVMY5",
  "key19": "5aH6CeX1QxgPdxCYPV4x6mSDddy5hRqykcPM5FqTmh4Tf4eSZXoVSFUPf8KPA2dNyhAYBH2pNo52eE3oEEMog3yw",
  "key20": "3HqdmoXEZsjRRvZoC1BewTYFopgUSKDBettKsJUVupb3oYMav5s4Ew5ApTuw4GUoEqxuYvM7KzKbqbUbXxJJF6m2",
  "key21": "4EUhx19JbK8dwEa5jU2MzPcaFqwDiMbNsGL2PhgUnoASKad6YGMQTAz55aWKTubfAdZuqroVXsZmWDhUMYiXoyZD",
  "key22": "5guVz5JCKyQQyPTG5PHy19UDQz8bYXFPHoe6bLsiJPNTt2QEAwbLSQ9yYK12o8oczcNpB34ZmxNvQds67xGREAVN",
  "key23": "TdXsEwHC6ug2K9Lu9tZ75MgMa13ZgzJ3ADuA4dj7NmfG3itGVBiamJfCs6ANm9SJCYHy4JbEWFVjwgYZQNLyRgQ",
  "key24": "2DGohdRuiskiq2JXm3gtsSatZjTA1kCq133Y3SrQk9H7pNB67zJp2n15AKMfLbycgkeB2rZ4pvWCoNmLKxgNxKTP",
  "key25": "fcGmTSoWHTUT2eFumNLdWYg15zPeVhai3N3HCTozzL6TbfQUTmaa6QeoBeLi5D2TkKrun9aVrfRrSASrPCCRPpt",
  "key26": "2rZnQP1yF28zzACpHPeFhEFstHvZH5XUgZrxJeaixWMXnAYFXv4vdETgixudAeoPYpBPJgFHSuYfDrfSh8m1HHhw",
  "key27": "4exitYj6Nv8WbfjCyKXs6cBboq7aQvAVP78WB2f2KH6H5sPg5h9rKwUQSMWzNgem5p81RuQMvp9mzsivPpJBbFDH",
  "key28": "3WLEuS7msmwkRE6nxnXDKXnRpjvEpJ5uzDz7TZtmkHfqnVHXWJiiS9wDwUTifBv1fu6suDwuakyxa1Nrz3qgnUFM",
  "key29": "2ZRWKrQQqEYqrP2h9Ju9p3ogfZpeyGAhkk1Sk7qPMwYNG7RmpTDb8Pq1PVXvNk9RTb95bvZAj1Ny3upo1JpXKQHJ",
  "key30": "5rZoLqT77DkE7Rb4MrYuwExWRYkcSrAzP7ogpNzWGhYVkxWNwgiapEnLFA8oeic9UZrxtAc7znFJjzbheo9uoEUm",
  "key31": "2VwHeFcugruM1ruz3Gn6SQetBxTsbM5sushDntwb4995j9NtRvsf4bZThBYdV6dnhPj5fLV1Ss7jMJcEccV6P1EB",
  "key32": "5UN5h2RBTdCoDNU6wBmnEZh6GRfXiJSNjSSQyxZWuZ3SnRRrE4gjac3UTktNgUKkGneoXqDeuxAa81bLt5t1Kvx2",
  "key33": "51dhoKDHUXRYriCtXYqrui9sUPzahtxBi7du7WgKhSn9L6VGkqMYyn6rP54vUJM4fVMNiHd8N2acQRPwCcS5aqca",
  "key34": "L76EhshzuVJY7LRFRQrfZDdeG4ZfPpXfMP4VkKrbZX8wUP8ANGdvcyDcsxUqL7qedD7M62TpXb5fapWYG1itAj5",
  "key35": "4WXY9eTCXk2MobymjFDC2B4BTNBffSV481VCPqfqDoXZUfUxAinMCPvEKudt251ZCxMrzivJcy9fdJCL2zJGjfrS",
  "key36": "14gHoe8odotnBTWymAUc5BqMJqPoJpgRRZNjs8U1YV7VWvj64CdRa8982sjWxZPLJToTAW9KoL39v15Qk9tqptY",
  "key37": "5cX3MHPy7yBZ8UnYuyLHURSqPSN9W6DQB7xiL8a7vRLNekNbor1sne8RaoFHkkTHmsD3Sb8RPFqTgGYnYn2x3ChK",
  "key38": "5ZYWU6rGDYZmAxwxZrjbQ9voSTrX1XQ3eABkMoJtbeumrHq3smFv4AML4iUMyFnvKCRA4yyCBf3e3YnquEvxEFgi",
  "key39": "3NNVdecY5NJdQF8SoK8g8K3WfxSC5sWKiGqLmTfJq1z28qw6TQweUQgpugWDgfLkjdGpcVMvgvY3mWGW8wgtJAGk",
  "key40": "aqLzexfzjhNBGGDxXDCGDwxswhmCd9erQurMSpBV1ke2zetnQk2yEEkjdoQ43cAynCeYEJeKSADeD8TucdzVgAK",
  "key41": "63DkH8A6V9s9g7Pd5xYQPfgjQWyV9vEve9yyRhBsSmhyXmLwsnsk6TX4y6AsBhLo1LidVXUsTgcZVUutpvrehQcq",
  "key42": "2xeTDqs5mksB3vjfSNidLYk2CJrhMWouiGqkmmLEDkBYbgrWUf3baUgVp6AwdzWP7yWybjDbfnf9NJCKKsrv6Fi9",
  "key43": "59uNsnk9a69sjV3sUXy34kFLmvtRHg7epvjzpXHkYAQm4gVUHUjGvjKR5DxBAwwa595WdZM6jJp2FVv7v1LemDqK",
  "key44": "2nwXjmPcr8d84iDje964fR2DHT3AmoXEjCz5hmDRLo96YKqJxEJJrujSWzUD4rK9a6XvYjX9E17AYUhUrPXh8VTB",
  "key45": "5eQkgPFKjf2LTEtz1wAaszCvay3KgKFYh8LAto988LwYAXut2AywKDLpwd47sLK5FD5RMVG4FfRxpAp9iZ7AQwMS",
  "key46": "YXdytQCY4QfiBBit5EdDnDRHgmp1ztRjRjAE1KbvKDaAwMbdphAFsFyi3xPa9GLXUFPbei28hmyWqMsxpJjNXjT"
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
