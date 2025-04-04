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
    "5AdmZEEbzXhQa9YqBBZRnJAiHs4Twr1dvYkUSFEnLZukNnYnwrffzVyPfdBDZQqSVN2uUaT4HDkc3ziKbvVM4x5f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hRyEqwxiBCBNnVddPSUFzzdvk7McfzPMuqXeiQx9HiLeEpyECKP2SerCuZSNjZcSTVpzfm6cXDXGfXEn18cdXJR",
  "key1": "2rYWwxMwZWQ1GJA5aBemxxuZYeGcc8Dzpbr4eZJZwRs8oLP7CXPT57HnKoWLJE4QCPzQthe9aVyP2b3CBBSLgrv3",
  "key2": "SYd13AaRqQYbgpugCw5KYpfPWtU3sBsV9QbYZiAJLtKXPTNAJeMXRBkoaEJRSNVntGxxdymm8RYfzZKkBJPP1Ga",
  "key3": "5C6pPiApmPiUuEUN9RApibz1LbhDDM3TQHWQc41zBBfnZd6zAcWnswK7oNfXCMdcKC6DhysQMdmeSSNR8nZw1dkV",
  "key4": "2Ux32WsjPLkJAnkJE8Geqg2PCM5mgX8PsHgD3KRXvgoE1tp75cxKwzZVUdhEbM56gjMYjo3rsyFrwmiTCWHwG27M",
  "key5": "473mJhBCMrLAu35yvdVQK3SWrAdMTFm5sv7Q9ptq9yMbN4BpMHQfPTG5ynQsUfKRHYMXhj2aUYJFG6z7Mc7u7z3g",
  "key6": "4n8LXsFZzHqdnVHUvE3A5EF44eX6t6PGWrwFPPYPjBXHCVR2Y1rNpKi1sL6p2dUTaYmNQSVJtqYGKAzb9msXXWxD",
  "key7": "3iSMtFTmZoedph9ENuSkFw8XRHCL7yXCqE92Uk4joypiAkPDnbU9zYPCcPfT5Tu4g5D3S25jpu4ANFQhVtDkjw25",
  "key8": "2GYWw6AHiUrwuPhUbartF286JrAy2y1Ho8NHLdjkkbPt29MFs7p9Bi8ZhV3pcaSoCTECXswvNGgKJZC1Ui1FabuL",
  "key9": "2qp16zi5QTpDPjAbNyDnsoxrg4RwaLTiBg1mHAwC1bzEiD2Jw84GNUoVxjfHptVxt7eTWJWiJgU28bPgypjXUPA",
  "key10": "2kjiKRQt1AQLvi8vo9HJX5z6M2G7xXnYg36YkE6Wiswx8QPEkWCUgzfnicE2NY6bBYiKFnWmWR3BhCHnfdmdUJZ7",
  "key11": "5qQy8WMVwi7kvjSU6yJSDshjQdjZ5V8g6wRjrNoadwSXxzfp2h9rwybT1e5z8p4mSXZjVJvQFNj1Fk1EQmhDEva4",
  "key12": "2PpDiZ6mPVtMWfJeVcquudLDkQLucWfPNLgVRferzgQm7pxkZsyaH7PPKneEQxsDjGtjn94bgYQogvEuHfDJnMgL",
  "key13": "4P6hURRFEcCY4rQeG6GfsHv1tjunkxDJ9uW3oSrjyAr7MT232LVm2H9PsSk4Hu8n5PTu7UVzcwPzBwpsm7Wtb6xW",
  "key14": "4qw8vyDHR4PpW7vRV8LNg8X4xWc7D9UVmAvVPffbCZWBbqYyST5uz2avgoCgr7D37NpTgQayt3jGv6gB64HvBHGa",
  "key15": "5tsdoKUaVRFcyjhV8zgyJmnHi8vf3Rt3RGbjzAhYNsGnwYSwnLFCTf89VzcUsydCWyn4Kjo84ARE7Mge3vbKbcyK",
  "key16": "4umcfr2qCpCaMszHyLt5oEJCB5j5jL42ysqKmPqAzKPpZgDi36oQ2zcfNnSDmHEi3ESQBNTGnxJ2WMzGSvWqfeCv",
  "key17": "54Gx8JgX9oYkvxze5F1dT7mS2GQxtJTEYhij9QmTt4P6Tx87ViMDx9R4ZJ53iG9QXx1ponQuvYQcRBGK7A66WznT",
  "key18": "tT7ergggcsG73YL2TFuHFyC8PJ9Wdz4jrUFoNCqScqSJZMvLKBqhCmda5ZePVdTnoQNud91prB15QPqfbzSzGjT",
  "key19": "5dihUTZkHtz2fCzyFQTWswvGRVU7aYwqjMH36jkbCzNkh9wMXWwgwCCk22j6K9BNtgQMGoMrF4HrWEG59tfhXtYJ",
  "key20": "U4d7QQ3dXX4wLA5H639jyd5N59JqVcwRdqQkAyJKpMe3CWejwcQbjYNQuM4UJgWG4k8VPK2JSCEEiJpxsujCuqu",
  "key21": "4aR9HmcNnSmT7gF6gtrsteDUafc1yMbgid4Cu5LjE78zjK3gMxPaS2JedAed3M2W7TS74QEYCtPzHZ7ACGT5mTv8",
  "key22": "2ncGBPLjwFemngB23owpiUifwpDbLjAxe3SPFhD24rDEbqCbxqP2bK6fgNQbSXBJy4REY8np9tj4wavEta9iFZ4M",
  "key23": "BUvXYyDNSqRSJQznopuffFmoV8aPb5RZQkpycBy5jzJwLHBTNrz93f51WWVhRbiWn7Zf5NgySfHCBX9DhWL1FLh",
  "key24": "4gfDthuQVo2EZWWzAU8jvUWaMKN9XCPxAzMhnma4oMmTyQCKhtmAvxGtdESf2mYnH59WkeUf7PuDY2epgkSyxigR",
  "key25": "5SGoJLowEToK8wKWomorako7EDnkLXKJrZ5AP2nsayu4RtoSigHtzZxqoGcVizT6uBJpoU7J3tiKrCFpiwLoUZSH",
  "key26": "34mzMsY1f32p8nXcHpnKctHG8ikdnRcFmW91stBTWcQE1EwcPw81QZNvGAP3EJ39w98G6wQJTpt85MuZbTdv4Zvo",
  "key27": "zavjSYwP6Q3VsptBV2GLXY5LE9HjJgQD9X1LAQLshQCdtThH8YbvMbPLvQ2uEzBsqBngPuyQT1pn82qLRa8XSNy",
  "key28": "54GkAkqNc3yc9amf65HFDcLJZvLAiq3sP2HBpEq8d7qFjSFYLd8BVKUjNAGTjNTX2H3qudmhGKymTxHdS1gvWKpb",
  "key29": "59LxDZTUCtqa24koRRcS4PZ5y5kBwxBZ7XWgwMamGLTR8BQwWpBV43DR8UQk97R7m6GCSE7czrxGn9XVq6k9xiPj",
  "key30": "A2X1ytBn9gcRdU1DiAv8vi2qMzbqH8UaWKBd5hMgh7EYkmTNxWZkY9FSDPYEaf62mjyoMBRQHVa7PFSSptBw5G2",
  "key31": "tocE7vE2WfmHpEaRfZbwo8vru2jy59nGKFrXoUnsw39rsDVtGh2PKdWjgaTKwBc8GBCADoGkSSz6QUNYxDHDv41",
  "key32": "3u7D8Gikoaf5pZLZRPMbrrXx4ADYKbxTy3YGvxqzYX7yxEQ1jx3vStr1qMC9ypM1grAAxWLdhayAboyJh6sLmfhZ",
  "key33": "5hdKS4nDv6rJVX1ZP1aA7UdeEeLgC4EFfQ4SvgkbKEw7qo3XfvHCBaMEVLemBAcHPjazfbRdR6yx2d9jrknp2pbo",
  "key34": "4fnddf8u9hKharHNjMkasyt5CHd1RbASTfmD7pFxUWyNfRbX1Yr84xyU6SpU5a6FwNa8j2JyL1KDTVV2FZ9DPFjz",
  "key35": "5kmN2FBtEymk2xoQ7VeEgJrejdTgYy6ZaRcQuzpRWVJQXi8LcjZFkYoJadFDe6pKk9TYa8pD3HxY9L4pF6v8c4jH",
  "key36": "66VoNs6MnEnL2ocQJVLJEitF1pwmiqthNoQ1RC1Udsq9eEoGHGQ1vH9EqgeNR1WDvt5rD9AnNuG3toP7hCyXJz82"
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
