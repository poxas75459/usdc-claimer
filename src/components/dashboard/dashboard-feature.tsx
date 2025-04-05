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
    "5GqLHxjNddpYVdHKKVoq3MZaWsexZtQ2hnPsixsdnJevJdiVdmQzxkZTYkH3eKqfacAxhRFFKbCjGnbqjZHwCJ4e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nA5Nm6LZYTdFp4RfvYn8QPuk7Fr8TFZzPkdxewUnPxPuuhFZ6bvb5U253ENsdxLwXRvxusfHryd7g3ybLtSKqp8",
  "key1": "5MHmoBokUXmoWx6GwKJNyNMQBhggwSW1gxTbeoAyZ2MkGcDBvZyRKtjBW4SW69UJxzgN8bM9iPMa4z5Nom3rLmDb",
  "key2": "2pnDdCgDxor5yyuJSJLmpCNGmFds2TVSjMBaft1mmH7RPQYXnn9HJxkFekPgK4GZ87v7PLJrDLDMBeiReTuRiVyD",
  "key3": "5XEqJGRWAfskKqgjEKwsUco1DRBTjGVtDJ5kgrzLpcKsEzWdzKsL6PFX1MbsD1cwCfEftgGxVc17v2MPNTFdYL9o",
  "key4": "3LEfkKAxLWnvN1HAnYVsKYSMnm6Uh4szJxpYaZqQsRv2PQjMeg9pP91CANsiGKfr13tFhEXcvkajLiKiJ4HAEwQn",
  "key5": "4Gh2YiWi3iEsdx6mvxMfu4LpRrUigax2h7HBHgtq3UR13ig72rfDkqS2Mu3ysBybAhbXN542vGXdTyakgSnRSz8k",
  "key6": "489A5aLu78mVtGXPDroEUaDoDrKnCZtPFEaaeLpSWhg3pFLyDaRVJJ6PR5d4QZdLWx9vLBkrzowXMsffSmrRe8cj",
  "key7": "2imHHeBFu2mKsRGwE5NgfWtkBibZCHFvRWEGwNS7n3etXsk1vy6sVtV4maFcdq4AWvyo6UEcQf6P6pZBhT7rwVSL",
  "key8": "29qciHJeH44GQF3adixJNfeVZMzSymz17hde9fuoUxw5WstsVPAaKWSLR9K5YdiBLFpC41dj3kxqM767c823vSNn",
  "key9": "2Yfzx5jYn5H85eUtxDeZrXvRGpHg1akuCLgZH1VrPRYUAkLN8FQ1G9kZzhT59LU9ygmKDTUh1sB1JYkCA3r8Gnww",
  "key10": "3xYf858XDuUfJkeT55sebffWdwinZ4eMMCkEavhEgC7xk2WkxjBYSqfgpANUaZNfLrRcZEWha2N5HdWivaFQBAmX",
  "key11": "21R1c5vFst68wndYGeW8WBMcPpexn8YsJYTCQ6mueH1Fb6SnfkDvtia2tgia3GEW2anz9f6KgRN43qCtzrv622SG",
  "key12": "38i4oe5D4wW7cNqNwjF1NcF4emHC3jyDYGPg6NRXnfSnmBAGsSacRWw3fzWTgu34G37qXwkeAPn6Pq4UhkTfrwJu",
  "key13": "3W2W5hSAHDPiBVrMoCqWBVcAdC5dV7JX949nHA6msH5stGJvfcEduBYUPGtTpeEn6Tv5X6TJQPz7asBaF9BQNJHN",
  "key14": "4Hp6kqHjTmecquoQKh4V5wKPJuo4ywvNQVEdjw5fzkZFc2ThfEpNssiUNRDG3khdqbxhmxqRDxauu8iuo9aMS5fd",
  "key15": "aaUR6dSYBW1fWG5yBWH3DdUMEKheKaHTGfFD8y9qbYveRir54H1BxqJCxHXMNMyBvABspHCPzxSGuaV2AA6kNJk",
  "key16": "2P12ByMoL5EEfG16GXTiMxGPWkFMpFfjssxfgeXXubqebED7MqfUGcvsTMA9GTYh7UMaMQRqo7AW5tdyo263KWws",
  "key17": "3bTXmgk9v2PYi2bVSiPBzwQzx2eCW2NEJd9D5BAc4VbmPnEpPePGwsoL42ApJMoXGL8eKk9BwGA3TyGjvWWmMxvR",
  "key18": "5YNpSPcCUH1xkXeJ74pbJrvN1KdgtkMYq17PA2wd7fGixydcE85bHsisof3WUUJawr7fgaegHFQHrGABjhBfWu3T",
  "key19": "4jVRJJ8nfpYtV4D6b2X1FKeJTppzuCYWCzsfdxMoFMfr3uLkrUfNKAXzi4wXraN1hyjLiLc41kmLgoob145k8g2Y",
  "key20": "3dZgo7UWpxSF4iq76CgMNm4SvnA2EVmiqrpA4s4XWs6FDfoQ3E6G5qypn7NWBZaFNiVfxDiAwemhNG8u2DqrUErv",
  "key21": "JFmQy9NiJvfAG7nXm71Dc3YwVBUfyg3e7X47d3K4k3tNAJCnERWFW48xxjg3jELgY9yxqHE3FtwgyLoaFiQFBh3",
  "key22": "3uwJhVjnTC7YF6nzKyYzpE1BB5UyFf8WRwLaqtJcysSLfXLwYpG154zJ5t98rZ2cQri7GP4mrkxrtKfKzskntbZj",
  "key23": "51oCaM59e3R9Bpm8ymVgeRhfHimXbkgc4X4ATM3xAnwCA7qedBxQ2eTzhzyXBwrmMBitndTnALVRWz15kiRDHxNE",
  "key24": "2eRhXVYXJf2XCZECyhTdHmskAULLanApo48drGtczzA4YpbLTuhTBNdYw7wvPUCoACPWPEEL4vV2qVdE8gVh7cqM",
  "key25": "22r35AjuLZEFnBJTXr14aWsuAcgACb71GCT53URUVGiXPoQoRkPuV7s4PVMAvfqdMxSMchLc7QFFG5RBbovKpXXA",
  "key26": "oGi4GjW2GyYgYz5dB1xcQraF86NPDBChCT6k1W5nrj8yxAkiqhou85bd5usYoAZWUjqUG3pne8DU2Rm6sDNrDxR",
  "key27": "2J8nvfoEJAUTLgQGQir6MnQ5qW3DJJxgzhEuJwthEzUjsx9GFZcfdTviS1iEcLdCkRFTAaDAufsgv1cA6ydVqLQV",
  "key28": "2z299evTKaeCADd64vM3sDBKBYeEKMqKCwk2MBvUy6vB7PydH8sLoEnTpY1zNEbqfBsU6rRBWnU7f4fHZY9ajjuW",
  "key29": "37oZhGYYRwB1RCwVwAgrtpbzYtRnnBeRQaqaqiuJHKUHA42EM3XYuyER8GRqb7etGqtFkWD3sbJURYv2dHRfgfZF"
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
