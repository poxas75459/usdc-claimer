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
    "4W4p6hXghAXV4ihfVrCmj2nm7f9k2RWAbJS61fhLKC1YKNNWiVbSXXEqZ6sbhMYjaNLQDmQLcrJTFvjtj26fR2t1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ziMjAk3vcxUEhJjj2LDSqrYnpFCAXKHCdASCYkBJPmW5MYg5aKxSc2Fhdri1RBG9UXHdsQ48sH9vyX2Wq5gAGDi",
  "key1": "3tVpSb7ngBTDeGauYyEU48BbkxCvoNKEdocgT4L44p8D3jd1bDkYTPWkDfnxDoxdEJBapANuSzVNX1FViZobUQfb",
  "key2": "6RqNZYf3K7m1BPj8PrWScknShAH4da3wcx5wH1yvwPhHUagR3cvkC4f6mfr3kMjUUVEyzp1oxfSBv5QcjJCjec6",
  "key3": "oVGpLxgmgd6zwFnw9xs21fQGj2Z9L8b5gS9pVqvZz6nsApBo2PDWBF4fRssdDMgUn71d79sXrUoNCDVRaXCymb3",
  "key4": "5gvtgG1HQRH6ycqdRD39BdEq8Dj6igUe3KEhZmEzquui4aC1aesQU8J6zpaibhKbwR9fdh43NGtXRFRcVvHHuGQN",
  "key5": "4xB4qduSMEd31yCwysrbdyJL2ezPmfMHZDxuzgKyBNeZuJY6MHgWrKqvFeWj4PKrP8N7d6kf5G2geNp2GcdkfpVq",
  "key6": "51APYn7DDMPGVHrgZVjyx5pr9Mn22uMi6tT1WcLyVyeJsMHVGgWUHXgNEUA5aUwpSbr3UU5ZqhocXtxa8V6KBrgC",
  "key7": "5tJJobkGV87mty6LcxKhirLcVmx47ZsHbdPQmerc2dHjhz4i76sENbZv5VvUDSXX3ftRBnQRWBGnvy8ENKG5jduL",
  "key8": "cCYDESna7SHt3F9cHh1Wt98jJYSFFDRc9nBaKk3gFVca2jM6H3rw9KPSPQ8FAWvpipRVJMHBYkkqbQLjTyNpF2f",
  "key9": "47iygYsSb3EURWF1msLXCi6ANrjJfsk2uuawLMiNFkcCA9DC2gd7c5LJCnd91SzELRrY3Tt42GsHTs76odCcHFLW",
  "key10": "5j9F7DW4qiCsFKA6tyJndC2nPj4PNQBq4dTt66sQobmyUUTfb2vqkSrybD7xhm5M67VmtppfL3gfKjVPYoYAACuo",
  "key11": "2irQPWpuvv2G4zhTXmf5n6AmZHz93cx1ezzECezPLHR6TjCDbLU9JcJmc3yT8ZM3LrqXbkDo6uZvQxk3RxKoVYZF",
  "key12": "59ioQC7rfKq7guGH8P8LrCECSGaZmzxwGxoyKfZdaQv3rraWrc7i9xfmE4YceoinmMwWXWZY7yGSNPZPoi2pZemq",
  "key13": "5LEUKvc9Dz8cuGFGaV2JYDDzwfDTbXuvsHd668Qjb7e5aa2UbZ9yFWWxLZa7DYGGYXAKRNH6mjD7WCPbyMuAbUHt",
  "key14": "5VdCFscUhLmM2c7TLPLA6aZj97KTpQbJEKqFUKcxmAQYFHMojpzG7x6UqPvePNkmPVCYeY3zbtNYhvARfwepf7NG",
  "key15": "2WdaLcwnQ3TRRHz9nqcAFPUqNAgd3Pz95LhNeFALSpekQsZcM3xEMVt7gZM1FXD4nrJ1huJVZe8NesfmFK5QGbbc",
  "key16": "5d4Vnye2XYpovzfv5pV2uLaptQcc4AN9z3N7gbnnsA2njzRrcCobZsmUmm2T128Gkf4NbrhECuKUwczM1iAYBbK9",
  "key17": "TrYRgYtmEtHkqy7FHiJTBeGoUnCTh38cX7LthWiotMGhwdYyz713aSC5ZYMjEwk7oJiAtuhuKKDwHhrrgJCoBb8",
  "key18": "38ByrJB146tzWRZMkbxp8c1NRgYP9F12po9nznM3qHQ6uvikWnG7wfrfADNzwKktWXzJUz87dQZJNiBvG3695NyD",
  "key19": "3JFc27bpRnXDRFat1DDrLpJLBuSJrbtf3cn65ePukcxSNgNJi85zJ4HzTehPdJGKUpLh5VRr34pE4J5LfP8DJeZ2",
  "key20": "6492gvEWzHYNN699onjNBdFy7BUk47pnDPDYPKiThjEc9TARuR8gwWvi3wCMHWvWXc1tuWX6LUdrV3oAKLby283A",
  "key21": "3fruxK6Qp7SXGvQd8xXVoEZmKe7UmbHUU4ULxWq3JvKepwYGgtkHgAy1GRrbaFK6BxcDJfMVFL6q5EnVJ7euqUdg",
  "key22": "3fqY28kR4CkMaayp8hbmzYekmwwezotz8DXY5meLkYGHp5j6ao4tE3fUVLFCFJnwvCj2bLtCkudzM28YhQRo7A7N",
  "key23": "aS1u5FPxgWEoJ8spKYon7Rc93bvYanD8P23jBprioupDNqmCRqTRDez8VTZcP1dJFDqbQenUtxVYLAZnFN3iy5P",
  "key24": "2DCqTWukenTxp19FCLEGSGXrkxk9NgZmDb1QYZjKbofSWmnmLRrg9Samu2TEoCx9ns48GGYayCWCMxvK5t4RLZE2",
  "key25": "4dq9hFz6WbC67DpWBW4aTESfFc6bJv5Ez6UP4zYve9nwwPdv4LonvzyDdjnHrx9FXixHEoVAxARmRnBpuSv8225b",
  "key26": "2U9E41AJScGhTLoHxp89SSfrCDSk8GqtoDEkFj2n2djDTsT5WKGSdWTmg4ByoeEF4ejhFXmmjR5ZNqpx8xBf9Zm2",
  "key27": "o4aMP52qF2ei25tjLCWZDm81kNuFaJuVVjYcXSAsL2oigAwrZMX7cksDWJ8bM2cU9L8D7bc2ZGVnM2SfWQb2F1t",
  "key28": "3XhxaBfUr3MWyGewDukhB4zChcZTippRujfTcmVQf3Vn5BYFVpB5RRG5tW8CgPd8j8Ti8Vnw59tBvGdHkm4xx4Bz",
  "key29": "eZi8sKtnbg3p4AdvYfcuawXxgYDnCdUiSopzNmXx9vwgzivNkBc3vCW3HQh1C9mp4sCNdfYZrmrSWxDghN3wZXp",
  "key30": "DFUKWNrg5hfAMKML6n5f2rnGofyVjFqeaAxfgbAv65LnCDKzuwjSQZK3vay3WyL7SLK4ESWwWPR4rwmEWZvWPTe",
  "key31": "3h165fAm1hgSXMgC84oT3ttSvy5A18hYi4Qvx26EJ9CXii3TKdvzJp8q6epkcL9QvdiGG43h2obbNgoT3tBPJh7H",
  "key32": "5yDLuMMX4Mvnn3oC4R6xhKrYe8Az2k5fwQYiWxAHwQSmpqjqihsmBb4PiqGZ2akMjzNHeCK2y1Dn72jAJSMHsWvy",
  "key33": "4VY9aLDd7asK2fwNXbcL84usqJ2EGERD8JQyFQSYsgbA7ZMZK1WAHCNC3tyzVxSdFgCSErhqeQUwp3vm9zuyLmur",
  "key34": "2kvMxdRAbDrPx1phgg8zAb2WkRu3wRSQAHDif289mEr781HcydoeZHM7gHqEmcr938vWGf6tkKo4Uv5eZTKCd5uZ",
  "key35": "44TBPmMJtuxAsP5rKywFoigTUG4axVLSUJiyR1LfN9zudmpwtS5B8e5A8gY5YRsyBVryaejvcHi8K7fXDHeewrrJ"
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
