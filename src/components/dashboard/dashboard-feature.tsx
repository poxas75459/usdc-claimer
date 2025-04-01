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
    "3JbYr2U6JS3SZmscDXMGcniND4pPZcxAnjmpP5syZ1gpYpfj7vG7AXXqKjPbv8tocJ3Car2KSaJPbNpUUQwSmYbq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XRUJHNSFsT3FqCAq95k1XBPbLpzzdqR23iGjVt18KMRwLRz1LbnViGeU6zt9NKnXy6dYjN1qENKW5Nod6Taw3va",
  "key1": "2vZ2r9sMbBNkFisqh2PUuSbeXWUankbWYT9iwN4hGRqYboQngAy2RqrvMfH9bWmyzVC7yZAFZXPJPFLBkkgQ58ob",
  "key2": "39HXgX3pLwaQE1o9bm8J6gim2ceA2uhirX13uppNqXHaj1NUNV4nPKRLijMPuigZS2A2chuVGG4iJoWjUwfAE5Wu",
  "key3": "73s3e3KDwr22XoNED3mWKUJSYD8ryDu9QvCMyZSofErkmbFz73mEwiy2oFhY6gVN8YTbBVCgwP8xrvb5vb8xKjo",
  "key4": "41aVb4ajMkdViyENp4GrWZppHoZgMGRSMu3sjRYFaTpKfaHmB7CbhovbnhvqmjdjJU2PpX3F2XvUWfJi3YGCk6bF",
  "key5": "5mEz22DPi8tmqkk7eq8z4n4Gt9JL4W5d3BAzCQbsVuYsSaeRVa7eGRDWZZsVtzcHhygRDEvB2nWCMKTViQTeWHpo",
  "key6": "2RnfmKsKfFCRsp5qNzRcACGv7w2F6AmmAWPZbmzhtr9mxRR7yPVrZ7JWKpmqhnh1DkBU3YqovUbuGyZF4N9zP1NY",
  "key7": "61nmATretDHscabCYuQPNZpeXQUXPfAKyxdTQqZh7zJpAVWSECgMi7nBxZwypGEke38xanQNRufxhcP39obLZPZc",
  "key8": "36VifRRgDu12StnFXzGf1eZxg3sHy2ZPrLYWE9SseHExzACUQAF7XBGgfrYRasdSvkY49JUGV6WKe7gdGbS2WBKZ",
  "key9": "S3p5GV1vnbSK7iwAmmSTyx8bKtc6cvK58KQRqq9Pv8SatNGBR2qsMpBMNx16uT7zZ2LhZfi1UDrPFXkVc3yf437",
  "key10": "jzQq9MeDJZaUiniGmCa7WznLzYkgXmqTnFAh4heuZtnWn42wBMFvJHVsxmDSfvMFw1etANuSpF4LP4r16zG6fm6",
  "key11": "2pcCUgSB5esCrfqTdSxiLCP8tzzqArrpKMmNwkHLJnUqpjvCMmYvNFZcz5BQz1Da28kHB33dy9gzt9X5XhubgKDk",
  "key12": "ByLUUhQYY7EhwJVcpznofrt4twoQba8cW2kiVAGK89XcyetraC4TqH5f3gHXRU5Kv1NJZcdp3xRRrPS8519bzMW",
  "key13": "2an55G2CESNVRB4P8xy1PSp3zx2SPKdrvYjXcNPhLZyKhEiMAduf7rH3vLTYksn79v95NvcGm9qZpjwjm4on5GCp",
  "key14": "49FSLmCDP2kh6uxuvtjHgaXUsAuZxxZXofvmbLUF6WYsp6K2orGZgeXrNLADXdp5t42oNUALESuWwtcVJTBja3LL",
  "key15": "5Ydq641s5pLkqj37gSzFviYc2FTEBS7kLNg38DZQsRDonsCyvuGcjoyh2GK1ho1C1krXK1Vw5SKi4yC42w9g2k1E",
  "key16": "4RzLs9iUNjEXh5VzBAiuVNSLNK1zsDYEUdUHxjrndBVgX7yAokNqLPKEazYeBBb7eebLKb6B97sFo6raH4PDH28g",
  "key17": "37Wp1zxsdAYEqYjKdJRC5Hm8naRJM9LmDXw9TyDS65YaQuL7BzzgEyYEJuWpxMcewcuhhcEjYMeMCt7B9G6WjxsM",
  "key18": "5ced3APNcsPEYJCwKuhGjKafMJrNNWtoyQpANentewcJeDNquXuGFBZRbP667CqNCndPRhZRydZ9zfNXkHhmwkSS",
  "key19": "52eyacncnzsNKuUBvrqji9xk49HLeXWpg9sR6qMdkrGKEyab5yQUkHc6UeuRLhc15Y1DqLS1q9RuZKZdHVGyehBn",
  "key20": "2VQpdjf2R8RtqqNa6rngxvERCTqeGajf6566x1KQKyNjqnP9x2aexepRnRBnbYXfbeR34QBpu8tEmLW6TfknAb4E",
  "key21": "52SvBZpeoC7bUtiC8NUbgHRBfQrQ1iW4oFgcPsrhVKGZrzjF6tuZnAza5w2wgQVAMg3CcYXivBNdtU1Si8mTvsX8",
  "key22": "rcNiucKU8iZBgTfCtokTFtsbMS1nWMAhyyfgs4xpcJPw478MbqDTkc9bDNYyZdV9yAbACGDg9iQSrUMtXvFxFYf",
  "key23": "3Rv5s2GXtyFLi7fgwsQKrebUJXrUaKWh22Xos6wwQX2RdNQjKDwLkrxa7BaRgLQZT5FGVkxYA1x8DHsgkDwjzHU",
  "key24": "2C2Vv9wW4bktwHK9J1NxJLXLZrUD6H5if1cZG9jhv2hHyinhcFwZmLCtd6bdZudpMtzmKrkjLYmAoaeikXBiht5j",
  "key25": "3R7Mx4V9xGGJMMcTHwK7EdYAu1FTtXP8TT5Xo7oKn7aL73HDhRmiEa9DVGfrLLqQJjKWRyKsb8zhKydX3vp17tkk",
  "key26": "q1CXX8m2H2nuwCx1JHNckNAvHcykTdujQQeuyMEQruqakSYo5ADHssSUsi8JzGBwmijbe22nbsjkB6PsbaYaDPb",
  "key27": "4YuRM4rhVrRp1zUhaHGowYkyciJEBdX7Um3yJWkGAsYJMRQtwqK2Xyu2VDUdvdKC7ovnaW7jkgmAunzQ4NZjCbWd",
  "key28": "5BNi8mfgJJMDqZZYi2NRP4TKtftdCj6ZS1ByWKFTeAtfZX73WkgdHepiT4hx7oo6eVaNYcYr9ii55PvkK86gwhbF",
  "key29": "36m3s3HvpRiwr461h2hTfmSEPyASNrRAYupQw9w3cDuA3fzSASNy8iRhMUrHSKJkpkTJNyuvSmQGF2w5BDQrPomM",
  "key30": "mA19bh24Lyxh8iaeLym9VBff32GrpSrVP1uJ5cFEz1V1G3trC7U6ViS4Zwuy2oPYqsFUbu3TCHVkV3dRba5LQnU",
  "key31": "3Sfmkta3xtEsZkDZobwi5SQyYsSR4g5BuqPmafr47UL8oRniArhMswUht73HoXPn2YueQ7ZLYjd4no2iWevupsna",
  "key32": "5N6CvRFFwWag1mgR1NCyt23YHmBkxv16UkiGCAcDhSGUVS7jd9xijMAH79dEPVtg6ue7ptfd7h9LShyXBvD1hQEL",
  "key33": "22twpqw6xJpWhRWTc99Y3PCrenffWyPx6ziez3ZXZYkVqP6UZUQe5eGMFi5uJG2U7hcDRLLeSXrd9vPhPKZXJwuU",
  "key34": "4As8hJhCXXFXywspSyQb6cA6jgCppA9edc9WAWVaNn2s6kiAkqv1K7KPTWUN3G2omTFtSGvinn8N2EsSdNHJpGeA",
  "key35": "2Mw2TZf2EkFenwTNZskVvUBTb1fTEgeYhqkREZFWNsTcuQmmAyJhkqAe7m6HRDhabDnx58uoHeyDL7fSP96yusDt"
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
