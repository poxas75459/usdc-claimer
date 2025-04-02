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
    "49tKzJHyqBjw43ZpzrPUffA53dTq4ZYJmcUcTGDDuE782HbtfpreENpbWKRjd8UTtB3dUUrahVWrkTzkeBewXyur"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PLKtFH2LVbCxJo6mUFAxncuqxvndvQZNrB6FFzj5P1j45ABidB5KVWYLVVH4uMvZm9DfGuMJymMk8Ao1rdy58tK",
  "key1": "28RKC86aGrjTpRTfJ91jK82Wqf3yXiESa49P2xRPQDNiJxnn4d2HifK8vsD8SgdHFYsJwXyhCtCr5tKreWY4r28B",
  "key2": "67b3W1zjecREvSsfyt8aK8qJy2E7n7xHJcyLAxfrRC4CoGvu74pdeCk48VqMBduEDqiyfmaSJFmfoSAvZ6WzyuEA",
  "key3": "2cexGpwrd8Rbabgdt9iCELVar96du7Z4x9R6onMNDSUKWHMZZafdY2BaEwDsfe41SKVGUKRHuRzKT6XrTBsAK3fQ",
  "key4": "4dDq18JJsZNDM9Lr752e7w7hiQyUqfAtxQ3iLJ3ngKyuDNEKRiayZweMZrBQPDa8JSMWcqZafCjMSc1vjeMn2dN",
  "key5": "39Rm9hyc8EsqFaFAJC8SR5NpZFxBG3qmjpEdeuv3DPLvfga65XujnnNjA9eQUzx4Coe53g6SYrVQBzFCbur1x8Br",
  "key6": "5nn6QL5dtKUVZdvgLqfXUFFEpxopfcK26hxpxC8EB2YsLzAUibRFYHmtncVbgagvvB8je7zpwK4Nozu5p8jDXFni",
  "key7": "55WEzbdskYxcSaGGZvFzMuQSx8i886sjAPfs2bidwSYEqV1QFmvSpU9MRYBiTmUDvsKP8JP3Y1XiFATduscVG2Ks",
  "key8": "5aDfAbzTP7sE1k81euJBgaSVeqzt1DfnDX4uFMUo24NKFfA5gGs3RkX2PjbcEzxu1vAvTTsiN33xuT3dYjJGoqe4",
  "key9": "4gtmjNvKrEYn5U1cfi4ZLuMLsYaCWCEavsXghq17Uxh7zgYAfEf2nPgRkH1GsHTt24QxTpxrW4iKLcY6mmsuS5Xd",
  "key10": "2WseQUAS5JjgehXQWQMYjSMuVav1gjeTdh49pJnHNyhyz8N9zWTHthWCoP5spC7m91NAbHq1ukJLNpY3jNG1fQYR",
  "key11": "JiyqvcoRThJFtmeu6PtaY9rfmkHaspMRyrJj7rJKLspYohCimiWqAMQkyeRboyK1WmH8WwwRTVEDkpouH2iagnB",
  "key12": "5mqL2yspway2VHXQ7Fom3dhYy5WmBHhHPEiZNgm4jrPX3wyj3ArmGQs1utapZoQWsHEMzQHSAWFoj6VCiZksoKZ5",
  "key13": "5GR36uzf4Ye7vMkrzpM4hdVNTDrpNtEKZjsRFKT5a8kbBK3FW1X8odb9vKEXBtqhx8szJSTdKeEtaAAmn7FPU9tA",
  "key14": "2G2WWtHMMpwta5fLUs87ZePzSLMStnPdD89LaaAstm9xE56cFPu3Bi4daNTzKBoaDddJcFLwWELvj31t9EC8Xc5s",
  "key15": "3NiBSYunVWximW81vUDfsTFDBBcbHhDQjj5T1MAnK7EP3eSXqgcA1nJCQEojpTfYZq2AenvxGd8MjS8q64KmsuCg",
  "key16": "2jGufu7mh6otw5xb26MuzKUPEWQE1pcAJU45xo81rC4a88fwdhpeLZiaaCSQ9u3HmZLFEdVPiGMrxUi4HXPDzV1D",
  "key17": "ucxrUVT6nW812h6qnS6dnM8bg6wZeUrtbuBQ84wQt9G14km36HF2umxNuQVhNGSkYEwhHfJDgxnjAFqYf1WYdfe",
  "key18": "3Z4yVktpuxQppUurkezrkdfGYZG8VCxgdAJTSyJWmY2qG5xciqqeiAR5rSrcwyzAc2V39hz6aSspxBnmT8vMLaiQ",
  "key19": "5ML8jn8WQt75D7fsXHz2KmwfLTo2uhrasSDaY2sMGso2r3P5H8xFzx2KoG6DrPVvyU8V5HjsC8aE7C2h1kK55VHh",
  "key20": "4gMgAaCDbeKdtd398CiL8YnuqaCLhqHHPA958QvehAH2v8XMwnZNtKHWSvs2VGWrfhcSzQwGufkgSvA7WToFv7rg",
  "key21": "35y42T2JJajHKtLf2KTN2DLR3K71gB4zEHTpKTzcVotcLCSQT95decGyvhuDgRQcC4ro8fS4Jabn9mkkn8ii8NgY",
  "key22": "3frA3DMWA6VFze9MTBkLfkJW72o3dxdjuprP3J6S71wjkjasWPnrMFBpKypD1PjFg9az8SiEKcKwtQ9rWyngYEW7",
  "key23": "5Jh2evJdcjDTGB3HLUPQsgSWrt2n1Mb2XD2CoZJzc6PD2NbHshuRf3gxiEMP7CoNtVUqWrQTukzFixsVbCbQEdc2",
  "key24": "58TvJ9XcFoDtx8ne5YzytRpCPHj2eXcprh9D7EqWP9mreXvcuqGBAoNZjt6ShohTncuZ4gwtB4jcyn8DKmaEQPFi",
  "key25": "3J43xbjprRd4uaa1wsce14J8pDNcidoVys9bX1B2tbcr4ZNRZADjDww5yJTP8uN74WXrqQFVjULgvCgwryd5AWjB",
  "key26": "3Cmncgu5wpCdvEe78P2E45U2P2DUfhDJYKRFcPV8mMppwqmG7tABdZEs2xX6hgCNjqvcRPkkCRJmYeX29wwTkWT2",
  "key27": "5gyABNddWXo4UeEEc71R8B8zgsRHGs7k96N8x56JTjcyjFdWZgtbwTB54E6yorzFC8pM8cPmKQsbPSLWAj2iUxbo",
  "key28": "2J6CsszxSTGVZ4RAMbw9ZsShaqCBwumHm23rTV84MbqfQgeHDTY2M1qLACDZRHU7wAddxuPato1iqwoXhZTDbe9m",
  "key29": "463gS6H7YbUx3nfByUYAkbYvbnw1FBpHV7CAmzGY2vMEKzurjpvgm4J3VqXUMMD7YsZMBqynkMfxbRQNsbdQN2cM"
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
