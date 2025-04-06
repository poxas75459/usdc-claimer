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
    "4xDTGdcHib22MVq27UAZSY4SPrNiLEEHxqAkxWDmzRY438EFNPqNMGwNzcAiavfE6vTuZnnzpLrxD8MP7YntyDXk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BG2yxj6jk3CqSwe4mvwBMuv8fMrRJGPWhcg74pSmQyyHpNqNjFZWMMLCpgsBnMpJauMcJyAgaeXmus2yDFVJVF5",
  "key1": "3YHcPK3X5pVfZFGcaWWCukzmL7GYaSy5PMvQZWjX4FeEho5ACZ5ZnPeM3FLYX3sWWbdKX3W8hBp5udHaiDN4U2oA",
  "key2": "45cvGqWLHRT7Fr5djrhGrWP9YjMqVUcKrbgdjdW6Xo7Wwbs1SHbr1LZWwhs1Wc3cHixz1YpWusYSps8aMW4D4kvk",
  "key3": "2cp4gNBm8wwtg4ei6EKkUn69wqTvegmrxRCWSyh9iLvudQGCDpm3qZo3ZyGmaybZtv5uEEph1TunNX4hfsdr18YP",
  "key4": "22X3D7PEZcQ5Rt1HNa64htFc2BNTiTtwLNomZH3Ra2sLbWZroWDMj9ENqP63ENDhCoH5PW7xqD4aUg8jzhwCDHpS",
  "key5": "2FqTo2ZcAkY7qCp4WCAYpCUxK9kHN5TdpW4BLwBhmtYAZkN26CrT7k9virJH6j325VeK7QGonRa3ZqrVWy78GNnX",
  "key6": "42xWtf4dB2PtxbgydJgefDw3PZP6fCpttrh7v89UmVnJoKB8ksoeL4WmPJSiziRFhjvh9ooKPbFvCTfvCvsXrssg",
  "key7": "Lqmgx8EqCKmW981sjbVMShdvAz1RjVxVz7s8cGLU589DseqaDyD5HgnNdLgcmcdy7CiZhbXAh5KQtUk72pkkyxM",
  "key8": "EEgUN3LPFuqRVXPDUs3r6PJhW4t4N2k1tYhuq5u71NVEFc2VYz9Msmzy6Z366tppiBMHnB3QCUKwoiPspceWw55",
  "key9": "jp4vD17poRma69sMPdxVqxNn2rXqZiG5E8tvekz5zw9smJT31umrqPocP13yDpwwdcD3knBJzNfLCwzFhWaJ1J6",
  "key10": "2ukgDe4bCQX4Eygex8rojrkyo9s8pWwRszT4eAw3Yxr5CcxiNAJBbfhGxVYmtGTy8XPoCAqCcu3zwjz7E6pwuXko",
  "key11": "3wXtfEPGTZdX7sSmuahgiRLCAhGGrwToGanaEQqVNKf47hMWB6fvKK5SMURZ2asDtWkvPLpjD9y72CxF5BB76ftr",
  "key12": "3qbbkSTDD9bULvDPMooCDUqoydM2WG3mYp8ZoBNLwEVNRhdCQ7yYtjShqtib6TBjuTbQ1hEHpM2EqCLJzm9fdoJJ",
  "key13": "3Ro8Rx8xaCFTai4Q2QzbQGdTNXBYFJjH77soRjhAPRD1HZvfPpUsKZH55RcPcRstUhaeGY9cM29Z2HuHnFtUKhjq",
  "key14": "35aYCBGXTcthhw23Bdiaq6BfQVLi4yPC5ALQmq4XmXBPY3avM1LpcjuJ8pdDwPDaBi2fXiV5hQZ2Y28BXugeDhyZ",
  "key15": "2Bd5gnqCVRYf7yJUz5KjnHz1o6dYpbQ9qVKSLA28aQGnx9FngUDLLMTiAxhP7ctakuAF4Ws8CWafx74RgFKcKqRo",
  "key16": "w9pcz5XGVtSq3h1Ptuc7CPog4EbR8UexvHiDVNh5iHEE8HMA7ZpqfiLh37ktUtCBqwqLoJfHx6ok1ug2TZN4khT",
  "key17": "5DKbeJAQSzMgQguejcKL82YdzyHLrouye8CMpR5LEJkCLQ48riCUKqfVUBCG9QhVPFHgyeNp4XNf9xD4FCzdg6Bw",
  "key18": "7EArvLLXsWVRYWNhUqagreBJVL1uARr8PwzabTA4XezYZUKt2qxTQxWkiXgjf3aMsr9c4k5s8w89XJ75KTz7CbH",
  "key19": "346UgsYam9nrrSSJ1CZx8p37HWJwbpWjs7itzxC7fy7geJeorK9uNhK5gsQ7qhpqCVz9ViAej87dG7eNmRLubiPV",
  "key20": "433Y7tKiaRhuLrp74ijzLCVHzP9zXZacNDvWBy2V18CmuwrF5XftcvfZX59jPApFZJBp2KHUup9rU551Hhwi1bPD",
  "key21": "28PG2Gy8BBJMr6ppni7MPfvfZPJHVstjAQ8RmdMLDsmRQCYhU4AX1aLYZKN2phNEs817VeX6WishuauiTHTWTUSe",
  "key22": "3v5FfTt9N8dPF5uJxowExPBFojEFUWBGppxKCvzAqib1EDtwngbod1F7AL9aPDVPdwrcrRkZ259pFgo9omZWAdxc",
  "key23": "MfrVDSWuX5UvshvFyMAMKzfJG83UBG5KkRvkarbts1Zmpibh4Guww9U3nrMftoV4WojR9RyRgX1ep1mRWccE9iK",
  "key24": "1kke3FHUtxpUWZ2Dkv2GyCUKMygPL1mA1LncREuiRYk3McFTmBuhQfLmmUS7c9CKjqVC4w4KHAUPAY9xjNF585F",
  "key25": "5vHwNyKq2GsRGXrqz9ZxgmQgDGtqJ4ttdyN3yVG1y5upVVMMazVTM67cgW5CtE6AUKHJk2nb9J2SEeM3gCNwZipN",
  "key26": "cbxr78NGxWuASBtprzBN4XSEAYmtm1xfhKvgTKfhKtVB7JHEjbEQniAGs9EQmQxY4XUVy1PERGgtVRwmRtVLod9",
  "key27": "ZF2hta6kqEcQC33rhmVDomL4uq5JmDDRD8cHeowcWDnuxWaLjHMDdtmPJS1Yqr3nNQ2mC8aM7xiW32ZqKufuKYg",
  "key28": "5dmxpDEsTkdgudqhMrTzGLoJx8ycHBQaZnWktNK9Ctn5PFioFEgP56ZG1EdraeWTFkGFWd8owv8rQtkGJ8uZnKFz",
  "key29": "411KXXa5Ly445YibFkVk3XTnvkfXcjwDu6JkeQhaceK4Ete3q3khEwmdXq4bUhE7As2yGDU3MQXesH3ahqjvSgsd",
  "key30": "39t2SNogrwZ6m5JjUPdjJFM17zHkQyUPTxQdbM8gUnUPLC2PcxGhRtsBpTPcZCyFGHQ4RqFGPVQxNdE4EHcfoYk7",
  "key31": "5QmKjvs7RA4NwCpVnc8LBDfE76QFMkAc6Au8jyceQm1jPdrsdZiGv5xgkCs1rATCBwXvWrYnzNjS7xyGvhe53ZCC",
  "key32": "53yKm9yF5gpsz4ope7WAEZRUUzG51rEuiT27WDuYyqNq88xusDcLxs5EKgqq922dD36B7NnvPunGyXk5g6Kena5D",
  "key33": "5CGSD97R1Pc37UMNRCvuQZzVMMpcDSqAvHwzNPEMfNwaFuF5F2pABLeJycRBqskmSGVeTJShpa2VUvVshbWTT5or",
  "key34": "3XtUnYNEWjUpF7sPzGABnD6QJnV41oBCKT4axMTnArnJRBfgN8w5WDBWvhTZcnfdL5taJaj4QibMjgomTPwRGe6f",
  "key35": "RweeTYDQGuyTfGyGRvuPf9C25o8Y4bVJ9wjXX23nxPtrNu5tqxE1te7qDqQJsiJBVAeP6yKZKbQwyYhPSEHEzG8",
  "key36": "5D1Mr789R9AErRkDUUZETdhqb6mjP8ybQ8M6DYBiPVqDYqRaujKPSgejSEVz3SSxhbERRNHPVA6tkzyNsNFfyZjo",
  "key37": "FiGmsYZ7jLSWKt7TWfdBfiySp3z5BHynZyqwKLhw5wJLqexwGTunRUVDL4aH49hrMcwZNyApLMPiufMmLebQQ7M",
  "key38": "3aU8hNn7ZkUK5wV6mTUTG2eNwxDairNRsGwGKoRbr5sfrpNbBNsu5PfARcDgtQVBuk6E4Q27th5erGyzi6Rrcnqz",
  "key39": "2MfNR97HFctXnsufrVJwPe2kbwZdb5akDF55ddSUENFMaoTegWYn4zZNHfc3KeVDwApezTTYJ46MbAPiYRY3EcSR",
  "key40": "2gSP4WcvRRd3R5vYtLgujL6qryggYMsciyM68rtaLsepi3w18bQRPx5JehjJCfNpB9DfgwY4k5cqbwzUo1F4CJEH"
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
