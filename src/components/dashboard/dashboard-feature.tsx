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
    "3KF5VNo5fHUvKe746uskeHWKyb2GT6nDLL5tx2jtRVDPPGWtE2fenfHTXQ2PL7Z3fRbnQJDDBhPVLBuNrCgNwen"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21YkkdpvnYMWfjsH9mQ7Zh4NP86sRvU2cj7xByh7zfxAwvDzmt1rPuRYiPcFyVdbiVB1o8tiV2qETJrgYfmC5DuX",
  "key1": "2fH8S2MwiLRP6qPYovYAGGt6SuXFS5GQty97EoRrfdCFUKf2GzVFUyHLEtq1cRWGhM7ZDUHAQGFNWCvgU2igvr22",
  "key2": "451yFwkx8vqvhiCcrsQjwchyoBi4Mywx1jWxRoqhZYTCqf6KkqjurFVjcoVKcVreUQkFcDV1Vc1pTzwZ6kr8Ueoa",
  "key3": "5yTNLw6UshokudqoAeQStpSZRMQ4Lww6VSJYRWWXhPJFBRXAKmHofL1MHWUWqirrTGEXT2sKooJpTpSUMfBGELiL",
  "key4": "2ccWAoiF78n9AhuuX7LStiXfjFR5zUm1zBNo3CyTDm1pRfV5JYhXMNiWJ5eoMMJHtiAU2ZuhmWDgrKpb92S1z1TV",
  "key5": "5GbJ9RwM2aP9piu9GKmMnK8Wp3pajd2F9jGb94f1VDRXQp56QE3whzFjRsFAPSvve86uE8Vhv19MYDjYMrBT6uLM",
  "key6": "5xtJLQovUTm1iRSP5gvjVCcMdA8wuNxjQytTspPHJVqDmknLWHTpPEjmu2Wu7pr8SPRPz6m7ebuPjaJ5sT6WEukn",
  "key7": "42vJGLXafmJgpQg814Y7ewtwBNbuLRmchxAXF8T3A71QvTzrDobEphRm681iyrxMYLm9wTbuKVawKfQuVhWv4VPY",
  "key8": "5sBy9PErNpgTMa21K3nT1RyrpXktpNuHp9w1eYfHbKVEtPRNxmL3u92WCdk9yy97DjsCnpB9Ea73rt1F5XUvBPwy",
  "key9": "2a3pPWYs9JDuB2mMyRA8MfkGLGU8eL8p79b6Wh5QAffYJwxHAyAiMBEDWeYo8a5HxjvrXVxDacfm8xXwsAaoT4CY",
  "key10": "3hCtTdG35Zd44hZVm9CWFJfCH3BpfA2FSy9g4rAtSYv1vPi3NxWibF5FPxYyZrXQMNCgPD9LfbrKFJAWXL4FjGdW",
  "key11": "63yM7hmBPq5eo8ag6LdU378iegHdiMcw6T7ct1McZJY8QdBQfCTJJJC2TeJBTrtXtoMyN5R1S2jUrwRWUWk6cg7w",
  "key12": "4RL4r3hkKx9n25xVcgaRaTKzn5CmoSFPadDFPfYhRwYVkt3xdL4Eut5mwJLxTUQZT31tDJkY3c1BoHhV3u9J938z",
  "key13": "2RGfwdH6r8bHKs4NKKkz1yWcb8H9TwaMuor6bGWTVSJ1SrzCdtbpar32DFm7DDHUEZPZtMTkpY3PRENWtb2GgMkS",
  "key14": "2C1d9Nokh3T1mz3tso6nVQmEHmx18iKao8JAq2WQwK23h6B46363XribdnZE3Vt52PuBJTZUxsTrASsfFEkWJ64f",
  "key15": "4sns92mCxLSsx1BqSvxGVs7Neji9bstfLr6vNdg6DKzgQym8UiX2uyG4PQmmKf9xzbtw1eP8zzLPeRZVwqG9tTDY",
  "key16": "AycUXZWQBjVzrnbxCREPsVhArLxkYZyrM4uzpmcrVC19xGBc7SFKMkvuuAata7Xpzyd4fHR7DepUY57TpTGsgqF",
  "key17": "3gHQsFeuttsyMdj9A3f2dnG6Wxu7c4xECAkDpCGHK5FUhDY4iwwGkt2PsVEfYdNr7YktVb9oGeR6zGqiuMxBN2Qk",
  "key18": "wSPnP46avvfM6ZvBajMK13PAWj1keLV4BazY52tKiF16ffaEHjQFeWCKoajzH5DKKgKw8RTkZ9QHqTEuCNjNbud",
  "key19": "yjgw9shjjkhehSktRf1UWzMHjjBXQUmAyBjDXKTx8pjpwQ91H36jcMXWeaQhdMFLVYYwVezudLdhsn1gdcQa6q3",
  "key20": "pxSSXgUoHoPSwtLcaJ9VLStvu3hSni2csQZaGaPCfyGLRZXSMtHc9ZzxzKqak1bPJ8utBUSkWR5nqBsFkCj4rDL",
  "key21": "3u9fjcbKUNerqdLvrJWhMczQqQpJKanR6Y9XvPdEFNpcNqyQAfVEtojHGSMkKV9EVkYK4ajcJ3mcamGvDSeGEHsi",
  "key22": "4XiUhu6iuRn2keApp42SLy5XzEYHTz5YYnAqX5ZLAs5SH5R93ptUVG3TGiZAfQNV3tYCg8fu6tD5Vf2yTUCj3LhL",
  "key23": "2yBgePgMfHvaSiZf37NkaNDPmSVXX5wBVwMHyJXKi1GNeuK9rZuSBt4waZanLQtPteMPtZJcqMEXwHLHNwaUrqrE",
  "key24": "3YCETEnTd856Cnb2hvTDBegkp3akhz7oEBvVBqBndthujHtCYPr6i7Y2q9FoAskk5Q1itgi5fx6xknsiVk171iy8",
  "key25": "4dNujf14RoGEygziZeWqxskYetmM7oC4LGj5kMpVz3h577q8gQJkkzmqW27RkFRwtMCZzu9zd2r6GFt2B749rgCM",
  "key26": "5s8cXMv3wxa3tue3kXVpm38MV6KJMT6D57xmsbAdRLoVsmeGcXPGvsU5KZHptEU5pHiThqMJLAqpYxx5WFmUem5n",
  "key27": "33Qr8F6FaGPbpqMWi5vPkNWF82qvB3D3rRNXVtPXqno4AJpgycuMZvev84gzzWk7wudmSrZMNcz7MHrArRELTGnU"
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
