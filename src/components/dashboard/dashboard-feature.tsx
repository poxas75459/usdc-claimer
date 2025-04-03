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
    "35vAeepFAq5eTz5iwXRqRr8US72ANruGjaW8SrV9cknY3dG7ru49cSGCv2YiMJo4TonrF4mnYmP7Fir4p3DzFV42"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5izKb993Gp9QLaBGkSvNuHFWzwHgzRrkmsC4viryQLj5pCLDwNCQ3GdP64S51VFFe549CNYEtJgUvFHBPxNYdYcz",
  "key1": "2REvRp5QCju5srr2JjQKQJfEJfRePb81sSFVrbbHKBMusLjQS8FQUd4hkUWgDs1nNRHBiacZEAQSVmT63Nxht9nD",
  "key2": "4VUci1h7x8oPcYDkrzRM9ktHDjhU2kWq8k4irJ2FCmo3yUvD7ibjyXMrhbH2aifvA1zQ7AfzwfRMWyZxRJTHJBx8",
  "key3": "3PLYiJ1gVovngShvV7vRqKXEAVkYe5RTmkzZHri3ChDPNDX5Kj5yXWtpZRq83B23pUhNdb5mTVEqovEEFMxzLrtX",
  "key4": "4yAZT8huXxfKx33cnuwqfsfBnLTa4rnfNBRJPYNNJo2gw25RqRcbjygJjwpAgo4EPCM5mQT7hbpVDBfxGy4HB6D7",
  "key5": "m3b4S7vJe1cR2PrmjtK97PCv12ATrULukCtXMeEP1WRHDhdnnrJfP7JJmyRTNKB4oYjjhdajjbxioyVay533B7B",
  "key6": "LWdoctYDJerY6dU9GBUPR38PWguAShoP7TehBpQaCpyWPRC31e9Ro61UotnCKjRpsWT4F5HcwmC27gunGrn4Z7b",
  "key7": "5V4dZHvunHUsoKDRbK8vSPq1kT7icj79kCrJhyAzU3cx3Egf4JygGVx2v3hYKi778wBkPVBkCKj7dZ3KU1ecB5wG",
  "key8": "27uhCxRtRnpQNCmEqb6Kg55vKfTqyCpMQt8LiV8datkUVZabmL6ftjs8rqsgh85RCovsoSWJHNSKPZovjyv5kxSV",
  "key9": "fzB4tJr7MsZZp4qpf2L1381H39oeaLiW5oZuVYTiLd1rf8eB4oUeXmHGcwfFR68Z2cm8Hjid365f3tvagBEYzKn",
  "key10": "RQ5wbfR7TW7DGvhLvThpB84Xs9x9YnwULctmaFM3axWCcYeBTxxQMdT691mzx4unCMGfx7m17PHKYJcPEdsnR2R",
  "key11": "2W7mn4LFWqSgQcUKM2W86UdQrDGbL72uFJ4p8ZUnWxCsbdNBgEvEivcipM8L6a36SEFXC8cXwULsGvY6ddBPWa3V",
  "key12": "5payWnFEY2USjMtnfv1ciHvoJs9NVX1ceS3VxoaSFbi6xJSki6mypecNmQUHK4seeTYZr784FVV7jDDptGrPxRe5",
  "key13": "2VQkTxtvqEtNiEY8SYGejSBjZUHwfkPLSgE4qUFqg9hMvz4Ve7VnupS7T1RG3tNFFpWN5WBGEvmS491ALCcaY133",
  "key14": "AaPC2BaNYps94RqoVfngouKXSFFhRNmk7KefzdrN4NiT9o6HEDA9c9iNsvNtVk72aK7ZuVnTT1YSATvka21nE4y",
  "key15": "5b4a6bGVs3mk4DE2o4MuC379gqnr5TGheq6s6CPdtigUNvjokBkVa51FztsVDZvTqDk9PTqqWDgP2nVEuCshxu9o",
  "key16": "5U8YkpRFhsGpeSSYjDFxPyT6TKQESFVXecWBmsqvre8DDgjRUdkNWUSehms9t8pTxp3oqfq5YhQyGBTQqtrLkTXq",
  "key17": "3MVkLdEKTsX6c2L813CPJZUKuBE7XzWKfeEbTQY82WEEx9RzsKA5QLv5tVBhdaFJDyeikHhP5k8risa1j8jPEgYY",
  "key18": "jMLod8HGxKFigCmzxjJgKS6WPqS3fDy3C4Gnzdh5KZWnZkZCJm2Mfr4ipDS1TP5HWXfpxj2ESP4Jk994sQPV4Hb",
  "key19": "62sCbTJwH8gUzRf2JPxfgHz4o6rEZGSKNwhdamtMnXJbJWCdNuXt1Tu5bEavduC4efU2cgp9odd48dHhbQz3kidp",
  "key20": "4J9snojJPa7GPajxMDytPxEUc15q4d3jwUZNbv5gqHazpvfGnqeoja4uUcgAWAtiEKP7wtLZsW4MhsmbnFPwApNE",
  "key21": "yxNZvtVKbfAhvcD4aytqbfLYzSt6LdfQHxLou8HQ5tUCdkgCTb3TdcCsAjewMCiEddMkdKXVo1btSRSKUvETtBi",
  "key22": "5JzsuQTULEAkfgSLiQ4uKpjj8pqAi8HZv8ctn7u7B1sJZVA6DKoyfbm2UGw9qFDeXpXrTMH5eHfZutsFJ5DYsWBt",
  "key23": "5Cj9apnRX213uZmcL8LSAfQcV2cYuzQSA9AJaMDwP5yzsAQ2g31YtxZ5hSKqPdXUUF9vgrUeYxxQk5zfeXZcejJJ",
  "key24": "3vnmyFBzoXmSYPgDKgFGa48NFGKjx4Hudoqf7CgVt6uJJfDN9odTZt6ZudoBiQFvnJ3h44cAxktKJjJoYMQ9Mov1",
  "key25": "3s2hyQQhZA267JRqPVFucZTpu9RoYscwUEz3LNxorpJiipzDy9hCBvUhQVfp68oZC7fVygj3Y7Cc543dVvhy4RSq",
  "key26": "4AWBmQU3FjU3xUN8WmJhy5qMA1EiBvXQvyU7KeL2MEA7pje42SvZcf6nd56TNVmVz7GKAfGUfuUabB62Axtt8vi4",
  "key27": "vXjiqwj6HWUnL1KN43FznWiEC61awVBVtjVWfH99kYUY7ai4w5ScKvLhw3H4p15FXTFrB14XWfR5fcmjh71G78U",
  "key28": "nzJGWiAzv1nHFq7AuPCfUmf5tRnJtJiExYMPDfovAZTJYGTDvx2EZyB1eNq2JRZVjd2qEBRS7CsgnFVJJabtJWr",
  "key29": "4uUKxECRCfiG5V2yKixTmydE46ajPGoAcpSE8M16cDKPHavxxgucX622NTJhcPR1nQ72XJhAx3q867bd116sEss5",
  "key30": "5apWPjnkUKc26NkmTipbp5PVVV98y4E9ur9yBwZBiN8RC9z4nMY968bfGYVED5T55QZBk9uA2rbdWQQQUwUKyvoo",
  "key31": "3kGrQprhUiMLtwdLLfeTCkEiGStPso6u3VbXg6TWbpfyXACweZE4wbVezYWxUDvEKfWuskk8nPeUuYYhrzuxtpfQ",
  "key32": "5sGzT6z55918yDPSGaEsFbWoSktDFvu36MXXzTxSQQzrwSSFUwjZcUGCbM1Fcs9de8jJyb8TK61Asd5gC9c44kP5",
  "key33": "5iG8sGj8n4Ebvsj2jT3nuSKHWNu6VYfAvBBGcHikPXYzZZMtiUsaxU9pfFLhrXbQkQr4QNxkRHZxHVN4LzttdnM5",
  "key34": "LTorcDTnk8Gxj61DhxrVsKVDyFYDvmjGxo6RK8xBAyoAaHuFzuyG7Ezdkjj13J6un9UoCwVHFMeaG3wV65e4cpQ",
  "key35": "5GTrvL3A7GmFRHCoR69PACLN4vu2qebvVAWB6N8waynvhQfPUuKupPNBLaUcnbYPvtFictrjKbipnAq6fjBgrYfy",
  "key36": "5Ce5z6Q5WMyNCNMHsgDXxzsZmKok19dmFaP9t6su8sNZFasYrDDYfVQTNXDwndohuy3GMjCZWBBkS7wcrYR6Up2Z",
  "key37": "5vKGRbxGX2ET7SWczLyNwcgVSecYAuwjEANawJh7c6DiBYbAQK2x8g7HYLgWthqLiDu8dfZHxrmQUvE4rmUzypDd",
  "key38": "3Vo853qYCT6dLALKo4rXDd6wv5SmYCYk9KkyZHpGG45afb3gQYCN8o1XoZj1tK9v8c5cCRKejpoYdUP15ryQDAS",
  "key39": "5rpFvnNNFf2YF7PZj9Gc5QL6QCMhEQm2Wke9QogX4XfRuMfL2tbPJ9SHwKDaarkckS5HmjBoZ6FHw3fNUUgVwZSc",
  "key40": "2wV8U52VEPMRdb8Ky1rhYaQ75vKZ7qgV2divXUC7C8ZGZJ5FJTGCyzu9jVR3eB9JVH41XjHGSuGp981j36E7bQta"
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
