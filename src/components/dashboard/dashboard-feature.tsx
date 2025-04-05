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
    "4QkZhD2PCuq2BuYAaYJ5FMnHLuzVuELMKf9iAeaKhX57Qm3L3U2qd1HgFbeDDRVwTfvf1fKGH2JCL57aZYxr7enE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Dbc9WHpHLj9puVfe2En9DBg5RA17hez8hxDXYd5CHachrhsJwUeUjPaQDi4oWrRJDK2zSx9P8UHVFRDcfpcnVHM",
  "key1": "5XMESMWrX5zuWWFjQt75PqEFv4Erqm1SEtzDV9BhKtS6amh2kSeYMZo5RzNixkSWV6m94uAL368LaDnKWzSXvhT",
  "key2": "2AYgYDtPBj7CvFM14ucnn5KZnwbQAom39uMAgp518rAvEQH4mYMG5e5Ka2bYxCXsAqESeAJN2FcVNXfnh3Akhy8g",
  "key3": "3stk9wEZJDymSxuKwN8KoaiLypLGzmg84AkfMB5wuPcyZp6cjE7Ud3aReE5vthJan2FbzshXEUZD4ufY3An5ZkHb",
  "key4": "4K43v3ciSYvUcaBTf5XXnfi9zgjooLDBbPhtT5RKVn8x8PUbvksxcrgZRLo9vmAxkYmNDUwh1W8vE4nptF1uWGok",
  "key5": "4whmgDgWuMSGm849RHmqHQmVRCFcj1BDf2tmWck7RSzm5BLpzfbbuTEMP3xyvEReXicYgdBWaNy5cV6Uo8q3fzgd",
  "key6": "33XkyFBvvjPECqmDrxiAYy1HDtDWRwYpzauhiWQjoLDxNi4ZmLfhbPtfUcQnAYVkCbyAhw8cUzYtkey95Rey1tYy",
  "key7": "4i8PqniaLRaWKdJhE6TuMa8XW26YL7f5mGq8pRUTwz3fZespekpK6fQf6J3h8nFoTjVNQ6w22Ggr6nBCZK9Jz2mF",
  "key8": "rzffYcHJm2Cs1LsLFr7GMSnne3GSog66SVjikX9QThqpJFtAaBstnVoGp3qkBENFpgyum3ijnhy9PxEdzDmTCLJ",
  "key9": "3H931gTtE69TCwvthnFGVsS14N3oFwr6h7ZTWnZPD2QGyUMoY2hC4JSsQtabZ5r3X9gop2Vuxyh7XQ2P7uKf7w6h",
  "key10": "L9raRy5mFcdRdBLw3vWV21Xd7zq6p17As1xJ57N7U2jcQAuYmuXPt43ysk6WukrDa2oHmNX6Rcv21b1jF8xmy2C",
  "key11": "3WxHX5ku7sth8CFb3PrgRez1DUY9GRS1FCDkipHbPKoap5DSRojF6ABhtANP8N8BEPx8tnCkeD2R3KNMdYcmcVod",
  "key12": "24zDKfqPVwsgcShzSxAaVVrNsAWR7gwCGBVpM2pgy3jbcBHvJVNXtMpP2Fj2NpGVkAcab9FyqJXQ6u9xgSdQ1zMD",
  "key13": "5GtCQyFptyBuTdEBTgiT4cPAX22VE9EKnMVtHKowYaJSKJ1UeQWdbwTnfkfLWbecEuGnT3cLwTqMtzBxiLm62rFj",
  "key14": "5ttr5SzT5v8EQGByGZJkdhjzw6QRRcMg3iJTXucvo8Hk4FykmkpK6VDLoDwQfKjResfYtPTWHo4VAgeY536GLdt9",
  "key15": "2649F9Nwrto4GeUcxmEETNLcJFPrkVHrKZqE9874nJoTsEgRfVc8QEJsaVBrWffkwkcFU5kTfoX1oALr6S6zBV1C",
  "key16": "4oz3uyMdn6PwrAFTgQF1Bdm7j4JnShemAj9yaH28MZYq8t4SdLSjMpQs67V3HeagNx8qQAZt1E678fGH1XRuPXB2",
  "key17": "2F6pvVPmnBbdiAjLuHA2K5M2TRqELBf1YLhw13NHAsrgKhzMbbqg3M19T6oEiH3s5wmEKjPmboT2SJYuQTgJW7uF",
  "key18": "28ghHGNMqsehzFCsoq2BSYwUR8MKNQdk3ZgyTGKGbJDPkVMun136H5bkKPPUHGDYuWE3STMBfJRevW2VtkudSVyi",
  "key19": "4f3ATH5GAKsHHbY24cZDJXbQnGoXPEcBEuMu9g5K3jKQJ6vciA718YxRXPTnfCGYbL4uELA61WsY8RXPC36Si3xE",
  "key20": "5k18RZM7cBvLd4Wsvbvq9GVeAtZhZW4AxB8fSxefD5bzNVpGw5tbvxMGm3PWgsuqsp8weopFZamsPEV7PPotVsns",
  "key21": "2BcXACPQxtSTEHiRiuAXfdYubXJnu9kPvGYRRE892ukR1E8szmHjG3uWnrbZwuut3BBkDEn5yQxdnn3ijoLAWLHo",
  "key22": "2yhzFcJBmkoiic1A1o1PiKt9s8eJT1eJoTVtQD3ZNyPah3fzBqsJRdUEFhH8xTbdsdjUFeH4YJfLWzyGCUcVofx",
  "key23": "2NpDgB9WY1rUqxyfdg8s9Kgu71jkMwdS7pdRykDMA7qHg17cAgYaeThJQXpJ4GFXFFbNtGHiee5rQLK5nZoXxk2W",
  "key24": "4GwozNGbasSW9SaS8bFNtmyDnMQprLiyM8q4oVk1XC4Ta6JqNLcrsCMqkhEFwfw9G2jAwiYN1LoEWX6SzRcsXy3P",
  "key25": "ukyhi2jghTJQdgT4PixAZKwkttPCsYJsHKfruJvPwEbrJbsq3asZw4HsdyY7WukTmP6C7XdriQQzT5ANKUJgNN9",
  "key26": "kUqCeqaGBkAtatJMtWan63mMUCcsZUHonGqW3Lh6Ahq1j917GDgTMo9UknzKzv1MvKamiwB3BsLv3ccxzb7FvAn",
  "key27": "4MQESka28CWwWaG5DFStgY1pao8tJFEFXq5vRMLiBScwmvikCr8LNpQEmSBcP2jYDhZjyAMnfuhvDJxTzpwtAEot",
  "key28": "5U41BQNhS7A1MFC8E8mQZ3z1pKJCSSdfYE2wHBdQUYJTXmiQV3KXHG3TTFb28TEKPxLq8PSswvtXagKrHZG1j3oG",
  "key29": "2FgnKKiuBEg1KonfqBahoRJYiW7ocGo6Vvjahjou6oYbNKZgRtgqd8sBFF8hdvcXucFXvSfn4XHaTLQ4rg95Fbu2",
  "key30": "2ZRr5ctQWY7XF2amLm5pfMnRSaKp2EgJif4Qf6FXcy4srjr3u5XRpFdGNb5Uz2Bi6YVJGbvTLH6wVHc7oDpBMKQn",
  "key31": "V8xaw8hkupB9F9MSRmUDuZzx6Dhn575UufUKTxdLmrNmdzyR6iMhUTdL3poLozVsn2vAP4pUY1rn2QR1MVdaPY6",
  "key32": "2PxQi5VTDRWhWtLD76UPjGWPE1xtn1wToheZk3prEaAHh2EdKxSze35bV1jSoBpqmDi7UZfYxApMLV1YvimwCqtS",
  "key33": "3hCnnBTpkbsuHZvVFCQey4xCh6MdVAFBoHBdczDSsyZaJW62253WxS84uNitBac5W5srUD6onMWQD3Fk71diCxNn",
  "key34": "dNeCH39FvzAdhiSejJ48mf7fuNbFcnfwPmtCQsBMxofe29yWvv1w2e7H6GdU2JGUHVXxTi3SEXHYGs8m4oPdcUw",
  "key35": "64zmy8Vww8SMMpQhpPi7YhuSoj1RtuJZsMSmCWrmTFoZdocZDRPPg3DG8atXz9NeJ4gQKP593Af7DTdxsut4nkYC",
  "key36": "2VPW9kFWrxuUSq27mHQXMCznp9vkvibRttzoZgZptcWAENR6XNTkAz2U8H2acoCsPpohocNCKLL5iAM19p7uzxiZ",
  "key37": "3gJpKnbDnvpRvoHaWSd1GjQvVQhbFdjNgtUNMaYuqYDASAEzkL7H4guwtU7WN1rarf7xWsL4xA7BvRReGvELTHUo"
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
