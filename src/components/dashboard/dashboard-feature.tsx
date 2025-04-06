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
    "4HCxoXR6BmFnB6tQquqJCViV7wQ8HrfinqhN9HTrkJFpm7paGfgY6NtejyNtzfLkbRCMfXZLExhKUPyXb44KCm19"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oLQYANBWAQMnZmtv2Hhn2PJprKA4C1qQbCfn8ddG6fLSQUtGUGfRiAMKFBoy1B1p6HcwXDaxvWp1YQ5MtJPdpaw",
  "key1": "3nViGuPTEma5uG22G4EDcBbZoHdcxgiLSULuoAazLoEBuTU8QNUC7D71k5zaQydwBgvvWYQw21yRBNprMcGRJesL",
  "key2": "uPuobJSNCQDCRWDB4wBBVTsae437riia5aSsDAgkb7Vtqjamkxd86pJ4FVAhUcpZanAakwuNWc9YRphoEvBdDmZ",
  "key3": "afMVAhmJemEeawHWQtnycjMTgddw2jiiAJ8mLKXson5urwVsF6e35U3bZqoN5YX5rw8yFX1R5iNXmkcTRbxrKBS",
  "key4": "CMXGRdWmtsCSQTvCsuTA6j1wR4pdU7PmKht78rGV4a19pYdjhSecKNQTZre3743E634CgizprdREPPkzRnbXVfd",
  "key5": "3z3bBMpKeu5AwmdusicNkfTtxF4rMu5jedgFqHjHfuHFTyDti7j9a3htvgjsKzh3MGAeE7yWZ1SzjnVb9JaYopgj",
  "key6": "5tAS7P8vk8s6gvDLAUEnM7yQaAeDcLrkvpAiseToMF72g61hrNtMrydzPkctebZFBpybB3UpnF4hEkqU7LPDqi9V",
  "key7": "2SY8AyppDa821z4gLg6uRVBWt7iX3vPm7fzhT431KFcWpcjYT3MVn1exq8d8vyG9Pj6C9CjfvANycgPvbaGQ5t35",
  "key8": "LGJWBbBZwzVd9C6usBSeWTBUEbvpfpU6PXuXC6k7ucGUrm9svEmbKbF1LAmDt9Fkip5jqK2Pz5ZoTMu8SrMfug2",
  "key9": "2aJDDJ7TVUkprYhcEwVZGs7pkP3nZNpEPHcfM44t9u9cBe4A1Zrhu13RFUFAgWxPGrvnKLDPKY5yiwXPoEpL461m",
  "key10": "4TRJPx1rE2CW2RzBkn3gWb7bRCdjEBV9v4n52pLhdVMSbWKsgTHd6sx7wrVLNPvZHn91ja4nNidBHtuesLbzKVB2",
  "key11": "35NPRDMqyxzde7b4SQ99mGXcykLec1dGmr71WwYSHmbfsxYGUvgYmqU1L785pFHTwrgZz9xHePrwSc1smQVQ3p2h",
  "key12": "y8fhHcgzCc6T25JdQqqqroec4T4QPPaaML9syXXGhf1wbqXYdvdFSFCEaaBw8KTVh5gfTUk3Gr71GaqobhqLpfL",
  "key13": "4DHzV5hr2bokdQwc65FecS1PpKZtKBnQu8CsgFRnoDVJ3CgDUXPimdkdV2VWS6GEj1BR5ytyhv1NhFpZipVvJS3u",
  "key14": "67GLPKUqirLzz5mwGjuxHMVEgsdzjUi63ZPmoMgYVomsk3v9gtT3dnVspiPZxzf7FN42mUVFj82o5a1Btg9KeCX4",
  "key15": "58GEg6NkbvEVNSYA3Ht1X611CTXnmkPG1o4XV3byvfhbWMVmR5cDBXcaRanjMyHNbs9TXUA9iJiLG96BN5khKQPU",
  "key16": "5jJ7fHDrBdwAtDdykywNnyoavXtGyK5N95g91rwqpQEkbG4NTZSAhPah7ujhXvfaoh32kHwXWwyhNgkNj8sjvVa9",
  "key17": "4GwwHD7Ac9ucrrsaGTVwQBoSiuWtZcB6bActBZVzTPxkj41SQFo9pt2ji96sSZsNuDUhipV3N2aTfJTdrEndG8FW",
  "key18": "3LQHdEveJgh7y9BP4wGCM6ekYyM97Gu65f6mPpSL38erVpntXKzbJ7X7wiWqEu447GUvkyaY27jZRFsyCBxrkecd",
  "key19": "5vhk5ggDr9wPQ4D9kiaEB8oNgwLfscoehxnWb1E9ggZn4kFd3Q1Z9xCY44VubRvHwJFpHynNdCPcoDvUSv4mDivn",
  "key20": "5Vhkc6F5Mafj3woUUDW8wHVDEU1JnfasKiLCWPniPW6cHkojEeCxAryrnH2E2uiRnGkqg6FaqmmiiCv1TvKEp6KD",
  "key21": "3pe3anV8yMM9h5gZQz4R944cRuumJGYu98T8dbpKRCBR2bX9QT3eNP2z9aFzWqjy3uMKCYCPNXrPqrfPzYdvkhCL",
  "key22": "657ShYGC2GurBH9VR2THpBKSphdCTk46QHU4JZYdMcXLXFtPMHoV4Z34ckBoJjfSF6xGK6u4hqRQk261WsnasXfo",
  "key23": "zSKZdzuQQUTooKHVSQRDbJpN2mHhMkxRswxWenpXsWzPpifg73HjCvPLLYfGe3zhDToZHrrp9Ly338jxKp3H76N",
  "key24": "4hjJ3TvJf88sQ2i16UcYyDaNFYwyM4F4qqWRPQm9kKvam68N8btLqrvi18LADDtAW9fXxJyqZLZsdfbP5Fm8HrKr",
  "key25": "LSjod7Kie3ZrrXPHMYw7ZhEszS69zEjxHRCXs8nu2eQhScYgxbjWCGjJffcc9xKanRtTU8nMrBhB46ctCGTbvwL",
  "key26": "CWjmnDJD6q5CdLaARRfgfP5FjfrJ2daU9Lh9gj1hY1gSovHRq6UURTgVonTCMyzC7iaVAqQesdcmJVEXy4ppyUE",
  "key27": "2orTaYfs4EvNvHTanTTiaavY57uQMPkMSFRzdbaAHKnVV17SLYKbwHA5pGFz2hk1Pe5iRDvvbkMiysd6dEb9Na3P",
  "key28": "5fVDYVYVf9bVNWkhKiFX8pH6UbEuSsPgWEpApgeoJXSwJjq12Lm7Vpjr2PSE83vvhkefJx8T2cP8H86p2JqZdchs",
  "key29": "4cCYup1B5bSEJuG6CuwjGCSh9ChdrbsD96zCKEpCXtGJan3g5KfzH3dBjPoJd9rSq29BXjrQFxga4Q6hPfWVL9Kw",
  "key30": "3CBppwuH4BxN1nV2GiNieQWQTKiqGsuZQxGP8mCeBfo2dUREaU7b2ioWXjuZkhNjizfKYkQpoAuA4GyoRQVV3JRA",
  "key31": "5cio6o5QWTHTyeyLpLnAfx75kN7cQfLVmbUg8ugSVteK24vFd3TSnbKhce85og6AMcp15466kxuVKEVE67B5T3ev",
  "key32": "2NW8hkJjatYF2rJs89yp8i22c7hw9J5Cakij9ZUBKUgLK7MfqvGmRdW53kJiaD6XZzz2The5aqXthicakfpZYFoY",
  "key33": "J6kGDtp8Msg14f6BfLsqE4PS7dySUp73qsb66hYnnywBoCfLW4JkoMTiYyQXhWZ95BDoPbQeLjwY9x2KwT9WvdU",
  "key34": "27yevHJkRzCHWA7csc9duTg7PQp8jAYMhWxL7AjYwxHUdsReUfGSPvBpWDHXsAEYC7Y58XQxqDLjqHWWtPpWnxrf",
  "key35": "4csQhSCgk5daiQXMJiyxz7a5VWBhwDe5Zacb5sEE9rJzWnq6PTggr7x2rrcAAsaGFfzC6TGwKQdRaNjDskBgtR7d",
  "key36": "4sADhFAz5w6nyVkt8iXeGyag5Y4deddSqQpLXHV8pyeiQGPn2be3WFzt5HPQL7PUR1D1UbLWN6LgxY85iD3XwAic",
  "key37": "5bHJK4iTbhaFfMz6MtpXUMyy1aFrVguH7Dc3VBdzDUyWrP75C4ZuqcS4TZWcJsP4b7gHbUJ3TawCVELkmdtWpKan",
  "key38": "36jVpMvnBtwESDDcGMf4esCfsPRdB5LPT12dMhzYZbb6NtmNT8GTTGz31SwtjAXbpWF4CMETqnbuLpLhmrkCA2w7",
  "key39": "5APkPM6QoDz2VdywZEmWsSmo8GPvcrf2ikyrKQjXTUdiHLdDyKWFZWLssNyaYr8qxSHM6mbvRVe4GBVv52EwVApa",
  "key40": "2q58L6qRn7bnRPZgsyaw4zpjgpg1y3Uk16CTxdQYnUeQvenn3WJSethveMH66T6XvKysgpkkJYaiiozY2mbSNpr5",
  "key41": "4SmsYZz8RCzGeGZ6qY9mDWbn2LSsWLQypdJczcH5cscR4fonV3XaDwoCCqCGKBCwXopMCrZS2WnsSkmSn1WrU16b",
  "key42": "5teVD3iRU69hMZbGNmCXW87DdkdXWSrjksjkfgBGKY1BfvkmSMfStEuqnu6H2ybVdiXA7Ep2W2g1SUnVyt6dfLJ5",
  "key43": "3iKNNEJkhSnMSKg5z4nKs2Uy4MHw9MqsQtYEALke5qcyr2EhBhNk48vveXHuzLPZPDmmeRXJ55X9xaiCRpqftreE",
  "key44": "5dZnjr5x2BBF81jUnfZATu31NWUosLATTg4r1c64hLZ6sk167mCNzcEBuw7k87Vx32emZMibbiaGFA5hBJuW7jpS",
  "key45": "3XAfVtCfBiauTzdZkn3kSXkSAJNXqJNYK8E5hqGvuSZ7BfH5Roc6iXNNVD2AstbJVxB4gZYTy6Hg2fJGiKXjRsNp"
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
