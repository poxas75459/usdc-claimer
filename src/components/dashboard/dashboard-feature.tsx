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
    "2QXjArj7iHxDAAECBy6yKWw3VpnCer83X7gTiyfxuss9jKAEZPmwHe72bwTiJbXj8SRN9x7RxFzkR77pdZuebus9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wEY2UrSHDppZvD1PL4dSUqUef3MRKHyFZ49L5pUKzifknh2eMBaXDmw67Ut3XESpSccwYQ3BzRs9Vov2pVh45NA",
  "key1": "3ogqFicZ8mynNFT81P9s7mfSPuD568qEyCNYdrqRvcSwELjMcgzFfHUGVjcambW1WW1rE7tKQmgQTShdE54CqPnb",
  "key2": "4mtCGHJWCoo64zoMTdecY1cgJpoFdSkLcc2ApNaRhq75cun5Ly1tAAR37BYRGxK2cuheHJ87p4kLSCNBDoewqssF",
  "key3": "2JQgEkNWCVYi7QTUZHgPKYWVnVMnG7SsBUnLmCVbQyjViP6K7ZrN57LhAouc8x6BYVfyZrSFQpKNpURvH2FQgAsZ",
  "key4": "5bSzmiPi86S58Kw3uVf7gm3SShpngcNYXRg7dwqEerWYe8wvXBebuJmfmovHauBvHKPdMd5Pn49VboB9TMcS2UDj",
  "key5": "5K7KYURazgUWL4RBHUuV3uDG3Dd2tXAJg99c5vDtxhyWqLD14UNQ6jfwFgeuR1i8wqgc8n1PLP8P2rFf6ejkA7uo",
  "key6": "gwMX8JgDK1Lj92hM1vAFhfhDWtmG28tw6Ch7qww5sfycJYy3pvs6c8nfMF3HUB5cSXfNPDaCgGror7BjKsoKMPd",
  "key7": "32KTuUdFjnBRMEaL8CbM6mWNaHHvpFj668ZrM8RhrMbo1h4AjZN8CKDU7Xyh1fi15RPYtqBWQ44cXpmbQEYM3F7C",
  "key8": "3y8b4v6XZCPqpA2GWJ3LQJKxaMQg1Rd9PUTSzBge6XHubprJv6N7ktXpdMrZrDc7CDSQM2RMydszUyvpn7hY8fVL",
  "key9": "4Xp5Yg9sKzjHStb3qgG7qewT2As9NEC2HwC9D7jnHG8BbVQ2Fq4G2fqtreCxxeMkxg23XDpWry26adGcaKgdiBF2",
  "key10": "4Su7w3hfGvc8gajRt77ffgVzt9qmN2xwmKBPKYnMRakGPm8R3zEbbgQtPwTcCvL2FNY2DTCSr9Q3cYjnLHqHg3x8",
  "key11": "3964y8angC6R5mAiZ7YtoCTQgJnSJsArf9JcQ2rfXZM8bX8zTSUaopjzFvbjpDuBWkewijChZm9vQRHhiyt3FLXV",
  "key12": "5gYgvPRvTTHN2FMuvxkXy7gjxLHvmSrX7vk6fdLNvapQ9F42Y1L6hVxmosMwXwPKNVqsFRzzVkx4Vcu692L1PGAF",
  "key13": "3GbXZnpx12t7zCZ8kpLkoxtKzV7jpNVb8tE3XuBFwYdpM1AeBnFvvfNfGciBLkRMoTUU6gswx2J1wmmTMtPQMnUh",
  "key14": "5UPsjS6x896U4q1QXQ8Ai4auKmkDFPjSAPg5gVXf4Lg4sWXRbyHQJaGyWXJxjEcqcqigLBXSkugavx9c2doJyDfD",
  "key15": "5G5kqhq4MFhXJPEum5W7tAVuec2JCgQz9atW2xPZgQZn634n613mfiboWkETseUozVDQwJToWMCHG4RqBLTBGTGe",
  "key16": "epvd78Jn9mxND7PirJtaiTcioj3seAUCWuuNNb2yQJfoGb946iYFgheEcB5iDcGnTTK596LvG9x9RLxeSK3dZgv",
  "key17": "2QHAZinCgSCgJrSs8nui7QifXCWYJpBnmMQaC5k4qwu1N1W62s5QRSaS7MTqMn4FmupZJTbfQUinKFhzcpJMQzcK",
  "key18": "QAKBBMg94YMwVvFzJxiThMyLuR38PUYkmosSX35Q57Uei3WcMQBzmkXe9MryH3RWhhZgGKbfVhcM2zUEgrphrpp",
  "key19": "49e3dQG3ndYxBXCFHwMQnsSnEifjETQnuZWqtQp9mwGjo5ih9uwoNg5i24XmzAghhR9QWMBEgHsyc1v9gEjzt6Dk",
  "key20": "4uBS7G5ZFKTownpPqQQvrFzwafhZFnboRvuUFPwap2hdMjkW6MooUoFH43nxyPXVKoNtySu3vB4BnoDLZC9eMpbg",
  "key21": "3QSZjTmvYKjw8X7rz1Kmqtqwmw6qwV2WBdNmMu9UZEcpwdv1oNAGaYotUiKUstLaJRJhC5VSAFfam4f22eNEEk9U",
  "key22": "ahkCD4LsngTmG1nc3Tm2HobuWSXKmVRpqao3EESKJVW8tosq6hoeQLN5NUtz3AmuYjB1q795mjgfajxJJ7haCJ7",
  "key23": "5v7aRQ7FpPvwGz12AYgYVrPpPsvYZaxCv7sNiRpny41fhpn2A748C2ZGAPRX1zCyukqk9WAWFREumDwNqFhbzGzx",
  "key24": "37FocvfEoNMxR3ZSVzyrDEKeXDUj2Pv2NJzJL93t6sB8aHUC34ce6wNGhvqFtkRGkTCd3NQDgJa2y8vzApGCvR8V",
  "key25": "5BDHd9D8qxsncRYZp5wp1AAL9mmtEBv1JHwTepSP3d7fRc1CYDrdsvd2P4yyueVH9Guze13ZMdAbrXFRWTT2xxtp",
  "key26": "3YuWJ2DewBw21vi89H5zSqpyXKpfBWDYzi2jMD5GPLHdjyxmd6q2QijZ2GTABr9Pv3TgbuiG2n1Me6jRjAxyu17P",
  "key27": "4dAQuMDzbEvfGoPkkeVYiDmenPMMTuqobJirZBcmy4G2tPEAQonRcQGUyceBvqWZT25wNLxgaqEZeHC8WNaN9Fjw",
  "key28": "5w4Xtp98SeC89XCsusQycwGkuNf6XsfwGWvWUs4YaNffUUYc7HCMBKmHarM2GG8woZkNPpWuZPA9fi7xQK1uGS4D"
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
