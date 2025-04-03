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
    "3YBF7JcTtnZsvxcCAbpBQm5GNg212JjwueducoNXAsmtYkJrBm6nC2SXwjSeD5ERaFJEBPgsDUNp2egYGqxAQbp9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52XYB2mqQMawZsbg3krkmbUAx4KeE5GCSHsLdBApYi2aiWVkfemmoV5ktASjHVUSB8Kuqf4SmwefEaibvnqpc8Xb",
  "key1": "KMyX7R61fDFMFSzqSSxNPMihVUbRrSMX3s8hKUE3wMDyQJ3Td7ANoHSS7JAS4GXV492ZCVTMCgoSGbeRGNyhuBY",
  "key2": "3XGy8MNu5eZ2nBhuiSzKvuaQutZHUSw7piVqjeMxbG7Z4VR8mVHoQhPTjSp6bzDUznuHS98eYrXFYfw5vEo2cTjv",
  "key3": "2inb6WCi631wHjfxFPHM59PBbidRLysr8nZHYjGn3nqxq3JUcrxyE2stAcSeM39qTWCitw8obVvz4uq1w4N4xxyt",
  "key4": "31CDp8DsPvPpoBppZpkbQ5tdpgNsyearEaVPByMMutFS3vrGhvr8m4m9Yx5Yztc1MgH5zspqR2YrNQEs3YRMAA9i",
  "key5": "3eaFWWXbvPJiHRCEbUj5H1FpaCM1B4CgfVJZsHymtSfx7o6eksDoCosjogeQPZkpDsxKAVSNThvNevCuJJrDXUzn",
  "key6": "2762YJ6tkJeJk3v6GKKqfVr2GtsoebzBnEW5sXgqgzTeytMiqH4u1jG7oPpcmE99jDXyp5pjUpk1P9JSfddEnB43",
  "key7": "QX4Cqp2jPS12PsXC99c7xTDSUtxDNAdiePWE2RBxTPvjQePmTBPKCDTABBkeRXK9B9R76fL3QFDS3L7bXfSuxhs",
  "key8": "5VNkri33UZp5EkUNH6LmXLDdREWLPbekpt2phh7Dz3eyFYq8adqLXz1RTh11KZJaewyUujXjEADuFfaELbeVSekC",
  "key9": "5ggk87LKpDWk2frBBBw6q2danp6CN9TrD3pn5oGf3aN1vFGQq4aGniZ7wNgLQshz4kDhZQwmKnZqpZ49ghcrxcWE",
  "key10": "2epiaAcPyLkwFp3ZHFnh2fodtsKPNdkXZq3sPXJgiy5Nvi2xK4sRnnzAx6KndTUoyFPm9DRm7i5cZm7TmUAKJTxG",
  "key11": "5KbHLDmHaT1Rxm93Kj9CJxSNUogV2aCtE7gUJnRSwsCZeGz24k9MctS7xprR9vE3QG3LaPFJV58jj6NzBb41yXTY",
  "key12": "3aV8PQjL4A6h3m2Vsf8DJ62gwA4WZ2C9ZXtnco6ZRdyV2wS2nqKSGenZNnGS4z1ZqQS7ftpuqV7xfwqLqznzuGro",
  "key13": "3PE3Zy8fhPnnMukQBBVtfob5oTQX5pKn1EFvwQUe8RsUJ1bAgZsTxQxEaJbNFJzR2599LM9kXA5fmgLSafj7ZuGj",
  "key14": "4a7Ah5HeSeGC431wCD5JXSqyuQrs6MxigGRMCwkBL38hJZRWoyZNsAzbMpwo355EPCBQX2HcZVzwMYyzYMFmnyWs",
  "key15": "3x3R8a1SGy1PtngwUR88k5Sa4HEAJw87ZTHFyjUnX1GScypHwZb1eSRTVwscmuVouMDerGEsLfufR7KB3k8jQJj4",
  "key16": "5ocLZThYypif7sGLCUYRqLazGYjtFoUPm4chRbcHsJLadBNxCM9fighf7RbaVyifLFUShhqQEGAkjbyxaJDVzKYM",
  "key17": "sBfxq1HuXGMJNw8isjg6bHNKVsvomAjAJTBZ1qeGs96QWLGNapjTTa6JnQ4cXTJ13zs8zawmVdWKQgeJeVVFWN6",
  "key18": "3HnKZcpfNZxGbDPxkCPwifDZpcZ1wRAQDn1PpakWTzaAiMK7hTP5LprRvUTxBUcj88BVsiFpetcpjkuifw6A4RjG",
  "key19": "2U8WiteuMQoGrX3VqY96E1HcZQRFo3p36cg6w8iJLV4tLRyMsa8i1purPcNP1d3jj4xZJQZNdWEfGrBQ5Guka4nN",
  "key20": "54HdhEdziYz3k9JStVCFehgoWMA8mfrhwPVSR6SBDD8tQa93CEF2zow7D6T3KeK5uTb2Dj1JtrAUgBsWhwUs2ZAZ",
  "key21": "5vocmBXNyTJaLb7GX56MyFr88obA5bt13BDK9FEK4FRZ3fhJKPWjLt3bakbopSbs5LvXzGzveKLSuGJ3UdmaxLef",
  "key22": "bS3yuzsiVzcHCJYooNig5k89RVuT6CBHYNwQz42msCBxBJyUapAj4RtWeo4peWAGVNR1XKQeCHpxuJuj71jSq8t",
  "key23": "2gSeMZrXd3uxnW3KtkkJtaaanA8NtzaYjxgksn88vF2wTU6oiWJv2wijQ8cQNfwz6Q8AeffPynQ25avyUzkZMuSD",
  "key24": "3kqSXdt8ZVWVw1cpX7xFaZQoHNzUZM4SbK1iz78fbQacri4bkdNCYH387zyx71PCxYozmDBxinzZCot1xeNWTAFG",
  "key25": "25p7nLdBveQKHHZWDzz3hjem3w66FVanEs1yXoE6ooHQYri9CLG6GkPmDDgdUsR8E8Fqg4hLR6YULbVgJGNMTATX",
  "key26": "2DH72DrLGVcs8BxQs6ffLBGJ4pQHuzhCtvDb8ggEA1YtVXasV2U9UmXsu7fL8cgGXt1BkdqWfYKBqX56rrpHTLes",
  "key27": "3FNv3jVJGN1AQV4h3tceqPhQjAruRwqzk2MavNnE7RwGAMdUKjJxA8fJuAm1wqFBD8jrsLuqfoZE6MyqoXi78SGK",
  "key28": "3Tztn9NKKyFpRxQ9sdvZVb7NfPWesevsDeAxGnzc1NWFA76LbxWcWQEECA3Xqk7m18jCsgnGVUgmzBervyL7o8Ah",
  "key29": "3aE9y836wZAKJWHvpRhDC9T7pUxpTAsHokWMpcRtpaTXsTHVo6C3PpfVftsdeKu8Ntznx91BDacYmwBTKg315xA1",
  "key30": "4uZD5ogYyTGQPeuDtvQJp7mNmhea2HHxwRLXedeXV2GYxW1yaBHKPFsZnJRMpC8LZuJazh11n3ZBVXttWuFMxsua",
  "key31": "4CCnBAQsKRaqRH65ZUjh9moYPptm5N3DX8jxg6tDk7z4CRoEaXcKsCg92oDeupJ9tihBQR1owLFpXVLnDSoXx9nh",
  "key32": "6V5ia92WSPPmn32jDLwgm4pQUpczYDe2Fbcj2HKGT5XUhmyEvVZMEBveHt3yZdcg3wtcrCEJa3bJPfbocviTSk4",
  "key33": "3v6XZMR7qjp17MNrXpce7a5o8xAre7hwTGYpYHerSeqhRZP2wGeobMh9vBEjVcEbnJZyAt94z1mgFLvC4tsAE3St",
  "key34": "pWBgZH2W7MHJBLzobmgcGtcD4VQ5kv5FMhEBBLsXvtkZ9nQbUXs3P7bm8yWQZyxCQnHWo57NVKNtRuxKgmaXk1a",
  "key35": "3DMAuY7xShHXeVjQjMoob9WscRpqXvZ6DHniELU8DohG6FBMmoC9QFz6w1VWJETuHfo7gRoJmcXVWxNWZ4ec5U87"
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
