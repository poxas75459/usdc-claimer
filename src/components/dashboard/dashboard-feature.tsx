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
    "4jN4A8XosPSr9RdD3gJuc3kPmASUghfY4UwfdedMKUKjtZ6Z3grfy2J9QVp2iG8CoVBT6pWwhoRGBEy1STwGpZJj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yp43PbvEn43ZVR8ZShjvx677LUSYY3XY5gSwsYADoQauMB15Z6AAnfddTQyJpr65KJe5g1RsaKYE5F4isV9mSce",
  "key1": "3RnF1NfXJsEyvBay9nVo5nujzGJbsMoMg6wGZgJ6dY4Axh3jtPK4BbPgA41bfG12LM7bcjvrgwdeQjPFadmM8cfE",
  "key2": "3wy77ZNP4MpECiJvWbE5CV6MGjq6i2HE1CJWurBxqmyqGM8EVPVbTfPLUvTdVx5MW6yW4HcpBAfqCaEfyJ6VCJbm",
  "key3": "kFQXtsf3Ywhs9KGuhgKcmTGuHFdW1mEwM4xRfpNywkvfFXVJNiy3PkQeAcGvrCD3rToNAXgkYbFKLt37od7SkZW",
  "key4": "d58zrLmTo34SjWr6XHR8vFVdfcJz5e5CpVrx5FffNqX4TXNr4bxcogyTt8NsXUe7AUVN8mSrgb2X6Zr1hfE3feL",
  "key5": "LBjQc2AaTgrMVNY1n6Tkfcc4LHTxHEsdWEv8frdhBSeBocyFNZ2vzbRdZmuKo5FiaJ2vfX4b2pL2aErrgEoq4Nu",
  "key6": "E2P5iaj49TfnpRRUK7y6iTQxDz82aVspmeLsxk4uqhz9AqhKq3yT4VAMCmfSz2YWzNQPfct8Zfckt4ibgBYvhtL",
  "key7": "4UiA8AG2spXZm95ohyghaL9dNwLLPBbcNBYzkCv3kpV292CFuNhZDjii3N2PZZmmg3ypJapMQJrzb5jVAKZrMUbn",
  "key8": "5sGeNjqzh7qZXSXWheynanXpqA3sdzFCTAkp49PbxL7rhsR6ggvy8C6iADgHjz9UL4CSxpAN9m5VhNrV6mtwF3My",
  "key9": "4gZNqM5dLtcVbwKQ6zPp4UErzq29XSmTivtw2Em29GUqfABc1caJ6VnRp2jSucDHusvodYM7E7yiMi16z2JFV3x2",
  "key10": "3mfaU1ouo7T5DVNo5kgXwtDmwNBku4kHCyvLxWJJUtALFBD4bcXAeH8K9sUnuYH2HFLpFJE1oZkNbxPVAANXjzas",
  "key11": "AfaG1DUV2oowzVAKeAhiqvdCNXr8GkHMTGr3RtzRmBmAE4CHaKfCs8MBEJAiQn3xJcHcPz7zseU3teXD1Zzyy77",
  "key12": "4Y8M8zVP4R1J8pNAcuXJJEEhVp2Pp85HYgHRLrXYhUEeeYcvWDuzxYh1jzoNB74B1bwxzw5yL5WR3yGD4UeLvVW",
  "key13": "2LAEEGngLiPqSkLRmawLuzvTYqdP6EueAq4GzmE5RP9ca5Uicj8FZHABbkxN4UkGpvzooHiTqi7PNXPh6A4dX3wk",
  "key14": "41yEv8CwWE1rpd7WKitBYi9XGRW1NeFp5BkTKPzFwyS9E2tZgXHQdeUwX1HvSJrdv3r6UvBc6eFZSmuLbDwuhZHd",
  "key15": "63qPvxSJEaAuf8x2w3D9RwTqNs29ntVf7cgFoxPRuDESJY5EnwDfvaa5Q6GuwdgJ5diSoumTdPbJ8uMjXjsWbgez",
  "key16": "2cFAshVCkjqw16rsL6zpnJMekRZr82yisBWRUbyBpsSq3hn6T6MKh2d32b2BXXwNYjNPP48tEM8rSGcrQrQz9ADk",
  "key17": "spnTWzQsrQzBn1qwi1b4rBKN28gUmreHnjzQLUHtc1T6sUThVqWke9c68YyAtAUZ9VsA9FpDwoRfP7xsAtQyiCU",
  "key18": "3MtcYrAhpMguMCdU3ZosMcnK16wrWDpJpsD6cPf6e2kDDJJY8dq72wFeG5nryJCj2XZoKt11YiUDqND2BLdZWh6G",
  "key19": "b6pyZf92yX7jcqKxrtaynMpmDDtgyzu5bPBmfNkfVyBHworhq9rwVxumujRTQMyosbWQttfNZWw4jhd1LniKS5M",
  "key20": "asNt3s2KV6ok9gJhULBJMwnQiPtxBk7MVMA2NhWn5QxbGi9Kn5AZaqKnww1P8Zvk9tSYB2NG141FC8EPYt7WxU9",
  "key21": "2dXkYz7GMaLiQNREu5E9HP1B2q9fqHzHMvyd6nLaMcNM7dGFoWRdJmuhpbhmsRBzttKhGtet1PQD4VDefFLgT2DT",
  "key22": "3LGAdxWuTJ1JjYL3froKtuik4gtu3tdVCYC2kSazRvNx1jQfANDvH8bMNZMTDZyBkoNPSpE1Mp1sH15yn66C17EX",
  "key23": "4HhwyVD1YGRDtfb3iK7XbrgDtXrcrbzXFC6QyTFhwgstqR3nRB1uk5npWT6UhP1mZjGAigHKJX6xtfWe9iFUb6H5",
  "key24": "5kgsiZV4JADHyQe1ku9hf4KUP2S7UFrCD3kW93nEAtD8RqdChDJYuRqbuqA63HKQBkbbSifn9AnBVEpwzJqAWPYt",
  "key25": "4FHnLnLzm7jWxmUiiJ3YKC5XHZ9qF5CSuj5VxnXEdkmSaxKAdty4w7SZuEG7jfRYJtLQ2DACiF2f8wjqmxU1fppZ",
  "key26": "ofH2JjUXrtd9VQJkNufubHwhVu4SnD3nupkJYbpaNEBoSJUXbxwPLzSuF2P5wLhUMGuAtPpNiJbpVzdXYWDBSMA",
  "key27": "3voH6gbhp8a3uRz56wdUdfkzSRNGk5GtynwjNMsisU4qGxnJF7dB6sfCKsNCFmtug7ub2RJ66yyHWQG7QTbLoncc",
  "key28": "3giEAJ7HUENvg2ZnuTLeGjn9wc2WBzUe9kxP8dgsFvihoEZdmjVWJ7CcgCxCHGHfuumjMF7Mxov8kfceZU1dHbkA",
  "key29": "5kQrzXNNJw4VXSRKxgyijg1gEJpzGnwBYcZSj8PXz37fj7xejiEKfKPgEcQz3X8BUFZKXkkTsgxnNfXxLRKCAyZC",
  "key30": "5jZ4HSs6VRbJHChJtjTnJkuQcN6UAZ86WYLxqRVgEe5wFW3WsyAWdZvYKgmMen6XLLpTqopRWgyPbTDJkqMdSWYE",
  "key31": "4RS5HTcjfy2BABBzQeHjciHy5h4PAGXC5TDnmZptBe3zdv8gxQN1r3zCZv1kjotrCm9Zgq6du9hBmsvKv4x1ugW8",
  "key32": "XxE1LZ9xQH3DMNAo6vjyXPbroHwriCoU5CA5XQWeD4D3CHMao21E63UY9rVbtkNdMh5C3VedNnZJeVvHuMqQ6aU",
  "key33": "36NyADNzm4mqcEw69kBafDBPt3GaeeGur2yznAoVMAPsYm67y1uB87rBvhwGNfTzBsfzAQNpVxrrGZQvDACpSPeZ",
  "key34": "4XA3DN7sK1R6k6YnT49kidnKfi6Zvy3ZVkp8viia6rk4pSrggcQqM6pt8FbexLkup5K7HDD1sCGUd5R5xsPyWfFm",
  "key35": "3GjeWZTsKZDbz6yVwMFxPMKetor5Uzx3b6LjMiCcyDRCaG9HuCz3RUwGGFt3W1v1VC2F7CaMZ9uXtio3kiSLZxcm",
  "key36": "5uKp9pirQHGtxCjr1sMJcPiYhJ7nzTojXx2McsG2fQQ6xaVFrTknv9cH5ogSAmniBhk9XELxdKbaNMH5Wiwpe1jA",
  "key37": "42cqeygk6KwSsbC6H8iRUTCpDR4VMvuvZrMyPoAqMbxb5EK3cMhEUznStitwvmZizmrLqCt4xqA8GA7TDzFguswN",
  "key38": "25C8t6wZTbAPDwsK5GKT8GKPk4XJvb4eDQXdp1CNKhwm6RZhSkPEx1sSJaPRjTYohJeptuQhT18SUUreq3M4ZiAS",
  "key39": "b818HP4u1iEUy3X1R1YDsSDBuRby9XoQ94r9SLzdogCdpWXD937S4DUaBqWXFoPy8E9z5Ur33hu3MjYiFUNdf6G",
  "key40": "39NDve7rATynyFJUvDpayEFDQb1knRsCb6rjLYtUeA9Gst2NSBCLaQ1knmmB8QH9qEP2WEcoheMZXSBzdLJgQhge",
  "key41": "5EPMeE7aoLWnZRKkiSxCPc8UjoJneUR76ff1DphBZSCMRGhtWtPZy9ouxrwx3rYAXBwiFogAm869r717QqzhHqAp",
  "key42": "3mrpSTVjcuss6ktkNLciUYTaV9GX2KgMyuo8fSD7xAUPXnFmxVoLkM2xGjfk2A2aNGCMAbuckQhGduKCCpi9NFrm",
  "key43": "4WrtyCKvBi9bKBNyq2W11ggoNHXKdzz8wBRPzabfL4BNAXvk6fAjv5bUEiZHLXeWEi72tNc2wSreDjPQebeFsgC9",
  "key44": "4W6TZkM3hbDXsBSWmXKRkLSCnEpqmaGCBYFLot1xMqGdAs5LA761vvyhVRokuD93XrEproySL2G5nei36Hongrae",
  "key45": "2NSFdiR3RT7Fbi9ezFffsPh3TxPPvmt1BSGcpgUxb1Ru4GZqopbLEKPgtojWYECJoNeumYNTYpsWSJnfg94hwE9a",
  "key46": "4SmroguvwbsTSTEVARu95Y2gk6BP2nCUqyhDfgxAeEgog53mtUwNx27vbHsf2jCE2xyywBYyU4pwrUYgtW9XWEQq"
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
