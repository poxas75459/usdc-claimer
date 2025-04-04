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
    "2oANvRFBx1hL6PL8VQVaPSPatBzJ8QWQzoA5CsaJLH1oC7J8BZZoyEs7nvXaqQJtyW7MdaaPdkpWwx52VZGPTqzL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2twV8zxP2eHpZE15LfKyraSAeZ1gewdk6zUdouD9jsQWPLFoo7eV8iyUupPsLY3ro95AWpFYZbk7QGasjGLTakai",
  "key1": "3SNuaPNKoE7HF2bB2nBT8tjLsX9QnVwQDb3eaxcrEHEboWf9MLEkSpkUauHggLH3vDVUa8LRcKbSWtH5kR1ahkYB",
  "key2": "4rRxf5zfxp6C8zqNSVCDeCfCD3FYjERuzCfQwMFDCUcn6NbaTu39hfyEWXtLX4vzkMVmdNLNcatXx3uBFE7u8HMx",
  "key3": "64Ayg8niUHXUDYwhAL3RakKuJb1Rh9FwnsU2aXxVtvF9GQPWjW4NBGsXvd7RapXxPqQRk8AiPmVWW4w6P3fpoHwP",
  "key4": "4f9awksTb599dmQZwHCQzyGRnPnriDJeK4Pc5X58t95FsSyYAud2TYo9dRBCMJ7s8qtbrbYj8trZG9842mCmds3g",
  "key5": "3hpa4MVjPegmb7bPAd7BGxq1ipQbuBkQAN7KEdHJUkeaWBZ7m56jq5tgSyet6Rs8Z7hMXubZVFHiA9GfMyuWeYBC",
  "key6": "z6GZfwnZV3iqXfdXG3oxKB6mNKr8FnwjjcbJJTVTNgMZHD69qsN2acKnZL9bWnG3mLXSkLdTf8Cd36oE8TvwPuM",
  "key7": "3MA2Q9DrwXki4ojJzPSqBZMhCXowaRZU1rngGENhSogtYdEQcJTT8DbdWytt4WWXAwpygxAyAZtSJtn9vA6HBBs1",
  "key8": "5rak65C1LhimhhAPLRXb63V8pti8SRsS74rmtWVHqdvjyY2rtzzzHmMwx4xbdd4GbDYtYrLJzxh3XHdmhWcFvYVe",
  "key9": "4wtkwYKKHR8HmWcgyujAghMhirh7ypeSmANCTSq5VG4TijDWW8xxfmTY73PgsdjK3FJcSNdCxkF4i8katcs555ar",
  "key10": "4ciUGm8KnNVq6sYzQ6Z3CFRYM6SvnzQb5ahtPRtB2mkV48wjdGHPtwe5XaNn54bfdqFwSzNCsYB1bj4y5GApBias",
  "key11": "46PtAehdFwK1sAPxiiRjaq7v8ACbuaBsFGsbjvhWh3o5S1iT7qkLbdEpKx8dx3PnLTsgsux61RJ2aZvN6BTG4aRU",
  "key12": "dSf69CUf57gmA9KDcdaCq5xxt9xHspCeB7jL5SYtyWzzVUdk4YdPzzxDVvYHNKgo3J3GJeJB8jVJPbP9EZCReYS",
  "key13": "5bCGHHbMc8J9douukdJDu9YmjSA9s3h956NRfY4kiWLGjrrPEJMfN6vygCKEtfNKPoLHtR4VicK2jtgz6neCAx4q",
  "key14": "vV79MYXQr3PK7b17zV8XEnG2qqjodU2iTJ9D54NDXuReHEVLWsj9qbaKM9hcUdFgzzp2DcGtyvxzZRaGUgeE2Q7",
  "key15": "3pBKRyH8VH4raGo2F33ipMoD2dT4eX7eFsYPs2d55eojaPLwhT57fib2etw7uAVDCQrt2NXubKfteo6Z5usudhSJ",
  "key16": "maNkKYk8vDKJhj7axsnjf3XfEwNvDETWvPChSQjEKq7A6nxMuDMyFLa1sAi1wNGFysSwUFGywvcdRKZnYiKJP14",
  "key17": "2puNrmLBKY1mrXLL3atLher4nNSFJwQNG3TzPPqdZ4HQ3wfgPXWaLZxYAYw9AaXvUx4Yi8yfKhvG55TuFn1HYMF5",
  "key18": "NF9oNhxo15AH8txmYZtxuAuPpWE6m6cNxfMSyxSUweWEVNk8NjJsY8qGCrXRfW973nQP7inUa6sckNmVkamgZzV",
  "key19": "5wV7N6eqy3jpd2bNb3KhxUNSwQnDRz6pm2m3S4G6EX5bnbjKZ9KcoVnUYizcJcJKNeWKsMRMZv7bEFziFUfqXp3M",
  "key20": "4cohXj2NEGCAMLcorS6kNfgoqXKpB4aSh8wLWxSbWf1PuVYHcBt4YH3ogEkWKo9bgM4mEgADQgi7FrrhxcanGeeh",
  "key21": "wwmW4DqtHyBHucuFdwvfkfQBpcWN4CnAwT1m1bjjEfke8H2aZYyEKDwcFrXSUrvkk14PiFcgk6v7oM2v2YqDwWp",
  "key22": "45PnoCybEpqWDqMF1o5QvqzSALEwrd159jgL5VDTi9kw5Cs497ZuZPSpowjtpFiZ9AqJU2vpBzoVBdZG6gNgrzy",
  "key23": "2HpPnko1DeSn1coShqQRUFcVmikFykxNV7YBRaTSKt1Cys1TFD94vZEU4fSYApkHBqE4rCasBdozGtNckfcbdTcJ",
  "key24": "YXocQuHCcjUuWKWfTDjzVw56itCC9LuG58Emr2wR1EszXGLJaqd4VKyQerd8dAABiKsid4TnL2DRBeK9T4trzBz",
  "key25": "38vpFf4igzXybDjh6rm4i61sx8QHxSihFvjrxmeTDfrzFbiMuXZdRPz4zwzNnuREuRkRk84WeGBoz4pgkXM8i2JT",
  "key26": "5kAH9ymbGv76gPVvFDpQ89jEqLyDyvZBzsEY72Aio3n8stYKr1VxU7nnHfG6gufGFUGS5rutmn9gLwmrbQWBqYNJ",
  "key27": "CbNt8RcQLupe4ZoZem2nsQsbt1GCoE86W6A4iksRqNCz5ZrrkY9vZ4uZZoPN4NxwQcnWTqWdjWhhoHVy9MJaeXm",
  "key28": "5m3iU8wgiFg4FhioqiDn82dYo7bhLtA9c3oLwCwtXusBgJcPCs2nb2uqdDdnATzJXeprgNtouAsTRnJ1icEyCiBp",
  "key29": "26ejypVxSiLK2yFxAmjD5TMUyrBwEJLF2F3fpST9FcLTF3tDkS8LfCxNe19cTdV8Dtb9oDdhdEKPXX7C3X3T1vQj",
  "key30": "VCiRYE1Fi2aURet47TLp11ga4po2hrqH27MkTANdsYNx9MguWqoQ8MZKRwEfbVouoBrBM1oLeNTZwuRJgqVPfkM",
  "key31": "2wcGDa2mXTfChrPECx8njXEJ3K787XdttG9PXhD1WBHqrxSQ1FHjR21FqhB9SnuJNZdRQsgAZmT3jnfYi5hp392S",
  "key32": "4YHp5o2jqRGJ3sqF9XQAv44aD2Z2dpfxkZbg3527gMMxtYjr9quFu8sdVmgTq1H1bbGChFF6B423DaBwSvwNDqbd",
  "key33": "59YUJJrULV7qLGdfx63fAQqf1mggdGpFMxX2zwH4rvVncsj8KExRU5Yr1iRwBFkLfsoRaGi3trTaN5jQRm38vqST",
  "key34": "4H6pMs21b9UKzJTzUVDnebBr38H9hirmcodWbRViXcrsW33gDntRh6M7DhGPDfVYj6CZu5jNPReqJnBp2uBMmpYd",
  "key35": "Hx6qrG8vSPgGFg1kHrSoZuNEFjiAeAZfqsMD1xFkCM77AES81R5efFcmF48ieQjbn6pYVFh1Fy9UpiA52voJ1du",
  "key36": "5XhC5ZUZyGjm8GN5yWrXWx7afeMiSZsTPQgWV5grs1UB7qRv39W7qZHVuwbGMEKBXxCXQ5DjTd4jc5TRt6fL3muP",
  "key37": "gyHnWuJzTUM5UZoQobAajWAvr6cbmKWZzMgBVnKjWQbTCETHBf27NcU29pAsVYL44Jzj2aG37SsVbiRRkK93Cet",
  "key38": "5c2RAiNAyZZihvysnrPpmpqvL1UJzk2ASTuxQRVXzJjr25xTGsgb9yAFtC2kf2cqLujFJ4ouTuJ5F7dneHQNtSdC",
  "key39": "5HeG8XbSPydLTHt6rM9NypsjL2iwPxmQ9DpVe6DCs6MeC2S54CxdkuuaUWFqvh2KMatTGLZs4TWfRD6uezeQiRyq"
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
