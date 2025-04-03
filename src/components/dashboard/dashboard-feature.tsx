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
    "4JT3pHpcrG2mMuLmAhfeiwABRVJvjWCy6HwpC6JutUSoEf5eaCQ3jfiLGiP9zLXYtQjRHrZZZisRkTDyrhDXZ2VC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PfqqQibkwbiY9khC2D5MkVtGYFyAVBpkJpXbRiLPNetqemWaJQTLtkYKL9CZ9YEHuxvWZY62di4h5arQ3tY6BcU",
  "key1": "2enZbVFfT7S939zvKJ3p1QgRfxaWqcv7mRynx3qeZo2B9yGDPZNpWRRjEEFGD1Qpi36hrx4nXD7zS2xga96WYv1K",
  "key2": "3tnKBw29G96MADW39HcWHjkDuJhvcpqnc16887c1bMWgX59TNDL3RRV5TwHNr6o73WJxPTnZsXkXQFfaunnrKQ9R",
  "key3": "2LmaTmkLNnYjb1XqApncC4VwDLKVxMynpdTunWkmWRcx2ZmFak27sY61hUtkjQYKP4HRkxLMNc1175RG11tWtbmR",
  "key4": "3fHgYNCc9o3zWVekN3emXVuLb8CBiQDvaSGxCfmgzLfBVZ51bRoggEeGPWRqZ37SfPZN7H5uBRiQDyb1vyot3fQs",
  "key5": "4jFZyy4GSqCZQqf8Sm8w9AHiMRydTqQmA3r4RvyBH4oKcWcyygytuEJV5yMCRnTZ1xscrwBjcm9erivvBuLy5BPN",
  "key6": "2etyo2wfXfuoSgPxEZNBd7wfEbchL6QMpCNQzEf4ahgUSxnYXWPNJYi6uU41iJknFs5M3Sz95fNyn5eYMp4WpZdW",
  "key7": "3HkvbjEUkGKKsjVY5pr1vMBmKYgEAMMwjmfvxqeppsVVXtptvuSdKQD3Mv2dK9NVoxjYARncT1YKqiY1tMEmgoHb",
  "key8": "5NEUjiiy6zchrckjigjSrVzVB6v55jrt9vz8D6L7dSvQoUedxppDjZsxnBXPXVM5z8cDdnBEKUwnNFvTo3SFnZkf",
  "key9": "5GkW2RY5S9TXRMxrXpUVox4gs2yva5C5LbPWvwc2guXkd4m2Y6DeQ32RKSrNnZsmtfERmAGMyndJpSF9fVD5mPr2",
  "key10": "tg7RcjZZYRWQHHaREXY9PRWEBWtEsRX9n8rbz3ww6LXTQo5GLTdAQvZMNRA5SHsqHnxX44dBprc5FDVYqyr6EoA",
  "key11": "2qkkhNLiE9Gg7AgC4XKKqzm5E85Q1twFSaAQsoSsTorP1ix7uedPRH2iQcGzhcXBczomTsrzZwoNK1EFaYiBbCVX",
  "key12": "3KMuFqJuZ3G24ZvD2E3c7SWihmNZCN5GqQJX6Qv45Nq4v4c5w6WafthVSwZKg67Hr7bwvbrgKSt2DbS475AgH2Z3",
  "key13": "381YHbT5pp8LZHVUWwFM5PLkCPYaHXyL8LJWRMpiyNhizjV3tf3thkB3pm1z3a2DnAFrqNyC4VmtYjei4M8aD19z",
  "key14": "3QuCCRMjxiMckM2tvaTKTbxTFmgBngFW5nrUJekxANZfwzU6Hqv6n9i5Vv8EPL6KfK7jmjNZFEFRndjGbuT9ppsb",
  "key15": "4DnwSwJf51R18TKuyWnDZP2m2Au184qpPEsmLywFxvntxsdPpQymw7VMKvhokKzeU6KJ5GuZ23wApDbm9on2FbRf",
  "key16": "47hrDBEMqigubYQxELXmuzxchAY7YGS4WTnx4aHZt8xF9ztR6Wy5efLXionzVtjeNG68cMqYZT2wwyo8bLn215L2",
  "key17": "1e1Ti3yVgL25KxmUnEXBjh7cpLwrsa28ZwgiaRJNPGNqQm3nVi6ABj4UUQ1VvMio47rm4Ycfbhw3Hkr2sJaZ23R",
  "key18": "3ik3EdDxBMY2ucW58qBsLhMoqdPDWEc3NJ3GdFoYZYravNE8UAfAkqrB514MkMzPKxTdLzy2ja8MDBsUoo8GEYhQ",
  "key19": "4miNUm4vH8pRaYtLUPSKbK7WXsTrvxmb2AuyAqneUrYu5T5te7Bg9timQbP6RCb94aJGSfRS1EvgCNTBGecDURbr",
  "key20": "38PdnzqsPfjwKRJww7pPtgCgiQeksjp3kiQ2TJLezuRSoWu73SPdtokLbbua9uYriVPpbYhSaKaUct9yGPX58H4v",
  "key21": "3rRc7imRh5vhKB6pVdzBAWEEYBoWAWXK7AL1fdooBjbm32Baay9L9svzoAoZBjCrYxt926dz7cKNAZSnRgzaUPdt",
  "key22": "57sDcmwy8i7eGHDPCSm4z7iM4BQJma93XLUruKT178xc3iVMZJGdyae4g3Gak8JMvTocbMfyzL6sEJ74FtANNArU",
  "key23": "5fmgisBV1scJC8uTrAAUeSgL5NXSU85NmHmFxN5bxVVb3p4AcQQ746mAqFJEQJXQpNQXfJCSs39HXYEp2Y9rP6QC",
  "key24": "518BwLanENYvPTmdTCz8mgwRBYnz7Lb56hpT7b2nvyPf2FWEseATM6Veq9JG9uA9QRMowLe1ybAjHA1rA3Ch3htD",
  "key25": "3MTWZYrdzgBocU8czjToeqJs3uL28XdsC5TuJb7o6SGutWJkzdUUmjk6sdFM2RRAuW7RdDfzeqJScSb7wV4ZVXhM",
  "key26": "3LFCNV4hSqJc889W5pz73ZCpmSEM3RiZzJ1uS2GfnMtPpUi9eNxewR4y9JPoqHyDET5r1H57rKtsZg2WA3daDnrm",
  "key27": "jhkLxejGndHCffxJxJXwCc479BTgHdo2qs6KubCuvWnmDRFrvFVUpvN2woDkqQwtYW2Rzz4NLcuey2HsCoqW1Mp",
  "key28": "4xF8qHr6SmVxSV666dvMEGZ4hjQaE6gtHWSuTEuufo7JrDcpQgSLdxHPVYTtBUdcyM7xhBAhX2s62oBfMDWVYMGy",
  "key29": "4t6tu1rkY5niB225cMoWTs3s94vxHU94p3tNxvTFqj3wY6CiTm7nsGsz4GrCadkQcgkMSv8jYTz6CPosfeHqtkyS",
  "key30": "hnS3aSJ5tb4VKiTXLMBCbJASYwaLQJy5bTFztq4HexGmstPuu2VKzftJaBTQTR2uee7amXrfNP2Y3H152SfVTNP",
  "key31": "4SBo94FAespSDyZ6PnPQRG9jY8aUyDHmKoceRHYb4L43Nj3QbY3qFeV9AduiyXPdYiBggyjkUvjcE6bAg3BcLQqn",
  "key32": "2vUSpZCTLmS5W2cv7b4gYnT4wHH1f2aAhWyMPHDEgT1iJrCkmK1CPyzCiGpBxbUK6REQA29Ru7ZYbSjmAsPKwSji",
  "key33": "3284mN6vxtajDdTJQRKA9C3t1VEqUsEh8W5ujgNjD4gGYkA7P7dBCaQ6YWK9eny1BUAtsFHTFgYcr8SecwQKnm1e",
  "key34": "tW7jMVLrDEmfJSXJwGy8SHqwmVV7SDAmbiFRZpMWdzuY3GbkNEjNSraTxqVhBGibs2QxrePq2TadxzKusAS5Rkt",
  "key35": "4tNzpSUsd3eMToc5bfxH73ns3MopA284RgDSoxqNbWayGV6ZqLKuZbziej8Nywuur5SrymE3suTJYshxfTz8GKQs",
  "key36": "2ZbTGFDSbJaKESLzLvPHndeczrD6C7mq7N8Prj2xZuzs7yJX65BrWPrWfAWSUPQc2a72jmtWtcYUeRqv6FyqFhmS",
  "key37": "xkDCvzg4Fv58V4Su9xTZXzPnJWY7Ya5tUAkGXiFqsyZjpDjP634YwxYkS17vNk5gZPU7YPeY1mFPxBd6PVBs3Vy",
  "key38": "3SaRfC4gpYdemcWN6WceFA5Tm7YB8TGLbNEDpY8R5nEekeTxFMEkkSkSqjztCjc1BWqf3zTGNM1MTYbwS9AGHHF3",
  "key39": "scMsxJwRnDMhqTuyhv8GKKs2UStMQFN4o6Dfe9yJoHBRjb821JpqSzazitVyS19wovYR9cJNGypsgyU9T1Lihxo"
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
