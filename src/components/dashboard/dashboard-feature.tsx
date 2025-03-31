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
    "4zgxLhBfiNjrPfM52dKw9yQiop7wPkysPuzpY4L8kk1C4Gjp5SDiwrH78BsSaf6So6gcVRRkNCoEbmDr5T1hCwUq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mnUDzyMuPL8aPhCHjbypMtQe8FbYVeNTNokUaHSWTy7K1wL1HrNK3sMCyeWF53PkFuZdVuiAtcHTKreAwcL7sFM",
  "key1": "3foD1XhxTqSwjMTYALrbiBPVnpj2jku9Kf6cxFnWBGNEXwz4UCFT1hfe84fGzJi1B71mprwqyjRAgkwsVhPbA64G",
  "key2": "KSPeReqVQT6rgL6arb9ReeYRVxFXdhweinmFFxhTHZp6isYXgt34YCkRQ2whoN6V57X8qEMMxDzti68TTmEp1gH",
  "key3": "5mRKX3bJfWybNcAHbdptrn9auKHCHkVPiFHBUFSvsRYeVgm6PYZswheUQLedAx7SodQhJmUNr1q8H5LRepn8SxK7",
  "key4": "53h8rdCJWd1m4Loz8RqoiAn54vx46egRrgBmirYzerRXUtBXwTq4GDBYzgXpaDM4HmSMzN6SwtYQdy8s41LNrtML",
  "key5": "3E9ma2229hEGmncoaFbJsMidKhmMScryKdzzkLScAQmdnERCxFWDZDsezoacghDeUUopeiNZnrGsWfDyXsPQtQ1E",
  "key6": "2pgknyaod1eMv9mAE4kLiXH84ZgTMLHruy3XEWJW64iZiDxMZE4qUTnURfLsmVVh2KTipvysKe7Ei3tNbY3YEvru",
  "key7": "5cZcUCJoihGuFGfKK2dZ2td1Z8napBYwqckNb2NaRsRrxbZ3h5p4d3Y7JmwiXHup9a6XJ32m5F8F3wAbekDHgixM",
  "key8": "3b9bMN1nkUJJJw2JUPfXdns3Hr1vKcxSFN4tWduhn5RJ4MqNXKustHBggahcn621F3H5AYWFbQSzn7ur9LCpiASq",
  "key9": "vrF6aw55cE6pSEvyLswWaaHFa9W4DvKpXKn5XYu7VZFvzheqm7PQ9ArA3Q6tU7iw2zvwaEvtxLwaAJ4FGApz41P",
  "key10": "5prgoVKpasPxxUDvLRek2ntspPKZGjGiPZ4PgNN6zvRyMsCgZQfJLJh1fYvkYyMcUPPQHemNwWG7fAbEY58ojAcv",
  "key11": "CEEpUQEYZB6cb2FRBxuNFECn51wrH7AFQFLpnwR81UgXeetgVUXKX2D2oFoEXbpz5tcsEgwd67HWsyhMMyvFx1f",
  "key12": "2Kb5z73V8TnxBgEdhJrqsZTgFm9z29bej6BgsoP3eetPdCgyoyuR5uruw53ZtAQdtg9pRpH2wxjUH2eNWqZtc3ik",
  "key13": "4Zuy5UUNjwUAhN1wsh5UdMmycg1cqXsWqYZVQXt9Q4zNv6qfGmzsK7beZok9djBQKqsMpbJ2LNLCqr8uwjVEvYeF",
  "key14": "4zz7jJMoRZF4NtmmGbDeSbsJEqWoSg389eAdWXk85ww9AfZMbceyuqFeiHv69j7c5eaaPk6MNzsDkJSiBB7YPo2p",
  "key15": "41qzZLpu3uS3VcAEuHagh5mvMXK8iwMXxXsweG54Gvix1S2XDuqK1oxDgTGLxyTnRMb6v4nH9cwDK32SyTgT6qgg",
  "key16": "3MkR4JWsu7vSDpGm8LqeFMRtoTgWrBSvc1NtHeb2xJqKkzfQafWzMMiNa4Vpj89P88s1VUMJZ3ktK53w6UrsbhQt",
  "key17": "5K6NtXZvha946ZSfx9S7Wdyj8BU9wj5oXnVzgnpN7V2HLWNNeUMPsrugkBK6oNZBVfdyWchwHkHTYfRJbb72wv5q",
  "key18": "5N85BzNHdbsHTNo9etSqHLNPK8T1kApgSR8bN9eZYBmoCHAFUUHujJzzaNwHsQk2xZF63CnyLgTYY8cuok9YH7Dt",
  "key19": "51UqJbwc7wbjR93bbiWYz9Ldz1smjg58ZyfbRPFwuPzc58FEaETbkEAF9kadBsMB4DRyiucUxU3zoKoZFafUZTLg",
  "key20": "2ZDBacgMhjvKPDhd1XK5GSfuzDw8HN9e3k1pKB5KGyt88CoDNte6u43imXxhDnhJScEzUCtFZpPRoKjCYFJVb4qA",
  "key21": "3CHL4vsnKCwSfg71ZorYusLN4A9ydEo7WSLCtd17KTd3DFKZQV3aGavGhRjq3YknEET6zzSgDLozTqtJPbXziC4",
  "key22": "5LJL9QKKsSjhkvJr72zdg3zsDVLDxzTwNP7dbVTRyrRU2yGPS3JnzGNpRxfLs79FmYBNkrentuNCBMT2mNH3itup",
  "key23": "4oQUmLviPhfMU8aqTDWT9cF4A3eSMLjddpW1inAXtpnVCUdUm5GjiLHhMykTgQLMaDKJmcYj14fBZNoTXVohgeMd",
  "key24": "2XTPAb4NVKBLoCeMc1gvYheodvy3YvpMXWqKQM4JpJ4x2cTD64EsZqCUPepDDGmpiJ5hD1SGbbVdzGKUqXNC7PGS",
  "key25": "nyaK8cuy24EUWP4aWfsUxKcta8FbcFuh1k7pPX5tRF7mLrc5QVQhBUyX8mBpamz32jYrHFfUrLXR4P4mZK73UvP",
  "key26": "2FEDcuPc1QfDtBNAWQn18wjCtRpDgC1U1igZSVPyvNnFutv6AWjtPz2YET3owpcEcjgTxafWcsRHUjA7g17vAvcD",
  "key27": "3qQYS8JYaR2vUdG2YVDVe2iU7RCbMXTUzuxdwXvxr1qS8kBfehkdqtZmCTRbuFAM5FefHaXoVjCeTZE5r4DneC7A"
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
