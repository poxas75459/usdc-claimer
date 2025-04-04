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
    "2VS9cMpo1BKYZvujBcx7usTHwrr9whGFjFgv83Estrjvc6GQfdXiqex1E6yE8q8ZWj1kXsMKHYBNBRz7RV2mCcnx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UzUtjG8dcsdJf1YncFtSfdm9kwFzpXK62VHxgUq3wSaXgqzDPKrvKW452EgdTFGJSaB3eyW4tVAJFaFosDmttYz",
  "key1": "29s8GkH7wQv17XrfW4m65uRJPDtsyWxFj3RtemCVNAyFwTLLimSCe3z92Y8s1kmPrMxYR9GQYnLWaEgc7QEChoxT",
  "key2": "PBoujYU1CR8LbDEovawazkALafBdH9M7gJLgj5jVA94LD3d8LEi71HZh7VegiXtbYb5GWnQJdYe25fzwuDEmy5e",
  "key3": "33DyRtAgZHeU7hW388vRR3hjKqokKNgDmmqRezg2HBnYt88h39qtzxvLBpYPK3jUCGvrqSXW8CVMCvaUrX1uwX6L",
  "key4": "SyHSfvWzvhPiYuxfC9MYKVcFsbbPJtx5tP6vckHQ7TKLMyWDCbzcWjAA6ddkWhA1KYi2HW6LdWUpVdtGxyR6etc",
  "key5": "2HASQrZGVzPY28B6JWArpVdMs2S7M3eiokiZkNYqCteCbWYMjEUkATvtXFZk8zyRMwTppPG4vqXM9CVMBWmy85Ae",
  "key6": "4mXYFZ3MopJjDoLya7RgCha3zuRLKf2TrCSXhcaR4qM2r47S7XoFhAz2BrbvPuna2UQWBZZrApMsWQ1M36SYGtni",
  "key7": "4G2rL3LqJZPqQ1f3k7ba1BoD93C85yCJtG1opGRRLyNRBcREoncKkejocfs3bhWyomK2in6KEkEg8LS78UJ6mCPA",
  "key8": "2buwqmcStsH5w9QjnTRF9s1MMBZ7LVCx6DsGd9ouavqZBB6n5jN1SFWurZ7bYiQPDA7v4ZLJUhdhzswd21xKZquu",
  "key9": "4cqRFFjS5t5pRJsLgqAozh5ciZRbwXWRhWeQQ165fxYDxi6obYPDMFuv8ynY6dcwZCTTqSTh9HkybiUbtBC8CKTp",
  "key10": "5TKqJ3muasaaHLvw8VDhE6kSNjuhAQTAdQMXbawBWuCCeAysqZJ4Lf8dTdfuH5M1PEcRpGMwhPes72pFHmnWabT",
  "key11": "4bRhhKNVJVWtpn8kmukkJ9gv2hfn6eBNHGdu58yZEpjqcZzUYuPorGkHKt4h7wuZuKPeFC2SuwaMLwr2eDPLjkUo",
  "key12": "xDPEY3pr7JA7cShEYBXxxadZ4V73TACkAmF9jDtZJ2P2ARVPTcMSFPBJxe9U8s8bm914quUNUXp14U8ntpZWriL",
  "key13": "5PezdcjuceHuRmdSRfT2Z2GcP2mYpe1QEHyCrqWwXHrHPg8ccrZRMcg8fcfenX2vVhyfzkruRvAULHtXC5jUJPTm",
  "key14": "5Xa9BkTnr3k6VFL3AJQaCHSXg9JP1N41Lty7E1qeZm3UKzAxFUyT39XNvAyfpQAHpuNzFhLipH75Cc4t5rPS3qrF",
  "key15": "y74JN6R6sZuyYV67U1yUZkqK8Mm35p2U9itGsqT4RcqGLsfvt4pF8VFSza4LNUjYSKUZixrNfNqxm8SwBgDSJoC",
  "key16": "63KC4Gbyphc64nWZfqzHJskodxnkXsaUCuErnvzmo5iJP6wbuCWFqYaqiX5MKbCYMThxn7hrKZJwUUqfJNTnN23L",
  "key17": "39qN2vbZvWW8zt4WrTkjPzJWAqaMRgKVq8J62bfDNM3fMcFfww53LzvU2xPpX81bP3Roz6cRTEdruxqjhMLbquHc",
  "key18": "sBU9nUG8MxR1YGBgT8hcxZ1XKqtCVzyoS8bz33sFrFTwqa8E1oVZYAhBpHSV4EFHKk93zz8mNwBWnVyUcdnPetT",
  "key19": "2eVQ31JW3cLi3snHDADk4cu99aFthzh2AUBYxkCC7AUUTeuFwS3AnThaqHTfhCgZA2vVM6ZVUke3otGpfopx9kg",
  "key20": "3hG6PvwZzRVvFe6rx9QHPyYCxwAVT8by6S7xmEpLGiRAZMfmC9L2RWNEtVv5YyhnWoZyBW3hZMavTkpwotFVicGm",
  "key21": "5SGxqzNGBjT3scwXbDY32EbXSrwzdn1MNtewGKYn4KMMTnGQ5h7w7281Zzdzom25qsPby1W2Zo5cTqQWVqBDxU21",
  "key22": "2uZABgfM774Y84ZJbJGw94rjS117hWvEa5ajGEjpg2Kdsf7wr62i1D9nUdvkfmEMWf589o4jQEZz4PtR1AbRSi9L",
  "key23": "3HUjxg9dBPhumTMtHSCDbfueF96eE4XMJnTyTRUw7eJN9UkxUhjfGcUdeC4qnWDJ1sZat86Z6YjMg1vGWyX2u8X8",
  "key24": "2YkD3ND7K1Ls6oqzQmLpCu6fkpoDZhA3mwzYJdPyWrPWDZqd4BEVJoZAYbmPHKwpK7hZAXdM3wCinFp2oeShiraZ",
  "key25": "4SGSwS7gHDUVzvSGvSCimXyPssKASzHazP3taMZ3mzutuR3M8xkxqCyCFTJbtkCBm6nfEKi69sw2NN9Wkb76PmYU",
  "key26": "NSs44Pzhn3thpt9u2xowd1UL7mH58GF54k5HXkHSBodycAMse8Bvm47VjrnQoLccot7KLHu9UVfDJqoW6av7z6P",
  "key27": "ycBJanaud7nnXsgTi1h3NBGu7fft1Qk4kpcq9yPwofyLuh3xnzqpiCyECd9y5JMhHjFHbp5yCQayM7PKnqb6aQD",
  "key28": "4yzB7fBkJdETH8hyC3ytYLkJpM2yaB99WAZNz1APfKAKGtbP9yW28gcxV41cWoR5uLNxgH1ob1gxaY8Hke7XJwE1",
  "key29": "2PapRP8YDtztQfoG3Vh7X6y2hZdMN7wijpwx7nm2RRjHx6c1uR6ixyjZadnUnfAm5inEHsbgJx8q14ofCypLJLdS",
  "key30": "5wfF536bJKSsCFGyydhf7Pz7aNLvQL9buoYgWE1TbnfazeMJQPvqJfuVQM7SpXJbWGErAjNFCSrTHXRe59GvWibM",
  "key31": "5DMhHjSeCnNg3eDE2RUpwhMRLVht8oUtLf3EYafBp5oW2nqBw9Y3CM43mVr4ab1UcZW42JtvHagDU8qEWo7ELc8Y",
  "key32": "66urYtxr6ineJHpTwn9FHipGH3u1zWfXGPDCeJpFFgku6kJ8y8u9RJsYzcJQCjT8o524GSbnX2TCFbehc3QohKme",
  "key33": "Gc9xipexwhoskALn72iJx1vXeMciDJ7y8zya69VGvUwhYq2QwYk5fdsYNrMCT6H6wkX6cMmQe6ogtRTXXasoMXF",
  "key34": "4tqwuAcsJPivfTpXanDM1pQv4mkCY4tWFykQH94mpAtEbJzfcPKyvoxAU1J8b7HtbBGRmUrenqVvfFwBM6E4YxGL",
  "key35": "3GhkmQVVuHyj3srF9QopGSQLAdQQHzAbG9npYepFa6N9Bvec86AMeucdoy3RjSKVX5BuKPWxseBU5DszbKMAK2DZ",
  "key36": "3japt6hxSr1wW4MUfZvH3pCWkuMn6NDvCGmjFhhcobnX2KMBQSMPW9AtUxPWGuBUEXJpvGBzuDri3rvKJvpBiWNf",
  "key37": "4YLzpNYjiCTL8sa1yhAjeQBtdV1B8dnqSFH6tFNb8eBFnB5e6MLoUE6WdtYAj48N6UJyyrfaStPQBSzTVpk7nDzZ",
  "key38": "5BfvKrVyFSpw7CEFm5zfNoyyDzcLQfU1jBXdhHb1TTpyCzsSNFxrqayvjPhSb2sNXK1C65kZrCocxekZTLHCFEdZ",
  "key39": "2pxnhuBmEaA7pCu1HttcZ32Cq2pjhbep6PokcKrCaV4acF84BV6SSEBhWjAeAXjdpp2sBxPLS6K4p1T9ra46hNKE"
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
