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
    "3vmWCc6mcTR3X8jShQ74o3TbKGNjWBMPM9F9qmCTVevXGJYENzNcv2Azfzf3aqTaxiokF9e47wBN3hUQ3C5SSF7d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rMc8PRkJrHCRrRx1vpVacvA5HnnmxFxM2GAyKHdZMkN62trSPMSLQMRRduB44ujKFrCgeKM9R7QCTZiqckhkyLv",
  "key1": "3ApjWgKjTZQvQFSbPgg8WLRNnu5SHJvooHXbjAztNxTBPCDStjDsniiCj9g5qWAPXP17XujB9bJrgxscNFHJsdeu",
  "key2": "3cSkafSSpXrmwAWzF9NfjdPekxCSVtmySNY6gFahyFFhsyKWYULdJDWtbfYmarCcxtcWvAP72dBR9wcXP8HM5gFF",
  "key3": "2n7EYvukVGsgqp5aoP1fE8EynUg9pimpdF4C8AkGLKfR8zmh8iUDfbCrNi4FqAWKG4PE2Jtgh6HEwWh6YwSvT8Uq",
  "key4": "hV3YAkjotsPPzK5DScEouBfr3cmuErA2Zxwz4EQch881nR9XHz1PeSeaWtni4tZ12teBzfqXjo4CUDyywcKRX22",
  "key5": "23g32c8r1XkYTcie9QqdzMocM88GM9weKsTFAe9BNRSRGJ6x7ezYJVRADQrmQkT7ARCa2FzMF3sSgGNFULBx3cBp",
  "key6": "5oYzTbEG3FZLKPdcUh6sqDnD7HtcdQESvZ8BwMSAzjGWGFyggq6cxwySZBCpD96gknJru2i7DzgdUixQEkX3ck4K",
  "key7": "59JVhAfrnAUhoELdj5s3Rdq8mYqNLwSgdP7gQRpxYHnCQkQdU5zinVDr82DZ8ubkiBac2nBAkG87qJtFXXbT1uD1",
  "key8": "43JoNq2YTkz2EsSv3bBN1w9pafjXUfcCR7QBrBTPQkMYUYdrUmyXvSEpFu85PSrMXxH6inhqrz52g5NXWhLxjoAN",
  "key9": "3P7ADs2mof5s5QNUFZmB7kfG33yJQewrSLUNPMNFeF3MAGtH7bBQPAw8nv8z8T9dgbGdradexkGdgsSXPnKEj2jR",
  "key10": "5DbTAWdUPSLavwLdG7EoaCoz51Sqe6xKJMyVV1ZH5VMJksVGXyfooPfy2CbBC5ttqTTejN34DSjCBKKtHy6kzkXZ",
  "key11": "3jmLXdbx9sDkpfWXb9b3WdceM8dCaxjg6bByRMaX4y9UnJWzgwPkjQSToM9TQyLjeV82J9GH5JCtT3rJCP4qKonj",
  "key12": "4gc37sTtByfDnQbsnwwTimjKr89vj1UABq7o2QgfWNGEvYG6fbcWtbfRkxaGheWaecmuHszSTGU9GKKExSFAeaju",
  "key13": "4WhFnaXFZDBhWjGN8Tr1sB431u8y9FPwBiUBzQjUgC8nRECwdEK6vNsdaTYX2NFXsezXSsoYbv9MmkWqZVj6DgZu",
  "key14": "5f2aD46j1oi3eeEe29HNpK2ts9UWiYFAVE7c24fKVY5haDRgC12iFEm2yovqoqHbQ9iBbvoc4QxB8hmod1pfLXVF",
  "key15": "4HpiFLjk9um2V5tZWR89KuWqCqz6RJsUw8rc864yotcNrtWKqQUKcYU7cBRXHKgR1pwEcD6go8NNEaKuyxSWUsW2",
  "key16": "4LNaibPiUZLWVjSxy6XXiWwYEmgQJNrRYjyke1Y2NP9LygtsfXTXXkkMMkHJkfjrkWM52qhMK9JV2o9dpzZuMvsg",
  "key17": "2WjGHUhYxDBZVV69jk61nz6hpGufLLjKycgPBJNBHJxNsTmqVKuCpMA2WHQq3DiNG8mB4uGaKi5tMkDZwEMisqGS",
  "key18": "5p6yZ1ndS2pFgtnonPNGSRDio7kzGb7Ro1vAA522qfutUE3iZ5ewX4dM2cLDqPtrNdqQjL6jZjPc2FgEKwKXrvdh",
  "key19": "MdNvDZTWqnbQ53Er4C1amVewxJWLscUUsfytNrqAgaPGfkTPMdToNdzUG4jDn4MR8Y9obrq3kWUoGNn7qB7yb85",
  "key20": "5rZemthbi5bsGL4fpMATYjhTi8CVkFWsjVNmmXgcBr9nMGUXzeYtTwvMkkwryS73ejzhP4XDEhrCwmfWRsZ6jLpE",
  "key21": "5P6MGVTmFfCVUZcHRFyYX813LTMUyALawpDYqKLhtDfYRqf5EWdmUY4K29Jg1foLuVM539mAk5ftexF6nG3DtMrp",
  "key22": "3ViqLcxrDAZ2PFzqLmZyGnRVXErqCo32Y9TGgdMeCeWHXyFPDymwSxGXnwFdZy1HbxHNmRpKNdWknShSoFQ93Spq",
  "key23": "2ZodkAtRsESFCPuAeyLcgp9mSfZgVRVVVQfto62VdjfoNoAtest76Y8m7CTZYzya7CkZ9pYvwsbU1CFUfkBV3NTa",
  "key24": "5oetBHPzzZ5BZcgKFMqZwi4KcVctg1pY7Fh85477WHw3xWpchy2zqjyYSLK6t5xsHmR4AU7SUNiXGCsCm8AQvqzh",
  "key25": "XSBySLVnVo888eTwHoJ54dgtKthj4tY4NUnEn9Tiswz8nxnj7yUx1ucbftFzAFxCqdNL3s2vSkxVehxNyPrkUfa",
  "key26": "3Ko1kZxLM7qWULy58UQkozRmJhHJns4cetcrUSsDTd2grio2PTtruaMn6YdDLZbJpz8tAWEqhQVUQ2z6LemEeis3",
  "key27": "49irw5qU2w9Fa2LKpc8xv1UqQiB1XBmQJ8ast6YFDKF3aeeUz6jb1sG4c5SuE7vmN55VpWbafVBmwvfv4Q21h8GR",
  "key28": "2eNzN96kxQb9zDzJJkYzhKkDRkfemFUR16DqYkXn1K8xvGfvpZSYBzttNVFnGPMHdswEEj3yNzWeAYMJLa6aJwnr"
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
