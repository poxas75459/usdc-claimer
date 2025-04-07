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
    "4B7b9xysj6gRQpoeAJHt9qw7gsjspiVwrMeiE8LnvRXiBEbbSUgySypJN9WweYvxVKGuLXB2sSHvRRCVYqtmCHjd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ofZuuXBT4VGV9tDboCRKpPaBBNbLpYqGDkknQfYf4CYcHGvqv53PWveRZartLSUvfwpK7SCpD5MzeHmmzob2HUZ",
  "key1": "5TNBqcA2n9Xyjk8pzoyUWiYgpXXBnCxnCoQcj8dwr81tpjBTULMykoSGTvRr1YgfcErPVQhaguSbjAYhZ8cv516R",
  "key2": "5w6FS3WPcML7vnXBdqWX1Zr1ksYsHBoYVasSQTAbVeaDpKG4Us3sckMArLT1yCApEWYuZR7AqvKu99KKnqcmx5cH",
  "key3": "5T2nVZ1fhWb58HYWiCmU8drZm4fuwMUpqrVXiggYug1dPP4oM1EpKQnCiVYw9QowysaokmNrekFBRA3biGLjvjQg",
  "key4": "38sKgGw5dAE4gqxGMY9RLQUtj2frTkLjLRXQnTaZgYMeVtRnacUZ99HWsvfSV3ByLPVAmKGCPYnmBn9bFzAwiRU",
  "key5": "5EgcS1FNzquXQSjGFQ9nRbGw2ZAwA6ESHnGehm8aLuzY6uEkTMpkgvDaQuoa8NjQ68FxUTKwFfpiZcJThocc5EcM",
  "key6": "4k59qGEpZtT1qiNJgP7J7Eich7gEnBZk87aSo3JJQRNUKTVNNr1yAJZn9uuWFQ6DmiNoaRaLJ8brMvQTqDmQBktV",
  "key7": "4UFUT94PspuqneXK7ghq2onc9UXwg6MQfC9H55Mhcztrf2mGPu31KQZ8Cjp7uydQDMz5UFMdY3DqyrAW7FNnpFr5",
  "key8": "zwtc63SmEiXRe4Pf84NfLuU9fL9zkS5Y68uCqfXUTcC17732XHwkDjqYoGgvCfvnjynhH67s9syRDnE4dZdYr5d",
  "key9": "62tK13uKBU2rtxsqaXUv2cqG1vWigNpsjmie4frsp7dBJCEqXhAfRVMAN7CZ2BydwvWsDk4NsFH5iQSgnL7LvuaA",
  "key10": "3u6GJfz8k8Lv9XXXpbpVqUCXQopXoQWxA6yoF3RCetid7qqVjfcvT9smEVzaQ1xHksv2HLRPnHminQHBWHenJa1z",
  "key11": "2rAPRU4DLw4WUka4EbsDzBDPT1eQZqXMR9NoYGFdEhLbxbSYoSsy3gj4tZBbyxM5XeEDxz1UJ6mMh1qsVjT5iNdm",
  "key12": "4bk8BFgn9LZfQ4K711yVmifhR3WQjTeADoNhnXq84MHjWovwZBZCGpXWF7qB1kTbiLPXvSmzXYgTViMLBLuRbYQg",
  "key13": "26CSRafeJ2MGxGshnckXVfCYyuwUF4APFVEiMp1dd1UkCR6XdTy7Ycnoh89pAP556Govnmin7qvWrn1SEPSDYqnu",
  "key14": "3utE2fyDdhLaBeNcoPwjqbieskwMArGsctJCVT29Kx6QxZQD2bEVWcH41RB4sfbbTq6ztwn7UkzhEUPWMppYBi35",
  "key15": "4CFxgCC7SkgrB38x6AYcabLALh4FvFVrgGYY5ar9WTyL3HX4U4ga8mNwENEY6kNrAjxmcxsCYUyGHSQ9J18CxmDQ",
  "key16": "4MAPeqDbeSZs1tefhBfBA4Cw4FsSzWZB9dsfJKW1pLBasDz6YwMnWuKf7P2FNtTpSfYgPrzLTZLT1EaZBsMN5ww3",
  "key17": "2fALCnqsQReDpUsxubapn1GTrMsnJH8n6WKUBSb5bJK3GfxSZ4JKVQW4uuwxgdPoCCgweiaNZTGWywb53UptT43u",
  "key18": "3mq7ZkFnQn3wEiFKDMFfMLpUtWDg8PBKFJkytoxHrEXmjgaWGWSMQHGXiRjabfdh4xe5Szr4vzsja6nMyfkpsty5",
  "key19": "YpHYnUmFWdBghNdwjmujfXW2HR7ih92sR59qhT9niFvrWUvh96mXhSEB4MTXqHgZeHc6C3XVhTHnmHwcyJu4mbb",
  "key20": "4dFcLicZ95yFf1rnxf82KwbVHRByF1PcvyYqmZxAxfyyViZmuAShHtp8HtN7G4dCyeDDMkKRuYioCd7CCthkwkZm",
  "key21": "21usucQTpW4VvKNMqeS4KUPpjzfFPfBW4TFae6V5s3injZtHm54jAaZx72at8nCXykhK62KJsCK4PvLKptgYXGj9",
  "key22": "3WYCSUaU7uTTrB8z4Kt9KXn6kjtUhxXun3coL2QrZoF8q7DrpoXC3d7At1xuK7i9F4MgGyEmRJqznTuvEZAC5tv7",
  "key23": "zkhtjCZHHuB1rD5t5nCbXjGPKMMyiWSJvVVD7hyh4XR7fwnQKSNThdGVxDNK1GfKwQo2S95RpAqFmMcokS5DXkj",
  "key24": "KbDiqMF1rebQAcachFMY6BjpfpFyQ1nT3hGS7ti3S8BTHtTA5hgR5EqtKLsuNUPNMAkyKr297Qrna2bw8Shxder",
  "key25": "2He6NiRjmn3riAFvLcj9i1sfatU2acRL7dtWqrwDjwztQV4KBhqDGmwraMuJJyWM5Z2HDXhbGUJZ7rohSzuiPkek",
  "key26": "2QyjAnZWxFpquKYfHeV449bbyR4sV3cvFQytCFsAMotGrWVpBgQS5sc3f1N2RUweasYQTUyLY2vsq8HpSS2K8bsR",
  "key27": "3E84dxoP8Fa44iEyb2H5BzRc6Vf8ReueQBYTcaZFXm5abKrz6MYhyrBHnxFnMbTK1JYXqggFULLMEQcLMsRkN34Y",
  "key28": "3EvFqsHYKsafmd478knRuXVJZGQQg1oFPuaRw19cHi9i9oKGJCGZ5DwabySsLm7hhEtbNKLXrdmajtDGQ6vkVBHy",
  "key29": "UWY8A4Drgqg7Dbf3jBXy5gRAKWUK346e5ontK8MAKFUJWxCoFHrFLCfn4uUKLPfJDV9dBdHrnXZs6B5teyFz3wk",
  "key30": "4PffuNgAYMWpWNvWUxuNLfDVj9VCfWTXBfkQ3HKPw3j65Gxsv66cqDkLnxeHRUGa1JHteS81Rk5gPyTGzccZAVK9",
  "key31": "3ZVKZMabjs6UEkT2Vg6cLEmDbGyQMAyU8YfYhRUCRXyb299QdYVJYtJhU4mf47zWLNuFCa7RFpQcKUorrgDjCwJ4",
  "key32": "44pXf1fKqwFcFZ5w6zPuJCuBbJ3rJqPzN4vUPbhNWMxcSEMLhshJYQzfzuW4Qhca6pLoCCXXzNLGr4ZnDf64n9RK",
  "key33": "3jzxkcrCMcUKQ6MKmBU2BsuEbKqQtzHvU3ZrFPnYXrMbNJ63mVYY7VMcRTYDRy2h6yfLGtqnoXzq71GVSh9sHnfC",
  "key34": "t5NU3fpFYdcRL5b7JJSMEi3Efy5oSo3N1XKKQnp8wcdxBC2nG4jafwR4B7sjwp23RtLZkicSz2rw9qmNGwj4EeV",
  "key35": "PRA1omHMcNVG9w3eLDSiZ5dTfJJxfL24gwr8SuXu3mEePiYfpx7UURDub2abfG8GF2kfFXsweY4aGLERVcNNKQy",
  "key36": "27L4QxYBu3FMJsu9JUoXiNo5iLLdmMRMPCCiGaNznsWBEgQVJfdw61i2QKUn1L2cAMtnC2iGTrZJbFVRFJivewke",
  "key37": "fEJtAZHVX2zyM11HCqLYu5AaNgyk49XGQ5mSyC3AwL9LuZK45edUE5b6xNRR35jWjzFjG8eUAYTiK16NKJg59Se",
  "key38": "3SyujwHuv6BWxj3LHnqYi4SKoPjDnUVtuHvPstn6yygXqh4b1XSoW4wyDcopXeBofEc4NS6nnKrZu7fg5i9xu2PF",
  "key39": "J8ML5ysGyTSkXCyRMETYoooJsm1iJRkxgqFNa2Jm6abyjzK86gCSF6e66trcERmfJRe4bgUQJ5APMRHuFuCPQF5",
  "key40": "2eKEUYUbyrpyuqDYpbKYJZp1N4soTJj1oZUyS1eNXTAABivJx1trUAv9GP5x2p2z3poapf4fbM3A1NB6qRuW3BVV",
  "key41": "DiJrgow5F4pCWSRyrxRckwXBPfiMxy5ET4Ge9QnUPCmkrrvtmzKcUw9nFa62eFkXQYwfVeytSGjQrzRKHcu8eBm",
  "key42": "2t9Mq4LaRBi1v8NNPDPfTUxNcfgKSGHZLeT4UzVRLdnzFQ4LXoYF4FcL7rZP9GKpVf87R94MrXEX3fbtRYRaMhSw",
  "key43": "4uDeh2CGVwsxy9t5T7ShVfk6cwwFAV9zMwiNdr2VG7jxgDTyk4NFzV6Mah8crarT2bzAR4YGtyEMmYpfwXejbfo8",
  "key44": "AGFjD9D3bp2YEY7Qc36XY3SyUEhVAS4QUBfkgQ9zASidfhuLTgoGGMpAQiLhcGpC5St4agwsCoNwtAgtdup4QTa",
  "key45": "55TpqQvjHd41qETYjGgp8b673g5bDHGuPqKRjxGzhTVhR5xg58BmWCLqTS9GGaTcKVi6qBS7kABUCDpQdgFSRKKC",
  "key46": "57VdDADati8n6boGPYcPisoCpCTiQNAuc8r5aVjsLJbnKcsiFgYmZ8PVxuKWn9gbKWmsZbDTx7RZ5dhq9vnpmTkh",
  "key47": "e227CTYaBYfgZKXT53Shb7hKWkoYrZ92vbrYUMpcUEQDazXJBsKprpyLM4RZMbiFfTsPY2QnxRd6GSwccduViKm",
  "key48": "5ZGbG6V7jEkpgXFdRt2RyVZin12unj3yvM2pbnZfhfRzfYR7rToEzHYmzAPqTvZ97gPokbBbP2MEZ1caKpwTBCXY"
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
