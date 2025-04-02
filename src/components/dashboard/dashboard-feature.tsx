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
    "FrLZZqyuaDwg3jX26BwJtM2JMednHubVtPog6TAE8v1vgqtWxt48CdWscYnXoXfARFdRL52h4TFhnCpzY2mun4x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tBuc9inorM32xi75G4qs1izAa553VD3xieFXzdKfMvwrZvFkNmLAdggH8apNtTUS1ktiZA6Xd4mtgqGvUVYsy3w",
  "key1": "3ohVeagRZ4MPAPv9CZZjywaeUHhyuUrC4hs2XppUBm6Jsj1XFcumXfZfSbK2sU4TMn87DwCdvaFT3tv3hmcKK9xw",
  "key2": "4epdqoy6gEbAmidjuL1e8dGBmk3NsE6AQ1bZqu7tbANWef6WCCqXJJC29PUsaitGDc3VFBAnKfJxxum8M76G5Z6D",
  "key3": "5WxNvJ5CQaXvavFf1uN2iYru1yBVMqbxZtG5Xjwrqu9Sd1zTLcLjkvBf3QGmRBxPcUSDXCVoz9t1rDjwC7QsuF8N",
  "key4": "3QLwLV14bFz1mXJShDV6Es7dUAz84BVUDCQ2ng6PGFK5X8c8fMthRzar7zz3CWqF9fsuyHwWwPiPrVJcsTzqjyim",
  "key5": "3pz6UPPNWuU6juA49EemGLVBxHbD7wNzjdt6tLxzSvKUie4zfhydWDRqfytC7s1CoL6ogv92kDnQxWzoMDzuk7a3",
  "key6": "3do89KcEeYceeTTx76MKKTXjgfNUWj6sprFZcDihJiaTcUAwYn4rkTTRowqvdvZzQhiYQAGj7TNLG69QqYNMyHGD",
  "key7": "3kJrPRbxPAGyFagPpMXoE3DSm5jeex9qWf5WoKMV12YuYdaw7T18CjTupMYyS4ZtPemujk163U77QVntRX6tvsq4",
  "key8": "3koi7pcSi3zMLYq5EqAM3xTMDrtidyGpXEsSunJcRuDkchya5f1ZcLVLqoCovZpBSPbzB5bkpyitvvTehnrD14VC",
  "key9": "4Uzbvw2ZY9J1pTLJaApmu5ebBKxFT9m68ugXXhWsTzp4C1zWHcNkb89NGrtt3KyycdzVc4CKTx6UWdNSedra6vrJ",
  "key10": "517Xf4QbFRK79JFJQbucvZurErcfG1vVRfoNWkJdbhEG3DS7BjtythEDTqmqGmbfpCgvGCDorpcj3xRyM3vBmMQS",
  "key11": "5U9MCnby1gsCMjeTm2EcLZxwwM6i91j5WSewpJQTyfwshjrFcfNBxM6f9HX67EoSznadLkxsbQgzvyFS7xbQdw95",
  "key12": "34dWKLSx1s2BtypSZ15HiN5GJTEVWmeD463cxzEnSAYq9MFtBT3RiAwfMhS9FUKVF2ykfttXWeEFrVGCvNYnRiuE",
  "key13": "5Pn1uSrM1bbrV1p3z71QFmzGBFuDc2JwRSLHFq1Ya9gz5Y4RxtDLM3ysdgRX4BJUMt6RzGTN5NV6bR5k2q6d4BTE",
  "key14": "4PJttUjEEDSPU9brtuAAMMyLgeRQ4SNucFhtM733LkrL9hi4F5uosiYMUzRcdkqkjQSwX4e57JeavK6sPNhm2Mu7",
  "key15": "3hhBj25r3TPPjQFHRSo5Zx17FiJebLZXHLsw4F93LoQYdUWuipkW2249vem4VfachQb4LtoZVzgsp59E6GPXAtXE",
  "key16": "4x2eueuMwVVzkeoNNAaEzAD9nxG5ApiFQtN3PxMNx3SR4XvXwc1bfQJsQe7wX3h8rnQ9R3WSzXm1c75VRQx5mK7E",
  "key17": "5nRtUJzkxiiMxL2KgJVFpqzCWRvJGH91kxzQumZGDrx7yhWNpuJsSFLDskUNZH4waeeHodxJ3Vjbm3fJ8LZ5ixXF",
  "key18": "65sXyLu5efHitM8WNqRTDR6VvZwbJV3VRzm4jeyV47vbk5PdL9fPxocBtmBh1NAhy1BP3UR59N9Dp1akESFGqbuq",
  "key19": "31cWDwAG65ZJUYBtgbZ6Z1yWCs4FzrM1z2kHpjGBxvAfSd2DcVVoXgHuq5DrpEhHL5fn8qDwAqx13sYWRnrav3Vo",
  "key20": "3KEz6SSC4h4TGrMDQLmCJVPmmPX651D2BA3wbu9hgPT2QNqWRaEHuRghmrhBuA74Hm3SWqp8USBsP1WpQX4A4fw5",
  "key21": "HQxcdGfhcHD8ckgXrFLR56V1uGKTHWZXZ2G4Ek5T4Z9WVKfbW842S7SWfeiEYUy1wiiQVqH3K21GwrtXPVnfnKT",
  "key22": "5SihwWRY3xFVzczVW6jCiShRZuAL6HiZDbyv1xdKMHVxhziz7MkXa9MTyteJfgGUQG9bacLbWJDDKP7wr3BSYCpx",
  "key23": "5qRcoLTL8kwvj2ypa6HNFeHVNEfbQWAjogia37jKP7F6eecvZgmRGEdnrtbbRggV1wGYVQyt78xGE8bMqtsfr93s",
  "key24": "39JDsUBrvNZzHMdMbZaawdeMfkGvjiywGhL3CRtZ9oTMkmnQPWbp2y4R8CHqQUMPPDqxxv5YSErxupdwKdpHsD9s",
  "key25": "dWmUuQw8LxfyD6vbvVDBHy4QcaqqxYSiU9AfTxRftP8MqXpJDUS4MLcShLJrkrLKEDgn1Gxu7Ji7u1uFBtzd9pG",
  "key26": "2h7S9VBsh6R3XoAvF2JB5FXcRSr4upV36K1vBR6YHEKLSW1ZbXj2pMaK2bKjnqJCYXexDdUDGFDs4nZKouZb7MjB",
  "key27": "3Eynkscbr5PGQ6vq5cHvqrh63TnRjZgcC2DW2dxgvC2SgMNdMNtaFXmjnLJvfuL7tRqSJ39nL2vDtLBQFGUP7vU7",
  "key28": "4CHY4HEzRAz34PRnAJcRcpjLLJrNPrLobh8CXb4gxh4dJysf1ehddiFYMQJaM57oGtBuSCrsdzAN82bc4WAyNxa6",
  "key29": "4a2KN7U2LaHJ4ngWqEBWEu6msH8tKMXx2iD4HmGRuKPFMmh7gfKgqbgmyQr4FkcK3jvk1vcxVES1gkGiPtk7zR1M",
  "key30": "25vwjpSspDnki78sLGZB6UGX55jqdJRHSTSj2DJ5mfeSgWDsChabCroErY4fxDcL9NghABPNkbHkkNNk3ue3SExi",
  "key31": "4un8v69LibWZHeT4yKowemG6e1bdoRXf8ps5Mnz8ZEioYssb9GLoPYn8Gm5DyVcrSkUpdFriyz7SEZqeGyfgT9qp"
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
