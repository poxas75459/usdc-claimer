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
    "2ryhqMJTKuUKnSsZDjxGBQb65Hp75dqRb16amT9EMHPv2kgH7GE6xKxWKEVHHEtUyGMGEXhFpUYapok3UHaWtm71"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S5CDc6krKVm1TnfBY2r9ggPHMDcCaEV95AktKJpLh5xKbCK4fB2KvbgCDuDLk3viR19ujoZKsWUBbkPLiPeE5Qh",
  "key1": "3w1LsZiXoNxTFaPXbJJB5922rpvKP95QSDdgPyBxoEKJiuazBRH8hw2AQBHyyy3epDmfeuQAS9uMzPSSTuKeeBxc",
  "key2": "3ujQWDx2cidUjiLCJQu5SJWgKgkMofKYGK4WTuHdWzf7e6jK9Cr6oZGBP2RuCdLVXBGA7yPLDwSXNu8e6KwyXG7y",
  "key3": "4M7fPheCbqFV8BiCChKT4pqEZFcSGjXshSy5qWH1n4BS7QF9G9tqGTNzygg3n5SwNwfCiknuVEf7GwS1jFRbV2vd",
  "key4": "a2dXShHMQM2BNFfsT2wPp4PzXJG983WAxvFQS16fGVPTDZScRPWeTeDuy7kne9J5d1RbD6nLMuRZS9HGSGJc1a8",
  "key5": "3TYkcX3VkpZdu5Td5eimwv96Heda6uya3bpQ485FFmgaSpdFdY63NmNrqifyfxC7VwBL9xfZPNvr2bM6DMFjPCvH",
  "key6": "3KDbpkGcEameDvPZwHZuy8nJFR1nE6kzAgYk8XVqk2ZiVSXGjZXah7qn9Ljzivb2kcrivGDGBvmLyqf6oGLLYB1N",
  "key7": "2HqQY3TRj1GJCRzW7kg7x3oePq2GReNDyRDHh4xebxbVc5nFhBrsWUHMfBYuNagUq5YCLZvDkntvxgcXHavPefzH",
  "key8": "3FnRN2sQwRC8bXLyrCPjUb9FMzZHWW9pn9p8JBR8aoKw9basQcZrhY24nVg1P8AwzyWBoAYp7BnwdBANPqVNqqT8",
  "key9": "3sy7sERXhQ7m365wvYj1Z3owmgQawJ3XVJpGE9b9jbaFNDdYupBBBvsBwtzuYReVAWJbetPJPoUbmWKwXjNGb7bv",
  "key10": "2Dv9t9UFCnHKUkqvCFfW9pnMm81H42a7FgH3yJXkNoshXXSCwzhG7utCpp1NJu1NrZVZ6bExu2xUsLmqr23n4YW6",
  "key11": "4rxeEKqCBiimA74Y1Gm1iQ2Ndezx9hBZX3g6Z9JAMauY4pxxEVCjiYLcqkCUWHaZD2BRNx214NfLC9EzZmFsaKDR",
  "key12": "5dbKvHKZV5FbsUCoZ2cnGVFDYq2h3jhyBN4GYuNhtjCkH7eYXJnafYeVeoUkwHE7qJq3wmdRht1NHjWCtbr6N7Hz",
  "key13": "9vJqaZB5PzsB8pVCFC7hxnnb4oFXrkubithMNcbBq3yaqks6ot1x7HVWkrTpgTVXwukK72JqWwBAPHaWJkkzpBR",
  "key14": "N5C1iPs9UGFA9ajzVB7g4jqxiUQVoFeQ5Tv2Nuz4gGqBAqaZ9pNTFYvPfSVopt2AMxCVLUPDMbfcxqycEaNFbwE",
  "key15": "5jdjL6c6BNTRP9wDAqgw1mQndnvVss9S7YRGvQTteqm7myzHhT2GmxauYBEVvnZjhsWxRcYBGYni2tAj3nXcCXqE",
  "key16": "664wkaFFBfy51NiqZx7og5q8zKbDucv2e13k2gLuaDTG4fD6FWD1JgJD51ngya3kLhaGdZ21GfQz6KvLabkYvHdX",
  "key17": "3q6drTPwEPL4pv3zhHJE1qDjbxtnoQA6TPmVY7kx985fiNnTmnZa9ZDwvt6vYdFXnFX62GAp6YWFZwGJY2nruA12",
  "key18": "2GGq5QNfNEEcKnq5wQBqUtvkLtnXQe5S8DNSx2k3gT79CFmdsZ34PYnPDXQxGJFV8cQ2yRbJaGsDQpvp7R9YgrSq",
  "key19": "3zVA5xyYp93L2oCT6tAe7t5hmc9SLMbsk3v8w5xq8s1VqNDDkMnoYH8Znkr2xjD62Eyug612JTWkNwXDm3g3dTpc",
  "key20": "3wmqnhXyEQHGHT8ue551UnUvQ4pajJyAigtDUAtvGLzuYdKPkrSeCMsDxkHZujdWfeXL8bgnV2BbQsW4JLUv9juW",
  "key21": "4wNADFf6kiUDFBXHPV6YUt5CdGUH99Qw1m92ABb2hdSArUtV59uGygcfSgTa58fA2DpJSJ2ogWaziieKuQoJX1v8",
  "key22": "3xZeH92MUGrLVZTxbuj8sRoMsN6JD1Q6ZXhhwxtfsTriguokXzfdf6cmLQaAZaP1YpCmrLTuUwyTQnZfvyrogFHw",
  "key23": "4oqqXY3iGDCVS4fp8MCxUcfYMf8iffc5sZRZkZCQxPQoP33B6a9YpTTvhTZWzPZLRRWjeFP5T965mddRgyzqjjYc",
  "key24": "CjWnxSNDqRmWLnCVRj8U8Jkt9cF2isoNbTKc6G4ffbQ89MHTh7i8aR2X6mAVtEiaXi2q8HZWoX5p5MjBXjbRYYc",
  "key25": "4YvZftnJFSbSXgjuBAMkshxktKpTAXyw1zvLi1FNJJwqk2V16dHJaLfbU2yKi8Xdsk7cDfFwd76eCtpczxcLKS8Q",
  "key26": "5tcY9cWPsvr9UG4sL9e2QMjZuqxcnPgnhXWFtFwhhkPh32HXZZ8MG5keSqmbxxynxJMVVtxw2dVMJLTxtXNGxtba",
  "key27": "5tYUcA4SoyBgcUecVGNRj83P62cdn6UjKqGYcq7rJyKw9RVbNHa43NsEsmLvYbvVzFoUh67nek8ZABXas3GyexZ6",
  "key28": "4cHCAmF9KtvqHWAEsuMUtKJHMgZ2cTn1ovqjPkAovMcMF11NswX58iBcZ9Ds63m1CN3hyrwsfjJz8dMFG6zjN4Ht",
  "key29": "DD7691pZCC6op7yEo56BXWWL3Yty69EG37m6jkyLqxD9soYhq8ijKYDtkxvftfALqHYTGDHghWAnrC9rrybkitB",
  "key30": "5UeFUcdV8o94neZcEbTXCnG9mRNqm8sHdmUm3rUqUn6DXGbmy3NSf1E7mmku5kyxXTELb9uBCaF6YXEHgbkaxnFa",
  "key31": "3LF1JegJvsGRSTErP6e3nNuPe81rkxunoaDJGAB6rwAa8devrmw97gAbioAoADkkrkjZoZ3yu4oTeMJnYGhw9rR4",
  "key32": "o4QhhudoQXyJjy5dUeX15yYxsTJ75vbM8BECotKBYHrJW1S38a5ZqupdAXzTy8LmhrRkMskFRe6RVUWqpr1mSpi",
  "key33": "2yaEx9HpSY7gV2Sx4FQjTCDKoW5nmGVoCH1SVDxq4q3MrbNdM7FfmscHcYNkJN7hit6HNbsXi4ZdmDeXTuUEnwqj",
  "key34": "4h9EdnW75dD9uX3cuS66JZTjEdSofXk7rUt6Uu1fcPjVusX5ujzbZpfyaskV4p1ydYgUsHzaFMd6E4vrRJaHPd7P",
  "key35": "3RJ3KaFPPLHAKGP4fp9iX8WE8zX4tduqwJP4uJLDdQGGcAYeRAFUEJRCzE8Ape8Nz6eBu4CUE4JFXzdeBJ72uGGn",
  "key36": "tZNZMrxev48P3xwWMMz66wSasTfE6gCf3USLnVBCvGy7ufmmZScNcqw3GmFrPMfDygQoFUKrtidcXWfZx4NgXMU",
  "key37": "4LQhhaD2y83tgVsEq4APGSkptV3acWDoasqWcoRMtPNRSZEiapH3j7JDGe7Fq161ruZPXsFeq2BFzfLk6opRtftM",
  "key38": "4iNBAgtBQiviGphya6ETpKnMXPJkmgB1ffrDSYBTNG3aYQCCt8kkWWokqXmADC2PMQXB8LTUQDFcVkjTyd64pBeS",
  "key39": "13AZUEdMJ8EriibhE3Xv2M65WVyzsv1R7dzZCe4f6g2BoEd7MfXZ8q4Fz2zza3zbrHTfaPtCZWfwCxmmvKzpcvn",
  "key40": "4etm9xpUMBp3Qr26v8iQ9K6wYPj6FaWv13uQifM92aw1jC3ypecrakrZ58pA46nVd2NrcxDtDz9B43hKYD8WajMF",
  "key41": "5qVCr2LRhxjgdih2PCzzk4fFatVnhpnwZzB2jsix7eS8baa5ESaTsNCPR8fRiQ69uBh1SG6BZToLJncxjPu76hgy",
  "key42": "5MURNc6XnxUeirwtkuU4rSRqs5KKpqdsUUhG3TA3ULdKk9SSTFLVQKny49nHt3EuVq4v9QVtcLqFdyVpqU8NLyDv",
  "key43": "3wRySRLDmaCMJNivGVwCDjNE1acGn8GcLzdG1fh2ybxKQ3i6hqANZHA1XoFrGS9DfDQf13Q4uk7mbFSdtBUJqaZe",
  "key44": "2KvqKQ9iVVSrDSchhjkXSuM6HDKWLUk95XYDweNUPh2Kvfkp3hJtzN8vGBhCMseF1j7M682KRDbbNX1WUWHksqsW",
  "key45": "47ECvdgYkxyWSYKPgwMDv5EFPqZbewDkmMAQz116Zywv5G6DebNGxFBL2uPjbXcDr3Sa9T1rxFWFDZ4LEkDqvEg1",
  "key46": "38pm5ab7spn2yEYoaY2oKhg3LRy4fyRc9RdTWihbYYbTSpPuZBdv1YWQt9a8dELejxpSpKNb9T5hbwvJmnByzUsZ",
  "key47": "5GjocqTYwUFeuqpiUygNM7T3mDHP1wLZTjMLm6XhttYHSEv45K6QGoR9F2Jeg6ggAUWMtiP5EcBy83NMN2m49LGp",
  "key48": "4SHbEF3u4yXBGkD1cuydUaaW2nrsbFgQhV2htY32jxQZT9rrk7upPSs898pAnbmwVor2pvHUCjcYm9PvtinN8LqE"
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
