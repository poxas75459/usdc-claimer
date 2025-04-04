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
    "3zy9P5u46a6Ywygy76S9AS31iwpwWsDfxjxQqWVRf7dcb3ETPhpY19Z6NpaDdDBdU1jLQN4xSx86UeFKkUPFH1F6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NyZz81EC33yQSTRTa4vPAKFDzLN8CBBv7fNy3RWkpkxpTJecQpRCC4zoDYi4PSVdZBCJVLgo6r7E6RSxbvXo4d6",
  "key1": "2N44RmU2FM6Em1ic5pvFhcRKzB1aL2EL7QDdWf5x51QTPNFE22LbJTafwJsmsBMhGKySAGQGSA1gZXSBQjB83itm",
  "key2": "2oFVZh8orXzu1v9GjBrf7ftGLsz8dWkP27KEBNxpSxFa7H9tqQtY4vjgRsdTR3P287ggVRS2j44Z3oeMGF5P2Tx9",
  "key3": "43S7fYgmvvKei35KkaEM6EwvFtD8jeExBMnot5uR1Tb9kM2umQDvJHNCjmDN2VPABoeMjnZ9tTmKq2hTRZB2wEAR",
  "key4": "5kuVauKp37WhUqc2baeo8xEhWfevjMsKJHUyNPvChDY6D1yBkGNnAUKGd4agUcgP1VAi2qgfQo8C6TbawHdmhvcK",
  "key5": "4vNJwd2WrucoN4Q6NhXrkTkbQdgDASvbDN4smWsDnDDmr1RWHRhafCUmoniHATq9wgVL1Wk6kdeg4s3SdPtJtjsZ",
  "key6": "3ZrNpYouoJVg1jUUNzwJY3dJx7nKEYwE1rwzGBpaAbMwevn9QzxT9EimzjcD3fAtMBaopwSwS2pjS67AGidnr2QG",
  "key7": "5bHCp8Qjkz1bL4Ais9aqGxokC8Z8XQk7j5tggScFFgWoZhUReNjGFJ71Z3u4tDJL1x9bk3zLz7yfBBYssb89ja7S",
  "key8": "32sESqFo3jDbK3bFfp5kF3sLXyXt95bGLHtviunzGxR7idAGj5DCnJUDrzgHdaixsHfMtCQFhZ8BXMW3DzBnzYNB",
  "key9": "396Hu8Pwc1ECu36e8RCK7yoN7FM1F83ASsggN6qP5DAyMqqdw9tCXb5Q3MciJkPo6Ya7aoZj5ahho88K5nyoqrkW",
  "key10": "3Herbok6xy47wBSy3uYeSoNnfBnfY8TqM484f2fWFQaaarkQMW36RwGxZiwHDPRM926NHs2159ZK3GrHRMgvZTLh",
  "key11": "2KQt6Y14nmEUY8gEN1EhF6d6KiHnJmKbx2RHafu11WEZhJJpCnokMDH21teuKw5npFYzfXVxru6Tid9hzSSDXC5K",
  "key12": "65ZnRgCzkAfrnqB5ptSqzV4h1E9KiVJjUShCcKweT8u4EyVuWLXEyrPwapADWS6MSSB4ymaGxLkSQdTotcRAzH8t",
  "key13": "22Y1SKrAitt6pgZhYAXo3Rmm4mQwxafscewyo3khaKRmBANHjdpxi3cUud7FGdFRaVDTe1B7Lm49DPdZBv1mY1ZM",
  "key14": "5uawkyuobFVi6nHb11D9HmeaXGKFoB7LQ8S3Fj17wvSoQx1Abc1qGMaeexrVsmM9nZmgtd1ZWY4LU8be8KE95pAs",
  "key15": "sryH2c7XmsULYj1wooPf5gTdoh4r4d35RXHRhM6C3TBr7gJyu7CcxmzMRKJM6KkVU3seSAPpLEU9bytGm2jWaFH",
  "key16": "HSDetwYRVwYvHx8cuCZ8kEgGXp81VbpRGvgwNbWnS1A1JL4RrQT1mS6NgckaesZg3qKdpJEN9kYhoPfjMah8GyK",
  "key17": "5tf8k1YbwbnNTVMfXC3nYbeD2i5Pf5YpFya8g3XJeVmzsYmDud94AeA7eSNYGt8K3wuq2yqjGrztjCDQicEN37Jo",
  "key18": "3jsB88g3cPgiyxMmDF5e6YVMHsVcMSxhR1hVAhWzLkFmWTWdyopvJGfGcCWhH5qAm5FcMMFw7M3boWpSVJxDZwfw",
  "key19": "2fYNAkXxiuJJbGnjgSWE1JAUcHayC1ULGyZWCKxodNwxuHLnmKdU8WzhVTc4FsEnfHR2whWxCREE45htfw7XPJKS",
  "key20": "4zbDnua6ntmpcVNs6zJNr4gsG2cwdf48XFm2uqM1yzoNbJ434XLFf7qk9f3xRDNp4xAbM8cTbGgqz1XAQJ9DiGtr",
  "key21": "3eFipmF48LqAeZYDdixffSMthS7CgwkuoQeyND9aKQn4D9g4XHPkZhxZnuisMb2qM2PypY8TkdTWk1HHAdjJrYVy",
  "key22": "rguxtGuWUJJQJdzMZRNxTsnoJzqCsNDnSN64Ld6atJeENa9WFXvYCRn9KmBmGqD8NJGgy9tnsRiRPEHaoj38aen",
  "key23": "27JYCPN3kH7MmYx9CkKD32hAAGnm9mV92GGD7K1RP1zVsa8fXtJhh4A97gr21WHQwi5zyaw9s2uuJJwRxnVbNZKB",
  "key24": "2XXiJ1jseWBJ5BYK7ApATFKsGykdjUQkAZ8WXVY7qcgG8f7uhRC4o4bP7bMt3dokspohQuXvXHD5SXSwJuL8rKKB",
  "key25": "36Vm8Y7vtPT9g9xSSD2HK9BdLrXEs9CxxRhdE4HGSomH8rBefBsBygGh9mstz6dU4VAZmEycXjqWYVAwyuQFtZG4",
  "key26": "4iH4KoCvA8zdaUjfGKSA56BmeE9AYSixULcteFB88j2SXLpB9C7f8BtviEiAhWrBgYKxZi3o7LHXgiB18YXhhLCY",
  "key27": "2US1dubHPjmsiN4ztPXJvx7WsEATNZLT4itZyJpvdmVR5Fqr4oZa8mbdwZAGtdySK2QkSAMGQ1T1gpRT8KUswocJ",
  "key28": "4VFr44J7B5j8neTjdUThD8qbCppThhws356Rw94iL4czLWVJZKSQgkoyCYnvif6A8E2U9hiMAc75auEphphHeWzY"
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
