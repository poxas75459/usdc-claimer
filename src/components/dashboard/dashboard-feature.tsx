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
    "5EzGJiUHSRdf3E7jv7MoY94YVWrgSWFWwAt5pPe67z45NupQXFx7P1jy7EaLgxQifGhGYh2H4UUWMVHkph3wSXMq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zYMLUzDzUXtroV3tt58Jx5Y3JxFPxHahpkAbRN2FTooUgvRAmg19ekkn4QRkgti2z5z8GFC2tfhAZprNbpCNh95",
  "key1": "3eR4NHB2bXxYcFm8UH475W1huj6iMit7UAnBD9FRgPXzufbkmuDww9L9p8L1XW3pDo4xabNntW3t8JFib7FZBafD",
  "key2": "52CL4uZ7n5oorNSaW3opst27seHCMnwAnPGLiw75L4qxvwLmLyPpYcm7SS9hKu8dLs7VzSWdAP8Evcxpaur2zzmd",
  "key3": "44nfRyckDNagMh84VLuGrKk78ctN2EYDvMY5mxt3xUCd2aMf9hXXYEmkExe91aVjhg5tfUttbfpMi3aEKChs22Zy",
  "key4": "3EURJRVY9LkcrCcCeZk6DACQB4osK43oqdrBcRrVMHgdr2FwoKM2TEGUBN1X6ndLp6kh7LEVBPdrKsHPjQSJdvQM",
  "key5": "WSTgoRyQPS5idTrJHCfiirPnf31e1pkUEagYzXxGz9V8v416Re5bPPPBLku8YZBiCesSi4GEuqmdU4jadjuAozH",
  "key6": "4EGNH58VCEeFb4VbDkfBSiREapA4zDuSzesfihb72sryN3iFF7LkyBh3YKAFcKDdE5TJmWUr3uE8aCr8WvHH9QEQ",
  "key7": "2McvoAAyG2JFfRi5wcdjfjaBX1mGz5vVtbcbUWgWJbwJ6WnodwDXPjYuZHpA6K1JUKh6iDkax4JaMZdhGYmFkcTw",
  "key8": "4jr9QuxLswcT78fBm3Zue5v6tKmauM2sQng6JfM3vbrZ2m2t6xfgF7QCteqg7UQM7NrTJszX5XVMXM64bjg3WeQR",
  "key9": "5ZNNxVA6eGz77ux4heKY6A1eLAXETKTyZLEaCVQBfw4euq2DiDVBvFrraxrZzcNZgtCFd6TBAxYtcmubduAa7NAh",
  "key10": "41gKWmBcZkPC97Re1JBBsjP5w9kwNT2L82uf9zfrTQTD1AtBUpycRSKHFzziUKixvob4hSadYTsp1HxbYJfe2nfN",
  "key11": "2LSUe68NqFNkrwGoSJ87RwLTbC52pKZgv2xZdWCszpapkv1VKYSzFnVTNAim9s3RSPT8wC8CfEp65mcGYSjSgbpG",
  "key12": "2ciRMhi4BrTQAv9rc94VtWZFDRHvSpZwDipfLGuBQiscqTPPnfzrgixDVEhfb5KTaTjx6pTjd7kyHnayXcXajkbq",
  "key13": "jFVDVr7DSdzixxmFUUK4nTyp32RNmdAoW6Y4oDk7LT7RpvJ3i7dSaoatPA16CvRRcnHVymrje3wZ5JDmvZFgGYu",
  "key14": "61zVpHad9fysTjTwBhaEffdeSciUFgRU31scBKu7NXdAuu38yYfviSUtZjc4mbhXH6SNdU1WbVA3u3tmmpZ78MNt",
  "key15": "3uspw4aCqss7cMCAnHU23ffPgMakxaVWsgrdzHhKKv5bGJ7eT4jRFT6utck2q2nusuuzyyvxe62hkmzvdtEBoMui",
  "key16": "4yAxbWKaNWyjDmaFNE8ApTjopgwHBkD19qyYonh2C6M8MRjNJqqToooozRh2hi2tsiXQ2XLm9VcHxKvkZftTGJQq",
  "key17": "tWXfGXaxUuU4NYS9VV3dG3kYhpsxSFusdDrfVQPC9Ktbcho9YqwFXFG8oXdmEmireE6aSjdJVfFxbcR3LUQyk69",
  "key18": "t2KewCYFizx1dRvPo9jPChLDvt7F6w8hDADdXCkRPLKSb2NWoBwiyrJseZNEtEPkRioi8ct59SN5wQiNy1LorvM",
  "key19": "5GPeT4QxUG5FP2hLayJ7ihAfFUrojVNcpstxc9n8HPSeKUSgUiBxvUKHHRNTeoSvbKuLD5xVUQzt93zY35NPRkTH",
  "key20": "6YyHTxfvnDGCabXqdxTDVZ1j8FGPQXw2P2JuTwoZyjhB4T9RaRmSbAvPq4NTz4MHFgbH7rqe9a1dNywnEjPgtoK",
  "key21": "4HkDs4p3WzkwAGeLA2EbPCUebZkXUrsoK5NccBFyW72iBVrxJQPNgHbHaZPyAamXSUA5qeNEFLVLwJHdtYdkEzQY",
  "key22": "qPDG1d9PzH4pFeDMTY7viqS1LvhUErc33shAaoBQuQ4RpuL2FtujZnB7LndhtK1AREF7PBqLPMFTBVy2SVyvZMT",
  "key23": "3jwdm2CX46Vd4iUfoXy7AT7GexpF3wVJk2F4SgmBuG2FY9VY7CXBEVUfoqLviTKsvY1s6xp6GAZB247c34icy6LB",
  "key24": "46SUqqQxZBvhxXKUkzg9igbz1YTCq7tKLnLWv4smnHoWC6UGDBq1WuaUBfXKJci5ceJMCeJELTNXwhdvEMiEPQfE",
  "key25": "4m6t8YJNgof6rfqnBEi2d5i1wpa7s2ACBaaawcnyuP5e1PHzP9bwSTGRfQ6tSGmMHx32C9mMEZZWZ4u5nMUbmqkt",
  "key26": "ufAczfQLyYq9YXuMQv2EPM4gPFeVP8o7giK4uQqjqpeBZWkKStTLeBeZvwxvY922FcpTK735bN2uMDCDj7c27da",
  "key27": "2ViqiNpLQX4kJxdBkmHfxRxRsx2GWbvzeVyLuQArV4gts25DfBB4JjEUp6RQCqBTcrzeD73xGqsEyPDup44WffLS",
  "key28": "4aByfxKtAATbMHPLBvoBeaKdBVTZPJPzuoAoG4pWF6rbpaVDk5HbLTHq6FdroeqvxX2b8Tm4VyLtAzRUqCKiM7ij",
  "key29": "3dGbbMcRuomjNovespFfWdiDpLu7zH6pVa37d7w237roqLbp8PQbGq27sQwD7fmyaSiZtU85hKsFhcKNLDuAeSLm",
  "key30": "2dAs2rSDm9uh3aJSE7mVfdQBppkkkB6gXqBBaGLnpQfHaN8pf1bCgv3wp9hP7WWVuRLxUaM2HxHouvDeGLbaM8Ee"
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
