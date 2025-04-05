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
    "2KAfqeTWtjmxgTf8iUm8xCpiuRMA8kdRrghhCuVUnrfzG442fqEhAArGanE8uJ2Avb9X21cL3mUmbV9NGC9DhZVD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QRE3AKDXSNLahqawHsiQfMg4ZajizF1c8C4xAH8fn2UJ4HEAetmqj84ANuw83iUoQK4aNaSxmkSJynLP82DrckC",
  "key1": "4wwWSbfg7X6hsmxuhBafvh8UdUcEfK9VtaNPLJ8xQer6nCNwrnxRufELXwMji516wkgs6sjsq8zbpQ75kEg8awQa",
  "key2": "34zVz2z99HRz5Nkhoax1n9aKAqSfWAiqLuv6Y5hWNCriws8KUfKqSDwL2Lrkps47jDKALyqqm9B1wi5vyfYS9aMD",
  "key3": "2ySBLhoC8379YF2sYLkfTMVELaPWqfbeU2i8uKm8vGbZsFGheXT95Lx2N8jPZHCaW7oUGEsTBX4hKxVRzhobPW1",
  "key4": "48pHw44u56brLz9L7xcpioATXWca3kicEUYLqU6Hr2Fivv6W6YhfNpcYVPQnWrsuayrYLP8FBpoNVgj37AdhYrFG",
  "key5": "FbnCAGT8XQtFvjXTBSNwmLya3wd3cQdcLH6oNf9cXvN6ZuRDd1PbjkJ21wGjvQ6Rc8fFFRQ17akxiCgyHwA9w8Y",
  "key6": "5oWB7fkW3PftGc9nHJncSjEYoTF52ybWGCkZjb2ipL2s2BqbGcgLokMj7aYycVq9P4F9vkjaxL4BbyZzR3XjwWNt",
  "key7": "Uxg2dMRP7d1WZPVseqiXy9btdAuNHN9DMKByJDDx1F3rZQumTjsfFjfV7QwpXh1ksNDiPeV3zWeJXH1m81TNTuw",
  "key8": "4qt4WPviQ9LdPzMyeNocqfrEQn1L1Jj15eSnC3DVasMHn6qkpPQHc6ehXhiPu33rTvW1tQMJkvVSYemvGJQ1wmNJ",
  "key9": "5StAW3n5yEB6EQUNf6QPBiTKwyhvHHGLp4v4xaiQGJpnov1w8V3RAzkuNkodQXknjRURq379A8f4XSArfbVs1mLj",
  "key10": "3To5ge6fD5HFcDa4JNRSfDiK7TzcpyJJBtt35B2Rnih3Ws9fvkHszwK5R2adMdfsPAWYuZdN64hoMCT8uNXQ21ba",
  "key11": "3STS4CNhzDvQDvvKPrcZfTqgPYGT8KYXZaVRFuQABrAUnpQtPBvkmSvqwqxRpFpLfm2NwCvVAuHXti9FFvnHFzDD",
  "key12": "9AUQLiZStsgNMs3CxoVkLr1brRn6QDA9D5QeZsumJowYFHsm3rMKjoNcPq2PD2YMLQR31vZmycZVgTj714nfsMP",
  "key13": "3wmT9PdvDif6BNg8WbLiLTzFwQ9PTYx7ABxsN3NngoBFZSQnGJXk2tYwP6WQmiTQnB1odARCULJQA9wnkME6L14G",
  "key14": "4UYUEFgSMM5npHDLY9U6gsWBhCTXbqK6SYYxwuDejGS4Rxq9Qf7FsBzSosNcrEpXTPjqXQivuqnURviK6bYBfzdB",
  "key15": "FP2thoL8JXkCDnyK6Rm9K7FTeagdFAiDpDTxxZafqeRiixQVm7MFKTw7uidD4ptHTDJ2ng2NbbvTgjWQJPdsEF3",
  "key16": "akTqCwFuke6PoHW7x7Rt4GtbK3h717bbM53NCx2rX11VSgFjdkKSdPqGLMxsAXQtFmDej3xjKdHqn9PPZ1Q3EHQ",
  "key17": "1VEeFpAMEaXRzjhP1syXifnfMRoeLbwpMFUWwG2wpMpoZgJirExYv5g3kv3GP5HA13qmMDsWRJ9WfnVjSSV7oiB",
  "key18": "cUVaQwoD5aCFEpLdbdXvkVgTmDkKYqzx2NJnNCz5ss3SaLWUCeJ9WuNYcJ4YUmnDWm3Bg1gEVfEVeBRL4fTVESJ",
  "key19": "xBLm6TiPsVXZ29Qv4ofQ3VDKrQ5sqqyZkhPbchbR4jueXAX6oCHCiS69M3cHvsRBuE4cafmhRQt86s1TAHRdCe8",
  "key20": "346Wsur4M4fJYb3NWsSfbuHugJaKy3LBYFkorEy2o6Q4zQhCKyypZ9XiWiuVCpFYrN1sNe11K8AWTBLbYxfAJZ6A",
  "key21": "3akifhrLgUvAhvHz4Pn7VyMaEM48JQGLBFicqcb5Gy2hXzdyvmwAYAxz7thLxvXLQLuxdLGVR9mroD7kgycYt6q",
  "key22": "4ctHKmMiYb5WwEJfLrFfAfe8hX3NMz7sHNri4PSYJhL39aJyBh8XUWRUqTUENvLB38fFwr2ikqADJtUzjU1iMCTP",
  "key23": "3cdoTX3SuzwLrgDA3pFjepFZt3xjdSwwegCsHx4vyf66cFCoemJfGBcRF6KXngBX5n14E9dJiH2eWYm99LXBYDN9",
  "key24": "41GjytnRY59Gu1jj98oyEuvqxS5dfZo8XfwrZiP13qFykvbkYGEGBmMEAUsLtRyMKrTrnvKif8p97uWf7kmCy2jq",
  "key25": "3ddUDAPi3UJop8E2fK9J9ohioU4A2gPFCr7P3XopxspCJafEHwZdtn9e9942PoT4fbuhqCrLFsa4zxDXKYczE383",
  "key26": "2RcE7ntCfYUpkPpmzf9FiVetxXSGL5owCusPZ1ZMMwnyYimZ88PkayThZ18uaaN65y1a4Xx8P5gpgFdzarmVgDKT",
  "key27": "4W6hA6XTcRdxytwzN9xoj5i59P944ZGyhDTLaVyifZ1TDJ6BnWk1gUvfkWWCBwsgxz8sStgc2JczWVP8eVdgEjvj",
  "key28": "4stTi7xbKuizoAfUCRFYx21sxzmsz4zfA9oXkcJJNfPB3KYCqwb27HVQVgFj4DkZX13mwad1uWHYff6YY9uBw1RL",
  "key29": "3XNW3KM5VxRAmM3DaWMGdtRf197a7x8F4RFCCYw7MPZPPSrMpQvEQTHLshGgWK2sktnBipwTDBMnrEMCievXtEqw",
  "key30": "4gunqr8ehtgZ3aGVbNr56t6kMPhunP8FugjUGQMgCLp8sArzVR9ci4j7HGLcMkZTYqNWq9U693Xbtij7QYuvLp3T",
  "key31": "brTM62BxkYCBgWyAG74YHQpJ5UXSdiifXmSb4tdFxCCYJkz2NK45WFhEdBLFSXW3PaeWimmMRPoBUJFXFaiFpkJ",
  "key32": "WdKSZc2Nqr6E8nEEMoKX2s55Q7hXj3hAejYPxvYGpFxJExEXFn7K41F3FpuhxVEXwEqNdVrUTU8qPmNreT29WiM"
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
