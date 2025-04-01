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
    "4qV9qa8ccLkCUSm8qb3bBxJiERWa6Tqg8qPj8gp2YgLwVnWcE1azNH954LcS3abB2yYXjqAnftRpfikfcEkJcByh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gQdUkXDeSt2RoKK3UyFJwXrhsmnihSMFKGw8zrCUobiYm8iu5kEM3u3yf9KCNGmw6fr6ZFJTfVpCoJ8URaB79h3",
  "key1": "AUz4EEB3zcmW3dC1FVSeYE3JwarPgCLDXiBomuQbVKkwwdUPmodhigoepiYVEaHCJfVkNAP4GyXQx1Q93iJ4L9a",
  "key2": "9sY85DfCGcHhSfNHxyGKiAR1kUp3qf2xyEnVXTXFWHpnYTU8or2grgWvqMF1npiDDHtshS4g4vcoST3HefFHTrL",
  "key3": "3JhbRDsfuT8jae3BaquAou5jdosSdrBgUui32bUuEoi66tFYkeLyjVzNfkMyNi7SzicKWSG6V8CCr2Kt5kBycjkx",
  "key4": "5qhutGpoLcPpEKTM2BLXQNeJUjiLeRdUiiMyauBWC73rb3S7VCEY7jJC5jrHwZQ8Y8jciEGkWy79unuXCHe2RKSz",
  "key5": "2HhhDkELPGoQ8vvu4eYnd5KesrC9591Dvp2rFCYZmoWKFLB9D8oJJ2t8s769AkJTnvJCxVWhFW8XNLYTi2wyGoMn",
  "key6": "38F6c4fkQVRHsz1qdU4Bg3XmipjLSXhkSAmjAaBHXotBqBKvuNwSEHnf8MZHJLWfS3MRbgHuxMUmyDYBLVMjj859",
  "key7": "3HNt2UEmkoCAaBKYrgg4Wv17eSrDQbv2N4sNRYXxUnSXDagsQHT2yk7mZpDzc3tc9fMH3VapXBPZo2uf7XeUUsG1",
  "key8": "5jQt6Aahpu3DcrNnoHZ7aopLuxD9W4DJ2gq4mZrCwYrswn9S5Nvyuu9UH8nb4zDYEc5ZsKf7mgqXNUiS1qFw16Xm",
  "key9": "2XWnAakrfVkB42cpq73XmhGetTkqyQLM7owuxBo7ZTbpE2kkmRNmMLDF7E3noy3uGmy5KGbxHPkC355iXtBurdPd",
  "key10": "5dYkgcnthyx3dKAiKHoPPSBPeAuxmfe2S3qXG9PjomAG6BPimGdGnBJs4PyCdzom1W3pT1svngGD7wkQqboUdgf",
  "key11": "3KMgszpMsv6nWGDNFMiPADr6hZSndno6wGh37ZV3SMdnh2ESussVfxxCurHxKNMBxT3Cx2MAv8ZxP7mHu7v9jB3N",
  "key12": "BcWJgyPDUtgdXKXTmfCSoXT86mVgu5vf1DUrnDQseLR4SL6Nxx8kwrc2NdcXULXz9mkXV4uenokktf8kAuNpCB6",
  "key13": "oaub3i6bk5voXYoCYc8h2GgvNmWkzaoeiKVKo6ZZcuE5Y6KDo2VZ4QoN22zTvDaYtvSCACsc5LH5zuGm3du3rNU",
  "key14": "4eaXWpMQpgqCdcKXiaApXdsEperKPy1SswaoX8RFLApM2Qkxzu3C7UaoXeE6a2maZeVeLsFW2PGfbUubpU3Hn9zn",
  "key15": "4wPXWh6kn5Qmjhcoo5Hph4SxSJ1j7kMNGD7cRveVQpNGutEsjrrH5gux9TKLpx34iJbzAmTZcApnEVyhSmqRVTh2",
  "key16": "65DD8p6xq22Tv6FtEPezxCC4svbuYk9HQFq7qNSbspDPNVZEzRJLnoX2v9P716p2E6NYxEL5Y1dkZcByJani5GAh",
  "key17": "3vVpDHF38o91uHx3GFtTevAQkiM2z66J1ChdsnCXtNzWBdHZdVPGni49U1xT9Uvp1DszhVcXyFbbSqGUiDLVMmz1",
  "key18": "2PLzcJapoWQumBFv8itv9KpHghKKZNayStDHFM6yzWE52VEL5wuMBXjkHv4QdbUya92oc3xSeVdJFjVJgn4VhU2P",
  "key19": "3CeiVhJhbRxeUiN3B4ETww1qyWyEBdKuA8feRZwFmwqfgJ1ZhNvhtLGeyBE6ax4cT7M1UHvGbRkeWzTQyGeLY7Hc",
  "key20": "5fdh9tgXSZiA1SA4t2eQ4wiqzSDfLDJAM2Sbqqhd51ZiBML5aVeHGsjNhK2r6A8HjAPWtMhMwKb2PSUuoTv5znKW",
  "key21": "2SoficrTPNybxANtPW4bFDZ7eq9xVC9icMi2QydNkNxu1RGGSWCn23YD4kdqMBmuPgZEJcxcwtVbib4kF9yJETzp",
  "key22": "4oRWMRyVMP1okof6x1VeGCeazWJEz35sk62LJuzQbN1qbQG3ThkVygRLMBbneTJZaKeeW1dNRbJ9Ay7Dw8H8W7Qh",
  "key23": "5BCaSh7bzzDNjsgN5zGYjAZkLQs9XNwgnYFWGJ9ciLB6PytknmQiKDMbT2t2FSsDZn5qcpZMPZfNd6QkJJTvXAfq",
  "key24": "3cAhwWcbYFpq8UCNxcHR3kTVf3FyZNvUGXGJZzReEDPLH6UmLfkdPCXXR9wSqvYCKwzDXw69FuiFKG3JThCGPrHP",
  "key25": "5vjZZYTS5N5Go2xVxaHEx4AHAxLDxLGJZBL6hFxvj8cnbVwRtCBM3zuGamvtSmkxStRBeiHCRWu13Rc7KMhs9riH",
  "key26": "3FLZy83avzJnPFLR6W9cGXsGX1Qcp2xPqWQE7u6tYWQAUEUCJJAE4aC9MiwFhSFL5ffWsWkVpLtoTmNuhrXXGXYJ",
  "key27": "3Tq2crA9Sxr1hs7WNWoE44MukNP2MBFJ3gQ48Bk5ZpaAAzYxVHQNv8rQwDSx3qeBhcvh4YkkbZ5rJ2isppeKrRFQ",
  "key28": "5QDsHTPdcSJucjSGWFBCwzAGbi5zwkiECoMwLsy4yHmbVrKLfpQRZbVVEshHzQgNA6ZAwgFR4G8npJT6VpFV1wAA",
  "key29": "2pVNRPRGxDrwzNcpXFdLQ954XhT2tPYPTqGegP41k95yiSSG5AzJ9NpVDJWtS8bdHvg6PXC8KeZVvEsXLjMc9PpJ",
  "key30": "TVnM7B8RY1KCGU992jNPCHgUn2gdUgzs3v8b4bSnZZRhWsB322JT2PwynziU9LFB1xAfDB66Qsu6bJm4kRzX3Ke",
  "key31": "27n4T5nVbUVYYe98F4QLzvtkRNndpV7gUi3SchSKPqwGZtn8Us2UQq21KwQ8vemfyoP9WQauHxqRxsTHtkgxBpSU",
  "key32": "3BP4WuL8miRwMx1zXT24h6oyQkw6dC6o8cDLsvzjuRnZp8ACgRdjriCLUemYTrR2YQQqfLak2hLGzzGAv8zfwkCJ",
  "key33": "kUuSdRRVoo2FU7XXWqyU4g1EWGK86KbPYinmroiLXr1EuByxDW7NJ9qhxQ8Qe7rFQGbCtR3erX6yed49VSimWxm"
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
