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
    "62mpfcSoSYCVEiDmg5SeH2n7mpESXsNoTgbHecpYyfnMZ6cUUGwvpifK2V9AigQTjKGfbC89cm4BQk8TdRrmGJ77"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tDMehGTP6HC2kLZ5PJFkBvT7Acq1Gpu8Ri6pxCL7R17AomSL5rNymAvChPNg4v8NsgEGwQc8LqeGrLnVW4SChSF",
  "key1": "336DQkUgm3cqKiGyu6ZyFXEByVSBz2A5ZPvNFx99879btMYnWk7rcv1VX8WqqY2EwAvJaLbqmRj2jLnD6sdCroju",
  "key2": "65iMtCU3j9fXWtuHHUdrAhXx6SZPvnNVy7KeCvyCe7viubu3A6cBDkrCchyNjfT7AX2jALhJxWu7BHdgPgc1SdjB",
  "key3": "3347peLFbNtVNCX8XLLspNDj1mAR4cKoptqgGnhq1ix2oH32WRKTmUt5UV8WieXzjSDEHAV4bE7PJ85QKNmYYbup",
  "key4": "3x5voFoN8aU81E5x56UYyitfs1xPrYvvZuCEQSjPh6V9sN3aCyyCANKJKnTbKq5BwsVH6eYgMwUCCRqCNdExz8rH",
  "key5": "5wJSg3tEWRsJMUX77juAcwZUoErtPhd5NrQoPfGU9GroGioWPjRNEzJ9Y2nyCWBBehtdQ9b1X9A6fHdAA8iRb4Zt",
  "key6": "WXLqrbYmFAHFFfYaazcEDqH8PkmSyxLFHxb54pjdbhJXoFXxNNe8rhD4XizWcY1rQqJxGCyxhha8AaHLo7yfkJ7",
  "key7": "4M9zKY7xfN1TYxRnyDVMpYfrnF8CNK5DdrUsZtsEosV6K1B7tw1Pc4TYpQwSHD585LN4dM6vnvB6wW8njybMGawh",
  "key8": "65hjbgVhyXe1nTfVBELB72dtb9EbYziX6dmMrqhqbhuGNHJELrRvxYeJwJxAQhY4Uxnq71w1MgKayUgMDjAXdZfj",
  "key9": "SS2MB4D7g57Xpsvbky3hYqSYD9AZb8wWfYEJRWtMBfQi3twxLMphysZoN9xUcJVUDd7UpQ9Rhe4WfJFULk2VtKG",
  "key10": "4xSQKTTBowCvUox4FuRdBQBSuB3BB1ioAk2c6BjZQeo737jrFYdFnYAaX5R3sPLGZk1SndZ2bnibBW89i8sozn2h",
  "key11": "2QMVQuiWEJ9uJaALcacTZFdxzPacfZ6H8iFJb7zyWkSF7TsHYcBmpSTxsJ1CiPyDBY5XczgNGXiQq6rkmjpWSgAp",
  "key12": "4efaohg5B6FRxBnEmUhuqNZKJFfHEfmpQKm6kjkEVFDLNEbz1S9jpS9BPXWce2MN9Sbb77GSzKm6zvySRBQtVCgT",
  "key13": "3ky3fBnpJDp8hiVXUsiCnn6jAixB2bjH4DQRJ2q989JgDnt8tTzY4oGbgmD3HJXnGBsgKXBugWoUR2SaKEXLwzVs",
  "key14": "2ZLDSXJBwxxn27mQCNfaAiMvZuPHqYvYAxmoFEqY59KjEbHCRAwtUbAZcjq8mn8JkYS9XbB9338iHj3tpnsxXduC",
  "key15": "rhPdJrwiG3jY8BJDhPWQK6CG6FhvkxPcgd1owfqp7PaHdh57FEqKitsAD5rRC33mS2LK2E7FXiwt4pPpB3tqzrm",
  "key16": "3mZa7hZDZGbqaxRK3mHdr3BQofcCLqsJLBMyX5bWcAbwshWEK33GkHdAT6WE4fuMVPC8jEGtXWP8JCHVGRkoPBYf",
  "key17": "2DcPFgNBg8krtTAvKdYj82DVecMGCsKag4Qswvd8ZPu8jvB8qQYsjejsFWzpVK8P5iYfExwLD6hpw1ETumkkCtdG",
  "key18": "3UEs6sZe9p87gDGqeZrj2RHpAry1FniUqmqinWQCKXtBmtkD68n5F5GV7jCRnuuc9hqQpz59xHwNtrp8CD6opG5U",
  "key19": "2rtf7rzMm7Zmez3ywN6m2RrpnfB3aqukpsdMkdrzink84UhcS3UDzkCJP9GJPuco3TjK5q5KmPuR7HE8PEmCCWBD",
  "key20": "3K3QNuEu6SMpJsDLxK9pDdCyogcMUzLXGXEGjTezKdLy5FnmqoqMuTG6nF2i9UhFoU8J8jhtWf98tpbJzhtAc1Jc",
  "key21": "4sm9A6oudVjeZmujVPsC26qPVcwa3tW3FEyStvke6dELDDYWHajgyFks3mdt4EWEfLEjiTjixKV2xF5XpZtHcfVB",
  "key22": "4C9vWvYNiGNeFL4i7z21iqqCaBdwbtRuJbzh3S3wfkziPohGneW4WoLZdpUoJyEmv9nWcgmRo8jgdoE423YwPaM7",
  "key23": "4zYtqhMXGvwMMFZb4mxpSizyYD6tbnhoenQmCLWrbc1TJzpkj5PfnTx5i9NqiZqRWE1xXNvDQLHY1Z8ccfjyJ5oP",
  "key24": "5wU6wwNz1TLvZJjajnYegaC1qcLEwcJeDiccZ1nEQU7pGLCe4PyZp6WXkJG5moWgiiV7GMCuLGJUW7qj53yMSEvy",
  "key25": "5TJvCMbiTko3a3HtBNKW8nfgsDUqawFnsk5cNcVQ7sn7iagq1WEVHNKnsH5qUmFXwKDHnA4Z7pZKX1iQmzzep8pV",
  "key26": "5SfojEovLRmcQyCZoHzk9kGoLBy4uDw4PjjFgxV2U8bN6RVKxe7NHFUerAVQvwz6b3Lf4qSiq4VWMVzskaVmp8KX",
  "key27": "3sJtiRb8Jpj7PePnNLtW1BsbzuHgB7yAu2vtCkjTBeAEBFgin1FEV2SdvcYfV1QfEQ8Mb56ZuESyTQDmNeUoKrr7",
  "key28": "3CLTQmFrTCWabLrQWKfdCrSpCyDsXNDYQdNiyfXvr6NHQwQZaAQuVToaan8azhC6K1MQYvnMrDdJBj1c4KwPPhfD",
  "key29": "2P1D4RQcf8GXv87uzxkj2stn5Df4vFrCDa5gLbYdrpobnVHEgamSZzjzYECnJMcmUVm4V168nsCjEsZQaDgi8fyd",
  "key30": "2DJs6FA6deA5cdrP4BCs3eU6oKMwpebLJzkzJbCeGyZEUyxcYApQRMFenqZdHVHm9sSEgNY8TsRpevC6Sa9UvHex",
  "key31": "5QvW3XdT1NNp8DjioEgSG4xjHCwxMJCpQodznCSsoFkvrdjGv4W7z8QGGFEs1sacf26gNKrjavJByZcquLnbTwjo",
  "key32": "5gAFZJcopw5LZmmqeacBpyPibRuJimAHvj1gQMgAUkB2G5aR9LYXkSK8ACq89RLLaxYHAJyUn241DcyJntGSaLw",
  "key33": "2ddjsHf6XL118g3uWA8XHhfu7TxCyX3uNn1W69PrxY6tJDmgU6g8xuwzoDr8jhucoP9Cigbib76dXrakHGYzMn2U",
  "key34": "3dxrLikFMLJDsWmReVmYcrqABvNuYQTHYzyhLcy76fBnSZtkHhG32ypviWAmdisq2pXrLeFBEp4rLBv8Qd4h4ozV",
  "key35": "5Lss33uk1RnK8nuGrMHojAHGNNyux9LY235xUKnHqzw341ri4hxbASL8ecbPHrTi226zk7BKYNT1TGyTCrk4CJbF",
  "key36": "2dobEgZrj3FKATCD1rDcS7wZpHkpmuxBieq9tbQ1ZuuT2hQL322Pb5mdHYnc6pmTWUSBDFEQCjHjpU3pnJp7hWaB",
  "key37": "4uBzUchzUCMem2KmmmPyNGjawpWLyprkUNaWtXB4fEU34FBCrBt1bnk1sn24nye5MNxpZL1qEqRd9P9hezvrWKMN",
  "key38": "2xfAhYj6imsGth8nGxhwVAaMCU3yiUPiLCaU8XFsTRaj1tmS2GH1c44ytdu3m8ELEux6iaSyggCaNdqbnKwwZjNN",
  "key39": "5o255qQueZN4oQEpMRnnDja56nNCgVgC9aD7sLX8LsPJ7YpvqoPJNmcfyWDErER9Uq3H7j7xpmdbQffXbvWkWVom",
  "key40": "3Bm8Dtv2QUksoEaycrxvNqAyGJUtcgw8cnP2km5Qutwpmy7Sm911NJRCFN5aRSphXKJWS2vzEwyjmqHPG7x6YCS2",
  "key41": "5skxkaNm6huHCVwDsdzsBL9d5TbZt5WZkWkegzUUbgXCHJ81gvonTcK4MkfKGQTScVtiCGthdNPVkTXo5na4GExi",
  "key42": "gzZvrVeVZiCiKFhYp7fZ2GKbN1NtzzmzbZxzVbKrwWhqYP2MTtnWsJFdrKsP1dtAuLy6nGMLHqFVM62wapkMZxm",
  "key43": "3Co6VdrtF5HnnjsyE4RDvfegGWHSP6zmnTcLx3XMxBCdLXUuwKcNBQ7TcCPqW1TCT7L3Tp9iy7AUL4JVxQwMyGJ8",
  "key44": "akv5pMpe22BmYaJ4a8kg9qeznPzMugkVibYXhv1HBAvw5Z8Uisz3rsChQUcuzMyPi3v4kYBgyCFgm7a3NwzKpuf",
  "key45": "3CFUibdBX46kowXjUeqRctkGtaM3Qmhh7BQtUpqmGX57jFeMuwJuoteoNVrHHHv4eC3gudECSP4WCLBqpTxS7Gx7",
  "key46": "2K4KfH3GxbpDgbYBiPL71x3cgiazwyetqYfRETy4JSaJ76L1SczpfJ7L6mBd72rv8CJdLYpz1HB9mePMCQWbjUyz",
  "key47": "3EujUQ9LfHmCvnrbrvYSmTXrVBoCuZMDHkAMCoDcVxsFapKLaqXhEzL98JLjsvcA5c8yEafcJbbtdkmPBYBrCbEq",
  "key48": "5EoT3h4UzE42Zx2Y6u5oXHXWJhbxXJegZtTc7cTWNN38EngLuyKyvML8tc3K89agJpiFyS1264jaCNAodVvQ9k4",
  "key49": "3V5Q6hzUVNsn1fMWgd46ePhbLkwxXUVxRZj4Qc2crc4N58xSj2E9kBgkVphoUMSbmn3MSk2HmzE8VycvhHxQRwxN"
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
