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
    "3ohsrQTohhdeuCak5GKbWwdNnsYxHQUKL3YbYb3wt8ViM1ScdmB62JiZUCHcomx8aWyXyRzT683RCPTmo7TA8DHU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NC5HyS289pF67xemD5nMdQAQ4GTenawyGiUUwdXLVHHXWaoBZPvhbbfXdbY76d52Spcu3BnenY6A7oZqeB13Esy",
  "key1": "5Y7RDAUDnpwZ518cHBapFczscFiGUD2u34kkqnPXWjvwrw7Pp22rEE3jxCGVSWeuZfu7TGcHGXwS33Wcan5rSmXp",
  "key2": "5pS9p4bz74ci9xRKvDm2fS2YpDuX2wGYVjf3k8tizHYJzb8vgFrzb9MmiKP5Pjzz4ggc2TEjBd1TbEtETtfMf3sM",
  "key3": "3C2q4hX2FMx2ZJNxmdaHT58Jm58c36Dqddy7D1K4FhUSrWy2ARHL6tdPcMhAS523AHR5vZrouSua4X5jDEVP43TH",
  "key4": "2jiZhRyoWpbPwjrwV4Qx3odye8ZjCEqNXNLKLTQhAAsfczVnz5WavLwQHcsuZBorbgHPKYiLfSyXnbrvuCas7VNX",
  "key5": "5YnUP3vLuJAiapBiqvdVRDuh2mh1wYZVQ28CRcpvugSuX91HxyC4tcdDUgE6iUAT4Zth5i4vVPCEergDTrgrT1oC",
  "key6": "FUiKAaN1gTHsRaNfjs9ySYNnt3SogBJPkhCcA54HWq1gj7GYUByiwUaBC3QWxT8gqQ9G2PVxE6KrgSuXu5oWQJC",
  "key7": "3UV95FWrysHZM3TyvunySJKz9x66QcxBpG9kfzq7kA86fBQ6wwmPk34MCW8Sdz914bJ357xpKkKwK8hCoVtoghLY",
  "key8": "4LAMQGrx41YMq4pGsAM3pDStcdu4RYYjgbeoxQtN5bDG4knag5vtMX2dsCnUyJN8RiebBwukct5bb7SAqp6qkqVT",
  "key9": "49dvP3xiC372HrrEkj3oDte78VxATyWVchbcpHN4h1UeN8y694Z96fDn2RiB5xexvpfUaREKLdhUgDKjNdq9oi98",
  "key10": "SrGFMJXVZ3xUm4KtA4uticNR66xHMt9YU32kyZUzYLPUEc3N7nDrPaWkk3CnYrXBscuKF3HExEUxEMe9qbfynYE",
  "key11": "4azSgKZhGB3sDhfBpW2T87VQEJPicxANZH2sorUG2MSEX6KtYMVHbiGvBezZzZArZLCWbTzWJyBgn3RGLHmcxetJ",
  "key12": "uMWTPUSpnFonmYyJ8zWn3t7yvtNSc9wbBezZSz8s8DWg1D62is2mzXRmR1QEsNZZ1sok5NzmzE2b5Tk2MGpTzCs",
  "key13": "4b9iPaVw4mJzwEp6sQitFPBsbnxh8zDxhDL5WHMJ46kPCK6yKn7gE3tUtpS4Uwq8vYvNGtmuYsvFV3HXQ8jMfBYA",
  "key14": "KQbVEahAoGJeHaN9Fuvp8t89phZQLMiuUMhTbpi8at7fvx9Mxj4xTf3aLkMYBgyku9VKAyS6NNex5EtgfdUkjud",
  "key15": "3NbBgTmJdwQCrtyhEub9FDNKv2worfR8ahRdQBeSVkiC7md6jbyotqRs4CPvSezUqKroPZni2dNvgMyebGC7onqy",
  "key16": "GKSpgtY84vyhFxMtQoaQAGXWTVz2mjp5cnVHECY5dEecvCbZvishuVjZZL7d8JKpk42eYhGa634oGXa9W8z3JPw",
  "key17": "2MT9fhoDyqWAvmabENkQWJFehYuFtBkQ2rZnqNi4TTfTbH1GtUJ1jayzM1fFeJQhX4vCX1MhQWHyNpspPmJdFrVH",
  "key18": "2ug5ZAftKt4M1vZRgpFfesaadKYjnNKA2QyaMxW3v64KS2oLT23EnkRFWUKNEp97s1sMJRtFmFZjf2QR8iqZL9PU",
  "key19": "3aXhKogRqV1HdMSA7xS3c6gJhvzS9iFJHbWtB8crj6mupf54in1XvKnCoX7d7kDcgKu3u4wd6nRmNaoc7YN5ftcn",
  "key20": "33azQ6k6CRVY1HcRf26Esvp1ZfGcWRMbjXQDs2vcwLPw67ymre8FrMfQZtQRchEQXKVGgQzYspSaF1swQhXc1tzN",
  "key21": "2DwMFQSkBBpBrUd8WksoC42NhsDCmZkNXVXxFJbeHghYqkGUDvxkUC9VdcTh7hYK8qXeyuyLvCDRcRo7wKX2dAzD",
  "key22": "62HCbK6xXZKjrXp2pwf4VC2JtzMbmtZ6YghNzDiEyJ1mqvGeCzKpcstd2cNSkfh58JkiVKr96sft1Qjg8i2jBx2V",
  "key23": "5G4p3oU1HBfR35nRCimZeKXZscuyBUY3pGwjHwFprTe924qdAxr5DotcvnasRXWvjYi76mRoqbSjH1aUqjCUZHXY",
  "key24": "4WXME8zGRG6khafN4n6Vqk968Wn8PbFzVkwaCp4FEThYKaXwMXLfwEFRFnp5psaTE8J4t9HgvF3NMChPv4shtsAT",
  "key25": "j4PTeinFZakk8HZkfrvurTWhM7frmDBDPErHcniadTZsGmRrvCVGej6criig1kEG5EL5oKnVkFyBthn96fpphbE",
  "key26": "4KB3NfaWvHotuTdpHXZo2SHshaZhN6eYc6meoVB3H7cX9yVUGpxoLEXFCwTfUV2S3bodCNiHYgEbAtNP59Voxqnn",
  "key27": "3qYqZmqH2dPfwnHjkHY1DBhZi5T2RidpwM2rQTUkgT3GLTka18QjCTeGvVULRxDCBMPhHbpw4RUYLiofogt8hb2D",
  "key28": "5nLMzxK3KvQsdiAZuxCieXtaBswAZaQSgxva2juz3RHmVScUvBS1yVEbigf6Bqnmx9dJNdissqiKR9EoNcweCGM4"
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
