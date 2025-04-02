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
    "46LRfrG7wcWFaefYGPJMkgchdYQDh6ihSUySQkwbg38HggZwcpCmzcz3D6jzHfNHsfzj7ig58HBWtjYbRywM9dH4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Cyh1E7wZS9imwyugcg7YP2Y5snNZU94ctqUwv8M84FeTCWA6NUQtQJdp9GFWd5pCxGm77hVJFe3gsGjW5rRwUeU",
  "key1": "2AKYVy1oRMFTETLLy6P9D8cqMzdhwoUxW6pbtYTgxTtqmPApyBjzxrxC1AuKSPXm6o4UAiqoNM9uDPMFWoNNc1TQ",
  "key2": "1p63dp8EEdX4z4CNkdwQWBsu9A2wx8eNHDuqP82VEvRSdpKi3zyLUrY4c28pyFcMsP23bNQEAkPKgbDeuCs6FXT",
  "key3": "Mu3GJo6RAjfjrSEFUgeqZoMvdaRXR89PdMwZoo5ckUCbV4uAq6qGb42qcg3BNrdH2xtXxG6SSmxvBhFs9KhMQma",
  "key4": "5oug9u9oBjtLCPD2iWf8vDfppcnaWWZ2uik6fSQ6T5qvnSKyGANWzTCXSjP4MVVpas78w9cDgzXZNN5qHBgSC97B",
  "key5": "2nZaTmrEDLPSZtx4zKATtJ3toLvf9Gi5HymSwuwnvTEAg3a6FmGT88TU1xY9ev7qpkvGiutvk8jbcfUCN29fqpB8",
  "key6": "3Fx24LX96hJnNCif6TKLi1RyUwu7X3QvfiYNCctLca31GMSSm3FTs7TK98rh9J7rzuHDkS6AXKNg8vK4NcgNz4ys",
  "key7": "5YtvPpNPp1U3erpnbe28UzLecHk1DyBGag1ppFpE3a1pfSDD55VvhnkKcYg1rKfcMoccYxahVduMbmDkmPpNgd23",
  "key8": "23EQjxGyHzdsmDStkbDbu8NcMmNBeXFZt2mgfZ1nvfN35qa8NqubqcMrxhgv6HKekXbU7a8gNEUsyto8rb3GNciv",
  "key9": "4vSbeDsXLPpqDBU8JSRm3N7jUh8V2dEXbtqGWigAgkZ81UFmYTkpjBvYNY3ZmWfpT5Gy5Lq1CGpaJCZDaJ7q2eTR",
  "key10": "4hQdjkV4XjHENFTcuWG4YcQdxgcVNdbvB1Voq8Hp12Pv5mXUZoiJxVGiNTLtFaTfihAtqLU9mMpb8RPh9S4KGWFc",
  "key11": "wUkPLzgSZb6L29WfxnX7867nTbhB1VjT2kggjYLu17wuARgdfQPm6S9rbEkiMgakiNaz96vp9jxBpauAwTBdgHU",
  "key12": "4ERQdfADpFQYjKdeuMuE3rDaksVtpVmtPXGqKNoZT8o3yerWf3VbuQ8jPQssjgkJVtmTxwwyMv3QN29wG6qA2Fa6",
  "key13": "48ByJEfGZtXJ4kqMfEdDP2tbScRsBrePP1ETefUMNyFUq9X8nZzLVzWD511PrW7sEW3fqes2Pp2cWGxq5x1zi3kR",
  "key14": "25NqBoWqPoFtYJqgEU6vqpYLvNPyaPDHCJQxS6HEXaj1zzUvaCWMSbPcVv7971UVM6id7mc2Jxwgtfodm5QnhEDn",
  "key15": "3sEqLenZptRsLWgUfGoM8J5ZyaqHs822zSFUAH65rjCaPH4XzjGHz6U5FRYYhsCnyTKmSUeWC9kPsS61xk3robnz",
  "key16": "jci9tCJ24BvqeqosYQzLqqET1SoedS6rTPgtPq3Xc1xZd47ii85Fj4b8pDVZXEQo7sDtK9JjS3uDWXr4VrTppuU",
  "key17": "25Udepb3RGR7FTHzkkEtgZB6VtcEJFVA1MYptPWXuFgemH2Jm3fhSxd4i6Jwv9qXbZUwFif6bXW5PVPWPHSyVGyt",
  "key18": "3rVKZ68ZGSJqoELqgJkSo6uzdCd9QBE5B8LvYpvLETHJosy3zka2WQhx1h9W78bjhwVtMs144DxDvYPXTZXazx66",
  "key19": "5Y3UmpgUg5fLEvthaEcUeamyJ8UtTqrqSnssRSoWjFCnV72NJX81rrNJ7oT1bAEng2kQxtEs8f3QjFBm3X7ojzJC",
  "key20": "34SjujX4eNmGMNwDxk1sXux1zbfyyfhyi7JxHfeFFgwngkm1YfKwD54AGtZzbtqxne2kAA9bwyiid8TrEHnihdtj",
  "key21": "juvP4HdBaZM7bP5TYmUJZtoS8Te65pVFUgQaXH7uFR5pQ3EZr5pqegtfK7rHENVePcRcbSm7ZFcNC3WgbQuELm8",
  "key22": "5dhL6a33NHE31Ht8jwXmhvWZGKtXX4XaMMYtNq8joNSCjpnJJWJXmRV71AyTBaP3s9zyiU6cXgBKj91kc8Fis82r",
  "key23": "3TwXrHVN6n9P8s2oygNqBa9wirWrCQuw397Xo1rkNcjxELjmt7PheeQjrJtzkPQkGYLraLwNdxC7ZuVWPQrGGaug",
  "key24": "4qDfBgYcjhWbsrdTbbZHhWMNPeC1jMYepCZKJDckfscCB3n4bCXUahiXtsnGjdWr4QPjw8u8ckC5GF3gzH3zMMgq",
  "key25": "eE5JjbifkQoVoCkiK3PkSE94etSPYaq5cyUPW77eTtQokWnABecP4Uq93AbcH6gdtsobjuPXCGdikjwr353uoys",
  "key26": "3ArLcYn6yVpEmTjXZK96yHpzSaDf9YvqntmqNUqtH6F1gsF9UmNtNLti5oah39oRcgiWkSjL25vTt22rCk7MnHx",
  "key27": "5AwUHjqk2MYEvd9LbPHL2sKhKcE769hizP9J69H3fFPT2EGVYV7mGYC63vataCNGhktpBiC33Wn81vF1hizUxUhq",
  "key28": "2pNxw5eY2WCvKhoqf4heTsevTrh8MrfFqJy11Jc9x2w9JMyPs4Pc2tZcLcqB9w8v3fcZSEjqHE3er1KnqLLznrD8",
  "key29": "5eEdYhczm6kvkX9hw4UJMcMAELGkG9oXJ8s1q2qfppo9EJud7zJwS2LTMumNkmbFD6o1GcP8ydiyvbQPYB6xB9Hx",
  "key30": "3grjFXTcVsDmSgf911APhze6ozhgNGE42difYNEuEDd3WbKEvSrwcZu4JMCx5thDuKe2QdBQLMLTW4NLTXS5WnAW",
  "key31": "yfXk94Zf8csqhK5CCVXT2vrYSHi72SSH5WfnHjBZtcg3pmTkfXovksf5v6VSLK94T7u29KB2Y8fYMQLhS3xrJpU",
  "key32": "5eTaRtHksMyREnt1JTfGeFvriXtw8xESMdMCSccZ8RTTXHxmvDxUtxhuwZme8vSLF7SdMDwp5Vuyj3uuvosRQvwM",
  "key33": "38KeQwFxtAVHJcthCZvJZR6CUY4xp1wRqxctYKPYoj61T9N9xhmicbWqFVPVV6a2Ab7Ta7eBs7C7N4X8aeTAWDyx",
  "key34": "2FBecZVeCSC9U1DrPWLN6ugNz3BQFMzn2EX9sDvbjK2oPkhANHxdw58PS3MU3ZxjZBi6RssgKH6ejAqT2CXVqhNQ",
  "key35": "3jA6a2R2Wpzn3axw2fMcMr2qSoCySw6MFkZLebJQyMHV2SExeEzoZP3BWJQ6HuRkTB74rTCAupPyGmQrqRsXnVNY",
  "key36": "4nkTSxtUzVNGJ7LgqQCYVgYxmHCP4f9auYDVzwQRP76iFYvTjgH4ryMgJVWXsxofYMNKttWJKXv5FepBuwAF7XLu",
  "key37": "5s3wKnmdWrasqk6jk5vhmeT46mw1fui2jchH8QzVdCpZc76hL1czPsRmSbjc6biagZmKSck5wi6dAMHdkhDKHsNZ",
  "key38": "5M7e5WrBTr4hJJmwxFxU8Ww5Tz3GeyuswudWraHyGnfqSZufS2FfPkqLNLt3fg2WKRFeznHZEw43VdHGCsz1RhJz"
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
