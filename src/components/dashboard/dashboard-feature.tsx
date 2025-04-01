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
    "5NWTQVVPnsezN2CSSM6KCQp9pdNtyxUmdjxkJWCu9RPSKmf7SJRhPAtqLAEscivvXL5XUevzey3vU5iCSdzzvX3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42rv1pXBBTX6NX4zFM8p9KX1U3SfH1pPEDi5kHYaxyADhoKsmA5EHYWjLvYQUehZQcnQFXdCV45LAy4H1V1LnpCd",
  "key1": "637axhWATEVwzkBzVRMBDmC1PoL5N5Kg2iHtSw6LRmzXA6iHzp5c43KX9w6RKpfhmig9dKckYcABv2j9mVZgD6Sg",
  "key2": "4vZz3bRPDtdvgCzAdMWHQ86ZjijCotznW8x2YcLBuxxLpt9H7yEoo7LuM5N2ywzCoDA1EQCpFS1L7YZQ5JFxTYQE",
  "key3": "2hPSDPhJfqWPAN7fh1VRSpPqrmvVAJtTYHdFVb57gJtgwsvKKAwgaDmMaeyHWV5Q3PMjFFZcW9FLS4Gwyzt2j7zd",
  "key4": "4vBHKPjgSDPHdCDbb2E4EAu4f3TUv5EchADQ92dHVnjFXHvJzuDqtW4P8Yq6mdAsixV7hokqDYjxieg2UBojSPbr",
  "key5": "61dW6n1ncvdSckRYtGJfz2zEyvNet8aBTFFAYdWMstTXPm2UzAXWZrTBe1Ws5ifKerKQvgpeJrwBDcoCpNosZQjh",
  "key6": "3MCtBfZu88h6RHopMx42zPV5AWnvefnmeYqBvPmdcH6gBRphCPeSVrAzHR8bDvcBWD7uCFm7zk8EmAyXUFM9aAF2",
  "key7": "5z3goDDg1vNckm74FbXSPkSVwkWrx9Hp3J7mRMKCfjAHrHPwHuKmXB17iPAkyA49FFcLDobTDb2UGh8vzceWDjFE",
  "key8": "2k6JYx2cY1vQpBp4c4VAs78sPaf64iJXEbc1GnbM67KHg1negMoLR8tPVimid3g8rqmieAUwXCjLQJoVi1Lt3QWD",
  "key9": "5MwcM4zfrmGcDR3ctfuM7ZipmUbMJxvACcYe1TNJXCWkRHkNGLZDgUEkFuxhjkbWUHkSJUYsp7xkhm2SM3HFQmiQ",
  "key10": "4w85sKW8gdmzzjDwnaUxzvxUPTroPAhC9hRGN9HrjxpFGfPGNZXtifTDXtRZiUZkm9ytTjnk8BeXZAK235A7cUbD",
  "key11": "5w5jno3q62HvTRmk1XjumJ9z5u9aMWsNrBxtcWhzMW2ZWr5YxAizViQcdZVenNhFqhr7FaMd1oaqqYjY9mo3JdiZ",
  "key12": "5bUNejndUvW2Th4KCK7UPxpAKbd9oWTvZcPDHPDNiFKHWxdyjmpAVTCifeDeoTrwnVYctVMokKqYLWGPns9Wio9S",
  "key13": "5EpomWkiZu6TcHCDpaooHmuShHnb9ETgiVbw4Fs8V5QnpdkB8dqcbioDcU1tLveaNZtpdCKCFXFJnVZa31KKdEjZ",
  "key14": "5ouLTDJg3BiLK5idu5vHX5mcL5mAurDtZoZxbuW6rEFTc372oE1MmjE9eRcSVhrWbG9Ee3nQz2NuJN6frYL7R8k7",
  "key15": "Zxv6Cy7GU8D5qiWGyvi2Nd4sUe1Q3gVwiF8b5inbZnNqFxa8F63aNT3gXDDB193kXLrQfcEsJbRA4Lh4ngyGgJb",
  "key16": "r6pZBM4NChV4YKWCZ2uHHQfv5hFecLwmDHsxUZUGm8c3B74DrhNKUMuQ7mHePL393sG9AoRXTmSP5ZGSM68nVgb",
  "key17": "21tdRXLjgJ9c1oKyRezfzf9y1dgwS42cEVirRJ8W7mihLqVbjvfrjnf7DnnqwUHKvAhL57RfvgAFCBcMUgEpV6uV",
  "key18": "65ZwyH2k8mWWqy8Sfjx1hAXJKx5pWqgChVY7Z9bwunPRhv7hb9to8YknJfBx8JGjVxwGbPbcLNwobVhVKuXWgQ4n",
  "key19": "3dpy6NmTdbb1KHXyrSkAK979J4RGyUMuEqYWDrHgojbSTupLA1ULb2QmRisUy4cTzm7J2rnaabMS7LPWtRytMTYa",
  "key20": "3Yrdyyx3cjgADDAB2QpJNHd99jwCVG4xCGAPizxUbuPma77LxbGvpmRUyhmhZH6mbyywk7tScTGgerMdadQEa6Xu",
  "key21": "2Vg85z5VYiSc8BCDx9wpdZ2cQ8M3HygoHVUkmZQrugiuAVYSPjvSi1JGqVVvyAdo6sY6p8h4GzoVnjEnbchaUHfN",
  "key22": "maLoCF8XpVg1T7oAcT2ig4qCY7o7mmikahcbCncC5wcG86wCLodCUMjhfn5jWmFNgRtt3DQ3snA64bipYQ2nmjF",
  "key23": "4g4jUp9ADionND8iAvEEyHkwygmh6WSevgFVVDsjfqRVE76opzZBAGffF4Lyi4TGs2ubivy8hXBwcNSHknNo5Btr",
  "key24": "4jsY5nmViD1b3fDmrW7PcBu1CKcixXKYtgD2rcFFX1JBQ7EpguxFw2hVyesdhXuYbKrY7DZoXbRptPktKzGm5ayY",
  "key25": "3bnfp3Dg7KLcrAtjX3SXjSzRXvzf9enmoLsgoAdhDrK11V5ixnk9ENuvzVHpmfL1J9PNHt5VtkmiLhc4EK51vWkG",
  "key26": "4fZaUGFvkRKr2g2MGDUF62LpoBFXN81QfPeTrksJ7orpSgUfDmza3h6AHaqooZvoUgFGckn341JU3ZW1kADYCApz",
  "key27": "2EnKfAVKGvTmBmUav4UqBvzE3JwmjsqqoDj5CEZGb5uTq92GLssPjUBaJHXo7HbgWbp3GnraMKsq5Xhdo7XTWAQn",
  "key28": "3G6zewhocTxHZz2yYoQDqfkWaiuwUPCXF619uqgXaqqU63smHdwLsCUFVQSXKgi9i6byTsRhj4ECHAHqpV3Rkhxf",
  "key29": "3CMdzAFPjNaNqXAypCpTXt1f1XfMvDa4W2cBjybvASR6Sk8afKCYrcyUDVYHz3isiYhnMSJW8BNUUyYznXrDYrG3",
  "key30": "5AYYEXWQhAEn12TZX4rfxQuaLff8uYgRPQjkvbPyNcqGzg8M9AsKobmR76q3jF83uQWLUkFZj4Aexv1ENER17CqD",
  "key31": "2xj16bjrSgwFGmg45K7Xp4ajYtvGDZuEcArR7TNaLXhfSsTXG7diJhvbVAkb9geGkjRFo4hbzNs89o6K76DBFYcU"
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
