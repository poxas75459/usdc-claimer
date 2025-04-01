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
    "2s2BAdn93ibSmMp2Bj6BBywxTZLg44GeiCeQU15pmVRtF6Bqt1yKqZrK58RdupirAx5vJDMM5NFZTfFr6tA95ELg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dNYCCXvY6beEo1cDRhBgLk1QPqUtMNDxeXC4JL8tEH8hZHYZfqcvkfnPb55joq3JX4AKJDXkp8nYXrydh4Fo9XE",
  "key1": "4f2e3MJ7Uja7Sx2P6GM4G7eXnXTJBFdFcv675CJGVyD6BpKy7k5BH4Ly7uQQK1seZXVKbh2MG2FTims7enHmc4d5",
  "key2": "2VuoaJx1B2RLGLiDb7WpoADbdJ4XT3UdaofC5i8WUqBY1WuLV5iKLbs1wzPNPpV8uurkHhBsHQNjHG8sSkZn8Hod",
  "key3": "3n4by15xJmSqHQG4dPTh4xbKUVrhcNkEV6kXahhEB4BQGX6tEBUX8w1uTFAeVnuy9YxNmLAWpUaoT45hitF7vMMP",
  "key4": "2qPRGiwBuVA3Fu7gRKnzfxZev6p3FQCso4q3QXgHNCFw8sd2z7U2dymnYJfd5cP23Ri6Pg9aCrc4dpgWNRwFzdvi",
  "key5": "2rr1gESEjXrHKpDDKiss7jtSU8uHdbB8gGAXeZhoBzR9TWN6g9es7LDStv74YKQi2gEo26h8cMuvEDecxBdPgyCw",
  "key6": "4cmTYAL4RxET5oRL3We4xXf9g59gcgGpCooira4t3x84zjt7dZHVM5JYe5USU8ikeeMmjYwXd86uqmbVXM2g1hon",
  "key7": "5P95cTACfx7MbNw2YFEnvepwCeKp81419h7fZmMH4gxTTvhmyDQ8jdL4jTZpcxBMddWb8oW5ySdi5y6Mo9reE4Y6",
  "key8": "VV6YhJXK6Nk475mnrU3AKAoeWbr8f6pRGvf4dwmLEL8pw99W4QhC5Xk96C61XSkxBpktmGYa13Map93qYgGdGdp",
  "key9": "4KVgg1Fep7UvC8imdgZYZTuqRNJCfpKokyyRHsb7joPfdXyJUSY7RTCVvCuMQcGk7VeLcMbatQbgHwYwSyn6ZNh2",
  "key10": "2LEQavybghDbcnV8sniR4bjNAVVMVekpBKBkAczwuanwNcBjmXLawu2eiFp3NytAKTuk9KVX7q6VdCxF4NMi1Voe",
  "key11": "uxv4Gny1jPB9pYVTEMzV252Rfv4DefduKTkdgXP9CukfZQTpffBZVja8R5JqFR3y2vAX6LGEci8fyrKqSgkXwb8",
  "key12": "32QRkAjqQzyU9URiESvFf6LP9gYUa3APofbfxW21fcP7N8yDZrEaKHUCYKqGFXFmSy3JJJcjxjsnvdJD321FtYD9",
  "key13": "2v3Ew3sLbNrty4TXFk31sMoE1DLSf5Nr39ns8n5PAXb5bNqKm2VwttNBkeW3nQWK5P8RWXPa8mZAryvxxwHPVyFp",
  "key14": "Z3itWx6DPf9v1GmoETDLqXWeWb2iqpG18RYMNGweWYxDxxbEKBHDMwjw3UohrQ12XArd69dqsiccddDfMQBZJ7u",
  "key15": "2eHztAK55PFZWYuk6jmjRC3d9Lb4SPza7WSDDhG9ThsGvKZbb58cZbZxHuZiCtoBBTLVCJpdsw259XQRMiAGL2Nr",
  "key16": "3AsQZcapkDvoGFnn9MZLy2CRxxSeUs7wb2U5nVSuquFeSyCAqCjncsBq5sx75Yq5XmhCo4b8gRJdKVH4JGHWG45i",
  "key17": "5toEdjDimAfyncEqjZcPEuu1NWh9HjSUqiJk8AXfunajqgAAQvJoec6URXDujpkstm6ZUzNn6cpeeEyZQHY98xxd",
  "key18": "5aeaxbwS1CjACqqBiJbQ6dk5yGpxbcVP1qSNn6HcGtD2HkotQJ28mRP7r3GdjuPmcweQx3fqte8xtSuCsAGWr97r",
  "key19": "B5fe9x7ppJYKy14rPvu3D2jVXmTZyXruGLEJhxKakMTYv2N979GcdHEB9Mf1p818swRvVkoKKTpdm6zyUjkqNCT",
  "key20": "Djcgv9RVEQz5quVcUrWmS8RioFX28toCJkvxVHo5MrXE9vYgQKjD2R4iHgtNa7o5GLQjxSHZzFrdpPFD7wKy3BN",
  "key21": "51EMQxG4foXsFodgG4vZ1CZdmiiib1JS6G7S4n9AHd2W3y229tSTTeWnfQsKpbeMujCqwtgnf8FWaAE1CBp48cKN",
  "key22": "5dYBwc2t9NaTZLxR4PuVGFaRuWneRoQyjWX8uuiFLeCfdDtd2TwHoRKkhp2DjGSxxzDTNUnthCgKrnC13kFEPwhi",
  "key23": "3vUVoSyBqQg6tjsUnUirpt4fceBA8jDzsGsnoSFQzPAintRv5ZsgBdggtnXFJ9Mz61DwekBvSmwmbnbWQ7cbkG91",
  "key24": "4XhXLXrNqwzqeYympCknu1eo6sPgGp3Wv1nG7MdmfsQ9SDhFXtpRbNLFVaFGishFxk1ZdNzCMGeB7ziCpcbT3Qy2",
  "key25": "3cXrL6YmPL2EdKmSLzH8yEBysfTeVd4aybwanuaA8n7k3srSCDRmhACSXdnWg38M4r76hJXsvhJ2oYnhiMj8Jb41",
  "key26": "5PyM4azqYTaVayDseJrTGnFtygkQj7tPWuJcTS82cySAVPFKpWEHKL6tZCKvMjpnLBtRY1VRJQfX2geU67gnBKAQ",
  "key27": "3vzRoQbb8ZB99WJyCW5ew59tCCvYokjASXVo4wdeGBZCifc5xbCxYoQHPrsnsqyt7qUmygrjWd9qNtYnSN3AmEY2",
  "key28": "dWfeQBscMqfJrGRCe9bkCDsZsXqHBmw4qGxB369wFHcw6r18JQZLw2fygVyFyY8KFBfJ8NUuFc8YKgBRAXpCRNy",
  "key29": "3CMwZ6oH8PAWamkFSdHEQiD9EbP72Qz34oFezsc7ypQs7FSj8UAN8SaEpYyMVfy5ZyDmrvDWGp1LQqr974rkRSWg",
  "key30": "4sNRuFKKcGbnrg7E2dz5gZ1zWdYKrBt5WdfLVKtAmLYVGj29fQvbmUzhbiqoKFpCNtyYEhXQ2sgDEW2GnCAyMWyd",
  "key31": "3zduaBnQqwQTk1vmtTZeM4mzLnw1nWc7H27rakn89gHxQmg5hX7JKBxTmcqT51MUFq5AMRNAUYkoQnTNne6Drhs9"
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
