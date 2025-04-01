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
    "2u9qoioooYcZHTNMopkmjhcpU2DPGLU9Y5rGwrWM5PS9onGCdMwxNYmEcbMKnc1N3mh8EV7udKRC1mu758pFPWfh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kzxu4eqCNcg3WW6goz94orov64QU2zC72B3NZW9udArxff4dL6G4BQ81QADruY9GV2x1nbtKtx9Kr1RUqRo9by9",
  "key1": "4FovHYPcUhtbX1D2VcQG2iLRBm2ro3UXtX5Sv1ohEhpSETRZfBYkhjRXHM18sHm1hUJmMiHJkPS2Lq9nsvfbKAVN",
  "key2": "bNn2sorzFC5xSprQ9LCkFvRvFrTg1wTFGZejCtG5tAmLkCvmFDHsvHG9KBcCu8wNxZwHWgGm51nvar15c3RmkJ7",
  "key3": "2f7APZXBjoJnfc8hsVP2qiDszHyiKiLd1CDsUz9D4x7Ra5XZTB5pZCVbzhJ2qFWZ4B9pwNmtTRCH9EsZsPoivVbc",
  "key4": "2NsZFfNhhpghjP52hpw3RsRLUNxTTFJT8tHHzJ8Eg9KR3GSWFSieJurTpWAGVVn3X4x5ohxonZdmHS76fQov1gVq",
  "key5": "4FugCi8BC2rMV6tAc6JwGceQAdV2ivDVBQM2NSXnDc21FuCmFd1G2EpWaBD8n6XpLW7DgWdQrYbgGqQzHqBHKvv8",
  "key6": "5McLLo2Xcnz9VuLsrChMRer8GAys7qbqj7YBMHQ1X3gSucieukbm5apAQtiJu5FbEi5em2P93qD7fUZcxxbxfik3",
  "key7": "3vJn7WNQvKEknfCWXxgZfmzimjFfXoW2WDoXaEezoNrVy9NbSvnJ3AizdJ8ktfgThy18o2uAPALZzPmoW6D1carJ",
  "key8": "3huR9vJMWMfD12nBcXCXptz1nAhhcRsEq1jdyjyrrmNvHY9sEz7obyznVPhuA5RQuVM9seenFbYzSRLrARQqTEd1",
  "key9": "5SJyP1BXGMcN35nniiVVaRHjLp6Gy5tPU8Yz38BM2Tkssvork9Xk2oSSCVxxoxPnRuLX5qk6wpC1Uv581Lu5Mce7",
  "key10": "2WvCnAphgPtbGqo9sJH3Nyj1V19w6dPHWiDh4M9x7k7BAspfPCeuLTYfwyqaiCCd26XLPQRWPDB1t5cZki7mpjWL",
  "key11": "3zSqgaqAkXgJ1wsGe1xZXGZ4tDN2i47mByAVPWJzDaPJgtJ6SU5RTNXaDPjzVzy1A7BjRAUi6h2pwp7u8ozHAjBW",
  "key12": "3i3PZ44w3MvinwzVv6tm1hDQ1iaznNZvvQQNQ62X8RwXCYobhBUSJBgNR7LSKak3BGS2tnYUcTZU6k1uQU9yn6qw",
  "key13": "4kuDdtY1d6CvX6nrh4njBEroX2npPUk78VLxsk2qoenZmxw3FqXRFU1wiSj7ws5qdMUgwhQ5mJV11GHrE287N4kg",
  "key14": "pso3RGbsX1Q5E8YtD6js7QdHimoen2yVg4Li1gSAgD6vJ9oRMVAWkMJtsHe9nYKgM3PeFAFWehb8JqiDvW2tc2G",
  "key15": "2GEjWBvATjTHMuUBidTiboUpRsoTEzJWSYQuYPZyZDC6tFRuY99bHyJPm4JaJU8D2zbbzwWehVS3SWsPZ8uYJ4W5",
  "key16": "44mtCPKXo8CtqTA5T9dX1hGFGk3h2oYZDddMRdFtHkDbk9yLep8Dd8cUYHUGAmN1sUeq87gndJyFsoeBdH11dWzB",
  "key17": "57dd3FhkKvFwd2ywyqczbq2SZq6tLW1UN4Jsr9srP8YEJR5cg7inMZn1KsG6s5Ts55zbEfK9Bvrj71onRmwEYUpM",
  "key18": "2ny9FxTJE7k1KDKTmVNJhsMHzwBD9Rqgv9YJeHV2cTrNDRbQEtpajZZkJoMvYxw61rkoe5T1EBA5ySj1M7xANpg4",
  "key19": "3UKwnpqELKWfk89dGvJqJA53QqrrNaG5HdgrjNLKXcLNXQTyqsLkFMCg3hdauaZaYdCPbaTUdC5UjNCbp7mkh5Ev",
  "key20": "5utxoN39uu6tcxabRhxRRYuCid7j88HoYLzViN4kF3yPKiWXybthMWVBzmxWXht8stGtyDkom8vacxB5Tx4Eq6TW",
  "key21": "3E1L2w5Euqj4L5etkRtTtfkPnKVrWkBhf7dP346KewsHLKBZJgf3WJPJQHAe2NhKpRa9TbrswfkGAzxDQkgkysPE",
  "key22": "3kpwAhmxU2xTWfURFe1BCVhvcSoVopmZqyhEnAmgXSLSzHVTQW8K7nxKYZcnMyaQCZa3iTMAK1e9n8U4tJSHoiH5",
  "key23": "4yVdZ1k2FXoCM85v1SiZqGmHqcgC478gohtUZDxXEDDSXHfmdDEm48jVyWsR6zxTgz15gne6gTm1uJcgD3pthAF5",
  "key24": "3RdqZwiL3dsyEPQo15DZT9SNhBSgtwetrcEijB1NZ7J2j2U5tCAzvVhX3mG1BMuFnnF6PeGTiV5BkqHVAHxYTrbq",
  "key25": "sEtYUE8XJ3TD5MrYTUYnFjHhx9iyP1BygzybXzQt9LW7Luar3Qiy9MkGbRojH6gLxiDj4B5CS6be954eHuex6PH",
  "key26": "5oWkgPfMZgb8fNDMiAL9wFTw4DxHVzL27W6ZNFeRenasT5KxhQKKQbfSECcD9tTPpimEGrHi1MkHRE13QdHzPHQg",
  "key27": "5GELmvMyAtbp1tzUCzSLdHaHW7yJL2GSZgW7E37VuBE8oso13LfreuNF3ChCT3J6kcF7kDvaCr129drJyk21AEVE",
  "key28": "5uRhwLJfTyermn2tZ4P5tchhAwVwTrjWE7vmcTmQv2WSntmsC7SYXGYw7QrtgjF9bRerx8wqBtbktCLrCqa9j83X",
  "key29": "2Yk513TiHFMADRddLxLS94XmMsWpHUTwpJFFobofshnd6Pnz8NPugVuq7xwuYmb6FfUrTubPh6HtVRLxX4oz7umZ",
  "key30": "4iiq3rEevuAd98SHithcaAcNirUN3ASMCmiM3MMhUa7WrFRwHMh9DJisv4fwrApQEk8YX82X5Xb4DTiU6Qyb7p3M",
  "key31": "41WCTsqmMN7XHWTfai24HUmau7xzZiHWC1oPT1rWzvZZkrqH5pFV28Pt7v3pLZvkvprpyw92D6x5pBfgUJeJcV4s",
  "key32": "3endsv16BmT9LqNJtvFspEzPk8Pf3E4u8kJbesTKzAi1LPuUuUQJmW6KsBqtaRfwxSuLs93rAg396fULqAgBngWS",
  "key33": "2nkXzNo3H3uY62gLP1D5LVm5xuLiTWXiozz8oPU7oyrg5UyXiXzubvFXLq8EqFZu3Ca2J1VQNnZ54kXvtjjMVFbz",
  "key34": "Fn6eVH8AsRz4ESiXFHY6ziT24Z9gCZoE4Mt9m7cpBda599bFNcoKwy4s7fhGG9n9FQzsFKf2b9MecYArJNtCtDV",
  "key35": "2Ehkn9uvwPMVsknDgc4DwBNco1xKotjZnFcLUgcKKTtswEcLKk5fZXGU4XxcCQzJGJFERfTbhe6WMNzPSyZ3ar1D"
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
