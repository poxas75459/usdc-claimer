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
    "5cJmEQdxH9426zz8sw7SxTpQ4zQwhQHukjr7xGow3TehFynnPD8JHbwvJHwTz1TT4WWpSvcZFwj4ZAThK6Po5xLc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y1kGeHXD488vPnJLFtd73MKaXDPpZiSWPW5GErvUM2myqc8MvofGr5UNqmhzxLhYPMtPaWxk8hhwSXNzr4UzgZr",
  "key1": "635Nr1UhFxoPvFHX314hWfpHBghNWArd3T1nFi2v6fnBsZLpWzX4jPWAX3NTpUTPXenUfT8dEVmoqyPzyzSrLd1H",
  "key2": "DMwzWWXp9JPubxB4eSLkTibLdGo5HGe1pvNSyTArM15eei5SManPJEknCT832CZN8HL67DjrtGxrmqwPChyLR7a",
  "key3": "224Pcyi85BuYTVYFZSUJk1hZDk11De1DonahiJ7Bob3hSVwBUrQm7XjLXFiMDZerQTsmH77t6HWG1bX4XDVcAVjg",
  "key4": "55NQbQGqckbMr6icLBjxZzER6C7Vi7F3RHBayESsjJL96DTs4Yvio1RvSbLwAjBsTndsor7maCt3hBPyzaVoe3bY",
  "key5": "25LarQzawQJbMgMNGoMRUkRsbsbhVucrSrXy811kdw4JJy4mgPdQz3Ge1rVJ8dtmEsWK8miW1DjYspeSUrdHmQEN",
  "key6": "4zkQds9iGR997xiKGZ4BryXXdJW54zXopsixw4nHaWmhS7CyWU2VXRtuHAqHP7dhXFwhn9aSi2pjdVn37NwNm2n5",
  "key7": "5VL9YDiw1CQVjbes1q7d8oLGPdoAnLMt8xNFX5tVrW6HhUKZJNjA4ZUcAziPWp5nxC76ypM2KptTQHVLHZr5wfKS",
  "key8": "26M6QAYVopaFpMCL5uFyTBmBmt5XLr7VijfosJZJygS76QqyCe7Ut1tvcyeFxmiAzLtVAzfgHaBrcgZPoZbWucgB",
  "key9": "2kZUzbyFFbrQUgrU573Vueaf5fA8TLGvGKr2LE9j251nJLvPD9SUYpE7njpR5qw8BpMdYU1adrVX7oexdZNScWro",
  "key10": "3RLttybazMQAAuPqmVeGo5jxZXaKwXneVZEUmK3qQnL7eUXGZ6FKeNQB4T3WTUVFEJp4Ghg7cjTE5EeoVQAWomuC",
  "key11": "NzF8E6Q5TcUaaXDmvu7xWDb2LWfYcADefyAP6U6c9YXkFWX8G7w7efURJ8rnZBk1H7kNtyDcV2UqQaqZx45Woi7",
  "key12": "4LxoL2vLHnnAJ7q7daCAzAHphDJF7dn7K4gHM8tdNPDGfMTgyVrpTacHcpkXVxR32wQz9MePY8CE765VmcstZzxG",
  "key13": "3Jscj4BeRToYY8GERU95CAMTyGdhDgAQmg2YnMe1CstccyETf7kssghKiaZuAMnE6q8w3tyA6oXQ58LvQTjAES5y",
  "key14": "317cdgLKFbTa6G4EtPHKVtfPXr32JaD9bKkqyEx125LZbkXHe85L5Xp6obrZDBvidhuRxFNq56CFsdAxpZ1fM9vk",
  "key15": "EoHAmcUmPhBNQ1uR4FU1sJXjk946KvnSobf35FTxVczGeVMAzMX2UChoButYqNpbuBKAkCNVPgjXNxAAdW8WwM4",
  "key16": "5iZuoC1LtfKLdxr1CoRJVb5MrKmk3g65x2qEwDe8P2Z3a9RwFG6ZRADCqaxy3RZyRoqg8jNLKCf2hfh2DUcq3YPb",
  "key17": "5L8HBtASpbbfvWXVoobPETrJEqei7q9f5ekWS8MZmihYHhFb3qSDq8Ec2mNuvjq4rrBAC71JSLBc9YQCB8JqgXfA",
  "key18": "3rYqQoXTqVEhjaw4q68DopNGBBMaY72VsyRNUPFmxSAnJSSF3LSyEehcY2vzrbbXXB72WRKYrLGPbRi2YM6hqFGC",
  "key19": "4tezHpoVU5rGPcjD3ejqjho69aCJsYBrHZb4mVQb9fBcZNwgQ6tN9jLiP8Ke2L4DrzCVaCpRob4wWLkge4HL6c84",
  "key20": "52ykFu8Svf26GTv3h6Ttqdp6DmeSzSaVbBYWvj9DE63T42VJFpKrC5TdKz1PyNuguex6QeaSiYPr9muPH6EVsFrw",
  "key21": "4VCduZwPkbU2Y7QnjhSDjpuXdwTQ9kaPQRgv4KrHQsrbZUT3Nvtq955iWXGS5GkxG5BFSfDJTqNHQm83C3tCUCfy",
  "key22": "2JKFBo4atCcGo2QqzJwVEk15BL5PE3H764dnyQ5mYwaBHMknPmWe9wuN3eRAJ5qRQFKt63ppAx4SjmeMSj4UAqvb",
  "key23": "5f4vHrq3o8AxAnEfQvCTqzpjPgk9RDzTyvC1YL511H1SstF2XGmsvSiThLKZgw4tt3GyNsSKKoy7yLEhs3WXBkRD",
  "key24": "BPRYpHmrDm6XYcXCwrUvzreXYB6Ymu7bFpAwqfESjPTEoF4DR5E9k9NrPw2qQqXx58PLdGRGCrvwLu4UMNzLcMo",
  "key25": "4m1YXpUkysMSigkoLTKsjjE8aTF3nyNgw7HsoZc2j3mixnuJ8cM37hyXJXYSPmV3gknYyHvbr59zX7XUiDMFkf79"
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
