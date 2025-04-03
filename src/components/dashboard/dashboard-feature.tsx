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
    "5MrEKYyTeU59VcKrk6g2c1BZ4L8YfwuNJSUPvHCpJKr3HN6o1r4BUHQB1hFDPNXYB2bSSwq5LYaxBWgJtCeJrTRc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fUV94FASYujoDn8sFdee7tBKGApjr6wsEhqPbiDRHEoPRc4KdMEbHPaC9Hc6WtoJ3QgmbD27Bp9JCX7v28quYZh",
  "key1": "4NgsCuyTMEtDhnVLmpJK2Zo7Yyqn9KtnJsv3vZFtHaWfbfe29FZDoew76MGfBZDxY8DjR5ynXQ5f7HrK9ThCRUh5",
  "key2": "4m2oNjGLvw22MDDjLcRggDh7L1rm5PRYW1X4GnxMevikAJdDkdQVmuL5nGkRiiSQB8EbcEFUL4cm71crYdEaCFNA",
  "key3": "3paoCXx3HmJufRa586UMdDQ4otaUovhxMfwMQC3VXRGe1G6eWCqYWuK5uy8oNsHkWH7VCbkP1Xsg4od2rjV5HfGB",
  "key4": "3TJSkBbcxDgVSw314DfbQgXqKKKad27D9EKbu8nhP3faT6q2go1qiWMEZRfcNDvSu9ZLn3WxnVt2eF6eGLnVmMgz",
  "key5": "4WrBNM9pqboyu91UwtjPo5rMcdnC1cZHoiy5ebcru3YnrYmrn49ozdoTCEzA7QL5zweBZFKkMkCMn61QDdu2rqPa",
  "key6": "4Ct7iwdP7h2AxfFJ2QWsUJSB3YTxA6YchYamnj6NSEWmUEPyy2CWY87kJNfbKJMJuqNQwxUXT4kNCVHFwqxRLC9D",
  "key7": "31Sk1Pf9tdzRKmXdHEMg3RjMCvHyUoGkqQgQTDDCFFzAiKo4496sFBrfyaC5mNCdTq2EKCvdsQ7rWVPH9c4jivYh",
  "key8": "3NqVnHipahbj2FScyzV67yTaiC3w1gS7gTvyWMnoRvgrdmqjnGUgp76p1RxDEW71DjRdWBfHC6mYaQjPo6gEXqP9",
  "key9": "4bVZz3nWJyDNqAUyErBiPjoNh2ZCuK41DnP8icAdKfqAujoZvifTKoVSjEpDYwty1Z2CPVk5j8mUD9LRNJZtvL1P",
  "key10": "2qZV5RsdnnqaBP5c8xuRwA7atdWBXuGWz63V5PhAfPPDbt3LcLQbyaCdmz5mCJbPvhfDY5rep7HEFnDiBKQ9XriD",
  "key11": "4BgtXwMCChYskbAfdpbFhR28RrLpxMdR2KfQUiFR47RrMF9FqjQyBkGp9tEt3XKkHUxhv5eeA2yTK91rr3uHi9nA",
  "key12": "59jgrVKL8zw8yArKMZwatGdsLxuCPUecZq16xjs55cXQLifEseAW988J2ir47W2BFouZM8Q2PxdZpKLZAsHGNVbv",
  "key13": "3V6o9gXs9RfkAQ1wAXk2mhVTPcCnpCDTo3m56zPr65S2kWzHPZRqDpgxNZh9nHHQKD6tFYPMybqr4e16VANzmPip",
  "key14": "3kT4Y36PEHfS5KzNDTS4fHMh5P4oQFSowcRdvaevogVBbwiPEfycipNfi9tdUz2Bdjs1hSnBbHXMWqoVbzxWrG72",
  "key15": "2nunH9EFrdFGk1yYEnLvDGpefTTbbRC7ZBpzcY8z6ybLPyz7k4m5Kwzj4smB3trhTmGtWect7cWZETm36xDUmREs",
  "key16": "2H6LTeGQSzo3M2vmR6Fg7HUj9uBtxVEUnUuo9CYtUA8PQftrdXouWx2mSmnYAphx9Xjr57dRyEB2Htap8r6kJBQ3",
  "key17": "eKHpBCkqt3xEbcJpNQBQPr2G6KzXCBMdTX9wrJQ55z9T3mVZnFkDowa92xavKvsW8K5dXQGLgYWqJwu6F3NKuCJ",
  "key18": "3Ag4i9oeAvmMMMZjwKYcT39ydso3BCYfcVDEvgUpyGCwLmNnDR4WxKeTA5Tg2w7GyAJjpyNGSWwZhR3MZZTKhFu5",
  "key19": "2Dm7vjGwshQCx9BKR2eobsXvYdeKjboQYrpWXM6g5XX5sNnfrk2XbVziTMF5k1qbk1HBwMq6nbbdrEeDTb8qmprT",
  "key20": "HwhgYXXqKaMRk8BZfXF7edC6qGUD52pkoJEGp2LDYfvBSKi9doRJWAzkTGgViHTeGz1zt5gaEWPpMNgg7fgUDGJ",
  "key21": "PedDDXaHidaLcJtZUYKn1BeTWEbqnkisxDaPB7yhUyMPbaZMQLS1KjsmraNQaqUZcRh4sZZCuHuezAWY4w1eCSk",
  "key22": "4QgeioW9pLLqxxVGh4v9Gs56LFYpRoYUAZP4agyH2wmdWk9HFQ6VQsDQtH1eqXeSqqRygadFGDwer8f9MQedvcWD",
  "key23": "3kDiHHStR7KF1h8w3nNJrGC8SqqsfsPqyYTmgf2ePzhkC5qu6unm1TjQV94yNvX33vx395VYu6jd22EM2tFxJfbu",
  "key24": "4Gjb4DpqXBdrRzFNKqDmDhW7UN9QxTgeSJFWK6mFn6XFgJG4yPqNG8CVZshnJNPaMeGiUAuZxSxSbpPy3vyq5RCN",
  "key25": "2UudMEh23pp3Z6jEA3VKdPUtiyQszfnStoPr4pk9SrQhcwXP26XMBbeBxPDbyEfiMb4qjrpq4m9yTbLSQbWVdHzB",
  "key26": "43aLALPySwJuyCyHx7hCHY7swTzcRMAASmXLGnYYBk8EQsXYodKPrR2y7HkR9ABrkM1Z9LkZZNHGtv4qfndno5Cv",
  "key27": "5gHCyd3xULua7cjSHbzHNSfCjX8K2GY2cyDBCcAedesCEzSrYHJj5NCHrczHxiipymgkDe81vdPH5Sjfb2iiVLQx"
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
